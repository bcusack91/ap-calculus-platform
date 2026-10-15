export const chemActivationEnergyArrheniusPart7Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Energy Profile and Catalyst Problems**

---

### Ideas You Must Know

| Idea | When to Use |
|------|-------------|
| $k = Ae^{-E_a/RT}$ (qualitative) | $k$ rises with $T$ and falls as $E_a$ rises |
| Maxwell-Boltzmann distribution | Explaining rate changes with temperature or a catalyst |
| $E_a(\\text{forward}) = E_a(\\text{reverse}) + \\Delta H$ | Energy profile relationships |
| Multistep profiles | Steps, intermediates, and the slowest step |

> 🔑 **Why this matters:** AP Chemistry free-response questions often combine energy profiles, collision-model explanations, and catalyst effects in a single multi-part problem.

---

### What You'll Master in Part 7
- Solving comprehensive problems that combine collision theory, energy profiles, and catalysts
- Interpreting how catalysts affect energy profiles and rate constants
- Writing AP-style justifications under timed conditions`
    },
    {
      id: 'ae7-key-ideas',
      type: 'text' as const,
      content: `
## 📋 Key Ideas Summary

---

### 🧪 Rate Constant Trends

| Change | Effect on $k$ | Particle-level reason |
|--------|---------------|-----------------------|
| Higher $T$ | Increases | Larger fraction of collisions with energy ≥ $E_a$ |
| Larger $E_a$ | Decreases | Fewer collisions reach the transition state |
| Catalyst | Increases | New pathway with lower $E_a$ |
| Higher concentration | No change | Rate rises through the rate law; $k$ is unchanged |

---

### 📈 Energy Profile Relationships

$$\\Delta H = E_a(\\text{forward}) - E_a(\\text{reverse})$$

- Peaks = transition states (one per elementary step)
- Valleys between peaks = intermediates
- The step with the largest barrier is the slowest step

> ⚠️ **AP Trap:** Calculations with the Arrhenius equation are not on the AP exam (CED 5.6 exclusion). Expect energy-profile arithmetic and written explanations instead.
      `
    },
    {
      id: 'ae7-ap-problem-1',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 1: Energy Diagram Analysis** 🎯

A reaction energy diagram shows:
- Reactants: 50 kJ
- Transition state (uncatalyzed): 150 kJ
- Transition state (catalyzed): 100 kJ
- Products: 30 kJ
      `,
      exercise: {
        questions: [
          {
            question: 'What is Ea for the uncatalyzed forward reaction?',
            options: [
              '20 kJ',
              '50 kJ',
              '100 kJ',
              '150 kJ'
            ],
            correctAnswer: 2,
            explanation: 'Ea(forward, uncat) = transition state − reactants = 150 − 50 = 100 kJ.'
          },
          {
            question: 'What is ΔH for the reaction?',
            options: [
              '+20 kJ',
              '−20 kJ',
              '+100 kJ',
              '−100 kJ'
            ],
            correctAnswer: 1,
            explanation: 'ΔH = products − reactants = 30 − 50 = −20 kJ (exothermic).'
          },
          {
            question: 'By how much does the catalyst lower Ea?',
            options: [
              '20 kJ',
              '50 kJ',
              '70 kJ',
              '100 kJ'
            ],
            correctAnswer: 1,
            explanation: 'Ea(cat) = 100 − 50 = 50 kJ. Ea(uncat) = 100 kJ. Reduction = 100 − 50 = 50 kJ.'
          }
        ]
      }
    },
    {
      id: 'ae7-ap-problem-2',
      type: 'input-boxes' as const,
      content: `
**AP Problem 2: Reverse Reaction Values** 🧮

Use the same energy diagram as Problem 1 (reactants 50 kJ, uncatalyzed transition state 150 kJ, catalyzed transition state 100 kJ, products 30 kJ).

**1)** $E_a$ for the uncatalyzed **reverse** reaction (in kJ)

**2)** $E_a$ for the catalyzed **reverse** reaction (in kJ)

**3)** $\\Delta H$ for the reverse reaction (in kJ, include the sign)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '120', acceptableAnswers: ['120'] }, { question: '(2)', answer: '70', acceptableAnswers: ['70'] }, { question: '(3)', answer: '+20', acceptableAnswers: ['+20', '20'] }],
        hint1: 'The reverse reaction starts at the products: 150 − 30.',
        hint2: 'Catalyzed peak minus the products: 100 − 30.',
        hint3: 'The reverse reaction has the opposite sign of the forward ΔH (−20 kJ).',
        explanation: '1) 150 − 30 = 120 kJ. 2) 100 − 30 = 70 kJ: the catalyst lowers the reverse barrier by the same 50 kJ it lowers the forward barrier. 3) The forward reaction has ΔH = −20 kJ, so the reverse has ΔH = +20 kJ.'
      }
    },
    {
      id: 'ae7-ap-problem-3',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 3: Catalysts and Temperature** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a Maxwell-Boltzmann diagram for a reaction at constant temperature, how is the effect of adding a catalyst shown?',
            options: [
              'The curve becomes shorter and broader',
              'The Ea line moves to a lower energy and the curve is unchanged',
              'The Ea line moves to a higher energy',
              'The total area under the curve increases'
            ],
            correctAnswer: 1,
            explanation: 'A catalyst does not change the particles\' energies, so the curve is unchanged; it lowers the barrier, so the Ea line moves left and a larger area lies beyond it. A shorter, broader curve shows a higher temperature, and the total area represents all particles, which does not change.'
          },
          {
            question: 'Raising the temperature and adding a catalyst can both double a reaction rate. Which statement correctly distinguishes them?',
            options: [
              'Both lower the activation energy of the reaction',
              'Heating changes the energy distribution; a catalyst lowers Ea',
              'Heating lowers Ea; a catalyst changes the energy distribution',
              'Both work only by increasing the number of collisions'
            ],
            correctAnswer: 1,
            explanation: 'Heating gives the particles a broader energy distribution, so more collisions clear the same barrier. A catalyst leaves the distribution alone and provides a pathway with a lower Ea. Neither works only through collision frequency, and heating does not change Ea.'
          },
          {
            question: 'Why do enzymes stop working at very high temperatures?',
            options: [
              'The activation energy increases at high temperature',
              'The enzyme unfolds and loses its active site',
              'The substrate molecules move too fast to collide',
              'The equilibrium shifts back toward the reactants'
            ],
            correctAnswer: 1,
            explanation: 'At high temperatures, the protein unfolds (denatures), destroying the active site shape. Without the proper 3D structure, the enzyme cannot bind substrate or catalyze the reaction. Ea is a property of the pathway and does not rise with temperature, faster molecules collide more often, and equilibrium shifts do not explain a catalyst failing.'
          }
        ]
      }
    },
    {
      id: 'ae7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The area under a Maxwell-Boltzmann curve to the right of Ea represents the fraction of molecules with',
            options: ['any kinetic energy', 'energy ≥ Ea', 'energy = 0', 'energy < Ea']
          },
          {
            label: 'On an energy profile, the activation energy of a step is the rise from its starting level to',
            options: ['the products', 'the next valley', 'its peak', 'zero energy']
          },
          {
            label: 'Doubling a reactant concentration at constant temperature changes k by',
            options: ['doubling it', 'halving it', 'not changing it', 'squaring it']
          },
          {
            label: 'Heterogeneous catalysts work by',
            options: ['raising the temperature at the surface', 'adsorbing reactants and weakening bonds', 'increasing the concentration of reactants', 'absorbing light to excite the reactants']
          }
        ],
        correctAnswers: ['energy ≥ Ea', 'its peak', 'not changing it', 'adsorbing reactants and weakening bonds'],
        hint1: 'Only particles beyond the Ea line can react.',
        hint2: 'A barrier is measured up to the transition state.',
        hint3: 'Concentration appears in the rate law, not in k.',
        explanation: 'The area beyond Ea is the fraction with energy ≥ Ea. A step\'s activation energy runs from its starting level up to its peak. Concentration changes the rate, not k. Heterogeneous catalysts adsorb molecules onto their surface, weakening bonds.'
      }
    },
    {
      id: 'ae7-challenge-problem',
      type: 'input-boxes' as const,
      content: `
**Challenge: A Catalyzed Two-Step Profile** 🧮

An uncatalyzed one-step reaction has reactants at 0 kJ, a transition state at 110 kJ, and products at −40 kJ. The catalyzed pathway has two steps: transition state 1 at 60 kJ, an intermediate (catalyst bound to reactant) at 20 kJ, transition state 2 at 75 kJ, and the same products.

**1)** $E_a$ of the uncatalyzed reaction (in kJ)

**2)** $E_a$ of the slower catalyzed step (in kJ)

**3)** $\\Delta H$ of the catalyzed reaction (in kJ, include the sign)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '110', acceptableAnswers: ['110'] }, { question: '(2)', answer: '60', acceptableAnswers: ['60'] }, { question: '(3)', answer: '-40', acceptableAnswers: ['-40', '−40'] }],
        hint1: 'Peak minus reactants: 110 − 0.',
        hint2: 'Step 1: 60 − 0 = 60. Step 2: 75 − 20 = 55. Which is larger?',
        hint3: 'A catalyst does not change the start or end levels.',
        explanation: '1) 110 − 0 = 110 kJ. 2) Step 1 has a 60 kJ barrier and step 2 a 55 kJ barrier (measured from the 20 kJ intermediate), so the slower step has Ea = 60 kJ, far below 110 kJ. 3) ΔH = −40 − 0 = −40 kJ, the same as the uncatalyzed reaction.'
      }
    },
    {
      id: 'ae7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Activation Energy & Arrhenius** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student explains that a reaction runs faster at 50 °C than at 25 °C because "the molecules move faster." Which revision best completes the explanation?',
            options: [
              'Faster molecules lower the activation energy of the reaction',
              'More collisions have energy ≥ Ea, so more succeed',
              'Faster molecules make the reaction more exothermic',
              'Faster molecules shift the equilibrium toward the products'
            ],
            correctAnswer: 1,
            explanation: 'A complete AP explanation links temperature to the fraction of collisions that have at least the activation energy, which makes more collisions successful per unit time. Ea does not change with temperature, and ΔH and the equilibrium position do not explain a rate increase.'
          },
          {
            question: 'Which combination would make a reaction fastest?',
            options: [
              'High Ea, low T, no catalyst',
              'Low Ea, high T, with catalyst',
              'High Ea, high T, no catalyst',
              'Low Ea, low T, no catalyst'
            ],
            correctAnswer: 1,
            explanation: 'The fastest rate needs a low Ea (more collisions clear the barrier), a high T (a larger fraction of collisions have enough energy), and a catalyst (an even lower-barrier pathway). A high Ea or a low T reduces the fraction of successful collisions and slows the reaction.'
          }
        ]
      }
    }
  ]
}
