export const actPlaneGeomPart1Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-pg1-intro',
      type: 'text' as const,
      content: `
# 📐 Plane Geometry

**Part 1 of 7 — Angles and Lines**

Almost every ACT geometry problem, from triangles to circles, eventually comes down to an angle fact or a length fact. This part gives you the angle facts. The Enhanced ACT Math test has **45 questions in 50 minutes, each with 4 answer choices**, and a calculator is allowed. You have a little over a minute per question, so these rules need to be automatic.

**Read the directions once:** ACT figures are *not necessarily drawn to scale*. Never measure an angle by eye; use the given numbers and the rules below.

## Angle Vocabulary

| Term | Meaning | Fact you use |
|------|---------|--------------|
| Acute / right / obtuse | less than 90° / exactly 90° / between 90° and 180° | A square corner mark means 90° |
| Straight angle | a straight line | measures 180° |
| Complementary | two angles that add to 90° | complement of $x$ is $90 - x$ |
| Supplementary | two angles that add to 180° | supplement of $x$ is $180 - x$ |
| Linear pair | two adjacent angles that form a straight line | always supplementary |
| Vertical angles | the opposite angles formed by two intersecting lines | always **equal** |
| Angles around a point | all the angles that fill a full turn | add to 360° |

**Memory hook:** C comes before S in the alphabet, and 90 comes before 180. **C**omplementary = 90°, **S**upplementary = 180°.

**Useful fact:** For any acute angle, the supplement is exactly 90° more than the complement, because $(180 - x) - (90 - x) = 90$.

## Two Lines That Cross

When two lines intersect, they make four angles: two pairs of vertical angles. If one angle is 70°, its vertical partner is 70°, and each of the other two angles is $180 - 70 = 110°$ because each forms a linear pair with a 70° angle. On the ACT, the answer they want is often the *other* angle, so reread what the question asks.

## Parallel Lines Cut by a Transversal

A **transversal** is a line that crosses two other lines. When those two lines are **parallel**, the eight angles formed have only **two different measures**: the four acute angles are all equal, the four obtuse angles are all equal, and any acute angle plus any obtuse angle equals 180°.

| Angle pair | Where they sit | Relationship |
|------------|----------------|--------------|
| Corresponding | same position at each intersection (both upper-left, etc.) | equal |
| Alternate interior | between the parallel lines, on opposite sides of the transversal (the "Z" shape) | equal |
| Alternate exterior | outside the parallel lines, on opposite sides of the transversal | equal |
| Same-side (consecutive) interior | between the parallel lines, on the same side of the transversal (the "C" shape) | supplementary (sum 180°) |

**The fast way:** decide whether the two angles look both small, both big, or one of each. Both small or both big → set them **equal**. One small and one big → set their **sum = 180**. This works only when the lines are parallel; the problem must say so or mark them with arrows.

**Parallel line through a vertex:** If a line through vertex A of a triangle is drawn parallel to the opposite side BC, alternate interior angles copy angle B and angle C up to line A. The three angles at A (copy of B, angle A, copy of C) form a straight line, which is exactly why every triangle's angles sum to 180°. The ACT sometimes gives you this picture and asks for one of the three angles.

## Polygon Angle Sums

From one vertex of an $n$-sided polygon you can draw diagonals that cut it into $n - 2$ triangles, each worth 180°.

$$\\text{Sum of interior angles} = (n - 2) \\times 180°$$

| Polygon | $n$ | Interior sum | Each angle if regular |
|---------|-----|--------------|-----------------------|
| Triangle | 3 | 180° | 60° |
| Quadrilateral | 4 | 360° | 90° |
| Pentagon | 5 | 540° | 108° |
| Hexagon | 6 | 720° | 120° |
| Octagon | 8 | 1,080° | 135° |
| Decagon | 10 | 1,440° | 144° |

**Exterior angles:** Extend each side of a convex polygon; the exterior angles (one at each vertex) always sum to **360°**, no matter how many sides. At each vertex, interior + exterior = 180°.

For a **regular** polygon (all sides and angles equal): each exterior angle is $\\frac{360}{n}$ and each interior angle is $180 - \\frac{360}{n}$. To find $n$ from an interior angle, take $180 -$ interior to get the exterior angle, then divide 360 by it.
      `
    },
    {
      id: 'act-pg1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Same-side interior angles</b></summary>

Two parallel lines are cut by a transversal. Two same-side interior angles measure $(2x + 10)°$ and $(3x + 20)°$. Find both angles.

1. Same-side interior angles are one small and one big, so they are **supplementary**.
2. $(2x + 10) + (3x + 20) = 180 \\implies 5x + 30 = 180 \\implies x = 30$.
3. The angles are $2(30) + 10 = 70°$ and $3(30) + 20 = 110°$. Check: $70 + 110 = 180$.

**Trap avoided:** setting them equal would give $x = -10$, a negative angle, which tells you the setup was wrong.
</details>

<details>
<summary><b>Example 2: Complement and supplement in one equation</b></summary>

The complement of an angle is one-third of its supplement. Find the angle.

1. Translate: complement $= 90 - x$, supplement $= 180 - x$.
2. $90 - x = \\frac{1}{3}(180 - x)$. Multiply by 3: $270 - 3x = 180 - x$.
3. $90 = 2x \\implies x = 45°$.
4. Check: complement 45°, supplement 135°, and $135 \\div 3 = 45$. ✓
</details>

<details>
<summary><b>Example 3: Sides of a regular polygon from one angle</b></summary>

Each interior angle of a regular polygon is 150°. How many sides does it have?

1. Exterior angle $= 180 - 150 = 30°$.
2. Exterior angles sum to 360°, so $n = 360 \\div 30 = 12$.
3. Check: $(12 - 2) \\times 180 = 1{,}800$, and $1{,}800 \\div 12 = 150$. ✓
</details>
      `
    },
    {
      id: 'act-pg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Angle Relationships** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two angles form a linear pair, and one angle is 4 times the other. What is the measure of the larger angle?',
            options: ['36°', '72°', '144°', '18°'],
            correctAnswer: 2,
            explanation: `A linear pair forms a straight line, so $x + 4x = 180$, giving $x = 36$ and a larger angle of 144°. The value 36° is the smaller angle. Treating the pair as complementary gives $5x = 90$, so $x = 18$ and $4x = 72$; those are the 18° and 72° choices, but angles on a straight line add to 180°, not 90°.`
          },
          {
            question: 'Two parallel lines are cut by a transversal, and one of the eight angles formed measures 65°. What is the measure of the angle that is a same-side interior angle with it?',
            options: ['65°', '115°', '25°', '90°'],
            correctAnswer: 1,
            explanation: `Same-side interior angles sit between the parallel lines on the same side of the transversal, and they are supplementary: $180 - 65 = 115°$. An angle of 65° would be a corresponding, alternate interior, or vertical partner, not a same-side interior one. The value 25° is the complement of 65°. A 90° angle would require the transversal to be perpendicular to the parallel lines, and then every angle would be 90°, not 65°.`
          },
          {
            question: 'Three angles fill the full turn around a point. They measure $x°$, $(2x + 20)°$, and $(3x - 20)°$. What is the measure of the largest angle?',
            options: ['30°', '80°', '60°', '160°'],
            correctAnswer: 3,
            explanation: `Angles around a point sum to 360°, so $6x = 360$ and $x = 60$. The angles are 60°, 140°, and 160°, and the largest is 160°. The value 60° is $x$, which is the smallest angle. Using 180° as the total gives $x = 30$ and angles of 30°, 80°, and 70°; that is where 30° (the value of $x$) and 80° (the largest angle) come from, but a full turn is 360°.`
          },
          {
            question: 'Each interior angle of a regular polygon measures 156°. How many sides does the polygon have?',
            options: ['15', '13', '24', '17'],
            correctAnswer: 0,
            explanation: `Each exterior angle is $180 - 156 = 24°$, and exterior angles sum to 360°, so $n = 360 \\div 24 = 15$. The value 13 is $n - 2$, the number of triangles you can cut the polygon into from one vertex. The value 24 is the exterior angle in degrees, not a count of sides. A 17-sided regular polygon has exterior angles of about 21.2° and interior angles of about 158.8°.`
          }
        ]
      }
    },
    {
      id: 'act-pg1-input1',
      type: 'input-boxes' as const,
      content: `
**Find the Value** 🧮

1) Two lines intersect. A pair of vertical angles measure $(6x - 14)°$ and $(4x + 20)°$. Type the value of $x$.

2) What is the sum of the interior angles of a hexagon, in degrees?

3) What is the supplement of a 47° angle, in degrees?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '720', '133'],
        hint1: 'Vertical angles are equal: $6x - 14 = 4x + 20$.',
        hint2: 'Use $(n - 2) \\times 180$ with $n = 6$.',
        hint3: 'Supplementary angles add to 180°.',
        explanation: '1) $2x = 34$, so $x = 17$ (each angle is 88°). 2) $(6 - 2) \\times 180 = 720$. 3) $180 - 47 = 133$.'
      }
    },
    {
      id: 'act-pg1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Try each in under a minute, then check the answer column.

| # | Problem | Answer |
|---|---------|--------|
| 1 | Two parallel lines are cut by a transversal. Alternate interior angles measure $(5x - 8)°$ and $(3x + 22)°$. Find the angle. | $x = 15$, angle = 67° |
| 2 | A pentagon has four angles of 100°, 110°, 120°, and 95°. Find the fifth. | $540 - 425 = 115°$ |
| 3 | The exterior angles of a regular polygon are 40°. How many sides? | $360 \\div 40 = 9$ |
| 4 | An angle is 20° more than its complement. Find it. | $x + (x - 20) = 90$, so 55° |

**ACT Tip:** After solving for $x$, stop and ask: "Did they want $x$, this angle, or a different angle?" Wrong answer choices are built from exactly those mix-ups.
      `
    },
    {
      id: 'act-pg1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Two parallel lines are cut by a transversal. A pair of alternate exterior angles measure $(3x + 12)°$ and $(5x - 20)°$. What is the measure of each obtuse angle formed?',
            options: ['60°', '16°', '120°', '24°'],
            correctAnswer: 2,
            explanation: `Alternate exterior angles are equal, so $3x + 12 = 5x - 20$, giving $x = 16$ and an angle of 60°. That pair is acute, so each obtuse angle is $180 - 60 = 120°$. The 60° choice is the acute pair itself, and 16 is $x$ rather than an angle. A sign slip when moving the constants gives $2x = 8$, $x = 4$, and an angle of 24°, which is also acute, not obtuse.`
          },
          {
            question: 'In triangle PQR, line m passes through P and is parallel to side QR. The angle between m and side PQ, on the same side of P as Q, measures 40°, and angle QPR measures 75°. What is the measure of angle R?',
            options: ['65°', '40°', '75°', '115°'],
            correctAnswer: 0,
            explanation: `The three angles at P along line m (40°, angle QPR = 75°, and the angle between m and PR) form a straight line, so the third is $180 - 40 - 75 = 65°$. That angle and angle R are alternate interior angles for the parallel lines m and QR, so angle R is 65°. The 40° angle equals angle Q, not angle R, and 75° is angle P. The value 115° is $40 + 75$, which is the exterior angle at R, not R itself.`
          },
          {
            question: 'A hexagon has four interior angles that each measure 110°, and its other two interior angles are equal. What is the measure of each of those two angles?',
            options: ['50°', '120°', '140°', '280°'],
            correctAnswer: 2,
            explanation: `A hexagon's interior angles sum to $(6 - 2) \\times 180 = 720°$. The four 110° angles use 440°, leaving 280° for the other two, so each is 140°. The value 280° is the combined measure, not each one. Using the pentagon sum of 540° leaves 100° and gives 50°, and 120° is the angle of a regular hexagon, which this hexagon is not.`
          },
          {
            question: 'The supplement of an angle is 5 times the complement of the same angle. What is the measure of the angle?',
            options: ['30°', '22.5°', '67.5°', '112.5°'],
            correctAnswer: 2,
            explanation: `Write $180 - x = 5(90 - x)$, so $180 - x = 450 - 5x$, $4x = 270$, and $x = 67.5°$. Check: the complement is 22.5° and the supplement is 112.5°, which is 5 times 22.5. Those two values are the complement and supplement, not the angle. Setting the supplement equal to 5 times the angle itself ($180 - x = 5x$) gives 30°.`
          }
        ]
      }
    },
    {
      id: 'act-pg1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Complementary** = 90°, **supplementary** = 180°; a linear pair is supplementary; **vertical angles are equal**; angles around a point total 360°.
- Translate words to algebra: complement $= 90 - x$, supplement $= 180 - x$.
- **Parallel lines + transversal:** corresponding, alternate interior, and alternate exterior angles are equal; same-side interior angles add to 180°. Shortcut: small = small, big = big, small + big = 180.
- A line through a vertex parallel to the opposite side copies the two base angles onto a straight line.
- Interior angle sum of an $n$-gon: $(n - 2) \\times 180°$. Exterior angles always total 360°; in a regular polygon each is $\\frac{360}{n}$.
- Figures are not necessarily drawn to scale, and the answer is often the *other* angle; check what the question asks.
      `
    }
  ]
}
