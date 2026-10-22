export const calcabLinearizationPart7Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin7-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Formula Reference

| Formula | Expression |
|:---:|:---:|
| Linearization | $L(x) = f(a) + f'(a)(x-a)$ |
| Differential | $dy = f'(x)\\,dx$ |
| Concave up ($f'' > 0$) | Tangent underestimates |
| Concave down ($f'' < 0$) | Tangent overestimates |

### Common Linearizations at $a = 0$

| $f(x)$ | $L(x)$ |
|:---:|:---:|
| $\\sin x$ | $x$ |
| $\\cos x$ | $1$ |
| $e^x$ | $1 + x$ |
| $\\ln(1+x)$ | $x$ |

### Common AP Mistakes

| Mistake | Correct Approach |
|:---:|:---:|
| Choosing $a$ far from $x$ | Pick $a$ as close as possible |
| Forgetting $f'(a)$ in $L(x)$ | $L(x) = f(a) + f'(a)(x-a)$, not $f(a) + (x-a)$ |
| Incomplete justification | State $f''$ sign, concavity, AND over/under |
| Confusing $dy$ and $\\Delta y$ | $dy$ = tangent line change; $\\Delta y$ = actual change |`
    },
    {
      id: 'lin7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 1 \u2014 Core Skills** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\sqrt{16.2}$ using linearization at $a = 16$.',
            options: ['$4.025$', '$4.05$', '$4.1$', '$4.2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 1/(2\\sqrt{x})$, $f\'(16) = 1/8$. $L(16.2) = 4 + \\frac{1}{8}(0.2) = 4.025$. Dropping the $\\frac{1}{2}$ gives $4.05$, using $f\' = \\frac{1}{2}$ gives $4.1$, and adding $dx$ without $f\'$ gives $4.2$.'
          },
          {
            question: '$y = e^x$, $x = 0$, $dx = 0.05$. $dy =$',
            options: ['$0.05$', '$1.05$', '$e^{0.05}$', '$e^{0.05} - 1$'],
            correctAnswer: 0,
            explanation: '$dy = f\'(0)\\,dx = e^0 \\cdot 0.05 = 0.05$. The value $e^{0.05} - 1$ is $\\Delta y$, not $dy$; $e^{0.05}$ is the new $y$-value, and $1.05$ is the tangent-line estimate of it.'
          },
          {
            question: 'Using $\\sin x \\approx x$ near $0$, $\\sin(0.1) \\approx$',
            options: ['$0.1$', '$1$', '$0.01$', '$1.1$'],
            correctAnswer: 0,
            explanation: '$\\sin x \\approx x$ for small $x$, so $\\sin(0.1) \\approx 0.1$. Using $1 + x$ (the $e^x$ linearization) gives $1.1$, squaring gives $0.01$, and $1$ is $\\cos 0$, the slope rather than the value.'
          },
          {
            question: 'Given $f(2) = 5$, $f\'(2) = -3$, $f\'\'(2) = 4 > 0$. The tangent-line approximation at $x = 2.1$ is a(n):',
            options: ['Underestimate', 'Overestimate', 'Exact value', 'Cannot tell'],
            correctAnswer: 0,
            explanation: '$f\'\' > 0$ at $a = 2$ means concave up: tangent is below the curve, giving an underestimate.'
          }
        ]
      }
    },
    {
      id: 'lin7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz Set 2 \u2014 Applications** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A sphere\'s radius grows from $10$ cm to $10.05$ cm. The differential estimate of the change in $V = \\frac{4}{3}\\pi r^3$ is:',
            options: ['$20\\pi$ cm$^3$', '$200\\pi$ cm$^3$', '$2\\pi$ cm$^3$', '$100\\pi$ cm$^3$'],
            correctAnswer: 0,
            explanation: '$dV = 4\\pi r^2 \\, dr = 4\\pi(100)(0.05) = 20\\pi$.'
          },
          {
            question: 'The linearization of $\\ln x$ at $a = e$ is:',
            options: ['$L(x) = 1 + \\frac{1}{e}(x-e)$', '$L(x) = 1 + e(x-e)$', '$L(x) = 1 + (x-e)$', '$L(x) = \\frac{1}{e}(x-e)$'],
            correctAnswer: 0,
            explanation: '$f(e) = 1$, $f\'(e) = 1/e$. $L(x) = 1 + \\frac{1}{e}(x-e)$ (which simplifies to $x/e$). Using $e$ as the slope gives $1 + e(x-e)$, using slope $1$ gives $1 + (x-e)$, and dropping $f(e)$ gives $\\frac{1}{e}(x-e)$.'
          },
          {
            question: 'If $f(1) = 4$, $f\'(1) = -2$ and $f\'\'(x) < 0$ near $x = 1$, the tangent-line estimate of $f(1.1)$ is:',
            options: ['$3.8$, an overestimate', '$3.8$, an underestimate', '$4.2$, an overestimate', '$4.2$, an underestimate'],
            correctAnswer: 0,
            explanation: '$L(1.1) = 4 - 2(0.1) = 3.8$. Concave down means the curve lies below its tangent line, so $3.8$ overestimates $f(1.1)$. Adding $0.2$ instead of subtracting gives $4.2$.'
          }
        ]
      }
    },
    {
      id: 'lin7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final review.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$L(x) = 1 + x$ approximates which function near $x = 0$?',
            options: ['$e^x$', '$\\sin x$', '$\\cos x$', '$\\ln x$'],
            correctAnswers: ['$e^x$'],
            hints: ['$f(0) = 1$, $f\'(0) = 1$.'],
            explanation: '$e^0 = 1$, $(e^x)\' = e^x$, so $f\'(0) = 1$. $L(x) = 1 + 1(x-0) = 1 + x$.'
          },
          {
            label: 'The differential $dy$ is the change along the:',
            options: ['Tangent line', 'Curve itself', 'Secant line', 'Normal line'],
            correctAnswers: ['Tangent line'],
            hints: ['$dy = f\'(x)dx$ uses the slope of the tangent.'],
            explanation: '$dy$ represents the linear change along the tangent line.'
          },
          {
            label: 'For $\\sqrt{x}$ with $f\'\'(x) < 0$, the tangent line always gives a(n):',
            options: ['Overestimate', 'Underestimate', 'Exact value', 'It depends'],
            correctAnswers: ['Overestimate'],
            hints: ['Concave down = tangent above curve.'],
            explanation: '$f\'\'(x) = -1/(4x^{3/2}) < 0$ everywhere, so the curve is concave down and tangent overestimates.'
          }
        ]
      }
    },
    {
      id: 'lin7-input',
      type: 'input-box' as const,
      content: '**Final Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'Use the linearization of $f(x) = x^3$ at $x = 2$ to approximate $(2.1)^3$. (Decimal or fraction.)',
        correctAnswer: '9.2',
        acceptableAnswers: ['9.2', '46/5'],
        hints: [
          '$f(2) = 8$, $f\'(x) = 3x^2$, $f\'(2) = 12$.',
          '$L(2.1) = 8 + 12(0.1)$.'
        ],
        explanation: '$L(2.1) = 8 + 12(0.1) = 8 + 1.2 = 9.2$.'
      }
    },
    {
      id: 'lin7-completion',
      type: 'text' as const,
      content: `### \ud83c\udf89 Topic Complete!

You've mastered **Linearization & Differentials**:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Tangent line approximation | \u2705 |
| 2 | Approximating values | \u2705 |
| 3 | Differentials | \u2705 |
| 4 | Error analysis | \u2705 |
| 5 | Applications | \u2705 |
| 6 | AP-style workshop | \u2705 |
| 7 | Comprehensive assessment | \u2705 |

> **Key Fact:** Linearization $L(x) = f(a) + f'(a)(x-a)$ is the foundation for approximation in calculus. On the AP exam, always pair your estimate with "over/underestimate" justified by concavity.`
    }
  ]
};
