# PoolPro Dashboard

Build the authenticated dashboard for PoolPro - a pool service management SaaS.

## Brand
- **Name**: PoolPro
- **Tagline**: "Professional Pool Service Management"

## Terminology
Use these terms in the UI:
- "Service Visit" not "Appointment"
- "Pool Owner" not "Customer"
- "Technician" not "Worker"
- "Service Log" not "Report"

## Pages to Build

### Auth Pages
- `/login` - Email/password login
- `/signup` - Registration form
- `/forgot-password` - Password reset request
- `/verify` - Email verification

### Dashboard Pages
- `/dashboard` - Overview with stats
- `/dashboard/schedule` - Calendar and route views
- `/dashboard/pools` - Pool directory
- `/dashboard/customers` - Pool owner management
- `/dashboard/service-logs` - Service history with photos
- `/dashboard/invoices` - Billing management
- `/dashboard/technicians` - Team management
- `/dashboard/settings` - Business settings
- `/dashboard/reports` - Analytics charts

See `pages/` folder for detailed content for each page.

## Data Types

See `types.ts` for TypeScript interfaces.

See `schema.prisma` for database models.

## Mock Data

Generate realistic mock data:
- 5-10 pool owners with full profiles
- 15-25 pools with addresses, equipment, gate codes
- 2-3 technicians
- 30-50 service visits (past and upcoming)
- 20-30 service logs with chemical readings
- 10-15 invoices in various states

Use realistic Arizona/Texas addresses for pools.

## Requirements
- Build ALL pages listed
- Include mock data for each
- Add loading states
- Add empty states
- Mobile responsive
