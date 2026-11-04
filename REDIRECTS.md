# xysculpt.com to xysculptmd.com redirect map

Dr. Moein's earlier site, xysculpt.com, folds into xysculptmd.com. His procedure copy and all ten blog posts now live here, so every old URL has a home.

## How to switch it on

The rules are already in `next.config.js` and do nothing until xysculpt.com reaches this deployment:

1. In the Vercel project for xysculptmd.com, add `xysculpt.com` and `www.xysculpt.com` as domains.
2. Point xysculpt.com DNS at Vercel (Dr. Moein controls that domain, so he or his host does this step).
3. Spot-check five URLs below with `curl -I` and confirm a 308 to the right page.
4. In Google Search Console, file a Change of Address from xysculpt.com to xysculptmd.com.

Dr. Moein needs to agree to this before step 2. He built xysculpt.com himself.

## Map

| xysculpt.com path | Goes to on xysculptmd.com |
|---|---|
| `/` | `/` |
| `/procedures` | `/procedures` |
| `/procedures/abdominal-etching` | `/procedures/abdominal-etching` |
| `/procedures/abdominal-enhancement` | `/procedures/abdominal-etching` (AbEtch+ is the same idea) |
| `/procedures/liposuction` | `/procedures/abdominal-etching` |
| `/procedures/body-contouring` | `/procedures` |
| `/procedures/gynecomastia` | `/procedures/gynecomastia` |
| `/procedures/chest-sculpting` | `/procedures/gynecomastia` |
| `/procedures/tummy-tuck` | `/procedures/male-tummy-tuck` |
| `/procedures/diastasis-recti-repair` | `/procedures/male-tummy-tuck` (diastasis section) |
| `/procedures/facial`, `/facelift`, `/chin-augmentation` | `/procedures/male-facial-rejuvenation` |
| `/vitality` | `/` (vitality is out of scope this phase) |
| `/about`, `/gallery`, `/blog`, `/contact` | same path |
| `/consultation` | `/contact` |
| `/financing` | `/#resources` |
| `/reviews` | `/#doctor` |
| `/blog/<slug>` | `/blog/<slug>` (all 10 slugs kept identical) |
| anything else | `/` |

Also handled: `xsculptmd.com` (typo domain) and `www.xysculptmd.com` both 308 to `https://xysculptmd.com` with the path kept.

## Open question

Vitality could instead go to moeinsurgicalarts.com once that site has a matching page. Revisit during the Moein Surgical Arts consolidation.
