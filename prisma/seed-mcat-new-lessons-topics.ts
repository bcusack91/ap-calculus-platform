import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
/**
 * DB Topic records for the NEW Tier-4 MCAT lesson suites (lab methods, social
 * psychology, biological basis of behavior). Idempotent upsert by slug.
 *   npx tsx prisma/seed-mcat-new-lessons-topics.ts            # local
 *   NODE_ENV=production npx tsx prisma/seed-mcat-new-lessons-topics.ts  # prod
 */
const prisma = new PrismaClient()
const TOPICS = [
  // Split in two by lesson part (Nov 2026; src/lib/mcat-topic-split.ts MCAT_PART_SPLITS).
  { slug: 'mcat-lab-methods-mcat', title: 'Lab Methods: Separations & Electrophoresis', cat: 'mcat-chem-phys-foundations',
    description: 'Chromatography and R_f, extraction, distillation, recrystallization, and electrophoresis: SDS-PAGE, native gels, isoelectric focusing and 2D gels',
    textContent: '# Lab Methods: Separations & Electrophoresis\n\n## Chromatography and Purification\nEvery chromatography method partitions a mixture between a stationary and a mobile phase: the more a compound binds the stationary phase, the slower it moves. On normal-phase silica TLC, polar compounds travel least, and $R_f$ = spot distance / solvent-front distance. Size-exclusion elutes large molecules first, ion exchange binds opposite charge, and affinity columns bind one specific ligand. Extraction moves a compound between immiscible layers by changing its charge with pH; distillation separates by boiling point, and recrystallization by solubility versus temperature.\n\n## Electrophoresis\nMigration scales with $qE/f$: charge and field speed a molecule, size and a dense gel slow it. SDS-PAGE coats proteins in uniform negative charge, so it sorts by size alone, and DNA always runs to the anode. Above its pI a protein is net negative; isoelectric focusing stops each protein where pH = pI, and a 2D gel adds SDS-PAGE to separate by pI and size.\n\n## Key Takeaways\n- A lower band traveled farther, so it is the smaller molecule.\n- Use bicarbonate for a carboxylic acid and NaOH for a phenol; acid pulls out an amine.\n- Two 2D-gel spots at one height share a size but differ in pI.' },
  { slug: 'mcat-lab-methods-spectroscopy-assays-mcat', title: 'Lab Methods: Centrifugation, Spectroscopy & Assays', cat: 'mcat-chem-phys-foundations',
    description: 'Centrifugation and Svedberg units, UV-Vis, IR, NMR and mass spectrometry, Beer\'s law, and the blots, PCR and ELISA',
    textContent: '# Lab Methods: Centrifugation, Spectroscopy & Assays\n\n## Centrifugation and Spectroscopy\nLarger and denser particles sediment faster. Differential centrifugation pellets nuclei, then mitochondria, then microsomes, then ribosomes as speed rises; an isopycnic gradient bands each particle at its own density. Report force in $\\times g$, since RCF grows with rotor radius and RPM squared. UV-Vis reads electronic transitions and conjugation, IR finds functional groups (C=O near 1700 cm$^{-1}$), NMR maps H environments, and mass spectrometry gives molecular weight. Beer\'s law, $A = \\varepsilon l c$, turns absorbance into concentration.\n\n## Molecular Assays\nSouthern blots detect DNA, Northern blots RNA, and Western blots protein. PCR doubles the target each denature-anneal-extend cycle, so copies $= N_0 \\times 2^n$; RT-PCR starts from RNA. A sandwich ELISA reads antigen amount as color, quantified against a standard curve.\n\n## Key Takeaways\n- Svedberg values are not additive: 50S + 30S makes a 70S ribosome.\n- Beyond about $A = 1$ the Beer\'s-law line bends; dilute and remeasure.\n- Measure mRNA with RT-qPCR or a Northern blot, protein with a Western or ELISA.' },
  { slug: 'mcat-social-psychology-mcat', title: 'Social Psychology', cat: 'mcat-psych-soc-foundations',
    description: 'Attitudes and cognitive dissonance, attribution theory, conformity and obedience, prejudice, and group dynamics — high-yield Psych/Soc content.',
    textContent: '# Social Psychology\n\nSocial psychology is one of the highest-yield areas of the Psych/Soc section. This lesson covers **attitudes and cognitive dissonance** (and how attitudes predict behavior), **attribution theory** (dispositional vs. situational, the fundamental attribution error, actor–observer and self-serving biases), **conformity, compliance, and obedience** (Asch, Milgram, and the techniques of social influence), **prejudice and discrimination** (stereotypes, in-group/out-group bias, and their reduction), and **group dynamics** (social facilitation, social loafing, groupthink, deindividuation, and prosocial vs. aggressive behavior). The interactive lesson grounds each concept in the classic studies the MCAT references.' },
  { slug: 'mcat-biological-basis-behavior-mcat', title: 'Biological Basis of Behavior', cat: 'mcat-psych-soc-foundations',
    description: 'Neurons and action potentials, neurotransmitters, brain regions, the endocrine system and HPA stress axis, and behavioral genetics — the biology behind behavior.',
    textContent: '# Biological Basis of Behavior\n\nBehavior is rooted in biology, and the MCAT expects you to connect the two. This lesson covers the **neuron and the action potential** (resting potential, depolarization, the all-or-none principle, saltatory conduction), the **synapse and neurotransmitters** (acetylcholine, dopamine, serotonin, GABA, glutamate, norepinephrine — and their behavioral roles), **brain regions** (the limbic system, cortical lobes, and the methods used to study them), the **endocrine system and the HPA stress axis** (cortisol, the fight-or-flight response, and feedback regulation), and **nervous-system organization and behavioral genetics**. The interactive lesson links each structure to the behavior it drives.' },
]
async function main(){
  let created=0, updated=0
  for(const t of TOPICS){
    const cat = await prisma.category.findUnique({ where:{ slug:t.cat } })
    if(!cat) throw new Error('Category not found: '+t.cat)
    const maxOrder = await prisma.topic.aggregate({ where:{ categoryId:cat.id }, _max:{ order:true } })
    const existing = await prisma.topic.findUnique({ where:{ slug:t.slug }, select:{id:true} })
    await prisma.topic.upsert({
      where:{ slug:t.slug },
      create:{ slug:t.slug, title:t.title, description:t.description, textContent:t.textContent, categoryId:cat.id, order:(maxOrder._max.order??0)+1 },
      update:{ title:t.title, description:t.description, textContent:t.textContent },
    })
    existing?updated++:created++
  }
  console.log(`MCAT new-lesson topics — created: ${created}, updated: ${updated}`)
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())
