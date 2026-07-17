export const physics1ConservationOfEnergyPart4Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce4-intro',
      type: 'text' as const,
      content: `
# 🎢 Roller Coasters & Pendulums

**Part 4 of 7 — Conservation of Energy**

Roller coasters and pendulums are classic conservation of energy scenarios that appear frequently on AP exams. Both involve continuous conversion between KE and gravitational PE.

**In this lesson you will learn:**
- Roller coaster energy analysis at multiple points
- Minimum speed at the top of a loop
- Pendulum energy problems
- Height-speed relationships along curved paths
      `
    },
    {
      id: 'ce4-coaster-theory',
      type: 'text' as const,
      content: `
## Roller Coasters — Energy at Every Point

For a frictionless roller coaster starting from rest at height $h_0$:

$$mgh_0 = \\frac{1}{2}mv^2 + mgh$$

$$v = \\sqrt{2g(h_0 - h)}$$

### Key Insights

- Speed depends only on **height difference**, not the path shape
- The **lowest point** has the most KE (and maximum speed)
- The **highest reachable point** is where $v = 0$ ($h = h_0$)

### Minimum Speed at the Top of a Loop

At the top of a circular loop of radius $R$, the car needs enough speed to maintain contact:

$$mg = \\frac{mv^2_{\\text{min}}}{R} \\Rightarrow v_{\\text{min}} = \\sqrt{gR}$$

To find the minimum starting height for a loop of radius $R$:

$$mgh_{\\text{min}} = \\frac{1}{2}mv^2_{\\text{min}} + mg(2R)$$

$$gh_{\\text{min}} = \\frac{1}{2}gR + 2gR = \\frac{5}{2}gR$$

$$h_{\\text{min}} = \\frac{5}{2}R = 2.5R$$
      `
    },
    {
      id: 'ce4-coaster-quiz',
      type: 'multiple-choice' as const,
      content: `
**Roller Coaster Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A roller coaster starts from rest at 40 m. Its speed at 15 m is ($g = 10$ $m/s^{2}$):',
            options: [
              '10 m/s',
              '15 m/s',
              '$\\sqrt{500}$ m/s',
              '25 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2g(h_0 - h)} = \\sqrt{2(10)(40-15)} = \\sqrt{500} \\approx 22.4$ m/s.'
          },
          {
            question: 'A loop has radius 10 m. The minimum starting height for a car to complete the loop is:',
            options: [
              '20 m',
              '25 m',
              '30 m',
              '40 m'
            ],
            correctAnswer: 1,
            explanation: '$h_{\\text{min}} = 2.5R = 2.5(10) = 25$ m.'
          },
          {
            question: 'A roller coaster car passes point A at 20 m/s (height 30 m). At point B (height 10 m), its speed is ($g = 10$ $m/s^{2}$):',
            options: [
              '$\\sqrt{400}$ m/s',
              '$\\sqrt{600}$ m/s',
              '$\\sqrt{800}$ m/s',
              '$\\sqrt{200}$ m/s'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{2}mv_A^2 + mgh_A = \\frac{1}{2}mv_B^2 + mgh_B$. $v_B^2 = v_A^2 + 2g(h_A - h_B) = 400 + 2(10)(20) = 800$. $v_B = \\sqrt{800} \\approx 28.3$ m/s.'
          }
        ]
      }
    },
    {
      id: 'ce4-pendulum-theory',
      type: 'text' as const,
      content: `
## Pendulums

A pendulum of length $L$ released from angle $\\theta$ to the vertical:

### Height Change

$$h = L - L\\cos\\theta = L(1 - \\cos\\theta)$$

### Speed at the Bottom

$$v = \\sqrt{2gL(1 - \\cos\\theta)}$$

### At Any Angle $\\phi$ (where $\\phi < \\theta$):

$$v = \\sqrt{2gL(\\cos\\phi - \\cos\\theta)}$$

### Key Features

- **Maximum speed** at the bottom ($\\phi = 0$)
- **Zero speed** at the maximum angle ($\\phi = \\theta$)
- Speed at the bottom is **independent of mass**
- The pendulum can never swing higher than its release height
      `
    },
    {
      id: 'ce4-calculations',
      type: 'input-boxes' as const,
      content: `
**Roller Coaster & Pendulum Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A roller coaster starts from rest at 50 m. What is its speed at the bottom (in m/s)? (Round to nearest integer.)

2) What is the minimum speed at the top of a circular loop of radius 8 m (in m/s)? (Round to nearest integer.)

3) A pendulum ($L = 2$ m) is released from $60°$. What is the speed at the bottom (in m/s)? Use $\\cos 60° = 0.5$. (Round to nearest tenth.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '9', '4.5'],
        hint1: '$v = \\sqrt{2gh} = \\sqrt{2(10)(50)}$.',
        hint2: '$v_{\\min} = \\sqrt{gR} = \\sqrt{10 \\times 8}$.',
        hint3: '$v = \\sqrt{2gL(1 - \\cos\\theta)} = \\sqrt{2(10)(2)(1 - 0.5)}$.',
        explanation: '1) $v = \\sqrt{1000} \\approx 31.6 \\approx 32$ m/s. 2) $v = \\sqrt{80} \\approx 8.94 \\approx 9$ m/s. 3) $v = \\sqrt{2(10)(2)(0.5)} = \\sqrt{20} \\approx 4.47 \\approx 4.5$ m/s.'
      }
    },
    {
      id: 'ce4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At the bottom of a roller coaster loop, the normal force is:',
            options: ['Equal to $mg$', 'Greater than $mg$', 'Less than $mg$', 'Zero'],
            correctIndex: 1,
            explanation: 'At the bottom: $N - mg = mv^2/R$, so $N = mg + mv^2/R > mg$. You feel heavier!'
          },
          {
            label: 'A pendulum with twice the length released from the same angle will have a bottom speed that is:',
            options: ['Twice as fast', '$\\sqrt{2}$ times as fast', 'The same', 'Half as fast'],
            correctIndex: 1,
            explanation: '$v = \\sqrt{2gL(1-\\cos\\theta)}$. Doubling $L$ multiplies $v$ by $\\sqrt{2}$.'
          },
          {
            label: 'A roller coaster car that starts with some initial speed at height $h_0$ can reach a maximum height:',
            options: ['Equal to $h_0$', 'Greater than $h_0$', 'Less than $h_0$', 'Depends on mass'],
            correctIndex: 1,
            explanation: 'If it starts with KE > 0 at $h_0$, it has more total energy than $mgh_0$, so it can rise above $h_0$: $h_{\\max} = h_0 + v_0^2/(2g)$.'
          },
          {
            label: 'Two pendulums (same $L$, different masses) released from the same angle reach the bottom with:',
            options: ['Heavier ball faster', 'Lighter ball faster', 'Same speed', 'Cannot determine'],
            correctIndex: 2,
            explanation: '$v = \\sqrt{2gL(1-\\cos\\theta)}$ — mass does not appear. Same speed!'
          }
        ]
      }
    },
    {
      id: 'ce4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A roller coaster starts from rest at 45 m and encounters a loop of radius 10 m. Its speed at the top of the loop is ($g = 10$ $m/s^{2}$):',
            options: [
              '$\\sqrt{100}$ m/s',
              '$\\sqrt{500}$ m/s',
              '$\\sqrt{200}$ m/s',
              '$\\sqrt{700}$ m/s'
            ],
            correctAnswer: 1,
            explanation: 'Top of loop is at $h = 2R = 20$ m. $v^2 = 2g(h_0 - 2R) = 2(10)(45 - 20) = 500$. $v = \\sqrt{500} \\approx 22.4$ m/s.'
          },
          {
            question: 'A 1 m pendulum released from $90°$ ($\\cos 90° = 0$) has what speed at the bottom ($g = 10$ $m/s^{2}$)?',
            options: [
              '$\\sqrt{10}$ m/s',
              '$\\sqrt{20}$ m/s',
              '$\\sqrt{30}$ m/s',
              '$\\sqrt{40}$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{2gL(1 - \\cos 90°)} = \\sqrt{2(10)(1)(1-0)} = \\sqrt{20}$ m/s.'
          }
        ]
      }
    }
  ]
}
