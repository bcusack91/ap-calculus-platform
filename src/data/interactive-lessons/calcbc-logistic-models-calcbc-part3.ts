export const calcbcLogisticPart3Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'log3-intro',
      type: 'text' as const,
      content: `# Logistic Curve Analysis

**Part 3 of 7 — Inflection Points, Concavity, and Phase Lines**

### Inflection Point of the Logistic Curve

The inflection point occurs where $d^2P/dt^2 = 0$ (concavity changes).

Starting from $dP/dt = kP(1 - P/L)$:

$$\\frac{d^2P}{dt^2} = k\\frac{dP}{dt}\\left(1 - \\frac{2P}{L}\\right)$$

Setting $d^2P/dt^2 = 0$: since $dP/dt \\neq 0$ (away from equilibria), we need:

$$1 - \\frac{2P}{L} = 0 \\quad \\Rightarrow \\quad \\boxed{P = \\frac{L}{2}}$$

### Concavity Regions

| Region | $1 - 2P/L$ | Concavity | Growth behavior |
|--------|-----------|-----------|-----------------|
| $P < L/2$ | $> 0$ | Concave UP | Growth accelerating |
| $P = L/2$ | $= 0$ | Inflection | Growth rate maximum |
| $L/2 < P < L$ | $< 0$ | Concave DOWN | Growth decelerating |

### Phase Line Analysis

For $dP/dt = kP(1 - P/L)$:

| Equilibrium | Stability | Type |
|------------|-----------|------|
| $P = 0$ | Unstable | Repelling |
| $P = L$ | Stable | Attracting |

Any initial $P_0 > 0$ → $P(t) \\to L$ as $t \\to \\infty$.

> **Key Fact:** The logistic curve is an S-shape (sigmoid): concave up below $L/2$, concave down above $L/2$.`
    },
    {
      id: 'log3-timing',
      type: 'text' as const,
      content: `### Finding When the Inflection Occurs

$P(t) = \\frac{L}{1 + Ae^{-kt}}$. Set $P = L/2$:

$$\\frac{L}{2} = \\frac{L}{1 + Ae^{-kt}} \\quad \\Rightarrow \\quad 1 + Ae^{-kt} = 2 \\quad \\Rightarrow \\quad e^{-kt} = \\frac{1}{A}$$

$$\\boxed{t_{\\text{inflection}} = \\frac{\\ln A}{k}}$$

### Example

$P(t) = 500/(1 + 4e^{-0.2t})$. $L = 500$, $A = 4$, $k = 0.2$.

Inflection when $P = 250$:
$$t = \\frac{\\ln 4}{0.2} = \\frac{1.386}{0.2} \\approx 6.93$$

At $t \\approx 6.93$, the population is growing fastest: $dP/dt = kL/4 = 0.2(500)/4 = 25$.

### Logistic Curve Shape Summary

| Feature | Value |
|---------|-------|
| Initial growth | Nearly exponential ($\\approx kP$) |
| Inflection point | $P = L/2$, $t = \\ln(A)/k$ |
| Maximum growth rate | $kL/4$ |
| Horizontal asymptote | $y = L$ |
| Lower asymptote | $y = 0$ (for $t \\to -\\infty$) |`
    },
    {
      id: 'log3-mc1',
      type: 'multiple-choice' as const,
      content: '**Curve Analysis**',
      exercise: {
        questions: [
          {
            question: 'For $P(t) = 2000/(1 + 19e^{-0.4t})$, the inflection point occurs at:',
            options: ['$P = 1000$ at $t = \\ln(19)/0.4 \\approx 7.36$', '$P = 2000$ at $t = 0$', '$P = 500$ at $t = 5$', '$P = 1000$ at $t = 19/0.4$'],
            correctAnswer: 0,
            explanation: '$L = 2000$, inflection at $P = L/2 = 1000$. $t = \\ln(19)/0.4 \\approx 2.944/0.4 \\approx 7.36$.'
          },
          {
            question: 'When $P$ is slightly above $L/2$, the population is:',
            options: ['Growing (concave down) — growth is decelerating', 'Growing (concave up) — growth is accelerating', 'Decreasing', 'At equilibrium'],
            correctAnswer: 0,
            explanation: 'Above $L/2$ but below $L$: $dP/dt > 0$ (growing) and $d^2P/dt^2 < 0$ (concave down, decelerating).'
          },
          {
            question: 'The equilibrium $P = 0$ is unstable because:',
            options: ['Any positive perturbation causes $P$ to grow away from 0', '$P = 0$ is a local maximum', 'The slope is zero', '$k > 0$'],
            correctAnswer: 0,
            explanation: 'If $P$ is slightly positive, $dP/dt = kP(1 - P/L) > 0$, so $P$ increases away from 0.'
          }
        ]
      }
    },
    {
      id: 'log3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Concavity Analysis**',
      exercise: {
        dropdowns: [
          {
            label: '$L = 600$. When $P = 200$ (below $L/2 = 300$), the curve is:',
            options: ['Concave up (growth accelerating)', 'Concave down (growth decelerating)', 'Linear', 'At inflection'],
            correctAnswers: ['Concave up (growth accelerating)'],
            hints: ['$P < L/2$ → concave up.'],
            explanation: '$200 < 300 = L/2$, so concave up.'
          },
          {
            label: '$L = 600$. When $P = 450$ (above $L/2 = 300$), the curve is:',
            options: ['Concave down (growth decelerating)', 'Concave up (growth accelerating)', 'At inflection', 'Decreasing'],
            correctAnswers: ['Concave down (growth decelerating)'],
            hints: ['$P > L/2$ → concave down.'],
            explanation: '$450 > 300 = L/2$. Concave down.'
          }
        ]
      }
    },
    {
      id: 'log3-input',
      type: 'input-box' as const,
      content: '**Inflection Time**',
      exercise: {
        question: '$P(t) = 800/(1 + 7e^{-0.5t})$. At what time does the inflection point occur? Give your answer as $\\ln(7)/0.5$. Compute to one decimal place.',
        correctAnswer: '3.9',
        acceptableAnswers: ['3.9', '3.89', '3.8', '3.891'],
        hints: ['$t = \\ln(A)/k = \\ln(7)/0.5$. $\\ln(7) \\approx 1.946$.'],
        explanation: '$t = \\ln(7)/0.5 \\approx 1.946/0.5 \\approx 3.9$.'
      }
    },
    {
      id: 'log3-summary',
      type: 'text' as const,
      content: `### Summary

- Inflection at $P = L/2$, time $t = \\ln(A)/k$
- Below $L/2$: concave up (accelerating); above: concave down (decelerating)
- Equilibria: $P = 0$ (unstable), $P = L$ (stable)
- S-shaped (sigmoid) curve

> **Next:** Part 4 — Logistic Models in Context (AP Applications).`
    }
  ]
};
