export const lessonData = {
  topicSlug: 'sat-polynomials-factoring-advanced',
  sections: [
    {
      id: 'pa1-patterns',
      type: 'text' as const,
      content: `# Polynomials & Factoring: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

### Archetype 1: The Factor Theorem With a Parameter

"$x + 3$ is a factor of $p(x) = 2x^{3} + ax^{2} - 13x + 6$" means $p(-3) = 0$ — one substitution finds $a$. Then divide out the known factor and work with the leftover quadratic. The question asks about the OTHER zeros (their sum, a product, a difference), and the parameter value itself is planted as a wrong answer.

**Worked example.** $p(-3) = -54 + 9a + 39 + 6 = 9a - 9 = 0$ gives $a = 1$. Dividing $2x^{3} + x^{2} - 13x + 6$ by $x + 3$ leaves $2x^{2} - 5x + 2$, so the other zeros sum to $\\frac{5}{2}$ by Vieta — no need to find them.

### Archetype 2: Vieta Sees Through the Parameter

For $ax^{3} + bx^{2} + cx + d$: sum of zeros $= -\\frac{b}{a}$, product $= -\\frac{d}{a}$. The killer setup: "$x - 1$ is a factor of $3x^{3} - 12x^{2} + kx - 9$; what is the sum of the zeros?" You CAN find $k$ — but the sum is $-\\frac{-12}{3} = 4$ **no matter what $k$ is**. Spotting that the parameter is a decoy converts a 3-minute item into a 15-second one.

### Archetype 3: Special Patterns

- **Difference of squares, twice:** $16x^{4} - 81 = (4x^{2} - 9)(4x^{2} + 9)$, and only the first factor has real zeros.
- **Difference of cubes:** $x^{3} - 8 = (x - 2)(x^{2} + 2x + 4)$, so $\\frac{x^{3} - 8}{x - 2}$ IS the quadratic factor.
- **Sum of coefficients:** $P(1)$ = sum of the coefficients, in one substitution. Remainder on division by $x - c$ is $P(c)$ — never long-divide to find a remainder.

### Archetype 4: Factored Cubics in Context

$C(x) = x(2x - 3)(x - 4)$ models something; zeros are read off the factors ($0$, $\\frac{3}{2}$, $4$) — but the stem measures $x$ in HUNDREDS of units, asks for a difference rather than a value, or both. The algebra is the easy half; the last sentence is the hard half.`
    },
    {
      id: 'pa1-q1',
      type: 'quiz' as const,
      question: 'The binomial $x - 2$ is a factor of $p(x) = x^{3} + kx^{2} - 7x + 2$. What is the sum of the two zeros of $p$ OTHER than $x = 2$?',
      options: [
        '$-3$',
        '$-1$',
        '$1$',
        '$3$'
      ],
      correctAnswer: 0,
      explanation: 'Factor theorem: $p(2) = 8 + 4k - 14 + 2 = 4k - 4 = 0$, so $k = 1$. Then $x^{3} + x^{2} - 7x + 2 = (x - 2)(x^{2} + 3x - 1)$, and by Vieta the other two zeros sum to $-3$. No need to find the zeros themselves (they are irrational). $-1$ is the sum of ALL three zeros ($-b/a$), $1$ is the value of $k$ (the intermediate), and $3$ is the sign slip on $-3$.'
    },
    {
      id: 'pa1-q2',
      type: 'quiz' as const,
      question: '$x - 3$ is a factor of $P(x) = 2x^{3} - 10x^{2} + kx + 12$ for some constant $k$. What is the sum of ALL three zeros of $P$?',
      options: [
        '$-6$',
        '$-5$',
        '$3$',
        '$5$'
      ],
      correctAnswer: 3,
      explanation: 'The decoy is $k$: the sum of the zeros of $ax^{3} + bx^{2} + cx + d$ is $-\\frac{b}{a} = -\\frac{-10}{2} = 5$, regardless of $k$. Working out $k = 8$ first (via $P(3) = 0$) wastes a minute and changes nothing. $-5$ is the $\\frac{b}{a}$ sign error, $-6$ is the PRODUCT of the zeros ($-\\frac{d}{a}$) — the right Vieta relation aimed at the wrong question — and $3$ is the given zero alone.'
    },
    {
      id: 'pa1-q3',
      type: 'quiz' as const,
      question: 'What is the sum of the squares of the REAL zeros of $81x^{4} - 16$?',
      options: [
        '$0$',
        '$\\frac{4}{9}$',
        '$\\frac{8}{9}$',
        '$\\frac{16}{9}$'
      ],
      correctAnswer: 2,
      explanation: 'Factor twice: $81x^{4} - 16 = (9x^{2} - 4)(9x^{2} + 4) = (3x - 2)(3x + 2)(9x^{2} + 4)$. The factor $9x^{2} + 4$ is always positive, so the real zeros are $\\pm\\frac{2}{3}$. Squares: $\\frac{4}{9} + \\frac{4}{9} = \\frac{8}{9}$. $0$ is the sum of the zeros themselves; $\\frac{4}{9}$ is ONE square, forgetting the second real zero; $\\frac{16}{9}$ is the square of the difference between the zeros $\\left(\\frac{4}{3}\\right)^{2}$.'
    }
  ]
};
