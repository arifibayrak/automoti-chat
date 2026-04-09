# Aira.app Behaviors & Interactions

## Global
- **Smooth scroll**: Lenis active (`.lenis` class on document)
- **Fonts**: Gesturaheadline (custom, 400) for headings; Inter (400/500/600) for body
- **Body bg**: `rgb(249, 248, 246)` — warm off-white

## Navigation
- **Position**: `fixed`, height 76px
- **State A (over hero)**: transparent background, white text, white logo
- **State B (scroll)**:  Likely gains a dark semi-transparent background (inferred, extract separately)
- **Transition**: smooth

## Hero Section
- **Static**: Background image fills 100vh, no scroll animation detected
- **Content**: Left-aligned text, right side has the bg image with person holding phone
- **H1 treatment**: Two lines: "Just ask Aira," (normal) + "your AI sales agent" (muted opacity 0.7 via second-line-muted class)

## Video Section
- **Autoplay, loop, muted video**: centered in dark section
- **Header**: "One mobile app. Every business relationship." — second part has `after-first` class (muted)

## Features A (Section 2)
- **Static**: Two numbered feature blocks (01, 02) with images
- **Feature 01**: News & financial monitoring - feature image right
- **Feature 02**: Get briefed - feature image right
- Each has "Join the waitlist" CTA button

## Features B (Section 4)
- **Static**: Three numbered feature blocks (01, 02, 03)
- **Feature 01**: Can't keep track - with feature image
- **Feature 02**: AI assistant - with feature images (3 states: prepare meeting, call summary, research prospect)
- **Feature 03**: Coming soon?

## Stats/Globe Section
- **Static**: Large heading + 4 stats + globe image
- **Stats layout**: 4 items in a row, each 256px wide
- **Numbers**: 72px Inter, white, -2.16px letter-spacing

## Events Section
- **Complex**: Multiple event cards + featured events
- **Cards**: appear to be in a grid or horizontal carousel
- **Two highlighted events**: Dublin (April 9) and Manchester (May 6) with full descriptions

## Meetings + FAQ Section
- **Static**: Three numbered feature items (01 Walk in prepared, 02 Take notes, 03 Get summary)
- **FAQ**: Accordion (click-driven expand/collapse)
- **Each feature**: Has numbered badge, heading, description, and feature image

## Footer
- **Static**: 4-column layout
- **Columns**: Product, Company, Connect, Legal
