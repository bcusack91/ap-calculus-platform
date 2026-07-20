export const precalcMatricesPart4Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 🔄 Inverse Matrices

**Part 4 of 7**

### What Is an Inverse?

If $A^{-1}$ exists, then:

$$A \\cdot A^{-1} = A^{-1} \\cdot A = I$$

Like division: $A^{-1}$ "undoes" multiplication by $A$.

### 2×2 Inverse Formula

$$A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\implies A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$

**Steps**: swap diagonal, negate off-diagonal, divide by det.

### Example

$$A = \\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}, \\quad \\det = 3-2 = 1$$

$$A^{-1} = \\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix}$$

Verify: $\\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$ ✓
      `
    },
    {
      id: 'p4-solve',
      type: 'text' as const,
      content: `
## 📐 Solving Systems with Inverses

### The Matrix Equation

$$A\\vec{x} = \\vec{b} \\implies \\vec{x} = A^{-1}\\vec{b}$$

### Example

$$\\begin{cases} 3x+y=5 \\\\ 2x+y=4 \\end{cases}$$

$$A = \\begin{bmatrix} 3 & 1 \\\\ 2 & 1 \\end{bmatrix}, \\quad A^{-1} = \\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix}$$

$$\\vec{x} = \\begin{bmatrix} 1 & -1 \\\\ -2 & 3 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$$

**Solution**: $x = 1, y = 2$.

### When Does $A^{-1}$ NOT Exist?

When $\\det(A) = 0$ (singular matrix). No unique solution exists.
      `
    },
    {
      id: 'p4-properties',
      type: 'text' as const,
      content: `
## 📋 Properties of Inverses

### Key Properties

| Property | Formula |
|:---------|:--------|
| Inverse of inverse | $(A^{-1})^{-1} = A$ |
| Inverse of product | $(AB)^{-1} = B^{-1}A^{-1}$ |
| Inverse of transpose | $(A^T)^{-1} = (A^{-1})^T$ |
| Inverse of scalar | $(kA)^{-1} = \\frac{1}{k}A^{-1}$ |
| Det of inverse | $\\det(A^{-1}) = \\frac{1}{\\det(A)}$ |

### The "Socks and Shoes" Rule

$(AB)^{-1} = B^{-1}A^{-1}$

Like taking off socks and shoes: **reverse order!**

### Finding Inverse by Row Reduction

$[A | I] \\xrightarrow{\\text{row ops}} [I | A^{-1}]$

Start with identity augmented, reduce left side to identity → right side becomes the inverse.
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Inverse Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$A = \\begin{bmatrix} 2 & 1 \\\\ 4 & 2 \\end{bmatrix}$. Does $A^{-1}$ exist?',
            options: ['Yes', 'No', 'Only for some vectors', 'Need more info'],
            correctAnswer: 1,
            explanation: '$\\det = 2(2)-1(4) = 0$. Singular → no inverse.'
          },
          {
            question: '$A^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -3 & 2 \\end{bmatrix}$. Solve $A\\vec{x}=\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$:',
            options: ['$\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} -1 \\\\ -3 \\end{bmatrix}$', 'Cannot solve'],
            correctAnswer: 0,
            explanation: '$\\vec{x}=A^{-1}\\vec{b} = \\begin{bmatrix} 2(1)-1(3) \\\\ -3(1)+2(3) \\end{bmatrix}=\\begin{bmatrix} -1 \\\\ 3 \\end{bmatrix}$.'
          },
          {
            question: '$(AB)^{-1} = ?$',
            options: ['$A^{-1}B^{-1}$', '$B^{-1}A^{-1}$', '$A^{-1}B$', '$AB^{-1}$'],
            correctAnswer: 1,
            explanation: 'Reverse order: $(AB)^{-1} = B^{-1}A^{-1}$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Find the Inverse** 🧮

$A = \\begin{bmatrix} 4 & 3 \\\\ 1 & 1 \\end{bmatrix}$, $\\det = ?$

**1)** $\\det(A)$ = ?

**2)** $A^{-1}$ top-left entry = ?

**3)** $A^{-1}$ top-right entry = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '1', '-3'],
        hint1: '$4(1)-3(1) = 1$.',
        hint2: 'Swap diagonal: top-left gets $d = 1$. Divide by det=$1$.',
        hint3: 'Negate: $-b = -3$. Divide by 1.',
        explanation: 'Det=1. $A^{-1} = \\begin{bmatrix} 1 & -3 \\\\ -1 & 4 \\end{bmatrix}$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Inverse Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$A \\cdot A^{-1} = ?$',
            options: ['$A$', '$A^2$', '$I$', '$O$'],
            correctAnswer: 2
          },
          {
            label: 'The 2×2 inverse formula requires:',
            options: ['$\\det = 0$', '$\\det \\neq 0$', 'Symmetric matrix', 'Diagonal matrix'],
            correctAnswer: 1
          },
          {
            label: 'To solve $A\\vec{x}=\\vec{b}$:',
            options: ['$\\vec{x} = A\\vec{b}$', '$\\vec{x} = \\vec{b}A^{-1}$', '$\\vec{x} = A^{-1}\\vec{b}$', '$\\vec{x} = \\vec{b}/A$'],
            correctAnswer: 2
          },
          {
            label: '$\\det(A^{-1})$ equals:',
            options: ['$\\det(A)$', '$-\\det(A)$', '$1/\\det(A)$', '$0$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$I$', '$\\det \\neq 0$', '$\\vec{x} = A^{-1}\\vec{b}$', '$1/\\det(A)$'],
        hint1: 'Inverse cancels to identity.',
        hint2: 'Division by det in the formula.',
        hint3: 'Pre-multiply both sides by $A^{-1}$.',
        explanation: '$AA^{-1}=I$. Need $\\det\\neq 0$. $\\vec{x}=A^{-1}\\vec{b}$. $\\det(A^{-1})=1/\\det(A)$.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 7 \\end{bmatrix}$: $A^{-1}$ bottom-right entry?',
            options: ['$1$', '$7$', '$-3$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\det=7-6=1$. $A^{-1}=\\begin{bmatrix} 7 & -2 \\\\ -3 & 1 \\end{bmatrix}$. Bottom-right: $a/\\det = 1$.'
          },
          {
            question: 'If $A$ is $3\\times 3$ with $\\det(A)=5$, then $\\det(A^{-1})$?',
            options: ['$5$', '$1/5$', '$-5$', '$25$'],
            correctAnswer: 1,
            explanation: '$\\det(A^{-1}) = 1/\\det(A) = 1/5$.'
          }
        ]
      }
    }
  ]
};
