export const precalcLimitsPart1Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'p1-intro',
      type: 'text' as const,
      content: `
# 🎯 What Is a Limit?

**Part 1 of 7**

### The Big Idea

A **limit** describes what a function **approaches** as $x$ gets closer to a value — even if it never gets there!

$$\\lim_{x \\to c} f(x) = L$$

"As $x$ approaches $c$, $f(x)$ approaches $L$."

### Why Limits Matter

Limits are the **foundation** of calculus:
- Derivatives = limits of difference quotients
- Integrals = limits of Riemann sums
- Continuity = defined using limits

### Intuitive Example

$$f(x) = \\frac{x^2-1}{x-1}$$

At $x = 1$: $f(1) = 0/0$ — undefined!

But simplify: $f(x) = \\frac{(x-1)(x+1)}{x-1} = x+1$ (when $x \\neq 1$).

As $x \\to 1$, $f(x) \\to 2$. So $\\lim_{x \\to 1} f(x) = 2$.

The limit exists even though $f(1)$ is undefined!
      `
    },
    {
      id: 'p1-table',
      type: 'text' as const,
      content: `
## 📊 Estimating Limits from Tables

### Approach from Both Sides

For $f(x) = \\frac{x^2-1}{x-1}$:

| $x$ | 0.9 | 0.99 | 0.999 | → 1 ← | 1.001 | 1.01 | 1.1 |
|:----|:----|:-----|:------|:------|:------|:-----|:----|
| $f(x)$ | 1.9 | 1.99 | 1.999 | ? | 2.001 | 2.01 | 2.1 |

Both sides approach **2**. ✓

### When Sides Disagree

$$g(x) = \\begin{cases} x+1 & x < 2 \\\\ x+3 & x \\geq 2 \\end{cases}$$

From left: $g(x) \\to 3$. From right: $g(x) \\to 5$.

Since $3 \\neq 5$, the limit **does not exist** at $x = 2$.

> 💡 Both one-sided limits must agree for the (two-sided) limit to exist.
      `
    },
    {
      id: 'p1-notation',
      type: 'text' as const,
      content: `
## 📝 One-Sided Limits

### Left-Hand Limit (from below)

$$\\lim_{x \\to c^-} f(x) = L$$

$x$ approaches $c$ from values **less than** $c$.

### Right-Hand Limit (from above)

$$\\lim_{x \\to c^+} f(x) = L$$

$x$ approaches $c$ from values **greater than** $c$.

### The Connection

$$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L$$

### Example

$$h(x) = |x|/x$$

- $\\lim_{x \\to 0^-} = -1$ (negative values)
- $\\lim_{x \\to 0^+} = 1$ (positive values)
- $\\lim_{x \\to 0}$ **DNE** (they disagree)
      `
    },
    {
      id: 'p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Limits Intuition Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 2} (3x+1) = ?$',
            options: ['$7$', '$6$', '$5$', 'DNE'],
            correctAnswer: 0,
            explanation: 'Just plug in: $3(2)+1 = 7$. For continuous functions, limit = function value.'
          },
          {
            question: 'A limit can exist at $x=c$ even if:',
            options: ['$f(c)$ is undefined', '$f(c) \\neq L$', 'Both A and B', 'Neither'],
            correctAnswer: 2,
            explanation: 'The limit only cares about what $f$ does NEAR $c$, not AT $c$.'
          },
          {
            question: '$\\lim_{x \\to 0^-} |x|/x = ?$',
            options: ['$1$', '$-1$', '$0$', 'DNE'],
            correctAnswer: 1,
            explanation: 'For $x < 0$: $|x| = -x$, so $|x|/x = -1$.'
          }
        ]
      }
    },
    {
      id: 'p1-input',
      type: 'input-boxes' as const,
      content: `
**Evaluate Limits** 🧮

**1)** $\\lim_{x \\to 3} (x^2 - 1)$ = ?

**2)** $\\lim_{x \\to 4} \\sqrt{x}$ = ?

**3)** $\\lim_{x \\to 1} \\frac{x^2-1}{x-1}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '2', '2'],
        hint1: 'Plug in: $9-1=8$.',
        hint2: '$\\sqrt{4} = 2$.',
        hint3: 'Factor: $(x+1)$. As $x \\to 1$: $1+1=2$.',
        explanation: '1) $8$. 2) $2$. 3) $\\frac{(x-1)(x+1)}{x-1}=x+1 \\to 2$.'
      }
    },
    {
      id: 'p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Limit Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A limit describes what $f(x)$:',
            options: ['Equals at $c$', 'Approaches near $c$', 'Is defined at', 'Maximizes at'],
            correctAnswer: 1
          },
          {
            label: 'If left and right limits differ:',
            options: ['Take the average', 'Limit DNE', 'Use the larger one', 'Use the right one'],
            correctAnswer: 1
          },
          {
            label: '$\\lim_{x \\to c^+}$ means $x$ approaches from:',
            options: ['The left', 'The right', 'Both sides', 'Above on $y$-axis'],
            correctAnswer: 1
          },
          {
            label: '$0/0$ at $x=c$ means:',
            options: ['Limit is 0', 'Limit is undefined', 'Must investigate further', 'Limit DNE'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Approaches near $c$', 'Limit DNE', 'The right', 'Must investigate further'],
        hint1: 'Limits are about behavior near, not at.',
        hint2: 'Must agree for limit to exist.',
        hint3: '$c^+$ = from the positive/greater side.',
        explanation: 'Limits: approaching. Disagree: DNE. $c^+$: right side. $0/0$: indeterminate — investigate.'
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
            question: '$f(x) = \\frac{x^2-4}{x-2}$. $\\lim_{x \\to 2} f(x) = ?$',
            options: ['$4$', '$0$', 'DNE', '$2$'],
            correctAnswer: 0,
            explanation: '$\\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$.'
          },
          {
            question: 'If $\\lim_{x \\to 5^-} f(x) = 3$ and $\\lim_{x \\to 5^+} f(x) = 3$, then $\\lim_{x \\to 5} f(x) = ?$',
            options: ['$3$', 'DNE', '$6$', 'Need $f(5)$'],
            correctAnswer: 0,
            explanation: 'Both one-sided limits equal 3 → the two-sided limit exists and equals 3.'
          }
        ]
      }
    }
  ]
};
