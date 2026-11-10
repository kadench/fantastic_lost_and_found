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
let itemCards = [...document.querySelectorAll(".item-card")];
const emptyState = document.querySelector("#empty-state");
const resultSummary = document.querySelector("#result-summary");
const sortControl = document.querySelector("#sort");
const caseCount = document.querySelector("#case-count");
const statusTabs = [...document.querySelectorAll("[data-status-tab]")];

// Change these flags when the demo should open on a different item group.
// Keep only one flag true so the starting state is unambiguous.
const DEMO_STATUS_VIEW = Object.freeze({
  lost: false,
  found: false,
  all: true
});

function getDemoStatusView() {
  if (DEMO_STATUS_VIEW.all) return "all";
  if (DEMO_STATUS_VIEW.found) return "found";
  return "lost";
}

let activeStatusTab = getDemoStatusView();
let latestPostedDate = new Date("2026-10-24T00:00:00");

function updateStatusTabs() {
  statusTabs.forEach((tab) => {
    const isActive = tab.dataset.statusTab === activeStatusTab;
    const isKeyboardTab = isActive || (activeStatusTab === "all" && tab === statusTabs[0]);
    tab.classList.toggle("status-tab--active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isKeyboardTab ? 0 : -1;
  });
}

function setStatusControls(status) {
  activeStatusTab = status;
  document.querySelector("#show-lost").checked = status === "lost" || status === "all";
  document.querySelector("#show-found").checked = status === "found" || status === "all";
  updateStatusTabs();
}

function syncStatusTabFromCheckboxes() {
  const showLost = document.querySelector("#show-lost").checked;
  const showFound = document.querySelector("#show-found").checked;
  activeStatusTab = showLost === showFound ? "all" : showLost ? "lost" : "found";
  updateStatusTabs();
}

statusTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setStatusControls(tab.dataset.statusTab);
    applyFilters();
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = statusTabs.indexOf(tab);
    let nextIndex = event.key === "ArrowLeft" ? currentIndex - 1 : currentIndex + 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = statusTabs.length - 1;
    nextIndex = (nextIndex + statusTabs.length) % statusTabs.length;

    const nextTab = statusTabs[nextIndex];
    setStatusControls(nextTab.dataset.statusTab);
    nextTab.focus();
    applyFilters();
  });
});

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
  const tabMatches = activeStatusTab === "all" || card.dataset.status === activeStatusTab;
  const categoryMatches = category === "all" || card.dataset.category === category;
  const locationMatches = location === "all" || card.dataset.location === location;

  if (dateRange === "all") {
    return categoryMatches && locationMatches && statusMatches && tabMatches;
  }

  const cutoff = new Date(latestPostedDate);
  cutoff.setDate(cutoff.getDate() - Number(dateRange));
  const cardDate = new Date(`${card.dataset.date}T00:00:00`);
  return categoryMatches && locationMatches && statusMatches && tabMatches && cardDate >= cutoff;
}

function applyFilters(event) {
  event?.preventDefault();
  if (event?.type === "submit") {
    syncStatusTabFromCheckboxes();
  }
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
filterForm?.addEventListener("reset", () => requestAnimationFrame(() => {
  setStatusControls(getDemoStatusView());
  applyFilters();
}));
sortControl?.addEventListener("change", () => applyFilters());

const itemDialog = document.querySelector("#item-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");

function closeDialog(dialog) {
  if (dialog?.open) {
    dialog.close();
  }
}

document.addEventListener("click", (event) => {
  const detailsLink = event.target.closest("[data-details]");
  if (!detailsLink || !itemDialog?.showModal) {
    return;
  }

  event.preventDefault();
  const card = detailsLink.closest(".item-card");
  const status = card.dataset.status === "lost" ? "Lost" : "Found";
  const description = card.dataset.description || "No additional description was provided.";
  dialogTitle.textContent = card.dataset.name;
  dialogDescription.textContent = `${status} item · ${card.dataset.locationLabel} · ${card.dataset.dateLabel}. ${description}`;
  itemDialog.showModal();
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

function loadSheetTable(sheetId) {
  return new Promise((resolve, reject) => {
    const callbackName = `lostFoundSheet_${Date.now()}`;
    const script = document.createElement("script");
    const query = new URLSearchParams({ tqx: `out:json;responseHandler:${callbackName}`, headers: "1" });
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("The public case sheet timed out."));
    }, 15000);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();
      if (data.status === "error") {
        reject(new Error("The public case sheet returned an error."));
        return;
      }

      const headers = (data.table?.cols || []).map((column, index) => column.label || `Column ${index + 1}`);
      const rows = (data.table?.rows || []).map((row) => headers.map((_, index) => {
        const cell = row.c?.[index];
        return String(cell?.f ?? cell?.v ?? "").trim();
      }));
      resolve({ headers, rows });
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("The public case sheet could not be loaded."));
    };
    script.src = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/gviz/tq?${query}`;
    document.head.append(script);
  });
}

function findColumn(headers, names) {
  return headers.findIndex((header) => names.some((name) => header.toLowerCase().includes(name)));
}

function cellValue(row, index) {
  return index >= 0 ? row[index] || "" : "";
}

function normalizeCategory(value) {
  const category = value.toLowerCase();
  if (category.includes("bag") || category.includes("cloth")) return "bags";
  if (category.includes("electronic") || category.includes("phone") || category.includes("computer")) return "electronics";
  if (category.includes("access") || category.includes("key") || category.includes("wallet")) return "accessories";
  return "other";
}

function formatDate(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.valueOf())) {
    return { iso: "1970-01-01", label: value || "Date unavailable" };
  }

  return {
    iso: parsed.toISOString().slice(0, 10),
    label: parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  };
}

function getStatus(row, statusIndex, rowIndex) {
  const status = cellValue(row, statusIndex).toLowerCase();
  if (status.includes("lost")) return "lost";
  if (status.includes("found")) return "found";

  if (statusIndex >= 0) {
    return row.join(" ").toLowerCase().includes("lost") ? "lost" : "found";
  }

  if (DEMO_STATUS_VIEW.lost && !DEMO_STATUS_VIEW.found) return "lost";
  if (DEMO_STATUS_VIEW.found && !DEMO_STATUS_VIEW.lost) return "found";
  return rowIndex % 2 === 0 ? "lost" : "found";
}

function safeUrl(value, protocols = ["http:", "https:"]) {
  let text = String(value ?? "").trim();
  if (!text) return "";
  if (!/^[a-z][a-z0-9+.-]*:/i.test(text) && /^[\w-]+(\.[\w-]+)+([/?#:]|$)/.test(text)) {
    text = `https://${text}`;
  }

  try {
    const url = new URL(text);
    return protocols.includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

// Match the Dynamic Grid Plugin's handling of Google Drive share links.
function normalizeImageUrl(value) {
  const firstImage = String(value ?? "").split(/\s*,\s*/)[0];
  const url = safeUrl(firstImage);
  if (!url) return "";
  const driveMatch =
    url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ||
    url.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([\w-]+)/);
  return driveMatch ? `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1200` : url;
}

function createSheetCard(item, index) {
  const card = document.createElement("article");
  card.className = "item-card";
  card.dataset.category = item.category;
  card.dataset.location = item.location;
  card.dataset.locationLabel = item.locationLabel;
  card.dataset.status = item.status;
  card.dataset.date = item.date.iso;
  card.dataset.dateLabel = item.date.label;
  card.dataset.name = item.title;
  card.dataset.description = item.description;

  const visual = document.createElement("div");
  visual.className = `item-visual item-visual--sheet item-visual--sheet-${index % 3}`;
  visual.setAttribute("aria-hidden", "true");
  const imageUrl = normalizeImageUrl(item.image);
  if (imageUrl) {
    const image = document.createElement("img");
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("load", () => visual.classList.add("item-visual--has-image"));
    image.addEventListener("error", () => {
      image.remove();
      visual.classList.add("item-visual--image-error");
    });
    image.src = imageUrl;
    visual.append(image);
  } else {
    visual.classList.add("item-visual--image-missing");
  }
  const visualLabel = document.createElement("span");
  visualLabel.textContent = item.title;
  visual.append(visualLabel);
  const caseNumber = document.createElement("b");
  caseNumber.textContent = `CASE ${String(index + 1).padStart(2, "0")}`;
  visual.append(caseNumber);

  const info = document.createElement("div");
  info.className = "item-info";
  const heading = document.createElement("div");
  heading.className = "item-heading";
  const title = document.createElement("h3");
  title.textContent = item.title;
  const status = document.createElement("span");
  status.className = `status status--${item.status}`;
  status.textContent = item.status === "lost" ? "Lost" : "Found";
  heading.append(title, status);

  const meta = document.createElement("p");
  meta.className = "item-meta";
  meta.textContent = `◆ ${item.locationLabel} / ${item.date.label}`;
  const details = document.createElement("a");
  details.className = "details";
  details.href = "#claim-note";
  details.dataset.details = "";
  details.textContent = "View details";
  info.append(heading, meta, details);
  card.append(visual, info);
  return card;
}

function updateFilterOptions(items) {
  const selectOptions = [
    ["category", new Map(items.map((item) => [item.category, item.categoryLabel]))],
    ["location", new Map(items.map((item) => [item.location, item.locationLabel]))]
  ];

  selectOptions.forEach(([id, options]) => {
    const select = document.querySelector(`#${id}`);
    const currentValue = select.value;
    select.replaceChildren(new Option(id === "category" ? "All categories" : "All locations", "all"));
    options.forEach((label, value) => select.append(new Option(label, value)));
    select.value = options.has(currentValue) ? currentValue : "all";
  });
}

async function loadRemoteItems() {
  const sheetId = itemGrid?.dataset.sheetId;
  if (!sheetId) return;

  try {
    const table = await loadSheetTable(sheetId);
    if (!table.rows.length) return;

    const titleIndex = findColumn(table.headers, ["title", "name", "item", "object", "what"]);
    const descriptionIndex = findColumn(table.headers, ["description", "details", "describe"]);
    const imageIndex = findColumn(table.headers, ["image", "picture", "photo", "upload", "file"]);
    const locationIndex = findColumn(table.headers, ["location", "where"]);
    const statusIndex = findColumn(table.headers, ["status", "lost or found", "lost/found"]);
    const categoryIndex = findColumn(table.headers, ["category", "type"]);
    const dateIndex = findColumn(table.headers, ["timestamp", "date", "time"]);

    const items = table.rows.map((row, rowIndex) => {
      const fallbackTitleIndex = row.findIndex((value, index) => index !== dateIndex && value);
      const title = cellValue(row, titleIndex) || cellValue(row, fallbackTitleIndex) || "Unlabeled item";
      const date = formatDate(cellValue(row, dateIndex));
      const locationLabel = cellValue(row, locationIndex) || "Location unavailable";
      const categoryLabel = cellValue(row, categoryIndex) || "Other";
      return {
        title,
        description: cellValue(row, descriptionIndex),
        image: cellValue(row, imageIndex),
        status: getStatus(row, statusIndex, rowIndex),
        location: locationLabel.toLowerCase(),
        locationLabel,
        category: normalizeCategory(categoryLabel),
        categoryLabel,
        date
      };
    });

    latestPostedDate = items.reduce((latest, item) => {
      const date = new Date(`${item.date.iso}T00:00:00`);
      return date > latest ? date : latest;
    }, new Date("1970-01-01T00:00:00"));
    updateFilterOptions(items);
    caseCount.textContent = String(items.length).padStart(2, "0");
    itemGrid.replaceChildren(...items.map(createSheetCard));
    itemCards = [...itemGrid.querySelectorAll(".item-card")];
    applyFilters();
  } catch (error) {
    console.warn(error);
  }
}

setStatusControls(getDemoStatusView());
loadRemoteItems();
