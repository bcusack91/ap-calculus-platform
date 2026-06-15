import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Series and Probability (Algebra 2).
 * Registry key: 'series-probability-alg2' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'series-probability-alg2',
    sections: [
      {
        id: 'sp1-intro',
        type: 'text' as const,
        content: `# 🎲 Series and Probability

**Part 1 of 5 — Series & Sigma Notation**

---

### Topics in This Part

| Section |
|---------|
| Sequence vs. Series |
| Reading Summation (Sigma) Notation |
| Expanding & Writing a Series |

> 🔑 **Key Concept:** A **sequence** is a list of numbers; a **series** is what you get when you *add* the terms of a sequence. This lesson has two big ideas — **series** (Parts 1–2) and **probability** (Parts 3–5) — and they meet in the world of counting and patterns.`,
      },
      {
        id: 'sp1-seq-vs-series',
        type: 'text' as const,
        content: `## Sequence vs. Series

A **sequence** is an ordered list of terms:

$$3,\\; 7,\\; 11,\\; 15,\\; 19$$

A **series** is the *sum* of those terms:

$$3 + 7 + 11 + 15 + 19 = 55$$

We label terms with subscripts: $a_1$ is the first term, $a_2$ the second, and $a_n$ the **general (nth) term**.

| Notation | Means |
|----------|-------|
| $a_1$ | first term |
| $a_n$ | the $n$th term (general term) |
| $S_n$ | the sum of the first $n$ terms |

> 💡 Think of it this way: a sequence is the *ingredients*, a series is the *total on the receipt*.`,
      },
      {
        id: 'sp1-seq-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a **series**?',
              options: ['$2,\\; 4,\\; 6,\\; 8$', '$2 + 4 + 6 + 8$', 'the number $4$', 'a list of even numbers'],
              correctAnswer: 1,
              explanation: 'A series uses addition to combine terms into a sum. $2+4+6+8$ is a series; $2,4,6,8$ is just a sequence (a list).',
            },
            {
              question: 'In the sequence $5,\\; 9,\\; 13,\\; 17$, what is $a_3$?',
              options: ['$5$', '$9$', '$13$', '$17$'],
              correctAnswer: 2,
              explanation: '$a_3$ is the **third** term. Counting $a_1=5,\\,a_2=9,\\,a_3=13$.',
            },
          ],
        },
      },
      {
        id: 'sp1-sigma',
        type: 'text' as const,
        content: `## Summation (Sigma) Notation

Writing long sums gets tedious, so we use the Greek capital letter sigma, $\\Sigma$, to mean "add up":

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$

The pieces:
- **$k$** is the *index* — a counter.
- **$k=1$** (bottom) is where the counter **starts**.
- **$n$** (top) is where the counter **ends**.
- **$a_k$** is the *rule* — plug each value of $k$ into it.

### Worked Example

$$\\sum_{k=1}^{4} (2k+1) = (2\\cdot 1+1) + (2\\cdot 2+1) + (2\\cdot 3+1) + (2\\cdot 4+1)$$

$$= 3 + 5 + 7 + 9 = 24$$

> 🔑 **To expand a sigma:** substitute each integer from the bottom number up to the top number, then add the results.`,
      },
      {
        id: 'sp1-sigma-drill',
        type: 'input-boxes' as const,
        content: `**Expand & Evaluate** 🧮

Find each sum.

**1)** $\\displaystyle\\sum_{k=1}^{3} 4k$
**2)** $\\displaystyle\\sum_{k=1}^{4} (k^2)$
**3)** $\\displaystyle\\sum_{k=1}^{5} (3k-2)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['24', '30', '35'],
          hint1: '$\\sum_{k=1}^{3}4k = 4+8+12 = 24$.',
          hint2: '$\\sum_{k=1}^{4}k^2 = 1+4+9+16 = 30$.',
          hint3: '$\\sum_{k=1}^{5}(3k-2) = 1+4+7+10+13 = 35$.',
          explanation: '1) $4+8+12 = 24$.  2) $1+4+9+16 = 30$.  3) $1+4+7+10+13 = 35$. Substitute each $k$, then add.',
        },
      },
      {
        id: 'sp1-write-sigma',
        type: 'dropdown-select' as const,
        content: `**Read the Sigma** 🔽

Match each part of $\\displaystyle\\sum_{k=1}^{6}(3k-2)$ to its meaning.`,
        exercise: {
          dropdowns: [
            { label: 'The starting value of the index:', options: ['$k=1$', '$k=6$', '$k=3$', '$k=-2$'] },
            { label: 'The last value of the index:', options: ['$6$', '$1$', '$3$', '$18$'] },
            { label: 'The first term ($k=1$):', options: ['$1$', '$3$', '$-2$', '$0$'] },
            { label: 'The total of all six terms:', options: ['$51$', '$36$', '$48$', '$60$'] },
          ],
          correctAnswers: ['$k=1$', '$6$', '$1$', '$51$'],
          hint1: 'The bottom of the sigma shows where the index starts; the top shows where it ends.',
          hint2: 'First term: $3(1)-2 = 1$.',
          hint3: 'Terms are $1,4,7,10,13,16$, which sum to $51$.',
          explanation: 'Start $k=1$, end $k=6$. Terms: $1,4,7,10,13,16$, total $51$.',
        },
      },
      {
        id: 'sp1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You can now tell a sequence from a series and **read, expand, and evaluate** sigma notation.

| Skill | Quick reminder |
|-------|----------------|
| Sequence | a list of terms |
| Series | the **sum** of the terms |
| $\\sum_{k=1}^{n} a_k$ | substitute $k=1$ up to $k=n$, then add |

Right now we are adding terms **one by one**. In Part 2 you'll learn formulas that add hundreds of terms in a single step.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'series-probability-alg2',
    sections: [
      {
        id: 'sp2-intro',
        type: 'text' as const,
        content: `# 🎲 Series and Probability

**Part 2 of 5 — Arithmetic & Geometric Series**

---

> 🔑 **The Idea:** Two of the most important series follow simple patterns. **Arithmetic** series add a constant each step; **geometric** series multiply by a constant. Each has a sum formula that beats adding by hand.`,
      },
      {
        id: 'sp2-arithmetic',
        type: 'text' as const,
        content: `## Arithmetic Series

An **arithmetic** sequence adds a fixed amount — the **common difference** $d$ — each step. Its series sum is:

$$S_n = \\frac{n}{2}\\,(a_1 + a_n)$$

In words: the number of terms, times the **average** of the first and last term.

### Worked Example: $3 + 7 + 11 + \\cdots$ (first 10 terms)

Here $a_1 = 3$ and $d = 4$. First find the 10th term with $a_n = a_1 + (n-1)d$:

$$a_{10} = 3 + (10-1)(4) = 3 + 36 = 39$$

Now apply the sum formula:

$$S_{10} = \\frac{10}{2}\\,(3 + 39) = 5 \\cdot 42 = 210$$

> 💡 The famous trick: to add $1+2+3+\\cdots+100$, pair the ends — $1+100=101$, and there are $50$ pairs, so $S = 50 \\cdot 101 = 5050$.`,
      },
      {
        id: 'sp2-arith-drill',
        type: 'input-boxes' as const,
        content: `**Arithmetic Sums** 🧮

Use $S_n = \\dfrac{n}{2}(a_1 + a_n)$ (find $a_n$ first if needed).

**1)** Sum of the first $20$ terms of $5, 8, 11, \\ldots$ ($a_1=5,\\,d=3$)
**2)** Sum of the first $50$ positive even numbers: $2 + 4 + \\cdots + 100$
**3)** Sum: $1 + 2 + 3 + \\cdots + 100$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['670', '2550', '5050'],
          hint1: '$a_{20} = 5 + 19(3) = 62$, so $S_{20} = \\frac{20}{2}(5+62) = 10 \\cdot 67$.',
          hint2: 'There are $50$ terms, $a_1=2$, $a_{50}=100$: $S = \\frac{50}{2}(2+100) = 25 \\cdot 102$.',
          hint3: '$S = \\frac{100}{2}(1+100) = 50 \\cdot 101$.',
          explanation: '1) $10\\cdot 67 = 670$.  2) $25 \\cdot 102 = 2550$.  3) $50 \\cdot 101 = 5050$.',
        },
      },
      {
        id: 'sp2-geometric',
        type: 'text' as const,
        content: `## Geometric Series

A **geometric** sequence multiplies by a fixed **common ratio** $r$ each step. The sum of the first $n$ terms is:

$$S_n = a_1\\,\\frac{1 - r^{\\,n}}{1 - r}, \\qquad r \\ne 1$$

### Worked Example: $2 + 6 + 18 + 54 + 162$ (first 5 terms)

Here $a_1 = 2$ and $r = 3$ (each term is $3\\times$ the one before):

$$S_5 = 2 \\cdot \\frac{1 - 3^5}{1 - 3} = 2 \\cdot \\frac{1 - 243}{-2} = 2 \\cdot \\frac{-242}{-2} = 2 \\cdot 121 = 242$$

> ✅ **Check:** $2+6+18+54+162 = 242$ ✓`,
      },
      {
        id: 'sp2-geo-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the geometric sequence $4, 12, 36, 108, \\ldots$, the common ratio $r$ is:',
              options: ['$3$', '$8$', '$4$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Divide a term by the one before it: $12 \\div 4 = 3$ (and $36 \\div 12 = 3$). So $r = 3$.',
            },
            {
              question: 'Which formula gives the sum of the **first $n$ terms** of a *geometric* series?',
              options: ['$\\frac{n}{2}(a_1 + a_n)$', '$a_1\\frac{1-r^n}{1-r}$', '$a_1 + (n-1)d$', '$\\frac{a_1}{1-r}$'],
              correctAnswer: 1,
              explanation: '$a_1\\frac{1-r^n}{1-r}$ is the finite geometric sum. $\\frac{n}{2}(a_1+a_n)$ is *arithmetic*; $\\frac{a_1}{1-r}$ is an *infinite* geometric sum.',
            },
          ],
        },
      },
      {
        id: 'sp2-infinite',
        type: 'text' as const,
        content: `## Infinite Geometric Series

If $|r| < 1$, the terms shrink toward $0$ and the **infinite** sum converges to a finite number:

$$S = \\frac{a_1}{1 - r}, \\qquad |r| < 1$$

### Worked Example: $8 + 4 + 2 + 1 + \\cdots$

Here $a_1 = 8$ and $r = \\frac{1}{2}$:

$$S = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$$

### Repeating Decimals

A repeating decimal *is* an infinite geometric series. $0.7777\\ldots = \\frac{7}{10} + \\frac{7}{100} + \\cdots$ with $a_1 = \\frac{7}{10}$, $r = \\frac{1}{10}$:

$$S = \\frac{7/10}{1 - 1/10} = \\frac{7/10}{9/10} = \\frac{7}{9}$$

> ⚠️ The infinite formula **only** works when $|r| < 1$. If $|r| \\ge 1$ the terms don't shrink, so the sum grows without bound.`,
      },
      {
        id: 'sp2-inf-drill',
        type: 'input-boxes' as const,
        content: `**Infinite Geometric Sums** 🧮

Use $S = \\dfrac{a_1}{1 - r}$. Enter a whole number, decimal, or fraction.

**1)** $27 + 9 + 3 + 1 + \\cdots$ ($a_1 = 27,\\, r = \\frac{1}{3}$)
**2)** $4 + 2 + 1 + \\frac{1}{2} + \\cdots$
**3)** The repeating decimal $0.3333\\ldots$ as a fraction *(form like 1/3)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40.5', '8', '1/3'],
          hint1: '$S = \\frac{27}{1 - 1/3} = \\frac{27}{2/3} = 27 \\cdot \\frac{3}{2}$.',
          hint2: '$a_1=4,\\,r=\\frac{1}{2}$: $S = \\frac{4}{1-1/2} = \\frac{4}{1/2}$.',
          hint3: '$a_1=\\frac{3}{10},\\,r=\\frac{1}{10}$: $S = \\frac{3/10}{9/10} = \\frac{3}{9} = \\frac{1}{3}$.',
          explanation: '1) $27 \\cdot \\frac{3}{2} = 40.5$.  2) $\\frac{4}{1/2} = 8$.  3) $\\frac{3/10}{9/10} = \\frac{1}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'series-probability-alg2',
    sections: [
      {
        id: 'sp3-intro',
        type: 'text' as const,
        content: `# 🎲 Series and Probability

**Part 3 of 5 — Counting Principles**

---

> 🔑 **Why counting first?** Probability is just *favorable outcomes ÷ total outcomes*. To find those numbers you must be able to **count** outcomes fast. The counting tools here power every probability question in Parts 4 and 5.`,
      },
      {
        id: 'sp3-fcp',
        type: 'text' as const,
        content: `## The Fundamental Counting Principle

If one choice can be made $m$ ways and a second **independent** choice $n$ ways, then together there are:

$$m \\times n \\text{ ways}$$

This extends to any number of stages — just multiply.

### Worked Example: Building an Outfit

You have $3$ shirts, $4$ pairs of pants, and $2$ pairs of shoes. The number of outfits is:

$$3 \\times 4 \\times 2 = 24$$

### Worked Example: Lining Up

How many ways can $5$ people stand in a line? The first spot has $5$ choices, the next $4$, then $3$, $2$, $1$:

$$5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$$

> 💡 The product $5 \\times 4 \\times 3 \\times 2 \\times 1$ is written $5!$ ("five factorial"). By definition $0! = 1$.`,
      },
      {
        id: 'sp3-fcp-drill',
        type: 'input-boxes' as const,
        content: `**Count the Ways** 🧮

**1)** A menu has $4$ appetizers, $6$ entrées, and $3$ desserts. How many 3-course meals?
**2)** Evaluate $6!$ ($= 6\\cdot 5\\cdot 4\\cdot 3\\cdot 2\\cdot 1$).
**3)** A 4-digit PIN uses digits $0$–$9$ and digits **may repeat**. How many PINs? *(enter the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['72', '720', '10000'],
          hint1: '$4 \\times 6 \\times 3$.',
          hint2: '$6! = 6\\cdot5\\cdot4\\cdot3\\cdot2\\cdot1$.',
          hint3: 'Each of the $4$ positions has $10$ choices: $10 \\times 10 \\times 10 \\times 10 = 10^4$.',
          explanation: '1) $4\\cdot6\\cdot3 = 72$.  2) $6! = 720$.  3) $10^4 = 10000$.',
        },
      },
      {
        id: 'sp3-perm-comb',
        type: 'text' as const,
        content: `## Permutations vs. Combinations

The big question: **does order matter?**

| | Order matters? | Formula |
|--|----------------|---------|
| **Permutation** $P(n,k)$ | **Yes** (arrangements) | $\\dfrac{n!}{(n-k)!}$ |
| **Combination** $C(n,k)$ | **No** (groups) | $\\dfrac{n!}{k!\\,(n-k)!}$ |

- **Permutation** — 1st/2nd/3rd place in a race, a seating order, a password. *Rearranging counts as different.*
- **Combination** — a committee, a hand of cards, a pizza's toppings. *Rearranging is the same group.*

### Worked Example: Race Medals (order matters → permutation)

From $5$ runners, how many ways to award gold, silver, bronze?

$$P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60$$

### Worked Example: Committee (order doesn't matter → combination)

From $5$ people, how many $3$-person committees?

$$C(5,3) = \\frac{5!}{3!\\,2!} = \\frac{120}{6 \\cdot 2} = 10$$

> 🔑 **Sanity check:** there are always **fewer** combinations than permutations of the same $n$ and $k$, because a combination doesn't count the different orderings separately.`,
      },
      {
        id: 'sp3-pc-check',
        type: 'multiple-choice' as const,
        content: `**Permutation or Combination?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Choosing $4$ students from a class of $20$ to form a study group. Which applies?',
              options: ['Permutation — order matters', 'Combination — order does not matter', 'Fundamental Counting Principle only', 'Arithmetic series'],
              correctAnswer: 1,
              explanation: 'A study group is an unordered set — swapping who was "picked first" gives the same group. Order does not matter, so use a **combination**.',
            },
            {
              question: 'Arranging $3$ books on a shelf in a specific left-to-right order is a:',
              options: ['Combination', 'Permutation', 'Geometric series', 'Complement'],
              correctAnswer: 1,
              explanation: 'A specific left-to-right order means rearranging gives a different arrangement — order matters, so it is a **permutation**.',
            },
            {
              question: 'Which is true for the same $n$ and $k$ (with $1 < k < n$)?',
              options: ['$C(n,k) = P(n,k)$', '$C(n,k) > P(n,k)$', '$C(n,k) < P(n,k)$', 'They are unrelated'],
              correctAnswer: 2,
              explanation: 'A combination ignores order, so it groups the $k!$ different orderings into one. Thus $C(n,k) = \\frac{P(n,k)}{k!}$, and since $k! > 1$ when $k > 1$, the combination is **smaller**.',
            },
          ],
        },
      },
      {
        id: 'sp3-pc-drill',
        type: 'input-boxes' as const,
        content: `**Compute Them** 🧮

**1)** $P(6,2) = \\dfrac{6!}{4!}$
**2)** $C(10,3) = \\dfrac{10!}{3!\\,7!}$
**3)** A pizza shop has $5$ toppings; choose **any 2**. How many topping pairs? *(order doesn't matter)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '120', '10'],
          hint1: '$P(6,2) = 6 \\times 5 = 30$.',
          hint2: '$C(10,3) = \\frac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = \\frac{720}{6}$.',
          hint3: 'Toppings are an unordered group: $C(5,2) = \\frac{5\\cdot4}{2} = 10$.',
          explanation: '1) $P(6,2)=30$.  2) $C(10,3)=120$.  3) $C(5,2)=10$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'series-probability-alg2',
    sections: [
      {
        id: 'sp4-intro',
        type: 'text' as const,
        content: `# 🎲 Series and Probability

**Part 4 of 5 — Probability Basics**

---

> 🔑 **The Big Formula:** For equally likely outcomes,
> $$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}.$$
> Every probability is between $0$ (impossible) and $1$ (certain).`,
      },
      {
        id: 'sp4-basic',
        type: 'text' as const,
        content: `## Theoretical Probability

Count the favorable outcomes, divide by the total. The counting tools from Part 3 do the heavy lifting.

### Worked Example: One Die

Roll a fair $6$-sided die. $P(\\text{rolling an even number})$? The evens are $2,4,6$ — three favorable out of six total:

$$P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$$

### Worked Example: One Card

Draw from a standard $52$-card deck. There are $13$ hearts:

$$P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$$

| Probability | Meaning |
|-------------|---------|
| $0$ | impossible |
| $\\frac{1}{2}$ | as likely as not |
| $1$ | certain |

> 💡 A probability can be written as a fraction, a decimal, or a percent: $\\frac{1}{4} = 0.25 = 25\\%$.`,
      },
      {
        id: 'sp4-basic-drill',
        type: 'input-boxes' as const,
        content: `**Find the Probability** 🧮

Give each answer as a fraction in lowest terms (e.g. \`1/2\`).

**1)** Rolling a number greater than $4$ on a fair die.
**2)** Drawing a King from a $52$-card deck.
**3)** A bag has $4$ red and $6$ green marbles. $P(\\text{green})$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '1/13', '3/5'],
          hint1: 'Greater than $4$ means $5$ or $6$: $\\frac{2}{6}$.',
          hint2: 'There are $4$ Kings: $\\frac{4}{52}$.',
          hint3: 'Total marbles $= 4 + 6 = 10$; green $= 6$: $\\frac{6}{10}$.',
          explanation: '1) $\\frac{2}{6} = \\frac{1}{3}$.  2) $\\frac{4}{52} = \\frac{1}{13}$.  3) $\\frac{6}{10} = \\frac{3}{5}$.',
        },
      },
      {
        id: 'sp4-complement',
        type: 'text' as const,
        content: `## The Complement Rule

The **complement** of an event $A$ is "$A$ does *not* happen," written $A'$ or $A^c$. Since something either happens or doesn't:

$$P(A') = 1 - P(A)$$

### Worked Example

If $P(\\text{rain}) = 0.3$, then:

$$P(\\text{no rain}) = 1 - 0.3 = 0.7$$

> 💡 **When to use it:** problems that say **"at least one"** are usually fastest through the complement. $P(\\text{at least one}) = 1 - P(\\text{none})$.

### Worked Example: At Least One Head

Flip a coin twice. The only way to get *no* heads is TT, which has probability $\\frac{1}{4}$:

$$P(\\text{at least one head}) = 1 - \\frac{1}{4} = \\frac{3}{4}$$`,
      },
      {
        id: 'sp4-addition',
        type: 'text' as const,
        content: `## The Addition Rule (Or)

For the probability that $A$ **or** $B$ happens:

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

You subtract the overlap so it isn't counted twice. If $A$ and $B$ can't both happen (**mutually exclusive**), the overlap is $0$ and it simplifies to $P(A) + P(B)$.

### Worked Example: Heart or King

In a $52$-card deck: $13$ hearts, $4$ Kings, but the King of Hearts is in **both**:

$$P(\\text{heart or King}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

> ⚠️ Forgetting to subtract the overlap is the #1 mistake. Always ask: *can both happen at once?*`,
      },
      {
        id: 'sp4-rules-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $P(\\text{winning}) = \\frac{2}{9}$, what is $P(\\text{not winning})$?',
              options: ['$\\frac{2}{9}$', '$\\frac{7}{9}$', '$\\frac{9}{2}$', '$\\frac{1}{9}$'],
              correctAnswer: 1,
              explanation: 'Complement rule: $P(\\text{not winning}) = 1 - \\frac{2}{9} = \\frac{9}{9} - \\frac{2}{9} = \\frac{7}{9}$.',
            },
            {
              question: 'Rolling a die, $P(\\text{even or }5)$. Even is $\\{2,4,6\\}$ and $5$ is separate. The probability is:',
              options: ['$\\frac{4}{6}$', '$\\frac{3}{6}$', '$\\frac{5}{6}$', '$\\frac{1}{6}$'],
              correctAnswer: 0,
              explanation: 'Even and "$5$" are mutually exclusive (no overlap), so $P = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$. The favorable set is $\\{2,4,5,6\\}$ — four outcomes.',
            },
          ],
        },
      },
      {
        id: 'sp4-rules-drop',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Rule** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Find $P(\\text{not } A)$ from $P(A)$:', options: ['$1 - P(A)$', '$P(A) - 1$', '$\\frac{1}{P(A)}$', '$P(A)^2$'] },
            { label: '"At least one" problems are easiest with the:', options: ['Complement rule', 'Counting principle', 'Arithmetic formula', 'Common ratio'] },
            { label: 'For $P(A \\text{ or } B)$ you should:', options: ['Add, then subtract the overlap', 'Multiply $P(A)$ by $P(B)$', 'Always just add', 'Divide $P(A)$ by $P(B)$'] },
          ],
          correctAnswers: ['$1 - P(A)$', 'Complement rule', 'Add, then subtract the overlap'],
          hint1: 'The complement of $A$ is everything that is not $A$; together they total $1$.',
          hint2: '"At least one" is the opposite of "none," and $P(\\text{none})$ is often quick to find.',
          hint3: 'The addition rule subtracts $P(A \\text{ and } B)$ so the overlap is not double-counted.',
          explanation: 'Complement: $1-P(A)$. "At least one": use the complement. "Or": add and subtract the overlap.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'series-probability-alg2',
    sections: [
      {
        id: 'sp5-intro',
        type: 'text' as const,
        content: `# 🎲 Series and Probability

**Part 5 of 5 — Compound Events & Mastery Check**

---

You can sum series, count outcomes, and find single-event probabilities. The last skill: chaining events together with **and**.`,
      },
      {
        id: 'sp5-multiplication',
        type: 'text' as const,
        content: `## The Multiplication Rule (And)

For two events happening **in sequence**, multiply:

$$P(A \\text{ and } B) = P(A) \\cdot P(B \\text{ given } A)$$

The key question is whether the first event **changes** the second.

### Independent Events (no effect)

A coin flip doesn't affect a die roll. $P(\\text{heads and a }6)$:

$$P = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$$

### Dependent Events (the first changes the second)

A bag has $3$ red and $5$ blue marbles ($8$ total). Draw two **without replacement**. $P(\\text{both red})$:

$$P = \\frac{3}{8} \\cdot \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$$

The second fraction is $\\frac{2}{7}$ because after removing one red, **only $2$ reds and $7$ marbles remain**.

> 🔑 **"And" → multiply.** Just decide first: does removing the first item change the odds for the second? If yes, it's **dependent** and the second fraction shrinks.`,
      },
      {
        id: 'sp5-mult-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Spin a spinner ($P=\\frac{1}{4}$ for blue) and flip a coin ($P=\\frac{1}{2}$ heads). $P(\\text{blue and heads})$?',
              options: ['$\\frac{1}{8}$', '$\\frac{3}{4}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'The spin and flip are independent, so multiply: $\\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{1}{8}$.',
            },
            {
              question: 'Drawing two cards **without replacement** from a $52$-card deck is an example of:',
              options: ['Independent events', 'Dependent events', 'Mutually exclusive events', 'A geometric series'],
              correctAnswer: 1,
              explanation: 'Removing the first card changes what is left ($51$ cards), so the second draw\'s probability changes — the events are **dependent**.',
            },
          ],
        },
      },
      {
        id: 'sp5-compound-drill',
        type: 'input-boxes' as const,
        content: `**Compound Probability** 🧮

Give each answer as a fraction in lowest terms.

**1)** Flip $2$ coins: $P(\\text{both heads})$.
**2)** Roll two dice: $P(\\text{sum} = 7)$. *(There are $6$ favorable pairs out of $36$.)*
**3)** Bag of $5$ red, $3$ blue ($8$ total). Draw $2$ without replacement: $P(\\text{both red})$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/4', '1/6', '5/14'],
          hint1: 'Independent: $\\frac{1}{2} \\cdot \\frac{1}{2}$.',
          hint2: 'Sum-of-7 pairs: $(1,6)(2,5)(3,4)(4,3)(5,2)(6,1)$ — that\'s $6$ of $36$: $\\frac{6}{36}$.',
          hint3: 'Dependent: $\\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56}$.',
          explanation: '1) $\\frac{1}{2}\\cdot\\frac{1}{2} = \\frac{1}{4}$.  2) $\\frac{6}{36} = \\frac{1}{6}$.  3) $\\frac{5}{8}\\cdot\\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.',
        },
      },
      {
        id: 'sp5-summary',
        type: 'text' as const,
        content: `## Quick Reference — The Whole Lesson

| Goal | Key move |
|------|----------|
| Evaluate $\\sum_{k=1}^{n} a_k$ | substitute $k=1$ to $n$, add |
| Arithmetic sum | $S_n = \\dfrac{n}{2}(a_1 + a_n)$ |
| Finite geometric sum | $S_n = a_1\\dfrac{1-r^n}{1-r}$ |
| Infinite geometric ($|r|<1$) | $S = \\dfrac{a_1}{1-r}$ |
| Count (stages) | multiply choices (FCP) |
| Order matters | permutation $P(n,k)=\\dfrac{n!}{(n-k)!}$ |
| Order doesn't | combination $C(n,k)=\\dfrac{n!}{k!(n-k)!}$ |
| Single probability | $\\dfrac{\\text{favorable}}{\\text{total}}$ |
| "Not" / "at least one" | complement $1 - P$ |
| "Or" | add, subtract overlap |
| "And" | multiply (mind dependence) |

> ⚠️ The two probability traps: forgetting the **overlap** in "or," and forgetting that "without replacement" makes the second fraction **shrink**.`,
      },
      {
        id: 'sp5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Review** 🔽

One quick decision for each scenario.`,
        exercise: {
          dropdowns: [
            { label: '$3 + 6 + 12 + 24 + \\cdots$ is which kind of series?', options: ['Geometric', 'Arithmetic', 'Neither', 'Both'] },
            { label: 'Ranking your top $3$ movies from a list of $10$ uses:', options: ['Permutation', 'Combination', 'Complement', 'Addition rule'] },
            { label: '"$P(\\text{at least one})$" is easiest via the:', options: ['Complement', 'Multiplication of all cases', 'Arithmetic sum', 'Common ratio'] },
          ],
          correctAnswers: ['Geometric', 'Permutation', 'Complement'],
          hint1: 'Each term is the previous one times a constant ($\\times 2$) — that is a common ratio.',
          hint2: 'A *ranking* cares about order (1st vs. 2nd vs. 3rd), so it is a permutation.',
          hint3: '"At least one" is the opposite of "none," and the complement turns it into one easy subtraction.',
          explanation: 'Multiplying by a constant → geometric. A ranking is ordered → permutation. "At least one" → complement.',
        },
      },
      {
        id: 'sp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the sum of the infinite geometric series $9 + 3 + 1 + \\frac{1}{3} + \\cdots$?',
              options: ['$\\frac{27}{2}$', '$12$', '$18$', '$27$'],
              correctAnswer: 0,
              explanation: '$a_1 = 9,\\ r = \\frac{1}{3}$. $S = \\frac{9}{1 - 1/3} = \\frac{9}{2/3} = 9 \\cdot \\frac{3}{2} = \\frac{27}{2}$.',
            },
            {
              question: 'A team of $3$ is chosen from $8$ people (order does not matter). How many teams?',
              options: ['$56$', '$336$', '$24$', '$512$'],
              correctAnswer: 0,
              explanation: 'Order does not matter → combination: $C(8,3) = \\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = \\frac{336}{6} = 56$.',
            },
            {
              question: 'A bag has $4$ red and $2$ white marbles. You draw two without replacement. $P(\\text{both red})$ is:',
              options: ['$\\frac{2}{5}$', '$\\frac{4}{9}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'Dependent: $\\frac{4}{6} \\cdot \\frac{3}{5} = \\frac{12}{30} = \\frac{2}{5}$. After one red, $3$ reds of $5$ marbles remain.',
            },
          ],
        },
      },
    ],
  },
]
