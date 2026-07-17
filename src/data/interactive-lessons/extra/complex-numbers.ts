import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Complex Numbers and Operations (AP Precalculus).
 * Registry key / DB Topic.slug: 'complex-numbers'.
 * 7 parts, gold-standard structure: the imaginary unit & powers of i →
 * add/subtract/multiply → conjugates & division → modulus & the complex plane →
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

**Part 1 of 7 — The Imaginary Unit & Powers of $i$**

---

### Topics in This Part

| Section |
|---------|
| Why We Need a New Number |
| Defining $i$ and Simplifying Square Roots |
| The Cycle of Powers of $i$ |

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
        content: `## The Cycle of Powers of $i$

Watch what happens as we raise $i$ to higher powers:

$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = i^2\\cdot i = -i, \\quad i^4 = i^2\\cdot i^2 = (-1)(-1) = 1$$

Then it **repeats**, because $i^5 = i^4\\cdot i = 1\\cdot i = i$:

| Power | $i^1$ | $i^2$ | $i^3$ | $i^4$ | $i^5$ | $i^6$ | $i^7$ | $i^8$ |
|------|------|------|------|------|------|------|------|------|
| Value | $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ | $-i$ | $1$ |

> 🔑 **The Period-4 Trick:** $i^n$ depends only on the **remainder when $n$ is divided by 4**.
>
> | Remainder | $0$ | $1$ | $2$ | $3$ |
> |-----------|-----|-----|-----|-----|
> | $i^n$ | $1$ | $i$ | $-1$ | $-i$ |

**Example:** $i^{27}$. Divide $27 \\div 4 = 6$ remainder $3$. Remainder $3 \\Rightarrow i^{27} = -i$.`,
      },
      {
        id: 'cn1-powers-drill',
        type: 'input-boxes' as const,
        content: `**Powers of $i$** 🧮

Use the remainder-on-division-by-4 trick. Enter each value as one of: \`1\`, \`-1\`, \`i\`, or \`-i\`.

**1)** $i^{16} = \\,?$
**2)** $i^{30} = \\,?$
**3)** $i^{45} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '-1', 'i'],
          hint1: '$16 \\div 4 = 4$ remainder $0$. Remainder $0 \\Rightarrow i^{16} = 1$.',
          hint2: '$30 \\div 4 = 7$ remainder $2$. Remainder $2 \\Rightarrow i^{30} = -1$.',
          hint3: '$45 \\div 4 = 11$ remainder $1$. Remainder $1 \\Rightarrow i^{45} = i$.',
          explanation: '1) rem $0 \\Rightarrow 1$.  2) rem $2 \\Rightarrow -1$.  3) rem $1 \\Rightarrow i$. Only the remainder mod 4 matters.',
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
            { label: '$i^{100}$ equals:', options: ['$1$', '$i$', '$-1$', '$-i$'] },
          ],
          correctAnswers: ['$8i$', '$-i$', '$1$'],
          hint1: '$\\sqrt{-64} = \\sqrt{64}\\cdot\\sqrt{-1} = 8i$.',
          hint2: '$i^3 = i^2\\cdot i = (-1)i = -i$.',
          hint3: '$100 \\div 4 = 25$ remainder $0$, and remainder $0 \\Rightarrow i^{100} = 1$.',
          explanation: '$\\sqrt{-64} = 8i$. $i^3 = -i$. $i^{100}$: rem $0 \\Rightarrow 1$.',
        },
      },
      {
        id: 'cn1-close',
        type: 'text' as const,
        content: `## What You Can Now Do

You can simplify the square root of any negative number and evaluate any power of $i$. These are the two building blocks of complex-number arithmetic.

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

**Part 3 of 7 — Conjugates & Division**

---

> 🔑 **The conjugate** of $a + bi$ is $a - bi$ — same real part, **flipped** sign on the imaginary part. Multiplying a complex number by its conjugate always produces a **real** number, and that is exactly the trick that lets us divide.`,
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

> 💡 This is a difference of squares in disguise: $(a+bi)(a-bi) = a^2 + b^2$. Memorize it — it is the engine of complex division.`,
      },
      {
        id: 'cn3-conj-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the conjugate of $-2 + 7i$?',
              options: ['$-2 - 7i$', '$2 - 7i$', '$2 + 7i$', '$-2 + 7i$'],
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
        id: 'cn3-division',
        type: 'text' as const,
        content: `## Dividing Complex Numbers

A fraction with $i$ in the denominator isn't fully simplified. **Multiply the top and bottom by the conjugate of the denominator** — this makes the denominator real.

### Worked Example: $\\dfrac{4 + 7i}{2 + i}$

Multiply by $\\dfrac{2 - i}{2 - i}$ (the conjugate of $2 + i$):

$$\\frac{4 + 7i}{2 + i}\\cdot\\frac{2 - i}{2 - i} = \\frac{(4 + 7i)(2 - i)}{(2 + i)(2 - i)}$$

**Denominator:** $\\;(2)^2 + (1)^2 = 4 + 1 = 5$.

**Numerator:** $\\;(4 + 7i)(2 - i) = 8 - 4i + 14i - 7i^2 = 8 + 10i + 7 = 15 + 10i$.

$$= \\frac{15 + 10i}{5} = 3 + 2i$$

> 🔑 **Standard form** is $a + bi$. To get there, split the fraction over the real denominator: $\\dfrac{15 + 10i}{5} = \\dfrac{15}{5} + \\dfrac{10}{5}i = 3 + 2i$.`,
      },
      {
        id: 'cn3-division-dropdown',
        type: 'dropdown-select' as const,
        content: `**Walk Through the Division** 🔽

You are simplifying $\\dfrac{1 + 3i}{1 - i}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'Multiply top and bottom by:', options: ['$1 + i$', '$1 - i$', '$-1 + i$', '$1 + 3i$'] },
            { label: 'New denominator $(1-i)(1+i)$:', options: ['$2$', '$0$', '$1 - i^2$', '$-2$'] },
            { label: 'New numerator $(1+3i)(1+i)$:', options: ['$-2 + 4i$', '$1 + 4i$', '$4 + 4i$', '$1 + 3i^2$'] },
            { label: 'Final answer in $a + bi$ form:', options: ['$-1 + 2i$', '$1 + 2i$', '$-2 + 4i$', '$-1 - 2i$'] },
          ],
          correctAnswers: ['$1 + i$', '$2$', '$-2 + 4i$', '$-1 + 2i$'],
          hint1: 'Use the conjugate of the denominator $1 - i$, which is $1 + i$.',
          hint2: 'Denominator $= 1^2 + 1^2 = 2$. Numerator $= 1 + i + 3i + 3i^2 = 1 + 4i - 3 = -2 + 4i$.',
          hint3: 'Divide each part by $2$: $\\dfrac{-2 + 4i}{2} = -1 + 2i$.',
          explanation: 'Multiply by $\\frac{1+i}{1+i}$: denominator $1^2+1^2 = 2$, numerator $-2 + 4i$. Result $\\frac{-2+4i}{2} = -1 + 2i$.',
        },
      },
      {
        id: 'cn3-division-drill',
        type: 'input-boxes' as const,
        content: `**Divide & Simplify** 🧮

Write each quotient as $a + bi$. Enter $a$, then $b$.

**1)** $\\dfrac{5}{i}$ → $a = \\,?,\\ b = \\,?$  *(hint: conjugate of $i$ is $-i$)*
**2)** $\\dfrac{10 + 5i}{1 + 2i}$ → $a = \\,?,\\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['0', '-5', '4', '-3'],
          hint1: '$\\frac{5}{i}\\cdot\\frac{-i}{-i} = \\frac{-5i}{-i^2} = \\frac{-5i}{1} = -5i$, so $a = 0,\\ b = -5$.',
          hint2: 'Denominator $1^2 + 2^2 = 5$. Numerator $(10+5i)(1-2i) = 10 - 20i + 5i - 10i^2 = 20 - 15i$.',
          hint3: '$\\frac{20 - 15i}{5} = 4 - 3i$, so $a = 4,\\ b = -3$.',
          explanation: '1) $\\frac{5}{i} = -5i$, so $a=0, b=-5$.  2) $\\frac{10+5i}{1+2i} = \\frac{20-15i}{5} = 4 - 3i$, so $a=4, b=-3$.',
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
              options: ['$2$', '$-2$', '$4$', '$\\sqrt{2}$'],
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

> 🔑 **A second address for every complex number.** Instead of "go right $a$, up $b$," polar form says "go out a distance $r$ at an angle $\\theta$." This view makes **multiplication and powers** of complex numbers far easier.`,
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

…but you must check the **quadrant** of $(a, b)$ to pick the correct angle, because $\\tan$ repeats every $180^\\circ$.

> 💡 The reference angle from $\\tan^{-1}\\left\\lvert\\frac{b}{a}\\right\\rvert$ tells you the size; the quadrant tells you the true direction.`,
      },
      {
        id: 'cn5-rect-to-polar',
        type: 'text' as const,
        content: `## Worked Example: Convert $z = 1 + i\\sqrt{3}$ to Polar Form

**Step 1 — modulus:**
$$r = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$

**Step 2 — argument.** The point $(1, \\sqrt{3})$ is in Quadrant I:
$$\\tan\\theta = \\frac{\\sqrt{3}}{1} = \\sqrt{3} \\;\\Rightarrow\\; \\theta = 60^\\circ$$

**Step 3 — write it:**
$$z = 2\\left(\\cos 60^\\circ + i\\sin 60^\\circ\\right)$$

> ✅ **Check** by going back: $2\\cos 60^\\circ = 2\\cdot\\tfrac{1}{2} = 1$ and $2\\sin 60^\\circ = 2\\cdot\\tfrac{\\sqrt{3}}{2} = \\sqrt{3}$ ✓`,
      },
      {
        id: 'cn5-polar-to-rect-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

*Reminder:* $\\cos 90^\\circ = 0,\\ \\sin 90^\\circ = 1,\\ \\cos 180^\\circ = -1,\\ \\sin 180^\\circ = 0$, and $\\cos 45^\\circ = \\sin 45^\\circ = \\dfrac{\\sqrt{2}}{2}$.`,
        exercise: {
          questions: [
            {
              question: 'Convert $4(\\cos 90^\\circ + i\\sin 90^\\circ)$ to rectangular form $a + bi$.',
              options: ['$4i$', '$4$', '$-4$', '$4 + 4i$'],
              correctAnswer: 0,
              explanation: '$a = 4\\cos 90^\\circ = 4\\cdot 0 = 0$ and $b = 4\\sin 90^\\circ = 4\\cdot 1 = 4$, so $z = 0 + 4i = 4i$.',
            },
            {
              question: 'What is the modulus $r$ of $z = -3 + 0i$?',
              options: ['$3$', '$-3$', '$0$', '$9$'],
              correctAnswer: 0,
              explanation: '$r = \\sqrt{(-3)^2 + 0^2} = \\sqrt{9} = 3$. The modulus is the (non-negative) distance; the negative sign is captured by the angle $\\theta = 180^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'cn5-multiply-polar',
        type: 'text' as const,
        content: `## Why Polar Form Is Powerful

To **multiply** in polar form: **multiply the moduli, add the angles**.

$$r_1(\\cos\\theta_1 + i\\sin\\theta_1)\\cdot r_2(\\cos\\theta_2 + i\\sin\\theta_2) = r_1 r_2\\big(\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2)\\big)$$

### Example

$$\\big[2(\\cos 30^\\circ + i\\sin 30^\\circ)\\big]\\cdot\\big[3(\\cos 40^\\circ + i\\sin 40^\\circ)\\big] = 6\\big(\\cos 70^\\circ + i\\sin 70^\\circ\\big)$$

Moduli $2\\cdot 3 = 6$; angles $30^\\circ + 40^\\circ = 70^\\circ$.

> 🔑 This pattern is why polar form matters: repeated multiplication (powers) becomes *repeated angle addition*, which is the heart of **De Moivre's Theorem** in later courses.`,
      },
      {
        id: 'cn5-polar-dropdown',
        type: 'dropdown-select' as const,
        content: `**Polar Operations** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Modulus of $z = a + bi$:', options: ['$\\sqrt{a^2 + b^2}$', '$a^2 + b^2$', '$a + b$', '$\\sqrt{a^2 - b^2}$'] },
            { label: 'To multiply two complex numbers in polar form, the angles are:', options: ['added', 'multiplied', 'subtracted', 'left unchanged'] },
            { label: '$5(\\cos 20^\\circ + i\\sin 20^\\circ)\\cdot 2(\\cos 50^\\circ + i\\sin 50^\\circ) =$', options: ['$10(\\cos 70^\\circ + i\\sin 70^\\circ)$', '$7(\\cos 70^\\circ + i\\sin 70^\\circ)$', '$10(\\cos 1000^\\circ + i\\sin 1000^\\circ)$', '$10(\\cos 30^\\circ + i\\sin 30^\\circ)$'] },
          ],
          correctAnswers: ['$\\sqrt{a^2 + b^2}$', 'added', '$10(\\cos 70^\\circ + i\\sin 70^\\circ)$'],
          hint1: 'Modulus comes from the Pythagorean theorem: $\\sqrt{a^2 + b^2}$.',
          hint2: 'Multiply moduli, ADD angles.',
          hint3: 'Moduli: $5\\cdot 2 = 10$. Angles: $20^\\circ + 50^\\circ = 70^\\circ$.',
          explanation: 'Modulus $= \\sqrt{a^2+b^2}$. Multiplying multiplies moduli and ADDS angles: $5\\cdot 2 = 10$, $20^\\circ + 50^\\circ = 70^\\circ$.',
        },
      },
      {
        id: 'cn5-polar-drill',
        type: 'input-boxes' as const,
        content: `**Polar Form Practice** 🧮

**1)** The modulus $r$ of $z = -4 + 3i$ is $\\,?$  *(whole number)*
**2)** Multiply $3(\\cos 25^\\circ + i\\sin 25^\\circ)\\cdot 4(\\cos 35^\\circ + i\\sin 35^\\circ)$. The new modulus is $\\,?$
**3)** …and the new angle (in degrees, without the degree symbol) is $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '12', '60'],
          hint1: '$r = \\sqrt{(-4)^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.',
          hint2: 'Multiply the moduli: $3 \\cdot 4 = 12$.',
          hint3: 'Add the angles: $25^\\circ + 35^\\circ = 60^\\circ$.',
          explanation: '1) $r = \\sqrt{16+9} = 5$.  2) Moduli multiply: $3\\cdot 4 = 12$.  3) Angles add: $25^\\circ + 35^\\circ = 60^\\circ$.',
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
              options: ['$3 + 2i$', '$-3 + 2i$', '$3 - 2i$', '$2 - 3i$'],
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

You can now (1) handle powers of $i$, (2) add, subtract, multiply, and divide, (3) use conjugates and the modulus, (4) plot in the complex plane and convert to polar form, and (5) find complex roots of quadratics. Let's tie it all together.`,
      },
      {
        id: 'cn7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\sqrt{-a}$ | $i\\sqrt{a}$ |
| Evaluate $i^n$ | use remainder of $n \\div 4$: $\\{0\\to 1,\\,1\\to i,\\,2\\to -1,\\,3\\to -i\\}$ |
| Add / subtract | combine real & imaginary parts separately |
| Multiply | FOIL, then replace $i^2 = -1$ |
| Divide | multiply top & bottom by the conjugate of the denominator |
| Conjugate of $a+bi$ | $a - bi$;  product $= a^2 + b^2$ |
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
            { label: '$i^{50} =$', options: ['$-1$', '$1$', '$i$', '$-i$'] },
            { label: '$(4 - i) + (1 + 6i) =$', options: ['$5 + 5i$', '$5 - 5i$', '$3 + 5i$', '$5 + 7i$'] },
            { label: 'Conjugate of $-8 - 3i$:', options: ['$-8 + 3i$', '$8 + 3i$', '$-8 - 3i$', '$8 - 3i$'] },
            { label: '$\\lvert -9 + 0i\\rvert =$', options: ['$9$', '$-9$', '$81$', '$3$'] },
          ],
          correctAnswers: ['$-1$', '$5 + 5i$', '$-8 + 3i$', '$9$'],
          hint1: '$50 \\div 4 = 12$ remainder $2$, and remainder $2 \\Rightarrow -1$.',
          hint2: 'Add reals $4 + 1 = 5$; add imaginaries $-1 + 6 = 5$.',
          hint3: 'Conjugate flips the imaginary sign; modulus $= \\sqrt{(-9)^2} = 9$.',
          explanation: '$i^{50}$: rem $2 \\Rightarrow -1$. Sum $= 5 + 5i$. Conjugate of $-8-3i$ is $-8+3i$. $\\lvert -9\\rvert = 9$.',
        },
      },
      {
        id: 'cn7-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

**1)** Write $(2 + i)(3 + 4i)$ as $a + bi$: $a = \\,?,\\ b = \\,?$
**2)** Write $\\dfrac{8 + i}{2 - i}$ as $a + bi$: $a = \\,?,\\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '11', '3', '2'],
          hint1: '$(2+i)(3+4i) = 6 + 8i + 3i + 4i^2 = 6 + 11i - 4 = 2 + 11i$.',
          hint2: 'For the division, multiply by $\\frac{2+i}{2+i}$. Denominator $= 2^2 + 1^2 = 5$.',
          hint3: 'Numerator $(8+i)(2+i) = 16 + 8i + 2i + i^2 = 16 + 10i - 1 = 15 + 10i$, then $\\frac{15+10i}{5} = 3 + 2i$.',
          explanation: '1) $(2+i)(3+4i) = 2 + 11i$, so $a=2, b=11$.  2) $\\frac{8+i}{2-i} = \\frac{15+10i}{5} = 3 + 2i$, so $a=3, b=2$.',
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
              question: 'Simplify $i^{23}$.',
              options: ['$-i$', '$i$', '$-1$', '$1$'],
              correctAnswer: 0,
              explanation: '$23 \\div 4 = 5$ remainder $3$. Remainder $3 \\Rightarrow i^{23} = -i$.',
            },
            {
              question: 'Write $\\dfrac{6 + 2i}{1 - i}$ in standard form $a + bi$.',
              options: ['$2 + 4i$', '$4 + 2i$', '$2 - 4i$', '$6 + 2i$'],
              correctAnswer: 0,
              explanation: 'Multiply by $\\frac{1+i}{1+i}$: denominator $1^2 + 1^2 = 2$; numerator $(6+2i)(1+i) = 6 + 6i + 2i + 2i^2 = 4 + 8i$. So $\\frac{4 + 8i}{2} = 2 + 4i$.',
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
