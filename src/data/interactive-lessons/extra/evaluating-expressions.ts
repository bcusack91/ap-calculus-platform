import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Evaluating Expressions (Grade 6 Math).
 * Registry key / DB slug: 'evaluating-expressions'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'evaluating-expressions',
    sections: [
      {
        id: 'ee1-intro',
        type: 'text' as const,
        content: `# 🔢 Evaluating Expressions

**Part 1 of 5 — Variables, Substitution & the Big Idea**

---

### Topics in This Part

| Section |
|---------|
| What an Expression Is |
| Variables Stand for Numbers |
| The Move Called *Substitution* |

> 🔑 **Key Concept:** To **evaluate** an expression means to find its value. You do this by **substituting** a number in for each variable, then doing the arithmetic.`,
      },
      {
        id: 'ee1-what',
        type: 'text' as const,
        content: `## What Is an Expression?

An **algebraic expression** is a combination of numbers, variables, and operations — but it has **no equals sign**.

| Expression | In words |
|------------|----------|
| $x + 5$ | a number plus $5$ |
| $3n$ | three times a number |
| $\\dfrac{12}{y}$ | $12$ divided by a number |
| $2a - 7$ | twice a number, minus $7$ |

A **variable** is a letter that stands for a number we don't know yet — like $x$, $n$, or $a$.

> 💡 $3n$ means $3 \\cdot n$ (three *times* $n$). A number written right next to a variable always means **multiply**. There is no hidden plus.`,
      },
      {
        id: 'ee1-expr-vs-eq',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an **expression** (not an equation)?',
              options: ['$2x - 1$', '$2x - 1 = 9$', '$x = 4$', '$5 + 3 = 8$'],
              correctAnswer: 0,
              explanation: 'An expression has no equals sign. $2x - 1$ qualifies; the other three all contain "$=$", which makes them equations.',
            },
            {
              question: 'What does $7m$ mean?',
              options: ['$7$ times $m$', '$7$ plus $m$', '$7$ minus $m$', 'the number seventy-something'],
              correctAnswer: 0,
              explanation: 'A number directly next to a variable means multiplication, so $7m = 7 \\cdot m$.',
            },
          ],
        },
      },
      {
        id: 'ee1-substitution',
        type: 'text' as const,
        content: `## Substitution: Swapping In a Number

To **evaluate** an expression, we replace the variable with its value. This swap is called **substitution**.

### Worked Example: Evaluate $x + 8$ when $x = 5$

1. **Write** the expression: $x + 8$
2. **Substitute** $5$ for $x$: $5 + 8$
3. **Compute**: $13$

$$x + 8 = 5 + 8 = 13$$

### Worked Example: Evaluate $4n$ when $n = 6$

Remember $4n$ means $4 \\cdot n$:

$$4n = 4 \\cdot 6 = 24$$

> ⚠️ **Watch out:** When you substitute, put the number *exactly* where the letter was. $4n$ with $n = 6$ is $4 \\cdot 6 = 24$ — **not** $46$.`,
      },
      {
        id: 'ee1-sub-drill',
        type: 'input-boxes' as const,
        content: `**Substitute and Evaluate** 🧮

Find the value of each expression for the given number.

**1)** $x + 9$ when $x = 7$
**2)** $6n$ when $n = 5$
**3)** $20 - a$ when $a = 12$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '30', '8'],
          hint1: 'Swap the number in for the letter: $7 + 9$.',
          hint2: '$6n$ means $6 \\cdot n$, so compute $6 \\cdot 5$.',
          hint3: 'Replace $a$ with $12$: $20 - 12$.',
          explanation: '1) $7 + 9 = 16$.  2) $6 \\cdot 5 = 30$.  3) $20 - 12 = 8$.',
        },
      },
      {
        id: 'ee1-meaning-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Expression** 🔽

Pick the correct meaning or value for each.`,
        exercise: {
          dropdowns: [
            { label: '$5x$ means:', options: ['$5 \\cdot x$', '$5 + x$', 'the number $5x$', '$x - 5$'] },
            { label: 'In $n - 4$, the variable is:', options: ['$n$', '$4$', '$-$', 'there is none'] },
            { label: '$2a$ when $a = 7$ equals:', options: ['$14$', '$27$', '$9$', '$5$'] },
          ],
          correctAnswers: ['$5 \\cdot x$', '$n$', '$14$'],
          hint1: 'A number next to a letter always means multiply.',
          hint2: 'A variable is the letter that stands for an unknown number.',
          hint3: '$2a$ means $2 \\cdot a$, so substitute $7$: $2 \\cdot 7$.',
          explanation: '$5x = 5 \\cdot x$. The variable in $n - 4$ is $n$. $2a = 2 \\cdot 7 = 14$ (not $27$).',
        },
      },
      {
        id: 'ee1-recap',
        type: 'text' as const,
        content: `## Recap

You now have the core move:

> 🔑 **Evaluate = Substitute, then Compute.** Replace each variable with its number, then do the arithmetic.

So far each expression had just **one operation**. In Part 2 we handle expressions with several operations at once — which means we need a set of rules for what to do **first**. That set of rules is the order of operations.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'evaluating-expressions',
    sections: [
      {
        id: 'ee2-intro',
        type: 'text' as const,
        content: `# 🔢 Evaluating Expressions

**Part 2 of 5 — Order of Operations (PEMDAS)**

---

> 🔑 **The Idea:** When an expression has more than one operation, the answer depends on the **order** you work in. Everyone follows the same order so everyone gets the same answer.`,
      },
      {
        id: 'ee2-pemdas',
        type: 'text' as const,
        content: `## The Order of Operations

Work through an expression in this order:

| Step | Operation | Memory word |
|------|-----------|-------------|
| 1 | **P**arentheses (grouping) | Please |
| 2 | **E**xponents | Excuse |
| 3 | **M**ultiply & **D**ivide *(left → right)* | My Dear |
| 4 | **A**dd & **S**ubtract *(left → right)* | Aunt Sally |

> ⚠️ **Multiply and divide are a team** — do them together, left to right. Same for **add and subtract**. You do *not* do all multiplication before all division.

### Worked Example: $3 + 4 \\cdot 2$

Multiplication comes before addition:

$$3 + 4 \\cdot 2 = 3 + 8 = 11$$

If you (wrongly) added first you'd get $7 \\cdot 2 = 14$ — that's the classic mistake.`,
      },
      {
        id: 'ee2-which-first',
        type: 'dropdown-select' as const,
        content: `**Which Comes First?** 🔽

For each expression, pick the operation you do **first**.`,
        exercise: {
          dropdowns: [
            { label: 'In $10 - 2 \\cdot 3$:', options: ['multiply $2 \\cdot 3$', 'subtract $10 - 2$', 'either one'] },
            { label: 'In $(8 + 1) \\cdot 4$:', options: ['add $8 + 1$', 'multiply $1 \\cdot 4$', 'multiply $9 \\cdot 4$'] },
            { label: 'In $5 + 2^3$:', options: ['the exponent $2^3$', 'add $5 + 2$', 'either one'] },
          ],
          correctAnswers: ['multiply $2 \\cdot 3$', 'add $8 + 1$', 'the exponent $2^3$'],
          hint1: 'Multiply/divide beats add/subtract, so handle $2 \\cdot 3$ first.',
          hint2: 'Parentheses always go first — finish what is inside $(8 + 1)$.',
          hint3: 'Exponents come right after parentheses, before multiplying or adding.',
          explanation: '$10 - 2\\cdot 3 = 10 - 6 = 4$. $(8+1)\\cdot 4 = 9 \\cdot 4 = 36$. $5 + 2^3 = 5 + 8 = 13$.',
        },
      },
      {
        id: 'ee2-worked',
        type: 'text' as const,
        content: `## A Longer Walkthrough

### Worked Example: $2 + 3 \\cdot (6 - 1)$

1. **Parentheses** first: $6 - 1 = 5$, giving $2 + 3 \\cdot 5$
2. **Multiply**: $3 \\cdot 5 = 15$, giving $2 + 15$
3. **Add**: $2 + 15 = 17$

$$2 + 3 \\cdot (6 - 1) = 2 + 3 \\cdot 5 = 2 + 15 = 17$$

### Worked Example: $24 \\div 6 \\cdot 2$

Divide and multiply are a team — go **left to right**:

$$24 \\div 6 \\cdot 2 = 4 \\cdot 2 = 8$$

> 💡 If you had multiplied first ($6 \\cdot 2 = 12$, then $24 \\div 12 = 2$) you'd get the wrong answer. Left-to-right matters!`,
      },
      {
        id: 'ee2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $7 + 6 \\cdot 2$.',
              options: ['$19$', '$26$', '$15$', '$84$'],
              correctAnswer: 0,
              explanation: 'Multiply first: $6 \\cdot 2 = 12$. Then $7 + 12 = 19$.',
            },
            {
              question: 'Evaluate $(10 - 4) \\div 3$.',
              options: ['$2$', '$6$', '$9$', '$10$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $10 - 4 = 6$. Then $6 \\div 3 = 2$.',
            },
          ],
        },
      },
      {
        id: 'ee2-drill',
        type: 'input-boxes' as const,
        content: `**Order of Operations Drill** 🧮

Evaluate each expression. Follow PEMDAS carefully.

**1)** $5 + 2 \\cdot 4$
**2)** $3 \\cdot (7 - 2)$
**3)** $18 \\div 3 + 1$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '15', '7'],
          hint1: 'Multiply before adding: $2 \\cdot 4 = 8$, then $5 + 8$.',
          hint2: 'Parentheses first: $7 - 2 = 5$, then $3 \\cdot 5$.',
          hint3: 'Divide before adding: $18 \\div 3 = 6$, then $6 + 1$.',
          explanation: '1) $5 + 8 = 13$.  2) $3 \\cdot 5 = 15$.  3) $6 + 1 = 7$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'evaluating-expressions',
    sections: [
      {
        id: 'ee3-intro',
        type: 'text' as const,
        content: `# 🔢 Evaluating Expressions

**Part 3 of 5 — Substitution Meets the Order of Operations**

---

> 🔑 **The Combo:** Most Grade 6 problems ask you to substitute a number **and** follow the order of operations. The trick: substitute *first*, wrap your number in parentheses, then evaluate.`,
      },
      {
        id: 'ee3-method',
        type: 'text' as const,
        content: `## The Safe 3-Step Method

1. **Substitute** — replace each variable with its number, using parentheses around it.
2. **Order** — apply PEMDAS.
3. **Answer** — finish the arithmetic.

### Worked Example: Evaluate $3x + 5$ when $x = 4$

$$3x + 5 = 3(4) + 5 = 12 + 5 = 17$$

Multiplication ($3 \\cdot 4$) happens **before** the addition.

### Worked Example: Evaluate $2n - 1$ when $n = 9$

$$2n - 1 = 2(9) - 1 = 18 - 1 = 17$$

> ⚠️ **Use parentheses when you substitute.** Writing $3(4)$ instead of $34$ keeps the multiplication visible and stops careless errors.`,
      },
      {
        id: 'ee3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $5y + 2$ when $y = 3$.',
              options: ['$17$', '$25$', '$10$', '$53$'],
              correctAnswer: 0,
              explanation: 'Substitute: $5(3) + 2$. Multiply first: $15 + 2 = 17$.',
            },
            {
              question: 'Evaluate $10 - 2a$ when $a = 4$.',
              options: ['$2$', '$32$', '$6$', '$8$'],
              correctAnswer: 0,
              explanation: 'Substitute: $10 - 2(4) = 10 - 8 = 2$. Multiply before subtracting.',
            },
          ],
        },
      },
      {
        id: 'ee3-two-vars',
        type: 'text' as const,
        content: `## Two Variables at Once

Some expressions use two different letters. Substitute **both** numbers, then evaluate.

### Worked Example: Evaluate $ab + 4$ when $a = 3$ and $b = 5$

$$ab + 4 = (3)(5) + 4 = 15 + 4 = 19$$

### Worked Example: Evaluate $\\dfrac{x + y}{2}$ when $x = 8$ and $y = 6$

The fraction bar acts like a grouping symbol — do the top first:

$$\\frac{x + y}{2} = \\frac{8 + 6}{2} = \\frac{14}{2} = 7$$

> 💡 A fraction bar groups the whole top and the whole bottom — finish each before you divide.`,
      },
      {
        id: 'ee3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Step Through It** 🔽

Evaluate $4x - 3$ when $x = 5$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'After substituting:', options: ['$4(5) - 3$', '$45 - 3$', '$4 - 3(5)$', '$4 + 5 - 3$'] },
            { label: 'Do this operation first:', options: ['multiply $4 \\cdot 5$', 'subtract $5 - 3$', 'subtract $4 - 3$'] },
            { label: 'Final value:', options: ['$17$', '$42$', '$13$', '$8$'] },
          ],
          correctAnswers: ['$4(5) - 3$', 'multiply $4 \\cdot 5$', '$17$'],
          hint1: 'Put $5$ where $x$ was, inside parentheses: $4(5) - 3$.',
          hint2: '$4(5)$ is multiplication, which comes before subtraction.',
          hint3: '$4 \\cdot 5 = 20$, then $20 - 3 = 17$.',
          explanation: '$4x - 3 = 4(5) - 3 = 20 - 3 = 17$.',
        },
      },
      {
        id: 'ee3-drill',
        type: 'input-boxes' as const,
        content: `**Substitute & Evaluate Drill** 🧮

**1)** $6m + 7$ when $m = 2$
**2)** $30 - 4k$ when $k = 5$
**3)** $\\dfrac{p + q}{3}$ when $p = 7$ and $q = 5$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['19', '10', '4'],
          hint1: '$6(2) + 7 = 12 + 7$.',
          hint2: '$30 - 4(5) = 30 - 20$.',
          hint3: 'Top first: $7 + 5 = 12$, then $12 \\div 3$.',
          explanation: '1) $12 + 7 = 19$.  2) $30 - 20 = 10$.  3) $\\frac{12}{3} = 4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'evaluating-expressions',
    sections: [
      {
        id: 'ee4-intro',
        type: 'text' as const,
        content: `# 🔢 Evaluating Expressions

**Part 4 of 5 — Exponents & Real-World Formulas**

---

> 🔑 **Why this matters:** Expressions with exponents and real formulas (like area and perimeter) are everywhere. The same method still works — just remember exponents come **before** multiplication.`,
      },
      {
        id: 'ee4-exponents',
        type: 'text' as const,
        content: `## Exponents in Expressions

An **exponent** tells you how many times to multiply the base by itself:

$$x^2 = x \\cdot x \\qquad x^3 = x \\cdot x \\cdot x$$

### Worked Example: Evaluate $x^2$ when $x = 6$

$$x^2 = 6^2 = 6 \\cdot 6 = 36$$

### Worked Example: Evaluate $2x^2$ when $x = 3$

The exponent applies to $x$ **only**. Do the power *before* multiplying by $2$:

$$2x^2 = 2(3)^2 = 2 \\cdot 9 = 18$$

> ⚠️ **Huge mistake to avoid:** $2x^2$ is **not** $(2x)^2$. With $x = 3$, $2x^2 = 18$, but $(2 \\cdot 3)^2 = 36$. The exponent grips only the symbol it sits on.`,
      },
      {
        id: 'ee4-exp-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $x^3$ when $x = 2$.',
              options: ['$8$', '$6$', '$9$', '$5$'],
              correctAnswer: 0,
              explanation: '$x^3 = 2^3 = 2 \\cdot 2 \\cdot 2 = 8$. (Not $2 \\cdot 3 = 6$ — that is the common slip.)',
            },
            {
              question: 'Evaluate $5 + n^2$ when $n = 4$.',
              options: ['$21$', '$81$', '$13$', '$18$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $n^2 = 4^2 = 16$. Then $5 + 16 = 21$.',
            },
          ],
        },
      },
      {
        id: 'ee4-formulas',
        type: 'text' as const,
        content: `## Using Real Formulas

A **formula** is just an expression with a meaning. You evaluate it by substituting the measurements.

| Formula | Meaning |
|---------|---------|
| $A = l \\cdot w$ | area of a rectangle |
| $P = 2l + 2w$ | perimeter of a rectangle |
| $A = s^2$ | area of a square |

### Worked Example: Area of a Rectangle

Find $A = l \\cdot w$ when $l = 7$ and $w = 4$:

$$A = (7)(4) = 28 \\text{ square units}$$

### Worked Example: Perimeter of a Rectangle

Find $P = 2l + 2w$ when $l = 7$ and $w = 4$:

$$P = 2(7) + 2(4) = 14 + 8 = 22 \\text{ units}$$

> 💡 Substitute every measurement, then let the order of operations finish the job.`,
      },
      {
        id: 'ee4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Value** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$s^2$ when $s = 5$:', options: ['$25$', '$10$', '$7$', '$55$'] },
            { label: '$3n^2$ when $n = 2$:', options: ['$12$', '$36$', '$6$', '$18$'] },
            { label: 'Area $A = l \\cdot w$ with $l = 9, w = 3$:', options: ['$27$', '$12$', '$24$', '$93$'] },
          ],
          correctAnswers: ['$25$', '$12$', '$27$'],
          hint1: '$s^2 = 5 \\cdot 5$.',
          hint2: 'Power first: $n^2 = 2^2 = 4$, then $3 \\cdot 4$.',
          hint3: 'Area is length times width: $9 \\cdot 3$.',
          explanation: '$5^2 = 25$. $3(2)^2 = 3 \\cdot 4 = 12$. $A = 9 \\cdot 3 = 27$.',
        },
      },
      {
        id: 'ee4-drill',
        type: 'input-boxes' as const,
        content: `**Exponents & Formulas Drill** 🧮

**1)** $x^2 + 1$ when $x = 7$
**2)** $4a^2$ when $a = 3$
**3)** Perimeter $P = 2l + 2w$ when $l = 6$ and $w = 5$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '36', '22'],
          hint1: 'Power first: $7^2 = 49$, then $+1$.',
          hint2: '$a^2 = 3^2 = 9$, then $4 \\cdot 9$.',
          hint3: '$2(6) + 2(5) = 12 + 10$.',
          explanation: '1) $49 + 1 = 50$.  2) $4 \\cdot 9 = 36$.  3) $12 + 10 = 22$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'evaluating-expressions',
    sections: [
      {
        id: 'ee5-intro',
        type: 'text' as const,
        content: `# 🔢 Evaluating Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) substitute values for variables, (2) follow the order of operations, (3) combine both moves, and (4) handle exponents and real formulas. Time to put it all together.`,
      },
      {
        id: 'ee5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Evaluate an expression | **substitute**, then **compute** |
| Decide what to do first | **PEMDAS**: P, E, MD (left→right), AS (left→right) |
| Substitute safely | wrap the number in **parentheses**: $3x \\to 3(4)$ |
| Handle $2x^2$ | exponent **first**, then multiply: $2(3)^2 = 18$ |
| Use a fraction bar | finish top and bottom **before** dividing |

> ⚠️ **Top mistakes:** adding before multiplying, treating $2x^2$ as $(2x)^2$, and reading $4n$ as a two-digit number instead of $4 \\cdot n$.`,
      },
      {
        id: 'ee5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $3x + 2y$ when $x = 4$ and $y = 5$.',
              options: ['$22$', '$60$', '$27$', '$17$'],
              correctAnswer: 0,
              explanation: '$3(4) + 2(5) = 12 + 10 = 22$.',
            },
            {
              question: 'Evaluate $\\dfrac{12 + x}{n}$ when $x = 8$ and $n = 5$.',
              options: ['$4$', '$20$', '$2.4$', '$15$'],
              correctAnswer: 0,
              explanation: 'Top first: $12 + 8 = 20$, then $20 \\div 5 = 4$.',
            },
          ],
        },
      },
      {
        id: 'ee5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $x^2 - 4$ when $x = 5$
**2)** $2(a + b)$ when $a = 3$ and $b = 6$
**3)** $50 - 3n$ when $n = 7$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '18', '29'],
          hint1: 'Power first: $5^2 = 25$, then $-4$.',
          hint2: 'Parentheses first: $3 + 6 = 9$, then $2 \\cdot 9$.',
          hint3: 'Multiply first: $3(7) = 21$, then $50 - 21$.',
          explanation: '1) $25 - 4 = 21$.  2) $2(9) = 18$.  3) $50 - 21 = 29$.',
        },
      },
      {
        id: 'ee5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $8 + 3 \\cdot 4$.',
              options: ['$20$', '$44$', '$15$', '$11$'],
              correctAnswer: 0,
              explanation: 'Multiply before adding: $3 \\cdot 4 = 12$, then $8 + 12 = 20$.',
            },
            {
              question: 'Evaluate $2x^2$ when $x = 5$.',
              options: ['$50$', '$100$', '$20$', '$25$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $5^2 = 25$, then $2 \\cdot 25 = 50$. (Not $(2\\cdot 5)^2 = 100$.)',
            },
            {
              question: 'Evaluate $4a - b$ when $a = 6$ and $b = 9$.',
              options: ['$15$', '$33$', '$21$', '$3$'],
              correctAnswer: 0,
              explanation: '$4(6) - 9 = 24 - 9 = 15$. Multiply before subtracting.',
            },
          ],
        },
      },
    ],
  },
]
