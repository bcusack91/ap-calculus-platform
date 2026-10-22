export const calcbcLogisticPart6Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Mixed Logistic Practice**

Work through these problems applying everything you've learned.`
    },
    {
      id: 'log6-mc1',
      type: 'multiple-choice' as const,
      content: '**Workshop Set A**',
      exercise: {
        questions: [
          {
            question: '$dP/dt = 0.4P(1 - P/750)$, $P(0) = 50$. What is $P(t)$ as $t \\to \\infty$?',
            options: ['$750$', '$50$', '$\\infty$', '$375$'],
            correctAnswer: 0,
            explanation: '$P \\to L = 750$ as $t \\to \\infty$.'
          },
          {
            question: '$dP/dt = 6P - 0.03P^2$, $P(0) = 20$. Euler with $\\Delta t = 0.5$: $P(0.5) \\approx$',
            options: ['$20 + 108(0.5) = 74$', '$20 + 120(0.5) = 80$', '$20 + 6(0.5) = 23$', '$20 + 119.4(0.5) = 79.7$'],
            correctAnswer: 0,
            explanation: '$f(0, 20) = 6(20) - 0.03(400) = 120 - 12 = 108$. $P(0.5) = 20 + 108(0.5) = 74$. Dropping the $-0.03P^2$ term gives 80, using $k = 6$ as the slope gives 23, and forgetting to square $P$ gives 79.7.'
          },
          {
            question: '(Optional, beyond the AP exam: uses the explicit solution.) A logistic model gives $P(5) = 300$ and $P(10) = 450$. If $L = 600$, can you determine $k$?',
            options: ['Yes — use $P(t) = L/(1+Ae^{-kt})$ with both data points', 'No — $P(0)$ is needed before $A$ or $k$ can be found', 'No — a third data point is needed besides $L$', 'Yes — but only by running Euler\'s method on the data'],
            correctAnswer: 0,
            explanation: 'Two points plus $L$ give two equations in the two unknowns $A$ and $k$, solved together: $\\frac{600}{1 + Ae^{-5k}} = 300$ gives $Ae^{-5k} = 1$, and $\\frac{600}{1 + Ae^{-10k}} = 450$ gives $Ae^{-10k} = \\frac{1}{3}$. Dividing, $e^{-5k} = \\frac{1}{3}$, so $k = \\frac{\\ln 3}{5}$ (and $A = 3$). $P(0)$ is not needed, and no third point or Euler step is required.'
          }
        ]
      }
    },
    {
      id: 'log6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Complete Analysis**\n\n$dP/dt = P(4 - 0.008P)$',
      exercise: {
        dropdowns: [
          {
            label: 'Carrying capacity $L =$',
            options: ['$500$ ($4/0.008$)', '$0.002$ ($0.008/4$)', '$4$ (the coefficient of $P$)', '$125$ (from $1/0.008$)'],
            correctAnswers: ['$500$ ($4/0.008$)'],
            hints: ['$L = a/b = 4/0.008$.'],
            explanation: '$P(4 - 0.008P) = 4P(1 - P/500)$, so $L = 4/0.008 = 500$.'
          },
          {
            label: 'Growth is fastest when $P =$',
            options: ['$250$ ($L/2 = 500/2$)', '$500$ (the carrying capacity $L$)', '$125$ ($L/4 = 500/4$)', '$0$ (where $P$ starts growing)'],
            correctAnswers: ['$250$ ($L/2 = 500/2$)'],
            hints: ['Max growth at $P = L/2$.'],
            explanation: '$P = L/2 = 250$.'
          },
          {
            label: 'If $P(0) = 25$, then $A =$',
            options: ['$19$', '$20$', '$475$', '$1/19$'],
            correctAnswers: ['$19$'],
            hints: ['$A = (L - P_0)/P_0 = (500-25)/25$.'],
            explanation: '$A = (L - P_0)/P_0 = 475/25 = 19$. Skipping the subtraction gives 20, skipping the division gives 475, and inverting the ratio gives $1/19$.'
          }
        ]
      }
    },
    {
      id: 'log6-input',
      type: 'input-box' as const,
      content: '**Maximum Rate**',
      exercise: {
        question: '$dP/dt = 0.8P(1 - P/4000)$. What is the maximum value of $dP/dt$? Enter a number.',
        correctAnswer: '800',
        acceptableAnswers: ['800', '800.0'],
        hints: ['Max rate $= kL/4 = 0.8(4000)/4$.'],
        explanation: 'Max rate $= kL/4 = 0.8 \\cdot 4000/4 = 800$.'
      }
    },
    {
      id: 'log6-summary',
      type: 'text' as const,
      content: `### Workshop Complete

- Practice identifying parameters from non-standard forms
- Apply Euler's method to logistic equations
- Compute carrying capacity, max rate, and inflection points

> **Next:** Part 7 — Comprehensive Review.`
    }
  ]
};
