import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'prime-factorization',
    sections: [
      {
        id: 'prime-factorization-p1-intro',
        type: 'text' as const,
        content: `
# 🔢 Prime Factorization

**Part 1 of 5 — Concept Introduction**

Every whole number bigger than 1 is built out of special "building-block" numbers called **primes**. In this lesson you'll learn how to take any number apart into its prime building blocks — a skill called **prime factorization**.

But first, we need to know the difference between **prime** and **composite** numbers.

## Prime Numbers

A **prime number** is a whole number greater than 1 that has **exactly two factors**: $1$ and itself.

That means you cannot split a prime evenly into smaller equal groups (other than 1 group of itself).

**The first prime numbers are:**

$$2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19,\\ 23,\\ 29 \\dots$$

**Fun fact:** $2$ is the **only even prime number**. Every other even number can be divided by 2, so it has more than two factors! 🤯
    `
      },
      {
        id: 'prime-factorization-p1-composite',
        type: 'text' as const,
        content: `
## Composite Numbers

A **composite number** is a whole number greater than 1 that has **more than two factors**. It can be built by multiplying smaller numbers together.

**Examples:** $4,\\ 6,\\ 8,\\ 9,\\ 10,\\ 12,\\ 14,\\ 15,\\ 16 \\dots$

For example, $12$ has the factors $1, 2, 3, 4, 6, 12$ — that's **six** factors, way more than two, so $12$ is composite.

| Number | Factors | Prime or Composite? |
|--------|---------|---------------------|
| $7$ | $1, 7$ | **Prime** (exactly 2) |
| $9$ | $1, 3, 9$ | **Composite** (3 factors) |
| $11$ | $1, 11$ | **Prime** (exactly 2) |
| $1$ | $1$ | **Neither!** (only 1 factor) |

**Important:** The number $1$ is **neither prime nor composite** — it has only one factor (itself).
    `
      },
      {
        id: 'prime-factorization-p1-factorization',
        type: 'text' as const,
        content: `
## What Is Prime Factorization?

**Prime factorization** means writing a number as a **product of prime numbers only**.

It's like finding the exact recipe of prime building blocks that multiply together to make your number.

**Example:** Let's break apart $24$.

$$24 = 2 \\times 2 \\times 2 \\times 3$$

Every factor on the right ($2, 2, 2, 3$) is prime — perfect! When a prime repeats, we can use an **exponent** to write it more neatly:

$$24 = 2^3 \\times 3$$

The little raised $3$ means "$2$ is used three times." Both forms are correct and mean exactly the same thing. ✅
    `
      },
      {
        id: 'prime-factorization-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you can tell primes and composites apart.
    `,
        exercise: {
          questions: [
            {
              question: 'Which of these numbers is a **prime** number?',
              options: ['$21$', '$15$', '$13$', '$9$'],
              correctAnswer: 2,
              explanation: 'The factors of $13$ are only $1$ and $13$, so it has exactly two factors and is prime. The others ($21=3\\times7$, $15=3\\times5$, $9=3\\times3$) all have extra factors.'
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
    topicSlug: 'prime-factorization',
    sections: [
      {
        id: 'prime-factorization-p2-tree',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

There are two friendly ways to find a prime factorization. Let's walk through both.

## Method 1: The Factor Tree 🌳

Keep splitting a number into two factors until **every branch ends in a prime**.

**Example: Factor $36$.**

- $36 = 4 \\times 9$
- Split $4 = 2 \\times 2$ (both prime, stop ✅)
- Split $9 = 3 \\times 3$ (both prime, stop ✅)

Collect every prime at the end of a branch:

$$36 = 2 \\times 2 \\times 3 \\times 3 = 2^2 \\times 3^2$$

**Tip:** It doesn't matter how you split at the start. $36 = 6 \\times 6$ gives the **same** prime factorization. Cool, right? 🌟
    `
      },
      {
        id: 'prime-factorization-p2-division',
        type: 'text' as const,
        content: `
## Method 2: The Division Ladder 🪜

Divide by the smallest prime that fits, again and again, until you reach $1$.

**Example: Factor $60$.**

| Divide by | Result |
|-----------|--------|
| $60 \\div 2$ | $30$ |
| $30 \\div 2$ | $15$ |
| $15 \\div 3$ | $5$ |
| $5 \\div 5$ | $1$ |

The prime numbers you divided by are $2, 2, 3, 5$. So:

$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$

**Check it:** $2 \\times 2 \\times 3 \\times 5 = 4 \\times 15 = 60$ ✅
    `
      },
      {
        id: 'prime-factorization-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Use the division ladder to factor $\\mathbf{18}$, step by step.

1) Divide $18$ by the smallest prime, $2$. What do you get?

2) Now divide that result by the prime $3$. What do you get?

3) Divide that result by the prime $3$ again. What do you get? (You should reach the number that ends the ladder.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '3', '1'],
          hint1: 'Start by dividing by 2, then keep dividing by the smallest prime that fits.',
          hint2: '$18 \\div 2 = 9$. Then $9 \\div 3 = 3$. Then $3 \\div 3 = 1$.',
          explanation: 'The ladder gives $18 \\div 2 = 9$, then $9 \\div 3 = 3$, then $3 \\div 3 = 1$. The primes used are $2, 3, 3$, so $18 = 2 \\times 3^2$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'prime-factorization',
    sections: [
      {
        id: 'prime-factorization-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Practice finding full prime factorizations. Remember: the answer should contain **only prime numbers**.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the prime factorization of $20$?',
              options: ['$2^2 \\times 5$', '$4 \\times 5$', '$2 \\times 10$', '$2^3 \\times 5$'],
              correctAnswer: 0,
              explanation: '$20 = 2 \\times 2 \\times 5 = 2^2 \\times 5$. The choice $4 \\times 5$ is wrong because $4$ is not prime, and $2 \\times 10$ has the non-prime $10$.'
            },
            {
              question: 'What is the prime factorization of $45$?',
              options: ['$5 \\times 9$', '$3^2 \\times 5$', '$3 \\times 15$', '$3 \\times 5^2$'],
              correctAnswer: 1,
              explanation: '$45 = 3 \\times 3 \\times 5 = 3^2 \\times 5$. The other options either include a non-prime ($9$ or $15$) or use the wrong exponent.'
            }
          ]
        }
      },
      {
        id: 'prime-factorization-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Factorization** 🔍

Complete each prime factorization by choosing the correct value.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'The prime factorization of $28$ is',
              options: ['$2^2 \\times 7$', '$4 \\times 7$', '$2 \\times 14$', '$2^3 \\times 7$']
            },
            {
              label: 'The prime factorization of $50$ is',
              options: ['$5 \\times 10$', '$2 \\times 25$', '$2 \\times 5^2$', '$2^2 \\times 5$']
            }
          ],
          correctAnswers: ['$2^2 \\times 7$', '$2 \\times 5^2$'],
          hint1: 'Break each number down until every factor is prime: $28 = 2 \\times 2 \\times 7$ and $50 = 2 \\times 5 \\times 5$.',
          explanation: '$28 = 2 \\times 2 \\times 7 = 2^2 \\times 7$, and $50 = 2 \\times 5 \\times 5 = 2 \\times 5^2$. Choices with $4$, $10$, $14$, or $25$ are wrong because those numbers are not prime.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'prime-factorization',
    sections: [
      {
        id: 'prime-factorization-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Uses**

Why bother breaking numbers into primes? Because prime factorization is a secret tool that helps you:

- Find the **Greatest Common Factor (GCF)** of two numbers
- Find the **Least Common Multiple (LCM)** of two numbers
- **Simplify fractions** quickly

## Finding the GCF With Primes 🎒

Suppose you have $12$ pencils and $18$ erasers, and you want to make identical gift bags with **no leftovers**. The biggest number of equal bags is the **GCF** of $12$ and $18$.

**Step 1 — Factor each number:**

$$12 = 2 \\times 2 \\times 3 \\qquad 18 = 2 \\times 3 \\times 3$$

**Step 2 — Circle the primes they *share*:** both have one $2$ and one $3$.

**Step 3 — Multiply the shared primes:**

$$\\text{GCF} = 2 \\times 3 = 6$$

So you can make **6 identical bags** (each with 2 pencils and 3 erasers). 🎉
    `
      },
      {
        id: 'prime-factorization-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

A baker has $24$ muffins and $30$ cookies. She wants to fill identical boxes using **all** the treats with none left over. To find the most boxes, she finds the **GCF** of $24$ and $30$.

1) Find the prime factorization of $24$. Type the number of times the prime $2$ appears. (For $24 = 2 \\times 2 \\times 2 \\times 3$, type how many $2$'s.)

2) The primes that $24$ and $30$ **share** are one $2$ and one $3$. Multiply them: $2 \\times 3 = ?$

3) So what is the greatest number of identical boxes she can make? (It equals the GCF.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '6', '6'],
          hint1: '$24 = 2 \\times 2 \\times 2 \\times 3$ and $30 = 2 \\times 3 \\times 5$. Compare which primes they have in common.',
          hint2: "Count the $2$'s in $24$ (there are three). The shared primes are one $2$ and one $3$, and the GCF is their product.",
          explanation: '$24 = 2^3 \\times 3$ uses the prime $2$ three times. Both $24$ and $30$ share one $2$ and one $3$, so $\\text{GCF} = 2 \\times 3 = 6$. She can make **6 boxes**.'
        }
      },
      {
        id: 'prime-factorization-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'Using $8 = 2^3$ and $20 = 2^2 \\times 5$, what is the GCF of $8$ and $20$? (Multiply only the primes they share.)',
              options: ['$2$', '$4$', '$8$', '$40$'],
              correctAnswer: 1,
              explanation: "Both numbers share two $2$'s, so $\\text{GCF} = 2 \\times 2 = 4$. The prime $5$ is only in $20$, so it is not shared."
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
    topicSlug: 'prime-factorization',
    sections: [
      {
        id: 'prime-factorization-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

Awesome work! Here's everything you learned, all in one place.

## Quick Summary Table

| Idea | What It Means | Example |
|------|---------------|---------|
| **Prime** | Exactly two factors: $1$ and itself | $2, 3, 5, 7, 11 \\dots$ |
| **Composite** | More than two factors | $4, 6, 8, 9, 12 \\dots$ |
| **Neither** | The number $1$ | $1$ |
| **Prime factorization** | A number written as a product of primes | $24 = 2^3 \\times 3$ |
| **Factor tree** | Split into two factors until all are prime | $36 = 2^2 \\times 3^2$ |
| **Division ladder** | Keep dividing by the smallest prime until $1$ | $60 = 2^2 \\times 3 \\times 5$ |

**Remember:**
- $2$ is the **only even prime**.
- The number $1$ is **neither prime nor composite**.
- Use **exponents** to write repeated primes neatly, like $2 \\times 2 \\times 2 = 2^3$.
- Both methods give the **same** prime factorization — every number has exactly one!

Now finish strong with these mixed challenge questions! 💪
    `
      },
      {
        id: 'prime-factorization-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix all the ideas together. Take your time and check each answer!
    `,
        exercise: {
          questions: [
            {
              question: 'What is the prime factorization of $72$?',
              options: ['$2^3 \\times 3^2$', '$8 \\times 9$', '$2^2 \\times 3^3$', '$2^4 \\times 3$'],
              correctAnswer: 0,
              explanation: '$72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2$. Check: $8 \\times 9 = 72$, but $8$ and $9$ are not prime, so that form is not a prime factorization.'
            },
            {
              question: 'Which statement is **true**?',
              options: ['$1$ is a prime number', 'Every composite number is even', '$2$ is the only even prime number', 'A prime number has more than two factors'],
              correctAnswer: 2,
              explanation: '$2$ is the only even prime — every other even number is divisible by $2$ and so has extra factors. ($1$ is neither prime nor composite, odd composites like $9$ exist, and primes have exactly two factors.)'
            }
          ]
        }
      }
    ]
  }
]
