import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals-grade5',
    sections: [
      {
        id: 'adding-subtracting-decimals-g5-p1-intro',
        type: 'text' as const,
        content: `
# 🔢 Adding and Subtracting Decimals

**Part 1 of 5 — Concept Introduction**

You already know how to add and subtract whole numbers. Adding and subtracting **decimals** works almost exactly the same way — you just have to be careful about one thing.

## The Golden Rule

> **Always line up the decimal points!** 🎯

When the decimal points are stacked in a straight vertical line, every digit lands in the correct place: tenths under tenths, ones under ones, and so on. If the points are lined up, the rest is just normal adding or subtracting.

Look how the points form a perfect vertical line:

$$\\begin{array}{r} 3.45 \\\\ + 12.80 \\\\ \\hline 16.25 \\end{array}$$

The decimal point in the answer drops **straight down** into the same column.
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p1-placevalue',
        type: 'text' as const,
        content: `
## Why Lining Up Matters

Each spot in a decimal number has a **place value**. You can only add or subtract digits that share the same place value — tenths with tenths, hundredths with hundredths.

| Place | Tens | Ones | • | Tenths | Hundredths |
|-------|------|------|---|--------|-----------|
| $12.80$ | 1 | 2 | • | 8 | 0 |
| $3.45$  |   | 3 | • | 4 | 5 |

See how the $8$ and the $4$ (the tenths) line up in the same column? That only happens when the decimal points are stacked.

### The Zero Trick 🪄

Numbers can have a different number of decimal places. To make them match, **add zeros as placeholders** on the right side.

- $12.8$ becomes $12.80$
- $7.3$ becomes $7.30$

Adding a zero at the end of a decimal does **not** change its value — $0.5$ and $0.50$ are exactly the same amount. But the extra zero gives every column a digit, which makes lining up easy.
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's add $3.45 + 12.8$ together.

**Step 1 — Line up the decimal points** and add a placeholder zero so both numbers have two decimal places:

$$\\begin{array}{r} 3.45 \\\\ + 12.80 \\\\ \\hline \\end{array}$$

**Step 2 — Add each column** from right to left, just like whole numbers. Keep the decimal point in line:

$$\\begin{array}{r} 3.45 \\\\ + 12.80 \\\\ \\hline 16.25 \\end{array}$$

So $3.45 + 12.8 = 16.25$. ✅

The decimal point in the answer comes **straight down** from the points above it.
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand the Golden Rule.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the FIRST thing you should do before adding or subtracting two decimals?',
              options: [
                'Line up the decimal points',
                'Add the biggest digits first',
                'Remove all the decimal points',
                'Round both numbers to whole numbers'
              ],
              correctAnswer: 0,
              explanation: 'The Golden Rule is to always line up the decimal points first, so that each digit lands in its correct place value column.'
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
    topicSlug: 'adding-subtracting-decimals-grade5',
    sections: [
      {
        id: 'adding-subtracting-decimals-g5-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and walk through one addition and one subtraction, step by step.

## Example 1: Adding — $5.6 + 2.74$

**Step 1 — Line up the points** and add a placeholder zero to $5.6$ so it becomes $5.60$:

$$\\begin{array}{r} 5.60 \\\\ + 2.74 \\\\ \\hline \\end{array}$$

**Step 2 — Add right to left.** Hundredths: $0 + 4 = 4$. Tenths: $6 + 7 = 13$, so write $3$ and carry $1$. Ones: $5 + 2 + 1 = 8$.

$$\\begin{array}{r} 5.60 \\\\ + 2.74 \\\\ \\hline 8.34 \\end{array}$$

So $5.6 + 2.74 = 8.34$. ✅

## Example 2: Subtracting — $15.6 - 7.38$

**Step 1 — Line up the points** and add a placeholder zero to $15.6$ so it becomes $15.60$:

$$\\begin{array}{r} 15.60 \\\\ - 7.38 \\\\ \\hline \\end{array}$$

**Step 2 — Subtract right to left, borrowing when needed.** Hundredths: $0 - 8$ needs a borrow, so $10 - 8 = 2$. Tenths becomes $5$, then $5 - 3 = 2$. Ones: $5 - 7$ needs a borrow → $15 - 7 = 8$. Tens: $0$.

$$\\begin{array}{r} 15.60 \\\\ - 7.38 \\\\ \\hline 8.22 \\end{array}$$

So $15.6 - 7.38 = 8.22$. ✅
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Add $4.7 + 3.25$ step by step. Type each answer in the box.

1) Rewrite $4.7$ with a placeholder zero so it has two decimal places. (Type it like $4.70$.)

2) Add the tenths and ones first, then finish. What is $4.7 + 3.25$? (Type it like $7.95$.)

3) Now subtract: what is $6.5 - 1.28$? (Type it like $5.22$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['4.70', '7.95', '5.22'],
          hint1: 'Add a zero on the right of $4.7$ to make $4.70$ — it has the same value but now matches the place values of $3.25$.',
          hint2: 'Line up the decimal points, then add or subtract column by column from right to left, borrowing or carrying when needed.',
          explanation: 'Write $4.7$ as $4.70$. Then $4.70 + 3.25 = 7.95$. For the subtraction, write $6.5$ as $6.50$, so $6.50 - 1.28 = 5.22$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals-grade5',
    sections: [
      {
        id: 'adding-subtracting-decimals-g5-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Line up the decimal points, use placeholder zeros, and work each column carefully.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $6.3 + 2.45$?',
              options: ['$8.75$', '$8.48$', '$2.68$', '$30.75$'],
              correctAnswer: 0,
              explanation: 'Write $6.3$ as $6.30$. Then $6.30 + 2.45 = 8.75$.'
            },
            {
              question: 'What is $9.5 - 3.27$?',
              options: ['$6.23$', '$6.27$', '$6.33$', '$12.77$'],
              correctAnswer: 0,
              explanation: 'Write $9.5$ as $9.50$. Then $9.50 - 3.27 = 6.23$.'
            }
          ]
        }
      },
      {
        id: 'adding-subtracting-decimals-g5-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the two steps for solving $8.4 + 5.16$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'After adding a placeholder zero, $8.4$ becomes',
              options: ['$8.40$', '$8.04$', '$0.84$', '$84.0$']
            },
            {
              label: 'So $8.40 + 5.16$ equals',
              options: ['$13.56$', '$13.20$', '$3.24$', '$1.356$']
            }
          ],
          correctAnswers: ['$8.40$', '$13.56$'],
          hint1: 'Add one zero to the right of $8.4$ to match the two decimal places in $5.16$, then add column by column.',
          explanation: 'Write $8.4$ as $8.40$. Lining up the points and adding gives $8.40 + 5.16 = 13.56$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals-grade5',
    sections: [
      {
        id: 'adding-subtracting-decimals-g5-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Decimals show up in real life all the time — especially with **money**! Dollars and cents are decimals, where the digits after the point are cents.

## Money Example 💵

You have \\$20.00 and you spend \\$12.75. **How much money is left?**

This is a subtraction problem. Line up the points (the dollar amounts already have two decimal places):

$$\\begin{array}{r} 20.00 \\\\ - 12.75 \\\\ \\hline 7.25 \\end{array}$$

You have \\$7.25 left. ✅

## How to Tackle Word Problems

1. **Read carefully** to decide whether to **add** (combining or total) or **subtract** (difference, change, or "how much left").
2. **Line up the decimal points** and add placeholder zeros.
3. **Check your answer** — does it make sense? If you started with \\$20 and spent some, the answer should be *less* than \\$20.
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

At the snack stand, Ava buys a juice for \\$1.50 and a granola bar for \\$2.35.

1) What is the **total cost** of both items? Add them. (Type it like $3.85$.)

2) Ava pays with a \\$5.00 bill. How much **change** does she get back? (Type it like $1.15$.)

3) Later she finds \\$0.40 in her pocket and adds it to her change. How much money does she have now? (Type it like $1.55$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3.85', '1.15', '1.55'],
          hint1: 'To find the total, add the two prices. To find change, subtract the total from the amount paid.',
          hint2: 'Line up the decimal points. $1.50 + 2.35 = 3.85$, then $5.00 - 3.85 = 1.15$, then $1.15 + 0.40 = 1.55$.',
          explanation: 'Total: $1.50 + 2.35 = 3.85$. Change: $5.00 - 3.85 = 1.15$. After finding more money: $1.15 + 0.40 = 1.55$.'
        }
      },
      {
        id: 'adding-subtracting-decimals-g5-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A runner jogs $3.6$ km in the morning and $2.85$ km in the evening. How many kilometers did she run in all?',
              options: ['$6.45$ km', '$6.21$ km', '$0.75$ km', '$64.5$ km'],
              correctAnswer: 0,
              explanation: '"In all" means add. Write $3.6$ as $3.60$, then $3.60 + 2.85 = 6.45$ km.'
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
    topicSlug: 'adding-subtracting-decimals-grade5',
    sections: [
      {
        id: 'adding-subtracting-decimals-g5-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything you learned, all in one place.

## Quick Summary Table

| Step | What You Do | Why It Helps |
|------|-------------|--------------|
| **1. Line up** | Stack the decimal points in a straight line | Each digit lands in its correct place value |
| **2. Add zeros** | Fill in placeholder zeros on the right | Every column gets a digit to work with |
| **3. Add or subtract** | Work column by column, right to left | Carry when adding, borrow when subtracting |
| **4. Drop the point** | Bring the decimal point straight down | Keeps the answer in the right place |
| **5. Check** | Ask "does this make sense?" | Catches mistakes before you finish |

**Remember:**
- Adding a zero to the **end** of a decimal does not change its value: $0.5 = 0.50$.
- **Money** is just decimals — dollars and cents.
- For word problems, **read carefully** to decide whether to add or subtract.

Now try these mixed challenge problems!
    `
      },
      {
        id: 'adding-subtracting-decimals-g5-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix everything together. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'What is $14.07 + 3.9$?',
              options: ['$17.97$', '$14.46$', '$53.07$', '$17.07$'],
              correctAnswer: 0,
              explanation: 'Write $3.9$ as $3.90$. Lining up the points, $14.07 + 3.90 = 17.97$.'
            },
            {
              question: 'You have $\\$30.00$ and buy a book for $\\$18.49$. How much money is left?',
              options: ['$\\$11.51$', '$\\$12.51$', '$\\$11.61$', '$\\$48.49$'],
              correctAnswer: 0,
              explanation: 'Subtract: line up the points and compute $30.00 - 18.49 = 11.51$, so $\\$11.51$ is left.'
            }
          ]
        }
      }
    ]
  }
]
