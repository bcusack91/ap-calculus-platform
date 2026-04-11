export const precalcCompositionPart1Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔗 Function Composition

**Part 1 of 7**

### What Is Composition?

The **composition** of $f$ and $g$, written $(f \\circ g)(x)$, means **"$f$ of $g$ of $x$"**:

$$(f \\circ g)(x) = f(g(x))$$

**Think of it as a pipeline**: input $x$ flows into $g$ first, then the output flows into $f$.

### Example

If $f(x) = x^2$ and $g(x) = x+3$:

$(f \\circ g)(x) = f(g(x)) = f(x+3) = (x+3)^2$

$(g \\circ f)(x) = g(f(x)) = g(x^2) = x^2+3$

> ⚠️ **Order matters!** $f \\circ g \\neq g \\circ f$ in general.
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## 📝 More Examples

### Example 1
$f(x)=2x+1, g(x)=x^2-4$

$(f \\circ g)(x) = 2(x^2-4)+1 = 2x^2-7$

$(g \\circ f)(x) = (2x+1)^2-4 = 4x^2+4x-3$

### Example 2: Evaluating at a Point
$f(x)=\\sqrt{x}, g(x)=3x+1$

$(f \\circ g)(5) = f(g(5)) = f(16) = 4$

### Example 3: Three Functions
$f(x)=x^2, g(x)=x+1, h(x)=2x$

$(f \\circ g \\circ h)(x) = f(g(h(x))) = f(g(2x)) = f(2x+1) = (2x+1)^2$

### Decomposition

Express $h(x) = \\sqrt{3x+7}$ as a composition: let $f(x) = \\sqrt{x}, g(x) = 3x+7$. Then $h = f \\circ g$.
      `
    },
    {
      id: 'p1-domain',
      type: 'text' as const,
      content: `
## 🔍 Domain of a Composition

The domain of $f \\circ g$ requires:
1. $x$ must be in the domain of $g$
2. $g(x)$ must be in the domain of $f$

### Example

$f(x) = \\sqrt{x}, g(x) = 4-x^2$

$(f \\circ g)(x) = \\sqrt{4-x^2}$

Domain: $4-x^2 \\geq 0 \\implies -2 \\leq x \\leq 2$

### Another Example

$f(x) = \\frac{1}{x}, g(x) = x-3$

$(f \\circ g)(x) = \\frac{1}{x-3}$

Domain: $x \\neq 3$ (so $g(x) \\neq 0$, which is not in domain of $f$).
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Composition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x)=3x$ and $g(x)=x-2$, find $(f\\circ g)(4)$:',
            options: ['$6$', '$10$', '$14$', '$-6$'],
            correctAnswer: 0,
            explanation: '$g(4) = 2$. $f(2) = 6$.'
          },
          {
            question: 'If $f(x)=x+1$ and $g(x)=x^2$, find $(g\\circ f)(3)$:',
            options: ['$10$', '$16$', '$12$', '$9$'],
            correctAnswer: 1,
            explanation: '$f(3)=4$. $g(4)=16$.'
          },
          {
            question: 'Is $f\\circ g$ always equal to $g\\circ f$?',
            options: ['Yes', 'No', 'Only for linear functions', 'Only for polynomials'],
            correctAnswer: 1,
            explanation: 'Composition is NOT commutative in general.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Composition Practice** 🧮

Let $f(x)=2x-1, g(x)=x+5$.

**1)** $(f \\circ g)(3)$ = ?

**2)** $(g \\circ f)(3)$ = ?

**3)** $(f \\circ f)(2)$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '10', '5'],
        hint1: '$g(3)=8$. $f(8)=15$.',
        hint2: '$f(3)=5$. $g(5)=10$.',
        hint3: '$f(2)=3$. $f(3)=5$.',
        explanation: '1) $15$. 2) $10$. 3) $5$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Composition Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$(f \\circ g)(x)$ means:',
            options: ['$f(x) \\cdot g(x)$', '$f(g(x))$', '$f(x) + g(x)$', '$g(f(x))$'],
            correctAnswer: 1
          },
          {
            label: 'In $f \\circ g$, which function is applied first?',
            options: ['$f$', '$g$', 'Both simultaneously', 'Depends on $x$'],
            correctAnswer: 1
          },
          {
            label: 'To decompose $h(x) = (2x+1)^3$, let $g(x)=2x+1$ and:',
            options: ['$f(x) = x^3$', '$f(x) = 3x$', '$f(x) = x+1$'],
            correctAnswer: 0
          },
          {
            label: 'The domain of $f \\circ g$ depends on:',
            options: ['Only domain of $f$', 'Only domain of $g$', 'Domain of $g$ and range of $g$ fitting in domain of $f$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$f(g(x))$', '$g$', '$f(x) = x^3$', 'Domain of $g$ and range of $g$ fitting in domain of $f$'],
        hint1: 'Composition applies functions in sequence.',
        hint2: 'The inner function ($g$) acts first.',
        hint3: 'The outer function cubes, the inner function is $2x+1$.',
        explanation: '$f \\circ g = f(g(x))$. $g$ applies first. Decompose: inner $g$, outer $f$. Domain requires both conditions.'
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
            question: 'If $f(x)=x^2+1$ and $g(x)=\\sqrt{x}$, the domain of $f\\circ g$ is:',
            options: ['All reals', '$x \\geq 0$', '$x > 0$', '$x \\geq 1$'],
            correctAnswer: 1,
            explanation: 'Need $x$ in domain of $g$: $x \\geq 0$. Then $g(x)=\\sqrt{x}$ is always in domain of $f$ (all reals).'
          },
          {
            question: 'Express $\\frac{1}{(x-2)^2}$ as $f(g(x))$:',
            options: ['$f(x)=1/x^2, g(x)=x-2$', '$f(x)=x-2, g(x)=1/x^2$', '$f(x)=1/x, g(x)=(x-2)^2$', 'Both A and C work'],
            correctAnswer: 3,
            explanation: 'Both decompositions give $\\frac{1}{(x-2)^2}$.'
          }
        ]
      }
    }
  ]
};
