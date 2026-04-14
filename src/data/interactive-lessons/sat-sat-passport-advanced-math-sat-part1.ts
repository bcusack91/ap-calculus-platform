export const satPassportAdvPart1Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa1-intro',
      type: 'text' as const,
      content: `
# 📐 Polynomial Operations

**Part 1 of 7 — Adding, Subtracting & Multiplying Polynomials**

A **polynomial** is an expression with one or more terms, each consisting of a coefficient multiplied by a variable raised to a non-negative integer exponent.

| Term | Meaning |
|------|---------|
| **Degree** | The highest exponent of the variable |
| **Leading coefficient** | The coefficient of the highest-degree term |
| **Monomial** | One term (e.g., $5x^3$) |
| **Binomial** | Two terms (e.g., $3x^2 + 7$) |
| **Trinomial** | Three terms (e.g., $x^2 - 4x + 1$) |

**Example:** $4x^5 - 2x^3 + x - 9$ has degree **5** and leading coefficient **4**.

**SAT Tip:** Always arrange terms in descending order of exponent before combining. This keeps you organised and reduces sign errors.
      `
    },
    {
      id: 'sat-pa1-add-sub',
      type: 'text' as const,
      content: `
## Adding & Subtracting Polynomials

**Rule:** Combine *like terms* — terms with the same variable and exponent.

**Example 1 — Addition:**

$$(3x^2 + 5x - 2) + (x^2 - 3x + 7)$$

$$= (3+1)x^2 + (5-3)x + (-2+7) = 4x^2 + 2x + 5$$

**Example 2 — Subtraction:** Distribute the negative sign first!

$$(6x^3 - x + 4) - (2x^3 + 3x^2 - 5)$$

$$= 6x^3 - x + 4 - 2x^3 - 3x^2 + 5 = 4x^3 - 3x^2 - x + 9$$

**SAT Tip:** The most common subtraction mistake is forgetting to distribute the minus sign to *every* term inside the parentheses.
      `
    },
    {
      id: 'sat-pa1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Adding & Subtracting Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(2x^2 + 3x - 1) + (4x^2 - x + 5)$?',
            options: ['$6x^2 + 2x + 4$', '$6x^2 + 4x + 4$', '$6x^2 + 2x + 6$', '$8x^2 + 2x + 4$'],
            correctAnswer: 0,
            explanation: 'Combine like terms: $(2+4)x^2 + (3-1)x + (-1+5) = 6x^2 + 2x + 4$.'
          },
          {
            question: 'What is $(5x^3 + 2x - 3) - (3x^3 - x + 7)$?',
            options: ['$2x^3 + x - 10$', '$2x^3 + 3x - 10$', '$2x^3 + 3x + 4$', '$8x^3 + x - 10$'],
            correctAnswer: 1,
            explanation: 'Distribute the minus: $5x^3 + 2x - 3 - 3x^3 + x - 7 = 2x^3 + 3x - 10$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa1-multiply',
      type: 'text' as const,
      content: `
## Multiplying Polynomials

Use the **distributive property** (FOIL for two binomials) — multiply every term in the first polynomial by every term in the second.

**Example 3 — FOIL:**

$$(2x + 3)(x - 5)$$

$$= 2x \\cdot x + 2x \\cdot (-5) + 3 \\cdot x + 3 \\cdot (-5)$$

$$= 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$$

**Example 4 — Trinomial × Binomial:**

$$(x^2 + 2x - 1)(x + 3)$$

$$= x^3 + 3x^2 + 2x^2 + 6x - x - 3$$

$$= x^3 + 5x^2 + 5x - 3$$

**Special Products:**
- $(a+b)^2 = a^2 + 2ab + b^2$
- $(a-b)^2 = a^2 - 2ab + b^2$
- $(a+b)(a-b) = a^2 - b^2$
      `
    },
    {
      id: 'sat-pa1-input1',
      type: 'input-boxes' as const,
      content: `
**Polynomial Multiplication** 🧮

Give the coefficient requested for each product.

1) $(3x + 2)(x - 4)$ — What is the coefficient of $x$? 

2) $(x + 5)^2$ — What is the constant term?

3) $(2x - 1)(2x + 1)$ — What is the constant term?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-10', '25', '-1'],
        hint1: 'FOIL: $3x \\cdot (-4) + 2 \\cdot x = -12x + 2x$.',
        hint2: '$(x+5)^2 = x^2 + 10x + 25$. The constant is $5^2 = 25$.',
        hint3: 'This is a difference of squares: $(2x)^2 - 1^2 = 4x^2 - 1$.',
        explanation: '1) $-12x + 2x = -10x$; coefficient is $-10$. 2) $5^2 = 25$. 3) $(2x-1)(2x+1) = 4x^2 - 1$; constant is $-1$.'
      }
    },
    {
      id: 'sat-pa1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Polynomial Vocabulary** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The degree of $7x^4 - 3x^2 + x$ is …',
            options: ['2', '3', '4', '7']
          },
          {
            label: 'The leading coefficient of $-5x^3 + 2x^2 - x + 8$ is …',
            options: ['8', '2', '-5', '3']
          },
          {
            label: '$(a+b)(a-b)$ always equals …',
            options: ['$a^2 + b^2$', '$a^2 - b^2$', '$a^2 - 2ab + b^2$', '$a^2 + 2ab + b^2$']
          }
        ],
        correctAnswers: ['4', '-5', '$a^2 - b^2$'],
        hint1: 'The degree is the highest exponent in the polynomial.',
        hint2: 'The leading coefficient is the coefficient of the term with the highest exponent.',
        hint3: 'This is the difference-of-squares identity.',
        explanation: 'Degree = 4 (from $7x^4$). Leading coefficient = $-5$ (from $-5x^3$). $(a+b)(a-b) = a^2 - b^2$.'
      }
    },
    {
      id: 'sat-pa1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $p(x) = x^3 - 2x + 1$ and $q(x) = 2x^2 + x - 3$, what is the leading coefficient of $p(x) + q(x)$?',
            options: ['$1$', '$2$', '$3$', '$-2$'],
            correctAnswer: 0,
            explanation: '$p(x)+q(x) = x^3 + 2x^2 - x - 2$. The leading term is $x^3$ with coefficient $1$.'
          },
          {
            question: 'What is the degree of the product $(3x^2 + 1)(2x^3 - x)$?',
            options: ['$3$', '$5$', '$6$', '$4$'],
            correctAnswer: 1,
            explanation: 'The degree of a product equals the sum of the degrees: $2 + 3 = 5$.'
          }
        ]
      }
    }
  ]
};
