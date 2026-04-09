# CTAWaitlist Specification (Section 5)

## Overview
- **Target file:** `src/components/CTAWaitlist.tsx`
- **Interaction model:** static
- **Background:** light #F9F8F6, height ~779px

## DOM Structure
Simple centered section. Heading, subtext, email input form (or button), and optional decorative image.

## Computed Styles

### Section
- backgroundColor: #F9F8F6
- padding: 160px 40px
- display: flex, flexDirection: column, alignItems: center
- textAlign: center

### Heading
- fontFamily: "GesturaHeadline", Georgia, serif
- fontSize: 48px, fontWeight: 400
- lineHeight: 1.1, letterSpacing: -0.96px
- color: rgb(28, 29, 31)
- Text: "Join the waitlist"

### Subtext
- fontFamily: Inter, fontSize: 16px, fontWeight: 400
- lineHeight: 1.5, color: rgba(28,29,31,0.6)
- maxWidth: 480px, marginTop: 16px, marginBottom: 40px
- Text: "We're launching globally soon. Waitlist members get early access."

### CTA Button
- background: rgb(28,29,31), color: white
- fontSize: 14px, fontWeight: 500
- padding: 12px 24px, borderRadius: 999px
- Text: "Join the waitlist" → /waitlist

### Optional image (cta-image.webp)
- Decorative illustration/photo
- `public/images/cta-image.webp`
- Displayed near the CTA section

## Text Content
- Heading: "Join the waitlist"
- Subtext: "We're launching globally soon. Waitlist members get early access."
- Button: "Join the waitlist"

## Assets
- `public/images/cta-image.webp`

## Responsive Behavior
- Mobile: same centered layout, font sizes reduced
