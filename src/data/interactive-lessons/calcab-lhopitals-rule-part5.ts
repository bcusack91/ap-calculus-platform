export const calcabLhopitalsRulePart5Data = {
  topicSlug: 'lhopitals-rule',
  sections: [
    {
      id: 'lh5-intro',
      type: 'text' as const,
      content: `# L'Hospital's Rule

**Part 5 of 5 — Common Traps and Final Assessment**

### Trap 1: Using the Rule When the Form Is Not Indeterminate

> $\\lim_{x \\to 0} \\frac{\\cos x}{1 + x}$

Substitution gives $\\frac{1}{1} = 1$, which **is** the limit. Differentiating anyway gives $\\frac{-\\sin x}{1} \\to 0$, a wrong answer. The rule's conclusion is only guaranteed for $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$.

### Trap 2: Using the Quotient Rule

The rule uses $\\frac{f'(x)}{g'(x)}$, two separate derivatives. The quotient rule computes $\\left(\\frac{f}{g}\\right)'$, a different expression that does not give the limit.

### Trap 3: Applying It Again After the Form Is Gone

> $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2 + x}$

Once: $\\frac{\\sin x}{2x + 1}$. Substitution now gives $\\frac{0}{1} = 0$, so the limit is $0$. Applying the rule a second time would give $\\frac{\\cos x}{2} \\to \\frac{1}{2}$, which is wrong.

### Trap 4: Skipping the Justification

On free response, state that the numerator and the denominator both approach $0$ (or both are infinite) **before** using the rule.

| Trap | Fix |
|:---|:---|
| Not indeterminate | Substitute first; if you get a number, stop |
| Quotient rule | Differentiate top and bottom separately |
| One step too many | Re-check the form after every application |
| No justification | Name both limits, then apply the rule |`
    },
    {
      id: 'lh5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{x + \\sin x}{x}$.',
            options: ['$2$', '$1$', '$0$', 'It does not exist'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{0}{0}$. The rule gives $\\frac{1 + \\cos x}{1} \\to 2$. Treating $\\frac{\\sin x}{x}$ as the only term gives $1$.'
          },
          {
            question: 'A student writes $\\lim_{x \\to 1} \\frac{x^2 + 1}{x + 3} = \\lim_{x \\to 1} \\frac{2x}{1} = 2$. What went wrong?',
            options: ['The form is not indeterminate; the limit is $\\frac{1}{2}$', 'The quotient rule was needed; the limit is $\\frac{1}{4}$', 'Nothing; the limit is $2$', 'The rule must be applied twice; the limit is $0$'],
            correctAnswer: 0,
            explanation: 'Substitution gives $\\frac{2}{4} = \\frac{1}{2}$, an ordinary number, so the rule does not apply and the limit is $\\frac{1}{2}$. The quotient rule never computes a limit like this, and no second application is allowed.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$0$', '$1$'],
            correctAnswer: 0,
            explanation: 'Once: $\\frac{\\sec^2 x - 1}{3x^2} = \\frac{\\tan^2 x}{3x^2}$, still $\\frac{0}{0}$. Since $\\frac{\\tan x}{x} \\to 1$, the limit is $\\frac{1}{3}$. The value $\\frac{1}{6}$ belongs to $\\frac{x - \\sin x}{x^3}$.'
          }
        ]
      }
    },
    {
      id: 'lh5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Assessment — Set 2** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2}{e^{2x}}$.',
            options: ['$0$', '$\\infty$', '$\\frac{3}{2}$', '$\\frac{3}{4}$'],
            correctAnswer: 0,
            explanation: 'Twice: $\\frac{6x}{2e^{2x}} \\to \\frac{6}{4e^{2x}} \\to 0$. Stopping at the constant $\\frac{6}{4}$ and dropping $e^{2x}$ gives $\\frac{3}{2}$.'
          },
          {
            question: 'Which limit can L\'Hospital\'s Rule be applied to directly?',
            options: ['$\\lim_{x \\to \\infty} \\frac{\\ln(x^2)}{x}$', '$\\lim_{x \\to 0} \\frac{e^x}{x + 1}$', '$\\lim_{x \\to 0^+} \\frac{\\ln x}{x}$', '$\\lim_{x \\to 2} \\frac{x - 2}{x + 2}$'],
            correctAnswer: 0,
            explanation: 'As $x \\to \\infty$, $\\ln(x^2) \\to \\infty$ and $x \\to \\infty$: the form $\\frac{\\infty}{\\infty}$. The others are $\\frac{1}{1}$, $\\frac{-\\infty}{0^+}$ (unbounded, not indeterminate) and $\\frac{0}{4}$.'
          },
          {
            question: '$f$ and $g$ have continuous derivatives, $f(0) = g(0) = 0$, $f\'(0) = 4$ and $g\'(0) = 0$. What can you conclude about $\\lim_{x \\to 0} \\frac{f(x)}{g(x)}$?',
            options: ['It is not a finite number', 'It equals $4$', 'It equals $0$', 'It equals $\\frac{1}{4}$'],
            correctAnswer: 0,
            explanation: 'The form is $\\frac{0}{0}$, and $\\frac{f\'(x)}{g\'(x)}$ has numerator near $4$ and denominator near $0$, so it is unbounded: the original limit is $\\pm\\infty$ or does not exist, not a finite number. Using $f\'(0)$ alone gives $4$.'
          }
        ]
      }
    },
    {
      id: 'lh5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Spot the trap.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2 + x} = $',
            options: ['$0$', '$\\frac{1}{2}$', '$1$', 'Does not exist'],
            correctAnswers: ['$0$'],
            hints: ['After one application the form is $\\frac{0}{1}$.'],
            explanation: 'One application gives $\\frac{\\sin x}{2x + 1} \\to \\frac{0}{1} = 0$. A second application is not allowed and gives the wrong value $\\frac{1}{2}$.'
          },
          {
            label: '$\\lim_{x \\to 0} \\frac{\\sin(4x)}{\\sin(2x)} = $',
            options: ['$2$', '$\\frac{1}{2}$', '$1$', '$4$'],
            correctAnswers: ['$2$'],
            hints: ['The form is $\\frac{0}{0}$; differentiate each with the chain rule.'],
            explanation: '$\\frac{4\\cos(4x)}{2\\cos(2x)} \\to \\frac{4}{2} = 2$.'
          }
        ]
      }
    },
    {
      id: 'lh5-input',
      type: 'input-box' as const,
      content: '**Final challenge.** ✍️',
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 0} \\frac{e^{x} - e^{-x}}{\\sin x}$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          'Check the form: $\\frac{1 - 1}{0} = \\frac{0}{0}$.',
          'Differentiate: $\\frac{e^x + e^{-x}}{\\cos x}$.'
        ],
        explanation: 'The form is $\\frac{0}{0}$. The rule gives $\\frac{e^x + e^{-x}}{\\cos x} \\to \\frac{1 + 1}{1} = 2$.'
      }
    },
    {
      id: 'lh5-completion',
      type: 'text' as const,
      content: `### L'Hospital's Rule — Complete! 🎓

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | Indeterminate forms and the rule | ✅ |
| 2 | $\\frac{0}{0}$ limits, including repeated use | ✅ |
| 3 | $\\frac{\\infty}{\\infty}$ limits and growth rates | ✅ |
| 4 | Tables, graphs and justification | ✅ |
| 5 | Traps and final assessment | ✅ |

> **Key Fact:** Check the form, differentiate the top and the bottom separately, and re-check the form after every step.`
    }
  ]
};
