export const physics1RotationalKinematicsPart2Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk2-intro',
      type: 'text' as const,
      content: `
# 📐 Rotational Kinematic Equations

**Part 2 of 7 — The Big Four, Rotational Edition**

The four kinematic equations you mastered for linear motion have exact rotational counterparts. If you know one set, you know both!
      `
    },
    {
      id: 'rk2-equations',
      type: 'text' as const,
      content: `
## The Rotational Kinematic Equations

For **constant angular acceleration** $\\alpha$:

| Linear | Rotational |
|--------|-----------|
| $v = v_0 + at$ | $\\omega = \\omega_0 + \\alpha t$ |
| $x = x_0 + v_0 t + \\frac{1}{2}at^2$ | $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$ |
| $v^2 = v_0^2 + 2a(x - x_0)$ | $\\omega^2 = \\omega_0^2 + 2\\alpha(\\theta - \\theta_0)$ |
| $x - x_0 = \\frac{1}{2}(v_0 + v)t$ | $\\theta - \\theta_0 = \\frac{1}{2}(\\omega_0 + \\omega)t$ |

### Same Structure, Different Variables!

Just replace:
- $x \\to \\theta$
- $v \\to \\omega$
- $a \\to \\alpha$

### Key Requirement

These equations are valid only when $\\alpha$ is **constant** (uniform angular acceleration).
      `
    },
    {
      id: 'rk2-choosing',
      type: 'text' as const,
      content: `
## Choosing the Right Equation

| Known | Missing | Use |
|-------|---------|-----|
| $\\omega_0, \\alpha, t$ | $\\theta$ | $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$ |
| $\\omega_0, \\omega, t$ | $\\alpha$ | $\\omega = \\omega_0 + \\alpha t$ |
| $\\omega_0, \\alpha, \\theta$ | $t$ | $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$ |
| $\\omega_0, \\omega, \\theta$ | $t$ | $\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t$ |

### Example

A grinding wheel starts from rest and reaches $50$ rad/s in $10$ s.

- $\\omega_0 = 0$, $\\omega = 50$ rad/s, $t = 10$ s
- $\\alpha = \\frac{\\omega - \\omega_0}{t} = \\frac{50}{10} = 5$ rad/s²
- $\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(5)(100) = 250$ rad
- In revolutions: $250/(2\\pi) \\approx 39.8$ revolutions
      `
    },
    {
      id: 'rk2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rotational Kinematics Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel starts at rest and accelerates at $2$ rad/s² for $6$ seconds. Its final angular velocity is:',
            options: [
              '3 rad/s',
              '6 rad/s',
              '12 rad/s',
              '36 rad/s'
            ],
            correctAnswer: 2,
            explanation: '$\\omega = \\omega_0 + \\alpha t = 0 + 2(6) = 12$ rad/s.'
          },
          {
            question: 'The rotational kinematic equations are valid only when:',
            options: [
              'The object moves in a circle',
              'Angular acceleration is constant',
              'The object starts from rest',
              'There is no friction'
            ],
            correctAnswer: 1,
            explanation: 'Just like their linear counterparts, the rotational kinematic equations require constant acceleration ($\\alpha$ = constant).'
          },
          {
            question: 'A flywheel decelerates from $100$ rad/s to rest over $200$ rad. Its angular acceleration is:',
            options: [
              '$-25$ rad/s²',
              '$-0.5$ rad/s²',
              '$-50$ rad/s²',
              '$-100$ rad/s²'
            ],
            correctAnswer: 0,
            explanation: '$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $0 = 100^2 + 2\\alpha(200)$. $-10000 = 400\\alpha$. $\\alpha = -25$ rad/s².'
          }
        ]
      }
    },
    {
      id: 'rk2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Rotational Kinematics Calculations** 🧮

1) A disk starts from rest and accelerates at $3$ rad/s². How many radians does it rotate in $4$ seconds?

2) A wheel spinning at $40$ rad/s decelerates at $-5$ rad/s². How long (in seconds) until it stops?

3) A turbine accelerates from $10$ rad/s to $50$ rad/s over $8$ seconds. How many revolutions does it make? (Round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '8', '38.2', '38.20'],
        hint1: '$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(3)(16)$',
        hint2: '$\\omega = \\omega_0 + \\alpha t$: $0 = 40 + (-5)t$',
        hint3: '$\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t = \\frac{1}{2}(10 + 50)(8) = 240$ rad. Revolutions $= 240/(2\\pi)$',
        explanation: '1) $\\theta = 0 + \\frac{1}{2}(3)(16) = 24$ rad. 2) $0 = 40 - 5t$, $t = 8$ s. 3) $\\theta = \\frac{1}{2}(60)(8) = 240$ rad. Rev $= 240/(2\\pi) = 38.2$.'
      }
    },
    {
      id: 'rk2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Equation Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When time is unknown but you know initial and final angular velocity and angle, which equation should you use?',
            options: ['ω = ω₀ + αt', 'θ = ω₀t + ½αt²', 'ω² = ω₀² + 2αθ', 'θ = ½(ω₀ + ω)t'],
            correctIndex: 2,
            explanation: 'When time is not given and you have $\\omega_0$, $\\omega$, and $\\theta$ (or $\\alpha$), use $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$.'
          },
          {
            label: 'The equation ω = ω₀ + αt does not involve which variable?',
            options: ['angular displacement', 'final angular velocity', 'angular acceleration', 'time'],
            correctIndex: 0,
            explanation: '$\\omega = \\omega_0 + \\alpha t$ does not involve angular displacement $\\theta$. Use this when $\\theta$ is not needed or given.'
          },
          {
            label: 'To convert linear kinematic equations to rotational form, the correct substitution is:',
            options: ['x → θ, v → ω, a → α', 'x → ω, v → α, a → θ', 'x → α, v → θ, a → ω', 'no substitution needed'],
            correctIndex: 0,
            explanation: 'The substitution is: position $x \\to \\theta$, velocity $v \\to \\omega$, acceleration $a \\to \\alpha$.'
          }
        ]
      }
    },
    {
      id: 'rk2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rotational Kinematics** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel makes 10 revolutions while accelerating from rest to $20$ rad/s. The angular acceleration is closest to:',
            options: [
              '$1.6$ rad/s²',
              '$3.2$ rad/s²',
              '$6.4$ rad/s²',
              '$10$ rad/s²'
            ],
            correctAnswer: 1,
            explanation: '$\\theta = 10 \\times 2\\pi = 20\\pi$ rad. $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $400 = 0 + 2\\alpha(20\\pi)$. $\\alpha = 400/(40\\pi) = 10/\\pi \\approx 3.18 \\approx 3.2$ rad/s².'
          },
          {
            question: 'A centrifuge decelerates uniformly from $200$ rad/s to $50$ rad/s in $15$ seconds. The total angle rotated is:',
            options: [
              '1125 rad',
              '1875 rad',
              '2250 rad',
              '3750 rad'
            ],
            correctAnswer: 1,
            explanation: '$\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t = \\frac{1}{2}(200 + 50)(15) = \\frac{1}{2}(250)(15) = 1875$ rad.'
          }
        ]
      }
    }
  ]
}
