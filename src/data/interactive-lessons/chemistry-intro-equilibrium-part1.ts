export const chemIntroEquilibriumPart1Data = {
  topicSlug: 'intro-equilibrium',
  sections: [
    {
      id: 'ie1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Dynamic Equilibrium

**Part 1 of 7 — Forward and Reverse Rates**

Chemical reactions don\'t always go to completion. Many reactions are **reversible** — the products can react to re-form the reactants. When the forward and reverse reactions occur at the **same rate**, the system reaches **dynamic equilibrium**.
      `
    },
    {
      id: 'ie1-reversible-reactions',
      type: 'text' as const,
      content: `
## Reversible Reactions

Consider the reaction:

$$\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$$

- The **forward reaction**: N₂O₄ decomposes into NO₂
- The **reverse reaction**: NO₂ molecules recombine to form N₂O₄

Initially, only the forward reaction occurs. As products build up, the reverse reaction begins and accelerates. Eventually, both reactions proceed at the **same rate**.

### What "Dynamic" Means

At equilibrium:
- Both forward and reverse reactions **continue to occur**
- There is no **net** change in concentrations
- The system is NOT static — it is constantly reacting in both directions

This is why we call it **dynamic** equilibrium.
      `
    },
    {
      id: 'ie1-rate-graph',
      type: 'text' as const,
      content: `
## Rates Over Time

### Before Equilibrium

| Time Period | Forward Rate | Reverse Rate | Net Change |
|-------------|-------------|--------------|------------|
| $t = 0$ | Maximum | Zero | Products forming rapidly |
| Early | Decreasing | Increasing | Products still forming |
| Approaching eq. | Converging | Converging | Slowing net change |

### At Equilibrium

$$\\text{Rate}_{\\text{forward}} = \\text{Rate}_{\\text{reverse}}$$

- Concentrations of reactants and products remain **constant** (not necessarily equal!)
- The ratio $[\\text{products}]/[\\text{reactants}]$ stays fixed at a given temperature

### Key Misconception

Equilibrium does **NOT** mean:
- The reaction has stopped
- Concentrations of reactants and products are equal
- Nothing is happening

It means the rates are balanced so there is no **net** change.
      `
    },
    {
      id: 'ie1-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Dynamic Equilibrium** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At dynamic equilibrium, which statement is true?',
            options: [
              'The forward reaction has stopped',
              'The concentrations of reactants and products are equal',
              'The rates of the forward and reverse reactions are equal',
              'Only the reverse reaction is occurring'
            ],
            correctAnswer: 2,
            explanation: 'At dynamic equilibrium, both reactions continue to occur but at the same rate, resulting in no net change in concentrations. The concentrations are constant but NOT necessarily equal.'
          },
          {
            question: 'Which observation indicates a system has reached equilibrium?',
            options: [
              'All reactants have been consumed',
              'The color of the solution stops changing',
              'Bubbles stop forming',
              'Both B and C could indicate equilibrium'
            ],
            correctAnswer: 3,
            explanation: 'Any observable property (color, pressure, etc.) becoming constant over time can indicate equilibrium. Both a stable color and cessation of bubble formation (if gas is a product) could signal that concentrations are no longer changing.'
          },
          {
            question: 'A sealed container holds N₂O₄ and NO₂ at equilibrium. If you could tag individual molecules, you would observe:',
            options: [
              'No molecules changing identity',
              'Only N₂O₄ breaking apart',
              'Only NO₂ combining',
              'Both N₂O₄ breaking apart and NO₂ combining at equal rates'
            ],
            correctAnswer: 3,
            explanation: 'Dynamic equilibrium means both forward (N₂O₄ → 2 NO₂) and reverse (2 NO₂ → N₂O₄) reactions continue. Individual molecules constantly interconvert, but the overall amounts stay the same.'
          }
        ]
      }
    },
    {
      id: 'ie1-characteristics',
      type: 'text' as const,
      content: `
## Conditions for Equilibrium

For a system to reach equilibrium, several conditions must be met:

### 1. Closed System
The system must be **closed** — no matter can enter or leave. (Energy transfer is allowed.)

### 2. Reversible Reaction
The reaction must be able to proceed in both directions.

### 3. Constant Temperature
Temperature must remain constant. (Changing temperature shifts the equilibrium position.)

### 4. Sufficient Time
The system needs time to reach equilibrium. Some reactions reach it in milliseconds; others take days.

### Recognizing Equilibrium

You know a system is at equilibrium when:
- All macroscopic properties (concentration, pressure, color, pH) remain **constant**
- The system is **closed**
- The reaction is **reversible**
      `
    },
    {
      id: 'ie1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Equilibrium Conditions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At equilibrium, the concentrations of reactants and products are',
            options: ['always equal', 'constant but not necessarily equal', 'always zero', 'continuously increasing']
          },
          {
            label: 'A system at equilibrium requires a',
            options: ['closed system', 'open system', 'vacuum', 'catalyst']
          },
          {
            label: 'The word "dynamic" in dynamic equilibrium means',
            options: ['the reaction has stopped', 'concentrations are changing', 'reactions are still occurring in both directions', 'energy is being released']
          },
          {
            label: 'If you open a container of a gaseous equilibrium to the atmosphere, the system',
            options: ['stays at equilibrium', 'is no longer at equilibrium', 'reaches a new equilibrium instantly', 'reverses direction']
          }
        ],
        correctAnswers: [
          'constant but not necessarily equal',
          'closed system',
          'reactions are still occurring in both directions',
          'is no longer at equilibrium'
        ],
        hint1: 'Equilibrium means no net change, not that amounts are the same.',
        hint2: 'Equilibrium requires that no matter enters or leaves.',
        hint3: 'Opening the container allows gases to escape — the system is no longer closed.',
        explanation: 'At equilibrium, concentrations are constant but can be very different from each other. The system must be closed (no matter exchange). "Dynamic" means reactions continue in both directions. Opening the system breaks the closed-system requirement.'
      }
    },
    {
      id: 'ie1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Equilibrium Practice** 🧮

Consider the reaction: $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$

At a certain temperature, the following data are collected at equilibrium:

| Species | Concentration (M) |
|---------|-------------------|
| H₂ | 0.10 |
| I₂ | 0.20 |
| HI | 0.40 |

1) What is the rate of the forward reaction compared to the reverse reaction at equilibrium? (Enter "equal")

2) If the forward reaction rate is $2.0 \\times 10^{-3}$ M/s, what is the reverse reaction rate in M/s? (Enter as a decimal, e.g. 0.002)

3) Is the concentration of HI changing at equilibrium? (Enter "no")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['equal', '0.002', 'no'],
        hint1: 'At equilibrium, the forward and reverse rates are always...',
        hint2: 'If the forward rate equals the reverse rate, what must the reverse rate be?',
        hint3: 'At equilibrium, all concentrations are constant.',
        explanation: '1) At equilibrium, forward rate = reverse rate (by definition). 2) Since the rates are equal at equilibrium, reverse rate = $2.0 \\times 10^{-3}$ M/s = 0.002 M/s. 3) No — concentrations do not change at equilibrium.'
      }
    },
    {
      id: 'ie1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Dynamic Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction reaches equilibrium in a sealed flask. Which is true?',
            options: [
              'The amounts of reactants and products must be equal',
              'The forward reaction rate exceeds the reverse rate',
              'Both forward and reverse reactions continue at equal rates',
              'All chemical change has ceased'
            ],
            correctAnswer: 2,
            explanation: 'At equilibrium, forward rate = reverse rate. Both reactions continue (dynamic), but there is no net change in concentrations.'
          },
          {
            question: 'Which of the following is NOT a requirement for chemical equilibrium?',
            options: [
              'The system must be closed',
              'The reaction must be reversible',
              'The concentrations of products and reactants must be equal',
              'The temperature must be constant'
            ],
            correctAnswer: 2,
            explanation: 'Equilibrium does NOT require equal concentrations. It only requires that concentrations be constant (no net change). The system must be closed, the reaction reversible, and the temperature constant.'
          }
        ]
      }
    }
  ]
}
