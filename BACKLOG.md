# Lost & Found — Backlog

> **Proposal template.** No tasks are approved by this document. Only the repository owner may approve tasks. This file works without Git or GitHub.

## Status definitions

| Status | Meaning | Who may set it |
| --- | --- | --- |
| Proposed | Work is suggested but not authorized | Owner or agent |
| Approved | Scope has been authorized | Owner only |
| In Progress | Authorized work has begun | Agent or owner, on an approved task |
| Completed | Implementation and change record finished | Agent or owner, on an approved task |

Use sequential task IDs (`LF-0001`, `LF-0002`). IDs are permanent, including canceled proposals. Record dates in ISO 8601 UTC. No personal details or device identifiers.

## Proposed

_No proposed tasks recorded._

## Approved

_No approved tasks recorded._

## In Progress

_No tasks in progress._

## Completed

### LF-0001 — Rebuild homepage around lost-and-found listings

- **Status:** Completed
- **Created:** 2026-10-29T15:54:16Z
- **Owner approval:** Approved by repository owner on 2026-10-29T15:54:16Z
- **Objective:** Bring the complete lost-and-found browsing experience from the reference item page into the public homepage while preserving the repository's comic-book design system.
- **Scope:** `index.html`, `css/homepage.css`, `js/main.js`, and factual task/change records.
- **Acceptance criteria:** The homepage contains the reference page's navigation, reporting hero, filters, sorting, eight item listings, local detail dialogs, report section, and footer; it uses the authoritative comic tokens and accessible responsive layout; controls work without a backend or data transmission.
- **Progress:** Rebuilt the homepage structure, comic styling, and local interactions; verified the rendered page and core behaviors in the local browser.
- **Last updated:** 2026-10-29T16:05:06Z

## Task entry template

Copy the following structure into the section matching the task's status. A new task always begins as **Proposed** until the owner approves it.

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

When approved, replace `Owner approval` with an explicit indication that the owner approved this task and the UTC approval time, if known. Do not infer authorization from a request that lacks clear approval. Record only relevant milestones; avoid long activity diaries. Completed tasks remain indexed here and receive a corresponding `CHANGELOG.md` entry.
