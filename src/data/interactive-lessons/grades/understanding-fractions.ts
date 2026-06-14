import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'understanding-fractions',
    sections: [
      {
        id: 'uf-p1-intro',
        type: 'text' as const,
        content: `# 🍕 Understanding Fractions

## What Is a Fraction?

A **fraction** represents a **part of a whole**. When something is split into **equal pieces**, a fraction tells us how many of those pieces we are talking about.

Every fraction has two parts:

$\\frac{\\text{numerator}}{\\text{denominator}}$

- **Numerator** — the **top** number. It tells *how many parts we have*.
- **Denominator** — the **bottom** number. It tells *how many equal parts make up the whole*.

**Example:** $\\frac{3}{4}$ means the whole was cut into **4 equal parts**, and we have **3** of them.

Imagine a chocolate bar broken into 4 equal squares. If you eat 3 of the squares, you ate $\\frac{3}{4}$ of the bar.

> 🔑 **Key Idea:** The parts must be **equal** in size. Three random-sized chunks out of four is *not* $\\frac{3}{4}$.`
      },
      {
        id: 'uf-p1-types',
        type: 'text' as const,
        content: `## 🧩 Three Types of Fractions

Fractions come in a few different "shapes." Here is how to tell them apart.

### Proper Fraction
The numerator is **less than** the denominator, so the value is **less than 1 whole**.
Examples: $\\frac{2}{5}$, $\\frac{7}{10}$

### Improper Fraction
The numerator is **greater than or equal to** the denominator, so the value is **1 whole or more**.
Examples: $\\frac{7}{4}$, $\\frac{9}{9}$

### Mixed Number
A **whole number** combined with a proper fraction. It is another way to write an improper fraction.
Examples: $2\\frac{1}{3}$, $5\\frac{3}{8}$

Here is a quick comparison:

| Type | Rule | Example | Value |
|---|---|---|---|
| Proper | top $<$ bottom | $\\frac{2}{5}$ | less than 1 |
| Improper | top $\\ge$ bottom | $\\frac{7}{4}$ | 1 or more |
| Mixed | whole $+$ fraction | $2\\frac{1}{3}$ | 1 or more |

For example, $\\frac{7}{4}$ (improper) is the same amount as $1\\frac{3}{4}$ (mixed number).`
      },
      {
        id: 'uf-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'In the fraction $\\frac{3}{8}$, what does the **denominator** (8) tell us?',
              options: [
                'How many equal parts the whole is divided into',
                'How many parts we have',
                'The total of the two numbers',
                'That the fraction is improper'
              ],
              correctAnswer: 0,
              explanation: 'The denominator is the bottom number, and it tells how many equal parts make up the whole. The numerator (3) tells how many of those parts we have.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'understanding-fractions',
    sections: [
      {
        id: 'uf-p2-worked',
        type: 'text' as const,
        content: `## 📝 Worked Examples: Reading & Classifying Fractions

Let's work through a few examples step by step.

### Example 1 — Naming a fraction from a picture
A pizza is cut into **6 equal slices**. You take **5** slices.

- **Step 1:** Count the equal parts in the whole → denominator is **6**.
- **Step 2:** Count the parts you have → numerator is **5**.
- **Step 3:** Write it as $\\frac{\\text{have}}{\\text{whole}} = \\frac{5}{6}$.

Since the top (5) is less than the bottom (6), $\\frac{5}{6}$ is a **proper fraction**.

### Example 2 — Classifying a fraction
Is $\\frac{9}{4}$ proper, improper, or could it be a mixed number?

- **Step 1:** Compare top and bottom. Here $9 > 4$.
- **Step 2:** Because the numerator is bigger than the denominator, it is an **improper fraction**.

### Example 3 — Improper fraction to mixed number
Rewrite $\\frac{7}{3}$ as a mixed number.

- **Step 1:** Divide the numerator by the denominator: $7 \\div 3 = 2$ remainder $1$.
- **Step 2:** The whole number is **2**, the leftover **1** stays over the denominator **3**.
- **Step 3:** So $\\frac{7}{3} = 2\\frac{1}{3}$.`
      },
      {
        id: 'uf-p2-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Your Turn

A chocolate bar is split into **8 equal squares**. You eat **3** of them.

**Box 1:** What is the **numerator** of the fraction you ate?
**Box 2:** What is the **denominator**?
**Box 3:** Write the fraction you ate as a simple fraction (like \`3/8\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '3/8'],
          hint1: 'The numerator is how many parts you have; the denominator is the number of equal parts in the whole bar.',
          hint2: 'You ate 3 squares out of 8 equal squares, so write the "have" over the "whole."',
          explanation: 'You have 3 squares (numerator = 3) out of 8 equal squares (denominator = 8), so the fraction is $\\frac{3}{8}$, typed as 3/8.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'understanding-fractions',
    sections: [
      {
        id: 'uf-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice: Compare & Classify

**Comparing tip:** When two fractions have the **same denominator**, just compare the **numerators** — the bigger numerator is the bigger fraction.`,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes this true: $\\frac{3}{8} \\;?\\; \\frac{5}{8}$',
              options: ['$<$ (less than)', '$>$ (greater than)', '$=$ (equal to)', 'Cannot be compared'],
              correctAnswer: 0,
              explanation: 'The denominators are the same (8), so compare numerators: $3 < 5$. Therefore $\\frac{3}{8} < \\frac{5}{8}$.'
            },
            {
              question: 'Which of these is an **improper fraction**?',
              options: ['$\\frac{9}{4}$', '$\\frac{2}{5}$', '$\\frac{7}{10}$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'An improper fraction has a numerator greater than or equal to its denominator. In $\\frac{9}{4}$, $9 > 4$, so it is improper.'
            }
          ]
        }
      },
      {
        id: 'uf-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Classify Each Fraction

Use the menus to choose the correct type for each fraction.`,
        exercise: {
          dropdowns: [
            { label: '$\\frac{4}{7}$ is a', options: ['proper fraction', 'improper fraction', 'mixed number'] },
            { label: '$\\frac{11}{6}$ is an', options: ['proper fraction', 'improper fraction', 'mixed number'] }
          ],
          correctAnswers: ['proper fraction', 'improper fraction'],
          hint1: 'Compare the top number to the bottom number: smaller top means proper, top bigger-or-equal means improper.',
          explanation: 'In $\\frac{4}{7}$, $4 < 7$, so it is a proper fraction. In $\\frac{11}{6}$, $11 > 6$, so it is an improper fraction.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'understanding-fractions',
    sections: [
      {
        id: 'uf-p4-context',
        type: 'text' as const,
        content: `## 🌍 Fractions in Real Life

Fractions are everywhere once you start looking:

- A recipe asks for $\\frac{3}{4}$ cup of sugar.
- A game is $\\frac{2}{3}$ finished downloading.
- You read **5 of the 12 chapters** in a book, which is $\\frac{5}{12}$ of the book.

**Comparing with different denominators:** Sometimes denominators don't match. To compare them, rewrite the fractions with a **common denominator** first, then compare numerators.

**Example:** Which is more, $\\frac{1}{2}$ or $\\frac{2}{5}$?

- A common denominator of 2 and 5 is **10**.
- $\\frac{1}{2} = \\frac{5}{10}$ and $\\frac{2}{5} = \\frac{4}{10}$.
- Since $5 > 4$, we get $\\frac{1}{2} > \\frac{2}{5}$.`
      },
      {
        id: 'uf-p4-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Word Problem

Maria has a garden with **10 equal flower beds**. She plants tomatoes in **7** of them.

**Box 1:** What fraction of the garden has tomatoes? Write it as a simple fraction (like \`7/10\`).
**Box 2:** How many beds do **not** have tomatoes?
**Box 3:** What fraction of the garden does **not** have tomatoes? (simple fraction)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/10', '3', '3/10'],
          hint1: 'There are 10 equal beds in total, so the denominator is 10 for both fractions.',
          hint2: 'If 7 of 10 beds have tomatoes, the rest is $10 - 7 = 3$ beds.',
          explanation: 'Tomatoes are in 7 of 10 beds → $\\frac{7}{10}$. The remaining beds are $10 - 7 = 3$, which is $\\frac{3}{10}$ of the garden.'
        }
      },
      {
        id: 'uf-p4-mc',
        type: 'multiple-choice' as const,
        content: `## ✅ Apply It`,
        exercise: {
          questions: [
            {
              question: 'A recipe needs $\\frac{2}{3}$ cup of flour, but a second recipe needs $\\frac{1}{2}$ cup. Which recipe needs **more** flour?',
              options: [
                'The recipe with $\\frac{2}{3}$ cup',
                'The recipe with $\\frac{1}{2}$ cup',
                'They need the same amount',
                'There is no way to tell'
              ],
              correctAnswer: 0,
              explanation: 'Using a common denominator of 6: $\\frac{2}{3} = \\frac{4}{6}$ and $\\frac{1}{2} = \\frac{3}{6}$. Since $4 > 3$, the $\\frac{2}{3}$-cup recipe needs more flour.'
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'understanding-fractions',
    sections: [
      {
        id: 'uf-p5-summary',
        type: 'text' as const,
        content: `## 🏆 Review: Everything About Fractions

You've learned what fractions mean, the three types, and how to compare them. Here is the big picture in one table:

| Idea | What to Remember | Example |
|---|---|---|
| **Numerator** | Top number — parts you have | the **3** in $\\frac{3}{4}$ |
| **Denominator** | Bottom number — equal parts in the whole | the **4** in $\\frac{3}{4}$ |
| **Proper** | top $<$ bottom (less than 1) | $\\frac{2}{5}$ |
| **Improper** | top $\\ge$ bottom (1 or more) | $\\frac{7}{4}$ |
| **Mixed number** | whole $+$ fraction | $2\\frac{1}{3}$ |
| **Same denominator** | compare numerators | $\\frac{3}{8} < \\frac{5}{8}$ |
| **Different denominators** | find a common denominator first | $\\frac{1}{2} > \\frac{2}{5}$ |
| **Equivalent fractions** | same value, different look | $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$ |

> 🔑 **Remember:** To make an equivalent fraction, multiply (or divide) the numerator **and** denominator by the **same** number.`
      },
      {
        id: 'uf-p5-challenge',
        type: 'multiple-choice' as const,
        content: `## 🚀 Mixed Challenge`,
        exercise: {
          questions: [
            {
              question: 'Which fraction is **equivalent** to $\\frac{1}{2}$?',
              options: ['$\\frac{3}{6}$', '$\\frac{2}{5}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$'],
              correctAnswer: 0,
              explanation: 'Multiply the top and bottom of $\\frac{1}{2}$ by 3: $\\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}$. So $\\frac{3}{6}$ has the same value as $\\frac{1}{2}$.'
            },
            {
              question: 'Order these from **smallest to largest**: $\\frac{1}{4}$, $\\frac{3}{4}$, $\\frac{2}{4}$.',
              options: [
                '$\\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}$',
                '$\\frac{3}{4}, \\frac{2}{4}, \\frac{1}{4}$',
                '$\\frac{2}{4}, \\frac{1}{4}, \\frac{3}{4}$',
                '$\\frac{1}{4}, \\frac{3}{4}, \\frac{2}{4}$'
              ],
              correctAnswer: 0,
              explanation: 'All three share the denominator 4, so just compare numerators: $1 < 2 < 3$. That gives $\\frac{1}{4} < \\frac{2}{4} < \\frac{3}{4}$.'
            }
          ]
        }
      }
    ]
  }
]
