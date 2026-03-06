export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 1 of 7 — Growth and Decay Models**

### Exponential Growth: $f(t) = a \\cdot b^t$ where $b > 1$

- $a$ = initial value (when $t = 0$)
- $b$ = growth factor
- Growth rate: $r = b - 1$

**Example:** A population starts at 500 and grows 10% per year.

$$P(t) = 500(1.10)^t$$

### Exponential Decay: $f(t) = a \\cdot b^t$ where $0 < b < 1$

- Decay rate: $r = 1 - b$

**Example:** A car worth \\$30,000 depreciates 15% per year.

$$V(t) = 30000(0.85)^t$$

### Key Insight ⚠️

Exponential growth is NOT linear. It starts slow and gets dramatically fast.

| Year | Linear (+100/yr) | Exponential (×1.5) |
|------|------------------|-------------------|
| 0 | 100 | 100 |
| 1 | 200 | 150 |
| 2 | 300 | 225 |
| 5 | 600 | 759 |
| 10 | 1,100 | 5,767 |`
    },
    {
      id: 'ef1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Growth & Decay** 🎯',
      exercise: {
        questions: [
          {
            question: 'A bacteria population doubles every 3 hours, starting with 200. The population after $t$ hours is:',
            options: ['$P(t) = 200 \\cdot 2^{t/3}$', '$P(t) = 200 \\cdot 2^{3t}$', '$P(t) = 200 \\cdot 3^{t/2}$', '$P(t) = 400^t$'],
            correctAnswer: 0,
            explanation: 'Doubles every 3 hours means the factor of 2 applies per 3-hour period: $2^{t/3}$. At $t = 3$: $200 \\times 2^1 = 400$ ✓'
          },
          {
            question: 'A substance decays by 20% each hour. After 2 hours, what fraction of the original remains?',
            options: ['$0.64$', '$0.60$', '$0.40$', '$0.80$'],
            correctAnswer: 0,
            explanation: 'Each hour: multiply by $0.80$. After 2 hours: $0.80^2 = 0.64 = 64\\%$ remains.'
          },
          {
            question: 'In $f(t) = 1000(1.05)^t$, the growth rate is:',
            options: ['$5\\%$', '$1.05\\%$', '$105\\%$', '$0.05\\%$'],
            correctAnswer: 0,
            explanation: 'Growth factor $= 1.05 = 1 + 0.05$. Growth rate $= 0.05 = 5\\%$.'
          }
        ]
      }
    },
    {
      id: 'ef1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- $f(t) = a \\cdot b^t$: $a$ = initial, $b$ = growth factor
- Growth: $b > 1$ (rate $= b - 1$). Decay: $0 < b < 1$ (rate $= 1 - b$)
- "Doubles every $k$" → $b^{t/k}$ where $b = 2$
- Exponential eventually outpaces linear growth`
    }
  ]
};
