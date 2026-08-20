export const lessonData = {
  topicSlug: 'sat-polynomials-factoring-advanced',
  sections: [
    {
      id: 'pa3-drill-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Budget about **75 seconds per question**. Opening moves: named factor $\\rightarrow$ substitute its zero; remainder $\\rightarrow$ evaluate, never divide; sum/product of zeros $\\rightarrow$ Vieta; quartic or cubic constant patterns $\\rightarrow$ look for difference of squares or cubes before anything else. Save the last 10 seconds to reread which quantity — and which UNIT — the stem wants.`
    },
    {
      id: 'pa3-q1',
      type: 'quiz' as const,
      question: 'For $x \\ne 3$, the expression $\\frac{x^{3} - 27}{x - 3}$ equals a quadratic function $g(x)$. What is the minimum value of $g$?',
      options: [
        '$-\\frac{3}{2}$',
        '$\\frac{27}{4}$',
        '$9$',
        '$27$'
      ],
      correctAnswer: 1,
      explanation: 'Difference of cubes: $x^{3} - 27 = (x - 3)(x^{2} + 3x + 9)$, so $g(x) = x^{2} + 3x + 9$. Complete the square: $g(x) = \\left(x + \\frac{3}{2}\\right)^{2} + \\frac{27}{4}$, so the minimum VALUE is $\\frac{27}{4}$, at $x = -\\frac{3}{2}$ (allowed, since only $x = 3$ is excluded). $-\\frac{3}{2}$ is the location of the minimum, the classic wrong-coordinate trap; $9$ is $g(0)$; $27$ is $g(3)$, the value at the excluded point.'
    },
    {
      id: 'pa3-q2',
      type: 'quiz' as const,
      question: 'One zero of $P(x) = x^{3} - 2x^{2} - 5x + 6$ is $x = 1$. What is the sum of the RECIPROCALS of the other two zeros?',
      options: [
        '$-\\frac{1}{6}$',
        '$\\frac{1}{6}$',
        '$\\frac{5}{6}$',
        '$1$'
      ],
      correctAnswer: 0,
      explanation: 'Divide by $x - 1$: the quotient is $x^{2} - x - 6 = (x - 3)(x + 2)$, so the other zeros are $3$ and $-2$. Reciprocals: $\\frac{1}{3} + \\left(-\\frac{1}{2}\\right) = \\frac{2 - 3}{6} = -\\frac{1}{6}$. (Vieta on the quotient does it without the zeros: $\\frac{r + s}{rs} = \\frac{1}{-6}$.) $\\frac{1}{6}$ is the sign flip; $1$ is the sum of the zeros THEMSELVES ($3 - 2$), stopping early; $\\frac{5}{6}$ adds the reciprocals with both signs dropped.'
    },
    {
      id: 'pa3-q3',
      type: 'quiz' as const,
      question: 'When $6x^{3} - 7x^{2} - 43x + 30$ is divided by $x - 3$, the quotient is $ax^{2} + bx + c$ with remainder $0$. What is $a + b + c$?',
      options: [
        '$-14$',
        '$-7$',
        '$7$',
        '$14$'
      ],
      correctAnswer: 2,
      explanation: 'Speed route: $a + b + c = Q(1)$, and since $P(x) = (x - 3)Q(x)$, we get $Q(1) = \\frac{P(1)}{1 - 3} = \\frac{6 - 7 - 43 + 30}{-2} = \\frac{-14}{-2} = 7$. (Synthetic division confirms $Q(x) = 6x^{2} + 11x - 10$: indeed $6 + 11 - 10 = 7$.) $-14$ is $P(1)$ itself, forgetting to divide by the divisor\'s value at $1$; $-7$ divides by $+2$ instead of $-2$; $14$ flips the final sign.'
    },
    {
      id: 'pa3-q4',
      type: 'quiz' as const,
      question: 'A model gives revenue $R(x) = -x^{3} + 12x^{2} - 20x$ thousand dollars, where $x$ is in HUNDREDS of units sold. Besides $x = 0$, revenue is zero at two sales levels. What is the SUM of those two levels, in UNITS?',
      options: [
        '$12$',
        '$800$',
        '$1000$',
        '$1200$'
      ],
      correctAnswer: 3,
      explanation: 'Factor: $R(x) = -x(x^{2} - 12x + 20) = -x(x - 2)(x - 10)$, so the nonzero levels are $x = 2$ and $x = 10$ hundred units. Their sum is $12$ hundred $= 1200$ units. (Vieta shortcut: the sum of the quadratic factor\'s zeros is $12$, read straight from $-12x$.) $12$ is the sum left unconverted; $800$ is the DIFFERENCE in units, the wrong quantity; $1000$ is the larger level alone in units.'
    }
  ]
};
