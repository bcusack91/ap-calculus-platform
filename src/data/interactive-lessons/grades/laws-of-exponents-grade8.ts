import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'laws-of-exponents-grade8',
    sections: [
      {
        id: 'loe-p1-intro',
        type: 'text' as const,
        content: `# ⚡ Laws of Exponents

## What Is an Exponent?

An **exponent** tells you how many times to multiply a **base** by itself.

In the power $a^m$:
- $a$ is the **base** (the number being multiplied)
- $m$ is the **exponent** (how many times the base is used as a factor)

For example, $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$. The base $2$ appears as a factor $4$ times.

Writing things out the long way works, but it gets messy fast — imagine writing $2^{20}$! The **laws of exponents** are shortcuts that let us multiply, divide, and stack powers **without** expanding everything.

> 🔑 **Big Idea:** Each law is just a fast way to count factors. If you ever forget a rule, you can rebuild it by writing out the multiplication.`
      },
      {
        id: 'loe-p1-product-quotient',
        type: 'text' as const,
        content: `## ✖️ The Product Rule

When you **multiply** powers with the **same base**, you **add** the exponents:

$$a^m \\times a^n = a^{m+n}$$

**Why it works:** $x^3 \\times x^4 = (x \\cdot x \\cdot x)(x \\cdot x \\cdot x \\cdot x) = x^7$. There are $3 + 4 = 7$ factors of $x$.

**Example:** $x^3 \\times x^4 = x^{3+4} = x^7$

## ➗ The Quotient Rule

When you **divide** powers with the **same base**, you **subtract** the exponents:

$$\\frac{a^m}{a^n} = a^{m-n}$$

**Why it works:** dividing cancels matching factors from the top and bottom.

**Example:** $\\dfrac{x^7}{x^3} = x^{7-3} = x^4$

> ⚠️ **Same base required!** These shortcuts only work when the bases match. You cannot combine $2^3 \\times 5^4$ this way because $2 \\neq 5$.`
      },
      {
        id: 'loe-p1-power',
        type: 'text' as const,
        content: `## 🔁 The Power Rule

When you raise a **power to another power**, you **multiply** the exponents:

$$(a^m)^n = a^{mn}$$

**Why it works:** $(x^3)^4$ means $x^3$ used as a factor $4$ times: $x^3 \\cdot x^3 \\cdot x^3 \\cdot x^3 = x^{12}$. That's $3 \\times 4 = 12$ factors.

**Example:** $(x^3)^4 = x^{3 \\times 4} = x^{12}$

| Rule | What you do | Example |
|---|---|---|
| **Product** | **Add** exponents | $a^m \\times a^n = a^{m+n}$ |
| **Quotient** | **Subtract** exponents | $\\dfrac{a^m}{a^n} = a^{m-n}$ |
| **Power** | **Multiply** exponents | $(a^m)^n = a^{mn}$ |

> 🧠 **Don't mix them up!** Multiplying powers means *add* exponents, but raising a power to a power means *multiply* exponents.`
      },
      {
        id: 'loe-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'When you **multiply** two powers that have the **same base**, what should you do with the exponents?',
              options: [
                'Add the exponents',
                'Multiply the exponents',
                'Subtract the exponents',
                'Keep them the same'
              ],
              correctAnswer: 0,
              explanation: 'The product rule says $a^m \\times a^n = a^{m+n}$. Multiplying powers with the same base means you ADD the exponents, because you are combining the factors.'
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
    topicSlug: 'laws-of-exponents-grade8',
    sections: [
      {
        id: 'loe-p2-worked',
        type: 'text' as const,
        content: `## 📝 Worked Examples

Let's apply the three main rules step by step.

### Example 1 — Product Rule
Simplify $5^2 \\times 5^6$.

- The base is the same ($5$), so **add** the exponents.
- $2 + 6 = 8$
- **Answer:** $5^8$

### Example 2 — Quotient Rule
Simplify $\\dfrac{a^9}{a^4}$.

- The base is the same ($a$), so **subtract** the exponents (top minus bottom).
- $9 - 4 = 5$
- **Answer:** $a^5$

### Example 3 — Power Rule
Simplify $(b^4)^3$.

- A power raised to a power, so **multiply** the exponents.
- $4 \\times 3 = 12$
- **Answer:** $b^{12}$

### Example 4 — Two rules together
Simplify $\\dfrac{x^2 \\times x^5}{x^3}$.

- **Step 1 — Product rule (top):** $x^2 \\times x^5 = x^{2+5} = x^7$
- **Step 2 — Quotient rule:** $\\dfrac{x^7}{x^3} = x^{7-3} = x^4$
- **Answer:** $x^4$`
      },
      {
        id: 'loe-p2-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Your Turn

Find the **new exponent** for each simplified power. Type just the number.

**Box 1:** $7^3 \\times 7^5 = 7^{?}$ — what is the exponent?
**Box 2:** $\\dfrac{m^{10}}{m^6} = m^{?}$ — what is the exponent?
**Box 3:** $(k^4)^2 = k^{?}$ — what is the exponent?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '8'],
          hint1: 'Multiplying powers means ADD exponents. Dividing means SUBTRACT. A power to a power means MULTIPLY.',
          hint2: 'Box 1: $3 + 5$. Box 2: $10 - 6$. Box 3: $4 \\times 2$.',
          explanation: 'Box 1 uses the product rule: $3 + 5 = 8$. Box 2 uses the quotient rule: $10 - 6 = 4$. Box 3 uses the power rule: $4 \\times 2 = 8$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'laws-of-exponents-grade8',
    sections: [
      {
        id: 'loe-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice

Decide which rule applies, then add, subtract, or multiply the exponents.`,
        exercise: {
          questions: [
            {
              question: 'Simplify: $y^6 \\times y^2$',
              options: ['$y^8$', '$y^{12}$', '$y^4$', '$y^3$'],
              correctAnswer: 0,
              explanation: 'Same base and multiplication, so use the product rule and ADD the exponents: $6 + 2 = 8$, giving $y^8$.'
            },
            {
              question: 'Simplify: $(n^5)^2$',
              options: ['$n^{10}$', '$n^7$', '$n^{25}$', '$n^3$'],
              correctAnswer: 0,
              explanation: 'A power raised to a power, so use the power rule and MULTIPLY the exponents: $5 \\times 2 = 10$, giving $n^{10}$.'
            }
          ]
        }
      },
      {
        id: 'loe-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Pick the Simplified Power

Choose the correct simplified form for each expression.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{c^8}{c^2}$ simplifies to', options: ['$c^6$', '$c^{10}$', '$c^4$', '$c^{16}$'] },
            { label: '$d^3 \\times d^3$ simplifies to', options: ['$d^6$', '$d^9$', '$d^3$', '$d^0$'] }
          ],
          correctAnswers: ['$c^6$', '$d^6$'],
          hint1: 'Dividing powers means SUBTRACT exponents; multiplying powers means ADD exponents.',
          explanation: 'For $\\dfrac{c^8}{c^2}$, subtract: $8 - 2 = 6$, giving $c^6$. For $d^3 \\times d^3$, add: $3 + 3 = 6$, giving $d^6$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'laws-of-exponents-grade8',
    sections: [
      {
        id: 'loe-p4-context',
        type: 'text' as const,
        content: `## 🌍 Two Special Exponents

Two more rules round out the laws of exponents. They show up constantly in **scientific notation** and **science class**.

### Zero Exponent
Any **non-zero** number raised to the power $0$ equals $1$:

$$a^0 = 1 \\quad (a \\neq 0)$$

**Why?** Think of the quotient rule: $\\dfrac{a^3}{a^3} = a^{3-3} = a^0$. But any number divided by itself is $1$, so $a^0 = 1$.

**Example:** $5^0 = 1$

### Negative Exponent
A **negative** exponent means take the **reciprocal** (flip to the bottom):

$$a^{-n} = \\frac{1}{a^n}$$

**Example:** $2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$

### Real-World Connection: Bacteria 🦠
A single bacterium splits into $2$ every hour. After $h$ hours there are $2^h$ bacteria.

- After $3$ hours: $2^3 = 8$ bacteria.
- After $5$ hours: $2^5 = 32$ bacteria.
- The growth from hour $3$ to hour $5$ is $\\dfrac{2^5}{2^3} = 2^{5-3} = 2^2 = 4$ times as many. Exponent rules make this easy!`
      },
      {
        id: 'loe-p4-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Apply the Special Rules

Evaluate each expression. Type your answer as a number or a simple fraction (like \`1/8\`).

**Box 1:** $9^0 = ?$
**Box 2:** $2^{-3} = ?$ (write it as a fraction)
**Box 3:** A colony doubles each hour as $2^h$. How many bacteria after $4$ hours? Compute $2^4 = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/8', '16'],
          hint1: 'Any non-zero number to the power $0$ is $1$. A negative exponent means the reciprocal: $a^{-n} = \\frac{1}{a^n}$.',
          hint2: 'Box 2: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Box 3: $2^4 = 2 \\times 2 \\times 2 \\times 2$.',
          explanation: 'Box 1: by the zero-exponent rule, $9^0 = 1$. Box 2: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Box 3: $2^4 = 16$ bacteria.'
        }
      },
      {
        id: 'loe-p4-mc',
        type: 'multiple-choice' as const,
        content: `## ✅ Apply It`,
        exercise: {
          questions: [
            {
              question: 'A savings account multiplies by $3$ each year as $3^t$. Using exponent rules, $\\dfrac{3^7}{3^4}$ tells you the growth over $3$ years. What does it equal?',
              options: ['$3^3 = 27$', '$3^{11}$', '$3^{28}$', '$3^2 = 9$'],
              correctAnswer: 0,
              explanation: 'Use the quotient rule: $\\frac{3^7}{3^4} = 3^{7-4} = 3^3 = 27$. The money grows to $27$ times its starting value over those $3$ years.'
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
    topicSlug: 'laws-of-exponents-grade8',
    sections: [
      {
        id: 'loe-p5-summary',
        type: 'text' as const,
        content: `## 🏆 Review: All Five Laws

You now know every law of exponents! Here is the complete toolkit:

| Law | Rule | Example |
|---|---|---|
| **Product** | $a^m \\times a^n = a^{m+n}$ (add) | $x^3 \\times x^4 = x^7$ |
| **Quotient** | $\\dfrac{a^m}{a^n} = a^{m-n}$ (subtract) | $\\dfrac{x^7}{x^3} = x^4$ |
| **Power** | $(a^m)^n = a^{mn}$ (multiply) | $(x^3)^4 = x^{12}$ |
| **Zero** | $a^0 = 1$ (if $a \\neq 0$) | $5^0 = 1$ |
| **Negative** | $a^{-n} = \\dfrac{1}{a^n}$ (reciprocal) | $2^{-3} = \\dfrac{1}{8}$ |

> 🔑 **Quick check for which operation:**
> - **Multiplying** powers → **add** exponents
> - **Dividing** powers → **subtract** exponents
> - **Power of a power** → **multiply** exponents
>
> When more than one rule applies, work from the **inside out** — simplify inside parentheses first, then combine.`
      },
      {
        id: 'loe-p5-challenge',
        type: 'multiple-choice' as const,
        content: `## 🚀 Mixed Challenge`,
        exercise: {
          questions: [
            {
              question: 'Simplify completely: $\\dfrac{x^4 \\times x^3}{x^2}$',
              options: ['$x^5$', '$x^9$', '$x^{24}$', '$x^6$'],
              correctAnswer: 0,
              explanation: 'First use the product rule on top: $x^4 \\times x^3 = x^7$. Then the quotient rule: $\\frac{x^7}{x^2} = x^{7-2} = x^5$.'
            },
            {
              question: 'Which expression is equal to $\\dfrac{1}{16}$?',
              options: ['$4^{-2}$', '$4^0$', '$4^2$', '$2^{-3}$'],
              correctAnswer: 0,
              explanation: 'A negative exponent gives a reciprocal: $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$. (For reference $4^0 = 1$, $4^2 = 16$, and $2^{-3} = \\frac{1}{8}$.)'
            }
          ]
        }
      }
    ]
  }
]
