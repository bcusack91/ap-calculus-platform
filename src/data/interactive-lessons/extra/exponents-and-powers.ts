import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Exponents and Powers (Pre-Algebra).
 * Registry key: 'exponents-and-powers' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponents-and-powers',
    sections: [
      {
        id: 'exp1-intro',
        type: 'text' as const,
        content: `# ⚡ Exponents and Powers

**Part 1 of 5 — What an Exponent Means**

---

### Topics in This Part

| Section |
|---------|
| Base, Exponent, and Power |
| Reading and Writing Powers |
| Powers of 10 |

> 🔑 **Key Concept:** An exponent is just a shortcut for **repeated multiplication**. Instead of writing $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$, we write $2^5$. Master this one idea and every rule that follows will make sense.`,
      },
      {
        id: 'exp1-base-exponent',
        type: 'text' as const,
        content: `## Base, Exponent, and Power

A **power** is made of two parts:

$$\\underbrace{5}_{\\text{base}}{}^{\\overbrace{3}^{\\text{exponent}}} = 5 \\cdot 5 \\cdot 5 = 125$$

- The **base** is the number being multiplied.
- The **exponent** (the small raised number) tells you **how many times** to use the base as a factor.
- The whole expression $5^3$ is called a **power**, and its value is $125$.

### How We Say It

| Power | Read aloud | Meaning | Value |
|-------|-----------|---------|-------|
| $5^3$ | "five cubed" or "five to the third" | $5 \\cdot 5 \\cdot 5$ | $125$ |
| $7^2$ | "seven squared" or "seven to the second" | $7 \\cdot 7$ | $49$ |
| $2^4$ | "two to the fourth" | $2 \\cdot 2 \\cdot 2 \\cdot 2$ | $16$ |
| $10^1$ | "ten to the first" | $10$ | $10$ |

> ⚠️ **Watch out:** $5^3$ does **not** mean $5 \\cdot 3 = 15$. The exponent is a count of *factors*, not a multiplier. $5^3 = 125$.`,
      },
      {
        id: 'exp1-vocab-check',
        type: 'dropdown-select' as const,
        content: `**Name the Parts** 🔽

In the power $4^6$, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The base is:', options: ['$4$', '$6$', '$24$', '$10$'] },
            { label: 'The exponent is:', options: ['$6$', '$4$', '$24$', '$2$'] },
            { label: '$4^6$ means:', options: ['$4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4$', '$4 \\cdot 6$', '$6 \\cdot 6 \\cdot 6 \\cdot 6$', '$4 + 4 + 4 + 4 + 4 + 4$'] },
          ],
          correctAnswers: ['$4$', '$6$', '$4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4$'],
          hint1: 'The base is the big number on the bottom that gets multiplied.',
          hint2: 'The exponent is the small raised number; it counts the factors.',
          hint3: '$4^6$ uses the base $4$ as a factor six times.',
          explanation: 'In $4^6$, the base is $4$ and the exponent is $6$, so $4^6 = 4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4$ (six fours). Exponents mean repeated multiplication, not addition or simple multiplication.',
        },
      },
      {
        id: 'exp1-evaluate',
        type: 'text' as const,
        content: `## Evaluating Small Powers

To **evaluate** a power, expand it into repeated multiplication and simplify:

$$2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 4 \\cdot 2 \\cdot 2 = 8 \\cdot 2 = 16$$

$$3^3 = 3 \\cdot 3 \\cdot 3 = 9 \\cdot 3 = 27$$

It helps to memorize a few common powers — they show up constantly:

| Squares | Value | | Cubes | Value |
|---------|-------|---|-------|-------|
| $2^2$ | $4$ | | $2^3$ | $8$ |
| $3^2$ | $9$ | | $3^3$ | $27$ |
| $4^2$ | $16$ | | $4^3$ | $64$ |
| $5^2$ | $25$ | | $5^3$ | $125$ |
| $6^2$ | $36$ | | $10^3$ | $1000$ |

> 💡 **Special cases:** Any number to the **first power** is itself ($9^1 = 9$), and any nonzero number to the **zero power** is $1$ ($9^0 = 1$). We'll prove why $a^0 = 1$ in Part 3.`,
      },
      {
        id: 'exp1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Powers** 🧮

Expand each power and give its value.

**1)** $3^4 = \\,?$
**2)** $5^3 = \\,?$
**3)** $2^6 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['81', '125', '64'],
          hint1: '$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3$. Multiply two at a time: $9 \\cdot 9$.',
          hint2: '$5^3 = 5 \\cdot 5 \\cdot 5 = 25 \\cdot 5$.',
          hint3: '$2^6 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$. Doubling: $2, 4, 8, 16, 32, 64$.',
          explanation: '1) $3^4 = 9 \\cdot 9 = 81$.  2) $5^3 = 25 \\cdot 5 = 125$.  3) $2^6 = 64$ (double six times from 1: $2,4,8,16,32,64$).',
        },
      },
      {
        id: 'exp1-powers-of-ten',
        type: 'text' as const,
        content: `## Powers of 10

Powers of $10$ are special: the exponent tells you **how many zeros** follow the $1$.

$$10^1 = 10 \\qquad 10^2 = 100 \\qquad 10^3 = 1000 \\qquad 10^6 = 1{,}000{,}000$$

| Power of 10 | Zeros | Value | Name |
|-------------|-------|-------|------|
| $10^2$ | $2$ | $100$ | hundred |
| $10^3$ | $3$ | $1000$ | thousand |
| $10^6$ | $6$ | $1{,}000{,}000$ | million |
| $10^9$ | $9$ | $1{,}000{,}000{,}000$ | billion |

This is the foundation of **place value** and **scientific notation** — that's why scientists write huge numbers like the speed of light as $3 \\times 10^8$ m/s instead of $300{,}000{,}000$.

> 🔑 **Quick rule:** $10^n$ is a $1$ followed by $n$ zeros.`,
      },
      {
        id: 'exp1-powers-ten-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many zeros does $10^5$ have when written out?',
              options: ['$5$', '$4$', '$6$', '$10$'],
              correctAnswer: 0,
              explanation: '$10^n$ is a $1$ followed by $n$ zeros, so $10^5 = 100{,}000$ — five zeros.',
            },
            {
              question: 'Which expression equals $1000$?',
              options: ['$10^3$', '$10^4$', '$3^{10}$', '$100^3$'],
              correctAnswer: 0,
              explanation: '$10^3 = 10 \\cdot 10 \\cdot 10 = 1000$. ($10^4 = 10{,}000$ has four zeros.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponents-and-powers',
    sections: [
      {
        id: 'exp2-intro',
        type: 'text' as const,
        content: `# ⚡ Exponents and Powers

**Part 2 of 5 — Multiplying and Dividing Powers**

---

> 🔑 **The Idea:** When the **bases match**, you can combine powers without expanding them. Multiplying *adds* exponents; dividing *subtracts* them. These two shortcuts save enormous amounts of work.`,
      },
      {
        id: 'exp2-product-rule',
        type: 'text' as const,
        content: `## The Product Rule: Add the Exponents

When you **multiply** powers with the **same base**, keep the base and **add** the exponents:

$$a^m \\cdot a^n = a^{m+n}$$

### Why It Works

Just count the factors. $2^3 \\cdot 2^2$ means three $2$'s times two $2$'s:

$$2^3 \\cdot 2^2 = \\underbrace{(2 \\cdot 2 \\cdot 2)}_{3} \\cdot \\underbrace{(2 \\cdot 2)}_{2} = 2^5$$

That's $3 + 2 = 5$ factors of $2$ in total. ✓

### Examples

| Product | Add exponents | Result |
|---------|--------------|--------|
| $x^4 \\cdot x^3$ | $4 + 3$ | $x^7$ |
| $5^2 \\cdot 5^6$ | $2 + 6$ | $5^8$ |
| $a \\cdot a^9$ | $1 + 9$ | $a^{10}$ |

> ⚠️ **Bases must match!** $x^3 \\cdot y^2$ does **not** simplify — the bases are different, so you just leave it as $x^3 y^2$.`,
      },
      {
        id: 'exp2-product-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $x^5 \\cdot x^2$.',
              options: ['$x^7$', '$x^{10}$', '$x^3$', '$2x^7$'],
              correctAnswer: 0,
              explanation: 'Same base, so add exponents: $x^{5+2} = x^7$. (You do NOT multiply the exponents.)',
            },
            {
              question: 'Which product can you NOT combine into a single power?',
              options: ['$a^3 \\cdot b^4$', '$a^3 \\cdot a^4$', '$7^2 \\cdot 7^5$', '$m \\cdot m^6$'],
              correctAnswer: 0,
              explanation: '$a^3 \\cdot b^4$ has different bases ($a$ and $b$), so it stays as $a^3 b^4$. The others all share a base and combine.',
            },
          ],
        },
      },
      {
        id: 'exp2-quotient-rule',
        type: 'text' as const,
        content: `## The Quotient Rule: Subtract the Exponents

When you **divide** powers with the **same base**, keep the base and **subtract** the exponents (top minus bottom):

$$\\frac{a^m}{a^n} = a^{m-n}$$

### Why It Works

Division cancels matching factors:

$$\\frac{2^5}{2^2} = \\frac{2 \\cdot 2 \\cdot 2 \\cdot \\cancel{2} \\cdot \\cancel{2}}{\\cancel{2} \\cdot \\cancel{2}} = 2^3$$

Two of the factors cancel, leaving $5 - 2 = 3$ factors. ✓

### Examples

| Quotient | Subtract exponents | Result |
|----------|-------------------|--------|
| $\\dfrac{x^8}{x^3}$ | $8 - 3$ | $x^5$ |
| $\\dfrac{7^6}{7^2}$ | $6 - 2$ | $7^4$ |
| $\\dfrac{y^{10}}{y}$ | $10 - 1$ | $y^9$ |

> 💡 Always go **top exponent minus bottom exponent**. Order matters — subtraction isn't reversible!`,
      },
      {
        id: 'exp2-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Rules** 🧮

Simplify each expression. Enter just the **exponent** of the result.

**1)** $x^6 \\cdot x^5 = x^{\\,?}$
**2)** $\\dfrac{a^9}{a^4} = a^{\\,?}$
**3)** $b^3 \\cdot b^3 \\cdot b^2 = b^{\\,?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '5', '8'],
          hint1: 'Multiplying with the same base: add. $6 + 5$.',
          hint2: 'Dividing with the same base: subtract top minus bottom. $9 - 4$.',
          hint3: 'Add all three exponents: $3 + 3 + 2$.',
          explanation: '1) $x^{6+5} = x^{11}$.  2) $a^{9-4} = a^5$.  3) $b^{3+3+2} = b^8$.',
        },
      },
      {
        id: 'exp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Rule** 🔽

For each expression, pick the correct simplified form.`,
        exercise: {
          dropdowns: [
            { label: '$5^3 \\cdot 5^4 =$', options: ['$5^7$', '$5^{12}$', '$25^7$', '$5^1$'] },
            { label: '$\\dfrac{10^8}{10^5} =$', options: ['$10^3$', '$10^{13}$', '$10^{40}$', '$1^3$'] },
            { label: '$m^7 \\cdot n^2 =$', options: ['$m^7 n^2$', '$mn^9$', '$(mn)^9$', '$m^{14}$'] },
          ],
          correctAnswers: ['$5^7$', '$10^3$', '$m^7 n^2$'],
          hint1: 'Multiplying same base $\\Rightarrow$ add: $3 + 4 = 7$. The base stays $5$, not $25$.',
          hint2: 'Dividing same base $\\Rightarrow$ subtract: $8 - 5 = 3$.',
          hint3: 'Different bases ($m$ and $n$) cannot combine — leave it as $m^7 n^2$.',
          explanation: '$5^3 \\cdot 5^4 = 5^7$ (add). $\\frac{10^8}{10^5} = 10^3$ (subtract). $m^7 \\cdot n^2 = m^7 n^2$ stays apart because the bases differ.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponents-and-powers',
    sections: [
      {
        id: 'exp3-intro',
        type: 'text' as const,
        content: `# ⚡ Exponents and Powers

**Part 3 of 5 — Power of a Power, Zero & Negative Exponents**

---

> 🔑 **The Idea:** A power raised to another power *multiplies* the exponents. From the quotient rule we'll also discover what $a^0$ and $a^{-n}$ truly mean — they're not guesses, they're forced by the patterns you already know.`,
      },
      {
        id: 'exp3-power-of-power',
        type: 'text' as const,
        content: `## Power of a Power: Multiply the Exponents

When a power is raised to another power, keep the base and **multiply** the exponents:

$$\\left(a^m\\right)^n = a^{m \\cdot n}$$

### Why It Works

$\\left(2^3\\right)^2$ means $2^3$ used as a factor twice:

$$\\left(2^3\\right)^2 = 2^3 \\cdot 2^3 = 2^{3+3} = 2^6$$

and $3 \\cdot 2 = 6$. ✓

### Power of a Product

A product inside parentheses sends the exponent to **each** factor:

$$\\left(ab\\right)^n = a^n b^n \\qquad\\text{e.g.}\\qquad \\left(3x\\right)^2 = 3^2 x^2 = 9x^2$$

> ⚠️ **Don't mix up the rules!** Multiplying powers *adds* exponents ($a^m \\cdot a^n = a^{m+n}$), but a power *of* a power *multiplies* them ($\\left(a^m\\right)^n = a^{mn}$).`,
      },
      {
        id: 'exp3-pop-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\left(x^4\\right)^3$.',
              options: ['$x^{12}$', '$x^7$', '$x^{64}$', '$x^{1}$'],
              correctAnswer: 0,
              explanation: 'Power of a power $\\Rightarrow$ multiply: $4 \\cdot 3 = 12$, so $\\left(x^4\\right)^3 = x^{12}$.',
            },
            {
              question: 'Simplify $\\left(2y\\right)^3$.',
              options: ['$8y^3$', '$2y^3$', '$6y^3$', '$8y$'],
              correctAnswer: 0,
              explanation: 'The exponent hits every factor: $2^3 \\cdot y^3 = 8y^3$. A common mistake is forgetting to cube the $2$.',
            },
          ],
        },
      },
      {
        id: 'exp3-zero-exponent',
        type: 'text' as const,
        content: `## The Zero Exponent

Why does $a^0 = 1$? Use the quotient rule on a power divided by itself.

We know $\\dfrac{a^3}{a^3} = 1$ (anything over itself is $1$). But the quotient rule says:

$$\\frac{a^3}{a^3} = a^{3-3} = a^0$$

Both must be equal, so $a^0 = 1$ for any nonzero $a$.

$$\\boxed{a^0 = 1 \\quad (a \\ne 0)}$$

| Expression | Value |
|-----------|-------|
| $7^0$ | $1$ |
| $100^0$ | $1$ |
| $(xyz)^0$ | $1$ |
| $-5^0$ | $-1$ *(the $0$ exponent applies to $5$ only, then negate)* |

> 💡 The pattern also shows it: $2^3=8,\\; 2^2=4,\\; 2^1=2,\\; 2^0=1$. Each step **divides by 2**, so the step after $2^1=2$ lands on $1$.`,
      },
      {
        id: 'exp3-negative-exponent',
        type: 'text' as const,
        content: `## Negative Exponents

Keep dividing by $2$ past zero: $2^0 = 1,\\; 2^{-1} = \\dfrac{1}{2},\\; 2^{-2} = \\dfrac{1}{4}$. A **negative exponent means reciprocal**:

$$a^{-n} = \\frac{1}{a^n}$$

A negative exponent does **not** make the number negative — it flips it to a fraction.

### Examples

$$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} \\qquad 10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} \\qquad \\frac{1}{4^{-2}} = 4^2 = 16$$

| Expression | Rewrite | Value |
|-----------|---------|-------|
| $5^{-1}$ | $\\dfrac{1}{5}$ | $0.2$ |
| $2^{-3}$ | $\\dfrac{1}{2^3}$ | $\\dfrac{1}{8}$ |
| $10^{-2}$ | $\\dfrac{1}{100}$ | $0.01$ |

> ⚠️ $3^{-2} = \\frac{1}{9}$, **not** $-9$ and **not** $-6$. The sign of the exponent controls *position* (numerator vs. denominator), not the sign of the value.`,
      },
      {
        id: 'exp3-neg-drill',
        type: 'input-boxes' as const,
        content: `**Zero & Negative Exponents** 🧮

Evaluate each. Fractions like $1/8$ or decimals like $0.125$ are both fine.

**1)** $12^0 = \\,?$
**2)** $2^{-4} = \\,?$  *(give a fraction or decimal)*
**3)** $10^{-2} = \\,?$  *(give a fraction or decimal)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '1/16', '1/100'],
          hint1: 'Any nonzero base to the zero power equals $1$.',
          hint2: '$2^{-4} = \\dfrac{1}{2^4} = \\dfrac{1}{16}$ (which is $0.0625$).',
          hint3: '$10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100}$ (which is $0.01$).',
          explanation: '1) $12^0 = 1$.  2) $2^{-4} = \\frac{1}{16} = 0.0625$.  3) $10^{-2} = \\frac{1}{100} = 0.01$.',
        },
      },
      {
        id: 'exp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Rule** 🔽

Pick the correct value or simplified form.`,
        exercise: {
          dropdowns: [
            { label: '$\\left(a^2\\right)^5 =$', options: ['$a^{10}$', '$a^{7}$', '$a^{25}$', '$a^{3}$'] },
            { label: '$9^0 =$', options: ['$1$', '$0$', '$9$', '$90$'] },
            { label: '$4^{-2} =$', options: ['$\\dfrac{1}{16}$', '$-16$', '$-8$', '$16$'] },
          ],
          correctAnswers: ['$a^{10}$', '$1$', '$\\dfrac{1}{16}$'],
          hint1: 'Power of a power multiplies exponents: $2 \\cdot 5 = 10$.',
          hint2: 'Any nonzero base to the zero power is $1$.',
          hint3: '$4^{-2} = \\dfrac{1}{4^2} = \\dfrac{1}{16}$ — positive, just flipped into the denominator.',
          explanation: '$\\left(a^2\\right)^5 = a^{10}$ (multiply). $9^0 = 1$. $4^{-2} = \\frac{1}{16}$ — a negative exponent gives a reciprocal, not a negative number.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponents-and-powers',
    sections: [
      {
        id: 'exp4-intro',
        type: 'text' as const,
        content: `# ⚡ Exponents and Powers

**Part 4 of 5 — Scientific Notation & Order of Operations**

---

> 🔑 **The Payoff:** Exponents let us write the very large and very small with ease (scientific notation) and they sit near the top of the order-of-operations ladder. This part connects exponents to numbers you'll meet in science and everyday math.`,
      },
      {
        id: 'exp4-order-ops',
        type: 'text' as const,
        content: `## Exponents in Order of Operations

In **PEMDAS**, exponents are handled **right after parentheses** — before any multiplication, division, addition, or subtraction.

$$\\text{P} \\rightarrow \\text{E} \\rightarrow \\text{MD} \\rightarrow \\text{AS}$$

### Worked Example: $2 + 3 \\cdot 4^2$

$$2 + 3 \\cdot 4^2 = 2 + 3 \\cdot 16 = 2 + 48 = 50$$

Do the exponent ($4^2 = 16$) **first**, then multiply, then add.

### The Parentheses Trap

$$(-3)^2 = (-3)(-3) = 9 \\qquad\\text{but}\\qquad -3^2 = -(3 \\cdot 3) = -9$$

With **parentheses**, the negative is part of the base. **Without** them, the exponent applies only to the $3$, and the minus sign waits until the end.

> ⚠️ $(-3)^2 = 9$ versus $-3^2 = -9$. Those parentheses change the answer — read carefully.`,
      },
      {
        id: 'exp4-order-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $5 + 2 \\cdot 3^2$.',
              options: ['$23$', '$63$', '$99$', '$41$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $3^2 = 9$. Then multiply: $2 \\cdot 9 = 18$. Then add: $5 + 18 = 23$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: ['$-2^4 = -16$', '$-2^4 = 16$', '$(-2)^4 = -16$', '$-2^4 = -8$'],
              correctAnswer: 0,
              explanation: 'Without parentheses, $-2^4 = -(2^4) = -(16) = -16$. (With parentheses, $(-2)^4 = +16$.)',
            },
          ],
        },
      },
      {
        id: 'exp4-sci-notation',
        type: 'text' as const,
        content: `## Scientific Notation

**Scientific notation** writes a number as a single nonzero digit, a decimal part, times a power of $10$:

$$\\boxed{a \\times 10^n} \\qquad \\text{where } 1 \\le a < 10$$

- A **positive** exponent means a **large** number (move the decimal right).
- A **negative** exponent means a **small** number (move the decimal left).

### Examples

| Standard form | Scientific notation | Why |
|---------------|---------------------|-----|
| $4500$ | $4.5 \\times 10^3$ | decimal moves $3$ places left |
| $92{,}000{,}000$ | $9.2 \\times 10^7$ | decimal moves $7$ places left |
| $0.006$ | $6 \\times 10^{-3}$ | decimal moves $3$ places right |
| $0.000\\,12$ | $1.2 \\times 10^{-4}$ | decimal moves $4$ places right |

### Worked Example: Write $58{,}000$ in scientific notation

Place the decimal after the first nonzero digit: $5.8$. Count how many places it moved: $5.8 \\to 58000$ is **$4$ places**, so:

$$58{,}000 = 5.8 \\times 10^4$$

> 💡 The exponent on $10$ equals the number of places you slid the decimal — positive when the original number is big, negative when it's a small decimal.`,
      },
      {
        id: 'exp4-sci-dropdown',
        type: 'dropdown-select' as const,
        content: `**Convert to Scientific Notation** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$72{,}000 =$', options: ['$7.2 \\times 10^4$', '$7.2 \\times 10^3$', '$72 \\times 10^3$', '$7.2 \\times 10^{-4}$'] },
            { label: '$0.0034 =$', options: ['$3.4 \\times 10^{-3}$', '$3.4 \\times 10^3$', '$3.4 \\times 10^{-4}$', '$34 \\times 10^{-3}$'] },
            { label: '$6.5 \\times 10^2 =$', options: ['$650$', '$65$', '$6500$', '$0.065$'] },
          ],
          correctAnswers: ['$7.2 \\times 10^4$', '$3.4 \\times 10^{-3}$', '$650$'],
          hint1: '$72000 \\to 7.2$ moves the decimal $4$ places left, so the exponent is $+4$.',
          hint2: '$0.0034 \\to 3.4$ moves the decimal $3$ places right, so the exponent is $-3$.',
          hint3: '$6.5 \\times 10^2$ means move the decimal $2$ places right: $6.5 \\to 650$.',
          explanation: '$72{,}000 = 7.2 \\times 10^4$ (big number, positive exponent). $0.0034 = 3.4 \\times 10^{-3}$ (small decimal, negative exponent). $6.5 \\times 10^2 = 650$.',
        },
      },
      {
        id: 'exp4-sci-drill',
        type: 'input-boxes' as const,
        content: `**Scientific Notation Practice** 🧮

For 1-2, enter the **exponent** $n$ for the form $a \\times 10^n$. For 3, enter the full standard-form number.

**1)** $310{,}000 = 3.1 \\times 10^{\\,?}$
**2)** $0.00072 = 7.2 \\times 10^{\\,?}$  *(include the negative sign)*
**3)** $2.5 \\times 10^3 = \\,?$  *(write it out)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-4', '2500'],
          hint1: '$310000 \\to 3.1$: count the places the decimal moves left.',
          hint2: '$0.00072 \\to 7.2$: the decimal moves right $4$ places, so $n$ is negative.',
          hint3: '$2.5 \\times 10^3$: slide the decimal $3$ places right ($2.5 \\to 2500$).',
          explanation: '1) $3.1 \\to 310000$ is $5$ places, so $n = 5$.  2) $7.2 \\to 0.00072$ is $4$ places right, so $n = -4$.  3) $2.5 \\times 10^3 = 2500$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponents-and-powers',
    sections: [
      {
        id: 'exp5-intro',
        type: 'text' as const,
        content: `# ⚡ Exponents and Powers

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and evaluate powers, (2) multiply and divide same-base powers, (3) handle power-of-a-power, zero, and negative exponents, and (4) use scientific notation. Let's tie it all together.`,
      },
      {
        id: 'exp5-summary',
        type: 'text' as const,
        content: `## Quick Reference: The Exponent Rules

| Rule | Formula | Example |
|------|---------|---------|
| Product (multiply) | $a^m \\cdot a^n = a^{m+n}$ | $x^2 \\cdot x^5 = x^7$ |
| Quotient (divide) | $\\dfrac{a^m}{a^n} = a^{m-n}$ | $\\dfrac{x^7}{x^3} = x^4$ |
| Power of a power | $\\left(a^m\\right)^n = a^{mn}$ | $\\left(x^2\\right)^4 = x^8$ |
| Power of a product | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |
| Zero exponent | $a^0 = 1\\;(a \\ne 0)$ | $17^0 = 1$ |
| Negative exponent | $a^{-n} = \\dfrac{1}{a^n}$ | $5^{-2} = \\dfrac{1}{25}$ |

> ⚠️ **The classic trap:** multiplying powers **adds** exponents, but a power **of** a power **multiplies** them. And a negative exponent gives a *reciprocal*, never a negative value.`,
      },
      {
        id: 'exp5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Simplify or evaluate. For 1-2, enter the exponent of the result. For 3, enter the value.

**1)** $\\dfrac{y^{12}}{y^4} \\cdot y^2 = y^{\\,?}$
**2)** $\\left(x^3\\right)^4 = x^{\\,?}$
**3)** $(-2)^3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '12', '-8'],
          hint1: 'Divide first ($12 - 4 = 8$), then multiply by $y^2$ ($8 + 2$).',
          hint2: 'Power of a power multiplies: $3 \\cdot 4$.',
          hint3: '$(-2)^3 = (-2)(-2)(-2)$. An odd number of negative factors stays negative.',
          explanation: '1) $\\frac{y^{12}}{y^4} = y^8$, then $y^8 \\cdot y^2 = y^{10}$.  2) $\\left(x^3\\right)^4 = x^{12}$.  3) $(-2)^3 = -8$ (odd power of a negative is negative).',
        },
      },
      {
        id: 'exp5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{6^9}{6^9}$.',
              options: ['$1$', '$6$', '$0$', '$6^{18}$'],
              correctAnswer: 0,
              explanation: 'Subtract exponents: $6^{9-9} = 6^0 = 1$. Any nonzero number divided by itself is $1$.',
            },
            {
              question: 'Write $0.00056$ in scientific notation.',
              options: ['$5.6 \\times 10^{-4}$', '$5.6 \\times 10^{4}$', '$56 \\times 10^{-5}$', '$5.6 \\times 10^{-3}$'],
              correctAnswer: 0,
              explanation: 'Move the decimal right to get $5.6$: that is $4$ places, so the exponent is $-4$. Result: $5.6 \\times 10^{-4}$.',
            },
          ],
        },
      },
      {
        id: 'exp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $a^7 \\cdot a^3$.',
              options: ['$a^{10}$', '$a^{21}$', '$a^4$', '$2a^{10}$'],
              correctAnswer: 0,
              explanation: 'Same base, multiplying $\\Rightarrow$ add exponents: $a^{7+3} = a^{10}$.',
            },
            {
              question: 'What is the value of $5^{-2}$?',
              options: ['$\\dfrac{1}{25}$', '$-25$', '$-10$', '$25$'],
              correctAnswer: 0,
              explanation: 'A negative exponent means reciprocal: $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$. It is positive, not negative.',
            },
            {
              question: 'Evaluate $4 + 2 \\cdot 3^2$.',
              options: ['$22$', '$54$', '$36$', '$324$'],
              correctAnswer: 0,
              explanation: 'Exponent first: $3^2 = 9$. Then multiply: $2 \\cdot 9 = 18$. Then add: $4 + 18 = 22$.',
            },
          ],
        },
      },
    ],
  },
]
