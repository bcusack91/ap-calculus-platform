import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Writing and Evaluating Expressions (Grade 6 Math).
 * Registry key / DB slug: 'writing-evaluating-expressions-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'writing-evaluating-expressions-grade6',
    sections: [
      {
        id: 'wee1-intro',
        type: 'text' as const,
        content: `# 🧩 Writing and Evaluating Expressions

**Part 1 of 5 — The Language of Algebra**

---

### Topics in This Part

| Section |
|---------|
| What Is an Expression? |
| The Parts of an Expression |
| Variables, Constants, and Coefficients |

> 🔑 **Key Concept:** An **expression** is a math phrase built from numbers, variables, and operations — but it has **no equals sign**. Learning to read and build expressions is the first real step into algebra.`,
      },
      {
        id: 'wee1-what-is',
        type: 'text' as const,
        content: `## What Is an Expression?

An **algebraic expression** mixes numbers and **variables** (letters that stand for unknown values) using operations like $+$, $-$, $\\times$, and $\\div$.

| Math phrase | Is it an expression? | Why |
|-------------|----------------------|-----|
| $7 + 4$ | ✅ yes | numbers and an operation, no $=$ |
| $3x - 5$ | ✅ yes | a variable, a number, operations, no $=$ |
| $2x + 1 = 9$ | ❌ no | it has an $=$ sign — that's an **equation** |
| $\\dfrac{n}{4}$ | ✅ yes | a variable divided by a number |

> 💡 **Expression vs. Equation:** An **expression** is a *phrase* (like "three more than a number"). An **equation** is a *full sentence* that says two things are equal (it has an $=$). This lesson is all about expressions.`,
      },
      {
        id: 'wee1-expr-or-not',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is an **expression** (not an equation)?',
              options: ['$5x = 20$', '$8 - 2y$', '$3 + 6 = 9$', '$x + 1 = 7$'],
              correctAnswer: 1,
              explanation: 'An expression has no equals sign. $8 - 2y$ is a phrase with a variable and an operation. The other three all contain $=$, so they are equations.',
            },
            {
              question: 'What is the main difference between an expression and an equation?',
              options: ['An expression has an equals sign', 'An equation has no variables', 'An equation has an equals sign; an expression does not', 'They are exactly the same'],
              correctAnswer: 2,
              explanation: 'An equation states that two amounts are equal, so it contains an $=$. An expression is just a phrase and has **no** equals sign.',
            },
          ],
        },
      },
      {
        id: 'wee1-parts',
        type: 'text' as const,
        content: `## The Parts of an Expression

Look at the expression $\\;4x + 7\\;$. Every piece has a name:

| Part | Example | What it means |
|------|---------|---------------|
| **Variable** | $x$ | a letter standing for an unknown number |
| **Coefficient** | $4$ | the number **multiplied by** a variable |
| **Constant** | $7$ | a number **by itself** (it never changes) |
| **Term** | $4x$ and $7$ | a single number, variable, or product, separated by $+$ or $-$ |

So $4x + 7$ has **two terms**: the term $4x$ and the term $7$.

> 🔑 **Spotting the coefficient:** In $4x$, the coefficient is $4$. A variable alone, like $x$, secretly has a coefficient of $1$, because $x = 1x$.`,
      },
      {
        id: 'wee1-identify-parts',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

Use the expression $\\;6m + 9\\;$ to answer each one.`,
        exercise: {
          dropdowns: [
            { label: 'The variable is:', options: ['$6$', '$m$', '$9$', '$6m$'] },
            { label: 'The coefficient is:', options: ['$6$', '$m$', '$9$', '$15$'] },
            { label: 'The constant is:', options: ['$6$', '$m$', '$9$', '$6m$'] },
          ],
          correctAnswers: ['$m$', '$6$', '$9$'],
          hint1: 'The variable is the letter standing for an unknown number.',
          hint2: 'The coefficient is the number multiplied by the variable.',
          hint3: 'The constant is the number standing all by itself, with no variable attached.',
          explanation: 'In $6m + 9$: the variable is $m$, the coefficient is $6$ (it multiplies $m$), and the constant is $9$ (a number on its own).',
        },
      },
      {
        id: 'wee1-count-terms',
        type: 'input-boxes' as const,
        content: `**Count the Terms** 🧮

Terms are separated by $+$ and $-$ signs. How many terms does each expression have?

**1)** $3x + 8$
**2)** $5a - 2b + 7$
**3)** $10y$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '1'],
          hint1: 'Terms are the pieces separated by $+$ or $-$. Count the chunks.',
          hint2: '$5a - 2b + 7$ has three chunks: $5a$, then $2b$, then $7$.',
          hint3: '$10y$ is a single product, so it is just one term.',
          explanation: '1) $3x + 8$ → **2** terms ($3x$ and $8$). 2) $5a - 2b + 7$ → **3** terms. 3) $10y$ → **1** term.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'writing-evaluating-expressions-grade6',
    sections: [
      {
        id: 'wee2-intro',
        type: 'text' as const,
        content: `# 🧩 Writing and Evaluating Expressions

**Part 2 of 5 — Turning Words into Expressions**

---

> 🔑 **The Goal:** Real problems come as *words*. Your job is to translate those words into a math expression. The secret is learning which words mean which operations.`,
      },
      {
        id: 'wee2-keywords',
        type: 'text' as const,
        content: `## Operation Keywords

Each operation has a set of "signal words." Memorize these — they unlock almost every word problem.

| Operation | Signal words |
|-----------|--------------|
| **Add** $(+)$ | sum, plus, more than, increased by, total, altogether |
| **Subtract** $(-)$ | difference, minus, less than, fewer than, decreased by, take away |
| **Multiply** $(\\times)$ | product, times, of, twice, double, triple |
| **Divide** $(\\div)$ | quotient, divided by, split equally, per, each |

### Watch the Order!

Most phrases translate left to right, but **"more than"** and **"less than"** **flip** the order:

- "$5$ more than a number" → $\\;n + 5\\;$ ✅  (not $5 + n$ wrong order, though it equals the same)
- "$5$ less than a number" → $\\;n - 5\\;$ ✅  (**not** $5 - n$ — that's backwards!)

> ⚠️ **The #1 trap:** "$3$ less than $x$" means $x - 3$, **not** $3 - x$. The "less than" amount gets subtracted *from* the number, so it goes **second**.`,
      },
      {
        id: 'wee2-translate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which expression means "$7$ less than a number $n$"?',
              options: ['$7 - n$', '$n - 7$', '$n + 7$', '$7n$'],
              correctAnswer: 1,
              explanation: '"Less than" flips the order: you subtract $7$ **from** $n$, giving $n - 7$. ($7 - n$ is the common trap — it is backwards.)',
            },
            {
              question: 'Which expression means "the product of $4$ and a number $x$"?',
              options: ['$4 + x$', '$x - 4$', '$4x$', '$\\frac{x}{4}$'],
              correctAnswer: 2,
              explanation: '"Product" means multiply. The product of $4$ and $x$ is $4 \\cdot x = 4x$.',
            },
            {
              question: 'Which phrase matches the expression $\\frac{m}{3}$?',
              options: ['$3$ more than $m$', 'the product of $m$ and $3$', 'a number $m$ divided by $3$', '$3$ less than $m$'],
              correctAnswer: 2,
              explanation: '$\\frac{m}{3}$ is "$m$ divided by $3$." The fraction bar means division.',
            },
          ],
        },
      },
      {
        id: 'wee2-worked',
        type: 'text' as const,
        content: `## Worked Examples: Words → Expressions

**Example 1:** "the sum of a number $x$ and $12$"
$$x + 12$$

**Example 2:** "$8$ less than twice a number $y$"

Break it into pieces:
- "twice a number $y$" $\\Rightarrow 2y$
- "$8$ less than" that $\\Rightarrow$ subtract $8$ **from** $2y$

$$2y - 8$$

**Example 3:** "a number $n$ divided by $5$, then increased by $3$"
$$\\frac{n}{5} + 3$$

> 💡 **Strategy:** Translate one chunk at a time, then assemble. Underline the signal words first so you don't miss a flip.`,
      },
      {
        id: 'wee2-translate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate Each Phrase** 🔽`,
        exercise: {
          dropdowns: [
            { label: '"the sum of $n$ and $6$":', options: ['$n - 6$', '$n + 6$', '$6n$', '$\\frac{n}{6}$'] },
            { label: '"$4$ less than a number $k$":', options: ['$4 - k$', '$k - 4$', '$k + 4$', '$4k$'] },
            { label: '"twice a number $p$":', options: ['$p + 2$', '$p - 2$', '$2p$', '$\\frac{p}{2}$'] },
            { label: '"a number $w$ divided by $9$":', options: ['$9w$', '$w - 9$', '$\\frac{w}{9}$', '$w + 9$'] },
          ],
          correctAnswers: ['$n + 6$', '$k - 4$', '$2p$', '$\\frac{w}{9}$'],
          hint1: '"Sum" means add; "less than" subtracts and flips the order.',
          hint2: '"Twice" means multiply by $2$.',
          hint3: '"Divided by" means a fraction with the number on the bottom.',
          explanation: 'Sum → $n+6$; "$4$ less than $k$" → $k-4$ (flip!); twice $p$ → $2p$; $w$ divided by $9$ → $\\frac{w}{9}$.',
        },
      },
      {
        id: 'wee2-write-input',
        type: 'input-boxes' as const,
        content: `**Build the Expression** 🧮

Write each as an expression using the variable shown. Type it with no spaces (for example: \`2x+5\`).

**1)** "$10$ more than a number $x$"
**2)** "$3$ less than a number $y$"
**3)** "the product of $6$ and a number $z$"`,
        exercise: {
          boxes: 3,
          correctAnswers: ['x+10', 'y-3', '6z'],
          hint1: '"More than" adds: a number plus $10$.',
          hint2: '"Less than" flips: subtract $3$ from $y$, so $y$ comes first.',
          hint3: '"Product" means multiply: write the number next to the variable, like $6z$.',
          explanation: '1) $x + 10$. 2) $y - 3$ (the "less than" amount goes second). 3) $6z$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'writing-evaluating-expressions-grade6',
    sections: [
      {
        id: 'wee3-intro',
        type: 'text' as const,
        content: `# 🧩 Writing and Evaluating Expressions

**Part 3 of 5 — Evaluating Expressions**

---

> 🔑 **The Big Idea:** To **evaluate** an expression means to plug in a number for each variable and calculate the result. "$x = 4$" means "wherever you see $x$, write $4$."`,
      },
      {
        id: 'wee3-substitute',
        type: 'text' as const,
        content: `## Substitution: Swap the Variable for a Number

To evaluate $\\;3x + 5\\;$ when $x = 4$:

1. **Replace** every $x$ with $4$: $\\;3(4) + 5$
2. **Multiply** first: $\\;12 + 5$
3. **Add**: $\\;17$

$$3x + 5 \\;\\text{ at }\\; x = 4 \\;=\\; 3(4) + 5 = 12 + 5 = 17$$

> ⚠️ **Hidden multiplication:** $3x$ means $3 \\times x$. After you substitute, write $3(4)$ and **multiply** — don't accidentally write $34$. The number next to a variable is always a *times*.`,
      },
      {
        id: 'wee3-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $2x + 6$ when $x = 5$.',
              options: ['$16$', '$13$', '$26$', '$11$'],
              correctAnswer: 0,
              explanation: '$2x + 6 = 2(5) + 6 = 10 + 6 = 16$. Multiply before you add.',
            },
            {
              question: 'Evaluate $\\frac{n}{3}$ when $n = 21$.',
              options: ['$63$', '$24$', '$7$', '$18$'],
              correctAnswer: 2,
              explanation: '$\\frac{n}{3} = \\frac{21}{3} = 7$. The fraction bar means divide $21$ by $3$.',
            },
          ],
        },
      },
      {
        id: 'wee3-order-ops',
        type: 'text' as const,
        content: `## Use the Order of Operations

After you substitute, follow **PEMDAS** to finish:

| Step | Stands for |
|------|------------|
| **P** | Parentheses (grouping symbols) |
| **E** | Exponents |
| **MD** | Multiply & Divide — left to right |
| **AS** | Add & Subtract — left to right |

### Worked Example: $\\;4a^2 - 7\\;$ when $a = 3$

$$4a^2 - 7 = 4(3)^2 - 7$$

Do the **exponent** first: $3^2 = 9$.

$$= 4(9) - 7 = 36 - 7 = 29$$

> 💡 **Order matters:** $4(3)^2$ is **not** $(4 \\cdot 3)^2$. The exponent only touches the $3$, so square *first*, then multiply by $4$.`,
      },
      {
        id: 'wee3-pemdas-input',
        type: 'input-boxes' as const,
        content: `**Evaluate Carefully** 🧮

Follow the order of operations. Enter each numeric answer.

**1)** $5x - 2$ when $x = 6$
**2)** $\\dfrac{m}{4} + 9$ when $m = 12$
**3)** $2n^2$ when $n = 5$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28', '12', '50'],
          hint1: '$5x - 2 = 5(6) - 2$. Multiply, then subtract.',
          hint2: '$\\frac{12}{4} = 3$, then add $9$.',
          hint3: 'Square first: $5^2 = 25$, then $2 \\times 25$.',
          explanation: '1) $5(6) - 2 = 30 - 2 = 28$. 2) $\\frac{12}{4} + 9 = 3 + 9 = 12$. 3) $2(5)^2 = 2(25) = 50$.',
        },
      },
      {
        id: 'wee3-two-var',
        type: 'multiple-choice' as const,
        content: `**Two Variables** 🎯

Some expressions have more than one variable. Substitute **each** one.`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $3a + 2b$ when $a = 4$ and $b = 5$.',
              options: ['$22$', '$14$', '$45$', '$17$'],
              correctAnswer: 0,
              explanation: '$3a + 2b = 3(4) + 2(5) = 12 + 10 = 22$.',
            },
            {
              question: 'Evaluate $xy - 6$ when $x = 7$ and $y = 2$.',
              options: ['$1$', '$8$', '$72$', '$14$'],
              correctAnswer: 1,
              explanation: '$xy$ means $x \\cdot y = 7 \\cdot 2 = 14$. Then $14 - 6 = 8$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'writing-evaluating-expressions-grade6',
    sections: [
      {
        id: 'wee4-intro',
        type: 'text' as const,
        content: `# 🧩 Writing and Evaluating Expressions

**Part 4 of 5 — Real-World Expressions**

---

> 🔑 **Why This Matters:** Expressions describe real situations — money saved, distance traveled, items bought. When the situation can change (the "how many" is unknown), we use a **variable** to hold its place.`,
      },
      {
        id: 'wee4-model',
        type: 'text' as const,
        content: `## Modeling a Situation

Pick a variable for the unknown, then build the expression around it.

### Example: Buying Notebooks

Notebooks cost \\$3 each, and you also pay a flat \\$2 shipping fee. Write an expression for the total cost of $n$ notebooks.

- Cost of notebooks: $3n$ (\\$3 times how many)
- Plus shipping: $+\\,2$

$$\\text{Total cost} = 3n + 2$$

How much for **5** notebooks? Evaluate at $n = 5$:

$$3(5) + 2 = 15 + 2 = 17 \\;\\text{dollars}$$

> 💡 **Two pieces, two parts:** A "cost per item" becomes a **coefficient** ($3n$), and a one-time flat fee becomes a **constant** ($+2$).`,
      },
      {
        id: 'wee4-model-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Situation** 🔽

A gym charges a \\$20 sign-up fee plus \\$15 each month. Let $m$ be the number of months.`,
        exercise: {
          dropdowns: [
            { label: 'The cost of the monthly part is:', options: ['$20m$', '$15m$', '$15 + m$', '$\\frac{15}{m}$'] },
            { label: 'The one-time sign-up fee is the:', options: ['coefficient', 'variable', 'constant', 'exponent'] },
            { label: 'The full expression for total cost is:', options: ['$15m + 20$', '$20m + 15$', '$35m$', '$15 + 20 + m$'] },
          ],
          correctAnswers: ['$15m$', 'constant', '$15m + 20$'],
          hint1: '\\$15 *each month* means $15$ times the number of months, $m$.',
          hint2: 'A one-time fee that never changes is a constant.',
          hint3: 'Combine the monthly part $15m$ with the flat fee $20$: $15m + 20$.',
          explanation: 'Monthly cost is $15m$; the \\$20 sign-up is a constant; total cost is $15m + 20$.',
        },
      },
      {
        id: 'wee4-evaluate-context',
        type: 'input-boxes' as const,
        content: `**Use Your Expression** 🧮

A taxi charges a \\$4 base fare plus \\$2 per mile. The cost for $d$ miles is $\\;2d + 4\\;$ dollars.

**1)** What is the cost for $d = 6$ miles?  *(dollars)*
**2)** What is the cost for $d = 10$ miles?  *(dollars)*
**3)** What is the base fare (the cost for $d = 0$ miles)?  *(dollars)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '24', '4'],
          hint1: '$2d + 4 = 2(6) + 4$.',
          hint2: '$2(10) + 4 = 20 + 4$.',
          hint3: 'At $d = 0$: $2(0) + 4 = 0 + 4$, which is just the base fare.',
          explanation: '1) $2(6) + 4 = 16$. 2) $2(10) + 4 = 24$. 3) $2(0) + 4 = 4$ (only the base fare is left).',
        },
      },
      {
        id: 'wee4-write-context',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A book costs \\$12. Which expression gives the cost of $b$ books?',
              options: ['$12 + b$', '$12b$', '$b - 12$', '$\\frac{b}{12}$'],
              correctAnswer: 1,
              explanation: '\\$12 *each* means $12$ times the number of books: $12b$.',
            },
            {
              question: 'Maya had $s$ stickers and gave away $4$. Which expression shows how many she has left?',
              options: ['$s + 4$', '$4 - s$', '$s - 4$', '$4s$'],
              correctAnswer: 2,
              explanation: 'Giving away $4$ means subtracting $4$ from what she had: $s - 4$.',
            },
            {
              question: 'You split $p$ pizzas equally among $6$ friends. Which expression shows each friend\'s share?',
              options: ['$6p$', '$p - 6$', '$p + 6$', '$\\frac{p}{6}$'],
              correctAnswer: 3,
              explanation: '"Split equally among $6$" means divide by $6$: $\\frac{p}{6}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'writing-evaluating-expressions-grade6',
    sections: [
      {
        id: 'wee5-intro',
        type: 'text' as const,
        content: `# 🧩 Writing and Evaluating Expressions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name the parts of an expression, (2) translate words into expressions, (3) evaluate by substituting, and (4) model real situations. Let's put it all together.`,
      },
      {
        id: 'wee5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find the **coefficient** | the number multiplied by a variable (in $7x$ it's $7$) |
| Find the **constant** | the number standing alone (in $7x + 4$ it's $4$) |
| "$a$ less than $b$" | $b - a$ (flip the order!) |
| Evaluate an expression | substitute, then follow **PEMDAS** |
| Model "cost per item + fee" | $(\\text{rate})\\cdot x + (\\text{fee})$ |

> ⚠️ **Top traps:** "$5$ less than $x$" is $x - 5$ (not $5 - x$); $3x$ means $3 \\times x$ (not $34$ after subbing $4$); and exponents come **before** multiplication in PEMDAS.`,
      },
      {
        id: 'wee5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $9k + 2$, the coefficient is:',
              options: ['$9$', '$k$', '$2$', '$11$'],
              correctAnswer: 0,
              explanation: 'The coefficient is the number multiplied by the variable. In $9k$, that number is $9$.',
            },
            {
              question: 'Write "$6$ less than a number $t$" as an expression.',
              options: ['$6 - t$', '$t - 6$', '$t + 6$', '$6t$'],
              correctAnswer: 1,
              explanation: '"Less than" flips the order: subtract $6$ from $t$, giving $t - 6$.',
            },
            {
              question: 'Evaluate $4x - 3$ when $x = 5$.',
              options: ['$17$', '$23$', '$12$', '$8$'],
              correctAnswer: 0,
              explanation: '$4(5) - 3 = 20 - 3 = 17$. Multiply first, then subtract.',
            },
          ],
        },
      },
      {
        id: 'wee5-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluation Drill** 🧮

Substitute and follow the order of operations. Enter each numeric answer.

**1)** $7x + 1$ when $x = 3$
**2)** $\\dfrac{n}{5} - 2$ when $n = 30$
**3)** $a^2 + 4$ when $a = 6$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['22', '4', '40'],
          hint1: '$7(3) + 1 = 21 + 1$.',
          hint2: '$\\frac{30}{5} = 6$, then subtract $2$.',
          hint3: 'Square first: $6^2 = 36$, then add $4$.',
          explanation: '1) $7(3) + 1 = 22$. 2) $\\frac{30}{5} - 2 = 6 - 2 = 4$. 3) $6^2 + 4 = 36 + 4 = 40$.',
        },
      },
      {
        id: 'wee5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How many terms are in the expression $5x - 3y + 8$?',
              options: ['$1$', '$2$', '$3$', '$4$'],
              correctAnswer: 2,
              explanation: 'Terms are separated by $+$ and $-$: $5x$, $3y$, and $8$ — that\'s **3** terms.',
            },
            {
              question: 'Which expression means "the quotient of a number $n$ and $8$"?',
              options: ['$8n$', '$n - 8$', '$\\frac{n}{8}$', '$n + 8$'],
              correctAnswer: 2,
              explanation: '"Quotient" means divide. $n$ divided by $8$ is $\\frac{n}{8}$.',
            },
            {
              question: 'Evaluate $2x^2 + 1$ when $x = 3$.',
              options: ['$19$', '$37$', '$13$', '$10$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $3^2 = 9$. Then $2(9) + 1 = 18 + 1 = 19$.',
            },
          ],
        },
      },
    ],
  },
]
