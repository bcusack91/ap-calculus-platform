export const physics1AngularMomentumPart7Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Angular Momentum**

Let's synthesize everything about angular momentum and tackle AP-level questions.
      `
    },
    {
      id: 'am7-summary',
      type: 'text' as const,
      content: `
## Complete Summary

### Angular Momentum
$$L = I\\omega \\quad \\text{(rigid body)} \\qquad L = mvr \\quad \\text{(point mass)}$$

### Newton's Second Law (Rotational)
$$\\tau_{\\text{net}} = I\\alpha = \\frac{\\Delta L}{\\Delta t}$$

### Rotational Kinetic Energy
$$KE_{\\text{rot}} = \\frac{1}{2}I\\omega^2$$

### Conservation of Angular Momentum
$$\\text{If } \\tau_{\\text{net, ext}} = 0: \\quad I_i\\omega_i = I_f\\omega_f$$

### Key Relationships
- $L$ conserved ↔ no external torque
- When $I$ decreases → $\\omega$ increases → $KE$ increases (internal work done)
- Rotational "collisions": $I_1\\omega_1 + I_2\\omega_2 = (I_1 + I_2)\\omega_f$
      `
    },
    {
      id: 'am7-ap-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student sits on a freely rotating stool holding a spinning bicycle wheel with its angular momentum pointing up. She flips the wheel so its angular momentum points down. The student and stool will:',
            options: [
              'Not rotate (angular momentum is always conserved)',
              'Rotate in the direction the wheel originally spun',
              'Rotate opposite to the wheel\'s original direction',
              'Oscillate back and forth'
            ],
            correctAnswer: 1,
            explanation: 'Initial $L$ points up (from wheel). After flipping, the wheel has $L$ pointing down. To conserve total $L$, the student + stool must gain upward $L$, meaning they rotate in the same direction the wheel originally spun, and with twice the wheel\'s angular momentum change.'
          },
          {
            question: 'A point mass $m$ moves in a straight line with velocity $v$ at a perpendicular distance $d$ from a point P. Its angular momentum about P is:',
            options: [
              '0',
              '$mvd$',
              '$mv/d$',
              '$md^2v$'
            ],
            correctAnswer: 1,
            explanation: 'Even for linear motion, the angular momentum about any point is $L = mvr_{\\perp} = mvd$, where $d$ is the perpendicular distance from the path to the point.'
          },
          {
            question: 'A spinning top gradually slows down and eventually falls over. This is because:',
            options: [
              'Angular momentum is not conserved',
              'Gravity exerts a torque that reduces the spin',
              'Friction at the tip exerts a torque that reduces angular momentum',
              'The top loses mass as it spins'
            ],
            correctAnswer: 2,
            explanation: 'Friction at the tip exerts a torque that gradually reduces the spin angular momentum. When $L$ becomes too small, gravity\'s torque causes the top to precess and eventually fall.'
          }
        ]
      }
    },
    {
      id: 'am7-calculation',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A solid cylinder ($M = 10$ kg, $R = 0.2$ m) starts from rest and a constant torque of 4 N·m is applied. What is its angular momentum after 5 seconds? (in kg·m²/s)

2) A hoop (mass 2 kg, radius 0.5 m) rolls without slipping at 3 m/s. What is its total kinetic energy? (in J)

3) A child ($m = 30$ kg) runs at 4 m/s tangent to the edge of a stationary merry-go-round (uniform disk, $M = 100$ kg, $R = 2$ m) and jumps on. What is the final angular velocity? (in rad/s, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '18', '0.86', '0.860'],
        hint1: '$\\tau = \\Delta L/\\Delta t \\Rightarrow \\Delta L = \\tau \\cdot t = 4(5)$',
        hint2: 'For a hoop rolling: $KE = mv^2$ (translational + rotational both equal $\\frac{1}{2}mv^2$)',
        hint3: '$L_i = mvR = 30(4)(2) = 240$. $I_f = \\frac{1}{2}(100)(4) + 30(4) = 200 + 120 = 320$. $\\omega_f = L/I_f$.',
        explanation: '1) $\\Delta L = \\tau t = 4(5) = 20$ kg·m²/s. 2) Hoop: $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}(mR^2)(v/R)^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2 = 2(9) = 18$ J. 3) $L_i = 240$ kg·m²/s. $I_f = 200 + 120 = 320$ kg·m². $\\omega_f = 240/320 = 0.75$ rad/s.'
      }
    },
    {
      id: 'am7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The expression for angular momentum L is:',
            options: ['Iω', 'Iα', 'τθ', '½Iω²'],
            correctIndex: 0,
            explanation: 'Angular momentum is $L = I\\omega$.'
          },
          {
            label: 'Angular momentum is conserved when there is:',
            options: ['zero net external force', 'zero net external torque', 'zero angular velocity', 'constant rotational inertia'],
            correctIndex: 1,
            explanation: 'Conservation of angular momentum requires zero net external torque.'
          },
          {
            label: 'When rotational inertia decreases and angular momentum is conserved, kinetic energy:',
            options: ['increases', 'decreases', 'stays the same', 'depends on the details'],
            correctIndex: 0,
            explanation: 'When $I$ decreases and $L$ is conserved, $KE = L^2/(2I)$ increases.'
          },
          {
            label: 'Is kinetic energy conserved in rotational collisions?',
            options: ['yes, always', 'no, never', 'only in elastic collisions', 'only when L is conserved'],
            correctIndex: 2,
            explanation: 'Kinetic energy is conserved only in elastic collisions. In inelastic rotational collisions (e.g., objects sticking together), KE decreases.'
          }
        ]
      }
    },
    {
      id: 'am7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final AP Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A disk ($I = 4$ kg·m²) rotates at 5 rad/s. A torque of 8 N·m acts for 3 seconds in the direction of rotation. The final angular velocity is:',
            options: [
              '7 rad/s',
              '11 rad/s',
              '13 rad/s',
              '17 rad/s'
            ],
            correctAnswer: 1,
            explanation: '$\\alpha = \\tau/I = 8/4 = 2$ rad/s². $\\omega_f = \\omega_i + \\alpha t = 5 + 2(3) = 11$ rad/s.'
          },
          {
            question: 'Planet A has twice the mass and half the orbital radius of Planet B. Both are in circular orbits. The ratio $L_A/L_B$ is:',
            options: [
              '$\\sqrt{2}$',
              '$1$',
              '$2$',
              '$1/\\sqrt{2}$'
            ],
            correctAnswer: 0,
            explanation: 'For circular orbits: $L = mvr$. Orbital velocity: $v = \\sqrt{GM_{\\text{star}}/r}$. $L = m\\sqrt{GM_{\\text{star}}/r} \\cdot r = m\\sqrt{GM_{\\text{star}} r}$. $L_A/L_B = (2m)(\\sqrt{r/2})/(m\\sqrt{r}) = 2/\\sqrt{2} = \\sqrt{2}$.'
          }
        ]
      }
    }
  ]
}
