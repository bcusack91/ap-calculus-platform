import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-grade5',
    sections: [
      {
        id: 'mult-frac-p1-intro',
        type: 'text',
        content: `
# ✖️ Multiplying Fractions

Multiplying fractions is one of the **easiest** things you can do with fractions. There is no need to find a common denominator like you do with adding or subtracting. You just follow **three simple steps**.

## The Three Steps

1. **Multiply the numerators** (the top numbers)
2. **Multiply the denominators** (the bottom numbers)
3. **Simplify** the answer if you can

Here is the rule written as a formula:

$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$

The top numbers go straight across, and the bottom numbers go straight across. That's it!
        `,
      },
      {
        id: 'mult-frac-p1-worked',
        type: 'text',
        content: `
## A Worked Example

Let's multiply $\\frac{2}{3} \\times \\frac{4}{5}$.

- **Step 1 — Numerators:** $2 \\times 4 = 8$
- **Step 2 — Denominators:** $3 \\times 5 = 15$
- **Step 3 — Simplify:** $\\frac{8}{15}$ is already in lowest terms, so we are done.

$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$$

Notice that the answer is **smaller** than both fractions we started with. That makes sense — when you take a "part of a part," you end up with less than you began with.
        `,
      },
      {
        id: 'mult-frac-p1-meaning',
        type: 'text',
        content: `
## What Does It Mean? 🤔

Multiplying by a fraction means **"taking a part of"** something. The word **"of"** is a clue that you should multiply.

- $\\frac{1}{2} \\times 10 = 5$ → **half of** 10 is 5
- $\\frac{1}{4} \\times 12 = 3$ → **one-fourth of** 12 is 3

So if a problem asks for "one-third **of** a pizza" or "two-fifths **of** the class," you can multiply to find the answer.
        `,
      },
      {
        id: 'mult-frac-p1-check',
        type: 'multiple-choice',
        content: `
**Concept Check** 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'To multiply two fractions, what is the FIRST thing you do?',
              options: [
                'Find a common denominator',
                'Multiply the numerators across, then multiply the denominators across',
                'Add the denominators together',
                'Flip the second fraction upside down',
              ],
              correctAnswer: 1,
              explanation:
                'Multiplying fractions does not need a common denominator. You multiply the top numbers across and the bottom numbers across.',
            },
          ],
        },
      },
    ],
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-grade5',
    sections: [
      {
        id: 'mult-frac-p2-examples',
        type: 'text',
        content: `
# 📝 Worked Examples

## Example 1: Two Fractions

Multiply $\\frac{3}{4} \\times \\frac{2}{5}$.

- **Numerators:** $3 \\times 2 = 6$
- **Denominators:** $4 \\times 5 = 20$
- **Result:** $\\frac{6}{20}$
- **Simplify:** both 6 and 20 divide by 2 → $\\frac{6}{20} = \\frac{3}{10}$

$$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3}{10}$$
        `,
      },
      {
        id: 'mult-frac-p2-whole',
        type: 'text',
        content: `
## Example 2: A Whole Number Times a Fraction

Multiply $5 \\times \\frac{2}{3}$.

A whole number can always be written as a fraction by putting it **over 1**. So $5 = \\frac{5}{1}$.

- **Numerators:** $5 \\times 2 = 10$
- **Denominators:** $1 \\times 3 = 3$
- **Result:** $\\frac{10}{3}$
- **Make it a mixed number:** $10 \\div 3 = 3$ remainder $1$, so $\\frac{10}{3} = 3\\frac{1}{3}$

$$5 \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$$
        `,
      },
      {
        id: 'mult-frac-p2-input',
        type: 'input-boxes',
        content: `
**Your Turn — Multiply Across** 🧮

Type each numerator and denominator. Do **not** simplify these answers yet.

1) $\\frac{1}{2} \\times \\frac{3}{5} = \\frac{?}{?}$ — Numerator?

2) Same problem — Denominator?

3) $\\frac{4}{7} \\times \\frac{2}{3} = \\frac{?}{?}$ — Numerator?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '10', '8'],
          hint1: 'Numerators multiply: 1 × 3. Denominators multiply: 2 × 5.',
          hint2: 'For #3, multiply the tops: 4 × 2.',
          explanation:
            '1) 1 × 3 = 3. 2) 2 × 5 = 10. 3) 4 × 2 = 8. Multiply straight across, top × top and bottom × bottom.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-grade5',
    sections: [
      {
        id: 'mult-frac-p3-mcq',
        type: 'multiple-choice',
        content: `
**Guided Practice** 🧭

Work each one carefully — multiply across, then simplify.
        `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{2}{3} \\times \\frac{1}{4}$?',
              options: [
                '$\\frac{2}{12} = \\frac{1}{6}$',
                '$\\frac{3}{7}$',
                '$\\frac{2}{7}$',
                '$\\frac{8}{12}$',
              ],
              correctAnswer: 0,
              explanation:
                'Numerators: 2 × 1 = 2. Denominators: 3 × 4 = 12. So $\\frac{2}{12}$, which simplifies to $\\frac{1}{6}$.',
            },
            {
              question: 'What is $\\frac{3}{5} \\times \\frac{5}{6}$?',
              options: [
                '$\\frac{8}{11}$',
                '$\\frac{1}{2}$',
                '$\\frac{15}{30}$ and nothing more',
                '$\\frac{2}{3}$',
              ],
              correctAnswer: 1,
              explanation:
                'Multiply across: $\\frac{15}{30}$. Both divide by 15, so $\\frac{15}{30} = \\frac{1}{2}$.',
            },
          ],
        },
      },
      {
        id: 'mult-frac-p3-dropdown',
        type: 'dropdown-select',
        content: `
**Fill in the Steps** 🔍

Complete the rule for solving $4 \\times \\frac{3}{8}$.
        `,
        exercise: {
          dropdowns: [
            {
              label: 'First, rewrite the whole number 4 as the fraction',
              options: ['$\\frac{4}{1}$', '$\\frac{1}{4}$', '$\\frac{4}{4}$', '$\\frac{8}{4}$'],
            },
            {
              label: 'After multiplying across you get $\\frac{12}{8}$, which simplifies to',
              options: ['$\\frac{3}{2}$', '$\\frac{12}{8}$', '$\\frac{2}{3}$', '$\\frac{6}{8}$'],
            },
          ],
          correctAnswers: ['$\\frac{4}{1}$', '$\\frac{3}{2}$'],
          hint1: 'A whole number goes over 1. Then 4 × 3 = 12 and 1 × 8 = 8; both 12 and 8 divide by 4.',
          explanation:
            'Write 4 as $\\frac{4}{1}$. Multiply across: $\\frac{4}{1} \\times \\frac{3}{8} = \\frac{12}{8}$. Divide top and bottom by 4 to get $\\frac{3}{2}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-grade5',
    sections: [
      {
        id: 'mult-frac-p4-context',
        type: 'text',
        content: `
# 🌍 Fractions in Real Life

Remember: the word **"of"** usually means **multiply**.

## Recipe Time 🍪

A cookie recipe needs $\\frac{2}{3}$ cup of sugar. You only want to make **half** the recipe. How much sugar do you need?

"**Half of** $\\frac{2}{3}$" means $\\frac{1}{2} \\times \\frac{2}{3}$:

$$\\frac{1}{2} \\times \\frac{2}{3} = \\frac{2}{6} = \\frac{1}{3} \\text{ cup}$$

## Sharing a Garden 🌱

A garden is $\\frac{3}{4}$ of an acre. You plant tomatoes in $\\frac{2}{3}$ of the garden.

$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2} \\text{ acre of tomatoes}$$
        `,
      },
      {
        id: 'mult-frac-p4-input',
        type: 'input-boxes',
        content: `
**Solve the Word Problems** 🧮

1) A pizza is cut so that each slice is $\\frac{1}{8}$ of the pizza. You eat 3 slices: $3 \\times \\frac{1}{8} = \\frac{?}{8}$ — Numerator?

2) There are 20 students in class. $\\frac{1}{4}$ of them ride the bus: $\\frac{1}{4} \\times 20 = ?$ students — type the whole number.

3) A board is $\\frac{5}{6}$ meter long. You use $\\frac{1}{2}$ of it: $\\frac{1}{2} \\times \\frac{5}{6} = \\frac{5}{?}$ — Denominator?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '12'],
          hint1: 'For #2, "1/4 of 20" is 20 ÷ 4.',
          hint2: 'For #3, multiply the denominators: 2 × 6.',
          explanation:
            '1) 3 × 1 = 3, giving $\\frac{3}{8}$. 2) $\\frac{1}{4} \\times 20 = \\frac{20}{4} = 5$ students. 3) 2 × 6 = 12, giving $\\frac{5}{12}$ meter.',
        },
      },
      {
        id: 'mult-frac-p4-mcq',
        type: 'multiple-choice',
        content: `
**Word Problem Check** 📋
        `,
        exercise: {
          questions: [
            {
              question:
                'A water bottle holds $\\frac{3}{4}$ liter. It is $\\frac{2}{3}$ full. How much water is in it?',
              options: [
                '$\\frac{1}{2}$ liter',
                '$\\frac{5}{7}$ liter',
                '$\\frac{6}{4}$ liter',
                '$\\frac{2}{3}$ liter',
              ],
              correctAnswer: 0,
              explanation:
                '"$\\frac{2}{3}$ of $\\frac{3}{4}$" means $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$ liter.',
            },
          ],
        },
      },
    ],
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-grade5',
    sections: [
      {
        id: 'mult-frac-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

You now know everything you need to multiply fractions. Here is the whole idea in one table.

| Situation | What To Do | Example |
|-----------|-----------|---------|
| Fraction × fraction | Multiply tops, multiply bottoms | $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$ |
| Whole number × fraction | Put the whole number over 1 | $5 \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$ |
| "Of" a number | "Of" means multiply | $\\frac{1}{4} \\times 12 = 3$ |
| Cross-cancel | Cancel a common factor first | $\\frac{4}{5} \\times \\frac{5}{8} = \\frac{1}{2}$ |

## Cross-Canceling Shortcut ✂️

When a numerator and a denominator share a factor, you can cancel **before** multiplying to keep the numbers small:

$$\\frac{4}{5} \\times \\frac{5}{8} = \\frac{4 \\times \\cancel{5}}{\\cancel{5} \\times 8} = \\frac{4}{8} = \\frac{1}{2}$$

**Remember:** multiplying by a proper fraction (less than 1) always makes a number **smaller**.
        `,
      },
      {
        id: 'mult-frac-p5-challenge',
        type: 'multiple-choice',
        content: `
**Final Challenge** 🚀

Mix everything you've learned!
        `,
        exercise: {
          questions: [
            {
              question: 'What is $6 \\times \\frac{3}{4}$ written in simplest form?',
              options: [
                '$\\frac{9}{2} = 4\\frac{1}{2}$',
                '$\\frac{18}{4}$ and nothing more',
                '$\\frac{6}{4}$',
                '$\\frac{3}{24}$',
              ],
              correctAnswer: 0,
              explanation:
                'Write 6 as $\\frac{6}{1}$: $\\frac{6}{1} \\times \\frac{3}{4} = \\frac{18}{4}$. Divide top and bottom by 2 to get $\\frac{9}{2} = 4\\frac{1}{2}$.',
            },
            {
              question:
                'Using cross-canceling, what is $\\frac{3}{8} \\times \\frac{4}{9}$?',
              options: [
                '$\\frac{1}{6}$',
                '$\\frac{12}{72}$ only',
                '$\\frac{7}{17}$',
                '$\\frac{2}{3}$',
              ],
              correctAnswer: 0,
              explanation:
                'Cancel 3 with 9 (→1 and 3) and 4 with 8 (→1 and 2): $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$.',
            },
          ],
        },
      },
    ],
  },
]
