export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef6-intro',
      type: 'text' as const,
      content: `
# 🔑 Exponential Equations & Logarithms

**Part 6 of 7 — Solving Exponential Equations, Intro to Logs, Change of Base**

Many SAT problems require solving equations where the variable is in the **exponent**.

**Strategy 1 — Same-base method:**
If both sides can be written with the same base, set the exponents equal.

$$2^x = 32 \\implies 2^x = 2^5 \\implies x = 5$$

$$3^{2x} = 81 \\implies 3^{2x} = 3^4 \\implies 2x = 4 \\implies x = 2$$

**Strategy 2 — Using logarithms:**
When you *can't* match bases, take the log of both sides.

$$5^x = 200$$

$$\\log(5^x) = \\log(200)$$

$$x \\log 5 = \\log 200$$

$$x = \\frac{\\log 200}{\\log 5} \\approx \\frac{2.301}{0.699} \\approx 3.29$$

**SAT Tip:** Most SAT exponential equations can be solved via the same-base method. Logarithm-based solutions are rarer but do appear.
      `
    },
    {
      id: 'sat-ef6-logs',
      type: 'text' as const,
      content: `
## Introduction to Logarithms

A **logarithm** answers: "What exponent gives me this value?"

$$\\log_b(a) = c \\iff b^c = a$$

**Examples:**
- $\\log_2(8) = 3$ because $2^3 = 8$.
- $\\log_3(81) = 4$ because $3^4 = 81$.
- $\\log_{10}(1000) = 3$ because $10^3 = 1000$.
- $\\log_5(1) = 0$ because $5^0 = 1$.

**Common log properties (reference):**

| Property | Rule |
|----------|------|
| Product | $\\log_b(mn) = \\log_b m + \\log_b n$ |
| Quotient | $\\log_b(m/n) = \\log_b m - \\log_b n$ |
| Power | $\\log_b(m^k) = k\\log_b m$ |
| Log of 1 | $\\log_b(1) = 0$ |
| Log of base | $\\log_b(b) = 1$ |

**SAT Note:** You rarely need log properties on the SAT, but understanding the definition $\\log_b(a) = c \\iff b^c = a$ is essential.
      `
    },
    {
      id: 'sat-ef6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Solving Exponential Equations** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $4^x = 256$',
            options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 64$'],
            correctAnswer: 1,
            explanation: '$256 = 4^4$, so $4^x = 4^4 \\implies x = 4$.'
          },
          {
            question: 'Solve: $2^{(x+1)} = 16$',
            options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 5$'],
            correctAnswer: 1,
            explanation: '$16 = 2^4$, so $2^{(x+1)} = 2^4 \\implies x + 1 = 4 \\implies x = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef6-change',
      type: 'text' as const,
      content: `
## Change of Base & More Practice

**Change of base formula:**

$$\\log_b(a) = \\frac{\\log a}{\\log b} = \\frac{\\ln a}{\\ln b}$$

This lets you evaluate any logarithm using a calculator (which has $\\log$ = base 10 and $\\ln$ = base $e$).

**Example:** $\\log_3(20) = \\frac{\\log 20}{\\log 3} = \\frac{1.301}{0.477} \\approx 2.727$

---

**More same-base examples:**

$9^x = 27$

Rewrite with base 3: $(3^2)^x = 3^3 \\implies 3^{2x} = 3^3 \\implies 2x = 3 \\implies x = 3/2$

$8^{x-1} = 32$

Rewrite with base 2: $(2^3)^{x-1} = 2^5 \\implies 2^{3(x-1)} = 2^5$

$$3(x-1) = 5 \\implies 3x - 3 = 5 \\implies x = 8/3$$

**SAT Tip:** When the answer choices are nice fractions or integers, the same-base method almost always works. Look for a common prime base (2, 3, or 5).
      `
    },
    {
      id: 'sat-ef6-input1',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$** 🧮

Give answers as integers or simplified fractions (e.g., 3/2).

1) $3^x = 729$
2) $2^{(2x)} = 64$
3) $\\log_2(32) = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3', '5'],
        hint1: '$729 = 3^6$. Count: $3, 9, 27, 81, 243, 729$.',
        hint2: '$64 = 2^6$, so $2x = 6$.',
        hint3: '$2^? = 32$. Since $2^5 = 32$, the answer is $5$.',
        explanation: '1) $3^6 = 729$, so $x = 6$. 2) $2^{2x} = 2^6 \\implies 2x = 6 \\implies x = 3$. 3) $\\log_2(32) = 5$ because $2^5 = 32$.'
      }
    },
    {
      id: 'sat-ef6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Logarithm Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\log_b(a) = c$ means …',
            options: ['$a^c = b$', '$b^c = a$', '$c^b = a$', '$a^b = c$']
          },
          {
            label: '$\\log_4(1) = ?$',
            options: ['$1$', '$0$', '$4$', 'undefined']
          },
          {
            label: 'To solve $5^x = 80$ without matching bases, you use …',
            options: ['Square both sides', 'Take the log of both sides', 'Take the square root', 'Subtract 5']
          }
        ],
        correctAnswers: ['$b^c = a$', '$0$', 'Take the log of both sides'],
        hint1: 'The base raised to the result equals the argument: $b^c = a$.',
        hint2: 'Any base raised to 0 gives 1.',
        hint3: '$\\log(5^x) = x \\log 5$, which isolates $x$.',
        explanation: '$\\log_b(a)=c$ means $b^c = a$. $\\log_4(1) = 0$ since $4^0 = 1$. For non-matching bases, take $\\log$ of both sides.'
      }
    },
    {
      id: 'sat-ef6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $9^{(x+1)} = 27^x$, what is the value of $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $(3^2)^{x+1} = (3^3)^x \\implies 3^{2x+2} = 3^{3x}$. So $2x + 2 = 3x \\implies x = 2$.'
          },
          {
            question: 'Which of the following is equivalent to $\\log_8(64)$?',
            options: ['$2$', '$3$', '$6$', '$8$'],
            correctAnswer: 0,
            explanation: '$8^2 = 64$, so $\\log_8(64) = 2$.'
          }
        ]
      }
    }
  ]
};
