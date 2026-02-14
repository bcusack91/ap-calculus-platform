export const physics2KirchhoffPart1Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl1-intro',
      type: 'text' as const,
      content: `
# ⚡ Kirchhoff's Junction Rule (KCL)

**Part 1 of 7 — Conservation of Charge at Nodes**

When wires meet at a junction (node), charge cannot pile up or vanish. Every coulomb that flows **in** must flow **out**. This simple conservation law — **Kirchhoff's Current Law (KCL)** — lets us analyze circuits that series/parallel rules alone cannot handle.
      `
    },
    {
      id: 'kl1-statement',
      type: 'text' as const,
      content: `
## The Junction Rule

At any junction (node) in a circuit:

$$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$$

Equivalently, if we assign signs (positive for currents entering, negative for currents leaving):

$$\\sum_{k} I_k = 0$$

### Why It Works

The junction rule is a direct consequence of **conservation of charge**. In steady-state (DC) circuits, charge does not accumulate at any point. If 5 A flows into a node, exactly 5 A must flow out — otherwise charge would build up at the junction, which doesn't happen in steady state.

### Key Vocabulary
- **Node / Junction**: A point where three or more wires meet
- **Branch**: A path between two nodes containing one or more circuit elements
- **KCL**: Kirchhoff's Current Law (the junction rule)
      `
    },
    {
      id: 'kl1-three-branch',
      type: 'text' as const,
      content: `
## Example: Three-Branch Junction

Consider a node where three wires meet:
- Branch 1 carries $I_1 = 3$ A **into** the node
- Branch 2 carries $I_2 = 5$ A **into** the node
- Branch 3 carries $I_3$ **out of** the node

Applying KCL:

$$I_1 + I_2 = I_3$$
$$3 + 5 = I_3$$
$$I_3 = 8 \\text{ A}$$

### Four-Branch Example

Now add a fourth branch:
- $I_1 = 6$ A in
- $I_2 = 2$ A out
- $I_3 = 1$ A out
- $I_4 = ?$

$$I_{\\text{in}} = I_{\\text{out}}$$
$$6 = 2 + 1 + I_4$$
$$I_4 = 3 \\text{ A (out)}$$

> 💡 **Tip**: If you guess a current direction wrong when solving a problem, you'll get a **negative** answer — that just means the current flows opposite to your assumed direction!
      `
    },
    {
      id: 'kl1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Junction Rule Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'Kirchhoff\'s Junction Rule is a consequence of conservation of:',
            options: [
              'Energy',
              'Momentum',
              'Charge',
              'Power'
            ],
            correctAnswer: 2,
            explanation: 'The junction rule states that the total current entering a node equals the total current leaving. This is a direct consequence of conservation of charge — charge cannot accumulate at a node in steady state.'
          },
          {
            question: 'Three currents meet at a junction: 4 A flows in, 7 A flows in, and $I_3$ flows out. What is $I_3$?',
            options: [
              '3 A',
              '7 A',
              '11 A',
              '4 A'
            ],
            correctAnswer: 2,
            explanation: '$\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$. So $4 + 7 = I_3 = 11$ A.'
          },
          {
            question: 'At a node, currents of 5 A, 3 A, and 2 A flow in, while 6 A and $I_x$ flow out. What is $I_x$?',
            options: [
              '2 A',
              '4 A',
              '6 A',
              '10 A'
            ],
            correctAnswer: 1,
            explanation: 'In: $5 + 3 + 2 = 10$ A. Out: $6 + I_x = 10$ A. So $I_x = 4$ A.'
          }
        ]
      }
    },
    {
      id: 'kl1-complex-nodes',
      type: 'text' as const,
      content: `
## Multiple Junctions in a Circuit

Real circuits have **many** junctions. KCL applies at **each one independently**.

### Example: Two-Node Circuit

Consider a circuit with two nodes (A and B) and three branches:

**Node A:**
$$I_1 = I_2 + I_3$$

**Node B:**
$$I_2 + I_3 = I_1$$

Notice that the equation at node B gives the **same information** as node A — this is always the case. For a circuit with $N$ nodes, KCL gives only $N - 1$ independent equations.

### Practical Rule

> 📝 **In a circuit with $N$ nodes, you get $N - 1$ independent KCL equations.**

This is important when setting up systems of equations for complex circuits — you'll need additional equations from the loop rule (Part 2) to solve for all unknowns.
      `
    },
    {
      id: 'kl1-drill',
      type: 'input-boxes' as const,
      content: `
**Junction Rule Drill**

A circuit node has five branches connected to it. The currents are:
- Branch 1: 8 A into the node
- Branch 2: 3 A out of the node
- Branch 3: $I_3$ into the node
- Branch 4: 6 A out of the node
- Branch 5: 4 A out of the node

1) Total current flowing out of the node (in A, not counting $I_3$):
2) Value of $I_3$ (in A):
3) A different node has currents 10 A in, 4 A in, $I_a$ out, and $I_b$ out. If $I_a = 3I_b$, find $I_b$ (in A):

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['13', '5', '3.5', '3.50'],
        hint1: 'Add up all the outgoing currents: $3 + 6 + 4$.',
        hint2: '$I_{\\text{in}} = I_{\\text{out}}$: $8 + I_3 = 3 + 6 + 4 = 13$. Solve for $I_3$.',
        hint3: '$10 + 4 = I_a + I_b = 3I_b + I_b = 4I_b$. So $I_b = 14/4 = 3.5$ A.',
        explanation: 'Out = $3 + 6 + 4 = 13$ A. KCL: $8 + I_3 = 13$, so $I_3 = 5$ A. For the second node: $14 = 4I_b$, giving $I_b = 3.5$ A.'
      }
    },
    {
      id: 'kl1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'You solve a circuit and find $I_2 = -3$ A. This means:',
            options: [
              'The circuit is impossible',
              'You made an error — current cannot be negative',
              'The current is 3 A in the direction opposite to your assumed direction',
              'The resistance is negative'
            ],
            correctAnswer: 2,
            explanation: 'A negative current simply means your assumed direction was wrong. The actual current is 3 A flowing opposite to the direction you drew. This is perfectly normal and expected in circuit analysis.'
          },
          {
            question: 'A circuit has 4 nodes. How many independent KCL equations can you write?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: 'For $N$ nodes, you get $N - 1$ independent equations. With 4 nodes: $4 - 1 = 3$ independent KCL equations.'
          }
        ]
      }
    }
  ]
}
