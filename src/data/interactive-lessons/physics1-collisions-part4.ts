export const physics1CollisionsPart4Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co4-intro',
      type: 'text' as const,
      content: `
# 📐 1D Elastic Collision Formulas

**Part 4 of 7 — Collisions**

For elastic collisions in one dimension, we can derive **exact formulas** for the final velocities by solving the conservation of momentum and conservation of kinetic energy equations simultaneously. These formulas are powerful and save significant computation time.
      `
    },
    {
      id: 'co4-derivation',
      type: 'text' as const,
      content: `
## The Two Equations

For a 1D elastic collision:

**Momentum:** $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$ ... (1)

**KE:** $\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$ ... (2)

### A Useful Trick

Rearranging equation (2):

$$m_1(v_{1i}^2 - v_{1f}^2) = m_2(v_{2f}^2 - v_{2i}^2)$$

$$m_1(v_{1i} - v_{1f})(v_{1i} + v_{1f}) = m_2(v_{2f} - v_{2i})(v_{2f} + v_{2i})$$

Dividing by the rearranged equation (1): $m_1(v_{1i} - v_{1f}) = m_2(v_{2f} - v_{2i})$:

$$v_{1i} + v_{1f} = v_{2f} + v_{2i}$$

This simplifies to:

$$v_{1i} - v_{2i} = -(v_{1f} - v_{2f})$$

> **The relative velocity of approach equals the relative velocity of separation** (with opposite sign). This is the hallmark of elastic collisions!
      `
    },
    {
      id: 'co4-formulas',
      type: 'text' as const,
      content: `
## The General Formulas

Solving equations (1) and the relative velocity equation simultaneously:

$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2} v_{1i} + \\frac{2m_2}{m_1 + m_2} v_{2i}$$

$$v_{2f} = \\frac{2m_1}{m_1 + m_2} v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2} v_{2i}$$

### Special Case: $v_{2i} = 0$ (Target at Rest)

$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2} v_{1i}$$

$$v_{2f} = \\frac{2m_1}{m_1 + m_2} v_{1i}$$

### Verification of Special Cases

| Condition | $v_{1f}$ | $v_{2f}$ | Interpretation |
|-----------|---------|---------|---------------|
| $m_1 = m_2$ | $0$ | $v_{1i}$ | Objects swap velocities |
| $m_1 \\gg m_2$ | $\\approx v_{1i}$ | $\\approx 2v_{1i}$ | Heavy barely slows; light flies off at 2× |
| $m_1 \\ll m_2$ | $\\approx -v_{1i}$ | $\\approx 0$ | Light bounces back; heavy barely moves |
      `
    },
    {
      id: 'co4-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

A 6 kg ball at $+4$ m/s collides elastically with a 2 kg ball at rest.

$$v_{1f} = \\frac{6 - 2}{6 + 2}(4) = \\frac{4}{8}(4) = 2 \\text{ m/s}$$

$$v_{2f} = \\frac{2(6)}{6 + 2}(4) = \\frac{12}{8}(4) = 6 \\text{ m/s}$$

### Verification

**Momentum:** $(6)(4) = (6)(2) + (2)(6) = 12 + 12 = 24$ ✅

**KE:** $\\frac{1}{2}(6)(16) = 48$ J. $\\frac{1}{2}(6)(4) + \\frac{1}{2}(2)(36) = 12 + 36 = 48$ J ✅

**Relative velocity:** $4 - 0 = 4$. $-(2 - 6) = 4$ ✅
      `
    },
    {
      id: 'co4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Elastic Collision Formulas** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a 1D elastic collision, the relative speed of approach equals:',
            options: [
              'The relative speed of separation',
              'Twice the relative speed of separation',
              'Half the relative speed of separation',
              'Zero'
            ],
            correctAnswer: 0,
            explanation: 'For elastic collisions: $|v_{1i} - v_{2i}| = |v_{1f} - v_{2f}|$. The relative speed of approach equals the relative speed of separation. This is equivalent to $e = 1$.'
          },
          {
            question: 'A 3 kg ball at +10 m/s hits a 3 kg ball at rest elastically. After collision:',
            options: [
              'Both move at 5 m/s',
              'Ball 1 stops, Ball 2 moves at 10 m/s',
              'Ball 1 moves at −10 m/s, Ball 2 stays at rest',
              'Both move at 10 m/s'
            ],
            correctAnswer: 1,
            explanation: 'Equal masses swap velocities in elastic collisions: $v_{1f} = \\frac{3-3}{6}(10) = 0$ m/s. $v_{2f} = \\frac{2(3)}{6}(10) = 10$ m/s.'
          },
          {
            question: 'A 1 kg ball at +8 m/s hits a 3 kg ball at rest elastically. What is $v_{1f}$?',
            options: [
              '+2 m/s',
              '−4 m/s',
              '+4 m/s',
              '−2 m/s'
            ],
            correctAnswer: 1,
            explanation: '$v_{1f} = \\frac{1-3}{1+3}(8) = \\frac{-2}{4}(8) = -4$ m/s. The lighter ball bounces back.'
          }
        ]
      }
    },
    {
      id: 'co4-calculations',
      type: 'input-boxes' as const,
      content: `
**Elastic Collision Formula Practice** 🧮

Use the elastic collision formulas with $v_{2i} = 0$:

1) A 4 kg ball at +10 m/s hits a 1 kg ball at rest elastically. What is $v_{1f}$? (in m/s)

2) What is $v_{2f}$? (in m/s)

3) A 2 kg ball at +9 m/s hits a 4 kg ball at rest elastically. What is $v_{1f}$? (in m/s, include sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '16', '-3'],
        hint1: '$v_{1f} = \\frac{4-1}{4+1}(10) = \\frac{3}{5}(10)$',
        hint2: '$v_{2f} = \\frac{2(4)}{4+1}(10) = \\frac{8}{5}(10)$',
        hint3: '$v_{1f} = \\frac{2-4}{2+4}(9) = \\frac{-2}{6}(9)$',
        explanation: '1) $v_{1f} = (3/5)(10) = 6$ m/s. 2) $v_{2f} = (8/5)(10) = 16$ m/s. 3) $v_{1f} = (-2/6)(9) = -3$ m/s (bounces back).'
      }
    },
    {
      id: 'co4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Formula Applications** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When two equal masses collide elastically, they:',
            options: ['swap velocities', 'both stop', 'both continue at half speed', 'the heavier one stops'],
            correctIndex: 0,
            explanation: 'When equal masses collide elastically, they swap velocities. This follows directly from the formulas with $m_1 = m_2$.'
          },
          {
            label: 'When a light object hits a much heavier stationary object elastically, the light object:',
            options: ['speeds up', 'slows down slightly', 'stops', 'bounces back'],
            correctIndex: 3,
            explanation: 'When a light object hits a heavy stationary one elastically, $v_{1f} = \\frac{m_1-m_2}{m_1+m_2}v_{1i} < 0$ (since $m_1 < m_2$). The light object bounces back.'
          },
          {
            label: 'When a very heavy object hits a light stationary target elastically, the target flies off at approximately:',
            options: ['$v_{1i}$', '$2v_{1i}$', '$v_{1i}/2$', '0'],
            correctIndex: 1,
            explanation: 'When $m_1 \\gg m_2$ and $v_{2i} = 0$: $v_{2f} = \\frac{2m_1}{m_1+m_2}v_{1i} \\approx 2v_{1i}$. The light target flies off at nearly twice the incoming speed!'
          }
        ]
      }
    },
    {
      id: 'co4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 1D Elastic Formulas** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A proton ($m$) collides elastically with a stationary carbon nucleus ($12m$). The fraction of kinetic energy transferred to the carbon is:',
            options: [
              '12/169 ≈ 7%',
              '48/169 ≈ 28%',
              '1/13 ≈ 8%',
              '24/169 ≈ 14%'
            ],
            correctAnswer: 1,
            explanation: '$v_{2f} = \\frac{2m}{13m}v_{1i} = \\frac{2}{13}v_{1i}$. $KE_2 = \\frac{1}{2}(12m)(\\frac{2}{13}v_{1i})^2 = \\frac{1}{2}(12m)(\\frac{4}{169})v_{1i}^2 = \\frac{48}{2 \\times 169}mv_{1i}^2$. Fraction = $KE_2/KE_1 = \\frac{48}{169} \\approx 28\\%$.'
          },
          {
            question: 'In a 1D elastic collision between a moving object and a stationary one, which case transfers the MOST kinetic energy to the target?',
            options: [
              '$m_1 \\gg m_2$',
              '$m_1 \\ll m_2$',
              '$m_1 = m_2$',
              'It doesn\'t depend on mass'
            ],
            correctAnswer: 2,
            explanation: 'When $m_1 = m_2$, the first object stops and transfers ALL (100%) of its KE to the second. This is the maximum possible energy transfer in an elastic collision.'
          }
        ]
      }
    }
  ]
}
