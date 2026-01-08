# MusicLessonPro Marketing Website

Build a **premium, minimal, and refined** marketing website for MusicLessonPro—studio management software for independent music teachers.

**Before writing any code, ask me any questions you need to fully understand this project.**

---

## Project Overview

**Product:** MusicLessonPro - All-in-one studio software for music teachers
**Target Users:** Independent piano, guitar, violin, voice, and drums teachers
**Tone:** Professional yet warm. Trustworthy. Not corporate—human.
**Goal:** Convert visitors to free trial signups

---

## Tech Stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS with CSS variables for theming
- **Components:** shadcn/ui (use Button, Card, Input, Dialog, Tabs, Accordion)
- **Animation:** Framer Motion for subtle entrance animations
- **Routing:** React Router v6
- **Icons:** Lucide React

---

## Design System

### Visual Direction
**Premium and sleek.** Translucent surfaces, soft shadows, refined typography. The feel of a high-end SaaS product, but approachable for non-technical music teachers.

### Color Palette (HSL for CSS variables)
```
--coral: 0 84% 71%        /* #FF6B6B - Primary CTA, accents */
--coral-dark: 0 65% 55%   /* Hover states */
--teal: 168 60% 55%       /* #4ECDC4 - Secondary, success states */
--slate: 210 25% 25%      /* #2C3E50 - Dark text, footer bg */
--cream: 50 100% 98%      /* #FFFEF7 - Light backgrounds */
--muted: 220 15% 65%      /* Subtle text */
```

### Typography
- **Headlines:** Inter or system font, bold (700), tight tracking
- **Body:** Inter, regular (400), relaxed line-height
- **Sizes:** Hero h1 = 4xl-6xl, Section h2 = 3xl, Cards = xl

### Spacing & Layout
- Container max-width: 1280px, centered
- Section padding: py-20 lg:py-28
- Cards: rounded-2xl, soft shadow, border border-border/50
- Buttons: rounded-xl, px-6 py-3

### Dark Mode
Implement theme toggle (sun/moon icon in nav). Persist to localStorage. Default to system preference. All colors must work in both modes.

---

## Navigation

```
[Logo] Features | Pricing | About           [Theme Toggle] Log in | Start Free Trial
```

- Logo: Music note icon + "MusicLessonPro" wordmark
- "Start Free Trial" = coral gradient button with subtle shadow
- Mobile: Hamburger menu with slide-out drawer

---

## Build Order

Build these sections in order. Each should be a separate component.

### 1. Layout Shell
Create `MarketingLayout.tsx` with:
- Fixed navbar (blur backdrop on scroll)
- Footer component
- Theme provider wrapper

### 2. Home Page (`/`)

**Hero Section**
```
Headline: "Run your music studio on autopilot"
Subheadline: "Beautiful scheduling, payments, and practice tracking for music teachers. Spend less time on admin, more time teaching."
CTA Primary: "Start Free Trial" → /signup
CTA Secondary: "Watch Demo" (play icon)
```
- Background: Subtle gradient cream → white
- Right side: Floating dashboard preview mockup (cards showing schedule, revenue, students)
- Social proof below: "Trusted by 2,000+ music teachers"

**Value Props Section** (3 cards)
```
Card 1: "Smart Scheduling"
Icon: Calendar
"Book lessons, manage availability, send automatic reminders. No more text message ping-pong."

Card 2: "Easy Payments"
Icon: CreditCard
"Get paid on time with automatic invoicing. Accept cards, debit, or bank transfers via Stripe."

Card 3: "Practice Tracking"
Icon: Target
"Keep students engaged between lessons. They log practice, you track progress."
```
- Cards: Frosted glass effect, soft hover lift

**How It Works Section** (3 steps)
```
Step 1: "Set Your Schedule"
"Define availability, lesson lengths, pricing. Sync with Google or Apple Calendar."

Step 2: "Students Book Online"
"Share your booking link. Students pick a time. No back-and-forth texts."

Step 3: "Teach & Get Paid"
"Focus on teaching. Invoices send automatically. Payments deposit to your bank."
```
- Horizontal timeline with numbered circles
- Subtle connector lines between steps

**Testimonials Section**
```
"MusicLessonPro saved me 5 hours a week on scheduling and invoicing. The practice tracking keeps my students accountable."
— Sarah M., Piano Teacher, Austin TX

"Finally, software that understands music teachers! Managing my 4 instructors and 80 students is now effortless."
— David L., Guitar Studio Owner, Nashville

"My students love logging their practice. It's like a game for them!"
— Maria K., Voice Coach, Los Angeles
```
- Carousel or grid of 3 cards
- Avatar placeholder, name, role, location

**CTA Section**
```
Headline: "Ready to simplify your studio?"
Subheadline: "Join thousands of music teachers who spend less time on admin."
Button: "Start Free Trial — No credit card required"
```
- Full-width coral gradient background
- White text, centered

### 3. Features Page (`/features`)

**Hero**
```
Headline: "Everything you need to run your music studio"
Subheadline: "Scheduling, payments, practice tracking—all in one place."
```

**Feature Grid** - 4 categories, each with 3-5 features:

**Scheduling & Calendar**
- Smart Scheduling: Set availability by day/time, define lesson durations
- Online Booking: Custom booking page, no text message ping-pong
- Calendar Sync: Two-way sync with Google, Apple, Outlook
- Automatic Reminders: Email + SMS, reduce no-shows
- Makeup Lessons: Track cancellations, schedule makeups

**Student Management**
- Student Profiles: Contact info, lesson history, skill level, notes
- Parent Accounts: Separate login for parents of minor students
- Lesson Notes: Add notes, attach sheet music, recordings
- Progress Reports: Track skills mastered, areas to improve

**Payments & Invoicing**
- Online Payments: Credit cards, debit, ACH via Stripe
- Automatic Invoicing: Generate and send based on lessons completed
- Payment Plans: Monthly or per-lesson billing
- Late Fee Automation: Auto-add fees or send reminder emails

**Practice Tracking** (Pro badge)
- Student Practice Portal: Log time and what they worked on
- Practice Streaks: Gamify with streaks and goals
- Teacher Dashboard: See who's practicing before lessons
- Practice Reports: Weekly summaries for parents

**Integrations Bar**
Logos: Google Calendar, Apple Calendar, Outlook, Stripe, Zoom, Google Meet

### 4. Pricing Page (`/pricing`)

**Hero**
```
Headline: "Simple, transparent pricing"
Subheadline: "Start free. Upgrade when you're ready. No hidden fees."
```

**Pricing Cards** (3 columns)

```
STARTER — $19/month
"Perfect for solo teachers"
Up to 25 students

✓ Lesson scheduling
✓ Student management
✓ Email + SMS reminders
✓ Online payments (Stripe)
✓ Basic invoicing
✓ Calendar sync

[Start Free Trial]

---

PRO — $49/month ← "Most Popular" badge
"For teachers who want more"
Up to 100 students

Everything in Starter, plus:
✓ Practice tracking portal
✓ Progress reports
✓ Lesson notes with attachments
✓ Parent portal
✓ Makeup lesson management
✓ Revenue reports

[Start Free Trial]

---

STUDIO — $99/month
"For growing studios"
Unlimited students + teachers

Everything in Pro, plus:
✓ Multi-teacher management
✓ Room/resource booking
✓ Teacher payroll tracking
✓ Advanced analytics
✓ Custom branding
✓ Priority support

[Start Free Trial]
```

- Pro card highlighted with coral border/glow
- Toggle for monthly/annual (annual = 2 months free)

**All Plans Include**
- 14-day free trial
- No credit card required
- Cancel anytime
- Free data migration help

**FAQ Accordion**
- Can I switch plans later?
- Is there a free trial?
- What payment methods do you accept?
- Annual billing discount?
- What happens if I cancel?
- Discounts for music schools?

### 5. About Page (`/about`)

**Hero**
```
Headline: "Built by music teachers, for music teachers"
Subheadline: "We know the chaos of managing a studio. We built the solution."
```

**Our Story**
Founded in 2024 by a piano teacher who was drowning in spreadsheets and text messages. We believe software should feel invisible—handle the admin so you can focus on teaching.

**Team Grid** (placeholder for 3-4 team members)
- Photo, Name, Role, Short bio

**Values**
- Teachers First: Every feature starts with teacher feedback
- Simple > Complex: If it's confusing, we redesign it
- Affordable: Great software shouldn't require enterprise budgets

### 6. Contact Page (`/contact`)

**Two-column layout:**
Left: Contact form (Name, Email, Subject dropdown, Message)
Right:
- Email: hello@musiclessonpro.com
- Response time: "We reply within 24 hours"
- Social links

### 7. Legal Pages

**Privacy Policy (`/privacy`)** - Standard SaaS privacy policy
**Terms of Service (`/terms`)** - Standard SaaS terms

### 8. Auth Pages

**Login (`/login`)**
- Centered card, logo at top
- Email + Password fields
- "Remember me" checkbox
- "Forgot password?" link
- "Sign in" button
- Divider: "Or continue with"
- Google OAuth button
- Footer: "Don't have an account? Start free trial"

**Signup (`/signup`)**
- Similar layout
- Fields: Name, Email, Password, Studio name (optional)
- Checkbox: "I agree to Terms and Privacy Policy"
- "Create Account" button
- Google OAuth button

---

## Footer

```
[Logo + Tagline: "All-in-one studio software"]

Product          Company         Support         Legal
Features         About           Help Center     Privacy Policy
Pricing          Contact         Status          Terms of Service
Templates        Careers
API              Affiliates

[Twitter] [YouTube] [Instagram]

© 2026 MusicLessonPro. All rights reserved.
```

---

## Critical Requirements

1. **Every link must work** - No placeholder pages
2. **Dark mode must work everywhere** - Test both themes
3. **Mobile responsive** - Hamburger nav, stacked layouts
4. **Real content only** - No lorem ipsum anywhere
5. **Smooth animations** - Subtle fade-in on scroll, hover effects
6. **Footer on every page** - Consistent across all routes

---

## Questions?

Before you start building, ask me any clarifying questions about design, content, or functionality.
