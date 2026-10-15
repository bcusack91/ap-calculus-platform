export const bioCellRespirationPart4Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr4-intro',
      type: 'text' as const,
      content: `
## The Citric Acid Cycle (Krebs Cycle)

**Part 4 of 7**

The citric acid cycle — also called the **Krebs cycle** — completes the oxidation of the carbon atoms that were originally in glucose, releasing them as CO$_2$.  Along the way it captures energy, mostly by reducing the electron carriers **NAD$^+$** and **FAD** to **NADH** and **FADH$_2$**, which will drive ATP production in the electron transport chain.

**Location:** Mitochondrial matrix

**Overall function:** Oxidize the 2-carbon acetyl group from acetyl-CoA, releasing CO$_2$ and capturing energy as NADH, FADH$_2$, and a small amount of ATP.
      `
    },
    {
      id: 'cr4-steps',
      type: 'text' as const,
      content: `
### What Goes In, What Comes Out

The cycle is a series of enzyme-catalyzed reactions.  The AP framework excludes memorizing its steps, its intermediate molecules, and its enzyme names, so focus on the inputs, the outputs, and why it is a *cycle*:

- Each turn, a 2-carbon acetyl group joins a 4-carbon acceptor molecule that is already in the matrix.
- Over the rest of the turn, **2 carbons leave as CO$_2$**, electrons are transferred to NAD$^+$ and FAD, and one ATP is made by substrate-level phosphorylation.
- The turn ends by **regenerating the 4-carbon acceptor**, ready for the next acetyl group.  Because the acceptor is remade every turn, a small amount of it can process a large amount of fuel.

**Per acetyl-CoA (one turn):**
- 2 CO$_2$ released
- 3 NADH produced
- 1 FADH$_2$ produced
- 1 ATP produced

**Per glucose (two turns):**
- 4 CO$_2$, 6 NADH, 2 FADH$_2$, 2 ATP

> **Carbon check:** The 4 CO$_2$ from the citric acid cycle plus the 2 CO$_2$ from pyruvate oxidation = 6 CO$_2$ total, matching the 6 carbons in the original glucose.
      `
    },
    {
      id: 'cr4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Citric Acid Cycle Outputs
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the citric acid cycle described as a "cycle"?',
            options: [
              'Its reactions run forward and then in reverse each turn',
              'The molecule that accepts each acetyl group is regenerated',
              'Its CO2 is recycled back into glucose within the matrix',
              'It runs only once per glucose molecule'
            ],
            correctAnswer: 1,
            explanation: 'Each turn begins when an acetyl group joins a 4-carbon acceptor and ends when that 4-carbon acceptor is regenerated. Because the starting molecule is remade, the sequence repeats as long as acetyl-CoA is supplied.'
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
            explanation: 'Two CO2 molecules are released per turn. They account for the two carbons that entered as the acetyl group. Two turns per glucose release 4 CO2.'
          },
          {
            question: 'Besides NADH, which reduced electron carrier does the citric acid cycle produce?',
            options: [
              'FADH2',
              'NADPH',
              'Acetyl-CoA',
              'Pyruvate'
            ],
            correctAnswer: 0,
            explanation: 'Each turn of the citric acid cycle produces FADH2 as well as NADH, and both carry electrons to the electron transport chain. NADPH is made in the light reactions of photosynthesis, while acetyl-CoA and pyruvate are carbon compounds, not electron carriers.'
          }
        ]
      }
    },
    {
      id: 'cr4-regulation',
      type: 'text' as const,
      content: `
### Where the Energy Goes, and Other Fuels

By the end of the citric acid cycle, all six carbons of glucose have been released as CO$_2$, yet only **4 ATP** have been made so far (2 in glycolysis, 2 in the cycle).  Where is the rest of the energy?  It is held in the high-energy electrons carried by **NADH and FADH$_2$**.  The electron transport chain (Part 5) converts that energy into most of the cell's ATP.

**The cycle is controlled by the cell's energy status.**  When ATP and NADH are plentiful, the cycle slows; when they are being used up, it speeds up.  This is the same feedback logic as glycolysis.

**Other macromolecules feed the same pathway.**  Cellular respiration uses energy from biological macromolecules, not only glucose:
- **Fats** are broken into 2-carbon units that enter as acetyl-CoA, which is why fats store so much energy per gram
- **Proteins** are broken into amino acids; after the nitrogen is removed, their carbon skeletons can enter glycolysis or the cycle
- **Carbohydrates** other than glucose are converted into molecules that enter glycolysis

Because so many fuels converge here, the cycle is often called a **metabolic hub**.
      `
    },
    {
      id: 'cr4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Energy and Integration
      `,
      exercise: {
        questions: [
          {
            question: 'The citric acid cycle is called a "metabolic hub" because:',
            options: [
              'It processes only glucose, never fats, proteins, or amino acids',
              'It produces more ATP than glycolysis, fermentation, and oxidative phosphorylation',
              'Carbon from carbohydrates, fats, and proteins can all enter it',
              'It runs in every metabolic compartment of the cell at once'
            ],
            correctAnswer: 2,
            explanation: 'Fats, proteins, and carbohydrates can all be broken down into molecules that enter glycolysis or the citric acid cycle, so carbon from many fuels converges on this pathway.'
          },
          {
            question: 'After the citric acid cycle, only 4 ATP have been made from one glucose. Where is most of the remaining energy from glucose stored at this point?',
            options: [
              'In the CO2 molecules released by the cycle',
              'In the electrons carried by NADH and FADH2',
              'In the oxygen that will accept electrons',
              'In the regenerated 4-carbon acceptor'
            ],
            correctAnswer: 1,
            explanation: 'The glucose carbons leave as CO2, a low-energy molecule. The energy extracted along the way is held in the high-energy electrons of NADH and FADH2, which the electron transport chain uses to build the proton gradient that powers most ATP synthesis.'
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
            question: 'The compartment of the mitochondrion where the citric acid cycle takes place:',
            answer: 'matrix',
            acceptableAnswers: ['matrix', 'Matrix', 'mitochondrial matrix', 'Mitochondrial matrix'],
            placeholder: 'e.g. cristae'
          },
          {
            question: 'The waste gas released as the carbons of glucose are fully oxidized:',
            answer: 'CO2',
            acceptableAnswers: ['CO2', 'co2', 'carbon dioxide', 'Carbon dioxide'],
            placeholder: 'e.g. O2'
          },
          {
            question: 'The 2-carbon molecule that delivers the acetyl group into the cycle:',
            answer: 'acetyl-CoA',
            acceptableAnswers: ['acetyl-CoA', 'Acetyl-CoA', 'acetyl CoA', 'Acetyl CoA', 'acetyl coA'],
            placeholder: 'e.g. pyruvate'
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
            question: 'The electron carrier that the cycle reduces along with NAD+:',
            options: ['ATP', 'NADP+', 'FAD', 'O2'],
            correctAnswer: 'FAD'
          },
          {
            question: 'The number of turns of the cycle per glucose molecule:',
            options: ['1', '2', '3', '6'],
            correctAnswer: '2'
          },
          {
            question: 'How ATP is made directly within the cycle:',
            options: ['Chemiosmosis', 'Substrate-level phosphorylation', 'Photophosphorylation', 'Fermentation'],
            correctAnswer: 'Substrate-level phosphorylation'
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
              'Acetyl-CoA and ATP',
              'CO2 and H2O'
            ],
            correctAnswer: 1,
            explanation: 'Without the ETC, NADH and FADH2 cannot be reoxidized. They accumulate, and without NAD+ and FAD to accept electrons, the citric acid cycle slows and eventually stops.'
          }
        ]
      }
    }
  ]
};
