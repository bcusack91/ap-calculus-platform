import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Exponents (Pre-Algebra).
 * Registry key / DB slug: 'exponents-prealgebra'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponents-prealgebra',
    sections: [
      {
        id: 'exp1-intro',
        type: 'text' as const,
        content: `# ⚡ Introduction to Exponents

**Part 1 of 5 — What an Exponent Means**

---

### Topics in This Part

| Section |
|---------|
| Exponents as Repeated Multiplication |
| Base and Exponent Vocabulary |
| Evaluating Simple Powers |

> 🔑 **Key Concept:** An exponent is a shortcut for repeated **multiplication**, the same way multiplication is a shortcut for repeated addition. $3^4$ does **not** mean $3 \\times 4$ — it means $3$ multiplied by itself $4$ times.`,
      },
      {
        id: 'exp1-repeated',
        type: 'text' as const,
        content: `## Exponents as Repeated Multiplication

Writing $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$ over and over is slow. An **exponent** packs that into one small number:

$$2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 2^5$$

We read $2^5$ as **"two to the fifth power."** The little raised number tells you **how many times** the big number appears in the product.

### A few more

| Repeated product | Power | Read as |
|------------------|-------|---------|
| $3 \\cdot 3 \\cdot 3 \\cdot 3$ | $3^4$ | three to the fourth power |
| $5 \\cdot 5 \\cdot 5$ | $5^3$ | five to the third power (or *five cubed*) |
| $7 \\cdot 7$ | $7^2$ | seven to the second power (or *seven squared*) |
| $10 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10$ | $10^6$ | ten to the sixth power |

> ⚠️ **Watch out:** $3^4$ means $3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$. It does **not** mean $3 \\cdot 4 = 12$. Mixing these up is the single most common beginner mistake.`,
      },
      {
        id: 'exp1-vocab',
        type: 'text' as const,
        content: `## Base and Exponent

Every power has two parts with special names:

$$\\underbrace{2}_{\\text{base}}{}^{\\overbrace{5}^{\\text{exponent}}}$$

- The **base** is the number being multiplied — here, $2$.
- The **exponent** (or *power*) tells you how many copies of the base to multiply — here, $5$.

So $2^5$ means *"use $2$ as a factor $5$ times":*

$$2^5 = \\underbrace{2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2}_{5 \\text{ factors}} = 32$$

> 💡 **Say it out loud:** "base to the exponent." The base sits on the line; the exponent floats up to the right.`,
      },
      {
        id: 'exp1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the power $6^3$, which number is the **base**?',
              options: ['$6$', '$3$', '$18$', '$9$'],
              correctAnswer: 0,
              explanation: 'The base is the number being multiplied — $6$. The exponent is $3$, telling us to use $6$ as a factor three times.',
            },
            {
              question: 'Which expression equals $4^3$?',
              options: ['$4 \\cdot 3$', '$4 + 4 + 4$', '$4 \\cdot 4 \\cdot 4$', '$3 \\cdot 3 \\cdot 3 \\cdot 3$'],
              correctAnswer: 2,
              explanation: '$4^3$ means the base $4$ used as a factor $3$ times: $4 \\cdot 4 \\cdot 4 = 64$. It is *not* $4 \\cdot 3$.',
            },
          ],
        },
      },
      {
        id: 'exp1-expand-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Powers** 🧮

Write out the repeated multiplication and find each value.

**1)** $2^5 = \\,?$
**2)** $3^4 = \\,?$
**3)** $5^3 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32', '81', '125'],
          hint1: '$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2$. Multiply step by step: $2, 4, 8, 16, 32$.',
          hint2: '$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 9 \\cdot 9 = 81$.',
          hint3: '$5^3 = 5 \\cdot 5 \\cdot 5 = 25 \\cdot 5 = 125$.',
          explanation: '1) $2^5 = 32$.  2) $3^4 = 81$.  3) $5^3 = 125$. Each time, multiply the base by itself the number of times shown by the exponent.',
        },
      },
      {
        id: 'exp1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Power** 🔽

Pick the value of each power.`,
        exercise: {
          dropdowns: [
            { label: '$7^2 =$', options: ['$49$', '$14$', '$9$', '$77$'] },
            { label: '$2^4 =$', options: ['$16$', '$8$', '$6$', '$24$'] },
            { label: '$10^3 =$', options: ['$1000$', '$30$', '$100$', '$300$'] },
          ],
          correctAnswers: ['$49$', '$16$', '$1000$'],
          hint1: '$7^2 = 7 \\cdot 7 = 49$ (not $7 \\cdot 2 = 14$).',
          hint2: '$2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$.',
          hint3: '$10^3 = 10 \\cdot 10 \\cdot 10 = 1000$.',
          explanation: '$7^2 = 49$ (seven squared).  $2^4 = 16$.  $10^3 = 1000$. Each exponent says how many times to use the base as a factor.',
        },
      },
      {
        id: 'exp1-wrap',
        type: 'text' as const,
        content: `## You've Got the Foundation

You can now:
- read a power as "base to the exponent,"
- expand it into repeated multiplication, and
- evaluate it to a single number.

In **Part 2** we tackle the tricky special cases — powers of $1$ and $0$, and what happens when the base is **negative**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponents-prealgebra',
    sections: [
      {
        id: 'exp2-intro',
        type: 'text' as const,
        content: `# ⚡ Introduction to Exponents

**Part 2 of 5 — Special Cases & Negative Bases**

---

> 🔑 **The Idea:** A few exponents follow special rules — an exponent of $1$, an exponent of $0$, and negative bases. Lock these down now and you'll avoid the most common slip-ups later.`,
      },
      {
        id: 'exp2-one-zero',
        type: 'text' as const,
        content: `## Exponents of 1 and 0

**Exponent of 1:** Any number to the first power is just **itself** — one copy.

$$7^1 = 7 \\qquad 25^1 = 25 \\qquad a^1 = a$$

**Exponent of 0:** Any nonzero number to the zero power equals **1**.

$$5^0 = 1 \\qquad 100^0 = 1 \\qquad a^0 = 1 \\;\\;(a \\ne 0)$$

Why is $5^0 = 1$? Look at the pattern as the exponent drops by one — each step **divides by the base**:

| Power | Value |
|-------|-------|
| $5^3$ | $125$ |
| $5^2$ | $25$ |
| $5^1$ | $5$ |
| $5^0$ | $1$ |

Going from $5^1 = 5$ down to $5^0$, we divide by $5$: $\\;5 \\div 5 = 1$.

> 💡 **Memorize:** $a^1 = a$ and $a^0 = 1$. The zero-power rule looks strange at first, but it keeps the whole pattern consistent.`,
      },
      {
        id: 'exp2-oz-check',
        type: 'dropdown-select' as const,
        content: `**Special Powers** 🔽

Evaluate each special case.`,
        exercise: {
          dropdowns: [
            { label: '$9^1 =$', options: ['$9$', '$1$', '$0$', '$18$'] },
            { label: '$12^0 =$', options: ['$1$', '$0$', '$12$', '$120$'] },
            { label: '$1^8 =$', options: ['$1$', '$8$', '$0$', '$18$'] },
          ],
          correctAnswers: ['$9$', '$1$', '$1$'],
          hint1: 'Any number to the first power is itself: $9^1 = 9$.',
          hint2: 'Any nonzero number to the zero power is $1$: $12^0 = 1$.',
          hint3: '$1$ multiplied by itself any number of times is still $1$: $1^8 = 1 \\cdot 1 \\cdots = 1$.',
          explanation: '$9^1 = 9$ (one copy of $9$).  $12^0 = 1$ (zero-power rule).  $1^8 = 1$ (one times itself stays one).',
        },
      },
      {
        id: 'exp2-negbase',
        type: 'text' as const,
        content: `## Negative Bases

When the base is negative, **wrap it in parentheses** so the negative sign is included in every factor:

$$(-2)^3 = (-2)\\cdot(-2)\\cdot(-2) = -8$$

Use the sign rule for multiplication: an **even** number of negative factors gives a **positive** result; an **odd** number gives a **negative** result.

| Power | Expanded | Result | # of negatives |
|-------|----------|--------|----------------|
| $(-2)^2$ | $(-2)(-2)$ | $+4$ | even → positive |
| $(-2)^3$ | $(-2)(-2)(-2)$ | $-8$ | odd → negative |
| $(-3)^4$ | $(-3)(-3)(-3)(-3)$ | $+81$ | even → positive |

> ⚠️ **Parentheses matter!** $(-3)^2$ and $-3^2$ are different:
> - $(-3)^2 = (-3)(-3) = 9$ — the negative *is* squared.
> - $-3^2 = -(3 \\cdot 3) = -9$ — only the $3$ is squared, then negated.`,
      },
      {
        id: 'exp2-neg-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $(-2)^4$?',
              options: ['$16$', '$-16$', '$-8$', '$8$'],
              correctAnswer: 0,
              explanation: '$(-2)^4 = (-2)(-2)(-2)(-2)$. Four negative factors (even) make a positive: $16$.',
            },
            {
              question: 'Which statement is true?',
              options: ['$-4^2 = 16$', '$(-4)^2 = -16$', '$-4^2 = -16$', '$(-4)^2 = -8$'],
              correctAnswer: 2,
              explanation: 'Without parentheses, only the $4$ is squared: $-4^2 = -(4 \\cdot 4) = -16$. With parentheses, $(-4)^2 = 16$.',
            },
          ],
        },
      },
      {
        id: 'exp2-neg-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate with Signs** 🧮

Be careful with the parentheses.

**1)** $(-2)^3 = \\,?$
**2)** $(-3)^2 = \\,?$
**3)** $-3^2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-8', '9', '-9'],
          hint1: '$(-2)^3$ has three negative factors (odd) → negative: $(-2)(-2)(-2) = -8$.',
          hint2: '$(-3)^2 = (-3)(-3) = 9$. Two negatives (even) → positive.',
          hint3: '$-3^2$ has *no* parentheses, so square first then negate: $-(3 \\cdot 3) = -9$.',
          explanation: '1) $(-2)^3 = -8$ (odd # of negatives).  2) $(-3)^2 = 9$ (even, in parentheses).  3) $-3^2 = -9$ (only the $3$ is squared, then negated).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponents-prealgebra',
    sections: [
      {
        id: 'exp3-intro',
        type: 'text' as const,
        content: `# ⚡ Introduction to Exponents

**Part 3 of 5 — Multiplying & Dividing Powers**

---

> 🔑 **Why it works:** When the **bases match**, you can combine powers by counting factors instead of multiplying everything out. Two rules do all the work — the product rule and the quotient rule.`,
      },
      {
        id: 'exp3-product',
        type: 'text' as const,
        content: `## The Product Rule — Same Base, **Add** Exponents

When you multiply powers with the **same base**, just **add** the exponents:

$$a^m \\cdot a^n = a^{m+n}$$

**Why?** Count the factors. $2^3 \\cdot 2^4$ is:

$$\\underbrace{(2\\cdot 2\\cdot 2)}_{3}\\cdot\\underbrace{(2\\cdot 2\\cdot 2\\cdot 2)}_{4} = \\underbrace{2\\cdot 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2\\cdot 2}_{7} = 2^{7}$$

So $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$.

> ⚠️ The bases must be the **same**. You **cannot** use this rule on $2^3 \\cdot 5^2$ — different bases, so add nothing; just evaluate: $8 \\cdot 25 = 200$.`,
      },
      {
        id: 'exp3-quotient',
        type: 'text' as const,
        content: `## The Quotient Rule — Same Base, **Subtract** Exponents

When you **divide** powers with the same base, **subtract** the exponents:

$$\\frac{a^m}{a^n} = a^{m-n} \\quad (a \\ne 0)$$

**Why?** The matching factors on top and bottom cancel. $\\dfrac{5^6}{5^2}$:

$$\\frac{5\\cdot 5\\cdot 5\\cdot 5\\cdot 5\\cdot 5}{5\\cdot 5} = 5\\cdot 5\\cdot 5\\cdot 5 = 5^{4}$$

So $\\dfrac{5^6}{5^2} = 5^{6-2} = 5^4 = 625$.

| Rule | Operation on exponents | Example |
|------|------------------------|---------|
| Product: $a^m \\cdot a^n$ | **add** | $3^2 \\cdot 3^5 = 3^7$ |
| Quotient: $\\dfrac{a^m}{a^n}$ | **subtract** | $\\dfrac{4^9}{4^6} = 4^3$ |

> 💡 **Add when multiplying, subtract when dividing.** Notice the rules turn a hard multiplication into easy exponent arithmetic.`,
      },
      {
        id: 'exp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Move** 🔽

Choose the simplified power (keep it in exponent form).`,
        exercise: {
          dropdowns: [
            { label: '$3^2 \\cdot 3^5 =$', options: ['$3^7$', '$3^{10}$', '$9^7$', '$3^3$'] },
            { label: '$\\dfrac{7^8}{7^3} =$', options: ['$7^5$', '$7^{11}$', '$7^{24}$', '$1^5$'] },
            { label: '$x^4 \\cdot x =$', options: ['$x^5$', '$x^4$', '$x^3$', '$x^{4}$'] },
          ],
          correctAnswers: ['$3^7$', '$7^5$', '$x^5$'],
          hint1: 'Same base, multiplying → **add** exponents: $2 + 5 = 7$, so $3^7$.',
          hint2: 'Same base, dividing → **subtract** exponents: $8 - 3 = 5$, so $7^5$.',
          hint3: '$x$ alone means $x^1$. Multiplying: $4 + 1 = 5$, so $x^5$.',
          explanation: '$3^2 \\cdot 3^5 = 3^{2+5} = 3^7$.  $\\dfrac{7^8}{7^3} = 7^{8-3} = 7^5$.  $x^4 \\cdot x^1 = x^{4+1} = x^5$.',
        },
      },
      {
        id: 'exp3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student writes $2^3 \\cdot 2^4 = 2^{12}$. What went wrong?',
              options: [
                'They multiplied the exponents instead of adding them',
                'They added the bases',
                'The bases are different, so the rule does not apply',
                'Nothing — the answer is correct',
              ],
              correctAnswer: 0,
              explanation: 'The product rule **adds** exponents: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7$, not $2^{3 \\cdot 4} = 2^{12}$.',
            },
            {
              question: 'Which product can be combined with the product rule?',
              options: ['$5^2 \\cdot 5^3$', '$5^2 \\cdot 6^3$', '$5^2 + 5^3$', '$2^5 \\cdot 3^5$'],
              correctAnswer: 0,
              explanation: 'The product rule needs the **same base**. Only $5^2 \\cdot 5^3 = 5^5$ qualifies; the others have different bases or are not multiplication.',
            },
          ],
        },
      },
      {
        id: 'exp3-drill',
        type: 'input-boxes' as const,
        content: `**Simplify, Then Evaluate** 🧮

Combine using the rules, then give the **final numeric value**.

**1)** $2^3 \\cdot 2^4 = \\,?$
**2)** $\\dfrac{5^6}{5^4} = \\,?$
**3)** $\\dfrac{10^5}{10^2} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['128', '25', '1000'],
          hint1: '$2^3 \\cdot 2^4 = 2^{3+4} = 2^7$. Now $2^7 = 128$.',
          hint2: '$\\dfrac{5^6}{5^4} = 5^{6-4} = 5^2 = 25$.',
          hint3: '$\\dfrac{10^5}{10^2} = 10^{5-2} = 10^3 = 1000$.',
          explanation: '1) $2^7 = 128$.  2) $5^2 = 25$.  3) $10^3 = 1000$. Add when multiplying, subtract when dividing — then evaluate.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponents-prealgebra',
    sections: [
      {
        id: 'exp4-intro',
        type: 'text' as const,
        content: `# ⚡ Introduction to Exponents

**Part 4 of 5 — Power of a Power, Power of a Product & Negative Exponents**

---

> 🔑 **Big Payoff:** Three more rules let you simplify almost any expression with exponents — and negative exponents finally explain what happens "below" the zero power.`,
      },
      {
        id: 'exp4-power-power',
        type: 'text' as const,
        content: `## Power of a Power — **Multiply** Exponents

When a power is raised to another power, **multiply** the exponents:

$$\\left(a^m\\right)^n = a^{m \\cdot n}$$

**Why?** $\\left(2^3\\right)^2$ means $2^3$ used as a factor **twice**:

$$\\left(2^3\\right)^2 = 2^3 \\cdot 2^3 = 2^{3+3} = 2^{6} = 64$$

and $3 \\cdot 2 = 6$, which matches. ✓

> ⚠️ **Don't confuse the rules:** $2^3 \\cdot 2^2$ **adds** ($= 2^5$), but $\\left(2^3\\right)^2$ **multiplies** ($= 2^6$).`,
      },
      {
        id: 'exp4-power-product',
        type: 'text' as const,
        content: `## Power of a Product — **Distribute** the Exponent

When a **product** is raised to a power, apply the exponent to **each factor**:

$$(a \\cdot b)^n = a^n \\cdot b^n$$

**Example:** $(3 \\cdot 4)^2 = 3^2 \\cdot 4^2 = 9 \\cdot 16 = 144$.

> ✅ **Check the other way:** $(3 \\cdot 4)^2 = 12^2 = 144$ ✓ — same answer.

| Rule | What you do | Example |
|------|-------------|---------|
| $\\left(a^m\\right)^n$ | multiply exponents | $\\left(x^2\\right)^4 = x^8$ |
| $(ab)^n$ | give each factor the power | $(2x)^3 = 2^3 x^3 = 8x^3$ |`,
      },
      {
        id: 'exp4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply or Distribute?** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\left(x^2\\right)^4 =$', options: ['$x^8$', '$x^6$', '$x^{16}$', '$x^2$'] },
            { label: '$\\left(2^3\\right)^2 =$', options: ['$2^6$', '$2^5$', '$2^9$', '$2^1$'] },
            { label: '$(2x)^3 =$', options: ['$8x^3$', '$2x^3$', '$6x^3$', '$8x$'] },
          ],
          correctAnswers: ['$x^8$', '$2^6$', '$8x^3$'],
          hint1: 'Power of a power → **multiply**: $2 \\cdot 4 = 8$, so $x^8$.',
          hint2: 'Power of a power → **multiply**: $3 \\cdot 2 = 6$, so $2^6$.',
          hint3: 'Distribute the exponent to each factor: $(2x)^3 = 2^3 x^3 = 8x^3$.',
          explanation: '$\\left(x^2\\right)^4 = x^{2 \\cdot 4} = x^8$.  $\\left(2^3\\right)^2 = 2^{3 \\cdot 2} = 2^6$.  $(2x)^3 = 2^3 x^3 = 8x^3$.',
        },
      },
      {
        id: 'exp4-negexp',
        type: 'text' as const,
        content: `## Negative Exponents — Flip to a Fraction

What comes after $a^0 = 1$? Keep dividing by the base and the exponents go negative. A **negative exponent** means **reciprocal** (one over the positive power):

$$a^{-n} = \\frac{1}{a^{n}} \\quad (a \\ne 0)$$

**Examples:**

$$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} \\qquad 10^{-2} = \\frac{1}{10^2} = \\frac{1}{100}$$

| Power | Value |
|-------|-------|
| $2^2$ | $4$ |
| $2^1$ | $2$ |
| $2^0$ | $1$ |
| $2^{-1}$ | $\\dfrac{1}{2}$ |
| $2^{-2}$ | $\\dfrac{1}{4}$ |

> 💡 A negative exponent is **not** a negative number. $2^{-3} = \\dfrac{1}{8}$ is a small *positive* fraction — the negative sign tells you to **flip**, not to make it negative.`,
      },
      {
        id: 'exp4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $5^{-2}$?',
              options: ['$\\dfrac{1}{25}$', '$-25$', '$-10$', '$\\dfrac{1}{10}$'],
              correctAnswer: 0,
              explanation: 'A negative exponent flips to a reciprocal: $5^{-2} = \\dfrac{1}{5^2} = \\dfrac{1}{25}$. It is a small positive fraction, not a negative number.',
            },
            {
              question: 'Simplify $\\left(x^3\\right)^2$.',
              options: ['$x^6$', '$x^5$', '$x^9$', '$x^8$'],
              correctAnswer: 0,
              explanation: 'Power of a power **multiplies** exponents: $\\left(x^3\\right)^2 = x^{3 \\cdot 2} = x^6$ (not $x^{3+2} = x^5$).',
            },
          ],
        },
      },
      {
        id: 'exp4-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Rules** 🧮

Simplify and evaluate. For fractions, type them like \`1/8\`.

**1)** $\\left(2^3\\right)^2 = \\,?$  *(numeric value)*
**2)** $(3 \\cdot 4)^2 = \\,?$
**3)** $2^{-3} = \\,?$  *(as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['64', '144', '1/8'],
          hint1: '$\\left(2^3\\right)^2 = 2^{3 \\cdot 2} = 2^6 = 64$.',
          hint2: '$(3 \\cdot 4)^2 = 3^2 \\cdot 4^2 = 9 \\cdot 16 = 144$ (or $12^2 = 144$).',
          hint3: '$2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$. The negative exponent means flip.',
          explanation: '1) $2^6 = 64$.  2) $9 \\cdot 16 = 144$.  3) $2^{-3} = \\dfrac{1}{8}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponents-prealgebra',
    sections: [
      {
        id: 'exp5-intro',
        type: 'text' as const,
        content: `# ⚡ Introduction to Exponents

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and evaluate powers, (2) handle the special cases and negative bases, (3) multiply and divide same-base powers, and (4) use the power-of-a-power, power-of-a-product, and negative-exponent rules. Let's bring it all together.`,
      },
      {
        id: 'exp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Rule | Example |
|-----------|------|---------|
| Meaning of $a^n$ | $a$ used as a factor $n$ times | $2^4 = 2\\cdot2\\cdot2\\cdot2 = 16$ |
| Exponent of $1$ | $a^1 = a$ | $9^1 = 9$ |
| Exponent of $0$ | $a^0 = 1$ | $7^0 = 1$ |
| Multiply, same base | **add** exponents | $2^3 \\cdot 2^4 = 2^7$ |
| Divide, same base | **subtract** exponents | $\\dfrac{5^6}{5^2} = 5^4$ |
| Power of a power | **multiply** exponents | $\\left(2^3\\right)^2 = 2^6$ |
| Power of a product | give each factor the power | $(2x)^3 = 8x^3$ |
| Negative exponent | flip: $a^{-n} = \\dfrac{1}{a^n}$ | $2^{-3} = \\dfrac{1}{8}$ |

> ⚠️ **Top traps:** $3^4 \\ne 3\\cdot4$; $-3^2 \\ne (-3)^2$; multiplying **adds** exponents while a power-of-a-power **multiplies** them.`,
      },
      {
        id: 'exp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\dfrac{4^7}{4^5}$ to a single number.',
              options: ['$16$', '$4$', '$4^{12}$', '$8$'],
              correctAnswer: 0,
              explanation: 'Subtract exponents: $\\dfrac{4^7}{4^5} = 4^{7-5} = 4^2 = 16$.',
            },
            {
              question: 'Which expression equals $\\dfrac{1}{9}$?',
              options: ['$3^{-2}$', '$-3^2$', '$3^2$', '$(-3)^2$'],
              correctAnswer: 0,
              explanation: '$3^{-2} = \\dfrac{1}{3^2} = \\dfrac{1}{9}$. The negative exponent flips it into a fraction; the others equal $-9$, $9$, and $9$.',
            },
          ],
        },
      },
      {
        id: 'exp5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Rule** 🔽

Match each step to the correct simplified result.`,
        exercise: {
          dropdowns: [
            { label: '$5^2 \\cdot 5^3 =$', options: ['$5^5$', '$5^6$', '$25^5$', '$5^1$'] },
            { label: '$\\left(x^3\\right)^3 =$', options: ['$x^9$', '$x^6$', '$x^{27}$', '$x^1$'] },
            { label: '$8^0 + 8^1 =$', options: ['$9$', '$1$', '$8$', '$16$'] },
          ],
          correctAnswers: ['$5^5$', '$x^9$', '$9$'],
          hint1: 'Multiplying same base → add: $2 + 3 = 5$, so $5^5$.',
          hint2: 'Power of a power → multiply: $3 \\cdot 3 = 9$, so $x^9$.',
          hint3: '$8^0 = 1$ and $8^1 = 8$, so $1 + 8 = 9$.',
          explanation: '$5^2 \\cdot 5^3 = 5^{2+3} = 5^5$.  $\\left(x^3\\right)^3 = x^{3 \\cdot 3} = x^9$.  $8^0 + 8^1 = 1 + 8 = 9$.',
        },
      },
      {
        id: 'exp5-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

Evaluate each expression completely.

**1)** $(-2)^4 = \\,?$
**2)** $\\left(3^2\\right)^2 = \\,?$  *(numeric value)*
**3)** $10^{-2} = \\,?$  *(as a fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '81', '1/100'],
          hint1: '$(-2)^4$ has four negative factors (even) → positive: $16$.',
          hint2: '$\\left(3^2\\right)^2 = 3^{2 \\cdot 2} = 3^4 = 81$.',
          hint3: '$10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100}$.',
          explanation: '1) $(-2)^4 = 16$.  2) $3^4 = 81$.  3) $10^{-2} = \\dfrac{1}{100}$.',
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
              question: 'What does $3^4$ equal?',
              options: ['$81$', '$12$', '$64$', '$27$'],
              correctAnswer: 0,
              explanation: '$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$. It is *not* $3 \\cdot 4 = 12$.',
            },
            {
              question: 'Simplify $2^5 \\cdot 2^2$ to a single power.',
              options: ['$2^7$', '$2^{10}$', '$4^7$', '$2^3$'],
              correctAnswer: 0,
              explanation: 'Same base, multiplying → **add** exponents: $2^{5+2} = 2^7$.',
            },
            {
              question: 'Which equals $1$?',
              options: ['$15^0$', '$0^1$', '$15^1$', '$1^0 + 1^0$'],
              correctAnswer: 0,
              explanation: 'Any nonzero number to the zero power is $1$, so $15^0 = 1$. ($0^1 = 0$, $15^1 = 15$, and $1^0 + 1^0 = 1 + 1 = 2$.)',
            },
          ],
        },
      },
    ],
  },
]
