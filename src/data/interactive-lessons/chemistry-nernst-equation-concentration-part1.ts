export const chemNernstEquationConcentrationPart1Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne1-intro',
      type: 'text' as const,
      content: `
# 📉 Non-Standard Conditions — The Nernst Equation

**Part 1 of 7 — E = E° − (RT/nF) ln Q**

Standard cell potentials ($E°$) apply only when all concentrations are 1 M and all pressures are 1 atm. Real cells rarely operate at standard conditions. The Nernst equation tells us the cell potential at **any** set of conditions.
      `
    },
    {
      id: 'ne1-derivation',
      type: 'text' as const,
      content: `
## Deriving the Nernst Equation

We know:
$$\\Delta G = \\Delta G° + RT\\ln Q$$

And: $\\Delta G = -nFE$ and $\\Delta G° = -nFE°$

Substituting:
$$-nFE = -nFE° + RT\\ln Q$$

Dividing by $-nF$:

$$\\boxed{E = E° - \\frac{RT}{nF}\\ln Q}$$

### Variables

| Symbol | Meaning | Value |
|--------|---------|-------|
| $E$ | Cell potential at current conditions | V |
| $E°$ | Standard cell potential | V |
| $R$ | Gas constant | $8.314$ J/(mol·K) |
| $T$ | Temperature | K |
| $n$ | Moles of electrons transferred | — |
| $F$ | Faraday\'s constant | $96{,}485$ C/mol |
| $Q$ | Reaction quotient | — |
      `
    },
    {
      id: 'ne1-interpretation',
      type: 'text' as const,
      content: `
## Interpreting the Nernst Equation

$$E = E° - \\frac{RT}{nF}\\ln Q$$

### How Q Affects E

| Condition | $Q$ | $\\ln Q$ | Effect on $E$ |
|-----------|-----|---------|--------------|
| Mostly reactants | $Q < 1$ | Negative | $E > E°$ (higher voltage) |
| Standard conditions | $Q = 1$ | Zero | $E = E°$ |
| Mostly products | $Q > 1$ | Positive | $E < E°$ (lower voltage) |
| At equilibrium | $Q = K$ | — | $E = 0$ |

### Key Insight

As a galvanic cell operates:
1. Reactants are consumed → $Q$ increases
2. $E$ decreases as $Q$ → $K$
3. When $Q = K$: $E = 0$ — the battery is "dead"

A "dead" battery is simply a cell that has reached equilibrium!
      `
    },
    {
      id: 'ne1-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

For the Daniell cell: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$

$E° = +1.10$ V, $n = 2$

Find $E$ when $[\\text{Zn}^{2+}] = 0.10$ M, $[\\text{Cu}^{2+}] = 2.0$ M at 298 K.

**Step 1: Write Q** (solids are excluded)

$$Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} = \\frac{0.10}{2.0} = 0.050$$

**Step 2: Apply Nernst Equation**

$$E = 1.10 - \\frac{(8.314)(298)}{(2)(96{,}485)}\\ln(0.050)$$

$$E = 1.10 - \\frac{2478}{192{,}970}(-3.00)$$

$$E = 1.10 - (0.01284)(-3.00) = 1.10 + 0.039 = 1.14 \\text{ V}$$

$E > E°$ because $Q < 1$ — there are excess reactants (Cu²⁺), driving a higher voltage.
      `
    },
    {
      id: 'ne1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Nernst Equation Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When Q = 1, the Nernst equation gives:',
            options: [
              'E = 0',
              'E = E°',
              'E = RT/nF',
              'E = −E°'
            ],
            correctAnswer: 1,
            explanation: '$E = E° - (RT/nF)\\ln(1) = E° - 0 = E°$. At standard conditions ($Q = 1$), the cell potential equals the standard cell potential.'
          },
          {
            question: 'As a galvanic cell discharges, what happens to Q and E?',
            options: [
              'Q increases, E increases',
              'Q decreases, E decreases',
              'Q increases, E decreases',
              'Q decreases, E increases'
            ],
            correctAnswer: 2,
            explanation: 'As the cell operates, reactants are consumed and products form, so $Q$ increases. According to the Nernst equation, increasing $Q$ makes $\\ln Q$ larger, which decreases $E$.'
          },
          {
            question: 'A "dead" battery has:',
            options: [
              'E = E° and Q = 1',
              'E = 0 and Q = K',
              'E = E° and Q = K',
              'E = 0 and Q = 0'
            ],
            correctAnswer: 1,
            explanation: 'A dead battery has reached equilibrium: $Q = K$ and $E = 0$. There is no driving force for the reaction in either direction.'
          }
        ]
      }
    },
    {
      id: 'ne1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Nernst Equation Calculations** 🧮

For a cell with $E° = +0.80$ V and $n = 2$ at 298 K:

1) If $Q = 1$, what is $E$? (in V)

2) If $Q = 100$, is $E$ greater than or less than $E°$? (type "greater" or "less")

3) If $Q = K$, what is $E$? (in V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.80', 'less', '0'],
        hint1: '$\\ln(1) = 0$, so the correction term vanishes.',
        hint2: '$Q > 1$ means $\\ln Q > 0$, which subtracts from $E°$.',
        hint3: 'At equilibrium, no driving force remains.',
        explanation: '1) $E = E° - 0 = 0.80$ V. 2) $Q > 1$ → $\\ln Q > 0$ → subtracted from $E°$ → $E < E°$. 3) At equilibrium, $E = 0$ V.'
      }
    },
    {
      id: 'ne1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Nernst Equation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The Nernst equation is derived from combining ΔG = ΔG° + RT ln Q with',
            options: ['PV = nRT', 'ΔG = −nFE', 'q = mcΔT', 'rate = k[A]']
          },
          {
            label: 'Increasing reactant concentration causes Q to',
            options: ['increase', 'decrease', 'stay the same', 'equal K']
          },
          {
            label: 'When Q decreases, the cell potential E',
            options: ['decreases', 'increases', 'stays the same', 'equals zero']
          },
          {
            label: 'The Nernst equation reduces to E = E° when',
            options: ['T = 0 K', 'n = 0', 'Q = 1', 'Q = K']
          }
        ],
        correctAnswers: ['ΔG = −nFE', 'decrease', 'increases', 'Q = 1'],
        hint1: '$\\Delta G = -nFE$ connects free energy to cell potential.',
        hint2: 'More reactants in the denominator → smaller Q.',
        hint3: 'Lower Q → more negative $\\ln Q$ → less subtracted → higher E.',
        explanation: 'The Nernst equation comes from ΔG = −nFE and ΔG = ΔG° + RT ln Q. More reactants → smaller Q. Smaller Q → higher E (more driving force). Q = 1 → E = E°.'
      }
    },
    {
      id: 'ne1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Nernst Equation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For a cell with E° = 1.10 V, if you increase [products] while keeping [reactants] constant:',
            options: [
              'E increases because there are more products',
              'E decreases because Q increases',
              'E stays the same because E° does not change',
              'E becomes negative'
            ],
            correctAnswer: 1,
            explanation: 'Increasing products increases $Q$. From the Nernst equation, larger $Q$ → larger $\\ln Q$ → more is subtracted from $E°$ → lower $E$.'
          },
          {
            question: 'Why does the voltage of a battery decrease as it discharges?',
            options: [
              'The electrodes wear out',
              'The temperature decreases',
              'Q approaches K, and the Nernst equation shows E → 0',
              'E° changes over time'
            ],
            correctAnswer: 2,
            explanation: 'As the cell operates, reactants are consumed and products accumulate, so $Q$ increases toward $K$. The Nernst equation shows that as $Q \\rightarrow K$, $E \\rightarrow 0$.'
          }
        ]
      }
    }
  ]
}
