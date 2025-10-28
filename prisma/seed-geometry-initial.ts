import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating initial Geometry content...')

  const geometryCourse = await prisma.course.findUnique({
    where: { slug: 'geometry' }
  })

  if (!geometryCourse) {
    throw new Error('Geometry course not found')
  }

  // CATEGORY 1: Points, Lines, and Angles
  const pointsLines = await prisma.category.upsert({
    where: { slug: 'geometry-points-lines-angles' },
    update: {},
    create: {
      slug: 'geometry-points-lines-angles',
      name: 'Points, Lines, and Angles',
      order: 1,
      courseId: geometryCourse.id
    }
  })

  // Topic: Angle Relationships
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'angle-relationships-geometry' },
    update: {},
    create: {
      slug: 'angle-relationships-geometry',
      title: 'Angle Relationships',
      description: 'Complementary, supplementary, and vertical angles',
      order: 1,
      categoryId: pointsLines.id,
      textContent: `# Angle Relationships

## Basic Angle Types

**Acute angle:** $0° < \\theta < 90°$

**Right angle:** $\\theta = 90°$

**Obtuse angle:** $90° < \\theta < 180°$

**Straight angle:** $\\theta = 180°$

## Complementary Angles

Two angles are **complementary** if their sum is $90°$.

**Example:** $35°$ and $55°$ are complementary because $35° + 55° = 90°$

## Supplementary Angles

Two angles are **supplementary** if their sum is $180°$.

**Example:** $120°$ and $60°$ are supplementary because $120° + 60° = 180°$

## Vertical Angles

When two lines intersect, **vertical angles** are opposite each other.

**Key Property:** Vertical angles are **always congruent** (equal).

## Linear Pair

Two adjacent angles that form a straight line.

**Property:** Linear pairs are **supplementary** (sum to $180°$).

## Angle Addition Postulate

If point $B$ is in the interior of $\\angle AOC$, then:
$$m\\angle AOB + m\\angle BOC = m\\angle AOC$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the complement of a $42°$ angle.',
        solution: `Complementary angles sum to $90°$.

$$90° - 42° = 48°$$

**Answer:** $48°$`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Two angles are supplementary. One angle measures $3x$ and the other measures $2x + 15$. Find the value of $x$.',
        solution: `Supplementary angles sum to $180°$.

$$3x + (2x + 15) = 180$$

$$5x + 15 = 180$$

$$5x = 165$$

$$x = 33$$

**Answer:** $x = 33°$`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Two lines intersect. One angle measures $(4x - 10)°$ and its vertical angle measures $(3x + 15)°$. Find $x$ and the measure of both angles.',
        solution: `Vertical angles are congruent, so:

$$4x - 10 = 3x + 15$$

$$x = 25$$

**Angle measure:**
$$4(25) - 10 = 100 - 10 = 90°$$

**Check:** $3(25) + 15 = 75 + 15 = 90°$ ✓

**Answer:** $x = 25$, both angles measure $90°$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What are complementary angles?', back: 'Two angles that sum to 90°' },
      { topicId: topic1.id, front: 'What are supplementary angles?', back: 'Two angles that sum to 180°' },
      { topicId: topic1.id, front: 'What is true about vertical angles?', back: 'They are always congruent (equal)' }
    ]
  })

  console.log('✓ Created topic: Angle Relationships (3 examples, 3 flashcards)')

  // Topic: Parallel Lines and Transversals
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'parallel-lines-transversals' },
    update: {},
    create: {
      slug: 'parallel-lines-transversals',
      title: 'Parallel Lines and Transversals',
      description: 'Angle relationships formed by parallel lines',
      order: 2,
      categoryId: pointsLines.id,
      textContent: `# Parallel Lines and Transversals

## Definition

A **transversal** is a line that intersects two or more lines.

When a transversal crosses **parallel lines**, special angle relationships form.

## Angle Pairs

**Corresponding Angles:** Same position at each intersection
- **Property:** Congruent when lines are parallel

**Alternate Interior Angles:** Between the parallel lines, opposite sides
- **Property:** Congruent when lines are parallel

**Alternate Exterior Angles:** Outside the parallel lines, opposite sides
- **Property:** Congruent when lines are parallel

**Consecutive Interior Angles (Same-Side Interior):** Between parallel lines, same side
- **Property:** Supplementary when lines are parallel (sum to $180°$)

## Key Theorem

If two parallel lines are cut by a transversal:
- Corresponding angles are ≅
- Alternate interior angles are ≅
- Alternate exterior angles are ≅
- Consecutive interior angles are supplementary

## Converse

If these angle relationships hold, then the lines **are parallel**.`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Two parallel lines are cut by a transversal. If one angle measures $65°$, what is the measure of its corresponding angle?',
        solution: `Corresponding angles are **congruent** when lines are parallel.

**Answer:** $65°$`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Parallel lines $l$ and $m$ are cut by a transversal. Two consecutive interior angles measure $(2x + 10)°$ and $(3x - 15)°$. Find $x$.',
        solution: `Consecutive interior angles are **supplementary**.

$$(2x + 10) + (3x - 15) = 180$$

$$5x - 5 = 180$$

$$5x = 185$$

$$x = 37$$

**Answer:** $x = 37$`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Lines $a$ and $b$ are cut by transversal $t$. Alternate interior angles measure $(5x - 20)°$ and $(3x + 40)°$. Are lines $a$ and $b$ parallel?',
        solution: `For the lines to be parallel, alternate interior angles must be **congruent**.

Set them equal:
$$5x - 20 = 3x + 40$$

$$2x = 60$$

$$x = 30$$

**When $x = 30$:**
- First angle: $5(30) - 20 = 130°$
- Second angle: $3(30) + 40 = 130°$

Since the angles are equal, the lines **are parallel**.

**Answer:** Yes, the lines are parallel`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What are corresponding angles?', back: 'Angles in the same position at each intersection point' },
      { topicId: topic2.id, front: 'When parallel lines are cut by a transversal, what is true about alternate interior angles?', back: 'They are congruent' },
      { topicId: topic2.id, front: 'What is true about consecutive interior angles when lines are parallel?', back: 'They are supplementary (sum to 180°)' }
    ]
  })

  console.log('✓ Created topic: Parallel Lines and Transversals (3 examples, 3 flashcards)')

  // CATEGORY 2: Triangles
  const triangles = await prisma.category.upsert({
    where: { slug: 'geometry-triangles' },
    update: {},
    create: {
      slug: 'geometry-triangles',
      name: 'Triangles',
      order: 2,
      courseId: geometryCourse.id
    }
  })

  // Topic: Triangle Angle Sum
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'triangle-angle-sum' },
    update: {},
    create: {
      slug: 'triangle-angle-sum',
      title: 'Triangle Angle Sum Theorem',
      description: 'The sum of angles in a triangle',
      order: 1,
      categoryId: triangles.id,
      textContent: `# Triangle Angle Sum Theorem

## The Fundamental Theorem

**The sum of the interior angles of any triangle is $180°$.**

$$\\angle A + \\angle B + \\angle C = 180°$$

## Triangle Classification by Angles

**Acute Triangle:** All three angles are acute (< 90°)

**Right Triangle:** One angle is exactly 90°

**Obtuse Triangle:** One angle is obtuse (> 90°)

**Equiangular Triangle:** All three angles equal 60°

## Exterior Angle Theorem

An **exterior angle** of a triangle equals the sum of the two **remote interior angles**.

**Example:** If an exterior angle measures $130°$, and one remote interior angle is $70°$, the other remote interior angle is:
$$130° - 70° = 60°$$

## Corollary

The measure of each angle of an equilateral triangle is $60°$.

## Applications

This theorem is used to:
- Find missing angle measures
- Prove triangle congruence
- Solve geometric proofs`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Two angles of a triangle measure $45°$ and $65°$. Find the third angle.',
        solution: `Use the Triangle Angle Sum Theorem:

$$45° + 65° + x = 180°$$

$$110° + x = 180°$$

$$x = 70°$$

**Answer:** $70°$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'In a triangle, the angles are in the ratio $2:3:4$. Find all three angle measures.',
        solution: `Let the angles be $2x$, $3x$, and $4x$.

$$2x + 3x + 4x = 180$$

$$9x = 180$$

$$x = 20$$

**The three angles are:**
- $2(20) = 40°$
- $3(20) = 60°$
- $4(20) = 80°$

**Check:** $40 + 60 + 80 = 180$ ✓

**Answer:** $40°$, $60°$, $80°$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'An exterior angle of a triangle measures $125°$. One of the remote interior angles measures $55°$. Find the other two angles of the triangle.',
        solution: `**Step 1:** Use Exterior Angle Theorem

The exterior angle equals the sum of remote interior angles:
$$125° = 55° + x$$
$$x = 70°$$

So one remote interior angle is $70°$.

**Step 2:** Find the third angle (adjacent to exterior)

The exterior angle and its adjacent interior angle are supplementary:
$$125° + y = 180°$$
$$y = 55°$$

**The three angles are:** $55°$, $70°$, $55°$

**Check:** $55 + 70 + 55 = 180$ ✓

**Answer:** The three angles are $55°$, $70°$, and $55°$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is the Triangle Angle Sum Theorem?', back: 'The sum of the interior angles of a triangle is 180°' },
      { topicId: topic3.id, front: 'What is the Exterior Angle Theorem?', back: 'An exterior angle equals the sum of the two remote interior angles' },
      { topicId: topic3.id, front: 'What is the measure of each angle in an equilateral triangle?', back: '60° (since all angles are equal and sum to 180°)' }
    ]
  })

  console.log('✓ Created topic: Triangle Angle Sum Theorem (3 examples, 3 flashcards)')

  // Topic: Congruent Triangles
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'congruent-triangles' },
    update: {},
    create: {
      slug: 'congruent-triangles',
      title: 'Congruent Triangles',
      description: 'SSS, SAS, ASA, AAS, and HL theorems',
      order: 2,
      categoryId: triangles.id,
      textContent: `# Congruent Triangles

## Definition

Two triangles are **congruent** if all corresponding sides and angles are equal.

Symbol: $\\triangle ABC \\cong \\triangle DEF$

## Congruence Postulates

You **don't** need to show all 6 parts are equal. These shortcuts work:

### SSS (Side-Side-Side)
If three sides of one triangle are congruent to three sides of another triangle, the triangles are congruent.

### SAS (Side-Angle-Side)
If two sides and the **included angle** of one triangle are congruent to two sides and the included angle of another, the triangles are congruent.

### ASA (Angle-Side-Angle)
If two angles and the **included side** are congruent, the triangles are congruent.

### AAS (Angle-Angle-Side)
If two angles and a **non-included side** are congruent, the triangles are congruent.

### HL (Hypotenuse-Leg)
**Right triangles only:** If the hypotenuse and one leg are congruent, the triangles are congruent.

## NOT Congruence Theorems

**AAA** - Shows similarity, not congruence
**SSA** - Not sufficient (ambiguous case)

## CPCTC

**C**orresponding **P**arts of **C**ongruent **T**riangles are **C**ongruent

Once you prove triangles are congruent, you can conclude ALL corresponding parts are equal.`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Can you prove $\\triangle ABC \\cong \\triangle DEF$ if $AB = DE = 5$, $BC = EF = 7$, and $AC = DF = 6$?',
        solution: `We have three pairs of congruent sides:
- $AB \\cong DE$
- $BC \\cong EF$
- $AC \\cong DF$

This satisfies **SSS (Side-Side-Side)**.

**Answer:** Yes, by SSS postulate`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Given: $AB \\cong XY$, $\\angle A \\cong \\angle X$, $\\angle B \\cong \\angle Y$. Which congruence postulate proves $\\triangle ABC \\cong \\triangle XYZ$?',
        solution: `We have:
- Two angles: $\\angle A \\cong \\angle X$ and $\\angle B \\cong \\angle Y$
- One side: $AB \\cong XY$

The side $AB$ is **included** between the two angles $\\angle A$ and $\\angle B$.

This is **ASA (Angle-Side-Angle)**.

**Answer:** ASA`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'In right triangles $\\triangle PQR$ and $\\triangle STU$ (right angles at $Q$ and $T$), $PR = SU = 10$ and $QR = TU = 6$. Are the triangles congruent? If so, by what theorem?',
        solution: `Both are **right triangles**.

**Given:**
- $PR = SU = 10$ (these are the hypotenuses)
- $QR = TU = 6$ (these are legs)

We have:
- Congruent hypotenuses
- Congruent legs

This satisfies **HL (Hypotenuse-Leg)** for right triangles.

**Answer:** Yes, by HL theorem`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What does SSS stand for?', back: 'Side-Side-Side (three pairs of congruent sides)' },
      { topicId: topic4.id, front: 'What is the HL theorem?', back: 'Hypotenuse-Leg: For right triangles, if hypotenuse and one leg are congruent, triangles are congruent' },
      { topicId: topic4.id, front: 'What does CPCTC mean?', back: 'Corresponding Parts of Congruent Triangles are Congruent' }
    ]
  })

  console.log('✓ Created topic: Congruent Triangles (3 examples, 3 flashcards)')

  // Topic: Pythagorean Theorem
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'pythagorean-theorem' },
    update: {},
    create: {
      slug: 'pythagorean-theorem',
      title: 'Pythagorean Theorem',
      description: 'Relationships in right triangles',
      order: 3,
      categoryId: triangles.id,
      textContent: `# Pythagorean Theorem

## The Theorem

In a **right triangle**, the square of the hypotenuse equals the sum of the squares of the legs.

$$a^2 + b^2 = c^2$$

Where:
- $a$ and $b$ are the **legs**
- $c$ is the **hypotenuse** (longest side, opposite the right angle)

## Using the Theorem

**To find the hypotenuse:**
$$c = \\sqrt{a^2 + b^2}$$

**To find a leg:**
$$a = \\sqrt{c^2 - b^2}$$

## Pythagorean Triples

Sets of three positive integers that satisfy $a^2 + b^2 = c^2$:

**Common triples:**
- $3, 4, 5$
- $5, 12, 13$
- $8, 15, 17$
- $7, 24, 25$

**Any multiple works too:** $6, 8, 10$ (multiply $3, 4, 5$ by 2)

## Converse

If $a^2 + b^2 = c^2$, then the triangle **is a right triangle**.

## Distance Formula

The Pythagorean Theorem leads to the distance formula:
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the length of the hypotenuse if the legs of a right triangle are 3 and 4.',
        solution: `Use $a^2 + b^2 = c^2$:

$$3^2 + 4^2 = c^2$$

$$9 + 16 = c^2$$

$$25 = c^2$$

$$c = 5$$

**Answer:** The hypotenuse is $5$`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A right triangle has a hypotenuse of 13 and one leg of 5. Find the other leg.',
        solution: `Use $a^2 + b^2 = c^2$:

$$5^2 + b^2 = 13^2$$

$$25 + b^2 = 169$$

$$b^2 = 144$$

$$b = 12$$

**Answer:** The other leg is $12$`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Is a triangle with sides 7, 24, and 25 a right triangle?',
        solution: `Use the **converse** of the Pythagorean Theorem.

Check if $a^2 + b^2 = c^2$ (where $c = 25$ is the longest side):

$$7^2 + 24^2 = 49 + 576 = 625$$

$$25^2 = 625$$

Since $7^2 + 24^2 = 25^2$, the triangle **is a right triangle**.

**Answer:** Yes, it is a right triangle (and $7, 24, 25$ is a Pythagorean triple)`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'What is the Pythagorean Theorem?', back: '$a^2 + b^2 = c^2$ where c is the hypotenuse' },
      { topicId: topic5.id, front: 'What is the most common Pythagorean triple?', back: '3, 4, 5' },
      { topicId: topic5.id, front: 'What is the converse of the Pythagorean Theorem?', back: 'If $a^2 + b^2 = c^2$, then the triangle is a right triangle' }
    ]
  })

  console.log('✓ Created topic: Pythagorean Theorem (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created initial Geometry content!')
  console.log('   New categories: 2 (Points/Lines/Angles, Triangles)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
