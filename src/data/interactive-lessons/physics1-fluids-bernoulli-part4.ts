export const physics1FluidsBernoulliPart4Data = {
  topicSlug: 'fluids-bernoulli',
  sections: [
    {
      id: 'fbe4-intro',
      type: 'text' as const,
      content: `
# 🚿 Torricelli's Theorem

**Part 4 of 7 — Fluids: Bernoulli's Equation**

Torricelli's Theorem is the **classic** Bernoulli application: water draining out of a hole in a tank flows like a free-falling object. It's a guaranteed AP Physics 1 favorite — fast and elegant.

**In this lesson you will learn:**
- How to derive $v = \\sqrt{2gh}$ from Bernoulli
- The "large reservoir" approximation
- Time-of-flight for a horizontal jet exiting a tank
- Range of the projected stream
      `
    },
    {
      id: 'fbe4-derivation',
      type: 'text' as const,
      content: `
## Torricelli's Theorem

**Setup:** An open tank with a small hole of negligible cross-section, depth $h$ below the free surface. Both the surface (point 1) and the hole (point 2) are open to atmosphere ⇒ $P_1 = P_2 = P_{atm}$.

Bernoulli:

$$P_{atm} + \\tfrac{1}{2}\\rho v_1^2 + \\rho g h = P_{atm} + \\tfrac{1}{2}\\rho v_2^2 + 0$$

Atmospheric terms cancel. Since the tank is large, $v_1 \\approx 0$. So:

$$\\rho g h = \\tfrac{1}{2}\\rho v_2^2 \\;\\Rightarrow\\; \\boxed{v_2 = \\sqrt{2 g h}}$$

**This is the same as a freely-falling object dropped from height $h$!** That's the "Torricelli" insight.

### Conditions for Validity
- Hole area $\\ll$ tank area (so $v_1 \\approx 0$).
- Both surfaces exposed to same external pressure.
- Ideal fluid (no viscous losses).

### Projectile Range of the Jet

If the hole is at height $H$ above the ground, the jet exits horizontally at speed $v = \\sqrt{2gh}$ and falls under gravity:

- Time to ground: $t = \\sqrt{2H/g}$
- Horizontal range: $R = v \\, t = \\sqrt{2gh} \\cdot \\sqrt{2H/g} = 2\\sqrt{hH}$

**Memorable result:** $R = 2\\sqrt{hH}$. Maximum range when $h = H$ (hole at half-height).
      `
    },
    {
      id: 'fbe4-mc',
      type: 'multiple-choice' as const,
      content: `
**Torricelli Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Torricelli\'s Theorem says the speed of water exiting a hole at depth $h$ below the surface of a large open tank is:',
            options: [
              '$gh$',
              '$\\sqrt{gh}$',
              '$\\sqrt{2gh}$',
              '$2gh$'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2gh}$ — same form as a freely falling object.'
          },
          {
            question: 'The exit speed from a hole in a large open tank does NOT depend on:',
            options: [
              'The depth of the hole below the surface',
              'The fluid\'s density',
              'The acceleration due to gravity',
              'The total height of water column above the hole'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{2gh}$ — no $\\rho$ in the formula!'
          },
          {
            question: 'For the "large tank" approximation in Torricelli\'s Theorem, we assume:',
            options: [
              'The hole is huge',
              'The surface speed $v_1$ is approximately zero',
              'Pressure inside the tank is zero',
              'The fluid is compressible'
            ],
            correctAnswer: 1,
            explanation: 'If the tank is much wider than the hole, the surface drops very slowly ⇒ $v_1 \\approx 0$.'
          }
        ]
      }
    },
    {
      id: 'fbe4-input',
      type: 'input-boxes' as const,
      content: `
**Torricelli Calculations** 🧮 (g = 10)

1) Water in a large tank has surface 5.0 m above a small hole. Exit speed (m/s)?

2) Same tank — hole is 1.25 m above the ground. Time for the jet to hit the ground (s, 2 sig fig)?

3) Same tank — horizontal range of the jet (m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '0.50', '5'],
        hint1: '$v = \\sqrt{2gh}$.',
        hint2: '$t = \\sqrt{2H/g}$.',
        hint3: '$R = vt$ (or $2\\sqrt{hH}$).',
        explanation: '1) $v = \\sqrt{2(10)(5)} = 10$ m/s. 2) $t = \\sqrt{2(1.25)/10} = 0.50$ s. 3) $R = 10 \\times 0.5 = 5$ m. (Check: $2\\sqrt{5\\cdot 1.25} = 2\\sqrt{6.25} = 5$ m. ✓)'
      }
    },
    {
      id: 'fbe4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Torricelli Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two large open tanks of different fluids (water, oil) are filled to the same depth $h$. Both have a small hole at the bottom. Exit speeds are:',
            options: ['Greater for water', 'Greater for oil', 'Equal — depends only on $h$', 'Zero for oil'],
            correctIndex: 2,
            explanation: '$v = \\sqrt{2gh}$ — no density dependence.'
          },
          {
            label: 'If the depth $h$ above a Torricelli hole is doubled, the exit speed becomes:',
            options: ['Doubled', 'Quadrupled', '$\\sqrt{2}$ times the original', 'Halved'],
            correctIndex: 2,
            explanation: '$v \\propto \\sqrt{h}$.'
          },
          {
            label: 'A jet exits horizontally from a hole height $H$ above the floor. Doubling $H$ multiplies the horizontal range $R = 2\\sqrt{hH}$ by:',
            options: ['1', '$\\sqrt{2}$', '2', '4'],
            correctIndex: 1,
            explanation: '$R \\propto \\sqrt{H}$ — doubles $H$, $R$ scales by $\\sqrt{2}$.'
          },
          {
            label: 'For a tank of total height $L$ filled to the brim, the hole that maximizes horizontal range is at:',
            options: ['Top', 'Middle ($H = L/2$)', 'Bottom', '1/4 from bottom'],
            correctIndex: 1,
            explanation: 'Maximize $R^2 = 4hH$ with $h + H = L$ ⇒ $h = H = L/2$.'
          }
        ]
      }
    },
    {
      id: 'fbe4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Torricelli's Theorem** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A large open tank has a small hole 3.2 m below the water surface. Exit speed of the water (g = 10 $m/s^{2}$)?',
            options: [
              '$4$ m/s',
              '$6$ m/s',
              '$8$ m/s',
              '$32$ m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2(10)(3.2)} = \\sqrt{64} = 8$ m/s.'
          },
          {
            question: 'A jet exits horizontally from a tank with $h = 0.8$ m of water above the hole, which is $H = 0.2$ m above the floor. Horizontal range $R$?',
            options: [
              '$0.4$ m',
              '$0.8$ m',
              '$1.6$ m',
              '$3.2$ m'
            ],
            correctAnswer: 1,
            explanation: '$R = 2\\sqrt{hH} = 2\\sqrt{0.16} = 2(0.4) = 0.8$ m.'
          }
        ]
      }
    }
  ]
}
