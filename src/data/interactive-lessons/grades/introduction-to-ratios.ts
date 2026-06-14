import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'introduction-to-ratios',
    sections: [
      {
        id: 'introduction-to-ratios-p1-intro',
        type: 'text' as const,
        content: `
# 🍎 Introduction to Ratios

**Part 1 of 5 — Concept Introduction**

A **ratio** compares two quantities by division. It tells you how much of one thing there is **compared to** another thing.

Imagine a fruit bowl with **3 apples** and **5 oranges**. A ratio lets us describe that relationship with numbers:

> "There are **3** apples for every **5** oranges."

Ratios are everywhere — mixing paint, following recipes, comparing team scores, even sharing snacks fairly. Once you can read and write a ratio, you can compare almost anything!

## Three Ways to Write a Ratio

The ratio of apples to oranges (3 to 5) can be written in **three equal ways**:

| Form | How it looks | How you say it |
|------|--------------|----------------|
| Using "to" | 3 to 5 | "three to five" |
| Using a colon | $3:5$ | "three to five" |
| As a fraction | $\\frac{3}{5}$ | "three to five" |

All three mean exactly the same thing. The **order matters**: apples come first, so the apple number is written first in all three forms.
    `
      },
      {
        id: 'introduction-to-ratios-p1-order',
        type: 'text' as const,
        content: `
## ⚠️ Order Matters!

A ratio is like a sentence — the order of the words changes the meaning.

- The ratio of **apples to oranges** is $3:5$.
- The ratio of **oranges to apples** is $5:3$.

These are **not** the same! Always match the order of your numbers to the order named in the problem.

## Part-to-Part vs Part-to-Whole

Ratios can compare two parts, or a part to the whole group.

- **Part-to-Part** compares one part to another part.
  - Example: 3 boys to 5 girls $\\to 3:5$
- **Part-to-Whole** compares one part to the **total**.
  - Example: 3 boys out of 8 total students $\\to 3:8$

To find the **whole**, add the parts together: $3 + 5 = 8$ students in all.
    `
      },
      {
        id: 'introduction-to-ratios-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

A box has **4 red** marbles and **7 blue** marbles.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the ratio of **red marbles to blue marbles**?',
              options: ['$7:4$', '$4:7$', '$4:11$', '$11:4$'],
              correctAnswer: 1,
              explanation: 'Red is named first, so the red number (4) goes first: $4:7$. Order matters in a ratio!'
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
    topicSlug: 'introduction-to-ratios',
    sections: [
      {
        id: 'introduction-to-ratios-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Just like fractions, ratios should be written in **simplest form**. To simplify, divide **both** numbers by the same number (their greatest common factor).

## Example 1: Simplify $6:8$

- Both $6$ and $8$ can be divided by $2$.
- $6 \\div 2 = 3$ and $8 \\div 2 = 4$.

$$6:8 = 3:4$$

So $6:8$ in simplest form is $3:4$. ✅

## Example 2: Write and Simplify a Ratio

A classroom has **10 boys** and **15 girls**. Write the ratio of boys to girls in simplest form.

**Step 1 — Write it:** boys first, so $10:15$.

**Step 2 — Find a common factor:** Both $10$ and $15$ divide by $5$.

**Step 3 — Divide both parts:** $10 \\div 5 = 2$ and $15 \\div 5 = 3$.

$$10:15 = 2:3$$

The ratio of boys to girls is $2:3$. 🎉
    `
      },
      {
        id: 'introduction-to-ratios-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A bag has **8 green** counters and **12 yellow** counters. Simplify the ratio of green to yellow step by step.

1) Write the ratio of green to yellow **before** simplifying, using a colon. (Type it like $8:12$.)

2) Both numbers divide by the same factor. What is the largest number that divides both $8$ and $12$? (Type a single number.)

3) Write the ratio in **simplest form**, using a colon. (Type it like $2:3$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['8:12', '4', '2:3'],
          hint1: 'Green is named first, so the green number comes first. Then list the factors of 8 (1, 2, 4, 8) and of 12 (1, 2, 3, 4, 6, 12).',
          hint2: 'The greatest common factor of 8 and 12 is 4. Divide BOTH numbers by 4 to simplify.',
          explanation: 'The ratio is $8:12$. The greatest common factor of 8 and 12 is $4$. Dividing both parts by 4 gives $8 \\div 4 = 2$ and $12 \\div 4 = 3$, so the simplest form is $2:3$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'introduction-to-ratios',
    sections: [
      {
        id: 'introduction-to-ratios-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Read each problem carefully and watch the **order** of the numbers. Simplify when you can.
    `,
        exercise: {
          questions: [
            {
              question: 'A team won **5 games** and lost **3 games**. What is the ratio of **wins to losses**?',
              options: ['$3:5$', '$5:3$', '$5:8$', '$8:5$'],
              correctAnswer: 1,
              explanation: 'Wins are named first, so the win number (5) goes first: $5:3$. This is a part-to-part ratio.'
            },
            {
              question: 'Simplify the ratio $9:12$ to its simplest form.',
              options: ['$3:4$', '$3:5$', '$9:12$', '$1:3$'],
              correctAnswer: 0,
              explanation: 'Both 9 and 12 divide by 3: $9 \\div 3 = 3$ and $12 \\div 3 = 4$, so $9:12 = 3:4$.'
            }
          ]
        }
      },
      {
        id: 'introduction-to-ratios-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Part-to-Part or Part-to-Whole?** 🔍

A garden has **4 roses** and **6 tulips**, for **10 flowers** in all. Choose the correct ratio for each description.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'The ratio of roses to tulips (part-to-part) is',
              options: ['$4:6$', '$4:10$', '$6:4$', '$10:4$']
            },
            {
              label: 'The ratio of roses to all flowers (part-to-whole) is',
              options: ['$4:6$', '$4:10$', '$6:10$', '$10:4$']
            }
          ],
          correctAnswers: ['$4:6$', '$4:10$'],
          hint1: 'Part-to-part compares one part to another part (roses to tulips). Part-to-whole compares a part to the total of 10 flowers.',
          explanation: 'Roses to tulips compares two parts: $4:6$. Roses to all flowers compares a part to the whole total of 10: $4:10$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'introduction-to-ratios',
    sections: [
      {
        id: 'introduction-to-ratios-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Ratios that mean the same comparison are called **equivalent ratios**. You make them by **multiplying or dividing both parts by the same number**.

$$2:3 = 4:6 = 6:9 = 8:12$$

Each pair was found by multiplying both numbers: $2 \\times 2 = 4$ and $3 \\times 2 = 6$, and so on.

## Lemonade Recipe 🍋

A lemonade recipe uses **2 cups of lemon juice** for every **3 cups of water**, a ratio of $2:3$.

If you want to make a bigger batch using **6 cups of water**, how much lemon juice do you need?

- Water went from $3$ to $6$ — that's $\\times 2$.
- So lemon juice must also be $\\times 2$: $2 \\times 2 = 4$ cups.

The bigger batch uses $4:6$, which is **equivalent** to $2:3$. The taste stays the same! 🎉
    `
      },
      {
        id: 'introduction-to-ratios-p4-input',
        type: 'input-boxes' as const,
        content: `
**Recipe Time** 🧮

A trail-mix recipe uses **3 scoops of nuts** for every **4 scoops of raisins**, a ratio of $3:4$. You want a bigger batch with **12 scoops of raisins**.

1) The raisins went from $4$ scoops to $12$ scoops. What number did you multiply by? (Type a single number.)

2) Multiply the nuts by that same number. How many scoops of nuts do you need? (Type a single number.)

3) Write the new equivalent ratio of nuts to raisins, using a colon. (Type it like $9:12$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '9', '9:12'],
          hint1: 'To find the multiplier, ask: 4 times what equals 12? That is $12 \\div 4 = 3$.',
          hint2: 'Multiply BOTH parts by 3 to keep the ratio equivalent: nuts become $3 \\times 3 = 9$, raisins become $4 \\times 3 = 12$.',
          explanation: 'Raisins went from 4 to 12, so the multiplier is $12 \\div 4 = 3$. Multiply the nuts by 3 as well: $3 \\times 3 = 9$ scoops. The equivalent ratio is $9:12$.'
        }
      },
      {
        id: 'introduction-to-ratios-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Apply It** 🎯

A paint mix uses **1 part blue** to **4 parts white**, a ratio of $1:4$.
    `,
        exercise: {
          questions: [
            {
              question: 'To make a bigger batch with **3 parts blue**, how many parts white are needed to keep the same color?',
              options: ['$4$ parts white', '$7$ parts white', '$12$ parts white', '$3$ parts white'],
              correctAnswer: 2,
              explanation: 'Blue went from 1 to 3, that is $\\times 3$. Multiply white by 3 too: $4 \\times 3 = 12$ parts white, giving the equivalent ratio $3:12$.'
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
    topicSlug: 'introduction-to-ratios',
    sections: [
      {
        id: 'introduction-to-ratios-p5-text',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You've learned a lot about ratios! Here is a quick summary of the big ideas.

| Idea | What it means | Example |
|------|---------------|---------|
| Ratio | Compares two quantities | 3 apples to 5 oranges |
| Three forms | "to", colon, fraction | 3 to 5, $3:5$, $\\frac{3}{5}$ |
| Order matters | First named comes first | apples:oranges $= 3:5$ |
| Simplify | Divide both parts by a common factor | $6:8 = 3:4$ |
| Part-to-part | One part vs another part | boys:girls $= 3:5$ |
| Part-to-whole | One part vs the total | boys:total $= 3:8$ |
| Equivalent | Multiply/divide both parts equally | $2:3 = 4:6$ |

**Remember:** A ratio compares amounts, the **order** must match the words, and the simplest form keeps the numbers as small as whole numbers can be. Now try the final challenge! 💪
    `
      },
      {
        id: 'introduction-to-ratios-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎯

A class has **12 girls** and **8 boys**. Mix together everything you've learned.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the ratio of **boys to the total number of students**, in simplest form? (This is part-to-whole.)',
              options: ['$8:12$', '$8:20$', '$2:5$', '$2:3$'],
              correctAnswer: 2,
              explanation: 'The total is $12 + 8 = 20$ students. Boys to total is $8:20$. Both divide by 4: $8 \\div 4 = 2$ and $20 \\div 4 = 5$, so the simplest form is $2:5$.'
            },
            {
              question: 'Which ratio is **equivalent** to $3:4$?',
              options: ['$6:7$', '$9:12$', '$4:3$', '$3:8$'],
              correctAnswer: 1,
              explanation: 'Multiply both parts of $3:4$ by 3: $3 \\times 3 = 9$ and $4 \\times 3 = 12$, giving $9:12$, which is equivalent to $3:4$.'
            }
          ]
        }
      }
    ]
  }
]
