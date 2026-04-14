export const calcbcDiffEqPart7Data = {
  topicSlug: 'differential-equations-bc-calcbc',
  sections: [
    {
      id: 'de7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Differential Equations

**Part 7 of 7 — Final Assessment**

### Master Reference

| Concept | Key formula |
|---------|------------|
| Separable DE | $\\int dy/h(y) = \\int g(x)\\,dx + C$ |
| Exponential model | $y' = ky \\implies y = y_0 e^{kt}$ |
| Newton's cooling | $T' = k(T - T_s) \\implies T = T_s + (T_0 - T_s)e^{kt}$ |
| Half-life | $k = -\\ln 2 / t_{1/2}$ |
| Equilibrium | $F(x, c) = 0$ for all $x$ |

$$\\boxed{\\text{Only method: separation of variables + integration}}$$`
    },
    {
      id: 'de7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: '$y\' = \\frac{x^2}{y}$, $y(0) = 3$. The solution satisfies:',
            options: ['$y^2 = \\frac{2x^3}{3} + 9$', '$y^2 = x^3/3 + 9$', '$y = x^3/3 + 3$', '$\\ln y = x^3/3$'],
            correctAnswer: 0,
            explanation: '$y\\,dy = x^2\\,dx \\Rightarrow y^2/2 = x^3/3 + C$. IC: $9/2 = C$. So $y^2/2 = x^3/3 + 9/2$, i.e., $y^2 = 2x^3/3 + 9$.'
          },
          {
            question: 'For $y\' = (3 - y)$, as $t \\to \\infty$ with $y(0) = 0$:',
            options: ['$y \\to 3$ (stable equilibrium)', '$y \\to 0$', '$y \\to \\infty$', '$y \\to -3$'],
            correctAnswer: 0,
            explanation: '$y\' = 3 - y > 0$ when $y < 3$. The solution increases toward $y = 3$. Solve: $y = 3(1 - e^{-t})$.'
          },
          {
            question: 'To verify $y = \\sin x$ solves $y\'\' + y = 0$:',
            options: ['$y\' = \\cos x$, $y\'\' = -\\sin x$. Then $-\\sin x + \\sin x = 0$ ✓', 'Integrate $y\'\' + y$ and check if you get $\\sin x$', 'Plot both sides', 'This cannot be verified algebraically'],
            correctAnswer: 0,
            explanation: 'Compute $y\'\'$ and substitute into the DE. Both sides equal zero.'
          }
        ]
      }
    },
    {
      id: 'de7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B**',
      exercise: {
        questions: [
          {
            question: 'A population satisfies $P\' = 0.02P$. The doubling time is:',
            options: ['$\\ln 2 / 0.02 = 34.66$ years', '$2/0.02 = 100$ years', '$0.02/\\ln 2 = 0.029$ years', '$50$ years'],
            correctAnswer: 0,
            explanation: '$2P_0 = P_0 e^{0.02t} \\Rightarrow 2 = e^{0.02t} \\Rightarrow t = \\ln 2/0.02 \\approx 34.66$.'
          },
          {
            question: 'Which is NOT separable?',
            options: ['$y\' = x + y$ (sum, not product)', '$y\' = xy$', '$y\' = x/y$', '$y\' = y\\cos x$'],
            correctAnswer: 0,
            explanation: '$x + y$ cannot be written as $g(x) \\cdot h(y)$.'
          }
        ]
      }
    },
    {
      id: 'de7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Comprehensive Problem**\n\nA quantity $Q$ decays according to $dQ/dt = -0.1Q$, with $Q(0) = 500$.',
      exercise: {
        dropdowns: [
          {
            label: 'The solution is:',
            options: ['$Q = 500e^{-0.1t}$', '$Q = 500 - 0.1t$', '$Q = 500e^{0.1t}$', '$Q = 500(0.9)^t$'],
            correctAnswers: ['$Q = 500e^{-0.1t}$'],
            hints: ['$Q\' = kQ$ with $k = -0.1$.'],
            explanation: '$Q = Q_0 e^{kt} = 500e^{-0.1t}$.'
          },
          {
            label: 'The half-life is:',
            options: ['$\\ln 2 / 0.1 \\approx 6.93$ time units', '$5$ time units', '$10$ time units', '$0.1 / \\ln 2$ time units'],
            correctAnswers: ['$\\ln 2 / 0.1 \\approx 6.93$ time units'],
            hints: ['$t_{1/2} = \\ln 2 / |k|$.'],
            explanation: '$t_{1/2} = \\ln 2 / 0.1 \\approx 6.93$.'
          }
        ]
      }
    },
    {
      id: 'de7-input',
      type: 'input-box' as const,
      content: '**Final Problem**',
      exercise: {
        question: 'Solve $y\' = -2y$ with $y(0) = 8$. What is $y(2)$? (Round to 3 decimals.)',
        correctAnswer: '0.147',
        acceptableAnswers: ['0.147', '0.146', '0.1465', '8e^{-4}'],
        hints: ['$y = 8e^{-2t}$. $y(2) = 8e^{-4}$.'],
        explanation: '$y = 8e^{-2t}$. $y(2) = 8e^{-4} \\approx 0.147$.'
      }
    },
    {
      id: 'de7-summary',
      type: 'text' as const,
      content: `### Differential Equations — Complete

You've mastered:
- Solving separable DEs with initial conditions
- Verifying proposed solutions
- Modeling real-world scenarios with DEs
- Slope fields and qualitative behavior
- Equilibrium solutions and stability
- AP exam strategies and FRQ formatting

$$\\boxed{\\text{Separate} \\to \\text{Integrate} \\to \\text{Apply IC} \\to \\text{Particular solution}}$$`
    }
  ]
};
