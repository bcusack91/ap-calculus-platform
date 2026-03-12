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

| Type | Momentum | Kinetic Energy | $e$ |
|------|----------|---------------|-----|
| Elastic | ✅ Conserved | ✅ Conserved | 1 |
| Inelastic | ✅ Conserved | ❌ Partially lost | $0 < e < 1$ |
| Perfectly inelastic | ✅ Conserved | ❌ Maximum loss | 0 |

### Key Formulas

**All collisions:** $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$

**Perfectly inelastic:** $v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$

**Elastic (target at rest):**
$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i}, \\quad v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i}$$

**Elastic relative velocity:** $v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$

### Key Conceptual Points

1. Momentum is **always** conserved (no net external force)
2. KE is conserved **only** in elastic collisions
3. Perfectly inelastic = max KE loss (objects stick)
4. Equal masses elastic: velocity swap (1D) or 90° deflection (2D)
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
              'A-B collision (bouncing)',
              'C-D collision (sticking)',
              'They have equal $\\Delta p$',
              'Cannot determine'
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
            question: 'A 5 kg ball at +6 m/s collides elastically with a 1 kg ball at rest. What is the speed of the 1 kg ball after?',
            options: [
              '5 m/s',
              '8 m/s',
              '10 m/s',
              '12 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v_{2f} = \\frac{2m_1}{m_1+m_2}v_{1i} = \\frac{2(5)}{6}(6) = \\frac{10}{6}(6) = 10$ m/s.'
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

1) A 3 kg ball at +10 m/s collides elastically with a 1 kg ball at rest. What is $v_{1f}$? (in m/s)

2) What is $v_{2f}$? (in m/s)

3) A 2 kg ball at +6 m/s and a 4 kg ball at −3 m/s collide and stick. What is the final velocity? (in m/s)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '15', '0'],
        hint1: '$v_{1f} = \\frac{3-1}{3+1}(10) = \\frac{2}{4}(10)$',
        hint2: '$v_{2f} = \\frac{2(3)}{3+1}(10) = \\frac{6}{4}(10)$',
        hint3: '$v_f = [(2)(6) + (4)(-3)]/(2+4) = (12-12)/6$',
        explanation: '1) $v_{1f} = (2/4)(10) = 5$ m/s. 2) $v_{2f} = (6/4)(10) = 15$ m/s. 3) $v_f = 0/6 = 0$ m/s — the combined object is at rest!'
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
            options: ['elastic only', 'inelastic only', 'perfectly inelastic only', 'all collision types'],
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
            options: ['stops completely', 'bounces back at nearly the same speed', 'passes through the wall', 'slows to half speed'],
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
              'Two equal balls, elastic collision',
              'A ball bouncing off a much heavier wall',
              'Two equal balls, perfectly inelastic collision',
              'A ball at +10 m/s and another at −10 m/s, equal mass, perfectly inelastic'
            ],
            correctAnswer: 3,
            explanation: 'Equal masses at equal but opposite speeds in a perfectly inelastic collision: $v_f = 0$, so ALL kinetic energy is lost. $KE_f = 0$. This is the absolute maximum KE loss scenario.'
          },
          {
            question: 'A neutron (mass $m$) collides elastically with a stationary carbon-12 nucleus (mass $12m$). What fraction of the neutron\'s kinetic energy is transferred to the carbon?',
            options: [
              '$2/13$',
              '$12/13$',
              '$48/169$',
              '$144/169$'
            ],
            correctAnswer: 2,
            explanation: '$v_{2f} = \\frac{2m}{13m}v_{1i} = \\frac{2}{13}v_{1i}$. $KE_{\\text{carbon}} = \\frac{1}{2}(12m)(\\frac{2}{13}v_{1i})^2 = \\frac{48}{338}mv_{1i}^2 = \\frac{48}{169} \\times \\frac{1}{2}mv_{1i}^2$. Fraction = $48/169 \\approx 28.4\\%$.'
          }
        ]
      }
    }
  ]
}
