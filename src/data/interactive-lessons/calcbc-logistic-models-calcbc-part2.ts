export const calcbcLogisticPart2Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log2-intro',
      type: 'text' as const,
      content: `# Solving Logistic DEs

**Part 2 of 7 — Separation of Variables and Partial Fractions**

### Derivation of the Solution

To solve $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$:

**Step 1:** Separate variables:
$$\\frac{dP}{P(1 - P/L)} = k\\,dt$$

**Step 2:** Partial fractions on the left side:
$$\\frac{1}{P(1 - P/L)} = \\frac{L}{P(L - P)} = \\frac{1}{P} + \\frac{1}{L - P}$$

**Step 3:** Integrate both sides:
$$\\ln|P| - \\ln|L - P| = kt + C$$

$$\\ln\\left|\\frac{P}{L - P}\\right| = kt + C$$

**Step 4:** Solve for $P$:
$$\\frac{P}{L - P} = Ae^{kt} \\quad \\Rightarrow \\quad P = \\frac{AL e^{kt}}{1 + Ae^{kt}} = \\frac{L}{1 + A^{-1}e^{-kt}}$$

With initial condition $P(0) = P_0$: $A = P_0/(L - P_0)$, giving $A^{-1} = (L - P_0)/P_0$.

$$\\boxed{P(t) = \\frac{L}{1 + \\frac{L - P_0}{P_0}e^{-kt}}}$$`
    },
    {
      id: 'log2-alt',
      type: 'text' as const,
      content: `### Alternative Forms

The logistic equation sometimes appears in different forms:

| Form | Equivalent standard form | $k$ | $L$ |
|------|------------------------|-----|-----|
| $dP/dt = kP(1 - P/L)$ | Standard | $k$ | $L$ |
| $dP/dt = P(a - bP)$ | $= aP(1 - P/(a/b))$ | $a$ | $a/b$ |
| $dP/dt = rP(L - P)/L$ | Same as standard | $r$ | $L$ |
| $dP/dt = rP - rP^2/L$ | Expanded standard | $r$ | $L$ |

### Example: Non-Standard Form

$dP/dt = P(3 - 0.01P)$

Identify: $a = 3$, $b = 0.01$, so $k = 3$, $L = 3/0.01 = 300$.

Rewrite: $dP/dt = 3P(1 - P/300)$

With $P(0) = 50$: $A = (300 - 50)/50 = 5$

$$P(t) = \\frac{300}{1 + 5e^{-3t}}$$

> **AP Tip:** The AP exam often gives the equation in a non-standard form. Always factor to identify $k$ and $L$.`
    },
    {
      id: 'log2-mc1',
      type: 'multiple-choice' as const,
      content: '**Identifying Parameters**',
      exercise: {
        questions: [
          {
            question: '$dP/dt = 0.5P - 0.001P^2$. What is the carrying capacity $L$?',
            options: ['$L = 500$ (factor: $0.5P(1 - P/500)$)', '$L = 0.001$', '$L = 0.5$', '$L = 1000$'],
            correctAnswer: 0,
            explanation: '$0.5P - 0.001P^2 = 0.5P(1 - 0.002P) = 0.5P(1 - P/500)$. $L = 500$.'
          },
          {
            question: 'For $dP/dt = P(6 - 2P)$, the maximum growth rate is:',
            options: ['$kL/4 = 6(3)/4 = 4.5$', '$kL/4 = 6(6)/4 = 9$', '$6 \\cdot 2 = 12$', '$6/4 = 1.5$'],
            correctAnswer: 0,
            explanation: '$P(6 - 2P) = 6P(1 - P/3)$. $k = 6$, $L = 3$. Max rate $= 6(3)/4 = 4.5$.'
          },
          {
            question: 'The partial fraction decomposition of $\\frac{1}{P(L-P)}$ is:',
            options: ['$\\frac{1}{L}\\left(\\frac{1}{P} + \\frac{1}{L-P}\\right)$', '$\\frac{1}{P} - \\frac{1}{L-P}$', '$\\frac{1}{PL} + \\frac{1}{L-P}$', '$\\frac{L}{P(L-P)}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{P(L-P)} = \\frac{A}{P} + \\frac{B}{L-P}$. $1 = A(L-P) + BP$. $P=0: A = 1/L$. $P=L: B = 1/L$.'
          }
        ]
      }
    },
    {
      id: 'log2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Solve the Logistic Equation**\n\n$dP/dt = 2P(1 - P/100)$, $P(0) = 10$',
      exercise: {
        dropdowns: [
          {
            label: '$A = (L - P_0)/P_0 =$',
            options: ['$(100 - 10)/10 = 9$', '$(100 - 10)/100 = 0.9$', '$10/100 = 0.1$', '$100/10 = 10$'],
            correctAnswers: ['$(100 - 10)/10 = 9$'],
            hints: ['$A = (L - P_0)/P_0 = (100 - 10)/10$.'],
            explanation: '$A = 90/10 = 9$.'
          },
          {
            label: 'The solution $P(t) =$',
            options: ['$100/(1 + 9e^{-2t})$', '$100/(1 + 9e^{2t})$', '$10/(1 + 9e^{-2t})$', '$100/(1 + 10e^{-2t})$'],
            correctAnswers: ['$100/(1 + 9e^{-2t})$'],
            hints: ['$P(t) = L/(1 + Ae^{-kt}) = 100/(1 + 9e^{-2t})$.'],
            explanation: '$P(t) = 100/(1 + 9e^{-2t})$. Check: $P(0) = 100/10 = 10$ ✓.'
          }
        ]
      }
    },
    {
      id: 'log2-input',
      type: 'input-box' as const,
      content: '**Carrying Capacity**',
      exercise: {
        question: '$dP/dt = 4P - 0.02P^2$. Factor to find $L$. Enter the carrying capacity as a number.',
        correctAnswer: '200',
        acceptableAnswers: ['200', '200.0'],
        hints: ['$4P - 0.02P^2 = 4P(1 - 0.005P) = 4P(1 - P/200)$.'],
        explanation: '$4P(1 - P/200)$. $L = 200$.'
      }
    },
    {
      id: 'log2-summary',
      type: 'text' as const,
      content: `### Summary

- Solve logistic DE via separation of variables + partial fractions
- Solution: $P(t) = L/(1 + Ae^{-kt})$
- Recognize non-standard forms: factor to identify $k$ and $L$
- $dP/dt = aP - bP^2$ → $k = a$, $L = a/b$

> **Next:** Part 3 — Logistic Curve Analysis and Inflection Points.`
    }
  ]
};
