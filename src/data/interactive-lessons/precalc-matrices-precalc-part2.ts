export const precalcMatricesPart2Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# ✖️ Matrix Multiplication

**Part 2 of 7**

### The Rule: Row × Column

To multiply $A \\cdot B$:
- $A$ must have same number of **columns** as $B$ has **rows**
- Result dimensions: (rows of $A$) × (columns of $B$)

$$A_{m \\times n} \\cdot B_{n \\times p} = C_{m \\times p}$$

### How to Compute Entry $c_{ij}$

**Dot product** of row $i$ of $A$ with column $j$ of $B$:

$$c_{ij} = \\sum_{k=1}^n a_{ik} \\cdot b_{kj}$$

### Example

$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 1(5)+2(7) & 1(6)+2(8) \\\\ 3(5)+4(7) & 3(6)+4(8) \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$$
      `
    },
    {
      id: 'p2-properties',
      type: 'text' as const,
      content: `
## ⚠️ Important Properties

### NOT Commutative!

$$AB \\neq BA \\text{ (in general)}$$

**Example**: $AB = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}$ but $BA = \\begin{bmatrix} 23 & 34 \\\\ 31 & 46 \\end{bmatrix}$

### Other Properties

- $(AB)C = A(BC)$ — associative ✓
- $A(B+C) = AB+AC$ — distributive ✓
- $AI = IA = A$ — identity ✓
- $kA \\cdot B = k(AB) = A \\cdot kB$ — scalar ✓

### Dimension Check

$A$ is $2 \\times 3$, $B$ is $3 \\times 4$:
- $AB$: ✅ ($2 \\times 4$ result)
- $BA$: ❌ ($4 \\neq 2$, can't multiply)

> 💡 **Memory trick**: inner dimensions must match, outer dimensions give result size.
      `
    },
    {
      id: 'p2-special',
      type: 'text' as const,
      content: `
## 🎯 Special Multiplications

### Matrix × Column Vector

$$\\begin{bmatrix} 2 & 1 \\\\ 3 & -1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 2x+y \\\\ 3x-y \\end{bmatrix}$$

This is how $A\\vec{x} = \\vec{b}$ works!

### Powers of Matrices

$$A^2 = A \\cdot A, \\quad A^3 = A \\cdot A \\cdot A$$

Only defined for **square** matrices.

### The Identity Matrix

$$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}, \\quad I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

$AI = IA = A$ for any compatible matrix $A$.

Like multiplying by 1 in regular arithmetic!
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Multiplication Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 3 & 7 \\\\ -2 & 5 \\end{bmatrix} = ?$',
            options: ['$\\begin{bmatrix} 3 & 7 \\\\ -2 & 5 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 0 \\\\ 0 & 5 \\end{bmatrix}$', '$\\begin{bmatrix} 4 & 7 \\\\ -2 & 6 \\end{bmatrix}$'],
            correctAnswer: 0,
            explanation: 'Identity times any matrix = that matrix.'
          },
          {
            question: 'Can a $(3 \\times 2)$ matrix multiply a $(3 \\times 2)$ matrix?',
            options: ['Yes, result is $3 \\times 2$', 'Yes, result is $2 \\times 3$', 'No', 'Yes, result is $3 \\times 3$'],
            correctAnswer: 2,
            explanation: 'Inner dimensions: $2 \\neq 3$. Cannot multiply.'
          },
          {
            question: '$\\begin{bmatrix} 2 & 1 \\end{bmatrix} \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = ?$',
            options: ['$10$', '$\\begin{bmatrix} 6 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 6 & 4 \\end{bmatrix}$', 'Cannot multiply'],
            correctAnswer: 0,
            explanation: '$(1 \\times 2)(2 \\times 1) = (1 \\times 1)$: $2(3)+1(4) = 10$.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Compute** 🧮

$\\begin{bmatrix} 2 & 3 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 4 \\\\ 2 & -1 \\end{bmatrix}$

**1)** Entry $(1,1)$ = ?

**2)** Entry $(1,2)$ = ?

**3)** Entry $(2,1)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '5', '1'],
        hint1: '$2(1)+3(2) = 8$.',
        hint2: '$2(4)+3(-1) = 5$.',
        hint3: '$1(1)+0(2) = 1$.',
        explanation: 'Row 1 · Col 1: $8$. Row 1 · Col 2: $5$. Row 2 · Col 1: $1$.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Multiplication Rules** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matrix multiplication is:',
            options: ['Commutative', 'Not commutative', 'Always undefined', 'Same as addition'],
            correctAnswer: 1
          },
          {
            label: '$(2 \\times 3)(3 \\times 5)$ gives dimensions:',
            options: ['$2 \\times 5$', '$3 \\times 3$', '$5 \\times 2$', 'Undefined'],
            correctAnswer: 0
          },
          {
            label: '$A \\cdot I = ?$',
            options: ['$I$', '$A$', '$O$', '$A^2$'],
            correctAnswer: 1
          },
          {
            label: 'To compute $c_{23}$, use:',
            options: ['Row 2 of A, Column 3 of B', 'Row 3 of A, Column 2 of B', 'Row 2 of B, Column 3 of A', 'Diagonal entries'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Not commutative', '$2 \\times 5$', '$A$', 'Row 2 of A, Column 3 of B'],
        hint1: '$AB \\neq BA$ in general.',
        hint2: 'Outer dims: $2, 5$.',
        hint3: 'Identity is like multiplying by 1.',
        explanation: 'Not commutative. $2×5$. $AI=A$. $c_{ij}$: row $i$ of $A$ · col $j$ of $B$.'
      }
    },
    {
      id: 'p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}^2$: entry $(2,2)$?',
            options: ['$22$', '$16$', '$50$', '$20$'],
            correctAnswer: 0,
            explanation: '$A^2 = AA$. Row 2 · Col 2: $3(2)+4(4) = 6+16 = 22$.'
          },
          {
            question: 'If $A$ is $4 \\times 2$ and $B$ is $2 \\times 7$, what is $AB$?',
            options: ['$4 \\times 7$', '$2 \\times 2$', '$7 \\times 4$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$(4 \\times 2)(2 \\times 7) = 4 \\times 7$. Inner dims match: $2 = 2$.'
          }
        ]
      }
    }
  ]
};
