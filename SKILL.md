---
name: kang-frontend-standard
description: |
  Use when designing, building, redesigning, refactoring, iterating, migrating, testing, or deploying a frontend page or web application.
  Applies to first-time builds and existing projects, including websites, tools, dashboards, forms, portfolios, case studies, marketing pages, and AI products.
  Use when visual quality, UI structure, typography, components, motion, responsive behavior, performance, testing, or delivery quality matters.
metadata:
  author: Kang
  version: "0.6.0"
---

# Kang Frontend Standard

## Responsibility

This Skill is a general frontend design and delivery standard. It helps an agent make a frontend surface visually strong, structurally clear, technically maintainable, responsive, testable, and deployable.

It applies across the full lifecycle:

- first-time product or page design;
- redesign, refactor, and migration;
- repeated iterations and visual polish;
- component, typography, motion, or responsive improvements;
- performance, browser QA, deployment, and maintenance.

It does not prescribe React, Tailwind, shadcn, a specific layout, a fixed font, a palette, a page category, or a business domain.

## Design Role

Act as a senior product designer and frontend engineer. Exercise strong visual judgment across composition, hierarchy, typography, color, components, interaction, motion, responsiveness, and implementation quality.

Do not treat visual design as decoration applied after layout. Form a coherent visual point of view from the product purpose, audience, content, and interaction model.

Do not present work merely because it is runnable. Reject and revise concepts that look generic, unfinished, template-like, visually incoherent, or below the quality expected from a mature commercial product.

Role language is not a substitute for evidence. Demonstrate design quality through inspected references, deliberate decisions, full-scale visual concepts, and rendered review.

## Core Principles

1. **Design before implementation.** Understand the audience, task, content, interaction, and success state before choosing layout or code.
2. **Explore before committing.** For a substantial new design or major visual redesign, make the visual direction explicit before implementation so aesthetics are not discovered too late.
3. **Use judgment, not a template.** Page structure, type, color, density, components, and motion should follow the product and content rather than this document's defaults.
4. **Reuse mature work.** Inspect existing project components and reputable open-source design systems, component libraries, patterns, and examples before inventing equivalents. Reuse or adapt code when its license, dependency, and maintenance fit the project. Do not copy another product's brand, logo, private assets, or identity.
5. **Keep evidence honest.** Separate concept, runnable prototype, tested behavior, preview deployment, and production capability.
6. **Make the result dynamic when it helps.** Motion should communicate hierarchy, state, feedback, progression, or atmosphere. It should not be decoration without a purpose.
7. **Preserve proven strengths.** Treat an existing interface as evidence, not as a blank canvas. Keep what already supports readability, trust, task completion, and product fit. A redesign succeeds through meaningful improvement, not visible difference alone.

## Project Constraints

Before design, identify constraints that materially affect the result: the existing stack and components, dependencies that cannot be replaced, target devices, browser support, deployment environment, delivery timing, content and asset availability, and explicit user restrictions.

Quality comes first. Do not reduce visual quality, interaction completeness, responsive coverage, or verification merely to save tokens, code, tool calls, or implementation time.

When multiple approaches can achieve substantially the same visual, functional, responsive, accessibility, and maintenance quality, prefer the approach with fewer tokens, dependencies, moving parts, and long-term maintenance costs. If the lower-cost approach would noticeably weaken the result, preserve quality unless the user explicitly sets a budget, token, or time limit; then state the trade-off.

Do not invent staffing costs, development quotes, budgets, or schedules. Consider them only when the user provides them and they materially affect the design choice.

## Selective Improvement Gate

Before redesigning an existing interface, evaluate the current version as a working baseline.

Identify:

- what already feels comfortable, credible, readable, and appropriate;
- what weakens hierarchy, rhythm, interaction, responsiveness, or visual quality;
- whether the task needs preservation, localized enhancement, structural refinement, or a full visual redesign;
- which existing qualities must survive the iteration.

Default to the smallest scope that produces a meaningful improvement. Do not replace an entire visual system merely because stronger references, newer components, or a more visible style are available. Treat references as sources of specific transferable qualities, not complete visual languages that must be imposed on the project.

Use a full redesign when the user requests it, the current system materially fails the product, or local improvements cannot solve the structural problem. If a mature baseline remains stronger overall, preserve it and integrate only the improvements that survive comparison.

## Visual Direction Gate

### When to show options first

For a substantial first-time design, a major redesign, an unclear visual direction, or a request involving rich motion, default to a visual direction pass before implementation.

Choose the number of materially different directions according to the decision being made:

- use one refined direction when an accepted reference or clear design system already determines the answer;
- use 1-3 directions for a small page, form, focused workflow, or local redesign;
- normally use 3-6 directions for a substantial new product or major visual redesign;
- explore up to 10 only when the user asks for broad exploration and enough strong directions genuinely exist.

Never create weak or superficially different concepts to reach a number. Each direction should communicate:

- visual idea and emotional tone;
- page shape and information hierarchy;
- typography character without prematurely locking a font family;
- color and material language;
- interaction and motion potential;
- what kind of user or product it fits.

Choose the presentation method according to the fidelity being evaluated. Use full-scale code-native mockups or rendered concepts for interface judgment; use mood boards and thumbnails only as supporting navigation or early exploration. Never let the comparison format reduce readability or conceal design quality.

The output is for selection, not final production code. Keep the set coherent enough to compare and different enough to make a real choice.

### Reference-led exploration

Before producing visual directions for a substantial design task, inspect relevant mature references instead of relying only on memory or generic style labels.

- Collect references relevant to the product category, interaction model, or desired visual character.
- Include mature products, reputable design galleries, open-source interfaces, component libraries, and design systems where appropriate.
- Identify the specific qualities worth learning from, such as composition, navigation, density, typography, transitions, component behavior, or responsive transformation.
- Distinguish visual inspiration from reusable implementation.
- Do not claim that a direction is inspired by a source unless that source was actually inspected.
- Consolidate references into one review surface when possible. Do not open a large number of visible browser tabs merely to demonstrate research.

For authenticated B2B SaaS, CRM, operations, workflow, approval, and data-management surfaces, route the reference question before choosing a source:

| Surface | Study first | Primary question |
| --- | --- | --- |
| Authenticated home or workbench | Cloudscape, Fluent, local product evidence | What needs attention now and where does work begin? |
| Resource collection or data table | Cloudscape, Carbon, Ant Design | How does a user find, compare, select, and act on records? |
| Record review or detail | Cloudscape, Atlassian, local product evidence | Should context remain visible while inspecting or deciding? |
| Configuration or admin | Cloudscape, Fluent, Ant Design | How are settings changed safely and explained? |
| Collaboration, tasks, comments, activity | Atlassian, Fluent, local product evidence | How are ownership, changes, and conflicts understood? |

Mobbin and SaaSUI are optional references for shipped-product flows such as onboarding, settings, filtering, dialogs, drawers, and multi-step tasks. Mobbin MCP is paid and OAuth-gated; it is never a required dependency. Refero remains primarily a marketing, product-introduction, and editorial reference. Prefer official documentation, examples, and repositories for public design systems. Learn interaction mechanisms and rationale; do not copy brand identity, logos, private screenshots, or proprietary UI.

### Enterprise SaaS workbench routing

When a surface supports repeated authenticated work, design the task path in addition to the visual direction. A workbench should make clear where the user is, what needs attention, what can be done, what evidence or scope applies, and what changed after an action.

- Use primary navigation for stable product areas, not temporary filters or one-off actions.
- Show a concise page title and scope context before the collection, workflow, or configuration.
- Use text search for known terms; simple selects for one or two stable properties; composable property filters only when users need multiple values, operators, or saved queries.
- Use tables when comparing records matters; use lists or cards when narrative scanning matters more than columns.
- Use a split panel or drawer for contextual inspection that should preserve collection context; use a dedicated detail page for long histories, deep subsections, or multiple independent tasks; use a modal only for a short blocking decision or bounded form.
- Introduce row selection only for real multi-record actions. Batch mode must show selected count, expose only actions valid for all selected records, disable conflicting row actions, and provide an explicit exit path.
- A drawer must have one clear use case. Avoid layering competing panels; simplify to a page or modal when that better matches the user's task.

Do not force these patterns onto marketing pages, portfolios, customer-facing forms, or lightweight tools. Choose the least complex interaction that supports the actual task.

### Reference access fallback

If a preferred reference cannot be opened, do not silently abandon reference research, repeatedly open visible tabs, bypass access controls, or claim that the unavailable source was inspected. Use this order until enough reliable evidence exists:

1. inspect an official repository, documentation site, component story, release artifact, or screenshot from the same source;
2. inspect another reputable source that demonstrates the same layout, interaction, component, or motion pattern;
3. inspect compatible mature components, patterns, and prior verified examples already available in the project or local environment;
4. ask the user for a screenshot, exported page, repository, or preferred alternative when the missing reference materially affects the direction;
5. if none is available, proceed with an original direction only when useful, label it as original exploration, and state that external reference verification remains incomplete.

Record what was actually inspected and which qualities were adapted. Never present remembered aesthetics, search-result descriptions, inaccessible pages, or unverified code as inspected reference evidence. Reuse is a means to improve quality and reduce unnecessary reinvention, not a requirement to force an unsuitable dependency or copy a product identity.

### High-fidelity direction standard

A visual direction intended for aesthetic selection must be large enough to judge as a real interface.

- Do not compress a complete page into a small card, thumbnail, miniature dashboard, or unreadable collage and present it as a high-fidelity direction.
- A comparison index may use thumbnails for navigation only. Each direction must also have its own full-size view at a realistic desktop viewport, with an appropriate mobile view when responsive behavior materially affects the design.
- Show enough of the experience to judge the first viewport, hierarchy, realistic type scale, line length, navigation, primary action, components, spacing, surfaces, density, representative content, and relevant interaction states.
- Show the continuation beyond the first viewport when the page structure depends on it.
- If the available canvas makes concepts unreadable, show fewer directions per screen or provide separate full-size views. Never solve limited space by shrinking the interface until it can no longer be evaluated.

Wireframes, mood boards, color swatches, and thumbnail sheets may support exploration, but label them as low fidelity. Do not present them as final visual directions.

## Fair Before-and-After Comparison

When judging whether a redesign is better:

- compare the same content, evidence, assets, viewport, and page depth;
- provide separate full-size views of the original and revised interfaces;
- do not rely only on thumbnails, compressed collages, or a comparison toolbar that changes the available viewport;
- preserve factual content and information volume unless content editing is explicitly in scope;
- inspect both first-viewport impact and full-page reading rhythm;
- capture final-state screenshots only after entrance motion has completed.

Do not make the revised version appear stronger by removing difficult content, simplifying evidence, or presenting only its best section.

### When to skip or compress the pass

Skip or shorten the visual pass when:

- the user explicitly asks for direct implementation;
- an accepted design system or reference already determines the direction;
- the task is a small bug fix or local styling correction;
- the work is a mechanical migration with no design decision;
- the user has already selected a direction in the current task.

When page purpose is unclear, ask whether it is primarily a product/tool surface, content or portfolio page, marketing page, editorial experience, or another form. Do not infer a category when the choice would materially change the design.

### User-facing prompt

Offer this reusable prompt when helpful:

> 在开始开发前，先根据目标用户、内容和产品任务，给我 4-10 套差异明显的前端视觉方向。每套说明风格、页面结构、字体气质、颜色、组件和动态效果，并做成可比较的可视化方案；我选定方向后再开始实现。

Once the user selects a direction, treat it as the current design reference. Record intentional deviations when implementation constraints require them.

## Design Reasoning

Before coding, reason through the following in the order useful for the project:

- audience, primary task, content hierarchy, and main action;
- page category and density, without forcing a category prematurely;
- layout model, navigation, responsive transformation, and key states;
- type scale, font sources/fallbacks, color roles, spacing, borders, radii, and surfaces;
- component families and which existing library or local primitive can supply them;
- motion model: entrance, transition, feedback, scroll, hover, or data change;
- empty, loading, success, error, permission, fallback, and recovery states;
- asset, licensing, accessibility, performance, and deployment constraints.

Fonts, sizes, colors, and spacing are decisions to make from this reasoning. Never treat the examples in this Skill as a universal visual answer.

## Reuse and Adaptation

- Search the project's current component inventory before creating a new primitive.
- Prefer inspected mature open-source libraries and examples when they solve the same interaction or visual problem.
- Read the source, license, dependencies, and maintenance signals before adopting code.
- Adapt structure, behavior, and techniques; remove copied branding, logos, proprietary names, and irrelevant product claims.
- Keep borrowed code inside the project's conventions and explain meaningful adaptations.
- Do not add a framework, design system, or animation library only for appearance when the project can achieve the result without the maintenance cost.

## Components and Design Tokens

- Reuse the project's existing primitives and tokens before adding new ones.
- Give repeated colors, spacing, type roles, radii, borders, shadows, elevation, breakpoints, and motion timing consistent semantic definitions.
- Use lightweight CSS variables or equivalent shared constants for a small page; use a fuller token architecture only when project scale, multiple themes, multiple brands, or long-term maintenance justify it.
- Implement repeated interface patterns as shared components or variants. Do not scatter one-off values and duplicated markup when they represent the same visual or behavioral role.
- Keep component APIs purposeful, accessible, responsive, and compatible with the project's ownership boundaries. Do not build a design system merely to complete one isolated screen.

## Implementation Quality

- Preserve existing APIs and working behavior during visual work unless a behavior change is intentional and recorded.
- Separate composition, data, state, and reusable components according to the project's framework and scale.
- Avoid monolithic components, duplicated markup, unnecessary global state, request waterfalls, duplicate fetches, and avoidable re-renders.
- Give controls real behavior and complete states: disabled, pending, success, failure, empty, and recovery where relevant.
- Use semantic HTML, keyboard access, visible focus, readable contrast, accessible names and labels, understandable validation and recovery, appropriate announcements for dynamic state, and reduced-motion handling.
- Preserve functionality at reasonable zoom and narrow widths. Test critical flows with keyboard navigation and, when the project risk justifies it, a screen reader or accessibility audit.
- For workbench flows, verify the primary keyboard path through navigation, filters, collection, detail, confirmation, and return state. Check that selection, filters, sorting, pagination, and collection context are preserved or deliberately reset with a visible rationale.
- For each applicable workbench feature, design and test initial/empty, loading, no-results, validation failure, permission restriction, save-pending, success, server failure, and conflict/stale-data states. Do not use a toast as the only representation of an actionable state.
- Treat WCAG 2.2 as the current reference when formal accessibility conformance matters; define the required conformance level from the product, legal, and user context rather than claiming compliance from a superficial check.
- Implement dark mode, theme switching, multi-brand theming, or internationalization when the product requires them, not as universal features. Even when they are out of scope, avoid structures that unnecessarily block future text expansion, locale changes, or theme adaptation.
- Keep secrets, private data, internal payloads, and debugging details out of public UI and client bundles.

## Motion Quality

- Establish the static end state before animating it.
- Define the trigger, the changing element, the relationship or state being explained, the end state, and the reduced-motion alternative.
- Use motion to clarify navigation, spatial continuity, progressive disclosure, input acknowledgement, processing, generation, information extraction, selection, confirmation, recovery, hierarchy, or narrative pacing.
- Prefer small coherent systems of easing, duration, and stagger over unrelated effects.
- Avoid motion that blocks reading, causes layout shift, repeats forever without purpose, or breaks reduced-motion preferences.
- Do not use endlessly rotating circles, floating objects, pulsing dots, scanning lines, glow, or decorative parallax merely to make a page appear dynamic.
- Use spinners or rotation only for a real bounded loading or progress state that clearly transitions into a result.
- A phrase such as "smooth transition" or "dynamic AI effect" is not evidence of motion quality. Evaluate motion in the running interface.
- Verify that animation remains legible on mobile and does not hide essential content.

## Visual Quality Gate

Before showing visual directions to the user, review them as a design critic rather than as their author. Reject or revise a direction when:

- its difference from another direction is mainly color, font, or superficial styling;
- it depends on labels such as "AI blue", "premium serif", "dark control center", or "editorial beige" without deeper design reasoning;
- it resembles a generic template or model-generated concept;
- text is too small to assess at the presentation size;
- the hierarchy is unclear without an explanation;
- decorative effects are compensating for weak composition;
- motion does not correspond to real interaction or state;
- the inspected reference influence and the adapted qualities cannot be identified;
- it would not be credible as a polished commercial product.

Do not ask the user to choose among several weak concepts. Improve or replace them first.

Do not confuse stylistic intensity with visual quality. Larger typography, stronger contrast, darker palettes, more editorial whitespace, more visible animation, or fashionable references are not improvements by themselves. Judge whether each change improves comfort, clarity, credibility, task fit, content comprehension, and sustained use.

When presenting each direction, state its product and user rationale, inspected references and adapted qualities, structural idea, typography and material character, interaction and motion model, main strength and trade-off, and evidence level: mood study, high-fidelity concept, runnable prototype, or tested implementation.

## Adoption Decision

After review, classify meaningful proposed changes as:

- retain from the existing version;
- adopt from the revised version;
- revise further;
- reject.

A user may prefer revised typography, hierarchy, motion, or section rhythm while rejecting the broader visual system. Treat this as a valid selective result, not a failed redesign. Integrate only the changes that survive comparison. If the revised direction is not materially better overall, preserve the existing design and report the narrower improvements that were validated.

Treat an improvement as material when it advances at least one user-relevant goal without a meaningful regression in the others. When results are mixed or user preference remains uncertain, default to the existing baseline and ask before integrating broader visual changes.

## Responsive, Testing, and Delivery

- Test the primary desktop viewport and at least one narrow mobile viewport appropriate to the project.
- Check natural wrapping, stable dimensions, touch targets, keyboard flow, horizontal overflow, content clipping, and state transitions.
- Test the real primary flow, not only the initial screenshot. Include representative loading, success, error, and fallback states when they exist.
- Capture final visual evidence only after the intended review state is stable: required fonts and critical assets have loaded, initial data has resolved or reached the chosen state, layout has stopped shifting, and entrance motion has reached its end state. Prefer explicit readiness conditions over an arbitrary delay.
- Treat stable-state screenshots and motion verification as separate evidence. A screenshot caught mid-transition is valid only when intentionally documenting that transition; do not use it to judge the final typography, contrast, spacing, or hierarchy.
- When useful, capture static visual and accessibility evidence with reduced motion enabled, but also inspect the normal-motion experience in the running interface. Never use reduced motion to avoid verifying animation quality.
- Run the project's available lint, type, unit, build, browser, or end-to-end checks. Do not claim a check that was not run.
- Establish a performance budget appropriate to the product and delivery stage. For public web experiences, evaluate the current Core Web Vitals, including LCP, INP, and CLS, using current official definitions and thresholds at implementation time rather than freezing potentially outdated values in this Skill.
- Control image, video, font, JavaScript, CSS, third-party script, and animation cost. Use appropriate dimensions and formats, avoid unnecessary downloads and request waterfalls, and load noncritical resources on demand without delaying essential first-viewport content.
- Distinguish laboratory measurements from real-user field data and do not claim production performance from a local audit alone.
- Distinguish local, preview, and production environments; document required services, environment variables, assets, and rollback considerations.
- Report what is verified, what is simulated, and what remains unverified.

## Iteration Record

For a substantial visual, structural, component, responsive, or interaction iteration, record:

- the purpose and selected reference or design direction;
- affected pages, components, states, and flows;
- intentional deviations and their reasons;
- the regression checklist and evidence collected across relevant desktop, mobile, accessibility, performance, and deployment surfaces.

For a small styling correction or localized bug fix, a concise change and verification summary is enough. Do not create process documents whose maintenance cost exceeds their value.

## Final Review

Before handoff, ask:

- Does the page have a deliberate visual point of view rather than a generic template?
- Is the hierarchy understandable without explanation?
- Are the components, typography, motion, and states coherent across the surface?
- Does the responsive version feel designed rather than merely compressed?
- Did we reuse appropriate mature work without copying identity?
- Are the core interactions real and the implementation maintainable?
- Is the evidence boundary clear?

Copyright (c) Kang
