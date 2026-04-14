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
| Logistic | $dP/dt=kP(1-P/L)$ | $P \\to L$ as $t \\to \\infty$ |
| Continuous compounding | $dA/dt = rA$ | $A = Pe^{rt}$ |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Using wrong sign for $k$ | Decay: $k < 0$. Growth: $k > 0$. |
| Forgetting $T_s$ in Newton\u2019s Law | $T = T_s + (\\text{diff})e^{kt}$, not $T = T_0 e^{kt}$ |
| Max logistic rate at $P=L$ | Max rate at $P = L/2$, NOT at $L$ |
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
            options: ['$\\frac{\\ln 5}{0.02} \\approx 80.5$ min', '$\\frac{5}{0.02} = 250$ min', '$50\\ln 5$ min', '$\\frac{\\ln 2}{0.02}$ min'],
            correctAnswer: 0,
            explanation: '$5 = e^{0.02t}$. $t = \\frac{\\ln 5}{0.02} \\approx 80.5$ min.'
          },
          {
            question: 'With continuous compounding at 6%, the effective annual rate is:',
            options: ['$6\\%$', '$e^{0.06}-1 \\approx 6.18\\%$', '$6.09\\%$', '$5.83\\%$'],
            correctAnswer: 1,
            explanation: 'Effective rate $= e^r - 1 = e^{0.06} - 1 \\approx 6.18\\%$.'
          }
        ]
      }
    },
    {
      id: 'exp7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Cooling & Logistic** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$T(t) = 72 + 128e^{-0.05t}$. The ambient temperature is:',
            options: ['$72\u00b0$', '$200\u00b0$', '$128\u00b0$', '$0\u00b0$'],
            correctAnswer: 0,
            explanation: 'As $t \\to \\infty$, $T \\to 72$. Ambient = $T_s = 72\u00b0$.'
          },
          {
            question: '$\\frac{dP}{dt} = 2P - 0.001P^2$. The carrying capacity is:',
            options: ['$2000$', '$1000$', '$0.001$', '$2$'],
            correctAnswer: 0,
            explanation: 'Factor: $P(2-0.001P) = 2P(1-P/2000)$. So $L = 2000$.'
          },
          {
            question: 'In the logistic equation $\\frac{dP}{dt} = 2P(1-P/2000)$, the maximum growth rate is:',
            options: ['$1000$', '$2000$', '$4000$', '$500$'],
            correctAnswer: 0,
            explanation: '$kL/4 = 2(2000)/4 = 1000$.'
          },
          {
            question: 'A substance with $k = -0.1$ per hour. After how many hours is 10% remaining?',
            options: ['$\\frac{\\ln 10}{0.1} \\approx 23.03$ hr', '$10$ hr', '$\\frac{\\ln 2}{0.1}$ hr', '$100$ hr'],
            correctAnswer: 0,
            explanation: '$0.1 = e^{-0.1t}$. $-0.1t = \\ln(0.1) = -\\ln 10$. $t = \\frac{\\ln 10}{0.1} \\approx 23.03$ hr.'
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
            label: '$\\frac{dy}{dt} = 0.03y(500-y)$ can be rewritten in standard logistic form with $L =$',
            options: ['$500$', '$0.03$', '$15$', '$500/0.03$'],
            correctAnswers: ['$500$'],
            hints: ['$0.03y(500-y) = 0.03 \\cdot 500 \\cdot y(1-y/500) = 15y(1-y/500)$.'],
            explanation: '$k_{\\text{eff}} = 15$, $L = 500$.'
          },
          {
            label: 'If $y = 5e^{3t}$, then $\\frac{dy}{dt} =$',
            options: ['$3y$', '$5y$', '$15e^{3t}$', 'Both $3y$ and $15e^{3t}$'],
            correctAnswers: ['Both $3y$ and $15e^{3t}$'],
            hints: ['$dy/dt = 15e^{3t} = 3(5e^{3t}) = 3y$.'],
            explanation: '$15e^{3t} = 3y$. Both expressions are equivalent.'
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
| 3 | Compound interest & continuous growth |
| 4 | Derivatives & integrals of exponentials |
| 5 | Logistic growth |
| 6 | Problem-solving workshop |
| 7 | Comprehensive assessment |

> **You\u2019re ready for AP-level exponential model problems!**`
    }
  ]
};
