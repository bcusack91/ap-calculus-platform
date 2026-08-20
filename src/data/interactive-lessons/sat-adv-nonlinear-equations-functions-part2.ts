export const lessonData = {
  topicSlug: 'sat-nonlinear-equations-functions-advanced',
  sections: [
    {
      id: 'na2-traps',
      type: 'text' as const,
      content: `# Nonlinear Equations & Functions: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Faster Routes**

### The Four Standard Distractors

1. **The extraneous root.** Any answer built from the root that fails the original radical equation. Fast filter: a root making the non-radical side negative is extraneous — no substitution needed.
2. **The wrong coordinate.** Vieta gives the sum of $x$-coordinates in one step, so the test asks for the sum of $y$-coordinates. The $x$-sum is always a choice. Push each $x$ through the LINE (never the parabola) to get the $y$-values.
3. **The unflipped inequality.** Isolating $|x - c|$ usually requires dividing by a negative. Forgetting the flip turns "inside the interval" into "outside" and produces a mirror-image answer set.
4. **The half-width / endpoint / count confusion.** From $|x - 6| \\le 4$: the half-width is $4$, the interval is $[2, 10]$, its length is $8$, and it contains $9$ integers. All four numbers appear in the choices — know which one was asked.

### Speed Techniques

- **Extraneous pre-check:** before solving $\\sqrt{ax + b} = x - c$, note that any valid root must satisfy $x \\ge c$. This tells you in advance which quadratic root will survive.
- **Symmetry beats substitution:** points on a parabola with equal $y$-values straddle the axis symmetrically. Distance conditions become one axis computation plus one half-step.
- **Desmos exploits:** graph both sides of a radical equation — the intersections are the TRUE solutions only, extraneous roots never appear. For tangency, add a slider and watch the two intersection points merge. For absolute-value models, graph the expression and the threshold line; the answer is read off the intersection $x$-values.
- **Integer counting:** the integers in $[a, b]$ number $b - a + 1$. The "$+1$" is the whole trap — the test plants $b - a$ every time.`
    },
    {
      id: 'na2-q1',
      type: 'quiz' as const,
      question: 'Solving $\\sqrt{2x + 3} = x - 6$ by squaring gives $x^{2} - 14x + 33 = 0$, so $x = 3$ or $x = 11$. A student reports both as solutions. What did they miss?',
      options: [
        '$x = 11$ fails the original equation, so only $x = 3$ works',
        'Squaring loses a solution, so there is a third root',
        'The domain of $\\sqrt{2x + 3}$ excludes $x = 11$',
        '$x = 3$ makes the right side $-3$, and a square root cannot equal a negative number'
      ],
      correctAnswer: 3,
      explanation: 'At $x = 3$ the right side is $3 - 6 = -3$, but $\\sqrt{2(3) + 3} = 3 \\ge 0$ — the two sides cannot match, so $x = 3$ is extraneous. At $x = 11$: $\\sqrt{25} = 5$ and $11 - 6 = 5$ — valid. The pre-check $x \\ge 6$ (right side must be nonnegative) would have killed $x = 3$ before any substitution. Squaring can only ADD fake roots, never lose real ones.'
    },
    {
      id: 'na2-q2',
      type: 'quiz' as const,
      question: 'The graphs of $y = x^{2} - 2x - 3$ and $y = 4x - 8$ intersect at two points. What is the sum of the $y$-coordinates of those points?',
      options: [
        '$5$',
        '$6$',
        '$8$',
        '$12$'
      ],
      correctAnswer: 2,
      explanation: 'Set equal: $x^{2} - 6x + 5 = 0$, so $x = 1$ and $x = 5$. Use the LINE for the $y$-values: $4(1) - 8 = -4$ and $4(5) - 8 = 12$, summing to $8$. The trap is $6$: the sum of the $x$-coordinates via Vieta ($-b/a$), which the question did not ask for. $5$ is the product of the $x$-coordinates, and $12$ is one $y$-value alone. Shortcut for the strong: sum of $y = 4(\\text{sum of } x) - 16 = 24 - 16 = 8$.'
    },
    {
      id: 'na2-q3',
      type: 'quiz' as const,
      question: 'A sensor\'s signal strength is $S = 90 - 6|x - 4|$, where $x$ is the dial setting. Settings with $S \\ge 60$ are usable. What is the LENGTH of the interval of usable settings?',
      options: [
        '$5$',
        '$9$',
        '$10$',
        '$11$'
      ],
      correctAnswer: 2,
      explanation: 'Require $90 - 6|x - 4| \\ge 60$, so $-6|x - 4| \\ge -30$; dividing by $-6$ FLIPS the inequality: $|x - 4| \\le 5$, giving $-1 \\le x \\le 9$ — length $9 - (-1) = 10$. The planted numbers: $5$ is the half-width (the natural stopping point of the algebra), $9$ is the right endpoint, and $11$ is the integer COUNT of the interval. Forgetting the flip gives the outside of the interval instead — an infinite set, which the choices quietly rule out.'
    }
  ]
};
