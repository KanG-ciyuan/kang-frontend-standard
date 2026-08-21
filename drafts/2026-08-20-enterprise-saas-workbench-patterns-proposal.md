# Enterprise SaaS Workbench Patterns: Frontend Skill Supplement Proposal

## Purpose

Extend `kang-frontend-standard` for authenticated B2B SaaS, CRM, operations, workflow, approval, and data-management products.

This supplement does not replace the Skill's visual-design standard. It adds a task-flow and interaction-pattern layer so a workbench is not judged only by its first screenshot. The goal is a product surface that supports repeated work: orientation, search, filtering, inspection, action, recovery, and confirmation.

It applies equally to a first build, redesign, refactor, or repeated iteration. It does not require React, a specific component library, a specific reference source, or a redesign of a working interface.

## Problem Addressed

The current Skill already requires strong hierarchy, state coverage, mature references, responsive QA, and honest evidence. It does not yet provide operational rules for common workbench questions:

- When should a record open in a detail page, a split panel, a drawer, or a modal?
- When does a collection need text search, simple filters, or a composable property filter?
- What changes when a table enters multi-select or batch-action mode?
- Which interaction patterns should be studied for a CRM, workflow, configuration console, or collaborative work surface?
- How should the work proceed when a premium reference catalog is unavailable?

Without these rules, a model can make a visually polished dashboard that does not support the actual work.

## Reference Source Tiers

References are selected for the task, not accumulated as a checklist. Inspect only the sources needed to answer a concrete design question. Do not open a large visible tab set merely to demonstrate research.

| Tier | Sources | What to learn | Constraints |
| --- | --- | --- | --- |
| Real shipped-product flows | Mobbin, SaaSUI | End-to-end user flows, onboarding, settings, search, dialogs, panels, real state sequencing | Mobbin MCP is a paid, OAuth-gated capability. Use only when configured and authorized; never make it a required dependency. |
| Public enterprise interaction systems | Cloudscape, Carbon, Atlassian Design System, Fluent 2, Ant Design | Navigation, complex collection filtering, tables, drawers, bulk actions, command patterns, feedback, accessibility | Prefer official docs, examples, and repositories. Extract the behavior and rationale, not the brand identity. |
| Visual and editorial references | Refero and task-specific public references | Landing pages, product narratives, typography, visual character, marketing composition | Do not use these as the primary authority for authenticated workbench interaction. |
| Local project evidence | Existing components, verified product screenshots, current flows, tests | Reuse, baseline preservation, actual behavior, task terminology | Existing product evidence overrides a generic reference when the two conflict. |

## Page-Type Routing

Before choosing an external reference, identify the surface's dominant job. One product may contain more than one surface; route each one independently.

| Surface | Primary design question | Preferred reference tier | Default output expectation |
| --- | --- | --- | --- |
| Marketing, launch, or product-introduction page | Why should someone care and what should they do next? | Visual/editorial references | Narrative hierarchy, proof boundaries, clear call to action |
| Authenticated home or workbench | What needs attention now and where does work begin? | Cloudscape, Fluent, local product evidence | Current status, priority work, shortcuts, recent or blocked activity |
| Resource collection, CRM list, data table | How does a user find, compare, select, and act on records? | Cloudscape, Carbon, Ant Design | Search/filter strategy, table states, row actions, detail path, bulk mode |
| Record detail or review flow | How does a user inspect context and make a reversible decision? | Cloudscape, Atlassian, local product evidence | Clear identity, facts, history, permitted actions, confirmation and recovery |
| Configuration or admin surface | How are complex settings understood and changed safely? | Cloudscape, Fluent, Ant Design | Grouped settings, defaults, dependency explanation, validation, save and rollback feedback |
| Collaboration, tasks, comments, activity | How do multiple people understand ownership and change history? | Atlassian, Fluent, local product evidence | Ownership, status, activity trail, notifications, permissions, conflict visibility |

When the category would materially change the structure and remains unclear, ask the user before implementation.

## Workbench Interaction Rules

### Information architecture

1. A workbench must answer: where am I, what is the current task, what needs attention, what can I do, and what changed after I acted.
2. Use primary navigation for stable product areas, not temporary actions or filters.
3. Use a page title and concise context line to establish the active collection, project, workflow, or configuration scope.
4. Put primary action near the page title only when it is genuinely the main recurring task. Do not place every possible action at top level.
5. Show summary first, then support narrowing and inspection. Do not turn every landing surface into a KPI dashboard if users arrive to complete a task rather than monitor a metric.

### Collections, search, and filtering

Choose the least complex control that supports the task:

- Use text search when users normally know a name, identifier, or exact term.
- Use one or two simple selects when the collection has a small, stable filtering vocabulary such as status or owner.
- Use a composable property filter only when users genuinely need several properties, multiple values, operators, or saved queries.
- Make the active filter scope visible. Report result count, empty results, reset path, and server-side or local filtering when that distinction matters.
- Do not place a complex filter builder on a small static collection just because an enterprise design system offers one.

### Table, row, detail, drawer, modal, and page selection

- Use a table when comparison across multiple records matters; use cards or a list when scanning narrative items, people, or media matters more than columns.
- Keep row actions limited to frequent, low-risk actions. Put rare or destructive actions behind a clearly labeled overflow or confirmation step.
- Use a split panel or detail drawer for contextual inspection that benefits from preserving the collection and selection context.
- Use a dedicated detail page when the record requires a long history, multiple sub-sections, deep navigation, or several independent tasks.
- Use a modal for a short, focused, blocking decision or a small bounded form; do not hide a full record workflow in a modal.
- A drawer must have one clear use case. Avoid layering several competing panels on one page; a help panel, one or two drawers, and a split detail panel are normally the practical upper bound.

### Selection and batch actions

- Introduce row selection only when users have a real multi-record action to perform.
- On first selection, enter a visible batch mode that states the selected count and exposes only actions valid for every selected record.
- Disable conflicting per-row action menus while batch mode is active.
- Provide a direct deselect or exit path.
- Destructive, high-impact, permission-sensitive, or irreversible bulk actions require scoped confirmation, affected-record visibility, and an explicit recovery or escalation path when recovery is unavailable.

### Feedback and states

For every material user flow, design the following states when applicable:

| State | Must communicate |
| --- | --- |
| Initial or empty | Why nothing is present, what can be created or connected, and whether absence is expected |
| Loading | What is loading, whether existing data remains usable, and what action is temporarily unavailable |
| No search/filter result | The active constraint and a one-step reset or adjustment path |
| Validation failure | The field or rule that failed and how to correct it without losing useful input |
| Permission or scope restriction | What is unavailable, why, and the legitimate next action or owner |
| Save pending | That the action is in progress and duplicate submission is prevented |
| Success | What changed, where it can be reviewed, and whether a reversible follow-up is available |
| Server or network failure | What did not happen, whether data is safe, and retry, save-draft, or support recovery paths |
| Conflict or stale data | The competing version or source, the decision owner, and a safe resolution route |

Do not represent these states only with a toast. A transient notice is supplementary feedback, not a replacement for an actionable error, empty, conflict, or permission surface.

## Reference-led Workflow

1. Inspect existing project flows, components, terminology, and tests before external references.
2. State the concrete question to research, for example: "How should a CRM customer list support complex status and owner filtering?" or "Should record review retain the list in a split view?"
3. Inspect one or two appropriate sources from the table above. Record source, access state, relevant pattern, and the quality being adapted.
4. Translate the pattern into the product's own task, terminology, permission model, and data constraints. Do not transfer logos, brand vocabulary, private assets, or irrelevant features.
5. For a substantial workflow, show the user the important states and path at readable scale before implementation, unless direct implementation is explicitly requested or an accepted system already resolves the question.
6. Implement the actual interaction, not a static depiction of one happy-path screen.
7. Verify the main task plus representative empty, loading, error, permission, selection, success, and recovery states that apply to the feature.

## Access and Degradation

When a reference is unavailable, record the limitation and use the existing `Reference access fallback` order from `SKILL.md`.

Specific additions:

- Do not treat a premium screenshot catalog, an MCP server, login-only flow, or browser automation as necessary to begin design.
- Do not repeatedly retry a blocked source or open many browser tabs in the user's browser.
- For a real-product-flow question blocked by Mobbin or SaaSUI, first inspect a public enterprise design system that documents the same interaction; then inspect the local project; then ask the user for a screenshot or approved alternative if the difference is material.
- If no external source can be inspected, label the work as original interaction exploration rather than implying it was validated against shipped-product references.

## Implementation and Quality Gates

This supplement inherits all visual, responsive, accessibility, performance, and delivery requirements from `SKILL.md`. Add the following workbench checks where applicable:

- primary keyboard path works through navigation, filters, collection, detail, form, confirmation, and return state;
- collection results preserve or deliberately reset selection, filters, sort, pagination, and scroll position with a visible rationale;
- bulk mode has no contradictory row-level actions;
- detail view can be closed or exited without losing the user's collection context unless a deliberate route change occurred;
- permission, stale-data, and conflict states do not imply an action succeeded when it did not;
- loading behavior does not create layout shifts or misleading empty states;
- table density, column overflow, row expansion, and narrow-width behavior are tested against realistic content;
- the implementation includes no new design-system dependency unless it solves a maintained, repeated need and fits the current stack.

## What This Does Not Change

- It does not force an enterprise look onto marketing pages, portfolios, customer-facing forms, or lightweight tools.
- It does not force Mobbin, an MCP integration, a paid subscription, or browser login.
- It does not mandate a left sidebar, a dashboard, a table, a drawer, a dark theme, React, Ant Design, or any other library.
- It does not authorize copying another product's source, brand, logo, private screenshots, or proprietary UI.
- It does not replace user research, business rules, authorization boundaries, or real workflow evidence.

## Proposed Merge Shape

After review, merge this content into `SKILL.md` as four concise sections:

1. `Enterprise SaaS Workbench Routing` after `Design Reasoning`.
2. `Collection and Detail Interaction Rules` after `Components and Design Tokens`.
3. `State Matrix` inside `Implementation Quality`.
4. `Reference Source Tiers` and the specific degradation rules inside `Reference-led exploration` and `Reference access fallback`.

Do not create a separate Skill. This is a task-specific extension of the existing general frontend standard.

## Acceptance Criteria for the Future Skill Update

- The Skill routes workbench pages separately from marketing or portfolio pages.
- It chooses interaction patterns based on the user's task and data complexity, not a visual template.
- It instructs the agent to inspect only relevant mature references and records actual inspection evidence.
- It works with or without Mobbin MCP and does not require paid services.
- It covers collections, filters, tables, details, drawers, modals, batch actions, and complete operational states.
- It preserves the current Skill's openness to first builds, redesigns, and multi-iteration work.
- It does not conflict with existing visual-direction, baseline-preservation, evidence, accessibility, or performance rules.
