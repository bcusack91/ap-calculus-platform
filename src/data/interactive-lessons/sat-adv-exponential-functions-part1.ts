export const lessonData = {
  topicSlug: 'sat-exponential-functions-advanced',
  sections: [
    {
      id: 'ea1-patterns',
      type: 'text' as const,
      content: `# Exponential Functions: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Hard exponential items are about **growth factors and time units**, not about plugging into formulas. Three archetypes dominate.

### Archetype 1: Rebasing the Time Unit

A model like $A(t) = 60(0.5)^{t/3}$ (t in hours) states its factor per 3 hours. To get the **per-hour** rate, rewrite:

$$A(t) = 60\\left[(0.5)^{1/3}\\right]^{t}$$

and $(0.5)^{1/3} \\approx 0.7937$ — about a $20.6\\%$ decrease per hour. The direction of the conversion is the whole trap: to shrink the time unit you take a **root** (divide the exponent's period), never a power.

**Worked example.** $V(y) = 340(1.15)^{y/2}$ grows $15\\%$ per TWO years. Per year: $(1.15)^{1/2} \\approx 1.0724$, so about $7.24\\%$ — not $7.5\\%$. Splitting a percent linearly is always slightly wrong, and the test puts the linear split among the choices.

### Archetype 2: Compound vs. Linear

Two plans: one loses a fixed amount per year, one loses a fixed **percent** per year. Or: a nominal $6\\%$ annual rate compounded monthly. The compound side must be computed as a power — $(1.005)^{12} \\approx 1.0617$, so the effective rate is $6.17\\%$, not $6\\%$. Every linear shortcut ($1.5\\% \\times 12 = 18\\%$) is a planted distractor; the true compound answer for decay is always LESS loss than the linear estimate, and for growth MORE gain.

### Archetype 3: Counting Doublings and Halvings

"Doubles every 5 days, fills the lake at day 55 — when was it a quarter full?" Work in **doublings, not amounts**: a quarter is exactly two doublings before full, so day $45$. Half-life problems run the same way in reverse: $9$ grams at year $60$ with a $12$-year half-life means multiply by $2$ for every $12$ years you step back. Solve $2^{k} = 2048$ by recognizing $2048 = 2^{11}$, never by trial multiplication.`
    },
    {
      id: 'ea1-q1',
      type: 'quiz' as const,
      question: 'The value of a card collection is modeled by $V(t) = 900(1.21)^{t/2}$ dollars, where $t$ is in years. By what percent does the value increase each YEAR?',
      options: [
        '$10\\%$',
        '$10.5\\%$',
        '$21\\%$',
        '$46.41\\%$'
      ],
      correctAnswer: 0,
      explanation: 'Rewrite with a yearly base: $V(t) = 900\\left[(1.21)^{1/2}\\right]^{t}$, and $(1.21)^{1/2} = 1.1$ exactly. So the value grows $10\\%$ per year. $21\\%$ is the TWO-year growth read straight off the model; $10.5\\%$ is the linear split of $21\\%$ (always slightly too high for growth); $46.41\\%$ is $(1.21)^{2} - 1$ — the conversion run backward, multiplying the exponent instead of dividing.'
    },
    {
      id: 'ea1-q2',
      type: 'quiz' as const,
      question: 'A bacteria culture starts at $7$ cells and doubles every $6$ hours. The dish is full at $7168$ cells. After how many hours is the dish exactly HALF full?',
      options: [
        '$48$',
        '$54$',
        '$57$',
        '$60$'
      ],
      correctAnswer: 1,
      explanation: 'Full: $7 \\cdot 2^{k} = 7168$, so $2^{k} = 1024 = 2^{10}$, meaning $k = 10$ doublings and $60$ hours to fill. Half full is exactly ONE doubling earlier: $9$ doublings, or $54$ hours. $60$ is full; $57$ splits the last doubling linearly (halfway in time is not halfway in amount); $48$ is two doublings back — that is when the dish is a QUARTER full.'
    },
    {
      id: 'ea1-q3',
      type: 'quiz' as const,
      question: 'An account pays a nominal $8\\%$ annual rate compounded quarterly, so the balance is multiplied by $1.02$ each quarter. By what percent does the balance actually grow in one year, to the nearest hundredth?',
      options: [
        '$2\\%$',
        '$4.04\\%$',
        '$8\\%$',
        '$8.24\\%$'
      ],
      correctAnswer: 3,
      explanation: 'Four quarters: $(1.02)^{4} = 1.08243216$, a growth of about $8.24\\%$ — more than the nominal $8\\%$ because each quarter\'s interest itself earns interest. $8\\%$ is the nominal rate (the linear answer); $2\\%$ is the quarterly rate; $4.04\\%$ is $(1.02)^{2} - 1$, compounding only two of the four quarters.'
    }
  ]
};
