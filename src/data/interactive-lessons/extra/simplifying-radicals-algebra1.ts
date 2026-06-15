import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Simplifying Radicals (Algebra 1).
 * Registry key / DB Topic.slug: 'simplifying-radicals-algebra1'.
 * 5 parts, gold-standard structure: what a radical is & perfect squares →
 * the product property & simplifying numeric radicals → variables under the
 * radical → operations (add/subtract, multiply, rationalize) → mixed practice
 * + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every simplification and radical value was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-algebra1',
    sections: [
      {
        id: 'sr1-intro',
        type: 'text' as const,
        content: `# 🟩 Simplifying Radicals

**Part 1 of 5 — Square Roots & Perfect Squares**

---

### Topics in This Part

| Section |
|---------|
| What a Square Root Means |
| Perfect Squares You Should Know |
| Is a Radical Already Simplified? |

> 🔑 **Key Concept:** A **radical** like $\\sqrt{n}$ asks "what number, multiplied by itself, gives $n$?" Before we can *simplify* radicals, we need to know our **perfect squares** cold — that's Part 1.`,
      },
      {
        id: 'sr1-meaning',
        type: 'text' as const,
        content: `## What a Square Root Means

The **square root** symbol $\\sqrt{\\phantom{n}}$ (the **radical**) undoes squaring. The number inside is called the **radicand**.

$$\\sqrt{n} = b \\quad\\text{means}\\quad b^2 = n \\;\\;(\\text{with } b \\ge 0)$$

So $\\sqrt{25} = 5$ because $5^2 = 25$, and $\\sqrt{49} = 7$ because $7^2 = 49$.

### Parts of a Radical

| Piece | Name | Example: $\\sqrt{36}$ |
|-------|------|----------------------|
| $\\sqrt{\\phantom{n}}$ | radical sign | the symbol |
| inside | radicand | $36$ |
| answer | principal root | $6$ |

> 💡 The **principal** (main) square root is the **non-negative** one. We write $\\sqrt{36} = 6$, not $\\pm 6$ — the $\\pm$ only appears when you *solve an equation* like $x^2 = 36$.`,
      },
      {
        id: 'sr1-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Roots** 🧮

Each radicand is a perfect square. Enter the whole-number value.

**1)** $\\sqrt{16} = \\,?$
**2)** $\\sqrt{121} = \\,?$
**3)** $\\sqrt{100} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '11', '10'],
          hint1: '$4^2 = 16$.',
          hint2: '$11^2 = 121$.',
          hint3: '$10^2 = 100$.',
          explanation: '1) $\\sqrt{16} = 4$.  2) $\\sqrt{121} = 11$.  3) $\\sqrt{100} = 10$. Each radicand is on the perfect-square list.',
        },
      },
      {
        id: 'sr1-perfect',
        type: 'text' as const,
        content: `## Perfect Squares You Should Know

A **perfect square** is a whole number whose square root is also a whole number. Memorizing these makes simplifying radicals fast:

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

So $\\sqrt{1}, \\sqrt{4}, \\sqrt{9}, \\sqrt{16}, \\dots, \\sqrt{144}$ all come out as whole numbers.

> 🔑 **Key Idea:** If the radicand **is** a perfect square, the radical simplifies to a whole number. If it **isn't**, we leave a radical in the answer — but we can often make it smaller, which is the whole point of this lesson.`,
      },
      {
        id: 'sr1-perfect-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $\\sqrt{81}$?',
              options: ['$9$', '$8$', '$\\pm 9$', '$40.5$'],
              correctAnswer: 0,
              explanation: '$9^2 = 81$, and the principal square root is non-negative, so $\\sqrt{81} = 9$.',
            },
            {
              question: 'Which number is a perfect square?',
              options: ['$50$', '$60$', '$64$', '$70$'],
              correctAnswer: 2,
              explanation: '$64 = 8^2$, so $\\sqrt{64} = 8$. None of $50$, $60$, $70$ is a perfect square.',
            },
          ],
        },
      },
      {
        id: 'sr1-simplified',
        type: 'text' as const,
        content: `## When Is a Radical "Already Simplified"?

A square-root radical is in **simplest form** when its radicand has **no perfect-square factor** other than $1$.

| Radical | Simplified? | Why |
|---------|-------------|-----|
| $\\sqrt{7}$ | ✅ yes | $7$ is prime — no perfect-square factor |
| $\\sqrt{10}$ | ✅ yes | $10 = 2\\cdot 5$, no perfect square inside |
| $\\sqrt{12}$ | ❌ no | $12 = 4\\cdot 3$, and $4$ is a perfect square |
| $\\sqrt{50}$ | ❌ no | $50 = 25\\cdot 2$, and $25$ is a perfect square |

> ⚠️ A radical like $\\sqrt{12}$ is **not wrong**, but it is **not finished**. In Part 2 we'll learn the rule that turns $\\sqrt{12}$ into $2\\sqrt{3}$.`,
      },
      {
        id: 'sr1-simplified-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which radical is already in simplest form?',
              options: ['$\\sqrt{12}$', '$\\sqrt{18}$', '$\\sqrt{15}$', '$\\sqrt{20}$'],
              correctAnswer: 2,
              explanation: '$15 = 3\\cdot 5$ has no perfect-square factor, so $\\sqrt{15}$ is simplified. The others contain $4$ or $9$: $12=4\\cdot3$, $18=9\\cdot2$, $20=4\\cdot5$.',
            },
            {
              question: 'Why is $\\sqrt{50}$ NOT in simplest form?',
              options: ['$50$ is even', '$50 = 25 \\cdot 2$ contains the perfect square $25$', '$50$ is too large', '$50$ is not prime'],
              correctAnswer: 1,
              explanation: 'A radical is simplified only when the radicand has no perfect-square factor besides $1$. Since $50 = 25\\cdot 2$ and $25 = 5^2$, we can pull out the $25$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-algebra1',
    sections: [
      {
        id: 'sr2-intro',
        type: 'text' as const,
        content: `# 🟩 Simplifying Radicals

**Part 2 of 5 — The Product Property**

---

> 🔑 **The Idea:** Split the radicand into a **perfect-square factor** times "the rest," then take the square root of the perfect square and move it out front.`,
      },
      {
        id: 'sr2-property',
        type: 'text' as const,
        content: `## The Product Property of Radicals

For any non-negative numbers $a$ and $b$:

$$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$$

This lets us **break a radical apart**. The trick is to break off the **largest perfect-square factor**.

### Worked Example: $\\sqrt{12}$

The largest perfect-square factor of $12$ is $4$ (since $12 = 4\\cdot 3$):

$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\cdot\\sqrt{3} = 2\\sqrt{3}$$

> ✅ **Check:** $(2\\sqrt{3})^2 = 2^2 \\cdot 3 = 4\\cdot 3 = 12$ ✓. The number that comes out front is called the **coefficient**.`,
      },
      {
        id: 'sr2-factor-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Perfect-Square Factor** 🔽

For each radical, choose the **largest perfect square** that divides the radicand.`,
        exercise: {
          dropdowns: [
            { label: 'Largest perfect-square factor of $18$:', options: ['$9$', '$4$', '$2$', '$3$'] },
            { label: 'Largest perfect-square factor of $32$:', options: ['$16$', '$4$', '$8$', '$2$'] },
            { label: 'Largest perfect-square factor of $45$:', options: ['$9$', '$5$', '$15$', '$25$'] },
          ],
          correctAnswers: ['$9$', '$16$', '$9$'],
          hint1: '$18 = 9 \\cdot 2$, and $9 = 3^2$.',
          hint2: '$32 = 16 \\cdot 2$, and $16 = 4^2$. ($4$ also divides $32$, but $16$ is larger.)',
          hint3: '$45 = 9 \\cdot 5$, and $9 = 3^2$. ($25$ does not divide $45$.)',
          explanation: 'Using the largest perfect square gives a one-step simplification: $\\sqrt{18}=3\\sqrt{2}$, $\\sqrt{32}=4\\sqrt{2}$, $\\sqrt{45}=3\\sqrt{5}$.',
        },
      },
      {
        id: 'sr2-worked2',
        type: 'text' as const,
        content: `## Putting It Together

Once you have the largest perfect-square factor, finish in one line.

### Worked Example: $\\sqrt{50}$

$50 = 25\\cdot 2$, and $25$ is a perfect square:

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25}\\cdot\\sqrt{2} = 5\\sqrt{2}$$

### Worked Example: $\\sqrt{72}$

The largest perfect-square factor of $72$ is $36$ (since $72 = 36\\cdot 2$):

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$

> ⚠️ **Pull out the LARGEST perfect square.** If you only spot $\\sqrt{72} = \\sqrt{4\\cdot 18} = 2\\sqrt{18}$, you're not done — $18 = 9\\cdot 2$, so $2\\sqrt{18} = 2\\cdot 3\\sqrt{2} = 6\\sqrt{2}$. Same answer, just more steps.`,
      },
      {
        id: 'sr2-simplify-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{18}$.',
              options: ['$3\\sqrt{2}$', '$2\\sqrt{3}$', '$9\\sqrt{2}$', '$\\sqrt{18}$ (already simplified)'],
              correctAnswer: 0,
              explanation: '$18 = 9\\cdot 2$, so $\\sqrt{18} = \\sqrt{9}\\cdot\\sqrt{2} = 3\\sqrt{2}$.',
            },
            {
              question: 'Simplify $\\sqrt{75}$.',
              options: ['$5\\sqrt{3}$', '$3\\sqrt{5}$', '$25\\sqrt{3}$', '$5\\sqrt{15}$'],
              correctAnswer: 0,
              explanation: '$75 = 25\\cdot 3$, so $\\sqrt{75} = \\sqrt{25}\\cdot\\sqrt{3} = 5\\sqrt{3}$.',
            },
          ],
        },
      },
      {
        id: 'sr2-coefficient-note',
        type: 'text' as const,
        content: `## Reading the Answer

A simplified radical has two pieces:

$$\\underbrace{a}_{\\text{coefficient}}\\,\\sqrt{\\underbrace{b}_{\\text{radicand}}}$$

The **coefficient** $a$ is whatever escaped the radical; the **radicand** $b$ is what's left inside (with no perfect-square factor remaining).

> 💡 In the next drill, you'll report just the coefficient $a$ — the number standing in front of the radical.`,
      },
      {
        id: 'sr2-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify These Radicals** 🧮

Write each in the form $a\\sqrt{b}$. Enter the **coefficient $a$** (the number out front).

**1)** $\\sqrt{8} = a\\sqrt{2},\\quad a = \\,?$
**2)** $\\sqrt{48} = a\\sqrt{3},\\quad a = \\,?$
**3)** $\\sqrt{200} = a\\sqrt{2},\\quad a = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '10'],
          hint1: '$8 = 4\\cdot 2$, so $\\sqrt{8} = 2\\sqrt{2}$ and $a = 2$.',
          hint2: '$48 = 16\\cdot 3$, so $\\sqrt{48} = 4\\sqrt{3}$ and $a = 4$.',
          hint3: '$200 = 100\\cdot 2$, so $\\sqrt{200} = 10\\sqrt{2}$ and $a = 10$.',
          explanation: '1) $\\sqrt{8}=2\\sqrt{2}$, $a=2$.  2) $\\sqrt{48}=4\\sqrt{3}$, $a=4$.  3) $\\sqrt{200}=10\\sqrt{2}$, $a=10$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-algebra1',
    sections: [
      {
        id: 'sr3-intro',
        type: 'text' as const,
        content: `# 🟩 Simplifying Radicals

**Part 3 of 5 — Variables Under the Radical**

---

> 🔑 **Why it works:** A variable raised to an **even** power is a perfect square. For example $x^2 = (x)^2$ and $x^6 = (x^3)^2$, so $\\sqrt{x^6} = x^3$.

*Throughout this part we assume variables represent **non-negative** numbers, so $\\sqrt{x^2} = x$.*`,
      },
      {
        id: 'sr3-evenpowers',
        type: 'text' as const,
        content: `## Even Powers Come Out Whole

To square-root a variable power, **halve the exponent**:

$$\\sqrt{x^{2n}} = x^{n}$$

| Radical | Simplified | Why |
|---------|-----------|-----|
| $\\sqrt{x^2}$ | $x$ | half of $2$ is $1$ |
| $\\sqrt{x^4}$ | $x^2$ | half of $4$ is $2$ |
| $\\sqrt{x^{10}}$ | $x^5$ | half of $10$ is $5$ |

> 💡 **Even exponent → comes out cleanly.** The exponent inside is doubled; outside it is halved.`,
      },
      {
        id: 'sr3-even-dropdown',
        type: 'dropdown-select' as const,
        content: `**Halve the Exponent** 🔽

Every exponent here is **even**, so each variable comes out cleanly.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{x^8} =$', options: ['$x^4$', '$x^2$', '$x^8$', '$x^{16}$'] },
            { label: '$\\sqrt{x^6} =$', options: ['$x^3$', '$x^2$', '$x^6$', '$x^{12}$'] },
            { label: '$\\sqrt{9x^4} =$', options: ['$3x^2$', '$9x^2$', '$3x$', '$3x^4$'] },
          ],
          correctAnswers: ['$x^4$', '$x^3$', '$3x^2$'],
          hint1: 'Half of $8$ is $4$, so $\\sqrt{x^8} = x^4$.',
          hint2: 'Half of $6$ is $3$, so $\\sqrt{x^6} = x^3$.',
          hint3: '$\\sqrt{9} = 3$ and $\\sqrt{x^4} = x^2$, so $\\sqrt{9x^4} = 3x^2$.',
          explanation: 'Even powers halve and exit the radical; a perfect-square coefficient like $9$ comes out as the whole number $3$.',
        },
      },
      {
        id: 'sr3-oddpowers',
        type: 'text' as const,
        content: `## Odd Powers Leave One Behind

If the exponent is **odd**, split off one factor so the rest is even.

### Worked Example: $\\sqrt{x^7}$

Write $x^7 = x^6 \\cdot x$ (largest even power is $x^6$):

$$\\sqrt{x^7} = \\sqrt{x^6 \\cdot x} = \\sqrt{x^6}\\cdot\\sqrt{x} = x^3\\sqrt{x}$$

### Worked Example: $\\sqrt{50x^3}$

Combine numbers and variables. $50 = 25\\cdot 2$ and $x^3 = x^2\\cdot x$:

$$\\sqrt{50x^3} = \\sqrt{25\\cdot 2 \\cdot x^2 \\cdot x} = \\sqrt{25}\\,\\sqrt{x^2}\\,\\sqrt{2x} = 5x\\sqrt{2x}$$

> ⚠️ Everything with an **even** power (and every perfect square) leaves the radical; whatever is left — the odd leftover — stays inside.`,
      },
      {
        id: 'sr3-var-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{12x^2}$.',
              options: ['$2x\\sqrt{3}$', '$2\\sqrt{3x}$', '$x\\sqrt{12}$', '$6x$'],
              correctAnswer: 0,
              explanation: '$12 = 4\\cdot 3$ and $\\sqrt{x^2} = x$, so $\\sqrt{12x^2} = \\sqrt{4}\\,\\sqrt{x^2}\\,\\sqrt{3} = 2x\\sqrt{3}$.',
            },
            {
              question: 'Simplify $\\sqrt{18x^5}$.',
              options: ['$3x^2\\sqrt{2x}$', '$3x\\sqrt{2x}$', '$9x^2\\sqrt{2x}$', '$3x^2\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$18 = 9\\cdot 2$ and $x^5 = x^4\\cdot x$. So $\\sqrt{18x^5} = \\sqrt{9}\\,\\sqrt{x^4}\\,\\sqrt{2x} = 3x^2\\sqrt{2x}$.',
            },
          ],
        },
      },
      {
        id: 'sr3-checklist',
        type: 'text' as const,
        content: `## A Three-Step Checklist

For any radical mixing numbers and variables, work through it in order:

| Step | Action |
|------|--------|
| 1 | Pull out the largest **perfect-square number** factor |
| 2 | **Halve** each even variable exponent and move it out |
| 3 | Split each **odd** exponent into (even)$\\cdot$(one leftover); the leftover stays inside |

> 🔑 Whatever comes out is the **coefficient**; whatever stays in is the **radicand**. The next drill checks each piece separately.`,
      },
      {
        id: 'sr3-var-drill',
        type: 'input-boxes' as const,
        content: `**Coefficients & Exponents** 🧮

Simplify each, then answer about the result.

**1)** $\\sqrt{x^{12}} = x^{?}$  — enter the exponent.
**2)** $\\sqrt{49x^6} = 7x^{?}$  — enter the exponent.
**3)** $\\sqrt{8x^2} = a\\,x\\sqrt{2}$  — enter the coefficient $a$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '3', '2'],
          hint1: 'Half of $12$ is $6$, so $\\sqrt{x^{12}} = x^6$.',
          hint2: '$\\sqrt{49} = 7$ and half of $6$ is $3$, so $\\sqrt{49x^6} = 7x^3$.',
          hint3: '$8 = 4\\cdot 2$, so $\\sqrt{8x^2} = 2x\\sqrt{2}$ and $a = 2$.',
          explanation: '1) exponent $6$.  2) exponent $3$.  3) $a = 2$. Even exponents halve; perfect squares exit as whole numbers.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-algebra1',
    sections: [
      {
        id: 'sr4-intro',
        type: 'text' as const,
        content: `# 🟩 Simplifying Radicals

**Part 4 of 5 — Adding, Multiplying & Rationalizing**

---

> 🔑 **Big Picture:** Radicals behave a lot like variables. You can only **add** "like radicals" (same radicand), you **multiply** straight across, and a radical in a **denominator** must be cleared out.`,
      },
      {
        id: 'sr4-addsub',
        type: 'text' as const,
        content: `## Adding & Subtracting Radicals

You can combine radicals **only when the radicand is identical** — just like combining like terms ($3x + 5x = 8x$).

$$3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2} \\qquad 7\\sqrt{5} - 2\\sqrt{5} = 5\\sqrt{5}$$

But $\\sqrt{2} + \\sqrt{3}$ **cannot** be combined — different radicands.

### The Catch: Simplify FIRST

Sometimes radicals look different but become "like" after simplifying:

$$\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$$

> ⚠️ Never add the radicands themselves. $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$, **not** $\\sqrt{25} = 5$.`,
      },
      {
        id: 'sr4-addsub-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $4\\sqrt{3} + 2\\sqrt{3}$.',
              options: ['$6\\sqrt{3}$', '$6\\sqrt{6}$', '$8\\sqrt{3}$', '$6\\sqrt{9}$'],
              correctAnswer: 0,
              explanation: 'Same radicand, so add the coefficients: $4 + 2 = 6$. The radical stays $\\sqrt{3}$, giving $6\\sqrt{3}$.',
            },
            {
              question: 'Simplify $\\sqrt{12} + \\sqrt{27}$.',
              options: ['$5\\sqrt{3}$', '$\\sqrt{39}$', '$2\\sqrt{3} + 3\\sqrt{3}$ (cannot finish)', '$13\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{12} = 2\\sqrt{3}$ and $\\sqrt{27} = 3\\sqrt{3}$. Now they are like radicals: $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.',
            },
          ],
        },
      },
      {
        id: 'sr4-multiply',
        type: 'text' as const,
        content: `## Multiplying Radicals

Multiply **coefficients with coefficients** and **radicands with radicands**, then simplify:

$$a\\sqrt{m}\\cdot b\\sqrt{n} = (a\\cdot b)\\sqrt{m\\cdot n}$$

### Worked Example: $\\sqrt{6}\\cdot\\sqrt{2}$

$$\\sqrt{6}\\cdot\\sqrt{2} = \\sqrt{12} = 2\\sqrt{3}$$

### Worked Example: $2\\sqrt{3}\\cdot 5\\sqrt{6}$

$$2\\sqrt{3}\\cdot 5\\sqrt{6} = (2\\cdot 5)\\sqrt{3\\cdot 6} = 10\\sqrt{18} = 10\\cdot 3\\sqrt{2} = 30\\sqrt{2}$$

> 💡 A useful special case: $\\sqrt{a}\\cdot\\sqrt{a} = a$. For instance $\\sqrt{7}\\cdot\\sqrt{7} = 7$.`,
      },
      {
        id: 'sr4-mult-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Simplify** 🧮

Write each product in the form $a\\sqrt{b}$ (fully simplified).

**1)** $\\sqrt{3}\\cdot\\sqrt{12} = \\,?$  *(a whole number — enter it)*
**2)** $\\sqrt{2}\\cdot\\sqrt{10} = a\\sqrt{5}$, enter $a$.
**3)** $\\sqrt{5}\\cdot\\sqrt{5} = \\,?$  *(a whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '2', '5'],
          hint1: '$\\sqrt{3}\\cdot\\sqrt{12} = \\sqrt{36} = 6$.',
          hint2: '$\\sqrt{2}\\cdot\\sqrt{10} = \\sqrt{20} = 2\\sqrt{5}$, so $a = 2$.',
          hint3: '$\\sqrt{5}\\cdot\\sqrt{5} = \\sqrt{25} = 5$ (a root times itself gives the radicand).',
          explanation: '1) $\\sqrt{36}=6$.  2) $\\sqrt{20}=2\\sqrt{5}$, so $a=2$.  3) $\\sqrt{25}=5$.',
        },
      },
      {
        id: 'sr4-rationalize',
        type: 'text' as const,
        content: `## Rationalizing the Denominator

A radical is **not** in simplest form if it sits in a **denominator**. To fix this, multiply the top and bottom by that radical — this clears the root downstairs because $\\sqrt{a}\\cdot\\sqrt{a} = a$.

### Worked Example: $\\dfrac{1}{\\sqrt{2}}$

$$\\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$

### Worked Example: $\\dfrac{6}{\\sqrt{3}}$

$$\\frac{6}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$$

> 🔑 **Goal:** No radical in any denominator and no perfect-square factor in any radicand. That is the official "simplest form" for a radical expression.`,
      },
      {
        id: 'sr4-rationalize-dropdown',
        type: 'dropdown-select' as const,
        content: `**Rationalize & Combine** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'To rationalize $\\frac{1}{\\sqrt{5}}$, multiply by:', options: ['$\\frac{\\sqrt{5}}{\\sqrt{5}}$', '$\\frac{5}{5}$', '$\\frac{\\sqrt{5}}{5}$', '$\\frac{1}{\\sqrt{5}}$'] },
            { label: '$\\frac{1}{\\sqrt{5}}$ rationalized equals:', options: ['$\\frac{\\sqrt{5}}{5}$', '$\\frac{5}{\\sqrt{5}}$', '$\\frac{1}{5}$', '$\\sqrt{5}$'] },
            { label: '$\\sqrt{2}\\cdot\\sqrt{8}$ equals:', options: ['$4$', '$\\sqrt{10}$', '$2\\sqrt{2}$', '$16$'] },
          ],
          correctAnswers: ['$\\frac{\\sqrt{5}}{\\sqrt{5}}$', '$\\frac{\\sqrt{5}}{5}$', '$4$'],
          hint1: 'Multiply numerator and denominator by the denominator radical, $\\sqrt{5}$ — i.e. by $\\frac{\\sqrt{5}}{\\sqrt{5}}$ (which equals $1$).',
          hint2: '$\\frac{1}{\\sqrt{5}}\\cdot\\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$.',
          hint3: '$\\sqrt{2}\\cdot\\sqrt{8} = \\sqrt{16} = 4$.',
          explanation: 'Multiplying by $\\frac{\\sqrt{5}}{\\sqrt{5}}=1$ clears the denominator: $\\frac{1}{\\sqrt5}=\\frac{\\sqrt5}{5}$. And $\\sqrt2\\cdot\\sqrt8=\\sqrt{16}=4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-algebra1',
    sections: [
      {
        id: 'sr5-intro',
        type: 'text' as const,
        content: `# 🟩 Simplifying Radicals

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) evaluate perfect-square roots, (2) simplify numeric radicals with the product property, (3) handle variables under the radical, and (4) add, multiply, and rationalize. Let's put it all together.`,
      },
      {
        id: 'sr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\sqrt{N}$ | pull out the **largest** perfect-square factor: $\\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}$ |
| Square-root $\\sqrt{x^{2n}}$ | **halve** the exponent: $\\sqrt{x^{2n}}=x^{n}$ |
| Add/subtract | combine **like radicals** only (same radicand); simplify first |
| Multiply | $a\\sqrt{m}\\cdot b\\sqrt{n}=(ab)\\sqrt{mn}$, then simplify |
| Rationalize $\\dfrac{c}{\\sqrt{a}}$ | multiply by $\\dfrac{\\sqrt{a}}{\\sqrt{a}}$ |

> ⚠️ **Simplest form means:** no perfect-square factor left inside, and no radical in a denominator.`,
      },
      {
        id: 'sr5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{98}$.',
              options: ['$7\\sqrt{2}$', '$2\\sqrt{7}$', '$49\\sqrt{2}$', '$7\\sqrt{14}$'],
              correctAnswer: 0,
              explanation: '$98 = 49\\cdot 2$, so $\\sqrt{98} = \\sqrt{49}\\cdot\\sqrt{2} = 7\\sqrt{2}$.',
            },
            {
              question: 'Simplify $\\sqrt{20} + \\sqrt{45}$.',
              options: ['$5\\sqrt{5}$', '$\\sqrt{65}$', '$2\\sqrt{5} + 3\\sqrt{5}$ (cannot combine)', '$13\\sqrt{5}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{20}=2\\sqrt{5}$ and $\\sqrt{45}=3\\sqrt{5}$, both like radicals: $2\\sqrt{5}+3\\sqrt{5}=5\\sqrt{5}$.',
            },
          ],
        },
      },
      {
        id: 'sr5-all-four',
        type: 'text' as const,
        content: `## One Problem, Every Skill

A single expression can touch all four skills at once. Take $\\sqrt{32x^4}$:

$$\\sqrt{32x^4} = \\sqrt{16\\cdot 2}\\,\\sqrt{x^4} = 4x^2\\sqrt{2}$$

Pull out the perfect-square number ($16$), halve the even exponent ($x^4 \\to x^2$), and leave the rest ($2$) inside. The next drill mixes simplifying, multiplying, and rationalizing in one set.`,
      },
      {
        id: 'sr5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** $\\sqrt{32x^4} = a\\,x^2\\sqrt{2}$ — enter the coefficient $a$.
**2)** $\\sqrt{6}\\cdot\\sqrt{6} = \\,?$  *(whole number)*
**3)** $\\dfrac{10}{\\sqrt{5}} = a\\sqrt{5}$ — enter $a$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '6', '2'],
          hint1: '$32 = 16\\cdot 2$ and $\\sqrt{x^4} = x^2$, so $\\sqrt{32x^4} = 4x^2\\sqrt{2}$, giving $a = 4$.',
          hint2: '$\\sqrt{6}\\cdot\\sqrt{6} = \\sqrt{36} = 6$.',
          hint3: '$\\frac{10}{\\sqrt5}\\cdot\\frac{\\sqrt5}{\\sqrt5} = \\frac{10\\sqrt5}{5} = 2\\sqrt5$, so $a = 2$.',
          explanation: '1) $a=4$.  2) $\\sqrt{36}=6$.  3) $\\frac{10}{\\sqrt5}=2\\sqrt5$, so $a=2$.',
        },
      },
      {
        id: 'sr5-final-reminder',
        type: 'text' as const,
        content: `## Before the Exit Quiz

Keep the two rules of **simplest form** in mind as you finish:

> ✅ **No perfect-square factor** left inside any radical.
> ✅ **No radical** left in any denominator.

If both are true, your answer is fully simplified. Three questions to go.`,
      },
      {
        id: 'sr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which expression is the fully simplified form of $\\sqrt{72}$?',
              options: ['$6\\sqrt{2}$', '$2\\sqrt{18}$', '$3\\sqrt{8}$', '$8\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: '$72 = 36\\cdot 2$, so $\\sqrt{72} = 6\\sqrt{2}$. The others either are not fully simplified or are incorrect.',
            },
            {
              question: 'Simplify $\\sqrt{50x^3}$ (assume $x \\ge 0$).',
              options: ['$5x\\sqrt{2x}$', '$5x^2\\sqrt{2}$', '$25x\\sqrt{2x}$', '$5x\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$50 = 25\\cdot 2$ and $x^3 = x^2\\cdot x$, so $\\sqrt{50x^3} = \\sqrt{25}\\,\\sqrt{x^2}\\,\\sqrt{2x} = 5x\\sqrt{2x}$.',
            },
            {
              question: 'Rationalize the denominator: $\\dfrac{3}{\\sqrt{3}}$.',
              options: ['$\\sqrt{3}$', '$3\\sqrt{3}$', '$\\dfrac{\\sqrt{3}}{3}$', '$1$'],
              correctAnswer: 0,
              explanation: '$\\frac{3}{\\sqrt3}\\cdot\\frac{\\sqrt3}{\\sqrt3} = \\frac{3\\sqrt3}{3} = \\sqrt3$.',
            },
          ],
        },
      },
    ],
  },
]
