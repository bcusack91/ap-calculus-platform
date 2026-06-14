import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'rational-number-operations',
    sections: [
      {
        id: 'rational-number-operations-p1-intro',
        type: 'text' as const,
        content: `
# 🔢 Rational Number Operations

**Part 1 of 5 — Concept Introduction**

Numbers are everywhere: temperatures below zero, slices of a pizza, money you owe a friend, the time you ran your last lap. To handle all of these, we need a family of numbers called **rational numbers**.

## What Is a Rational Number?

A **rational number** is any number that can be written as a fraction $\\frac{a}{b}$, where $a$ and $b$ are **integers** and $b \\neq 0$ (you can never divide by zero!).

This one definition pulls together a lot of numbers you already know:

- **Integers:** $5 = \\frac{5}{1}$, \\; $-3 = \\frac{-3}{1}$, \\; $0 = \\frac{0}{1}$
- **Fractions:** $\\frac{2}{3}$, \\; $-\\frac{5}{8}$, \\; $\\frac{7}{4}$
- **Terminating decimals:** $0.5 = \\frac{1}{2}$, \\; $0.75 = \\frac{3}{4}$
- **Repeating decimals:** $0.333\\ldots = \\frac{1}{3}$, \\; $0.666\\ldots = \\frac{2}{3}$
    `
      },
      {
        id: 'rational-number-operations-p1-not-rational',
        type: 'text' as const,
        content: `
## What Is NOT Rational? ⭐

A few special numbers can **never** be written as a clean fraction of integers. Their decimals go on forever **without repeating**:

- $\\pi = 3.14159\\ldots$ (never ends, never repeats)
- $\\sqrt{2} = 1.41421\\ldots$ (never ends, never repeats)

These are called **irrational** numbers. For this whole lesson, every number we touch will be rational, so we can always think of it as a fraction.

| Number | Rational? | Why |
|--------|-----------|-----|
| $-7$ | ✅ Yes | $-7 = \\frac{-7}{1}$ |
| $0.25$ | ✅ Yes | $0.25 = \\frac{1}{4}$ |
| $0.272727\\ldots$ | ✅ Yes | The pattern repeats |
| $\\pi$ | ❌ No | Never ends, never repeats |
| $\\sqrt{2}$ | ❌ No | Never ends, never repeats |
    `
      },
      {
        id: 'rational-number-operations-p1-four-operations',
        type: 'text' as const,
        content: `
## The Four Operations — A Preview

Because every rational number can be written as a fraction, the rules you learn for fractions work for **all** of them. Here is the big picture you'll master:

- **Add / Subtract:** get a **common denominator**, then combine the numerators.
- **Multiply:** multiply across — numerators together and denominators together (no common denominator needed!).
- **Divide:** **keep, change, flip** — multiply by the reciprocal of the second fraction.

And don't forget the **sign rules** you already know from integers:

- A **negative** times or divided by a **negative** gives a **positive**.
- A **negative** times or divided by a **positive** gives a **negative**.

We'll use all of these as we go. 💪
    `
      },
      {
        id: 'rational-number-operations-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you can tell a rational number from an irrational one.
    `,
        exercise: {
          questions: [
            {
              question: 'Which of these numbers is **NOT** a rational number?',
              options: [
                '$\\sqrt{2}$',
                '$-\\frac{5}{8}$',
                '$0.75$',
                '$0.333\\ldots$'
              ],
              correctAnswer: 0,
              explanation: '$\\sqrt{2} = 1.41421\\ldots$ never ends and never repeats, so it cannot be written as a fraction of integers. The other three can all be written as fractions, so they are rational.'
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
    topicSlug: 'rational-number-operations',
    sections: [
      {
        id: 'rational-number-operations-p2-add-sub',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's work through one example of each operation, slowly and carefully.

## Example 1: Adding with Different Denominators

Compute $\\frac{1}{3} + \\frac{1}{4}$.

**Step 1 — Find the LCD (Least Common Denominator).** The smallest number both $3$ and $4$ divide into is $12$.

**Step 2 — Rewrite each fraction with denominator $12$:**

$$\\frac{1}{3} = \\frac{4}{12} \\qquad \\frac{1}{4} = \\frac{3}{12}$$

**Step 3 — Add the numerators:**

$$\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

**Answer:** $\\frac{7}{12}$ ✅

## Example 2: Subtracting a Negative

Compute $\\frac{2}{3} - \\left(-\\frac{1}{3}\\right)$.

Subtracting a negative is the same as **adding a positive**:

$$\\frac{2}{3} - \\left(-\\frac{1}{3}\\right) = \\frac{2}{3} + \\frac{1}{3} = \\frac{3}{3} = 1$$

**Answer:** $1$ ✅
    `
      },
      {
        id: 'rational-number-operations-p2-mult-div',
        type: 'text' as const,
        content: `
## Example 3: Multiplying (Simplify First!)

Compute $\\frac{4}{9} \\times \\frac{3}{8}$.

**Tip:** Cancel common factors *before* multiplying to keep numbers small.

- $4$ and $8$ share a factor of $4$: \\; $\\frac{4}{8} = \\frac{1}{2}$
- $3$ and $9$ share a factor of $3$: \\; $\\frac{3}{9} = \\frac{1}{3}$

Now multiply across:

$$\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1 \\times 1}{3 \\times 2} = \\frac{1}{6}$$

**Answer:** $\\frac{1}{6}$ ✅

## Example 4: Dividing — Keep, Change, Flip

Compute $\\frac{2}{5} \\div \\frac{3}{4}$.

**Keep** the first fraction, **change** $\\div$ to $\\times$, and **flip** the second fraction (its reciprocal):

$$\\frac{2}{5} \\div \\frac{3}{4} = \\frac{2}{5} \\times \\frac{4}{3} = \\frac{8}{15}$$

**Answer:** $\\frac{8}{15}$ ✅
    `
      },
      {
        id: 'rational-number-operations-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** ✏️

Work through this three-step addition: $\\frac{5}{6} + \\frac{1}{4}$.

- **Box 1:** What is the LCD of $6$ and $4$?
- **Box 2:** Rewrite $\\frac{5}{6}$ with that denominator — type the new **numerator** only.
- **Box 3:** Write the final sum as a fraction (it does not need to be simplified).
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '10', '13/12'],
          hint1: 'The LCD is the smallest number both $6$ and $4$ divide into evenly. List multiples of $6$: $6, 12, 18\\ldots$ — which one is also a multiple of $4$?',
          hint2: 'To rewrite $\\frac{5}{6}$ over $12$, multiply top and bottom by $2$, giving $\\frac{10}{12}$. Also $\\frac{1}{4} = \\frac{3}{12}$, so add the numerators: $10 + 3 = 13$.',
          explanation: 'The LCD is $12$. Then $\\frac{5}{6} = \\frac{10}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$, so the sum is $\\frac{10}{12} + \\frac{3}{12} = \\frac{13}{12}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'rational-number-operations',
    sections: [
      {
        id: 'rational-number-operations-p3-intro',
        type: 'text' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Time to practice all four operations with a little support. Take each problem one step at a time, and watch the signs!
    `
      },
      {
        id: 'rational-number-operations-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
## Choose the Correct Answer 🎯
    `,
        exercise: {
          questions: [
            {
              question: 'What is $-\\frac{3}{4} - \\frac{1}{4}$?',
              options: [
                '$-1$',
                '$-\\frac{2}{4}$',
                '$\\frac{1}{2}$',
                '$-\\frac{4}{8}$'
              ],
              correctAnswer: 0,
              explanation: 'The denominators match, so combine the numerators: $-3 - 1 = -4$, giving $\\frac{-4}{4} = -1$.'
            },
            {
              question: 'What is $\\frac{2}{3} \\times \\frac{3}{5}$ in simplest form?',
              options: [
                '$\\frac{6}{15}$',
                '$\\frac{2}{5}$',
                '$\\frac{5}{8}$',
                '$\\frac{6}{8}$'
              ],
              correctAnswer: 1,
              explanation: 'Multiply across: $\\frac{2 \\times 3}{3 \\times 5} = \\frac{6}{15}$. Both $6$ and $15$ share a factor of $3$, so $\\frac{6}{15} = \\frac{2}{5}$.'
            }
          ]
        }
      },
      {
        id: 'rational-number-operations-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
## Fill in the Blanks ⬇️

Pick the correct value for each calculation.
    `,
        exercise: {
          dropdowns: [
            {
              label: '$\\frac{1}{2} \\div \\frac{1}{4}$ equals:',
              options: ['$\\frac{1}{8}$', '$2$', '$\\frac{1}{2}$', '$8$']
            },
            {
              label: '$-\\frac{2}{5} + \\frac{4}{5}$ equals:',
              options: ['$\\frac{2}{5}$', '$-\\frac{6}{5}$', '$\\frac{6}{5}$', '$-\\frac{2}{5}$']
            }
          ],
          correctAnswers: ['$2$', '$\\frac{2}{5}$'],
          hint1: 'To divide, keep-change-flip: $\\frac{1}{2} \\times \\frac{4}{1}$. To add fractions with the same denominator, just add the numerators: $-2 + 4$.',
          explanation: '$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. And $-\\frac{2}{5} + \\frac{4}{5} = \\frac{-2 + 4}{5} = \\frac{2}{5}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'rational-number-operations',
    sections: [
      {
        id: 'rational-number-operations-p4-context',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Application & Word Problems**

Rational numbers show up in real life all the time — in recipes, money, distances, and temperatures. The trick is to spot which operation the story is asking for.

## A Baking Story 🧁

Maria is making cookies. The recipe needs $\\frac{3}{4}$ cup of sugar for the dough and $\\frac{1}{4}$ cup more for the topping.

To find the **total** sugar, she **adds**:

$$\\frac{3}{4} + \\frac{1}{4} = \\frac{4}{4} = 1 \\text{ cup}$$

## A Temperature Story 🌡️

At noon the temperature was $\\frac{1}{2}$ degree above zero. By midnight it had dropped $\\frac{5}{2}$ degrees. The new temperature is:

$$\\frac{1}{2} - \\frac{5}{2} = \\frac{1 - 5}{2} = \\frac{-4}{2} = -2 \\text{ degrees}$$

So it ended at $-2$ degrees — below zero! Watch how subtraction can take us into negative numbers.
    `
      },
      {
        id: 'rational-number-operations-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** ✏️

A recipe calls for $\\frac{2}{3}$ cup of flour. You want to make **half** of the recipe, so you multiply by $\\frac{1}{2}$.

- **Box 1:** Multiply the numerators: $2 \\times 1 = ?$
- **Box 2:** Multiply the denominators: $3 \\times 2 = ?$
- **Box 3:** Write how many cups of flour you need as a fraction.
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '6', '2/6'],
          hint1: 'To multiply fractions, multiply straight across: numerators on top, denominators on the bottom.',
          hint2: '$\\frac{2}{3} \\times \\frac{1}{2}$ means $\\frac{2 \\times 1}{3 \\times 2}$. The numerator is $2$ and the denominator is $6$, giving $\\frac{2}{6}$ (which also simplifies to $\\frac{1}{3}$).',
          explanation: 'Half of $\\frac{2}{3}$ is $\\frac{2}{3} \\times \\frac{1}{2} = \\frac{2 \\times 1}{3 \\times 2} = \\frac{2}{6}$, which equals $\\frac{1}{3}$ cup of flour.'
        }
      },
      {
        id: 'rational-number-operations-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
## Real-World Check 🎯
    `,
        exercise: {
          questions: [
            {
              question: 'A board is $\\frac{7}{8}$ meter long. You cut off $\\frac{3}{8}$ meter. How much board is left?',
              options: [
                '$\\frac{4}{8} = \\frac{1}{2}$ meter',
                '$\\frac{10}{8}$ meter',
                '$\\frac{4}{16}$ meter',
                '$\\frac{21}{64}$ meter'
              ],
              correctAnswer: 0,
              explanation: '"Cut off" means subtract: $\\frac{7}{8} - \\frac{3}{8} = \\frac{7 - 3}{8} = \\frac{4}{8}$, which simplifies to $\\frac{1}{2}$ meter.'
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
    topicSlug: 'rational-number-operations',
    sections: [
      {
        id: 'rational-number-operations-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You've learned to add, subtract, multiply, and divide every kind of rational number. Here is the whole toolkit in one place:

| Operation | What to Do | Example |
|-----------|------------|---------|
| **Add / Subtract** | Get a common denominator, then combine numerators | $\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$ |
| **Multiply** | Multiply across (simplify first if you can) | $\\frac{2}{3} \\times \\frac{3}{5} = \\frac{2}{5}$ |
| **Divide** | Keep, change, flip (multiply by the reciprocal) | $\\frac{2}{5} \\div \\frac{3}{4} = \\frac{8}{15}$ |
| **Signs** | Same signs → positive; different signs → negative | $-\\frac{1}{2} \\times -\\frac{1}{2} = \\frac{1}{4}$ |

**Remember:** subtracting a negative is the same as adding a positive! Now let's mix it all together for a final challenge. 🚀
    `
      },
      {
        id: 'rational-number-operations-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
## Mixed Mastery Challenge 🎯

These questions blend every operation. Read carefully and watch the signs!
    `,
        exercise: {
          questions: [
            {
              question: 'What is $-\\frac{1}{2} \\div \\frac{1}{4}$?',
              options: [
                '$-2$',
                '$2$',
                '$-\\frac{1}{8}$',
                '$\\frac{1}{8}$'
              ],
              correctAnswer: 0,
              explanation: 'Keep-change-flip: $-\\frac{1}{2} \\times \\frac{4}{1} = -\\frac{4}{2} = -2$. A negative divided by a positive is negative.'
            },
            {
              question: 'What is $\\frac{5}{6} - \\frac{1}{3}$ in simplest form?',
              options: [
                '$\\frac{4}{3}$',
                '$\\frac{1}{2}$',
                '$\\frac{4}{6}$',
                '$\\frac{6}{9}$'
              ],
              correctAnswer: 1,
              explanation: 'The LCD is $6$, so $\\frac{1}{3} = \\frac{2}{6}$. Then $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6}$, which simplifies to $\\frac{1}{2}$.'
            }
          ]
        }
      }
    ]
  }
]
