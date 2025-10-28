import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 8 Math content...')

  const grade8 = await prisma.course.findUnique({
    where: { slug: 'grade-8-math' }
  })

  if (!grade8) {
    throw new Error('Grade 8 Math course not found')
  }

  // Category 1: Exponents and Scientific Notation
  const exponentsScientific = await prisma.category.upsert({
    where: { slug: 'grade8-exponents-scientific' },
    update: {},
    create: {
      slug: 'grade8-exponents-scientific',
      name: 'Exponents and Scientific Notation',
      order: 1,
      courseId: grade8.id
    }
  })

  // Topic 1: Laws of Exponents
  const lawsExponents = await prisma.topic.upsert({
    where: { slug: 'laws-of-exponents-grade8' },
    update: {},
    create: {
      slug: 'laws-of-exponents-grade8',
      title: 'Laws of Exponents',
      description: 'Learn the rules for multiplying, dividing, and raising powers to powers',
      order: 1,
      categoryId: exponentsScientific.id,
      isPremium: false,
      textContent: `
# Laws of Exponents

## Product Rule
When multiplying powers with the same base, add exponents:
$$a^m \\times a^n = a^{m+n}$$

**Example:** $x^3 \\times x^4 = x^{3+4} = x^7$

## Quotient Rule
When dividing powers with the same base, subtract exponents:
$$\\frac{a^m}{a^n} = a^{m-n}$$

**Example:** $\\frac{x^7}{x^3} = x^{7-3} = x^4$

## Power Rule
When raising a power to a power, multiply exponents:
$$(a^m)^n = a^{mn}$$

**Example:** $(x^3)^4 = x^{3 \\times 4} = x^{12}$

## Zero Exponent
Any non-zero number to the zero power equals 1:
$$a^0 = 1 \\quad (a \\neq 0)$$

**Example:** $5^0 = 1$

## Negative Exponent
A negative exponent means reciprocal:
$$a^{-n} = \\frac{1}{a^n}$$

**Example:** $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: lawsExponents.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Simplify: $x^5 \\times x^3$',
        solution: `
**Solution:**

Use the product rule (add exponents):
$$x^5 \\times x^3 = x^{5+3} = x^8$$

**Answer:** $x^8$
`
      },
      {
        topicId: lawsExponents.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Simplify: $\\frac{(x^4)^3}{x^7}$',
        solution: `
**Solution:**

Step 1: Power rule in numerator
$$(x^4)^3 = x^{4 \\times 3} = x^{12}$$

Step 2: Quotient rule
$$\\frac{x^{12}}{x^7} = x^{12-7} = x^5$$

**Answer:** $x^5$
`
      },
      {
        topicId: lawsExponents.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Simplify: $\\frac{(2x^3)^4}{4x^5}$',
        solution: `
**Solution:**

Step 1: Apply power to each factor in numerator
$$(2x^3)^4 = 2^4 \\times (x^3)^4 = 16x^{12}$$

Step 2: Divide
$$\\frac{16x^{12}}{4x^5} = \\frac{16}{4} \\times \\frac{x^{12}}{x^5} = 4x^7$$

**Answer:** $4x^7$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: lawsExponents.id,
        front: 'What is the product rule for exponents?',
        back: 'When multiplying same bases, add exponents: aᵐ × aⁿ = aᵐ⁺ⁿ'
      },
      {
        topicId: lawsExponents.id,
        front: 'What does a negative exponent mean?',
        back: 'It means reciprocal: a⁻ⁿ = 1/aⁿ'
      },
      {
        topicId: lawsExponents.id,
        front: 'What is the power rule for exponents?',
        back: 'When raising a power to a power, multiply exponents: (aᵐ)ⁿ = aᵐⁿ'
      }
    ]
  })

  console.log('✓ Created topic: Laws of Exponents (3 examples, 3 flashcards)')

  // Topic 2: Scientific Notation
  const scientificNotation = await prisma.topic.upsert({
    where: { slug: 'scientific-notation-grade8' },
    update: {},
    create: {
      slug: 'scientific-notation-grade8',
      title: 'Scientific Notation',
      description: 'Write very large and very small numbers in scientific notation',
      order: 2,
      categoryId: exponentsScientific.id,
      isPremium: false,
      textContent: `
# Scientific Notation

## What is Scientific Notation?

A way to write very large or very small numbers:
$$a \\times 10^n$$

where $1 \\leq |a| < 10$ and $n$ is an integer

## Large Numbers

**Example:** $5,600,000 = 5.6 \\times 10^6$

Move decimal left → positive exponent

## Small Numbers

**Example:** $0.0000034 = 3.4 \\times 10^{-6}$

Move decimal right → negative exponent

## Converting to Standard Form

**From scientific notation:**
- Positive exponent → move decimal right
- Negative exponent → move decimal left

**Examples:**
- $4.2 \\times 10^3 = 4,200$
- $7.8 \\times 10^{-4} = 0.00078$

## Operations

### Multiplying
Multiply the numbers, add the exponents:
$$(3 \\times 10^4) \\times (2 \\times 10^5) = 6 \\times 10^9$$

### Dividing
Divide the numbers, subtract the exponents:
$$\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^4$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: scientificNotation.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Write in scientific notation: 47,000',
        solution: `
**Solution:**

Move decimal point 4 places to the left:
$$47,000 = 4.7 \\times 10^4$$

(Positive exponent because the original number is large)

**Answer:** $4.7 \\times 10^4$
`
      },
      {
        topicId: scientificNotation.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Write in standard form: $3.2 \\times 10^{-5}$',
        solution: `
**Solution:**

Negative exponent means move decimal 5 places to the left:
$$3.2 \\times 10^{-5} = 0.000032$$

**Answer:** $0.000032$
`
      },
      {
        topicId: scientificNotation.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Calculate: $(6 \\times 10^8) \\times (4 \\times 10^{-3})$',
        solution: `
**Solution:**

Multiply the numbers and add the exponents:
$$(6 \\times 4) \\times 10^{8+(-3)}$$
$$= 24 \\times 10^5$$
$$= 2.4 \\times 10^6$$

(Adjust to proper scientific notation)

**Answer:** $2.4 \\times 10^6$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: scientificNotation.id,
        front: 'What is the form of scientific notation?',
        back: 'a × 10ⁿ where 1 ≤ |a| < 10 and n is an integer'
      },
      {
        topicId: scientificNotation.id,
        front: 'When converting to scientific notation, when is the exponent positive?',
        back: 'When the original number is greater than or equal to 10 (move decimal left)'
      },
      {
        topicId: scientificNotation.id,
        front: 'How do you multiply numbers in scientific notation?',
        back: 'Multiply the coefficients and add the exponents'
      }
    ]
  })

  console.log('✓ Created topic: Scientific Notation (3 examples, 3 flashcards)')

  // Category 2: Linear Equations and Functions
  const linearEquations = await prisma.category.upsert({
    where: { slug: 'grade8-linear-equations' },
    update: {},
    create: {
      slug: 'grade8-linear-equations',
      name: 'Linear Equations and Functions',
      order: 2,
      courseId: grade8.id
    }
  })

  // Topic 3: Solving Two-Step Equations
  const twoStepEquations = await prisma.topic.upsert({
    where: { slug: 'two-step-equations-grade8' },
    update: {},
    create: {
      slug: 'two-step-equations-grade8',
      title: 'Solving Two-Step Equations',
      description: 'Learn to solve equations that require two operations',
      order: 1,
      categoryId: linearEquations.id,
      isPremium: false,
      textContent: `
# Solving Two-Step Equations

## What is a Two-Step Equation?

An equation that requires two operations to solve:
$$3x + 5 = 17$$

## Steps to Solve

### 1. Undo Addition/Subtraction First
Move constants to one side

### 2. Undo Multiplication/Division Second
Isolate the variable

**Example:**
$$3x + 5 = 17$$

Step 1: Subtract 5 from both sides
$$3x = 12$$

Step 2: Divide both sides by 3
$$x = 4$$

## Check Your Answer

Substitute back into the original equation:
$$3(4) + 5 = 12 + 5 = 17$$ ✓

## Working with Negatives

**Example:** $-2x - 6 = 10$

Step 1: Add 6 to both sides
$$-2x = 16$$

Step 2: Divide by -2
$$x = -8$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: twoStepEquations.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Solve: $2x + 7 = 15$',
        solution: `
**Solution:**

Step 1: Subtract 7 from both sides
$$2x = 8$$

Step 2: Divide both sides by 2
$$x = 4$$

Check: $2(4) + 7 = 8 + 7 = 15$ ✓

**Answer:** $x = 4$
`
      },
      {
        topicId: twoStepEquations.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Solve: $\\frac{x}{4} - 3 = 5$',
        solution: `
**Solution:**

Step 1: Add 3 to both sides
$$\\frac{x}{4} = 8$$

Step 2: Multiply both sides by 4
$$x = 32$$

Check: $\\frac{32}{4} - 3 = 8 - 3 = 5$ ✓

**Answer:** $x = 32$
`
      },
      {
        topicId: twoStepEquations.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A taxi charges $\\$3$ plus $\\$0.50$ per mile. If the total fare was $\\$12$, how many miles was the trip?',
        solution: `
**Solution:**

Let $m$ = number of miles

Equation: $3 + 0.50m = 12$

Step 1: Subtract 3 from both sides
$$0.50m = 9$$

Step 2: Divide by 0.50
$$m = 18$$

**Answer:** 18 miles
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: twoStepEquations.id,
        front: 'What is a two-step equation?',
        back: 'An equation that requires two operations to solve (like 3x + 5 = 17)'
      },
      {
        topicId: twoStepEquations.id,
        front: 'What is the first step when solving 2x + 7 = 15?',
        back: 'Undo addition/subtraction first (subtract 7 from both sides)'
      },
      {
        topicId: twoStepEquations.id,
        front: 'How do you check if your solution is correct?',
        back: 'Substitute the value back into the original equation to verify both sides are equal'
      }
    ]
  })

  console.log('✓ Created topic: Solving Two-Step Equations (3 examples, 3 flashcards)')

  // Topic 4: Introduction to Functions
  const introFunctions = await prisma.topic.upsert({
    where: { slug: 'introduction-to-functions-grade8' },
    update: {},
    create: {
      slug: 'introduction-to-functions-grade8',
      title: 'Introduction to Functions',
      description: 'Understand what functions are and how to represent them',
      order: 2,
      categoryId: linearEquations.id,
      isPremium: false,
      textContent: `
# Introduction to Functions

## What is a Function?

A **function** is a relationship where each input has exactly one output.

**Example:** $y = 2x + 3$

For each value of $x$, there's exactly one value of $y$.

## Function Notation

$$f(x) = 2x + 3$$

Read as: "f of x equals 2x plus 3"

**Example:** Find $f(4)$
$$f(4) = 2(4) + 3 = 11$$

## Four Ways to Represent Functions

### 1. Equation
$f(x) = 2x + 1$

### 2. Table
| x | y |
|---|---|
| 0 | 1 |
| 1 | 3 |
| 2 | 5 |

### 3. Graph
A line or curve on a coordinate plane

### 4. Words
"The output is one more than twice the input"

## Is It a Function?

**Vertical Line Test:** If a vertical line touches the graph at more than one point, it's NOT a function.
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: introFunctions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'If $f(x) = 3x - 2$, find $f(5)$.',
        solution: `
**Solution:**

Substitute $x = 5$ into the function:
$$f(5) = 3(5) - 2$$
$$f(5) = 15 - 2$$
$$f(5) = 13$$

**Answer:** $f(5) = 13$
`
      },
      {
        topicId: introFunctions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'If $g(x) = x^2 + 4$, find $g(-3)$.',
        solution: `
**Solution:**

Substitute $x = -3$:
$$g(-3) = (-3)^2 + 4$$
$$g(-3) = 9 + 4$$
$$g(-3) = 13$$

**Answer:** $g(-3) = 13$
`
      },
      {
        topicId: introFunctions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A function is defined by $h(x) = 2x + 5$. For what value of $x$ is $h(x) = 17$?',
        solution: `
**Solution:**

Set the function equal to 17:
$$2x + 5 = 17$$

Solve:
$$2x = 12$$
$$x = 6$$

Check: $h(6) = 2(6) + 5 = 17$ ✓

**Answer:** $x = 6$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: introFunctions.id,
        front: 'What is a function?',
        back: 'A relationship where each input has exactly one output'
      },
      {
        topicId: introFunctions.id,
        front: 'What does f(5) mean?',
        back: 'The output of function f when the input is 5'
      },
      {
        topicId: introFunctions.id,
        front: 'What is the vertical line test?',
        back: 'If a vertical line touches a graph at more than one point, it is NOT a function'
      }
    ]
  })

  console.log('✓ Created topic: Introduction to Functions (3 examples, 3 flashcards)')

  // Category 3: Geometry
  const geometry = await prisma.category.upsert({
    where: { slug: 'grade8-geometry' },
    update: {},
    create: {
      slug: 'grade8-geometry',
      name: 'Geometry',
      order: 3,
      courseId: grade8.id
    }
  })

  // Topic 5: Pythagorean Theorem
  const pythagorean = await prisma.topic.upsert({
    where: { slug: 'pythagorean-theorem-grade8' },
    update: {},
    create: {
      slug: 'pythagorean-theorem-grade8',
      title: 'Pythagorean Theorem',
      description: 'Use the Pythagorean Theorem to find missing sides of right triangles',
      order: 1,
      categoryId: geometry.id,
      isPremium: false,
      textContent: `
# Pythagorean Theorem

## The Formula

For a right triangle with legs $a$ and $b$ and hypotenuse $c$:
$$a^2 + b^2 = c^2$$

**Remember:**
- The hypotenuse is the longest side
- The hypotenuse is opposite the right angle
- The legs form the right angle

## Finding the Hypotenuse

If you know both legs:
$$c = \\sqrt{a^2 + b^2}$$

**Example:** Legs are 3 and 4
$$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

## Finding a Leg

If you know the hypotenuse and one leg:
$$a = \\sqrt{c^2 - b^2}$$

**Example:** Hypotenuse is 13, one leg is 5
$$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$$

## Real-World Applications

- Finding distances
- Construction and building
- Navigation
- Screen sizes (diagonal measurement)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: pythagorean.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A right triangle has legs of 6 cm and 8 cm. Find the length of the hypotenuse.',
        solution: `
**Solution:**

Use $a^2 + b^2 = c^2$:
$$6^2 + 8^2 = c^2$$
$$36 + 64 = c^2$$
$$100 = c^2$$
$$c = 10$$

**Answer:** 10 cm
`
      },
      {
        topicId: pythagorean.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A right triangle has a hypotenuse of 17 inches and one leg of 8 inches. Find the other leg.',
        solution: `
**Solution:**

Use $a^2 + b^2 = c^2$:
$$a^2 + 8^2 = 17^2$$
$$a^2 + 64 = 289$$
$$a^2 = 225$$
$$a = 15$$

**Answer:** 15 inches
`
      },
      {
        topicId: pythagorean.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A ladder is leaning against a wall. The base of the ladder is 7 feet from the wall, and the top of the ladder reaches 24 feet up the wall. How long is the ladder?',
        solution: `
**Solution:**

This forms a right triangle:
- One leg (base): 7 feet
- Other leg (wall): 24 feet
- Hypotenuse (ladder): ?

$$c^2 = 7^2 + 24^2$$
$$c^2 = 49 + 576$$
$$c^2 = 625$$
$$c = 25$$

**Answer:** The ladder is 25 feet long
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: pythagorean.id,
        front: 'What is the Pythagorean Theorem?',
        back: 'For a right triangle: a² + b² = c² (where c is the hypotenuse)'
      },
      {
        topicId: pythagorean.id,
        front: 'What is the hypotenuse?',
        back: 'The longest side of a right triangle, opposite the right angle'
      },
      {
        topicId: pythagorean.id,
        front: 'How do you find the hypotenuse if you know both legs?',
        back: 'c = √(a² + b²)'
      }
    ]
  })

  console.log('✓ Created topic: Pythagorean Theorem (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created Grade 8 Math content!')
  console.log('   New categories: 3 (Exponents/Scientific Notation, Linear Equations, Geometry)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
