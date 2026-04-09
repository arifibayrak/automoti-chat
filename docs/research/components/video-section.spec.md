# VideoSection Specification

## Overview
- **Target file:** `src/components/VideoSection.tsx`
- **Interaction model:** static — autoplay loop video, muted
- **Height:** ~1111px

## DOM Structure
Dark section with heading at top, large video centered below it.

## Computed Styles

### Section container
- backgroundColor: rgb(8, 8, 8) → #080808
- padding: 120px 40px
- display: flex
- flexDirection: column
- alignItems: center
- gap: 80px

### Section header
- Horizontal layout: heading left, possibly subtitle right (or stacked)
- Contains numbered format possibly

### Heading (H2)
- fontFamily: "GesturaHeadline", Georgia, serif
- fontSize: 48px
- fontWeight: 400
- lineHeight: 1
- letterSpacing: -0.96px
- color: rgb(255, 255, 255)
- Line 1: "One mobile app." — color: rgb(255, 255, 255) 
- Line 2: "Every business relationship." — color: rgba(255, 255, 255, 0.7) via after-first class
- maxWidth: ~800px

### Video container
- width: 100%
- maxWidth: 1200px
- borderRadius: 16px (approximate)
- overflow: hidden
- position: relative

### Video element
- src: /videos/aira-demo.mp4
- poster: /videos/aira-demo-poster.png
- autoPlay, loop, muted, playsInline
- width: 100%
- objectFit: cover

## Text Content
- H2 line 1: "One mobile app."
- H2 line 2: "Every business relationship."

## Assets
- Video: `public/videos/aira-demo.mp4`
- Video poster: `public/videos/aira-demo-poster.png`

## Responsive Behavior
- **Desktop:** video full width with border-radius
- **Mobile:** video full width, H2 smaller (~32px)
