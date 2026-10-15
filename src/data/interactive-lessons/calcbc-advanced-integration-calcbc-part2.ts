export const calcbcAdvIntegrationPart2Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'ai2-intro',
      type: 'text' as const,
      content: `# Integration by Parts in Depth

**Part 2 of 7 — Repeated, Tabular, and Circular Integration by Parts**

### The Formula

$$\\boxed{\\int u\\,dv = uv - \\int v\\,du}$$

Choose $u$ so that it gets simpler when differentiated, and $dv$ so that you can integrate it. The **LIATE** order (Logarithmic, Inverse trig, Algebraic, Trig, Exponential) suggests which factor to call $u$: pick the type that comes first.

| Integral | $u$ | $dv$ |
|------|----------|----------|
| $\\int x e^{2x}\\,dx$ | $x$ | $e^{2x}\\,dx$ |
| $\\int x \\ln x\\,dx$ | $\\ln x$ | $x\\,dx$ |
| $\\int \\arctan x\\,dx$ | $\\arctan x$ | $dx$ |
| $\\int x^2 \\cos x\\,dx$ | $x^2$ (twice) | $\\cos x\\,dx$ |

> **Key Fact:** When the integrand is a single log or inverse trig function, take $dv = dx$. For example, $\\int \\ln x\\,dx = x\\ln x - x + C$.`
    },
    {
      id: 'ai2-example',
      type: 'text' as const,
      content: `### Repeated Parts with the Tabular Method

$\\int x^2 e^x\\,dx$ needs parts twice. The tabular method organizes the work: differentiate $u$ down to $0$, integrate $dv$ the same number of times, and alternate signs starting with $+$.

| Sign | Derivatives of $x^2$ | Integrals of $e^x$ |
|------|------|------|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| | $0$ | |

Multiply along the diagonals:

$$\\int x^2 e^x\\,dx = x^2e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$$

### A Definite Integral by Parts

$$\\int_1^e \\ln x\\,dx = \\Big[x\\ln x - x\\Big]_1^e = (e - e) - (0 - 1) = 1$$`
    },
    {
      id: 'ai2-mc',
      type: 'multiple-choice' as const,
      content: '**Check Your Understanding**',
      exercise: {
        questions: [
          {
            question: 'For $\\int x \\ln x\\,dx$, the best choice of parts is:',
            options: ['$u = \\ln x$, $dv = x\\,dx$', '$u = x$, $dv = \\ln x\\,dx$', '$u = x\\ln x$, $dv = dx$', '$u = \\ln x$, $dv = dx$'],
            correctAnswer: 0,
            explanation: 'Differentiating $\\ln x$ gives the simpler $\\frac{1}{x}$, and $x\\,dx$ integrates to $\\frac{x^2}{2}$, leaving $\\int \\frac{x}{2}\\,dx$. Taking $dv = \\ln x\\,dx$ forces you to integrate $\\ln x$ first, $u = x\\ln x$ makes $du$ more complicated, and $u = \\ln x$ with $dv = dx$ leaves out the factor $x$ entirely.'
          },
          {
            question: '$\\int x^2 e^x\\,dx =$',
            options: ['$e^x(x^2 - 2x + 2) + C$', '$e^x(x^2 + 2x + 2) + C$', '$e^x(x^2 - 2x) + C$', '$\\frac{x^3}{3}e^x + C$'],
            correctAnswer: 0,
            explanation: 'Tabular: $x^2e^x - 2xe^x + 2e^x + C$. Forgetting to alternate signs gives $+2x$, stopping after one round of parts drops the $+2$, and $\\frac{x^3}{3}e^x$ integrates the two factors separately.'
          },
          {
            question: '$\\int \\arctan x\\,dx =$',
            options: ['$x\\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C$', '$x\\arctan x + \\frac{1}{2}\\ln(1 + x^2) + C$', '$x\\arctan x - \\ln(1 + x^2) + C$', '$\\frac{1}{1 + x^2} + C$'],
            correctAnswer: 0,
            explanation: 'Take $u = \\arctan x$, $dv = dx$: $x\\arctan x - \\int \\frac{x}{1 + x^2}\\,dx = x\\arctan x - \\frac{1}{2}\\ln(1 + x^2) + C$. A plus sign forgets the minus in $uv - \\int v\\,du$, dropping the $\\frac{1}{2}$ misses the factor from $du = 2x\\,dx$, and $\\frac{1}{1 + x^2}$ is the derivative of $\\arctan x$, not its antiderivative.'
          }
        ]
      }
    },
    {
      id: 'ai2-circular',
      type: 'text' as const,
      content: `### Circular Integration by Parts

For $e^x$ times $\\sin x$ or $\\cos x$, neither factor ever differentiates to $0$. Apply parts twice, then solve for the original integral.

Let $I = \\int e^x \\cos x\\,dx$.

| Step | Work |
|------|------|
| Parts with $u = \\cos x$, $dv = e^x\\,dx$ | $I = e^x\\cos x + \\int e^x\\sin x\\,dx$ |
| Parts again with $u = \\sin x$, $dv = e^x\\,dx$ | $\\int e^x\\sin x\\,dx = e^x\\sin x - I$ |
| Combine | $I = e^x\\cos x + e^x\\sin x - I$ |
| Solve for $I$ | $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$ |

> **AP Tip:** Keep the same type of function as $u$ in both rounds (trig both times here). Switching to $u = e^x$ in the second round undoes the first step. Trigonometric substitution and reduction formulas for powers of sine and cosine are not tested on the AP Calculus BC exam.`
    },
    {
      id: 'ai2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Parts Strategy**',
      exercise: {
        dropdowns: [
          {
            label: 'In the tabular method for $\\int x^3 e^{2x}\\,dx$, you stop differentiating when:',
            options: ['The derivative column reaches $0$', 'The integral column repeats', 'You have completed two rows', 'The signs stop alternating'],
            correctAnswers: ['The derivative column reaches $0$'],
            hints: ['Differentiate $x^3$ until nothing is left.'],
            explanation: '$x^3 \\to 3x^2 \\to 6x \\to 6 \\to 0$. Once the derivative is $0$, every later product is $0$, so the table is complete after four nonzero rows.'
          },
          {
            label: 'Two rounds of parts on $I = \\int e^x \\sin x\\,dx$ give $I = e^x\\sin x - e^x\\cos x - I$. So $I =$',
            options: ['$\\frac{e^x(\\sin x - \\cos x)}{2} + C$', '$e^x(\\sin x - \\cos x) + C$', '$\\frac{e^x(\\sin x + \\cos x)}{2} + C$', '$0$'],
            correctAnswers: ['$\\frac{e^x(\\sin x - \\cos x)}{2} + C$'],
            hints: ['Add $I$ to both sides, then divide by $2$.'],
            explanation: '$2I = e^x(\\sin x - \\cos x)$, so $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$. Not dividing by $2$ forgets to solve for $I$, and $I - I = 0$ is a sign slip: the $I$ terms are on opposite sides.'
          },
          {
            label: '$\\int_0^{\\pi} x\\cos x\\,dx =$',
            options: ['$-2$', '$2$', '$0$', '$\\pi$'],
            correctAnswers: ['$-2$'],
            hints: ['With $u = x$, $dv = \\cos x\\,dx$: the antiderivative is $x\\sin x + \\cos x$.'],
            explanation: '$\\Big[x\\sin x + \\cos x\\Big]_0^{\\pi} = (0 - 1) - (0 + 1) = -2$.'
          }
        ]
      }
    },
    {
      id: 'ai2-input',
      type: 'input-box' as const,
      content: '**Practice**',
      exercise: {
        question: 'Evaluate $\\int_0^1 x e^{2x}\\,dx$. Give the exact answer in terms of $e$ (or a decimal to three places).',
        correctAnswer: '(e^2+1)/4',
        acceptableAnswers: ['(e^2+1)/4', '(e^2 + 1)/4', '(1+e^2)/4', 'e^2/4+1/4', '2.097'],
        hints: ['$u = x$, $dv = e^{2x}\\,dx$, so $v = \\frac{1}{2}e^{2x}$.', 'The antiderivative is $\\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x}$.'],
        explanation: '$\\Big[\\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x}\\Big]_0^1 = \\left(\\frac{e^2}{2} - \\frac{e^2}{4}\\right) - \\left(0 - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4} \\approx 2.097$.'
      }
    },
    {
      id: 'ai2-summary',
      type: 'text' as const,
      content: `### Key Strategies

$$\\boxed{\\int u\\,dv = uv - \\int v\\,du}$$

| Situation | Strategy |
|-----------------|-----------------|
| Polynomial times $e^{ax}$, $\\sin$, or $\\cos$ | Tabular method; polynomial is $u$ |
| Single $\\ln x$ or $\\arctan x$ | $u$ = that function, $dv = dx$ |
| $e^{ax}$ times $\\sin$ or $\\cos$ | Parts twice, then solve for the integral |
| Definite integral | Evaluate $uv$ at the bounds too |

**Next: Part 3 — Long Division, Completing the Square, and Algebraic Manipulation**`
    }
  ]
};
