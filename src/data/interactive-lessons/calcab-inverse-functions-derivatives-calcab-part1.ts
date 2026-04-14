export const calcabInverseFunctionsPart1Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv1-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 1 of 7 \u2014 The Inverse Function Derivative Formula**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Inverse function derivative formula** |
| 2 | Table-based inverse problems |
| 3 | Inverse trig derivatives |
| 4 | Derivatives involving $\\ln$ and $\\log$ |
| 5 | Combining techniques |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

---

### The Key Formula

If $g = f^{-1}$ (so $f(g(x)) = x$), then:

$$\\boxed{(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}}$$

Equivalently: if $f(b) = a$, then $(f^{-1})'(a) = \\frac{1}{f'(b)}$.

### Why It Works

Differentiate $f(g(x)) = x$ by the chain rule:

$$f'(g(x)) \\cdot g'(x) = 1 \\quad \\Longrightarrow \\quad g'(x) = \\frac{1}{f'(g(x))}$$

> **Key Fact:** You don\u2019t need to find $f^{-1}$ explicitly! Just find the point where $f(b)=a$, then compute $\\frac{1}{f'(b)}$.

### Step-by-Step

| Step | Action |
|:---:|:---:|
| 1 | Find $b$ such that $f(b) = a$ |
| 2 | Compute $f'(x)$ |
| 3 | Evaluate $f'(b)$ |
| 4 | Answer: $(f^{-1})'(a) = \\frac{1}{f'(b)}$ |

### Worked Example

> $f(x) = x^3 + x$. Find $(f^{-1})'(2)$.

**Step 1:** $f(b) = 2$: $b^3+b = 2 \\Rightarrow b = 1$.

**Step 2\u20133:** $f'(x) = 3x^2+1$. $f'(1) = 4$.

**Step 4:** $(f^{-1})'(2) = \\frac{1}{4}$.

> **AP Tip:** When $f$ is not easily invertible (like $x^3+x$), the formula is the only practical approach.`
    },
    {
      id: 'inv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Inverse Derivatives** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^5 + 3x$. Find $(f^{-1})\'(4)$.',
            options: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$8$', '$\\frac{1}{5}$'],
            correctAnswer: 0,
            explanation: '$f(1) = 1+3 = 4$. $f\'(x) = 5x^4+3$. $f\'(1) = 8$. $(f^{-1})\'(4) = 1/8$.'
          },
          {
            question: '$f(x) = 2x + \\sin x$. Find $(f^{-1})\'(0)$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$1$', '$3$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$. $f\'(x) = 2+\\cos x$. $f\'(0) = 3$. $(f^{-1})\'(0) = 1/3$.'
          },
          {
            question: 'If $f(3) = 7$ and $f\'(3) = 5$, then $(f^{-1})\'(7) = $',
            options: ['$\\frac{1}{5}$', '$5$', '$\\frac{1}{7}$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7 \\Rightarrow f^{-1}(7) = 3$. $(f^{-1})\'(7) = \\frac{1}{f\'(3)} = \\frac{1}{5}$.'
          }
        ]
      }
    },
    {
      id: 'inv1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verify understanding.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'To use the formula, you must find $b$ such that:',
            options: ['$f(b) = a$', '$f\'(b) = a$', '$b = f\'(a)$', '$f(a) = b$'],
            correctAnswers: ['$f(b) = a$'],
            hints: ['You need the $x$-value that maps to $a$ under $f$.'],
            explanation: '$f(b) = a$ means $f^{-1}(a) = b$. Then $(f^{-1})\'(a) = 1/f\'(b)$.'
          },
          {
            label: 'If $f\'(b) = 0$, then $(f^{-1})\'(a)$ is:',
            options: ['Undefined (division by zero)', '$0$', '$1$', 'Infinite'],
            correctAnswers: ['Undefined (division by zero)'],
            hints: ['$(f^{-1})\'(a) = 1/f\'(b)$. What happens when $f\'(b) = 0$?'],
            explanation: '$f\'(b) = 0$ means $f$ has a horizontal tangent at $b$, so $f^{-1}$ has a vertical tangent at $a$.'
          },
          {
            label: 'The inverse derivative formula requires $f$ to be:',
            options: ['One-to-one (invertible) near the point', 'Polynomial', 'Defined everywhere', 'Even'],
            correctAnswers: ['One-to-one (invertible) near the point'],
            hints: ['$f^{-1}$ exists only if $f$ is one-to-one.'],
            explanation: 'The function must pass the horizontal line test (be one-to-one) to have an inverse.'
          }
        ]
      }
    },
    {
      id: 'inv1-input',
      type: 'input-box' as const,
      content: '**Compute.** \u270d\ufe0f',
      exercise: {
        question: '$f(x) = x^3 + 2x - 1$. Find $(f^{-1})\'(2)$.\n\nAnswer $= \\frac{1}{a}$. Enter $a$. (Enter an integer.)',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: [
          'Find $b$: $b^3+2b-1 = 2 \\Rightarrow b^3+2b = 3$. Try $b=1$: $1+2=3$ \u2714',
          '$f\'(x) = 3x^2+2$. $f\'(1) = 5$.',
          '$(f^{-1})\'(2) = 1/5$. So $a = 5$.'
        ],
        explanation: '$(f^{-1})\'(2) = \\frac{1}{f\'(1)} = \\frac{1}{5}$.'
      }
    },
    {
      id: 'inv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$ \u2014 memorize this!
- Find $b$ where $f(b) = a$, then compute $1/f'(b)$
- You do NOT need to find the inverse function explicitly
- Undefined when $f'(b) = 0$`
    }
  ]
};
