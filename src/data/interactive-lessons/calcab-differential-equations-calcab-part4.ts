export const calcabDiffEqPart4Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'de4-intro',
      type: 'text' as const,
      content: `# Differential Equations

**Part 4 of 7 \u2014 Exponential Growth and Decay**

### The Model

$$\\frac{dy}{dt} = ky$$

**Solution:** $y = y_0 e^{kt}$

- $k > 0$: exponential **growth**
- $k < 0$: exponential **decay**
- $y_0$: initial value

### Half-Life and Doubling Time

**Doubling time** ($k > 0$): $T = \\frac{\\ln 2}{k}$

**Half-life** ($k < 0$): $T = \\frac{\\ln 2}{|k|}$`
    },
    {
      id: 'de4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Models** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A population doubles every 5 years. Starting at 1000, what is the population after 15 years?',
            options: ['$4000$', '$8000$', '$3000$', '$6000$'],
            correctAnswer: 1,
            explanation: 'Doubling every 5 years: after 15 years = 3 doublings. $1000 \\times 2^3 = 8000$.'
          },
          {
            question: 'A substance has half-life 10 hrs. If 200 g are present initially, how much remains after 30 hrs?',
            options: ['$25$ g', '$50$ g', '$12.5$ g', '$100$ g'],
            correctAnswer: 0,
            explanation: '30 hrs = 3 half-lives. $200 \\times (\\frac{1}{2})^3 = 200 \\times \\frac{1}{8} = 25$ g.'
          }
        ]
      }
    },
    {
      id: 'de4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4
1. $\\frac{dy}{dt} = ky$ has solution $y = y_0 e^{kt}$
2. Growth ($k>0$): doubling time $= \\ln 2/k$
3. Decay ($k<0$): half-life $= \\ln 2/|k|$`
    }
  ]
};
