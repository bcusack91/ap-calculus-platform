export const precalcMatricesPart5Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📊 Row Reduction & Gaussian Elimination

**Part 5 of 7**

### Elementary Row Operations

Three legal moves (they don't change solutions):

| Operation | Notation | Example |
|:----------|:---------|:--------|
| Swap rows | $R_i \\leftrightarrow R_j$ | $R_1 \\leftrightarrow R_2$ |
| Scale row | $kR_i \\to R_i$ | $2R_1 \\to R_1$ |
| Add multiple | $R_i + kR_j \\to R_i$ | $R_2 - 3R_1 \\to R_2$ |

### Goal: Row Echelon Form (REF)

$$\\begin{bmatrix} 1 & * & * & | & * \\\\ 0 & 1 & * & | & * \\\\ 0 & 0 & 1 & | & * \\end{bmatrix}$$

Leading 1s form a staircase pattern.

### Reduced Row Echelon Form (RREF)

$$\\begin{bmatrix} 1 & 0 & 0 & | & * \\\\ 0 & 1 & 0 & | & * \\\\ 0 & 0 & 1 & | & * \\end{bmatrix}$$

Solution reads directly from the right side!
      `
    },
    {
      id: 'p5-example',
      type: 'text' as const,
      content: `
## 📝 Worked Example

Solve: $\\begin{cases} x+2y=5 \\\\ 3x+4y=11 \\end{cases}$

$$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 11 \\end{array}\\right]$$

**Step 1**: $R_2 - 3R_1 \\to R_2$

$$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -4 \\end{array}\\right]$$

**Step 2**: $-\\frac{1}{2}R_2 \\to R_2$

$$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right]$$

**Step 3**: $R_1 - 2R_2 \\to R_1$

$$\\left[\\begin{array}{cc|c} 1 & 0 & 1 \\\\ 0 & 1 & 2 \\end{array}\\right]$$

**Solution**: $x = 1, y = 2$ ✓
      `
    },
    {
      id: 'p5-3x3',
      type: 'text' as const,
      content: `
## 🔢 3×3 Example

$$\\begin{cases} x+y+z=6 \\\\ 2x+3y+z=14 \\\\ x-y+2z=2 \\end{cases}$$

$$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & 3 & 1 & 14 \\\\ 1 & -1 & 2 & 2 \\end{array}\\right]$$

$R_2-2R_1$, $R_3-R_1$:

$$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & -2 & 1 & -4 \\end{array}\\right]$$

$R_3+2R_2$:

$$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 0 & -1 & 0 \\end{array}\\right]$$

Back-substitute: $z=0, y=2, x=4$.

**Solution**: $(4, 2, 0)$ ✓
      `
    },
    {
      id: 'p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Row Reduction Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT a valid row operation?',
            options: ['$R_1 + 2R_2 \\to R_1$', '$3R_1 \\to R_1$', '$R_1 \\cdot R_2 \\to R_1$', '$R_1 \\leftrightarrow R_3$'],
            correctAnswer: 2,
            explanation: 'Multiplying two rows together is not a valid elementary row operation.'
          },
          {
            question: 'RREF has:',
            options: ['Leading 1s only, zeros above and below', 'Zeros everywhere', 'No restrictions', 'Only integers'],
            correctAnswer: 0,
            explanation: 'RREF: leading 1s with all zeros in their column (above AND below).'
          },
          {
            question: 'If row reduction gives $\\begin{bmatrix} 1 & 0 & | & 3 \\\\ 0 & 0 & | & 5 \\end{bmatrix}$:',
            options: ['$x=3, y=5$', 'Infinite solutions', 'No solution', '$x=3$'],
            correctAnswer: 2,
            explanation: 'Row 2 says $0=5$: contradiction → no solution.'
          }
        ]
      }
    },
    {
      id: 'p5-input',
      type: 'input-boxes' as const,
      content: `
**Row Operations** 🧮

$\\left[\\begin{array}{cc|c} 2 & 4 & 10 \\\\ 1 & 3 & 7 \\end{array}\\right]$

After $\\frac{1}{2}R_1$: first row becomes $\\begin{bmatrix} 1 & ? & | & ? \\end{bmatrix}$

**1)** New $a_{12}$ = ?

**2)** New $a_{13}$ (constant) = ?

**3)** After $R_2 - R_1 \\to R_2$: new $a_{22}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5', '1'],
        hint1: '$4/2 = 2$.',
        hint2: '$10/2 = 5$.',
        hint3: 'New $R_1 = [1,2,5]$. $R_2 - R_1 = [0, 3-2, 7-5] = [0,1,2]$.',
        explanation: '1) $2$. 2) $5$. 3) $3-2=1$.'
      }
    },
    {
      id: 'p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Gauss Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Row echelon form has zeros:',
            options: ['Above leading 1s', 'Below leading 1s', 'Above and below', 'Nowhere specific'],
            correctAnswer: 1
          },
          {
            label: 'RREF has zeros:',
            options: ['Only below', 'Only above', 'Above and below leading 1s', 'Nowhere'],
            correctAnswer: 2
          },
          {
            label: 'A row of all zeros indicates:',
            options: ['No solution', 'Free variable (infinite solutions)', 'Unique solution', 'Error'],
            correctAnswer: 1
          },
          {
            label: 'Gaussian elimination uses:',
            options: ['Only swaps', 'Only scaling', 'All three row operations', 'Determinants'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Below leading 1s', 'Above and below leading 1s', 'Free variable (infinite solutions)', 'All three row operations'],
        hint1: 'REF: staircase down.',
        hint2: 'RREF: complete elimination.',
        hint3: 'Zero row = one less equation = free variable.',
        explanation: 'REF: below. RREF: full. Zero row: free variable. Gauss: all three ops.'
      }
    },
    {
      id: 'p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\left[\\begin{array}{cc|c} 1 & 0 & 3 \\\\ 0 & 1 & -2 \\end{array}\\right]$ in RREF gives:',
            options: ['$x=3, y=-2$', '$x=-2, y=3$', '$x=3, y=2$', 'No solution'],
            correctAnswer: 0,
            explanation: 'Read directly: $x=3, y=-2$.'
          },
          {
            question: 'How many solutions if RREF is $\\left[\\begin{array}{ccc|c} 1 & 0 & 2 & 5 \\\\ 0 & 1 & -1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]$?',
            options: ['One', 'None', 'Infinitely many', 'Three'],
            correctAnswer: 2,
            explanation: 'Third row all zeros → $z$ is free → infinitely many solutions.'
          }
        ]
      }
    }
  ]
};
