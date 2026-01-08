# Service Logs Page

## Header

- **Page title**: Service Logs
- **Search**: Search by pool or owner
- **Filters**: Date range, Technician, Has issues

## Service Log List

Cards or table showing:
- Date and time
- Pool owner name
- Pool address
- Technician name
- Thumbnail of photos (if any)
- Issue indicator (if issuesFound)
- Actions: View, Email to customer

## Service Log Detail / Modal

### Header
- Pool owner name
- Pool address
- Date and technician

### Chemical Readings
Display readings with ideal ranges:
- pH: {value} (ideal: 7.2-7.6)
- Free Chlorine: {value} ppm (ideal: 1-3)
- Alkalinity: {value} ppm (ideal: 80-120)
- Calcium Hardness: {value} ppm (ideal: 200-400)
- Cyanuric Acid: {value} ppm (ideal: 30-50)
- Salt Level: {value} ppm (for saltwater, ideal: 2700-3400)
- Water Temp: {value}°F

Visual indicator: green if in range, yellow if borderline, red if out of range

### Chemicals Added
List of chemicals:
- Type
- Amount
- Unit

Common types: Chlorine, Acid, Soda Ash, Calcium, Stabilizer, Algaecide, Salt

### Tasks Completed
Checklist showing completed tasks:
- Skimmed surface
- Brushed walls
- Vacuumed
- Cleaned filter
- Backwashed
- Emptied skimmer baskets
- Emptied pump basket
- Checked equipment

### Equipment Status
- Pump pressure: {value} PSI
- Filter status: Good / Needs Cleaning / Needs Repair
- Heater status: Off / On / Not Working

### Photos
Before photos (gallery)
After photos (gallery)

### Notes
- Technician notes
- Issues found (highlighted if present)

### Actions
- Email report to customer
- Print report

## Create/Edit Service Log (from visit)

### Readings Form
Input fields for all chemical readings

### Chemicals Added
Add multiple:
- Type (dropdown)
- Amount (number)
- Unit (dropdown: lbs, oz, gallons)

### Tasks
Checkboxes for common tasks
Custom task input

### Equipment
- Pump pressure
- Filter status (dropdown)
- Heater status (dropdown)

### Photos
- Before photos (upload multiple)
- After photos (upload multiple)

### Notes
- Technician notes (textarea)
- Issues found (textarea, highlighted)

## Empty State

"No service logs yet. Complete a service visit to create a log."
