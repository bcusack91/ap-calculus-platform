export const calcabExpModelsPart1Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp1-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 1 of 7 — Exponential Growth and Decay**

### The Differential Equation

$$\\frac{dy}{dt} = ky \\implies y = y_0 e^{kt}$$

- $k > 0$: **exponential growth**
- $k < 0$: **exponential decay**

### Worked Example

A bacteria culture starts with 500 and grows to 1500 in 2 hours.

$1500 = 500e^{2k}$

$3 = e^{2k}$

$k = \\frac{\\ln 3}{2} \\approx 0.549$

Population at time $t$: $P(t) = 500e^{0.549t}$`
    },
    {
      id: 'exp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Growth** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population of 200 grows to 800 in 6 hours. Find the growth constant $k$.',
            options: ['$\\frac{\\ln 4}{6}$', '$\\frac{\\ln 2}{6}$', '$\\frac{4}{6}$', '$\\frac{\\ln 800}{6}$'],
            correctAnswer: 0,
            explanation: '$800 = 200e^{6k}$. $4 = e^{6k}$. $k = \\frac{\\ln 4}{6}$.'
          },
          {
            question: 'A radioactive substance decays from 100 g to 75 g in 10 years. Find its half-life.',
            options: ['$\\frac{10\\ln 2}{\\ln(4/3)}$', '$\\frac{10}{\\ln 2}$', '$20$ years', '$5\\ln 2$ years'],
            correctAnswer: 0,
            explanation: '$75 = 100e^{10k}$. $k = \\frac{\\ln(3/4)}{10} = -\\frac{\\ln(4/3)}{10}$. Half-life $= \\frac{\\ln 2}{|k|} = \\frac{10\\ln 2}{\\ln(4/3)}$.'
          }
        ]
      }
    },
    {
      id: 'exp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\frac{dy}{dt} = ky$ always has solution $y = y_0 e^{kt}$
2. Use two data points to find $k$`
    }
  ]
};
