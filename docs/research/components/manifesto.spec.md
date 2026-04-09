# ManifestoSection Specification

## Overview
- **Target file:** `src/components/ManifestoSection.tsx`
- **Interaction model:** static
- **Height:** 556px

## DOM Structure
Dark teal section with: left text column + right image

## Computed Styles

### Section
- backgroundColor: rgb(12, 66, 67) — dark teal
- padding: 80px 40px

### Inner container
- maxWidth: 1200px
- margin: 0 auto
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 80px
- alignItems: center

### h2
- fontSize: 48px
- fontWeight: 540
- color: rgb(255, 255, 255)
- lineHeight: 1.1
- marginBottom: 24px

### Description paragraph
- fontSize: 18px
- fontWeight: 460
- color: rgba(255, 255, 255, 0.8)
- lineHeight: 1.7
- marginBottom: 32px

### "Read our announcement" link
- display: inline-flex
- alignItems: center
- gap: 8px
- fontSize: 14px
- fontWeight: 540
- color: rgb(255, 255, 255)
- border: 1px solid rgba(255, 255, 255, 0.3)
- borderRadius: 20px
- padding: 8px 16px
- textDecoration: none

### Image (right side)
- src: `/images/homepage-manifesto.webp`
- alt: "Girl drafting a Superhuman manifesto"
- borderRadius: 12px
- width: 100%
- height: auto
- objectFit: cover

## Text Content
- h2: "Becoming Superhuman."
- Description: "When AI works everywhere you work, it starts to change how you work. At first, you think faster and more deeply. Before you know it, you have the time to be more creative, strategic, and impactful—free to do what only you can do."
- Link: "Read our announcement" (with ArrowRightIcon)

## Assets
- Image: `/images/homepage-manifesto.webp`
- Icon: ArrowRightIcon from icons.tsx

## Responsive Behavior
- Desktop: 2-column grid
- Mobile: single column, image first (or text first), stacked
- Breakpoint: ~768px
