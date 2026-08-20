export const lessonData = {
  topicSlug: 'sat-nonlinear-equations-functions-advanced',
  sections: [
    {
      id: 'na3-drill-intro',
      type: 'text' as const,
      content: `# Nonlinear Equations & Functions: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Budget about **75 seconds per question**. Opening moves: tangency $\\rightarrow$ discriminant; radical $\\rightarrow$ note which sign the non-radical side must have; symmetric points $\\rightarrow$ find the axis first; absolute value $\\rightarrow$ isolate, flip if you divide by a negative. Before clicking, confirm your number is the QUANTITY asked — coordinate, parameter, length, or count.`
    },
    {
      id: 'na3-q1',
      type: 'quiz' as const,
      question: 'A parabola $y = a(x + 2)^{2} - 3$ passes through $(0, 5)$. The line $y = -4x + b$ is tangent to the parabola. What is the value of $b$?',
      options: [
        '$-13$',
        '$-3$',
        '$-1$',
        '$2$'
      ],
      correctAnswer: 0,
      explanation: 'First $a$: $5 = a(2)^{2} - 3$ gives $a = 2$, so $y = 2x^{2} + 8x + 5$. Tangency: $2x^{2} + 8x + 5 = -4x + b$ means $2x^{2} + 12x + (5 - b) = 0$ with discriminant $144 - 8(5 - b) = 0$, so $144 = 40 - 8b$ and $b = -13$. (Check: $2x^{2} + 12x + 18 = 0$ gives the double root $x = -3$; parabola $2(1) - 3 = -1$, line $12 - 13 = -1$.) $2$ is $a$, $-3$ is the tangent $x$, $-1$ is the tangent $y$ — the full intermediate trail, all planted.'
    },
    {
      id: 'na3-q2',
      type: 'quiz' as const,
      question: 'When $\\sqrt{5x - 1} = x - 5$ is solved by squaring, one root is extraneous. If $x$ is the root that satisfies the original equation, what is the value of $x - 4$?',
      options: [
        '$-2$',
        '$9$',
        '$11$',
        '$15$'
      ],
      correctAnswer: 1,
      explanation: 'Squaring: $5x - 1 = x^{2} - 10x + 25$, so $x^{2} - 15x + 26 = 0$ and $(x - 2)(x - 13) = 0$: $x = 2$ or $x = 13$. Pre-check: the right side needs $x \\ge 5$, so $x = 2$ dies instantly. Verify $x = 13$: $\\sqrt{64} = 8 = 13 - 5$. Then $x - 4 = 9$. $-2$ is $2 - 4$, built from the extraneous root; $15$ is the sum of both roots; $11$ is $15 - 4$, the root-sum pushed through the final expression.'
    },
    {
      id: 'na3-q3',
      type: 'quiz' as const,
      question: 'A cafe\'s daily profit is modeled by $P = 300 - 20|d - 15|$ dollars, where $d$ is the number of daily specials prepared. For how many INTEGER values of $d$ is the profit at least $\\$220$?',
      options: [
        '$4$',
        '$8$',
        '$9$',
        '$19$'
      ],
      correctAnswer: 2,
      explanation: 'Require $300 - 20|d - 15| \\ge 220$, so $-20|d - 15| \\ge -80$ and (flip) $|d - 15| \\le 4$: $11 \\le d \\le 19$. Integer count: $19 - 11 + 1 = 9$. The plants: $4$ is the half-width, $8$ is $19 - 11$ (forgetting the $+1$), and $19$ is the right endpoint. The flip and the $+1$ are the two places this item is designed to bleed points.'
    },
    {
      id: 'na3-q4',
      type: 'quiz' as const,
      question: 'The horizontal line $y = k$ intersects the graph of $y = -x^{2} + 10x - 7$ at two points that are $8$ units apart. What is the value of $k$?',
      options: [
        '$1$',
        '$2$',
        '$9$',
        '$18$'
      ],
      correctAnswer: 1,
      explanation: 'Axis of symmetry: $x = -\\frac{10}{2(-1)} = 5$. Points $8$ apart straddle it at $x = 1$ and $x = 9$. Evaluate once: $k = -1 + 10 - 7 = 2$ (check at $x = 9$: $-81 + 90 - 7 = 2$). $18$ is the vertex maximum ($-25 + 50 - 7$), where the line would meet the parabola at exactly one point; $1$ and $9$ are the intersection $x$-coordinates. Symmetry turns this into two lines of arithmetic — no quadratic formula.'
    }
  ]
};
