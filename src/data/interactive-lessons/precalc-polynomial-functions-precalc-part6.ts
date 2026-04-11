export const precalcPolynomialPart6Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# 📐 Building Polynomials from Zeros

**Part 6 of 7 — Constructing Polynomials from Given Information**

One of the most powerful skills in precalculus is working **backwards** — starting from zeros, intercepts, or graph features and building the polynomial that matches. This part teaches a systematic approach for constructing polynomials from constraints.
      `
    },
    {
      id: 'p6-from-zeros',
      type: 'text' as const,
      content: `
## 📖 Building from Zeros

If you know the zeros $r_1, r_2, \\ldots, r_n$ and their multiplicities, the polynomial has the form:

$$\\boxed{p(x) = a(x - r_1)^{m_1}(x - r_2)^{m_2} \\cdots (x - r_n)^{m_n}}$$

The degree is $m_1 + m_2 + \\cdots + m_n$, and $a$ is a scaling constant determined by another condition (like a point the graph passes through).


---

### Step-by-Step Process

| Step | Action | Example |
|:----:|--------|---------|
| 1 | List all zeros and their multiplicities | $x = -1$ (mult 1), $x = 3$ (mult 2) |
| 2 | Write the factored skeleton | $p(x) = a(x + 1)(x - 3)^2$ |
| 3 | Use an additional point to solve for $a$ | If $p(0) = 18$: $a(1)(9) = 18 \\Rightarrow a = 2$ |
| 4 | Write the final answer | $p(x) = 2(x + 1)(x - 3)^2$ |

> ⚠️ **Common mistake:** Forgetting the leading coefficient $a$. Without an extra condition, you can never determine $a$ — there are infinitely many polynomials with the same zeros.
      `
    },
    {
      id: 'p6-worked-example',
      type: 'text' as const,
      content: `
## ✏️ Worked Examples

### Example 1: From Zeros and a Point

> **Find a polynomial of degree 3 with zeros at $x = -2$, $x = 1$, and $x = 4$, given that $p(0) = -16$.**

**Step 1:** Write the skeleton:
$$p(x) = a(x + 2)(x - 1)(x - 4)$$

**Step 2:** Substitute $(0, -16)$:
$$-16 = a(2)(-1)(-4) = 8a$$

**Step 3:** Solve: $a = -2$

$$\\boxed{p(x) = -2(x + 2)(x - 1)(x - 4)}$$


---

### Example 2: From a Graph Description

> **A degree-4 polynomial bounces at $x = 2$, crosses at $x = -1$ and $x = 5$, and passes through $(0, 20)$.**

**Step 1:** Interpret graph behavior:
- Bounces at $x = 2$ → even multiplicity → $(x - 2)^2$
- Crosses at $x = -1$ → odd multiplicity → $(x + 1)$
- Crosses at $x = 5$ → odd multiplicity → $(x - 5)$

Check: degree $= 2 + 1 + 1 = 4$ ✔

**Step 2:** Skeleton: $p(x) = a(x + 1)(x - 2)^2(x - 5)$

**Step 3:** Use $p(0) = 20$:
$$20 = a(1)(4)(-5) = -20a \\implies a = -1$$

$$\\boxed{p(x) = -(x + 1)(x - 2)^2(x - 5)}$$
      `
    },
    {
      id: 'p6-with-complex-zeros',
      type: 'text' as const,
      content: `
## 🔑 Including Complex Zeros

When a polynomial with real coefficients has a complex zero $a + bi$, you must also include $a - bi$.

The pair produces a **real quadratic factor**:

$$(x - (a+bi))(x - (a-bi)) = x^2 - 2ax + (a^2 + b^2)$$

### Example

> **Find a degree-3 polynomial with real coefficients, zeros at $x = 4$ and $x = 1 + 2i$, and leading coefficient $1$.**

**Step 1:** Include the conjugate: $x = 1 - 2i$

**Step 2:** Build factors:
$$(x - 4) \\cdot [(x - (1+2i))(x - (1-2i))]$$

**Step 3:** Simplify the complex pair:
$$(x - 1 - 2i)(x - 1 + 2i) = (x-1)^2 - (2i)^2 = x^2 - 2x + 1 + 4 = x^2 - 2x + 5$$

**Step 4:** Final answer:
$$\\boxed{p(x) = (x - 4)(x^2 - 2x + 5)}$$

Expanded: $p(x) = x^3 - 6x^2 + 13x - 20$
      `
    },
    {
      id: 'p6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Building Polynomials Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A degree-3 polynomial has zeros at $x = 0$, $x = 2$, and $x = -5$, with $p(1) = 12$. What is the value of $a$?',
            options: [
              '$a = 1$',
              '$a = -2$',
              '$a = 2$',
              '$a = -1$'
            ],
            correctAnswer: 1,
            explanation: '$p(x) = a \\cdot x(x-2)(x+5)$. Substituting $x = 1$: $p(1) = a(1)(-1)(6) = -6a = 12$, so $a = -2$.'
          },
          {
            question: 'Which polynomial has the smallest possible degree, bounces at $x = 3$, and crosses at $x = -1$?',
            options: [
              '$(x - 3)(x + 1)$ — degree 2',
              '$(x - 3)^2(x + 1)$ — degree 3',
              '$(x - 3)(x + 1)^2$ — degree 3',
              '$(x - 3)^2(x + 1)^2$ — degree 4'
            ],
            correctAnswer: 1,
            explanation: 'Bouncing requires even multiplicity (minimum 2), crossing requires odd multiplicity (minimum 1). The smallest degree is $2 + 1 = 3$: $(x-3)^2(x+1)$.'
          },
          {
            question: 'A polynomial with real coefficients has zeros $x = 2$ and $x = 3 - i$. What is the minimum degree?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: 'Complex zeros come in conjugate pairs, so $3 + i$ is also a zero. That gives 3 zeros total: $x = 2$, $x = 3-i$, $x = 3+i$. Minimum degree is 3.'
          }
        ]
      }
    },
    {
      id: 'p6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Construction Drill** 🧮

**1)** A polynomial has zeros at $x = 1$ and $x = -3$ (each with multiplicity 1) and $p(0) = 6$. What is the leading coefficient $a$? Use $p(x) = a(x-1)(x+3)$. (e.g., for $a(x-2)(x+1)$ with $p(0) = 4$, $a(-2)(1) = 4$ gives $a = -2$)

**2)** What is the $y$-intercept of $p(x) = 3(x-1)(x+2)(x-4)$? Evaluate $p(0)$. (e.g., for $2(x-1)(x+3)$, $p(0) = 2(-1)(3) = -6$)

**3)** Two complex zeros are $x = 2 + 3i$ and $x = 2 - 3i$. Their quadratic factor is $x^2 - 4x + c$. What is $c$? (e.g., for $1 \\pm 2i$, $c = 1^2 + 2^2 = 5$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '24', '13'],
        hint1: '$p(0) = a(0-1)(0+3) = a(-1)(3) = -3a$. Set equal to $6$.',
        hint2: '$p(0) = 3(-1)(2)(-4)$. Multiply carefully with signs.',
        hint3: 'For $a \\pm bi$: $c = a^2 + b^2 = 4 + 9$.',
        explanation: '1) $-3a = 6 \\Rightarrow a = -2$. 2) $3(-1)(2)(-4) = 24$. 3) $c = 2^2 + 3^2 = 13$.'
      }
    },
    {
      id: 'p6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Building Polynomials — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To determine the leading coefficient $a$, you need',
            options: ['just the zeros', 'the degree', 'an additional point or condition', 'the factored form']
          },
          {
            label: 'Complex zeros $a + bi$ and $a - bi$ multiply to give a',
            options: ['linear factor', 'real quadratic factor', 'complex cubic factor', 'constant']
          },
          {
            label: 'A degree-4 polynomial with 3 distinct real zeros must have at least one zero with multiplicity',
            options: ['1', '2', '3', '4']
          },
          {
            label: 'The $y$-intercept of a polynomial equals',
            options: ['the leading coefficient', '$p(1)$', 'the constant term ($p(0)$)', 'the degree']
          }
        ],
        correctAnswers: ['an additional point or condition', 'real quadratic factor', '2', 'the constant term ($p(0)$)'],
        hint1: 'Zeros alone give the shape but not the vertical scaling.',
        hint2: '$(x-(a+bi))(x-(a-bi))$ always simplifies to a real quadratic.',
        hint3: 'With 3 distinct zeros and degree 4, one zero must repeat.',
        explanation: 'You need an extra point/condition to find $a$. Complex conjugate pairs produce real quadratics. Degree 4 with 3 distinct zeros means one has multiplicity 2. The $y$-intercept is $p(0)$, the constant term.'
      }
    },
    {
      id: 'p6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Building Polynomials** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A polynomial bounces at $x = -1$, crosses at $x = 3$, passes through $(0, -6)$, and has the smallest possible degree. Which is the correct polynomial?',
            options: [
              '$p(x) = 2(x+1)^2(x-3)$',
              '$p(x) = -2(x+1)^2(x-3)$',
              '$p(x) = 2(x-1)^2(x+3)$',
              '$p(x) = -2(x-1)^2(x+3)$'
            ],
            correctAnswer: 0,
            explanation: 'Bounces at $-1$: $(x+1)^2$. Crosses at $3$: $(x-3)$. So $p(x) = a(x+1)^2(x-3)$. $p(0) = a(1)(-3) = -3a = -6 \\Rightarrow a = 2$. Answer: $2(x+1)^2(x-3)$.'
          },
          {
            question: 'Write a polynomial with real coefficients, degree 4, zeros at $x = 0$, $x = 3$, and $x = i$, and leading coefficient $1$. In standard form, what is the constant term?',
            options: [
              '$0$',
              '$3$',
              '$-3$',
              '$1$'
            ],
            correctAnswer: 0,
            explanation: 'Zeros: $0, 3, i, -i$ (conjugate pair). $p(x) = x(x-3)(x-i)(x+i) = x(x-3)(x^2+1)$. Expanding: $x(x^3 - 3x^2 + x - 3) = x^4 - 3x^3 + x^2 - 3x$. The constant term is $0$ (since $x = 0$ is a zero, $p(0) = 0$).'
          }
        ]
      }
    }
  ]
};
