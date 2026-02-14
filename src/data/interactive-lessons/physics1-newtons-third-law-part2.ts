export const physics1NewtonsThirdLawPart2Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt2-intro',
      type: 'text' as const,
      content: `
# 🤝 Identifying Force Pairs

**Part 2 of 7 — Newton\'s Third Law**

Identifying action-reaction pairs correctly is one of the most tested skills on the AP Physics 1 exam. In this lesson, we\'ll practice recognizing force pairs across different types of interactions: contact forces and gravitational forces.
      `
    },
    {
      id: 'nt2-contact-pairs',
      type: 'text' as const,
      content: `
## Contact Force Pairs

Contact forces arise when two objects touch. The Third Law pair involves both objects.

### Normal Force Pair

When a block sits on a table:
- Block pushes **down** on table (contact force)
- Table pushes **up** on block (normal force)

$$\\vec{F}_{\\text{block on table}} = -\\vec{F}_{\\text{table on block}}$$

### Friction Force Pair

When you slide a box across the floor:
- Box pushes backward on floor (friction)
- Floor pushes forward on box (friction)

### Tension Force Pair

When a rope connects to a block:
- Rope pulls block (tension on block)
- Block pulls rope (tension on rope)

> **Note:** Every contact point between two objects creates a Third Law pair.
      `
    },
    {
      id: 'nt2-gravitational-pairs',
      type: 'text' as const,
      content: `
## Gravitational Force Pairs

Gravity is a **mutual** force between any two masses:

$$F = G\\frac{m_1 m_2}{r^2}$$

### Earth-Object Pair

- Earth pulls object down with force $mg$
- Object pulls Earth up with force $mg$

Earth barely accelerates because $a_{\\text{Earth}} = mg/M_{\\text{Earth}} \\approx 0$.

### Why We Don\'t Notice Earth\'s Acceleration

For a 1 kg ball:
- Ball: $a = 9.8$ m/s² (very noticeable!)
- Earth: $a = 9.8/(6 \\times 10^{24}) \\approx 1.6 \\times 10^{-24}$ m/s² (completely undetectable)

### Important Distinction

| Force | Its Third Law Pair |
|-------|-------------------|
| Weight of book (Earth pulls book) | Book pulls Earth |
| Normal force (table pushes book) | Book pushes table |

These are **two separate pairs** — the normal force is NOT the pair of the weight!
      `
    },
    {
      id: 'nt2-multiple-objects',
      type: 'text' as const,
      content: `
## Force Pairs with Multiple Objects

### Block A on Block B on Table

Consider block A (2 kg) stacked on block B (5 kg) on a table.

**Forces on Block A:**
- Weight: Earth pulls A down ($W_A = 19.6$ N)
- Normal: B pushes A up ($N_{BA}$)

**Third Law pairs involving A:**
1. Earth pulls A ↔ A pulls Earth
2. B pushes A up ↔ A pushes B down ($N_{AB} = N_{BA}$)

**Forces on Block B:**
- Weight: Earth pulls B down ($W_B = 49$ N)
- Normal from A: A pushes B down ($N_{AB} = 19.6$ N)
- Normal from table: Table pushes B up ($N_{\\text{table}})$

**Equilibrium of B:**
$$N_{\\text{table}} = W_B + N_{AB} = 49 + 19.6 = 68.6 \\text{ N}$$

> The table supports the weight of **both** blocks.
      `
    },
    {
      id: 'nt2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Force Pair Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A person stands on the floor. The Third Law reaction to the floor\'s normal force pushing up on the person is:',
            options: [
              'The person\'s weight (gravity pulling them down)',
              'The person pushing down on the floor',
              'The floor\'s weight',
              'Earth\'s gravitational pull on the floor'
            ],
            correctAnswer: 1,
            explanation: 'The normal force pair: floor pushes person up ↔ person pushes floor down. These involve the same two objects (person and floor) and the same type of force (contact/normal).'
          },
          {
            question: 'A block sits on a table. How many Third Law pairs involve the block?',
            options: [
              '1 (just the weight pair)',
              '2 (weight pair + normal pair)',
              '3 (weight pair + normal pair + friction pair)',
              '4'
            ],
            correctAnswer: 1,
            explanation: 'Two pairs: (1) Earth pulls block ↔ block pulls Earth, (2) table pushes block ↔ block pushes table. No friction pair since the block isn\'t sliding.'
          },
          {
            question: 'A tennis ball is in midair (ignoring air resistance). How many Third Law pairs involve the ball?',
            options: [
              '0 — there\'s no contact',
              '1 — only the gravitational pair',
              '2',
              '3'
            ],
            correctAnswer: 1,
            explanation: 'Only one pair: Earth pulls ball down ↔ ball pulls Earth up. There are no contact forces since the ball isn\'t touching anything.'
          }
        ]
      }
    },
    {
      id: 'nt2-pair-calculations',
      type: 'input-boxes' as const,
      content: `
**Force Pair Calculations** 🧮

Block A (3 kg) sits on top of Block B (7 kg), which sits on a table. Use $g = 9.8$ m/s².

1) What is the magnitude of the force that Block A exerts on Block B (in N)?

2) What is the normal force the table exerts on Block B (in N)?

3) What is the magnitude of the gravitational force that Block A exerts on Earth (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['29.4', '98', '29.4'],
        hint1: 'A pushes down on B with a force equal to A\'s weight: $F = m_A g$.',
        hint2: 'The table must support both blocks: $N = (m_A + m_B)g$.',
        hint3: 'By Newton\'s Third Law, A pulls Earth with the same force that Earth pulls A: $m_A g$.',
        explanation: '1) A pushes B down with $m_A g = 3 \\times 9.8 = 29.4$ N. 2) $N_{\\text{table}} = (m_A + m_B)g = 10 \\times 9.8 = 98$ N. 3) Earth pulls A with $29.4$ N, so A pulls Earth with $29.4$ N (Third Law).'
      }
    },
    {
      id: 'nt2-dropdown-classify',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Force Pair** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Weight (Earth pulling an object) and the object pulling Earth are:',
            options: ['Not a Third Law pair', 'A valid Third Law pair', 'Equal only sometimes', 'Only valid when object is at rest'],
            correctIndex: 1,
            explanation: 'These are a genuine Third Law pair: same type (gravitational), same two objects (Earth and the object), equal magnitude, opposite direction.'
          },
          {
            label: 'Weight of a book and the normal force from the table are:',
            options: ['A Third Law pair', 'Not a Third Law pair', 'A Third Law pair only at rest', 'Always equal'],
            correctIndex: 1,
            explanation: 'They involve different objects (Earth-book vs. table-book) and are different types of force (gravitational vs. contact). NOT a Third Law pair. They happen to be equal when the book is in equilibrium, but that\'s Newton\'s Second Law, not Third.'
          },
          {
            label: 'The reaction to a rope pulling a box forward is:',
            options: ['Friction on the box', 'The box pulling the rope backward', 'Gravity on the box', 'The normal force on the box'],
            correctIndex: 1,
            explanation: 'Rope pulls box forward ↔ box pulls rope backward. Same two objects, same force type, opposite directions.'
          }
        ]
      }
    },
    {
      id: 'nt2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Identifying Force Pairs** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Three books are stacked on a table. The net downward force on the table from the books is 30 N. By Newton\'s Third Law, the table pushes upward on the bottom book with:',
            options: [
              '10 N',
              '20 N',
              '30 N',
              '90 N'
            ],
            correctAnswer: 2,
            explanation: 'The table exerts a normal force on the bottom book equal to the total weight of all three books above it. The bottom book pushes 30 N down on the table; the table pushes 30 N up on the bottom book.'
          },
          {
            question: 'A magnet on a fridge door is held in place. The Third Law reaction to the magnetic force pulling the magnet toward the fridge is:',
            options: [
              'Gravity pulling the magnet down',
              'The normal force from the fridge',
              'The magnet pulling the fridge toward the magnet',
              'Friction holding the magnet up'
            ],
            correctAnswer: 2,
            explanation: 'The fridge attracts the magnet → the magnet attracts the fridge with equal force. Same type (magnetic), same two objects, opposite directions.'
          }
        ]
      }
    }
  ]
}
