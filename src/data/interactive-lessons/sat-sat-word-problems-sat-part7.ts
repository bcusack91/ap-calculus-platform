export const satWordProblemsPart7Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp7-intro',
      type: 'text' as const,
      content: `# Word Problem Review & Strategy

**Part 7 of 7 — Putting It All Together**

### The 4-Step Word Problem Method
1. **Read twice** — first for understanding, second for details
2. **Define variables** — write "Let x = ..."
3. **Build the equation** — translate sentence by sentence
4. **Solve and CHECK** — does your answer make sense in context?

### Common SAT Word Problem Traps
| Trap | Example |
|---|---|
| Answering the wrong question | "How old will she be in 5 years?" (don't give current age) |
| Wrong units | Found hours but need minutes → multiply by 60 |
| Negative/impossible answers | A length can't be -3 feet |
| "Less than" order | "5 less than x" is x - 5, not 5 - x |

### When to Use Each Strategy
| Problem Type | Best Approach |
|---|---|
| Linear relationship in context | Set up equation, solve |
| Exponential growth/decay | Identify base, exponent, plug into formula |
| System of two unknowns | Two equations, two variables |
| Rate/distance/time | d = rt, possibly combined rates |
| "How many integers..." | Inequality, count values |`
    },
    {
      id: 'wp7-q1',
      type: 'quiz' as const,
      question: 'A phone plan costs $30/month plus $0.10 per text. Another plan costs $50/month with unlimited texts. How many texts make the plans equal?',
      options: [
        '100',
        '150',
        '200',
        '300'
      ],
      correctAnswer: 2,
      explanation: 'Set costs equal: 30 + 0.10t = 50. Solve: 0.10t = 20 → t = 200 texts. Below 200 texts, the first plan is cheaper. Above 200, the unlimited plan wins.'
    },
    {
      id: 'wp7-q2',
      type: 'quiz' as const,
      question: 'A pool is being filled at 3 gallons/min and drained at 1 gallon/min simultaneously. If it holds 400 gallons, how long until it is full?',
      options: [
        '100 min',
        '133 min',
        '200 min',
        '400 min'
      ],
      correctAnswer: 2,
      explanation: 'Net fill rate = 3 − 1 = 2 gallons/min. Time = 400/2 = 200 minutes. The drain slows the filling, so it takes longer than 400/3 ≈ 133 minutes.'
    }
  ]
};
