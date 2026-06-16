import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — GCF and LCM (Grade 5 Math).
 * Registry key / DB slug: 'gcf-and-lcm'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'gcf-and-lcm',
    sections: [
      {
        id: 'gl1-intro',
        type: 'text' as const,
        content: `# 🔢 GCF and LCM

**Part 1 of 5 — Factors and the Greatest Common Factor**

---

### Topics in This Part

| Section |
|---------|
| What Is a Factor? |
| Listing All the Factors of a Number |
| Common Factors and the GCF |

> 🔑 **Key Concept:** A **factor** of a number divides into it evenly, with **no remainder**. The **Greatest Common Factor (GCF)** is the *biggest* factor that two numbers share. Everything in this part is built from one idea: which numbers divide evenly?`,
      },
      {
        id: 'gl1-what-factor',
        type: 'text' as const,
        content: `## What Is a Factor?

A **factor** of a number is any whole number that divides into it **evenly** — leaving a remainder of $0$.

$$12 \\div 3 = 4 \\text{ (no remainder)} \\;\\Rightarrow\\; 3 \\text{ is a factor of } 12$$

Factors always come in **pairs** that multiply to the number. For $12$:

| Pair | Product |
|------|---------|
| $1 \\times 12$ | $12$ |
| $2 \\times 6$ | $12$ |
| $3 \\times 4$ | $12$ |

So the factors of $12$ are: $1,\\ 2,\\ 3,\\ 4,\\ 6,\\ 12$.

> 💡 **Tip:** Every number has $1$ and **itself** as factors. To list them all, walk up from $1$ and write down each pair as you find it.`,
      },
      {
        id: 'gl1-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is a factor of $18$?',
              options: ['$6$', '$4$', '$8$', '$5$'],
              correctAnswer: 0,
              explanation: '$18 \\div 6 = 3$ with no remainder, so $6$ is a factor. $18 \\div 4 = 4.5$, $18 \\div 8$ and $18 \\div 5$ also leave remainders.',
            },
            {
              question: 'A factor of a number divides into it with a remainder of:',
              options: ['$0$', '$1$', 'any number', 'the number itself'],
              correctAnswer: 0,
              explanation: 'A factor divides evenly — the remainder must be exactly $0$. That is what "divides evenly" means.',
            },
          ],
        },
      },
      {
        id: 'gl1-list-method',
        type: 'text' as const,
        content: `## A Tidy Way to List Every Factor

To be sure you catch **all** the factors, test the whole numbers in order — $1, 2, 3, \\dots$ — and write down each pair you find. Stop when the pair starts to repeat.

### Example: factors of $20$

| Test | Divides evenly? | Pair found |
|------|-----------------|------------|
| $1$ | yes | $1 \\times 20$ |
| $2$ | yes | $2 \\times 10$ |
| $3$ | no | — |
| $4$ | yes | $4 \\times 5$ |
| $5$ | yes ($5 \\times 4$, repeat) | stop |

So the factors of $20$ are $1, 2, 4, 5, 10, 20$.

> 💡 Once the two numbers in a pair "cross over" (here $5 \\times 4$ repeats $4 \\times 5$), you have found them all.`,
      },
      {
        id: 'gl1-list-factors',
        type: 'input-boxes' as const,
        content: `**List the Factors** 🧮

Find the factors by checking pairs that multiply to the number.

**1)** How many factors does $10$ have in total? *(list: $1, 2, 5, 10$)*
**2)** What is the largest factor of $20$ that is **less than** $20$ itself?
**3)** Is $7$ a factor of $21$? Enter **1** for yes or **0** for no.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '10', '1'],
          hint1: 'Factors of $10$ are $1, 2, 5, 10$ — count them.',
          hint2: 'Factors of $20$: $1, 2, 4, 5, 10, 20$. The largest below $20$ is $10$.',
          hint3: '$21 \\div 7 = 3$ with no remainder, so yes — enter $1$.',
          explanation: '1) $10$ has $4$ factors: $1, 2, 5, 10$.  2) $20 = 2 \\times 10$, so $10$ is the largest factor under $20$.  3) $21 \\div 7 = 3$, so $7$ is a factor → $1$.',
        },
      },
      {
        id: 'gl1-common-factors',
        type: 'text' as const,
        content: `## Common Factors and the GCF

A **common factor** is a number that is a factor of **two** numbers at once. The **Greatest Common Factor (GCF)** is the *largest* one they share.

### Example: GCF of $12$ and $18$

| Number | Factors |
|--------|---------|
| $12$ | $1, 2, 3, 4, 6, 12$ |
| $18$ | $1, 2, 3, 6, 9, 18$ |

The factors they **share** are $1, 2, 3, 6$. The **greatest** of these is $6$.

$$\\text{GCF}(12, 18) = 6$$

> 🔑 **List-and-Compare Method:** List every factor of each number, circle the ones that appear in **both** lists, and pick the **biggest**. That biggest shared factor is the GCF.`,
      },
      {
        id: 'gl1-gcf-drill',
        type: 'input-boxes' as const,
        content: `**Find the GCF by Listing** 🧮

List the factors of each number, then find the greatest factor they share.

**1)** GCF of $8$ and $12$ $= \\,?$
**2)** GCF of $9$ and $15$ $= \\,?$
**3)** GCF of $6$ and $10$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '2'],
          hint1: 'Factors of $8$: $1, 2, 4, 8$. Factors of $12$: $1, 2, 3, 4, 6, 12$. Shared: $1, 2, 4$.',
          hint2: 'Factors of $9$: $1, 3, 9$. Factors of $15$: $1, 3, 5, 15$. Shared: $1, 3$.',
          hint3: 'Factors of $6$: $1, 2, 3, 6$. Factors of $10$: $1, 2, 5, 10$. Shared: $1, 2$.',
          explanation: '1) Shared factors $1, 2, 4$ → GCF $= 4$.  2) Shared factors $1, 3$ → GCF $= 3$.  3) Shared factors $1, 2$ → GCF $= 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'gcf-and-lcm',
    sections: [
      {
        id: 'gl2-primes',
        type: 'text' as const,
        content: `# 🔢 GCF and LCM

**Part 2 of 5 — Prime Factorization & a Faster GCF**

---

> 🔑 **The Idea:** Listing every factor is slow for big numbers. Instead, break each number into its **prime building blocks** — its prime factorization — and find the GCF from the parts they share.

## Prime Numbers and Factor Trees

A **prime number** has exactly **two** factors: $1$ and itself. The first few primes are:

$$2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19,\\ \\dots$$

A number that is **not** prime (and isn't $1$) is **composite** — it can be broken down further.

**Prime factorization** rewrites a number as a product of primes only. Build it with a **factor tree**:

$$24 = 4 \\times 6 = (2 \\times 2) \\times (2 \\times 3) = 2 \\times 2 \\times 2 \\times 3$$

Using exponents: $24 = 2^3 \\times 3$.

> 💡 **Check:** $2 \\times 2 \\times 2 \\times 3 = 8 \\times 3 = 24$ ✓. No matter how you split a number, the prime factorization always comes out the same.`,
      },
      {
        id: 'gl2-prime-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is **prime**?',
              options: ['$13$', '$15$', '$21$', '$9$'],
              correctAnswer: 0,
              explanation: '$13$ has only the factors $1$ and $13$. $15 = 3 \\times 5$, $21 = 3 \\times 7$, and $9 = 3 \\times 3$ are all composite.',
            },
            {
              question: 'The prime factorization of $36$ is:',
              options: ['$2^2 \\times 3^2$', '$2^3 \\times 3$', '$4 \\times 9$', '$6 \\times 6$'],
              correctAnswer: 0,
              explanation: '$36 = 4 \\times 9 = (2 \\times 2) \\times (3 \\times 3) = 2^2 \\times 3^2$. The other options are either not all prime or give the wrong product.',
            },
          ],
        },
      },
      {
        id: 'gl2-tree-tip',
        type: 'text' as const,
        content: `## Building a Factor Tree

Start by splitting the number into **any** two factors, then keep splitting until **every** branch ends in a prime.

$$30 \\to 5 \\times 6 \\to 5 \\times (2 \\times 3) = 2 \\times 3 \\times 5$$

It doesn't matter where you start — $30 = 3 \\times 10 = 3 \\times (2 \\times 5)$ gives the **same** primes $2 \\times 3 \\times 5$.

> 🔑 **Goal:** Keep breaking down composite numbers until only primes are left on the branches. Those primes, multiplied together, *are* the prime factorization.`,
      },
      {
        id: 'gl2-prime-drill',
        type: 'input-boxes' as const,
        content: `**Build the Prime Factorization** 🧮

Break each number down to primes. Enter the missing value.

**1)** $18 = 2 \\times 3 \\times \\,?$
**2)** $20 = 2 \\times 2 \\times \\,?$
**3)** $30 = 2 \\times 3 \\times \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '5'],
          hint1: '$18 = 2 \\times 9 = 2 \\times 3 \\times 3$, so the missing prime is $3$.',
          hint2: '$20 = 4 \\times 5 = 2 \\times 2 \\times 5$, so the missing prime is $5$.',
          hint3: '$30 = 2 \\times 15 = 2 \\times 3 \\times 5$, so the missing prime is $5$.',
          explanation: '1) $18 = 2 \\times 3 \\times 3$.  2) $20 = 2 \\times 2 \\times 5$.  3) $30 = 2 \\times 3 \\times 5$.',
        },
      },
      {
        id: 'gl2-gcf-from-primes',
        type: 'text' as const,
        content: `## Finding the GCF from Prime Factors

To find the GCF, line up the prime factorizations and **multiply the primes they share** (taking the smaller power of each shared prime).

### Example: GCF of $24$ and $36$

$$24 = 2 \\times 2 \\times 2 \\times 3 \\qquad 36 = 2 \\times 2 \\times 3 \\times 3$$

| Prime | In $24$ | In $36$ | Take (smaller count) |
|-------|---------|---------|----------------------|
| $2$ | three $2$s | two $2$s | two $2$s |
| $3$ | one $3$ | two $3$s | one $3$ |

Multiply the shared parts: $2 \\times 2 \\times 3 = 12$.

$$\\text{GCF}(24, 36) = 12$$

> ⚠️ **Watch out:** Only multiply primes that appear in **both** numbers, and only as many times as the number with **fewer** of them. The extra $2$ in $24$ and the extra $3$ in $36$ are **not** shared, so they're left out.`,
      },
      {
        id: 'gl2-gcf-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the GCF of $40$ and $60$** 🔽

Use the prime factorizations $40 = 2 \\times 2 \\times 2 \\times 5$ and $60 = 2 \\times 2 \\times 3 \\times 5$.`,
        exercise: {
          dropdowns: [
            { label: 'How many $2$s do they share?', options: ['two', 'three', 'one', 'none'] },
            { label: 'Do they share a $5$?', options: ['yes, one', 'no', 'yes, two', 'yes, three'] },
            { label: 'So the GCF is:', options: ['$20$', '$10$', '$40$', '$5$'] },
          ],
          correctAnswers: ['two', 'yes, one', '$20$'],
          hint1: '$40$ has three $2$s, $60$ has two $2$s — the shared amount is the smaller, which is two.',
          hint2: 'Both $40$ and $60$ contain exactly one $5$, so they share one $5$.',
          hint3: 'Multiply the shared primes: $2 \\times 2 \\times 5 = 20$.',
          explanation: 'Shared primes are two $2$s and one $5$: $2 \\times 2 \\times 5 = 20$, so $\\text{GCF}(40, 60) = 20$.',
        },
      },
      {
        id: 'gl2-recap',
        type: 'text' as const,
        content: `## The GCF Recipe (Three Steps)

> 🔑 **To find any GCF:**
> 1. Write each number's **prime factorization**.
> 2. Circle the primes that appear in **both**, taking the **smaller** count of each.
> 3. **Multiply** the circled primes.

If two numbers share **no** primes, the only common factor is $1$ — so their GCF is $\\mathbf{1}$. (We call such numbers *relatively prime*: for example, $8 = 2^3$ and $9 = 3^2$ share nothing, so $\\text{GCF}(8, 9) = 1$.) Now try the recipe yourself.`,
      },
      {
        id: 'gl2-gcf-drill',
        type: 'input-boxes' as const,
        content: `**GCF with Prime Factorization** 🧮

Find each GCF using the prime building blocks.

**1)** GCF of $16$ and $24$ $= \\,?$
**2)** GCF of $18$ and $30$ $= \\,?$
**3)** GCF of $14$ and $35$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '7'],
          hint1: '$16 = 2^4$, $24 = 2^3 \\times 3$. Shared: three $2$s → $2 \\times 2 \\times 2 = 8$.',
          hint2: '$18 = 2 \\times 3^2$, $30 = 2 \\times 3 \\times 5$. Shared: one $2$, one $3$ → $2 \\times 3 = 6$.',
          hint3: '$14 = 2 \\times 7$, $35 = 5 \\times 7$. Shared: one $7$ → $7$.',
          explanation: '1) Shared $2 \\times 2 \\times 2 = 8$.  2) Shared $2 \\times 3 = 6$.  3) Shared $7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'gcf-and-lcm',
    sections: [
      {
        id: 'gl3-multiples',
        type: 'text' as const,
        content: `# 🔢 GCF and LCM

**Part 3 of 5 — Multiples and the Least Common Multiple**

---

> 🔑 **The Switch:** GCF was about *dividing* — the biggest number that fits **inside** both. The **LCM** flips it: the *smallest* number that **both numbers fit inside**. It's the smallest number on both of their times tables.

## What Is a Multiple?

A **multiple** of a number is what you get when you multiply it by $1, 2, 3, 4, \\dots$ — its **times table**.

| Number | First few multiples |
|--------|---------------------|
| $4$ | $4, 8, 12, 16, 20, 24, \\dots$ |
| $6$ | $6, 12, 18, 24, 30, \\dots$ |

A **common multiple** appears in **both** lists. For $4$ and $6$, both lists contain $12$ and $24$. The **Least Common Multiple (LCM)** is the **smallest** common multiple.

$$\\text{LCM}(4, 6) = 12$$

> 💡 **Factor vs. Multiple:** A *factor* is **smaller** than (or equal to) the number; a *multiple* is **larger** than (or equal to) the number. Factors divide in; multiples count up.`,
      },
      {
        id: 'gl3-mult-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a multiple of $7$?',
              options: ['$28$', '$30$', '$15$', '$22$'],
              correctAnswer: 0,
              explanation: '$7 \\times 4 = 28$, so $28$ is a multiple of $7$. The others are not in the $7$ times table.',
            },
            {
              question: 'The smallest common multiple of $3$ and $5$ is:',
              options: ['$15$', '$8$', '$30$', '$45$'],
              correctAnswer: 0,
              explanation: 'Multiples of $3$: $3, 6, 9, 12, 15, \\dots$; multiples of $5$: $5, 10, 15, \\dots$. The first one they share is $15$.',
            },
          ],
        },
      },
      {
        id: 'gl3-listing-tip',
        type: 'text' as const,
        content: `## Listing Multiples to Find the LCM

The simplest way to find an LCM with small numbers: list the multiples of **each** number and stop at the **first** value that shows up in both lists.

### Example: LCM of $6$ and $8$

| Number | Multiples |
|--------|-----------|
| $6$ | $6, 12, 18, \\mathbf{24}, 30, \\dots$ |
| $8$ | $8, 16, \\mathbf{24}, 32, \\dots$ |

The first match is $24$, so $\\text{LCM}(6, 8) = 24$.

> 💡 **Shortcut:** If the larger number is already a multiple of the smaller (like $9$ and $3$), the larger number **is** the LCM — no listing needed.`,
      },
      {
        id: 'gl3-lcm-listing',
        type: 'input-boxes' as const,
        content: `**Find the LCM by Listing** 🧮

List multiples of each number until you hit the first one they share.

**1)** LCM of $2$ and $5$ $= \\,?$
**2)** LCM of $4$ and $6$ $= \\,?$
**3)** LCM of $3$ and $9$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '12', '9'],
          hint1: 'Multiples of $2$: $2, 4, 6, 8, 10$; of $5$: $5, 10$. First shared is $10$.',
          hint2: 'Multiples of $4$: $4, 8, 12$; of $6$: $6, 12$. First shared is $12$.',
          hint3: '$9$ is already a multiple of $3$ ($3 \\times 3 = 9$), so the LCM is $9$ itself.',
          explanation: '1) LCM $= 10$.  2) LCM $= 12$.  3) Since $9$ is a multiple of $3$, LCM $= 9$.',
        },
      },
      {
        id: 'gl3-lcm-primes',
        type: 'text' as const,
        content: `## Finding the LCM from Prime Factors

For bigger numbers, use prime factorizations. For the LCM, take **each prime the greatest number of times** it appears in *either* number — then multiply.

### Example: LCM of $12$ and $18$

$$12 = 2 \\times 2 \\times 3 \\qquad 18 = 2 \\times 3 \\times 3$$

| Prime | Most in either number | Take |
|-------|------------------------|------|
| $2$ | two $2$s (in $12$) | $2 \\times 2$ |
| $3$ | two $3$s (in $18$) | $3 \\times 3$ |

Multiply: $2 \\times 2 \\times 3 \\times 3 = 36$.

$$\\text{LCM}(12, 18) = 36$$

> ⚠️ **GCF vs. LCM — opposite rules!** For the **GCF** you take the **smaller** count of each *shared* prime. For the **LCM** you take the **larger** count of *every* prime that appears. Don't mix them up.`,
      },
      {
        id: 'gl3-lcm-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the LCM of $8$ and $12$** 🔽

Use $8 = 2 \\times 2 \\times 2$ and $12 = 2 \\times 2 \\times 3$.`,
        exercise: {
          dropdowns: [
            { label: 'Most $2$s in either number:', options: ['three (from $8$)', 'two (from $12$)', 'one', 'five'] },
            { label: 'Most $3$s in either number:', options: ['one (from $12$)', 'none', 'two', 'three'] },
            { label: 'So the LCM is:', options: ['$24$', '$16$', '$4$', '$96$'] },
          ],
          correctAnswers: ['three (from $8$)', 'one (from $12$)', '$24$'],
          hint1: '$8 = 2 \\times 2 \\times 2$ has three $2$s; $12$ has only two. Take the larger count: three.',
          hint2: 'Only $12$ has a $3$ (one of them), so take one $3$.',
          hint3: 'Multiply: $2 \\times 2 \\times 2 \\times 3 = 8 \\times 3 = 24$.',
          explanation: 'Take three $2$s and one $3$: $2 \\times 2 \\times 2 \\times 3 = 24$, so $\\text{LCM}(8, 12) = 24$.',
        },
      },
      {
        id: 'gl3-lcm-recap',
        type: 'text' as const,
        content: `## The LCM Recipe (Three Steps)

> 🔑 **To find any LCM:**
> 1. Write each number's **prime factorization**.
> 2. For **every** prime that appears, take the **larger** count.
> 3. **Multiply** them all together.

If two numbers share **no** primes, just multiply them — for example $\\text{LCM}(5, 6) = 5 \\times 6 = 30$. Your turn.`,
      },
      {
        id: 'gl3-lcm-drill',
        type: 'input-boxes' as const,
        content: `**LCM Practice** 🧮

Find each LCM (listing or prime factors — your choice).

**1)** LCM of $8$ and $10$ $= \\,?$
**2)** LCM of $5$ and $6$ $= \\,?$
**3)** LCM of $10$ and $15$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '30', '30'],
          hint1: '$8 = 2^3$, $10 = 2 \\times 5$. Take three $2$s and one $5$: $8 \\times 5 = 40$.',
          hint2: '$5$ and $6$ share no primes, so LCM $= 5 \\times 6 = 30$.',
          hint3: '$10 = 2 \\times 5$, $15 = 3 \\times 5$. Take one each of $2, 3, 5$: $2 \\times 3 \\times 5 = 30$.',
          explanation: '1) Take three $2$s and one $5$: $8 \\times 5 = 40$.  2) No shared primes → $5 \\times 6 = 30$.  3) $2 \\times 3 \\times 5 = 30$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'gcf-and-lcm',
    sections: [
      {
        id: 'gl4-intro',
        type: 'text' as const,
        content: `# 🔢 GCF and LCM

**Part 4 of 5 — Word Problems: GCF or LCM?**

---

> 🔑 **The Hard Part Isn't the Math — It's Choosing.** Most mistakes happen when students compute the GCF when the problem actually wanted the LCM (or vice versa). This part teaches you how to **tell them apart**.`,
      },
      {
        id: 'gl4-decide',
        type: 'text' as const,
        content: `## How to Decide: GCF or LCM?

Read the problem and ask what's happening:

| Use **GCF** when… | Use **LCM** when… |
|-------------------|-------------------|
| **Splitting** things into equal groups | Events **repeat** and you find when they **line up** |
| Making the **largest** possible group/row | Finding the **next** or **smallest** shared total |
| The answer is **smaller** than the numbers | The answer is **bigger** than the numbers |

> 🔑 **Quick Test:**
> - "What is the **greatest/largest/biggest** number that…?" → almost always **GCF**.
> - "When will they **happen together again**?" or "**smallest/least** number that…?" → almost always **LCM**.`,
      },
      {
        id: 'gl4-which-check',
        type: 'multiple-choice' as const,
        content: `**Which Tool?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A baker has $24$ muffins and $36$ cookies. She wants identical gift bags with no leftovers, using the **greatest** number of bags possible. GCF or LCM?',
              options: ['GCF', 'LCM', 'Neither', 'Both give the same answer'],
              correctAnswer: 0,
              explanation: 'She is *splitting* items into equal groups and wants the *greatest* number of bags, which is the GCF. $\\text{GCF}(24, 36) = 12$ bags.',
            },
            {
              question: 'One bus comes every $15$ minutes, another every $20$ minutes. They just left together. When is the **next** time they leave together? GCF or LCM?',
              options: ['LCM', 'GCF', 'Neither', 'Add the two numbers'],
              correctAnswer: 0,
              explanation: 'Repeating events lining up again → LCM. $\\text{LCM}(15, 20) = 60$ minutes.',
            },
          ],
        },
      },
      {
        id: 'gl4-worked-gcf',
        type: 'text' as const,
        content: `## Worked Example — A GCF Problem

**Problem:** You have $18$ red beads and $24$ blue beads. You want to make identical bracelets that use up **all** the beads, with the **greatest** number of bracelets. How many bracelets, and what's on each?

**Step 1 — Choose the tool.** "Greatest number of equal groups, no leftovers" → **GCF**.

**Step 2 — Find the GCF.**
$$18 = 2 \\times 3 \\times 3 \\qquad 24 = 2 \\times 2 \\times 2 \\times 3$$
Shared primes: one $2$ and one $3$ → $\\text{GCF} = 2 \\times 3 = 6$.

**Step 3 — Answer.** You can make **$6$ bracelets**. Each gets:
$$18 \\div 6 = 3 \\text{ red beads}, \\qquad 24 \\div 6 = 4 \\text{ blue beads}.$$

> ✅ **Check:** $6$ bracelets $\\times 3$ red $= 18$ ✓ and $6 \\times 4 = 24$ ✓ — all beads used, none left over.`,
      },
      {
        id: 'gl4-worked-lcm',
        type: 'text' as const,
        content: `## Worked Example — An LCM Problem

**Problem:** Hot dogs come in packs of $10$; buns come in packs of $8$. What is the **smallest** number of each you can buy so there are **no leftovers** of either?

**Step 1 — Choose the tool.** "Smallest number where both totals match" → **LCM**.

**Step 2 — Find the LCM.**
$$10 = 2 \\times 5 \\qquad 8 = 2 \\times 2 \\times 2$$
Take the most of each prime: three $2$s and one $5$ → $\\text{LCM} = 2 \\times 2 \\times 2 \\times 5 = 40$.

**Step 3 — Answer.** Buy **$40$ hot dogs and $40$ buns**. That's:
$$40 \\div 10 = 4 \\text{ packs of hot dogs}, \\qquad 40 \\div 8 = 5 \\text{ packs of buns}.$$

> ✅ **Check:** $4 \\times 10 = 40$ hot dogs and $5 \\times 8 = 40$ buns — they match exactly, with none left over.`,
      },
      {
        id: 'gl4-word-dropdown',
        type: 'dropdown-select' as const,
        content: `**Solve a Word Problem** 🔽

Two lighthouses flash on a cycle: one every $6$ seconds, the other every $9$ seconds. They just flashed together.`,
        exercise: {
          dropdowns: [
            { label: 'This problem needs the:', options: ['LCM', 'GCF', 'sum', 'difference'] },
            { label: 'Prime factors: $6 = 2 \\times 3$ and $9 =$', options: ['$3 \\times 3$', '$3 \\times 6$', '$2 \\times 3$', '$9 \\times 1$'] },
            { label: 'They flash together again after:', options: ['$18$ seconds', '$15$ seconds', '$3$ seconds', '$54$ seconds'] },
          ],
          correctAnswers: ['LCM', '$3 \\times 3$', '$18$ seconds'],
          hint1: 'Repeating events lining up again → LCM.',
          hint2: '$9 = 3 \\times 3$.',
          hint3: 'Take one $2$ and two $3$s: $2 \\times 3 \\times 3 = 18$ seconds.',
          explanation: 'LCM of $6 = 2 \\times 3$ and $9 = 3 \\times 3$: take one $2$ and two $3$s → $2 \\times 3 \\times 3 = 18$ seconds.',
        },
      },
      {
        id: 'gl4-keywords',
        type: 'text' as const,
        content: `## Keyword Signals

When a problem is wordy, hunt for these signals before you compute:

| Signal words | Tool |
|--------------|------|
| greatest, largest, biggest, **split** into equal groups, share evenly | **GCF** |
| least, smallest, **next** time, line up, happen **together** again | **LCM** |

> ⚠️ **Don't be fooled by the big numbers.** A GCF answer is usually **smaller** than the numbers in the problem; an LCM answer is usually **bigger**. If your answer feels like it's going the wrong direction, re-read which tool the problem needs.`,
      },
      {
        id: 'gl4-word-drill',
        type: 'input-boxes' as const,
        content: `**Word Problem Drill** 🧮

Decide GCF or LCM, then solve.

**1)** A teacher splits $28$ pencils and $42$ erasers into identical kits with none left over, using the **most** kits possible. How many kits?
**2)** A red light blinks every $12$ s and a green light every $16$ s. After how many seconds do they blink **together** again?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['14', '48'],
          hint1: 'Decide first: "most equal kits, none left over" → GCF; "blink together again" → LCM.',
          hint2: 'For (1): $28 = 2^2 \\times 7$, $42 = 2 \\times 3 \\times 7$; shared primes $2 \\times 7 = 14$.',
          hint3: 'For (2): $12 = 2^2 \\times 3$, $16 = 2^4$; take four $2$s and one $3$ → $16 \\times 3 = 48$.',
          explanation: '1) GCF$(28, 42) = 14$ kits (each with $2$ pencils and $3$ erasers).  2) LCM$(12, 16) = 48$ seconds.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'gcf-and-lcm',
    sections: [
      {
        id: 'gl5-intro',
        type: 'text' as const,
        content: `# 🔢 GCF and LCM

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) list factors and multiples, (2) build prime factorizations, (3) find the GCF and the LCM two ways, and (4) decide which one a word problem needs. Let's put it all together.`,
      },
      {
        id: 'gl5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find the **GCF** | Multiply the **shared** primes, using the **smaller** count of each |
| Find the **LCM** | Multiply **every** prime, using the **larger** count of each |
| Word problem: split into equal groups | **GCF** (answer is small) |
| Word problem: events line up again | **LCM** (answer is big) |

> 💡 **Handy fact:** For any two numbers, $\\text{GCF} \\times \\text{LCM} = $ the product of the two numbers. Check with $12$ and $18$: $\\text{GCF} = 6$, $\\text{LCM} = 36$, and $6 \\times 36 = 216 = 12 \\times 18$ ✓.

> ⚠️ The single most common error is picking the wrong tool. **GCF makes things smaller; LCM makes things bigger.** Re-read the question and ask which way the answer should go.`,
      },
      {
        id: 'gl5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\text{GCF}(45, 60)$?',
              options: ['$15$', '$5$', '$30$', '$9$'],
              correctAnswer: 0,
              explanation: '$45 = 3^2 \\times 5$, $60 = 2^2 \\times 3 \\times 5$. Shared: one $3$ and one $5$ → $3 \\times 5 = 15$.',
            },
            {
              question: 'What is $\\text{LCM}(6, 10)$?',
              options: ['$30$', '$60$', '$2$', '$16$'],
              correctAnswer: 0,
              explanation: '$6 = 2 \\times 3$, $10 = 2 \\times 5$. Take one each of $2, 3, 5$: $2 \\times 3 \\times 5 = 30$.',
            },
          ],
        },
      },
      {
        id: 'gl5-read-carefully',
        type: 'text' as const,
        content: `## One Quick Habit Before You Compute

In the next drill, each item says either **GCF** or **LCM** right in the prompt — but read the *whole* prompt anyway. On a real test the word might be hidden in a story.

> 🔑 **Two-second self-check:** Before circling an answer, ask: *"Did the problem want the answer to come out smaller (GCF) or bigger (LCM)?"* That one question prevents the most common mistake.`,
      },
      {
        id: 'gl5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** GCF of $16$ and $40$ $= \\,?$
**2)** LCM of $9$ and $12$ $= \\,?$
**3)** GCF of $21$ and $28$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '36', '7'],
          hint1: '$16 = 2^4$, $40 = 2^3 \\times 5$. Shared: three $2$s → $8$.',
          hint2: '$9 = 3^2$, $12 = 2^2 \\times 3$. Take two $2$s and two $3$s → $4 \\times 9 = 36$.',
          hint3: '$21 = 3 \\times 7$, $28 = 2^2 \\times 7$. Shared: one $7$ → $7$.',
          explanation: '1) GCF $= 8$.  2) LCM $= 36$.  3) GCF $= 7$.',
        },
      },
      {
        id: 'gl5-exit-lead',
        type: 'text' as const,
        content: `## You're Ready

That's the whole toolkit: factors and multiples, prime factorization, the GCF recipe, the LCM recipe, and the word-problem decision. The exit quiz below pulls from **all five parts** — take your time and use your self-check.

> 💡 **Final reminder:** GCF → multiply **shared** primes (smaller counts) → answer comes out **small**. LCM → multiply **all** primes (larger counts) → answer comes out **big**.`,
      },
      {
        id: 'gl5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The prime factorization of $48$ is:',
              options: ['$2^4 \\times 3$', '$2^3 \\times 3^2$', '$2^2 \\times 3 \\times 4$', '$6 \\times 8$'],
              correctAnswer: 0,
              explanation: '$48 = 16 \\times 3 = (2 \\times 2 \\times 2 \\times 2) \\times 3 = 2^4 \\times 3$. The product is $16 \\times 3 = 48$ ✓.',
            },
            {
              question: 'A florist arranges $30$ roses and $42$ tulips into identical bouquets with no flowers left over, making the **greatest** number of bouquets. How many bouquets?',
              options: ['$6$', '$12$', '$210$', '$2$'],
              correctAnswer: 0,
              explanation: '"Greatest number of equal groups, none left over" → GCF. $30 = 2 \\times 3 \\times 5$, $42 = 2 \\times 3 \\times 7$; shared $2 \\times 3 = 6$ bouquets.',
            },
            {
              question: 'Two runners circle a track: one every $4$ minutes, the other every $5$ minutes. They start together. When are they next together at the start?',
              options: ['After $20$ minutes', 'After $1$ minute', 'After $9$ minutes', 'After $40$ minutes'],
              correctAnswer: 0,
              explanation: '"Next time they line up" → LCM. $4$ and $5$ share no primes, so $\\text{LCM}(4, 5) = 4 \\times 5 = 20$ minutes.',
            },
          ],
        },
      },
    ],
  },
]
