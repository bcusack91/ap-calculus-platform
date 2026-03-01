export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-exp4-intro',
      type: 'text' as const,
      content: `
# 🧩 Exponential Equations

**Part 4 of 7 — Solving When Bases Match (and When They Don't)**

Many SAT equations involve exponents. The core strategy:

> **If $a^m = a^n$ (same base, $a > 0$, $a \\neq 1$), then $m = n$.**

This means your job is to rewrite both sides with the **same base**, then set the exponents equal.

**Common base families to memorize:**

| Base 2 | Base 3 | Base 5 |
|--------|--------|--------|
| $2^1=2$ | $3^1=3$ | $5^1=5$ |
| $2^2=4$ | $3^2=9$ | $5^2=25$ |
| $2^3=8$ | $3^3=27$ | $5^3=125$ |
| $2^4=16$ | $3^4=81$ | $5^4=625$ |
| $2^5=32$ | $3^5=243$ | |
| $2^{10}=1024$ | | |
      `
    },
    {
      id: 'sat-exp4-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Solve $4^x = 32$.

1. Rewrite in base 2: $4 = 2^2$ and $32 = 2^5$.
2. $(2^2)^x = 2^5 \\Rightarrow 2^{2x} = 2^5$.
3. Set exponents equal: $2x = 5 \\Rightarrow x = \\frac{5}{2}$.

**Example 2:** Solve $9^{x+1} = 27^x$.

1. Rewrite in base 3: $9 = 3^2$, $27 = 3^3$.
2. $3^{2(x+1)} = 3^{3x}$.
3. $2x + 2 = 3x \\Rightarrow x = 2$.

**Example 3:** Solve $\\frac{8^x}{2^x} = 64$.

1. $\\frac{8^x}{2^x} = \\left(\\frac{8}{2}\\right)^x = 4^x$.
2. $4^x = 64$. Rewrite: $2^{2x} = 2^6$, so $2x = 6$, $x = 3$.

---

**SAT Tip:** If you can't find a common base, the answer choices usually let you plug in and check.
      `
    },
    {
      id: 'sat-exp4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice — Matching Bases** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $2^{3x} = 2^{12}$. What is $x$?',
            options: ['$x = 3$', '$x = 4$', '$x = 9$', '$x = 36$'],
            correctAnswer: 1,
            explanation: 'Same base → set exponents equal: $3x = 12 \\Rightarrow x = 4$.'
          },
          {
            question: 'Solve: $25^x = 5^6$. What is $x$?',
            options: ['$x = 2$', '$x = 3$', '$x = 6$', '$x = 12$'],
            correctAnswer: 1,
            explanation: '$25 = 5^2$, so $(5^2)^x = 5^6 \\Rightarrow 5^{2x} = 5^6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-exp4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rewrite each number as a power of the given base.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$64$ as a power of $2$',
            options: ['$2^4$', '$2^5$', '$2^6$', '$2^8$']
          },
          {
            label: '$81$ as a power of $3$',
            options: ['$3^2$', '$3^3$', '$3^4$', '$3^5$']
          },
          {
            label: '$\\frac{1}{16}$ as a power of $2$',
            options: ['$2^{-2}$', '$2^{-3}$', '$2^{-4}$', '$2^{-8}$']
          }
        ],
        correctAnswers: ['$2^6$', '$3^4$', '$2^{-4}$'],
        hint1: '$2^6 = 64$.',
        hint2: '$3^4 = 81$.',
        hint3: '$16 = 2^4$, so $\\frac{1}{16} = 2^{-4}$.',
        explanation: 'Knowing powers of small primes is essential for the SAT.'
      }
    },
    {
      id: 'sat-exp4-input',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$ — enter a whole number or simple fraction.** 🧮

1) $3^{2x} = 81$ → $x$ = ?

2) $8^x = 4^6$ → $x$ = ?

3) $5^{x-1} = 125$ → $x$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '4'],
        hint1: '$81 = 3^4$, so $2x = 4$, $x = 2$.',
        hint2: '$8 = 2^3$, $4 = 2^2$. So $2^{3x} = 2^{12}$, $3x = 12$, $x = 4$.',
        hint3: '$125 = 5^3$, so $x - 1 = 3$, $x = 4$.',
        explanation: '1) $x = 2$. 2) $x = 4$. 3) $x = 4$.'
      }
    },
    {
      id: 'sat-exp4-harder',
      type: 'text' as const,
      content: `
## When Bases Don't Match Neatly

Sometimes you can't find a common base. Strategies:

**Strategy 1 — Plug in answer choices.** If $3^x = 50$, try each option:
- $x = 3$: $3^3 = 27$ (too small)
- $x = 4$: $3^4 = 81$ (too big)
- So $x$ is between 3 and 4 — look for the answer choice that matches.

**Strategy 2 — Use properties to simplify.**

Solve $\\frac{6^7}{6^4} = 6^x$. By quotient rule: $6^{7-4} = 6^3$, so $x = 3$.

**Strategy 3 — Recognize patterns.**

If $2^a = 5$ (given), find $2^{3a}$. Answer: $(2^a)^3 = 5^3 = 125$.

The SAT won't ask you to use logarithms — there's always an algebraic path.
      `
    },
    {
      id: 'sat-exp4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $2^a = 7$, what is the value of $2^{a+3}$?',
            options: ['$10$', '$21$', '$49$', '$56$'],
            correctAnswer: 3,
            explanation: '$2^{a+3} = 2^a \\cdot 2^3 = 7 \\cdot 8 = 56$.'
          },
          {
            question: 'If $9^x = 3^{x+4}$, what is $x$?',
            options: ['$1$', '$2$', '$4$', '$8$'],
            correctAnswer: 2,
            explanation: '$9 = 3^2$, so $3^{2x} = 3^{x+4}$. Then $2x = x+4$, giving $x = 4$.'
          }
        ]
      }
    }
  ]
}
