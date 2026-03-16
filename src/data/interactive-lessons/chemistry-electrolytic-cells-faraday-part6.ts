export const chemElectrolyticCellsFaradayPart6Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop — Electrolysis and Faraday

**Part 6 of 7 — Practice and Integration**

This workshop combines all electrolysis concepts: cell comparisons, product prediction, and Faraday\'s law calculations. These are the exact problem types you will face on the AP exam.
      `
    },
    {
      id: 'ef6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Checklist

### For Faraday\'s Law Problems

1. ✅ Convert time to **seconds** ($1 \\text{ min} = 60 \\text{ s}$, $1 \\text{ hr} = 3600 \\text{ s}$)
2. ✅ Calculate charge: $q = It$
3. ✅ Find mol electrons: $\\text{mol } e^- = q/F$
4. ✅ Write the half-reaction to find $n$
5. ✅ Find mol substance: $\\text{mol} = \\text{mol } e^-/n$
6. ✅ Convert to mass or volume if needed

### For Product Prediction

| System | Cathode Product | Anode Product |
|--------|----------------|---------------|
| Molten salt | Metal | Nonmetal (Cl₂, O₂, Br₂) |
| Aqueous, active metal | H₂ | Depends on anion |
| Aqueous, less active metal | Metal deposits | Depends on anion |
| Aqueous, halide anion | — | Halogen (Cl₂, Br₂, I₂) |
| Aqueous, oxyanion/F⁻ | — | O₂ |

### The One-Step Mass Formula

$$m = \\frac{ItM}{nF}$$

This combines all steps into one equation.
      `
    },
    {
      id: 'ef6-mixed-problems',
      type: 'multiple-choice' as const,
      content: `
**Mixed Electrolysis Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A current of 3.00 A flows through CuSO₄ solution for 2.00 hours. How many grams of Cu deposit? (Cu²⁺ + 2e⁻ → Cu, M = 63.55 g/mol)',
            options: [
              '3.56 g',
              '7.12 g',
              '1.78 g',
              '14.2 g'
            ],
            correctAnswer: 1,
            explanation: '$q = 3.00 \\times 7200 = 21{,}600$ C. $m = ItM/(nF) = 21{,}600 \\times 63.55/(2 \\times 96{,}485) = 1{,}372{,}680/192{,}970 = 7.11$ g $\\approx 7.12$ g.'
          },
          {
            question: 'In the electrolysis of aqueous KBr, the products are:',
            options: [
              'Cathode: K metal, Anode: Br₂',
              'Cathode: H₂, Anode: Br₂',
              'Cathode: H₂, Anode: O₂',
              'Cathode: K metal, Anode: O₂'
            ],
            correctAnswer: 1,
            explanation: 'K⁺ is too reactive to deposit from water → H₂ at cathode. Br⁻ is a simple halide → Br₂ at anode. Products: H₂ and Br₂.'
          },
          {
            question: 'How long (in minutes) must a 5.00 A current flow to deposit 10.0 g of Ag? (Ag⁺ + e⁻ → Ag, M = 107.87 g/mol)',
            options: [
              '14.9 min',
              '29.8 min',
              '44.7 min',
              '7.5 min'
            ],
            correctAnswer: 1,
            explanation: 'mol Ag = $10.0/107.87 = 0.09270$. mol $e^- = 0.09270$ (n = 1). $q = 0.09270 \\times 96{,}485 = 8{,}944$ C. $t = q/I = 8{,}944/5.00 = 1{,}789$ s $= 29.8$ min.'
          }
        ]
      }
    },
    {
      id: 'ef6-calculation-workshop',
      type: 'input-boxes' as const,
      content: `
**Calculation Workshop** 🧮

1) $I = 4.00$ A, $t = 50.0$ min. Total charge in coulombs?

2) Using the charge from (1), how many grams of Ni deposit from Ni²⁺? ($n = 2$, $M_{\\text{Ni}} = 58.69$ g/mol) (to 3 significant figures)

3) In the electrolysis of molten CaCl₂, what forms at the cathode? (type "Ca" or "Cl2")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12000', '3.65', 'Ca'],
        hint1: '$q = 4.00 \\times (50.0 \\times 60)$',
        hint2: '$m = 12000 \\times 58.69/(2 \\times 96485)$',
        hint3: 'In molten salts, the cation is reduced at the cathode.',
        explanation: '1) $q = 4.00 \\times 3000 = 12{,}000$ C. 2) $m = 12{,}000 \\times 58.69/(2 \\times 96{,}485) = 704{,}280/192{,}970 = 3.65$ g. 3) Ca²⁺ is reduced to Ca at the cathode (molten → no water competition).'
      }
    },
    {
      id: 'ef6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem Solving Strategies** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before using q = It, time must be converted to',
            options: ['minutes', 'hours', 'seconds', 'days']
          },
          {
            label: 'To find the mass deposited, the one-step formula is',
            options: ['m = It/nF', 'm = ItM/(nF)', 'm = nF/It', 'm = ItF/M']
          },
          {
            label: 'Two cells in series receive the same',
            options: ['voltage', 'charge (q = It)', 'mass deposited', 'moles deposited']
          },
          {
            label: 'The electrolysis of aqueous Na₂SO₄ produces',
            options: ['Na and SO₂', 'H₂ and O₂', 'Na and O₂', 'H₂ and SO₂']
          }
        ],
        correctAnswers: ['seconds', 'm = ItM/(nF)', 'charge (q = It)', 'H₂ and O₂'],
        hint1: 'I is in amperes (C/s), so t must be in seconds.',
        hint2: 'Include molar mass M to convert moles to grams.',
        hint3: 'In series, the same current flows for the same time.',
        explanation: 'Time in seconds. m = ItM/(nF). Series cells: same charge. Na₂SO₄(aq): Na⁺ too reactive → H₂; SO₄²⁻ is an oxyanion → O₂.'
      }
    },
    {
      id: 'ef6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Cells A (Ag⁺, n=1) and B (Cu²⁺, n=2) are in series. 5.39 g of Ag deposits in Cell A. How many grams of Cu deposit in Cell B? (M_Ag = 107.87, M_Cu = 63.55)',
            options: [
              '3.18 g',
              '1.59 g',
              '6.36 g',
              '5.39 g'
            ],
            correctAnswer: 1,
            explanation: 'mol Ag = $5.39/107.87 = 0.0500$ mol. mol $e^- = 0.0500$ (n=1). In Cell B (n=2): mol Cu = $0.0500/2 = 0.0250$. $m = 0.0250 \\times 63.55 = 1.59$ g.'
          },
          {
            question: 'To deposit the same mass of metal, which requires more charge: depositing Cu (n=2) or Al (n=3)?',
            options: [
              'Cu — because it has a higher molar mass',
              'Al — because n=3 means 3 electrons per atom',
              'They require the same charge',
              'Cannot be determined without knowing the current'
            ],
            correctAnswer: 1,
            explanation: 'For the same mass, Al requires more charge because $n = 3$ (3 electrons per Al atom) vs $n = 2$ for Cu. Even though Al is lighter, each atom needs 50% more electrons.'
          }
        ]
      }
    }
  ]
}
