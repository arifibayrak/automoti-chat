# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/AnnouncementBar.tsx`
- **Screenshot:** `docs/design-references/hero-top.png`
- **Interaction model:** static

## DOM Structure
`<section>` containing a centered flex row with: mail icon, text "Looking for Superhuman Mail?", "Learn more" link with arrow

## Computed Styles

### Section container
- backgroundColor: rgb(66, 29, 36) — dark maroon
- height: 72px
- display: flex
- alignItems: center
- justifyContent: center

### Inner wrapper
- display: flex
- alignItems: center
- gap: 12px
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontWeight: 460

### Mail icon (SuperhumanMailIcon)
- width: 36px
- height: 36px

### "Learn more" link
- display: inline-flex
- alignItems: center
- gap: 8px
- color: rgb(255, 255, 255)
- border: 1px solid rgba(255, 255, 255, 0.3)
- borderRadius: 20px
- padding: 4px 12px
- fontSize: 14px
- fontWeight: 460

### Arrow icon (BannerArrowIcon)
- width: 16px
- height: 12px

## Text Content
- "Looking for Superhuman Mail?"
- "Learn more" (with arrow →)

## Assets
- `<SuperhumanMailIcon>` from icons.tsx
- `<BannerArrowIcon>` from icons.tsx

## Responsive Behavior
- Desktop: full width centered row
- Mobile (390px): same layout, smaller padding
