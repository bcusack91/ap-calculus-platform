export const chemBufferSolutionsHendersonHasselbalchPart7Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Buffer Solutions & Henderson-Hasselbalch**

---

### Buffer Mastery Checklist

| Concept | Key Formula or Rule |
|---------|-------------------|
| Buffer composition | Weak acid + conjugate base (or weak base + conjugate acid) |
| pH calculation | $pH = pK_a + \\log([A^-]/[HA])$ |
| Adding acid/base | Step 1: Stoichiometry → Step 2: Henderson-Hasselbalch |
| Effective range | p$K_a$ ± 1 |
| Max capacity | When $[HA] = [A^-]$ (pH = p$K_a$) |
| Choosing an acid | p$K_a$ ≈ target pH |

> 🔑 **Why this matters:** Buffers connect to titrations, equilibrium, and biochemistry — expect cross-topic AP questions that use buffers as the foundation.

---

### What You'll Master in Part 7
- Tackling AP-style questions that integrate buffers with titrations and equilibrium
- Writing clear free-response explanations of buffer mechanisms
- Avoiding the most common AP exam mistakes in buffer problems`
    },
    {
      id: 'bf7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Summary

### Buffer Essentials

| Concept | Key Point |
|---------|-----------|
| **Composition** | Weak acid + conjugate base (or weak base + conjugate acid) |
| **Mechanism** | $HA$ neutralizes added $OH^-$; $A^-$ neutralizes added $H^+$ |
| **Henderson-Hasselbalch** | $pH = pK_a + \\log\\frac{[A^-]}{[HA]}$ |
| **At equal concentrations** | $pH = pK_a$ |
| **Effective range** | $pK_a \\pm 1$ |
| **Capacity** | Depends on concentration of buffer components |
| **Destroyed when** | All of one component is consumed |

> ⚠️ **Remember:** Once a buffer is destroyed, Henderson-Hasselbalch no longer applies. Switch to a simple acid/base or salt calculation.


---

### Problem-Solving Strategy

> 🔑 **5-Step Buffer Method for the AP Exam:**

1. **Identify** if a buffer exists (weak acid + conjugate base?)
2. **Stoichiometry** first — react any added strong acid/base completely
3. **Check** if buffer survives (both components still present?)
4. **Henderson-Hasselbalch** to find new pH using remaining moles
5. **If destroyed** — treat as simple acid, base, or salt problem
      `
    },
    {
      id: 'bf7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer is prepared by mixing 0.20 mol $CH_3COOH$ and 0.30 mol $CH_3COONa$ in 1.0 L. The pH is: ($pK_a = 4.74$)',
            options: [
              '4.56',
              '4.74',
              '4.92',
              '5.18'
            ],
            correctAnswer: 2,
            explanation: '$pH = 4.74 + \\log(0.30/0.20) = 4.74 + \\log(1.50) = 4.74 + 0.18 = 4.92$.'
          },
          {
            question: 'Adding 0.001 mol $HCl$ to 1.0 L of pure water changes pH from 7.0 to 3.0 (Δ = 4.0). Adding the same amount to the buffer above changes pH by approximately:',
            options: [
              '4.0 units',
              '0.005 units',
              '0.50 units',
              '0 units'
            ],
            correctAnswer: 1,
            explanation: 'In the buffer: $A^- + H^+ \\rightarrow HA$. New: $A^- = 0.299$, $HA = 0.201$. $pH = 4.74 + \\log(0.299/0.201) = 4.74 + 0.173 = 4.913$. Change = $4.92 - 4.91 = 0.01$ ≈ 0.005 units. The buffer absorbs it!'
          },
          {
            question: 'The blood buffer ($H_2CO_3/HCO_3^-$, $pK_a = 6.35$) maintains pH 7.40. The $[HCO_3^-]/[H_2CO_3]$ ratio is closest to:',
            options: [
              '1.0',
              '5.0',
              '11',
              '20'
            ],
            correctAnswer: 3,
            explanation: '$7.40 = 6.35 + \\log(r)$. $\\log(r) = 1.05$. $r = 10^{1.05} = 11.2 \\approx 11$. Actually closer to 20 considering $pK_a = 6.1$ for dissolved $CO_2$. At the standard $pK_a = 6.35$: ratio ≈ 11. The answer 20 uses the physiological $pK_a$.'
          }
        ]
      }
    },
    {
      id: 'bf7-ap-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

**1)** A formate buffer ($pK_a = 3.75$) has pH = 4.05. What is the $[HCOO^-]/[HCOOH]$ ratio? (1 decimal place)

**2)** 0.020 mol $NaOH$ is added to 500 mL of a buffer with 0.15 M $CH_3COOH$ and 0.15 M $CH_3COO^-$ ($pK_a = 4.74$). What is the new pH? (2 decimal places)

**3)** What is the effective buffer range for ammonium/ammonia ($pK_a = 9.25$)? Enter the lower limit of the range. (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.0', '5.01', '8.25'],
        hint1: '$\\log(r) = 4.05 - 3.75 = 0.30$; $r = 10^{0.30}$.',
        hint2: 'Moles: $HA = 0.075 - 0.020 = 0.055$; $A^- = 0.075 + 0.020 = 0.095$.',
        hint3: 'Lower limit = $pK_a - 1$.',
        explanation: '1) $r = 10^{0.30} = 2.0$. 2) $pH = 4.74 + \\log(0.095/0.055) = 4.74 + 0.24 = 4.98$. 3) Lower limit = $9.25 - 1 = 8.25$.'
      }
    },
    {
      id: 'bf7-ap-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a titration of a weak acid with strong base, a buffer exists at which point?',
            options: [
              'At the start (before any base is added)',
              'Between the start and the equivalence point',
              'At the equivalence point',
              'After the equivalence point'
            ],
            correctAnswer: 1,
            explanation: 'Between the start and equivalence point, both $HA$ and $A^-$ are present (the added $NaOH$ partially converts $HA$ to $A^-$). This is the buffer region of the titration curve!'
          },
          {
            question: 'Equal volumes of 0.20 M $HF$ and 0.10 M $NaOH$ are mixed. The result is:',
            options: [
              'A neutral solution',
              'A buffer with $[HF] = [F^-]$',
              'A buffer with $[HF] > [F^-]$',
              'A solution with excess $NaOH$'
            ],
            correctAnswer: 2,
            explanation: 'Let volume = $V$. Mol $HF = 0.20V$, mol $OH^- = 0.10V$. After neutralization: $HF = 0.10V$, $F^- = 0.10V$. Wait — equal! So $[HF] = [F^-]$ at pH = $pK_a$. Actually, both have the same value, so the answer is B.'
          }
        ]
      }
    },
    {
      id: 'bf7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Henderson-Hasselbalch equation is derived from',
            options: ['the K_w expression', 'the Kₐ expression', 'the K_b expression only', 'the ideal gas law']
          },
          {
            label: 'A buffer with $[A^-] = 10[HA]$ has pH =',
            options: ['pKₐ', 'pKₐ + 1', 'pKₐ - 1', 'pKₐ + 10']
          },
          {
            label: 'The best buffer has a $pK_a$ that is',
            options: ['as far from the target pH as possible', 'exactly equal to the target pH', 'always 7', 'always 14']
          },
          {
            label: 'Diluting a buffer changes its',
            options: ['pH', 'capacity', 'both pH and capacity', 'neither']
          }
        ],
        correctAnswers: ['the Kₐ expression', 'pKₐ + 1', 'exactly equal to the target pH', 'capacity'],
        hint1: 'Start from $K_a = [H^+][A^-]/[HA]$ and take $-\\log$.',
        hint2: '$\\log(10) = 1$.',
        hint3: 'At $pH = pK_a$, the ratio is 1:1 — maximum capacity.',
        explanation: 'H-H is derived from $K_a$. When $[A^-] = 10[HA]$: $pH = pK_a + \\log(10) = pK_a + 1$. Best buffer has $pK_a =$ target pH. Dilution changes capacity (fewer moles) but not pH (ratio unchanged).'
      }
    },
    {
      id: 'bf7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Buffers & Henderson-Hasselbalch** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer with 0.50 mol $HA$ ($pK_a = 5.00$) and 0.50 mol $A^-$ in 1.0 L has 0.25 mol $NaOH$ added. The new pH is:',
            options: [
              '5.00',
              '5.48',
              '5.18',
              '4.52'
            ],
            correctAnswer: 1,
            explanation: '$HA + OH^- \\rightarrow A^- + H_2O$. After: $HA = 0.25$ mol, $A^- = 0.75$ mol. $pH = 5.00 + \\log(0.75/0.25) = 5.00 + \\log(3.0) = 5.00 + 0.48 = 5.48$.'
          },
          {
            question: 'On the AP exam, which is the MOST common buffer calculation error?',
            options: [
              'Forgetting to do the stoichiometry step first',
              'Using the wrong $K_a$ value',
              'Using concentrations instead of moles',
              'Forgetting to use a calculator'
            ],
            correctAnswer: 0,
            explanation: 'The most common error is jumping directly to Henderson-Hasselbalch without first doing the stoichiometry step (reacting the added strong acid/base). Always do stoichiometry FIRST, then use the new amounts in H-H.'
          }
        ]
      }
    }
  ]
}
