# MusicLessonPro Dashboard

Build a **clean, minimal, and professional** dashboard application for MusicLessonPro—studio management software for music teachers.

**Before writing any code, ask me any questions you need to fully understand this project.**

---

## Project Overview

**Product:** MusicLessonPro Dashboard - Where teachers manage their studio
**User:** Sarah Mitchell, piano/guitar teacher with 32 active students
**Goal:** Provide a clear overview of schedule, students, invoices, and practice tracking

---

## Tech Stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS with CSS variables for theming
- **Components:** shadcn/ui (Table, Card, Button, Dialog, Tabs, Input, Select, Calendar)
- **Charts:** Recharts for analytics
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Data:** Mock data with simulated async loading

---

## Design System

### Visual Direction
**Clean and functional.** Whitespace-driven, quiet motion, invisible UI. The dashboard should feel like a calm control center, not overwhelming.

### Color Palette (HSL for CSS variables)
```
--coral: 0 84% 71%        /* #FF6B6B - Primary actions, accents */
--teal: 168 60% 55%       /* #4ECDC4 - Success, secondary */
--slate: 210 25% 25%      /* Dark text */
--background: 0 0% 100%   /* Light mode bg */
--card: 0 0% 100%         /* Card backgrounds */
--muted: 220 15% 65%      /* Subtle text */
--border: 220 13% 91%     /* Borders */
```

### Typography
- **Page titles:** text-2xl font-bold
- **Section headers:** text-lg font-semibold
- **Body:** text-sm
- **Muted text:** text-muted-foreground

### Cards & Tables
- Cards: rounded-xl, shadow-sm, border border-border
- Tables: Clean with hover states, sortable headers
- Pagination: 10 items per page default

### Dark Mode
Theme toggle in sidebar footer. Persist to localStorage. All colors adapt automatically.

---

## Layout Structure

```
┌──────────────────────────────────────────────────────────────────┐
│  [Demo Mode Banner - Yellow]                                      │
├─────────────┬────────────────────────────────────────────────────┤
│             │  [Header: Search | Notifications | User Menu]       │
│  SIDEBAR    ├────────────────────────────────────────────────────┤
│             │                                                      │
│  Dashboard  │                    MAIN CONTENT                     │
│  Schedule   │                                                      │
│  Students   │                                                      │
│  Lessons    │                                                      │
│  Invoices   │                                                      │
│  Practice   │                                                      │
│  Reports    │                                                      │
│  Settings   │                                                      │
│             │                                                      │
│  ─────────  ├────────────────────────────────────────────────────┤
│  [Theme]    │  [Footer: © 2026 | Help | Privacy | Terms]          │
│  [Profile]  │                                                      │
└─────────────┴────────────────────────────────────────────────────┘
```

**Demo Banner:** Yellow background, text: "Demo Mode: This is a preview. No real data."

---

## Build Order

### 1. Layout Shell
Create `DashboardLayout.tsx`:
- Collapsible sidebar (hamburger on mobile)
- Header with search, notification bell, user dropdown
- Main content area with padding
- Footer component
- Demo mode banner at very top

### 2. Authentication Pages

**Login (`/login`)**
```
Logo: MusicLessonPro
Headline: "Welcome back"
Fields: Email, Password
Checkbox: "Remember me"
Button: "Sign in"
Link: "Forgot password?"
Divider: "Or continue with"
Button: Google OAuth
Footer: "Don't have an account? Start free trial" → /signup
```

**Signup (`/signup`)**
```
Logo: MusicLessonPro
Headline: "Start your free trial"
Subheadline: "No credit card required. Set up in 2 minutes."
Fields: First name, Last name, Email, Password, Studio name (optional)
Dropdown: Primary instrument (Piano, Guitar, Violin, Voice, Drums, Other)
Checkbox: "I agree to Terms and Privacy Policy"
Button: "Create account"
```

**Forgot Password (`/forgot-password`)**
```
Headline: "Reset your password"
Field: Email
Button: "Send reset link"
Success state: "Check your email for a reset link"
```

### 3. Dashboard Overview (`/dashboard`)

**Welcome Section**
```
"Good morning, Sarah!" (time-appropriate greeting)
"You have 4 lessons scheduled today"
```

**Stats Cards** (4 cards in a row)
```
Card 1: Today's Lessons
Value: 4
Subtitle: "Next: Piano with Emma at 3:00 PM"

Card 2: This Week
Value: 18 lessons
Subtitle: "$1,080 expected"

Card 3: Active Students
Value: 32
Subtitle: "+2 this month" (green)

Card 4: Outstanding
Value: $240
Subtitle: "3 overdue invoices" (coral warning)
```

**Today's Schedule Card**
Table with columns: Time | Student | Instrument | Duration | Status
```
10:00 AM | Jake Miller    | Guitar | 30 min | ✓ Completed
11:00 AM | Sophie Chen    | Piano  | 45 min | ✓ Completed
3:00 PM  | Emma Wilson    | Piano  | 30 min | Upcoming
4:00 PM  | Liam Johnson   | Drums  | 45 min | Upcoming
```

**Recent Activity Card**
```
• Emma Wilson logged 45 minutes of practice (2 hours ago)
• Invoice #1042 paid by Jake Miller - $120 (yesterday)
• New student signup: Olivia Brown (2 days ago)
• Lesson cancelled: Noah Davis - Guitar (3 days ago)
```

**Quick Actions** (4 buttons)
- Add New Student
- Schedule Lesson
- Create Invoice
- View All Reports

### 4. Schedule Page (`/schedule`)

**Calendar View**
- Weekly calendar (default) with day/week/month toggle
- Color-coded by instrument or student
- Click lesson to see details in slide-out panel

**Today's Lessons List**
Table: Time | Student | Instrument | Duration | Actions (View, Reschedule, Cancel)

**Filters:**
- Date range picker
- Student dropdown
- Instrument dropdown

### 5. Students Page (`/students`)

**Header:** "Students" + "Add Student" button

**Search & Filters:**
- Search by name
- Filter by instrument
- Filter by level (Beginner, Intermediate, Advanced)

**Students Table**
Columns: Name | Instrument | Level | Next Lesson | Balance | Actions
```
Emma Wilson    | Piano  | Intermediate | Jan 8, 3pm   | $0      | View
Jake Miller    | Guitar | Beginner     | Jan 9, 10am  | $120    | View
Sophie Chen    | Piano  | Advanced     | Jan 8, 11am  | $0      | View
Liam Johnson   | Drums  | Beginner     | Jan 8, 4pm   | $0      | View
```

**Add/Edit Student Dialog**
Fields: First name, Last name, Email, Phone, Instrument, Level, Lesson duration, Rate, Parent info (optional), Notes

### 6. Lessons Page (`/lessons`)

**Header:** "Lessons" + "Schedule Lesson" button

**Tabs:** Upcoming | Completed | Cancelled

**Lessons Table**
Columns: Date & Time | Student | Instrument | Duration | Status | Actions

**Schedule Lesson Dialog**
- Student dropdown (searchable)
- Date picker
- Time picker
- Duration (30/45/60 min)
- Notes field
- Recurring toggle (weekly, bi-weekly)

### 7. Invoices Page (`/invoices`)

**Header:** "Invoices" + "Create Invoice" button

**Stats Row**
- Total Outstanding: $240
- Paid This Month: $2,160
- Overdue: 3 invoices

**Invoices Table**
Columns: Invoice # | Student | Amount | Status | Issue Date | Due Date | Actions

Status badges:
- Paid = teal
- Pending = yellow
- Overdue = coral

**Create Invoice Dialog**
- Student dropdown
- Line items (description + amount), add more button
- Issue date, Due date
- Notes
- Preview before sending

### 8. Practice Tracking Page (`/practice`) - Pro Plan

**Header:** "Practice Tracking"

**Practice Leaderboard Card**
Top 5 students by practice time this week
```
1. Emma Wilson - 4h 30m (🔥 7 day streak)
2. Sophie Chen - 3h 15m
3. Jake Miller - 2h 45m
4. Liam Johnson - 1h 30m
5. Olivia Brown - 1h 0m
```

**Practice Overview Chart**
Bar chart: Practice minutes per student (last 7 days)

**Recent Practice Logs**
Table: Student | Date | Duration | What they practiced | Notes

### 9. Reports Page (`/reports`)

**Revenue Chart**
Line chart: Monthly revenue (last 6 months)
```
Aug: $2,100
Sep: $2,400
Oct: $2,280
Nov: $2,520
Dec: $2,160
Jan: $1,080 (month in progress)
```

**Lessons Summary**
- Total lessons this month: 48
- Completed: 42
- Cancelled: 4
- No-shows: 2

**Student Breakdown**
Pie chart: Students by instrument
```
Piano: 14 (44%)
Guitar: 8 (25%)
Drums: 5 (16%)
Voice: 3 (9%)
Other: 2 (6%)
```

### 10. Settings Page (`/settings`)

**Tabs:** Profile | Studio | Schedule | Billing

**Profile Tab**
- Photo upload
- Name, Email, Phone
- Password change

**Studio Tab**
- Studio name
- Address
- Website
- Instruments offered (multi-select)

**Schedule Tab**
- Default lesson duration
- Buffer between lessons
- Availability grid (Mon-Sun, start/end times)
- Advance booking limit
- Cancellation notice required

**Billing Tab**
- Current plan (Pro - $49/month)
- Payment method
- Billing history
- Upgrade/downgrade buttons

---

## Mock Data

Use these sample students for mock data:

```typescript
const mockStudents = [
  { id: "1", firstName: "Emma", lastName: "Wilson", instrument: "Piano", level: "Intermediate", rate: 45 },
  { id: "2", firstName: "Jake", lastName: "Miller", instrument: "Guitar", level: "Beginner", rate: 35 },
  { id: "3", firstName: "Sophie", lastName: "Chen", instrument: "Piano", level: "Advanced", rate: 55 },
  { id: "4", firstName: "Liam", lastName: "Johnson", instrument: "Drums", level: "Beginner", rate: 40 },
  { id: "5", firstName: "Olivia", lastName: "Brown", instrument: "Voice", level: "Intermediate", rate: 45 },
];
```

---

## Critical Requirements

1. **Every link must work** - All sidebar links navigate correctly
2. **Dark mode everywhere** - Test both themes on all pages
3. **Mobile responsive** - Sidebar collapses, tables scroll horizontally
4. **Loading states** - Show skeletons while "loading" mock data
5. **Empty states** - Show helpful messages when no data
6. **Footer on every page** - Consistent positioning

---

## Questions?

Before you start building, ask me any clarifying questions about functionality, data models, or interactions.
