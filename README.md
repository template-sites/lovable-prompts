# MusicLessonPro Dashboard

Build a complete dashboard application for MusicLessonPro, a music studio management software.

## Tech Stack
- Vite + React + TypeScript
- shadcn/ui components
- Tailwind CSS
- React Router
- TanStack Query (for data fetching simulation)

## CRITICAL REQUIREMENTS

### Dark Mode / Light Mode
- Implement a theme toggle (sun/moon icon) in the sidebar footer
- Use CSS variables and Tailwind's dark: prefix for all colors
- Persist theme preference in localStorage
- Default to system preference
- All pages MUST work correctly in both light and dark modes

### Authentication Pages
Build the auth pages in `pages/auth/`:
- `/login` - Login page
- `/signup` - Signup page
- `/forgot-password` - Password reset page

### Dashboard Footer
EVERY page MUST include a footer at the bottom with:
- Copyright: "© 2026 MusicLessonPro. All rights reserved."
- Links: Help Center, Privacy, Terms, Status
- The footer should be sticky to the bottom of the viewport when content is short

## Pages to Build
Read each file in the `pages/` folder and build that page.

## Layout
- Sidebar navigation (collapsible on mobile)
- Top header with user menu and search
- Main content area with padding
- Footer at bottom of every page
- Demo mode banner (yellow) at top indicating "This is a demo - no real data"

## Sidebar Navigation
- Dashboard (home icon)
- Schedule (calendar icon)
- Students (users icon)
- Teachers (user-check icon) - Studio plan only
- Lessons (music icon)
- Invoices (dollar icon)
- Practice (target icon) - Pro plan only
- Reports (chart icon)
- Settings (gear icon)

Bottom of sidebar:
- Theme toggle (sun/moon)
- User profile avatar and name

## Design Guidelines
- Clean, professional dashboard aesthetic
- Use cards for data display
- Tables for lists with sorting/filtering
- Charts for analytics (use recharts)
- Mobile responsive - sidebar collapses to hamburger menu
- Smooth transitions and hover states
- Loading skeletons for async data

## Color Scheme
Use these CSS variables (works in both light/dark):
- Primary: Coral (#FF6B6B)
- Secondary: Teal (#4ECDC4)
- Background, card, text colors should adapt to theme

## User Context
The logged-in user is a music teacher or studio owner. Use mock data for students, lessons, and invoices.
