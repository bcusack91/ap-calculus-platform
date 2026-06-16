import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'understanding-decimals-grade4',
    sections: [
      {
        id: 'p1-intro-what-are-decimals',
        type: 'text',
        content: `## What Are Decimals? 🔢

A **decimal** is another way to show parts of a whole. You already know one way to do this: **fractions**. Decimals are just a different costume for the same idea!

Look at the number $3.45$. That little dot in the middle is called the **decimal point**. It separates the whole part from the part that is less than one.

- The numbers to the **left** of the dot are whole ones.
- The numbers to the **right** of the dot are parts smaller than one whole.

When you see money, you are already reading decimals. A price like \\$3.45 means **3 whole dollars** and **45 cents** (a part of a dollar).`,
      },
      {
        id: 'p1-place-value',
        type: 'text',
        content: `## Place Value with Decimals

Each digit sits in a **place**, and that place tells you its value. After the decimal point come the **tenths** place and the **hundredths** place.

Let's break down $3.45$:

| Ones | . | Tenths | Hundredths |
|------|---|--------|------------|
| 3 | . | 4 | 5 |

- **3** is in the **ones** place → 3 whole ones.
- **4** is in the **tenths** place → $\\frac{4}{10}$ (4 tenths).
- **5** is in the **hundredths** place → $\\frac{5}{100}$ (5 hundredths).

A **tenth** means one whole is split into **10 equal parts**. A **hundredth** means one whole is split into **100 equal parts**. The farther right you go, the smaller each part becomes.`,
      },
      {
        id: 'p1-reading-decimals',
        type: 'text',
        content: `## Reading Decimals Out Loud

When you read a decimal, the decimal point is read as the word **"and"**, and the last digit tells you the place name.

- $0.3$ → **"three tenths"**
- $0.45$ → **"forty-five hundredths"**
- $2.7$ → **"two **and** seven tenths"**

**Worked example:** How do we read $0.6$?
- The 6 is in the **tenths** place.
- So $0.6$ is read as **"six tenths"**, which is the same as $\\frac{6}{10}$.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

You just learned the names of the places after the decimal point. Let's make sure it stuck!`,
        exercise: {
          questions: [
            {
              question: 'In the number $0.7$, which place is the digit $7$ in?',
              options: ['Ones place', 'Tenths place', 'Hundredths place', 'Thousandths place'],
              correctAnswer: 1,
              explanation:
                'The first place right after the decimal point is the tenths place, so $0.7$ means 7 tenths, or $\\frac{7}{10}$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'understanding-decimals-grade4',
    sections: [
      {
        id: 'p2-worked-place-value',
        type: 'text',
        content: `## Worked Example: Naming Each Digit

Let's carefully read the number $5.28$ one place at a time.

**Step 1 — Find the whole part.** The digit to the left of the decimal point is $5$. That is **5 ones**.

**Step 2 — Find the tenths.** The first digit after the point is $2$. That is **2 tenths**, or $\\frac{2}{10}$.

**Step 3 — Find the hundredths.** The next digit is $8$. That is **8 hundredths**, or $\\frac{8}{100}$.

So $5.28$ is read as **"five and twenty-eight hundredths."**

| Ones | . | Tenths | Hundredths |
|------|---|--------|------------|
| 5 | . | 2 | 8 |`,
      },
      {
        id: 'p2-worked-fraction-decimal',
        type: 'text',
        content: `## Worked Example: Decimals and Fractions

Decimals and fractions are best friends. Here is how to switch between them:

- $0.1 = \\frac{1}{10}$ (one tenth)
- $0.9 = \\frac{9}{10}$ (nine tenths)
- $0.03 = \\frac{3}{100}$ (three hundredths)

**Worked example:** Write $0.4$ as a fraction.
- The 4 is in the **tenths** place.
- So $0.4 = \\frac{4}{10}$.

Now use these ideas to fill in the boxes below.`,
      },
      {
        id: 'p2-input-boxes',
        type: 'input-boxes',
        content: `## Your Turn: Fill in the Blanks ✍️

Look at the decimal $0.7$.

1. Write the digit that is in the **tenths** place.
2. Write $0.7$ as a fraction over 10 (type it like $7/10$).
3. In the number $4.6$, write the digit in the **ones** place.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '7/10', '4'],
          hint1: 'The tenths place is the first digit right after the decimal point.',
          hint2: 'A decimal in the tenths place can be written as that digit over 10, like $0.3 = 3/10$.',
          explanation:
            'In $0.7$, the 7 is in the tenths place, so $0.7 = \\frac{7}{10}$. In $4.6$, the 4 is to the left of the point, so it is in the ones place.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'understanding-decimals-grade4',
    sections: [
      {
        id: 'p3-multiple-choice',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Best Answer 🧠

Read each question carefully and pick the correct choice.`,
        exercise: {
          questions: [
            {
              question: 'How do you read the decimal $0.45$?',
              options: [
                'Four hundred five',
                'Forty-five tenths',
                'Forty-five hundredths',
                'Four and five',
              ],
              correctAnswer: 2,
              explanation:
                'The last digit (5) is in the hundredths place, so $0.45$ is read as "forty-five hundredths," which equals $\\frac{45}{100}$.',
            },
            {
              question: 'Which fraction is equal to the decimal $0.5$?',
              options: ['$\\frac{1}{5}$', '$\\frac{5}{100}$', '$\\frac{1}{2}$', '$\\frac{5}{1}$'],
              correctAnswer: 2,
              explanation:
                'Since $0.5 = \\frac{5}{10}$, and $\\frac{5}{10}$ simplifies to $\\frac{1}{2}$, the decimal $0.5$ equals one half.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Guided Practice: Match Each Decimal 🔽

Use the place value names you learned. Choose the correct place for each digit.`,
        exercise: {
          dropdowns: [
            {
              label: 'In $0.8$, the digit 8 is in the',
              options: ['ones place', 'tenths place', 'hundredths place'],
            },
            {
              label: 'In $0.06$, the digit 6 is in the',
              options: ['ones place', 'tenths place', 'hundredths place'],
            },
          ],
          correctAnswers: ['tenths place', 'hundredths place'],
          hint1:
            'The first place after the decimal point is tenths, and the second place after it is hundredths.',
          explanation:
            'In $0.8$ the 8 is the first digit after the point, so it is in the tenths place. In $0.06$ the 6 is the second digit after the point, so it is in the hundredths place.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'understanding-decimals-grade4',
    sections: [
      {
        id: 'p4-money-context',
        type: 'text',
        content: `## Decimals in Real Life: Money 💵

You use decimals every single time you spend or save money! In dollars and cents, the decimal point separates whole **dollars** from **cents**.

- \\$0.25 = 25 cents = one quarter
- \\$0.50 = 50 cents = a half dollar
- \\$1.75 = 1 dollar and 75 cents

| Decimal | In Words | Coins / Value |
|---------|----------|---------------|
| \\$0.10 | ten cents | one dime |
| \\$0.25 | twenty-five cents | one quarter |
| \\$0.50 | fifty cents | two quarters |

Because \\$0.25 $= \\frac{25}{100}$, and $\\frac{25}{100} = \\frac{1}{4}$, a quarter really is **one fourth** of a dollar. Let's use this in a real problem!`,
      },
      {
        id: 'p4-input-boxes',
        type: 'input-boxes',
        content: `## Word Problem: At the Store 🛒

Maya has some coins.

1. She has one quarter. How many cents is that? (Type just the number of cents.)
2. A pencil costs \\$0.50. How many cents is that?
3. A dime is worth \\$0.10. How many cents is that?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '50', '10'],
          hint1: 'Cents are the part after the decimal point. $\\$0.25$ means 25 cents.',
          hint2: 'Just read the two digits after the decimal point as the number of cents.',
          explanation:
            'A quarter is $\\$0.25 = 25$ cents, $\\$0.50 = 50$ cents, and a dime is $\\$0.10 = 10$ cents.',
        },
      },
      {
        id: 'p4-multiple-choice',
        type: 'multiple-choice',
        content: `## Word Problem Check ✅

Use what you know about money and decimals.`,
        exercise: {
          questions: [
            {
              question:
                'Liam pays for a sticker with exactly $\\$0.50$. Which of these is the SAME amount of money?',
              options: [
                'Five cents',
                'One quarter',
                'Two quarters',
                'Five dollars',
              ],
              correctAnswer: 2,
              explanation:
                'Each quarter is $\\$0.25$, so two quarters make $\\$0.25 + \\$0.25 = \\$0.50$, which is 50 cents.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'understanding-decimals-grade4',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything You Learned 🌟

You now know that decimals are another way to write parts of a whole, just like fractions. Here is a quick summary:

| Idea | Example | Same As |
|------|---------|---------|
| Ones place | the 2 in $2.5$ | 2 whole ones |
| Tenths place | the 5 in $2.5$ | $\\frac{5}{10}$ |
| Hundredths place | the 3 in $0.03$ | $\\frac{3}{100}$ |
| Decimal to fraction | $0.25$ | $\\frac{25}{100} = \\frac{1}{4}$ |
| Money | \\$0.50 | 50 cents = a half dollar |

**Remember:** the first place after the decimal point is **tenths**, and the second place is **hundredths**. Now try the challenge questions to put it all together!`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Challenge Round 🏆

Mix together place value, fractions, and money. You've got this!`,
        exercise: {
          questions: [
            {
              question: 'Which decimal is equal to the fraction $\\frac{1}{4}$?',
              options: ['$0.4$', '$0.14$', '$0.25$', '$0.5$'],
              correctAnswer: 2,
              explanation:
                'Since $\\frac{1}{4} = \\frac{25}{100}$, and $\\frac{25}{100} = 0.25$, the fraction $\\frac{1}{4}$ equals the decimal $0.25$ (just like a quarter equals 25 cents).',
            },
            {
              question:
                'In the number $7.39$, which sentence is TRUE?',
              options: [
                'The 3 is in the hundredths place.',
                'The 9 is in the tenths place.',
                'The 3 is in the tenths place and the 9 is in the hundredths place.',
                'The 7 is in the tenths place.',
              ],
              correctAnswer: 2,
              explanation:
                'In $7.39$, the 7 is in the ones place, the 3 (first after the point) is in the tenths place, and the 9 (second after the point) is in the hundredths place.',
            },
          ],
        },
      },
    ],
  },
]
