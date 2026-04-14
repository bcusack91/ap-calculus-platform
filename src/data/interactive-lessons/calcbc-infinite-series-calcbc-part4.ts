export const calcbcSeriesPart4Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'is4-intro',
      type: 'text' as const,
      content: `# Infinite Series — Absolute & Conditional Convergence

**Part 4 of 7 — Types of Convergence**

### Definitions

| Type | Definition |
|------|-----------|
| **Absolutely convergent** | $\\sum |a_n|$ converges |
| **Conditionally convergent** | $\\sum a_n$ converges but $\\sum |a_n|$ diverges |
| **Divergent** | $\\sum a_n$ does not converge |

### Key Theorem

$$\\boxed{\\text{Absolute convergence} \\implies \\text{Convergence}}$$

But NOT vice versa!

### The Classic Example

$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$

This converges, but $\\sum 1/n$ diverges, so it converges **conditionally**.

> **AP Tip:** When a problem asks "does the series converge absolutely, conditionally, or diverge?" — test $\\sum |a_n|$ first. If it converges, you're done (absolute). If not, check $\\sum a_n$ separately.`
    },
    {
      id: 'is4-strategy',
      type: 'text' as const,
      content: `### Strategy for Classification

**Step 1:** Test $\\sum |a_n|$ for convergence.
- If $\\sum |a_n|$ converges → **absolutely convergent** ✓

**Step 2:** If $\\sum |a_n|$ diverges, test $\\sum a_n$ (typically with AST).
- If $\\sum a_n$ converges → **conditionally convergent**
- If $\\sum a_n$ diverges → **divergent**

### Why Conditional Convergence Matters

Conditionally convergent series have surprising properties:
- **Riemann Rearrangement Theorem:** By rearranging terms, you can make the series sum to ANY value (or diverge). This is why absolute convergence is "safer."
- On the AP exam, conditionally convergent series typically appear in the context of interval of convergence endpoints.`
    },
    {
      id: 'is4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$ converges:',
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^2$ converges ($p = 2 > 1$). So the series converges absolutely.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}$ converges:',
            options: ['Conditionally', 'Absolutely', 'Diverges', 'To $0$'],
            correctAnswer: 0,
            explanation: '$\\sum 1/\\sqrt{n}$ diverges ($p = 1/2 < 1$). But $\\sum (-1)^n/\\sqrt{n}$ converges by AST (terms decrease to $0$). Conditional convergence.'
          },
          {
            question: 'If $\\sum a_n$ converges absolutely, which rearrangement of terms:',
            options: ['Gives the same sum', 'May give a different sum', 'Always diverges', 'Is not allowed'],
            correctAnswer: 0,
            explanation: 'Absolutely convergent series have the same sum regardless of the order of terms. This is a major theorem of analysis.'
          }
        ]
      }
    },
    {
      id: 'is4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classification Practice**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=1}^\\infty \\frac{\\cos(n\\pi)}{n^3}$ converges:',
            options: ['Absolutely ($\\cos(n\\pi) = (-1)^n$, $\\sum 1/n^3$ converges)', 'Conditionally', 'Diverges', 'Cannot tell'],
            correctAnswers: ['Absolutely ($\\cos(n\\pi) = (-1)^n$, $\\sum 1/n^3$ converges)'],
            hints: ['$\\cos(n\\pi) = (-1)^n$. Then $|a_n| = 1/n^3$.'],
            explanation: '$\\sum |a_n| = \\sum 1/n^3$ converges ($p = 3$). Absolute convergence.'
          },
          {
            label: 'Absolute convergence implies convergence, but convergence does NOT imply:',
            options: ['Absolute convergence', 'Divergence', '$a_n \\to 0$', 'Boundedness'],
            correctAnswers: ['Absolute convergence'],
            hints: ['The alternating harmonic series is the key example.'],
            explanation: '$\\sum (-1)^{n+1}/n$ converges but $\\sum 1/n$ diverges. Convergence without absolute convergence = conditional convergence.'
          }
        ]
      }
    },
    {
      id: 'is4-input',
      type: 'input-box' as const,
      content: '**Quick Classification**',
      exercise: {
        question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n!}$. Does $\\sum 1/n!$ converge? (Yes or No)',
        correctAnswer: 'Yes',
        acceptableAnswers: ['Yes', 'yes', 'YES', 'y'],
        hints: ['Ratio test: $|a_{n+1}/a_n| = 1/(n+1) \\to 0 < 1$.'],
        explanation: '$\\sum 1/n!$ converges (ratio test gives $L = 0$). Therefore $\\sum (-1)^n/n!$ converges absolutely. (In fact, $\\sum_{n=0}^\\infty (-1)^n/n! = e^{-1}$.)'
      }
    },
    {
      id: 'is4-summary',
      type: 'text' as const,
      content: `### Summary

- Absolute convergence: $\\sum |a_n|$ converges
- Conditional convergence: $\\sum a_n$ converges but $\\sum |a_n|$ diverges
- Absolute convergence $\\implies$ convergence (not vice versa)
- Test $\\sum |a_n|$ first, then $\\sum a_n$ if needed

> **Next:** Part 5 — Choosing the right test (decision flowchart).`
    }
  ]
};
