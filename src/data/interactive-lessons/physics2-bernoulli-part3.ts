export const physics2BernoulliPart3Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be3-intro',
      type: 'text' as const,
      content: `
# 🏺 Torricelli's Theorem

**Part 3 of 7 — The Speed of Draining Fluid**

What happens when you poke a hole in a tank? How fast does the water come out? Torricelli answered this in 1643 — and his answer is beautifully simple.
      `
    },
    {
      id: 'be3-derivation',
      type: 'text' as const,
      content: `
## Deriving Torricelli's Theorem

### Setup

A large tank is filled with water to height $h$. A small hole is opened at the bottom.

**Point 1:** The surface of the water (top of tank)
**Point 2:** The hole (bottom of tank)

### Assumptions

- Both the surface and the hole are open to atmosphere: $P_1 = P_2 = P_{\\text{atm}}$
- The tank is large compared to the hole: $v_1 \\approx 0$ (surface barely moves)
- Take the hole as the height reference: $h_1 = h$, $h_2 = 0$

### Applying Bernoulli

$$P_{\\text{atm}} + \\frac{1}{2}\\rho(0)^2 + \\rho g h = P_{\\text{atm}} + \\frac{1}{2}\\rho v_2^2 + \\rho g(0)$$

$$\\rho g h = \\frac{1}{2}\\rho v_2^2$$

$$\\boxed{v = \\sqrt{2gh}}$$

### The Beautiful Result

This is exactly the speed an object would have if it **fell freely** from height $h$! The water exits at the same speed as if it had simply fallen from the surface level. This is **Torricelli's Theorem**.
      `
    },
    {
      id: 'be3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Torricelli Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'According to Torricelli\'s theorem, the exit speed from a hole in a tank depends on:',
            options: [
              'The size of the hole',
              'The height of water above the hole',
              'The density of the water',
              'The atmospheric pressure'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{2gh}$. Only $h$ (height above the hole) matters! The hole size affects the flow *rate* ($Q = Av$) but not the exit *speed*. Density and atmospheric pressure cancel out in the derivation.'
          },
          {
            question: 'A tank has two holes: one at 1 m depth and one at 4 m depth. The ratio of exit speeds ($v_4 / v_1$) is:',
            options: [
              '4',
              '2',
              '16',
              '$\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: '$v_4/v_1 = \\sqrt{2g(4)}/\\sqrt{2g(1)} = \\sqrt{4/1} = 2$. The deeper hole has twice the exit speed (quadruple the height → double the speed, since $v \\propto \\sqrt{h}$).'
          },
          {
            question: 'Torricelli\'s theorem assumes the tank is "large." What does this mean physically?',
            options: [
              'The tank is made of strong material',
              'The surface area of the water is much larger than the hole area, so the surface barely drops',
              'The tank is taller than it is wide',
              'The tank holds more than 1000 liters'
            ],
            correctAnswer: 1,
            explanation: 'If $A_{\\text{tank}} \\gg A_{\\text{hole}}$, then by continuity ($A_1 v_1 = A_2 v_2$), $v_1 \\approx 0$. The surface drops negligibly while water exits the hole. This lets us set $v_1 = 0$ in Bernoulli\'s equation.'
          }
        ]
      }
    },
    {
      id: 'be3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Torricelli Drill** (use $g = 10$ m/s²)

A large water tank has a small hole 5.0 m below the water surface. The hole has area $2.0 \\times 10^{-4}$ m².

1) Exit speed of the water (in m/s)
2) Volume flow rate from the hole (in L/s)
3) How far horizontally the water lands if the hole is 1.2 m above the ground (in m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '4.9', '4.90'],
        hint1: '$v = \\sqrt{2gh} = \\sqrt{2(10)(5.0)}$.',
        hint2: '$Q = Av = (2.0 \\times 10^{-4})(10) = 2.0 \\times 10^{-3}$ m³/s.',
        hint3: 'Projectile: exits horizontally at $v = 10$ m/s, falls $h = 1.2$ m. $t = \\sqrt{2h/g} = \\sqrt{2(1.2)/10}$. $x = vt$.',
        explanation: '$v = \\sqrt{100} = 10$ m/s. $Q = 2.0 \\times 10^{-3}$ m³/s = 2 L/s. Fall time: $t = \\sqrt{2(1.2)/10} = 0.49$ s. $x = 10(0.49) = 4.9$ m.'
      }
    },
    {
      id: 'be3-variations',
      type: 'text' as const,
      content: `
## Variations on Torricelli

### Hole Not at the Bottom

If the hole is at height $h_{\\text{hole}}$ above the bottom, and the surface is at height $H$:

$$v = \\sqrt{2g(H - h_{\\text{hole}})}$$

Only the height *above the hole* matters.

### Pressurized Tank

If the tank is sealed and pressurized to gauge pressure $P_g$ above atmospheric:

$$P_{\\text{atm}} + P_g + \\rho g h = P_{\\text{atm}} + \\frac{1}{2}\\rho v^2$$

$$v = \\sqrt{\\frac{2(P_g + \\rho g h)}{\\rho}}$$

The extra pressure makes the water exit faster — like a pressurized water gun!

### Maximum Range Problem

**Classic AP problem:** At what height should you make a hole to maximize the horizontal range of the water jet?

The exit speed increases with depth ($v = \\sqrt{2gh}$), but a deeper hole means less fall height. The optimal hole position is at **half the tank height** — it maximizes the product of exit speed and fall time.
      `
    },
    {
      id: 'be3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A sealed tank of water is pressurized with compressed air (gauge pressure 50,000 Pa). There is a hole 2 m below the surface. The exit speed is approximately: ($\\rho = 1000$ kg/m³, $g = 10$ m/s²)',
            options: [
              '6.3 m/s',
              '10 m/s',
              '11.8 m/s',
              '14.1 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2(P_g + \\rho g h)/\\rho} = \\sqrt{2(50000 + 20000)/1000} = \\sqrt{140} = 11.8$ m/s. The pressurization significantly increases the exit speed beyond the 6.3 m/s from gravity alone.'
          },
          {
            question: 'As water drains from a tank through a bottom hole, the exit speed:',
            options: [
              'Increases over time',
              'Stays constant',
              'Decreases over time (water level drops → less height)',
              'Oscillates'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2gh}$. As the tank drains, $h$ decreases → $v$ decreases. The stream gets slower and slower. (The time to fully drain involves calculus — the rate isn\'t constant!)'
          }
        ]
      }
    }
  ]
}
