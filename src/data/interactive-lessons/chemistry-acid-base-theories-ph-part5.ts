export const chemAcidBaseTheoriesPhPart5Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab5-intro',
      type: 'text' as const,
      content: `
# 💪 Strong Acids and Bases — pH Calculations

**Part 5 of 7 — Complete Dissociation Means Easy Math**

Strong acids and bases dissociate **completely** in water. This makes pH calculations straightforward — the concentration of $H^+$ or $OH^-$ equals the initial concentration of the acid or base.
      `
    },
    {
      id: 'ab5-strong-acids',
      type: 'text' as const,
      content: `
## pH of Strong Acids

For a strong acid $HA$ at concentration $C$:

$$HA \\rightarrow H^+ + A^-$$

Since dissociation is **100% complete**: $[H^+] = C$

$$pH = -\\log C$$

### Example 1

What is the pH of 0.025 M $HCl$?

$$[H^+] = 0.025 \\text{ M}$$
$$pH = -\\log(0.025) = 1.60$$

### Example 2

What is the pH of 0.0040 M $HNO_3$?

$$[H^+] = 0.0040 \\text{ M}$$
$$pH = -\\log(0.0040) = 2.40$$

### Diprotic Strong Acid ($H_2SO_4$)

For the first dissociation (strong): $H_2SO_4 \\rightarrow H^+ + HSO_4^-$

For dilute solutions, each mole of $H_2SO_4$ produces approximately **2 moles** of $H^+$:

$$[H^+] \\approx 2C \\text{ (for dilute solutions)}$$

**Note:** The second dissociation of $H_2SO_4$ ($HSO_4^-$) is weak ($K_a = 0.012$), so at higher concentrations the approximation $[H^+] = 2C$ may not hold exactly.
      `
    },
    {
      id: 'ab5-strong-bases',
      type: 'text' as const,
      content: `
## pH of Strong Bases

For a strong base like $NaOH$ at concentration $C$:

$$NaOH \\rightarrow Na^+ + OH^-$$

$[OH^-] = C$, then:

$$pOH = -\\log C$$
$$pH = 14 - pOH$$

### Example 1

What is the pH of 0.010 M $NaOH$?

$$[OH^-] = 0.010 \\text{ M}$$
$$pOH = -\\log(0.010) = 2.00$$
$$pH = 14 - 2.00 = 12.00$$

### Group 2 Hydroxides

For $Ba(OH)_2$ or $Ca(OH)_2$:

$$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$$

$$[OH^-] = 2C$$

### Example 2

What is the pH of 0.0050 M $Ba(OH)_2$?

$$[OH^-] = 2(0.0050) = 0.010 \\text{ M}$$
$$pOH = -\\log(0.010) = 2.00$$
$$pH = 14 - 2.00 = 12.00$$
      `
    },
    {
      id: 'ab5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Strong Acid/Base pH Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the pH of 0.10 M $HBr$?',
            options: [
              '0.10',
              '1.00',
              '13.00',
              '0.90'
            ],
            correctAnswer: 1,
            explanation: '$HBr$ is a strong acid: $[H^+] = 0.10$ M. $pH = -\\log(0.10) = 1.00$.'
          },
          {
            question: 'What is the pH of $5.0 \\times 10^{-3}$ M $KOH$?',
            options: [
              '2.30',
              '5.00',
              '9.00',
              '11.70'
            ],
            correctAnswer: 3,
            explanation: '$KOH$ is a strong base: $[OH^-] = 5.0 \\times 10^{-3}$ M. $pOH = -\\log(5.0 \\times 10^{-3}) = 2.30$. $pH = 14 - 2.30 = 11.70$.'
          },
          {
            question: 'What is $[OH^-]$ in a solution of 0.020 M $Ca(OH)_2$?',
            options: [
              '0.010 M',
              '0.020 M',
              '0.040 M',
              '0.080 M'
            ],
            correctAnswer: 2,
            explanation: '$Ca(OH)_2 \\rightarrow Ca^{2+} + 2OH^-$. Each formula unit produces 2 $OH^-$ ions, so $[OH^-] = 2(0.020) = 0.040$ M.'
          }
        ]
      }
    },
    {
      id: 'ab5-dilution',
      type: 'text' as const,
      content: `
## Mixing and Dilution

### Diluting a Strong Acid

Use $M_1V_1 = M_2V_2$:

**Example:** 25.0 mL of 0.10 M $HCl$ is diluted to 100.0 mL. What is the new pH?

$$M_2 = \\frac{M_1V_1}{V_2} = \\frac{(0.10)(25.0)}{100.0} = 0.025 \\text{ M}$$

$$pH = -\\log(0.025) = 1.60$$

### Mixing Strong Acid and Strong Base

**Example:** 50.0 mL of 0.10 M $HCl$ + 30.0 mL of 0.10 M $NaOH$

Moles $H^+$ = $0.050 \\times 0.10 = 0.0050$ mol

Moles $OH^-$ = $0.030 \\times 0.10 = 0.0030$ mol

Excess $H^+$ = $0.0050 - 0.0030 = 0.0020$ mol

Total volume = $80.0$ mL = $0.0800$ L

$$[H^+] = \\frac{0.0020}{0.0800} = 0.025 \\text{ M}$$

$$pH = -\\log(0.025) = 1.60$$
      `
    },
    {
      id: 'ab5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Strong Acid/Base Calculation Drill** 🧮

1) What is the pH of 0.0020 M $HClO_4$? (2 decimal places)

2) What is the pH of 0.050 M $Ba(OH)_2$? (2 decimal places)

3) 40.0 mL of 0.15 M $HNO_3$ is mixed with 20.0 mL of 0.15 M $NaOH$. What is the pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.70', '13.00', '1.22', '2.700', '2.7', '13.000', '13.0', '1.220'],
        hint1: '$HClO_4$ is a strong acid: $pH = -\\log(0.0020)$.',
        hint2: '$Ba(OH)_2$: $[OH^-] = 2(0.050) = 0.10$ M.',
        hint3: 'Find excess $H^+$: mol $H^+$ = $(0.040)(0.15)$, mol $OH^-$ = $(0.020)(0.15)$; divide excess by total volume.',
        explanation: '1) $pH = -\\log(0.0020) = 2.70$. 2) $[OH^-] = 2(0.050) = 0.10$ M; $pOH = 1.00$; $pH = 13.00$. 3) mol $H^+$ = $0.0060$, mol $OH^-$ = $0.0030$; excess $H^+$ = $0.0030$ mol in $0.060$ L; $[H^+] = 0.050$ M; $pH = -\\log(0.050) = 1.30$.'
      }
    },
    {
      id: 'ab5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Strong Acid/Base Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The pH of a strong acid can be calculated directly from its concentration because',
            options: ['it partially dissociates', 'it completely dissociates', 'it doesn\'t ionize', 'K_a is needed']
          },
          {
            label: 'Adding water to a strong acid solution will cause the pH to',
            options: ['decrease', 'increase (toward 7)', 'stay the same', 'become exactly 7']
          },
          {
            label: 'Which has the lowest pH?',
            options: ['0.10 M NaOH', '0.10 M HCl', '0.10 M NaCl', 'Pure water']
          },
          {
            label: 'For 0.10 M $Ca(OH)_2$, $[OH^-]$ is',
            options: ['0.050 M', '0.10 M', '0.20 M', '0.40 M']
          }
        ],
        correctAnswers: ['it completely dissociates', 'increase (toward 7)', '0.10 M HCl', '0.20 M'],
        hint1: 'Strong acids dissociate 100%.',
        hint2: 'Dilution lowers $[H^+]$, moving pH toward neutral.',
        hint3: '$HCl$ is acidic (low pH), $NaOH$ is basic (high pH).',
        explanation: 'Complete dissociation means $[H^+] = C_{acid}$. Dilution increases pH toward 7 (never past it). 0.10 M HCl has pH = 1 (lowest). $Ca(OH)_2$ gives 2 $OH^-$ per unit: $[OH^-] = 0.20$ M.'
      }
    },
    {
      id: 'ab5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Strong Acid/Base pH** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Equal volumes of 0.20 M $HCl$ and 0.20 M $NaOH$ are mixed. The resulting pH is:',
            options: [
              '1.0',
              '7.0',
              '13.0',
              '0.0'
            ],
            correctAnswer: 1,
            explanation: 'Equal moles of strong acid and strong base completely neutralize each other. The resulting solution contains only $NaCl$ and water, so $pH = 7.0$.'
          },
          {
            question: 'The pH of $2.0 \\times 10^{-8}$ M $HCl$ is approximately:',
            options: [
              '8.0',
              '7.6',
              '6.9',
              '7.0'
            ],
            correctAnswer: 2,
            explanation: 'At this very low concentration, the autoionization of water ($[H^+] = 10^{-7}$) contributes significantly. Total $[H^+] \\approx 1.0 \\times 10^{-7} + 2.0 \\times 10^{-8} = 1.2 \\times 10^{-7}$ M. $pH \\approx 6.9$. The pH cannot be above 7 for an acid solution!'
          }
        ]
      }
    }
  ]
}
