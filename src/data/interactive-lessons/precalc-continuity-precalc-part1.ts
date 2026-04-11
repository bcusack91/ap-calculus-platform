export const precalcContinuityPart1Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🔗 What Is Continuity?

**Part 1 of 7**

### The Intuitive Idea

A function is **continuous** if you can draw its graph **without lifting your pen**.

### The Formal Definition

$f$ is continuous at $x = c$ if ALL THREE conditions hold:

1. $f(c)$ is **defined** (the point exists)
2. $\\lim_{x \\to c} f(x)$ **exists** (left and right limits agree)
3. $\\lim_{x \\to c} f(x) = f(c)$ (limit equals function value)

If **any** condition fails → $f$ is **discontinuous** at $c$.

### Visual Check

| Condition | What You See |
|:----------|:------------|
| (1) fails | Open circle — $f(c)$ undefined |
| (2) fails | Jump — left ≠ right |
| (3) fails | Hole — limit ≠ value |
| All pass | Smooth curve through $(c, f(c))$ |
      `
    },
    {
      id: 'p1-examples',
      type: 'text' as const,
      content: `
## Examples: Continuous or Not?

### Example 1: $f(x) = x^2$ at $x = 3$

1. $f(3) = 9$ ✓
2. $\\lim_{x \\to 3} x^2 = 9$ ✓
3. $9 = 9$ ✓

**Continuous** at $x = 3$. (Polynomials are continuous everywhere!)

### Example 2: $f(x) = \\frac{x^2-1}{x-1}$ at $x = 1$

1. $f(1)$ = undefined ($0/0$) ✗

**Discontinuous** — condition (1) fails. (But the limit exists: $\\frac{(x-1)(x+1)}{x-1} \\to 2$.)

### Example 3: Piecewise

$$g(x) = \\begin{cases} x+1 & x < 2 \\\\ 5 & x = 2 \\\\ x+1 & x > 2 \\end{cases}$$

1. $g(2) = 5$ ✓
2. $\\lim_{x \\to 2} g(x) = 3$ ✓ (both sides approach $3$)
3. $3 \\neq 5$ ✗

**Discontinuous** — removable discontinuity (hole). Could be "fixed" by redefining $g(2) = 3$.
      `
    },
    {
      id: 'p1-types',
      type: 'text' as const,
      content: `
## Continuous Functions You Know

### Always Continuous (on their domains)

- **Polynomials**: $x^2, x^3 + 2x - 1$, etc. — continuous everywhere
- **Rational functions**: continuous where denominator ≠ 0
- **Trig functions**: $\\sin x, \\cos x$ — continuous everywhere
- **Exponentials**: $e^x, 2^x$ — continuous everywhere
- **Logarithms**: $\\ln x$ — continuous for $x > 0$
- **Root functions**: $\\sqrt{x}$ — continuous on domain

### Key Property

**Combinations** of continuous functions are continuous:
- Sum/difference: $f \\pm g$
- Product: $f \\cdot g$
- Quotient: $f/g$ (where $g \\neq 0$)
- Composition: $f(g(x))$ (where defined)

This means you rarely need the three-step check for "nice" functions — just verify you're in the domain.
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Continuity Basics Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many conditions must hold for continuity at a point?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 2,
            explanation: 'Three: (1) $f(c)$ defined, (2) limit exists, (3) limit = $f(c)$.'
          },
          {
            question: '$f(x) = 1/(x-2)$ is discontinuous at:',
            options: ['$x = 0$', '$x = 1$', '$x = 2$', 'Nowhere'],
            correctAnswer: 2,
            explanation: '$f(2)$ is undefined (division by zero) — condition (1) fails.'
          },
          {
            question: 'Polynomials are continuous:',
            options: ['Only at integers', 'Only on $[0,\\infty)$', 'Everywhere', 'Nowhere'],
            correctAnswer: 2,
            explanation: 'Polynomials are continuous on all of $\\mathbb{R}$ — no holes, jumps, or asymptotes.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Check the three conditions** for $f(x) = \\frac{x^2-4}{x-2}$ at $x = 2$:

**1)** Is $f(2)$ defined? Enter "yes" or "no":

**2)** $\\lim_{x \\to 2}\\frac{x^2-4}{x-2}$ = ? (simplify first):

**3)** Is $f$ continuous at $x=2$? Enter "yes" or "no":
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['no', '4', 'no'],
        hint1: 'Plug in $x=2$: $0/0$ — undefined.',
        hint2: 'Factor: $\\frac{(x-2)(x+2)}{x-2} = x+2$. At $x=2$: $4$.',
        hint3: 'Condition (1) already fails.',
        explanation: '(1) $f(2)$ undefined → no. (2) Limit = 4. (3) Not continuous (condition 1 fails).'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Continuity Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Draw without lifting your pen" means:',
            options: ['Differentiable', 'Continuous', 'Periodic', 'Bounded'],
            correctAnswer: 1
          },
          {
            label: 'If $\\lim_{x \\to c} f(x) \\neq f(c)$, there is a:',
            options: ['Jump', 'Removable discontinuity', 'Vertical asymptote', 'No discontinuity'],
            correctAnswer: 1
          },
          {
            label: '$\\sin x$ is continuous on:',
            options: ['$(0, \\pi)$', '$[-1, 1]$', '$(-\\infty, \\infty)$', 'Only integers'],
            correctAnswer: 2
          },
          {
            label: '$\\ln x$ is continuous for:',
            options: ['All $x$', '$x > 0$', '$x \\geq 0$', '$x \\neq 0$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Continuous', 'Removable discontinuity', '$(-\\infty, \\infty)$', '$x > 0$'],
        hint1: 'No pen lift = no breaks = continuous.',
        hint2: 'Limit exists but ≠ value → removable.',
        hint3: 'Sine is defined and smooth everywhere.',
        explanation: 'No lift → continuous. Limit ≠ value → removable. $\\sin$: all reals. $\\ln$: only $x>0$.'
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
            question: 'Which condition distinguishes a "removable" from a "jump" discontinuity?',
            options: ['Whether $f(c)$ is defined', 'Whether the limit exists', 'Whether $f$ is polynomial', 'Whether $x > 0$'],
            correctAnswer: 1,
            explanation: 'Removable: limit exists (but ≠ value). Jump: limit DNE (one-sided limits differ).'
          },
          {
            question: 'If $f$ and $g$ are continuous at $c$, then $f+g$ at $c$ is:',
            options: ['Always continuous', 'Sometimes continuous', 'Never continuous', 'Undefined'],
            correctAnswer: 0,
            explanation: 'Sum of continuous functions is continuous — this is a theorem about limits.'
          }
        ]
      }
    }
  ]
};
