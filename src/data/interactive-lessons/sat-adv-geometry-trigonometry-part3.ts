export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-advanced',
  sections: [
    {
      id: 'geot-adv-p3-intro',
      type: 'text' as const,
      content: `# Geometry & Trigonometry: Timed Drill

**Part 3 of 3 — Four Items at Test Pace**

Give yourself about **90 seconds per question**. These are built from the four highest-frequency hard-tier skeletons: the two-observation height, the reversed midpoint, the similar-figure area difference, and the boxed-in polygon with a cost step.

Before each answer, run the two-second checklist:

1. **What quantity was asked?** Height or distance? Area or cost? The small triangle or the quadrilateral?
2. **Did I scale?** A ratio gives a shape, not a size.
3. **Is my answer the right order of magnitude?** A perpendicular distance is shorter than a vertical one; a part is smaller than its whole.`
    },
    {
      id: 'geot-adv-p3-q1',
      type: 'quiz' as const,
      question: `From a point on level ground, the angle of elevation to the top of a monument is $34$ degrees. From a second point $30$ m farther from the monument, along the same straight line, the angle of elevation is $21$ degrees. To the nearest tenth of a meter, how tall is the monument?`,
      options: ['$11.5$', '$20.2$', '$26.7$', '$103.2$'],
      correctAnswer: 2,
      explanation: `Let $h$ be the height. The near distance is $\\frac{h}{\\tan 34^{\\circ}}$ and the far distance is $\\frac{h}{\\tan 21^{\\circ}}$, and they differ by $30$: $h\\left(\\frac{1}{\\tan 21^{\\circ}} - \\frac{1}{\\tan 34^{\\circ}}\\right) = 30$, so $h(2.6051 - 1.4826) = 30$ and $h = \\frac{30}{1.1225} \\approx 26.7$ m. The traps: $103.2$ subtracts the TANGENTS instead of their reciprocals — the single most common error in this archetype; $20.2$ is $30\\tan 34^{\\circ}$ and $11.5$ is $30\\tan 21^{\\circ}$, both treating the $30$ m walk as though it were the full horizontal distance to the monument.`
    },
    {
      id: 'geot-adv-p3-q2',
      type: 'quiz' as const,
      question: `In the $xy$-plane, $M(4, -3)$ is the midpoint of $\\overline{AB}$, where $A = (-2, 5)$. What is the distance from $B$ to the origin, to the nearest tenth?`,
      options: ['$5.0$', '$10.0$', '$14.9$', '$20.0$'],
      correctAnswer: 2,
      explanation: `Run the midpoint backwards: $B = 2M - A = (8 - (-2),\\; -6 - 5) = (10, -11)$. Then $OB = \\sqrt{10^{2} + 11^{2}} = \\sqrt{221} \\approx 14.9$. The traps: $10.0$ uses $B = M - A = (6, -8)$, the most common midpoint reversal error; $5.0$ is the distance from $M$ to the origin — the right formula on the wrong point; $20.0$ is the length of $\\overline{AB}$ itself, which is exactly twice the distance from $A$ to $M$ and therefore feels like a confirmed result.`
    },
    {
      id: 'geot-adv-p3-q3',
      type: 'quiz' as const,
      question: `Triangle $ABC$ is similar to triangle $DEF$, with side $AB = 4$ corresponding to side $DE = 10$. The area of triangle $DEF$ is $126$ square units greater than the area of triangle $ABC$. What is the area, in square units, of triangle $ABC$?`,
      options: ['$20.2$', '$24$', '$84$', '$150$'],
      correctAnswer: 1,
      explanation: `The linear scale factor is $k = \\frac{10}{4} = 2.5$, so the area factor is $k^{2} = 6.25$. If the small area is $A$, then $6.25A - A = 126$, so $5.25A = 126$ and $A = 24$. (Check: $DEF = 150$, and $150 - 24 = 126$.) The traps: $84$ uses the LINEAR factor for area, solving $2.5A - A = 126$; $150$ is triangle $DEF$'s area — the correct chain reported for the wrong triangle; $20.2$ divides $126$ by $6.25$ instead of by the difference $5.25$, forgetting that the small triangle's own area is part of the larger figure.`
    },
    {
      id: 'geot-adv-p3-q4',
      type: 'quiz' as const,
      question: `A plot of land has corners at $(0, 2)$, $(6, 0)$, $(9, 6)$, and $(3, 8)$, listed in order, where each unit represents $1$ meter. Sod costs $8$ dollars per square meter. What is the total cost, in dollars, of sodding the entire plot?`,
      options: ['$42$', '$96$', '$336$', '$576$'],
      correctAnswer: 2,
      explanation: `Enclose the plot in the rectangle from $x = 0$ to $x = 9$ and $y = 0$ to $y = 8$, whose area is $9 \\times 8 = 72$. Every corner of the plot lies on a side of that rectangle, so four right triangles are cut off: bottom left, legs $6$ and $2$, area $6$; bottom right, legs $3$ and $6$, area $9$; top right, legs $6$ and $2$, area $6$; top left, legs $3$ and $6$, area $9$. The plot's area is $72 - (6 + 9 + 6 + 9) = 42$ square meters, so the cost is $42 \\times 8 = 336$ dollars. The traps: $42$ is the AREA, stopping one step before the cost the question asked for; $96$ subtracts the corner triangles without halving them ($72 - 60 = 12$, then $12 \\times 8$); $576$ prices the whole $9 \\times 8$ rectangle instead of the plot.`
    }
  ]
}
