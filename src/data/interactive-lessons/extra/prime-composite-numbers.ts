import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Prime and Composite Numbers (Grade 5 Math).
 * Registry key / DB slug: 'prime-composite-numbers'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'prime-composite-numbers',
    sections: [
      {
        id: 'pcn1-intro',
        type: 'text' as const,
        content: `# 🔢 Prime and Composite Numbers

**Part 1 of 5 — Factors: The Building Blocks**

---

### Topics in This Part

| Section |
|---------|
| What Is a Factor? |
| Finding All the Factors of a Number |
| Factor Pairs |

> 🔑 **Key Concept:** A **factor** is a whole number that divides another number **evenly** — with **no remainder**. Before we can sort numbers into "prime" and "composite," we first need to be experts at finding factors. That's Part 1.`,
      },
      {
        id: 'pcn1-what-factor',
        type: 'text' as const,
        content: `## What Is a Factor?

A **factor** of a number is a whole number that divides into it **evenly** — meaning the answer is a whole number and **nothing is left over**.

Think about $12$ cookies. You can share them into equal groups in several ways:

| Groups | Cookies in each group | Multiplication |
|--------|------------------------|----------------|
| $1$ group | $12$ each | $1 \\times 12 = 12$ |
| $2$ groups | $6$ each | $2 \\times 6 = 12$ |
| $3$ groups | $4$ each | $3 \\times 4 = 12$ |
| $4$ groups | $3$ each | $4 \\times 3 = 12$ |
| $6$ groups | $2$ each | $6 \\times 2 = 12$ |
| $12$ groups | $1$ each | $12 \\times 1 = 12$ |

Every number that fits **perfectly** is a factor. So the factors of $12$ are:

$$1,\\; 2,\\; 3,\\; 4,\\; 6,\\; 12$$

> 💡 **Quick test:** A number is a factor if you can divide and get **no remainder**. $12 \\div 5 = 2$ remainder $2$, so $5$ is **not** a factor of $12$.`,
      },
      {
        id: 'pcn1-factor-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which number is a factor of $20$?',
              options: ['$3$', '$5$', '$7$', '$9$'],
              correctAnswer: 1,
              explanation: '$20 \\div 5 = 4$ with no remainder, so $5$ is a factor. But $20 \\div 3$, $20 \\div 7$, and $20 \\div 9$ all leave a remainder.',
            },
            {
              question: 'Is $6$ a factor of $15$?',
              options: ['Yes, because $6 < 15$', 'Yes, because $15$ is odd', 'No, because $15 \\div 6 = 2$ remainder $3$', 'No, because $6$ is even'],
              correctAnswer: 2,
              explanation: '$15 \\div 6 = 2$ with a remainder of $3$. Because it does not divide evenly, $6$ is not a factor of $15$.',
            },
          ],
        },
      },
      {
        id: 'pcn1-find-factors',
        type: 'text' as const,
        content: `## Finding ALL the Factors

To list **every** factor of a number, work in **pairs**. Start at $1$ and climb upward, checking each number to see if it divides evenly. Each time it does, you find **two** factors at once — a **factor pair**.

### Worked Example: Factors of $18$

| Try | Divides evenly? | Factor pair |
|-----|-----------------|-------------|
| $1$ | $18 \\div 1 = 18$ ✓ | $1$ and $18$ |
| $2$ | $18 \\div 2 = 9$ ✓ | $2$ and $9$ |
| $3$ | $18 \\div 3 = 6$ ✓ | $3$ and $6$ |
| $4$ | $18 \\div 4 = 4$ r $2$ ✗ | — |
| $5$ | $18 \\div 5 = 3$ r $3$ ✗ | — |

Once the pairs start to "meet in the middle," you can stop. The factors of $18$ are:

$$1,\\; 2,\\; 3,\\; 6,\\; 9,\\; 18$$

> 💡 **Stay organized:** Listing factors smallest-to-largest means you will never miss one. Every factor pair multiplies back to the original number.`,
      },
      {
        id: 'pcn1-factor-drill',
        type: 'input-boxes' as const,
        content: `**Count the Factors** 🧮

For each number, find **how many** factors it has in total. (List them in your head smallest to largest, then count.)

**1)** How many factors does $10$ have?
**2)** How many factors does $7$ have?
**3)** How many factors does $16$ have?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '2', '5'],
          hint1: 'Factors of $10$: $1, 2, 5, 10$. Count them.',
          hint2: 'Factors of $7$: only $1$ and $7$ divide it evenly.',
          hint3: 'Factors of $16$: $1, 2, 4, 8, 16$. Notice $4 \\times 4 = 16$, so $4$ counts only once.',
          explanation: '1) $10$ has $4$ factors: $1, 2, 5, 10$.  2) $7$ has $2$ factors: $1, 7$.  3) $16$ has $5$ factors: $1, 2, 4, 8, 16$.',
        },
      },
      {
        id: 'pcn1-pairs-drill',
        type: 'input-boxes' as const,
        content: `**Complete the Factor Pair** 🧮

Each pair of factors multiplies to make the target number. Fill in the missing partner.

**1)** A factor pair of $24$ is $3$ and $?$
**2)** A factor pair of $36$ is $4$ and $?$
**3)** A factor pair of $30$ is $6$ and $?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', '5'],
          hint1: '$24 \\div 3 = 8$, so the pair is $3$ and $8$.',
          hint2: '$36 \\div 4 = 9$, so the pair is $4$ and $9$.',
          hint3: '$30 \\div 6 = 5$, so the pair is $6$ and $5$.',
          explanation: '1) $3 \\times 8 = 24$.  2) $4 \\times 9 = 36$.  3) $6 \\times 5 = 30$. The two partners always multiply to the target.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'prime-composite-numbers',
    sections: [
      {
        id: 'pcn2-intro',
        type: 'text' as const,
        content: `# 🔢 Prime and Composite Numbers

**Part 2 of 5 — Prime vs. Composite**

---

> 🔑 **The Big Idea:** Now that you can find factors, you can sort whole numbers into two families. The secret is simple: **how many factors does the number have?**`,
      },
      {
        id: 'pcn2-definitions',
        type: 'text' as const,
        content: `## The Two Families

We sort whole numbers (greater than $1$) by counting their factors:

| Type | Number of factors | Meaning |
|------|-------------------|---------|
| **Prime** | exactly $2$ | only $1$ and itself |
| **Composite** | more than $2$ | extra factors besides $1$ and itself |

### Prime Numbers

A **prime number** has **exactly two** factors: $1$ and the number itself.

- $7$ is prime → factors are just $1$ and $7$.
- $13$ is prime → factors are just $1$ and $13$.

### Composite Numbers

A **composite number** has **more than two** factors.

- $12$ is composite → factors $1, 2, 3, 4, 6, 12$ (that's $6$ factors).
- $9$ is composite → factors $1, 3, 9$ (that's $3$ factors).

> 🔑 **The rule in one line:** Count the factors. **Exactly two** means prime. **Three or more** means composite.`,
      },
      {
        id: 'pcn2-sort-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is $11$ a prime number?',
              options: ['It is odd', 'Its only factors are $1$ and $11$', 'It is smaller than $12$', 'It ends in $1$'],
              correctAnswer: 1,
              explanation: 'A prime has exactly two factors. The only numbers that divide $11$ evenly are $1$ and $11$, so $11$ is prime. (Being odd is not enough — $9$ is odd but composite.)',
            },
            {
              question: 'Why is $15$ a composite number?',
              options: ['It is odd', 'It is bigger than $10$', 'It has more than two factors: $1, 3, 5, 15$', 'It ends in $5$'],
              correctAnswer: 2,
              explanation: '$15$ has four factors: $1, 3, 5, 15$. Because it has more than two factors, it is composite.',
            },
          ],
        },
      },
      {
        id: 'pcn2-special-one',
        type: 'text' as const,
        content: `## The Two Tricky Numbers: $1$ and $2$

These two numbers confuse a lot of students. Learn them now.

### The Number $1$ — Neither Prime nor Composite

The number $1$ has **only one** factor — just itself, $1$.

- It does **not** have exactly two factors, so it is **not prime**.
- It does **not** have more than two factors, so it is **not composite**.

$$\\boxed{1 \\text{ is neither prime nor composite.}}$$

### The Number $2$ — The Only Even Prime

The number $2$ has exactly two factors: $1$ and $2$. That makes it **prime**.

It is the **only even prime number**. Every other even number (like $4, 6, 8, \\dots$) can be divided by $2$, giving it an extra factor — so all other even numbers are composite.

> ⚠️ **Remember these two facts:** $1$ is **neither** prime nor composite, and $2$ is the **only** even prime.`,
      },
      {
        id: 'pcn2-tricky-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sort Each Number** 🔽

Decide whether each number is prime, composite, or neither.`,
        exercise: {
          dropdowns: [
            { label: 'The number $1$ is:', options: ['Prime', 'Composite', 'Neither prime nor composite'] },
            { label: 'The number $2$ is:', options: ['Prime', 'Composite', 'Neither prime nor composite'] },
            { label: 'The number $9$ is:', options: ['Prime', 'Composite', 'Neither prime nor composite'] },
            { label: 'The number $17$ is:', options: ['Prime', 'Composite', 'Neither prime nor composite'] },
          ],
          correctAnswers: ['Neither prime nor composite', 'Prime', 'Composite', 'Prime'],
          hint1: '$1$ has only one factor (itself), so it is the special "neither" case.',
          hint2: '$2$ has exactly two factors, $1$ and $2$ — it is prime (the only even one).',
          hint3: '$9 = 3 \\times 3$ has factors $1, 3, 9$ (composite). $17$ has only $1$ and $17$ (prime).',
          explanation: '$1$ is neither (one factor). $2$ is prime (exactly two factors). $9$ is composite (three factors). $17$ is prime (exactly two factors).',
        },
      },
      {
        id: 'pcn2-mc-sort',
        type: 'multiple-choice' as const,
        content: `**Spot the Prime** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these numbers is PRIME?',
              options: ['$21$', '$23$', '$25$', '$27$'],
              correctAnswer: 1,
              explanation: '$23$ has only the factors $1$ and $23$. The others are composite: $21 = 3 \\times 7$, $25 = 5 \\times 5$, $27 = 3 \\times 9$.',
            },
            {
              question: 'Which of these numbers is COMPOSITE?',
              options: ['$2$', '$3$', '$5$', '$33$'],
              correctAnswer: 3,
              explanation: '$33 = 3 \\times 11$, so it has factors $1, 3, 11, 33$ — composite. The numbers $2, 3, 5$ are all prime.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'prime-composite-numbers',
    sections: [
      {
        id: 'pcn3-intro',
        type: 'text' as const,
        content: `# 🔢 Prime and Composite Numbers

**Part 3 of 5 — Divisibility Rules: Fast Tests**

---

> 🔑 **Why this helps:** Instead of slowly dividing, **divisibility rules** let you tell at a glance whether a number has a small factor. If it has any factor besides $1$ and itself, it must be **composite**.`,
      },
      {
        id: 'pcn3-rules',
        type: 'text' as const,
        content: `## The Divisibility Rules

These quick tests tell you whether a number divides evenly by $2$, $3$, $5$, or $10$ — without doing the division.

| Divisible by | Test | Example |
|--------------|------|---------|
| $2$ | The number is **even** (ends in $0, 2, 4, 6, 8$) | $48$ ends in $8$ → yes |
| $3$ | The **digits add up** to a multiple of $3$ | $51 \\to 5+1=6$ → yes |
| $5$ | The number **ends in $0$ or $5$** | $85$ ends in $5$ → yes |
| $10$ | The number **ends in $0$** | $90$ ends in $0$ → yes |

### Worked Example: Is $72$ composite?

- Ends in $2$, so it's divisible by $2$. ✓

Since $2$ is a factor (besides $1$ and $72$), the number $72$ has **more than two factors** — it is **composite**.

> 💡 **The key link:** If **any** small number divides evenly, you've found an extra factor — and that instantly makes the number **composite**.`,
      },
      {
        id: 'pcn3-rules-dropdown',
        type: 'dropdown-select' as const,
        content: `**Apply the Rules** 🔽

Use the divisibility rules to answer each one.`,
        exercise: {
          dropdowns: [
            { label: 'Is $54$ divisible by $3$? ($5+4=9$)', options: ['Yes', 'No'] },
            { label: 'Is $70$ divisible by $5$?', options: ['Yes', 'No'] },
            { label: 'Is $36$ divisible by $2$?', options: ['Yes', 'No'] },
            { label: 'Is $43$ divisible by $10$?', options: ['Yes', 'No'] },
          ],
          correctAnswers: ['Yes', 'Yes', 'Yes', 'No'],
          hint1: 'For $3$: add the digits. $5+4 = 9$, and $9$ is a multiple of $3$.',
          hint2: 'For $5$: the number must end in $0$ or $5$. $70$ ends in $0$.',
          hint3: 'For $2$: the number must be even. For $10$: it must end in $0$ — but $43$ ends in $3$.',
          explanation: '$54$: digits $5+4=9$ → divisible by $3$. $70$ ends in $0$ → divisible by $5$. $36$ is even → divisible by $2$. $43$ ends in $3$, not $0$ → not divisible by $10$.',
        },
      },
      {
        id: 'pcn3-testing',
        type: 'text' as const,
        content: `## How to Test if a Number Is Prime

To check whether a number is prime, try to divide it by the small primes in order: $2, 3, 5, 7, \\dots$ If **none** of them divide evenly, the number is **prime**.

### Worked Example: Is $29$ prime?

- Divisible by $2$? No — $29$ is odd.
- Divisible by $3$? No — $2+9 = 11$, not a multiple of $3$.
- Divisible by $5$? No — doesn't end in $0$ or $5$.

No small number divides it, so $\\boxed{29 \\text{ is prime.}}$

### Worked Example: Is $51$ prime?

- Divisible by $3$? $5 + 1 = 6$, which **is** a multiple of $3$. ✓

So $51 = 3 \\times 17$. It has an extra factor, which means $\\boxed{51 \\text{ is composite.}}$

> ⚠️ **Watch out for "fake primes."** Numbers like $51$, $57$, $91$, and $87$ *look* prime but secretly have a factor of $3$ or $7$. Always run the divisibility tests!`,
      },
      {
        id: 'pcn3-fake-prime',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A number is divisible by $2$, by $3$, and by $5$. What must it be?',
              options: ['Prime', 'Composite', 'Neither', 'Equal to $1$'],
              correctAnswer: 1,
              explanation: 'If $2$, $3$, and $5$ all divide it evenly, the number has many factors besides $1$ and itself. Having extra factors makes it composite.',
            },
            {
              question: 'Which number only LOOKS prime but is actually composite?',
              options: ['$31$', '$37$', '$57$', '$41$'],
              correctAnswer: 2,
              explanation: '$57 \\to 5+7 = 12$, a multiple of $3$, so $57 = 3 \\times 19$ — composite. The numbers $31$, $37$, and $41$ are all truly prime.',
            },
          ],
        },
      },
      {
        id: 'pcn3-prime-drill',
        type: 'input-boxes' as const,
        content: `**Prime or Composite?** 🧮

For each number, type **P** if it is prime or **C** if it is composite.

**1)** $19$
**2)** $39$
**3)** $2$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['P', 'C', 'P'],
          hint1: '$19$: not even, digits $1+9=10$ (not a multiple of $3$), and it does not end in $0$ or $5$ → prime (P).',
          hint2: '$39$: digits $3+9 = 12$, a multiple of $3$, so $39 = 3 \\times 13$ → composite (C).',
          hint3: '$2$ has exactly two factors, $1$ and $2$ → prime (P). It is the only even prime.',
          explanation: '1) $19$ is prime (P).  2) $39 = 3 \\times 13$ is composite (C).  3) $2$ is prime (P).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'prime-composite-numbers',
    sections: [
      {
        id: 'pcn4-intro',
        type: 'text' as const,
        content: `# 🔢 Prime and Composite Numbers

**Part 4 of 5 — Prime Factorization & Factor Trees**

---

> 🔑 **Big Payoff:** Every composite number can be broken down into a unique set of **prime building blocks**. Writing a number as a product of primes is called its **prime factorization**.`,
      },
      {
        id: 'pcn4-tree',
        type: 'text' as const,
        content: `## Building a Factor Tree

A **factor tree** breaks a number down step by step until only **primes** are left.

### Worked Example: Prime factorization of $36$

Split $36$ into any factor pair, then keep splitting until every "leaf" is prime:

$$36 = 4 \\times 9$$
$$4 = 2 \\times 2 \\qquad 9 = 3 \\times 3$$

The leaves at the bottom are $2, 2, 3, 3$ — all primes. So:

$$36 = 2 \\times 2 \\times 3 \\times 3$$

Using exponents, we write this neatly as:

$$36 = 2^2 \\times 3^2$$

> 💡 **Same answer every time:** It doesn't matter which factor pair you start with. Starting $36 = 6 \\times 6$ gives the exact same primes: $2 \\times 2 \\times 3 \\times 3$. This is called *unique* prime factorization.`,
      },
      {
        id: 'pcn4-tree2',
        type: 'text' as const,
        content: `### Worked Example: Prime factorization of $60$

$$60 = 6 \\times 10$$
$$6 = 2 \\times 3 \\qquad 10 = 2 \\times 5$$

The prime leaves are $2, 3, 2, 5$. Writing them smallest to largest:

$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$

> ✅ **Check:** $2 \\times 2 \\times 3 \\times 5 = 4 \\times 15 = 60$ ✓

> 🔑 **Tip:** A factor tree is **finished** only when **every** number at the bottom is prime. If you can still split a number, keep going!`,
      },
      {
        id: 'pcn4-tree-dropdown',
        type: 'dropdown-select' as const,
        content: `**Finish the Factor Tree** 🔽

You are finding the prime factorization of $24$. Choose what happens at each step.`,
        exercise: {
          dropdowns: [
            { label: 'Start by splitting $24$ into:', options: ['$4 \\times 6$', '$1 \\times 24$', '$24 \\times 1$', '$5 \\times 5$'] },
            { label: 'Split the $4$ into primes:', options: ['$2 \\times 2$', '$1 \\times 4$', '$4 \\times 1$', '$2 \\times 3$'] },
            { label: 'Split the $6$ into primes:', options: ['$2 \\times 3$', '$1 \\times 6$', '$3 \\times 3$', '$2 \\times 4$'] },
            { label: 'The prime factorization of $24$ is:', options: ['$2^3 \\times 3$', '$2 \\times 3$', '$4 \\times 6$', '$2^2 \\times 3^2$'] },
          ],
          correctAnswers: ['$4 \\times 6$', '$2 \\times 2$', '$2 \\times 3$', '$2^3 \\times 3$'],
          hint1: 'Pick any real factor pair that is not $1 \\times 24$ — for example $4 \\times 6$.',
          hint2: '$4 = 2 \\times 2$ and $6 = 2 \\times 3$. Keep splitting until everything is prime.',
          hint3: 'The leaves are $2, 2, 2, 3$. Three $2$s and one $3$ give $2^3 \\times 3$.',
          explanation: '$24 = 4 \\times 6 = (2 \\times 2) \\times (2 \\times 3) = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$. Check: $8 \\times 3 = 24$ ✓.',
        },
      },
      {
        id: 'pcn4-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Prime Factors** 🧮

Build a factor tree, then count how many prime numbers are at the bottom (count repeats).

**1)** In $2^2 \\times 3^2$ (which is $36$), how many prime factors are there in total?
**2)** The prime factorization of $8$ is $2 \\times 2 \\times 2$. How many prime factors?
**3)** The prime factorization of $30$ is $2 \\times 3 \\times 5$. How many prime factors?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '3'],
          hint1: '$2^2 \\times 3^2 = 2 \\times 2 \\times 3 \\times 3$. Count each one: that is $4$.',
          hint2: '$8 = 2 \\times 2 \\times 2$ — three $2$s.',
          hint3: '$30 = 2 \\times 3 \\times 5$ — three different primes.',
          explanation: '1) $2 \\times 2 \\times 3 \\times 3$ has $4$ prime factors.  2) $2 \\times 2 \\times 2$ has $3$.  3) $2 \\times 3 \\times 5$ has $3$.',
        },
      },
      {
        id: 'pcn4-factorize-drill',
        type: 'input-boxes' as const,
        content: `**Fill In the Factorization** 🧮

Each number's prime factorization is started for you. Find the missing prime.

**1)** $18 = 2 \\times 3 \\times ?$
**2)** $20 = 2 \\times 2 \\times ?$
**3)** $42 = 2 \\times 3 \\times ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '7'],
          hint1: '$2 \\times 3 = 6$, and $18 \\div 6 = 3$, so the missing prime is $3$.',
          hint2: '$2 \\times 2 = 4$, and $20 \\div 4 = 5$, so the missing prime is $5$.',
          hint3: '$2 \\times 3 = 6$, and $42 \\div 6 = 7$, so the missing prime is $7$.',
          explanation: '1) $18 = 2 \\times 3 \\times 3$.  2) $20 = 2 \\times 2 \\times 5$.  3) $42 = 2 \\times 3 \\times 7$. Each set of primes multiplies back to the number.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'prime-composite-numbers',
    sections: [
      {
        id: 'pcn5-intro',
        type: 'text' as const,
        content: `# 🔢 Prime and Composite Numbers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) find all the factors of a number, (2) sort numbers into prime and composite, (3) use divisibility rules to test for primes, and (4) build a prime factorization. Let's put it all together.`,
      },
      {
        id: 'pcn5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | What to remember |
|------|------------------|
| **Factor** | divides evenly, no remainder |
| **Prime** | exactly $2$ factors ($1$ and itself) |
| **Composite** | more than $2$ factors |
| **The number $1$** | **neither** prime nor composite |
| **The number $2$** | the **only even prime** |
| **Prime factorization** | a number written as a product of primes |

**Primes to know by heart (under $50$):**

$$2,\\; 3,\\; 5,\\; 7,\\; 11,\\; 13,\\; 17,\\; 19,\\; 23,\\; 29,\\; 31,\\; 37,\\; 41,\\; 43,\\; 47$$

> ⚠️ **Don't forget:** Being odd does **not** make a number prime ($9$, $15$, $21$, $25$ are all odd *and* composite), and the digit-sum test for $3$ catches sneaky composites like $51$ and $57$.`,
      },
      {
        id: 'pcn5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many factors does a prime number have?',
              options: ['Exactly $1$', 'Exactly $2$', 'Exactly $3$', 'More than $3$'],
              correctAnswer: 1,
              explanation: 'A prime number has exactly two factors: $1$ and the number itself. That is the definition of prime.',
            },
            {
              question: 'Which list shows the correct prime factorization of $48$?',
              options: ['$2^4 \\times 3$', '$2^3 \\times 3$', '$2^2 \\times 3^2$', '$6 \\times 8$'],
              correctAnswer: 0,
              explanation: '$48 = 16 \\times 3 = (2 \\times 2 \\times 2 \\times 2) \\times 3 = 2^4 \\times 3$. Check: $16 \\times 3 = 48$ ✓. ($6 \\times 8$ is a factor pair, not a prime factorization.)',
            },
          ],
        },
      },
      {
        id: 'pcn5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** How many factors does the prime number $13$ have?
**2)** The prime factorization of $100$ is $2 \\times 2 \\times 5 \\times 5$. Written with exponents it is $2^2 \\times 5^?$ — what exponent goes on the $5$?
**3)** What is the only even prime number?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '2', '2'],
          hint1: 'Every prime number has exactly $2$ factors: $1$ and itself.',
          hint2: 'There are two $5$s in $2 \\times 2 \\times 5 \\times 5$, so the exponent on $5$ is $2$.',
          hint3: 'The only even number with exactly two factors is $2$ itself.',
          explanation: '1) $13$ is prime, so it has $2$ factors.  2) $100 = 2^2 \\times 5^2$, so the exponent is $2$.  3) $2$ is the only even prime.',
        },
      },
      {
        id: 'pcn5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement about the number $1$ is TRUE?',
              options: ['$1$ is prime', '$1$ is composite', '$1$ is neither prime nor composite', '$1$ is the smallest prime'],
              correctAnswer: 2,
              explanation: 'The number $1$ has only one factor (itself), so it is neither prime nor composite. The smallest prime is $2$.',
            },
            {
              question: 'Which of these numbers is COMPOSITE?',
              options: ['$2$', '$13$', '$29$', '$49$'],
              correctAnswer: 3,
              explanation: '$49 = 7 \\times 7$, so it has factors $1, 7, 49$ — composite. The numbers $2$, $13$, and $29$ are all prime.',
            },
            {
              question: 'What is the prime factorization of $20$?',
              options: ['$2^2 \\times 5$', '$2 \\times 10$', '$4 \\times 5$', '$2 \\times 5^2$'],
              correctAnswer: 0,
              explanation: '$20 = 4 \\times 5 = (2 \\times 2) \\times 5 = 2^2 \\times 5$. Check: $4 \\times 5 = 20$ ✓. The other options either are not all primes or do not multiply to $20$.',
            },
          ],
        },
      },
    ],
  },
]
