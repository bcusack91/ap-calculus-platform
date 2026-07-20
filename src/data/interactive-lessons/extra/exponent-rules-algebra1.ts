import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Exponent Rules (Algebra 1).
 * Registry key / DB Topic.slug: 'exponent-rules-algebra1'.
 * 5 parts, gold-standard structure: meaning of exponents → product/quotient/power
 * rules → zero & negative exponents → combining everything (scientific notation
 * preview) → mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every simplification was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponent-rules-algebra1',
    sections: [
      {
        id: 'exp1-intro',
        type: 'text' as const,
        content: `# ⚡ Exponent Rules

**Part 1 of 5 — What an Exponent Really Means**

---

### Topics in This Part

| Section |
|---------|
| Base, Exponent, and Repeated Multiplication |
| Expanding Powers |
| Why the Rules Even Exist |

> 🔑 **Key Concept:** Every exponent rule is just a shortcut for repeated multiplication. If you ever forget a rule, expand the power and the rule reappears on its own.`,
      },
      {
        id: 'exp1-meaning',
        type: 'text' as const,
        content: `## Base, Exponent, and Repeated Multiplication

A **power** like $a^n$ is shorthand for multiplying the **base** $a$ by itself $n$ times:

$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ factors}}$$

- The **base** $a$ is the number being multiplied.
- The **exponent** $n$ counts *how many factors* of the base there are.

### Examples

| Power | Expanded | Value |
|-------|----------|-------|
| $2^3$ | $2 \\cdot 2 \\cdot 2$ | $8$ |
| $5^2$ | $5 \\cdot 5$ | $25$ |
| $3^4$ | $3 \\cdot 3 \\cdot 3 \\cdot 3$ | $81$ |
| $x^5$ | $x \\cdot x \\cdot x \\cdot x \\cdot x$ | $x^5$ |

> ⚠️ **Watch the language:** $2^3$ is "$2$ to the third power" $= 8$. It is **not** $2 \\cdot 3 = 6$. The exponent tells you how many times to *multiply*, not what to multiply by.`,
      },
      {
        id: 'exp1-eval-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $4^3$ equal?',
              options: ['$12$', '$64$', '$7$', '$81$'],
              correctAnswer: 1,
              explanation: '$4^3 = 4 \\cdot 4 \\cdot 4 = 16 \\cdot 4 = 64$. (It is not $4 \\cdot 3 = 12$.)',
            },
            {
              question: 'In the power $7^2$, which number is the exponent?',
              options: ['$7$', '$2$', '$14$', '$49$'],
              correctAnswer: 1,
              explanation: 'The exponent is the small raised number, $2$. The base is $7$, and the value is $7^2 = 49$.',
            },
          ],
        },
      },
      {
        id: 'exp1-eval-tip',
        type: 'text' as const,
        content: `## Evaluating a Power, Step by Step

To turn a power into a single number, just multiply the base by itself the right number of times — and it's safest to do it **two factors at a time**:

$$2^4 = \\underbrace{2 \\cdot 2}_{4} \\cdot 2 \\cdot 2 = 4 \\cdot 2 \\cdot 2 = 8 \\cdot 2 = 16$$

> 💡 **Powers of 10 are special.** $10^n$ is always a $1$ followed by $n$ zeros: $10^3 = 1000$, $10^6 = 1{,}000{,}000$. You'll use this constantly in scientific notation (Part 4).

Try a few yourself.`,
      },
      {
        id: 'exp1-expand-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate Each Power** 🧮

Write each power as a single number.

**1)** $2^5 = \\,?$
**2)** $10^3 = \\,?$
**3)** $3^3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32', '1000', '27'],
          hint1: '$2^5 = 2\\cdot2\\cdot2\\cdot2\\cdot2$. Multiply two at a time: $4, 8, 16, 32$.',
          hint2: '$10^3 = 10\\cdot10\\cdot10$. A power of $10$ is a $1$ followed by that many zeros.',
          hint3: '$3^3 = 3\\cdot3\\cdot3 = 9\\cdot3 = 27$.',
          explanation: '1) $2^5 = 32$.  2) $10^3 = 1000$.  3) $3^3 = 27$.',
        },
      },
      {
        id: 'exp1-why',
        type: 'text' as const,
        content: `## Why the Rules Exist

Suppose you multiply $x^2 \\cdot x^3$. Expand both powers:

$$x^2 \\cdot x^3 = (x \\cdot x)(x \\cdot x \\cdot x) = x \\cdot x \\cdot x \\cdot x \\cdot x = x^5$$

You ended up with **5** factors of $x$ — and $5 = 2 + 3$. That is exactly the **product rule** you'll meet in Part 2.

> 💡 **The whole point:** Instead of expanding every time, you just *track how many factors of the base you have.* Adding, subtracting, or multiplying the exponents does the counting for you.

In Part 2 we turn this counting idea into three fast rules: **product**, **quotient**, and **power of a power**.`,
      },
      {
        id: 'exp1-expand-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Power to Its Meaning** 🔽

Before moving on, connect each power to what it stands for.`,
        exercise: {
          dropdowns: [
            { label: '$6^2$ means:', options: ['$6 \\cdot 6$', '$6 \\cdot 2$', '$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$', '$6 + 6$'] },
            { label: '$x^4$ means:', options: ['$x \\cdot x \\cdot x \\cdot x$', '$4x$', '$x + x + x + x$', '$4^x$'] },
            { label: 'The base in $9^5$ is:', options: ['$9$', '$5$', '$45$', '$14$'] },
          ],
          correctAnswers: ['$6 \\cdot 6$', '$x \\cdot x \\cdot x \\cdot x$', '$9$'],
          hint1: 'The exponent counts factors of the base; $6^2$ has two factors of $6$.',
          hint2: '$x^4$ is four factors of $x$ multiplied — not $4$ times $x$.',
          hint3: 'The base is the number being repeatedly multiplied; the exponent ($5$) just counts.',
          explanation: '$6^2 = 6\\cdot 6$;  $x^4 = x\\cdot x\\cdot x\\cdot x$;  the base of $9^5$ is $9$. The exponent counts factors of the base.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponent-rules-algebra1',
    sections: [
      {
        id: 'exp2-intro',
        type: 'text' as const,
        content: `# ⚡ Exponent Rules

**Part 2 of 5 — Product, Quotient & Power Rules**

---

> 🔑 **The Big Three:** When the bases match, *multiplying* powers **adds** exponents, *dividing* powers **subtracts** them, and *raising a power to a power* **multiplies** them.`,
      },
      {
        id: 'exp2-product-quotient',
        type: 'text' as const,
        content: `## The Product and Quotient Rules

**Product Rule** — multiply same-base powers by **adding** exponents:

$$a^m \\cdot a^n = a^{m+n}$$

**Quotient Rule** — divide same-base powers by **subtracting** exponents:

$$\\frac{a^m}{a^n} = a^{m-n}$$

### Examples

| Expression | Rule | Result |
|------------|------|--------|
| $x^4 \\cdot x^3$ | add: $4+3$ | $x^7$ |
| $2^5 \\cdot 2^2$ | add: $5+2$ | $2^7$ |
| $\\dfrac{x^8}{x^3}$ | subtract: $8-3$ | $x^5$ |
| $\\dfrac{y^6}{y^6}$ | subtract: $6-6$ | $y^0 = 1$ |

> ⚠️ **Same base required!** $x^3 \\cdot y^2$ does **not** simplify — the bases $x$ and $y$ are different, so you cannot add the exponents. It stays $x^3 y^2$.`,
      },
      {
        id: 'exp2-pq-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $x^6 \\cdot x^4$.',
              options: ['$x^{24}$', '$x^{10}$', '$x^2$', '$2x^{10}$'],
              correctAnswer: 1,
              explanation: 'Product rule: same base, so add the exponents. $x^6 \\cdot x^4 = x^{6+4} = x^{10}$.',
            },
            {
              question: 'Simplify $\\dfrac{a^9}{a^2}$.',
              options: ['$a^7$', '$a^{11}$', '$a^{4.5}$', '$a^{18}$'],
              correctAnswer: 0,
              explanation: 'Quotient rule: subtract the exponents. $\\dfrac{a^9}{a^2} = a^{9-2} = a^7$.',
            },
          ],
        },
      },
      {
        id: 'exp2-power-rules',
        type: 'text' as const,
        content: `## The Power Rules

**Power of a Power** — raise a power to a power by **multiplying** exponents:

$$\\left(a^m\\right)^n = a^{m \\cdot n}$$

**Power of a Product** — an exponent on a product hits **every factor**:

$$\\left(ab\\right)^n = a^n \\, b^n$$

**Power of a Quotient** — an exponent on a fraction hits top and bottom:

$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

### Examples

$$\\left(x^3\\right)^4 = x^{3 \\cdot 4} = x^{12}$$

$$\\left(2x\\right)^3 = 2^3 x^3 = 8x^3$$

$$\\left(\\frac{x}{4}\\right)^2 = \\frac{x^2}{16}$$

> ⚠️ **Don't drop the coefficient's exponent.** $\\left(2x\\right)^3 = 8x^3$, *not* $2x^3$. The $2$ gets cubed too.`,
      },
      {
        id: 'exp2-power-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Rule** 🔽

Choose the correct simplification for each expression.`,
        exercise: {
          dropdowns: [
            { label: '$\\left(y^2\\right)^5 =$', options: ['$y^{10}$', '$y^7$', '$y^3$', '$y^{25}$'] },
            { label: '$\\left(3a\\right)^2 =$', options: ['$9a^2$', '$3a^2$', '$6a^2$', '$9a$'] },
            { label: '$\\left(\\dfrac{x}{2}\\right)^3 =$', options: ['$\\dfrac{x^3}{8}$', '$\\dfrac{x^3}{6}$', '$\\dfrac{x}{8}$', '$\\dfrac{3x}{2}$'] },
          ],
          correctAnswers: ['$y^{10}$', '$9a^2$', '$\\dfrac{x^3}{8}$'],
          hint1: 'Power of a power: multiply exponents. $2 \\cdot 5 = 10$.',
          hint2: 'Power of a product: square *both* factors. $3^2 = 9$ and $a^2$.',
          hint3: 'Power of a quotient: cube top and bottom. $x^3$ over $2^3 = 8$.',
          explanation: '$\\left(y^2\\right)^5 = y^{10}$;  $\\left(3a\\right)^2 = 9a^2$;  $\\left(\\dfrac{x}{2}\\right)^3 = \\dfrac{x^3}{8}$.',
        },
      },
      {
        id: 'exp2-recap',
        type: 'text' as const,
        content: `## Quick Recap Before You Drill

Here are the three same-base moves side by side. Notice how the **operation on the powers** controls the **operation on the exponents**:

| You see | Operation | Exponents |
|---------|-----------|-----------|
| $a^m \\cdot a^n$ | multiply powers | **add** |
| $\\dfrac{a^m}{a^n}$ | divide powers | **subtract** |
| $\\left(a^m\\right)^n$ | power of a power | **multiply** |

> 🔑 **Memory hook:** multiplying powers is "easier" so you do the *easier* operation (add); a power *of* a power is "double work," so you *multiply*.

Now lock it in.`,
      },
      {
        id: 'exp2-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Rules** 🧮

Enter the missing **exponent** (just the number).

**1)** $x^3 \\cdot x^7 = x^{\\,?}$
**2)** $\\dfrac{m^{10}}{m^4} = m^{\\,?}$
**3)** $\\left(p^4\\right)^3 = p^{\\,?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '6', '12'],
          hint1: 'Product rule adds: $3 + 7 = 10$.',
          hint2: 'Quotient rule subtracts: $10 - 4 = 6$.',
          hint3: 'Power of a power multiplies: $4 \\cdot 3 = 12$.',
          explanation: '1) $x^{3+7} = x^{10}$.  2) $m^{10-4} = m^6$.  3) $p^{4\\cdot 3} = p^{12}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponent-rules-algebra1',
    sections: [
      {
        id: 'exp3-intro',
        type: 'text' as const,
        content: `# ⚡ Exponent Rules

**Part 3 of 5 — Zero & Negative Exponents**

---

> 🔑 **The Pattern:** Each step *down* in exponent divides by the base. Following that pattern past $a^1$ forces $a^0 = 1$, and past $a^0$ forces negative exponents to mean reciprocals.`,
      },
      {
        id: 'exp3-zero',
        type: 'text' as const,
        content: `## The Zero Exponent

Look at the descending pattern of powers of $2$ — each row divides by $2$:

| Power | Value |
|-------|-------|
| $2^3$ | $8$ |
| $2^2$ | $4$ |
| $2^1$ | $2$ |
| $2^0$ | $1$ |

The pattern *demands* that $2^0 = 1$. This works for any nonzero base:

$$a^0 = 1 \\quad (a \\ne 0)$$

You can also see it from the quotient rule: $\\dfrac{a^5}{a^5} = a^{5-5} = a^0$, but any nonzero number over itself is $1$.

> 💡 **Quick fact:** $5^0 = 1$, $(-3)^0 = 1$, $(100x)^0 = 1$. Anything nonzero raised to the $0$ power is just $1$.`,
      },
      {
        id: 'exp3-zero-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $7^0$?',
              options: ['$0$', '$1$', '$7$', 'undefined'],
              correctAnswer: 1,
              explanation: 'Any nonzero base to the zero power equals $1$, so $7^0 = 1$.',
            },
            {
              question: 'Simplify $\\dfrac{x^4}{x^4}$ using the quotient rule.',
              options: ['$x^0 = 1$', '$x^8$', '$0$', '$x$'],
              correctAnswer: 0,
              explanation: 'Subtract exponents: $\\dfrac{x^4}{x^4} = x^{4-4} = x^0 = 1$.',
            },
          ],
        },
      },
      {
        id: 'exp3-negative',
        type: 'text' as const,
        content: `## Negative Exponents

Continue the pattern past $2^0$ — keep dividing by $2$:

| Power | Value |
|-------|-------|
| $2^1$ | $2$ |
| $2^0$ | $1$ |
| $2^{-1}$ | $\\dfrac{1}{2}$ |
| $2^{-2}$ | $\\dfrac{1}{4}$ |

A **negative exponent means reciprocal** — flip the base to make the exponent positive:

$$a^{-n} = \\frac{1}{a^n} \\qquad\\text{and}\\qquad \\frac{1}{a^{-n}} = a^n$$

### Examples

$$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} \\qquad x^{-5} = \\frac{1}{x^5} \\qquad \\frac{1}{y^{-3}} = y^3$$

> ⚠️ **A negative exponent does *not* make a number negative.** $3^{-2} = \\dfrac{1}{9}$, a *positive* fraction — not $-9$.`,
      },
      {
        id: 'exp3-neg-dropdown',
        type: 'dropdown-select' as const,
        content: `**Rewrite With Positive Exponents** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$5^{-2} =$', options: ['$\\dfrac{1}{25}$', '$-25$', '$-10$', '$25$'] },
            { label: '$x^{-3} =$', options: ['$\\dfrac{1}{x^3}$', '$-x^3$', '$x^3$', '$-\\dfrac{1}{x^3}$'] },
            { label: '$\\dfrac{1}{a^{-4}} =$', options: ['$a^4$', '$\\dfrac{1}{a^4}$', '$-a^4$', '$-\\dfrac{1}{a^4}$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{25}$', '$\\dfrac{1}{x^3}$', '$a^4$'],
          hint1: '$5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$ — a positive fraction.',
          hint2: 'A negative exponent flips the base: $x^{-3} = \\dfrac{1}{x^3}$.',
          hint3: 'A negative exponent in the denominator flips up: $\\dfrac{1}{a^{-4}} = a^4$.',
          explanation: '$5^{-2} = \\dfrac{1}{25}$;  $x^{-3} = \\dfrac{1}{x^3}$;  $\\dfrac{1}{a^{-4}} = a^4$. Negative exponents mean reciprocals, never negatives.',
        },
      },
      {
        id: 'exp3-eval-tip',
        type: 'text' as const,
        content: `## Turning a Negative Exponent Into a Number

To evaluate something like $2^{-3}$, do it in two clean steps:

1. **Flip** to a reciprocal to make the exponent positive: $2^{-3} = \\dfrac{1}{2^3}$.
2. **Evaluate** the positive power: $2^3 = 8$, so $2^{-3} = \\dfrac{1}{8}$.

For powers of $10$, a negative exponent moves the decimal *left*: $10^{-2} = \\dfrac{1}{100} = 0.01$.

> ⚠️ Don't let the minus sign migrate to the answer. $2^{-3} = +\\dfrac{1}{8}$, never $-8$ or $-\\dfrac{1}{8}$.

Now evaluate a few.`,
      },
      {
        id: 'exp3-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate** 🧮

Enter each value. Use a fraction like \`1/16\` where needed.

**1)** $4^0 = \\,?$
**2)** $2^{-3} = \\,?$  *(fraction)*
**3)** $10^{-2} = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/8', '0.01'],
          hint1: 'Any nonzero base to the zero power is $1$.',
          hint2: '$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$.',
          hint3: '$10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100} = 0.01$.',
          explanation: '1) $4^0 = 1$.  2) $2^{-3} = \\dfrac{1}{8}$.  3) $10^{-2} = \\dfrac{1}{100} = 0.01$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponent-rules-algebra1',
    sections: [
      {
        id: 'exp4-intro',
        type: 'text' as const,
        content: `# ⚡ Exponent Rules

**Part 4 of 5 — Combining the Rules**

---

> 🔑 **Strategy:** Real problems stack the rules. Work from the **inside out** — handle parentheses first (power rules), then combine same-base factors (product/quotient), and finally clear any negative exponents.`,
      },
      {
        id: 'exp4-summary',
        type: 'text' as const,
        content: `## All the Rules in One Place

| Rule | Formula |
|------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ |
| Quotient | $\\dfrac{a^m}{a^n} = a^{m-n}$ |
| Power of a power | $\\left(a^m\\right)^n = a^{mn}$ |
| Power of a product | $(ab)^n = a^n b^n$ |
| Zero exponent | $a^0 = 1$ |
| Negative exponent | $a^{-n} = \\dfrac{1}{a^n}$ |

> 💡 **Order of operations still rules everything.** Inside parentheses and exponents come *before* the multiplying and dividing you do to combine terms.`,
      },
      {
        id: 'exp4-which-rule',
        type: 'multiple-choice' as const,
        content: `**Which Rule?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To simplify $\\left(x^4\\right)^5$, which rule do you use, and what is the result?',
              options: ['Power of a power → $x^{20}$', 'Product rule → $x^9$', 'Quotient rule → $x^{-1}$', 'Power of a power → $x^{9}$'],
              correctAnswer: 0,
              explanation: 'A power raised to a power: multiply the exponents. $\\left(x^4\\right)^5 = x^{4\\cdot 5} = x^{20}$.',
            },
            {
              question: 'To simplify $b^8 \\cdot b^2$, which rule applies, and what is the result?',
              options: ['Product rule → $b^{10}$', 'Power of a power → $b^{16}$', 'Quotient rule → $b^6$', 'Product rule → $b^{16}$'],
              correctAnswer: 0,
              explanation: 'Same base, multiplied → product rule, so **add** exponents: $b^{8+2} = b^{10}$.',
            },
          ],
        },
      },
      {
        id: 'exp4-worked',
        type: 'text' as const,
        content: `## Worked Example: $\\left(2x^3\\right)^2 \\cdot x^4$

**Step 1 — power of a product** (apply the outer exponent $2$ to each factor inside):

$$\\left(2x^3\\right)^2 = 2^2 \\cdot \\left(x^3\\right)^2 = 4x^6$$

**Step 2 — product rule** (multiply by $x^4$, add the exponents):

$$4x^6 \\cdot x^4 = 4x^{6+4} = 4x^{10}$$

### Worked Example: $\\dfrac{6x^5}{2x^2}$

**Step 1 — divide the coefficients:** $\\dfrac{6}{2} = 3$.

**Step 2 — quotient rule on the variables:** $\\dfrac{x^5}{x^2} = x^{5-2} = x^3$.

$$\\frac{6x^5}{2x^2} = 3x^3$$

> ⚠️ Coefficients (the plain numbers) get *divided*, not subtracted. Only the **exponents** get subtracted.`,
      },
      {
        id: 'exp4-combine-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\left(3x^2\\right)^2$.',
              options: ['$9x^4$', '$6x^4$', '$3x^4$', '$9x^2$'],
              correctAnswer: 0,
              explanation: 'Square each factor: $3^2 = 9$ and $\\left(x^2\\right)^2 = x^4$, giving $9x^4$.',
            },
            {
              question: 'Simplify $\\dfrac{12y^7}{4y^3}$.',
              options: ['$3y^4$', '$8y^4$', '$3y^{10}$', '$48y^{10}$'],
              correctAnswer: 0,
              explanation: 'Divide coefficients $12/4 = 3$; subtract exponents $7 - 3 = 4$. Result: $3y^4$.',
            },
          ],
        },
      },
      {
        id: 'exp4-sci-notation',
        type: 'text' as const,
        content: `## A Preview: Scientific Notation

Exponent rules power **scientific notation**, where numbers are written as $c \\times 10^n$ with $1 \\le c < 10$.

- $3 \\times 10^4 = 3 \\times 10000 = 30{,}000$
- $7.2 \\times 10^{-3} = \\dfrac{7.2}{1000} = 0.0072$

To **multiply** them, multiply the front numbers and **add** the exponents (product rule!):

$$\\left(2 \\times 10^3\\right)\\left(4 \\times 10^5\\right) = (2\\cdot 4) \\times 10^{3+5} = 8 \\times 10^8$$

> 💡 This is the same product rule from Part 2 — scientists just lean on it constantly to handle very large and very small numbers.`,
      },
      {
        id: 'exp4-drill',
        type: 'input-boxes' as const,
        content: `**Simplify Completely** 🧮

For each, enter the **coefficient** and the **exponent** of $x$.

**1)** $\\left(2x^4\\right)^3 = \\,?\\;x^{\\,?}$  *(coefficient, then exponent)*
**2)** $\\dfrac{15x^9}{5x^4} = \\,?\\;x^{\\,?}$  *(coefficient, then exponent)*`,
        exercise: {
          boxes: 4,
          correctAnswers: ['8', '12', '3', '5'],
          hint1: '$\\left(2x^4\\right)^3 = 2^3 \\cdot x^{4\\cdot 3} = 8x^{12}$.',
          hint2: 'Coefficient: $2^3 = 8$. Exponent: $4 \\cdot 3 = 12$.',
          hint3: 'For #2: coefficients $15/5 = 3$; exponents $9 - 4 = 5$, giving $3x^5$.',
          explanation: '1) $\\left(2x^4\\right)^3 = 8x^{12}$ → boxes $8, 12$.  2) $\\dfrac{15x^9}{5x^4} = 3x^5$ → boxes $3, 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponent-rules-algebra1',
    sections: [
      {
        id: 'exp5-intro',
        type: 'text' as const,
        content: `# ⚡ Exponent Rules

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) expand and evaluate powers, (2) apply the product, quotient, and power rules, (3) handle zero and negative exponents, and (4) combine all of them in one expression. Time to put it together.`,
      },
      {
        id: 'exp5-reference',
        type: 'text' as const,
        content: `## Quick Reference & Common Traps

| Situation | Do this | Don't do this |
|-----------|---------|---------------|
| $x^3 \\cdot x^4$ | add → $x^7$ | multiply → $x^{12}$ |
| $\\dfrac{x^8}{x^2}$ | subtract → $x^6$ | divide → $x^4$ |
| $\\left(x^3\\right)^2$ | multiply → $x^6$ | add → $x^5$ |
| $(2x)^3$ | cube the $2$ → $8x^3$ | leave it → $2x^3$ |
| $x^0$ | $= 1$ | $= 0$ |
| $x^{-2}$ | $= \\dfrac{1}{x^2}$ | $= -x^2$ |

> ⚠️ The two most common errors: **multiplying exponents when you should add them**, and thinking a **negative exponent makes a negative number**. Watch both on the quiz.`,
      },
      {
        id: 'exp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $x^2 \\cdot x^5 \\cdot x$.',
              options: ['$x^8$', '$x^{10}$', '$x^7$', '$x^{11}$'],
              correctAnswer: 0,
              explanation: 'The lone $x$ is $x^1$. Add all exponents: $2 + 5 + 1 = 8$, so $x^8$.',
            },
            {
              question: 'Simplify $\\left(\\dfrac{x^3}{x}\\right)^2$.',
              options: ['$x^4$', '$x^6$', '$x^2$', '$x^8$'],
              correctAnswer: 0,
              explanation: 'Inside first: $\\dfrac{x^3}{x} = x^{3-1} = x^2$. Then $\\left(x^2\\right)^2 = x^4$.',
            },
          ],
        },
      },
      {
        id: 'exp5-strategy',
        type: 'text' as const,
        content: `## A Reliable Order of Attack

When an expression mixes several rules, work in this order every time:

1. **Parentheses / power rules first** — distribute any outer exponent: $\\left(2x^3\\right)^2 = 4x^6$.
2. **Combine same bases** — use product/quotient rules: $4x^6 \\cdot x^4 = 4x^{10}$.
3. **Clean up the answer** — make every exponent positive and simplify the coefficients.

> 💡 Following the same order every time is what turns "tricky" problems into routine ones. Use it on the next set.`,
      },
      {
        id: 'exp5-mixed-input',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** $\\left(x^5\\right)^2 \\cdot x^3 = x^{\\,?}$
**2)** $\\dfrac{a^3}{a^7} = a^{\\,?}$  *(negative exponent allowed)*
**3)** $\\left(4y\\right)^2 = \\,?\\;y^2$  *(just the coefficient)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '-4', '16'],
          hint1: '$\\left(x^5\\right)^2 = x^{10}$, then $x^{10}\\cdot x^3 = x^{13}$.',
          hint2: 'Quotient rule: $3 - 7 = -4$, so $a^{-4}$. The exponent is $-4$.',
          hint3: '$\\left(4y\\right)^2 = 4^2 y^2 = 16y^2$. Coefficient is $16$.',
          explanation: '1) $x^{10}\\cdot x^3 = x^{13}$.  2) $a^{3-7} = a^{-4}$.  3) $4^2 = 16$, so $16y^2$.',
        },
      },
      {
        id: 'exp5-final-recap',
        type: 'text' as const,
        content: `## You're Ready

Before the exit quiz, picture the four big ideas one last time:

- **Same base, multiplied → add** exponents; **divided → subtract**.
- **Power of a power → multiply** exponents; an outer exponent hits **every** factor, coefficients included.
- $a^0 = 1$ for any nonzero $a$.
- $a^{-n} = \\dfrac{1}{a^n}$ — a reciprocal, **not** a negative number.

> 🔑 Keep "add vs. multiply" straight and never let a negative exponent flip the *sign* — those two ideas catch the majority of mistakes.

Finish with the quiz below.`,
      },
      {
        id: 'exp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{y^{10}}{y^3}$.',
              options: ['$y^7$', '$y^{13}$', '$y^{30}$', '$y^{3.3}$'],
              correctAnswer: 0,
              explanation: 'Quotient rule subtracts exponents: $\\dfrac{y^{10}}{y^3} = y^{10-3} = y^7$.',
            },
            {
              question: 'What is $\\left(2a^3\\right)^4$?',
              options: ['$16a^{12}$', '$8a^{12}$', '$16a^{7}$', '$2a^{12}$'],
              correctAnswer: 0,
              explanation: 'Raise each factor to the 4th: $2^4 = 16$ and $\\left(a^3\\right)^4 = a^{12}$, giving $16a^{12}$.',
            },
            {
              question: 'Rewrite $3^{-2}$ with a positive exponent and evaluate.',
              options: ['$\\dfrac{1}{9}$', '$-9$', '$-6$', '$9$'],
              correctAnswer: 0,
              explanation: 'A negative exponent means reciprocal: $3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$ — a positive fraction.',
            },
          ],
        },
      },
    ],
  },
]
