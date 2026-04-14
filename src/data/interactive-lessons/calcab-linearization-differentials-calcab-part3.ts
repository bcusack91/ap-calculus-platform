export const calcabLinearizationPart3Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin3-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 3 of 7 \u2014 Differentials**

### Differentials vs. Derivatives

$$\\boxed{dy = f'(x)\\,dx}$$

| Concept | Notation | Meaning |
|:---:|:---:|:---:|
| Derivative | $\\frac{dy}{dx} = f'(x)$ | Instantaneous rate of change |
| Differential of $y$ | $dy = f'(x)\\,dx$ | Approximate change in $y$ |
| Actual change | $\\Delta y = f(x+\\Delta x) - f(x)$ | Exact change in $y$ |

### Relationship

$$\\Delta y \\approx dy \\quad \\text{when } dx = \\Delta x \\text{ is small}$$

The differential $dy$ is the change along the **tangent line**. The actual change $\\Delta y$ is the change along the **curve**.

### Worked Example

> $y = x^3$. Find $dy$ when $x = 2$ and $dx = 0.01$.

$$dy = f'(x)\\,dx = 3x^2\\,dx = 3(4)(0.01) = 0.12$$

Actual change: $\\Delta y = (2.01)^3 - 8 = 8.120601 - 8 = 0.120601$

$dy = 0.12$ vs $\\Delta y \\approx 0.1206$ \u2014 very close!

> **Key Fact:** $dy$ is a linear approximation to $\\Delta y$. The smaller $dx$, the better the approximation.`
    },
    {
      id: 'lin3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Differentials** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$y = \\sqrt{x}$, $x = 25$, $dx = 1$. Find $dy$.',
            options: ['$0.1$', '$0.5$', '$1$', '$5$'],
            correctAnswer: 0,
            explanation: '$dy = \\frac{1}{2\\sqrt{x}}dx = \\frac{1}{10}(1) = 0.1$.'
          },
          {
            question: 'The differential $dy$ represents the change along the:',
            options: ['Tangent line', 'Curve itself', 'Secant line', 'Normal line'],
            correctAnswer: 0,
            explanation: '$dy = f\'(x)dx$ uses the tangent line slope, so $dy$ is the tangent-line change.'
          },
          {
            question: 'If $y = \\sin x$, then $dy =$',
            options: ['$\\cos x\\,dx$', '$-\\sin x\\,dx$', '$\\sin x\\,dx$', '$\\cos x$'],
            correctAnswer: 0,
            explanation: '$dy = f\'(x)\\,dx = \\cos x\\,dx$.'
          }
        ]
      }
    },
    {
      id: 'lin3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Compare $dy$ and $\\Delta y$.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'For $y = x^2$, $x = 3$, $dx = 0.5$: $dy =$',
            options: ['$3$', '$3.25$', '$6$', '$0.5$'],
            correctAnswers: ['$3$'],
            hints: ['$dy = 2x\\,dx = 2(3)(0.5)$.'],
            explanation: '$dy = 6(0.5) = 3$.'
          },
          {
            label: 'Same setup: $\\Delta y = (3.5)^2 - 9 =$',
            options: ['$3.25$', '$3$', '$3.5$', '$2.75$'],
            correctAnswers: ['$3.25$'],
            hints: ['$3.5^2 = 12.25$. $12.25 - 9 = ?$'],
            explanation: '$\\Delta y = 12.25 - 9 = 3.25$. Note $dy = 3 \\neq 3.25 = \\Delta y$.'
          },
          {
            label: 'The difference $\\Delta y - dy$ is:',
            options: ['$0.25$', '$0$', '$-0.25$', '$3$'],
            correctAnswers: ['$0.25$'],
            hints: ['$3.25 - 3 = ?$'],
            explanation: '$\\Delta y - dy = 3.25 - 3 = 0.25$. This error shrinks as $dx \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'lin3-input',
      type: 'input-box' as const,
      content: '**Compute the differential.** \u270d\ufe0f',
      exercise: {
        question: '$y = x^3 + 2x$. Find $dy$ when $x = 1$ and $dx = 0.1$.\n\nIf $dy = \\frac{a}{b}$ in lowest terms, find $a + b$.\n\n(Enter an integer.)',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$dy = (3x^2 + 2)\\,dx$.',
          'At $x=1$: $dy = (3 + 2)(0.1) = 5(0.1) = 0.5$.',
          '$0.5 = 1/2$. $a + b = 1 + 2 = 3$.'
        ],
        explanation: '$dy = 5(0.1) = 0.5 = 1/2$. $a + b = 1 + 2 = 3$.'
      }
    },
    {
      id: 'lin3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- $dy = f'(x)\\,dx$ is the differential (change along tangent)
- $\\Delta y = f(x+dx) - f(x)$ is the actual change
- $dy \\approx \\Delta y$ for small $dx$
- The derivative $dy/dx$ is the ratio of differentials`
    }
  ]
};
