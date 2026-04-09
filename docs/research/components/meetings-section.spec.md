# MeetingsSection Specification (Section 7 - Light)

## Overview
- **Target file:** `src/components/MeetingsSection.tsx`
- **Interaction model:** static (features) + click-driven FAQ accordion
- **Background:** light #F9F8F6, height ~1997px

## DOM Structure
Two parts:
1. Three numbered feature items (01-03) with images
2. FAQ accordion section

## Part 1: Meeting Features

### Section heading
- fontFamily: "GesturaHeadline", fontSize: 48px, fontWeight: 400
- lineHeight: 1.1, letterSpacing: -0.96px
- color: rgb(28,29,31)
- Text: "Every meeting. Fully prepared, captured, and summarized."

### Subtext
- fontFamily: Inter, fontSize: 16px, color: rgba(28,29,31,0.6)
- Text: "Stay informed, prepared, and one step ahead. Aira removes all manual work around meetings so you can focus on closing"

### CTA Button
- background: rgb(28,29,31), color: white
- fontSize: 14px, padding: 10px 20px, borderRadius: 999px
- Text: "Join the waitlist" → /waitlist

### Feature items (3x)

Each item layout: number left, text middle, image right

#### Feature 01
- Number: "01"
- Heading: "Walk into every meeting fully prepared"
- Description: "Aira sends you a tailored brief before every meeting, built from past conversations, company research, and financial insights, so you're always prepared with the full context."
- Image: `public/images/meeting-prepared.webp`

#### Feature 02
- Number: "02"
- Heading: "Let Aira take notes while you focus on closing"
- Description: "Aira joins every meeting, records the conversation, and takes notes for you. Every decision, promise, and next step is captured and logged to the right customer."
- Image: `public/images/meeting-notes.webp`

#### Feature 03
- Number: "03"
- Heading: "Get a structured summary, automatically"
- Description: "Right after the meeting, Aira sends a clear summary with key takeaways, action items, and decisions. Automatically linked to the correct customer."
- Image: `public/images/meeting-summary.webp`

## Part 2: FAQ Accordion

### FAQ Section heading
- Text: "Frequently asked questions"
- fontFamily: "GesturaHeadline", fontSize: 32px, fontWeight: 400

### FAQ Subtext
- Text: "Here are answers to the most common questions about how Aira works and how to get started."

### FAQ Items (click-driven accordion)
Each item: question + expandable answer. Clicking question toggles answer visibility.

1. Q: "What is Aira?"
   A: "Aira is your AI sales agent. It researches your customers and company data, prepares your meetings, joins your calls, and gives you clear summaries so you can focus on selling, not admin."

2. Q: "Who is Aira built for?"
   A: "Aira is built for founders, entrepreneurs, revenue leaders and B2B sales teams. If you spend your days in customer meetings, chasing follow-ups, and trying to stay ahead of your accounts, Aira keeps you prepared, focused, and one step ahead."

3. Q: "What kind of data does Aira monitor?"
   A: "Aira enriches every company in your portfolio with financial data, board members, contact details, news, email history, and calendar meetings. All collected, enriched, and continuously monitored — so you get notified when there is an opportunity or risk signal."

### FAQ Item styles
#### Question row
- display: flex, justifyContent: space-between, alignItems: center
- padding: 20px 0
- borderBottom: 1px solid rgba(28,29,31,0.1)
- cursor: pointer

#### Question text
- fontFamily: Inter, fontSize: 16px, fontWeight: 500
- color: rgb(28,29,31)

#### Toggle icon (PlusIcon / MinusIcon from icons.tsx)
- 20x20, color: rgba(28,29,31,0.5)
- Rotates or switches when open

#### Answer
- fontFamily: Inter, fontSize: 15px, fontWeight: 400
- color: rgba(28,29,31,0.7)
- lineHeight: 1.6
- padding: 0 0 20px 0
- Hidden by default, shown on click (toggle state)

## Assets
- `public/images/meeting-prepared.webp`
- `public/images/meeting-notes.webp`
- `public/images/meeting-summary.webp`
- PlusIcon and MinusIcon from `src/components/icons.tsx`

## Responsive Behavior
- Desktop: 2-col feature items (text/image), FAQ full width
- Mobile: single column, image below text
