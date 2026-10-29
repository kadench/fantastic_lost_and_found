# Contributing to Lost & Found

This document summarizes the contribution workflow. The root [AGENTS.md](AGENTS.md) is the governing project specification and contains the detailed architecture, visual, accessibility, artwork, and code-quality standards. **Only the repository owner may authorize modifications to `AGENTS.md` or this policy document.** Contributors and agents may propose amendments, but may not implement them without approval.

## Before changing files

1. Read [AGENTS.md](AGENTS.md) and inspect the relevant current source files.
2. Treat a direct repository-owner request as authorization for local, reversible work within its stated scope.
3. Consult [BACKLOG.md](BACKLOG.md) only for work already tracked there or work substantial enough to benefit from tracking.

Routine edits do not require separate approval, a start notice, or a task record. Ask before a material scope expansion, governance change, dependency change, security/privacy-sensitive change, or destructive operation.

## During development

- Follow the source formatting and accessibility standards in `AGENTS.md`.
- Keep source readable, focused, and free of AI-generated artwork.
- Test relevant UI, interactions, responsive behavior, and accessibility. Clearly identify any checks not performed.
- Keep personal data, machine/device information, credentials, and raw identifying logs out of project records.

## Completing work

1. Report changed paths, relevant verification, unrun checks, known risks, and practical rollback guidance once at the end.
2. Update `BACKLOG.md` only when the work is tracked there.
3. Update [CHANGELOG.md](CHANGELOG.md) only for a release, major user-visible change, or an explicit owner request.
4. **Stop before any Git commit, push, merge, or pull request.** Obtain explicit owner permission for each intended operation or clearly identified batch. Permission to edit does not include permission to publish.

## Works without GitHub

Neither GitHub nor Git is required. `BACKLOG.md` supports optional planning, and `CHANGELOG.md` preserves release-level history. With local Git, a task-specific branch is optional. Where feasible and permitted, use a non-personal project alias for Git identity; do not misrepresent identities where real attribution is required.

## Policy questions

When instructions conflict or a protected action is unclear, ask the owner rather than changing policy or taking the risky action. For small, clearly in-scope implementation details, exercise normal engineering judgment. Do not invent approvals, tests, or change history.
