export const actPlaneGeomPart4Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg4-intro',
      type: 'text' as const,
      content: `
# ⭕ Circles

**Part 4 of 7 — Circumference, Area, Arcs, Sectors, and Angles in Circles**

## The Core Formulas

| Quantity | Formula | Note |
|----------|---------|------|
| Diameter | $d = 2r$ | the longest chord; passes through the center |
| Circumference | $C = 2\\pi r = \\pi d$ | a length (distance around) |
| Area | $A = \\pi r^2$ | square units; **square the radius, not the diameter** |

**Work backward through the radius.** Whatever you are given (diameter, circumference, or area), find $r$ first.

- $C = 18\\pi \\implies 2\\pi r = 18\\pi \\implies r = 9 \\implies A = 81\\pi$.
- $A = 36\\pi \\implies r^2 = 36 \\implies r = 6 \\implies d = 12$.

Answer choices are usually left in terms of $\\pi$. If a question says "use 3.14 for $\\pi$" or asks for a decimal, multiply at the end.

## Arcs and Sectors: Use the Fraction of the Circle

A **central angle** has its vertex at the center. Its **arc** is the part of the circle between its sides, and the **sector** is the pie-slice region. A central angle of $\\theta$ degrees takes $\\frac{\\theta}{360}$ of the whole circle, so:

$$\\text{Arc length} = \\frac{\\theta}{360} \\cdot 2\\pi r \\qquad \\text{Sector area} = \\frac{\\theta}{360} \\cdot \\pi r^2$$

- Radius 12, central angle 150°: arc $= \\frac{150}{360}(24\\pi) = 10\\pi$; sector area $= \\frac{150}{360}(144\\pi) = 60\\pi$.
- A pizza with diameter 16 cut into 8 equal slices: $r = 8$, whole area $64\\pi$, one slice $8\\pi$.
- **Sector perimeter** = two radii + the arc. Radius 6, angle 60°: arc $= 2\\pi$, perimeter $= 12 + 2\\pi$.

The same proportion runs backward: an arc of $5\\pi$ in a circle with circumference $12\\pi$ is $\\frac{5}{12}$ of the circle, so its central angle is $\\frac{5}{12} \\times 360 = 150°$.

## Angles in Circles

| Angle | Vertex | Measure |
|-------|--------|---------|
| Central angle | at the center | equals its intercepted arc |
| Inscribed angle | on the circle | **half** the central angle (or arc) it intercepts |

- Central angle AOB = 96° → an inscribed angle ACB intercepting the same arc is 48°.
- Two inscribed angles that intercept the same arc are equal.
- **An angle inscribed in a semicircle is 90°.** If a triangle is drawn in a circle with one side a **diameter**, the angle opposite the diameter is a right angle, so the Pythagorean theorem applies with the diameter as the hypotenuse.

## Tangents and Chords

- A **tangent** line touches the circle at one point and is **perpendicular to the radius** at that point. A tangent, a radius, and a segment to the center make a right triangle.
- Two tangent segments drawn to a circle from the same outside point are equal in length.
- The perpendicular from the center to a **chord** bisects the chord. Radius 10 and chord 16 → half-chord 8 → distance from center $= \\sqrt{100 - 64} = 6$.

## Circles and Squares Together

| Figure | Key link | Example (square side 6) |
|--------|----------|-------------------------|
| Circle **inside** a square, touching all four sides | diameter = side of square | $r = 3$, circle area $9\\pi$ |
| Square **inside** a circle, all four vertices on the circle | diameter = **diagonal** of square | diagonal $6\\sqrt{2}$, $r = 3\\sqrt{2}$, circle area $18\\pi$ |

Similarly, a rectangle inscribed in a circle has its diagonal as a diameter (a 6-by-8 rectangle sits in a circle of diameter 10).

**Radian note:** The ACT trigonometry questions sometimes measure angles in radians, where arc length is simply $s = r\\theta$. In this geometry lesson, angles are in degrees.
      `
    },
    {
      id: 'act-pg4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Arc length and sector area together</b></summary>

A circle has radius 9. Find the arc length and sector area for a central angle of 80°.

1. Fraction of the circle: $\\frac{80}{360} = \\frac{2}{9}$.
2. Arc $= \\frac{2}{9}(18\\pi) = 4\\pi$.
3. Sector area $= \\frac{2}{9}(81\\pi) = 18\\pi$.

**Trap avoided:** arc uses the circumference ($2\\pi r$); sector area uses the area ($\\pi r^2$).
</details>

<details>
<summary><b>Example 2: Square inscribed in a circle</b></summary>

A square is inscribed in a circle of radius 5. Find the area of the region inside the circle but outside the square.

1. The square's diagonal is a diameter: 10.
2. Side $= \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$, so square area $= 50$ (or $\\frac{d^2}{2} = \\frac{100}{2}$).
3. Circle area $= 25\\pi$. Shaded region $= 25\\pi - 50$.
</details>

<details>
<summary><b>Example 3: Triangle with a diameter side</b></summary>

Triangle ABC is inscribed in a circle, and AB is a diameter of length 20. If AC = 12, find BC.

1. Angle C is inscribed in a semicircle, so it is 90°, and AB is the hypotenuse.
2. $BC = \\sqrt{400 - 144} = \\sqrt{256} = 16$ (the 3-4-5 triple times 4).
</details>
      `
    },
    {
      id: 'act-pg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Circle Measurements** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A circle has an area of $64\\pi$ square inches. What is its circumference, in inches?',
            options: ['$8\\pi$', '$16\\pi$', '$32\\pi$', '$64\\pi$'],
            correctAnswer: 1,
            explanation: `From $\\pi r^2 = 64\\pi$, $r = 8$, so $C = 2\\pi(8) = 16\\pi$. The value $8\\pi$ is $\\pi r$, which forgets the 2. Using the diameter 16 in $2\\pi r$ gives $32\\pi$. Halving 64 instead of taking its square root gives a radius of 32 and a circumference of $64\\pi$.`
          },
          {
            question: 'In a circle with radius 6, an arc has length $5\\pi$. What is the measure of the central angle that intercepts this arc?',
            options: ['50°', '75°', '150°', '300°'],
            correctAnswer: 2,
            explanation: `The circumference is $12\\pi$, so the arc is $\\frac{5\\pi}{12\\pi} = \\frac{5}{12}$ of the circle, and $\\frac{5}{12} \\times 360 = 150°$. Using $\\pi r = 6\\pi$ as the circumference gives 300°. Comparing the arc to the area $36\\pi$ gives 50°. The value 75° is the inscribed angle that intercepts this arc, which is half the central angle.`
          },
          {
            question: 'Triangle ABC is inscribed in a circle, and side AB is a diameter of the circle. If angle A measures 35°, what is the measure of angle B?',
            options: ['35°', '55°', '90°', '145°'],
            correctAnswer: 1,
            explanation: `Angle C is inscribed in a semicircle, so it is 90°, and angle B $= 180 - 90 - 35 = 55°$. The 90° value is angle C. Angle B equals 35° only if the triangle were isosceles with AC = BC, which nothing says. The value 145° is $180 - 35$, which ignores the right angle at C.`
          },
          {
            question: 'Segment PT is tangent to a circle with center O at point T. The radius of the circle is 8, and PO = 17. What is the length of PT?',
            options: ['9', '15', '25', '$\\sqrt{353}$'],
            correctAnswer: 1,
            explanation: `A tangent is perpendicular to the radius at the point of tangency, so triangle PTO has a right angle at T with hypotenuse PO: $PT = \\sqrt{289 - 64} = 15$ (8-15-17). The value $\\sqrt{353}$ adds the squares, treating PO as a leg. The values 9 and 25 subtract and add the lengths without the Pythagorean theorem.`
          }
        ]
      }
    },
    {
      id: 'act-pg4-input1',
      type: 'input-boxes' as const,
      content: `
**Circle Calculations** 🧮

1) A circle has a diameter of 14. Its area is $k\\pi$. Type $k$.

2) A sector of a circle with radius 10 has a central angle of 72°. Its area is $k\\pi$. Type $k$.

3) A central angle measures 140°. Type the measure, in degrees, of an inscribed angle that intercepts the same arc.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['49', '20', '70'],
        hint1: 'The radius is half the diameter; square the radius.',
        hint2: '72° is $\\frac{1}{5}$ of 360°.',
        hint3: 'An inscribed angle is half the central angle.',
        explanation: '1) $r = 7$, area $= 49\\pi$. 2) $\\frac{72}{360}(100\\pi) = 20\\pi$. 3) $140 \\div 2 = 70$.'
      }
    },
    {
      id: 'act-pg4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | Circumference $10\\pi$. Area? | $r = 5$, area $25\\pi$ |
| 2 | Radius 4, central angle 45°. Arc length? | $\\frac{1}{8}(8\\pi) = \\pi$ |
| 3 | Circle inscribed in a square of side 10. Circle area? | $r = 5$, $25\\pi$ |
| 4 | Radius 13, chord 24. Distance from center to chord? | $\\sqrt{169 - 144} = 5$ |

**ACT Tip:** Write "$r = $" before anything else. Radius-versus-diameter errors are the single most common way to land on a wrong circle answer, and the wrong choices are built to catch them.
      `
    },
    {
      id: 'act-pg4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A square is inscribed in a circle of radius 4, so that all four vertices of the square lie on the circle. What is the area of the square?',
            options: ['16', '32', '64', '$16\\pi$'],
            correctAnswer: 1,
            explanation: `The square's diagonal is a diameter, 8, so the side is $\\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$ and the area is 32 (or $\\frac{8^2}{2}$). Using the diameter 8 as the side gives 64, which is the square drawn around the circle instead. Using the radius 4 as the side gives 16, and $16\\pi$ is the area of the circle.`
          },
          {
            question: 'A circle is inscribed in a square with sides of length 12. What is the area of the region inside the square but outside the circle?',
            options: ['$144 - 6\\pi$', '$144 - 36\\pi$', '$36\\pi$', '144'],
            correctAnswer: 1,
            explanation: `The circle's diameter equals the side, so $r = 6$ and the circle's area is $36\\pi$; the leftover region is $144 - 36\\pi$. Using $\\pi r$ instead of $\\pi r^2$ for the circle gives $144 - 6\\pi$. The value $36\\pi$ is the circle itself, the unshaded part, and 144 is the whole square before the circle is removed.`
          },
          {
            question: 'A sector is cut from a circle of radius 9, and its central angle measures 40°. What is the perimeter of the sector?',
            options: ['$2\\pi$', '$9 + 2\\pi$', '$18 + 2\\pi$', '$9\\pi$'],
            correctAnswer: 2,
            explanation: `The arc is $\\frac{40}{360}(18\\pi) = 2\\pi$, and the sector's boundary also includes two radii, $9 + 9 = 18$, for a perimeter of $18 + 2\\pi$. The value $2\\pi$ is the arc alone, and $9 + 2\\pi$ counts only one radius. The value $9\\pi$ is the sector's area, $\\frac{40}{360}(81\\pi)$, not a length around its edge.`
          },
          {
            question: 'The minute hand of a clock is 6 inches long. How far does the tip of the minute hand travel in 20 minutes?',
            options: ['$4\\pi$ inches', '$36\\pi$ inches', '$12\\pi$ inches', '$\\frac{2\\pi}{3}$ inches'],
            correctAnswer: 0,
            explanation: `In 20 minutes the hand sweeps $\\frac{20}{60} = \\frac{1}{3}$ of a full turn (120°), so the tip travels $\\frac{1}{3}(2\\pi \\cdot 6) = 4\\pi$ inches. The value $12\\pi$ is a full hour's trip. The value $36\\pi$ is the area of the whole circle the hand sweeps, not a distance. Treating 20 minutes as a 20° angle gives $\\frac{20}{360}(12\\pi) = \\frac{2\\pi}{3}$.`
          }
        ]
      }
    },
    {
      id: 'act-pg4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Find the **radius** first. $C = 2\\pi r$, $A = \\pi r^2$.
- **Arc length** $= \\frac{\\theta}{360} \\cdot 2\\pi r$; **sector area** $= \\frac{\\theta}{360} \\cdot \\pi r^2$; sector perimeter = arc + 2 radii.
- Central angle = its arc; **inscribed angle = half** the central angle on the same arc.
- **Angle inscribed in a semicircle = 90°**, so a triangle with a diameter side is a right triangle with the diameter as hypotenuse.
- **Tangent ⟂ radius** at the point of tangency; the perpendicular from the center bisects a chord.
- **Circle in a square:** diameter = side. **Square in a circle:** diameter = diagonal ($s\\sqrt{2}$).
      `
    }
  ]
}
