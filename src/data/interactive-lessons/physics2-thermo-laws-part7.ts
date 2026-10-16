export const physics2ThermoLawsPart7Data = {
  topicSlug: 'laws-of-thermodynamics',
  sections: [
    {
      id: 'tl7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

Let's compare all four thermodynamic processes, review PV diagram analysis, and tackle the kinds of problems you'll see on the AP Physics 2 exam.
      `
    },
    {
      id: 'tl7-process-table',
      type: 'text' as const,
      content: `
## The Four Processes — Complete Comparison

All entries use the AP form $\\Delta U = Q + W$, where $W$ is the work done **on** the gas.

| Process | Constant | $W$ (on gas) | $\\Delta U$ | $Q$ | PV Shape |
|---------|----------|-----|------------|-----|----------|
| **Isobaric** | $P$ | $-P\\Delta V$ | $Q + W$ | $\\Delta U - W$ | Horizontal line |
| **Isochoric** | $V$ | $0$ | $Q$ | $\\Delta U$ | Vertical line |
| **Isothermal** | $T$ | $-Q$ | $0$ | $-W$ | Hyperbola ($PV = \\text{const}$) |
| **Adiabatic** | $Q = 0$ | $\\Delta U$ | $W$ | $0$ | Steeper than an isotherm |

### Quick Decision Guide

- Temperature doesn't change? → **Isothermal** → $\\Delta U = 0$
- No heat exchange? → **Adiabatic** → $Q = 0$
- Volume doesn't change? → **Isochoric** → $W = 0$
- Pressure doesn't change? → **Isobaric** → $W = -P\\Delta V$

### Complete Cycle

For any complete cycle: $\\Delta U = 0$, so $Q_{\\text{net}} = -W_{\\text{net}}$. The net work done BY the gas (equal to $Q_{\\text{net}}$) is the enclosed area on the PV diagram, positive for a clockwise cycle.
      `
    },
    {
      id: 'tl7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

### ❌ Mistake 1: Using °C where absolute temperature is needed
$PV = nRT$ and $U = \\frac{3}{2}nRT$ require **kelvins**: $T(\\text{K}) = T(°\\text{C}) + 273$. (A temperature *change* is the same in °C and K.)

### ❌ Mistake 2: Confusing $W$ sign conventions
Many chemistry and engineering texts use $\\Delta U = Q - W$ with $W$ done BY the gas. The physics is the same; the AP Physics 2 equation sheet uses $W$ done ON the gas ($\\Delta U = Q + W$, with $W = -P\\Delta V$). If a question asks for the work done BY the gas, that quantity is $-W$.

### ❌ Mistake 3: Thinking $\\Delta U = 0$ means $T$ is constant
For an **ideal gas**, $\\Delta U = 0 \\Leftrightarrow \\Delta T = 0$ (true). But this is specific to ideal gases.

### ❌ Mistake 4: Assuming adiabatic = isothermal
Adiabatic ($Q = 0$) means no heat exchange. Isothermal ($\\Delta T = 0$) means constant temperature. An adiabatic expansion causes temperature to DROP.

### ❌ Mistake 5: Treating $Q$ and $W$ like state functions
Only $\\Delta U$ is fixed by the endpoints. Two paths between the same states can involve very different work and heating.

### ❌ Mistake 6: Saying a system's entropy can never decrease
That rule is for **isolated** systems. A closed system that loses energy to its surroundings can lose entropy, as long as the surroundings gain at least as much.
      `
    },
    {
      id: 'tl7-process-id-quiz',
      type: 'multiple-choice' as const,
      content: `
**Process Identification Mastery** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A gas is heated in a rigid container (fixed walls). This is:',
            options: [
              'Isobaric — constant pressure',
              'Isothermal — constant temperature',
              'Isochoric — constant volume',
              'Adiabatic — no heat exchange'
            ],
            correctAnswer: 2,
            explanation: 'Rigid container = fixed volume = isochoric. Since $W = 0$, all the heat goes into increasing internal energy: $\\Delta U = Q$.'
          },
          {
            question: 'A gas expands slowly in a perfectly insulated cylinder. This is:',
            options: [
              'Isothermal',
              'Isochoric',
              'Isobaric',
              'Adiabatic'
            ],
            correctAnswer: 3,
            explanation: 'Perfectly insulated = no heat exchange = adiabatic ($Q = 0$). The gas does work using its own internal energy, so the work done on it is negative and it cools: $\\Delta U = W < 0$.'
          }
        ]
      }
    },
    {
      id: 'tl7-ap-frq-preview',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Analysis** 📝
      `,
      exercise: {
        questions: [
          {
            question: 'An ideal gas undergoes a cycle: isobaric expansion (A→B), isochoric cooling (B→C), isobaric compression (C→D), isochoric heating (D→A). The PV diagram forms a rectangle traced clockwise. Which statement about the net work done by the gas is correct?',
            options: [
              'Net work is zero because expansion and compression cancel',
              'Net work equals the area of the rectangle and is positive (engine)',
              'Net work equals the area of the rectangle and is negative (refrigerator)',
              'Net work cannot be determined without knowing temperatures'
            ],
            correctAnswer: 1,
            explanation: 'In a clockwise rectangular cycle the net work done by the gas = enclosed area = $\\Delta P \\times \\Delta V > 0$ (so the net work done on the gas, $W_{\\text{net}}$, is negative). This is a heat engine. The expansion occurs at higher pressure than the compression, so expansion work exceeds compression work.'
          },
          {
            question: 'A monatomic ideal gas expands at a constant pressure of 200 kPa from 3.0 L to 5.0 L. How much energy is transferred to the gas by heating?',
            options: [
              '1000 J',
              '600 J',
              '400 J',
              '200 J'
            ],
            correctAnswer: 0,
            explanation: '$W = -P\\Delta V = -(200)(2.0) = -400$ J and $\\Delta U = \\frac{3}{2}P\\Delta V = 600$ J, so $Q = \\Delta U - W = 1000$ J. The gas needs energy both to warm up and to push back its surroundings; 600 J counts only the warming, and 200 J comes from a sign error on $W$.'
          }
        ]
      }
    },
    {
      id: 'tl7-process-match',
      type: 'dropdown-select' as const,
      content: `
**Process Property Match** 🎯

For each scenario, identify the correct result.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Isothermal expansion of an ideal gas: ΔU = ?',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine']
          },
          {
            label: 'Adiabatic compression: temperature...',
            options: ['Increases', 'Decreases', 'Stays the same', 'Cannot determine']
          },
          {
            label: 'Isochoric heating: work done by gas = ?',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine']
          },
          {
            label: 'Complete clockwise cycle: ΔU = ?',
            options: ['Positive', 'Negative', 'Zero', 'Cannot determine']
          }
        ],
        correctAnswers: ['Zero', 'Increases', 'Zero', 'Zero'],
        hint1: 'Isothermal means $T$ constant, and for an ideal gas $U$ depends only on $T$.',
        hint2: 'Adiabatic compression: $Q = 0$ and $W > 0$ (work is done on the gas), so $\\Delta U = W > 0$ → temperature rises.',
        hint3: 'Isochoric = constant volume → $W = -P\\Delta V = 0$. Any complete cycle returns to the same state → $\\Delta U = 0$.',
        explanation: 'Isothermal: $\\Delta U = 0$. Adiabatic compression raises $T$. Isochoric: $W = 0$. Any complete cycle: $\\Delta U = 0$ (state variable returns to start).'
      }
    },
    {
      id: 'tl7-mastery-drill',
      type: 'input-boxes' as const,
      content: `
**Final Mastery Drill** 🏆

Use $R = 8.31$ J/(mol·K).

1) A gas is compressed at constant temperature while 300 J of work is done on it. Find $Q$, the energy transferred to the gas by heating (in J, with sign).

2) Two moles of a monatomic ideal gas are heated at constant volume from 300 K to 400 K. Find $\\Delta U$ (in J, nearest whole number).

3) A gas goes once around a clockwise cycle that encloses an area of 350 J on its PV diagram. Find the net energy transferred to the gas by heating (in J).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-300', '2493', '350'],
        hint1: 'Isothermal means $\\Delta U = 0$, so $Q = -W$.',
        hint2: '$\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}(2)(8.31)(100)$.',
        hint3: 'For a cycle $\\Delta U = 0$, so $Q_{\\text{net}} = -W_{\\text{net}}$, and clockwise means the gas does net work equal to the enclosed area.',
        explanation: '1) $Q = -W = -300$ J: the gas must give off the energy that the work puts in. 2) $\\Delta U = \\frac{3}{2}(2)(8.31)(100) \\approx 2493$ J. 3) $W_{\\text{net}} = -350$ J, so $Q_{\\text{net}} = +350$ J.'
      }
    }
  ]
}
