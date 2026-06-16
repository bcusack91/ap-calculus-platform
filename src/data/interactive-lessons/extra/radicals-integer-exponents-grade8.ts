import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Radicals and Integer Exponents (Grade 8 Math).
 * Registry key / DB Topic.slug: 'radicals-integer-exponents-grade8'.
 * Aligned to CCSS 8.EE.A.1 (integer exponent properties) and 8.EE.A.2
 * (square/cube roots, solving x^2 = p and x^3 = p).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'radicals-integer-exponents-grade8',
    sections: [
      {
        id: 'rie1-intro',
        type: 'text' as const,
        content: `# ⚡ Radicals and Integer Exponents

**Part 1 of 5 — What Exponents Really Mean**

---

### Topics in This Part

| Section |
|---------|
| Exponents as Repeated Multiplication |
| Base, Exponent, and Power |
| Evaluating Powers (Including Negatives) |

> 🔑 **Key Concept:** An exponent is a shortcut for *repeated multiplication*. Once you truly understand what $2^5$ means, every exponent rule in this lesson becomes a pattern you can see — not a formula you have to memorize.`,
      },
      {
        id: 'rie1-meaning',
        type: 'text' as const,
        content: `## Exponents as Repeated Multiplication

A **power** like $2^5$ tells you to multiply the base by itself a certain number of times:

$$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$$

The two parts have names:

- The **base** is the number being multiplied — here, $2$.
- The **exponent** (or *power*) is how many times — here, $5$.

### Read These Carefully

| Power | Meaning | Value |
|-------|---------|-------|
| $3^4$ | $3 \\cdot 3 \\cdot 3 \\cdot 3$ | $81$ |
| $5^2$ | $5 \\cdot 5$ | $25$ |
| $10^3$ | $10 \\cdot 10 \\cdot 10$ | $1000$ |
| $7^1$ | $7$ (just once) | $7$ |

> ⚠️ **Watch out:** $2^5$ does **not** mean $2 \\cdot 5 = 10$. It means $2$ multiplied by itself $5$ times, which is $32$. Multiplying the base by the exponent is the single most common exponent mistake.`,
      },
      {
        id: 'rie1-evaluate-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the value of $4^3$?',
              options: ['$12$', '$64$', '$81$', '$7$'],
              correctAnswer: 1,
              explanation: '$4^3 = 4 \\cdot 4 \\cdot 4 = 16 \\cdot 4 = 64$. (It is NOT $4 \\cdot 3 = 12$.)',
            },
            {
              question: 'In the power $9^2$, which number is the base?',
              options: ['$2$', '$9$', '$18$', '$81$'],
              correctAnswer: 1,
              explanation: 'The base is the number being multiplied: $9$. The exponent is $2$, and the value is $9 \\cdot 9 = 81$.',
            },
          ],
        },
      },
      {
        id: 'rie1-negbase',
        type: 'text' as const,
        content: `## Negative Bases and Parentheses

When the base is negative, **parentheses change everything**.

$$(-3)^2 = (-3)\\cdot(-3) = 9 \\qquad \\text{but} \\qquad -3^2 = -(3 \\cdot 3) = -9$$

- $(-3)^2$ — the parentheses say the *whole* $-3$ is the base, so the negative gets squared too. Result: $+9$.
- $-3^2$ — without parentheses, only the $3$ is the base; the minus sign sits out front. Result: $-9$.

> 💡 **Rule of thumb:** A negative base raised to an **even** power is positive; raised to an **odd** power it stays negative. For example, $(-2)^3 = -8$ but $(-2)^4 = 16$.`,
      },
      {
        id: 'rie1-sign-dropdown',
        type: 'dropdown-select' as const,
        content: `**Predict the Sign** 🔽

Decide whether each value is positive or negative, then its value.`,
        exercise: {
          dropdowns: [
            { label: '$(-4)^2$ is', options: ['positive', 'negative'] },
            { label: 'and equals', options: ['$16$', '$-16$', '$8$', '$-8$'] },
            { label: '$(-2)^3$ is', options: ['negative', 'positive'] },
          ],
          correctAnswers: ['positive', '$16$', 'negative'],
          hint1: 'An even power of a negative base is positive.',
          hint2: '$(-4)^2 = (-4)(-4) = 16$.',
          hint3: 'An odd power of a negative base stays negative: $(-2)^3 = -8$.',
          explanation: '$(-4)^2 = 16$ (even power → positive). $(-2)^3 = -8$ (odd power → negative).',
        },
      },
      {
        id: 'rie1-sign-bridge',
        type: 'text' as const,
        content: `Now try a few entirely on your own. Watch the parentheses — they decide whether the negative sign is part of the base.`,
      },
      {
        id: 'rie1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Powers** 🧮

Find each value. Enter a whole number (use a minus sign if negative).

**1)** $2^4 = \\,?$
**2)** $(-5)^2 = \\,?$
**3)** $-2^3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '25', '-8'],
          hint1: '$2^4 = 2\\cdot 2\\cdot 2\\cdot 2 = 16$.',
          hint2: '$(-5)^2$: the parentheses mean the whole $-5$ is squared, so $(-5)(-5) = 25$.',
          hint3: '$-2^3$: only the $2$ is cubed, then negate. $2^3 = 8$, so $-2^3 = -8$.',
          explanation: '1) $16$.  2) $25$ (even power of a negative is positive).  3) $-8$ (no parentheses, so the minus stays out front).',
        },
      },
      {
        id: 'rie1-recap',
        type: 'text' as const,
        content: `## What You've Got So Far

You can now read and evaluate any power:

- $a^n$ means multiply $a$ by itself $n$ times.
- Parentheses decide whether a negative sign is part of the base.

> 🔑 Every rule in Part 2 comes from this one idea. When you wonder *why* a rule works, just expand the power back into repeated multiplication and the pattern appears.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'radicals-integer-exponents-grade8',
    sections: [
      {
        id: 'rie2-intro',
        type: 'text' as const,
        content: `# ⚡ Radicals and Integer Exponents

**Part 2 of 5 — The Exponent Rules**

---

> 🔑 **The Big Three:** When the **bases match**, you can combine powers by working with the exponents. Multiply → add exponents. Divide → subtract exponents. Power of a power → multiply exponents.`,
      },
      {
        id: 'rie2-product-quotient',
        type: 'text' as const,
        content: `## Product Rule & Quotient Rule

### Product Rule — *add* the exponents

$$a^m \\cdot a^n = a^{m+n}$$

**Why?** $\\;x^2 \\cdot x^3 = (x\\cdot x)(x\\cdot x\\cdot x) = x^5$. You just count the factors: $2 + 3 = 5$.

### Quotient Rule — *subtract* the exponents

$$\\frac{a^m}{a^n} = a^{m-n} \\quad (a \\ne 0)$$

**Why?** $\\;\\dfrac{x^5}{x^2} = \\dfrac{x\\cdot x\\cdot x\\cdot x\\cdot x}{x\\cdot x} = x^3$. Two factors cancel, leaving $5 - 2 = 3$.

| Expression | Rule | Result |
|------------|------|--------|
| $2^3 \\cdot 2^4$ | add: $3+4$ | $2^7$ |
| $\\dfrac{5^9}{5^6}$ | subtract: $9-6$ | $5^3$ |
| $10^2 \\cdot 10^2$ | add: $2+2$ | $10^4$ |

> ⚠️ These rules only work when the **bases are the same**. $2^3 \\cdot 5^2$ cannot be combined — different bases.`,
      },
      {
        id: 'rie2-which-rule',
        type: 'dropdown-select' as const,
        content: `**Add or Subtract?** 🔽

For each expression, choose the simplified single power. *(Power-of-a-power comes next — focus on product and quotient here.)*`,
        exercise: {
          dropdowns: [
            { label: '$6^2 \\cdot 6^5 = $', options: ['$6^7$', '$6^{10}$', '$6^3$', '$36^7$'] },
            { label: '$\\dfrac{8^9}{8^4} = $', options: ['$8^5$', '$8^{13}$', '$8^{36}$', '$1^5$'] },
            { label: '$10^3 \\cdot 10^3 = $', options: ['$10^6$', '$10^9$', '$100^3$', '$10^3$'] },
          ],
          correctAnswers: ['$6^7$', '$8^5$', '$10^6$'],
          hint1: 'Multiplying with the same base: ADD the exponents ($2+5=7$).',
          hint2: 'Dividing with the same base: SUBTRACT the exponents ($9-4=5$). The base stays $8$.',
          hint3: 'Multiplying again — ADD: $3+3=6$, and the base stays $10$ (not $100$).',
          explanation: 'Product → add: $6^{2+5}=6^7$ and $10^{3+3}=10^6$. Quotient → subtract: $8^{9-4}=8^5$.',
        },
      },
      {
        id: 'rie2-power-rule',
        type: 'text' as const,
        content: `## Power of a Power — *multiply* the exponents

$$\\left(a^m\\right)^n = a^{m \\cdot n}$$

**Why?** $\\;\\left(x^2\\right)^3 = x^2 \\cdot x^2 \\cdot x^2 = x^{2+2+2} = x^6$. Adding three $2$'s is the same as $2 \\cdot 3 = 6$.

### Examples

$$\\left(3^4\\right)^2 = 3^{4\\cdot 2} = 3^8 \\qquad \\left(7^3\\right)^3 = 7^{9}$$

> 💡 **Don't mix up the rules!** $a^m \\cdot a^n$ **adds** ($a^{m+n}$), but $(a^m)^n$ **multiplies** ($a^{mn}$). Expanding into repeated multiplication always tells you which one applies.`,
      },
      {
        id: 'rie2-simplify-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $x^3 \\cdot x^3 \\cdot x$ to a single power.',
              options: ['$x^7$', '$x^9$', '$x^6$', '$3x^3$'],
              correctAnswer: 0,
              explanation: 'Add all the exponents: $3 + 3 + 1 = 7$, so $x^7$. (Remember $x = x^1$.)',
            },
            {
              question: 'Which expression CANNOT be combined into a single power?',
              options: ['$2^4 \\cdot 2^3$', '$3^5 \\cdot 4^5$', '$\\dfrac{9^6}{9^2}$', '$\\left(5^2\\right)^4$'],
              correctAnswer: 1,
              explanation: '$3^5 \\cdot 4^5$ has different bases ($3$ and $4$), so the product rule does not apply. The others all share a base.',
            },
          ],
        },
      },
      {
        id: 'rie2-drill-bridge',
        type: 'text' as const,
        content: `### Putting All Three Together

Each problem below uses exactly one rule. Identify which one (add, subtract, or multiply the exponents), then apply it.`,
      },
      {
        id: 'rie2-drill',
        type: 'input-boxes' as const,
        content: `**Simplify to a Single Exponent** 🧮

Each answer is a single power of the form (base)^(exponent). Enter just the **exponent**.

**1)** $7^5 \\cdot 7^6 = 7^{\\,?}$
**2)** $\\dfrac{10^{12}}{10^{4}} = 10^{\\,?}$
**3)** $\\left(2^6\\right)^3 = 2^{\\,?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11', '8', '18'],
          hint1: 'Product rule: add the exponents, $5 + 6$.',
          hint2: 'Quotient rule: subtract the exponents, $12 - 4$.',
          hint3: 'Power of a power: multiply the exponents, $6 \\cdot 3$.',
          explanation: '1) $5+6 = 11 \\to 7^{11}$.  2) $12-4 = 8 \\to 10^{8}$.  3) $6\\cdot 3 = 18 \\to 2^{18}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'radicals-integer-exponents-grade8',
    sections: [
      {
        id: 'rie3-intro',
        type: 'text' as const,
        content: `# ⚡ Radicals and Integer Exponents

**Part 3 of 5 — Zero and Negative Exponents**

---

> 🔑 **The Surprise:** Exponents don't have to be positive whole numbers. A **zero exponent** always gives $1$, and a **negative exponent** means "take the reciprocal." Both rules come straight from the quotient rule you just learned.`,
      },
      {
        id: 'rie3-zero',
        type: 'text' as const,
        content: `## The Zero Exponent

$$a^0 = 1 \\quad (a \\ne 0)$$

**Why?** Use the quotient rule on a power divided by itself:

$$\\frac{a^3}{a^3} = a^{3-3} = a^0 \\qquad \\text{but also} \\qquad \\frac{a^3}{a^3} = 1$$

Both must be true, so $a^0 = 1$. Any nonzero number to the zero power is **$1$** — it doesn't matter how big the base is.

| Power | Value |
|-------|-------|
| $5^0$ | $1$ |
| $100^0$ | $1$ |
| $(-7)^0$ | $1$ |

> ⚠️ The base must be nonzero. $0^0$ is left **undefined** at this level — don't use it.`,
      },
      {
        id: 'rie3-zero-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the value of $23^0$?',
              options: ['$0$', '$1$', '$23$', '$230$'],
              correctAnswer: 1,
              explanation: 'Any nonzero base raised to the zero power equals $1$. The size of the base ($23$) does not matter.',
            },
            {
              question: 'Why does $a^0 = 1$ (for $a \\ne 0$)?',
              options: [
                'Because $\\dfrac{a^n}{a^n} = a^{n-n} = a^0$, and $\\dfrac{a^n}{a^n} = 1$',
                'Because anything times zero is zero',
                'Because zero is an even number',
                'Because the base disappears',
              ],
              correctAnswer: 0,
              explanation: 'Dividing a power by itself gives $1$, and the quotient rule gives $a^0$. Since both equal the same thing, $a^0 = 1$.',
            },
          ],
        },
      },
      {
        id: 'rie3-negative',
        type: 'text' as const,
        content: `## Negative Exponents

$$a^{-n} = \\frac{1}{a^{\\,n}} \\quad (a \\ne 0)$$

A negative exponent means **reciprocal** — flip the power to the other side of the fraction bar. It does **not** make the number negative!

**Why?** Continue the quotient-rule pattern below $a^0$:

$$\\frac{a^2}{a^5} = a^{2-5} = a^{-3} \\qquad \\text{and} \\qquad \\frac{a^2}{a^5} = \\frac{1}{a^3}$$

So $a^{-3} = \\dfrac{1}{a^3}$.

### Examples

$$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} \\qquad 10^{-2} = \\frac{1}{10^2} = \\frac{1}{100} = 0.01$$

> 💡 To make a negative exponent positive, **move the power across the fraction bar**. A factor in the numerator goes to the denominator (and vice versa), and the exponent's sign flips.`,
      },
      {
        id: 'rie3-negative-dropdown',
        type: 'dropdown-select' as const,
        content: `**Rewrite Without Negative Exponents** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$3^{-2} = $', options: ['$\\dfrac{1}{9}$', '$-9$', '$-6$', '$9$'] },
            { label: '$5^{-1} = $', options: ['$\\dfrac{1}{5}$', '$-5$', '$5$', '$0$'] },
            { label: '$\\dfrac{1}{4^{-3}} = $', options: ['$64$', '$\\dfrac{1}{64}$', '$-64$', '$12$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{9}$', '$\\dfrac{1}{5}$', '$64$'],
          hint1: '$3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$. The result is positive.',
          hint2: '$5^{-1} = \\dfrac{1}{5^1} = \\dfrac{1}{5}$.',
          hint3: 'A negative exponent in the denominator moves up to the numerator: $\\dfrac{1}{4^{-3}} = 4^3 = 64$.',
          explanation: 'Negative exponents mean reciprocals: $3^{-2}=\\frac{1}{9}$, $5^{-1}=\\frac{1}{5}$. And $\\frac{1}{4^{-3}} = 4^{3} = 64$ (flipping across the bar makes the exponent positive).',
        },
      },
      {
        id: 'rie3-drill-bridge',
        type: 'text' as const,
        content: `### Your Turn

Evaluate each completely. Remember: a zero exponent gives $1$, and a negative exponent gives a reciprocal — never a negative number.`,
      },
      {
        id: 'rie3-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate** 🧮

Write each as a fraction or whole number.

**1)** $2^{-4} = \\,?$  *(enter as a fraction like 1/16)*
**2)** $7^{0} = \\,?$
**3)** $10^{-3} = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/16', '1', '0.001'],
          hint1: '$2^{-4} = \\dfrac{1}{2^4} = \\dfrac{1}{16}$.',
          hint2: 'Any nonzero base to the zero power is $1$.',
          hint3: '$10^{-3} = \\dfrac{1}{10^3} = \\dfrac{1}{1000} = 0.001$.',
          explanation: '1) $\\frac{1}{16}$.  2) $1$.  3) $\\frac{1}{1000} = 0.001$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'radicals-integer-exponents-grade8',
    sections: [
      {
        id: 'rie4-intro',
        type: 'text' as const,
        content: `# ⚡ Radicals and Integer Exponents

**Part 4 of 5 — Square Roots & Cube Roots**

---

> 🔑 **The Inverse Idea:** A **radical** undoes an exponent. A square root asks "what number, squared, gives this?" A cube root asks "what number, cubed, gives this?" Squaring and square-rooting are opposites — just like adding and subtracting.`,
      },
      {
        id: 'rie4-square-roots',
        type: 'text' as const,
        content: `## Square Roots

$$\\sqrt{x} = \\text{the number that, when squared, gives } x$$

Because $6 \\cdot 6 = 36$, we say $\\sqrt{36} = 6$. The symbol $\\sqrt{\\;}$ asks for the **positive** root.

A **perfect square** is a number whose square root is a whole number. Memorize these:

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|-----|----|----|----|----|----|----|----|----|----|----|----|----|
| $n^2$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

So $\\sqrt{49} = 7$, $\\sqrt{81} = 9$, and $\\sqrt{144} = 12$.

> 💡 **Solving $x^2 = p$:** When you solve an *equation*, there are **two** answers, because both a positive and a negative number square to a positive result. For example, $x^2 = 25$ gives $x = \\pm 5$, since $5^2 = 25$ and $(-5)^2 = 25$.`,
      },
      {
        id: 'rie4-sqrt-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\sqrt{64}$?',
              options: ['$8$', '$32$', '$6$', '$16$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{64} = 8$ because $8 \\cdot 8 = 64$. (Don\'t confuse it with $64 \\div 2 = 32$.)',
            },
            {
              question: 'Solve the equation $x^2 = 49$.',
              options: ['$x = 7$ only', '$x = \\pm 7$', '$x = \\pm 24.5$', '$x = 7$ or $x = 8$'],
              correctAnswer: 1,
              explanation: 'Both $7^2 = 49$ and $(-7)^2 = 49$, so the equation has two solutions: $x = 7$ and $x = -7$, i.e. $x = \\pm 7$.',
            },
          ],
        },
      },
      {
        id: 'rie4-cube-roots',
        type: 'text' as const,
        content: `## Cube Roots

$$\\sqrt[3]{x} = \\text{the number that, when cubed, gives } x$$

Because $4 \\cdot 4 \\cdot 4 = 64$, we say $\\sqrt[3]{64} = 4$. The little $3$ in the radical is the **index**.

A **perfect cube** has a whole-number cube root:

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|----|----|----|----|----|
| $n^3$ | $1$ | $8$ | $27$ | $64$ | $125$ |

So $\\sqrt[3]{27} = 3$ and $\\sqrt[3]{125} = 5$.

> 🔑 **Key difference:** Cube roots have **one** real answer, and they work on negatives! Since $(-2)^3 = -8$, we get $\\sqrt[3]{-8} = -2$. (You can't take a real square root of a negative — but you *can* take a cube root.)

**Solving $x^3 = p$:** exactly one real solution. For example, $x^3 = 27 \\Rightarrow x = 3$.`,
      },
      {
        id: 'rie4-roots-dropdown',
        type: 'dropdown-select' as const,
        content: `**Square & Cube Roots** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{121} = $', options: ['$11$', '$10$', '$12$', '$60.5$'] },
            { label: '$\\sqrt[3]{8} = $', options: ['$2$', '$4$', '$3$', '$8$'] },
            { label: '$\\sqrt[3]{-27} = $', options: ['$-3$', '$3$', '$-9$', 'no real value'] },
          ],
          correctAnswers: ['$11$', '$2$', '$-3$'],
          hint1: '$11 \\cdot 11 = 121$.',
          hint2: 'Find the number cubed that gives $8$: $2 \\cdot 2 \\cdot 2 = 8$.',
          hint3: 'Cube roots accept negatives: $(-3)^3 = -27$, so $\\sqrt[3]{-27} = -3$.',
          explanation: '$\\sqrt{121}=11$ (perfect square), $\\sqrt[3]{8}=2$ (perfect cube), $\\sqrt[3]{-27}=-3$ (odd root of a negative is negative).',
        },
      },
      {
        id: 'rie4-roots-bridge',
        type: 'text' as const,
        content: `### Try a Mix

Below you'll find square roots, a cube root, and one equation. For the equation $x^2 = p$, remember there are two solutions — but the problem will ask for just one of them.`,
      },
      {
        id: 'rie4-roots-drill',
        type: 'input-boxes' as const,
        content: `**Find the Roots** 🧮

Enter a whole number (use a minus sign where needed).

**1)** $\\sqrt{100} = \\,?$
**2)** $\\sqrt[3]{125} = \\,?$
**3)** $x^2 = 36$, the **positive** solution is $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '5', '6'],
          hint1: '$10 \\cdot 10 = 100$.',
          hint2: '$5 \\cdot 5 \\cdot 5 = 125$.',
          hint3: '$x^2 = 36$ gives $x = \\pm 6$; the positive solution is $6$.',
          explanation: '1) $\\sqrt{100}=10$.  2) $\\sqrt[3]{125}=5$.  3) $x = \\pm 6$, so the positive solution is $6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'radicals-integer-exponents-grade8',
    sections: [
      {
        id: 'rie5-intro',
        type: 'text' as const,
        content: `# ⚡ Radicals and Integer Exponents

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You now know how to (1) evaluate powers, (2) apply the product/quotient/power rules, (3) handle zero and negative exponents, and (4) take square and cube roots. Let's bring it all together.`,
      },
      {
        id: 'rie5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $2^3 \\cdot 2^4 = 2^7$ |
| Quotient | $\\dfrac{a^m}{a^n} = a^{m-n}$ | $\\dfrac{5^9}{5^6} = 5^3$ |
| Power of a power | $(a^m)^n = a^{mn}$ | $(3^2)^4 = 3^8$ |
| Zero exponent | $a^0 = 1$ | $19^0 = 1$ |
| Negative exponent | $a^{-n} = \\dfrac{1}{a^n}$ | $2^{-3} = \\dfrac{1}{8}$ |
| Square root | $\\sqrt{x^2} = x$ | $\\sqrt{49} = 7$ |
| Cube root | $\\sqrt[3]{x^3} = x$ | $\\sqrt[3]{64} = 4$ |

> ⚠️ **Top traps:** different bases can't be combined; a negative exponent makes a reciprocal (not a negative number); and solving $x^2 = p$ gives $\\pm$, but a $\\sqrt{\\;}$ symbol alone means just the positive root.`,
      },
      {
        id: 'rie5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{4^5 \\cdot 4^2}{4^3}$ to a single power of $4$.',
              options: ['$4^4$', '$4^{10}$', '$4^{0}$', '$4^7$'],
              correctAnswer: 0,
              explanation: 'Top: $4^5 \\cdot 4^2 = 4^{7}$. Then $\\dfrac{4^7}{4^3} = 4^{7-3} = 4^4$.',
            },
            {
              question: 'Which statement is TRUE?',
              options: [
                '$3^{-2} = \\dfrac{1}{9}$',
                '$3^{-2} = -9$',
                '$3^{-2} = -6$',
                '$3^{-2} = 9$',
              ],
              correctAnswer: 0,
              explanation: 'A negative exponent gives a reciprocal, not a negative number: $3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$.',
            },
          ],
        },
      },
      {
        id: 'rie5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $(2^3)^2 = 2^{\\,?}$  *(enter the exponent)*
**2)** $\\sqrt[3]{-64} = \\,?$  *(whole number)*
**3)** $5^{-2} = \\,?$  *(fraction like 1/25)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-4', '1/25'],
          hint1: 'Power of a power: multiply the exponents, $3 \\cdot 2$.',
          hint2: '$(-4)^3 = -64$, so the cube root of $-64$ is $-4$.',
          hint3: '$5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$.',
          explanation: '1) $3\\cdot 2 = 6 \\to 2^6$.  2) $\\sqrt[3]{-64} = -4$.  3) $5^{-2} = \\frac{1}{25}$.',
        },
      },
      {
        id: 'rie5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $7^6 \\cdot 7^0$.',
              options: ['$7^6$', '$7^0$', '$7^{60}$', '$1$'],
              correctAnswer: 0,
              explanation: '$7^0 = 1$, and multiplying by $1$ changes nothing: $7^6 \\cdot 7^0 = 7^{6+0} = 7^6$.',
            },
            {
              question: 'How many real solutions does $x^2 = 81$ have, and what are they?',
              options: [
                'Two: $x = \\pm 9$',
                'One: $x = 9$',
                'One: $x = 40.5$',
                'Two: $x = \\pm 81$',
              ],
              correctAnswer: 0,
              explanation: 'Both $9^2 = 81$ and $(-9)^2 = 81$, so there are two solutions: $x = 9$ and $x = -9$.',
            },
            {
              question: 'Rewrite $\\dfrac{10^4}{10^7}$ with a positive exponent.',
              options: [
                '$\\dfrac{1}{10^3}$',
                '$10^3$',
                '$10^{11}$',
                '$\\dfrac{1}{10^{11}}$',
              ],
              correctAnswer: 0,
              explanation: '$\\dfrac{10^4}{10^7} = 10^{4-7} = 10^{-3} = \\dfrac{1}{10^3}$.',
            },
          ],
        },
      },
    ],
  },
]
