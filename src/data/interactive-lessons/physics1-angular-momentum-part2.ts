export const physics1AngularMomentumPart2Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am2-intro',
      type: 'text' as const,
      content: `
# 🔄 Newton's Second Law for Rotation

**Part 2 of 7 — $\\tau_{\\text{net}} = I\\alpha$**

Newton's Second Law $F = ma$ has a rotational analogue: **net torque equals rotational inertia times angular acceleration**.
      `
    },
    {
      id: 'am2-law',
      type: 'text' as const,
      content: `
## The Rotational Second Law

$$\\tau_{\\text{net}} = I\\alpha$$

This is the most important equation in rotational dynamics. It tells us:
- A net torque causes angular acceleration
- More rotational inertia means less angular acceleration for the same torque
- The angular acceleration is in the **same direction** as the net torque

### Equivalent Form

$$\\tau_{\\text{net}} = \\frac{\\Delta L}{\\Delta t}$$

Net torque equals the rate of change of angular momentum — the direct analogue of $F = dp/dt$.

### When $\\tau_{\\text{net}} = 0$:

$$\\frac{\\Delta L}{\\Delta t} = 0 \\Rightarrow L = \\text{constant}$$

No net torque → angular momentum is conserved!
      `
    },
    {
      id: 'am2-applications',
      type: 'text' as const,
      content: `
## Applying $\\tau = I\\alpha$

### Example 1: Spinning a Wheel

A solid disk ($M = 5$ kg, $R = 0.4$ m) has a tangential force of $20$ N applied at its rim.

- $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(5)(0.16) = 0.4$ kg·m²
- $\\tau = FR = (20)(0.4) = 8$ N·m
- $\\alpha = \\tau/I = 8/0.4 = 20$ rad/s²

### Example 2: Pulley Problem

A mass $m$ hangs from a string wrapped around a pulley (mass $M$, radius $R$, solid disk). The tension in the string provides the torque:

$$\\tau = TR = I\\alpha = \\frac{1}{2}MR^2 \\cdot \\frac{a}{R}$$

Combined with $mg - T = ma$, you can solve for both $a$ and $T$.
      `
    },
    {
      id: 'am2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rotational Newton's Second Law Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A net torque of 12 N·m acts on an object with $I = 3$ kg·m². The angular acceleration is:',
            options: [
              '2 rad/s²',
              '4 rad/s²',
              '6 rad/s²',
              '36 rad/s²'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\tau/I = 12/3 = 4$ rad/s².'
          },
          {
            question: 'Doubling the rotational inertia while keeping the net torque the same will:',
            options: [
              'Double the angular acceleration',
              'Halve the angular acceleration',
              'Keep the angular acceleration the same',
              'Quadruple the angular acceleration'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\tau/I$. If $I \\to 2I$, then $\\alpha \\to \\tau/(2I) = \\alpha/2$.'
          },
          {
            question: 'The rotational analogue of $F = dp/dt$ is:',
            options: [
              '$\\tau = I\\omega$',
              '$\\tau = dL/dt$',
              '$\\tau = L\\alpha$',
              '$L = I\\alpha$'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = dL/dt$: net torque equals the rate of change of angular momentum, just as net force equals the rate of change of linear momentum.'
          }
        ]
      }
    },
    {
      id: 'am2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rotational Dynamics Calculations** 🧮

1) A solid cylinder ($M = 8$ kg, $R = 0.25$ m) has a net torque of 5 N·m applied. What is $\\alpha$? (in rad/s²)

2) A wheel ($I = 2$ kg·m²) starts from rest and a constant torque of 6 N·m is applied for 4 seconds. What is the final angular velocity? (in rad/s)

3) A disk ($I = 0.5$ kg·m²) decelerates from 40 rad/s to rest in 8 seconds. What is the magnitude of the braking torque? (in N·m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '12', '2.5'],
        hint1: 'First find $I$ for a solid cylinder: $I = \\frac{1}{2}MR^2$. Then use $\\alpha = \\tau/I$.',
        hint2: 'Find $\\alpha = \\tau/I$ first, then use $\\omega = \\omega_0 + \\alpha t$ with $\\omega_0 = 0$.',
        hint3: 'Find $\\alpha$ from $\\alpha = \\Delta\\omega / \\Delta t$, then use $\\tau = I\\alpha$.',
        explanation: '1) $I = 0.25$ kg·m². $\\alpha = 5/0.25 = 20$ rad/s². 2) $\\alpha = 3$ rad/s². $\\omega = 0 + 3(4) = 12$ rad/s. 3) $\\alpha = 40/8 = 5$ rad/s². $|\\tau| = (0.5)(5) = 2.5$ N·m.'
      }
    },
    {
      id: 'am2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Rotational Dynamics Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rotational form of Newton\'s Second Law is:',
            options: ['F = ma', 'τ = Iα', 'p = mv', 'L = Iω'],
            correctIndex: 1,
            explanation: '$\\tau = I\\alpha$ is the rotational form of Newton\'s Second Law.'
          },
          {
            label: 'When the net external torque on a system is zero:',
            options: ['angular momentum is conserved', 'angular velocity is zero', 'the object is at rest', 'rotational inertia is zero'],
            correctIndex: 0,
            explanation: 'When $\\tau_{\\text{net}} = 0$, $dL/dt = 0$, meaning angular momentum is conserved.'
          },
          {
            label: 'The SI units of angular acceleration α are:',
            options: ['N·m', 'kg·m²/s', 'rad/s²', 'kg·m²'],
            correctIndex: 2,
            explanation: 'Angular acceleration $\\alpha$ has units of rad/s², computed from $\\alpha = \\tau/I$.'
          }
        ]
      }
    },
    {
      id: 'am2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rotational Second Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A merry-go-round ($I = 500$ kg·m²) is pushed with a constant torque. It accelerates from rest to $2$ rad/s in $20$ seconds. The torque is:',
            options: [
              '25 N·m',
              '50 N·m',
              '100 N·m',
              '500 N·m'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\Delta\\omega/\\Delta t = 2/20 = 0.1$ rad/s². $\\tau = I\\alpha = (500)(0.1) = 50$ N·m.'
          },
          {
            question: 'A torque changes the angular momentum of a wheel from 100 kg·m²/s to 160 kg·m²/s in 4 seconds. The torque is:',
            options: [
              '10 N·m',
              '15 N·m',
              '40 N·m',
              '60 N·m'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = \\Delta L/\\Delta t = (160 - 100)/4 = 60/4 = 15$ N·m.'
          }
        ]
      }
    }
  ]
}
