export const calcbcLogisticPart7Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review — Logistic Models

**Part 7 of 7 — Final Assessment**

### Master Reference

| Concept | Formula |
|---------|---------|
| Logistic DE | $dP/dt = kP(1 - P/L)$ |
| Solution | $P(t) = L/(1 + Ae^{-kt})$ |
| Constant $A$ | $(L - P_0)/P_0$ |
| Max growth at | $P = L/2$ |
| Max growth rate | $kL/4$ |
| Inflection time | $t = \\ln(A)/k$ |
| Long-term behavior | $P \\to L$ |
| Concave up | $P < L/2$ |
| Concave down | $P > L/2$ |
| Non-standard form | $aP - bP^2 \\to k = a,\\; L = a/b$ |

$$\\boxed{P(t) = \\frac{L}{1 + \\frac{L - P_0}{P_0}e^{-kt}}}$$`
    },
    {
      id: 'log7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review Set A**',
      exercise: {
        questions: [
          {
            question: '$dP/dt = 5P(1 - P/200)$. The population when $d^2P/dt^2 = 0$ is:',
            options: ['$P = 100$', '$P = 200$', '$P = 50$', '$P = 0$'],
            correctAnswer: 0,
            explanation: 'Inflection (where $d^2P/dt^2 = 0$) occurs at $P = L/2 = 100$.'
          },
          {
            question: '$P(t) = 1200/(1 + 11e^{-0.3t})$. What is $P(0)$?',
            options: ['$100$', '$1200$', '$11$', '$109$'],
            correctAnswer: 0,
            explanation: '$P(0) = 1200/(1 + 11) = 1200/12 = 100$.'
          },
          {
            question: 'The logistic and exponential models agree most closely when:',
            options: ['$P$ is much less than $L$ (early growth)', '$P$ is close to $L$', '$P = L/2$', 'They never agree'],
            correctAnswer: 0,
            explanation: 'When $P \\ll L$, $1 - P/L \\approx 1$, so $dP/dt \\approx kP$ (exponential).'
          }
        ]
      }
    },
    {
      id: 'log7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review Set B**',
      exercise: {
        questions: [
          {
            question: 'If $dP/dt = 0.2P(1 - P/350)$ and $P = 175$, then $dP/dt =$',
            options: ['$0.2(175)(0.5) = 17.5$', '$0.2(175) = 35$', '$0.2(350)(0.5) = 35$', '$0.1(175) = 17.5$'],
            correctAnswer: 0,
            explanation: '$dP/dt = 0.2(175)(1 - 175/350) = 0.2(175)(0.5) = 17.5$. This is the maximum rate ($kL/4 = 0.2(350)/4 = 17.5$).'
          },
          {
            question: 'A population starts at $P_0 = 1000$ in an environment with $L = 800$. The population will:',
            options: ['Decrease toward 800', 'Increase toward 800', 'Stay at 1000', 'Oscillate'],
            correctAnswer: 0,
            explanation: '$P_0 > L$, so $1 - P/L < 0$, $dP/dt < 0$. Population decreases to $L$.'
          }
        ]
      }
    },
    {
      id: 'log7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Full Problem**\n\n$dP/dt = 0.6P - 0.001P^2$, $P(0) = 60$.',
      exercise: {
        dropdowns: [
          {
            label: '$k$ and $L$:',
            options: ['$k = 0.6$, $L = 600$', '$k = 0.001$, $L = 600$', '$k = 0.6$, $L = 0.001$', '$k = 600$, $L = 0.6$'],
            correctAnswers: ['$k = 0.6$, $L = 600$'],
            hints: ['Factor: $0.6P(1 - P/600)$. $k = 0.6$, $L = 0.6/0.001 = 600$.'],
            explanation: '$0.6P - 0.001P^2 = 0.6P(1 - P/600)$.'
          },
          {
            label: '$A =$',
            options: ['$9$ ($(600-60)/60$)', '$10$', '$540$', '$0.1$'],
            correctAnswers: ['$9$ ($(600-60)/60$)'],
            hints: ['$A = (L - P_0)/P_0$.'],
            explanation: '$A = 540/60 = 9$.'
          },
          {
            label: 'The solution is:',
            options: ['$P(t) = 600/(1 + 9e^{-0.6t})$', '$P(t) = 600/(1 + 9e^{0.6t})$', '$P(t) = 60/(1 + 9e^{-0.6t})$', '$P(t) = 600e^{0.6t}$'],
            correctAnswers: ['$P(t) = 600/(1 + 9e^{-0.6t})$'],
            hints: ['$P(t) = L/(1 + Ae^{-kt})$.'],
            explanation: '$P(t) = 600/(1 + 9e^{-0.6t})$. Verify: $P(0) = 600/10 = 60$ ✓.'
          }
        ]
      }
    },
    {
      id: 'log7-input',
      type: 'input-box' as const,
      content: '**Final Challenge**',
      exercise: {
        question: '$P(t) = 400/(1 + 3e^{-2t})$. At what time is the population growing fastest? Give an exact answer as a decimal to two places.',
        correctAnswer: '0.55',
        acceptableAnswers: ['0.55', '0.549', '0.5493', 'ln(3)/2'],
        hints: ['Max growth at $P = L/2 = 200$. $t = \\ln(A)/k = \\ln(3)/2$.'],
        explanation: '$t = \\ln(3)/2 \\approx 1.099/2 \\approx 0.55$.'
      }
    },
    {
      id: 'log7-summary',
      type: 'text' as const,
      content: `### Logistic Models — Complete

You've mastered:
- The logistic DE and its solution via separation of variables
- Identifying $k$, $L$, and $A$ from any form
- Inflection points, concavity, and phase line analysis
- Real-world applications and AP exam strategies

$$\\boxed{\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right) \\quad \\Rightarrow \\quad P(t) = \\frac{L}{1 + Ae^{-kt}}}$$`
    }
  ]
};
