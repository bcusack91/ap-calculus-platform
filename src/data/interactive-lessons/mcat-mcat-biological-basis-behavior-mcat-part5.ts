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

$$\\text{Receptor} \\to \\text{sensory (afferent) neuron} \\to \\text{spinal cord (interneuron)} \\to \\text{motor (efferent) neuron} \\to \\text{effector}$$

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
      id: 'bbb5-quiz1',
      type: 'multiple-choice' as const,
      content: `**NS Organization & Genetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Activation of the PARASYMPATHETIC nervous system would produce:`,
            options: [`Decreased heart rate and increased digestive activity`, `Increased heart rate and pupil dilation`, `Increased blood glucose and sweating`, `Bronchodilation and inhibited digestion`],
            correctAnswer: 0,
            explanation: `The parasympathetic ("rest-and-digest") system slows the heart, stimulates digestion, and constricts pupils — the opposite of the sympathetic "fight-or-flight" response. Increased HR, pupil dilation, and raised glucose are all SYMPATHETIC effects.`
          },
          {
            question: `A trait shows much higher concordance in monozygotic than dizygotic twins, even when twins are raised apart. This pattern suggests:`,
            options: [`A substantial genetic contribution to the trait`, `A purely environmental cause`, `No heritability`, `That the trait is entirely learned`],
            correctAnswer: 0,
            explanation: `Monozygotic twins share ~100% of genes versus ~50% for dizygotic twins. Higher MZ concordance — especially when reared apart, controlling for shared environment — implicates a substantial GENETIC contribution. Twin and adoption designs are how behavioral genetics separates nature from nurture.`
          },
          {
            question: `In the knee-jerk (patellar) reflex, the rapid response occurs because the reflex arc is:`,
            options: [`Monosynaptic and processed at the spinal cord, bypassing the brain`, `Routed through the cerebral cortex for a decision`, `Dependent on the endocrine system`, `Mediated entirely by the sympathetic nervous system`],
            correctAnswer: 0,
            explanation: `The patellar reflex is a monosynaptic reflex: the sensory neuron synapses directly onto the motor neuron in the spinal cord, so the response is generated without involving the brain. Bypassing higher processing is what makes the reflex so fast and protective.`
          }
        ]
      }
    },
    {
      id: 'bbb5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Organization & Genetics

<details>
<summary><b>Example 1: Trace a reflex arc</b></summary>

**Question:** You touch a hot stove and jerk your hand away before feeling pain. Order the components and explain why withdrawal precedes the conscious pain.

**Solution:**
1. Receptor (nociceptor) → sensory (afferent) neuron → spinal cord interneuron → motor (efferent) neuron → muscle (effector) → withdrawal. ✓
2. This spinal reflex arc acts locally and quickly; the pain signal continues UP to the brain separately, arriving slightly later → you move before you consciously feel pain. ✓

**Key idea:** Protective reflexes are processed at the spinal level for speed.
</details>

<details>
<summary><b>Example 2: Interpret a heritability estimate correctly</b></summary>

**Question:** A study reports that a trait has heritability of 0.6 in a population. What does this mean, and what does it NOT mean?

**Solution:**
1. It MEANS ~60% of the VARIANCE in the trait ACROSS the population is attributable to genetic differences. ✓
2. It does NOT mean any individual's trait is "60% genetic," nor that environment is unimportant, nor that the trait is fixed/unchangeable. ✓
3. Heritability is population- and environment-specific; change the environment and the estimate can change. ✓

**MCAT trap:** Heritability describes population variance, not the make-up of one person's trait.
</details>

<details>
<summary><b>Example 3: Apply gene–environment interaction</b></summary>

**Question:** A gene variant raises depression risk ONLY in individuals who also experience severe early-life stress; neither factor alone has much effect. Name this phenomenon and its implication.

**Solution:**
1. The genotype's effect depends on the environment (and vice versa) → **gene–environment interaction.** ✓
2. Implication: behavior arises from the JOINT action of genes and environment, not either alone — undermining strict "nature vs. nurture" framings. ✓

**Connection:** This is the modern, interactionist view the MCAT favors over single-cause explanations.
</details>`
    },
    {
      id: 'bbb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5 (and Suite Review)

- CNS (brain + cord) vs. PNS (somatic = voluntary; autonomic = sympathetic fight-or-flight vs. parasympathetic rest-and-digest).
- Reflex arc: receptor → afferent → spinal cord → efferent → effector; monosynaptic reflexes bypass the brain for speed.
- Behavioral genetics: twin/adoption studies separate genes from environment; heritability = proportion of population VARIANCE from genes (not individual %).
- Behavior = genes × environment (interaction) plus neuroplasticity and evolutionary selection.`
    }
  ]
};
