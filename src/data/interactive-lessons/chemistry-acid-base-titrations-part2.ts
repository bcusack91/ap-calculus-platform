export const chemAcidBaseTitrationsPart2Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at2-intro',
      type: 'text' as const,
      content: `# 📈 Strong Acid–Strong Base Titration Curves

**Part 2 of 7 — Analyzing the S-Shaped Curve**

---

### The Four Regions of a Strong-Strong Titration

| Region | What's Happening | pH Determined By |
|--------|-----------------|-----------------|
| Before equivalence | Excess acid remains | $[H^+]$ from unreacted acid |
| Near equivalence | Rapid pH change | Very small excess of acid/base |
| At equivalence | Complete neutralization | pH = 7.00 (strong-strong only) |
| After equivalence | Excess base added | $[OH^-]$ from excess base |

> 🔑 **Why this matters:** Understanding each region of the curve is essential — the AP exam asks you to calculate pH at specific volumes and interpret the curve shape.

---

### What You'll Master in Part 2
- Sketching the S-shaped titration curve for strong acid–strong base
- Calculating pH at key points before, at, and after equivalence
- Explaining why the equivalence point pH = 7.00 for strong-strong titrations`
    },
    {
      id: 'at2-regions',
      type: 'text' as const,
      content: `
## 📌 Regions of the Curve

Consider titrating 50.0 mL of 0.100 M $HCl$ with 0.100 M $NaOH$:


---

### Region 1: Before Equivalence (0 to ~45 mL)

- Excess $HCl$ present
- $[H^+] = \\frac{\\text{remaining mol } H^+}{\\text{total volume}}$
- pH increases slowly
- Example: After 10.0 mL $NaOH$:
  - Mol $H^+ = 0.0050 - 0.0010 = 0.0040$
  - $[H^+] = 0.0040/0.060 = 0.0667$ M
  - $pH = 1.18$


---

### Region 2: Near Equivalence (~45 to ~55 mL)

- Very little excess acid or base
- pH changes **dramatically** with each drop
- The steep vertical portion of the curve


---

### Region 3: At Equivalence (50.0 mL)

- $pH = 7.00$ exactly
- All $H^+$ and $OH^-$ have reacted
- Only $NaCl$ + $H_2O$ remain

> 🔑 **Key Fact:** Strong acid + strong base → equivalence at pH 7.00 every time.


---

### Region 4: After Equivalence (>50 mL)

- Excess $NaOH$ present
- $[OH^-] = \\frac{\\text{excess mol } OH^-}{\\text{total volume}}$
- pH levels off at high values
      `
    },
    {
      id: 'at2-ph-calculations',
      type: 'text' as const,
      content: `
## 🔢 pH Calculations at Key Points

### Titrating 50.0 mL of 0.100 M $HCl$ with 0.100 M $NaOH$

| Volume $NaOH$ (mL) | Calculation | pH |
|--------------------|-------------|-----|
| 0.0 | $[H^+] = 0.100$ M | 1.00 |
| 25.0 | $[H^+] = 0.00250/0.075 = 0.0333$ | 1.48 |
| 49.0 | $[H^+] = 0.0001/0.099 = 0.00101$ | 3.00 |
| 49.9 | $[H^+] = 0.00001/0.0999 = 1.0 \\times 10^{-4}$ | 4.00 |
| 50.0 | Equivalence point | 7.00 |
| 50.1 | $[OH^-] = 0.00001/0.1001 = 1.0 \\times 10^{-4}$ | 10.00 |
| 51.0 | $[OH^-] = 0.0001/0.101 = 9.9 \\times 10^{-4}$ | 11.00 |
| 75.0 | $[OH^-] = 0.00250/0.125 = 0.0200$ | 12.30 |

Notice: pH jumps from ~4 to ~10 in just 0.2 mL! That\'s the dramatic equivalence point region.

> 💡 **Tip:** On the AP exam, look for the steepest part of the curve — that marks the equivalence point.
      `
    },
    {
      id: 'at2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Titration Curve Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the equivalence point of a strong acid–strong base titration, what is the dominant species?',
            options: [
              'Excess $H^+$',
              'Excess $OH^-$',
              'A conjugate acid-base pair',
              'A neutral salt and water'
            ],
            correctAnswer: 3,
            explanation: 'At equivalence, all acid and base have reacted completely. Only the neutral salt (e.g., $NaCl$) and water remain. Neither $Na^+$ nor $Cl^-$ hydrolyzes, so pH = 7.'
          },
          {
            question: 'Why does pH change so rapidly near the equivalence point?',
            options: [
              'The indicator causes rapid change',
              'Very little excess $H^+$ or $OH^-$ remains, so each drop of titrant has a large effect',
              'The temperature changes rapidly',
              'The reaction reverses direction'
            ],
            correctAnswer: 1,
            explanation: 'Near equivalence, only tiny amounts of excess acid or base remain. Adding a single drop of titrant can change the $[H^+]$ by orders of magnitude, causing a dramatic pH jump.'
          }
        ]
      }
    },
    {
      id: 'at2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Strong Acid–Strong Base Calculations** 🧮

Titrating 25.0 mL of 0.200 M $HCl$ with 0.200 M $NaOH$:

**1)** What is the pH at the start (before adding any $NaOH$)? (2 decimal places)

**2)** What volume of $NaOH$ is needed to reach the equivalence point? (1 decimal place, in mL)

**3)** What is the pH after adding 30.0 mL of $NaOH$? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.70', '25.0', '12.76'],
        hint1: '$pH = -\\log(0.200)$.',
        hint2: 'Equal concentrations, so equal volumes needed.',
        hint3: 'Excess $NaOH$: $0.006 - 0.005 = 0.001$ mol in 55.0 mL total.',
        explanation: '1) $pH = -\\log(0.200) = 0.70$. 2) $V_{NaOH} = (0.200 \\times 25.0)/0.200 = 25.0$ mL. 3) Excess $OH^- = 0.200 \\times 0.0300 - 0.200 \\times 0.0250 = 0.0010$ mol. $[OH^-] = 0.0010/0.0550 = 0.0182$. $pOH = 1.74$. $pH = 12.26$.'
      }
    },
    {
      id: 'at2-curve-features',
      type: 'text' as const,
      content: `
## 📌 Key Features of the Strong–Strong Curve

### Shape Analysis

1. **Initial pH** is low (strong acid) — typically pH 1-2
2. **Gradual rise** as acid is slowly consumed
3. **Steep jump** near equivalence (pH ~3 to ~11)
4. **Equivalence at pH 7** (always for strong-strong)
5. **Gradual leveling** after equivalence


---

### Why pH 7 at Equivalence?

The products are water and a salt of a strong acid/strong base (e.g., $NaCl$, $KNO_3$). These salts are **neutral** — their ions do not react with water (no hydrolysis).

> ⚠️ **Common Mistake:** pH 7 at equivalence ONLY applies to strong acid + strong base. Weak acid or weak base titrations have equivalence pH ≠ 7.


---

### Effect of Concentration

Higher concentrations → steeper jump at equivalence, but equivalence point is still at pH 7.
      `
    },
    {
      id: 'at2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Titration Curve Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The steep region of the curve spans approximately pH',
            options: ['1 to 3', '3 to 11', '7 to 14', '0 to 1']
          },
          {
            label: 'Doubling the concentration of both acid and base will',
            options: ['move equivalence to pH 14', 'make the steep region steeper', 'change equivalence pH', 'have no effect']
          },
          {
            label: 'After the equivalence point, the pH is determined by',
            options: ['excess H⁺', 'excess OH⁻', 'the salt', 'the indicator']
          },
          {
            label: 'For a strong acid-strong base titration, the equivalence point pH is always',
            options: ['acidic', 'basic', 'exactly 7', 'depends on volumes']
          }
        ],
        correctAnswers: ['3 to 11', 'make the steep region steeper', 'excess OH⁻', 'exactly 7'],
        hint1: 'The jump covers a wide pH range near equivalence.',
        hint2: 'Higher concentration = more dramatic pH change per mL.',
        hint3: 'Excess titrant (NaOH) determines post-equivalence pH.',
        explanation: 'The steep jump covers roughly pH 3 to 11. Higher concentration makes the curve steeper. After equivalence, excess $OH^-$ determines pH. For strong-strong, equivalence is always pH 7.'
      }
    },
    {
      id: 'at2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Strong-Strong Curves** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If 50.0 mL of 0.100 M $HCl$ is titrated with 0.200 M $NaOH$, the equivalence point is reached at:',
            options: [
              '25.0 mL of $NaOH$',
              '50.0 mL of $NaOH$',
              '100.0 mL of $NaOH$',
              '12.5 mL of $NaOH$'
            ],
            correctAnswer: 0,
            explanation: 'Mol $HCl = 0.100 \\times 0.050 = 0.005$. $V_{NaOH} = 0.005/0.200 = 0.025$ L $= 25.0$ mL. Since $NaOH$ is more concentrated, less volume is needed.'
          },
          {
            question: 'At the midpoint of a strong acid-strong base titration (half the volume to equivalence), the solution is:',
            options: [
              'A buffer',
              'At pH 7',
              'Still acidic with excess $H^+$',
              'At the equivalence point'
            ],
            correctAnswer: 2,
            explanation: 'At the midpoint, half the acid has been neutralized. The other half remains as excess strong acid. Since $HCl$ is strong (not weak), this is NOT a buffer — it\'s simply a dilute strong acid solution.'
          }
        ]
      }
    }
  ]
}
