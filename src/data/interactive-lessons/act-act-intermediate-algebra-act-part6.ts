export const actIntermAlgPart6Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia6-intro',
      type: 'text' as const,
      content: `
# 🔗 Sequences & Series

**Part 6 of 7 — Arithmetic, Geometric, nth Term & Partial Sums**

A **sequence** is an ordered list of numbers. A **series** is the sum of a sequence's terms.

| Type | Common Pattern |
|------|---------------|
| Arithmetic | Constant difference $d$ between consecutive terms |
| Geometric | Constant ratio $r$ between consecutive terms |

**Arithmetic sequence:** $a_n = a_1 + (n-1)d$

**Geometric sequence:** $a_n = a_1 \\cdot r^{n-1}$

**Example 1 — Arithmetic:** $3, 7, 11, 15, \\ldots$ Here $a_1 = 3$, $d = 4$.

$$a_{10} = 3 + (10-1)(4) = 3 + 36 = 39$$

**Example 2 — Geometric:** $2, 6, 18, 54, \\ldots$ Here $a_1 = 2$, $r = 3$.

$$a_5 = 2 \\cdot 3^{4} = 2 \\cdot 81 = 162$$
      `
    },
    {
      id: 'act-ia6-sums',
      type: 'text' as const,
      content: `
## Partial Sums

**Arithmetic series** (sum of the first $n$ terms):

$$S_n = \\frac{n}{2}(a_1 + a_n) \\quad \\text{or} \\quad S_n = \\frac{n}{2}[2a_1 + (n-1)d]$$

**Geometric series** (sum of the first $n$ terms):

$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}, \\quad r \\neq 1$$

**Example 3:** Find the sum of the first 20 terms of $5, 8, 11, 14, \\ldots$

$a_1 = 5$, $d = 3$, $a_{20} = 5 + 19(3) = 62$.

$$S_{20} = \\frac{20}{2}(5 + 62) = 10 \\cdot 67 = 670$$

**Example 4:** Find the sum of the first 6 terms of $4, 12, 36, 108, \\ldots$

$a_1 = 4$, $r = 3$.

$$S_6 = 4 \\cdot \\frac{1 - 3^6}{1 - 3} = 4 \\cdot \\frac{1 - 729}{-2} = 4 \\cdot 364 = 1456$$
      `
    },
    {
      id: 'act-ia6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sequence Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the 8th term of the arithmetic sequence $2, 9, 16, 23, \\ldots$?',
            options: ['$44$', '$49$', '$51$', '$56$'],
            correctAnswer: 2,
            explanation: '$a_1 = 2$, $d = 7$. $a_8 = 2 + 7(7) = 2 + 49 = 51$.'
          },
          {
            question: 'What is the 5th term of the geometric sequence $3, 6, 12, 24, \\ldots$?',
            options: ['$30$', '$36$', '$48$', '$96$'],
            correctAnswer: 2,
            explanation: '$a_1 = 3$, $r = 2$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$.'
          }
        ]
      }
    },
    {
      id: 'act-ia6-finding',
      type: 'text' as const,
      content: `
## Finding the Common Difference or Ratio

**Arithmetic:** $d = a_{n+1} - a_n$ (subtract consecutive terms).

**Geometric:** $r = \\frac{a_{n+1}}{a_n}$ (divide consecutive terms).

**Example 5:** In the sequence $100, 90, 80, 70, \\ldots$, $d = -10$.

$$a_{15} = 100 + 14(-10) = 100 - 140 = -40$$

**Example 6:** Find $d$ if $a_3 = 14$ and $a_7 = 30$ (arithmetic).

$$a_7 = a_3 + 4d \\implies 30 = 14 + 4d \\implies d = 4$$

Then $a_1 = a_3 - 2d = 14 - 8 = 6$.
      `
    },
    {
      id: 'act-ia6-input1',
      type: 'input-boxes' as const,
      content: `
**Sequences Practice** 🧮

1) Find the 12th term of the arithmetic sequence $4, 10, 16, 22, \\ldots$

2) Find the common ratio of $5, 15, 45, 135, \\ldots$

3) Find the sum of the first 10 terms of $1, 2, 3, \\ldots, 10$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '3', '55'],
        hint1: '$a_1 = 4$, $d = 6$. $a_{12} = 4 + 11(6)$.',
        hint2: 'Divide any term by the previous: $15/5$.',
        hint3: '$S_{10} = \\frac{10}{2}(1 + 10)$.',
        explanation: '$a_{12} = 4 + 66 = 70$. $r = 15/5 = 3$. $S_{10} = 5 \\cdot 11 = 55$.'
      }
    },
    {
      id: 'act-ia6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Sequence & Series Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An arithmetic sequence has a constant … between terms.',
            options: ['ratio', 'difference', 'product', 'exponent']
          },
          {
            label: 'The formula for the $n$th term of a geometric sequence is $a_n = a_1 \\cdot \\;?$',
            options: ['$r^n$', '$r^{n+1}$', '$r^{n-1}$', '$nr$']
          },
          {
            label: 'The sum of the first $n$ terms of an arithmetic series uses $S_n = \\frac{n}{2}(a_1 + \\;?)$',
            options: ['$a_2$', '$a_n$', '$d$', '$n$']
          }
        ],
        correctAnswers: ['difference', '$r^{n-1}$', '$a_n$'],
        hint1: 'Arithmetic adds the same value each time.',
        hint2: 'The first term has exponent $0$ (i.e., $r^{1-1}$).',
        hint3: 'You average the first and last terms, then multiply by $n$.',
        explanation: 'Arithmetic → constant difference. Geometric: $a_n = a_1 \\cdot r^{n-1}$. Sum: $S_n = \\frac{n}{2}(a_1 + a_n)$.'
      }
    },
    {
      id: 'act-ia6-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'An arithmetic sequence has $a_1 = 7$ and $d = -3$. What is $a_{20}$?',
            options: ['$-50$', '$-56$', '$-53$', '$64$'],
            correctAnswer: 0,
            explanation: '$a_{20} = 7 + 19(-3) = 7 - 57 = -50$.'
          },
          {
            question: 'What is the sum of the geometric series $2 + 6 + 18 + 54 + 162$?',
            options: ['$242$', '$240$', '$243$', '$244$'],
            correctAnswer: 0,
            explanation: '$a_1 = 2$, $r = 3$, $n = 5$. $S_5 = 2 \\cdot \\frac{1 - 243}{1 - 3} = 2 \\cdot \\frac{-242}{-2} = 242$.'
          }
        ]
      }
    }
  ]
};
