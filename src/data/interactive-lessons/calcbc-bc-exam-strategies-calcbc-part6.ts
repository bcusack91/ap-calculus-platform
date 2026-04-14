export const calcbcExamStrategyPart6Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'es6-intro',
      type: 'text' as const,
      content: `# Practice Exam Simulation

**Part 6 of 7 — Timed Mixed-Topic Practice**

Work through these problems as if under exam conditions. Target 2–3 minutes per question.`
    },
    {
      id: 'es6-mc',
      type: 'multiple-choice' as const,
      content: '**Simulated MC Block**',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 xe^{-x}\\,dx =$',
            options: ['$1 - 2/e$', '$1/e$', '$2/e$', '$1 - 1/e$'],
            correctAnswer: 0,
            explanation: 'By parts: $u = x$, $dv = e^{-x}dx$. $= [-xe^{-x}]_0^1 + \\int_0^1 e^{-x}dx = -1/e + [-e^{-x}]_0^1 = -1/e + (-1/e + 1) = 1 - 2/e$.'
          },
          {
            question: 'The interval of convergence of $\\sum_{n=0}^\\infty \\frac{x^n}{2^n}$ is:',
            options: ['$(-2, 2)$', '$[-2, 2]$', '$(-1, 1)$', '$[-2, 2)$'],
            correctAnswer: 0,
            explanation: 'This is geometric with ratio $x/2$. Converges when $|x/2| < 1$, i.e., $|x| < 2$. At $x = \\pm 2$: $\\sum (\\pm 1)^n$ diverges. Interval: $(-2, 2)$.'
          },
          {
            question: 'If $\\vec{r}(t) = \\langle t^2, \\ln t \\rangle$ for $t > 0$, the speed at $t = 1$ is:',
            options: ['$\\sqrt{5}$', '$\\sqrt{4}$', '$\\sqrt{2}$', '$1$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle 2t, 1/t \\rangle$. At $t = 1$: $\\vec{v}(1) = \\langle 2, 1 \\rangle$. Speed $= \\sqrt{4 + 1} = \\sqrt{5}$.'
          },
          {
            question: '$\\lim_{n\\to\\infty} \\left(1 + \\frac{3}{n}\\right)^n =$',
            options: ['$e^3$', '$3e$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'By the limit definition of $e$: $\\lim (1 + k/n)^n = e^k$. With $k = 3$: $e^3$.'
          }
        ]
      }
    },
    {
      id: 'es6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Simulated FRQ Part**\n\nLet $f(x) = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}$.',
      exercise: {
        dropdowns: [
          {
            label: '(a) This series represents which function?',
            options: ['$\\cos x$', '$\\sin x$', '$e^{-x}$', '$\\ln(1+x)$'],
            correctAnswers: ['$\\cos x$'],
            hints: ['Compare with the known Maclaurin series.'],
            explanation: '$\\cos x = 1 - x^2/2! + x^4/4! - \\cdots = \\sum (-1)^n x^{2n}/(2n)!$.'
          },
          {
            label: '(b) $f\'(x) = $',
            options: ['$-\\sin x$', '$\\sin x$', '$-\\cos x$', '$\\cos x$'],
            correctAnswers: ['$-\\sin x$'],
            hints: ['Differentiate the known function, or differentiate the series term by term.'],
            explanation: '$f(x) = \\cos x$, so $f\'(x) = -\\sin x$. Alternatively: differentiating term by term gives $\\sum (-1)^n \\cdot 2n \\cdot x^{2n-1}/(2n)! = \\sum (-1)^n x^{2n-1}/(2n-1)! = -\\sin x$.'
          },
          {
            label: '(c) $\\int_0^{\\pi/2} f(x)\\,dx =$',
            options: ['$1$', '$0$', '$\\pi/2$', '$-1$'],
            correctAnswers: ['$1$'],
            hints: ['$\\int_0^{\\pi/2} \\cos x\\,dx$.'],
            explanation: '$\\int_0^{\\pi/2} \\cos x\\,dx = [\\sin x]_0^{\\pi/2} = 1 - 0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'es6-input',
      type: 'input-box' as const,
      content: '**Timed Challenge**',
      exercise: {
        question: 'The area enclosed by the polar curve $r = 1 + \\cos\\theta$ (cardioid) is $\\frac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta$. Evaluate this integral. (Give exact answer as a fraction times $\\pi$.)',
        correctAnswer: '3pi/2',
        acceptableAnswers: ['3pi/2', '3π/2', '(3/2)pi', '(3/2)π'],
        hints: ['$(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta$. Use $\\cos^2\\theta = (1 + \\cos 2\\theta)/2$.'],
        explanation: '$\\int_0^{2\\pi}(1 + 2\\cos\\theta + \\cos^2\\theta)\\,d\\theta = 2\\pi + 0 + \\pi = 3\\pi$. Area $= 3\\pi/2$.'
      }
    },
    {
      id: 'es6-summary',
      type: 'text' as const,
      content: `### Simulation Debrief

- If you got 4+ correct: You're in good shape for BC-specific content
- If you struggled with series identification: Review Part 5 of Taylor/Maclaurin
- If polar area was tricky: Review the $1/2$ factor and trig identities

**Next: Part 7 — Final Exam Preparation Checklist**`
    }
  ]
};
