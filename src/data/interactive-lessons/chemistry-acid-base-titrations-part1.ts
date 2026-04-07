export const chemAcidBaseTitrationsPart1Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at1-intro',
      type: 'text' as const,
      content: `
# 🧪 Titration Fundamentals

**Part 1 of 7 — Setup, Terminology, and Calculations**

Acid-base titrations are quantitative experiments where a solution of known concentration (the **titrant**) is gradually added to a solution of unknown concentration (the **analyte**) until the reaction is complete. This technique is fundamental to analytical chemistry and AP Chemistry.
      `
    },
    {
      id: 'at1-setup',
      type: 'text' as const,
      content: `
## 🧪 Titration Setup

### Key Components

| Component | Role |
|-----------|------|
| **Titrant** | Solution of known concentration in the buret |
| **Analyte** | Solution of unknown concentration in the flask |
| **Buret** | Delivers titrant precisely |
| **Indicator** | Changes color near equivalence point |
| **Equivalence point** | Stoichiometrically exact amount of titrant added |
| **End point** | Where indicator changes color (ideally ≈ equivalence point) |


---

### The Key Equation

At the equivalence point:

$$n_{acid} = n_{base}$$

$$M_{acid} \\times V_{acid} = M_{base} \\times V_{base}$$

(for 1:1 stoichiometry)

This allows you to calculate the unknown concentration!
      `
    },
    {
      id: 'at1-strong-strong',
      type: 'text' as const,
      content: `
## 🧪 Strong Acid – Strong Base Titration

### The Reaction

$$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$$

The net ionic equation:

$$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$$


---

### Before Equivalence Point

Excess $H^+$ remains → acidic

$$[H^+] = \\frac{\\text{mol } H^+ - \\text{mol } OH^-}{\\text{total volume}}$$


---

### At Equivalence Point

All acid and base have reacted. Only $NaCl$ and $H_2O$ remain.

$$pH = 7.00$$ (neutral — neither ion hydrolyzes)


---

### After Equivalence Point

Excess $OH^-$ remains → basic

$$[OH^-] = \\frac{\\text{mol } OH^- - \\text{mol } H^+}{\\text{total volume}}$$
      `
    },
    {
      id: 'at1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Titration Fundamentals Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the equivalence point of a strong acid–strong base titration:',
            options: [
              'pH < 7',
              'pH = 7',
              'pH > 7',
              'pH cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'At the equivalence point of a strong acid–strong base titration, all $H^+$ and $OH^-$ have reacted. The resulting salt ($NaCl$) does not hydrolyze, so $pH = 7.00$.'
          },
          {
            question: '25.0 mL of 0.100 M $HCl$ is titrated with 0.100 M $NaOH$. The equivalence point is reached after adding:',
            options: [
              '12.5 mL $NaOH$',
              '25.0 mL $NaOH$',
              '50.0 mL $NaOH$',
              '100.0 mL $NaOH$'
            ],
            correctAnswer: 1,
            explanation: '$n_{HCl} = 0.100 \\times 0.0250 = 0.00250$ mol. At equivalence: $n_{NaOH} = 0.00250$ mol. $V = 0.00250/0.100 = 0.0250$ L = 25.0 mL.'
          },
          {
            question: 'The difference between the equivalence point and end point is:',
            options: [
              'They are the same thing',
              'Equivalence point is theoretical stoichiometry; end point is the observed indicator change',
              'End point always occurs before equivalence point',
              'Equivalence point only applies to strong acids'
            ],
            correctAnswer: 1,
            explanation: 'The equivalence point is the exact stoichiometric point. The end point is where the indicator changes color. A good indicator is chosen so these occur as close together as possible.'
          }
        ]
      }
    },
    {
      id: 'at1-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Finding Unknown Concentration

A 25.0 mL sample of $HCl$ of unknown concentration requires 18.5 mL of 0.150 M $NaOH$ to reach the equivalence point. What is $[HCl]$?


---

### Solution

$$n_{NaOH} = 0.150 \\text{ M} \\times 0.0185 \\text{ L} = 2.775 \\times 10^{-3} \\text{ mol}$$

At equivalence: $n_{HCl} = n_{NaOH} = 2.775 \\times 10^{-3}$ mol

$$[HCl] = \\frac{2.775 \\times 10^{-3}}{0.0250} = 0.111 \\text{ M}$$
      `
    },
    {
      id: 'at1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Titration Calculations** 🧮

**1)** 30.0 mL of 0.200 M $NaOH$ is titrated with 0.100 M $HCl$. What volume (mL) of $HCl$ is needed to reach the equivalence point?

**2)** After adding 20.0 mL of 0.100 M $NaOH$ to 40.0 mL of 0.100 M $HCl$, what is the pH? (2 decimal places)

**3)** After the equivalence point, 5.0 mL of excess 0.100 M $NaOH$ has been added to a total volume of 80.0 mL. What is the pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60.0', '1.48', '12.80'],
        hint1: '$M_a V_a = M_b V_b$: $0.100 \\times V = 0.200 \\times 30.0$.',
        hint2: 'Excess $H^+$: mol $H^+ = 0.004 - 0.002 = 0.002$. Total volume = 60.0 mL.',
        hint3: 'Excess $OH^-$: $0.0005$ mol in 80.0 mL. Find $pOH$, then $pH = 14 - pOH$.',
        explanation: '1) $V = (0.200 \\times 30.0)/0.100 = 60.0$ mL. 2) Excess $H^+ = 0.004 - 0.002 = 0.002$ mol in $0.060$ L. $[H^+] = 0.0333$. $pH = -\\log(0.0333) = 1.48$. 3) $[OH^-] = 0.0005/0.080 = 0.00625$. $pOH = 2.20$. $pH = 11.80$.'
      }
    },
    {
      id: 'at1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Titration Setup Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The solution in the buret is called the',
            options: ['analyte', 'titrant', 'indicator', 'buffer']
          },
          {
            label: 'Before the equivalence point of a strong acid-strong base titration (acid in flask), the solution is',
            options: ['acidic', 'neutral', 'basic', 'buffered']
          },
          {
            label: 'At the equivalence point, moles of acid equals',
            options: ['zero', 'moles of base added', 'twice the moles of base', 'moles of indicator']
          }
        ],
        correctAnswers: ['titrant', 'acidic', 'moles of base added'],
        hint1: 'The titrant is added from the buret.',
        hint2: 'Excess acid remains before equivalence.',
        hint3: 'Stoichiometric equivalence means equal moles (for 1:1 reactions).',
        explanation: 'The titrant is in the buret. Before equivalence, excess acid → acidic. At equivalence, moles acid = moles base (complete neutralization).'
      }
    },
    {
      id: 'at1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Titration Fundamentals** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A diprotic acid $H_2SO_4$ is titrated with $NaOH$. If 20.0 mL of 0.100 M $H_2SO_4$ is used, how many moles of $NaOH$ are needed to reach the equivalence point?',
            options: [
              '0.00100 mol',
              '0.00200 mol',
              '0.00400 mol',
              '0.00050 mol'
            ],
            correctAnswer: 2,
            explanation: '$H_2SO_4$ is diprotic: $H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O$. Mol $H_2SO_4 = 0.100 \\times 0.0200 = 0.00200$. Mol $NaOH = 2 \\times 0.00200 = 0.00400$ mol.'
          },
          {
            question: 'Which best describes the pH during a strong acid-strong base titration?',
            options: [
              'pH remains constant throughout',
              'pH changes slowly at first, then rapidly near equivalence, then slowly again',
              'pH increases linearly',
              'pH decreases throughout'
            ],
            correctAnswer: 1,
            explanation: 'The titration curve has an S-shape: pH changes slowly when excess acid/base dominates, but changes very rapidly near the equivalence point where the buffering effect is minimal.'
          }
        ]
      }
    }
  ]
}
