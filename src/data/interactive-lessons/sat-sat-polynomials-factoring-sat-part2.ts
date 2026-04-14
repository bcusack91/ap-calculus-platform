export const satPolynomialsPart2Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 2 of 7 — Factoring Techniques**

### GCF Factoring

Always look for a Greatest Common Factor first:

$6x^3 + 9x^2 = 3x^2(2x + 3)$

### Difference of Squares

$$a^2 - b^2 = (a + b)(a - b)$$

**Example:** $x^2 - 49 = (x + 7)(x - 7)$

**Tricky example:** $4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$

### Perfect Square Trinomials

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

How to recognize: first and last terms are perfect squares, middle term is $\\pm 2 \\times \\sqrt{\\text{first}} \\times \\sqrt{\\text{last}}$.

$x^2 + 10x + 25 = (x + 5)^2$ because $2(x)(5) = 10x$ ✓

### Sum/Difference of Cubes (Rare on SAT)

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

---

### Worked Example 1 — Multi-Step Factoring

**Factor completely: $2x^3 - 18x$.**

| Step | Work |
|------|------|
| GCF | $2x(x^2 - 9)$ |
| Difference of squares | $2x(x + 3)(x - 3)$ |

### Worked Example 2 — Recognizing Perfect Squares

**Is $9x^2 - 30x + 25$ a perfect square trinomial?**

| Check | Result |
|-------|--------|
| First term: $(3x)^2$? | Yes ✓ |
| Last term: $5^2$? | Yes ✓ |
| Middle: $2(3x)(5) = 30x$? | Yes ✓ |
| Factor | $(3x - 5)^2$ |`
    },
    {
      id: 'pf2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Factoring Patterns** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor completely: $x^2 - 16$',
            options: ['$(x + 4)(x - 4)$', '$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)(x + 2)$'],
            correctAnswer: 0,
            explanation: 'This is a difference of squares: $x^2 - 4^2 = (x + 4)(x - 4)$.'
          },
          {
            question: 'Which is a perfect square trinomial?',
            options: ['$x^2 - 14x + 49$', '$x^2 - 14x + 48$', '$x^2 + 14x - 49$', '$x^2 + 7x + 49$'],
            correctAnswer: 0,
            explanation: '$x^2 - 14x + 49 = (x - 7)^2$. Check: $2(x)(7) = 14x$ ✓ and $7^2 = 49$ ✓.'
          },
          {
            question: 'Factor: $3x^3 - 12x$',
            options: ['$3x(x + 2)(x - 2)$', '$3x(x^2 - 4)$', '$3(x^3 - 4x)$', '$x(3x^2 - 12)$'],
            correctAnswer: 0,
            explanation: 'GCF first: $3x(x^2 - 4)$. Then difference of squares: $3x(x + 2)(x - 2)$. Always factor completely!'
          }
        ]
      }
    },
    {
      id: 'pf2-text2',
      type: 'text' as const,
      content: `### Factoring Trinomials: $ax^2 + bx + c$

**When $a = 1$:** Find two numbers that multiply to $c$ and add to $b$.

$x^2 + 7x + 12$: numbers that multiply to $12$ and add to $7$? → $3$ and $4$.

$= (x + 3)(x + 4)$

**When $a \\neq 1$:** Use the AC method.

### Worked Example 3 — AC Method

**Factor $6x^2 + 11x - 10$.**

| Step | Work |
|------|------|
| $a \\cdot c$ | $6 × (-10) = -60$ |
| Find pair: product $-60$, sum $11$ | $15$ and $-4$ |
| Rewrite middle | $6x^2 + 15x - 4x - 10$ |
| Group | $(6x^2 + 15x) + (-4x - 10)$ |
| Factor groups | $3x(2x + 5) - 2(2x + 5)$ |
| Extract common | $(3x - 2)(2x + 5)$ |

### Worked Example 4 — Signs Guide

| If $c > 0$, $b > 0$ | Both factors positive | $(x + ?)(x + ?)$ |
|---|---|---|
| If $c > 0$, $b < 0$ | Both factors negative | $(x - ?)(x - ?)$ |
| If $c < 0$ | One positive, one negative | $(x + ?)(x - ?)$ |`
    },
    {
      id: 'pf2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trinomial Factoring** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor: $x^2 - 5x - 14$',
            options: ['$(x - 7)(x + 2)$', '$(x + 7)(x - 2)$', '$(x - 7)(x - 2)$', '$(x + 7)(x + 2)$'],
            correctAnswer: 0,
            explanation: 'Need: multiply to $-14$, add to $-5$. That\'s $-7$ and $+2$. So $(x - 7)(x + 2)$.'
          },
          {
            question: 'Factor: $2x^2 + 5x - 3$',
            options: ['$(2x - 1)(x + 3)$', '$(2x + 1)(x - 3)$', '$(2x + 3)(x - 1)$', '$(2x - 3)(x + 1)$'],
            correctAnswer: 0,
            explanation: '$a \\cdot c = 2(-3) = -6$. Pair: $6$ and $-1$ (sum $5$). Rewrite: $2x^2 + 6x - x - 3 = 2x(x+3) - 1(x+3) = (2x-1)(x+3)$.'
          },
          {
            question: 'Factor completely: $5x^2 - 45$',
            options: ['$5(x + 3)(x - 3)$', '$(5x + 15)(x - 3)$', '$5(x^2 - 9)$', '$(x + 3)(5x - 15)$'],
            correctAnswer: 0,
            explanation: 'GCF first: $5(x^2 - 9)$. Then difference of squares: $5(x+3)(x-3)$.'
          }
        ]
      }
    },
    {
      id: 'pf2-dropdown',
      type: 'dropdown-select' as const,
      content: '**What Factoring Method?** 🔍\n\nChoose the best factoring technique for each expression.',
      exercise: {
        dropdowns: [
          { label: '$x^2 - 81$', options: ['Difference of squares', 'GCF', 'Trinomial factoring', 'Grouping'] },
          { label: '$4x^3 + 8x^2$', options: ['GCF first', 'Difference of squares', 'Trinomial factoring', 'Perfect square'] },
          { label: '$x^2 + 9x + 20$', options: ['Trinomial: find two numbers', 'Difference of squares', 'GCF', 'Perfect square'] },
          { label: '$16x^2 - 24x + 9$', options: ['Perfect square trinomial', 'Difference of squares', 'GCF', 'AC method'] }
        ],
        correctAnswers: ['Difference of squares', 'GCF first', 'Trinomial: find two numbers', 'Perfect square trinomial'],
        hint1: '$x^2 - 81 = x^2 - 9^2$ — two squares with a minus between them.',
        hint2: 'Both terms share $4x^2$ as a common factor.',
        hint3: 'What two numbers multiply to 20 and add to 9?',
        explanation: '$x^2 - 81$: difference of squares. $4x^3 + 8x^2$: GCF is $4x^2$. $x^2 + 9x + 20 = (x+4)(x+5)$. $16x^2 - 24x + 9 = (4x-3)^2$ since $2(4x)(3) = 24x$ ✓.'
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

| Method | When to Use | Example |
|--------|-------------|---------|
| GCF | Always check first | $6x^3 + 9x^2 = 3x^2(2x+3)$ |
| Diff. of squares | $a^2 - b^2$ | $x^2 - 49 = (x+7)(x-7)$ |
| Perfect square | $a^2 \\pm 2ab + b^2$ | $x^2 + 10x + 25 = (x+5)^2$ |
| Trinomial ($a=1$) | Find pair: product $c$, sum $b$ | $x^2 + 7x + 12 = (x+3)(x+4)$ |
| AC method ($a≠1$) | Product $ac$, sum $b$, then group | $6x^2 + 11x - 10$ |

- "Factor completely" = keep going until nothing else factors
- $a^2 + b^2$ does NOT factor over the reals
- Signs of $b$ and $c$ tell you the signs of the factor pair`
    }
  ]
};
