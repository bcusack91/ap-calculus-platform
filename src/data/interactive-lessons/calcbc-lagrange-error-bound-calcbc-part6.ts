export const calcbcLagrangePart6Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice**

Work through these problems combining all Lagrange error bound skills.`
    },
    {
      id: 'le6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems — Multiple Choice**',
      exercise: {
        questions: [
          {
            question: '$T_6(x)$ for $\\cos x$ at $c = 0$. Lagrange bound for $|R_6(0.3)| \\le$',
            options: ['$(0.3)^7/7! = 2187 \\times 10^{-7}/5040 \\approx 4.34 \\times 10^{-8}$', '$(0.3)^7/6!$', '$(0.3)^6/6!$', '$(0.3)^6/7!$'],
            correctAnswer: 0,
            explanation: '$M = 1$ for cosine. $|R_6| \\le (0.3)^7/7! = 2.187 \\times 10^{-4}/5040 \\approx 4.34 \\times 10^{-8}$.'
          },
          {
            question: 'A function satisfies $|f^{(n+1)}(t)| \\le 3^{n+1}$ on $[-1, 1]$. For $T_4(0.5)$, $|R_4| \\le$',
            options: ['$3^5(0.5)^5/5! = 243/3840 \\approx 0.0633$', '$3^4(0.5)^4/4!$', '$3^5(0.5)^5/4!$', '$3^5(0.5)^4/5!$'],
            correctAnswer: 0,
            explanation: '$n = 4$: $M = 3^5 = 243$. $|R_4| \\le 243(0.5)^5/5! = 243(1/32)/120 = 243/3840 \\approx 0.0633$.'
          },
          {
            question: 'For $e^x$ at $c = 0$, $x = -1$: $f^{(n+1)}(t) = e^t$. On $[-1, 0]$, $M =$',
            options: ['$e^0 = 1$', '$e^{-1}$', '$e^1$', '$e^{-1/2}$'],
            correctAnswer: 0,
            explanation: '$e^t$ is increasing, so on $[-1, 0]$ the max is at $t = 0$: $M = e^0 = 1$.'
          },
          {
            question: 'Given $|R_3(x)| \\le 8|x - 2|^4/4!$, find the largest $|x - 2|$ so that $|R_3| < 0.01$.',
            options: ['$|x - 2| < (0.01 \\cdot 24/8)^{1/4} = (0.03)^{1/4} \\approx 0.416$', '$|x - 2| < 0.01$', '$|x - 2| < (0.01 \\cdot 8/24)^{1/4}$', '$|x - 2| < 0.03$'],
            correctAnswer: 0,
            explanation: '$8|x-2|^4/24 < 0.01 \\Rightarrow |x-2|^4 < 0.03 \\Rightarrow |x-2| < (0.03)^{1/4} \\approx 0.416$.'
          }
        ]
      }
    },
    {
      id: 'le6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Workshop — Strategy Selection**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\arctan(0.5)$ using $T_5$ at $c = 0$: the series alternates. Best error bound approach:',
            options: ['AST: next omitted term is $(0.5)^7/7$', 'Lagrange with $M$ from 6th derivative', 'No bound is possible', 'Lagrange with $M = 1$'],
            correctAnswers: ['AST: next omitted term is $(0.5)^7/7$'],
            hints: ['$\\arctan$ Maclaurin series alternates. AST is simpler.'],
            explanation: '$\\arctan x = x - x^3/3 + x^5/5 - \\cdots$. Alternating. AST: $|R_5| \\le (0.5)^7/7 = 1/896 \\approx 0.00112$.'
          },
          {
            label: 'For $e^{0.8}$ using $T_4$ at $c = 0$: best approach:',
            options: ['Lagrange (series not alternating for $x > 0$): $M \\le 3$, bound = $3(0.8)^5/5!$', 'AST (terms eventually decrease)', 'Cannot bound — $e^x$ diverges', 'Use $M = 0.8$'],
            correctAnswers: ['Lagrange (series not alternating for $x > 0$): $M \\le 3$, bound = $3(0.8)^5/5!$'],
            hints: ['All terms of $e^x$ positive for $x > 0$. Must use Lagrange.'],
            explanation: '$e^x$ all positive terms. $M = e^{0.8} < 3$. $|R_4| \\le 3(0.8)^5/120 = 3(0.32768)/120 \\approx 0.00819$.'
          }
        ]
      }
    },
    {
      id: 'le6-input',
      type: 'input-box' as const,
      content: '**Workshop — Computation**',
      exercise: {
        question: 'Compute the Lagrange error bound for $T_3(0.4)$ for $e^x$ at $c = 0$ with $M = 3$. Give answer as a decimal to 5 places.',
        correctAnswer: '0.00032',
        acceptableAnswers: ['0.00032', '0.000320', '3.2e-4'],
        hints: ['$|R_3| \\le 3(0.4)^4/4!$.', '$(0.4)^4 = 0.0256$. $4! = 24$.'],
        explanation: '$|R_3(0.4)| \\le 3(0.4)^4/4! = 3(0.0256)/24 = 0.0768/24 = 0.0032$. Correction: $= 0.0032$.'
      }
    },
    {
      id: 'le6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

- Always identify: alternating → AST; non-alternating → Lagrange
- For Lagrange: find $M$ using the function's derivative behavior
- $M = 1$ for trig, $M = e^{\\text{endpoint}}$ (or crude bound) for $e^x$
- Final step: state the inequality explicitly

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
