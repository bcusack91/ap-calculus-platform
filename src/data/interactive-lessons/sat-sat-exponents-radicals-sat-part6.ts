export const satExponentsPart6Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp6-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Growth & Decay

**Part 6 of 7 — The SAT's Favorite Real-World Exponent Problems**

The general model:

$$A = P(1 + r)^t \\quad \\text{(growth)} \\qquad A = P(1 - r)^t \\quad \\text{(decay)}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Initial amount (principal) |
| $r$ | Rate (as a decimal) |
| $t$ | Time (number of periods) |

**Growth** → base $> 1$ (e.g., $1.05$ for 5% growth)
**Decay** → base between $0$ and $1$ (e.g., $0.92$ for 8% decay)
      `
    },
    {
      id: 'sat-exp6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Compound Interest**

You invest $\\$2{,}000$ at 6% annual interest compounded yearly. How much after 5 years?

$$A = 2000(1.06)^5 = 2000(1.3382...) \\approx \\$2{,}676.45$$

**Example 2 — Depreciation**

A car worth $\\$25{,}000$ loses 15% of its value each year. Value after 3 years?

$$A = 25000(1 - 0.15)^3 = 25000(0.85)^3 = 25000(0.614125) \\approx \\$15{,}353$$

**Example 3 — Doubling Time**

A population doubles every 4 years. Starting at $500$, population after $t$ years:

$$P(t) = 500 \\cdot 2^{t/4}$$

After 12 years: $P(12) = 500 \\cdot 2^3 = 500 \\cdot 8 = 4{,}000$.

---

**SAT Tip:** When you see "doubles every $k$ years," the model is $P \\cdot 2^{t/k}$. For "triples," use $3^{t/k}$.
      `
    },
    {
      id: 'sat-exp6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Exponential Models** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The function $f(t) = 800(0.75)^t$ models a quantity over time. Which statement is true?',
            options: [
              'The initial value is 75 and it grows by 800% per period',
              'The initial value is 800 and it decreases by 25% per period',
              'The initial value is 800 and it increases by 75% per period',
              'The initial value is 600 and it decreases by 75% per period'
            ],
            correctAnswer: 1,
            explanation: 'Initial value = 800 (when $t=0$). Base $0.75 = 1 - 0.25$, so it decreases by 25% each period.'
          },
          {
            question: 'Which function models a quantity that starts at 50 and triples every 6 hours?',
            options: ['$f(t) = 50(3)^{6t}$', '$f(t) = 50(3)^{t/6}$', '$f(t) = 50(6)^{t/3}$', '$f(t) = 150^{t/6}$'],
            correctAnswer: 1,
            explanation: 'Triples every 6 hours: after $t$ hours, the number of tripling periods is $t/6$. So $f(t) = 50 \\cdot 3^{t/6}$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp6-halflife',
      type: 'text' as const,
      content: `
## Half-Life Problems

The SAT loves half-life questions. The model:

$$A = P \\cdot \\left(\\frac{1}{2}\\right)^{t/h}$$

where $h$ is the half-life (time for half to remain).

**Example:** A radioactive isotope has a half-life of 10 years. Starting with 200 grams, how much remains after 30 years?

$$A = 200 \\cdot \\left(\\frac{1}{2}\\right)^{30/10} = 200 \\cdot \\left(\\frac{1}{2}\\right)^3 = 200 \\cdot \\frac{1}{8} = 25 \\text{ grams}$$

**Quick shortcut for half-life:**

| Half-lives elapsed | Fraction remaining |
|-------------------|--------------------|
| 1 | $1/2$ |
| 2 | $1/4$ |
| 3 | $1/8$ |
| 4 | $1/16$ |
| 5 | $1/32$ |
      `
    },
    {
      id: 'sat-exp6-input',
      type: 'input-boxes' as const,
      content: `
**Solve each — enter a whole number.** 🧮

1) A substance has a half-life of 5 years. Starting with 160 g, how many grams remain after 15 years?

2) A population doubles every 3 years. Starting at 100, what is the population after 9 years?

3) You invest $\\$1{,}000$ at 10% annual growth. After 2 years, what is the value (round to nearest dollar)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '800', '1210'],
        hint1: '15 years = 3 half-lives. $160 \\div 2 \\div 2 \\div 2 = 20$.',
        hint2: '9 years = 3 doubling periods. $100 \\times 2^3 = 800$.',
        hint3: '$1000(1.10)^2 = 1000(1.21) = 1210$.',
        explanation: '1) 3 half-lives → $160/8 = 20$. 2) $100 \\cdot 8 = 800$. 3) $\\$1{,}210$.'
      }
    },
    {
      id: 'sat-exp6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the model for each scenario.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car loses 20% of its value each year (initial: $\\$30{,}000$)',
            options: ['$30000(1.20)^t$', '$30000(0.80)^t$', '$30000(0.20)^t$', '$30000 - 0.20t$']
          },
          {
            label: 'Bacteria double every 2 hours (initial count: 500)',
            options: ['$500(2)^{2t}$', '$500(2)^{t/2}$', '$1000^t$', '$500 + 2t$']
          },
          {
            label: 'A savings account earns 3% annual interest (initial: $\\$5{,}000$)',
            options: ['$5000(0.03)^t$', '$5000(0.97)^t$', '$5000(1.03)^t$', '$5000 + 150t$']
          }
        ],
        correctAnswers: ['$30000(0.80)^t$', '$500(2)^{t/2}$', '$5000(1.03)^t$'],
        hint1: 'Loses 20% → keeps 80% → multiply by $0.80$ each year.',
        hint2: 'Doubles every 2 hours → $2^{t/2}$ where $t$ is in hours.',
        hint3: 'Earns 3% → multiply by $1.03$ each year.',
        explanation: 'Growth: base $> 1$. Decay: base between 0 and 1. Linear models (like $+150t$) are NOT exponential.'
      }
    },
    {
      id: 'sat-exp6-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The value of a collectible is modeled by $V(t) = 120(1.08)^t$, where $t$ is the number of years since purchase. What does 1.08 represent?',
            options: [
              'The collectible gains $\\$1.08$ in value each year',
              'The collectible\'s value increases by 8% each year',
              'The collectible is worth $\\$108$ after one year',
              'The collectible\'s value increases by 108% each year'
            ],
            correctAnswer: 1,
            explanation: 'The base $1.08 = 1 + 0.08$, so the value grows by 8% per year. (Not $\\$1.08$ — that would be linear, not exponential.)'
          },
          {
            question: 'A medication has a half-life of 4 hours in the body. If a patient takes 400 mg, approximately how many mg remain after 12 hours?',
            options: ['$200$', '$100$', '$50$', '$25$'],
            correctAnswer: 2,
            explanation: '12 hours = 3 half-lives. $400 \\to 200 \\to 100 \\to 50$ mg.'
          }
        ]
      }
    }
  ]
}
