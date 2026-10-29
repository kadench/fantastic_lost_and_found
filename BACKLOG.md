# Lost & Found — Backlog

> **Optional planning record.** Use this file for substantial, deferred, multi-session, or explicitly tracked work. A direct repository-owner request authorizes routine local work without a backlog entry. This file works without Git or GitHub.

## Status definitions

| Status | Meaning | Who may set it |
| --- | --- | --- |
| Proposed | Work is suggested but not authorized | Owner or agent |
| Approved | Scope has been authorized | Owner only |
| In Progress | Authorized tracked work has begun | Agent or owner, on an approved task |
| Completed | Tracked work is finished | Agent or owner, on an approved task |

For tracked work, use sequential task IDs (`LF-0001`, `LF-0002`). IDs are permanent, including canceled proposals. Record dates in ISO 8601 UTC. No personal details or device identifiers. Routine fixes, documentation edits, and internal maintenance do not require task entries.

## Proposed

_No proposed tasks recorded._

## Approved

_No approved tasks recorded._

## In Progress

_No tasks in progress._

## Completed

### LF-0002 — Add styled About Us page

- **Status:** Completed
- **Created:** 2026-10-29T16:25:03Z
- **Owner approval:** Approved by repository owner on 2026-10-29T16:25:03Z
- **Objective:** Add a comic-styled About Us page containing the supplied source copy word-for-word and connect the homepage About links to it.
- **Scope:** `about.html`, `css/about.css`, `index.html`, and factual task/change records.
- **Acceptance criteria:** The new page renders the supplied Who Are We, Meet the Team, and Our Mission content without wording changes; presents four empty 1:1 team-photo placeholders with the supplied labels; uses the authoritative site tokens and shared navigation; and the homepage About links navigate to `about.html`.
- **Progress:** Created and browser-verified the About Us page, placeholders, and homepage navigation links.
- **Last updated:** 2026-10-29T16:28:28Z

### LF-0001 — Rebuild homepage around lost-and-found listings

- **Status:** Completed
- **Created:** 2026-10-29T15:54:16Z
- **Owner approval:** Approved by repository owner on 2026-10-29T15:54:16Z
- **Objective:** Bring the complete lost-and-found browsing experience from the reference item page into the public homepage while preserving the repository's comic-book design system.
- **Scope:** `index.html`, `css/homepage.css`, `js/main.js`, and factual task/change records.
- **Acceptance criteria:** The homepage contains the reference page's navigation, reporting hero, filters, sorting, eight item listings, local detail dialogs, report section, and footer; it uses the authoritative comic tokens and accessible responsive layout; controls work without a backend or data transmission.
- **Progress:** Rebuilt the homepage structure, comic styling, and local interactions; verified the rendered page and core behaviors in the local browser.
- **Last updated:** 2026-10-29T16:05:06Z

## Optional task entry template

Use this structure only when tracking adds value. A planned task begins as **Proposed** until the owner approves it; a direct owner-requested task may be recorded as **Approved** with its factual approval time.

```md
### LF-0001 — Short, specific title

- **Status:** Proposed
- **Created:** YYYY-MM-DDTHH:MM:SSZ
- **Owner approval:** Not yet approved
- **Objective:** What outcome is needed, and why.
- **Scope:** Exact known files, components, or areas; use "to be determined" if uncertain.
- **Acceptance criteria:** Observable behavior required for completion.
- **Progress:** Not started.
- **Last updated:** YYYY-MM-DDTHH:MM:SSZ
```

When approved, replace `Owner approval` with an explicit indication that the owner approved this task and the UTC approval time, if known. Do not infer authorization from an unclear request. Record only meaningful milestones; `In Progress` updates are optional. A completed task needs a `CHANGELOG.md` entry only when it is a release or major user-visible change.
