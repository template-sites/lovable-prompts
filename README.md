# MusicLessonPro Marketing Website

Build a complete marketing website for MusicLessonPro, a music studio management software for independent music teachers.

## Tech Stack
- Vite + React + TypeScript
- shadcn/ui components
- Tailwind CSS
- React Router
- Framer Motion (for animations)

## CRITICAL REQUIREMENTS

### Dark Mode / Light Mode
- Implement a theme toggle in the navigation bar
- Use CSS variables and Tailwind's dark: prefix for all colors
- Persist theme preference in localStorage
- Default to system preference
- All pages MUST look great in both light and dark modes

### All Links Must Work
- Every button and link must navigate to a working page
- No placeholder links or "coming soon" pages
- Login button goes to /login
- Start Free Trial button goes to /signup

### Footer on Every Page
The footer must include:
- Logo and tagline
- Product links: Features, Pricing, Templates, API
- Company links: About, Blog, Contact, Affiliates
- Support links: Help Center, Status
- Legal links: Privacy Policy, Terms of Service
- Social media icons (Twitter, YouTube, Instagram)
- Email contact
- Copyright notice

## Pages to Build
Read each file in the `pages/` folder and build that page:
- **home.md** - Landing page with hero, features, testimonials, CTA
- **features.md** - Detailed feature breakdown
- **pricing.md** - Pricing tiers with comparison
- **about.md** - Company story, team, mission
- **contact.md** - Contact form and info
- **help.md** - Help center / FAQ
- **affiliate.md** - Affiliate program
- **privacy.md** - Privacy policy
- **terms.md** - Terms of service

## Navigation Structure
```
[Logo] Features | Pricing | Templates | API    [Theme Toggle] Login | Start Free Trial
```

Templates link goes to `/templates` (teacher website gallery)
API link goes to `/api` (developer documentation)

## Design Guidelines
- Modern, clean aesthetic with coral (#FF6B6B) and teal (#4ECDC4) accents
- Music-themed but professional
- Target audience: Music teachers and studio owners
- Mobile responsive (hamburger menu on mobile)
- Smooth scroll and animations
- High-quality imagery placeholders

## Color Palette
- Primary: Coral #FF6B6B
- Secondary: Teal #4ECDC4
- Dark: Slate #2C3E50
- Light: Cream #FFFEF7
- Adapt all colors appropriately for dark mode
