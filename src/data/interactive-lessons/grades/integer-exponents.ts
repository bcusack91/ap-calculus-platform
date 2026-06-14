import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'integer-exponents',
    sections: [
      {
        id: 'ie-p1-intro',
        type: 'text' as const,
        content: `# ⚡ Integer Exponents

You already know how to work with **positive** exponents like $2^3$ or $5^4$. But exponents are even more powerful than that! When we allow the exponent to be **any integer** — positive, **zero**, or **negative** — we unlock a whole new set of tools.

## What Are Integer Exponents?

**Integer exponents** simply means the exponent can be any whole number, including $0$ and the negatives:

- **Positive integers:** $2^3$, $5^4$, $10^2$
- **Zero:** $5^0$, $10^0$, $x^0$
- **Negative integers:** $2^{-3}$, $5^{-2}$, $10^{-1}$

The amazing part is that **all of them follow the same consistent rules**, so once you learn the pattern, you can handle any of them.

## Quick Review: Positive Exponents

In the power $a^n$:
- $a$ is the **base** — the number being multiplied
- $n$ is the **exponent** — how many times to use the base as a factor

**Example:** $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$

> 🔑 **Big Idea:** An exponent counts repeated multiplication. Zero and negative exponents extend that idea in a way that keeps every rule working perfectly.`
      },
      {
        id: 'ie-p1-zero',
        type: 'text' as const,
        content: `## 0️⃣ Zero as an Exponent

**Rule:** Any **non-zero** number raised to the power $0$ equals $1$.

$$a^0 = 1 \\quad (a \\neq 0)$$

**Examples:**
- $5^0 = 1$
- $10^0 = 1$
- $237^0 = 1$
- $(-8)^0 = 1$
- $x^0 = 1$

**Why is this true?** Use the quotient rule for dividing powers:

- $\\dfrac{5^3}{5^3} = \\dfrac{125}{125} = 1$ — any number divided by itself is $1$.
- But the quotient rule also says $\\dfrac{5^3}{5^3} = 5^{3-3} = 5^0$.
- Since both results must be equal, $5^0 = 1$.

> ⚠️ **Special note:** $0^0$ is **undefined** in mathematics — the zero-exponent rule only works for bases that are *not* zero.`
      },
      {
        id: 'ie-p1-negative',
        type: 'text' as const,
        content: `## ➖ Negative Exponents

**Rule:** A negative exponent means **take the reciprocal** — flip the base to the bottom of a fraction and make the exponent positive.

$$a^{-n} = \\frac{1}{a^n}$$

**Examples:**

| Expression | Rewrite as a fraction | Value |
|---|---|---|
| $2^{-3}$ | $\\dfrac{1}{2^3}$ | $\\dfrac{1}{8}$ |
| $5^{-2}$ | $\\dfrac{1}{5^2}$ | $\\dfrac{1}{25}$ |
| $10^{-1}$ | $\\dfrac{1}{10^1}$ | $\\dfrac{1}{10} = 0.1$ |
| $3^{-4}$ | $\\dfrac{1}{3^4}$ | $\\dfrac{1}{81}$ |

> 🧠 **Watch out:** A negative exponent does **not** make the answer negative! $2^{-3} = \\dfrac{1}{8}$, which is a small **positive** number. The negative sign tells you to flip, not to subtract.`
      },
      {
        id: 'ie-p1-quiz',
        type: 'multiple-choice' as const,
        content: `## ✅ Concept Check`,
        exercise: {
          questions: [
            {
              question: 'A negative exponent tells you to do what to the base?',
              options: [
                'Take the reciprocal (flip it to make a fraction)',
                'Make the whole answer negative',
                'Subtract the exponent from the base',
                'Multiply the base by $-1$'
              ],
              correctAnswer: 0,
              explanation: 'A negative exponent means take the reciprocal: $a^{-n} = \\dfrac{1}{a^n}$. For example $2^{-3} = \\dfrac{1}{8}$, a positive fraction — the answer is not negative.'
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
    topicSlug: 'integer-exponents',
    sections: [
      {
        id: 'ie-p2-worked',
        type: 'text' as const,
        content: `## 📝 Worked Examples

Let's evaluate several integer-exponent expressions step by step.

### Example 1 — Zero exponent
Evaluate $9^0$.

- Any non-zero base to the power $0$ is $1$.
- **Answer:** $9^0 = 1$

### Example 2 — Negative exponent
Evaluate $4^{-2}$.

- **Step 1 — Flip:** $4^{-2} = \\dfrac{1}{4^2}$
- **Step 2 — Square the base:** $4^2 = 16$
- **Answer:** $\\dfrac{1}{16}$

### Example 3 — Negative exponent with a fraction base
Evaluate $\\left(\\dfrac{2}{3}\\right)^{-2}$.

- **Rule:** $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^{n}$ — flip the fraction, then make the exponent positive.
- **Step 1 — Flip the fraction:** $\\left(\\dfrac{3}{2}\\right)^{2}$
- **Step 2 — Apply the exponent:** $\\dfrac{3^2}{2^2} = \\dfrac{9}{4}$
- **Answer:** $\\dfrac{9}{4}$

### Example 4 — Negative exponent in a denominator
Evaluate $\\dfrac{1}{2^{-3}}$.

- **Rule:** $\\dfrac{1}{a^{-n}} = a^{n}$ — a negative exponent in the denominator jumps to the top and turns positive.
- $\\dfrac{1}{2^{-3}} = 2^3 = 8$
- **Answer:** $8$`
      },
      {
        id: 'ie-p2-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Your Turn

Evaluate each expression. Type your answer as a whole number or a simple fraction (like \`1/16\`).

**Box 1:** $7^0 = ?$
**Box 2:** $5^{-2} = ?$
**Box 3:** $\\left(\\dfrac{1}{4}\\right)^{-1} = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/25', '4'],
          hint1: 'A zero exponent gives $1$. A negative exponent means take the reciprocal: $a^{-n} = \\dfrac{1}{a^n}$.',
          hint2: 'Box 2: $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$. Box 3: flip $\\dfrac{1}{4}$ to get $\\dfrac{4}{1} = 4$.',
          explanation: 'Box 1: any non-zero base to the $0$ power is $1$. Box 2: $5^{-2} = \\dfrac{1}{25}$. Box 3: $\\left(\\dfrac{1}{4}\\right)^{-1} = \\dfrac{4}{1} = 4$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'integer-exponents',
    sections: [
      {
        id: 'ie-p3-mc',
        type: 'multiple-choice' as const,
        content: `## 🎯 Guided Practice

For each one, decide whether the exponent is zero or negative, then evaluate.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate: $3^{-2}$',
              options: ['$\\dfrac{1}{9}$', '$-9$', '$9$', '$-6$'],
              correctAnswer: 0,
              explanation: 'A negative exponent means take the reciprocal: $3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$. The answer is a positive fraction, not a negative number.'
            },
            {
              question: 'Evaluate: $(-8)^{0}$',
              options: ['$1$', '$0$', '$-8$', '$8$'],
              correctAnswer: 0,
              explanation: 'Any non-zero base raised to the power $0$ equals $1$. Since $-8 \\neq 0$, we get $(-8)^0 = 1$.'
            }
          ]
        }
      },
      {
        id: 'ie-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `## 🔽 Rewrite Without Negative Exponents

Choose the equivalent form for each expression.`,
        exercise: {
          dropdowns: [
            { label: '$2^{-4}$ equals', options: ['$\\dfrac{1}{16}$', '$16$', '$-16$', '$-8$'] },
            { label: '$\\dfrac{1}{3^{-2}}$ equals', options: ['$9$', '$\\dfrac{1}{9}$', '$-9$', '$6$'] }
          ],
          correctAnswers: ['$\\dfrac{1}{16}$', '$9$'],
          hint1: 'For a negative exponent, flip the base. A negative exponent in the denominator moves up top and becomes positive.',
          explanation: '$2^{-4} = \\dfrac{1}{2^4} = \\dfrac{1}{16}$. For $\\dfrac{1}{3^{-2}}$, the negative exponent in the denominator jumps to the top: $\\dfrac{1}{3^{-2}} = 3^2 = 9$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'integer-exponents',
    sections: [
      {
        id: 'ie-p4-context',
        type: 'text' as const,
        content: `## 🌍 Where Integer Exponents Show Up

Negative and zero exponents aren't just abstract rules — they describe the **real world**, especially when measuring **very small things**.

### Tiny measurements 🔬
Scientists describe small lengths using negative powers of $10$:

- $10^{-1} = \\dfrac{1}{10} = 0.1$ (one tenth)
- $10^{-2} = \\dfrac{1}{100} = 0.01$ (one hundredth)
- $10^{-3} = \\dfrac{1}{1000} = 0.001$ (one thousandth)

A grain of sand is about $10^{-3}$ meters wide, and a virus is about $10^{-7}$ meters wide. Negative exponents let us write these without a long string of zeros.

### Combining the laws of exponents
**All** the exponent rules still work with integer exponents:

| Rule | Formula | Example |
|---|---|---|
| **Product** | $a^m \\cdot a^n = a^{m+n}$ | $2^3 \\cdot 2^{-5} = 2^{-2} = \\dfrac{1}{4}$ |
| **Quotient** | $\\dfrac{a^m}{a^n} = a^{m-n}$ | $\\dfrac{5^2}{5^5} = 5^{-3} = \\dfrac{1}{125}$ |
| **Power** | $(a^m)^n = a^{mn}$ | $(3^{-2})^3 = 3^{-6} = \\dfrac{1}{729}$ |

> 🔑 **Strategy:** First combine exponents using the laws, then handle any negative result by flipping to a fraction at the very end.`
      },
      {
        id: 'ie-p4-input',
        type: 'input-boxes' as const,
        content: `## ✏️ Apply the Rules

Use the laws of exponents, then write each final answer as a whole number or simple fraction (like \`1/4\`).

**Box 1:** $2^3 \\cdot 2^{-5}$ — first the exponent becomes $2^{-2}$. What is the final value?
**Box 2:** $\\dfrac{6^2}{6^4}$ — simplify and evaluate.
**Box 3:** A bacterium is about $10^{-6}$ meters wide. Written as a fraction $\\dfrac{1}{?}$, what number goes in the blank?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/4', '1/36', '1000000'],
          hint1: 'Box 1: add exponents $3 + (-5) = -2$, then flip. Box 2: subtract exponents $2 - 4 = -2$, then flip.',
          hint2: 'Box 1: $2^{-2} = \\dfrac{1}{4}$. Box 2: $6^{-2} = \\dfrac{1}{36}$. Box 3: $10^{-6} = \\dfrac{1}{10^6}$, and $10^6 = 1{,}000{,}000$.',
          explanation: 'Box 1: $2^{3+(-5)} = 2^{-2} = \\dfrac{1}{4}$. Box 2: $6^{2-4} = 6^{-2} = \\dfrac{1}{36}$. Box 3: $10^{-6} = \\dfrac{1}{1{,}000{,}000}$, so the blank is $1000000$.'
        }
      },
      {
        id: 'ie-p4-mc',
        type: 'multiple-choice' as const,
        content: `## 🤔 Apply It`,
        exercise: {
          questions: [
            {
              question: 'A computer chip feature measures $10^{-3}$ millimeters. What is this length as a decimal?',
              options: ['$0.001$ mm', '$0.01$ mm', '$1000$ mm', '$-1000$ mm'],
              correctAnswer: 0,
              explanation: '$10^{-3} = \\dfrac{1}{10^3} = \\dfrac{1}{1000} = 0.001$. A negative power of $10$ gives a small positive decimal.'
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
    topicSlug: 'integer-exponents',
    sections: [
      {
        id: 'ie-p5-summary',
        type: 'text' as const,
        content: `## 🏆 Review & Summary

You can now work with **every** integer exponent — positive, zero, and negative. Here is the whole toolkit in one place.

| Situation | Rule | Example |
|---|---|---|
| **Zero exponent** | $a^0 = 1$ (if $a \\neq 0$) | $7^0 = 1$ |
| **Negative exponent** | $a^{-n} = \\dfrac{1}{a^n}$ | $2^{-3} = \\dfrac{1}{8}$ |
| **Negative fraction base** | $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^{n}$ | $\\left(\\dfrac{2}{3}\\right)^{-2} = \\dfrac{9}{4}$ |
| **Negative in denominator** | $\\dfrac{1}{a^{-n}} = a^{n}$ | $\\dfrac{1}{2^{-3}} = 8$ |
| **Product rule** | $a^m \\cdot a^n = a^{m+n}$ | $2^3 \\cdot 2^{-5} = \\dfrac{1}{4}$ |
| **Quotient rule** | $\\dfrac{a^m}{a^n} = a^{m-n}$ | $\\dfrac{5^2}{5^5} = \\dfrac{1}{125}$ |
| **Power rule** | $(a^m)^n = a^{mn}$ | $(3^{-2})^3 = \\dfrac{1}{729}$ |

> 🔑 **Remember the two big ideas:**
> 1. A **zero** exponent always gives $1$ (for a non-zero base).
> 2. A **negative** exponent means **flip**, not subtract — the answer stays positive.

Now put it all together in the challenge below!`
      },
      {
        id: 'ie-p5-challenge',
        type: 'multiple-choice' as const,
        content: `## 🎓 Mixed Challenge`,
        exercise: {
          questions: [
            {
              question: 'Simplify using the laws of exponents: $\\dfrac{5^2}{5^5}$',
              options: ['$\\dfrac{1}{125}$', '$125$', '$5^7$', '$-125$'],
              correctAnswer: 0,
              explanation: 'Quotient rule: subtract the exponents $2 - 5 = -3$, giving $5^{-3}$. Then flip: $5^{-3} = \\dfrac{1}{5^3} = \\dfrac{1}{125}$.'
            },
            {
              question: 'Evaluate the negative fraction power: $\\left(\\dfrac{1}{4}\\right)^{-3}$',
              options: ['$64$', '$\\dfrac{1}{64}$', '$12$', '$-64$'],
              correctAnswer: 0,
              explanation: 'Flip the fraction and make the exponent positive: $\\left(\\dfrac{1}{4}\\right)^{-3} = \\left(\\dfrac{4}{1}\\right)^{3} = 4^3 = 64$.'
            }
          ]
        }
      }
    ]
  }
]
