export const precalcSequencesPart6Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🧮 Binomial Theorem

**Part 6 of 7 — The Binomial Theorem**

### Pascal's Triangle

$$\\begin{array}{c} 1 \\\\ 1 \\quad 1 \\\\ 1 \\quad 2 \\quad 1 \\\\ 1 \\quad 3 \\quad 3 \\quad 1 \\\\ 1 \\quad 4 \\quad 6 \\quad 4 \\quad 1 \\end{array}$$

Each interior number is the sum of the two numbers above it.

### Binomial Coefficients

The entries of row $n$ are written $\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$. Read them straight from Pascal's triangle: row $4$ gives $\\binom{4}{0} = 1$, $\\binom{4}{1} = 4$, $\\binom{4}{2} = 6$, $\\binom{4}{3} = 4$, $\\binom{4}{4} = 1$.

### The Binomial Theorem

The coefficients of $(a+b)^n$ are the entries of row $n$ of Pascal's Triangle (the single $1$ at the top is row $0$, so row $4$ is $1, 4, 6, 4, 1$):

$$(a+b)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\cdots + \\binom{n}{n}b^n$$
      `
    },
    {
      id: 'p6-examples',
      type: 'text' as const,
      content: `
## 📝 Expanding Binomials

### Example 1: $(x+y)^4$

$$\\binom{4}{0}x^4 + \\binom{4}{1}x^3y + \\binom{4}{2}x^2y^2 + \\binom{4}{3}xy^3 + \\binom{4}{4}y^4$$

$$= x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4$$

### Example 2: $(2x-3)^3$

Let $a=2x, b=-3$:

$(2x)^3 + 3(2x)^2(-3) + 3(2x)(-3)^2 + (-3)^3$

$= 8x^3 - 36x^2 + 54x - 27$

### Finding a Specific Term

The $(k+1)$th term of $(a+b)^n$ is: $\\binom{n}{k}a^{n-k}b^k$

**Find the 4th term of $(x+2)^6$**: $k=3$

$\\binom{6}{3}x^3(2)^3 = 20 \\cdot x^3 \\cdot 8 = 160x^3$
      `
    },
    {
      id: 'p6-properties',
      type: 'text' as const,
      content: `
## 🔑 Patterns in Every Expansion

### Counting Terms and Exponents

In the expansion of $(a+b)^n$:
- There are $n + 1$ terms.
- The power of $a$ falls from $n$ to $0$ while the power of $b$ rises from $0$ to $n$.
- In every term the two exponents add to $n$.

### Symmetry
$\\binom{n}{k} = \\binom{n}{n-k}$, so each row of Pascal's Triangle reads the same forward and backward.

Example: $\\binom{7}{2} = \\binom{7}{5} = 21$

### Building the Next Row

Each interior entry is the sum of the two entries above it, so row $5$ comes from row $4$: $1, (1+4), (4+6), (6+4), (4+1), 1 = 1, 5, 10, 10, 5, 1$.

> 🔗 This is CED 1.11 material (Unit 1, polynomial equivalent forms), placed here because expanding $(a+b)^n$ is the last algebraic tool you need before the exponential and logarithmic units.

### Watch the Signs

For $(x - c)^n$, treat the second term as $b = -c$. Odd powers of $-c$ are negative, so the signs alternate:

$(x - 2)^3 = x^3 - 6x^2 + 12x - 8$
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Binomial Theorem Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\binom{6}{2}$ equals:',
            options: ['$12$', '$15$', '$20$', '$30$'],
            correctAnswer: 1,
            explanation: 'Row 6 of Pascal\'s triangle is $1, 6, 15, 20, 15, 6, 1$; entry $k = 2$ is $15$.'
          },
          {
            question: 'The coefficient of $x^3$ in $(x+1)^5$ is:',
            options: ['$5$', '$10$', '$3$', '$1$'],
            correctAnswer: 1,
            explanation: '$\\binom{5}{2}x^3(1)^2 = 10x^3$. Coefficient: $10$. The exponent $3$ is not the coefficient, $5 = \\binom{5}{1}$ belongs to $x^4$, and $1$ belongs to $x^5$.'
          },
          {
            question: 'How many terms in the expansion of $(a+b)^{10}$?',
            options: ['$10$', '$11$', '$12$', '$20$'],
            correctAnswer: 1,
            explanation: '$(a+b)^n$ has $n+1$ terms: $k=0,1,2,\\ldots,n$.'
          }
        ]
      }
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Binomial Calculations** 🧮

**1)** $\\binom{8}{3}$ = ?

**2)** The coefficient of $x^4$ in $(x+2)^5$ is: (include the power of 2)

**3)** The coefficient of $x^2$ in $(x+3)^4$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['56', '10', '54'],
        hint1: 'Row 8 is $1, 8, 28, 56, 70, 56, 28, 8, 1$; entry $k = 3$ is $56$.',
        hint2: '$\\binom{5}{1}x^4(2)^1 = 5 \\cdot 2 \\cdot x^4 = 10x^4$. Coefficient: $10$.',
        hint3: 'Row $4$ is $1, 4, 6, 4, 1$. The $x^2$ term is $6x^2(3)^2$.',
        explanation: '1) $56$. 2) $10$ (from $\\binom{5}{1} \\cdot 2$). 3) $\\binom{4}{2} \\cdot 3^2 = 6 \\cdot 9 = 54$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Binomial Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\binom{n}{0}$ always equals:',
            options: ['$0$', '$1$', '$n$', '$n!$'],
            correctAnswer: 1
          },
          {
            label: '$\\binom{n}{1}$ always equals:',
            options: ['$0$', '$1$', '$n$', '$n!$'],
            correctAnswer: 2
          },
          {
            label: 'The expansion of $(a+b)^n$ has:',
            options: ['$n$ terms', '$n+1$ terms', '$2n$ terms', '$n^2$ terms'],
            correctAnswer: 1
          },
          {
            label: 'In $(x-1)^4$, the constant term is:',
            options: ['$-1$', '$1$', '$4$', '$-4$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$1$', '$n$', '$n+1$ terms', '$1$'],
        hint1: 'There is exactly 1 way to choose 0 items.',
        hint2: 'There are $n$ ways to choose 1 item from $n$.',
        hint3: 'Terms from $k=0$ to $k=n$: that is $n+1$ terms.',
        explanation: '$\\binom{n}{0}=1$. $\\binom{n}{1}=n$. $n+1$ terms. In $(x-1)^4$: constant = $(-1)^4 = 1$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The 3rd term of $(2x+1)^5$ is:',
            options: ['$40x^3$', '$80x^3$', '$80x^2$', '$40x^2$'],
            correctAnswer: 1,
            explanation: '3rd term: $k=2$. $\\binom{5}{2}(2x)^3(1)^2 = 10 \\cdot 8x^3 = 80x^3$.'
          },
          {
            question: '$\\binom{10}{10}$ equals:',
            options: ['$10$', '$0$', '$1$', '$10!$'],
            correctAnswer: 2,
            explanation: '$\\binom{n}{n} = 1$ — there is exactly 1 way to choose all items.'
          }
        ]
      }
    }
  ]
};
