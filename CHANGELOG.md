# Lost & Found — Changelog

Permanent record of **releases and major user-visible changes**, organized newest first. It is not a transcript of development activity, and entries do not require matching backlog tasks. Routine fixes, documentation edits, and internal maintenance are omitted unless the repository owner requests an entry. This file is usable with or without Git.

Recorded changes are listed below. Existing entries are historical and must not be rewritten or backfilled with invented dates, tests, or approvals.

## LF-0002 — Add styled About Us page

- **Completed (UTC):** 2026-10-29T16:28:28Z
- **Related task:** [LF-0002](BACKLOG.md#lf-0002--add-styled-about-us-page)
- **Changed paths:**
  - `about.html`
  - `css/about.css`
  - `index.html`
  - `BACKLOG.md`
- **Before:** The homepage About links pointed to an in-page summary, and the project had no standalone About Us page.
- **After:** Added a comic-styled `about.html` page containing the supplied About Us copy, four empty square team-photo placeholders with accessible labels, shared navigation, and links back to the homepage sections. Updated both homepage About links to navigate to `about.html`.
- **Reason:** The project needed the Google Sites About Us content represented in the repository's visual system while leaving team-photo connections for later.
- **Verification:** Viewed the new About Us page in the local browser at desktop and narrow rendered widths; confirmed the supplied headings, paragraphs, team labels, and mission copy were present; confirmed four square placeholders rendered; clicked the homepage About link and verified navigation to `about.html`; checked no horizontal overflow and no browser console errors; ran `git diff --check`.
- **Not verified:** Prettier was not available in the local cache; exhaustive 320/375/768/1024/1440 viewport review, zoom/text enlargement, color-vision simulation, assistive-technology review, full WCAG AAA contrast audit, ZIP validation, and final human-photo integration were not run.
- **Risks:** The team placeholders are intentionally CSS-only and contain no image assets; the final human-provided photos still need to be connected later.
- **Rollback:** Revert `about.html`, `css/about.css`, and the About-link/summary changes in `index.html`; retain the task and changelog records as historical documentation.

## LF-0001 — Rebuild homepage around lost-and-found listings

- **Completed (UTC):** 2026-10-29T16:05:06Z
- **Related task:** [LF-0001](BACKLOG.md#lf-0001--rebuild-homepage-around-lost-and-found-listings)
- **Changed paths:**
  - `index.html`
  - `css/homepage.css`
  - `js/main.js`
  - `BACKLOG.md`
- **Before:** The public homepage presented a comic campaign hero, three mission cards, and a generic CTA without the reference page's lost-and-found browsing content.
- **After:** The homepage now includes the reference page's navigation, account notices, reporting hero, lost/found filters, status and date controls, sorting, eight case listings, local item-detail dialogs, report section, about copy, and footer navigation. The content uses the repository's dark comic tokens, typographic/CSS case visuals, responsive layout, and local-only interaction messaging.
- **Reason:** The homepage needed to contain the reference page's information and workflow while retaining the repository's current visual system and artwork restrictions.
- **Verification:** Viewed the rebuilt homepage and reference page in the local browser; verified eight visible listings; verified category filtering, lost-only status filtering, reset behavior, alphabetical sorting, clue cycling, item detail dialog open/close, account notice dialog, report-intent messaging, and no horizontal overflow; checked browser console for errors/warnings; calculated selected foreground/background ratios including paper on red (7.00:1), ink on yellow (12.37:1), blue-on-light on paper (9.36:1), and paper on panel (15.43:1); ran `node --check js/main.js`; searched changed source for external image tags, inline handlers, TODOs, and FIXMEs.
- **Not verified:** Prettier could not run because the package was not available in the local cache; exhaustive 320/375/768/1024/1440 viewport review, zoom/text enlargement, color-vision simulation, assistive-technology review, full WCAG AAA contrast audit, ZIP validation, and complete cross-page regression were not run.
- **Risks:** The account and reporting flows are intentionally local/demo-only; the contact link opens the example mail client address from the reference content, and no backend submission is implemented.
- **Rollback:** Revert `index.html`, `css/homepage.css`, and `js/main.js` to their LF-0001 parent versions; retain the task and changelog records as historical documentation.

## Entry format

```md
## LF-0001 — Specific completed change

- **Completed (UTC):** YYYY-MM-DDTHH:MM:SSZ
- **Related task (optional):** [LF-0001](BACKLOG.md#lf-0001--short-specific-title)
- **Changed paths:**
  - `index.html`
  - `css/homepage.css`
- **Before:** Describe the observable previous behavior.
- **After:** Describe precisely what now behaves or renders differently.
- **Reason:** Why the change was needed.
- **Verification:** List actual commands, manual checks, and their results.
- **Not verified:** Any tests or environments not checked.
- **Risks:** Known limitations or "None identified" (not a guarantee).
- **Rollback:** Specific files/sections to revert, or applicable Git revision if known.
```

## Recording rules

- Add entries only for releases, major user-visible changes, or an explicit owner request.
- A related backlog task is optional. When none exists, omit the `Related task` field.
- Record the exact repository-relative files changed and explain the change in concrete terms.
- Use ISO 8601 UTC timestamps. Never guess dates or manufacture test results.
- Report meaningful before-and-after behavior, not just "updated UI" or "fixed styling".
- Describe any regressions, accessibility concerns, or rollback considerations plainly.
- If a correction is needed later, add another task and entry instead of silently overwriting historical entries.
- Do not include personal names, private emails, IP addresses, hostnames, device details, credentials, or other sensitive information.
- A changelog entry does **not** authorize a Git commit, push, pull request, or merge.
