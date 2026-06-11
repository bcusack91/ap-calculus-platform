import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Conic Sections...')

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  })

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found')
  }

  // Find the Function Fundamentals category
  const functionsCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      slug: 'function-fundamentals'
    }
  })

  if (!functionsCategory) {
    throw new Error('Function Fundamentals category not found')
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: functionsCategory.id }
  })

  // Topic 1: Circles and Parabolas
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'circles-parabolas' },
    update: {},
    create: {
      title: 'Circles and Parabolas',
      slug: 'circles-parabolas',
      description: 'Standard forms and key features of circles and parabolas',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Circles and Parabolas

## Introduction to Conic Sections

**Conic sections** are curves formed by the intersection of a plane and a double cone. The four types are:
- Circle
- Parabola
- Ellipse
- Hyperbola

## Circles

A **circle** is the set of all points equidistant from a center point.

### Standard Form
$$(x - h)^2 + (y - k)^2 = r^2$$

Where:
- $(h, k)$ = center
- $r$ = radius

### General Form
$$x^2 + y^2 + Dx + Ey + F = 0$$

**Converting General to Standard:** Complete the square for both $x$ and $y$ terms.

### Key Features
- **Center**: $(h, k)$
- **Radius**: $r$ (distance from center to any point on circle)
- **Diameter**: $2r$
- **Equation of circle with center at origin**: $x^2 + y^2 = r^2$

### Example
Circle with center $(3, -2)$ and radius $5$:
$$(x - 3)^2 + (y + 2)^2 = 25$$

## Parabolas

A **parabola** is the set of all points equidistant from a focus point and a directrix line.

### Vertical Parabolas (opens up or down)

**Standard Form (vertex form):**
$$(x - h)^2 = 4p(y - k)$$

Where:
- $(h, k)$ = vertex
- $p$ = distance from vertex to focus (and vertex to directrix)
- If $p > 0$: opens upward
- If $p < 0$: opens downward

**Key features:**
- Vertex: $(h, k)$
- Focus: $(h, k + p)$
- Directrix: $y = k - p$
- Axis of symmetry: $x = h$

**Alternate form:**
$$y = a(x - h)^2 + k$$

Where $a = \\frac{1}{4p}$

### Horizontal Parabolas (opens left or right)

**Standard Form:**
$$(y - k)^2 = 4p(x - h)$$

Where:
- $(h, k)$ = vertex
- If $p > 0$: opens right
- If $p < 0$: opens left

**Key features:**
- Vertex: $(h, k)$
- Focus: $(h + p, k)$
- Directrix: $x = h - p$
- Axis of symmetry: $y = k$

### Converting from General Form
$$Ax^2 + Bx + Cy + D = 0$$ (vertical parabola)

Complete the square on $x$ to get vertex form.

### Example: Vertical Parabola
Vertex at $(2, 3)$, opens upward, focus $2$ units above vertex:
$$(x - 2)^2 = 4(2)(y - 3)$$
$$(x - 2)^2 = 8(y - 3)$$

Focus: $(2, 5)$, Directrix: $y = 1$

## Graphing Tips

**For Circles:**
1. Plot center $(h, k)$
2. Count $r$ units in all directions
3. Sketch smooth curve

**For Parabolas:**
1. Plot vertex $(h, k)$
2. Determine direction (up/down/left/right)
3. Plot focus and draw directrix
4. Sketch symmetric curve
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.',
            solution: `**Convert to standard form by completing the square:**

Step 1: Group $x$ and $y$ terms:
$$(x^2 - 6x) + (y^2 + 4y) = 12$$

Step 2: Complete the square for $x$:
- Coefficient of $x$: $-6$
- Half of it: $-3$
- Square it: $9$

$$(x^2 - 6x + 9) + (y^2 + 4y) = 12 + 9$$

Step 3: Complete the square for $y$:
- Coefficient of $y$: $4$
- Half of it: $2$
- Square it: $4$

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

Step 4: Factor and simplify:
$$(x - 3)^2 + (y + 2)^2 = 25$$

Step 5: Identify center and radius:
- Standard form: $(x - h)^2 + (y - k)^2 = r^2$
- Center: $(h, k) = (3, -2)$
- Radius: $r = \\sqrt{25} = 5$

**Answers:**
- Center: $(3, -2)$
- Radius: $5$`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Write the equation of a parabola with vertex at $(-1, 4)$ and focus at $(-1, 6)$.',
            solution: `**Determine parabola characteristics:**

Step 1: Analyze vertex and focus:
- Vertex: $(-1, 4)$
- Focus: $(-1, 6)$
- Same $x$-coordinate → vertical parabola
- Focus is above vertex → opens upward

Step 2: Find $p$:
$$p = \\text{distance from vertex to focus}$$
$$p = 6 - 4 = 2$$

Step 3: Use standard form for vertical parabola:
$$(x - h)^2 = 4p(y - k)$$

With $h = -1$, $k = 4$, and $p = 2$:
$$(x - (-1))^2 = 4(2)(y - 4)$$
$$(x + 1)^2 = 8(y - 4)$$

Step 4: Verify key features:
- Vertex: $(-1, 4)$ ✓
- Focus: $(-1, 4 + 2) = (-1, 6)$ ✓
- Directrix: $y = 4 - 2 = 2$ 
- Axis of symmetry: $x = -1$

**Answer:** $(x + 1)^2 = 8(y - 4)$

**Alternate form:** Solve for $y$:
$$y = \\frac{(x + 1)^2}{8} + 4$$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A parabolic satellite dish is $20$ feet wide at the opening and $5$ feet deep. If we place the vertex at the origin with the parabola opening upward, find the equation and determine where the receiver (focus) should be placed.',
            solution: `**Set up coordinate system:**

Place vertex at origin $(0, 0)$, parabola opens upward.

Step 1: Identify a point on the parabola:
- Width at opening: $20$ feet → extends $10$ feet on each side
- Depth: $5$ feet
- Points on rim: $(10, 5)$ and $(-10, 5)$

Step 2: Use standard form with vertex at origin:
$$x^2 = 4py$$

Step 3: Substitute point $(10, 5)$:
$$10^2 = 4p(5)$$
$$100 = 20p$$
$$p = 5$$

Step 4: Write the equation:
$$x^2 = 4(5)y$$
$$x^2 = 20y$$

Or: $y = \\frac{x^2}{20}$

Step 5: Find focus location:
Focus is at $(0, p) = (0, 5)$

**Answers:**
- Equation: $x^2 = 20y$ or $y = \\frac{x^2}{20}$
- Receiver (focus) location: $5$ feet above the vertex, at the center

**Practical meaning:** All signals hitting the dish will reflect to the focus point $5$ feet above the bottom!`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What is the standard form of a circle?',
      back: '$(x - h)^2 + (y - k)^2 = r^2$ where $(h, k)$ is the center and $r$ is the radius'
    },
    {
      topicId: topic1.id,
      front: 'How do you convert the general form of a circle to standard form?',
      back: 'Complete the square for both $x$ and $y$ terms'
    },
    {
      topicId: topic1.id,
      front: 'What is a parabola?',
      back: 'The set of all points equidistant from a focus point and a directrix line'
    },
    {
      topicId: topic1.id,
      front: 'What is the vertex form of a vertical parabola?',
      back: '$(x - h)^2 = 4p(y - k)$ where $(h, k)$ is the vertex and $p$ is the distance to the focus'
    },
    {
      topicId: topic1.id,
      front: 'For a vertical parabola $(x - h)^2 = 4p(y - k)$, where is the focus?',
      back: '$(h, k + p)$ — $p$ units above the vertex if $p > 0$'
    },
    {
      topicId: topic1.id,
      front: 'How do you determine if a parabola opens up or down?',
      back: 'If $p > 0$, it opens upward; if $p < 0$, it opens downward'
    },
    {
      topicId: topic1.id,
      front: 'What is the directrix of a parabola $(x - h)^2 = 4p(y - k)$?',
      back: 'The horizontal line $y = k - p$'
    },
    {
      topicId: topic1.id,
      front: 'What is the axis of symmetry of a vertical parabola with vertex $(h, k)$?',
      back: 'The vertical line $x = h$'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Ellipses and Hyperbolas
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'ellipses-hyperbolas' },
    update: {},
    create: {
      title: 'Ellipses and Hyperbolas',
      slug: 'ellipses-hyperbolas',
      description: 'Standard forms and key features of ellipses and hyperbolas',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Ellipses and Hyperbolas

## Ellipses

An **ellipse** is the set of all points where the sum of distances to two foci is constant.

### Standard Form (Horizontal Major Axis)
$$\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1, \\quad a > b$$

### Standard Form (Vertical Major Axis)
$$\\frac{(x - h)^2}{b^2} + \\frac{(y - k)^2}{a^2} = 1, \\quad a > b$$

Where:
- $(h, k)$ = center
- $a$ = semi-major axis (larger value)
- $b$ = semi-minor axis (smaller value)
- $c$ = distance from center to focus

**Key relationship:** $c^2 = a^2 - b^2$

### Key Features of Ellipse

**For horizontal major axis** $\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1$:
- Center: $(h, k)$
- Vertices (endpoints of major axis): $(h \\pm a, k)$
- Co-vertices (endpoints of minor axis): $(h, k \\pm b)$
- Foci: $(h \\pm c, k)$ where $c^2 = a^2 - b^2$
- Major axis length: $2a$
- Minor axis length: $2b$

**For vertical major axis:** Swap the roles (vertices on vertical axis)

### Eccentricity
$$e = \\frac{c}{a}, \\quad 0 < e < 1$$

- $e$ close to $0$: nearly circular
- $e$ close to $1$: very elongated

## Hyperbolas

A **hyperbola** is the set of all points where the difference of distances to two foci is constant.

### Standard Form (Horizontal Transverse Axis)
$$\\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1$$

Opens left and right.

### Standard Form (Vertical Transverse Axis)
$$\\frac{(y - k)^2}{a^2} - \\frac{(x - h)^2}{b^2} = 1$$

Opens up and down.

Where:
- $(h, k)$ = center
- $a$ = distance from center to vertex
- $b$ = determines spread of branches
- $c$ = distance from center to focus

**Key relationship:** $c^2 = a^2 + b^2$ (note: plus, not minus!)

### Key Features of Hyperbola

**For horizontal transverse axis** $\\frac{(x - h)^2}{a^2} - \\frac{(y - k)^2}{b^2} = 1$:
- Center: $(h, k)$
- Vertices: $(h \\pm a, k)$
- Foci: $(h \\pm c, k)$ where $c^2 = a^2 + b^2$
- Asymptotes: $y - k = \\pm\\frac{b}{a}(x - h)$

**For vertical transverse axis:** Vertices and foci on vertical axis, asymptotes: $y - k = \\pm\\frac{a}{b}(x - h)$

### Asymptotes

The branches of a hyperbola approach (but never touch) the **asymptotes**.

**Rectangle method:**
1. Draw rectangle with vertices at $(h \\pm a, k \\pm b)$
2. Draw diagonals of rectangle
3. These diagonals are the asymptotes

## Identifying Conic Sections

From the equation $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ (with $B = 0$):

- **Circle**: $A = C$ (and same sign)
- **Ellipse**: $A \\neq C$ but same sign
- **Parabola**: Either $A = 0$ or $C = 0$ (but not both)
- **Hyperbola**: $A$ and $C$ have opposite signs

## Summary Table

| Conic | Standard Form | $c$ relationship | Key feature |
|-------|---------------|------------------|-------------|
| Circle | $(x-h)^2 + (y-k)^2 = r^2$ | N/A | All points distance $r$ from center |
| Ellipse | $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$ | $c^2 = a^2 - b^2$ | Sum of distances to foci = $2a$ |
| Hyperbola | $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$ | $c^2 = a^2 + b^2$ | Difference of distances to foci = $2a$ |
| Parabola | $(x-h)^2 = 4p(y-k)$ | N/A | Distance to focus = distance to directrix |
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the vertices, co-vertices, and foci of the ellipse $\\frac{(x - 2)^2}{25} + \\frac{(y + 1)^2}{9} = 1$.',
            solution: `**Identify the ellipse characteristics:**

Step 1: Determine orientation:
- Form: $\\frac{(x - h)^2}{a^2} + \\frac{(y - k)^2}{b^2} = 1$
- $a^2 = 25 > b^2 = 9$ → horizontal major axis
- $a = 5$, $b = 3$
- Center: $(h, k) = (2, -1)$

Step 2: Find vertices (endpoints of major axis):
Vertices are $a$ units left and right of center:
$$(2 \\pm 5, -1) = (7, -1) \\text{ and } (-3, -1)$$

Step 3: Find co-vertices (endpoints of minor axis):
Co-vertices are $b$ units up and down from center:
$$(2, -1 \\pm 3) = (2, 2) \\text{ and } (2, -4)$$

Step 4: Find foci using $c^2 = a^2 - b^2$:
$$c^2 = 25 - 9 = 16$$
$$c = 4$$

Foci are $c$ units left and right of center:
$$(2 \\pm 4, -1) = (6, -1) \\text{ and } (-2, -1)$$

**Answers:**
- Center: $(2, -1)$
- Vertices: $(7, -1)$ and $(-3, -1)$
- Co-vertices: $(2, 2)$ and $(2, -4)$
- Foci: $(6, -1)$ and $(-2, -1)$
- Major axis length: $2a = 10$
- Minor axis length: $2b = 6$`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Find the center, vertices, foci, and asymptotes of the hyperbola $\\frac{(y + 3)^2}{16} - \\frac{(x - 1)^2}{9} = 1$.',
            solution: `**Identify the hyperbola characteristics:**

Step 1: Determine orientation:
- $y$ term is positive → vertical transverse axis (opens up and down)
- $a^2 = 16$, so $a = 4$
- $b^2 = 9$, so $b = 3$
- Center: $(h, k) = (1, -3)$

Step 2: Find vertices:
Vertices are $a$ units above and below center:
$$(1, -3 \\pm 4) = (1, 1) \\text{ and } (1, -7)$$

Step 3: Find foci using $c^2 = a^2 + b^2$:
$$c^2 = 16 + 9 = 25$$
$$c = 5$$

Foci are $c$ units above and below center:
$$(1, -3 \\pm 5) = (1, 2) \\text{ and } (1, -8)$$

Step 4: Find asymptotes:
For vertical hyperbola: $y - k = \\pm\\frac{a}{b}(x - h)$
$$y - (-3) = \\pm\\frac{4}{3}(x - 1)$$
$$y + 3 = \\pm\\frac{4}{3}(x - 1)$$

Two asymptotes:
$$y = \\frac{4}{3}(x - 1) - 3 = \\frac{4}{3}x - \\frac{13}{3}$$
$$y = -\\frac{4}{3}(x - 1) - 3 = -\\frac{4}{3}x - \\frac{5}{3}$$

**Answers:**
- Center: $(1, -3)$
- Vertices: $(1, 1)$ and $(1, -7)$
- Foci: $(1, 2)$ and $(1, -8)$
- Asymptotes: $y = \\frac{4}{3}x - \\frac{13}{3}$ and $y = -\\frac{4}{3}x - \\frac{5}{3}$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Write the equation of an ellipse with center at the origin, a focus at $(0, 3)$, and a vertex at $(0, 5)$.',
            solution: `**Determine ellipse characteristics:**

Step 1: Analyze given information:
- Center: $(0, 0)$
- Focus: $(0, 3)$ → on $y$-axis → vertical major axis
- Vertex: $(0, 5)$ → also on $y$-axis ✓

Step 2: Find $a$ and $c$:
- Distance from center to vertex: $a = 5$
- Distance from center to focus: $c = 3$

Step 3: Use $c^2 = a^2 - b^2$ to find $b$:
$$3^2 = 5^2 - b^2$$
$$9 = 25 - b^2$$
$$b^2 = 16$$
$$b = 4$$

Step 4: Write equation (vertical major axis with center at origin):
$$\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1$$
$$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$$

Step 5: Verify:
- Center: $(0, 0)$ ✓
- $a = 5$, so vertices: $(0, \\pm 5)$ ✓
- $c = 3$, so foci: $(0, \\pm 3)$ ✓
- $b = 4$, so co-vertices: $(\\pm 4, 0)$

**Answer:** $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What is an ellipse?',
      back: 'The set of all points where the sum of distances to two foci is constant'
    },
    {
      topicId: topic2.id,
      front: 'What is the relationship between $a$, $b$, and $c$ for an ellipse?',
      back: '$c^2 = a^2 - b^2$ where $a$ is semi-major axis, $b$ is semi-minor axis, and $c$ is distance to focus'
    },
    {
      topicId: topic2.id,
      front: 'How do you determine if an ellipse has a horizontal or vertical major axis?',
      back: 'The larger denominator determines the major axis direction. If under $x^2$: horizontal; if under $y^2$: vertical'
    },
    {
      topicId: topic2.id,
      front: 'What is a hyperbola?',
      back: 'The set of all points where the difference of distances to two foci is constant'
    },
    {
      topicId: topic2.id,
      front: 'What is the relationship between $a$, $b$, and $c$ for a hyperbola?',
      back: '$c^2 = a^2 + b^2$ (note: plus sign, different from ellipse!)'
    },
    {
      topicId: topic2.id,
      front: 'How do you find the asymptotes of a horizontal hyperbola?',
      back: '$y - k = \\pm\\frac{b}{a}(x - h)$ where $(h, k)$ is the center'
    },
    {
      topicId: topic2.id,
      front: 'What is the difference between the positive term in ellipse vs hyperbola equations?',
      back: 'Ellipse: both terms positive (addition). Hyperbola: subtraction between terms'
    },
    {
      topicId: topic2.id,
      front: 'How can you identify a hyperbola from its general form?',
      back: 'The coefficients of $x^2$ and $y^2$ have opposite signs'
    },
    {
      topicId: topic2.id,
      front: 'What is eccentricity of an ellipse and what does it tell you?',
      back: '$e = \\frac{c}{a}$ where $0 < e < 1$. Close to 0: nearly circular. Close to 1: very elongated'
    },
    {
      topicId: topic2.id,
      front: 'For a hyperbola $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$, which direction does it open?',
      back: 'Horizontally (left and right) because the $x$ term is positive'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Conic Sections!')
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
