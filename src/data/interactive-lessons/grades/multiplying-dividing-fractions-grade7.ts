import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-fractions-grade7',
    sections: [
      {
        id: 'mult-div-fractions-g7-p1-intro',
        type: 'text' as const,
        content: `
# ✖️➗ Multiplying and Dividing Fractions

**Part 1 of 5 — Concept Introduction**

In Grade 7 you put fractions to work. Two of the most powerful skills are **multiplying** and **dividing** them. The best part? Both come down to multiplying — once you learn one little trick for division, you are done.

## Multiplying Fractions

To multiply two fractions, you do **not** need a common denominator. Just follow three steps:

1. **Multiply the numerators** (the tops).
2. **Multiply the denominators** (the bottoms).
3. **Simplify** the result.

In symbols:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example:**

$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$$

Since $8$ and $15$ share no common factors, $\\frac{8}{15}$ is already in simplest form. 🎉
    `
      },
      {
        id: 'mult-div-fractions-g7-p1-reciprocal',
        type: 'text' as const,
        content: `
## The Reciprocal 🔄

The **reciprocal** of a fraction is what you get when you **flip it upside down** — the top and bottom numbers swap places.

| Number | Reciprocal |
|--------|-----------|
| $\\frac{3}{4}$ | $\\frac{4}{3}$ |
| $\\frac{2}{5}$ | $\\frac{5}{2}$ |
| $\\frac{1}{8}$ | $\\frac{8}{1} = 8$ |
| $5 = \\frac{5}{1}$ | $\\frac{1}{5}$ |

**Key idea:** A whole number like $5$ secretly equals $\\frac{5}{1}$, so its reciprocal is $\\frac{1}{5}$.

The reciprocal is the secret ingredient for **dividing** fractions, which you will use next.
    `
      },
      {
        id: 'mult-div-fractions-g7-p1-dividing',
        type: 'text' as const,
        content: `
## Dividing Fractions

Here is the one trick you need: **to divide by a fraction, multiply by its reciprocal** (flip the second fraction).

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Example:**

$$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$

Notice that the division turned into a multiplication the instant we flipped the second fraction. Many people remember this as **"Keep, Change, Flip"**: *keep* the first fraction, *change* $\\div$ to $\\times$, and *flip* the second fraction.
    `
      },
      {
        id: 'mult-div-fractions-g7-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand the division rule.
    `,
        exercise: {
          questions: [
            {
              question: 'To compute $\\frac{5}{6} \\div \\frac{3}{4}$, what should you do?',
              options: [
                'Multiply $\\frac{5}{6}$ by the reciprocal of $\\frac{3}{4}$, which is $\\frac{4}{3}$',
                'Multiply $\\frac{5}{6}$ by $\\frac{3}{4}$ directly',
                'Flip the first fraction to get $\\frac{6}{5}$',
                'Find a common denominator first'
              ],
              correctAnswer: 0,
              explanation: 'Dividing by a fraction means multiplying by its reciprocal. Flip the second fraction $\\frac{3}{4}$ to $\\frac{4}{3}$, then multiply.'
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
    topicSlug: 'multiplying-dividing-fractions-grade7',
    sections: [
      {
        id: 'mult-div-fractions-g7-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's work two problems slowly, one step at a time.

## Example 1: Multiplying Mixed Numbers

Solve $2\\frac{1}{3} \\times 1\\frac{1}{2}$.

**Step 1 — Convert to improper fractions.** Always do this first with mixed numbers!

- $2\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$
- $1\\frac{1}{2} = \\frac{1 \\times 2 + 1}{2} = \\frac{3}{2}$

**Step 2 — Multiply straight across:**

$$\\frac{7}{3} \\times \\frac{3}{2} = \\frac{7 \\times 3}{3 \\times 2} = \\frac{21}{6}$$

**Step 3 — Simplify** by dividing top and bottom by $3$:

$$\\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$$

So $2\\frac{1}{3} \\times 1\\frac{1}{2} = 3\\frac{1}{2}$. ✅
    `
      },
      {
        id: 'mult-div-fractions-g7-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: Dividing Fractions

Solve $\\frac{3}{4} \\div \\frac{2}{5}$ using **Keep, Change, Flip**.

**Keep** the first fraction: $\\frac{3}{4}$

**Change** the sign: $\\div$ becomes $\\times$

**Flip** the second fraction: $\\frac{2}{5}$ becomes $\\frac{5}{2}$

**Multiply:**

$$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{3 \\times 5}{4 \\times 2} = \\frac{15}{8}$$

Since $\\frac{15}{8}$ is an improper fraction, rewrite it as a mixed number. $8$ goes into $15$ once with $7$ left over:

$$\\frac{15}{8} = 1\\frac{7}{8}$$

So $\\frac{3}{4} \\div \\frac{2}{5} = 1\\frac{7}{8}$. 🎉
    `
      },
      {
        id: 'mult-div-fractions-g7-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve $\\frac{2}{3} \\div \\frac{4}{9}$ step by step. Type each answer in the box.

1) After you **flip** $\\frac{4}{9}$, what is the new second fraction? (Type it like $9/4$.)

2) Multiply $\\frac{2}{3} \\times \\frac{9}{4}$ **before** simplifying. What is the result? (Type it like $18/12$.)

3) Write the final simplified answer. (Type it like $3/2$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['9/4', '18/12', '3/2'],
          hint1: 'To flip a fraction, swap its top and bottom numbers.',
          hint2: 'Multiply straight across: top × top, bottom × bottom. Then divide top and bottom by 6 to simplify.',
          explanation: 'Flip $\\frac{4}{9}$ to $\\frac{9}{4}$. Then $\\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12}$, which simplifies to $\\frac{3}{2}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-fractions-grade7',
    sections: [
      {
        id: 'mult-div-fractions-g7-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work each problem carefully. Multiply straight across, or **Keep, Change, Flip** to divide. Simplify when you can.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{3}{8} \\times \\frac{2}{3}$ in simplest form?',
              options: ['$\\frac{1}{4}$', '$\\frac{6}{24}$', '$\\frac{5}{11}$', '$\\frac{6}{11}$'],
              correctAnswer: 0,
              explanation: 'Multiply straight across: $\\frac{3 \\times 2}{8 \\times 3} = \\frac{6}{24}$. Divide top and bottom by $6$ to get $\\frac{1}{4}$.'
            },
            {
              question: 'What is $\\frac{5}{6} \\div \\frac{1}{2}$ in simplest form?',
              options: ['$\\frac{5}{3}$', '$\\frac{5}{12}$', '$\\frac{6}{5}$', '$\\frac{10}{6}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{1}{2}$ to $\\frac{2}{1}$. Then $\\frac{5}{6} \\times \\frac{2}{1} = \\frac{10}{6} = \\frac{5}{3}$.'
            }
          ]
        }
      },
      {
        id: 'mult-div-fractions-g7-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the two steps for solving $\\frac{4}{5} \\div \\frac{2}{3}$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'After Keep and Change, the flipped second fraction is',
              options: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{5}{4}$', '$\\frac{1}{3}$']
            },
            {
              label: 'So $\\frac{4}{5} \\times \\frac{3}{2}$ simplifies to',
              options: ['$\\frac{6}{5}$', '$\\frac{12}{10}$', '$\\frac{8}{15}$', '$\\frac{7}{8}$']
            }
          ],
          correctAnswers: ['$\\frac{3}{2}$', '$\\frac{6}{5}$'],
          hint1: 'Flip $\\frac{2}{3}$ to get $\\frac{3}{2}$, then multiply straight across and simplify.',
          explanation: 'Flip $\\frac{2}{3}$ to $\\frac{3}{2}$. Then $\\frac{4}{5} \\times \\frac{3}{2} = \\frac{12}{10} = \\frac{6}{5}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-fractions-grade7',
    sections: [
      {
        id: 'mult-div-fractions-g7-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Practice**

Fractions show up everywhere — in recipes, in building projects, and when sharing things fairly. The tricky part of a word problem is deciding **whether to multiply or divide**.

## Two Helpful Clues

- **Multiply** when you want a **fraction *of* an amount.** Example: "How much is $\\frac{2}{3}$ *of* $\\frac{3}{4}$ cup?"
- **Divide** when you are **splitting an amount into equal-size pieces** and asking "how many fit?" Example: "How many $\\frac{1}{4}$-cup scoops are in $2$ cups?"

### Worked Word Problem

A recipe needs $\\frac{3}{4}$ cup of sugar, but Maya is making only **half** the recipe. How much sugar does she need?

"Half of $\\frac{3}{4}$" means multiply:

$$\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8} \\text{ cup of sugar.}$$
    `
      },
      {
        id: 'mult-div-fractions-g7-p4-input',
        type: 'input-boxes' as const,
        content: `
**Recipe Problem** 🍪

A baker has $\\frac{3}{4}$ pound of chocolate. Each cookie needs $\\frac{1}{8}$ pound of chocolate.

To find how many cookies the baker can make, divide: $\\frac{3}{4} \\div \\frac{1}{8}$.

1) After you **flip** $\\frac{1}{8}$, what is the new second fraction? (Type it like $8/1$.)

2) Multiply $\\frac{3}{4} \\times \\frac{8}{1}$ **before** simplifying. What is the result? (Type it like $24/4$.)

3) How many whole cookies can the baker make? (Type a whole number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['8/1', '24/4', '6'],
          hint1: 'To divide, flip the second fraction and multiply. The reciprocal of $\\frac{1}{8}$ is $\\frac{8}{1}$.',
          hint2: 'Multiply straight across to get $\\frac{24}{4}$, then divide $24 \\div 4$ to find the number of cookies.',
          explanation: 'Flip $\\frac{1}{8}$ to $\\frac{8}{1}$. Then $\\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6$. The baker can make $6$ cookies.'
        }
      },
      {
        id: 'mult-div-fractions-g7-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 🎯
    `,
        exercise: {
          questions: [
            {
              question: 'A garden hose fills a bucket at $\\frac{2}{5}$ gallon per minute. How much water flows in $\\frac{3}{4}$ minute?',
              options: [
                '$\\frac{3}{10}$ gallon',
                '$\\frac{8}{15}$ gallon',
                '$\\frac{6}{20}$ gallon plus a remainder',
                '$\\frac{5}{9}$ gallon'
              ],
              correctAnswer: 0,
              explanation: 'You need a fraction *of* a rate, so multiply: $\\frac{2}{5} \\times \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}$ gallon.'
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
    topicSlug: 'multiplying-dividing-fractions-grade7',
    sections: [
      {
        id: 'mult-div-fractions-g7-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You now have every tool for multiplying and dividing fractions. Here is the whole toolkit on one page.

## Quick Reference Table

| Operation | Rule | Example |
|-----------|------|---------|
| **Multiply** | Multiply tops, multiply bottoms, simplify | $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$ |
| **Divide** | Keep, Change, Flip (multiply by the reciprocal) | $\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8}$ |
| **Reciprocal** | Swap the top and bottom | reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$ |
| **Mixed numbers** | Convert to improper fractions **first** | $2\\frac{1}{3} = \\frac{7}{3}$ |

**Remember:** You never need a common denominator to multiply or divide — that rule is only for adding and subtracting! Now try the challenge questions below. 💪
    `
      },
      {
        id: 'mult-div-fractions-g7-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Mixed Challenge** 🎯

These questions blend everything you have learned.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $1\\frac{1}{2} \\times \\frac{2}{3}$ in simplest form?',
              options: ['$1$', '$\\frac{3}{6}$', '$\\frac{2}{3}$', '$\\frac{5}{6}$'],
              correctAnswer: 0,
              explanation: 'Convert $1\\frac{1}{2} = \\frac{3}{2}$. Then $\\frac{3}{2} \\times \\frac{2}{3} = \\frac{6}{6} = 1$.'
            },
            {
              question: 'What is $\\frac{7}{8} \\div \\frac{7}{8}$?',
              options: ['$1$', '$0$', '$\\frac{49}{64}$', '$\\frac{14}{16}$'],
              correctAnswer: 0,
              explanation: 'Keep, Change, Flip: $\\frac{7}{8} \\times \\frac{8}{7} = \\frac{56}{56} = 1$. Any nonzero number divided by itself equals $1$.'
            }
          ]
        }
      }
    ]
  }
]
