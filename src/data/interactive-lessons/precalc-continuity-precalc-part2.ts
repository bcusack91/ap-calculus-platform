export const precalcContinuityPart2Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'p2-intro',
      type: 'text' as const,
      content: `
# 🔍 Types of Discontinuities

**Part 2 of 7**

### Classification

| Type | What Happens | Example |
|:-----|:------------|:--------|
| **Removable** | Limit exists, but ≠ $f(c)$ (or $f(c)$ undefined) | Hole in the graph |
| **Jump** | Left limit ≠ right limit | Step function |
| **Infinite** | Function → $\\pm\\infty$ | Vertical asymptote |
| **Oscillating** | No limit (wiggles) | $\\sin(1/x)$ near 0 |

### Removable Discontinuity

$$f(x) = \\frac{x^2-9}{x-3}$$ at $x=3$

Limit: $\\frac{(x-3)(x+3)}{x-3} \\to 6$. But $f(3)$ is undefined.

**"Removable"** because we could define $f(3)=6$ to make it continuous.
      `
    },
    {
      id: 'p2-jump',
      type: 'text' as const,
      content: `
## Jump Discontinuities

### Definition

$\\lim_{x \\to c^-} f(x) \\neq \\lim_{x \\to c^+} f(x)$ — the one-sided limits exist but disagree.

### Classic Example: Floor Function

$$\\lfloor x \\rfloor = \\text{greatest integer} \\leq x$$

At every integer $n$:
- $\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$
- $\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$
- Jump of size 1

### Piecewise Example

$$h(x) = \\begin{cases} 2x & x < 1 \\\\ 3x + 1 & x \\geq 1 \\end{cases}$$

- Left: $\\lim_{x \\to 1^-} 2x = 2$
- Right: $\\lim_{x \\to 1^+}(3x+1) = 4$
- $2 \\neq 4$ → **jump discontinuity** of size $|4-2| = 2$
      `
    },
    {
      id: 'p2-infinite',
      type: 'text' as const,
      content: `
## Infinite Discontinuities

### Vertical Asymptotes

When $f(x) \\to \\pm\\infty$ as $x \\to c$, there is an **infinite (essential) discontinuity**.

### Example: $f(x) = \\frac{1}{x-2}$

- $\\lim_{x \\to 2^-} \\frac{1}{x-2} = -\\infty$
- $\\lim_{x \\to 2^+} \\frac{1}{x-2} = +\\infty$

This is NOT removable — the function blows up.

### Oscillating Discontinuity

$f(x) = \\sin(1/x)$ at $x = 0$:
- Function oscillates between $-1$ and $1$ infinitely often
- No limit exists (not even one-sided)
- Cannot be removed

### Summary: Can It Be Fixed?

- **Removable**: YES — redefine one point
- **Jump**: NO — would need to "teleport"
- **Infinite**: NO — function goes to infinity
- **Oscillating**: NO — no stable value
      `
    },
    {
      id: 'p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Discontinuity Types Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$f(x)=\\frac{x^2-1}{x-1}$ at $x=1$ has a:',
            options: ['Jump', 'Removable discontinuity', 'Infinite discontinuity', 'No discontinuity'],
            correctAnswer: 1,
            explanation: 'Limit = 2 (factor/cancel), but $f(1)$ undefined. Removable — define $f(1)=2$.'
          },
          {
            question: 'The floor function $\\lfloor x \\rfloor$ at integers has:',
            options: ['Removable discontinuities', 'Jump discontinuities', 'Infinite discontinuities', 'No discontinuities'],
            correctAnswer: 1,
            explanation: 'Left limit ≠ right limit at every integer → jump discontinuities.'
          },
          {
            question: 'A vertical asymptote creates what type of discontinuity?',
            options: ['Removable', 'Jump', 'Infinite', 'Oscillating'],
            correctAnswer: 2,
            explanation: 'Function → $\\pm\\infty$ at a vertical asymptote = infinite discontinuity.'
          }
        ]
      }
    },
    {
      id: 'p2-input',
      type: 'input-boxes' as const,
      content: `
**Classify the discontinuity** (enter: removable, jump, or infinite):

**1)** $f(x) = \\frac{1}{(x-5)^2}$ at $x = 5$:

**2)** Piecewise: left limit = 3, right limit = 7 at $x = 2$:

**3)** $\\frac{x^2-4}{x+2}$ at $x = -2$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['infinite', 'jump', 'removable'],
        hint1: 'Function → $+\\infty$ from both sides.',
        hint2: '$3 \\neq 7$ → one-sided limits disagree.',
        hint3: '$\\frac{(x-2)(x+2)}{x+2} \\to -4$ but $f(-2)$ undefined.',
        explanation: '(1) Vertical asymptote → infinite. (2) $3 \\neq 7$ → jump. (3) Limit exists → removable.'
      }
    },
    {
      id: 'p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Discontinuity Classification** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A hole in the graph is:',
            options: ['Jump', 'Removable', 'Infinite', 'Oscillating'],
            correctAnswer: 1
          },
          {
            label: 'Which type CAN be "fixed" by redefining one point?',
            options: ['Jump', 'Removable', 'Infinite', 'None'],
            correctAnswer: 1
          },
          {
            label: '$\\tan x$ at $x = \\pi/2$ has:',
            options: ['Removable', 'Jump', 'Infinite discontinuity', 'No discontinuity'],
            correctAnswer: 2
          },
          {
            label: 'The signum function $\\text{sgn}(x)$ at $x=0$:',
            options: ['Removable', 'Jump', 'Infinite', 'Continuous'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Removable', 'Removable', 'Infinite discontinuity', 'Jump'],
        hint1: 'Hole = missing point = removable.',
        hint2: 'Only removable can be patched.',
        hint3: '$\\tan(\\pi/2) \\to \\pm\\infty$.',
        explanation: 'Hole → removable. Only removable is fixable. $\\tan$ has VA at $\\pi/2$. $\\text{sgn}$: jumps at 0.'
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
            question: 'How many types of discontinuity are there in precalculus?',
            options: ['$2$', '$3$', '$4$', '$1$'],
            correctAnswer: 2,
            explanation: 'Four: removable, jump, infinite, and oscillating.'
          },
          {
            question: 'If $\\lim_{x \\to c} f(x)$ exists but $f(c)$ is not defined, the discontinuity is:',
            options: ['Jump', 'Infinite', 'Removable', 'Oscillating'],
            correctAnswer: 2,
            explanation: 'Limit exists + function undefined = removable. Fix it by defining $f(c) =$ limit.'
          }
        ]
      }
    }
  ]
};
