---
name: AI Security Wiki
description: An annotated standards library for source-backed AI security reading.
colors:
  ink: '#183b32'
  text: '#243f36'
  muted: '#52685f'
  paper: '#fff'
  wash: '#edf3ef'
  rule: '#b9cbc1'
  accent: '#c5ed9b'
  focus: '#1759b5'
typography:
  display:
    fontFamily: '''Source Serif'', serif'
    fontSize: clamp(2.6rem, 4.8vw, 4.5rem)
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -.02em
  headline:
    fontFamily: '''Source Serif'', serif'
    fontSize: clamp(2rem, 3.5vw, 3.3rem)
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -.02em
  title:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1.65rem
    fontWeight: 650
    lineHeight: 1.18
  body:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1rem
    fontWeight: 650
    lineHeight: 1.65
  action:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1.05rem
    fontWeight: 650
    lineHeight: 1.65
  navigation:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1.05rem
    fontWeight: 600
    lineHeight: 1.65
  table:
    fontFamily: '''Source Sans'', sans-serif'
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.45
rounded:
  code: 3px
  field: 4px
spacing:
  inline: 1rem
  panel: 1.25rem
  document: 1.5rem
  group: 2rem
  section: 3rem
components:
  action-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
    typography: '{typography.action}'
    padding: .65rem 1rem
  action-secondary:
    textColor: '{colors.ink}'
    typography: '{typography.action}'
    padding: .65rem 1rem
  action-hover:
    backgroundColor: '{colors.wash}'
    textColor: '{colors.ink}'
  search-input:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.text}'
    typography: '{typography.label}'
    rounded: '{rounded.field}'
    padding: .6rem .8rem
    width: 100%
  search-select:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.text}'
    typography: '{typography.label}'
    rounded: '{rounded.field}'
    padding: .6rem .8rem
    width: 100%
  reference-rail:
    backgroundColor: '{colors.wash}'
    textColor: '{colors.text}'
    padding: '{spacing.panel}'
  reference-table:
    textColor: '{colors.text}'
    typography: '{typography.table}'
    width: 100%
---

# Design System: AI Security Wiki

## Overview

**Creative North Star: "Annotated standards library"**

A dark forest masthead, pale green navigation and white reading surface frame source-backed technical material. Serif document titles give the library a distinct voice; sans-serif text, ordinary links and reference rows support close reading. Density belongs in the register, while prose keeps a generous reading measure.

This document records the implementation on 2026-10-22. Its metaphor and descriptive labels are implementation decisions, not owner visual acceptance. The owner chose direct construction followed by browser review. PRODUCT.md records product constraints; .impeccable/surfaces/site-index-md.md records the page strategy. Static reading, shared Markdown content and a visible source trail constrain this system.

**Key Characteristics:**

- Serif titles with sans-serif reading text.
- Flat rectangles, pale fills and thin rules.
- Native controls and distinct keyboard focus.
- Complete reference content available without JavaScript.

## Colors

The frontmatter preserves the stylesheet's custom-property names and canonical color values.

### Primary

- **Forest ink** (`ink`): masthead, headings, links, primary action and quotation rule.
- **Pale leaf** (`accent`): masthead edge and text selection within the forest palette.

### Neutral

- **Reading green** (`text`): body copy and field text.
- **Muted green** (`muted`): metadata, breadcrumbs, status, captions and field strokes.
- **White paper** (`paper`): reading canvas, fields and reversed masthead/action text.
- **Pale green wash** (`wash`): rail, footer, code, quotations, table headers and hover fills.
- **Sage rule** (`rule`): separators and table/code borders.

### Interaction

- **Focus blue** (`focus`): keyboard outline. Keep it distinct from pale green hover and selection fills.

The masthead tagline also uses a local supporting literal (#d1e1d8); print uses black-on-white overrides. Sidecar OKLCH ramps are synthetic swatch previews, not production tokens or verified accessible color pairs.

## Typography

**Display Font:** Source Serif, backed by the bundled Source Serif 4 variable font and `serif` fallback.

**Body Font:** Source Sans, backed by the bundled Source Sans 3 variable font and `sans-serif` fallback.

Both families are self-hosted WOFF2, declare weights (200–900) and use `font-display: swap`. The serif appears in document titles and the masthead identity; section headings, body, tables and navigation use the sans family. The hierarchy uses individual role sizes, not a declared modular ratio.

The frontmatter records homepage display, document headline, section title, body, lead, label, action, navigation and table roles. Homepage titles balance within (22ch); document titles within (27ch). Top-level article paragraphs and lists stop at (72ch). Third-level headings use sans text (1.3rem) and the inherited heading line height. Tables use tabular numerals.

At the mobile breakpoint, the homepage title becomes (2.85rem), document titles (2.3rem), lead paragraphs (1.15rem) and tables (.95rem). The first direct article paragraph receives lead styling structurally.

Code uses `ui-monospace, SFMono-Regular, Consolas, monospace`. Both `pre` and nested `code` receive a relative size (.85em), so nested sizes currently compound; blocks use line height (1.7). Inline code follows its parent. This records current behavior without silently changing it.

## Layout

The shell has a centered maximum width (1500px), reference rail (200px), flexible reading column capped at (800px), and contents column (170px). The homepage omits the contents column and allows a wider reading column (1050px). Horizontal padding is fluid (`clamp(1.25rem, 4vw, 4rem)`); gaps use `clamp(1.25rem, 3vw, 3rem)`.

At widths up to (1180px), the contents panel disappears and the rail narrows to (185px). At widths up to (760px), the shell becomes one column with padding (1.25rem), the masthead stacks, and the rail's expanded links use two columns. JavaScript closes the native disclosure on initial mobile load; without JavaScript it stays open and usable. Resizing later does not toggle the disclosure automatically.

Search uses a flexible query field beside a select column (200px), then stacks on mobile. Reference tables have an overflow wrapper; other article tables become horizontally scrollable on mobile. Code blocks retain horizontal scrolling. Avoid clipping long IDs, commands or guide text.

Frontmatter spacing names describe recurring observed values, not a strict CSS spacing scale. Section headings have large preceding space and a thin top rule. The declared `--space` variable is unused and is not documented as an active primitive.

Maintain [site/site.css](site/site.css), [site/search.js](site/search.js) and the shell in [scripts/site.mjs](scripts/site.mjs), then regenerate the site. Homepage action styling depends on the second direct article paragraph and its first link; verify that relationship when editing [site/index.md](site/index.md). This is a maintenance constraint, not a recommended component API.

Print removes navigation, search, tools and footer, then uses a single reading column and black-on-white masthead. This documentation pass inspected the existing desktop, mobile and mobile-guide captures in `.impeccable/review/`; it did not perform another browser or print review.

## Elevation & Depth

**The Flat Reference Rule.** Use tonal fills, rules and spacing to separate content. The current system has no shadows or lifted hover surfaces.

The dark masthead and pale support surfaces provide tonal separation. No gradients, blur or animated elevation are defined. Motion is limited to smooth anchor scrolling, with `prefers-reduced-motion: reduce` restoring automatic scrolling. Hover and focus changes have no transition duration.

## Shapes

The recurring form is a plain rectangle: masthead, rail, actions, tables, quotations and code blocks have square corners. Fields use `rounded.field`; inline code uses `rounded.code`. Strokes are thin (1px) for rules, fields, actions and rows; the masthead accent edge is thicker (5px). No card, chip, pill or illustration component is implemented.

## Components

### Action links

Primary and secondary actions are navigation anchors. Both use action typography, the tokenized padding and a thin forest border. The primary is forest with reversed text; the secondary keeps the surrounding white canvas. Both gain the pale wash and forest text on hover. Shared keyboard focus is a blue outline (3px, offset 4px). No custom pressed or disabled variant is implemented.

### Search fields

The labeled native search input and select use white fill, muted border, small field radius, full available width and minimum height (48px). They inherit the label typography; placeholder text is muted and regular. Keyboard focus uses the shared outline. Error and disabled variants are not implemented.

Filtering matches every normalized query word against rendered rows and combines that with risk/control selection. The count has status semantics and an empty result suggests recovery. All rows remain readable without JavaScript. Sidecar previews show controls and native interaction; they do not implement filtering.

### Navigation

The masthead uses white links, underlines on hover and the shared focus outline; it wraps and stacks on mobile. The pale reference rail uses native `details`/`summary`. Its links gain underlining and stronger weight on hover or `aria-current`. The snapshot note disappears on mobile; the Portuguese link remains available.

The right contents panel is sticky (top 1.5rem), uses muted small text and disappears at the first breakpoint. Document tools form a wrapping link row after the article with a top rule, preserving access to Markdown, source and corrections.

### Reference register

A complete table is the signature component. Pale headings, tabular numerals and thin row dividers support scanning. The first column reserves ID space (135px), and the final type column reserves (85px). IDs remain unbroken; long names wrap. ID and name cells hold block links. Rows gain a pale wash on hover; links gain an underline and retain keyboard focus. Categories are plain text, without implied severity.

### Code and quotations

Both use the pale wash. Code blocks have panel padding, a thin sage border and horizontal overflow. Inline code has compact padding and its small radius. Quotations have body typography, rectangular padding (1rem 1.5rem) and a thin forest left rule. Neither has an icon or shadow.

## Do's and Don'ts

### Do:

- Do preserve self-hosted typography and working font fallbacks.
- Do retain visible keyboard focus, native controls and ordinary document links.
- Do preserve the complete register and reading experience without JavaScript.
- Do update the stylesheet, DESIGN.md and sidecar together when visual values change.

### Don't:

- Don't introduce card grids, pills, gradients or lifted surfaces as an incidental refinement.
- Don't turn risk/control labels into invented severity or compliance badges.
- Don't apply the homepage title width and action arrangement to every document.
- Don't treat these implementation decisions or screenshots as human approval or measured usability evidence.
