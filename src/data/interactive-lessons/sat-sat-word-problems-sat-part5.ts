export const satWordProblemsPart5Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp5-intro',
      type: 'text' as const,
      content: `# Growth & Decay Word Problems

**Part 5 of 7 — Exponential Models in Context**

### Exponential Growth Formula
$$A = A_0(1 + r)^t$$
- $A_0$ = initial amount
- $r$ = growth rate (as decimal)
- $t$ = time periods

### Exponential Decay Formula
$$A = A_0(1 - r)^t$$

### Compound Interest
$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$
- $P$ = principal, $r$ = annual rate, $n$ = compounds per year, $t$ = years

### Population Growth
"A town of 5,000 grows 3% per year. Population after 10 years?"
$$A = 5000(1.03)^{10} \approx 6,720$$

### Depreciation
"A car worth \$25,000 loses 15% of its value each year. Value after 4 years?"
$$V = 25000(0.85)^4 \approx \$13,050$$

### Half-Life
"A substance has a half-life of 6 hours. Starting with 200g, how much remains after 18 hours?"
- 18 hours = 3 half-lives
- $200 \times (0.5)^3 = 200 \times 0.125 = 25$ grams

### SAT Tip: Identifying Growth/Decay
- Multiplier > 1 → growth (e.g., 1.05 = 5% growth)
- Multiplier between 0 and 1 → decay (e.g., 0.85 = 15% decay)`
    },
    {
      id: 'wp5-q1',
      type: 'quiz' as const,
      question: 'A bacteria population doubles every 3 hours. Starting with 500, how many are there after 12 hours?',
      options: [
        '2,000',
        '4,000',
        '6,000',
        '8,000'
      ],
      correctAnswer: 3,
      explanation: '12 hours ÷ 3 hours = 4 doubling periods. 500 × 2⁴ = 500 × 16 = 8,000. Each doubling: 500 → 1,000 → 2,000 → 4,000 → 8,000.'
    }
  ]
};
