# TrustedBySection Specification

## Overview
- **Target file:** `src/components/TrustedBySection.tsx`
- **Interaction model:** static
- **Height:** 282px

## DOM Structure
White section with centered heading + horizontal logo row

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 60px 40px
- display: flex
- flexDirection: column
- alignItems: center
- gap: 32px

### Heading
- fontSize: 14px
- fontWeight: 460
- color: rgb(120, 118, 115) — muted gray
- textTransform: uppercase
- letterSpacing: 0.08em
- textAlign: center

### Logo row
- display: flex
- alignItems: center
- justifyContent: center
- gap: 40px
- flexWrap: wrap

### Each logo img
- height: 28px
- width: auto
- opacity: 0.6
- filter: grayscale(100%)
- object-fit: contain

## Text Content
- Heading: "Trusted by the most innovative companies in the world"

## Logos (in order)
1. Atlassian — `/images/logos/trustedby-logo-atlassian.svg`
2. Zoom — `/images/logos/trustedby-logo-zoom.svg`
3. Rivian — `/images/logos/trustedby-logo-rivian.svg`
4. Zapier — `/images/logos/trustedby-logo-zapier.svg`
5. Expensify — `/images/logos/trustedby-logo-expensify.svg`
6. Eventbrite — `/images/logos/trustedby-logo-eventbrite.svg`

## Responsive Behavior
- Desktop: single row, all 6 logos
- Mobile: wrap to 2-3 per row
