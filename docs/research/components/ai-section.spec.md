# AISection (superhuman-section) Specification

## Overview
- **Target file:** `src/components/AISection.tsx`
- **Interaction model:** static
- **Height:** 480px

## DOM Structure
Gradient background section with centered text + decorative flower image + CTA

## Computed Styles

### Section
- background: linear-gradient(270deg, rgb(85, 77, 203) 9.04%, rgb(134, 203, 249) 84.36%, rgb(247, 219, 255) 100%)
- Also has a background image (tonal flower) overlaid: url("/images/homepage-tonal-flower.webp") no-repeat center/cover
- The image is layered ON TOP of the gradient as a subtle texture
- padding: 80px 40px
- display: flex
- flexDirection: column
- alignItems: center
- justifyContent: center
- textAlign: center
- position: relative

### Flower image
- src: `/images/homepage-tonal-flower.webp`
- position: absolute
- inset: 0
- width: 100%
- height: 100%
- objectFit: cover
- opacity: 0.3 (subtle overlay)

### h2
- fontSize: 48px
- fontWeight: 540
- color: rgb(255, 255, 255)
- lineHeight: 1.1
- textAlign: center
- marginBottom: 32px
- position: relative (above image)
- zIndex: 1

### "Get Superhuman" CTA link
- Same style as hero CTA:
- display: inline-flex
- alignItems: center
- gap: 16px
- color: rgb(255, 255, 255)
- border: 1px solid rgba(255, 255, 255, 0.2)
- borderRadius: 12px
- padding: 6px 6px 6px 16px
- fontSize: 16px
- fontWeight: 460
- backgroundColor: transparent
- position: relative
- zIndex: 1

### CTA icon container
- width: 48px
- height: 36px
- backgroundColor: rgba(255, 255, 255, 0.15)
- borderRadius: 8px
- display: flex
- alignItems: center
- justifyContent: center

## Text Content
- h2: "AI that works everywhere you work"
- CTA: "Get Superhuman" → href="/auth/signup?screen_hint=signup"

## Assets
- Image: `/images/homepage-tonal-flower.webp`
- Icon: ArrowRightIcon from icons.tsx

## Responsive Behavior
- Desktop: centered, full-width
- Mobile: same, reduced font sizes
