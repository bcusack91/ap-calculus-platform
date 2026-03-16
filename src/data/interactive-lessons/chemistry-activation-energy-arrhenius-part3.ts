export const chemActivationEnergyArrheniusPart3Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae3-intro',
      type: 'text' as const,
      content: `
# 📐 The Arrhenius Equation

**Part 3 of 7 — Connecting Rate Constants to Temperature**

The Arrhenius equation is one of the most important equations in chemical kinetics. It quantitatively describes how the rate constant $k$ depends on temperature and activation energy.
      `
    },
    {
      id: 'ae3-equation',
      type: 'text' as const,
      content: `
## The Arrhenius Equation

$$\\boxed{k = Ae^{-E_a/(RT)}}$$

| Symbol | Name | Units |
|--------|------|-------|
| $k$ | Rate constant | Depends on order |
| $A$ | Frequency factor (pre-exponential factor) | Same as $k$ |
| $E_a$ | Activation energy | J/mol (or kJ/mol) |
| $R$ | Gas constant | 8.314 J/(mol·K) |
| $T$ | Temperature | Kelvin (always!) |

### What Each Part Means

**$A$ (frequency factor):** Related to how often molecules collide with correct orientation
- $A = Z \\cdot p$ (collision frequency × steric factor)
- Large $A$ → favorable collision geometry
- $A$ is approximately temperature-independent

**$e^{-E_a/(RT)}$ (Boltzmann factor):** Fraction of collisions with sufficient energy
- As $T \\uparrow$: $E_a/(RT) \\downarrow$, so $e^{-E_a/(RT)} \\uparrow$, so $k \\uparrow$
- As $E_a \\uparrow$: $E_a/(RT) \\uparrow$, so $e^{-E_a/(RT)} \\downarrow$, so $k \\downarrow$
      `
    },
    {
      id: 'ae3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Arrhenius Equation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the Arrhenius equation, increasing temperature:',
            options: [
              'Decreases k',
              'Increases k',
              'Has no effect on k',
              'Changes Ea'
            ],
            correctAnswer: 1,
            explanation: 'As T increases, Ea/(RT) decreases, so e^(−Ea/RT) increases, making k larger. Higher temperature → larger rate constant → faster reaction.'
          },
          {
            question: 'If Ea = 0 (no activation barrier), then k equals:',
            options: [
              '0',
              'A (the frequency factor)',
              'RT',
              'Infinity'
            ],
            correctAnswer: 1,
            explanation: 'If Ea = 0: k = Ae^(0) = A × 1 = A. Every collision with correct orientation leads to reaction.'
          },
          {
            question: 'Two reactions have the same A value. Reaction 1 has Ea = 40 kJ/mol, Reaction 2 has Ea = 80 kJ/mol. At the same temperature:',
            options: [
              'Reaction 1 is faster',
              'Reaction 2 is faster',
              'Both have the same rate',
              'Cannot determine without knowing T'
            ],
            correctAnswer: 0,
            explanation: 'Lower Ea means a larger Boltzmann factor (e^(−Ea/RT)), which gives a larger k, and therefore a faster reaction.'
          }
        ]
      }
    },
    {
      id: 'ae3-temperature-effects',
      type: 'text' as const,
      content: `
## Temperature Sensitivity and Ea

### How Much Does k Change with Temperature?

The sensitivity of $k$ to temperature depends on $E_a$:

- **Large $E_a$**: $k$ is very sensitive to temperature changes (reaction speeds up dramatically)
- **Small $E_a$**: $k$ is less sensitive to temperature changes

### Example Calculation

For $E_a = 100$ kJ/mol, comparing $k$ at 300 K and 310 K:

$$\\frac{k_{310}}{k_{300}} = \\frac{e^{-E_a/(R \\cdot 310)}}{e^{-E_a/(R \\cdot 300)}} = e^{(E_a/R)(1/300 - 1/310)}$$

$$= e^{(100{,}000/8.314)(1/300 - 1/310)}$$

$$= e^{(12{,}027)(1.075 \\times 10^{-4})} = e^{1.293} = 3.64$$

A 10°C increase nearly **quadruples** the rate for this high-$E_a$ reaction!

For $E_a = 20$ kJ/mol:
$$\\frac{k_{310}}{k_{300}} = e^{(20{,}000/8.314)(1.075 \\times 10^{-4})} = e^{0.259} = 1.30$$

Only a 30% increase — much less sensitive.
      `
    },
    {
      id: 'ae3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Arrhenius Calculations** 🧮

1) Calculate $E_a/(RT)$ for $E_a = 75.0$ kJ/mol at $T = 500$ K. ($R = 8.314$ J/(mol·K); to 3 significant figures)

2) A reaction has $A = 1.0 \\times 10^{13}$ s⁻¹ and $E_a = 100$ kJ/mol. Calculate $k$ at 300 K. (in s⁻¹, to 1 significant figure in scientific notation: e.g., 3e-5)

3) If $k = 0.010$ s⁻¹ at 300 K and $k = 0.040$ s⁻¹ at 310 K, by what factor does k increase? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18.0', '2e-9', '4.0'],
        hint1: 'Ea/(RT) = 75,000/(8.314 × 500) = 75,000/4157 = 18.04 ≈ 18.0.',
        hint2: 'k = 1.0e13 × e^(−100,000/(8.314×300)) = 1.0e13 × e^(−40.1) = 1.0e13 × 3.7e-18... Hmm: e^(−40.1) ≈ 3.7 × 10⁻¹⁸. k = 1.0e13 × 3.7e-18 = 3.7e-5. Wait, let me recalculate: Ea/RT = 100,000/(8.314×300) = 100,000/2494 = 40.1. e^(−40.1) ≈ 3.7 × 10⁻¹⁸. k = 1.0e13 × 3.7e-18 = 3.7e-5.',
        hint3: '0.040/0.010 = 4.0.',
        explanation: '1) 75,000/(8.314 × 500) = 18.0. 2) Ea/(RT) = 100,000/2494 = 40.1; e^(−40.1) = 3.7 × 10⁻¹⁸; k = 1.0 × 10¹³ × 3.7 × 10⁻¹⁸ = 3.7 × 10⁻⁵ s⁻¹. 3) k₂/k₁ = 0.040/0.010 = 4.0.'
      }
    },
    {
      id: 'ae3-a-factor',
      type: 'text' as const,
      content: `
## The Frequency Factor A

The frequency factor $A$ represents the maximum possible rate constant — the value $k$ would have if every collision were effective ($E_a = 0$).

### Typical Values

| Reaction Type | Typical $A$ | Why |
|--------------|------------|-----|
| Gas-phase, simple molecules | $10^{10}$–$10^{14}$ s⁻¹ | High collision frequency |
| Solution-phase | $10^{8}$–$10^{12}$ s⁻¹ | Solvent cage effects |
| Reactions needing precise orientation | Lower $A$ | Small steric factor $p$ |

### Key Point for AP

$A$ is assumed to be approximately **independent of temperature** (it has a very weak $T$ dependence that is negligible compared to the exponential). All the temperature dependence of $k$ comes from the $e^{-E_a/(RT)}$ term.
      `
    },
    {
      id: 'ae3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Arrhenius Equation Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'As T → ∞, the rate constant k approaches',
            options: ['0', 'A', 'infinity', 'Ea']
          },
          {
            label: 'A reaction with high Ea will be',
            options: ['fast at all temperatures', 'slow at low T, faster at high T', 'independent of temperature', 'always slow']
          },
          {
            label: 'The frequency factor A has the same units as',
            options: ['Ea', 'R', 'k', 'T']
          },
          {
            label: 'In the Arrhenius equation, temperature must be in',
            options: ['Celsius', 'Fahrenheit', 'Kelvin', 'any unit']
          }
        ],
        correctAnswers: ['A', 'slow at low T, faster at high T', 'k', 'Kelvin'],
        hint1: 'As T → ∞: Ea/(RT) → 0, e^0 = 1, k → A.',
        hint2: 'High Ea means e^(−Ea/RT) is small at low T but increases at high T.',
        hint3: 'k = A × (dimensionless), so A has units of k.',
        explanation: 'As T → ∞, k → A. High Ea reactions are very temperature-sensitive. A has same units as k. Temperature must be in Kelvin (absolute scale).'
      }
    },
    {
      id: 'ae3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Arrhenius Equation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which graph of k vs T correctly shows the Arrhenius relationship?',
            options: [
              'A straight line through the origin',
              'A decreasing exponential curve',
              'An increasing exponential curve',
              'A parabola'
            ],
            correctAnswer: 2,
            explanation: 'k = Ae^(−Ea/RT). As T increases, k increases exponentially. The k vs T graph curves upward — it is NOT linear.'
          },
          {
            question: 'At very low temperatures (T → 0), the Arrhenius equation predicts k →',
            options: [
              '0',
              'A',
              'Infinity',
              'Ea/R'
            ],
            correctAnswer: 0,
            explanation: 'As T → 0: Ea/(RT) → ∞, e^(−∞) = 0, so k → 0. At absolute zero, no molecules have enough energy to overcome the activation barrier.'
          }
        ]
      }
    }
  ]
}
