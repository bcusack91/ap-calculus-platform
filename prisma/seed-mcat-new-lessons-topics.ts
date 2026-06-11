import '../src/lib/load-env'
import { PrismaClient } from '@prisma/client'
/**
 * DB Topic records for the 3 NEW Tier-4 MCAT lesson suites (lab methods, social
 * psychology, biological basis of behavior). Idempotent upsert by slug.
 *   npx tsx prisma/seed-mcat-new-lessons-topics.ts            # local
 *   NODE_ENV=production npx tsx prisma/seed-mcat-new-lessons-topics.ts  # prod
 */
const prisma = new PrismaClient()
const TOPICS = [
  { slug: 'mcat-lab-methods-mcat', title: 'Laboratory Methods & Separations', cat: 'mcat-chem-phys-foundations',
    description: 'Chromatography, electrophoresis, centrifugation, and spectroscopy (Beer’s law) — the lab techniques the MCAT tests across the science sections.',
    textContent: '# Laboratory Methods & Separations\n\nThe MCAT tests laboratory techniques heavily because they underpin the experimental passages in every science section. This lesson covers how scientists **separate, quantify, and identify** molecules: chromatography (partitioning by polarity, size, or charge), gel electrophoresis (separating nucleic acids and proteins by size and charge, including SDS-PAGE and isoelectric focusing), centrifugation (sedimentation by density and mass, including density-gradient methods), and spectroscopy (UV-Vis with the Beer–Lambert law $A = \\varepsilon b c$, plus IR, NMR, and mass spec for structure). The interactive lesson works through each method, when to choose it, and how to read its output on a passage.' },
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
