export const calcbcEulerPart6Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Euler Practice**

Work through these problems applying the complete Euler toolkit.`
    },
    {
      id: 'euler6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Set A**',
      exercise: {
        questions: [
          {
            question: '$dy/dx = e^{-x} - y$, $y(0) = 0$, $\\Delta x = 0.25$. What is $y(0.25)$?',
            options: ['$0 + (1 - 0)(0.25) = 0.25$', '$0 + e^{-0.25}(0.25) = 0.195$', '$0.5$', '$0.125$'],
            correctAnswer: 0,
            explanation: '$f(0, 0) = e^0 - 0 = 1$. $y(0.25) = 0 + 1(0.25) = 0.25$.'
          },
          {
            question: 'Continuing: $f(0.25, 0.25) = e^{-0.25} - 0.25 \\approx 0.779 - 0.25 = 0.529$. $y(0.5) \\approx$',
            options: ['$0.25 + 0.529(0.25) \\approx 0.382$', '$0.25 + 0.529 = 0.779$', '$0.529(0.25) = 0.132$', '$0.25 + 0.25 = 0.5$'],
            correctAnswer: 0,
            explanation: '$y(0.5) = 0.25 + 0.529(0.25) \\approx 0.382$.'
          },
          {
            question: 'For the ODE $dy/dx = y^2$, $y(0) = 1$, the exact solution blows up at $x = 1$. Will Euler detect this?',
            options: ['Partially — $y$-values grow rapidly but never reach $\\infty$', 'Yes — Euler produces $\\infty$', 'No — Euler gives finite values everywhere', 'Euler gives negative values'],
            correctAnswer: 0,
            explanation: 'Euler will produce larger and larger $y$ values as $x \\to 1$, but won\'t produce literal infinity. The approximation grows dramatically.'
          }
        ]
      }
    },
    {
      id: 'euler6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Three-Step Problem**\n\n$dy/dx = x + 2y$, $y(0) = 0.5$, $\\Delta x = 0.1$. Find $y(0.3)$.',
      exercise: {
        dropdowns: [
          {
            label: 'Step 1: $f(0, 0.5) = 0 + 1 = 1$. $y(0.1) =$',
            options: ['$0.5 + 1(0.1) = 0.6$', '$0.5 + 0.5(0.1) = 0.55$', '$0.5 + 1 = 1.5$', '$0.6 + 1(0.1) = 0.7$'],
            correctAnswers: ['$0.5 + 1(0.1) = 0.6$'],
            hints: ['$f(0, 0.5) = 0 + 2(0.5) = 1$.'],
            explanation: '$y(0.1) = 0.5 + 1(0.1) = 0.6$.'
          },
          {
            label: 'Step 2: $f(0.1, 0.6) = 0.1 + 1.2 = 1.3$. $y(0.2) =$',
            options: ['$0.6 + 1.3(0.1) = 0.73$', '$0.6 + 1.3 = 1.9$', '$0.5 + 1.3(0.1) = 0.63$', '$0.73 + 0.1 = 0.83$'],
            correctAnswers: ['$0.6 + 1.3(0.1) = 0.73$'],
            hints: ['$y(0.2) = 0.6 + 1.3(0.1) = 0.73$.'],
            explanation: '$y(0.2) = 0.73$.'
          },
          {
            label: 'Step 3: $f(0.2, 0.73) = 0.2 + 1.46 = 1.66$. $y(0.3) =$',
            options: ['$0.73 + 1.66(0.1) = 0.896$', '$0.73 + 1.66 = 2.39$', '$0.896 + 0.1 = 0.996$', '$0.6 + 1.66(0.1) = 0.766$'],
            correctAnswers: ['$0.73 + 1.66(0.1) = 0.896$'],
            hints: ['$y(0.3) = 0.73 + 1.66(0.1)$.'],
            explanation: '$y(0.3) \\approx 0.896$.'
          }
        ]
      }
    },
    {
      id: 'euler6-input',
      type: 'input-box' as const,
      content: '**Over/Under Estimate**',
      exercise: {
        question: '$dy/dx = 3y$, $y(0) = 1$. Exact solution: $y = e^{3x}$. $y\'\' = 9e^{3x}$. Is Euler with any step size an overestimate or underestimate on $[0, 1]$? Enter "over" or "under".',
        correctAnswer: 'under',
        acceptableAnswers: ['under', 'underestimate', 'underestimates'],
        hints: ['$y\'\' = 9e^{3x} > 0$ everywhere. Concave up.'],
        explanation: '$y\'\' > 0$ → concave up → Euler underestimates.'
      }
    },
    {
      id: 'euler6-summary',
      type: 'text' as const,
      content: `### Workshop Complete

- Practice building Euler tables from scratch
- Always verify your slope uses the correct point
- Check: does $\\Delta y$ sign match the slope sign?

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
