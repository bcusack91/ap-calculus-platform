import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'simplifying-expressions',
    sections: [
      {
        id: 'se-p1-intro',
        type: 'text' as const,
        content: `# 🧹 Simplifying Expressions

## What Does "Simplify" Mean?

To **simplify an expression** means to rewrite it in the **shortest, cleanest** way possible — without changing its value. A simplified expression is easier to read and easier to use later.

We simplify by:
- **Combining like terms**
- **Using the distributive property**
- **Removing parentheses**
- **Writing in standard form** (variables first, then the number)

**Example:**

| Before | After |
|---|---|
| $3x + 2x + 5 - 2$ | $5x + 3$ |

Both expressions are **equal** — they give the same answer for any value of $x$ — but the simplified version is much cleaner.

> 🔑 **Key Idea:** Simplifying never changes *what* the expression equals. It only changes *how it looks*.`
      },
      {
        id: 'se-p1-like-terms',
        type: 'text' as const,
        content: `## 🧩 Like Terms

**Like terms** have the **same variable** raised to the **same power**. Only like terms can be combined.

### ✅ Like Terms (can combine)
- $3x$ and $5x$ — both have $x$
- $-2y$ and $7y$ — both have $y$
- $4x^2$ and $x^2$ — both have $x^2$
- $6$ and $-3$ — both are plain numbers (constants)

### 🚫 Unlike Terms (cannot combine)
- $3x$ and $5y$ — different variables
- $4x$ and $4x^2$ — different powers of $x$
- $2xy$ and $3x$ — different variable parts

A quick way to spot like terms: **cover up the coefficient** (the number in front) and check whether the variable parts match exactly.

| Pair | Variable parts match? | Like terms? |
|---|---|---|
| $3x$ and $5x$ | $x$ and $x$ ✔ | Yes |
| $4x^2$ and $x^2$ | $x^2$ and $x^2$ ✔ | Yes |
| $3x$ and $5y$ | $x$ and $y$ ✗ | No |
| $4x$ and $4x^2$ | $x$ and $x^2$ ✗ | No |

> 🍎 **Think apples:** $4$ apples $+ 7$ apples $= 11$ apples. But $4$ apples $+ 7$ oranges can't be combined!`
      },
      {
        id: 'se-p1-combining',
        type: 'text' as const,
        content: `## ➕ Combining Like Terms

To combine like terms, **add or subtract the coefficients** (the numbers in front) and **keep the variable part the same**.

### Example: $4x + 7x$
- Both terms have $x$.
- Add the coefficients: $4 + 7 = 11$.
- Keep the variable: $x$.
- **Answer:** $11x$

### Example: $9y - 3y$
- Both terms have $y$.
- Subtract the coefficients: $9 - 3 = 6$.
- **Answer:** $6y$

> ⚠️ **Watch out:** $x + x$ is **not** $x^2$! You are adding, so $x + x = 2x$. You only get $x^2$ when you *multiply*.`
      },
      {
        id: 'se-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'Which pair below are **like terms** (so they can be combined)?',
              options: [
                '$6x$ and $-2x$',
                '$5x$ and $5y$',
                '$3x$ and $3x^2$',
                '$4xy$ and $4x$'
              ],
              correctAnswer: 0,
              explanation: 'Like terms have the exact same variable part. $6x$ and $-2x$ both have just $x$, so they are like terms and can be combined into $4x$.'
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
    topicSlug: 'simplifying-expressions',
    sections: [
      {
        id: 'se-p2-worked',
        type: 'text' as const,
        content: `## 📝 Worked Examples: Grouping Like Terms

When an expression has a **mix** of variable terms and constants, the trick is to **group the like terms first**, then combine each group.

### Example 1 — Variables and constants
Simplify $3x + 7 + 2x - 4$.

- **Step 1 — Group like terms.**
  - $x$ terms: $3x + 2x$
  - constants: $7 - 4$
- **Step 2 — Combine each group.**
  - $3x + 2x = 5x$
  - $7 - 4 = 3$
- **Step 3 — Write the answer** (variable term first, then the constant).
  - **Answer:** $5x + 3$

### Example 2 — Three of the same variable
Simplify $8a - 5a + 3a$.

- All three terms have the variable $a$.
- Combine the coefficients **in order**, keeping each sign: $8 - 5 + 3 = 6$.
- **Answer:** $6a$

### Example 3 — Two different variables
Simplify $5x + 4y - 2x + y$.

- **$x$ terms:** $5x - 2x = 3x$
- **$y$ terms:** $4y + y = 5y$  *(remember: $y$ means $1y$)*
- The $x$ group and $y$ group are **unlike**, so they stay separate.
- **Answer:** $3x + 5y$`
      },
      {
        id: 'se-p2-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Your Turn

Simplify the expression $6x + 9 + 2x - 5$ step by step.

**Box 1:** Combine the $x$ terms ($6x + 2x$). Type just the number that goes in front of $x$ (the coefficient).
**Box 2:** Combine the constants ($9 - 5$). Type the number.
**Box 3:** Write the fully simplified expression (like \`8x+4\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '8x+4'],
          hint1: 'Group like terms: the $x$ terms are $6x + 2x$, and the constants are $9 - 5$.',
          hint2: 'For Box 3, put the combined $x$ term first, then the combined constant: coefficient-of-x, then the number.',
          explanation: 'The $x$ terms combine to $6x + 2x = 8x$ (Box 1 = 8). The constants combine to $9 - 5 = 4$ (Box 2 = 4). So the simplified expression is $8x + 4$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'simplifying-expressions',
    sections: [
      {
        id: 'se-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice: Combine Like Terms

Add or subtract the coefficients **in the order they appear**, and keep each term's sign.`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $5x + 3x - 2x$',
              options: ['$6x$', '$10x$', '$6x^3$', '$x$'],
              correctAnswer: 0,
              explanation: 'All three terms have $x$, so combine the coefficients: $5 + 3 - 2 = 6$. The variable stays $x$, giving $6x$.'
            },
            {
              question: 'Simplify: $7m + 4 - 3m + 2$',
              options: ['$4m + 6$', '$10m + 6$', '$4m + 2$', '$10m$'],
              correctAnswer: 0,
              explanation: 'Combine the $m$ terms: $7m - 3m = 4m$. Combine the constants: $4 + 2 = 6$. The result is $4m + 6$.'
            }
          ]
        }
      },
      {
        id: 'se-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Choose the Simplified Form

Pick the correct simplified expression for each one.`,
        exercise: {
          dropdowns: [
            { label: '$2a + 6a$ simplifies to', options: ['$8a$', '$8a^2$', '$12a$', '$2a^2$'] },
            { label: '$9k - 9k + 4$ simplifies to', options: ['$4$', '$0$', '$9k + 4$', '$4k$'] }
          ],
          correctAnswers: ['$8a$', '$4$'],
          hint1: 'Combine the coefficients of like terms; if all the variable terms cancel out, only the constant is left.',
          explanation: 'For $2a + 6a$, add coefficients: $2 + 6 = 8$, giving $8a$. For $9k - 9k + 4$, the $k$ terms cancel ($9k - 9k = 0$), leaving just the constant $4$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'simplifying-expressions',
    sections: [
      {
        id: 'se-p4-context',
        type: 'text' as const,
        content: `## 🌍 The Distributive Property in Real Life

Sometimes an expression has **parentheses**. To remove them, use the **distributive property**:

$$a(b + c) = ab + ac$$

Multiply the number outside the parentheses by **each** term inside.

### Example: $3(x + 4)$
- $3 \\times x = 3x$
- $3 \\times 4 = 12$
- **Answer:** $3x + 12$

### Example with a negative: $-2(y - 5)$
- $-2 \\times y = -2y$
- $-2 \\times (-5) = +10$
- **Answer:** $-2y + 10$  *(don't forget to distribute the negative sign!)*

**Real-world story:** Imagine **3 gift bags**, and each bag holds $x$ stickers plus $4$ erasers. The total is $3(x + 4)$. Distributing gives $3x + 12$ — that's $3x$ stickers and $12$ erasers in all. Same items, written more clearly!

| Word phrase | Expression | Simplified |
|---|---|---|
| 3 bags of ($x$ stickers + 4 erasers) | $3(x + 4)$ | $3x + 12$ |
| 5 boxes of ($n$ pens + 2 pencils) | $5(n + 2)$ | $5n + 10$ |`
      },
      {
        id: 'se-p4-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Word Problem

A party-favor company packs **4 boxes**. Each box contains $x$ toys plus $3$ candies. The total is $4(x + 3)$.

**Box 1:** Multiply 4 by the $x$ inside. Type just the number in front of $x$ (the coefficient).
**Box 2:** Multiply 4 by the $3$ inside. Type the number.
**Box 3:** Write the simplified expression for the total (like \`4x+12\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '12', '4x+12'],
          hint1: 'Distribute: multiply the 4 outside by EACH term inside the parentheses, $x$ and then $3$.',
          hint2: '$4 \\times x = 4x$, and $4 \\times 3 = 12$. Then write them added together.',
          explanation: 'Distributing 4 over $(x + 3)$ gives $4 \\times x = 4x$ (Box 1 = 4) and $4 \\times 3 = 12$ (Box 2 = 12). The simplified total is $4x + 12$.'
        }
      },
      {
        id: 'se-p4-mc',
        type: 'multiple-choice' as const,
        content: `## ✅ Apply It`,
        exercise: {
          questions: [
            {
              question: 'A gardener plants **2 rows**, and each row has $(y - 6)$ plants: $2(y - 6)$. What is the simplified expression?',
              options: ['$2y - 12$', '$2y - 6$', '$2y + 12$', '$2y - 8$'],
              correctAnswer: 0,
              explanation: 'Distribute the 2 to each term: $2 \\times y = 2y$ and $2 \\times (-6) = -12$. So $2(y - 6) = 2y - 12$.'
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
    topicSlug: 'simplifying-expressions',
    sections: [
      {
        id: 'se-p5-summary',
        type: 'text' as const,
        content: `## 🏆 Review: Simplifying Expressions

You can now shrink messy expressions into clean ones using **like terms** and the **distributive property**. Here's the big picture:

| Tool | What to Do | Example |
|---|---|---|
| **Like terms** | Same variable + same power | $3x$ and $5x$ |
| **Combine like terms** | Add/subtract coefficients, keep the variable | $4x + 7x = 11x$ |
| **Group first** | Gather $x$ terms, then constants | $3x + 7 + 2x - 4 = 5x + 3$ |
| **Distribute** | Multiply outside number by each inside term | $3(x + 4) = 3x + 12$ |
| **Distribute a negative** | Carry the negative onto every term | $-2(y - 5) = -2y + 10$ |
| **Standard form** | Variable term first, then constant | $5x + 3$ |

> 🔑 **Two-step strategy for tough ones:** First **distribute** to remove parentheses, then **combine like terms**.
>
> Example: $2(x + 3) + 4x = 2x + 6 + 4x = 6x + 6$.`
      },
      {
        id: 'se-p5-challenge',
        type: 'multiple-choice' as const,
        content: `## 🚀 Mixed Challenge`,
        exercise: {
          questions: [
            {
              question: 'Simplify completely: $2(x + 3) + 4x$',
              options: ['$6x + 6$', '$6x + 3$', '$8x + 6$', '$6x + 12$'],
              correctAnswer: 0,
              explanation: 'First distribute: $2(x + 3) = 2x + 6$. The expression becomes $2x + 6 + 4x$. Combine like terms: $2x + 4x = 6x$, so the answer is $6x + 6$.'
            },
            {
              question: 'Simplify completely: $5y + 8 - 2(y + 1)$',
              options: ['$3y + 6$', '$3y + 10$', '$7y + 6$', '$3y + 9$'],
              correctAnswer: 0,
              explanation: 'Distribute the $-2$: $-2(y + 1) = -2y - 2$. Now you have $5y + 8 - 2y - 2$. Combine: $5y - 2y = 3y$ and $8 - 2 = 6$, giving $3y + 6$.'
            }
          ]
        }
      }
    ]
  }
]
