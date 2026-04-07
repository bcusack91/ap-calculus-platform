export const chemAcidBaseTitrationsPart6Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Acid-Base Titrations**

This workshop takes you through complete titration calculations — the kind that appear as multi-part free-response questions on the AP Chemistry exam. Practice the full workflow: stoichiometry, equilibrium, buffer calculations, and curve analysis.
      `
    },
    {
      id: 'at6-problem1',
      type: 'text' as const,
      content: `
## Problem 1: Complete Titration Curve Calculations

50.0 mL of 0.200 M $CH_3COOH$ ($K_a = 1.8 \\times 10^{-5}$, $pK_a = 4.74$) is titrated with 0.200 M $NaOH$.

### (a) Initial pH

$$K_a = \\frac{x^2}{0.200} = 1.8 \\times 10^{-5}$$
$$x = \\sqrt{3.6 \\times 10^{-6}} = 1.90 \\times 10^{-3}$$
$$pH = -\\log(1.90 \\times 10^{-3}) = 2.72$$

### (b) After 25.0 mL $NaOH$ (half-equivalence)

$$pH = pK_a = 4.74$$

### (c) Equivalence Point (50.0 mL $NaOH$)

All $HA \\rightarrow A^-$. $[A^-] = 0.0100/0.100 = 0.100$ M

$$K_b = K_w/K_a = 5.56 \\times 10^{-10}$$
$$x = \\sqrt{5.56 \\times 10^{-10} \\times 0.100} = 7.45 \\times 10^{-6}$$
$$pOH = 5.13, \\quad pH = 8.87$$
      `
    },
    {
      id: 'at6-problem1-practice',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Continuing the Titration** 🧮

Same titration: 50.0 mL of 0.200 M $CH_3COOH$ with 0.200 M $NaOH$ ($pK_a = 4.74$)

**1)** After adding 10.0 mL $NaOH$, what is the pH? (Use H-H. 2 decimal places)

**2)** After adding 40.0 mL $NaOH$, what is the pH? (2 decimal places)

**3)** After adding 60.0 mL $NaOH$ (past equivalence), what is the pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.22', '5.36', '12.96'],
        hint1: 'Mol $HA = 0.010 - 0.002 = 0.008$; mol $A^- = 0.002$. $pH = 4.74 + \\log(0.002/0.008)$.',
        hint2: 'Mol $HA = 0.010 - 0.008 = 0.002$; mol $A^- = 0.008$. $pH = 4.74 + \\log(0.008/0.002)$.',
        hint3: 'Excess $NaOH = 0.012 - 0.010 = 0.002$ mol in 110 mL. Find $[OH^-]$, then pH.',
        explanation: '1) $pH = 4.74 + \\log(0.002/0.008) = 4.74 + (-0.60) = 4.14$. 2) $pH = 4.74 + \\log(0.008/0.002) = 4.74 + 0.60 = 5.34$. 3) $[OH^-] = 0.002/0.110 = 0.0182$. $pOH = 1.74$. $pH = 12.26$.'
      }
    },
    {
      id: 'at6-problem2',
      type: 'text' as const,
      content: `
## Problem 2: Unknown Acid Identification

A monoprotic weak acid $HA$ (25.0 mL, 0.100 M) is titrated with 0.100 M $NaOH$. The following data is collected:

| Volume $NaOH$ (mL) | pH |
|--------------------|----|
| 0.0 | 2.37 |
| 12.5 | 3.75 |
| 25.0 | 8.26 |
| 37.5 | 12.52 |

### Analysis:

- **Equivalence point** is at 25.0 mL (equal $M$ and $V$)
- **Half-equivalence** is at 12.5 mL → $pH = pK_a = 3.75$
- $K_a = 10^{-3.75} = 1.8 \\times 10^{-4}$
- **Equivalence pH = 8.26** (> 7, confirms weak acid)

The acid is likely **formic acid** ($HCOOH$, $K_a = 1.8 \\times 10^{-4}$).
      `
    },
    {
      id: 'at6-problem2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Unknown Acid Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A weak acid is titrated with $NaOH$. The pH at the half-equivalence point is 4.74. Which acid could this be?',
            options: [
              'Formic acid ($K_a = 1.8 \\times 10^{-4}$)',
              'Acetic acid ($K_a = 1.8 \\times 10^{-5}$)',
              'Hydrofluoric acid ($K_a = 6.6 \\times 10^{-4}$)',
              'Hydrochloric acid (strong)'
            ],
            correctAnswer: 1,
            explanation: '$pK_a = 4.74$ means $K_a = 10^{-4.74} = 1.8 \\times 10^{-5}$. This matches acetic acid. Formic acid has $pK_a = 3.75$, and $HCl$ is a strong acid (no $pK_a$ in this range).'
          },
          {
            question: 'At point 37.5 mL in the table above, the pH = 12.52. This is because:',
            options: [
              'A buffer is present',
              'The conjugate base is hydrolyzing',
              'Excess $NaOH$ is present (12.5 mL past equivalence)',
              'The acid was actually strong'
            ],
            correctAnswer: 2,
            explanation: 'At 37.5 mL, we are 12.5 mL past the equivalence point (25.0 mL). The excess $NaOH$ dominates: $[OH^-] = 0.00125/0.0625 = 0.020$ M. $pOH = 1.70$. $pH = 12.30$. The high pH is due to excess strong base.'
          }
        ]
      }
    },
    {
      id: 'at6-problem3-input',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Indicator Selection** 🧮

A weak acid $HA$ ($pK_a = 6.50$) is titrated with $NaOH$.

**1)** At the half-equivalence point, pH = ? (2 decimal places)

**2)** The equivalence point will be at pH approximately (choose: <7, =7, or >7). Enter: less, equal, or greater.

**3)** Which indicator should be used? Enter the color-change pH range lower bound for an indicator with $pK_{In}$ matching the equivalence pH of ~10. (1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.50', 'greater', '9.0'],
        hint1: 'Half-equivalence: $pH = pK_a$.',
        hint2: 'Weak acid + strong base → basic at equivalence.',
        hint3: 'Indicator range = $pK_{In} \\pm 1$. If $pK_{In} \\approx 10$, lower bound = 9.',
        explanation: '1) $pH = pK_a = 6.50$. 2) Weak acid + strong base → equivalence pH > 7 (conjugate base hydrolyzes). 3) For equivalence near pH 10, use indicator with $pK_{In} \\approx 10$. Range: $10 \\pm 1 = 9.0$ to $11.0$.'
      }
    },
    {
      id: 'at6-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Workshop Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the start of a weak acid titration, calculate pH using',
            options: ['Henderson-Hasselbalch', 'ICE table with Kₐ', 'excess OH⁻ method', 'pH = 7']
          },
          {
            label: 'In the buffer region, calculate pH using',
            options: ['Henderson-Hasselbalch', 'ICE table with Kₐ', 'excess OH⁻ method', 'pH = 7']
          },
          {
            label: 'At the equivalence point, calculate pH using',
            options: ['Henderson-Hasselbalch', 'ICE table with K_b', 'excess OH⁻ method', 'pH = pKₐ']
          },
          {
            label: 'After the equivalence point, calculate pH using',
            options: ['Henderson-Hasselbalch', 'ICE table with Kₐ', 'excess OH⁻ method', 'pH = 7']
          }
        ],
        correctAnswers: ['ICE table with Kₐ', 'Henderson-Hasselbalch', 'ICE table with K_b', 'excess OH⁻ method'],
        hint1: 'Only weak acid present initially — no conjugate base yet.',
        hint2: 'Both $HA$ and $A^-$ present — a buffer!',
        hint3: 'Only $A^-$ present — it hydrolyzes as a weak base.',
        explanation: 'Initial: ICE with $K_a$ (only $HA$ present). Buffer region: H-H (both $HA$ and $A^-$). Equivalence: ICE with $K_b$ (only $A^-$). After equivalence: excess $OH^-$ dominates.'
      }
    },
    {
      id: 'at6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student titrates 50.0 mL of unknown weak acid with 0.100 M $NaOH$ and reaches the equivalence point at 35.0 mL. The concentration of the acid is:',
            options: [
              '0.050 M',
              '0.070 M',
              '0.100 M',
              '0.143 M'
            ],
            correctAnswer: 1,
            explanation: 'At equivalence: mol acid = mol base. Mol $NaOH = 0.100 \\times 0.0350 = 0.00350$. $[HA] = 0.00350/0.0500 = 0.070$ M.'
          },
          {
            question: 'The AP exam asks: "Sketch the titration curve for a weak base titrated with a strong acid." The curve should:',
            options: [
              'Start at low pH and increase to pH 7',
              'Start at high pH and decrease, with equivalence point below pH 7',
              'Start at pH 7 and decrease',
              'Look identical to a strong acid-strong base titration'
            ],
            correctAnswer: 1,
            explanation: 'Weak base starts at high pH. Adding strong acid decreases pH. At equivalence, only the conjugate acid ($BH^+$) remains — it hydrolyzes to give pH < 7. The curve is an inverted S-shape.'
          }
        ]
      }
    }
  ]
}
