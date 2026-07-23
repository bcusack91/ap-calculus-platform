/**
 * Flashcard repair + dedup, driven by the audit (scripts/audit-flashcards.ts).
 *
 * 1. CONTENT FIXES — hand-authored replacements for every card the audit
 *    found broken (truncated content, currency `$` colliding with math mode,
 *    prose the auto-formatter mangles into math, KaTeX-invalid segments).
 *    Keyed on EXACT current front/back text (not ids), so the same script
 *    fixes prod and local identically and hits every duplicated copy.
 * 2. DEDUP — collapse cards that share identical (topicId, front, back):
 *    keep the oldest, re-point FlashcardProgress rows (skipping user
 *    conflicts), delete the rest.
 *
 * Usage:
 *   npx tsx scripts/fix-flashcards.ts                 # dry run on local
 *   FIX_DB=prod npx tsx scripts/fix-flashcards.ts     # dry run on prod
 *   FIX_DB=prod APPLY=1 npx tsx scripts/fix-flashcards.ts   # apply to prod
 */
import path from 'path'
import dotenv from 'dotenv'

const target = process.env.FIX_DB === 'prod' ? '.env' : '.env.local'
dotenv.config({ path: path.join(process.cwd(), target), override: true })

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const APPLY = process.env.APPLY === '1'

interface Fix {
  matchFront: string
  matchBack: string
  newFront?: string
  newBack?: string
  why: string
}

const FIXES: Fix[] = [
  // ---- Truncated / corrupted cards (rewritten) ----
  {
    matchFront: 'What is Example?',
    matchBack: 'ATP hydrolysis ($\\Delta G° = -30.',
    newFront: 'Give an example of a thermodynamically favorable process and its ΔG°.',
    newBack: "ATP hydrolysis: $\\Delta G^\\circ \\approx -30.5\\ \\text{kJ/mol}$ — spontaneous under standard conditions, which is why cells couple it to unfavorable reactions.",
    why: 'card was truncated mid-sentence with a placeholder front',
  },
  {
    matchFront: 'What is 10%?',
    matchBack: 'Both $n_1 < 0.',
    newFront: 'What is the 10% condition for two-sample t procedures?',
    newBack: 'Each sample should be less than 10% of its population: $n_1 \\le 0.10N_1$ and $n_2 \\le 0.10N_2$. Needed so independence approximately holds when sampling without replacement.',
    why: 'card was truncated mid-sentence with a placeholder front',
  },
  // ---- Prose the auto-formatter mangles into math (explicit LaTeX added) ----
  {
    matchFront: 'If f(3) = 7, what is 2f(3)?',
    matchBack: "2 × 7 = 14 (multiply the output by 2, don't evaluate f(6)!)",
    newBack: "$2 \\times 7 = 14$ — multiply the output by 2 (don't evaluate $f(6)$!)",
    why: 'auto-formatter wrapped the whole sentence in math, then currency-escape broke the delimiters',
  },
  {
    matchFront: 'Quick test: Is 9 prime or composite?',
    matchBack: 'Composite. 9 = 3 × 3, so it has factors 1, 3, and 9.',
    newBack: 'Composite. $9 = 3 \\times 3$, so it has factors 1, 3, and 9.',
    why: 'auto-formatter mangled the sentence',
  },
  {
    matchFront: 'How do you calculate expected counts in a two-way table?',
    matchBack: 'Expected count = (row total × column total) / grand total\n\nCalculate for each cell in the table.',
    newBack: '$\\text{Expected} = \\dfrac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}$\n\nCalculate for each cell in the table.',
    why: 'auto-formatter swallowed both lines into one math span',
  },
  {
    matchFront: 'What are the units of force?',
    matchBack: 'Newton (N), where $1 \\text{ N} = 1 \\text{ kg·m/s}^2$',
    newBack: 'Newton (N): $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m/s}^2$',
    why: 'the "·" character inside \\text{} is not a KaTeX-supported text-mode char',
  },
  // ---- Physics/Bio/Chem unicode-notation cards (explicit LaTeX) ----
  {
    matchFront: 'What is the permittivity of free space?',
    matchBack: 'ε₀ = 8.85×10⁻¹² C²/(N·m²). Related to Coulomb constant by k = 1/(4πε₀) = 8.99×10⁹ N·m²/C². Appears in electric field equations.',
    newBack: '$\\varepsilon_0 = 8.85\\times 10^{-12}\\ \\text{C}^2/(\\text{N}\\cdot\\text{m}^2)$. Related to the Coulomb constant by $k = \\dfrac{1}{4\\pi\\varepsilon_0} = 8.99\\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$. Appears in electric field equations.',
    why: 'unicode superscripts mangled by the formatter into invalid KaTeX',
  },
  {
    matchFront: 'What did Maxwell add to electromagnetic theory?',
    matchBack: 'Changing electric field creates magnetic field (just as changing B creates E). Led to electromagnetic waves! Speed: c = 1/√(μ₀ε₀) = 3×10⁸ m/s emerges from E&M constants!',
    newBack: 'Changing electric field creates magnetic field (just as changing B creates E). Led to electromagnetic waves! Speed: $c = \\dfrac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3\\times 10^{8}\\ \\text{m/s}$ emerges from E&M constants!',
    why: 'auto-wrapped segment contained "&" (KaTeX column separator) and unicode superscripts',
  },
  {
    matchFront: 'Give the formula for photon energy.',
    matchBack: "E = hf = hc/λ, where h = 6.626×10⁻³⁴ J·s (Planck's constant). Higher frequency → higher energy. Gamma rays: high E. Radio: low E.",
    newBack: "$E = hf = \\dfrac{hc}{\\lambda}$, where $h = 6.626\\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$ (Planck's constant). Higher frequency → higher energy. Gamma rays: high E. Radio: low E.",
    why: 'unicode superscripts mangled into invalid KaTeX',
  },
  {
    matchFront: 'Calculate pH when [H⁺] = 1 × 10⁻³ M',
    matchBack: 'pH = -log[H⁺] = -log(10⁻³) = 3. This is acidic (pH < 7).',
    newFront: 'Calculate pH when $[\\text{H}^+] = 1 \\times 10^{-3}\\ \\text{M}$',
    newBack: '$\\text{pH} = -\\log[\\text{H}^+] = -\\log(10^{-3}) = 3$. This is acidic (pH < 7).',
    why: 'unicode superscripts mangled into invalid KaTeX',
  },
  {
    matchFront: 'Zero-order decay: time to drop from 0.40 M to 0.10 M with k = 1.0×10⁻³ M·s⁻¹?',
    matchBack: 'Use [A]_t = [A]_0 − kt. t = ([A]_0 − [A]_t)/k = (0.40 − 0.10)/(1.0×10⁻³) = 300 s.',
    newFront: 'Zero-order decay: time to drop from 0.40 M to 0.10 M with $k = 1.0\\times 10^{-3}\\ \\text{M/s}$?',
    newBack: 'Use $[A]_t = [A]_0 - kt$. So $t = \\dfrac{[A]_0 - [A]_t}{k} = \\dfrac{0.40 - 0.10}{1.0\\times 10^{-3}} = 300\\ \\text{s}$.',
    why: 'bracket/subscript notation mangled by the auto-formatter',
  },
  // ---- Organic chemistry rate-law bullets (explicit math protects bullets) ----
  {
    matchFront: 'SN2 reaction characteristics?',
    matchBack: '- **One step** (concerted): backside attack\n- Rate = k[substrate][nucleophile] (bimolecular)\n- **Inversion** of stereochemistry (Walden inversion)\n- Favored by: **1° substrates**, strong nucleophiles, polar **aprotic** solvents\n- Steric hindrance slows it down',
    newBack: '- **One step** (concerted): backside attack\n- Rate: $k[\\text{substrate}][\\text{nucleophile}]$ (bimolecular)\n- **Inversion** of stereochemistry (Walden inversion)\n- Favored by: **1° substrates**, strong nucleophiles, polar **aprotic** solvents\n- Steric hindrance slows it down',
    why: 'auto-formatter wrapped bullet prose into math',
  },
  {
    matchFront: 'SN1 reaction characteristics?',
    matchBack: '- **Two steps**: carbocation intermediate forms first\n- Rate = k[substrate] (unimolecular)\n- **Racemization** (mix of retention and inversion)\n- Favored by: **3° substrates**, weak nucleophiles, polar **protic** solvents\n- Carbocation stability matters',
    newBack: '- **Two steps**: carbocation intermediate forms first\n- Rate: $k[\\text{substrate}]$ (unimolecular)\n- **Racemization** (mix of retention and inversion)\n- Favored by: **3° substrates**, weak nucleophiles, polar **protic** solvents\n- Carbocation stability matters',
    why: 'auto-formatter wrapped bullet prose into math',
  },
  {
    matchFront: 'E2 reaction characteristics?',
    matchBack: '- **One step**: strong base abstracts β-hydrogen, leaving group departs simultaneously\n- Rate = k[substrate][base] (bimolecular)\n- Requires **anti-periplanar** geometry (H and LG 180° apart)\n- Zaitsev product usually favored (more substituted alkene)',
    newBack: '- **One step**: strong base abstracts β-hydrogen, leaving group departs simultaneously\n- Rate: $k[\\text{substrate}][\\text{base}]$ (bimolecular)\n- Requires **anti-periplanar** geometry (H and LG 180° apart)\n- Zaitsev product usually favored (more substituted alkene)',
    why: 'auto-formatter wrapped bullet prose into math',
  },
  {
    matchFront: 'E1 reaction characteristics?',
    matchBack: '- **Two steps**: leaving group departs first → carbocation, then base removes H\n- Rate = k[substrate] (unimolecular)\n- Favors **3° substrates** (stable carbocations)\n- Zaitsev product favored\n- Competes with SN1',
    newBack: '- **Two steps**: leaving group departs first → carbocation, then base removes H\n- Rate: $k[\\text{substrate}]$ (unimolecular)\n- Favors **3° substrates** (stable carbocations)\n- Zaitsev product favored\n- Competes with SN1',
    why: 'auto-formatter wrapped bullet prose into math',
  },
  // ---- Currency dollars that collide with math-mode pairing (escape as \$) ----
  {
    matchFront: 'What is a unit rate?',
    matchBack: 'A rate with a denominator of 1. For example, 60 miles per 1 hour or $3 per 1 pound.',
    newBack: 'A rate with a denominator of 1. For example, 60 miles per 1 hour or \\$3 per 1 pound.',
    why: 'lone currency $ leaves an odd delimiter count',
  },
  {
    matchFront: 'What is a rate?',
    matchBack: 'A ratio that compares two different UNITS. Example: 60 miles per hour, $5 per pound',
    newBack: 'A ratio that compares two different UNITS. Example: 60 miles per hour, \\$5 per pound',
    why: 'lone currency $ leaves an odd delimiter count',
  },
  {
    matchFront: 'What is a unit price?',
    matchBack: 'The cost per ONE item or unit. Example: If 4 pencils cost $2, the unit price is $2 ÷ 4 = $0.50 per pencil',
    newBack: 'The cost per ONE item or unit. Example: If 4 pencils cost \\$2, the unit price is \\$2 ÷ 4 = \\$0.50 per pencil',
    why: 'three currency $ pair up as math and swallow the sentence',
  },
  {
    matchFront: 'What is a tip/gratuity?',
    matchBack: 'A percent of the bill you add for service. Common: 15-20%. Calculate: multiply bill by percent. Example: 15% tip on $40 = 0.15 × $40 = $6',
    newBack: 'A percent of the bill you add for service. Common: 15-20%. Calculate: multiply bill by percent. Example: 15% tip on \\$40 = 0.15 × \\$40 = \\$6',
    why: 'three currency $ pair up as math and swallow the sentence',
  },
  {
    matchFront: 'How do you find the total amount after earning interest?',
    matchBack: 'Total Amount = Principal + Interest\n\nOr: A = P + I\n\nExample: $1,000 principal + $60 interest = $1,060 total',
    newBack: 'Total Amount = Principal + Interest\n\nOr: $A = P + I$\n\nExample: \\$1,000 principal + \\$60 interest = \\$1,060 total',
    why: 'three currency $ pair up as math and swallow the sentence',
  },
  {
    matchFront: 'Remittances',
    matchBack: 'Money migrants send home to families. Over $620 billion/year to low- and middle-income countries — far more than foreign aid. Exceeds 20–30% of GDP in Tonga, Tajikistan, Lebanon, Nepal.',
    newBack: 'Money migrants send home to families. Over \\$620 billion/year to low- and middle-income countries — far more than foreign aid. Exceeds 20–30% of GDP in Tonga, Tajikistan, Lebanon, Nepal.',
    why: 'lone currency $ leaves an odd delimiter count',
  },
  {
    matchFront: 'What is cognitive dissonance and how is it resolved?',
    matchBack: 'The **mental discomfort** from holding two conflicting cognitions or acting against one\'s beliefs (Festinger).\n\nResolved by **changing the attitude or behavior** to restore consistency (e.g., "I did boring work for $1, so it must have been fun" — justification).',
    newBack: 'The **mental discomfort** from holding two conflicting cognitions or acting against one\'s beliefs (Festinger).\n\nResolved by **changing the attitude or behavior** to restore consistency (e.g., "I did boring work for \\$1, so it must have been fun" — justification).',
    why: 'lone currency $ leaves an odd delimiter count',
  },
]

async function main() {
  const dbLabel = process.env.FIX_DB === 'prod' ? 'PROD' : 'LOCAL'
  console.log(`[${dbLabel}] ${APPLY ? 'APPLYING' : 'DRY RUN'}\n`)

  // ---- 1. Content fixes ----
  let fixed = 0
  for (const fix of FIXES) {
    const matches = await prisma.flashcard.findMany({
      where: { front: fix.matchFront, back: fix.matchBack },
      select: { id: true },
    })
    if (matches.length === 0) { console.log(`  (no match) ${fix.matchFront.slice(0, 60)}`); continue }
    console.log(`  fix ×${matches.length}: ${fix.matchFront.slice(0, 60)} — ${fix.why}`)
    if (APPLY) {
      await prisma.flashcard.updateMany({
        where: { front: fix.matchFront, back: fix.matchBack },
        data: { ...(fix.newFront ? { front: fix.newFront } : {}), ...(fix.newBack ? { back: fix.newBack } : {}) },
      })
    }
    fixed += matches.length
  }
  console.log(`content fixes: ${fixed} cards\n`)

  // ---- 2. Dedup identical (topicId, front, back) ----
  const all = await prisma.flashcard.findMany({
    select: { id: true, topicId: true, front: true, back: true, createdAt: true },
    orderBy: { createdAt: 'asc' },
  })
  const groups = new Map<string, typeof all>()
  for (const c of all) {
    const key = `${c.topicId}::${c.front.trim()}::${c.back.trim()}`
    const g = groups.get(key) ?? []
    g.push(c)
    groups.set(key, g)
  }
  let deleted = 0
  let repointed = 0
  for (const g of groups.values()) {
    if (g.length < 2) continue
    const [keep, ...losers] = g // oldest first (orderBy createdAt asc)
    for (const loser of losers) {
      const progress = await prisma.flashcardProgress.findMany({ where: { flashcardId: loser.id }, select: { id: true, userId: true } })
      for (const pr of progress) {
        const conflict = await prisma.flashcardProgress.findUnique({
          where: { userId_flashcardId: { userId: pr.userId, flashcardId: keep.id } }, select: { id: true },
        })
        if (conflict) continue // user already has progress on the kept card; cascade delete handles this row
        if (APPLY) await prisma.flashcardProgress.update({ where: { id: pr.id }, data: { flashcardId: keep.id } })
        repointed++
      }
      if (APPLY) await prisma.flashcard.delete({ where: { id: loser.id } })
      deleted++
    }
  }
  console.log(`dedup: ${deleted} duplicate cards ${APPLY ? 'deleted' : 'would be deleted'}, ${repointed} progress rows ${APPLY ? 'repointed' : 'would repoint'}`)

  await prisma.$disconnect()
}

main().catch((e) => { console.error(e); process.exit(1) })
