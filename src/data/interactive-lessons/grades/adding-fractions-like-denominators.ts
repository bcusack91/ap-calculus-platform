import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===========================================================================
  // PART 1 — Concept Introduction
  // ===========================================================================
  {
    topicSlug: 'adding-fractions-like-denominators',
    sections: [
      {
        id: 'p1-what-are-like-denominators',
        type: 'text',
        content: `## Adding Fractions with Like Denominators 🍕

Every fraction has two parts:

- The **numerator** is the *top* number. It tells you **how many pieces** you have.
- The **denominator** is the *bottom* number. It tells you **what size** the pieces are.

**Like denominators** just means the **bottom numbers are the same**. When the bottoms match, the pieces are all the same size — so they are easy to add!

**Examples of like denominators:**

- $\\frac{1}{4}$ and $\\frac{3}{4}$ — both have a **4** on the bottom
- $\\frac{2}{5}$ and $\\frac{4}{5}$ — both have a **5** on the bottom
- $\\frac{3}{8}$ and $\\frac{5}{8}$ — both have an **8** on the bottom

Think of it like counting the **same kind of pieces**. If everything is cut into eighths, you can just count the eighths!`
      },
      {
        id: 'p1-the-simple-rule',
        type: 'text',
        content: `## The Simple Rule ✏️

When the denominators are the **same**, follow these steps:

1. **Add the numerators** (the top numbers).
2. **Keep the denominator the same** (do *not* add the bottoms!).
3. **Simplify** the answer if you can.

Here it is as a picture:

$$\\frac{1}{8} + \\frac{3}{8} = \\frac{1 + 3}{8} = \\frac{4}{8}$$

| Step | What you do | Example |
| --- | --- | --- |
| 1 | Add the top numbers | $1 + 3 = 4$ |
| 2 | Keep the bottom number | bottom stays $8$ |
| 3 | Write the answer | $\\frac{4}{8}$ |

**Big idea:** The denominator tells you the *size* of the slice. The slices don't change size when you add them — you just have **more of them**.`
      },
      {
        id: 'p1-pizza-model',
        type: 'text',
        content: `## Visual Model: Pizza Slices 🍕

**Problem:** $\\frac{1}{8} + \\frac{3}{8}$

Imagine a pizza cut into **8 equal slices**:

- **You** eat 1 slice → $\\frac{1}{8}$
- **Your friend** eats 3 slices → $\\frac{3}{8}$

\`\`\`
You:    [■]            = 1/8
Friend: [■ ■ ■]        = 3/8
Total:  [■ ■ ■ ■]      = 4/8
\`\`\`

All the slices are the **same size** (eighths), so you just **count them all together**: $1 + 3 = 4$ slices out of $8$.

$$\\frac{1}{8} + \\frac{3}{8} = \\frac{4}{8}$$

Notice the bottom number stayed **8** the whole time. We never add the denominators!`
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Check ✅

Let's make sure the main idea is clear.`,
        exercise: {
          questions: [
            {
              question: 'When you add two fractions that have the **same** denominator, what do you do with the bottom numbers?',
              options: [
                'Add the bottom numbers together',
                'Keep the bottom number the same',
                'Multiply the bottom numbers',
                'Subtract the bottom numbers'
              ],
              correctAnswer: 1,
              explanation: 'The denominator tells the size of the pieces, and that size does not change. You add the top numbers but keep the bottom number the same.'
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
    topicSlug: 'adding-fractions-like-denominators',
    sections: [
      {
        id: 'p2-step-by-step',
        type: 'text',
        content: `## Step-by-Step Examples 📝

Let's work through a few problems carefully, one step at a time.

### Example 1: $\\frac{2}{5} + \\frac{1}{5}$

- **Step 1 — Check the denominators:** both are $5$ ✓
- **Step 2 — Add the numerators:** $2 + 1 = 3$
- **Step 3 — Keep the denominator:** $5$
- **Step 4 — Write the answer:** $\\frac{3}{5}$

$$\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$$

### Example 2: $\\frac{3}{10} + \\frac{4}{10}$

- **Step 1 — Denominators:** both are $10$ ✓
- **Step 2 — Add the numerators:** $3 + 4 = 7$
- **Step 3 — Keep the denominator:** $10$
- **Step 4 — Answer:** $\\frac{7}{10}$

$$\\frac{3}{10} + \\frac{4}{10} = \\frac{7}{10}$$`
      },
      {
        id: 'p2-number-line',
        type: 'text',
        content: `## Using a Number Line 📏

You can also **see** fraction addition on a number line. Try $\\frac{1}{4} + \\frac{2}{4}$.

\`\`\`
0 ----1/4----2/4----3/4----1
       ↑              ↑
     Start          End
       └── jump +2/4 ──┘
\`\`\`

- **Start** at $\\frac{1}{4}$.
- **Jump** $2$ more fourths.
- You **land** on $\\frac{3}{4}$.

$$\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$$

Each jump is one fourth. You start with $1$ fourth and add $2$ more — that's $3$ fourths in all.`
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Blanks ✍️

Solve each one and type your answer as a fraction (for example: \`5/7\`). Keep the same denominator!

1) $\\frac{2}{7} + \\frac{3}{7} = $ ______

2) $\\frac{4}{9} + \\frac{2}{9} = $ ______

3) $\\frac{5}{12} + \\frac{4}{12} = $ ______`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/7', '6/9', '9/12'],
          hint1: 'Add the top numbers and keep the bottom number exactly the same.',
          hint2: 'For #1: $2 + 3 = 5$, and the bottom stays $7$, so the answer is $\\frac{5}{7}$.',
          explanation: 'Add the numerators and keep the denominator: $\\frac{2}{7}+\\frac{3}{7}=\\frac{5}{7}$, $\\frac{4}{9}+\\frac{2}{9}=\\frac{6}{9}$, and $\\frac{5}{12}+\\frac{4}{12}=\\frac{9}{12}$.'
        }
      }
    ]
  },

  // ===========================================================================
  // PART 3 — Guided Practice
  // ===========================================================================
  {
    topicSlug: 'adding-fractions-like-denominators',
    sections: [
      {
        id: 'p3-mc-practice',
        type: 'multiple-choice',
        content: `## Guided Practice — Choose the Answer 🎯

Add the fractions. Remember: add the tops, keep the bottom.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\frac{3}{8} + \\frac{2}{8}$?',
              options: [
                '$\\frac{5}{16}$',
                '$\\frac{5}{8}$',
                '$\\frac{6}{8}$',
                '$\\frac{1}{8}$'
              ],
              correctAnswer: 1,
              explanation: 'Add the numerators: $3 + 2 = 5$, and keep the denominator $8$. The answer is $\\frac{5}{8}$.'
            },
            {
              question: 'What is $\\frac{4}{6} + \\frac{1}{6}$?',
              options: [
                '$\\frac{5}{12}$',
                '$\\frac{3}{6}$',
                '$\\frac{5}{6}$',
                '$\\frac{4}{6}$'
              ],
              correctAnswer: 2,
              explanation: 'Add the numerators: $4 + 1 = 5$, and keep the denominator $6$. The answer is $\\frac{5}{6}$.'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown-practice',
        type: 'dropdown-select',
        content: `## Build the Answer 🧩

For the problem $\\frac{2}{9} + \\frac{5}{9}$, choose the correct numerator and the correct denominator for the answer.`,
        exercise: {
          dropdowns: [
            {
              label: 'The numerator (top number) of the answer is:',
              options: ['5', '7', '9', '18']
            },
            {
              label: 'The denominator (bottom number) of the answer is:',
              options: ['9', '18', '7', '81']
            }
          ],
          correctAnswers: ['7', '9'],
          hint1: 'Add the top numbers ($2 + 5$) for the numerator, and keep the bottom number ($9$) for the denominator.',
          explanation: 'Add the numerators: $2 + 5 = 7$. Keep the denominator the same: $9$. So $\\frac{2}{9} + \\frac{5}{9} = \\frac{7}{9}$.'
        }
      }
    ]
  },

  // ===========================================================================
  // PART 4 — Application & Word Problems
  // ===========================================================================
  {
    topicSlug: 'adding-fractions-like-denominators',
    sections: [
      {
        id: 'p4-real-world',
        type: 'text',
        content: `## Fractions in the Real World 🌎

Adding fractions with like denominators shows up all the time in everyday life.

### 🥣 Measuring Cups
A recipe needs $\\frac{1}{3}$ cup of oil, and then $\\frac{2}{3}$ cup more.

$$\\frac{1}{3} + \\frac{2}{3} = \\frac{3}{3} = 1 \\text{ cup}$$

### 🚶 Walking Distance
You walk $\\frac{2}{10}$ mile to the park, then $\\frac{3}{10}$ mile farther.

$$\\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10} \\text{ mile}$$

### ⏰ Reading Time
You read $\\frac{1}{4}$ hour before lunch and $\\frac{2}{4}$ hour after.

$$\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4} \\text{ hour}$$

In each story, the denominators already match — so just **add the tops and keep the bottom**!`
      },
      {
        id: 'p4-input-word-problems',
        type: 'input-boxes',
        content: `## Word Problem Practice ✍️

Read each story, add the fractions, and type your answer as a fraction (for example: \`5/8\`). Keep the denominator the same.

1) Maya colored $\\frac{3}{8}$ of her picture red and $\\frac{4}{8}$ blue. What fraction is colored in all?

2) A water jug was $\\frac{2}{6}$ full, then you added $\\frac{3}{6}$ more. How full is it now?

3) Sam ran $\\frac{4}{10}$ mile, then ran $\\frac{5}{10}$ mile more. How far did he run total?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7/8', '5/6', '9/10'],
          hint1: 'Each story has matching denominators. Add the two top numbers and keep the bottom number.',
          hint2: 'For #1: $3 + 4 = 7$ eighths, so the answer is $\\frac{7}{8}$.',
          explanation: 'Add the numerators and keep the denominator: $\\frac{3}{8}+\\frac{4}{8}=\\frac{7}{8}$, $\\frac{2}{6}+\\frac{3}{6}=\\frac{5}{6}$, and $\\frac{4}{10}+\\frac{5}{10}=\\frac{9}{10}$.'
        }
      },
      {
        id: 'p4-mc-word',
        type: 'multiple-choice',
        content: `## One More Story 📖`,
        exercise: {
          questions: [
            {
              question: 'A pizza is cut into 8 equal slices. Liam eats $\\frac{2}{8}$ of the pizza and Ava eats $\\frac{5}{8}$. What fraction of the whole pizza did they eat together?',
              options: [
                '$\\frac{7}{16}$',
                '$\\frac{3}{8}$',
                '$\\frac{7}{8}$',
                '$\\frac{10}{8}$'
              ],
              correctAnswer: 2,
              explanation: 'Add the numerators: $2 + 5 = 7$, and keep the denominator $8$. Together they ate $\\frac{7}{8}$ of the pizza.'
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
    topicSlug: 'adding-fractions-like-denominators',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: What You Learned 🌟

You can now add fractions that have the **same denominator**. Here's the whole idea in one table:

| Situation | What to do | Example |
| --- | --- | --- |
| Same denominators | Add tops, keep bottom | $\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$ |
| Answer can be smaller | **Simplify** it | $\\frac{2}{6} + \\frac{2}{6} = \\frac{4}{6} = \\frac{2}{3}$ |
| Top is bigger than bottom | It is **more than one whole** | $\\frac{5}{8} + \\frac{4}{8} = \\frac{9}{8} = 1\\frac{1}{8}$ |

**Remember the golden rule:** add the **numerators**, keep the **denominator**, and simplify when you can.

- To **simplify**, divide the top and bottom by the same number. Example: $\\frac{4}{6}$ — both $4$ and $6$ divide by $2$, giving $\\frac{2}{3}$.
- An **improper fraction** like $\\frac{9}{8}$ is greater than $1$ whole. Since $\\frac{8}{8} = 1$, that leaves $\\frac{1}{8}$ more, so $\\frac{9}{8} = 1\\frac{1}{8}$.`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Challenge — Mix It All Together 🏆

These problems combine adding, simplifying, and going past one whole.`,
        exercise: {
          questions: [
            {
              question: 'Simplify your answer: $\\frac{2}{6} + \\frac{2}{6} = ?$',
              options: [
                '$\\frac{4}{12}$',
                '$\\frac{2}{3}$',
                '$\\frac{4}{6}$ and it cannot be simplified',
                '$\\frac{4}{3}$'
              ],
              correctAnswer: 1,
              explanation: 'First add: $2 + 2 = 4$, so $\\frac{4}{6}$. Both $4$ and $6$ divide by $2$, giving $\\frac{2}{3}$.'
            },
            {
              question: 'What is $\\frac{5}{8} + \\frac{4}{8}$, and what does the answer mean?',
              options: [
                '$\\frac{9}{16}$, which is less than one whole',
                '$\\frac{1}{8}$, which is less than one whole',
                '$\\frac{9}{8}$, which equals $1\\frac{1}{8}$ — more than one whole',
                '$\\frac{9}{8}$, which is less than one whole'
              ],
              correctAnswer: 2,
              explanation: 'Add the numerators: $5 + 4 = 9$, keep the denominator $8$, so $\\frac{9}{8}$. Since $\\frac{8}{8} = 1$, there is $\\frac{1}{8}$ left over, making $1\\frac{1}{8}$.'
            }
          ]
        }
      }
    ]
  }
]
