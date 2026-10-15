export const precalcPolynomialPart5Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p5-intro',
      type: 'text' as const,
      content: `
# 📐 Complex Roots & Symmetry

**Part 5 of 7 — Complex Conjugate Pairs & Even/Odd Polynomials**

Not every polynomial has all real zeros. When the discriminant is negative or the quadratic formula yields $\\sqrt{\\text{(negative)}}$, we get **complex roots**. A polynomial of degree $n$ has exactly $n$ complex zeros counting multiplicity, and the **Conjugate Roots Theorem** tells us how the non-real ones pair up. This part also covers the other half of CED Topic 1.5: recognizing **even** and **odd** polynomial functions.
      `
    },
    {
      id: 'p5-complex-numbers-review',
      type: 'text' as const,
      content: `
## 📖 Quick Review: Complex Numbers

A **complex number** has the form $a + bi$, where $i = \\sqrt{-1}$.

| Component | Name | Example in $3 + 2i$ |
|-----------|------|:-------------------:|
| $a$ | Real part | $3$ |
| $b$ | Imaginary part | $2$ |
| $a - bi$ | Complex conjugate | $3 - 2i$ |


---

### Where Do Complex Roots Come From?

They appear when the **discriminant** $b^2 - 4ac$ is negative in the quadratic formula:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

> **Example:** Solve $x^2 + 4 = 0$

$$x = \\frac{0 \\pm \\sqrt{0 - 16}}{2} = \\frac{\\pm \\sqrt{-16}}{2} = \\frac{\\pm 4i}{2} = \\pm 2i$$

The solutions are $x = 2i$ and $x = -2i$ — a **conjugate pair**.
      `
    },
    {
      id: 'p5-conjugate-roots',
      type: 'text' as const,
      content: `
## 🔑 Complex Conjugate Roots Theorem

$$\\boxed{\\text{If } p(x) \\text{ has real coefficients and } a + bi \\text{ is a zero, then } a - bi \\text{ is also a zero.}}$$

Complex roots of real-coefficient polynomials **always come in conjugate pairs**.

> 🔑 **Key consequence:** A polynomial with real coefficients and **odd degree** must always have at least one **real** zero (since complex zeros pair off, leaving an odd one out).


---

### Using the Conjugate Roots Theorem

> **A degree-4 polynomial with real coefficients has zeros $x = 1$, $x = -3$, and $x = 2 + i$. What is the fourth zero?**

Since coefficients are real and $2 + i$ is a zero, its conjugate $2 - i$ must also be a zero.

$$\\boxed{\\text{Fourth zero: } x = 2 - i}$$

The factored form is:

$$p(x) = a(x - 1)(x + 3)(x - (2+i))(x - (2-i))$$

> 💡 **Tip:** The product $(x - (2+i))(x - (2-i))$ simplifies to the real quadratic $x^2 - 4x + 5$.
      `
    },
    {
      id: 'p5-rational-root-theorem',
      type: 'text' as const,
      content: `
## 🪞 Even and Odd Polynomial Functions

Topic 1.5 also asks you to recognize **symmetry** in polynomial functions.

| Type | Graph | Algebraic test | Power-function rule |
|------|-------|----------------|---------------------|
| **Even** | Symmetric over the line $x = 0$ (the $y$-axis) | $f(-x) = f(x)$ | $a_n x^n$ with $n$ even |
| **Odd** | Symmetric about the origin $(0, 0)$ | $f(-x) = -f(x)$ | $a_n x^n$ with $n$ odd |

A polynomial whose terms are **all even powers** (a constant counts as $x^0$) is even. One whose terms are **all odd powers** is odd. Mixing even and odd powers gives a function that is **neither**.

---

### Worked Example

> **Classify $f(x) = x^3 - 4x$, $g(x) = 2x^4 - x^2 + 5$, and $h(x) = x^3 + 1$.**

| Function | Compute $(-x)$ | Result |
|----------|----------------|--------|
| $f$ | $(-x)^3 - 4(-x) = -x^3 + 4x = -f(x)$ | **odd** |
| $g$ | $2(-x)^4 - (-x)^2 + 5 = 2x^4 - x^2 + 5 = g(x)$ | **even** |
| $h$ | $(-x)^3 + 1 = -x^3 + 1$, which is neither $h(x)$ nor $-h(x)$ | **neither** |

> ⚠️ **Common mistake:** Calling $h(x) = x^3 + 1$ odd because its degree is odd. The constant $1$ is an even-power term ($x^0$), so it breaks the symmetry about the origin.

> 💡 **Link to zeros:** An odd polynomial always passes through the origin, so $x = 0$ is a zero. The zeros of an even polynomial are symmetric: if $r$ is a zero, so is $-r$.
      `
    },
    {
      id: 'p5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Complex Roots Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A polynomial with real coefficients has zeros at $x = 3$ and $x = 1 - 4i$. Which must also be a zero?',
            options: [
              '$x = -3$',
              '$x = -1 + 4i$',
              '$x = 1 + 4i$',
              '$x = 4 - i$'
            ],
            correctAnswer: 2,
            explanation: 'By the Complex Conjugate Roots Theorem, if $1 - 4i$ is a zero, then its conjugate $1 + 4i$ must also be a zero.'
          },
          {
            question: 'A degree-3 polynomial with real coefficients has the complex zero $x = 2 + 3i$. What can you conclude?',
            options: [
              'The polynomial has no real zeros',
              'The polynomial has exactly one real zero',
              'The polynomial has three complex zeros',
              'The polynomial has two real zeros'
            ],
            correctAnswer: 1,
            explanation: 'Complex zeros come in pairs: $2 + 3i$ and $2 - 3i$ account for 2 of the 3 zeros. The remaining zero must be real (degree 3 requires 3 zeros total, counting multiplicity).'
          },
          {
            question: 'Which polynomial is an odd function?',
            options: [
              '$x^3 + x^2$',
              '$x^3 - 4x$',
              '$x^3 - 4x^2$',
              '$x^4 - 4x^2$'
            ],
            correctAnswer: 1,
            explanation: 'Every term of $x^3 - 4x$ has an odd power, so $f(-x) = -x^3 + 4x = -f(x)$. Adding an $x^2$ term mixes in an even power, which breaks origin symmetry, and $x^4 - 4x^2$ is even.'
          }
        ]
      }
    },
    {
      id: 'p5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Complex Roots Drill** 🧮

**1)** The polynomial $x^2 + 9$ has two complex zeros. What is the positive imaginary zero? Write just the value (e.g., for $x^2 + 4 = 0$, the answer is $2i$).

**2)** A degree-5 polynomial with real coefficients has 2 complex (non-real) zeros. How many real zeros does it have? (e.g., if degree is 4 with 2 complex zeros, there are $2$ real zeros)

**3)** The conjugate pair $3 + i$ and $3 - i$ produces the real factor $(x - (3+i))(x - (3-i)) = x^2 + bx + c$. Enter $c$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3i', '3', '10'],
        hint1: '$x^2 + 9 = 0 \\Rightarrow x^2 = -9 \\Rightarrow x = \\pm \\sqrt{-9}$.',
        hint2: 'Complex zeros come in pairs (2 zeros). The remaining $5 - 2 = ?$ must be real.',
        hint3: 'Write the product as $((x - 3) - i)((x - 3) + i) = (x - 3)^2 - i^2$, and remember $i^2 = -1$.',
        explanation: '1) $x = \\pm 3i$, so the positive imaginary zero is $3i$. 2) Complex zeros come in pairs, so $5 - 2 = 3$ real zeros. 3) $(x - 3)^2 - i^2 = x^2 - 6x + 9 + 1 = x^2 - 6x + 10$, so $c = 10$.'
      }
    },
    {
      id: 'p5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Complex Roots Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Complex roots of real-coefficient polynomials always come in',
            options: ['triples', 'conjugate pairs', 'equal groups', 'real pairs']
          },
          {
            label: 'A degree-3 polynomial with real coefficients must have at least',
            options: ['0 real zeros', '1 real zero', '2 real zeros', '3 real zeros']
          },
          {
            label: 'The conjugate of $5 - 3i$ is',
            options: ['$-5 + 3i$', '$5 + 3i$', '$3 - 5i$', '$-5 - 3i$']
          },
          {
            label: 'The polynomial $p(x) = 3x^4 - x^2 + 7$ is',
            options: ['even', 'odd', 'neither even nor odd', 'both even and odd']
          }
        ],
        correctAnswers: ['conjugate pairs', '1 real zero', '$5 + 3i$', 'even'],
        hint1: 'Change the sign in front of the imaginary part.',
        hint2: 'Odd-degree polynomials with real coefficients always cross the $x$-axis at least once.',
        hint3: 'Check the powers in $3x^4 - x^2 + 7$: the constant counts as $x^0$.',
        explanation: 'Complex roots pair up as conjugates ($a \\pm bi$). Odd degree guarantees at least 1 real zero. The conjugate flips the sign of the imaginary part. All powers in $3x^4 - x^2 + 7$ are even ($4$, $2$, $0$), so $p(-x) = p(x)$ and $p$ is even.'
      }
    },
    {
      id: 'p5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Complex Roots** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A degree-4 polynomial with real coefficients has zeros $x = 5$, $x = -1$, and $x = 3i$. What is the polynomial in factored form?',
            options: [
              '$a(x-5)(x+1)(x-3i)$',
              '$a(x-5)(x+1)(x-3i)(x+3i)$',
              '$a(x-5)(x+1)(x-3)(x+3)$',
              '$a(x-5)(x+1)(x^2-3)$'
            ],
            correctAnswer: 1,
            explanation: 'Since $3i$ is a zero, $-3i$ must also be a zero (conjugate pair). All four zeros accounted for: $5, -1, 3i, -3i$. The factored form is $a(x-5)(x+1)(x-3i)(x+3i)$, where $(x-3i)(x+3i) = x^2 + 9$.'
          },
          {
            question: 'Which statement is always true for a polynomial with real coefficients?',
            options: [
              'All zeros are real',
              'Complex zeros come in conjugate pairs',
              'The number of real zeros equals the degree',
              'Rational zeros always exist'
            ],
            correctAnswer: 1,
            explanation: 'For any polynomial with real coefficients, non-real complex zeros must come in conjugate pairs. The other statements are not always true.'
          }
        ]
      }
    }
  ]
};
