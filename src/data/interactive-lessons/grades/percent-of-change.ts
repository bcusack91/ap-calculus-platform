import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'percent-of-change',
    sections: [
      {
        id: 'percent-of-change-p1-intro',
        type: 'text' as const,
        content: `
# 📈 Percent of Change

**Part 1 of 5 — Concept Introduction**

Have you ever seen a sign that says *"30% off!"* or read a headline like *"Population up 12% this year"*? Those numbers are all about **percent of change** — how much something grew or shrank compared to where it started.

**Percent of change** tells us how much a quantity increased or decreased, written as a percentage of the **original amount**.

## The Formula

$$\\text{Percent of Change} = \\frac{\\text{Amount of Change}}{\\text{Original Amount}} \\times 100\\%$$

The **amount of change** is just the difference between the new value and the old value:

$$\\text{Amount of Change} = \\text{New} - \\text{Original}$$

> 🔑 **Big idea:** Always divide by the **original** amount — the number you *started* with — not the new amount.
    `
      },
      {
        id: 'percent-of-change-p1-two-types',
        type: 'text' as const,
        content: `
## Two Kinds of Change

Every percent of change is either an **increase** or a **decrease**.

| Type | What happens | Real-life example |
|------|--------------|-------------------|
| **Percent Increase** | The value gets **larger** | Price goes from $20 to $25 |
| **Percent Decrease** | The value gets **smaller** | Jacket drops from $80 to $60 |

- A **percent increase** happens when the new amount is **bigger** than the original (population growth, a raise, rising temperature).
- A **percent decrease** happens when the new amount is **smaller** than the original (a sale, a price cut, weight loss).

## A First Worked Example

A shirt costs **$20**. The price rises to **$25**. What is the percent change?

- **Step 1 — Amount of change:** $25 - 20 = 5$ dollars.
- **Step 2 — Divide by the original:** $\\frac{5}{20} = 0.25$.
- **Step 3 — Convert to a percent:** $0.25 \\times 100\\% = 25\\%$.

Because the price went **up**, this is a **25% increase**. ✅
    `
      },
      {
        id: 'percent-of-change-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯
    `,
        exercise: {
          questions: [
            {
              question: 'In the percent of change formula $\\frac{\\text{Amount of Change}}{\\text{Original Amount}} \\times 100\\%$, what number do you **divide by**?',
              options: [
                'The new amount',
                'The original (starting) amount',
                'The larger of the two amounts',
                'The amount of change'
              ],
              correctAnswer: 1,
              explanation: 'Percent of change is always measured relative to where you started, so you divide the amount of change by the **original** amount.'
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
    topicSlug: 'percent-of-change',
    sections: [
      {
        id: 'percent-of-change-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

The same three steps work for **both** increase and decrease. The only difference is the order you subtract so the amount of change comes out positive.

## Example 1: Percent Increase (Population)

A town's population was **8,000** last year. This year it is **8,800**. Find the percent increase.

- **Step 1 — Amount of change:** $8800 - 8000 = 800$ people.
- **Step 2 — Divide by the original:** $\\frac{800}{8000} = 0.1$.
- **Step 3 — Convert to a percent:** $0.1 \\times 100\\% = 10\\%$.

The population had a **10% increase**. 🎉

## Example 2: Percent Decrease (Sale)

A jacket normally costs **$80** but is on sale for **$60**. Find the percent decrease.

- **Step 1 — Amount of change:** $80 - 60 = 20$ dollars (the price dropped by $20).
- **Step 2 — Divide by the original:** $\\frac{20}{80} = 0.25$.
- **Step 3 — Convert to a percent:** $0.25 \\times 100\\% = 25\\%$.

The price had a **25% decrease**. 🏷️

> 💡 For a **decrease**, subtract $\\text{New}$ from $\\text{Original}$ so the change stays positive, then divide by the original just like always.
    `
      },
      {
        id: 'percent-of-change-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Maria scored **72** on her first test and **90** on her second test. Find the percent increase, one step at a time.

1) What is the **amount of change** (new − original)? (Type a single number.)

2) Divide that change by the **original** score. What decimal do you get? (Type it like $0.25$.)

3) Convert that decimal to a percent. What is the **percent increase**? (Type just the number, like $25$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '0.25', '25'],
          hint1: 'The original score is 72 and the new score is 90, so the amount of change is $90 - 72$.',
          hint2: 'Divide the change by the original: $\\frac{18}{72} = 0.25$. To make it a percent, multiply by 100.',
          explanation: 'The change is $90 - 72 = 18$ points. Dividing by the original gives $\\frac{18}{72} = 0.25$, and $0.25 \\times 100\\% = 25\\%$. Maria’s score went up by **25%**.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'percent-of-change',
    sections: [
      {
        id: 'percent-of-change-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work through each one with the three steps: find the change, divide by the original, multiply by 100.
    `,
        exercise: {
          questions: [
            {
              question: 'A book club grows from **40 members** to **50 members**. What is the percent **increase**?',
              options: ['$10\\%$', '$20\\%$', '$25\\%$', '$50\\%$'],
              correctAnswer: 2,
              explanation: 'The change is $50 - 40 = 10$ members. Then $\\frac{10}{40} = 0.25$, and $0.25 \\times 100\\% = 25\\%$.'
            },
            {
              question: 'A phone’s price drops from **$200** to **$150**. What is the percent **decrease**?',
              options: ['$50\\%$', '$33\\%$', '$25\\%$', '$15\\%$'],
              correctAnswer: 2,
              explanation: 'The change is $200 - 150 = 50$ dollars. Then $\\frac{50}{200} = 0.25$, so the price fell by $25\\%$.'
            }
          ]
        }
      },
      {
        id: 'percent-of-change-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Increase or Decrease?** 🔍

For each situation, decide whether it is a percent increase or a percent decrease.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'A temperature rises from $60\\degree$F to $75\\degree$F. This is a percent',
              options: ['increase', 'decrease']
            },
            {
              label: 'A weight goes from 150 lbs down to 135 lbs. This is a percent',
              options: ['increase', 'decrease']
            }
          ],
          correctAnswers: ['increase', 'decrease'],
          hint1: 'If the new number is bigger than the original, it is an increase. If the new number is smaller, it is a decrease.',
          explanation: 'The temperature went **up** (60 → 75), so that is an **increase**. The weight went **down** (150 → 135), so that is a **decrease**.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'percent-of-change',
    sections: [
      {
        id: 'percent-of-change-p4-context',
        type: 'text' as const,
        content: `
# 🌎 Application & Word Problems

**Part 4 of 5 — Real-World Practice**

Percent of change shows up constantly in everyday life:

- **Shopping:** "Save 25%!" means the price had a 25% *decrease*.
- **Sports & stats:** A player's points might go *up* 40% from last season.
- **News:** Gas prices, populations, and ticket sales are often reported as percent changes.

When you read a word problem, look for the **two amounts** — the one you started with (original) and the one you ended with (new). Decide which is bigger, then run the three steps.

> 🛒 **Tip:** The phrase *"on sale for"* or *"marked down to"* usually signals a **decrease**, while *"raised to"* or *"grew to"* signals an **increase**.
    `
      },
      {
        id: 'percent-of-change-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem** 🧮

A video game originally costs **$60**. During a holiday sale it is marked down to **$45**. Find the percent decrease step by step.

1) What is the **amount of change** (original − new)? (Type a single number.)

2) Divide that change by the **original** price. What decimal do you get? (Type it like $0.25$.)

3) What is the **percent decrease**? (Type just the number, like $25$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '0.25', '25'],
          hint1: 'The price dropped from $60 to $45, so the amount of change is $60 - 45$.',
          hint2: 'Divide the change by the original price: $\\frac{15}{60} = 0.25$, then multiply by 100 to get a percent.',
          explanation: 'The change is $60 - 45 = 15$ dollars. Then $\\frac{15}{60} = 0.25$, and $0.25 \\times 100\\% = 25\\%$. The game is **25% off**.'
        }
      },
      {
        id: 'percent-of-change-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Apply It** 🎯
    `,
        exercise: {
          questions: [
            {
              question: 'A bakery sold **120 cupcakes** on Friday and **150 cupcakes** on Saturday. What was the percent **increase** in cupcakes sold?',
              options: ['$20\\%$', '$25\\%$', '$30\\%$', '$120\\%$'],
              correctAnswer: 1,
              explanation: 'The change is $150 - 120 = 30$ cupcakes. Then $\\frac{30}{120} = 0.25$, so sales rose by $25\\%$.'
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
    topicSlug: 'percent-of-change',
    sections: [
      {
        id: 'percent-of-change-p5-review',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You now have a complete toolkit for percent of change. Here is a quick summary:

| Step | What to do | Example ($40 → $50) |
|------|------------|----------------------|
| 1 | Find the amount of change | $50 - 40 = 10$ |
| 2 | Divide by the **original** | $\\frac{10}{40} = 0.25$ |
| 3 | Multiply by 100 to get a percent | $0.25 \\times 100\\% = 25\\%$ |
| 4 | Label it | Bigger ⇒ **increase**; smaller ⇒ **decrease** |

**Remember:**

- Always divide by the **original** amount.
- A bigger new value means a percent **increase**; a smaller new value means a percent **decrease**.
- A percent increase can be more than 100% (if a value more than doubles), but a percent decrease can never be more than 100%.

Ready for the final challenge? Let's go! 🚀
    `
      },
      {
        id: 'percent-of-change-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎯

Mix of increase and decrease — read each one carefully.
    `,
        exercise: {
          questions: [
            {
              question: 'A savings account grows from **$50** to **$80**. What is the percent **increase**?',
              options: ['$30\\%$', '$37.5\\%$', '$60\\%$', '$160\\%$'],
              correctAnswer: 2,
              explanation: 'The change is $80 - 50 = 30$ dollars. Then $\\frac{30}{50} = 0.6$, and $0.6 \\times 100\\% = 60\\%$.'
            },
            {
              question: 'A store had **200 jackets** and sold some, leaving **170 jackets**. What is the percent **decrease** in jackets?',
              options: ['$10\\%$', '$15\\%$', '$17\\%$', '$30\\%$'],
              correctAnswer: 1,
              explanation: 'The change is $200 - 170 = 30$ jackets. Then $\\frac{30}{200} = 0.15$, so the count fell by $15\\%$.'
            }
          ]
        }
      }
    ]
  }
]
