# The Pandita Institute Website

A modern, interactive coaching and training institute website built with HTML and Tailwind CSS.

## Overview

This is a professional website for The Pandita Institute that provides training, coaching, and mentoring services for individuals, companies, and government organizations.

## Pages

1. **index.html** - Home page with hero section, services overview, stats counter, and CTAs
2. **about.html** - About page with company story, mission, vision, and core values
3. **training.html** - Training services detail page
4. **coaching.html** - Coaching services detail page
5. **mentoring.html** - Mentoring services detail page
6. **team.html** - Team members showcase
7. **testimonials.html** - Client testimonials with auto-rotating carousel
8. **contact.html** - Contact information with phone, email, and address

## Color Palette

- **Primary**: Emerald Green (#10b981, #059669, #047857)
- **Secondary**: Teal (#14b8a6)
- **Neutral**: Slate Gray (#334155, #64748b, #f1f5f9)
- **Accent**: Amber (#f59e0b) for CTAs
- **Background**: White (#ffffff) and Light Gray (#f8fafc)

## Features

### Interactive Elements
- **Scroll Animations**: Fade-in and slide-up effects using Intersection Observer API
- **Hover Effects**: Card lifts, button transitions, image zooms
- **Smooth Transitions**: All interactive elements with CSS transitions
- **Testimonial Carousel**: Auto-rotating with manual controls on testimonials page
- **Stats Counter**: Animated counting up when scrolled into view on home page
- **Sticky Navigation**: Navigation bar sticks to top on scroll

### Navigation
- Responsive navigation bar with dropdown menu
- Mobile hamburger menu
- Smooth scroll behavior
- Service dropdown showing Training, Coaching, Mentoring pages

### Design
- Fully responsive for mobile, tablet, and desktop
- Modern gradient backgrounds
- Card-based layouts with hover effects
- Professional typography
- Consistent footer across all pages

## Technology Stack

- **Eleventy (11ty)** static site generator
- **HTML5** for structure
- **Tailwind CSS** (via CDN) for styling
- **Vanilla JavaScript** for interactivity (embedded in HTML)
- No backend or external dependencies

## Contact Information

- **Phone**: +62 21 2345 6789
- **Email**: info@thepanditainstitute.com
- **Address**: Jl. Sudirman Kav. 52-53, Jakarta Selatan, DKI Jakarta 12190, Indonesia

## Getting Started

Eleventy builds the site into the `_site` directory and Tailwind CSS is compiled via the official CLI workflow.

```bash
npm install             # install dependencies
npm run build:css       # one-off Tailwind build (already included in npm run build)
npm run serve           # start Tailwind watch + Eleventy dev server
npm run build           # compile CSS then output the static site to _site/
```

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This is a demonstration project for The Pandita Institute website.

