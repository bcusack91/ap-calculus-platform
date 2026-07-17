export const physics1RotationalKinematicsPart6Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Rotational Kinematics Practice**

Let's apply all the rotational kinematics tools to solve challenging problems systematically.
      `
    },
    {
      id: 'rk6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

1. **Identify** whether the problem involves pure rotation, pure translation, or both (rolling)
2. **List knowns** using angular variables ($\\theta$, $\\omega_0$, $\\omega$, $\\alpha$, $t$)
3. **Choose** the right kinematic equation
4. **Connect** linear and angular if needed: $v = r\\omega$, $a_t = r\\alpha$
5. **Check** units and signs

### Common Pitfalls
- Mixing degrees and radians
- Forgetting the rolling condition $v = R\\omega$
- Confusing $a_t$ (tangential) with $a_c$ (centripetal)
- Using the wrong rotational inertia formula
      `
    },
    {
      id: 'rk6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Practice Problems — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel starts from rest and reaches $\\omega = 30$ rad/s after $\\theta = 150$ rad. The angular acceleration is:',
            options: [
              '1 $rad/s^{2}$',
              '2 $rad/s^{2}$',
              '3 $rad/s^{2}$',
              '5 $rad/s^{2}$'
            ],
            correctAnswer: 2,
            explanation: '$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$: $900 = 0 + 2\\alpha(150)$. $\\alpha = 900/300 = 3$ $rad/s^{2}$.'
          },
          {
            question: 'A car tire (radius 0.3 m) rotates at 100 rad/s. The car speed is:',
            options: [
              '10 m/s',
              '30 m/s',
              '33 m/s',
              '300 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v = R\\omega = (0.3)(100) = 30$ m/s (rolling without slipping).'
          },
          {
            question: 'A grinding wheel ($I = 0.5$ $kg\\cdot m^{2}$) requires 10 N·m of torque to achieve $\\alpha = 20$ $rad/s^{2}$. What is its actual $\\alpha$?',
            options: [
              '10 $rad/s^{2}$',
              '20 $rad/s^{2}$',
              '5 $rad/s^{2}$',
              '40 $rad/s^{2}$'
            ],
            correctAnswer: 1,
            explanation: '$\\tau = I\\alpha \\Rightarrow \\alpha = \\tau/I = 10/0.5 = 20$ $rad/s^{2}$. The question confirms the calculation.'
          }
        ]
      }
    },
    {
      id: 'rk6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Calculations** 🧮

1) A CD player accelerates a disc from rest to $50$ rad/s in $2$ seconds. How many revolutions does it make? (Round to 3 significant figures)

2) A solid cylinder (mass 5 kg, radius 0.2 m) rolls without slipping at 4 m/s. What is its angular velocity? (in rad/s)

3) A fan blade decelerates from $\\omega_0 = 80$ rad/s to $\\omega = 20$ rad/s while making 50 revolutions. What is the angular acceleration? (in $rad/s^{2}$, round to 3 significant figures. Include the negative sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.0', '20', '-9.5'],
        hint1: '$\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t = \\frac{1}{2}(0 + 50)(2) = 50$ rad. Rev $= 50/(2\\pi)$',
        hint2: '$\\omega = v/R = 4/0.2$',
        hint3: '$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$. $\\theta = 50 \\times 2\\pi = 100\\pi$ rad.',
        explanation: '1) $\\theta = 50$ rad. Rev $= 50/(2\\pi) \\approx 7.96 \\approx 8.0$. 2) $\\omega = 4/0.2 = 20$ rad/s. 3) $20^2 = 80^2 + 2\\alpha(100\\pi)$. $400 - 6400 = 200\\pi\\alpha$. $-6000 = 628.3\\alpha$. $\\alpha = -9.55 \\approx -9.5$ $rad/s^{2}$.'
      }
    },
    {
      id: 'rk6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Strategy Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When time is unknown, which rotational kinematics equation should you use?',
            options: ['ω = $\\omega_{0}$ + αt', '$\\omega^{2}$ = $\\omega_{0}^{2}$ + 2αθ', 'θ = $\\omega_{0}t$ + $\\tfrac{1}{2} \\alpha t^{2}$', 'θ = $\\tfrac{1}{2} (\\omega_{0} + \\omega )t$'],
            correctIndex: 1,
            explanation: 'When time is unknown but you know $\\omega_0$, $\\omega$, and $\\theta$ (or $\\alpha$), use $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$.'
          },
          {
            label: 'Which equation connects translational and rotational motion for rolling without slipping?',
            options: ['v = Rω (rolling condition)', 'v = Rα', 'ω = R/v', 'a = Rω'],
            correctIndex: 0,
            explanation: 'The rolling without slipping condition connects translational and rotational motion: $v_{\\text{cm}} = R\\omega$.'
          },
          {
            label: 'Which type of acceleration is always present in circular motion and points toward the center?',
            options: ['tangential acceleration', 'centripetal acceleration', 'angular acceleration', 'gravitational acceleration'],
            correctIndex: 1,
            explanation: 'Centripetal acceleration ($a_c = v^2/r = r\\omega^2$) is always present in circular motion, pointing toward the center.'
          }
        ]
      }
    },
    {
      id: 'rk6-challenge',
      type: 'multiple-choice' as const,
      content: `
**Challenge Problems** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A solid ball rolls down a ramp of height $h$. Using energy conservation (no slipping), its speed at the bottom is:',
            options: [
              '$\\sqrt{2gh}$',
              '$\\sqrt{10gh/7}$',
              '$\\sqrt{5gh/3}$',
              '$\\sqrt{gh}$'
            ],
            correctAnswer: 1,
            explanation: '$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{2}{5}mr^2)(v/r)^2 = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$. $v = \\sqrt{10gh/7}$.'
          },
          {
            question: 'Two wheels start from rest and rotate through the same angle. Wheel A has twice the angular acceleration of Wheel B. The ratio of their final angular velocities ($\\omega_A/\\omega_B$) is:',
            options: [
              '2',
              '$\\sqrt{2}$',
              '4',
              '1'
            ],
            correctAnswer: 1,
            explanation: '$\\omega^2 = 2\\alpha\\theta$. $\\omega_A^2/\\omega_B^2 = \\alpha_A/\\alpha_B = 2$. So $\\omega_A/\\omega_B = \\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'rk6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel accelerates from 5 rad/s to 15 rad/s in 4 seconds. The number of revolutions made is:',
            options: [
              '5.1',
              '6.4',
              '10.2',
              '20.4'
            ],
            correctAnswer: 1,
            explanation: '$\\theta = \\frac{1}{2}(\\omega_0 + \\omega)t = \\frac{1}{2}(5 + 15)(4) = 40$ rad. Rev $= 40/(2\\pi) \\approx 6.37 \\approx 6.4$.'
          }
        ]
      }
    }
  ]
}
