export const chemBufferSolutionsHendersonHasselbalchPart2Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf2-intro',
      type: 'text' as const,
      content: `# ⚔️ How Buffers Work — Neutralizing Added Acid or Base

**Part 2 of 7 — Quantitative Buffer Calculations**

---

### The Two-Step Buffer Method

| Step | What You Do | Tool |
|------|-------------|------|
| **1. Stoichiometry** | Neutralization: strong acid/base reacts completely with one buffer component | ICE table (in moles) |
| **2. Equilibrium** | Calculate new pH from adjusted [HA]/[$A^{-}$] ratio | Henderson-Hasselbalch |

> 🔑 **Why this matters:** This two-step method is how every buffer problem on the AP exam is solved — master it and you can handle any buffer calculation.

---

### What You'll Master in Part 2
- Setting up stoichiometry tables for buffer + strong acid/base
- Calculating new concentrations after neutralization
- Applying Henderson-Hasselbalch with the updated ratio`
    },
    {
      id: 'bf2-method',
      type: 'text' as const,
      content: `
## 📋 The Two-Step Method

### Step 1: Stoichiometry (Neutralization)

The added strong acid or base reacts **completely** with one buffer component:

**Adding $H^+$:** $A^- + H^+ \\rightarrow HA$ (base component consumed)

**Adding $OH^-$:** $HA + OH^- \\rightarrow A^- + H_2O$ (acid component consumed)

Calculate new moles of $HA$ and $A^-$ after reaction.


---

### Step 2: Equilibrium (Henderson-Hasselbalch)

Use the new amounts to find the new pH:

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

Since both species are in the same volume, you can use **moles** instead of concentrations:

$$pH = pK_a + \\log\\frac{\\text{mol } A^-}{\\text{mol } HA}$$
      `
    },
    {
      id: 'bf2-worked-example-acid',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Adding Strong Acid

> **Problem:** A buffer contains 0.15 mol $CH_3COOH$ and 0.15 mol $CH_3COO^-$ in 1.0 L. What is the pH after adding 0.020 mol $HCl$?
>
> $K_a = 1.8 \\times 10^{-5}$, $pK_a = 4.74$

**Solution:**


---

### Before Addition

$pH = 4.74 + \\log(0.15/0.15) = 4.74 + 0 = 4.74$


---

### Step 1: Stoichiometry

$CH_3COO^- + H^+ \\rightarrow CH_3COOH$

|  | $CH_3COO^-$ | $H^+$ | $CH_3COOH$ |
|--|------------|-------|-----------|
| Before | 0.15 mol | 0.020 mol | 0.15 mol |
| Change | -0.020 | -0.020 | +0.020 |
| After | 0.13 mol | 0 | 0.17 mol |


---

### Step 2: Henderson-Hasselbalch

$$pH = 4.74 + \\log\\frac{0.13}{0.17} = 4.74 + \\log(0.765) = 4.74 + (-0.12) = 4.62$$

The pH only dropped from **4.74 to 4.62** — a change of just **0.12 units**!

Without the buffer, adding 0.020 mol $HCl$ to 1.0 L water would give pH = $-\\log(0.020) = 1.70$ — a change of 5.3 pH units!

> 🔑 **Key Comparison:** Buffer changed pH by **0.12 units**. Without the buffer, the same acid would change pH by **5.3 units**. This is why buffers matter!
      `
    },
    {
      id: 'bf2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Calculation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When $NaOH$ is added to an acetic acid/acetate buffer, which quantity increases?',
            options: [
              'Moles of $CH_3COOH$',
              'Moles of $CH_3COO^-$',
              'Moles of $NaOH$ remaining',
              '$K_a$'
            ],
            correctAnswer: 1,
            explanation: '$CH_3COOH + OH^- \\rightarrow CH_3COO^- + H_2O$. The weak acid is consumed and converted to conjugate base, so moles of $CH_3COO^-$ increase.'
          },
          {
            question: 'In the Henderson-Hasselbalch equation, moles can be used instead of concentrations because:',
            options: [
              'Moles are always more accurate',
              'Both species share the same solution volume, which cancels',
              'Concentrations are not needed for buffers',
              'The equation only works with moles'
            ],
            correctAnswer: 1,
            explanation: '$\\log([A^-]/[HA]) = \\log((n_{A^-}/V)/(n_{HA}/V)) = \\log(n_{A^-}/n_{HA})$. The volume $V$ cancels when taking the ratio.'
          }
        ]
      }
    },
    {
      id: 'bf2-worked-example-base',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Adding Strong Base

> **Problem:** Same buffer: 0.15 mol $CH_3COOH$ and 0.15 mol $CH_3COO^-$ in 1.0 L. What is the pH after adding 0.030 mol $NaOH$?

**Solution:**


---

### Step 1: Stoichiometry

$CH_3COOH + OH^- \\rightarrow CH_3COO^- + H_2O$

|  | $CH_3COOH$ | $OH^-$ | $CH_3COO^-$ |
|--|-----------|--------|------------|
| Before | 0.15 mol | 0.030 mol | 0.15 mol |
| Change | -0.030 | -0.030 | +0.030 |
| After | 0.12 mol | 0 | 0.18 mol |


---

### Step 2: Henderson-Hasselbalch

$$pH = 4.74 + \\log\\frac{0.18}{0.12} = 4.74 + \\log(1.50) = 4.74 + 0.18 = 4.92$$

pH increased from 4.74 to 4.92 — only **0.18 units** despite adding a strong base!
      `
    },
    {
      id: 'bf2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Buffer Calculation Drill** 🧮

A buffer has 0.20 mol $HF$ and 0.20 mol $NaF$ in 1.0 L. ($pK_a = 3.17$)

**1)** What is the initial pH of this buffer? (2 decimal places)

**2)** After adding 0.050 mol $HCl$, how many moles of $F^-$ remain? (2 decimal places)

**3)** What is the pH after adding 0.050 mol $HCl$? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.17', '0.15', '3.05'],
        hint1: '$pH = pK_a + \\log(0.20/0.20) = pK_a + 0$.',
        hint2: '$F^- + H^+ \\rightarrow HF$: 0.20 - 0.050 = 0.15 mol $F^-$.',
        hint3: '$pH = 3.17 + \\log(0.15/0.25)$.',
        explanation: '1) $pH = 3.17 + \\log(1.00) = 3.17$. 2) $F^-$: $0.20 - 0.050 = 0.15$ mol. 3) $HF$: $0.20 + 0.050 = 0.25$ mol. $pH = 3.17 + \\log(0.15/0.25) = 3.17 + (-0.22) = 2.95$.'
      }
    },
    {
      id: 'bf2-buffer-destroyed',
      type: 'text' as const,
      content: `
## 🛡️ When Is a Buffer Destroyed?

A buffer is **destroyed** when all of one component is consumed:

- Adding enough $H^+$ to consume all the $A^-$ → no more base component
- Adding enough $OH^-$ to consume all the $HA$ → no more acid component

> ⚠️ **AP Exam Alert:** After a buffer is destroyed, you must switch to a simple strong acid/base calculation — Henderson-Hasselbalch no longer applies!


---

### Example

Buffer: 0.15 mol $HA$ + 0.15 mol $A^-$

- Adding 0.15 mol $HCl$ → all $A^-$ consumed → buffer destroyed
- Adding 0.20 mol $HCl$ → $A^-$ gone, excess $H^+$ remains → no longer a buffer

After destruction, treat as a simple strong acid or base problem!
      `
    },
    {
      id: 'bf2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Buffer Reaction Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Adding $H^+$ to a buffer converts',
            options: ['HA to $A^{-}$', '$A^{-}$ to HA', '$H_{2}O$ to $OH^{-}$', 'nothing']
          },
          {
            label: 'The pH of a buffer where $[A^-] > [HA]$ is',
            options: ['less than $pK_{a}$', 'equal to $pK_{a}$', 'greater than $pK_{a}$', 'always 7']
          },
          {
            label: 'A buffer is destroyed when',
            options: ['any acid is added', 'one component is completely consumed', 'pH changes at all', 'water is added']
          }
        ],
        correctAnswers: ['$A^{-}$ to HA', 'greater than $pK_{a}$', 'one component is completely consumed'],
        hint1: '$A^- + H^+ \\rightarrow HA$.',
        hint2: '$\\log([A^-]/[HA]) > 0$ when $[A^-] > [HA]$.',
        hint3: 'The buffer needs both components to function.',
        explanation: 'Added $H^+$ converts $A^-$ to $HA$. When $[A^-] > [HA]$, the log term is positive, so pH $> pK_a$. The buffer fails when one component is fully consumed.'
      }
    },
    {
      id: 'bf2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — How Buffers Work** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer with 0.10 mol $HA$ and 0.10 mol $A^-$ has 0.12 mol $NaOH$ added. The result is:',
            options: [
              'A buffer with pH slightly above $pK_a$',
              'A buffer with pH slightly below $pK_a$',
              'Not a buffer — excess $OH^-$ present',
              'Pure water'
            ],
            correctAnswer: 2,
            explanation: '$HA + OH^- \\rightarrow A^- + H_2O$. Only 0.10 mol $HA$ is available, so 0.10 mol $OH^-$ reacts and 0.02 mol $OH^-$ is excess. The buffer is destroyed — treat as an excess strong base problem.'
          },
          {
            question: 'Adding 0.01 mol $NaOH$ to a buffer with 0.50 mol $HA$ and 0.50 mol $A^-$ changes the $[A^-]/[HA]$ ratio from 1.00 to:',
            options: [
              '0.50/0.50 = 1.00 (no change)',
              '0.51/0.49 = 1.04',
              '0.49/0.51 = 0.96',
              '0.60/0.40 = 1.50'
            ],
            correctAnswer: 1,
            explanation: '$HA + OH^- \\rightarrow A^- + H_2O$. $HA$: $0.50 - 0.01 = 0.49$ mol. $A^-$: $0.50 + 0.01 = 0.51$ mol. Ratio = $0.51/0.49 = 1.04$. Very small change!'
          }
        ]
      }
    }
  ]
}
