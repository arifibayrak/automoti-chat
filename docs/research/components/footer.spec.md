# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static
- **Background:** light #F9F8F6, height ~385px

## DOM Structure
Light footer. Top: 4-column link grid. Bottom: copyright line.

## Computed Styles

### Footer container
- backgroundColor: #F9F8F6
- padding: 80px 40px 40px
- borderTop: 1px solid rgba(28,29,31,0.1)

### Inner container
- maxWidth: 1360px, margin: 0 auto
- display: grid, gridTemplateColumns: repeat(4, 1fr), gap: 40px

### Column heading
- fontFamily: Inter, fontSize: 13px, fontWeight: 500
- color: rgba(28,29,31,0.5)
- textTransform: uppercase, letterSpacing: 0.5px
- marginBottom: 16px

### Link items
- fontFamily: Inter, fontSize: 14px, fontWeight: 400
- color: rgb(28,29,31)
- display: block, marginBottom: 8px
- textDecoration: none

### Copyright line
- borderTop: 1px solid rgba(28,29,31,0.1)
- marginTop: 60px, paddingTop: 24px
- fontFamily: Inter, fontSize: 13px
- color: rgba(28,29,31,0.5)
- Text: "© 2026 Aira. Kungsgatan 49, 111 22 Stockholm, Sweden, Org.nr: 5595734681"

## Text Content

### Column 1: Product
- Join the waitlist → /waitlist

### Column 2: Company
- About us → /about
- Blog → /revenue-journal/blog

### Column 3: Connect
- Events → /revenue-journal/events
- LinkedIn → (external)
- +46 76 141 14 99
- info@aira.app

### Column 4: Legal
- Terms and conditions
- Affiliate agreement
- Privacy policy
- DPA
- Cookie policy

## Responsive Behavior
- Desktop: 4-column grid
- Mobile: 2x2 grid or single column stack
