import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===========================================================================
  // PART 1 — Concept Introduction
  // ===========================================================================
  {
    topicSlug: 'adding-subtracting-fractions',
    sections: [
      {
        id: 'p1-why-denominators-matter',
        type: 'text',
        content: `## Adding and Subtracting Fractions 🍰

A fraction has two parts:

- The **numerator** is the *top* number — it tells you **how many** pieces you have.
- The **denominator** is the *bottom* number — it tells you **what size** the pieces are.

When two fractions have the **same** denominator, the pieces are all the same size, so you can just add or subtract the tops:

$$\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$$

But what about $\\frac{1}{2} + \\frac{1}{3}$? The pieces are **different sizes** — halves and thirds. You can't just add $1 + 1$, because a half and a third are not the same thing!

**Unlike denominators** means the bottom numbers are different. Before we can add or subtract, we have to make the pieces match.`
      },
      {
        id: 'p1-common-denominator',
        type: 'text',
        content: `## The Big Idea: A Common Denominator 🔑

To add or subtract fractions with **unlike denominators**, we rewrite them so they share the **same denominator**. This shared bottom number is called a **common denominator**.

The trick is to use **equivalent fractions** — fractions that look different but have the same value. If you multiply the top and bottom by the same number, the value does not change:

$$\\frac{1}{2} = \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}$$
$$\\frac{1}{3} = \\frac{1 \\times 2}{3 \\times 2} = \\frac{2}{6}$$

Now both fractions are written in **sixths**, so the pieces are the same size and we can add them:

$$\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$$

A quick way to find a common denominator is to **multiply the two denominators together**. For $\\frac{1}{2}$ and $\\frac{1}{3}$, that is $2 \\times 3 = 6$.`
      },
      {
        id: 'p1-steps-table',
        type: 'text',
        content: `## The 4 Steps ✏️

Here is the full recipe for adding **or** subtracting fractions with unlike denominators:

| Step | What you do | Example: $\\frac{1}{4} + \\frac{1}{6}$ |
| --- | --- | --- |
| 1 | Find a **common denominator** | $4 \\times 6 = 24$ |
| 2 | Build **equivalent fractions** | $\\frac{1}{4} = \\frac{6}{24}$ and $\\frac{1}{6} = \\frac{4}{24}$ |
| 3 | **Add or subtract** the numerators | $6 + 4 = 10$, keep $24$ |
| 4 | **Simplify** if you can | $\\frac{10}{24} = \\frac{5}{12}$ |

**Remember:** you only add or subtract the **top** numbers. The common denominator stays the same — you never add the bottoms together!`
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Check ✅

Let's make sure the main idea is clear.`,
        exercise: {
          questions: [
            {
              question: 'Why can you NOT just add the tops of $\\frac{1}{2} + \\frac{1}{3}$ to get $\\frac{2}{5}$?',
              options: [
                'Because you should always multiply fractions instead of adding them',
                'Because the pieces are different sizes — you must make a common denominator first',
                'Because the numerators are too small to add',
                'Because $\\frac{1}{2}$ and $\\frac{1}{3}$ are already equal'
              ],
              correctAnswer: 1,
              explanation: 'Halves and thirds are different-sized pieces. You first rewrite both with a common denominator (like sixths) so the pieces match, then add the tops.'
            }
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // PART 2 — Worked Examples
  // ===========================================================================
  {
    topicSlug: 'adding-subtracting-fractions',
    sections: [
      {
        id: 'p2-worked-add',
        type: 'text',
        content: `## Worked Example: Adding 📝

### Solve $\\frac{1}{3} + \\frac{1}{4}$

- **Step 1 — Common denominator:** multiply the bottoms, $3 \\times 4 = 12$.
- **Step 2 — Equivalent fractions:**
  - $\\frac{1}{3} = \\frac{1 \\times 4}{3 \\times 4} = \\frac{4}{12}$
  - $\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$
- **Step 3 — Add the tops:** $4 + 3 = 7$, keep the denominator $12$.
- **Step 4 — Simplify:** $\\frac{7}{12}$ is already in lowest terms.

$$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$`
      },
      {
        id: 'p2-worked-subtract',
        type: 'text',
        content: `## Worked Example: Subtracting ➖

### Solve $\\frac{3}{4} - \\frac{1}{6}$

- **Step 1 — Common denominator:** $4 \\times 6 = 24$.
- **Step 2 — Equivalent fractions:**
  - $\\frac{3}{4} = \\frac{3 \\times 6}{4 \\times 6} = \\frac{18}{24}$
  - $\\frac{1}{6} = \\frac{1 \\times 4}{6 \\times 4} = \\frac{4}{24}$
- **Step 3 — Subtract the tops:** $18 - 4 = 14$, keep the denominator $24$.
- **Step 4 — Simplify:** both $14$ and $24$ divide by $2$, so $\\frac{14}{24} = \\frac{7}{12}$.

$$\\frac{3}{4} - \\frac{1}{6} = \\frac{18}{24} - \\frac{4}{24} = \\frac{14}{24} = \\frac{7}{12}$$

**Tip:** Subtraction uses the exact same steps as addition — just subtract the numerators instead of adding them.`
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Blanks ✍️

Solve each one and type your answer as a fraction (for example: \`7/12\`). Find a common denominator first!

1) $\\frac{1}{2} + \\frac{1}{4} = $ ______

2) $\\frac{2}{3} - \\frac{1}{6} = $ ______ (simplify your answer)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['3/4', '1/2'],
          hint1: 'Rewrite both fractions with the same denominator. For #1 use fourths; for #2 use sixths.',
          hint2: 'For #1: $\\frac{1}{2} = \\frac{2}{4}$, so $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.',
          explanation: 'For #1: $\\frac{1}{2}=\\frac{2}{4}$, so $\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}$. For #2: $\\frac{2}{3}=\\frac{4}{6}$, so $\\frac{4}{6}-\\frac{1}{6}=\\frac{3}{6}=\\frac{1}{2}$.'
        }
      }
    ]
  },

  // ===========================================================================
  // PART 3 — Guided Practice
  // ===========================================================================
  {
    topicSlug: 'adding-subtracting-fractions',
    sections: [
      {
        id: 'p3-mc-practice',
        type: 'multiple-choice',
        content: `## Guided Practice — Choose the Answer 🎯

Find a common denominator, then add or subtract the tops.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{1}{2} + \\frac{1}{5}$?',
              options: [
                '$\\frac{2}{7}$',
                '$\\frac{7}{10}$',
                '$\\frac{2}{10}$',
                '$\\frac{6}{10}$'
              ],
              correctAnswer: 1,
              explanation: 'A common denominator is $2 \\times 5 = 10$. Then $\\frac{1}{2}=\\frac{5}{10}$ and $\\frac{1}{5}=\\frac{2}{10}$, so $\\frac{5}{10}+\\frac{2}{10}=\\frac{7}{10}$.'
            },
            {
              question: 'What is $\\frac{5}{6} - \\frac{1}{3}$? (Simplify.)',
              options: [
                '$\\frac{4}{3}$',
                '$\\frac{1}{2}$',
                '$\\frac{3}{6}$ and it cannot be simplified',
                '$\\frac{4}{6}$'
              ],
              correctAnswer: 1,
              explanation: 'Rewrite $\\frac{1}{3}=\\frac{2}{6}$. Then $\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}$, which simplifies to $\\frac{1}{2}$.'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown-practice',
        type: 'dropdown-select',
        content: `## Build the Answer 🧩

You are solving $\\frac{1}{4} + \\frac{2}{3}$. Choose the correct common denominator, then choose the final answer.`,
        exercise: {
          dropdowns: [
            {
              label: 'A good common denominator for $4$ and $3$ is:',
              options: ['7', '12', '24', '6']
            },
            {
              label: 'After rewriting and adding, the final answer is:',
              options: ['$\\frac{3}{7}$', '$\\frac{11}{12}$', '$\\frac{3}{12}$', '$\\frac{8}{12}$']
            }
          ],
          correctAnswers: ['12', '$\\frac{11}{12}$'],
          hint1: 'Multiply the denominators: $4 \\times 3 = 12$. Then $\\frac{1}{4}=\\frac{3}{12}$ and $\\frac{2}{3}=\\frac{8}{12}$.',
          explanation: 'The common denominator is $4 \\times 3 = 12$. Rewrite: $\\frac{1}{4}=\\frac{3}{12}$ and $\\frac{2}{3}=\\frac{8}{12}$. Add the tops: $3 + 8 = 11$, giving $\\frac{11}{12}$.'
        }
      }
    ]
  },

  // ===========================================================================
  // PART 4 — Application & Word Problems
  // ===========================================================================
  {
    topicSlug: 'adding-subtracting-fractions',
    sections: [
      {
        id: 'p4-real-world',
        type: 'text',
        content: `## Fractions in the Real World 🌎

Adding and subtracting fractions with unlike denominators happens all the time.

### 🥣 Baking
A recipe needs $\\frac{1}{2}$ cup of sugar and $\\frac{1}{4}$ cup of brown sugar. How much sugar in all?

$$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4} \\text{ cup}$$

### 🍕 Sharing Pizza
You had $\\frac{3}{4}$ of a pizza and ate $\\frac{1}{3}$ of the whole pizza. How much is left?

$$\\frac{3}{4} - \\frac{1}{3} = \\frac{9}{12} - \\frac{4}{12} = \\frac{5}{12} \\text{ of the pizza}$$

The key move every time: **make the denominators match first**, then add or subtract the tops.`
      },
      {
        id: 'p4-input-word-problems',
        type: 'input-boxes',
        content: `## Word Problem Practice ✍️

Read each story, then type your answer as a fraction (for example: \`5/6\`). Simplify when you can.

1) Mia walked $\\frac{1}{2}$ mile in the morning and $\\frac{1}{3}$ mile after lunch. How far did she walk in all?

2) A water bottle was $\\frac{7}{8}$ full. Leo drank $\\frac{1}{4}$ of the bottle. How much is left?

3) Sam read $\\frac{2}{3}$ of a book and his sister read $\\frac{1}{6}$ of it. How much did they read together?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '5/8', '5/6'],
          hint1: 'Find a common denominator for each story before you add or subtract the tops.',
          hint2: 'For #1: $\\frac{1}{2}=\\frac{3}{6}$ and $\\frac{1}{3}=\\frac{2}{6}$, so $\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$.',
          explanation: '#1: $\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$ mile. #2: $\\frac{7}{8}-\\frac{2}{8}=\\frac{5}{8}$ left. #3: $\\frac{4}{6}+\\frac{1}{6}=\\frac{5}{6}$ of the book.'
        }
      },
      {
        id: 'p4-mc-word',
        type: 'multiple-choice',
        content: `## One More Story 📖`,
        exercise: {
          questions: [
            {
              question: 'A garden is $\\frac{2}{3}$ planted with flowers and $\\frac{1}{4}$ planted with vegetables. What fraction of the garden is planted in all?',
              options: [
                '$\\frac{3}{7}$',
                '$\\frac{11}{12}$',
                '$\\frac{3}{12}$',
                '$\\frac{5}{7}$'
              ],
              correctAnswer: 1,
              explanation: 'Use a common denominator of $12$: $\\frac{2}{3}=\\frac{8}{12}$ and $\\frac{1}{4}=\\frac{3}{12}$. Add: $\\frac{8}{12}+\\frac{3}{12}=\\frac{11}{12}$.'
            }
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // PART 5 — Review & Challenge
  // ===========================================================================
  {
    topicSlug: 'adding-subtracting-fractions',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: What You Learned 🌟

You can now add and subtract fractions even when the denominators are **different**. Here is the whole idea in one table:

| Step | What to do | Example: $\\frac{2}{3} - \\frac{1}{4}$ |
| --- | --- | --- |
| 1 | Find a common denominator | $3 \\times 4 = 12$ |
| 2 | Make equivalent fractions | $\\frac{2}{3}=\\frac{8}{12}$, $\\frac{1}{4}=\\frac{3}{12}$ |
| 3 | Add or subtract the tops | $8 - 3 = 5 \\Rightarrow \\frac{5}{12}$ |
| 4 | Simplify if you can | $\\frac{5}{12}$ is already simplest |

**Golden rules to remember:**

- The denominator tells the **size** of the pieces — make them match before adding or subtracting.
- Only the **numerators** get added or subtracted; the common denominator stays the same.
- Always check whether your answer can be **simplified** by dividing the top and bottom by the same number.`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Challenge — Mix It All Together 🏆

These problems combine common denominators, subtracting, and simplifying.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{3}{4} - \\frac{1}{2}$? (Simplify.)',
              options: [
                '$\\frac{2}{2}$',
                '$\\frac{1}{4}$',
                '$\\frac{2}{4}$ and it cannot be simplified',
                '$\\frac{1}{2}$'
              ],
              correctAnswer: 1,
              explanation: 'Rewrite $\\frac{1}{2}=\\frac{2}{4}$. Then $\\frac{3}{4}-\\frac{2}{4}=\\frac{1}{4}$, which is already in lowest terms.'
            },
            {
              question: 'What is $\\frac{5}{6} + \\frac{3}{4}$?',
              options: [
                '$\\frac{8}{10}$',
                '$\\frac{19}{12}$',
                '$\\frac{8}{12}$',
                '$\\frac{15}{24}$'
              ],
              correctAnswer: 1,
              explanation: 'A common denominator is $12$: $\\frac{5}{6}=\\frac{10}{12}$ and $\\frac{3}{4}=\\frac{9}{12}$. Add the tops: $10 + 9 = 19$, giving $\\frac{19}{12}$ (which is $1\\frac{7}{12}$).'
            }
          ]
        }
      }
    ]
  }
]
