const clues = [
  "PSST... START WITH THE CLUES.",
  "A LITTLE CURIOSITY GOES A LONG WAY.",
  "YOUR NEXT CLUE IS RIGHT AROUND THE CORNER.",
  "EVERY HERO STARTS BY LOOKING CLOSER."
];

const clueButton = document.querySelector("#hero-quip");
const clueMessage = document.querySelector("#hero-message");
let clueIndex = 0;

clueButton?.addEventListener("click", () => {
  clueIndex = (clueIndex + 1) % clues.length;
  clueMessage.textContent = clues[clueIndex];
});

const filterForm = document.querySelector("#filter-form");
const itemGrid = document.querySelector("#item-grid");
const itemCards = [...document.querySelectorAll(".item-card")];
const emptyState = document.querySelector("#empty-state");
const resultSummary = document.querySelector("#result-summary");
const sortControl = document.querySelector("#sort");
const latestPostedDate = new Date("2026-10-24T00:00:00");

function sortItems() {
  const sort = sortControl.value;
  const sortedCards = [...itemCards].sort((firstCard, secondCard) => {
    if (sort === "name") {
      return firstCard.dataset.name.localeCompare(secondCard.dataset.name);
    }

    const firstDate = firstCard.dataset.date;
    const secondDate = secondCard.dataset.date;
    return sort === "oldest" ? firstDate.localeCompare(secondDate) : secondDate.localeCompare(firstDate);
  });

  sortedCards.forEach((card) => itemGrid.append(card));
}

function matchesFilters(card) {
  const category = document.querySelector("#category").value;
  const location = document.querySelector("#location").value;
  const dateRange = document.querySelector("#date").value;
  const showLost = document.querySelector("#show-lost").checked;
  const showFound = document.querySelector("#show-found").checked;
  const statusMatches = (showLost && card.dataset.status === "lost") || (showFound && card.dataset.status === "found");
  const categoryMatches = category === "all" || card.dataset.category === category;
  const locationMatches = location === "all" || card.dataset.location === location;

  if (dateRange === "all") {
    return categoryMatches && locationMatches && statusMatches;
  }

  const cutoff = new Date(latestPostedDate);
  cutoff.setDate(cutoff.getDate() - Number(dateRange));
  const cardDate = new Date(`${card.dataset.date}T00:00:00`);
  return categoryMatches && locationMatches && statusMatches && cardDate >= cutoff;
}

function applyFilters(event) {
  event?.preventDefault();
  sortItems();
  const visibleCards = itemCards.filter((card) => {
    const visible = matchesFilters(card);
    card.hidden = !visible;
    return visible;
  });

  emptyState.hidden = visibleCards.length !== 0;
  resultSummary.textContent = `${visibleCards.length} item${visibleCards.length === 1 ? "" : "s"} shown.`;
}

filterForm?.addEventListener("submit", applyFilters);
filterForm?.addEventListener("reset", () => requestAnimationFrame(() => applyFilters()));
sortControl?.addEventListener("change", () => applyFilters());

const itemDialog = document.querySelector("#item-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");

function closeDialog(dialog) {
  if (dialog?.open) {
    dialog.close();
  }
}

document.querySelectorAll("[data-details]").forEach((detailsLink) => {
  detailsLink.addEventListener("click", (event) => {
    if (!itemDialog?.showModal) {
      return;
    }

    event.preventDefault();
    const card = detailsLink.closest(".item-card");
    const status = card.dataset.status === "lost" ? "Lost" : "Found";
    dialogTitle.textContent = card.dataset.name;
    dialogDescription.textContent = `${status} item · ${card.dataset.location} · ${card.dataset.date}`;
    itemDialog.showModal();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

document.querySelectorAll(".close-dialog").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog(dialog);
    }
  });
});

const reportIntent = document.querySelector("#report-intent");

document.querySelectorAll("[data-report-type]").forEach((reportLink) => {
  reportLink.addEventListener("click", () => {
    const reportType = reportLink.dataset.reportType === "lost" ? "lost" : "found";
    reportIntent.textContent = `You are starting a ${reportType} item report. Contact the site administrator to continue.`;
  });
});

const accountDialog = document.querySelector("#account-dialog");

document.querySelectorAll("[data-account-action]").forEach((accountLink) => {
  accountLink.addEventListener("click", (event) => {
    if (!accountDialog?.showModal) {
      return;
    }

    event.preventDefault();
    accountDialog.querySelector("#account-dialog-title").textContent = `${accountLink.dataset.accountAction} is not connected.`;
    accountDialog.showModal();
  });
});
