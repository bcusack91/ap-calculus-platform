export const physics2BernoulliPart5Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be5-intro',
      type: 'text' as const,
      content: `
# 🧮 Bernoulli Problem-Solving Workshop

**Part 5 of 7 — Multi-Step AP Problems**

Let's tackle the full-blown Bernoulli problems that combine continuity + Bernoulli + height changes — the kind AP loves.
      `
    },
    {
      id: 'be5-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step-by-Step Approach

1. **Draw the system** — identify points 1 and 2 (on the same streamline)
2. **List knowns:** $P$, $v$, $h$ at each point
3. **Apply continuity** if areas are given: $A_1 v_1 = A_2 v_2$
4. **Apply Bernoulli:** $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$
5. **Solve** for the unknown

### Common Boundary Conditions

| Condition | What It Tells You |
|:---:|:---:|
| Open to atmosphere | $P = P_{\\text{atm}} = 101{,}325$ Pa |
| Large tank surface | $v \\approx 0$ |
| Same height | $\\rho g h$ terms cancel |
| Same pipe diameter | $v_1 = v_2$ (by continuity) |
      `
    },
    {
      id: 'be5-problem1',
      type: 'input-boxes' as const,
      content: `
**Problem 1: Pipe with Height Change** ($\\rho = 1000$ kg/m³, $g = 10$ m/s²)

Water flows through a pipe that rises 8.0 m. At the bottom: area $A_1 = 40$ cm², speed $v_1 = 5.0$ m/s, pressure $P_1 = 300{,}000$ Pa. At the top: area $A_2 = 20$ cm².

1) Speed at the top, $v_2$ (in m/s)

2) Pressure at the top, $P_2$ (in Pa)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '182500'],
        hint1: 'Continuity: $v_2 = (A_1/A_2)v_1 = (40/20)(5.0)$.',
        hint2: '$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) + \\rho g(h_1 - h_2)$. With $h_1 = 0$, $h_2 = 8$.',
        explanation: '$v_2 = 10$ m/s. $P_2 = 300000 + \\frac{1}{2}(1000)(25 - 100) + (1000)(10)(0 - 8) = 300000 - 37500 - 80000 = 182500$ Pa. Pressure drops due to both higher speed AND higher elevation.'
      }
    },
    {
      id: 'be5-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Pitot Tube** ($\\rho_{\\text{air}} = 1.2$ kg/m³)

A Pitot tube on an airplane measures the stagnation pressure (air brought to rest) and the static pressure. Stagnation pressure: 102,000 Pa. Static pressure: 100,000 Pa.

1) Pressure difference (in Pa)

2) Air speed of the airplane (in m/s)

3) This speed in km/h (multiply m/s by 3.6)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2000', '57.7', '208'],
        hint1: '$\\Delta P = P_{\\text{stag}} - P_{\\text{static}}$.',
        hint2: 'At stagnation: $v = 0$. Bernoulli: $P_{\\text{static}} + \\frac{1}{2}\\rho v^2 = P_{\\text{stag}}$. $v = \\sqrt{2\\Delta P/\\rho}$.',
        hint3: '$v_{\\text{km/h}} = v_{\\text{m/s}} \\times 3.6$.',
        explanation: '$\\Delta P = 2000$ Pa. $v = \\sqrt{2(2000)/1.2} = \\sqrt{3333} = 57.7$ m/s. $v = 57.7 \\times 3.6 = 208$ km/h.'
      }
    },
    {
      id: 'be5-problem3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: Conceptual Challenge**
      `,
      exercise: {
        questions: [
          {
            question: 'Water flows upward through a vertical pipe that narrows. At a higher, narrower point, the speed is greater. The pressure at this point compared to the wider, lower point is:',
            options: [
              'Definitely higher (it\'s narrower)',
              'Definitely lower (both speed increase AND height increase reduce pressure)',
              'It depends on the exact dimensions',
              'The same (effects cancel)'
            ],
            correctAnswer: 1,
            explanation: 'Both effects work in the same direction: higher speed (from narrowing) lowers pressure, AND higher elevation lowers pressure. The pressure at the top narrow section is definitely lower. $P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2) - \\rho g(h_2 - h_1)$.'
          },
          {
            question: 'Water flows through a horizontal pipe that WIDENS. The pressure in the wider section is:',
            options: [
              'Lower (wider pipe → more area → less pressure)',
              'Higher (wider pipe → slower speed → higher pressure)',
              'The same',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: 'Wider pipe → slower speed (continuity) → higher pressure (Bernoulli). This seems counterintuitive but is correct! Wider = slower = higher pressure. The fluid decelerates and "recovers" pressure.'
          }
        ]
      }
    },
    {
      id: 'be5-challenging-drill',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** ($\\rho = 1000$ kg/m³, $g = 10$ m/s², $P_{\\text{atm}} = 100{,}000$ Pa)

A large open tank has water 10 m deep. A pipe at the bottom carries water horizontally to a nozzle that is 3.0 m above the bottom of the tank. The nozzle exit area is very small (open to atmosphere).

1) Speed of water exiting the nozzle (in m/s)

2) If the nozzle area is $1.0 \\times 10^{-4}$ m², the flow rate (in L/s)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['11.8', '1.18'],
        hint1: 'Height of water above nozzle = $10 - 3 = 7$ m. Use Torricelli: $v = \\sqrt{2gh}$.',
        hint2: '$Q = Av$. Convert m³/s to L/s.',
        explanation: 'The nozzle is 7 m below the water surface (10 m tank, nozzle at 3 m height → 7 m of water above). $v = \\sqrt{2(10)(7)} = \\sqrt{140} = 11.83$ m/s. $Q = (10^{-4})(11.83) = 1.18 \\times 10^{-3}$ m³/s = 1.18 L/s.'
      }
    },
    {
      id: 'be5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'You need to combine both continuity and Bernoulli to solve a problem when:',
            options: [
              'The pipe changes area (you need continuity to find the other speed)',
              'The pipe has the same area everywhere',
              'The fluid is at rest',
              'Only pressure is unknown'
            ],
            correctAnswer: 0,
            explanation: 'When the pipe changes area, Bernoulli has two unknowns ($v$ and $P$). Continuity provides the relationship between speeds ($A_1 v_1 = A_2 v_2$), allowing you to solve the system. If the area is constant, $v_1 = v_2$ and you only need Bernoulli.'
          }
        ]
      }
    }
  ]
}
