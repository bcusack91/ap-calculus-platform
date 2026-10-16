export const chemAcidBaseTitrationsPart4Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at4-intro',
      type: 'text' as const,
      content: `# 🎯 Special Points on the Titration Curve

**Part 4 of 7 — Half-Equivalence, Equivalence, and Beyond**

---

### Critical Points Summary

| Point | Volume of Base | How to Find pH | Key Feature |
|-------|---------------|----------------|-------------|
| Initial | 0 mL | ICE table with $K_a$ | Weak acid equilibrium |
| Half-equivalence | ½ $V_{eq}$ | pH = p$K_a$ | Max buffer capacity |
| Equivalence | $V_{eq}$ | Hydrolysis of conjugate base ($K_b$) | pH > 7 for weak acid |
| After equivalence | > $V_{eq}$ | Excess $[OH^-]$ | Same for all titrations |

> 🔑 **Why this matters:** The AP exam frequently asks you to identify these points on a graph and calculate pH at each — this is high-yield content.

---

### What You'll Master in Part 4
- Finding pH at the half-equivalence, equivalence, and post-equivalence points
- Understanding weak base–strong acid titrations (inverted curves)
- Handling polyprotic acid titrations with multiple equivalence points`
    },
    {
      id: 'at4-critical-points',
      type: 'text' as const,
      content: `
## 📋 Critical Points Summary

For titrating a weak acid $HA$ with strong base $NaOH$:

| Point | Volume of $NaOH$ | What\'s Present | How to Find pH |
|-------|-----------------|----------------|---------------|
| **Initial** | 0 mL | Only $HA$ | ICE table with $K_a$ |
| **Buffer region** | $0 < V < V_{eq}$ | $HA + A^-$ | Henderson-Hasselbalch |
| **Half-equivalence** | $V_{eq}/2$ | $[HA] = [A^-]$ | $pH = pK_a$ |
| **Equivalence** | $V_{eq}$ | Only $A^-$ | ICE with $K_b = K_w/K_a$ |
| **After equivalence** | $V > V_{eq}$ | $A^-$ + excess $OH^-$ | $[OH^-]$ from excess |


---

### The Rule for Equivalence Point pH

| Titration Type | Equivalence pH |
|---------------|----------------|
| Strong acid + Strong base | $= 7$ |
| Weak acid + Strong base | $> 7$ |
| Strong acid + Weak base | $< 7$ |
| Weak acid + Weak base | Depends on relative $K_a$ and $K_b$ |

> 🔑 **Key Pattern:** Equivalence pH tells you the titration type: pH 7 = strong+strong, pH > 7 = weak acid+strong base, pH < 7 = strong acid+weak base.
      `
    },
    {
      id: 'at4-weak-base-strong-acid',
      type: 'text' as const,
      content: `
## 🧪 Weak Base–Strong Acid Titration

When $NH_3$ is titrated with $HCl$:

$$NH_3(aq) + HCl(aq) \\rightarrow NH_4Cl(aq)$$


---

### The Curve Is Inverted!

- **Initial pH**: High (basic — weak base)
- **Buffer region**: Both $NH_3$ and $NH_4^+$ present (pH decreases)
- **Half-equivalence**: $pH = pK_a(NH_4^+) = 9.25$ (from $K_a = K_w/K_b = 5.6 \\times 10^{-10}$)
- **Equivalence point**: Only $NH_4^+$ (a weak acid) → $pH < 7$
- **After equivalence**: Excess $HCl$ → strongly acidic


---

### Key Difference

The curve goes from **high pH to low pH** — a mirror image of the weak acid curve!

> 💡 **Tip:** For weak base titrations, $pH = pK_a$ of the conjugate acid at the half-equivalence point. Use $pK_a = 14 - pK_b$ to convert.
      `
    },
    {
      id: 'at4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Critical Point Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the equivalence point of a weak base–strong acid titration, the pH is:',
            options: [
              'Equal to 7',
              'Greater than 7',
              'Less than 7',
              'Equal to $pK_b$'
            ],
            correctAnswer: 2,
            explanation: 'At equivalence, all $NH_3$ has been converted to $NH_4^+$ (a weak acid). $NH_4^+$ hydrolyzes: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$, producing $H^+$ → pH < 7.'
          },
          {
            question: 'How do you find $K_a$ from a titration curve of a weak acid with strong base?',
            options: [
              'Read the pH at the equivalence point; $K_a = 10^{-pH}$ there',
              'Read the pH at the half-equivalence point; $K_a = 10^{-pH}$',
              'Read the initial pH; that $[H^+]$ equals $K_a$ for any weak acid',
              'Read the volume at equivalence; $K_a$ is moles over that volume'
            ],
            correctAnswer: 1,
            explanation: 'At the half-equivalence point: $[HA] = [A^-]$, so $pH = pK_a$. Therefore $K_a = 10^{-pH}$ at the half-equivalence point. At equivalence only $A^-$ remains, the initial $[H^+]$ equals $\\sqrt{K_a C}$ rather than $K_a$, and the equivalence volume gives the acid\'s moles, not $K_a$.'
          },
          {
            question: 'For the titration of $NH_3$ with $HCl$, the half-equivalence point pH equals:',
            options: [
              '$pK_b$ of $NH_3$',
              '$pK_a$ of $NH_4^+$',
              '7.00 (neutral)',
              'The initial pH of the $NH_3$'
            ],
            correctAnswer: 1,
            explanation: 'At the half-equivalence point of a weak base titration: $[B] = [BH^+]$, and $pH = pK_a$ of the conjugate acid. For $NH_4^+$: $K_a = K_w/K_b = 5.6 \\times 10^{-10}$, so $pK_a = 9.25$. $pK_b$ (4.74) gives the pOH there, not the pH, and the initial pH of 0.10 M $NH_3$ is about 11.1.'
          }
        ]
      }
    },
    {
      id: 'at4-polyprotic',
      type: 'text' as const,
      content: `
## 🧪 Polyprotic Acid Titrations

Polyprotic acids (like $H_2CO_3$, $H_3PO_4$) show **multiple equivalence points**:


---

### Diprotic Acid ($H_2A$) with $NaOH$

**First equivalence point:** $H_2A + NaOH \\rightarrow NaHA + H_2O$

**Second equivalence point:** $NaHA + NaOH \\rightarrow Na_2A + H_2O$

The curve shows **two S-shaped jumps**!


---

### Key Features

- Volume to second equivalence = 2× volume to first equivalence
- First half-equivalence: $pH = pK_{a1}$
- Midpoint between equivalences: $pH = pK_{a2}$
- Each steep region corresponds to one deprotonation

> ⚠️ **Watch Out:** For polyprotic acids, the volume to the second equivalence is always 2× the first. Each proton requires an equal amount of base.

> 💡 **Tip:** On the AP exam, reason qualitatively about which species dominate in each region of a polyprotic curve ($H_2A$ before the first equivalence point, $HA^-$ at it, $A^{2-}$ after the second). Calculating the concentration of every species along the curve is not assessed (CED 8.5 exclusion).


---

### Example: $H_3PO_4$

Three equivalence points (three protons):
- $pK_{a1} = 2.15$, $pK_{a2} = 7.20$, $pK_{a3} = 12.35$
      `
    },
    {
      id: 'at4-input-drill',
      type: 'input-boxes' as const,
      content: `
**Critical Point Calculations** 🧮

50.0 mL of 0.100 M $NH_3$ ($K_b = 1.8 \\times 10^{-5}$, so $K_a$ of $NH_4^+$ $= 5.6 \\times 10^{-10}$) is titrated with 0.100 M $HCl$:

**1)** What volume of $HCl$ is needed for the equivalence point? (1 decimal place, mL)

**2)** What is the pH at the half-equivalence point? (2 decimal places)

**3)** At the equivalence point, the $pH$ is less than 7. What is the $pK_a$ of $NH_4^+$? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50.0', '9.25', '9.25'],
        hint1: 'Equal concentrations → equal volumes.',
        hint2: 'At half-equivalence: $pH = pK_a(NH_4^+) = -\\log K_a$.',
        hint3: '$pK_a = -\\log(5.6 \\times 10^{-10})$.',
        explanation: '1) $V = (0.100 \\times 50.0)/0.100 = 50.0$ mL. 2) $pH = pK_a(NH_4^+) = -\\log(5.6 \\times 10^{-10}) = 9.25$. 3) $pK_a(NH_4^+) = 9.25$, the same value, which is why pH = $pK_a$ at half-equivalence.'
      }
    },
    {
      id: 'at4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Titration Point Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A diprotic acid titrated with NaOH shows',
            options: ['one equivalence point', 'two equivalence points', 'three equivalence points', 'no equivalence point']
          },
          {
            label: 'The pH at the equivalence point of weak acid + strong base is determined by',
            options: ['excess NaOH', 'hydrolysis of $A^{-}$', 'excess HA', 'the indicator']
          },
          {
            label: 'After the equivalence point, the dominant factor controlling pH is',
            options: ['the conjugate base', 'the weak acid', 'excess strong base', 'the buffer']
          }
        ],
        correctAnswers: ['two equivalence points', 'hydrolysis of $A^{-}$', 'excess strong base'],
        hint1: 'Each ionizable proton gives one equivalence point.',
        hint2: 'At equivalence, $A^-$ is the only species that reacts with water.',
        hint3: 'The strong base overwhelms the weak base ($A^-$) once in excess.',
        explanation: 'Diprotic acid = 2 protons = 2 equivalence points. At equivalence, $A^-$ hydrolysis sets pH. After equivalence, excess $NaOH$ dominates.'
      }
    },
    {
      id: 'at4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Special Points** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On a titration curve for a weak acid with strong base, the region with the flattest slope (most gradual pH change) is:',
            options: [
              'Near the initial point',
              'Near the half-equivalence point',
              'Near the equivalence point',
              'After the equivalence point'
            ],
            correctAnswer: 1,
            explanation: 'Near the half-equivalence point, the buffer capacity is at its maximum ($[HA] \\approx [A^-]$). This means added base changes pH the least — the curve is flattest here.'
          },
          {
            question: 'Titrating 0.10 M $H_2CO_3$ ($pK_{a1} = 6.35$, $pK_{a2} = 10.33$) with $NaOH$: at the midpoint between the two equivalence points, pH =',
            options: [
              '6.35',
              '8.34',
              '10.33',
              '16.68'
            ],
            correctAnswer: 2,
            explanation: 'Halfway between the first and second equivalence points, half of the $HCO_3^-$ has been converted to $CO_3^{2-}$, so $[HCO_3^-] = [CO_3^{2-}]$ and $pH = pK_{a2} = 10.33$ — this is the second half-equivalence point. 6.35 is the pH at the first half-equivalence point, 8.34 is the average of the two $pK_a$ values, which is not a half-equivalence point, and 16.68 is their sum without halving.'
          }
        ]
      }
    }
  ]
}
