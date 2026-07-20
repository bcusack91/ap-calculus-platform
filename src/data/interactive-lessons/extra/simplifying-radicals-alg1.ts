import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Simplifying Radicals and Radical Operations (Algebra 1).
 * Registry key / DB Topic.slug: 'simplifying-radicals-alg1'.
 * 5 parts, gold-standard structure: meaning of square roots & perfect-square factoring →
 * simplifying with the product/quotient rules (incl. variables) → adding/subtracting like
 * radicals → multiplying radicals (incl. binomials/FOIL) → rationalizing denominators &
 * conjugates, mixed practice + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every simplification and radical value was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-alg1',
    sections: [
      {
        id: 'rad1-intro',
        type: 'text' as const,
        content: `# √ Simplifying Radicals

**Part 1 of 5 — Square Roots & Perfect Squares**

---

### Topics in This Part

| Section |
|---------|
| What a Square Root Means |
| Perfect Squares & Their Roots |
| Finding the Largest Perfect-Square Factor |

> 🔑 **Key Concept:** A radical like $\\sqrt{72}$ is *simplified* by pulling out the largest perfect square hiding inside it. Everything in this lesson rests on spotting perfect squares — so that's where we start.`,
      },
      {
        id: 'rad1-meaning',
        type: 'text' as const,
        content: `## What a Square Root Means

The **square root** of a number $n$, written $\\sqrt{n}$, is the value that multiplies by itself to give $n$:

$$\\sqrt{n} = a \\quad\\text{means}\\quad a \\cdot a = n \\quad (a \\ge 0)$$

The symbol $\\sqrt{\\;\\;}$ is the **radical sign**, and the number inside it is the **radicand**.

| Radical | Radicand | Value | Why |
|---------|----------|-------|-----|
| $\\sqrt{9}$ | $9$ | $3$ | $3\\cdot 3 = 9$ |
| $\\sqrt{25}$ | $25$ | $5$ | $5\\cdot 5 = 25$ |
| $\\sqrt{1}$ | $1$ | $1$ | $1\\cdot 1 = 1$ |
| $\\sqrt{0}$ | $0$ | $0$ | $0\\cdot 0 = 0$ |

> 💡 By convention $\\sqrt{\\;\\;}$ means the **principal (non-negative) root**. So $\\sqrt{25} = 5$, not $-5$.`,
      },
      {
        id: 'rad1-roots-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Roots** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{36} =$', options: ['$6$', '$18$', '$9$', '$12$'] },
            { label: '$\\sqrt{100} =$', options: ['$10$', '$50$', '$20$', '$1000$'] },
            { label: '$\\sqrt{49} =$', options: ['$7$', '$8$', '$24.5$', '$6$'] },
          ],
          correctAnswers: ['$6$', '$10$', '$7$'],
          hint1: '$6 \\cdot 6 = 36$.',
          hint2: '$10 \\cdot 10 = 100$.',
          hint3: '$7 \\cdot 7 = 49$.',
          explanation: '$\\sqrt{36}=6$, $\\sqrt{100}=10$, and $\\sqrt{49}=7$ — each radicand is a perfect square.',
        },
      },
      {
        id: 'rad1-perfect-squares',
        type: 'text' as const,
        content: `## Perfect Squares

A **perfect square** is a whole number whose square root is also a whole number. Memorizing the first dozen makes simplifying radicals fast:

$$1,\\; 4,\\; 9,\\; 16,\\; 25,\\; 36,\\; 49,\\; 64,\\; 81,\\; 100,\\; 121,\\; 144$$

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|------|------|
| $n^2$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ | $49$ | $64$ | $81$ | $100$ | $121$ | $144$ |

> 🔑 **Key Idea:** When the radicand is *not* a perfect square (like $\\sqrt{72}$), it can't become a whole number — but it can still be **simplified** by factoring out a perfect square.`,
      },
      {
        id: 'rad1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a perfect square?',
              options: ['$50$', '$64$', '$72$', '$30$'],
              correctAnswer: 1,
              explanation: '$64 = 8^2$, so $\\sqrt{64} = 8$. The others ($50, 72, 30$) are not whole-number squares.',
            },
            {
              question: 'What is $\\sqrt{81}$?',
              options: ['$8$', '$9$', '$18$', '$40.5$'],
              correctAnswer: 1,
              explanation: '$9 \\cdot 9 = 81$, so $\\sqrt{81} = 9$.',
            },
          ],
        },
      },
      {
        id: 'rad1-largest-factor',
        type: 'text' as const,
        content: `## Finding the Largest Perfect-Square Factor

To simplify a radical, look for the **largest perfect square that divides the radicand**.

### Example: $\\sqrt{72}$

Factors of $72$ include $4, 9,$ and $36$. The largest perfect square is $36$:

$$72 = 36 \\cdot 2 \\quad\\Rightarrow\\quad \\sqrt{72} = \\sqrt{36}\\cdot\\sqrt{2} = 6\\sqrt{2}$$

> 💡 You don't *have* to find the largest factor on the first try. If you pull out $\\sqrt{72} = \\sqrt{4}\\cdot\\sqrt{18} = 2\\sqrt{18}$, you simply repeat the process on $\\sqrt{18} = 3\\sqrt{2}$, giving $2\\cdot 3\\sqrt{2} = 6\\sqrt{2}$ — the same answer. Finding the largest square just saves a step.`,
      },
      {
        id: 'rad1-factor-drill',
        type: 'input-boxes' as const,
        content: `**Largest Perfect-Square Factor** 🧮

Enter the **largest perfect square** that divides each number.

**1)** $\\;48$
**2)** $\\;50$
**3)** $\\;75$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '25', '25'],
          hint1: '$48 = 16 \\cdot 3$. Is $16$ a perfect square? Yes ($4^2$).',
          hint2: '$50 = 25 \\cdot 2$, and $25 = 5^2$.',
          hint3: '$75 = 25 \\cdot 3$, and $25 = 5^2$. ($9$ does not divide $75$ evenly, so $25$ is the largest perfect-square factor.)',
          explanation: '1) $48 = 16\\cdot 3$, largest square $= 16$.  2) $50 = 25\\cdot 2$, largest square $= 25$.  3) $75 = 25\\cdot 3$, largest square $= 25$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-alg1',
    sections: [
      {
        id: 'rad2-intro',
        type: 'text' as const,
        content: `# √ Simplifying Radicals

**Part 2 of 5 — The Product & Quotient Rules**

---

> 🔑 **The Idea:** Radicals split across multiplication and division. That single fact is what lets us pull perfect squares out of any radicand — numbers *and* variables.`,
      },
      {
        id: 'rad2-rules',
        type: 'text' as const,
        content: `## The Two Core Rules

For non-negative numbers $a$ and $b$:

$$\\textbf{Product Rule:}\\quad \\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$$

$$\\textbf{Quotient Rule:}\\quad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (b \\ne 0)$$

These read **both directions** — you can split a radical apart *or* combine two radicals into one.

### Worked Example: $\\sqrt{48}$

$$\\sqrt{48} = \\sqrt{16\\cdot 3} = \\sqrt{16}\\cdot\\sqrt{3} = 4\\sqrt{3}$$

### Worked Example: $\\sqrt{\\dfrac{9}{25}}$

$$\\sqrt{\\frac{9}{25}} = \\frac{\\sqrt{9}}{\\sqrt{25}} = \\frac{3}{5}$$

> ⚠️ **The rules apply to multiplication and division only.** $\\sqrt{a+b} \\ne \\sqrt{a} + \\sqrt{b}$. For example $\\sqrt{9+16} = \\sqrt{25} = 5$, but $\\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Not equal!`,
      },
      {
        id: 'rad2-simplify-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{50}$.',
              options: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$25\\sqrt{2}$', '$10\\sqrt{5}$'],
              correctAnswer: 0,
              explanation: '$50 = 25 \\cdot 2$, so $\\sqrt{50} = \\sqrt{25}\\cdot\\sqrt{2} = 5\\sqrt{2}$.',
            },
            {
              question: 'A radical is **fully simplified** when the radicand has...',
              options: [
                'an even number inside',
                'no perfect-square factors other than $1$',
                'a number less than $10$',
                'a prime number inside',
              ],
              correctAnswer: 1,
              explanation: 'Simplest form means no remaining perfect-square factor. $\\sqrt{18}$ is not simplified ($9$ divides it); $3\\sqrt{2}$ is.',
            },
          ],
        },
      },
      {
        id: 'rad2-variables',
        type: 'text' as const,
        content: `## Radicals with Variables

A variable is a perfect square when its exponent is **even**, because $\\sqrt{x^{2}} = x$ (assuming $x \\ge 0$).

$$\\sqrt{x^{2}} = x,\\qquad \\sqrt{x^{4}} = x^{2},\\qquad \\sqrt{x^{6}} = x^{3}$$

For **odd** powers, split off one factor of $x$:

$$\\sqrt{x^{5}} = \\sqrt{x^{4}\\cdot x} = x^{2}\\sqrt{x}$$

### Worked Example: $\\sqrt{18x^{3}}$

Break the number and the variable separately:

$$\\sqrt{18x^{3}} = \\sqrt{9\\cdot 2 \\cdot x^{2}\\cdot x} = \\sqrt{9}\\cdot\\sqrt{x^{2}}\\cdot\\sqrt{2x} = 3x\\sqrt{2x}$$

> 💡 **Shortcut:** Halve each even exponent to bring it outside; an odd exponent leaves one copy inside. $\\sqrt{x^{7}} = x^{3}\\sqrt{x}$ (half of $6$ is $3$, one $x$ stays in).`,
      },
      {
        id: 'rad2-var-drill',
        type: 'dropdown-select' as const,
        content: `**Simplify with Variables** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{x^{8}} =$', options: ['$x^{4}$', '$x^{2}$', '$x^{16}$', '$x^{8}$'] },
            { label: '$\\sqrt{x^{9}} =$', options: ['$x^{4}\\sqrt{x}$', '$x^{3}\\sqrt{x}$', '$x^{5}$', '$x^{9}$'] },
            { label: '$\\sqrt{16x^{2}} =$', options: ['$4x$', '$8x$', '$4x^{2}$', '$16x$'] },
          ],
          correctAnswers: ['$x^{4}$', '$x^{4}\\sqrt{x}$', '$4x$'],
          hint1: '$\\sqrt{x^{8}}$: half of $8$ is $4$, so $x^{4}$.',
          hint2: '$\\sqrt{x^{9}} = \\sqrt{x^{8}\\cdot x} = x^{4}\\sqrt{x}$ (half of $8$ is $4$, one $x$ stays in).',
          hint3: '$\\sqrt{16x^{2}} = \\sqrt{16}\\cdot\\sqrt{x^{2}} = 4x$.',
          explanation: 'Even exponents halve and come out; odd exponents leave a single factor inside. $\\sqrt{16x^2}=4x$ because both $16$ and $x^2$ are perfect squares.',
        },
      },
      {
        id: 'rad2-combined',
        type: 'text' as const,
        content: `## Putting It Together

Most problems mix numbers and variables. Handle the number and each variable **separately**, then collect what comes out:

### Worked Example: $\\sqrt{50x^{4}y^{3}}$

$$\\sqrt{50x^{4}y^{3}} = \\sqrt{25 \\cdot 2 \\cdot x^{4} \\cdot y^{2} \\cdot y} = 5x^{2}y\\sqrt{2y}$$

- $25 \\to 5$ comes out, $2$ stays in
- $x^{4} \\to x^{2}$ comes out (nothing left in)
- $y^{3} \\to y$ comes out, one $y$ stays in

> 🔑 Everything with an **even count** escapes the radical; whatever has an **odd count** leaves exactly one factor behind.`,
      },
      {
        id: 'rad2-drill',
        type: 'input-boxes' as const,
        content: `**Simplify** 🧮

Write each in simplest radical form. Enter the **whole-number coefficient** in front of the radical (the number outside).

**1)** $\\sqrt{75} = a\\sqrt{3},\\quad a = \\,?$
**2)** $\\sqrt{32} = a\\sqrt{2},\\quad a = \\,?$
**3)** $\\sqrt{12x^{2}} = ax\\sqrt{3},\\quad a = \\,?$  *(assume $x \\ge 0$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '4', '2'],
          hint1: '$75 = 25\\cdot 3$, so $\\sqrt{75} = 5\\sqrt{3}$; coefficient $= 5$.',
          hint2: '$32 = 16\\cdot 2$, so $\\sqrt{32} = 4\\sqrt{2}$; coefficient $= 4$.',
          hint3: '$\\sqrt{12x^2} = \\sqrt{4\\cdot 3\\cdot x^2} = 2x\\sqrt{3}$; coefficient $= 2$.',
          explanation: '1) $\\sqrt{75}=5\\sqrt{3}$.  2) $\\sqrt{32}=4\\sqrt{2}$.  3) $\\sqrt{12x^2}=2x\\sqrt{3}$. The boxed coefficients are $5, 4, 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-alg1',
    sections: [
      {
        id: 'rad3-intro',
        type: 'text' as const,
        content: `# √ Simplifying Radicals

**Part 3 of 5 — Adding & Subtracting Radicals**

---

> 🔑 **The Big Rule:** You can only add or subtract radicals that are **like radicals** — same radicand. They behave exactly like combining like terms in algebra.`,
      },
      {
        id: 'rad3-like-radicals',
        type: 'text' as const,
        content: `## Like Radicals = Like Terms

Think of $\\sqrt{2}$ as a "unit," just like $x$. You can combine matching units:

$$3\\sqrt{2} + 4\\sqrt{2} = 7\\sqrt{2} \\qquad\\text{(just like } 3x + 4x = 7x\\text{)}$$

But you **cannot** combine unlike radicals:

$$3\\sqrt{2} + 4\\sqrt{5} \\quad\\text{stays as}\\quad 3\\sqrt{2} + 4\\sqrt{5}$$

| Expression | Combine? | Result |
|-----------|----------|--------|
| $5\\sqrt{3} + 2\\sqrt{3}$ | ✅ same radicand | $7\\sqrt{3}$ |
| $8\\sqrt{7} - 3\\sqrt{7}$ | ✅ same radicand | $5\\sqrt{7}$ |
| $\\sqrt{2} + \\sqrt{5}$ | ❌ different | $\\sqrt{2} + \\sqrt{5}$ |

> ⚠️ Add the **coefficients only** — the radicand never changes. $3\\sqrt{2} + 4\\sqrt{2} = 7\\sqrt{2}$, **not** $7\\sqrt{4}$.`,
      },
      {
        id: 'rad3-like-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $6\\sqrt{5} - 2\\sqrt{5}$.',
              options: ['$4\\sqrt{5}$', '$4$', '$4\\sqrt{0}$', '$8\\sqrt{5}$'],
              correctAnswer: 0,
              explanation: 'Same radicand $\\sqrt{5}$, so subtract coefficients: $6 - 2 = 4$, giving $4\\sqrt{5}$.',
            },
            {
              question: 'Which expression **cannot** be combined as written?',
              options: ['$2\\sqrt{3} + 5\\sqrt{3}$', '$\\sqrt{7} + 4\\sqrt{7}$', '$3\\sqrt{2} + 3\\sqrt{6}$', '$9\\sqrt{2} - \\sqrt{2}$'],
              correctAnswer: 2,
              explanation: '$3\\sqrt{2} + 3\\sqrt{6}$ has different radicands ($2$ vs $6$), so it cannot be combined. The others share a radicand.',
            },
          ],
        },
      },
      {
        id: 'rad3-simplify-first',
        type: 'text' as const,
        content: `## Simplify First, Then Combine

Radicals that *look* different may become like radicals after simplifying. **Always simplify each radical first.**

### Worked Example: $\\sqrt{18} + \\sqrt{8}$

Neither is simplified yet:

$$\\sqrt{18} = \\sqrt{9\\cdot 2} = 3\\sqrt{2}, \\qquad \\sqrt{8} = \\sqrt{4\\cdot 2} = 2\\sqrt{2}$$

Now they're like radicals:

$$3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}$$

### Worked Example: $\\sqrt{75} - \\sqrt{12}$

$$\\sqrt{75} = 5\\sqrt{3}, \\qquad \\sqrt{12} = 2\\sqrt{3} \\quad\\Rightarrow\\quad 5\\sqrt{3} - 2\\sqrt{3} = 3\\sqrt{3}$$

> 💡 **Two radicals that seem unlike often hide the same simplified radicand.** $\\sqrt{18}$ and $\\sqrt{8}$ both reduce to a multiple of $\\sqrt{2}$.`,
      },
      {
        id: 'rad3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Simplify Then Combine** 🔽

Work through $\\sqrt{50} + \\sqrt{8}$ step by step.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{50}$ simplifies to:', options: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$25\\sqrt{2}$', '$10\\sqrt{5}$'] },
            { label: '$\\sqrt{8}$ simplifies to:', options: ['$2\\sqrt{2}$', '$4\\sqrt{2}$', '$2\\sqrt{4}$', '$\\sqrt{8}$'] },
            { label: 'Combined sum:', options: ['$7\\sqrt{2}$', '$7\\sqrt{4}$', '$3\\sqrt{2}$', '$\\sqrt{58}$'] },
          ],
          correctAnswers: ['$5\\sqrt{2}$', '$2\\sqrt{2}$', '$7\\sqrt{2}$'],
          hint1: '$50 = 25\\cdot 2$, so $\\sqrt{50} = 5\\sqrt{2}$.',
          hint2: '$8 = 4\\cdot 2$, so $\\sqrt{8} = 2\\sqrt{2}$.',
          hint3: 'Now both are multiples of $\\sqrt{2}$: $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$.',
          explanation: '$\\sqrt{50}+\\sqrt{8} = 5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$. The radicand stays $2$; you add the coefficients $5+2=7$.',
        },
      },
      {
        id: 'rad3-three-terms',
        type: 'text' as const,
        content: `## Three or More Terms

The same idea scales up. Simplify every radical, then group like radicands.

### Worked Example: $2\\sqrt{3} + \\sqrt{12} - \\sqrt{27}$

$$\\sqrt{12} = 2\\sqrt{3}, \\qquad \\sqrt{27} = 3\\sqrt{3}$$

$$2\\sqrt{3} + 2\\sqrt{3} - 3\\sqrt{3} = (2 + 2 - 3)\\sqrt{3} = 1\\sqrt{3} = \\sqrt{3}$$

> 💡 Line up coefficients and add/subtract them in order — the shared radical $\\sqrt{3}$ just rides along unchanged.`,
      },
      {
        id: 'rad3-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract** 🧮

Simplify completely. Enter the **coefficient** in front of the resulting radical.

**1)** $\\sqrt{27} + \\sqrt{12} = a\\sqrt{3},\\quad a = \\,?$
**2)** $\\sqrt{45} - \\sqrt{20} = a\\sqrt{5},\\quad a = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '1'],
          hint1: '$\\sqrt{27} = 3\\sqrt{3}$ and $\\sqrt{12} = 2\\sqrt{3}$, so $3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$.',
          hint2: '$\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$, so $3\\sqrt{5} - 2\\sqrt{5} = 1\\sqrt{5} = \\sqrt{5}$.',
          hint3: 'After simplifying, add or subtract only the coefficients.',
          explanation: '1) $3\\sqrt{3}+2\\sqrt{3}=5\\sqrt{3}$, so $a=5$.  2) $3\\sqrt{5}-2\\sqrt{5}=\\sqrt{5}$, so $a=1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-alg1',
    sections: [
      {
        id: 'rad4-intro',
        type: 'text' as const,
        content: `# √ Simplifying Radicals

**Part 4 of 5 — Multiplying Radicals**

---

> 🔑 **The Idea:** Multiply the **outsides together** and the **insides together**, using the product rule $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ — then simplify the result.`,
      },
      {
        id: 'rad4-monomial',
        type: 'text' as const,
        content: `## Multiplying Single Radicals

Multiply coefficients with coefficients, radicands with radicands, then simplify:

$$\\left(a\\sqrt{m}\\right)\\left(b\\sqrt{n}\\right) = ab\\,\\sqrt{mn}$$

### Worked Example: $\\sqrt{6}\\cdot\\sqrt{2}$

$$\\sqrt{6}\\cdot\\sqrt{2} = \\sqrt{12} = \\sqrt{4\\cdot 3} = 2\\sqrt{3}$$

### Worked Example: $\\left(3\\sqrt{5}\\right)\\left(2\\sqrt{10}\\right)$

$$= (3\\cdot 2)\\,\\sqrt{5\\cdot 10} = 6\\sqrt{50} = 6\\cdot 5\\sqrt{2} = 30\\sqrt{2}$$

### A Radical Times Itself

$$\\sqrt{7}\\cdot\\sqrt{7} = \\sqrt{49} = 7 \\qquad\\text{In general: } \\left(\\sqrt{a}\\right)^2 = a$$

> 💡 A square root times **itself** removes the radical entirely. This is the engine behind rationalizing denominators in Part 5.`,
      },
      {
        id: 'rad4-mono-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{3}\\cdot\\sqrt{12}$.',
              options: ['$6$', '$\\sqrt{15}$', '$36$', '$4\\sqrt{3}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{3}\\cdot\\sqrt{12} = \\sqrt{36} = 6$.',
            },
            {
              question: 'What is $\\left(2\\sqrt{3}\\right)^2$?',
              options: ['$6$', '$12$', '$2\\sqrt{3}$', '$36$'],
              correctAnswer: 1,
              explanation: '$\\left(2\\sqrt{3}\\right)^2 = 2^2 \\cdot \\left(\\sqrt{3}\\right)^2 = 4 \\cdot 3 = 12$.',
            },
          ],
        },
      },
      {
        id: 'rad4-distribute',
        type: 'text' as const,
        content: `## Distributing & FOIL with Radicals

Radicals follow the **distributive property** and **FOIL** just like polynomials.

### Distribute: $\\sqrt{2}\\left(\\sqrt{6} + \\sqrt{10}\\right)$

$$= \\sqrt{2}\\cdot\\sqrt{6} + \\sqrt{2}\\cdot\\sqrt{10} = \\sqrt{12} + \\sqrt{20} = 2\\sqrt{3} + 2\\sqrt{5}$$

### FOIL: $\\left(\\sqrt{3} + 2\\right)\\left(\\sqrt{3} + 5\\right)$

$$\\underbrace{\\sqrt{3}\\cdot\\sqrt{3}}_{3} + \\underbrace{5\\sqrt{3}}_{\\text{O}} + \\underbrace{2\\sqrt{3}}_{\\text{I}} + \\underbrace{10}_{\\text{L}} = 3 + 7\\sqrt{3} + 10 = 13 + 7\\sqrt{3}$$

> 💡 The **First** product $\\sqrt{3}\\cdot\\sqrt{3} = 3$ loses its radical, while the **Outer/Inner** terms ($5\\sqrt{3}$ and $2\\sqrt{3}$) are like radicals you combine.`,
      },
      {
        id: 'rad4-foil-dropdown',
        type: 'dropdown-select' as const,
        content: `**FOIL the Product** 🔽

Expand $\\left(\\sqrt{5} + 1\\right)\\left(\\sqrt{5} - 3\\right)$ piece by piece.`,
        exercise: {
          dropdowns: [
            { label: 'First: $\\sqrt{5}\\cdot\\sqrt{5} =$', options: ['$5$', '$\\sqrt{5}$', '$25$', '$\\sqrt{10}$'] },
            { label: 'Outer + Inner: $-3\\sqrt{5} + 1\\sqrt{5} =$', options: ['$-2\\sqrt{5}$', '$2\\sqrt{5}$', '$-3\\sqrt{5}$', '$-2\\sqrt{25}$'] },
            { label: 'Last: $(1)(-3) =$', options: ['$-3$', '$3$', '$-3\\sqrt{5}$', '$-2$'] },
          ],
          correctAnswers: ['$5$', '$-2\\sqrt{5}$', '$-3$'],
          hint1: '$\\sqrt{5}\\cdot\\sqrt{5} = \\sqrt{25} = 5$.',
          hint2: 'Outer is $\\sqrt{5}\\cdot(-3) = -3\\sqrt{5}$; Inner is $1\\cdot\\sqrt{5} = \\sqrt{5}$; together $-3\\sqrt{5} + \\sqrt{5} = -2\\sqrt{5}$.',
          hint3: 'Last is $1 \\cdot (-3) = -3$.',
          explanation: 'Putting the pieces together: $5 - 2\\sqrt{5} - 3 = 2 - 2\\sqrt{5}$. (First $=5$, middle $=-2\\sqrt{5}$, Last $=-3$.)',
        },
      },
      {
        id: 'rad4-special',
        type: 'text' as const,
        content: `## A Special Product to Remember

Multiplying conjugates — a sum times a difference — wipes out the radicals through difference of squares:

$$\\left(\\sqrt{a} + \\sqrt{b}\\right)\\left(\\sqrt{a} - \\sqrt{b}\\right) = \\left(\\sqrt{a}\\right)^2 - \\left(\\sqrt{b}\\right)^2 = a - b$$

### Worked Example

$$\\left(\\sqrt{7} + \\sqrt{3}\\right)\\left(\\sqrt{7} - \\sqrt{3}\\right) = 7 - 3 = 4$$

> 🔑 Keep this in your pocket — it's the exact trick that rationalizes binomial denominators in Part 5.`,
      },
      {
        id: 'rad4-drill',
        type: 'input-boxes' as const,
        content: `**Multiply** 🧮

Simplify each product completely.

**1)** $\\sqrt{6}\\cdot\\sqrt{3} = a\\sqrt{2},\\quad a = \\,?$
**2)** $\\left(4\\sqrt{2}\\right)\\left(3\\sqrt{2}\\right) = \\,?$  *(a whole number)*
**3)** $\\left(\\sqrt{5}\\right)^2 = \\,?$  *(a whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '24', '5'],
          hint1: '$\\sqrt{6}\\cdot\\sqrt{3} = \\sqrt{18} = 3\\sqrt{2}$, so $a = 3$.',
          hint2: '$(4\\cdot 3)(\\sqrt{2}\\cdot\\sqrt{2}) = 12 \\cdot 2 = 24$.',
          hint3: '$\\left(\\sqrt{5}\\right)^2 = 5$, since a square root times itself removes the radical.',
          explanation: '1) $\\sqrt{18}=3\\sqrt{2}$, so $a=3$.  2) $12 \\cdot 2 = 24$.  3) $\\left(\\sqrt{5}\\right)^2 = 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'simplifying-radicals-alg1',
    sections: [
      {
        id: 'rad5-intro',
        type: 'text' as const,
        content: `# √ Simplifying Radicals

**Part 5 of 5 — Rationalizing Denominators & Mastery Check**

---

> 🔑 **The Rule of Form:** A radical expression isn't considered fully simplified while a radical sits in the **denominator**. Rationalizing clears it out.`,
      },
      {
        id: 'rad5-single',
        type: 'text' as const,
        content: `## Rationalizing a Single-Term Denominator

Multiply the top and bottom by the radical in the denominator. Since $\\sqrt{a}\\cdot\\sqrt{a} = a$, the bottom becomes rational.

### Worked Example: $\\dfrac{1}{\\sqrt{3}}$

$$\\frac{1}{\\sqrt{3}}\\cdot\\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{\\sqrt{3}}{\\sqrt{9}} = \\frac{\\sqrt{3}}{3}$$

### Worked Example: $\\dfrac{6}{\\sqrt{2}}$

$$\\frac{6}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$$

> 💡 Multiplying by $\\dfrac{\\sqrt{a}}{\\sqrt{a}}$ is multiplying by $1$, so the **value never changes** — only the form does.`,
      },
      {
        id: 'rad5-single-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rationalize $\\dfrac{1}{\\sqrt{5}}$.',
              options: ['$\\dfrac{\\sqrt{5}}{5}$', '$\\dfrac{5}{\\sqrt{5}}$', '$\\sqrt{5}$', '$\\dfrac{1}{5}$'],
              correctAnswer: 0,
              explanation: 'Multiply by $\\frac{\\sqrt{5}}{\\sqrt{5}}$: $\\frac{1}{\\sqrt{5}}\\cdot\\frac{\\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$.',
            },
            {
              question: 'Why do we multiply by $\\dfrac{\\sqrt{3}}{\\sqrt{3}}$ rather than just $\\sqrt{3}$?',
              options: [
                'To make the number bigger',
                'Because $\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$, so the value is unchanged',
                'To cancel the numerator',
                'Because $\\sqrt{3}\\cdot\\sqrt{3} = \\sqrt{3}$',
              ],
              correctAnswer: 1,
              explanation: '$\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$, so we change the form (clear the radical) without changing the value.',
            },
          ],
        },
      },
      {
        id: 'rad5-conjugate',
        type: 'text' as const,
        content: `## Rationalizing with a Conjugate

When the denominator is a **binomial** like $\\sqrt{5} + \\sqrt{2}$, multiply by its **conjugate** — the same terms with the opposite middle sign. This uses the difference of squares to erase both radicals:

$$\\left(\\sqrt{a} + \\sqrt{b}\\right)\\left(\\sqrt{a} - \\sqrt{b}\\right) = a - b$$

### Worked Example: $\\dfrac{1}{\\sqrt{5} + \\sqrt{2}}$

Multiply top and bottom by the conjugate $\\sqrt{5} - \\sqrt{2}$:

$$\\frac{1}{\\sqrt{5} + \\sqrt{2}}\\cdot\\frac{\\sqrt{5} - \\sqrt{2}}{\\sqrt{5} - \\sqrt{2}} = \\frac{\\sqrt{5} - \\sqrt{2}}{5 - 2} = \\frac{\\sqrt{5} - \\sqrt{2}}{3}$$

> ⚠️ The conjugate of $\\sqrt{5} + \\sqrt{2}$ is $\\sqrt{5} - \\sqrt{2}$ — **only the middle sign flips.** Don't change the order of the terms.`,
      },
      {
        id: 'rad5-conjugate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Conjugates & Forms** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Conjugate of $\\sqrt{7} - 3$:', options: ['$\\sqrt{7} + 3$', '$-\\sqrt{7} - 3$', '$3 - \\sqrt{7}$', '$\\sqrt{7} - 3$'] },
            { label: '$\\left(\\sqrt{6} + \\sqrt{2}\\right)\\left(\\sqrt{6} - \\sqrt{2}\\right) =$', options: ['$4$', '$8$', '$\\sqrt{8}$', '$2\\sqrt{3}$'] },
            { label: 'To rationalize $\\dfrac{2}{\\sqrt{3}}$, multiply by:', options: ['$\\dfrac{\\sqrt{3}}{\\sqrt{3}}$', '$\\dfrac{3}{3}$', '$\\dfrac{\\sqrt{3}}{3}$', '$\\dfrac{2}{\\sqrt{3}}$'] },
          ],
          correctAnswers: ['$\\sqrt{7} + 3$', '$4$', '$\\dfrac{\\sqrt{3}}{\\sqrt{3}}$'],
          hint1: 'A conjugate flips only the middle sign: $\\sqrt{7} - 3 \\to \\sqrt{7} + 3$.',
          hint2: 'Difference of squares: $\\left(\\sqrt{6}\\right)^2 - \\left(\\sqrt{2}\\right)^2 = 6 - 2 = 4$.',
          hint3: 'For a single-term radical denominator, multiply by that radical over itself: $\\frac{\\sqrt{3}}{\\sqrt{3}}$.',
          explanation: 'Conjugates flip the middle sign and produce $a - b$ via difference of squares. A single radical denominator is cleared by multiplying by $\\frac{\\sqrt{3}}{\\sqrt{3}} = 1$.',
        },
      },
      {
        id: 'rad5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\sqrt{n}$ | factor out the largest perfect square |
| Multiply / divide | $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$, $\\;\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$ |
| Add / subtract | combine **like** radicals (add coefficients) |
| Clear $\\dfrac{1}{\\sqrt{a}}$ | multiply by $\\dfrac{\\sqrt{a}}{\\sqrt{a}}$ |
| Clear a binomial denominator | multiply by the **conjugate** |

> ⚠️ Remember: $\\sqrt{a+b} \\ne \\sqrt{a} + \\sqrt{b}$, and you can only combine radicals with the **same** radicand.`,
      },
      {
        id: 'rad5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{32} - \\sqrt{8}$.',
              options: ['$2\\sqrt{2}$', '$\\sqrt{24}$', '$6\\sqrt{2}$', '$2\\sqrt{6}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{32} = 4\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$, so $4\\sqrt{2} - 2\\sqrt{2} = 2\\sqrt{2}$.',
            },
            {
              question: 'Rationalize $\\dfrac{4}{\\sqrt{2}}$.',
              options: ['$2\\sqrt{2}$', '$4\\sqrt{2}$', '$\\dfrac{4\\sqrt{2}}{2}$ left unsimplified', '$\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$\\frac{4}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$.',
            },
          ],
        },
      },
      {
        id: 'rad5-ready',
        type: 'text' as const,
        content: `## You've Built the Full Toolkit

You can now move fluently between every radical skill:

| Skill | You learned to... |
|-------|-------------------|
| **Simplify** | pull out the largest perfect square |
| **Add / Subtract** | combine like radicals |
| **Multiply** | use the product rule, distribute, and FOIL |
| **Rationalize** | clear radicals from a denominator with a conjugate |

> 💡 On a test, always ask two questions at the end: *Is there a perfect square still hiding inside?* and *Is there a radical still in the denominator?* If both answers are "no," you're done.`,
      },
      {
        id: 'rad5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Write $\\sqrt{45}$ in simplest radical form.',
              options: ['$3\\sqrt{5}$', '$9\\sqrt{5}$', '$5\\sqrt{3}$', '$\\sqrt{45}$'],
              correctAnswer: 0,
              explanation: '$45 = 9 \\cdot 5$, so $\\sqrt{45} = \\sqrt{9}\\cdot\\sqrt{5} = 3\\sqrt{5}$.',
            },
            {
              question: 'Simplify $\\sqrt{3}\\left(\\sqrt{3} + \\sqrt{12}\\right)$.',
              options: ['$3 + 6$', '$9$', '$\\sqrt{6} + \\sqrt{15}$', '$3 + \\sqrt{36}$'],
              correctAnswer: 1,
              explanation: '$\\sqrt{3}\\cdot\\sqrt{3} = 3$ and $\\sqrt{3}\\cdot\\sqrt{12} = \\sqrt{36} = 6$, so $3 + 6 = 9$.',
            },
            {
              question: 'The conjugate used to rationalize $\\dfrac{1}{4 - \\sqrt{2}}$ is:',
              options: ['$4 + \\sqrt{2}$', '$4 - \\sqrt{2}$', '$-4 - \\sqrt{2}$', '$\\sqrt{2} - 4$'],
              correctAnswer: 0,
              explanation: 'Flip only the middle sign: the conjugate of $4 - \\sqrt{2}$ is $4 + \\sqrt{2}$, giving a denominator of $16 - 2 = 14$.',
            },
          ],
        },
      },
    ],
  },
]
