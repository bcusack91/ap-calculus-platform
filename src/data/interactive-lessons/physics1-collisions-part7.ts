export const physics1CollisionsPart7Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Collisions**

This final lesson brings together all collision concepts: elastic, inelastic, perfectly inelastic, 1D and 2D, and the relationships between momentum and energy conservation. Let\'s review the key ideas and practice AP-level questions.
      `
    },
    {
      id: 'co7-summary',
      type: 'text' as const,
      content: `
## Complete Collision Summary

### Conservation Laws by Collision Type

| Type | Momentum | Kinetic Energy | Objects After |
|------|----------|---------------|---------------|
| Elastic | ✅ Conserved | ✅ Conserved | Separate |
| Inelastic | ✅ Conserved | ❌ Partially lost | Separate |
| Perfectly inelastic | ✅ Conserved | ❌ Maximum loss | Stick together |

### Key Formulas

**All collisions:** $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$

**Perfectly inelastic:** $v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$

**Elastic check:** $\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$

**Center of mass:** $v_{cm} = \\dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$ is the same before and after every collision

### Key Conceptual Points

1. Momentum is **always** conserved (no net external force)
2. KE is conserved **only** in elastic collisions
3. Perfectly inelastic = max KE loss (objects stick)
4. Equal masses elastic, target at rest (1D): the velocities swap
5. Light hits heavy: bounces back. Heavy hits light: plows through.
      `
    },
    {
      id: 'co7-ap-quiz-1',
      type: 'multiple-choice' as const,
      content: `
**AP Review — Conceptual** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which type of collision loses the MOST kinetic energy?',
            options: [
              'Elastic',
              'Inelastic',
              'Perfectly inelastic',
              'All collisions lose the same KE'
            ],
            correctAnswer: 2,
            explanation: 'Perfectly inelastic collisions (objects stick together) produce the maximum kinetic energy loss for given initial conditions. Elastic collisions lose zero KE.'
          },
          {
            question: 'Ball A bounces off Ball B. Ball C sticks to Ball D. All balls are identical and have the same initial speeds. Which collision has MORE change in momentum for the striking ball?',
            options: [
              'The bouncing A-B collision',
              'C-D collision, since the ball stops',
              'They have equal $\\Delta p$, since speeds match',
              'Cannot determine without contact time'
            ],
            correctAnswer: 0,
            explanation: 'Ball A reverses direction (larger $|\\Delta v|$), so it experiences a greater change in momentum than Ball C (which just stops relative to D). Bouncing always involves a greater impulse than sticking for the same initial conditions.'
          },
          {
            question: 'A bomb at rest explodes into three equal pieces. Two pieces fly off at right angles to each other at speed $v$. The third piece moves at:',
            options: [
              '$v$',
              '$v\\sqrt{2}$',
              '$2v$',
              '$v/\\sqrt{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Total initial momentum = 0. If two pieces have momenta $mv\\hat{x}$ and $mv\\hat{y}$, the third must have momentum $-mv\\hat{x} - mv\\hat{y}$. Its speed = $v\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'co7-ap-quiz-2',
      type: 'multiple-choice' as const,
      content: `
**AP Review — Quantitative** 📝
      `,
      exercise: {
        questions: [
          {
            question: 'A 5 kg ball at +6 m/s collides with a 1 kg ball at rest. Afterward the 5 kg ball moves at +4 m/s. What is the speed of the 1 kg ball?',
            options: [
              '5 m/s',
              '8 m/s',
              '10 m/s',
              '12 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Momentum: $(5)(6) = (5)(4) + (1)v_2$, so $v_2 = 30 - 20 = 10$ m/s. Check: $K_i = 90$ J and $K_f = 40 + 50 = 90$ J, so this collision happens to be elastic.'
          },
          {
            question: 'A 0.5 kg ball at 8 m/s collides perfectly inelastically with a 1.5 kg ball at rest. What percentage of KE is lost?',
            options: [
              '25%',
              '50%',
              '75%',
              '100%'
            ],
            correctAnswer: 2,
            explanation: 'For perfectly inelastic with target at rest: fraction lost = $m_2/(m_1+m_2) = 1.5/2.0 = 0.75 = 75\\%$.'
          }
        ]
      }
    },
    {
      id: 'co7-calculations',
      type: 'input-boxes' as const,
      content: `
**AP Calculation Practice** 🧮

1) A 3 kg ball at +10 m/s collides head-on with a 1 kg ball at rest. Afterward the 3 kg ball moves at +5 m/s. What is the velocity of the 1 kg ball? (in m/s)

2) What is the total kinetic energy of the two balls after the collision? (in J)

3) A 2 kg ball at +6 m/s and a 4 kg ball at −3 m/s collide and stick. What is the final velocity? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '150', '0'],
        hint1: 'Momentum: $(3)(10) = (3)(5) + (1)v_2$',
        hint2: '$KE_f = \\frac{1}{2}(3)(5)^2 + \\frac{1}{2}(1)v_2^2$, using $v_2$ from part 1',
        hint3: '$v_f = [(2)(6) + (4)(-3)]/(2+4) = (12-12)/6$',
        explanation: '1) $30 = 15 + v_2$, so $v_2 = +15$ m/s. 2) $KE_f = 37.5 + 112.5 = 150$ J. The initial KE was $\\frac{1}{2}(3)(10)^2 = 150$ J, so this collision is elastic. 3) $v_f = 0/6 = 0$ m/s — the combined object is at rest!'
      }
    },
    {
      id: 'co7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Momentum is conserved in:',
            options: ['elastic only', 'inelastic only', 'all types, but only in 1D', 'all collision types'],
            correctIndex: 3,
            explanation: 'Momentum is conserved in ALL collision types (elastic, inelastic, and perfectly inelastic) as long as no net external force acts.'
          },
          {
            label: 'Kinetic energy is conserved only in:',
            options: ['elastic collisions', 'inelastic collisions', 'perfectly inelastic collisions', 'all collisions'],
            correctIndex: 0,
            explanation: 'Kinetic energy is conserved ONLY in elastic collisions. In all other types, some KE is converted to other forms of energy.'
          },
          {
            label: 'When a light ball hits a much heavier stationary wall elastically, the ball:',
            options: ['stops completely', 'bounces back at nearly the same speed', 'sticks to the wall', 'slows to half speed'],
            correctIndex: 1,
            explanation: 'When a light object hits a much heavier stationary object elastically, it bounces back at nearly the same speed ($v_{1f} \\approx -v_{1i}$). The heavy object barely moves.'
          }
        ]
      }
    },
    {
      id: 'co7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Collisions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In which scenario is the MOST kinetic energy converted to other forms?',
            options: [
              'Two equal balls in an elastic head-on collision',
              'A ball bouncing elastically off a much heavier wall',
              'Two equal balls, one at rest, that stick together',
              'Equal masses at +10 m/s and −10 m/s that stick together'
            ],
            correctAnswer: 3,
            explanation: 'Equal masses at equal but opposite speeds in a perfectly inelastic collision: $v_f = 0$, so ALL kinetic energy is lost. $KE_f = 0$. This is the absolute maximum KE loss scenario.'
          },
          {
            question: 'A 1 kg cart moving at 6 m/s strikes a 2 kg cart at rest on a level frictionless track. The 1 kg cart rebounds at 2 m/s. What fraction of the 1 kg cart\'s initial kinetic energy is transferred to the 2 kg cart?',
            options: [
              '$1/9$',
              '$4/9$',
              '$8/9$',
              '$2/3$'
            ],
            correctAnswer: 2,
            explanation: 'Momentum: $(1)(6) = (1)(-2) + (2)v_2$, so $v_2 = 4$ m/s. $KE_i = \\frac{1}{2}(1)(6)^2 = 18$ J and the 2 kg cart gets $\\frac{1}{2}(2)(4)^2 = 16$ J, so the fraction is $16/18 = 8/9$. (The 1 kg cart keeps 2 J, so no energy is lost: the collision is elastic.) $1/9$ is the fraction the 1 kg cart keeps, $4/9$ compares only the squared speeds, and $2/3$ compares the speeds themselves.'
          }
        ]
      }
    }
  ]
}
