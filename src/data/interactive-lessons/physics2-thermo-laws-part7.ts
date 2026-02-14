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

| Process | Constant | $W$ | $\\Delta U$ | $Q$ | PV Shape |
|---------|----------|-----|------------|-----|----------|
| **Isobaric** | $P$ | $P\\Delta V$ | $Q - P\\Delta V$ | $\\Delta U + P\\Delta V$ | Horizontal line |
| **Isochoric** | $V$ | $0$ | $Q$ | $\\Delta U$ | Vertical line |
| **Isothermal** | $T$ | $Q$ | $0$ | $W$ | Hyperbola ($PV = \\text{const}$) |
| **Adiabatic** | $Q = 0$ | $-\\Delta U$ | $-W$ | $0$ | Steep curve ($PV^\\gamma = \\text{const}$) |

### Quick Decision Guide

- Temperature doesn't change? → **Isothermal** → $\\Delta U = 0$
- No heat exchange? → **Adiabatic** → $Q = 0$
- Volume doesn't change? → **Isochoric** → $W = 0$
- Pressure doesn't change? → **Isobaric** → $W = P\\Delta V$

### Complete Cycle

For any complete cycle: $\\Delta U = 0$, so $Q_{\\text{net}} = W_{\\text{net}} = \\text{enclosed area on PV diagram}$.
      `
    },
    {
      id: 'tl7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

### ❌ Mistake 1: Using °C in Carnot efficiency
Carnot efficiency requires **Kelvin**: $e = 1 - T_C/T_H$. Always convert: $T(K) = T(°C) + 273$.

### ❌ Mistake 2: Confusing $W$ sign conventions
Some textbooks define $W$ as work done ON the gas. AP Physics 2 typically uses $W$ = work done BY the gas. Check which convention the problem uses!

### ❌ Mistake 3: Thinking $\\Delta U = 0$ means $T$ is constant
For an **ideal gas**, $\\Delta U = 0 \\Leftrightarrow \\Delta T = 0$ (true). But this is specific to ideal gases.

### ❌ Mistake 4: Assuming adiabatic = isothermal
Adiabatic ($Q = 0$) means no heat exchange. Isothermal ($\\Delta T = 0$) means constant temperature. An adiabatic expansion causes temperature to DROP.

### ❌ Mistake 5: Forgetting that COP > 1 is normal
Unlike efficiency (always < 1), COP of a refrigerator or heat pump can exceed 1. A COP of 5 does not violate any law.

### ❌ Mistake 6: Confusing engine efficiency with refrigerator COP
Engine: $e = W/Q_H < 1$. Fridge: $\\text{COP} = Q_C/W$ (can be > 1). They measure different things.
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
            explanation: 'Perfectly insulated = no heat exchange = adiabatic ($Q = 0$). The gas does work using its own internal energy, so it cools: $\\Delta U = -W < 0$.'
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
            question: 'An ideal gas undergoes a cycle: isobaric expansion (A→B), isochoric cooling (B→C), isobaric compression (C→D), isochoric heating (D→A). The PV diagram forms a rectangle traced clockwise. Which statement is correct?',
            options: [
              'Net work is zero because expansion and compression cancel',
              'Net work equals the area of the rectangle and is positive (engine)',
              'Net work equals the area of the rectangle and is negative (refrigerator)',
              'Net work cannot be determined without knowing temperatures'
            ],
            correctAnswer: 1,
            explanation: 'A clockwise rectangular cycle has net work = enclosed area = $\\Delta P \\times \\Delta V > 0$. This is a heat engine. The expansion occurs at higher pressure than the compression, so expansion work exceeds compression work.'
          },
          {
            question: 'A Carnot engine operates between a hot reservoir at 127°C and a cold reservoir at 27°C. It absorbs 2000 J per cycle. The work output per cycle is:',
            options: [
              '500 J',
              '1000 J',
              '1500 J',
              '2000 J'
            ],
            correctAnswer: 0,
            explanation: 'Convert to Kelvin: $T_H = 400$ K, $T_C = 300$ K. $e = 1 - 300/400 = 0.25$. $W = eQ_H = 0.25 \\times 2000 = 500$ J.'
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
        hint2: 'Adiabatic compression: $Q = 0$, $W < 0$ (by gas), so $\\Delta U = -W > 0$ → temperature rises.',
        hint3: 'Isochoric = constant volume → $W = P\\Delta V = 0$. Any complete cycle returns to the same state → $\\Delta U = 0$.',
        explanation: 'Isothermal: $\\Delta U = 0$. Adiabatic compression raises $T$. Isochoric: $W = 0$. Any complete cycle: $\\Delta U = 0$ (state variable returns to start).'
      }
    },
    {
      id: 'tl7-mastery-drill',
      type: 'input-boxes' as const,
      content: `
**Final Mastery Drill** 🏆

1) A Carnot engine operates between 600 K and 300 K with $Q_H = 1200$ J. Find the work output $W$ (in J).

2) A refrigerator has COP = 4 and does 150 J of work per cycle. How much heat is removed from the cold reservoir $Q_C$ (in J)?

3) 900 J of heat flows irreversibly from a 450 K reservoir to a 300 K reservoir. Find $\\Delta S_{\\text{universe}}$ (in J/K).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['600', '600', '1'],
        hint1: '$e = 1 - T_C/T_H = 1 - 300/600 = 0.5$. $W = eQ_H = 0.5 \\times 1200 = 600$ J.',
        hint2: '$\\text{COP} = Q_C/W$, so $Q_C = \\text{COP} \\times W = 4 \\times 150 = 600$ J.',
        hint3: '$\\Delta S = -Q/T_H + Q/T_C = -900/450 + 900/300 = -2 + 3 = 1$ J/K.',
        explanation: 'Carnot: $e = 1 - T_C/T_H$, then $W = eQ_H$. Fridge COP: $Q_C = \\text{COP} \\times W$. Entropy: sum $\\Delta S$ for each reservoir (negative for heat lost, positive for heat gained).'
      }
    }
  ]
}
