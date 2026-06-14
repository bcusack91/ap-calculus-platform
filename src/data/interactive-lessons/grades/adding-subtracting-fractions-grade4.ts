import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'adding-subtracting-fractions-grade4',
    sections: [
      {
        id: 'asf-g4-p1-intro',
        type: 'text',
        content: `
# ➕ Adding & Subtracting Fractions

A fraction is just a way to talk about **parts of a whole**. The bottom number, called the **denominator**, tells you how many equal pieces the whole is cut into. The top number, called the **numerator**, tells you how many of those pieces you have.

When two fractions have the **same denominator**, the pieces are all the **same size**. That makes them super easy to combine!

## The Big Rule

When the denominators match (we call these **like denominators**), you simply add or subtract the **numerators** and keep the denominator the same:

$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$

$\\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$

Think of it like pizza slices: if every slice is one-fifth of a pizza, then **2 slices plus 1 slice = 3 slices**. The size of each slice never changes!
        `,
      },
      {
        id: 'asf-g4-p1-examples',
        type: 'text',
        content: `
## Two Quick Examples 🍕

**Adding:**

$\\frac{2}{5} + \\frac{1}{5} = \\frac{2 + 1}{5} = \\frac{3}{5}$

We added the numerators ($2 + 1 = 3$) and kept the denominator $5$.

**Subtracting:**

$\\frac{7}{8} - \\frac{3}{8} = \\frac{7 - 3}{8} = \\frac{4}{8} = \\frac{1}{2}$

We subtracted the numerators ($7 - 3 = 4$) and kept the denominator $8$. Then we **simplified** $\\frac{4}{8}$ to $\\frac{1}{2}$ because both $4$ and $8$ can be divided by $4$.

> ⭐ **Always simplify** your answer when you can! A simplified fraction uses the smallest numbers possible.
        `,
      },
      {
        id: 'asf-g4-p1-keep-denominator',
        type: 'text',
        content: `
## The #1 Mistake to Avoid 🚫

The most common mistake is **adding the denominators**. Don't do it!

| What you do | Numerators | Denominators |
|-------------|-----------|--------------|
| ✅ Correct  | Add or subtract them | **Keep the same** |
| ❌ Wrong    | Add them | Add them too |

For example, $\\frac{2}{5} + \\frac{1}{5}$ is **not** $\\frac{3}{10}$. The denominator stays $5$, so the answer is $\\frac{3}{5}$.

Remember: the denominator is the **size of the slice**. Combining slices never changes their size!
        `,
      },
      {
        id: 'asf-g4-p1-check',
        type: 'multiple-choice',
        content: `
## Concept Check 🎯

Let's make sure the big idea is locked in.
        `,
        exercise: {
          questions: [
            {
              question: 'When you add two fractions with the **same denominator**, what do you do with the denominator?',
              options: [
                'Add the two denominators together',
                'Keep the denominator the same',
                'Multiply the two denominators',
                'Subtract the denominators',
              ],
              correctAnswer: 1,
              explanation:
                'With like denominators, the slice size stays the same. You only add the numerators and keep the denominator the same, so $\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$.',
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
    topicSlug: 'adding-subtracting-fractions-grade4',
    sections: [
      {
        id: 'asf-g4-p2-worked1',
        type: 'text',
        content: `
# 🧮 Worked Examples

Let's slow down and work through problems **one step at a time**.

## Example 1: Adding

$\\frac{3}{7} + \\frac{2}{7}$

**Step 1 — Check the denominators.** Both are $7$, so they match. We're good to go!

**Step 2 — Add the numerators.** $3 + 2 = 5$.

**Step 3 — Keep the denominator.** It stays $7$.

$$\\frac{3}{7} + \\frac{2}{7} = \\frac{5}{7}$$

**Step 4 — Simplify if possible.** $5$ and $7$ share no common factor, so $\\frac{5}{7}$ is already in simplest form. ✅
        `,
      },
      {
        id: 'asf-g4-p2-worked2',
        type: 'text',
        content: `
## Example 2: Subtracting and Simplifying

$\\frac{9}{10} - \\frac{3}{10}$

**Step 1 — Check the denominators.** Both are $10$. They match!

**Step 2 — Subtract the numerators.** $9 - 3 = 6$.

**Step 3 — Keep the denominator.** It stays $10$.

$$\\frac{9}{10} - \\frac{3}{10} = \\frac{6}{10}$$

**Step 4 — Simplify.** Both $6$ and $10$ can be divided by $2$:

$$\\frac{6}{10} = \\frac{6 \\div 2}{10 \\div 2} = \\frac{3}{5}$$

So the final answer is $\\frac{3}{5}$. 🎉
        `,
      },
      {
        id: 'asf-g4-p2-input',
        type: 'input-boxes',
        content: `
## Your Turn ✏️

Type just the **numerator** of each answer (the bottom number is given for you).

1) $\\frac{1}{6} + \\frac{4}{6} = \\frac{?}{6}$

2) $\\frac{5}{9} + \\frac{2}{9} = \\frac{?}{9}$

3) $\\frac{8}{11} - \\frac{3}{11} = \\frac{?}{11}$
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7', '5'],
          hint1: 'For adding, add the numerators. For subtracting, subtract them.',
          hint2: 'The denominator never changes — you only need the new top number.',
          explanation:
            '1) $1 + 4 = 5$, so $\\frac{5}{6}$. 2) $5 + 2 = 7$, so $\\frac{7}{9}$. 3) $8 - 3 = 5$, so $\\frac{5}{11}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'adding-subtracting-fractions-grade4',
    sections: [
      {
        id: 'asf-g4-p3-mcq',
        type: 'multiple-choice',
        content: `
# 🤝 Guided Practice

Work through these two questions. Take your time and remember the steps!
        `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{2}{9} + \\frac{5}{9}$?',
              options: ['$\\frac{7}{18}$', '$\\frac{7}{9}$', '$\\frac{10}{9}$', '$\\frac{3}{9}$'],
              correctAnswer: 1,
              explanation:
                'Add the numerators: $2 + 5 = 7$. Keep the denominator $9$. The answer is $\\frac{7}{9}$, which is already simplified.',
            },
            {
              question: 'What is $\\frac{6}{8} - \\frac{2}{8}$ in simplest form?',
              options: ['$\\frac{4}{8}$', '$\\frac{1}{2}$', '$\\frac{4}{0}$', '$\\frac{8}{8}$'],
              correctAnswer: 1,
              explanation:
                'Subtract the numerators: $6 - 2 = 4$, giving $\\frac{4}{8}$. Both numbers divide by $4$, so $\\frac{4}{8} = \\frac{1}{2}$.',
            },
          ],
        },
      },
      {
        id: 'asf-g4-p3-dropdown',
        type: 'dropdown-select',
        content: `
## Fill in the Blanks 🔍

Choose the correct value for each blank.

- $\\frac{3}{10} + \\frac{4}{10} = \\frac{?}{10}$
- $\\frac{7}{12} - \\frac{2}{12} = \\frac{?}{12}$
        `,
        exercise: {
          dropdowns: [
            { label: 'For $\\frac{3}{10} + \\frac{4}{10}$, the new numerator is', options: ['5', '7', '12', '70'] },
            { label: 'For $\\frac{7}{12} - \\frac{2}{12}$, the new numerator is', options: ['9', '5', '14', '0'] },
          ],
          correctAnswers: ['7', '5'],
          hint1: 'Add or subtract only the top numbers; the bottom number stays the same.',
          explanation:
            'First blank: $3 + 4 = 7$, so the answer is $\\frac{7}{10}$. Second blank: $7 - 2 = 5$, so the answer is $\\frac{5}{12}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'adding-subtracting-fractions-grade4',
    sections: [
      {
        id: 'asf-g4-p4-context',
        type: 'text',
        content: `
# 🌍 Fractions in Real Life

Fractions show up everywhere — in pizza, pies, measuring cups, and even how far you've walked!

## Pizza Party 🍕

Imagine a pizza cut into **8 equal slices**. Each slice is $\\frac{1}{8}$ of the pizza.

- Maria eats $\\frac{3}{8}$ of the pizza.
- Her brother eats $\\frac{2}{8}$ of the pizza.

**How much did they eat together?**

$$\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$$

Together they ate $\\frac{5}{8}$ of the pizza.

**How much is left over?** The whole pizza is $\\frac{8}{8}$, so:

$$\\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$$

There's $\\frac{3}{8}$ of the pizza left for later! 😋
        `,
      },
      {
        id: 'asf-g4-p4-input',
        type: 'input-boxes',
        content: `
## Word Problem Workout ✏️

A water bottle is marked in fourths. Type just the **numerator** for each answer.

1) Sam drinks $\\frac{1}{4}$ of his bottle in the morning and $\\frac{2}{4}$ at lunch. How much has he drunk in all? $\\frac{?}{4}$

2) A ribbon is $\\frac{7}{12}$ of a meter. You cut off $\\frac{4}{12}$ of a meter. How much ribbon is left? $\\frac{?}{12}$

3) Lily reads $\\frac{2}{6}$ of her book on Monday and $\\frac{3}{6}$ on Tuesday. How much has she read total? $\\frac{?}{6}$
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '5'],
          hint1: 'Adding means combine; subtracting (cut off, left over) means take away.',
          hint2: 'Only the top numbers change. Keep each denominator the same.',
          explanation:
            '1) $1 + 2 = 3$, so $\\frac{3}{4}$. 2) $7 - 4 = 3$, so $\\frac{3}{12}$ of a meter is left. 3) $2 + 3 = 5$, so $\\frac{5}{6}$.',
        },
      },
      {
        id: 'asf-g4-p4-mcq',
        type: 'multiple-choice',
        content: `
## Story Check 📖
        `,
        exercise: {
          questions: [
            {
              question:
                'A garden is split into $10$ equal rows. Dad plants carrots in $\\frac{4}{10}$ of the rows and tomatoes in $\\frac{3}{10}$ of the rows. What fraction of the garden has vegetables?',
              options: ['$\\frac{7}{20}$', '$\\frac{1}{10}$', '$\\frac{7}{10}$', '$\\frac{12}{10}$'],
              correctAnswer: 2,
              explanation:
                'Add the numerators: $4 + 3 = 7$, and keep the denominator $10$. So $\\frac{7}{10}$ of the garden has vegetables.',
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
    topicSlug: 'adding-subtracting-fractions-grade4',
    sections: [
      {
        id: 'asf-g4-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

You've learned how to add and subtract fractions with like denominators. Here's everything in one quick table:

| Step | What to do | Example |
|------|-----------|---------|
| 1. Check | Make sure denominators **match** | $\\frac{2}{5}$ and $\\frac{1}{5}$ ✅ |
| 2. Combine | Add or subtract the **numerators** | $2 + 1 = 3$ |
| 3. Keep | The denominator **stays the same** | bottom stays $5$ |
| 4. Simplify | Reduce to **smallest numbers** | $\\frac{4}{8} = \\frac{1}{2}$ |

**Bonus idea — fractions greater than 1.** Sometimes the answer is *more than a whole*. For example, $\\frac{5}{3}$ means $5 \\div 3 = 1$ remainder $2$, so $\\frac{5}{3} = 1\\frac{2}{3}$.

> 📌 **Remember the rule:** You can only add or subtract fractions that have the **same denominator**. In Grade 5, you'll learn how to handle different denominators!
        `,
      },
      {
        id: 'asf-g4-p5-challenge',
        type: 'multiple-choice',
        content: `
## Final Challenge 🚀

Mix it all together!
        `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{4}{6} + \\frac{1}{6}$?',
              options: ['$\\frac{5}{12}$', '$\\frac{5}{6}$', '$\\frac{3}{6}$', '$\\frac{4}{6}$'],
              correctAnswer: 1,
              explanation:
                'Add the numerators: $4 + 1 = 5$, and keep the denominator $6$. The answer is $\\frac{5}{6}$, already in simplest form.',
            },
            {
              question:
                'Which fraction is the same as $\\frac{7}{4}$ written as a mixed number?',
              options: ['$1\\frac{3}{4}$', '$3\\frac{1}{4}$', '$7\\frac{1}{4}$', '$2\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation:
                'Divide the numerator by the denominator: $7 \\div 4 = 1$ remainder $3$. So $\\frac{7}{4} = 1\\frac{3}{4}$.',
            },
          ],
        },
      },
    ],
  },
]
