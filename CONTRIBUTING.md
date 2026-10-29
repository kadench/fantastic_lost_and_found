# Contributing to Lost & Found

This document summarizes the contribution workflow. The root [AGENTS.md](AGENTS.md) is the governing project specification and contains the detailed architecture, visual, accessibility, artwork, and code-quality standards. **Only the repository owner may authorize modifications to `AGENTS.md` or this policy document.** Contributors and agents may propose amendments, but may not implement them without approval.

## Before changing files

1. Read [AGENTS.md](AGENTS.md) and inspect the relevant current source files.
2. Locate the task in [BACKLOG.md](BACKLOG.md). Only an owner-**Approved** task authorizes implementation.
3. Tell the owner what task is starting, which files are expected to change, and the intended effect.
4. If the task is not approved or work would exceed its scope, propose the change and request approval.

Approved work may proceed without seeking authorization for each minor edit. A material expansion of scope, security-sensitive change, new dependency, or governance change requires new owner approval.

## During development

- Follow the source formatting and accessibility standards in `AGENTS.md`.
- Keep source readable, focused, and free of AI-generated artwork.
- Record truthful progress in `BACKLOG.md` using UTC timestamps. Do not self-approve new tasks.
- Test relevant UI, interactions, responsive behavior, and accessibility. Clearly identify any checks not performed.
- Keep personal data, machine/device information, credentials, and raw identifying logs out of project records.

## Completing work

1. Update the authorized task's factual status in `BACKLOG.md`.
2. Record one task-specific entry in [CHANGELOG.md](CHANGELOG.md): exact changed paths, previous behavior, new behavior, reason, tests/results, limitations, risks, and rollback steps.
3. Report those results to the owner before proposing publication.
4. **Stop before any Git commit, push, merge, or pull request.** Obtain explicit owner/contributor permission for each intended operation or clearly identified batch. Permission to edit does not include permission to publish.

## Works without GitHub

The Markdown files are the task and change records. Neither GitHub nor Git is required. With local Git, use an optional task-specific branch (such as `fix/LF-0007-mobile-navigation`), but keep the same approval and documentation rules. Where feasible and permitted, use a non-personal project alias for Git identity; do not misrepresent identities where real attribution is required.

## Policy questions

When instructions conflict or seem incomplete, ask the owner rather than changing the policy. For small, clearly in-scope implementation details, exercise normal engineering judgment. Do not silently broaden permissions or invent completed approvals, tests, or change history.
