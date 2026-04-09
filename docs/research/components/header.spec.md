# Header / Navigation Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static (scroll behavior: transparent on hero, transitions to dark on scroll)

## DOM Structure
`<header>` sticky at top with: logo link (left), nav links (center-left), action buttons (right)

## Computed Styles

### Header element
- position: sticky
- top: 0px
- zIndex: 201
- height: 67px
- backgroundColor: rgba(0,0,0,0) — transparent on hero
- color: rgb(255, 255, 255)
- display: block (inner content uses flex)

### Inner content wrapper
- display: flex
- alignItems: center
- justifyContent: space-between
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px
- height: 100%

### Logo link
- display: flex
- alignItems: center

### Logo SVG (SuperhumanLogo)
- width: 168px
- height: 25px
- fill: currentColor (white)

### Nav list
- display: flex
- alignItems: center
- gap: 0px
- listStyle: none

### Nav link button
- color: rgb(255, 255, 255)
- fontSize: 16px
- fontWeight: 460
- padding: 8px 16px
- background: transparent
- border: none
- display: flex
- alignItems: center
- gap: 4px
- cursor: pointer

### Nav caret icon
- width: 12px
- height: 12px
- color: currentColor

### Right actions
- display: flex
- alignItems: center
- gap: 8px

### "Contact sales" / "Log in" links
- color: rgb(255, 255, 255)
- fontSize: 16px
- fontWeight: 460
- padding: 8px 16px

### "Sign up" button
- backgroundColor: rgb(113, 76, 182) — purple
- color: rgb(255, 255, 255)
- borderRadius: 8px
- padding: 6px 16px
- fontSize: 14px
- fontWeight: 600
- border: none

## Nav Links (left side)
- "Product" (with caret down icon)
- "Enterprise"
- "Education"
- "Pricing"

## Right Actions
- "Contact sales"
- "Log in"
- "Sign up" (purple button)

## Assets
- `<SuperhumanLogo>` from icons.tsx (width=168, height=25)
- `<CaretDownIcon>` from icons.tsx (12x12)

## Scroll Behavior (State)
- **State A (on hero, scrollY=0):** transparent bg, white text
- **State B (scrolled past hero):** should remain white text — the site uses transparent nav throughout
- **Implementation:** Keep transparent, the hero bg color shows through

## Responsive Behavior
- Desktop: full horizontal nav
- Mobile: hide nav links, show hamburger icon
- Breakpoint: ~768px
