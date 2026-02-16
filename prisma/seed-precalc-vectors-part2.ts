import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Functions Involving Parameters, Vectors, and Matrices (Part 2)...');

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  });

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found');
  }

  // Find the Parametric/Vectors category
  const vectorsCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      name: 'Functions Involving Parameters, Vectors, and Matrices'
    }
  });

  if (!vectorsCategory) {
    throw new Error('Functions Involving Parameters, Vectors, and Matrices category not found');
  }

  // Get current topic count to set proper order
  const existingTopics = await prisma.topic.count({
    where: { categoryId: vectorsCategory.id }
  });

  // Topic 3: Polar Coordinates
  const polarTopic = await prisma.topic.create({
    data: {
      title: 'Polar Coordinates and Graphs',
      slug: 'polar-coordinates',
      description: 'Convert between polar and rectangular coordinates, graph polar equations, and understand polar curves.',
      order: existingTopics + 1,
      categoryId: vectorsCategory.id,
      isPremium: false,
      textContent: `
# Polar Coordinates and Graphs

## Introduction to Polar Coordinates

In the **polar coordinate system**, each point is determined by:
- **$r$** = distance from the origin (pole)
- **$\\theta$** = angle from the positive x-axis (polar axis)

A point is written as $(r, \\theta)$ in polar form.

### Conventions
- $r$ can be positive or negative
  - If $r > 0$, move $r$ units in the direction of $\\theta$
  - If $r < 0$, move $|r|$ units in the opposite direction of $\\theta$
- $\\theta$ is typically measured in radians
- Multiple representations: $(r, \\theta)$, $(r, \\theta + 2\\pi n)$, $(-r, \\theta + \\pi)$ all represent the same point

## Conversion Formulas

### Polar to Rectangular
Given $(r, \\theta)$ in polar:
$$x = r\\cos(\\theta)$$
$$y = r\\sin(\\theta)$$

### Rectangular to Polar
Given $(x, y)$ in rectangular:
$$r = \\sqrt{x^2 + y^2}$$
$$\\theta = \\arctan(\\frac{y}{x})$$ (adjust for quadrant)

Or use: $\\tan(\\theta) = \\frac{y}{x}$

**Important:** When finding $\\theta$:
- Use $\\arctan(\\frac{y}{x})$ as starting point
- Adjust based on the quadrant of $(x, y)$
- Quadrant I: $\\theta = \\arctan(\\frac{y}{x})$
- Quadrant II: $\\theta = \\pi + \\arctan(\\frac{y}{x})$
- Quadrant III: $\\theta = \\pi + \\arctan(\\frac{y}{x})$
- Quadrant IV: $\\theta = 2\\pi + \\arctan(\\frac{y}{x})$ or $\\theta = \\arctan(\\frac{y}{x})$ (negative)

## Common Polar Graphs

### Circles
- **$r = a$**: Circle centered at origin with radius $a$
- **$r = 2a\\cos(\\theta)$**: Circle with diameter $2a$ on the polar axis
- **$r = 2a\\sin(\\theta)$**: Circle with diameter $2a$ perpendicular to polar axis

### Lines
- **$\\theta = \\alpha$**: Line through origin at angle $\\alpha$
- **$r\\cos(\\theta) = a$**: Vertical line $x = a$
- **$r\\sin(\\theta) = a$**: Horizontal line $y = a$

### Limaçons
General form: $r = a \\pm b\\cos(\\theta)$ or $r = a \\pm b\\sin(\\theta)$

- If $\\frac{a}{b} < 1$: Inner loop
- If $\\frac{a}{b} = 1$: Cardioid (heart-shaped)
- If $1 < \\frac{a}{b} < 2$: Dimpled limaçon
- If $\\frac{a}{b} \\geq 2$: Convex limaçon

### Rose Curves
General form: $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$

- If $n$ is odd: $n$ petals
- If $n$ is even: $2n$ petals
- Length of each petal: $|a|$

### Lemniscates
- **$r^2 = a^2\\cos(2\\theta)$**: Figure-eight along polar axis
- **$r^2 = a^2\\sin(2\\theta)$**: Figure-eight at $45°$

### Spirals
- **$r = a\\theta$**: Archimedean spiral
- **$r = ae^{b\\theta}$**: Exponential spiral

## Symmetry in Polar Graphs

Test for symmetry to help sketch graphs:

1. **Symmetry about the polar axis (x-axis):**
   - Replace $(r, \\theta)$ with $(r, -\\theta)$
   - If equation unchanged, symmetric about polar axis

2. **Symmetry about $\\theta = \\frac{\\pi}{2}$ (y-axis):**
   - Replace $(r, \\theta)$ with $(r, \\pi - \\theta)$ or $(-r, -\\theta)$
   - If equation unchanged, symmetric about $\\theta = \\frac{\\pi}{2}$

3. **Symmetry about the pole (origin):**
   - Replace $(r, \\theta)$ with $(-r, \\theta)$ or $(r, \\theta + \\pi)$
   - If equation unchanged, symmetric about the pole

## Graphing Strategy

1. **Identify the type** of polar curve
2. **Check for symmetry**
3. **Create a table** of values for $\\theta$ from $0$ to $2\\pi$
4. **Plot key points** and note special values
5. **Sketch the curve** connecting points smoothly
6. **Consider domain restrictions** if $r^2$ appears (must have $r^2 \\geq 0$)
`,
      exampleProblems: {
        create: [
          {
            question: 'Convert the point $(3, \\frac{2\\pi}{3})$ from polar to rectangular coordinates.',
            solution: `**Solution:**

Given polar coordinates: $(r, \\theta) = (3, \\frac{2\\pi}{3})$

Use conversion formulas:
$$x = r\\cos(\\theta)$$
$$y = r\\sin(\\theta)$$

**Find $x$:**
$$x = 3\\cos(\\frac{2\\pi}{3}) = 3 \\cdot (-\\frac{1}{2}) = -\\frac{3}{2}$$

**Find $y$:**
$$y = 3\\sin(\\frac{2\\pi}{3}) = 3 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{2}$$

**Answer:** $(-\\frac{3}{2}, \\frac{3\\sqrt{3}}{2})$

**Verification:**
- Check distance: $r = \\sqrt{(-\\frac{3}{2})^2 + (\\frac{3\\sqrt{3}}{2})^2} = \\sqrt{\\frac{9}{4} + \\frac{27}{4}} = \\sqrt{9} = 3$ ✓
- Check angle: Point is in Quadrant II with correct ratio ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Convert the rectangular equation $x^2 + y^2 = 4y$ to polar form.',
            solution: `**Solution:**

Given: $x^2 + y^2 = 4y$

Use substitutions:
- $x = r\\cos(\\theta)$
- $y = r\\sin(\\theta)$
- $x^2 + y^2 = r^2$

**Substitute:**
$$r^2 = 4r\\sin(\\theta)$$

**Simplify:**
$$r^2 - 4r\\sin(\\theta) = 0$$
$$r(r - 4\\sin(\\theta)) = 0$$

This gives $r = 0$ or $r = 4\\sin(\\theta)$

Since $r = 0$ is included in $r = 4\\sin(\\theta)$ when $\\theta = 0$ or $\\pi$, we can write:

**Answer:** $r = 4\\sin(\\theta)$

**Interpretation:** This is a circle with diameter 4 on the line $\\theta = \\frac{\\pi}{2}$ (the y-axis).

**Verification in rectangular:**
- $r = 4\\sin(\\theta)$ means $r^2 = 4r\\sin(\\theta)$
- Substituting back: $x^2 + y^2 = 4y$ ✓
- Completing the square: $x^2 + (y-2)^2 = 4$, a circle centered at $(0,2)$ with radius 2 ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Identify and sketch the polar curve $r = 2 + 2\\cos(\\theta)$. Describe its key features.',
            solution: `**Solution:**

Given: $r = 2 + 2\\cos(\\theta)$

**Step 1: Identify the curve type**

This is a limaçon of the form $r = a + b\\cos(\\theta)$ where $a = 2$ and $b = 2$.

Since $\\frac{a}{b} = \\frac{2}{2} = 1$, this is a **cardioid** (heart-shaped).

**Step 2: Check for symmetry**

Test symmetry about the polar axis (x-axis):
Replace $\\theta$ with $-\\theta$:
$$r = 2 + 2\\cos(-\\theta) = 2 + 2\\cos(\\theta)$$

Equation unchanged, so **symmetric about the polar axis** ✓

**Step 3: Create table of values**

| $\\theta$ | $0$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\pi$ | $\\frac{4\\pi}{3}$ | $\\frac{3\\pi}{2}$ | $\\frac{5\\pi}{3}$ | $2\\pi$ |
|-----------|-----|-------------------|-------------------|--------------------|----|--------------------|--------------------|--------------------|----|
| $\\cos(\\theta)$ | $1$ | $\\frac{1}{2}$ | $0$ | $-\\frac{1}{2}$ | $-1$ | $-\\frac{1}{2}$ | $0$ | $\\frac{1}{2}$ | $1$ |
| $r$ | $4$ | $3$ | $2$ | $1$ | $0$ | $1$ | $2$ | $3$ | $4$ |

**Step 4: Key features**

- **Maximum $r$**: $r = 4$ when $\\theta = 0$ (rightmost point)
- **Minimum $r$**: $r = 0$ when $\\theta = \\pi$ (cusp at origin)
- **Axis of symmetry**: Polar axis (x-axis)
- **Shape**: Heart-shaped curve pointing right
- **Key points in rectangular coordinates:**
  - $\\theta = 0$: $(4, 0)$
  - $\\theta = \\frac{\\pi}{2}$: $(0, 2)$
  - $\\theta = \\pi$: $(0, 0)$ (cusp)
  - $\\theta = \\frac{3\\pi}{2}$: $(0, -2)$

**Sketch description:**
The curve starts at $(4, 0)$, curves upward and left, passes through $(0, 2)$, continues to the origin at $\\theta = \\pi$ forming a cusp, then curves downward through $(0, -2)$, and returns to $(4, 0)$. The overall shape resembles a heart lying on its side.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', polarTopic.title);

  // Create flashcards for polar coordinates topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polarTopic.id,
        front: 'What are the formulas to convert from polar coordinates $(r, \\theta)$ to rectangular coordinates $(x, y)$?',
        back: '$x = r\\cos(\\theta)$ and $y = r\\sin(\\theta)$'
      },
      {
        topicId: polarTopic.id,
        front: 'What are the formulas to convert from rectangular coordinates $(x, y)$ to polar coordinates $(r, \\theta)$?',
        back: '$r = \\sqrt{x^2 + y^2}$ and $\\tan(\\theta) = \\frac{y}{x}$ (adjust $\\theta$ based on quadrant)'
      },
      {
        topicId: polarTopic.id,
        front: 'What type of curve is $r = a$ in polar coordinates?',
        back: 'A circle centered at the origin with radius $|a|$.'
      },
      {
        topicId: polarTopic.id,
        front: 'What is a cardioid and what is its general form?',
        back: 'A heart-shaped curve. General form: $r = a + a\\cos(\\theta)$ or $r = a + a\\sin(\\theta)$ where the coefficients are equal (ratio = 1).'
      },
      {
        topicId: polarTopic.id,
        front: 'For rose curves $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$, how many petals are there?',
        back: 'If $n$ is odd: $n$ petals. If $n$ is even: $2n$ petals.'
      },
      {
        topicId: polarTopic.id,
        front: 'How do you test for symmetry about the polar axis in polar coordinates?',
        back: 'Replace $(r, \\theta)$ with $(r, -\\theta)$. If the equation is unchanged, the graph is symmetric about the polar axis (x-axis).'
      },
      {
        topicId: polarTopic.id,
        front: 'What is the polar equation of a circle with diameter $2a$ on the polar axis?',
        back: '$r = 2a\\cos(\\theta)$. The circle passes through the origin and has its center at $(a, 0)$ in rectangular coordinates.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', polarTopic.title);

  // Topic 4: Matrix Operations
  const matricesTopic = await prisma.topic.create({
    data: {
      title: 'Matrix Operations and Applications',
      slug: 'matrix-operations',
      description: 'Perform matrix addition, multiplication, find determinants and inverses, and solve systems using matrices.',
      order: existingTopics + 2,
      categoryId: vectorsCategory.id,
      isPremium: false,
      textContent: `
# Matrix Operations and Applications

## Introduction to Matrices

A **matrix** is a rectangular array of numbers arranged in rows and columns.

$$A = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\end{bmatrix}$$

This is a $2 \\times 3$ matrix (2 rows, 3 columns).

### Matrix Notation
- **Dimension**: $m \\times n$ (m rows, n columns)
- **Element**: $a_{ij}$ is the element in row $i$, column $j$
- **Square matrix**: $m = n$ (same number of rows and columns)

## Matrix Addition and Subtraction

Matrices can be added or subtracted only if they have the **same dimensions**.

$$A + B = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} + \\begin{bmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{bmatrix} = \\begin{bmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{bmatrix}$$

**Properties:**
- Commutative: $A + B = B + A$
- Associative: $(A + B) + C = A + (B + C)$
- Identity: $A + O = A$ (where $O$ is the zero matrix)

## Scalar Multiplication

Multiply each element by the scalar:

$$cA = c\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} = \\begin{bmatrix} ca_{11} & ca_{12} \\\\ ca_{21} & ca_{22} \\end{bmatrix}$$

## Matrix Multiplication

For $A_{m \\times n}$ and $B_{n \\times p}$, the product $AB$ is an $m \\times p$ matrix.

**Note:** The number of columns in $A$ must equal the number of rows in $B$.

The element in row $i$, column $j$ of $AB$ is:
$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}$$

### Example (2×2 matrices):
$$\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{bmatrix}$$

**Properties:**
- **NOT commutative**: $AB \\neq BA$ in general
- Associative: $(AB)C = A(BC)$
- Distributive: $A(B + C) = AB + AC$

## Identity Matrix

The identity matrix $I_n$ is an $n \\times n$ matrix with 1s on the diagonal and 0s elsewhere:

$$I_3 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$$

**Property:** $AI = IA = A$

## Determinant (2×2 matrices)

For a $2 \\times 2$ matrix:
$$\\det(A) = \\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$$

### Determinant (3×3 matrices)

For a $3 \\times 3$ matrix, use cofactor expansion:
$$\\det\\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)$$

**Properties:**
- If $\\det(A) = 0$, the matrix is **singular** (not invertible)
- If $\\det(A) \\neq 0$, the matrix is **invertible**
- $\\det(AB) = \\det(A) \\cdot \\det(B)$

## Matrix Inverse (2×2)

For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, if $\\det(A) = ad - bc \\neq 0$:

$$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$

**Property:** $AA^{-1} = A^{-1}A = I$

## Solving Systems with Matrices

A system of linear equations can be written as $AX = B$ where:
- $A$ is the coefficient matrix
- $X$ is the variable matrix
- $B$ is the constant matrix

### Example:
$$\\begin{cases} 2x + 3y = 7 \\\\ 4x - y = 5 \\end{cases}$$

Can be written as:
$$\\begin{bmatrix} 2 & 3 \\\\ 4 & -1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 5 \\end{bmatrix}$$

**Solution:** $X = A^{-1}B$ (if $A$ is invertible)

## Applications

1. **Systems of equations**: Solve $AX = B$
2. **Transformations**: Represent rotations, reflections, scaling
3. **Cryptography**: Encode and decode messages
4. **Economics**: Input-output models
5. **Computer graphics**: 3D transformations
`,
      exampleProblems: {
        create: [
          {
            question: 'Given $A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 1 & 5 \\\\ -2 & 3 \\end{bmatrix}$, find $AB$.',
            solution: `**Solution:**

Given:
$$A = \\begin{bmatrix} 2 & -1 \\\\ 3 & 4 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 5 \\\\ -2 & 3 \\end{bmatrix}$$

**Matrix multiplication formula:**
For element $(i,j)$ in $AB$: multiply row $i$ of $A$ by column $j$ of $B$.

**Calculate each element:**

**First row, first column:** $(2)(1) + (-1)(-2) = 2 + 2 = 4$

**First row, second column:** $(2)(5) + (-1)(3) = 10 - 3 = 7$

**Second row, first column:** $(3)(1) + (4)(-2) = 3 - 8 = -5$

**Second row, second column:** $(3)(5) + (4)(3) = 15 + 12 = 27$

**Answer:**
$$AB = \\begin{bmatrix} 4 & 7 \\\\ -5 & 27 \\end{bmatrix}$$

**Note:** Matrix multiplication is not commutative. $BA$ would give a different result!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Find the inverse of $A = \\begin{bmatrix} 3 & 2 \\\\ 5 & 4 \\end{bmatrix}$.',
            solution: `**Solution:**

Given: $A = \\begin{bmatrix} 3 & 2 \\\\ 5 & 4 \\end{bmatrix}$

**Step 1: Calculate the determinant**
$$\\det(A) = (3)(4) - (2)(5) = 12 - 10 = 2$$

Since $\\det(A) = 2 \\neq 0$, the matrix is invertible.

**Step 2: Use the inverse formula for 2×2 matrices**

For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$:
$$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$$

**Step 3: Apply the formula**
$$A^{-1} = \\frac{1}{2}\\begin{bmatrix} 4 & -2 \\\\ -5 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & -1 \\\\ -\\frac{5}{2} & \\frac{3}{2} \\end{bmatrix}$$

**Answer:** $A^{-1} = \\begin{bmatrix} 2 & -1 \\\\ -\\frac{5}{2} & \\frac{3}{2} \\end{bmatrix}$

**Verification:** Check that $AA^{-1} = I$
$$\\begin{bmatrix} 3 & 2 \\\\ 5 & 4 \\end{bmatrix} \\begin{bmatrix} 2 & -1 \\\\ -\\frac{5}{2} & \\frac{3}{2} \\end{bmatrix} = \\begin{bmatrix} 6-5 & -3+3 \\\\ 10-10 & -5+6 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Use matrices to solve the system: $\\begin{cases} 2x + y = 5 \\\\ 3x - 2y = 4 \\end{cases}$',
            solution: `**Solution:**

**Step 1: Write in matrix form $AX = B$**

$$\\begin{bmatrix} 2 & 1 \\\\ 3 & -2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$$

Where $A = \\begin{bmatrix} 2 & 1 \\\\ 3 & -2 \\end{bmatrix}$, $X = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$, $B = \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$

**Step 2: Find $A^{-1}$**

Calculate determinant:
$$\\det(A) = (2)(-2) - (1)(3) = -4 - 3 = -7$$

Since $\\det(A) \\neq 0$, $A$ is invertible.

$$A^{-1} = \\frac{1}{-7}\\begin{bmatrix} -2 & -1 \\\\ -3 & 2 \\end{bmatrix} = \\begin{bmatrix} \\frac{2}{7} & \\frac{1}{7} \\\\ \\frac{3}{7} & -\\frac{2}{7} \\end{bmatrix}$$

**Step 3: Solve $X = A^{-1}B$**

$$X = \\begin{bmatrix} \\frac{2}{7} & \\frac{1}{7} \\\\ \\frac{3}{7} & -\\frac{2}{7} \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$$

$$X = \\begin{bmatrix} \\frac{10}{7} + \\frac{4}{7} \\\\ \\frac{15}{7} - \\frac{8}{7} \\end{bmatrix} = \\begin{bmatrix} \\frac{14}{7} \\\\ \\frac{7}{7} \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$$

**Answer:** $x = 2$, $y = 1$

**Verification:**
- $2(2) + 1 = 5$ ✓
- $3(2) - 2(1) = 6 - 2 = 4$ ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', matricesTopic.title);

  // Create flashcards for matrices topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: matricesTopic.id,
        front: 'What must be true about two matrices $A$ and $B$ for you to add them together?',
        back: 'They must have the same dimensions (same number of rows and same number of columns).'
      },
      {
        topicId: matricesTopic.id,
        front: 'For matrix multiplication $AB$, what must be true about the dimensions?',
        back: 'The number of columns in $A$ must equal the number of rows in $B$. If $A$ is $m \\times n$ and $B$ is $n \\times p$, then $AB$ is $m \\times p$.'
      },
      {
        topicId: matricesTopic.id,
        front: 'What is the determinant of a 2×2 matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$?',
        back: '$\\det(A) = ad - bc$'
      },
      {
        topicId: matricesTopic.id,
        front: 'What is the formula for the inverse of a 2×2 matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$?',
        back: '$A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$ (provided $ad - bc \\neq 0$)'
      },
      {
        topicId: matricesTopic.id,
        front: 'Is matrix multiplication commutative? That is, does $AB = BA$?',
        back: 'No, matrix multiplication is NOT commutative. In general, $AB \\neq BA$. The order matters!'
      },
      {
        topicId: matricesTopic.id,
        front: 'What is the identity matrix $I_2$ for 2×2 matrices?',
        back: '$I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$. For any 2×2 matrix $A$, $AI_2 = I_2A = A$.'
      },
      {
        topicId: matricesTopic.id,
        front: 'How do you solve a matrix equation $AX = B$ for $X$?',
        back: 'Multiply both sides by $A^{-1}$ (if it exists): $X = A^{-1}B$. This requires that $\\det(A) \\neq 0$.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', matricesTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Functions Involving Parameters, Vectors, and Matrices (Part 2)!');
  console.log('   Topics: 2');
  console.log('   Examples: 6');
  console.log('   Flashcards: 14');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
