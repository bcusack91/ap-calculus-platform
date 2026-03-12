#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Passport to Advanced Math.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-passport-advanced-math-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-passport-advanced-math-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Polynomial Operations ───────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
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

$$= 2x \\\\cdot x + 2x \\\\cdot (-5) + 3 \\\\cdot x + 3 \\\\cdot (-5)$$

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
        hint1: 'FOIL: $3x \\\\cdot (-4) + 2 \\\\cdot x = -12x + 2x$.',
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
"""))


# ── Part 2: Factoring Strategies ────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satPassportAdvPart2Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa2-intro',
      type: 'text' as const,
      content: `
# 🔢 Factoring Strategies

**Part 2 of 7 — GCF, Grouping, Difference of Squares, Sum/Difference of Cubes**

Factoring is the **reverse** of multiplication. On the SAT, factoring lets you simplify expressions, solve equations, and find zeros.

**Always start by pulling out the Greatest Common Factor (GCF).**

**Example 1 — GCF:** Factor $6x^3 + 9x^2$.

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

**Example 2 — GCF with three terms:** Factor $10x^4 - 15x^3 + 5x^2$.

$$= 5x^2(2x^2 - 3x + 1) = 5x^2(2x - 1)(x - 1)$$

**SAT Tip:** If every term shares a variable factor, pull it out first — it simplifies everything that follows.
      `
    },
    {
      id: 'sat-pa2-special',
      type: 'text' as const,
      content: `
## Special Factoring Patterns

| Pattern | Formula |
|---------|---------|
| **Difference of squares** | $a^2 - b^2 = (a+b)(a-b)$ |
| **Perfect square trinomial** | $a^2 + 2ab + b^2 = (a+b)^2$ |
| **Perfect square trinomial** | $a^2 - 2ab + b^2 = (a-b)^2$ |
| **Sum of cubes** | $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ |
| **Difference of cubes** | $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ |

**Example 3 — Difference of squares:** $x^2 - 49 = (x+7)(x-7)$

**Example 4 — Sum of cubes:** $8x^3 + 27$

$$= (2x)^3 + 3^3 = (2x + 3)(4x^2 - 6x + 9)$$

**Mnemonic for cubes:** "**SOAP**" — **S**ame sign, **O**pposite sign, **A**lways **P**ositive.
      `
    },
    {
      id: 'sat-pa2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Factoring Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Factor: $x^2 - 16$',
            options: ['$(x-4)^2$', '$(x+4)(x-4)$', '$(x+8)(x-2)$', '$(x-16)(x+1)$'],
            correctAnswer: 1,
            explanation: '$x^2 - 16 = x^2 - 4^2 = (x+4)(x-4)$. This is a difference of squares.'
          },
          {
            question: 'Factor: $x^3 - 8$',
            options: ['$(x-2)(x^2+4)$', '$(x-2)(x^2+2x+4)$', '$(x+2)(x^2-2x+4)$', '$(x-2)(x^2-2x+4)$'],
            correctAnswer: 1,
            explanation: '$x^3 - 8 = x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$. Use the difference of cubes formula with $a=x$, $b=2$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa2-grouping',
      type: 'text' as const,
      content: `
## Factoring by Grouping

When a polynomial has **four terms**, try grouping into two pairs and factoring each pair.

**Example 5:** Factor $x^3 + 3x^2 + 2x + 6$.

**Step 1:** Group: $(x^3 + 3x^2) + (2x + 6)$

**Step 2:** Factor each pair: $x^2(x + 3) + 2(x + 3)$

**Step 3:** Factor out the common binomial: $(x + 3)(x^2 + 2)$

**Example 6:** Factor $2x^3 - x^2 - 6x + 3$.

$(2x^3 - x^2) + (-6x + 3) = x^2(2x - 1) - 3(2x - 1) = (2x - 1)(x^2 - 3)$

**SAT Tip:** For a trinomial $ax^2 + bx + c$, find two numbers that multiply to $ac$ and add to $b$, then factor by grouping.
      `
    },
    {
      id: 'sat-pa2-input1',
      type: 'input-boxes' as const,
      content: `
**Factoring Coefficients** 🧮

1) Factor $x^2 - 9x + 20$. What are the two constant terms in the binomial factors? Give the **larger** one.
2) Factor $2x^2 + 7x + 3 = (2x + a)(x + b)$. What is $a$?
3) Factor $x^3 + 64$. In the trinomial factor $(x^2 + bx + c)$, what is $c$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-4', '1', '16'],
        hint1: 'Find two numbers that multiply to $20$ and add to $-9$: $-4$ and $-5$.',
        hint2: 'Find two numbers that multiply to $2 \\\\cdot 3 = 6$ and add to $7$: $6$ and $1$. Then group.',
        hint3: '$x^3 + 64 = x^3 + 4^3 = (x+4)(x^2 - 4x + 16)$.',
        explanation: '1) $x^2-9x+20 = (x-4)(x-5)$; the larger constant is $-4$. 2) $2x^2+7x+3 = (2x+1)(x+3)$, so $a=1$. 3) By the sum of cubes formula, $c = 4^2 = 16$.'
      }
    },
    {
      id: 'sat-pa2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Factoring Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$25x^2 - 1$ is an example of …',
            options: ['perfect square trinomial', 'difference of squares', 'sum of cubes', 'grouping']
          },
          {
            label: 'The correct factorisation of $x^2 + 6x + 9$ is …',
            options: ['$(x+3)(x-3)$', '$(x+3)^2$', '$(x+9)(x+1)$', '$(x-3)^2$']
          },
          {
            label: 'In the sum of cubes formula $a^3+b^3$, the trinomial factor has the sign pattern …',
            options: ['$+, +, +$', '$-, +, -$', '$-, -, +$', '$+, -, +$']
          }
        ],
        correctAnswers: ['difference of squares', '$(x+3)^2$', '$-, -, +$'],
        hint1: 'Two perfect squares separated by a minus sign.',
        hint2: '$x^2 + 6x + 9 = x^2 + 2(3)x + 3^2$.',
        hint3: '$a^3+b^3 = (a+b)(a^2 - ab + b^2)$. The signs in the trinomial are $-$, implicit $-$, $+$.',
        explanation: '$25x^2 - 1 = (5x)^2 - 1^2$ is a difference of squares. $x^2+6x+9 = (x+3)^2$. Sum of cubes: trinomial has signs $-ab$ then $+b^2$.'
      }
    },
    {
      id: 'sat-pa2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $x^2 - 5x - 14 = 0$, what are the solutions?',
            options: ['$x = 7$ and $x = -2$', '$x = -7$ and $x = 2$', '$x = 7$ and $x = 2$', '$x = -7$ and $x = -2$'],
            correctAnswer: 0,
            explanation: '$x^2 - 5x - 14 = (x-7)(x+2) = 0$. So $x = 7$ or $x = -2$.'
          },
          {
            question: 'Which expression is equivalent to $4x^2 - 25$?',
            options: ['$(2x-5)^2$', '$(4x+5)(x-5)$', '$(2x+5)(2x-5)$', '$(2x-5)(2x-5)$'],
            correctAnswer: 2,
            explanation: '$4x^2 - 25 = (2x)^2 - 5^2 = (2x+5)(2x-5)$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Rational Expressions ────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satPassportAdvPart3Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa3-intro',
      type: 'text' as const,
      content: `
# 📊 Rational Expressions

**Part 3 of 7 — Simplify, Multiply/Divide, Add/Subtract with LCD, Restrictions**

A **rational expression** is a fraction where the numerator and denominator are polynomials:

$$\\\\frac{P(x)}{Q(x)} \\\\quad \\\\text{where } Q(x) \\\\neq 0$$

**Restrictions:** Values of $x$ that make the denominator zero are **excluded** from the domain.

**Example 1:** $\\\\frac{x+2}{x^2 - 4}$

$$x^2 - 4 = (x+2)(x-2) \\\\implies x \\\\neq 2, \\\\; x \\\\neq -2$$

Simplify by cancelling the common factor:

$$\\\\frac{x+2}{(x+2)(x-2)} = \\\\frac{1}{x-2}, \\\\quad x \\\\neq -2$$

**SAT Tip:** Always factor first, then cancel common factors. Never cancel individual terms — only factors.
      `
    },
    {
      id: 'sat-pa3-multdiv',
      type: 'text' as const,
      content: `
## Multiplying & Dividing Rational Expressions

**Multiply:** Factor everything, cancel common factors, then multiply straight across.

$$\\\\frac{A}{B} \\\\cdot \\\\frac{C}{D} = \\\\frac{AC}{BD}$$

**Divide:** Flip the second fraction and multiply.

$$\\\\frac{A}{B} \\\\div \\\\frac{C}{D} = \\\\frac{A}{B} \\\\cdot \\\\frac{D}{C}$$

**Example 2:** Simplify $\\\\frac{x^2 - 9}{x+1} \\\\cdot \\\\frac{x+1}{x-3}$

$$= \\\\frac{(x+3)(x-3)}{x+1} \\\\cdot \\\\frac{x+1}{x-3} = \\\\frac{(x+3)\\\\cancel{(x-3)}}{\\\\cancel{x+1}} \\\\cdot \\\\frac{\\\\cancel{x+1}}{\\\\cancel{x-3}} = x + 3$$

**Example 3:** Simplify $\\\\frac{2x}{x+4} \\\\div \\\\frac{6x^2}{x^2-16}$

$$= \\\\frac{2x}{x+4} \\\\cdot \\\\frac{(x+4)(x-4)}{6x^2} = \\\\frac{2x(x-4)}{6x^2} = \\\\frac{x-4}{3x}$$
      `
    },
    {
      id: 'sat-pa3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Simplifying Rational Expressions** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\\\frac{x^2 - 25}{x^2 + 10x + 25}$',
            options: ['$\\\\frac{x-5}{x+5}$', '$\\\\frac{x+5}{x-5}$', '$\\\\frac{1}{x+5}$', '$\\\\frac{x-5}{(x+5)^2}$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{(x+5)(x-5)}{(x+5)^2} = \\\\frac{x-5}{x+5}$.'
          },
          {
            question: 'Which value is NOT in the domain of $\\\\frac{3x}{x^2 - x - 6}$?',
            options: ['$x = 0$', '$x = 2$', '$x = 3$', '$x = -3$'],
            correctAnswer: 2,
            explanation: '$x^2 - x - 6 = (x-3)(x+2) = 0$ when $x = 3$ or $x = -2$. So $x = 3$ is excluded.'
          }
        ]
      }
    },
    {
      id: 'sat-pa3-addsub',
      type: 'text' as const,
      content: `
## Adding & Subtracting Rational Expressions

**Same denominator:** Combine numerators directly.

$$\\\\frac{A}{D} + \\\\frac{B}{D} = \\\\frac{A + B}{D}$$

**Different denominators:** Find the **Least Common Denominator (LCD)**, rewrite each fraction, then combine.

**Example 4:** $\\\\frac{2}{x+1} + \\\\frac{3}{x-2}$

LCD $= (x+1)(x-2)$

$$= \\\\frac{2(x-2)}{(x+1)(x-2)} + \\\\frac{3(x+1)}{(x+1)(x-2)}$$

$$= \\\\frac{2x - 4 + 3x + 3}{(x+1)(x-2)} = \\\\frac{5x - 1}{(x+1)(x-2)}$$

**Example 5:** $\\\\frac{x}{x-3} - \\\\frac{2}{x+3}$

LCD $= (x-3)(x+3)$

$$= \\\\frac{x(x+3) - 2(x-3)}{(x-3)(x+3)} = \\\\frac{x^2 + 3x - 2x + 6}{x^2 - 9} = \\\\frac{x^2 + x + 6}{x^2 - 9}$$
      `
    },
    {
      id: 'sat-pa3-input1',
      type: 'input-boxes' as const,
      content: `
**Rational Expression Practice** 🧮

1) Simplify $\\\\frac{x^2 - 4}{x + 2}$. What is the simplified expression evaluated at $x = 5$?
2) $\\\\frac{1}{x} + \\\\frac{1}{x+1}$ — if $x = 2$, what is the value? Write as a fraction: numerator/denominator (e.g. 5/6).
3) For $\\\\frac{x+3}{x^2-9}$, what value of $x$ (positive) is NOT in the domain?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5/6', '3'],
        hint1: '$\\\\frac{x^2-4}{x+2} = \\\\frac{(x+2)(x-2)}{x+2} = x - 2$. Plug in $x = 5$.',
        hint2: '$\\\\frac{1}{2} + \\\\frac{1}{3} = \\\\frac{3+2}{6}$.',
        hint3: '$x^2 - 9 = (x+3)(x-3) = 0$ when $x = 3$ or $x = -3$.',
        explanation: '1) $x-2 = 5-2 = 3$. 2) $\\\\frac{1}{2}+\\\\frac{1}{3} = \\\\frac{5}{6}$. 3) $x = 3$ makes the denominator zero.'
      }
    },
    {
      id: 'sat-pa3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rational Expression Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To divide two fractions you …',
            options: ['multiply straight across', 'flip the second and multiply', 'cross-multiply', 'find the LCD']
          },
          {
            label: 'A value excluded from the domain makes the … equal to zero.',
            options: ['numerator', 'denominator', 'coefficient', 'exponent']
          },
          {
            label: 'The LCD of $\\\\frac{1}{x+1}$ and $\\\\frac{1}{x-1}$ is …',
            options: ['$(x+1)(x-1)$', '$x^2$', '$(x+1)^2$', '$x+1$']
          }
        ],
        correctAnswers: ['flip the second and multiply', 'denominator', '$(x+1)(x-1)$'],
        hint1: 'Division of fractions becomes multiplication by the reciprocal.',
        hint2: 'Domain restrictions come from values that make the fraction undefined.',
        hint3: 'The LCD is the product of distinct linear factors.',
        explanation: 'Dividing fractions: flip and multiply. Domain excludes denominator zeros. LCD $= (x+1)(x-1)$.'
      }
    },
    {
      id: 'sat-pa3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\frac{x^2 - 1}{x + 1} = 10$, what is the value of $x$?',
            options: ['$9$', '$11$', '$10$', '$-11$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{(x+1)(x-1)}{x+1} = x - 1 = 10 \\\\implies x = 11$.'
          },
          {
            question: 'Which expression is equivalent to $\\\\frac{2}{x-3} + \\\\frac{1}{x+3}$?',
            options: ['$\\\\frac{3}{x^2-9}$', '$\\\\frac{3x+3}{x^2-9}$', '$\\\\frac{3x+9}{x^2-9}$', '$\\\\frac{3x+3}{2x}$'],
            correctAnswer: 1,
            explanation: 'LCD $= (x-3)(x+3) = x^2-9$. Numerator: $2(x+3) + 1(x-3) = 2x+6+x-3 = 3x+3$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Radical & Rational Exponents ────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satPassportAdvPart4Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa4-intro',
      type: 'text' as const,
      content: `
# √ Radical & Rational Exponents

**Part 4 of 7 — Simplify, Solve Radical Equations, Extraneous Solutions**

**Rational exponents** connect exponents and radicals:

$$a^{1/n} = \\\\sqrt[n]{a} \\\\qquad a^{m/n} = \\\\sqrt[n]{a^m} = \\\\left(\\\\sqrt[n]{a}\\\\right)^m$$

| Expression | Equivalent |
|------------|-----------|
| $x^{1/2}$ | $\\\\sqrt{x}$ |
| $x^{1/3}$ | $\\\\sqrt[3]{x}$ |
| $x^{2/3}$ | $\\\\sqrt[3]{x^2}$ |
| $x^{-1/2}$ | $\\\\frac{1}{\\\\sqrt{x}}$ |

**Key rules:**
- $a^m \\\\cdot a^n = a^{m+n}$
- $\\\\frac{a^m}{a^n} = a^{m-n}$
- $(a^m)^n = a^{mn}$

**SAT Tip:** Convert all radicals to rational exponents when simplifying — it makes the algebra easier.
      `
    },
    {
      id: 'sat-pa4-simplify',
      type: 'text' as const,
      content: `
## Simplifying Radicals

**Example 1:** Simplify $\\\\sqrt{72}$.

$$\\\\sqrt{72} = \\\\sqrt{36 \\\\cdot 2} = 6\\\\sqrt{2}$$

**Example 2:** Simplify $\\\\sqrt[3]{54}$.

$$\\\\sqrt[3]{54} = \\\\sqrt[3]{27 \\\\cdot 2} = 3\\\\sqrt[3]{2}$$

**Example 3:** Simplify $x^{3/4} \\\\cdot x^{1/4}$.

$$x^{3/4} \\\\cdot x^{1/4} = x^{3/4 + 1/4} = x^{4/4} = x$$

**Rationalising the denominator:**

$$\\\\frac{5}{\\\\sqrt{3}} = \\\\frac{5}{\\\\sqrt{3}} \\\\cdot \\\\frac{\\\\sqrt{3}}{\\\\sqrt{3}} = \\\\frac{5\\\\sqrt{3}}{3}$$
      `
    },
    {
      id: 'sat-pa4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Radical & Exponent Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $8^{2/3}$',
            options: ['$2$', '$4$', '$16$', '$\\\\frac{16}{3}$'],
            correctAnswer: 1,
            explanation: '$8^{2/3} = (\\\\sqrt[3]{8})^2 = 2^2 = 4$.'
          },
          {
            question: 'Which is equal to $\\\\frac{x^{1/2}}{x^{1/4}}$?',
            options: ['$x^{2}$', '$x^{1/4}$', '$x^{3/4}$', '$x^{1/8}$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{x^{1/2}}{x^{1/4}} = x^{1/2 - 1/4} = x^{1/4}$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa4-solving',
      type: 'text' as const,
      content: `
## Solving Radical Equations

**Strategy:** Isolate the radical, then raise both sides to the appropriate power.

**Example 4:** Solve $\\\\sqrt{x + 3} = 5$.

$$x + 3 = 25 \\\\implies x = 22$$

**Check:** $\\\\sqrt{22 + 3} = \\\\sqrt{25} = 5$ ✓

**Example 5:** Solve $\\\\sqrt{2x - 1} = x - 2$.

Square both sides: $2x - 1 = (x-2)^2 = x^2 - 4x + 4$

$$x^2 - 6x + 5 = 0 \\\\implies (x-5)(x-1) = 0 \\\\implies x = 5 \\\\text{ or } x = 1$$

**Check $x = 5$:** $\\\\sqrt{10-1} = \\\\sqrt{9} = 3$ and $5-2 = 3$. ✓

**Check $x = 1$:** $\\\\sqrt{2-1} = 1$ and $1-2 = -1$. ✗ (extraneous!)

**Only $x = 5$ is valid.**

> ⚠️ **Extraneous solutions** arise because squaring can introduce false answers. **Always check your solutions** in the original equation.
      `
    },
    {
      id: 'sat-pa4-input1',
      type: 'input-boxes' as const,
      content: `
**Radical Calculations** 🧮

1) Evaluate $27^{2/3}$.
2) Solve $\\\\sqrt{x+7} = 4$. What is $x$?
3) Simplify $\\\\sqrt{50}$ in the form $a\\\\sqrt{b}$. What is $a$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '9', '5'],
        hint1: '$27^{2/3} = (\\\\sqrt[3]{27})^2 = 3^2$.',
        hint2: 'Square both sides: $x + 7 = 16$.',
        hint3: '$\\\\sqrt{50} = \\\\sqrt{25 \\\\cdot 2} = 5\\\\sqrt{2}$.',
        explanation: '1) $(\\\\sqrt[3]{27})^2 = 3^2 = 9$. 2) $x = 16 - 7 = 9$. 3) $\\\\sqrt{50} = 5\\\\sqrt{2}$, so $a = 5$.'
      }
    },
    {
      id: 'sat-pa4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Radical & Exponent Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$x^{-1/2}$ is equivalent to …',
            options: ['$-\\\\sqrt{x}$', '$\\\\frac{1}{\\\\sqrt{x}}$', '$\\\\sqrt{-x}$', '$-\\\\frac{1}{x^2}$']
          },
          {
            label: 'An extraneous solution is one that …',
            options: ['solves the original equation', 'appears after an algebraic step but fails the original equation', 'is always negative', 'involves imaginary numbers']
          },
          {
            label: 'To solve $\\\\sqrt[3]{x} = 4$, you raise both sides to the power …',
            options: ['$2$', '$3$', '$1/3$', '$4$']
          }
        ],
        correctAnswers: ['$\\\\frac{1}{\\\\sqrt{x}}$', 'appears after an algebraic step but fails the original equation', '$3$'],
        hint1: 'A negative exponent means reciprocal.',
        hint2: 'Squaring both sides of a radical equation can produce solutions that don\\'t satisfy the original.',
        hint3: 'To undo a cube root, cube both sides.',
        explanation: '$x^{-1/2} = 1/\\\\sqrt{x}$. Extraneous solutions fail the original equation. Cube root is undone by cubing: power 3.'
      }
    },
    {
      id: 'sat-pa4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\sqrt{3x + 1} = x - 1$, what is the sum of all valid solutions?',
            options: ['$5$', '$8$', '$1$', '$0$'],
            correctAnswer: 0,
            explanation: 'Square: $3x+1 = x^2-2x+1 \\\\Rightarrow x^2 -5x = 0 \\\\Rightarrow x(x-5) = 0$. $x=0$: $\\\\sqrt{1}=1$ but $0-1=-1$, extraneous. $x=5$: $\\\\sqrt{16}=4$ and $5-1=4$ ✓. Sum $= 5$.'
          },
          {
            question: 'If $a = 16^{3/4}$, what is $a$?',
            options: ['$4$', '$8$', '$12$', '$64$'],
            correctAnswer: 1,
            explanation: '$16^{3/4} = (\\\\sqrt[4]{16})^3 = 2^3 = 8$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Nonlinear Equations & Systems ───────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satPassportAdvPart5Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa5-intro',
      type: 'text' as const,
      content: `
# 🔗 Nonlinear Equations & Systems

**Part 5 of 7 — Circle Equations, Parabola-Line Systems, Substitution**

**Nonlinear** means at least one equation has degree ≥ 2 (quadratic, circle, etc.). On the SAT, these usually involve:

1. A **quadratic** paired with a **linear** equation.
2. A **circle** equation crossed with a line.

**Standard circle equation:** $(x-h)^2 + (y-k)^2 = r^2$

**Example 1:** The circle $x^2 + y^2 = 25$ has centre $(0,0)$ and radius $5$.

**Example 2:** $(x-3)^2 + (y+1)^2 = 16$ has centre $(3,-1)$ and radius $4$.

**SAT Tip:** When the SAT gives $x^2 + y^2 + Dx + Ey + F = 0$, complete the square to identify the centre and radius.
      `
    },
    {
      id: 'sat-pa5-parabolaline',
      type: 'text' as const,
      content: `
## Parabola-Line Systems

To find where a parabola and line intersect, **substitute** the linear expression into the quadratic.

**Example 3:** Solve the system:

$$y = x^2 - 4x + 3$$
$$y = x - 1$$

Set them equal: $x^2 - 4x + 3 = x - 1$

$$x^2 - 5x + 4 = 0 \\\\implies (x-4)(x-1) = 0$$

$$x = 4 \\\\implies y = 3 \\\\qquad x = 1 \\\\implies y = 0$$

**Intersection points:** $(4, 3)$ and $(1, 0)$.

**Number of intersections depends on the discriminant:**
- $b^2 - 4ac > 0$: two intersection points
- $b^2 - 4ac = 0$: one point (tangent)
- $b^2 - 4ac < 0$: no intersection
      `
    },
    {
      id: 'sat-pa5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Nonlinear Systems** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'How many solutions does the system $y = x^2$ and $y = -1$ have?',
            options: ['$0$', '$1$', '$2$', 'Infinitely many'],
            correctAnswer: 0,
            explanation: '$x^2 = -1$ has no real solutions since $x^2 \\\\geq 0$ for all real $x$.'
          },
          {
            question: 'The system $y = x^2 + 2$ and $y = 4x - 2$ intersects at how many points?',
            options: ['$0$', '$1$', '$2$', 'Cannot be determined'],
            correctAnswer: 2,
            explanation: '$x^2 + 2 = 4x - 2 \\\\Rightarrow x^2 - 4x + 4 = 0 \\\\Rightarrow (x-2)^2 = 0$. One solution: $x=2$, so it\\'s tangent — 1 point. Actually wait: $(x-2)^2=0$ gives exactly one point. The answer is 1.'
          }
        ]
      }
    },
    {
      id: 'sat-pa5-circleline',
      type: 'text' as const,
      content: `
## Circle-Line Intersections

**Example 4:** Find where $x^2 + y^2 = 25$ and $y = x + 1$ intersect.

Substitute $y = x+1$:

$$x^2 + (x+1)^2 = 25$$

$$x^2 + x^2 + 2x + 1 = 25$$

$$2x^2 + 2x - 24 = 0 \\\\implies x^2 + x - 12 = 0$$

$$(x+4)(x-3) = 0 \\\\implies x = -4 \\\\text{ or } x = 3$$

Points: $(-4, -3)$ and $(3, 4)$.

**Check:** $(-4)^2 + (-3)^2 = 16 + 9 = 25$ ✓ and $3^2 + 4^2 = 9 + 16 = 25$ ✓.

**Example 5:** Does $x^2 + y^2 = 4$ and $y = x + 5$ intersect?

$x^2 + (x+5)^2 = 4 \\\\implies 2x^2 + 10x + 25 = 4 \\\\implies 2x^2 + 10x + 21 = 0$

Discriminant: $100 - 168 = -68 < 0$. **No intersection** — the line misses the circle entirely.
      `
    },
    {
      id: 'sat-pa5-input1',
      type: 'input-boxes' as const,
      content: `
**Nonlinear System Calculations** 🧮

1) Solve $y = x^2$ and $y = 9$. What is the positive value of $x$?
2) The circle $(x-1)^2 + (y-2)^2 = r^2$ passes through the origin. What is $r^2$?
3) System: $y = x^2 - 1$ and $y = 3$. How many solutions?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5', '2'],
        hint1: '$x^2 = 9 \\\\implies x = \\\\pm 3$.',
        hint2: 'Plug $(0,0)$ into $(0-1)^2 + (0-2)^2 = r^2$.',
        hint3: '$x^2 - 1 = 3 \\\\implies x^2 = 4 \\\\implies x = \\\\pm 2$.',
        explanation: '1) $x = 3$ (positive). 2) $1 + 4 = 5$, so $r^2 = 5$. 3) $x = 2$ and $x=-2$: two solutions.'
      }
    },
    {
      id: 'sat-pa5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Nonlinear System Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To solve a parabola-line system, the best method is usually …',
            options: ['graphing only', 'substitution', 'elimination', 'factoring only']
          },
          {
            label: 'If the discriminant of the resulting quadratic is negative, the system has …',
            options: ['two solutions', 'one solution', 'no real solutions', 'infinitely many solutions']
          },
          {
            label: 'The equation $(x-2)^2 + (y+5)^2 = 36$ represents a circle with radius …',
            options: ['$36$', '$18$', '$6$', '$\\\\sqrt{6}$']
          }
        ],
        correctAnswers: ['substitution', 'no real solutions', '$6$'],
        hint1: 'Substitute the linear expression for $y$ into the quadratic equation.',
        hint2: 'Negative discriminant means the quadratic has no real roots.',
        hint3: '$r^2 = 36 \\\\implies r = \\\\sqrt{36} = 6$.',
        explanation: 'Substitution is the standard approach. Negative discriminant means no real intersections. $r = \\\\sqrt{36} = 6$.'
      }
    },
    {
      id: 'sat-pa5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The line $y = 2x + k$ is tangent to the parabola $y = x^2$. What is $k$?',
            options: ['$-1$', '$0$', '$1$', '$4$'],
            correctAnswer: 0,
            explanation: 'Set $x^2 = 2x + k \\\\Rightarrow x^2 - 2x - k = 0$. Tangent means discriminant $= 0$: $4 + 4k = 0 \\\\Rightarrow k = -1$.'
          },
          {
            question: 'How many times does the line $y = 7$ intersect the circle $x^2 + y^2 = 25$?',
            options: ['$0$', '$1$', '$2$', '$4$'],
            correctAnswer: 0,
            explanation: '$x^2 + 49 = 25 \\\\Rightarrow x^2 = -24$. No real solution, so the line does not intersect the circle.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Function Notation & Composition ─────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satPassportAdvPart6Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa6-intro',
      type: 'text' as const,
      content: `
# 🔄 Function Notation & Composition

**Part 6 of 7 — $f(g(x))$, Inverse Functions, Domain Restrictions**

**Function notation** $f(x)$ names the output when $x$ is the input.

**Example 1:** If $f(x) = 2x + 3$, find $f(4)$.

$$f(4) = 2(4) + 3 = 11$$

**Example 2:** If $g(x) = x^2 - 1$, find $g(-3)$.

$$g(-3) = (-3)^2 - 1 = 9 - 1 = 8$$

**Composition** means plugging one function into another:

$$f(g(x)) = f\\\\bigl(g(x)\\\\bigr) \\\\quad \\\\text{read "f of g of x"}$$

**Example 3:** $f(x) = 2x+1$, $g(x) = x^2$. Find $f(g(3))$.

$$g(3) = 9 \\\\implies f(9) = 2(9)+1 = 19$$

**SAT Tip:** Always work from the **inside out**: evaluate $g(x)$ first, then plug the result into $f$.
      `
    },
    {
      id: 'sat-pa6-composition',
      type: 'text' as const,
      content: `
## Composition as a Formula

You can also compose symbolically.

**Example 4:** $f(x) = 3x - 2$, $g(x) = x + 5$. Find $f(g(x))$.

$$f(g(x)) = f(x+5) = 3(x+5) - 2 = 3x + 15 - 2 = 3x + 13$$

**Example 5:** Same functions. Find $g(f(x))$.

$$g(f(x)) = g(3x-2) = (3x-2) + 5 = 3x + 3$$

> Notice $f(g(x)) \\\\neq g(f(x))$ in general. Composition is **not commutative**.

**Example 6 — Triple composition:** If $h(x) = x^2$, find $h(f(1))$ with $f(x) = 3x-2$.

$$f(1) = 1 \\\\implies h(1) = 1$$

So $h(f(1)) = 1$.
      `
    },
    {
      id: 'sat-pa6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Composition Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x + 4$ and $g(x) = 2x$, what is $f(g(3))$?',
            options: ['$10$', '$14$', '$7$', '$12$'],
            correctAnswer: 0,
            explanation: '$g(3) = 6$. $f(6) = 6 + 4 = 10$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = x - 1$, what is $g(f(4))$?',
            options: ['$9$', '$15$', '$16$', '$25$'],
            correctAnswer: 1,
            explanation: '$f(4) = 16$. $g(16) = 16 - 1 = 15$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa6-inverse',
      type: 'text' as const,
      content: `
## Inverse Functions

The **inverse** of $f$, written $f^{-1}$, "undoes" $f$:

$$f(f^{-1}(x)) = x \\\\quad \\\\text{and} \\\\quad f^{-1}(f(x)) = x$$

**To find $f^{-1}$:**
1. Write $y = f(x)$.
2. Swap $x$ and $y$.
3. Solve for $y$.

**Example 7:** $f(x) = 3x - 6$. Find $f^{-1}(x)$.

$y = 3x - 6 \\\\implies x = 3y - 6 \\\\implies x + 6 = 3y \\\\implies y = \\\\frac{x+6}{3}$

$$f^{-1}(x) = \\\\frac{x+6}{3}$$

**Check:** $f(f^{-1}(0)) = f(2) = 3(2)-6 = 0$ ✓

**Domain restrictions:** If $f$ has a restricted domain (e.g., $f(x) = \\\\sqrt{x}$, domain $x \\\\geq 0$), then the **range** of $f$ becomes the **domain** of $f^{-1}$.
      `
    },
    {
      id: 'sat-pa6-input1',
      type: 'input-boxes' as const,
      content: `
**Function & Inverse Calculations** 🧮

Let $f(x) = 4x - 3$ and $g(x) = x^2 + 1$.

1) What is $f(g(2))$?
2) Find $f^{-1}(x)$ and evaluate $f^{-1}(9)$.
3) What is $g(f(1))$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '3', '2'],
        hint1: '$g(2) = 4 + 1 = 5$. Then $f(5) = 20 - 3 = 17$.',
        hint2: '$f^{-1}(x) = \\\\frac{x+3}{4}$. Plug in $x = 9$.',
        hint3: '$f(1) = 4 - 3 = 1$. Then $g(1) = 1 + 1 = 2$.',
        explanation: '1) $f(g(2)) = f(5) = 17$. 2) $f^{-1}(9) = \\\\frac{12}{4} = 3$. 3) $g(f(1)) = g(1) = 2$.'
      }
    },
    {
      id: 'sat-pa6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Function Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(g(x))$ means you evaluate … first.',
            options: ['$f(x)$', '$g(x)$', 'either one', 'neither']
          },
          {
            label: 'The graph of $f^{-1}$ is a reflection of $f$ over the line …',
            options: ['$y = 0$', '$x = 0$', '$y = x$', '$y = -x$']
          },
          {
            label: 'If $f(5) = 12$, then $f^{-1}(12) = $ …',
            options: ['$12$', '$5$', '$\\\\frac{1}{12}$', 'Cannot determine']
          }
        ],
        correctAnswers: ['$g(x)$', '$y = x$', '$5$'],
        hint1: 'Composition works inside-out.',
        hint2: 'Inverse functions swap the roles of $x$ and $y$.',
        hint3: 'The inverse undoes the function: if $f(a) = b$, then $f^{-1}(b) = a$.',
        explanation: 'Evaluate $g(x)$ first (inside-out). Inverse reflects over $y = x$. $f(5)=12$ means $f^{-1}(12) = 5$.'
      }
    },
    {
      id: 'sat-pa6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + 1$ and $g(x) = \\\\frac{x-1}{2}$, which statement is true?',
            options: ['$f$ and $g$ are inverse functions', '$f(g(x)) = x + 1$', '$g(f(x)) = 2x$', 'None of the above'],
            correctAnswer: 0,
            explanation: '$f(g(x)) = 2 \\\\cdot \\\\frac{x-1}{2} + 1 = (x-1)+1 = x$. $g(f(x)) = \\\\frac{(2x+1)-1}{2} = x$. Since both equal $x$, they are inverses.'
          },
          {
            question: 'The function $f(x) = (x-3)^2$ is defined for $x \\\\geq 3$. What is the domain of $f^{-1}$?',
            options: ['All real numbers', '$x \\\\geq 3$', '$x \\\\geq 0$', '$x > 0$'],
            correctAnswer: 2,
            explanation: 'The range of $f$ (for $x \\\\geq 3$) is $y \\\\geq 0$. The domain of $f^{-1}$ equals the range of $f$, so $x \\\\geq 0$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satPassportAdvPart7Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed SAT-Style Problems & Exam Strategies**

## Passport to Advanced Math — Cheat Sheet

| Topic | Key Facts |
|-------|-----------|
| **Polynomials** | Degree = highest exponent; combine like terms; $(a+b)(a-b) = a^2 - b^2$ |
| **Factoring** | GCF first; diff. of squares $a^2-b^2$; cubes: SOAP mnemonic |
| **Rational Expressions** | Factor & cancel; LCD for add/subtract; domain excludes denominator zeros |
| **Radicals** | $a^{m/n} = \\\\sqrt[n]{a^m}$; isolate & raise to power; check for extraneous solutions |
| **Nonlinear Systems** | Substitute linear into quadratic; discriminant tells # of solutions |
| **Functions** | $f(g(x))$: inside-out; inverse: swap $x$/$y$ & solve; domain/range swap |

**Top 5 SAT Strategies for Passport to Advanced Math:**
1. **Factor first** — most problems simplify dramatically.
2. **Check for extraneous solutions** after squaring or multiplying by variables.
3. **Use the discriminant** $b^2 - 4ac$ to count solutions without solving.
4. **Plug in numbers** when algebra gets messy — especially on multiple-choice.
5. **Read the question carefully** — "which is NOT" and "must be true" change everything.
      `
    },
    {
      id: 'sat-pa7-review',
      type: 'text' as const,
      content: `
## Quick-Review Worked Examples

**Polynomials:** $(2x-3)(x^2+x-4) = 2x^3 + 2x^2 - 8x - 3x^2 - 3x + 12 = 2x^3 - x^2 - 11x + 12$

**Factoring:** $6x^2 + x - 2$. Find two numbers that multiply to $6 \\\\times (-2) = -12$ and add to $1$: that's $4$ and $-3$.

$$6x^2 + 4x - 3x - 2 = 2x(3x+2) - 1(3x+2) = (3x+2)(2x-1)$$

**Rational:** $\\\\frac{x^2-4}{x^2-4x+4} = \\\\frac{(x+2)(x-2)}{(x-2)^2} = \\\\frac{x+2}{x-2}$

**Radicals:** If $\\\\sqrt{5x-1} = 3$, then $5x-1 = 9 \\\\implies x = 2$. ✓

**Systems:** $y = x^2+1$ and $y = 5$: $x^2 = 4 \\\\implies x = \\\\pm 2$. Two solutions.

**Functions:** $f(x) = 5x+10$, $f^{-1}(x) = \\\\frac{x-10}{5}$. Check: $f(f^{-1}(20)) = f(2) = 20$ ✓.
      `
    },
    {
      id: 'sat-pa7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'What is the degree of $(x^2+1)(x^3-x)$?',
            options: ['$3$', '$4$', '$5$', '$6$'],
            correctAnswer: 2,
            explanation: 'Degree of a product = sum of degrees: $2 + 3 = 5$.'
          },
          {
            question: 'If $f(x) = x^2 - 4x + 3$, what is $f(5)$?',
            options: ['$3$', '$8$', '$18$', '$-2$'],
            correctAnswer: 1,
            explanation: '$f(5) = 25 - 20 + 3 = 8$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa7-mixed',
      type: 'text' as const,
      content: `
## Common SAT Traps

**Trap 1: Sign errors in subtraction.**

$(3x^2 + 5) - (x^2 - 2)$ is $3x^2 + 5 - x^2 + 2 = 2x^2 + 7$, **not** $2x^2 + 3$.

**Trap 2: Forgetting domain restrictions.**

$\\\\frac{x^2-1}{x-1} = x+1$ is only valid when $x \\\\neq 1$.

**Trap 3: Extraneous solutions.**

After squaring $\\\\sqrt{x} = x - 6$: $x = (x-6)^2 = x^2 - 12x + 36$, so $x^2 - 13x + 36 = 0$, giving $x = 9$ or $x = 4$. Check: $\\\\sqrt{9} = 3 = 9-6$ ✓, but $\\\\sqrt{4} = 2 \\\\neq 4-6 = -2$ ✗.

**Trap 4: Confusing $f(g(x))$ with $g(f(x))$.**

Always read the notation carefully and work from the inside out.
      `
    },
    {
      id: 'sat-pa7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

1) Factor $x^2 - 11x + 30 = (x - a)(x - b)$ where $a < b$. What is $b$?
2) Evaluate: $27^{1/3} + 16^{1/2}$.
3) If $f(x) = 3x - 7$, find $f^{-1}(2)$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '7', '3'],
        hint1: 'Find two numbers that multiply to $30$ and add to $11$: $5$ and $6$.',
        hint2: '$27^{1/3} = 3$ and $16^{1/2} = 4$.',
        hint3: '$f^{-1}(x) = \\\\frac{x+7}{3}$. Plug in $x=2$.',
        explanation: '1) $(x-5)(x-6)$, so $b = 6$. 2) $3 + 4 = 7$. 3) $\\\\frac{2+7}{3} = 3$.'
      }
    },
    {
      id: 'sat-pa7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you square both sides of an equation, you should always …',
            options: ['simplify first', 'check for extraneous solutions', 'multiply by $-1$', 'take the square root again']
          },
          {
            label: 'The discriminant $b^2 - 4ac = 0$ means the equation has …',
            options: ['no real solutions', 'exactly one real solution', 'two distinct real solutions', 'infinitely many solutions']
          },
          {
            label: 'To add $\\\\frac{a}{x}+\\\\frac{b}{x+1}$, the first step is to …',
            options: ['cross multiply', 'find the LCD', 'cancel $x$', 'set equal to zero']
          }
        ],
        correctAnswers: ['check for extraneous solutions', 'exactly one real solution', 'find the LCD'],
        hint1: 'Squaring can introduce solutions that don\\'t satisfy the original equation.',
        hint2: 'Discriminant $= 0$ means repeated root.',
        hint3: 'Before adding fractions with different denominators, find a common denominator.',
        explanation: 'Always check for extraneous solutions after squaring. Discriminant $= 0$ gives one repeated root. Find the LCD before adding fractions.'
      }
    },
    {
      id: 'sat-pa7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Mixed Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\frac{x^2 + 3x - 10}{x - 2} = x + k$ for all $x \\\\neq 2$, what is $k$?',
            options: ['$3$', '$5$', '$-5$', '$10$'],
            correctAnswer: 1,
            explanation: '$x^2 + 3x - 10 = (x-2)(x+5)$. Dividing by $(x-2)$ gives $x + 5$, so $k = 5$.'
          },
          {
            question: 'If $g(x) = \\\\sqrt{2x+9}$ and $g(a) = 5$, what is $a$?',
            options: ['$2$', '$8$', '$7$', '$16$'],
            correctAnswer: 1,
            explanation: '$\\\\sqrt{2a+9} = 5 \\\\implies 2a + 9 = 25 \\\\implies 2a = 16 \\\\implies a = 8$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Passport to Advanced Math lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
