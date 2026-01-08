# MusicLessonPro - Teacher Website Showcase

Build **3 complete, professional teacher websites** that demonstrate how MusicLessonPro helps teachers create their online presence. Each site has a distinct personality and visual direction.

**Before writing any code, ask me any questions you need to fully understand this project.**

---

## Project Overview

**Purpose:** Showcase websites for 3 fictional music studios using MusicLessonPro
**Goal:** Demonstrate range of styles—from modern/tech to family-friendly to classical/prestigious
**Structure:** Each site is a separate route prefix (`/harmony/*`, `/riverdale/*`, `/metropolitan/*`)

---

## Tech Stack

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS with CSS variables per-site
- **Components:** shadcn/ui (Button, Card, Input, Dialog, Accordion)
- **Animation:** Framer Motion for subtle entrance animations
- **Routing:** React Router v6
- **Icons:** Lucide React

---

## Build Order

Build one site at a time, fully complete before moving to the next:
1. Harmony Digital (futuristic/tech)
2. Riverdale Music Studio (warm/family)
3. Metropolitan Conservatory (premium/classical)

For each site, build in this order:
1. Layout (nav + footer)
2. Home page
3. About page
4. Programs page
5. Contact page
6. Privacy & Terms pages

---

## Site 1: Harmony Digital Music Academy

**Route prefix:** `/harmony/*`

### Visual Direction
**Futuristic and cinematic.** Dark UI with neon accents, cosmic gradients, glowing interactive elements. Think Spotify meets a high-end music production studio.

### Color Palette
```
--background: 222 47% 11%    /* Deep slate #0f172a */
--foreground: 210 40% 98%    /* Near white */
--primary: 270 95% 65%       /* Electric purple #a855f7 */
--secondary: 180 100% 50%    /* Cyan #00ffff */
--accent: 320 100% 60%       /* Magenta accent */
--card: 222 47% 15%          /* Slightly lighter slate */
```

### Typography
- Headlines: Bold, tight tracking, gradient text effects
- Body: Clean sans-serif, high contrast

### Navigation
```
[Harmony Logo - gradient text] Home | About | Lessons | Contact    [Theme Toggle]
```

### Home Page (`/harmony`)

**Hero Section**
```
Badge: "100% Online Music Education"
Headline: "Learn Music From Anywhere"
Subheadline: "World-class instructors, cutting-edge technology, flexible online lessons that fit your schedule."
CTA: "Book Your Free Trial" → /harmony/contact
Secondary: "Watch Demo" (play icon)
```
- Background: Animated gradient mesh (purple → cyan → black)
- Floating UI elements showing lesson interface mockup

**Features Section** (3 cards with glow effect)
```
Card 1: "Learn From Home"
Icon: Home (with glow)
"Skip the commute. Get studio-quality lessons from your living room with our HD video platform."

Card 2: "Flexible Scheduling"
Icon: Calendar
"Book lessons that work for you. Morning, evening, weekends—instructors in every timezone."

Card 3: "Track Your Progress"
Icon: BarChart
"Our app tracks practice, records lessons, and shows exactly how you're improving."
```

**Instruments Section**
```
What We Teach:
• Guitar (Acoustic & Electric)
• Piano & Keyboard
• Voice & Songwriting
• Music Production
• Electronic Drums
• Bass
```
- Grid with instrument icons, hover reveals details

**Testimonials**
```
"I never thought I could learn guitar online, but Harmony proved me wrong. Crystal clear video quality."
— Marcus T., Austin

"Taking lessons at 9pm after my kids are in bed is a game-changer. Finally learning piano at 35!"
— Jennifer K., Seattle

"The practice tracking app is addictive. I've practiced more in 3 months than the past 3 years."
— David L., NYC
```

**CTA Section**
```
"Ready to start your musical journey?"
"Your first lesson is free. No credit card required."
[Book Free Trial]
```
- Gradient background with animated particles

### About Page (`/harmony/about`)

**Hero**
```
Headline: "Music Education, Reimagined"
Subheadline: "Founded by musicians who believed geography shouldn't limit access to great teachers."
```

**Story Section**
"Harmony Digital Music Academy was founded in 2023 by musicians who believed that geography shouldn't limit your access to great teachers. We've assembled a team of professional musicians, touring artists, and certified educators from around the world."

**Instructors Grid**
```
Jake Reynolds — Guitar
15+ years touring with indie bands. Berklee graduate. Rock, blues, fingerstyle.

Mia Chen — Piano
Classical training at Juilliard. All styles from classical to pop. Patient and encouraging.

Devon Williams — Voice
Broadway performer. 10 years teaching. Contemporary vocal technique.

Alex Patel — Music Production
Grammy-nominated producer. Ableton, Logic, songwriting. Industry insider tips.
```

**Technology Section**
- HD video with minimal latency
- Screen sharing for production lessons
- Lesson recording for review
- Integrated practice tracking
- Mobile app for iOS and Android

### Programs Page (`/harmony/lessons`)

**Lesson Options**
```
One-on-One Lessons
Personalized instruction tailored to your goals.
• 30 min: $45
• 45 min: $60
• 60 min: $75

Package Deals
• 4 lessons: 10% off
• 8 lessons: 15% off
• 12 lessons: 20% off

Group Classes
Small groups (3-5 students) for affordable learning.
• 60-min group: $30/class
```

**What You Get**
- Personalized lesson plans
- Practice assignments after each lesson
- Access to resource library
- Lesson recordings to review
- Progress tracking dashboard
- Flexible rescheduling

### Contact Page (`/harmony/contact`)

**Form Fields:** Name, Email, Phone, Instrument interest, Experience level (dropdown), Preferred lesson times, Message

**Contact Info:**
- Email: hello@harmonydigital.com
- Phone: (555) 123-4567

**FAQ Accordion**
- How do online lessons work?
- What equipment do I need?
- Can I switch instructors?

---

## Site 2: Riverdale Music Studio

**Route prefix:** `/riverdale/*`

### Visual Direction
**Warm and playful.** Friendly curves, saturated warm tones, cheerful energy. The feeling of a cozy neighborhood music school where kids love to learn.

### Color Palette
```
--background: 48 100% 96%    /* Warm cream #fffbeb */
--foreground: 20 14% 20%     /* Warm brown */
--primary: 43 96% 56%        /* Sunny yellow #facc15 */
--secondary: 142 76% 36%     /* Friendly green #22c55e */
--accent: 24 95% 53%         /* Warm orange #f97316 */
--card: 0 0% 100%            /* White */
```

### Typography
- Headlines: Rounded, friendly font-weight
- Body: Readable, warm feel

### Navigation
```
[Riverdale Logo - music note with smile] Home | About | Lessons | Contact   [Theme Toggle]
```

### Home Page (`/riverdale`)

**Hero Section**
```
Headline: "Where Kids Fall in Love with Music"
Subheadline: "Patient teachers, fun lessons, and a supportive community. Serving Riverdale families since 2015."
CTA: "Schedule a Free Visit" → /riverdale/contact
```
- Background: Warm gradient with illustrated music notes
- Photo placeholder: Happy kid at piano with smiling teacher

**Why Families Choose Us** (3 cards)
```
Card 1: "Patient, Kid-Friendly Teachers"
Icon: Heart
"Our instructors specialize in teaching children. They make lessons fun while building real skills."

Card 2: "Flexible for Busy Families"
Icon: Calendar
"After-school and weekend slots available. Easy rescheduling when life happens."

Card 3: "Recitals & Community"
Icon: Users
"Two recitals per year where students shine. Plus summer camps and group activities."
```

**What We Teach**
```
• Piano (our most popular!)
• Guitar
• Violin & Viola
• Voice
• Ukulele (great for beginners!)
• Drums
```

**Ages We Serve**
- Little Musicians (ages 4-6): Intro to music through play
- Kids (ages 7-12): Building fundamentals
- Teens (ages 13-17): Developing their sound
- Adults: It's never too late!

**Testimonials**
```
"My daughter used to dread piano practice. Now she asks to play every day! Mrs. Sarah has been wonderful."
— Michelle R., parent

"Both my kids take lessons here. The teachers actually make it fun, and the holiday recital was so special."
— Tom & Lisa K., parents

"We tried two other studios before Riverdale. The difference is night and day!"
— Angela M., parent
```

**CTA Section**
```
"Ready to start the musical journey?"
"Schedule a free meet & greet to tour our studio and meet our teachers."
[Book Your Visit]
```

### About Page (`/riverdale/about`)

**Our Story**
"Riverdale Music Studio was founded by Sarah Mitchell, a piano teacher and mom of three who wanted to create a music school that felt like a second home. After teaching in her living room for years, Sarah opened our cozy studio on Main Street in 2015. Today, we're proud to serve over 100 families in the Riverdale community."

**Our Philosophy**
"We believe music should be joyful. While we take musical education seriously, we never lose sight of why kids start playing: because it's fun! Our approach balances technique with creativity, discipline with play."

**Meet Our Teachers**
```
Sarah Mitchell — Piano, Studio Owner
Mom of 3, piano teacher for 20 years. Known for infinite patience and making theory fun.

Carlos Rodriguez — Guitar & Ukulele
Local gigging musician. Great with teens. Makes every student feel like a rock star.

Emily Zhang — Violin & Viola
Classically trained, gentle approach. Suzuki method specialist for young beginners.

James Washington — Drums
Former school band director. Steady beat and steady patience. Kids love him.
```

**Our Studio**
- 4 private lesson rooms
- Comfortable waiting area for parents
- Practice rooms available
- Recital space for 50 guests
- Free parking in back

### Programs Page (`/riverdale/lessons`)

**Private Lessons**
```
Weekly Lessons:
• 30 minutes: $35/lesson ($140/month)
• 45 minutes: $45/lesson ($180/month)

Includes:
• Personalized lesson plans
• Practice assignments
• Progress reports for parents
• Two recital performances per year
```

**Little Musicians (Ages 4-6)**
"Introduction to music through games, songs, and exploration. Small groups of 4-6 kids."
- 30 minutes: $20/class
- 8-week sessions

**Summer Music Camp**
"One week of musical fun! Instrument exploration, group activities, end-of-week performance."
- Half day (9am-12pm): $200/week
- Full day (9am-3pm): $350/week

**Policies**
- First lesson is always a free trial
- 24-hour cancellation notice required
- Makeup lessons available
- Sibling discount: 10% off second child

### Contact Page (`/riverdale/contact`)

**Visit Us**
```
123 Main Street
Riverdale, NY 10463

Hours:
Monday-Friday: 2pm - 8pm
Saturday: 9am - 4pm
Sunday: Closed

Phone: (914) 555-8901
Email: hello@riverdalemusicstudio.com
```

**Form Fields:** Parent Name, Child's Name, Child's Age, Phone, Email, Instrument interest, How did you hear about us?

**Map placeholder** with note: "Free parking behind building. Enter through blue door on Oak Street."

---

## Site 3: Metropolitan Conservatory

**Route prefix:** `/metropolitan/*`

### Visual Direction
**Premium and refined.** Elegant serif typography, deep rich colors, gold accents. The gravitas of a prestigious conservatory with centuries of tradition.

### Color Palette
```
--background: 220 26% 14%    /* Deep navy #1e293b */
--foreground: 48 100% 96%    /* Warm cream */
--primary: 43 74% 49%        /* Rich gold #ca8a04 */
--secondary: 0 72% 25%       /* Deep burgundy #7f1d1d */
--accent: 43 96% 70%         /* Bright gold #fbbf24 */
--card: 222 47% 18%          /* Slightly lighter navy */
```

### Typography
- Headlines: Elegant serif (Playfair Display or similar), refined
- Body: Clean serif, sophisticated feel

### Navigation
```
[Metropolitan Crest Logo] Home | About | Programs | Admissions    [Theme Toggle]
```

### Home Page (`/metropolitan`)

**Hero Section**
```
Headline: "Excellence in Musical Education"
Subheadline: "World-class faculty. Rigorous curriculum. For students serious about mastering their craft."
CTA: "Apply for Admission" → /metropolitan/contact
```
- Background: Elegant gradient with subtle texture
- Image placeholder: Grand piano in concert hall

**Our Distinction** (3 cards with gold borders)
```
Card 1: "Conservatory-Level Faculty"
"Instructors hold degrees from Juilliard, Curtis, and the world's finest conservatories. Many perform with major orchestras."

Card 2: "Proven Results"
"Students consistently earn placement at top music schools, win competitions, and pursue professional careers."

Card 3: "Comprehensive Curriculum"
"Beyond private lessons: theory, ear training, chamber music, and masterclasses with visiting artists."
```

**Programs Overview**
```
Classical Instruments:
Piano | Violin, Viola, Cello, Bass | Flute, Clarinet, Oboe, Bassoon | Brass | Classical Guitar | Harp

Voice:
Classical/Opera | Art Song | Oratorio

Composition & Theory:
Music Theory (all levels) | Composition | Counterpoint & Harmony | Score Analysis
```

**Student Achievements**
```
"Metropolitan prepared me for my Juilliard audition like no one else could. I owe my acceptance to the faculty here."
— Emma S., Juilliard '25

"After 20 years away from the violin, I wanted to return to serious study. Metropolitan welcomed me and challenged me to reach new heights."
— Dr. Robert K., amateur violinist

"My daughter won the state young artists competition after just two years here. The teaching is unparalleled."
— Mrs. Chen, parent
```

**Upcoming Events**
- January 25: Student Recital Series
- February 12: Masterclass with visiting artist
- March 8: Chamber Music Concert
- April 20: Spring Gala Concert

**CTA Section**
```
"Begin your path to mastery"
"Admission by audition. Schedule your assessment today."
[Request Audition Information]
```

### About Page (`/metropolitan/about`)

**Our History**
"Founded in 1987, Metropolitan Conservatory has served as a center of musical excellence for nearly four decades. What began as a small studio of dedicated musicians has grown into one of the region's most respected institutions for classical music education."

**Our Mission**
"To provide conservatory-level musical training to dedicated students of all ages, fostering artistic excellence, technical mastery, and deep musical understanding."

**Faculty**
```
Dr. Margaret Chen — Artistic Director, Piano
DMA Eastman School of Music. Former faculty Manhattan School of Music. Internationally recognized pedagogue.

Alexander Petrov — Violin, Chamber Music
Moscow Conservatory graduate. Former concertmaster, National Symphony. Advanced students and chamber ensembles.

Isabella Rossi — Voice
Metropolitan Opera chorus veteran. MM Juilliard. Bel canto technique and operatic repertoire.

Dr. William Hayes — Theory, Composition
PhD Yale. Published composer. Theory sequence and composition for serious students.

Maria Santos — Cello
Curtis Institute graduate. Principal cellist, City Symphony. Known for warm tone and expressive teaching.
```

**Facilities**
- 8 private teaching studios with concert-quality instruments
- Steinway Model D concert grand in recital hall
- Theory classroom with audio equipment
- Music library with scores and recordings
- Practice rooms for enrolled students

### Programs Page (`/metropolitan/programs`)

**Private Instruction**
```
Lesson Fees (60 minutes):
• Associate Faculty: $95
• Faculty: $120
• Senior Faculty: $150
• Artistic Director: $200

Enrollment:
• Academic year: September - June
• Summer intensive sessions available
• Minimum commitment: one semester
```

**What's Included**
- Weekly private lessons
- Access to practice facilities
- Participation in studio classes
- Performance opportunities
- Progress evaluations

**Supplementary Programs**
```
Music Theory (Required for diploma track):
• Fundamentals: $40/class (group)
• Intermediate Harmony: $50/class
• Advanced Analysis: $60/class

Chamber Music:
$200/semester (weekly coaching)

Audition Preparation:
Package of 4 sessions: $500

Masterclasses:
$25 observer / $75 performer
```

**Diploma Programs**
- Junior Diploma (high school)
- Artist Diploma (post-secondary)
Contact admissions for program requirements.

### Contact Page (`/metropolitan/contact`)

**Admissions Office**
```
Email: admissions@metropolitanconservatory.edu
Phone: (212) 555-7890

Location:
450 West 57th Street, Suite 800
New York, NY 10019

Office Hours:
Monday-Friday: 10am - 6pm
Saturday: 10am - 2pm (by appointment)
```

**Admission Process**
1. Submit Inquiry - Complete online form
2. Schedule Audition - We'll arrange a time
3. Audition & Interview - Perform and meet faculty
4. Admission Decision - Typically within one week
5. Enrollment - Complete registration and begin

**Audition Requirements**
- Two contrasting pieces appropriate to level
- Scales and technique as requested
- Sight-reading
- Brief interview with faculty

**Form Fields:** Name, Email, Phone, Instrument/Voice type, Current teacher, Years of study, Goals and aspirations, Preferred audition dates

---

## Footer Template (adapt styling per site)

```
[Logo]

Quick Links          Legal              Contact
Home                Privacy Policy     [email]
About               Terms of Service   [phone]
Programs
Contact

[Social Icons: Facebook, Instagram, YouTube]

© 2026 [Site Name]. All rights reserved.
```

---

## Critical Requirements

1. **Every link must work** - All nav links, CTAs, and footer links
2. **Dark mode for each site** - Theme toggle, colors adapt appropriately
3. **Mobile responsive** - Hamburger nav, stacked layouts
4. **Real content only** - No lorem ipsum anywhere
5. **Distinct visual identities** - Each site should feel completely different
6. **Footer on every page** - Consistent per-site styling

---

## Questions?

Before you start building, ask me any clarifying questions about design, content, or navigation structure.
