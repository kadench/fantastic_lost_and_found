const reportIntent = document.querySelector("#report-intent");
const reportType = new URLSearchParams(window.location.search).get("type");

if (reportIntent && (reportType === "lost" || reportType === "found")) {
  reportIntent.textContent = `You are starting a ${reportType} item report. Contact the site administrator to continue.`;
}

const submitForm = document.querySelector("#submit-item-form");
const submitStatus = document.querySelector("#submit-status");

submitForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(submitForm);
  const myDate = data.get('entry.1681815111');
  if (myDate) {
    data.delete('entry.1681815111');
    const dateObj = new Date(myDate);
    data.set('entry.1681815111_year', dateObj.getFullYear());
    data.set('entry.1681815111_month', dateObj.getMonth() + 1);
    data.set('entry.1681815111_day', dateObj.getDate());
  }
  try {
    await fetch(submitForm.action, {
      method: 'POST',
      body: data,
    });
  } catch(err) {}
  submitForm.reset();
  submitStatus.textContent = "Your report has been submitted. Thank you!";
});

submitForm?.addEventListener("reset", () => {
  submitStatus.textContent = "";
});