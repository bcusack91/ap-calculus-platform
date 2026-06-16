import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Introduction to Complex Numbers (Algebra 2).
 * Registry key: 'complex-numbers-intro-algebra2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'complex-numbers-intro-algebra2',
    sections: [
      {
        id: 'cni1-intro',
        type: 'text' as const,
        content: `# 🌀 Introduction to Complex Numbers

**Part 1 of 5 — The Imaginary Unit $i$**

---

### Topics in This Part

| Section |
|---------|
| Why We Need a New Number |
| Defining $i$ and $i^2 = -1$ |
| Simplifying $\\sqrt{-n}$ |

> 🔑 **Key Concept:** There is no real number whose square is negative. To solve equations like $x^2 = -1$, mathematicians invented a brand-new number, the **imaginary unit** $i$, defined so that $i^2 = -1$.`,
      },
      {
        id: 'cni1-why',
        type: 'text' as const,
        content: `## Why We Need a New Number

Take any real number and square it:

$$3^2 = 9, \\qquad (-3)^2 = 9, \\qquad 0^2 = 0$$

A real number squared is **never negative**. So the equation

$$x^2 = -1$$

has **no real solution** — there is simply no real number to plug in.

Rather than give up, mathematicians defined a new number to fill the gap.

> 💡 This is not a "fake" idea. Complex numbers are used every day in electrical engineering, signal processing, and quantum physics. The name *imaginary* is just a historical accident.`,
      },
      {
        id: 'cni1-define',
        type: 'text' as const,
        content: `## Defining the Imaginary Unit

The **imaginary unit** $i$ is defined by:

$$i = \\sqrt{-1} \\qquad\\text{and equivalently}\\qquad i^2 = -1$$

That one rule, $i^2 = -1$, is the engine behind everything in this lesson.

We can now take the square root of any negative number. For a positive number $n$:

$$\\sqrt{-n} = \\sqrt{-1}\\cdot\\sqrt{n} = i\\sqrt{n}$$

### Examples

| Expression | Rewrite | Simplified |
|-----------|---------|-----------|
| $\\sqrt{-25}$ | $\\sqrt{-1}\\cdot\\sqrt{25}$ | $5i$ |
| $\\sqrt{-9}$ | $\\sqrt{-1}\\cdot\\sqrt{9}$ | $3i$ |
| $\\sqrt{-7}$ | $\\sqrt{-1}\\cdot\\sqrt{7}$ | $i\\sqrt{7}$ |

> ⚠️ **Pull out the $i$ first.** Always factor $\\sqrt{-1}$ out *before* simplifying the rest, so you never accidentally multiply two negative radicands together.`,
      },
      {
        id: 'cni1-concept-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the value of $i^2$?',
              options: ['$-1$', '$1$', '$i$', '$\\sqrt{-1}$'],
              correctAnswer: 0,
              explanation: 'By definition $i = \\sqrt{-1}$, so squaring gives $i^2 = -1$. This is the single rule that defines complex numbers.',
            },
            {
              question: 'Which equation forced mathematicians to invent $i$?',
              options: ['$x^2 = -1$', '$x^2 = 1$', '$x + 1 = 0$', '$x^2 = 4$'],
              correctAnswer: 0,
              explanation: 'No real number squared equals $-1$, so $x^2 = -1$ has no real solution. Defining $i$ with $i^2 = -1$ gives it the solution $x = \\pm i$.',
            },
          ],
        },
      },
      {
        id: 'cni1-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify the Square Roots** 🧮

Write each as a real number times $i$. Enter just the coefficient in front of $i$ (a whole number).

**1)** $\\sqrt{-49} = \\,?\\,i$
**2)** $\\sqrt{-100} = \\,?\\,i$
**3)** $\\sqrt{-1} = \\,?\\,i$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '10', '1'],
          hint1: '$\\sqrt{-49} = \\sqrt{-1}\\cdot\\sqrt{49} = i\\cdot 7 = 7i$.',
          hint2: '$\\sqrt{-100} = \\sqrt{-1}\\cdot\\sqrt{100} = i\\cdot 10 = 10i$.',
          hint3: '$\\sqrt{-1} = i = 1i$, so the coefficient is $1$.',
          explanation: '1) $\\sqrt{-49}=7i$.  2) $\\sqrt{-100}=10i$.  3) $\\sqrt{-1}=1i=i$. Pull out $\\sqrt{-1}=i$, then take the square root of the positive part.',
        },
      },
      {
        id: 'cni1-radical-drop',
        type: 'dropdown-select' as const,
        content: `**Match Each Radical** 🔽

Some of these don't simplify to a whole-number coefficient — leave them under the radical.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{-36} = $', options: ['$6i$', '$36i$', '$i\\sqrt{6}$', '$-6$'] },
            { label: '$\\sqrt{-5} = $', options: ['$i\\sqrt{5}$', '$5i$', '$\\sqrt{5}$', '$-\\sqrt{5}$'] },
            { label: '$\\sqrt{-12} = $', options: ['$2i\\sqrt{3}$', '$12i$', '$i\\sqrt{12}$ only', '$6i$'] },
          ],
          correctAnswers: ['$6i$', '$i\\sqrt{5}$', '$2i\\sqrt{3}$'],
          hint1: '$\\sqrt{-36}=\\sqrt{-1}\\cdot\\sqrt{36}=6i$.',
          hint2: '$5$ is not a perfect square, so $\\sqrt{-5}=i\\sqrt{5}$ stays under the radical.',
          hint3: '$\\sqrt{-12}=i\\sqrt{12}=i\\sqrt{4\\cdot 3}=2i\\sqrt{3}$ — simplify the perfect-square factor.',
          explanation: 'Factor out $\\sqrt{-1}=i$, then simplify the radical: $\\sqrt{-36}=6i$, $\\sqrt{-5}=i\\sqrt{5}$, and $\\sqrt{-12}=2i\\sqrt{3}$.',
        },
      },
      {
        id: 'cni1-wrap',
        type: 'text' as const,
        content: `## What You Built

You now have one new tool: the imaginary unit $i$ with $i^2 = -1$, which lets you take the square root of any negative number.

> 🔑 **Carry this forward:** $\\sqrt{-n} = i\\sqrt{n}$ for $n > 0$. In Part 2 we attach a real number to an imaginary one and get a full **complex number**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'complex-numbers-intro-algebra2',
    sections: [
      {
        id: 'cni2-intro',
        type: 'text' as const,
        content: `# 🌀 Introduction to Complex Numbers

**Part 2 of 5 — Complex Numbers in Standard Form**

---

> 🔑 **The Idea:** A **complex number** combines a real part and an imaginary part into one object written $a + bi$, where $a$ and $b$ are real numbers.`,
      },
      {
        id: 'cni2-form',
        type: 'text' as const,
        content: `## Standard Form $a + bi$

Every complex number can be written as

$$a + bi$$

- $a$ is the **real part**, written $\\text{Re}(z) = a$
- $b$ is the **imaginary part**, written $\\text{Im}(z) = b$  *(it's the coefficient of $i$, not $bi$ itself)*

### Reading Off the Parts

| Complex number | Real part $a$ | Imaginary part $b$ |
|----------------|---------------|--------------------|
| $3 + 5i$ | $3$ | $5$ |
| $-2 + 7i$ | $-2$ | $7$ |
| $4 - 6i$ | $4$ | $-6$ |
| $9$ | $9$ | $0$ |
| $-8i$ | $0$ | $-8$ |

> 💡 **Every real number is also complex.** A real number like $9$ is $9 + 0i$ — it just has a zero imaginary part. A number like $-8i$ is $0 - 8i$ and is called **purely imaginary**.`,
      },
      {
        id: 'cni2-parts-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the imaginary part of $4 - 6i$?',
              options: ['$-6$', '$6$', '$-6i$', '$4$'],
              correctAnswer: 0,
              explanation: 'The imaginary part is the real coefficient of $i$, including its sign. For $4 - 6i = 4 + (-6)i$, the imaginary part is $-6$ (a real number, not $-6i$).',
            },
            {
              question: 'Which number is purely imaginary?',
              options: ['$0 + 5i$', '$5 + 0i$', '$5 + 5i$', '$5$'],
              correctAnswer: 0,
              explanation: 'A purely imaginary number has real part $0$ and a nonzero imaginary part. $0 + 5i = 5i$ qualifies; $5 + 0i = 5$ is purely real.',
            },
          ],
        },
      },
      {
        id: 'cni2-classify-drop',
        type: 'dropdown-select' as const,
        content: `**Classify Each Number** 🔽

Decide whether each is *real*, *purely imaginary*, or a *non-real complex* number (has both a nonzero real and a nonzero imaginary part).`,
        exercise: {
          dropdowns: [
            { label: '$7$', options: ['real', 'purely imaginary', 'non-real complex'] },
            { label: '$-3i$', options: ['purely imaginary', 'real', 'non-real complex'] },
            { label: '$2 + 9i$', options: ['non-real complex', 'real', 'purely imaginary'] },
          ],
          correctAnswers: ['real', 'purely imaginary', 'non-real complex'],
          hint1: '$7 = 7 + 0i$: imaginary part is $0$, so it is real.',
          hint2: '$-3i = 0 - 3i$: real part is $0$ and imaginary part is nonzero, so it is purely imaginary.',
          hint3: '$2 + 9i$ has real part $2$ and imaginary part $9$, both nonzero, so it is a non-real complex number.',
          explanation: '$7$ is real ($b=0$), $-3i$ is purely imaginary ($a=0$), and $2+9i$ is non-real complex (both parts nonzero).',
        },
      },
      {
        id: 'cni2-rewrite',
        type: 'text' as const,
        content: `## Rewriting in Standard Form

Sometimes a number arrives "messy" and you must rewrite it as $a + bi$.

### Example: $5 + \\sqrt{-16}$

$$5 + \\sqrt{-16} = 5 + \\sqrt{-1}\\cdot\\sqrt{16} = 5 + 4i$$

So $a = 5$ and $b = 4$.

### Example: $\\dfrac{-6 + \\sqrt{-4}}{2}$

$$\\frac{-6 + \\sqrt{-4}}{2} = \\frac{-6 + 2i}{2} = \\frac{-6}{2} + \\frac{2i}{2} = -3 + i$$

So $a = -3$ and $b = 1$.

> ⚠️ Convert every $\\sqrt{-n}$ into $i\\sqrt{n}$ **before** trying to identify $a$ and $b$.`,
      },
      {
        id: 'cni2-rewrite-drill',
        type: 'input-boxes' as const,
        content: `**Find $a$ and $b$** 🧮

Rewrite each in standard form $a + bi$, then enter the two values.

**1)** $8 + \\sqrt{-9}$:  enter $a$ then $b$.
**2)** $\\dfrac{-10 + \\sqrt{-36}}{2}$:  enter $a$ then $b$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['8', '3', '-5', '3'],
          hint1: '$\\sqrt{-9} = 3i$, so $8 + \\sqrt{-9} = 8 + 3i$. Here $a=8$, $b=3$.',
          hint2: '$\\sqrt{-36} = 6i$, so the numerator is $-10 + 6i$.',
          hint3: 'Divide each term by $2$: $\\frac{-10}{2} + \\frac{6i}{2} = -5 + 3i$. Here $a=-5$, $b=3$.',
          explanation: '1) $8 + 3i \\Rightarrow a=8,\\ b=3$.  2) $\\frac{-10+6i}{2} = -5 + 3i \\Rightarrow a=-5,\\ b=3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'complex-numbers-intro-algebra2',
    sections: [
      {
        id: 'cni3-intro',
        type: 'text' as const,
        content: `# 🌀 Introduction to Complex Numbers

**Part 3 of 5 — Adding, Subtracting & Multiplying**

---

> 🔑 **The Idea:** Treat $i$ like a variable when you add, subtract, and multiply — then, at the very end, replace every $i^2$ with $-1$.`,
      },
      {
        id: 'cni3-addsub',
        type: 'text' as const,
        content: `## Adding and Subtracting

Combine **real parts with real parts** and **imaginary parts with imaginary parts** — exactly like collecting like terms.

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

### Example: Add

$$(3 + 5i) + (4 + 2i) = (3+4) + (5+2)i = 7 + 7i$$

### Example: Subtract

$$(6 + 3i) - (2 + 8i) = (6-2) + (3-8)i = 4 - 5i$$

> ⚠️ When subtracting, distribute the minus sign to **both** parts of the second number — including the imaginary part.`,
      },
      {
        id: 'cni3-addsub-drill',
        type: 'input-boxes' as const,
        content: `**Combine Like Parts** 🧮

Write each answer as $a + bi$ and enter $a$ then $b$.

**1)** $(2 + 7i) + (5 + i)$:  enter $a$ then $b$.
**2)** $(9 + 4i) - (3 + 10i)$:  enter $a$ then $b$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '8', '6', '-6'],
          hint1: 'Add real parts: $2 + 5 = 7$. Add imaginary parts: $7 + 1 = 8$.',
          hint2: 'For subtraction, distribute the minus: $(9-3) + (4-10)i$.',
          hint3: '$9 - 3 = 6$ and $4 - 10 = -6$, giving $6 - 6i$.',
          explanation: '1) $(2+5)+(7+1)i = 7 + 8i$.  2) $(9-3)+(4-10)i = 6 - 6i$.',
        },
      },
      {
        id: 'cni3-multiply',
        type: 'text' as const,
        content: `## Multiplying

Multiply just like binomials (FOIL), then replace $i^2$ with $-1$.

### Example: $(2 + 3i)(4 + 5i)$

$$
\\begin{aligned}
(2+3i)(4+5i) &= 8 + 10i + 12i + 15i^2 \\\\
&= 8 + 22i + 15(-1) \\\\
&= 8 + 22i - 15 \\\\
&= -7 + 22i
\\end{aligned}
$$

### Example: A Single Imaginary Times Itself

$$(4i)(4i) = 16i^2 = 16(-1) = -16$$

> 🔑 **The whole trick:** the $i^2$ term collapses to a *real* number $(-1)$, which then merges with the real part. That is why a product of two non-real numbers can come out real.`,
      },
      {
        id: 'cni3-multiply-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(1 + 2i)(3 + i)$.',
              options: ['$1 + 7i$', '$3 + 7i$', '$5 + 7i$', '$1 + 5i$'],
              correctAnswer: 0,
              explanation: 'FOIL: $3 + i + 6i + 2i^2 = 3 + 7i + 2(-1) = 3 - 2 + 7i = 1 + 7i$.',
            },
            {
              question: 'Simplify $(5i)(3i)$.',
              options: ['$-15$', '$15$', '$15i$', '$8i$'],
              correctAnswer: 0,
              explanation: '$(5i)(3i) = 15i^2 = 15(-1) = -15$ — a real, negative number.',
            },
          ],
        },
      },
      {
        id: 'cni3-multiply-drill',
        type: 'input-boxes' as const,
        content: `**Multiply It Out** 🧮

Write each product as $a + bi$ and enter $a$ then $b$. (If a part is $0$, enter $0$.)

**1)** $(2 + i)(3 + 4i)$:  enter $a$ then $b$.
**2)** $(6i)(2i)$:  enter $a$ then $b$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '11', '-12', '0'],
          hint1: 'FOIL: $(2+i)(3+4i) = 6 + 8i + 3i + 4i^2$.',
          hint2: 'Combine: $6 + 11i + 4(-1) = 6 - 4 + 11i = 2 + 11i$. So $a=2,\\ b=11$.',
          hint3: '$(6i)(2i) = 12i^2 = -12$, which is $-12 + 0i$. So $a=-12,\\ b=0$.',
          explanation: '1) $6 + 11i + 4i^2 = 2 + 11i \\Rightarrow a=2,\\ b=11$.  2) $12i^2 = -12 \\Rightarrow a=-12,\\ b=0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'complex-numbers-intro-algebra2',
    sections: [
      {
        id: 'cni4-intro',
        type: 'text' as const,
        content: `# 🌀 Introduction to Complex Numbers

**Part 4 of 5 — Powers of $i$ & Complex Conjugates**

---

> 🔑 **Two power tools:** the **powers of $i$** repeat in a cycle of four, and the **complex conjugate** lets you turn a product into a real number — the key to dividing complex numbers.`,
      },
      {
        id: 'cni4-powers',
        type: 'text' as const,
        content: `## The Cycle of Powers

Start multiplying by $i$ and watch the pattern repeat every four steps:

$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = i^2\\cdot i = -i, \\quad i^4 = (i^2)^2 = 1$$

Then it **cycles**: $i^5 = i$, $i^6 = -1$, and so on.

| Power | Value |
|-------|-------|
| $i^1$ | $i$ |
| $i^2$ | $-1$ |
| $i^3$ | $-i$ |
| $i^4$ | $1$ |

### The Shortcut

To find $i^n$, divide $n$ by $4$ and use the **remainder**:

$$i^n = i^{(n \\bmod 4)}$$

**Example:** $i^{23}$. Since $23 = 4\\cdot 5 + 3$, the remainder is $3$, so $i^{23} = i^3 = -i$.

> 💡 Remainder $0 \\to 1$, remainder $1 \\to i$, remainder $2 \\to -1$, remainder $3 \\to -i$.`,
      },
      {
        id: 'cni4-powers-drop',
        type: 'dropdown-select' as const,
        content: `**Evaluate the Powers** 🔽

Use the remainder-on-division-by-$4$ shortcut.`,
        exercise: {
          dropdowns: [
            { label: '$i^4 = $', options: ['$1$', '$i$', '$-1$', '$-i$'] },
            { label: '$i^{10} = $', options: ['$-1$', '$1$', '$i$', '$-i$'] },
            { label: '$i^{21} = $', options: ['$i$', '$1$', '$-1$', '$-i$'] },
          ],
          correctAnswers: ['$1$', '$-1$', '$i$'],
          hint1: '$i^4 = (i^2)^2 = (-1)^2 = 1$.',
          hint2: '$10 = 4\\cdot 2 + 2$, remainder $2$, so $i^{10} = i^2 = -1$.',
          hint3: '$21 = 4\\cdot 5 + 1$, remainder $1$, so $i^{21} = i^1 = i$.',
          explanation: '$i^4 = 1$; $i^{10} = i^2 = -1$ (remainder $2$); $i^{21} = i^1 = i$ (remainder $1$).',
        },
      },
      {
        id: 'cni4-conjugate',
        type: 'text' as const,
        content: `## Complex Conjugates

The **conjugate** of $a + bi$ is $a - bi$ — flip the sign of the imaginary part. We write it $\\overline{z}$.

| Number $z$ | Conjugate $\\overline{z}$ |
|------------|---------------------------|
| $3 + 5i$ | $3 - 5i$ |
| $2 - 7i$ | $2 + 7i$ |
| $-4i$ | $4i$ |

### Why Conjugates Matter

Multiply a number by its conjugate and the imaginary part vanishes:

$$(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 + b^2$$

The result $a^2 + b^2$ is always a **real, non-negative number**.

### Example: $(3 + 2i)(3 - 2i)$

$$(3+2i)(3-2i) = 3^2 + 2^2 = 9 + 4 = 13$$

> 🔑 This "real-izing" property is exactly what makes division of complex numbers possible (Part 5).`,
      },
      {
        id: 'cni4-conj-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the conjugate of $-6 + 4i$?',
              options: ['$-6 - 4i$', '$6 - 4i$', '$6 + 4i$', '$-6 + 4i$'],
              correctAnswer: 0,
              explanation: 'The conjugate flips only the sign of the imaginary part: $-6 + 4i \\to -6 - 4i$. The real part stays the same.',
            },
            {
              question: 'Evaluate $(5 + i)(5 - i)$.',
              options: ['$26$', '$24$', '$25 + i$', '$25$'],
              correctAnswer: 0,
              explanation: '$(a+bi)(a-bi) = a^2 + b^2 = 5^2 + 1^2 = 25 + 1 = 26$. The product of conjugates is real.',
            },
          ],
        },
      },
      {
        id: 'cni4-conj-drill',
        type: 'input-boxes' as const,
        content: `**Conjugate Products** 🧮

Each product of conjugates equals a real number $a^2 + b^2$. Enter that number.

**1)** $(4 + 3i)(4 - 3i) = \\,?$
**2)** $(2 + 6i)(2 - 6i) = \\,?$
**3)** $(7i)(-7i) = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '40', '49'],
          hint1: '$(4+3i)(4-3i) = 4^2 + 3^2 = 16 + 9 = 25$.',
          hint2: '$(2+6i)(2-6i) = 2^2 + 6^2 = 4 + 36 = 40$.',
          hint3: '$(7i)(-7i) = -49 i^2 = -49(-1) = 49$. (Here $a=0,\\ b=7$, so $a^2+b^2 = 49$.)',
          explanation: '1) $16+9 = 25$.  2) $4+36 = 40$.  3) $-49i^2 = 49$. A number times its conjugate gives the real value $a^2+b^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'complex-numbers-intro-algebra2',
    sections: [
      {
        id: 'cni5-intro',
        type: 'text' as const,
        content: `# 🌀 Introduction to Complex Numbers

**Part 5 of 5 — Dividing, Solving & Mastery Check**

---

You can now define $i$, write numbers in $a+bi$ form, add, subtract, multiply, take powers of $i$, and find conjugates. Let's finish with **division** and **solving equations**, then prove your mastery.`,
      },
      {
        id: 'cni5-divide',
        type: 'text' as const,
        content: `## Dividing Complex Numbers

To divide, **multiply the top and bottom by the conjugate of the denominator**. This makes the denominator real.

### Example: $\\dfrac{2 + i}{3 - i}$

Multiply by $\\dfrac{3 + i}{3 + i}$:

$$\\frac{2 + i}{3 - i}\\cdot\\frac{3 + i}{3 + i} = \\frac{(2+i)(3+i)}{(3-i)(3+i)}$$

**Numerator:** $(2+i)(3+i) = 6 + 2i + 3i + i^2 = 6 + 5i - 1 = 5 + 5i$

**Denominator:** $(3-i)(3+i) = 3^2 + 1^2 = 10$

$$= \\frac{5 + 5i}{10} = \\frac{1}{2} + \\frac{1}{2}i$$

> 🔑 **The strategy is always the same:** the conjugate turns the denominator into a real number, and then you split the fraction into real and imaginary parts.`,
      },
      {
        id: 'cni5-divide-drill',
        type: 'input-boxes' as const,
        content: `**Divide and Simplify** 🧮

Simplify each quotient to $a + bi$ form (here both parts are whole numbers). Enter $a$ then $b$.

**1)** $\\dfrac{10}{1 + 3i}$:  enter $a$ then $b$.
**2)** $\\dfrac{5i}{2 + i}$:  enter $a$ then $b$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['1', '-3', '1', '2'],
          hint1: 'For #1 multiply by $\\frac{1-3i}{1-3i}$. Denominator: $1^2 + 3^2 = 10$. Numerator: $10(1-3i) = 10 - 30i$.',
          hint2: '$\\frac{10 - 30i}{10} = 1 - 3i$, so $a=1,\\ b=-3$.',
          hint3: 'For #2 multiply by $\\frac{2-i}{2-i}$. Numerator: $5i(2-i) = 10i - 5i^2 = 5 + 10i$. Denominator: $2^2 + 1^2 = 5$. Then $\\frac{5 + 10i}{5} = 1 + 2i$.',
          explanation: '1) $\\frac{10(1-3i)}{10} = 1 - 3i \\Rightarrow a=1,\\ b=-3$.  2) $\\frac{5i(2-i)}{5} = \\frac{5 + 10i}{5} = 1 + 2i \\Rightarrow a=1,\\ b=2$.',
        },
      },
      {
        id: 'cni5-solve',
        type: 'text' as const,
        content: `## Solving Equations with Complex Roots

When the square root of a negative number appears, write the answer with $i$.

### Example: $x^2 + 25 = 0$

$$x^2 = -25 \\;\\Rightarrow\\; x = \\pm\\sqrt{-25} = \\pm 5i$$

### Example: $x^2 + 9 = 0$

$$x^2 = -9 \\;\\Rightarrow\\; x = \\pm\\sqrt{-9} = \\pm 3i$$

> 💡 **Big picture:** with complex numbers, *every* quadratic equation has a solution. A quadratic with a negative discriminant has two **complex conjugate** roots instead of two real ones.`,
      },
      {
        id: 'cni5-solve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $x^2 + 49 = 0$.',
              options: ['$x = \\pm 7i$', '$x = \\pm 7$', '$x = 7i$ only', '$x = \\pm 49i$'],
              correctAnswer: 0,
              explanation: '$x^2 = -49 \\Rightarrow x = \\pm\\sqrt{-49} = \\pm 7i$. A square root gives both signs.',
            },
            {
              question: 'How many real solutions does $x^2 + 4 = 0$ have?',
              options: ['$0$ (two complex roots)', '$1$', '$2$', '$4$'],
              correctAnswer: 0,
              explanation: '$x^2 = -4$ has no real solution; the roots are $\\pm 2i$, a pair of complex conjugates. So zero real solutions.',
            },
          ],
        },
      },
      {
        id: 'cni5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Review** 🔽

One quick check from each part of the lesson.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{-64} = $', options: ['$8i$', '$-8$', '$64i$', '$i\\sqrt{8}$'] },
            { label: 'Imaginary part of $5 - 2i$:', options: ['$-2$', '$2$', '$5$', '$-2i$'] },
            { label: '$i^{12} = $', options: ['$1$', '$i$', '$-1$', '$-i$'] },
            { label: '$(1 + i)(1 - i) = $', options: ['$2$', '$0$', '$1 + i^2$', '$2i$'] },
          ],
          correctAnswers: ['$8i$', '$-2$', '$1$', '$2$'],
          hint1: '$\\sqrt{-64} = \\sqrt{-1}\\cdot\\sqrt{64} = 8i$.',
          hint2: 'The imaginary part is the signed coefficient of $i$: for $5 - 2i$ it is $-2$.',
          hint3: '$12 = 4\\cdot 3$, remainder $0$, so $i^{12} = 1$. And $(1+i)(1-i) = 1^2 + 1^2 = 2$.',
          explanation: '$\\sqrt{-64}=8i$; imaginary part of $5-2i$ is $-2$; $i^{12}=1$ (remainder $0$); $(1+i)(1-i)=1^2+1^2=2$.',
        },
      },
      {
        id: 'cni5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(4 + 3i) - (1 - 2i)$.',
              options: ['$3 + 5i$', '$3 + i$', '$5 + i$', '$3 - 5i$'],
              correctAnswer: 0,
              explanation: 'Distribute the minus: $(4-1) + (3-(-2))i = 3 + 5i$.',
            },
            {
              question: 'Simplify $(2 - 3i)(2 + 3i)$.',
              options: ['$13$', '$-5$', '$4 - 9i$', '$4 + 9i$'],
              correctAnswer: 0,
              explanation: 'This is a conjugate product: $a^2 + b^2 = 2^2 + 3^2 = 4 + 9 = 13$ — a real number.',
            },
            {
              question: 'Solve $x^2 + 16 = 0$.',
              options: ['$x = \\pm 4i$', '$x = \\pm 4$', '$x = \\pm 16i$', '$x = 4i$ only'],
              correctAnswer: 0,
              explanation: '$x^2 = -16 \\Rightarrow x = \\pm\\sqrt{-16} = \\pm 4i$, a pair of complex conjugate roots.',
            },
          ],
        },
      },
    ],
  },
]
