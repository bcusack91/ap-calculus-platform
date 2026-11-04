export const mcatBioBasisBehaviorPart5Data = {
  topicSlug: 'mcat-biological-basis-behavior-mcat',
  sections: [
    {
      id: 'bbb5-intro',
      type: 'text' as const,
      content: `# Biological Basis of Behavior

**Part 5 of 5 — Nervous System Organization, Genetics & Review**

### Divisions of the Nervous System

$$\\text{Nervous system} \\to \\begin{cases} \\textbf{CNS} & \\text{brain + spinal cord} \\\\ \\textbf{PNS} & \\text{somatic + autonomic} \\end{cases}$$

| Division | Subdivision | Function |
|----------|-------------|----------|
| **Somatic** | — | Voluntary skeletal muscle, sensory input |
| **Autonomic** | **Sympathetic** | Fight-or-flight (↑ HR, ↓ digestion, dilate pupils) |
| **Autonomic** | **Parasympathetic** | Rest-and-digest (↓ HR, ↑ digestion, constrict pupils) |

Sympathetic and parasympathetic are largely ANTAGONISTIC, maintaining homeostasis.

### Reflex Arc

$$\\text{Receptor} \\to \\text{sensory (afferent) neuron} \\to \\text{spinal cord (± interneuron)} \\to \\text{motor (efferent) neuron} \\to \\text{effector}$$

A **monosynaptic reflex** (e.g., knee-jerk) bypasses the brain for speed.

### Behavioral Genetics & Methods

| Approach | What it isolates |
|----------|------------------|
| **Twin studies** | Compare monozygotic (100% genes) vs. dizygotic (~50%) |
| **Adoption studies** | Separate genes from shared environment |
| **Family studies** | Risk by degree of relatedness |
| **Heritability** | Proportion of trait VARIANCE due to genes (population-level, not individual) |

$$\\text{Phenotype} = \\text{Genotype} \\times \\text{Environment (gene–environment interaction)}$$

### Nature vs. Nurture & Plasticity

- Most behaviors are POLYGENIC and shaped by gene–environment interaction.
- **Neuroplasticity:** the brain reorganizes (synaptic strengthening/pruning) with experience; greatest in development but lifelong (e.g., learning, recovery from injury).

### Evolutionary Perspective

- Behaviors that enhanced survival/reproduction were selected (e.g., fear of heights, kin altruism). Useful for "ultimate cause" explanations of behavior.`
    },
    {
      id: 'bbb5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Organization & Genetics

**Problem 1.** A patient's dorsal roots from the right leg, which carry all of its sensory fibers into the spinal cord, are cut. The ventral roots, which carry its motor fibers out, are intact.

- **(a)** Which component of the reflex arc is lost?
- **(b)** Is the withdrawal reflex to a pinprick on the right foot preserved?
- **(c)** Can the patient still move the right leg voluntarily?
- **(d)** Will the patient feel the pinprick?

**(a) The afferent limb.** The sensory (afferent) neurons can no longer carry signals from the receptors into the cord.

**(b) No.** The interneurons, motor neurons and muscles all work, but without afferent input the spinal circuit never receives the stimulus, so no withdrawal occurs.

**(c) Yes.** Voluntary commands descend from the brain through the cord and leave by the intact ventral roots, so the efferent path still works.

**(d) No.** The same afferent fibers also carry the pain signal up to the brain. Reflex and conscious pain share the afferent limb and split only inside the cord.

**Problem 2.** A study reports that a trait has a heritability of 0.6 in a population.

- **(a)** What does the 0.6 mean?
- **(b)** Does it mean each person's trait is "60% genetic"?
- **(c)** Does it mean environment is unimportant, or that the trait is fixed?
- **(d)** Would the same estimate hold in a different environment?

**(a) Population variance.** About 60% of the VARIANCE in the trait ACROSS the population is attributable to genetic differences.

**(b) No.** Heritability describes population variance, not the make-up of one person's trait.

**(c) No.** A heritable trait can still be shaped by environment; heritability does not make it fixed or unchangeable.

**(d) Not necessarily.** Heritability is population- and environment-specific; change the environment and the estimate can change.

**Problem 3.** A gene variant raises depression risk ONLY in people who also experience severe early-life stress; neither factor alone has much effect.

- **(a)** What is this phenomenon called?
- **(b)** What does it imply about "nature vs. nurture"?

**(a) Gene–environment interaction.** The genotype's effect depends on the environment, and vice versa.

**(b) Joint causes.** Behavior arises from the JOINT action of genes and environment, not either alone, which undermines strict "nature vs. nurture" framings. This interactionist view is the one the MCAT favors over single-cause explanations.`
    },
    {
      id: 'bbb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**NS Organization & Genetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Activation of the PARASYMPATHETIC nervous system would produce:`,
            options: [`Decreased heart rate and increased digestion`, `Increased heart rate and slowed digestion`, `Decreased heart rate and pupil dilation`, `Increased heart rate and pupil constriction`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The parasympathetic ("rest-and-digest") system slows the heart, stimulates digestion, and constricts pupils — the opposite of the sympathetic "fight-or-flight" response. Increased heart rate, slowed digestion, and pupil dilation are all SYMPATHETIC effects, so any option containing one of them is wrong.`
          },
          {
            question: `A trait shows much higher concordance in monozygotic than dizygotic twins, even when twins are raised apart. This pattern suggests:`,
            options: [`A substantial genetic contribution to the trait`, `A strong shared-environment contribution to the trait`, `A negligible genetic contribution to the trait`, `A purely environmental contribution to the trait`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `Monozygotic twins share ~100% of genes versus ~50% for dizygotic twins. Higher MZ concordance — especially when reared apart, controlling for shared environment — implicates a substantial GENETIC contribution. Twin and adoption designs are how behavioral genetics separates nature from nurture.`
          },
          {
            question: `The knee-jerk and the withdrawal-from-pain reflex are both processed in the spinal cord. Measured from the moment the sensory signal reaches the cord, the withdrawal reflex still takes longer to activate its motor neurons. This extra delay most likely reflects:`,
            options: [`More synapses via spinal interneurons`, `A detour up to the brain before responding`, `Slower conduction along the sensory axons`, `An inhibitory transmitter at the muscle`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Every chemical synapse adds a short delay. The knee-jerk is monosynaptic: the sensory neuron synapses directly onto the motor neuron. The withdrawal reflex is polysynaptic, relaying through one or more interneurons, so it adds more synaptic delays inside the cord. A detour up to the brain is ruled out because both reflexes are spinal. Slower conduction along the sensory axons cannot explain a delay measured after the signal has already reached the cord. And an inhibitory transmitter at the muscle is wrong on two counts: the neuromuscular junction uses excitatory ACh, and it acts only after the motor neurons fire.`
          }
        ]
      }
    },
    {
      id: 'bbb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5 (and Suite Review)

- **CNS and PNS.** CNS = brain + spinal cord; PNS = somatic (voluntary) + autonomic (sympathetic and parasympathetic).
- **Two autonomic branches.** Sympathetic = fight-or-flight (↑ HR, ↓ digestion); parasympathetic = rest-and-digest (↓ HR, ↑ digestion).
- **Reflex arcs.** Receptor → afferent → spinal cord → efferent → effector; the knee-jerk is monosynaptic and bypasses the brain.
- **Genes and environment.** Twin and adoption studies separate genes from environment; most behavior reflects their interaction.

**Common traps**

- **Heritability as individual %.** Heritability describes trait variance across a population, never how genetic one person's trait is.
- **Heritable means fixed.** A highly heritable trait can still change with environment, and the estimate itself can change.
- **Reflexes need the brain.** Spinal reflex arcs act before the pain signal reaches the brain; the response does not wait for it.
- **Sympathetic constricts pupils.** Pupil dilation and slowed digestion are sympathetic; pupil constriction and slowed heart rate are parasympathetic.`
    }
  ]
};
