export const asvabMkNumberPropertiesPart2Data = {
  topicSlug: 'asvab-mk-number-properties',
  sections: [
    {
      id: 'mknp2-intro',
      type: 'text' as const,
      content: `# 🔢 Number Properties, Exponents and Roots

**Part 2 of 7 — Primes, Factors and Multiples**

### Factors and Multiples

A **factor** of a number divides it evenly. The factors of $18$ are $1, 2, 3, 6, 9, 18$.

A **multiple** of a number is that number times an integer. The multiples of $6$ are $6, 12, 18, 24, \\dots$

Factors are **small** (no bigger than the number); multiples are **big** (at least the number). $6$ is a factor of $18$, and $18$ is a multiple of $6$.

**Finding all factors fast:** work in pairs from the outside in. For $36$: $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$. Stop when the pair meets. So $36$ has nine factors.

### Prime and Composite

A **prime** number has exactly two factors: $1$ and itself. A **composite** number has more than two.

- The primes under $50$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$
- **$1$ is not prime** (it has only one factor).
- **$2$ is the only even prime.** Every other even number divides by $2$.

### Divisibility Rules

| Divisible by | Rule | Example |
|:---:|:---|:---|
| $2$ | last digit is even | $574$ |
| $3$ | digit sum divides by $3$ | $741$: $7 + 4 + 1 = 12$ |
| $4$ | last two digits divide by $4$ | $1{,}316$: $16 \\div 4 = 4$ |
| $5$ | last digit is $0$ or $5$ | $635$ |
| $6$ | divisible by both $2$ and $3$ | $492$ |
| $9$ | digit sum divides by $9$ | $5{,}832$: $5 + 8 + 3 + 2 = 18$ |
| $10$ | last digit is $0$ | $2{,}790$ |

> **Key Fact:** To test whether a number is prime, try dividing by the primes $2, 3, 5, 7, \\dots$ up to its square root. If none work, it is prime. For $91$: $91 = 7 \\cdot 13$, so it is **not** prime, a favorite trap.`
    },
    {
      id: 'mknp2-gcf-lcm',
      type: 'text' as const,
      content: `## Prime Factorization, GCF and LCM

### Prime factorization

Break a number into primes with a factor tree. For $60$:

$$60 = 6 \\cdot 10 = (2 \\cdot 3)(2 \\cdot 5) = 2^2 \\cdot 3 \\cdot 5$$

Every composite number has exactly one prime factorization.

### Greatest Common Factor (GCF)

The **GCF** is the largest number that divides both numbers. Use the primes they **share**, with the **smaller** power.

**Example:** GCF of $60$ and $84$.

- $60 = 2^2 \\cdot 3 \\cdot 5$
- $84 = 2^2 \\cdot 3 \\cdot 7$
- Shared: $2^2 \\cdot 3 = 12$

### Least Common Multiple (LCM)

The **LCM** is the smallest number both divide into. Use **every** prime that appears, with the **larger** power.

**Example:** LCM of $12$ and $18$.

- $12 = 2^2 \\cdot 3$
- $18 = 2 \\cdot 3^2$
- All primes, biggest powers: $2^2 \\cdot 3^2 = 36$

**Quick method for small numbers:** list multiples of the larger number until the smaller one divides it. Multiples of $18$: $18$ (no), $36$ (yes). LCM $= 36$.

### Which one does the word problem want?

| Clue in the problem | Use |
|:---|:---|
| Split into **equal groups**, largest possible group size, nothing left over | **GCF** |
| Two things **repeat** on different cycles; when do they **line up again** | **LCM** |

**Example (GCF):** A supply sergeant has $24$ canteens and $36$ first-aid kits and wants identical packs using every item. The most packs possible is the GCF of $24$ and $36$, which is $12$ (each pack gets $2$ canteens and $3$ kits).

**Example (LCM):** One generator is checked every $4$ days and another every $6$ days. Both are checked today. They are next checked on the same day in LCM$(4, 6) = 12$ days.`
    },
    {
      id: 'mknp2-mc-prime',
      type: 'multiple-choice' as const,
      content: '**Primes and divisibility.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT a prime number?',
            options: ['$37$', '$41$', '$43$', '$51$'],
            correctAnswer: 3,
            explanation: '$5 + 1 = 6$ divides by $3$, so $51 = 3 \\cdot 17$ is composite. $37$, $41$ and $43$ have no factors other than $1$ and themselves.'
          },
          {
            question: 'Which number is divisible by $9$?',
            options: ['$4{,}617$', '$3{,}725$', '$2{,}906$', '$8{,}134$'],
            correctAnswer: 0,
            explanation: 'Digit sum of $4{,}617$: $4 + 6 + 1 + 7 = 18$, which divides by $9$. The others: $3{,}725 \\to 17$, $2{,}906 \\to 17$, $8{,}134 \\to 16$.'
          },
          {
            question: 'What is the prime factorization of $90$?',
            options: ['$2 \\cdot 5 \\cdot 9$', '$2 \\cdot 3^2 \\cdot 5$', '$3 \\cdot 30$', '$2^2 \\cdot 3 \\cdot 5$'],
            correctAnswer: 1,
            explanation: '$90 = 9 \\cdot 10 = 3^2 \\cdot 2 \\cdot 5$. A factorization containing $9$ or $30$ is not finished, because those are not prime, and $2^2 \\cdot 3 \\cdot 5 = 60$.'
          }
        ]
      }
    },
    {
      id: 'mknp2-mc-gcf',
      type: 'multiple-choice' as const,
      content: '**GCF or LCM?** 🎯 Decide which the problem needs, then find it.',
      exercise: {
        questions: [
          {
            question: 'What is the greatest common factor of $42$ and $70$?',
            options: ['$7$', '$2$', '$14$', '$210$'],
            correctAnswer: 2,
            explanation: '$42 = 2 \\cdot 3 \\cdot 7$ and $70 = 2 \\cdot 5 \\cdot 7$. They share $2 \\cdot 7 = 14$. $2$ and $7$ are common factors but not the greatest; $210$ is the LCM.'
          },
          {
            question: 'A bus leaves the base every $15$ minutes and a shuttle every $20$ minutes. Both leave at 0800. When do they next leave together?',
            options: ['0835', '0900', '0815', '1100'],
            correctAnswer: 1,
            explanation: 'This is a "line up again" question, so find the LCM. Multiples of $20$: $20, 40, 60$; $60$ is the first one $15$ divides. $60$ minutes after 0800 is 0900. Adding $15 + 20$ gives 0835, which is not a departure for either.'
          }
        ]
      }
    },
    {
      id: 'mknp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Factors of 48.** 🔽 Work in pairs from the outside in: $1 \\times 48$, $2 \\times 24$, …',
      exercise: {
        dropdowns: [
          {
            label: 'The number of factors $48$ has:',
            options: ['$8$', '$10$', '$6$', '$12$'],
            correctAnswer: 1
          },
          {
            label: 'The prime factorization of $48$:',
            options: ['$2^3 \\cdot 6$', '$2^4 \\cdot 3$', '$2^3 \\cdot 3^2$', '$4^2 \\cdot 3$'],
            correctAnswer: 1
          },
          {
            label: 'The LCM of $48$ and $18$:',
            options: ['$864$', '$6$', '$144$', '$96$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$10$', '$2^4 \\cdot 3$', '$144$'],
        hint1: 'Pairs: $1 \\cdot 48$, $2 \\cdot 24$, $3 \\cdot 16$, $4 \\cdot 12$, $6 \\cdot 8$.',
        hint2: '$48 = 16 \\cdot 3$, and $16 = 2^4$.',
        hint3: '$18 = 2 \\cdot 3^2$. Take every prime with its biggest power.',
        explanation: 'Five factor pairs give ten factors: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$. $48 = 2^4 \\cdot 3$ (both $6$ and $4^2$ are not prime). LCM: $2^4 \\cdot 3^2 = 16 \\cdot 9 = 144$. $864$ is $48 \\cdot 18$, a common multiple but not the least one, and $6$ is the GCF.'
      }
    },
    {
      id: 'mknp2-input',
      type: 'input-boxes' as const,
      content: `**Find each value.** ✍️

**1)** The GCF of $54$ and $72$:

**2)** The LCM of $8$ and $14$:

**3)** A unit has $30$ rifles and $45$ helmets to sort into identical crates, using every item. The greatest number of crates possible:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '56', '15'],
        hint1: '$54 = 2 \\cdot 3^3$ and $72 = 2^3 \\cdot 3^2$.',
        hint2: 'Multiples of $14$: $14, 28, 42, 56, \\dots$ Which is the first that $8$ divides?',
        hint3: 'Equal groups with nothing left over: that is a GCF question.',
        explanation: '(1) Shared primes, smaller powers: $2 \\cdot 3^2 = 18$. (2) $56 = 8 \\cdot 7 = 14 \\cdot 4$, and no smaller multiple of $14$ divides by $8$. (3) GCF of $30$ and $45$ is $15$: each crate holds $2$ rifles and $3$ helmets.'
      }
    },
    {
      id: 'mknp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Factors** divide a number; **multiples** are the number times an integer
- **Prime** = exactly two factors. $1$ is not prime; $2$ is the only even prime; watch for $51$, $57$, $91$
- Divisibility: $3$ and $9$ use the **digit sum**; $4$ uses the last two digits
- **GCF**: shared primes, smaller powers. Equal groups, nothing left over
- **LCM**: all primes, larger powers. Cycles that line up again

> **Up Next:** Part 3 — order of operations, negative numbers and absolute value.`
    }
  ]
};
