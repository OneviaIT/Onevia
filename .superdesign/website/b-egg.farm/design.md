---
version: "superdesign-alpha"
name: "Cream-yolk editorial"
description: "A warm off-white, left-bound editorial system with handwritten-script accents, oversized condensed display type, and a single amber yolk-color rationed into one full-bleed band and one footer field."
colors:
  background: "#FBF9F1"
  surface: "#1A1200"
  text-primary: "#000000"
  text-secondary: "#FFFFFF"
  accent: "#F4B30C"
typography:
  display-lg:
    fontFamily: "Summer loving sans"
    fontSize: "192px"
    fontWeight: 400
    lineHeight: "0.86"
  body-md:
    fontFamily: "Summer loving sans"
    fontSize: "192px"
    fontWeight: 400
    lineHeight: "1"
  label-md:
    fontFamily: "Summer loving sans"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: "0.9"
  accent-script:
    fontFamily: "Summer loving"
    fontStyle: "handwritten/script"
  accent-mono:
    fontFamily: "Gt america mono trial"
    fontStyle: "monospace, for data/labels"
spacing:
  base: "6px"
  gap: "16px"
  section-padding: "19px"
rounded:
  control: "4px"
  pill: "9999px"
  blob: "400px"
components:
  button-primary:
    background: "#F4B30C"
    text-color: "#191200"
    radius: "3.84px"
    height: "85px"
    padding: "0px 42.048px"
    hover-background: "#FBF9F1"
  card-flat:
    background: "transparent"
    radius: "0px"
    padding: "0px"
  card-spec-list:
    background: "transparent"
    radius: "0px"
    padding: "0px"
    border: "1px solid #F4B30C"
---
# Cream-yolk editorial
Source: https://www.b-egg.farm/

## Overview
This is an editorial / typographic system riding a cream-and-ink palette, with one saturated amber held in reserve for a single full-bleed band near mid-page. The dominant pixel field is overwhelmingly a warm off-white (#FBF9F1, ~80% declared area), not a stark white — the page reads as paper, not screen. Display type is set at an enormous 192px condensed sans with near-unity line-height (0.86), stacked flush-left in a ragged multi-line headline treatment, interrupted by a smaller handwritten-script accent clause set at a steep diagonal. The system pairs this maximalist type gesture with flat, borderless content (every measured card is `transparent`, `radius: 0px`, `padding: 0px`) — hierarchy is carried entirely by type scale and whitespace, not by card chrome. Deep near-black ink (#1A1200) appears structurally as a footer surface, giving the page a dark-floor bookend against its light body.

## Composition
The first screen is almost entirely cream background with a tiny top-left wordmark/menu pairing and top-center logo mark, then a massive ragged three-line headline running the full left half, undercut by a diagonal handwritten-script line crossing two of those lines. The right half of screen one carries an isolated product-style image on the same cream field — no card, no frame. Scrolling down, density increases: a small boxed nutrition-figure table (right-aligned) sits above a loose cluster of rounded pill-shaped tags/badges arranged in an irregular radial cluster, each tag carrying a tiny icon and a short label, rotated at varying angles — this is the most visually busy passage on the page. A second big-type band in reversed-cream-on-dark repeats the oversized condensed sans at a smaller but still massive size, fully flush-left. The clear compositional pivot is the amber full-bleed band — the page's one saturated color event — which carries a small bordered info-card, two pill-shaped collapsible rows, and an offset product-photo illustration with an organic cream blob shape bitten out of its top edge. The page closes on a near-black footer band holding a link column, an email-capture row, and a bordered logo lockup. The deliberate choice here is restraint: one accent color, rationed to one section, rather than spreading amber across every CTA — the rejected alternative would be a brand-color-forward page with amber buttons throughout; instead amber is saved so its single appearance reads as a event.

## Colors
`#FBF9F1` is the background/page role — a warm paper cream, not pure white, covering the vast majority of the pixel field across header, hero, and mid-page bands. `#1A1200` is a near-black ink-brown surface role, used structurally for the footer and for reversed-type bands (18.4% declared area) — it is this page's "surface-dark," not merely text color. `#000000` and `#FFFFFF` are the text-ink roles, swapping depending on which background they sit on (black ink on cream, white ink on the dark band and footer). `#F4B30C` is the single accent/brand hue — a saturated amber-yolk color — rationed to roughly one full-bleed section plus the primary button and footer CTA fill; everywhere else type and dividers stay black, white, or unstated gray (`#C4C4C4`, `#DDD9C5` appear only as faint borders/dividers). Nothing else is colored: no secondary accent, no semantic danger/success — the system deliberately leaves every other surface neutral so the one amber band and the one amber button are the only saturated notes on the page.

## Typography
The pairing is a display condensed grotesque (Summer loving sans) against a workhorse humanist sans for running copy (Gt america standard trial, 17.088px/400, black ink) — a classic oversized-display/small-body editorial contrast. Summer loving sans is used at two scales: 192px/0.86 for the hero's stacked headline treatment and 64px/0.9 as a mid-weight label/section-marker size, both set with almost no line-height air, producing a dense, blocky, poster-like type stack. A handwritten/brush-script face (Summer loving) interrupts the hero headline across roughly a two-line diagonal run — the page's one signature voice-driven accent, set small relative to the 192px display type around it, slanted rather than horizontal. A monospace face (Gt america mono trial) is reserved for small data labels (the nutrition-figure rows, badge microcopy). Body copy throughout stays small, regular-weight, tight line-height, left-aligned, and never competes with the display type.

## Layout
Content is bound to a max-width of 1190px, left-weighted rather than centered — headlines and copy blocks start flush against the left margin, with large unused right-hand space on the first screen reserved for the product image. Spacing is tight and irregular at the token level (0–19px steps dominate), consistent with a design built on type-driven rhythm rather than a strict 8px grid. Three distinct card/content grids recur: a 3-column grid with row-height ratio [19/62/19] (a shallow-tall-shallow band, likely icon/heading/subhead), a 2-column grid with generous 114–169px gaps across 3 items arranged [35/45 | 45] (an asymmetric two-row feature pairing), and a tighter 2-column grid (gap ~20/96px) holding 3 items in uniform 37% rows — a steady feature-triptych rhythm. The repeating "heading + stacked full-width rows" card pattern (rows at 100|100|100, 100|100, and 100|97 container-width) signals simple list/checklist-style content blocks rather than side-by-side cards — each row spans nearly the full card width, stacked vertically. All cards are flush, borderless, and zero-radius; shape and separation come from spacing and color blocks, not strokes or shadows.

## Components
- **Navbar**: edge-to-edge width at the very top of the page, flush with the viewport (no inset, no rounding visible) — holds a small text/menu control at far left and a centered logo mark, no visible right-side CTA on the cream band; minimal height, sits directly on the `#FBF9F1` background with no border or shadow.
- **Button — primary (observed, hero-adjacent CTA)**: the measured amber button (`#F4B30C` fill, `#191200` text, radius `3.84px`, height `85px`, padding `0px 42.048px`, hover → `#FBF9F1` fill) is a large, near-rectangular, barely-rounded block — classify its corner feel as sharp/square. It is the single most prominent filled control on the page and appears within the amber full-bleed band near the page's lower-middle, not in the hero itself; treat it as this system's primary CTA pattern wherever a prominent action is needed.
- **Pills — collapsible info rows**: two stacked pill/capsule-shaped rows (radius approaching `9999px`/full pill) sit inside the amber band beneath a small bordered info card; each carries a short label and a trailing disclosure icon, dark text on a darker-amber or outlined fill, functioning as an accordion/disclosure list rather than a button group.
- **Badge cluster — nutrient/mineral tags**: an irregular radial cluster of ~10+ small pill-shaped tags (rounded, bordered in amber `#F4B30C`, black text, tiny icon per tag) scattered at varying rotation angles rather than aligned to a grid — appears once, mid-page, directly below a small bordered nutrition-figures table.
- **Info card — nutrition figures**: a small, right-aligned, thin-bordered rectangular box (border color `#F4B30C`/black per the border candidates) stacked with 3 label/value rows (e.g. fat, carbohydrate, protein style rows) in mono-leaning type; zero fill, zero radius, functions as a lightweight data card.
- **Flat content cards (×20, ×17, ×11, ×11 instances)**: all transparent, `radius: 0px`, `padding: 0px` — these are not boxed cards but type-and-icon groupings laid directly on the page background; treat every "card" on this page as borderless content stacked in a grid cell, never as a filled/shadowed panel.
- **List-row cards (×3, ×2, ×2 instances)**: each carries a heading followed by 2–3 full-width stacked rows (100% / 97–100% of container width) — a heading-plus-checklist pattern, flat and unbordered, repeated at three sizes across the page.
- **Reversed big-type band**: a full-width section with `#1A1200` background and white (`#FFFFFF`) oversized Summer loving sans type, flush-left, no card chrome — functions as a section break/spanner rather than a component, reading as a dark "pancake" band between light sections.
- **Product illustration block**: a large offset photographic/illustrative image sits within the amber band, its top edge interrupted by an organic cream-colored blob cutout (radius token `400px` suggests a soft superellipse/blob mask) — the page's one overlap-grid moment, image layered against a hard-edged cream shape.
- **Footer**: `#1A1200` near-black full-width band; holds two link columns (left: a resource/contact list; right: an "about" link list) in small white/amber type, an email-capture row (rectangular input field beside a small amber pill/rounded submit button), a divider rule, and a bordered small logo lockup plus a secondary small logo credit mark at bottom — all flush-left within the 1190px container, zero rounding on the input, pill rounding on the submit control.

## Graphics & Effects
The product hero image and the amber-band illustration are static photographic/illustrative stand-ins (no gradient data given for them) composited directly onto flat color fields — no card frame, no shadow, no border, images simply sit on the cream or amber ground. A soft, organic cream-colored blob shape masks or overlaps the top of the amber-band illustration — the page's only overlap-grid/mask effect, functioning as a section-break graphic between the amber band and whatever sits above it. Two backdrop-filter blurs are present in the system (`blur(2px)`, `blur(8px)`), implying a light glass/frosted treatment on a small overlay element (likely the info-card border or a hover state) rather than a full glassmorphic panel — keep any blur usage minimal and localized, not applied to full sections. A live video surface exists somewhere in the build; substitute it with a static cream-or-amber gradient/image panel when rebuilding. No noise, grain, or star-field texture is indicated — the cream background is flat and clean, with all visual texture coming from type density and the badge cluster's scattered rotation.

## Motion
Transitions are short and simple: `all 0.25s ease` and `all 0.2s ease` cover hover and state changes — fast enough to feel like UI feedback, not a deliberate reveal. A `spin` keyframe animation exists, almost certainly driving a loading indicator or a rotating badge/icon element rather than page-level motion. Scroll behavior and any section-entrance choreography are handled by GSAP and Lenis, indicating smooth/inertial scrolling (Lenis) layered with scroll-triggered reveals (GSAP) for the headline bands and badge cluster — treat every major type band and the badge cluster as fading/sliding in on scroll entry rather than being static, with simple, fast easing rather than springy overshoot.

## Guardrails
- Do not spread the amber (`#F4B30C`) across multiple sections or buttons — it is rationed to one full-bleed band, the primary CTA, and the footer submit control only.
- Do not add card chrome (fill, radius, border, shadow) to the flat content groupings — every measured card is transparent and zero-radius; hierarchy comes from type and spacing, not boxes.
- Do not round the primary button into a pill — its measured radius is `3.84px`, a sharp/square corner feel, not rounded.
- Do not center the hero headline or body copy — the entire system is left-bound against the 1190px container, never center-aligned.
- Do not replace the handwritten-script accent with another sans weight — it is a distinct script family covering a short diagonal clause, not a bolded or italicized cut of the display sans.
- Do not render the background as pure white — it is a warm paper cream (`#FBF9F1`), and the dark band/footer is a near-black ink-brown (`#1A1200`), not neutral gray-black.