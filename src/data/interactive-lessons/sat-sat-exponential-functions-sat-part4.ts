export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'ef4-intro',
      type: 'text' as const,
      content: `# Exponential Functions

**Part 4 of 7 — Half-Life and Doubling Time**

### Half-Life

The amount remaining after time $t$:

$$A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$$

Where $h$ = half-life (time to lose half).

**Example:** A 400g sample has a half-life of 5 days.

After 15 days: $A = 400(1/2)^{15/5} = 400(1/2)^3 = 400(1/8) = 50$ grams

### Doubling Time

$$A(t) = A_0 \\cdot 2^{t/d}$$

Where $d$ = doubling time.

**Example:** A population of 1000 doubles every 7 years.

After 21 years: $A = 1000 \\cdot 2^{21/7} = 1000 \\cdot 2^3 = 8000$

### Finding Half-Life from Decay Rate

If something decays by $r\\%$ per period:
- Decay factor: $b = 1 - r/100$
- Half-life: solve $b^h = 1/2$ → $h = \\frac{\\ln(1/2)}{\\ln(b)}$

On the SAT, you can often solve by testing: "After how many periods does the amount drop below half?"`
    },
    {
      id: 'ef4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Half-Life & Doubling** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radioactive substance has a half-life of 10 years. If you start with 800 grams, how much remains after 30 years?',
            options: ['$100$ grams', '$200$ grams', '$400$ grams', '$50$ grams'],
            correctAnswer: 0,
            explanation: '30 years = 3 half-lives. $800 \\times (1/2)^3 = 800/8 = 100$ grams.'
          },
          {
            question: 'A colony of bacteria doubles every 4 hours. Starting with 50, how long until there are 3,200?',
            options: ['$24$ hours', '$20$ hours', '$16$ hours', '$32$ hours'],
            correctAnswer: 0,
            explanation: '$50 \\to 100 \\to 200 \\to 400 \\to 800 \\to 1600 \\to 3200$. That is 6 doublings × 4 hours = 24 hours. Or: $50 \\cdot 2^{t/4} = 3200$ → $2^{t/4} = 64 = 2^6$ → $t = 24$.'
          },
          {
            question: 'A car loses 20% of its value each year. After approximately how many years is it worth half its original value?',
            options: ['About $3$ years', 'About $2.5$ years', 'About $5$ years', 'About $4$ years'],
            correctAnswer: 0,
            explanation: 'Each year: $\\times 0.80$. After 3 years: $0.80^3 = 0.512 ≈ 0.5$. So about 3 years to lose half its value.'
          }
        ]
      }
    },
    {
      id: 'ef4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Half-life: $A = A_0(1/2)^{t/h}$. After $n$ half-lives, multiply by $(1/2)^n$
- Doubling time: $A = A_0 \\cdot 2^{t/d}$. After $n$ doublings, multiply by $2^n$
- Count the number of half-lives or doublings first for quick mental math
- Finding half-life from percent decay: solve $b^h = 0.5$`
    }
  ]
};
