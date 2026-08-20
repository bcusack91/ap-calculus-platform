export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-advanced',
  sections: [
    {
      id: 'geot-adv-p3-intro',
      type: 'text' as const,
      content: `# Geometry & Trigonometry: Timed Drill

**Part 3 of 3 — Four Items at Test Pace**

Give yourself about **90 seconds per question**. These are built from the four highest-frequency hard-tier skeletons: the two-observation height, the reversed midpoint, the similar-figure area difference, and the shoelace-plus-cost polygon.

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
      explanation: `Let $h$ be the height. The near distance is $\\frac{h}{\\tan 34^{\\circ}}$ and the far distance is $\\frac{h}{\\tan 21^{\\circ}}$, and they differ by $30$: $h\\left(\\frac{1}{\\tan 21^{\\circ}} - \\frac{1}{\\tan 34^{\\circ}}\\right) = 30$, so $h(2.6051 - 1.4826) = 30$ and $h = \\frac{30}{1.1225} \\approx 26.7$ m. The traps: $103.2$ subtracts the TANGENTS instead of the cotangents — the single most common error in this archetype; $20.2$ is $30\\tan 34^{\\circ}$ and $11.5$ is $30\\tan 21^{\\circ}$, both treating the $30$ m walk as though it were the full horizontal distance to the monument.`
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
      question: `A plot of land has corners at $(0, 0)$, $(7, 2)$, $(9, 8)$, and $(2, 6)$, listed in order, where each unit represents $1$ meter. Sod costs $8$ dollars per square meter. What is the total cost, in dollars, of sodding the entire plot?`,
      options: ['$38$', '$304$', '$576$', '$608$'],
      correctAnswer: 1,
      explanation: `Shoelace: down-right products give $0(2) + 7(8) + 9(6) + 2(0) = 110$; down-left products give $0(7) + 2(9) + 8(2) + 6(0) = 34$. Area $= \\frac{|110 - 34|}{2} = 38$ square meters, so the cost is $38 \\times 8 = 304$ dollars. The traps: $38$ is the AREA, stopping one step before the cost the question asked for; $608$ omits the halving in the shoelace formula and then multiplies by $8$; $576$ prices the $9 \\times 8$ bounding box instead of the plot, the classic result of estimating rather than computing.`
    }
  ]
}
