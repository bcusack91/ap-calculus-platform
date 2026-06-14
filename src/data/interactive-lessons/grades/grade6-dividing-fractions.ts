import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'grade6-dividing-fractions',
    sections: [
      {
        id: 'grade6-dividing-fractions-p1-intro',
        type: 'text' as const,
        content: `
# ➗ Dividing Fractions

**Part 1 of 5 — Concept Introduction**

Welcome to dividing fractions! In Grade 5 you met multiplying and dividing fractions. Now we'll deepen your understanding and tackle trickier problems — including **whole numbers** and **mixed numbers** — with confidence.

The most reliable strategy is a three-step trick called **Keep–Change–Flip (KCF)**, also known as **"multiply by the reciprocal."** Once you learn it, dividing fractions becomes just as easy as multiplying them.

## The Three Steps

1. **Keep** the first fraction exactly as it is.
2. **Change** the division sign $\\div$ into a multiplication sign $\\times$.
3. **Flip** the second fraction (use its reciprocal).

In symbols:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

After you keep, change, and flip, you just **multiply straight across** like normal!
    `
      },
      {
        id: 'grade6-dividing-fractions-p1-reciprocal',
        type: 'text' as const,
        content: `
## What Is a Reciprocal? 🔄

The **reciprocal** of a fraction is what you get when you flip the numerator (top) and denominator (bottom) — they trade places.

| Number | Reciprocal |
|--------|-----------|
| $\\frac{3}{4}$ | $\\frac{4}{3}$ |
| $\\frac{2}{5}$ | $\\frac{5}{2}$ |
| $\\frac{1}{8}$ | $\\frac{8}{1} = 8$ |
| $7 = \\frac{7}{1}$ | $\\frac{1}{7}$ |

**Important:** Every number *except zero* has a reciprocal. When you multiply a number by its reciprocal, you always get **1**.

$$\\frac{3}{4} \\times \\frac{4}{3} = \\frac{12}{12} = 1 \\checkmark$$

So "Flip" in *Keep–Change–Flip* really means "use the reciprocal of the **second** fraction." A whole number like $7$ secretly equals $\\frac{7}{1}$, so its reciprocal is $\\frac{1}{7}$.
    `
      },
      {
        id: 'grade6-dividing-fractions-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's solve $\\frac{3}{4} \\div \\frac{2}{5}$ together.

- **Keep** the first fraction: $\\frac{3}{4}$
- **Change** $\\div$ to $\\times$
- **Flip** the second fraction: $\\frac{2}{5}$ becomes $\\frac{5}{2}$

Now multiply straight across:

$$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{3 \\times 5}{4 \\times 2} = \\frac{15}{8}$$

Since $\\frac{15}{8}$ is an **improper fraction** (top bigger than bottom), we can write it as a **mixed number**:

$$\\frac{15}{8} = 1\\,\\frac{7}{8}$$

So $\\frac{3}{4} \\div \\frac{2}{5} = 1\\,\\frac{7}{8}$. **Keep, change, flip, multiply, simplify!**
    `
      },
      {
        id: 'grade6-dividing-fractions-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand what the "Flip" step does.
    `,
        exercise: {
          questions: [
            {
              question: 'In Keep–Change–Flip, what is the reciprocal (flip) of $\\frac{4}{9}$?',
              options: ['$\\frac{9}{4}$', '$\\frac{4}{9}$', '$\\frac{1}{4}$', '$\\frac{13}{9}$'],
              correctAnswer: 0,
              explanation: 'To find the reciprocal, swap the top and bottom numbers, so $\\frac{4}{9}$ flips to $\\frac{9}{4}$.'
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
    topicSlug: 'grade6-dividing-fractions',
    sections: [
      {
        id: 'grade6-dividing-fractions-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and walk through problems one step at a time, including a whole number.

## Example 1: Whole Number ÷ Fraction → $6 \\div \\frac{2}{3}$

**Step 1 — Write** the whole number as a fraction: $6 = \\frac{6}{1}$

**Step 2 — Keep–Change–Flip:** $\\frac{6}{1} \\div \\frac{2}{3} = \\frac{6}{1} \\times \\frac{3}{2}$

**Step 3 — Multiply:**

$$\\frac{6}{1} \\times \\frac{3}{2} = \\frac{6 \\times 3}{1 \\times 2} = \\frac{18}{2} = 9$$

**Think about it:** How many $\\frac{2}{3}$ pieces fit into $6$ wholes? **Nine pieces!** ✅
    `
      },
      {
        id: 'grade6-dividing-fractions-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: Fraction ÷ Whole Number → $\\frac{3}{5} \\div 4$

**Step 1 — Write** the whole number as a fraction: $4 = \\frac{4}{1}$

**Step 2 — Keep–Change–Flip:** $\\frac{3}{5} \\div \\frac{4}{1} = \\frac{3}{5} \\times \\frac{1}{4}$

**Step 3 — Multiply straight across:**

$$\\frac{3}{5} \\times \\frac{1}{4} = \\frac{3 \\times 1}{5 \\times 4} = \\frac{3}{20}$$

So $\\frac{3}{5} \\div 4 = \\frac{3}{20}$. Notice that dividing by a whole number makes the piece **smaller**. 🎉
    `
      },
      {
        id: 'grade6-dividing-fractions-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve $\\frac{3}{5} \\div \\frac{2}{3}$ step by step. Type each answer in the box.

1) After you **flip** $\\frac{2}{3}$, what is the new second fraction? (Type it like $3/2$.)

2) Multiply $\\frac{3}{5} \\times \\frac{3}{2}$ straight across, **before** simplifying. What is the result? (Type it like $9/10$.)

3) The answer $\\frac{9}{10}$ is already in lowest terms. Is it less than 1? Type **yes** or **no**.
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/2', '9/10', 'yes'],
          hint1: 'To flip a fraction, swap its top and bottom numbers.',
          hint2: 'Multiply straight across: top × top, bottom × bottom. A fraction is less than 1 when its top is smaller than its bottom.',
          explanation: 'Flip $\\frac{2}{3}$ to $\\frac{3}{2}$. Then $\\frac{3}{5} \\times \\frac{3}{2} = \\frac{9}{10}$. Because $9 < 10$, the answer is less than 1, so the result is **yes**.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'grade6-dividing-fractions',
    sections: [
      {
        id: 'grade6-dividing-fractions-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Use *Keep–Change–Flip* on each problem. Simplify your answer when you can.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{5}{6} \\div \\frac{1}{3}$?',
              options: ['$\\frac{5}{2}$', '$\\frac{5}{18}$', '$\\frac{1}{2}$', '$\\frac{6}{5}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{1}{3}$ to $\\frac{3}{1}$: $\\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2}$.'
            },
            {
              question: 'What is $8 \\div \\frac{4}{5}$? (Hint: write $8 = \\frac{8}{1}$ first.)',
              options: ['$10$', '$\\frac{32}{5}$', '$\\frac{4}{40}$', '$\\frac{5}{8}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{4}{5}$ to $\\frac{5}{4}$: $\\frac{8}{1} \\times \\frac{5}{4} = \\frac{40}{4} = 10$.'
            }
          ]
        }
      },
      {
        id: 'grade6-dividing-fractions-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the two steps for solving $\\frac{7}{8} \\div \\frac{1}{2}$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'After Keep and Change, the flipped second fraction is',
              options: ['$\\frac{2}{1}$', '$\\frac{1}{2}$', '$\\frac{1}{8}$', '$\\frac{8}{7}$']
            },
            {
              label: 'So $\\frac{7}{8} \\times \\frac{2}{1}$ equals',
              options: ['$\\frac{7}{4}$', '$\\frac{7}{16}$', '$\\frac{14}{8}$', '$\\frac{9}{8}$']
            }
          ],
          correctAnswers: ['$\\frac{2}{1}$', '$\\frac{7}{4}$'],
          hint1: 'Flip $\\frac{1}{2}$ to get $\\frac{2}{1}$, then multiply straight across and simplify by dividing top and bottom by 2.',
          explanation: 'Flip $\\frac{1}{2}$ to $\\frac{2}{1}$. Then $\\frac{7}{8} \\times \\frac{2}{1} = \\frac{14}{8} = \\frac{7}{4}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'grade6-dividing-fractions',
    sections: [
      {
        id: 'grade6-dividing-fractions-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Dividing fractions answers questions like *"How many small pieces fit into a larger amount?"* That comes up everywhere — cooking, building, sewing, and sharing.

## Trail Mix Example 🥜

You have $\\frac{3}{4}$ pound of trail mix. Each snack bag holds $\\frac{1}{8}$ pound. **How many bags can you fill?**

This is the division problem $\\frac{3}{4} \\div \\frac{1}{8}$.

- **Keep:** $\\frac{3}{4}$
- **Change:** $\\div \\to \\times$
- **Flip:** $\\frac{1}{8} \\to \\frac{8}{1}$

$$\\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6$$

You can fill **6 bags**! 🎉

## Sharing With a Whole Number

A whole number becomes a fraction over $1$. For example, sharing $\\frac{4}{5}$ of a cake among $3$ people:

$$\\frac{4}{5} \\div 3 = \\frac{4}{5} \\div \\frac{3}{1} = \\frac{4}{5} \\times \\frac{1}{3} = \\frac{4}{15}$$
    `
      },
      {
        id: 'grade6-dividing-fractions-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

A board is $\\frac{9}{10}$ meter long. You need to cut it into pieces that are each $\\frac{3}{10}$ meter long.

1) After you flip $\\frac{3}{10}$, what fraction do you multiply by? (Type it like $10/3$.)

2) Multiply $\\frac{9}{10} \\times \\frac{10}{3}$ straight across, before simplifying. (Type it like $90/30$.)

3) How many pieces can you cut? Simplify your answer. (Type a single whole number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['10/3', '90/30', '3'],
          hint1: 'To flip a fraction, swap the top and bottom numbers.',
          hint2: 'Multiply straight across, then simplify: $\\frac{90}{30}$ means $90 \\div 30$.',
          explanation: 'Flip $\\frac{3}{10}$ to $\\frac{10}{3}$. Then $\\frac{9}{10} \\times \\frac{10}{3} = \\frac{90}{30} = 3$, so you can cut **3 pieces**.'
        }
      },
      {
        id: 'grade6-dividing-fractions-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A pitcher holds $\\frac{2}{3}$ liter of juice. Each cup holds $\\frac{1}{6}$ liter. How many cups can you pour? ($\\frac{2}{3} \\div \\frac{1}{6}$)',
              options: ['$4$', '$\\frac{2}{18}$', '$\\frac{1}{4}$', '$\\frac{3}{2}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{1}{6}$ to $\\frac{6}{1}$: $\\frac{2}{3} \\times \\frac{6}{1} = \\frac{12}{3} = 4$ cups.'
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
    topicSlug: 'grade6-dividing-fractions',
    sections: [
      {
        id: 'grade6-dividing-fractions-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything you learned, all in one place.

## Quick Summary Table

| Step | What You Do | Example with $\\frac{3}{4} \\div \\frac{2}{5}$ |
|------|-------------|-----------------------------|
| **Keep** | Leave the first fraction alone | $\\frac{3}{4}$ |
| **Change** | Turn $\\div$ into $\\times$ | $\\frac{3}{4} \\times$ |
| **Flip** | Use the reciprocal of the 2nd fraction | $\\frac{5}{2}$ |
| **Multiply** | Top × top, bottom × bottom | $\\frac{15}{8}$ |
| **Simplify** | Reduce or write as a mixed number | $1\\,\\frac{7}{8}$ |

**Remember:**
- The **reciprocal** flips a fraction upside down, and a number times its reciprocal equals **1**.
- A **whole number** $n$ becomes $\\frac{n}{1}$ before you flip.
- A **mixed number** must be changed to an improper fraction *first*. Example: $2\\,\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$.
- Dividing by a fraction gives the **same answer** as multiplying by its reciprocal.

Now try these mixed challenge problems!
    `
      },
      {
        id: 'grade6-dividing-fractions-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix everything together — including a mixed number. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'What is $2\\,\\frac{1}{3} \\div 1\\,\\frac{1}{2}$? (Convert to improper fractions first.)',
              options: ['$1\\,\\frac{5}{9}$', '$\\frac{9}{14}$', '$3\\,\\frac{1}{2}$', '$\\frac{21}{6}$'],
              correctAnswer: 0,
              explanation: 'Convert: $2\\,\\frac{1}{3} = \\frac{7}{3}$ and $1\\,\\frac{1}{2} = \\frac{3}{2}$. Then $\\frac{7}{3} \\times \\frac{2}{3} = \\frac{14}{9} = 1\\,\\frac{5}{9}$.'
            },
            {
              question: 'What is $\\frac{5}{6} \\div \\frac{2}{9}$? (You can simplify before multiplying.)',
              options: ['$\\frac{15}{4}$', '$\\frac{10}{54}$', '$\\frac{6}{5}$', '$\\frac{4}{15}$'],
              correctAnswer: 0,
              explanation: 'Flip $\\frac{2}{9}$ to $\\frac{9}{2}$: $\\frac{5}{6} \\times \\frac{9}{2} = \\frac{45}{12} = \\frac{15}{4}$.'
            }
          ]
        }
      }
    ]
  }
]
