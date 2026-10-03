export const actPlaneGeomPart7Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg7-intro',
      type: 'text' as const,
      content: `
# 🧩 Review & Applications

**Part 7 of 7 — Multi-Step ACT Geometry Problems**

Harder ACT geometry questions rarely test one rule. They chain two or three rules from Parts 1–6: a diagonal becomes a diameter, a height comes from a right triangle, a ratio comes from similar triangles. With 45 questions in 50 minutes, you need a routine that gets you from the figure to the answer without false starts.

## A Five-Step Routine

1. **Draw or redraw.** If the problem describes a figure in words, sketch it. If a figure is given, copy the numbers onto it. Remember the figure is not necessarily to scale.
2. **Label everything you can.** Fill in every angle and length that follows directly from a rule (vertical angles, base angles, half-diagonals, radii).
3. **Find the link.** Ask, "What shape connects what I know to what I want?" Usually it is a right triangle, a pair of similar triangles, or a fraction of a circle.
4. **Write one equation in one unknown** and solve it.
5. **Answer the question asked.** Radius or diameter? Larger or smaller angle? $x$ or the angle? Area or perimeter? Then check that the size is sensible.

## Trigger → Tool

| If you see… | Reach for… |
|-------------|-----------|
| A right angle, a diagonal of a rectangle, a ladder, a tangent | Pythagorean theorem or a triple |
| $\\sqrt{2}$ or $\\sqrt{3}$ in the answer choices | 45-45-90 or 30-60-90 triangle |
| A segment parallel to a side of a triangle; shadows | Similar triangles (AA) |
| A triangle with a diameter as one side | 90° inscribed angle |
| A square or rectangle inside a circle | diagonal = diameter |
| A circle inside a square | diameter = side |
| An isosceles triangle or trapezoid with a missing height | Drop a perpendicular, then use Pythagoras |
| A chord and a radius | Perpendicular from the center bisects the chord |
| An angle outside a triangle | Exterior angle = sum of the two remote angles |
| A part of a circle | $\\frac{\\theta}{360}$ of the circumference or area |
| "Shaded region" | whole − unshaded |

## Hidden Right Triangles

Many "impossible" problems become routine once you draw one segment:

- **Isosceles triangle:** the altitude from the vertex angle bisects the base. Legs 13, base 10 → half-base 5 → height 12 → area $\\frac{1}{2}(10)(12) = 60$.
- **Chord:** draw the radius to the chord's endpoint and the perpendicular from the center. Radius 13, chord 24 → half-chord 12 → distance 5.
- **Regular hexagon:** six equilateral triangles from the center. Side 4 → area $6 \\cdot \\frac{\\sqrt{3}}{4}(16) = 24\\sqrt{3}$.
- **Segment of a circle** (between a chord and its arc): sector area − triangle area.

## The Trap List

| Trap | How to avoid it |
|------|-----------------|
| Using the diameter as the radius | Write "$r = $" first |
| Forgetting the $\\frac{1}{2}$ in a triangle or trapezoid area | Say the formula aloud in your head |
| Using a slanted side as the height | Height must be perpendicular |
| $\\pi r$ instead of $2\\pi r$ for circumference | $C = 2\\pi r = \\pi d$ |
| Answering with $x$ instead of the angle | Reread the last line of the question |
| Area ratio = length ratio | Areas use $k^2$, volumes $k^3$ |
| Mixing feet and inches | Convert lengths before multiplying |
| Perimeter with a missing side | Count the sides you added |

**Pacing:** If a geometry problem has no clear first step after about 20 seconds, mark it and move on. Come back after the questions you can solve quickly; every question is worth the same.
      `
    },
    {
      id: 'act-pg7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Rectangle inscribed in a circle</b></summary>

A 6-by-8 rectangle is inscribed in a circle. Find the area of the region inside the circle but outside the rectangle.

1. **Link:** the rectangle's diagonal is a diameter. Diagonal $= \\sqrt{36 + 64} = 10$, so $r = 5$.
2. Circle area $= 25\\pi$; rectangle area $= 48$.
3. Shaded region $= 25\\pi - 48$.
</details>

<details>
<summary><b>Example 2: Angle algebra with an exterior angle</b></summary>

In triangle ABC, angle A $= (x + 15)°$, angle B $= (2x)°$, and the exterior angle at C is $(4x - 25)°$. Find angle C.

1. Exterior angle = sum of remote angles: $4x - 25 = (x + 15) + 2x \\implies x = 40$.
2. Angle A $= 55°$, angle B $= 80°$, exterior angle at C $= 135°$.
3. Angle C $= 180 - 135 = 45°$. Check: $55 + 80 + 45 = 180$. ✓
</details>
      `
    },
    {
      id: 'act-pg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice: Two-Step Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rectangle with sides 5 and 12 is inscribed in a circle, with all four vertices on the circle. What is the circumference of the circle?',
            options: ['$13\\pi$', '$17\\pi$', '$26\\pi$', '$\\frac{169\\pi}{4}$'],
            correctAnswer: 0,
            explanation: `The rectangle's diagonal is a diameter: $\\sqrt{25 + 144} = 13$, so $C = \\pi d = 13\\pi$. Using 13 as the radius gives $26\\pi$. Adding the sides to get a diameter of 17 skips the Pythagorean theorem. The value $\\frac{169\\pi}{4}$ is the circle's area, $\\pi(6.5)^2$.`
          },
          {
            question: 'A circle has a radius of 13, and a chord of the circle is 24 units long. What is the distance from the center of the circle to the chord?',
            options: ['5', '11', '12', '$\\sqrt{313}$'],
            correctAnswer: 0,
            explanation: `The perpendicular from the center bisects the chord, making a right triangle with hypotenuse 13 (a radius) and leg 12 (half the chord), so the distance is $\\sqrt{169 - 144} = 5$. The value 12 is the half-chord itself, and 11 is $24 - 13$. Adding the squares gives $\\sqrt{313}$, which treats the radius as a leg.`
          },
          {
            question: 'An isosceles triangle has two sides of length 10 and a base of length 12. What is its area?',
            options: ['24', '48', '60', '96'],
            correctAnswer: 1,
            explanation: `The altitude to the base bisects it, giving a right triangle with hypotenuse 10 and leg 6, so the height is 8 and the area is $\\frac{1}{2}(12)(8) = 48$. Using the side 10 as the height gives 60. Leaving out the $\\frac{1}{2}$ gives 96, and 24 is the area of only one of the two right triangles.`
          },
          {
            question: 'In triangle ABC, angle A measures $(x + 15)°$, angle B measures $(2x)°$, and the exterior angle at C measures $(4x - 25)°$. What is the measure of angle A?',
            options: ['40°', '45°', '55°', '135°'],
            correctAnswer: 2,
            explanation: `The exterior angle equals the sum of the remote angles: $4x - 25 = 3x + 15$, so $x = 40$ and angle A $= 40 + 15 = 55°$. The value 40 is $x$, not an angle. The 135° value is the exterior angle, and 45° is the interior angle at C.`
          }
        ]
      }
    },
    {
      id: 'act-pg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Pick the First Tool** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A square is drawn inside a circle with all four vertices on the circle. To get the radius from the side, first use …',
            options: ['the diagonal as a diameter', 'the side as a diameter', 'the side as a radius', 'the perimeter as the circumference']
          },
          {
            label: 'A tree and a meter stick cast shadows at the same time. To find the tree height, use …',
            options: ['the Pythagorean theorem', 'similar triangles', 'the exterior angle theorem', 'the triangle inequality']
          },
          {
            label: 'An isosceles trapezoid has known bases and legs but no height. First …',
            options: ['average the legs', 'drop perpendiculars to form right triangles', 'multiply the bases', 'use a leg as the height']
          }
        ],
        correctAnswers: ['the diagonal as a diameter', 'similar triangles', 'drop perpendiculars to form right triangles'],
        hint1: 'Which segment of the square connects two points on the circle through the center?',
        hint2: 'The sun hits both objects at the same angle.',
        hint3: 'A height must be perpendicular to the bases.',
        explanation: 'A square inscribed in a circle has its diagonal as a diameter. Shadows at the same time create similar right triangles. In an isosceles trapezoid, dropping perpendiculars creates right triangles whose legs are the height and the overhang.'
      }
    },
    {
      id: 'act-pg7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | The angles of a triangle are $x°$, $2x°$, and $(x + 40)°$. Largest angle? | $4x + 40 = 180$, $x = 35$; angles 35°, 70°, 75°; largest 75° |
| 2 | A circular rug has area $36\\pi$. Diameter? | $r = 6$, $d = 12$ |
| 3 | A square has diagonal $6\\sqrt{2}$. Perimeter? | side 6, perimeter 24 |
| 4 | A wall is a 30-by-12 rectangle topped by a triangle of height 8 on the 30-ft edge. Area? | $360 + 120 = 480$ |
| 5 | A sector of radius 6 has a 60° angle. Perimeter? | $12 + 2\\pi$ |

**ACT Tip:** On a multi-step problem, the wrong answers are the numbers you pass through on the way (the radius, the half-chord, $x$). If your answer matches an intermediate value, reread the question before you bubble it.
      `
    },
    {
      id: 'act-pg7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A regular hexagon has sides of length 4. What is its area?',
            options: ['$4\\sqrt{3}$', '$24\\sqrt{3}$', '48', '24'],
            correctAnswer: 1,
            explanation: `A regular hexagon splits into 6 equilateral triangles with side 4, each with area $\\frac{\\sqrt{3}}{4}(16) = 4\\sqrt{3}$, so the hexagon's area is $24\\sqrt{3}$. The value $4\\sqrt{3}$ is only one triangle. Using the side 4 as each triangle's height gives $6 \\times \\frac{1}{2} \\times 4 \\times 4 = 48$, but the height is $2\\sqrt{3}$. The value 24 is the hexagon's perimeter.`
          },
          {
            question: 'In right triangle ABC, angle C is the right angle, AC = 12, and BC = 9. Point D lies on AC and point E lies on AB so that DE is parallel to BC. If AD = 8, what is the length of AE?',
            options: ['5', '6', '10', '$\\sqrt{145}$'],
            correctAnswer: 2,
            explanation: `First, AB $= \\sqrt{144 + 81} = 15$. Triangle ADE is similar to triangle ACB with scale factor $\\frac{AD}{AC} = \\frac{8}{12} = \\frac{2}{3}$, so AE $= \\frac{2}{3}(15) = 10$. The value 6 is DE ($\\frac{2}{3}$ of 9), and 5 is EB, the leftover piece of AB. The value $\\sqrt{145}$ treats AD and BC as legs of one right triangle, but they are not in the same triangle.`
          },
          {
            question: 'A grain silo is a cylinder with radius 3 meters and height 10 meters, topped by a hemisphere (half of a sphere) with radius 3 meters. A sphere has volume $\\frac{4}{3}\\pi r^3$. What is the total volume of the silo, in cubic meters?',
            options: ['$90\\pi$', '$108\\pi$', '$117\\pi$', '$126\\pi$'],
            correctAnswer: 1,
            explanation: `The cylinder holds $\\pi(9)(10) = 90\\pi$, and the hemisphere holds half of $\\frac{4}{3}\\pi(27) = 36\\pi$, which is $18\\pi$, for a total of $108\\pi$. Adding a whole sphere gives $126\\pi$. The value $90\\pi$ is the cylinder alone, and $117\\pi$ uses $\\pi r^3 = 27\\pi$ for the dome without the $\\frac{2}{3}$.`
          },
          {
            question: 'A circle has radius 8. Points A and B on the circle form a central angle AOB of 90°. What is the area of the region between chord AB and the shorter arc AB?',
            options: ['$16\\pi - 64$', '$16\\pi - 32$', '$64\\pi - 32$', '$4\\pi - 32$'],
            correctAnswer: 1,
            explanation: `The region is the 90° sector minus triangle AOB. The sector is $\\frac{1}{4}(64\\pi) = 16\\pi$, and the right triangle with legs 8 and 8 has area 32, leaving $16\\pi - 32$. Using $8 \\times 8 = 64$ without the $\\frac{1}{2}$ gives $16\\pi - 64$. Subtracting from the whole circle gives $64\\pi - 32$, and $4\\pi$ is the arc length, not the sector area.`
          }
        ]
      }
    },
    {
      id: 'act-pg7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Routine: **draw, label, find the link, one equation, answer what was asked.**
- The most common links: a right triangle (often hidden), similar triangles, a diagonal that is a diameter, a fraction of a circle.
- Drop a perpendicular whenever a height is missing in an isosceles triangle or trapezoid; draw radii to chords and tangent points.
- Shaded regions are whole − unshaded; a circle segment is sector − triangle.
- Wrong answers are usually intermediate values or one classic slip ($r$ vs $d$, the missing $\\frac{1}{2}$, $k$ vs $k^2$).
- Keep moving: skip a geometry problem with no clear first step and return to it.
      `
    }
  ]
}
