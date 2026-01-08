# Invoices Page

## Page Title
Invoices

## Stats Cards (4 cards)
- Outstanding: $240 (3 invoices)
- Due This Week: $180 (2 invoices)
- Collected This Month: $2,340
- Total Revenue (YTD): $28,560

## Action Bar
- Search by student or invoice #
- Filter by Status (All, Paid, Pending, Overdue)
- Date range picker
- Create Invoice button (primary)

## Invoices Table

| Invoice # | Student | Amount | Date | Due Date | Status | Actions |
|-----------|---------|--------|------|----------|--------|---------|
| 1045 | Emma Wilson | $120 | Jan 6 | Jan 13 | Pending | View, Send Reminder |
| 1044 | Sophie Chen | $60 | Jan 1 | Jan 8 | Overdue | View, Send Reminder |
| 1043 | Noah Davis | $120 | Dec 15 | Dec 22 | Overdue | View, Send Reminder |
| 1042 | Jake Miller | $120 | Jan 1 | Jan 8 | Paid | View |
| 1041 | Liam Johnson | $180 | Jan 1 | Jan 8 | Paid | View |
| 1040 | Ava Martinez | $120 | Dec 15 | Dec 22 | Paid | View |

## Create Invoice Modal

Fields:
- Student (dropdown)
- Lessons to include (checkboxes of unbilled lessons)
- Additional items (line items with description and amount)
- Due date
- Notes
- Send automatically (checkbox)

## Invoice Detail View

- Invoice number and date
- Student billing info
- Line items (lessons + any additional charges)
- Subtotal, tax (if applicable), total
- Payment status and history
- Actions: Send Reminder, Mark as Paid, Void, Download PDF
