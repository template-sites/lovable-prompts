# Invoices Page

## Header

- **Page title**: Invoices
- **Create button**: Create Invoice
- **Generate button**: Generate Monthly Invoices
- **Search**: Search by customer or invoice #
- **Filters**: Status (Draft, Sent, Paid, Overdue), Date range

## Stats Cards

- Total Outstanding: ${amount}
- Overdue: ${amount} ({count} invoices)
- Paid This Month: ${amount}

## Invoice List

Table columns:
- Invoice # (INV-2024-001234)
- Pool Owner
- Amount
- Status (badge)
- Due Date
- Actions

Click row → Invoice detail

## Bulk Actions

When rows selected:
- Send Selected
- Mark as Paid

## Invoice Detail Page

### Header
- Invoice #
- Status badge
- Pool owner name
- Actions: Send, Mark Paid, Download PDF, Edit, Delete

### Summary
- Invoice date
- Due date
- Period: {start} - {end}

### Line Items
Table:
- Description
- Quantity
- Unit Price
- Total

Examples:
- "Weekly Service - 123 Main St" x 4 @ $45 = $180
- "Filter Clean" x 1 @ $75 = $75
- "Chlorine (10 lbs)" x 1 @ $35 = $35

### Totals
- Subtotal
- Tax (if any)
- **Total**

### Payment
- Status
- Paid date (if paid)
- Payment method (if paid)

### History
- Created: {date}
- Sent: {date}
- Viewed: {date}
- Paid: {date}

## Create Invoice Modal

### Pool Owner
Select pool owner (dropdown)

### Period
- Start date
- End date

### Line Items
Auto-populated from completed visits in period
Can add manual line items:
- Description
- Quantity
- Unit price

### Options
- Tax rate (%)
- Due date
- Notes

## Generate Monthly Invoices Modal

- Select month
- Preview: X invoices totaling $Y
- Confirm button

## Empty State

"No invoices yet."
Button: Create Your First Invoice
