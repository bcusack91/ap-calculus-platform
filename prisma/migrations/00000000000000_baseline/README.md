# Baseline migration

This single migration is a **baseline** generated from the full current
`schema.prisma` (it replaces 11 older, drifted migration directories that were
never tracked in a `_prisma_migrations` table — the database had been managed by
`prisma db push`).

## Applying to a database

### Fresh / empty database
```bash
npx prisma migrate deploy
```
Creates the entire schema from this baseline.

### Existing database that already has the schema (e.g. production, or any DB
### previously built with `prisma db push`)
The tables already exist, so each migration must be **marked as applied** once,
*before* the first `migrate deploy`, or Prisma will try to re-create existing
tables and fail with `P3005`.

Production already contains every table these migrations describe (the new
tables from #12/#19/#10 were applied to prod out-of-band via
`prisma/apply-new-tables-prod.sql`, and `AnalyticsEvent` + the `AdminAlert*`
tables predate this baseline), and a `migrate diff` confirms prod matches
`schema.prisma` with zero drift. So mark **all** current migrations as applied:
```bash
npx prisma migrate resolve --applied 00000000000000_baseline
npx prisma migrate resolve --applied 20260611155804_add_content_item
npx prisma migrate resolve --applied 20260611162335_add_analytics_event
npx prisma migrate resolve --applied 20260611162525_add_admin_alert_tables
npx prisma migrate status   # should report "Database schema is up to date!"
```
These are metadata-only operations — they do **not** touch data or tables.

> Run these against production with the prod `DATABASE_URL`. The repo's
> `prisma.config.ts` loads `.env.local` first, so prod commands need the prod URL
> provided explicitly, e.g. `DATABASE_URL="$PROD_URL" npx prisma migrate resolve …`.

## Going forward
Create new schema changes with `npx prisma migrate dev --name <change>` (writes a
new timestamped migration) and deploy with `npx prisma migrate deploy`. Stop
using `prisma db push` against shared/long-lived databases so history stays
consistent.
