export const calcabBasicDiffPart3Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff3-intro',
      type: 'text' as const,
      content: `# 📐 The Quotient Rule

**Part 3 of 7 — Quotient Rule**

### The Quotient Rule

$$\\boxed{\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)\\,g(x) - f(x)\\,g'(x)}{[g(x)]^2}}$$

**Memory aids:**
- "Low d-High minus High d-Low, all over Low squared"
- Short form: $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$

> ⚠️ **Critical Warning:** The **minus sign** in the numerator is the #1 source of errors. The order matters — it's $f'g$ MINUS $fg'$, not the other way around. Unlike the Product Rule, the Quotient Rule is NOT symmetric!

### Comparison: Product Rule vs. Quotient Rule

| Rule | Formula | Sign |
|------|---------|------|
| Product | $f'g + fg'$ | **Plus** between terms |
| Quotient | $\\frac{f'g - fg'}{g^2}$ | **Minus** between terms |`
    },
    {
      id: 'diff3-examples',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** Find $\\frac{d}{dx}\\frac{x^2}{\\sin x}$

| Component | Value |
|-----------|-------|
| $f = x^2$ | $f' = 2x$ |
| $g = \\sin x$ | $g' = \\cos x$ |
| $\\frac{f'g - fg'}{g^2}$ | $\\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$ |

$$\\frac{d}{dx}\\frac{x^2}{\\sin x} = \\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$$

---

**Example 2:** Find $\\frac{d}{dx}\\frac{e^x}{x+1}$

$$= \\frac{e^x(x+1) - e^x(1)}{(x+1)^2} = \\frac{e^x(x+1-1)}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$$

> **AP Tip:** Always look for common factors in the numerator after applying the Quotient Rule. Simplifying makes it easier to find critical points and sign analysis.

---

**Example 3:** Find $\\frac{d}{dx}\\frac{x}{x+2}$

$$\\frac{1 \\cdot (x+2) - x \\cdot 1}{(x+2)^2} = \\frac{x + 2 - x}{(x+2)^2} = \\frac{2}{(x+2)^2}$$

> **Key Fact:** When $\\frac{d}{dx}\\frac{x}{x+c}$ yields a **positive constant** over a square, the function is always increasing. This is useful for sign analysis!`
    },
    {
      id: 'diff3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Quotient Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x}{x+2}$.',
            options: ['$\\frac{2}{(x+2)^2}$', '$\\frac{1}{(x+2)^2}$', '$\\frac{x+2-x}{(x+2)^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{1 \\cdot (x+2) - x \\cdot 1}{(x+2)^2} = \\frac{2}{(x+2)^2}$. Options A and C give the same result.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\sin x}{x}$.',
            options: ['$\\frac{x\\cos x - \\sin x}{x^2}$', '$\\frac{\\cos x}{x}$', '$\\cos x - \\frac{\\sin x}{x^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$. This can be split as $\\frac{\\cos x}{x} - \\frac{\\sin x}{x^2}$.'
          }
        ]
      }
    },
    {
      id: 'diff3-avoid',
      type: 'text' as const,
      content: `### When to Avoid the Quotient Rule

The Quotient Rule is powerful but often **overkill**. Use smarter alternatives when possible:

| Situation | Better Strategy | Example |
|-----------|----------------|---------|
| Denominator is a constant | **Constant Multiple Rule** | $\\frac{x^3+2x}{5} = \\frac{1}{5}(3x^2+2)$ |
| Denominator is a power of $x$ | **Rewrite as negative exponent** | $\\frac{3}{x^4} = 3x^{-4} \\to -12x^{-5}$ |
| Can split the fraction | **Divide term by term** | $\\frac{x^3+x}{x^2} = x + x^{-1}$ |
| Numerator is a constant | **Rewrite as negative exponent** | $\\frac{5}{x+1}$ — must use Q.R. here |

### Splitting Fractions — A Powerful Technique

$$\\frac{x^3 + 6x^2 - 2}{x^2} = x + 6 - 2x^{-2}$$

Now differentiate term by term: $1 + 0 + 4x^{-3} = 1 + \\frac{4}{x^3}$

Compare to using Quotient Rule on the original — much more work for the same answer!

### Deriving Trig Derivatives via Quotient Rule

$$\\frac{d}{dx}[\\tan x] = \\frac{d}{dx}\\frac{\\sin x}{\\cos x} = \\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$$

> **Key Concept:** The Quotient Rule is how we derive the derivatives of $\\tan x$, $\\cot x$, $\\sec x$, and $\\csc x$ from $\\sin x$ and $\\cos x$.`
    },
    {
      id: 'diff3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quotient Rule Mastery** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x^2 + 1}{x^2 - 1}$ and evaluate at $x = 2$.',
            options: ['$-\\frac{4}{9}$', '$\\frac{4}{9}$', '$\\frac{-4x}{(x^2-1)^2}$; at $x=2$: $-\\frac{8}{9}$', '$\\frac{4x}{(x^2-1)^2}$; at $x=2$: $\\frac{8}{9}$'],
            correctAnswer: 2,
            explanation: '$\\frac{2x(x^2-1)-(x^2+1)(2x)}{(x^2-1)^2} = \\frac{2x(x^2-1-x^2-1)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. At $x=2$: $\\frac{-8}{9}$.'
          },
          {
            question: 'Verify using Quotient Rule: $\\frac{d}{dx}[\\cot x] = ?$',
            options: ['$-\\csc^2 x$', '$\\csc^2 x$', '$-\\sec^2 x$', '$\\sec x \\cot x$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}\\frac{\\cos x}{\\sin x} = \\frac{-\\sin^2 x - \\cos^2 x}{\\sin^2 x} = \\frac{-1}{\\sin^2 x} = -\\csc^2 x$.'
          }
        ]
      }
    },
    {
      id: 'diff3-tables',
      type: 'text' as const,
      content: `### Quotient Rule with Tables (AP Exam Staple)

Given:

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|:---:|:---:|:---:|:---:|:---:|
| $1$ | $3$ | $-2$ | $4$ | $5$ |
| $2$ | $-1$ | $6$ | $2$ | $-3$ |

**Find** $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ at $x = 1$:

$$\\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(-2)(4) - (3)(5)}{4^2} = \\frac{-8 - 15}{16} = \\frac{-23}{16}$$

**Find** $\\frac{d}{dx}\\left[\\frac{g(x)}{f(x)}\\right]$ at $x = 2$:

$$\\frac{g'(2)f(2) - g(2)f'(2)}{[f(2)]^2} = \\frac{(-3)(-1) - (2)(6)}{(-1)^2} = \\frac{3 - 12}{1} = -9$$

> **AP Tip:** Watch for problems that ask for $\\frac{d}{dx}\\left[\\frac{g}{f}\\right]$ instead of $\\frac{d}{dx}\\left[\\frac{f}{g}\\right]$ — swapping the roles of $f$ and $g$ is a common trap!`
    },
    {
      id: 'diff3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the best differentiation strategy.**',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{x^4 + 3x^2}{x^2}$ — Best approach:',
            options: ['Quotient Rule', 'Split and simplify first', 'Product Rule', 'Chain Rule'],
            correctAnswers: ['Split and simplify first'],
            hints: ['Can you divide each term by $x^2$?'],
            explanation: 'Split: $\\frac{x^4}{x^2} + \\frac{3x^2}{x^2} = x^2 + 3$. Derivative: $2x$. Much simpler than Quotient Rule!'
          },
          {
            label: '$\\frac{e^x}{\\sin x}$ — Best approach:',
            options: ['Quotient Rule', 'Split and simplify first', 'Power Rule rewrite', 'Expand first'],
            correctAnswers: ['Quotient Rule'],
            hints: ['Can you simplify the fraction? These are fundamentally different function types.'],
            explanation: "No simplification possible — $e^x$ and $\\sin x$ can't be combined. Must use Quotient Rule."
          },
          {
            label: '$\\frac{7}{x^5}$ — Best approach:',
            options: ['Quotient Rule', 'Product Rule', 'Power Rule rewrite', 'Split first'],
            correctAnswers: ['Power Rule rewrite'],
            hints: ['Rewrite as $7x^{-5}$.'],
            explanation: '$7x^{-5} \\to -35x^{-6}$. No need for the Quotient Rule when the numerator is a constant!'
          }
        ]
      }
    },
    {
      id: 'diff3-input',
      type: 'input-box' as const,
      content: '**Quotient Rule computation.** ✍️',
      exercise: {
        question: 'Let $h(x) = \\frac{x^2 - 4}{x + 1}$. Find $h\'(0)$.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: [
          'Apply Quotient Rule: $h\'(x) = \\frac{2x(x+1) - (x^2-4)(1)}{(x+1)^2}$.',
          'Expand numerator: $2x^2 + 2x - x^2 + 4 = x^2 + 2x + 4$.',
          'At $x = 0$: $h\'(0) = \\frac{0 + 0 + 4}{(1)^2} = 4$.'
        ],
        explanation: '$h\'(x) = \\frac{2x(x+1) - (x^2-4)}{(x+1)^2} = \\frac{x^2+2x+4}{(x+1)^2}$.\\n\\nAt $x = 0$: $h\'(0) = \\frac{0+0+4}{1} = 4$.'
      }
    },
    {
      id: 'diff3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Concept | Detail |
|---------|--------|
| **Quotient Rule** | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |
| **Order matters** | $f'g - fg'$ (NOT $fg' - f'g$) |
| **Avoid when possible** | Rewrite as negative exponents or split fractions |
| **Constant denominator** | Just use Constant Multiple Rule |
| **Table problems** | Plug values directly into formula |
| **Trig connection** | Derives $\\tan, \\cot, \\sec, \\csc$ derivatives |

### Decision Tree: Which Rule?

| Expression Type | Rule to Use |
|----------------|-------------|
| $f \\cdot g$ | Product Rule |
| $\\frac{f}{g}$ (both non-trivial) | Quotient Rule |
| $\\frac{f}{\\text{constant}}$ | Constant Multiple |
| $\\frac{\\text{constant}}{x^n}$ | Power Rule rewrite |
| $\\frac{\\text{polynomial}}{x^n}$ | Split, then Power Rule |

> **Up Next:** Part 4 — Trigonometric Derivatives in depth.`
    }
  ]
};
