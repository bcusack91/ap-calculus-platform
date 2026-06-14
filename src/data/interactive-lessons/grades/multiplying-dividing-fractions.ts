import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'multiplying-dividing-fractions',
    sections: [
      {
        id: 'muldiv-frac-p1-intro',
        type: 'text',
        content: `
# ✖️ Multiplying Fractions

Good news: multiplying fractions is one of the **easiest** things you can do with fractions. You do **not** need a common denominator like you do for adding or subtracting. You just go **straight across**.

## The Rule

To multiply two fractions:

1. **Multiply the numerators** (the top numbers)
2. **Multiply the denominators** (the bottom numbers)
3. **Simplify** the answer if you can

Written as a formula:

$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$

The tops go across, and the bottoms go across. That's the whole trick!
        `,
      },
      {
        id: 'muldiv-frac-p1-worked',
        type: 'text',
        content: `
## A First Example

Let's multiply $\\frac{1}{2} \\times \\frac{1}{3}$.

- **Step 1 — Numerators:** $1 \\times 1 = 1$
- **Step 2 — Denominators:** $2 \\times 3 = 6$
- **Step 3 — Simplify:** $\\frac{1}{6}$ is already in lowest terms.

$$\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$

**Picture it:** if you take *half* of one-third of a pizza, you get one-sixth of the whole pizza. The answer is **smaller** than what you started with — that always happens when you take a "part of a part."

## What "of" Means 🤔

When a problem says **"of,"** that is a clue to **multiply**.

- $\\frac{1}{2} \\times 8 = 4$ → **half of** 8 is 4
- $\\frac{1}{4} \\times 12 = 3$ → **one-fourth of** 12 is 3
        `,
      },
      {
        id: 'muldiv-frac-p1-simplify',
        type: 'text',
        content: `
## A Smart Shortcut: Cancel First ✂️

Sometimes you can **cancel a common factor before you multiply**. This keeps the numbers small.

Look at $\\frac{2}{3} \\times \\frac{3}{4}$. The number **3** is on top in one fraction and on the bottom in the other, so we can cancel both 3s:

$$\\frac{2}{\\cancel{3}} \\times \\frac{\\cancel{3}}{4} = \\frac{2}{4} = \\frac{1}{2}$$

You get the same answer either way — canceling first just makes the multiplication easier.
        `,
      },
      {
        id: 'muldiv-frac-p1-check',
        type: 'multiple-choice',
        content: `
**Concept Check** 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'To multiply two fractions, what do you do?',
              options: [
                'Find a common denominator first, then add the tops',
                'Multiply the numerators across, then multiply the denominators across',
                'Flip the second fraction, then multiply',
                'Add the numerators and add the denominators',
              ],
              correctAnswer: 1,
              explanation:
                'Multiplying fractions needs no common denominator. You multiply the top numbers across and the bottom numbers across, then simplify.',
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
    topicSlug: 'multiplying-dividing-fractions',
    sections: [
      {
        id: 'muldiv-frac-p2-examples',
        type: 'text',
        content: `
# 📝 Worked Examples: Multiplying

## Example 1 — Multiply, then simplify

$\\frac{2}{3} \\times \\frac{3}{4}$

- **Numerators:** $2 \\times 3 = 6$
- **Denominators:** $3 \\times 4 = 12$
- **Simplify:** $\\frac{6}{12} = \\frac{1}{2}$

$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2}$$

## Example 2 — Whole number times a fraction

To multiply a **whole number** by a fraction, write the whole number over **1**.

$3 \\times \\frac{2}{5} = \\frac{3}{1} \\times \\frac{2}{5}$

- **Numerators:** $3 \\times 2 = 6$
- **Denominators:** $1 \\times 5 = 5$
- **Result:** $\\frac{6}{5} = 1\\frac{1}{5}$

## Example 3 — Mixed numbers

First change each mixed number into an **improper fraction**, then multiply.

$1\\frac{1}{2} \\times 2\\frac{1}{3}$

- Convert: $1\\frac{1}{2} = \\frac{3}{2}$ and $2\\frac{1}{3} = \\frac{7}{3}$
- Multiply: $\\frac{3}{2} \\times \\frac{7}{3} = \\frac{21}{6}$
- Simplify: $\\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$
        `,
      },
      {
        id: 'muldiv-frac-p2-input',
        type: 'input-boxes',
        content: `
## Your Turn ✍️

Solve $\\frac{3}{5} \\times \\frac{2}{7}$.

Fill in the numerator, the denominator, and the final fraction. (This one does not simplify, so the final answer is just the result.)
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '35', '6/35'],
          hint1: 'Box 1: multiply the tops, $3 \\times 2$. Box 2: multiply the bottoms, $5 \\times 7$.',
          hint2: 'Box 3 is the two answers written as a fraction: top over bottom.',
          explanation:
            'Numerators: $3 \\times 2 = 6$. Denominators: $5 \\times 7 = 35$. So $\\frac{3}{5} \\times \\frac{2}{7} = \\frac{6}{35}$, which cannot be simplified.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice (multiply + divide intro)
  // ===================================================================
  {
    topicSlug: 'multiplying-dividing-fractions',
    sections: [
      {
        id: 'muldiv-frac-p3-divide-intro',
        type: 'text',
        content: `
# ➗ Dividing Fractions: Keep, Change, Flip

Dividing fractions uses a trick called **Keep–Change–Flip (KCF)**:

1. **Keep** the first fraction the same.
2. **Change** the $\\div$ sign into a $\\times$ sign.
3. **Flip** the second fraction upside down (its **reciprocal**).

Then just **multiply**!

**Reciprocal** means you swap the top and bottom:

| Fraction | Reciprocal |
| --- | --- |
| $\\frac{2}{3}$ | $\\frac{3}{2}$ |
| $\\frac{4}{7}$ | $\\frac{7}{4}$ |
| $5 = \\frac{5}{1}$ | $\\frac{1}{5}$ |

**Example:** $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. (How many $\\frac{1}{4}$s fit in $\\frac{1}{2}$? Two!)
        `,
      },
      {
        id: 'muldiv-frac-p3-mc',
        type: 'multiple-choice',
        content: `
## Practice ✅
        `,
        exercise: {
          questions: [
            {
              question: 'What is the reciprocal of $\\frac{3}{8}$?',
              options: ['$\\frac{8}{3}$', '$\\frac{3}{8}$', '$\\frac{1}{8}$', '$\\frac{8}{8}$'],
              correctAnswer: 0,
              explanation:
                'To find a reciprocal, swap the top and bottom. The reciprocal of $\\frac{3}{8}$ is $\\frac{8}{3}$.',
            },
            {
              question: 'Using Keep–Change–Flip, $\\frac{2}{3} \\div \\frac{4}{5}$ becomes which multiplication?',
              options: [
                '$\\frac{2}{3} \\times \\frac{4}{5}$',
                '$\\frac{3}{2} \\times \\frac{4}{5}$',
                '$\\frac{2}{3} \\times \\frac{5}{4}$',
                '$\\frac{3}{2} \\times \\frac{5}{4}$',
              ],
              correctAnswer: 2,
              explanation:
                'Keep $\\frac{2}{3}$, change $\\div$ to $\\times$, and flip $\\frac{4}{5}$ to $\\frac{5}{4}$. That gives $\\frac{2}{3} \\times \\frac{5}{4}$.',
            },
          ],
        },
      },
      {
        id: 'muldiv-frac-p3-dropdown',
        type: 'dropdown-select',
        content: `
## Finish Each Problem 🔽

Choose the correct final answer for each one.

- $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = ?$
- $\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = ?$
        `,
        exercise: {
          dropdowns: [
            {
              label: '$\\frac{3}{4} \\div \\frac{1}{2}$ equals',
              options: ['$\\frac{3}{4}$', '$1\\frac{1}{2}$', '$\\frac{2}{3}$', '$2$'],
            },
            {
              label: '$\\frac{5}{6} \\div \\frac{2}{3}$ equals',
              options: ['$\\frac{5}{6}$', '$\\frac{2}{3}$', '$1\\frac{1}{4}$', '$2$'],
            },
          ],
          correctAnswers: ['$1\\frac{1}{2}$', '$1\\frac{1}{4}$'],
          hint1: 'After Keep–Change–Flip and multiplying, simplify the fraction and turn it into a mixed number if it is bigger than 1.',
          explanation:
            'First: $\\frac{6}{4} = \\frac{3}{2} = 1\\frac{1}{2}$. Second: $\\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'multiplying-dividing-fractions',
    sections: [
      {
        id: 'muldiv-frac-p4-context',
        type: 'text',
        content: `
# 🌍 Fractions in Real Life

Fractions show up all the time in cooking, building, and sharing. Remember the two clues:

- **"of" usually means multiply.** *Half of* a recipe → multiply by $\\frac{1}{2}$.
- **"split into equal parts" usually means divide.** Sharing a board into equal pieces → divide.

**Recipe example:** A recipe uses $\\frac{3}{4}$ cup of sugar, but you only want to make **half** the recipe.

$$\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8} \\text{ cup of sugar}$$

**Sharing example:** You have $\\frac{3}{4}$ of a pizza and want to split it equally between **2** people.

$$\\frac{3}{4} \\div 2 = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8} \\text{ each}$$
        `,
      },
      {
        id: 'muldiv-frac-p4-input',
        type: 'input-boxes',
        content: `
## Word Problem ✍️

A ribbon is $\\frac{4}{5}$ of a meter long. You cut it into **4** equal pieces.

Use Keep–Change–Flip on $\\frac{4}{5} \\div 4$.

- **Box 1:** the result *before* simplifying, written as a fraction (numerator/denominator).
- **Box 2:** that same answer *simplified*, written as a fraction.
        `,
        exercise: {
          boxes: 2,
          correctAnswers: ['4/20', '1/5'],
          hint1: 'Write 4 as $\\frac{4}{1}$, flip it to $\\frac{1}{4}$, then multiply: $\\frac{4}{5} \\times \\frac{1}{4}$.',
          hint2: '$4 \\times 1 = 4$ on top and $5 \\times 4 = 20$ on the bottom. Then simplify $\\frac{4}{20}$ by dividing both by 4.',
          explanation:
            '$\\frac{4}{5} \\div 4 = \\frac{4}{5} \\times \\frac{1}{4} = \\frac{4}{20} = \\frac{1}{5}$. Each piece is $\\frac{1}{5}$ of a meter.',
        },
      },
      {
        id: 'muldiv-frac-p4-mc',
        type: 'multiple-choice',
        content: `
## Apply It 🍪
        `,
        exercise: {
          questions: [
            {
              question:
                'A batch of cookies needs $\\frac{2}{3}$ cup of flour. If you make $3$ batches, how much flour do you need?',
              options: ['$2$ cups', '$\\frac{2}{9}$ cup', '$1$ cup', '$\\frac{6}{3}$ minus $1$'],
              correctAnswer: 0,
              explanation:
                '$3 \\times \\frac{2}{3} = \\frac{3}{1} \\times \\frac{2}{3} = \\frac{6}{3} = 2$ cups of flour.',
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
    topicSlug: 'multiplying-dividing-fractions',
    sections: [
      {
        id: 'muldiv-frac-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

You now know how to **multiply** and **divide** fractions. Here is the whole idea on one card:

| Operation | What to do | Example |
| --- | --- | --- |
| **Multiply** | Tops across, bottoms across, then simplify | $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{2}$ |
| **Divide** | **Keep, Change, Flip**, then multiply | $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = 2$ |
| **Whole number** | Put it over $1$ | $3 = \\frac{3}{1}$ |
| **Reciprocal** | Swap top and bottom | $\\frac{4}{7} \\to \\frac{7}{4}$ |

**Remember:** multiplying by a fraction less than 1 makes things **smaller**, and dividing by a fraction less than 1 makes things **bigger**. Let's mix it all together!
        `,
      },
      {
        id: 'muldiv-frac-p5-mc',
        type: 'multiple-choice',
        content: `
## Mixed Challenge 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{4}{5} \\times \\frac{5}{8}$? (Try canceling the 5s first.)',
              options: ['$\\frac{1}{2}$', '$\\frac{9}{13}$', '$\\frac{20}{40}$ then bigger', '$\\frac{4}{8}$ stays unsimplified'],
              correctAnswer: 0,
              explanation:
                'Cancel the 5s: $\\frac{4}{\\cancel{5}} \\times \\frac{\\cancel{5}}{8} = \\frac{4}{8} = \\frac{1}{2}$.',
            },
            {
              question: 'What is $\\frac{3}{4} \\div \\frac{1}{2}$?',
              options: ['$\\frac{3}{8}$', '$1\\frac{1}{2}$', '$\\frac{1}{2}$', '$\\frac{3}{4}$'],
              correctAnswer: 1,
              explanation:
                'Keep–Change–Flip: $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1\\frac{1}{2}$.',
            },
          ],
        },
      },
    ],
  },
]
