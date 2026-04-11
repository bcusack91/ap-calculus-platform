export const precalcContinuityPart6Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🔬 Continuity & Limits — Deep Connections

**Part 6 of 7**

### Continuity IS a Limit Statement

The definition of continuity at $c$ is exactly:

$$\\lim_{x \\to c} f(x) = f(c)$$

This single equation packs all three conditions:
- $f(c)$ must be defined (right side exists)
- The limit must exist (left side exists)
- They must be equal

### Composites and Continuity

If $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then $f \\circ g$ is continuous at $c$.

$$\\lim_{x \\to c} f(g(x)) = f\\left(\\lim_{x \\to c} g(x)\\right) = f(g(c))$$

You can "pass the limit inside" a continuous function!
      `
    },
    {
      id: 'p6-swap',
      type: 'text' as const,
      content: `
## Swapping Limits and Continuous Functions

### The Rule

If $f$ is continuous: $\\lim_{x \\to c} f(g(x)) = f(\\lim_{x \\to c} g(x))$

### Example 1

$$\\lim_{x \\to 0} \\sqrt{4 + \\sin x} = \\sqrt{\\lim_{x \\to 0}(4 + \\sin x)} = \\sqrt{4 + 0} = 2$$

We pulled the limit inside $\\sqrt{\\phantom{x}}$ because square root is continuous.

### Example 2

$$\\lim_{x \\to 1} e^{x^2-1} = e^{\\lim_{x \\to 1}(x^2-1)} = e^0 = 1$$

We pulled the limit inside $e^{\\phantom{x}}$ because the exponential is continuous.

### When You CANNOT Swap

If the outer function is NOT continuous at the limit value, this doesn't work. For example, floor function: $\\lim_{x \\to 2} \\lfloor x \\rfloor \\neq \\lfloor \\lim_{x \\to 2} x \\rfloor$ when the limit is at a discontinuity of $\\lfloor \\cdot \\rfloor$.
      `
    },
    {
      id: 'p6-abs',
      type: 'text' as const,
      content: `
## Special Cases

### Absolute Value and Continuity

$|x|$ is continuous everywhere but NOT differentiable at $x = 0$. This is an important distinction:

**Continuous ≠ Differentiable**

Continuity is necessary for differentiability, but NOT sufficient.

### Continuous but Not Differentiable Examples

- $|x|$ at $x = 0$ (sharp corner)
- $\\sqrt[3]{x}$ at $x = 0$ (vertical tangent)
- $x\\sin(1/x)$ at $x = 0$ (if defined as 0 there)

### Differentiable → Continuous (Always True!)

If $f$ is differentiable at $c$, then $f$ is continuous at $c$.

**Proof sketch**: $f(x) - f(c) = \\frac{f(x)-f(c)}{x-c} \\cdot (x-c) \\to f'(c) \\cdot 0 = 0$

So $\\lim_{x \\to c} f(x) = f(c)$. ✓

### The Hierarchy

$$\\text{Differentiable} \\subset \\text{Continuous} \\subset \\text{Has limits}$$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Deep Connections Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} e^{\\sin x}$ = ?',
            options: ['$0$', '$1$', '$e$', 'DNE'],
            correctAnswer: 1,
            explanation: '$e$ is continuous, so $e^{\\lim \\sin x} = e^0 = 1$.'
          },
          {
            question: 'Every differentiable function is:',
            options: ['Polynomial', 'Continuous', 'Monotonic', 'Bounded'],
            correctAnswer: 1,
            explanation: 'Differentiability implies continuity. Always.'
          },
          {
            question: '$|x|$ at $x=0$ is:',
            options: ['Continuous and differentiable', 'Continuous but not differentiable', 'Neither', 'Differentiable but not continuous'],
            correctAnswer: 1,
            explanation: '$|x|$ is continuous everywhere but has a sharp corner at 0 → not differentiable there.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate using continuity:**

**1)** $\\lim_{x \\to \\pi} \\cos(x)$ = ?

**2)** $\\lim_{x \\to 4} \\sqrt{x + 5}$ = ?

**3)** $\\lim_{x \\to 0} e^{3x}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '3', '1'],
        hint1: 'Cosine is continuous: $\\cos(\\pi) = -1$.',
        hint2: 'Square root is continuous: $\\sqrt{9} = 3$.',
        hint3: '$e^{3(0)} = e^0 = 1$.',
        explanation: '(1) $\\cos \\pi = -1$. (2) $\\sqrt{4+5} = 3$. (3) $e^0 = 1$. Direct substitution works for continuous functions.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Deep Connections** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You can "pass a limit inside" a function when the function is:',
            options: ['Differentiable', 'Continuous', 'Bounded', 'Periodic'],
            correctAnswer: 1
          },
          {
            label: 'Differentiable ⟹ Continuous is:',
            options: ['Always true', 'Sometimes true', 'Never true', 'Undefined'],
            correctAnswer: 0
          },
          {
            label: 'Continuous ⟹ Differentiable is:',
            options: ['Always true', 'Sometimes true (not always)', 'Never true', 'Only for polynomials'],
            correctAnswer: 1
          },
          {
            label: '$|x|$ has a _____ at $x=0$:',
            options: ['Smooth curve', 'Sharp corner', 'Vertical asymptote', 'Hole'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Continuous', 'Always true', 'Sometimes true (not always)', 'Sharp corner'],
        hint1: 'Continuity allows limit-function swap.',
        hint2: 'Differentiable always implies continuous.',
        hint3: 'Counterexample: $|x|$.',
        explanation: 'Continuous: swap ok. Diff→Cont: always. Cont→Diff: not always (|x|). |x| has corner.'
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
            question: '$\\lim_{x \\to 2} \\ln(x^2 + 1)$ = ?',
            options: ['$\\ln 5$', '$\\ln 3$', '$\\ln 4$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\ln$ is continuous for positive arguments. $\\ln(4+1) = \\ln 5$.'
          },
          {
            question: 'The hierarchy from strongest to weakest:',
            options: ['Continuous ⊂ Differentiable ⊂ Has limits', 'Has limits ⊂ Continuous ⊂ Differentiable', 'Differentiable ⊂ Continuous ⊂ Has limits', 'All are equivalent'],
            correctAnswer: 2,
            explanation: 'Differentiable is the strongest (smallest set), then continuous, then having limits.'
          }
        ]
      }
    }
  ]
};
