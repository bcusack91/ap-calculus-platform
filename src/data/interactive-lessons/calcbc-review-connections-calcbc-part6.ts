export const calcbcReviewPart6Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'rc6-intro',
      type: 'text' as const,
      content: `# Mixed-Topic Workshop

**Part 6 of 7 — Cross-Topic Problem Solving**

These problems intentionally mix topics. On the AP exam, you must identify which tool to use — that's the real skill.`
    },
    {
      id: 'rc6-mc',
      type: 'multiple-choice' as const,
      content: '**Mixed MC Block**',
      exercise: {
        questions: [
          {
            question: 'The length of the curve $x = t^2$, $y = t^3$ from $t = 0$ to $t = 1$ is:',
            options: ['$\\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$', '$\\int_0^1 (2t + 3t^2)\\,dt$', '$\\int_0^1 \\sqrt{t^4 + t^6}\\,dt$', '$\\sqrt{1 + 1} = \\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '$x\' = 2t$, $y\' = 3t^2$. Arc length $= \\int_0^1 \\sqrt{(2t)^2 + (3t^2)^2}\\,dt = \\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-3)^n}{n!}$ equals:',
            options: ['$e^{-3} - 1$', '$e^{-3}$', '$e^3 - 1$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$e^x = \\sum_{n=0}^\\infty x^n/n!$. So $\\sum_{n=1}^\\infty (-3)^n/n! = e^{-3} - 1$ (subtracting the $n=0$ term).'
          },
          {
            question: 'If $dy/dx = y/x$ and $y(1) = 2$, then $y(e) =$',
            options: ['$2e$', '$e^2$', '$2$', '$e$'],
            correctAnswer: 0,
            explanation: 'Separable: $dy/y = dx/x \\Rightarrow \\ln|y| = \\ln|x| + C \\Rightarrow y = Ax$. $y(1) = 2 \\Rightarrow A = 2$. $y(e) = 2e$.'
          },
          {
            question: 'The area inside $r = 2\\sin\\theta$ is:',
            options: ['$\\pi$', '$2\\pi$', '$4\\pi$', '$\\pi/2$'],
            correctAnswer: 0,
            explanation: '$r = 2\\sin\\theta$ is a circle of radius 1 (diameter 2). Area $= \\pi(1)^2 = \\pi$. Or: $\\frac{1}{2}\\int_0^\\pi 4\\sin^2\\theta\\,d\\theta = 2 \\cdot \\pi/2 = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'rc6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Multi-Step Problem**\n\nConsider $f(x) = \\sum_{n=0}^\\infty \\frac{x^{2n+1}}{(2n+1)!}$.',
      exercise: {
        dropdowns: [
          {
            label: 'This series represents:',
            options: ['$\\sinh x$ (hyperbolic sine)', '$\\sin x$', '$\\cos x$', '$e^x$'],
            correctAnswers: ['$\\sinh x$ (hyperbolic sine)'],
            hints: ['Compare with $\\sin x = \\sum (-1)^n x^{2n+1}/(2n+1)!$. This has no alternating sign.'],
            explanation: 'Without the $(-1)^n$, this is $\\sinh x = (e^x - e^{-x})/2 = x + x^3/6 + x^5/120 + \\cdots$.'
          },
          {
            label: '$f\'(x) =$',
            options: ['$\\cosh x = \\sum x^{2n}/(2n)!$', '$\\cos x$', '$-\\sinh x$', '$e^x$'],
            correctAnswers: ['$\\cosh x = \\sum x^{2n}/(2n)!$'],
            hints: ['Differentiate term by term: $\\sum (2n+1)x^{2n}/((2n+1)\\cdot(2n)!) = \\sum x^{2n}/(2n)!$.'],
            explanation: '$f\'(x) = \\sum x^{2n}/(2n)! = \\cosh x$. Just like $\\sin\' = \\cos$, we get $\\sinh\' = \\cosh$.'
          }
        ]
      }
    },
    {
      id: 'rc6-input',
      type: 'input-box' as const,
      content: '**Challenge Problem**',
      exercise: {
        question: 'A particle moves with velocity $v(t) = \\langle 2t, 3t^2 \\rangle$ and position $\\vec{r}(0) = \\langle 1, -1 \\rangle$. Find the $x$-coordinate of $\\vec{r}(2)$.',
        correctAnswer: '5',
        acceptableAnswers: ['5', '5.0'],
        hints: ['$x(t) = \\int 2t\\,dt = t^2 + C$. $x(0) = 1 \\Rightarrow C = 1$.'],
        explanation: '$x(t) = t^2 + 1$, so $x(2) = 4 + 1 = 5$.'
      }
    },
    {
      id: 'rc6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Identify the topic before choosing a method
- Series recognition (with or without $(-1)^n$) is critical
- Parametric/polar: always start with derivatives
- DEs: separate variables when possible

**Next: Part 7 — Final Comprehensive Review**`
    }
  ]
};
