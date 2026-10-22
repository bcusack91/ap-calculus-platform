export const calcabLhopitalsRulePart1Data = {
  topicSlug: 'lhopitals-rule',
  sections: [
    {
      id: 'lh1-intro',
      type: 'text' as const,
      content: `# L'Hospital's Rule

**Part 1 of 5 — Indeterminate Forms and the Rule**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Indeterminate forms and the rule** |
| 2 | $\\frac{0}{0}$ limits, including repeated use |
| 3 | $\\frac{\\infty}{\\infty}$ limits and growth rates |
| 4 | Limits from tables and graphs, and justification |
| 5 | Traps and final assessment |

### When Direct Substitution Gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$

Substituting into $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ can give:

| Result of substitution | What it means |
|:---:|:---|
| A number over a nonzero number | That quotient is the limit |
| A nonzero number over $0$ | Unbounded: the limit is $\\pm\\infty$ or does not exist |
| $\\frac{0}{0}$ | **Indeterminate**: more work is needed |
| $\\frac{\\infty}{\\infty}$ (any signs) | **Indeterminate**: more work is needed |

On the AP exam, L'Hospital's Rule is used for exactly these two indeterminate forms, $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$.`
    },
    {
      id: 'lh1-rule',
      type: 'text' as const,
      content: `## L'Hospital's Rule

Suppose $f$ and $g$ are differentiable near $x = a$ (except possibly at $a$), with $g'(x) \\ne 0$ near $a$, and

$$\\lim_{x \\to a} f(x) = 0 \\text{ and } \\lim_{x \\to a} g(x) = 0 \\quad \\text{or} \\quad \\lim_{x \\to a} f(x) = \\pm\\infty \\text{ and } \\lim_{x \\to a} g(x) = \\pm\\infty.$$

Then

$$\\boxed{\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}}$$

provided the limit on the right exists (or is $\\pm\\infty$). The same holds for one-sided limits and for $x \\to \\pm\\infty$.

### Two Things to Check First

1. **The form:** both limits are $0$, or both are infinite. If not, the rule does not apply.
2. **Differentiability:** you will differentiate the numerator and the denominator.

### Worked Example

> $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$

Check: $\\sin(0) = 0$ and the denominator is $0$, so the form is $\\frac{0}{0}$.

$$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{x \\to 0} \\frac{3\\cos(3x)}{1} = 3$$

> **Key Fact:** Differentiate the numerator and the denominator **separately**. This is NOT the quotient rule.`
    },
    {
      id: 'lh1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Check the form first** 🎯',
      exercise: {
        questions: [
          {
            question: 'For which limit does direct substitution give an indeterminate form?',
            options: ['$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$', '$\\lim_{x \\to 0} \\frac{\\cos x}{x + 1}$', '$\\lim_{x \\to 1} \\frac{\\ln x}{x + 1}$', '$\\lim_{x \\to 0} \\frac{x + 1}{e^x}$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$, $e^0 - 1 = 0$ and the denominator is $0$: the form $\\frac{0}{0}$. The others substitute to $\\frac{1}{1}$, $\\frac{0}{2}$ and $\\frac{1}{1}$, which are ordinary numbers, so those limits are $1$, $0$ and $1$.'
          },
          {
            question: 'What is $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$?',
            options: ['$2$', '$1$', '$\\frac{1}{2}$', '$0$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{0}{0}$. The rule gives $\\lim_{x \\to 0} \\frac{2e^{2x}}{1} = 2$. Forgetting the chain-rule factor $2$ gives $1$, and $0$ comes from substituting into the numerator alone.'
          },
          {
            question: 'Applying L\'Hospital\'s Rule to $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ means taking the limit of:',
            options: ['$\\frac{f\'(x)}{g\'(x)}$', '$\\left(\\frac{f(x)}{g(x)}\\right)\'$', '$\\frac{f\'(x)}{g(x)}$', '$\\frac{f(x)}{g\'(x)}$'],
            correctAnswer: 0,
            explanation: 'The rule replaces the quotient by the quotient of the derivatives, $\\frac{f\'(x)}{g\'(x)}$. The derivative of the quotient (quotient rule) is a different expression, and differentiating only one part is not the rule.'
          }
        ]
      }
    },
    {
      id: 'lh1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify before you compute.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{\\sin x}{x}$: substitution gives',
            options: ['$\\frac{0}{0}$, so the rule applies', '$\\frac{\\infty}{\\infty}$, so the rule applies', 'A number, so no rule needed', 'Nonzero over $0$: unbounded'],
            correctAnswers: ['$\\frac{0}{0}$, so the rule applies'],
            hints: ['$\\sin 0 = 0$.'],
            explanation: 'Both $\\sin 0$ and $0$ are zero, so the form is $\\frac{0}{0}$; the rule gives $\\frac{\\cos x}{1} \\to 1$.'
          },
          {
            label: '$\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$: substitution gives',
            options: ['$\\frac{0}{0}$, so the rule applies', '$\\frac{\\infty}{\\infty}$, so the rule applies', 'A number, so no rule needed', 'Nonzero over $0$: unbounded'],
            correctAnswers: ['$\\frac{\\infty}{\\infty}$, so the rule applies'],
            hints: ['Both $x^2$ and $e^x$ grow without bound.'],
            explanation: 'Both the numerator and the denominator grow without bound, so the form is $\\frac{\\infty}{\\infty}$.'
          },
          {
            label: '$\\lim_{x \\to 0} \\frac{\\cos x}{1 + x}$: substitution gives',
            options: ['$\\frac{0}{0}$, so the rule applies', '$\\frac{\\infty}{\\infty}$, so the rule applies', 'A number, so no rule needed', 'Nonzero over $0$: unbounded'],
            correctAnswers: ['A number, so no rule needed'],
            hints: ['$\\cos 0 = 1$.'],
            explanation: 'Substitution gives $\\frac{1}{1} = 1$, which is the limit. Applying the rule anyway would give $\\frac{-\\sin x}{1} \\to 0$, a wrong answer.'
          }
        ]
      }
    },
    {
      id: 'lh1-input',
      type: 'input-box' as const,
      content: '**Apply the rule.** ✍️',
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$. (Decimal or fraction.)',
        correctAnswer: '5/2',
        acceptableAnswers: ['5/2', '2.5'],
        hints: [
          'Check the form: $\\frac{0}{0}$.',
          'Differentiate separately: $\\frac{5\\cos(5x)}{2}$.'
        ],
        explanation: 'The form is $\\frac{0}{0}$, so $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x} = \\lim_{x \\to 0} \\frac{5\\cos(5x)}{2} = \\frac{5}{2}$.'
      }
    },
    {
      id: 'lh1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- L'Hospital's Rule is for $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ only
- Check the form **before** using it
- Replace $\\frac{f}{g}$ by $\\frac{f'}{g'}$: two separate derivatives, never the quotient rule
- If substitution gives an ordinary number, that number is the limit

> **Up Next:** Part 2 — $\\frac{0}{0}$ limits, including using the rule more than once.`
    }
  ]
};
