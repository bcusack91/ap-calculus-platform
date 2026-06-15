import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Complex Number System (Algebra 2).
 * Registry key: 'complex-number-system-alg2' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'complex-number-system-alg2',
    sections: [
      {
        id: 'cns1-intro',
        type: 'text' as const,
        content: `# 🌀 The Complex Number System

**Part 1 of 5 — The Imaginary Unit $i$**

---

### Topics in This Part

| Section |
|---------|
| Why We Invented $i$ |
| Simplifying $\\sqrt{-n}$ |
| The Powers of $i$ |

> 🔑 **Key Concept:** No real number squares to a negative. So mathematicians *defined* a new number, $i$, with the single property $i^2 = -1$. That one definition unlocks an entire number system.`,
      },
      {
        id: 'cns1-why',
        type: 'text' as const,
        content: `## Why We Invented $i$

Try to solve $x^2 = -1$. On the real number line there is **no** answer — any real number squared is zero or positive. To fill that gap, we define the **imaginary unit**:

$$i = \\sqrt{-1} \\qquad\\Longleftrightarrow\\qquad i^2 = -1$$

That's the whole idea. Everything else follows from $i^2 = -1$.

### Square Roots of Negatives

For any positive number $n$:

$$\\sqrt{-n} = \\sqrt{n}\\cdot\\sqrt{-1} = i\\sqrt{n}$$

| Expression | Rewrite | Simplified |
|-----------|---------|-----------|
| $\\sqrt{-9}$ | $\\sqrt{9}\\cdot\\sqrt{-1}$ | $3i$ |
| $\\sqrt{-25}$ | $\\sqrt{25}\\cdot\\sqrt{-1}$ | $5i$ |
| $\\sqrt{-12}$ | $\\sqrt{4}\\cdot\\sqrt{3}\\cdot\\sqrt{-1}$ | $2i\\sqrt{3}$ |

> ⚠️ **Pull out $i$ first.** The rule $\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$ fails for negatives: $\\sqrt{-4}\\cdot\\sqrt{-9}\\ne\\sqrt{36}$. Convert each to $i$-form *before* multiplying.`,
      },
      {
        id: 'cns1-simplify-mc',
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
              question: 'Which statement is the definition of $i$?',
              options: ['$i^2 = -1$', '$i = -1$', '$i^2 = 1$', '$i = 0$'],
              correctAnswer: 0,
              explanation: 'The imaginary unit is defined by $i = \\sqrt{-1}$, equivalently $i^2 = -1$.',
            },
          ],
        },
      },
      {
        id: 'cns1-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify the Radical** 🧮

Write each as a real coefficient times $i$. Enter just the **coefficient of $i$** (the number in front).

**1)** $\\sqrt{-36} = \\,?\\,i$
**2)** $\\sqrt{-100} = \\,?\\,i$
**3)** $\\sqrt{-1} = \\,?\\,i$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '10', '1'],
          hint1: '$\\sqrt{-36} = \\sqrt{36}\\cdot\\sqrt{-1} = 6i$, so the coefficient is $6$.',
          hint2: '$\\sqrt{100} = 10$, so $\\sqrt{-100} = 10i$.',
          hint3: '$\\sqrt{-1} = i = 1\\cdot i$, so the coefficient is $1$.',
          explanation: '1) $6i \\to 6$.  2) $10i \\to 10$.  3) $1i \\to 1$. In each case $\\sqrt{-n} = \\sqrt{n}\\,i$.',
        },
      },
      {
        id: 'cns1-powers',
        type: 'text' as const,
        content: `## The Powers of $i$ Cycle

Watch what happens when we keep multiplying by $i$:

$$i^1 = i \\qquad i^2 = -1 \\qquad i^3 = i^2\\cdot i = -i \\qquad i^4 = i^2\\cdot i^2 = 1$$

Then it **repeats** — $i^5 = i^4\\cdot i = i$, and so on. The powers cycle through four values:

| Power | $i^1$ | $i^2$ | $i^3$ | $i^4$ | $i^5$ | $i^6$ |
|-------|-------|-------|-------|-------|-------|-------|
| Value | $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ |

> 🔑 **The Shortcut:** Divide the exponent by $4$ and use the **remainder**:
> - remainder $1 \\to i$
> - remainder $2 \\to -1$
> - remainder $3 \\to -i$
> - remainder $0 \\to 1$

**Example:** $i^{23}$. Since $23 \\div 4 = 5$ remainder $3$, we get $i^{23} = -i$.`,
      },
      {
        id: 'cns1-powers-dropdown',
        type: 'dropdown-select' as const,
        content: `**Cycle Through the Powers** 🔽

Use the remainder-after-dividing-by-$4$ shortcut.`,
        exercise: {
          dropdowns: [
            { label: '$i^{4} =$', options: ['$1$', '$i$', '$-1$', '$-i$'] },
            { label: '$i^{10} =$', options: ['$-1$', '$1$', '$i$', '$-i$'] },
            { label: '$i^{15} =$', options: ['$-i$', '$i$', '$-1$', '$1$'] },
            { label: '$i^{100} =$', options: ['$1$', '$-1$', '$i$', '$-i$'] },
          ],
          correctAnswers: ['$1$', '$-1$', '$-i$', '$1$'],
          hint1: '$4 \\div 4$ has remainder $0 \\to 1$.',
          hint2: '$10 \\div 4 = 2$ remainder $2 \\to -1$.',
          hint3: '$15 \\div 4 = 3$ remainder $3 \\to -i$; $100 \\div 4 = 25$ remainder $0 \\to 1$.',
          explanation: 'Remainders: $i^4$ rem $0=1$, $i^{10}$ rem $2=-1$, $i^{15}$ rem $3=-i$, $i^{100}$ rem $0=1$.',
        },
      },
      {
        id: 'cns1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

You now own the two facts the whole system rests on:

1. **$i^2 = -1$** — the definition. Use it to simplify $\\sqrt{-n} = \\sqrt{n}\\,i$.
2. **Powers of $i$ cycle every 4** — use the remainder of the exponent over $4$.

In Part 2 we combine a real part and an imaginary part into a single **complex number** and learn to add and subtract them.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'complex-number-system-alg2',
    sections: [
      {
        id: 'cns2-intro',
        type: 'text' as const,
        content: `# 🌀 The Complex Number System

**Part 2 of 5 — Standard Form, the Complex Plane & Adding**

---

> 🔑 **The Idea:** A **complex number** glues a real part and an imaginary part together: $a + bi$. Real numbers and imaginary numbers are both just special cases of this one form.`,
      },
      {
        id: 'cns2-standard',
        type: 'text' as const,
        content: `## Standard Form: $a + bi$

Every complex number can be written as

$$a + bi \\qquad\\text{where } a \\text{ and } b \\text{ are real numbers.}$$

- $a$ is the **real part**, written $\\text{Re}(z)$.
- $b$ is the **imaginary part**, written $\\text{Im}(z)$ — note $b$ is the real coefficient, **not** $bi$.

| Number | Real part $a$ | Imaginary part $b$ |
|--------|---------------|--------------------|
| $3 + 5i$ | $3$ | $5$ |
| $-2 - 7i$ | $-2$ | $-7$ |
| $4i$ | $0$ | $4$ |
| $6$ | $6$ | $0$ |

> 💡 A **real number** is just a complex number with $b = 0$, and a **pure imaginary number** is one with $a = 0$. Complex numbers contain the reals.

### The Complex Plane

We graph $a + bi$ as the point $(a, b)$: the horizontal axis is the **real axis** and the vertical axis is the **imaginary axis**. So $3 + 5i$ lives at the point $(3, 5)$.`,
      },
      {
        id: 'cns2-parts-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the imaginary part of $-8 + 2i$?',
              options: ['$2$', '$2i$', '$-8$', '$-8 + 2i$'],
              correctAnswer: 0,
              explanation: 'In $a + bi$, the imaginary part is the real coefficient $b$. Here $b = 2$ (not $2i$).',
            },
            {
              question: 'Where does $-3 + 4i$ sit in the complex plane?',
              options: ['$(-3, 4)$', '$(4, -3)$', '$(3, 4)$', '$(-3, -4)$'],
              correctAnswer: 0,
              explanation: 'Plot $a + bi$ as $(a, b)$. Here $a = -3$, $b = 4$, giving the point $(-3, 4)$.',
            },
          ],
        },
      },
      {
        id: 'cns2-addsub',
        type: 'text' as const,
        content: `## Adding & Subtracting

Combine **like parts** — reals with reals, imaginaries with imaginaries — just like combining like terms:

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

### Worked Example: Add

$$(3 + 5i) + (4 - 2i) = (3+4) + (5-2)i = 7 + 3i$$

### Worked Example: Subtract

Distribute the minus sign to **both** parts of the second number:

$$(6 - i) - (2 + 4i) = (6-2) + (-1-4)i = 4 - 5i$$

> ⚠️ **The classic slip:** forgetting to subtract the imaginary part too. $-(2 + 4i) = -2 - 4i$, so the $i$-terms become $-1 - 4 = -5$, not $-1 + 4$.`,
      },
      {
        id: 'cns2-add-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract** 🧮

Each answer is a complex number $a + bi$. Enter $a$ in the first box and $b$ in the second.

**1)** $(2 + 3i) + (5 + 4i) = a + bi$
**2)** $(7 - 2i) - (3 + 6i) = a + bi$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '7', '4', '-8'],
          hint1: 'Add real parts, then imaginary parts: $(2+5) = 7$ and $(3+4) = 7$.',
          hint2: 'Subtraction: $(7-3) = 4$ for the real part.',
          hint3: 'Imaginary part of #2: $-2 - 6 = -8$ (subtract the $+6i$).',
          explanation: '1) $7 + 7i$, so $a=7,\\,b=7$.  2) $(7-3)+(-2-6)i = 4 - 8i$, so $a=4,\\,b=-8$.',
        },
      },
      {
        id: 'cns2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify & Combine** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$4i$ is best described as:', options: ['pure imaginary', 'real', 'neither real nor complex', 'undefined'] },
            { label: 'Real part of $9 - 5i$:', options: ['$9$', '$-5$', '$-5i$', '$9 - 5i$'] },
            { label: '$(1 + i) + (1 - i) =$', options: ['$2$', '$2i$', '$2 + 2i$', '$0$'] },
          ],
          correctAnswers: ['pure imaginary', '$9$', '$2$'],
          hint1: '$4i = 0 + 4i$ has real part $0$, so it is pure imaginary.',
          hint2: 'In $a + bi$, the real part is $a$; here $a = 9$.',
          hint3: 'Add parts: $(1+1) + (1 + (-1))i = 2 + 0i = 2$.',
          explanation: '$4i$ is pure imaginary ($a=0$); the real part of $9 - 5i$ is $9$; and $(1+i)+(1-i) = 2$ because the imaginary parts cancel.',
        },
      },
      {
        id: 'cns2-recap',
        type: 'text' as const,
        content: `## Part 2 Recap

- Standard form is $a + bi$: real part $a$, imaginary part $b$.
- Plot it at $(a, b)$ in the complex plane.
- Add/subtract by combining real with real and imaginary with imaginary — and distribute the minus sign carefully.

Next up: **multiplying** complex numbers, where $i^2 = -1$ does the heavy lifting.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'complex-number-system-alg2',
    sections: [
      {
        id: 'cns3-intro',
        type: 'text' as const,
        content: `# 🌀 The Complex Number System

**Part 3 of 5 — Multiplying Complex Numbers**

---

> 🔑 **Why it works:** Multiply complex numbers exactly like binomials (FOIL), then replace every $i^2$ with $-1$ and recombine. That single substitution is the entire trick.`,
      },
      {
        id: 'cns3-foil',
        type: 'text' as const,
        content: `## FOIL, Then Replace $i^2$

To multiply $(a + bi)(c + di)$, distribute as usual, then use $i^2 = -1$.

### Worked Example: $(2 + 3i)(4 + 5i)$

$$\\begin{aligned}
(2 + 3i)(4 + 5i) &= 8 + 10i + 12i + 15i^2 \\\\
&= 8 + 22i + 15(-1) \\\\
&= 8 + 22i - 15 \\\\
&= -7 + 22i
\\end{aligned}$$

> ⚠️ **Don't forget $i^2 = -1$.** The $15i^2$ term becomes the *real* number $-15$, which changes the real part. Leaving it as $+15$ is the #1 multiplication error.`,
      },
      {
        id: 'cns3-by-i',
        type: 'text' as const,
        content: `## Multiplying by $i$ Alone

Distribute, then apply $i^2 = -1$:

$$i(3 - 4i) = 3i - 4i^2 = 3i - 4(-1) = 4 + 3i$$

### A Useful Special Product

$$(a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2$$

The cross terms cancel and $-b^2 i^2 = +b^2$, so the result is the **real** number $a^2 + b^2$. We'll use this everywhere in Part 4.

| Product | Result |
|---------|--------|
| $(3 + 2i)(3 - 2i)$ | $3^2 + 2^2 = 13$ |
| $(5 + i)(5 - i)$ | $5^2 + 1^2 = 26$ |
| $(1 + 4i)(1 - 4i)$ | $1^2 + 4^2 = 17$ |`,
      },
      {
        id: 'cns3-mult-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(1 + 2i)(3 + i)$.',
              options: ['$1 + 7i$', '$3 + 2i$', '$5 + 7i$', '$1 + i$'],
              correctAnswer: 0,
              explanation: '$3 + i + 6i + 2i^2 = 3 + 7i + 2(-1) = 3 - 2 + 7i = 1 + 7i$.',
            },
            {
              question: 'What is $(4 + 3i)(4 - 3i)$?',
              options: ['$25$', '$7$', '$16 - 9i$', '$25i$'],
              correctAnswer: 0,
              explanation: 'Conjugate product: $a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$ (a real number).',
            },
          ],
        },
      },
      {
        id: 'cns3-mult-drill',
        type: 'input-boxes' as const,
        content: `**Multiply It Out** 🧮

Write each product as $a + bi$. Enter $a$ then $b$.

**1)** $(2 + i)(1 + 3i) = a + bi$
**2)** $i(2 - 5i) = a + bi$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-1', '7', '5', '2'],
          hint1: '#1: $2 + 6i + i + 3i^2 = 2 + 7i + 3(-1)$.',
          hint2: '$2 - 3 = -1$ for the real part of #1; imaginary part is $7$.',
          hint3: '#2: $i(2 - 5i) = 2i - 5i^2 = 2i + 5 = 5 + 2i$.',
          explanation: '1) $2 + 7i - 3 = -1 + 7i \\to a=-1,\\,b=7$.  2) $2i - 5(-1) = 5 + 2i \\to a=5,\\,b=2$.',
        },
      },
      {
        id: 'cns3-conj-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Real Result** 🔽

Each conjugate product collapses to a real number $a^2 + b^2$.`,
        exercise: {
          dropdowns: [
            { label: '$(6 + i)(6 - i) =$', options: ['$37$', '$35$', '$36 - i$', '$37i$'] },
            { label: '$i \\cdot i \\cdot i =$', options: ['$-i$', '$i$', '$-1$', '$1$'] },
            { label: '$(2i)(3i) =$', options: ['$-6$', '$6$', '$6i$', '$5i$'] },
          ],
          correctAnswers: ['$37$', '$-i$', '$-6$'],
          hint1: '$(6+i)(6-i) = 6^2 + 1^2 = 37$.',
          hint2: '$i \\cdot i \\cdot i = i^3 = -i$.',
          hint3: '$(2i)(3i) = 6i^2 = 6(-1) = -6$.',
          explanation: 'Conjugate product $6^2+1^2 = 37$; $i^3 = -i$; and $(2i)(3i) = 6i^2 = -6$.',
        },
      },
      {
        id: 'cns3-recap',
        type: 'text' as const,
        content: `## Part 3 Recap

- Multiply by FOIL/distribution, then replace each $i^2$ with $-1$.
- $i$ times a number rotates real ↔ imaginary parts (and flips a sign).
- The conjugate product $(a + bi)(a - bi) = a^2 + b^2$ is always real.

That last fact is the key to **dividing** complex numbers — our Part 4 topic.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'complex-number-system-alg2',
    sections: [
      {
        id: 'cns4-intro',
        type: 'text' as const,
        content: `# 🌀 The Complex Number System

**Part 4 of 5 — Conjugates, Division & Modulus**

---

> 🔑 **Big Payoff:** You can't leave an $i$ in a denominator. Multiplying top and bottom by the **conjugate** clears it, turning any complex quotient into clean $a + bi$ form.`,
      },
      {
        id: 'cns4-conjugate',
        type: 'text' as const,
        content: `## The Complex Conjugate

The **conjugate** of $a + bi$ is $a - bi$ — same real part, opposite sign on the imaginary part. We write it $\\overline{z}$.

| $z$ | $\\overline{z}$ |
|-----|-----------------|
| $3 + 5i$ | $3 - 5i$ |
| $-2 - 7i$ | $-2 + 7i$ |
| $4i$ | $-4i$ |
| $6$ | $6$ |

The magic property, from Part 3:

$$z\\cdot\\overline{z} = (a + bi)(a - bi) = a^2 + b^2 \\quad(\\text{always a non-negative real number})$$`,
      },
      {
        id: 'cns4-conj-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find the Conjugate** 🔽

Flip the sign of the imaginary part only.`,
        exercise: {
          dropdowns: [
            { label: 'Conjugate of $5 + 2i$:', options: ['$5 - 2i$', '$-5 + 2i$', '$5 + 2i$', '$-5 - 2i$'] },
            { label: 'Conjugate of $-3 - 8i$:', options: ['$-3 + 8i$', '$3 + 8i$', '$-3 - 8i$', '$3 - 8i$'] },
            { label: '$(7 + 4i)(7 - 4i) =$', options: ['$65$', '$33$', '$49 - 16i$', '$65i$'] },
          ],
          correctAnswers: ['$5 - 2i$', '$-3 + 8i$', '$65$'],
          hint1: 'Keep the real part; negate the imaginary part: $5 + 2i \\to 5 - 2i$.',
          hint2: '$-3 - 8i$ has imaginary part $-8$; flipping gives $+8$, so $-3 + 8i$.',
          hint3: 'Conjugate product $= a^2 + b^2 = 7^2 + 4^2 = 49 + 16 = 65$.',
          explanation: 'The conjugate negates only the $i$-term. Its product with the original is $a^2 + b^2$, here $65$.',
        },
      },
      {
        id: 'cns4-divide',
        type: 'text' as const,
        content: `## Dividing Complex Numbers

To divide, **multiply numerator and denominator by the conjugate of the denominator**. This makes the denominator real.

### Worked Example: $\\dfrac{2 + 3i}{1 - i}$

The denominator's conjugate is $1 + i$:

$$\\frac{2 + 3i}{1 - i}\\cdot\\frac{1 + i}{1 + i} = \\frac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)}$$

**Numerator:** $(2 + 3i)(1 + i) = 2 + 2i + 3i + 3i^2 = 2 + 5i - 3 = -1 + 5i$

**Denominator:** $(1 - i)(1 + i) = 1^2 + 1^2 = 2$

$$= \\frac{-1 + 5i}{2} = -\\frac{1}{2} + \\frac{5}{2}i$$

> 💡 Split the final fraction into real and imaginary pieces: $\\dfrac{-1 + 5i}{2} = \\dfrac{-1}{2} + \\dfrac{5}{2}i$. Standard form always separates the two parts.`,
      },
      {
        id: 'cns4-divide-drill',
        type: 'input-boxes' as const,
        content: `**Divide & Simplify** 🧮

Simplify $\\dfrac{5}{2 + i}$ to the form $a + bi$.

**1)** Multiply top and bottom by the conjugate $2 - i$. The new denominator is $\\,?$
**2)** The real part $a = \\,?$  *(decimal ok)*
**3)** The imaginary part $b = \\,?$  *(decimal ok)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '2', '-1'],
          hint1: 'Denominator: $(2 + i)(2 - i) = 2^2 + 1^2 = 5$.',
          hint2: 'Numerator: $5(2 - i) = 10 - 5i$. Then divide each term by $5$.',
          hint3: '$\\dfrac{10 - 5i}{5} = 2 - i$, so $a = 2$ and $b = -1$.',
          explanation: '$\\dfrac{5}{2+i}\\cdot\\dfrac{2-i}{2-i} = \\dfrac{10 - 5i}{5} = 2 - i$. Denominator $5$, $a = 2$, $b = -1$.',
        },
      },
      {
        id: 'cns4-modulus',
        type: 'text' as const,
        content: `## Modulus (Absolute Value)

The **modulus** $|z|$ is the distance from $a + bi$ to the origin in the complex plane — a straight Pythagorean distance:

$$|a + bi| = \\sqrt{a^2 + b^2}$$

### Examples

$$|3 + 4i| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$

$$|{-5} + 12i| = \\sqrt{(-5)^2 + 12^2} = \\sqrt{169} = 13$$

> 💡 Notice $|z| = \\sqrt{z\\cdot\\overline{z}}$, since $z\\cdot\\overline{z} = a^2 + b^2$. The conjugate and the modulus are two sides of the same coin.`,
      },
      {
        id: 'cns4-modulus-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $|8 + 6i|$?',
              options: ['$10$', '$14$', '$\\sqrt{14}$', '$48$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.',
            },
            {
              question: 'To divide by $3 - 2i$, what do you multiply the numerator and denominator by?',
              options: ['$3 + 2i$', '$3 - 2i$', '$2 - 3i$', '$-3 + 2i$'],
              correctAnswer: 0,
              explanation: 'Use the conjugate of the denominator, $3 + 2i$, to make the denominator real.',
            },
          ],
        },
      },
      {
        id: 'cns4-recap',
        type: 'text' as const,
        content: `## Part 4 Recap

- The conjugate of $a + bi$ is $a - bi$; their product $a^2 + b^2$ is real.
- Divide by multiplying top and bottom by the denominator's conjugate, then split into $a + bi$.
- Modulus $|a + bi| = \\sqrt{a^2 + b^2}$ is the distance to the origin.

Part 5 puts all four skills together — then an Exit Quiz.`,
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'complex-number-system-alg2',
    sections: [
      {
        id: 'cns5-intro',
        type: 'text' as const,
        content: `# 🌀 The Complex Number System

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) simplify roots and powers of $i$, (2) add and subtract, (3) multiply, and (4) take conjugates, divide, and find the modulus. Let's put it all together.`,
      },
      {
        id: 'cns5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify $\\sqrt{-n}$ | $\\sqrt{n}\\,i$ |
| Evaluate $i^n$ | remainder of $n \\div 4$: $1{\\to}i,\\,2{\\to}{-1},\\,3{\\to}{-i},\\,0{\\to}1$ |
| Add / subtract | combine real with real, imaginary with imaginary |
| Multiply | FOIL, then replace $i^2$ with $-1$ |
| Divide | multiply by the denominator's conjugate |
| Modulus | $\\sqrt{a^2 + b^2}$ |

> ⚠️ The two errors that cost the most points: **dropping $i^2 = -1$** when multiplying, and **not distributing the minus sign** to the imaginary part when subtracting.`,
      },
      {
        id: 'cns5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Skills** 🔽

One quick check from each part.`,
        exercise: {
          dropdowns: [
            { label: '$\\sqrt{-64} =$', options: ['$8i$', '$-8$', '$8$', '$64i$'] },
            { label: '$i^{22} =$', options: ['$-1$', '$1$', '$i$', '$-i$'] },
            { label: '$(2 - 3i) + (5 + 8i) =$', options: ['$7 + 5i$', '$7 - 5i$', '$-3 + 5i$', '$7 + 11i$'] },
            { label: '$|6 + 8i| =$', options: ['$10$', '$14$', '$\\sqrt{14}$', '$100$'] },
          ],
          correctAnswers: ['$8i$', '$-1$', '$7 + 5i$', '$10$'],
          hint1: '$\\sqrt{-64} = \\sqrt{64}\\,i = 8i$.',
          hint2: '$22 \\div 4 = 5$ remainder $2 \\to -1$.',
          hint3: '$(2+5) + (-3+8)i = 7 + 5i$; and $|6+8i| = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          explanation: '$8i$; $i^{22}$ rem $2 = -1$; $7 + 5i$; modulus $\\sqrt{6^2+8^2} = 10$.',
        },
      },
      {
        id: 'cns5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Simplify $(3 + 2i)(1 - 4i)$.',
              options: ['$11 - 10i$', '$3 - 8i$', '$-5 - 10i$', '$11 + 10i$'],
              correctAnswer: 0,
              explanation: '$3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i$ (since $-8i^2 = +8$).',
            },
            {
              question: 'Write $\\dfrac{4}{1 + i}$ in standard form.',
              options: ['$2 - 2i$', '$2 + 2i$', '$4 - 4i$', '$2 - 4i$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{4}{1+i}\\cdot\\dfrac{1-i}{1-i} = \\dfrac{4(1-i)}{2} = \\dfrac{4 - 4i}{2} = 2 - 2i$.',
            },
          ],
        },
      },
      {
        id: 'cns5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify $i^{37}$.',
              options: ['$i$', '$-i$', '$1$', '$-1$'],
              correctAnswer: 0,
              explanation: '$37 \\div 4 = 9$ remainder $1$, and remainder $1 \\to i$.',
            },
            {
              question: 'Simplify $(5 + 2i) - (3 - 4i)$.',
              options: ['$2 + 6i$', '$2 - 2i$', '$8 - 2i$', '$2 - 6i$'],
              correctAnswer: 0,
              explanation: 'Distribute the minus: $(5 - 3) + (2 - (-4))i = 2 + 6i$.',
            },
            {
              question: 'What is the conjugate of $-7 + 9i$, and what is its modulus $|-7 + 9i|$?',
              options: ['$-7 - 9i$ and $\\sqrt{130}$', '$7 - 9i$ and $\\sqrt{130}$', '$-7 - 9i$ and $130$', '$7 + 9i$ and $16$'],
              correctAnswer: 0,
              explanation: 'Conjugate negates the $i$-term: $-7 - 9i$. Modulus $= \\sqrt{(-7)^2 + 9^2} = \\sqrt{49 + 81} = \\sqrt{130}$.',
            },
          ],
        },
      },
    ],
  },
]
