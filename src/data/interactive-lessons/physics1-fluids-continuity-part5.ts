export const physics1FluidsContinuityPart5Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc5-intro',
      type: 'text' as const,
      content: `
# ⚖ Mass Flow Rate

**Part 5 of 7 — Fluids: Continuity**

Volume flow rate $Q = Av$ tells you how many cubic meters pass each second. Multiplying by the density turns it into **mass flow rate** $\\dot m = \\rho A v$: how many kilograms pass each second. Continuity is really a statement that mass is conserved (EK 8.4.A.1–8.4.A.2).

**In this lesson you will learn:**
- The definition $\\dot m = \\rho A v = \\rho Q$
- Why conserving mass and conserving volume say the same thing for an incompressible fluid
- How to convert between mass and volume flow rates
- AP-style problems with different fluids
      `
    },
    {
      id: 'fc5-mass',
      type: 'text' as const,
      content: `
## Mass Flow Rate

$$\\dot m = \\rho\\, A\\, v$$

- $\\dot m$: mass flow rate (kg/s)
- $\\rho$: fluid density $(kg/m^{3})$
- $A$: cross-sectional area $(m^{2})$
- $v$: speed (m/s)

### Continuity as Conservation of Mass

Matter cannot pile up inside a completely filled pipe, so the mass entering each second equals the mass leaving each second:

$$\\rho A_1 v_1 = \\rho A_2 v_2$$

An ideal fluid is incompressible (EK 8.1.A.4), so $\\rho$ is the same everywhere and cancels, giving $A_1 v_1 = A_2 v_2$. Conserving mass flow rate and conserving volume flow rate are the same statement.

### Why It Matters

- Mass flow rate answers "how many kilograms per second?", which is what you need for questions about delivered mass or momentum carried by a stream.
- Two different fluids with the same $Q$ carry different mass flow rates: oil ($\\rho = 850$) carries less mass per second than water at the same $Q$.
- AP Physics 1 treats every fluid as ideal and incompressible, including slowly moving air in a duct.

### Quick Conversions

$$Q (\\text{m}^3/\\text{s}) \\times \\rho (\\text{kg/m}^3) = \\dot m (\\text{kg/s})$$

For water ($\\rho = 1000$): $\\dot m = 1000\\, Q$.
      `
    },
    {
      id: 'fc5-mc',
      type: 'multiple-choice' as const,
      content: `
**Mass Flow Rate Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mass flow rate $\\dot m$ has units of:',
            options: ['$m^{3}/s$', 'kg/s', 'N/s', 'm/s'],
            correctAnswer: 1,
            explanation: '$\\dot m = \\rho A v$ → $kg/m^{3}$ × $m^{2}$ × m/s = kg/s.'
          },
          {
            question: 'For an incompressible fluid, mass flow rate equals:',
            options: [
              '$\\rho Q$',
              '$Q / \\rho$',
              '$\\rho g Q$',
              '$\\rho Q/A$'
            ],
            correctAnswer: 0,
            explanation: '$\\dot m = \\rho A v = \\rho Q$. Multiplying by $g$ as well gives a weight flow rate (N/s), and $\\rho Q/A = \\rho v$ is mass per area per time, not mass per time.'
          },
          {
            question: 'A pipe carries water at $Q = 0.020$ $m^{3}/s$. The mass flow rate is:',
            options: [
              '0.020 kg/s',
              '20 kg/s',
              '200 kg/s',
              '0.00002 kg/s'
            ],
            correctAnswer: 1,
            explanation: '$\\dot m = \\rho Q = 1000 \\times 0.020 = 20$ kg/s. Leaving out $\\rho$ gives 0.020 kg/s, dividing by $\\rho$ gives 0.00002 kg/s, and also multiplying by $g$ gives 200 (a weight rate, not a mass rate).'
          }
        ]
      }
    },
    {
      id: 'fc5-input',
      type: 'input-boxes' as const,
      content: `
**Mass Flow Calculations** 🧮 ($\\rho_w = 1000$, $\\rho_{oil} = 850$)

1) Pipe area $A = 0.0040$ $m^{2}$, $v = 5.0$ m/s carries water. $\\dot m$ (kg/s)?

2) Same pipe carrying oil instead. $\\dot m$ (kg/s)?

3) A 0.50 $m^{2}$ pipe with $v = 2.0$ m/s carries air ($\\rho = 1.2$). $\\dot m$ (kg/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '17', '1.2'],
        hint1: '$\\dot m = \\rho A v$.',
        hint2: 'Lower density.',
        hint3: '$\\dot m = \\rho A v$.',
        explanation: '1) $\\dot m = 1000(0.0040)(5.0) = 20$ kg/s. 2) $\\dot m = 850(0.0040)(5.0) = 17$ kg/s. 3) $\\dot m = 1.2(0.50)(2.0) = 1.2$ kg/s.'
      }
    },
    {
      id: 'fc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mass Flow Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For an incompressible fluid in a pipe with no leaks, mass flow rate $\\dot m$:',
            options: ['Decreases at constrictions', 'Increases at constrictions', 'Stays constant everywhere', 'Is largest where the pipe is widest'],
            correctIndex: 2,
            explanation: 'Volume conservation + constant density → mass flow rate is conserved everywhere.'
          },
          {
            label: 'Water flows from a wide pipe into a pipe with half the cross-sectional area. The mass flow rate in the narrow pipe is:',
            options: ['half as large', 'the same', 'twice as large', 'four times as large'],
            correctIndex: 1,
            explanation: 'Mass cannot pile up in a filled pipe, so $\\dot m$ is the same in both sections. The speed doubles in the narrow pipe, but $\\rho A v$ does not change.'
          },
          {
            label: 'For water flowing in a pipe network, conservation of mass flow rate is equivalent to:',
            options: ['Conservation of volume flow rate', 'Conservation of pressure', 'Conservation of energy', 'Conservation of momentum'],
            correctIndex: 0,
            explanation: 'For incompressible fluids, $\\dot m = \\rho Q$ with constant $\\rho$, so conserving $\\dot m$ and conserving $Q$ say the same thing.'
          },
          {
            label: 'A liquid pipeline delivers 50 kg/s of water. The volume flow rate $(m^{3}/s)$ is:',
            options: ['0.05', '0.005', '50000', '50'],
            correctIndex: 0,
            explanation: '$Q = \\dot m/\\rho = 50/1000 = 0.05$ $m^{3}/s$ = 50 L/s. Forgetting $\\rho$ gives 50; multiplying by $\\rho$ gives 50000; also dividing by $g$ gives 0.005.'
          }
        ]
      }
    },
    {
      id: 'fc5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mass Flow Rate** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe carries oil ($\\rho = 850$ $kg/m^{3}$) at $v = 3.0$ m/s through cross-section $A = 0.020$ $m^{2}$. Mass flow rate?',
            options: [
              '0.06 kg/s',
              '17 kg/s',
              '51 kg/s',
              '2550 kg/s'
            ],
            correctAnswer: 2,
            explanation: '$\\dot m = \\rho A v = 850 \\times 0.020 \\times 3.0 = 51$ kg/s. Forgetting $\\rho$ gives 0.06, forgetting $v$ gives 17, and forgetting $A$ gives 2550.'
          },
          {
            question: 'A fan moves air ($\\rho = 1.2$ $kg/m^{3}$) through a 0.40 $m^{2}$ duct at 5 m/s. Mass flow rate?',
            options: [
              '6.0 kg/s',
              '2.4 kg/s',
              '2.0 kg/s',
              '15 kg/s'
            ],
            correctAnswer: 1,
            explanation: '$\\dot m = \\rho A v = 1.2 \\times 0.40 \\times 5 = 2.4$ kg/s. Forgetting $A$ gives 6.0, forgetting $\\rho$ gives 2.0, and dividing by $A$ gives 15.'
          }
        ]
      }
    }
  ]
}
