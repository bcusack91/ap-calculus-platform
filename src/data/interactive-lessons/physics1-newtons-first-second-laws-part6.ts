export const physics1NewtonsFirstSecondLawsPart6Data = {
  topicSlug: 'newtons-first-second-laws',
  sections: [
    {
      id: 'nf6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Newton\'s First and Second Laws**

This workshop pulls together everything from Parts 1–5. We\'ll work through increasingly challenging problems using the systematic FBD → Newton\'s Second Law → Solve approach.
      `
    },
    {
      id: 'nf6-strategy-review',
      type: 'text' as const,
      content: `
## Problem-Solving Framework Review

### The 5-Step Process

1. **Read & Sketch** — Draw the physical situation
2. **FBD** — Isolate the object; draw ALL forces
3. **Axes** — Choose a coordinate system (align with acceleration)
4. **Newton\'s Second Law** — Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$
5. **Solve** — Algebra to find unknowns

### Common Pitfalls

| Mistake | Fix |
|---------|-----|
| Forgetting a force | Systematically check: gravity? normal? tension? friction? applied? |
| Wrong direction for forces | Weight always down; normal perpendicular to surface |
| Including forces the object exerts | FBD = forces ON the object only |
| Not decomposing angled forces | Always break forces into x and y components |
| Sign errors | Carefully define positive direction and be consistent |
      `
    },
    {
      id: 'nf6-problem1',
      type: 'text' as const,
      content: `
## Worked Example 1: Two Horizontal Forces

A 12 kg box on a frictionless surface has two forces applied:
- $F_1 = 50$ N to the right
- $F_2 = 20$ N to the left

**Step 1: FBD** — Weight down, normal up, $F_1$ right, $F_2$ left

**Step 2: x-direction**
$$\\sum F_x = F_1 - F_2 = ma_x$$
$$50 - 20 = 12a_x$$
$$a_x = 30/12 = 2.5 \\text{ m/s}^2 \\text{ (to the right)}$$

**Step 3: y-direction**
$$\\sum F_y = N - mg = 0 \\Rightarrow N = 12(9.8) = 117.6 \\text{ N}$$

## Worked Example 2: Vertical Tension

Two blocks hang vertically from strings. Block A (3 kg) hangs from the ceiling. Block B (2 kg) hangs from block A.

**FBD of Block B:**
$$T_2 - m_Bg = 0 \\Rightarrow T_2 = 2(9.8) = 19.6 \\text{ N}$$

**FBD of Block A:**
$$T_1 - T_2 - m_Ag = 0$$
$$T_1 = T_2 + m_Ag = 19.6 + 3(9.8) = 19.6 + 29.4 = 49 \\text{ N}$$

> **Key insight:** The upper string supports BOTH blocks, so $T_1 = (m_A + m_B)g = 5(9.8) = 49$ N.
      `
    },
    {
      id: 'nf6-multi-step-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Step Problem Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 4 kg block is pushed across a frictionless surface by a 28 N horizontal force. After 3 seconds starting from rest, how far has it traveled?',
            options: [
              '7 m',
              '10.5 m',
              '21 m',
              '31.5 m'
            ],
            correctAnswer: 3,
            explanation: 'First: $a = F/m = 28/4 = 7$ m/s². Then: $d = \\frac{1}{2}at^2 = \\frac{1}{2}(7)(3)^2 = \\frac{1}{2}(7)(9) = 31.5$ m.'
          },
          {
            question: 'Three blocks (1 kg, 2 kg, 3 kg) hang vertically in a chain from the ceiling. The tension in the top string is:',
            options: [
              '9.8 N',
              '29.4 N',
              '49 N',
              '58.8 N'
            ],
            correctAnswer: 3,
            explanation: 'The top string supports all three blocks: $T = (1 + 2 + 3) \\times 9.8 = 6 \\times 9.8 = 58.8$ N.'
          },
          {
            question: 'A rope pulls a 15 kg box at 53° above horizontal with 100 N on a frictionless surface. The normal force is approximately: ($\\sin 53° = 0.80$)',
            options: [
              '147 N',
              '67 N',
              '227 N',
              '80 N'
            ],
            correctAnswer: 1,
            explanation: '$N = mg - T\\sin 53° = 15(9.8) - 100(0.80) = 147 - 80 = 67$ N.'
          }
        ]
      }
    },
    {
      id: 'nf6-workshop-problems',
      type: 'input-boxes' as const,
      content: `
**Workshop Calculations** 🧮

1) A 8 kg block on a frictionless floor is pushed with 56 N horizontally. What is the acceleration (in m/s²)?

2) The same block from #1 starts from rest. What is its speed (in m/s) after 4 seconds?

3) A 5 kg mass hangs from a string. The string is pulled upward so the mass accelerates upward at 2 m/s². What is the tension in the string (in N)? Use $g = 9.8$ m/s².
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '28', '59'],
        hint1: '$a = F/m = 56/8$.',
        hint2: '$v = v_0 + at = 0 + 7(4)$.',
        hint3: '$T - mg = ma$, so $T = m(g + a) = 5(9.8 + 2)$.',
        explanation: '1) $a = 56/8 = 7$ m/s². 2) $v = 0 + 7 \\times 4 = 28$ m/s. 3) $T = 5(9.8 + 2) = 5 \\times 11.8 = 59$ N.'
      }
    },
    {
      id: 'nf6-dropdown-checks',
      type: 'dropdown-select' as const,
      content: `
**Quick Reasoning Checks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An object accelerates to the right. The net force points:',
            options: ['Left', 'Right', 'Up', 'Down'],
            correctIndex: 1,
            explanation: 'Acceleration is always in the direction of the net force. If $a$ is to the right, $F_{\\text{net}}$ is to the right.'
          },
          {
            label: 'A string supports a 10 kg mass hanging at rest. If you cut the string, the acceleration is:',
            options: ['0 m/s²', '4.9 m/s²', '9.8 m/s²', '19.6 m/s²'],
            correctIndex: 2,
            explanation: 'After cutting, only gravity acts: $a = g = 9.8$ m/s² downward (free fall).'
          },
          {
            label: 'Two forces of 5 N and 12 N act on an object. The net force could NOT be:',
            options: ['7 N', '13 N', '17 N', '18 N'],
            correctIndex: 3,
            explanation: 'The net force ranges from $|12 - 5| = 7$ N to $12 + 5 = 17$ N. 18 N is not possible.'
          },
          {
            label: 'A box on a frictionless surface is pushed by two equal forces in opposite directions. The box:',
            options: ['Accelerates right', 'Accelerates left', 'Remains in equilibrium', 'Oscillates'],
            correctIndex: 2,
            explanation: 'Equal and opposite forces give $F_{\\text{net}} = 0$. The box is in equilibrium (at rest or constant velocity).'
          }
        ]
      }
    },
    {
      id: 'nf6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 kg block on a frictionless table is connected by a string over a frictionless pulley to a hanging 1 kg block. What is the acceleration of the system? ($g = 9.8$ m/s²)',
            options: [
              '3.27 m/s²',
              '4.9 m/s²',
              '6.53 m/s²',
              '9.8 m/s²'
            ],
            correctAnswer: 0,
            explanation: 'The net force on the system is the weight of the hanging block: $F_{\\text{net}} = m_2 g = 1(9.8) = 9.8$ N. Total mass = $m_1 + m_2 = 3$ kg. $a = 9.8/3 = 3.27$ m/s².'
          },
          {
            question: 'A 500 N force is applied at 30° below the horizontal to push a 40 kg box across a frictionless floor. What is the horizontal acceleration? ($\\cos 30° \\approx 0.866$)',
            options: [
              '6.25 m/s²',
              '10.8 m/s²',
              '12.5 m/s²',
              '7.5 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$F_x = 500\\cos 30° = 500 \\times 0.866 = 433$ N. $a = F_x/m = 433/40 = 10.8$ m/s².'
          }
        ]
      }
    }
  ]
}
