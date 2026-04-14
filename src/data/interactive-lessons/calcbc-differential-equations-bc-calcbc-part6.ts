export const calcbcDiffEqPart6Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop — Differential Equations

**Part 6 of 7 — Timed Practice**

Work through these problems systematically, showing all steps as you would on the AP exam.`
    },
    {
      id: 'de6-mc',
      type: 'multiple-choice' as const,
      content: '**Workshop Problems**',
      exercise: {
        questions: [
          {
            question: 'Solve $y\' = xy^2$, $y(0) = 1$. The particular solution is:',
            options: ['$y = \\frac{2}{2 - x^2}$', '$y = e^{x^2/2}$', '$y = \\frac{1}{1 - x^2}$', '$y = \\frac{1}{1 - x^2/2}$'],
            correctAnswer: 3,
            explanation: '$dy/y^2 = x\\,dx \\Rightarrow -1/y = x^2/2 + C$. IC: $-1 = C$. So $-1/y = x^2/2 - 1 \\Rightarrow y = 1/(1 - x^2/2)$.'
          },
          {
            question: 'The equilibrium solutions of $y\' = y^2 - 4$ are:',
            options: ['$y = 2$ and $y = -2$', '$y = 0$ and $y = 4$', '$y = 2$ only', '$y = 4$'],
            correctAnswer: 0,
            explanation: '$y^2 - 4 = 0 \\Rightarrow y = \\pm 2$.'
          },
          {
            question: 'For $y\' = y^2 - 4$, $y = 2$ is:',
            options: ['Unstable (solutions near $y=2$ from above have $y\'>0$ and move away)', 'Stable', 'Semi-stable', 'Neither stable nor unstable'],
            correctAnswer: 0,
            explanation: 'For $y$ slightly above 2: $y^2 - 4 > 0$, so $y$ increases away. For $-2 < y < 2$: $y^2 - 4 < 0$, so $y$ decreases toward $-2$. Thus $y = 2$ is unstable.'
          }
        ]
      }
    },
    {
      id: 'de6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Multi-Step Problem**\n\nSolve $\\frac{dy}{dx} = \\frac{2x}{y+1}$, $y(0) = 1$.',
      exercise: {
        dropdowns: [
          {
            label: 'After separating and integrating: $(y+1)\\,dy = 2x\\,dx$ gives:',
            options: ['$y^2/2 + y = x^2 + C$', '$y^2 + y = x^2 + C$', '$\\ln(y+1) = x^2 + C$', '$y^2/2 + y = 2x^2 + C$'],
            correctAnswers: ['$y^2/2 + y = x^2 + C$'],
            hints: ['$\\int (y+1)\\,dy = y^2/2 + y$, $\\int 2x\\,dx = x^2$.'],
            explanation: '$\\int (y+1)\\,dy = y^2/2 + y$ and $\\int 2x\\,dx = x^2$.'
          },
          {
            label: 'Applying $y(0) = 1$: $C =$',
            options: ['$3/2$ (since $1/2 + 1 = 0 + C$)', '$1$', '$2$', '$1/2$'],
            correctAnswers: ['$3/2$ (since $1/2 + 1 = 0 + C$)'],
            hints: ['$1/2 + 1 = 0 + C$.'],
            explanation: '$1/2 + 1 = 3/2 = C$.'
          },
          {
            label: 'The particular solution (implicit form) is:',
            options: ['$y^2/2 + y = x^2 + 3/2$', '$y^2 + y = x^2 + 3$', '$y = x^2 + 1/2$', '$y^2/2 + y = x^2 + 1$'],
            correctAnswers: ['$y^2/2 + y = x^2 + 3/2$'],
            hints: ['Substitute $C = 3/2$.'],
            explanation: '$y^2/2 + y = x^2 + 3/2$. Leave in implicit form.'
          }
        ]
      }
    },
    {
      id: 'de6-input',
      type: 'input-box' as const,
      content: '**Quick Solve**',
      exercise: {
        question: 'Solve $y\' = 3y$, $y(0) = 2$. What is $y(1)$? (Round to 2 decimal places.)',
        correctAnswer: '40.17',
        acceptableAnswers: ['40.17', '40.18', '2e^3'],
        hints: ['$y = 2e^{3x}$. Then $y(1) = 2e^3$.'],
        explanation: '$y = 2e^{3x}$. $y(1) = 2e^3 \\approx 40.17$.'
      }
    },
    {
      id: 'de6-summary',
      type: 'text' as const,
      content: `### Workshop Takeaways

- Always separate, integrate, THEN apply IC
- Implicit solutions are acceptable unless told otherwise
- Sign analysis reveals stability of equilibria
- Check: does the solution satisfy both the DE and the IC?

**Next: Part 7 — Comprehensive Review**`
    }
  ]
};
