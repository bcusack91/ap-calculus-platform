export const asvabMkAlgebraExpressionsPart1Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf1-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 1 of 7 — Polynomials on the ASVAB: Terms and Like Terms**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Polynomials on the ASVAB: terms and like terms** |
| 2 | Multiplying polynomials and FOIL |
| 3 | Factoring out the GCF and factoring trinomials |
| 4 | Special patterns and algebraic fractions |
| 5 | Solving quadratics by factoring |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What This Looks Like on the ASVAB

Mathematics Knowledge (MK) is the 5th subtest on the CAT-ASVAB. You get **15 scored questions in 31 minutes**, so about **2 minutes per question**. Every question has **4 answer choices**, and **no calculator** is allowed. You get scratch paper and pencils, and you will use them.

MK is one of the four subtests in your **AFQT** (AR + MK + 2·VE), the score the military uses to check whether you are eligible to enlist. So every MK point you pick up helps.

The official description of MK includes "algebraic operations and equations," and one of the official sample topics is **factoring a difference of squares**. That is exactly this lesson. Expect questions like:

- Simplify an expression by combining like terms
- Multiply two binomials
- Factor a trinomial or a difference of squares
- Solve a quadratic equation such as $x^2 - 5x + 6 = 0$

The good news: these questions follow a small number of patterns. Learn the patterns and most of these items take well under 2 minutes.`
    },
    {
      id: 'mkpf1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🔥 Three quick questions to see where you are. No pressure: Parts 1 to 5 teach all of this.',
      exercise: {
        questions: [
          {
            question: 'Simplify $3x + 5x$.',
            options: ['$15x$', '$8x^2$', '$8x$', '$15x^2$'],
            correctAnswer: 2,
            explanation: '$3x$ and $5x$ are like terms, so add the numbers in front: $3 + 5 = 8$, giving $8x$. The exponent does not change when you add like terms, and you add (not multiply) the coefficients.'
          },
          {
            question: 'Which pair shows like terms?',
            options: ['$4y^2$ and $4y$', '$4y^2$ and $-9y^2$', '$3xy$ and $3x$', '$5x^2y$ and $5xy^2$'],
            correctAnswer: 1,
            explanation: 'Like terms have the same variables raised to the same powers. $4y^2$ and $-9y^2$ both have $y^2$. The numbers in front do not matter; $y^2$ versus $y$, $xy$ versus $x$, and $x^2y$ versus $xy^2$ are all different.'
          },
          {
            question: 'How many terms does $2x^2 - 7x + 1$ have?',
            options: ['$1$', '$2$', '$4$', '$3$'],
            correctAnswer: 3,
            explanation: 'Terms are separated by plus and minus signs: $2x^2$, $-7x$ and $1$. That is three terms, so it is a trinomial.'
          }
        ]
      }
    },
    {
      id: 'mkpf1-vocab',
      type: 'text' as const,
      content: `## The Vocabulary You Need

A **polynomial** is a sum of terms, where each term is a number times variables raised to whole-number powers.

Take $5x^3 - 2x^2 + x - 8$:

| Piece | In this example | Meaning |
|:---|:---|:---|
| **Term** | $5x^3$, $-2x^2$, $x$, $-8$ | The pieces separated by $+$ and $-$ signs (the sign belongs to the term after it) |
| **Coefficient** | $5$, $-2$, $1$ | The number in front of the variable ($x$ means $1x$) |
| **Constant** | $-8$ | A term with no variable |
| **Degree** | $3$ | The highest exponent in the polynomial |

### Names by number of terms

| Terms | Name | Example |
|:---:|:---|:---|
| $1$ | Monomial | $7x^2$ |
| $2$ | Binomial | $x + 4$ |
| $3$ | Trinomial | $x^2 - 3x + 2$ |

### Like terms

**Like terms** have exactly the same variable part: the same letters with the same exponents.

| Like terms | NOT like terms |
|:---|:---|
| $6a$ and $-2a$ | $6a$ and $6a^2$ (different exponents) |
| $x^2y$ and $4x^2y$ | $x^2y$ and $xy^2$ (exponents on different letters) |
| $9$ and $-3$ (both constants) | $9$ and $9x$ |

> **Key Fact:** The degree is the **highest** exponent, not the first one you see. In $4 + x - 3x^5$, the degree is $5$ even though that term is written last.`
    },
    {
      id: 'mkpf1-mc-like',
      type: 'multiple-choice' as const,
      content: '**Spot the pieces.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify $7a - 2b + 3a + 6b$.',
            options: ['$10a - 8b$', '$14ab$', '$4a + 4b$', '$10a + 4b$'],
            correctAnswer: 3,
            explanation: 'Group the like terms: $7a + 3a = 10a$ and $-2b + 6b = 4b$, so the answer is $10a + 4b$. Unlike terms ($a$ and $b$) never combine into one term like $14ab$, and $-2b + 6b$ is $+4b$, not $-8b$.'
          },
          {
            question: 'What is the degree of $5x^3 - 2x^4 + x$?',
            options: ['$3$', '$4$', '$5$', '$8$'],
            correctAnswer: 1,
            explanation: 'The degree is the highest exponent anywhere in the polynomial: the $x^4$ term gives degree $4$. It is not the first exponent ($3$), and you never add exponents across terms.'
          },
          {
            question: 'Which expression is a binomial?',
            options: ['$6x^2y$', '$x^2 - 4x + 4$', '$3m - 11$', '$a + b - c + 2$'],
            correctAnswer: 2,
            explanation: 'A binomial has exactly two terms: $3m$ and $-11$. $6x^2y$ is one term (a monomial), $x^2 - 4x + 4$ has three, and $a + b - c + 2$ has four.'
          }
        ]
      }
    },
    {
      id: 'mkpf1-combine',
      type: 'text' as const,
      content: `## Adding and Subtracting Polynomials

### Adding

Drop the parentheses and combine like terms.

$$(2x^2 + 5x - 3) + (4x^2 - x + 7)$$

- $x^2$ terms: $2x^2 + 4x^2 = 6x^2$
- $x$ terms: $5x - x = 4x$
- constants: $-3 + 7 = 4$

Answer: $6x^2 + 4x + 4$.

### Subtracting: the minus hits EVERY term

A minus sign in front of parentheses changes the sign of **every** term inside, not just the first one.

$$(5x^2 + 3x - 4) - (2x^2 - x + 6)$$

**Step 1.** Distribute the minus: $5x^2 + 3x - 4 - 2x^2 + x - 6$

**Step 2.** Combine:

- $5x^2 - 2x^2 = 3x^2$
- $3x + x = 4x$
- $-4 - 6 = -10$

Answer: $3x^2 + 4x - 10$.

> **Watch out:** If you change only the first sign, you get $3x^2 + 2x + 2$. That wrong answer is very likely to be one of the four choices.

### Evaluating a polynomial

To evaluate, substitute the number in parentheses, then follow the order of operations (exponents before multiplication).

At $x = -3$: $\\;x^2 - 4x + 5 = (-3)^2 - 4(-3) + 5 = 9 + 12 + 5 = 26$.

> **Key Fact:** $(-3)^2 = 9$, but $-3^2 = -9$. Always put a negative number in parentheses before you square it.`
    },
    {
      id: 'mkpf1-mc-add',
      type: 'multiple-choice' as const,
      content: '**Add, subtract, evaluate.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify $(3x^2 - 4x + 2) + (x^2 + 6x - 9)$.',
            options: ['$4x^2 + 2x - 7$', '$4x^2 - 10x - 7$', '$3x^2 + 2x - 7$', '$4x^4 + 2x^2 - 7$'],
            correctAnswer: 0,
            explanation: '$3x^2 + x^2 = 4x^2$, $-4x + 6x = 2x$, $2 - 9 = -7$. Adding like terms never changes the exponents, and $x^2$ has a coefficient of $1$, so the $x^2$ terms give $4x^2$.'
          },
          {
            question: 'What is the value of $2x^2 - 3x + 4$ when $x = -2$?',
            options: ['$6$', '$18$', '$-6$', '$10$'],
            correctAnswer: 1,
            explanation: '$2(-2)^2 - 3(-2) + 4 = 2(4) + 6 + 4 = 18$. Squaring $-2$ gives positive $4$, and $-3$ times $-2$ is $+6$. Getting $6$ means $-3(-2)$ was treated as $-6$.'
          }
        ]
      }
    },
    {
      id: 'mkpf1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Subtract step by step.** 🔽 Simplify $(6y^2 - 2y + 5) - (4y^2 + 3y - 1)$.',
      exercise: {
        dropdowns: [
          {
            label: 'After distributing the minus sign:',
            options: ['$6y^2 - 2y + 5 - 4y^2 + 3y - 1$', '$6y^2 - 2y + 5 - 4y^2 - 3y + 1$', '$6y^2 - 2y + 5 + 4y^2 + 3y - 1$', '$6y^2 - 2y + 5 - 4y^2 - 3y - 1$'],
            correctAnswer: 1
          },
          {
            label: 'The $y^2$ terms combine to:',
            options: ['$10y^2$', '$2y^4$', '$2y^2$', '$24y^2$'],
            correctAnswer: 2
          },
          {
            label: 'The $y$ terms combine to:',
            options: ['$-5y$', '$y$', '$5y$', '$-y$'],
            correctAnswer: 0
          },
          {
            label: 'The final answer is:',
            options: ['$2y^2 + y + 4$', '$2y^2 - 5y + 4$', '$2y^2 - 5y + 6$', '$10y^2 + y + 4$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$6y^2 - 2y + 5 - 4y^2 - 3y + 1$', '$2y^2$', '$-5y$', '$2y^2 - 5y + 6$'],
        hint1: 'The minus sign flips the sign of all three terms inside the second parentheses.',
        hint2: '$6y^2 - 4y^2$; then $-2y - 3y$.',
        hint3: 'Constants: $5 + 1$.',
        explanation: 'Distributing the minus gives $-4y^2 - 3y + 1$. Then $6y^2 - 4y^2 = 2y^2$, $-2y - 3y = -5y$ and $5 + 1 = 6$, so the result is $2y^2 - 5y + 6$. Flipping only the first sign leads to $2y^2 + y + 4$.'
      }
    },
    {
      id: 'mkpf1-input',
      type: 'input-boxes' as const,
      content: `**Simplify and evaluate.** ✍️

Simplify $4m + 9 - m + 2m - 12$ into the form $am + b$.

**1)** The coefficient $a$:

**2)** The constant $b$:

**3)** A separate expression: the value of $x^2 + 5x - 2$ when $x = -4$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '-3', '-6'],
        hint1: '$4m - m + 2m$: think $4 - 1 + 2$.',
        hint2: 'Constants: $9 - 12$.',
        hint3: '$(-4)^2 = 16$ and $5(-4) = -20$.',
        explanation: '(1) $4 - 1 + 2 = 5$, so $a = 5$. (2) $9 - 12 = -3$. (3) $(-4)^2 + 5(-4) - 2 = 16 - 20 - 2 = -6$.'
      }
    },
    {
      id: 'mkpf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- MK: **15 questions, 31 minutes**, about **2 minutes each**, no calculator, 4 choices, and it counts toward your **AFQT**
- **Terms** are separated by $+$ and $-$; the sign belongs to the term after it
- **Degree** = the highest exponent in the polynomial
- **Like terms** have the same letters with the same exponents; combine them by adding coefficients, and the exponents stay the same
- When subtracting, the minus sign changes **every** term in the parentheses
- Put negative numbers in parentheses before squaring: $(-3)^2 = 9$

> **Up Next:** Part 2 — multiplying monomials and polynomials, and the FOIL method.`
    }
  ]
};
