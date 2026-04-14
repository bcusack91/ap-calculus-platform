export const calcabExpModelsPart3Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp3-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 3 of 7 \u2014 Compound Interest & Continuous Growth**

### Compound Interest Formula

$$\\boxed{A = P\\left(1 + \\frac{r}{n}\\right)^{nt}}$$

| Variable | Meaning |
|:---:|:---:|
| $P$ | Principal (initial investment) |
| $r$ | Annual interest rate (decimal) |
| $n$ | Compounding periods per year |
| $t$ | Time in years |
| $A$ | Amount after $t$ years |

### Continuous Compounding

$$\\boxed{A = Pe^{rt}}$$

As $n \\to \\infty$: $P(1 + r/n)^{nt} \\to Pe^{rt}$

> **Key Fact:** Continuous compounding gives the maximum possible return for a given rate. It arises naturally from $\\frac{dA}{dt} = rA$.`
    },
    {
      id: 'exp3-comparison',
      type: 'text' as const,
      content: `### Compounding Frequency Comparison

\\$1000 at 6% for 10 years:

| Frequency | $n$ | Formula | Amount |
|:---:|:---:|:---:|:---:|
| Annual | $1$ | $1000(1.06)^{10}$ | $\\$1790.85$ |
| Quarterly | $4$ | $1000(1.015)^{40}$ | $\\$1814.02$ |
| Monthly | $12$ | $1000(1.005)^{120}$ | $\\$1819.40$ |
| Daily | $365$ | $1000(1+.06/365)^{3650}$ | $\\$1822.03$ |
| Continuous | $\\infty$ | $1000e^{0.6}$ | $\\$1822.12$ |

### Key Formulas

| Question | Formula |
|:---:|:---:|
| Doubling time (continuous) | $t = \\frac{\\ln 2}{r}$ |
| Time to reach amount $A$ | $t = \\frac{\\ln(A/P)}{r}$ |
| Effective annual rate | $e^r - 1$ (continuous) |
| Required rate | $r = \\frac{\\ln(A/P)}{t}$ |

> **AP Tip:** On the AP exam, continuous compounding ($A = Pe^{rt}$) appears far more often than discrete compounding.`
    },
    {
      id: 'exp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '\\$1000 invested at 5% compounded continuously. Time to double:',
            options: ['$\\frac{\\ln 2}{0.05} \\approx 13.86$ years', '$20$ years', '$10$ years', '$40$ years'],
            correctAnswer: 0,
            explanation: '$2000 = 1000e^{0.05t}$. $t = \\frac{\\ln 2}{0.05} \\approx 13.86$ years.'
          },
          {
            question: 'An investment grows continuously at 8%. The effective annual rate is:',
            options: ['$8\\%$', '$e^{0.08}-1 \\approx 8.33\\%$', '$8.16\\%$', '$7.69\\%$'],
            correctAnswer: 1,
            explanation: 'Effective rate $= e^r - 1 = e^{0.08}-1 \\approx 0.0833 = 8.33\\%$.'
          },
          {
            question: 'How long for \\$5000 to grow to \\$20000 at 4% continuous compounding?',
            options: ['$\\frac{\\ln 4}{0.04} \\approx 34.66$ years', '$25$ years', '$\\frac{\\ln 2}{0.04}$ years', '$100$ years'],
            correctAnswer: 0,
            explanation: '$20000 = 5000e^{0.04t}$. $4 = e^{0.04t}$. $t = \\frac{\\ln 4}{0.04} \\approx 34.66$ years.'
          }
        ]
      }
    },
    {
      id: 'exp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interest concepts.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$A = Pe^{rt}$ is the solution to which DE?',
            options: ['$\\frac{dA}{dt} = rt$', '$\\frac{dA}{dt} = rA$', '$\\frac{dA}{dt} = A^r$', '$\\frac{dA}{dt} = P$'],
            correctAnswers: ['$\\frac{dA}{dt} = rA$'],
            hints: ['Rate proportional to current amount.'],
            explanation: '$\\frac{dA}{dt} = rA$ has solution $A = A_0 e^{rt}$.'
          },
          {
            label: 'Rule of 70 says an investment at 10% doubles in approximately:',
            options: ['$10$ years', '$7$ years', '$70$ years', '$\\ln 2$ years'],
            correctAnswers: ['$7$ years'],
            hints: ['$70 \\div \\text{percent rate} = 70/10$.'],
            explanation: '$70/10 = 7$ years. (Exact: $\\ln 2/0.1 \\approx 6.93$ years.)'
          },
          {
            label: 'Which gives a larger amount: 6% compounded monthly or 5.9% compounded continuously?',
            options: ['6% monthly', '5.9% continuous', 'They are the same', 'Depends on time period'],
            correctAnswers: ['6% monthly'],
            hints: ['Compare effective annual rates: $(1+0.06/12)^{12}-1$ vs $e^{0.059}-1$.'],
            explanation: '6% monthly: $(1.005)^{12}-1 \\approx 6.17\\%$. 5.9% continuous: $e^{0.059}-1 \\approx 6.08\\%$. 6% monthly wins.'
          }
        ]
      }
    },
    {
      id: 'exp3-input',
      type: 'input-box' as const,
      content: '**Solve for time.** \u270d\ufe0f',
      exercise: {
        question: 'An investment doubles in 10 years with continuous compounding. How many years to quadruple?\n\n(Enter an integer.)',
        correctAnswer: '20',
        acceptableAnswers: ['20'],
        hints: [
          'If it doubles in 10 years, then $e^{10r} = 2$.',
          'To quadruple: $e^{rt} = 4 = 2^2$.',
          '$e^{rt} = (e^{10r})^{t/10} = 2^{t/10} = 4$ means $t/10 = 2$.'
        ],
        explanation: 'Quadrupling = 2 doublings. $2 \\times 10 = 20$ years. (Or: $r = \\ln 2/10$, $t = \\ln 4/r = 2\\ln 2/(\\ln 2/10) = 20$.)'
      }
    },
    {
      id: 'exp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

| Concept | Formula |
|:---:|:---:|
| Discrete compounding | $A = P(1+r/n)^{nt}$ |
| Continuous compounding | $A = Pe^{rt}$ |
| Doubling time | $\\frac{\\ln 2}{r}$ |
| Rule of 70 | Doubling time $\\approx 70/\\text{percent rate}$ |

> **Up Next:** Part 4 \u2014 Derivatives & Integrals of Exponentials.`
    }
  ]
};
