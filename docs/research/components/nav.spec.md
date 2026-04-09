# Nav Specification

## Overview
- **Target file:** `src/components/Nav.tsx`
- **Interaction model:** fixed, transparent on dark sections

## DOM Structure
Fixed nav bar at top of page. Left: logo icon + "Aira" text. Right: nav links + CTA button.

## Computed Styles

### Nav wrapper
- position: fixed
- top: 0, left: 0, right: 0
- height: 76px
- background: transparent (rgba(0,0,0,0))
- display: flex, alignItems: center
- padding: 0 16px
- z-index: 999
- color: rgb(255, 255, 255)

### Logo area (left)
- display: flex, alignItems: center, gap: 8px
- Logo icon: 24x24 white SVG (AiraIcon from icons.tsx)
- "Aira" text: fontSize 16px, fontWeight 500, color white, fontFamily Inter

### Nav links (center-right)
- display: flex, gap: 0
- Each link: fontSize 14px, fontWeight 500, color rgb(255,255,255), padding 8px 12px
- Links: "About us", "Affiliate program", "Revenue Journal", "Events"

### CTA button
- background: rgba(255, 255, 255, 0.9)
- color: rgb(28, 29, 31)
- fontSize: 14px
- fontWeight: 500
- padding: 8px 16px
- borderRadius: 999px
- border: none
- Text: "Join the waitlist"

## Text Content
- Logo: Aira
- Links: About us | Affiliate program | Revenue Journal | Events
- CTA: Join the waitlist

## Assets
- Logo icon: `<AiraIcon />` from `src/components/icons.tsx`

## Responsive Behavior
- **Desktop (1440px):** full nav with all links visible
- **Mobile (390px):** hamburger menu, hide links, keep logo + CTA button
- **Breakpoint:** ~768px
