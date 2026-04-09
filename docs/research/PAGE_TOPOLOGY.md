# Aira.app Page Topology

## URL: https://www.aira.app
## Page Total Height: ~10,209px at 1440px viewport

## Sections (top to bottom)

| # | Name | Class | offsetTop | height | Background |
|---|------|-------|-----------|--------|------------|
| 0 | Header/Hero | `section_page-header-large` | 0 | 725px (100vh) | `#080808` |
| 1 | Video | `section dark-18` | 725 | 1111px | `#080808` |
| 2 | Features A | `section w-variant-5e7f232f` | 1836 | 1196px | `#F9F8F6` |
| 3 | Stats/Globe | `section dark` | 3032 | 725px | `#080808` |
| 4 | Features B | `section w-variant-5e7f232f` | 3757 | 1316px | `#F9F8F6` |
| 5 | CTA Waitlist | `section` | 5073 | 779px | `#F9F8F6` |
| 6 | Events | `section dark-22` | 5852 | 1975px | dark |
| 7 | Meetings + FAQ | `section` | 7827 | 1997px | `#F9F8F6` |
| 8 | Footer | `footer_component` | 9824 | 385px | `#F9F8F6` |

## Fixed/Sticky Elements
- **Nav** (`nav_wrapper`): `position: fixed`, height 76px, transparent bg on hero, overlays everything

## Layout Structure
- Body: `overflow: hidden auto`
- `.page-wrapper`: `overflow: clip`, `position: relative`  
- `.main-wrapper`: `overflow: clip`, `position: relative`
- No scroll snap detected
- Lenis smooth scroll active (`.lenis` class on body/html)

## Color Pattern
- Dark sections: #080808 (sections 0, 1, 3, 6)
- Light sections: #F9F8F6 (sections 2, 4, 5, 7, 8, footer)
- Alternating dark/light creates visual rhythm

## Interaction Models
- **Nav**: Fixed, scroll-driven — transparent on hero, likely gains background on scroll
- **Hero**: Static content with bg image
- **Video**: Autoplay loop video in dark section
- **Features A/B**: Static scroll-through with numbered items + feature images
- **Stats**: Static counters with globe image
- **Events**: Static card grid with horizontal scroll carousel
- **Meetings + FAQ**: Static feature list + accordion FAQ
- **Footer**: Static

## Z-Index Layers
- Nav: on top of everything
- Page sections: flow content
