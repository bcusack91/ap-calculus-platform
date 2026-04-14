export const bioCellRespirationPart4Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `
## The Citric Acid Cycle (Krebs Cycle)

**Part 4 of 7**

The citric acid cycle — also called the **Krebs cycle** (after Hans Krebs, who elucidated it in 1937) or the **tricarboxylic acid (TCA) cycle** — is the central metabolic hub of the cell.  It completes the oxidation of the carbon atoms originally present in glucose, producing CO\\(_2\\), and generates most of the NADH and FADH\\(_2\\) that will drive ATP production in the electron transport chain.

**Location:** Mitochondrial matrix

**Overall function:** Oxidize the acetyl group from acetyl-CoA, releasing 2 CO\\(_2\\) and capturing energy as NADH, FADH\\(_2\\), and GTP (equivalent to ATP).
      `
    },
    {
      id: 'cr4-steps',
      type: 'text' as const,
      content: `
### The Eight Steps of the Citric Acid Cycle

The cycle begins when **acetyl-CoA** donates its 2-carbon acetyl group to the 4-carbon molecule **oxaloacetate**, forming the 6-carbon molecule **citrate**:

| Step | Enzyme | Reaction | Products |
|------|--------|----------|----------|
| 1 | Citrate synthase | Acetyl-CoA + Oxaloacetate \\(\\rightarrow\\) Citrate | Citrate (6C), free CoA |
| 2 | Aconitase | Citrate \\(\\rightarrow\\) Isocitrate | Isocitrate (6C) |
| 3 | **Isocitrate dehydrogenase** | Isocitrate \\(\\rightarrow\\) \\(\\alpha\\)-ketoglutarate | **NADH**, CO\\(_2\\) (5C) |
| 4 | **\\(\\alpha\\)-ketoglutarate dehydrogenase** | \\(\\alpha\\)-KG \\(\\rightarrow\\) Succinyl-CoA | **NADH**, CO\\(_2\\) (4C) |
| 5 | Succinyl-CoA synthetase | Succinyl-CoA \\(\\rightarrow\\) Succinate | **GTP** (=ATP), free CoA |
| 6 | **Succinate dehydrogenase** | Succinate \\(\\rightarrow\\) Fumarate | **FADH\\(_2\\)** |
| 7 | Fumarase | Fumarate \\(\\rightarrow\\) Malate | Malate (4C) |
| 8 | Malate dehydrogenase | Malate \\(\\rightarrow\\) Oxaloacetate | **NADH** |

The regenerated **oxaloacetate** is ready to combine with another acetyl-CoA, continuing the cycle.

**Per acetyl-CoA (one turn):**
- 2 CO\\(_2\\) released
- 3 NADH produced
- 1 FADH\\(_2\\) produced
- 1 GTP (= ATP) produced

**Per glucose (two turns):**
- 4 CO\\(_2\\), 6 NADH, 2 FADH\\(_2\\), 2 ATP

> **Note:** The 4 CO\\(_2\\) from the citric acid cycle plus the 2 CO\\(_2\\) from pyruvate oxidation = 6 CO\\(_2\\) total, matching the 6 carbons in the original glucose.
      `
    },
    {
      id: 'cr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Citric Acid Cycle Steps
      `,
      exercise: {
        questions: [
          {
            question: 'What is the 4-carbon molecule that combines with acetyl-CoA to begin the citric acid cycle?',
            options: [
              'Citrate',
              'Succinate',
              'Oxaloacetate',
              'Alpha-ketoglutarate'
            ],
            correctAnswer: 2,
            explanation: 'Oxaloacetate (4C) combines with the acetyl group from acetyl-CoA (2C) to form citrate (6C) in the first step of the cycle, catalyzed by citrate synthase.'
          },
          {
            question: 'How many CO2 molecules are released per turn of the citric acid cycle?',
            options: [
              '1',
              '2',
              '4',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Two CO2 molecules are released per turn — one at step 3 (isocitrate to alpha-ketoglutarate) and one at step 4 (alpha-ketoglutarate to succinyl-CoA). These represent the two carbons that entered as the acetyl group.'
          },
          {
            question: 'Which electron carrier is produced at step 6 (succinate to fumarate) rather than NADH?',
            options: [
              'FADH2',
              'ATP',
              'Coenzyme Q',
              'Cytochrome c'
            ],
            correctAnswer: 0,
            explanation: 'Succinate dehydrogenase produces FADH2 instead of NADH. This enzyme is unique because it is embedded in the inner mitochondrial membrane and is also Complex II of the electron transport chain.'
          }
        ]
      }
    },
    {
      id: 'cr4-regulation',
      type: 'text' as const,
      content: `
### Regulation and Metabolic Hub

The citric acid cycle is regulated at three key enzymes:

1. **Citrate synthase** — inhibited by ATP, NADH, and citrate
2. **Isocitrate dehydrogenase** — stimulated by ADP; inhibited by ATP and NADH
3. **\\(\\alpha\\)-ketoglutarate dehydrogenase** — inhibited by succinyl-CoA and NADH; activated by Ca\\(^{2+}\\)

**The Citric Acid Cycle as a Metabolic Hub:**

The cycle is not just for glucose catabolism.  It intersects with many other metabolic pathways:

- **Amino acid metabolism:** Several amino acids can be converted to citric acid cycle intermediates (e.g., glutamate \\(\\rightarrow\\) \\(\\alpha\\)-ketoglutarate)
- **Fat metabolism:** Fatty acids are broken down to acetyl-CoA via \\(\\beta\\)-oxidation
- **Gluconeogenesis:** Oxaloacetate can be used to make new glucose
- **Biosynthesis:** Cycle intermediates serve as precursors for amino acids, fatty acids, and porphyrins

When intermediates are pulled out for biosynthesis, they must be replenished through **anaplerotic reactions** (e.g., pyruvate carboxylase converts pyruvate to oxaloacetate).
      `
    },
    {
      id: 'cr4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Regulation and Integration
      `,
      exercise: {
        questions: [
          {
            question: 'The citric acid cycle is called a "metabolic hub" because:',
            options: [
              'It only processes glucose-derived molecules',
              'It produces more ATP than any other pathway',
              'Its intermediates connect to amino acid, fat, and carbohydrate metabolism',
              'It operates in every compartment of the cell'
            ],
            correctAnswer: 2,
            explanation: 'The citric acid cycle sits at the crossroads of metabolism. Amino acids, fatty acids, and carbohydrates can all feed into the cycle, and its intermediates can be withdrawn for biosynthetic pathways.'
          },
          {
            question: 'What are anaplerotic reactions?',
            options: [
              'Reactions that break down citric acid cycle intermediates',
              'Reactions that replenish citric acid cycle intermediates when they are withdrawn for biosynthesis',
              'Reactions that produce ATP from cycle intermediates',
              'Reactions that convert CO2 back into organic molecules'
            ],
            correctAnswer: 1,
            explanation: 'Anaplerotic (from Greek "to fill up") reactions replenish cycle intermediates. The most important is the conversion of pyruvate to oxaloacetate by pyruvate carboxylase, ensuring the cycle can continue even when intermediates are diverted.'
          }
        ]
      }
    },
    {
      id: 'cr4-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Citric Acid Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The 6-carbon molecule formed when acetyl-CoA combines with oxaloacetate:',
            answer: 'citrate',
            acceptableAnswers: ['citrate', 'Citrate', 'citric acid', 'Citric acid'],
            placeholder: 'e.g. succinate'
          },
          {
            question: 'The process by which fatty acids are broken down to acetyl-CoA (use Greek letter or English name):',
            answer: 'beta-oxidation',
            acceptableAnswers: ['beta-oxidation', 'Beta-oxidation', 'beta oxidation', 'Beta oxidation', 'b-oxidation'],
            placeholder: 'e.g. glycolysis'
          },
          {
            question: 'The scientist who elucidated the citric acid cycle (last name):',
            answer: 'Krebs',
            acceptableAnswers: ['Krebs', 'krebs', 'Hans Krebs'],
            placeholder: 'e.g. Calvin'
          }
        ]
      }
    },
    {
      id: 'cr4-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Cycle Component
      `,
      exercise: {
        questions: [
          {
            question: 'The enzyme embedded in the inner mitochondrial membrane (also Complex II of the ETC):',
            options: ['Citrate synthase', 'Isocitrate dehydrogenase', 'Succinate dehydrogenase', 'Malate dehydrogenase'],
            correctAnswer: 'Succinate dehydrogenase'
          },
          {
            question: 'The 4-carbon molecule regenerated at the end of each cycle to restart the process:',
            options: ['Citrate', 'Succinate', 'Fumarate', 'Oxaloacetate'],
            correctAnswer: 'Oxaloacetate'
          },
          {
            question: 'The high-energy nucleotide produced at step 5 (equivalent to ATP):',
            options: ['GMP', 'GDP', 'GTP', 'cAMP'],
            correctAnswer: 'GTP'
          }
        ]
      }
    },
    {
      id: 'cr4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Citric Acid Cycle Mastery
      `,
      exercise: {
        questions: [
          {
            question: 'After all stages up to and including the citric acid cycle (starting from 1 glucose), how many total CO2 molecules have been released?',
            options: [
              '2',
              '4',
              '6',
              '12'
            ],
            correctAnswer: 2,
            explanation: 'Pyruvate oxidation releases 2 CO2 (one per pyruvate). The citric acid cycle releases 4 CO2 (2 per turn x 2 turns). Total = 6 CO2, accounting for all 6 carbon atoms from the original glucose.'
          },
          {
            question: 'If the citric acid cycle is running but the electron transport chain is inhibited, which of the following will accumulate?',
            options: [
              'NAD+ and FAD',
              'NADH and FADH2',
              'ATP and GTP',
              'CO2 and H2O'
            ],
            correctAnswer: 1,
            explanation: 'Without the ETC, NADH and FADH2 cannot be reoxidized. They accumulate, and without NAD+ and FAD to accept electrons, the dehydrogenase reactions of the citric acid cycle slow and eventually stop.'
          }
        ]
      }
    }
  ]
};