export const bioCellRespirationPart2Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `
## Glycolysis — Splitting Glucose

**Part 2 of 7**

Glycolysis (from Greek *glykys* = sweet, *lysis* = splitting) is the first stage of cellular respiration.  It is one of the most ancient metabolic pathways: it runs in Archaea, Bacteria, and Eukarya alike, and the AP framework cites it as a **core metabolic pathway conserved across all domains** — evidence for the common ancestry of all organisms.

**Key facts:**
- Location: **Cytoplasm** (cytosol)
- Does **not** require oxygen
- Converts one 6-carbon glucose into two 3-carbon **pyruvate** molecules
- Net yield: **2 ATP** and **2 NADH** per glucose
      `
    },
    {
      id: 'cr2-phases',
      type: 'text' as const,
      content: `
### Inputs, Outputs, and the Two Phases

Glycolysis is a sequence of enzyme-catalyzed reactions in which the product of each step is the reactant for the next.  You do **not** need the individual steps, intermediates, or enzyme names for the AP exam (they are excluded by the framework).  What you need is the logic of the pathway:

**Energy investment phase:** The cell *spends* 2 ATP to add phosphate groups to the sugar.  This makes the sugar more reactive and traps it inside the cell.  The 6-carbon sugar is then split into two 3-carbon molecules.

**Energy payoff phase:** Each 3-carbon molecule is oxidized.  Its electrons reduce NAD$^+$ to **NADH**, and phosphate groups are transferred directly to ADP, making ATP by **substrate-level phosphorylation**.  Because there are two 3-carbon molecules, everything in this phase happens **twice** per glucose.

**Net accounting per glucose:**

| Item | Invested | Produced | Net |
|------|----------|----------|-----|
| ATP | -2 | +4 | **+2** |
| NADH | 0 | +2 | **+2** |
| Pyruvate | 0 | +2 | **+2** |

Most of the chemical energy of the original glucose is still stored in the two pyruvate molecules and the two NADH.  The later stages exist to harvest it.
      `
    },
    {
      id: 'cr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Logic of Glycolysis
      `,
      exercise: {
        questions: [
          {
            question: 'Glycolysis produces 4 ATP but has a net yield of only 2 ATP. Why?',
            options: [
              '2 ATP are consumed to carry pyruvate into the mitochondria',
              '2 ATP are spent early on to phosphorylate the sugar',
              '2 ATP are broken down to supply the energy to make NADH',
              '2 ATP remain attached to pyruvate at the end of the pathway'
            ],
            correctAnswer: 1,
            explanation: 'The energy investment phase spends 2 ATP to phosphorylate the sugar. The payoff phase makes 4 ATP by substrate-level phosphorylation. Gross = 4 ATP, investment = 2 ATP, net = 2 ATP.'
          },
          {
            question: 'Why does everything in the energy payoff phase of glycolysis happen twice for each glucose molecule?',
            options: [
              'Two glucose molecules always enter glycolysis together',
              'The 6-carbon sugar is split into two 3-carbon molecules',
              'Each glycolytic enzyme has two active sites that act at once',
              'The payoff phase repeats to repay the ATP spent earlier in the investment phase'
            ],
            correctAnswer: 1,
            explanation: 'During the investment phase the 6-carbon sugar is split into two 3-carbon molecules. Each one passes through the payoff phase, so each payoff reaction occurs twice per glucose.'
          },
          {
            question: 'Glycolysis occurs in nearly all living organisms, including bacteria and archaea that live without oxygen. What does this best support?',
            options: [
              'Glycolysis evolved recently, after oxygen built up in the air',
              'The pathway arose once, in an early common ancestor',
              'Glycolysis requires mitochondria, so all cells must have them',
              'Prokaryotes copied glycolysis from eukaryotic cells'
            ],
            correctAnswer: 1,
            explanation: 'A pathway shared by all three domains, and one that needs neither oxygen nor membrane-bound organelles, most likely arose once in a common ancestor before the atmosphere held much oxygen. Its wide conservation is evidence for common ancestry.'
          }
        ]
      }
    },
    {
      id: 'cr2-regulation',
      type: 'text' as const,
      content: `
### Matching Glycolysis to the Cell's Needs

The rate of glycolysis is controlled so that it matches the cell's demand for ATP.  The key idea is **feedback inhibition**:

- When ATP is **plentiful**, ATP binds an allosteric site on an early enzyme of glycolysis and **slows** the pathway.  This prevents wasteful breakdown of glucose.
- When ATP is being **used up** quickly (and ADP and AMP build up), that inhibition is relieved and glycolysis **speeds up**.

This is the same pattern you saw with enzymes in general: an end product of a pathway inhibits an earlier step.  Noncompetitive (allosteric) inhibitors bind away from the active site and change the enzyme's shape and activity.

**NAD$^+$ is the other limit.**  Glycolysis needs a steady supply of NAD$^+$ to accept electrons.  A cell has only a small pool of NAD$^+$, so if NADH is not oxidized back to NAD$^+$ (by the electron transport chain or by fermentation), glycolysis stops.
      `
    },
    {
      id: 'cr2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Regulation
      `,
      exercise: {
        questions: [
          {
            question: 'A cell has very high ATP levels. How will this affect glycolysis?',
            options: [
              'It speeds up, because ATP activates the early enzymes of glycolysis',
              'It slows down, because ATP inhibits an early enzyme of the pathway',
              'It stops permanently, because excess ATP denatures the enzymes',
              'There is no effect, since glycolysis does not respond to ATP levels'
            ],
            correctAnswer: 1,
            explanation: 'High ATP binds an allosteric site on an early glycolytic enzyme and inhibits it, slowing the pathway. This is feedback inhibition: the cell already has enough energy, so it does not break down more glucose.'
          },
          {
            question: 'Cells are placed in a solution that blocks every route for turning NADH back into NAD+. What happens to glycolysis?',
            options: [
              'Nothing changes, since glycolysis makes its own supply of NAD+',
              'It soon stops, because no NAD+ is left to accept electrons',
              'It speeds up as NADH builds up in the cytosol',
              'It switches to producing NADPH instead'
            ],
            correctAnswer: 1,
            explanation: 'Glycolysis reduces NAD+ to NADH. The cell has a limited pool of NAD+, so if NADH cannot be oxidized back to NAD+ by the electron transport chain or by fermentation, the pool runs out and glycolysis stops.'
          }
        ]
      }
    },
    {
      id: 'cr2-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Glycolysis
      `,
      exercise: {
        questions: [
          {
            question: 'The 3-carbon product of glycolysis that proceeds to the next stage of respiration:',
            answer: 'pyruvate',
            acceptableAnswers: ['pyruvate', 'Pyruvate', 'pyruvic acid', 'Pyruvic acid'],
            placeholder: 'e.g. acetaldehyde'
          },
          {
            question: 'The electron carrier (in its oxidized form) that glycolysis needs a constant supply of:',
            answer: 'NAD+',
            acceptableAnswers: ['NAD+', 'nad+', 'NAD', 'nad'],
            placeholder: 'e.g. FAD'
          },
          {
            question: 'The net number of ATP molecules produced per glucose during glycolysis:',
            answer: '2',
            acceptableAnswers: ['2', 'two', 'Two'],
            placeholder: 'e.g. 4'
          }
        ]
      }
    },
    {
      id: 'cr2-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Glycolysis Concept
      `,
      exercise: {
        questions: [
          {
            question: 'The phase where ATP is consumed to phosphorylate glucose is the:',
            options: ['Energy payoff phase', 'Energy investment phase', 'Oxidation phase', 'Reduction phase'],
            correctAnswer: 'Energy investment phase'
          },
          {
            question: 'The type of phosphorylation that produces ATP in glycolysis is:',
            options: ['Oxidative phosphorylation', 'Photophosphorylation', 'Substrate-level phosphorylation', 'Chemiosmosis'],
            correctAnswer: 'Substrate-level phosphorylation'
          },
          {
            question: 'The type of control in which ATP slows an early step of glycolysis is:',
            options: ['Feedback inhibition', 'Positive feedback', 'Competitive inhibition', 'Denaturation'],
            correctAnswer: 'Feedback inhibition'
          }
        ]
      }
    },
    {
      id: 'cr2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Glycolysis Mastery
      `,
      exercise: {
        questions: [
          {
            question: 'A yeast cell is placed in an anaerobic environment with abundant glucose. Which of the following will it still be able to perform?',
            options: [
              'Oxidative phosphorylation',
              'The citric acid cycle',
              'Glycolysis',
              'Pyruvate oxidation'
            ],
            correctAnswer: 2,
            explanation: 'Glycolysis does not require oxygen and occurs in the cytoplasm. In anaerobic conditions, the cell can still perform glycolysis, followed by fermentation to regenerate NAD+ for continued glycolysis.'
          },
          {
            question: 'Two flasks of yeast receive equal glucose. Flask 1 is kept at 2 °C and Flask 2 at 30 °C. After 30 minutes, Flask 2 has made far more CO2. Which explanation is best supported?',
            options: [
              'The cold permanently denatured the yeast enzymes in Flask 1',
              'Faster molecular motion makes enzyme-substrate collisions more frequent',
              'At 2 °C the yeast stop glycolysis and make their own glucose instead',
              'Glucose cannot dissolve in water that is close to freezing'
            ],
            correctAnswer: 1,
            explanation: 'Up to the optimum, higher temperature increases molecular motion and the frequency of enzyme-substrate collisions, so the enzyme-catalyzed reactions that release CO2 run faster. Cold slows enzymes without denaturing them, and glucose still dissolves at 2 °C.'
          }
        ]
      }
    }
  ]
};
