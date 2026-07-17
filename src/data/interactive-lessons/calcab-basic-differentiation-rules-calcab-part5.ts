export const calcabBasicDiffPart5Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff5-intro',
      type: 'text' as const,
      content: `# 📐 Higher-Order Derivatives

**Part 5 of 7 — Higher-Order Derivatives**

### What Are Higher-Order Derivatives?

The **second derivative** is the derivative of the derivative:

$$\\boxed{f''(x) = \\frac{d^2 y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right]}$$

### Notation Comparison

| Order | Prime Notation | Leibniz Notation | Other |
|:---:|:---:|:---:|:---:|
| 1st | $f'(x)$ | $\\frac{dy}{dx}$ | $\\dot{y}$ (physics) |
| 2nd | $f''(x)$ | $\\frac{d^2y}{dx^2}$ | $\\ddot{y}$ (physics) |
| 3rd | $f'''(x)$ | $\\frac{d^3y}{dx^3}$ | — |
| $n$th | $f^{(n)}(x)$ | $\\frac{d^ny}{dx^n}$ | — |

> **Key Fact:** For $n \\geq 4$, we write $f^{(n)}(x)$ with parentheses to avoid confusion with powers: $f^{(4)}(x)$ is the 4th derivative, not $[f(x)]^4$.

### Physical Interpretation — Motion

| Derivative | In Motion Context | Units (if position in meters, time in seconds) |
|-----------|---------|------|
| $s(t)$ | Position | meters |
| $s'(t) = v(t)$ | Velocity | m/s |
| $s''(t) = a(t)$ | Acceleration | $m/s^{2}$ |
| $s'''(t) = j(t)$ | Jerk | $m/s^{3}$ |`
    },
    {
      id: 'diff5-examples',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** Find all derivatives of $f(x) = x^5 - 3x^3 + 2x$

| Derivative | Computation | Result |
|:---:|-----------|--------|
| $f'(x)$ | $5x^4 - 9x^2 + 2$ | Polynomial degree 4 |
| $f''(x)$ | $20x^3 - 18x$ | Polynomial degree 3 |
| $f'''(x)$ | $60x^2 - 18$ | Polynomial degree 2 |
| $f^{(4)}(x)$ | $120x$ | Polynomial degree 1 |
| $f^{(5)}(x)$ | $120$ | Constant! |
| $f^{(6)}(x)$ | $0$ | Zero forever |

> **Key Principle:** Any polynomial of degree $n$ has $f^{(n+1)}(x) = 0$. The $n$th derivative of $x^n$ is $n!$ (n factorial).

---

**Example 2:** Higher derivatives of $e^{2x}$

$$\\frac{d^n}{dx^n}[e^{2x}] = 2^n e^{2x}$$

Each derivative multiplies by 2 (Chain Rule): $y' = 2e^{2x}$, $y'' = 4e^{2x}$, $y''' = 8e^{2x}$, ...

---

**Example 3:** The Trig Cycle

| $n$ | $\\frac{d^n}{dx^n}[\\sin x]$ | $\\frac{d^n}{dx^n}[\\cos x]$ |
|:---:|:---:|:---:|
| 0 | $\\sin x$ | $\\cos x$ |
| 1 | $\\cos x$ | $-\\sin x$ |
| 2 | $-\\sin x$ | $-\\cos x$ |
| 3 | $-\\cos x$ | $\\sin x$ |
| 4 | $\\sin x$ ← repeats! | $\\cos x$ ← repeats! |

$$\\boxed{\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right) \\qquad \\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)}$$`
    },
    {
      id: 'diff5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Find Higher-Order Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $f\'\'(x)$ for $f(x) = x^4 - 6x^2 + 5$.',
            options: ['$4x^3 - 12x$', '$12x^2 - 12$', '$24x$', '$4x^2 - 6$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12$.'
          },
          {
            question: 'If $y = \\sin x$, what is $\\frac{d^4y}{dx^4}$?',
            options: ['$\\sin x$', '$-\\sin x$', '$\\cos x$', '$-\\cos x$'],
            correctAnswer: 0,
            explanation: '$y\' = \\cos x$, $y\'\' = -\\sin x$, $y\'\'\' = -\\cos x$, $y^{(4)} = \\sin x$. The cycle repeats every 4 derivatives!'
          },
          {
            question: 'A particle has position $s(t) = t^3 - 6t^2 + 9t$. Find the acceleration at $t = 2$.',
            options: ['$0$', '$-3$', '$6$', '$-6$'],
            correctAnswer: 0,
            explanation: '$v(t) = s\'(t) = 3t^2 - 12t + 9$. $a(t) = v\'(t) = 6t - 12$. At $t=2$: $a(2) = 12 - 12 = 0$.'
          }
        ]
      }
    },
    {
      id: 'diff5-concavity',
      type: 'text' as const,
      content: `### Concavity and the Second Derivative

The second derivative provides crucial information about the shape of a graph:

| Condition | Meaning | Graph Shape |
|-----------|---------|-------------|
| $f''(x) > 0$ | **Concave up** | Holds water (∪) |
| $f''(x) < 0$ | **Concave down** | Spills water (∩) |
| $f''(x) = 0$ | Possible **inflection point** | Concavity may change |

> ⚠️ **Critical Warning:** $f''(c) = 0$ does NOT guarantee an inflection point! You must verify that $f''$ actually **changes sign** at $c$. Example: $f(x) = x^4$ has $f''(0) = 0$ but NO inflection point (concave up on both sides).

### The Second Derivative Test

At a critical point where $f'(c) = 0$:

| $f''(c)$ | Conclusion |
|:---:|:---:|
| $f''(c) > 0$ | Local **minimum** |
| $f''(c) < 0$ | Local **maximum** |
| $f''(c) = 0$ | **Inconclusive** — use First Derivative Test |

$$\\boxed{f'(c) = 0 \\text{ and } f''(c) > 0 \\implies \\text{local minimum at } x = c}$$

### Worked Example

**Find where** $f(x) = x^3 - 3x$ **is concave up.**

$f''(x) = 6x$. 

Concave up when $f''(x) > 0$: $6x > 0 \\implies x > 0$.

So $f$ is concave up on $(0, \\infty)$ and concave down on $(-\\infty, 0)$ with an inflection point at $x = 0$.`
    },
    {
      id: 'diff5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = x^4 - 4x^3$, find the $x$-coordinate(s) of inflection points.',
            options: ['$x = 0$ only', '$x = 2$ only', '$x = 0$ and $x = 2$', '$x = 3$ only'],
            correctAnswer: 2,
            explanation: '$f\'\'(x) = 12x^2 - 24x = 12x(x-2) = 0$ at $x = 0, 2$. Sign changes at both (check: $f\'\'(-1) > 0$, $f\'\'(1) < 0$, $f\'\'(3) > 0$), so both are inflection points.'
          },
          {
            question: 'If $f\'\'(3) = -7$ and $f\'(3) = 0$, what can you conclude about $x = 3$?',
            options: ['$x = 3$ is a local minimum', '$x = 3$ is a local maximum', '$x = 3$ is an inflection point', 'Not enough information'],
            correctAnswer: 1,
            explanation: '$f\'(3) = 0$ means critical point. $f\'\'(3) < 0$ means concave down. By the Second Derivative Test, $x = 3$ is a local maximum.'
          }
        ]
      }
    },
    {
      id: 'diff5-connection',
      type: 'text' as const,
      content: `### Connecting $f$, $f'$, and $f''$ — The Big Picture

| If you know... | Then you can determine... |
|---------------|--------------------------|
| $f'(c) = 0$ | Critical point (possible max/min) |
| $f'(c) > 0$ | $f$ is increasing at $c$ |
| $f'(c) < 0$ | $f$ is decreasing at $c$ |
| $f''(c) > 0$ | $f$ is concave up; $f'$ is increasing |
| $f''(c) < 0$ | $f$ is concave down; $f'$ is decreasing |
| $f'(c) = 0$ and $f''(c) > 0$ | Local minimum |
| $f'(c) = 0$ and $f''(c) < 0$ | Local maximum |

> **AP Tip:** The AP exam frequently gives you a graph of $f'(x)$ and asks about $f(x)$ or $f''(x)$. Remember: the derivative of $f'$ IS $f''$, so where $f'$ is increasing, $f'' > 0$ (concave up for $f$).`
    },
    {
      id: 'diff5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze concavity and extrema.**',
      exercise: {
        dropdowns: [
          {
            label: 'If $f\'(2) = 0$ and $f\'\'(2) = 5$, then $x = 2$ is a:',
            options: ['Local maximum', 'Local minimum', 'Inflection point', 'Cannot determine'],
            correctAnswers: ['Local minimum'],
            hints: ['$f\' = 0$ means critical point. What does the sign of $f\'\'$ tell you?'],
            explanation: 'By the Second Derivative Test: $f\'(2) = 0$ (critical point) and $f\'\'(2) > 0$ (concave up) means local minimum.'
          },
          {
            label: 'If $f\'\'$ changes from positive to negative at $x = 4$, then $x = 4$ is a(n):',
            options: ['Local maximum of $f$', 'Inflection point of $f$', 'Local minimum of $f$', 'Zero of $f$'],
            correctAnswers: ['Inflection point of $f$'],
            hints: ['When the second derivative changes sign, what changes about the graph?'],
            explanation: 'When $f\'\'$ changes sign, the concavity changes — this is the definition of an inflection point.'
          }
        ]
      }
    },
    {
      id: 'diff5-input',
      type: 'input-box' as const,
      content: '**Higher-order derivative computation.** ✍️',
      exercise: {
        question: 'Find the 99th derivative of $\\cos x$ evaluated at $x = 0$. That is, find $f^{(99)}(0)$ where $f(x) = \\cos x$.',
        correctAnswer: '0',
        acceptableAnswers: ['0', '0.0'],
        hints: [
          'The cycle for $\\cos x$: $\\cos x, -\\sin x, -\\cos x, \\sin x, \\cos x, ...$',
          'Divide 99 by 4: $99 = 4(24) + 3$. So the 99th derivative matches the 3rd.',
          'The 3rd derivative of $\\cos x$ is $\\sin x$. What is $\\sin(0)$?'
        ],
        explanation: 'The derivatives of $\\cos x$ cycle with period 4: $\\cos x, -\\sin x, -\\cos x, \\sin x, ...$.\\n\\n$99 = 4(24) + 3$, so $f^{(99)}(x) = \\sin x$ (same as the 3rd derivative).\\n\\n$f^{(99)}(0) = \\sin(0) = 0$.'
      }
    },
    {
      id: 'diff5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | Formula / Fact |
|---------|---------------|
| **Second Derivative** | $f''(x) = \\frac{d}{dx}[f'(x)]$ |
| **Motion** | Position → Velocity → Acceleration |
| **Concave up** | $f''(x) > 0$ |
| **Concave down** | $f''(x) < 0$ |
| **Inflection point** | $f''$ changes sign |
| **2nd Deriv Test** | $f'(c)=0$: $f''(c)>0$ → min; $f''(c)<0$ → max |
| **Polynomials** | Degree $n$ → $(n+1)$th derivative is 0 |
| **Trig cycle** | Repeats every 4 derivatives |
| **Exponential** | $\\frac{d^n}{dx^n}[e^{kx}] = k^n e^{kx}$ |

> **Up Next:** Part 6 — Mixed Differentiation Problems workshop.`
    }
  ]
};
