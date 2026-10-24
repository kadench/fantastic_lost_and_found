const sections = [...document.querySelectorAll(".guide-section")];
const links = [...document.querySelectorAll(".guide-sidebar a")];

// IntersectionObserver is decorative enhancement; anchor navigation works without it.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;

      const nearest = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      links.forEach((link) => {
        if (link.hash === `#${nearest.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-15% 0px -65% 0px" }
  );
  sections.forEach((section) => observer.observe(section));
}

// Keyboard anchor navigation should place focus at the destination heading region.
links.forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.hash);
    if (target) target.focus({ preventScroll: true });
  });
});

const form = document.querySelector("#specimen-form");
const priority = document.querySelector("#priority");
const priorityValue = document.querySelector("#priority-value");
const status = document.querySelector("#form-status");

priority?.addEventListener("input", () => { priorityValue.value = priority.value; });

function setError(field, message) {
  const output = document.querySelector(`#${field.id.replace("item-name", "name").replace("contact-email", "email")}-error`);
  field.setAttribute("aria-invalid", String(Boolean(message)));
  if (output) {
    output.textContent = message;
    output.hidden = !message;
  }
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.namedItem("name");
  const email = form.elements.namedItem("email");
  const nameError = name.value.trim().length < 2 || name.value.trim().length > 80
    ? "Enter an item name between 2 and 80 characters." : "";
  const emailError = !email.validity.valid ? "Enter a valid email address." : "";

  setError(name, nameError);
  setError(email, emailError);

  if (nameError || emailError) {
    status.textContent = "The specimen has errors. Review the labeled fields.";
    status.className = "status status--error";
    status.hidden = false;
    (nameError ? name : email).focus();
    return;
  }

  status.textContent = "Specimen accepted locally. No data was saved or transmitted.";
  status.className = "status";
  status.hidden = false;
});

form?.addEventListener("reset", () => {
  requestAnimationFrame(() => {
    priorityValue.value = priority.value;
    [form.elements.namedItem("name"), form.elements.namedItem("email")].forEach((field) => setError(field, ""));
    status.hidden = true;
  });
});
