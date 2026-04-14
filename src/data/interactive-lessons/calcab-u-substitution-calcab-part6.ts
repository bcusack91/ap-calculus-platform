export const calcabUSubPart6Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub6-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 6 of 7 — Problem-Solving Workshop**

### Integration Strategy Flowchart

| Step | Question | Action |
|:---:|:---:|:---:|
| 1 | Is it a known basic form? | $\\int x^n, e^x, \\sin x$, etc. — integrate directly |
| 2 | Can you simplify algebraically? | Expand, factor, split fractions, trig identities |
| 3 | Is it $\\int f(g(x))g'(x)\\,dx$? | u-substitution |
| 4 | Is the fraction improper? | Long division first |
| 5 | Irreducible quadratic in denominator? | Complete the square $\\to \\arctan/\\arcsin$ |
| 6 | Is $\\frac{f'}{f}$ present? | $\\to \\ln|f| + C$ |
| 7 | Linear argument $(ax+b)$? | Linear shortcut: $\\frac{1}{a}F(ax+b)$ |`
    },
    {
      id: 'usub6-worked',
      type: 'text' as const,
      content: `### Worked Examples — Full Solutions

**Example 1:** $\\int \\frac{x^3}{x^2+1}\\,dx$

Long division: $\\frac{x^3}{x^2+1} = x - \\frac{x}{x^2+1}$

$$\\int x\\,dx - \\int \\frac{x}{x^2+1}\\,dx = \\frac{x^2}{2} - \\frac{1}{2}\\ln(x^2+1) + C$$

For the second integral: $u = x^2+1$, $du = 2x\\,dx$.

---

**Example 2:** $\\int \\frac{\\sin x}{1 + \\cos^2 x}\\,dx$

$u = \\cos x$, $du = -\\sin x\\,dx$:

$$-\\int \\frac{du}{1+u^2} = -\\arctan(\\cos x) + C$$

---

**Example 3:** $\\int x e^{x^2}\\,dx$

$u = x^2$, $du = 2x\\,dx$:

$$\\frac{1}{2}\\int e^u\\,du = \\frac{e^{x^2}}{2} + C$$

---

**Example 4:** $\\int \\frac{e^x - e^{-x}}{e^x + e^{-x}}\\,dx$

Recognize $f'/f$ pattern: the numerator IS the derivative of the denominator!

$$= \\ln|e^x + e^{-x}| + C = \\ln(e^x + e^{-x}) + C$$

> **AP Tip:** This is $\\int \\tanh x\\,dx$ (hyperbolic tangent). The $f'/f$ pattern saves enormous work.`
    },
    {
      id: 'usub6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Classify and solve.** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{3x+2}{x^2+4}\\,dx$ should be split as:',
            options: ['$\\frac{3}{2}\\ln(x^2+4) + \\arctan(x/2) + C$', '$3\\ln(x^2+4) + 2\\arctan(x/2) + C$', '$\\frac{3}{2}\\ln(x^2+4) + \\frac{1}{2}\\arctan(x/2) + C$', '$3\\arctan(x/2) + \\ln(x^2+4) + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\frac{3x}{x^2+4} + \\frac{2}{x^2+4}$. First: $u=x^2+4 \\to \\frac{3}{2}\\ln(x^2+4)$. Second: $\\frac{2}{x^2+4} = \\frac{1}{2} \\cdot \\frac{2}{x^2+4} \\to \\arctan(x/2)$.'
          },
          {
            question: 'Which integral CANNOT be evaluated using AB techniques?',
            options: ['$\\int x\\cos(x^2)\\,dx$', '$\\int \\cos^2(x)\\,dx$', '$\\int e^{x^2}\\,dx$', '$\\int \\frac{\\ln x}{x}\\,dx$'],
            correctAnswer: 2,
            explanation: '$\\int e^{x^2}\\,dx$ has no elementary antiderivative. The others can be done with u-sub or trig identities.'
          },
          {
            question: '$\\int \\frac{4}{(3x+1)^5}\\,dx$ equals:',
            options: ['$-\\frac{1}{3(3x+1)^4} + C$', '$-\\frac{4}{3(3x+1)^4} + C$', '$\\frac{4}{3(3x+1)^4} + C$', '$-\\frac{1}{(3x+1)^4} + C$'],
            correctAnswer: 0,
            explanation: 'Linear shortcut: $\\frac{4}{3} \\cdot \\frac{(3x+1)^{-4}}{-4} = -\\frac{1}{3(3x+1)^4} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub6-mistakes',
      type: 'text' as const,
      content: `### Common AP Exam Mistakes

| Mistake | Example | Correct Approach |
|:---:|:---:|:---:|
| Moving $x$ outside integral | "$x \\int \\cos(x^2)\\,dx$" | Use u-sub: $u=x^2$ |
| Forgetting to change limits | $\\int_0^1 \\to \\int_0^1$ in $u$ | Convert: $u(0)$ to $u(1)$ |
| Wrong constant factor | $du = 2x\\,dx$, forgetting $1/2$ | Track adjustment carefully |
| Not simplifying first | Integrating $\\frac{x^3+x}{x}$ as-is | Simplify to $x^2+1$ first |
| Mixing up $+C$ on definite | Adding $+C$ to $\\int_a^b$ | No $+C$ for definite integrals |
| Wrong sign on $\\cos x$ sub | $u = \\cos x$, $du = \\sin x\\,dx$ | $du = -\\sin x\\,dx$ (negative!) |`
    },
    {
      id: 'usub6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each integral.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\frac{x^2-1}{x+1}\\,dx$ — first step:',
            options: ['u-substitution', 'Long division', 'Factor and cancel', 'Complete the square'],
            correctAnswers: ['Factor and cancel'],
            hints: ['$x^2-1 = (x+1)(x-1)$. Cancel the $(x+1)$.'],
            explanation: '$\\frac{(x+1)(x-1)}{x+1} = x-1$. $\\int (x-1)\\,dx = x^2/2 - x + C$.'
          },
          {
            label: '$\\int \\frac{\\cos(\\sqrt{x})}{\\sqrt{x}}\\,dx$ — choose $u$:',
            options: ['$u = \\cos(\\sqrt{x})$', '$u = \\sqrt{x}$', '$u = x$', '$u = \\cos x$'],
            correctAnswers: ['$u = \\sqrt{x}$'],
            hints: ['$u = \\sqrt{x}$, $du = \\frac{1}{2\\sqrt{x}}dx$.'],
            explanation: '$u = \\sqrt{x}$: $2\\int \\cos u\\,du = 2\\sin(\\sqrt{x}) + C$.'
          },
          {
            label: '$\\int \\frac{1}{x^2-6x+13}\\,dx$ — technique:',
            options: ['u-sub directly', 'Long division', 'Complete the square', 'Factor the denominator'],
            correctAnswers: ['Complete the square'],
            hints: ['$x^2-6x+13 = (x-3)^2 + 4$. This is an $\\arctan$ form.'],
            explanation: '$(x-3)^2+4$: $\\frac{1}{2}\\arctan\\frac{x-3}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub6-input',
      type: 'input-box' as const,
      content: '**Mixed practice.** ✍️',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/2} \\cos x \\cdot e^{\\sin x}\\,dx$.\n\n(Give your answer in the form $e^a - b$ where $a$ and $b$ are integers.)',
        correctAnswer: 'e - 1',
        acceptableAnswers: ['e - 1', 'e-1', 'e^1 - 1', 'e^1-1'],
        hints: [
          '$u = \\sin x$, $du = \\cos x\\,dx$.',
          'Limits: $x = 0 \\to u = 0$, $x = \\pi/2 \\to u = 1$.',
          '$\\int_0^1 e^u\\,du = e^u\\Big|_0^1 = e - 1$.'
        ],
        explanation: '$u = \\sin x$: $\\int_0^1 e^u\\,du = [e^u]_0^1 = e^1 - e^0 = e - 1$.'
      }
    },
    {
      id: 'usub6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Problem Type | First Step |
|:---:|:---:|
| Improper fraction | Long division |
| Factorable numerator/denominator | Cancel common factors |
| Composite function with derivative present | u-substitution |
| Irreducible quadratic | Complete the square |
| $f'/f$ pattern | $\\ln|f| + C$ directly |
| Linear argument | Shortcut: $\\frac{1}{a}F(ax+b)$ |

> **Up Next:** Part 7 — Comprehensive Assessment.`
    }
  ]
};
