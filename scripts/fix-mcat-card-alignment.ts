/**
 * MCAT audit F2: de-duplicate / re-home flashcards across sibling topics.
 * - functional-groups: delete 4 cards duplicating carbonyls; move 4 carbonyl-
 *   family mechanism cards to carbonyls; move the leaving-group card to
 *   sn1-sn2-e1-e2; add 3 survey-level replacements.
 * - organelles: delete 7 cards duplicating membrane-transport/cell-cycle;
 *   add 2 organelle-proper cards.
 * Deletions cascade FlashcardProgress (the concept survives on the sibling
 * topic's card). Idempotent by front-text matching.
 *   PROD=1 npx tsx scripts/fix-mcat-card-alignment.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

const DELETE: [string, string][] = [
  ['mcat-organic-chemistry-functional-groups-mcat', 'Compare nucleophilic addition to aldehydes vs. ketones.'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'What is the alpha-carbon, and why is it acidic?'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'Describe the aldol condensation product.'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'Distinguish keto-enol tautomers.'],
  ['mcat-cell-biology-organelles-mcat', 'Compare simple diffusion, facilitated diffusion, and active transport.'],
  ['mcat-cell-biology-organelles-mcat', 'How does the Na⁺/K⁺-ATPase pump work?'],
  ['mcat-cell-biology-organelles-mcat', 'Define tonicity: hypertonic, hypotonic, isotonic.'],
  ['mcat-cell-biology-organelles-mcat', 'Distinguish endocytosis from exocytosis.'],
  ['mcat-cell-biology-organelles-mcat', 'What are the phases of the cell cycle?'],
  ['mcat-cell-biology-organelles-mcat', 'What is checked at the G₂/M and spindle (M) checkpoints?'],
  ['mcat-cell-biology-organelles-mcat', 'How do cyclins and CDKs drive the cell cycle?'],
]
const MOVE: [string, string, string][] = [
  ['mcat-organic-chemistry-functional-groups-mcat', 'What is the product when a hemiacetal/hemiketal forms', 'mcat-organic-chemistry-carbonyls-mcat'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'What is the Fischer esterification reaction?', 'mcat-organic-chemistry-carbonyls-mcat'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'What is a Michael addition (1,4-conjugate addition)?', 'mcat-organic-chemistry-carbonyls-mcat'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'Rank reactivity of carboxylic acid derivatives', 'mcat-organic-chemistry-carbonyls-mcat'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'What distinguishes a good leaving group', 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat'],
]
const ADD: [string, string, string][] = [
  ['mcat-organic-chemistry-functional-groups-mcat', 'How do you tell an ester, an ether, and an anhydride apart by structure?',
   'Ester: $R-CO-O-R\'$ (carbonyl + O in chain). Ether: $R-O-R\'$ (no carbonyl). Anhydride: two carbonyls flanking one oxygen ($R-CO-O-CO-R\'$).'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'Rank the acidity of common functional groups (most to least acidic).',
   'Carboxylic acid ($pK_a \\approx 4$) > phenol ($\\approx 10$) > water/alcohol ($\\approx 15{-}16$) > terminal alkyne ($\\approx 25$) > amine N-H ($\\approx 38$). Resonance stabilization of the conjugate base drives the ranking.'],
  ['mcat-organic-chemistry-functional-groups-mcat', 'Which functional groups can hydrogen-bond, and how does that show up in boiling points?',
   'O-H and N-H groups (alcohols, carboxylic acids, amines, amides) donate H-bonds — highest boiling points. Carbonyls and ethers only ACCEPT H-bonds (intermediate). Alkanes/alkenes cannot H-bond (lowest).'],
  ['mcat-cell-biology-organelles-mcat', 'Trace a secreted protein from synthesis to release (which organelles, in order).',
   'Rough ER (synthesis + folding) → vesicle → Golgi cis face (modification, e.g. glycosylation) → Golgi trans face (sorting) → secretory vesicle → plasma membrane (exocytosis).'],
  ['mcat-cell-biology-organelles-mcat', 'What does the nucleolus do, and what accumulates there?',
   'It is the site of rRNA transcription and ribosomal subunit assembly — a dense, non-membrane-bound region of the nucleus rich in rRNA and ribosomal proteins.'],
]

async function main() {
  const prisma = new PrismaClient()
  for (const [topicSlug, frontPrefix] of DELETE) {
    const card = await prisma.flashcard.findFirst({ where: { topic: { slug: topicSlug }, front: { startsWith: frontPrefix.slice(0, 40) } }, select: { id: true, front: true } })
    if (card) { await prisma.flashcard.delete({ where: { id: card.id } }); console.log('deleted:', card.front.slice(0, 60)) }
    else console.log('already gone:', frontPrefix.slice(0, 50))
  }
  for (const [fromSlug, frontPrefix, toSlug] of MOVE) {
    const card = await prisma.flashcard.findFirst({ where: { topic: { slug: fromSlug }, front: { startsWith: frontPrefix.slice(0, 40) } }, select: { id: true, front: true } })
    const to = await prisma.topic.findUnique({ where: { slug: toSlug }, select: { id: true } })
    if (card && to) { await prisma.flashcard.update({ where: { id: card.id }, data: { topicId: to.id } }); console.log('moved ->', toSlug.split('-').slice(-2)[0], '|', card.front.slice(0, 55)) }
    else console.log('already moved:', frontPrefix.slice(0, 50))
  }
  for (const [topicSlug, front, back] of ADD) {
    const t = await prisma.topic.findUnique({ where: { slug: topicSlug }, select: { id: true, flashcards: { select: { front: true } } } })
    if (!t) continue
    if (t.flashcards.some(c => c.front === front)) { console.log('already added:', front.slice(0, 50)); continue }
    await prisma.flashcard.create({ data: { topicId: t.id, front, back, isPremium: false } })
    console.log('added:', front.slice(0, 60))
  }
  for (const slug of ['mcat-organic-chemistry-functional-groups-mcat', 'mcat-organic-chemistry-carbonyls-mcat', 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat', 'mcat-cell-biology-organelles-mcat']) {
    const n = await prisma.flashcard.count({ where: { topic: { slug } } })
    console.log(`final count ${slug.split('mcat-')[1]}: ${n}`)
  }
  await prisma.$disconnect()
}
main()
