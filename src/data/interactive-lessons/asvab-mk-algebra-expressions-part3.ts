export const asvabMkAlgebraExpressionsPart3Data = {
  topicSlug: 'asvab-mk-algebra-expressions',
  sections: [
    {
      id: 'mkpf3-intro',
      type: 'text' as const,
      content: `# 🧮 Polynomials, Factoring and Quadratics

**Part 3 of 7 — Factoring Out the GCF and Factoring Trinomials**

**Factoring** is multiplying in reverse. Instead of turning $(x + 3)(x + 4)$ into $x^2 + 7x + 12$, you start with $x^2 + 7x + 12$ and find $(x + 3)(x + 4)$.

On the ASVAB, factoring shows up two ways: "Which is the factored form of ...?" and "Which of these is a factor of ...?" It is also the main tool for solving quadratics in Part 5.

## Step 1, Always: Pull Out the GCF

The **greatest common factor (GCF)** is the largest number and the highest power of each variable that divides **every** term.

**Worked example.** Factor $6x^3 + 9x^2$.

- Numbers: the GCF of $6$ and $9$ is $3$
- Variables: the smallest power of $x$ is $x^2$
- GCF: $3x^2$
- Divide each term by $3x^2$: $\\frac{6x^3}{3x^2} = 2x$ and $\\frac{9x^2}{3x^2} = 3$
- Answer: $3x^2(2x + 3)$

**Worked example.** Factor $8a^2b - 12ab^2$.

- GCF of $8$ and $12$ is $4$; smallest powers are $a$ and $b$
- GCF: $4ab$
- Answer: $4ab(2a - 3b)$

**Check by multiplying back:** $4ab \\cdot 2a = 8a^2b$ and $4ab \\cdot (-3b) = -12ab^2$. ✓

> **Key Fact:** "Factor completely" means nothing more can come out. $2x(3x^2 + 6x)$ is not complete, because $3x$ still divides both terms inside.`
    },
    {
      id: 'mkpf3-mc-gcf',
      type: 'multiple-choice' as const,
      content: '**GCF practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor $12x^4 - 18x^2$ completely by taking out the greatest common factor.',
            options: ['$2x^2(6x^2 - 9)$', '$6x^2(2x^2 - 18)$', '$6x^2(2x^2 - 3)$', '$6x^4(2 - 3x^2)$'],
            correctAnswer: 2,
            explanation: 'The GCF of $12$ and $18$ is $6$, and the smallest power of $x$ is $x^2$, so take out $6x^2$: $\\frac{12x^4}{6x^2} = 2x^2$ and $\\frac{18x^2}{6x^2} = 3$. Using $2x^2$ leaves a common factor of $3$ inside, and $6x^4$ does not divide $18x^2$.'
          },
          {
            question: 'Which is the GCF of $15m^3n^2$ and $25m^2n^4$?',
            options: ['$5m^3n^4$', '$5m^2n^2$', '$75m^3n^4$', '$5mn$'],
            correctAnswer: 1,
            explanation: 'Numbers: the GCF of $15$ and $25$ is $5$. Variables: take the smaller power of each, $m^2$ and $n^2$. The larger powers belong to the least common multiple, not the GCF, and $5mn$ is a common factor but not the greatest one.'
          }
        ]
      }
    },
    {
      id: 'mkpf3-trinomials',
      type: 'text' as const,
      content: `## Factoring $x^2 + bx + c$

From Part 2: $(x + p)(x + q) = x^2 + (p + q)x + pq$.

So to factor $x^2 + bx + c$, find two numbers that:

- **multiply** to $c$ (the constant), and
- **add** to $b$ (the middle coefficient)

**Worked example.** $x^2 + 7x + 12$

| Pairs that multiply to $12$ | Sum |
|:---:|:---:|
| $1, 12$ | $13$ |
| $2, 6$ | $8$ |
| $3, 4$ | $7$ ✓ |

Answer: $(x + 3)(x + 4)$.

### Let the signs do half the work

| $c$ is | $b$ is | Signs of the two numbers | Example |
|:---|:---|:---|:---|
| positive | positive | both positive | $x^2 + 7x + 12 = (x + 3)(x + 4)$ |
| positive | negative | both negative | $x^2 - 9x + 20 = (x - 4)(x - 5)$ |
| negative | either | one positive, one negative; the larger one has the sign of $b$ | $x^2 + 2x - 15 = (x + 5)(x - 3)$ |

**Worked example.** $x^2 - 5x - 24$

- $c = -24$ is negative, so the signs differ; $b = -5$, so the bigger number is negative
- Pairs for $24$: $(1, 24), (2, 12), (3, 8), (4, 6)$. The pair that differs by $5$ is $3$ and $8$
- Numbers: $-8$ and $+3$ (product $-24$, sum $-5$)
- Answer: $(x - 8)(x + 3)$

### GCF first, then the trinomial

$2x^2 - 6x - 20 = 2(x^2 - 3x - 10) = 2(x - 5)(x + 2)$

### When the $x^2$ coefficient is not 1

For something like $2x^2 + 7x + 3$, the first terms must be $2x$ and $x$. Try placing the factors of $3$ and check the middle term with FOIL:

- $(2x + 3)(x + 1)$: middle term $2x + 3x = 5x$ ✗
- $(2x + 1)(x + 3)$: middle term $6x + x = 7x$ ✓

Answer: $(2x + 1)(x + 3)$.

> **Key Fact:** You can always check a factoring answer by multiplying it back out. On a multiple-choice test, that check takes about 15 seconds.`
    },
    {
      id: 'mkpf3-mc-tri',
      type: 'multiple-choice' as const,
      content: '**Factor the trinomial.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor $x^2 + 9x + 14$.',
            options: ['$(x + 1)(x + 14)$', '$(x - 2)(x - 7)$', '$(x + 3)(x + 6)$', '$(x + 2)(x + 7)$'],
            correctAnswer: 3,
            explanation: '$2 \\cdot 7 = 14$ and $2 + 7 = 9$. The pair $1$ and $14$ multiplies to $14$ but adds to $15$; both-negative signs would give $-9x$; $3 \\cdot 6 = 18$, not $14$.'
          },
          {
            question: 'Factor $x^2 - 3x - 28$.',
            options: ['$(x - 7)(x + 4)$', '$(x + 7)(x - 4)$', '$(x - 14)(x + 2)$', '$(x - 7)(x - 4)$'],
            correctAnswer: 0,
            explanation: 'You need a product of $-28$ and a sum of $-3$: $-7$ and $4$. Swapping the signs gives $+3x$; $-14$ and $2$ give $-12x$; two negatives multiply to $+28$.'
          },
          {
            question: 'Which of the following is a factor of $x^2 - 11x + 30$?',
            options: ['$x + 5$', '$x - 3$', '$x - 5$', '$x + 6$'],
            correctAnswer: 2,
            explanation: '$x^2 - 11x + 30 = (x - 5)(x - 6)$, because $(-5)(-6) = 30$ and $-5 + (-6) = -11$. With a positive constant and a negative middle term, both numbers are negative, so no factor has a plus sign.'
          }
        ]
      }
    },
    {
      id: 'mkpf3-dropdown',
      type: 'dropdown-select' as const,
      content: '**GCF, then trinomial.** 🔽 Factor $3x^2 - 12x - 36$ completely.',
      exercise: {
        dropdowns: [
          {
            label: 'The GCF of all three terms is:',
            options: ['$3x$', '$3$', '$12$', '$6$'],
            correctAnswer: 1
          },
          {
            label: 'After taking it out, the trinomial left is:',
            options: ['$x^2 - 4x - 36$', '$x^2 - 4x - 12$', '$x^2 - 12x - 36$', '$x^2 + 4x - 12$'],
            correctAnswer: 1
          },
          {
            label: 'Two numbers that multiply to $-12$ and add to $-4$:',
            options: ['$-6$ and $2$', '$6$ and $-2$', '$-3$ and $4$', '$-4$ and $3$'],
            correctAnswer: 0
          },
          {
            label: 'Completely factored:',
            options: ['$3(x + 6)(x - 2)$', '$(3x - 6)(x + 2)$', '$3(x - 6)(x + 2)$', '$3(x - 4)(x + 3)$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['$3$', '$x^2 - 4x - 12$', '$-6$ and $2$', '$3(x - 6)(x + 2)$'],
        hint1: '$3$ divides $3$, $12$ and $36$, but the last term has no $x$.',
        hint2: 'Divide each term by $3$.',
        hint3: 'Product negative means opposite signs; the sum is negative, so the bigger number is negative.',
        explanation: 'The constant $-36$ has no $x$, so the GCF is just $3$: $3(x^2 - 4x - 12)$. Then $-6 \\cdot 2 = -12$ and $-6 + 2 = -4$, so the answer is $3(x - 6)(x + 2)$. The form $(3x - 6)(x + 2)$ multiplies out correctly but is not complete, because $3$ still comes out of $3x - 6$.'
      }
    },
    {
      id: 'mkpf3-input',
      type: 'input-boxes' as const,
      content: `**Fill in the factors.** ✍️

**1)** $2x^2 + 11x + 5 = (2x + a)(x + b)$. What is $a$?

**2)** What is $b$?

**3)** $x^2 - 2x - 35 = (x - p)(x + q)$, with $p$ and $q$ positive. What is $p$?

**4)** What is $q$?`,
      exercise: {
        boxes: 4,
        correctAnswers: ['1', '5', '7', '5'],
        hint1: 'The constants multiply to $5$, so they are $1$ and $5$ in some order.',
        hint2: 'Check the middle term: you need $11x$.',
        hint3: 'For $x^2 - 2x - 35$: numbers that multiply to $-35$ and add to $-2$.',
        explanation: '(1)–(2) $(2x + 1)(x + 5) = 2x^2 + 10x + x + 5 = 2x^2 + 11x + 5$, so $a = 1$ and $b = 5$. The other placement, $(2x + 5)(x + 1)$, gives a middle term of $7x$. (3)–(4) $-7 \\cdot 5 = -35$ and $-7 + 5 = -2$, so $(x - 7)(x + 5)$: $p = 7$, $q = 5$.'
      }
    },
    {
      id: 'mkpf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Always** take out the GCF first: the biggest number and the **smallest** power of each variable that every term shares
- $x^2 + bx + c$: find two numbers that **multiply to $c$** and **add to $b$**
- Signs: $c$ positive → same signs (matching $b$); $c$ negative → opposite signs, larger number takes the sign of $b$
- If the $x^2$ coefficient is not $1$, try the factor placements and check the middle term
- **Multiply back** to check any factoring answer

> **Up Next:** Part 4 — two patterns you can factor on sight, and simplifying algebraic fractions.`
    }
  ]
};
