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
Two trains leave at the same time. Train A: 60 mph. Train B: 80 mph. If B starts 30 miles behind, when does B catch A?
$80t = 60t + 30$ → $20t = 30$ → $t = 1.5$ hours

**Type 3 — "Already...and then...":**
A pool has 200 gallons and is being filled at 15 gallons/minute. After $t$ minutes: $V = 15t + 200$

---

### Worked Example 1

**A cellphone company charges \\$40/month for a plan plus \\$0.05 per text message. Another company charges \\$25/month plus \\$0.15 per text. How many texts make the costs equal?**

| Step | Work |
|------|------|
| Company A cost | $C_A = 0.05t + 40$ |
| Company B cost | $C_B = 0.15t + 25$ |
| Set equal | $0.05t + 40 = 0.15t + 25$ |
| Solve | $15 = 0.10t$ → $t = 150$ texts |
| Verify | $C_A = 0.05(150) + 40 = 47.50$ ✓ |

### Reading Tables on the SAT

When given a table, calculate slope: $m = \\frac{\\Delta y}{\\Delta x}$ using any two rows. Then find $b$ by plugging in one point.`
    },
    {
      id: 'le5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Word Problems — Setup** 🎯',
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
      id: 'le5-text2',
      type: 'text' as const,
      content: `### Interpreting Slope and Y-Intercept in Context

The SAT frequently asks questions like:
- "What does the slope represent in this context?"
- "What is the meaning of the y-intercept?"

### Worked Example 2

**The equation $C = 0.12m + 35$ models a monthly phone bill, where $C$ is the cost in dollars and $m$ is the number of minutes used.**

| Component | Value | Real-World Meaning |
|-----------|-------|-------------------|
| Slope | $0.12$ | Each additional minute costs \\$0.12 |
| Y-intercept | $35$ | The base cost with zero minutes is \\$35 |
| $C(100)$ | $47$ | Using 100 minutes costs \\$47 |

### Worked Example 3

**From a table:**

| Hours Worked ($x$) | Pay ($y$) |
|------|------|
| $0$ | $50$ |
| $4$ | $110$ |
| $8$ | $170$ |

| Step | Work |
|------|------|
| Slope | $(110 - 50)/(4 - 0) = 60/4 = 15$ |
| Y-intercept | $50$ (from the table directly) |
| Equation | $y = 15x + 50$ |
| Interpretation | \\$15/hour wage with a \\$50 signing bonus |

> **SAT Tip:** The SAT may phrase slope interpretation as "For every increase of 1 in $x$, $y$ increases/decreases by ___." The answer is the slope.`
    },
    {
      id: 'le5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Interpreting Models** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $P = -0.5t + 100$ models the population of a town (in thousands) $t$ years after 2020, what does $-0.5$ represent?',
            options: ['The population decreases by 500 per year', 'The population was 500 in 2020', 'The population increases by 0.5 thousand per year', 'The starting population is 0.5 thousand'],
            correctAnswer: 0,
            explanation: 'The slope is $-0.5$ thousand/year = $-500$ people/year. The negative sign means the population is decreasing.'
          },
          {
            question: 'A car\'s value is modeled by $V = -2500t + 30000$, where $t$ is years since purchase. When is the car worth \\$10,000?',
            options: ['$8$ years', '$10$ years', '$12$ years', '$6$ years'],
            correctAnswer: 0,
            explanation: '$10000 = -2500t + 30000$ → $2500t = 20000$ → $t = 8$ years.'
          },
          {
            question: 'Data shows that for every 3 additional hours of study, test scores increase by 12 points. A student who studies 0 hours scores 45. What is the equation?',
            options: ['$S = 4h + 45$', '$S = 12h + 45$', '$S = 3h + 45$', '$S = 12h + 3$'],
            correctAnswer: 0,
            explanation: 'Rate of change = 12 points / 3 hours = 4 points per hour. Starting score = 45. So $S = 4h + 45$.'
          }
        ]
      }
    },
    {
      id: 'le5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Slope** 🔍\n\nFor each scenario, select the correct slope value.',
      exercise: {
        dropdowns: [
          { label: 'A car travels 180 miles in 3 hours', options: ['$60$', '$180$', '$3$', '$0.6$'] },
          { label: 'A candle loses 2 inches of height every 5 hours', options: ['$-2/5$', '$2/5$', '$-5/2$', '$5/2$'] },
          { label: 'A savings account gains \\$200 per month', options: ['$200$', '$-200$', '$12$', '$2400$'] },
          { label: 'Temperature drops 3°F per 1000 feet of altitude', options: ['$-3/1000$', '$3/1000$', '$-1000/3$', '$3$'] }
        ],
        correctAnswers: ['$60$', '$-2/5$', '$200$', '$-3/1000$'],
        hint1: 'Slope = change in output / change in input. Distance ÷ time = speed.',
        hint2: '"Loses" and "drops" indicate negative slopes.',
        hint3: 'Make sure the units match what the variables measure.',
        explanation: 'Speed = 180/3 = 60 mph. Candle loses height → negative: $-2/5$ inches/hour. Gains \\$200/month → positive slope. Drops 3° per 1000 ft → $-3/1000$.'
      }
    },
    {
      id: 'le5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

| Concept | How to Find It |
|---------|---------------|
| Slope from context | Rate per unit ($/hour, miles/gallon, etc.) |
| Y-intercept from context | Starting value, initial amount, base cost |
| Slope from table | $\\Delta y / \\Delta x$ using any two rows |
| "When are they equal?" | Set the two expressions equal |

- "Draining/decreasing" = negative slope; "filling/increasing" = positive slope
- From a table: slope $= \\Delta y / \\Delta x$, then plug in a point for $b$
- Slope interpretation: "For every 1-unit increase in $x$, $y$ changes by $m$"
- Check your model: plug a known data point back in to verify`
    }
  ]
};
