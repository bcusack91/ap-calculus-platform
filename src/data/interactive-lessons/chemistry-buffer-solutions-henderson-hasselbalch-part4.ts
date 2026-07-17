export const chemBufferSolutionsHendersonHasselbalchPart4Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf4-intro',
      type: 'text' as const,
      content: `# 🎯 Buffer Capacity and Effective Range

**Part 4 of 7 — How Much Can a Buffer Handle?**

---

### Buffer Capacity and Range

| Factor | Effect on Buffer Capacity |
|--------|--------------------------|
| Higher concentrations of HA and $A^{-}$ | Greater capacity (more moles to neutralize) |
| Equal concentrations of HA and $A^{-}$ | Maximum capacity (pH = p$K_a$) |
| Very unequal ratio (>10:1 or <1:10) | Buffer breaks — outside effective range |

**Effective range: p$K_a$ ± 1**

> 🔑 **Why this matters:** The AP exam tests whether you know the limits of a buffer — not just how to calculate pH, but when the buffer fails.

---

### What You'll Master in Part 4
- Defining buffer capacity and the factors that affect it
- Understanding why the effective range is p$K_a$ ± 1
- Predicting when a buffer has been overwhelmed`
    },
    {
      id: 'bf4-capacity',
      type: 'text' as const,
      content: `
## 🛡️ Buffer Capacity

**Buffer capacity** = the amount of strong acid or base that can be added before the pH changes significantly (usually > 1 unit).


---

### Factors That Affect Capacity

1. **Concentration**: More concentrated buffers have greater capacity
   - 1.0 M buffer > 0.10 M buffer > 0.010 M buffer
   - More moles of $HA$ and $A^-$ = more acid and base can be neutralized

2. **Ratio of components**: Buffers work best when $[A^-] \\approx [HA]$
   - Equal concentrations = maximum capacity in both directions
   - If $[A^-] \\gg [HA]$: good capacity for added acid, poor for added base
   - If $[HA] \\gg [A^-]$: good capacity for added base, poor for added acid


---

### Maximum Capacity

A buffer can neutralize added acid equal to the moles of $A^-$ present, and added base equal to the moles of $HA$ present. Beyond that, the buffer is destroyed.

> 🔑 **Key Rule:** Max acid neutralized = mol $A^-$. Max base neutralized = mol $HA$.
      `
    },
    {
      id: 'bf4-effective-range',
      type: 'text' as const,
      content: `
## 📊 Effective Buffer Range

A buffer is effective when the $[A^-]/[HA]$ ratio stays between **0.1 and 10**:

$$\\frac{[A^-]}{[HA]} = 0.1 \\rightarrow pH = pK_a + \\log(0.1) = pK_a - 1$$

$$\\frac{[A^-]}{[HA]} = 10 \\rightarrow pH = pK_a + \\log(10) = pK_a + 1$$


---

### The Rule

$$\\boxed{\\text{Effective buffer range: } pK_a \\pm 1}$$


---

### Examples

| Buffer System | $pK_a$ | Effective Range |
|--------------|--------|----------------|
| $HF/F^-$ | 3.17 | pH 2.17 – 4.17 |
| $CH_3COOH/CH_3COO^-$ | 4.74 | pH 3.74 – 5.74 |
| $H_2CO_3/HCO_3^-$ | 6.35 | pH 5.35 – 7.35 |
| $NH_4^+/NH_3$ | 9.25 | pH 8.25 – 10.25 |


---

### Why $pK_a \\pm 1$?

Outside this range, one component is less than 10% of the other. There\'s not enough of it to provide meaningful buffering.

> ⚠️ **AP Trap:** If a problem gives you a buffer with $[A^-]/[HA] > 10$ or $< 0.1$, the buffer is outside its effective range and won’t resist pH changes well.
      `
    },
    {
      id: 'bf4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Capacity & Range Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which buffer has greater capacity against added acid?',
            options: [
              '0.10 M $HA$ / 0.10 M $A^-$',
              '0.10 M $HA$ / 0.50 M $A^-$',
              '0.50 M $HA$ / 0.10 M $A^-$',
              'All have equal capacity'
            ],
            correctAnswer: 1,
            explanation: 'Capacity against added acid depends on moles of $A^-$ (the species that reacts with $H^+$). Buffer B has the most $A^-$ (0.50 M), so it has the greatest capacity against acid.'
          },
          {
            question: 'The effective buffer range of a system with $pK_a = 7.20$ is:',
            options: [
              'pH 6.20 – 8.20',
              'pH 0 – 14',
              'pH 7.00 – 7.40',
              'pH 5.20 – 9.20'
            ],
            correctAnswer: 0,
            explanation: 'Effective range = $pK_a \\pm 1 = 7.20 \\pm 1 = 6.20$ to $8.20$.'
          },
          {
            question: 'Doubling the concentration of both buffer components will:',
            options: [
              'Change the pH',
              'Double the buffer capacity without changing pH',
              'Halve the buffer capacity',
              'Change the $K_a$'
            ],
            correctAnswer: 1,
            explanation: 'Doubling both $[HA]$ and $[A^-]$ doubles the moles available but keeps the ratio the same. Since $pH = pK_a + \\log([A^-]/[HA])$, the pH doesn\'t change, but the capacity doubles.'
          }
        ]
      }
    },
    {
      id: 'bf4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Buffer Capacity Calculations** 🧮

A buffer contains 0.40 mol $CH_3COOH$ and 0.60 mol $CH_3COO^-$ in 2.0 L. ($pK_a = 4.74$)

**1)** What is the maximum moles of $HCl$ this buffer can absorb? (2 decimal places)

**2)** What is the maximum moles of $NaOH$ this buffer can absorb? (2 decimal places)

**3)** What is the pH after adding 0.30 mol $NaOH$? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.60', '0.40', '5.62'],
        hint1: 'Max acid = moles of $A^-$ available.',
        hint2: 'Max base = moles of $HA$ available.',
        hint3: 'After adding 0.30 mol $NaOH$: $HA = 0.40 - 0.30 = 0.10$; $A^- = 0.60 + 0.30 = 0.90$.',
        explanation: '1) Max $HCl$ = 0.60 mol (all $A^-$). 2) Max $NaOH$ = 0.40 mol (all $HA$). 3) After: $HA = 0.10$, $A^- = 0.90$. $pH = 4.74 + \\log(0.90/0.10) = 4.74 + 0.95 = 5.69$.'
      }
    },
    {
      id: 'bf4-dilution',
      type: 'text' as const,
      content: `
## 📊 Effect of Dilution on Buffers

Adding water (dilution) to a buffer:

- **Does NOT change pH** (both $[HA]$ and $[A^-]$ decrease by the same factor, so the ratio stays the same)
- **DOES decrease capacity** (fewer moles of each component per liter)

> 🔑 **Key Distinction:** Dilution preserves pH but weakens the buffer. This is a common AP free-response question.


---

### Example

Buffer: 0.50 M $HA$ / 0.50 M $A^-$ in 1.0 L

$pH = pK_a + \\log(0.50/0.50) = pK_a$

Dilute to 2.0 L: 0.25 M $HA$ / 0.25 M $A^-$

$pH = pK_a + \\log(0.25/0.25) = pK_a$ (same!)

But now there\'s half the buffering capacity.
      `
    },
    {
      id: 'bf4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Buffer Range & Capacity Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To buffer at pH 9, you need an acid with $pK_a$ near',
            options: ['3', '7', '9', '14']
          },
          {
            label: 'Adding water to a buffer will',
            options: ['increase pH', 'decrease pH', 'not change pH', 'destroy the buffer']
          },
          {
            label: 'A buffer with $[A^-]/[HA] = 100$ is',
            options: ['very effective', 'outside effective range', 'at its best', 'neutral']
          },
          {
            label: 'To increase buffer capacity without changing pH, you should',
            options: ['add more HA only', 'add more $A^{-}$ only', 'add equal moles of both HA and $A^{-}$', 'add water']
          }
        ],
        correctAnswers: ['9', 'not change pH', 'outside effective range', 'add equal moles of both HA and $A^{-}$'],
        hint1: 'Effective range is $pK_a \\pm 1$; choose $pK_a \\approx$ target pH.',
        hint2: 'Dilution maintains the ratio.',
        hint3: 'Ratio = 100 means $\\log(100) = 2$, so pH = $pK_a + 2$ — outside $pK_a \\pm 1$.',
        explanation: 'Choose $pK_a \\approx 9$ for buffering at pH 9. Dilution doesn\'t change pH (ratio preserved). Ratio of 100 gives pH = $pK_a + 2$ (outside effective range). Adding equal moles of both maintains ratio (same pH) while increasing capacity.'
      }
    },
    {
      id: 'bf4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Buffer Capacity & Range** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer at pH 4.74 ($pK_a = 4.74$) with 0.10 mol each of $HA$ and $A^-$. After adding 0.05 mol $HCl$, the $[A^-]/[HA]$ ratio is:',
            options: [
              '1.00',
              '0.333',
              '3.00',
              '0.50'
            ],
            correctAnswer: 1,
            explanation: '$A^- + H^+ \\rightarrow HA$. $A^-$: $0.10 - 0.05 = 0.05$ mol. $HA$: $0.10 + 0.05 = 0.15$ mol. Ratio = $0.05/0.15 = 0.333$.'
          },
          {
            question: 'Which would be the best buffer for maintaining pH near 7?',
            options: [
              '$CH_3COOH/CH_3COO^-$ ($pK_a = 4.74$)',
              '$H_2PO_4^-/HPO_4^{2-}$ ($pK_a = 7.21$)',
              '$NH_4^+/NH_3$ ($pK_a = 9.25$)',
              '$HCl/NaCl$'
            ],
            correctAnswer: 1,
            explanation: 'Choose a buffer with $pK_a$ closest to the target pH. $H_2PO_4^-/HPO_4^{2-}$ has $pK_a = 7.21$, closest to pH 7. $HCl/NaCl$ is NOT a buffer (HCl is a strong acid).'
          }
        ]
      }
    }
  ]
}
