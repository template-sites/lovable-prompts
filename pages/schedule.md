# Schedule Page

## Header

- **Page title**: Schedule
- **View toggle**: Route View | Calendar View | List View
- **Date picker**: Navigate between dates/weeks
- **Filter**: By technician (dropdown)

## Route View (default for today)

### Route Summary
- Technician name
- Date
- X stops, Y miles estimated
- Start Route button

### Stop List
Ordered list of stops:

Each stop shows:
- Stop number (1, 2, 3...)
- Pool owner name
- Address
- Pool type (Inground, Spa, etc.)
- Service type (Weekly, Repair, etc.)
- Gate code (if exists)
- Access notes preview
- Status indicator
- Estimated time

Actions per stop:
- Start (if first incomplete)
- Skip (with reason modal)
- View details

### Map (optional)
Show route on map with numbered pins

## Calendar View (week/month)

Week view calendar showing:
- Days as columns
- Visits as cards
- Color by status or technician
- Click to view/edit visit

## List View

Table of visits:
- Date
- Time
- Pool owner
- Pool address
- Service type
- Technician
- Status
- Actions (View, Edit, Cancel)

Filters:
- Date range
- Status
- Technician
- Service type

## Add Visit Modal

Fields:
- Pool (searchable dropdown)
- Date
- Time (optional)
- Service type
- Technician (optional)
- Notes

## Empty State

"No visits scheduled for this date."
Button: Schedule a Visit
