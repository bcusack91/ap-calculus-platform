export const lessonData = {
  topicSlug: 'sat-circles-advanced',
  sections: [
    {
      id: 'circ-adv-p1-intro',
      type: 'text' as const,
      content: `# Circles: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

Almost every hard circle item begins the same way: **the circle is handed to you in general form**, and nothing can happen until you complete the square. The difficulty is never the completing — it is what gets asked afterwards.

### Archetype 1: General Form → Center and Radius

$$x^{2} + y^{2} + Dx + Ey + F = 0$$

Halve each linear coefficient, square it, add it to both sides. From $x^{2} + y^{2} - 6x + 4y - 12 = 0$:

$$(x - 3)^{2} + (y + 2)^{2} = 12 + 9 + 4 = 25$$

Center $(3, -2)$, radius $5$ — **not** $25$. The single most reliable trap in this entire topic is an option built from $r^{2}$ where $r$ belongs.

**The leading-coefficient variant.** If the equation opens $2x^{2} + 2y^{2} - \\ldots$ or $3x^{2} + 3y^{2} - \\ldots$, you must **divide through first**. Completing the square on the undivided equation produces a clean, plausible, and completely wrong radius.

### Archetype 2: Where the Circle Meets an Axis or a Horizontal Line

To find where a circle crosses the $y$-axis, set $x = 0$ and solve the resulting quadratic in $y$; the chord length is the **distance between the two roots**. A line $y = c$ works identically. Two facts do the work:

- The chord on $y = c$ has half-length $\\sqrt{r^{2} - (c - k)^{2}}$, where $(h, k)$ is the center.
- If that expression is zero, the line is **tangent** — which is how "meets at exactly one point" items are built.

### Archetype 3: Tangent Line at a Given Point

The tangent is **perpendicular to the radius** at the point of contact. So: slope of radius $\\rightarrow$ negative reciprocal $\\rightarrow$ point-slope through the contact point $\\rightarrow$ whatever intercept was requested. Using the radius's own slope is the planted error.

### Archetype 4: Tangency as a Distance Condition

When a line is tangent to a circle but no contact point is given, tangency means **the distance from the center to the line equals $r$**:

$$\\frac{|Ah + Bk - C|}{\\sqrt{A^{2} + B^{2}}} = r$$

This turns "for what $k$ is $y = 2x + k$ tangent?" into a one-line absolute-value equation instead of a discriminant slog.

### Archetype 5: Sectors, Arcs, and Rotation

Two formulas, and the units decide which:

- **Radians**: arc $= r\\theta$, sector area $= \\frac{1}{2}r^{2}\\theta$.
- **Degrees**: arc $= \\frac{\\theta}{360}(2\\pi r)$, sector area $= \\frac{\\theta}{360}(\\pi r^{2})$.

Hard items deliberately put **one angle in degrees and the other in radians in the same question**. Rolling-wheel and revolution problems are arc length wearing a costume: one revolution is $2\\pi$ radians, and rolling without slipping means distance travelled $=$ arc length.

### Archetype 6: The Annulus

A path of uniform width $w$ around a circle of radius $r$ has area $\\pi\\left[(r + w)^{2} - r^{2}\\right]$ — **never** $\\pi w^{2}$. Multiply by a depth for volume, then by a unit price for cost, and check which of those three the question actually wants.`
    },
    {
      id: 'circ-adv-p1-q1',
      type: 'quiz' as const,
      question: `In the $xy$-plane, a circle is given by $3x^{2} + 3y^{2} - 12x + 30y + 36 = 0$. What is the circumference of this circle, to the nearest tenth?`,
      options: ['$25.9$', '$53.4$', '$94.2$', '$106.8$'],
      correctAnswer: 0,
      explanation: `Divide through by $3$ FIRST: $x^{2} + y^{2} - 4x + 10y + 12 = 0$. Completing the square gives $(x - 2)^{2} + (y + 5)^{2} = -12 + 4 + 25 = 17$, so $r = \\sqrt{17}$ and the circumference is $2\\pi\\sqrt{17} \\approx 25.9$. The traps: $94.2$ skips the division and completes the square on the original equation, producing the tidy but wrong $r = 15$; $106.8$ uses $r^{2} = 17$ as though it were the radius; $53.4$ computes the AREA $\\pi r^{2} = 17\\pi$ instead of the circumference.`
    },
    {
      id: 'circ-adv-p1-q2',
      type: 'quiz' as const,
      question: `In the $xy$-plane, the circle $x^{2} + y^{2} - 6x + 4y - 12 = 0$ crosses the $y$-axis at two points. What is the distance between those two points?`,
      options: ['$4$', '$8$', '$9.17$', '$10$'],
      correctAnswer: 1,
      explanation: `On the $y$-axis, $x = 0$, so $y^{2} + 4y - 12 = 0$, which factors as $(y + 6)(y - 2) = 0$. The crossings are $y = -6$ and $y = 2$, a distance of $8$ apart. The traps: $4$ subtracts the absolute values ($6 - 2$) instead of finding the true separation across zero; $9.17$ is the chord on the $x$-AXIS ($2\\sqrt{21}$), the right method applied to the wrong axis; $10$ is the diameter — the circle has $r = 5$ — which is the longest chord, not this one.`
    },
    {
      id: 'circ-adv-p1-q3',
      type: 'quiz' as const,
      question: `In the $xy$-plane, a circle has center $(2, -1)$ and passes through the point $(5, 3)$. The line tangent to the circle at $(5, 3)$ crosses the $y$-axis at what value of $y$?`,
      options: ['$-3.67$', '$-0.75$', '$6.75$', '$9$'],
      correctAnswer: 2,
      explanation: `The radius to $(5, 3)$ has slope $\\frac{3 - (-1)}{5 - 2} = \\frac{4}{3}$, so the tangent has the negative reciprocal slope $-\\frac{3}{4}$. Through $(5, 3)$: $y = -\\frac{3}{4}x + \\frac{27}{4}$, giving a $y$-intercept of $6.75$. The traps: $-3.67$ uses the RADIUS's slope $\\frac{4}{3}$ for the tangent line; $-0.75$ takes the reciprocal but drops the negative sign, using $\\frac{3}{4}$; $9$ is the $x$-intercept of the correct tangent line — right line, wrong axis.`
    }
  ]
}
