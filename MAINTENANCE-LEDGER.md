# Maintenance Ledger: xysculptmd.com

Things shipped on this site that need ongoing care. Add a row whenever something new ships that someone has to look after.

| Item | Added | What needs care | Cadence | Owner |
|---|---|---|---|---|
| Practice facts in `src/lib/site.ts` | 2026-11-04 | Phone, address, stats (20+ years, 2,000+ male procedures), financing partners. One file drives every page and the schema. Update here only. | When anything changes | P5 |
| Medical review dates | 2026-11-04 | Procedure pages show "Reviewed November 2026". Re-confirm content with Dr. Moein and bump the date. | Every 6 months | P5 + Dr. Moein |
| Procedure pricing | 2026-11-04 | Ab etching from $6,500 ($6,500 to $12,000); gynecomastia from $4,500 ($4,500 to $12,500+). Stale prices are a patient-trust problem. | Quarterly check with the practice | P5 |
| Markdown blog (`content/blog/`) | 2026-11-04 | 10 posts migrated from xysculpt.com. New posts are a new `.md` file plus a deploy. | Per post | P5 / Dr. Moein |
| xysculpt.com redirects (`next.config.js`, `REDIRECTS.md`) | 2026-11-04 | Inert until xysculpt.com points at this Vercel project. After switch-on, watch Search Console for 404s and coverage drops. | Weekly for 6 weeks after switch-on, then monthly | P5 |
| Male butt lift page | 2026-11-04 | Still carries three visible "Draft note" placeholders. Dr. Moein's site had no butt lift page to pull from. Needs his technique, candidacy, and recovery input before launch. | One time, before launch | Dr. Moein |
| GoHighLevel consultation form (`/contact`) | existing | Every "Book Private Consultation" button now routes to `/contact`. If the GHL form breaks, every CTA on the site breaks. | Monthly test submission | P5 |
