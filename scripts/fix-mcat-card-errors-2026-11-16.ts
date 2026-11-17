/**
 * Corrections to MCAT flashcards found while writing the card-check questions
 * (owner approved 2026-11-16). Each fix names the card by id and by its
 * current text, so a rerun or a card that has changed is skipped, not
 * clobbered. Updates the live card, the repo's exports and yield artifacts
 * (which fingerprint front + back), and saves the old text to a backup file.
 *
 *   SEED_DB=prod npx tsx scripts/fix-mcat-card-errors-2026-11-16.ts           # dry run
 *   SEED_DB=prod APPLY=1 npx tsx scripts/fix-mcat-card-errors-2026-11-16.ts
 */
import { config } from 'dotenv'
config({ path: process.env.SEED_DB === 'prod' ? '.env' : '.env.local', override: true })
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'
import { fingerprint } from '../src/lib/flashcard-yield-artifact'

type Fix = { id: string; why: string; front?: [string, string]; back?: [string, string] }
const r = String.raw

const FIXES: Fix[] = [
  {
    id: 'cmsyuacuo00gx0fxuupkx6myj',
    why: 'the shortcut overestimates dissociation, so the true pH is higher, not lower',
    back: [
      r`The quadratic is then needed and the true pH is lower than the shortcut predicts.`,
      r`The quadratic is then needed, and because the shortcut overestimates how much acid dissociates, the true pH is slightly higher than the shortcut predicts.`,
    ],
  },
  {
    id: 'cmsyupvyb00290fwzj25yz9nn',
    why: 'zero-order clearance removes a fixed amount per hour, so twice the dose takes twice as long, not more',
    back: [
      r`Doubling the dose more than doubles the sobering time, which is why overdose escalates so sharply.`,
      r`Doubling the dose doubles the sobering time, whereas for a first-order drug it would add only one half-life; that is why large amounts take so long to clear.`,
    ],
  },
  {
    id: 'cmsxxzksm004j0fo8hmphlfyb',
    why: 'two first-law cards used opposite sign conventions without saying so',
    back: [
      r`**$\Delta U = q - w$; energy is conserved**` + '\n\n' + r`Energy changes form but is neither created nor destroyed.`,
      r`**$\Delta U = q - w$, with $w$ the work done BY the system; energy is conserved**` + '\n\n' + r`Energy changes form but is neither created nor destroyed. Chemistry texts often write $\Delta U = q + w$ with $w$ the work done ON the system: the same law with the sign of $w$ flipped.`,
    ],
  },
  {
    id: 'cmstdfeoq00cz0f3hl31mks10',
    why: '30-32 is the whole-glucose total; oxidative phosphorylation itself gives about 26-28',
    back: [
      r`**30-32**` + '\n\n' + r`Oxidative phosphorylation (ETC + ATP synthase) using NADH and $FADH_{2}$ from glycolysis, pyruvate dehydrogenase, and the TCA cycle produces ~30-32 ATP per glucose (including substrate-level phosphorylation).`,
      r`**About 26-28**` + '\n\n' + r`Complete oxidation of glucose yields ~30-32 ATP in all. Four of those come from substrate-level phosphorylation (2 in glycolysis, 2 as GTP in the TCA cycle), so oxidative phosphorylation (ETC + ATP synthase), using the NADH and $FADH_{2}$ from glycolysis, pyruvate dehydrogenase, and the TCA cycle, supplies the other ~26-28.`,
    ],
  },
  {
    id: 'cmsyuaosq00b50f00k45inj6e',
    why: '32 ATP at 50 kJ/mol is over half of 2870, not one-third; one-third is the standard-state figure',
    back: [
      r`Thirty to thirty-two ATP at roughly 50 kJ/mol under cellular conditions accounts for the captured share; the remainder leaves as heat. That efficiency still beats a typical heat engine.`,
      r`Thirty to thirty-two ATP at the standard 30.5 kJ/mol is about 950 kJ, roughly one-third of 2870; the remainder leaves as heat. Under cellular conditions each ATP is worth nearer 50 kJ/mol, so the real efficiency is higher still, and either figure beats a typical heat engine.`,
    ],
  },
  {
    id: 'cmsyudvcj002i0fjorno45ka6',
    why: '2 m into 6 micrometers is about 330,000-fold; 10,000-fold is the compaction of one mitotic chromosome',
    front: [
      r`About 2 meters of DNA fits in a nucleus 6 micrometers across, a compaction near {{c1::10,000}}-fold achieved by histones and higher-order folding.`,
      r`A chromosome's DNA, centimeters long, packs into a mitotic chromosome micrometers long, a compaction near {{c1::10,000}}-fold achieved by histones and higher-order folding.`,
    ],
  },
  {
    id: 'cmsytm0ra00oj0f2s3dr5mw83',
    why: 'wording slip',
    back: [r`Pol alpha lacks proofreading and low processivity, so`, r`Pol alpha lacks proofreading and has low processivity, so`],
  },
  {
    id: 'cmsytm08b00ic0f2sinkrv1yq',
    why: 'odd example',
    back: [r`(milk yield, unicorn-antler analogs)`, r`(milk yield, beard growth)`],
  },
]

/** Rewrite matching { front, back?, fp? } entries in the repo's card artifacts. */
function patchArtifacts(oldFront: string, oldBack: string, newFront: string, newBack: string, apply: boolean): string[] {
  const touched: string[] = []
  const oldFp = fingerprint(oldFront, oldBack)
  const newFp = fingerprint(newFront, newBack)
  const walk = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(join(dir, d.name)) : d.name.endsWith('.json') ? [join(dir, d.name)] : []))
  for (const file of [...walk('prisma/flashcard-yield'), ...walk('prisma/flashcard-exports')]) {
    const raw = readFileSync(file, 'utf8')
    if (!raw.includes(JSON.stringify(oldFront).slice(1, 40))) continue
    const data = JSON.parse(raw)
    let hit = false
    const visit = (node: unknown): void => {
      if (Array.isArray(node)) return node.forEach(visit)
      if (!node || typeof node !== 'object') return
      const o = node as Record<string, unknown>
      if (o.front === oldFront && (o.back === undefined || o.back === oldBack) && (o.fp === undefined || o.fp === oldFp)) {
        o.front = newFront
        if (o.back !== undefined) o.back = newBack
        if (o.fp !== undefined) o.fp = newFp
        hit = true
      }
      Object.values(o).forEach(visit)
    }
    visit(data)
    if (hit) {
      touched.push(file)
      if (apply) writeFileSync(file, JSON.stringify(data, null, raw.startsWith('[\n {') || raw.startsWith('{\n "') ? 1 : 2) + (raw.endsWith('\n') ? '\n' : ''))
    }
  }
  return touched
}

async function main() {
  const APPLY = process.env.APPLY === '1'
  const host = new URL(process.env.DATABASE_URL!).hostname
  if ((process.env.SEED_DB === 'prod') !== host.endsWith('neon.tech')) throw new Error(`SEED_DB=${process.env.SEED_DB ?? ''} but DATABASE_URL host is ${host}`)
  console.log('DB:', host, '| mode:', APPLY ? 'APPLY' : 'dry run')
  const prisma = new PrismaClient()
  const backup: unknown[] = []
  for (const fix of FIXES) {
    const card = await prisma.flashcard.findUnique({ where: { id: fix.id }, select: { id: true, front: true, back: true } })
    if (!card) { console.log(`SKIP ${fix.id}: card not found`); continue }
    const newFront = fix.front ? card.front.replace(fix.front[0], fix.front[1]) : card.front
    const newBack = fix.back ? card.back.replace(fix.back[0], fix.back[1]) : card.back
    if (newFront === card.front && newBack === card.back) { console.log(`SKIP ${fix.id}: text no longer matches (already fixed or changed): ${card.front.slice(0, 60)}`); continue }
    const files = patchArtifacts(card.front, card.back, newFront, newBack, APPLY)
    console.log(`${APPLY ? 'FIX ' : 'WOULD FIX'} ${card.front.slice(0, 70)}\n     why: ${fix.why}\n     repo files: ${files.length ? files.join(', ') : '(none)'}`)
    backup.push(card)
    if (APPLY) await prisma.flashcard.update({ where: { id: fix.id }, data: { front: newFront, back: newBack } })
  }
  if (APPLY && backup.length) {
    const file = `scripts/_card-fix-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    writeFileSync(file, JSON.stringify(backup, null, 1))
    console.log('old text saved to', file)
  }
  await prisma.$disconnect()
}
main().catch((e) => { console.error(e); process.exit(1) })
