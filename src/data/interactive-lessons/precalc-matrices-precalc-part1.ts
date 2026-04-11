export const precalcMatricesPart1Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 📐 Introduction to Matrices

**Part 1 of 7**

### What Is a Matrix?

A **matrix** is a rectangular array of numbers arranged in rows and columns.

$$A = \\begin{bmatrix} 2 & 3 \\\\ 1 & -4 \\end{bmatrix}$$

This is a **2×2 matrix** (2 rows, 2 columns).

### Notation

- $a_{ij}$ = element in row $i$, column $j$
- $A_{2×3}$ = matrix with 2 rows, 3 columns
- Two matrices are **equal** if same dimensions AND all corresponding entries match

### Special Matrices

| Type | Example |
|:-----|:--------|
| Row matrix | $\\begin{bmatrix} 1 & 2 & 3 \\end{bmatrix}$ |
| Column matrix | $\\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$ |
| Square matrix | $n \\times n$ |
| Zero matrix | All entries 0 |
| Identity | 1s on diagonal, 0s elsewhere |
      `
    },
    {
      id: 'p1-operations',
      type: 'text' as const,
      content: `
## ➕ Matrix Addition & Scalar Multiplication

### Addition (same dimensions required!)

$$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$$

Add corresponding entries.

### Scalar Multiplication

$$3 \\begin{bmatrix} 2 & -1 \\\\ 0 & 4 \\end{bmatrix} = \\begin{bmatrix} 6 & -3 \\\\ 0 & 12 \\end{bmatrix}$$

Multiply every entry by the scalar.

### Properties

- $A + B = B + A$ (commutative)
- $(A + B) + C = A + (B + C)$ (associative)
- $k(A + B) = kA + kB$ (distributive)
- $A + O = A$ (additive identity)

> 💡 You CANNOT add matrices of different dimensions.
      `
    },
    {
      id: 'p1-augmented',
      type: 'text' as const,
      content: `
## 📊 Matrices & Systems

### Augmented Matrix

Write a system as a matrix:

$$\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases} \\implies \\left[\\begin{array}{cc|c} 2 & 3 & 7 \\\\ 1 & -1 & 1 \\end{array}\\right]$$

The vertical line separates coefficients from constants.

### Coefficient Matrix

$$A = \\begin{bmatrix} 2 & 3 \\\\ 1 & -1 \\end{bmatrix}, \\quad \\vec{x} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}, \\quad \\vec{b} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$$

$$A\\vec{x} = \\vec{b}$$

This compact notation represents the entire system!
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Matrix Basics Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Dimensions of $\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{bmatrix}$?',
            options: ['$2 \\times 3$', '$3 \\times 2$', '$6 \\times 1$', '$2 \\times 2$'],
            correctAnswer: 0,
            explanation: '2 rows, 3 columns → $2 \\times 3$.'
          },
          {
            question: '$\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & -1 \\\\ 2 & 3 \\end{bmatrix}$: entry in row 2, col 1?',
            options: ['$5$', '$1$', '$3$', '$6$'],
            correctAnswer: 0,
            explanation: 'Row 2, col 1: $3 + 2 = 5$.'
          },
          {
            question: '$2 \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = ?$',
            options: ['$\\begin{bmatrix} 6 \\\\ -2 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} 6 \\\\ -1 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ -2 \\end{bmatrix}$'],
            correctAnswer: 0,
            explanation: '$2(3) = 6$, $2(-1) = -2$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Matrix Arithmetic** 🧮

$A = \\begin{bmatrix} 4 & -2 \\\\ 1 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 5 \\\\ -3 & 2 \\end{bmatrix}$

$A + B = \\begin{bmatrix} ? & ? \\\\ ? & ? \\end{bmatrix}$

**1)** Top-left entry = ?

**2)** Top-right entry = ?

**3)** $3A$: top-left entry = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '12'],
        hint1: '$4 + 1 = 5$.',
        hint2: '$-2 + 5 = 3$.',
        hint3: '$3 \\times 4 = 12$.',
        explanation: '1) $5$. 2) $3$. 3) $12$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Matrix Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 3×1 matrix is called a:',
            options: ['Row matrix', 'Column matrix', 'Square matrix', 'Identity matrix'],
            correctAnswer: 1
          },
          {
            label: 'Can you add a 2×3 and 3×2 matrix?',
            options: ['Yes', 'No', 'Only if entries match', 'Sometimes'],
            correctAnswer: 1
          },
          {
            label: 'The identity matrix has:',
            options: ['All 1s', '1s on diagonal, 0s elsewhere', 'All 0s', '0s on diagonal'],
            correctAnswer: 1
          },
          {
            label: 'An augmented matrix represents:',
            options: ['A single equation', 'A system of equations', 'A determinant', 'An inverse'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Column matrix', 'No', '1s on diagonal, 0s elsewhere', 'A system of equations'],
        hint1: '3 rows, 1 column.',
        hint2: 'Must be same dimensions.',
        hint3: '$I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.',
        explanation: '3×1: column. Different dims: cannot add. Identity: diagonal 1s. Augmented: system.'
      }
    },
    {
      id: 'p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$A - B$ where $A = \\begin{bmatrix} 5 & 3 \\end{bmatrix}$, $B = \\begin{bmatrix} 2 & 7 \\end{bmatrix}$:',
            options: ['$\\begin{bmatrix} 3 & -4 \\end{bmatrix}$', '$\\begin{bmatrix} 7 & 10 \\end{bmatrix}$', '$\\begin{bmatrix} -3 & 4 \\end{bmatrix}$', 'Cannot subtract'],
            correctAnswer: 0,
            explanation: '$5-2=3$, $3-7=-4$. $\\begin{bmatrix} 3 & -4 \\end{bmatrix}$.'
          },
          {
            question: 'The augmented matrix for $x+2y=5, 3x-y=1$ is:',
            options: ['$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & -1 & 1 \\end{array}\\right]$', '$\\left[\\begin{array}{cc|c} 1 & 3 & 5 \\\\ 2 & -1 & 1 \\end{array}\\right]$', '$\\left[\\begin{array}{cc|c} 2 & 1 & 5 \\\\ -1 & 3 & 1 \\end{array}\\right]$', '$\\left[\\begin{array}{cc|c} 1 & 2 & 1 \\\\ 3 & -1 & 5 \\end{array}\\right]$'],
            correctAnswer: 0,
            explanation: 'Coefficients in order: $[1, 2 | 5]$ and $[3, -1 | 1]$.'
          }
        ]
      }
    }
  ]
};
