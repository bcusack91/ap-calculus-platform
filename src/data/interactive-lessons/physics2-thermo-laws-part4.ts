export const physics2ThermoLawsPart4Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl4-intro',
      type: 'text' as const,
      content: `
# 🔄 Energy Accounting Around a Cycle

**Part 4 of 7 — Tracking $Q$, $W$ and $\\Delta U$ Step by Step**

AP Physics 2 free-response questions love a gas taken around a closed loop on a PV diagram. To analyze one, you track three quantities for every step: the work done on the gas, the change in internal energy, and the energy transferred by heating. The first law ties them together on every leg.
      `
    },
    {
      id: 'tl4-leg-by-leg',
      type: 'text' as const,
      content: `
## The Three Tools

**1. Work on the gas, $W$, from the graph.** $|W|$ is the area under the leg. Expansion (moving right) makes $W < 0$; compression (moving left) makes $W > 0$; a vertical leg has $W = 0$. For a horizontal leg, $W = -P\\Delta V$.

**2. Internal energy, $\\Delta U$, from the endpoints.** For a monatomic ideal gas, $U = \\frac{3}{2}nRT$, and since $PV = nRT$:

$$\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}\\Delta(PV)$$

So you can find $\\Delta U$ straight from the pressures and volumes at the two ends of a leg.

**3. Heating, $Q$, from the first law.**

$$Q = \\Delta U - W$$

### Unit Shortcut
$1 \\text{ kPa} \\times 1 \\text{ L} = (10^3 \\text{ Pa})(10^{-3} \\text{ m}^3) = 1 \\text{ J}$, so products of kPa and L are already in joules.

### Whole-Cycle Rule
The gas ends where it started, so $\\Delta U_{\\text{cycle}} = 0$ and

$$Q_{\\text{net}} = -W_{\\text{net}}$$

The net energy added by heating equals the net work the gas does, which is the area enclosed by the loop.
      `
    },
    {
      id: 'tl4-sign-quiz',
      type: 'multiple-choice' as const,
      content: `
**Sign Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'An ideal gas expands at constant pressure. Which set of signs is correct for this step?',
            options: [
              '$W < 0$, $\\Delta U > 0$, $Q > 0$',
              '$W > 0$, $\\Delta U > 0$, $Q > 0$',
              '$W < 0$, $\\Delta U < 0$, $Q < 0$',
              '$W < 0$, $\\Delta U = 0$, $Q > 0$'
            ],
            correctAnswer: 0,
            explanation: 'Expanding means work done on the gas is negative. At constant pressure a larger volume means a larger $PV$, so the temperature and internal energy rise. Then $Q = \\Delta U - W$ is positive. $\\Delta U = 0$ would describe an isothermal step.'
          },
          {
            question: 'In a constant-volume step, the pressure of an ideal gas falls. Which statement is correct?',
            options: [
              'No work is done, and the gas loses energy by heating',
              'No work is done, and the gas gains energy by heating',
              'Positive work is done on the gas, and its energy rises',
              'The gas does work, so its internal energy falls'
            ],
            correctAnswer: 0,
            explanation: 'With no volume change, $W = 0$. Lower pressure at the same volume means lower $PV$, so the temperature and internal energy drop, and $Q = \\Delta U < 0$: the gas is cooled. Work cannot be done without a volume change.'
          }
        ]
      }
    },
    {
      id: 'tl4-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Rectangular Cycle

A monatomic ideal gas goes clockwise around this cycle:

| State | $V$ (L) | $P$ (kPa) | $PV$ (J) |
|---|---|---|---|
| A | 2.0 | 100 | 200 |
| B | 2.0 | 300 | 600 |
| C | 6.0 | 300 | 1800 |
| D | 6.0 | 100 | 600 |

A→B is constant volume, B→C is constant pressure, C→D is constant volume, and D→A is constant pressure.

| Step | $W$ (on gas) | $\\Delta U = \\frac{3}{2}\\Delta(PV)$ | $Q = \\Delta U - W$ |
|---|---|---|---|
| A→B | $0$ | $+600$ J | $+600$ J |
| B→C | $-(300)(4.0) = -1200$ J | $+1800$ J | $+3000$ J |
| C→D | $0$ | $-1800$ J | $-1800$ J |
| D→A | $-(100)(-4.0) = +400$ J | $-600$ J | $-1000$ J |
| **Cycle** | $-800$ J | $0$ | $+800$ J |

**Checks:**
- $\\Delta U$ sums to zero, as it must for a cycle.
- $Q_{\\text{net}} = +800$ J $= -W_{\\text{net}}$.
- The enclosed area is $(200 \\text{ kPa})(4.0 \\text{ L}) = 800$ J, matching the net work done by the gas.

The gas takes in $600 + 3000 = 3600$ J by heating and gives out $1800 + 1000 = 2800$ J by cooling; the 800 J difference leaves as net work. Heat engines run cycles like this one, but engine-efficiency formulas are not part of AP Physics 2.

### Temperature at a Glance
Since $T \\propto PV$ for a fixed amount of gas, the hottest state is the one with the largest $PV$ (state C here) and the coldest has the smallest (state A).
      `
    },
    {
      id: 'tl4-cycle-drill',
      type: 'input-boxes' as const,
      content: `
**Cycle Step Drill** 🔧

A monatomic ideal gas goes from state A ($1.0$ L, $200$ kPa) to state B ($4.0$ L, $200$ kPa) at constant pressure.

1) Work done on the gas during A→B (in J, with sign)

2) Change in internal energy during A→B (in J)

3) Energy transferred to the gas by heating during A→B (in J)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-600', '900', '1500'],
        hint1: '$W = -P\\Delta V = -(200 \\text{ kPa})(3.0 \\text{ L})$. kPa × L gives joules.',
        hint2: '$\\Delta U = \\frac{3}{2}\\Delta(PV) = \\frac{3}{2}(800 - 200)$.',
        hint3: '$Q = \\Delta U - W$.',
        explanation: '1) $W = -(200)(3.0) = -600$ J. 2) $PV$ goes from 200 J to 800 J, so $\\Delta U = \\frac{3}{2}(600) = 900$ J. 3) $Q = 900 - (-600) = 1500$ J: the gas needed 900 J to warm up plus 600 J to push the surroundings back.'
      }
    },
    {
      id: 'tl4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A gas goes once around a clockwise loop whose enclosed area on a PV diagram is 500 J. Over the full cycle:',
            options: [
              '$\\Delta U = 0$, and the gas gains a net 500 J by heating',
              '$\\Delta U = 500$ J, and no net energy is exchanged by heating',
              '$\\Delta U = 0$, and the gas loses a net 500 J by heating',
              '$\\Delta U = -500$ J, and the gas gains 500 J by heating'
            ],
            correctAnswer: 0,
            explanation: 'Any complete cycle has $\\Delta U = 0$. Clockwise means the gas does 500 J of net work, so $W_{\\text{net}} = -500$ J and $Q_{\\text{net}} = -W_{\\text{net}} = +500$ J. Losing energy by heating would describe a counterclockwise loop.'
          },
          {
            question: 'On a PV diagram, state X has $PV = 900$ J and state Y has $PV = 300$ J for the same sample of gas. Compared with state Y, state X has:',
            options: [
              'Three times the absolute temperature',
              'One-third the absolute temperature',
              'The same absolute temperature',
              'Nine times the original absolute temperature'
            ],
            correctAnswer: 0,
            explanation: 'For a fixed amount of ideal gas, $T = PV/(nR)$, so temperature is proportional to the product $PV$. Tripling $PV$ triples the absolute temperature, and the internal energy triples with it.'
          }
        ]
      }
    }
  ]
}
