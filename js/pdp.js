const SHEET_ID = "1LgzMyrQwCQs6pbGASxL4dwbeRqfvFDgiQ1ksC3tu8oo";
const SHEET_GID = "1874400783";
const ADMIN_CONTACT = "lostfound@example.com";

const statusMessage = document.querySelector("#pdp-status");
const itemDetail = document.querySelector("#item-detail");
const itemImage = document.querySelector("#item-image");
const itemImagePlaceholder = document.querySelector("#item-image-placeholder");

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("status--error", isError);
}

function normalizeImageUrl(value) {
  const source = String(value || "").trim();
  const driveId = source.match(/drive\.google\.com\/(?:open|uc)\?(?:[^#]*&)?id=([\w-]+)/)?.[1];
  return driveId ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w1200` : source;
}

function formatPhoneNumbers(value) {
  return String(value || "").replace(
    /(?:\+?1[\s.-]*)?(?:\((\d{3})\)|([2-9]\d{2}))[\s.-]*(\d{3})[\s.-]*(\d{4})/g,
    (_, parenthesizedArea, plainArea, prefix, line) => `(${parenthesizedArea || plainArea}) ${prefix}-${line}`
  );
}

function loadSheetTable() {
  return new Promise((resolve, reject) => {
    const callbackName = `lostFoundPdp_${Date.now()}`;
    const script = document.createElement("script");
    const endpoint = new URL(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq`);
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("The case board timed out."));
    }, 15000);

    endpoint.searchParams.set("tqx", `out:json;responseHandler:${callbackName}`);
    endpoint.searchParams.set("headers", "1");
    endpoint.searchParams.set("gid", SHEET_GID);

    function cleanup() {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();
      if (data.status === "error") {
        reject(new Error("The case board returned an error."));
        return;
      }

      const headers = (data.table?.cols || []).map((column, index) => column.label || `Column ${index + 1}`);
      const rows = (data.table?.rows || []).map((row) =>
        headers.map((_, index) => String(row.c?.[index]?.f ?? row.c?.[index]?.v ?? "").trim())
      );
      resolve(rows.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]))));
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("The case board could not be reached."));
    };
    script.src = endpoint.href;
    document.head.append(script);
  });
}

function showItem(item, uid) {
  document.title = `${item["What Item did you lose?"] || "Item details"} | Lost & Found`;
  document.querySelector("#page-title").textContent = item["What Item did you lose?"] || "Unlabeled item";
  document.querySelector("#item-kicker").textContent = "Community case file";
  document.querySelector("#item-id").textContent = item["Unique ID"] || uid;
  document.querySelector("#item-status").textContent = "Lost item / clue open";
  document.querySelector("#item-location").textContent = item["Where did you lose it?"] || "Location unavailable";
  document.querySelector("#item-date").textContent = item["When did you lose it?"] || "Date unavailable";
  const contactLink = document.querySelector("#item-contact");
  const formattedAdminContact = formatPhoneNumbers(ADMIN_CONTACT);
  contactLink.textContent = formattedAdminContact;
  contactLink.href = formattedAdminContact.includes("@") ? `mailto:${formattedAdminContact}` : `tel:${formattedAdminContact.replace(/[^\d+]/g, "")}`;

  const imageUrl = normalizeImageUrl(item.Image);
  itemImage.hidden = true;
  itemImagePlaceholder.hidden = true;
  if (imageUrl) {
    itemImage.src = imageUrl;
    itemImage.alt = `${item["What Item did you lose?"] || "Lost item"} image`;
    itemImage.onload = () => {
      itemImage.hidden = false;
      itemImagePlaceholder.hidden = true;
    };
    itemImage.addEventListener("error", () => {
      itemImage.hidden = true;
      itemImagePlaceholder.hidden = false;
    }, { once: true });
  } else {
    itemImagePlaceholder.hidden = false;
  }

  itemDetail.hidden = false;
  statusMessage.textContent = "";
}

async function loadItem() {
  const uid = new URLSearchParams(window.location.search).get("uid")?.trim();
  if (!uid) {
    setStatus("No case ID was supplied. Open this page with ?uid=ID-0001.", true);
    return;
  }

  try {
    const items = await loadSheetTable();
    const item = items.find((row) => row["Unique ID"]?.trim() === uid);
    if (!item) {
      setStatus(`No case file was found for ${uid}.`, true);
      return;
    }
    showItem(item, uid);
  } catch (error) {
    setStatus(error.message || "The case file could not be loaded.", true);
  }
}

loadItem();
