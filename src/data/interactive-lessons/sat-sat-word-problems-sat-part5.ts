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
$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$
- $P$ = principal, $r$ = annual rate, $n$ = compounds per year, $t$ = years

### Population Growth
"A town of 5,000 grows 3% per year. Population after 10 years?"
$$A = 5000(1.03)^{10} \\approx 6{,}720$$

### Depreciation
"A car worth \\$25,000 loses 15% of its value each year. Value after 4 years?"
$$V = 25000(0.85)^4 \\approx \\$13{,}050$$

### Half-Life
"A substance has a half-life of 6 hours. Starting with 200g, how much remains after 18 hours?"
- 18 hours = 3 half-lives
- $200 \\times (0.5)^3 = 200 \\times 0.125 = 25$ grams

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
      explanation: '12 hours ÷ 3 hours = 4 doubling periods. 500 × $2^{4}$ = 500 × 16 = 8,000. Each doubling: 500 → 1,000 → 2,000 → 4,000 → 8,000.'
    },
    {
      id: 'wp5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Interpreting Exponential Models

### Worked Example 1: Building a Model from a Story

| Step | Work |
|---|---|
| **Problem** | "A car bought for \\$32,000 depreciates 12% per year. Write a model and find its value after 5 years." |
| **Identify** | $A_0 = 32000$, $r = 0.12$ (decay), $t$ in years |
| **Model** | $V(t) = 32000(0.88)^t$ |
| **After 5 years** | $V(5) = 32000(0.88)^5 = 32000(0.5277) \\approx 16{,}887$, i.e. \\$16,887 |

### Worked Example 2: Finding the Rate from Two Data Points

| Step | Work |
|---|---|
| **Problem** | "A population was 2,000 in 2010 and 3,200 in 2015. Find the annual growth rate." |
| **Set up** | $3200 = 2000(1 + r)^5$ |
| **Solve** | $(1 + r)^5 = 1.6$ → $1 + r = 1.6^{1/5} \\approx 1.0986$ |
| **Answer** | $r \\approx 0.099$, or about $9.9\\%$ per year |

### Common Exponential Word Problem Types

| Type | What They Give You | What They Want |
|---|---|---|
| "Find the value after $t$ years" | $A_0$, $r$, $t$ | Plug into formula |
| "When does it reach $X$?" | $A_0$, $r$, target $A$ | Solve for $t$ (may need log or trial) |
| "What is the rate?" | $A_0$, $A$ at time $t$ | Solve for $r$ |
| "Interpret the base" | Model like $f(t) = 500(0.85)^t$ | "Decreases by 15% per year" |

### SAT Interpretation Questions

When the SAT gives you $f(t) = 1000(1.06)^t$:
- **"What does 1000 represent?"** → Initial value (when $t = 0$)
- **"What does 1.06 represent?"** → Growth factor (6% increase per period)
- **"What does $t$ represent?"** → Number of time periods`
    },
    {
      id: 'wp5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Growth & Decay Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radioactive substance has a half-life of 4 years. Starting with 960 grams, how much remains after 12 years?',
            options: ['$120$ g', '$80$ g', '$240$ g', '$60$ g'],
            correctAnswer: 0,
            explanation: '$12 ÷ 4 = 3$ half-lives. $960 \\times (0.5)^3 = 960 \\times 0.125 = 120$ g.'
          },
          {
            question: 'The model $P(t) = 800(1.03)^t$ describes a town\'s population in thousands, $t$ years after 2020. What is the best interpretation of 1.03?',
            options: ['Population grows 3% per year', 'Population grows by 3,000 per year', 'Population was 1,030 in 2020', 'Population triples every year'],
            correctAnswer: 0,
            explanation: 'The base $1.03 = 1 + 0.03$ means a 3% increase each year. The initial population is 800 thousand (when $t = 0$).'
          },
          {
            question: 'An investment doubles every 9 years. Approximately what is the annual growth rate?',
            options: ['$\\approx 8\\%$', '$\\approx 11\\%$', '$\\approx 5\\%$', '$\\approx 22\\%$'],
            correctAnswer: 0,
            explanation: 'Rule of 70: doubling time $\\approx 70/r$. So $9 \\approx 70/r$ → $r \\approx 70/9 \\approx 7.8\\%$, close to $8\\%$. Exact: $(1+r)^9 = 2$ → $r = 2^{1/9} - 1 \\approx 0.08$.'
          }
        ]
      }
    },
    {
      id: 'wp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Interpret the Model** — Select the correct interpretation.',
      exercise: {
        dropdowns: [
          '$f(t) = 2000(0.85)^t$ → Each year, value [decreases by 15%|decreases by 85%|increases by 15%|increases by 85%]',
          'Half-life = 5 hours. After 15 hours, fraction remaining = [1/8|1/3|1/5|1/16]',
          '$A = 1000(1.02)^{4t}$ → Grows [2% every quarter|2% per year|8% per year|4% every 2 years]',
          'Population 500 now, doubles in 10 years. In 30 years = [4000|1500|8000|2000]'
        ],
        correctAnswers: ['decreases by 15%', '1/8', '2% every quarter', '4000'],
        hint1: 'Base 0.85 = 1 − 0.15, so 15% decrease.',
        hint2: '15 hours ÷ 5 = 3 half-lives. $(1/2)^{3}$ = 1/8.',
        hint3: 'The exponent 4t means 4 periods per year (quarterly).',
        explanation: '0.85 = 1 − 0.15 → 15% decrease. 3 half-lives → $(1/2)^{3}$ = 1/8. Exponent 4t means t is in years, 4 compoundings per year → 2% quarterly. 30 years = 3 doubling periods: 500 → 1000 → 2000 → 4000.'
      }
    },
    {
      id: 'wp5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary: Growth & Decay Word Problems

| Model | Formula | Key Identifier |
|---|---|---|
| Exponential growth | $A_0(1 + r)^t$ | Multiplier $> 1$ |
| Exponential decay | $A_0(1 - r)^t$ | Multiplier between 0 and 1 |
| Compound interest | $P(1 + r/n)^{nt}$ | Compounding $n$ times/year |
| Half-life | $A_0(0.5)^{t/h}$ | Count half-lives: $t/h$ |
| Doubling | $A_0(2)^{t/d}$ | Count doublings: $t/d$ |

### SAT Strategy
- **Interpret the base:** $1.05$ means 5% growth; $0.92$ means 8% decay.
- **Count periods:** for half-life or doubling, divide total time by period length.
- **Rule of 70:** Doubling time $\\approx 70/r\\%$. Quick estimate tool.
- Read interpretation questions carefully — "what does 1.03 represent?"

*Next: Geometry in word problems →*`
    }
  ]
};
