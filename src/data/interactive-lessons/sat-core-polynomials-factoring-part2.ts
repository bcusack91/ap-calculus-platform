export const lessonData = {
  topicSlug: 'sat-polynomials-factoring-core-skills',
  sections: [
    {
      id: 'poly-core-p2-recap',
      type: 'text' as const,
      content: `# Polynomials and Factoring: Practice

**Part 2 of 2 — Run the Steps**

Factor in this order every time:

1. **GCF first.** Pull out the biggest number and the most $x$ letters that every term shares.
2. **Check for a difference of squares.** If what is left looks like $x^{2} - (\\text{a number})$ and that number is a perfect square, it factors as $(x - n)(x + n)$.
3. **Otherwise use the two-number trick.** For $x^{2} + bx + c$, find two numbers that multiply to $c$ and add to $b$.
4. **Multiply back out to check.** If you get the original expression, you factored correctly.

### The perfect squares worth memorizing

$4, 9, 16, 25, 36, 49, 64, 81, 100$

These come from $2^{2}, 3^{2}, 4^{2}, 5^{2}, 6^{2}, 7^{2}, 8^{2}, 9^{2}, 10^{2}$.

### Reading zeros off a factored polynomial

Once a polynomial is written as factors multiplied together, set each factor equal to $0$ and solve. For $f(x) = (x - 1)(x + 8)$, the zeros are $x = 1$ and $x = -8$. Each zero is also a place where the graph crosses the $x$-axis.`
    },
    {
      id: 'poly-core-p2-q1',
      type: 'quiz' as const,
      question: 'Factor $x^{2} + 9x + 20$.',
      options: ['$(x - 4)(x - 5)$', '$(x + 2)(x + 10)$', '$(x + 1)(x + 20)$', '$(x + 4)(x + 5)$'],
      correctAnswer: 3,
      explanation: 'The answer is $(x + 4)(x + 5)$. You need two numbers that multiply to $20$ and add to $9$. The pairs that multiply to $20$ are $1$ and $20$, which add to $21$; $2$ and $10$, which add to $12$; and $4$ and $5$, which add to $9$. So $4$ and $5$ are the pair. The choice $(x - 4)(x - 5)$ uses the right numbers but the wrong signs, since $-4$ and $-5$ add to $-9$.'
    },
    {
      id: 'poly-core-p2-q2',
      type: 'quiz' as const,
      question: 'Factor $x^{2} - 25$.',
      options: ['$(x - 5)^{2}$', '$(x - 5)(x + 5)$', '$(x + 5)^{2}$', '$(x - 25)(x + 1)$'],
      correctAnswer: 1,
      explanation: 'The answer is $(x - 5)(x + 5)$. This is a difference of squares, because $25$ is a perfect square: $5 \\times 5 = 25$. The pattern gives the same number twice, once with a minus and once with a plus. Check by multiplying: $(x - 5)(x + 5) = x^{2} + 5x - 5x - 25 = x^{2} - 25$. The middle terms cancel each other out. The choice $(x - 5)^{2}$ would multiply out to $x^{2} - 10x + 25$, which has an extra middle term.'
    },
    {
      id: 'poly-core-p2-q3',
      type: 'quiz' as const,
      question: 'Factor $6x^{3} + 9x^{2}$ completely.',
      options: ['$3x^{2}(2x + 3)$', '$3x(2x^{2} + 3x)$', '$x^{2}(6x + 9)$', '$9x^{2}(x + 1)$'],
      correctAnswer: 0,
      explanation: 'The answer is $3x^{2}(2x + 3)$. The biggest number that divides both $6$ and $9$ is $3$. For the letters, the terms have $x^{3}$ and $x^{2}$, and both contain at least $x^{2}$, so pull out $x^{2}$. That makes the greatest common factor $3x^{2}$. Dividing gives $6x^{3} \\div 3x^{2} = 2x$ and $9x^{2} \\div 3x^{2} = 3$, so the answer is $3x^{2}(2x + 3)$. The other choices pull out only part of the shared factor, so they are not complete.'
    },
    {
      id: 'poly-core-p2-q4',
      type: 'quiz' as const,
      question: 'What are the zeros of $f(x) = (x - 2)(x + 6)$?',
      options: ['$-2$ and $6$', '$2$ and $6$', '$2$ and $-6$', '$-2$ and $-6$'],
      correctAnswer: 2,
      explanation: 'The answer is $2$ and $-6$. Set each factor equal to zero and solve. From $x - 2 = 0$, add $2$ to both sides to get $x = 2$. From $x + 6 = 0$, subtract $6$ from both sides to get $x = -6$. The choice $-2$ and $6$ comes from reading the signs straight out of the parentheses instead of solving each small equation.'
    }
  ]
}
