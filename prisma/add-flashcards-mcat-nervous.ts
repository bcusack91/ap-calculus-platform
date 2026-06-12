import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding MCAT nervous system & neurotransmitter flashcards...\n');

  const slug = 'mcat-biological-basis-behavior-mcat';
  const topic = await prisma.topic.findFirst({ where: { slug } });
  if (!topic) { console.log(`⚠ Topic not found: ${slug}`); return; }
  await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic.id, front: 'What maintains the resting membrane potential (~ −70 mV)?', back: 'The **Na⁺/K⁺-ATPase** (3 Na⁺ out, 2 K⁺ in) plus **K⁺ leak channels**, which let K⁺ exit down its gradient.\n\nThe inside is **negative** relative to outside. K⁺ permeability dominates at rest, so resting potential is near $E_K$.', hint: 'Resting ≈ −70 mV; Na⁺/K⁺ pump + K⁺ leak. K⁺ dominates at rest.' },
      { topicId: topic.id, front: 'Walk through the phases of an action potential.', back: '1. **Depolarization**: stimulus reaches threshold (~−55 mV) → voltage-gated **Na⁺** channels open → Na⁺ in, membrane → +.\n2. **Repolarization**: Na⁺ channels inactivate, voltage-gated **K⁺** channels open → K⁺ out.\n3. **Hyperpolarization**: K⁺ channels slow to close → overshoot below resting.', hint: 'Na⁺ in (up), K⁺ out (down), brief overshoot. Threshold ~−55 mV.' },
      { topicId: topic.id, front: 'What does "all-or-none" and the refractory period mean for action potentials?', back: '**All-or-none**: once threshold is reached, the AP fires at full amplitude; stronger stimuli increase **frequency**, not size.\n\n**Absolute refractory period**: no new AP possible (Na⁺ channels inactivated) — ensures **unidirectional** propagation.\n**Relative refractory**: a stronger-than-normal stimulus can fire.', hint: 'All-or-none amplitude; refractory period enforces one-way travel.' },
      { topicId: topic.id, front: 'How does myelination speed conduction?', back: '**Saltatory conduction**: myelin (Schwann cells in PNS, oligodendrocytes in CNS) insulates the axon, so the AP "jumps" between **nodes of Ranvier**.\n\nThis dramatically increases conduction velocity. Demyelination (e.g., multiple sclerosis) slows signals.', hint: 'Saltatory = AP jumps node to node. Myelin = faster.' },
      { topicId: topic.id, front: 'Describe synaptic transmission at a chemical synapse.', back: 'AP reaches axon terminal → voltage-gated **$\\text{Ca}^{2+}$** channels open → $\\text{Ca}^{2+}$ influx triggers **vesicle fusion** and neurotransmitter release (exocytosis) → NT crosses cleft, binds postsynaptic receptors.\n\nSignal ends by reuptake, enzymatic degradation, or diffusion.', hint: 'Ca²⁺ entry triggers vesicle release. Cleared by reuptake/enzymes.' },
      { topicId: topic.id, front: 'What is acetylcholine\'s function?', back: 'Excitatory at the **neuromuscular junction** (causes skeletal muscle contraction) and the primary **parasympathetic** neurotransmitter.\n\nDegraded by **acetylcholinesterase**. Low levels are associated with Alzheimer\'s disease.', hint: 'ACh: muscle contraction + parasympathetic "rest and digest." Low in Alzheimer\'s.' },
      { topicId: topic.id, front: 'What are the roles of dopamine and serotonin?', back: '**Dopamine**: reward, motivation, motor control. ↑ linked to schizophrenia; ↓ causes Parkinson\'s disease.\n\n**Serotonin (5-HT)**: mood, sleep, appetite. Low serotonin is linked to **depression** (target of SSRIs).', hint: 'Dopamine = reward/movement (Parkinson\'s if low); serotonin = mood (depression if low).' },
      { topicId: topic.id, front: 'Contrast glutamate, GABA, and glycine.', back: '**Glutamate**: the main **excitatory** neurotransmitter of the CNS.\n**GABA**: the main **inhibitory** neurotransmitter in the brain (hyperpolarizes via Cl⁻ influx).\n**Glycine**: major **inhibitory** neurotransmitter in the spinal cord.', hint: 'Glutamate excites; GABA & glycine inhibit (brain vs spinal cord).' },
      { topicId: topic.id, front: 'What are the roles of epinephrine/norepinephrine and endorphins?', back: '**Norepinephrine/epinephrine**: "fight or flight," alertness, wakefulness; main **sympathetic** neurotransmitter/hormone.\n\n**Endorphins**: natural **opioid** peptides that reduce pain perception and produce euphoria.', hint: 'NE/Epi = sympathetic arousal; endorphins = natural painkillers.' },
      { topicId: topic.id, front: 'What are the functions of the major brain lobes?', back: '**Frontal**: executive function, planning, motor cortex, personality.\n**Parietal**: somatosensation, spatial processing.\n**Temporal**: hearing, language (Wernicke\'s), memory.\n**Occipital**: vision.', hint: 'Frontal = executive/motor; parietal = touch; temporal = hearing/memory; occipital = vision.' },
      { topicId: topic.id, front: 'What do the hindbrain and midbrain structures do?', back: '**Medulla oblongata**: vital autonomic functions (breathing, heart rate, BP).\n**Pons**: relay, breathing, sleep.\n**Cerebellum**: balance, coordination, motor learning.\n**Midbrain**: sensory/motor reflexes (visual, auditory).', hint: 'Medulla = vital functions; cerebellum = coordination/balance.' },
      { topicId: topic.id, front: 'What are the roles of the limbic system structures?', back: '**Amygdala**: fear, aggression, emotional processing.\n**Hippocampus**: forming **new long-term memories** (consolidation).\n**Hypothalamus**: homeostasis, the "4 F\'s" (feeding, fighting, fleeing, mating), controls the pituitary.\n**Thalamus**: sensory relay station (except smell).', hint: 'Amygdala = fear; hippocampus = memory; hypothalamus = homeostasis; thalamus = relay.' },
      { topicId: topic.id, front: 'Contrast the sympathetic and parasympathetic divisions.', back: '**Sympathetic** ("fight or flight"): ↑HR, dilates pupils, inhibits digestion; uses NE; thoracolumbar.\n\n**Parasympathetic** ("rest and digest"): ↓HR, constricts pupils, promotes digestion; uses ACh; craniosacral (vagus nerve).', hint: 'Sympathetic = fight/flight (NE); parasympathetic = rest/digest (ACh, vagus).' },
      { topicId: topic.id, front: 'How are graded potentials different from action potentials?', back: '**Graded potentials**: variable amplitude, decremental (fade with distance), can summate (temporal/spatial), occur at dendrites/cell body.\n\n**Action potentials**: all-or-none, fixed amplitude, propagate without decrement down the axon once threshold is met.', hint: 'Graded = variable & fading (summable); AP = all-or-none & non-decremental.' },
    ],
  });

  console.log('✅ Created 14 MCAT nervous system & neurotransmitter flashcards');
  console.log('\n✅ All MCAT nervous system & neurotransmitter flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
