export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-advanced',
  sections: [
    {
      id: 'geot-adv-p1-intro',
      type: 'text' as const,
      content: `# Geometry & Trigonometry: The 700-800 Patterns

**Part 1 of 3 — The Archetypes Hard-Tier Items Are Built From**

This is the largest hard-tier bank on the test, and it splits cleanly into two halves: **right-triangle trigonometry** and **coordinate geometry**. Learn six archetypes and you have covered nearly all of it.

### Archetype 1: The Two-Observation Height Problem

A surveyor sights the top of a tower at $32^{\\circ}$, walks $40$ m closer, and sights it at $48^{\\circ}$. A drone hovers between two ground points $500$ m apart. A lighthouse keeper watches a boat approach.

Every one of these has the same skeleton. Let $h$ be the unknown height. The two horizontal distances are $\\frac{h}{\\tan\\theta_{1}}$ and $\\frac{h}{\\tan\\theta_{2}}$, and the given distance is either their **difference** (observer moves toward the object) or their **sum** (object is between the two observers). Factor out $h$:

$h\\left(\\frac{1}{\\tan 32^{\\circ}} - \\frac{1}{\\tan 48^{\\circ}}\\right) = 40$

One equation, one unknown, no law of sines needed. **Angle of depression from a height equals the angle of elevation from the ground** — they are alternate interior angles.

The planted answers are the two horizontal distances, plus the value $40\\tan 32^{\\circ}$ from treating the $40$ m as the whole distance to the base.

### Archetype 2: A Trig Ratio Names a Pythagorean Triple

$\\tan A = \\frac{7}{24}$ is not an invitation to use $\\arctan$. It says the legs are $7k$ and $24k$ and the hypotenuse is $25k$. Likewise $\\sin D = \\frac{8}{17}$ gives the $8$-$15$-$17$ family, and $\\cos A = 0.6 = \\frac{3}{5}$ gives $3$-$4$-$5$.

Find $k$ from the given side, scale all three, then answer the perimeter or area question. The two standing distractors: using the **ratio numbers themselves** as side lengths, and reporting the **sum of the legs** when the perimeter was asked.

Worth memorizing: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$, $20$-$21$-$29$, $9$-$40$-$41$.

### Archetype 3: Complementary-Angle Identities

In a right triangle the two acute angles are complementary, which produces three facts hard items lean on constantly:

- $\\sin\\theta = \\cos(90^{\\circ} - \\theta)$, so $\\sin(3a) = \\cos(a+10^{\\circ})$ means $3a + (a+10) = 90$. Pure algebra, no calculator.
- $\\cos R = \\sin P$ when $P$ and $R$ are the two acute angles.
- $\\tan B = \\frac{1}{\\tan A}$, so $\\sin A \\cdot \\tan B = \\sin A \\cdot \\frac{\\cos A}{\\sin A} = \\cos A$.

The distractors are always **the right angle with the wrong ratio** ($\\sin 60^{\\circ}$ offered next to $\\tan 60^{\\circ}$) and **the right ratio of the other angle** ($\\tan 30^{\\circ}$).`
    },
    {
      id: 'geot-adv-p1-arch456',
      type: 'text' as const,
      content: `### Archetype 4: Similar Figures and the Squared Ratio

Whenever a line is drawn parallel to a side, or a figure is enlarged, or two triangles are declared similar: **lengths scale by $k$, areas by $k^{2}$.**

If $AD:DB = 3:2$ then $AD:AB = 3:5$ — converting a part-to-part ratio into a part-to-whole ratio is where most of the errors live. The area ratio is then $\\frac{9}{25}$, and the *quadrilateral* is the big triangle minus the small one, never a direct ratio.

Running it backwards works too: an enlargement with $2.25$ times the area has linear factor $\\sqrt{2.25} = 1.5$.

### Archetype 5: Area as a Bridge (the Altitude Trick)

A triangle has one area but three bases and three altitudes. That gives a two-line route to any altitude:

1. Compute the area using the **convenient** base (a horizontal side, or an isosceles triangle's natural altitude, or the shoelace formula in the coordinate plane).
2. Set $\\text{Area} = \\frac{1}{2}(\\text{other base})(h)$ and solve.

The distractors write themselves: the **area** and the **base** are both choices, and so is the answer that divided the area by the base without doubling first.

### Archetype 6: Coordinate Geometry Is Three Formulas and One Constraint

Distance, midpoint, slope — plus one condition that resolves an ambiguity.

- **Unknown coordinate + given distance**: $(a+2)^{2} + 5^{2} = 13^{2}$ gives two values of $a$, and a condition like "$a > 0$" or "$k > 3$" picks one. The rejected root's answer is always a choice.
- **Moving a set distance along a line**: a slope of $\\frac{5}{12}$ means each step of $12$ right and $5$ up covers exactly $13$ units. To travel $26$, take two steps. Never use the distance formula with a variable here.
- **Perpendicular bisector = the set of points equidistant from two points.** "Equidistant from $A$ and $B$" and "on line $\\ell$" is a two-line system.
- **Distance from a point to a line** is $\\frac{|Ax_{0}+By_{0}+C|}{\\sqrt{A^{2}+B^{2}}}$ — the shortest path, and the only one the item means by "shortest."
- **Shoelace** handles any polygon's area from its vertices, and the vertices must be listed in order around the figure.

The final trap in this half is almost always **which number was asked for**: the $x$-coordinate when the $y$ was wanted, the intercept on the wrong axis, the area when the cost was wanted.`
    },
    {
      id: 'geot-adv-p1-q1',
      type: 'quiz' as const,
      question: 'A surveyor standing on level ground measures the angle of elevation to the top of a flagpole as $28$ degrees. She then walks $25$ m directly toward the base of the flagpole and measures the angle of elevation as $41$ degrees. To the nearest tenth of a meter, how tall is the flagpole?',
      options: [
        '$13.3$',
        '$34.2$',
        '$39.4$',
        '$64.4$'
      ],
      correctAnswer: 1,
      explanation: 'Let $h$ be the height. The two horizontal distances are $\\frac{h}{\\tan 28^{\\circ}}$ and $\\frac{h}{\\tan 41^{\\circ}}$, and they differ by $25$: $h(1.8807 - 1.1504) = 25$, so $h \\approx 34.2$ m. The distractors: $64.4$ is the distance from the first position to the base and $39.4$ is the distance from the second — both are intermediate ground distances, not heights. $13.3$ is $25\\tan 28^{\\circ}$, which treats the $25$ m walk as the entire distance to the base.'
    },
    {
      id: 'geot-adv-p1-q2',
      type: 'quiz' as const,
      question: 'In right triangle $ABC$, the right angle is at $C$, $\\tan A = \\dfrac{20}{21}$, and the hypotenuse $AB$ has length $87$. What is the perimeter of triangle $ABC$?',
      options: [
        '$123$',
        '$128$',
        '$210$',
        '$1890$'
      ],
      correctAnswer: 2,
      explanation: 'A tangent of $\\frac{20}{21}$ means the legs are $20k$ and $21k$, so the hypotenuse is $29k$ (the $20$-$21$-$29$ triple). From $29k = 87$, $k = 3$, so the legs are $60$ and $63$ and the perimeter is $60 + 63 + 87 = 210$. The distractors: $123$ is the sum of the legs only, stopping before the hypotenuse is added back. $128$ uses the ratio numbers $20$ and $21$ as if they were the actual leg lengths. $1890$ is the AREA $\\frac{1}{2}(60)(63)$ — the other quantity you could build from two legs.'
    },
    {
      id: 'geot-adv-p1-q3',
      type: 'quiz' as const,
      question: 'In triangle $PQR$, point $S$ lies on $\\overline{PQ}$ and point $T$ lies on $\\overline{PR}$ so that $\\overline{ST}$ is parallel to $\\overline{QR}$. The ratio $PS:SQ$ is $2:3$, and the area of triangle $PST$ is $28$ square units. What is the area, in square units, of quadrilateral $SQRT$?',
      options: [
        '$42$',
        '$70$',
        '$175$',
        '$147$'
      ],
      correctAnswer: 3,
      explanation: 'Convert the part-to-part ratio: $PS:SQ = 2:3$ means $PS:PQ = 2:5$. Triangles $PST$ and $PQR$ are similar with linear ratio $\\frac{2}{5}$, so the area ratio is $\\frac{4}{25}$ and $[PQR] = 28 \\times \\frac{25}{4} = 175$. The quadrilateral is the difference: $175 - 28 = 147$. The distractors: $175$ is the whole triangle, the intermediate value. $70$ applies the LINEAR ratio $\\frac{5}{2}$ to the areas. $42$ is $70 - 28$, that same error carried through the subtraction.'
    },
    {
      id: 'geot-adv-p1-q4',
      type: 'quiz' as const,
      question: 'In the $xy$-plane, point $P$ has coordinates $(a, -6)$ with $a < 0$, and $P$ is $10$ units from the point $A(3, 0)$. What is the slope of line $AP$?',
      options: [
        '$\\frac{3}{4}$',
        '$-\\frac{3}{4}$',
        '$\\frac{4}{3}$',
        '$\\frac{5}{4}$'
      ],
      correctAnswer: 0,
      explanation: 'From the distance condition, $(a-3)^{2} + (-6)^{2} = 10^{2}$, so $(a-3)^{2} = 64$ and $a = 11$ or $a = -5$. The condition $a < 0$ selects $a = -5$, so $P = (-5,-6)$ and the slope is $\\frac{-6-0}{-5-3} = \\frac{-6}{-8} = \\frac{3}{4}$. The distractors: $-\\frac{3}{4}$ comes from the REJECTED root $a = 11$ — that root is always planted. $\\frac{4}{3}$ inverts rise and run. $\\frac{5}{4}$ uses the distance $10$ as the rise instead of the vertical change $6$.'
    }
  ]
};
