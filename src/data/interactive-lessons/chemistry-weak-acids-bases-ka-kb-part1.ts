export const chemWeakAcidsBasesKaKbPart1Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Weak Acid Equilibrium

**Part 1 of 7 — The $K_a$ Expression**

Unlike strong acids that dissociate completely, **weak acids** only partially ionize in water. This partial ionization is an **equilibrium process** described by the acid dissociation constant, $K_a$.
      `
    },
    {
      id: 'wk1-weak-acid-equilibrium',
      type: 'text' as const,
      content: `
## 🧪 Weak Acid Dissociation

A generic weak acid $HA$ in water:

$$HA(aq) \\rightleftharpoons H^+(aq) + A^-(aq)$$

The equilibrium expression is:

$$K_a = \\frac{[H^+][A^-]}{[HA]}$$


---

### Key Features

- $K_a$ is **small** (typically $10^{-2}$ to $10^{-12}$) because weak acids are mostly undissociated
- **Larger $K_a$** = stronger weak acid (more dissociation)
- **Smaller $K_a$** = weaker acid (less dissociation)
- Water is omitted from the expression (pure liquid)


---

### Common Weak Acids and Their $K_a$ Values

| Acid | Formula | $K_a$ | $pK_a$ |
|------|---------|-------|--------|
| Hydrofluoric | $HF$ | $6.8 \\times 10^{-4}$ | 3.17 |
| Acetic | $CH_3COOH$ | $1.8 \\times 10^{-5}$ | 4.74 |
| Carbonic | $H_2CO_3$ | $4.3 \\times 10^{-7}$ | 6.37 |
| Hydrocyanic | $HCN$ | $6.2 \\times 10^{-10}$ | 9.21 |

Relative strength: $HF > CH_3COOH > H_2CO_3 > HCN$
      `
    },
    {
      id: 'wk1-pka',
      type: 'text' as const,
      content: `
## 📌 The $pK_a$ Scale

Just as $pH = -\\log[H^+]$, we define:

$$pK_a = -\\log K_a$$


---

### Interpreting $pK_a$

- **Lower $pK_a$** → **stronger** acid (larger $K_a$)
- **Higher $pK_a$** → **weaker** acid (smaller $K_a$)

This is the **inverse** relationship — don\'t mix it up!

| $K_a$ | $pK_a$ | Relative Strength |
|-------|--------|-------------------|
| $10^{-2}$ | 2 | Relatively strong weak acid |
| $10^{-5}$ | 5 | Moderate weak acid |
| $10^{-10}$ | 10 | Very weak acid |


---

### Converting Between $K_a$ and $pK_a$

$$K_a = 10^{-pK_a} \\qquad pK_a = -\\log K_a$$
      `
    },
    {
      id: 'wk1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Weak Acid Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A weak acid with $K_a = 4.0 \\times 10^{-6}$ compared to one with $K_a = 2.0 \\times 10^{-3}$ is:',
            options: [
              'Stronger because its $K_a$ is smaller',
              'Weaker because its $K_a$ is smaller',
              'Equal in strength',
              'Impossible to compare without knowing concentration'
            ],
            correctAnswer: 1,
            explanation: 'A smaller $K_a$ means less dissociation, which means a weaker acid. $4.0 \\times 10^{-6} < 2.0 \\times 10^{-3}$, so the first acid is weaker.'
          },
          {
            question: 'Which of the following is NOT in the $K_a$ expression for $HF$?',
            options: [
              '$[H^+]$',
              '$[F^-]$',
              '$[HF]$',
              '$[H_2O]$'
            ],
            correctAnswer: 3,
            explanation: 'Water is a pure liquid and is not included in the equilibrium expression. $K_a = [H^+][F^-]/[HF]$.'
          },
          {
            question: 'An acid with $pK_a = 3.2$ compared to one with $pK_a = 7.8$ is:',
            options: [
              'Weaker',
              'Stronger',
              'The same strength',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Lower $pK_a$ means larger $K_a$, which means more dissociation = stronger acid. $pK_a = 3.2$ corresponds to $K_a = 6.3 \\times 10^{-4}$, much larger than $pK_a = 7.8$ ($K_a = 1.6 \\times 10^{-8}$).'
          }
        ]
      }
    },
    {
      id: 'wk1-strong-vs-weak',
      type: 'text' as const,
      content: `
## 🧪 Strong vs. Weak Acids: Key Differences

| Property | Strong Acid | Weak Acid |
|----------|-----------|-----------|
| Dissociation | 100% complete | Partial (equilibrium) |
| Arrow in equation | $\\rightarrow$ (single) | $\\rightleftharpoons$ (double) |
| $[H^+]$ | Equal to initial $[HA]$ | Much less than initial $[HA]$ |
| Need $K_a$? | No | Yes |
| pH calculation | Direct: $pH = -\\log C$ | Requires ICE table |
| Conducts electricity | Better (more ions) | Less well (fewer ions) |


---

### Important

At the **same concentration**, a strong acid always has a **lower pH** (more acidic) than a weak acid because more $H^+$ is produced.

For example, 0.10 M $HCl$: $pH = 1.00$

But 0.10 M $CH_3COOH$: $pH = 2.87$ (we\'ll calculate this in Part 2)
      `
    },
    {
      id: 'wk1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Weak Acid Fundamentals** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A weak acid in water reaches',
            options: ['complete dissociation', 'equilibrium with partial dissociation', 'no dissociation', 'complete neutralization']
          },
          {
            label: 'The $K_a$ of a strong acid like $HCl$ is',
            options: ['very small', 'approximately 1', 'very large', 'exactly zero']
          },
          {
            label: 'If $K_a = 1.0 \\times 10^{-5}$, then $pK_a$ is',
            options: ['5', '-5', '9', '0.00001']
          },
          {
            label: 'For weak acids, $[H^+]$ is always',
            options: ['equal to initial acid concentration', 'greater than initial acid concentration', 'less than initial acid concentration', 'zero']
          }
        ],
        correctAnswers: ['equilibrium with partial dissociation', 'very large', '5', 'less than initial acid concentration'],
        hint1: 'Weak acids do not fully dissociate.',
        hint2: 'Strong acids dissociate completely, meaning $K_a$ is extremely large.',
        hint3: '$pK_a = -\\log(1.0 \\times 10^{-5}) = 5$.',
        explanation: 'Weak acids reach equilibrium with only partial dissociation. Strong acids have very large $K_a$ values. $pK_a = -\\log K_a$. Since weak acids don\'t fully dissociate, $[H^+] < [HA]_0$.'
      }
    },
    {
      id: 'wk1-input-practice',
      type: 'input-boxes' as const,
      content: `
**$K_a$ and $pK_a$ Conversions** 🧮

**1)** Convert $K_a = 1.8 \\times 10^{-5}$ to $pK_a$ (3 significant figures)

**2)** Convert $pK_a = 9.21$ to $K_a$ (Enter in scientific notation, e.g. 6.2e-10)

**3)** Rank by acid strength (enter strongest): Acid A ($pK_a = 2.1$), Acid B ($pK_a = 6.5$), Acid C ($pK_a = 4.3$). Enter A, B, or C.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.74', '6.2e-10', 'A'],
        hint1: '$pK_a = -\\log(1.8 \\times 10^{-5})$.',
        hint2: '$K_a = 10^{-9.21}$.',
        hint3: 'Lowest $pK_a$ = strongest acid.',
        explanation: '1) $pK_a = -\\log(1.8 \\times 10^{-5}) = 4.74$. 2) $K_a = 10^{-9.21} = 6.17 \\times 10^{-10} \\approx 6.2 \\times 10^{-10}$. 3) Acid A has the lowest $pK_a$ (2.1), making it the strongest acid.'
      }
    },
    {
      id: 'wk1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Weak Acid Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For the weak acid $HCN$ ($K_a = 6.2 \\times 10^{-10}$), which statement is true about a 0.10 M solution?',
            options: [
              '$[H^+] = 0.10$ M',
              '$[H^+] \\ll 0.10$ M',
              '$[H^+] > 0.10$ M',
              '$[H^+] = 0$ M'
            ],
            correctAnswer: 1,
            explanation: 'With such a small $K_a$, very little $HCN$ dissociates. $[H^+]$ will be much less than 0.10 M. We\'ll calculate the exact value using an ICE table in Part 2.'
          },
          {
            question: 'The $K_a$ expression for $H_2CO_3$ (first dissociation) is:',
            options: [
              '$K_a = [H^+][CO_3^{2-}]/[H_2CO_3]$',
              '$K_a = [H^+][HCO_3^-]/[H_2CO_3]$',
              '$K_a = [H_2CO_3]/[H^+][HCO_3^-]$',
              '$K_a = [H^+][HCO_3^-][H_2O]/[H_2CO_3]$'
            ],
            correctAnswer: 1,
            explanation: 'First dissociation: $H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$. $K_{a1} = [H^+][HCO_3^-]/[H_2CO_3]$. The second dissociation produces $CO_3^{2-}$.'
          }
        ]
      }
    }
  ]
}
