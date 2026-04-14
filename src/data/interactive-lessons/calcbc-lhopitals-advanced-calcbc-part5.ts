export const calcbcLHopPart5Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — L'Hôpital's Rule

**Part 5 of 7 — Maximizing Points**

### How L'Hôpital Appears on the AP Exam

| Format | What they ask |
|--------|--------------|
| MC: Evaluate a limit | Direct application, 1–2 iterations |
| MC: Identify form | "Which is an indeterminate form?" |
| FRQ: Limit as part of larger problem | Series, improper integrals, rates |
| FRQ: Justify | "Explain why L'Hôpital's Rule applies" |

### FRQ Justification Template

1. "The limit has the form $0/0$ because $f(a) = 0$ and $g(a) = 0$."
2. "By L'Hôpital's Rule, $\\lim f/g = \\lim f'/g'$."
3. Show the computation.
4. State the final answer.

### Speed Techniques for MC

$$\\boxed{\\text{Memorize these common limits:}}$$

| Limit | Value | Method |
|-------|-------|--------|
| $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ | $1$ | Definition |
| $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$ | $0$ | L'H or known |
| $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$ | $1/2$ | L'H twice |
| $\\lim_{x \\to 0} \\frac{\\tan x}{x}$ | $1$ | Like $\\sin x/x$ |
| $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$ | $1$ | L'H or definition |
| $\\lim_{x \\to \\infty} \\frac{\\ln x}{x^p}$ | $0$ ($p > 0$) | Hierarchy |
| $\\lim_{x \\to \\infty} \\frac{x^n}{e^x}$ | $0$ | Hierarchy |

> **AP Tip:** On the calculator section, just evaluate the limit numerically to check your analytical work.`
    },
    {
      id: 'lh5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sin(2x)}{3x}$',
            options: ['$2/3$', '$0$', '$3/2$', '$1$'],
            correctAnswer: 0,
            explanation: '$0/0$. L\'H: $\\lim 2\\cos(2x)/(3) = 2/3$. Or: $\\frac{\\sin(2x)}{3x} = \\frac{2}{3} \\cdot \\frac{\\sin(2x)}{2x} \\to \\frac{2}{3}$.'
          },
          {
            question: '$\\lim_{x \\to 1} \\frac{\\ln x}{x^2 - 1}$',
            options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$0/0$. L\'H: $\\lim \\frac{1/x}{2x} = \\frac{1}{2(1)} = 1/2$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\frac{x^{100}}{e^x}$',
            options: ['$0$ (exponential always beats polynomial)', '$\\infty$', '$100$', '$1$'],
            correctAnswer: 0,
            explanation: 'Growth hierarchy: $e^x$ dominates $x^{100}$. (L\'H 100 times gives $100!/e^x \\to 0$.)'
          }
        ]
      }
    },
    {
      id: 'lh5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Evaluation**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$:',
            options: ['$1/6$ (Taylor: $x - (x - x^3/6 + \\cdots) = x^3/6$)', '$0$', '$1/3$', '$1/2$'],
            correctAnswers: ['$1/6$ (Taylor: $x - (x - x^3/6 + \\cdots) = x^3/6$)'],
            hints: ['Taylor expansion of $\\sin x$: $x - x^3/6 + \\cdots$'],
            explanation: 'Numerator $= x^3/6 + \\cdots$. Limit $= 1/6$.'
          },
          {
            label: '$\\lim_{x \\to 0^+} x^2 \\ln x$:',
            options: ['$0$ ($0 \\cdot (-\\infty)$; rewrite as $\\ln x / (1/x^2)$ and L\'H)', '$-\\infty$', '$1$', 'DNE'],
            correctAnswers: ['$0$ ($0 \\cdot (-\\infty)$; rewrite as $\\ln x / (1/x^2)$ and L\'H)'],
            hints: ['$= \\lim \\frac{\\ln x}{x^{-2}} = \\frac{-\\infty}{\\infty}$. L\'H: $\\frac{1/x}{-2x^{-3}} = -x^2/2 \\to 0$.'],
            explanation: 'L\'H: $\\lim (-x^2/2) = 0$.'
          }
        ]
      }
    },
    {
      id: 'lh5-input',
      type: 'input-box' as const,
      content: '**Evaluate**',
      exercise: {
        question: '$\\lim_{x \\to 0} \\frac{e^{3x} - 1}{\\tan(2x)}$. Enter the answer as a fraction.',
        correctAnswer: '3/2',
        acceptableAnswers: ['3/2', '1.5', '1.50'],
        hints: ['$0/0$. L\'H: $\\lim \\frac{3e^{3x}}{2\\sec^2(2x)} = 3/2$.'],
        explanation: '$0/0$. L\'H: $3e^0 / (2\\sec^2 0) = 3/2$.'
      }
    },
    {
      id: 'lh5-summary',
      type: 'text' as const,
      content: `### Summary

- Memorize common limits for speed on MC
- Always state the indeterminate form on FRQs
- Use Taylor series when L'Hôpital requires 3+ applications
- Growth hierarchy gives instant answers for $x \\to \\infty$

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
