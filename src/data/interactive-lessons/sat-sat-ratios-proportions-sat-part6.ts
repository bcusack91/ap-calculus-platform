export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp6-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 6 of 7 — Mixture and Work Problems**

### Mixture Problems

"How many liters of 60% acid solution must be mixed with 10 liters of 20% acid to get a 40% solution?"

Let $x$ = liters of 60% solution:

$$0.60x + 0.20(10) = 0.40(x + 10)$$
$$0.60x + 2 = 0.40x + 4$$
$$0.20x = 2$$
$$x = 10 \\text{ liters}$$

### Work/Rate Problems

"Pipe A fills a tank in 6 hours, Pipe B in 4 hours. Together?"

- Rate A: $1/6$ tank/hour
- Rate B: $1/4$ tank/hour
- Combined: $1/6 + 1/4 = 2/12 + 3/12 = 5/12$ tank/hour
- Time: $12/5 = 2.4$ hours

### SAT Strategy for Rate Problems

$$\\text{Rate} \\times \\text{Time} = \\text{Work}$$

Add rates when working together. The combined rate is always faster than either individual rate.

---

### Worked Example 1 — Mixture Table Method

**A chemist has 40 mL of 70% alcohol and wants to dilute it to 50% alcohol by adding water. How much water?**

| Component | Volume | % Alcohol | Amount of Alcohol |
|-----------|--------|-----------|------------------|
| Solution | 40 mL | 70% | 28 mL |
| Water | $x$ mL | 0% | 0 mL |
| Mixture | $40 + x$ mL | 50% | $0.50(40 + x)$ mL |

$$28 = 0.50(40 + x) \\implies 28 = 20 + 0.5x \\implies x = 16 \\text{ mL}$$

### Worked Example 2 — Work Problem with One Working Then Both

**Machine A takes 10 hours alone. Machine B takes 15 hours alone. If A works for 3 hours, then both work together, how much longer until done?**

| Step | Work |
|------|------|
| A's rate | $1/10$ per hour |
| B's rate | $1/15$ per hour |
| A does in 3 hrs | $3/10$ of the job |
| Remaining | $1 - 3/10 = 7/10$ |
| Combined rate | $1/10 + 1/15 = 5/30 = 1/6$ |
| Time for rest | $(7/10) ÷ (1/6) = 42/10 = 4.2$ hours |`
    },
    {
      id: 'rp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixtures & Work** 🎯',
      exercise: {
        questions: [
          {
            question: 'Worker A can paint a house in 12 hours and Worker B can paint it in 8 hours. Working together, how many hours will it take?',
            options: ['$4.8$ hours', '$10$ hours', '$6$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: 'Combined rate = $1/12 + 1/8 = 2/24 + 3/24 = 5/24$. Time = $24/5 = 4.8$ hours.'
          },
          {
            question: 'How many mL of pure water must be added to 200 mL of 30% salt solution to make a 20% solution?',
            options: ['$100$ mL', '$50$ mL', '$200$ mL', '$150$ mL'],
            correctAnswer: 0,
            explanation: 'Salt stays the same: $0.30(200) = 60$ mL. New total: $x + 200$. $60/(x + 200) = 0.20$ → $60 = 0.20x + 40$ → $x = 100$ mL.'
          },
          {
            question: 'A printer prints 40 pages per minute. A faster printer does 60 pages per minute. Together, how long to print 500 pages?',
            options: ['$5$ minutes', '$8$ minutes', '$10$ minutes', '$3$ minutes'],
            correctAnswer: 0,
            explanation: 'Combined rate: $40 + 60 = 100$ pages/min. Time = $500/100 = 5$ minutes.'
          }
        ]
      }
    },
    {
      id: 'rp6-text2',
      type: 'text' as const,
      content: `### More Mixture Scenarios

### Worked Example 3 — Mixing Two Concentrations

**How many liters of 80% juice must be mixed with 12 liters of 30% juice to get 50% juice?**

| Component | Volume | Juice |
|-----------|--------|-------|
| 80% juice | $x$ | $0.80x$ |
| 30% juice | 12 | $0.30(12) = 3.6$ |
| Mixture | $x + 12$ | $0.50(x + 12)$ |

$$0.80x + 3.6 = 0.50x + 6$$
$$0.30x = 2.4$$
$$x = 8 \\text{ liters}$$

### Worked Example 4 — Work Problem: Draining While Filling

**A tap fills a tank in 5 hours. A drain empties it in 8 hours. If both are open, how long to fill?**

| Step | Work |
|------|------|
| Fill rate | $+1/5$ tank/hr |
| Drain rate | $-1/8$ tank/hr |
| Net rate | $1/5 - 1/8 = 8/40 - 5/40 = 3/40$ |
| Time | $40/3 ≈ 13.3$ hours |

The drain slows down the filling but doesn't stop it (fill rate > drain rate).`
    },
    {
      id: 'rp6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Rate Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Person A completes a job in 6 hours, Person B in 12 hours. After A works alone for 2 hours, both finish together. What total time does it take?',
            options: ['$4 \\frac{2}{3}$ hours', '$3$ hours', '$6$ hours', '$5$ hours'],
            correctAnswer: 0,
            explanation: 'A does $2/6 = 1/3$ alone. Remaining: $2/3$. Combined: $1/6 + 1/12 = 3/12 = 1/4$. Time: $(2/3) ÷ (1/4) = 8/3$ hrs. Total: $2 + 8/3 = 14/3 = 4\\frac{2}{3}$ hrs.'
          },
          {
            question: 'A 10% acid solution and a 40% acid solution are mixed to create 30 ounces of 20% acid. How much of the 10% solution is used?',
            options: ['$20$ ounces', '$10$ ounces', '$15$ ounces', '$25$ ounces'],
            correctAnswer: 0,
            explanation: '$0.10x + 0.40(30 - x) = 0.20(30)$. $0.10x + 12 - 0.40x = 6$. $-0.30x = -6$. $x = 20$ ounces.'
          },
          {
            question: 'A pool is filled by Hose A in 3 hours and Hose B in 6 hours. A drain empties the full pool in 4 hours. With all three open, how long to fill?',
            options: ['$4$ hours', '$12$ hours', '$6$ hours', 'Never fills'],
            correctAnswer: 0,
            explanation: 'Net rate: $1/3 + 1/6 - 1/4 = 4/12 + 2/12 - 3/12 = 3/12 = 1/4$ tank/hr. Time $= 1 ÷ (1/4) = 4$ hours.'
          }
        ]
      }
    },
    {
      id: 'rp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set Up the Equation** 🔍\n\nFor each scenario, choose the correct equation setup.',
      exercise: {
        dropdowns: [
          { label: 'Worker A: 8 hrs, Worker B: 12 hrs. Time together?', options: ['1/8 + 1/12 = 1/t', '8 + 12 = t', '1/8 × 1/12 = 1/t', '8 × 12 = t'] },
          { label: 'Mix x mL of 30% with 50 mL of 60% to get 45%', options: ['0.30x + 0.60(50) = 0.45(x + 50)', '0.30x + 0.60(50) = 0.45x', 'x/30 + 50/60 = 45', '30x + 60(50) = 45'] },
          { label: 'Tap fills in 10 hrs, drain empties in 15 hrs', options: ['Net rate = 1/10 − 1/15', 'Net rate = 1/10 + 1/15', '10 − 15 = net time', '10 + 15 = net time'] },
          { label: '3 workers do a job in 14 days. Days for 7 workers?', options: ['3 × 14 = 7 × d', '3/14 = 7/d', '3 + 14 = 7 + d', '14/3 = d/7'] }
        ],
        correctAnswers: ['1/8 + 1/12 = 1/t', '0.30x + 0.60(50) = 0.45(x + 50)', 'Net rate = 1/10 − 1/15', '3 × 14 = 7 × d'],
        hint1: 'Add rates (not times) for combined work: $1/a + 1/b = 1/t$.',
        hint2: 'Amount of substance from each part equals amount in the mixture.',
        hint3: 'Drain works against the fill — subtract its rate.',
        explanation: 'Work: add rates → $1/8 + 1/12 = 1/t$. Mixture: total substance = sum of parts. Fill & drain: subtract drain rate. Workers: total work (worker-days) stays constant → $3 × 14 = 7 × d$.'
      }
    },
    {
      id: 'rp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Problem Type | Key Setup |
|-------------|-----------|
| Work (together) | $1/a + 1/b = 1/t$ |
| Work (one starts early) | Find remaining work, then use combined rate |
| Fill & drain | Subtract drain rate: $1/a - 1/b$ |
| Mixture | $Amount_{1}$ + $Amount_{2}$ = Amount_mix |
| Workers × time | Total work = workers × time (constant) |

- **Never add times** — always convert to rates first
- Use a table for mixture problems: Volume × Concentration = Amount
- For fill-and-drain: if drain rate > fill rate, the tank never fills
- Combined time is always less than the fastest individual time`
    }
  ]
};
