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
| Making a buffer by partial neutralization | Step 1: Stoichiometry → Step 2: Henderson-Hasselbalch |
| Adding acid/base to a buffer | Ratio changes slightly, so pH changes slightly (explain qualitatively) |
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

1. **Identify** what was mixed (a weak acid or base, its conjugate, any strong acid or base)
2. **Stoichiometry** first — react any strong acid or base completely
3. **Check** that a buffer results (both members of the conjugate pair present?)
4. **Henderson-Hasselbalch** to find the pH from the amounts of the pair
5. **If not a buffer** — treat as a simple acid, base, or salt problem

> 💡 For acid or base added to an existing buffer, explain qualitatively: the ratio changes only slightly, so the pH changes only slightly. Computing the exact new pH is not on the AP exam (CED 8.9 exclusion).
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
            question: 'Adding 0.001 mol $HCl$ to 1.0 L of pure water changes the pH from 7.0 to 3.0. How does the pH of the buffer above respond to the same addition?',
            options: [
              'It drops by about 4 units, the same as in water',
              'It drops only slightly, because acetate consumes the added $H_3O^+$',
              'It drops by more than 4 units, because the buffer is already acidic',
              'It rises, because the acid reacts with acetic acid'
            ],
            correctAnswer: 1,
            explanation: 'In the buffer, $CH_3COO^- + H_3O^+ \\rightarrow CH_3COOH + H_2O$ removes the added acid. With 0.30 mol acetate and 0.20 mol acetic acid, 0.001 mol barely changes the ratio $[A^-]/[HA]$, so the pH falls only slightly (CED 8.9.A.1). Added acid cannot raise the pH, and the buffer is far better at resisting change than water.'
          },
          {
            question: 'The blood buffer ($H_2CO_3/HCO_3^-$, $pK_a = 6.10$ at body temperature) maintains pH 7.40. The $[HCO_3^-]/[H_2CO_3]$ ratio is closest to:',
            options: [
              '1.3',
              '0.050',
              '13',
              '20'
            ],
            correctAnswer: 3,
            explanation: '$7.40 = 6.10 + \\log(r)$. $\\log(r) = 1.30$. $r = 10^{1.30} = 20$. Stopping at $\\log(r)$ gives 1.3, inverting the ratio gives $1/20 = 0.050$, and multiplying 1.30 by 10 instead of taking $10^{1.30}$ gives 13. (The effective $pK_a$ of 6.10 treats dissolved $CO_2$ as the acid; with the 25 °C value of 6.35 the ratio would be about 11.)'
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

**2)** 0.095 mol $CH_3COOH$ is mixed with 0.040 mol $NaOH$ in 500 mL of solution ($pK_a = 4.74$). What is the pH of the resulting buffer? (2 decimal places)

**3)** What is the effective buffer range for ammonium/ammonia ($pK_a = 9.25$)? Enter the lower limit of the range. (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.0', '4.60', '8.25'],
        hint1: '$\\log(r) = 4.05 - 3.75 = 0.30$; $r = 10^{0.30}$.',
        hint2: 'After reaction: $HA = 0.095 - 0.040 = 0.055$ mol; $A^- = 0.040$ mol.',
        hint3: 'Lower limit = $pK_a - 1$.',
        explanation: '1) $r = 10^{0.30} = 2.0$. 2) $pH = 4.74 + \\log(0.040/0.055) = 4.74 - 0.14 = 4.60$. 3) Lower limit = $9.25 - 1 = 8.25$.'
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
              'At the equivalence point itself',
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
            correctAnswer: 1,
            explanation: 'Let each volume be $V$. Mol $HF = 0.20V$ and mol $OH^- = 0.10V$. The $OH^-$ converts an equal amount of $HF$ into $F^-$, leaving $0.10V$ mol $HF$ and $0.10V$ mol $F^-$ in the same total volume, so $[HF] = [F^-]$ and $pH = pK_a$ (the half-equivalence point). $NaOH$ is the limiting reagent, so none is left over, and a buffer at $pH = pK_a$ of a weak acid is acidic, not neutral.'
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
            label: 'The Henderson-Hasselbalch equation is a rearranged form of',
            options: ['the K_w expression', 'the $K_{a}$ expression', 'the K_b expression only', 'the $K_{sp}$ expression']
          },
          {
            label: 'A buffer with $[A^-] = 10[HA]$ has pH =',
            options: ['$pK_{a}$', '$pK_{a}$ + 1', '$pK_{a}$ - 1', '$pK_{a}$ + 10']
          },
          {
            label: 'The best buffer has a $pK_a$ that is',
            options: ['as far from the target pH as possible', 'exactly equal to the target pH', 'about 2 units from the target', 'about 1 unit below the target']
          },
          {
            label: 'Diluting a buffer changes its',
            options: ['pH', 'capacity', 'both pH and capacity', 'neither']
          }
        ],
        correctAnswers: ['the $K_{a}$ expression', '$pK_{a}$ + 1', 'exactly equal to the target pH', 'capacity'],
        hint1: 'It comes from the weak acid\'s equilibrium expression.',
        hint2: '$\\log(10) = 1$.',
        hint3: 'At $pH = pK_a$, the ratio is 1:1 — maximum capacity.',
        explanation: 'H-H is the $K_a$ expression in logarithmic form. When $[A^-] = 10[HA]$: $pH = pK_a + \\log(10) = pK_a + 1$. Best buffer has $pK_a =$ target pH. Dilution changes capacity (fewer moles) but not pH (ratio unchanged).'
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
            question: '0.75 mol of a weak acid HA ($pK_a = 5.00$) is mixed with 0.25 mol $NaOH$ in a total volume of 1.0 L. The pH of the resulting buffer is:',
            options: [
              '4.70',
              '5.30',
              '5.00',
              '7.00'
            ],
            correctAnswer: 0,
            explanation: '$HA + OH^- \\rightarrow A^- + H_2O$. After reaction: $HA = 0.50$ mol, $A^- = 0.25$ mol. $pH = 5.00 + \\log(0.25/0.50) = 5.00 - 0.30 = 4.70$. Inverting the ratio gives 5.30, 5.00 would require equal amounts, and 7.00 ignores the leftover weak acid.'
          },
          {
            question: 'When a buffer is made by mixing a weak acid with a strong base, which calculation error is the MOST common?',
            options: [
              'Forgetting to do the stoichiometry step first',
              'Using $pK_b$ in place of $pK_a$ for a base buffer',
              'Using initial concentrations instead of mole amounts',
              'Inverting the ratio to $[HA]/[A^-]$ inside the log'
            ],
            correctAnswer: 0,
            explanation: 'The most common error is jumping directly to Henderson-Hasselbalch without first doing the stoichiometry step (reacting the strong base with the weak acid). Always do stoichiometry FIRST, then use the new amounts in H-H. Using $pK_b$ or inverting the ratio are real slips too, and concentrations work as well as moles because the volume cancels.'
          }
        ]
      }
    }
  ]
}
