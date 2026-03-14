export const chemEntropySecondLawPart4Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en4-intro',
      type: 'text' as const,
      content: `
# ❄️ The Third Law and Standard Molar Entropy

**Part 4 of 7 — S = 0 at Absolute Zero**

The Third Law of Thermodynamics provides a reference point for entropy. Unlike enthalpy, where we can only measure changes, entropy has an **absolute scale** — and it starts at zero.
      `
    },
    {
      id: 'en4-third-law',
      type: 'text' as const,
      content: `
## The Third Law of Thermodynamics

**The entropy of a perfect crystal at absolute zero (0 K) is exactly zero.**

$$S = 0 \\quad \\text{at } T = 0 \\text{ K (perfect crystal)}$$

### Why Zero?

At absolute zero:
- All molecular motion ceases (except zero-point energy)
- A perfect crystal has only **one microstate** ($W = 1$)
- $S = k \\ln 1 = 0$

### Consequences

1. **Absolute entropy values** can be determined (unlike enthalpy)
2. All substances at $T > 0$ K have $S > 0$
3. Absolute zero can never actually be reached (it would require an infinite number of cooling steps)
      `
    },
    {
      id: 'en4-standard-molar',
      type: 'text' as const,
      content: `
## Standard Molar Entropy ($S°$)

The entropy of **one mole** of a substance at **standard conditions** (1 atm, usually 25°C).

### Key Values to Know

| Substance | $S°$ [J/(mol·K)] |
|-----------|-----------------|
| $\\text{C}(s, \\text{graphite})$ | 5.7 |
| $\\text{C}(s, \\text{diamond})$ | 2.4 |
| $\\text{H}_2(g)$ | 130.7 |
| $\\text{N}_2(g)$ | 191.6 |
| $\\text{O}_2(g)$ | 205.1 |
| $\\text{H}_2\\text{O}(l)$ | 69.9 |
| $\\text{H}_2\\text{O}(g)$ | 188.8 |
| $\\text{CO}_2(g)$ | 213.7 |
| $\\text{NH}_3(g)$ | 192.5 |

### Patterns in Standard Entropy

1. **Gases > liquids > solids** — always!
2. **More complex molecules** have higher $S°$
3. **Heavier atoms** tend to have higher $S°$ (more accessible energy levels)
4. **Allotropes differ**: diamond (2.4) < graphite (5.7) — more ordered crystal

### Important: $S° > 0$ for ALL substances at 298 K

Unlike $\\Delta H°_f$, which is zero for elements, $S°$ is **never zero** at room temperature. Every substance has entropy at temperatures above 0 K.
      `
    },
    {
      id: 'en4-entropy-temperature',
      type: 'text' as const,
      content: `
## How Entropy Varies with Temperature

As temperature increases from 0 K, entropy increases through several stages:

### Heating a Substance

1. **Solid phase**: $S$ increases gradually as vibrations intensify
2. **At melting point**: sudden jump in $S$ (phase change — fusion)
3. **Liquid phase**: $S$ continues to increase
4. **At boiling point**: large jump in $S$ (phase change — vaporization)
5. **Gas phase**: $S$ continues to increase

### Key Feature

The jump at the **boiling point** is much larger than at the melting point, because the liquid → gas transition involves a much greater increase in molecular freedom.

### Phase Transition Entropy

$$\\Delta S_{\\text{transition}} = \\frac{\\Delta H_{\\text{transition}}}{T_{\\text{transition}}}$$

This formula applies at the **equilibrium** transition temperature, where the process is reversible.
      `
    },
    {
      id: 'en4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Third Law Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the Third Law, S = 0 when:',
            options: [
              'The substance is at 0°C',
              'The substance is a perfect crystal at 0 K',
              'The substance is in its standard state',
              'The substance is an element'
            ],
            correctAnswer: 1,
            explanation: 'The Third Law states that the entropy of a perfect crystal at absolute zero (0 K = −273.15°C) is zero. This is because there is only one microstate ($W = 1$, $S = k \\ln 1 = 0$).'
          },
          {
            question: 'Which has a higher standard molar entropy: H₂O(l) or H₂O(g)?',
            options: [
              'H₂O(l) — liquid has more hydrogen bonding',
              'H₂O(g) — gas has far more freedom of motion',
              'They are equal — same compound',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: '$S°[\\text{H}_2\\text{O}(g)] = 188.8$ J/(mol·K) vs. $S°[\\text{H}_2\\text{O}(l)] = 69.9$ J/(mol·K). The gas phase has far more microstates due to greater molecular freedom.'
          },
          {
            question: 'Unlike ΔH°_f for elements, the standard molar entropy S° for an element is:',
            options: [
              'Always zero',
              'Always negative',
              'Always greater than zero at 298 K',
              'Sometimes zero, sometimes positive'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta H°_f = 0$ for elements in their standard state (by convention), but $S° > 0$ for all substances at temperatures above 0 K (by the Third Law). These are different concepts!'
          }
        ]
      }
    },
    {
      id: 'en4-comparison-drill',
      type: 'input-boxes' as const,
      content: `
**Compare Standard Entropies** 🧮

Which substance has the HIGHER standard molar entropy? Type the chemical formula.

1) $\\text{H}_2\\text{O}(l)$ or $\\text{H}_2\\text{O}(g)$?

2) $\\text{C}(s, \\text{diamond})$ or $\\text{C}(s, \\text{graphite})$?

3) $\\text{O}_2(g)$ or $\\text{O}_3(g)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['H2O(g)', 'C(s, graphite)', 'O3(g)'],
        hint1: 'Gas always has higher entropy than liquid.',
        hint2: 'Graphite has a layered structure with more freedom than diamond\'s rigid lattice.',
        hint3: 'More atoms per molecule = more vibrational modes = more entropy.',
        explanation: '1) H₂O(g) > H₂O(l) — gas phase always has higher entropy. 2) Graphite > diamond — graphite\'s layered structure has more vibrational freedom. 3) O₃ > O₂ — more atoms means more ways to vibrate and store energy.'
      }
    },
    {
      id: 'en4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Third Law and Standard Entropy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At absolute zero, a perfect crystal has exactly',
            options: ['zero entropy', 'maximum entropy', 'infinite entropy', 'undefined entropy']
          },
          {
            label: 'The largest entropy jump when heating a substance from 0 K occurs at the',
            options: ['melting point', 'boiling point', 'glass transition', 'decomposition point']
          },
          {
            label: 'Standard molar entropy values are typically reported in units of',
            options: ['kJ/mol', 'J/(mol·K)', 'J/mol', 'kJ/(mol·K)']
          },
          {
            label: 'A more complex molecule generally has',
            options: ['lower S° than a simpler one', 'the same S° as a simpler one', 'higher S° than a simpler one', 'zero S°']
          }
        ],
        correctAnswers: ['zero entropy', 'boiling point', 'J/(mol·K)', 'higher S° than a simpler one'],
        hint1: '$S = k \\ln W$, and $W = 1$ for a perfect crystal at 0 K.',
        hint2: 'Liquid → gas involves a much greater increase in freedom than solid → liquid.',
        hint3: 'Entropy uses joules (not kilojoules) and includes temperature.',
        explanation: 'Third Law: S = 0 at 0 K (perfect crystal). The vaporization entropy jump is larger than fusion. S° is in J/(mol·K). Complex molecules have more vibrational modes → higher entropy.'
      }
    },
    {
      id: 'en4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Third Law & Standard Entropy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'At the boiling point, the entropy change for vaporization can be calculated as:',
            options: [
              'ΔS = ΔH_vap × T',
              'ΔS = ΔH_vap / T',
              'ΔS = T / ΔH_vap',
              'ΔS = ΔH_vap / T²'
            ],
            correctAnswer: 1,
            explanation: 'At the equilibrium phase transition temperature: $\\Delta S = \\Delta H / T$. This applies because the transition is reversible at the boiling point.'
          },
          {
            question: 'Rank in order of increasing S°: Ne(g), N₂(g), CO₂(g)',
            options: [
              'Ne < N₂ < CO₂',
              'CO₂ < N₂ < Ne',
              'N₂ < Ne < CO₂',
              'Ne < CO₂ < N₂'
            ],
            correctAnswer: 0,
            explanation: 'For gases at the same conditions, more atoms in a molecule means more ways to vibrate and rotate — so higher entropy. Ne (monatomic, S° ≈ 146 J/mol·K) < N₂ (diatomic, S° ≈ 192 J/mol·K) < CO₂ (triatomic, S° ≈ 214 J/mol·K).'
          }
        ]
      }
    }
  ]
}
