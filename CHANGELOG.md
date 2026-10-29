# Lost & Found — Changelog

Permanent record of **completed project changes**, organized newest first. An entry describes one completed backlog task; it is not a transcript of development activity. This file is usable with or without Git.

No completed changes have been recorded in this proposed changelog. Prior work must not be backfilled with invented dates, tests, or approvals.

## Entry format

```md
## LF-0001 — Specific completed change

- **Completed (UTC):** YYYY-MM-DDTHH:MM:SSZ
- **Related task:** [LF-0001](BACKLOG.md#lf-0001--short-specific-title)
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

- Record the exact repository-relative files changed and explain the change in concrete terms.
- Use ISO 8601 UTC timestamps. Never guess dates or manufacture test results.
- Report meaningful before-and-after behavior, not just "updated UI" or "fixed styling".
- Describe any regressions, accessibility concerns, or rollback considerations plainly.
- If a correction is needed later, add another task and entry instead of silently overwriting historical entries.
- Do not include personal names, private emails, IP addresses, hostnames, device details, credentials, or other sensitive information.
- A changelog entry does **not** authorize a Git commit, push, pull request, or merge.
