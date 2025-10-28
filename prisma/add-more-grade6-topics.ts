import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding more Grade 6 Math topics...')

  const grade6 = await prisma.course.findUnique({
    where: { slug: 'grade-6-math' }
  })

  if (!grade6) {
    throw new Error('Grade 6 Math course not found')
  }

  // Category 3: Ratios and Rates
  const ratiosRates = await prisma.category.upsert({
    where: { slug: 'grade6-ratios-rates' },
    update: {},
    create: {
      slug: 'grade6-ratios-rates',
      name: 'Ratios and Rates',
      order: 3,
      courseId: grade6.id
    }
  })

  // Topic 1: Introduction to Ratios
  const introRatios = await prisma.topic.upsert({
    where: { slug: 'introduction-to-ratios' },
    update: {},
    create: {
      slug: 'introduction-to-ratios',
      title: 'Introduction to Ratios',
      description: 'Learn what ratios are and how to write them in different forms',
      order: 1,
      categoryId: ratiosRates.id,
      isPremium: false,
      textContent: `
# Introduction to Ratios

## What is a Ratio?

A **ratio** compares two quantities by division. It shows how much of one thing there is compared to another.

## Ways to Write Ratios

If there are 3 apples and 5 oranges, the ratio of apples to oranges can be written three ways:

1. **Using "to":** 3 to 5
2. **Using a colon:** 3:5
3. **As a fraction:** $\\frac{3}{5}$

## Simplifying Ratios

Like fractions, ratios should be written in simplest form.

**Example:** The ratio 6:8 simplifies to 3:4 (divide both by 2)

## Part-to-Part vs Part-to-Whole

- **Part-to-Part:** Compares one part to another part
  - Example: 3 boys to 5 girls → 3:5
  
- **Part-to-Whole:** Compares one part to the total
  - Example: 3 boys out of 8 total students → 3:8

## Equivalent Ratios

Ratios are equivalent if they represent the same comparison:
$$2:3 = 4:6 = 6:9 = 8:12$$

(Multiply or divide both parts by the same number)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: introRatios.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Write the ratio of stars to hearts in simplest form: ⭐⭐⭐⭐⭐⭐ ❤️❤️❤️',
        solution: `
**Solution:**

Count: 6 stars and 3 hearts

Ratio: $6:3$

Simplify by dividing both by 3:
$$6:3 = 2:1$$

**Answer:** The ratio is $2:1$ (or 2 to 1)
`
      },
      {
        topicId: introRatios.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A recipe calls for 2 cups of flour and 3 cups of sugar. If you want to make the recipe using 8 cups of flour, how much sugar do you need?',
        solution: `
**Solution:**

Original ratio: $2:3$ (flour to sugar)

Flour increased from 2 to 8 (multiplied by 4):
$$2 \\times 4 = 8$$

Sugar must also multiply by 4:
$$3 \\times 4 = 12$$

**Answer:** You need 12 cups of sugar
`
      },
      {
        topicId: introRatios.id,
        order: 3,
        difficulty: 'HARD',
        question: 'In a class of 24 students, the ratio of girls to boys is 5:3. How many girls and how many boys are in the class?',
        solution: `
**Solution:**

Ratio parts: $5 + 3 = 8$ total parts

Each part represents:
$$24 \\div 8 = 3 \\text{ students}$$

Girls: $5 \\times 3 = 15$ students
Boys: $3 \\times 3 = 9$ students

Check: $15 + 9 = 24$ ✓

**Answer:** 15 girls and 9 boys
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: introRatios.id,
        front: 'What is a ratio?',
        back: 'A comparison of two quantities by division'
      },
      {
        topicId: introRatios.id,
        front: 'What are the three ways to write a ratio?',
        back: 'Using "to" (3 to 5), using a colon (3:5), or as a fraction (3/5)'
      },
      {
        topicId: introRatios.id,
        front: 'What is the difference between part-to-part and part-to-whole ratios?',
        back: 'Part-to-part compares one part to another part; part-to-whole compares one part to the total'
      }
    ]
  })

  console.log('✓ Created topic: Introduction to Ratios (3 examples, 3 flashcards)')

  // Topic 2: Unit Rates
  const unitRates = await prisma.topic.upsert({
    where: { slug: 'unit-rates-grade6' },
    update: {},
    create: {
      slug: 'unit-rates-grade6',
      title: 'Unit Rates',
      description: 'Learn to find and use unit rates in real-world situations',
      order: 2,
      categoryId: ratiosRates.id,
      isPremium: false,
      textContent: `
# Unit Rates

## What is a Rate?

A **rate** is a ratio that compares two different units.

**Examples:**
- 60 miles in 2 hours
- $\\$15$ for 3 books
- 150 words in 5 minutes

## What is a Unit Rate?

A **unit rate** is a rate where the second quantity is 1 unit.

**Examples:**
- 30 miles per 1 hour (30 mph)
- $\\$5$ per 1 book
- 30 words per 1 minute

## Finding Unit Rates

Divide the first quantity by the second quantity:

$$\\text{Unit Rate} = \\frac{\\text{First Quantity}}{\\text{Second Quantity}}$$

**Example:** $\\$12$ for 4 pounds
$$\\frac{12}{4} = 3 \\text{ dollars per pound}$$

## Why Unit Rates Are Useful

Unit rates help us:
- Compare prices (which is cheaper?)
- Calculate speed
- Make predictions
- Plan and budget
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: unitRates.id,
        order: 1,
        difficulty: 'EASY',
        question: 'A car travels 150 miles in 3 hours. What is the unit rate (speed)?',
        solution: `
**Solution:**

Divide distance by time:
$$\\frac{150 \\text{ miles}}{3 \\text{ hours}} = 50 \\text{ miles per hour}$$

**Answer:** 50 miles per hour (or 50 mph)
`
      },
      {
        topicId: unitRates.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Store A sells 6 apples for $\\$4.50$. Store B sells 8 apples for $\\$5.60$. Which store has the better price per apple?',
        solution: `
**Solution:**

**Store A:**
$$\\frac{\\$4.50}{6} = \\$0.75 \\text{ per apple}$$

**Store B:**
$$\\frac{\\$5.60}{8} = \\$0.70 \\text{ per apple}$$

Compare: $\\$0.70 < \\$0.75$

**Answer:** Store B has the better price ($\\$0.70$ per apple)
`
      },
      {
        topicId: unitRates.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Jamie can type 240 words in 6 minutes. At this rate, how many words can Jamie type in 25 minutes?',
        solution: `
**Solution:**

Step 1: Find the unit rate
$$\\frac{240 \\text{ words}}{6 \\text{ minutes}} = 40 \\text{ words per minute}$$

Step 2: Multiply by 25 minutes
$$40 \\times 25 = 1,000 \\text{ words}$$

**Answer:** Jamie can type 1,000 words in 25 minutes
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: unitRates.id,
        front: 'What is a rate?',
        back: 'A ratio that compares two different units (like miles and hours)'
      },
      {
        topicId: unitRates.id,
        front: 'What is a unit rate?',
        back: 'A rate where the second quantity is 1 unit (like miles per 1 hour)'
      },
      {
        topicId: unitRates.id,
        front: 'How do you find a unit rate?',
        back: 'Divide the first quantity by the second quantity'
      }
    ]
  })

  console.log('✓ Created topic: Unit Rates (3 examples, 3 flashcards)')

  // Category 4: Integers
  const integers = await prisma.category.upsert({
    where: { slug: 'grade6-integers' },
    update: {},
    create: {
      slug: 'grade6-integers',
      name: 'Integers',
      order: 4,
      courseId: grade6.id
    }
  })

  // Topic 3: Understanding Integers
  const understandingIntegers = await prisma.topic.upsert({
    where: { slug: 'understanding-integers-grade6' },
    update: {},
    create: {
      slug: 'understanding-integers-grade6',
      title: 'Understanding Integers',
      description: 'Learn about positive and negative numbers and how to compare them',
      order: 1,
      categoryId: integers.id,
      isPremium: false,
      textContent: `
# Understanding Integers

## What are Integers?

**Integers** are whole numbers and their opposites, including zero:
$$..., -3, -2, -1, 0, 1, 2, 3, ...$$

- **Positive integers:** 1, 2, 3, 4, ...
- **Negative integers:** -1, -2, -3, -4, ...
- **Zero:** Neither positive nor negative

## The Number Line

Integers can be shown on a number line:

$$\\longleftarrow \\text{-5 -4 -3 -2 -1  0  1  2  3  4  5} \\longrightarrow$$

- Numbers increase as you move right
- Numbers decrease as you move left

## Comparing Integers

On a number line:
- Numbers to the **right** are **greater**
- Numbers to the **left** are **less**

**Examples:**
- $5 > -3$ (5 is to the right of -3)
- $-1 > -4$ (-1 is to the right of -4)
- $-2 < 0$ (-2 is to the left of 0)

## Absolute Value

The **absolute value** of a number is its distance from zero (always positive):

$$|-5| = 5 \\quad \\text{and} \\quad |5| = 5$$

Both -5 and 5 are 5 units from zero.

## Real-World Examples

- Temperature: $-10°$ (below zero)
- Elevation: $-50$ feet (below sea level)
- Money: $-\\$20$ (debt/owe money)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: understandingIntegers.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is greater: $-7$ or $-3$?',
        solution: `
**Solution:**

On a number line, -3 is to the right of -7:

$$\\text{-7 -6 -5 -4} \\boxed{-3} \\text{ -2 -1  0}$$

Numbers to the right are greater.

**Answer:** $-3$ is greater than $-7$ (written: $-3 > -7$)
`
      },
      {
        topicId: understandingIntegers.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Order from least to greatest: $-2, 5, -8, 0, 3, -1$',
        solution: `
**Solution:**

Think of the number line or compare:
- Most negative (furthest left): $-8$
- Then: $-2$
- Then: $-1$
- Then: $0$
- Then: $3$
- Most positive (furthest right): $5$

**Answer:** $-8, -2, -1, 0, 3, 5$
`
      },
      {
        topicId: understandingIntegers.id,
        order: 3,
        difficulty: 'HARD',
        question: 'The temperature at midnight was $-5°$C. By noon, it had risen 12 degrees. What was the temperature at noon?',
        solution: `
**Solution:**

Start at -5 on the number line.
Move right (increase) by 12:

$$-5 + 12 = 7$$

You can also think: 5 degrees to get to 0, then 7 more degrees.

**Answer:** The temperature at noon was $7°$C
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: understandingIntegers.id,
        front: 'What are integers?',
        back: 'Whole numbers and their opposites, including zero: ..., -3, -2, -1, 0, 1, 2, 3, ...'
      },
      {
        topicId: understandingIntegers.id,
        front: 'On a number line, which direction represents greater numbers?',
        back: 'Numbers to the right are greater; numbers to the left are less'
      },
      {
        topicId: understandingIntegers.id,
        front: 'What is absolute value?',
        back: 'The distance from zero on a number line (always positive or zero)'
      }
    ]
  })

  console.log('✓ Created topic: Understanding Integers (3 examples, 3 flashcards)')

  // Category 5: Geometry Basics
  const geometryBasics = await prisma.category.upsert({
    where: { slug: 'grade6-geometry-basics' },
    update: {},
    create: {
      slug: 'grade6-geometry-basics',
      name: 'Geometry Basics',
      order: 5,
      courseId: grade6.id
    }
  })

  // Topic 4: Perimeter and Area
  const perimeterArea = await prisma.topic.upsert({
    where: { slug: 'perimeter-and-area-grade6' },
    update: {},
    create: {
      slug: 'perimeter-and-area-grade6',
      title: 'Perimeter and Area',
      description: 'Learn to calculate perimeter and area of rectangles and other shapes',
      order: 1,
      categoryId: geometryBasics.id,
      isPremium: false,
      textContent: `
# Perimeter and Area

## Perimeter

**Perimeter** is the distance around a shape. Add all the side lengths.

### Rectangle Perimeter
$$P = 2l + 2w$$
or
$$P = 2(l + w)$$

where $l$ = length and $w$ = width

### Square Perimeter
$$P = 4s$$

where $s$ = side length

## Area

**Area** is the amount of space inside a shape (measured in square units).

### Rectangle Area
$$A = l \\times w$$

### Square Area
$$A = s^2$$

### Triangle Area
$$A = \\frac{1}{2}bh$$

where $b$ = base and $h$ = height

## Units

- Perimeter: linear units (cm, m, in, ft)
- Area: square units (cm², m², in², ft²)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: perimeterArea.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find the perimeter of a rectangle with length 8 cm and width 5 cm.',
        solution: `
**Solution:**

Use the formula: $P = 2(l + w)$

$$P = 2(8 + 5)$$
$$P = 2(13)$$
$$P = 26$$

**Answer:** 26 cm
`
      },
      {
        topicId: perimeterArea.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A rectangular garden is 12 feet long and 7 feet wide. What is its area?',
        solution: `
**Solution:**

Use the formula: $A = l \\times w$

$$A = 12 \\times 7$$
$$A = 84$$

**Answer:** 84 square feet (or 84 ft²)
`
      },
      {
        topicId: perimeterArea.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A rectangle has a perimeter of 40 inches and a length of 12 inches. What is its width? Then find the area.',
        solution: `
**Solution:**

**Find width:**
$$P = 2(l + w)$$
$$40 = 2(12 + w)$$
$$40 = 24 + 2w$$
$$16 = 2w$$
$$w = 8 \\text{ inches}$$

**Find area:**
$$A = l \\times w = 12 \\times 8 = 96$$

**Answer:** Width = 8 inches; Area = 96 in²
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: perimeterArea.id,
        front: 'What is perimeter?',
        back: 'The distance around a shape (add all side lengths)'
      },
      {
        topicId: perimeterArea.id,
        front: 'What is the formula for area of a rectangle?',
        back: 'A = length × width (or A = l × w)'
      },
      {
        topicId: perimeterArea.id,
        front: 'What are the units for area?',
        back: 'Square units (like cm², m², in², ft²)'
      }
    ]
  })

  console.log('✓ Created topic: Perimeter and Area (3 examples, 3 flashcards)')

  // Topic 5: Volume of Rectangular Prisms
  const volumePrisms = await prisma.topic.upsert({
    where: { slug: 'volume-rectangular-prisms-grade6' },
    update: {},
    create: {
      slug: 'volume-rectangular-prisms-grade6',
      title: 'Volume of Rectangular Prisms',
      description: 'Learn to calculate the volume of boxes and rectangular shapes',
      order: 2,
      categoryId: geometryBasics.id,
      isPremium: false,
      textContent: `
# Volume of Rectangular Prisms

## What is Volume?

**Volume** is the amount of space inside a 3-dimensional object.

It's measured in **cubic units** (like cm³, m³, in³, ft³).

## Rectangular Prism

A rectangular prism is a 3D shape with 6 rectangular faces (like a box).

## Volume Formula

$$V = l \\times w \\times h$$

where:
- $l$ = length
- $w$ = width  
- $h$ = height

You can also think of it as:
$$V = (\\text{area of base}) \\times \\text{height}$$

## Cube

A cube is a special rectangular prism where all sides are equal:
$$V = s^3$$

where $s$ = side length

## Real-World Examples

- Storage boxes
- Aquariums
- Rooms in a house
- Swimming pools
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: volumePrisms.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find the volume of a cube with side length 4 cm.',
        solution: `
**Solution:**

Use the formula: $V = s^3$

$$V = 4^3$$
$$V = 4 \\times 4 \\times 4$$
$$V = 64$$

**Answer:** 64 cm³
`
      },
      {
        topicId: volumePrisms.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A box has dimensions 6 inches long, 4 inches wide, and 5 inches tall. What is its volume?',
        solution: `
**Solution:**

Use the formula: $V = l \\times w \\times h$

$$V = 6 \\times 4 \\times 5$$
$$V = 120$$

**Answer:** 120 cubic inches (or 120 in³)
`
      },
      {
        topicId: volumePrisms.id,
        order: 3,
        difficulty: 'HARD',
        question: 'An aquarium is 30 inches long, 12 inches wide, and 18 inches tall. If it is filled to 2 inches below the top, what is the volume of water?',
        solution: `
**Solution:**

Water height: $18 - 2 = 16$ inches

Volume of water:
$$V = l \\times w \\times h$$
$$V = 30 \\times 12 \\times 16$$
$$V = 5,760$$

**Answer:** 5,760 in³ of water
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumePrisms.id,
        front: 'What is volume?',
        back: 'The amount of space inside a 3-dimensional object (measured in cubic units)'
      },
      {
        topicId: volumePrisms.id,
        front: 'What is the formula for volume of a rectangular prism?',
        back: 'V = length × width × height (or V = l × w × h)'
      },
      {
        topicId: volumePrisms.id,
        front: 'What is the formula for volume of a cube?',
        back: 'V = s³ (where s is the side length)'
      }
    ]
  })

  console.log('✓ Created topic: Volume of Rectangular Prisms (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added more Grade 6 Math topics!')
  console.log('   New categories: 3 (Ratios/Rates, Integers, Geometry Basics)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
