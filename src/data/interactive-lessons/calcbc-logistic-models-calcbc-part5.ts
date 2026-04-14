export const calcbcLogisticPart5Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Logistic Growth

**Part 5 of 7 — Common Question Patterns**

### What the AP Tests

| Concept | How it's tested | Point value |
|---------|----------------|-------------|
| Identify $L$ | "What is the carrying capacity?" | 1 |
| Max growth rate | "When is growth fastest?" or "Find max $dP/dt$" | 1–2 |
| Solve for $P(t)$ | Separation of variables | 3–4 |
| Concavity / inflection | "$d^2P/dt^2$ analysis" | 2 |
| Euler + logistic | "Approximate $P(2)$ with 2 steps" | 2–3 |

### Quick Facts to Memorize

$$\\boxed{\\begin{aligned} &\\text{Carrying capacity:} \\quad L \\\\ &\\text{Max growth at:} \\quad P = L/2 \\\\ &\\text{Max rate:} \\quad kL/4 \\\\ &\\text{Solution:} \\quad P = \\frac{L}{1 + Ae^{-kt}} \\\\ &\\text{Inflection time:} \\quad t = \\frac{\\ln A}{k} \\end{aligned}}$$

### Form Recognition

| Given equation | $k$ | $L$ |
|---------------|-----|-----|
| $dP/dt = 0.3P(1 - P/400)$ | $0.3$ | $400$ |
| $dP/dt = P(5 - 0.01P)$ | $5$ | $500$ |
| $dP/dt = 2P - P^2/250$ | $2$ | $500$ |

> **AP Tip:** If asked "for what value of $P$ is $d^2P/dt^2 = 0$?", the answer is always $P = L/2$. Don't waste time computing the second derivative.`
    },
    {
      id: 'log5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: '$dP/dt = 3P - 0.006P^2$. For what value of $P$ is the population growing fastest?',
            options: ['$P = 250$ ($L = 500$, max at $L/2$)', '$P = 500$', '$P = 3$', '$P = 125$'],
            correctAnswer: 0,
            explanation: '$3P - 0.006P^2 = 3P(1 - 0.002P) = 3P(1 - P/500)$. $L = 500$, max at $L/2 = 250$.'
          },
          {
            question: 'A logistic curve satisfies $\\lim_{t\\to\\infty} P(t) = 5000$ and $P(0) = 500$. What is $A$?',
            options: ['$A = 9$', '$A = 10$', '$A = 4500$', '$A = 500$'],
            correctAnswer: 0,
            explanation: '$A = (L - P_0)/P_0 = (5000 - 500)/500 = 4500/500 = 9$.'
          },
          {
            question: 'On a logistic curve, the population is 200 and growing. The carrying capacity is 1000. The curve is:',
            options: ['Concave up (since $200 < L/2 = 500$)', 'Concave down', 'At inflection', 'Linear'],
            correctAnswer: 0,
            explanation: '$P = 200 < 500 = L/2$ → below inflection → concave up.'
          }
        ]
      }
    },
    {
      id: 'log5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Quick Identification**',
      exercise: {
        dropdowns: [
          {
            label: '$dP/dt = P(10 - 0.05P)$. The carrying capacity $L =$',
            options: ['$200$ ($L = a/b = 10/0.05$)', '$10$', '$0.05$', '$2000$'],
            correctAnswers: ['$200$ ($L = a/b = 10/0.05$)'],
            hints: ['$P(a - bP) = aP(1 - P/(a/b))$. $L = a/b$.'],
            explanation: '$L = 10/0.05 = 200$.'
          },
          {
            label: 'The maximum value of $dP/dt$ for this equation is:',
            options: ['$kL/4 = 10(200)/4 = 500$', '$10(200) = 2000$', '$200/4 = 50$', '$10/4 = 2.5$'],
            correctAnswers: ['$kL/4 = 10(200)/4 = 500$'],
            hints: ['$k = 10$, $L = 200$. Max rate $= kL/4$.'],
            explanation: 'Max rate $= 10 \\cdot 200/4 = 500$.'
          }
        ]
      }
    },
    {
      id: 'log5-input',
      type: 'input-box' as const,
      content: '**Compute A**',
      exercise: {
        question: 'A logistic model has $L = 800$ and $P(0) = 100$. What is $A = (L - P_0)/P_0$?',
        correctAnswer: '7',
        acceptableAnswers: ['7', '7.0'],
        hints: ['$A = (800 - 100)/100$.'],
        explanation: '$A = 700/100 = 7$.'
      }
    },
    {
      id: 'log5-summary',
      type: 'text' as const,
      content: `### Summary

- Memorize: $L$, $L/2$, $kL/4$, $A = (L-P_0)/P_0$
- Recognize non-standard forms quickly
- Inflection = $P = L/2$ always
- No need to compute $d^2P/dt^2$ explicitly

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
