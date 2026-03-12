export const satPolynomialsPart7Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 7 of 7 — Review & Advanced SAT Problems**

### Factoring Decision Tree

1. **GCF?** Always check first
2. **Two terms?** → Difference of squares ($a^2 - b^2$) or sum/difference of cubes
3. **Three terms?** → Trinomial factoring or completing the square
4. **Four terms?** → Factor by grouping

### Factor by Grouping

$x^3 + 3x^2 + 2x + 6$:
- Group: $(x^3 + 3x^2) + (2x + 6)$
- Factor each group: $x^2(x + 3) + 2(x + 3)$
- Factor the common binomial: $(x^2 + 2)(x + 3)$

### Special SAT Pattern: Disguised Quadratics

$x^4 - 5x^2 + 4$: let $u = x^2$:

$u^2 - 5u + 4 = (u - 1)(u - 4) = (x^2 - 1)(x^2 - 4) = (x+1)(x-1)(x+2)(x-2)$

This technique works whenever you see $ax^{2n} + bx^n + c$.`
    },
    {
      id: 'pf7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Advanced Factoring** 🎯',
      exercise: {
        questions: [
          {
            question: 'Factor completely: $x^4 - 16$',
            options: ['$(x^2 + 4)(x + 2)(x - 2)$', '$(x^2 + 4)(x^2 - 4)$', '$(x + 2)^2(x - 2)^2$', '$(x^2 - 4)^2$'],
            correctAnswer: 0,
            explanation: '$x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x+2)(x-2)$. Note: $x^2 + 4$ cannot be factored further over the reals.'
          },
          {
            question: 'If $x^2 + y^2 = 25$ and $xy = 12$, what is $(x + y)^2$?',
            options: ['$49$', '$37$', '$25$', '$61$'],
            correctAnswer: 0,
            explanation: '$(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 25 + 24 = 49$. Classic algebraic identity application.'
          },
          {
            question: 'Factor by grouping: $x^3 - 2x^2 + 5x - 10$',
            options: ['$(x^2 + 5)(x - 2)$', '$(x^2 - 5)(x + 2)$', '$(x^2 + 2)(x - 5)$', '$(x^2 - 2)(x + 5)$'],
            correctAnswer: 0,
            explanation: 'Group: $(x^3 - 2x^2) + (5x - 10) = x^2(x - 2) + 5(x - 2) = (x^2 + 5)(x - 2)$.'
          }
        ]
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Follow the factoring decision tree: GCF → pattern recognition → grouping
- Factor by grouping: split into pairs, factor each, extract common binomial
- Disguised quadratics: substitute $u = x^n$ to reveal the pattern
- Know the identity $(x+y)^2 = x^2 + 2xy + y^2$ — it appears on the SAT frequently`
    }
  ]
};
