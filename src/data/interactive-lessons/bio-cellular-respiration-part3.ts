export const bioCellRespirationPart3Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cr3-intro',
      type: 'text' as const,
      content: `
## Pyruvate Oxidation — The Bridge Step

**Part 3 of 7**

After glycolysis, each glucose molecule has been converted into two molecules of **pyruvate** in the cytoplasm.  What happens next depends on whether oxygen is available:

- **With oxygen:** pyruvate is transported from the cytosol into the **mitochondrion**, where it is oxidized and its carbons feed the citric acid cycle.
- **Without oxygen:** pyruvate stays in the cytosol and is used in **fermentation**, which regenerates NAD$^+$ so glycolysis can keep going.

This part covers both paths.
      `
    },
    {
      id: 'cr3-reaction',
      type: 'text' as const,
      content: `
### Pyruvate Oxidation in the Mitochondrial Matrix

Pyruvate is carried across the mitochondrial membranes by a transport protein and enters the **matrix**.  There it is oxidized in a single linked process:

1. One carbon is removed and released as **CO$_2$** — the first CO$_2$ released in respiration
2. The remaining 2-carbon fragment is oxidized, and NAD$^+$ is reduced to **NADH**
3. The 2-carbon fragment is attached to a carrier, forming **acetyl-CoA**, which enters the citric acid cycle

$$\\text{Pyruvate} + \\text{NAD}^+ \\longrightarrow \\text{acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$

**Per glucose (2 pyruvates):**
- 2 CO$_2$ released
- 2 NADH produced
- 2 acetyl-CoA formed
- **0 ATP** produced directly

The CO$_2$ released here (and in the citric acid cycle) is ultimately exhaled.  This is literally where the carbon in your food becomes the carbon dioxide in your breath, and it is how carbon returns to the atmosphere in the **carbon cycle**.

> **Why the location matters:** this step, the citric acid cycle, and the electron transport chain all depend on intact mitochondria.  If pyruvate cannot get into the mitochondrion, aerobic respiration beyond glycolysis cannot happen.
      `
    },
    {
      id: 'cr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Pyruvate Oxidation
      `,
      exercise: {
        questions: [
          {
            question: 'What are the three products of pyruvate oxidation (per pyruvate molecule)?',
            options: [
              'Acetyl-CoA, ATP, and O2',
              'Acetyl-CoA, NADH, and CO2',
              'Acetyl-CoA, FAD, and O2',
              'Lactate, ATP, and NADH'
            ],
            correctAnswer: 1,
            explanation: 'Each pyruvate loses one carbon as CO2, its remaining 2-carbon fragment is oxidized (reducing NAD+ to NADH), and that fragment is attached to a carrier to form acetyl-CoA. No ATP is produced directly.'
          },
          {
            question: 'During pyruvate oxidation, NAD+ is converted to NADH. What does this show about pyruvate?',
            options: [
              'Pyruvate gains electrons, so it is reduced',
              'Pyruvate loses electrons, so it is oxidized',
              'Pyruvate gains a phosphate group from ATP during the step',
              'Pyruvate neither gains nor loses electrons in this step'
            ],
            correctAnswer: 1,
            explanation: 'NAD+ is reduced to NADH by accepting electrons. Those electrons come from the carbon fragment derived from pyruvate, so pyruvate is oxidized. Oxidation is loss of electrons.'
          },
          {
            question: 'Where specifically does pyruvate oxidation occur?',
            options: [
              'Cytoplasm',
              'Inner mitochondrial membrane',
              'Mitochondrial matrix',
              'Intermembrane space'
            ],
            correctAnswer: 2,
            explanation: 'Pyruvate made in the cytosol is transported into the mitochondrion, and its oxidation to acetyl-CoA takes place in the mitochondrial matrix.'
          }
        ]
      }
    },
    {
      id: 'cr3-fermentation',
      type: 'text' as const,
      content: `
### The Anaerobic Alternative: Fermentation

When oxygen is absent, the electron transport chain cannot operate, NADH cannot be reoxidized, and the citric acid cycle stalls.  Without NAD$^+$ regeneration, glycolysis would also stop.

**Fermentation** solves this problem by regenerating NAD$^+$ without using the electron transport chain.  The AP framework states that respiration and fermentation are characteristic of all forms of life, and that fermentation produces organic molecules such as **alcohol** and **lactic acid**.

**Lactic acid fermentation:**
$$\\text{Pyruvate} + \\text{NADH} \\longrightarrow \\text{Lactate} + \\text{NAD}^+$$
- Occurs in animal muscle cells during intense exercise and in certain bacteria (e.g., *Lactobacillus* in yogurt production)
- No CO$_2$ is released

**Alcoholic (ethanol) fermentation:**
$$\\text{Pyruvate} + \\text{NADH} \\longrightarrow \\text{Ethanol} + \\text{CO}_2 + \\text{NAD}^+$$
- Occurs in yeast and some bacteria
- Releases CO$_2$ (the bubbles in bread dough and in the yeast fermentation lab)

| Pathway | Final electron acceptor | ATP per glucose |
|---------|------------------------|-----------------|
| Aerobic respiration | O$_2$ | about 30-32 |
| Anaerobic respiration (some prokaryotes) | Another inorganic molecule | fewer than aerobic |
| Fermentation | An organic molecule made from pyruvate | 2 (glycolysis only) |

> **Key Point:** Fermentation does NOT produce additional ATP beyond the 2 ATP from glycolysis. Its sole purpose is to regenerate NAD$^+$ so that glycolysis can continue.
      `
    },
    {
      id: 'cr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Fermentation
      `,
      exercise: {
        questions: [
          {
            question: 'What is the primary purpose of fermentation?',
            options: [
              'To produce large amounts of ATP without oxygen',
              'To regenerate NAD+ so glycolysis can continue',
              'To convert pyruvate into amino acids for growth',
              'To produce oxygen for the electron transport chain'
            ],
            correctAnswer: 1,
            explanation: 'Fermentation regenerates NAD+ from NADH by transferring electrons to pyruvate (or a molecule made from it). This allows glycolysis to continue producing 2 ATP per glucose even without oxygen.'
          },
          {
            question: 'A student measures CO2 released by yeast in sealed tubes with sugar and no oxygen. Which result is expected, and why?',
            options: [
              'No CO2, because CO2 is only made by the citric acid cycle',
              'CO2 is given off, because alcoholic fermentation produces it',
              'No CO2, because yeast carry out lactic acid fermentation',
              'CO2 is absorbed, because yeast fix it into sugar in the dark'
            ],
            correctAnswer: 1,
            explanation: 'Yeast in the absence of oxygen carry out alcoholic fermentation, which converts pyruvate to ethanol and releases CO2. Lactic acid fermentation (in muscle and some bacteria) releases no CO2.'
          }
        ]
      }
    },
    {
      id: 'cr3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Pyruvate Oxidation and Fermentation
      `,
      exercise: {
        questions: [
          {
            question: 'The 2-carbon molecule that enters the citric acid cycle after pyruvate is oxidized:',
            answer: 'acetyl-CoA',
            acceptableAnswers: ['acetyl-CoA', 'Acetyl-CoA', 'acetyl CoA', 'Acetyl CoA', 'acetyl coA'],
            placeholder: 'e.g. lactate'
          },
          {
            question: 'The product of lactic acid fermentation in animal muscle cells:',
            answer: 'lactate',
            acceptableAnswers: ['lactate', 'Lactate', 'lactic acid', 'Lactic acid'],
            placeholder: 'e.g. ethanol'
          },
          {
            question: 'The gas released when pyruvate is oxidized (and during alcoholic fermentation):',
            answer: 'CO2',
            acceptableAnswers: ['CO2', 'co2', 'carbon dioxide', 'Carbon dioxide'],
            placeholder: 'e.g. O2'
          }
        ]
      }
    },
    {
      id: 'cr3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Bridge Step Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Starting from one glucose molecule, how many total CO2 molecules are released during pyruvate oxidation?',
            options: [
              '1',
              '2',
              '4',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Each glucose produces 2 pyruvates in glycolysis. Each pyruvate loses one CO2 during pyruvate oxidation. Therefore, 2 CO2 molecules are released (the remaining 4 CO2 are released during the citric acid cycle).'
          },
          {
            question: 'A researcher adds a chemical that blocks the transport of pyruvate into mitochondria. What will happen in the cell?',
            options: [
              'Glycolysis will stop at once because pyruvate cannot be made',
              'Pyruvate will pile up in the cytosol, favoring fermentation',
              'The citric acid cycle will speed up to compensate for the loss',
              'ATP production will rise through substrate-level phosphorylation'
            ],
            correctAnswer: 1,
            explanation: 'If pyruvate cannot enter the mitochondria, it accumulates in the cytoplasm. The cell may rely on fermentation to regenerate NAD+ and continue glycolysis, but total ATP output drops dramatically.'
          }
        ]
      }
    }
  ]
};
