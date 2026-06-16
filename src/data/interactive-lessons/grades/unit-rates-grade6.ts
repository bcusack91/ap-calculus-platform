import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'unit-rates-grade6',
    sections: [
      {
        id: 'unit-rates-grade6-p1-intro',
        type: 'text' as const,
        content: `
# 🚗 Unit Rates

**Part 1 of 5 — Concept Introduction**

Have you ever wondered which box of cereal is the better deal, or how fast a car is really going? The secret tool behind these everyday questions is the **unit rate**.

## What Is a Rate?

A **rate** is a special kind of ratio that compares **two different units**. The two quantities have different labels (like miles and hours, or dollars and books).

**Examples of rates:**
- $60$ miles in $2$ hours
- \\$15 for $3$ books
- $150$ words in $5$ minutes

Notice that each one connects two *different* kinds of measurements. That is what makes it a rate instead of a plain ratio like $3$ cats to $4$ dogs (same unit: animals).
    `
      },
      {
        id: 'unit-rates-grade6-p1-definition',
        type: 'text' as const,
        content: `
## What Is a Unit Rate? ⭐

A **unit rate** is a rate where the **second quantity is exactly 1**. The word *unit* means "one," so a unit rate tells you "how much for **just one**."

| Rate | Unit Rate | Read As |
|------|-----------|---------|
| $60$ miles in $2$ hours | $30$ miles per $1$ hour | $30$ miles per hour |
| \\$15 for $3$ books | \\$5 per $1$ book | $5$ dollars per book |
| $150$ words in $5$ minutes | $30$ words per $1$ minute | $30$ words per minute |

The little word **"per"** is your clue. It means "for each one." Miles **per** hour means miles for each **one** hour.
    `
      },
      {
        id: 'unit-rates-grade6-p1-finding',
        type: 'text' as const,
        content: `
## How to Find a Unit Rate

To turn any rate into a unit rate, **divide the first quantity by the second quantity**:

$$\\text{Unit Rate} = \\frac{\\text{First Quantity}}{\\text{Second Quantity}}$$

**Worked Example:** \\$12 for $4$ pounds of apples.

$$\\frac{12 \\text{ dollars}}{4 \\text{ pounds}} = 3 \\text{ dollars per pound}$$

So the apples cost **\\$3 per pound**. Dividing by the second number "shrinks" it down to $1$, which is exactly what a unit rate needs. 🍎
    `
      },
      {
        id: 'unit-rates-grade6-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you can spot a *unit* rate from a regular rate.
    `,
        exercise: {
          questions: [
            {
              question: 'Which of these is a **unit rate**?',
              options: [
                '$30$ miles per $1$ hour',
                '$60$ miles in $2$ hours',
                '$150$ words in $5$ minutes',
                '$\\$15$ for $3$ books'
              ],
              correctAnswer: 0,
              explanation: 'A unit rate compares a quantity to exactly $1$. "$30$ miles per $1$ hour" has a second quantity of $1$, so it is the unit rate.'
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
    topicSlug: 'unit-rates-grade6',
    sections: [
      {
        id: 'unit-rates-grade6-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and find unit rates one careful step at a time.

## Example 1: Speed → $240$ miles in $4$ hours

**Step 1 — Set up the rate** as a fraction (first quantity on top):

$$\\frac{240 \\text{ miles}}{4 \\text{ hours}}$$

**Step 2 — Divide** the top by the bottom to make the bottom equal $1$:

$$240 \\div 4 = 60$$

**Step 3 — Write the unit rate** with its label:

$$60 \\text{ miles per } 1 \\text{ hour} = 60 \\text{ mph}$$

The car travels **$60$ miles per hour**. 🚗
    `
      },
      {
        id: 'unit-rates-grade6-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: Price → \\$18 for $6$ smoothies

**Step 1 — Set up the rate:**

$$\\frac{18 \\text{ dollars}}{6 \\text{ smoothies}}$$

**Step 2 — Divide** the first quantity by the second:

$$18 \\div 6 = 3$$

**Step 3 — Write the unit rate:**

$$\\$3 \\text{ per } 1 \\text{ smoothie}$$

Each smoothie costs **\\$3**. Now if a friend wants $10$ smoothies, you can quickly predict the cost: $10 \\times 3 = 30$, i.e. \\$30. That is the real power of a unit rate! 🥤
    `
      },
      {
        id: 'unit-rates-grade6-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A printer makes $90$ pages in $3$ minutes. Find the unit rate step by step.

1) What number do you **divide by** to make the time equal $1$ minute? (Type a single number.)

2) Now compute $90 \\div 3$. What is the unit rate in **pages per minute**? (Type a single number.)

3) Using that unit rate, how many pages would the printer make in $1$ minute? (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '30', '30'],
          hint1: 'To get the time down to $1$ minute, divide both quantities by the number of minutes ($3$).',
          hint2: 'The unit rate is the first quantity divided by the second: $90 \\div 3$. A "per minute" rate already tells you the amount for exactly one minute.',
          explanation: 'Divide both quantities by $3$ so the time becomes $1$ minute. Then $90 \\div 3 = 30$, so the unit rate is $30$ pages per minute — which means $30$ pages in $1$ minute.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'unit-rates-grade6',
    sections: [
      {
        id: 'unit-rates-grade6-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Find each unit rate by dividing the first quantity by the second. Watch your labels!
    `,
        exercise: {
          questions: [
            {
              question: 'A runner jogs $12$ miles in $2$ hours. What is the unit rate?',
              options: [
                '$6$ miles per hour',
                '$24$ miles per hour',
                '$10$ miles per hour',
                '$2$ miles per hour'
              ],
              correctAnswer: 0,
              explanation: 'Divide the first quantity by the second: $12 \\div 2 = 6$, so the runner goes $6$ miles per hour.'
            },
            {
              question: 'A store sells $5$ notebooks for $\\$10$. What is the unit price (cost per notebook)?',
              options: [
                '$\\$2$ per notebook',
                '$\\$5$ per notebook',
                '$\\$50$ per notebook',
                '$\\$10$ per notebook'
              ],
              correctAnswer: 0,
              explanation: 'The unit price is dollars divided by notebooks: $10 \\div 5 = 2$, so each notebook costs $\\$2$.'
            }
          ]
        }
      },
      {
        id: 'unit-rates-grade6-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Unit Rates** 🔍

A car uses $24$ gallons of gas to travel $600$ miles. Complete the two facts about its unit rates.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Miles per gallon ($600 \\div 24$):',
              options: ['$25$ miles per gallon', '$24$ miles per gallon', '$30$ miles per gallon', '$60$ miles per gallon']
            },
            {
              label: 'If gas costs $\\$36$ for $12$ gallons, the price per gallon is:',
              options: ['$\\$3$ per gallon', '$\\$4$ per gallon', '$\\$12$ per gallon', '$\\$2$ per gallon']
            }
          ],
          correctAnswers: ['$25$ miles per gallon', '$\\$3$ per gallon'],
          hint1: 'For each unit rate, divide the first quantity by the second: $600 \\div 24$ for miles per gallon, and $36 \\div 12$ for dollars per gallon.',
          explanation: 'Miles per gallon: $600 \\div 24 = 25$. Price per gallon: $36 \\div 12 = \\$3$. Dividing the first quantity by the second always gives the unit rate.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'unit-rates-grade6',
    sections: [
      {
        id: 'unit-rates-grade6-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Unit rates are everywhere in real life. The most powerful use is **comparing prices** to find the better deal — this is called **comparison shopping**.

## Which Is the Better Buy? 🛒

A small bag of pretzels is \\$4 for $8$ ounces. A large bag is \\$9 for $18$ ounces. Which is cheaper *per ounce*?

Find the **unit price** (dollars per ounce) for each:

- **Small bag:** $\\dfrac{4}{8} = 0.50$, i.e. \\$0.50 per ounce
- **Large bag:** $\\dfrac{9}{18} = 0.50$, i.e. \\$0.50 per ounce

Surprise — they cost the **same** per ounce! Without unit rates, the large bag *looks* more expensive because \\$9 > \\$4. Unit rates reveal the truth. 🥨

Unit rates also help you **make predictions** and **plan budgets**: once you know the cost for $1$ item, you can multiply to find the cost for *any* number of items.
    `
      },
      {
        id: 'unit-rates-grade6-p4-input',
        type: 'input-boxes' as const,
        content: `
**Better Buy Practice** 🧮

Juice comes in two sizes. Brand A is \\$6 for $3$ liters. Brand B is \\$10 for $5$ liters.

1) What is Brand A's unit price in **dollars per liter** ($6 \\div 3$)? (Type a single number.)

2) What is Brand B's unit price in **dollars per liter** ($10 \\div 5$)? (Type a single number.)

3) Which brand is the better buy? Type **A**, **B**, or **same**.
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', 'same'],
          hint1: 'Unit price means dollars divided by liters. Do $6 \\div 3$ for Brand A and $10 \\div 5$ for Brand B.',
          hint2: 'Compare the two unit prices. The smaller price per liter is the better buy — if they match, neither one wins.',
          explanation: 'Brand A: $6 \\div 3 = \\$2$ per liter. Brand B: $10 \\div 5 = \\$2$ per liter. The unit prices are equal, so the answer is **same** — both are equally good deals.'
        }
      },
      {
        id: 'unit-rates-grade6-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Prediction Problem** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A bakery sells $4$ muffins for $\\$8$. At the same unit rate, how much would $7$ muffins cost?',
              options: ['$\\$14$', '$\\$28$', '$\\$11$', '$\\$56$'],
              correctAnswer: 0,
              explanation: 'First find the unit rate: $8 \\div 4 = \\$2$ per muffin. Then multiply: $7 \\times \\$2 = \\$14$.'
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
    topicSlug: 'unit-rates-grade6',
    sections: [
      {
        id: 'unit-rates-grade6-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything about unit rates in one place.

## Quick Summary Table

| Idea | What It Means | Example |
|------|---------------|---------|
| **Rate** | A ratio of two *different* units | $60$ miles in $2$ hours |
| **Unit Rate** | A rate where the second quantity is $1$ | $30$ miles per $1$ hour |
| **Finding it** | Divide first quantity by second | $\\frac{60}{2} = 30$ |
| **Unit Price** | Dollars per $1$ item | $\\frac{12}{4} = 3$, i.e. \\$3 per item |
| **"per"** | Means "for each one" | miles **per** hour |

**Remember:**
- A unit rate always has a **denominator of $1$**.
- To find a unit rate, **divide the first quantity by the second**.
- Unit rates help you **compare prices**, **calculate speed**, **make predictions**, and **plan budgets**.
- The **lower unit price** is the **better buy**.

Now try these mixed challenge problems! 🎯
    `
      },
      {
        id: 'unit-rates-grade6-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix every idea together. Take your time and divide carefully!
    `,
        exercise: {
          questions: [
            {
              question: 'Tyler types $200$ words in $4$ minutes. Maria types $150$ words in $5$ minutes. Who has the **faster** typing unit rate?',
              options: [
                'Tyler, at $50$ words per minute',
                'Maria, at $30$ words per minute',
                'They type at the same rate',
                'Tyler, at $40$ words per minute'
              ],
              correctAnswer: 0,
              explanation: 'Tyler: $200 \\div 4 = 50$ words per minute. Maria: $150 \\div 5 = 30$ words per minute. Since $50 > 30$, Tyler is faster.'
            },
            {
              question: 'A $20$-ounce bottle of shampoo costs $\\$5$, and a $30$-ounce bottle costs $\\$6$. Which is the better buy (lower price per ounce)?',
              options: [
                'The $30$-ounce bottle, at $\\$0.20$ per ounce',
                'The $20$-ounce bottle, at $\\$0.25$ per ounce',
                'The $30$-ounce bottle, at $\\$0.25$ per ounce',
                'They cost the same per ounce'
              ],
              correctAnswer: 0,
              explanation: '$20$-ounce: $5 \\div 20 = \\$0.25$ per ounce. $30$-ounce: $6 \\div 30 = \\$0.20$ per ounce. Since $\\$0.20 < \\$0.25$, the $30$-ounce bottle is the better buy.'
            }
          ]
        }
      }
    ]
  }
]
