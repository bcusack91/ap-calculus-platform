import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Factors and Factor Pairs (Grade 4 Math).
 * Registry key: 'factors-factor-pairs-grade4' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'factors-factor-pairs-grade4',
    sections: [
      {
        id: 'ffp1-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Factor Pairs

**Part 1 of 5 — What Is a Factor?**

---

### Topics in This Part

| Section |
|---------|
| What "Factor" Means |
| The Division Test |
| Spotting Factors Quickly |

> 🔑 **Key Concept:** A **factor** is a whole number that divides into another whole number **evenly** — with **nothing left over**. Factors are the building blocks that multiply together to make a number.`,
      },
      {
        id: 'ffp1-what',
        type: 'text' as const,
        content: `## What "Factor" Means

When two whole numbers multiply to make a third number, those two numbers are **factors** of the result.

$$3 \\times 4 = 12$$

Here, **$3$ and $4$ are factors of $12$**. The number $12$ is called the **product**.

Think of factors as the numbers you can split a group into with **equal shares and no leftovers**.

### Example: Factors of 12

You can make $12$ in several ways:

| Multiplication | Factors used |
|----------------|--------------|
| $1 \\times 12$ | $1$ and $12$ |
| $2 \\times 6$  | $2$ and $6$ |
| $3 \\times 4$  | $3$ and $4$ |

So far, $1, 2, 3, 4, 6,$ and $12$ are all factors of $12$.

> 💡 **Every number has at least two factors:** $1$ and **itself**. For example, $1 \\times 7 = 7$, so $1$ and $7$ are both factors of $7$.`,
      },
      {
        id: 'ffp1-meaning-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Since $5 \\times 8 = 40$, which statement is true?',
              options: [
                '$5$ and $8$ are both factors of $40$',
                '$40$ is a factor of $5$',
                'Only $8$ is a factor of $40$',
                '$5$ and $8$ are not factors of $40$',
              ],
              correctAnswer: 0,
              explanation: 'Both numbers that multiply together are factors of the product. Since $5 \\times 8 = 40$, both $5$ and $8$ are factors of $40$.',
            },
            {
              question: 'Which number is a factor of every whole number?',
              options: ['$1$', '$2$', '$10$', '$0$'],
              correctAnswer: 0,
              explanation: '$1$ divides evenly into every whole number (for example $1 \\times 7 = 7$), so $1$ is always a factor.',
            },
          ],
        },
      },
      {
        id: 'ffp1-division-test',
        type: 'text' as const,
        content: `## The Division Test

How do you check whether a number is a factor? Use the **division test**:

> 🔑 **Division Test:** A number is a factor of a bigger number if it divides in **evenly** — the remainder is **$0$**.

### Example: Is $4$ a factor of $20$?

$$20 \\div 4 = 5 \\text{ with remainder } 0$$

The remainder is $0$, so **yes**, $4$ is a factor of $20$. ✓

### Example: Is $6$ a factor of $20$?

$$20 \\div 6 = 3 \\text{ with remainder } 2$$

The remainder is **not** $0$, so **no**, $6$ is not a factor of $20$. ✗

> ⚠️ **Watch out:** "Divides evenly" does **not** mean the answer is an even number. It means there is **no remainder**. For example, $20 \\div 5 = 4$ exactly, so $5$ is a factor of $20$ even though $5$ is odd.`,
      },
      {
        id: 'ffp1-division-drill',
        type: 'input-boxes' as const,
        content: `**Division Test Practice** 🧮

Divide and enter the **remainder** for each. (If it divides evenly, the remainder is $0$.)

**1)** $24 \\div 3 = ?$ remainder
**2)** $24 \\div 5 = ?$ remainder
**3)** $30 \\div 6 = ?$ remainder`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '4', '0'],
          hint1: '$3 \\times 8 = 24$, so $24 \\div 3 = 8$ with nothing left over.',
          hint2: '$5 \\times 4 = 20$, and $24 - 20 = 4$, so the remainder is $4$.',
          hint3: '$6 \\times 5 = 30$, so $30 \\div 6 = 5$ exactly — remainder $0$.',
          explanation: '1) $24 \\div 3 = 8$ r$0$ → $3$ IS a factor of $24$.  2) $24 \\div 5 = 4$ r$4$ → $5$ is NOT a factor of $24$.  3) $30 \\div 6 = 5$ r$0$ → $6$ IS a factor of $30$.',
        },
      },
      {
        id: 'ffp1-which-factor',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is a factor of $18$?',
              options: ['$6$', '$4$', '$5$', '$7$'],
              correctAnswer: 0,
              explanation: '$18 \\div 6 = 3$ with remainder $0$, so $6$ is a factor. The others all leave a remainder: $18 \\div 4 = 4$ r$2$, $18 \\div 5 = 3$ r$3$, $18 \\div 7 = 2$ r$4$.',
            },
            {
              question: 'Why is $7$ NOT a factor of $20$?',
              options: [
                'Because $20 \\div 7$ leaves a remainder',
                'Because $7$ is an odd number',
                'Because $7$ is bigger than $10$',
                'Because $7 \\times 7 = 49$',
              ],
              correctAnswer: 0,
              explanation: '$20 \\div 7 = 2$ with remainder $6$. Since the remainder is not $0$, $7$ does not divide $20$ evenly, so it is not a factor.',
            },
          ],
        },
      },
      {
        id: 'ffp1-wrap',
        type: 'text' as const,
        content: `## You've Got the Foundation

You now know what a factor is and how to test for one:

- A **factor** divides a number **evenly** (remainder $0$).
- Every number has $1$ and **itself** as factors.
- "Evenly" means **no remainder** — not "an even number."

In **Part 2**, we'll organize factors into **factor pairs** so we can find them quickly and never miss one.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'factors-factor-pairs-grade4',
    sections: [
      {
        id: 'ffp2-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Factor Pairs

**Part 2 of 5 — Factor Pairs**

---

> 🔑 **The Idea:** A **factor pair** is **two** numbers that multiply together to make a target number. Listing factor pairs is the neatest way to find *all* the factors of a number.`,
      },
      {
        id: 'ffp2-what-pair',
        type: 'text' as const,
        content: `## What Is a Factor Pair?

A **factor pair** of a number is two whole numbers whose product is that number.

For $12$, the factor pairs are:

$$1 \\times 12 \\qquad 2 \\times 6 \\qquad 3 \\times 4$$

Each pair multiplies to $12$, so the factor pairs of $12$ are:

| Factor Pair | Product |
|-------------|---------|
| $1$ and $12$ | $12$ |
| $2$ and $6$  | $12$ |
| $3$ and $4$  | $12$ |

> 💡 **Picture it:** A factor pair tells you how to arrange objects into equal rows. $12$ stickers can go in $3$ rows of $4$, or $2$ rows of $6$, or $1$ row of $12$. Each arrangement is one factor pair.`,
      },
      {
        id: 'ffp2-find-method',
        type: 'text' as const,
        content: `## A System for Finding Factor Pairs

To find **all** the factor pairs without missing any, count **up from $1$** and test each number:

> 🔑 **The Climbing Method:** Start at $1$ and check $1, 2, 3, 4, \\dots$ in order. Each time a number divides evenly, write down the pair. **Stop** when the two numbers in your pair meet or cross.

### Example: Factor pairs of $18$

| Try | Divides evenly? | Pair |
|-----|-----------------|------|
| $1$ | $18 \\div 1 = 18$ ✓ | $1 \\times 18$ |
| $2$ | $18 \\div 2 = 9$ ✓  | $2 \\times 9$ |
| $3$ | $18 \\div 3 = 6$ ✓  | $3 \\times 6$ |
| $4$ | $18 \\div 4$ — leftover ✗ | — |
| $5$ | $18 \\div 5$ — leftover ✗ | — |
| $6$ | already used in $3 \\times 6$ — **stop** | — |

The factor pairs of $18$ are $1 \\times 18$, $2 \\times 9$, and $3 \\times 6$.`,
      },
      {
        id: 'ffp2-pair-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a factor pair of $20$?',
              options: ['$4 \\times 5$', '$3 \\times 7$', '$6 \\times 4$', '$2 \\times 12$'],
              correctAnswer: 0,
              explanation: '$4 \\times 5 = 20$ ✓. The others do not multiply to $20$: $3 \\times 7 = 21$, $6 \\times 4 = 24$, $2 \\times 12 = 24$.',
            },
            {
              question: 'A factor pair of $24$ is $3 \\times \\underline{\\ \\ }$. What is the missing number?',
              options: ['$8$', '$6$', '$7$', '$9$'],
              correctAnswer: 0,
              explanation: '$24 \\div 3 = 8$, so $3 \\times 8 = 24$. The missing partner is $8$.',
            },
          ],
        },
      },
      {
        id: 'ffp2-missing-partner',
        type: 'input-boxes' as const,
        content: `**Find the Missing Partner** 🧮

Each line shows one number from a factor pair. Enter the partner that completes the pair.

**1)** $2 \\times ? = 16$
**2)** $5 \\times ? = 35$
**3)** $6 \\times ? = 42$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '7', '7'],
          hint1: 'To find the partner, divide the product by the number you know: $16 \\div 2$.',
          hint2: '$35 \\div 5 = 7$, so the partner is $7$.',
          hint3: '$42 \\div 6 = 7$, so the partner is $7$.',
          explanation: '1) $16 \\div 2 = 8$.  2) $35 \\div 5 = 7$.  3) $42 \\div 6 = 7$. To find a partner, divide the product by the factor you already have.',
        },
      },
      {
        id: 'ffp2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Factor Pairs of 30** 🔽

Use the climbing method. Pick the correct partner for each factor of $30$.`,
        exercise: {
          dropdowns: [
            { label: '$1 \\times \\underline{\\ \\ } = 30$', options: ['$30$', '$15$', '$10$', '$6$'] },
            { label: '$2 \\times \\underline{\\ \\ } = 30$', options: ['$15$', '$14$', '$12$', '$10$'] },
            { label: '$3 \\times \\underline{\\ \\ } = 30$', options: ['$10$', '$9$', '$12$', '$11$'] },
            { label: '$5 \\times \\underline{\\ \\ } = 30$', options: ['$6$', '$5$', '$7$', '$8$'] },
          ],
          correctAnswers: ['$30$', '$15$', '$10$', '$6$'],
          hint1: 'Divide $30$ by the number shown to find its partner.',
          hint2: '$30 \\div 2 = 15$ and $30 \\div 3 = 10$.',
          hint3: '$30 \\div 5 = 6$. After $5 \\times 6$, the next try ($6$) is already used, so the list is complete.',
          explanation: 'The factor pairs of $30$ are $1 \\times 30$, $2 \\times 15$, $3 \\times 10$, and $5 \\times 6$. (Note $4$ is skipped because $30 \\div 4$ has a remainder.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'factors-factor-pairs-grade4',
    sections: [
      {
        id: 'ffp3-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Factor Pairs

**Part 3 of 5 — Listing ALL the Factors**

---

> 🔑 **Goal:** Use factor pairs to write the **complete list** of every factor of a number, in order, without missing any or repeating any.`,
      },
      {
        id: 'ffp3-from-pairs',
        type: 'text' as const,
        content: `## From Factor Pairs to a Full Factor List

Once you have the factor pairs, just **read off both numbers** in each pair to get the full list of factors.

### Example: All factors of $24$

| Factor Pair | Factors it adds |
|-------------|-----------------|
| $1 \\times 24$ | $1, 24$ |
| $2 \\times 12$ | $2, 12$ |
| $3 \\times 8$  | $3, 8$ |
| $4 \\times 6$  | $4, 6$ |

Now list them **smallest to largest**:

$$1,\\ 2,\\ 3,\\ 4,\\ 6,\\ 8,\\ 12,\\ 24$$

So $24$ has **$8$ factors**.

> 💡 **Tidy trick:** Write the small partner of each pair on the left moving right, and the big partner on the right moving left. The two lists meet in the middle and you have every factor in order:
> $$\\underbrace{1,\\ 2,\\ 3,\\ 4}_{\\text{small ends}} \\quad \\underbrace{6,\\ 8,\\ 12,\\ 24}_{\\text{big ends}}$$`,
      },
      {
        id: 'ffp3-list-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the complete list of factors of $16$?',
              options: [
                '$1, 2, 4, 8, 16$',
                '$1, 2, 4, 16$',
                '$1, 4, 16$',
                '$1, 2, 3, 4, 8, 16$',
              ],
              correctAnswer: 0,
              explanation: 'The factor pairs of $16$ are $1 \\times 16$, $2 \\times 8$, and $4 \\times 4$. Reading them off gives $1, 2, 4, 8, 16$. ($4$ appears only once because $4 \\times 4 = 16$.)',
            },
            {
              question: 'How many factors does $24$ have?',
              options: ['$8$', '$6$', '$4$', '$12$'],
              correctAnswer: 0,
              explanation: 'The factors of $24$ are $1, 2, 3, 4, 6, 8, 12, 24$ — that is $8$ factors in all.',
            },
          ],
        },
      },
      {
        id: 'ffp3-square',
        type: 'text' as const,
        content: `## Square Numbers: When a Factor Pairs With Itself

Some numbers have a factor pair where **both numbers are the same**.

### Example: Factors of $36$

| Factor Pair | Factors it adds |
|-------------|-----------------|
| $1 \\times 36$ | $1, 36$ |
| $2 \\times 18$ | $2, 18$ |
| $3 \\times 12$ | $3, 12$ |
| $4 \\times 9$  | $4, 9$ |
| $6 \\times 6$  | $6$ (just once!) |

Because $6 \\times 6 = 36$, the number $6$ appears **only once** in the list:

$$1,\\ 2,\\ 3,\\ 4,\\ 6,\\ 9,\\ 12,\\ 18,\\ 36$$

> 🔑 **Square numbers** like $4, 9, 16, 25,$ and $36$ have a factor that multiplies by **itself**. Write that "middle" factor only **once**.`,
      },
      {
        id: 'ffp3-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Factors** 🧮

Find every factor, then enter **how many factors** each number has.

**1)** Factors of $10$ → how many? *(list: $1, 2, 5, 10$)*
**2)** Factors of $9$ → how many? *(remember $3 \\times 3$)*
**3)** Factors of $15$ → how many?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '4'],
          hint1: '$10$: pairs are $1 \\times 10$ and $2 \\times 5$ → factors $1, 2, 5, 10$.',
          hint2: '$9$: pairs are $1 \\times 9$ and $3 \\times 3$ → factors $1, 3, 9$. The $3$ counts once.',
          hint3: '$15$: pairs are $1 \\times 15$ and $3 \\times 5$ → factors $1, 3, 5, 15$.',
          explanation: '1) $10$ has $4$ factors: $1, 2, 5, 10$.  2) $9$ has $3$ factors: $1, 3, 9$ (a square number, so an odd count).  3) $15$ has $4$ factors: $1, 3, 5, 15$.',
        },
      },
      {
        id: 'ffp3-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Put the Factors of 40 in Order** 🔽

The factors of $40$ are $1, 2, 4, 5, 8, 10, 20, 40$. Fill in the missing factors in order from smallest to largest.`,
        exercise: {
          dropdowns: [
            { label: '$1, 2, \\underline{\\ \\ }, 5, 8, 10, 20, 40$', options: ['$4$', '$3$', '$6$', '$7$'] },
            { label: '$1, 2, 4, 5, \\underline{\\ \\ }, 10, 20, 40$', options: ['$8$', '$6$', '$9$', '$12$'] },
            { label: '$1, 2, 4, 5, 8, 10, \\underline{\\ \\ }, 40$', options: ['$20$', '$16$', '$25$', '$30$'] },
          ],
          correctAnswers: ['$4$', '$8$', '$20$'],
          hint1: 'The factor pairs of $40$ are $1 \\times 40$, $2 \\times 20$, $4 \\times 10$, and $5 \\times 8$.',
          hint2: 'After $5$ comes $8$ (from the pair $5 \\times 8$).',
          hint3: 'After $10$ comes $20$ (from the pair $2 \\times 20$), then $40$.',
          explanation: 'Reading the pairs $1 \\times 40$, $2 \\times 20$, $4 \\times 10$, $5 \\times 8$ in order gives $1, 2, 4, 5, 8, 10, 20, 40$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'factors-factor-pairs-grade4',
    sections: [
      {
        id: 'ffp4-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Factor Pairs

**Part 4 of 5 — Prime, Composite & Real-World Factors**

---

> 🔑 **Big Idea:** The **number of factors** a number has sorts it into two important groups — **prime** and **composite** — and factor pairs help us solve real grouping problems.`,
      },
      {
        id: 'ffp4-prime-composite',
        type: 'text' as const,
        content: `## Prime and Composite Numbers

Counting the factors of a number tells you which kind it is:

| Type | How many factors? | Examples |
|------|-------------------|----------|
| **Prime** | exactly **$2$** (just $1$ and itself) | $2, 3, 5, 7, 11, 13$ |
| **Composite** | **more than $2$** | $4, 6, 8, 9, 12$ |

### Examples

- $7$ is **prime**: its only factors are $1$ and $7$.
- $12$ is **composite**: it has $1, 2, 3, 4, 6, 12$ — six factors.

> ⚠️ **Special case:** The number $1$ is **neither prime nor composite**. It has only **one** factor (itself), not two.

> 💡 **Smallest prime fact:** $2$ is the **only even prime number**. Every other even number has $2$ as a factor *plus* $1$ and itself, so it's composite.`,
      },
      {
        id: 'ffp4-prime-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is **prime**?',
              options: ['$13$', '$15$', '$21$', '$9$'],
              correctAnswer: 0,
              explanation: '$13$ has only two factors, $1$ and $13$, so it is prime. The others are composite: $15 = 3 \\times 5$, $21 = 3 \\times 7$, $9 = 3 \\times 3$.',
            },
            {
              question: 'Why is $1$ NOT a prime number?',
              options: [
                'A prime needs exactly two factors, but $1$ has only one',
                'Because $1$ is too small',
                'Because $1$ is an odd number',
                'Because $1 \\times 1 = 1$',
              ],
              correctAnswer: 0,
              explanation: 'A prime number has exactly two different factors. The number $1$ has only one factor (itself), so it is neither prime nor composite.',
            },
          ],
        },
      },
      {
        id: 'ffp4-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Prime or Composite?** 🔽

Decide whether each number is prime or composite.`,
        exercise: {
          dropdowns: [
            { label: '$17$ is', options: ['prime', 'composite'] },
            { label: '$24$ is', options: ['composite', 'prime'] },
            { label: '$11$ is', options: ['prime', 'composite'] },
            { label: '$25$ is', options: ['composite', 'prime'] },
          ],
          correctAnswers: ['prime', 'composite', 'prime', 'composite'],
          hint1: 'Prime = exactly $2$ factors ($1$ and itself). Composite = more than $2$ factors.',
          hint2: '$17$ and $11$ can only be made by $1 \\times$ themselves, so they are prime.',
          hint3: '$24 = 4 \\times 6$ (extra factors) and $25 = 5 \\times 5$ (the factor $5$ is extra), so both are composite.',
          explanation: '$17$ prime (factors $1, 17$). $24$ composite (factors $1, 2, 3, 4, 6, 8, 12, 24$). $11$ prime (factors $1, 11$). $25$ composite (factors $1, 5, 25$).',
        },
      },
      {
        id: 'ffp4-arrays',
        type: 'text' as const,
        content: `## Factors in the Real World: Arrays & Equal Groups

Factor pairs answer everyday questions about arranging things in **equal rows**.

### Example: Arranging chairs

You have $20$ chairs and want **equal rows**. Every factor pair of $20$ gives a way to do it:

| Rows | Chairs per row | Pair |
|------|----------------|------|
| $1$  | $20$ | $1 \\times 20$ |
| $2$  | $10$ | $2 \\times 10$ |
| $4$  | $5$  | $4 \\times 5$ |
| $5$  | $4$  | $5 \\times 4$ |
| $10$ | $2$  | $10 \\times 2$ |
| $20$ | $1$  | $20 \\times 1$ |

Because $3$ is **not** a factor of $20$, you **cannot** make exactly $3$ equal rows — someone's row would come up short!

> 💡 **Word-problem clue:** Whenever a problem says "**equal groups**," "**equal rows**," or "**share evenly with none left over**," it's really asking you to find **factors**.`,
      },
      {
        id: 'ffp4-array-drill',
        type: 'input-boxes' as const,
        content: `**Equal Groups Problems** 🧮

**1)** A baker puts $18$ muffins into rows with $6$ muffins in each row. How many rows? $18 \\div 6 = ?$
**2)** A teacher splits $28$ students into $4$ equal teams. How many students per team? $28 \\div 4 = ?$
**3)** Can $24$ apples be shared **evenly** among $5$ baskets? Enter the **remainder** of $24 \\div 5$. *(If it's not $0$, they cannot share evenly.)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '7', '4'],
          hint1: '$6 \\times 3 = 18$, so there are $3$ rows.',
          hint2: '$4 \\times 7 = 28$, so each team has $7$ students.',
          hint3: '$5 \\times 4 = 20$, and $24 - 20 = 4$, so $24 \\div 5$ leaves remainder $4$ — they cannot share evenly.',
          explanation: '1) $18 \\div 6 = 3$ rows ($6$ is a factor of $18$).  2) $28 \\div 4 = 7$ students ($4$ is a factor of $28$).  3) $24 \\div 5 = 4$ r$4$ — since the remainder is not $0$, $5$ is not a factor of $24$, so they cannot share evenly.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'factors-factor-pairs-grade4',
    sections: [
      {
        id: 'ffp5-intro',
        type: 'text' as const,
        content: `# 🧩 Factors and Factor Pairs

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) test whether a number is a factor, (2) find factor pairs, (3) list all factors in order, and (4) tell prime from composite. Let's put it all together.`,
      },
      {
        id: 'ffp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Is $n$ a factor? | Divide — factor if **remainder $= 0$** |
| Find a factor pair | Two numbers that **multiply** to the target |
| Find the partner | **Divide** the target by the factor you know |
| List all factors | Read off **both** numbers of every factor pair, in order |
| Prime vs. composite | **Prime** = exactly $2$ factors; **composite** = more than $2$ |

> ⚠️ **Don't forget:** $1$ and the number **itself** are always factors. And $1$ is **neither** prime nor composite.`,
      },
      {
        id: 'ffp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list shows ALL the factors of $36$?',
              options: [
                '$1, 2, 3, 4, 6, 9, 12, 18, 36$',
                '$1, 2, 3, 6, 12, 36$',
                '$1, 2, 4, 9, 36$',
                '$1, 6, 36$',
              ],
              correctAnswer: 0,
              explanation: 'The factor pairs of $36$ are $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, and $6 \\times 6$. Listed in order: $1, 2, 3, 4, 6, 9, 12, 18, 36$ — nine factors.',
            },
            {
              question: 'A factor pair of $48$ is:',
              options: ['$6 \\times 8$', '$5 \\times 9$', '$7 \\times 7$', '$4 \\times 13$'],
              correctAnswer: 0,
              explanation: '$6 \\times 8 = 48$ ✓. The others miss: $5 \\times 9 = 45$, $7 \\times 7 = 49$, $4 \\times 13 = 52$.',
            },
          ],
        },
      },
      {
        id: 'ffp5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Enter the missing partner: $7 \\times ? = 56$
**2)** How many factors does $14$ have? *(list them in your head: $1, 2, 7, 14$)*
**3)** Is $3$ a factor of $27$? Enter the remainder of $27 \\div 3$. *(remainder $0$ means yes)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '4', '0'],
          hint1: '$56 \\div 7 = 8$, so the partner is $8$.',
          hint2: 'The factor pairs of $14$ are $1 \\times 14$ and $2 \\times 7$ → factors $1, 2, 7, 14$.',
          hint3: '$3 \\times 9 = 27$, so $27 \\div 3 = 9$ with remainder $0$ — yes, $3$ is a factor.',
          explanation: '1) $56 \\div 7 = 8$.  2) $14$ has $4$ factors: $1, 2, 7, 14$.  3) $27 \\div 3 = 9$ r$0$, so $3$ IS a factor of $27$.',
        },
      },
      {
        id: 'ffp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which number is a factor of $45$?',
              options: ['$9$', '$4$', '$6$', '$8$'],
              correctAnswer: 0,
              explanation: '$45 \\div 9 = 5$ with remainder $0$, so $9$ is a factor. The others leave remainders: $45 \\div 4 = 11$ r$1$, $45 \\div 6 = 7$ r$3$, $45 \\div 8 = 5$ r$5$.',
            },
            {
              question: 'How many factors does the prime number $13$ have?',
              options: ['$2$', '$1$', '$3$', '$13$'],
              correctAnswer: 0,
              explanation: 'A prime number has exactly two factors: $1$ and itself. So $13$ has the factors $1$ and $13$ — that is $2$ factors.',
            },
            {
              question: 'Which is a complete factor pair of $32$?',
              options: ['$4 \\times 8$', '$5 \\times 6$', '$3 \\times 11$', '$2 \\times 18$'],
              correctAnswer: 0,
              explanation: '$4 \\times 8 = 32$ ✓. The others do not equal $32$: $5 \\times 6 = 30$, $3 \\times 11 = 33$, $2 \\times 18 = 36$.',
            },
          ],
        },
      },
    ],
  },
]
