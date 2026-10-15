export const chemBufferSolutionsHendersonHasselbalchPart6Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Buffer Solutions & Henderson-Hasselbalch**

---

### Problem Types in This Workshop

| Type | What's Tested |
|------|---------------|
| Buffer by partial neutralization | Stoichiometry + H-H |
| Buffer vs. non-buffer ID | Composition requirements |
| Buffer capacity limits | When does the buffer break? |
| Design a buffer | Choose acid + calculate amounts |

> 🔑 **Why this matters:** AP free-response problems often chain 3-4 buffer calculations together — this workshop builds the stamina and accuracy you need.

---

### What You'll Master in Part 6
- Finding the pH of a buffer made by partially neutralizing a weak acid
- Distinguishing buffer solutions from non-buffer mixtures
- Calculating buffer capacity and identifying when a buffer is overwhelmed`
    },
    {
      id: 'bf6-problem1',
      type: 'text' as const,
      content: `
## 🛡️ Problem 1: Making a Buffer by Partial Neutralization

> **Problem:** 0.30 mol of formic acid, $HCOOH$ ($pK_a = 3.75$), is dissolved in water, and 0.10 mol of $NaOH$ is added. The final volume is 1.0 L. Find the pH.

**Solution:**

**Step 1 — Stoichiometry (the reaction goes to completion):**

$HCOOH + OH^- \\rightarrow HCOO^- + H_2O$

| | $HCOOH$ | $OH^-$ | $HCOO^-$ |
|-|---------|--------|----------|
| Before | 0.30 mol | 0.10 mol | 0 |
| Change | −0.10 | −0.10 | +0.10 |
| After | 0.20 mol | 0 | 0.10 mol |

Both members of the conjugate pair are now present, so the solution is a buffer.

**Step 2 — Henderson-Hasselbalch:**

$$pH = 3.75 + \\log\\frac{0.10}{0.20} = 3.75 + (-0.30) = 3.45$$

> 💡 **Tip:** This is the same calculation as a point in the buffer region of a weak acid–strong base titration (CED 8.4, 8.9). It finds the pH of a buffer from the identity and amounts of the conjugate pair that make it up.
      `
    },
    {
      id: 'bf6-problem1-practice',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Partial Neutralization** 🧮

0.25 mol $CH_3COOH$ ($pK_a = 4.74$) is mixed with 0.08 mol $NaOH$ in a total volume of 1.0 L.

**1)** How many moles of $CH_3COO^-$ are formed? (2 decimal places)

**2)** How many moles of $CH_3COOH$ remain? (2 decimal places)

**3)** What is the pH of the resulting buffer? (2 decimal places)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '0.08', acceptableAnswers: ['0.08', '0.080'] }, { question: '(2)', answer: '0.17', acceptableAnswers: ['0.17'] }, { question: '(3)', answer: '4.41', acceptableAnswers: ['4.41', '4.42'] }],
        hint1: 'Each mole of $OH^-$ converts one mole of $CH_3COOH$ to $CH_3COO^-$.',
        hint2: '0.25 − 0.08.',
        hint3: '$pH = 4.74 + \\log(0.08/0.17)$.',
        explanation: '1) 0.08 mol $CH_3COO^-$ forms (NaOH is the limiting reactant). 2) $0.25 - 0.08 = 0.17$ mol $CH_3COOH$ remains. 3) $pH = 4.74 + \\log(0.08/0.17) = 4.74 - 0.33 = 4.41$. The pH is below p$K_a$ because there is more acid than conjugate base.'
      }
    },
    {
      id: 'bf6-problem2',
      type: 'text' as const,
      content: `
## 🛡️ Problem 2: Buffer or Not?

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

> ⚠️ **AP Trap:** A mixture of a strong acid + its salt (like $HCl$ + $NaCl$) is NEVER a buffer. You need a WEAK acid/base pair.
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
              'A buffer of equal $NH_3$ and $NH_4^+$',
              'A neutral $NH_4Cl$ solution — all base reacted',
              'An acidic solution with excess $HCl$ left over',
              'Not a buffer — $NH_3$ is a base, not an acid'
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
              '100 mL of 0.10 M $HA$ + 100 mL of 0.10 M $NaCl$'
            ],
            correctAnswer: 1,
            explanation: 'Mol $HA = 0.010$, mol $OH^- = 0.005$. Half the acid is neutralized: $HA = 0.005$, $A^- = 0.005$. Equal amounts → $pH = pK_a$. This is the **half-equivalence point** concept from titrations! Equal moles of $NaOH$ convert all the acid (no $HA$ left), twice as much leaves excess $OH^-$, and $NaCl$ supplies no conjugate base at all.'
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
        questions: [{ question: '(1)', answer: '1.55', acceptableAnswers: ['1.55'] }, { question: '(2)', answer: '0.078', acceptableAnswers: ['0.078', '0.0785'] }, { question: '(3)', answer: '0.061', acceptableAnswers: ['0.061', '0.0608'] }],
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
            options: ['pH = 7', 'pH = $pK_{a}$', 'pH = $pK_{b}$', 'pH = $pK_{a}$ + 1']
          },
          {
            label: 'The Henderson-Hasselbalch equation CANNOT be used when',
            options: ['[$A^{-}$] = [HA]', 'the buffer is destroyed', 'pH = $pK_{a}$', 'the solution is dilute']
          },
          {
            label: 'In an AP free-response buffer problem, always show',
            options: ['only the final pH, to save time', 'the stoichiometry step, then H-H', 'just the formula with no numbers', 'a titration curve sketch']
          }
        ],
        correctAnswers: ['pH = $pK_{a}$', 'the buffer is destroyed', 'the stoichiometry step, then H-H'],
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
            question: 'A solution of 0.40 mol of a weak acid HA ($pK_a = 5.00$) is mixed with 0.40 mol $NaOH$; the final volume is 1.0 L. What is the pH?',
            options: [
              '5.00',
              '7.00',
              '9.30',
              '13.60'
            ],
            correctAnswer: 2,
            explanation: 'Equal moles react completely, leaving 0.40 M $A^-$ (a weak base) and no buffer: this is an equivalence point. $K_b = K_w/K_a = 1.0 \\times 10^{-9}$, so $[OH^-] = \\sqrt{(1.0 \\times 10^{-9})(0.40)} = 2.0 \\times 10^{-5}$ M, $pOH = 4.70$, $pH = 9.30$. Treating 0.40 M $A^-$ as 0.40 M $OH^-$ gives 13.60, assuming a neutral solution gives 7.00, and 5.00 is the half-equivalence pH.'
          },
          {
            question: '100 mL of 0.50 M $CH_3COOH$ is mixed with 100 mL of 0.25 M $NaOH$. The resulting solution is:',
            options: [
              'A buffer — half the acid was neutralized',
              'Neutral — the acid and base neutralized each other',
              'Acidic but unbuffered — only $CH_3COOH$ remains',
              'Basic — excess $NaOH$ remains after the reaction'
            ],
            correctAnswer: 0,
            explanation: 'Mol $HA = 0.050$, mol $OH^- = 0.025$. After reaction: $HA = 0.025$ mol, $A^- = 0.025$ mol. Both components present → buffer at $pH = pK_a = 4.74$! $NaOH$ is the limiting reagent, so none is left over, and the acid was only half neutralized.'
          }
        ]
      }
    }
  ]
}
