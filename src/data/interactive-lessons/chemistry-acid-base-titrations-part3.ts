export const chemAcidBaseTitrationsPart3Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at3-intro',
      type: 'text' as const,
      content: `
# 📈 Weak Acid–Strong Base Titration Curves

**Part 3 of 7 — The Most Important Titration for AP Chemistry**

When a weak acid is titrated with a strong base, the curve is dramatically different from the strong-strong case. Understanding every region of this curve is essential — it combines equilibrium, buffers, and stoichiometry.
      `
    },
    {
      id: 'at3-regions',
      type: 'text' as const,
      content: `
## 🧪 Four Regions of the Weak Acid–Strong Base Curve

Consider titrating 50.0 mL of 0.100 M $CH_3COOH$ ($K_a = 1.8 \\times 10^{-5}$) with 0.100 M $NaOH$:


---

### Region 1: Initial Point (0 mL added)

Only weak acid present. Use ICE table:

$$K_a = \\frac{x^2}{0.100 - x} \\approx \\frac{x^2}{0.100}$$

$$x = \\sqrt{1.8 \\times 10^{-5} \\times 0.100} = 1.34 \\times 10^{-3}$$

$$pH = -\\log(1.34 \\times 10^{-3}) = 2.87$$

Higher starting pH than strong acid (1.00 vs 2.87)!


---

### Region 2: Buffer Region (0 to 50 mL)

Both $CH_3COOH$ and $CH_3COO^-$ present — this IS a buffer!

Use Henderson-Hasselbalch: $pH = pK_a + \\log([A^-]/[HA])$


---

### Region 3: Equivalence Point (50.0 mL)

All $HA$ converted to $A^-$. The conjugate base hydrolyzes:

$$CH_3COO^-(aq) + H_2O(l) \\rightleftharpoons CH_3COOH(aq) + OH^-(aq)$$

$$pH > 7$$ (basic, NOT neutral!)


---

### Region 4: After Equivalence (>50 mL)

Excess $NaOH$ dominates. Calculate $[OH^-]$ from excess.
      `
    },
    {
      id: 'at3-half-equivalence',
      type: 'text' as const,
      content: `
## 📌 The Half-Equivalence Point

At exactly half the volume needed for equivalence (25.0 mL in our example):

$$\\text{Half the acid is neutralized: } [HA] = [A^-]$$

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]} = pK_a + \\log(1) = pK_a$$

$$\\boxed{\\text{At the half-equivalence point: } pH = pK_a}$$

This is how you can **determine $K_a$ experimentally** — read the pH at the half-equivalence point!

For acetic acid: $pH = pK_a = 4.74$ at the half-equivalence point.


---

### Why This Matters on the AP Exam

- Given a titration curve, find the half-equivalence volume (half of equivalence volume)
- Read the pH at that point — that\'s $pK_a$
- $K_a = 10^{-pK_a}$
      `
    },
    {
      id: 'at3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Weak Acid Titration Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At the equivalence point of a weak acid–strong base titration, the pH is:',
            options: [
              'Exactly 7',
              'Less than 7',
              'Greater than 7',
              'Equal to $pK_a$'
            ],
            correctAnswer: 2,
            explanation: 'At equivalence, all $HA$ has been converted to $A^-$ (a weak base). $A^-$ hydrolyzes with water to produce $OH^-$, making the solution basic (pH > 7).'
          },
          {
            question: 'The half-equivalence point of a titration of $HF$ ($K_a = 6.6 \\times 10^{-4}$) with $NaOH$ has pH equal to:',
            options: [
              '7.00',
              '3.18',
              '10.82',
              '6.60'
            ],
            correctAnswer: 1,
            explanation: 'At the half-equivalence point: $pH = pK_a = -\\log(6.6 \\times 10^{-4}) = 3.18$.'
          },
          {
            question: 'The buffer region of a weak acid titration curve is:',
            options: [
              'Only at the half-equivalence point',
              'Between the start and the equivalence point',
              'At the equivalence point',
              'After the equivalence point'
            ],
            correctAnswer: 1,
            explanation: 'Between the start and equivalence, both $HA$ and $A^-$ are present. This entire region acts as a buffer, with maximum buffering capacity at the half-equivalence point.'
          }
        ]
      }
    },
    {
      id: 'at3-equivalence-ph',
      type: 'text' as const,
      content: `
## 🔢 Calculating pH at the Equivalence Point

At the equivalence point, only the conjugate base $A^-$ is present. It hydrolyzes:

$$A^-(aq) + H_2O(l) \\rightleftharpoons HA(aq) + OH^-(aq)$$

$$K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$


---

### ICE Table

Concentration of $A^- = \\frac{0.005}{0.100} = 0.050$ M (total volume = 100 mL)

$$K_b = \\frac{x^2}{0.050}$$

$$x = \\sqrt{5.6 \\times 10^{-10} \\times 0.050} = 5.3 \\times 10^{-6}$$

$$pOH = -\\log(5.3 \\times 10^{-6}) = 5.28$$

$$pH = 14 - 5.28 = 8.72$$

**The equivalence point is at pH 8.72** — clearly basic, not neutral!
      `
    },
    {
      id: 'at3-input-drill',
      type: 'input-boxes' as const,
      content: `
**Weak Acid Titration Calculations** 🧮

Titrating 40.0 mL of 0.150 M $HCOOH$ ($pK_a = 3.75$) with 0.150 M $NaOH$:

**1)** What volume of $NaOH$ is needed to reach the equivalence point? (1 decimal place, mL)

**2)** What volume of $NaOH$ gives the half-equivalence point? (1 decimal place, mL)

**3)** What is the pH at the half-equivalence point? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40.0', '20.0', '3.75'],
        hint1: 'Equal concentrations → equal volumes for equivalence.',
        hint2: 'Half of the equivalence volume.',
        hint3: 'At half-equivalence: $pH = pK_a$.',
        explanation: '1) $V = (0.150 \\times 40.0)/0.150 = 40.0$ mL. 2) Half = $40.0/2 = 20.0$ mL. 3) $pH = pK_a = 3.75$.'
      }
    },
    {
      id: 'at3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Curve Feature Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The initial pH of a weak acid titration is higher than a strong acid because',
            options: ['weak acids partially ionize', 'weak acids are more concentrated', 'indicators affect pH', 'NaOH is added first']
          },
          {
            label: 'The relatively flat region before equivalence is the',
            options: ['neutral region', 'buffer region', 'excess base region', 'indicator region']
          },
          {
            label: 'At equivalence, the solution contains',
            options: ['excess HA', 'excess NaOH', 'only the conjugate base A⁻ and Na⁺', 'pure water']
          },
          {
            label: 'A suitable indicator for this titration changes color near pH',
            options: ['4', '7', '9', '1']
          }
        ],
        correctAnswers: ['weak acids partially ionize', 'buffer region', 'only the conjugate base A⁻ and Na⁺', '9'],
        hint1: 'Weak acids don\'t fully dissociate — less $H^+$ → higher pH.',
        hint2: 'Both $HA$ and $A^-$ are present — classic buffer.',
        hint3: 'At equivalence, all $HA \\rightarrow A^-$.',
        explanation: 'Weak acids partially ionize (higher starting pH). The flat region is a buffer (both $HA$ and $A^-$ present). At equivalence, only $A^-$ remains (basic solution). The indicator should change near pH 8-9 (the equivalence pH).'
      }
    },
    {
      id: 'at3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Weak Acid Curves** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Comparing strong acid and weak acid titrations with $NaOH$ (same concentration and volume), which statement is TRUE?',
            options: [
              'Both have equivalence points at pH 7',
              'Both require the same volume of $NaOH$ to reach equivalence',
              'The weak acid curve has a shorter steep region',
              'The strong acid requires more $NaOH$'
            ],
            correctAnswer: 1,
            explanation: 'Both have the same number of moles of acid (same $M$ and $V$), so both need the same moles of $NaOH$. However, the equivalence pH differs (7 vs >7), and the weak acid curve is less steep at equivalence.'
          },
          {
            question: 'A titration curve shows pH = 5.40 at the half-equivalence point. The $K_a$ of the acid is:',
            options: [
              '$5.40$',
              '$10^{-5.40} = 4.0 \\times 10^{-6}$',
              '$10^{5.40}$',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'At half-equivalence: $pH = pK_a = 5.40$. Therefore $K_a = 10^{-5.40} = 4.0 \\times 10^{-6}$.'
          }
        ]
      }
    }
  ]
}
