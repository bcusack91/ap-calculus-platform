export const physics2FluidDynamicsPart5Data = {
  topicSlug: 'fluid-dynamics-continuity',
  sections: [
    {
      id: 'fd5-intro',
      type: 'text' as const,
      content: `
# 🧮 Continuity Problem-Solving Workshop

**Part 5 of 7 — AP-Level Practice**

Time to tackle multi-step continuity problems — the kind that appear on AP exams with pipes splitting, merging, and changing size.
      `
    },
    {
      id: 'fd5-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step-by-Step Approach

1. **Identify all inlets and outlets** — draw the pipe system
2. **Apply continuity at each junction:** $\\sum Q_{\\text{in}} = \\sum Q_{\\text{out}}$
3. **Use $Q = Av$** to relate area and speed
4. **Convert units carefully** (cm → m, L/s → m³/s)
5. **For circular pipes:** $A = \\pi r^2 = \\pi d^2/4$

### Common Unit Conversions

| From | To | Factor |
|:---:|:---:|:---:|
| 1 L/s | m³/s | $10^{-3}$ |
| 1 cm² | m² | $10^{-4}$ |
| 1 L/min | m³/s | $1.67 \\times 10^{-5}$ |
      `
    },
    {
      id: 'fd5-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Branching Pipe**

A main water pipe (radius 5.0 cm, speed 2.0 m/s) splits into two branches. Branch A has radius 3.0 cm and Branch B has radius 4.0 cm.

1) Flow rate in the main pipe (in L/s)
2) If Branch A carries 60% of the flow, speed in Branch A (in m/s)
3) Speed in Branch B (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15.7', '3.33', '1.25'],
        hint1: '$Q = \\pi r^2 v = \\pi(0.05)^2(2.0)$. Convert to L/s by multiplying by 1000.',
        hint2: '$Q_A = 0.60 \\times Q$. $v_A = Q_A/(\\pi r_A^2)$.',
        hint3: '$Q_B = 0.40 \\times Q$. $v_B = Q_B/(\\pi r_B^2)$.',
        explanation: '$Q = \\pi(0.05)^2(2.0) = 0.01571$ m³/s = 15.7 L/s. $Q_A = 0.60(0.01571) = 0.009426$ m³/s. $v_A = 0.009426/(\\pi(0.03)^2) = 3.33$ m/s. $Q_B = 0.40(0.01571) = 0.006284$ m³/s. $v_B = 0.006284/(\\pi(0.04)^2) = 1.25$ m/s.'
      }
    },
    {
      id: 'fd5-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Filling a Tank**

A circular pipe (diameter 4.0 cm) delivers water at 5.0 m/s into a cylindrical tank (diameter 2.0 m).

1) Volume flow rate (in m³/s, use "1.26e-3" format)
2) Rate at which the water level rises in the tank (in m/s, use same format)
3) Time to fill the tank to a depth of 1.0 m (in seconds)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6.28e-3', '2.0e-3', '500'],
        hint1: '$Q = \\pi (0.02)^2 (5.0)$.',
        hint2: 'Water fills the tank: $Q = A_{\\text{tank}} \\times (dh/dt)$. $dh/dt = Q / A_{\\text{tank}}$.',
        hint3: '$t = h/(dh/dt) = 1.0 / (2.0 \\times 10^{-3})$.',
        explanation: '$Q = \\pi(0.02)^2(5.0) = 6.28 \\times 10^{-3}$ m³/s. $A_{\\text{tank}} = \\pi(1.0)^2 = 3.14$ m². $dh/dt = 6.28 \\times 10^{-3}/3.14 = 2.0 \\times 10^{-3}$ m/s. $t = 1.0/(2.0 \\times 10^{-3}) = 500$ s.'
      }
    },
    {
      id: 'fd5-tricky-quiz',
      type: 'multiple-choice' as const,
      content: `
**Tricky Concept Questions**
      `,
      exercise: {
        questions: [
          {
            question: 'Water flows steadily through a horizontal pipe that gradually widens. At a wider section, compared to a narrower section, the water moves:',
            options: [
              'Faster, because there\'s more room',
              'Slower, because the same flow rate passes through more area',
              'At the same speed',
              'Cannot determine without knowing the pressure'
            ],
            correctAnswer: 1,
            explanation: '$Av = $ constant. Larger area → slower speed. This is counterintuitive — more room means slower flow, not faster! The same volume per second spreads across more area.'
          },
          {
            question: 'A pipe carries water uphill. The pipe diameter stays constant. If the flow is steady and incompressible, the speed at the top is:',
            options: [
              'Less than at the bottom (it\'s going uphill)',
              'Greater than at the bottom',
              'The same as at the bottom',
              'Zero (water can\'t flow uphill)'
            ],
            correctAnswer: 2,
            explanation: 'Continuity: $A_1 v_1 = A_2 v_2$. Same area → same speed, regardless of height! Continuity only cares about area and speed, not elevation. (The pressure will be different though — that\'s Bernoulli\'s equation.)'
          }
        ]
      }
    },
    {
      id: 'fd5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An IV drip delivers fluid at 2.0 mL/min through a tube of inner radius 1.5 mm. The fluid speed in the tube is approximately:',
            options: [
              '0.47 cm/s',
              '4.7 cm/s',
              '0.47 m/s',
              '4.7 m/s'
            ],
            correctAnswer: 0,
            explanation: '$Q = 2.0$ mL/min = $2.0 \\times 10^{-6}/60 = 3.33 \\times 10^{-8}$ m³/s. $A = \\pi(1.5 \\times 10^{-3})^2 = 7.07 \\times 10^{-6}$ m². $v = Q/A = 4.71 \\times 10^{-3}$ m/s ≈ 0.47 cm/s. Slow and steady!'
          }
        ]
      }
    }
  ]
}
