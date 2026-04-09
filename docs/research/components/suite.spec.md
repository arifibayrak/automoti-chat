# SuiteSection Specification

## Overview
- **Target file:** `src/components/SuiteSection.tsx`
- **Interaction model:** SCROLL-DRIVEN — sticky header with tab indicator that updates via IntersectionObserver as user scrolls through stacked product sections
- **Height:** 3049px total

## CRITICAL: Interaction Model
This is NOT a click-driven tab switcher. The header is `position: sticky, top: 67px` (below the nav). As the user scrolls, the active tab in the sticky header updates to match whichever product section is currently in view. Clicking a tab button scrolls to that section. Do NOT use click-to-show/hide content.

## DOM Structure
```
<section>
  <div class="content-wrapper"> (max-width 1200px, centered)
    <header class="tabbed-section-header" style="position: sticky; top: 67px">
      <div class="headerContent">
        <h2>Your Superhuman suite</h2>
        <a href="#">Get the suite</a>
      </div>
      <nav class="tabNav">
        <button data-tab="mail" class="navItem active">Mail</button>
        <button data-tab="grammarly" class="navItem">Grammarly</button>
        <button data-tab="coda" class="navItem">Coda</button>
        <button data-tab="go" class="navItem">Go</button>
      </nav>
    </header>
    <div class="content"> (display: flex, flexDirection: column, gap: 36px)
      <!-- 4 product sections stacked -->
      <ProductCard id="mail" .../>
      <ProductCard id="grammarly" .../>
      <ProductCard id="coda" .../>
      <ProductCard id="go" .../>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 0

### Content wrapper
- maxWidth: 1200px
- margin: 0 auto
- padding: 0 40px

### Sticky header
- position: sticky
- top: 67px (below the main nav)
- zIndex: 100
- backgroundColor: rgb(255, 255, 255)
- borderBottom: 1px solid rgb(228, 226, 222)
- padding: 24px 0 0 0
- height: 194px

### Header content row (h2 + "Get the suite" link)
- display: flex
- alignItems: baseline
- justifyContent: space-between
- marginBottom: 16px

### h2
- fontSize: 32px
- fontWeight: 540
- color: rgb(41, 40, 39)
- lineHeight: 1.2

### "Get the suite" link
- fontSize: 14px
- fontWeight: 460
- color: rgb(113, 76, 182) — purple
- textDecoration: underline

### Tab nav
- display: flex
- gap: 0
- borderTop: none

### Tab button
- flex: 1
- padding: 12px 16px
- fontSize: 16px
- fontWeight: 460
- color: rgb(120, 118, 115) — inactive gray
- background: none
- border: none
- borderBottom: 2px solid transparent
- textAlign: center
- cursor: pointer
- transition: all 0.2s ease

### Tab button (active state)
- color: rgb(41, 40, 39) — dark
- borderBottom: 2px solid rgb(41, 40, 39)
- fontWeight: 540

## Product Card Layout (each of 4)

### Card container
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 80px
- alignItems: center
- padding: 80px 0
- borderBottom: 1px solid rgb(228, 226, 222)

### Left side (text content)
- Contains: product label, h3, description, "Learn more" link, bullet features

### Product label (e.g. "Mail")
- fontSize: 14px
- fontWeight: 540
- color: rgb(113, 76, 182) — purple
- textTransform: uppercase
- letterSpacing: 0.05em
- marginBottom: 12px
- Contains logo icon + text

### h3 (product tagline)
- fontSize: 28px
- fontWeight: 540
- color: rgb(41, 40, 39)
- lineHeight: 1.3
- marginBottom: 16px

### Description paragraph
- fontSize: 16px
- fontWeight: 460
- color: rgb(80, 78, 76) — medium gray
- lineHeight: 1.6
- marginBottom: 24px

### "Learn more" link
- display: inline-flex
- alignItems: center
- gap: 8px
- fontSize: 14px
- color: rgb(41, 40, 39)
- fontWeight: 540
- textDecoration: none
- marginBottom: 24px

### Feature bullets
- display: flex
- flexDirection: column
- gap: 8px

### Each bullet
- display: flex
- alignItems: center
- gap: 8px
- fontSize: 14px
- color: rgb(80, 78, 76)
- Before: dot/checkmark

### Dotted separator (between label and content)
- repeating-linear-gradient(90deg, rgb(208,205,198), rgb(208,205,198) 4px, transparent 0, transparent 8px)
- height: 1px
- marginBottom: 16px

### Right side (video)
- borderRadius: 16px
- overflow: hidden
- aspectRatio: 1336/1358 ≈ 0.98
- backgroundColor: rgb(245, 243, 240)

### Product video
- width: 100%
- height: 100%
- objectFit: cover
- autoplay, loop, muted, playsInline

## Product Data

### Mail
- Label: "Mail"
- Icon: SuperhumanMailIcon (small, 20px)
- Tagline: "The most productive email app ever made"
- Description: "Fly through your inbox twice as fast as before, never drop the ball again, and save 4 hours every single week."
- Learn more: "Learn more about Mail"
- Bullets: ["Respond faster to what matters most", "Follow up on time, every time", "Write with AI that sounds like you", "Save 4 hours every single week"]
- Video: `/videos/Homepage_Mail_Animation.mp4`

### Grammarly
- Label: "Grammarly"
- Icon: GrammarlyLogoIcon (small, 20px)
- Tagline: "Everyone's favorite AI writing partner"
- Description: "Turn your thoughts into writing that's clear, credible, and impossible to ignore."
- Learn more: "Learn more about Grammarly"
- Bullets: ["Works everywhere you write", "Find the right words instantly", "Write with AI that adapts to your tone and voice", "Let your brilliance shine"]
- Video: `/videos/Homepage_Grammarly_Animation.mp4`

### Coda
- Label: "Coda"
- Icon: CodaLogoIcon (small, 20px)
- Tagline: "The all-in-one AI workspace for teams"
- Description: "Build everything from wikis, through project plans, to goal trackers — keeping everyone perfectly in sync."
- Learn more: "Learn more about Coda"
- Bullets: ["Connect Slack, Jira, Salesforce, and 800+ tools", "Build your team wiki, project plans, and company goal trackers", "Create automated workflows that handle the busywork"]
- Video: `/videos/Homepage_Coda_Animation.mp4`

### Go
- Label: "Go"
- Icon: GoLogoIcon (small, 20px)
- Tagline: "AI that actually works in every app you use"
- Description: "Go is the proactive AI assistant that knows what you know and offers help without you having to ask."
- Learn more: "Learn more about Go"
- Bullets: ["Connect Gmail, Drive, Jira, and 100+ apps", "Get help without switching context", "AI that learns your preferences over time"]
- Video: (no video loaded — use placeholder)

## Scroll-Driven Tab Behavior
Implement with IntersectionObserver:
- Each product card section has a data-product-id ref
- IntersectionObserver watches each with rootMargin: "-40% 0px -40% 0px"
- When a section enters the center of viewport, update the active tab in sticky header
- Tab click: smooth scroll to that section
- Use `useEffect` with `'use client'`

## Responsive Behavior
- Desktop (1440px): 2-column grid (text left, video right)
- Mobile (390px): single column, video on top, text below
- Breakpoint: stack at ~768px
