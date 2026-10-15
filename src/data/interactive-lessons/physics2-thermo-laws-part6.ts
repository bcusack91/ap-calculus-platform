export const physics2ThermoLawsPart6Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl6-intro',
      type: 'text' as const,
      content: `
# 🛤️ Same Endpoints, Different Paths

**Part 6 of 7 — State Functions vs. Path-Dependent Energy Transfers**

Internal energy belongs to a **state**; heating and work belong to a **process**. That difference explains a classic AP question: a gas goes from state A to state B along two different paths — which quantities are the same, and which are not?
      `
    },
    {
      id: 'tl6-paths',
      type: 'text' as const,
      content: `
## Two Paths Between the Same States

A monatomic ideal gas starts at state A ($2.0$ L, $300$ kPa) and ends at state B ($6.0$ L, $100$ kPa). Notice that $PV = 600$ J at both states, so A and B are at the **same temperature**.

**Path 1:** expand at constant pressure (300 kPa) from 2.0 L to 6.0 L, then cool at constant volume down to 100 kPa.

**Path 2:** cool at constant volume from 300 kPa to 100 kPa, then expand at constant pressure (100 kPa) to 6.0 L.

| Quantity | Path 1 | Path 2 | Same or different? |
|---|---|---|---|
| $W$ (on gas) | $-(300)(4.0) = -1200$ J | $-(100)(4.0) = -400$ J | Different |
| $\\Delta U = \\frac{3}{2}\\Delta(PV)$ | $0$ | $0$ | Same |
| $Q = \\Delta U - W$ | $+1200$ J | $+400$ J | Different |

### The Lesson

- **$\\Delta U$ depends only on the endpoints**, because internal energy is a function of state (for an ideal gas, of temperature alone).
- **$W$ and $Q$ depend on the path**, because they describe how energy crossed the boundary along the way. A path at higher pressure means more area under the curve, so more work.
- A third path, the smooth isotherm from A to B, would have $|W|$ between 400 J and 1200 J, because its curve lies between the two paths.
      `
    },
    {
      id: 'tl6-path-quiz',
      type: 'multiple-choice' as const,
      content: `
**Path Reasoning Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'A gas is taken from state A to state B along two different paths on a PV diagram. Which quantity must be the same for both paths?',
            options: [
              'The change in internal energy',
              'The work done on the gas',
              'The energy added by heating',
              'The area under the path'
            ],
            correctAnswer: 0,
            explanation: 'Internal energy is a state function, so its change depends only on the starting and ending states. Work equals the area under each path, which differs, and heating then differs too because $Q = \\Delta U - W$.'
          },
          {
            question: 'Two paths connect the same initial and final states of a gas that expands. Path 1 runs at higher pressure than path 2 throughout. Compared with path 2, path 1 requires:',
            options: [
              'More energy added by heating',
              'Less energy added by heating',
              'The same energy added by heating',
              'No energy added by heating'
            ],
            correctAnswer: 0,
            explanation: 'Path 1 has more area under its curve, so the gas does more work. Both paths share the same $\\Delta U$, so by $Q = \\Delta U - W$, path 1 must take in more energy by heating to supply the extra work.'
          }
        ]
      }
    },
    {
      id: 'tl6-special',
      type: 'text' as const,
      content: `
## Reasoning Without Numbers

Many AP questions give no numbers at all. Decide each sign from the physical situation, then let the first law fill in the last one.

| Situation | $W$ (on gas) | $Q$ | $\\Delta U$ and $T$ |
|---|---|---|---|
| A bicycle pump is pushed in quickly (no time for heating) | $+$ (compression) | $0$ (adiabatic) | $\\Delta U > 0$, gas warms |
| Gas in an insulated cylinder pushes a piston out | $-$ (expansion) | $0$ (adiabatic) | $\\Delta U < 0$, gas cools |
| Gas is compressed slowly in a cylinder sitting in an ice bath | $+$ | $-$ (must lose energy) | $0$, isothermal |
| A valve opens and gas rushes into an empty, insulated chamber | $0$ (pushes on nothing) | $0$ | $0$, temperature unchanged |

### Two Facts About Internal Energy
- An ideal gas has **no internal potential energy**, because its atoms do not interact except during collisions. Its internal energy is the total kinetic energy of the atoms, $U = \\frac{3}{2}nRT$ for a monatomic gas.
- Internal energy does **not** include the motion of the container. A sealed tank of gas on a moving truck has the same internal energy as the same tank at rest, because the truck's motion moves the center of mass of the gas without changing the random motion of its atoms.
      `
    },
    {
      id: 'tl6-reasoning-drill',
      type: 'dropdown-select' as const,
      content: `
**Sign Reasoning Drill** 🎯

Choose the sign of the named quantity for each process of an ideal gas.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A gas is compressed quickly in an insulated cylinder. The change in its internal energy is',
            options: ['positive', 'negative', 'zero', 'undetermined']
          },
          {
            label: 'A gas is compressed slowly at constant temperature. The energy it gains by heating, Q, is',
            options: ['positive', 'negative', 'zero', 'undetermined']
          },
          {
            label: 'A gas in an insulated box spreads into an evacuated second chamber. The work done on the gas is',
            options: ['positive', 'negative', 'zero', 'undetermined']
          },
          {
            label: 'A gas is heated at constant volume. The work done on the gas is',
            options: ['positive', 'negative', 'zero', 'undetermined']
          }
        ],
        correctAnswers: ['positive', 'negative', 'zero', 'zero'],
        hint1: 'Adiabatic means $Q = 0$, so $\\Delta U = W$.',
        hint2: 'Constant temperature means $\\Delta U = 0$, so $Q = -W$.',
        hint3: 'Work requires a moving boundary pushing against something; an empty chamber pushes back with no pressure, and a rigid container does not move.',
        explanation: 'Quick compression with no heating: $\\Delta U = W > 0$. Isothermal compression: $\\Delta U = 0$ and $W > 0$, so $Q < 0$. Free expansion: nothing pushes back, so $W = 0$. Constant volume: no boundary moves, so $W = 0$.'
      }
    },
    {
      id: 'tl6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Air in a bicycle pump is compressed so quickly that essentially no energy is exchanged by heating. The temperature of the air:',
            options: [
              'Rises, because work done on it raises its internal energy',
              'Stays the same, because no energy is added by heating',
              'Falls, because compressed air has less room to move',
              'Stays the same, because the process is too fast to matter'
            ],
            correctAnswer: 0,
            explanation: 'With $Q = 0$, the first law gives $\\Delta U = W$, and compression makes $W$ positive, so the internal energy and temperature rise. Heating is only one way to change internal energy; work is the other.'
          },
          {
            question: 'A sealed tank of ideal gas sits on a truck that speeds up from rest to 20 m/s. The gas temperature stays the same. The internal energy of the gas:',
            options: [
              'Is unchanged',
              'Increases by the kinetic energy of the tank',
              'Decreases as the gas is pressed backward',
              'Increases because the atoms move faster on average'
            ],
            correctAnswer: 0,
            explanation: 'Internal energy depends on the random motion of the atoms relative to the center of mass, which is set by temperature. Moving the whole tank adds kinetic energy of the center of mass, not internal energy, so with the temperature unchanged $U$ is unchanged.'
          }
        ]
      }
    }
  ]
}
