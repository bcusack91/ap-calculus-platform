import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'introduction-to-functions-grade8',
    sections: [
      {
        id: 'introduction-to-functions-grade8-p1-intro',
        type: 'text' as const,
        content: `
# ⚙️ Introduction to Functions

**Part 1 of 5 — Concept Introduction**

Think about a vending machine. You press a button (the **input**), and exactly one snack drops out (the **output**). You would be pretty upset if you pressed B4 and *sometimes* got chips and *sometimes* got a candy bar! A good machine gives you **one** predictable result for each button.

That is the whole idea behind a **function**.

## What Is a Function?

A **function** is a relationship where **each input has exactly one output**.

- The **input** is the value you put in (often called $x$).
- The **output** is the value you get back (often called $y$).

The key word is **exactly one**. One input can never lead to two different outputs.

## A Simple Example

$$y = 2x + 3$$

For each value of $x$, there is exactly one value of $y$:

| Input $x$ | Calculation | Output $y$ |
|-----------|-------------|------------|
| $0$ | $2(0) + 3$ | $3$ |
| $1$ | $2(1) + 3$ | $5$ |
| $2$ | $2(2) + 3$ | $7$ |

Notice that no input ever produces two different outputs. That makes this a function. ✅
    `
      },
      {
        id: 'introduction-to-functions-grade8-p1-notation',
        type: 'text' as const,
        content: `
## Function Notation

Mathematicians have a special, tidy way to write functions called **function notation**:

$$f(x) = 2x + 3$$

You read this as **"f of x equals 2x plus 3."**

> ⚠️ **Careful:** $f(x)$ does **not** mean "f times x." The $f$ is the *name* of the function, and the $x$ inside the parentheses is the input you are plugging in.

Function notation is handy because it tells you the input right there in the parentheses. When you see $f(4)$, it is asking: *"What is the output when the input is 4?"*

## Finding $f(4)$

To find $f(4)$, replace every $x$ with $4$:

$$f(4) = 2(4) + 3 = 8 + 3 = 11$$

So $f(4) = 11$. The input $4$ produces the output $11$.

**Quick practice in your head:** What is $f(0)$? Replace $x$ with $0$: $f(0) = 2(0) + 3 = 3$.
    `
      },
      {
        id: 'introduction-to-functions-grade8-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Remember the defining rule: each input must give **exactly one** output.
    `,
        exercise: {
          questions: [
            {
              question: 'Which statement best describes what makes a relationship a **function**?',
              options: [
                'Each input has exactly one output',
                'Each input can have many different outputs',
                'Every output must be a positive number',
                'The input and output must always be equal'
              ],
              correctAnswer: 0,
              explanation: 'A function is a relationship where each input is paired with exactly one output, just like a vending machine button gives you one predictable snack.'
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
    topicSlug: 'introduction-to-functions-grade8',
    sections: [
      {
        id: 'introduction-to-functions-grade8-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Evaluating Functions Step by Step**

When you **evaluate** a function, you find the output for a specific input. Follow the same steps every time:

1. **Write** the function rule.
2. **Replace** every $x$ with the input value (use parentheses!).
3. **Simplify** using order of operations.

## Example 1: Evaluate $f(x) = 3x - 5$ at $x = 4$

- **Write:** $f(x) = 3x - 5$
- **Replace** $x$ with $4$: $f(4) = 3(4) - 5$
- **Simplify:** $f(4) = 12 - 5 = 7$

So $f(4) = 7$. ✅

## Example 2: Evaluate $g(x) = x^2 + 1$ at $x = 3$

- **Write:** $g(x) = x^2 + 1$
- **Replace** $x$ with $3$: $g(3) = (3)^2 + 1$
- **Simplify:** $g(3) = 9 + 1 = 10$

So $g(3) = 10$. The parentheses keep you from making sign and order mistakes.

> 💡 **Tip:** Always put the input inside parentheses when you substitute. This matters a lot when the input is negative, like $f(-2)$.
    `
      },
      {
        id: 'introduction-to-functions-grade8-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Use the function $f(x) = 2x + 1$ to fill in the table. Replace $x$ with each input and simplify.

1) What is $f(0)$?  (Type a single number.)

2) What is $f(3)$?  (Type a single number.)

3) What is $f(5)$?  (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '7', '11'],
          hint1: 'Replace the $x$ in $2x + 1$ with the input number, then multiply before adding.',
          hint2: 'For $f(3)$: $2(3) + 1 = 6 + 1$. Do the multiplication first, then add 1.',
          explanation: 'Using $f(x) = 2x + 1$: $f(0) = 2(0) + 1 = 1$, $f(3) = 2(3) + 1 = 7$, and $f(5) = 2(5) + 1 = 11$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'introduction-to-functions-grade8',
    sections: [
      {
        id: 'introduction-to-functions-grade8-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

There are **four ways** to represent the same function: an **equation**, a **table**, a **graph**, and **words**. Let's practice spotting and using them.
    `,
        exercise: {
          questions: [
            {
              question: 'The words *"The output is one more than twice the input"* describe which equation?',
              options: [
                '$f(x) = 2x + 1$',
                '$f(x) = x + 2$',
                '$f(x) = 2x - 1$',
                '$f(x) = x^2 + 1$'
              ],
              correctAnswer: 0,
              explanation: '"Twice the input" is $2x$, and "one more than" that adds 1, giving $f(x) = 2x + 1$.'
            },
            {
              question: 'A table shows the input $x = 2$ paired with **two different** outputs, $y = 5$ and $y = 8$. Is this relationship a function?',
              options: [
                'No, because one input has two different outputs',
                'Yes, because the outputs are different numbers',
                'Yes, because every input is allowed twice',
                'No, because the inputs are not in order'
              ],
              correctAnswer: 0,
              explanation: 'A function requires each input to have exactly one output. Since $x = 2$ gives two different outputs, this is not a function.'
            }
          ]
        }
      },
      {
        id: 'introduction-to-functions-grade8-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Identify the Representation** 🔎

Each item below is one of the four ways to represent a function. Choose the correct name for each.

- **Item A:** $f(x) = 4x - 2$
- **Item B:** "The output is three times the input."
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Item A is represented as a(n)...',
              options: ['equation', 'table', 'graph', 'words']
            },
            {
              label: 'Item B is represented in...',
              options: ['equation', 'table', 'graph', 'words']
            }
          ],
          correctAnswers: ['equation', 'words'],
          hint1: 'Item A uses function notation with $x$, $=$, and operations. Item B is written as a sentence in plain English.',
          explanation: 'Item A, $f(x) = 4x - 2$, is an **equation**. Item B is a sentence describing the rule, so it is represented in **words**.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'introduction-to-functions-grade8',
    sections: [
      {
        id: 'introduction-to-functions-grade8-p4-context',
        type: 'text' as const,
        content: `
# 🌎 Functions in the Real World

**Part 4 of 5 — Application & Word Problems**

Functions are everywhere once you start looking. Anytime one quantity depends on another in a predictable way, you have a function.

## Renting a Bike 🚲

A bike-share company charges a flat **\\$3 fee** plus **\\$2 for every hour** you ride. We can write the total cost as a function of the number of hours, $h$:

$$C(h) = 2h + 3$$

- The **input** $h$ is the number of hours you ride.
- The **output** $C(h)$ is the total cost in dollars.

| Hours $h$ | Cost $C(h) = 2h + 3$ | Total |
|-----------|----------------------|-------|
| $1$ | $2(1) + 3$ | \\$5 |
| $2$ | $2(2) + 3$ | \\$7 |
| $4$ | $2(4) + 3$ | \\$11 |

This is a function because each number of hours produces **exactly one** total cost. You will never be charged two different prices for the same ride length.
    `
      },
      {
        id: 'introduction-to-functions-grade8-p4-input',
        type: 'input-boxes' as const,
        content: `
**Apply It** 🧮

Use the bike-rental function $C(h) = 2h + 3$, where $h$ is the number of hours and $C(h)$ is the total cost in dollars.

1) What is the total cost for a $3$-hour ride? (Type the number of dollars only.)

2) What is the total cost for a $5$-hour ride? (Type the number of dollars only.)

3) What is the cost if you ride for $0$ hours (just the flat fee)? (Type the number of dollars only.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '13', '3'],
          hint1: 'Replace $h$ in $2h + 3$ with the number of hours, then multiply before adding.',
          hint2: 'For a 3-hour ride: $2(3) + 3 = 6 + 3$. Riding 0 hours leaves only the flat fee.',
          explanation: 'Using $C(h) = 2h + 3$: a 3-hour ride costs $2(3) + 3 = 9$ dollars, a 5-hour ride costs $2(5) + 3 = 13$ dollars, and 0 hours costs $2(0) + 3 = 3$ dollars (just the flat fee).'
        }
      },
      {
        id: 'introduction-to-functions-grade8-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Application Check** 🎯

Think about what the input and output mean in the real-world story.
    `,
        exercise: {
          questions: [
            {
              question: 'In the function $C(h) = 2h + 3$ for bike rentals, what does the $3$ represent?',
              options: [
                'A flat starting fee you pay no matter how long you ride',
                'The cost per hour of riding',
                'The number of hours in the ride',
                'The total cost of a 3-hour ride'
              ],
              correctAnswer: 0,
              explanation: 'The $3$ is added on every time and does not change with the hours, so it is the flat starting fee. The $2$ in $2h$ is the cost per hour.'
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
    topicSlug: 'introduction-to-functions-grade8',
    sections: [
      {
        id: 'introduction-to-functions-grade8-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You have learned what a function is, how to read function notation, the four ways to represent functions, and how to test whether something is a function. Here is the big picture:

## Function Cheat Sheet

| Idea | What to Remember |
|------|------------------|
| **Function** | Each input has **exactly one** output |
| **Notation** | $f(x)$ means "the output when the input is $x$" |
| **Evaluate** | Replace $x$ with the input, then simplify |
| **Four representations** | Equation, table, graph, words |
| **Vertical Line Test** | If a vertical line hits a graph more than once, it is **not** a function |

## The Vertical Line Test 📏

To check a **graph**, imagine sliding a vertical line across it:

- Hits the graph at **one point everywhere** → it **is** a function. ✅
- Hits the graph at **two or more points** anywhere → it is **not** a function. ❌

This works because a single input ($x$) should never line up with two different outputs ($y$).
    `
      },
      {
        id: 'introduction-to-functions-grade8-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These questions mix everything from this lesson. Take your time and reason through each one.
    `,
        exercise: {
          questions: [
            {
              question: 'For the function $f(x) = 5x - 4$, what is $f(2)$?',
              options: [
                '$6$',
                '$10$',
                '$1$',
                '$14$'
              ],
              correctAnswer: 0,
              explanation: 'Replace $x$ with $2$: $f(2) = 5(2) - 4 = 10 - 4 = 6$.'
            },
            {
              question: 'A graph is tested with the **vertical line test**, and one vertical line crosses it at two points. What does this tell you?',
              options: [
                'The graph is NOT a function',
                'The graph is definitely a function',
                'The graph has no outputs',
                'The graph must be a straight line'
              ],
              correctAnswer: 0,
              explanation: 'If a vertical line touches the graph at more than one point, then one input has more than one output, so the graph fails the vertical line test and is not a function.'
            }
          ]
        }
      }
    ]
  }
]
