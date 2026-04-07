export const chemBufferSolutionsHendersonHasselbalchPart6Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Buffer Solutions & Henderson-Hasselbalch**

This workshop features multi-step problems combining buffer identification, pH calculation, capacity analysis, and preparation — the types of questions that appear on AP Chemistry free-response sections.
      `
    },
    {
      id: 'bf6-problem1',
      type: 'text' as const,
      content: `
## Problem 1: Buffer After Multiple Additions

A 1.0 L buffer contains 0.30 mol $HCOOH$ (formic acid, $pK_a = 3.75$) and 0.30 mol $HCOONa$ (sodium formate).

**Initial pH:** $pH = 3.75 + \\log(0.30/0.30) = 3.75$

**Add 0.10 mol $NaOH$:**

$HCOOH + OH^- \\rightarrow HCOO^- + H_2O$

After: $HCOOH = 0.20$ mol, $HCOO^- = 0.40$ mol

$pH = 3.75 + \\log(0.40/0.20) = 3.75 + 0.30 = 4.05$

**Then add 0.05 mol $HCl$:**

$HCOO^- + H^+ \\rightarrow HCOOH$

After: $HCOO^- = 0.35$ mol, $HCOOH = 0.25$ mol

$pH = 3.75 + \\log(0.35/0.25) = 3.75 + 0.15 = 3.90$
      `
    },
    {
      id: 'bf6-problem1-practice',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Sequential Additions** 🧮

A 1.0 L buffer has 0.25 mol $CH_3COOH$ and 0.25 mol $CH_3COO^-$ ($pK_a = 4.74$).

First, 0.08 mol $NaOH$ is added. Then, 0.05 mol $HCl$ is added.

**1)** After adding $NaOH$, how many moles of $CH_3COO^-$ are present? (2 decimal places)

**2)** After adding $NaOH$, what is the pH? (2 decimal places)

**3)** After then adding $HCl$, what is the final pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.33', '5.01', '4.88'],
        hint1: '$CH_3COOH + OH^- \\rightarrow CH_3COO^-$. New $CH_3COO^- = 0.25 + 0.08$.',
        hint2: '$pH = 4.74 + \\log(0.33/0.17)$.',
        hint3: '$CH_3COO^- + H^+ \\rightarrow CH_3COOH$. New values: $A^- = 0.33 - 0.05$, $HA = 0.17 + 0.05$.',
        explanation: '1) $CH_3COO^- = 0.25 + 0.08 = 0.33$ mol; $CH_3COOH = 0.25 - 0.08 = 0.17$ mol. 2) $pH = 4.74 + \\log(0.33/0.17) = 4.74 + 0.29 = 5.03$. 3) After HCl: $A^- = 0.28$, $HA = 0.22$. $pH = 4.74 + \\log(0.28/0.22) = 4.74 + 0.10 = 4.84$.'
      }
    },
    {
      id: 'bf6-problem2',
      type: 'text' as const,
      content: `
## Problem 2: Buffer or Not?

Determine whether each mixture forms a buffer:

**A)** 50 mL of 0.20 M $HF$ + 50 mL of 0.10 M $NaOH$

$HF + OH^- \\rightarrow F^- + H_2O$

mol $HF$ = 0.010, mol $OH^-$ = 0.005

After: $HF = 0.005$ mol, $F^- = 0.005$ mol, $OH^-$ = 0 ✅ **Buffer!**

**B)** 50 mL of 0.20 M $HF$ + 50 mL of 0.20 M $NaOH$

mol $HF$ = 0.010, mol $OH^-$ = 0.010

After: $HF = 0$, $F^- = 0.010$, $OH^-$ = 0 ❌ **Not a buffer** (only $F^-$ remains)

**C)** 50 mL of 0.20 M $HCl$ + 50 mL of 0.10 M $NaCl$

$HCl$ is a strong acid. ❌ **Not a buffer** (no weak acid/base pair)
      `
    },
    {
      id: 'bf6-problem2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mixing 100 mL of 0.30 M $NH_3$ with 50 mL of 0.30 M $HCl$ produces:',
            options: [
              'A buffer with excess $NH_3$ and $NH_4^+$ formed',
              'A neutral solution',
              'An acidic solution with excess $HCl$',
              'Not a buffer — $NH_3$ is a weak base'
            ],
            correctAnswer: 0,
            explanation: 'Mol $NH_3 = 0.030$, mol $HCl = 0.015$. $NH_3 + H^+ \\rightarrow NH_4^+$. After: $NH_3 = 0.015$ mol, $NH_4^+ = 0.015$ mol. Both components present → buffer!'
          },
          {
            question: 'Which mixing produces a buffer at $pH = pK_a$?',
            options: [
              '100 mL of 0.10 M $HA$ + 100 mL of 0.10 M $NaOH$',
              '100 mL of 0.10 M $HA$ + 50 mL of 0.10 M $NaOH$',
              '100 mL of 0.10 M $HA$ + 200 mL of 0.10 M $NaOH$',
              '100 mL of 0.10 M $HA$ + 100 mL of 0.10 M $HCl$'
            ],
            correctAnswer: 1,
            explanation: 'Mol $HA = 0.010$, mol $OH^- = 0.005$. Half the acid is neutralized: $HA = 0.005$, $A^- = 0.005$. Equal amounts → $pH = pK_a$. This is the **half-equivalence point** concept from titrations!'
          }
        ]
      }
    },
    {
      id: 'bf6-problem3-input',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Buffer Design** 🧮

Design a 500 mL phosphate buffer at pH 7.40 ($pK_a = 7.21$, total phosphate = 0.20 M).

**1)** What is the required $[HPO_4^{2-}]/[H_2PO_4^-]$ ratio? (2 decimal places)

**2)** What concentration of $H_2PO_4^-$ is needed? (Enter in M, 3 decimal places)

**3)** How many moles of $Na_2HPO_4$ are needed for 500 mL? (3 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.55', '0.078', '0.061'],
        hint1: '$[A^-]/[HA] = 10^{(7.40 - 7.21)} = 10^{0.19}$.',
        hint2: 'Let $[H_2PO_4^-] = x$; then $[HPO_4^{2-}] = 1.55x$; $x + 1.55x = 0.20$.',
        hint3: 'Moles = concentration × volume in liters.',
        explanation: '1) $10^{0.19} = 1.549 \\approx 1.55$. 2) $2.55x = 0.20$; $x = 0.0784 \\approx 0.078$ M. 3) $[HPO_4^{2-}] = 0.122$ M; moles = $0.122 \\times 0.500 = 0.061$ mol.'
      }
    },
    {
      id: 'bf6-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Workshop Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Adding exactly half the moles of strong base to a weak acid creates a buffer at',
            options: ['pH = 7', 'pH = pKₐ', 'pH = pK_b', 'pH = 0']
          },
          {
            label: 'The Henderson-Hasselbalch equation CANNOT be used when',
            options: ['[A⁻] = [HA]', 'the buffer is destroyed', 'pH = pKₐ', 'the solution is dilute']
          },
          {
            label: 'In an AP free-response buffer problem, always show',
            options: ['only the final pH', 'the stoichiometry table then Henderson-Hasselbalch', 'just the formula', 'a diagram']
          }
        ],
        correctAnswers: ['pH = pKₐ', 'the buffer is destroyed', 'the stoichiometry table then Henderson-Hasselbalch'],
        hint1: 'Half neutralization gives 1:1 ratio.',
        hint2: 'A destroyed buffer has only one component — it\'s no longer a buffer.',
        hint3: 'AP graders want to see your work: stoichiometry first, then equilibrium.',
        explanation: 'Half-neutralization gives $[A^-]/[HA] = 1$, so $pH = pK_a$. H-H doesn\'t apply when the buffer is destroyed. On AP exams, show stoichiometry (BCA table) then Henderson-Hasselbalch for full credit.'
      }
    },
    {
      id: 'bf6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A buffer contains 0.40 mol $HA$ and 0.40 mol $A^-$ in 1.0 L ($pK_a = 5.00$). After adding 0.40 mol $NaOH$, the pH is:',
            options: [
              '5.00',
              '6.00',
              'Very high (≈13) — buffer destroyed, excess $OH^-$',
              '14.00'
            ],
            correctAnswer: 2,
            explanation: '0.40 mol $NaOH$ consumes ALL 0.40 mol $HA$ → buffer destroyed. Result: 0.80 mol $A^-$ (a weak base) in 1.0 L. Use $K_b = K_w/K_a$ with ICE table — pH will be basic, though not extremely high since $A^-$ is a weak base.'
          },
          {
            question: '100 mL of 0.50 M $CH_3COOH$ is mixed with 100 mL of 0.25 M $NaOH$. The resulting solution is:',
            options: [
              'A buffer — half the acid was neutralized',
              'Neutral — everything reacted',
              'Acidic — excess strong acid',
              'Basic — excess NaOH'
            ],
            correctAnswer: 0,
            explanation: 'Mol $HA = 0.050$, mol $OH^- = 0.025$. After reaction: $HA = 0.025$ mol, $A^- = 0.025$ mol. Both components present → buffer at $pH = pK_a = 4.74$!'
          }
        ]
      }
    }
  ]
}
