import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Parameters, Vectors, and Matrices (Part 1)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'parameters-vectors-matrices' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 1: Parametric Equations
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'parametric-equations' },
    update: {},
    create: {
      title: 'Parametric Equations',
      slug: 'parametric-equations',
      description: 'Understanding parametric equations and how to convert between parametric and rectangular forms',
      order: 1,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Parametric Equations

## What Are Parametric Equations?

**Parametric equations** define both $x$ and $y$ in terms of a third variable called a **parameter**, usually $t$.

Instead of $y = f(x)$, we write:
$$x = f(t)$$
$$y = g(t)$$

## Why Use Parametric Equations?

1. **Model motion**: $t$ often represents time
2. **Describe curves** that aren't functions (fail vertical line test)
3. **Separate horizontal and vertical motion**
4. **Express direction and speed** of motion

## Example: Linear Motion

Consider:
$$x = 2t + 1$$
$$y = 3t - 2$$

As $t$ increases, the point $(x, y)$ traces out a path.

| $t$ | $x = 2t + 1$ | $y = 3t - 2$ | Point $(x, y)$ |
|-----|--------------|--------------|----------------|
| $0$ | $1$ | $-2$ | $(1, -2)$ |
| $1$ | $3$ | $1$ | $(3, 1)$ |
| $2$ | $5$ | $4$ | $(5, 4)$ |

## Converting to Rectangular Form

To eliminate the parameter $t$:

1. **Solve one equation for $t$**
2. **Substitute into the other equation**
3. **Simplify to get $y$ in terms of $x$ (or vice versa)**

### Example

Given: $x = 2t + 1$ and $y = 3t - 2$

Step 1: Solve for $t$ from the first equation.
$$x = 2t + 1$$
$$t = \\frac{x - 1}{2}$$

Step 2: Substitute into the second equation.
$$y = 3t - 2 = 3\\left(\\frac{x - 1}{2}\\right) - 2$$

$$y = \\frac{3x - 3}{2} - 2 = \\frac{3x - 3 - 4}{2} = \\frac{3x - 7}{2}$$

Rectangular form: $y = \\frac{3}{2}x - \\frac{7}{2}$

## Parametric Equations for Common Curves

### Circle (radius $r$, center at origin)
$$x = r\\cos(t)$$
$$y = r\\sin(t)$$
$$0 \\leq t \\leq 2\\pi$$

### Ellipse
$$x = a\\cos(t)$$
$$y = b\\sin(t)$$

### Line Segment
$$x = x_1 + t(x_2 - x_1)$$
$$y = y_1 + t(y_2 - y_1)$$
$$0 \\leq t \\leq 1$$

## Direction and Orientation

The **orientation** shows the direction of motion as $t$ increases.

- Plot points for increasing values of $t$
- Draw arrows to show direction of travel
- Different parametrizations can trace the same curve with different orientations

## Calculus with Parametric Equations

**Derivative** (slope of tangent line):
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)}$$

Note: This is NOT $\\frac{dy}{dt}$!
`,
      exampleProblems: {
        create: [
          {
            question: 'Eliminate the parameter to find the rectangular equation: $x = t + 3$, $y = t^2 - 1$',
            solution: `**Solution:**

Step 1: Solve one equation for $t$.

From $x = t + 3$:
$$t = x - 3$$

Step 2: Substitute into the other equation.

$$y = t^2 - 1 = (x - 3)^2 - 1$$

Step 3: Expand and simplify.

$$y = x^2 - 6x + 9 - 1$$
$$y = x^2 - 6x + 8$$

Step 4: Identify the curve.

This is a parabola opening upward.

**Answer:** $y = x^2 - 6x + 8$ (parabola)`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Find parametric equations for a circle with center $(2, -3)$ and radius $5$.',
            solution: `**Solution:**

Step 1: Recall the parametric form for a circle centered at origin.

For a circle centered at $(0, 0)$ with radius $r$:
$$x = r\\cos(t), \\quad y = r\\sin(t)$$

Step 2: Adjust for the center $(h, k) = (2, -3)$.

To shift the center, add $h$ to $x$ and add $k$ to $y$:
$$x = h + r\\cos(t)$$
$$y = k + r\\sin(t)$$

Step 3: Substitute $h = 2$, $k = -3$, $r = 5$.

$$x = 2 + 5\\cos(t)$$
$$y = -3 + 5\\sin(t)$$

Step 4: Specify the domain.

$$0 \\leq t \\leq 2\\pi$$ (for one complete revolution)

**Answer:**
$$x = 2 + 5\\cos(t)$$
$$y = -3 + 5\\sin(t)$$
$$0 \\leq t \\leq 2\\pi$$`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Given $x = 2t$ and $y = t^2 + 1$, find $\\frac{dy}{dx}$ at $t = 3$.',
            solution: `**Solution:**

Step 1: Find $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$.

$$\\frac{dx}{dt} = 2$$

$$\\frac{dy}{dt} = 2t$$

Step 2: Use the formula for the derivative.

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{2} = t$$

Step 3: Evaluate at $t = 3$.

$$\\frac{dy}{dx}\\bigg|_{t=3} = 3$$

**Answer:** $\\frac{dy}{dx} = 3$ at $t = 3$

This means the slope of the tangent line at the point where $t = 3$ is $3$.`,
            difficulty: 'MEDIUM',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What are parametric equations?',
      back: 'Equations where both $x$ and $y$ are defined in terms of a third variable (parameter), usually $t$',
    },
    {
      topicId: topic1.id,
      front: 'How do you eliminate the parameter?',
      back: 'Solve one equation for $t$, then substitute into the other equation',
    },
    {
      topicId: topic1.id,
      front: 'What are the parametric equations for a circle of radius $r$ centered at the origin?',
      back: '$x = r\\cos(t)$, $y = r\\sin(t)$, $0 \\leq t \\leq 2\\pi$',
    },
    {
      topicId: topic1.id,
      front: 'How do you find $\\frac{dy}{dx}$ from parametric equations?',
      back: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$',
    },
    {
      topicId: topic1.id,
      front: 'What does the parameter $t$ often represent in real-world applications?',
      back: 'Time',
    },
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Vectors in the Plane
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'vectors-in-plane' },
    update: {},
    create: {
      title: 'Vectors in the Plane',
      slug: 'vectors-in-plane',
      description: 'Understanding vectors, vector operations, and magnitude and direction',
      order: 2,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Vectors in the Plane

## What is a Vector?

A **vector** is a quantity that has both **magnitude** (size) and **direction**.

Examples:
- Displacement: "5 miles east"
- Velocity: "30 m/s at 45°"
- Force: "10 N downward"

## Notation

Vectors can be written as:
- **Bold**: $\\mathbf{v}$
- **Arrow**: $\\vec{v}$
- **Component form**: $\\langle a, b \\rangle$ or $\\langle a, b \\rangle$
- **Unit vector form**: $a\\mathbf{i} + b\\mathbf{j}$

## Component Form

A vector from the origin to point $(a, b)$ is:
$$\\mathbf{v} = \\langle a, b \\rangle$$

- $a$ is the **horizontal component** ($x$-component)
- $b$ is the **vertical component** ($y$-component)

### Vector Between Two Points

The vector from point $P_1(x_1, y_1)$ to $P_2(x_2, y_2)$ is:
$$\\vec{P_1P_2} = \\langle x_2 - x_1, y_2 - y_1 \\rangle$$

## Magnitude of a Vector

The **magnitude** (or length) of vector $\\mathbf{v} = \\langle a, b \\rangle$ is:

$$|\\mathbf{v}| = \\sqrt{a^2 + b^2}$$

This is the distance formula!

## Direction of a Vector

The **direction angle** $\\theta$ is measured counterclockwise from the positive $x$-axis:

$$\\tan(\\theta) = \\frac{b}{a}$$

$$\\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right)$$

⚠️ Be careful with quadrants when finding $\\theta$!

## Vector Operations

### Scalar Multiplication

If $\\mathbf{v} = \\langle a, b \\rangle$ and $k$ is a scalar:
$$k\\mathbf{v} = \\langle ka, kb \\rangle$$

- If $k > 0$: same direction, scaled by $k$
- If $k < 0$: opposite direction, scaled by $|k|$

### Vector Addition

If $\\mathbf{u} = \\langle a_1, b_1 \\rangle$ and $\\mathbf{v} = \\langle a_2, b_2 \\rangle$:
$$\\mathbf{u} + \\mathbf{v} = \\langle a_1 + a_2, b_1 + b_2 \\rangle$$

**Geometric interpretation**: Tip-to-tail method or parallelogram rule

### Vector Subtraction

$$\\mathbf{u} - \\mathbf{v} = \\langle a_1 - a_2, b_1 - b_2 \\rangle$$

## Unit Vectors

A **unit vector** has magnitude 1.

The standard unit vectors are:
- $\\mathbf{i} = \\langle 1, 0 \\rangle$ (horizontal)
- $\\mathbf{j} = \\langle 0, 1 \\rangle$ (vertical)

Any vector can be written as: $\\mathbf{v} = a\\mathbf{i} + b\\mathbf{j}$

### Finding a Unit Vector

To find a unit vector in the direction of $\\mathbf{v}$:
$$\\mathbf{u} = \\frac{\\mathbf{v}}{|\\mathbf{v}|} = \\frac{1}{|\\mathbf{v}|}\\mathbf{v}$$

## Dot Product

The **dot product** of $\\mathbf{u} = \\langle a_1, b_1 \\rangle$ and $\\mathbf{v} = \\langle a_2, b_2 \\rangle$ is:

$$\\mathbf{u} \\cdot \\mathbf{v} = a_1a_2 + b_1b_2$$

### Properties

- $\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos(\\theta)$ where $\\theta$ is the angle between them
- If $\\mathbf{u} \\cdot \\mathbf{v} = 0$, the vectors are **perpendicular**
- The dot product is a **scalar**, not a vector!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the magnitude and direction angle of vector $\\mathbf{v} = \\langle 3, 4 \\rangle$.',
            solution: `**Solution:**

**Find the magnitude:**

$$|\\mathbf{v}| = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2}$$

$$= \\sqrt{9 + 16} = \\sqrt{25} = 5$$

**Find the direction angle:**

$$\\tan(\\theta) = \\frac{b}{a} = \\frac{4}{3}$$

$$\\theta = \\tan^{-1}\\left(\\frac{4}{3}\\right)$$

$$\\theta \\approx 53.13°$$

Since both components are positive, the vector is in Quadrant I, so this angle is correct.

**Answers:**
- Magnitude: $5$
- Direction: $\\theta \\approx 53.13°$ or $0.927$ radians`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Given $\\mathbf{u} = \\langle 2, -3 \\rangle$ and $\\mathbf{v} = \\langle -1, 4 \\rangle$, find: (a) $\\mathbf{u} + \\mathbf{v}$, (b) $3\\mathbf{u} - 2\\mathbf{v}$',
            solution: `**Solution:**

**Part a)** $\\mathbf{u} + \\mathbf{v}$

Add corresponding components:
$$\\mathbf{u} + \\mathbf{v} = \\langle 2, -3 \\rangle + \\langle -1, 4 \\rangle$$

$$= \\langle 2 + (-1), -3 + 4 \\rangle$$

$$= \\langle 1, 1 \\rangle$$

**Part b)** $3\\mathbf{u} - 2\\mathbf{v}$

Step 1: Scalar multiplication.
$$3\\mathbf{u} = 3\\langle 2, -3 \\rangle = \\langle 6, -9 \\rangle$$

$$2\\mathbf{v} = 2\\langle -1, 4 \\rangle = \\langle -2, 8 \\rangle$$

Step 2: Subtract.
$$3\\mathbf{u} - 2\\mathbf{v} = \\langle 6, -9 \\rangle - \\langle -2, 8 \\rangle$$

$$= \\langle 6 - (-2), -9 - 8 \\rangle$$

$$= \\langle 8, -17 \\rangle$$

**Answers:**
- a) $\\langle 1, 1 \\rangle$
- b) $\\langle 8, -17 \\rangle$`,
            difficulty: 'EASY',
            order: 2,
          },
          {
            question: 'Find the dot product of $\\mathbf{u} = \\langle 5, 2 \\rangle$ and $\\mathbf{v} = \\langle -3, 4 \\rangle$. Are the vectors perpendicular?',
            solution: `**Solution:**

**Find the dot product:**

$$\\mathbf{u} \\cdot \\mathbf{v} = a_1a_2 + b_1b_2$$

$$= (5)(-3) + (2)(4)$$

$$= -15 + 8$$

$$= -7$$

**Are they perpendicular?**

Two vectors are perpendicular if and only if their dot product equals zero.

Since $\\mathbf{u} \\cdot \\mathbf{v} = -7 \\neq 0$, the vectors are **not perpendicular**.

**Answers:**
- Dot product: $-7$
- The vectors are not perpendicular`,
            difficulty: 'EASY',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What two properties does a vector have?',
      back: 'Magnitude (size) and direction',
    },
    {
      topicId: topic2.id,
      front: 'How do you find the magnitude of vector $\\mathbf{v} = \\langle a, b \\rangle$?',
      back: '$|\\mathbf{v}| = \\sqrt{a^2 + b^2}$',
    },
    {
      topicId: topic2.id,
      front: 'What is the formula for vector addition?',
      back: '$\\langle a_1, b_1 \\rangle + \\langle a_2, b_2 \\rangle = \\langle a_1 + a_2, b_1 + b_2 \\rangle$',
    },
    {
      topicId: topic2.id,
      front: 'What are the standard unit vectors?',
      back: '$\\mathbf{i} = \\langle 1, 0 \\rangle$ and $\\mathbf{j} = \\langle 0, 1 \\rangle$',
    },
    {
      topicId: topic2.id,
      front: 'How do you find a unit vector in the direction of $\\mathbf{v}$?',
      back: '$\\mathbf{u} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}$',
    },
    {
      topicId: topic2.id,
      front: 'What is the dot product formula?',
      back: '$\\mathbf{u} \\cdot \\mathbf{v} = a_1a_2 + b_1b_2$ for $\\mathbf{u} = \\langle a_1, b_1 \\rangle$ and $\\mathbf{v} = \\langle a_2, b_2 \\rangle$',
    },
    {
      topicId: topic2.id,
      front: 'When are two vectors perpendicular?',
      back: 'When their dot product equals zero: $\\mathbf{u} \\cdot \\mathbf{v} = 0$',
    },
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Parameters, Vectors, and Matrices (Part 1)!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards1.length + flashcards2.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
