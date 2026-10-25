export const asvabMkAlgebraExpressionsPart4Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf4-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 4 of 7 — Special Patterns and Algebraic Fractions**

Two factoring patterns are worth memorizing because you can spot them in seconds. One of them, the **difference of squares**, is named in the official MK sample topics.

## Pattern 1: Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

It is the "sum times difference" product from Part 2, run backward. Look for: **two terms**, both perfect squares, with a **minus** sign between them.

| Expression | Square roots | Factored |
|:---|:---|:---|
| $x^2 - 49$ | $x$ and $7$ | $(x + 7)(x - 7)$ |
| $9y^2 - 16$ | $3y$ and $4$ | $(3y + 4)(3y - 4)$ |
| $2x^2 - 50$ | GCF $2$ first: $2(x^2 - 25)$ | $2(x + 5)(x - 5)$ |

**Hard version.** $x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$. The piece $x^2 - 4$ is another difference of squares, so keep going.

> **Watch out:** A **sum** of squares, like $x^2 + 25$, does **not** factor with whole numbers. And $(x - 5)^2$ is not the same as $x^2 - 25$; it equals $x^2 - 10x + 25$.

### A mental-math trick

Difference of squares turns ugly arithmetic into easy arithmetic, which matters when you have no calculator:

$$51^2 - 49^2 = (51 + 49)(51 - 49) = 100 \\cdot 2 = 200$$

## Pattern 2: Perfect-Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2 \\qquad a^2 - 2ab + b^2 = (a - b)^2$$

Test: the first and last terms are perfect squares, and the middle term is **2 times** their square roots.

- $x^2 + 12x + 36$: $\\sqrt{x^2} = x$, $\\sqrt{36} = 6$, and $2 \\cdot x \\cdot 6 = 12x$ ✓. So it is $(x + 6)^2$.
- $4x^2 - 20x + 25$: roots $2x$ and $5$, and $2 \\cdot 2x \\cdot 5 = 20x$ ✓. Middle sign is minus, so $(2x - 5)^2$.`
    },
    {
      id: 'mkpf4-mc-patterns',
      type: 'multiple-choice' as const,
      content: '**Spot the pattern.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor $x^2 - 64$.',
            options: ['$(x - 8)^2$', '$(x + 8)(x - 8)$', '$(x + 8)^2$', '$(x - 32)(x + 2)$'],
            correctAnswer: 1,
            explanation: '$x^2 - 64$ is a difference of squares with roots $x$ and $8$: $(x + 8)(x - 8)$. $(x - 8)^2$ would give $x^2 - 16x + 64$, and $(x - 32)(x + 2)$ has a middle term of $-30x$.'
          },
          {
            question: 'Factor $25a^2 - 9$.',
            options: ['$(25a + 3)(a - 3)$', '$(5a - 3)^2$', '$(5a + 3)(5a - 3)$', '$(5a + 9)(5a - 1)$'],
            correctAnswer: 2,
            explanation: 'The square roots are $5a$ (since $(5a)^2 = 25a^2$) and $3$. So $25a^2 - 9 = (5a + 3)(5a - 3)$. Squaring $5a - 3$ adds a middle term of $-30a$.'
          },
          {
            question: 'Without a calculator, find $72^2 - 28^2$.',
            options: ['$1936$', '$4400$', '$5184$', '$3600$'],
            correctAnswer: 1,
            explanation: 'Use $a^2 - b^2 = (a + b)(a - b)$: $(72 + 28)(72 - 28) = 100 \\cdot 44 = 4400$. $1936$ is $44^2$ (squaring the difference), and $5184$ is just $72^2$.'
          },
          {
            question: 'Which is the factored form of $x^2 - 14x + 49$?',
            options: ['$(x - 7)^2$', '$(x + 7)^2$', '$(x + 7)(x - 7)$', '$(x - 14)(x - 7)$'],
            correctAnswer: 0,
            explanation: '$49 = 7^2$ and $2 \\cdot x \\cdot 7 = 14x$, with a minus sign in the middle, so it is $(x - 7)^2$. $(x + 7)^2$ has $+14x$, and $(x + 7)(x - 7)$ has no middle term at all.'
          }
        ]
      }
    },
    {
      id: 'mkpf4-fractions',
      type: 'text' as const,
      content: `## Algebraic Fractions

### Dividing monomials: subtract exponents

$$\\frac{x^7}{x^3} = x^{7-3} = x^4 \\qquad \\frac{6x^3}{2x} = 3x^2 \\qquad \\frac{10a^4b^2}{5ab^2} = 2a^3$$

Divide the numbers, subtract exponents for each variable. In the last one, $\\frac{b^2}{b^2} = 1$, so $b$ disappears.

### Simplifying a fraction of polynomials

**Factor the top and the bottom, then cancel common FACTORS.**

**Worked example.** $\\frac{x^2 - 9}{x + 3}$

- Top: $(x + 3)(x - 3)$
- Cancel the common factor $(x + 3)$
- Answer: $x - 3$ (for $x \\neq -3$)

**Worked example.** $\\frac{x^2 + 5x + 6}{x^2 - 4}$

- Top: $(x + 2)(x + 3)$. Bottom: $(x + 2)(x - 2)$
- Cancel $(x + 2)$
- Answer: $\\frac{x + 3}{x - 2}$

### The cancelling trap

You may cancel only things that are **multiplied**, never pieces that are **added**.

| Wrong | Why it is wrong | Right |
|:---|:---|:---|
| $\\frac{x + 6}{6} = x$ | The $6$ on top is added, not multiplied | Leave it as $\\frac{x + 6}{6}$ |
| $\\frac{x^2 + 4}{x + 2} = x + 2$ | $x^2 + 4$ is a sum of squares; it does not factor | It does not simplify |

Test it with a number: at $x = 2$, $\\frac{x + 6}{6} = \\frac{8}{6}$, not $2$.

> **Key Fact:** Factor first, cancel second. If you cannot write the top and bottom as products, you cannot cancel anything.`
    },
    {
      id: 'mkpf4-mc-frac',
      type: 'multiple-choice' as const,
      content: '**Simplify.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify $\\frac{12x^5}{4x^2}$.',
            options: ['$3x^7$', '$8x^3$', '$48x^7$', '$3x^3$'],
            correctAnswer: 3,
            explanation: 'Divide the numbers: $12 \\div 4 = 3$. Subtract exponents: $x^{5-2} = x^3$. Adding exponents is the rule for multiplying, and $12 - 4 = 8$ subtracts the coefficients instead of dividing them.'
          },
          {
            question: 'Which expression can be simplified by cancelling?',
            options: ['$\\frac{x + 5}{5}$', '$\\frac{x^2 + 9}{x + 3}$', '$\\frac{5x + 10}{5}$', '$\\frac{x + 2}{x + 7}$'],
            correctAnswer: 2,
            explanation: '$5x + 10 = 5(x + 2)$, so $\\frac{5(x + 2)}{5} = x + 2$. In $\\frac{x + 5}{5}$ the $5$ on top is added, $x^2 + 9$ does not factor, and $x + 2$ and $x + 7$ share no factor.'
          }
        ]
      }
    },
    {
      id: 'mkpf4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Factor, then cancel.** 🔽 Simplify $\\frac{x^2 - 16}{x^2 + 2x - 8}$.',
      exercise: {
        dropdowns: [
          {
            label: 'The numerator factors as:',
            options: ['$(x - 4)^2$', '$(x + 4)(x - 4)$', '$(x + 8)(x - 2)$', '$(x + 16)(x - 1)$'],
            correctAnswer: 1
          },
          {
            label: 'The denominator factors as:',
            options: ['$(x - 4)(x + 2)$', '$(x + 8)(x - 1)$', '$(x + 4)(x - 2)$', '$(x - 4)(x - 2)$'],
            correctAnswer: 2
          },
          {
            label: 'Simplified:',
            options: ['$\\frac{x - 4}{x - 2}$', '$\\frac{x + 4}{x - 2}$', '$\\frac{-16}{2x - 8}$', '$\\frac{x - 4}{x + 2}$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$(x + 4)(x - 4)$', '$(x + 4)(x - 2)$', '$\\frac{x - 4}{x - 2}$'],
        hint1: 'The numerator is a difference of squares.',
        hint2: 'Denominator: two numbers that multiply to $-8$ and add to $2$.',
        hint3: 'Cancel the factor the top and bottom share.',
        explanation: 'Top: $(x + 4)(x - 4)$. Bottom: $4 \\cdot (-2) = -8$ and $4 - 2 = 2$, so $(x + 4)(x - 2)$. Cancel $(x + 4)$ to get $\\frac{x - 4}{x - 2}$. Cancelling the $x^2$ terms to reach $\\frac{-16}{2x - 8}$ cancels added terms, which is not allowed.'
      }
    },
    {
      id: 'mkpf4-input',
      type: 'input-boxes' as const,
      content: `**Cancel and evaluate.** ✍️

**1)** $\\frac{x^2 + 7x + 10}{x + 5} = x + k$. What is $k$?

**2)** Simplify $\\frac{x^2 - 81}{x - 9}$, then find its value at $x = 11$:

**3)** Without a calculator: $35^2 - 15^2 = $`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '20', '1000'],
        hint1: 'Factor the top: what two numbers multiply to $10$ and add to $7$?',
        hint2: '$x^2 - 81 = (x + 9)(x - 9)$.',
        hint3: '$(35 + 15)(35 - 15)$.',
        explanation: '(1) $x^2 + 7x + 10 = (x + 5)(x + 2)$; cancel $(x + 5)$ to get $x + 2$, so $k = 2$. (2) $\\frac{(x + 9)(x - 9)}{x - 9} = x + 9$, and at $x = 11$ that is $20$. (3) $(35 + 15)(35 - 15) = 50 \\cdot 20 = 1000$.'
      }
    },
    {
      id: 'mkpf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Difference of squares:** $a^2 - b^2 = (a + b)(a - b)$. Two square terms with a minus between them
- A **sum** of squares ($x^2 + 25$) does not factor
- **Perfect-square trinomial:** first and last terms are squares and the middle is $2ab$ → $(a \\pm b)^2$
- Dividing monomials: divide the numbers, **subtract** the exponents
- Algebraic fractions: **factor first**, then cancel common **factors**, never added terms
- $a^2 - b^2 = (a + b)(a - b)$ is also a no-calculator arithmetic shortcut

> **Up Next:** Part 5 — using factoring to solve quadratic equations.`
    }
  ]
};
