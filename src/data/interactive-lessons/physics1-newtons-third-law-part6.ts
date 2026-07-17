export const physics1NewtonsThirdLawPart6Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Newton\'s Third Law**

This workshop focuses on applying Newton\'s Third Law to solve connected-object and two-body problems systematically. We\'ll practice the complete workflow: FBD → equations → solve.
      `
    },
    {
      id: 'nt6-strategy',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy for Multi-Body Problems

### Step 1: System Analysis

- Identify all objects in the system
- Determine the system acceleration: $a = F_{\\text{net, external}}/(m_{\\text{total}})$

### Step 2: Individual Object Analysis

- Draw an FBD for each object
- Apply $\\sum F = ma$ to each object
- Use Third Law pairs: $F_{A \\text{ on } B} = F_{B \\text{ on } A}$
- Use constraint: connected objects have the same $|a|$

### Step 3: Solve and Verify

- Solve the system of equations
- Check: Does $T$ fall between the weights? Does the contact force make sense?

### Worked Example: Three Blocks

Blocks A (2 kg), B (3 kg), C (5 kg) on a frictionless surface. $F = 40$ N pushes A.

**System:** $a = 40/10 = 4$ $m/s^{2}$

**Contact force between B and C:** $F_{BC} = m_C \\times a = 5 \\times 4 = 20$ N

**Contact force between A and B:** $F_{AB} = (m_B + m_C) \\times a = 8 \\times 4 = 32$ N

> **Pattern:** Each contact force accelerates all the blocks "downstream" from that contact point.
      `
    },
    {
      id: 'nt6-worked-atwood',
      type: 'text' as const,
      content: `
## Worked Example: Modified Atwood Machine

A 3 kg block on a frictionless table is connected via a string over a pulley to a 2 kg block hanging off the edge. Find $a$ and $T$.

**Block on table ($m_1 = 3$ kg):**
$$T = m_1 a = 3a \\quad \\text{...(1)}$$

**Hanging block ($m_2 = 2$ kg, taking down as positive):**
$$m_2 g - T = m_2 a$$
$$2(9.8) - T = 2a$$
$$19.6 - T = 2a \\quad \\text{...(2)}$$

**Substitute (1) into (2):**
$$19.6 - 3a = 2a$$
$$19.6 = 5a$$
$$a = 3.92 \\text{ m/s}^2$$

**Tension:**
$$T = 3(3.92) = 11.76 \\text{ N}$$

**Verification:**
- $T = 11.76$ N $< m_2 g = 19.6$ N ✓ (hanging block accelerates down)
- $T > 0$ ✓ (string is taut)
      `
    },
    {
      id: 'nt6-workshop-mc',
      type: 'multiple-choice' as const,
      content: `
**Workshop Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Three blocks (2 kg, 3 kg, 5 kg) are pushed on a frictionless surface by a 50 N force on the 2 kg block. The contact force between the 3 kg and 5 kg blocks is:',
            options: [
              '10 N',
              '20 N',
              '25 N',
              '40 N'
            ],
            correctAnswer: 2,
            explanation: '$a = 50/10 = 5$ $m/s^{2}$. The contact force between the 3 kg and 5 kg blocks must accelerate only the 5 kg block: $F = 5 \\times 5 = 25$ N.'
          },
          {
            question: 'In a modified Atwood machine (1 kg on table, 4 kg hanging, frictionless), the acceleration is closest to ($g = 10$ $m/s^{2}$):',
            options: [
              '2 $m/s^{2}$',
              '4 $m/s^{2}$',
              '8 $m/s^{2}$',
              '10 $m/s^{2}$'
            ],
            correctAnswer: 2,
            explanation: '$a = m_2 g/(m_1 + m_2) = 4(10)/5 = 40/5 = 8$ $m/s^{2}$.'
          },
          {
            question: 'Two boxes are connected by a rope. A pulls B across a frictionless floor with force $F$. The tension in the rope connecting them is less than $F$ because:',
            options: [
              'Some force is lost to friction',
              'The rope stretches',
              'Part of $F$ accelerates the front block (A) itself',
              'Newton\'s Third Law reduces it'
            ],
            correctAnswer: 2,
            explanation: 'The applied force must accelerate BOTH blocks. The tension only needs to accelerate block B. Since block A also needs to be accelerated, the tension is less than $F$.'
          }
        ]
      }
    },
    {
      id: 'nt6-workshop-calc',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

An Atwood machine has $m_1 = 5$ kg and $m_2 = 15$ kg. Use $g = 10$ $m/s^{2}$.

1) What is the acceleration $(in m/s^{2})$?

2) What is the tension in the string (in N)?

3) How far does $m_2$ fall from rest in 2 seconds (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '75', '10'],
        hint1: '$a = (m_2 - m_1)g/(m_1 + m_2) = (15-5)(10)/(20)$.',
        hint2: '$T = m_1(g + a) = 5(10 + 5)$.',
        hint3: '$d = \\frac{1}{2}at^2 = \\frac{1}{2}(5)(4)$.',
        explanation: '1) $a = 10(10)/20 = 100/20 = 5$ $m/s^{2}$. 2) $T = 5(10 + 5) = 5 \\times 15 = 75$ N. Check: $75 > m_1 g = 50$ ✓, $75 < m_2 g = 150$ ✓. 3) $d = \\frac{1}{2}(5)(4) = 10$ m.'
      }
    },
    {
      id: 'nt6-dropdown-checks',
      type: 'dropdown-select' as const,
      content: `
**Quick Verification Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an Atwood machine, the tension should always be:',
            options: ['Equal to the heavier weight', 'Equal to the lighter weight', 'Between the two weights', 'Equal to the average weight'],
            correctIndex: 2,
            explanation: '$m_1 g < T < m_2 g$. The tension must exceed $m_1 g$ to pull $m_1$ up and be less than $m_2 g$ to let $m_2$ fall.'
          },
          {
            label: 'Adding more mass to the heavier side of an Atwood machine:',
            options: ['Decreases acceleration', 'Increases acceleration', 'Doesn\'t change acceleration', 'Stops the system'],
            correctIndex: 1,
            explanation: 'More mass on the heavy side increases $(m_2 - m_1)$ faster than $(m_1 + m_2)$, increasing the acceleration.'
          },
          {
            label: 'In a three-block push problem, the contact force closest to the applied force is the one between:',
            options: ['The first and second blocks', 'The second and third blocks', 'All contacts are equal', 'None — they\'re all less than F'],
            correctIndex: 0,
            explanation: 'The first contact must accelerate blocks 2 and 3 (more mass), so it has the larger contact force. The last contact only accelerates the final block.'
          }
        ]
      }
    },
    {
      id: 'nt6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Blocks A (6 kg) and B (4 kg) are connected by a rope on a frictionless surface. A horizontal force of 30 N pulls block A. What is the tension in the rope connecting them?',
            options: [
              '12 N',
              '18 N',
              '30 N',
              '24 N'
            ],
            correctAnswer: 0,
            explanation: '$a = 30/(6+4) = 3$ $m/s^{2}$. Tension accelerates B only: $T = m_B a = 4 \\times 3 = 12$ N.'
          },
          {
            question: 'An Atwood machine with $m_1 = 2$ kg and $m_2 = 8$ kg is released. After 1 second, the speed of each mass is ($g = 10$ $m/s^{2}$):',
            options: [
              '2 m/s',
              '4 m/s',
              '6 m/s',
              '8 m/s'
            ],
            correctAnswer: 2,
            explanation: '$a = (8-2)(10)/(8+2) = 60/10 = 6$ $m/s^{2}$. $v = at = 6 \\times 1 = 6$ m/s.'
          }
        ]
      }
    }
  ]
}
