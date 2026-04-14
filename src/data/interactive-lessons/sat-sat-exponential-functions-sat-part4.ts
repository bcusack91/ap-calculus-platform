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
      id: 'ef4-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Counting Half-Lives

**1,200 grams with a half-life of 8 hours. How much after 1 day (24 hours)?**

| Step | Work |
|------|------|
| Number of half-lives | $24 / 8 = 3$ |
| After 1 half-life | $1200 / 2 = 600$ |
| After 2 half-lives | $600 / 2 = 300$ |
| After 3 half-lives | $300 / 2 = 150$ |

Or: $1200 \\times (1/2)^3 = 1200 / 8 = 150$ grams.

### Worked Example 2 — Finding Doubling Time

**A population grows 12% per year. How long until it doubles?**

| Step | Work |
|------|------|
| Model | $(1.12)^t = 2$ |
| Test $t = 6$ | $(1.12)^6 \\approx 1.974$ (just under 2) |
| Test $t = 7$ | $(1.12)^7 \\approx 2.211$ (just over 2) |
| Answer | About 6 years |

**Rule of 70:** Doubling time $\\approx 70 / (\\text{percent rate})$. For $12\\%$: $70/12 \\approx 5.8$ years ✓

### Half-Life Table

| Half-Lives | Fraction Remaining | Decimal |
|------------|-------------------|---------|
| 0 | $1$ | $1.000$ |
| 1 | $1/2$ | $0.500$ |
| 2 | $1/4$ | $0.250$ |
| 3 | $1/8$ | $0.125$ |
| 4 | $1/16$ | $0.0625$ |
| 5 | $1/32$ | $0.03125$ |`
    },
    {
      id: 'ef4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Half-Life & Doubling Mastery** 🎯',
      exercise: {
        questions: [
          {
            question: 'A substance has a half-life of 6 hours. After 18 hours, what percentage of the original remains?',
            options: ['$12.5\\%$', '$25\\%$', '$33.3\\%$', '$50\\%$'],
            correctAnswer: 0,
            explanation: '$18/6 = 3$ half-lives. $(1/2)^3 = 1/8 = 12.5\\%$.'
          },
          {
            question: 'Using the Rule of 70: a population growing at 5% per year doubles in approximately:',
            options: ['$14$ years', '$5$ years', '$70$ years', '$35$ years'],
            correctAnswer: 0,
            explanation: 'Rule of 70: doubling time $\\approx 70/5 = 14$ years.'
          },
          {
            question: 'An investment doubles in 9 years. The approximate annual growth rate is:',
            options: ['$7.8\\%$', '$11.1\\%$', '$9\\%$', '$22.2\\%$'],
            correctAnswer: 0,
            explanation: 'Rule of 70: rate $\\approx 70/9 \\approx 7.8\\%$. Or solve: $(1 + r)^9 = 2 \\Rightarrow r = 2^{1/9} - 1 \\approx 0.08 \\approx 8\\%$.'
          }
        ]
      }
    },
    {
      id: 'ef4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Half-Life Quick Calculations** 🔍\n\nHow much remains?',
      exercise: {
        dropdowns: [
          { label: '400g, half-life 10 min, after 20 min:', options: ['100g', '200g', '50g', '400g'] },
          { label: '1,000 bacteria, doubles every 3 hr, after 12 hr:', options: ['16,000', '4,000', '8,000', '12,000'] },
          { label: '800g, half-life 5 yr, after 15 yr:', options: ['100g', '200g', '400g', '50g'] },
          { label: '50 cells, doubles every 2 hr, after 10 hr:', options: ['1,600', '500', '800', '3,200'] }
        ],
        correctAnswers: ['100g', '16,000', '100g', '1,600'],
        hint1: '20 min / 10 min = 2 half-lives → $400 \\times (1/2)^2 = 100$.',
        hint2: '12 hr / 3 hr = 4 doublings → $1000 \\times 2^4 = 16{,}000$.',
        hint3: '15/5 = 3 half-lives → $800/8 = 100$. 10/2 = 5 doublings → $50 \\times 2^5 = 1{,}600$.',
        explanation: '2 half-lives: 400/4=100. 4 doublings: 1000×16=16,000. 3 half-lives: 800/8=100. 5 doublings: 50×32=1,600.'
      }
    },
    {
      id: 'ef4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Formula | Quick Method |
|---------|---------|--------------|
| Half-life | $A = A_0(1/2)^{t/h}$ | Count half-lives, divide by $2^n$ |
| Doubling time | $A = A_0 \\cdot 2^{t/d}$ | Count doublings, multiply by $2^n$ |
| Rule of 70 | Doubling time $\\approx 70/r\\%$ | For growth rate $r\\%$ per period |
| Rule of 70 (reverse) | Rate $\\approx 70/\\text{doubling time}$ | If doubling time is known |

- After $n$ half-lives: multiply by $(1/2)^n$
- After $n$ doublings: multiply by $2^n$
- Rule of 70 gives quick estimates without a calculator`
    }
  ]
};
