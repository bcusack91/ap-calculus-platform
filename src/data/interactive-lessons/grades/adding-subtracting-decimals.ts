import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Are Decimals?"
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals',
    sections: [
      {
        id: 'p1-intro-decimals',
        type: 'text',
        content: `## What Are Decimals? 🔢

A **decimal** is another way to show parts of a whole — just like a fraction does.

The little dot in the middle is called the **decimal point** ( . ). It separates the **whole number** part (on the left) from the **part that is less than one** (on the right).

**Example:** $3.5$ means *3 and 5 tenths*, which is the same as the mixed number $3\\frac{5}{10}$.

You already use decimals every day:

- Money: a candy bar costs **\\$1.25**
- Sports: a runner finished in **9.8** seconds
- Cooking: a recipe needs **2.5** cups of flour

Decimals let us measure and count things that don't land on a nice whole number.`,
      },
      {
        id: 'p1-place-value',
        type: 'text',
        content: `## Place Value Is the Key 🗝️

Understanding **place value** is the secret to adding and subtracting decimals. Each spot to the right of the decimal point is **ten times smaller** than the one before it.

Let's look at the number **3.45**:

| Place    | Ones | (point) | Tenths | Hundredths |
|----------|:----:|:-------:|:------:|:----------:|
| Digit    | 3    | .       | 4      | 5          |
| Value    | 3    |         | $\\frac{4}{10}$ | $\\frac{5}{100}$ |

So $3.45$ is:

- **3 ones**
- **4 tenths** (that's $\\frac{4}{10}$)
- **5 hundredths** (that's $\\frac{5}{100}$)

The first digit after the point is **tenths**. The second digit after the point is **hundredths**. Lining these places up correctly is what makes our math work.`,
      },
      {
        id: 'p1-golden-rule',
        type: 'text',
        content: `## ⭐ The Golden Rule: Line Up the Decimal Points!

The **most important rule** for adding and subtracting decimals is this:

> **Always line up the decimal points, one right on top of the other!**

When the points are lined up, the tenths sit under the tenths and the hundredths sit under the hundredths. That keeps every digit in its correct place.

**Correct way** to add $4.3 + 2.6$:

\`\`\`
  4.3
+ 2.6
-----
  6.9   ✓  (points lined up!)
\`\`\`

If you slide the numbers around so the points are **not** lined up, you will mix up tenths with ones and get the wrong answer. Keep those points stacked!`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea is clear.`,
        exercise: {
          questions: [
            {
              question: 'In the number $7.62$, what is the value of the digit $6$?',
              options: ['6 ones', '6 tenths', '6 hundredths', '6 wholes'],
              correctAnswer: 1,
              explanation:
                'The first digit right after the decimal point is the tenths place, so the 6 means 6 tenths ($\\frac{6}{10}$).',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Adding Decimals Step by Step"
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals',
    sections: [
      {
        id: 'p2-add-basic',
        type: 'text',
        content: `## Adding Decimals: Step by Step ➕

Let's add $5.4 + 3.8$ together, one step at a time.

**Step 1 — Line up the decimal points.**

\`\`\`
  5.4
+ 3.8
-----
\`\`\`

**Step 2 — Add from right to left, just like whole numbers.**

Start with the tenths: $4 + 8 = 12$ tenths. That is **more than 9**, so we write the **2** and **carry the 1** to the ones place.

Then the ones: $1 + 5 + 3 = 9$.

\`\`\`
   ¹
  5.4
+ 3.8
-----
  9.2
\`\`\`

**Step 3 — Bring the decimal point straight down** into the answer.

$$5.4 + 3.8 = 9.2 \\;✓$$`,
      },
      {
        id: 'p2-add-different-places',
        type: 'text',
        content: `## Adding Numbers with Different Decimal Places 🧩

What if the numbers have a different number of digits, like $6.5 + 2.34$?

**Trick:** add a **placeholder zero** so both numbers have the same number of decimal places. Adding a zero on the *end* of a decimal does **not** change its value ($6.5 = 6.50$).

**Step 1 — Line up the points and add a zero:**

\`\`\`
  6.50   ← added a zero
+ 2.34
------
\`\`\`

**Step 2 — Add each column from the right:**

- Hundredths: $0 + 4 = 4$
- Tenths: $5 + 3 = 8$
- Ones: $6 + 2 = 8$

\`\`\`
  6.50
+ 2.34
------
  8.84   ✓
\`\`\`

So $6.5 + 2.34 = 8.84$. The placeholder zero keeps every digit in the right column.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Add These ✍️

Use the line-up rule (and a placeholder zero when you need one). Type each answer as a decimal number, like \`7.5\`.

1. $3.2 + 4.5 = \\;?$
2. $5.6 + 2.7 = \\;?$
3. $4.3 + 1.85 = \\;?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.7', '8.3', '6.15'],
          hint1:
            'Stack the numbers so the decimal points line up. For problem 3, write 4.3 as 4.30 first.',
          hint2:
            'Add from right to left. If a column adds up to more than 9, carry the extra into the next column.',
          explanation:
            'Problem 1: $3.2 + 4.5 = 7.7$. Problem 2: $5.6 + 2.7 = 8.3$ (the tenths 6+7=13, write 3 carry 1). Problem 3: $4.30 + 1.85 = 6.15$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Subtracting & Mixed Practice"
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals',
    sections: [
      {
        id: 'p3-subtract-text',
        type: 'text',
        content: `## Subtracting Decimals ➖

Subtracting works the **exact same way** as adding: line up the points, subtract right to left, and bring the point straight down.

**Example:** $8.7 - 3.2$

\`\`\`
  8.7
- 3.2
-----
  5.5   ✓
\`\`\`

**Borrowing (regrouping):** Sometimes the top digit is too small. For $5.4 - 2.8$, you can't take $8$ tenths from $4$ tenths, so **borrow 1 one** (which is 10 tenths) from the ones place.

- $5.4$ becomes $4$ ones and $14$ tenths.
- Tenths: $14 - 8 = 6$
- Ones: $4 - 2 = 2$

$$5.4 - 2.8 = 2.6 \\;✓$$

Now answer the questions below.`,
      },
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $9.6 - 4.3$?',
              options: ['5.3', '5.9', '13.9', '4.3'],
              correctAnswer: 0,
              explanation:
                'Line up the points and subtract: tenths $6-3=3$, ones $9-4=5$, giving $5.3$.',
            },
            {
              question: 'What is $7.2 - 3.5$? (You will need to borrow.)',
              options: ['4.7', '3.7', '3.3', '4.3'],
              correctAnswer: 1,
              explanation:
                "You can't take 5 tenths from 2 tenths, so borrow: 7.2 becomes 6 ones and 12 tenths. Then $12-5=7$ tenths and $6-3=3$ ones, giving $3.7$.",
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Fill in the Blanks 🔽

Choose the correct answer for each problem.`,
        exercise: {
          dropdowns: [
            { label: '$6.4 + 2.5 = $', options: ['8.9', '9.9', '8.1'] },
            { label: '$8.0 - 2.6 = $', options: ['6.4', '5.4', '5.6'] },
          ],
          correctAnswers: ['8.9', '5.4'],
          hint1:
            'Line up the decimal points. For the subtraction, remember 8.0 is the same as 8.0, so borrow from the ones to make tenths.',
          explanation:
            '$6.4 + 2.5 = 8.9$. For $8.0 - 2.6$, borrow to get 7 ones and 10 tenths: $10-6=4$ tenths, $7-2=5$ ones, which is $5.4$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Decimals in the Real World"
  // ============================================================
  {
    topicSlug: 'adding-subtracting-decimals',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Decimals in the Real World 🌎

Decimals show up most often with **money** and **measuring**. The same line-up rule works every time.

**Money example:** Maya buys a juice for **\\$1.75** and a muffin for **\\$2.40**. How much does she spend?

\`\`\`
  1.75
+ 2.40
------
  4.15   ✓
\`\`\`

She spends **\\$4.15**.

**Change example:** She pays with a **\\$5.00** bill. How much change does she get?

\`\`\`
  5.00
- 4.15
------
  0.85   ✓
\`\`\`

She gets **\\$0.85** back. Notice how the placeholder zeros in \`5.00\` keep the columns lined up. Now try some yourself!`,
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Word Problem Practice 💵

Type each answer as a decimal number (no dollar sign needed), like \`3.50\` or \`3.5\`.

1. Ben jogs **2.4 km** in the morning and **1.5 km** at night. How many km total?
2. A water bottle holds **0.75 L**. Sam drinks **0.5 L**. How many liters are left?
3. A pencil costs **\\$0.60** and an eraser costs **\\$0.85**. What is the total cost?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3.9', '0.25', '1.45'],
          hint1:
            '"Total" and "altogether" mean add. "Left" and "how much more" usually mean subtract.',
          hint2:
            'Line up the decimal points. For problem 2, write 0.5 as 0.50 so both numbers have hundredths.',
          explanation:
            'Problem 1 (add): $2.4 + 1.5 = 3.9$ km. Problem 2 (subtract): $0.75 - 0.50 = 0.25$ L. Problem 3 (add): $0.60 + 0.85 = 1.45$ dollars.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## One More Word Problem 🧠`,
        exercise: {
          questions: [
            {
              question:
                'A ribbon is $3.5$ meters long. Lucy cuts off $1.8$ meters for a project. How much ribbon is left?',
              options: ['1.7 m', '2.3 m', '1.3 m', '5.3 m'],
              correctAnswer: 0,
              explanation:
                '"Left" means subtract: $3.5 - 1.8$. Borrow to get 2 ones and 15 tenths, so $15-8=7$ tenths and $2-1=1$ one, giving $1.7$ m.',
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
    topicSlug: 'adding-subtracting-decimals',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything You Learned 📋

You are now a decimal pro! Here is a quick summary of the steps.

| Step | What to do | Why it matters |
|------|------------|----------------|
| 1 | **Line up the decimal points** | Keeps tenths under tenths, hundredths under hundredths |
| 2 | **Add placeholder zeros** | Makes both numbers the same length so columns match |
| 3 | **Work right to left** | Just like adding/subtracting whole numbers |
| 4 | **Carry or borrow** when needed | Handles columns over 9 (carry) or too small (borrow) |
| 5 | **Bring the point straight down** | Puts the decimal point in the right spot in your answer |

**Remember the Golden Rule:** *Line up the decimal points!* If you do that one thing, the rest is just whole-number math.

Ready for the final challenge? Let's go! 🚀`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆`,
        exercise: {
          questions: [
            {
              question: 'What is $4.75 + 3.6$? (Hint: add a placeholder zero.)',
              options: ['8.35', '8.11', '7.35', '5.11'],
              correctAnswer: 0,
              explanation:
                'Write $3.6$ as $3.60$, then add: hundredths $5+0=5$, tenths $7+6=13$ (write 3, carry 1), ones $4+3+1=8$, giving $8.35$.',
            },
            {
              question:
                'Which problem will need **borrowing** to solve? ',
              options: [
                '$6.3 - 4.7$',
                '$8.5 - 2.1$',
                '$9.9 - 3.4$',
                '$7.8 - 5.6$',
              ],
              correctAnswer: 0,
              explanation:
                'In $6.3 - 4.7$ you cannot take 7 tenths from 3 tenths, so you must borrow. The others have a larger top tenths digit, so no borrowing is needed.',
            },
          ],
        },
      },
    ],
  },
]
