import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('🔀 Splitting parametric-equations-vectors-precalc into 3 separate topics...\n')

  // Find the category
  const category = await prisma.category.findFirst({
    where: {
      OR: [
        { slug: 'parameters-vectors-matrices' },
        { slug: 'precalc-polar-vectors-matrices' },
      ]
    }
  })

  if (!category) {
    console.log('❌ Category not found. Creating it...')
    const course = await prisma.course.findUnique({ where: { slug: 'ap-precalculus' } })
    if (!course) {
      console.log('❌ AP Precalculus course not found. Aborting.')
      return
    }
    const newCat = await prisma.category.create({
      data: {
        slug: 'parameters-vectors-matrices',
        name: 'Functions Involving Parameters, Vectors, and Matrices',
        description: 'Parametric equations, vectors, polar coordinates, and matrix operations',
        order: 4,
        courseId: course.id,
      }
    })
    console.log('  ✅ Created category:', newCat.slug)
    await splitTopics(newCat.id)
    return
  }

  console.log('  ✅ Found category:', category.slug)
  await splitTopics(category.id)
}

async function splitTopics(categoryId: string) {
  // Delete old combined topic if it exists
  const oldTopic = await prisma.topic.findUnique({
    where: { slug: 'parametric-equations-vectors-precalc' }
  })
  if (oldTopic) {
    // Delete related data first
    await prisma.exampleProblem.deleteMany({ where: { topicId: oldTopic.id } })
    await prisma.flashcard.deleteMany({ where: { topicId: oldTopic.id } })
    await prisma.topic.delete({ where: { id: oldTopic.id } })
    console.log('  🗑️  Deleted old combined topic: parametric-equations-vectors-precalc')
  }

  // ─── Topic 1: Parametric Equations ───
  const parametric = await prisma.topic.upsert({
    where: { slug: 'parametric-equations-precalc' },
    update: {
      categoryId,
      textContent: parametricTextContent,
      description: 'Master parametric equations: graphing curves, eliminating the parameter, derivatives, and motion applications.',
    },
    create: {
      title: 'Parametric Equations',
      slug: 'parametric-equations-precalc',
      description: 'Master parametric equations: graphing curves, eliminating the parameter, derivatives, and motion applications.',
      order: 1,
      categoryId,
      isPremium: false,
      textContent: parametricTextContent,
    },
  })
  console.log('  ✅ Upserted topic: parametric-equations-precalc')

  // Add example problems for parametric
  const parametricProblems = [
    {
      question: 'Eliminate the parameter from $x = 2t + 1$, $y = t^2$.',
      solution: 'Solve for $t$: $t = \\frac{x-1}{2}$. Substitute: $y = \\left(\\frac{x-1}{2}\\right)^2 = \\frac{(x-1)^2}{4}$.',
      difficulty: 'EASY' as const,
      order: 1,
    },
    {
      question: 'Find $dy/dx$ for $x = \\cos t$, $y = \\sin t$ at $t = \\pi/4$.',
      solution: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{\\cos t}{-\\sin t} = -\\cot t$. At $t = \\pi/4$: $-\\cot(\\pi/4) = -1$.',
      difficulty: 'MEDIUM' as const,
      order: 2,
    },
    {
      question: 'Find the rectangular equation for $x = 3\\cos t$, $y = 2\\sin t$.',
      solution: '$\\cos t = x/3$, $\\sin t = y/2$. Using $\\cos^2 t + \\sin^2 t = 1$: $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$. This is an ellipse.',
      difficulty: 'MEDIUM' as const,
      order: 3,
    },
    {
      question: 'A particle moves with $x = t^2 - 1$, $y = t^3 - 3t$. Find all values of $t$ where the tangent is horizontal.',
      solution: 'Horizontal tangent when $dy/dt = 0$ and $dx/dt \\neq 0$. $dy/dt = 3t^2 - 3 = 0 \\Rightarrow t = \\pm 1$. Check: $dx/dt = 2t \\neq 0$ at $t = \\pm 1$. Answer: $t = -1$ and $t = 1$.',
      difficulty: 'HARD' as const,
      order: 4,
    },
  ]
  // Clear existing example problems for this topic
  await prisma.exampleProblem.deleteMany({ where: { topicId: parametric.id } })
  for (const p of parametricProblems) {
    await prisma.exampleProblem.create({ data: { ...p, topicId: parametric.id } })
  }
  console.log('    📝 Added 4 example problems')

  // Add flashcards for parametric
  await prisma.flashcard.deleteMany({ where: { topicId: parametric.id } })
  const parametricFlashcards = [
    { front: 'What are parametric equations?', back: 'Equations where both $x$ and $y$ are defined as functions of a third variable (parameter) $t$: $x = f(t)$, $y = g(t)$.' },
    { front: 'How do you eliminate the parameter?', back: 'Solve one equation for $t$, then substitute into the other equation to get $y$ in terms of $x$ (or vice versa).' },
    { front: 'Parametric form of a circle', back: '$x = h + r\\cos t$, $y = k + r\\sin t$ for $0 \\leq t \\leq 2\\pi$, centered at $(h, k)$ with radius $r$.' },
    { front: 'Formula for $dy/dx$ with parametric equations', back: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ (provided $dx/dt \\neq 0$).' },
    { front: 'Parametric form of a line', back: '$x = x_0 + at$, $y = y_0 + bt$, where $(x_0, y_0)$ is a point on the line and $\\langle a, b \\rangle$ is the direction vector.' },
    { front: 'Parametric form of an ellipse', back: '$x = a\\cos t$, $y = b\\sin t$ traces an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$.' },
  ]
  for (const f of parametricFlashcards) {
    await prisma.flashcard.create({ data: { ...f, topicId: parametric.id } })
  }
  console.log('    🃏 Added 6 flashcards')

  // ─── Topic 2: Vectors in Two Dimensions ───
  const vectors = await prisma.topic.upsert({
    where: { slug: 'vectors-two-dimensions-precalc' },
    update: {
      categoryId,
      textContent: vectorsTextContent,
      description: 'Learn vector operations, magnitude, unit vectors, dot product, projections, and real-world applications.',
    },
    create: {
      title: 'Vectors in Two Dimensions',
      slug: 'vectors-two-dimensions-precalc',
      description: 'Learn vector operations, magnitude, unit vectors, dot product, projections, and real-world applications.',
      order: 2,
      categoryId,
      isPremium: false,
      textContent: vectorsTextContent,
    },
  })
  console.log('  ✅ Upserted topic: vectors-two-dimensions-precalc')

  // Add example problems for vectors
  const vectorProblems = [
    {
      question: 'Find the magnitude of $\\vec{v} = \\langle -3, 4 \\rangle$.',
      solution: '$|\\vec{v}| = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
      difficulty: 'EASY' as const,
      order: 1,
    },
    {
      question: 'Find the unit vector in the direction of $\\langle 5, 12 \\rangle$.',
      solution: '$|\\vec{v}| = \\sqrt{25 + 144} = 13$. Unit vector: $\\hat{v} = \\langle \\frac{5}{13}, \\frac{12}{13} \\rangle$.',
      difficulty: 'MEDIUM' as const,
      order: 2,
    },
    {
      question: 'Find the dot product $\\langle 2, -1 \\rangle \\cdot \\langle 3, 4 \\rangle$.',
      solution: '$\\vec{u} \\cdot \\vec{v} = (2)(3) + (-1)(4) = 6 - 4 = 2$.',
      difficulty: 'EASY' as const,
      order: 3,
    },
    {
      question: 'Find the angle between $\\vec{u} = \\langle 1, 1 \\rangle$ and $\\vec{v} = \\langle 1, 0 \\rangle$.',
      solution: '$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|} = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{1}{\\sqrt{2}}$. $\\theta = 45°$.',
      difficulty: 'MEDIUM' as const,
      order: 4,
    },
    {
      question: 'Find $\\text{proj}_{\\vec{v}} \\vec{u}$ where $\\vec{u} = \\langle 4, 3 \\rangle$ and $\\vec{v} = \\langle 1, 0 \\rangle$.',
      solution: '$\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v} = \\frac{4}{1}\\langle 1, 0 \\rangle = \\langle 4, 0 \\rangle$.',
      difficulty: 'HARD' as const,
      order: 5,
    },
  ]
  await prisma.exampleProblem.deleteMany({ where: { topicId: vectors.id } })
  for (const p of vectorProblems) {
    await prisma.exampleProblem.create({ data: { ...p, topicId: vectors.id } })
  }
  console.log('    📝 Added 5 example problems')

  // Add flashcards for vectors
  await prisma.flashcard.deleteMany({ where: { topicId: vectors.id } })
  const vectorFlashcards = [
    { front: 'What is a vector?', back: 'A quantity with both magnitude (length) and direction, written as $\\vec{v} = \\langle a, b \\rangle$.' },
    { front: 'Magnitude formula', back: '$|\\vec{v}| = \\sqrt{a^2 + b^2}$ for $\\vec{v} = \\langle a, b \\rangle$.' },
    { front: 'Unit vector formula', back: '$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$ — divides each component by the magnitude.' },
    { front: 'Dot product formula', back: '$\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 = |\\vec{u}||\\vec{v}|\\cos\\theta$' },
    { front: 'When are two vectors orthogonal?', back: 'When $\\vec{u} \\cdot \\vec{v} = 0$ (their dot product is zero).' },
    { front: 'Vector projection formula', back: '$\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$' },
    { front: 'How to find the angle between two vectors?', back: '$\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|}$, then $\\theta = \\cos^{-1}(\\text{result})$.' },
  ]
  for (const f of vectorFlashcards) {
    await prisma.flashcard.create({ data: { ...f, topicId: vectors.id } })
  }
  console.log('    🃏 Added 7 flashcards')

  // ─── Topic 3: Polar Coordinates ───
  const polar = await prisma.topic.upsert({
    where: { slug: 'polar-coordinates-precalc' },
    update: {
      categoryId,
      textContent: polarTextContent,
      description: 'Explore the polar coordinate system, conversions, graphing polar curves, and classic polar equations.',
    },
    create: {
      title: 'Polar Coordinates',
      slug: 'polar-coordinates-precalc',
      description: 'Explore the polar coordinate system, conversions, graphing polar curves, and classic polar equations.',
      order: 3,
      categoryId,
      isPremium: false,
      textContent: polarTextContent,
    },
  })
  console.log('  ✅ Upserted topic: polar-coordinates-precalc')

  // Add example problems for polar
  const polarProblems = [
    {
      question: 'Convert the rectangular point $(3, 3)$ to polar coordinates.',
      solution: '$r = \\sqrt{3^2 + 3^2} = \\sqrt{18} = 3\\sqrt{2}$. $\\theta = \\tan^{-1}(3/3) = \\tan^{-1}(1) = \\pi/4$. Answer: $(3\\sqrt{2}, \\pi/4)$.',
      difficulty: 'EASY' as const,
      order: 1,
    },
    {
      question: 'Convert the polar equation $r = 4\\cos\\theta$ to rectangular form.',
      solution: 'Multiply by $r$: $r^2 = 4r\\cos\\theta \\Rightarrow x^2 + y^2 = 4x \\Rightarrow (x-2)^2 + y^2 = 4$. A circle centered at $(2,0)$ with radius 2.',
      difficulty: 'MEDIUM' as const,
      order: 2,
    },
    {
      question: 'How many petals does $r = \\sin(4\\theta)$ have?',
      solution: 'For $r = \\sin(n\\theta)$ with $n$ even: $2n$ petals. So $2(4) = 8$ petals.',
      difficulty: 'MEDIUM' as const,
      order: 3,
    },
    {
      question: 'Find the area enclosed by one petal of $r = \\cos(2\\theta)$.',
      solution: 'One petal spans $-\\pi/4$ to $\\pi/4$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2(2\\theta)\\,d\\theta = \\frac{1}{2}\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{8}$.',
      difficulty: 'HARD' as const,
      order: 4,
    },
  ]
  await prisma.exampleProblem.deleteMany({ where: { topicId: polar.id } })
  for (const p of polarProblems) {
    await prisma.exampleProblem.create({ data: { ...p, topicId: polar.id } })
  }
  console.log('    📝 Added 4 example problems')

  // Add flashcards for polar
  await prisma.flashcard.deleteMany({ where: { topicId: polar.id } })
  const polarFlashcards = [
    { front: 'Polar to rectangular conversion', back: '$x = r\\cos\\theta$, $y = r\\sin\\theta$' },
    { front: 'Rectangular to polar conversion', back: '$r = \\sqrt{x^2 + y^2}$, $\\theta = \\tan^{-1}(y/x)$ (adjust quadrant)' },
    { front: 'Rose curve petals', back: '$r = \\cos(n\\theta)$ or $\\sin(n\\theta)$: $n$ petals if $n$ is odd, $2n$ petals if $n$ is even.' },
    { front: 'Cardioid equation', back: '$r = a \\pm a\\cos\\theta$ or $r = a \\pm a\\sin\\theta$. Heart-shaped curve passing through the origin.' },
    { front: 'Limaçon with inner loop', back: '$r = a + b\\cos\\theta$ where $|b| > |a|$ produces an inner loop.' },
    { front: 'Lemniscate equation', back: '$r^2 = a^2\\cos(2\\theta)$ or $r^2 = a^2\\sin(2\\theta)$. Figure-eight shaped curve.' },
    { front: 'What does $r = c$ represent?', back: 'A circle centered at the origin with radius $|c|$.' },
  ]
  for (const f of polarFlashcards) {
    await prisma.flashcard.create({ data: { ...f, topicId: polar.id } })
  }
  console.log('    🃏 Added 7 flashcards')

  console.log('\n🎉 Successfully split into 3 separate topics!')
}

// ─── Text Content ───

const parametricTextContent = `# Parametric Equations

## What Are Parametric Equations?

Instead of expressing $y$ directly as a function of $x$, **parametric equations** define both $x$ and $y$ in terms of a third variable called a **parameter** (usually $t$):

$$x = f(t), \\quad y = g(t)$$

This allows us to describe curves that fail the vertical line test, trace motion over time, and represent complex shapes naturally.

---

## Eliminating the Parameter

To convert from parametric to rectangular form:
1. **Solve** one equation for $t$
2. **Substitute** into the other

**Example**: $x = 2t + 1$, $y = t^2$

$$t = \\frac{x-1}{2} \\implies y = \\left(\\frac{x-1}{2}\\right)^2 = \\frac{(x-1)^2}{4}$$

---

## Common Parametric Curves

### Line
$$x = x_0 + at, \\quad y = y_0 + bt$$
- Direction vector: $\\langle a, b \\rangle$
- Passes through $(x_0, y_0)$

### Circle
$$x = h + r\\cos t, \\quad y = k + r\\sin t, \\quad 0 \\leq t \\leq 2\\pi$$
- Center $(h, k)$, radius $r$

### Ellipse
$$x = a\\cos t, \\quad y = b\\sin t$$
- Eliminates to $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$

---

## Derivatives with Parametric Equations

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} \\quad \\text{(where } dx/dt \\neq 0\\text{)}$$

### Horizontal tangent: $dy/dt = 0$ (and $dx/dt \\neq 0$)
### Vertical tangent: $dx/dt = 0$ (and $dy/dt \\neq 0$)

### Second Derivative
$$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left[\\frac{dy}{dx}\\right]}{\\frac{dx}{dt}}$$

---

## Arc Length of Parametric Curves

$$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\, dt$$

---

## Motion Applications

When $t$ represents time:
- **Position**: $(x(t), y(t))$
- **Velocity vector**: $\\langle dx/dt, dy/dt \\rangle$
- **Speed**: $|\\vec{v}| = \\sqrt{(dx/dt)^2 + (dy/dt)^2}$

> **AP Precalculus Tip**: Parametric equations are a major topic in Unit 4. Be comfortable eliminating parameters, finding slopes, and interpreting motion.`

const vectorsTextContent = `# Vectors in Two Dimensions

## What Is a Vector?

A **vector** is a quantity with both **magnitude** (length) and **direction**:

$$\\vec{v} = \\langle a, b \\rangle$$

where $a$ is the horizontal component and $b$ is the vertical component.

---

## Magnitude

$$|\\vec{v}| = \\sqrt{a^2 + b^2}$$

**Example**: $|\\langle 3, 4 \\rangle| = \\sqrt{9 + 16} = 5$

---

## Unit Vectors

A **unit vector** has magnitude 1:

$$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$$

**Standard unit vectors**: $\\hat{i} = \\langle 1, 0 \\rangle$ and $\\hat{j} = \\langle 0, 1 \\rangle$

So $\\vec{v} = \\langle a, b \\rangle = a\\hat{i} + b\\hat{j}$

---

## Vector Operations

### Addition & Subtraction
$$\\vec{u} + \\vec{v} = \\langle u_1 + v_1, u_2 + v_2 \\rangle$$
$$\\vec{u} - \\vec{v} = \\langle u_1 - v_1, u_2 - v_2 \\rangle$$

### Scalar Multiplication
$$c\\vec{v} = \\langle cv_1, cv_2 \\rangle$$

---

## Dot Product

$$\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2$$

### Geometric Form
$$\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta$$

### Key Properties
- $\\vec{u} \\cdot \\vec{v} = 0 \\iff$ vectors are **orthogonal** (perpendicular)
- $\\vec{u} \\cdot \\vec{v} > 0 \\iff$ angle is acute
- $\\vec{u} \\cdot \\vec{v} < 0 \\iff$ angle is obtuse

---

## Angle Between Vectors

$$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}$$

---

## Vector Projection

The **projection** of $\\vec{u}$ onto $\\vec{v}$:

$$\\text{proj}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v}$$

**Scalar projection** (component of $\\vec{u}$ along $\\vec{v}$):

$$\\text{comp}_{\\vec{v}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$$

---

## Applications

### Work
$$W = \\vec{F} \\cdot \\vec{d} = |\\vec{F}||\\vec{d}|\\cos\\theta$$

### Navigation & Physics
Decompose forces, velocities, and displacements into component form for analysis.

> **AP Precalculus Tip**: Vectors appear in Unit 4. Master component operations, dot product, and understanding when vectors are perpendicular.`

const polarTextContent = `# Polar Coordinates

## The Polar Coordinate System

In the polar system, a point is located by:
- **$r$**: distance from the origin (pole)
- **$\\theta$**: angle from the positive $x$-axis (polar axis)

A point is written as $(r, \\theta)$.

---

## Conversion Between Systems

### Polar to Rectangular
$$x = r\\cos\\theta, \\quad y = r\\sin\\theta$$

### Rectangular to Polar
$$r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)$$

> **Important**: Adjust $\\theta$ based on the quadrant of $(x, y)$.

---

## Common Polar Graphs

### Circle
$$r = a \\quad \\text{(centered at origin, radius } a\\text{)}$$
$$r = a\\cos\\theta \\quad \\text{(centered at } (a/2, 0)\\text{, radius } a/2\\text{)}$$
$$r = a\\sin\\theta \\quad \\text{(centered at } (0, a/2)\\text{, radius } a/2\\text{)}$$

### Line
$$\\theta = c \\quad \\text{(line through origin at angle } c\\text{)}$$

---

## Classic Polar Curves

### Rose Curves: $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$
- $n$ odd → **$n$ petals**
- $n$ even → **$2n$ petals**

### Cardioids: $r = a(1 + \\cos\\theta)$ or $r = a(1 + \\sin\\theta)$
- Heart-shaped curve that passes through the origin

### Limaçons: $r = a + b\\cos\\theta$
- $|b| > |a|$: inner loop
- $|b| = |a|$: cardioid
- $|a| > |b|$: dimpled or convex

### Lemniscate: $r^2 = a^2\\cos(2\\theta)$
- Figure-eight (infinity symbol) shape

### Spiral of Archimedes: $r = a\\theta$
- Spirals outward as $\\theta$ increases

---

## Converting Equations

### Rectangular → Polar
Use $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $x^2 + y^2 = r^2$.

**Example**: $x^2 + y^2 = 4x$ → $r^2 = 4r\\cos\\theta$ → $r = 4\\cos\\theta$

### Polar → Rectangular
Multiply by $r$ or use identities to introduce $x$, $y$, $r^2$.

**Example**: $r = 2\\sin\\theta$ → $r^2 = 2r\\sin\\theta$ → $x^2 + y^2 = 2y$ → $x^2 + (y-1)^2 = 1$

---

## Symmetry Tests

- **Polar axis** ($x$-axis): Replace $\\theta$ with $-\\theta$
- **Line** $\\theta = \\pi/2$ ($y$-axis): Replace $\\theta$ with $\\pi - \\theta$
- **Pole** (origin): Replace $r$ with $-r$

---

## Complex Numbers in Polar Form

$$z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$$

### De Moivre's Theorem
$$z^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$$

> **AP Precalculus Tip**: Polar coordinates are heavily tested in Unit 4. Know conversions, curve types, and how to identify graphs from equations.`

main().catch(console.error).finally(() => prisma.$disconnect())
