export const precalcSequencesPart6Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 🧮 Binomial Theorem

**Part 6 of 7**

### Pascal's Triangle

$$\\begin{array}{c} 1 \\\\ 1 \\quad 1 \\\\ 1 \\quad 2 \\quad 1 \\\\ 1 \\quad 3 \\quad 3 \\quad 1 \\\\ 1 \\quad 4 \\quad 6 \\quad 4 \\quad 1 \\end{array}$$

Each number is the sum of the two numbers above it.

### Binomial Coefficients

$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$

Read "$n$ choose $k$" — the number of ways to select $k$ items from $n$.

### The Binomial Theorem

$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$
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
## 🔑 Key Properties

### Symmetry
$\\binom{n}{k} = \\binom{n}{n-k}$

Example: $\\binom{7}{2} = \\binom{7}{5} = 21$

### Sum of Row
$\\sum_{k=0}^n \\binom{n}{k} = 2^n$

(Set $a=b=1$ in the binomial theorem)

### Alternating Sum
$\\sum_{k=0}^n (-1)^k\\binom{n}{k} = 0$

(Set $a=1, b=-1$)

### Pascal's Rule
$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$

This is why each entry in Pascal's triangle is the sum of the two above it!
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
            explanation: '$\\frac{6!}{2!4!} = \\frac{720}{2 \\cdot 24} = 15$.'
          },
          {
            question: 'The coefficient of $x^3$ in $(x+1)^5$ is:',
            options: ['$5$', '$10$', '$20$', '$1$'],
            correctAnswer: 1,
            explanation: '$\\binom{5}{2}x^3(1)^2 = 10x^3$. Coefficient: $10$.'
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

**3)** The sum of row 6 of Pascal's triangle: $\\sum_{k=0}^6 \\binom{6}{k}$ = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['56', '10', '64'],
        hint1: '$\\frac{8!}{3!5!} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$.',
        hint2: '$\\binom{5}{1}x^4(2)^1 = 5 \\cdot 2 \\cdot x^4 = 10x^4$. Coefficient: $10$.',
        hint3: '$2^6 = 64$.',
        explanation: '1) $56$. 2) $10$ (from $\\binom{5}{1} \\cdot 2$). 3) $64$.'
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
