export const physics1ConservationOfEnergyPart3Data = {
  topicSlug: 'conservation-of-energy',
  sections: [
    {
      id: 'ce3-intro',
      type: 'text' as const,
      content: `
# 🌀 Springs and Gravity Combined

**Part 3 of 7 — Conservation of Energy**

Many AP problems combine **gravitational PE**, **elastic PE**, and **kinetic energy** in a single system. Mastering the full energy equation is essential.

**In this lesson you will learn:**
- How to combine $PE_g$ and $PE_s$ in one equation
- Vertical spring problems (drop onto a spring)
- Spring launcher + gravity problems
      `
    },
    {
      id: 'ce3-full-equation',
      type: 'text' as const,
      content: `
## The Full Energy Equation

$$\\frac{1}{2}mv_i^2 + mgh_i + \\frac{1}{2}kx_i^2 = \\frac{1}{2}mv_f^2 + mgh_f + \\frac{1}{2}kx_f^2$$

### Setting Up the Problem

1. **Choose initial and final states** — pick moments where you know the most variables
2. **Choose a reference level** for $h = 0$ — usually the lowest point
3. **List known and unknown** energy terms
4. **Write the energy equation** and solve

### Common Combinations

| Scenario | Initial Energy | Final Energy |
|----------|---------------|--------------|
| Drop onto spring | $mgh$ | $\\frac{1}{2}kx^2$ |
| Spring launches upward | $\\frac{1}{2}kx^2$ | $mgh$ |
| Slide down + compress spring | $mgh$ | $\\frac{1}{2}kx^2$ |
| Spring on incline | $\\frac{1}{2}kx^2$ | $mgh + \\frac{1}{2}mv^2$ |
      `
    },
    {
      id: 'ce3-worked-drop',
      type: 'text' as const,
      content: `
## Worked Example: Dropping onto a Spring

A 0.5 kg ball is dropped from 2 m above a vertical spring ($k = 500$ N/m). How far does the spring compress?

**Reference**: $h = 0$ at the top of the uncompressed spring.

The ball falls 2 m to reach the spring, then compresses it by $x$. Total fall = $2 + x$.

$$mgh_{\\text{total}} = \\frac{1}{2}kx^2$$

$$0.5(10)(2 + x) = \\frac{1}{2}(500)x^2$$

$$5(2 + x) = 250x^2$$

$$10 + 5x = 250x^2$$

$$250x^2 - 5x - 10 = 0$$

$$50x^2 - x - 2 = 0$$

Using the quadratic formula:

$$x = \\frac{1 \\pm \\sqrt{1 + 400}}{100} = \\frac{1 + 20.02}{100} \\approx 0.21 \\text{ m}$$

(Take the positive root.)
      `
    },
    {
      id: 'ce3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 400$ N/m) compressed 0.1 m launches a 0.2 kg ball straight up. The ball rises ($g = 10$ m/s²):',
            options: [
              '0.5 m',
              '1.0 m',
              '2.0 m',
              '10 m'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kx^2 = mgh$. $\\frac{1}{2}(400)(0.01) = 0.2(10)h$. $2 = 2h$. $h = 1.0$ m.'
          },
          {
            question: 'A block slides down a frictionless ramp (height 0.5 m) and compresses a spring at the bottom. If the spring constant doubles, the compression:',
            options: [
              'Is halved',
              'Is divided by $\\sqrt{2}$',
              'Stays the same',
              'Doubles'
            ],
            correctAnswer: 1,
            explanation: '$mgh = \\frac{1}{2}kx^2 \\Rightarrow x = \\sqrt{2mgh/k}$. If $k \\to 2k$: $x_{\\text{new}} = \\sqrt{2mgh/(2k)} = x/\\sqrt{2}$.'
          },
          {
            question: 'A ball is dropped from height $h$ onto a spring. The maximum compression depends on:',
            options: [
              'The mass and height only',
              'The spring constant and height only',
              'Mass, height, and spring constant',
              'Mass only'
            ],
            correctAnswer: 2,
            explanation: '$mg(h + x) = \\frac{1}{2}kx^2$. The compression $x$ depends on all three: $m$, $g$ (implicit), $h$, and $k$.'
          }
        ]
      }
    },
    {
      id: 'ce3-calculations',
      type: 'input-boxes' as const,
      content: `
**Practice Calculations** 🧮

Use $g = 10$ m/s².

1) A spring ($k = 200$ N/m) compressed 0.3 m launches a 0.5 kg ball straight up. What height does it reach (in m)?

2) A 1 kg block slides from a height of 2 m down a frictionless ramp onto a spring ($k = 500$ N/m). What is the maximum compression (in m)? (Round to nearest hundredth.)

3) A spring ($k = 800$ N/m) compressed 0.1 m launches a 0.4 kg ball up a frictionless $30°$ incline. How far along the incline does it travel (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.8', '0.28', '2', '1.80', '0.280'],
        hint1: '$\\frac{1}{2}kx^2 = mgh \\Rightarrow h = kx^2/(2mg)$.',
        hint2: '$mgh = \\frac{1}{2}kx^2 \\Rightarrow x = \\sqrt{2mgh/k}$.',
        hint3: '$\\frac{1}{2}kx^2 = mgd\\sin(30°) \\Rightarrow d = kx^2/(2mg\\sin 30°)$.',
        explanation: '1) $h = 200(0.09)/(2 \\times 0.5 \\times 10) = 18/10 = 1.8$ m. 2) $x = \\sqrt{2(1)(10)(2)/500} = \\sqrt{0.08} \\approx 0.283 \\approx 0.28$ m. 3) $d = 800(0.01)/(2 \\times 0.4 \\times 10 \\times 0.5) = 8/4 = 2$ m.'
      }
    },
    {
      id: 'ce3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Energy Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A block at rest at the top of a ramp slides down and compresses a spring. At maximum compression, the energy that is zero:',
            options: ['KE and PE_g', 'KE and PE_s', 'PE_g and PE_s', 'Only KE'],
            correctIndex: 3,
            explanation: 'At maximum compression, the block is momentarily at rest ($KE = 0$). Both $PE_g$ and $PE_s$ may be nonzero (the block is at the bottom of the ramp and the spring is compressed). Actually, if the bottom is the reference level, $PE_g = 0$ too, and only $PE_s$ is nonzero. But in general, $KE = 0$ is guaranteed.'
          },
          {
            label: 'A spring launches a ball vertically. At the highest point, the nonzero energy is:',
            options: ['KE only', 'PE_g only', 'PE_s only', 'KE + PE_g'],
            correctIndex: 1,
            explanation: 'At the peak: $v = 0$ (KE = 0) and the spring is no longer in contact ($PE_s = 0$). Only $PE_g$ remains.'
          },
          {
            label: 'In a "drop onto spring" problem, choosing $h = 0$ at the natural length of the spring means the ball\'s total fall distance equals:',
            options: ['$h$ only', '$x$ only', '$h + x$', '$h - x$'],
            correctIndex: 2,
            explanation: 'The ball falls $h$ to reach the spring, then another $x$ as the spring compresses: total fall = $h + x$.'
          }
        ]
      }
    },
    {
      id: 'ce3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 1000$ N/m) compressed 0.2 m launches a 1 kg ball vertically. The ball\'s speed at height 1 m is ($g = 10$ m/s²):',
            options: [
              '$\\sqrt{10}$ m/s',
              '$\\sqrt{20}$ m/s',
              '$\\sqrt{40}$ m/s',
              '$\\sqrt{60}$ m/s'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 + mgh$. $\\frac{1}{2}(1000)(0.04) = \\frac{1}{2}(1)v^2 + 1(10)(1)$. $20 = 0.5v^2 + 10$. $v^2 = 20$. $v = \\sqrt{20}$ m/s.'
          },
          {
            question: 'A 2 kg ball is dropped from 1 m above a spring ($k = 2000$ N/m). The maximum compression is closest to:',
            options: [
              '0.10 m',
              '0.15 m',
              '0.20 m',
              '0.25 m'
            ],
            correctAnswer: 1,
            explanation: '$mg(h+x) = \\frac{1}{2}kx^2$. $20(1+x) = 1000x^2$. $1000x^2 - 20x - 20 = 0$. $50x^2 - x - 1 = 0$. $x = [1 + \\sqrt{1+200}]/100 = [1+\\sqrt{201}]/100 \\approx [1+14.18]/100 \\approx 0.152$ m. Closest to 0.15 m.'
          }
        ]
      }
    }
  ]
}
