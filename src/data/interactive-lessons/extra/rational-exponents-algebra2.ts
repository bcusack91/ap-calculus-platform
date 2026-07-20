import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rational Exponents (Algebra 2).
 * Registry key: 'rational-exponents-algebra2' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rational-exponents-algebra2',
    sections: [
      {
        id: 're1-intro',
        type: 'text' as const,
        content: `# ⏫ Rational Exponents

**Part 1 of 5 — From Roots to Fractional Powers**

---

### Topics in This Part

| Section |
|---------|
| What a Fractional Exponent Means |
| The $\\frac{1}{n}$ Power = the $n$th Root |
| Reading and Writing Radical Form |

> 🔑 **Key Concept:** A rational (fractional) exponent is just a new way to *write a root*. The exponent $\\frac{1}{2}$ means "square root," $\\frac{1}{3}$ means "cube root," and so on. Master this one idea and every radical becomes a power you can manipulate with the ordinary exponent rules.`,
      },
      {
        id: 're1-definition',
        type: 'text' as const,
        content: `## The $\\frac{1}{n}$ Power

The defining rule is:

$$a^{1/n} = \\sqrt[n]{a}$$

The **denominator** of the exponent is the **index** of the root.

| Power | Means | Value |
|-------|-------|-------|
| $25^{1/2}$ | $\\sqrt{25}$ | $5$ |
| $8^{1/3}$ | $\\sqrt[3]{8}$ | $2$ |
| $81^{1/4}$ | $\\sqrt[4]{81}$ | $3$ |
| $32^{1/5}$ | $\\sqrt[5]{32}$ | $2$ |

### Why does this make sense?

If $a^{1/n}$ behaves like a normal exponent, then raising it to the $n$th power should multiply the exponents:

$$\\left(a^{1/n}\\right)^n = a^{\\frac{1}{n}\\cdot n} = a^1 = a$$

So $a^{1/n}$ is exactly the number that gives $a$ when raised to the $n$th power — which is the *definition* of the $n$th root.

> 🔑 **Remember:** A square root has **no visible index** ($\\sqrt{a}$), but it is really an index of $2$, so $\\sqrt{a} = a^{1/2}$.`,
      },
      {
        id: 're1-match-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which radical equals $7^{1/3}$?',
              options: ['$\\sqrt[3]{7}$', '$\\sqrt{7}$', '$\\sqrt[7]{3}$', '$3\\sqrt{7}$'],
              correctAnswer: 0,
              explanation: 'The denominator $3$ is the index of the root, so $7^{1/3} = \\sqrt[3]{7}$.',
            },
            {
              question: 'Rewrite $\\sqrt[5]{x}$ using a rational exponent.',
              options: ['$x^{1/5}$', '$x^5$', '$5^{1/x}$', '$x^{-1/5}$'],
              correctAnswer: 0,
              explanation: 'A fifth root has index $5$, which becomes the denominator: $\\sqrt[5]{x} = x^{1/5}$.',
            },
          ],
        },
      },
      {
        id: 're1-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the $\\frac{1}{n}$ Powers** 🧮

Each of these is a whole number. Find it.

**1)** $36^{1/2} = \\,?$
**2)** $27^{1/3} = \\,?$
**3)** $16^{1/4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', '2'],
          hint1: '$36^{1/2} = \\sqrt{36}$. What number squared is $36$?',
          hint2: '$27^{1/3} = \\sqrt[3]{27}$. What number cubed is $27$? ($3^3 = 27$.)',
          hint3: '$16^{1/4} = \\sqrt[4]{16}$. What number to the 4th power is $16$? ($2^4 = 16$.)',
          explanation: '1) $\\sqrt{36} = 6$.  2) $\\sqrt[3]{27} = 3$.  3) $\\sqrt[4]{16} = 2$.',
        },
      },
      {
        id: 're1-radical-form',
        type: 'text' as const,
        content: `## Translating Both Directions

Fluency means converting back and forth instantly.

| Radical form | Exponent form |
|--------------|---------------|
| $\\sqrt{13}$ | $13^{1/2}$ |
| $\\sqrt[3]{10}$ | $10^{1/3}$ |
| $\\sqrt[4]{m}$ | $m^{1/4}$ |
| $\\sqrt[6]{2}$ | $2^{1/6}$ |

> 💡 **Tip:** Whenever you see a root, picture the exponent $\\frac{1}{\\text{index}}$. Once it's an exponent, every rule you already know (product, quotient, power-of-a-power) applies — that's the whole reason rational exponents exist.

In Part 2 we tackle the case where the numerator isn't $1$, like $8^{2/3}$.`,
      },
      {
        id: 're1-direction-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate Each Expression** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt[4]{9}$ in exponent form:', options: ['$9^{1/4}$', '$9^{4}$', '$4^{1/9}$', '$9^{1/2}$'] },
            { label: '$11^{1/2}$ in radical form:', options: ['$\\sqrt{11}$', '$\\sqrt[11]{2}$', '$\\sqrt[2]{1}$', '$11\\sqrt{2}$'] },
            { label: '$\\sqrt[3]{5}$ in exponent form:', options: ['$5^{1/3}$', '$5^{3}$', '$3^{1/5}$', '$5^{2/3}$'] },
          ],
          correctAnswers: ['$9^{1/4}$', '$\\sqrt{11}$', '$5^{1/3}$'],
          hint1: 'The root index becomes the denominator of the exponent.',
          hint2: 'An exponent of $\\frac{1}{2}$ is a square root (index $2$, written with no number).',
          hint3: 'For $\\sqrt[3]{5}$ the index is $3$, so the exponent is $\\frac{1}{3}$.',
          explanation: '$\\sqrt[4]{9} = 9^{1/4}$; $\\;11^{1/2} = \\sqrt{11}$; $\\;\\sqrt[3]{5} = 5^{1/3}$. Index $\\leftrightarrow$ denominator.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rational-exponents-algebra2',
    sections: [
      {
        id: 're2-intro',
        type: 'text' as const,
        content: `# ⏫ Rational Exponents

**Part 2 of 5 — The $\\frac{m}{n}$ Power**

---

> 🔑 **The Idea:** When the numerator isn't $1$, the exponent does *two jobs*: the **denominator** takes a root, and the **numerator** raises to a power. You can do them in either order.`,
      },
      {
        id: 're2-rule',
        type: 'text' as const,
        content: `## The General Rule

$$a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m}$$

Read it as: **"$n$th root, raised to the $m$th power."**

Both orders give the same answer, but one is almost always easier:

> 💡 **Best practice:** Take the **root first**, then apply the power. Rooting first keeps the numbers small. Compare for $8^{2/3}$:
> - Root first: $\\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$ ✓ (easy)
> - Power first: $\\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$ ✓ (correct, but you had to know $\\sqrt[3]{64}$)

Same answer, much less arithmetic the first way.`,
      },
      {
        id: 're2-worked',
        type: 'text' as const,
        content: `## Worked Examples (root first)

### Example: $27^{2/3}$

$$27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2 = (3)^2 = 9$$

### Example: $16^{3/4}$

$$16^{3/4} = \\left(\\sqrt[4]{16}\\right)^3 = (2)^3 = 8$$

### Example: $32^{3/5}$

$$32^{3/5} = \\left(\\sqrt[5]{32}\\right)^3 = (2)^3 = 8$$

> 🔑 **The denominator is the root; the numerator is the power.** Mixing them up (e.g., cubing first when you meant to root) is the #1 error on this topic.`,
      },
      {
        id: 're2-structure-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the expression $a^{3/4}$, what does the denominator $4$ tell you to do?',
              options: ['Take the 4th root', 'Raise to the 4th power', 'Multiply by 4', 'Take the 3rd root'],
              correctAnswer: 0,
              explanation: 'The denominator is the index of the root, so $4$ means "take the 4th root." The numerator $3$ is the power.',
            },
            {
              question: 'Which is the easiest correct way to evaluate $8^{2/3}$?',
              options: ['$\\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$', '$\\sqrt[3]{8^2} = \\sqrt[3]{64}$', '$8 \\cdot \\frac{2}{3}$', '$\\left(\\sqrt{8}\\right)^3$'],
              correctAnswer: 0,
              explanation: 'Root first: $\\sqrt[3]{8} = 2$, then $2^2 = 4$. Power-first also gives $4$ but forces you to simplify $\\sqrt[3]{64}$.',
            },
          ],
        },
      },
      {
        id: 're2-evaluate-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate $\\frac{m}{n}$ Powers** 🧮

Each is a whole number. Take the root first, then the power.

**1)** $4^{3/2} = \\,?$
**2)** $8^{4/3} = \\,?$
**3)** $81^{3/4} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '16', '27'],
          hint1: '$4^{3/2} = \\left(\\sqrt{4}\\right)^3 = 2^3$.',
          hint2: '$8^{4/3} = \\left(\\sqrt[3]{8}\\right)^4 = 2^4$.',
          hint3: '$81^{3/4} = \\left(\\sqrt[4]{81}\\right)^3 = 3^3$.',
          explanation: '1) $2^3 = 8$.  2) $2^4 = 16$.  3) $3^3 = 27$. Root first keeps the base small.',
        },
      },
      {
        id: 're2-radical-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Form** 🔽

Choose the equivalent expression.`,
        exercise: {
          dropdowns: [
            { label: '$a^{2/5}$ in radical form:', options: ['$\\sqrt[5]{a^2}$', '$\\sqrt[2]{a^5}$', '$\\sqrt[5]{a}^{\\,5}$', '$\\sqrt[5]{a}$'] },
            { label: '$\\left(\\sqrt[3]{x}\\right)^4$ in exponent form:', options: ['$x^{4/3}$', '$x^{3/4}$', '$x^{12}$', '$x^{7}$'] },
            { label: '$25^{3/2}$ equals:', options: ['$125$', '$75$', '$15$', '$625$'] },
          ],
          correctAnswers: ['$\\sqrt[5]{a^2}$', '$x^{4/3}$', '$125$'],
          hint1: 'Denominator $\\to$ index, numerator $\\to$ power inside (or outside) the root.',
          hint2: 'The cube root is exponent $\\frac{1}{3}$; the 4th power multiplies: $\\frac{1}{3}\\cdot 4 = \\frac{4}{3}$.',
          hint3: '$25^{3/2} = \\left(\\sqrt{25}\\right)^3 = 5^3 = 125$.',
          explanation: '$a^{2/5} = \\sqrt[5]{a^2}$; $\\;\\left(\\sqrt[3]{x}\\right)^4 = x^{4/3}$; $\\;25^{3/2} = 5^3 = 125$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rational-exponents-algebra2',
    sections: [
      {
        id: 're3-intro',
        type: 'text' as const,
        content: `# ⏫ Rational Exponents

**Part 3 of 5 — Negative Exponents & Simplifying**

---

> 🔑 **Why it matters:** Once roots are exponents, the *full* exponent toolkit applies — including the **negative-exponent rule** for reciprocals and the **product/quotient rules** for combining powers.`,
      },
      {
        id: 're3-negative',
        type: 'text' as const,
        content: `## Negative Rational Exponents

A negative exponent means **reciprocal** — it does *not* make the answer negative:

$$a^{-m/n} = \\frac{1}{a^{m/n}} = \\frac{1}{\\left(\\sqrt[n]{a}\\right)^m}$$

### Example: $8^{-2/3}$

$$8^{-2/3} = \\frac{1}{8^{2/3}} = \\frac{1}{\\left(\\sqrt[3]{8}\\right)^2} = \\frac{1}{2^2} = \\frac{1}{4}$$

### Example: $16^{-1/2}$

$$16^{-1/2} = \\frac{1}{16^{1/2}} = \\frac{1}{\\sqrt{16}} = \\frac{1}{4}$$

> ⚠️ **Common trap:** $8^{-2/3}$ is **not** $-4$. The negative sign flips the base to the denominator; the result is the positive fraction $\\frac{1}{4}$.`,
      },
      {
        id: 're3-neg-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A negative rational exponent tells you to:',
              options: ['Take the reciprocal', 'Make the answer negative', 'Add a minus sign to the root', 'Subtract 1 from the base'],
              correctAnswer: 0,
              explanation: '$a^{-m/n} = \\frac{1}{a^{m/n}}$. The sign signals a reciprocal, not a negative result.',
            },
            {
              question: 'Evaluate $25^{-1/2}$.',
              options: ['$\\frac{1}{5}$', '$-5$', '$5$', '$-\\frac{1}{5}$'],
              correctAnswer: 0,
              explanation: '$25^{-1/2} = \\frac{1}{\\sqrt{25}} = \\frac{1}{5}$. Positive base $\\to$ positive (reciprocal) result.',
            },
          ],
        },
      },
      {
        id: 're3-rules',
        type: 'text' as const,
        content: `## The Exponent Rules Still Apply

Rational exponents obey **every** law of exponents you already know:

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^{r}\\cdot a^{s} = a^{r+s}$ | $a^{1/2}\\cdot a^{1/3} = a^{5/6}$ |
| Quotient | $\\dfrac{a^{r}}{a^{s}} = a^{r-s}$ | $\\dfrac{a^{3/4}}{a^{1/4}} = a^{1/2}$ |
| Power of a power | $\\left(a^{r}\\right)^{s} = a^{rs}$ | $\\left(a^{2/3}\\right)^{6} = a^{4}$ |

### Worked Example: $a^{1/2}\\cdot a^{1/3}$

Add the exponents over a common denominator:

$$a^{1/2}\\cdot a^{1/3} = a^{\\frac{3}{6} + \\frac{2}{6}} = a^{5/6}$$

> 💡 Adding and subtracting these exponents is just **fraction arithmetic**. Find a common denominator, combine, and simplify.`,
      },
      {
        id: 're3-combine-drill',
        type: 'input-boxes' as const,
        content: `**Combine the Powers** 🧮

Simplify and enter the resulting **single exponent** as a fraction (e.g. \`5/6\`) or integer.

**1)** $x^{2/3}\\cdot x^{1/6} \\Rightarrow x^{\\,?}$
**2)** $\\dfrac{x^{5/4}}{x^{3/4}} \\Rightarrow x^{\\,?}$
**3)** $\\left(x^{3/4}\\right)^{8} \\Rightarrow x^{\\,?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5/6', '1/2', '6'],
          hint1: 'Add: $\\frac{2}{3} + \\frac{1}{6} = \\frac{4}{6} + \\frac{1}{6}$.',
          hint2: 'Subtract: $\\frac{5}{4} - \\frac{3}{4} = \\frac{2}{4}$, then simplify.',
          hint3: 'Multiply: $\\frac{3}{4}\\cdot 8 = \\frac{24}{4}$.',
          explanation: '1) $\\frac{4}{6}+\\frac{1}{6}=\\frac{5}{6}$.  2) $\\frac{2}{4}=\\frac{1}{2}$.  3) $\\frac{24}{4}=6$.',
        },
      },
      {
        id: 're3-neg-eval-drill',
        type: 'input-boxes' as const,
        content: `**Negative Exponents** 🧮

Evaluate each. Answers are fractions — enter like \`1/4\`.

**1)** $27^{-1/3} = \\,?$
**2)** $4^{-3/2} = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1/3', '1/8'],
          hint1: '$27^{-1/3} = \\frac{1}{\\sqrt[3]{27}} = \\frac{1}{3}$.',
          hint2: '$4^{-3/2} = \\frac{1}{4^{3/2}} = \\frac{1}{\\left(\\sqrt{4}\\right)^3} = \\frac{1}{2^3}$.',
          explanation: '1) $\\frac{1}{3}$.  2) $\\frac{1}{2^3} = \\frac{1}{8}$. The negative sign creates the reciprocal.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rational-exponents-algebra2',
    sections: [
      {
        id: 're4-intro',
        type: 'text' as const,
        content: `# ⏫ Rational Exponents

**Part 4 of 5 — Solving Equations & Variable Expressions**

---

> 🔑 **Big Payoff:** Rational exponents let you **undo** powers and roots cleanly. To kill a $\\frac{m}{n}$ power, raise both sides to its **reciprocal** $\\frac{n}{m}$ — because $\\frac{m}{n}\\cdot\\frac{n}{m} = 1$.`,
      },
      {
        id: 're4-solve',
        type: 'text' as const,
        content: `## Solving $x^{m/n} = k$

The reciprocal exponent is the key. Since $\\left(x^{m/n}\\right)^{n/m} = x^{1} = x$:

$$x^{m/n} = k \\;\\Longrightarrow\\; x = k^{\\,n/m}$$

### Example: $x^{2/3} = 9$

Raise both sides to the reciprocal power $\\frac{3}{2}$:

$$x = 9^{3/2} = \\left(\\sqrt{9}\\right)^3 = 3^3 = 27$$

> ✅ **Check:** $27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2 = 3^2 = 9$ ✓

### Example: $x^{3/4} = 8$

Raise both sides to the reciprocal power $\\frac{4}{3}$:

$$x = 8^{4/3} = \\left(\\sqrt[3]{8}\\right)^4 = 2^4 = 16$$

> ✅ **Check:** $16^{3/4} = \\left(\\sqrt[4]{16}\\right)^3 = 2^3 = 8$ ✓`,
      },
      {
        id: 're4-reciprocal-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve $x^{4/5} = k$, raise both sides to which power?',
              options: ['$\\frac{5}{4}$', '$\\frac{4}{5}$', '$-\\frac{4}{5}$', '$5$'],
              correctAnswer: 0,
              explanation: 'Use the reciprocal $\\frac{5}{4}$, because $\\frac{4}{5}\\cdot\\frac{5}{4} = 1$, leaving $x^1 = x$.',
            },
            {
              question: 'Solve $x^{1/2} = 7$.',
              options: ['$x = 49$', '$x = \\sqrt{7}$', '$x = 14$', '$x = \\frac{7}{2}$'],
              correctAnswer: 0,
              explanation: 'Raise both sides to the power $2$: $x = 7^2 = 49$. Check: $\\sqrt{49} = 7$ ✓.',
            },
          ],
        },
      },
      {
        id: 're4-simplify',
        type: 'text' as const,
        content: `## Simplifying Variable Expressions

Convert radicals to exponents, combine, then convert back if asked.

### Example: $\\sqrt[3]{x}\\cdot\\sqrt{x}$

Rewrite as exponents and add:

$$x^{1/3}\\cdot x^{1/2} = x^{\\frac{2}{6}+\\frac{3}{6}} = x^{5/6} = \\sqrt[6]{x^5}$$

### Example: $\\dfrac{\\sqrt{x}}{\\sqrt[4]{x}}$

$$\\frac{x^{1/2}}{x^{1/4}} = x^{\\frac{2}{4}-\\frac{1}{4}} = x^{1/4} = \\sqrt[4]{x}$$

> 💡 **Strategy:** Radicals with *different indices* are hard to combine — but as exponents they're just fractions you can add or subtract. Always switch to exponent form first.`,
      },
      {
        id: 're4-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Equations** 🧮

Each solution is a whole number. Raise both sides to the reciprocal power.

**1)** $x^{2/3} = 25 \\Rightarrow x = \\,?$
**2)** $x^{3/2} = 8 \\Rightarrow x = \\,?$
**3)** $x^{4/3} = 16 \\Rightarrow x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['125', '4', '8'],
          hint1: '$x = 25^{3/2} = \\left(\\sqrt{25}\\right)^3 = 5^3$.',
          hint2: '$x = 8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2$.',
          hint3: '$x = 16^{3/4} = \\left(\\sqrt[4]{16}\\right)^3 = 2^3$.',
          explanation: '1) $5^3 = 125$.  2) $2^2 = 4$.  3) $2^3 = 8$. Each uses the reciprocal exponent.',
        },
      },
      {
        id: 're4-simplify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Simplify by Combining Exponents** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$x^{1/4}\\cdot x^{1/4}$ equals:', options: ['$x^{1/2}$', '$x^{1/16}$', '$x^{1/8}$', '$x^{2}$'] },
            { label: '$\\sqrt[3]{x}\\cdot\\sqrt[3]{x}$ equals:', options: ['$x^{2/3}$', '$x^{1/9}$', '$x^{1/3}$', '$x^{2}$'] },
            { label: '$\\dfrac{x^{7/6}}{x^{1/6}}$ equals:', options: ['$x$', '$x^{7}$', '$x^{6/6}$', '$x^{8/6}$'] },
          ],
          correctAnswers: ['$x^{1/2}$', '$x^{2/3}$', '$x$'],
          hint1: 'Product rule adds exponents: $\\frac{1}{4}+\\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$.',
          hint2: '$\\sqrt[3]{x} = x^{1/3}$, so $\\frac{1}{3}+\\frac{1}{3} = \\frac{2}{3}$.',
          hint3: 'Quotient rule subtracts: $\\frac{7}{6}-\\frac{1}{6} = \\frac{6}{6} = 1$, and $x^1 = x$.',
          explanation: '$x^{1/4}\\cdot x^{1/4} = x^{1/2}$; $\\;\\sqrt[3]{x}\\cdot\\sqrt[3]{x} = x^{2/3}$; $\\;\\frac{x^{7/6}}{x^{1/6}} = x^{1} = x$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rational-exponents-algebra2',
    sections: [
      {
        id: 're5-intro',
        type: 'text' as const,
        content: `# ⏫ Rational Exponents

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) convert between roots and fractional powers, (2) evaluate $\\frac{m}{n}$ powers, (3) handle negative exponents and combine powers, and (4) solve equations. Time to put it all together.`,
      },
      {
        id: 're5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| $a^{1/n}$ | $\\sqrt[n]{a}$ — denominator is the root index |
| $a^{m/n}$ | $\\left(\\sqrt[n]{a}\\right)^m$ — root first, then power |
| $a^{-m/n}$ | $\\dfrac{1}{a^{m/n}}$ — reciprocal, **not** negative |
| Combine powers | add/subtract exponents (common denominator) |
| Solve $x^{m/n}=k$ | $x = k^{\\,n/m}$ — raise to the reciprocal |

> ⚠️ **Top two errors:** (1) swapping the root and the power (denominator is the root!), and (2) thinking a negative exponent makes the answer negative — it makes a **reciprocal**.`,
      },
      {
        id: 're5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Evaluate $32^{2/5}$.',
              options: ['$4$', '$8$', '$2$', '$16$'],
              correctAnswer: 0,
              explanation: '$32^{2/5} = \\left(\\sqrt[5]{32}\\right)^2 = 2^2 = 4$.',
            },
            {
              question: 'Simplify $\\dfrac{x^{5/6}}{x^{1/3}}$.',
              options: ['$x^{1/2}$', '$x^{1/3}$', '$x^{2/3}$', '$x^{7/6}$'],
              correctAnswer: 0,
              explanation: '$\\frac{5}{6} - \\frac{1}{3} = \\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$, so the result is $x^{1/2}$.',
            },
          ],
        },
      },
      {
        id: 're5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** $64^{2/3} = \\,?$  *(whole number)*
**2)** $9^{-1/2} = \\,?$  *(fraction like* \`1/3\`*)*
**3)** $x^{3/2} = 27 \\Rightarrow x = \\,?$  *(whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '1/3', '9'],
          hint1: '$64^{2/3} = \\left(\\sqrt[3]{64}\\right)^2 = 4^2$.',
          hint2: '$9^{-1/2} = \\frac{1}{\\sqrt{9}}$.',
          hint3: 'Raise to the reciprocal: $x = 27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2 = 3^2$.',
          explanation: '1) $4^2 = 16$.  2) $\\frac{1}{3}$.  3) $27^{2/3} = 3^2 = 9$.',
        },
      },
      {
        id: 're5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which is equal to $\\sqrt[4]{a^3}$?',
              options: ['$a^{3/4}$', '$a^{4/3}$', '$a^{12}$', '$a^{7}$'],
              correctAnswer: 0,
              explanation: 'The index $4$ is the denominator and the inside power $3$ is the numerator: $\\sqrt[4]{a^3} = a^{3/4}$.',
            },
            {
              question: 'Evaluate $16^{-3/4}$.',
              options: ['$\\frac{1}{8}$', '$-8$', '$8$', '$\\frac{1}{64}$'],
              correctAnswer: 0,
              explanation: '$16^{-3/4} = \\frac{1}{16^{3/4}} = \\frac{1}{\\left(\\sqrt[4]{16}\\right)^3} = \\frac{1}{2^3} = \\frac{1}{8}$.',
            },
            {
              question: 'Solve $x^{2/3} = 4$.',
              options: ['$x = 8$', '$x = 2$', '$x = 6$', '$x = 16$'],
              correctAnswer: 0,
              explanation: 'Raise both sides to $\\frac{3}{2}$: $x = 4^{3/2} = \\left(\\sqrt{4}\\right)^3 = 2^3 = 8$. Check: $8^{2/3} = 2^2 = 4$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
