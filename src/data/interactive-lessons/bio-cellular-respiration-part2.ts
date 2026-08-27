export const bioCellRespirationPart2Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr2-intro',
      type: 'text' as const,
      content: `
## Glycolysis — Splitting Glucose

**Part 2 of 7**

Glycolysis (from Greek *glykys* = sweet, *lysis* = splitting) is the first stage of cellular respiration and is one of the most ancient metabolic pathways — virtually all living organisms perform glycolysis, suggesting it evolved before the atmosphere contained significant oxygen.

**Key facts:**
- Location: **Cytoplasm** (cytosol)
- Does **not** require oxygen (anaerobic)
- Converts one 6-carbon glucose into two 3-carbon **pyruvate** molecules
- Net yield: **2 ATP** and **2 NADH** per glucose
      `
    },
    {
      id: 'cr2-phases',
      type: 'text' as const,
      content: `
### The Two Phases of Glycolysis

Glycolysis consists of **10 enzyme-catalyzed reactions** divided into two phases:

**Phase 1: Energy Investment Phase (Steps 1-5)**

In this phase, the cell *spends* 2 ATP to phosphorylate and rearrange glucose:

1. **Hexokinase** phosphorylates glucose to glucose-6-phosphate (costs 1 ATP)
2. Isomerase converts glucose-6-phosphate to fructose-6-phosphate
3. **Phosphofructokinase (PFK)** phosphorylates fructose-6-phosphate to fructose-1,6-bisphosphate (costs 1 ATP) — *this is the committed step and primary regulatory point*
4. Aldolase splits the 6-carbon sugar into two 3-carbon molecules (G3P and DHAP)
5. Isomerase converts DHAP to G3P — from here, every reaction occurs **twice** (once per G3P)

**Phase 2: Energy Payoff Phase (Steps 6-10)**

Each G3P molecule is oxidized and rearranged, producing ATP and NADH:

6. G3P is oxidized; NAD$^+$ is reduced to **NADH** (×2)
7. Substrate-level phosphorylation produces **1 ATP** per G3P (×2)
8-9. Molecular rearrangements prepare the substrate for the final step
10. **Pyruvate kinase** catalyzes the final substrate-level phosphorylation: **1 ATP** per G3P (×2)

**Net accounting per glucose:**

| Item | Invested | Produced | Net |
|------|----------|----------|-----|
| ATP | -2 | +4 | **+2** |
| NADH | 0 | +2 | **+2** |
| Pyruvate | 0 | +2 | **+2** |
      `
    },
    {
      id: 'cr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Glycolysis Steps
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the phosphofructokinase (PFK) reaction considered the "committed step" of glycolysis?',
            options: [
              'It is the first reaction in the pathway',
              'It produces the first ATP',
              'It is irreversible and commits the sugar to being split — plus PFK is the primary allosteric regulatory enzyme',
              'It is the only step that requires oxygen'
            ],
            correctAnswer: 2,
            explanation: 'PFK catalyzes an irreversible reaction and is allosterically regulated by ATP (inhibitor), AMP (activator), and citrate (inhibitor). Once fructose-1,6-bisphosphate is formed, the cell is committed to completing glycolysis.'
          },
          {
            question: 'Glycolysis produces 4 ATP but has a net yield of only 2 ATP. Why?',
            options: [
              '2 ATP are consumed by the electron transport chain',
              '2 ATP are used during the energy investment phase to phosphorylate the sugar',
              '2 ATP are broken down to produce NADH',
              '2 ATP remain attached to pyruvate'
            ],
            correctAnswer: 1,
            explanation: 'Steps 1 and 3 each consume 1 ATP to phosphorylate the sugar (energy investment phase). Steps 7 and 10 each produce 2 ATP (one per G3P). Gross = 4 ATP, investment = 2 ATP, net = 2 ATP.'
          },
          {
            question: 'After step 4 of glycolysis (aldolase reaction), every subsequent reaction occurs twice per original glucose molecule. Why?',
            options: [
              'Two glucose molecules enter glycolysis simultaneously',
              'The 6-carbon sugar is split into two 3-carbon molecules (G3P)',
              'Each enzyme has two active sites',
              'Isomerase duplicates the G3P molecule'
            ],
            correctAnswer: 1,
            explanation: 'Aldolase cleaves fructose-1,6-bisphosphate into glyceraldehyde-3-phosphate (G3P) and dihydroxyacetone phosphate (DHAP). DHAP is then converted to a second G3P. Each G3P proceeds through steps 6-10 independently.'
          }
        ]
      }
    },
    {
      id: 'cr2-regulation',
      type: 'text' as const,
      content: `
### Regulation of Glycolysis

The rate of glycolysis is tightly controlled to match the energy needs of the cell.  The key regulatory enzyme is **phosphofructokinase (PFK)**, which is allosterically regulated:

| Regulator | Effect on PFK | Biological Logic |
|-----------|--------------|-----------------|
| **ATP** (high) | Inhibits | Cell has plenty of energy — slow down |
| **AMP** (high) | Activates | Cell is running low on energy — speed up |
| **Citrate** (high) | Inhibits | Citric acid cycle is backed up — slow down glycolysis |
| **Fructose-2,6-bisphosphate** | Activates | Hormonal signal (insulin) promotes glucose use |

This is a classic example of **feedback inhibition** — the end product (ATP) inhibits an early enzyme in the pathway, preventing wasteful overproduction.

**Hexokinase** is also regulated: its product, glucose-6-phosphate, acts as a competitive inhibitor. When glycolysis slows (backing up G6P), hexokinase activity decreases, preventing unnecessary glucose phosphorylation.

> **AP Exam Tip:** The AP Biology exam frequently asks about regulatory mechanisms. Remember that PFK is the primary control point of glycolysis, and that ATP is both a *product* of the pathway and an *inhibitor* of PFK — a direct feedback loop.
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
            question: 'A cell has very high ATP levels and low AMP levels. How will this affect glycolysis?',
            options: [
              'Glycolysis will speed up because ATP activates PFK',
              'Glycolysis will slow down because ATP inhibits PFK',
              'Glycolysis will stop completely because ATP inhibits hexokinase',
              'There will be no effect on the rate of glycolysis'
            ],
            correctAnswer: 1,
            explanation: 'High ATP inhibits PFK allosterically, slowing glycolysis. Low AMP means there is no activating signal. The cell has sufficient energy, so there is no need to break down more glucose.'
          },
          {
            question: 'Which molecule serves as a positive allosteric activator of PFK, signaling that the cell needs more energy?',
            options: [
              'ATP',
              'Citrate',
              'AMP',
              'Glucose-6-phosphate'
            ],
            correctAnswer: 2,
            explanation: 'AMP accumulates when ATP is being consumed faster than it is produced (ATP -> ADP -> AMP). High AMP signals energy deficit and activates PFK to speed up glycolysis and ATP production.'
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
            question: 'The primary regulatory enzyme of glycolysis (abbreviation is acceptable):',
            answer: 'PFK',
            acceptableAnswers: ['PFK', 'phosphofructokinase', 'Phosphofructokinase', 'pfk'],
            placeholder: 'e.g. hexokinase'
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
            question: 'The enzyme that catalyzes the committed step of glycolysis is:',
            options: ['Hexokinase', 'Phosphofructokinase', 'Pyruvate kinase', 'Aldolase'],
            correctAnswer: 'Phosphofructokinase'
          },
          {
            question: 'The phase where ATP is consumed to phosphorylate glucose is the:',
            options: ['Energy payoff phase', 'Energy investment phase', 'Oxidation phase', 'Reduction phase'],
            correctAnswer: 'Energy investment phase'
          },
          {
            question: 'The type of phosphorylation that produces ATP in glycolysis is:',
            options: ['Oxidative phosphorylation', 'Photophosphorylation', 'Substrate-level phosphorylation', 'Chemiosmosis'],
            correctAnswer: 'Substrate-level phosphorylation'
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
            question: 'If a mutation inactivated the enzyme aldolase, what would be the direct consequence?',
            options: [
              'Glucose could not be phosphorylated',
              'Fructose-1,6-bisphosphate could not be split into two 3-carbon molecules',
              'Pyruvate could not be converted to acetyl-CoA',
              'NAD+ could not be reduced to NADH'
            ],
            correctAnswer: 1,
            explanation: 'Aldolase catalyzes step 4 — the cleavage of fructose-1,6-bisphosphate into G3P and DHAP. Without aldolase, the 6-carbon intermediate accumulates, and no 3-carbon products are formed for the payoff phase.'
          }
        ]
      }
    }
  ]
};