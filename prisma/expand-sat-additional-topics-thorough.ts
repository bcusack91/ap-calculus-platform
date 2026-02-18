import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Additional Topics (Geometry, Trig, Complex Numbers) with thorough content...\n')

  // ============================================================
  // TOPIC 1: Geometry and Trigonometry
  // ============================================================
  const geoTrig = await prisma.topic.findUnique({
    where: { slug: 'sat-geometry-trigonometry' }
  })

  if (geoTrig) {
    await prisma.topic.update({
      where: { id: geoTrig.id },
      data: {
        textContent: `# Geometry and Trigonometry on the SAT

## Essential Geometry Formulas (These ARE Given on the SAT)

The SAT provides these formulas at the beginning of each math section:

| Shape | Formula |
|---|---|
| Circle area | $A = \\pi r^2$ |
| Circle circumference | $C = 2\\pi r$ |
| Rectangle area | $A = lw$ |
| Triangle area | $A = \\frac{1}{2}bh$ |
| Pythagorean theorem | $a^2 + b^2 = c^2$ |
| Special right triangles | 30-60-90 and 45-45-90 |
| Volume of box | $V = lwh$ |
| Volume of cylinder | $V = \\pi r^2 h$ |
| Volume of sphere | $V = \\frac{4}{3}\\pi r^3$ |
| Volume of cone | $V = \\frac{1}{3}\\pi r^2 h$ |
| Volume of pyramid | $V = \\frac{1}{3}Bh$ |

---

## Angles

### Angle Relationships
- **Complementary angles:** sum = $90°$
- **Supplementary angles:** sum = $180°$
- **Vertical angles:** equal (across from each other at an intersection)
- **Triangle angle sum:** $180°$

### Parallel Lines Cut by a Transversal
- **Corresponding angles** are equal
- **Alternate interior angles** are equal
- **Alternate exterior angles** are equal
- **Co-interior (same-side interior) angles** are supplementary ($180°$)

---

## Triangles

### Key Properties
- The sum of interior angles = $180°$
- The longest side is opposite the largest angle
- **Triangle inequality:** The sum of any two sides > the third side

### Special Right Triangles

**45-45-90:**
Sides in ratio $1 : 1 : \\sqrt{2}$
If legs = $a$, hypotenuse = $a\\sqrt{2}$

**30-60-90:**
Sides in ratio $1 : \\sqrt{3} : 2$
- Short leg (opposite 30°) = $a$
- Long leg (opposite 60°) = $a\\sqrt{3}$
- Hypotenuse (opposite 90°) = $2a$

### Similar Triangles
If two triangles are similar:
- Corresponding angles are equal
- Corresponding sides are proportional
- Area ratio = (side ratio)²

---

## Trigonometry

### SOH CAH TOA
For a right triangle with angle $\\theta$:

$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} \\qquad \\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} \\qquad \\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

### Complementary Angle Relationship
$$\\sin(x) = \\cos(90° - x)$$
$$\\cos(x) = \\sin(90° - x)$$

This is a common SAT trick: "co" in cosine stands for "complement."

### Unit Circle Values (Most Common on SAT)

| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|---|---|---|---|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{3}}{3}$ |
| $45°$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

### Radians vs. Degrees
$$180° = \\pi \\text{ radians}$$
$$\\text{To convert: degrees} \\times \\frac{\\pi}{180} = \\text{radians}$$
$$\\text{To convert: radians} \\times \\frac{180}{\\pi} = \\text{degrees}$$

---

## Coordinate Geometry

### Distance Formula
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Midpoint Formula
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

---

## SAT Question Types

### Type 1: Find a Missing Angle
Use angle sum properties (triangle = 180°, supplementary, parallel lines).

### Type 2: Apply Area/Volume Formulas
Plug values into the given formulas and solve.

### Type 3: Right Triangle Trigonometry
Set up a trig ratio and solve for the unknown side or angle.

### Type 4: Special Right Triangles
Recognize 30-60-90 or 45-45-90 patterns and use ratios.

### Type 5: Similar Triangles
Set up proportions from corresponding sides.

---

## Common SAT Mistakes

1. **Using the wrong trig ratio** — label O, A, H carefully
2. **Confusing 30-60-90 ratios** — the longest leg is $a\\sqrt{3}$, not $2a$
3. **Forgetting to use the formula page** — it's provided, reference it!
4. **Calculator in wrong mode** — make sure it's in degrees (not radians) unless specified
5. **Assuming figures are drawn to scale** — they may not be!
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: geoTrig.id,
          order: 10,
          difficulty: 'EASY',
          question: 'In a right triangle, one leg is 6 and the hypotenuse is 10. What is the length of the other leg?',
          solution: `**Pythagorean Theorem:** $a^2 + b^2 = c^2$

$$6^2 + b^2 = 10^2$$
$$36 + b^2 = 100$$
$$b^2 = 64$$
$$b = 8$$

**Answer:** The other leg is 8.

**Shortcut:** This is a 6-8-10 triangle (a multiple of the 3-4-5 Pythagorean triple: $3 \\times 2 = 6$, $4 \\times 2 = 8$, $5 \\times 2 = 10$).`
        },
        {
          topicId: geoTrig.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'In a 30-60-90 triangle, the side opposite the 30° angle is 5. What is the length of the hypotenuse?',
          solution: `**30-60-90 ratio:** $1 : \\sqrt{3} : 2$

The side opposite 30° is the shortest side = $a = 5$.

The hypotenuse = $2a = 2(5) = 10$.

(The side opposite 60° = $a\\sqrt{3} = 5\\sqrt{3} \\approx 8.66$)

**Answer:** Hypotenuse = 10`
        },
        {
          topicId: geoTrig.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'In a right triangle, $\\sin A = \\frac{5}{13}$. What is $\\cos A$?',
          solution: `**Step 1:** From $\\sin A = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$:
- Opposite = 5
- Hypotenuse = 13

**Step 2:** Find the Adjacent side using the Pythagorean theorem:
$$a^2 + 5^2 = 13^2$$
$$a^2 = 169 - 25 = 144$$
$$a = 12$$

**Step 3:** $\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{12}{13}$

**Answer:** $\\cos A = \\frac{12}{13}$

**Shortcut:** This is the 5-12-13 Pythagorean triple.`
        },
        {
          topicId: geoTrig.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Two sides of a triangle are 8 and 15 and the included angle is 60°. What is the area of the triangle?',
          solution: `**Formula for area with an included angle:**
$$A = \\frac{1}{2}ab\\sin C$$

Where $a = 8$, $b = 15$, and $C = 60°$:

$$A = \\frac{1}{2}(8)(15)\\sin 60°$$
$$= \\frac{1}{2}(120)\\left(\\frac{\\sqrt{3}}{2}\\right)$$
$$= 60 \\cdot \\frac{\\sqrt{3}}{2}$$
$$= 30\\sqrt{3} \\approx 51.96$$

**Answer:** $30\\sqrt{3}$ square units (approximately 51.96)

**Note:** This formula is not on the SAT formula sheet but appears in harder problems.`
        },
        {
          topicId: geoTrig.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A ladder 20 feet long leans against a wall, making a 65° angle with the ground. How high up the wall does the ladder reach? How far is the base of the ladder from the wall?',
          solution: `**Step 1:** Draw the right triangle:
- Hypotenuse = ladder = 20 ft
- Angle with ground = 65°
- Height = opposite side
- Distance from wall = adjacent side

**Step 2:** Find the height (opposite):
$$\\sin 65° = \\frac{\\text{height}}{20}$$
$$\\text{height} = 20 \\sin 65° = 20(0.9063) \\approx 18.13 \\text{ ft}$$

**Step 3:** Find the distance from wall (adjacent):
$$\\cos 65° = \\frac{\\text{distance}}{20}$$
$$\\text{distance} = 20 \\cos 65° = 20(0.4226) \\approx 8.45 \\text{ ft}$$

**Check:** $18.13^2 + 8.45^2 \\approx 328.7 + 71.4 = 400.1 \\approx 20^2$ ✓

**Answer:** Height ≈ 18.13 ft, Distance from wall ≈ 8.45 ft`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: geoTrig.id,
          front: 'What is SOH CAH TOA?',
          back: '**S**in = **O**pposite / **H**ypotenuse, **C**os = **A**djacent / **H**ypotenuse, **T**an = **O**pposite / **A**djacent. These are the three basic trig ratios for right triangles.',
          hint: 'A mnemonic for the trig ratios'
        },
        {
          topicId: geoTrig.id,
          front: 'What are the side ratios in a 30-60-90 triangle?',
          back: '$1 : \\sqrt{3} : 2$. Short leg (opposite 30°) : Long leg (opposite 60°) : Hypotenuse. If the short leg is $a$, the long leg is $a\\sqrt{3}$ and the hypotenuse is $2a$.',
          hint: 'The hypotenuse is always twice the shortest side'
        },
        {
          topicId: geoTrig.id,
          front: 'What are the side ratios in a 45-45-90 triangle?',
          back: '$1 : 1 : \\sqrt{2}$. Both legs are equal, and the hypotenuse is $\\text{leg} \\times \\sqrt{2}$.',
          hint: 'It is an isosceles right triangle'
        },
        {
          topicId: geoTrig.id,
          front: 'What is the relationship between $\\sin(x)$ and $\\cos(90° - x)$?',
          back: 'They are EQUAL: $\\sin(x) = \\cos(90° - x)$. This is the complementary angle relationship. For example, $\\sin(30°) = \\cos(60°) = \\frac{1}{2}$.',
          hint: 'Co-sine = complement of sine'
        },
        {
          topicId: geoTrig.id,
          front: 'How do you convert degrees to radians?',
          back: 'Multiply by $\\frac{\\pi}{180}$. For example: $90° \\times \\frac{\\pi}{180} = \\frac{\\pi}{2}$ radians. To go from radians to degrees, multiply by $\\frac{180}{\\pi}$.',
          hint: '180° = π radians'
        },
        {
          topicId: geoTrig.id,
          front: 'What are the most common Pythagorean triples?',
          back: '3-4-5, 5-12-13, 8-15-17, 7-24-25. Also their multiples: 6-8-10, 9-12-15, 10-24-26, etc. Recognizing these saves time on the SAT!',
          hint: 'Memorize a few common ones'
        },
        {
          topicId: geoTrig.id,
          front: 'What is the Triangle Inequality Theorem?',
          back: 'The sum of any two sides of a triangle must be GREATER than the third side. For sides $a$, $b$, $c$: $a + b > c$, $a + c > b$, and $b + c > a$.',
          hint: 'Can these three lengths form a triangle?'
        }
      ]
    })

    console.log('✓ sat-geometry-trigonometry expanded')
  }

  // ============================================================
  // TOPIC 2: Geometry Basics
  // ============================================================
  const geoBasics = await prisma.topic.findUnique({
    where: { slug: 'sat-geometry-basics' }
  })

  if (geoBasics) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: geoBasics.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A rectangle has a length of 12 and a width of 5. What is its perimeter and area?',
          solution: `**Perimeter:** $P = 2l + 2w = 2(12) + 2(5) = 24 + 10 = 34$

**Area:** $A = lw = 12 \\times 5 = 60$

**Answer:** Perimeter = 34, Area = 60`
        },
        {
          topicId: geoBasics.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Two parallel lines are cut by a transversal. One of the angles formed is 115°. What are the measures of all eight angles?',
          solution: `**When parallel lines are cut by a transversal, we get two types of angles:**

The angle of 115° and its vertical angle are both 115°.
The supplementary angles are $180° - 115° = 65°$.

**All eight angles are either 115° or 65°:**
- Four angles of 115° (the angle, its vertical angle, and corresponding angles)
- Four angles of 65° (supplementary to the 115° angles)

**Answer:** Four angles are 115° and four are 65°.

**Key relationships used:** vertical angles, corresponding angles, supplementary angles.`
        },
        {
          topicId: geoBasics.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A rectangular box has dimensions 3 × 4 × 12. What is the length of the longest diagonal inside the box?',
          solution: `**3D diagonal formula:** $d = \\sqrt{l^2 + w^2 + h^2}$

$$d = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$$

**Answer:** The space diagonal is 13.

**Alternatively:** First find the diagonal of the base: $\\sqrt{3^2 + 4^2} = 5$ (3-4-5 triple), then use that with the height: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ (5-12-13 triple).`
        },
        {
          topicId: geoBasics.id,
          order: 13,
          difficulty: 'HARD',
          question: 'The volume of a cylinder is $100\\pi$ cubic cm and its height is 4 cm. What is the total surface area?',
          solution: `**Step 1:** Find the radius using the volume formula:
$$V = \\pi r^2 h$$
$$100\\pi = \\pi r^2 (4)$$
$$r^2 = 25$$
$$r = 5 \\text{ cm}$$

**Step 2:** Calculate total surface area (two circles + lateral surface):
$$SA = 2\\pi r^2 + 2\\pi rh$$
$$= 2\\pi(25) + 2\\pi(5)(4)$$
$$= 50\\pi + 40\\pi$$
$$= 90\\pi \\approx 282.74 \\text{ cm}^2$$

**Answer:** $90\\pi$ cm² (approximately 282.74 cm²)`
        },
        {
          topicId: geoBasics.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Two similar triangles have corresponding sides in the ratio $3:5$. If the area of the smaller triangle is 27 cm², what is the area of the larger triangle?',
          solution: `**Key property of similar figures:** If corresponding sides have ratio $k$, then areas have ratio $k^2$.

Side ratio: $\\frac{3}{5}$

Area ratio: $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$

$$\\frac{27}{A_{\\text{large}}} = \\frac{9}{25}$$
$$A_{\\text{large}} = \\frac{27 \\times 25}{9} = 75 \\text{ cm}^2$$

**Answer:** 75 cm²

**Remember:** Side ratio = $k$, Area ratio = $k^2$, Volume ratio = $k^3$.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: geoBasics.id,
          front: 'What is the formula for the area of a trapezoid?',
          back: '$A = \\frac{1}{2}(b_1 + b_2)h$ where $b_1$ and $b_2$ are the two parallel bases and $h$ is the height.',
          hint: 'Average the two bases and multiply by the height'
        },
        {
          topicId: geoBasics.id,
          front: 'What is the sum of the interior angles of a polygon with $n$ sides?',
          back: '$(n - 2) \\times 180°$. Triangle: $180°$, Quadrilateral: $360°$, Pentagon: $540°$, Hexagon: $720°$.',
          hint: 'Subtract 2 from the number of sides and multiply by 180'
        },
        {
          topicId: geoBasics.id,
          front: 'If two similar figures have sides in ratio $k$, what is the ratio of their areas?',
          back: 'Area ratio = $k^2$. If sides are in ratio $2:3$, areas are in ratio $4:9$. If sides are in ratio $1:5$, areas are in ratio $1:25$.',
          hint: 'Square the linear ratio'
        },
        {
          topicId: geoBasics.id,
          front: 'What are vertical angles and what is their key property?',
          back: 'Vertical angles are formed when two lines intersect — they are the angles across from each other. They are always EQUAL.',
          hint: 'Formed by intersecting lines, across from each other'
        },
        {
          topicId: geoBasics.id,
          front: 'What is the volume of a cone?',
          back: '$V = \\frac{1}{3}\\pi r^2 h$. It is exactly one-third the volume of a cylinder with the same base and height.',
          hint: 'One-third of the corresponding cylinder'
        },
        {
          topicId: geoBasics.id,
          front: 'What is the distance formula?',
          back: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. This comes from the Pythagorean theorem applied to coordinates.',
          hint: 'It is the Pythagorean theorem in coordinate form'
        },
        {
          topicId: geoBasics.id,
          front: 'What is the midpoint formula?',
          back: '$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$. Average the x-coordinates and average the y-coordinates.',
          hint: 'Average each coordinate'
        }
      ]
    })

    console.log('✓ sat-geometry-basics expanded')
  }

  // ============================================================
  // TOPIC 3: Circles
  // ============================================================
  const circles = await prisma.topic.findUnique({
    where: { slug: 'sat-circles' }
  })

  if (circles) {
    await prisma.topic.update({
      where: { id: circles.id },
      data: {
        textContent: `# Circles on the SAT

## Essential Circle Formulas

| Property | Formula |
|---|---|
| Area | $A = \\pi r^2$ |
| Circumference | $C = 2\\pi r = \\pi d$ |
| Diameter | $d = 2r$ |
| Arc length | $L = \\frac{\\theta}{360} \\times 2\\pi r$ |
| Sector area | $A = \\frac{\\theta}{360} \\times \\pi r^2$ |

---

## Equation of a Circle

### Standard Form
$$(x - h)^2 + (y - k)^2 = r^2$$

- Center: $(h, k)$
- Radius: $r$

### General Form
$$x^2 + y^2 + Dx + Ey + F = 0$$

To convert to standard form: **complete the square** for both $x$ and $y$.

**Example:**
$$x^2 + y^2 - 6x + 4y - 12 = 0$$
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$
$$(x - 3)^2 + (y + 2)^2 = 25$$

Center: $(3, -2)$, Radius: $5$

---

## Arc Length and Sector Area

An **arc** is a portion of the circumference. A **sector** is the "pie slice" region.

For a central angle of $\\theta$ degrees:

$$\\text{Arc length} = \\frac{\\theta}{360} \\times 2\\pi r$$

$$\\text{Sector area} = \\frac{\\theta}{360} \\times \\pi r^2$$

**Key insight:** The fraction $\\frac{\\theta}{360}$ represents what fraction of the full circle is captured.

---

## Central and Inscribed Angles

- **Central angle:** vertex at the center of the circle
- **Inscribed angle:** vertex on the circle

> An inscribed angle is **half** the central angle that subtends the same arc.

If a central angle is 80°, the inscribed angle on the same arc is 40°.

### Special case: Inscribed angle on a semicircle
If an inscribed angle subtends a diameter (semicircle), the angle is always **90°**.

---

## Tangent Lines

A **tangent line** touches the circle at exactly one point and is **perpendicular** to the radius at that point.

If a tangent and a radius meet at the point of tangency, they form a 90° angle.

---

## SAT Question Types

### Type 1: Find the Area or Circumference
Plug into the formulas. Watch for diameter vs. radius!

### Type 2: Equation of a Circle
Given center and radius → write equation, or given equation → find center and radius.

### Type 3: Complete the Square
Convert general form to standard form.

### Type 4: Arc Length / Sector Area
Use the fraction of the circle based on the central angle.

### Type 5: Inscribed/Central Angles
Use the 2:1 relationship between central and inscribed angles.

---

## Common SAT Mistakes

1. **Confusing radius and diameter** — the formula uses radius, but the problem may give diameter
2. **Forgetting to square** $r$ in the circle equation — it's $r^2$, not $r$
3. **Sign errors** in the circle equation — $(x-3)^2$ means center $x = 3$ (positive), not $-3$
4. **Using 360 instead of $2\\pi$** when the angle is in radians
5. **Not completing the square** properly when converting circle equations
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: circles.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A circle has a diameter of 14 cm. What is its area?',
          solution: `**Step 1:** Find the radius: $r = \\frac{d}{2} = \\frac{14}{2} = 7$ cm

**Step 2:** Calculate area:
$$A = \\pi r^2 = \\pi(7)^2 = 49\\pi \\approx 153.94 \\text{ cm}^2$$

**Answer:** $49\\pi$ cm² (approximately 153.94 cm²)

**Common mistake:** Using the diameter (14) instead of the radius (7) in the formula.`
        },
        {
          topicId: circles.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'What is the center and radius of the circle $(x + 3)^2 + (y - 5)^2 = 36$?',
          solution: `**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$

Compare with $(x + 3)^2 + (y - 5)^2 = 36$:

$(x + 3)^2 = (x - (-3))^2$, so $h = -3$
$(y - 5)^2$, so $k = 5$
$r^2 = 36$, so $r = 6$

**Center:** $(-3, 5)$
**Radius:** $6$

**Key:** Watch the signs! $(x + 3)^2$ means the center $x$-coordinate is $-3$, not $+3$.`
        },
        {
          topicId: circles.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A sector of a circle with radius 10 has a central angle of 72°. What is the area of the sector?',
          solution: `**Sector area formula:** $A = \\frac{\\theta}{360} \\times \\pi r^2$

$$A = \\frac{72}{360} \\times \\pi(10)^2 = \\frac{1}{5} \\times 100\\pi = 20\\pi \\approx 62.83$$

**Answer:** $20\\pi$ square units (approximately 62.83)

**Check:** 72° is $\\frac{1}{5}$ of 360°, so the sector is $\\frac{1}{5}$ of the full circle area. $\\frac{1}{5} \\times 100\\pi = 20\\pi$ ✓`
        },
        {
          topicId: circles.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Convert to standard form and find the center and radius:\n$$x^2 + y^2 + 8x - 10y + 16 = 0$$',
          solution: `**Step 1:** Group $x$ terms and $y$ terms, move constant:
$$(x^2 + 8x) + (y^2 - 10y) = -16$$

**Step 2:** Complete the square for $x$:
Half of 8 = 4, square it = 16
$$(x^2 + 8x + 16)$$

**Step 3:** Complete the square for $y$:
Half of $-10$ = $-5$, square it = 25
$$(y^2 - 10y + 25)$$

**Step 4:** Add the same values to the right side:
$$(x^2 + 8x + 16) + (y^2 - 10y + 25) = -16 + 16 + 25$$
$$(x + 4)^2 + (y - 5)^2 = 25$$

**Answer:** Center $(-4, 5)$, Radius $= \\sqrt{25} = 5$`
        },
        {
          topicId: circles.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A circle with center $(2, 3)$ is tangent to the line $y = -1$. What is the equation of the circle?',
          solution: `**Step 1:** "Tangent to the line $y = -1$" means the circle touches this horizontal line at exactly one point. The distance from the center to the line equals the radius.

**Step 2:** The distance from center $(2, 3)$ to the line $y = -1$ is:
$$r = |3 - (-1)| = |4| = 4$$

**Step 3:** Write the equation:
$$(x - 2)^2 + (y - 3)^2 = 16$$

**Check:** The closest point on the circle to $y = -1$ is directly below the center: $(2, 3-4) = (2, -1)$. This point is on the line $y = -1$ ✓

**Answer:** $(x - 2)^2 + (y - 3)^2 = 16$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: circles.id,
          front: 'What is the standard form of a circle\'s equation?',
          back: '$(x - h)^2 + (y - k)^2 = r^2$ where $(h, k)$ is the center and $r$ is the radius. Remember: $r^2$, not $r$!',
          hint: 'Center coordinates and radius squared'
        },
        {
          topicId: circles.id,
          front: 'How do you find the arc length?',
          back: '$L = \\frac{\\theta}{360} \\times 2\\pi r$ (degrees) or $L = r\\theta$ (radians). The arc length is a fraction of the total circumference.',
          hint: 'Fraction of the angle times the full circumference'
        },
        {
          topicId: circles.id,
          front: 'What is the relationship between an inscribed angle and a central angle?',
          back: 'An inscribed angle is HALF the central angle that subtends the same arc. If the central angle is 80°, the inscribed angle on the same arc is 40°.',
          hint: 'Inscribed = half of central'
        },
        {
          topicId: circles.id,
          front: 'How do you complete the square to find a circle\'s center and radius?',
          back: 'Group x and y terms. For each: take half the linear coefficient, square it, add to both sides. Example: $x^2 + 6x$ → half of 6 = 3, $3^2 = 9$ → $(x+3)^2$.',
          hint: 'Half the coefficient, square it, add to both sides'
        },
        {
          topicId: circles.id,
          front: 'What is special about a tangent line to a circle?',
          back: 'A tangent line touches the circle at exactly ONE point and is PERPENDICULAR to the radius at the point of tangency (forms a 90° angle).',
          hint: 'Perpendicular to the radius'
        },
        {
          topicId: circles.id,
          front: 'If a circle has area $36\\pi$, what is its circumference?',
          back: '$A = \\pi r^2 = 36\\pi \\implies r = 6$. Then $C = 2\\pi r = 12\\pi$.',
          hint: 'Find the radius from the area first'
        },
        {
          topicId: circles.id,
          front: 'An inscribed angle subtends a semicircle (diameter). What is the angle?',
          back: 'Always 90°. This is Thales\' theorem: any angle inscribed in a semicircle is a right angle.',
          hint: 'This is a famous theorem'
        }
      ]
    })

    console.log('✓ sat-circles expanded')
  }

  // ============================================================
  // TOPIC 4: Complex Numbers
  // ============================================================
  const complex = await prisma.topic.findUnique({
    where: { slug: 'sat-complex-numbers' }
  })

  if (complex) {
    await prisma.topic.update({
      where: { id: complex.id },
      data: {
        textContent: `# Complex Numbers on the SAT

## What Is a Complex Number?

A **complex number** has the form:
$$a + bi$$

Where:
- $a$ = real part
- $b$ = imaginary part
- $i = \\sqrt{-1}$ (the imaginary unit)

---

## The Imaginary Unit $i$

$$i = \\sqrt{-1}$$
$$i^2 = -1$$
$$i^3 = i^2 \\cdot i = -i$$
$$i^4 = (i^2)^2 = 1$$

The powers of $i$ cycle every 4:
$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1, \\quad i^5 = i, \\quad \\ldots$$

**To find $i^n$:** Divide $n$ by 4 and use the remainder.
- Remainder 0: $i^n = 1$
- Remainder 1: $i^n = i$
- Remainder 2: $i^n = -1$
- Remainder 3: $i^n = -i$

---

## Operations with Complex Numbers

### Addition and Subtraction
Combine real parts and imaginary parts separately:
$$(3 + 2i) + (5 - 4i) = 8 - 2i$$
$$(3 + 2i) - (5 - 4i) = -2 + 6i$$

### Multiplication
Use FOIL and remember $i^2 = -1$:
$$(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i - 3(-1) = 11 + 10i$$

### Division (Conjugates)
Multiply numerator and denominator by the **conjugate** of the denominator:

$$\\frac{3 + 2i}{1 - i} \\times \\frac{1 + i}{1 + i} = \\frac{3 + 3i + 2i + 2i^2}{1 - i^2} = \\frac{3 + 5i - 2}{1 + 1} = \\frac{1 + 5i}{2} = \\frac{1}{2} + \\frac{5}{2}i$$

---

## Complex Conjugates

The **conjugate** of $a + bi$ is $a - bi$.

**Key property:** $(a + bi)(a - bi) = a^2 + b^2$ (always a real number!)

This is why we multiply by the conjugate to divide — it eliminates $i$ from the denominator.

---

## Complex Numbers and Quadratics

When the discriminant $b^2 - 4ac < 0$, the quadratic has complex (non-real) solutions:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Example:** $x^2 + 4 = 0$
$$x^2 = -4$$
$$x = \\pm \\sqrt{-4} = \\pm 2i$$

---

## SAT Question Types

### Type 1: Simplify Powers of $i$
"What is $i^{23}$?" → $23 \\div 4 = 5$ remainder $3$ → $i^{23} = i^3 = -i$

### Type 2: Add/Subtract Complex Numbers
Combine real and imaginary parts separately.

### Type 3: Multiply Complex Numbers
Use FOIL, replace $i^2$ with $-1$.

### Type 4: Divide Complex Numbers
Multiply by the conjugate.

### Type 5: Solve Quadratics with Complex Solutions
Use the quadratic formula when discriminant < 0.

---

## Common SAT Mistakes

1. **Forgetting that $i^2 = -1$** (not $-i$ or $1$)
2. **Not multiplying by the conjugate** when dividing
3. **Treating $i$ like a variable** instead of replacing $i^2$ with $-1$
4. **Errors in the cycle of $i$** — remember the 4-cycle: $i, -1, -i, 1$
5. **Panicking** — complex number questions look harder than they are!
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: complex.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Simplify: $(4 + 3i) + (2 - 7i)$',
          solution: `**Add real parts and imaginary parts separately:**

Real: $4 + 2 = 6$
Imaginary: $3i + (-7i) = -4i$

**Answer:** $6 - 4i$`
        },
        {
          topicId: complex.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Simplify: $(3 + 2i)(4 - 5i)$',
          solution: `**Use FOIL:**

$$(3)(4) + (3)(-5i) + (2i)(4) + (2i)(-5i)$$
$$= 12 - 15i + 8i - 10i^2$$

**Replace $i^2$ with $-1$:**
$$= 12 - 7i - 10(-1)$$
$$= 12 - 7i + 10$$
$$= 22 - 7i$$

**Answer:** $22 - 7i$`
        },
        {
          topicId: complex.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'What is the value of $i^{50}$?',
          solution: `**The powers of $i$ cycle every 4:** $i, -1, -i, 1, i, -1, \\ldots$

**Divide the exponent by 4:** $50 \\div 4 = 12$ remainder $2$

**Use the remainder:** $i^{50} = i^2 = -1$

**Answer:** $-1$

**Quick reference:**
- Remainder 0 → $1$
- Remainder 1 → $i$
- Remainder 2 → $-1$
- Remainder 3 → $-i$`
        },
        {
          topicId: complex.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Write $\\frac{5 + 3i}{2 - i}$ in the form $a + bi$.',
          solution: `**Step 1:** Multiply by the conjugate of the denominator:
$$\\frac{5 + 3i}{2 - i} \\times \\frac{2 + i}{2 + i}$$

**Step 2:** Multiply the numerator:
$$(5 + 3i)(2 + i) = 10 + 5i + 6i + 3i^2 = 10 + 11i + 3(-1) = 7 + 11i$$

**Step 3:** Multiply the denominator:
$$(2 - i)(2 + i) = 4 - i^2 = 4 - (-1) = 5$$

**Step 4:** Divide:
$$\\frac{7 + 11i}{5} = \\frac{7}{5} + \\frac{11}{5}i$$

**Answer:** $\\frac{7}{5} + \\frac{11}{5}i$`
        },
        {
          topicId: complex.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Find both solutions to $x^2 + 2x + 5 = 0$.',
          solution: `**Step 1:** Check the discriminant:
$$b^2 - 4ac = 4 - 20 = -16$$

Since $\\Delta < 0$, the solutions are complex.

**Step 2:** Apply the quadratic formula:
$$x = \\frac{-2 \\pm \\sqrt{-16}}{2}$$
$$= \\frac{-2 \\pm 4i}{2}$$
$$= -1 \\pm 2i$$

**Answer:** $x = -1 + 2i$ and $x = -1 - 2i$

**Notice:** The solutions are complex conjugates of each other. This is always the case for quadratics with real coefficients and complex roots.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: complex.id,
          front: 'What is $i$ and what is $i^2$?',
          back: '$i = \\sqrt{-1}$ (the imaginary unit). $i^2 = -1$. This is the foundation of all complex number operations.',
          hint: 'It is defined as the square root of negative one'
        },
        {
          topicId: complex.id,
          front: 'What is the cycle of powers of $i$?',
          back: '$i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, then it repeats. To find $i^n$, divide $n$ by 4 and use the remainder.',
          hint: 'It repeats every 4 powers'
        },
        {
          topicId: complex.id,
          front: 'What is the conjugate of $a + bi$?',
          back: '$a - bi$. Flip the sign of the imaginary part. Key property: $(a+bi)(a-bi) = a^2 + b^2$ (a real number).',
          hint: 'Change the sign of the imaginary part'
        },
        {
          topicId: complex.id,
          front: 'How do you divide complex numbers?',
          back: 'Multiply numerator and denominator by the CONJUGATE of the denominator. This eliminates $i$ from the denominator. Example: $\\frac{a+bi}{c+di} \\times \\frac{c-di}{c-di}$.',
          hint: 'Multiply by the conjugate of the bottom'
        },
        {
          topicId: complex.id,
          front: 'When does a quadratic equation have complex solutions?',
          back: 'When the discriminant $b^2 - 4ac < 0$. The solutions come in conjugate pairs: $\\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$.',
          hint: 'Negative discriminant'
        },
        {
          topicId: complex.id,
          front: 'What is $\\sqrt{-25}$ in terms of $i$?',
          back: '$\\sqrt{-25} = \\sqrt{25} \\cdot \\sqrt{-1} = 5i$. Factor out the negative as $i$, then take the square root of the positive part.',
          hint: 'Separate the negative sign as i'
        },
        {
          topicId: complex.id,
          front: 'How do you add complex numbers?',
          back: 'Add real parts together and imaginary parts together: $(a+bi) + (c+di) = (a+c) + (b+d)i$. They combine like "like terms."',
          hint: 'Real with real, imaginary with imaginary'
        }
      ]
    })

    console.log('✓ sat-complex-numbers expanded')
  }

  console.log('\n✅ SAT Additional Topics expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
