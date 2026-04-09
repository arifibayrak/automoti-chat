# FeaturesA Specification (Section 2 - Light)

## Overview
- **Target file:** `src/components/FeaturesA.tsx`
- **Interaction model:** static scroll
- **Height:** ~1196px
- **Background:** light (#F9F8F6)

## DOM Structure
Light background section. Two feature items stacked vertically, each with:
- Small numbered label (01, 02)
- Feature heading
- Feature description text
- "Join the waitlist" CTA button
- Large feature image on the right

## Computed Styles

### Section container
- backgroundColor: rgb(249, 248, 246) → #F9F8F6
- padding: 120px 0
- position: relative

### Container inner
- maxWidth: 1360px
- margin: 0 auto
- padding: 0 40px

### Feature item (each)
- display: grid
- gridTemplateColumns: 1fr 1fr (text left, image right)
- gap: 80px
- alignItems: center
- padding: 80px 0
- borderTop: 1px solid rgba(28, 29, 31, 0.1) (first item may not have top border)

### Number label
- fontFamily: Inter, Arial, sans-serif
- fontSize: 12px
- fontWeight: 500
- color: rgba(28, 29, 31, 0.5)
- letterSpacing: 0.5px
- textTransform: none
- marginBottom: 16px
- Text: "01" or "02"

### Feature heading (H2/H3)
- fontFamily: "GesturaHeadline", Georgia, serif
- fontSize: 40px
- fontWeight: 400
- lineHeight: 1.1
- letterSpacing: -0.8px
- color: rgb(28, 29, 31)
- marginBottom: 16px

### Feature description
- fontFamily: Inter, Arial, sans-serif
- fontSize: 16px
- fontWeight: 400
- lineHeight: 1.5
- color: rgba(28, 29, 31, 0.7)
- maxWidth: 480px
- marginBottom: 32px

### CTA Button (each feature)
- background: rgb(28, 29, 31)
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontWeight: 500
- padding: 10px 20px
- borderRadius: 999px
- border: none
- display: inline-block
- Text: "Join the waitlist"

### Feature image
- width: 100%
- borderRadius: 16px
- overflow: hidden

## Feature Items Content

### Feature 01
- Number: "01"
- Heading: "News and financial monitoring across your customer portfolio"
- Description: "Aira monitors every company in your portfolio. News articles, annual reports, board changes, ownership changes, and credit ratings. You get notified of buying signals, risks, and conversation starters.\n\nThe same intelligence used by top investment banks, in your pocket."
- Button: "Join the waitlist" → /waitlist
- Image: `public/images/feature-news-monitoring.webp`

### Feature 02
- Number: "02"
- Heading: "Get briefed before every meeting"
- Subheading: "Hours of prep work, gone."
- Description: "By analyzing your emails, notes, and conversations, Aira knows who you're meeting, what you've discussed before, and what's changed since. News, financials, relationship history. Delivered in one complete brief."
- Button: "Join the waitlist" → /waitlist
- Image: `public/images/feature-get-briefed.webp`

## Responsive Behavior
- **Desktop (1440px):** 2-column grid, text left, image right
- **Tablet (768px):** may maintain 2-col with smaller gap
- **Mobile (390px):** single column, image below text
