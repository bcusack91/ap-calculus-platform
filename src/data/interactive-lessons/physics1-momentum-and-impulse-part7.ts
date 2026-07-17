export const physics1MomentumAndImpulsePart7Data = {
  topicSlug: 'momentum-and-impulse',
  sections: [
    {
      id: 'mi7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Momentum and Impulse**

Let\'s bring together all the key ideas from this topic and practice AP-style questions. This review covers: definition of momentum, impulse, the impulse-momentum theorem, F-t graphs, and real-world applications.
      `
    },
    {
      id: 'mi7-summary',
      type: 'text' as const,
      content: `
## Key Equations Summary

| Concept | Equation | Notes |
|---------|----------|-------|
| Momentum | $\\vec{p} = m\\vec{v}$ | Vector, units: kg·m/s |
| Impulse | $\\vec{J} = \\vec{F}_{\\text{avg}}\\Delta t$ | Vector, units: N·s |
| Impulse-Momentum Theorem | $\\vec{J} = \\Delta\\vec{p} = m\\vec{v}_f - m\\vec{v}_i$ | Net impulse = change in momentum |
| Average Force | $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}$ | From the theorem |
| KE-Momentum | $KE = \\frac{p^2}{2m}$ | Useful relationship |

## Key Concepts

1. **Momentum is a vector** — direction matters; use signed velocities
2. **Impulse = area under F-t curve** — works for any force profile
3. **Increasing $\\Delta t$ decreases $F$** — basis of all safety devices
4. **Bouncing delivers more impulse than stopping** — because $|\\Delta v|$ is larger
5. **The impulse-momentum theorem is Newton\'s 2nd Law** — just rearranged
      `
    },
    {
      id: 'mi7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP Review — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rubber ball and a clay ball of equal mass are thrown at a wall with equal speeds. The rubber ball bounces; the clay ball sticks. Which exerts a greater force on the wall?',
            options: [
              'The clay ball',
              'The rubber ball',
              'They exert equal force',
              'Cannot be determined without contact time'
            ],
            correctAnswer: 3,
            explanation: 'The rubber ball delivers a greater impulse (it bounces, reversing direction). However, the average force depends on both impulse AND contact time: $F = \\Delta p / \\Delta t$. Without knowing the contact times, we cannot determine which has a greater force.'
          },
          {
            question: 'An object of mass $m$ has momentum $p$. Its kinetic energy is:',
            options: [
              '$mp$',
              '$p/(2m)$',
              '$p^2/(2m)$',
              '$2mp^2$'
            ],
            correctAnswer: 2,
            explanation: 'From $p = mv$: $v = p/m$. Then $KE = \\frac{1}{2}mv^2 = \\frac{1}{2}m(p/m)^2 = \\frac{p^2}{2m}$.'
          },
          {
            question: 'A net force of 12 N acts on a 3 kg object initially at rest for 4 seconds. What is the final momentum?',
            options: [
              '12 kg·m/s',
              '36 kg·m/s',
              '48 kg·m/s',
              '144 kg·m/s'
            ],
            correctAnswer: 2,
            explanation: '$J = F\\Delta t = (12)(4) = 48$ N·s. Since $J = \\Delta p$ and $p_i = 0$: $p_f = 48$ kg·m/s.'
          }
        ]
      }
    },
    {
      id: 'mi7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP Review — Set 2** 📝
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg object moving east at 5 m/s collides with a wall and bounces back west at 3 m/s. What is the magnitude of the impulse?',
            options: [
              '4 N·s',
              '10 N·s',
              '16 N·s',
              '6 N·s'
            ],
            correctAnswer: 2,
            explanation: 'Taking east as positive: $J = m(v_f - v_i) = 2(-3 - 5) = 2(-8) = -16$ N·s. Magnitude = 16 N·s. Remember, when direction reverses, $|\\Delta v| = |v_f| + |v_i|$.'
          },
          {
            question: 'Two identical balls are thrown at a surface at the same speed. One bounces elastically; the other stops on impact. If both have the same contact time, which experiences a greater average force?',
            options: [
              'The ball that stops',
              'The ball that bounces',
              'Equal forces',
              'Not enough information'
            ],
            correctAnswer: 1,
            explanation: 'The ball that bounces has $|\\Delta v| = 2v$ (reverses completely), while the one that stops has $|\\Delta v| = v$. With the same mass and contact time, the bouncing ball experiences twice the impulse and therefore twice the average force.'
          }
        ]
      }
    },
    {
      id: 'mi7-calculations',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A 0.40 kg ball hits a bat at +30 m/s and leaves at −45 m/s. The bat contact time is 0.002 s. What is the average force magnitude? (in N)

2) A 50 kg skater at rest pushes off a wall with a force of 200 N for 0.8 s. What is the skater\'s final speed? (in m/s)

3) A car\'s crumple zone extends the collision time from 0.05 s to 0.50 s. By what factor does the average force decrease? (whole number)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15000', '3.2', '10'],
        hint1: '$|\\Delta p| = 0.40 \\times |-45 - 30| = 0.40 \\times 75$. Then $F = |\\Delta p|/\\Delta t$',
        hint2: '$J = F\\Delta t = (200)(0.8)$. Then $v = J/m$',
        hint3: 'Ratio = $0.50/0.05$. Since $F \\propto 1/\\Delta t$ for fixed $\\Delta p$',
        explanation: '1) $|\\Delta p| = 0.40(75) = 30$ kg·m/s. $F = 30/0.002 = 15{,}000$ N. 2) $J = (200)(0.8) = 160$ N·s. $v = 160/50 = 3.2$ m/s. 3) Factor = $0.50/0.05 = 10$. Ten times longer collision time means 10× less force.'
      }
    },
    {
      id: 'mi7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Both momentum and impulse are classified as:',
            options: ['scalar', 'vector', 'constant', 'dimensionless'],
            correctIndex: 1,
            explanation: 'Both momentum and impulse are vector quantities with magnitude and direction.'
          },
          {
            label: 'Graphically, impulse is determined by:',
            options: ['the slope of the F-t curve', 'the area under the F-t curve', 'the maximum force', 'the force at the midpoint'],
            correctIndex: 1,
            explanation: 'Impulse is always the area under the force-time curve: $J = \\int F \\, dt$.'
          },
          {
            label: 'When stopping time is increased for the same change in momentum:',
            options: ['the impulse changes', 'the average force increases', 'the average force decreases', 'momentum is not conserved'],
            correctIndex: 2,
            explanation: 'Increasing stopping time while keeping impulse constant ($F\\Delta t = \\Delta p$) decreases the average force. This is the principle behind all safety devices.'
          }
        ]
      }
    },
    {
      id: 'mi7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Momentum & Impulse** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.25 kg ball is dropped from 5 m above a hard floor. It rebounds to a height of 3.2 m. Taking $g = 10$ $m/s^{2}$, what is the impulse from the floor? (Hint: find speeds using $v = \\sqrt{2gh}$)',
            options: [
              '2.5 N·s',
              '4.5 N·s',
              '4.5 kg·m/s (upward)',
              '6.5 kg·m/s (upward)'
            ],
            correctAnswer: 2,
            explanation: 'Speed down: $v_1 = \\sqrt{2(10)(5)} = 10$ m/s. Speed up: $v_2 = \\sqrt{2(10)(3.2)} = 8$ m/s. Taking up as positive: $J = m(v_f - v_i) = 0.25(+8 - (-10)) = 0.25(18) = 4.5$ kg·m/s upward.'
          },
          {
            question: 'The impulse-momentum theorem is most closely related to which of Newton\'s laws?',
            options: [
              'First Law (inertia)',
              'Second Law ($F = ma$)',
              'Third Law (action-reaction)',
              'Law of Universal Gravitation'
            ],
            correctAnswer: 1,
            explanation: 'The impulse-momentum theorem ($F\\Delta t = \\Delta p$) is a direct consequence of Newton\'s Second Law ($F = ma = m\\Delta v/\\Delta t$). Multiplying both sides by $\\Delta t$ gives the theorem.'
          }
        ]
      }
    }
  ]
}
