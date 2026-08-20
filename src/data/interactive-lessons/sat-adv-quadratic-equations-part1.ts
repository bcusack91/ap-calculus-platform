export const lessonData = {
  topicSlug: 'sat-quadratic-equations-advanced',
  sections: [
    {
      id: 'qa1-patterns',
      type: 'text' as const,
      content: `# Quadratic Equations: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

At the 700-800 level, quadratics questions stop asking you to solve equations and start asking you to reason **about** them. Three archetypes cover almost every hard item.

### Archetype 1: Discriminant With a Parameter

A line and a parabola "intersect at exactly one point," or an equation "has no real solutions," and a constant ($k$, $m$, $b$, $c$) is unknown. The move is always the same:

1. Set the two expressions equal and move everything to one side.
2. Write the discriminant $b^{2} - 4ac$ **in terms of the parameter**.
3. Set it $= 0$ (tangent / one solution), $> 0$ (two), or $< 0$ (none).

**Worked example.** The line $y = 8x + b$ is tangent to $y = 2x^{2} - 12x + 19$. Setting equal: $2x^{2} - 20x + (19 - b) = 0$. Tangency means discriminant zero: $400 - 8(19 - b) = 0$, so $400 = 152 - 8b$ and $b = -31$.

**The 700-800 twist:** the question rarely asks for the parameter itself. It asks for the $x$- or $y$-coordinate of the tangent point, or a value built from it. Read the last sentence twice — every intermediate value ($m$, then $x$, then $y$) appears among the choices.

### Archetype 2: Vertex Optimization With a Hidden Conversion

Max height, max revenue, min cost. Vertex at $t = -\\frac{b}{2a}$, then substitute back. Hard-tier versions bury one extra step:

- **Units:** "$x$ hundred units" — the vertex $x = 7$ means the answer is $700$.
- **Build the model yourself:** "each \\$2 fee increase loses 10 members" means revenue is $(40 + 2n)(300 - 10n)$ — expand, then vertex.
- **Whole-number restriction:** if the vertex lands at $n = 3.75$ but $n$ must be a whole number, test $n = 3$ AND $n = 4$. The vertex value itself is unattainable and will be a choice.`
    },
    {
      id: 'qa1-vieta',
      type: 'text' as const,
      content: `### Archetype 3: Vieta's Shortcuts (Sum and Product of Roots)

For $ax^{2} + bx + c = 0$ with roots $r$ and $s$:

- $r + s = -\\frac{b}{a}$
- $rs = \\frac{c}{a}$

Hard items ask for expressions **built from** the roots so that you never need the roots themselves:

- $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = -\\frac{b}{c}$
- $r^{2} + s^{2} = (r + s)^{2} - 2rs$
- $(r - s)^{2} = (r + s)^{2} - 4rs$

**Worked example.** For $3x^{2} + 7x - 6 = 0$: $\\frac{1}{r} + \\frac{1}{s} = \\frac{-7/3}{-2} = \\frac{7}{6}$. Ten seconds, no quadratic formula, no radicals.

**Sign discipline** is the whole game: two of the four answer choices will differ from the answer only by a dropped negative.`
    },
    {
      id: 'qa1-q1',
      type: 'quiz' as const,
      question: 'In the $xy$-plane, the graph of $y = x^{2} + 4x + k$ and the line $y = 2x - 5$ intersect at exactly one point. What is the value of $k$?',
      options: [
        '$-6$',
        '$-4$',
        '$-1$',
        '$5$'
      ],
      correctAnswer: 1,
      explanation: 'Set equal: $x^{2} + 4x + k = 2x - 5$ gives $x^{2} + 2x + (k + 5) = 0$. One intersection means discriminant zero: $4 - 4(k + 5) = 0$, so $k + 5 = 1$ and $k = -4$. The trap choices: $-1$ is the $x$-coordinate of the tangent point (from $x^{2} + 2x + 1 = 0$), $-6$ comes from the sign slip $4 + 4(k+5) = 0$, and $5$ comes from setting $k + 5 = 0$ instead of the discriminant.'
    },
    {
      id: 'qa1-q2',
      type: 'quiz' as const,
      question: 'A drone\'s height in meters, $t$ seconds after launch, is $h(t) = -5t^{2} + 30t + 2$. What is the maximum height, in meters, the drone reaches?',
      options: [
        '$3$',
        '$45$',
        '$47$',
        '$92$'
      ],
      correctAnswer: 2,
      explanation: 'Vertex at $t = -\\frac{30}{2(-5)} = 3$ seconds. Then $h(3) = -5(9) + 30(3) + 2 = -45 + 90 + 2 = 47$ meters. The classic trap: $3$ is the TIME of the maximum, not the height — always the most-picked wrong answer. $45$ is the squared term alone, and $92$ is $90 + 2$ with the $-45$ dropped.'
    },
    {
      id: 'qa1-q3',
      type: 'quiz' as const,
      question: 'The solutions of $2x^{2} - 9x + 4 = 0$ are $r$ and $s$. What is the value of $r^{2} + s^{2}$?',
      options: [
        '$\\frac{65}{4}$',
        '$\\frac{73}{4}$',
        '$\\frac{81}{4}$',
        '$\\frac{97}{4}$'
      ],
      correctAnswer: 0,
      explanation: 'Vieta: $r + s = \\frac{9}{2}$ and $rs = 2$. Then $r^{2} + s^{2} = (r+s)^{2} - 2rs = \\frac{81}{4} - 4 = \\frac{65}{4}$. (Check: the roots are $\\frac{1}{2}$ and $4$, and $\\frac{1}{4} + 16 = \\frac{65}{4}$.) $\\frac{81}{4}$ forgets to subtract $2rs$ entirely; $\\frac{73}{4}$ subtracts $rs$ only once; $\\frac{97}{4}$ ADDS $2rs$ instead of subtracting.'
    }
  ]
};
