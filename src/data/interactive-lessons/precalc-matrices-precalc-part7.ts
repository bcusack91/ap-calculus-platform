export const precalcMatricesPart7Data = {
  topicSlug: 'matrices-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Matrices — Full Synthesis

**Part 7 of 7**

### Master Reference

| Tool | When to Use |
|:-----|:-----------|
| Addition/Scalar mult | Combine or scale data |
| Multiplication $AB$ | Compose transformations, solve systems |
| Determinant | Check invertibility, find area |
| Inverse $A^{-1}$ | Solve $A\\vec{x}=\\vec{b}$ directly |
| Cramer's Rule | Quick solve small systems |
| Gaussian elimination | Systematic solve of any system |
| Transformation matrices | Geometry (rotate, reflect, scale) |

### Invertibility Checklist

A matrix is invertible when:
- $\\det(A) \\neq 0$
- Row reduces to identity
- $A\\vec{x} = \\vec{b}$ has a unique solution for every $\\vec{b}$
- Columns are linearly independent
- Zero is NOT an eigenvalue
      `
    },
    {
      id: 'p7-compare',
      type: 'text' as const,
      content: `
## 🔄 Method Comparison: Solving Systems

### Small Systems (2×2)
- **Fastest**: Cramer's Rule or inverse formula
- $x = D_x/D$, $y = D_y/D$

### Medium Systems (3×3)
- **Best**: Gaussian elimination
- Systematic, always works, handles special cases

### Large Systems
- **Standard**: RREF (computer-assisted)
- Technology: calculators, MATLAB, Python

### When Each Method Fails

| Method | Fails When |
|:-------|:----------|
| Cramer's | $\\det = 0$ |
| Inverse | $\\det = 0$ |
| Gauss | Never fails — reveals no solution or $\\infty$ solutions |

> 💡 Gaussian elimination is the **most robust** method.
      `
    },
    {
      id: 'p7-connect',
      type: 'text' as const,
      content: `
## 🔗 Linear Algebra Preview

### Eigenvalues & Eigenvectors

$A\\vec{v} = \\lambda \\vec{v}$ — special vectors that are only scaled (not rotated).

For $A = \\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\end{bmatrix}$:

$\\det(A - \\lambda I) = 0 \\implies (2-\\lambda)(3-\\lambda) = 0$

Eigenvalues: $\\lambda = 2, 3$.

### Applications of Matrices

- **Computer Graphics**: transformations for 3D rendering
- **Machine Learning**: data processing, neural networks
- **Economics**: input-output models
- **Physics**: quantum mechanics states
- **Cryptography**: encoding/decoding messages

### From Precalc to Linear Algebra

Precalc matrices → Linear algebra → Abstract algebra → Modern math!
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = 0$ implies:',
            options: ['Unique solution', 'No inverse exists', 'The matrix equals zero', 'Rows are orthogonal'],
            correctAnswer: 1,
            explanation: 'Det = 0 → singular → no inverse → no unique solution.'
          },
          {
            question: 'Which method ALWAYS reveals the type of solution?',
            options: ['Cramer\'s Rule', 'Inverse method', 'Gaussian elimination', 'Substitution'],
            correctAnswer: 2,
            explanation: 'Gauss-Jordan: unique ($I$), infinite (free variables), none ($0=c$).'
          },
          {
            question: '$A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$. $A^{-1}$?',
            options: ['$\\begin{bmatrix} 1/2 & 0 \\\\ 0 & 1/5 \\end{bmatrix}$', '$\\begin{bmatrix} 5 & 0 \\\\ 0 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 0 \\\\ 0 & 5 \\end{bmatrix}$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Diagonal inverse: reciprocal of each diagonal entry. $\\det=10\\neq 0$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Calculations** 🧮

**1)** $\\det \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ = ?

**2)** $\\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$: top entry = ?

**3)** Eigenvalues of $\\begin{bmatrix} 5 & 0 \\\\ 0 & 2 \\end{bmatrix}$: sum = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '3', '7'],
        hint1: '$1(4)-2(3) = -2$.',
        hint2: '$1(1)+2(1) = 3$.',
        hint3: 'Diagonal matrix: eigenvalues are the diagonal entries. $5+2=7$.',
        explanation: '1) $-2$. 2) $3$. 3) $5+2=7$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Matrices Master** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Matrix multiplication order matters because:',
            options: ['Not commutative', 'Not associative', 'Not defined', 'Always gives zero'],
            correctAnswer: 0
          },
          {
            label: 'The identity matrix $I$ satisfies:',
            options: ['$AI = A$', '$IA = A$', '$AI = IA = A$', '$I = 0$'],
            correctAnswer: 2
          },
          {
            label: '$\\det(AB) = ?$',
            options: ['$\\det(A)+\\det(B)$', '$\\det(A) \\cdot \\det(B)$', '$\\det(A+B)$', '$\\det(A)/\\det(B)$'],
            correctAnswer: 1
          },
          {
            label: 'Eigenvalues of the identity matrix:',
            options: ['All 0', 'All 1', 'All -1', 'Undefined'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Not commutative', '$AI = IA = A$', '$\\det(A) \\cdot \\det(B)$', 'All 1'],
        hint1: '$AB \\neq BA$ generally.',
        hint2: 'Identity works on both sides.',
        hint3: 'Determinant is multiplicative.',
        explanation: 'Not commutative. $AI=IA=A$. $\\det(AB)=\\det(A)\\det(B)$. $I\\vec{v}=1\\cdot\\vec{v}$.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Best method for a 5×5 system?',
            options: ['Cramer\'s Rule', 'Substitution', 'Gaussian elimination / RREF', 'Graphing'],
            correctAnswer: 2,
            explanation: 'For large systems, Gaussian elimination (especially with technology) is by far the best.'
          },
          {
            question: '$A^2 = I$ (involution). Then $A^{-1} = ?$',
            options: ['$A$', '$I$', '$-A$', '$A^2$'],
            correctAnswer: 0,
            explanation: '$A^2=I \\implies A \\cdot A = I \\implies A^{-1} = A$. $A$ is its own inverse!'
          }
        ]
      }
    }
  ]
};
