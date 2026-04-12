export const physics2ThermoProcPart2Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p2-intro',
      type: 'text' as const,
      content: `# 🌡️ Isothermal & Adiabatic Processes

**Part 2 of 7 — Constant Temperature & No Heat Transfer**

---

### Isothermal Process ($T$ = constant)

For an ideal gas at constant temperature:
$$PV = nRT = \\\\text{constant}$$

$$W = nRT\\\\ln\\\\frac{V_f}{V_i}$$

Since $T$ is constant: $\\\\Delta U = 0$, so $Q = W$.

All heat absorbed goes directly to work!

---

### Adiabatic Process ($Q = 0$)

$$PV^\\\\gamma = \\\\text{constant}$$

where $\\\\gamma = C_p/C_v$ (ratio of specific heats)

| Gas Type | $\\\\gamma$ |
|----------|------------|
| Monatomic (He, Ar) | 5/3 \\\\approx 1.67 |
| Diatomic (N₂, O₂) | 7/5 = 1.4 |

Since $Q = 0$: $\\\\Delta U = -W$
- Adiabatic expansion: gas does work and cools
- Adiabatic compression: work is done on gas and it heats up`
    },    {
      id: 'thermodynamicprocesses-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In an isothermal expansion of an ideal gas:',
            options: ['$\\\\Delta U > 0$', '$\\\\Delta U < 0$', '$\\\\Delta U = 0$', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'Isothermal: constant $T$ → $\\\\Delta U = 0$ for ideal gas.'
          },
          {
            question: 'An adiabatic curve on a PV diagram is:',
            options: ['The same as isothermal', 'Steeper than isothermal', 'Flatter than isothermal', 'A straight line'],
            correctAnswer: 1,
            explanation: 'Adiabatic curves drop more steeply because temperature also changes.'
          },
          {
            question: 'In adiabatic compression, temperature:',
            options: ['Decreases', 'Stays constant', 'Increases', 'Depends on the gas'],
            correctAnswer: 2,
            explanation: '$Q = 0$ and $W < 0$ (work done on gas), so $\\\\Delta U > 0$ → temperature increases.'
          }
        ]
      }
    },    {
      id: 'thermodynamicprocesses-p2-input',
      type: 'input-boxes' as const,
      content: `
**Process Identification** 🧮

An ideal gas expands slowly while in contact with a heat reservoir at 300 K.

**1)** What type of process? (isothermal/adiabatic/isobaric/isochoric)

**2)** $\\\\Delta U = ?$ (number)

**3)** If $W = 500$ J, how much heat flows in? (in joules)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['isothermal', '0', '500'],
        hint1: 'Heat reservoir maintains constant temperature',
        hint2: '$\\\\Delta U$ for constant T ideal gas?',
        hint3: '$Q = \\\\Delta U + W$',
        explanation: '1) Isothermal — constant temperature with heat reservoir. 2) $\\\\Delta U = 0$ (constant T). 3) $Q = 0 + 500 = 500$ J.'
      }
    }
  ]
};
