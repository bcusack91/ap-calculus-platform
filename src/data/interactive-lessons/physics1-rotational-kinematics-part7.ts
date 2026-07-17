export const physics1RotationalKinematicsPart7Data = {
  topicSlug: 'rotational-kinematics',
  sections: [
    {
      id: 'rk7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Rotational Kinematics**

Let's consolidate everything and practice AP-level questions covering all aspects of rotational kinematics.
      `
    },
    {
      id: 'rk7-summary',
      type: 'text' as const,
      content: `
## Complete Summary

### Angular Quantities
$$\\theta \\leftrightarrow x, \\quad \\omega \\leftrightarrow v, \\quad \\alpha \\leftrightarrow a$$

### Kinematic Equations (constant $\\alpha$)
$$\\omega = \\omega_0 + \\alpha t$$
$$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$$
$$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$$

### Linear-Angular Connection
$$v = r\\omega, \\quad a_t = r\\alpha, \\quad a_c = r\\omega^2$$

### Rolling Without Slipping
$$v_{\\text{cm}} = R\\omega, \\quad a_{\\text{cm}} = R\\alpha$$

### Rotational Inertia
$$I = \\sum m_i r_i^2$$
- Hoop: $MR^2$ | Disk: $\\frac{1}{2}MR^2$ | Solid sphere: $\\frac{2}{5}MR^2$
      `
    },
    {
      id: 'rk7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel accelerates uniformly from rest. In the first 5 seconds it rotates through angle $\\theta$. In the next 5 seconds (t = 5 to t = 10), it rotates through:',
            options: [
              '$\\theta$',
              '$2\\theta$',
              '$3\\theta$',
              '$4\\theta$'
            ],
            correctAnswer: 2,
            explanation: 'In the first 5 s: $\\theta_1 = \\frac{1}{2}\\alpha(25) = 12.5\\alpha$. In the first 10 s: $\\theta_{10} = \\frac{1}{2}\\alpha(100) = 50\\alpha$. In the second 5 s: $\\theta_2 = 50\\alpha - 12.5\\alpha = 37.5\\alpha = 3\\theta_1$.'
          },
          {
            question: 'A disk and a hoop of equal mass and radius are released from rest at the top of an incline. They roll without slipping. Which reaches the bottom first?',
            options: [
              'The hoop',
              'The disk',
              'They arrive together',
              'Depends on the incline angle'
            ],
            correctAnswer: 1,
            explanation: 'The disk has smaller $I$ ($\\frac{1}{2}MR^2$ vs. $MR^2$), so less energy goes into rotation and more into translation. The disk is faster.'
          },
          {
            question: 'An ice skater has rotational inertia $I$ and angular velocity $\\omega$. She brings her arms in, reducing her rotational inertia to $I/3$. Her new angular velocity is:',
            options: [
              '$\\omega/3$',
              '$\\omega$',
              '$3\\omega$',
              '$9\\omega$'
            ],
            correctAnswer: 2,
            explanation: 'Angular momentum is conserved: $I\\omega = (I/3)\\omega\'$. $\\omega\' = 3\\omega$.'
          }
        ]
      }
    },
    {
      id: 'rk7-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A car accelerates from rest. Its tires (radius 0.3 m) reach $\\omega = 80$ rad/s in 12 seconds. What is the car's speed at that time? (in m/s)

2) How far has the car traveled in those 12 seconds? (in m)

3) A solid sphere ($M = 2$ kg, $R = 0.1$ m) rolls without slipping at $v = 5$ m/s. What is its total kinetic energy (translational + rotational)? (in J)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['24', '144', '35'],
        hint1: '$v = R\\omega = (0.3)(80)$',
        hint2: '$\\theta = \\frac{1}{2}(0 + 80)(12) = 480$ rad. $d = R\\theta = (0.3)(480)$',
        hint3: '$KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{2}{5}mR^2)(v/R)^2 = \\frac{7}{10}mv^2$',
        explanation: '1) $v = (0.3)(80) = 24$ m/s. 2) $\\theta = \\frac{1}{2}(80)(12) = 480$ rad. $d = (0.3)(480) = 144$ m. 3) $KE = \\frac{7}{10}(2)(25) = 35$ J.'
      }
    },
    {
      id: 'rk7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which shape has the largest rotational inertia for a given mass and radius?',
            options: ['solid sphere', 'hollow sphere', 'solid disk', 'hoop'],
            correctIndex: 3,
            explanation: 'The hoop has $I = MR^2$, the largest rotational inertia for a given mass and radius.'
          },
          {
            label: 'For rolling without slipping, the velocity of the contact point is:',
            options: ['zero', 'v_cm', '2v_cm', '$R\\omega^{2}$'],
            correctIndex: 0,
            explanation: 'For rolling without slipping, the contact point has zero velocity (translation and rotation cancel).'
          },
          {
            label: 'The rolling condition that connects linear and angular motion is:',
            options: ['v = Rω', 'v = R/ω', 'v = Rα', 'v = $R^{2}\\omega$'],
            correctIndex: 0,
            explanation: 'The rolling condition $v_{\\text{cm}} = R\\omega$ connects linear and angular motion.'
          },
          {
            label: 'Rotational kinematic equations require angles measured in:',
            options: ['rad', 'degrees', 'revolutions', 'any angular unit'],
            correctIndex: 0,
            explanation: 'All rotational kinematic equations and formulas like $s = r\\theta$ require angles in radians.'
          }
        ]
      }
    },
    {
      id: 'rk7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final AP Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A wheel of radius $R$ rolls without slipping with angular acceleration $\\alpha$. The acceleration of the center of mass is:',
            options: [
              '$R\\alpha$',
              '$R\\omega^2$',
              '$R\\alpha + R\\omega^2$',
              '$\\sqrt{(R\\alpha)^2 + (R\\omega^2)^2}$'
            ],
            correctAnswer: 0,
            explanation: 'The acceleration of the center of mass equals the tangential acceleration: $a_{\\text{cm}} = R\\alpha$ (for rolling without slipping, the center moves in a straight line).'
          },
          {
            question: 'A merry-go-round (uniform disk, $M = 200$ kg, $R = 2$ m) starts from rest. A constant torque of 100 N·m is applied. Its angular velocity after 10 seconds is:',
            options: [
              '1.0 rad/s',
              '2.5 rad/s',
              '5.0 rad/s',
              '10 rad/s'
            ],
            correctAnswer: 1,
            explanation: '$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(200)(4) = 400$ $kg\\cdot m^{2}$. $\\alpha = \\tau/I = 100/400 = 0.25$ $rad/s^{2}$. $\\omega = \\alpha t = (0.25)(10) = 2.5$ rad/s.'
          }
        ]
      }
    }
  ]
}
