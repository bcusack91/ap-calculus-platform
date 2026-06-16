import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "The Big Idea"
  // ============================================================
  {
    topicSlug: 'multiplying-decimals',
    sections: [
      {
        id: 'p1-why-multiply',
        type: 'text',
        content: `## Why Do We Multiply Decimals? 🤔

You already multiply whole numbers. But the real world is full of **decimals** — numbers with a decimal point. We multiply them all the time:

- **Money:** Buying 4 snacks that each cost \\$2.50 → $4 \\times$ \\$2.50
- **Measuring:** Cutting $3.5$ yards of fabric two times over → $2 \\times 3.5$
- **Cooking:** Making $1.5$ times a recipe

The good news? If you can multiply whole numbers, you are **almost** done already. Multiplying decimals is just whole-number multiplication with **one extra step** at the end: placing the decimal point.`,
      },
      {
        id: 'p1-the-rule',
        type: 'text',
        content: `## The Basic Rule ⭐

Here is the whole secret in three steps:

1. **Ignore the decimal points** and multiply like plain whole numbers.
2. **Count** the total decimal places in **both** numbers you multiplied.
3. **Place** that many decimal places in your answer, counting from the right.

Let's see it with $3.2 \\times 1.5$.

**Step 1 — Multiply like whole numbers:**
$$32 \\times 15 = 480$$

**Step 2 — Count the decimal places:**

- $3.2$ has **1** decimal place
- $1.5$ has **1** decimal place
- Total: $1 + 1 = 2$ decimal places

**Step 3 — Place the decimal point.** Start at the right of $480$ and hop **2** places to the left:

$$480 \\rightarrow 4.80 = 4.8$$

So $3.2 \\times 1.5 = 4.8$. ✓`,
      },
      {
        id: 'p1-count-places',
        type: 'text',
        content: `## Counting Decimal Places 🔢

The trickiest part is **counting decimal places**, so let's practice spotting them. A "decimal place" is just a digit **to the right** of the decimal point.

| Number  | Digits after the point | Decimal places |
|---------|:----------------------:|:--------------:|
| $4.5$   | 5                      | 1              |
| $0.3$   | 3                      | 1              |
| $2.75$  | 7, 5                   | 2              |
| $1.234$ | 2, 3, 4                | 3              |
| $6$     | (none)                 | 0              |

To find the total for a multiplication problem, **add** the decimal places of the two numbers together. That total is exactly how many decimal places belong in your answer.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the main idea is clear before we move on.`,
        exercise: {
          questions: [
            {
              question:
                'When you multiply $4.6 \\times 2.3$, how many decimal places should your final answer have?',
              options: ['0 decimal places', '1 decimal place', '2 decimal places', '4 decimal places'],
              correctAnswer: 2,
              explanation:
                '$4.6$ has 1 decimal place and $2.3$ has 1 decimal place. Add them: $1 + 1 = 2$, so the answer needs 2 decimal places.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Worked Examples"
  // ============================================================
  {
    topicSlug: 'multiplying-decimals',
    sections: [
      {
        id: 'p2-whole-number-example',
        type: 'text',
        content: `## Example 1: Decimal × Whole Number ✍️

Let's work through $4.56 \\times 3$ together, step by step.

**Step 1 — Multiply like whole numbers.** Drop the decimal point for now:
$$456 \\times 3 = 1368$$

**Step 2 — Count the decimal places:**

- $4.56$ has **2** decimal places
- $3$ has **0** decimal places
- Total: $2 + 0 = 2$ decimal places

**Step 3 — Place the decimal point.** Hop **2** places left from the right end of $1368$:
$$1368 \\rightarrow 13.68$$

So $4.56 \\times 3 = 13.68$. ✓

**Does it make sense?** $4.56$ is about $5$, and $5 \\times 3 = 15$. Our answer $13.68$ is close to $15$, so it looks right!`,
      },
      {
        id: 'p2-less-than-one-example',
        type: 'text',
        content: `## Example 2: Decimals Less Than 1 ✍️

Now try $0.3 \\times 0.4$. These are both **less than 1**, so watch what happens.

**Step 1 — Multiply like whole numbers:**
$$3 \\times 4 = 12$$

**Step 2 — Count the decimal places:**

- $0.3$ has **1** decimal place
- $0.4$ has **1** decimal place
- Total: $1 + 1 = 2$ decimal places

**Step 3 — Place the decimal point.** We need 2 places, but $12$ only has 2 digits. We add a **zero in front** to make room:
$$12 \\rightarrow 0.12$$

So $0.3 \\times 0.4 = 0.12$. ✓

> **Surprise!** When you multiply two numbers that are each **less than 1**, the answer is **smaller** than both of them. $0.12$ is smaller than both $0.3$ and $0.4$.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✏️

Solve each one using the three steps. Type just the number (for example, \`4.8\`).

1. $2.4 \\times 2 = ?$
2. $1.5 \\times 1.2 = ?$
3. $0.2 \\times 0.6 = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4.8', '1.8', '0.12'],
          hint1:
            'First multiply as whole numbers, then count the total decimal places in both factors.',
          hint2:
            'For #3: $2 \\times 6 = 12$, and there are $1 + 1 = 2$ decimal places, so the answer is $0.12$.',
          explanation:
            '1) $24 \\times 2 = 48$ with 1 decimal place → $4.8$. 2) $15 \\times 12 = 180$ with 2 decimal places → $1.80 = 1.8$. 3) $2 \\times 6 = 12$ with 2 decimal places → $0.12$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'multiplying-decimals',
    sections: [
      {
        id: 'p3-multiple-choice',
        type: 'multiple-choice',
        content: `## Practice Problems 🧠

Work each one carefully. Remember: multiply, count places, then place the point.`,
        exercise: {
          questions: [
            {
              question: 'What is $3.45 \\times 10$?',
              options: ['$0.345$', '$3.45$', '$34.5$', '$345$'],
              correctAnswer: 2,
              explanation:
                'Multiplying by $10$ moves the decimal point **1 place to the right**: $3.45 \\rightarrow 34.5$.',
            },
            {
              question: 'What is $0.5 \\times 0.8$?',
              options: ['$0.4$', '$4.0$', '$0.04$', '$40$'],
              correctAnswer: 0,
              explanation:
                '$5 \\times 8 = 40$. There are $1 + 1 = 2$ decimal places, so $40 \\rightarrow 0.40 = 0.4$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Choose the Correct Answer 🎯

Pick the right product from each menu.`,
        exercise: {
          dropdowns: [
            { label: '$6.2 \\times 3 = $', options: ['$1.86$', '$18.6$', '$186$'] },
            { label: '$2.45 \\times 100 = $', options: ['$24.5$', '$245$', '$2450$'] },
          ],
          correctAnswers: ['$18.6$', '$245$'],
          hint1:
            'For the first, multiply $62 \\times 3$ then place 1 decimal place. For the second, multiplying by $100$ moves the point 2 places right.',
          explanation:
            '$62 \\times 3 = 186$ with 1 decimal place → $18.6$. Multiplying $2.45$ by $100$ moves the decimal 2 places right → $245$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Real-World Problems"
  // ============================================================
  {
    topicSlug: 'multiplying-decimals',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Decimals in Real Life 🛒

Most decimal multiplication you'll ever do is about **money** and **measurement**. The steps are exactly the same — just remember the answer is in dollars or units.

**Example:** You buy $3$ notebooks that cost \\$2.75 each. How much do you pay in total?

**Solve $3 \\times$ \\$2.75:**

- **Step 1:** $3 \\times 275 = 825$
- **Step 2:** $2.75$ has $2$ decimal places, so the total is $2$ places
- **Step 3:** $825 \\rightarrow$ \\$8.25

**Check with estimation:** \\$2.75 is about \\$3, and $3 \\times 3 = 9$, i.e. \\$9. Our answer \\$8.25 is close to \\$9, so it makes sense! ✓

> **Tip:** Always **estimate first**. If your real answer is far from your estimate, you probably put the decimal point in the wrong spot.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Solve the Word Problems ✏️

Type your answer as a plain number (for money, just the number — for example, \`6.25\`).

1. A bottle of juice costs \\$1.25. How much do **4** bottles cost? (Find $4 \\times 1.25$.)
2. A ribbon is $2.5$ meters long. You need **3** of them. How many meters total? (Find $3 \\times 2.5$.)
3. One bag of apples weighs $1.5$ kg. How much do **6** bags weigh? (Find $6 \\times 1.5$.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7.5', '9'],
          hint1:
            'Multiply like whole numbers first, then place the decimal using the total number of decimal places.',
          hint2:
            'For #1: $4 \\times 125 = 500$, and $1.25$ has 2 decimal places, so $500 \\rightarrow 5.00 = 5$.',
          explanation:
            '1) $4 \\times 1.25 = \\$5.00 = 5$. 2) $3 \\times 2.5 = 7.5$ meters. 3) $6 \\times 1.5 = 9$ kg.',
        },
      },
      {
        id: 'p4-multiple-choice',
        type: 'multiple-choice',
        content: `## One More Word Problem 🍕`,
        exercise: {
          questions: [
            {
              question:
                'A slice of pizza costs $\\$1.50$. If you buy $5$ slices, how much do you pay in total?',
              options: ['$\\$6.50$', '$\\$7.50$', '$\\$0.75$', '$\\$75.00$'],
              correctAnswer: 1,
              explanation:
                '$5 \\times 150 = 750$, and $1.50$ has 2 decimal places, so $750 \\rightarrow \\$7.50$. Estimate: $5 \\times \\$1.50$ is about $5 \\times \\$2 = \\$10$, close to $\\$7.50$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Challenge"
  // ============================================================
  {
    topicSlug: 'multiplying-decimals',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Putting It All Together 🎓

You now know every kind of decimal multiplication. Here is a quick summary table to keep handy:

| Type of problem        | Quick strategy                                   | Example                          |
|------------------------|--------------------------------------------------|----------------------------------|
| Decimal × whole number | Multiply, then place the decimal places          | $4.56 \\times 3 = 13.68$          |
| Decimal × decimal      | Add the decimal places of both numbers           | $3.2 \\times 1.5 = 4.8$           |
| × $10$, $100$, $1000$  | Move the point **right** 1, 2, or 3 places       | $3.45 \\times 100 = 345$          |
| Both less than 1       | Answer is **smaller** than both numbers          | $0.3 \\times 0.4 = 0.12$          |

**Remember the golden rule:** multiply like whole numbers, then count the **total** decimal places in both factors and place that many in your answer. And always **estimate** to check!`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

These mix everything together. Take your time!`,
        exercise: {
          questions: [
            {
              question: 'What is $7.2 \\times 0.5$?',
              options: ['$36$', '$3.6$', '$0.36$', '$3.5$'],
              correctAnswer: 1,
              explanation:
                '$72 \\times 5 = 360$. There are $1 + 1 = 2$ decimal places, so $360 \\rightarrow 3.60 = 3.6$.',
            },
            {
              question:
                'Without multiplying it all out, about how big is $4.8 \\times 3.2$? Use estimation.',
              options: [
                'About $1.5$',
                'About $15$',
                'About $150$',
                'About $0.15$',
              ],
              correctAnswer: 1,
              explanation:
                'Round to $5 \\times 3 = 15$, so the answer should be close to $15$. (The exact answer is $15.36$.)',
            },
          ],
        },
      },
    ],
  },
]
