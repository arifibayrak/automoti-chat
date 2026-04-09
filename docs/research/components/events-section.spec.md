# EventsSection Specification (Section 6 - Dark)

## Overview
- **Target file:** `src/components/EventsSection.tsx`
- **Interaction model:** static
- **Background:** dark (near-black), height ~1975px

## DOM Structure
Dark section. Heading + subtext + link top-left. Grid/carousel of event cards. Two featured events with full descriptions. Smaller event thumbnails.

## Section Header

### Heading
- fontFamily: "GesturaHeadline", fontSize: 48px, fontWeight: 400
- lineHeight: 1.1, letterSpacing: -0.96px
- color: rgba(255,255,255,0.7) or white
- Text: "Exclusive gatherings worldwide"

### Subtext
- fontFamily: Inter, fontSize: 16px
- color: rgba(255,255,255,0.6)
- Text: "Aira hosts exclusive invite-only gatherings in major cities worldwide, where world-class founders and CEOs share lessons that took decades to learn."

### Links
- "See all events" → /revenue-journal/events
- "Subscribe for more" → link

## Event Cards (Featured)

### Event Card 1 - Dublin
- Title: "Revenue Growth & Champagne - Dublin"
- Date: "April 9, 2026"
- Venue: "9 Below, Dublin"
- Description: "Join us in Dublin for an exclusive evening where CEOs, founders, and sales professionals come together over champagne to talk about what AI-driven sales looks like in practice."
- Buttons: "Request invite" + "View event"
- Image: `public/images/event-dublin.webp`

### Event Card 2 - Manchester
- Title: "Revenue Growth & Champagne - Manchester"
- Date: "May 6, 2026"
- Venue: "Stock Exchange Hotel"
- Description: "Join 100 founders and CEOs at the iconic Manchester Stock Exchange — an evening of champagne and a first look at the intelligence platform that turns information into revenue."
- Buttons: "Request invite" + "View event"
- Image: `public/images/event-img-2.webp`

## Event Card Layout

### Card container
- backgroundColor: rgba(255,255,255,0.05) or transparent
- borderRadius: 16px
- overflow: hidden
- display: flex or grid

### Card image
- aspectRatio: 16/9 or square
- objectFit: cover

### Card content
- padding: 24px
- color: white

### Event date/venue
- fontSize: 12px-14px, color: rgba(255,255,255,0.6)

### Event title
- fontFamily: "GesturaHeadline", fontSize: 24px, fontWeight: 400
- color: white

### Buttons
- "Request invite": outline button, border 1px solid rgba(255,255,255,0.4)
- "View event": text link

## Photo Gallery (smaller thumbnails)
Uses these images in a grid/carousel:
- `public/images/event-photo-1.avif`
- `public/images/event-photo-2.avif`
- `public/images/event-photo-3.avif`
- `public/images/event-national.avif`
- `public/images/event-photo-4.avif`
- `public/images/event-photo-5.jpg`
- `public/images/event-screenshot.png`
- `public/images/event-photo-6.avif`

## Text Content
- Section heading: "Exclusive gatherings worldwide"
- Subtext: "Aira hosts exclusive invite-only gatherings in major cities worldwide, where world-class founders and CEOs share lessons that took decades to learn."

## Responsive Behavior
- Desktop: 2-column event cards, photo grid
- Mobile: single column stacked cards
