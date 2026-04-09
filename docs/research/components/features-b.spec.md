# FeaturesB Specification (Section 4 - Light)

## Overview
- **Target file:** `src/components/FeaturesB.tsx`
- **Interaction model:** static
- **Background:** light #F9F8F6

## DOM Structure
Three numbered feature blocks stacked vertically. Each: number label, heading, description, button, and image.

## Section Content

### Feature 01
- Number: "01"
- Heading: "You can't keep track of it all. Aira can."
- Description: "Aira tracks every conversation, joins your calls, and takes your notes. Every account is enriched with financials, contacts, news, board changes, and filings from 100 million companies.\n\nSo you can focus on revenue, not admin."
- Button: "Join the waitlist" → /waitlist
- Image: `public/images/feature-track-all.webp`

### Feature 02
- Number: "02"
- Heading: "The assistant you've always wanted, in the palm of your hand."
- Description: "Whatever you need to know or get done. Just ask Aira. Any question answered, any task completed."
- Three sub-scenarios (each with image):
  a) "Need to prepare for tomorrow's meeting?" → image: feature-prepare-meeting.webp
  b) "Just got off a call?" → image: feature-call-summary.webp
  c) "Want to research a prospect before reaching out?" → image: feature-research-prospect.webp
  Also: feature-news-monitoring-2.webp (additional context image)
- Button: "Join the waitlist" → /waitlist

### Feature 03 (may be partially visible)
- Appears to reference 3 numbered items 01/02/03 for meeting flow

## Computed Styles (same pattern as FeaturesA)

### Section container
- backgroundColor: #F9F8F6
- padding: 120px 0

### Feature item
- display: grid, gridTemplateColumns: 1fr 1fr
- gap: 80px, alignItems: center
- padding: 80px 0
- borderTop: 1px solid rgba(28,29,31,0.1)

### Number label
- fontFamily: Inter, fontSize: 12px, fontWeight: 500
- color: rgba(28,29,31,0.5), marginBottom: 16px

### Heading (H2)
- fontFamily: "GesturaHeadline", fontSize: 40px, fontWeight: 400
- lineHeight: 1.1, letterSpacing: -0.8px
- color: rgb(28,29,31)

### Description
- fontFamily: Inter, fontSize: 16px, fontWeight: 400
- lineHeight: 1.5, color: rgba(28,29,31,0.7)

### CTA Button
- background: rgb(28,29,31), color: white
- fontSize: 14px, fontWeight: 500
- padding: 10px 20px, borderRadius: 999px

### Feature image
- width: 100%, borderRadius: 16px, overflow: hidden

## Assets
- `public/images/feature-track-all.webp`
- `public/images/feature-prepare-meeting.webp`
- `public/images/feature-call-summary.webp`
- `public/images/feature-research-prospect.webp`
- `public/images/feature-news-monitoring-2.webp`

## Responsive Behavior
- Mobile: single column stack, image below text
