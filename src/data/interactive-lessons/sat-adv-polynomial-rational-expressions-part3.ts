export const lessonData = {
  topicSlug: 'sat-polynomial-rational-expressions-advanced',
  sections: [
    {
      id: 'prex3-drill-intro',
      type: 'text' as const,
      content: `# Polynomial & Rational Expressions: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Target about **90 seconds per question**. Before you compute anything on a rational item, do two things that cost five seconds each and save the item:

1. **Factor** every numerator and denominator you can see.
2. **Write the excluded values** in the margin: $x \\ne \\ldots$

Then solve, and finish by asking the only question that matters at this level: *is the number I computed the one the last sentence names?* On two of the four items below, the value your algebra produces first is an answer choice — and it is the wrong one.`
    },
    {
      id: 'prex3-q1',
      type: 'quiz' as const,
      question: 'Working alone, crew A can paint a mural in $x$ hours, and crew B can paint the same mural in $x + 4$ hours. Working together, the two crews paint it in $3.75$ hours. How many hours does crew B take working alone?',
      options: [
        '$10$',
        '$6$',
        '$3.75$',
        '$-2.5$'
      ],
      correctAnswer: 0,
      explanation: 'Rates add: $\\frac{1}{x} + \\frac{1}{x+4} = \\frac{1}{3.75} = \\frac{4}{15}$. Multiply by $15x(x+4)$: $15(x+4) + 15x = 4x(x+4)$, so $30x + 60 = 4x^{2} + 16x$ and $4x^{2} - 14x - 60 = 0$, i.e. $2x^{2} - 7x - 30 = 0 = (2x+5)(x-6)$. A time must be positive, so $x = 6$: crew A takes $6$ hours and crew B takes $x + 4 = 10$ hours. (Check: $\\frac{1}{6} + \\frac{1}{10} = \\frac{4}{15}$.) The traps: $6$ is crew A\'s time — the value the algebra produces, but the question names crew B. $-2.5$ is the rejected negative root. $3.75$ is the combined time, handed to you in the stem.'
    },
    {
      id: 'prex3-q2',
      type: 'quiz' as const,
      question: 'The graph of $f(x) = \\frac{3x^{2} - 11x - 4}{x - 4}$ is a straight line with a single point removed. What is the $y$-intercept of that line?',
      options: [
        '$-4$',
        '$1$',
        '$4$',
        '$13$'
      ],
      correctAnswer: 1,
      explanation: 'Factor the numerator: $3x^{2} - 11x - 4 = (3x + 1)(x - 4)$. Cancelling gives $f(x) = 3x + 1$ for $x \\ne 4$, a line with a hole at $(4, 13)$. Its $y$-intercept is $f(0) = 1$. The traps: $13$ is the $y$-coordinate of the HOLE — the number most students compute on the way through and then report, since the hole feels like the point of the problem. $4$ is the $x$-coordinate of the hole. $-4$ is the constant term of the original numerator, mistaken for an intercept without simplifying at all.'
    },
    {
      id: 'prex3-q3',
      type: 'quiz' as const,
      question: 'For $x \\ne 3$ and $x \\ne -3$, the expression $\\frac{4}{x-3} - \\frac{1}{x+3}$ is equivalent to $\\frac{ax + b}{x^{2} - 9}$, where $a$ and $b$ are constants. What is the value of $a + b$?',
      options: [
        '$3$',
        '$12$',
        '$15$',
        '$18$'
      ],
      correctAnswer: 3,
      explanation: 'The common denominator is $(x-3)(x+3) = x^{2} - 9$. Rewrite: $\\frac{4(x+3)}{x^{2}-9} - \\frac{1(x-3)}{x^{2}-9} = \\frac{4x + 12 - x + 3}{x^{2}-9} = \\frac{3x + 15}{x^{2}-9}$. So $a = 3$, $b = 15$, and $a + b = 18$. The traps: $12$ comes from failing to distribute the subtraction over both terms, writing $4x + 12 - x - 3 = 3x + 9$ and getting $a + b = 12$ — the most common error on this archetype. $3$ is $a$ alone and $15$ is $b$ alone, each an intermediate value the problem hands you on the way to the sum.'
    },
    {
      id: 'prex3-q4',
      type: 'quiz' as const,
      question: 'The concentration of a nutrient in a hydroponic tank, in grams per liter, is modeled by $N(t) = \\frac{180t}{t^{2} + 9}$, where $t$ is the number of hours since the nutrient was added. The concentration rises, reaches a single maximum, and then falls. What is that maximum concentration, in grams per liter?',
      options: [
        '$3$',
        '$6$',
        '$30$',
        '$60$'
      ],
      correctAnswer: 2,
      explanation: 'Ask which values $k$ are attainable. Setting $\\frac{180t}{t^{2}+9} = k$ gives $kt^{2} - 180t + 9k = 0$, which has a real solution only when the discriminant is nonnegative: $180^{2} - 4(k)(9k) \\ge 0$, so $32{,}400 \\ge 36k^{2}$ and $k \\le 30$. The maximum is $30$ grams per liter, attained when the discriminant is zero, at $t = 3$. The traps: $3$ is the TIME at which the maximum occurs, not the concentration — the wrong-coordinate error this archetype is built on. $60$ comes from evaluating $\\frac{180(3)}{9}$, dropping the $t^{2}$ term from the denominator. $6$ is $2t$, from doubling the time as though the model were symmetric about $t = 3$ in a way that doubles the input.'
    }
  ]
};
