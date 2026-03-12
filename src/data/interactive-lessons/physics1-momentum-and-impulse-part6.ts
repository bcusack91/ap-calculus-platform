export const physics1MomentumAndImpulsePart6Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Momentum and Impulse**

Let\'s put together everything we\'ve learned about momentum and impulse. In this workshop, we\'ll work through AP-style problems that integrate multiple concepts: momentum calculation, impulse, the impulse-momentum theorem, F-t graphs, and safety applications.
      `
    },
    {
      id: 'mi6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Framework

### For Impulse-Momentum Problems

1. **Identify the system** (which object\'s momentum changes?)
2. **Define positive direction** (and stick with it)
3. **List knowns:** $m$, $v_i$, $v_f$, $F$, $\\Delta t$
4. **Write the equation:** $F_{\\text{avg}} \\Delta t = m(v_f - v_i)$
5. **Solve for the unknown**
6. **Check:** Does the sign/direction make sense?

### Common Pitfalls ⚠️

- Forgetting that **velocity is signed** (especially when objects reverse direction)
- Confusing **momentum** (vector) with **kinetic energy** (scalar)
- Using the wrong $\\Delta t$ (contact time vs. total time)
- Forgetting to include all forces when finding $F_{\\text{net}}$
      `
    },
    {
      id: 'mi6-problem1',
      type: 'multiple-choice' as const,
      content: `
**Problem 1: Baseball Bat** ⚾

A 0.145 kg baseball traveling at $+38$ m/s toward a batter is hit and travels at $-52$ m/s away. The bat-ball contact time is 0.0012 s. What is the average force of the bat on the ball?
      `,
      exercise: {
        questions: [
          {
            question: 'What is the average force exerted by the bat on the ball?',
            options: [
              '1,690 N',
              '6,300 N',
              '10,875 N',
              '14,500 N'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta p = m(v_f - v_i) = 0.145(-52 - 38) = 0.145(-90) = -13.05$ kg·m/s. $F = |\\Delta p|/\\Delta t = 13.05/0.0012 = 10{,}875$ N. The magnitude of the average force is about 10,875 N.'
          }
        ]
      }
    },
    {
      id: 'mi6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Stopping a Car** 🚗

A 1500 kg car is traveling at 25 m/s.

1) What is the car\'s momentum? (in kg·m/s)

2) If the brakes apply a constant force of 7500 N, how long does it take to stop? (in seconds)

3) If the car then accelerates from rest with a 4500 N force for 10 s, what is the final speed? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['37500', '5', '30'],
        hint1: '$p = mv = (1500)(25)$',
        hint2: '$\\Delta t = |\\Delta p|/F = 37500/7500$',
        hint3: '$J = F\\Delta t = (4500)(10) = 45000$ N·s. $v_f = J/m = 45000/1500$',
        explanation: '1) $p = (1500)(25) = 37{,}500$ kg·m/s. 2) $\\Delta t = \\Delta p / F = 37{,}500/7500 = 5$ s. 3) $J = (4500)(10) = 45{,}000$ N·s. $v_f = J/m = 45{,}000/1500 = 30$ m/s.'
      }
    },
    {
      id: 'mi6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: F-t Graph Analysis** 📊

A 4 kg block at rest has a force applied to it. The force is +20 N from $t = 0$ to $t = 3$ s, then −10 N from $t = 3$ s to $t = 9$ s.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the total impulse delivered to the block?',
            options: [
              '+120 N·s',
              '+60 N·s',
              '0 N·s',
              '−60 N·s'
            ],
            correctAnswer: 2,
            explanation: 'Total impulse = area under F-t graph = $(+20)(3) + (-10)(6) = 60 - 60 = 0$ N·s.'
          },
          {
            question: 'What is the velocity of the block at $t = 3$ s?',
            options: [
              '5 m/s',
              '10 m/s',
              '15 m/s',
              '20 m/s'
            ],
            correctAnswer: 2,
            explanation: 'At $t = 3$ s: $J = (20)(3) = 60$ N·s. $v = J/m = 60/4 = 15$ m/s.'
          },
          {
            question: 'What is the velocity of the block at $t = 9$ s?',
            options: [
              '15 m/s',
              '5 m/s',
              '0 m/s',
              '−5 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Total impulse from $t=0$ to $t=9$ is 0 N·s. Since the block started at rest, $v_f = 0$ m/s. The negative impulse from $t = 3$ to $t = 9$ exactly cancels the positive impulse from $t = 0$ to $t = 3$.'
          }
        ]
      }
    },
    {
      id: 'mi6-problem4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Bouncing Ball** 🏀

A 0.60 kg ball is dropped from a height and hits the floor at 8.0 m/s (downward). It bounces back up at 6.0 m/s (upward). The contact time with the floor is 0.015 s. Take upward as positive.

1) What is the impulse from the floor on the ball? (in N·s)

2) What is the average force from the floor on the ball? (in N, to nearest whole number)

3) How does this force compare to the ball\'s weight ($mg$)? Give the ratio $F_{\\text{avg}}/mg$ to 3 significant figures. (use $g = 9.8$ m/s²)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.4', '560', '95.2', '8.40', '95.20'],
        hint1: '$J = m(v_f - v_i) = 0.60(+6.0 - (-8.0))$',
        hint2: '$F = J/\\Delta t = 8.4/0.015$',
        hint3: '$mg = (0.60)(9.8) = 5.88$ N. Ratio = $560/5.88$',
        explanation: '1) $J = 0.60(6.0 - (-8.0)) = 0.60(14) = 8.4$ N·s. 2) $F = 8.4/0.015 = 560$ N. 3) $mg = 5.88$ N. Ratio = $560/5.88 \\approx 95.2$. The floor exerts about 95 times the ball\'s weight!'
      }
    },
    {
      id: 'mi6-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Problem-Solving Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When calculating change in velocity for impulse problems, you should:',
            options: ['add the speeds', 'subtract the speeds', 'use signed velocities: $v_f - v_i$', 'ignore direction'],
            correctIndex: 2,
            explanation: 'Always use signed velocities. $\\Delta v = v_f - v_i$ with proper signs accounts for direction changes automatically.'
          },
          {
            label: 'The correct formula for average force from the impulse-momentum theorem is:',
            options: ['$F = \\Delta p / \\Delta t$', '$F = m \\times \\Delta t$', '$F = \\Delta p \\times \\Delta t$', '$F = m/\\Delta t$'],
            correctIndex: 0,
            explanation: 'From the impulse-momentum theorem: $F\\Delta t = \\Delta p$, so $F = \\Delta p / \\Delta t$.'
          },
          {
            label: 'The area under a force-time graph represents:',
            options: ['the peak force', 'the average force', 'the minimum force', 'the net impulse'],
            correctIndex: 3,
            explanation: 'The area under a force-time graph gives the net impulse, which equals the change in momentum.'
          }
        ]
      }
    },
    {
      id: 'mi6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.50 kg ball moving at +10 m/s hits a wall and bounces back at −8 m/s. A second identical ball moving at +10 m/s hits the wall and sticks (stops). Which ball exerts a greater impulse on the wall?',
            options: [
              'The ball that bounces',
              'The ball that sticks',
              'They exert equal impulse on the wall',
              'Cannot determine without knowing contact time'
            ],
            correctAnswer: 0,
            explanation: 'Bouncing ball: $|\\Delta p| = |0.5(-8-10)| = 9$ N·s. Sticking ball: $|\\Delta p| = |0.5(0-10)| = 5$ N·s. The bouncing ball delivers greater impulse because it reverses direction.'
          },
          {
            question: 'A rocket in deep space fires its engines, ejecting 10 kg of fuel at 3000 m/s (relative to the rocket). If the rocket has mass 990 kg after the burn, what is its change in speed?',
            options: [
              '3.0 m/s',
              '30.3 m/s',
              '300 m/s',
              '3000 m/s'
            ],
            correctAnswer: 1,
            explanation: 'By momentum conservation (initial momentum = 0): $0 = (990)(v) + (10)(-3000)$. So $v = 30{,}000/990 \\approx 30.3$ m/s.'
          }
        ]
      }
    }
  ]
}
