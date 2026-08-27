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
      id: 'ef1-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Building the Model from a Story

**A town's population is 8,000 and decreases by 3% per year. Write the model and find the population after 10 years.**

| Step | Work |
|------|------|
| Initial value | $a = 8000$ |
| Decay rate | $3\\% \\Rightarrow b = 1 - 0.03 = 0.97$ |
| Model | $P(t) = 8000(0.97)^t$ |
| At $t = 10$ | $8000(0.97)^{10} \\approx 8000(0.7374) \\approx 5{,}899$ |

### Worked Example 2 — Period ≠ 1

**A culture of 300 bacteria triples every 5 hours. How many after 20 hours?**

| Step | Work |
|------|------|
| Growth factor per period | $b = 3$ (triples) |
| Model | $N(t) = 300 \\cdot 3^{t/5}$ |
| At $t = 20$ | $300 \\cdot 3^{20/5} = 300 \\cdot 3^4 = 300 \\cdot 81 = 24{,}300$ |

### Growth Factor Quick Reference

| Phrasing | Growth Factor $b$ |
|----------|-------------------|
| Increases by $20\\%$ | $1.20$ |
| Decreases by $15\\%$ | $0.85$ |
| Doubles | $2$ |
| Triples | $3$ |
| Loses half | $0.5$ |
| Grows by a factor of 5 | $5$ |`
    },
    {
      id: 'ef1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Growth & Decay Modeling** 🎯',
      exercise: {
        questions: [
          {
            question: 'A substance loses 10% of its mass each day. What fraction remains after 3 days?',
            options: ['$0.729$', '$0.70$', '$0.90$', '$0.81$'],
            correctAnswer: 0,
            explanation: '$0.90^3 = 0.729$. After 3 days, $72.9\\%$ remains.'
          },
          {
            question: 'A population starts at 500 and triples every 6 years. The population after $t$ years is:',
            options: ['$500 \\cdot 3^{t/6}$', '$500 \\cdot 6^{t/3}$', '$500 \\cdot 3^{6t}$', '$1500^t$'],
            correctAnswer: 0,
            explanation: 'Triples every 6 years: factor of 3 per 6-year period → exponent $t/6$.'
          },
          {
            question: 'Which situation is NOT exponential?',
            options: ['A pool fills at 50 gallons per hour', 'A bank account earns 5% interest annually', 'A rumors spreads to twice as many people each day', 'A medication loses 25% effectiveness each hour'],
            correctAnswer: 0,
            explanation: 'Constant addition (50 gal/hr) is linear. The others all involve constant percentages or ratios → exponential.'
          }
        ]
      }
    },
    {
      id: 'ef1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Model** 🔍\n\nFor each scenario, pick the correct model type.',
      exercise: {
        dropdowns: [
          { label: 'A car depreciates 12% per year from $25,000', options: ['$25000(0.88)^{t}$', '25000 − 0.12t', '$25000(1.12)^{t}$', '25000/0.12t'] },
          { label: 'A salary increases by \\$2,000 each year from \\$40,000', options: ['40000 + 2000t', '$40000(1.02)^{t}$', '$40000(2000)^{t}$', '$42000^{t}$'] },
          { label: 'An investment grows 7% annually from $10,000', options: ['$10000(1.07)^{t}$', '10000 + 0.07t', '$10000(0.93)^{t}$', '$10700^{t}$'] },
          { label: 'A sample halves every 4 years from 600g', options: ['$600(0.5)^{t/4}$', '600 − 150t', '$600(0.5)^{4t}$', '600/2t'] }
        ],
        correctAnswers: ['$25000(0.88)^{t}$', '40000 + 2000t', '$10000(1.07)^{t}$', '$600(0.5)^{t/4}$'],
        hint1: 'Depreciates 12% → keeps 88% → multiply by 0.88 each year.',
        hint2: 'Increases by a fixed dollar amount → linear (addition).',
        hint3: 'Grows 7% → factor of 1.07. Halves every 4 years → $(0.5)^{t/4}$.',
        explanation: 'Percent change → exponential ($b = 1 \\pm r$). Fixed amount change → linear ($y = mx + b$). Halving → base $0.5$ with period in exponent.'
      }
    },
    {
      id: 'ef1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Formula | Example |
|---------|---------|---------|
| Growth ($b > 1$) | $f(t) = a \\cdot b^t$ | $P = 500(1.10)^t$ |
| Decay ($0 < b < 1$) | $f(t) = a \\cdot b^t$ | $V = 30000(0.85)^t$ |
| Growth rate from $b$ | $r = b - 1$ | $b = 1.10 \\Rightarrow r = 10\\%$ |
| Decay rate from $b$ | $r = 1 - b$ | $b = 0.85 \\Rightarrow r = 15\\%$ |
| Period ≠ 1 | $a \\cdot b^{t/k}$ | Doubles every $k$: $a \\cdot 2^{t/k}$ |

- "BY [amount]" → linear; "BY [percent]" → exponential
- Exponential always eventually outpaces linear growth`
    }
  ]
};
