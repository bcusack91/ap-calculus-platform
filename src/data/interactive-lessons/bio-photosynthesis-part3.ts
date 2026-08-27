export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: `
## The Calvin Cycle — Carbon Fixation

**Part 3 of 7**

The Calvin cycle (named after Melvin Calvin, who traced its steps using radioactive $^{14}\\text{C}$) uses the ATP and NADPH produced by the light reactions to fix atmospheric CO$_2$ into organic molecules.  It occurs in the **stroma** of the chloroplast and does not directly require light — though it depends on the light reactions for its energy inputs.
      `
    },
    {
      id: 'ps3-phases',
      type: 'text' as const,
      content: `
### The Three Phases of the Calvin Cycle

The Calvin cycle can be divided into three phases.  For each molecule of CO$_2$ fixed, the cycle uses **3 ATP** and **2 NADPH**.  Three complete turns of the cycle fix 3 CO$_2$ and produce one net molecule of glyceraldehyde-3-phosphate (G3P).

**Phase 1: Carbon Fixation**

The enzyme **RuBisCO** (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes the attachment of CO$_2$ to the 5-carbon sugar **RuBP** (ribulose-1,5-bisphosphate), forming an unstable 6-carbon intermediate that immediately splits into two molecules of **3-PGA** (3-phosphoglycerate):

$$\\text{CO}_2 + \\text{RuBP (5C)} \\longrightarrow 2 \\times \\text{3-PGA (3C)}$$

> RuBisCO is the most abundant protein on Earth, comprising up to 50% of leaf protein.

**Phase 2: Reduction**

3-PGA is phosphorylated by **ATP** and then reduced by **NADPH** to produce **G3P** (glyceraldehyde-3-phosphate):

$$\\text{3-PGA} \\xrightarrow{\\text{ATP}} \\text{1,3-BPG} \\xrightarrow{\\text{NADPH}} \\text{G3P}$$

This is the step that converts the energy of ATP and NADPH into the chemical bonds of an organic molecule.

**Phase 3: Regeneration of RuBP**

Five of every six G3P molecules are rearranged and phosphorylated (using ATP) to regenerate 3 RuBP molecules, allowing the cycle to continue.  Only **one out of every six G3P** molecules represents net carbon gain and exits the cycle.

**Summary for 3 turns of the cycle (3 CO$_2$ fixed):**

| Input | Amount |
|-------|--------|
| CO$_2$ | 3 |
| ATP | 9 |
| NADPH | 6 |

| Output | Amount |
|--------|--------|
| G3P (net) | 1 (a 3-carbon sugar) |
| ADP + P$_i$ | 9 |
| NADP$^+$ | 6 |

Two net G3P molecules (from 6 turns / 6 CO$_2$) can be combined to make one glucose.
      `
    },
    {
      id: 'ps3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Calvin Cycle Steps
      `,
      exercise: {
        questions: [
          {
            question: 'RuBisCO catalyzes the fixation of CO2 by attaching it to which molecule?',
            options: [
              'G3P (glyceraldehyde-3-phosphate)',
              '3-PGA (3-phosphoglycerate)',
              'RuBP (ribulose-1,5-bisphosphate)',
              'Glucose'
            ],
            correctAnswer: 2,
            explanation: 'RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes the carboxylation of RuBP (5C) with CO2, producing an unstable 6C intermediate that immediately splits into two molecules of 3-PGA (3C).'
          },
          {
            question: 'For every 3 CO2 molecules fixed, how many G3P molecules are produced in total, and how many represent net carbon gain?',
            options: [
              '3 total, 1 net',
              '6 total, 1 net',
              '6 total, 6 net',
              '3 total, 3 net'
            ],
            correctAnswer: 1,
            explanation: 'Three turns of the cycle fix 3 CO2 and produce 6 G3P molecules. However, 5 of the 6 must be recycled to regenerate 3 RuBP molecules. Only 1 G3P (3 carbons) represents net organic carbon gain.'
          },
          {
            question: 'In which phase of the Calvin cycle are ATP and NADPH consumed?',
            options: [
              'Carbon fixation only',
              'Reduction (both ATP and NADPH) and regeneration (ATP only)',
              'Reduction only',
              'Carbon fixation and regeneration'
            ],
            correctAnswer: 1,
            explanation: 'ATP and NADPH are both consumed in the reduction phase (converting 3-PGA to G3P). Additional ATP is consumed in the regeneration phase (phosphorylating the 5C sugars to regenerate RuBP). Carbon fixation itself does not require ATP or NADPH.'
          }
        ]
      }
    },
    {
      id: 'ps3-rubisco',
      type: 'text' as const,
      content: `
### RuBisCO: The Most Important (and Imperfect) Enzyme

RuBisCO has a critical flaw: it can react with **O$_2$** as well as CO$_2$.  When O$_2$ binds to RuBP instead of CO$_2$, the process is called **photorespiration**:

$$\\text{RuBP} + \\text{O}_2 \\longrightarrow \\text{3-PGA (3C)} + \\text{Phosphoglycolate (2C)}$$

Phosphoglycolate is toxic and must be recycled in a complex pathway involving the chloroplast, peroxisome, and mitochondrion — **consuming ATP and releasing CO$_2$ without producing useful sugar**.

**Photorespiration:**
- Wastes energy (ATP and NADPH are consumed without net carbon fixation)
- Increases when O$_2$ concentration is high relative to CO$_2$
- Is more severe at **high temperatures** (RuBisCO has lower affinity for CO$_2$ at higher temperatures, and O$_2$ solubility decreases less than CO$_2$ solubility)
- Reduces photosynthetic efficiency by as much as 25-50% in C3 plants on hot days

> **Why does RuBisCO bind O$_2$?** RuBisCO evolved ~3.5 billion years ago when Earth had very little atmospheric O$_2$.  It never needed to distinguish between CO$_2$ and O$_2$.  Today, with ~21% O$_2$ in the atmosphere, this ancient inability to discriminate is a significant liability.
      `
    },
    {
      id: 'ps3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Photorespiration
      `,
      exercise: {
        questions: [
          {
            question: 'Photorespiration is problematic for plants because:',
            options: [
              'It produces too much ATP',
              'It fixes CO2 too efficiently',
              'It consumes ATP and releases CO2 without producing useful organic molecules',
              'It generates too much NADPH'
            ],
            correctAnswer: 2,
            explanation: 'Photorespiration wastes energy: RuBisCO binds O2 instead of CO2, producing phosphoglycolate that must be recycled at the cost of ATP, and CO2 is released without any net carbon fixation. It is a drain on photosynthetic efficiency.'
          },
          {
            question: 'Under which conditions is photorespiration most likely to be a significant problem?',
            options: [
              'Cool temperatures with high CO2',
              'Hot, dry conditions where stomata are closed (high O2:CO2 ratio inside the leaf)',
              'Underwater where O2 is limited',
              'At night when light is absent'
            ],
            correctAnswer: 1,
            explanation: 'When stomata close to prevent water loss (hot, dry conditions), CO2 cannot enter and O2 from photosynthesis accumulates. The rising O2:CO2 ratio favors photorespiration. High temperatures also reduce the CO2 affinity of RuBisCO.'
          }
        ]
      }
    },
    {
      id: 'ps3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Calvin Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The enzyme that catalyzes carbon fixation in the Calvin cycle (full name or common abbreviation):',
            answer: 'RuBisCO',
            acceptableAnswers: ['RuBisCO', 'rubisco', 'Rubisco', 'RUBISCO', 'ribulose-1,5-bisphosphate carboxylase/oxygenase'],
            placeholder: 'e.g. ATP synthase'
          },
          {
            question: 'The 5-carbon molecule that accepts CO2 at the start of the Calvin cycle:',
            answer: 'RuBP',
            acceptableAnswers: ['RuBP', 'rubp', 'ribulose-1,5-bisphosphate', 'ribulose bisphosphate'],
            placeholder: 'e.g. G3P'
          },
          {
            question: 'The wasteful process that occurs when RuBisCO binds O2 instead of CO2:',
            answer: 'photorespiration',
            acceptableAnswers: ['photorespiration', 'Photorespiration', 'photo-respiration'],
            placeholder: 'e.g. glycolysis'
          }
        ]
      }
    },
    {
      id: 'ps3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Calvin Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The Calvin cycle is sometimes called "light-independent" but it typically stops in the dark. Why?',
            options: [
              'It directly requires photons to activate RuBisCO',
              'Without the light reactions, there is no ATP or NADPH to drive the reduction and regeneration phases',
              'CO2 is only available during the day',
              'RuBisCO is denatured in the dark'
            ],
            correctAnswer: 1,
            explanation: 'The Calvin cycle itself does not use light directly, but it depends entirely on the ATP and NADPH produced by the light-dependent reactions. Without these energy inputs, the reduction and regeneration phases cannot proceed, and the cycle stalls.'
          },
          {
            question: 'How many CO2 molecules must be fixed to produce one molecule of glucose?',
            options: [
              '3',
              '6',
              '12',
              '1'
            ],
            correctAnswer: 1,
            explanation: 'Each turn of the Calvin cycle fixes 1 CO2 and produces a net of 1/2 G3P (3C). A glucose molecule (6C) requires 2 G3P, so 6 turns (6 CO2) are needed. This consumes 18 ATP and 12 NADPH.'
          }
        ]
      }
    }
  ]
};