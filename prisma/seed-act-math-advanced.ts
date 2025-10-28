import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional ACT Math content...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  const actMath = await prisma.category.findUnique({
    where: { slug: 'act-math' }
  })

  if (!actMath) {
    throw new Error('ACT Math category not found')
  }

  // Topic 1: Intermediate Algebra and Coordinate Geometry
  const intermediateAlgebra = await prisma.topic.upsert({
    where: { slug: 'act-intermediate-algebra' },
    update: {},
    create: {
      slug: 'act-intermediate-algebra',
      title: 'Intermediate Algebra and Coordinate Geometry',
      description: 'Quadratics, inequalities, systems, and coordinate plane concepts',
      order: 2,
      categoryId: actMath.id,
      isPremium: false,
      textContent: `
# Intermediate Algebra and Coordinate Geometry

## Quadratic Equations

### Factoring
$$x^2 + 5x + 6 = 0$$
$$(x + 2)(x + 3) = 0$$
$$x = -2 \\text{ or } x = -3$$

### Quadratic Formula
For $ax^2 + bx + c = 0$:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

### Completing the Square
$$x^2 + 6x = 7$$
$$x^2 + 6x + 9 = 7 + 9$$
$$(x + 3)^2 = 16$$
$$x + 3 = \\pm 4$$
$$x = 1 \\text{ or } x = -7$$

## Inequalities

**Solving:**
$$2x - 5 < 7$$
$$2x < 12$$
$$x < 6$$

**Important:** When multiplying/dividing by negative, **flip the sign!**
$$-3x > 6 \\quad \\Rightarrow \\quad x < -2$$

## Systems of Equations

### Substitution Method
$$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$$

Substitute: $3x + (2x + 1) = 11$
$$5x = 10 \\quad \\Rightarrow \\quad x = 2, y = 5$$

### Elimination Method
$$\\begin{cases} 2x + 3y = 12 \\\\ 2x - y = 4 \\end{cases}$$

Subtract: $4y = 8 \\quad \\Rightarrow \\quad y = 2$

## Coordinate Geometry

### Distance Formula
Between $(x_1, y_1)$ and $(x_2, y_2)$:
$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

### Midpoint Formula
$$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$$

### Slope
$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

**Special cases:**
- Horizontal line: slope = 0
- Vertical line: slope = undefined
- Parallel lines: same slope
- Perpendicular lines: slopes are negative reciprocals

### Slope-Intercept Form
$$y = mx + b$$
- $m$ = slope
- $b$ = y-intercept

## ACT Tips

- **Quadratics:** Try factoring first (fastest), then formula
- **Graph questions:** Sketch if not provided
- **Systems:** Use substitution when one equation is already solved
- **Calculator:** Can graph to find intersections
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: intermediateAlgebra.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is the slope of the line passing through $(2, 3)$ and $(6, 11)$?',
        solution: `
**Solution:**

Use slope formula:
$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

Plug in points:
$$m = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$

**Answer:** $m = 2$

**ACT Tip:** Remember "rise over run" - vertical change ÷ horizontal change
`
      },
      {
        topicId: intermediateAlgebra.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Solve the system: $\\begin{cases} y = x + 3 \\\\ 2x + y = 12 \\end{cases}$',
        solution: `
**Solution:**

First equation already solved for $y$, so use **substitution:**

Substitute $y = x + 3$ into second equation:
$$2x + (x + 3) = 12$$
$$3x + 3 = 12$$
$$3x = 9$$
$$x = 3$$

Find $y$:
$$y = 3 + 3 = 6$$

**Answer:** $(3, 6)$

**Check:** $2(3) + 6 = 12$ ✓
`
      },
      {
        topicId: intermediateAlgebra.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which of the following is a solution to $x^2 - 4x - 5 = 0$?\n\nA) $x = -5$\nB) $x = -1$\nC) $x = 1$\nD) $x = 5$',
        solution: `
**Solution:**

Factor the quadratic:
$$x^2 - 4x - 5 = 0$$

Find two numbers that multiply to $-5$ and add to $-4$:
$$-5 \\text{ and } +1$$

Factor:
$$(x - 5)(x + 1) = 0$$

Solutions:
$$x = 5 \\text{ or } x = -1$$

**Answer:** Both B and D are solutions (if only one answer allowed, both appear)

**ACT Tip:** Can also plug each answer choice into equation to test!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: intermediateAlgebra.id,
        front: 'What happens to an inequality sign when you multiply or divide by a negative number?',
        back: 'The inequality sign FLIPS (< becomes >, ≤ becomes ≥, and vice versa)'
      },
      {
        topicId: intermediateAlgebra.id,
        front: 'What is the slope of a horizontal line? A vertical line?',
        back: 'Horizontal: slope = 0; Vertical: slope = undefined'
      },
      {
        topicId: intermediateAlgebra.id,
        front: 'In $y = mx + b$, what do $m$ and $b$ represent?',
        back: '$m$ = slope (steepness), $b$ = y-intercept (where line crosses y-axis)'
      }
    ]
  })

  console.log('✓ Created topic: Intermediate Algebra and Coordinate Geometry (3 examples, 3 flashcards)')

  // Topic 2: Plane Geometry and Trigonometry
  const planeGeometry = await prisma.topic.upsert({
    where: { slug: 'act-plane-geometry-trig' },
    update: {},
    create: {
      slug: 'act-plane-geometry-trig',
      title: 'Plane Geometry and Trigonometry',
      description: 'Angles, triangles, circles, and basic trigonometry for ACT',
      order: 3,
      categoryId: actMath.id,
      isPremium: false,
      textContent: `
# Plane Geometry and Trigonometry

## Angles

**Types:**
- **Acute:** $< 90°$
- **Right:** $= 90°$
- **Obtuse:** $> 90°$ and $< 180°$
- **Straight:** $= 180°$

**Complementary angles:** Add to $90°$
**Supplementary angles:** Add to $180°$

## Triangles

### Angle Sum
All triangles: angles sum to $180°$

### Pythagorean Theorem
For right triangles:
$$a^2 + b^2 = c^2$$
(where $c$ is the hypotenuse)

### Special Right Triangles

**45-45-90:**
$$\\text{sides: } x, x, x\\sqrt{2}$$

**30-60-90:**
$$\\text{sides: } x, x\\sqrt{3}, 2x$$

### Area
$$A = \\frac{1}{2}bh$$

## Circles

**Circumference:**
$$C = 2\\pi r = \\pi d$$

**Area:**
$$A = \\pi r^2$$

**Arc length:**
$$\\text{Arc} = \\frac{\\theta}{360°} \\times 2\\pi r$$

## Trigonometry

### SOH-CAH-TOA

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$$

$$\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$$

$$\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$

### Common Values

| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| $30°$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
| $45°$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |

### Law of Sines (for any triangle)
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

## ACT Tips

- **Memorize special right triangles!** They appear often
- **Draw diagrams** if not provided
- **Use calculator** for trig values (set to degrees!)
- **Common Pythagorean triples:** 3-4-5, 5-12-13, 8-15-17
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: planeGeometry.id,
        order: 1,
        difficulty: 'EASY',
        question: 'In a right triangle, one leg is 3 and the other leg is 4. What is the hypotenuse?',
        solution: `
**Solution:**

Use Pythagorean theorem:
$$a^2 + b^2 = c^2$$
$$3^2 + 4^2 = c^2$$
$$9 + 16 = c^2$$
$$25 = c^2$$
$$c = 5$$

**Answer:** $5$

**ACT Tip:** This is the 3-4-5 Pythagorean triple - memorize it!
`
      },
      {
        topicId: planeGeometry.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A circle has a diameter of 10 cm. What is its area?',
        solution: `
**Solution:**

Given diameter $d = 10$ cm, so radius $r = 5$ cm

Area formula:
$$A = \\pi r^2$$
$$A = \\pi (5)^2$$
$$A = 25\\pi \\text{ cm}^2$$

**Answer:** $25\\pi$ cm² (or approximately 78.54 cm²)

**ACT Tip:** Leave answer in terms of $\\pi$ unless told to approximate!
`
      },
      {
        topicId: planeGeometry.id,
        order: 3,
        difficulty: 'HARD',
        question: 'In a right triangle, if the angle is $30°$ and the hypotenuse is 12, what is the length of the side opposite the $30°$ angle?',
        solution: `
**Solution:**

This is a **30-60-90 triangle** with ratio $x : x\\sqrt{3} : 2x$

The hypotenuse is $2x = 12$
$$x = 6$$

The side opposite $30°$ is the **shortest side** = $x$

**Answer:** $6$

**Alternative using trig:**
$$\\sin 30° = \\frac{\\text{opposite}}{12}$$
$$\\frac{1}{2} = \\frac{\\text{opposite}}{12}$$
$$\\text{opposite} = 6$$

**ACT Tip:** Recognize special triangles to solve faster!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: planeGeometry.id,
        front: 'What is the ratio of sides in a 30-60-90 triangle?',
        back: 'x : x√3 : 2x (opposite 30°, opposite 60°, hypotenuse)'
      },
      {
        topicId: planeGeometry.id,
        front: 'What is SOH-CAH-TOA?',
        back: 'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent'
      },
      {
        topicId: planeGeometry.id,
        front: 'What is the most common Pythagorean triple on the ACT?',
        back: '3-4-5 (also 5-12-13 and 8-15-17)'
      }
    ]
  })

  console.log('✓ Created topic: Plane Geometry and Trigonometry (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created additional ACT Math content!')
  console.log('   New topics: 2')
  console.log('   Total example problems added: 6')
  console.log('   Total flashcards added: 6')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
