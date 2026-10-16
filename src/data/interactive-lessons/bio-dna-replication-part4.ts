export const bioDnaReplicationPart4Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr4-intro',
      type: 'text' as const,
      content: `
## Proofreading and DNA Repair

**Part 4 of 7**

DNA replication must be extraordinarily accurate: a cell copies billions of bases and makes only a handful of permanent mistakes. This fidelity comes from three layers of error correction.
      `
    },
    {
      id: 'dr4-fidelity',
      type: 'text' as const,
      content: `
### Three Layers of Replication Fidelity

**Layer 1: Base selection by DNA polymerase**
- DNA polymerase has a tight active site that favors correct base pairs (A-T, G-C)
- Incorrect bases fit poorly and are usually rejected before they are added

**Layer 2: Proofreading by DNA polymerase**
- If a wrong nucleotide is added anyway, the mismatched pair distorts the helix
- DNA polymerase detects the distortion, backs up, removes the incorrect nucleotide and inserts the correct one
- Proofreading removes most of the errors that slip past base selection

**Layer 3: Repair after replication**
- Repair proteins scan the newly made DNA for mismatched bases that escaped proofreading
- They cut out a short stretch of the new strand containing the error; DNA polymerase fills the gap using the old strand as a template, and **ligase** seals the backbone
- Together, the three layers leave very few errors uncorrected

> **Why this matters for the AP exam:** The CED states that errors in DNA replication or in DNA repair mechanisms can cause random **mutations**. An error that escapes all three layers is copied into both daughter molecules at the next replication and becomes a permanent change in sequence.
      `
    },
    {
      id: 'dr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Proofreading and Repair
      `,
      exercise: {
        questions: [
          {
            question: 'A mutant DNA polymerase has lost its proofreading activity but still adds nucleotides normally. What is the predicted effect on mutation rates?',
            options: [
              'No change in mutation rate, as later repair corrects every slip',
              'Mutation rate rises sharply, since misincorporated bases are no longer removed',
              'Replication halts, since polymerase cannot extend a strand without proofreading',
              'The error rate falls, because the polymerase now adds bases more slowly'
            ],
            correctAnswer: 1,
            explanation: 'Proofreading removes most of the errors that slip past base selection. Losing it means more wrong bases are left in the new strand; repair after replication catches many but not all of them, so the mutation rate rises. Polymerase can still build DNA without proofreading, and nothing about the change makes it more accurate.'
          },
          {
            question: 'A mismatched base pair escapes both proofreading and repair after replication. Why does the error become a permanent mutation after the next round of replication?',
            options: [
              'The wrong base acts as a template for a matching partner, leaving no mismatch',
              'The mismatch is copied exactly into both daughter molecules as the same mismatch',
              'The cell destroys the strand with the error, so only the mutant strand survives',
              'The mismatch is translated into protein, which then changes the DNA sequence'
            ],
            correctAnswer: 0,
            explanation: 'When the strands separate, the strand carrying the wrong base is used as a template, and the new strand built on it pairs correctly with that wrong base. That daughter molecule is now fully base-paired, so repair proteins have no mismatch to detect, and the change is permanent. A mismatch cannot be copied as a mismatch, the cell does not simply destroy one strand, and proteins do not rewrite DNA.'
          }
        ]
      }
    },
    {
      id: 'dr4-damage',
      type: 'text' as const,
      content: `
### External Causes of Mutation and Their Repair

Beyond replication errors, the CED names **external factors, including radiation and reactive chemicals**, as causes of random mutations. Agents that raise the mutation rate are called **mutagens**.

| Mutagen | What it does to DNA |
|---------|---------------------|
| **Ultraviolet (UV) radiation** | Can link two adjacent bases on the same strand, distorting the helix so it is copied incorrectly |
| **High-energy radiation** (X-rays, gamma rays) | Can break the DNA backbone, sometimes on both strands |
| **Reactive chemicals** (some in tobacco smoke, for example) | Change the structure of bases so they pair with the wrong partner |

**How damage is repaired.** Cells constantly monitor their DNA. In most repair, proteins recognize a damaged or distorted region, cut it out of one strand, and **DNA polymerase** fills the gap using the undamaged strand as a template; **ligase** then seals the backbone. The same complementary base pairing that makes replication accurate is what makes this repair possible.

**When repair fails.** If repair systems are overwhelmed (very high UV exposure) or defective (an inherited mutation in a repair gene), mutations accumulate. Mutations in genes that control the cell cycle can then lead to **cancer**. People who inherit a defect in the system that removes UV damage, for example, develop skin cancers at very high rates after sun exposure.

**Mutations as raw material.** Whether a mutation is beneficial, harmful or neutral depends on its effect and on the environment. Mutations that escape repair are the ultimate source of new alleles, and so of the genetic variation that natural selection acts on.
      `
    },
    {
      id: 'dr4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — DNA Damage and Repair
      `,
      exercise: {
        questions: [
          {
            question: 'A person inherits a defect in the repair system that removes UV-damaged stretches of DNA. Which outcome is most likely?',
            options: [
              'Skin cells accumulate mutations after sun exposure, raising cancer risk',
              'The person cannot replicate DNA, so their cells never divide',
              'Sunlight damage is repaired faster because DNA polymerase compensates',
              'Only the person\'s gametes are affected, so they themselves stay healthy'
            ],
            correctAnswer: 0,
            explanation: 'Without that repair system, UV damage in skin cells persists and is copied incorrectly, so mutations build up, and mutations in cell-cycle genes can cause cancer. Replication itself still works, DNA polymerase alone cannot remove damaged stretches, and the defect is present in every cell, including skin cells.'
          }
        ]
      }
    },
    {
      id: 'dr4-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — DNA Repair
      `,
      exercise: {
        questions: [
          {
            question: 'The general term for an agent, such as UV radiation, that increases the rate of mutation:',
            answer: 'mutagen',
            acceptableAnswers: ['mutagen', 'Mutagen', 'mutagens', 'a mutagen'],
            placeholder: 'e.g. allele'
          },
          {
            question: 'The enzyme that seals the sugar-phosphate backbone after a damaged stretch is cut out and refilled:',
            answer: 'DNA ligase',
            acceptableAnswers: ['DNA ligase', 'ligase', 'Ligase', 'DNA Ligase'],
            placeholder: 'e.g. helicase'
          }
        ]
      }
    },
    {
      id: 'dr4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'A bacterial strain whose proteins for repairing mismatches after replication are defective is grown for many generations alongside a normal strain. Which prediction is best supported?',
            options: [
              'The repair-deficient strain stops dividing because replication cannot occur',
              'The repair-deficient strain gains more mutations, so it becomes more varied',
              'Both strains gain mutations at the same rate, since proofreading is identical',
              'The repair-deficient strain gains only beneficial mutations over time'
            ],
            correctAnswer: 1,
            explanation: 'Without that repair system, errors that escape proofreading become permanent, so mutations accumulate faster and the population becomes more genetically varied. Replication still occurs, proofreading alone does not make the rates equal, and mutations arise at random: most are neutral or harmful, and whether any is beneficial depends on the environment.'
          }
        ]
      }
    }
  ]
};