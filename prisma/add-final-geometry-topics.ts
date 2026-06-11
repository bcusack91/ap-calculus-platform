import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more comprehensive Geometry topics...')

  const geometryCourse = await prisma.course.findUnique({
    where: { slug: 'geometry' }
  })

  if (!geometryCourse) {
    throw new Error('Geometry course not found')
  }

  // Get existing categories
  const triangles = await prisma.category.findUnique({
    where: { slug: 'geometry-triangles' }
  })

  const circles = await prisma.category.findUnique({
    where: { slug: 'geometry-circles' }
  })

  // NEW CATEGORY: Area and Perimeter
  const areaPerimeter = await prisma.category.upsert({
    where: { slug: 'geometry-area-perimeter' },
    update: {},
    create: {
      slug: 'geometry-area-perimeter',
      name: 'Area and Perimeter',
      order: 5,
      courseId: geometryCourse.id
    }
  })

  // NEW CATEGORY: Coordinate Geometry
  const coordGeometry = await prisma.category.upsert({
    where: { slug: 'geometry-coordinate' },
    update: {},
    create: {
      slug: 'geometry-coordinate',
      name: 'Coordinate Geometry',
      order: 6,
      courseId: geometryCourse.id
    }
  })

  // NEW CATEGORY: Solid Geometry
  const solidGeometry = await prisma.category.upsert({
    where: { slug: 'geometry-solid' },
    update: {},
    create: {
      slug: 'geometry-solid',
      name: 'Solid Geometry',
      order: 7,
      courseId: geometryCourse.id
    }
  })

  // Topic: Special Right Triangles
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'special-right-triangles' },
    update: {},
    create: {
      slug: 'special-right-triangles',
      title: 'Special Right Triangles',
      description: '45-45-90 and 30-60-90 triangles',
      order: 5,
      categoryId: triangles!.id,
      textContent: `# Special Right Triangles

## 45-45-90 Triangle

An **isosceles right triangle** with angles 45°, 45°, and 90°.

**Side Ratios:**
$$x : x : x\\sqrt{2}$$

Where:
- $x$ = length of each leg
- $x\\sqrt{2}$ = length of hypotenuse

**Key Pattern:**
If legs = 1, then hypotenuse = $\\sqrt{2}$

**Example:** If each leg is 5, hypotenuse = $5\\sqrt{2}$

## 30-60-90 Triangle

A right triangle with angles 30°, 60°, and 90°.

**Side Ratios:**
$$x : x\\sqrt{3} : 2x$$

Where:
- $x$ = length of side opposite 30° (shortest side)
- $x\\sqrt{3}$ = length of side opposite 60°
- $2x$ = length of hypotenuse (opposite 90°)

**Key Pattern:**
If short leg = 1, then long leg = $\\sqrt{3}$, hypotenuse = 2

**Example:** If short leg is 6, long leg = $6\\sqrt{3}$, hypotenuse = 12

## Why These Are Useful

- Appear frequently in geometry problems
- Can solve without Pythagorean Theorem
- Used in trigonometry
- Found in regular polygons and circles

## Remember

**45-45-90:** legs equal, hypotenuse = leg × $\\sqrt{2}$

**30-60-90:** hypotenuse = 2 × short leg, long leg = short leg × $\\sqrt{3}$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'In a 45-45-90 triangle, each leg has length 8. Find the hypotenuse.',
        solution: `In a 45-45-90 triangle, the hypotenuse = leg × $\\sqrt{2}$

$$\\text{Hypotenuse} = 8\\sqrt{2}$$

**Answer:** $8\\sqrt{2}$ (or approximately 11.31)`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'In a 30-60-90 triangle, the hypotenuse is 20. Find both legs.',
        solution: `In a 30-60-90 triangle, sides are in ratio $x : x\\sqrt{3} : 2x$

**Hypotenuse = $2x$:**
$$2x = 20$$
$$x = 10$$

**Short leg (opposite 30°):** $x = 10$

**Long leg (opposite 60°):** $x\\sqrt{3} = 10\\sqrt{3}$

**Answer:** Short leg = $10$, Long leg = $10\\sqrt{3}$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A 45-45-90 triangle has a hypotenuse of $12\\sqrt{2}$. Find the area of the triangle.',
        solution: `**Step 1:** Find the leg length

In 45-45-90 triangle: hypotenuse = leg × $\\sqrt{2}$
$$\\text{leg} \\times \\sqrt{2} = 12\\sqrt{2}$$
$$\\text{leg} = 12$$

**Step 2:** Find area (both legs are equal)
$$A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$
$$A = \\frac{1}{2} \\times 12 \\times 12$$
$$A = 72$$

**Answer:** Area = $72$ square units`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What are the side ratios for a 45-45-90 triangle?', back: 'x : x : x√2 (leg : leg : hypotenuse)' },
      { topicId: topic1.id, front: 'What are the side ratios for a 30-60-90 triangle?', back: 'x : x√3 : 2x (short leg : long leg : hypotenuse)' },
      { topicId: topic1.id, front: 'In a 30-60-90 triangle, if the short leg is 5, what is the hypotenuse?', back: '10 (hypotenuse is always 2 × short leg)' }
    ]
  })

  console.log('✓ Created topic: Special Right Triangles (3 examples, 3 flashcards)')

  // Topic: Area of Triangles and Quadrilaterals
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'area-triangles-quadrilaterals' },
    update: {},
    create: {
      slug: 'area-triangles-quadrilaterals',
      title: 'Area of Triangles and Quadrilaterals',
      description: 'Formulas for calculating area',
      order: 1,
      categoryId: areaPerimeter.id,
      textContent: `# Area of Triangles and Quadrilaterals

## Triangle

**Basic formula:**
$$A = \\frac{1}{2}bh$$
where $b$ = base, $h$ = height (perpendicular to base)

**Heron's Formula** (when you know all three sides):
$$A = \\sqrt{s(s-a)(s-b)(s-c)}$$
where $s = \\frac{a+b+c}{2}$ (semi-perimeter)

## Rectangle

$$A = lw$$
where $l$ = length, $w$ = width

## Parallelogram

$$A = bh$$
where $b$ = base, $h$ = height (perpendicular distance between parallel sides)

## Trapezoid

$$A = \\frac{1}{2}(b_1 + b_2)h$$
where $b_1$ and $b_2$ are the parallel bases, $h$ = height

Can also write as: $A = \\frac{1}{2}h(b_1 + b_2)$ or $A = mh$ where $m$ is the midsegment

## Rhombus

**Method 1:** $A = bh$ (like parallelogram)

**Method 2:** $A = \\frac{1}{2}d_1 d_2$ (using diagonals)

## Square

$$A = s^2$$
where $s$ = side length

## Key Strategy

Always identify the **base** and **perpendicular height**!`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the area of a triangle with base 10 and height 6.',
        solution: `Use the formula:
$$A = \\frac{1}{2}bh$$

$$A = \\frac{1}{2}(10)(6)$$

$$A = \\frac{60}{2} = 30$$

**Answer:** 30 square units`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A trapezoid has bases of 8 and 12, and a height of 5. Find the area.',
        solution: `Use the trapezoid formula:
$$A = \\frac{1}{2}(b_1 + b_2)h$$

$$A = \\frac{1}{2}(8 + 12)(5)$$

$$A = \\frac{1}{2}(20)(5)$$

$$A = 50$$

**Answer:** 50 square units`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A rhombus has diagonals of length 10 and 24. Find its area.',
        solution: `For a rhombus, use the diagonal formula:
$$A = \\frac{1}{2}d_1 d_2$$

$$A = \\frac{1}{2}(10)(24)$$

$$A = \\frac{240}{2}$$

$$A = 120$$

**Answer:** 120 square units`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is the formula for the area of a triangle?', back: 'A = ½bh (half base times height)' },
      { topicId: topic2.id, front: 'What is the formula for the area of a trapezoid?', back: 'A = ½(b₁ + b₂)h (average of bases times height)' },
      { topicId: topic2.id, front: 'How do you find the area of a rhombus using diagonals?', back: 'A = ½d₁d₂ (half the product of the diagonals)' }
    ]
  })

  console.log('✓ Created topic: Area of Triangles and Quadrilaterals (3 examples, 3 flashcards)')

  // Topic: Sector Area and Arc Length
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'sector-area-arc-length' },
    update: {},
    create: {
      slug: 'sector-area-arc-length',
      title: 'Sector Area and Arc Length',
      description: 'Finding areas and lengths of circle sectors',
      order: 3,
      categoryId: circles!.id,
      textContent: `# Sector Area and Arc Length

## Sector

A **sector** is a "slice" of a circle, like a piece of pie.

It's bounded by two radii and an arc.

## Arc Length

The length of the curved part of the sector.

**Formula:**
$$L = \\frac{\\theta}{360°} \\times 2\\pi r$$

Or in radians:
$$L = r\\theta$$

## Sector Area

The area of the "slice."

**Formula:**
$$A = \\frac{\\theta}{360°} \\times \\pi r^2$$

Or in radians:
$$A = \\frac{1}{2}r^2\\theta$$

## Segment

The region between a chord and the arc it cuts off.

**Area of segment** = Area of sector - Area of triangle

## Strategy

1. Find the **fraction** of the circle: $\\frac{\\theta}{360°}$
2. Multiply by the **whole circle** (circumference or area)

## Common Sectors

- **Semicircle:** $\\theta = 180°$ → half circle
- **Quarter circle:** $\\theta = 90°$ → one-fourth circle`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the arc length of a sector with radius 6 and central angle 60°.',
        solution: `Use the arc length formula:
$$L = \\frac{\\theta}{360°} \\times 2\\pi r$$

$$L = \\frac{60}{360} \\times 2\\pi(6)$$

$$L = \\frac{1}{6} \\times 12\\pi$$

$$L = 2\\pi$$

**Answer:** $2\\pi$ (or approximately 6.28) units`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the area of a sector with radius 8 and central angle 135°.',
        solution: `Use the sector area formula:
$$A = \\frac{\\theta}{360°} \\times \\pi r^2$$

$$A = \\frac{135}{360} \\times \\pi(8)^2$$

$$A = \\frac{3}{8} \\times 64\\pi$$

$$A = 24\\pi$$

**Answer:** $24\\pi$ (or approximately 75.4) square units`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A sector has radius 10 and arc length $5\\pi$. Find the central angle and the area of the sector.',
        solution: `**Step 1:** Find the central angle using arc length

$$L = \\frac{\\theta}{360°} \\times 2\\pi r$$

$$5\\pi = \\frac{\\theta}{360} \\times 2\\pi(10)$$

$$5\\pi = \\frac{\\theta}{360} \\times 20\\pi$$

$$5 = \\frac{\\theta}{360} \\times 20$$

$$5 = \\frac{20\\theta}{360}$$

$$\\theta = 90°$$

**Step 2:** Find the sector area

$$A = \\frac{90}{360} \\times \\pi(10)^2$$

$$A = \\frac{1}{4} \\times 100\\pi = 25\\pi$$

**Answer:** Central angle = $90°$, Area = $25\\pi$ square units`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is the formula for arc length?', back: 'L = (θ/360°) × 2πr' },
      { topicId: topic3.id, front: 'What is the formula for sector area?', back: 'A = (θ/360°) × πr²' },
      { topicId: topic3.id, front: 'What fraction of a circle is a 90° sector?', back: '1/4 (quarter circle)' }
    ]
  })

  console.log('✓ Created topic: Sector Area and Arc Length (3 examples, 3 flashcards)')

  // Topic: Distance and Midpoint Formulas
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'distance-midpoint-formulas' },
    update: {},
    create: {
      slug: 'distance-midpoint-formulas',
      title: 'Distance and Midpoint Formulas',
      description: 'Working with coordinates in the plane',
      order: 1,
      categoryId: coordGeometry.id,
      textContent: `# Distance and Midpoint Formulas

## Distance Formula

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Derivation:** This comes from the Pythagorean Theorem!

## Midpoint Formula

The midpoint between two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

**Memory aid:** Average the x-coordinates, average the y-coordinates.

## Applications

**Perimeter:** Add distances between consecutive vertices

**Proving shapes:** 
- Square: All 4 sides equal, diagonals equal
- Rectangle: Opposite sides equal, diagonals equal
- Rhombus: All 4 sides equal
- Isosceles triangle: Two sides equal

## Segment Partitioning

To find a point that divides a segment in ratio $m:n$:

Use weighted average based on the ratio

## Coordinate Proof Strategy

1. Place figure on coordinate plane strategically
2. Use distance/midpoint formulas
3. Show required properties`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the distance between points $(3, 4)$ and $(7, 1)$.',
        solution: `Use the distance formula:
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

$$d = \\sqrt{(7 - 3)^2 + (1 - 4)^2}$$

$$d = \\sqrt{4^2 + (-3)^2}$$

$$d = \\sqrt{16 + 9}$$

$$d = \\sqrt{25} = 5$$

**Answer:** 5 units`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the midpoint of the segment connecting $(-2, 5)$ and $(6, -3)$.',
        solution: `Use the midpoint formula:
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$

$$M = \\left(\\frac{-2 + 6}{2}, \\frac{5 + (-3)}{2}\\right)$$

$$M = \\left(\\frac{4}{2}, \\frac{2}{2}\\right)$$

$$M = (2, 1)$$

**Answer:** $(2, 1)$`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Prove that the triangle with vertices $A(0, 0)$, $B(5, 0)$, and $C(5, 12)$ is a right triangle.',
        solution: `**Strategy:** Show that the sides satisfy the Pythagorean Theorem.

**Find all three side lengths:**

$AB$: from $(0,0)$ to $(5,0)$
$$AB = \\sqrt{(5-0)^2 + (0-0)^2} = 5$$

$BC$: from $(5,0)$ to $(5,12)$
$$BC = \\sqrt{(5-5)^2 + (12-0)^2} = 12$$

$AC$: from $(0,0)$ to $(5,12)$
$$AC = \\sqrt{(5-0)^2 + (12-0)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$

**Check Pythagorean Theorem:**
$$AB^2 + BC^2 = 5^2 + 12^2 = 25 + 144 = 169$$
$$AC^2 = 13^2 = 169$$

Since $AB^2 + BC^2 = AC^2$, the triangle is a **right triangle**.

**Answer:** Yes, it's a right triangle (in fact, a 5-12-13 right triangle)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What is the distance formula?', back: 'd = √[(x₂-x₁)² + (y₂-y₁)²]' },
      { topicId: topic4.id, front: 'What is the midpoint formula?', back: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)' },
      { topicId: topic4.id, front: 'How do you find the midpoint?', back: 'Average the x-coordinates and average the y-coordinates' }
    ]
  })

  console.log('✓ Created topic: Distance and Midpoint Formulas (3 examples, 3 flashcards)')

  // Topic: Slope and Equations of Lines
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'slope-equations-lines-geometry' },
    update: {},
    create: {
      slug: 'slope-equations-lines-geometry',
      title: 'Slope and Equations of Lines',
      description: 'Finding and using slope in geometry',
      order: 2,
      categoryId: coordGeometry.id,
      textContent: `# Slope and Equations of Lines

## Slope Formula

The slope between points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

## Types of Slope

**Positive slope:** Line rises (goes up from left to right)

**Negative slope:** Line falls (goes down from left to right)

**Zero slope:** Horizontal line ($y = k$)

**Undefined slope:** Vertical line ($x = k$)

## Parallel Lines

Parallel lines have **equal slopes**: $m_1 = m_2$

## Perpendicular Lines

Perpendicular lines have **negative reciprocal slopes**: $m_1 \\cdot m_2 = -1$

Or: $m_2 = -\\frac{1}{m_1}$

## Equation Forms

**Slope-intercept form:**
$$y = mx + b$$

**Point-slope form:**
$$y - y_1 = m(x - x_1)$$

**Standard form:**
$$Ax + By = C$$

## Applications

- Proving lines are parallel or perpendicular
- Finding equations of medians, altitudes, perpendicular bisectors
- Coordinate proofs`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the slope of the line through $(2, 3)$ and $(6, 11)$.',
        solution: `Use the slope formula:
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

$$m = \\frac{11 - 3}{6 - 2}$$

$$m = \\frac{8}{4} = 2$$

**Answer:** Slope = $2$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Are the lines through $(1, 2)$, $(3, 6)$ and $(0, 5)$, $(2, 9)$ parallel, perpendicular, or neither?',
        solution: `**Find slope of first line:**
$$m_1 = \\frac{6 - 2}{3 - 1} = \\frac{4}{2} = 2$$

**Find slope of second line:**
$$m_2 = \\frac{9 - 5}{2 - 0} = \\frac{4}{2} = 2$$

Since $m_1 = m_2 = 2$, the lines are **parallel**.

**Answer:** Parallel`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Find the equation of the line perpendicular to $y = 3x - 2$ that passes through $(6, 1)$.',
        solution: `**Step 1:** Find the perpendicular slope

Original slope: $m_1 = 3$

Perpendicular slope: $m_2 = -\\frac{1}{3}$

**Step 2:** Use point-slope form with $(6, 1)$

$$y - y_1 = m(x - x_1)$$

$$y - 1 = -\\frac{1}{3}(x - 6)$$

**Step 3:** Simplify to slope-intercept form

$$y - 1 = -\\frac{1}{3}x + 2$$

$$y = -\\frac{1}{3}x + 3$$

**Answer:** $y = -\\frac{1}{3}x + 3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is the slope formula?', back: 'm = (y₂ - y₁)/(x₂ - x₁) or rise/run' },
      { topicId: topic5.id, front: 'What is true about slopes of parallel lines?', back: 'They are equal (m₁ = m₂)' },
      { topicId: topic5.id, front: 'What is true about slopes of perpendicular lines?', back: 'They are negative reciprocals (m₁ · m₂ = -1)' }
    ]
  })

  console.log('✓ Created topic: Slope and Equations of Lines (3 examples, 3 flashcards)')

  // Topic: Volume of Solids
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'volume-of-solids' },
    update: {},
    create: {
      slug: 'volume-of-solids',
      title: 'Volume of Solids',
      description: 'Finding volumes of prisms, pyramids, cylinders, cones, and spheres',
      order: 1,
      categoryId: solidGeometry.id,
      textContent: `# Volume of Solids

## Prisms

**Volume:** $V = Bh$

where $B$ = area of base, $h$ = height

**Rectangular prism (box):**
$$V = lwh$$

**Cube:**
$$V = s^3$$

## Cylinder

$$V = \\pi r^2 h$$

where $r$ = radius, $h$ = height

## Pyramids

**Volume:** $V = \\frac{1}{3}Bh$

where $B$ = area of base, $h$ = height

**Note:** Pyramids are $\\frac{1}{3}$ the volume of a prism with the same base and height!

## Cone

$$V = \\frac{1}{3}\\pi r^2 h$$

where $r$ = radius of base, $h$ = height

**Note:** Cones are $\\frac{1}{3}$ the volume of a cylinder with the same base and height!

## Sphere

$$V = \\frac{4}{3}\\pi r^3$$

where $r$ = radius

## Key Patterns

- **Prisms and cylinders:** Full base times height
- **Pyramids and cones:** $\\frac{1}{3}$ base times height
- **Sphere:** Use $\\frac{4}{3}\\pi r^3$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the volume of a rectangular prism with length 5, width 3, and height 4.',
        solution: `Use $V = lwh$:

$$V = (5)(3)(4)$$

$$V = 60$$

**Answer:** 60 cubic units`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A cylinder has radius 4 and height 10. Find the volume.',
        solution: `Use $V = \\pi r^2 h$:

$$V = \\pi(4)^2(10)$$

$$V = \\pi(16)(10)$$

$$V = 160\\pi$$

**Answer:** $160\\pi$ (or approximately 502.7) cubic units`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A cone and a cylinder have the same radius of 6 and the same height of 9. How many times greater is the volume of the cylinder than the cone?',
        solution: `**Cylinder volume:**
$$V_{cyl} = \\pi r^2 h = \\pi(6)^2(9) = 324\\pi$$

**Cone volume:**
$$V_{cone} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6)^2(9) = 108\\pi$$

**Ratio:**
$$\\frac{V_{cyl}}{V_{cone}} = \\frac{324\\pi}{108\\pi} = 3$$

**Answer:** The cylinder's volume is **3 times** the cone's volume

(This is always true for cone and cylinder with same base and height!)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'What is the formula for the volume of a cylinder?', back: 'V = πr²h' },
      { topicId: topic6.id, front: 'What is the formula for the volume of a cone?', back: 'V = ⅓πr²h' },
      { topicId: topic6.id, front: 'What is the formula for the volume of a sphere?', back: 'V = (4/3)πr³' }
    ]
  })

  console.log('✓ Created topic: Volume of Solids (3 examples, 3 flashcards)')

  // Topic: Surface Area
  const topic7 = await prisma.topic.upsert({
    where: { slug: 'surface-area-geometry' },
    update: {},
    create: {
      slug: 'surface-area-geometry',
      title: 'Surface Area',
      description: 'Finding surface areas of 3D shapes',
      order: 2,
      categoryId: solidGeometry.id,
      textContent: `# Surface Area

## Rectangular Prism (Box)

$$SA = 2lw + 2lh + 2wh$$

Or: $SA = 2(lw + lh + wh)$

**Cube:**
$$SA = 6s^2$$

## Cylinder

$$SA = 2\\pi r^2 + 2\\pi rh$$

- $2\\pi r^2$ = two circular bases
- $2\\pi rh$ = lateral (curved) surface

**Lateral surface only:** $LA = 2\\pi rh$

## Sphere

$$SA = 4\\pi r^2$$

**Memory aid:** Same as $\\frac{dV}{dr}$ where $V = \\frac{4}{3}\\pi r^3$

## Cone

$$SA = \\pi r^2 + \\pi r\\ell$$

where:
- $\\pi r^2$ = circular base
- $\\pi r\\ell$ = lateral surface
- $\\ell$ = slant height

**To find slant height:** $\\ell = \\sqrt{r^2 + h^2}$ (Pythagorean theorem)

## Pyramid

$$SA = B + \\frac{1}{2}P\\ell$$

where:
- $B$ = area of base
- $P$ = perimeter of base
- $\\ell$ = slant height

## Strategy

1. Identify all faces/surfaces
2. Find area of each
3. Add them up`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic7.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the surface area of a cube with side length 4.',
        solution: `A cube has 6 congruent square faces.

$$SA = 6s^2$$

$$SA = 6(4)^2$$

$$SA = 6(16)$$

$$SA = 96$$

**Answer:** 96 square units`
      },
      {
        topicId: topic7.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the surface area of a cylinder with radius 3 and height 8.',
        solution: `Use $SA = 2\\pi r^2 + 2\\pi rh$:

$$SA = 2\\pi(3)^2 + 2\\pi(3)(8)$$

$$SA = 2\\pi(9) + 2\\pi(24)$$

$$SA = 18\\pi + 48\\pi$$

$$SA = 66\\pi$$

**Answer:** $66\\pi$ (or approximately 207.3) square units`
      },
      {
        topicId: topic7.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A cone has radius 5 and height 12. Find the surface area.',
        solution: `**Step 1:** Find slant height using Pythagorean theorem

$$\\ell = \\sqrt{r^2 + h^2}$$
$$\\ell = \\sqrt{5^2 + 12^2}$$
$$\\ell = \\sqrt{25 + 144}$$
$$\\ell = \\sqrt{169} = 13$$

**Step 2:** Calculate surface area

$$SA = \\pi r^2 + \\pi r\\ell$$
$$SA = \\pi(5)^2 + \\pi(5)(13)$$
$$SA = 25\\pi + 65\\pi$$
$$SA = 90\\pi$$

**Answer:** $90\\pi$ (or approximately 282.7) square units`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic7.id, front: 'What is the formula for surface area of a sphere?', back: 'SA = 4πr²' },
      { topicId: topic7.id, front: 'What is the formula for surface area of a cylinder?', back: 'SA = 2πr² + 2πrh (two bases plus lateral surface)' },
      { topicId: topic7.id, front: 'What is the formula for surface area of a cube?', back: 'SA = 6s² (six congruent square faces)' }
    ]
  })

  console.log('✓ Created topic: Surface Area (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more comprehensive Geometry topics!')
  console.log('   New categories: 3 (Area/Perimeter, Coordinate Geometry, Solid Geometry)')
  console.log('   New topics: 7')
  console.log('   Total example problems added: 21')
  console.log('   Total flashcards added: 21')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
