export const physics1AngularMomentumPart6Data = {
  topicSlug: 'angular-momentum',
  sections: [
    {
      id: 'am6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Angular Momentum Practice**

Time to work through challenging problems involving angular momentum, rotational dynamics, and energy.
      `
    },
    {
      id: 'am6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

1. **Identify the system** and check for external torques
2. **If no external torque** → use conservation of $L$: $I_i\\omega_i = I_f\\omega_f$
3. **If external torque exists** → use $\\tau = I\\alpha$ or $\\tau = \\Delta L/\\Delta t$
4. **For energy questions** → compute $KE = \\frac{1}{2}I\\omega^2$ before and after
5. **For rolling problems** → remember $v = R\\omega$ and total $KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$

### Common AP Scenarios
- Object drops onto rotating platform (inelastic collision)
- Person walks on turntable
- Object changes shape while spinning
- Atwood machine with massive pulley
      `
    },
    {
      id: 'am6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Workshop Problems — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A uniform rod (mass $M$, length $L$) is pivoted at one end and released from horizontal. Its angular velocity when vertical is:',
            options: [
              '$\\sqrt{3g/L}$',
              '$\\sqrt{2g/L}$',
              '$\\sqrt{g/L}$',
              '$\\sqrt{6g/L}$'
            ],
            correctAnswer: 0,
            explanation: 'Using energy conservation: $Mg(L/2) = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(\\frac{1}{3}ML^2)\\omega^2$. $MgL/2 = ML^2\\omega^2/6$. $\\omega^2 = 3g/L$. $\\omega = \\sqrt{3g/L}$.'
          },
          {
            question: 'An Atwood machine uses a solid disk pulley ($M = 4$ kg, $R = 0.2$ m). Masses of 3 kg and 5 kg hang on either side. The acceleration of the system is closest to:',
            options: [
              '$1.5$ m/s²',
              '$1.8$ m/s²',
              '$2.0$ m/s²',
              '$2.5$ m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = \\frac{(m_2 - m_1)g}{m_1 + m_2 + M/2} = \\frac{(5-3)(10)}{3 + 5 + 2} = \\frac{20}{10} = 2.0$ m/s². With exact $g = 9.8$: $a = 19.6/10 = 1.96 \\approx 2.0$. But with the pulley contributing $M/2$: $a = (2)(9.8)/(3+5+2) = 19.6/10 = 1.96$. Closest to 2.0 m/s².'
          }
        ]
      }
    },
    {
      id: 'am6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

1) A turntable ($I = 1.2$ kg·m², $\\omega = 6$ rad/s) has a ring ($I = 0.8$ kg·m²) dropped on it from rest. Find the final $\\omega$. (in rad/s, round to 3 significant figures)

2) How much kinetic energy is lost in the collision above? (in J, round to 3 significant figures)

3) A 60 kg person stands on the edge of a 200 kg, 3 m radius turntable (uniform disk) initially at rest. The person begins walking at 1.5 m/s tangentially (relative to the ground). What is the turntable's angular velocity? (in rad/s, round to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.6', '8.6', '0.20'],
        hint1: 'Use conservation of angular momentum: $I_1 \\omega_1 = (I_1 + I_2)\\omega_f$.',
        hint2: 'Find $KE_i$ and $KE_f$ using $\\frac{1}{2}I\\omega^2$, then subtract to find the loss.',
        hint3: '$L_{\\text{total}} = 0$ initially. The person and turntable must have equal and opposite angular momenta. Find $I_{\\text{turntable}}$ for a uniform disk.',
        explanation: '1) $(1.2)(6) = 2.0 \\omega_f$. $\\omega_f = 7.2/2.0 = 3.6$ rad/s. 2) $KE_i = \\frac{1}{2}(1.2)(36) = 21.6$ J. $KE_f = \\frac{1}{2}(2.0)(12.96) = 12.96$ J. Loss $= 21.6 - 12.96 = 8.64 \\approx 8.6$ J. 3) $L_{\\text{total}} = 0$. $mvr - I\\omega_t = 0$. $270 = 900\\omega_t$. $\\omega_t = 0.30$ rad/s.'
      }
    },
    {
      id: 'am6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Strategy Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When an object drops onto a spinning platform, the best approach is:',
            options: ['conservation of L', 'τ = Iα', 'F = ma', 'conservation of energy'],
            correctIndex: 0,
            explanation: 'When an object drops onto a rotating platform with no external torques, use conservation of angular momentum.'
          },
          {
            label: 'In an inelastic rotational collision where objects stick together, kinetic energy:',
            options: ['is also conserved', 'increases', 'decreases', 'depends on the collision'],
            correctIndex: 2,
            explanation: 'When two objects stick together (inelastic rotational collision), kinetic energy always decreases.'
          },
          {
            label: 'The total kinetic energy of a rolling object is:',
            options: ['½Iω²', 'Iω', 'τθ', '½mv² + ½Iω²'],
            correctIndex: 3,
            explanation: 'For a rolling object, total KE includes both translational ($\\frac{1}{2}mv^2$) and rotational ($\\frac{1}{2}I\\omega^2$) components.'
          }
        ]
      }
    },
    {
      id: 'am6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A solid ball and a hollow ball of equal mass and radius start at the top of a ramp and roll without slipping. At the bottom:',
            options: [
              'The solid ball is faster (less energy in rotation)',
              'The hollow ball is faster (more energy in rotation)',
              'They have the same speed',
              'Cannot determine without knowing the ramp angle'
            ],
            correctAnswer: 0,
            explanation: 'The solid ball has smaller $I$ ($\\frac{2}{5}MR^2$ vs $\\frac{2}{3}MR^2$). Less energy goes to rotation → more goes to translation → faster speed.'
          },
          {
            question: 'A record player turntable ($I_1 = 0.1$ kg·m²) spins at $33\\frac{1}{3}$ RPM. A second identical turntable (not spinning) is dropped on top. The final RPM is:',
            options: [
              '$11\\frac{1}{9}$ RPM',
              '$16\\frac{2}{3}$ RPM',
              '$33\\frac{1}{3}$ RPM',
              '$66\\frac{2}{3}$ RPM'
            ],
            correctAnswer: 1,
            explanation: '$I_i\\omega_i = I_f\\omega_f$. $(0.1)(33.33) = (0.2)\\omega_f$. $\\omega_f = 33.33/2 = 16.67 = 16\\frac{2}{3}$ RPM.'
          }
        ]
      }
    }
  ]
}
