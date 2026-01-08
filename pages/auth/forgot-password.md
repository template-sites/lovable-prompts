# Forgot Password Page

## Layout
Centered card on a subtle gradient background. MusicLessonPro logo at top.

## Form

**Headline:** Reset your password
**Subheadline:** Enter your email and we'll send you a reset link

### Fields
- Email (required)

### Buttons
- Send reset link (primary, full width)

### States

#### Default State
Show the form above

#### Success State
After submitting, show:
- Checkmark icon
- "Check your email"
- "We've sent a password reset link to {email}"
- "Didn't receive it? Check spam or request again" (with link)

### Footer
Remember your password? Sign in
(Link to /login)

## Notes
- Validate email format before submission
- Show loading state on button while "sending"
- Works in both light and dark mode
