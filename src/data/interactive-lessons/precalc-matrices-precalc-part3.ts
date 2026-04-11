export const precalcMatricesPart3Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Determinants

**Part 3 of 7**

### 2×2 Determinant

$$\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$$

### Example

$$\\det \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix} = 3(4) - 2(1) = 10$$

### What Does It Mean?

- $\\det \\neq 0$: matrix is **invertible**, system has unique solution
- $\\det = 0$: matrix is **singular**, system is dependent or inconsistent
- $|\\det|$ = area of parallelogram formed by row/column vectors

### Geometric Interpretation

Rows $\\begin{bmatrix} 3 & 2 \\end{bmatrix}$ and $\\begin{bmatrix} 1 & 4 \\end{bmatrix}$ form a parallelogram with area $= |10| = 10$.

If det = 0, the vectors are **parallel** (linearly dependent).
      `
    },
    {
      id: 'p3-3x3',
      type: 'text' as const,
      content: `
## 📊 3×3 Determinant

### Expansion Along Row 1 (Cofactor Expansion)

$$\\det \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)$$

### Example

$$\\det \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 0 \\end{bmatrix}$$

$= 1(5 \\cdot 0 - 6 \\cdot 8) - 2(4 \\cdot 0 - 6 \\cdot 7) + 3(4 \\cdot 8 - 5 \\cdot 7)$

$= 1(-48) - 2(-42) + 3(-3)$

$= -48 + 84 - 9 = 27$

### Sign Pattern for Cofactors

$$\\begin{bmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{bmatrix}$$

Checkerboard pattern starting with $+$ at $(1,1)$.
      `
    },
    {
      id: 'p3-cramers',
      type: 'text' as const,
      content: `
## 📐 Cramer's Rule

### For 2×2 Systems

$$\\begin{cases} ax+by=e \\\\ cx+dy=f \\end{cases}$$

$$x = \\frac{\\det \\begin{bmatrix} e & b \\\\ f & d \\end{bmatrix}}{\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}}, \\quad y = \\frac{\\det \\begin{bmatrix} a & e \\\\ c & f \\end{bmatrix}}{\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}}$$

### Example: $\\begin{cases} 3x+2y=8 \\\\ x-y=1 \\end{cases}$

$D = 3(-1)-2(1) = -5$

$D_x = 8(-1)-2(1) = -10$, so $x = -10/-5 = 2$

$D_y = 3(1)-8(1) = -5$, so $y = -5/-5 = 1$

**Solution**: $(2, 1)$

> 💡 Replace the column of the variable you're solving for with the constants column.
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Determinant Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\det \\begin{bmatrix} 5 & 3 \\\\ 2 & 4 \\end{bmatrix} = ?$',
            options: ['$14$', '$20$', '$26$', '$6$'],
            correctAnswer: 0,
            explanation: '$5(4) - 3(2) = 20 - 6 = 14$.'
          },
          {
            question: 'If $\\det(A) = 0$, then:',
            options: ['$A$ is invertible', '$A$ is singular', 'The system has unique solution', '$A = 0$'],
            correctAnswer: 1,
            explanation: 'Det = 0 → singular → not invertible → no unique solution.'
          },
          {
            question: 'In Cramer\'s Rule, $D_x$ replaces which column?',
            options: ['The $x$-column with constants', 'The $y$-column with constants', 'The constant column with $x$', 'No column'],
            correctAnswer: 0,
            explanation: 'To find $x$: replace the $x$-coefficient column with the constants.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Compute Determinants** 🧮

**1)** $\\det \\begin{bmatrix} 4 & -1 \\\\ 2 & 3 \\end{bmatrix}$ = ?

**2)** $\\det \\begin{bmatrix} 6 & 3 \\\\ 2 & 1 \\end{bmatrix}$ = ?

**3)** Cramer: $\\begin{cases} x+y=5 \\\\ 2x-y=1 \\end{cases}$. $D$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '0', '-3'],
        hint1: '$4(3)-(-1)(2) = 12+2$.',
        hint2: '$6(1)-3(2) = 0$. Singular!',
        hint3: '$D = 1(-1)-1(2) = -3$.',
        explanation: '1) $14$. 2) $0$ (singular). 3) $D = -1-2 = -3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Determinant Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$|\\det|$ geometrically represents:',
            options: ['Length', 'Area (2D) or Volume (3D)', 'Angle', 'Slope'],
            correctAnswer: 1
          },
          {
            label: 'Cramer\'s Rule requires:',
            options: ['$D = 0$', '$D \\neq 0$', 'Only 2×2 systems', 'Augmented matrices'],
            correctAnswer: 1
          },
          {
            label: 'Row of zeros in a matrix means det =',
            options: ['1', '0', 'Undefined', 'Depends'],
            correctAnswer: 1
          },
          {
            label: 'Swapping two rows of a matrix:',
            options: ['Doubles the det', 'Changes sign of det', 'Keeps det same', 'Makes det 0'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Area (2D) or Volume (3D)', '$D \\neq 0$', '0', 'Changes sign of det'],
        hint1: 'Parallelogram/parallelepiped.',
        hint2: 'Division by $D$ required.',
        hint3: 'Row of zeros → linearly dependent.',
        explanation: 'Det = area/volume. Cramer needs $D\\neq 0$. Zero row: det=0. Swap rows: sign flips.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Use Cramer: $\\begin{cases} 2x+y=5 \\\\ x-3y=4 \\end{cases}$. $x = ?$',
            options: ['$\\frac{19}{7}$', '$\\frac{-19}{7}$', '$3$', '$\\frac{5}{7}$'],
            correctAnswer: 0,
            explanation: '$D = -6-1=-7$. $D_x = -15-4=-19$. $x = -19/-7 = 19/7$.'
          },
          {
            question: '$\\det \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = ?$',
            options: ['$0$', '$1$', '$3$', 'Undefined'],
            correctAnswer: 1,
            explanation: 'Identity matrix always has determinant 1.'
          }
        ]
      }
    }
  ]
};
