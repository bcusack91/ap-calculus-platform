export const physics1CollisionsPart6Data = {
  topicSlug: 'collisions',
  sections: [
    {
      id: 'co6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Collisions**

Time to integrate all collision concepts! In this workshop, we\'ll solve AP-level problems covering elastic, inelastic, and perfectly inelastic collisions in 1D and 2D. The key skill is identifying the collision type and choosing the right conservation laws.
      `
    },
    {
      id: 'co6-decision-tree',
      type: 'text' as const,
      content: `
## Collision Problem Decision Tree

### Step 1: Identify the Collision Type

| Clue | Type | Use |
|------|------|-----|
| "Objects stick together" | Perfectly inelastic | Momentum only |
| "Elastic collision" or "KE conserved" | Elastic | Momentum + KE |
| "Bounce apart" (no KE info) | Inelastic | Momentum only (need more info) |

### Step 2: Choose Equations

| Collision Type | Equations Available |
|---------------|-------------------|
| All types | $m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$ |
| Elastic only | $\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$ |

### Step 3: Solve

- Perfectly inelastic: 1 unknown, 1 equation → direct solution
- Elastic: AP Physics 1 gives you one final velocity; find the other from momentum, then confirm $KE_f = KE_i$
- Inelastic: Need additional information (e.g., one final velocity)
      `
    },
    {
      id: 'co6-problem1',
      type: 'multiple-choice' as const,
      content: `
**Problem 1: Collision Classification** 🔍

A 2 kg ball at +8 m/s hits a 3 kg ball at rest. After: Ball 1 at $-0.8$ m/s, Ball 2 at $+5.87$ m/s.

Is this collision elastic?
      `,
      exercise: {
        questions: [
          {
            question: 'Check: Is $KE_i = KE_f$?',
            options: [
              'Yes, $KE_i = KE_f = 64$ J (elastic)',
              'No, $KE_i = 64$ J but $KE_f \\approx 52.3$ J (inelastic)',
              'No, $KE_i = 64$ J but $KE_f = 68$ J (impossible)',
              'Cannot determine without the collision time'
            ],
            correctAnswer: 1,
            explanation: '$KE_i = \\frac{1}{2}(2)(64) = 64$ J. $KE_f = \\frac{1}{2}(2)(0.64) + \\frac{1}{2}(3)(34.46) = 0.64 + 51.69 \\approx 52.3$ J. Since $KE_f < KE_i$, this is an inelastic collision. (For an elastic collision, we would need $v_{1f} = -1.6$ m/s and $v_{2f} = 6.4$ m/s.)'
          }
        ]
      }
    },
    {
      id: 'co6-problem2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Ballistic Pendulum Revisited** 🎯

A 0.015 kg bullet at 600 m/s embeds in a 3.0 kg block at rest.

1) What is the velocity of the block+bullet right after impact? (in m/s, to 3 significant figures)

2) What fraction of the bullet\'s kinetic energy is lost? (as a percentage, round to 3 significant figures)

3) If the block+bullet slides on a surface with $\\mu_k = 0.30$, how far does it slide? (in m, to 3 significant figures, use $g = 10$ $m/s^{2}$)
      `,
      exercise: {
        questions: [{ question: '1) Velocity right after impact (m/s)', answer: '2.99', acceptableAnswers: ['2.99', '2.985', '3.0', '3'] }, { question: '2) Percentage of kinetic energy lost (%)', answer: '99.5', acceptableAnswers: ['99.5', '99.50', '99.5%'] }, { question: '3) Sliding distance (m)', answer: '1.49', acceptableAnswers: ['1.49', '1.485', '1.5', '1.50'] }],
        hint1: '$v_f = (0.015)(600)/(3.015) \\approx 9/3.015$',
        hint2: '$KE_i = \\frac{1}{2}(0.015)(360000) = 2700$ J. $KE_f = \\frac{1}{2}(3.015)(2.985)^2$. Fraction lost = $(KE_i - KE_f)/KE_i$.',
        hint3: 'Use $v^2 = 2\\mu g d$. $d = v^2/(2 \\times 0.30 \\times 10)$.',
        explanation: '1) $v_f = 9/3.015 \\approx 2.99$ m/s. 2) $KE_i = 2700$ J. $KE_f = \\frac{1}{2}(3.015)(2.985)^2 \\approx 13.4$ J. Lost = $(2700-13.4)/2700 \\approx 99.5\\%$ (equivalently, the fraction kept is $m/(m+M) = 0.015/3.015 \\approx 0.5\\%$). 3) $d = (2.985)^2/(2 \\times 0.30 \\times 10) = 8.91/6 \\approx 1.49$ m. Rounding $v_f$ to 3.0 m/s first gives 1.50 m, which is also accepted.'
      }
    },
    {
      id: 'co6-problem3',
      type: 'multiple-choice' as const,
      content: `
**Problem 3: Elastic Collision** 💎

A 4 kg ball at +6 m/s collides with a 2 kg ball at rest. Afterward the 4 kg ball moves at +2 m/s.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the change in momentum of the 4 kg ball?',
            options: [
              '$-16$ kg·m/s',
              '$+16$ kg·m/s',
              '$-8$ kg·m/s',
              '$-24$ kg·m/s'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta p = m(v_f - v_i) = 4(2 - 6) = -16$ kg·m/s. The ball slows, so its momentum change points backward; $-24$ uses only the initial momentum.'
          },
          {
            question: 'What is the velocity of the 2 kg ball after the collision?',
            options: [
              '+4 m/s',
              '+6 m/s',
              '+8 m/s',
              '+10 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Momentum: $(4)(6) = (4)(2) + (2)v_2$, so $2v_2 = 16$ and $v_2 = +8$ m/s. Equivalently, the 2 kg ball gains the $+16$ kg·m/s the 4 kg ball lost.'
          },
          {
            question: 'Verify: Is kinetic energy conserved?',
            options: [
              'Yes, $KE_i = KE_f = 72$ J',
              'No, $KE_i = 72$ J but $KE_f = 68$ J',
              'Yes, $KE_i = KE_f = 36$ J',
              'No, $KE_i > KE_f$'
            ],
            correctAnswer: 0,
            explanation: '$KE_i = \\frac{1}{2}(4)(36) = 72$ J. $KE_f = \\frac{1}{2}(4)(4) + \\frac{1}{2}(2)(64) = 8 + 64 = 72$ J ✅. Kinetic energy is conserved — confirmed elastic!'
          }
        ]
      }
    },
    {
      id: 'co6-problem4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Head-On Inelastic** 💥

A 5 kg ball at +4 m/s and a 3 kg ball at −6 m/s collide. The 5 kg ball moves at +1 m/s after.

1) What is the velocity of the 3 kg ball after? (in m/s, include sign)

2) What is the kinetic energy lost? (in J)

3) Is this collision elastic, inelastic, or perfectly inelastic? (type "elastic", "inelastic", or "perfectly inelastic")
      `,
      exercise: {
        questions: [{ question: '1) Velocity of the 3 kg ball (m/s)', answer: '-1', acceptableAnswers: ['-1', '-1.0'] }, { question: '2) Kinetic energy lost (J)', answer: '90', acceptableAnswers: ['90', '90.0'] }, { question: '3) Collision type', answer: 'inelastic', acceptableAnswers: ['inelastic', 'inelastic collision', 'partially inelastic', 'it is inelastic'] }],
        hint1: '$(5)(4) + (3)(-6) = (5)(1) + (3)(v_2)$. $20 - 18 = 5 + 3v_2$. $3v_2 = -3$.',
        hint2: '$KE_i = \\frac{1}{2}(5)(16) + \\frac{1}{2}(3)(36) = 40 + 54 = 94$ J. $KE_f = \\frac{1}{2}(5)(1) + \\frac{1}{2}(3)(1) = 2.5 + 1.5 = 4$ J.',
        hint3: 'Objects separate (not stuck together), and $KE_f < KE_i$.',
        explanation: '1) $2 = 5 + 3v_2$. $3v_2 = -3$. $v_2 = -1$ m/s. 2) $KE_i = 40 + 54 = 94$ J. $KE_f = 2.5 + 1.5 = 4$ J. Lost = 90 J. 3) Objects separate and $KE_f < KE_i$, so inelastic.'
      }
    },
    {
      id: 'co6-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Collision Problem Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve a perfectly inelastic collision, you should use:',
            options: ['momentum conservation', 'kinetic energy conservation', 'both momentum and KE conservation', 'Newton\'s Second Law with the collision force'],
            correctIndex: 0,
            explanation: 'For a perfectly inelastic collision, use momentum conservation only. KE is not conserved (it is maximally lost).'
          },
          {
            label: 'To solve an elastic collision with two unknowns, you need:',
            options: ['momentum conservation only', 'kinetic energy conservation only', 'momentum and KE conservation together', 'Newton\'s Third Law alone'],
            correctIndex: 2,
            explanation: 'For elastic collisions with two unknowns, you need both momentum and KE conservation (or the equivalent relative velocity condition).'
          },
          {
            label: 'For a ballistic pendulum problem, the correct approach is:',
            options: ['momentum during collision, then energy for swing', 'energy during collision, then momentum for swing', 'momentum only throughout', 'energy only throughout'],
            correctIndex: 0,
            explanation: 'In a ballistic pendulum: use momentum conservation for the (perfectly inelastic) collision, then energy conservation for the subsequent swing upward.'
          }
        ]
      }
    },
    {
      id: 'co6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem Solving** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg ball at +10 m/s collides with a 2 kg ball at rest. After collision, the first ball moves at +4 m/s. The collision is:',
            options: [
              'Elastic (KE is conserved)',
              'Inelastic (some KE is lost)',
              'Perfectly inelastic (objects stick together)',
              'Impossible (violates conservation)'
            ],
            correctAnswer: 1,
            explanation: 'Momentum: $v_2 = (20-8)/2 = 6$ m/s. $KE_i = \\frac{1}{2}(2)(100) = 100$ J. $KE_f = \\frac{1}{2}(2)(16) + \\frac{1}{2}(2)(36) = 16 + 36 = 52$ J. $KE_f < KE_i$, so it\'s inelastic. (For elastic: Ball 1 would stop and Ball 2 would move at 10 m/s.)'
          },
          {
            question: 'A 3 kg block at 5 m/s hits a 1 kg block at rest. They stick together and slide on a surface ($\\mu_k = 0.25$). How far do they slide? (Use $g = 10$ $m/s^{2}$)',
            options: [
              '1.41 m',
              '28.1 m',
              '2.81 m',
              '5.00 m'
            ],
            correctAnswer: 2,
            explanation: '$v_f = (3)(5)/(4) = 3.75$ m/s. $d = v_f^2/(2\\mu g) = 14.0625/(2 \\times 0.25 \\times 10) = 14.0625/5 = 2.81$ m. Dropping the 2 in the denominator gives 1.41 m, leaving out $g$ gives 28.1 m, and using the 5 m/s speed from before the collision gives 5.00 m.'
          }
        ]
      }
    }
  ]
}
