import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating Grade 5 Math content...')

  const grade5 = await prisma.course.findUnique({
    where: { slug: 'grade-5-math' }
  })

  if (!grade5) {
    throw new Error('Grade 5 Math course not found')
  }

  // Category 1: Place Value and Decimals
  const placeValue = await prisma.category.upsert({
    where: { slug: 'grade5-place-value-decimals' },
    update: {},
    create: {
      slug: 'grade5-place-value-decimals',
      name: 'Place Value and Decimals',
      order: 1,
      courseId: grade5.id
    }
  })

  // Topic 1: Place Value with Large Numbers
  const placeValueLarge = await prisma.topic.upsert({
    where: { slug: 'place-value-large-numbers' },
    update: {},
    create: {
      slug: 'place-value-large-numbers',
      title: 'Place Value with Large Numbers',
      description: 'Understand place value up to millions and write numbers in different forms',
      order: 1,
      categoryId: placeValue.id,
      isPremium: false,
      textContent: `
# Place Value with Large Numbers

## Understanding Place Value

Each digit in a number has a value based on its position:

**Example: 3,456,789**

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|----------|------------------|---------------|-----------|----------|------|------|
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |

This number is: **3 million, 456 thousand, 789**

## Three Forms of Writing Numbers

### 1. Standard Form
The regular way we write numbers: **3,456,789**

### 2. Word Form
Writing the number in words: **three million, four hundred fifty-six thousand, seven hundred eighty-nine**

### 3. Expanded Form
Showing the value of each digit:
$$3,000,000 + 400,000 + 50,000 + 6,000 + 700 + 80 + 9$$

## Comparing Large Numbers

Compare digits from left to right:
- **5,234,567** vs **5,198,432**
- Same millions place (5)
- Compare hundred thousands: 2 > 1
- So **5,234,567 > 5,198,432**
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: placeValueLarge.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is the value of the digit 6 in 2,684,301?',
        solution: `
**Solution:**

Look at the place value chart:
- The 6 is in the hundred thousands place

Value: $6 \\times 100,000 = 600,000$

**Answer:** 600,000 (six hundred thousand)
`
      },
      {
        topicId: placeValueLarge.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Write 4,507,032 in expanded form.',
        solution: `
**Solution:**

Break down each digit by its place value:

$$4,000,000 + 500,000 + 0 + 7,000 + 0 + 30 + 2$$

Or simply:
$$4,000,000 + 500,000 + 7,000 + 30 + 2$$

**Answer:** $4,000,000 + 500,000 + 7,000 + 30 + 2$
`
      },
      {
        topicId: placeValueLarge.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which number is greater: 8,456,210 or 8,462,105?',
        solution: `
**Solution:**

Compare digit by digit from left to right:

- **Millions:** 8 = 8 ✓
- **Hundred thousands:** 4 = 4 ✓
- **Ten thousands:** 5 < 6 ← Different!

Since $5 < 6$ in the ten thousands place:

**Answer:** 8,462,105 is greater
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: placeValueLarge.id,
        front: 'What does the digit 7 represent in 4,750,000?',
        back: '700,000 (seven hundred thousand) - it is in the hundred thousands place'
      },
      {
        topicId: placeValueLarge.id,
        front: 'What are the three forms of writing numbers?',
        back: 'Standard form (3,456), Word form (three thousand, four hundred fifty-six), Expanded form (3,000 + 400 + 50 + 6)'
      },
      {
        topicId: placeValueLarge.id,
        front: 'How do you compare two large numbers?',
        back: 'Compare digits from left to right, starting with the greatest place value'
      }
    ]
  })

  console.log('✓ Created topic: Place Value with Large Numbers (3 examples, 3 flashcards)')

  // Topic 2: Adding and Subtracting Decimals
  const addSubtractDecimals = await prisma.topic.upsert({
    where: { slug: 'adding-subtracting-decimals-grade5' },
    update: {},
    create: {
      slug: 'adding-subtracting-decimals-grade5',
      title: 'Adding and Subtracting Decimals',
      description: 'Add and subtract decimal numbers by lining up decimal points',
      order: 2,
      categoryId: placeValue.id,
      isPremium: false,
      textContent: `
# Adding and Subtracting Decimals

## The Golden Rule

**Always line up the decimal points!**

## Adding Decimals

**Example:** $3.45 + 12.8$

$$\\begin{align}
  &\\phantom{0}3.45 \\\\
+ &12.80 \\\\
\\hline
  &16.25
\\end{align}$$

**Tip:** Add zeros as placeholders to help line up!

## Subtracting Decimals

**Example:** $15.6 - 7.38$

$$\\begin{align}
  &15.60 \\\\
- &\\phantom{0}7.38 \\\\
\\hline
  &\\phantom{0}8.22
\\end{align}$$

## Money Problems

Decimals are used with money all the time!

**Example:** You have $\\$20.00$ and spend $\\$12.75$. How much is left?

$$20.00 - 12.75 = \\$7.25$$

## Word Problems

1. **Read carefully** to know if you add or subtract
2. **Line up decimal points**
3. **Check your answer** - does it make sense?
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: addSubtractDecimals.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $5.6 + 2.8$',
        solution: `
**Solution:**

Line up the decimal points:
$$\\begin{align}
  &5.6 \\\\
+ &2.8 \\\\
\\hline
  &8.4
\\end{align}$$

**Answer:** $8.4$
`
      },
      {
        topicId: addSubtractDecimals.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Sarah ran 3.75 miles on Monday and 5.4 miles on Tuesday. How many total miles did she run?',
        solution: `
**Solution:**

Add the distances:
$$\\begin{align}
  &3.75 \\\\
+ &5.40 \\\\
\\hline
  &9.15
\\end{align}$$

**Answer:** 9.15 miles
`
      },
      {
        topicId: addSubtractDecimals.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Tom had $\\$50.00$. He bought a book for $\\$12.95$ and a toy for $\\$18.50$. How much money does he have left?',
        solution: `
**Solution:**

Step 1: Find total spent
$$\\begin{align}
  &12.95 \\\\
+ &18.50 \\\\
\\hline
  &31.45
\\end{align}$$

Step 2: Subtract from original amount
$$\\begin{align}
  &50.00 \\\\
- &31.45 \\\\
\\hline
  &18.55
\\end{align}$$

**Answer:** $\\$18.55$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: addSubtractDecimals.id,
        front: 'What is the most important rule when adding or subtracting decimals?',
        back: 'Always line up the decimal points!'
      },
      {
        topicId: addSubtractDecimals.id,
        front: 'How can you make it easier to add 3.5 + 12.45?',
        back: 'Add a zero to make 3.50, then line up: 3.50 + 12.45'
      },
      {
        topicId: addSubtractDecimals.id,
        front: 'If you have $25.00 and spend $8.75, how do you find what\'s left?',
        back: 'Subtract: 25.00 - 8.75 = 16.25'
      }
    ]
  })

  console.log('✓ Created topic: Adding and Subtracting Decimals (3 examples, 3 flashcards)')

  // Category 2: Fractions
  const fractions = await prisma.category.upsert({
    where: { slug: 'grade5-fractions' },
    update: {},
    create: {
      slug: 'grade5-fractions',
      name: 'Fractions',
      order: 2,
      courseId: grade5.id
    }
  })

  // Topic 3: Multiplying Fractions
  const multiplyFractions = await prisma.topic.upsert({
    where: { slug: 'multiplying-fractions-grade5' },
    update: {},
    create: {
      slug: 'multiplying-fractions-grade5',
      title: 'Multiplying Fractions',
      description: 'Learn to multiply fractions and whole numbers by fractions',
      order: 1,
      categoryId: fractions.id,
      isPremium: false,
      textContent: `
# Multiplying Fractions

## Multiplying Two Fractions

**Three simple steps:**
1. Multiply the numerators (top numbers)
2. Multiply the denominators (bottom numbers)
3. Simplify if possible

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example:**
$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$$

## Multiplying a Whole Number by a Fraction

Turn the whole number into a fraction (put it over 1):

**Example:** $5 \\times \\frac{2}{3}$

$$5 \\times \\frac{2}{3} = \\frac{5}{1} \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$$

## What Does It Mean?

Multiplying by a fraction means "taking a part of" something:

- $\\frac{1}{2} \\times 10 = 5$ → Half of 10 is 5
- $\\frac{1}{4} \\times 12 = 3$ → One-fourth of 12 is 3

## Simplifying Before Multiplying

You can cross-cancel to make math easier:

$$\\frac{4}{5} \\times \\frac{5}{8} = \\frac{4 \\times \\cancel{5}}{\\cancel{5} \\times 8} = \\frac{4}{8} = \\frac{1}{2}$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: multiplyFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $\\frac{1}{3} \\times \\frac{2}{5}$',
        solution: `
**Solution:**

Multiply numerators and denominators:
$$\\frac{1 \\times 2}{3 \\times 5} = \\frac{2}{15}$$

Already in simplest form.

**Answer:** $\\frac{2}{15}$
`
      },
      {
        topicId: multiplyFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'What is $\\frac{1}{2}$ of 18?',
        solution: `
**Solution:**

"Of" means multiply:
$$\\frac{1}{2} \\times 18 = \\frac{1}{2} \\times \\frac{18}{1} = \\frac{18}{2} = 9$$

**Answer:** 9
`
      },
      {
        topicId: multiplyFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A recipe needs $\\frac{3}{4}$ cup of sugar. If you want to make $\\frac{2}{3}$ of the recipe, how much sugar do you need?',
        solution: `
**Solution:**

Multiply the fractions:
$$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12}$$

Simplify (divide by 6):
$$\\frac{6}{12} = \\frac{1}{2}$$

**Answer:** $\\frac{1}{2}$ cup of sugar
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: multiplyFractions.id,
        front: 'How do you multiply two fractions?',
        back: 'Multiply numerators together, multiply denominators together, then simplify'
      },
      {
        topicId: multiplyFractions.id,
        front: 'What does "of" mean in fraction problems?',
        back: 'Multiply (like "1/2 of 10" means 1/2 × 10)'
      },
      {
        topicId: multiplyFractions.id,
        front: 'How do you multiply a whole number by a fraction?',
        back: 'Turn the whole number into a fraction over 1, then multiply'
      }
    ]
  })

  console.log('✓ Created topic: Multiplying Fractions (3 examples, 3 flashcards)')

  // Topic 4: Dividing Fractions
  const divideFractions = await prisma.topic.upsert({
    where: { slug: 'dividing-fractions-grade5' },
    update: {},
    create: {
      slug: 'dividing-fractions-grade5',
      title: 'Dividing Fractions',
      description: 'Use the "keep, change, flip" method to divide fractions',
      order: 2,
      categoryId: fractions.id,
      isPremium: false,
      textContent: `
# Dividing Fractions

## The "Keep, Change, Flip" Method

To divide fractions:
1. **Keep** the first fraction the same
2. **Change** division to multiplication
3. **Flip** the second fraction (reciprocal)

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Example:**
$$\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$

## What is a Reciprocal?

The reciprocal is the fraction flipped upside down:
- Reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$
- Reciprocal of $5 = \\frac{5}{1}$ is $\\frac{1}{5}$

## Why Does This Work?

Dividing by a fraction is the same as multiplying by its reciprocal:
$$6 \\div 2 = 3$$
$$6 \\times \\frac{1}{2} = 3$$

Same idea with fractions!

## Dividing by a Whole Number

Turn the whole number into a fraction first:
$$\\frac{3}{4} \\div 2 = \\frac{3}{4} \\div \\frac{2}{1} = \\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: divideFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $\\frac{1}{2} \\div \\frac{1}{4}$',
        solution: `
**Solution:**

Keep, Change, Flip:
$$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$$

**Answer:** 2
`
      },
      {
        topicId: divideFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Calculate: $\\frac{3}{5} \\div \\frac{2}{3}$',
        solution: `
**Solution:**

Keep, Change, Flip:
$$\\frac{3}{5} \\div \\frac{2}{3} = \\frac{3}{5} \\times \\frac{3}{2}$$

Multiply:
$$\\frac{3 \\times 3}{5 \\times 2} = \\frac{9}{10}$$

**Answer:** $\\frac{9}{10}$
`
      },
      {
        topicId: divideFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'You have $\\frac{3}{4}$ of a pizza. You want to divide it equally among 3 people. What fraction does each person get?',
        solution: `
**Solution:**

Divide: $\\frac{3}{4} \\div 3$

Turn 3 into a fraction:
$$\\frac{3}{4} \\div \\frac{3}{1}$$

Keep, Change, Flip:
$$\\frac{3}{4} \\times \\frac{1}{3} = \\frac{3}{12} = \\frac{1}{4}$$

**Answer:** Each person gets $\\frac{1}{4}$ of the pizza
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: divideFractions.id,
        front: 'What are the three steps to divide fractions?',
        back: 'Keep, Change, Flip (Keep first fraction, Change ÷ to ×, Flip second fraction)'
      },
      {
        topicId: divideFractions.id,
        front: 'What is the reciprocal of 2/5?',
        back: '5/2 (flip the fraction upside down)'
      },
      {
        topicId: divideFractions.id,
        front: 'Why do we flip the second fraction when dividing?',
        back: 'Dividing by a fraction is the same as multiplying by its reciprocal'
      }
    ]
  })

  console.log('✓ Created topic: Dividing Fractions (3 examples, 3 flashcards)')

  // Category 3: Volume and Geometry
  const volumeGeometry = await prisma.category.upsert({
    where: { slug: 'grade5-volume-geometry' },
    update: {},
    create: {
      slug: 'grade5-volume-geometry',
      name: 'Volume and Geometry',
      order: 3,
      courseId: grade5.id
    }
  })

  // Topic 5: Volume of Rectangular Prisms
  const volumeRectangular = await prisma.topic.upsert({
    where: { slug: 'volume-rectangular-prisms-grade5' },
    update: {},
    create: {
      slug: 'volume-rectangular-prisms-grade5',
      title: 'Volume of Rectangular Prisms',
      description: 'Calculate volume by multiplying length, width, and height',
      order: 1,
      categoryId: volumeGeometry.id,
      isPremium: false,
      textContent: `
# Volume of Rectangular Prisms

## What is Volume?

Volume measures how much space is inside a 3D shape.

**Units:** Cubic units like cm³, m³, in³, ft³

## Formula for Rectangular Prisms

$$V = l \\times w \\times h$$

where:
- $l$ = length
- $w$ = width
- $h$ = height

## Thinking About It

You can also think of volume as:
$$V = (\\text{Area of base}) \\times \\text{height}$$

## Cubes

For a cube (all sides equal):
$$V = s^3$$

where $s$ = side length

## Real-World Examples

- Boxes and containers
- Rooms
- Fish tanks
- Swimming pools
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: volumeRectangular.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find the volume of a box that is 5 cm long, 3 cm wide, and 2 cm tall.',
        solution: `
**Solution:**

Use the formula $V = l \\times w \\times h$:

$$V = 5 \\times 3 \\times 2 = 30$$

**Answer:** 30 cm³
`
      },
      {
        topicId: volumeRectangular.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A fish tank is 20 inches long, 10 inches wide, and 12 inches tall. What is its volume?',
        solution: `
**Solution:**

$$V = l \\times w \\times h$$
$$V = 20 \\times 10 \\times 12$$
$$V = 2,400$$

**Answer:** 2,400 cubic inches (or 2,400 in³)
`
      },
      {
        topicId: volumeRectangular.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A storage box has a volume of 120 ft³. The base is 6 feet long and 4 feet wide. How tall is the box?',
        solution: `
**Solution:**

We know: $V = l \\times w \\times h$

Substitute what we know:
$$120 = 6 \\times 4 \\times h$$
$$120 = 24 \\times h$$
$$h = 120 \\div 24$$
$$h = 5$$

**Answer:** The box is 5 feet tall
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: volumeRectangular.id,
        front: 'What is the formula for volume of a rectangular prism?',
        back: 'V = length × width × height (or V = l × w × h)'
      },
      {
        topicId: volumeRectangular.id,
        front: 'What units do we use for volume?',
        back: 'Cubic units like cm³, m³, in³, or ft³'
      },
      {
        topicId: volumeRectangular.id,
        front: 'What is the formula for volume of a cube?',
        back: 'V = s³ (where s is the side length)'
      }
    ]
  })

  console.log('✓ Created topic: Volume of Rectangular Prisms (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created Grade 5 Math content!')
  console.log('   New categories: 3 (Place Value/Decimals, Fractions, Volume/Geometry)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
