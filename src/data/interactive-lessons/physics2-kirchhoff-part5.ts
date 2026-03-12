export const physics2KirchhoffPart5Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl5-intro',
      type: 'text' as const,
      content: `
# 🧮 Complex Circuits & Matrix Methods

**Part 5 of 7 — Three-Loop Problems and Systematic Solutions**

When circuits get complex, organization becomes essential. In this part we tackle three-loop circuits and preview how linear algebra (matrices) can streamline the solution process.
      `
    },
    {
      id: 'kl5-labeling',
      type: 'text' as const,
      content: `
## Systematic Labeling

For complex circuits, adopt a consistent labeling scheme:

### Node Labeling
- Label every junction with a letter: **A, B, C, D, ...**
- Mark every branch with a current arrow: $I_1, I_2, I_3, ...$

### Branch Counting
A circuit with $N$ nodes and $L$ independent loops has:
$$B = L + N - 1 \\text{ branches}$$

### Example: Three-Loop Circuit
- 4 nodes (A, B, C, D)
- 6 branches ($I_1$ through $I_6$)
- Independent loops: $6 - 4 + 1 = 3$
- KCL equations: $4 - 1 = 3$
- Total equations: $3 + 3 = 6$ ✓

> 📝 **Always verify**: number of equations = number of unknown currents before solving!
      `
    },
    {
      id: 'kl5-three-loop-setup',
      type: 'text' as const,
      content: `
## Three-Loop Example

Consider a circuit with three loops sharing branches:

**Given:**
- $\\varepsilon_1 = 12$ V, $\\varepsilon_2 = 6$ V, $\\varepsilon_3 = 9$ V
- $R_1 = 2\\;\\Omega$, $R_2 = 4\\;\\Omega$, $R_3 = 3\\;\\Omega$
- $R_4 = 6\\;\\Omega$, $R_5 = 1\\;\\Omega$

Using the **mesh current method** (each loop gets its own current variable):

- Loop 1 current: $i_1$ (clockwise)
- Loop 2 current: $i_2$ (clockwise)
- Loop 3 current: $i_3$ (clockwise)

### Mesh Equations

**Loop 1:** $\\varepsilon_1 - i_1 R_1 - (i_1 - i_2)R_2 = 0$
$$12 - 2i_1 - 4(i_1 - i_2) = 0$$
$$12 - 6i_1 + 4i_2 = 0$$
$$6i_1 - 4i_2 = 12 \\quad \\text{...(1)}$$

**Loop 2:** $-(i_2 - i_1)R_2 - i_2 R_3 - (i_2 - i_3)R_4 + \\varepsilon_2 = 0$
$$4i_1 - 13i_2 + 6i_3 = -6 \\quad \\text{...(2)}$$

**Loop 3:** $-(i_3 - i_2)R_4 - i_3 R_5 - \\varepsilon_3 = 0$
$$6i_2 - 7i_3 = 9 \\quad \\text{...(3)}$$
      `
    },
    {
      id: 'kl5-matrix-method',
      type: 'text' as const,
      content: `
## Matrix Form

The three mesh equations can be written as a matrix equation $\\mathbf{A}\\vec{i} = \\vec{b}$:

$$\\begin{pmatrix} 6 & -4 & 0 \\\\ 4 & -13 & 6 \\\\ 0 & 6 & -7 \\end{pmatrix} \\begin{pmatrix} i_1 \\\\ i_2 \\\\ i_3 \\end{pmatrix} = \\begin{pmatrix} 12 \\\\ -6 \\\\ 9 \\end{pmatrix}$$

### Cramer's Rule Preview

For a $3 \\times 3$ system, each variable can be found using determinants:

$$i_k = \\frac{\\det(\\mathbf{A}_k)}{\\det(\\mathbf{A})}$$

where $\\mathbf{A}_k$ is the matrix $\\mathbf{A}$ with column $k$ replaced by $\\vec{b}$.

### Determinant of the Coefficient Matrix

$$\\det(\\mathbf{A}) = 6[(-13)(-7) - (6)(6)] - (-4)[(4)(-7) - (6)(0)] + 0$$
$$= 6[91 - 36] + 4[-28]$$
$$= 6(55) - 112$$
$$= 330 - 112 = 218$$

> 💡 On the AP exam, you won't need to compute $3 \\times 3$ determinants — but you WILL need to set up the equations correctly and solve $2 \\times 2$ systems.
      `
    },
    {
      id: 'kl5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'In the mesh current method, the current through a shared resistor between loops 1 and 2 is:',
            options: [
              '$i_1 + i_2$',
              '$i_1 - i_2$',
              '$i_1 \\times i_2$',
              '$i_1 / i_2$'
            ],
            correctAnswer: 1,
            explanation: 'The actual current through a shared branch is the difference of the two mesh currents: $i_1 - i_2$ (or $i_2 - i_1$ depending on which direction is positive).'
          },
          {
            question: 'A circuit has 5 nodes and 8 branches. How many independent loops are there?',
            options: [
              '3',
              '4',
              '5',
              '8'
            ],
            correctAnswer: 1,
            explanation: 'Independent loops $= B - N + 1 = 8 - 5 + 1 = 4$.'
          }
        ]
      }
    },
    {
      id: 'kl5-drill',
      type: 'input-boxes' as const,
      content: `
**Mesh Current Drill**

Two mesh currents $i_1$ and $i_2$ (both clockwise) satisfy:

$$5i_1 - 3i_2 = 9 \\quad \\text{...(1)}$$
$$-3i_1 + 7i_2 = 5 \\quad \\text{...(2)}$$

1) Multiply equation (1) by 7 and equation (2) by 3, then add. What is $i_1$ (in A)?
2) Substitute back to find $i_2$ (in A):
3) The current through the shared resistor is $i_1 - i_2$. Find this value (in A):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '2', '1'],
        hint1: '$7 \\times (1)$: $35i_1 - 21i_2 = 63$. $3 \\times (2)$: $-9i_1 + 21i_2 = 15$. Add: $26i_1 = 78$.',
        hint2: '$i_1 = 78/26 = 3$ A. Substitute into (1): $5(3) - 3i_2 = 9 \\Rightarrow 3i_2 = 6 \\Rightarrow i_2 = 2$ A.',
        hint3: '$i_1 - i_2 = 3 - 2 = 1$ A.',
        explanation: 'Eliminating $i_2$: $26i_1 = 78$, so $i_1 = 3$ A. Then $i_2 = (15-9)/3 = 2$ A. Shared branch current = $3 - 2 = 1$ A.'
      }
    },
    {
      id: 'kl5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'The mesh current method assigns:',
            options: [
              'One current to each resistor',
              'One current to each node',
              'One current to each independent loop',
              'One current to each battery'
            ],
            correctAnswer: 2,
            explanation: 'The mesh current method assigns one circulating current variable to each independent loop (mesh). Branch currents are then combinations of mesh currents.'
          },
          {
            question: 'For a $2 \\times 2$ system $ax + by = e$ and $cx + dy = f$, Cramer\'s rule gives $x = $:',
            options: [
              '$\\frac{ed - bf}{ad - bc}$',
              '$\\frac{af - ce}{ad - bc}$',
              '$\\frac{ad - bc}{ed - bf}$',
              '$\\frac{e + f}{a + c}$'
            ],
            correctAnswer: 0,
            explanation: '$x = \\frac{\\det\\begin{pmatrix} e & b \\\\ f & d \\end{pmatrix}}{\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}} = \\frac{ed - bf}{ad - bc}$.'
          }
        ]
      }
    }
  ]
}
