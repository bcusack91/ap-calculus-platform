export const physics2KirchhoffPart4Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl4-intro',
      type: 'text' as const,
      content: `
# 🔗 Multi-Loop Circuits

**Part 4 of 7 — Simultaneous Equations for Two-Loop Problems**

When a circuit has multiple loops that share branches, a single KVL equation isn't enough. You need to combine KCL (junction rule) and KVL (loop rule) to build a system of simultaneous equations.
      `
    },
    {
      id: 'kl4-strategy',
      type: 'text' as const,
      content: `
## Systematic Approach for Multi-Loop Circuits

### Step-by-Step Method

1. **Identify nodes and branches**: Count junctions and separate paths

2. **Assign current variables**: One variable per branch, with an assumed direction (arrow)

3. **Write KCL equations**: At $N - 1$ nodes (where $N$ is the number of nodes)

4. **Write KVL equations**: For $B - N + 1$ independent loops

5. **Solve the system**: Substitution or elimination

### Counting Check

Total unknowns = number of branches $B$

Total equations = $(N-1) + (B - N + 1) = B$ ✓

You always have exactly enough equations!
      `
    },
    {
      id: 'kl4-two-loop-example',
      type: 'text' as const,
      content: `
## Classic Two-Loop Problem

Consider a circuit with:
- Left loop: $\\varepsilon_1 = 10$ V, $R_1 = 2\\;\\Omega$
- Right loop: $\\varepsilon_2 = 6$ V, $R_3 = 4\\;\\Omega$
- Shared middle branch: $R_2 = 3\\;\\Omega$

### Step 1: Label Currents
- $I_1$: through $\\varepsilon_1$ and $R_1$ (left branch, downward)
- $I_2$: through $R_2$ (middle branch, downward)
- $I_3$: through $\\varepsilon_2$ and $R_3$ (right branch, downward)

### Step 2: KCL at top node
$$I_1 = I_2 + I_3 \\quad \\text{...(1)}$$

### Step 3: KVL — Left Loop (clockwise)
$$+\\varepsilon_1 - I_1 R_1 - I_2 R_2 = 0$$
$$10 - 2I_1 - 3I_2 = 0 \\quad \\text{...(2)}$$

### Step 4: KVL — Right Loop (clockwise)
$$+I_2 R_2 - I_3 R_3 - \\varepsilon_2 = 0$$
$$3I_2 - 4I_3 - 6 = 0 \\quad \\text{...(3)}$$

### Step 5: Solve
Substitute (1) into (2): $10 - 2(I_2 + I_3) - 3I_2 = 0 \\Rightarrow 10 - 5I_2 - 2I_3 = 0$ ...(2')

From (3): $3I_2 - 4I_3 = 6$ ...(3)

From (2'): $5I_2 + 2I_3 = 10$ ...(2')

Multiply (2') by 2: $10I_2 + 4I_3 = 20$

Add to (3): $13I_2 = 26 \\Rightarrow I_2 = 2$ A

From (3): $3(2) - 4I_3 = 6 \\Rightarrow I_3 = 0$ A

From (1): $I_1 = 2 + 0 = 2$ A

### Interpretation
- $I_1 = 2$ A (left branch)
- $I_2 = 2$ A (middle branch)
- $I_3 = 0$ A (right branch — no current through the right battery!)
      `
    },
    {
      id: 'kl4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Loop Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A two-loop circuit has 2 nodes and 3 branches. How many independent equations do you need?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: 'You need $B = 3$ equations (one per unknown current). These come from $N-1 = 1$ KCL equation and $B - N + 1 = 2$ KVL equations.'
          },
          {
            question: 'At a junction, $I_1$ flows in while $I_2$ and $I_3$ flow out. Which equation is correct?',
            options: [
              '$I_1 + I_2 + I_3 = 0$',
              '$I_1 = I_2 + I_3$',
              '$I_1 + I_2 = I_3$',
              '$I_1 - I_2 + I_3 = 0$'
            ],
            correctAnswer: 1,
            explanation: 'KCL: current in = current out. $I_1 = I_2 + I_3$.'
          }
        ]
      }
    },
    {
      id: 'kl4-drill',
      type: 'input-boxes' as const,
      content: `
**Two-Loop Problem Drill**

A two-loop circuit has:
- Left loop: $\\varepsilon_1 = 12$ V battery, $R_1 = 2\\;\\Omega$ resistor
- Shared middle branch: $R_2 = 4\\;\\Omega$ resistor
- Right loop: $\\varepsilon_2 = 8$ V battery, $R_3 = 4\\;\\Omega$ resistor

Currents: $I_1$ (left branch, down), $I_2$ (middle, down), $I_3$ (right branch, down).

KCL at top node: $I_1 = I_2 + I_3$

KVL Left (clockwise): $12 - 2I_1 - 4I_2 = 0$

KVL Right (clockwise): $4I_2 - 4I_3 - 8 = 0$

Solve:

1) $I_2$ (in A):
2) $I_3$ (in A):
3) $I_1$ (in A):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0', '2'],
        hint1: 'Substitute $I_1 = I_2 + I_3$ into the left loop: $12 - 2(I_2 + I_3) - 4I_2 = 0 \\Rightarrow 12 - 6I_2 - 2I_3 = 0$.',
        hint2: 'From the right loop: $4I_2 - 4I_3 = 8 \\Rightarrow I_2 - I_3 = 2 \\Rightarrow I_3 = I_2 - 2$.',
        hint3: 'Substitute into the modified left loop: $12 - 6I_2 - 2(I_2 - 2) = 0 \\Rightarrow 16 - 8I_2 = 0 \\Rightarrow I_2 = 2$ A.',
        explanation: 'From right loop: $I_3 = I_2 - 2$. Substituting into left loop: $16 - 8I_2 = 0$, so $I_2 = 2$ A. Then $I_3 = 2 - 2 = 0$ A and $I_1 = 2 + 0 = 2$ A. Verify: Left loop $12 - 4 - 8 = 0$ ✓. Right loop $8 - 0 - 8 = 0$ ✓.'
      }
    },
    {
      id: 'kl4-clean-drill',
      type: 'input-boxes' as const,
      content: `
**Two-Loop Problem #2**

Two-loop circuit:
- Left loop: $\\varepsilon_1 = 14$ V, $R_1 = 4\\;\\Omega$
- Shared branch: $R_2 = 6\\;\\Omega$
- Right loop: $\\varepsilon_2 = 4$ V, $R_3 = 2\\;\\Omega$

KCL: $I_1 = I_2 + I_3$

Left loop (clockwise): $14 - 4I_1 - 6I_2 = 0$

Right loop (clockwise): $6I_2 - 2I_3 - 4 = 0$

1) Solve for $I_1$ (in A):
2) Solve for $I_2$ (in A):
3) Solve for $I_3$ (in A):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '1'],
        hint1: 'Substitute $I_1 = I_2 + I_3$ into the left loop: $14 - 4(I_2 + I_3) - 6I_2 = 0 \\Rightarrow 14 - 10I_2 - 4I_3 = 0$.',
        hint2: 'From the right loop: $6I_2 - 2I_3 = 4 \\Rightarrow I_3 = 3I_2 - 2$.',
        hint3: 'Substitute: $14 - 10I_2 - 4(3I_2 - 2) = 0 \\Rightarrow 14 - 10I_2 - 12I_2 + 8 = 0 \\Rightarrow 22 = 22I_2 \\Rightarrow I_2 = 1$ A.',
        explanation: 'From right loop: $I_3 = 3I_2 - 2$. Substituting into left loop: $22 - 22I_2 = 0$, so $I_2 = 1$ A. Then $I_3 = 3(1) - 2 = 1$ A and $I_1 = 1 + 1 = 2$ A. Verify: Left $14 - 8 - 6 = 0$ ✓. Right $6 - 2 - 4 = 0$ ✓.'
      }
    },
    {
      id: 'kl4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'When you solve a multi-loop problem and get $I_3 = -2$ A, this means:',
            options: [
              'There is an error in your equations',
              'The current in that branch is 2 A opposite to your assumed direction',
              'The resistor has negative resistance',
              'The battery is dead'
            ],
            correctAnswer: 1,
            explanation: 'A negative current value simply means the actual current direction is opposite to what you assumed. The magnitude is still 2 A.'
          },
          {
            question: 'Which combination of rules is sufficient to solve any DC circuit?',
            options: [
              'KCL only',
              'KVL only',
              'KCL + KVL together',
              'Ohm\'s Law only'
            ],
            correctAnswer: 2,
            explanation: 'KCL (junction rule) and KVL (loop rule) together provide enough equations to solve for all unknown currents in any DC circuit. Ohm\'s Law ($V = IR$) is used within the KVL equations.'
          }
        ]
      }
    }
  ]
}
