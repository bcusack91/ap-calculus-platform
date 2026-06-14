import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'operations-scientific-notation',
    sections: [
      {
        id: 'operations-scientific-notation-p1-intro',
        type: 'text' as const,
        content: `
# 🚀 Operations with Scientific Notation

**Part 1 of 5 — Concept Introduction**

Scientists deal with **huge** numbers (the distance to the Sun is about $150{,}000{,}000$ km) and **tiny** numbers (a red blood cell is about $0.000007$ m wide). Writing all those zeros is a pain, so we use a shortcut called **scientific notation**.

## Quick Review: What Is Scientific Notation?

A number in scientific notation looks like this:

$$a \\times 10^{n}$$

- $a$ is the **coefficient** — a number from $1$ up to (but not including) $10$, so $1 \\le a < 10$
- $n$ is the **exponent** — any integer (it can be positive, negative, or zero)

**Examples:**

| Standard form | Scientific notation |
|---------------|---------------------|
| $3{,}000$ | $3 \\times 10^{3}$ |
| $6{,}500{,}000$ | $6.5 \\times 10^{6}$ |
| $0.0045$ | $4.5 \\times 10^{-3}$ |

A **positive** exponent means a big number; a **negative** exponent means a small number (less than 1). In this lesson, you'll learn how to **multiply** and **divide** numbers written this way. 🌟
    `
      },
      {
        id: 'operations-scientific-notation-p1-multiply',
        type: 'text' as const,
        content: `
## Multiplying in Scientific Notation ✖️

The trick is to handle the coefficients and the powers of $10$ **separately**.

**Rule:** Multiply the coefficients, and **add** the exponents.

$$(a \\times 10^{m}) \\times (b \\times 10^{n}) = (a \\times b) \\times 10^{m+n}$$

**Example:** $(3 \\times 10^{4}) \\times (2 \\times 10^{5})$

- **Step 1 — Multiply coefficients:** $3 \\times 2 = 6$
- **Step 2 — Add exponents:** $10^{4+5} = 10^{9}$
- **Step 3 — Combine:** $6 \\times 10^{9}$

**Answer:** $6 \\times 10^{9}$ ✅

Why add the exponents? Because multiplying powers of the same base means adding their exponents: $10^{4} \\times 10^{5} = 10^{9}$.
    `
      },
      {
        id: 'operations-scientific-notation-p1-divide',
        type: 'text' as const,
        content: `
## Dividing in Scientific Notation ➗

Division works the same way, just in reverse.

**Rule:** Divide the coefficients, and **subtract** the exponents.

$$(a \\times 10^{m}) \\div (b \\times 10^{n}) = (a \\div b) \\times 10^{m-n}$$

**Example:** $(8 \\times 10^{6}) \\div (2 \\times 10^{3})$

- **Step 1 — Divide coefficients:** $8 \\div 2 = 4$
- **Step 2 — Subtract exponents:** $10^{6-3} = 10^{3}$
- **Step 3 — Combine:** $4 \\times 10^{3}$

**Answer:** $4 \\times 10^{3}$ ✅

**The big idea to remember:**

| Operation | What to do with coefficients | What to do with exponents |
|-----------|------------------------------|---------------------------|
| Multiply | Multiply them | **Add** them |
| Divide | Divide them | **Subtract** them |
    `
      },
      {
        id: 'operations-scientific-notation-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you know which operation goes with which exponent rule.
    `,
        exercise: {
          questions: [
            {
              question: 'When you **multiply** two numbers in scientific notation, what do you do with the exponents?',
              options: [
                'Multiply the exponents',
                'Add the exponents',
                'Subtract the exponents',
                'Leave the exponents unchanged'
              ],
              correctAnswer: 1,
              explanation: 'To multiply powers of $10$, you add their exponents: $10^{m} \\times 10^{n} = 10^{m+n}$. (You multiply the coefficients but add the exponents.)'
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
    topicSlug: 'operations-scientific-notation',
    sections: [
      {
        id: 'operations-scientific-notation-p2-text',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Sometimes after you multiply or divide, the coefficient is **not** between $1$ and $10$. When that happens, you have to **adjust** the answer back into proper scientific notation.

## Adjusting the Answer ⚙️

**Example A — coefficient too big:** $(4 \\times 10^{3}) \\times (5 \\times 10^{-2})$

- **Multiply coefficients:** $4 \\times 5 = 20$
- **Add exponents:** $10^{3 + (-2)} = 10^{1}$
- **Combine:** $20 \\times 10^{1}$

But $20$ is **not** between $1$ and $10$! Rewrite $20 = 2 \\times 10^{1}$, so:

$$20 \\times 10^{1} = 2 \\times 10^{1} \\times 10^{1} = 2 \\times 10^{2}$$

**Answer:** $2 \\times 10^{2}$ ✅

**Rule of thumb:** When the coefficient is $10$ or more, move the decimal **left** and add $1$ to the exponent for each place you move.
    `
      },
      {
        id: 'operations-scientific-notation-p2-text2',
        type: 'text' as const,
        content: `
## One More Worked Example 🔎

**Example B:** $(6.5 \\times 10^{-3}) \\times (4 \\times 10^{7})$

- **Multiply coefficients:** $6.5 \\times 4 = 26$
- **Add exponents:** $10^{-3 + 7} = 10^{4}$
- **Combine:** $26 \\times 10^{4}$

The coefficient $26$ is too big. Move the decimal one place left ($26 \\to 2.6$) and add $1$ to the exponent:

$$26 \\times 10^{4} = 2.6 \\times 10^{5}$$

**Answer:** $2.6 \\times 10^{5}$ ✅

**Example C — division:** $(7.2 \\times 10^{4}) \\div (1.8 \\times 10^{-2})$

- **Divide coefficients:** $7.2 \\div 1.8 = 4$
- **Subtract exponents:** $10^{4 - (-2)} = 10^{4+2} = 10^{6}$

**Answer:** $4 \\times 10^{6}$ ✅ (Subtracting a negative is the same as adding!)
    `
      },
      {
        id: 'operations-scientific-notation-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Work through $(3 \\times 10^{4}) \\times (2 \\times 10^{5})$ one step at a time. Type a number in each box.

1) Multiply the **coefficients**: $3 \\times 2 = \\,?$

2) Add the **exponents**: $4 + 5 = \\,?$ (this is the new power of $10$)

3) The final answer is $\\,?\\, \\times 10^{9}$ — what is the coefficient?
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '9', '6'],
          hint1: 'Multiply the front numbers, then add the exponents. The coefficient $6$ already sits between $1$ and $10$, so no adjusting is needed.',
          hint2: '$3 \\times 2 = 6$ and $4 + 5 = 9$, so the answer is $6 \\times 10^{9}$.',
          explanation: 'Multiply coefficients $3 \\times 2 = 6$, add exponents $4 + 5 = 9$. Since $6$ is already between $1$ and $10$, the final answer is $6 \\times 10^{9}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'operations-scientific-notation',
    sections: [
      {
        id: 'operations-scientific-notation-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Try these on your own. Multiply or divide the coefficients first, handle the exponents next, then adjust if the coefficient lands outside $1 \\le a < 10$.
    `,
        exercise: {
          questions: [
            {
              question: 'Simplify: $(2 \\times 10^{3}) \\times (4 \\times 10^{2})$',
              options: [
                '$8 \\times 10^{5}$',
                '$8 \\times 10^{6}$',
                '$6 \\times 10^{5}$',
                '$8 \\times 10^{1}$'
              ],
              correctAnswer: 0,
              explanation: 'Multiply coefficients $2 \\times 4 = 8$ and add exponents $3 + 2 = 5$, giving $8 \\times 10^{5}$. The coefficient $8$ is already between $1$ and $10$.'
            },
            {
              question: 'Simplify: $(9 \\times 10^{8}) \\div (3 \\times 10^{2})$',
              options: [
                '$3 \\times 10^{10}$',
                '$6 \\times 10^{6}$',
                '$3 \\times 10^{6}$',
                '$3 \\times 10^{4}$'
              ],
              correctAnswer: 2,
              explanation: 'Divide coefficients $9 \\div 3 = 3$ and subtract exponents $8 - 2 = 6$, giving $3 \\times 10^{6}$.'
            }
          ]
        }
      },
      {
        id: 'operations-scientific-notation-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Choose the Correct Result** 🔍

Pick the value that completes each statement. Watch out for answers that need adjusting!
    `,
        exercise: {
          dropdowns: [
            {
              label: '$(5 \\times 10^{6}) \\times (3 \\times 10^{2}) =$',
              options: ['$15 \\times 10^{8}$', '$1.5 \\times 10^{9}$', '$1.5 \\times 10^{8}$', '$8 \\times 10^{8}$']
            },
            {
              label: '$(8 \\times 10^{5}) \\div (2 \\times 10^{9}) =$',
              options: ['$4 \\times 10^{4}$', '$4 \\times 10^{-4}$', '$6 \\times 10^{-4}$', '$4 \\times 10^{14}$']
            }
          ],
          correctAnswers: ['$1.5 \\times 10^{9}$', '$4 \\times 10^{-4}$'],
          hint1: 'For the first, $5 \\times 3 = 15$ and $6 + 2 = 8$ gives $15 \\times 10^{8}$ — but $15$ is too big, so rewrite it as $1.5 \\times 10^{9}$. For the second, subtract the exponents.',
          explanation: '$(5 \\times 3) = 15$, $(6+2) = 8$, so $15 \\times 10^{8} = 1.5 \\times 10^{9}$ after adjusting. For division, $8 \\div 2 = 4$ and $5 - 9 = -4$, giving $4 \\times 10^{-4}$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'operations-scientific-notation',
    sections: [
      {
        id: 'operations-scientific-notation-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Uses**

Scientific notation isn't just for textbooks — it's how scientists, engineers, and astronomers actually do math with extreme numbers.

## Example: Distance to the Sun ☀️

Light travels about $3 \\times 10^{5}$ km every second. The Sun is roughly $1.5 \\times 10^{8}$ km away. **How many seconds** does sunlight take to reach Earth?

To find time, we **divide** distance by speed:

$$\\frac{1.5 \\times 10^{8}}{3 \\times 10^{5}}$$

- **Divide coefficients:** $1.5 \\div 3 = 0.5$
- **Subtract exponents:** $10^{8-5} = 10^{3}$
- **Combine:** $0.5 \\times 10^{3}$

The coefficient $0.5$ is **too small** (less than $1$), so move the decimal one place **right** and subtract $1$ from the exponent:

$$0.5 \\times 10^{3} = 5 \\times 10^{2} = 500 \\text{ seconds}$$

That's about **8 minutes** for sunlight to reach us! 🌞
    `
      },
      {
        id: 'operations-scientific-notation-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem** 🧮

A computer performs $2 \\times 10^{9}$ operations every second. It runs a task for $4 \\times 10^{3}$ seconds.

Find the **total** number of operations by multiplying.

1) Multiply the **coefficients**: $2 \\times 4 = \\,?$

2) Add the **exponents**: $9 + 3 = \\,?$

3) The total in scientific notation is $8 \\times 10^{?}$ — what is the exponent? (No adjusting needed, since $8$ is between $1$ and $10$.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '12', '12'],
          hint1: 'Multiply the coefficients ($2 \\times 4$) and add the exponents ($9 + 3$).',
          hint2: '$2 \\times 4 = 8$ and $9 + 3 = 12$, so the answer is $8 \\times 10^{12}$ operations.',
          explanation: 'Multiply coefficients $2 \\times 4 = 8$ and add exponents $9 + 3 = 12$. The coefficient $8$ is already in range, so the total is $8 \\times 10^{12}$ operations.'
        }
      },
      {
        id: 'operations-scientific-notation-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Apply It** 🌐

A single bacterium has a mass of about $5 \\times 10^{-12}$ g. A scientist has a colony of $3 \\times 10^{8}$ bacteria. What is the **total mass** of the colony?
    `,
        exercise: {
          questions: [
            {
              question: 'Total mass $= (5 \\times 10^{-12}) \\times (3 \\times 10^{8})$ grams. Which is correct?',
              options: [
                '$15 \\times 10^{-4}$ g',
                '$1.5 \\times 10^{-3}$ g',
                '$1.5 \\times 10^{-4}$ g',
                '$8 \\times 10^{-4}$ g'
              ],
              correctAnswer: 1,
              explanation: 'Multiply coefficients $5 \\times 3 = 15$ and add exponents $-12 + 8 = -4$, giving $15 \\times 10^{-4}$. Adjusting $15$ to $1.5$ raises the exponent by $1$, so the answer is $1.5 \\times 10^{-3}$ g.'
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
    topicSlug: 'operations-scientific-notation',
    sections: [
      {
        id: 'operations-scientific-notation-p5-text',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You've learned how to multiply and divide numbers in scientific notation. Here's the whole playbook in one place:

## Summary Table 📋

| Step | Multiplication | Division |
|------|----------------|----------|
| Coefficients | Multiply them | Divide them |
| Exponents | **Add** them | **Subtract** them |
| Then... | Adjust if coefficient is not $1 \\le a < 10$ | Adjust if coefficient is not $1 \\le a < 10$ |

**Adjusting reminders:**

- Coefficient is **$10$ or more** → move decimal **left**, **add** to the exponent.
- Coefficient is **less than $1$** → move decimal **right**, **subtract** from the exponent.
- Subtracting a negative exponent is the same as **adding**: $m - (-n) = m + n$.

Now take on the final challenge below! 💪
    `
      },
      {
        id: 'operations-scientific-notation-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix everything: multiplying, dividing, negative exponents, and adjusting.
    `,
        exercise: {
          questions: [
            {
              question: 'Simplify: $(6 \\times 10^{-3}) \\times (5 \\times 10^{7})$',
              options: [
                '$3 \\times 10^{4}$',
                '$3 \\times 10^{5}$',
                '$30 \\times 10^{4}$',
                '$1.1 \\times 10^{5}$'
              ],
              correctAnswer: 1,
              explanation: 'Multiply coefficients $6 \\times 5 = 30$ and add exponents $-3 + 7 = 4$, giving $30 \\times 10^{4}$. Adjusting $30$ to $3.0$ raises the exponent by $1$, so the answer is $3 \\times 10^{5}$.'
            },
            {
              question: 'Simplify: $(1.2 \\times 10^{5}) \\div (4 \\times 10^{-2})$',
              options: [
                '$3 \\times 10^{3}$',
                '$0.3 \\times 10^{7}$',
                '$3 \\times 10^{6}$',
                '$3 \\times 10^{7}$'
              ],
              correctAnswer: 2,
              explanation: 'Divide coefficients $1.2 \\div 4 = 0.3$ and subtract exponents $5 - (-2) = 7$, giving $0.3 \\times 10^{7}$. Adjusting $0.3$ to $3$ lowers the exponent by $1$, so the answer is $3 \\times 10^{6}$.'
            }
          ]
        }
      }
    ]
  }
]
