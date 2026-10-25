export const asvabMkAlgebraExpressionsPart2Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf2-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 2 of 7 — Multiplying Polynomials and FOIL**

Multiplying is where the ASVAB starts to test whether you really know the rules. Three skills cover almost every question:

1. Multiplying **monomials** (exponent rules)
2. **Distributing** a monomial across a polynomial
3. Multiplying two **binomials** with FOIL, including the special products

## Skill 1: Multiplying Monomials

Multiply the numbers. For the same variable, **add** the exponents.

| Rule | Example |
|:---|:---|
| $x^a \\cdot x^b = x^{a+b}$ | $x^2 \\cdot x^6 = x^8$ |
| $(x^a)^b = x^{a \\cdot b}$ | $(x^3)^4 = x^{12}$ |
| $(cx^a)^b = c^b x^{a \\cdot b}$ | $(2x^5)^3 = 8x^{15}$ |

**Worked example.** $(4x^3)(-3x^2)$

- Numbers: $4 \\cdot (-3) = -12$
- Variables: $x^3 \\cdot x^2 = x^{3+2} = x^5$
- Answer: $-12x^5$

**Worked example.** $(2a^2b)(5ab^3)$

- Numbers: $2 \\cdot 5 = 10$
- $a^2 \\cdot a = a^3$ (a plain $a$ is $a^1$) and $b \\cdot b^3 = b^4$
- Answer: $10a^3b^4$

> **Key Fact:** Multiplying powers of the same base → **add** exponents. A power raised to a power → **multiply** exponents. Mixing these two up is the most common exponent mistake on the test.`
    },
    {
      id: 'mkpf2-mc-mono',
      type: 'multiple-choice' as const,
      content: '**Monomials.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify $(5a^3)(-2a^4)$.',
            options: ['$-10a^{12}$', '$3a^7$', '$-10a^7$', '$-7a^7$'],
            correctAnswer: 2,
            explanation: 'Multiply the numbers: $5 \\cdot (-2) = -10$. Add the exponents: $a^{3+4} = a^7$. Multiplying the exponents gives $a^{12}$, which is the power-of-a-power rule used in the wrong place.'
          },
          {
            question: 'Simplify $(3y^2)^3$.',
            options: ['$9y^6$', '$27y^6$', '$27y^5$', '$3y^6$'],
            correctAnswer: 1,
            explanation: 'The cube applies to the $3$ and to $y^2$: $3^3 = 27$ and $(y^2)^3 = y^6$. Forgetting to cube the $3$ (or computing $3 \\cdot 3 = 9$) gives the wrong coefficient.'
          }
        ]
      }
    },
    {
      id: 'mkpf2-distribute',
      type: 'text' as const,
      content: `## Skill 2: Distributing a Monomial

Multiply the outside term by **every** term inside the parentheses.

**Worked example.** $3x(2x^2 - 5x + 1)$

- $3x \\cdot 2x^2 = 6x^3$
- $3x \\cdot (-5x) = -15x^2$
- $3x \\cdot 1 = 3x$
- Answer: $6x^3 - 15x^2 + 3x$

**Worked example with a negative.** $-2y(y^2 + 4y - 3)$

- $-2y \\cdot y^2 = -2y^3$
- $-2y \\cdot 4y = -8y^2$
- $-2y \\cdot (-3) = +6y$
- Answer: $-2y^3 - 8y^2 + 6y$

A negative outside flips the sign of every term. Negative times negative is positive.

## Skill 3: Multiplying Two Binomials (FOIL)

**FOIL** is a checklist so you multiply every term of the first binomial by every term of the second:

| Letter | Multiply | For $(x + 4)(x - 7)$ |
|:---:|:---|:---|
| **F** | First terms | $x \\cdot x = x^2$ |
| **O** | Outer terms | $x \\cdot (-7) = -7x$ |
| **I** | Inner terms | $4 \\cdot x = 4x$ |
| **L** | Last terms | $4 \\cdot (-7) = -28$ |

Combine the middle terms: $-7x + 4x = -3x$. Answer: $x^2 - 3x - 28$.

**Worked example.** $(2x - 3)(x + 5)$

- F: $2x \\cdot x = 2x^2$
- O: $2x \\cdot 5 = 10x$
- I: $-3 \\cdot x = -3x$
- L: $-3 \\cdot 5 = -15$
- Answer: $2x^2 + 7x - 15$

> **Shortcut for $(x + a)(x + b)$:** the answer is $x^2 + (a + b)x + ab$. For $(x + 4)(x - 7)$: $a + b = -3$ and $ab = -28$. This shortcut is also the key to factoring in Part 3.`
    },
    {
      id: 'mkpf2-mc-dist',
      type: 'multiple-choice' as const,
      content: '**Distribute.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Simplify $-4x(x^2 - 3x + 2)$.',
            options: ['$-4x^3 - 12x^2 - 8x$', '$-4x^3 + 12x^2 + 2$', '$-4x^2 + 12x - 8$', '$-4x^3 + 12x^2 - 8x$'],
            correctAnswer: 3,
            explanation: '$-4x \\cdot x^2 = -4x^3$, $-4x \\cdot (-3x) = +12x^2$, $-4x \\cdot 2 = -8x$. Every term gets multiplied (including the $2$), and the exponents go up by one because you multiply by $x$.'
          },
          {
            question: 'Which expression equals $5n(2n - 7)$?',
            options: ['$10n - 35n$', '$10n^2 - 35n$', '$10n^2 - 7$', '$7n^2 - 35$'],
            correctAnswer: 1,
            explanation: '$5n \\cdot 2n = 10n^2$ and $5n \\cdot (-7) = -35n$. The $-7$ must be multiplied by $5n$ too, and $n \\cdot n = n^2$, not $n$.'
          }
        ]
      }
    },
    {
      id: 'mkpf2-dropdown',
      type: 'dropdown-select' as const,
      content: '**FOIL it.** 🔽 Multiply $(x - 6)(x + 2)$.',
      exercise: {
        dropdowns: [
          {
            label: 'First:',
            options: ['$2x$', '$x^2$', '$2x^2$', '$x$'],
            correctAnswer: 1
          },
          {
            label: 'Outer:',
            options: ['$2x$', '$-2x$', '$-6x$', '$x^2$'],
            correctAnswer: 0
          },
          {
            label: 'Inner:',
            options: ['$6x$', '$-12$', '$2x$', '$-6x$'],
            correctAnswer: 3
          },
          {
            label: 'Last:',
            options: ['$12$', '$-4$', '$-12$', '$-8$'],
            correctAnswer: 2
          },
          {
            label: 'Simplified product:',
            options: ['$x^2 - 4x - 12$', '$x^2 + 4x - 12$', '$x^2 - 8x - 12$', '$x^2 - 12$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$x^2$', '$2x$', '$-6x$', '$-12$', '$x^2 - 4x - 12$'],
        hint1: 'Outer terms are $x$ (from the first binomial) and $2$ (from the second).',
        hint2: 'Inner terms are $-6$ and $x$.',
        hint3: 'Combine the outer and inner terms: $2x - 6x$.',
        explanation: 'F: $x^2$. O: $2x$. I: $-6x$. L: $-6 \\cdot 2 = -12$. Middle terms: $2x - 6x = -4x$. Product: $x^2 - 4x - 12$. Check with the shortcut: $-6 + 2 = -4$ and $(-6)(2) = -12$.'
      }
    },
    {
      id: 'mkpf2-special',
      type: 'text' as const,
      content: `## Special Products: Learn These by Sight

Three products show up again and again. Knowing them saves time and helps with factoring later.

| Pattern | Result | Example |
|:---|:---|:---|
| Square of a sum | $(a + b)^2 = a^2 + 2ab + b^2$ | $(x + 3)^2 = x^2 + 6x + 9$ |
| Square of a difference | $(a - b)^2 = a^2 - 2ab + b^2$ | $(x - 4)^2 = x^2 - 8x + 16$ |
| Sum times difference | $(a + b)(a - b) = a^2 - b^2$ | $(x + 6)(x - 6) = x^2 - 36$ |

**Why $(x + 3)^2$ is NOT $x^2 + 9$:** squaring means multiplying the binomial by itself. FOIL $(x + 3)(x + 3)$: $x^2 + 3x + 3x + 9 = x^2 + 6x + 9$. The middle term $6x$ is real, and the test will offer you $x^2 + 9$ as a trap.

**Why the middle term disappears in $(a + b)(a - b)$:** FOIL $(x + 6)(x - 6)$: $x^2 - 6x + 6x - 36$. The outer and inner terms cancel, leaving $x^2 - 36$.

**One more: a binomial times a trinomial.** Same idea, more terms. Multiply each term of the binomial by each term of the trinomial.

$(x + 2)(x^2 - x + 3)$

- $x(x^2 - x + 3) = x^3 - x^2 + 3x$
- $2(x^2 - x + 3) = 2x^2 - 2x + 6$
- Add: $x^3 + x^2 + x + 6$

> **Key Fact:** $(a + b)^2$ always has a middle term of $2ab$. If a choice squares each piece and stops, it is wrong.`
    },
    {
      id: 'mkpf2-mc-special',
      type: 'multiple-choice' as const,
      content: '**Special products.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Expand $(x + 5)^2$.',
            options: ['$x^2 + 25$', '$x^2 + 5x + 25$', '$x^2 + 10x + 10$', '$x^2 + 10x + 25$'],
            correctAnswer: 3,
            explanation: '$(x + 5)(x + 5) = x^2 + 5x + 5x + 25 = x^2 + 10x + 25$. The middle term is $2 \\cdot x \\cdot 5 = 10x$. Leaving it out gives $x^2 + 25$, the classic trap.'
          },
          {
            question: 'Multiply $(3x - 2)(3x + 2)$.',
            options: ['$9x^2 - 4$', '$9x^2 - 12x - 4$', '$3x^2 - 4$', '$9x^2 + 4$'],
            correctAnswer: 0,
            explanation: 'Sum times difference gives a difference of squares: $(3x)^2 - 2^2 = 9x^2 - 4$. The outer and inner terms ($6x$ and $-6x$) cancel, and the $3$ gets squared along with the $x$.'
          }
        ]
      }
    },
    {
      id: 'mkpf2-input',
      type: 'input-boxes' as const,
      content: `**Multiply and match.** ✍️

Write $(2x + 3)(x - 4)$ in the form $ax^2 + bx + c$.

**1)** $a$:

**2)** $b$:

**3)** $c$:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-5', '-12'],
        hint1: 'First: $2x \\cdot x$.',
        hint2: 'Outer $2x \\cdot (-4)$ plus inner $3 \\cdot x$.',
        hint3: 'Last: $3 \\cdot (-4)$.',
        explanation: 'F: $2x^2$. O: $-8x$. I: $3x$. L: $-12$. Combine: $2x^2 - 5x - 12$, so $a = 2$, $b = -5$, $c = -12$.'
      }
    },
    {
      id: 'mkpf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Same base multiplied → **add** exponents; power of a power → **multiply** exponents
- Distribute to **every** term; a negative outside flips every sign
- FOIL = First, Outer, Inner, Last, then combine the middle terms
- $(x + a)(x + b) = x^2 + (a + b)x + ab$
- $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$ (never forget the middle term)
- $(a + b)(a - b) = a^2 - b^2$ (the middle terms cancel)

> **Up Next:** Part 3 — running FOIL in reverse: factoring.`
    }
  ]
};
