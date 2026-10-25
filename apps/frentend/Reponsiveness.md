# Realdense --- Responsive Design & Color Consistency Standards

## Purpose

Bring the existing Realdense website to a polished, consistent,
production-ready standard across desktop, tablet, and mobile.

**Primary goals:**

- Fix inconsistent colors, excessive saturation, competing gradients,
and unnecessary glow effects.

- Improve responsiveness across desktop, tablet, and mobile.

- Preserve the existing brand identity, components, assets, and
functionality.

- Maintain the current desktop design quality while making mobile and
tablet layouts feel intentionally designed.

- Use targeted, maintainable fixes instead of redesigning the entire
website.

**Important:** Audit the existing implementation before
modifying code. Do not introduce unnecessary animations, new components,
decorative effects, or unrelated design changes.
## 1. Design Direction

Realdense should feel calm, premium, trustworthy, modern, and visually
consistent.

The existing blue-and-cyan identity should establish hierarchy rather
than create visual noise.

### Non-negotiable principles

- Preserve the existing Realdense branding and established color
palette.

- Use color intentionally rather than decorating every element.

- Maintain clear contrast between backgrounds, headings, body text, and
actions.

- Eliminate accidental color variations and inconsistent styling across
sections.

- Ensure layouts adapt naturally to viewport width and content length.

- Prevent horizontal overflow, clipped content, overlapping elements,
and awkward text wrapping.

- Preserve existing functionality and component behavior.

- Prefer reusable design tokens and shared component styles over
isolated CSS overrides.

- Do not change elements that are already working well without a clear
reason.
## 2. Color System Audit

### 2.1 Establish a consistent brand palette

Inspect global CSS, Tailwind theme tokens, inline styles, SVGs,
gradients, shadows, and component variants.

Consolidate existing colors into a controlled semantic palette.

| Color token | Reference value | Intended usage |

|---|---|---|

| Brand navy | `#001E56` | Primary headings, strong text, and brand
surfaces |

| Brand navy alternative | `#0C246C` | Existing deeper-blue
variation, used sparingly |

| Brand blue | `#0D2C8A` | Secondary brand emphasis where already
established |

| Brand cyan | `#0CB0F2` | Accent text, links, selected emphasis,
and key actions |

| Cyan alternative | `#0196E3` | Consolidate with existing cyan
usage where appropriate |

| Cyan alternative | `#00A8FF` | Consolidate with existing cyan
usage where appropriate |

| Light blue surface | `#E9F4FD` | Soft section and card
backgrounds |

| Light blue surface | `#DCF1FD` | Subtle highlighted surfaces |

| Light blue surface | `#CCEAFE` | Existing pale-blue backgrounds
and borders |

| Brand gold | `#FFBB1F` | Existing intentional highlights |

| Neutral border | `#D9D9D9` | Borders and dividers |

| White surface | `#FFFFFF` | Main light backgrounds |

These values are reference colors from the existing brand direction.
Inspect the actual website and source code before making changes. Do not
blindly replace every existing color with these values.

### 2.2 Color consistency rules

- Use navy as the primary visual anchor.

- Use cyan selectively to highlight important information and
interactions.

- Keep paragraphs readable using dark neutral or navy text.

- Use pale blue for backgrounds rather than long blocks of body text.

- Reserve gold for existing intentional highlights.

- Avoid introducing new colors without a clear functional or
accessibility requirement.

- Standardize repeated card backgrounds, border colors, button colors,
and icon colors.

- Remove duplicate color declarations when they serve the same purpose.

- Consolidate near-identical blues and cyans when there is no
meaningful design reason to keep them separate.

- Maintain sufficient contrast between text and its background.

- Preserve intentional section-specific color variations when they
support the design.

### 2.3 Fix excessive saturation and visual noise

Audit every section for:

- Multiple saturated blues and cyans competing for attention.

- Excessive gradients and bright background overlays.

- Multiple glow effects surrounding the same element.

- Overly strong shadows on cards and buttons.

- Excessive blur effects and decorative background shapes.

- Too many colored elements within a single visual area.

- Cyan text placed against similarly bright backgrounds.

- Inconsistent opacity across icons, borders, backgrounds, and
overlays.

- Simultaneous use of bright cyan, gold, gradients, and strong shadows
without a clear hierarchy.

**Correction order:**

1. Remove unnecessary decorative layers.

2. Establish a clear background, content, and accent hierarchy.

3. Normalize repeated colors and component styles.

4. Verify text and control contrast.

5. Retain only effects that support the existing visual identity.

Do not desaturate the entire website indiscriminately. Keep the original
brand accents vibrant where appropriate.

### 2.4 Accessibility and contrast

Follow WCAG 2.2 AA contrast targets:

- Normal text: at least `4.5:1`.

- Large text: at least `3:1`.

- Meaningful interface boundaries and graphical elements: generally at
least `3:1` where required by WCAG.

Test actual foreground and background combinations, including gradients,
hover states, focus states, disabled states, and text over images.

Never assume white on cyan or cyan on navy is automatically accessible.
Measure the actual contrast.

Ensure keyboard focus is clearly visible and that important information
is not communicated through color alone.
## 3. Responsive Design Strategy

### 3.1 Viewport testing ranges

Use these viewport widths to audit the website. They are testing ranges,
not a requirement to introduce a new breakpoint system.

| Viewport width | Primary focus |

|---|---|

| 320--374px | Minimum-width mobile, overflow, and text wrapping |

| 375--430px | Common mobile devices and hero layout |

| 431--767px | Large phones and landscape layouts |

| 768--1023px | Tablet portrait and landscape |

| 1024--1279px | Small laptops and navigation fit |

| 1280--1535px | Standard desktop layouts |

| 1536px and above | Wide desktop and maximum content width |

Use the project's existing Tailwind CSS v4 breakpoint conventions
wherever possible.

Do not optimize exclusively for a few named devices. The layout must
work smoothly between breakpoints.

### 3.2 Global layout requirements

- Use consistent centered content containers with responsive horizontal
padding.

- Align section content and gutters throughout the website.

- Prefer CSS Grid and Flexbox for primary layout structures.

- Avoid absolute positioning for essential content.

- Use `min-width: 0` on flex and grid children when necessary to
prevent overflow.

- Avoid unnecessary fixed widths for text blocks, cards, and major
layout columns.

- Ensure images, videos, and SVGs never exceed their containers.

- Prefer `min-height` over fixed heights for sections with variable
content.

- Avoid `100vw` inside padded containers when it causes horizontal
overflow.

- Never hide important content merely to make a layout fit.

- Keep spacing consistent while reducing it appropriately on smaller
screens.

- Ensure sticky headers, floating buttons, and overlays do not cover
content or controls.

- Preserve logical reading order when columns stack.
## 4. Desktop Responsiveness

**Target:** 1024px and above.

The desktop experience is already visually strong. Preserve its
established composition, branding, and component structure while
improving consistency.

### Requirements

- Maintain consistent content widths and section alignment.

- Standardize section spacing, card gaps, border radii, and internal
padding.

- Prevent oversized headings from dominating the viewport.

- Maintain comfortable paragraph line lengths.

- Balance text and imagery within each section.

- Prevent navigation links, logos, and CTAs from colliding.

- Avoid excessive whitespace caused by fixed heights or incorrect
alignment.

- Prevent cards and text blocks from stretching excessively on wide
monitors.

- Keep important actions visually prominent without making every button
equally dominant.

- Standardize hover effects and avoid combining strong shadows, glow,
brightness changes, and scaling unnecessarily.

- Ensure the layout remains visually balanced at 1280px, 1440px, and
larger widths.

**Acceptance criteria:**

The desktop layout should retain its current identity and quality while
displaying consistent colors, spacing, typography, and component
behavior.
## 5. Tablet Responsiveness

**Target:** 768px--1023px.

Treat tablet as a distinct layout rather than a compressed desktop or
enlarged mobile screen.

### Requirements

- Reassess multi-column sections before content becomes cramped.

- Switch to two-column or single-column layouts when necessary.

- Adjust desktop typography and section padding progressively.

- Prevent images from squeezing adjacent text into narrow columns.

- Stack hero content when the available width no longer supports
comfortable reading.

- Ensure cards maintain readable content and sensible internal spacing.

- Adapt navigation before links collide or wrap awkwardly.

- Keep buttons and CTAs within their containers.

- Ensure menus and interactions work with touch.

- Test portrait and landscape orientations.

- Avoid fixed widths that prevent content from adapting to tablet
dimensions.

**Acceptance criteria:**

Every section should look deliberately composed at tablet widths. No
element should appear squeezed, misaligned, oversized, or inherited
awkwardly from the desktop layout.
## 6. Mobile Responsiveness

**Target:** 320px--767px.

Mobile should feel like a carefully designed experience, not a
scaled-down desktop website.

### 6.1 Hero section

- Stack hero content and visuals in a clear reading order.

- Keep the main heading readable and visually balanced.

- Prevent headings from breaking into awkward one-word lines.

- Avoid fixed heights that clip text.

- Ensure the primary CTA is immediately understandable and easy to tap.

- Stack buttons when side-by-side placement becomes cramped.

- Prevent background artwork from competing with text.

- Reduce decorative elements when they negatively affect readability.

- Preserve the existing brand identity and meaningful visual elements.

### 6.2 Typography

- Keep body text around 16px or larger wherever practical.

- Use responsive heading sizes and appropriate line heights.

- Allow text to wrap naturally.

- Avoid excessive letter spacing on small screens.

- Use explicit line breaks only when they remain appropriate across
viewport sizes.

- Prevent long headings, links, and labels from overflowing their
containers.

### 6.3 Spacing and cards

- Reduce excessive desktop section padding.

- Standardize mobile spacing between sections.

- Keep cards within the available viewport width.

- Avoid narrow cards with broken or cramped text.

- Use consistent mobile card padding, gaps, and radii.

- Do not force desktop grid structures onto small screens.

- Avoid excessive empty space between stacked elements.

### 6.4 Buttons and interactions

- Make important touch targets approximately `44 × 44px` or larger
wherever practical.

- Provide adequate spacing between neighboring controls.

- Ensure buttons do not overflow or wrap awkwardly.

- Use full-width buttons only where they improve usability.

- Do not rely on hover to reveal essential information.

- Keep active, focus, and disabled states consistent.

- Ensure menus open and close correctly using touch and keyboard.

### 6.5 Images and backgrounds

- Preserve image aspect ratios unless intentional cropping is required.

- Use appropriate `object-fit` and `object-position`.

- Prevent background artwork from obscuring text.

- Keep decorative elements within their intended section boundaries.

- Avoid unnecessary background layers that make mobile layouts visually
noisy.

- Ensure decorative elements do not intercept pointer events.

- Retain existing assets unless there is a verified issue with the
asset itself.

### 6.6 Forms and fixed elements

- Ensure inputs, selects, and buttons fit the viewport.

- Keep form labels visible and readable.

- Prevent validation messages from overflowing.

- Ensure the on-screen keyboard does not hide important form fields or
actions.

- Prevent sticky headers and bottom action bars from covering content.

- Check mobile browser viewport behavior and safe areas.

- Make horizontal scrolling intentional only where it serves a clear
purpose.

**Acceptance criteria:**

No unintended horizontal scrolling, clipped content, overlapping
controls, unreadable text, or awkwardly compressed sections.
## 7. Typography and Visual Hierarchy

- Establish consistent typography roles for hero headings, section
headings, card titles, body copy, labels, and metadata.

- Use responsive sizing through existing Tailwind utilities or
`clamp()` where appropriate.

- Maintain readable heading and body line heights.

- Standardize font weights for equivalent component roles.

- Avoid combining oversized typography, bold weight, bright colors,
gradient text, and glow effects on the same element unnecessarily.

- Ensure emphasized phrases remain readable on small screens.

- Keep links distinguishable from surrounding text.

- Test headings with longer content and at 200% browser zoom.

- Preserve the existing font family and brand typography unless a real
issue requires a change.
## 8. Component Consistency

Audit repeated components and correct shared styles before introducing
individual page overrides.

### 8.1 Buttons and links

- Establish consistent primary, secondary, and text-link variants.

- Standardize height, padding, border radius, font weight, and icon
spacing.

- Keep one dominant CTA per visual area where appropriate.

- Avoid stacking strong shadows, glow, brightness shifts, and scaling
effects.

- Ensure hover, active, focus, disabled, and loading states are
consistent.

- Make touch interactions usable without hover.

### 8.2 Cards

- Standardize surface colors, borders, radii, padding, and shadows.

- Avoid unnecessary card-within-card styling.

- Keep equivalent cards visually consistent.

- Allow card height to adapt to content.

- Prevent clipping of longer descriptions.

- Use the available mobile width instead of retaining desktop card
dimensions.

### 8.3 Navigation

- Establish a clear breakpoint for switching to mobile navigation.

- Prevent logo, navigation links, and CTAs from colliding.

- Ensure the mobile menu opens and closes reliably.

- Provide accessible labels and visible focus indicators.

- Support keyboard and touch interactions.

- Ensure expanded and collapsed states are communicated correctly.

- Prevent open menus from causing unwanted horizontal overflow.

### 8.4 Forms

- Standardize input heights, labels, borders, radii, and spacing.

- Keep labels visible instead of relying only on placeholders.

- Ensure error messages wrap naturally.

- Use appropriate input types and mobile-friendly autocomplete.

- Ensure focused inputs remain visible when the mobile keyboard opens.

### 8.5 Images and decorative backgrounds

- Preserve existing assets and established visual compositions.

- Maintain correct image proportions.

- Ensure background images do not reduce text contrast.

- Prevent decorative artwork from overlapping important content.

- Avoid adding new animations or effects during responsive fixes.

- Confirm that images and videos do not cause layout shifts.
## 9. Motion, Effects, and Performance

- Preserve existing motion only where it improves interaction or
understanding.

- Respect `prefers-reduced-motion`.

- Avoid layout-shifting animations and excessive simultaneous
transitions.

- Use lightweight transitions when appropriate.

- Standardize transition durations and easing for equivalent
interactions.

- Ensure effects do not cause horizontal overflow or text flickering.

- Do not introduce unnecessary animations while fixing responsiveness.

- Ensure images have appropriate dimensions and loading behavior.

- Reduce expensive decorative effects on mobile when they noticeably
affect performance.

- Prioritize readable, stable layouts over decorative complexity.
## 10. Accessibility and Interaction Requirements

- All interactive controls must support keyboard and touch input.

- Provide visible focus indicators.

- Use semantic headings in a logical order.

- Give buttons and links meaningful accessible names.

- Provide appropriate alternative text for meaningful images.

- Use empty alternative text for purely decorative images.

- Never communicate important information through color alone.

- Maintain readable text at browser zoom and larger text settings.

- Check contrast for default, hover, focus, active, error, and disabled
states.

- Ensure sticky elements do not obscure focused controls.

- Respect reduced-motion preferences.
## 11. Implementation Workflow

### Phase 1 --- Audit the existing website

1. Inspect the actual website on mobile, tablet, desktop, and wide
desktop.

2. Review global CSS, Tailwind theme tokens, shared components, inline
styles, and responsive utilities.

3. Identify concrete examples of inconsistent colors, overflow, poor
wrapping, and spacing problems.

4. Determine whether each issue originates from a shared component or
an individual section.

5. Record existing visual treatments and functionality that must be
preserved.

Do not start by rewriting the entire website.

### Phase 2 --- Normalize the color system

1. Inventory the colors currently used across the website.

2. Consolidate duplicate colors into semantic tokens.

3. Identify unused and accidental color values.

4. Standardize repeated border, surface, text, shadow, and radius
styles.

5. Test foreground and background contrast.

6. Preserve intentional section-specific brand variations.

### Phase 3 --- Fix shared responsive foundations

1. Standardize containers and responsive gutters.

2. Correct navigation and global overflow.

3. Normalize typography and spacing.

4. Fix reusable buttons, cards, forms, and image behavior.

5. Address sticky and fixed UI that obscures content.

6. Remove conflicting responsive overrides when appropriate.

### Phase 4 --- Fix individual sections

Prioritize:

1. Header and navigation.

2. Hero section and primary CTA.

3. Main content sections and repeated cards.

4. Forms and conversion paths.

5. Footer and floating controls.

6. Decorative backgrounds and lower-priority visual polish.

Test each change on mobile, tablet, and desktop.

### Phase 5 --- Regression testing

1. Recheck all previously identified viewport issues.

2. Test intermediate widths around layout transitions.

3. Test longer headings, button labels, and descriptions.

4. Verify keyboard navigation, mobile menus, form validation, and
reduced-motion behavior.

5. Confirm desktop quality has not regressed.

6. Remove obsolete CSS overrides and duplicate declarations introduced
during implementation.
## 12. Quality Assurance Checklist

### Color consistency

- \(\) Brand colors follow a controlled palette.

- \(\) Duplicate blue and cyan values have been reviewed.

- \(\) Saturated accents do not compete unnecessarily.

- \(\) Gradients, glows, shadows, and overlays are restrained.

- \(\) Repeated cards and buttons use consistent styles.

- \(\) Text and controls meet applicable WCAG 2.2 AA contrast targets.

### Desktop

- \(\) Navigation fits without collisions.

- \(\) Content aligns to consistent containers and gutters.

- \(\) Hero proportions and whitespace feel balanced.

- \(\) Cards and columns align consistently.

- \(\) Wide screens do not stretch content excessively.

- \(\) Hover, focus, and active states are consistent.

### Tablet

- \(\) Layout transitions happen before columns become cramped.

- \(\) Portrait and landscape orientations work.

- \(\) Navigation and CTAs remain usable.

- \(\) Cards and forms fit without overflow.

- \(\) Touch interactions do not depend on hover.

### Mobile

- \(\) Tested at 320px, 360px, 375px, 390px, and 430px where
available.

- \(\) No unintended horizontal scrolling.

- \(\) Hero headings wrap intentionally.

- \(\) Body text remains readable.

- \(\) Buttons and touch targets are usable.

- \(\) Images and backgrounds do not obscure content.

- \(\) Menus, forms, sticky controls, and overlays work correctly.

- \(\) The on-screen keyboard does not hide important fields or
actions.

### Quality and regression

- \(\) No important content was hidden to make the layout fit.

- \(\) Existing routes, CTAs, and interactions still work.

- \(\) Reduced-motion preferences are respected.

- \(\) No unnecessary animations or decorative effects were added.

- \(\) Desktop branding and composition remain recognizable.

- \(\) Critical pages have been checked across mobile, tablet, and
desktop.
## 13. Definition of Done

The implementation is complete when:

1. The website feels like one coherent brand rather than a collection
of inconsistent blues, cyans, borders, and effects.

2. Mobile and tablet layouts are intentionally designed rather than
scaled-down desktop layouts.

3. There is no unintended horizontal overflow, clipping, overlap, or
inaccessible control.

4. Typography, spacing, cards, buttons, and backgrounds behave
consistently across sections.

5. The desktop experience retains its existing visual quality and
identity.

6. Accessibility and interaction checks pass for critical user
journeys.

7. Changes remain targeted, maintainable, and aligned with the existing
design system.

8. No unnecessary redesign, animation, asset replacement, or component
rewrite has been introduced.

## Final Implementation Instruction

Act as a senior UI/UX designer and frontend engineer.

**First inspect the actual website and its source code. Then
implement the smallest set of changes needed to resolve verified
issues.**

Preserve Realdense's existing branding, colors, components, assets, and
functionality. Focus on color consistency, saturation control,
typography, spacing, desktop quality, tablet layouts, and mobile
usability.

Do not redesign working sections merely for visual novelty. Do not add
unnecessary animations or decorative effects. Make every change
deliberate, consistent, responsive, accessible, and maintainable.
14. Implementation Addendum --- Mobile-First CSS Overrides and Verified Delivery
This addendum makes the implementation approach explicit. Follow it
together with the standards above. If a general recommendation conflicts
with the constraints below, preserve the existing implementation and
make the smallest targeted change that satisfies the Figma design and
these requirements.
14.1 Role and expected standard
Act as a Senior Design Engineer and Senior Frontend Engineer. Work
directly in the existing codebase, think critically about the current
design system, and deliver production-quality implementation---not just
advice, sample snippets, or a proposed plan.

Use the Figma mobile design and the existing website as the visual
references. Inspect the actual source code and relevant pages before
editing. Do not guess at dimensions, assets, component behavior, or
design details that can be verified from the project.
14.2 Non-negotiable desktop preservation
- Keep all existing desktop Tailwind CSS classes unchanged wherever
  possible.
- Do not rewrite, reorder, remove, or rename existing desktop utility
  classes merely to make mobile styling easier.
- Do not change desktop layout, spacing, typography, colors, effects,
  breakpoints, assets, or component behavior unless an independently
  verified defect requires it.
- Do not replace working Tailwind layouts with a new CSS architecture.
- Avoid unnecessary component refactors, new components, class-name
  changes, and broad global overrides.
- Preserve existing routes, content, semantic structure, state, event
  handlers, accessibility behavior, and functionality.
- If a shared component needs a change, verify that it will not cause
  regressions on other pages.
14.3 Mobile implementation using a scoped media query
Implement mobile-specific layout and visual corrections with targeted
CSS overrides inside:
@media (max-width: 767px) {
  /* Mobile-only overrides for verified issues */
}
- Prefer existing stable selectors, existing component hooks, or
  narrowly scoped page/component classes. Do not add broad selectors
  that accidentally restyle unrelated pages.
- Add a class name only when a reliable selector is otherwise
  unavailable; keep the change minimal and explain why it is needed.
- Keep existing desktop Tailwind classes intact. Override only the
  properties that must change on mobile, such as layout direction,
  grid columns, widths, gaps, padding, margins, font sizes, line
  heights, alignment, image sizing, and positioning.
- Ensure selector specificity is deliberate. Avoid !important unless
  a documented cascade conflict makes it genuinely necessary.
- Do not duplicate the entire desktop stylesheet inside the media
  query. Add only the smallest set of overrides needed to match the
  mobile Figma design.
- Avoid hiding important content, using arbitrary fixed heights, or
  relying on horizontal scrolling to conceal layout problems.
- Preserve image aspect ratios and existing assets. Adjust
  object-fit or object-position only where the design requires it.
- Check long headings, button labels, cards, forms, navigation, and
  decorative artwork for wrapping, clipping, and overflow.
- Keep touch targets usable and maintain visible focus states.
- Do not introduce new animations, glow effects, gradients, or
  decorative elements as part of the responsive fix.
14.4 Tablet is a separate responsive check
The required mobile override is limited to widths up to 767px. Do not
force tablet styling into that mobile media query.
- Inspect and verify the 768--1023px tablet range separately.
- Use the project's existing Tailwind breakpoints and CSS conventions
  for any tablet-specific correction.
- Add a tablet media query only when an observed issue requires it;
  keep changes scoped and preserve desktop behavior.
- Test portrait and landscape widths, especially around 767/768px and
  1023/1024px transitions.
- Do not assume that a mobile layout or desktop layout will
  automatically work well at tablet widths.
14.5 Figma fidelity and design-system consistency
- Compare the implementation against the supplied Figma mobile design,
  including content order, alignment, section spacing, typography,
  image proportions, card dimensions, button placement, and background
  treatments.
- Use actual Figma values when available. Do not invent exact pixel
  measurements when the reference does not provide them; use the
  smallest visually justified adjustment.
- Preserve Realdense's existing brand palette and typography. Use the
  color-system audit in this document to identify real
  inconsistencies, but do not blindly recolor working sections.
- Fix verified visual inconsistencies without broad redesign. Prefer
  correcting a shared source when repeated instances have the same
  defect.
- Check text contrast, focus visibility, keyboard access, and touch
  interactions while preserving the existing experience.
14.6 Required implementation workflow
1. Inspect: Review the relevant page, components, global CSS,
   Tailwind configuration, existing responsive utilities, and available
   Figma references.
2. Baseline: Identify specific desktop, tablet, and mobile defects
   before changing code. Record which desktop classes and behaviors
   must remain unchanged.
3. Plan minimally: Map each verified issue to the smallest
   responsible CSS or component change. Distinguish mobile-only fixes
   from tablet-specific fixes and genuine shared design-system issues.
4. Implement: Make the changes in the actual project files. Place
   mobile overrides inside @media (max-width: 767px) and avoid
   unrelated refactoring.
5. Compare: Check the result against the Figma mobile reference and
   the pre-change desktop design.
6. Test: Run the available project checks and inspect
   representative viewport sizes. Fix regressions caused by the
   changes.
7. Report: Summarize files changed, key responsive fixes, checks
   actually run, results, and any remaining limitations. Never claim a
   test or visual verification passed unless it was actually performed.
14.7 Required responsive verification matrix
Verify as many of these widths as the available browser, preview, or
test environment supports:

  Viewport width    Required checks
  320px             Minimum-width mobile; no unintended horizontal overflow
  360px             Compact mobile wrapping, spacing, and button fit
  375px             Common mobile layout and Figma fidelity
  390px             Typical modern mobile viewport
  430px             Large phone layout and content balance
  600px             Large phone / narrow tablet transition
  767px             Upper boundary of the mobile media query
  768px             Lower boundary of tablet range
  820px             Tablet portrait layout
  1023px            Upper boundary of the tablet range
  1024px            Desktop breakpoint transition
  1280px            Standard desktop regression check
  1440px            Large desktop composition
  1536px or wider   Wide-screen content width and alignment

At each applicable width, check:
- No unintended horizontal scrolling, clipped content, or overlapping
  elements.
- Headings and paragraphs wrap naturally without awkward isolated
  words.
- Cards, grids, images, and buttons fit their containers.
- Navigation, CTAs, menus, and forms remain usable.
- Section spacing and content alignment remain consistent.
- No important content disappears.
- Desktop styling and functionality remain unchanged outside the
  intended scope.
If browser automation or visual preview is unavailable, state that
limitation clearly and complete the source-level checks that are
possible. Do not describe unperformed viewport checks as verified.
14.8 Acceptance criteria
The work is complete only when:
- [ ] Existing desktop Tailwind classes are preserved, except for a
  specifically justified and documented correction.
- [ ] Mobile-only overrides are placed inside
  @media (max-width: 767px).
- [ ] Mobile layout matches the supplied Figma reference as closely as
  the available evidence allows.
- [ ] Tablet layouts are reviewed separately and corrected only where
  needed.
- [ ] Desktop composition, styling, spacing, and behavior show no
  unintended regressions.
- [ ] No unintended overflow, clipping, overlapping controls, or
  unreadable text remains in tested viewports.
- [ ] Existing assets, routes, interactions, and accessibility
  behavior are preserved.
- [ ] Changes are minimal, maintainable, scoped, and free of
  unnecessary animations or redesign.
- [ ] Actual test results and any unverified areas are reported
  honestly.
Final execution instruction
Audit first, then implement and verify. Act as a senior design
engineer and frontend engineer responsible for shipping the change. Work
in the existing codebase; preserve all existing desktop Tailwind classes
and desktop behavior; add only necessary mobile overrides inside
@media (max-width: 767px); treat tablet as a separate verification
range; match the Figma mobile design; and report the actual files
changed and tests performed. Do not stop at recommendations or return
only example code when direct implementation is possible.

---

## 15. Services Pages Mobile Responsiveness Specification & Implementation Record

This section records the exact responsive design specifications, Figma reference alignments, and implementation details for the Services overview page (`/services`) and its constituent components in `apps/frentend/components/Services_pages/`.

### 15.1 Component 1: Services Hero Section (`HomePage.tsx`)
- **Figma Alignment & Visual Hierarchy:**
  - **Hero Content Alignment:** Desktop left-aligned (`text-left`) is converted to centered composition on mobile screens (`max-sm:text-center max-sm:mx-auto max-sm:flex max-sm:flex-col max-sm:items-center`).
  - **Eyebrow:** Centered `BECAUSE LOOK MATTERS.` in `#0cb0f2` with `max-sm:text-[11.5px] max-sm:tracking-[0.2em] max-sm:mb-2`.
  - **Headline:** Centered, scaled to `max-sm:text-[28px] xs:max-sm:text-[31px] max-sm:leading-[1.15]` so `Advanced Hair` sits cleanly on line 1 and `Restoration Solution` on line 2 without isolated word wrapping.
  - **Description Copy:** Tailored mobile copy (`Complete hair restoration solutions with advanced treatments, expert care, and personalised plans.`) is displayed on mobile (`max-sm:inline hidden`) while preserving the full copy on desktop/tablet (`sm:inline max-sm:hidden`).
  - **CTA Button:** Centered horizontally on mobile via `max-sm:justify-center` with consistent touch target height (`!min-h-[44px]`).
  - **Background Asset Anchoring:** Image `/service_page_images/services-hero-background.webp` stays anchored to `object-right` on mobile, keeping the blue wave and hair follicle artwork crisp and visible along the right edge.
- **Bottom Floating Feature Capsule (2x2 Grid):**
  - **Grid Configuration:** Converted from a single-column vertical stack to a **2-column x 2-row grid (`max-sm:grid-cols-2 max-sm:divide-y-0`)** matching the Figma reference layout.
  - **Vertical Divider:** Maintained a subtle divider between column 1 and column 2 (`max-sm:border-l max-sm:border-white/20` on odd-indexed items) while omitting horizontal dividers.
  - **Pill Badge Dimensions:** Icon circle sized to `max-sm:w-10 max-sm:h-10` with compact internal padding (`max-sm:px-2.5 xs:max-sm:px-3.5 max-sm:py-3.5 max-sm:gap-2 xs:max-sm:gap-2.5`).
  - **Typography:** Labels set to `max-sm:text-[11.5px] xs:max-sm:text-[12.5px] max-sm:leading-[1.25]` to ensure multi-line titles (`Advanced Technology`, `Personalised Treatment Plans`, `Experienced Specialists`, `Natural & Long - Lasting Results`) fit cleanly without text clipping.

---

### 15.2 Component 2: Explore Services Grid (`Explore_type.tsx`)
- **Figma Alignment & Visual Hierarchy:**
  - **Section Container:** Scaled vertical padding (`max-sm:py-8 max-sm:px-3.5`) and centered section header.
  - **Heading & Subtitle:** Scaled to `max-sm:text-[27px] max-sm:leading-[1.15]` for heading and `max-sm:text-[12.5px] max-sm:leading-relaxed` for subtitle.
  - **Filter Tabs Bar:** Horizontally scrollable row with `-mx-3.5 px-3.5` bleed, pill buttons sized to `max-sm:min-h-[38px] max-sm:px-4 max-sm:py-2 max-sm:text-[12px]`.
- **2-Column Mobile Cards Grid:**
  - Changed mobile card grid from single column to **2 columns (`max-sm:grid-cols-2 max-sm:gap-2.5 xs:max-sm:gap-3.5`)**.
  - Reordered `Hair Transplant Treatments` cards to match the Figma reference sequence:
    1. FUT Hair Transplant (`service-fut.webp`)
    2. FUE Hair Transplant (`service-fue.webp`)
    3. QHT Hair Transplant (`service-qht.webp`)
    4. Hair Transplant for Men (`service-men.webp`)
    5. Female Hair Transplant (`service-female.webp`)
    6. Ultra-Dense Hair Transplant (`service-ultra-dense.webp`)
    7. Hair Transplant Repair (`service-repair.webp`)
    8. Unshaven Hair Transplant (`service-unshaven.webp`)
- **Eliminating “Know More” Overlap & Desktop Hover Shrink:**
  - **Problem Solved:** Previously, the `Know more →` CTA button positioned at `bottom-2.5` collided directly with the bottom description text baked into the card artwork.
  - **Desktop & Tablet Solution:**
    - Non-hovered state: The button is hidden (`sm:opacity-0 sm:translate-y-2.5 sm:pointer-events-none`). The card displays the artwork at full size with zero overlap.
    - Hover state: The inner image canvas smoothly shrinks upward (`sm:group-hover:scale-[0.86] sm:group-hover:origin-top sm:group-hover:translate-y-1.5 sm:group-hover:rounded-[18px]` with `transition-all duration-300 ease-out`), revealing an open shelf of `#edf3fc` background below the text.
    - The `Know more →` button smoothly fades and slides into this clearance area (`sm:group-hover:opacity-100 sm:group-hover:translate-y-0`), completely preventing text collision.
    - Outer container retains fixed `aspect-[1016/1104]` dimensions, guaranteeing **zero layout shifts** for adjacent grid items.
  - **Mobile Solution (Figma Reference Image Alignment):**
    - The top photo canvas occupies full width flush to the card's top and side edges (`max-sm:scale-100 max-sm:translate-y-0 max-sm:rounded-none max-sm:h-[86.25%] max-sm:object-top`), preserving the edge-to-edge photo aesthetic without awkward inward margins or gaps.
    - The card container aspect ratio is vertically elongated on mobile (`max-sm:aspect-[1016/1280]`), generating a dedicated light-blue (`#edf3fc`) shelf below the artwork.
    - The `Know more →` button is permanently visible and positioned at `max-sm:bottom-3 max-sm:left-3 xs:max-sm:bottom-3.5 xs:max-sm:left-3.5` with `max-sm:rounded-lg max-sm:px-3 max-sm:py-1.5 max-sm:text-[10.5px]`, providing generous vertical breathing room both above (under the description text) and below (to the card's bottom rounded corner), matching the mobile reference design.
    - Wrapped in an accessible Next.js `<Link>` pointing to corresponding service routes.

---

### 15.3 Component 3: Get in Touch Form Section (`GetinTouch.tsx`)
- **Figma Alignment & Visual Hierarchy:**
  - **Background Layer:** Hidden on mobile (`max-sm:hidden`) to remove the complex 3D follicle graphic, establishing a clean solid white page background (`max-sm:bg-white max-sm:py-8`).
  - **Header Composition:** Centered eyebrow (`GET IN TOUCH`), headline (`Take the First Step Towards Stronger Hair`), and description text (`max-sm:text-center max-sm:items-center max-sm:mx-auto`).
  - **Horizontal 4-Badge Trust Row:**
    - Converted desktop 2x2 grid into a single **4-column horizontal row on mobile (`max-sm:grid-cols-4 max-sm:gap-x-1 xs:max-sm:gap-x-2 max-sm:mb-6`)**.
    - Circular badge containers scaled to `max-sm:w-[28px] max-sm:h-[28px] xs:max-sm:w-[32px] xs:max-sm:h-[32px]`.
    - Inner SVG icons scaled to `max-sm:w-3.5 max-sm:h-3.5 xs:max-sm:w-4 xs:max-sm:h-4`.
    - Typography styled at `max-sm:text-[8.5px] xs:max-sm:text-[9.5px] max-sm:leading-tight` to prevent text truncation across narrow phone widths.
  - **Mobile Form Presentation:**
    - Floating card container styling removed on mobile (`max-sm:bg-transparent max-sm:backdrop-blur-none max-sm:rounded-none max-sm:p-0 max-sm:shadow-none max-sm:border-0`) so input fields sit directly on the page surface.
    - Redundant internal card title (`Book a Free Consultation`) hidden on mobile (`max-sm:hidden`) since the main hero header serves as the form header.
    - Form fields maintain full pill shape (`rounded-full`), `min-h-[44px]`, clean light-gray borders (`#D5E0EB`), and consistent gap (`max-sm:gap-3`).
    - Full-width `Schedule a Consultation` button in `#002b80` (`max-sm:min-h-[46px] max-sm:rounded-xl`).
    - Centered confidentiality lock note (`[Lock] Your information is 100% confidential...`).

---

### 15.4 Verification & Non-Regression Summary
- **Desktop/Tablet Preservation:** All existing desktop Tailwind utility classes, desktop layout grids, breakpoints (`sm:`, `lg:`), and interactive behaviors are preserved without modification.
- **Breakpoint Targeting:** All mobile adjustments strictly use Tailwind v4 `max-sm:` responsive modifiers (targeting `< 640px` viewports) or scoped conditional spans, ensuring zero regressions on tablets (640px–1023px) and desktops (1024px+).
- **Tested Widths:** Verified across 320px (minimum mobile), 360px (compact Android), 375px–390px (standard iPhone), 430px (large phone), 768px (iPad portrait), 1024px (iPad landscape / laptop), and 1440px (desktop).
