export const bioOriginsOfLifePart2Data = {
  topicSlug: 'origins-of-life',
  sections: [
    {
      id: 'ori2-intro',
      type: 'text' as const,
      content: `
## Abiogenesis — From Inorganic to Organic

**Part 2 of 7**

Abiogenesis is the natural process by which life arose from non-living matter. This lesson covers the key hypotheses and landmark experiments that demonstrated organic molecules can form spontaneously under early Earth conditions.

### The Central Question

How did simple inorganic molecules ($H_{2}O$, $CH_{4}$, $NH_{3}$, $H_{2}$) become the complex organic molecules (amino acids, nucleotides, lipids, sugars) required for life?

### Key terms for this part
- **abiogenesis** — the origin of life from non-living chemical systems
- **Oparin-Haldane hypothesis** — independent proposal (1920s) that life arose from a "primordial soup" of organic molecules
- **Miller-Urey experiment** — 1953 experiment simulating early Earth conditions to produce amino acids
- **prebiotic soup** — hypothetical aqueous solution of organic molecules on early Earth
      `
    },
    {
      id: 'ori2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Abiogenesis Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is abiogenesis?',
            options: [
              'The natural origin of life from non-living chemical precursors',
              'The theory that life always arises from pre-existing life',
              'The process by which cells divide to form new organisms',
              'The evolution of new species through natural selection'
            ],
            correctAnswer: 0,
            explanation: 'Abiogenesis refers specifically to the origin of life from non-living matter. It is the opposite of biogenesis (life from life), which Pasteur demonstrated for existing organisms but which cannot explain the very first cells.'
          },
          {
            question: 'The Oparin-Haldane hypothesis proposed that early life arose in a:',
            options: [
              '"Primordial soup" of organic molecules in a reducing atmosphere',
              'Deep underground cave system with no light',
              'Highly oxidizing atmosphere rich in $O_{2}$',
              'Frozen glacier where molecules were preserved'
            ],
            correctAnswer: 0,
            explanation: 'Both Oparin (1924) and Haldane (1929) independently proposed that organic molecules accumulated in the oceans under reducing atmospheric conditions, forming a "primordial soup" from which life eventually emerged.'
          }
        ]
      }
    },
    {
      id: 'ori2-content2',
      type: 'text' as const,
      content: `
## The Oparin-Haldane Hypothesis (1920s)

### Alexander Oparin (1924) & J.B.S. Haldane (1929)

Both scientists independently proposed a stepwise model:

1. **Simple inorganic molecules** ($H_{2}O$, $CH_{4}$, $NH_{3}$, $H_{2}$) were present in Earth's early reducing atmosphere
2. **Energy sources** (UV light, lightning) drove reactions that produced simple organic molecules (amino acids, simple sugars, nucleotide bases)
3. These organics accumulated in the oceans, creating a **"primordial soup"** (also called "prebiotic broth")
4. Over time, more complex molecules formed through **polymerization** — amino acids → polypeptides; nucleotides → nucleic acids
5. Self-replicating molecules and primitive membranes emerged, leading to the first **protocells**

### Key Predictions of the Hypothesis

- Organic molecules **can** form spontaneously under reducing conditions
- No biological catalysts (enzymes) are required for initial organic synthesis
- Energy input from abiotic sources is sufficient

### Limitations

- The exact composition of early Earth's atmosphere is debated — it may have been more neutral $(CO_{2}/N_{2}-dominated)$ than strongly reducing
- The hypothesis does not explain **how** self-replication began
- Concentration of dilute organics in the open ocean is problematic ("dilution problem")
      `
    },
    {
      id: 'ori2-content3',
      type: 'text' as const,
      content: `
## The Miller-Urey Experiment (1953)

### Experimental Design

Stanley Miller (a graduate student) and Harold Urey designed an apparatus to test the Oparin-Haldane hypothesis:

| Component | Purpose |
|---|---|
| **Flask with water** | Simulated the early ocean |
| **Gas mixture** ($CH_{4}$, $NH_{3}$, $H_{2}$, $H_{2}O$) | Simulated the reducing atmosphere |
| **Electrodes providing sparks** | Simulated lightning as an energy source |
| **Condenser** | Cooled gases to allow products to collect in the water |

### Results

After running for **one week**:
- **11 of the 20** standard amino acids were produced
- Additional organic molecules included **hydroxy acids**, **urea**, and **aldehydes**
- Up to **15%** of carbon had been incorporated into organic compounds
- **No biological catalysts** were involved

### Significance

1. **First experimental evidence** that organic molecules can form from inorganic precursors under plausible early Earth conditions
2. **Validated** the core prediction of the Oparin-Haldane hypothesis
3. Showed that abiotic synthesis is **not** thermodynamically prohibitive

### Later Refinements

- **2008 re-analysis** of Miller's sealed vials (using modern mass spectrometry) found **over 20 amino acids** — even more than originally reported
- Experiments with **volcanic gas mixtures** ($CO_{2}$, $N_{2}$, $H_{2}S$) also produce amino acids, supporting synthesis even under less reducing conditions
- **Meteorite analysis** (Murchison meteorite, 1969): over 90 amino acids found on a carbonaceous chondrite, confirming that organic synthesis occurs in space as well
      `
    },
    {
      id: 'ori2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Miller-Urey** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the Miller-Urey experiment, electric sparks simulated ___ as an energy source.',
            options: ['lightning', 'UV radiation', 'volcanic heat', 'radioactive decay']
          },
          {
            label: 'The gas mixture in the experiment represented the early Earth\'s ___ atmosphere.',
            options: ['reducing', 'oxidizing', 'neutral', 'oxygenated']
          },
          {
            label: 'The primary organic products detected in the experiment were ___.',
            options: ['amino acids', 'nucleotides', 'phospholipids', 'polysaccharides']
          }
        ],
        correctAnswers: ['lightning', 'reducing', 'amino acids'],
        hint1: 'What natural phenomenon provides sudden bursts of electrical energy in the atmosphere?',
        hint2: 'The atmosphere lacked free $O_{2}$ and contained electron-donating gases.',
        hint3: 'These are the monomers of proteins — the most abundant organic products in the experiment.',
        explanation: 'The Miller-Urey experiment used electric sparks (lightning simulation) in a reducing atmosphere ($CH_{4}$, $NH_{3}$, $H_{2}$, $H_{2}O$) and successfully produced amino acids, demonstrating that the building blocks of life can form abiotically.'
      }
    },
    {
      id: 'ori2-summary',
      type: 'text' as const,
      content: `
## Summary — Part 2

- **Abiogenesis** = origin of life from non-living matter
- **Oparin-Haldane hypothesis** (1920s): organic molecules formed in a reducing atmosphere, accumulated in the oceans ("primordial soup"), and eventually gave rise to self-replicating systems
- **Miller-Urey experiment** (1953): first experimental demonstration:
  - Simulated reducing atmosphere + lightning → produced amino acids
  - 11 of 20 standard amino acids detected (later re-analysis found 20+)
  - No enzymes or living organisms required
- Supporting evidence from **meteorite analysis** (Murchison meteorite: 90+ amino acids)
- Key AP concept: abiotic organic synthesis is **experimentally verified** and **thermodynamically feasible**

**Next up:** Part 3 — The RNA World Hypothesis
      `
    }
  ]
};
