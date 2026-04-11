export const precalcCompositionPart6Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📐 Verifying Inverses & Algebraic Techniques

**Part 6 of 7**

### How to Verify Two Functions Are Inverses

If $f$ and $g$ are inverses, BOTH must hold:

$$f(g(x)) = x \\quad \\text{AND} \\quad g(f(x)) = x$$

> ⚠️ Verifying only ONE direction is not enough! You need both.

### Example: Are $f(x) = 3x-6$ and $g(x) = \\frac{x+6}{3}$ inverses?

**Check 1**: $f(g(x)) = 3\\cdot\\frac{x+6}{3}-6 = x+6-6 = x$ ✓

**Check 2**: $g(f(x)) = \\frac{(3x-6)+6}{3} = \\frac{3x}{3} = x$ ✓

Both hold → **yes, they are inverses!**
      `
    },
    {
      id: 'p6-techniques',
      type: 'text' as const,
      content: `
## 🔧 Algebraic Techniques for Finding Inverses

### Technique 1: Quadratic Inverses

$f(x) = x^2 - 4x + 7, x \\geq 2$

Complete the square: $f(x) = (x-2)^2+3$

Swap: $x = (y-2)^2+3$

$(y-2)^2 = x-3$

$y = 2+\\sqrt{x-3}$ (positive root, since $x \\geq 2$)

### Technique 2: Implicit Solving

$f(x) = \\frac{x^2+1}{x^2-1}, x > 1$

$x = \\frac{y^2+1}{y^2-1} \\implies x(y^2-1) = y^2+1 \\implies xy^2-x = y^2+1$

$y^2(x-1) = x+1 \\implies y^2 = \\frac{x+1}{x-1} \\implies y = \\sqrt{\\frac{x+1}{x-1}}$
      `
    },
    {
      id: 'p6-derivative',
      type: 'text' as const,
      content: `
## 🔗 Composition & Inverse Connections

### Self-Inverse Functions (Involutions)

Some functions are their own inverse: $f(f(x)) = x$.

Examples:
- $f(x) = \\frac{1}{x}$: $f(f(x)) = \\frac{1}{1/x} = x$ ✓
- $f(x) = -x$: $f(f(x)) = -(-x) = x$ ✓
- $f(x) = \\frac{a-x}{1+ax}$ for certain $a$

### Composition of Inverses

If $h = f \\circ g$, then $h^{-1} = g^{-1} \\circ f^{-1}$

> 💡 The inverse of a composition reverses the order — like undoing layers. Remove the outer layer first!

### Derivative Preview

The slope of $f^{-1}$ at a point is the **reciprocal** of the slope of $f$:

If $f'(a) = m$, then $(f^{-1})'(f(a)) = \\frac{1}{m}$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Verification & Techniques Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To verify $f$ and $g$ are inverses, we need:',
            options: ['$f(g(x))=x$ only', '$g(f(x))=x$ only', 'Both $f(g(x))=x$ and $g(f(x))=x$', '$f(x)\\cdot g(x) = 1$'],
            correctAnswer: 2,
            explanation: 'Both compositions must equal $x$.'
          },
          {
            question: 'Which is a self-inverse (involution)?',
            options: ['$f(x) = x^2$', '$f(x) = 1/x$', '$f(x) = x+1$', '$f(x) = \\ln x$'],
            correctAnswer: 1,
            explanation: '$f(f(x)) = 1/(1/x) = x$.'
          },
          {
            question: 'If $h = f \\circ g$, then $h^{-1} =$',
            options: ['$f^{-1} \\circ g^{-1}$', '$g^{-1} \\circ f^{-1}$', '$(fg)^{-1}$', '$g \\circ f$'],
            correctAnswer: 1,
            explanation: 'Undo in reverse order: $g^{-1} \\circ f^{-1}$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Verification Practice** 🧮

$f(x)=2x+5, g(x)=\\frac{x-5}{2}$

**1)** $f(g(10))$ = ?

**2)** $g(f(10))$ = ?

**3)** Are they inverses? (Enter "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '10', 'yes'],
        hint1: '$g(10) = 5/2 = 2.5$. $f(2.5) = 10$.',
        hint2: '$f(10) = 25$. $g(25) = 10$.',
        hint3: 'Both give $x = 10$ back, and this works for all $x$.',
        explanation: '1) $10$. 2) $10$. 3) Yes — both compositions return $x$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Advanced Inverse Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = -x$ is self-inverse because:',
            options: ['$f(f(x)) = x$', '$f(x) = f^{-1}(x)$', 'Both A and B'],
            correctAnswer: 2
          },
          {
            label: 'The inverse of "multiply by 3, then add 5" is:',
            options: ['Divide by 3, then subtract 5', 'Subtract 5, then divide by 3', 'Add 5, then multiply by 3'],
            correctAnswer: 1
          },
          {
            label: 'If $f$ is increasing and $f(2)=5, f(3)=8$, then $f^{-1}$ is:',
            options: ['Increasing', 'Decreasing', 'Neither'],
            correctAnswer: 0
          },
          {
            label: 'For $f(x)=x^2+4x+7$ restricted to $x \\geq -2$, first:',
            options: ['Factor', 'Complete the square', 'Use quadratic formula'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Both A and B', 'Subtract 5, then divide by 3', 'Increasing', 'Complete the square'],
        hint1: 'Self-inverse means $f = f^{-1}$.',
        hint2: 'Undo in reverse order.',
        hint3: 'Increasing functions have increasing inverses.',
        explanation: '$-x$: self-inverse. Undo: reverse order. Increasing → increasing inverse. Complete square to find inverse of quadratics.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Are $f(x)=x^3+1$ and $g(x)=\\sqrt[3]{x-1}$ inverses?',
            options: ['Yes', 'No', 'Only in one direction', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f(g(x))=(\\sqrt[3]{x-1})^3+1=x-1+1=x$. $g(f(x))=\\sqrt[3]{x^3}=x$. Both hold.'
          },
          {
            question: 'If $f$ has slope $4$ at $x=1$ and $f(1)=3$, then $(f^{-1})$ has what slope at $x=3$?',
            options: ['$4$', '$-4$', '$1/4$', '$-1/4$'],
            correctAnswer: 2,
            explanation: 'Slope of inverse = $1/m = 1/4$.'
          }
        ]
      }
    }
  ]
};
