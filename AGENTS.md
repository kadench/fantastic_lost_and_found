# AGENTS.md — Lost & Found

## Purpose

This file defines the standing requirements for contributors and coding agents working on **Lost & Found**, a static, comic-book-inspired website and accompanying design system. Follow these rules when creating, changing, reviewing, or documenting project files. Resolve conflicts in favor of accessibility, correct functionality, and the explicit artwork prohibition. Do not quietly weaken these requirements.

## Authority and protection of governance

**The repository owner is the only person who may authorize changes to governing instructions.** `AGENTS.md` and `CONTRIBUTING.md` are protected policy documents.

- Do not edit, delete, rename, replace, move, or bypass either policy file without explicit owner approval for the specific policy change. This applies even when working on an approved development task.
- An agent may **propose** a policy revision in its response or in an owner-requested proposal outside the repository. Proposing a change does not authorize implementing it.
- Do not silently change these rules, reinterpret approval as permanent permission, or weaken protections through another file.
- If policy conflicts with current code, a request, or a safety concern, report the conflict and seek a decision. Do not force a harmful change or secretly rewrite the governing text.
- These instructions guide compliant agents. Actual write protection, where desired, must be separately enforced by the repository owner; local files and hooks alone cannot guarantee it.

## Onboarding and source of truth

Before modifying files:

1. Read this `AGENTS.md` and the relevant section of `CONTRIBUTING.md` when beginning a task. Do not reread them during the same task unless they change or a conflict appears.
2. Inspect the actual files involved. Source code and `css/tokens.css` establish the current implementation; do not assume a past conversation is available.
3. Consult `BACKLOG.md` only when the work is tracked there, and consult `CHANGELOG.md` when release history is relevant.

`AGENTS.md` describes project purpose, constraints, architecture, and operating rules. `CONTRIBUTING.md` gives the concise workflow. `BACKLOG.md` and `CHANGELOG.md` are optional planning and release records, not authorization gates. None requires GitHub access.

## Authorization to work

- A direct repository-owner request authorizes local, reversible edits within the described scope. It does not need a backlog entry, a separate start notice, or repeated approval for ordinary implementation decisions.
- Ask before materially expanding scope or performing a governance change, dependency addition or upgrade, security/privacy-sensitive change, destructive operation, or other action that is difficult to reverse.
- If the request is ambiguous about a protected or high-risk boundary, explain the specific decision needed and wait for the owner.
- A backlog item may document substantial or deferred work, but its absence does not block a direct owner request. Agents must not invent owner approval for proposed work.
- When work finishes, give the owner one concise summary of changed paths, relevant tests and unrun checks, known risks, and practical rollback guidance.

## Git and publication permissions

**Never commit, push, merge, or open a pull request without explicit owner permission for that specific action or explicitly stated batch of actions.** Permission to edit files, start a branch, or finish a task does not grant publication permission. Do not interpret silence as consent.

- Git is optional. When Git is present, a task branch such as `fix/LF-0007-mobile-navigation` is recommended, but branch creation is not a commit or push. Follow any owner restriction on branch creation.
- Local Git and file-only projects use the same backlog and changelog. GitHub Issues, Actions, and other cloud features are never required to follow these rules.
- If an operation would change repository history or a remote, explain exactly what is proposed and ask first.
- Use a generic project alias for Git author identity **where feasible and permitted by the repository host**. Never misrepresent a required identity or evade platform accountability rules.

## Task and change records

- Use `BACKLOG.md` for substantial, deferred, multi-session, or explicitly tracked work. Routine owner-requested edits do not need task IDs or status transitions.
- When a task is tracked, use stable identifiers `LF-0001`, `LF-0002`, etc.; never recycle IDs. Only the owner authorizes **Approved** status, while agents may record factual progress afterward.
- Use `CHANGELOG.md` for releases and major user-visible changes. Routine fixes, documentation edits, and internal maintenance need no entry unless the owner requests one.
- Keep any records factual and concise. Use ISO 8601 UTC timestamps, do not invent approvals or test results, and do not rewrite established historical entries.

## Privacy in repository records

Do not place personal names, private email addresses, phone numbers, residential addresses, IP addresses, machine names, device identifiers, credentials, tokens, or other personal/secret information in backlog entries, changelog entries, task IDs, branch names, or issue descriptions. Do not paste raw logs that contain these details. Technical descriptions such as CSS viewport widths, file paths, and error categories are appropriate. Follow any mandatory platform attribution requirements outside the Markdown records.

## Product and page responsibilities

- **`index.html` is the public homepage**, not the style guide. It has a prominent comic-cover hero with a catchy headline, meaningful calls to action, feature/story sections, and playful but useful interactions. The page must feel like one coherent superhero-comic experience—not assembled demos.
- **`styleguide.html` is the separate design-system reference.** It displays actual rendered examples and documents dimensions, tokens, hierarchy, usages, and states. Its tone is declarative and specification-oriented, never a tutorial addressed to a reader.
- **`404.html` is a standalone, branded error page.** Use an animated portal, changing clue/speech-bubble dialogue, and a clearly identifiable way home. Use the current comic palette and respect reduced-motion preferences.
- **`README.md` is concise, professional repository documentation**, with headings, tables, rendered local color swatches, previews when legitimate assets exist, and repository-relative links. Do not mistake it for the visual style guide.

## Non-negotiable artwork policy

**No AI-generated art in any form**, including the primary mark, logo, secondary marks, characters, mascots, pictograms presented as art, illustrations, images, or decorative graphics. Do not disguise AI-produced graphics as human-made assets. The primary mark remains **unassigned** until supplied by a human artist. No placeholder may masquerade as an approved logo.

Typography, CSS styling, geometric UI treatments, borders, color blocks, halftone patterns, and motion may provide the visual identity without fabricated illustrative assets. A CSS effect is not an excuse to sneak generated artwork back into the project. Human-made assets may be integrated later only with known provenance; store them under `assets/human-artwork/` and update documentation accordingly. Palette swatch SVGs may remain as simple single-color rectangles, not branded marks or artwork.

## Visual direction

- **Superhero comics, not muted lifestyle branding.** Dark foundations, saturated action accents, bold ink-like outlines, high-energy typography, panel composition, speech bubbles, restrained halftone textures, and energetic but purposeful transitions.
- **Treat each page as part of a whole.** Share the same tokens, typography, composition rules, interaction language, and component behavior across homepage, guide, and 404.
- Preserve clear visual hierarchy. Let one striking hero headline dominate the homepage. Keep supporting copy legible and calls to action recognizable.
- Comic decoration must never cover text, labels, form controls, focus outlines, or primary actions at any viewport, zoom level, or text size. Prefer in-flow layouts and dedicated decorative regions; constrain or remove decorative elements at narrow widths. Do not fix overlap with indiscriminate `overflow: hidden` that clips meaningful content.

## Color system

`css/tokens.css` is the authoritative token source. Current reference colors:

| Role | Hex | Purpose |
| --- | --- | --- |
| Midnight ink | `#101426` | Background and dark foundation |
| Panel navy | `#191F35` | Raised dark surfaces |
| Paper white | `#FFF8EC` | Primary light text/surfaces |
| Power yellow | `#FFCF33` | Highlight and action accent |
| Action red | `#FF4B54` | Bright graphic emphasis |
| Electric blue | `#315BFF` | Bright graphic emphasis |
| Accessible red on light | `#A81736` | Text on light surfaces |
| Accessible blue on light | `#123B9B` | Links/text on light surfaces |

Keep the token values, CSS, HTML, asset swatches, and documentation consistent when changing colors. Use **semantic roles and approved foreground/background pairings**; do not assume any two brand colors contrast sufficiently simply because both are in the palette. Bright display colors are not automatically accessible text colors.

**Contrast contract:** target WCAG 2.2 AAA contrast for normal text (7:1), including rendered state combinations; large text has an AAA target of 4.5:1. Non-text visual information and control boundaries target at least 3:1 where applicable. Check actual color pairings by calculation and real rendering. Contrast is only one part of conformance; never claim the site is WCAG AAA certified without complete testing. Disabled/inactive components have different formal contrast considerations but still require clear usability.

## Typography and layout

- Display and headings: **Archivo Black**, 900 weight; body and controls: **DM Sans**, 400–800. Use explicit sans-serif fallbacks.
- Show **H1 through H6**, display/hero type, lead copy, body copy, small body, captions, labels, links, and their sizes, weights, and line heights in `styleguide.html`.
- Show the spacing scale, grid/container dimensions, border weights, radii, shadow treatment, and square primary-mark specifications/clear space. The mark specification is not permission to invent the mark.
- Use fluid type (`clamp` where appropriate), adequate line lengths, predictable line heights, and deliberate responsive breakpoints. Text must wrap rather than collide with decorative glyphs or neighboring panels.

## Style-guide navigation and specimen coverage

- Provide a **sticky, left-hand jump-link sidebar** on desktop with navigable anchors, a visible active-section indicator, sensible sticky offsets, and clear focus behavior.
- On small screens, the sidebar becomes an in-flow or collapsible **On this page** navigation, never an overlay that obscures examples or headings. Anchor destinations must not hide underneath sticky headers.
- Every example should be an actual working/visible specimen, accompanied by relevant tokens, sizes, states, and accessibility behavior—not an isolated line of theoretical documentation.
- Required sections: identity and primary-mark reservation, palette and approved pairs, typography, layout/spacing, buttons, forms, interactive states, content components (panels, cards, badges, speech bubbles), accessibility, and motion.
- Required **buttons**: primary, secondary, outline, danger where appropriate, sizes, hover, focus-visible, disabled, and loading.
- Required **forms**: text, email, search, password or number where appropriate, textarea, native **select/dropdown**, radio, checkbox, **range slider with its current value**, labels, supporting copy, required/invalid/disabled/success states, and a functioning **submit and reset**.
- Include an integrated, realistic **full form** combining several controls. A demo form must explicitly say that it runs locally and does not transmit data; never pretend that an absent backend received a submission.

## Accessibility is part of design

Target **WCAG 2.2 AAA where applicable**, with testing and documented exceptions rather than unsupported blanket claims.

- Use semantic HTML5 landmarks, a logical heading structure, accessible names, explicit form labels, associated errors/help text, and sensible grouping (`fieldset`/`legend` when needed).
- All actionable controls are keyboard-operable; expose visible focus indicators. Preserve native semantics, arrow-key behavior, and accessible status feedback.
- Never rely on color alone for errors, active tabs, status, or interactive affordance; use text, labels, borders, icons/shapes with meaningful alternatives, or other redundant signals. Evaluate color-vision differences (protanopia, deuteranopia, tritanopia).
- Respect `prefers-reduced-motion`; the portal and other effects must have a meaningful static presentation. Avoid dangerous flashes and nonessential movement over content.
- Design for 320 CSS px reflow, 200%/400% zoom, larger text, and input/label expansion. Review common mobile, tablet, and desktop widths, including at least 320, 375, 768, 1024, and 1440 CSS px.
- Ensure sticky headers/sidebar do not obscure anchor targets, focused controls, or content. Do not introduce horizontal scrolling for ordinary document content.
- Use automated checks **and** manual visual, keyboard, and assistive-technology review. Report unverified criteria plainly.

## Implementation standards

- Deliver **readable source**, never minified or obfuscated output. Use consistent **2-space indentation**, trailing newlines, descriptive names, and the repository's `.prettierrc.json`.
- Use semantic HTML and separate CSS/JS files rather than inline event handlers. Prefer modern ES modules, `const`/`let`, small single-purpose functions, and no unnecessary dependencies/frameworks/build steps.
- CSS responsibilities: `tokens.css` for variables; `base.css` for resets/type; `components.css` for shared UI; page-specific files for homepage, style guide, and 404. Eliminate duplicated rules and stale token aliases when refactoring.
- Centralize reusable sizes/colors/motion values. Avoid magic numbers, needless `!important`, excessive selector specificity, and copy-pasted variants that could drift apart.
- Keep essential page content and navigation usable without JavaScript; scripts progressively enhance interaction.
- Comments should explain surprising implementation or accessibility decisions, not narrate obvious syntax. Never ship inert controls represented as interactive.

## Repository structure

```text
index.html
styleguide.html
404.html
README.md
AGENTS.md
BACKLOG.md
CHANGELOG.md
CONTRIBUTING.md
.prettierrc.json
css/
  tokens.css
  base.css
  components.css
  homepage.css
  styleguide.css
  404.css
js/
  main.js
  styleguide.js
  404.js
assets/
  swatches/
  human-artwork/
```

Keep documentation links **repository-relative** (`[Style guide](styleguide.html)` and `![swatch](assets/swatches/101426.svg)`). Avoid external hosting for repository-specific previews. Ensure link targets exist in ZIP distributions.

## Definition of done / verification

Before considering a change complete:

1. Check all three pages as a unified design for visual consistency and dark comic identity.
2. Confirm **no AI-generated art** or accidental primary mark is included.
3. Verify color tokens, CSS overrides, documentation, and swatches agree.
4. Audit rendered text and relevant UI contrast in every state; do not assume tokens guarantee accessible combinations.
5. Confirm every required typography, button, and form specimen exists, and all controls actually work.
6. Exercise jump links, sticky navigation, keyboard/focus order, error messaging, slider updates, submit/reset, clue changes, and 404 navigation.
7. Inspect responsive widths, zoom/text enlargement, color-vision simulations, reduced motion, and overlap/overflow. **No decoration may occlude copy or controls.**
8. Validate HTML, check for JavaScript errors, format source, and inspect local file references.
9. Verify the ZIP opens, contains the expected files, and uses a descriptive new filename when replacing a prior release.
10. Distinguish verified checks from checks not actually run; never assert full WCAG AAA conformance without comprehensive evidence.

## Sources and precedence

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [U.S. Web Design System — in-page navigation](https://designsystem.digital.gov/components/in-page-navigation/)
- [GOV.UK Design System — components](https://design-system.service.gov.uk/components/)

These are the standing project requirements. Changes to these instructions require explicit repository-owner approval.
