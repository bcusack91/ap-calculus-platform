export const precalcPolynomialPart7Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Polynomial Analysis — Full Synthesis

**Part 7 of 7 — Putting It All Together**

This final part combines every skill from the Polynomial Functions unit: degree & end behavior, zeros & factored form, multiplicity, division, complex roots, and construction. The problems here are multi-step, just like exam questions.

### Your Polynomial Toolkit

| Concept (Part) | Key Idea | Quick Check |
|:---|:---|:---|
| Degree & End Behavior (1) | Leading term determines tails | Odd degree → opposite tails |
| Zeros & Factored Form (2) | $p(r) = 0 \\iff (x - r)$ is a factor | Factor to find all zeros |
| Multiplicity (3) | Even mult → bounce, odd mult → cross | Sum of multiplicities = degree |
| Division (4) | Long / synthetic division, Remainder Thm | $p(c) = $ remainder when dividing by $(x - c)$ |
| Complex Roots & Symmetry (5) | Conjugate pairs, even/odd functions | Non-real zeros come in pairs |
| Building from Zeros (6) | $p(x) = a\\prod(x - r_i)^{m_i}$ | Need one extra point for $a$ |
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 📋 Graph-to-Equation Strategy

When given a graph or description and asked to find the equation, follow this systematic approach:

| Step | Action | What You Learn |
|:----:|--------|----------------|
| 1 | **Count intercepts & bounces** | Zeros and their multiplicities |
| 2 | **Check end behavior** | Sign of leading coefficient + even/odd degree |
| 3 | **Verify degree** | Sum of multiplicities must match |
| 4 | **Write skeleton** | $p(x) = a(x - r_1)^{m_1}(x - r_2)^{m_2}\\cdots$ |
| 5 | **Use a known point to find $a$** | Often the $y$-intercept $p(0)$ |
| 6 | **Verify** | Check end behavior and another point |

---

### Worked Example: Full Analysis

> **A polynomial of least degree falls to the left, rises to the right, crosses the $x$-axis at $x = -3$, bounces at $x = 1$, and has $y$-intercept $6$.**

**Step 1:** Zeros: $x = -3$ (cross, mult 1), $x = 1$ (bounce, mult 2)

**Step 2:** Falls left, rises right → odd degree, positive leading coefficient

**Step 3:** Degree $= 1 + 2 = 3$, which is odd ✔ (matches the end behavior)

**Step 4:** Skeleton: $p(x) = a(x + 3)(x - 1)^2$

**Step 5:** $p(0) = a(3)(1) = 3a = 6$, so $a = 2$

**Step 6:** $a = 2 > 0$, so the graph rises to the right ✔

$$p(x) = 2(x + 3)(x - 1)^2$$

> **Parity check:** the multiplicity sum must agree with the end behavior. A graph that bounces at one zero and crosses at two others has multiplicities $2 + 1 + 1 = 4$ (even degree), so both tails point the same way. If a description gives opposite tails for that pattern, there must be another zero you have not been told about.
      `
    },
    {
      id: 'p7-clean-worked',
      type: 'text' as const,
      content: `
## ✏️ Second Worked Example

> **A degree-4 polynomial has a positive leading coefficient, bounces at $x = -2$, crosses at $x = 1$ and $x = 3$, and passes through $(0, 24)$. Find the equation.**

**Step 1 — Identify zeros & multiplicities:**
- Bounces at $x = -2$ → mult 2
- Crosses at $x = 1$ → mult 1
- Crosses at $x = 3$ → mult 1
- Total: $2 + 1 + 1 = 4$ ✔ (matches degree)

**Step 2 — Verify end behavior:**
Even degree + positive lead → both tails rise ✔

**Step 3 — Write skeleton:**
$$p(x) = a(x + 2)^2(x - 1)(x - 3)$$

**Step 4 — Find $a$ from $(0, 24)$:**
$$24 = a(2)^2(-1)(-3) = a(4)(3) = 12a$$
$$a = 2$$

**Step 5 — Final answer:**
$$\\boxed{p(x) = 2(x + 2)^2(x - 1)(x - 3)}$$

**Verification:** $p(0) = 2(4)(-1)(-3) = 24$ ✔. Even degree, positive lead → both tails rise ✔.
      `
    },
    {
      id: 'p7-division-integration',
      type: 'text' as const,
      content: `
## 🔗 Integrating Division & Complex Zeros

Multi-step problems often start in standard form, hand you some zeros, and ask you to factor completely.

### Example: Complete Factorization

> **Given that $x = \\frac{1}{2}$ and $x = -3$ are zeros, factor $p(x) = 2x^4 - 3x^3 - 13x^2 + 37x - 15$ completely and find all four zeros.**

**Step 1 — Verify a given zero:**
$p\\!\\left(\\frac{1}{2}\\right) = \\frac{1}{8} - \\frac{3}{8} - \\frac{13}{4} + \\frac{37}{2} - 15 = 0$ ✔

**Step 2 — Divide by $\\left(x - \\frac{1}{2}\\right)$:** the quotient is $2x^3 - 2x^2 - 14x + 30 = 2(x^3 - x^2 - 7x + 15)$.

**Step 3 — Divide the cubic by $(x + 3)$:** $x^3 - x^2 - 7x + 15 = (x + 3)(x^2 - 4x + 5)$.

**Step 4 — Finish the quadratic:** $x^2 - 4x + 5$ has discriminant $16 - 20 = -4 < 0$, so its zeros are $x = \\frac{4 \\pm 2i}{2} = 2 \\pm i$, a conjugate pair.

$$p(x) = (2x - 1)(x + 3)(x^2 - 4x + 5), \\qquad \\text{zeros: } \\tfrac{1}{2},\\ -3,\\ 2 + i,\\ 2 - i$$

> This process uses division (Part 4), factored form (Part 2), and conjugate pairs (Part 5) together. Four zeros for a degree-$4$ polynomial, exactly as the Fundamental Theorem of Algebra promises.
      `
    },
    {
      id: 'p7-synthesis-quiz',
      type: 'multiple-choice' as const,
      content: `
**Synthesis Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A degree-4 polynomial with a negative leading coefficient has exactly three distinct real zeros, one of which has multiplicity 2. How does the graph behave?',
            options: [
              'Falls on both ends; crosses at 2 zeros and bounces at 1',
              'Rises on both ends; crosses at 2 zeros and bounces at 1',
              'Falls on both ends; crosses at all 3 zeros',
              'Rises left, falls right; crosses at 2 and bounces at 1'
            ],
            correctAnswer: 0,
            explanation: 'Degree 4 (even) with a negative leading coefficient falls on both ends. The multiplicities $2 + 1 + 1 = 4$ match the degree, so the multiplicity-2 zero is a bounce and the other two are crossings.'
          },
          {
            question: 'A polynomial $p$ has degree 4, real coefficients, leading coefficient 1, $p(2) = 0$, and $p(i) = 0$. How many more facts (a zero or a point) are needed to determine $p$?',
            options: [
              '0, since it is already determined',
              '1, either one more zero or one point',
              '2, both one more zero and one point',
              '3, one fact per unknown coefficient'
            ],
            correctAnswer: 1,
            explanation: 'Real coefficients force $-i$ to be a zero too, so $p(x) = (x - 2)(x^2 + 1)(x - r)$ with only the fourth zero $r$ unknown. One more fact, either $r$ itself or one point such as $p(0)$, pins it down; the leading coefficient is already given.'
          },
          {
            question: 'After dividing $p(x) = x^3 + 2x^2 - 5x - 6$ by $(x + 3)$ using synthetic division, the quotient is $x^2 - x - 2$. What are ALL the zeros of $p(x)$?',
            options: [
              '$x = -3, 1, 2$',
              '$x = -3, -1, 2$',
              '$x = 3, -1, 2$',
              '$x = -3, 1, -2$'
            ],
            correctAnswer: 1,
            explanation: 'Division by $(x+3)$ confirms $x = -3$ is a zero. The quotient $x^2 - x - 2 = (x-2)(x+1)$, giving zeros $x = 2$ and $x = -1$. All zeros: $\\{-3, -1, 2\\}$.'
          }
        ]
      }
    },
    {
      id: 'p7-multi-step-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Calculation Drill** 🧮

**1)** $p(x) = 2(x+1)(x-3)^2$. What is $p(0)$? (e.g., for $3(x-1)(x+2)^2$, $p(0) = 3(-1)(4) = -12$)

**2)** A degree-3 polynomial has zeros at $x = -2$, $x = 1$, $x = 5$ and $p(0) = 30$. What is the leading coefficient $a$? (e.g., for zeros $1, 2, 3$ with $p(0) = -12$: $a(-1)(-2)(-3) = -6a = -12$, so $a = 2$)

**3)** How many turning points does a degree-6 polynomial have at most? (e.g., a degree-4 polynomial has at most $4-1 = 3$ turning points)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '3', '5'],
        hint1: '$p(0) = 2(0+1)(0-3)^2 = 2(1)(9)$. Remember: squaring removes the negative sign.',
        hint2: '$p(0) = a(0+2)(0-1)(0-5) = a(2)(-1)(-5) = 10a$. Set $10a = 30$.',
        hint3: 'A degree-$n$ polynomial has at most $n - 1$ turning points.',
        explanation: '1) $p(0) = 2(1)(9) = 18$. 2) $10a = 30$, so $a = 3$. 3) $6 - 1 = 5$.'
      }
    },
    {
      id: 'p7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Synthesis — Match Strategy to Scenario** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a polynomial in standard form and asked to find all zeros, your FIRST step should be:',
            options: ['Graph the end behavior', 'Guess and check integer values', 'Factor out the GCF', 'Divide by a random linear factor']
          },
          {
            label: 'The graph touches but does not cross the $x$-axis at $x = 4$. This means $x = 4$ has',
            options: ['odd multiplicity', 'even multiplicity', 'multiplicity exactly 1', 'no multiplicity']
          },
          {
            label: 'For a polynomial with real coefficients and a zero at $3 - 2i$, you must also include',
            options: ['$-3 + 2i$', '$3 + 2i$', '$2 - 3i$', 'no additional zero is required']
          },
          {
            label: 'After confirming $x = 2$ is a zero, the most efficient next step is',
            options: ['Test more values on the original polynomial', 'Divide by $(x - 2)$ to reduce the degree', 'Expand the polynomial to check it', 'Sketch the end behavior again']
          }
        ],
        correctAnswers: ['Factor out the GCF', 'even multiplicity', '$3 + 2i$', 'Divide by $(x - 2)$ to reduce the degree'],
        hint1: 'Always simplify first: a common factor shrinks every later step.',
        hint2: 'Touch-but-no-cross = bounce = even multiplicity.',
        hint3: 'Complex zeros of real-coefficient polynomials come in conjugate pairs.',
        explanation: 'Start by factoring out any GCF. Touching without crossing means even multiplicity. The complex conjugate of $3-2i$ is $3+2i$. After finding a zero, divide it out to work with a simpler polynomial.'
      }
    },
    {
      id: 'p7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Polynomial Functions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A degree-4 polynomial with real coefficients has zeros at $x = -1$ (multiplicity 2) and $x = 2 + i$. The $y$-intercept is $10$. What is the polynomial?',
            options: [
              '$p(x) = 2(x+1)^2(x^2 - 4x + 5)$',
              '$p(x) = (x+1)^2(x^2 - 4x + 5)$',
              '$p(x) = -2(x+1)^2(x^2 - 4x + 5)$',
              '$p(x) = 2(x-1)^2(x^2 - 4x + 5)$'
            ],
            correctAnswer: 0,
            explanation: 'Zeros: $x = -1$ (mult 2), $x = 2+i$, $x = 2-i$ (conjugate). The complex pair gives $(x-(2+i))(x-(2-i)) = x^2 - 4x + 5$. Skeleton: $a(x+1)^2(x^2-4x+5)$. At $x = 0$: $a(1)(5) = 5a = 10$, so $a = 2$.'
          },
          {
            question: 'Which combination of information is sufficient to determine a degree-3 polynomial with real coefficients uniquely?',
            options: [
              'Three zeros only',
              'Three zeros and the leading coefficient',
              'Two zeros and the $y$-intercept',
              'The degree and end behavior only'
            ],
            correctAnswer: 1,
            explanation: 'Three zeros give $p(x) = a(x-r_1)(x-r_2)(x-r_3)$. Knowing $a$ (the leading coefficient) uniquely determines the polynomial. Three zeros alone leaves $a$ unknown. Two zeros + $y$-intercept is not enough for a cubic (still have an unknown zero). Degree + end behavior only gives the sign of $a$, not the polynomial.'
          }
        ]
      }
    }
  ]
};
