export const chemBufferSolutionsHendersonHasselbalchPart3Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf3-intro',
      type: 'text' as const,
      content: `# 📐 The Henderson-Hasselbalch Equation

**Part 3 of 7 — The Master Buffer Equation**

---

### The Henderson-Hasselbalch Equation

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

| Ratio $[A^-]/[HA]$ | $\\log$ term | pH vs p$K_a$ |
|--------------------|------------|--------------|
| 10 : 1 | +1 | pH = p$K_a$ + 1 |
| 1 : 1 | 0 | **pH = p$K_a$** |
| 1 : 10 | −1 | pH = p$K_a$ − 1 |

> 🔑 **Why this matters:** Henderson-Hasselbalch is the single most important equation for buffer calculations — and the ratio shortcut saves enormous time on the AP exam.

---

### What You'll Master in Part 3
- Deriving Henderson-Hasselbalch from the $K_a$ expression
- Using the equation to find pH, p$K_a$, or concentration ratios
- Applying the basic buffer version: pOH = p$K_b$ + log([BH⁺]/[B])`
    },
    {
      id: 'bf3-derivation',
      type: 'text' as const,
      content: `
## 📌 Derivation

Starting from the $K_a$ expression:

$$K_a = \\frac{[H^+][A^-]}{[HA]}$$

Solve for $[H^+]$:

$$[H^+] = K_a \\cdot \\frac{[HA]}{[A^-]}$$

Take $-\\log$ of both sides:

$$-\\log[H^+] = -\\log K_a - \\log\\frac{[HA]}{[A^-]}$$

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

$$\\boxed{pH = pK_a + \\log\\frac{[A^-]}{[HA]}}$$


---

### Key Features

- When $[A^-] = [HA]$: $pH = pK_a + \\log(1) = pK_a$
- When $[A^-] > [HA]$: $pH > pK_a$ (more basic)
- When $[A^-] < [HA]$: $pH < pK_a$ (more acidic)
- The log term adjusts pH relative to $pK_a$

> 🔑 **Key Insight:** The $pK_a$ is the "anchor" of a buffer’s pH. The log ratio just shifts the pH up or down from that anchor.
      `
    },
    {
      id: 'bf3-using-equation',
      type: 'text' as const,
      content: `
## 📌 Using the Henderson-Hasselbalch Equation

### Example 1: Find pH

> **Problem:** A buffer contains 0.30 M $CH_3COOH$ and 0.50 M $CH_3COO^-$. ($pK_a = 4.74$)

**Solution:**

$$pH = 4.74 + \\log\\frac{0.50}{0.30} = 4.74 + \\log(1.67) = 4.74 + 0.22 = 4.96$$


---

### Example 2: Find Ratio

> **Problem:** What ratio of $[A^-]/[HA]$ gives pH = 5.00 for a buffer with $pK_a = 4.74$?

**Solution:**

$$5.00 = 4.74 + \\log\\frac{[A^-]}{[HA]}$$

$$\\log\\frac{[A^-]}{[HA]} = 0.26$$

$$\\frac{[A^-]}{[HA]} = 10^{0.26} = 1.82$$

So you need about 1.8 times more conjugate base than acid.


---

### Example 3: Equal Concentrations

When $[A^-] = [HA]$:

$$pH = pK_a + \\log(1) = pK_a$$

This is a critically important result: **the pH of a buffer with equal concentrations equals the $pK_a$!**

> 🔑 **AP Must-Know:** When $[A^-] = [HA]$, $pH = pK_a$. This is the half-equivalence point during a titration and the point of maximum buffer capacity.
      `
    },
    {
      id: 'bf3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Henderson-Hasselbalch Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer has $pK_a = 6.35$ and $[A^-]/[HA] = 10$. What is the pH?',
            options: [
              '5.35',
              '6.35',
              '7.35',
              '63.5'
            ],
            correctAnswer: 2,
            explanation: '$pH = 6.35 + \\log(10) = 6.35 + 1.00 = 7.35$.'
          },
          {
            question: 'At what ratio of $[A^-]/[HA]$ does pH = $pK_a$?',
            options: [
              '0',
              '1 (equal concentrations)',
              '10',
              '100'
            ],
            correctAnswer: 1,
            explanation: 'When $[A^-] = [HA]$, the ratio is 1, $\\log(1) = 0$, and $pH = pK_a + 0 = pK_a$.'
          },
          {
            question: 'Which buffer has the lowest pH?',
            options: [
              '$pK_a = 4.74$, $[A^-]/[HA] = 0.10$',
              '$pK_a = 4.74$, $[A^-]/[HA] = 1.0$',
              '$pK_a = 4.74$, $[A^-]/[HA] = 10$',
              '$pK_a = 6.35$, $[A^-]/[HA] = 1.0$'
            ],
            correctAnswer: 0,
            explanation: '$pH = 4.74 + \\log(0.10) = 4.74 + (-1.00) = 3.74$. This is the lowest. The other values: 4.74, 5.74, and 6.35.'
          }
        ]
      }
    },
    {
      id: 'bf3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Henderson-Hasselbalch Drill** 🧮

**1)** Buffer: 0.40 M $HF$ and 0.60 M $NaF$ ($pK_a = 3.17$). Find the pH. (2 decimal places)

**2)** What pH does a buffer with $pK_a = 9.25$ and $[NH_3]/[NH_4^+] = 0.50$ have? (2 decimal places)

**3)** For a buffer with $pK_a = 4.74$ at pH = 5.50, what is $[A^-]/[HA]$? (1 decimal place)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.35', '8.95', '5.8'],
        hint1: '$pH = 3.17 + \\log(0.60/0.40)$.',
        hint2: 'For $NH_3/NH_4^+$ buffer: $pH = pK_a(NH_4^+) + \\log([NH_3]/[NH_4^+])$.',
        hint3: '$5.50 = 4.74 + \\log(x)$; solve for $x = 10^{0.76}$.',
        explanation: '1) $pH = 3.17 + \\log(1.50) = 3.17 + 0.18 = 3.35$. 2) $pH = 9.25 + \\log(0.50) = 9.25 + (-0.30) = 8.95$. Note: $pK_a$ of $NH_4^+$ = $14 - pK_b$ = $14 - 4.74 = 9.25$. 3) $\\log(x) = 5.50 - 4.74 = 0.76$; $x = 10^{0.76} = 5.75 \\approx 5.8$.'
      }
    },
    {
      id: 'bf3-for-bases',
      type: 'text' as const,
      content: `
## 🛡️ Henderson-Hasselbalch for Basic Buffers

For a buffer made from a weak base ($NH_3$) and its conjugate acid ($NH_4^+$):

**Method 1: Use $pK_a$ of the conjugate acid**

$$pH = pK_a(NH_4^+) + \\log\\frac{[NH_3]}{[NH_4^+]}$$

where $pK_a(NH_4^+) = 14 - pK_b(NH_3) = 14 - 4.74 = 9.25$

**Method 2: Use $pOH$ form**

$$pOH = pK_b + \\log\\frac{[BH^+]}{[B]}$$

Then $pH = 14 - pOH$.

Both methods give the same answer. Method 1 is usually preferred for consistency.

> 💡 **Tip:** On the AP exam, always convert to $pK_a$ and use Method 1. This avoids sign errors with the $pOH$ form.
      `
    },
    {
      id: 'bf3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Henderson-Hasselbalch Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When $[A^-]/[HA] = 0.1$, pH is $pK_a$ minus',
            options: ['0.1', '1', '10', '0.01']
          },
          {
            label: 'Increasing $[A^-]$ while holding $[HA]$ constant will',
            options: ['decrease pH', 'increase pH', 'not change pH', 'change Kₐ']
          },
          {
            label: 'The Henderson-Hasselbalch equation assumes',
            options: ['strong acid dissociation', 'equilibrium has been reached', 'complete neutralization', 'pH = 7']
          }
        ],
        correctAnswers: ['1', 'increase pH', 'equilibrium has been reached'],
        hint1: '$\\log(0.1) = -1$.',
        hint2: 'Larger ratio means larger log term, higher pH.',
        hint3: 'The equation is derived from the $K_a$ equilibrium expression.',
        explanation: '$\\log(0.1) = -1$, so pH = $pK_a - 1$. More $A^-$ increases the ratio, increasing pH. The equation is derived from the equilibrium expression, so equilibrium must be established.'
      }
    },
    {
      id: 'bf3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Henderson-Hasselbalch** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer is made by mixing 0.20 mol $NH_3$ and 0.30 mol $NH_4Cl$ in 1.0 L. ($pK_b = 4.74$) The pH is:',
            options: [
              '8.90',
              '9.07',
              '9.25',
              '9.43'
            ],
            correctAnswer: 1,
            explanation: '$pK_a(NH_4^+) = 14 - 4.74 = 9.25$. $pH = 9.25 + \\log(0.20/0.30) = 9.25 + \\log(0.667) = 9.25 + (-0.18) = 9.07$.'
          },
          {
            question: 'For an acetic acid buffer ($pK_a = 4.74$) to have pH = 4.74, you need:',
            options: [
              'More acid than conjugate base',
              'More conjugate base than acid',
              'Equal amounts of acid and conjugate base',
              'Only the acid — no conjugate base needed'
            ],
            correctAnswer: 2,
            explanation: '$pH = pK_a + \\log([A^-]/[HA])$. For $pH = pK_a$: $\\log([A^-]/[HA]) = 0$, so $[A^-]/[HA] = 1$. Equal amounts are needed.'
          }
        ]
      }
    }
  ]
}
