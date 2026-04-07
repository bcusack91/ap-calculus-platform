export const chemAcidBaseTheoriesPhPart4Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab4-intro',
      type: 'text' as const,
      content: `
# 📊 The pH Scale

**Part 4 of 7 — Measuring Acidity and Basicity**

The pH scale provides a convenient way to express the acidity or basicity of a solution. It converts the wide range of $[H^+]$ values (from $10^0$ to $10^{-14}$ M) into a simple 0–14 scale.
      `
    },
    {
      id: 'ab4-ph-definition',
      type: 'text' as const,
      content: `
## 🔗 pH, pOH, and Their Relationship

### pH Definition

$$pH = -\\log[H^+]$$


---

### pOH Definition

$$pOH = -\\log[OH^-]$$


---

### The Key Relationship

At 25°C:

$$pH + pOH = 14$$

This comes from $K_w$:

$$[H^+][OH^-] = 1.0 \\times 10^{-14}$$

Taking $-\\log$ of both sides:

$$-\\log[H^+] + (-\\log[OH^-]) = -\\log(1.0 \\times 10^{-14})$$

$$pH + pOH = 14$$


---

### Interpreting pH

| pH Range | Solution Type | $[H^+]$ vs $[OH^-]$ |
|----------|--------------|---------------------|
| $pH < 7$ | **Acidic** | $[H^+] > [OH^-]$ |
| $pH = 7$ | **Neutral** | $[H^+] = [OH^-]$ |
| $pH > 7$ | **Basic** | $[H^+] < [OH^-]$ |
      `
    },
    {
      id: 'ab4-calculations',
      type: 'text' as const,
      content: `
## 🔢 pH Calculations

### From $[H^+]$ to pH

**Example:** $[H^+] = 3.2 \\times 10^{-4}$ M

$$pH = -\\log(3.2 \\times 10^{-4}) = -(-3.49) = 3.49$$


---

### From pH to $[H^+]$

**Example:** $pH = 5.60$

$$[H^+] = 10^{-pH} = 10^{-5.60} = 2.5 \\times 10^{-6} \\text{ M}$$


---

### From $[OH^-]$ to pH

**Example:** $[OH^-] = 4.0 \\times 10^{-3}$ M

Step 1: $pOH = -\\log(4.0 \\times 10^{-3}) = 2.40$

Step 2: $pH = 14 - pOH = 14 - 2.40 = 11.60$


---

### The "p" Notation

The prefix "p" always means $-\\log$:

$$pX = -\\log X$$

So $pK_a = -\\log K_a$, $pK_b = -\\log K_b$, $pK_w = -\\log K_w = 14$
      `
    },
    {
      id: 'ab4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**pH Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution has $[H^+] = 1.0 \\times 10^{-3}$ M. What is its pH?',
            options: [
              '3',
              '11',
              '$3.0 \\times 10^{-3}$',
              '-3'
            ],
            correctAnswer: 0,
            explanation: '$pH = -\\log(1.0 \\times 10^{-3}) = -(-3) = 3$. When $[H^+]$ is a perfect power of 10, the pH equals the magnitude of the exponent.'
          },
          {
            question: 'If $pH = 9.0$, what is $[OH^-]$?',
            options: [
              '$1.0 \\times 10^{-9}$ M',
              '$1.0 \\times 10^{-5}$ M',
              '$1.0 \\times 10^{-7}$ M',
              '$5.0$ M'
            ],
            correctAnswer: 1,
            explanation: '$pOH = 14 - 9.0 = 5.0$. $[OH^-] = 10^{-5.0} = 1.0 \\times 10^{-5}$ M.'
          },
          {
            question: 'A solution with $pH = 2$ has an $[H^+]$ that is how many times greater than a solution with $pH = 5$?',
            options: [
              '3 times',
              '30 times',
              '300 times',
              '1000 times'
            ],
            correctAnswer: 3,
            explanation: 'Each pH unit represents a factor of 10. A difference of 3 pH units means $10^3 = 1000$ times the $[H^+]$. $pH = 2: [H^+] = 10^{-2}$; $pH = 5: [H^+] = 10^{-5}$; ratio $= 10^{-2}/10^{-5} = 10^3 = 1000$.'
          }
        ]
      }
    },
    {
      id: 'ab4-sig-figs',
      type: 'text' as const,
      content: `
## 📌 Significant Figures in pH

An important AP Chemistry rule:

> The number of **decimal places** in the pH equals the number of **significant figures** in $[H^+]$.


---

### Examples

| $[H^+]$ | Sig Figs | pH | Decimal Places |
|---------|----------|-----|---------------|
| $1.0 \\times 10^{-4}$ | 2 | 4.00 | 2 |
| $2.5 \\times 10^{-6}$ | 2 | 5.60 | 2 |
| $3.45 \\times 10^{-8}$ | 3 | 7.462 | 3 |

The digits **before** the decimal in pH only indicate the order of magnitude — they don\'t count as sig figs!
      `
    },
    {
      id: 'ab4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**pH Calculation Drill** 🧮

**1)** What is the pH of a solution with $[H^+] = 5.0 \\times 10^{-9}$ M? (2 decimal places)

**2)** What is the $[H^+]$ in a solution with $pH = 4.30$? (Enter in scientific notation, e.g. 5.0e-5)

**3)** What is the pH of a solution with $[OH^-] = 2.0 \\times 10^{-4}$ M? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.30', '5.0e-5', '10.30'],
        hint1: '$pH = -\\log(5.0 \\times 10^{-9})$',
        hint2: '$[H^+] = 10^{-4.30}$',
        hint3: 'First find $pOH = -\\log(2.0 \\times 10^{-4})$, then $pH = 14 - pOH$.',
        explanation: '1) $pH = -\\log(5.0 \\times 10^{-9}) = 8.30$. 2) $[H^+] = 10^{-4.30} = 5.0 \\times 10^{-5}$ M. 3) $pOH = -\\log(2.0 \\times 10^{-4}) = 3.70$; $pH = 14 - 3.70 = 10.30$.'
      }
    },
    {
      id: 'ab4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**pH Scale Understanding** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A solution with pH = 3 is',
            options: ['acidic', 'neutral', 'basic', 'impossible to determine']
          },
          {
            label: 'Lowering pH by 2 units means $[H^+]$ increases by a factor of',
            options: ['2', '20', '100', '200']
          },
          {
            label: 'If pH + pOH = 14, and pH = 12, then pOH =',
            options: ['2', '12', '14', '26']
          },
          {
            label: 'The pH of $1.0 \\times 10^{-7}$ M HCl is closest to',
            options: ['7.0', 'slightly less than 7', '0', '14']
          }
        ],
        correctAnswers: ['acidic', '100', '2', 'slightly less than 7'],
        hint1: '$pH < 7$ is acidic.',
        hint2: 'Each pH unit is a factor of 10; two units = $10^2 = 100$.',
        hint3: '$pOH = 14 - pH$.',
        explanation: 'pH 3 is acidic. 2 pH units = $10^2 = 100\\times$ change in $[H^+]$. $pOH = 14 - 12 = 2$. The $1.0 \\times 10^{-7}$ M HCl adds to the autoionization of water, making $[H^+]$ slightly above $10^{-7}$, so pH is slightly below 7.'
      }
    },
    {
      id: 'ab4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — pH Scale** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solution has $pOH = 3.52$. Its pH is:',
            options: [
              '3.52',
              '10.48',
              '17.52',
              '$3.0 \\times 10^{-4}$'
            ],
            correctAnswer: 1,
            explanation: '$pH = 14 - pOH = 14 - 3.52 = 10.48$. This is a basic solution.'
          },
          {
            question: 'How many significant figures should be reported in the pH of a solution with $[H^+] = 4.72 \\times 10^{-6}$ M?',
            options: [
              '1 (pH = 5)',
              '2 (pH = 5.3)',
              '3 (pH = 5.326)',
              '6 (pH = 5.32607)'
            ],
            correctAnswer: 2,
            explanation: '$[H^+] = 4.72 \\times 10^{-6}$ has 3 significant figures, so the pH should have 3 decimal places: $pH = -\\log(4.72 \\times 10^{-6}) = 5.326$.'
          }
        ]
      }
    }
  ]
}
