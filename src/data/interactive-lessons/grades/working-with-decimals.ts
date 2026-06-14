import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "Decimals & Place Value"
  // ============================================================
  {
    topicSlug: 'working-with-decimals',
    sections: [
      {
        id: 'p1-what-are-decimals',
        type: 'text',
        content: `## What Are Decimals? 🔢

A **decimal** is a way to write numbers that are *between* whole numbers. The little dot — the **decimal point** — separates the whole part (on the left) from the part smaller than one (on the right).

You meet decimals every single day:

- **Money:** a snack costs **\\$2.75**
- **Sports:** a sprinter runs the race in **10.4** seconds
- **Cooking:** a recipe needs **1.5** cups of sugar

Decimals and fractions are two ways to say the *same* thing. For example, $0.5$ is the same amount as $\\frac{1}{2}$. Both mean "one half."`,
      },
      {
        id: 'p1-place-value',
        type: 'text',
        content: `## Place Value: The Secret Code 🗝️

Every digit in a decimal has a **place value**. As you move *right* of the decimal point, each place is **ten times smaller** than the one before it.

Look at the number $3.475$:

| Digit | Place | Means |
|:-----:|:------|:------|
| 3 | ones | $3$ |
| 4 | tenths | $\\frac{4}{10}$ |
| 7 | hundredths | $\\frac{7}{100}$ |
| 5 | thousandths | $\\frac{5}{1000}$ |

So $3.475$ is read as **"three and four hundred seventy-five thousandths."**

The order is always the same after the point: **tenths, then hundredths, then thousandths.** Knowing these places is the key to *all* decimal math.`,
      },
      {
        id: 'p1-line-up-rule',
        type: 'text',
        content: `## ⭐ The Golden Rule for Adding & Subtracting

When you **add** or **subtract** decimals, follow one rule above all others:

> **Line up the decimal points, one right on top of the other!**

When the points are stacked, tenths land under tenths and hundredths land under hundredths. Then you add or subtract just like whole numbers.

\`\`\`
  3.45
+ 2.70   ← add a 0 to fill the empty space
------
  6.15
\`\`\`

**Tip:** You can add a **0** to the end of a decimal without changing its value, so $2.7 = 2.70$. This helps keep your columns lined up neatly.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure place value makes sense before we move on.`,
        exercise: {
          questions: [
            {
              question: 'In the number $5.82$, what is the value of the digit $8$?',
              options: ['8 ones', '8 tenths', '8 hundredths', '8 thousandths'],
              correctAnswer: 1,
              explanation:
                'The first digit right after the decimal point is the tenths place, so the $8$ means $8$ tenths ($\\frac{8}{10}$).',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Adding, Subtracting & Multiplying"
  // ============================================================
  {
    topicSlug: 'working-with-decimals',
    sections: [
      {
        id: 'p2-add-subtract-worked',
        type: 'text',
        content: `## Adding & Subtracting, Step by Step ➕➖

**Example 1 — Add:** $4.6 + 2.85$

**Step 1 — Line up the decimal points** (write $4.6$ as $4.60$ to fill the gap):

\`\`\`
  4.60
+ 2.85
------
  7.45
\`\`\`

Add from right to left: $0+5=5$, then $6+8=14$ (write $4$, carry $1$), then $4+2+1=7$. The answer is $7.45$.

**Example 2 — Subtract:** $9.3 - 5.74$

\`\`\`
  9.30
- 5.74
------
  3.56
\`\`\`

Again, line up the points and add a $0$ to make $9.30$. Borrow where needed, and you get $3.56$.`,
      },
      {
        id: 'p2-multiply-worked',
        type: 'text',
        content: `## Multiplying Decimals ✖️

When you **multiply**, you do **not** need to line up the points. Instead:

1. **Multiply** as if the numbers were whole numbers.
2. **Count** the total number of decimal places in *both* factors.
3. **Place** the decimal point in the answer so it has that many places.

**Example:** $2.5 \\times 0.3$

- Multiply whole numbers: $25 \\times 3 = 75$
- Count decimal places: $2.5$ has **1**, and $0.3$ has **1**, for a total of **2**.
- Put **2** decimal places in the answer: $0.75$

So $2.5 \\times 0.3 = 0.75$. ✅`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✍️

Solve each problem. Remember to line up the points for adding and subtracting, and count decimal places when multiplying. Type your answers as decimals (like $7.45$).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6.75', '2.4', '0.24'],
          hint1:
            'For $3.5 + 3.25$, line up the points and write $3.5$ as $3.50$. For $0.4 \\times 0.6$, multiply $4 \\times 6 = 24$ then place the decimal.',
          hint2:
            'Adding: $3.50 + 3.25 = 6.75$. Subtracting: $5.0 - 2.6 = 2.4$. Multiplying: $0.4 \\times 0.6$ has $2$ decimal places, so $24 \\to 0.24$.',
          explanation:
            'Box 1: $3.5 + 3.25 = 6.75$. Box 2: $5.0 - 2.6 = 2.4$. Box 3: $0.4 \\times 0.6 = 0.24$ (two total decimal places).',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'working-with-decimals',
    sections: [
      {
        id: 'p3-mc-practice',
        type: 'multiple-choice',
        content: `## Mixed Practice 🎯

Work through these two problems carefully.`,
        exercise: {
          questions: [
            {
              question: 'What is $1.2 \\times 0.5$?',
              options: ['0.6', '6.0', '0.06', '0.5'],
              correctAnswer: 0,
              explanation:
                'Multiply $12 \\times 5 = 60$. There are $2$ total decimal places, so the answer is $0.60 = 0.6$.',
            },
            {
              question: 'What is $8.5 - 3.25$?',
              options: ['5.35', '5.25', '4.25', '5.15'],
              correctAnswer: 1,
              explanation:
                'Write $8.5$ as $8.50$ and line up the points: $8.50 - 3.25 = 5.25$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown-practice',
        type: 'dropdown-select',
        content: `## Choose the Correct Answer 📋

Pick the right value for each problem from the dropdown menus.`,
        exercise: {
          dropdowns: [
            { label: '$4.3 + 1.8 = $', options: ['6.1', '5.1', '6.11'] },
            { label: '$0.6 \\div 0.2 = $', options: ['0.3', '3', '30'] },
          ],
          correctAnswers: ['6.1', '3'],
          hint1:
            'For division, move the decimal in $0.2$ right one place to make it the whole number $2$, and move it the same amount in $0.6$ to get $6$. Then $6 \\div 2 = 3$.',
          explanation:
            '$4.3 + 1.8 = 6.1$ (line up the points). For $0.6 \\div 0.2$, shift both decimals one place to get $6 \\div 2 = 3$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Real-World Decimals"
  // ============================================================
  {
    topicSlug: 'working-with-decimals',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Decimals in the Real World 🌎

Decimals show up most often with **money** and **measurement**. Word problems just describe a real situation — your job is to find the operation hiding inside.

**Watch for clue words:**

| Clue words | Operation |
|:-----------|:----------|
| total, altogether, in all | **add** |
| change, how much more, left | **subtract** |
| each, per, groups of | **multiply** or **divide** |

**Example:** Maya buys a notebook for **\\$3.45** and a pen for **\\$1.25**. How much does she spend *in all*?

"In all" means **add**: $3.45 + 1.25 = 4.70$. Maya spends **\\$4.70**.`,
      },
      {
        id: 'p4-input-word-problems',
        type: 'input-boxes',
        content: `## Solve the Word Problems ✍️

Read carefully and type each answer as a decimal (you can drop a trailing zero, so $4.70$ can be typed as $4.7$).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.5', '2.15', '4.5'],
          hint1:
            'Problem 1: "each" and 3 tickets means multiply $2.5 \\times 3$. Problem 2: "change" means subtract. Problem 3: "split equally" means divide.',
          hint2:
            'Problem 1: $2.50 \\times 3 = 7.50$. Problem 2: $10.00 - 7.85 = 2.15$. Problem 3: $13.5 \\div 3 = 4.5$.',
          explanation:
            'Box 1: 3 tickets at \\$2.50 each $= 2.5 \\times 3 = 7.5$ dollars. Box 2: change from \\$10 after spending \\$7.85 $= 10 - 7.85 = 2.15$. Box 3: \\$13.50 split among 3 friends $= 13.5 \\div 3 = 4.5$.',
        },
      },
      {
        id: 'p4-mc-word',
        type: 'multiple-choice',
        content: `## One More Word Problem 🧠`,
        exercise: {
          questions: [
            {
              question:
                'A runner jogs $1.6$ km, then jogs another $2.45$ km. How far did the runner jog **in all**?',
              options: ['3.05 km', '4.05 km', '4.5 km', '3.95 km'],
              correctAnswer: 1,
              explanation:
                '"In all" means add. Line up the points: $1.60 + 2.45 = 4.05$ km.',
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
    topicSlug: 'working-with-decimals',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Decimal Skills Summary 🏆

You can now work with decimals four ways. Here is the whole toolkit in one table:

| Operation | Key step | Example |
|:----------|:---------|:--------|
| **Add** | Line up the decimal points | $3.4 + 1.2 = 4.6$ |
| **Subtract** | Line up the decimal points | $5.6 - 2.1 = 3.5$ |
| **Multiply** | Count total decimal places | $0.2 \\times 0.4 = 0.08$ |
| **Divide** | Move both decimals, then divide | $0.8 \\div 0.4 = 2$ |

**Converting:**

- **Fraction → decimal:** divide the top by the bottom. $\\frac{3}{4} = 3 \\div 4 = 0.75$
- **Decimal → fraction:** use place value. $0.75 = \\frac{75}{100} = \\frac{3}{4}$

Keep these rules close and you can handle any decimal problem. Now try the challenge below!`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Mixed Challenge 🚀

These two questions mix everything together. Take your time!`,
        exercise: {
          questions: [
            {
              question: 'Which decimal is equal to the fraction $\\frac{3}{4}$?',
              options: ['0.34', '0.75', '0.43', '0.7'],
              correctAnswer: 1,
              explanation:
                'To convert a fraction to a decimal, divide the numerator by the denominator: $3 \\div 4 = 0.75$.',
            },
            {
              question: 'What is $0.9 \\times 0.4$?',
              options: ['3.6', '0.36', '0.13', '0.036'],
              correctAnswer: 1,
              explanation:
                'Multiply $9 \\times 4 = 36$. There are $2$ total decimal places, so the answer is $0.36$.',
            },
          ],
        },
      },
    ],
  },
]
