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

- $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(5)(0.16) = 0.4$ $kg\\cdot m^{2}$
- $\\tau = FR = (20)(0.4) = 8$ N·m
- $\\alpha = \\tau/I = 8/0.4 = 20$ $rad/s^{2}$

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
            question: 'A net torque of 12 N·m acts on an object with $I = 3$ $kg\\cdot m^{2}$. The angular acceleration is:',
            options: [
              '2 $rad/s^{2}$',
              '4 $rad/s^{2}$',
              '6 $rad/s^{2}$',
              '36 $rad/s^{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\tau/I = 12/3 = 4$ $rad/s^{2}$.'
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

1) A solid cylinder ($M = 8$ kg, $R = 0.25$ m) has a net torque of 5 N·m applied. What is $\\alpha$? $(in rad/s^{2})$

2) A wheel ($I = 2$ $kg\\cdot m^{2}$) starts from rest and a constant torque of 6 N·m is applied for 4 seconds. What is the final angular velocity? (in rad/s)

3) A disk ($I = 0.5$ $kg\\cdot m^{2}$) decelerates from 40 rad/s to rest in 8 seconds. What is the magnitude of the braking torque? (in N·m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '12', '2.5'],
        hint1: 'First find $I$ for a solid cylinder: $I = \\frac{1}{2}MR^2$. Then use $\\alpha = \\tau/I$.',
        hint2: 'Find $\\alpha = \\tau/I$ first, then use $\\omega = \\omega_0 + \\alpha t$ with $\\omega_0 = 0$.',
        hint3: 'Find $\\alpha$ from $\\alpha = \\Delta\\omega / \\Delta t$, then use $\\tau = I\\alpha$.',
        explanation: '1) $I = 0.25$ $kg\\cdot m^{2}$. $\\alpha = 5/0.25 = 20$ $rad/s^{2}$. 2) $\\alpha = 3$ $rad/s^{2}$. $\\omega = 0 + 3(4) = 12$ rad/s. 3) $\\alpha = 40/8 = 5$ $rad/s^{2}$. $|\\tau| = (0.5)(5) = 2.5$ N·m.'
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
            options: ['N·m', '$kg\\cdot m^{2}/s$', '$rad/s^{2}$', '$kg\\cdot m^{2}$'],
            correctIndex: 2,
            explanation: 'Angular acceleration $\\alpha$ has units of $rad/s^{2}$, computed from $\\alpha = \\tau/I$.'
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
            question: 'A merry-go-round ($I = 500$ $kg\\cdot m^{2}$) is pushed with a constant torque. It accelerates from rest to $2$ rad/s in $20$ seconds. The torque is:',
            options: [
              '25 N·m',
              '50 N·m',
              '100 N·m',
              '500 N·m'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\Delta\\omega/\\Delta t = 2/20 = 0.1$ $rad/s^{2}$. $\\tau = I\\alpha = (500)(0.1) = 50$ N·m.'
          },
          {
            question: 'A torque changes the angular momentum of a wheel from 100 $kg\\cdot m^{2}/s$ to 160 $kg\\cdot m^{2}/s$ in 4 seconds. The torque is:',
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
