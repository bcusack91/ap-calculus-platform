import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Systems and Sequences...')

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  })

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found')
  }

  // Find or create Function Fundamentals category
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

  // Topic 1: Systems of Equations
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'systems-of-equations' },
    update: {},
    create: {
      title: 'Systems of Equations',
      slug: 'systems-of-equations',
      description: 'Solving systems of linear and nonlinear equations using multiple methods',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Systems of Equations

## What is a System of Equations?

A **system of equations** is a set of two or more equations with the same variables. A **solution** is a set of values that satisfies all equations simultaneously.

### Types of Systems

**Linear System** (2 equations, 2 unknowns):
$$\\begin{cases}
ax + by = c \\\\
dx + ey = f
\\end{cases}$$

**Nonlinear System** (may include quadratics, circles, etc.):
$$\\begin{cases}
y = x^2 \\\\
y = 2x + 3
\\end{cases}$$

## Number of Solutions

A system can have:
- **One solution**: Lines/curves intersect at exactly one point
- **No solution**: Lines/curves are parallel (never intersect)
- **Infinitely many solutions**: Lines/curves coincide (same graph)

## Method 1: Substitution

**Steps:**
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable
4. Back-substitute to find the other variable

**Best for:** When one equation is already solved for a variable, or easily can be

### Example
$$\\begin{cases}
y = 2x - 1 \\\\
3x + y = 9
\\end{cases}$$

Substitute $y = 2x - 1$ into second equation:
$$3x + (2x - 1) = 9$$
$$5x - 1 = 9$$
$$5x = 10$$
$$x = 2$$

Then: $y = 2(2) - 1 = 3$

**Solution:** $(2, 3)$

## Method 2: Elimination (Addition)

**Steps:**
1. Multiply equations (if needed) to make coefficients of one variable opposites
2. Add equations to eliminate that variable
3. Solve for the remaining variable
4. Substitute back to find the other variable

**Best for:** When coefficients are easy to manipulate

### Example
$$\\begin{cases}
2x + 3y = 8 \\\\
x - 3y = 1
\\end{cases}$$

Add the equations (the $3y$ terms cancel):
$$3x = 9$$
$$x = 3$$

Substitute into second equation:
$$3 - 3y = 1$$
$$-3y = -2$$
$$y = \\frac{2}{3}$$

**Solution:** $(3, \\frac{2}{3})$

## Method 3: Graphing

**Steps:**
1. Graph both equations
2. Find intersection point(s)
3. Verify by substitution

**Best for:** Visual understanding, approximate solutions

## Systems with 3 Variables

For three variables $(x, y, z)$, you need three equations:
$$\\begin{cases}
ax + by + cz = d \\\\
ex + fy + gz = h \\\\
ix + jy + kz = l
\\end{cases}$$

**Strategy:** Use elimination to reduce to 2 variables, then solve

## Nonlinear Systems

For systems involving quadratics, circles, or other curves:
- Substitution is usually best
- May have 0, 1, 2, or more solutions
- Graph to visualize

### Example: Line and Parabola
$$\\begin{cases}
y = x^2 - 4 \\\\
y = 2x - 1
\\end{cases}$$

Substitute: $x^2 - 4 = 2x - 1$
$$x^2 - 2x - 3 = 0$$
$$(x - 3)(x + 1) = 0$$
$$x = 3 \\text{ or } x = -1$$

Solutions: $(3, 5)$ and $(-1, -3)$

## Applications

- **Mixture problems**: Combining solutions with different concentrations
- **Distance/rate/time**: Two objects moving
- **Business**: Supply and demand, break-even analysis
- **Geometry**: Finding intersection points
`,
      exampleProblems: {
        create: [
          {
            question: 'Solve the system using substitution: $\\begin{cases} x + 2y = 7 \\\\ 3x - y = 5 \\end{cases}$',
            solution: `**Solve using substitution:**

Step 1: Solve the first equation for $x$:
$$x + 2y = 7$$
$$x = 7 - 2y$$

Step 2: Substitute into the second equation:
$$3(7 - 2y) - y = 5$$
$$21 - 6y - y = 5$$
$$21 - 7y = 5$$
$$-7y = -16$$
$$y = \\frac{16}{7}$$

Step 3: Find $x$:
$$x = 7 - 2\\left(\\frac{16}{7}\\right) = 7 - \\frac{32}{7} = \\frac{49 - 32}{7} = \\frac{17}{7}$$

Step 4: Verify in both equations:
$$\\frac{17}{7} + 2\\left(\\frac{16}{7}\\right) = \\frac{17 + 32}{7} = \\frac{49}{7} = 7$$ ✓
$$3\\left(\\frac{17}{7}\\right) - \\frac{16}{7} = \\frac{51 - 16}{7} = \\frac{35}{7} = 5$$ ✓

**Answer:** $\\left(\\frac{17}{7}, \\frac{16}{7}\\right)$`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Solve using elimination: $\\begin{cases} 2x + 5y = 13 \\\\ 3x - 2y = -4 \\end{cases}$',
            solution: `**Solve using elimination:**

Step 1: Make coefficients of one variable opposites.
Multiply first equation by 2 and second by 5:
$$\\begin{cases}
4x + 10y = 26 \\\\
15x - 10y = -20
\\end{cases}$$

Step 2: Add to eliminate $y$:
$$19x = 6$$
$$x = \\frac{6}{19}$$

Step 3: Substitute into first original equation:
$$2\\left(\\frac{6}{19}\\right) + 5y = 13$$
$$\\frac{12}{19} + 5y = 13$$
$$5y = 13 - \\frac{12}{19} = \\frac{247 - 12}{19} = \\frac{235}{19}$$
$$y = \\frac{235}{95} = \\frac{47}{19}$$

Step 4: Verify:
$$2\\left(\\frac{6}{19}\\right) + 5\\left(\\frac{47}{19}\\right) = \\frac{12 + 235}{19} = \\frac{247}{19} = 13$$ ✓

**Answer:** $\\left(\\frac{6}{19}, \\frac{47}{19}\\right)$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Solve the nonlinear system: $\\begin{cases} x^2 + y^2 = 25 \\\\ y = x + 1 \\end{cases}$',
            solution: `**Solve the system (circle and line):**

Step 1: Substitute $y = x + 1$ into the first equation:
$$x^2 + (x + 1)^2 = 25$$
$$x^2 + x^2 + 2x + 1 = 25$$
$$2x^2 + 2x + 1 = 25$$
$$2x^2 + 2x - 24 = 0$$
$$x^2 + x - 12 = 0$$

Step 2: Factor:
$$(x + 4)(x - 3) = 0$$
$$x = -4 \\text{ or } x = 3$$

Step 3: Find corresponding $y$ values:
- If $x = -4$: $y = -4 + 1 = -3$
- If $x = 3$: $y = 3 + 1 = 4$

Step 4: Verify both solutions:

For $(-4, -3)$:
$$(-4)^2 + (-3)^2 = 16 + 9 = 25$$ ✓
$$-3 = -4 + 1$$ ✓

For $(3, 4)$:
$$3^2 + 4^2 = 9 + 16 = 25$$ ✓
$$4 = 3 + 1$$ ✓

**Answer:** Two solutions: $(-4, -3)$ and $(3, 4)$

**Interpretation:** The line intersects the circle at two points.`,
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
      front: 'What is a solution to a system of equations?',
      back: 'A set of values that satisfies all equations in the system simultaneously'
    },
    {
      topicId: topic1.id,
      front: 'What are the three possible numbers of solutions for a system?',
      back: 'One solution (intersect at one point), no solution (parallel), or infinitely many solutions (same line/curve)'
    },
    {
      topicId: topic1.id,
      front: 'When is substitution the best method?',
      back: 'When one equation is already solved for a variable (or easily can be)'
    },
    {
      topicId: topic1.id,
      front: 'When is elimination the best method?',
      back: 'When coefficients are easy to manipulate to make opposites'
    },
    {
      topicId: topic1.id,
      front: 'How many solutions can a system of a line and parabola have?',
      back: '0, 1, or 2 solutions (line can miss, be tangent to, or cross through the parabola)'
    },
    {
      topicId: topic1.id,
      front: 'How many equations do you need to solve for 3 variables?',
      back: 'At least 3 independent equations'
    },
    {
      topicId: topic1.id,
      front: 'What does it mean geometrically if a linear system has no solution?',
      back: 'The lines are parallel and never intersect'
    },
    {
      topicId: topic1.id,
      front: 'What does it mean geometrically if a linear system has infinitely many solutions?',
      back: 'The equations represent the same line (they coincide)'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Sequences (Arithmetic and Geometric)
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'sequences-arithmetic-geometric' },
    update: {},
    create: {
      title: 'Arithmetic and Geometric Sequences',
      slug: 'sequences-arithmetic-geometric',
      description: 'Understanding patterns in sequences and finding explicit and recursive formulas',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: functionsCategory.id,
      textContent: `# Arithmetic and Geometric Sequences

## What is a Sequence?

A **sequence** is an ordered list of numbers. Each number in the sequence is called a **term**.

**Notation:** $a_1, a_2, a_3, a_4, \\ldots, a_n, \\ldots$

- $a_1$ is the first term
- $a_n$ is the $n$th term
- $n$ is the term number (position)

## Arithmetic Sequences

An **arithmetic sequence** has a constant difference between consecutive terms.

**Common difference:** $d = a_{n+1} - a_n$

### Formulas

**Explicit (Direct) Formula:**
$$a_n = a_1 + (n - 1)d$$

where:
- $a_n$ = $n$th term
- $a_1$ = first term
- $d$ = common difference
- $n$ = term number

**Recursive Formula:**
$$a_n = a_{n-1} + d, \\quad a_1 = \\text{(given)}$$

### Example: $3, 7, 11, 15, 19, \\ldots$
- First term: $a_1 = 3$
- Common difference: $d = 4$
- Explicit: $a_n = 3 + (n-1)(4) = 3 + 4n - 4 = 4n - 1$
- Recursive: $a_n = a_{n-1} + 4, \\quad a_1 = 3$
- 10th term: $a_{10} = 4(10) - 1 = 39$

## Geometric Sequences

A **geometric sequence** has a constant ratio between consecutive terms.

**Common ratio:** $r = \\frac{a_{n+1}}{a_n}$

### Formulas

**Explicit (Direct) Formula:**
$$a_n = a_1 \\cdot r^{n-1}$$

where:
- $a_n$ = $n$th term
- $a_1$ = first term  
- $r$ = common ratio
- $n$ = term number

**Recursive Formula:**
$$a_n = a_{n-1} \\cdot r, \\quad a_1 = \\text{(given)}$$

### Example: $2, 6, 18, 54, 162, \\ldots$
- First term: $a_1 = 2$
- Common ratio: $r = 3$
- Explicit: $a_n = 2 \\cdot 3^{n-1}$
- Recursive: $a_n = 3a_{n-1}, \\quad a_1 = 2$
- 6th term: $a_6 = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$

## Identifying Sequence Type

**Arithmetic:** Check if differences are constant
- $7, 11, 15, 19, \\ldots$ → differences: $4, 4, 4$ ✓

**Geometric:** Check if ratios are constant
- $3, 12, 48, 192, \\ldots$ → ratios: $4, 4, 4$ ✓

**Neither:** If differences and ratios both vary
- $1, 4, 9, 16, \\ldots$ (perfect squares) → neither

## Sum of Arithmetic Sequence (Finite)

Sum of first $n$ terms:
$$S_n = \\frac{n(a_1 + a_n)}{2}$$

or

$$S_n = \\frac{n[2a_1 + (n-1)d]}{2}$$

### Example
Sum of first 10 terms of $3, 7, 11, 15, \\ldots$:
$$S_{10} = \\frac{10(3 + 39)}{2} = \\frac{10(42)}{2} = 210$$

## Sum of Geometric Sequence (Finite)

Sum of first $n$ terms:
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}, \\quad r \\neq 1$$

### Example
Sum of first 5 terms of $2, 6, 18, 54, \\ldots$:
$$S_5 = 2 \\cdot \\frac{1 - 3^5}{1 - 3} = 2 \\cdot \\frac{1 - 243}{-2} = 2 \\cdot \\frac{-242}{-2} = 242$$

## Applications

- **Arithmetic:** Linear growth, evenly spaced values
  - Saving $50 per month
  - Theater seating rows

- **Geometric:** Exponential growth/decay
  - Population growth
  - Radioactive decay
  - Compound interest
`,
      exampleProblems: {
        create: [
          {
            question: 'For the arithmetic sequence $5, 9, 13, 17, \\ldots$, find the 20th term and write both explicit and recursive formulas.',
            solution: `**Identify the sequence:**
- First term: $a_1 = 5$
- Common difference: $d = 9 - 5 = 4$

**Explicit formula:**
$$a_n = a_1 + (n-1)d$$
$$a_n = 5 + (n-1)(4)$$
$$a_n = 5 + 4n - 4$$
$$a_n = 4n + 1$$

**Recursive formula:**
$$a_n = a_{n-1} + 4, \\quad a_1 = 5$$

**Find the 20th term:**
$$a_{20} = 4(20) + 1 = 80 + 1 = 81$$

**Verify:** We can check by adding $d$ nineteen times to $a_1$:
$$5 + 19(4) = 5 + 76 = 81$$ ✓

**Answers:**
- Explicit: $a_n = 4n + 1$
- Recursive: $a_n = a_{n-1} + 4, a_1 = 5$
- 20th term: $81$`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A geometric sequence has first term $a_1 = 3$ and common ratio $r = 2$. Find the 8th term and the sum of the first 8 terms.',
            solution: `**Given information:**
- $a_1 = 3$
- $r = 2$

**Find the 8th term using explicit formula:**
$$a_n = a_1 \\cdot r^{n-1}$$
$$a_8 = 3 \\cdot 2^{8-1}$$
$$a_8 = 3 \\cdot 2^7$$
$$a_8 = 3 \\cdot 128 = 384$$

**Find the sum of first 8 terms:**
$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$
$$S_8 = 3 \\cdot \\frac{1 - 2^8}{1 - 2}$$
$$S_8 = 3 \\cdot \\frac{1 - 256}{-1}$$
$$S_8 = 3 \\cdot \\frac{-255}{-1}$$
$$S_8 = 3 \\cdot 255 = 765$$

**Verify the sequence:** $3, 6, 12, 24, 48, 96, 192, 384$
Sum: $3 + 6 + 12 + 24 + 48 + 96 + 192 + 384 = 765$ ✓

**Answers:**
- 8th term: $384$
- Sum of first 8 terms: $765$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The 3rd term of an arithmetic sequence is 14 and the 7th term is 30. Find the first term, common difference, and the explicit formula.',
            solution: `**Set up equations using $a_n = a_1 + (n-1)d$:**

For the 3rd term:
$$a_3 = a_1 + 2d = 14$$

For the 7th term:
$$a_7 = a_1 + 6d = 30$$

**Solve the system by elimination:**

Subtract first equation from second:
$$(a_1 + 6d) - (a_1 + 2d) = 30 - 14$$
$$4d = 16$$
$$d = 4$$

**Find $a_1$:** Substitute $d = 4$ into first equation:
$$a_1 + 2(4) = 14$$
$$a_1 + 8 = 14$$
$$a_1 = 6$$

**Write the explicit formula:**
$$a_n = a_1 + (n-1)d$$
$$a_n = 6 + (n-1)(4)$$
$$a_n = 6 + 4n - 4$$
$$a_n = 4n + 2$$

**Verify:**
- $a_3 = 4(3) + 2 = 14$ ✓
- $a_7 = 4(7) + 2 = 30$ ✓

**Answers:**
- First term: $a_1 = 6$
- Common difference: $d = 4$
- Explicit formula: $a_n = 4n + 2$`,
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
      front: 'What is an arithmetic sequence?',
      back: 'A sequence with a constant difference between consecutive terms'
    },
    {
      topicId: topic2.id,
      front: 'What is the explicit formula for an arithmetic sequence?',
      back: '$a_n = a_1 + (n-1)d$ where $a_1$ is first term and $d$ is common difference'
    },
    {
      topicId: topic2.id,
      front: 'What is a geometric sequence?',
      back: 'A sequence with a constant ratio between consecutive terms'
    },
    {
      topicId: topic2.id,
      front: 'What is the explicit formula for a geometric sequence?',
      back: '$a_n = a_1 \\cdot r^{n-1}$ where $a_1$ is first term and $r$ is common ratio'
    },
    {
      topicId: topic2.id,
      front: 'How do you find the common difference $d$ in an arithmetic sequence?',
      back: 'Subtract any term from the next term: $d = a_{n+1} - a_n$'
    },
    {
      topicId: topic2.id,
      front: 'How do you find the common ratio $r$ in a geometric sequence?',
      back: 'Divide any term by the previous term: $r = \\frac{a_{n+1}}{a_n}$'
    },
    {
      topicId: topic2.id,
      front: 'What is the sum formula for the first $n$ terms of an arithmetic sequence?',
      back: '$S_n = \\frac{n(a_1 + a_n)}{2}$ or $S_n = \\frac{n[2a_1 + (n-1)d]}{2}$'
    },
    {
      topicId: topic2.id,
      front: 'What is the sum formula for the first $n$ terms of a geometric sequence?',
      back: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$ where $r \\neq 1$'
    },
    {
      topicId: topic2.id,
      front: 'What type of real-world situations are modeled by arithmetic sequences?',
      back: 'Linear growth situations: regular savings, evenly spaced rows, constant speed'
    },
    {
      topicId: topic2.id,
      front: 'What type of real-world situations are modeled by geometric sequences?',
      back: 'Exponential growth/decay: population growth, radioactive decay, compound interest'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Systems and Sequences!')
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
