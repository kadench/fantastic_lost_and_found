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

_No completed tasks recorded._

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
