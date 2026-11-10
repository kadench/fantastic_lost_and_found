const reportIntent = document.querySelector("#report-intent");
const reportType = new URLSearchParams(window.location.search).get("type");

if (reportIntent && (reportType === "lost" || reportType === "found")) {
  reportIntent.textContent = `You are starting a ${reportType} item report. Contact the site administrator to continue.`;
}

const submitForm = document.querySelector("#submit-item-form");
const submitStatus = document.querySelector("#submit-status");

submitForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitStatus.textContent = "Your demo response is ready to review. Nothing was transmitted.";
});

submitForm?.addEventListener("reset", () => {
  submitStatus.textContent = "";
});
