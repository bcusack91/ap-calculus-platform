export const calcbcLogisticPart1Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log1-intro',
      type: 'text' as const,
      content: `# Logistic Growth — The Differential Equation

**Part 1 of 7 — From Exponential to Logistic**

### Why Logistic?

Exponential growth ($dP/dt = kP$) assumes unlimited resources. In reality, populations encounter a **carrying capacity** $L$ (maximum sustainable population).

### The Logistic Differential Equation

$$\\boxed{\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)}$$

| Parameter | Meaning |
|-----------|---------|
| $P$ | Population at time $t$ |
| $k$ | Growth rate constant |
| $L$ | Carrying capacity |
| $kP$ | Exponential growth term |
| $1 - P/L$ | Braking factor |

### Behavior Analysis

| Condition | $1 - P/L$ | $dP/dt$ | Population... |
|-----------|-----------|---------|---------------|
| $P \\ll L$ | $\\approx 1$ | $\\approx kP$ | Grows exponentially |
| $P = L/2$ | $= 1/2$ | $= kL/4$ (maximum!) | Growing fastest |
| $P \\approx L$ | $\\approx 0$ | $\\approx 0$ | Leveling off |
| $P = L$ | $= 0$ | $= 0$ | Equilibrium |
| $P > L$ | $< 0$ | $< 0$ | Decreasing toward $L$ |

> **Key Fact:** The growth rate $dP/dt$ is maximized when $P = L/2$. This is the **inflection point** of the logistic curve.`
    },
    {
      id: 'log1-solution',
      type: 'text' as const,
      content: `### The Logistic Solution

The general solution to $dP/dt = kP(1 - P/L)$ with $P(0) = P_0$ is:

$$\\boxed{P(t) = \\frac{L}{1 + Ae^{-kt}} \\quad \\text{where } A = \\frac{L - P_0}{P_0}}$$

### Key Properties of the Solution

| Property | Value/Behavior |
|----------|---------------|
| $P(0)$ | $P_0$ |
| $\\lim_{t \\to \\infty} P(t)$ | $L$ |
| Inflection point | $P = L/2$ |
| Max growth rate | $kL/4$ |
| Shape | S-curve (sigmoid) |

### Example

A population grows logistically with $L = 1000$, $k = 0.5$, $P_0 = 100$.

$A = (1000 - 100)/100 = 9$

$$P(t) = \\frac{1000}{1 + 9e^{-0.5t}}$$

- $P(0) = 1000/(1 + 9) = 100$ ✓
- $P(\\infty) = 1000/(1 + 0) = 1000$ ✓
- Inflection at $P = 500$: $500 = 1000/(1 + 9e^{-0.5t})$ → $t = \\ln(9)/0.5 \\approx 4.39$`
    },
    {
      id: 'log1-mc1',
      type: 'multiple-choice' as const,
      content: '**Logistic Fundamentals**',
      exercise: {
        questions: [
          {
            question: 'For $dP/dt = 0.3P(1 - P/500)$, identify $k$ and $L$.',
            options: ['$k = 0.3$, $L = 500$', '$k = 0.3$, $L = 1/500$', '$k = 500$, $L = 0.3$', '$k = 0.3/500$, $L = 500$'],
            correctAnswer: 0,
            explanation: 'Standard form: $kP(1 - P/L)$. $k = 0.3$, $L = 500$.'
          },
          {
            question: 'At what population is the growth rate $dP/dt$ maximized?',
            options: ['$P = L/2 = 250$', '$P = L = 500$', '$P = 0$', '$P = L/4 = 125$'],
            correctAnswer: 0,
            explanation: 'Max growth rate occurs at $P = L/2$. This is the inflection point of the sigmoid.'
          },
          {
            question: 'If a population starts ABOVE the carrying capacity ($P_0 > L$), the population:',
            options: ['Decreases toward $L$', 'Increases toward infinity', 'Goes to zero', 'Stays at $P_0$'],
            correctAnswer: 0,
            explanation: 'When $P > L$, $1 - P/L < 0$, so $dP/dt < 0$. Population decreases toward $L$.'
          }
        ]
      }
    },
    {
      id: 'log1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Logistic Model Setup**',
      exercise: {
        dropdowns: [
          {
            label: '$dP/dt = 2P(1 - P/800)$. The maximum growth rate $dP/dt$ equals:',
            options: ['$kL/4 = 2(800)/4 = 400$', '$kL = 1600$', '$k/L = 2/800$', '$L/2 = 400$'],
            correctAnswers: ['$kL/4 = 2(800)/4 = 400$'],
            hints: ['Max $dP/dt$ at $P = L/2$: $dP/dt = k(L/2)(1 - 1/2) = kL/4$.'],
            explanation: 'Max growth rate $= kL/4 = 2(800)/4 = 400$ individuals per unit time.'
          },
          {
            label: 'For $P(t) = \\frac{1000}{1 + 9e^{-0.5t}}$, $\\lim_{t \\to \\infty} P(t) =$',
            options: ['$1000$ (carrying capacity)', '$\\infty$', '$100$', '$0$'],
            correctAnswers: ['$1000$ (carrying capacity)'],
            hints: ['As $t \\to \\infty$, $e^{-0.5t} \\to 0$.'],
            explanation: '$P(\\infty) = 1000/(1 + 0) = 1000 = L$.'
          }
        ]
      }
    },
    {
      id: 'log1-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'For $dP/dt = 0.1P(1 - P/2000)$ with $P(0) = 500$, compute $A = (L - P_0)/P_0$.',
        correctAnswer: '3',
        acceptableAnswers: ['3', '3.0'],
        hints: ['$A = (2000 - 500)/500$.'],
        explanation: '$A = (2000 - 500)/500 = 1500/500 = 3$. So $P(t) = 2000/(1 + 3e^{-0.1t})$.'
      }
    },
    {
      id: 'log1-summary',
      type: 'text' as const,
      content: `### Summary

- Logistic: $dP/dt = kP(1 - P/L)$
- Solution: $P(t) = L/(1 + Ae^{-kt})$ where $A = (L - P_0)/P_0$
- Max growth at $P = L/2$, rate $= kL/4$
- $P \\to L$ as $t \\to \\infty$

> **Next:** Part 2 — Solving Logistic DEs by Separation of Variables.`
    }
  ]
};
