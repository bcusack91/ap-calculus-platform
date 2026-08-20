export const lessonData = {
  topicSlug: 'sat-nonlinear-equations-functions-advanced',
  sections: [
    {
      id: 'na1-patterns',
      type: 'text' as const,
      content: `# Nonlinear Equations & Functions: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Four archetypes generate almost every hard nonlinear item.

### Archetype 1: Tangency via the Discriminant

"The line and the parabola intersect at exactly one point" — set equal, collect on one side, discriminant $= 0$. The parameter you solve for is almost never the final answer: the item asks for the $y$-coordinate of the tangent point, or a rejected case filters the parameter ("$m$ is negative").

**Worked example.** $y = x^{2} - 6x + 13$ meets $y = mx + 4$ once, $m < 0$. Then $x^{2} - (6+m)x + 9 = 0$ needs $(6+m)^{2} = 36$, so $m = 0$ or $m = -12$; take $m = -12$. The tangent point: $x^{2} + 6x + 9 = 0$ gives $x = -3$, and $y = 9 + 18 + 13 = 40$.

### Archetype 2: Radical Equations and Extraneous Roots

Squaring both sides manufactures fake solutions. After solving, check each root in the ORIGINAL equation — any root that makes the right side negative is dead on arrival, because $\\sqrt{\\phantom{x}}$ never outputs a negative. The item then asks for a value built from the surviving root, and the extraneous root's version is a planted choice.

### Archetype 3: Line–Parabola Intersections and Symmetry

Two tools:

- **Vieta on the intersection equation:** the sum of the $x$-coordinates of the intersection points is $-\\frac{b}{a}$ of the combined quadratic. But if the question asks about $y$-coordinates, push each $x$ through the LINE (cheaper than the parabola).
- **Symmetry for horizontal lines:** if $y = k$ cuts a parabola at two points $d$ apart, those points sit $\\frac{d}{2}$ on each side of the axis $x = -\\frac{b}{2a}$. Find the axis, step out, evaluate once.

### Archetype 4: Absolute-Value Models

$P = 400 - 25|q - 18|$ style. Isolate the absolute value, and remember: **dividing by a negative flips the inequality**. $|x - c| \\le r$ means the interval $[c - r,\\, c + r]$ — length $2r$, and it contains $2r + 1$ integers when $c$ and $r$ are integers.`
    },
    {
      id: 'na1-q1',
      type: 'quiz' as const,
      question: 'In the $xy$-plane, the graph of $y = x^{2} + 2x + 5$ and the line $y = 4x + c$ intersect at exactly one point. What is the value of $c$?',
      options: [
        '$1$',
        '$4$',
        '$6$',
        '$8$'
      ],
      correctAnswer: 1,
      explanation: 'Set equal: $x^{2} + 2x + 5 = 4x + c$ gives $x^{2} - 2x + (5 - c) = 0$. Discriminant zero: $4 - 4(5 - c) = 0$, so $5 - c = 1$ and $c = 4$. The tangent point is $x = 1$, $y = 8$ — and both of those intermediates are planted: $1$ is the $x$-coordinate, $8$ is the $y$-coordinate. $6$ comes from the slip $5 + 1$.'
    },
    {
      id: 'na1-q2',
      type: 'quiz' as const,
      question: 'The equation $\\sqrt{x + 7} = x + 1$ has one extraneous root and one valid root when solved by squaring. If $x$ is the valid root, what is the value of $5x + 1$?',
      options: [
        '$-14$',
        '$-1$',
        '$2$',
        '$11$'
      ],
      correctAnswer: 3,
      explanation: 'Squaring: $x + 7 = x^{2} + 2x + 1$, so $x^{2} + x - 6 = 0$ and $(x + 3)(x - 2) = 0$, giving $x = -3$ or $x = 2$. Check $x = -3$: right side is $-2$, but a square root cannot be negative — extraneous. Check $x = 2$: $\\sqrt{9} = 3$ and $2 + 1 = 3$ — valid. So $5(2) + 1 = 11$. $-14$ is $5(-3) + 1$, built from the extraneous root; $2$ is the root itself (the question asked for $5x + 1$); $-1$ is the sum of both roots.'
    },
    {
      id: 'na1-q3',
      type: 'quiz' as const,
      question: 'In the $xy$-plane, the horizontal line $y = k$ intersects the graph of $y = x^{2} - 8x + 3$ at two points that are exactly $6$ units apart. What is the value of $k$?',
      options: [
        '$-13$',
        '$-4$',
        '$1$',
        '$7$'
      ],
      correctAnswer: 1,
      explanation: 'The axis of symmetry is $x = \\frac{8}{2} = 4$, so points $6$ apart sit at $x = 1$ and $x = 7$. Evaluate once: $k = 1 - 8 + 3 = -4$ (check at $x = 7$: $49 - 56 + 3 = -4$). $-13$ is the vertex $y$-value ($16 - 32 + 3$), where the line would touch at only ONE point; $1$ and $7$ are the $x$-coordinates of the intersection points — intermediates, not $k$.'
    }
  ]
};
