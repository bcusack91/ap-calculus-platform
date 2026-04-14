export const satFunctionsPart6Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn6-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 6 of 7 — Even/Odd Functions and Symmetry**

### Even Functions: $f(-x) = f(x)$

- Symmetric about the **y-axis**
- Examples: $x^2$, $|x|$, $\\cos(x)$
- If $(3, 5)$ is on the graph, then $(-3, 5)$ is too

### Odd Functions: $f(-x) = -f(x)$

- Symmetric about the **origin** (180° rotation)
- Examples: $x^3$, $x$, $\\sin(x)$
- If $(3, 5)$ is on the graph, then $(-3, -5)$ is too

### Testing Algebraically

For $f(x) = x^4 - 3x^2$:
$f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)$ → **even**

For $g(x) = x^3 + x$:
$g(-x) = -x^3 - x = -(x^3 + x) = -g(x)$ → **odd**

### Neither Even nor Odd

$h(x) = x^2 + x$: $h(-x) = x^2 - x \\neq h(x)$ and $\\neq -h(x)$ → **neither**

---

### Worked Example 1

**Determine if $f(x) = \\frac{x^3}{x^2 + 1}$ is even, odd, or neither.**

| Step | Work |
|------|------|
| Compute $f(-x)$ | $\\frac{(-x)^3}{(-x)^2 + 1} = \\frac{-x^3}{x^2 + 1}$ |
| Compare to $-f(x)$ | $-f(x) = \\frac{-x^3}{x^2 + 1}$ |
| $f(-x) = -f(x)$? | Yes → **odd** |

### Worked Example 2

**If $f$ is odd and $f(3) = 7$, find $f(-3) + f(3)$.**

| Step | Work |
|------|------|
| Odd → $f(-3) = -f(3)$ | $f(-3) = -7$ |
| Sum | $-7 + 7 = 0$ |

> **Key insight:** For any odd function, $f(-x) + f(x) = 0$ always. Also $f(0) = 0$ for any odd function (if $0$ is in the domain).`
    },
    {
      id: 'fn6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Symmetry** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which function is odd?',
            options: ['$f(x) = x^3 - x$', '$f(x) = x^2 + 1$', '$f(x) = |x|$', '$f(x) = x^4$'],
            correctAnswer: 0,
            explanation: '$f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$ → odd. The others are all even.'
          },
          {
            question: 'If $f$ is an even function and $f(2) = -5$, what is $f(-2) + f(2)$?',
            options: ['$-10$', '$0$', '$10$', '$-5$'],
            correctAnswer: 0,
            explanation: 'Even: $f(-2) = f(2) = -5$. So $f(-2) + f(2) = -5 + (-5) = -10$.'
          },
          {
            question: 'If $g$ is an odd function and $g(4) = 3$, what is $g(-4)$?',
            options: ['$-3$', '$3$', '$0$', '$-4$'],
            correctAnswer: 0,
            explanation: 'Odd: $g(-4) = -g(4) = -3$.'
          }
        ]
      }
    },
    {
      id: 'fn6-text2',
      type: 'text' as const,
      content: `### Symmetry and Graphs

#### How Even/Odd Shows on Graphs

| Type | Symmetry | Test |
|------|----------|------|
| Even | Fold along y-axis → halves match | Replace $x$ with $-x$; if same equation → even |
| Odd | Rotate 180° around origin → same graph | Replace $x$ with $-x$; if negated → odd |

### Worked Example 3

**A graph passes through $(-2, 4)$, $(0, 0)$, and $(2, -4)$. Could it be even or odd?**

| Check | Result |
|-------|--------|
| Even: $(-2, 4)$ and $(2, 4)$? | No — we have $(2, -4)$, not $(2, 4)$ |
| Odd: $(-2, 4)$ and $(2, -4)$? | Yes — signs of both coordinates flip ✓ |
| Also: $(0, 0)$? | Yes — odd functions pass through origin ✓ |
| Conclusion | Could be odd |

### Products and Compositions

| Operation | Even × Even | Odd × Odd | Even × Odd |
|-----------|-------------|-----------|------------|
| Result | Even | Even | Odd |

Example: $x^2 \\cdot x^3 = x^5$ → even × odd = odd ✓`
    },
    {
      id: 'fn6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Even, Odd, or Neither?** 🎯',
      exercise: {
        questions: [
          {
            question: 'Is $f(x) = x^3 + 1$ even, odd, or neither?',
            options: ['Neither', 'Odd', 'Even', 'Both'],
            correctAnswer: 0,
            explanation: '$f(-x) = -x^3 + 1$. This is not $f(x) = x^3 + 1$ (not even) and not $-f(x) = -x^3 - 1$ (not odd). Neither.'
          },
          {
            question: 'If $f$ is odd and $g$ is even, what type of function is $f(x) \\cdot g(x)$?',
            options: ['Odd', 'Even', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Let $h(x) = f(x)g(x)$. Then $h(-x) = f(-x)g(-x) = (-f(x))(g(x)) = -f(x)g(x) = -h(x)$. So $h$ is odd.'
          },
          {
            question: 'If $f$ is odd, what is $f(0)$?',
            options: ['$0$', 'Cannot determine', '$1$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$f(-0) = -f(0)$ → $f(0) = -f(0)$ → $2f(0) = 0$ → $f(0) = 0$.'
          }
        ]
      }
    },
    {
      id: 'fn6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify Each Function** 🔍\n\nIs each function even, odd, or neither?',
      exercise: {
        dropdowns: [
          { label: '$f(x) = x^6 - x^2 + 1$', options: ['Even', 'Odd', 'Neither'] },
          { label: '$g(x) = x^5 - x^3$', options: ['Odd', 'Even', 'Neither'] },
          { label: '$h(x) = x^2 + x$', options: ['Neither', 'Even', 'Odd'] },
          { label: '$p(x) = \\frac{1}{x}$', options: ['Odd', 'Even', 'Neither'] }
        ],
        correctAnswers: ['Even', 'Odd', 'Neither', 'Odd'],
        hint1: 'All exponents even → likely even function.',
        hint2: 'All exponents odd → likely odd function.',
        hint3: 'Mixed even/odd exponents → likely neither.',
        explanation: '$x^6 - x^2 + 1$: all even powers → even. $x^5 - x^3$: all odd powers → odd. $x^2 + x$: mixed → neither. $1/x = x^{-1}$: odd power → odd.'
      }
    },
    {
      id: 'fn6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Property | Definition | Symmetry | Quick Test |
|----------|-----------|----------|------------|
| Even | $f(-x) = f(x)$ | y-axis | All terms have even exponents |
| Odd | $f(-x) = -f(x)$ | Origin | All terms have odd exponents |
| Neither | Neither condition holds | No symmetry | Mixed exponents |

- Odd functions always pass through the origin (if defined at $x = 0$)
- Even × Even = Even; Odd × Odd = Even; Even × Odd = Odd
- Most real functions are neither even nor odd`
    }
  ]
};
