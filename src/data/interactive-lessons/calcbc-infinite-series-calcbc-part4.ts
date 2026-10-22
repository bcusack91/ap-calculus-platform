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
| **Absolutely convergent** | $\\sum \\lvert a_n\\rvert$ converges |
| **Conditionally convergent** | $\\sum a_n$ converges but $\\sum \\lvert a_n\\rvert$ diverges |
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

### Why the Classification Takes Two Checks

- The AST proves convergence, never absolute convergence, so $\\sum |a_n|$ must be tested separately.
- A divergent $\\sum |a_n|$ does not make $\\sum a_n$ diverge: the alternating harmonic series converges even though $\\sum \\frac{1}{n}$ diverges.
- On the AP exam, conditionally convergent series most often appear at the endpoints of an interval of convergence.`
    },
    {
      id: 'is4-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$ converges:',
            options: ['Absolutely', 'Conditionally', 'It diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^2$ converges ($p = 2 > 1$). So the series converges absolutely.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}$ converges:',
            options: ['Conditionally', 'Absolutely, as $p = \\frac{1}{2} > 0$', 'It diverges, as $p = \\frac{1}{2} < 1$', 'To $0$, since its terms approach $0$'],
            correctAnswer: 0,
            explanation: '$\\sum 1/\\sqrt{n}$ diverges ($p = 1/2 < 1$), so the convergence is not absolute. But $\\sum (-1)^n/\\sqrt{n}$ converges by AST (terms decrease to $0$). Conditional convergence. The $p$-test applies to $\\sum |a_n|$, not to the alternating series, and terms approaching $0$ says nothing about the sum.'
          },
          {
            question: 'If $\\sum |a_n|$ converges, what can you conclude about $\\sum a_n$?',
            options: ['It converges, and absolutely', 'It converges only conditionally', 'It diverges unless signs alternate', 'Nothing until the AST is checked'],
            correctAnswer: 0,
            explanation: 'Absolute convergence implies convergence: if $\\sum |a_n|$ converges, so does $\\sum a_n$, and the series is called absolutely convergent. "Conditionally" requires $\\sum |a_n|$ to diverge, the signs do not need to alternate, and no AST is needed once the absolute-value series converges.'
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
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Cannot tell'],
            correctAnswers: ['Absolutely'],
            hints: ['$\\cos(n\\pi) = (-1)^n$. Then $|a_n| = 1/n^3$.'],
            explanation: '$\\cos(n\\pi) = (-1)^n$, so $\\sum |a_n| = \\sum 1/n^3$, which converges ($p = 3 > 1$). Absolute convergence.'
          },
          {
            label: 'Absolute convergence implies convergence, but convergence does NOT imply:',
            options: ['Absolute convergence', 'Bounded partial sums $S_n$', 'Terms $a_n$ that tend to $0$', 'Terms that stay bounded'],
            correctAnswers: ['Absolute convergence'],
            hints: ['The alternating harmonic series is the key example.'],
            explanation: '$\\sum (-1)^{n+1}/n$ converges but $\\sum 1/n$ diverges. Convergence without absolute convergence = conditional convergence. Convergence does force $a_n \\to 0$, bounded terms and bounded partial sums, so those are all implied.'
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
