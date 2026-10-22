export const calcabInverseFunctionsPart3Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv3-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 3 of 7 \u2014 Inverse Trig Derivatives**

### The Formulas

$$\\boxed{\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}}}$$

$$\\boxed{\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}}$$

$$\\boxed{\\frac{d}{dx}[\\text{arcsec}\\,x] = \\frac{1}{|x|\\sqrt{x^2-1}}}$$

### Complete Reference

| Function | Derivative | Domain |
|:---:|:---:|:---:|
| $\\arcsin x$ | $\\frac{1}{\\sqrt{1-x^2}}$ | $(-1,1)$ |
| $\\arccos x$ | $-\\frac{1}{\\sqrt{1-x^2}}$ | $(-1,1)$ |
| $\\arctan x$ | $\\frac{1}{1+x^2}$ | $(-\\infty,\\infty)$ |

> **Key Fact:** $\\arcsin$ and $\\arccos$ have the same denominator but opposite signs. Memorize $\\arcsin$ (positive) and $\\arctan$ \u2014 the rest follow.

### With the Chain Rule

$$\\frac{d}{dx}[\\arcsin(u)] = \\frac{u'}{\\sqrt{1-u^2}}, \\qquad \\frac{d}{dx}[\\arctan(u)] = \\frac{u'}{1+u^2}$$

### Worked Example

> $\\frac{d}{dx}[\\arctan(3x)]$

$$= \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$$`
    },
    {
      id: 'inv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Inverse Trig** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$\\frac{d}{dx}[\\arcsin(2x)] = $',
            options: ['$\\frac{2}{\\sqrt{1-4x^2}}$', '$\\frac{1}{\\sqrt{1-4x^2}}$', '$\\frac{2}{1-4x^2}$', '$\\frac{-2}{\\sqrt{1-4x^2}}$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $\\frac{2}{\\sqrt{1-(2x)^2}} = \\frac{2}{\\sqrt{1-4x^2}}$.'
          },
          {
            question: '$\\frac{d}{dx}[\\arctan(x^2)] = $',
            options: ['$\\frac{2x}{1+x^4}$', '$\\frac{1}{1+x^4}$', '$\\frac{2x}{1+x^2}$', '$\\frac{x}{1+x^4}$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $u=x^2$, $u\'=2x$. $\\frac{2x}{1+(x^2)^2} = \\frac{2x}{1+x^4}$.'
          },
          {
            question: '$\\frac{d}{dx}[\\arccos x]$ compared to $\\frac{d}{dx}[\\arcsin x]$:',
            options: ['Opposite sign, same denominator', 'Same sign and the same denominator', 'Opposite sign, denominator $1+x^2$', 'Same sign, but denominator $1+x^2$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}}$ and $\\frac{d}{dx}[\\arccos x] = -\\frac{1}{\\sqrt{1-x^2}}$: same denominator, negative sign. The $1+x^2$ denominator belongs to arctangent.'
          }
        ]
      }
    },
    {
      id: 'inv3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the derivative.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}[\\arctan(5x)]$ has denominator:',
            options: ['$1+25x^2$', '$1+5x^2$', '$\\sqrt{1-25x^2}$', '$25+x^2$'],
            correctAnswers: ['$1+25x^2$'],
            hints: ['$1+(5x)^2 = 1+25x^2$.'],
            explanation: '$\\frac{5}{1+25x^2}$.'
          },
          {
            label: '$\\arcsin$ and $\\arctan$ derivatives share:',
            options: ['No common denominator', 'The factor $\\sqrt{1-x^2}$', 'The factor $1+x^2$', 'The same formula, up to sign'],
            correctAnswers: ['No common denominator'],
            hints: ['$\\arcsin$: $\\sqrt{1-x^2}$. $\\arctan$: $1+x^2$.'],
            explanation: 'Arcsine has $\\sqrt{1-x^2}$ and arctangent has $1+x^2$: completely different denominators. Only arcsine and arccosine share a formula up to sign.'
          },
          {
            label: '$\\frac{d}{dx}[\\arcsin(2x)]$ equals:',
            options: ['$\\frac{2}{\\sqrt{1-4x^2}}$', '$\\frac{1}{\\sqrt{1-4x^2}}$', '$\\frac{2}{1+4x^2}$', '$\\frac{2}{\\sqrt{1-2x^2}}$'],
            correctAnswers: ['$\\frac{2}{\\sqrt{1-4x^2}}$'],
            hints: ['$u = 2x$, so $u\' = 2$ and $u^2 = 4x^2$.'],
            explanation: '$\\frac{u\'}{\\sqrt{1-u^2}}$ with $u = 2x$ gives $\\frac{2}{\\sqrt{1-4x^2}}$. Dropping $u\'$ loses the factor $2$, $1+4x^2$ is the arctangent denominator, and $(2x)^2 = 4x^2$, not $2x^2$.'
          }
        ]
      }
    },
    {
      id: 'inv3-input',
      type: 'input-box' as const,
      content: '**Evaluate.** \u270d\ufe0f',
      exercise: {
        question: 'If $y = \\arctan(4x)$, find $y\'$ at $x = \\frac{1}{4}$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: [
          '$y\' = \\frac{4}{1+16x^2}$.',
          'At $x = 1/4$: $y\' = \\frac{4}{1+16(1/16)} = \\frac{4}{1+1}$.'
        ],
        explanation: '$y\' = \\frac{4}{1 + 16x^2}$, so $y\'(1/4) = \\frac{4}{2} = 2$.'
      }
    },
    {
      id: 'inv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- $\\frac{d}{dx}[\\arcsin u] = \\frac{u'}{\\sqrt{1-u^2}}$; $\\frac{d}{dx}[\\arctan u] = \\frac{u'}{1+u^2}$
- $\\arccos$ has the same formula as $\\arcsin$ but negative
- Preview (Unit 6): reversing these formulas gives the antiderivatives $\\arcsin x$ and $\\arctan x$
- Always apply the chain rule for compositions`
    }
  ]
};
