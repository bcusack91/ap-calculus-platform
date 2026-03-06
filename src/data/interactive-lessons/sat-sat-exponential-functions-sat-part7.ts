export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 7 of 7 — Review & Hard Practice**

### Complete Exponential Toolkit

| Model | Formula | Key Feature |
|-------|---------|-------------|
| Basic growth | $y = ab^t$, $b > 1$ | Constant percent increase |
| Basic decay | $y = ab^t$, $0 < b < 1$ | Constant percent decrease |
| Compound interest | $A = P(1 + r/n)^{nt}$ | Interest on interest |
| Half-life | $A = A_0(1/2)^{t/h}$ | Amount halves every $h$ |
| Doubling | $A = A_0 \\cdot 2^{t/d}$ | Amount doubles every $d$ |

### Interpreting in Context

When the SAT gives you $f(t) = 300(0.85)^{t/4}$ and asks what 0.85 means:

"The quantity decreases by 15% every 4 units of time."

The base tells you the rate; the denominator in the exponent tells you the period.

### Hard SAT Pattern: Finding the Equation from Context

"A sample decreases from 200 to 50 in 6 hours."

$50 = 200 \\cdot b^6$ → $b^6 = 1/4$ → $b = (1/4)^{1/6} = 4^{-1/6} = 2^{-1/3}$

Or: $b^6 = 0.25$ → $b = 0.25^{1/6} \\approx 0.794$

So every hour, about 20.6% decays.`
    },
    {
      id: 'ef7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population grows from 1,000 to 4,000 in 10 years. What is the doubling time?',
            options: ['$5$ years', '$2.5$ years', '$10$ years', '$4$ years'],
            correctAnswer: 0,
            explanation: 'Growth: $\\times 4$ in 10 years $= \\times 2$ twice. So it doubles every 5 years. Check: $1000 \\to 2000 \\to 4000$ in 10 years ✓'
          },
          {
            question: 'The function $g(t) = 50(0.90)^t$ models a quantity. After approximately how many time periods will the quantity drop below 25?',
            options: ['About $7$', 'About $5$', 'About $10$', 'About $3$'],
            correctAnswer: 0,
            explanation: 'Solve $0.90^t = 0.5$. Testing: $0.9^6 = 0.531$ and $0.9^7 = 0.478$. So between 6 and 7, approximately 7 periods.'
          },
          {
            question: 'Which model shows the fastest growth for large $t$?',
            options: ['$f(t) = 10(1.5)^t$', '$g(t) = 1000(1.2)^t$', '$h(t) = 100(1.4)^t$', '$k(t) = 10000 + 50t$'],
            correctAnswer: 0,
            explanation: 'For large $t$, the largest base dominates. $f$ has base $1.5$ (highest), so it grows fastest eventually despite the small coefficient.'
          }
        ]
      }
    },
    {
      id: 'ef7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- The base determines the growth/decay rate — larger base = faster growth
- Period: look at the exponent — $t/k$ means the rate applies over $k$ time units
- To find $b$ from two points: $b = (y_2/y_1)^{1/(x_2-x_1)}$
- For large values of $t$, the base matters more than the initial value`
    }
  ]
};
