export const calcabExpModelsPart1Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp1-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 1 of 7 \u2014 Exponential Growth and Decay**

### In This Topic

| Part | Topic |
|:---:|:---:|
| **1** | **Exponential Growth & Decay** |
| 2 | Newton\u2019s Law of Cooling |
| 3 | Compound Interest & Continuous Growth |
| 4 | Derivatives & Integrals of Exponentials |
| 5 | Logistic Growth |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Assessment |

### The Fundamental Differential Equation

$$\\boxed{\\frac{dy}{dt} = ky \\implies y(t) = y_0 e^{kt}}$$

| Parameter | Meaning |
|:---:|:---:|
| $y_0$ | Initial value $y(0)$ |
| $k > 0$ | Exponential **growth** |
| $k < 0$ | Exponential **decay** |
| $e^{kt}$ | Growth/decay factor |

> **Key Fact:** "Rate proportional to amount" always means $\\frac{dy}{dt} = ky$. This is the most common DE on the AP exam.`
    },
    {
      id: 'exp1-solving',
      type: 'text' as const,
      content: `### Finding the Growth Constant $k$

**Step-by-step from two data points:**

| Step | Action | Example |
|:---:|:---:|:---:|
| 1 | Write model | $y = y_0 e^{kt}$ |
| 2 | Plug in first point | $y_0 = 500$ (at $t=0$) |
| 3 | Plug in second point | $1500 = 500e^{2k}$ |
| 4 | Isolate exponential | $e^{2k} = 3$ |
| 5 | Take $\\ln$ | $2k = \\ln 3$ |
| 6 | Solve for $k$ | $k = \\frac{\\ln 3}{2} \\approx 0.549$ |

### Doubling Time and Half-Life

$$\\boxed{t_{\\text{double}} = \\frac{\\ln 2}{k}} \\qquad \\boxed{t_{\\text{half}} = \\frac{\\ln 2}{|k|}}$$

| Quantity | Growth ($k>0$) | Decay ($k<0$) |
|:---:|:---:|:---:|
| Doubling time | $\\frac{\\ln 2}{k}$ | N/A |
| Half-life | N/A | $\\frac{\\ln 2}{|k|}$ |
| Triple time | $\\frac{\\ln 3}{k}$ | N/A |
| $n$ half-lives | N/A | $y_0 \\cdot (\\tfrac{1}{2})^n$ remains |

> **AP Tip:** The Rule of 70: doubling time $\\approx \\frac{70}{\\text{percent rate}}$. E.g., 7% growth $\\Rightarrow$ doubles in $\\approx 10$ years.`
    },
    {
      id: 'exp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Growth & Decay** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A population of 200 grows to 800 in 6 hours. The growth constant $k$ is:',
            options: ['$\\frac{\\ln 4}{6}$', '$\\frac{\\ln 2}{6}$', '$\\frac{4}{6}$', '$\\frac{\\ln 800}{6}$'],
            correctAnswer: 0,
            explanation: '$800 = 200e^{6k}$. $4 = e^{6k}$. $k = \\frac{\\ln 4}{6}$.'
          },
          {
            question: 'A radioactive substance decays from 100 g to 75 g in 10 years. Its half-life is:',
            options: ['$\\frac{10\\ln 2}{\\ln(4/3)}$', '$\\frac{10}{\\ln 2}$', '$20$ years', '$5\\ln 2$ years'],
            correctAnswer: 0,
            explanation: '$75 = 100e^{10k}$. $k = \\frac{\\ln(3/4)}{10}$. Half-life $= \\frac{\\ln 2}{|k|} = \\frac{10\\ln 2}{\\ln(4/3)}$.'
          },
          {
            question: 'A bacteria population doubles every 3 hours. Starting with 1000, the population after 12 hours is:',
            options: ['$4000$', '$8000$', '$16000$', '$12000$'],
            correctAnswer: 2,
            explanation: '12 hours = 4 doubling periods. $1000 \\cdot 2^4 = 16000$.'
          }
        ]
      }
    },
    {
      id: 'exp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each scenario.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'A substance loses 20% of its mass each year. This is:',
            options: ['Exponential growth', 'Exponential decay with $k = \\ln(0.8)$', 'Linear decay', 'Logistic growth'],
            correctAnswers: ['Exponential decay with $k = \\ln(0.8)$'],
            hints: ['After 1 year: $y_0 \\cdot 0.8 = y_0 e^k$, so $e^k = 0.8$.'],
            explanation: '$k = \\ln(0.8) < 0$, confirming exponential decay.'
          },
          {
            label: 'Doubling time of a population with $k = 0.1$ per year:',
            options: ['$7$ years', '$\\frac{\\ln 2}{0.1} \\approx 6.93$ years', '$10$ years', '$\\frac{0.1}{\\ln 2}$ years'],
            correctAnswers: ['$\\frac{\\ln 2}{0.1} \\approx 6.93$ years'],
            hints: ['$t_{double} = \\frac{\\ln 2}{k}$.'],
            explanation: '$\\frac{\\ln 2}{0.1} = 10 \\ln 2 \\approx 6.93$ years.'
          },
          {
            label: 'After 3 half-lives, what fraction of the original amount remains?',
            options: ['$1/3$', '$1/6$', '$1/8$', '$1/4$'],
            correctAnswers: ['$1/8$'],
            hints: ['Each half-life cuts the amount in half.'],
            explanation: '$(1/2)^3 = 1/8$.'
          }
        ]
      }
    },
    {
      id: 'exp1-input',
      type: 'input-box' as const,
      content: '**Solve for the growth constant.** \u270d\ufe0f',
      exercise: {
        question: 'A population grows from 400 to 1600 in 8 hours. The doubling time (in hours) is:\n\n(Enter an integer.)',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: [
          '$1600/400 = 4 = 2^2$, so 2 doublings occurred.',
          '2 doublings in 8 hours means each doubling takes $8/2$ hours.',
          'Alternatively: $k = \\frac{\\ln 4}{8} = \\frac{\\ln 2}{4}$, so $t_{double} = \\frac{\\ln 2}{k} = 4$.'
        ],
        explanation: '$1600 = 400 \\cdot 2^2$: two doublings in 8 hours. Doubling time $= 4$ hours.'
      }
    },
    {
      id: 'exp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Concept | Formula |
|:---:|:---:|
| Exponential model | $y = y_0 e^{kt}$ |
| Finding $k$ | $k = \\frac{\\ln(y/y_0)}{t}$ |
| Doubling time | $\\frac{\\ln 2}{k}$ |
| Half-life | $\\frac{\\ln 2}{|k|}$ |

> **Up Next:** Part 2 \u2014 Newton\u2019s Law of Cooling.`
    }
  ]
};
