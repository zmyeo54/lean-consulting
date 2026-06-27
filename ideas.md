# Lean Consulting — Design Brainstorm

## Reference
The user has provided two reference sites:
- Content source: https://leanconsult-clgxwpq4.manus.space/
- Style source: https://leanconsulting.base44.app/

This is a replication + style adaptation task. The style from base44.app is the ground-truth spec.

## Chosen Approach: Editorial Precision — Dark/Light Contrast with Crimson Authority

### Design Movement
Swiss Editorial meets Modern Consultancy — clean typographic hierarchy, high-contrast section alternation, and a signature crimson brand color that commands authority without aggression.

### Core Principles
1. **Typographic authority** — Large, bold display text drives every section heading; body text is restrained and precise.
2. **Alternating depth** — Sections alternate between stark white and near-black backgrounds, creating visual rhythm and preventing monotony.
3. **Crimson as signal** — The brand red (#8B0000 / deep crimson) is used sparingly but powerfully: CTAs, section labels, numbered steps, and hover states.
4. **Structured restraint** — No decorative flourishes; every element earns its place through function.

### Color Philosophy
- Background light: #FFFFFF (pure white — clinical, confident)
- Background dark: #111111 (near-black — gravitas, depth)
- Brand crimson: #8B0000 (deep red — authority, precision)
- Text dark: #1a1a1a (near-black body text on white)
- Text light: #f0f0f0 (near-white on dark sections)
- Muted text: #666666 (secondary info on light), #999999 (on dark)
- Card bg light: #f7f7f7
- Card bg dark: #1e1e1e

### Layout Paradigm
Full-bleed sections with asymmetric content placement. Hero uses left-aligned text with generous vertical breathing room. Framework steps use a numbered grid. Services use a label+title+description card pattern. No centered hero layouts.

### Signature Elements
1. Section label prefix: small crimson dot + uppercase spaced tracking text
2. Large step numbers (01, 02...) in muted color as structural anchors
3. Sticky navigation with transparent-to-solid scroll transition

### Interaction Philosophy
Interactions are purposeful and immediate. Hover states use subtle background shifts and underline reveals. CTA buttons have a slight scale-down on press. Scroll-triggered fade-in for section content.

### Animation
- Entrance: fade-up (translateY 20px → 0, opacity 0 → 1) over 500ms ease-out, staggered 80ms
- Nav: smooth background transition on scroll (200ms)
- Button: scale(0.97) on active, 150ms ease-out
- Framework cards: subtle lift on hover (translateY -4px, shadow increase)

### Typography System
- Display/Headlines: 'Playfair Display' — serif gravitas for major headings
- Body/UI: 'DM Sans' — clean, modern, highly readable geometric sans
- Section labels: DM Sans, uppercase, letter-spacing 0.15em, 11px
- Numbers: DM Sans, muted, 13px

### Brand Essence
Independent ERP implementation for businesses that value clarity over complexity — for decision-makers who are tired of being oversold.
Personality: Precise. Honest. Experienced.

### Brand Voice
Headlines sound like a trusted advisor, not a vendor. CTAs are direct and confident.
Example headlines: "ERP implementation done right." / "Standard-first, integrity-led."
Ban: "Welcome to our website", "Get started today", "Unlock your potential"

### Signature Brand Color
Deep Crimson #8B0000 — unmistakably Lean Consulting's.
