import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'dividing-fractions-grade5',
    sections: [
      {
        id: 'dividing-fractions-g5-p1-intro',
        type: 'text' as const,
        content: `
# ➗ Dividing Fractions

**Part 1 of 5 — Concept Introduction**

You already know how to multiply fractions. Great news: dividing fractions uses that exact skill, plus one tiny twist!

The secret is a three-step trick called **"Keep, Change, Flip."** Once you learn it, dividing fractions is just as easy as multiplying them.

## What Does "Keep, Change, Flip" Mean?

To divide one fraction by another:

1. **Keep** the first fraction exactly the same.
2. **Change** the division sign $\\div$ into a multiplication sign $\\times$.
3. **Flip** the second fraction upside down.

In symbols, it looks like this:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

After you keep, change, and flip, you just **multiply** like normal!
    `
      },
      {
        id: 'dividing-fractions-g5-p1-reciprocal',
        type: 'text' as const,
        content: `
## What Is a Reciprocal? 🔄

The flipped-over fraction has a special name: the **reciprocal**.

A reciprocal is just a fraction turned **upside down** — the top and bottom numbers trade places.

| Fraction | Reciprocal |
|----------|-----------|
| $\\frac{3}{4}$ | $\\frac{4}{3}$ |
| $\\frac{2}{5}$ | $\\frac{5}{2}$ |
| $\\frac{1}{8}$ | $\\frac{8}{1} = 8$ |
| $5 = \\frac{5}{1}$ | $\\frac{1}{5}$ |

**Key idea:** "Flip" in *Keep, Change, Flip* really means "use the reciprocal of the second fraction."

A whole number like $5$ secretly equals $\\frac{5}{1}$, so its reciprocal is $\\frac{1}{5}$.
    `
      },
      {
        id: 'dividing-fractions-g5-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's solve $\\frac{2}{3} \\div \\frac{4}{5}$ together.

- **Keep** the first fraction: $\\frac{2}{3}$
- **Change** $\\div$ to $\\times$
- **Flip** the second fraction: $\\frac{4}{5}$ becomes $\\frac{5}{4}$

Now multiply straight across:

$$\\frac{2}{3} \\times \\frac{5}{4} = \\frac{2 \\times 5}{3 \\times 4} = \\frac{10}{12}$$

Finally, simplify by dividing top and bottom by $2$:

$$\\frac{10}{12} = \\frac{5}{6}$$

So $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{5}{6}$. **Keep, change, flip, multiply, simplify!**
    `
      },
      {
        id: 'dividing-fractions-g5-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you know what the "Flip" step does.
    `,
        exercise: {
          questions: [
            {
              question: 'In "Keep, Change, Flip," what is the reciprocal (flip) of $\\frac{3}{7}$?',
              options: ['$\\frac{7}{3}$', '$\\frac{3}{7}$', '$\\frac{1}{3}$', '$\\frac{10}{7}$'],
              correctAnswer: 0,
              explanation: 'To find the reciprocal, swap the top and bottom numbers: $\\frac{3}{7}$ flips to $\\frac{7}{3}$.'
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
    topicSlug: 'dividing-fractions-grade5',
    sections: [
      {
        id: 'dividing-fractions-g5-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and walk through two problems one step at a time.

## Example 1: $\\frac{1}{2} \\div \\frac{1}{4}$

**Step 1 — Keep** the first fraction: $\\frac{1}{2}$

**Step 2 — Change** the sign: $\\div$ becomes $\\times$

**Step 3 — Flip** the second fraction: $\\frac{1}{4}$ becomes $\\frac{4}{1}$

**Step 4 — Multiply:**

$$\\frac{1}{2} \\times \\frac{4}{1} = \\frac{1 \\times 4}{2 \\times 1} = \\frac{4}{2} = 2$$

This makes sense! "How many $\\frac{1}{4}$ pieces fit inside $\\frac{1}{2}$?" The answer is **2** — two quarters make one half. ✅
    `
      },
      {
        id: 'dividing-fractions-g5-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: $\\frac{4}{9} \\div \\frac{2}{3}$

**Keep:** $\\frac{4}{9}$

**Change:** $\\div \\to \\times$

**Flip:** $\\frac{2}{3} \\to \\frac{3}{2}$

**Multiply:**

$$\\frac{4}{9} \\times \\frac{3}{2} = \\frac{4 \\times 3}{9 \\times 2} = \\frac{12}{18}$$

**Simplify** by dividing top and bottom by $6$:

$$\\frac{12}{18} = \\frac{2}{3}$$

So $\\frac{4}{9} \\div \\frac{2}{3} = \\frac{2}{3}$. 🎉
    `
      },
      {
        id: 'dividing-fractions-g5-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve $\\frac{3}{5} \\div \\frac{2}{5}$ step by step. Type each answer in the box.

1) After you **flip** $\\frac{2}{5}$, what is the new second fraction? (Type it like $5/2$.)

2) Multiply $\\frac{3}{5} \\times \\frac{5}{2}$ **before** simplifying. What is the result? (Type it like $15/10$.)

3) Write the final simplified answer. (Type it like $3/2$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/2', '15/10', '3/2'],
          hint1: 'To flip a fraction, swap its top and bottom numbers.',
          hint2: 'Multiply straight across: top × top, bottom × bottom. Then divide top and bottom by 5 to simplify.',
          explanation: 'Flip $\\frac{2}{5}$ to $\\frac{5}{2}$. Then $\\frac{3}{5} \\times \\frac{5}{2} = \\frac{15}{10}$, which simplifies to $\\frac{3}{2}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'dividing-fractions-grade5',
    sections: [
      {
        id: 'dividing-fractions-g5-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Use *Keep, Change, Flip* on each problem. Simplify your answer when you can.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{2}{3} \\div \\frac{1}{6}$?',
              options: ['$4$', '$\\frac{2}{18}$', '$\\frac{1}{4}$', '$\\frac{3}{2}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{1}{6}$ to $\\frac{6}{1}$: $\\frac{2}{3} \\times \\frac{6}{1} = \\frac{12}{3} = 4$.'
            },
            {
              question: 'What is $\\frac{5}{6} \\div \\frac{1}{3}$?',
              options: ['$\\frac{5}{18}$', '$\\frac{5}{2}$', '$\\frac{1}{2}$', '$\\frac{6}{5}$'],
              correctAnswer: 1,
              explanation: 'Flip $\\frac{1}{3}$ to $\\frac{3}{1}$: $\\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2}$.'
            }
          ]
        }
      },
      {
        id: 'dividing-fractions-g5-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the two steps for solving $\\frac{3}{4} \\div \\frac{1}{2}$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'After Keep and Change, the flipped second fraction is',
              options: ['$\\frac{2}{1}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$']
            },
            {
              label: 'So $\\frac{3}{4} \\times \\frac{2}{1}$ equals',
              options: ['$\\frac{3}{2}$', '$\\frac{3}{8}$', '$\\frac{6}{8}$', '$\\frac{1}{2}$']
            }
          ],
          correctAnswers: ['$\\frac{2}{1}$', '$\\frac{3}{2}$'],
          hint1: 'Flip $\\frac{1}{2}$ to get $\\frac{2}{1}$, then multiply straight across and simplify.',
          explanation: 'Flip $\\frac{1}{2}$ to $\\frac{2}{1}$. Then $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'dividing-fractions-grade5',
    sections: [
      {
        id: 'dividing-fractions-g5-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Dividing fractions answers questions like *"How many small pieces fit into a bigger amount?"* That comes up all the time in real life — cooking, sharing, building, and more.

## Cookie Recipe Example 🍪

A recipe uses $\\frac{1}{8}$ cup of sugar per batch. You have $\\frac{3}{4}$ cup of sugar. **How many batches can you make?**

This is a division problem: $\\frac{3}{4} \\div \\frac{1}{8}$.

- **Keep:** $\\frac{3}{4}$
- **Change:** $\\div \\to \\times$
- **Flip:** $\\frac{1}{8} \\to \\frac{8}{1}$

$$\\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6$$

You can make **6 batches** of cookies! 🎉

## Dividing by a Whole Number

Remember: a whole number becomes a fraction over $1$. For example, $\\frac{3}{4} \\div 2 = \\frac{3}{4} \\div \\frac{2}{1} = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$.
    `
      },
      {
        id: 'dividing-fractions-g5-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

Maria has $\\frac{7}{8}$ of a pizza left. She wants to share it equally among **3** friends.

1) Rewrite $3$ as a fraction over $1$. (Type it like $3/1$.)

2) After you flip, what do you multiply $\\frac{7}{8}$ by? (Type it like $1/3$.)

3) How much pizza does each friend get? (Type it like $7/24$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/1', '1/3', '7/24'],
          hint1: 'Any whole number can be written over 1, so $3 = \\frac{3}{1}$.',
          hint2: 'Flip $\\frac{3}{1}$ to get $\\frac{1}{3}$, then multiply straight across: $\\frac{7}{8} \\times \\frac{1}{3}$.',
          explanation: 'Write $3 = \\frac{3}{1}$, flip it to $\\frac{1}{3}$, then $\\frac{7}{8} \\times \\frac{1}{3} = \\frac{7}{24}$ of the pizza per friend.'
        }
      },
      {
        id: 'dividing-fractions-g5-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A ribbon is $\\frac{1}{2}$ meter long. Each bow needs $\\frac{1}{8}$ meter. How many bows can you make? ($\\frac{1}{2} \\div \\frac{1}{8}$)',
              options: ['$4$', '$\\frac{1}{16}$', '$2$', '$16$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{1}{8}$ to $\\frac{8}{1}$: $\\frac{1}{2} \\times \\frac{8}{1} = \\frac{8}{2} = 4$ bows.'
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
    topicSlug: 'dividing-fractions-grade5',
    sections: [
      {
        id: 'dividing-fractions-g5-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything you learned, all in one place.

## Quick Summary Table

| Step | What You Do | Example with $\\frac{2}{3} \\div \\frac{4}{5}$ |
|------|-------------|-----------------------------|
| **Keep** | Leave the first fraction alone | $\\frac{2}{3}$ |
| **Change** | Turn $\\div$ into $\\times$ | $\\frac{2}{3} \\times$ |
| **Flip** | Use the reciprocal of the 2nd fraction | $\\frac{5}{4}$ |
| **Multiply** | Top × top, bottom × bottom | $\\frac{10}{12}$ |
| **Simplify** | Reduce to lowest terms | $\\frac{5}{6}$ |

**Remember:**
- The **reciprocal** flips a fraction upside down.
- A **whole number** $n$ becomes $\\frac{n}{1}$ before you flip.
- Dividing by a fraction gives the **same answer** as multiplying by its reciprocal.

Now try these mixed challenge problems!
    `
      },
      {
        id: 'dividing-fractions-g5-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix everything together. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{3}{4} \\div 2$? (Hint: write $2$ as $\\frac{2}{1}$ first.)',
              options: ['$\\frac{3}{8}$', '$\\frac{3}{2}$', '$\\frac{6}{4}$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Write $2 = \\frac{2}{1}$, flip to $\\frac{1}{2}$: $\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$.'
            },
            {
              question: 'What is $\\frac{2}{3} \\div \\frac{4}{5}$?',
              options: ['$\\frac{5}{6}$', '$\\frac{8}{15}$', '$\\frac{6}{5}$', '$\\frac{10}{12}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{4}{5}$ to $\\frac{5}{4}$: $\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.'
            }
          ]
        }
      }
    ]
  }
]
