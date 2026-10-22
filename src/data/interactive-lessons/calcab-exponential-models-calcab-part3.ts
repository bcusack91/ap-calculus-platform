export const calcabExpModelsPart3Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp3-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 3 of 7 — Finding $k$: Doubling Time and Half-Life**

Every model in this part comes from one differential equation:

$$\\boxed{\\frac{dy}{dt} = ky, \\quad y(0) = y_0 \\quad\\Longrightarrow\\quad y = y_0 e^{kt}}$$

### Getting $k$ from Information

| Given | Solve | Result |
|:---:|:---:|:---:|
| Doubling time $T$ | $2 = e^{kT}$ | $k = \\frac{\\ln 2}{T}$ |
| Half-life $T$ | $\\frac{1}{2} = e^{kT}$ | $k = -\\frac{\\ln 2}{T}$ |
| Two data values $y(0) = y_0$, $y(t_1) = y_1$ | $\\frac{y_1}{y_0} = e^{kt_1}$ | $k = \\frac{1}{t_1}\\ln\\frac{y_1}{y_0}$ |
| Rate stated in words ("grows 3% per year, continuously") | read it off | $k = 0.03$ |

> **Key Fact:** $k$ has units of "per unit of time." $k > 0$ means growth, $k < 0$ means decay, and $k$ itself is the relative rate $\\frac{dy/dt}{y}$ (its size $\\lvert k\\rvert$ is the percent rate as a decimal).`
    },
    {
      id: 'exp3-comparison',
      type: 'text' as const,
      content: `### Worked Example

A sample of a radioactive substance satisfies $\\frac{dy}{dt} = ky$. It has $80$ grams at $t = 0$ and $20$ grams at $t = 12$ hours.

1. **Find $k$:** $20 = 80e^{12k}$, so $e^{12k} = \\frac{1}{4}$ and $k = \\frac{\\ln(1/4)}{12} = -\\frac{\\ln 4}{12} \\approx -0.1155$ per hour.
2. **Half-life:** $T = \\frac{\\ln 2}{|k|} = \\frac{\\ln 2}{(\\ln 4)/12} = 6$ hours. (Check: $80 \\to 40 \\to 20$ in two half-lives.)
3. **Rate at $t = 12$:** $\\frac{dy}{dt} = ky = (-0.1155)(20) \\approx -2.310$ grams per hour.
4. **Interpretation:** at $t = 12$ hours the sample is losing about $2.310$ grams per hour.

Notice that the rate in step 3 comes straight from the differential equation; you do not need to differentiate the solution.`
    },
    {
      id: 'exp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Doubling and Decay** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population satisfies $\\frac{dP}{dt} = 0.05P$ with $t$ in years. Its doubling time is:',
            options: ['$\\frac{\\ln 2}{0.05} \\approx 13.86$ years', '$\\frac{0.05}{\\ln 2} \\approx 0.0721$ years', '$\\frac{\\ln 2}{5} \\approx 0.1386$ years', '$\\frac{1}{0.05} = 20$ years'],
            correctAnswer: 0,
            explanation: '$2P_0 = P_0e^{0.05t}$ gives $t = \\frac{\\ln 2}{0.05} \\approx 13.86$ years. Writing the fraction upside down gives $0.0721$; the rate is $0.05$, not $5$; and $\\frac{1}{0.05} = 20$ years assumes a constant increase of 5% of the original amount each year.'
          },
          {
            question: 'A quantity satisfies $\\frac{dy}{dt} = ky$ and falls from $80$ to $20$ in $12$ hours. Then $k =$',
            options: ['$\\frac{\\ln 4}{12}$', '$-\\frac{\\ln 4}{12}$', '$-\\frac{1}{48}$', '$-\\frac{\\ln 12}{4}$'],
            correctAnswer: 1,
            explanation: '$20 = 80e^{12k}$ gives $e^{12k} = \\frac{1}{4}$, so $k = \\frac{\\ln(1/4)}{12} = -\\frac{\\ln 4}{12}$. Dropping the sign describes growth, $-\\frac{1}{48}$ skips the logarithm, and $-\\frac{\\ln 12}{4}$ swaps the roles of the time and the ratio.'
          },
          {
            question: 'A quantity with $\\frac{dy}{dt} = 0.04y$ starts at $5000$. When does it reach $20000$?',
            options: ['$\\frac{\\ln 4}{0.04} \\approx 34.66$', '$\\frac{\\ln 2}{0.04} \\approx 17.33$', '$\\frac{3}{0.04} = 75$', '$\\frac{\\ln 4}{4} \\approx 0.3466$'],
            correctAnswer: 0,
            explanation: '$20000 = 5000e^{0.04t}$ gives $4 = e^{0.04t}$, so $t = \\frac{\\ln 4}{0.04} \\approx 34.66$. $\\frac{\\ln 2}{0.04}$ is only one doubling (to $10000$), $\\frac{3}{0.04}$ treats the growth as linear, and using $4$ instead of $0.04$ for $k$ gives a tiny time.'
          }
        ]
      }
    },
    {
      id: 'exp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Model concepts.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$A = A_0 e^{rt}$ is the solution to which DE?',
            options: ['$\\frac{dA}{dt} = rt$', '$\\frac{dA}{dt} = rA$', '$\\frac{dA}{dt} = A^r$', '$\\frac{dA}{dt} = A_0$'],
            correctAnswers: ['$\\frac{dA}{dt} = rA$'],
            hints: ['Rate proportional to current amount.'],
            explanation: '$\\frac{dA}{dt} = rA$ separates to $\\frac{dA}{A} = r\\,dt$, giving $A = A_0 e^{rt}$. The other equations do not have a rate proportional to the amount.'
          },
          {
            label: 'If $\\frac{dP}{dt} = 0.2P$, then at the moment $P = 300$ the population is growing at',
            options: ['$10$ per unit time', '$60$ per unit time', '$300$ per unit time', '$0.2$ per unit time'],
            correctAnswers: ['$60$ per unit time'],
            hints: ['Substitute $P = 300$ into the differential equation.'],
            explanation: '$\\frac{dP}{dt} = 0.2(300) = 60$. The value $0.2$ is the relative rate, $300$ is the population itself, and $10$ divides instead of multiplying.'
          },
          {
            label: 'A substance satisfies $\\frac{dy}{dt} = -0.0231y$ with $t$ in years. Its half-life is',
            options: ['about $30$ years', 'about $43$ years', 'about $0.033$ years', 'about $15$ years'],
            correctAnswers: ['about $30$ years'],
            hints: ['Half-life $= \\frac{\\ln 2}{|k|}$.'],
            explanation: '$\\frac{\\ln 2}{0.0231} \\approx 30.0$ years. $43$ years is $\\frac{1}{0.0231}$ without the logarithm, $0.033$ inverts the fraction, and $15$ years halves the answer again.'
          }
        ]
      }
    },
    {
      id: 'exp3-input',
      type: 'input-box' as const,
      content: '**Solve for time.** ✍️',
      exercise: {
        question: 'A population modeled by $\\frac{dP}{dt} = kP$ doubles in 10 years. How many years does it take to quadruple?\n\n(Enter an integer.)',
        correctAnswer: '20',
        acceptableAnswers: ['20'],
        hints: [
          'If it doubles in 10 years, then $e^{10k} = 2$.',
          'To quadruple: $e^{kt} = 4 = 2^2$.',
          '$e^{kt} = (e^{10k})^{t/10} = 2^{t/10} = 4$ means $t/10 = 2$.'
        ],
        explanation: 'Quadrupling is two doublings, so $2 \\times 10 = 20$ years. (Or: $k = \\frac{\\ln 2}{10}$, $t = \\frac{\\ln 4}{k} = \\frac{2\\ln 2}{(\\ln 2)/10} = 20$.)'
      }
    },
    {
      id: 'exp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Concept | Formula |
|:---:|:---:|
| Model | $\\frac{dy}{dt} = ky \\Rightarrow y = y_0e^{kt}$ |
| $k$ from data | $k = \\frac{1}{t_1}\\ln\\frac{y_1}{y_0}$ |
| Doubling time / half-life | $\\frac{\\ln 2}{|k|}$ |
| Rate at a moment | $\\frac{dy}{dt} = ky$ (use the DE) |

> **Up Next:** Part 4 — Derivatives & Integrals of Exponentials.`
    }
  ]
};
