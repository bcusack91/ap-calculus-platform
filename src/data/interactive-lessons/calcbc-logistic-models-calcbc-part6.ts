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
            options: ['$20 + 108(0.5) = 74$', '$20 + 120(0.5) = 80$', '$20 + 6(0.5) = 23$', '$20 + 54(0.5) = 47$'],
            correctAnswer: 0,
            explanation: '$f(0, 20) = 6(20) - 0.03(400) = 120 - 12 = 108$. $P(0.5) = 20 + 108(0.5) = 74$.'
          },
          {
            question: 'A logistic model gives $P(5) = 300$ and $P(10) = 450$. If $L = 600$, can you determine $k$?',
            options: ['Yes — use $P(t) = L/(1+Ae^{-kt})$ with both data points', 'No — need $P(0)$', 'No — need a third point', 'Yes — but only using Euler\'s method'],
            correctAnswer: 0,
            explanation: 'Two points plus $L$ is enough. From $P(5)$, find $A$. From $P(10)$, confirm or find $k$.'
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
            options: ['$500$ ($L = 4/0.008$)', '$4$', '$0.008$', '$4000$'],
            correctAnswers: ['$500$ ($L = 4/0.008$)'],
            hints: ['$L = a/b = 4/0.008$.'],
            explanation: '$L = 4/0.008 = 500$.'
          },
          {
            label: 'Growth is fastest when $P =$',
            options: ['$250$ ($L/2 = 500/2$)', '$500$', '$125$', '$0$'],
            correctAnswers: ['$250$ ($L/2 = 500/2$)'],
            hints: ['Max growth at $P = L/2$.'],
            explanation: '$P = L/2 = 250$.'
          },
          {
            label: 'If $P(0) = 25$, then $A =$',
            options: ['$19$ ($(500-25)/25$)', '$20$', '$25$', '$475$'],
            correctAnswers: ['$19$ ($(500-25)/25$)'],
            hints: ['$A = (L - P_0)/P_0 = (500-25)/25$.'],
            explanation: '$A = 475/25 = 19$.'
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
