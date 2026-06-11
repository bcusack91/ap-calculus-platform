import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more Geometry topics...')

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

  // NEW CATEGORY: Quadrilaterals and Polygons
  const quadrilaterals = await prisma.category.upsert({
    where: { slug: 'geometry-quadrilaterals' },
    update: {},
    create: {
      slug: 'geometry-quadrilaterals',
      name: 'Quadrilaterals and Polygons',
      order: 3,
      courseId: geometryCourse.id
    }
  })

  // NEW CATEGORY: Circles
  const circles = await prisma.category.upsert({
    where: { slug: 'geometry-circles' },
    update: {},
    create: {
      slug: 'geometry-circles',
      name: 'Circles',
      order: 4,
      courseId: geometryCourse.id
    }
  })

  // Topic: Similar Triangles
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'similar-triangles-geometry' },
    update: {},
    create: {
      slug: 'similar-triangles-geometry',
      title: 'Similar Triangles',
      description: 'AA, SAS, and SSS similarity theorems',
      order: 4,
      categoryId: triangles!.id,
      textContent: `# Similar Triangles

## Definition

Two triangles are **similar** if:
- All corresponding angles are congruent
- All corresponding sides are proportional

Symbol: $\\triangle ABC \\sim \\triangle DEF$

## Similarity Postulates

### AA (Angle-Angle)
If two angles of one triangle are congruent to two angles of another triangle, the triangles are similar.

**Note:** If two angles match, the third must also match (angle sum = 180°)

### SAS (Side-Angle-Side)
If two sides of one triangle are proportional to two sides of another triangle AND the included angles are congruent, the triangles are similar.

### SSS (Side-Side-Side)
If all three pairs of corresponding sides are proportional, the triangles are similar.

## Scale Factor

The ratio of corresponding sides:
$$k = \\frac{\\text{side in triangle 1}}{\\text{corresponding side in triangle 2}}$$

## Properties

If $\\triangle ABC \\sim \\triangle DEF$ with scale factor $k$:
- Perimeters are in ratio $k:1$
- Areas are in ratio $k^2:1$

## Applications

- Finding unknown lengths
- Indirect measurement
- Proving geometric relationships`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'In $\\triangle ABC$, $\\angle A = 50°$ and $\\angle B = 60°$. In $\\triangle DEF$, $\\angle D = 50°$ and $\\angle E = 60°$. Are the triangles similar?',
        solution: `Two angles of $\\triangle ABC$ are congruent to two angles of $\\triangle DEF$:
- $\\angle A \\cong \\angle D$ (both $50°$)
- $\\angle B \\cong \\angle E$ (both $60°$)

By **AA (Angle-Angle)** similarity, the triangles are similar.

**Answer:** Yes, $\\triangle ABC \\sim \\triangle DEF$ by AA`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'If $\\triangle ABC \\sim \\triangle XYZ$ with sides $AB = 6$, $BC = 8$, $AC = 10$ and $XY = 9$, find $YZ$ and $XZ$.',
        solution: `Find the scale factor using corresponding sides:
$$k = \\frac{XY}{AB} = \\frac{9}{6} = \\frac{3}{2}$$

**For YZ (corresponds to BC):**
$$\\frac{YZ}{BC} = \\frac{3}{2}$$
$$\\frac{YZ}{8} = \\frac{3}{2}$$
$$YZ = 12$$

**For XZ (corresponds to AC):**
$$\\frac{XZ}{AC} = \\frac{3}{2}$$
$$\\frac{XZ}{10} = \\frac{3}{2}$$
$$XZ = 15$$

**Answer:** $YZ = 12$, $XZ = 15$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A tree casts a shadow 24 feet long at the same time a 6-foot person casts a 4-foot shadow. How tall is the tree?',
        solution: `The sun creates similar triangles (same angle).

**Set up proportion:**
$$\\frac{\\text{tree height}}{\\text{tree shadow}} = \\frac{\\text{person height}}{\\text{person shadow}}$$

$$\\frac{h}{24} = \\frac{6}{4}$$

**Solve:**
$$4h = 144$$
$$h = 36$$

**Answer:** The tree is 36 feet tall`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What is the AA similarity theorem?', back: 'If two angles of one triangle are congruent to two angles of another, the triangles are similar' },
      { topicId: topic1.id, front: 'What is the scale factor?', back: 'The ratio of corresponding sides in similar figures' },
      { topicId: topic1.id, front: 'If two triangles are similar with scale factor k, how are their areas related?', back: 'Areas are in ratio k²:1' }
    ]
  })

  console.log('✓ Created topic: Similar Triangles (3 examples, 3 flashcards)')

  // Topic: Properties of Quadrilaterals
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'properties-quadrilaterals' },
    update: {},
    create: {
      slug: 'properties-quadrilaterals',
      title: 'Properties of Quadrilaterals',
      description: 'Parallelograms, rectangles, rhombi, squares, and trapezoids',
      order: 1,
      categoryId: quadrilaterals.id,
      textContent: `# Properties of Quadrilaterals

## Parallelogram

A quadrilateral with **both pairs of opposite sides parallel**.

**Properties:**
- Opposite sides are congruent
- Opposite angles are congruent
- Consecutive angles are supplementary
- Diagonals bisect each other

## Rectangle

A parallelogram with **four right angles**.

**Additional properties:**
- All properties of parallelograms
- Diagonals are congruent

## Rhombus

A parallelogram with **four congruent sides**.

**Additional properties:**
- All properties of parallelograms
- Diagonals are perpendicular
- Diagonals bisect the angles

## Square

A parallelogram that is **both a rectangle and a rhombus**.

**Properties:**
- Four congruent sides
- Four right angles
- Diagonals are congruent and perpendicular
- Diagonals bisect the angles

## Trapezoid

A quadrilateral with **exactly one pair of parallel sides**.

**Parts:**
- **Bases:** the parallel sides
- **Legs:** the non-parallel sides
- **Midsegment:** connects midpoints of legs, length = $\\frac{b_1 + b_2}{2}$

## Isosceles Trapezoid

A trapezoid with **congruent legs**.

**Properties:**
- Base angles are congruent
- Diagonals are congruent`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'In parallelogram ABCD, $\\angle A = 65°$. Find $\\angle C$.',
        solution: `In a parallelogram, **opposite angles are congruent**.

Since $\\angle A$ and $\\angle C$ are opposite:
$$\\angle C = \\angle A = 65°$$

**Answer:** $\\angle C = 65°$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A trapezoid has bases of length 8 and 14. Find the length of the midsegment.',
        solution: `The **midsegment** of a trapezoid equals the average of the bases:

$$M = \\frac{b_1 + b_2}{2}$$

$$M = \\frac{8 + 14}{2} = \\frac{22}{2} = 11$$

**Answer:** The midsegment is 11`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'In rhombus PQRS, diagonal PR = 16 and diagonal QS = 12. Find the length of one side of the rhombus.',
        solution: `In a rhombus, diagonals are **perpendicular** and **bisect each other**.

The diagonals split the rhombus into 4 right triangles.

**Half-diagonals:**
- Half of PR = $16/2 = 8$
- Half of QS = $12/2 = 6$

**Use Pythagorean Theorem:**
$$s^2 = 8^2 + 6^2$$
$$s^2 = 64 + 36 = 100$$
$$s = 10$$

**Answer:** Each side is 10`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What makes a quadrilateral a parallelogram?', back: 'Both pairs of opposite sides are parallel' },
      { topicId: topic2.id, front: 'What is special about a rhombus\'s diagonals?', back: 'They are perpendicular and bisect each other' },
      { topicId: topic2.id, front: 'What is the midsegment formula for a trapezoid?', back: 'M = (b₁ + b₂)/2 (average of the bases)' }
    ]
  })

  console.log('✓ Created topic: Properties of Quadrilaterals (3 examples, 3 flashcards)')

  // Topic: Polygon Angle Sums
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'polygon-angle-sums' },
    update: {},
    create: {
      slug: 'polygon-angle-sums',
      title: 'Polygon Angle Sums',
      description: 'Interior and exterior angle formulas',
      order: 2,
      categoryId: quadrilaterals.id,
      textContent: `# Polygon Angle Sums

## Interior Angle Sum

For a polygon with $n$ sides:
$$\\text{Sum of interior angles} = (n - 2) \\times 180°$$

**Examples:**
- Triangle ($n = 3$): $(3 - 2) \\times 180° = 180°$
- Quadrilateral ($n = 4$): $(4 - 2) \\times 180° = 360°$
- Pentagon ($n = 5$): $(5 - 2) \\times 180° = 540°$
- Hexagon ($n = 6$): $(6 - 2) \\times 180° = 720°$

## Regular Polygon

A polygon with **all sides congruent** and **all angles congruent**.

**Measure of each interior angle:**
$$\\frac{(n - 2) \\times 180°}{n}$$

## Exterior Angle Sum

The sum of **exterior angles** (one at each vertex) of ANY polygon is **always** $360°$.

$$\\text{Sum of exterior angles} = 360°$$

## Regular Polygon Exterior Angle

For a regular polygon:
$$\\text{Each exterior angle} = \\frac{360°}{n}$$

## Finding Number of Sides

If you know the interior angle measure of a regular polygon:
$$n = \\frac{360°}{180° - \\text{interior angle}}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the sum of the interior angles of an octagon.',
        solution: `An octagon has $n = 8$ sides.

Use the formula:
$$\\text{Sum} = (n - 2) \\times 180°$$

$$= (8 - 2) \\times 180°$$
$$= 6 \\times 180°$$
$$= 1080°$$

**Answer:** $1080°$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the measure of each interior angle of a regular hexagon.',
        solution: `A hexagon has $n = 6$ sides.

**Step 1:** Find the sum of interior angles
$$\\text{Sum} = (6 - 2) \\times 180° = 720°$$

**Step 2:** Divide by number of angles (regular polygon)
$$\\text{Each angle} = \\frac{720°}{6} = 120°$$

**Answer:** Each interior angle is $120°$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Each interior angle of a regular polygon measures $140°$. How many sides does the polygon have?',
        solution: `**Method 1:** Using exterior angles

Each exterior angle = $180° - 140° = 40°$

Since exterior angles sum to $360°$:
$$n = \\frac{360°}{40°} = 9$$

**Method 2:** Using interior angle formula
$$\\frac{(n-2) \\times 180}{n} = 140$$

$$180n - 360 = 140n$$
$$40n = 360$$
$$n = 9$$

**Answer:** The polygon has 9 sides (nonagon)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is the formula for the sum of interior angles of a polygon?', back: '(n - 2) × 180° where n is the number of sides' },
      { topicId: topic3.id, front: 'What is the sum of exterior angles of any polygon?', back: 'Always 360°' },
      { topicId: topic3.id, front: 'What is the interior angle sum of a quadrilateral?', back: '360° (using (4-2)×180°)' }
    ]
  })

  console.log('✓ Created topic: Polygon Angle Sums (3 examples, 3 flashcards)')

  // Topic: Circle Basics
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'circle-basics-geometry' },
    update: {},
    create: {
      slug: 'circle-basics-geometry',
      title: 'Circle Basics',
      description: 'Parts of a circle and basic properties',
      order: 1,
      categoryId: circles.id,
      textContent: `# Circle Basics

## Definitions

**Circle:** The set of all points equidistant from a center point.

**Radius:** Distance from center to any point on the circle (symbol: $r$)

**Diameter:** Distance across circle through center (symbol: $d$)
$$d = 2r$$

**Chord:** Line segment connecting two points on the circle

**Secant:** A line that intersects the circle at two points

**Tangent:** A line that touches the circle at exactly one point

## Key Properties

**Tangent Property:** A tangent line is **perpendicular** to the radius at the point of tangency.

**Chord Property:** A perpendicular from the center to a chord **bisects** the chord.

**Equal Chords:** Chords equidistant from the center are congruent.

## Circumference

The distance around a circle:
$$C = 2\\pi r = \\pi d$$

## Area

$$A = \\pi r^2$$

## Arc Length

For a central angle of $\\theta$ degrees:
$$\\text{Arc length} = \\frac{\\theta}{360°} \\times 2\\pi r$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'A circle has a radius of 5. Find the circumference and area.',
        solution: `**Circumference:**
$$C = 2\\pi r = 2\\pi(5) = 10\\pi$$

**Area:**
$$A = \\pi r^2 = \\pi(5)^2 = 25\\pi$$

**Answer:** Circumference = $10\\pi$ (or ≈ 31.4), Area = $25\\pi$ (or ≈ 78.5)`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A circle has diameter 16. Find the length of an arc with central angle $45°$.',
        solution: `**Step 1:** Find the radius
$$r = \\frac{d}{2} = \\frac{16}{2} = 8$$

**Step 2:** Use arc length formula
$$\\text{Arc length} = \\frac{\\theta}{360°} \\times 2\\pi r$$

$$= \\frac{45}{360} \\times 2\\pi(8)$$

$$= \\frac{1}{8} \\times 16\\pi$$

$$= 2\\pi$$

**Answer:** Arc length is $2\\pi$ (or ≈ 6.28)`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A chord is 8 cm from the center of a circle with radius 10 cm. Find the length of the chord.',
        solution: `Draw a radius to the chord's endpoint and a perpendicular from center to chord.

This creates a **right triangle**:
- Hypotenuse = radius = 10
- One leg = distance from center = 8
- Other leg = half the chord length

**Use Pythagorean Theorem:**
$$8^2 + \\left(\\frac{c}{2}\\right)^2 = 10^2$$

$$64 + \\frac{c^2}{4} = 100$$

$$\\frac{c^2}{4} = 36$$

$$c^2 = 144$$

$$c = 12$$

**Answer:** The chord length is 12 cm`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What is the relationship between diameter and radius?', back: 'd = 2r (diameter is twice the radius)' },
      { topicId: topic4.id, front: 'What is the formula for the area of a circle?', back: 'A = πr²' },
      { topicId: topic4.id, front: 'What is true about a tangent line to a circle?', back: 'It is perpendicular to the radius at the point of tangency' }
    ]
  })

  console.log('✓ Created topic: Circle Basics (3 examples, 3 flashcards)')

  // Topic: Inscribed Angles
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'inscribed-angles-geometry' },
    update: {},
    create: {
      slug: 'inscribed-angles-geometry',
      title: 'Inscribed Angles',
      description: 'Angles with vertices on the circle',
      order: 2,
      categoryId: circles.id,
      textContent: `# Inscribed Angles

## Central Angle

An angle with its **vertex at the center** of the circle.

**Measure:** Equal to the measure of its intercepted arc.

## Inscribed Angle

An angle with its **vertex on the circle** and sides containing chords.

## Inscribed Angle Theorem

**An inscribed angle is half the measure of its intercepted arc.**

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{intercepted arc}$$

## Corollaries

**Inscribed angles that intercept the same arc are congruent.**

**An angle inscribed in a semicircle is a right angle** (90°).
- Because it intercepts a 180° arc
- $\\frac{180°}{2} = 90°$

## Inscribed Quadrilateral

If a quadrilateral is inscribed in a circle:

**Opposite angles are supplementary** (sum to 180°)

## Arc-Angle Relationships

- **Central angle** = arc measure
- **Inscribed angle** = $\\frac{1}{2}$ arc measure
- **Tangent-chord angle** = $\\frac{1}{2}$ arc measure`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'An inscribed angle intercepts an arc of $80°$. Find the measure of the inscribed angle.',
        solution: `Use the Inscribed Angle Theorem:

$$\\text{Inscribed angle} = \\frac{1}{2} \\times \\text{arc}$$

$$= \\frac{1}{2} \\times 80°$$

$$= 40°$$

**Answer:** The inscribed angle is $40°$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'An angle is inscribed in a semicircle. What is its measure?',
        solution: `A semicircle is an arc of **180°**.

By the Inscribed Angle Theorem:
$$\\text{Inscribed angle} = \\frac{1}{2} \\times 180° = 90°$$

**Answer:** The angle is $90°$ (a right angle)`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Quadrilateral ABCD is inscribed in a circle. If $\\angle A = 75°$ and $\\angle C = (2x + 15)°$, find $x$.',
        solution: `In an inscribed quadrilateral, **opposite angles are supplementary**.

Angles A and C are opposite:
$$\\angle A + \\angle C = 180°$$

$$75 + (2x + 15) = 180$$

$$2x + 90 = 180$$

$$2x = 90$$

$$x = 45$$

**Verify:** $\\angle C = 2(45) + 15 = 105°$, and $75° + 105° = 180°$ ✓

**Answer:** $x = 45$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is the Inscribed Angle Theorem?', back: 'An inscribed angle is half the measure of its intercepted arc' },
      { topicId: topic5.id, front: 'What is the measure of an angle inscribed in a semicircle?', back: '90° (always a right angle)' },
      { topicId: topic5.id, front: 'In an inscribed quadrilateral, what is true about opposite angles?', back: 'They are supplementary (sum to 180°)' }
    ]
  })

  console.log('✓ Created topic: Inscribed Angles (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more Geometry topics!')
  console.log('   New categories: 2 (Quadrilaterals, Circles)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
