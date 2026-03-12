export const chemAcidBaseTitrationsPart7Data = {
  topicSlug: 'acid-base-titrations',
  sections: [
    {
      id: 'at7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Acid-Base Titrations**

This comprehensive review integrates all titration concepts: setup, calculations at every point, curve analysis, indicator selection, and polyprotic systems. Master these for AP Chemistry success!
      `
    },
    {
      id: 'at7-summary',
      type: 'text' as const,
      content: `
## Complete Titration Summary

### Method at Each Point

| Region | What\'s Present | Calculation Method |
|--------|----------------|-------------------|
| Initial (weak acid) | Only $HA$ | ICE table with $K_a$ |
| Buffer region | $HA + A^-$ | $pH = pK_a + \\log([A^-]/[HA])$ |
| Half-equivalence | $[HA] = [A^-]$ | $pH = pK_a$ |
| Equivalence | Only $A^-$ | ICE with $K_b = K_w/K_a$ |
| After equivalence | $A^-$ + excess $OH^-$ | $[OH^-]$ from excess |

### Equivalence Point pH Summary

| Titration | Equivalence pH | Why |
|-----------|---------------|-----|
| Strong + Strong | = 7 | Neutral salt, no hydrolysis |
| Weak acid + Strong base | > 7 | $A^-$ hydrolyzes (basic) |
| Strong acid + Weak base | < 7 | $BH^+$ hydrolyzes (acidic) |

### Indicator Selection Rule

Choose an indicator whose $pK_{In}$ is close to the equivalence point pH.
      `
    },
    {
      id: 'at7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which titration curve feature allows you to determine $K_a$ of a weak acid?',
            options: [
              'The initial pH',
              'The pH at the half-equivalence point',
              'The pH at the equivalence point',
              'The final pH'
            ],
            correctAnswer: 1,
            explanation: 'At the half-equivalence point: $[HA] = [A^-]$, so $pH = pK_a$. Reading this pH directly gives $pK_a$, and $K_a = 10^{-pK_a}$.'
          },
          {
            question: 'A titration of 0.10 M $HF$ ($K_a = 6.6 \\times 10^{-4}$) with 0.10 M $NaOH$ reaches equivalence. The equivalence pH will be closest to:',
            options: [
              '7.0',
              '5.5',
              '8.1',
              '11.0'
            ],
            correctAnswer: 2,
            explanation: 'Weak acid + strong base → equivalence pH > 7. At equivalence, $F^-$ hydrolyzes: $K_b = K_w/K_a = 1.5 \\times 10^{-11}$. Assuming 0.050 M $F^-$: $x = \\sqrt{1.5 \\times 10^{-11} \\times 0.050} = 8.7 \\times 10^{-7}$. $pOH = 6.06$. $pH = 7.94 \\approx 8.1$.'
          },
          {
            question: 'Which indicator is best for the $HF/NaOH$ titration (equivalence ≈ pH 8)?',
            options: [
              'Methyl orange (3.1 – 4.4)',
              'Bromothymol blue (6.0 – 7.6)',
              'Phenolphthalein (8.2 – 10.0)',
              'Methyl red (4.4 – 6.2)'
            ],
            correctAnswer: 2,
            explanation: 'The equivalence point is at pH ≈ 8. Phenolphthalein changes in the range 8.2-10.0, which best matches this equivalence pH.'
          }
        ]
      }
    },
    {
      id: 'at7-ap-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

30.0 mL of 0.150 M weak acid $HA$ ($pK_a = 5.00$) is titrated with 0.150 M $NaOH$.

1) Volume of $NaOH$ at equivalence (mL, 1 decimal place):

2) Volume of $NaOH$ at half-equivalence (mL, 1 decimal place):

3) pH at the half-equivalence point (2 decimal places):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30.0', '15.0', '5.00', '30.00', '15.00', '5.000', '5.0'],
        hint1: 'Equal concentrations → equal volumes.',
        hint2: 'Half of the equivalence volume.',
        hint3: '$pH = pK_a$ at half-equivalence.',
        explanation: '1) $V_{eq} = (0.150 \\times 30.0)/0.150 = 30.0$ mL. 2) $V_{1/2} = 30.0/2 = 15.0$ mL. 3) $pH = pK_a = 5.00$.'
      }
    },
    {
      id: 'at7-ap-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two titration curves are shown on the same graph. Curve A starts at pH 1 and has an equivalence point at pH 7. Curve B starts at pH 3 and has an equivalence point at pH 9. Which is correct?',
            options: [
              'Curve A: strong acid + strong base; Curve B: weak acid + strong base',
              'Both are strong acid + strong base',
              'Curve A: weak acid; Curve B: strong acid',
              'Both are weak acid + strong base'
            ],
            correctAnswer: 0,
            explanation: 'Curve A: low initial pH (strong acid, fully dissociated) + equivalence at 7 (neutral salt) = strong-strong. Curve B: higher initial pH (weak acid, partial dissociation) + equivalence > 7 (conjugate base hydrolyzes) = weak acid-strong base.'
          },
          {
            question: 'A student titrates $H_3PO_4$ with $NaOH$. The volume to the first equivalence point is 20.0 mL. The volume to the second equivalence point is:',
            options: [
              '20.0 mL',
              '40.0 mL',
              '60.0 mL',
              '30.0 mL'
            ],
            correctAnswer: 1,
            explanation: 'Each equivalence point removes one proton. The stoichiometry is 1:1 for each proton. The second equivalence requires twice the volume of the first (20.0 + 20.0 = 40.0 mL total).'
          }
        ]
      }
    },
    {
      id: 'at7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The steepest part of any titration curve is near the',
            options: ['initial point', 'half-equivalence point', 'equivalence point', 'final point']
          },
          {
            label: 'At the equivalence point of weak acid + strong base, the species in solution is',
            options: ['$HA$ only', '$A^-$ only (conjugate base)', 'equal $HA$ and $A^-$', 'pure water']
          },
          {
            label: 'The buffer region of a titration curve is flattest near',
            options: ['the start', 'the half-equivalence point', 'the equivalence point', 'the end']
          },
          {
            label: 'Phenolphthalein turns pink when pH is approximately',
            options: ['3', '5', '7', '8-10']
          }
        ],
        correctAnswers: ['equivalence point', '$A^-$ only (conjugate base)', 'the half-equivalence point', '8-10'],
        hint1: 'The sharp S-curve jump happens at equivalence.',
        hint2: 'All $HA$ has been converted to $A^-$ at this point.',
        hint3: 'Maximum buffer capacity = $[HA] = [A^-]$ = half-equivalence.',
        explanation: 'Steepest near equivalence (dramatic pH change). At equivalence: only $A^-$ remains. Flattest near half-equivalence (max buffer capacity). Phenolphthalein transitions at pH 8-10.'
      }
    },
    {
      id: 'at7-ap-frq-practice',
      type: 'multiple-choice' as const,
      content: `
**AP FRQ-Style Question** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student performs a titration and collects the data: equivalence at 25.0 mL of 0.10 M $NaOH$; half-equivalence pH = 4.20. 50.0 mL of acid was used. The molar mass of the monoprotic acid is 122 g/mol. If 0.305 g of the acid was dissolved, the molarity is:',
            options: [
              '0.050 M',
              '0.10 M',
              '0.025 M',
              '0.20 M'
            ],
            correctAnswer: 0,
            explanation: 'Mol acid = mol $NaOH$ at equivalence = $0.10 \\times 0.025 = 0.0025$ mol. From mass: $0.305/122 = 0.00250$ mol ✓. Molarity = $0.00250/0.050 = 0.050$ M.'
          }
        ]
      }
    },
    {
      id: 'at7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Titrations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'List the correct order of pH calculations for a weak acid titrated with strong base: (1) ICE with $K_b$, (2) Henderson-Hasselbalch, (3) ICE with $K_a$, (4) Excess $OH^-$',
            options: [
              '3, 2, 1, 4',
              '1, 2, 3, 4',
              '2, 1, 3, 4',
              '3, 1, 2, 4'
            ],
            correctAnswer: 0,
            explanation: 'Order: (3) Initial — ICE with $K_a$ → (2) Buffer region — Henderson-Hasselbalch → (1) Equivalence — ICE with $K_b$ (hydrolysis of $A^-$) → (4) After equivalence — excess $OH^-$.'
          },
          {
            question: 'The AP Chemistry exam most frequently tests titration by asking students to:',
            options: [
              'Memorize indicator colors',
              'Calculate pH at specific points and sketch/interpret titration curves',
              'Derive the Henderson-Hasselbalch equation',
              'Calculate molar masses'
            ],
            correctAnswer: 1,
            explanation: 'AP Chemistry emphasizes calculating pH at the initial, half-equivalence, equivalence, and post-equivalence points, then using these to sketch or interpret titration curves. This tests multiple equilibrium concepts simultaneously.'
          }
        ]
      }
    }
  ]
}
