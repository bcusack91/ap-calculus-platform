export const calcbcIntByPartsPart3Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp3-intro',
      type: 'text' as const,
      content: `# \u222B Integration by Parts

**Part 3 of 7 \u2014 Cycling (Boomerang) Problems**

Some IBP integrals don\u2019t simplify \u2014 instead, after two applications the original integral reappears. When this happens, you solve algebraically for the unknown integral.`
    },
    {
      id: 'ibp3-method',
      type: 'text' as const,
      content: `### The Boomerang Technique

**When does cycling occur?** When both factors regenerate under repeated differentiation and integration:
- $e^{ax} \\cdot \\sin(bx)$ or $e^{ax} \\cdot \\cos(bx)$

### Full Worked Example: $\\int e^x \\sin x\\,dx$

Let $I = \\int e^x \\sin x\\,dx$

**IBP #1:** $u = \\sin x$, $dv = e^x\\,dx$
$$I = e^x \\sin x - \\int e^x \\cos x\\,dx$$

**IBP #2:** $u = \\cos x$, $dv = e^x\\,dx$
$$I = e^x \\sin x - \\left[e^x \\cos x - \\int e^x(-\\sin x)\\,dx\\right]$$
$$I = e^x \\sin x - e^x \\cos x - \\int e^x \\sin x\\,dx$$
$$I = e^x \\sin x - e^x \\cos x - I$$

**Solve for $I$:**
$$2I = e^x(\\sin x - \\cos x)$$

$$\\boxed{\\int e^x \\sin x\\,dx = \\frac{e^x(\\sin x - \\cos x)}{2} + C}$$

> **Key Fact:** You MUST use the same type of choice for $u$ in both applications (both times pick trig, or both times pick exponential). Mixing causes an infinite loop.`
    },
    {
      id: 'ibp3-general',
      type: 'text' as const,
      content: `### General Formula for $e^{ax}$ \u00d7 Trig

$$\\boxed{\\int e^{ax}\\sin(bx)\\,dx = \\frac{e^{ax}(a\\sin(bx) - b\\cos(bx))}{a^2 + b^2} + C}$$

$$\\boxed{\\int e^{ax}\\cos(bx)\\,dx = \\frac{e^{ax}(a\\cos(bx) + b\\sin(bx))}{a^2 + b^2} + C}$$

| Integral | $a$ | $b$ | Denominator $a^2+b^2$ |
|----------|-----|-----|----------------------|
| $\\int e^x \\sin x\\,dx$ | 1 | 1 | 2 |
| $\\int e^{2x} \\cos(3x)\\,dx$ | 2 | 3 | 13 |
| $\\int e^{-x} \\sin(2x)\\,dx$ | $-1$ | 2 | 5 |

> **AP Tip:** Memorizing the general formula can save 3\u20134 minutes on a free-response question. But you should know how to derive it via IBP cycling.`
    },
    {
      id: 'ibp3-mc1',
      type: 'multiple-choice' as const,
      content: '**Cycling IBP Practice**',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int e^x \\cos x\\,dx$.',
            options: [
              '$\\frac{e^x(\\sin x + \\cos x)}{2} + C$',
              '$\\frac{e^x(\\cos x - \\sin x)}{2} + C$',
              '$e^x \\cos x + C$',
              '$e^x \\sin x + C$'
            ],
            correctAnswer: 0,
            explanation: 'Using the general formula with $a = 1$, $b = 1$: $\\frac{e^x(1 \\cdot \\cos x + 1 \\cdot \\sin x)}{1 + 1} = \\frac{e^x(\\cos x + \\sin x)}{2} + C$.'
          },
          {
            question: 'What is $\\int e^{2x}\\sin x\\,dx$?',
            options: [
              '$\\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$',
              '$\\frac{e^{2x}(\\sin x - 2\\cos x)}{5} + C$',
              '$\\frac{e^{2x}\\sin x}{3} + C$',
              '$\\frac{e^{2x}(2\\sin x + \\cos x)}{5} + C$'
            ],
            correctAnswer: 0,
            explanation: 'With $a=2$, $b=1$: $\\frac{e^{2x}(2\\sin x - 1\\cos x)}{4+1} = \\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Technique**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int e^{3x}\\cos(5x)\\,dx$ requires:',
            options: ['Tabular method', 'Cycling IBP', 'u-substitution', 'Partial fractions'],
            correctAnswers: ['Cycling IBP'],
            hints: ['Neither $e^{3x}$ nor $\\cos(5x)$ differentiates to 0.'],
            explanation: 'Both factors regenerate under differentiation/integration. This cycles after 2 applications. Denominator = $3^2 + 5^2 = 34$.'
          },
          {
            label: 'After two IBP applications on $\\int e^{-x}\\sin(2x)\\,dx$, the equation becomes $I = \\ldots - I$. The denominator in the final answer is:',
            options: ['2', '3', '4', '5'],
            correctAnswers: ['5'],
            hints: ['$a = -1$, $b = 2$. The denominator is $a^2 + b^2$.'],
            explanation: '$a^2 + b^2 = (-1)^2 + 2^2 = 1 + 4 = 5$.'
          }
        ]
      }
    },
    {
      id: 'ibp3-input',
      type: 'input-box' as const,
      content: '**Cycling Computation**',
      exercise: {
        question: 'For $\\int e^{3x}\\cos(2x)\\,dx$, the denominator in the general formula is $a^2 + b^2$. What is this denominator?',
        correctAnswer: '13',
        acceptableAnswers: ['13'],
        hints: ['$a = 3$, $b = 2$.', '$3^2 + 2^2 = 9 + 4 = ?$'],
        explanation: '$a^2 + b^2 = 9 + 4 = 13$. The answer is $\\frac{e^{3x}(3\\cos 2x + 2\\sin 2x)}{13} + C$.'
      }
    },
    {
      id: 'ibp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Concept | Details |
|---------|---------|
| Cycling occurs | When both factors regenerate ($e^{ax}$ \u00d7 trig) |
| Strategy | Apply IBP twice, then solve for $I$ algebraically |
| General sine formula | $\\frac{e^{ax}(a\\sin bx - b\\cos bx)}{a^2+b^2} + C$ |
| General cosine formula | $\\frac{e^{ax}(a\\cos bx + b\\sin bx)}{a^2+b^2} + C$ |
| Critical rule | Use the SAME $u$-type both times |

> **Coming Up:** Part 4 applies IBP to **definite integrals** \u2014 including evaluating bounds correctly.`
    }
  ]
};
