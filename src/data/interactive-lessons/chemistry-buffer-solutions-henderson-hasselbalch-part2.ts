export const chemBufferSolutionsHendersonHasselbalchPart2Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf2-intro',
      type: 'text' as const,
      content: `# ⚔️ How Buffers Work — Neutralizing Added Acid or Base

**Part 2 of 7 — The Reactions That Stabilize pH**

---

### What Happens When Acid or Base Is Added

| Added | Buffer component that reacts | Net ionic equation | Effect on ratio $[A^-]/[HA]$ |
|-------|-----------------------------|--------------------|------------------------------|
| Strong acid ($H_3O^+$) | Conjugate base $A^-$ | $A^- + H_3O^+ \\rightarrow HA + H_2O$ | Decreases slightly |
| Strong base ($OH^-$) | Weak acid $HA$ | $HA + OH^- \\rightarrow A^- + H_2O$ | Increases slightly |

> 🔑 **Why this matters:** These two reactions are the reason a buffer resists pH change (CED 8.8.A.1). AP questions ask you to write them, to show them with particle diagrams, and to explain why the pH barely changes.

---

### What You'll Master in Part 2
- Writing the net ionic equation for the reaction of a buffer with added acid or base
- Explaining with particle counts why the ratio $[A^-]/[HA]$, and so the pH, changes only slightly
- Recognizing when a buffer has been overwhelmed`
    },
    {
      id: 'bf2-method',
      type: 'text' as const,
      content: `
## 📋 The Buffer's Two Defenses

### Defense 1: The Conjugate Base Neutralizes Added Acid

$$CH_3COO^-(aq) + H_3O^+(aq) \\rightarrow CH_3COOH(aq) + H_2O(l)$$

The added hydronium ions are converted into the weak acid, which ionizes only slightly. The free $H_3O^+$ concentration, and so the pH, barely changes.

---

### Defense 2: The Weak Acid Neutralizes Added Base

$$CH_3COOH(aq) + OH^-(aq) \\rightarrow CH_3COO^-(aq) + H_2O(l)$$

The added hydroxide ions are converted into water and the conjugate base, which is only a weak base.

---

> 💡 **Tip:** Both reactions go essentially to completion, because each one is a strong acid or strong base reacting with a weak partner. On a free-response question, show them with a single arrow ($\\rightarrow$).
      `
    },
    {
      id: 'bf2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Reaction Concepts** 🎯
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
            explanation: '$CH_3COOH + OH^- \\rightarrow CH_3COO^- + H_2O$. The weak acid is consumed and converted to conjugate base, so moles of $CH_3COO^-$ increase. The added hydroxide is used up, and $K_a$ depends only on temperature.'
          },
          {
            question: 'Which net ionic equation shows how an $NH_3/NH_4^+$ buffer responds to added HCl?',
            options: [
              '$NH_4^+ + OH^- \\rightarrow NH_3 + H_2O$',
              '$NH_3 + H_3O^+ \\rightarrow NH_4^+ + H_2O$',
              '$NH_4^+ + H_3O^+ \\rightarrow NH_5^{2+} + H_2O$',
              '$NH_3 + Cl^- \\rightarrow NH_3Cl^-$'
            ],
            correctAnswer: 1,
            explanation: 'Added acid is neutralized by the base component of the buffer: ammonia accepts a proton from hydronium to form ammonium. The reaction of $NH_4^+$ with $OH^-$ is the response to added base, ammonium cannot accept another proton, and chloride is a spectator.'
          },
          {
            question: 'In the Henderson-Hasselbalch equation, moles can be used instead of concentrations because:',
            options: [
              'Moles are always more accurate than molar concentrations',
              'The shared volume cancels in the ratio',
              'Concentrations are not needed once a buffer has formed',
              'The Henderson-Hasselbalch equation is defined in moles'
            ],
            correctAnswer: 1,
            explanation: '$\\log([A^-]/[HA]) = \\log((n_{A^-}/V)/(n_{HA}/V)) = \\log(n_{A^-}/n_{HA})$. Both species are in the same solution, so the volume $V$ cancels when taking the ratio. The equation itself is written in concentrations; moles work only because of this cancellation.'
          }
        ]
      }
    },
    {
      id: 'bf2-particle-counts',
      type: 'text' as const,
      content: `
## 🔬 Seeing It with Particle Counts

Picture a buffer drawn with **10 HA** particles and **10 $A^-$** particles. The ratio $[A^-]/[HA] = 1$, so pH = p$K_a$.

| Change | HA | $A^-$ | Ratio $[A^-]/[HA]$ | Effect on pH |
|--------|----|-------|--------------------|--------------|
| Start | 10 | 10 | 1.0 | pH = p$K_a$ |
| Add 2 $H_3O^+$ | 12 | 8 | 0.67 | Decreases slightly |
| Add 2 $OH^-$ (to the original) | 8 | 12 | 1.5 | Increases slightly |

Because the buffer holds large amounts of **both** components, a small addition changes the ratio only modestly, so the pH changes only a little. The same small amount of acid added to pure water would have nothing to react with, and the pH would drop sharply (CED 8.9.A.1).

> 🔑 **Key Comparison:** In a buffer, added $H_3O^+$ or $OH^-$ is consumed by a buffer component. In unbuffered water, it stays free in solution. That is the whole difference.

> ⚠️ **Note:** Calculating the exact new pH after acid or base is added to a buffer is not on the AP exam (CED 8.9 exclusion). You are expected to write the reactions and explain the direction and size of the change.
      `
    },
    {
      id: 'bf2-particle-drill',
      type: 'input-boxes' as const,
      content: `
**Particle-Count Drill** 🧮

A particle diagram of an HF/$F^-$ buffer shows **8 HF** and **8 $F^-$**. Then **3 $H_3O^+$** are added.

**1)** How many $F^-$ particles remain after the reaction?

**2)** How many HF particles are present after the reaction?

**3)** Does the pH increase or decrease slightly? (type **increase** or **decrease**)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '5', acceptableAnswers: ['5'] }, { question: '(2)', answer: '11', acceptableAnswers: ['11'] }, { question: '(3)', answer: 'decrease', acceptableAnswers: ['decrease', 'decreases'] }],
        hint1: 'Each $H_3O^+$ reacts with one $F^-$.',
        hint2: 'Each $F^-$ that reacts becomes one HF.',
        hint3: 'The ratio $[F^-]/[HF]$ goes down.',
        explanation: '1) $F^- + H_3O^+ \\rightarrow HF + H_2O$: 8 − 3 = 5 $F^-$. 2) 8 + 3 = 11 HF. 3) The ratio $[F^-]/[HF]$ falls from 1 to 5/11, so the pH decreases slightly — the added acid is consumed rather than staying free.'
      }
    },
    {
      id: 'bf2-buffer-destroyed',
      type: 'text' as const,
      content: `
## 🛡️ When Is a Buffer Overwhelmed?

A buffer stops working when all of one component is consumed:

- Adding enough $H_3O^+$ to use up all the $A^-$ → no base component left
- Adding enough $OH^-$ to use up all the $HA$ → no acid component left

> ⚠️ **AP Exam Alert:** Once one component is gone, any further acid or base stays free in solution and the pH changes sharply. The solution is no longer a buffer, and Henderson-Hasselbalch no longer applies.

---

### Example

Buffer: 0.15 mol $HA$ + 0.15 mol $A^-$

- Adding 0.05 mol $HCl$ → 0.10 mol $A^-$ remains → still a buffer
- Adding 0.15 mol $HCl$ → all $A^-$ consumed → buffer used up
- Adding 0.20 mol $HCl$ → $A^-$ gone, 0.05 mol excess $H_3O^+$ → strongly acidic, not a buffer
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
            options: ['HA to $A^{-}$', '$A^{-}$ to HA', '$H_{2}O$ to $OH^{-}$', 'HA to $H_{2}A^{+}$']
          },
          {
            label: 'The pH of a buffer where $[A^-] > [HA]$ is',
            options: ['less than $pK_{a}$', 'equal to $pK_{a}$', 'greater than $pK_{a}$', 'equal to $pK_{b}$']
          },
          {
            label: 'A buffer is overwhelmed when',
            options: ['any strong acid is added', 'one component is used up', 'the pH changes at all', 'it is diluted with water']
          }
        ],
        correctAnswers: ['$A^{-}$ to HA', 'greater than $pK_{a}$', 'one component is used up'],
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
              'A neutral solution — all acid neutralized'
            ],
            correctAnswer: 2,
            explanation: '$HA + OH^- \\rightarrow A^- + H_2O$. Only 0.10 mol $HA$ is available, so 0.10 mol $OH^-$ reacts and 0.02 mol $OH^-$ is left over. The buffer is overwhelmed and the solution is strongly basic, not neutral.'
          },
          {
            question: 'Equal small amounts of HCl are added to 1.0 L of pure water and to 1.0 L of an acetic acid/acetate buffer. Which statement best explains the different pH changes?',
            options: [
              'Its conjugate base consumes the added $H_3O^+$',
              'In the buffer, acetic acid molecules absorb the added $H_3O^+$ and become $H_2A^+$',
              'Water reacts with HCl to form a buffer, so both pH changes are equally small',
              'The buffer has a higher $K_w$, so its pH cannot change'
            ],
            correctAnswer: 0,
            explanation: 'The conjugate base in the buffer neutralizes added acid: $CH_3COO^- + H_3O^+ \\rightarrow CH_3COOH + H_2O$. In pure water nothing consumes the added $H_3O^+$, so the pH drops sharply. Acetic acid does not accept protons, water alone is not a buffer, and $K_w$ is the same in both.'
          }
        ]
      }
    }
  ]
}
