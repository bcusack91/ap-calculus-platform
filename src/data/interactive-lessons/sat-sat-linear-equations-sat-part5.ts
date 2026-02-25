export const satLinearEquationsPart5Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l5-intro',
      type: 'text' as const,
      content: `
# 📐 Modeling with Linear Equations

**Part 5 of 7 — Translating Words into Math**

On the SAT, many linear equation problems are wrapped in **word problems**. The math itself is usually straightforward — the hard part is setting up the equation correctly.

**Translation guide:**

| English | Math |
|---------|------|
| "is," "equals," "was" | $=$ |
| "more than," "increased by" | $+$ |
| "less than," "decreased by" | $-$ |
| "times," "of," "product" | $\\times$ |
| "per," "each," "divided by" | $\\div$ |
| "a number," "some value" | $x$ |
      `
    },
    {
      id: 'sat-l5-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which equation represents: "Five more than twice a number is 17"?',
            options: [
              '$5 + x = 17$',
              '$2x + 5 = 17$',
              '$5(2x) = 17$',
              '$2(x + 5) = 17$'
            ],
            correctAnswer: 1,
            explanation: '"Twice a number" = $2x$. "Five more than" that = $2x + 5$. "Is 17" means $= 17$. So $2x + 5 = 17$.'
          }
        ]
      }
    },
    {
      id: 'sat-l5-slope-intercept',
      type: 'text' as const,
      content: `
**Slope-Intercept Form: The SAT's Favorite Model**

Many real-world situations follow the pattern:

$$y = mx + b$$

- $m$ = **rate of change** (per unit increase)
- $b$ = **starting value** (when $x = 0$)

**Example:** A plumber charges \\$50 for a house call plus \\$35 per hour.

$$\\text{Cost} = 35h + 50$$

- $m = 35$ → the hourly rate
- $b = 50$ → the initial fee

If a job costs \\$190, how long did it take?

$$35h + 50 = 190 \\Rightarrow 35h = 140 \\Rightarrow h = 4 \\text{ hours}$$
      `
    },
    {
      id: 'sat-l5-practice',
      type: 'input-boxes' as const,
      content: `
**Set up and solve.** 🧮

1) A phone plan costs \\$20/month plus \\$0.05 per text. If the monthly bill is \\$32, how many texts were sent?

2) A rental car costs \\$40/day plus \\$0.25/mile. A 3-day rental cost \\$210 total. How many miles were driven?

3) Two consecutive integers add up to 47. What is the smaller one?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['240', '360', '23'],
        hint1: 'For #1: $20 + 0.05t = 32$. Subtract 20 first, then divide by 0.05.',
        hint2: 'For #2: $40(3) + 0.25m = 210$. That gives $120 + 0.25m = 210$.',
        hint3: 'For #3: Let the integers be $n$ and $n+1$. Then $n + (n+1) = 47$.',
        explanation: '1) $0.05t = 12 \\Rightarrow t = 240$ texts. 2) $0.25m = 90 \\Rightarrow m = 360$ miles. 3) $2n + 1 = 47 \\Rightarrow 2n = 46 \\Rightarrow n = 23$.'
      }
    },
    {
      id: 'sat-l5-interpreting',
      type: 'text' as const,
      content: `
**Interpreting Equations on the SAT**

The SAT often gives you an equation and asks what a particular term **means** in context.

**Example:** The equation $C = 15n + 200$ models the total cost $C$ of hosting a party where $n$ is the number of guests.

- *"What does the 15 represent?"* → The cost **per additional guest** (\\$15/guest)
- *"What does the 200 represent?"* → The **fixed cost** regardless of guest count

**Key insight:** The coefficient of the variable = rate per unit. The constant = starting/fixed value.
      `
    },
    {
      id: 'sat-l5-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The equation $P = 8.50h + 120$ models an employee\\'s weekly pay $P$ where $h$ is the number of overtime hours worked. What does $120$ represent?',
            options: [
              'The overtime rate per hour',
              'The total weekly pay with no overtime',
              'The number of regular hours worked',
              'The total overtime pay'
            ],
            correctAnswer: 1,
            explanation: 'When $h = 0$ (no overtime), $P = 120$. So 120 is the base weekly pay before any overtime. The 8.50 is the overtime rate per hour.'
          },
          {
            question: 'A store is having a sale where every item is \\$5 off, then an additional 10% off. If the final price of an item is \\$27, what was the original price?',
            options: [
              '\\$32$',
              '\\$35$',
              '\\$36$',
              '\\$40$'
            ],
            correctAnswer: 1,
            explanation: 'After \\$5 off: $p - 5$. After 10% off: $0.90(p - 5)$. Set equal to 27: $0.90(p-5) = 27$. Divide by 0.90: $p - 5 = 30$. Add 5: $p = 35$.'
          }
        ]
      }
    }
  ]
}
