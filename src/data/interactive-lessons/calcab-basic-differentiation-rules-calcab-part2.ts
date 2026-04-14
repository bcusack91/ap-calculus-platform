export const calcabBasicDiffPart2Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff2-intro',
      type: 'text' as const,
      content: `# 📐 The Product Rule

**Part 2 of 7 — Product Rule**

### Why Can't We Just Multiply the Derivatives?

A common (and dangerous) mistake:

$$\\frac{d}{dx}[f(x) \\cdot g(x)] \\neq f'(x) \\cdot g'(x)$$

**Quick proof it fails:** $\\frac{d}{dx}[x \\cdot x] = \\frac{d}{dx}[x^2] = 2x$, but $1 \\cdot 1 = 1 \\neq 2x$. ✗

### The Product Rule

$$\\boxed{\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)}$$

**Memory aids:**
- "Derivative of first times second, plus first times derivative of second"
- Short form: $(fg)' = f'g + fg'$
- Leibniz form: $d(uv) = u\\,dv + v\\,du$

> **Key Fact:** The Product Rule comes from the limit definition. The "extra" term $fg'$ accounts for the fact that both factors are changing simultaneously.`
    },
    {
      id: 'diff2-examples',
      type: 'text' as const,
      content: `### Worked Examples — Product Rule

**Example 1:** Find $\\frac{d}{dx}[x^2 \\sin x]$

| Component | Value |
|-----------|-------|
| $f = x^2$ | $f' = 2x$ |
| $g = \\sin x$ | $g' = \\cos x$ |
| $f'g + fg'$ | $2x \\sin x + x^2 \\cos x$ |

$$\\frac{d}{dx}[x^2 \\sin x] = 2x\\sin x + x^2 \\cos x$$

---

**Example 2:** Find $\\frac{d}{dx}[e^x \\ln x]$

| Component | Value |
|-----------|-------|
| $f = e^x$ | $f' = e^x$ |
| $g = \\ln x$ | $g' = \\frac{1}{x}$ |
| $f'g + fg'$ | $e^x \\ln x + e^x \\cdot \\frac{1}{x}$ |

$$= e^x\\left(\\ln x + \\frac{1}{x}\\right)$$

> **AP Tip:** Factor common terms in your final answer when possible. Graders appreciate clean answers, and factoring helps with sign analysis later.

---

**Example 3:** Find $\\frac{d}{dx}[xe^x]$ — the most commonly tested product!

$$\\frac{d}{dx}[xe^x] = (1)e^x + x(e^x) = e^x(1 + x)$$

At $x = 0$: $f'(0) = e^0(1+0) = 1$. At $x = -1$: $f'(-1) = e^{-1}(0) = 0$ (this is a critical point!)`
    },
    {
      id: 'diff2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Product Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^3 \\cos x]$.',
            options: ['$3x^2 \\cos x - x^3 \\sin x$', '$3x^2 \\cos x + x^3 \\sin x$', '$-3x^2 \\sin x$', '$3x^2 \\cos x$'],
            correctAnswer: 0,
            explanation: '$f\'g + fg\' = 3x^2 \\cos x + x^3(-\\sin x) = 3x^2 \\cos x - x^3 \\sin x$. Remember: $\\frac{d}{dx}[\\cos x] = -\\sin x$ (the negative!).'
          },
          {
            question: 'Find $\\frac{d}{dx}[(2x+1)(x^2-3)]$.',
            options: ['$2(x^2-3) + (2x+1)(2x)$', '$6x^2 + 2x - 6$', '$2 \\cdot 2x$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Product Rule: $2(x^2-3) + (2x+1)(2x) = 2x^2-6+4x^2+2x = 6x^2+2x-6$. Both the unsimplified and simplified forms are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff2-strategy',
      type: 'text' as const,
      content: `### When to Use Product Rule vs. Expand First

| Situation | Strategy | Why |
|-----------|----------|-----|
| Both factors are polynomials | **Expand first**, then Power Rule | Faster and simpler |
| One factor is $e^x$, $\\sin x$, $\\ln x$ | **Product Rule** (must use) | Can't combine unlike functions |
| One factor is a constant | **Pull constant out** | Constant Multiple Rule suffices |
| Very complex product | **Product Rule** | Expansion would be unwieldy |

**Examples:**

| Expression | Best Strategy |
|-----------|--------------|
| $(2x+1)(x^2-3)$ | Expand: $2x^3 + x^2 - 6x - 3$ |
| $x^5 e^x$ | Product Rule (can't expand) |
| $\\sin x \\cdot \\cos x$ | Product Rule (or use $\\frac{1}{2}\\sin 2x$) |
| $3(x^4 + 2x)$ | Constant Multiple: $3(4x^3 + 2)$ |
| $(x^2+1)^2$ | Expand: $x^4 + 2x^2 + 1$ |

### Product Rule with Tables (AP Exam Favorite!)

If $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 5$, find $\\frac{d}{dx}[f(x)g(x)]$ at $x = 2$:

$$f'(2)g(2) + f(2)g'(2) = (-1)(4) + (3)(5) = -4 + 15 = 11$$

> **AP Tip:** Table-based derivative problems appear on almost EVERY AP exam. Practice reading values from tables and plugging into Product Rule.`
    },
    {
      id: 'diff2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Product Rule Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 e^x$, find $f\'(1)$.',
            options: ['$2e$', '$3e$', '$e$', '$4e$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 2xe^x + x^2e^x = e^x(2x + x^2)$. At $x=1$: $e(2+1) = 3e$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\sin x \\cos x]$.',
            options: ['$\\cos^2 x - \\sin^2 x$', '$-\\sin x \\cos x$', '$\\cos(2x)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x = \\cos(2x)$ by the double-angle identity.'
          }
        ]
      }
    },
    {
      id: 'diff2-extended',
      type: 'text' as const,
      content: `### Extended Product Rule — Three or More Factors

For three functions:

$$\\frac{d}{dx}[f \\cdot g \\cdot h] = f'gh + fg'h + fgh'$$

**Pattern:** Each factor takes a turn being differentiated while the others stay.

**Example:** Find $\\frac{d}{dx}[x^2 \\sin x \\cdot e^x]$

$$= 2x \\sin x \\cdot e^x + x^2 \\cos x \\cdot e^x + x^2 \\sin x \\cdot e^x$$

$$= e^x(2x\\sin x + x^2 \\cos x + x^2 \\sin x)$$

> **Key Concept:** You can also apply the two-factor Product Rule twice: treat $(fg)$ as one function and apply Product Rule with $h$. This gives the same result.`
    },
    {
      id: 'diff2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Product Rule with given values.**',
      exercise: {
        dropdowns: [
          {
            label: 'If $f(3) = 2$, $f\'(3) = 4$, $g(3) = -1$, $g\'(3) = 3$, then $(fg)\'(3) = $',
            options: ['$-4 + 6 = 2$', '$8 - 3 = 5$', '$-4 + 3 = -1$', '$2 + 12 = 14$'],
            correctAnswers: ['$-4 + 6 = 2$'],
            hints: ['Use $(fg)\' = f\'g + fg\'$. Plug in values at $x = 3$.'],
            explanation: '$f\'(3)g(3) + f(3)g\'(3) = 4(-1) + 2(3) = -4 + 6 = 2$.'
          },
          {
            label: 'Which should you expand BEFORE differentiating?',
            options: ['$x^3 e^x$', '$(x+1)(x-2)$', '$\\sqrt{x} \\ln x$', '$e^x \\sin x$'],
            correctAnswers: ['$(x+1)(x-2)$'],
            hints: ['Which product involves only polynomials?'],
            explanation: '$(x+1)(x-2) = x^2 - x - 2$. Polynomial × polynomial is easier to expand. The others require Product Rule.'
          }
        ]
      }
    },
    {
      id: 'diff2-input',
      type: 'input-box' as const,
      content: '**Product Rule computation.** ✍️',
      exercise: {
        question: 'Let $h(x) = x^2 \\ln x$. Find $h\'(e)$. Give your answer in terms of $e$ (write the coefficient of $e$ — for example, if the answer is $3e$, type 3).',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: [
          'Use Product Rule: $h\'(x) = 2x\\ln x + x^2 \\cdot \\frac{1}{x}$.',
          'Simplify: $h\'(x) = 2x\\ln x + x$.',
          'Evaluate at $x = e$: $h\'(e) = 2e\\ln e + e = 2e(1) + e$.'
        ],
        explanation: '$h\'(x) = 2x\\ln x + x^2 \\cdot \\frac{1}{x} = 2x\\ln x + x$.\\n\\nAt $x = e$: $h\'(e) = 2e \\ln e + e = 2e + e = 3e$.\\n\\nThe coefficient is $3$.'
      }
    },
    {
      id: 'diff2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Concept | Detail |
|---------|--------|
| **Product Rule** | $(fg)' = f'g + fg'$ |
| **Common Error** | $(fg)' \\neq f'g'$ — NEVER multiply derivatives |
| **Strategy** | Expand polynomials first when possible |
| **Factoring** | Factor common terms ($e^x$, $x$, etc.) for clean answers |
| **Table Problems** | Plug given values directly into the formula |
| **Triple Product** | $f'gh + fg'h + fgh'$ — each factor takes a turn |

> **Up Next:** Part 3 — The Quotient Rule, for derivatives of fractions.`
    }
  ]
};
