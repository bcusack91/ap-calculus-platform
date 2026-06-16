import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Factors and Multiples (Grade 5 Math).
 * Registry key / DB slug: 'factors-and-multiples'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'factors-and-multiples',
    sections: [
      {
        id: 'fm1-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Multiples

**Part 1 of 5 — Finding Factors**

---

### Topics in This Part

| Section |
|---------|
| What Is a Factor? |
| Finding Every Factor of a Number |
| Factor Pairs |

> 🔑 **Key Concept:** A **factor** of a number divides into it **evenly** — with no remainder left over. Learning to list *all* of a number's factors is the first tool you'll use in this whole lesson.`,
      },
      {
        id: 'fm1-what',
        type: 'text' as const,
        content: `## What Is a Factor?

A **factor** of a number is a whole number that divides into it with **no remainder**.

Think about $12$. Which numbers divide into it evenly?

$$12 \\div 1 = 12 \\quad 12 \\div 2 = 6 \\quad 12 \\div 3 = 4 \\quad 12 \\div 4 = 3 \\quad 12 \\div 6 = 2 \\quad 12 \\div 12 = 1$$

Every one of those came out to a whole number, so the **factors of $12$** are:

$$1,\\; 2,\\; 3,\\; 4,\\; 6,\\; 12$$

What about $12 \\div 5 = 2\\text{ R }2$? That leaves a remainder, so $5$ is **not** a factor of $12$.

> 🔑 **Two facts that are always true:** $1$ is a factor of *every* number, and every number is a factor of *itself*. So the smallest factor is always $1$ and the largest is always the number itself.`,
      },
      {
        id: 'fm1-isfactor',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is a factor of $20$?',
              options: ['$3$', '$4$', '$7$', '$8$'],
              correctAnswer: 1,
              explanation: '$20 \\div 4 = 5$ with no remainder, so $4$ is a factor. The others all leave a remainder: $20\\div 3$, $20\\div 7$, and $20\\div 8$ do not come out even.',
            },
            {
              question: 'Why is $5$ NOT a factor of $12$?',
              options: ['Because $5$ is bigger than $12$', 'Because $12 \\div 5$ leaves a remainder', 'Because $5$ is an odd number', 'Because $12$ is even'],
              correctAnswer: 1,
              explanation: '$12 \\div 5 = 2$ remainder $2$. A factor must divide evenly with no remainder, so $5$ is not a factor of $12$.',
            },
          ],
        },
      },
      {
        id: 'fm1-pairs',
        type: 'text' as const,
        content: `## Factor Pairs — Find Them Two at a Time

Factors come in **pairs** that multiply to the number. To find every factor of $24$, start at $1$ and work up, writing each pair:

| Pair | Product |
|------|---------|
| $1 \\times 24$ | $24$ |
| $2 \\times 12$ | $24$ |
| $3 \\times 8$ | $24$ |
| $4 \\times 6$ | $24$ |

Once the pairs start to repeat (the next would be $6 \\times 4$, which we already have), you're done. Reading the columns gives **all** the factors of $24$:

$$1,\\; 2,\\; 3,\\; 4,\\; 6,\\; 8,\\; 12,\\; 24$$

> 💡 **Why pairs help:** you only have to test the small numbers. Each small factor hands you its big partner for free, so you never miss one and never double-count.`,
      },
      {
        id: 'fm1-pairdrill',
        type: 'input-boxes' as const,
        content: `**Complete the Factor Pair** 🧮

Each pair multiplies to the target number. Find the missing partner.

**1)** $18 = 2 \\times \\,?$
**2)** $18 = 3 \\times \\,?$
**3)** $36 = 4 \\times \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '6', '9'],
          hint1: 'Ask: "$2$ times what equals $18$?" That is $18 \\div 2$.',
          hint2: '$18 \\div 3 = 6$, so the partner of $3$ is $6$.',
          hint3: '$36 \\div 4 = 9$, so the partner of $4$ is $9$.',
          explanation: '1) $2 \\times 9 = 18$.  2) $3 \\times 6 = 18$.  3) $4 \\times 9 = 36$. Each missing partner is just the target divided by the factor you already have.',
        },
      },
      {
        id: 'fm1-counttext',
        type: 'text' as const,
        content: `## Reading the Whole Factor List

Once you've listed every factor pair, reading down the columns gives the **complete** list of factors — already in order from smallest to largest.

For $20$: the pairs are $1\\times20$, $2\\times10$, $4\\times5$. So the factors are $1, 2, 4, 5, 10, 20$ — that's **six** factors.

> 💡 **One careful spot:** when a number is a "square" like $16 = 4\\times4$, the repeated factor ($4$) is written **only once**. That's why $16$ has an *odd* number of factors.`,
      },
      {
        id: 'fm1-allfactors',
        type: 'input-boxes' as const,
        content: `**Count the Factors** 🧮

List the factors in your head using factor pairs, then enter **how many factors** each number has.

**1)** How many factors does $16$ have?  *(Hint: $1\\times16,\\ 2\\times8,\\ 4\\times4$)*
**2)** How many factors does $15$ have?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '4'],
          hint1: 'For $16$: the pairs are $1\\times16$, $2\\times8$, $4\\times4$. When a pair is a number times itself, that number counts only once.',
          hint2: 'Factors of $16$: $1, 2, 4, 8, 16$ — that is $5$ factors.',
          hint3: 'Factors of $15$: pairs $1\\times15$ and $3\\times5$, giving $1, 3, 5, 15$ — that is $4$ factors.',
          explanation: '1) $16$ has factors $1, 2, 4, 8, 16$, so $5$ factors. The pair $4\\times4$ gives just one new factor.  2) $15$ has factors $1, 3, 5, 15$, so $4$ factors.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'factors-and-multiples',
    sections: [
      {
        id: 'fm2-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Multiples

**Part 2 of 5 — Finding Multiples**

---

> 🔑 **The Idea:** A **multiple** of a number is what you get when you multiply it by $1, 2, 3, 4, \\ldots$ Multiples are the "skip-counting" numbers — and there are infinitely many of them.`,
      },
      {
        id: 'fm2-what',
        type: 'text' as const,
        content: `## What Is a Multiple?

A **multiple** of a number is the product of that number and any whole number ($1, 2, 3, \\ldots$).

The multiples of $4$ are just the times-$4$ table:

$$4 \\times 1 = 4 \\quad 4 \\times 2 = 8 \\quad 4 \\times 3 = 12 \\quad 4 \\times 4 = 16 \\quad 4 \\times 5 = 20$$

So the first five multiples of $4$ are:

$$4,\\; 8,\\; 12,\\; 16,\\; 20,\\; \\ldots$$

You can also find them by **skip-counting**: start at $4$ and keep adding $4$.

> 🔑 **Key fact:** The list of multiples never ends — you can always multiply by a bigger number. The **smallest** multiple of any number is the number itself (multiply by $1$).`,
      },
      {
        id: 'fm2-listdrill',
        type: 'input-boxes' as const,
        content: `**List the Multiples** 🧮

Skip-count to fill in the missing multiples.

**1)** Multiples of $6$:  $6,\\ 12,\\ \\underline{\\;?\\;},\\ 24,\\ 30$
**2)** Multiples of $7$:  $7,\\ 14,\\ 21,\\ \\underline{\\;?\\;},\\ 35$
**3)** The $4$th multiple of $9$ is $\\underline{\\;?\\;}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18', '28', '36'],
          hint1: 'Multiples of $6$ go up by $6$ each time: after $12$ comes $12 + 6 = 18$.',
          hint2: 'Multiples of $7$ go up by $7$: after $21$ comes $21 + 7 = 28$.',
          hint3: 'The $4$th multiple of $9$ is $9 \\times 4 = 36$.',
          explanation: '1) $6, 12, \\mathbf{18}, 24, 30$.  2) $7, 14, 21, \\mathbf{28}, 35$.  3) $9 \\times 4 = \\mathbf{36}$.',
        },
      },
      {
        id: 'fm2-vs',
        type: 'text' as const,
        content: `## Factor vs. Multiple — Don't Mix Them Up!

These two words are easy to confuse. Use $3$ and $12$ to see the difference:

| Statement | True? | Why |
|-----------|-------|-----|
| $3$ is a **factor** of $12$ | ✅ | $3$ divides into $12$ evenly ($12 \\div 3 = 4$) |
| $12$ is a **multiple** of $3$ | ✅ | $12$ is in the times-$3$ table ($3 \\times 4 = 12$) |

Notice they describe the **same relationship** from two directions:

$$\\underbrace{3}_{\\text{factor (small)}} \\longrightarrow \\underbrace{12}_{\\text{multiple (big)}}$$

> 💡 **Memory trick:** A **factor** *fits inside* a number (it's small). A **multiple** is *many* of a number (it's big — or equal). Factors are at or below the number; multiples are at or above it.`,
      },
      {
        id: 'fm2-vsquiz',
        type: 'dropdown-select' as const,
        content: `**Factor or Multiple?** 🔽

Choose the word that makes each sentence true.`,
        exercise: {
          dropdowns: [
            { label: '$5$ is a ___ of $20$.', options: ['factor', 'multiple'] },
            { label: '$20$ is a ___ of $5$.', options: ['factor', 'multiple'] },
            { label: '$24$ is a ___ of $8$.', options: ['factor', 'multiple'] },
            { label: '$8$ is a ___ of $24$.', options: ['factor', 'multiple'] },
          ],
          correctAnswers: ['factor', 'multiple', 'multiple', 'factor'],
          hint1: 'The smaller number that divides in evenly is the **factor**; the bigger number it builds is the **multiple**.',
          hint2: '$5$ divides into $20$ ($20\\div5=4$), so $5$ is a factor of $20$ — and $20$ is a multiple of $5$.',
          hint3: '$8$ divides into $24$ ($24\\div8=3$), so $8$ is a factor of $24$ — and $24$ is a multiple of $8$.',
          explanation: 'The small divider is the factor; the big result is the multiple. $5$ is a factor of $20$; $20$ is a multiple of $5$. $8$ is a factor of $24$; $24$ is a multiple of $8$.',
        },
      },
      {
        id: 'fm2-spotmult',
        type: 'text' as const,
        content: `## How to Spot a Multiple

To check whether a big number is a **multiple** of a small one, just **divide**. If it comes out even (no remainder), it's a multiple.

Is $32$ a multiple of $8$? $\\;32 \\div 8 = 4$ ✓ — yes.
Is $28$ a multiple of $8$? $\\;28 \\div 8 = 3\\text{ R }4$ ✗ — no.

> 🔑 **The deep connection:** "$32$ is a multiple of $8$" and "$8$ is a factor of $32$" are the *same true fact*. Dividing tests both at once.`,
      },
      {
        id: 'fm2-checkmult',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is a multiple of $8$?',
              options: ['$4$', '$18$', '$32$', '$28$'],
              correctAnswer: 2,
              explanation: '$32 = 8 \\times 4$, so $32$ is a multiple of $8$. The others are not in the times-$8$ table: $8, 16, 24, 32, 40, \\ldots$',
            },
            {
              question: 'How many multiples does the number $9$ have?',
              options: ['Exactly $9$', 'Exactly $3$', 'Infinitely many', 'Only $1$'],
              correctAnswer: 2,
              explanation: 'You can always multiply $9$ by a bigger whole number, so the list $9, 18, 27, 36, \\ldots$ never ends. Every number has infinitely many multiples.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'factors-and-multiples',
    sections: [
      {
        id: 'fm3-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Multiples

**Part 3 of 5 — Prime, Composite & Prime Factorization**

---

> 🔑 **Why it matters:** Sorting numbers by *how many factors* they have splits every whole number into **prime** or **composite**. Then we break composite numbers into their prime building blocks — a skill you'll lean on for GCF and LCM.`,
      },
      {
        id: 'fm3-primecomp',
        type: 'text' as const,
        content: `## Prime vs. Composite

We can sort numbers by how many factors they have:

- A **prime** number has **exactly two** factors: $1$ and itself.
- A **composite** number has **more than two** factors.
- The number $1$ is **neither** prime nor composite — it has only one factor (itself).

| Number | Factors | Type |
|--------|---------|------|
| $7$ | $1, 7$ | prime (exactly $2$) |
| $13$ | $1, 13$ | prime (exactly $2$) |
| $9$ | $1, 3, 9$ | composite ($3$ factors) |
| $12$ | $1, 2, 3, 4, 6, 12$ | composite ($6$ factors) |
| $1$ | $1$ | neither |

The first few primes are $2, 3, 5, 7, 11, 13, 17, 19, \\ldots$

> ⚠️ **Watch out:** $2$ is the **only even prime** — every other even number is divisible by $2$, giving it a third factor. And $1$ is *not* prime, even though it feels like it should be.`,
      },
      {
        id: 'fm3-sortquiz',
        type: 'dropdown-select' as const,
        content: `**Sort Each Number** 🔽

Decide whether each number is prime, composite, or neither.`,
        exercise: {
          dropdowns: [
            { label: '$11$ is:', options: ['prime', 'composite', 'neither'] },
            { label: '$21$ is:', options: ['prime', 'composite', 'neither'] },
            { label: '$1$ is:', options: ['prime', 'composite', 'neither'] },
            { label: '$2$ is:', options: ['prime', 'composite', 'neither'] },
          ],
          correctAnswers: ['prime', 'composite', 'neither', 'prime'],
          hint1: 'A prime has exactly two factors ($1$ and itself). A composite has more than two.',
          hint2: '$21 = 3 \\times 7$, so it has factors $1, 3, 7, 21$ — more than two, so composite.',
          hint3: '$1$ has only one factor, so it is neither. $2$ has just $1$ and $2$, so it is prime (the only even prime).',
          explanation: '$11$: factors $1, 11$ → prime. $21$: factors $1, 3, 7, 21$ → composite. $1$: only factor is $1$ → neither. $2$: factors $1, 2$ → prime.',
        },
      },
      {
        id: 'fm3-factortree',
        type: 'text' as const,
        content: `## Prime Factorization with a Factor Tree

Every composite number can be written as a product of **primes only**. A **factor tree** breaks it down step by step. Let's factor $36$:

$$36 = 4 \\times 9$$
$$4 = 2 \\times 2 \\qquad 9 = 3 \\times 3$$

Keep splitting until **every branch ends in a prime**. The primes at the bottom are:

$$36 = 2 \\times 2 \\times 3 \\times 3$$

We can write repeated primes with exponents: $\\;36 = 2^2 \\times 3^2$.

> 💡 **It doesn't matter how you start!** You could begin $36 = 6 \\times 6$ instead, and you'd still end with $2 \\times 2 \\times 3 \\times 3$. Every number has exactly **one** prime factorization.`,
      },
      {
        id: 'fm3-treework',
        type: 'text' as const,
        content: `### Worked Example: Prime Factorization of $24$

Split off the smallest prime each time:

$$24 = 2 \\times 12$$
$$12 = 2 \\times 6$$
$$6 = 2 \\times 3$$

All branches now end in primes, so:

$$24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$$

> ✅ **Check:** $2 \\times 2 \\times 2 \\times 3 = 8 \\times 3 = 24$ ✓`,
      },
      {
        id: 'fm3-pfdrill',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the prime factorization of $18$?',
              options: ['$2 \\times 9$', '$2 \\times 3 \\times 3$', '$3 \\times 6$', '$2 \\times 2 \\times 3$'],
              correctAnswer: 1,
              explanation: '$18 = 2 \\times 9$, and $9 = 3 \\times 3$, so $18 = 2 \\times 3 \\times 3$. $2\\times9$ and $3\\times6$ are not finished — $9$ and $6$ are not prime.',
            },
            {
              question: 'The prime factorization of $30$ is:',
              options: ['$2 \\times 3 \\times 5$', '$5 \\times 6$', '$2 \\times 15$', '$3 \\times 10$', ],
              correctAnswer: 0,
              explanation: '$30 = 2 \\times 15$, and $15 = 3 \\times 5$, so $30 = 2 \\times 3 \\times 5$. The other choices still contain composite numbers ($6, 15, 10$).',
            },
          ],
        },
      },
      {
        id: 'fm3-pftext',
        type: 'text' as const,
        content: `## Filling In a Missing Prime

If you already know *most* of a number's prime factorization, you can find a missing prime by **dividing out** the primes you have.

Suppose $28 = 2 \\times 2 \\times \\,?$. Multiply the primes you know: $2 \\times 2 = 4$. Then $28 \\div 4 = 7$, so the missing prime is $7$:

$$28 = 2 \\times 2 \\times 7$$

> ✅ **Check:** $2 \\times 2 \\times 7 = 4 \\times 7 = 28$ ✓`,
      },
      {
        id: 'fm3-pfinput',
        type: 'input-boxes' as const,
        content: `**Build the Factorization** 🧮

Finish each prime factorization by filling in the missing prime.

**1)** $12 = 2 \\times 2 \\times \\,?$
**2)** $20 = 2 \\times 2 \\times \\,?$
**3)** $45 = 3 \\times 3 \\times \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '5'],
          hint1: '$2 \\times 2 = 4$, and $4 \\times ? = 12$, so the missing prime is $12 \\div 4 = 3$.',
          hint2: '$2 \\times 2 = 4$, and $4 \\times ? = 20$, so the missing prime is $20 \\div 4 = 5$.',
          hint3: '$3 \\times 3 = 9$, and $9 \\times ? = 45$, so the missing prime is $45 \\div 9 = 5$.',
          explanation: '1) $12 = 2\\times2\\times\\mathbf{3}$.  2) $20 = 2\\times2\\times\\mathbf{5}$.  3) $45 = 3\\times3\\times\\mathbf{5}$. In each case, divide the number by the primes already shown.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'factors-and-multiples',
    sections: [
      {
        id: 'fm4-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Multiples

**Part 4 of 5 — Greatest Common Factor (GCF)**

---

> 🔑 **Big Idea:** The **Greatest Common Factor** of two numbers is the **largest** number that is a factor of *both*. It's the key to simplifying fractions and sharing things into equal groups.`,
      },
      {
        id: 'fm4-gcf',
        type: 'text' as const,
        content: `## Finding the GCF by Listing Factors

To find the **GCF** of two numbers, list the factors of each, circle the ones they **share**, and pick the **biggest**.

### Example: GCF of $12$ and $18$

| Number | Factors |
|--------|---------|
| $12$ | $1, 2, 3, 4, 6, 12$ |
| $18$ | $1, 2, 3, 6, 9, 18$ |

The **common** factors (in both lists) are $1, 2, 3, 6$. The greatest of these is:

$$\\text{GCF}(12, 18) = 6$$

> 🔑 **What "common" means:** a *common factor* divides both numbers. The *greatest* common factor is simply the largest one they share.`,
      },
      {
        id: 'fm4-gcfquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the GCF of $8$ and $12$?',
              options: ['$2$', '$4$', '$8$', '$24$'],
              correctAnswer: 1,
              explanation: 'Factors of $8$: $1, 2, 4, 8$. Factors of $12$: $1, 2, 3, 4, 6, 12$. The shared factors are $1, 2, 4$; the greatest is $4$.',
            },
            {
              question: 'What is the GCF of $9$ and $12$?',
              options: ['$1$', '$3$', '$6$', '$36$'],
              correctAnswer: 1,
              explanation: 'Factors of $9$: $1, 3, 9$. Factors of $12$: $1, 2, 3, 4, 6, 12$. The shared factors are $1, 3$; the greatest is $3$.',
            },
          ],
        },
      },
      {
        id: 'fm4-prime-method',
        type: 'text' as const,
        content: `## A Faster Way: Use Prime Factorizations

For bigger numbers, listing every factor is slow. Instead, write each number's **prime factorization** and multiply the primes they **share**.

### Example: GCF of $24$ and $36$

$$24 = 2 \\times 2 \\times 2 \\times 3$$
$$36 = 2 \\times 2 \\times 3 \\times 3$$

Match up the primes they have **in common**: two $2$'s and one $3$.

$$\\text{GCF} = 2 \\times 2 \\times 3 = 12$$

> 💡 **The rule:** for each prime, take the **smaller** count it appears in the two numbers. $24$ has three $2$'s and $36$ has two $2$'s, so you take **two** $2$'s. Both have one $3$, so take one $3$.`,
      },
      {
        id: 'fm4-gcfdrill',
        type: 'input-boxes' as const,
        content: `**Find the GCF** 🧮

List the factors (or use prime factorizations) and enter the greatest common factor.

**1)** GCF of $16$ and $24$ $= \\,?$
**2)** GCF of $20$ and $30$ $= \\,?$
**3)** GCF of $14$ and $21$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '10', '7'],
          hint1: 'Factors of $16$: $1,2,4,8,16$. Factors of $24$: $1,2,3,4,6,8,12,24$. The biggest shared one is $8$.',
          hint2: 'Factors of $20$: $1,2,4,5,10,20$. Factors of $30$: $1,2,3,5,6,10,15,30$. The biggest shared one is $10$.',
          hint3: 'Factors of $14$: $1,2,7,14$. Factors of $21$: $1,3,7,21$. The biggest shared one is $7$.',
          explanation: '1) GCF$(16,24)=8$.  2) GCF$(20,30)=10$.  3) GCF$(14,21)=7$. Each answer is the largest number found in both factor lists.',
        },
      },
      {
        id: 'fm4-gcftip',
        type: 'text' as const,
        content: `## A Handy Shortcut

When the **smaller** number is already a factor of the larger one, the GCF is just the **smaller number itself**.

For example, $6$ and $18$: since $18 \\div 6 = 3$ evenly, $6$ divides both. The largest factor of $6$ is $6$, so:

$$\\text{GCF}(6, 18) = 6$$

> 💡 **Sanity check on any GCF:** it can never be larger than the smaller of the two numbers. If you ever get a "GCF" bigger than both, you've made a slip.`,
      },
      {
        id: 'fm4-stepdropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through a GCF** 🔽

Find the GCF of $18$ and $24$ step by step.`,
        exercise: {
          dropdowns: [
            { label: 'Factors of $18$ are:', options: ['$1, 2, 3, 6, 9, 18$', '$1, 2, 3, 18$', '$1, 3, 6, 18$', '$2, 4, 6, 18$'] },
            { label: 'Factors of $24$ are:', options: ['$1, 2, 3, 4, 6, 8, 12, 24$', '$1, 2, 4, 8, 24$', '$1, 3, 6, 12, 24$', '$2, 4, 6, 12, 24$'] },
            { label: 'Their common factors are:', options: ['$1, 2, 3, 6$', '$1, 2, 4$', '$1, 3, 9$', '$2, 6, 9$'] },
            { label: 'So the GCF is:', options: ['$6$', '$3$', '$9$', '$12$'] },
          ],
          correctAnswers: ['$1, 2, 3, 6, 9, 18$', '$1, 2, 3, 4, 6, 8, 12, 24$', '$1, 2, 3, 6$', '$6$'],
          hint1: 'List the factors of each number with factor pairs: $18 = 1\\times18, 2\\times9, 3\\times6$.',
          hint2: '$24 = 1\\times24, 2\\times12, 3\\times8, 4\\times6$, giving $1,2,3,4,6,8,12,24$.',
          hint3: 'The numbers in BOTH lists are $1, 2, 3, 6$; the greatest of those is $6$.',
          explanation: 'Factors of $18$: $1,2,3,6,9,18$. Factors of $24$: $1,2,3,4,6,8,12,24$. Common: $1,2,3,6$. Greatest common factor $= 6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'factors-and-multiples',
    sections: [
      {
        id: 'fm5-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Multiples

**Part 5 of 5 — Least Common Multiple (LCM) & Mastery Check**

---

> 🔑 **Last Tool:** The **Least Common Multiple** of two numbers is the **smallest** number that is a multiple of *both*. It's exactly what you need to add fractions and to solve "when do two cycles line up?" problems.`,
      },
      {
        id: 'fm5-lcm',
        type: 'text' as const,
        content: `## Finding the LCM by Listing Multiples

To find the **LCM**, list multiples of each number and grab the **first** one that appears in **both** lists.

### Example: LCM of $4$ and $6$

| Number | Multiples |
|--------|-----------|
| $4$ | $4, 8, \\mathbf{12}, 16, 20, 24, \\ldots$ |
| $6$ | $6, \\mathbf{12}, 18, 24, \\ldots$ |

The first multiple in **both** lists is $12$:

$$\\text{LCM}(4, 6) = 12$$

> ⚠️ **Don't confuse LCM with GCF!** The GCF is a *factor* (small — it divides the numbers). The LCM is a *multiple* (big — the numbers divide into it). For $4$ and $6$: GCF $= 2$, but LCM $= 12$.`,
      },
      {
        id: 'fm5-lcmquiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the LCM of $3$ and $5$?',
              options: ['$1$', '$8$', '$15$', '$30$'],
              correctAnswer: 2,
              explanation: 'Multiples of $3$: $3, 6, 9, 12, 15, \\ldots$ Multiples of $5$: $5, 10, 15, \\ldots$ The first shared multiple is $15$.',
            },
            {
              question: 'What is the LCM of $6$ and $8$?',
              options: ['$2$', '$14$', '$24$', '$48$'],
              correctAnswer: 2,
              explanation: 'Multiples of $6$: $6, 12, 18, 24, \\ldots$ Multiples of $8$: $8, 16, 24, \\ldots$ The first shared multiple is $24$. ($48$ is also common, but it is not the *least*.)',
            },
          ],
        },
      },
      {
        id: 'fm5-lcmtip',
        type: 'text' as const,
        content: `## A Shortcut for LCM

When the **bigger** number is already a multiple of the smaller one, the LCM is just the **bigger number itself**.

For example, $5$ and $10$: since $10$ is already a multiple of $5$, the smallest shared multiple is $10$:

$$\\text{LCM}(5, 10) = 10$$

> 💡 **Sanity check on any LCM:** it can never be smaller than the larger of the two numbers, and it's often the two numbers multiplied together (or a bit less if they share factors).`,
      },
      {
        id: 'fm5-lcmdrill',
        type: 'input-boxes' as const,
        content: `**Find the LCM** 🧮

List the multiples of each number and enter the least common multiple.

**1)** LCM of $4$ and $10$ $= \\,?$
**2)** LCM of $6$ and $9$ $= \\,?$
**3)** LCM of $5$ and $6$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '18', '30'],
          hint1: 'Multiples of $4$: $4,8,12,16,\\mathbf{20}$. Multiples of $10$: $10,\\mathbf{20}$. First match: $20$.',
          hint2: 'Multiples of $6$: $6,12,\\mathbf{18}$. Multiples of $9$: $9,\\mathbf{18}$. First match: $18$.',
          hint3: 'Multiples of $5$: $5,10,15,20,25,\\mathbf{30}$. Multiples of $6$: $6,12,18,24,\\mathbf{30}$. First match: $30$.',
          explanation: '1) LCM$(4,10)=20$.  2) LCM$(6,9)=18$.  3) LCM$(5,6)=30$. Each is the first number that shows up in both multiple lists.',
        },
      },
      {
        id: 'fm5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Term | Meaning | Size | How to find |
|------|---------|------|-------------|
| **Factor** | divides the number evenly | $\\le$ number | test divisors / factor pairs |
| **Multiple** | the number times $1, 2, 3, \\ldots$ | $\\ge$ number | skip-count |
| **Prime** | exactly two factors | — | only $1$ and itself |
| **GCF** | biggest factor two numbers **share** | small | list factors, take greatest common |
| **LCM** | smallest multiple two numbers **share** | big | list multiples, take least common |

> 💡 **The one-line summary:** Factors are the *ingredients* that build a number; multiples are the *numbers you build* with it. GCF looks at shared ingredients; LCM looks at the first shared build.`,
      },
      {
        id: 'fm5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

One question from each part of the lesson.`,
        exercise: {
          dropdowns: [
            { label: 'A factor of $28$ is:', options: ['$7$', '$8$', '$5$', '$3$'] },
            { label: 'A multiple of $7$ is:', options: ['$42$', '$27$', '$17$', '$1$'] },
            { label: '$23$ is a ___ number:', options: ['prime', 'composite'] },
            { label: 'GCF of $12$ and $16$ is:', options: ['$4$', '$2$', '$8$', '$48$'] },
          ],
          correctAnswers: ['$7$', '$42$', 'prime', '$4$'],
          hint1: '$28 \\div 7 = 4$ with no remainder, so $7$ is a factor of $28$.',
          hint2: '$7 \\times 6 = 42$, so $42$ is a multiple of $7$. And $23$ has only factors $1$ and $23$.',
          hint3: 'Factors of $12$: $1,2,3,4,6,12$. Factors of $16$: $1,2,4,8,16$. Greatest shared $= 4$.',
          explanation: '$7$ divides $28$ evenly (factor). $42 = 7\\times6$ (multiple). $23$ has exactly two factors, so it is prime. GCF$(12,16)=4$.',
        },
      },
      {
        id: 'fm5-wrapup',
        type: 'text' as const,
        content: `## You've Got the Whole Toolkit

You can now find **factors**, list **multiples**, sort numbers into **prime** and **composite**, break them apart with **prime factorization**, and find the **GCF** and **LCM** of any pair.

> 🔑 **The big picture:** factors and multiples are two views of the same multiplication fact. Master them and you've laid the foundation for simplifying fractions, finding common denominators, and much of the math ahead. One last quiz to lock it in.`,
      },
      {
        id: 'fm5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement is TRUE?',
              options: ['$6$ is a factor of $24$', '$6$ is a multiple of $24$', '$24$ is a factor of $6$', '$6$ is prime'],
              correctAnswer: 0,
              explanation: '$24 \\div 6 = 4$ evenly, so $6$ is a factor of $24$ (and $24$ is a multiple of $6$). $6$ is composite, not prime.',
            },
            {
              question: 'The prime factorization of $40$ is:',
              options: ['$2 \\times 2 \\times 2 \\times 5$', '$4 \\times 10$', '$2 \\times 20$', '$2 \\times 2 \\times 10$'],
              correctAnswer: 0,
              explanation: '$40 = 2 \\times 20 = 2 \\times 2 \\times 10 = 2 \\times 2 \\times 2 \\times 5$. Only $2 \\times 2 \\times 2 \\times 5$ is fully broken into primes ($= 2^3 \\times 5$).',
            },
            {
              question: 'What is the LCM of $4$ and $6$?',
              options: ['$2$', '$10$', '$12$', '$24$'],
              correctAnswer: 2,
              explanation: 'Multiples of $4$: $4, 8, 12, \\ldots$ Multiples of $6$: $6, 12, \\ldots$ The first shared multiple is $12$. (Note: $2$ is their GCF, not their LCM.)',
            },
          ],
        },
      },
    ],
  },
]
