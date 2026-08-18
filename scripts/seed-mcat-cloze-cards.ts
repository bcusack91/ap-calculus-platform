/**
 * First cloze-deletion batch (owner request): high-yield MCAT memorization
 * facts in the {{c1::answer}} format the review UI already renders as
 * fill-in-the-blank. Idempotent by front matching.
 *   PROD=1 npx tsx scripts/seed-mcat-cloze-cards.ts
 */
import { config } from 'dotenv'
config({ path: process.env.PROD ? '.env' : '.env.local', override: true })
import { PrismaClient } from '@prisma/client'

const CARDS: [string, string, string][] = [
  // [topicSlug, front (with cloze), back (full statement)]
  ['mcat-biochemistry-amino-acids-proteins-mcat', 'The only achiral amino acid is {{c1::glycine}}, and the amino acid with a secondary amine (imino acid) is {{c2::proline}}.', 'Glycine (achiral, H side chain); proline (cyclic secondary amine that kinks helices).'],
  ['mcat-biochemistry-amino-acids-proteins-mcat', 'The positively charged (basic) amino acids at physiological pH are {{c1::lysine, arginine, and histidine}}.', 'Lysine and arginine are protonated at pH 7.4; histidine (pKa ≈ 6) is the classic buffer near physiological pH.'],
  ['mcat-biochemistry-enzymes-kinetics-mcat', 'A competitive inhibitor {{c1::increases}} Km and {{c2::does not change}} Vmax.', 'Competitive inhibition is overcome by substrate: apparent Km rises, Vmax unchanged.'],
  ['mcat-biochemistry-enzymes-kinetics-mcat', 'A noncompetitive inhibitor {{c1::does not change}} Km and {{c2::decreases}} Vmax.', 'Noncompetitive inhibitors bind away from the active site: Km unchanged, Vmax falls.'],
  ['mcat-biochemistry-bioenergetics-mcat', 'One glucose yields a NET of {{c1::2}} ATP and {{c2::2}} NADH in glycolysis.', 'Glycolysis: 2 ATP net (4 made − 2 invested) + 2 NADH + 2 pyruvate.'],
  ['mcat-biochemistry-carbohydrate-metabolism-mcat', 'The rate-limiting enzyme of glycolysis is {{c1::phosphofructokinase-1 (PFK-1)}}.', 'PFK-1 commits fructose-6-phosphate to glycolysis; activated by AMP and F2,6BP, inhibited by ATP and citrate.'],
  ['mcat-general-chemistry-acid-base-equilibrium-mcat', 'At the half-equivalence point of a weak acid titration, pH = {{c1::pKa}}.', 'Half the acid is deprotonated, so [HA] = [A⁻] and Henderson-Hasselbalch gives pH = pKa.'],
  ['mcat-general-chemistry-thermodynamics-mcat', 'A reaction is spontaneous when ΔG is {{c1::negative}}; at equilibrium ΔG = {{c2::0}}.', 'ΔG < 0 spontaneous, ΔG = 0 at equilibrium, ΔG > 0 non-spontaneous (reverse is spontaneous).'],
  ['mcat-physics-mechanics-kinematics-mcat', 'For projectiles, horizontal velocity is {{c1::constant}}, and vertical acceleration is {{c2::-g (downward)}}.', 'The two motions are independent and share only time t.'],
  ['mcat-physics-mechanics-work-energy-power-mcat', 'Kinetic energy is {{c1::½mv²}} and gravitational potential energy near Earth is {{c2::mgh}}.', 'KE = ½mv²; PE = mgh; the work-energy theorem links net work to ΔKE.'],
  ['mcat-physics-electricity-circuits-mcat', 'In series, {{c1::current}} is the same through all components; in parallel, {{c2::voltage}} is the same across all branches.', 'Series shares current (resistances add); parallel shares voltage (1/R adds).'],
  ['mcat-physics-electricity-optics-mcat', 'A converging lens has {{c1::positive}} focal length; a diverging lens has {{c2::negative}} focal length.', 'Sign conventions: converging (convex) f > 0, diverging (concave) f < 0; 1/f = 1/o + 1/i.'],
  ['mcat-cell-biology-organelles-mcat', 'Proteins destined for secretion are synthesized on the {{c1::rough ER}}, then modified and sorted in the {{c2::Golgi apparatus}}.', 'Rough ER → vesicles → cis Golgi → trans Golgi → secretory vesicles → exocytosis.'],
  ['mcat-molecular-biology-dna-replication-mcat', 'DNA polymerase synthesizes {{c1::5\' to 3\'}}, and the lagging strand is built as {{c2::Okazaki fragments}}.', 'All polymerases extend 3\' ends; the antiparallel lagging strand is made discontinuously and ligated.'],
  ['mcat-molecular-biology-transcription-mcat', 'Eukaryotic mRNA gets a {{c1::5\' cap}}, a {{c2::poly-A tail}}, and has its {{c3::introns}} spliced out.', 'The three classic co-/post-transcriptional modifications before nuclear export.'],
  ['mcat-organ-systems-cardiovascular-mcat', 'Blood pressure is highest in the {{c1::aorta}} and drops most steeply across the {{c2::arterioles}}.', 'Arterioles are the primary resistance vessels and the main site of BP regulation.'],
  ['mcat-organ-systems-renal-mcat', 'The {{c1::proximal tubule}} reabsorbs most filtered solutes, while the {{c2::collecting duct}} fine-tunes water via ADH.', 'PCT: bulk reabsorption (glucose, amino acids, Na⁺); collecting duct: ADH-regulated aquaporins.'],
  ['mcat-organ-systems-endocrine-nervous-mcat', 'The posterior pituitary releases {{c1::ADH and oxytocin}}, which are synthesized in the {{c2::hypothalamus}}.', 'Posterior pituitary stores/releases hypothalamic hormones; the anterior pituitary synthesizes its own six.'],
  ['mcat-genetics-evolution-mendelian-mcat', 'A monohybrid cross of two heterozygotes gives a {{c1::3:1}} phenotypic ratio and a {{c2::1:2:1}} genotypic ratio.', 'Aa × Aa: ¼ AA, ½ Aa, ¼ aa.'],
  ['mcat-genetics-evolution-population-genetics-mcat', 'Hardy-Weinberg: allele frequencies satisfy p + q = {{c1::1}} and genotypes satisfy {{c2::p² + 2pq + q²}} = 1.', 'Requires no selection, no mutation, no migration, random mating, large population.'],
  ['mcat-psychology-behavior-learning-memory-mcat', 'In operant conditioning, {{c1::negative reinforcement}} removes an aversive stimulus to INCREASE a behavior, while {{c2::punishment}} decreases behavior.', 'Reinforcement (positive or negative) always increases behavior; punishment decreases it.'],
  ['mcat-psychology-behavior-sensation-perception-mcat', 'The {{c1::parasympathetic}} nervous system constricts pupils; the {{c2::sympathetic}} system dilates them.', 'Rest-and-digest constricts (miosis); fight-or-flight dilates (mydriasis).'],
  ['mcat-social-psychology-mcat', 'The tendency to attribute others\' behavior to disposition while excusing our own as situational is the {{c1::fundamental attribution error}} (with the {{c2::actor-observer}} asymmetry).', 'FAE: overweighting personality for others; actor-observer bias: situational excuses for ourselves.'],
  ['mcat-sociology-structure-stratification-mcat', 'Weber\'s three components of stratification are {{c1::class, status, and party (power)}}.', 'Economic class, social prestige (status), and political power — distinct, non-reducible hierarchies.'],
]

async function main() {
  const prisma = new PrismaClient()
  let added = 0, skipped = 0, missing = 0
  for (const [slug, front, back] of CARDS) {
    const t = await prisma.topic.findUnique({ where: { slug }, select: { id: true, flashcards: { select: { front: true } } } })
    if (!t) { console.log('NO TOPIC:', slug); missing++; continue }
    if (t.flashcards.some(c => c.front === front)) { skipped++; continue }
    await prisma.flashcard.create({ data: { topicId: t.id, front, back, isPremium: false } })
    added++
  }
  console.log(`cloze cards added: ${added}, skipped: ${skipped}, missing topics: ${missing}`)
  await prisma.$disconnect()
}
main()
