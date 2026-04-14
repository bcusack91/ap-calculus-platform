export const actPreAlgebraPart7Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa7-cheatsheet',
      type: 'text' as const,
      content: `
# 📝 Review & Mixed Practice

**Part 7 of 7 — Formula Cheat Sheet & Mixed ACT Pre-Algebra Problems**

## Pre-Algebra Formula Cheat Sheet

| Topic | Key Formulas |
|-------|-------------|
| Factors / Multiples | $\\text{LCM}(a,b) = \\frac{a \\times b}{\\text{GCF}(a,b)}$ |
| Fractions | Add: common denom; Divide: flip & multiply |
| Percents | Part $= \\% \\times$ Whole; Change $= \\frac{|\\text{New}-\\text{Old}|}{\\text{Old}} \\times 100$ |
| Proportions | $\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc$ |
| Exponents | $a^m \\cdot a^n = a^{m+n}$; $a^0 = 1$; $a^{-n} = \\frac{1}{a^n}$ |
| Roots | $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ |
| Stats | Mean $= \\frac{\\text{sum}}{n}$; Median = middle; Mode = most common |
| PEMDAS | Parentheses → Exponents → Mult/Div → Add/Sub |
      `
    },
    {
      id: 'act-pa7-tips',
      type: 'text' as const,
      content: `
## ACT Strategy Tips

1. **Plug in answers** — On multiple-choice, try each option if algebra feels slow.
2. **Estimate** — Eliminate clearly wrong answers before computing.
3. **Watch units** — Especially in rate and percent problems.
4. **Read carefully** — "Percent increase" is not the same as "new value."
5. **Don't overthink** — Pre-algebra questions are meant to be quick; ~30 seconds each.

**Common traps:**
- Confusing $-3^2 = -9$ with $(-3)^2 = 9$.
- Forgetting to simplify fractions.
- Mixing up LCM and GCF.
- Using the wrong base in percent-change problems.
      `
    },
    {
      id: 'act-pa7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Pre-Algebra** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\frac{2}{3}$ of $45$?',
            options: ['$15$', '$22.5$', '$30$', '$35$'],
            correctAnswer: 2,
            explanation: '$\\frac{2}{3} \\times 45 = \\frac{90}{3} = 30$.'
          },
          {
            question: 'A store charges $\\$18$ for an item after a $10\\%$ discount. What was the original price?',
            options: ['$\\$16.20$', '$\\$19.80$', '$\\$20$', '$\\$28$'],
            correctAnswer: 2,
            explanation: 'After 10% off you pay 90%: $0.90 \\times P = 18 \\implies P = 20$.'
          }
        ]
      }
    },
    {
      id: 'act-pa7-mixed',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem 1:** Evaluate $\\frac{3^2 + 4^2}{5}$.

$$\\frac{9 + 16}{5} = \\frac{25}{5} = 5$$

**Problem 2:** A bag has red and green marbles in a $2 : 5$ ratio. If there are $35$ total marbles, how many are red?

$$\\text{Total parts} = 7 \\implies \\text{each part} = 5 \\implies \\text{red} = 2 \\times 5 = 10$$

**Problem 3:** The median of $\\{3, 7, x, 12, 18\\}$ (already sorted) is $9$. What is $x$?

The median is the 3rd value: $x = 9$.

**Problem 4:** A sweater costs $\\$64$ after a $20\\%$ discount. Original price?

$$0.80P = 64 \\implies P = 80$$
      `
    },
    {
      id: 'act-pa7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) Evaluate: $(-2)^3 + 5^2$

2) What is $\\text{LCM}(9, 12)$?

3) A cyclist rides $45$ miles in $3$ hours. What is the speed in mph?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '36', '15'],
        hint1: '$(-2)^3 = -8$ and $5^2 = 25$.',
        hint2: '$9 = 3^2$, $12 = 2^2 \\times 3$. Take the higher powers.',
        hint3: 'Speed $= \\frac{\\text{distance}}{\\text{time}}$.',
        explanation: '$(-2)^3 + 5^2 = -8 + 25 = 17$. LCM $= 2^2 \\times 3^2 = 36$. Speed $= 45 \\div 3 = 15$ mph.'
      }
    },
    {
      id: 'act-pa7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find an original price before a discount, you ______ by the remaining percent.',
            options: ['multiply the sale price', 'divide the sale price', 'add the discount', 'subtract the discount']
          },
          {
            label: '$-5^2$ equals …',
            options: ['$25$', '$-25$', '$10$', '$-10$']
          },
          {
            label: 'The mean is most affected by …',
            options: ['the mode', 'the median', 'outliers', 'the range']
          }
        ],
        correctAnswers: ['divide the sale price', '$-25$', 'outliers'],
        hint1: 'If $0.80P = \\text{sale price}$, solve for $P$.',
        hint2: 'Without parentheses, exponent applies to $5$ only: $-(5^2)$.',
        hint3: 'Extreme values pull the mean toward them.',
        explanation: 'Divide sale price by $(1 - \\text{discount rate})$. $-5^2 = -(25) = -25$. Outliers strongly affect the mean.'
      }
    },
    {
      id: 'act-pa7-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Final Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If the mean of $8, 12, x, 20$ is $15$, what is $x$?',
            options: ['$15$', '$18$', '$20$', '$22$'],
            correctAnswer: 2,
            explanation: 'Sum $= 4 \\times 15 = 60$. Known $= 8 + 12 + 20 = 40$. So $x = 60 - 40 = 20$.'
          },
          {
            question: 'A $25\\%$ increase followed by a $20\\%$ decrease returns to what percent of the original?',
            options: ['$95\\%$', '$100\\%$', '$105\\%$', '$110\\%$'],
            correctAnswer: 1,
            explanation: '$1.25 \\times 0.80 = 1.00$. You return to exactly $100\\%$ of the original.'
          }
        ]
      }
    }
  ]
};
