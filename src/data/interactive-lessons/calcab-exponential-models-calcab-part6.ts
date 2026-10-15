export const calcabExpModelsPart6Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp6-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 6 of 7 \u2014 Problem-Solving Workshop**

### Model Selection Guide

| Verbal Clue | Model | Equation |
|:---:|:---:|:---:|
| "Rate proportional to amount" | Exponential | $dy/dt = ky$ |
| "Rate proportional to the gap from a limit $A$" | Limited growth | $dy/dt = k(A-y)$ |
| "Rate proportional to difference" | Newton\u2019s Cooling | $dT/dt = k(T-T_s)$ |
| "Doubles every $n$ years" | Exponential | $y = y_0 \\cdot 2^{t/n}$ |
| "Half-life of $n$ years" | Exponential decay | $y = y_0 (1/2)^{t/n}$ |
| "Compounded continuously" | Continuous growth | $A = Pe^{rt}$ |

> **Key Fact:** Read the problem carefully for keywords. The model type determines the entire solution strategy.`
    },
    {
      id: 'exp6-worked',
      type: 'text' as const,
      content: `### AP-Style Worked Problems

**Problem 1:** Carbon-14 has a half-life of 5730 years. A sample has 30% of its original C-14. How old is it?

| Step | Work |
|:---:|:---:|
| Model | $y = y_0 e^{kt}$ |
| Find $k$ | $\\frac{1}{2} = e^{5730k}$, $k = -\\frac{\\ln 2}{5730}$ |
| Use 30% | $0.30 = e^{kt}$ |
| Solve | $t = \\frac{\\ln(0.30)}{k} = \\frac{5730 \\ln(0.30)}{-\\ln 2} \\approx 9953$ years |

**Problem 2:** A lake is stocked toward 5000 fish. The population $F$ (with $t$ in years) follows $\\frac{dF}{dt} = 0.2(5000 - F)$, and $F(0) = 1000$.

| Question | Answer |
|:---:|:---:|
| Long-run population? | $F \\to 5000$ |
| Currently growing? | Yes: $F = 1000 < 5000$, so $\\frac{dF}{dt} > 0$ |
| Current growth rate? | $0.2(5000 - 1000) = 800$ fish/year |
| Speeding up or slowing down? | $\\frac{d^2F}{dt^2} = -0.2\\frac{dF}{dt} < 0$: growth is slowing |
| Particular solution? | $F(t) = 5000 - 4000e^{-0.2t}$ |`
    },
    {
      id: 'exp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If the half-life of a substance is 5 years, what fraction remains after 15 years?',
            options: ['$1/8$', '$1/4$', '$1/3$', '$1/16$'],
            correctAnswer: 0,
            explanation: '15 years = 3 half-lives. $(1/2)^3 = 1/8$.'
          },
          {
            question: 'A population triples every 4 hours. How long until it is 81 times its original size?',
            options: ['$16$ hours', '$12$ hours', '$8$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: '$81 = 3^4$. Four tripling periods: $4 \\times 4 = 16$ hours.'
          },
          {
            question: 'The temperature of a cooling object is $T(t) = 25 + 75e^{-0.1t}$. The initial temperature is:',
            options: ['$100\u00b0$', '$25\u00b0$', '$75\u00b0$', '$50°$'],
            correctAnswer: 0,
            explanation: '$T(0) = 25 + 75e^0 = 25 + 75 = 100°$. $25°$ is the room temperature (the limit as $t \\to \\infty$), $75°$ is the initial temperature DIFFERENCE, and subtracting gives $50°$.'
          }
        ]
      }
    },
    {
      id: 'exp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the model.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '"A drug is eliminated at a rate proportional to the amount in the bloodstream." Model:',
            options: ['Exponential decay', 'Logistic growth', 'Newton’s Law of Cooling', 'Linear decay'],
            correctAnswers: ['Exponential decay'],
            hints: ['"Rate proportional to amount" = exponential.'],
            explanation: 'Rate proportional to amount with elimination = exponential decay.'
          },
          {
            label: '"An IV drip raises a drug level $y$ toward 40 mg at a rate proportional to how far below 40 mg it is." Model:',
            options: ['$dy/dt = ky$', '$dy/dt = k(40 - y)$', '$dy/dt = 40 - kt$', '$dy/dt = ky(40 - y)$'],
            correctAnswers: ['$dy/dt = k(40 - y)$'],
            hints: ['"How far below 40 mg" is the gap $40 - y$.'],
            explanation: 'The rate is proportional to the gap $40 - y$, so $dy/dt = k(40 - y)$ with $k > 0$. $ky$ ignores the 40 mg limit, $40 - kt$ depends on time instead of the gap, and $ky(40 - y)$ is jointly proportional to $y$ and the gap, which the statement does not say.'
          },
          {
            label: '"A hot pizza cools toward room temperature." The rate of cooling _____ over time.',
            options: ['Increases', 'Decreases', 'Stays constant', 'First increases then decreases'],
            correctAnswers: ['Decreases'],
            hints: ['Rate $\\propto$ temperature difference, which shrinks.'],
            explanation: 'As $T \\to T_s$, the difference decreases, so the rate of cooling decreases.'
          }
        ]
      }
    },
    {
      id: 'exp6-input',
      type: 'input-box' as const,
      content: '**Apply the right model.** \u270d\ufe0f',
      exercise: {
        question: 'A population of 2000 follows $\\frac{dP}{dt} = 0.3(8000 - P)$. What is the current rate of growth (in organisms per unit time)?\n\n(Enter an integer.)',
        correctAnswer: '1800',
        acceptableAnswers: ['1800'],
        hints: [
          'Plug $P = 2000$ directly into the DE.',
          '$0.3(8000 - 2000) = 0.3(6000)$.'
        ],
        explanation: '$\\frac{dP}{dt} = 0.3(8000 - 2000) = 0.3(6000) = 1800$. No solving is needed: the DE gives the rate directly.'
      }
    },
    {
      id: 'exp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

| Keyword | Model |
|:---:|:---:|
| Proportional to amount | Exponential |
| Approaches a limit $A$ | $dy/dt = k(A - y)$ |
| Proportional to difference | Newton\u2019s cooling |
| Doubles/halves | Exponential with $2^{t/n}$ or $(1/2)^{t/n}$ |

> **Up Next:** Part 7 \u2014 Comprehensive Assessment.`
    }
  ]
};
