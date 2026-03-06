export const satLinearEquationsPart5Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'le5-intro',
      type: 'text' as const,
      content: `# Linear Equations & Inequalities

**Part 5 of 7 — Word Problems with Linear Models**

The SAT tests whether you can translate real-world scenarios into linear equations.

### Setting Up Linear Models

1. **Identify the variables** — what's changing? What's being measured?
2. **Find the rate** (slope) — the per-unit change
3. **Find the starting value** (y-intercept) — the initial amount

### Common SAT Word Problem Types

**Type 1 — Cost/Revenue:**
A rideshare charges \\$3 base + \\$1.50/mile. Total cost for $m$ miles: $C = 1.50m + 3$

**Type 2 — Distance/Rate/Time:**
Two trains leave at the same time. Train A: 60 mph. Train B: 80 mph (same direction, B is behind). When does B catch A?
- Distance A = $60t$, Distance B = $80t$
- B catches A when $80t = 60t + d$ (where $d$ is the head start)

**Type 3 — "Already...and then...":**
A pool has 200 gallons and is being filled at 15 gallons/minute. After $t$ minutes: $V = 15t + 200$

### Reading Tables on the SAT

When given a table, calculate slope: $m = \\frac{\\Delta y}{\\Delta x}$ using any two rows. Then find $b$ by plugging in one point.`
    },
    {
      id: 'le5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Word Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A tank contains 500 liters of water and is draining at 20 liters per minute. After how many minutes will the tank have 200 liters?',
            options: ['$15$', '$10$', '$25$', '$20$'],
            correctAnswer: 0,
            explanation: '$500 - 20t = 200$ → $20t = 300$ → $t = 15$ minutes.'
          },
          {
            question: 'The table shows: when $x = 2$, $y = 11$; when $x = 5$, $y = 20$. What is $y$ when $x = 0$?',
            options: ['$5$', '$3$', '$7$', '$1$'],
            correctAnswer: 0,
            explanation: 'Slope $= (20 - 11)/(5 - 2) = 9/3 = 3$. Using $(2, 11)$: $11 = 3(2) + b$ → $b = 5$. So $y = 3x + 5$ and $y(0) = 5$.'
          },
          {
            question: 'A plumber charges a \\$75 service fee plus \\$50 per hour. An electrician charges \\$100 per hour with no service fee. After how many hours do they cost the same?',
            options: ['$1.5$ hours', '$1$ hour', '$2$ hours', '$0.75$ hours'],
            correctAnswer: 0,
            explanation: '$75 + 50h = 100h$ → $75 = 50h$ → $h = 1.5$ hours. After 1.5 hours, both cost \\$150.'
          }
        ]
      }
    },
    {
      id: 'le5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Identify slope (rate) and y-intercept (starting value) from word problems
- "Draining/decreasing" = negative slope; "filling/increasing" = positive slope
- From a table: slope $= \\Delta y / \\Delta x$, then plug in a point for $b$
- "When are they equal?" → set the two expressions equal to each other`
    }
  ]
};
