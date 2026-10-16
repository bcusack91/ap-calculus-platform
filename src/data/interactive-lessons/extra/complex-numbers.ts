import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Complex Numbers and Operations (AP Precalculus).
 * Registry key / DB Topic.slug: 'complex-numbers'.
 * 7 parts, gold-standard structure: the imaginary unit & square roots of negatives →
 * add/subtract/multiply → conjugates & conjugate zeros → modulus & the complex plane →
 * polar (trig) form → quadratics with complex roots & real-world framing →
 * mixed mastery + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every value, index, and worked step was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn1-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 1 of 7 — The Imaginary Unit & Square Roots of Negatives**

---

### Topics in This Part

| Section |
|---------|
| Why We Need a New Number |
| Defining $i$ and Simplifying Square Roots |
| Small Powers of $i$ and Complex Zeros |

> 🔑 **Key Concept:** There is no *real* number whose square is negative. Mathematicians fixed this by inventing one — the **imaginary unit** $i$, defined so that $i^2 = -1$. That single idea unlocks the **complex numbers**, and once you master it, equations that "had no solution" suddenly do.`,
      },
      {
        id: 'cn1-define',
        type: 'text' as const,
        content: `## Why We Need a New Number

Try to solve $x^2 = -1$. No real number works: a positive squared is positive, a negative squared is positive, and $0^2 = 0$. So we **define** a brand-new number to plug the hole:

$$i = \\sqrt{-1}, \\qquad\\text{which means}\\qquad i^2 = -1$$

With $i$ in hand, we can take the square root of **any** negative number:

$$\\sqrt{-9} = \\sqrt{9}\\cdot\\sqrt{-1} = 3i, \\qquad \\sqrt{-7} = \\sqrt{7}\\,i$$

### The General Rule

$$\\sqrt{-a} = i\\sqrt{a} \\quad (a > 0)$$

| Expression | Simplified |
|-----------|-----------|
| $\\sqrt{-25}$ | $5i$ |
| $\\sqrt{-16}$ | $4i$ |
| $\\sqrt{-12}$ | $\\sqrt{4}\\cdot\\sqrt{3}\\,i = 2i\\sqrt{3}$ |
| $\\sqrt{-1}$ | $i$ |

> ⚠️ **Pull out the $i$ first.** The rule $\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}$ **fails** for negatives. For example $\\sqrt{-4}\\cdot\\sqrt{-9} = (2i)(3i) = 6i^2 = -6$, **not** $\\sqrt{36} = 6$. Always convert to $i$ before multiplying.`,
      },
      {
        id: 'cn1-roots-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $\\sqrt{-49}$.',
              options: ['$7i$', '$-7$', '$49i$', '$7$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{-49} = \\sqrt{49}\\cdot\\sqrt{-1} = 7i$.',
            },
            {
              question: 'Simplify $\\sqrt{-18}$ completely.',
              options: ['$3i\\sqrt{2}$', '$9i\\sqrt{2}$', '$-3\\sqrt{2}$', '$3\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{-18} = i\\sqrt{18} = i\\sqrt{9\\cdot 2} = 3i\\sqrt{2}$.',
            },
            {
              question: 'What is the value of $i^2$?',
              options: ['$-1$', '$1$', '$i$', '$-i$'],
              correctAnswer: 0,
              explanation: '$i$ is defined precisely so that $i^2 = -1$. This is the foundation of everything that follows.',
            },
          ],
        },
      },
      {
        id: 'cn1-powers',
        type: 'text' as const,
        content: `## Small Powers of $i$ and Complex Zeros

Because $i^2 = -1$, the next powers follow by multiplying by $i$ once more:

$$i^2 = -1, \\qquad i^3 = i^2\\cdot i = -i, \\qquad i^4 = i^2\\cdot i^2 = (-1)(-1) = 1$$

These small powers are all you need to test whether a complex number is a zero of a polynomial.

### Example 1: Is $3i$ a zero of $p(x) = x^2 + 9$?

$$p(3i) = (3i)^2 + 9 = 9i^2 + 9 = -9 + 9 = 0$$

Yes. Its conjugate $-3i$ is a zero too.

### Example 2: Is $i$ a zero of $q(x) = x^3 + x$?

$$q(i) = i^3 + i = -i + i = 0$$

Yes. So $q$ has the zeros $0$, $i$ and $-i$: three complex zeros for a degree-3 polynomial.

### Square Roots of Negatives Inside a Formula

The quadratic formula often produces expressions such as $\\dfrac{6 \\pm \\sqrt{-16}}{2}$. Convert the root to $i$ form first, then divide **both** terms:

$$\\frac{6 \\pm \\sqrt{-16}}{2} = \\frac{6 \\pm 4i}{2} = 3 \\pm 2i$$

> ⚠️ **Square the whole term.** $(3i)^2 = 3^2\\cdot i^2 = 9(-1) = -9$, not $9i$ and not $3i^2$.`,
      },
      {
        id: 'cn1-powers-drill',
        type: 'input-boxes' as const,
        content: `**Powers and Roots** 🧮

**1)** $(3i)^2 = \\,?$ (enter an integer)
**2)** Write $\\dfrac{4 + \\sqrt{-36}}{2}$ as $a + bi$. Enter $b$.
**3)** For $q(x) = x^3 + x$, what is $q(2i)$? (enter in the form \`-5i\`)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-9', '3', '-6i'],
          hint1: '$(3i)^2 = 9i^2$, and $i^2 = -1$.',
          hint2: '$\\sqrt{-36} = 6i$, so $\\frac{4 + 6i}{2} = 2 + 3i$.',
          hint3: '$(2i)^3 = 8i^3 = -8i$. Add $2i$.',
          explanation: '1) $9i^2 = -9$.  2) $\\frac{4 + 6i}{2} = 2 + 3i$, so $b = 3$.  3) $q(2i) = (2i)^3 + 2i = -8i + 2i = -6i$, so $2i$ is not a zero of $q$.',
        },
      },
      {
        id: 'cn1-roots-powers-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Each Result** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{-64}$ simplifies to:', options: ['$8i$', '$-8$', '$8$', '$64i$'] },
            { label: '$i^3$ equals:', options: ['$-i$', '$i$', '$-1$', '$1$'] },
            { label: '$(2i)^3$ equals:', options: ['$-8i$', '$8i$', '$-8$', '$6i$'] },
          ],
          correctAnswers: ['$8i$', '$-i$', '$-8i$'],
          hint1: '$\\sqrt{-64} = \\sqrt{64}\\cdot\\sqrt{-1} = 8i$.',
          hint2: '$i^3 = i^2\\cdot i = (-1)i = -i$.',
          hint3: 'Cube both factors: $(2i)^3 = 2^3\\cdot i^3 = 8(-i)$.',
          explanation: '$\\sqrt{-64} = 8i$. $i^3 = -i$. $(2i)^3 = 8i^3 = -8i$.',
        },
      },
      {
        id: 'cn1-close',
        type: 'text' as const,
        content: `## What You Can Now Do

You can simplify the square root of any negative number, use $i^2 = -1$ and $i^3 = -i$, and check whether a complex number is a zero of a polynomial. These are the building blocks for complex zeros.

In **Part 2**, we combine real and imaginary pieces into a single object — a **complex number** $a + bi$ — and learn to add, subtract, and multiply them.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn2-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 2 of 7 — Adding, Subtracting & Multiplying**

---

> 🔑 **A complex number** has the form $a + bi$, where $a$ is the **real part** and $b$ is the **imaginary part**. Think of it as two numbers riding together: the real $a$ and the imaginary $b$. Operations keep the two parts separate — until $i^2$ collapses an imaginary product back into a real number.`,
      },
      {
        id: 'cn2-addsub',
        type: 'text' as const,
        content: `## Addition & Subtraction

**Combine like parts:** real with real, imaginary with imaginary. It works exactly like combining like terms in algebra (treat $i$ as the "variable").

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

### Worked Example

$$(3 + 5i) + (4 - 2i) = (3 + 4) + (5 - 2)i = 7 + 3i$$

For subtraction, **distribute the minus sign to both parts**:

$$(3 + 5i) - (4 - 2i) = (3 - 4) + (5 - (-2))i = -1 + 7i$$

> ⚠️ **Watch the sign on the imaginary part.** Subtracting $-2i$ *adds* $2i$, giving $5i + 2i = 7i$, not $3i$.`,
      },
      {
        id: 'cn2-addsub-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract** 🧮

For each result $a + bi$, enter the real part $a$ in the first box and the imaginary part $b$ in the second.

**1)** $(6 + 2i) + (1 + 9i)$ → $a = \\,?,\\ b = \\,?$
**2)** $(5 - 3i) - (2 + 4i)$ → $a = \\,?,\\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '11', '3', '-7'],
          hint1: 'Add reals: $6 + 1 = 7$. Add imaginaries: $2 + 9 = 11$.',
          hint2: 'Subtract reals: $5 - 2 = 3$. Subtract imaginaries: $-3 - 4 = -7$.',
          hint3: 'Distribute the minus across BOTH parts before combining.',
          explanation: '1) $(6+2i)+(1+9i) = 7 + 11i$, so $a=7, b=11$.  2) $(5-3i)-(2+4i) = 3 - 7i$, so $a=3, b=-7$.',
        },
      },
      {
        id: 'cn2-multiply',
        type: 'text' as const,
        content: `## Multiplication: FOIL, Then Replace $i^2$

Multiply two complex numbers just like two binomials (FOIL), then use $i^2 = -1$ to simplify.

### Worked Example: $(2 + 3i)(4 + 5i)$

$$\\underbrace{2\\cdot 4}_{8} + \\underbrace{2\\cdot 5i}_{10i} + \\underbrace{3i\\cdot 4}_{12i} + \\underbrace{3i\\cdot 5i}_{15i^2}$$

Combine the imaginary terms and replace $i^2 = -1$:

$$= 8 + 22i + 15i^2 = 8 + 22i + 15(-1) = 8 + 22i - 15 = -7 + 22i$$

> 💡 **The key step** is $i^2 = -1$. The last product $15i^2$ becomes the **real** number $-15$, which merges with the $8$.`,
      },
      {
        id: 'cn2-multiply-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Multiply: $(3 + 2i)(1 + 4i)$.',
              options: ['$-5 + 14i$', '$3 + 8i$', '$11 + 14i$', '$3 + 14i$'],
              correctAnswer: 0,
              explanation: '$3 + 12i + 2i + 8i^2 = 3 + 14i + 8(-1) = 3 - 8 + 14i = -5 + 14i$.',
            },
            {
              question: 'Multiply: $4i(2 - 3i)$.',
              options: ['$12 + 8i$', '$8i - 12i^2$', '$-12 + 8i$', '$-4i$'],
              correctAnswer: 0,
              explanation: '$4i\\cdot 2 - 4i\\cdot 3i = 8i - 12i^2 = 8i - 12(-1) = 12 + 8i$. The $-12i^2$ becomes $+12$.',
            },
          ],
        },
      },
      {
        id: 'cn2-multiply-drill',
        type: 'input-boxes' as const,
        content: `**Multiply It Out** 🧮

Write each product as $a + bi$. Enter $a$, then $b$.

**1)** $(1 + i)(1 - i)$ → $a = \\,?,\\ b = \\,?$
**2)** $(2 + 5i)(3 - i)$ → $a = \\,?,\\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '0', '11', '13'],
          hint1: '$(1+i)(1-i) = 1 - i + i - i^2 = 1 - (-1) = 2$, so $b = 0$.',
          hint2: '$(2+5i)(3-i) = 6 - 2i + 15i - 5i^2 = 6 + 13i + 5 = 11 + 13i$.',
          hint3: 'FOIL, replace $i^2 = -1$, then combine the real terms and the imaginary terms separately.',
          explanation: '1) $(1+i)(1-i) = 2 + 0i$, so $a=2, b=0$.  2) $(2+5i)(3-i) = 11 + 13i$, so $a=11, b=13$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn3-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 3 of 7 — Conjugates & Conjugate Zeros**

---

> 🔑 **The conjugate** of $a + bi$ is $a - bi$ — same real part, **flipped** sign on the imaginary part. Multiplying a complex number by its conjugate always produces a **real** number. For a polynomial with real coefficients, non-real zeros come in conjugate pairs, and this product is what lets each pair combine into a quadratic factor with real coefficients.`,
      },
      {
        id: 'cn3-conjugate',
        type: 'text' as const,
        content: `## The Complex Conjugate

The conjugate of $z = a + bi$ is written $\\bar{z} = a - bi$.

| $z$ | Conjugate $\\bar{z}$ |
|-----|--------------------|
| $3 + 4i$ | $3 - 4i$ |
| $5 - 2i$ | $5 + 2i$ |
| $-7i$ | $7i$ |
| $6$ | $6$ |

### The Magic Property

$$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 - b^2(-1) = a^2 + b^2$$

The middle terms cancel and $i^2 = -1$ turns the subtraction into addition. The answer $a^2 + b^2$ is **real and non-negative** — no $i$ left.

### Worked Example

$$(3 + 4i)(3 - 4i) = 3^2 + 4^2 = 9 + 16 = 25$$

> 💡 This is a difference of squares in disguise: $(a+bi)(a-bi) = a^2 + b^2$. Memorize it: it turns a conjugate pair of zeros into a quadratic factor with real coefficients.`,
      },
      {
        id: 'cn3-conj-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the conjugate of $-2 + 7i$?',
              options: ['$-2 - 7i$', '$2 - 7i$', '$2 + 7i$', '$7i - 2$'],
              correctAnswer: 0,
              explanation: 'Keep the real part, flip the sign of the imaginary part: $-2 + 7i \\to -2 - 7i$.',
            },
            {
              question: 'Evaluate $(5 + 2i)(5 - 2i)$.',
              options: ['$29$', '$21$', '$25 + 4i$', '$29i$'],
              correctAnswer: 0,
              explanation: '$(a+bi)(a-bi) = a^2 + b^2 = 5^2 + 2^2 = 25 + 4 = 29$. The result is a real number.',
            },
          ],
        },
      },
      {
        id: 'cn3-pairs',
        type: 'text' as const,
        content: `## Conjugate Pairs of Zeros

If a polynomial has **real** coefficients and $a + bi$ (with $b \\neq 0$) is a zero, then its conjugate $a - bi$ is also a zero. Multiplying the two linear factors gives a quadratic with real coefficients:

$$\\big(x - (a + bi)\\big)\\big(x - (a - bi)\\big) = x^2 - 2a\\,x + (a^2 + b^2)$$

| Piece | Value | Why |
|-------|-------|-----|
| Sum of the pair | $2a$ | the $bi$ terms cancel |
| Product of the pair | $a^2 + b^2$ | the conjugate product |
| Quadratic factor | $x^2 - (\\text{sum})\\,x + (\\text{product})$ | expand the two factors |

### Worked Example 1: Zeros $2 + i$ and $2 - i$

Sum $= 4$ and product $= 2^2 + 1^2 = 5$, so the factor is $x^2 - 4x + 5$.

### Worked Example 2: Finishing a Cubic

$p(x) = x^3 - 5x^2 + 11x - 15$ has real coefficients and $1 + 2i$ as a zero. Then $1 - 2i$ is also a zero, with sum $2$ and product $1^2 + 2^2 = 5$, so $x^2 - 2x + 5$ is a factor. Long division gives

$$p(x) = (x^2 - 2x + 5)(x - 3)$$

so the zeros are $1 + 2i$, $1 - 2i$ and $3$.

> 🔑 A polynomial of degree $n$ has exactly $n$ complex zeros, counted with multiplicity. Non-real zeros pair off, so a cubic with real coefficients always has at least one real zero.`,
      },
      {
        id: 'cn3-pairs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Quadratic Factor** 🔽

A polynomial with real coefficients has $3 - 2i$ as a zero. Choose what follows at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Another zero must be:', options: ['$3 + 2i$', '$-3 - 2i$', '$-3 + 2i$', '$2 - 3i$'] },
            { label: 'Sum of the pair:', options: ['$6$', '$-6$', '$4i$', '$0$'] },
            { label: 'Product of the pair $(3 - 2i)(3 + 2i)$:', options: ['$13$', '$5$', '$9 - 4i$', '$-13$'] },
            { label: 'Quadratic factor:', options: ['$x^2 - 6x + 13$', '$x^2 + 6x + 13$', '$x^2 - 6x + 5$', '$x^2 - 6x - 13$'] },
          ],
          correctAnswers: ['$3 + 2i$', '$6$', '$13$', '$x^2 - 6x + 13$'],
          hint1: 'The conjugate keeps the real part and flips the sign of the imaginary part.',
          hint2: 'Sum $= (3 - 2i) + (3 + 2i) = 6$. Product $= 3^2 + 2^2 = 13$.',
          hint3: 'The factor is $x^2 - (\\text{sum})x + (\\text{product})$.',
          explanation: 'The conjugate $3 + 2i$ is also a zero. Their sum is $6$ and their product is $9 + 4 = 13$, so the quadratic factor is $x^2 - 6x + 13$.',
        },
      },
      {
        id: 'cn3-pairs-drill',
        type: 'input-boxes' as const,
        content: `**Conjugate Pairs** 🧮

**1)** The zeros $-1 + 3i$ and $-1 - 3i$ give the factor $x^2 + bx + c$. Enter $b$, then $c$.
**2)** A cubic with real coefficients has zeros $4i$ and $5$. What is the product of its two non-real zeros?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '10', '16'],
          hint1: 'Sum $= -2$, so the $x$ coefficient is $-(-2) = 2$.',
          hint2: 'Product $= (-1)^2 + 3^2 = 10$.',
          hint3: 'The partner of $4i$ is $-4i$, and $(4i)(-4i) = -16i^2$.',
          explanation: '1) Sum $-2$ and product $10$ give $x^2 + 2x + 10$, so $b = 2$ and $c = 10$.  2) The non-real zeros are $4i$ and $-4i$, with product $-16i^2 = 16$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn4-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 4 of 7 — The Complex Plane & Modulus**

---

> 🔑 **Every complex number is a point.** Plot $a + bi$ at coordinates $(a, b)$ in the **complex plane**: the horizontal axis is real, the vertical axis is imaginary. Its distance from the origin is the **modulus** $\\lvert z\\rvert$.`,
      },
      {
        id: 'cn4-plane',
        type: 'text' as const,
        content: `## Plotting in the Complex Plane

The complex plane (also called the **Argand diagram**) replaces the usual $x$- and $y$-axes:

- **Real axis** (horizontal) ← the real part $a$
- **Imaginary axis** (vertical) ← the imaginary part $b$

So $z = a + bi$ lives at the point $(a, b)$.

| Complex Number | Point $(a, b)$ | Location |
|----------------|----------------|----------|
| $3 + 2i$ | $(3, 2)$ | Quadrant I |
| $-4 + i$ | $(-4, 1)$ | Quadrant II |
| $-2 - 3i$ | $(-2, -3)$ | Quadrant III |
| $5$ | $(5, 0)$ | on the real axis |
| $-6i$ | $(0, -6)$ | on the imaginary axis |

> 💡 A **real number** sits on the horizontal axis ($b = 0$); a **pure imaginary** number sits on the vertical axis ($a = 0$).`,
      },
      {
        id: 'cn4-plane-dropdown',
        type: 'dropdown-select' as const,
        content: `**Locate Each Number** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$2 - 5i$ is plotted at:', options: ['$(2, -5)$', '$(-5, 2)$', '$(2, 5)$', '$(-2, -5)$'] },
            { label: 'A pure imaginary number lies on the:', options: ['imaginary (vertical) axis', 'real (horizontal) axis', 'line $y = x$', 'origin only'] },
            { label: '$-3 + 4i$ is in:', options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'] },
          ],
          correctAnswers: ['$(2, -5)$', 'imaginary (vertical) axis', 'Quadrant II'],
          hint1: 'For $a + bi$, the point is $(a, b)$ — real part first, imaginary part second.',
          hint2: 'Pure imaginary means $a = 0$, so the point $(0, b)$ sits on the vertical axis.',
          hint3: '$-3 + 4i \\to (-3, 4)$: negative real, positive imaginary → upper-left → Quadrant II.',
          explanation: '$2 - 5i \\to (2, -5)$. Pure imaginary $(0, b)$ → vertical axis. $-3 + 4i \\to (-3, 4)$ → Quadrant II.',
        },
      },
      {
        id: 'cn4-modulus',
        type: 'text' as const,
        content: `## The Modulus (Absolute Value)

The **modulus** $\\lvert z\\rvert$ is the distance from the origin to the point $(a, b)$ — straight from the Pythagorean theorem:

$$\\lvert a + bi\\rvert = \\sqrt{a^2 + b^2}$$

### Worked Example: $z = 3 + 4i$

$$\\lvert z\\rvert = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

### Worked Example: $z = -5 + 12i$

$$\\lvert z\\rvert = \\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$

> ⚠️ **Square first, so signs disappear.** $(-5)^2 = 25$, not $-25$. The modulus is always $\\ge 0$.`,
      },
      {
        id: 'cn4-modulus-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find $\\lvert 8 + 6i\\rvert$.',
              options: ['$10$', '$14$', '$\\sqrt{14}$', '$100$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.',
            },
            {
              question: 'Find $\\lvert -2i\\rvert$.',
              options: ['$2$', '$-2$', '$2i$', '$\\sqrt{2}$'],
              correctAnswer: 0,
              explanation: '$-2i = 0 - 2i$, so $\\lvert -2i\\rvert = \\sqrt{0^2 + (-2)^2} = \\sqrt{4} = 2$.',
            },
          ],
        },
      },
      {
        id: 'cn4-modulus-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Modulus** 🧮

Each of these gives a whole-number answer. Enter the modulus.

**1)** $\\lvert 9 + 12i\\rvert = \\,?$
**2)** $\\lvert -7 + 24i\\rvert = \\,?$
**3)** $\\lvert 6 - 8i\\rvert = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '25', '10'],
          hint1: '$\\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.',
          hint2: '$\\sqrt{(-7)^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$.',
          hint3: '$\\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          explanation: '1) $\\sqrt{225} = 15$.  2) $\\sqrt{625} = 25$.  3) $\\sqrt{100} = 10$. Always square each part (signs vanish), add, take the root.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn5-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 5 of 7 — Polar (Trigonometric) Form**

---

> 🔑 **A second address for every complex number.** Instead of "go right $a$, up $b$," polar form says "go out a distance $r$ at an angle $\\theta$." This is the same polar-coordinate idea you use for points in the plane (CED Topic 3.13).`,
      },
      {
        id: 'cn5-polar',
        type: 'text' as const,
        content: `## Rectangular vs. Polar Form

A complex number $z = a + bi$ can be described by its distance $r$ from the origin and the angle $\\theta$ it makes with the positive real axis:

$$r = \\lvert z\\rvert = \\sqrt{a^2 + b^2}, \\qquad a = r\\cos\\theta, \\qquad b = r\\sin\\theta$$

Substituting gives the **trigonometric (polar) form**:

$$z = r(\\cos\\theta + i\\sin\\theta)$$

Here $r$ is the **modulus** and $\\theta$ is the **argument** (the angle).

### Finding $\\theta$

$$\\tan\\theta = \\frac{b}{a}$$

…but you must check the **quadrant** of $(a, b)$ to pick the correct angle, because $\\tan$ repeats every $\\pi$ radians.

> 💡 The reference angle from $\\tan^{-1}\\left\\lvert\\frac{b}{a}\\right\\rvert$ tells you the size; the quadrant tells you the true direction.`,
      },
      {
        id: 'cn5-rect-to-polar',
        type: 'text' as const,
        content: `## Worked Example: Convert $z = 1 + i\\sqrt{3}$ to Polar Form

**Step 1 — modulus:**
$$r = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$

**Step 2 — argument.** The point $(1, \\sqrt{3})$ is in Quadrant I:
$$\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3} \\;\\Rightarrow\\; \\theta = \\frac{\\pi}{3}$$

**Step 3 — write it:**
$$z = 2\\left(\\cos \\frac{\\pi}{3} + i\\sin \\frac{\\pi}{3}\\right)$$

> ✅ **Check** by going back: $2\\cos \\frac{\\pi}{3} = 2\\cdot\\tfrac{1}{2} = 1$ and $2\\sin \\frac{\\pi}{3} = 2\\cdot\\tfrac{\\sqrt{3}}{2} = \\sqrt{3}$ ✓`,
      },
      {
        id: 'cn5-polar-to-rect-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

*Reminder:* $\\cos \\frac{\\pi}{2} = 0,\\ \\sin \\frac{\\pi}{2} = 1,\\ \\cos \\pi = -1,\\ \\sin \\pi = 0$, and $\\cos \\frac{\\pi}{4} = \\sin \\frac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$.`,
        exercise: {
          questions: [
            {
              question: 'Convert $4(\\cos \\frac{\\pi}{2} + i\\sin \\frac{\\pi}{2})$ to rectangular form $a + bi$.',
              options: ['$4i$', '$4$', '$-4$', '$4 + 4i$'],
              correctAnswer: 0,
              explanation: '$a = 4\\cos \\frac{\\pi}{2} = 4\\cdot 0 = 0$ and $b = 4\\sin \\frac{\\pi}{2} = 4\\cdot 1 = 4$, so $z = 0 + 4i = 4i$.',
            },
            {
              question: 'What is the modulus $r$ of $z = -3 + 0i$?',
              options: ['$3$', '$-3$', '$\\sqrt{3}$', '$\\pm 3$'],
              correctAnswer: 0,
              explanation: '$r = \\sqrt{(-3)^2 + 0^2} = \\sqrt{9} = 3$. The modulus is the (non-negative) distance; the negative sign is captured by the angle $\\theta = \\pi$.',
            },
          ],
        },
      },
      {
        id: 'cn5-arg-radians',
        type: 'text' as const,
        content: `## Polar Form in Radians (How the AP Exam Writes It)

AP Precalculus measures angles in **radians**. A complex number $a + bi$ sits at the point $(a, b)$ in the complex plane, and its polar coordinates $(r, \\theta)$ give

$$a + bi = (r\\cos\\theta) + i\\,(r\\sin\\theta)$$

To find $\\theta$ from $(a, b)$, use the arctangent and fix the quadrant:

| Where the point is | Angle |
|--------------------|-------|
| $a > 0$ (right half) | $\\theta = \\arctan\\left(\\dfrac{b}{a}\\right)$ |
| $a < 0$ (left half) | $\\theta = \\arctan\\left(\\dfrac{b}{a}\\right) + \\pi$ |

### Example: $z = -1 + i$

- $r = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$
- $a < 0$, so $\\theta = \\arctan\\left(\\dfrac{1}{-1}\\right) + \\pi = -\\dfrac{\\pi}{4} + \\pi = \\dfrac{3\\pi}{4}$

$$-1 + i = \\sqrt{2}\\cos\\tfrac{3\\pi}{4} + i\\,\\sqrt{2}\\sin\\tfrac{3\\pi}{4}$$

> ⚠️ Using $\\arctan(b/a)$ alone gives $-\\frac{\\pi}{4}$, which points to $1 - i$ in Quadrant IV. Always check which quadrant the point is in. Multiplying or raising complex numbers to powers in polar form is not assessed on the AP Precalculus exam.`,
      },
      {
        id: 'cn5-polar-dropdown',
        type: 'dropdown-select' as const,
        content: `**Polar Coordinates of Complex Numbers** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Modulus of $z = a + bi$:', options: ['$\\sqrt{a^2 + b^2}$', '$a^2 + b^2$', '$a + b$', '$\\sqrt{a^2 - b^2}$'] },
            { label: 'For $z = -\\sqrt{3} + i$, the angle $\\theta$ in $[0, 2\\pi)$ is:', options: ['$\\frac{5\\pi}{6}$', '$-\\frac{\\pi}{6}$', '$\\frac{\\pi}{6}$', '$\\frac{7\\pi}{6}$'] },
            { label: '$2\\left(\\cos\\frac{\\pi}{2} + i\\sin\\frac{\\pi}{2}\\right)$ in rectangular form is:', options: ['$2i$', '$2$', '$-2i$', '$2 + 2i$'] },
          ],
          correctAnswers: ['$\\sqrt{a^2 + b^2}$', '$\\frac{5\\pi}{6}$', '$2i$'],
          hint1: 'Modulus comes from the Pythagorean theorem: $\\sqrt{a^2 + b^2}$.',
          hint2: '$a < 0$, so add $\\pi$: $\\arctan\\left(\\frac{1}{-\\sqrt{3}}\\right) + \\pi = -\\frac{\\pi}{6} + \\pi$.',
          hint3: '$\\cos\\frac{\\pi}{2} = 0$ and $\\sin\\frac{\\pi}{2} = 1$.',
          explanation: 'Modulus $= \\sqrt{a^2+b^2}$. For $-\\sqrt{3} + i$ the point is in Quadrant II, so $\\theta = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6}$. Finally $2(0 + i \\cdot 1) = 2i$.',
        },
      },
      {
        id: 'cn5-polar-drill',
        type: 'input-boxes' as const,
        content: `**Polar Form Practice** 🧮

**1)** The modulus $r$ of $z = -4 + 3i$ is $\\,?$  *(whole number)*
**2)** For $z = 3(\\cos\\pi + i\\sin\\pi)$, the real part $a$ is $\\,?$
**3)** The number $z = -5i$ has angle $\\theta = \\dfrac{k\\pi}{2}$ in $[0, 2\\pi)$. Enter $k$: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-3', '3'],
          hint1: '$r = \\sqrt{(-4)^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.',
          hint2: '$a = r\\cos\\theta = 3\\cos\\pi = 3(-1)$.',
          hint3: '$-5i$ is the point $(0, -5)$, straight down the imaginary axis: three quarter-turns from the positive real axis.',
          explanation: '1) $r = \\sqrt{16+9} = 5$.  2) $a = 3\\cos\\pi = -3$.  3) $(0, -5)$ lies at $\\theta = \\frac{3\\pi}{2}$, so $k = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn6-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 6 of 7 — Complex Roots of Quadratics**

---

> 🔑 **Where complex numbers earn their keep.** When the discriminant $b^2 - 4ac$ is **negative**, a quadratic has no real solutions — but it has two **complex** solutions, and they always come as a **conjugate pair**.`,
      },
      {
        id: 'cn6-discriminant',
        type: 'text' as const,
        content: `## The Discriminant Tells You What to Expect

For $ax^2 + bx + c = 0$, the quadratic formula is

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The **discriminant** $\\Delta = b^2 - 4ac$ decides the type of roots:

| Discriminant $\\Delta$ | Roots |
|-----------------------|-------|
| $\\Delta > 0$ | two distinct **real** roots |
| $\\Delta = 0$ | one repeated **real** root |
| $\\Delta < 0$ | two **complex** roots (a conjugate pair) |

> 💡 When $\\Delta < 0$, the $\\sqrt{\\;}$ contains a negative number — and that is precisely where $i$ steps in: $\\sqrt{-k} = i\\sqrt{k}$.`,
      },
      {
        id: 'cn6-disc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many complex (non-real) roots does $x^2 + 2x + 5 = 0$ have?',
              options: ['Two (a conjugate pair)', 'Zero', 'One', 'Two distinct real roots'],
              correctAnswer: 0,
              explanation: '$\\Delta = 2^2 - 4(1)(5) = 4 - 20 = -16 < 0$, so there are two complex roots forming a conjugate pair.',
            },
            {
              question: 'If a quadratic with real coefficients has $3 - 2i$ as one root, the other root must be:',
              options: ['$3 + 2i$', '$-3 + 2i$', '$-(3 - 2i)$', '$-3 - 2i$'],
              correctAnswer: 0,
              explanation: 'Complex roots of a real-coefficient polynomial come in conjugate pairs, so the partner of $3 - 2i$ is $3 + 2i$.',
            },
          ],
        },
      },
      {
        id: 'cn6-solve',
        type: 'text' as const,
        content: `## Worked Example: Solve $x^2 + 4x + 13 = 0$

**Step 1 — identify** $a = 1,\\ b = 4,\\ c = 13$.

**Step 2 — discriminant:**
$$\\Delta = 4^2 - 4(1)(13) = 16 - 52 = -36$$

Negative, so expect a complex conjugate pair.

**Step 3 — quadratic formula:**
$$x = \\frac{-4 \\pm \\sqrt{-36}}{2(1)} = \\frac{-4 \\pm 6i}{2}$$

**Step 4 — simplify** by dividing each term by $2$:
$$x = -2 \\pm 3i$$

So the roots are $-2 + 3i$ and $-2 - 3i$ — conjugates, as promised.

> ⚠️ **Divide BOTH terms** by $2a$. Writing $\\frac{-4 \\pm 6i}{2}$ as $-4 \\pm 3i$ is wrong; the $-4$ must also be divided, giving $-2 \\pm 3i$.`,
      },
      {
        id: 'cn6-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Quadratic** 🧮

Solve $x^2 - 6x + 25 = 0$. The roots are $p \\pm qi$.

**1)** Discriminant $b^2 - 4ac = \\,?$
**2)** Real part $p = \\,?$
**3)** Imaginary coefficient $q = \\,?$  *(the positive value)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-64', '3', '4'],
          hint1: '$\\Delta = (-6)^2 - 4(1)(25) = 36 - 100 = -64$.',
          hint2: '$x = \\frac{6 \\pm \\sqrt{-64}}{2} = \\frac{6 \\pm 8i}{2}$. The real part is $\\frac{6}{2} = 3$.',
          hint3: '$\\frac{8i}{2} = 4i$, so $q = 4$. The roots are $3 \\pm 4i$.',
          explanation: '$\\Delta = -64$; $x = \\frac{6 \\pm 8i}{2} = 3 \\pm 4i$. So $p = 3$ and $q = 4$.',
        },
      },
      {
        id: 'cn6-build-mc',
        type: 'multiple-choice' as const,
        content: `**Build the Equation** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A quadratic with roots $2 + i$ and $2 - i$ (and leading coefficient $1$) is:',
              options: ['$x^2 - 4x + 5 = 0$', '$x^2 + 4x + 5 = 0$', '$x^2 - 4x - 5 = 0$', '$x^2 - 4x + 3 = 0$'],
              correctAnswer: 0,
              explanation: 'Sum of roots $= 4$, product $= (2+i)(2-i) = 4 + 1 = 5$. So $x^2 - (\\text{sum})x + (\\text{product}) = x^2 - 4x + 5 = 0$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'complex-numbers',
    sections: [
      {
        id: 'cn7-intro',
        type: 'text' as const,
        content: `# 🌀 Complex Numbers and Operations

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) simplify square roots of negatives and use $i^2 = -1$, (2) add, subtract, and multiply, (3) use conjugates to pair complex zeros, (4) find the modulus, plot in the complex plane and convert to polar form, and (5) find complex roots of quadratics. Let's tie it all together.`,
      },
      {
        id: 'cn7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\sqrt{-a}$ | $i\\sqrt{a}$ |
| Small powers of $i$ | $i^2 = -1$, $i^3 = -i$, $i^4 = 1$ |
| Add / subtract | combine real & imaginary parts separately |
| Multiply | FOIL, then replace $i^2 = -1$ |
| Conjugate of $a+bi$ | $a - bi$;  product $= a^2 + b^2$ |
| Conjugate zeros $a \\pm bi$ | factor $x^2 - 2ax + (a^2 + b^2)$ |
| Modulus $\\lvert a+bi\\rvert$ | $\\sqrt{a^2 + b^2}$ |
| Polar form | $r(\\cos\\theta + i\\sin\\theta)$, $r = \\lvert z\\rvert$ |
| $\\Delta < 0$ in a quadratic | two complex conjugate roots |

> ⚠️ **Top mistakes to avoid:** dropping the $i$ from a negative square root; forgetting $i^2 = -1$ in a product; and not dividing *both* terms by $2a$ in the quadratic formula.`,
      },
      {
        id: 'cn7-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$(3i)^2 =$', options: ['$-9$', '$9$', '$9i$', '$-9i$'] },
            { label: '$(4 - i) + (1 + 6i) =$', options: ['$5 + 5i$', '$5 - 5i$', '$3 + 5i$', '$5 + 7i$'] },
            { label: 'Conjugate of $-8 - 3i$:', options: ['$-8 + 3i$', '$8 + 3i$', '$-8 - 3i$', '$8 - 3i$'] },
            { label: '$\\lvert -9 + 0i\\rvert =$', options: ['$9$', '$-9$', '$81$', '$3$'] },
          ],
          correctAnswers: ['$-9$', '$5 + 5i$', '$-8 + 3i$', '$9$'],
          hint1: '$(3i)^2 = 9i^2$, and $i^2 = -1$.',
          hint2: 'Add reals $4 + 1 = 5$; add imaginaries $-1 + 6 = 5$.',
          hint3: 'Conjugate flips the imaginary sign; modulus $= \\sqrt{(-9)^2} = 9$.',
          explanation: '$(3i)^2 = 9i^2 = -9$. Sum $= 5 + 5i$. Conjugate of $-8-3i$ is $-8+3i$. $\\lvert -9\\rvert = 9$.',
        },
      },
      {
        id: 'cn7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

**1)** Write $(2 + i)(3 + 4i)$ as $a + bi$: $a = \\,?,\\ b = \\,?$
**2)** The zeros $3 + i$ and $3 - i$ give the factor $x^2 + bx + c$: $b = \\,?,\\ c = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '11', '-6', '10'],
          hint1: '$(2+i)(3+4i) = 6 + 8i + 3i + 4i^2 = 6 + 11i - 4 = 2 + 11i$.',
          hint2: 'For the pair, the sum is $6$ and the product is $3^2 + 1^2$.',
          hint3: 'The factor is $x^2 - (\\text{sum})x + (\\text{product}) = x^2 - 6x + 10$.',
          explanation: '1) $(2+i)(3+4i) = 2 + 11i$, so $a=2, b=11$.  2) Sum $6$ and product $10$ give $x^2 - 6x + 10$, so $b = -6$ and $c = 10$.',
        },
      },
      {
        id: 'cn7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $p(i)$ for $p(x) = x^3 + 2x$?',
              options: ['$i$', '$-i$', '$3i$', '$0$'],
              correctAnswer: 0,
              explanation: '$p(i) = i^3 + 2i = -i + 2i = i$, so $i$ is not a zero of $p$. Writing $i^3$ as $i$ gives $3i$, and $0$ would mean $i$ is a zero.',
            },
            {
              question: 'A polynomial with real coefficients has $2 - 5i$ as a zero. Which is a factor of the polynomial?',
              options: ['$x^2 - 4x + 29$', '$x^2 + 4x + 29$', '$x^2 - 4x - 21$', '$x^2 - 4x + 21$'],
              correctAnswer: 0,
              explanation: 'The conjugate $2 + 5i$ is also a zero. The pair has sum $4$ and product $2^2 + 5^2 = 29$, so the factor is $x^2 - 4x + 29$. Using $+4x$ flips the sign of the sum, and $\\pm 21$ comes from computing $4 - 25$ instead of $4 + 25$.',
            },
            {
              question: 'The solutions of $x^2 + 2x + 10 = 0$ are:',
              options: ['$-1 \\pm 3i$', '$1 \\pm 3i$', '$-1 \\pm 9i$', '$-2 \\pm 3i$'],
              correctAnswer: 0,
              explanation: '$\\Delta = 4 - 40 = -36$; $x = \\frac{-2 \\pm \\sqrt{-36}}{2} = \\frac{-2 \\pm 6i}{2} = -1 \\pm 3i$.',
            },
          ],
        },
      },
    ],
  },
]
