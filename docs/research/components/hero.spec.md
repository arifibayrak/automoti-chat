# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static
- **Background:** dark #080808, full viewport height

## DOM Structure
Full viewport height section. Background image covers entire area (person holding phone). Left side has text content positioned over the image.

## Computed Styles

### Section container
- position: relative
- height: 100vh
- backgroundColor: #080808
- display: flex, alignItems: center, overflow: hidden

### Background image (absolutely positioned)
- position: absolute, top:0, left:0, width:100%, height:100%
- objectFit: cover
- Desktop: `public/images/hero-bg.webp` (1440x799)
- Mobile: `public/images/hero-bg-mobile.webp` (1439x1682)

### Content wrapper (left, relative z-1)
- position: relative, z-index: 1
- padding: 0 0 0 80px (or via container)
- maxWidth: 680px

### H1 heading
- fontFamily: "GesturaHeadline", Georgia, serif
- fontSize: 66px, fontWeight: 400
- lineHeight: 66px, letterSpacing: -1.32px
- Line 1 "Just ask Aira," — color: rgb(255,255,255)
- Line 2 "your AI sales agent" — color: rgba(255,255,255,0.7)

### Subtext
- fontFamily: Inter, fontSize: 16px, fontWeight: 400
- lineHeight: 1.5, letterSpacing: -0.16px
- color: rgba(255,255,255,0.7), maxWidth: 560px, marginTop: 24px

### CTA Button
- background: rgba(255,255,255,0.9), color: rgb(28,29,31)
- fontSize: 14px, fontWeight: 500
- padding: 12px 24px, borderRadius: 999px
- marginTop: 40px, display: inline-block

## Text Content
- H1 line 1: "Just ask Aira,"
- H1 line 2: "your AI sales agent"
- Subtext: "Aira researches every company you interact with, prepares every meeting, and identifies opportunities and risks before you do."
- Button: "Join the waitlist" → /waitlist

## Assets
- `public/images/hero-bg.webp` (desktop)
- `public/images/hero-bg-mobile.webp` (mobile)

## Responsive Behavior
- Mobile: use hero-bg-mobile.webp, H1 ~42px, padding 0 20px
