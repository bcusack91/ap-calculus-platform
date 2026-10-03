export const actPreAlgebraPart1Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa1-intro',
      type: 'text' as const,
      content: `
# 🔢 Number Properties

**Part 1 of 7 — Factors, Multiples, Primes & Divisibility Rules**

The ACT Math section gives you **45 questions in 50 minutes**, each with **4 answer choices**. Its official reporting categories are *Preparing for Higher Math* and *Integrating Essential Skills* — there is no separate "Pre-Algebra" score — but number properties, fractions, percents, and ratios run through both. Mastering them gives you quick, reliable points.

| Concept | Definition |
|---------|-----------|
| Factor | A number that divides evenly into another |
| Multiple | The product of a number and any positive integer |
| Prime | A number greater than 1 with exactly two factors: 1 and itself |
| Composite | A number greater than 1 that is **not** prime |

**First 10 primes:** $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$

> Remember: $1$ is **neither** prime nor composite, and $2$ is the only even prime.

**Is $n$ prime? Test only the primes up to $\\sqrt{n}$.** If none of them divides $n$, then $n$ is prime (any factor larger than $\\sqrt{n}$ would have to pair with one smaller than $\\sqrt{n}$).

- $91$: $\\sqrt{91} \\approx 9.5$, so test $2, 3, 5, 7$. Since $91 = 7 \\times 13$, it is **not** prime.
- $97$: $\\sqrt{97} \\approx 9.8$, so test $2, 3, 5, 7$. None divides $97$, so it **is** prime.
      `
    },
    {
      id: 'act-pa1-divisibility',
      type: 'text' as const,
      content: `
## Divisibility Rules

Quick divisibility tests save time on the ACT:

| Divisor | Rule | Example |
|---------|------|---------|
| 2 | Last digit is even | $438$ → last digit $8$ ✓ |
| 3 | Sum of digits divisible by 3 | $627$: $6+2+7 = 15$ ✓ |
| 4 | Last two digits form a number divisible by 4 | $316$: $16 \\div 4 = 4$ ✓ |
| 5 | Last digit is 0 or 5 | $745$ ✓ |
| 6 | Divisible by both 2 and 3 | $312$: even and $3+1+2=6$ ✓ |
| 9 | Sum of digits divisible by 9 | $729$: $7+2+9 = 18$ ✓ |

**Example 1:** Is $891$ divisible by $9$?

$$8 + 9 + 1 = 18 \\quad\\text{and}\\quad 18 \\div 9 = 2 \\;✓$$

Yes — $891 = 9 \\times 99$.
      `
    },
    {
      id: 'act-pa1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factors & Primes** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a prime number?',
            options: ['$21$', '$27$', '$29$', '$33$'],
            correctAnswer: 2,
            explanation: '$21 = 3 \\times 7$, $27 = 3^3$, $33 = 3 \\times 11$. Only $29$ has no factors besides $1$ and itself.'
          },
          {
            question: 'How many factors does $36$ have?',
            options: ['$6$', '$7$', '$8$', '$9$'],
            correctAnswer: 3,
            explanation: '$36 = 2^2 \\times 3^2$. Number of factors $= (2+1)(2+1) = 9$. They are $1, 2, 3, 4, 6, 9, 12, 18, 36$.'
          }
        ]
      }
    },
    {
      id: 'act-pa1-lcmgcf',
      type: 'text' as const,
      content: `
## LCM & GCF

**Greatest Common Factor (GCF):** the largest number that divides two or more numbers evenly.

**Least Common Multiple (LCM):** the smallest positive number that is a multiple of two or more numbers.

**Example 2 — GCF:** Find $\\text{GCF}(24, 36)$.

$$24 = 2^3 \\times 3 \\qquad 36 = 2^2 \\times 3^2$$

Take the **lower** power of each common prime: $2^2 \\times 3 = 12$.

**Example 3 — LCM:** Find $\\text{LCM}(8, 12)$.

$$8 = 2^3 \\qquad 12 = 2^2 \\times 3$$

Take the **higher** power of every prime: $2^3 \\times 3 = 24$.

**Shortcut:** $\\text{LCM}(a,b) = \\frac{a \\times b}{\\text{GCF}(a,b)}$. So $\\text{LCM}(8,12) = \\frac{96}{4} = 24$ ✓

**Every common multiple is a multiple of the LCM.** The common multiples of $8$ and $12$ are exactly $24, 48, 72, 96, \\ldots$ — the multiples of $24$. *Example:* two buses leave together at 9:00, one every $8$ minutes and one every $12$ minutes. They leave together again every $24$ minutes: at 9:24, 9:48, 10:12, …
      `
    },
    {
      id: 'act-pa1-input1',
      type: 'input-boxes' as const,
      content: `
**Number Properties Practice** 🧮

1) What is $\\text{GCF}(18, 30)$?

2) What is $\\text{LCM}(6, 10)$?

3) How many prime numbers are between 10 and 30?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '30', '6'],
        hint1: '$18 = 2 \\times 3^2$ and $30 = 2 \\times 3 \\times 5$. Take the lower powers of shared primes.',
        hint2: '$6 = 2 \\times 3$ and $10 = 2 \\times 5$. Take the higher powers of all primes.',
        hint3: 'List them: $11, 13, 17, 19, 23, 29$.',
        explanation: '$\\text{GCF}(18,30) = 2 \\times 3 = 6$. $\\text{LCM}(6,10) = 2 \\times 3 \\times 5 = 30$. Primes between 10 and 30: $11,13,17,19,23,29$ — that is $6$.'
      }
    },
    {
      id: 'act-pa1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The number 1 is …',
            options: ['prime', 'composite', 'neither prime nor composite']
          },
          {
            label: 'A number divisible by both 2 and 3 is also divisible by …',
            options: ['5', '6', '8', '12']
          },
          {
            label: '$\\text{GCF}(a, b)$ uses the ______ power of common prime factors.',
            options: ['higher', 'lower', 'average', 'sum']
          }
        ],
        correctAnswers: ['neither prime nor composite', '6', 'lower'],
        hint1: 'By convention, 1 is excluded from both categories.',
        hint2: 'If a number has factors of 2 and 3, then $2 \\times 3 = 6$ divides it too.',
        hint3: 'GCF picks the smaller exponent; LCM picks the larger.',
        explanation: '$1$ is neither prime nor composite. Divisible by 2 and 3 means divisible by $6$. GCF uses the lower power.'
      }
    },
    {
      id: 'act-pa1-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'What is the LCM of 12 and 18?',
            options: ['$6$', '$36$', '$72$', '$216$'],
            correctAnswer: 1,
            explanation: '$12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$. LCM $= 2^2 \\times 3^2 = 36$.'
          },
          {
            question: 'If $n$ is a prime number greater than 2, which statement must be true?',
            options: ['$n$ is even', '$n$ is odd', '$n$ is divisible by 3', '$n$ ends in 7'],
            correctAnswer: 1,
            explanation: 'Every even number greater than 2 is divisible by 2 and thus not prime. So every prime greater than 2 is odd.'
          }
        ]
      }
    }
  ]
};
