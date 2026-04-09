# StatsSection Specification (Section 3 - Dark)

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** static
- **Height:** 725px (100vh)
- **Background:** dark (#080808)

## DOM Structure
Full viewport height dark section. Heading + subtext + button on left. Globe image on right. 4 stat items in a row below (or overlaid).

## Computed Styles

### Section container
- backgroundColor: rgb(8, 8, 8) → #080808
- height: 725px (100vh)
- display: flex
- alignItems: center
- position: relative
- overflow: hidden

### Container inner
- maxWidth: 1360px
- margin: 0 auto
- padding: 0 40px

### Main heading (H2)
- fontFamily: "GesturaHeadline", Georgia, serif
- fontSize: 48px
- fontWeight: 400
- lineHeight: 48px (1:1)
- letterSpacing: -0.96px
- color: rgba(255, 255, 255, 0.7)
- Text: "The world is your oyster"

### Subheading
- fontFamily: Inter, Arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- color: rgba(255, 255, 255, 0.6)
- marginTop: 12px
- Text: "Access our global company database."

### CTA Button
- background: transparent or dark variant
- border: 1px solid rgba(255,255,255,0.3)
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontWeight: 500
- padding: 10px 20px
- borderRadius: 999px
- marginTop: 32px
- Text: "Join waiting list" → /waitlist

### Globe image
- `public/images/earth.webp`
- Positioned right side, possibly absolutely positioned
- Large, takes up right 60% of section

### Stats row
- display: flex
- gap: 0
- Each stat item: width 256px
- Position: bottom area of section or below heading

### Each stat item
- display: flex
- flexDirection: column
- gap: 8px
- padding-right: 32px (or border-right for separation)

### Stat number
- fontFamily: Inter, Arial, sans-serif
- fontSize: 72px
- fontWeight: 400
- lineHeight: 1
- letterSpacing: -2.16px
- color: rgb(255, 255, 255)

### Stat suffix (M, /7, %, M)
- Same styles as number, displayed inline

### Stat description
- fontFamily: Inter, Arial, sans-serif
- fontSize: 14px
- fontWeight: 400
- lineHeight: 1.4
- color: rgba(255, 255, 255, 0.6)
- maxWidth: 220px

## Stats Data
1. Number: "100", suffix: "M" — "Companies with financials, contact information, and ownership data"
2. Number: "24", suffix: "/7" — "News and financial monitoring for all of your customers and prospects"
3. Number: "100", suffix: "%" — "Matched to your existing contacts through email sync"
4. Number: "3", suffix: "M" — "News articles scanned daily to uncover opportunities in your portfolio"

## Text Content
- Heading: "The world is your oyster"
- Subtext: "Access our global company database."
- Button: "Join waiting list"

## Assets
- Globe: `public/images/earth.webp`

## Responsive Behavior
- **Desktop:** side-by-side heading/globe, stats in a row below or overlaid
- **Mobile:** globe hidden or background, heading + stats stacked, 2x2 stat grid
