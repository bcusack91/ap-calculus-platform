export const mcatKineticsPart3Data = {
  topicSlug: 'mcat-general-chemistry-kinetics-mcat',
  sections: [
    {
      id: 'kin3-intro',
      type: 'text' as const,
      content: `# Chemical Kinetics

**Part 3 of 5 — Activation Energy, Arrhenius Equation & Collision Theory**

## Activation Energy ($E_a$)

The **activation energy** is the minimum energy that colliding molecules must have for a reaction to occur. The transition state (activated complex) sits at the energy maximum.

**Energy diagram key points:**

- **Reactants** → **Transition state** → **Products**
- $E_a(\\text{forward})$ = energy gap from reactants to peak
- $E_a(\\text{reverse})$ = energy gap from products to peak
- $\\Delta H = E_a(\\text{forward}) - E_a(\\text{reverse})$
- Exothermic: products at lower energy than reactants ($\\Delta H < 0$)
- Endothermic: products at higher energy than reactants ($\\Delta H > 0$)

A **catalyst** lowers $E_a$ (provides an alternative pathway) without changing $\\Delta H$ or the equilibrium constant.

## Arrhenius Equation

The Arrhenius equation describes how the rate constant $k$ depends on temperature:

$$k = Ae^{-E_a/RT}$$

where $A$ = frequency factor (pre-exponential factor accounting for collision frequency and orientation), $R = 8.314$ J/mol·K, $T$ = temperature in Kelvin.

**Logarithmic form:**
$$\\ln k = \\ln A - \\frac{E_a}{RT}$$

**Two-temperature form (MCAT-useful):**
$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

**Qualitative Rule of Thumb:**
For many reactions near room temperature, a **10°C rise in temperature approximately doubles the rate constant** (though the precise factor depends on $E_a$).

## Collision Theory

For a reaction to occur, molecules must:
1. **Collide** with enough energy ($\\geq E_a$)
2. Collide with the correct **orientation**

The fraction of collisions with energy $\\geq E_a$:

$$f = e^{-E_a/RT}$$

This fraction increases exponentially as $T$ increases or $E_a$ decreases, which is why:
- Higher temperature → faster rate
- Catalyst (lower $E_a$) → faster rate

## Effect of Temperature on Rate

| Factor | Effect on $k$ |
|--------|--------------|
| Increase $T$ | Increases $k$ (exponentially) |
| Decrease $T$ | Decreases $k$ |
| Lower $E_a$ (catalyst) | Increases $k$ |
| Higher $E_a$ | Decreases $k$ |

**MCAT application:** The Arrhenius equation explains why biological enzymes are so effective — they dramatically lower $E_a$ for biochemical reactions.

## Transition State Theory

The **transition state** (activated complex) is at the peak of the reaction coordinate diagram. It is not a stable product and cannot be isolated.

| Quantity | What it means |
|---------|--------------|
| $E_a$ | Energy barrier for forward reaction |
| $\\Delta H_{\\text{rxn}}$ | Overall enthalpy change |
| Transition state | High-energy, unstable intermediate |
| Intermediate | Stable (minimum) species between steps |

**Intermediate vs. transition state:** An intermediate lies in an **energy well** (local minimum) between two transition states. A transition state is at an **energy peak** (maximum).
`
    },
    {
      id: 'kin3-quiz',
      type: 'multiple-choice' as const,
      content: `**Activation Energy, Arrhenius & Transition State** 🎯`,
      exercise: {
        questions: [
          {
            question: `A catalyst is added to a reaction. Which of the following is TRUE?`,
            options: [
              `$\\Delta H$ increases`,
              `$E_a$ decreases but $\\Delta H$ is unchanged`,
              `$E_a$ and $\\Delta H$ both decrease`,
              `The equilibrium constant $K$ increases`
            ],
            correctAnswer: 1,
            explanation: `A catalyst provides an alternative pathway with lower $E_a$, but it does not change the thermodynamics of the reaction — $\\Delta H$ and $K$ are unchanged. Only the kinetics are affected.`
          },
          {
            question: `For a reaction with $E_a = 50$ kJ/mol, temperature increases from 300 K to 310 K. Using the Arrhenius equation (assume $R = 8.314$ J/mol·K), how does $k$ change?`,
            options: [
              `$k$ approximately doubles`,
              `$k$ increases by about 88%`,
              `$k$ stays the same`,
              `$k$ decreases because molecules lose energy`
            ],
            correctAnswer: 0,
            explanation: `$\\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2) = (50{,}000/8.314)(1/300 - 1/310) = 6013 \\times 1.075 \\times 10^{-4} \\approx 0.65$. $k_2/k_1 = e^{0.65} \\approx 1.9 \\approx \\mathbf{2\\times}$. This confirms the "doubling per 10°C" rule.`
          },
          {
            question: `An energy diagram shows two humps (transition states) with a valley between them. What occupies the valley between the two humps?`,
            options: [
              `The products`,
              `The reactants`,
              `A reaction intermediate`,
              `The transition state`
            ],
            correctAnswer: 2,
            explanation: `A valley (local energy minimum) between two transition-state peaks represents a **reaction intermediate** — a species that forms and then reacts further. Transition states are at energy peaks, not valleys.`
          },
          {
            question: `Two reactions A and B have the same $E_a$, but reaction A has a larger pre-exponential factor $A$ in the Arrhenius equation. At the same temperature, how do their rate constants compare?`,
            options: [
              `$k_A < k_B$`,
              `$k_A = k_B$`,
              `$k_A > k_B$`,
              `Cannot be determined without knowing $\\Delta H$`
            ],
            correctAnswer: 2,
            explanation: `$k = Ae^{-E_a/RT}$. Since $E_a$ and $T$ are equal for both, the larger pre-exponential $A$ (which reflects collision frequency and geometric probability) gives a **larger $k$** for reaction A.`
          },
          {
            question: `Which change increases the fraction of collisions with sufficient energy to react?`,
            options: [
              `Decreasing temperature`,
              `Increasing activation energy`,
              `Increasing temperature`,
              `Removing the catalyst`
            ],
            correctAnswer: 2,
            explanation: `The fraction $f = e^{-E_a/RT}$ increases when the exponent $(-E_a/RT)$ becomes less negative — either by decreasing $E_a$ (catalyst) or **increasing $T$**. More thermal energy means more molecules exceed the activation energy threshold.`
          }
        ]
      }
    },
    {
      id: 'kin3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- $E_a$ = minimum energy for a successful reaction; sits at transition state peak
- Arrhenius: $k = Ae^{-E_a/RT}$; larger $E_a$ or lower $T$ → smaller $k$
- Catalyst lowers $E_a$, increases rate, but does NOT change $\\Delta H$ or $K_{eq}$
- Two-temperature Arrhenius: $\\ln(k_2/k_1) = (E_a/R)(1/T_1 - 1/T_2)$
- Rough rule: 10°C rise ≈ doubles reaction rate (for moderate $E_a$)
- Intermediate: energy valley (local minimum) between two transition states
- Transition state: energy peak (maximum), cannot be isolated
`
    }
  ]
};
