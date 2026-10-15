export const calcabExpModelsPart7Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp7-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Complete Formula Reference

| Model | DE | Solution |
|:---:|:---:|:---:|
| Exponential growth | $dy/dt = ky$, $k>0$ | $y = y_0 e^{kt}$ |
| Exponential decay | $dy/dt = ky$, $k<0$ | $y = y_0 e^{kt}$ |
| Newton\u2019s cooling | $dT/dt = k(T-T_s)$ | $T = T_s+(T_0-T_s)e^{kt}$ |
| Limited growth | $dy/dt = k(A-y)$ | $y = A-(A-y_0)e^{-kt}$ |
| Continuous compounding | $dA/dt = rA$ | $A = Pe^{rt}$ |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Using wrong sign for $k$ | Decay: $k < 0$. Growth: $k > 0$. |
| Forgetting $T_s$ in Newton\u2019s Law | $T = T_s + (\\text{diff})e^{kt}$, not $T = T_0 e^{kt}$ |
| Losing the sign in $\\int \\frac{dy}{A - y}$ | It equals $-\\ln\\lvert A - y\\rvert + C$ |
| Confusing half-life formula | $t_{1/2} = \\frac{\\ln 2}{|k|}$, not $\\frac{1}{2k}$ |
| Wrong doubling formula | $t_{double} = \\frac{\\ln 2}{k}$, not $\\frac{2}{k}$ |
| Not checking units | Rate units = (quantity units)/(time units) |`
    },
    {
      id: 'exp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Growth & Decay** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Carbon-14 has a half-life of 5730 years. A sample has 25% of its original C-14. How old is it?',
            options: ['$11460$ years', '$5730$ years', '$17190$ years', '$2865$ years'],
            correctAnswer: 0,
            explanation: '25% $= (1/2)^2$: 2 half-lives $= 2 \\times 5730 = 11460$ years.'
          },
          {
            question: 'A bacteria culture has $k = 0.02$ per minute. How long to increase by a factor of 5?',
            options: ['$\\frac{\\ln 5}{0.02} \\approx 80.47$ min', '$\\frac{5}{0.02} = 250$ min', '$\\frac{\\ln 2}{0.02} \\approx 34.7$ min', '$\\frac{\\ln 5}{2} \\approx 0.805$ min'],
            correctAnswer: 0,
            explanation: '$5 = e^{0.02t}$. $t = \\frac{\\ln 5}{0.02} \\approx 80.47$ min. $\\frac{5}{0.02}$ forgets the logarithm; $\\frac{\\ln 2}{0.02}$ is the doubling time, not the time to grow fivefold; using $2$ instead of $0.02$ for the rate gives under a minute.'
          },
          {
            question: 'A drug amount satisfies $\\frac{dA}{dt} = kA$ and has a half-life of $4$ hours. Then $k =$',
            options: ['$\\frac{\\ln 2}{4}$', '$-\\frac{\\ln 2}{4}$', '$-\\frac{1}{8}$', '$-4\\ln 2$'],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2} = e^{4k}$ gives $k = \\frac{\\ln(1/2)}{4} = -\\frac{\\ln 2}{4} \\approx -0.173$ per hour. The positive value describes growth, $-\\frac{1}{8}$ skips the logarithm, and $-4\\ln 2$ multiplies by the half-life instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'exp7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Cooling & Limited Growth** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$T(t) = 72 + 128e^{-0.05t}$. The ambient temperature is:',
            options: ['$72\u00b0$', '$200\u00b0$', '$128\u00b0$', '$0\u00b0$'],
            correctAnswer: 0,
            explanation: 'As $t \\to \\infty$, $T \\to 72$. Ambient = $T_s = 72\u00b0$.'
          },
          {
            question: 'If $\\frac{dy}{dt} = 6 - 0.002y$ and $y(0) = 0$, then as $t \\to \\infty$, $y$ approaches:',
            options: ['$3000$', '$6$', '$0.012$', '$0.002$'],
            correctAnswer: 0,
            explanation: 'Factor: $6 - 0.002y = 0.002(3000 - y)$, a gap model with limit $3000$; the rate is $0$ exactly when $y = 3000$. The $6$ is the starting rate, $0.012$ multiplies $6$ by $0.002$ instead of dividing, and $0.002$ is the constant $k$.'
          },
          {
            question: 'For $\\frac{dy}{dt} = 0.5(80 - y)$ with $y(0) = 20$, the particular solution is:',
            options: ['$y = 80 - 60e^{-0.5t}$', '$y = 80 - 20e^{-0.5t}$', '$y = 20 + 60e^{-0.5t}$', '$y = 80e^{-0.5t}$'],
            correctAnswer: 0,
            explanation: 'Separating gives $80 - y = Be^{-0.5t}$, and $y(0) = 20$ gives $B = 60$. Using $20$ as the coefficient confuses the starting value with the gap, $20 + 60e^{-0.5t}$ decreases toward $20$ instead of rising to $80$, and $80e^{-0.5t}$ treats the model as plain decay.'
          },
          {
            question: 'A substance with $k = -0.1$ per hour. After how many hours is 10% remaining?',
            options: ['$\\frac{\\ln 10}{0.1} \\approx 23.03$ hr', '$\\frac{0.9}{0.1} = 9$ hr', '$\\frac{\\ln 2}{0.1} \\approx 6.931$ hr', '$-10\\ln 0.9 \\approx 1.054$ hr'],
            correctAnswer: 0,
            explanation: '$0.1 = e^{-0.1t}$. $-0.1t = \\ln(0.1) = -\\ln 10$. $t = \\frac{\\ln 10}{0.1} \\approx 23.03$ hr. Losing a fixed 10% of the original each hour (linear thinking) gives $9$ hr; $\\frac{\\ln 2}{0.1}$ is the half-life (50% left, not 10%); $-10\\ln 0.9$ finds when 90% remains.'
          }
        ]
      }
    },
    {
      id: 'exp7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{dy}{dt} = 0.03(500 - y)$ with $y(0) = 100$. As $t \\to \\infty$, $y \\to$',
            options: ['$500$', '$0.03$', '$100$', '$\\infty$'],
            correctAnswers: ['$500$'],
            hints: ['The rate is $0$ when $y = 500$, and $y$ rises toward that value while $y < 500$.'],
            explanation: 'While $y < 500$, $\\frac{dy}{dt} > 0$ and the gap shrinks, so $y \\to 500$.'
          },
          {
            label: 'If $y = 5e^{3t}$, then $\\frac{dy}{dt} =$',
            options: ['Both $y$ and $5e^{3t}$', 'Both $15y$ and $75e^{3t}$', 'Both $3ty$ and $15te^{3t}$', 'Both $3y$ and $15e^{3t}$'],
            correctAnswers: ['Both $3y$ and $15e^{3t}$'],
            hints: ['$dy/dt = 15e^{3t} = 3(5e^{3t}) = 3y$.'],
            explanation: '$\\frac{dy}{dt} = 5e^{3t} \\cdot 3 = 15e^{3t} = 3y$. Forgetting the chain factor $3$ gives $5e^{3t} = y$; $15y$ multiplies by the coefficient $5$ a second time; bringing down the whole exponent $3t$ treats $e^{3t}$ like a power.'
          },
          {
            label: 'Newton\u2019s Law applied to warming ($T_0 < T_s$): the object\u2019s temperature is:',
            options: ['Increasing, concave down', 'Increasing, concave up', 'Decreasing toward $T_s$', 'Constant'],
            correctAnswers: ['Increasing, concave down'],
            hints: ['Temperature increases toward $T_s$ from below, decelerating.'],
            explanation: 'The gap shrinks exponentially, so temperature rises but at a decreasing rate: concave down.'
          }
        ]
      }
    },
    {
      id: 'exp7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** \u270d\ufe0f',
      exercise: {
        question: 'A substance decays with half-life 4 years. Starting with 256 grams, how many grams remain after 20 years?\n\n(Enter an integer.)',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: [
          'Number of half-lives: $20/4 = 5$.',
          'Remaining: $256 \\cdot (1/2)^5$.',
          '$256/32 = ?$'
        ],
        explanation: '5 half-lives: $256 \\cdot (1/2)^5 = 256/32 = 8$ grams.'
      }
    },
    {
      id: 'exp7-summary',
      type: 'text' as const,
      content: `### Exponential Models \u2014 Complete!

You\u2019ve mastered:

| Part | Topic |
|:---:|:---:|
| 1 | Exponential growth & decay |
| 2 | Newton\u2019s Law of Cooling |
| 3 | Doubling time and half-life |
| 4 | Derivatives & integrals of exponentials |
| 5 | Writing and solving rate models |
| 6 | Problem-solving workshop |
| 7 | Comprehensive assessment |

> **You\u2019re ready for AP-level exponential model problems!**`
    }
  ]
};
