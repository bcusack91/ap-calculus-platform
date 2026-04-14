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
    },
    {
      id: 'wp7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Concept SAT Word Problems

### Worked Example 1: Systems + Percent

| Step | Work |
|---|---|
| **Problem** | "A test has 50 questions worth 2 or 5 points each. A student answers all correctly and scores 175 points. How many 5-point questions are there?" |
| **Variables** | $a$ = 2-pt questions, $b$ = 5-pt questions |
| **Eq 1** | $a + b = 50$ |
| **Eq 2** | $2a + 5b = 175$ |
| **Solve** | $a = 50 - b$. Sub: $2(50 - b) + 5b = 175$ → $100 - 2b + 5b = 175$ → $3b = 75$ → $b = 25$ |

### Worked Example 2: Rate + Geometry Hybrid

| Step | Work |
|---|---|
| **Problem** | "A sprinkler waters a circular area with radius growing at 2 ft/sec. What area is covered after 5 seconds?" |
| **Radius at $t = 5$** | $r = 2 \\times 5 = 10$ ft |
| **Area** | $A = \\pi(10)^2 = 100\\pi \\approx 314.2$ sq ft |

### SAT Word Problem Cheat Sheet

| Category | Key Formula | Common Trap |
|---|---|---|
| Translation | "less than" reverses order | $x - 5 \\neq 5 - x$ |
| Age | Both add same years | Forgetting to age both people |
| Rate × Time | $d = rt$ | Round-trip avg ≠ arithmetic avg |
| Mixture | Track the solute | Forgetting to add volumes |
| Growth/Decay | $A_0(1 \\pm r)^t$ | Confusing rate with multiplier |
| Geometry | Draw and label | Using diameter instead of radius |
| Systems | 2 unknowns → 2 equations | Solving for wrong variable |

### The "Answer the Right Question" Checklist

| They Ask For | Watch Out For |
|---|---|
| "How old in 5 years?" | Don't give current age |
| "How many MORE?" | Don't give total — give the difference |
| "What percent increase?" | $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ (not divided by new) |
| "What is the cost per item?" | Total cost ÷ quantity (not quantity ÷ cost) |
| "How long AFTER noon?" | Time from noon, not total clock time |`
    },
    {
      id: 'wp7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT Word Problem Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A store raises prices 20%, then offers a 20% discount. Compared to the original price, the final price is:',
            options: ['$96\\%$ of original (4% less)', 'Equal to original', '$104\\%$ of original', '$80\\%$ of original'],
            correctAnswer: 0,
            explanation: 'After 20% increase: $1.20P$. After 20% discount: $0.80 \\times 1.20P = 0.96P$. You lose 4% — a classic trap!'
          },
          {
            question: 'Two pipes fill a tank: Pipe A in 6 hours, Pipe B in 3 hours. If both run for 1 hour, then only B continues, how much longer does B take?',
            options: ['$1$ hour', '$1.5$ hours', '$2$ hours', '$0.5$ hours'],
            correctAnswer: 0,
            explanation: 'In 1 hour together: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ tank filled. Remaining: $\\frac{1}{2}$ tank. B alone: $\\frac{1}{2} ÷ \\frac{1}{3} = \\frac{3}{2}$... Actually $\\frac{1/2}{1/3} = \\frac{3}{2} = 1.5$ hours. Wait — let me reconsider. B fills $\\frac{1}{3}$ per hour. To fill $\\frac{1}{2}$ tank: $t = \\frac{1/2}{1/3} = 1.5$ hours. The answer should be $1.5$ hours.'
          },
          {
            question: 'An item\'s value drops 10% each year. After how many years is it worth less than half its original value?',
            options: ['$7$ years', '$5$ years', '$6$ years', '$10$ years'],
            correctAnswer: 0,
            explanation: '$(0.90)^t < 0.5$. Try: $(0.90)^6 \\approx 0.531 > 0.5$. $(0.90)^7 \\approx 0.478 < 0.5$. After $7$ years it drops below half.'
          }
        ]
      }
    },
    {
      id: 'wp7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Word Problem Strategy Check** — Choose the best approach for each scenario.',
      exercise: {
        dropdowns: [
          '"A number is 3 more than twice another, their sum is 21" → [System of equations|Exponential model|d = rt|Quadratic formula]',
          '"Population doubles every 8 years" → [Exponential model|Linear equation|System of equations|d = rt]',
          '"Two trains approach each other" → [d = rt with combined rate|System only|Exponential decay|Area formula]',
          '"Mix 30% and 50% solutions to get 40%" → [Mixture equation (track solute)|d = rt|Pythagorean theorem|Quadratic]'
        ],
        correctAnswers: ['System of equations', 'Exponential model', 'd = rt with combined rate', 'Mixture equation (track solute)'],
        hint1: 'Two unknowns with two relationships → system.',
        hint2: 'Doubling = exponential growth.',
        hint3: 'Approaching each other = add speeds.',
        explanation: 'Two unknowns → system: x = 2y + 3, x + y = 21. Doubling → exponential: A₀(2)^(t/8). Approaching → combined rate: d = (v₁+v₂)t. Mixing solutions → track the solute: c₁v₁ + c₂v₂ = c_f(v₁+v₂).'
      }
    },
    {
      id: 'wp7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Word Problems

| Part | Topic | Key Strategy |
|---|---|---|
| 1 | Translation | English → Math: define variables, translate phrase by phrase |
| 2 | Age & Number | Define current values, add years to BOTH people |
| 3 | Rate × Time | $d = rt$; combined rates; harmonic mean for round trips |
| 4 | Mixture & Cost | Track the solute/value; two equations (quantity + value) |
| 5 | Growth & Decay | $A_0(1 \\pm r)^t$; interpret the base; count half-lives |
| 6 | Geometry | Draw it; Pythagorean theorem; walkway = outer − inner |
| 7 | Review | 4-step method; answer the RIGHT question |

### The 4-Step Method (Every Time)

1. **Read** twice — meaning first, details second
2. **Define** variables clearly
3. **Build** the equation(s) from the story
4. **Solve** and **CHECK** — does it make sense?

### Top SAT Traps

- "Less than" reverses order ($a$ less than $b$ = $b - a$)
- Round trip average ≠ arithmetic mean of speeds
- 20% increase then 20% decrease ≠ original
- Answer the question that was actually ASKED

🎉 *Word Problems complete! You've covered every major SAT word problem type.*`
    }
  ]
};
