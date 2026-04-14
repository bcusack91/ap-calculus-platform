export const calcbcLHopPart1Data = {
  topicSlug: 'lhopitals-advanced-calcbc',
  sections: [
    {
      id: 'lh1-intro',
      type: 'text' as const,
      content: `# L'Hôpital's Rule — Foundations

**Part 1 of 7 — The $0/0$ and $\\infty/\\infty$ Forms**

### L'Hôpital's Rule

If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ yields $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$, then:

$$\\boxed{\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}}$$

provided the right-side limit exists (or is $\\pm\\infty$).

### Requirements Checklist

| Requirement | Must verify |
|------------|-------------|
| Indeterminate form | $0/0$ or $\\infty/\\infty$ |
| Both differentiable | $f'$ and $g'$ exist near $a$ |
| $g'(x) \\neq 0$ | Near $a$ (except possibly at $a$) |
| Right-side limit exists | Or equals $\\pm\\infty$ |

### The Two Indeterminate Quotient Forms

| Form | Example | Strategy |
|------|---------|----------|
| $0/0$ | $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ | L'Hôpital directly |
| $\\infty/\\infty$ | $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$ | L'Hôpital (may need multiple applications) |

> **Key Fact:** L'Hôpital's Rule is NOT the quotient rule. You differentiate numerator and denominator SEPARATELY.

### Example: $0/0$

$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\frac{0}{0} \\stackrel{\\text{L'H}}{=} \\lim_{x \\to 0} \\frac{e^x}{1} = 1$$

### Example: $\\infty/\\infty$

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\frac{\\infty}{\\infty} \\stackrel{\\text{L'H}}{=} \\lim_{x \\to \\infty} \\frac{1/x}{1} = 0$$`
    },
    {
      id: 'lh1-repeated',
      type: 'text' as const,
      content: `### Repeated Application

Sometimes one application still gives an indeterminate form:

$$\\lim_{x \\to \\infty} \\frac{x^3}{e^x} = \\frac{\\infty}{\\infty} \\stackrel{\\text{L'H}}{=} \\lim \\frac{3x^2}{e^x} = \\frac{\\infty}{\\infty} \\stackrel{\\text{L'H}}{=} \\lim \\frac{6x}{e^x} = \\frac{\\infty}{\\infty} \\stackrel{\\text{L'H}}{=} \\lim \\frac{6}{e^x} = 0$$

### The Growth Rate Hierarchy

$$\\boxed{\\ln x \\ll x^n \\ll e^x \\ll x! \\ll x^x \\quad \\text{as } x \\to \\infty}$$

| Limit | Result | Why |
|-------|--------|-----|
| $\\lim x^n/e^x$ | $0$ | Exponential beats polynomial |
| $\\lim \\ln x / x^p$ | $0$ ($p > 0$) | Polynomial beats logarithm |
| $\\lim x^n / n!$ | $0$ | Factorial beats polynomial |

> **AP Tip:** Knowing the hierarchy lets you state the answer immediately on MC questions without applying L'Hôpital multiple times.`
    },
    {
      id: 'lh1-mc1',
      type: 'multiple-choice' as const,
      content: '**Basic L\'Hôpital Practice**',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$',
            options: ['$3$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$0/0$. L\'H: $\\lim \\frac{3\\cos(3x)}{1} = 3$.'
          },
          {
            question: '$\\lim_{x \\to \\infty} \\frac{5x^2 + 3x}{2x^2 - 1}$',
            options: ['$5/2$ (no L\'Hôpital needed — same degree)', '$\\infty$', '$0$', '$5$'],
            correctAnswer: 0,
            explanation: 'Same-degree rational function: limit = ratio of leading coefficients = $5/2$. L\'H also works: $\\lim 10x/(4x) = 10/4 = 5/2$.'
          },
          {
            question: '$\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}$',
            options: ['$3$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$0/0$. L\'H: $\\lim \\frac{3x^2}{1} = 3$. (Or factor: $(x-1)(x^2+x+1)/(x-1) = x^2+x+1 \\to 3$.)'
          }
        ]
      }
    },
    {
      id: 'lh1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Form**',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{x^2}{\\cos x - 1}$. The indeterminate form is:',
            options: ['$0/0$', '$\\infty/\\infty$', '$0/\\infty$', 'Not indeterminate'],
            correctAnswers: ['$0/0$'],
            hints: ['$x \\to 0$: numerator $\\to 0$, denominator $\\to \\cos(0) - 1 = 0$.'],
            explanation: 'Both numerator and denominator → 0. $0/0$ form.'
          },
          {
            label: 'Applying L\'Hôpital: $\\lim \\frac{2x}{-\\sin x}$. Still $0/0$. Apply again: $\\lim \\frac{2}{-\\cos x} =$',
            options: ['$-2$', '$2$', '$0$', '$\\infty$'],
            correctAnswers: ['$-2$'],
            hints: ['$\\lim_{x \\to 0} \\frac{2}{-\\cos x} = 2/(-1) = -2$.'],
            explanation: '$\\lim \\frac{2}{-\\cos 0} = 2/(-1) = -2$.'
          }
        ]
      }
    },
    {
      id: 'lh1-input',
      type: 'input-box' as const,
      content: '**Evaluate**',
      exercise: {
        question: '$\\lim_{x \\to 0} \\frac{e^{2x} - 1}{\\sin x}$. Enter the value.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['$0/0$. L\'H: $\\lim \\frac{2e^{2x}}{\\cos x} = 2/1 = 2$.'],
        explanation: '$0/0$ form. L\'H: $\\lim 2e^{2x}/\\cos x = 2(1)/1 = 2$.'
      }
    },
    {
      id: 'lh1-summary',
      type: 'text' as const,
      content: `### Summary

- L'Hôpital: $0/0$ or $\\infty/\\infty$ → differentiate top and bottom separately
- May need multiple applications
- Growth hierarchy: $\\ln x \\ll x^n \\ll e^x$
- Always verify indeterminate form BEFORE applying

> **Next:** Part 2 — Other Indeterminate Forms.`
    }
  ]
};
