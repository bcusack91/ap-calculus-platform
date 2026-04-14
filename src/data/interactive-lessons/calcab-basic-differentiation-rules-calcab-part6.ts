export const calcabBasicDiffPart6Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff6-intro',
      type: 'text' as const,
      content: `# 📐 Problem-Solving Workshop

**Part 6 of 7 — Mixed Differentiation Problems**

### The Decision Framework

Before differentiating, ask yourself: **What structure does this expression have?**

| Structure | Rule to Use | Example |
|-----------|------------|---------|
| Single term $cx^n$ | Power Rule | $7x^4$ |
| Sum/difference | Term-by-term | $x^3 + \\sin x$ |
| Product $f \\cdot g$ | Product Rule | $x^2 e^x$ |
| Quotient $f/g$ | Quotient Rule (or rewrite) | $\\frac{e^x}{x+1}$ |
| Composition $f(g(x))$ | Chain Rule | $\\sin(x^2)$ |
| Constant ÷ power | Rewrite as negative exponent | $\\frac{5}{x^3}$ |
| Polynomial ÷ monomial | Split fraction | $\\frac{x^3+x}{x^2}$ |

> **Key Strategy:** Always **simplify first** when possible. Rewriting can eliminate the need for Product or Quotient Rule entirely.

### Simplification Strategies

| Before | After | Rule Avoided |
|--------|-------|-------------|
| $\\frac{x^3 + 1}{x}$ | $x^2 + x^{-1}$ | Quotient Rule |
| $x^2(x+3)$ | $x^3 + 3x^2$ | Product Rule |
| $\\frac{5}{x^2}$ | $5x^{-2}$ | Quotient Rule |
| $(x+1)^2$ | $x^2 + 2x + 1$ | Chain Rule |`
    },
    {
      id: 'diff6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Identify and Apply** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\left(\\frac{x^3 + 1}{x}\\right)$ by simplifying first.',
            options: ['$2x - \\frac{1}{x^2}$', '$\\frac{3x^2}{1}$', '$3x^2 - 1$', '$2x + \\frac{1}{x^2}$'],
            correctAnswer: 0,
            explanation: 'Simplify: $\\frac{x^3+1}{x} = x^2 + x^{-1}$. Differentiate: $2x + (-1)x^{-2} = 2x - \\frac{1}{x^2}$.'
          },
          {
            question: 'Find $f\'(2)$ given $f(x) = (x^2 - 1)(x + 3)$.',
            options: ['$23$', '$11$', '$15$', '$17$'],
            correctAnswer: 0,
            explanation: 'Expand: $f(x) = x^3 + 3x^2 - x - 3$. $f\'(x) = 3x^2 + 6x - 1$. $f\'(2) = 3(4) + 6(2) - 1 = 12 + 12 - 1 = 23$. Or Product Rule: $2x(x+3) + (x^2-1) = 3x^2+6x-1$.'
          }
        ]
      }
    },
    {
      id: 'diff6-worked',
      type: 'text' as const,
      content: `### Worked Examples — Multi-Rule Problems

**Example 1:** Find $\\frac{d}{dx}\\left[\\frac{x^2 \\sin x}{e^x}\\right]$

**Strategy:** This is a quotient where the numerator is itself a product. Use Quotient Rule with $f = x^2 \\sin x$ and $g = e^x$.

First, find $f'$ using Product Rule: $f' = 2x\\sin x + x^2 \\cos x$

Then Quotient Rule:
$$\\frac{(2x\\sin x + x^2\\cos x)e^x - x^2\\sin x \\cdot e^x}{e^{2x}} = \\frac{2x\\sin x + x^2\\cos x - x^2\\sin x}{e^x}$$

---

**Example 2:** Find the tangent line to $y = \\frac{x^2 + 1}{x - 1}$ at $x = 2$

**Step 1:** $y(2) = \\frac{5}{1} = 5$. Point: $(2, 5)$.

**Step 2:** $y' = \\frac{2x(x-1) - (x^2+1)}{(x-1)^2} = \\frac{x^2-2x-1}{(x-1)^2}$

**Step 3:** $y'(2) = \\frac{4-4-1}{1} = -1$. Slope: $m = -1$.

**Step 4:** Tangent line: $y - 5 = -1(x - 2)$ → $y = -x + 7$

> **AP Tip:** Tangent line questions combine differentiation with algebra. Always clearly state the point and slope before writing the equation.`
    },
    {
      id: 'diff6-motion',
      type: 'text' as const,
      content: `### Particle Motion — A Complete Analysis

**Problem:** A particle moves along the $x$-axis with position $s(t) = t^3 - 6t^2 + 9t + 2$ for $t \\geq 0$.

| Question | Computation | Answer |
|----------|------------|--------|
| Velocity | $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$ | — |
| At rest when? | $v(t) = 0$ | $t = 1$ and $t = 3$ |
| Moving right when? | $v(t) > 0$ | $0 < t < 1$ or $t > 3$ |
| Moving left when? | $v(t) < 0$ | $1 < t < 3$ |
| Acceleration | $a(t) = 6t - 12$ | — |
| Speeding up when? | $v$ and $a$ same sign | $1 < t < 2$ or $t > 3$ |
| Slowing down when? | $v$ and $a$ opposite sign | $0 < t < 1$ or $2 < t < 3$ |

> **Key Concept:** "Speeding up" means $|v(t)|$ is increasing, which happens when velocity and acceleration have the **same sign**. This is different from "accelerating" (which just means $a > 0$).

### Speed vs. Velocity

$$\\boxed{\\text{Speed} = |v(t)| \\qquad \\text{Velocity} = v(t) \\text{ (signed)}}$$

Speed is always non-negative. The particle speeds up when $v(t) \\cdot a(t) > 0$.`
    },
    {
      id: 'diff6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Motion & Mixed Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $s(t) = t^3 - 6t^2 + 9t + 2$, when is the particle at rest?',
            options: ['$t = 1$ only', '$t = 3$ only', '$t = 1$ and $t = 3$', '$t = 0$ and $t = 2$'],
            correctAnswer: 2,
            explanation: '$v(t) = s\'(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0$ gives $t = 1$ and $t = 3$.'
          },
          {
            question: 'For the same particle, when is it moving to the left?',
            options: ['$0 < t < 1$', '$1 < t < 3$', '$t > 3$', '$t < 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 3(t-1)(t-3)$ is negative when exactly one factor is negative: $1 < t < 3$.'
          },
          {
            question: 'If $g(x) = \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}$, find $g\'(x)$.',
            options: ['$\\frac{-2}{(\\sin x - \\cos x)^2}$', '$\\frac{2}{(\\sin x - \\cos x)^2}$', '$\\frac{1}{(\\sin x - \\cos x)^2}$', '$0$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\sin x + \\cos x$, $v = \\sin x - \\cos x$. Then $u\' = \\cos x - \\sin x = -v$ and $v\' = \\cos x + \\sin x = u$. So $g\' = \\frac{-v \\cdot v - u \\cdot u}{v^2} = \\frac{-(v^2+u^2)}{v^2}$. Since $u^2+v^2 = 2$, we get $\\frac{-2}{(\\sin x - \\cos x)^2}$.'
          }
        ]
      }
    },
    {
      id: 'diff6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the best strategy for each derivative.**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}\\left[\\frac{x^4 - x^2 + 3}{x^2}\\right]$ — Best strategy:',
            options: ['Quotient Rule directly', 'Split into separate fractions', 'Product Rule', 'Factor first'],
            correctAnswers: ['Split into separate fractions'],
            hints: ['Divide each term by $x^2$: $x^2 - 1 + 3x^{-2}$.'],
            explanation: 'Split: $x^2 - 1 + 3x^{-2}$. Derivative: $2x - 6x^{-3}$. Much simpler than Quotient Rule!'
          },
          {
            label: '$\\frac{d}{dx}[x^3 \\ln x]$ — Which rule?',
            options: ['Power Rule only', 'Product Rule', 'Quotient Rule', 'Expand first'],
            correctAnswers: ['Product Rule'],
            hints: ['Can you expand $x^3 \\ln x$? No — $\\ln x$ is not a polynomial.'],
            explanation: 'Must use Product Rule: $3x^2 \\ln x + x^3 \\cdot \\frac{1}{x} = 3x^2 \\ln x + x^2 = x^2(3\\ln x + 1)$.'
          }
        ]
      }
    },
    {
      id: 'diff6-input',
      type: 'input-box' as const,
      content: '**Mixed problem.** ✍️',
      exercise: {
        question: 'A particle has position $s(t) = t^3 - 12t$. Find the speed of the particle when the acceleration is zero.',
        correctAnswer: '12',
        acceptableAnswers: ['12', '12.0'],
        hints: [
          '$v(t) = 3t^2 - 12$ and $a(t) = 6t$.',
          'Set $a(t) = 0$: $6t = 0$, so $t = 0$.',
          'Speed $= |v(0)| = |3(0)^2 - 12| = |-12| = ?$'
        ],
        explanation: '$v(t) = 3t^2 - 12$, $a(t) = 6t$.\\n\\n$a(t) = 0$ when $t = 0$.\\n\\n$v(0) = 3(0)^2 - 12 = -12$.\\n\\nSpeed $= |v(0)| = |-12| = 12$.'
      }
    },
    {
      id: 'diff6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Strategy | When to Use |
|----------|------------|
| **Simplify first** | Polynomial ÷ monomial, expandable products |
| **Product Rule** | Products with unlike functions ($xe^x$, $x\\sin x$) |
| **Quotient Rule** | True fractions with unlike functions |
| **Rewrite** | Constants over powers → negative exponents |
| **Multiple rules** | Nested structures (quotient of products, etc.) |

**Particle Motion Checklist:**
- At rest: $v(t) = 0$
- Direction: sign of $v(t)$
- Speeding up: $v(t) \\cdot a(t) > 0$
- Slowing down: $v(t) \\cdot a(t) < 0$

> **Up Next:** Part 7 — Comprehensive Review & AP Exam preparation.`
    }
  ]
};
