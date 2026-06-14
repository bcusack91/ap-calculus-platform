import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'simple-interest',
    sections: [
      {
        id: 'simple-interest-p1-intro',
        type: 'text' as const,
        content: `
# 💰 Simple Interest

**Part 1 of 5 — Concept Introduction**

When you put money in a savings account, the bank pays you a little extra for letting them hold it. When you borrow money, you pay a little extra back for the right to use it. That "little extra" is called **interest**.

> **Interest** is the *cost of borrowing* money, or the *reward for saving* money.

**Simple interest** is the easiest kind to calculate. It is figured *only* on the original amount of money — the part you started with — and never on the interest itself.

## The Four Key Words 🔑

Every simple-interest problem is built from four ideas:

| Symbol | Name | What it means |
|--------|------|---------------|
| $P$ | **Principal** | The original amount borrowed or invested |
| $r$ | **Rate** | The yearly percent of interest, written as a decimal |
| $t$ | **Time** | The length of time, measured in **years** |
| $I$ | **Interest** | The extra money earned or owed |

Once you know the principal, rate, and time, you can find the interest.
    `
      },
      {
        id: 'simple-interest-p1-formula',
        type: 'text' as const,
        content: `
## The Simple Interest Formula

Everything comes down to one short formula:

$$I = P \\times r \\times t$$

We usually just write it as $I = Prt$.

- $I$ = interest earned or paid
- $P$ = principal (the starting amount)
- $r$ = rate as a **decimal** (so $5\\% = 0.05$)
- $t$ = time in **years**

### ⚠️ Turn the percent into a decimal first!

The rate is given as a percent, but the formula needs a **decimal**. To convert, divide the percent by $100$ (move the decimal point two places to the left):

- $4\\% = 0.04$
- $6\\% = 0.06$
- $18\\% = 0.18$

### Finding the Total Amount

After you find the interest, the **total amount** of money is just the principal plus the interest:

$$A = P + I$$

So if you invest \\$500 and earn \\$60 in interest, you end up with $A = 500 + 60 = \\$560$.

## Worked Example 🧮

You invest \\$500 at $4\\%$ simple interest for $3$ years. How much interest will you earn?

- $P = 500$, $\\quad r = 0.04$, $\\quad t = 3$

$$I = Prt = 500 \\times 0.04 \\times 3 = 500 \\times 0.12 = 60$$

**You earn \\$60 in interest**, and your total amount is $500 + 60 = \\$560$.
    `
      },
      {
        id: 'simple-interest-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Let's make sure the key ideas are clear before we calculate.
    `,
        exercise: {
          questions: [
            {
              question: 'In the simple interest formula $I = Prt$, what does the letter $P$ stand for?',
              options: [
                'The percent of interest charged each year',
                'The principal — the original amount of money',
                'The total amount paid back at the end',
                'The number of years the money is invested'
              ],
              correctAnswer: 1,
              explanation: 'The $P$ stands for **principal**, the original amount borrowed or invested. The rate is $r$ and the time is $t$.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'simple-interest',
    sections: [
      {
        id: 'simple-interest-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's walk through two problems slowly. Every problem follows the **same three steps**.

> **Step 1:** Change the rate from a percent to a decimal.
> **Step 2:** Plug $P$, $r$, and $t$ into $I = Prt$.
> **Step 3:** Multiply, then (if asked) add the interest to the principal.

## Example 1: A Loan 🏦

Maria borrows \\$1,200 at $6\\%$ simple interest for $2$ years. How much interest will she owe, and how much must she repay in total?

**Step 1 — Rate to decimal:** $6\\% = 0.06$.

**Step 2 — Use the formula:**

$$I = Prt = 1200 \\times 0.06 \\times 2$$

$$I = 1200 \\times 0.12 = 144$$

**Step 3 — Total to repay:**

$$A = P + I = 1200 + 144 = 1344$$

Maria owes **\\$144** in interest and repays **\\$1,344** in all. ✅

## Example 2: A Savings Account 🌱

You invest \\$800 at $5\\%$ simple interest for $4$ years. How much interest do you earn?

- $P = 800$, $\\quad r = 0.05$, $\\quad t = 4$

$$I = Prt = 800 \\times 0.05 \\times 4 = 800 \\times 0.20 = 160$$

You earn **\\$160** in interest, for a total of $800 + 160 = \\$960$. 🎉
    `
      },
      {
        id: 'simple-interest-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

You invest **\\$2,000** at **$3\\%$ simple interest** for **5 years**. Work through it one step at a time.

1) Write the rate $3\\%$ as a **decimal**. (Type it like $0.05$.)

2) Find the **interest** $I = Prt$. (Type just the number of dollars, like $150$.)

3) Find the **total amount** $A = P + I$. (Type just the number of dollars.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.03', '300', '2300'],
          hint1: 'To turn a percent into a decimal, divide by 100: $3\\% = 3 \\div 100 = 0.03$.',
          hint2: 'For the interest, multiply $2000 \\times 0.03 \\times 5$. For the total, add that interest to the \\$2,000 principal.',
          explanation: 'The rate is $3\\% = 0.03$. Then $I = 2000 \\times 0.03 \\times 5 = 2000 \\times 0.15 = 300$. The total is $A = 2000 + 300 = 2300$ dollars.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'simple-interest',
    sections: [
      {
        id: 'simple-interest-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Use $I = Prt$ for each problem. Remember: change the percent to a decimal **first**.
    `,
        exercise: {
          questions: [
            {
              question: 'You invest \\$400 at $2\\%$ simple interest for $3$ years. How much **interest** do you earn?',
              options: ['\\$8', '\\$24', '\\$240', '\\$2,400'],
              correctAnswer: 1,
              explanation: 'First $2\\% = 0.02$. Then $I = 400 \\times 0.02 \\times 3 = 400 \\times 0.06 = 24$ dollars.'
            },
            {
              question: 'A loan of \\$1,000 is charged $7\\%$ simple interest for $2$ years. What is the **total amount** to repay?',
              options: ['\\$140', '\\$1,070', '\\$1,140', '\\$2,400'],
              correctAnswer: 2,
              explanation: 'The interest is $I = 1000 \\times 0.07 \\times 2 = 140$. The total is $A = 1000 + 140 = 1140$ dollars.'
            }
          ]
        }
      },
      {
        id: 'simple-interest-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Match the Pieces** 🔍

A problem says: *"You invest \\$600 at $5\\%$ simple interest for $4$ years."* Pick the correct value for each part of the formula.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'The rate $r$ as a decimal is',
              options: ['$0.5$', '$0.05$', '$5$', '$0.005$']
            },
            {
              label: 'The interest $I = Prt$ equals',
              options: ['\\$30', '\\$120', '\\$240', '\\$1,200']
            }
          ],
          correctAnswers: ['$0.05$', '\\$120'],
          hint1: 'Convert the percent by dividing by 100, then multiply principal × rate × time: $600 \\times 0.05 \\times 4$.',
          explanation: 'The rate $5\\% = 0.05$. Then $I = 600 \\times 0.05 \\times 4 = 600 \\times 0.20 = 120$ dollars.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'simple-interest',
    sections: [
      {
        id: 'simple-interest-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

In real life, time is not always a whole number of years. The formula $I = Prt$ needs $t$ **in years**, so you often have to convert.

## Converting Time to Years ⏳

| You are given | Convert by | Example |
|---------------|-----------|---------|
| **Months** | months $\\div\\, 12$ | $6$ months $= \\frac{6}{12} = 0.5$ years |
| **Months** | months $\\div\\, 12$ | $9$ months $= \\frac{9}{12} = 0.75$ years |
| **Days** | days $\\div\\, 365$ | $180$ days $= \\frac{180}{365}$ years |

## Credit Card Example 💳

A credit card charges $18\\%$ annual simple interest. If you carry a \\$300 balance for **6 months**, how much interest builds up?

**Step 1 — Convert time:** $6$ months $= \\frac{6}{12} = 0.5$ years.

**Step 2 — Use the formula:**

$$I = Prt = 300 \\times 0.18 \\times 0.5 = 300 \\times 0.09 = 27$$

You would owe an extra **\\$27** in interest after 6 months. That is why paying off cards quickly matters! 💡
    `
      },
      {
        id: 'simple-interest-p4-input',
        type: 'input-boxes' as const,
        content: `
**Real-World Practice** 🧮

You invest **\\$800** at **$5\\%$ simple interest** for **9 months**. Work it out step by step.

1) Convert $9$ months to **years** as a decimal. (Type it like $0.5$.)

2) Find the **interest** $I = Prt$. (Type just the number of dollars, like $30$.)

3) Find the **total amount** $A = P + I$. (Type just the number of dollars.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.75', '30', '830'],
          hint1: 'To convert months to years, divide by 12: $9 \\div 12 = 0.75$ years.',
          hint2: 'Interest is $800 \\times 0.05 \\times 0.75$. Then add that interest to the \\$800 principal for the total.',
          explanation: 'First $9$ months $= 9 \\div 12 = 0.75$ years. Then $I = 800 \\times 0.05 \\times 0.75 = 800 \\times 0.0375 = 30$ dollars. The total is $A = 800 + 30 = 830$ dollars.'
        }
      },
      {
        id: 'simple-interest-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 🎯

Read carefully — watch the units!
    `,
        exercise: {
          questions: [
            {
              question: 'Jordan borrows \\$1,500 at $8\\%$ simple interest for $6$ months. How much **interest** does Jordan owe?',
              options: ['\\$60', '\\$120', '\\$240', '\\$720'],
              correctAnswer: 0,
              explanation: 'Convert: $6$ months $= 0.5$ years. Then $I = 1500 \\times 0.08 \\times 0.5 = 1500 \\times 0.04 = 60$ dollars.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'simple-interest',
    sections: [
      {
        id: 'simple-interest-p5-review',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You've learned the whole simple-interest toolkit. Here is everything in one place:

| Idea | Formula / Rule | Remember |
|------|----------------|----------|
| **Interest** | $I = Prt$ | The main formula |
| **Total amount** | $A = P + I$ | Principal plus interest |
| **Percent → decimal** | divide by $100$ | $5\\% = 0.05$ |
| **Months → years** | divide by $12$ | $6$ mo $= 0.5$ yr |
| **Days → years** | divide by $365$ | $180$ days $= \\frac{180}{365}$ yr |

### The Three-Step Habit ✅

1. Change the rate to a **decimal**.
2. Make sure time $t$ is in **years**.
3. Multiply $P \\times r \\times t$, then add to $P$ if you need the total.

Master these, and you can handle any simple-interest problem — savings, loans, or credit cards. Now try the challenge below! 💪
    `
      },
      {
        id: 'simple-interest-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These problems mix everything together. Take your time and check your units.
    `,
        exercise: {
          questions: [
            {
              question: 'You invest \\$2,500 at $4\\%$ simple interest for $3$ years. What is the **total amount** at the end?',
              options: ['\\$300', '\\$2,800', '\\$3,000', '\\$2,540'],
              correctAnswer: 1,
              explanation: 'The interest is $I = 2500 \\times 0.04 \\times 3 = 300$. The total is $A = 2500 + 300 = 2800$ dollars.'
            },
            {
              question: 'A store credit card charges $20\\%$ simple interest. On a \\$450 balance held for $18$ months, how much **interest** accrues?',
              options: ['\\$90', '\\$135', '\\$162', '\\$180'],
              correctAnswer: 1,
              explanation: 'Convert: $18$ months $= 18 \\div 12 = 1.5$ years. Then $I = 450 \\times 0.20 \\times 1.5 = 450 \\times 0.30 = 135$ dollars.'
            }
          ]
        }
      }
    ]
  }
]
