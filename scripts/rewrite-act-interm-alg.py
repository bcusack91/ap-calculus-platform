#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT Intermediate Algebra.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-intermediate-algebra-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-intermediate-algebra-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Quadratic Equations ─────────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const actIntermAlgPart1Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia1-intro',
      type: 'text' as const,
      content: `
# 📐 Quadratic Equations

**Part 1 of 7 — Factoring, the Quadratic Formula & the Discriminant**

Quadratics are one of the **most tested** topics in the ACT Intermediate Algebra strand. A quadratic equation has the standard form:

$$ax^2 + bx + c = 0$$

Three core solving techniques:

| Method | When to Use |
|--------|-------------|
| Factoring | Coefficients are small and the expression factors neatly |
| Quadratic Formula | Any quadratic — the universal tool |
| Completing the Square | When you need vertex form or the problem asks for it |

**Quadratic Formula:**

$$x = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}$$

The expression under the radical, $\\\\Delta = b^2 - 4ac$, is the **discriminant** and tells you how many real solutions exist.
      `
    },
    {
      id: 'act-ia1-factoring',
      type: 'text' as const,
      content: `
## Factoring — Worked Examples

**Example 1:** Solve $x^2 - 5x + 6 = 0$.

We need two numbers whose product is $6$ and sum is $-5$: that's $-2$ and $-3$.

$$(x - 2)(x - 3) = 0 \\\\implies x = 2 \\\\text{ or } x = 3$$

**Example 2:** Solve $2x^2 + 7x + 3 = 0$.

We look for factors of $2 \\\\cdot 3 = 6$ that add to $7$: that's $1$ and $6$.

$$2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3) = 0$$

$$x = -\\\\frac{1}{2} \\\\text{ or } x = -3$$

**Example 3:** Using the quadratic formula on $x^2 + 4x - 21 = 0$:

$$x = \\\\frac{-4 \\\\pm \\\\sqrt{16 + 84}}{2} = \\\\frac{-4 \\\\pm \\\\sqrt{100}}{2} = \\\\frac{-4 \\\\pm 10}{2}$$

$$x = 3 \\\\text{ or } x = -7$$
      `
    },
    {
      id: 'act-ia1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Solving Quadratics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What are the solutions of $x^2 - 9x + 20 = 0$?',
            options: ['$x = 4, \\\\; x = 5$', '$x = -4, \\\\; x = -5$', '$x = 2, \\\\; x = 10$', '$x = -4, \\\\; x = 5$'],
            correctAnswer: 0,
            explanation: 'We need two numbers with product $20$ and sum $9$: $4$ and $5$. So $(x-4)(x-5)=0$ giving $x=4$ or $x=5$.'
          },
          {
            question: 'What are the solutions of $3x^2 - 12 = 0$?',
            options: ['$x = 4$', '$x = \\\\pm 2$', '$x = \\\\pm 4$', '$x = 2$'],
            correctAnswer: 1,
            explanation: '$3x^2 = 12 \\\\implies x^2 = 4 \\\\implies x = \\\\pm 2$.'
          }
        ]
      }
    },
    {
      id: 'act-ia1-discriminant',
      type: 'text' as const,
      content: `
## The Discriminant

The discriminant $\\\\Delta = b^2 - 4ac$ determines the nature of the roots:

| Discriminant | Number of Real Solutions |
|-------------|------------------------|
| $\\\\Delta > 0$ | Two distinct real roots |
| $\\\\Delta = 0$ | One repeated real root |
| $\\\\Delta < 0$ | No real roots (two complex roots) |

**Example 4:** How many real solutions does $x^2 + 6x + 9 = 0$ have?

$$\\\\Delta = 6^2 - 4(1)(9) = 36 - 36 = 0$$

One repeated root: $x = -3$.

**Example 5:** How many real solutions does $2x^2 + x + 5 = 0$ have?

$$\\\\Delta = 1 - 40 = -39 < 0$$

No real solutions.
      `
    },
    {
      id: 'act-ia1-input1',
      type: 'input-boxes' as const,
      content: `
**Quadratic Practice** 🧮

1) Solve $x^2 - 7x + 12 = 0$. Enter the **smaller** root.
2) What is the discriminant of $x^2 + 2x + 5 = 0$?
3) Solve $x^2 - 16 = 0$. Enter the **positive** root.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-16', '4'],
        hint1: 'Factor: product 12, sum 7. The factors are 3 and 4.',
        hint2: '$\\\\Delta = 2^2 - 4(1)(5) = 4 - 20$.',
        hint3: '$x^2 = 16 \\\\implies x = \\\\pm 4$.',
        explanation: '$(x-3)(x-4)=0$ so roots are 3 and 4 (smaller is 3). $\\\\Delta = 4 - 20 = -16$. $x^2 = 16$ gives $x = \\\\pm 4$ (positive root is 4).'
      }
    },
    {
      id: 'act-ia1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the discriminant is negative, the quadratic has …',
            options: ['two real roots', 'one repeated root', 'no real roots', 'infinitely many roots']
          },
          {
            label: 'To factor $x^2 + bx + c$, you look for two numbers whose product is $c$ and whose sum is …',
            options: ['$a$', '$b$', '$c$', '$-b$']
          },
          {
            label: 'The quadratic formula denominator for $ax^2+bx+c=0$ is …',
            options: ['$a$', '$2a$', '$-2a$', '$4a$']
          }
        ],
        correctAnswers: ['no real roots', '$b$', '$2a$'],
        hint1: 'A negative discriminant means the square root is of a negative number.',
        hint2: 'In $x^2 + bx + c$, the coefficient of $x$ is $b$.',
        hint3: 'The full formula is $\\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$.',
        explanation: 'Negative discriminant → no real roots. You need two numbers summing to $b$. The denominator is $2a$.'
      }
    },
    {
      id: 'act-ia1-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For the equation $2x^2 - 5x - 3 = 0$, what is the sum of the two solutions?',
            options: ['$\\\\frac{5}{2}$', '$-\\\\frac{5}{2}$', '$\\\\frac{3}{2}$', '$-\\\\frac{3}{2}$'],
            correctAnswer: 0,
            explanation: 'By Vieta\\'s formulas the sum of the roots is $-b/a = -(-5)/2 = 5/2$.'
          },
          {
            question: 'How many real solutions does $x^2 - 4x + 7 = 0$ have?',
            options: ['0', '1', '2', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$\\\\Delta = 16 - 28 = -12 < 0$, so there are no real solutions.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Functions & Notation ────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const actIntermAlgPart2Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia2-intro',
      type: 'text' as const,
      content: `
# 🔧 Functions & Notation

**Part 2 of 7 — Evaluating f(x), Domain & Range, Composition**

A **function** is a rule that assigns exactly one output to each input. On the ACT you'll see standard notation like $f(x)$, $g(x)$, etc.

**Evaluating a function** means substituting a value for $x$.

**Example 1:** If $f(x) = 3x^2 - 2x + 1$, find $f(4)$.

$$f(4) = 3(16) - 2(4) + 1 = 48 - 8 + 1 = 41$$

**Example 2:** If $g(x) = \\\\frac{x+1}{x-3}$, find $g(5)$.

$$g(5) = \\\\frac{5+1}{5-3} = \\\\frac{6}{2} = 3$$
      `
    },
    {
      id: 'act-ia2-domain',
      type: 'text' as const,
      content: `
## Domain & Range

The **domain** is the set of all valid inputs. The **range** is the set of all possible outputs.

Common domain restrictions:
- **Fractions:** denominator $\\\\neq 0$.
- **Square roots:** radicand $\\\\geq 0$ (for real numbers).
- **Logarithms:** argument $> 0$.

**Example 3:** Find the domain of $h(x) = \\\\frac{1}{x^2 - 9}$.

Set $x^2 - 9 \\\\neq 0$: $x \\\\neq \\\\pm 3$. Domain: all real numbers except $3$ and $-3$.

**Example 4:** Find the domain of $k(x) = \\\\sqrt{2x - 8}$.

$$2x - 8 \\\\geq 0 \\\\implies x \\\\geq 4$$

Domain: $[4, \\\\infty)$.
      `
    },
    {
      id: 'act-ia2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Function Evaluation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 3x + 2$, what is $f(-1)$?',
            options: ['$0$', '$6$', '$4$', '$2$'],
            correctAnswer: 1,
            explanation: '$f(-1) = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6$.'
          },
          {
            question: 'What value(s) are excluded from the domain of $g(x) = \\\\frac{5}{x + 2}$?',
            options: ['$x = 0$', '$x = -2$', '$x = 2$', '$x = 5$'],
            correctAnswer: 1,
            explanation: 'The denominator $x + 2 = 0$ when $x = -2$, so $x = -2$ is excluded.'
          }
        ]
      }
    },
    {
      id: 'act-ia2-composition',
      type: 'text' as const,
      content: `
## Function Composition

The **composition** $(f \\\\circ g)(x) = f(g(x))$ means plug $g(x)$ into $f$.

**Example 5:** Let $f(x) = 2x + 3$ and $g(x) = x^2$. Find $(f \\\\circ g)(4)$.

$$g(4) = 16 \\\\implies f(16) = 2(16) + 3 = 35$$

**Example 6:** Same functions. Find $(g \\\\circ f)(4)$.

$$f(4) = 11 \\\\implies g(11) = 121$$

**Order matters!** $f \\\\circ g \\\\neq g \\\\circ f$ in general.

**Example 7:** If $f(x) = x + 5$ and $g(x) = 3x$, find $f(g(x))$.

$$f(g(x)) = f(3x) = 3x + 5$$
      `
    },
    {
      id: 'act-ia2-input1',
      type: 'input-boxes' as const,
      content: `
**Function Practice** 🧮

Let $f(x) = 2x - 1$ and $g(x) = x^2 + 3$.

1) What is $f(5)$?
2) What is $g(-2)$?
3) What is $f(g(1))$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '7', '7'],
        hint1: '$f(5) = 2(5) - 1$.',
        hint2: '$g(-2) = (-2)^2 + 3 = 4 + 3$.',
        hint3: 'First find $g(1) = 1 + 3 = 4$, then $f(4) = 2(4) - 1$.',
        explanation: '$f(5) = 9$. $g(-2) = 7$. $g(1) = 4$ then $f(4) = 7$.'
      }
    },
    {
      id: 'act-ia2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Domain & Composition Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The domain of $\\\\sqrt{x - 5}$ is …',
            options: ['$x > 5$', '$x \\\\geq 5$', '$x \\\\leq 5$', 'all real numbers']
          },
          {
            label: '$(f \\\\circ g)(x)$ means you first apply …',
            options: ['$f$, then $g$', '$g$, then $f$', 'either order', 'neither']
          },
          {
            label: 'If $f(x) = x + 1$ and $g(x) = 2x$, then $g(f(3))$ equals …',
            options: ['$7$', '$8$', '$6$', '$9$']
          }
        ],
        correctAnswers: ['$x \\\\geq 5$', '$g$, then $f$', '$8$'],
        hint1: 'The radicand must be $\\\\geq 0$, so $x - 5 \\\\geq 0$.',
        hint2: '$(f \\\\circ g)(x) = f(g(x))$: evaluate $g$ first, then feed into $f$.',
        hint3: '$f(3) = 4$, then $g(4) = 8$.',
        explanation: 'Domain of $\\\\sqrt{x-5}$ is $x \\\\geq 5$. In $f \\\\circ g$ you apply $g$ first. $g(f(3)) = g(4) = 8$.'
      }
    },
    {
      id: 'act-ia2-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\\\frac{x}{x-4}$, which value of $x$ is NOT in the domain of $f$?',
            options: ['$0$', '$-4$', '$4$', '$1$'],
            correctAnswer: 2,
            explanation: 'The denominator is $x - 4$, which equals zero when $x = 4$.'
          },
          {
            question: 'If $f(x) = 3x - 2$ and $g(x) = x + 4$, what is $(f \\\\circ g)(2)$?',
            options: ['$12$', '$16$', '$8$', '$18$'],
            correctAnswer: 1,
            explanation: '$g(2) = 6$, then $f(6) = 3(6) - 2 = 16$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Polynomials ────────────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actIntermAlgPart3Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia3-intro',
      type: 'text' as const,
      content: `
# 📊 Polynomials

**Part 3 of 7 — Operations, Factoring, Zeros & the Remainder Theorem**

A **polynomial** in $x$ is an expression like:

$$P(x) = a_n x^n + a_{n-1}x^{n-1} + \\\\cdots + a_1 x + a_0$$

The **degree** is the highest power of $x$ with a nonzero coefficient.

| Degree | Name | Example |
|--------|------|---------|
| 1 | Linear | $3x + 2$ |
| 2 | Quadratic | $x^2 - 5x + 6$ |
| 3 | Cubic | $2x^3 - x + 4$ |
| 4 | Quartic | $x^4 + 3x^2 - 1$ |

**Key fact:** A polynomial of degree $n$ has at most $n$ real zeros.
      `
    },
    {
      id: 'act-ia3-operations',
      type: 'text' as const,
      content: `
## Polynomial Operations

**Adding/Subtracting:** Combine like terms.

$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

**Multiplying:** Distribute (FOIL for binomials).

$$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$

**Example — Expand:** $(x + 2)^3$

$$(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(4) + 8 = x^3 + 6x^2 + 12x + 8$$

**Factoring a cubic:** $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$ (difference of cubes).
      `
    },
    {
      id: 'act-ia3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Polynomial Operations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(x + 3)(x - 5)$?',
            options: ['$x^2 - 2x - 15$', '$x^2 + 2x - 15$', '$x^2 - 15$', '$x^2 - 8x - 15$'],
            correctAnswer: 0,
            explanation: '$(x+3)(x-5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$.'
          },
          {
            question: 'What is the degree of $4x^5 - 3x^3 + 2x - 7$?',
            options: ['$3$', '$4$', '$5$', '$7$'],
            correctAnswer: 2,
            explanation: 'The highest power of $x$ is $5$, so the degree is 5.'
          }
        ]
      }
    },
    {
      id: 'act-ia3-remainder',
      type: 'text' as const,
      content: `
## Zeros & the Remainder Theorem

A **zero** (or root) of $P(x)$ is a value $c$ such that $P(c) = 0$.

**Factor Theorem:** $c$ is a zero of $P(x)$ if and only if $(x - c)$ is a factor.

**Remainder Theorem:** When $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$.

**Example:** Let $P(x) = x^3 - 4x^2 + x + 6$. Find $P(2)$.

$$P(2) = 8 - 16 + 2 + 6 = 0$$

Since $P(2) = 0$, $(x - 2)$ is a factor. Dividing:

$$x^3 - 4x^2 + x + 6 = (x - 2)(x^2 - 2x - 3) = (x - 2)(x - 3)(x + 1)$$

Zeros: $x = 2, 3, -1$.
      `
    },
    {
      id: 'act-ia3-input1',
      type: 'input-boxes' as const,
      content: `
**Polynomial Practice** 🧮

1) What is the degree of $7x^4 + 2x^2 - x + 9$?
2) If $P(x) = x^2 - 5x + 6$, what is $P(3)$?
3) Expand: $(x + 1)(x - 1) = x^2 - \\\\;?$ (enter the constant)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '0', '1'],
        hint1: 'The highest power of $x$ present is $x^4$.',
        hint2: '$P(3) = 9 - 15 + 6$.',
        hint3: '$(x+1)(x-1) = x^2 - 1$ — difference of squares.',
        explanation: 'Degree is 4. $P(3) = 9 - 15 + 6 = 0$ (so $x = 3$ is a zero). $(x + 1)(x - 1) = x^2 - 1$.'
      }
    },
    {
      id: 'act-ia3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Polynomial Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A polynomial of degree 4 has at most … real zeros.',
            options: ['2', '3', '4', '8']
          },
          {
            label: 'If $P(c) = 0$, then $(x - c)$ is a … of $P(x)$.',
            options: ['term', 'coefficient', 'factor', 'remainder']
          },
          {
            label: '$x^3 + 8$ factors as $(x + 2)(x^2 - 2x + \\\\;?)$.',
            options: ['2', '4', '8', '16']
          }
        ],
        correctAnswers: ['4', 'factor', '4'],
        hint1: 'The Fundamental Theorem of Algebra: degree $n$ → at most $n$ real roots.',
        hint2: 'This is the Factor Theorem.',
        hint3: 'Sum of cubes: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ with $a = x$, $b = 2$.',
        explanation: 'At most 4 real zeros. $P(c)=0$ means $(x-c)$ is a factor. $x^3+8 = (x+2)(x^2-2x+4)$.'
      }
    },
    {
      id: 'act-ia3-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'When $P(x) = 2x^3 - 3x^2 + 4x - 5$ is divided by $(x - 1)$, the remainder is:',
            options: ['$-2$', '$-1$', '$0$', '$-5$'],
            correctAnswer: 0,
            explanation: '$P(1) = 2 - 3 + 4 - 5 = -2$. By the Remainder Theorem, the remainder is $-2$.'
          },
          {
            question: 'If $(x - 4)$ is a factor of $x^2 - x - k$, what is $k$?',
            options: ['$8$', '$12$', '$16$', '$20$'],
            correctAnswer: 1,
            explanation: 'If $x = 4$ is a zero: $16 - 4 - k = 0 \\\\implies k = 12$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Rational Expressions ────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actIntermAlgPart4Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia4-intro',
      type: 'text' as const,
      content: `
# 🔢 Rational Expressions

**Part 4 of 7 — Simplifying, Adding/Subtracting & Complex Fractions**

A **rational expression** is a fraction whose numerator and denominator are polynomials:

$$\\\\frac{P(x)}{Q(x)}, \\\\quad Q(x) \\\\neq 0$$

**Simplifying** means cancelling common factors from top and bottom.

**Example 1:** Simplify $\\\\frac{x^2 - 9}{x + 3}$.

$$\\\\frac{(x-3)(x+3)}{x+3} = x - 3, \\\\quad x \\\\neq -3$$

**Example 2:** Simplify $\\\\frac{2x^2 + 6x}{4x}$.

$$\\\\frac{2x(x + 3)}{4x} = \\\\frac{x + 3}{2}, \\\\quad x \\\\neq 0$$

Always state the restriction(s) on $x$!
      `
    },
    {
      id: 'act-ia4-addsub',
      type: 'text' as const,
      content: `
## Adding & Subtracting

To add or subtract rational expressions, find a **common denominator**.

**Example 3:** $\\\\frac{2}{x} + \\\\frac{3}{x+1}$

$$= \\\\frac{2(x+1)}{x(x+1)} + \\\\frac{3x}{x(x+1)} = \\\\frac{2x + 2 + 3x}{x(x+1)} = \\\\frac{5x + 2}{x(x+1)}$$

**Example 4:** $\\\\frac{1}{x-2} - \\\\frac{1}{x+2}$

$$= \\\\frac{(x+2) - (x-2)}{(x-2)(x+2)} = \\\\frac{4}{x^2 - 4}$$

**Key tip:** Always factor denominators first to spot common factors and find the LCD efficiently.
      `
    },
    {
      id: 'act-ia4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Simplifying Rationals** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify $\\\\frac{x^2 - 4}{x - 2}$.',
            options: ['$x - 2$', '$x + 2$', '$x^2 - 2$', '$\\\\frac{x-4}{x-2}$'],
            correctAnswer: 1,
            explanation: '$\\\\frac{(x-2)(x+2)}{x-2} = x + 2$.'
          },
          {
            question: 'What is $\\\\frac{3}{x} + \\\\frac{2}{x}$?',
            options: ['$\\\\frac{5}{x}$', '$\\\\frac{5}{2x}$', '$\\\\frac{6}{x^2}$', '$\\\\frac{5}{x^2}$'],
            correctAnswer: 0,
            explanation: 'Same denominator: $\\\\frac{3+2}{x} = \\\\frac{5}{x}$.'
          }
        ]
      }
    },
    {
      id: 'act-ia4-complex',
      type: 'text' as const,
      content: `
## Complex Fractions

A **complex fraction** has fractions in the numerator, denominator, or both.

**Strategy:** Multiply top and bottom by the LCD of all mini-fractions.

**Example 5:** Simplify $\\\\dfrac{\\\\frac{1}{x} + \\\\frac{1}{y}}{\\\\frac{1}{x} - \\\\frac{1}{y}}$.

Multiply numerator and denominator by $xy$:

$$\\\\frac{y + x}{y - x}$$

**Example 6:** Simplify $\\\\dfrac{\\\\frac{2}{x+1}}{\\\\frac{4}{(x+1)^2}}$.

$$= \\\\frac{2}{x+1} \\\\cdot \\\\frac{(x+1)^2}{4} = \\\\frac{2(x+1)}{4} = \\\\frac{x+1}{2}$$
      `
    },
    {
      id: 'act-ia4-input1',
      type: 'input-boxes' as const,
      content: `
**Rational Expression Practice** 🧮

1) Simplify $\\\\frac{x^2 - 25}{x + 5}$. The result is $x - \\\\;?$ (enter the number)
2) $\\\\frac{1}{3} + \\\\frac{1}{6} = \\\\frac{?}{6}$ (enter the numerator)
3) For $\\\\frac{x}{x - 4}$, what value of $x$ makes the expression undefined?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '4'],
        hint1: '$x^2 - 25 = (x-5)(x+5)$, then cancel $(x+5)$.',
        hint2: '$\\\\frac{1}{3} = \\\\frac{2}{6}$, so $\\\\frac{2}{6} + \\\\frac{1}{6} = \\\\frac{3}{6}$.',
        hint3: 'Set the denominator equal to zero: $x - 4 = 0$.',
        explanation: '$\\\\frac{(x-5)(x+5)}{x+5} = x - 5$. $\\\\frac{1}{3}+\\\\frac{1}{6}=\\\\frac{3}{6}$. Undefined when $x = 4$.'
      }
    },
    {
      id: 'act-ia4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rational Expression Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To simplify a rational expression, first … the numerator and denominator.',
            options: ['multiply', 'add', 'factor', 'differentiate']
          },
          {
            label: 'The LCD of $\\\\frac{1}{x}$ and $\\\\frac{1}{x+1}$ is …',
            options: ['$x$', '$x + 1$', '$x(x+1)$', '$x^2 + x$']
          },
          {
            label: 'A complex fraction can be simplified by multiplying top and bottom by the …',
            options: ['GCF', 'LCD', 'numerator', 'denominator']
          }
        ],
        correctAnswers: ['factor', '$x(x+1)$', 'LCD'],
        hint1: 'You need to find common factors to cancel.',
        hint2: 'The LCD must contain each distinct factor at its highest power.',
        hint3: 'Multiplying by the LCD clears all the mini-fractions.',
        explanation: 'Factor first to cancel common factors. LCD of $x$ and $x+1$ is $x(x+1)$. Multiply by the LCD to clear complex fractions.'
      }
    },
    {
      id: 'act-ia4-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Simplify: $\\\\frac{x^2 + 3x + 2}{x^2 + 5x + 6}$',
            options: ['$\\\\frac{x+1}{x+3}$', '$\\\\frac{x+2}{x+3}$', '$\\\\frac{x+1}{x+2}$', '$\\\\frac{2}{6}$'],
            correctAnswer: 0,
            explanation: '$\\\\frac{(x+1)(x+2)}{(x+2)(x+3)} = \\\\frac{x+1}{x+3}$.'
          },
          {
            question: 'What is $\\\\frac{5}{x-1} - \\\\frac{3}{x-1}$?',
            options: ['$\\\\frac{2}{x-1}$', '$\\\\frac{8}{x-1}$', '$\\\\frac{2}{(x-1)^2}$', '$\\\\frac{15}{(x-1)^2}$'],
            correctAnswer: 0,
            explanation: 'Same denominator: $\\\\frac{5-3}{x-1} = \\\\frac{2}{x-1}$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Logarithms & Exponents ──────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actIntermAlgPart5Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia5-intro',
      type: 'text' as const,
      content: `
# 📈 Logarithms & Exponents

**Part 5 of 7 — Log Rules, Solving Log Equations & Change of Base**

The **logarithm** $\\\\log_b a = c$ means $b^c = a$.

| Exponential | Logarithmic |
|------------|-------------|
| $2^3 = 8$ | $\\\\log_2 8 = 3$ |
| $10^2 = 100$ | $\\\\log_{10} 100 = 2$ |
| $5^0 = 1$ | $\\\\log_5 1 = 0$ |

**Key log rules:**

| Rule | Formula |
|------|---------|
| Product | $\\\\log_b(MN) = \\\\log_b M + \\\\log_b N$ |
| Quotient | $\\\\log_b\\\\!\\\\left(\\\\frac{M}{N}\\\\right) = \\\\log_b M - \\\\log_b N$ |
| Power | $\\\\log_b(M^k) = k\\\\log_b M$ |
| Change of base | $\\\\log_b a = \\\\frac{\\\\log a}{\\\\log b}$ |

Also remember: $\\\\log_b b = 1$ and $\\\\log_b 1 = 0$ for any valid base $b$.
      `
    },
    {
      id: 'act-ia5-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1:** Evaluate $\\\\log_3 81$.

$3^4 = 81$, so $\\\\log_3 81 = 4$.

**Example 2:** Simplify $\\\\log_2 32 - \\\\log_2 4$.

$$\\\\log_2\\\\!\\\\left(\\\\frac{32}{4}\\\\right) = \\\\log_2 8 = 3$$

**Example 3:** Solve $\\\\log_5 x = 3$.

$$x = 5^3 = 125$$

**Example 4:** Solve $2^{x+1} = 16$.

$$2^{x+1} = 2^4 \\\\implies x + 1 = 4 \\\\implies x = 3$$

**Example 5 — Change of base:** Express $\\\\log_3 7$ using common log.

$$\\\\log_3 7 = \\\\frac{\\\\log 7}{\\\\log 3} \\\\approx \\\\frac{0.845}{0.477} \\\\approx 1.771$$
      `
    },
    {
      id: 'act-ia5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Log Evaluation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\\\log_2 64$?',
            options: ['$4$', '$5$', '$6$', '$8$'],
            correctAnswer: 2,
            explanation: '$2^6 = 64$, so $\\\\log_2 64 = 6$.'
          },
          {
            question: '$\\\\log_4 1 = \\\\;?$',
            options: ['$1$', '$0$', '$4$', 'undefined'],
            correctAnswer: 1,
            explanation: '$4^0 = 1$, so $\\\\log_4 1 = 0$. This holds for any base.'
          }
        ]
      }
    },
    {
      id: 'act-ia5-solving',
      type: 'text' as const,
      content: `
## Solving Logarithmic & Exponential Equations

**Example 6:** Solve $\\\\log(x) + \\\\log(x - 3) = 1$ (base 10).

$$\\\\log[x(x-3)] = 1 \\\\implies x(x-3) = 10$$

$$x^2 - 3x - 10 = 0 \\\\implies (x - 5)(x + 2) = 0$$

$x = 5$ or $x = -2$. Since the argument of a log must be positive, $x = -2$ is extraneous. **Answer: $x = 5$.**

**Example 7:** Solve $3^x = 27^{x-2}$.

Write both sides with base 3: $3^x = (3^3)^{x-2} = 3^{3x-6}$.

$$x = 3x - 6 \\\\implies -2x = -6 \\\\implies x = 3$$
      `
    },
    {
      id: 'act-ia5-input1',
      type: 'input-boxes' as const,
      content: `
**Logarithm Practice** 🧮

1) What is $\\\\log_5 125$?
2) Solve $\\\\log_2 x = 5$. What is $x$?
3) Simplify $\\\\log_3 9 + \\\\log_3 3$. (enter the numerical answer)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '32', '3'],
        hint1: '$5^3 = 125$.',
        hint2: '$x = 2^5$.',
        hint3: '$\\\\log_3 9 = 2$ and $\\\\log_3 3 = 1$.',
        explanation: '$5^3 = 125$ so $\\\\log_5 125 = 3$. $2^5 = 32$. $\\\\log_3 9 + \\\\log_3 3 = 2 + 1 = 3$.'
      }
    },
    {
      id: 'act-ia5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Log Rule Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\log_b(MN)$ equals …',
            options: ['$\\\\log_b M \\\\cdot \\\\log_b N$', '$\\\\log_b M + \\\\log_b N$', '$\\\\log_b M - \\\\log_b N$', '$\\\\frac{\\\\log_b M}{\\\\log_b N}$']
          },
          {
            label: 'The change-of-base formula says $\\\\log_b a = $ …',
            options: ['$\\\\frac{\\\\log b}{\\\\log a}$', '$\\\\frac{\\\\log a}{\\\\log b}$', '$\\\\log a - \\\\log b$', '$\\\\log a \\\\cdot \\\\log b$']
          },
          {
            label: 'To solve $\\\\log_b x = c$, rewrite as $x = $ …',
            options: ['$c^b$', '$b^c$', '$b \\\\cdot c$', '$\\\\frac{b}{c}$']
          }
        ],
        correctAnswers: ['$\\\\log_b M + \\\\log_b N$', '$\\\\frac{\\\\log a}{\\\\log b}$', '$b^c$'],
        hint1: 'Product rule: log of a product is the sum of the logs.',
        hint2: 'Change of base puts $a$ on top and $b$ on the bottom.',
        hint3: '$\\\\log_b x = c$ means $b^c = x$.',
        explanation: 'Product rule gives a sum. Change of base: $\\\\log a / \\\\log b$. $\\\\log_b x = c$ means $x = b^c$.'
      }
    },
    {
      id: 'act-ia5-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\\\log_2 x + \\\\log_2 8 = 7$, what is $x$?',
            options: ['$8$', '$16$', '$32$', '$64$'],
            correctAnswer: 1,
            explanation: '$\\\\log_2 8 = 3$, so $\\\\log_2 x = 4$, giving $x = 2^4 = 16$.'
          },
          {
            question: 'Solve $5^{2x} = 625$.',
            options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
            correctAnswer: 1,
            explanation: '$625 = 5^4$, so $5^{2x} = 5^4 \\\\implies 2x = 4 \\\\implies x = 2$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Sequences & Series ──────────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const actIntermAlgPart6Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia6-intro',
      type: 'text' as const,
      content: `
# 🔗 Sequences & Series

**Part 6 of 7 — Arithmetic, Geometric, nth Term & Partial Sums**

A **sequence** is an ordered list of numbers. A **series** is the sum of a sequence's terms.

| Type | Common Pattern |
|------|---------------|
| Arithmetic | Constant difference $d$ between consecutive terms |
| Geometric | Constant ratio $r$ between consecutive terms |

**Arithmetic sequence:** $a_n = a_1 + (n-1)d$

**Geometric sequence:** $a_n = a_1 \\\\cdot r^{n-1}$

**Example 1 — Arithmetic:** $3, 7, 11, 15, \\\\ldots$ Here $a_1 = 3$, $d = 4$.

$$a_{10} = 3 + (10-1)(4) = 3 + 36 = 39$$

**Example 2 — Geometric:** $2, 6, 18, 54, \\\\ldots$ Here $a_1 = 2$, $r = 3$.

$$a_5 = 2 \\\\cdot 3^{4} = 2 \\\\cdot 81 = 162$$
      `
    },
    {
      id: 'act-ia6-sums',
      type: 'text' as const,
      content: `
## Partial Sums

**Arithmetic series** (sum of the first $n$ terms):

$$S_n = \\\\frac{n}{2}(a_1 + a_n) \\\\quad \\\\text{or} \\\\quad S_n = \\\\frac{n}{2}[2a_1 + (n-1)d]$$

**Geometric series** (sum of the first $n$ terms):

$$S_n = a_1 \\\\cdot \\\\frac{1 - r^n}{1 - r}, \\\\quad r \\\\neq 1$$

**Example 3:** Find the sum of the first 20 terms of $5, 8, 11, 14, \\\\ldots$

$a_1 = 5$, $d = 3$, $a_{20} = 5 + 19(3) = 62$.

$$S_{20} = \\\\frac{20}{2}(5 + 62) = 10 \\\\cdot 67 = 670$$

**Example 4:** Find the sum of the first 6 terms of $4, 12, 36, 108, \\\\ldots$

$a_1 = 4$, $r = 3$.

$$S_6 = 4 \\\\cdot \\\\frac{1 - 3^6}{1 - 3} = 4 \\\\cdot \\\\frac{1 - 729}{-2} = 4 \\\\cdot 364 = 1456$$
      `
    },
    {
      id: 'act-ia6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sequence Identification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the 8th term of the arithmetic sequence $2, 9, 16, 23, \\\\ldots$?',
            options: ['$44$', '$49$', '$51$', '$56$'],
            correctAnswer: 2,
            explanation: '$a_1 = 2$, $d = 7$. $a_8 = 2 + 7(7) = 2 + 49 = 51$.'
          },
          {
            question: 'What is the 5th term of the geometric sequence $3, 6, 12, 24, \\\\ldots$?',
            options: ['$30$', '$36$', '$48$', '$96$'],
            correctAnswer: 2,
            explanation: '$a_1 = 3$, $r = 2$. $a_5 = 3 \\\\cdot 2^4 = 3 \\\\cdot 16 = 48$.'
          }
        ]
      }
    },
    {
      id: 'act-ia6-finding',
      type: 'text' as const,
      content: `
## Finding the Common Difference or Ratio

**Arithmetic:** $d = a_{n+1} - a_n$ (subtract consecutive terms).

**Geometric:** $r = \\\\frac{a_{n+1}}{a_n}$ (divide consecutive terms).

**Example 5:** In the sequence $100, 90, 80, 70, \\\\ldots$, $d = -10$.

$$a_{15} = 100 + 14(-10) = 100 - 140 = -40$$

**Example 6:** Find $d$ if $a_3 = 14$ and $a_7 = 30$ (arithmetic).

$$a_7 = a_3 + 4d \\\\implies 30 = 14 + 4d \\\\implies d = 4$$

Then $a_1 = a_3 - 2d = 14 - 8 = 6$.
      `
    },
    {
      id: 'act-ia6-input1',
      type: 'input-boxes' as const,
      content: `
**Sequences Practice** 🧮

1) Find the 12th term of the arithmetic sequence $4, 10, 16, 22, \\\\ldots$
2) Find the common ratio of $5, 15, 45, 135, \\\\ldots$
3) Find the sum of the first 10 terms of $1, 2, 3, \\\\ldots, 10$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['70', '3', '55'],
        hint1: '$a_1 = 4$, $d = 6$. $a_{12} = 4 + 11(6)$.',
        hint2: 'Divide any term by the previous: $15/5$.',
        hint3: '$S_{10} = \\\\frac{10}{2}(1 + 10)$.',
        explanation: '$a_{12} = 4 + 66 = 70$. $r = 15/5 = 3$. $S_{10} = 5 \\\\cdot 11 = 55$.'
      }
    },
    {
      id: 'act-ia6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Sequence & Series Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An arithmetic sequence has a constant … between terms.',
            options: ['ratio', 'difference', 'product', 'exponent']
          },
          {
            label: 'The formula for the $n$th term of a geometric sequence is $a_n = a_1 \\\\cdot \\\\;?$',
            options: ['$r^n$', '$r^{n+1}$', '$r^{n-1}$', '$nr$']
          },
          {
            label: 'The sum of the first $n$ terms of an arithmetic series uses $S_n = \\\\frac{n}{2}(a_1 + \\\\;?)$',
            options: ['$a_2$', '$a_n$', '$d$', '$n$']
          }
        ],
        correctAnswers: ['difference', '$r^{n-1}$', '$a_n$'],
        hint1: 'Arithmetic adds the same value each time.',
        hint2: 'The first term has exponent $0$ (i.e., $r^{1-1}$).',
        hint3: 'You average the first and last terms, then multiply by $n$.',
        explanation: 'Arithmetic → constant difference. Geometric: $a_n = a_1 \\\\cdot r^{n-1}$. Sum: $S_n = \\\\frac{n}{2}(a_1 + a_n)$.'
      }
    },
    {
      id: 'act-ia6-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'An arithmetic sequence has $a_1 = 7$ and $d = -3$. What is $a_{20}$?',
            options: ['$-50$', '$-56$', '$-53$', '$64$'],
            correctAnswer: 0,
            explanation: '$a_{20} = 7 + 19(-3) = 7 - 57 = -50$.'
          },
          {
            question: 'What is the sum of the geometric series $2 + 6 + 18 + 54 + 162$?',
            options: ['$242$', '$240$', '$243$', '$244$'],
            correctAnswer: 0,
            explanation: '$a_1 = 2$, $r = 3$, $n = 5$. $S_5 = 2 \\\\cdot \\\\frac{1 - 243}{1 - 3} = 2 \\\\cdot \\\\frac{-242}{-2} = 242$.'
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
export const actIntermAlgPart7Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet & Mixed ACT Intermediate Algebra Problems**

Here's a quick-reference sheet covering every major topic from Parts 1–6.

## Cheat Sheet

| Topic | Key Formula / Fact |
|-------|-------------------|
| Quadratic Formula | $x = \\\\frac{-b \\\\pm \\\\sqrt{b^2-4ac}}{2a}$ |
| Discriminant | $\\\\Delta > 0$: 2 real; $= 0$: 1 real; $< 0$: none |
| Composition | $(f \\\\circ g)(x) = f(g(x))$ |
| Domain (radical) | Radicand $\\\\geq 0$ |
| Domain (fraction) | Denominator $\\\\neq 0$ |
| Remainder Theorem | $P(x) \\\\div (x-c)$ has remainder $P(c)$ |
| Log definition | $\\\\log_b a = c \\\\iff b^c = a$ |
| Log product rule | $\\\\log_b(MN) = \\\\log_b M + \\\\log_b N$ |
| Arithmetic $n$th term | $a_n = a_1 + (n-1)d$ |
| Geometric $n$th term | $a_n = a_1 \\\\cdot r^{n-1}$ |
| Arithmetic sum | $S_n = \\\\frac{n}{2}(a_1 + a_n)$ |
      `
    },
    {
      id: 'act-ia7-tips',
      type: 'text' as const,
      content: `
## ACT Intermediate Algebra Tips

1. **Know your formulas cold.** The quadratic formula, log rules, and sequence formulas appear in nearly every test.
2. **Plug in answers** (backsolving) when algebraic manipulation looks messy — it's often faster.
3. **Watch for extraneous solutions** — especially with logs (arguments must be positive) and rationals (denominators can't be zero).
4. **Factor first** in rational expressions — cancelling saves time.
5. **Time management:** Don't spend more than 60 seconds per problem. Mark and move on.
6. **Discriminant shortcut:** Before solving a quadratic, check $\\\\Delta$ to see how many real answers to expect.
      `
    },
    {
      id: 'act-ia7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the product of the roots of $x^2 - 7x + 10 = 0$?',
            options: ['$7$', '$10$', '$-10$', '$-7$'],
            correctAnswer: 1,
            explanation: 'By Vieta\\'s formulas, the product of the roots is $c/a = 10/1 = 10$. (The roots are 2 and 5.)'
          },
          {
            question: 'If $f(x) = 2^x$, what is $f(f(2))$?',
            options: ['$8$', '$16$', '$32$', '$256$'],
            correctAnswer: 1,
            explanation: '$f(2) = 2^2 = 4$. Then $f(4) = 2^4 = 16$.'
          }
        ]
      }
    },
    {
      id: 'act-ia7-mixed1',
      type: 'text' as const,
      content: `
## Worked Mixed Problems

**Problem A (Polynomials):** What is the remainder when $P(x) = x^3 + 2x^2 - x - 2$ is divided by $(x + 2)$?

$$P(-2) = -8 + 8 + 2 - 2 = 0$$

Remainder is $0$, so $(x + 2)$ is a factor.

**Problem B (Logs):** Solve $\\\\log_4(x - 1) = 2$.

$$x - 1 = 4^2 = 16 \\\\implies x = 17$$

**Problem C (Sequences):** The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the common ratio.

$$a_6 = a_3 \\\\cdot r^3 \\\\implies 96 = 12r^3 \\\\implies r^3 = 8 \\\\implies r = 2$$
      `
    },
    {
      id: 'act-ia7-input1',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice — Fill In** 🧮

1) Solve $x^2 + 2x - 15 = 0$. Enter the **positive** root.
2) If $\\\\log_3 x = 4$, what is $x$?
3) Find the 7th term of the arithmetic sequence $10, 14, 18, 22, \\\\ldots$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '81', '34'],
        hint1: 'Factor: two numbers with product $-15$ and sum $2$: $5$ and $-3$.',
        hint2: '$x = 3^4$.',
        hint3: '$a_7 = 10 + 6(4)$.',
        explanation: '$(x+5)(x-3) = 0$, positive root is 3. $3^4 = 81$. $a_7 = 10 + 24 = 34$.'
      }
    },
    {
      id: 'act-ia7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Topic Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\\\frac{x^2-1}{x+1}$ simplifies to …',
            options: ['$x - 1$', '$x + 1$', '$x^2 - 1$', '$\\\\frac{1}{x+1}$']
          },
          {
            label: 'The sum $1 + 2 + 3 + \\\\cdots + 50$ equals …',
            options: ['$1225$', '$1250$', '$1275$', '$2500$']
          },
          {
            label: 'If $f(x) = x^2$ and $g(x) = x + 3$, then $f(g(1))$ equals …',
            options: ['$4$', '$16$', '$10$', '$6$']
          }
        ],
        correctAnswers: ['$x - 1$', '$1275$', '$16$'],
        hint1: '$x^2 - 1 = (x-1)(x+1)$, then cancel $(x+1)$.',
        hint2: '$S_{50} = \\\\frac{50}{2}(1 + 50) = 25 \\\\cdot 51$.',
        hint3: '$g(1) = 4$, then $f(4) = 16$.',
        explanation: '$\\\\frac{(x-1)(x+1)}{x+1} = x - 1$. $S_{50} = 1275$. $g(1) = 4,\\\\; f(4) = 16$.'
      }
    },
    {
      id: 'act-ia7-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Final Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'For the geometric sequence with $a_1 = 5$ and $r = -2$, what is $a_4$?',
            options: ['$20$', '$-40$', '$40$', '$-20$'],
            correctAnswer: 1,
            explanation: '$a_4 = 5 \\\\cdot (-2)^3 = 5 \\\\cdot (-8) = -40$.'
          },
          {
            question: 'Which equation has NO real solutions?',
            options: ['$x^2 - 4 = 0$', '$x^2 + 1 = 0$', '$x^2 - 2x + 1 = 0$', '$x^2 + 5x + 6 = 0$'],
            correctAnswer: 1,
            explanation: '$x^2 + 1 = 0 \\\\implies x^2 = -1$. No real number squared gives $-1$, so there are no real solutions ($\\\\Delta = 0 - 4 = -4 < 0$).'
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
    print("Generating ACT Intermediate Algebra lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
