import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Variables and Algebraic Expressions (Pre-Algebra).
 * Registry key / DB Topic.slug: 'variables-algebraic-expressions-prealg'.
 * 5 parts, gold-standard structure: what is a variable → writing & evaluating
 * expressions → the language of word phrases → terms / coefficients / like terms
 * → simplifying (combine like terms + distributive property) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every evaluated value, substitution, and simplification was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'variables-algebraic-expressions-prealg',
    sections: [
      {
        id: 'vae1-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Algebraic Expressions

**Part 1 of 5 — What Is a Variable?**

---

### Topics in This Part

| Section |
|---------|
| Variables: letters that hold numbers |
| Constants vs. variables |
| The hidden multiplication sign |
| Powers and the order of operations |

> 🔑 **Key Concept:** A **variable** is just a letter that stands in for a number we don't know yet (or a number that's allowed to change). Algebra is arithmetic where some of the numbers are wearing name tags.`,
      },
      {
        id: 'vae1-what',
        type: 'text' as const,
        content: `## Variables and Constants

A **variable** is a symbol — usually a letter like $x$, $y$, $n$, or $t$ — that represents a number.

A **constant** is a fixed number that never changes, like $7$, $-3$, or $\\dfrac{1}{2}$.

| Symbol | Type | Why |
|--------|------|-----|
| $x$ | variable | a letter standing for an unknown number |
| $5$ | constant | a fixed value |
| $n$ | variable | could be any number |
| $-12$ | constant | always $-12$ |

Why bother with letters? Because one expression can describe **many** situations at once. If a movie ticket costs \\$9, the cost of $n$ tickets is $9n$ — and that single rule works whether you buy $1$ ticket or $100$.

> 💡 The same variable can stand for different numbers in different problems, but **within one problem** each letter holds a single value at a time.`,
      },
      {
        id: 'vae1-multiply',
        type: 'text' as const,
        content: `## The Invisible Multiplication Sign

In algebra we almost never write the $\\times$ symbol — it looks too much like the letter $x$. Instead, putting a number **right next to** a variable *means multiply*:

$$3x \\;=\\; 3 \\cdot x \\;=\\; 3 \\text{ times } x$$

The number stuck to the front, $3$, is called the **coefficient**.

| Expression | Meaning |
|------------|---------|
| $5y$ | $5 \\cdot y$ |
| $ab$ | $a \\cdot b$ |
| $7(n)$ | $7 \\cdot n$ |
| $x$ | $1 \\cdot x$  (coefficient of $1$ is invisible) |

> ⚠️ **Watch out:** $xy$ means $x \\cdot y$, but $23$ does **not** mean $2 \\cdot 3$ — two *digits* next to each other still make a normal two-digit number. The shortcut only applies when a letter is involved.`,
      },
      {
        id: 'vae1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $8m$, which statement is true?',
              options: [
                '$8$ is the coefficient and $m$ is the variable',
                '$8$ is the variable and $m$ is the coefficient',
                '$8$ and $m$ are both constants',
                'It means the number $8m$, like eighty-something',
              ],
              correctAnswer: 0,
              explanation: '$8m$ means $8 \\cdot m$. The number multiplied by the variable is the coefficient ($8$), and $m$ is the variable.',
            },
            {
              question: 'Which of these is a constant?',
              options: ['$x$', '$-6$', '$2t$', '$n$'],
              correctAnswer: 1,
              explanation: 'A constant is a fixed number. $-6$ never changes. $x$, $n$, and $2t$ all involve variables.',
            },
          ],
        },
      },
      {
        id: 'vae1-powers',
        type: 'text' as const,
        content: `## Powers and Order of Operations

An **exponent** is a shortcut for repeated multiplication:

$$x^2 = x \\cdot x \\qquad x^3 = x \\cdot x \\cdot x$$

We read $x^2$ as "$x$ squared" and $x^3$ as "$x$ cubed."

When an expression mixes operations, evaluate them in this order (**PEMDAS**):

| Order | Operation |
|-------|-----------|
| 1 | **P**arentheses (grouping) |
| 2 | **E**xponents |
| 3 | **M**ultiplication / **D**ivision (left → right) |
| 4 | **A**ddition / **S**ubtraction (left → right) |

> 💡 $2x^2$ means $2 \\cdot (x^2)$ — the exponent attaches **only** to the $x$, not the $2$, because exponents come before multiplication. So if $x = 3$, then $2x^2 = 2 \\cdot 9 = 18$, **not** $(2\\cdot 3)^2 = 36$.`,
      },
      {
        id: 'vae1-power-drill',
        type: 'input-boxes' as const,
        content: `**Translate to Numbers** 🧮

Rewrite each as a plain number (no variables — just compute).

**1)** $4^2 = \\,?$
**2)** $2^3 = \\,?$
**3)** $5 + 3 \\cdot 2 = \\,?$  *(remember order of operations)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '8', '11'],
          hint1: '$4^2 = 4 \\cdot 4 = 16$.',
          hint2: '$2^3 = 2 \\cdot 2 \\cdot 2 = 8$.',
          hint3: 'Multiply first: $3 \\cdot 2 = 6$, then $5 + 6 = 11$ (not $8 \\cdot 2 = 16$).',
          explanation: '1) $4 \\cdot 4 = 16$.  2) $2 \\cdot 2 \\cdot 2 = 8$.  3) Multiplication before addition: $5 + 6 = 11$.',
        },
      },
      {
        id: 'vae1-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order of Operations Check** 🔽

Choose the correct value of each numerical expression. Follow PEMDAS carefully.`,
        exercise: {
          dropdowns: [
            { label: '$2 + 3 \\cdot 4 =$', options: ['$14$', '$20$', '$24$', '$9$'] },
            { label: '$(2 + 3) \\cdot 4 =$', options: ['$20$', '$14$', '$11$', '$24$'] },
            { label: '$3^2 + 1 =$', options: ['$10$', '$7$', '$16$', '$9$'] },
          ],
          correctAnswers: ['$14$', '$20$', '$10$'],
          hint1: 'Multiplication comes before addition: do $3 \\cdot 4 = 12$ first, then $2 + 12$.',
          hint2: 'Parentheses come first: $2 + 3 = 5$, then $5 \\cdot 4$.',
          hint3: 'Exponents before addition: $3^2 = 9$, then $9 + 1$.',
          explanation: '$2 + 3 \\cdot 4 = 2 + 12 = 14$. With parentheses, $(2+3)\\cdot 4 = 5 \\cdot 4 = 20$. And $3^2 + 1 = 9 + 1 = 10$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'variables-algebraic-expressions-prealg',
    sections: [
      {
        id: 'vae2-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Algebraic Expressions

**Part 2 of 5 — Evaluating Expressions**

---

> 🔑 **The Idea:** To **evaluate** an algebraic expression, you *substitute* a given number for each variable and then simplify using the order of operations. Replace the name tag with the actual number.`,
      },
      {
        id: 'vae2-substitute',
        type: 'text' as const,
        content: `## Substitution: Plug In and Compute

To evaluate an expression for a given value, swap the variable for its number — using **parentheses** to be safe — then follow PEMDAS.

### Worked Example: evaluate $3x + 4$ when $x = 5$

$$3x + 4 = 3(5) + 4 = 15 + 4 = 19$$

### Worked Example: evaluate $x^2 - 2x$ when $x = 4$

$$x^2 - 2x = (4)^2 - 2(4) = 16 - 8 = 8$$

> ⚠️ **Use parentheses when you substitute**, especially with negatives. For $x = -3$, writing $x^2 = (-3)^2 = 9$ keeps the sign right; writing $-3^2$ by accident gives $-9$, which is wrong here.`,
      },
      {
        id: 'vae2-negatives',
        type: 'text' as const,
        content: `## Substituting Negative Numbers

### Worked Example: evaluate $5 - 2x$ when $x = -3$

$$5 - 2x = 5 - 2(-3) = 5 - (-6) = 5 + 6 = 11$$

### Worked Example: evaluate $\\dfrac{a + b}{2}$ when $a = 7$ and $b = 3$

$$\\frac{a + b}{2} = \\frac{7 + 3}{2} = \\frac{10}{2} = 5$$

> 💡 A fraction bar acts like a set of parentheses: do **all** the arithmetic on top (and on the bottom) **before** you divide.`,
      },
      {
        id: 'vae2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $2n + 7$ when $n = 6$.',
              options: ['$19$', '$15$', '$26$', '$20$'],
              correctAnswer: 0,
              explanation: '$2(6) + 7 = 12 + 7 = 19$.',
            },
            {
              question: 'Evaluate $x^2 + 1$ when $x = -4$.',
              options: ['$17$', '$-15$', '$-7$', '$9$'],
              correctAnswer: 0,
              explanation: '$(-4)^2 + 1 = 16 + 1 = 17$. The square of a negative is positive.',
            },
          ],
        },
      },
      {
        id: 'vae2-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate It** 🧮

Substitute and compute. Enter a single number for each.

**1)** $4x - 5$ when $x = 3 \\;\\Rightarrow\\; ?$
**2)** $\\dfrac{12}{y} + 1$ when $y = 4 \\;\\Rightarrow\\; ?$
**3)** $a^2 - b$ when $a = 5,\\; b = 9 \\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '4', '16'],
          hint1: '$4(3) - 5 = 12 - 5 = 7$.',
          hint2: '$\\dfrac{12}{4} + 1 = 3 + 1 = 4$.',
          hint3: '$(5)^2 - 9 = 25 - 9 = 16$.',
          explanation: '1) $12 - 5 = 7$.  2) $3 + 1 = 4$.  3) $25 - 9 = 16$.',
        },
      },
      {
        id: 'vae2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Value** 🔽

Each expression below is evaluated at $x = 2$. Pick the correct result.`,
        exercise: {
          dropdowns: [
            { label: '$x + 10 =$', options: ['$12$', '$20$', '$8$', '$5$'] },
            { label: '$3x =$', options: ['$6$', '$5$', '$32$', '$8$'] },
            { label: '$x^2 + x =$', options: ['$6$', '$8$', '$4$', '$10$'] },
          ],
          correctAnswers: ['$12$', '$6$', '$6$'],
          hint1: 'Just add: $2 + 10 = 12$.',
          hint2: '$3x = 3 \\cdot 2 = 6$ (multiply; do not place the digits side by side).',
          hint3: '$x^2 + x = 2^2 + 2 = 4 + 2 = 6$.',
          explanation: '$x+10 = 12$; $3x = 6$; $x^2 + x = 4 + 2 = 6$. All evaluated at $x = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'variables-algebraic-expressions-prealg',
    sections: [
      {
        id: 'vae3-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Algebraic Expressions

**Part 3 of 5 — Translating Words into Expressions**

---

> 🔑 **Why it matters:** Real problems arrive as *sentences*, not equations. The skill of turning "seven more than a number" into $n + 7$ is the bridge from English to algebra.`,
      },
      {
        id: 'vae3-keywords',
        type: 'text' as const,
        content: `## The Keyword Dictionary

Certain words signal certain operations. Let $n$ be "the number."

| Words | Operation | Expression |
|-------|-----------|------------|
| sum, plus, more than, increased by | add | $n + 5$ |
| difference, minus, less than, decreased by | subtract | $n - 5$ |
| product, times, of, twice | multiply | $5n$ |
| quotient, divided by, per | divide | $\\dfrac{n}{5}$ |

> ⚠️ **Order matters for subtraction.** "$7$ **less than** a number" is $n - 7$ — the number comes *first*. Don't write $7 - n$. The phrase "less than" flips the order you read.`,
      },
      {
        id: 'vae3-translate-mc',
        type: 'multiple-choice' as const,
        content: `**Translation Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write "the sum of a number $x$ and $12$" as an expression.',
              options: ['$x + 12$', '$12x$', '$x - 12$', '$\\dfrac{x}{12}$'],
              correctAnswer: 0,
              explanation: '"Sum" means addition: $x + 12$.',
            },
            {
              question: 'Write "$8$ less than a number $n$" as an expression.',
              options: ['$n - 8$', '$8 - n$', '$8n$', '$n + 8$'],
              correctAnswer: 0,
              explanation: '"Less than" reverses the order you read: the number $n$ comes first, so $n - 8$.',
            },
            {
              question: 'Write "twice a number $y$" as an expression.',
              options: ['$2y$', '$y + 2$', '$y^2$', '$\\dfrac{y}{2}$'],
              correctAnswer: 0,
              explanation: '"Twice" means two times, so $2y$.',
            },
          ],
        },
      },
      {
        id: 'vae3-build',
        type: 'text' as const,
        content: `## Building Multi-Step Expressions

Some phrases combine operations. Read carefully and group with parentheses when a quantity is acted on as a whole.

| Phrase | Expression |
|--------|------------|
| "$3$ more than twice a number" | $2n + 3$ |
| "$5$ times the sum of a number and $4$" | $5(n + 4)$ |
| "the quotient of a number and $2$, decreased by $1$" | $\\dfrac{n}{2} - 1$ |
| "$10$ decreased by half a number" | $10 - \\dfrac{n}{2}$ |

> 💡 The word **"sum"** or **"difference"** inside a longer phrase usually signals a set of parentheses: "$5$ times **the sum of** $n$ and $4$" must be $5(n+4)$, not $5n + 4$.`,
      },
      {
        id: 'vae3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Phrase → Expression** 🔽

Match each phrase to its algebraic expression. Let $n$ be the number.`,
        exercise: {
          dropdowns: [
            { label: '"$4$ more than a number"', options: ['$n + 4$', '$4 - n$', '$4n$', '$n - 4$'] },
            { label: '"the product of $6$ and a number"', options: ['$6n$', '$n + 6$', '$\\dfrac{n}{6}$', '$n - 6$'] },
            { label: '"$2$ times the sum of a number and $3$"', options: ['$2(n + 3)$', '$2n + 3$', '$2n \\cdot 3$', '$n + 2 \\cdot 3$'] },
            { label: '"a number divided by $5$"', options: ['$\\dfrac{n}{5}$', '$5n$', '$\\dfrac{5}{n}$', '$n - 5$'] },
          ],
          correctAnswers: ['$n + 4$', '$6n$', '$2(n + 3)$', '$\\dfrac{n}{5}$'],
          hint1: '"More than" and "sum" both mean add.',
          hint2: '"Product" means multiply: $6$ times $n$ is $6n$.',
          hint3: '"The sum of a number and $3$" is the quantity $(n+3)$; multiplying it by $2$ needs parentheses: $2(n+3)$.',
          explanation: '$n+4$ (more than), $6n$ (product), $2(n+3)$ (times a sum — parentheses), $\\dfrac{n}{5}$ (divided by).',
        },
      },
      {
        id: 'vae3-word-input',
        type: 'input-boxes' as const,
        content: `**From Words to Value** 🧮

Translate, then evaluate at the given value.

**1)** "$5$ more than a number $n$," when $n = 8 \\;\\Rightarrow\\; ?$
**2)** "Three times a number $n$," when $n = 7 \\;\\Rightarrow\\; ?$
**3)** "$2$ less than a number $n$," when $n = 10 \\;\\Rightarrow\\; ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '21', '8'],
          hint1: 'The expression is $n + 5$; at $n = 8$ that is $8 + 5$.',
          hint2: 'The expression is $3n$; at $n = 7$ that is $3 \\cdot 7$.',
          hint3: 'The expression is $n - 2$; at $n = 10$ that is $10 - 2$.',
          explanation: '1) $n+5 = 13$.  2) $3n = 21$.  3) $n-2 = 8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'variables-algebraic-expressions-prealg',
    sections: [
      {
        id: 'vae4-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Algebraic Expressions

**Part 4 of 5 — Terms, Coefficients & Like Terms**

---

> 🔑 **Big Idea:** Before you can *simplify* an expression, you have to break it into **terms** and spot which ones are "alike." Only like terms can be combined.`,
      },
      {
        id: 'vae4-parts',
        type: 'text' as const,
        content: `## The Anatomy of an Expression

A **term** is a single number, variable, or product of them. Terms are separated by $+$ and $-$ signs.

Consider $\\;4x + 7 - 2y$. It has **three terms**: $4x$, $7$, and $-2y$.

| Term | Coefficient | Variable part | Name |
|------|-------------|---------------|------|
| $4x$ | $4$ | $x$ | variable term |
| $7$ | $7$ | none | constant term |
| $-2y$ | $-2$ | $y$ | variable term |

- The **coefficient** is the number multiplied by the variable.
- A **constant term** has no variable.
- The sign **in front** of a term belongs to that term, so the coefficient of $-2y$ is $-2$.

> 💡 If a variable has no visible number, its coefficient is $1$: the term $x$ means $1x$, and $-x$ means $-1x$.`,
      },
      {
        id: 'vae4-terms-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many terms are in $3a - 5 + 2a + 9$?',
              options: ['$4$', '$2$', '$3$', '$5$'],
              correctAnswer: 0,
              explanation: 'Terms are separated by $+$ and $-$: $3a$, $-5$, $2a$, and $9$ — that is $4$ terms.',
            },
            {
              question: 'What is the coefficient of the term $-7m$?',
              options: ['$-7$', '$7$', '$m$', '$-m$'],
              correctAnswer: 0,
              explanation: 'The sign belongs to the term, so the coefficient is $-7$.',
            },
          ],
        },
      },
      {
        id: 'vae4-like',
        type: 'text' as const,
        content: `## What Makes Terms "Like"?

**Like terms** have the **exact same variable part** — same letters raised to the same powers. The coefficients can differ.

| Pair | Like? | Why |
|------|-------|-----|
| $3x$ and $8x$ | ✅ yes | both have variable part $x$ |
| $5y$ and $5x$ | ❌ no | different variables |
| $4n$ and $7$ | ❌ no | one has $n$, one is a constant |
| $2x^2$ and $9x^2$ | ✅ yes | both have $x^2$ |
| $6x$ and $6x^2$ | ❌ no | $x$ and $x^2$ are different powers |

> ⚠️ **Constants are like terms with each other.** $7$ and $-3$ can combine to $4$. But a constant is *never* like a variable term.`,
      },
      {
        id: 'vae4-like-dropdown',
        type: 'dropdown-select' as const,
        content: `**Like or Not?** 🔽

Decide whether each pair is a set of like terms.`,
        exercise: {
          dropdowns: [
            { label: '$6m$ and $-2m$', options: ['Like terms', 'Not like terms'] },
            { label: '$4x$ and $4y$', options: ['Like terms', 'Not like terms'] },
            { label: '$5x^2$ and $3x^2$', options: ['Like terms', 'Not like terms'] },
            { label: '$8$ and $9t$', options: ['Like terms', 'Not like terms'] },
          ],
          correctAnswers: ['Like terms', 'Not like terms', 'Like terms', 'Not like terms'],
          hint1: 'Like terms need the identical variable part (same letters, same powers).',
          hint2: '$4x$ and $4y$ use different letters, so they are not alike even though the coefficients match.',
          hint3: '$8$ is a constant and $9t$ has a variable, so they cannot combine.',
          explanation: '$6m$ & $-2m$: same variable $m$ → like. $4x$ & $4y$: different letters → not like. $5x^2$ & $3x^2$: same $x^2$ → like. $8$ & $9t$: constant vs. variable → not like.',
        },
      },
      {
        id: 'vae4-identify-input',
        type: 'input-boxes' as const,
        content: `**Count and Identify** 🧮

For the expression $\\;9x - 4 + 3x + x\\;$:

**1)** How many terms does it have?
**2)** Adding the coefficients of all the $x$-terms ($9$, $3$, and $1$), what total do you get?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '13'],
          hint1: 'Terms split on $+$ and $-$: $9x$, $-4$, $3x$, $x$.',
          hint2: 'Remember the lone $x$ has coefficient $1$: $9 + 3 + 1$.',
          hint3: '$9 + 3 + 1 = 13$.',
          explanation: '1) Four terms: $9x$, $-4$, $3x$, $x$.  2) The $x$-coefficients are $9$, $3$, and $1$, summing to $13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'variables-algebraic-expressions-prealg',
    sections: [
      {
        id: 'vae5-intro',
        type: 'text' as const,
        content: `# 🔤 Variables and Algebraic Expressions

**Part 5 of 5 — Simplifying & Mastery Check**

---

You can now name the parts of an expression and spot like terms. The payoff is **simplifying**: combining like terms and using the **distributive property** to write an expression in its cleanest form.`,
      },
      {
        id: 'vae5-combine',
        type: 'text' as const,
        content: `## Combining Like Terms

To **combine like terms**, add or subtract their coefficients and keep the variable part unchanged.

### Worked Example: simplify $7x + 2x$

$$7x + 2x = (7 + 2)x = 9x$$

### Worked Example: simplify $5a + 3 - 2a + 8$

Group the like terms, then combine:

$$(5a - 2a) + (3 + 8) = 3a + 11$$

> ⚠️ You **cannot** combine $3a + 11$ any further — $3a$ is a variable term and $11$ is a constant. A simplified expression often still has more than one term, and that's fine.`,
      },
      {
        id: 'vae5-distribute',
        type: 'text' as const,
        content: `## The Distributive Property

To remove parentheses, multiply the outside factor by **every** term inside:

$$a(b + c) = ab + ac$$

### Worked Example: expand $3(x + 4)$

$$3(x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12$$

### Worked Example: simplify $2(n + 5) + 4n$

$$2(n + 5) + 4n = 2n + 10 + 4n = (2n + 4n) + 10 = 6n + 10$$

> 💡 Distribute **first**, then combine like terms. And watch the signs: $-2(x - 3) = -2x + 6$, because $-2 \\cdot (-3) = +6$.`,
      },
      {
        id: 'vae5-simplify-mc',
        type: 'multiple-choice' as const,
        content: `**Simplify Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $6y + 3y$.',
              options: ['$9y$', '$9y^2$', '$18y$', '$9$'],
              correctAnswer: 0,
              explanation: 'Add the coefficients and keep the variable: $(6+3)y = 9y$.',
            },
            {
              question: 'Expand $4(x + 2)$.',
              options: ['$4x + 8$', '$4x + 2$', '$x + 8$', '$4x + 6$'],
              correctAnswer: 0,
              explanation: 'Distribute: $4 \\cdot x + 4 \\cdot 2 = 4x + 8$.',
            },
          ],
        },
      },
      {
        id: 'vae5-simplify-input',
        type: 'input-boxes' as const,
        content: `**Simplify It** 🧮

Combine like terms and/or distribute. Enter the **constant** part of each simplified answer.

**1)** $5x + 7 + 2x - 3$ simplifies to $7x + ?$  *(enter the constant)*
**2)** $3(n + 6)$ expands to $3n + ?$  *(enter the constant)*
**3)** $2(a + 4) + a$ simplifies to $3a + ?$  *(enter the constant)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '18', '8'],
          hint1: 'Constants: $7 - 3 = 4$. (The $x$-terms give $5x + 2x = 7x$.)',
          hint2: 'Distribute: $3 \\cdot 6 = 18$.',
          hint3: 'Distribute first: $2a + 8 + a = 3a + 8$, so the constant is $8$.',
          explanation: '1) $7x + 4$.  2) $3n + 18$.  3) $2(a+4)+a = 2a+8+a = 3a + 8$.',
        },
      },
      {
        id: 'vae5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Pull together everything from the lesson.`,
        exercise: {
          dropdowns: [
            { label: 'Evaluate $5x - 2$ at $x = 3$:', options: ['$13$', '$17$', '$10$', '$1$'] },
            { label: '"$3$ less than a number $n$":', options: ['$n - 3$', '$3 - n$', '$3n$', '$n + 3$'] },
            { label: 'Simplify $4a + a$:', options: ['$5a$', '$4a^2$', '$5$', '$4a$'] },
            { label: 'Expand $2(x + 7)$:', options: ['$2x + 14$', '$2x + 7$', '$2x + 9$', '$x + 14$'] },
          ],
          correctAnswers: ['$13$', '$n - 3$', '$5a$', '$2x + 14$'],
          hint1: '$5(3) - 2 = 15 - 2 = 13$.',
          hint2: '"Less than" flips the order: the number first, so $n - 3$.',
          hint3: '$4a + a = (4+1)a = 5a$; and distribute $2(x+7) = 2x + 14$.',
          explanation: 'Evaluate: $15 - 2 = 13$. Translate: $n - 3$. Combine: $5a$. Distribute: $2x + 14$.',
        },
      },
      {
        id: 'vae5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $x^2 - 3x$ when $x = 5$.',
              options: ['$10$', '$40$', '$-10$', '$22$'],
              correctAnswer: 0,
              explanation: '$(5)^2 - 3(5) = 25 - 15 = 10$.',
            },
            {
              question: 'Which phrase matches the expression $2n + 5$?',
              options: [
                '"$5$ more than twice a number"',
                '"twice the sum of a number and $5$"',
                '"$5$ less than twice a number"',
                '"$2$ more than $5$ times a number"',
              ],
              correctAnswer: 0,
              explanation: '$2n$ is "twice a number" and $+5$ is "$5$ more than" it, giving "$5$ more than twice a number." "Twice the sum" would be $2(n+5)$.',
            },
            {
              question: 'Simplify $3(x + 2) + 5x$.',
              options: ['$8x + 6$', '$8x + 2$', '$3x + 7$', '$15x + 6$'],
              correctAnswer: 0,
              explanation: 'Distribute: $3x + 6 + 5x$. Combine like terms: $(3x + 5x) + 6 = 8x + 6$.',
            },
          ],
        },
      },
    ],
  },
]
