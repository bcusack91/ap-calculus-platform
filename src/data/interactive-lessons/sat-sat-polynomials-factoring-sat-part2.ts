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
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`
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
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Always check for GCF first
- $a^2 - b^2 = (a+b)(a-b)$ — memorize this cold
- Perfect square trinomials: check if middle term = $2ab$
- "Factor completely" means keep going until no factor can be factored further`
    }
  ]
};
