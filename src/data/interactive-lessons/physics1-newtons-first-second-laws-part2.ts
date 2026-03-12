export const physics1NewtonsFirstSecondLawsPart2Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf2-intro',
      type: 'text' as const,
      content: `
# 🚀 Newton\'s Second Law

**Part 2 of 7 — Newton\'s First and Second Laws**

Newton\'s First Law tells us *what happens* when there\'s no net force. Newton\'s Second Law tells us *what happens when there is* a net force — it\'s the quantitative heart of mechanics.

$$\\vec{F}_{\\text{net}} = m\\vec{a}$$

This single equation lets us predict the motion of everything from baseballs to planets.
      `
    },
    {
      id: 'nf2-second-law',
      type: 'text' as const,
      content: `
## Newton\'s Second Law

> **The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.**

$$\\vec{F}_{\\text{net}} = m\\vec{a}$$

Or equivalently:

$$\\vec{a} = \\frac{\\vec{F}_{\\text{net}}}{m}$$

### What This Tells Us

| Relationship | Meaning |
|-------------|---------|
| $a \\propto F_{\\text{net}}$ | Double the net force → double the acceleration |
| $a \\propto 1/m$ | Double the mass → half the acceleration |
| Direction of $\\vec{a}$ = direction of $\\vec{F}_{\\text{net}}$ | Acceleration is always in the direction of the net force |

### Units

$$1 \\text{ N} = 1 \\text{ kg} \\cdot \\text{m/s}^2$$

A newton is the force needed to accelerate a 1 kg mass at 1 m/s².

### Important Clarifications

- $F_{\\text{net}}$ is the **vector sum** of ALL forces, not just one force
- If $F_{\\text{net}} = 0$, then $a = 0$ (recovers Newton\'s First Law!)
- The law applies **instantaneously** — the acceleration at any moment equals the net force at that moment divided by mass
      `
    },
    {
      id: 'nf2-net-force',
      type: 'text' as const,
      content: `
## Finding the Net Force

The net force is the **vector sum** of all individual forces acting on an object:

$$\\vec{F}_{\\text{net}} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\cdots = \\sum \\vec{F}$$

### One Dimension

In 1D, assign positive/negative directions and add algebraically:

$$F_{\\text{net}} = F_1 + F_2 + \\cdots$$

### Example: Tug of War

Two people pull a box along the x-axis:
- Person A pulls right: $F_A = +40$ N
- Person B pulls left: $F_B = -25$ N

$$F_{\\text{net}} = 40 + (-25) = +15 \\text{ N (to the right)}$$

If the box has mass $m = 5$ kg:

$$a = \\frac{F_{\\text{net}}}{m} = \\frac{15}{5} = 3 \\text{ m/s}^2 \\text{ (to the right)}$$

### Two Dimensions

In 2D, break forces into components and sum each direction:

$$F_{\\text{net},x} = \\sum F_x, \\quad F_{\\text{net},y} = \\sum F_y$$

$$a_x = \\frac{F_{\\text{net},x}}{m}, \\quad a_y = \\frac{F_{\\text{net},y}}{m}$$
      `
    },
    {
      id: 'nf2-proportional-reasoning',
      type: 'text' as const,
      content: `
## Proportional Reasoning with $F = ma$

Many AP problems test your ability to reason about **how changes** in force or mass affect acceleration — without plugging in numbers.

### Doubling / Halving Problems

| Change | Effect on $a$ |
|--------|--------------|
| Double $F$, same $m$ | $a$ doubles |
| Same $F$, double $m$ | $a$ halves |
| Double $F$, double $m$ | $a$ stays the same |
| Triple $F$, half $m$ | $a$ increases by factor of 6 |

### Example

A force $F$ gives a mass $m$ an acceleration of $4$ m/s².

What acceleration does a force $3F$ give to a mass $2m$?

$$a' = \\frac{3F}{2m} = \\frac{3}{2} \\cdot \\frac{F}{m} = \\frac{3}{2} \\cdot 4 = 6 \\text{ m/s}^2$$
      `
    },
    {
      id: 'nf2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Newton\'s Second Law Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 kg object experiences a net force of 30 N. What is its acceleration?',
            options: [
              '0.33 m/s²',
              '3 m/s²',
              '30 m/s²',
              '300 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a = F_{\\text{net}}/m = 30/10 = 3$ m/s². This is a direct application of Newton\'s Second Law.'
          },
          {
            question: 'If the same net force is applied to two objects and object A has twice the mass of object B, then:',
            options: [
              'A has twice the acceleration of B',
              'A has the same acceleration as B',
              'A has half the acceleration of B',
              'A has four times the acceleration of B'
            ],
            correctAnswer: 2,
            explanation: '$a = F/m$. If $m_A = 2m_B$ and the forces are equal, then $a_A = F/(2m_B) = a_B/2$. Object A has half the acceleration.'
          },
          {
            question: 'An object accelerates at 5 m/s² when a 20 N net force is applied. What net force is needed to accelerate it at 8 m/s²?',
            options: [
              '12.5 N',
              '20 N',
              '32 N',
              '40 N'
            ],
            correctAnswer: 2,
            explanation: 'First find mass: $m = F/a = 20/5 = 4$ kg. Then: $F = ma = 4 \\times 8 = 32$ N.'
          }
        ]
      }
    },
    {
      id: 'nf2-calculations',
      type: 'input-boxes' as const,
      content: `
**Newton\'s Second Law Calculations** 🧮

1) What net force (in N) is needed to accelerate a 1200 kg car at 2.5 m/s²?

2) A 0.50 kg ball experiences a net force of 4.0 N. What is its acceleration (in m/s²)?

3) An object accelerates at 6 m/s² under a net force of 18 N. What is its mass (in kg)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '8', '3'],
        hint1: '$F = ma = 1200 \\times 2.5$',
        hint2: '$a = F/m = 4.0/0.50$',
        hint3: '$m = F/a = 18/6$',
        explanation: '1) $F = ma = 1200 \\times 2.5 = 3000$ N. 2) $a = F/m = 4.0/0.50 = 8.0$ m/s². 3) $m = F/a = 18/6 = 3$ kg.'
      }
    },
    {
      id: 'nf2-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Proportional Reasoning Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the net force on an object is doubled while mass stays the same, acceleration:',
            options: ['Halves', 'Stays the same', 'Doubles', 'Quadruples'],
            correctIndex: 2,
            explanation: '$a = F/m$. Doubling $F$ with constant $m$ doubles $a$.'
          },
          {
            label: 'If both force and mass are tripled, acceleration:',
            options: ['Triples', 'Stays the same', 'Is divided by 3', 'Is multiplied by 9'],
            correctIndex: 1,
            explanation: '$a = F/m$. If both $F$ and $m$ triple: $a\' = 3F/(3m) = F/m = a$. No change.'
          },
          {
            label: 'The direction of acceleration is always:',
            options: ['In the direction of motion', 'Opposite to motion', 'In the direction of the net force', 'Perpendicular to velocity'],
            correctIndex: 2,
            explanation: 'Newton\'s Second Law: $\\vec{a} = \\vec{F}_{\\text{net}}/m$. Acceleration always points in the same direction as the net force.'
          },
          {
            label: 'The SI unit of force (newton) equals:',
            options: ['kg·m/s', 'kg·m/s²', 'kg·m²/s²', 'kg/m·s²'],
            correctIndex: 1,
            explanation: '$1$ N $= 1$ kg·m/s². This comes directly from $F = ma$: (kg)(m/s²) = kg·m/s².'
          }
        ]
      }
    },
    {
      id: 'nf2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Newton\'s Second Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A force $F$ gives a mass $m$ an acceleration of $a$. What acceleration does force $2F$ give to mass $4m$?',
            options: [
              '$2a$',
              '$a$',
              '$a/2$',
              '$a/4$'
            ],
            correctAnswer: 2,
            explanation: '$a\' = 2F/(4m) = (1/2)(F/m) = a/2$. The force doubled but the mass quadrupled, so acceleration is halved.'
          },
          {
            question: 'Three forces act on a 2 kg object: 10 N right, 4 N left, and 2 N left. What is the magnitude and direction of the acceleration?',
            options: [
              '2 m/s² to the right',
              '3 m/s² to the right',
              '8 m/s² to the right',
              '2 m/s² to the left'
            ],
            correctAnswer: 0,
            explanation: '$F_{\\text{net}} = 10 - 4 - 2 = 4$ N to the right. $a = F_{\\text{net}}/m = 4/2 = 2$ m/s² to the right.'
          }
        ]
      }
    }
  ]
}
