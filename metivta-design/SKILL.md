---
name: metivta-design
description: Design system skill for metivta. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX. Includes ultra-mode visual journey: read references/ANIMATIONS.md, references/LAYOUT.md, references/COMPONENTS.md, and references/INTERACTIONS.md for full motion and layout details.
---

# metivta Design System

You are building UI for **metivta**. Dark-themed, neutral palette, sans-serif typography (Roboto), standard density on a 5px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Homepage

![metivta Homepage](screenshots/homepage.png)

### Scroll Journey (Cinematic Visual States)

> These screenshots capture the website at different scroll depths. The design changes dramatically as you scroll — each frame shows a different cinematic state. Replicate these exact visual transitions.

#### 0% — Hero / Above the fold

![Scroll 0%](screens/scroll/scroll-000.png)

#### 17% — Mid-page at 17% scroll

![Scroll 17%](screens/scroll/scroll-017.png)

#### 33% — Mid-page at 33% scroll

![Scroll 33%](screens/scroll/scroll-033.png)

#### 50% — Mid-page at 50% scroll

![Scroll 50%](screens/scroll/scroll-050.png)

#### 67% — Mid-page at 67% scroll

![Scroll 67%](screens/scroll/scroll-067.png)

#### 83% — Mid-page at 83% scroll

![Scroll 83%](screens/scroll/scroll-083.png)

#### 100% — Footer / End of page

![Scroll 100%](screens/scroll/scroll-100.png)

> Read `references/DESIGN.md` for full token details. Read `references/ANIMATIONS.md` for motion specs. Read `references/LAYOUT.md` for layout structure. Read `references/COMPONENTS.md` for component patterns.

## Ultra Reference Files

This package includes extended documentation. **Read these files before implementing:**

| File | Contents |
|------|----------|
| `references/DESIGN.md` | Full design system tokens, colors, typography, spacing |
| `references/VISUAL_GUIDE.md` | **START HERE** — Master visual guide with all screenshots embedded |
| `references/ANIMATIONS.md` | CSS keyframes, scroll triggers, motion library stack, video specs |
| `references/LAYOUT.md` | Flex/grid containers, page structure, spacing relationships |
| `references/COMPONENTS.md` | DOM component patterns, HTML structure, class fingerprints |
| `references/INTERACTIONS.md` | Hover/focus states with before/after style diffs |
| `screens/scroll/` | 7 scroll journey screenshots showing cinematic states |

### Animation Stack Detected

- **Anime.js** v2.2.0 — animation

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Roboto for body/UI text, Arial for headings/display. Never introduce a third typeface.
- **standard density** — 5px base grid. Every dimension is a multiple of 5.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#313131` | Page/app background |
| Surface | `--surface` | `#16163f` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#ffffff` | Headings, body text |
| Text Muted | `--text-muted` | `#40464d` | Captions, placeholders |
| Border | `--border` | `#1e1f26` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#023328` | Confirmations, positive trends |
| Danger | `#cc3366` | Errors, destructive actions |

### Extended Palette

- **swiper-preloader-color:** `#000000` — Deep background layer or shadow color
- **e-global-color-bce5698:** `#f0f0f0` — Light surface or highlight color
- **e-global-color-9970dd8:** `#13b9a1`
- **e-global-color-primary:** `#6ec1e4`
- `#4268c1`
- `#203d5a`
- `#cccccc`
- `#69727d`

### CSS Variable Tokens

```css
--wp-editor-canvas-background: #ddd;
--wp-admin-border-width-focus: 2px;
--wp-admin-border-width-focus: 1.5px;
--border-radius: 0;
--border-top-width: 0px;
--border-right-width: 0px;
--border-bottom-width: 0px;
--border-left-width: 0px;
--border-style: initial;
--border-color: initial;
--border-block-start-width: var(--border-top-width);
--border-block-end-width: var(--border-bottom-width);
--border-inline-start-width: var(--border-left-width);
--border-inline-end-width: var(--border-right-width);
--border-inline-start-width: var(--border-right-width);
--border-inline-end-width: var(--border-left-width);
--e-global-color-primary: #6EC1E4;
--e-global-color-secondary: #54595F;
--e-global-color-accent: #61CE70;
--e-global-typography-primary-font-family: "Heebo";
```

## Typography

### Font Stack

- **Roboto** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "Heebo";
  src: url("fonts/Heebo-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Heebo";
  src: url("fonts/Heebo-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "swiper-icons";
  src: url("data:application/font-woff;charset=utf-8;base64, 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");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Roboto | 165px | 700 |
| Heading 2 | Roboto | 140px | 700 |
| Heading 3 | Roboto | 100px | 700 |
| Body | Arial | 14px | 400 |
| Caption | Arial | 16px | 400 |

### Typography Rules

- Body/UI: **Roboto**, Headings: **Arial** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 5px

Every dimension (margin, padding, gap, width, height) must be a multiple of **5px**.

### Spacing Scale

`5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |

### Border Radius

Scale: `1.5em, 2em, 2px, 8px, inherit, 1px, 3px, 4px, 5px, 6px, 10%, 10px, 20px, 50px, 100%, 100px, 150px, 999px`
Default: `6px`

### Container

Max-width: `1024px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| xs | 1px |
| xs | 479px |
| xs | 480px |
| sm | 575px |
| sm | 576px |
| sm | 600px |
| sm | 640px |
| md | 767px |
| md | 768px |
| lg | 781px |
| lg | 782px |
| lg | 800px |
| lg | 991px |
| lg | 992px |
| lg | 1024px |
| xl | 1025px |
| xl | 1200px |
| 2xl | 1440px |
| 2xl | 99999px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #16163f;
  border: 1px solid #1e1f26;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 .35rem 0 currentColor;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #444444;
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #1e1f26;
  color: #ffffff;
  border-radius: 6px;
  padding: 10px 20px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #313131;
  border: 1px solid #1e1f26;
  border-radius: 6px;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #16163f;
  color: #40464d;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #16163f;
  border: 1px solid #1e1f26;
  border-radius: 999px;
  padding: 30px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 0 10px #e0e0e8;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 12px;
  color: #40464d;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #1e1f26;
}
.table td {
  padding: 15px;
  border-bottom: 1px solid #1e1f26;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border-bottom: 1px solid #1e1f26;
}
.nav-link {
  color: #40464d;
  padding: 10px 15px;
  border-radius: 6px;
  transition: color 150ms;
}
.nav-link:hover { color: #ffffff; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)

**Navigation** (`html`)

**Badge** (`html`)

**Modal** (`html`)

**Footer** (`html`)

**List** (`html`)

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (28 items)
- **Hero** — Hero section (detected from heading structure)
- **Faq** — FAQ/accordion section
- **Footer** — Page footer with links and info (29 items)
- **Cta** — Call-to-action section

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `show-content-image`
- `turn-on-visibility`
- `turn-off-visibility`
- `lightbox-zoom-in`
- `lightbox-zoom-out`

### Motion Tokens

- **Duration scale:** `0s`, `0ms`, `.25s`, `.3s`, `.5s`, `.75s`, `1s`, `1.25s`, `2s`, `2ms`, `10s`, `20s`, `20ms`, `100ms`, `120ms`, `150ms`, `180ms`, `200ms`, `220ms`, `250ms`, `300ms`, `400ms`, `500ms`, `1000ms`, `1500ms`
- **Easing functions:** `ease-out`, `ease-in-out`, `ease`, `linear`, `cubic-bezier(.58,.3,.005,1)`, `cubic-bezier(0.44,0.96,0.5,0.98)`, `cubic-bezier(0.26,0.69,0.37,0.96)`, `cubic-bezier(0.83,0.08,0.16,0.97)`, `cubic-bezier(0.39,0.575,0.565,1)`, `cubic-bezier(0.23,1,0.32,1)`, `cubic-bezier(0.215,0.61,0.355,1)`, `cubic-bezier(0.19,1,0.22,1)`, `cubic-bezier(0.175,0.885,0.32,1.275)`, `cubic-bezier(0.44,0.95,0.57,0.97)`, `cubic-bezier(0.645,0.045,0.355,1)`, `ease-in`, `cubic-bezier(0.25,0.88,0.54,0.98)`, `cubic-bezier(0,.25,.07,1)`, `cubic-bezier(0,.33,.07,1.03)`, `cubic-bezier(.44,0,1,1)`
- **Animated properties:** `grid-template-rows`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0s) for micro-interactions, long (1500ms) for page transitions
- **Easing:** Use `ease-out` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Subtle: `inset 0-1px 0 rgba(0,0,0,.102)`
- Subtle: `inset 0 0 0 1px rgba(0,0,0,.1)`
- Subtle: `0 0 2px 0 rgba(183,8,78,.6)`
- Subtle: `0 0 2px 0 rgba(183,8,78,0)`
- Subtle: `0 0 2px #fff inset,0 1px 0 rgba(0,0,0,.05)`
- Subtle: `0 1px 0#fff inset`

### Z-Index Scale

`0, 1, 2, 3, 9, 10, 11, 20, 50, 90, 99, 100, 999, 1000, 1010, 9997, 9998, 9999, 10000, 100000, 2000000, 3000000, 5000000, 9999999999`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 5px
- **No extra fonts** — only Roboto and Arial are allowed
- **No arbitrary border-radius** — use the scale: 1.5em, 2em, 2px, 8px, 1px, 3px, 4px, 5px, 6px, 10px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Roboto, Arial only, using the type scale
4. **Build layout** on the 5px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://metivta.org.il/wp-content/uploads/2023/07/cropped-favicon_metivta_new_-32x32.jpg`
- **Site URL:** `https://metivta.org.il/%D7%9E%D7%A8%D7%9B%D7%96-%D7%98%D7%99%D7%A4%D7%95%D7%9C/%D7%9E%D7%A8%D7%9B%D7%96-%D7%99%D7%99%D7%A9%D7%95%D7%91-%D7%A1%D7%9B%D7%A1%D7%95%D7%9B%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A4%D7%97%D7%94/`
- **Brand typeface:** Roboto

## Quick Reference

```
Background:     #313131
Surface:        #16163f
Text:           #ffffff / #40464d
Accent:         (not extracted)
Border:         #1e1f26
Font:           Roboto
Spacing:        5px grid
Radius:         6px
Components:     10 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for metivta
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "metivta" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# metivta DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 10
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![metivta Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a neutral tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Arial** for display/headings with **Roboto** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **5px base grid** (standard density), with scale: 5, 10, 15, 20, 25, 30, 35, 40px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#313131` | background | Page background, darkest surface |
| surface | `#16163f` | surface | Card and panel backgrounds |
| swiper-preloader-color | `#ffffff` | text-primary | Headings and body text |
| text-muted | `#40464d` | text-muted | Captions, placeholders, secondary info |
| e-global-color-aeace8d | `#1e1f26` | border | Dividers, card borders, outlines |
| danger | `#cc3366` | danger | Error states, destructive actions |
| e-global-color-ed02a25 | `#023328` | success | Success states, positive indicators |
| e-global-color-primary | `#6ec1e4` | info | Informational highlights |
| swiper-preloader-color | `#000000` | unknown | Palette color |
| e-global-color-bce5698 | `#f0f0f0` | unknown | Palette color |
| e-global-color-9970dd8 | `#13b9a1` | unknown | Palette color |
| unknown | `#4268c1` | unknown | Palette color |
| unknown | `#203d5a` | unknown | Palette color |
| unknown | `#cccccc` | unknown | Palette color |
| unknown | `#69727d` | unknown | Palette color |
| wp-editor-canvas-background | `#dddddd` | unknown | Palette color |
| e-global-color-c2bc9b2 | `#134439` | unknown | Palette color |
| unknown | `#933afe` | unknown | Palette color |
| unknown | `#111111` | unknown | Palette color |
| unknown | `#d9534f` | unknown | Palette color |

### CSS Variable Tokens

```css
--wp-editor-canvas-background: #ddd;
--wp-admin-border-width-focus: 2px;
--wp-admin-border-width-focus: 1.5px;
--border-radius: 0;
--border-top-width: 0px;
--border-right-width: 0px;
--border-bottom-width: 0px;
--border-left-width: 0px;
--border-style: initial;
--border-color: initial;
--border-block-start-width: var(--border-top-width);
--border-block-end-width: var(--border-bottom-width);
--border-inline-start-width: var(--border-left-width);
--border-inline-end-width: var(--border-right-width);
--border-inline-start-width: var(--border-right-width);
--border-inline-end-width: var(--border-left-width);
--e-global-color-primary: #6EC1E4;
--e-global-color-secondary: #54595F;
--e-global-color-accent: #61CE70;
--e-global-typography-primary-font-family: "Heebo";
```


---

## 3. Typography Rules

**Font Stack:**
- **Roboto** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Heebo";
  src: url("fonts/Heebo-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Heebo";
  src: url("fonts/Heebo-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Montserrat";
  src: url("fonts/Montserrat-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("fonts/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "swiper-icons";
  src: url("data:application/font-woff;charset=utf-8;base64, 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");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Roboto | 165px | 700 |
| Heading 2 | Roboto | 140px | 700 |
| Heading 3 | Roboto | 100px | 700 |
| Body | Arial | 14px | 400 |
| Caption | Arial | 16px | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Roboto** for body/UI text, **Arial** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 5px
- **Spacing scale:** 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
- **Border radius:** 1.5em, 2em, 2px, 8px, inherit, 1px, 3px, 4px, 5px, 6px, 10%, 10px, 20px, 50px, 100%, 100px, 150px, 999px
- **Max content width:** 1024px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 0-1px 0 rgba(0,0,0,.102)`
- `inset 0 0 0 1px rgba(0,0,0,.1)`
- `0 0 2px 0 rgba(183,8,78,.6)`

### Raised — cards, buttons, interactive elements

- `0 .35rem 0 currentColor`
- `var(--jp-container-box-shadow,none)`
- `0 0 0 0 rgba(183,8,78,.6)`

### Floating — dropdowns, popovers, modals

- `0 0 10px #e0e0e8`
- `0 0 2px 10px rgba(183,8,78,0)`
- `0px 15px 20px 0px rgba(0,0,0,0.1)`

### Overlay — full-screen overlays, top-level dialogs

- `0px 5px 30px 0px rgba(0,0,0,0.1)`
- `2px 8px 23px 3px rgba(0,0,0,0.2)`
- `0 0 30px 0 rgba(0,0,0,.15)`

### Z-Index Scale

`0, 1, 2, 3, 9, 10, 11, 20, 50, 90, 99, 100, 999, 1000, 1010, 9997, 9998, 9999, 10000, 100000, 2000000, 3000000, 5000000, 9999999999`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes show-content-image`
- `@keyframes turn-on-visibility`
- `@keyframes turn-off-visibility`
- `@keyframes lightbox-zoom-in`
- `@keyframes lightbox-zoom-out`
- `@keyframes overlay-menu__fade-in-animation`
- `@keyframes jet-engine-spin`
- `@keyframes jet-engine-map-spin`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#313131` as the primary page background
- Pair **Roboto** (body) with **Arial** (display) — these are the only allowed fonts
- Follow the **5px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 1.5em, 2em, 2px, 8px, inherit
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Roboto and Arial
- Don't use arbitrary spacing values — stick to multiples of 5px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 1px | css |
| xs | 479px | css |
| xs | 480px | css |
| sm | 575px | css |
| sm | 576px | css |
| sm | 600px | css |
| sm | 640px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 781px | css |
| lg | 782px | css |
| lg | 800px | css |
| lg | 991px | css |
| lg | 992px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1200px | css |
| 2xl | 1440px | css |
| 2xl | 99999px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #16163f
Border: 1px solid #1e1f26
Radius: 6px
Padding: 20px
Font: Roboto
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #1e1f26
Padding: 10px 20px
Radius: 6px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #313131
Max-width: 1024px, centered
Grid: 5px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #16163f
Label: #40464d (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #313131
Input border: 1px solid #1e1f26
Focus: border-color var(--accent)
Label: #40464d 12px
Spacing: 20px between fields
Radius: 6px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Roboto, type scale from Section 3
4. Spacing: 5px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Visual Guide — Screenshots (VISUAL_GUIDE.md)

# metivta — Visual Guide

> Master visual reference. Study every screenshot carefully before implementing any UI.
> Match colors, layout, typography, spacing, and motion states exactly.

**Motion Stack:** **Anime.js**

## Scroll Journey

The page has cinematic scroll animations. Each screenshot below shows the exact visual state at that scroll depth.
**Replicate these transitions precisely** — the design changes dramatically as you scroll.

### Hero — Above the fold

*Scroll position: 0px of 6930px total*

![Hero — Above the fold](../screens/scroll/scroll-000.png)

### 17% scroll depth

*Scroll position: 1025px of 6930px total*

![17% scroll depth](../screens/scroll/scroll-017.png)

### 33% scroll depth

*Scroll position: 1990px of 6930px total*

![33% scroll depth](../screens/scroll/scroll-033.png)

### 50% scroll depth

*Scroll position: 3015px of 6930px total*

![50% scroll depth](../screens/scroll/scroll-050.png)

### 67% scroll depth

*Scroll position: 4040px of 6930px total*

![67% scroll depth](../screens/scroll/scroll-067.png)

### 83% scroll depth

*Scroll position: 5005px of 6930px total*

![83% scroll depth](../screens/scroll/scroll-083.png)

### Footer — End of page

*Scroll position: 6030px of 6930px total*

![Footer — End of page](../screens/scroll/scroll-100.png)

## Full Page Screenshots

### מרכז יישוב סכסוכים במשפחה גישור במטיבתא - כנסו לפרטים נוספים

*URL: `https://metivta.org.il/%D7%9E%D7%A8%D7%9B%D7%96-%D7%98%D7%99%D7%A4%D7%95%D7%9C/%D7%9E%D7%A8%D7%9B%D7%96-%D7%99%D7%99%D7%A9%D7%95%D7%91-%D7%A1%D7%9B%D7%A1%D7%95%D7%9B%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A4%D7%97%D7%94/`*

![מרכז יישוב סכסוכים במשפחה גישור במטיבתא - כנסו לפרטים נוספים](../screens/pages/-D7-9E-D7-A8-D7-9B-D7-96-D7-98-D7-99-D7-A4-D7-95-D7-9C-D7-9E.png)

### הפרופיל שלי - מטיבתא

*URL: `https://metivta.org.il/my-profile/`*

![הפרופיל שלי - מטיבתא](../screens/pages/my-profile.png)

### מטיבת"א - טיפול וייעוץ בציבור החרדי והדתי | תמיכה נפשית 24/6

*URL: `https://metivta.org.il/`*

![מטיבת"א - טיפול וייעוץ בציבור החרדי והדתי | תמיכה נפשית 24/6](../screens/pages/home.png)

### מוקד קו סיוע נפשי טלפוני - מוקד מטיבת"א לכל בעיה 24/6

*URL: `https://metivta.org.il/%D7%9E%D7%95%D7%A7%D7%93-%D7%A1%D7%99%D7%95%D7%A2-%D7%A0%D7%A4%D7%A9%D7%99/`*

![מוקד קו סיוע נפשי טלפוני - מוקד מטיבת"א לכל בעיה 24/6](../screens/pages/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4.png)

### ייעוץ זוגי ומשפחתי במטיבת"א - ייעוץ נישואין מתוך יראת שמים

*URL: `https://metivta.org.il/%D7%99%D7%99%D7%A2%D7%95%D7%A5-%D7%96%D7%95%D7%92%D7%99-%D7%9E%D7%95%D7%A7%D7%93-%D7%A1%D7%99%D7%95%D7%A2-%D7%95%D7%9E%D7%99%D7%93%D7%A2/`*

![ייעוץ זוגי ומשפחתי במטיבת"א - ייעוץ נישואין מתוך יראת שמים](../screens/pages/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E.png)

## Section Screenshots

Clipped sections showing individual components in context.

### Section 1 — `footer`

*1440×544px*

![Section 1](../screens/sections/my-profile-section-1.png)

### Section 1 — `section`

*1440×530px*

![Section 1](../screens/sections/home-section-1.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4-section-1.png)

### Section 1 — `section`

*1440×1200px*

![Section 1](../screens/sections/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E-section-1.png)

## Animations & Motion (ANIMATIONS.md)

# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Anime.js v2.2.0** | animation |  |

## Scroll Journey

The page is **6,930px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,025px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 1,990px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3,015px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 4,040px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 5,005px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 6,030px

![Scroll 100%](../screens/scroll/scroll-100.png)

## CSS Keyframes (79 extracted)

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0%, 50% {
    opacity: 0;
    transform: scale(0);
  }
}
```

> Fade + motion enter animation

### `@keyframes moveUp`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Fill: `backwards`

Used by: `.jet-tabs-move-up-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-tabs-column-move-up-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-move-up-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-move-up-effect .jet-switcher__content.active-content`

```css
@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes moveUp`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Fill: `backwards`

Used by: `.jet-tabs-move-up-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-tabs-column-move-up-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-move-up-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-move-up-effect .jet-switcher__content.active-content`

```css
@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes zoomIn`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-in-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-toggle-zoom-in-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-zoom-in-effect .jet-switcher__content.active-content`

```css
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomIn`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-in-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-toggle-zoom-in-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-zoom-in-effect .jet-switcher__content.active-content`

```css
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomOut`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-out-effect > .jet-tabs__content-wrapper > .jet-tabs__content.acti`, `.jet-toggle-zoom-out-effect.active-toggle .jet-toggle__content .jet-toggle__cont`, `.jet-switcher-zoom-out-effect .jet-switcher__content.active-content`

```css
@keyframes zoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomOut`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-out-effect > .jet-tabs__content-wrapper > .jet-tabs__content.acti`, `.jet-toggle-zoom-out-effect.active-toggle .jet-toggle__content .jet-toggle__cont`, `.jet-switcher-zoom-out-effect .jet-switcher__content.active-content`

```css
@keyframes zoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes fallPerspective`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-fall-perspective-effect > .jet-tabs__content-wrapper > .jet-tabs__cont`, `.jet-toggle-fall-perspective-effect.active-toggle .jet-toggle__content .jet-togg`, `.jet-switcher-fall-perspective-effect .jet-switcher__content.active-content`

```css
@keyframes fallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes fallPerspective`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-fall-perspective-effect > .jet-tabs__content-wrapper > .jet-tabs__cont`, `.jet-toggle-fall-perspective-effect.active-toggle .jet-toggle__content .jet-togg`, `.jet-switcher-fall-perspective-effect .jet-switcher__content.active-content`

```css
@keyframes fallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes edit-button-pulse`

Duration: `5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-tabs__edit-cover`, `.jet-toggle__edit-cover`, `.jet-switcher__edit-cover`

```css
@keyframes edit-button-pulse {
  0% {
    box-shadow: rgba(183, 8, 78, 0.6) 0px 0px 2px 0px;
  }
  30% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 10px;
  }
  100% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 0px;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes edit-button-pulse`

Duration: `5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-tabs__edit-cover`, `.jet-toggle__edit-cover`, `.jet-switcher__edit-cover`

```css
@keyframes edit-button-pulse {
  0% {
    box-shadow: rgba(183, 8, 78, 0.6) 0px 0px 2px 0px;
  }
  30% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 10px;
  }
  100% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 0px;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes eicon-spin`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.elementor-custom-embed-play.elementor-playing i, .elementor-custom-embed-play.e`, `.eicon-animation-spin`

```css
@keyframes eicon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes animatetopfix_ur_web`

Duration: `0.4s`

Used by: `.fix_ur_web_modal-content_Disclaimer`, `.fix_ur_web_modal-content`

```css
@keyframes animatetopfix_ur_web {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes animatetopfix_ur_web`

Duration: `0.4s`

Used by: `.fix_ur_web_modal-content_Disclaimer`, `.fix_ur_web_modal-content`

```css
@keyframes animatetopfix_ur_web {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes checked-radio-4`

Duration: `0.6s` · Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_green:checked + .fix_ur_web_color_radio_boxe`, `.fix_ur_web_color_radio_boxes_radio_white:checked + .fix_ur_web_color_radio_boxe`

```css
@keyframes checked-radio-4 {
  0% {
    transform: rotate(0deg) translateY(-4.8vw) scale(0.2);
  }
  83% {
    transform: rotate(360deg) translateY(-2.5vw) scale(1);
    transform-origin: 2vw center;
  }
  88% {
    transform: translateY(0.6vw) scale(1);
  }
  93% {
    transform: translateY(-0.9vw) scale(1);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes unchecked-radio-4`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_green + .fix_ur_web_color_radio_boxes_label:`, `.fix_ur_web_color_radio_boxes_radio_white + .fix_ur_web_color_radio_boxes_label:`

```css
@keyframes unchecked-radio-4 {
  25% {
    top: -1vw;
  }
  50% {
    top: 1vw;
  }
  75% {
    top: -1vw;
  }
  100% {
    top: -1vw;
    transform: scale(0);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-listing-grid__loader-spinner`

```css
@keyframes jet-engine-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-listing-grid__loader-spinner`

```css
@keyframes jet-engine-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-map-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-map-box .jet-map-preloader .jet-map-loader`

```css
@keyframes jet-engine-map-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-map-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-map-box .jet-map-preloader .jet-map-loader`

```css
@keyframes jet-engine-map-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-mailchimp__submit::before`

```css
@keyframes jet-spinner {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-mailchimp__submit::before`

```css
@keyframes jet-spinner {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes hide-scroll`

Duration: `0.3s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.elementor-nav-menu--toggle .elementor-menu-toggle.elementor-active + .elementor`

```css
@keyframes hide-scroll {
  0%, 100% {
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
```

### `@keyframes elementor-animation-pulse-grow`

Duration: `0.3s` · Easing: `linear` · Iteration: `infinite`

Used by: `.elementor-animation-pulse-grow:active, .elementor-animation-pulse-grow:focus, .`

```css
@keyframes elementor-animation-pulse-grow {
  100% {
    transform: scale(1.1);
  }
}
```

> Transform/motion animation

### `@keyframes swiper-preloader-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader, .swiper:not`

```css
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes loadingOpacityAnimation`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.elementor-widget-loop-grid.e-loading-overlay`

```css
@keyframes loadingOpacityAnimation {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
```

> Opacity fade

### `@keyframes spin_fix_ur_web`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.loader_fix_ur_web`

```css
@keyframes spin_fix_ur_web {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes spin_fix_ur_web`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.loader_fix_ur_web`

```css
@keyframes spin_fix_ur_web {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes roll`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.fix_ur_web_side_icon:hover .fix_ur_web_enable_icon`

```css
@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes dot-anim`

Duration: `1.6s` · Easing: `ease-in-out` · Iteration: `infinite`

Used by: `.fix_ur_web_color_radio_boxes_label`

```css
@keyframes dot-anim {
  0% {
    top: -0.2vw;
  }
  50% {
    top: 0.2vw;
  }
  100% {
    top: -0.2vw;
  }
}
```

### `@keyframes checked-radio-3`

Duration: `0.4s` · Easing: `ease-in-out` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_teal:checked + .fix_ur_web_color_radio_boxes`

```css
@keyframes checked-radio-3 {
  0% {
    top: -1vw;
    transform: scale(0);
  }
  100% {
    top: 0px;
    transform: scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes unchecked-radio-3`

Duration: `0.2s` · Easing: `ease-in-out`

Used by: `.fix_ur_web_color_radio_boxes_radio_teal + .fix_ur_web_color_radio_boxes_label::`

```css
@keyframes unchecked-radio-3 {
  0% {
    bottom: 0px;
    transform: scale(1);
  }
  100% {
    bottom: -1vw;
    transform: scale(0);
  }
}
```

> Transform/motion animation

### `@keyframes show-content-image`

```css
@keyframes show-content-image {
  0% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

### `@keyframes turn-on-visibility`

```css
@keyframes turn-on-visibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes turn-off-visibility`

```css
@keyframes turn-off-visibility {
  0% {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
```

> Opacity fade

### `@keyframes lightbox-zoom-in`

```css
@keyframes lightbox-zoom-in {
  0% {
    transform: translate(calc(((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position))*-1),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
  }
  100% {
    transform: translate(50%, -50%) scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes lightbox-zoom-out`

```css
@keyframes lightbox-zoom-out {
  0% {
    transform: translate(50%, -50%) scale(1);
    visibility: visible;
  }
  99% {
    visibility: visible;
  }
  100% {
    transform: translate(calc(((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position))*-1),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
    visibility: hidden;
  }
}
```

> Transform/motion animation

### `@keyframes overlay-menu__fade-in-animation`

```css
@keyframes overlay-menu__fade-in-animation {
  0% {
    opacity: 0;
    transform: translateY(0.5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes columnMoveUp`

```css
@keyframes columnMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes columnMoveUp`

```css
@keyframes columnMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFade`

```css
@keyframes jetFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes jetFade`

```css
@keyframes jetFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes jetZoomIn`

```css
@keyframes jetZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomIn`

```css
@keyframes jetZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomOut`

```css
@keyframes jetZoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomOut`

```css
@keyframes jetZoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUp`

```css
@keyframes jetMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUp`

```css
@keyframes jetMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUpBig`

```css
@keyframes jetMoveUpBig {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUpBig`

```css
@keyframes jetMoveUpBig {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDown`

```css
@keyframes jetMoveDown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDown`

```css
@keyframes jetMoveDown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDownBig`

```css
@keyframes jetMoveDownBig {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDownBig`

```css
@keyframes jetMoveDownBig {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeft`

```css
@keyframes jetMoveLeft {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeft`

```css
@keyframes jetMoveLeft {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeftBig`

```css
@keyframes jetMoveLeftBig {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeftBig`

```css
@keyframes jetMoveLeftBig {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRight`

```css
@keyframes jetMoveRight {
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRight`

```css
@keyframes jetMoveRight {
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRightBig`

```css
@keyframes jetMoveRightBig {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRightBig`

```css
@keyframes jetMoveRightBig {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFallPerspective`

```css
@keyframes jetFallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFallPerspective`

```css
@keyframes jetFallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInX`

```css
@keyframes jetFlipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInX`

```css
@keyframes jetFlipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInY`

```css
@keyframes jetFlipInY {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInY`

```css
@keyframes jetFlipInY {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: transform var(--rm-related-transition),box-shadow var(--rm-related-transition);
transition: color 0.2s;
transition: transform 0.3s;
transition: background 0.2s, transform 0.2s;
transition: 150ms linear;
transition: 0.2s linear;
transition: opacity 0.2s linear;
transition: 0.3s;
transition: 0.2s ease-in-out;
transition: max-height 0.3s, transform 0.3s;
transition: 0.2s;
transition: opacity 1s;
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
npm install animejs
```

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `0.2s` · `0.3s` · `150ms` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1025px`) → `screens/scroll/scroll-017.png`
- **33%** (`1990px`) → `screens/scroll/scroll-033.png`
- **50%** (`3015px`) → `screens/scroll/scroll-050.png`
- **67%** (`4040px`) → `screens/scroll/scroll-067.png`
- **83%** (`5005px`) → `screens/scroll/scroll-083.png`
- **100%** (`6030px`) → `screens/scroll/scroll-100.png`

## Layout & Grid (LAYOUT.md)

# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 5px

**Scale:** `5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80` px

| Spacing | Semantic Use |
|---------|-------------|
| 5px | Tight — within a component |
| 10px | Medium — between sibling items |
| 20px | Wide — between sections |
| 40px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `header#header_pop.elementor-element.elementor-element-a3a90` | column | — | center | 0px | 2 |
| `footer.elementor-element.elementor-element-911bc95` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b6b71fc` | column | — | — | — | 2 |
| `div.elementor-element.elementor-element-447ddc1` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-45de3de` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b20b720` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-3cfff61` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-d9f3a8a` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b558bce` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-a1dfeb8` | column | — | — | — | 1 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |

## Structural Containers

### `<header>` (`header.elementor.elementor-14324`)

```
display:          block
children:         1
```

### `<footer>` (`footer.elementor.elementor-592`)

```
display:          block
children:         2
```

### `<header>` (`header#header_pop.elementor-element.elementor-element-a3a90`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      center
gap:              0px
max-width:        100%
children:         2
```

### `<footer>` (`footer.elementor-element.elementor-element-911bc95`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
padding:          0px 10px
max-width:        100%
children:         1
```

## Layout Rules

- **Container max-width:** `100%` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **5px**
- Never use arbitrary margin/padding values outside the spacing scale

## Component Patterns (COMPONENTS.md)

# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Elementor Icon List Text** | unknown | 29× | `.elementor-icon-list-text` |
| **Elementor Widget Container** | unknown | 12× | `.elementor-widget-container` |
| **Elementor Widget Container** | unknown | 7× | `.elementor-widget-container` |
| **E Child** | unknown | 7× | `.e-child`, `.e-con`, `.e-con-full` |
| **E Con** | unknown | 6× | `.e-con`, `.e-con-boxed`, `.e-flex` |
| **E Con Inner** | unknown | 4× | `.e-con-inner` |
| **Elementor Item** | card | 4× | `.elementor-item` |
| **Elementor Button Wrapper** | button | 4× | `.elementor-button-wrapper` |
| **Elementor Spacer** | unknown | 4× | `.elementor-spacer` |
| **Elementor Spacer Inner** | unknown | 4× | `.elementor-spacer-inner` |
| **Elementor Field** | form-field | 4× | `.elementor-field`, `.elementor-field-textual`, `.elementor-size-sm` |
| **E Child** | unknown | 3× | `.e-child`, `.e-con`, `.e-con-boxed` |
| **E Con Inner** | unknown | 3× | `.e-con-inner` |
| **E Child** | unknown | 3× | `.e-child`, `.e-con`, `.e-con-full` |
| **Elementor Icon List Item** | card | 3× | `.elementor-icon-list-item`, `.elementor-inline-item` |
| **E Con Inner** | unknown | 3× | `.e-con-inner` |
| **Elementor Widget Container** | unknown | 3× | `.elementor-widget-container` |
| **Elementor Heading Title** | unknown | 3× | `.elementor-heading-title`, `.elementor-size-default` |
| **Elementor Animation Grow** | button | 3× | `.elementor-animation-grow`, `.elementor-button`, `.elementor-button-link` |
| **Elementor Widget Container** | unknown | 3× | `.elementor-widget-container` |

## Cards

### Elementor Item

**Instances found:** 4

**CSS classes:** `.elementor-item`

**HTML structure:**

```html
<a href="https://metivta.org.il/%D7%9E%D7%95%D7%A7%D7%93-%D7%A1%D7%99%D7%95%D7%A2-%D7%A0%D7%A4%D7%A9%D7%99/" class="elementor-item">מוקד קו סיוע נפשי טלפוני</a>
```

**Base styles (from design tokens):**

```css
.elementor-item {
  background: #16163f;
  border: 1px solid #1e1f26;
  border-radius: 6px;
  padding: 10px;
}```

### Elementor Icon List Item

**Instances found:** 3

**CSS classes:** `.elementor-icon-list-item` `.elementor-inline-item`

**HTML structure:**

```html
<li class="elementor-icon-list-item elementor-inline-item"> <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjQ5IiwidG9nZ2xlIjpmYWxzZX0%3D"> <span class="elementor-icon-list-icon"> <svg aria-hidden="true" class="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41
```

**Base styles (from design tokens):**

```css
.elementor-icon-list-item {
  background: #16163f;
  border: 1px solid #1e1f26;
  border-radius: 6px;
  padding: 10px;
}```

## Buttons

### Elementor Button Wrapper

**Instances found:** 4

**CSS classes:** `.elementor-button-wrapper`

**HTML structure:**

```html
<div class="elementor-button-wrapper"> <a class="elementor-button elementor-button-link elementor-size-md elementor-animation-pulse-grow" href="https://metivta.org.il/%D7%A2%D7%96%D7%A8%D7%94-%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94-%D7%A0%D7%A4%D7%A9%D7%99%D7%AA/"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-icon"> </span> <span class="elementor-button-text">פנה למוקד &gt;&gt; </span> </span> </a> </div>
```

**Base styles (from design tokens):**

```css
.elementor-button-wrapper {
  color: #ffffff;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
}```

### Elementor Animation Grow

**Instances found:** 3

**CSS classes:** `.elementor-animation-grow` `.elementor-button` `.elementor-button-link` `.elementor-size-sm`

**HTML structure:**

```html
<a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="tel:0733300605"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-icon"> <svg aria-hidden="true" class="e-font-icon-svg e-fas-phone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18
```

**Base styles (from design tokens):**

```css
.elementor-animation-grow {
  color: #ffffff;
  border-radius: 6px;
  padding: 5px 10px;
  cursor: pointer;
}```

## Form Fields

### Elementor Field

**Instances found:** 4

**CSS classes:** `.elementor-field` `.elementor-field-textual` `.elementor-size-sm`

**HTML structure:**

```html
<input size="1" type="text" name="form_fields[name]" id="form-field-name" class="elementor-field elementor-size-sm elementor-field-textual" placeholder="שם">
```

**Base styles (from design tokens):**

```css
.elementor-field {
  background: #16163f;
  padding: 5px;
}```

## Other Components

### Elementor Icon List Text

**Instances found:** 29

**CSS classes:** `.elementor-icon-list-text`

**HTML structure:**

```html
<span class="elementor-icon-list-text">הרשמה לניוזלטר</span>
```

**Base styles (from design tokens):**

```css
.elementor-icon-list-text {
  background: #16163f;
  padding: 5px;
}```

### Elementor Widget Container

**Instances found:** 12

**CSS classes:** `.elementor-widget-container`

**HTML structure:**

```html
<div class="elementor-widget-container"> <div class="elementor-button-wrapper"> <a class="elementor-button elementor-button-link elementor-size-md elementor-animation-pulse-grow" href="https://metivta.org.il/%D7%A2%D7%96%D7%A8%D7%94-%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94-%D7%A0%D7%A4%D7%A9%D7%99%D7%AA/"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-icon"> </span> <span class="elementor-button-text">פנה למוקד &gt;&gt; </span> </span> </a> </div> </div>
```

**Base styles (from design tokens):**

```css
.elementor-widget-container {
  background: #16163f;
  padding: 5px;
}```

### Elementor Widget Container

**Instances found:** 7

**CSS classes:** `.elementor-widget-container`

**HTML structure:**

```html
<div class="elementor-widget-container"> <ul class="elementor-icon-list-items elementor-inline-items"> <li class="elementor-icon-list-item elementor-inline-item"> <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE5MjQ5IiwidG9nZ2xlIjpmYWxzZX0%3D"> <span class="elementor-icon-list-icon"> <svg aria-hidden="true" class="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 
```

**Base styles (from design tokens):**

```css
.elementor-widget-container {
  background: #16163f;
  padding: 5px;
}```

### E Child

**Instances found:** 7

**CSS classes:** `.e-child` `.e-con` `.e-con-full` `.e-flex` `.elementor-element` `.elementor-element-13e6fd1e`

**HTML structure:**

```html
<div class="elementor-element elementor-element-13e6fd1e e-con-full e-flex e-con e-child" data-id="13e6fd1e" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}"> <div class="elementor-element elementor-element-407a3070 elementor-search-form--skin-full_screen elementor-widget elementor-widget-search-form" data-id="407a3070" data-element_type="widget" data-e-type="widget" data-settings="{&quot;skin&quot;:&quot;full_screen&quot;}" aria-label="search button" data-widget_type="search-form.default"> <div class="elementor-widget-container"> 
```

**Base styles (from design tokens):**

```css
.e-child {
  background: #16163f;
  padding: 5px;
}```

### E Con

**Instances found:** 6

**CSS classes:** `.e-con` `.e-con-boxed` `.e-flex` `.e-parent` `.elementor-element` `.elementor-element-45de3de`

**HTML structure:**

```html
<div class="elementor-element elementor-element-45de3de e-flex e-con-boxed e-con e-parent" data-id="45de3de" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}"> <div data-rocket-location-hash="9df018fcc06d2a8d86518aee4205e42f" class="e-con-inner"> <div class="elementor-element elementor-element-a10be13 elementor-widget elementor-widget-spacer" data-id="a10be13" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default"> <div class="elementor-widget-container"> <div class="elementor-spacer"> <div class="elemento
```

**Base styles (from design tokens):**

```css
.e-con {
  background: #16163f;
  padding: 5px;
}```

### E Con Inner

**Instances found:** 4

**CSS classes:** `.e-con-inner`

**HTML structure:**

```html
<div data-rocket-location-hash="456ea9f7c556a7611a63847305a63a95" class="e-con-inner"> <div class="elementor-element elementor-element-4590b3b8 elementor-widget elementor-widget-image" data-id="4590b3b8" data-element_type="widget" data-e-type="widget" data-widget_type="image.default"> <div class="elementor-widget-container"> <a href="https://metivta.org.il"> <img width="590" height="208" src="https://metivta.org.il/wp-content/uploads/2023/05/logo_metivta.png" class="attachment-large size-large wp-image-16991 entered lazyloaded" alt="לוגו מטיבת&quot;א" data-lazy-src="https://metivta.org.il/wp-c
```

**Base styles (from design tokens):**

```css
.e-con-inner {
  background: #16163f;
  padding: 5px;
}```

### Elementor Spacer

**Instances found:** 4

**CSS classes:** `.elementor-spacer`

**HTML structure:**

```html
<div class="elementor-spacer"> <div class="elementor-spacer-inner"></div> </div>
```

**Base styles (from design tokens):**

```css
.elementor-spacer {
  background: #16163f;
  padding: 5px;
}```

### Elementor Spacer Inner

**Instances found:** 4

**CSS classes:** `.elementor-spacer-inner`

**HTML structure:**

```html
<div class="elementor-spacer-inner"></div>
```

**Base styles (from design tokens):**

```css
.elementor-spacer-inner {
  background: #16163f;
  padding: 5px;
}```

### E Child

**Instances found:** 3

**CSS classes:** `.e-child` `.e-con` `.e-con-boxed` `.e-flex` `.elementor-element` `.elementor-element-5686627d`

**HTML structure:**

```html
<div class="elementor-element elementor-element-5686627d e-flex e-con-boxed e-con e-child" data-id="5686627d" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;jet_parallax_layout_list&quot;:[]}"> <div data-rocket-location-hash="7d0ce0601f4dee916c7ce6cc61b61694" class="e-con-inner"> <div class="elementor-element elementor-element-56808af7 elementor-hidden-mobile e-con-full e-flex e-con e-child" data-id="56808af7" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&qu
```

**Base styles (from design tokens):**

```css
.e-child {
  background: #16163f;
  padding: 5px;
}```

### E Con Inner

**Instances found:** 3

**CSS classes:** `.e-con-inner`

**HTML structure:**

```html
<div data-rocket-location-hash="7d0ce0601f4dee916c7ce6cc61b61694" class="e-con-inner"> <div class="elementor-element elementor-element-56808af7 elementor-hidden-mobile e-con-full e-flex e-con e-child" data-id="56808af7" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}"> <div class="elementor-element elementor-element-526820d6 elementor-icon-list--layout-inline elementor-align-end elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="526820d6" data-element_type="widget
```

**Base styles (from design tokens):**

```css
.e-con-inner {
  background: #16163f;
  padding: 5px;
}```

### E Child

**Instances found:** 3

**CSS classes:** `.e-child` `.e-con` `.e-con-full` `.e-flex` `.elementor-element` `.elementor-element-56808af7`

**HTML structure:**

```html
<div class="elementor-element elementor-element-56808af7 elementor-hidden-mobile e-con-full e-flex e-con e-child" data-id="56808af7" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}"> <div class="elementor-element elementor-element-526820d6 elementor-icon-list--layout-inline elementor-align-end elementor-mobile-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="526820d6" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default"> <div class="elementor-widg
```

**Base styles (from design tokens):**

```css
.e-child {
  background: #16163f;
  padding: 5px;
}```

### E Con Inner

**Instances found:** 3

**CSS classes:** `.e-con-inner`

**HTML structure:**

```html
<div data-rocket-location-hash="0b77f88eca57d1f1b60428c6e9049c86" class="e-con-inner"> <div class="elementor-element elementor-element-ad8d946 e-flex e-con-boxed e-con e-child" data-id="ad8d946" data-element_type="container" data-e-type="container" data-settings="{&quot;jet_parallax_layout_list&quot;:[]}"> <div data-rocket-location-hash="4bcced5dacfc99884bf5fb20cef12e85" class="e-con-inner"> <div class="elementor-element elementor-element-0b492a2 elementor-widget elementor-widget-spacer" data-id="0b492a2" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default"> <div c
```

**Base styles (from design tokens):**

```css
.e-con-inner {
  background: #16163f;
  padding: 5px;
}```

### Elementor Widget Container

**Instances found:** 3

**CSS classes:** `.elementor-widget-container`

**HTML structure:**

```html
<div class="elementor-widget-container"> <h2 class="elementor-heading-title elementor-size-default">תחומי הטיפול המוצעים במרכז לטיפול וייעוץ…</h2> </div>
```

**Base styles (from design tokens):**

```css
.elementor-widget-container {
  background: #16163f;
  padding: 5px;
}```

### Elementor Heading Title

**Instances found:** 3

**CSS classes:** `.elementor-heading-title` `.elementor-size-default`

**HTML structure:**

```html
<h2 class="elementor-heading-title elementor-size-default">תחומי הטיפול המוצעים במרכז לטיפול וייעוץ זוגי ומשפחתי: </h2>
```

**Base styles (from design tokens):**

```css
.elementor-heading-title {
  background: #16163f;
  padding: 5px;
}```

### Elementor Widget Container

**Instances found:** 3

**CSS classes:** `.elementor-widget-container`

**HTML structure:**

```html
<div class="elementor-widget-container"> <p>או השאירו פרטיכם כאן ונשמח לחזור אליכם ב…</p> </div>
```

**Base styles (from design tokens):**

```css
.elementor-widget-container {
  background: #16163f;
  padding: 5px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#1e1f26` for all dividers within components

## Interactions & States (INTERACTIONS.md)

# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 2 | default, hover, focus |
| Role Button | 1 | default, hover, focus |
| Link | 3 | default, hover, focus |
| Input | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: 0.3s;
transition: all;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `שליחה`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s`

### Button 2 — `הרשמה`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* background-color: rgb(19, 68, 57) → */ background-color: rgb(255, 255, 255);
/* color: rgb(255, 255, 255) → */ color: rgb(244, 154, 195);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(244, 154, 195);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(244, 154, 195) none 3px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(244, 154, 195);
```

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s`

## Role Button Interactions

### Role Button 1 — `חיפוש`

**States:**

- Default: `../screens/states/role-button-1-default.png`
- Hover: `../screens/states/role-button-1-hover.png`
- Focus: `../screens/states/role-button-1-focus.png`

**On hover:**

```css
/* color: rgb(255, 255, 255) → */ color: rgb(211, 181, 116);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(211, 181, 116);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(211, 181, 116) none 3px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(211, 181, 116);
```

**On focus:**

```css
/* color: rgb(255, 255, 255) → */ color: rgb(211, 181, 116);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(211, 181, 116);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

## Link Interactions

### Link 1 — `קליניקות מטפלים`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

### Link 2 — `איזור אישי`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

### Link 3 — `youtube chanel link`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

## Input Interactions

### Input 1 — `שם`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

### Input 2 — `אימייל`

**States:**

- Default: `../screens/states/input-2-default.png`
- Hover: `../screens/states/input-2-hover.png`
- Focus: `../screens/states/input-2-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

### Input 3 — `טלפון`

**States:**

- Default: `../screens/states/input-3-default.png`
- Hover: `../screens/states/input-3-hover.png`
- Focus: `../screens/states/input-3-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

## Interaction Rules

- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

## Design Tokens — JSON Files

### tokens/colors.json
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "core": {
    "text-primary": {
      "value": "#ffffff",
      "role": "text-primary",
      "name": "swiper-preloader-color"
    },
    "background": {
      "value": "#313131",
      "role": "background"
    },
    "surface": {
      "value": "#16163f",
      "role": "surface"
    },
    "text-muted": {
      "value": "#40464d",
      "role": "text-muted"
    },
    "border": {
      "value": "#1e1f26",
      "role": "border",
      "name": "e-global-color-aeace8d"
    }
  },
  "status": {
    "danger": {
      "value": "#cc3366",
      "role": "danger"
    },
    "success": {
      "value": "#023328",
      "role": "success",
      "name": "e-global-color-ed02a25"
    }
  },
  "extended": {
    "swiper-preloader-color": {
      "value": "#000000",
      "role": "unknown",
      "name": "swiper-preloader-color"
    },
    "e-global-color-bce5698": {
      "value": "#f0f0f0",
      "role": "unknown",
      "name": "e-global-color-bce5698"
    },
    "e-global-color-9970dd8": {
      "value": "#13b9a1",
      "role": "unknown",
      "name": "e-global-color-9970dd8"
    },
    "e-global-color-primary": {
      "value": "#6ec1e4",
      "role": "info",
      "name": "e-global-color-primary"
    },
    "color-4268c1": {
      "value": "#4268c1",
      "role": "unknown"
    },
    "color-203d5a": {
      "value": "#203d5a",
      "role": "unknown"
    },
    "color-cccccc": {
      "value": "#cccccc",
      "role": "unknown"
    },
    "color-69727d": {
      "value": "#69727d",
      "role": "unknown"
    },
    "wp-editor-canvas-background": {
      "value": "#dddddd",
      "role": "unknown",
      "name": "wp-editor-canvas-background"
    },
    "e-global-color-c2bc9b2": {
      "value": "#134439",
      "role": "unknown",
      "name": "e-global-color-c2bc9b2"
    },
    "color-933afe": {
      "value": "#933afe",
      "role": "unknown"
    },
    "color-111111": {
      "value": "#111111",
      "role": "unknown"
    },
    "color-d9534f": {
      "value": "#d9534f",
      "role": "unknown"
    }
  },
  "meta": {
    "theme": "dark",
    "extracted": "2026-04-24"
  }
}
```

### tokens/spacing.json
```json
{
  "base": {
    "value": "5px",
    "description": "Grid unit — all spacing must be multiples of this"
  },
  "unit": "px",
  "scale": {
    "xs": {
      "value": "5px",
      "px": 5
    },
    "sm": {
      "value": "10px",
      "px": 10
    },
    "md": {
      "value": "15px",
      "px": 15
    },
    "lg": {
      "value": "20px",
      "px": 20
    },
    "xl": {
      "value": "25px",
      "px": 25
    },
    "2xl": {
      "value": "30px",
      "px": 30
    },
    "3xl": {
      "value": "35px",
      "px": 35
    },
    "4xl": {
      "value": "40px",
      "px": 40
    },
    "5xl": {
      "value": "45px",
      "px": 45
    },
    "6xl": {
      "value": "50px",
      "px": 50
    }
  },
  "multipliers": {
    "1x": {
      "value": "5px",
      "raw": 5
    },
    "2x": {
      "value": "10px",
      "raw": 10
    },
    "3x": {
      "value": "15px",
      "raw": 15
    },
    "4x": {
      "value": "20px",
      "raw": 20
    },
    "5x": {
      "value": "25px",
      "raw": 25
    },
    "6x": {
      "value": "30px",
      "raw": 30
    },
    "7x": {
      "value": "35px",
      "raw": 35
    },
    "8x": {
      "value": "40px",
      "raw": 40
    },
    "9x": {
      "value": "45px",
      "raw": 45
    },
    "10x": {
      "value": "50px",
      "raw": 50
    },
    "11x": {
      "value": "55px",
      "raw": 55
    },
    "12x": {
      "value": "60px",
      "raw": 60
    },
    "13x": {
      "value": "65px",
      "raw": 65
    },
    "14x": {
      "value": "70px",
      "raw": 70
    },
    "15x": {
      "value": "75px",
      "raw": 75
    },
    "16x": {
      "value": "80px",
      "raw": 80
    }
  },
  "meta": {
    "totalValues": 15,
    "min": 5,
    "max": 80
  }
}
```

### tokens/typography.json
```json
{
  "families": [
    "Roboto",
    "Arial"
  ],
  "scale": {
    "heading-1": {
      "fontFamily": "Roboto",
      "fontSize": "165px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-2": {
      "fontFamily": "Roboto",
      "fontSize": "140px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-3": {
      "fontFamily": "Roboto",
      "fontSize": "100px",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "body": {
      "fontFamily": "Arial",
      "fontSize": "14px",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    },
    "caption": {
      "fontFamily": "Arial",
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    }
  },
  "fontFaces": [
    {
      "family": "swiper-icons",
      "src": "data:application/font-woff;charset=utf-8;base64, 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",
      "format": "truetype",
      "weight": "400"
    },
    {
      "family": "Heebo",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/heebo-ngs6v5_nc0k9p9h0tbfzsq.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Heebo",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/heebo-ngs6v5_nc0k9p9gktbfzsq.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Heebo",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/heebo-ngs6v5_nc0k9p9gytbfzsq.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Heebo",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/heebo-ngs6v5_nc0k9p9h4tbfzsq.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Heebo",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/heebo-ngs6v5_nc0k9p9h2tbe.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtuqjig1_i6t8kchkm459wxrxc7mw9c.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtuqjig1_i6t8kchkm459wxrzs7mw9c.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtuqjig1_i6t8kchkm459wxrxi7mw9c.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtuqjig1_i6t8kchkm459wxrxy7mw9c.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtuqjig1_i6t8kchkm459wxrys7m.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtusjig1_i6t8kchkm459wrhyzbi.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtusjig1_i6t8kchkm459w1hyzbi.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtusjig1_i6t8kchkm459wzhyzbi.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtusjig1_i6t8kchkm459wdhyzbi.woff2",
      "format": "woff2",
      "weight": "100"
    },
    {
      "family": "Montserrat",
      "src": "https://metivta.org.il/wp-content/uploads/elementor/google-fonts/fonts/montserrat-jtusjig1_i6t8kchkm459wlhyw.woff2",
      "format": "woff2",
      "weight": "100"
    }
  ],
  "rules": {
    "maxSizesPerScreen": 4,
    "headingWeightRange": "600-700",
    "bodyWeight": 400,
    "lineHeightBody": 1.5,
    "lineHeightHeading": 1.2
  }
}
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Heebo-Black.ttf`
- `fonts/Heebo-Bold.ttf`
- `fonts/Heebo-ExtraBold.ttf`
- `fonts/Heebo-ExtraLight.ttf`
- `fonts/Heebo-Light.ttf`
- `fonts/Heebo-Medium.ttf`
- `fonts/Heebo-Regular.ttf`
- `fonts/Heebo-SemiBold.ttf`
- `fonts/Heebo-Thin.ttf`
- `fonts/Montserrat-Black.ttf`
- `fonts/Montserrat-Bold.ttf`
- `fonts/Montserrat-ExtraBold.ttf`
- `fonts/Montserrat-ExtraLight.ttf`
- `fonts/Montserrat-Light.ttf`
- `fonts/Montserrat-Medium.ttf`
- `fonts/Montserrat-Regular.ttf`
- `fonts/Montserrat-SemiBold.ttf`
- `fonts/Montserrat-Thin.ttf`
- `fonts/Roboto-Black.ttf`
- `fonts/Roboto-Bold.ttf`
- `fonts/Roboto-ExtraBold.ttf`
- `fonts/Roboto-ExtraLight.ttf`
- `fonts/Roboto-Light.ttf`
- `fonts/Roboto-Medium.ttf`
- `fonts/Roboto-Regular.ttf`
- `fonts/Roboto-SemiBold.ttf`
- `fonts/Roboto-Thin.ttf`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Screenshots Inventory (screens/)

> Study all screenshots carefully before implementing any UI. Match every visual detail exactly.

### Scroll Journey (screens/scroll/)

*Cinematic scroll states — page visual at each scroll depth*

![scroll-000.png](screens/scroll/scroll-000.png)

![scroll-017.png](screens/scroll/scroll-017.png)

![scroll-033.png](screens/scroll/scroll-033.png)

![scroll-050.png](screens/scroll/scroll-050.png)

![scroll-067.png](screens/scroll/scroll-067.png)

![scroll-083.png](screens/scroll/scroll-083.png)

![scroll-100.png](screens/scroll/scroll-100.png)

### Full Page Screenshots (screens/pages/)

*Full-page screenshots of each crawled URL*

![-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E.png](screens/pages/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E.png)

![-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4.png](screens/pages/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4.png)

![-D7-9E-D7-A8-D7-9B-D7-96-D7-98-D7-99-D7-A4-D7-95-D7-9C-D7-9E.png](screens/pages/-D7-9E-D7-A8-D7-9B-D7-96-D7-98-D7-99-D7-A4-D7-95-D7-9C-D7-9E.png)

![home.png](screens/pages/home.png)

![my-profile.png](screens/pages/my-profile.png)

### Section Clips (screens/sections/)

*Clipped individual sections and components*

![-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E-section-1.png](screens/sections/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E-section-1.png)

![-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4-section-1.png](screens/sections/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4-section-1.png)

![home-section-1.png](screens/sections/home-section-1.png)

![my-profile-section-1.png](screens/sections/my-profile-section-1.png)

### Interaction States (screens/states/)

*Hover, focus, and active state captures*

![button-1-default.png](screens/states/button-1-default.png)

![button-1-focus.png](screens/states/button-1-focus.png)

![button-1-hover.png](screens/states/button-1-hover.png)

![button-2-default.png](screens/states/button-2-default.png)

![button-2-focus.png](screens/states/button-2-focus.png)

![button-2-hover.png](screens/states/button-2-hover.png)

![input-1-default.png](screens/states/input-1-default.png)

![input-1-focus.png](screens/states/input-1-focus.png)

![input-1-hover.png](screens/states/input-1-hover.png)

![input-2-default.png](screens/states/input-2-default.png)

![input-2-focus.png](screens/states/input-2-focus.png)

![input-2-hover.png](screens/states/input-2-hover.png)

![input-3-default.png](screens/states/input-3-default.png)

![input-3-focus.png](screens/states/input-3-focus.png)

![input-3-hover.png](screens/states/input-3-hover.png)

![link-1-default.png](screens/states/link-1-default.png)

![link-1-focus.png](screens/states/link-1-focus.png)

![link-1-hover.png](screens/states/link-1-hover.png)

![link-2-default.png](screens/states/link-2-default.png)

![link-2-focus.png](screens/states/link-2-focus.png)

![link-2-hover.png](screens/states/link-2-hover.png)

![link-3-default.png](screens/states/link-3-default.png)

![link-3-focus.png](screens/states/link-3-focus.png)

![link-3-hover.png](screens/states/link-3-hover.png)

![role-button-1-default.png](screens/states/role-button-1-default.png)

![role-button-1-focus.png](screens/states/role-button-1-focus.png)

![role-button-1-hover.png](screens/states/role-button-1-hover.png)

### Screenshot Index (screens/INDEX.md)

# Screenshot Index

## Scroll Journey

> Shows the cinematic state at each point of the page

| Scroll | Y Position | File |
|--------|-----------|------|
| 0% | 0px | `screens/scroll/scroll-000.png` |
| 17% | 1025px | `screens/scroll/scroll-017.png` |
| 33% | 1990px | `screens/scroll/scroll-033.png` |
| 50% | 3015px | `screens/scroll/scroll-050.png` |
| 67% | 4040px | `screens/scroll/scroll-067.png` |
| 83% | 5005px | `screens/scroll/scroll-083.png` |
| 100% | 6030px | `screens/scroll/scroll-100.png` |

## Pages

| Page | URL | File |
|------|-----|------|
| מרכז יישוב סכסוכים במשפחה גישור במטיבתא - כנסו לפרטים נוספים | `https://metivta.org.il/%D7%9E%D7%A8%D7%9B%D7%96-%D7%98%D7%99%D7%A4%D7%95%D7%9C/%D7%9E%D7%A8%D7%9B%D7%96-%D7%99%D7%99%D7%A9%D7%95%D7%91-%D7%A1%D7%9B%D7%A1%D7%95%D7%9B%D7%99%D7%9D-%D7%91%D7%9E%D7%A9%D7%A4%D7%97%D7%94/` | `screens/pages/-D7-9E-D7-A8-D7-9B-D7-96-D7-98-D7-99-D7-A4-D7-95-D7-9C-D7-9E.png` |
| הפרופיל שלי - מטיבתא | `https://metivta.org.il/my-profile/` | `screens/pages/my-profile.png` |
| מטיבת"א - טיפול וייעוץ בציבור החרדי והדתי | תמיכה נפשית 24/6 | `https://metivta.org.il/` | `screens/pages/home.png` |
| מוקד קו סיוע נפשי טלפוני - מוקד מטיבת"א לכל בעיה 24/6 | `https://metivta.org.il/%D7%9E%D7%95%D7%A7%D7%93-%D7%A1%D7%99%D7%95%D7%A2-%D7%A0%D7%A4%D7%A9%D7%99/` | `screens/pages/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4.png` |
| ייעוץ זוגי ומשפחתי במטיבת"א - ייעוץ נישואין מתוך יראת שמים | `https://metivta.org.il/%D7%99%D7%99%D7%A2%D7%95%D7%A5-%D7%96%D7%95%D7%92%D7%99-%D7%9E%D7%95%D7%A7%D7%93-%D7%A1%D7%99%D7%95%D7%A2-%D7%95%D7%9E%D7%99%D7%93%D7%A2/` | `screens/pages/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E.png` |

## Sections

| Page | Section | File |
|------|---------|------|
| my-profile | #1 (footer) | `screens/sections/my-profile-section-1.png` |
| home | #1 (section) | `screens/sections/home-section-1.png` |
| -D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4 | #1 (section) | `screens/sections/-D7-9E-D7-95-D7-A7-D7-93-D7-A1-D7-99-D7-95-D7-A2-D7-A0-D7-A4-section-1.png` |
| -D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E | #1 (section) | `screens/sections/-D7-99-D7-99-D7-A2-D7-95-D7-A5-D7-96-D7-95-D7-92-D7-99-D7-9E-section-1.png` |

## Homepage Screenshots (screenshots/)

![homepage.png](screenshots/homepage.png)

