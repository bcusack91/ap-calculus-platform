export const bioMembraneTransportPart6Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'mt6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — Membrane Transport

**Part 6 of 7**

This workshop applies membrane and transport concepts to experimental scenarios and calculations commonly tested on the AP Biology exam.
      `
    },
    {
      id: 'mt6-scenario1',
      type: 'text' as const,
      content: `
### Scenario 1: Dialysis Tubing Experiment

A student fills a dialysis tubing bag (selectively permeable — allows water and small molecules to pass, but not large molecules like starch or protein) with a solution of 5% starch and 2% glucose, then places it in a beaker containing 0% starch and 10% glucose.

**After 30 minutes, the student tests:**

| Substance | Inside bag | Outside bag (beaker) |
|-----------|-----------|---------------------|
| Starch (tested with iodine) | Present | Absent |
| Glucose (tested with Benedict reagent) | Present | Present |
| Bag mass | Increased | — |

**Analysis:**
- Starch molecules are too large to cross the dialysis membrane — they stayed inside
- Glucose molecules are small enough to cross — glucose moved from the beaker (high, 10%) into the bag (low, 2%) by diffusion
- The bag gained mass because water moved in by osmosis (the interior solution had higher total solute concentration initially)
      `
    },
    {
      id: 'mt6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Scenario 1 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'Why was glucose found in the beaker after 30 minutes even though it started at a higher concentration in the beaker?',
            options: [
              'Starch was converted to glucose outside the bag',
              'Glucose diffused in both directions, but the NET movement was from the beaker (10%) into the bag (2%); at 30 minutes, glucose is present in both compartments as it approaches equilibrium',
              'Glucose leaked through pores in the tubing only outward',
              'The tubing is impermeable to glucose'
            ],
            correctAnswer: 1,
            explanation: 'Diffusion is a two-way process. Glucose molecules move randomly in both directions across the membrane. The NET movement is from high to low concentration (beaker to bag). After 30 minutes, glucose is present on both sides as the system approaches equilibrium.'
          },
          {
            question: 'The bag gained mass. This is best explained by:',
            options: [
              'Starch entered the bag from the beaker',
              'Net water movement into the bag by osmosis — the bag contents had a higher total solute concentration (more negative water potential) initially',
              'Glucose accumulating inside the bag made it heavier',
              'The dialysis tubing expanded'
            ],
            correctAnswer: 1,
            explanation: 'The solution inside the bag had starch (5%) plus glucose (initially 2%), while the beaker had only glucose (10%). The total solute concentration inside was higher, meaning the water potential inside was lower. Water moved into the bag by osmosis, increasing its mass.'
          }
        ]
      }
    },
    {
      id: 'mt6-scenario2',
      type: 'text' as const,
      content: `
### Scenario 2: Water Potential Calculation

A student places potato core cylinders into sucrose solutions of different concentrations and measures the percent change in mass after 24 hours:

| Sucrose Molarity | % Change in Mass |
|-----------------|-----------------|
| 0.0 M | +18.0% |
| 0.2 M | +8.0% |
| 0.4 M | -1.0% |
| 0.6 M | -10.0% |
| 0.8 M | -17.0% |
| 1.0 M | -19.0% |

The approximate **isotonic point** (0% change in mass) is at ~0.38 M sucrose — this is the molar concentration of solute inside the potato cells.

At the isotonic point, the water potential of the solution equals the water potential of the potato cells.

For the 0.4 M solution at 22 °C:
$$\\Psi_s = -iCRT = -(1)(0.4)(0.0831)(295) = -9.8 \\text{ bars}$$

Since the potato is in a hypotonic solution at 0.2 M (gains mass), water enters. In a hypertonic solution at 0.6 M (loses mass), water exits.
      `
    },
    {
      id: 'mt6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Scenario 2 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'At 0.0 M sucrose (pure water), the potato gained 18% mass. Why?',
            options: [
              'The potato absorbed sucrose from the water',
              'Pure water has maximum water potential (0 bars); the potato cells have a negative water potential due to dissolved solutes; water moves from high to low water potential — into the cells',
              'The potato expanded due to increased temperature',
              'Starch in the potato attracted water molecules chemically'
            ],
            correctAnswer: 1,
            explanation: 'Pure water has a water potential of 0 bars (the maximum). The potato cells contain dissolved solutes, giving them a negative water potential. Water moves from the solution (higher \u03A8) into the cells (lower \u03A8) by osmosis, causing the potato to gain mass.'
          },
          {
            question: 'If the potato cores were boiled before placing them in the solutions, how would the results differ?',
            options: [
              'Results would be identical',
              'Boiled potato cells would have disrupted membranes, eliminating selective permeability; osmosis could not occur normally, and results would be different (likely much less change in mass)',
              'Boiled potatoes would gain more mass in all solutions',
              'Boiling would increase the solute concentration in potato cells'
            ],
            correctAnswer: 1,
            explanation: 'Boiling denatures membrane proteins and disrupts the phospholipid bilayer, destroying selective permeability. Without intact membranes, osmosis cannot function properly. Solutes would also leak out of the cells, further disrupting the expected results.'
          }
        ]
      }
    },
    {
      id: 'mt6-input',
      type: 'input-boxes' as const,
      content: `
### Apply Your Knowledge
      `,
      exercise: {
        questions: [
          {
            question: 'In the potato experiment, the approximate sucrose concentration that is isotonic to the potato cells (in M):',
            answer: '0.38',
            acceptableAnswers: ['0.38', '0.4', '0.38 M', '0.4 M', 'about 0.4'],
            placeholder: 'e.g. 0.5'
          },
          {
            question: 'At concentrations above the isotonic point, potato cores lost mass because the solution was (hypertonic/hypotonic):',
            answer: 'hypertonic',
            acceptableAnswers: ['hypertonic', 'Hypertonic'],
            placeholder: 'e.g. isotonic'
          }
        ]
      }
    },
    {
      id: 'mt6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Workshop
      `,
      exercise: {
        questions: [
          {
            question: 'E. coli bacteria have a cell wall and live in varying osmotic environments. If placed in distilled water, E. coli will:',
            options: [
              'Lyse immediately like a red blood cell',
              'Swell slightly but survive — the cell wall prevents excessive expansion, similar to a plant cell becoming turgid',
              'Lose water and shrink',
              'The cell wall dissolves'
            ],
            correctAnswer: 1,
            explanation: 'Like plant cells, bacteria have a cell wall that provides structural support. In a hypotonic environment, water enters by osmosis, but the cell wall resists expansion and generates turgor pressure. The cell swells slightly but does not lyse under normal conditions (unlike animal cells which lack a cell wall).'
          },
          {
            question: 'A cell is observed to transport glucose against its concentration gradient using a Na+/glucose symporter. If the extracellular Na+ concentration is reduced to match the intracellular concentration, what happens to glucose transport?',
            options: [
              'Glucose transport increases',
              'Glucose transport stops because the Na+ gradient that provides the driving force has been eliminated',
              'Glucose transport switches to active pumping using ATP',
              'The symporter begins to export glucose instead'
            ],
            correctAnswer: 1,
            explanation: 'The Na+/glucose symporter (SGLT1) is powered by the Na+ gradient — Na+ flows down its gradient, providing energy to move glucose against its gradient. If the Na+ gradient is eliminated, there is no energy source to drive glucose transport, and it stops.'
          }
        ]
      }
    }
  ]
};