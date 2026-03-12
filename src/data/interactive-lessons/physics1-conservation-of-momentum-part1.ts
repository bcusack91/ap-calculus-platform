export const physics1ConservationOfMomentumPart1Data = {
  topicSlug: 'conservation-of-momentum',
  sections: [
    {
      id: 'cm1-intro',
      type: 'text' as const,
      content: `
# 🔒 Conservation of Momentum — Isolated Systems

**Part 1 of 7 — Conservation of Momentum**

One of the most powerful principles in all of physics: **the total momentum of an isolated system is conserved**. This means the total momentum before an interaction equals the total momentum after — no matter how complex the forces between objects are.

$$\\vec{p}_i = \\vec{p}_f$$

This single equation lets us solve problems that would be nearly impossible using Newton\'s laws alone.
      `
    },
    {
      id: 'cm1-isolated-systems',
      type: 'text' as const,
      content: `
## What Is an Isolated System?

An **isolated system** is one where **no net external force** acts on the system.

### External vs. Internal Forces

| Force Type | Definition | Effect on Total Momentum |
|-----------|------------|-------------------------|
| **Internal** | Forces between objects within the system | No effect (they cancel by Newton\'s 3rd Law) |
| **External** | Forces from outside the system | Changes total momentum |

### Examples

| System | Internal Forces | External Forces | Isolated? |
|--------|----------------|-----------------|-----------|
| Two colliding billiard balls | Contact force between them | Friction from table (small) | Approximately yes |
| Rifle + bullet | Explosion force | Gravity, normal force | Horizontally yes |
| Earth + falling ball | Gravity between them | None (both included!) | Yes! |

### Key Insight

By carefully choosing what to include in your "system," you can often make external forces cancel or be negligible.
      `
    },
    {
      id: 'cm1-law-statement',
      type: 'text' as const,
      content: `
## The Law of Conservation of Momentum

> If the net external force on a system is zero, the total momentum of the system remains constant.

$$\\vec{p}_{\\text{total, initial}} = \\vec{p}_{\\text{total, final}}$$

For two objects:

$$m_1 \\vec{v}_{1i} + m_2 \\vec{v}_{2i} = m_1 \\vec{v}_{1f} + m_2 \\vec{v}_{2f}$$

### Why It Works — Newton\'s Third Law

When object A pushes on object B, B pushes back on A with an equal and opposite force:

$$\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$$

Since both forces act for the same time $\\Delta t$:

$$\\vec{J}_{\\text{on } B} = -\\vec{J}_{\\text{on } A}$$

$$\\Delta \\vec{p}_B = -\\Delta \\vec{p}_A$$

$$\\Delta \\vec{p}_A + \\Delta \\vec{p}_B = 0$$

The total momentum change is zero — momentum is **transferred**, not created or destroyed.
      `
    },
    {
      id: 'cm1-simple-examples',
      type: 'text' as const,
      content: `
## Simple Example

### Two Skaters Push Apart

Two ice skaters face each other and push off. Skater A ($m_A = 60$ kg) and Skater B ($m_B = 80$ kg) are initially at rest.

**Before:** $p_i = 0 + 0 = 0$

**After:** $p_f = m_A v_A + m_B v_B = 0$

$$60 v_A + 80 v_B = 0$$

$$v_A = -\\frac{80}{60} v_B = -\\frac{4}{3} v_B$$

If Skater B moves at $+1.5$ m/s:

$$v_A = -\\frac{4}{3}(1.5) = -2.0 \\text{ m/s}$$

The lighter skater moves **faster** in the opposite direction — but the total momentum remains zero.
      `
    },
    {
      id: 'cm1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Conservation of Momentum** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two ice skaters push off each other. The total momentum of the system after the push is:',
            options: [
              'Greater than before',
              'Less than before',
              'Equal to zero (same as before)',
              'Depends on who pushes harder'
            ],
            correctAnswer: 2,
            explanation: 'They started at rest (total $p = 0$). By Newton\'s 3rd Law, they exert equal and opposite forces for equal times, so total momentum stays zero. One goes left, the other goes right.'
          },
          {
            question: 'Which is required for momentum to be conserved?',
            options: [
              'No forces act at all',
              'No net external force on the system',
              'All objects must have the same mass',
              'No energy is lost'
            ],
            correctAnswer: 1,
            explanation: 'Internal forces (between objects in the system) can be enormous — they cancel by Newton\'s 3rd Law. Only the NET EXTERNAL force must be zero for momentum conservation.'
          },
          {
            question: 'A 5 kg cart moving at +4 m/s collides with a 3 kg cart at rest. After the collision they stick together. What is their velocity?',
            options: [
              '+4 m/s',
              '+2.5 m/s',
              '+1.25 m/s',
              '+6.67 m/s'
            ],
            correctAnswer: 1,
            explanation: '$m_1 v_1 + m_2 v_2 = (m_1 + m_2)v_f$. $(5)(4) + (3)(0) = (8)v_f$. $v_f = 20/8 = 2.5$ m/s.'
          }
        ]
      }
    },
    {
      id: 'cm1-calculations',
      type: 'input-boxes' as const,
      content: `
**Conservation of Momentum Calculations** 🧮

1) A 10 kg ball moving at +6 m/s collides with a 5 kg ball at rest. After the collision, the 10 kg ball moves at +2 m/s. What is the velocity of the 5 kg ball? (in m/s)

2) Two objects ($m_1 = 4$ kg at $+3$ m/s, $m_2 = 2$ kg at $-6$ m/s) collide and stick together. What is their final velocity? (in m/s)

3) A 3 kg object at rest breaks into two pieces. Piece A (1 kg) moves at +12 m/s. What is the velocity of piece B (2 kg)? (in m/s, include sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '0', '-6'],
        hint1: '$(10)(6) + (5)(0) = (10)(2) + (5)(v_2)$. Solve for $v_2$.',
        hint2: '$(4)(3) + (2)(-6) = (4+2)(v_f)$. $12 - 12 = 6v_f$.',
        hint3: 'Initial $p = 0$. So $(1)(12) + (2)(v_B) = 0$.',
        explanation: '1) $60 = 20 + 5v_2$. $v_2 = 40/5 = 8$ m/s. 2) $12 - 12 = 6v_f$. $v_f = 0$ m/s. 3) $0 = 12 + 2v_B$. $v_B = -6$ m/s.'
      }
    },
    {
      id: 'cm1-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Conservation of Momentum Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Momentum is conserved when:',
            options: ['no forces act', 'no net external force acts', 'no friction exists', 'objects have equal mass'],
            correctIndex: 1,
            explanation: 'Momentum is conserved when the net external force on the system is zero. Internal forces cancel by Newton\'s Third Law.'
          },
          {
            label: 'In collisions, momentum is:',
            options: ['created', 'destroyed', 'transferred between objects', 'converted to energy'],
            correctIndex: 2,
            explanation: 'In collisions, momentum is transferred from one object to another. It is never created or destroyed — only redistributed.'
          },
          {
            label: 'Conservation of momentum follows directly from:',
            options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
            correctIndex: 2,
            explanation: 'Conservation of momentum follows directly from Newton\'s Third Law: equal and opposite forces for equal times give equal and opposite impulses, so total momentum is unchanged.'
          }
        ]
      }
    },
    {
      id: 'cm1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Isolated Systems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A canoe ($m = 50$ kg) and a person ($m = 70$ kg) are at rest on still water. The person walks forward at 1.0 m/s relative to the ground. How fast does the canoe move?',
            options: [
              '0.71 m/s backward',
              '1.0 m/s backward',
              '1.4 m/s backward',
              '1.4 m/s forward'
            ],
            correctAnswer: 2,
            explanation: 'Initial $p = 0$. $(70)(1.0) + (50)(v_c) = 0$. $v_c = -70/50 = -1.4$ m/s. The canoe moves backward at 1.4 m/s.'
          },
          {
            question: 'Momentum conservation is a consequence of which fundamental principle?',
            options: [
              'Conservation of energy',
              'Newton\'s Third Law (action-reaction)',
              'The work-energy theorem',
              'The equivalence of mass and energy'
            ],
            correctAnswer: 1,
            explanation: 'Newton\'s Third Law guarantees that internal forces produce equal and opposite impulses, so the total momentum of an isolated system cannot change.'
          }
        ]
      }
    }
  ]
}
