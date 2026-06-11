import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating initial Grade 6 Math content...')

  const grade6 = await prisma.course.findUnique({
    where: { slug: 'grade-6-math' }
  })

  if (!grade6) {
    throw new Error('Grade 6 Math course not found')
  }

  // Category 1: Number Operations
  const numberOps = await prisma.category.upsert({
    where: { slug: 'grade6-number-operations' },
    update: {},
    create: {
      slug: 'grade6-number-operations',
      name: 'Number Operations',
      order: 1,
      courseId: grade6.id
    }
  })

  // Topic 1: Whole Number Operations
  const wholeNumbers = await prisma.topic.upsert({
    where: { slug: 'whole-number-operations' },
    update: {},
    create: {
      slug: 'whole-number-operations',
      title: 'Whole Number Operations',
      description: 'Master addition, subtraction, multiplication, and division with whole numbers',
      order: 1,
      categoryId: numberOps.id,
      isPremium: false,
      textContent: `
# Whole Number Operations

Whole numbers are the numbers 0, 1, 2, 3, 4, 5, and so on. They are the counting numbers plus zero.

## The Four Basic Operations

### 1. Addition (+)
Combining two or more numbers to find their total.

**Example:** $456 + 789 = 1,245$

### 2. Subtraction (−)
Finding the difference between two numbers.

**Example:** $1,000 - 347 = 653$

### 3. Multiplication (×)
Repeated addition or finding the total of equal groups.

**Example:** $24 \\times 15 = 360$

### 4. Division (÷)
Splitting a number into equal parts.

**Example:** $144 \\div 12 = 12$

## Properties of Operations

- **Commutative Property (+ and ×):** Order doesn't matter
  - $5 + 3 = 3 + 5$
  - $4 \\times 6 = 6 \\times 4$

- **Associative Property (+ and ×):** Grouping doesn't matter
  - $(2 + 3) + 4 = 2 + (3 + 4)$

- **Order of Operations:** Use **PEMDAS** when multiple operations appear
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: wholeNumbers.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $278 + 445$',
        solution: `
**Solution:**

Line up the numbers by place value:
$$\\begin{align}
  &278 \\\\
+ &445 \\\\
\\hline
  &723
\\end{align}$$

**Answer:** $723$
`
      },
      {
        topicId: wholeNumbers.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A store had 1,250 items in stock. They sold 487 items on Monday and 329 items on Tuesday. How many items are left?',
        solution: `
**Solution:**

First, find total items sold:
$$487 + 329 = 816$$

Then subtract from original stock:
$$1,250 - 816 = 434$$

**Answer:** 434 items are left in stock
`
      },
      {
        topicId: wholeNumbers.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Calculate: $45 \\times 23 - 156 \\div 12$',
        solution: `
**Solution:**

Follow order of operations (PEMDAS):

Step 1: Multiply and divide first (left to right)
$$45 \\times 23 = 1,035$$
$$156 \\div 12 = 13$$

Step 2: Subtract
$$1,035 - 13 = 1,022$$

**Answer:** $1,022$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: wholeNumbers.id,
        front: 'What are whole numbers?',
        back: 'The counting numbers plus zero: 0, 1, 2, 3, 4, 5, ...'
      },
      {
        topicId: wholeNumbers.id,
        front: 'What is the commutative property?',
        back: 'For addition and multiplication, you can change the order: a + b = b + a and a × b = b × a'
      },
      {
        topicId: wholeNumbers.id,
        front: 'What does PEMDAS stand for?',
        back: 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)'
      }
    ]
  })

  console.log('✓ Created topic: Whole Number Operations (3 examples, 3 flashcards)')

  // Topic 2: Prime Factorization
  const primeFactor = await prisma.topic.upsert({
    where: { slug: 'prime-factorization' },
    update: {},
    create: {
      slug: 'prime-factorization',
      title: 'Prime Factorization',
      description: 'Learn to break down numbers into their prime factors',
      order: 2,
      categoryId: numberOps.id,
      isPremium: false,
      textContent: `
# Prime Factorization

## Prime Numbers

A **prime number** is a whole number greater than 1 that has exactly two factors: 1 and itself.

**Examples of prime numbers:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

**Note:** 2 is the only even prime number!

## Composite Numbers

A **composite number** is a whole number greater than 1 that has more than two factors.

**Examples:** 4, 6, 8, 9, 10, 12, 14, 15, 16...

## Prime Factorization

Prime factorization means writing a number as a product of prime numbers.

**Example:** $24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$

### Methods

1. **Factor Tree Method:** Break down the number step by step
2. **Division Method:** Divide by prime numbers starting from 2

## Why It's Useful

Prime factorization helps us:
- Find the Greatest Common Factor (GCF)
- Find the Least Common Multiple (LCM)
- Simplify fractions
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: primeFactor.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find the prime factorization of 18.',
        solution: `
**Solution:**

Using a factor tree:
$$18 = 2 \\times 9$$
$$9 = 3 \\times 3$$

So: $18 = 2 \\times 3 \\times 3 = 2 \\times 3^2$

**Answer:** $18 = 2 \\times 3^2$
`
      },
      {
        topicId: primeFactor.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Is 37 a prime number or composite number? Explain.',
        solution: `
**Solution:**

Check if any prime numbers less than 37 divide it evenly:
- $37 \\div 2 = 18.5$ (not whole)
- $37 \\div 3 = 12.33...$ (not whole)
- $37 \\div 5 = 7.4$ (not whole)
- We only need to check up to $\\sqrt{37} \\approx 6$

Since no prime numbers divide 37 evenly, it has no factors other than 1 and 37.

**Answer:** 37 is a prime number
`
      },
      {
        topicId: primeFactor.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Find the prime factorization of 180.',
        solution: `
**Solution:**

Using the division method:
$$180 \\div 2 = 90$$
$$90 \\div 2 = 45$$
$$45 \\div 3 = 15$$
$$15 \\div 3 = 5$$
$$5 \\div 5 = 1$$

So: $180 = 2 \\times 2 \\times 3 \\times 3 \\times 5 = 2^2 \\times 3^2 \\times 5$

**Answer:** $180 = 2^2 \\times 3^2 \\times 5$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: primeFactor.id,
        front: 'What is a prime number?',
        back: 'A whole number greater than 1 that has exactly two factors: 1 and itself'
      },
      {
        topicId: primeFactor.id,
        front: 'What is prime factorization?',
        back: 'Writing a number as a product of only prime numbers'
      },
      {
        topicId: primeFactor.id,
        front: 'What is the only even prime number?',
        back: '2 is the only even prime number'
      }
    ]
  })

  console.log('✓ Created topic: Prime Factorization (3 examples, 3 flashcards)')

  // Category 2: Fractions and Decimals
  const fractionsDecimals = await prisma.category.upsert({
    where: { slug: 'grade6-fractions-decimals' },
    update: {},
    create: {
      slug: 'grade6-fractions-decimals',
      name: 'Fractions and Decimals',
      order: 2,
      courseId: grade6.id
    }
  })

  // Topic 3: Understanding Fractions
  const understandingFractions = await prisma.topic.upsert({
    where: { slug: 'understanding-fractions' },
    update: {},
    create: {
      slug: 'understanding-fractions',
      title: 'Understanding Fractions',
      description: 'Learn what fractions represent and how to compare them',
      order: 1,
      categoryId: fractionsDecimals.id,
      isPremium: false,
      textContent: `
# Understanding Fractions

## What is a Fraction?

A fraction represents a part of a whole. It has two parts:

$$\\frac{\\text{numerator}}{\\text{denominator}}$$

- **Numerator:** The top number (how many parts we have)
- **Denominator:** The bottom number (how many equal parts in the whole)

**Example:** $\\frac{3}{4}$ means 3 parts out of 4 equal parts

## Types of Fractions

### Proper Fraction
Numerator is less than denominator: $\\frac{2}{5}$, $\\frac{7}{10}$

### Improper Fraction
Numerator is greater than or equal to denominator: $\\frac{7}{4}$, $\\frac{9}{9}$

### Mixed Number
A whole number and a fraction: $2\\frac{1}{3}$, $5\\frac{3}{8}$

## Comparing Fractions

### Same Denominator
Compare the numerators: $\\frac{3}{8} < \\frac{5}{8}$

### Different Denominators
Find a common denominator first, then compare

## Equivalent Fractions

Fractions that represent the same value:
$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$$

Multiply or divide both numerator and denominator by the same number.
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: understandingFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Convert the improper fraction $\\frac{11}{4}$ to a mixed number.',
        solution: `
**Solution:**

Divide the numerator by the denominator:
$$11 \\div 4 = 2 \\text{ remainder } 3$$

This means:
- Whole number: 2
- Numerator of fraction: 3 (remainder)
- Denominator stays: 4

**Answer:** $\\frac{11}{4} = 2\\frac{3}{4}$
`
      },
      {
        topicId: understandingFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is greater: $\\frac{5}{6}$ or $\\frac{7}{9}$?',
        solution: `
**Solution:**

Find a common denominator (LCM of 6 and 9 is 18):

$$\\frac{5}{6} = \\frac{5 \\times 3}{6 \\times 3} = \\frac{15}{18}$$

$$\\frac{7}{9} = \\frac{7 \\times 2}{9 \\times 2} = \\frac{14}{18}$$

Compare: $\\frac{15}{18} > \\frac{14}{18}$

**Answer:** $\\frac{5}{6}$ is greater
`
      },
      {
        topicId: understandingFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Order from least to greatest: $\\frac{2}{3}$, $\\frac{5}{8}$, $\\frac{3}{4}$',
        solution: `
**Solution:**

Find a common denominator (LCM of 3, 8, and 4 is 24):

$$\\frac{2}{3} = \\frac{16}{24}$$

$$\\frac{5}{8} = \\frac{15}{24}$$

$$\\frac{3}{4} = \\frac{18}{24}$$

Order: $\\frac{15}{24} < \\frac{16}{24} < \\frac{18}{24}$

**Answer:** $\\frac{5}{8}, \\frac{2}{3}, \\frac{3}{4}$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: understandingFractions.id,
        front: 'What does the numerator represent?',
        back: 'The top number of a fraction - how many parts we have'
      },
      {
        topicId: understandingFractions.id,
        front: 'What is an improper fraction?',
        back: 'A fraction where the numerator is greater than or equal to the denominator'
      },
      {
        topicId: understandingFractions.id,
        front: 'How do you create equivalent fractions?',
        back: 'Multiply or divide both the numerator and denominator by the same number'
      }
    ]
  })

  console.log('✓ Created topic: Understanding Fractions (3 examples, 3 flashcards)')

  // Topic 4: Adding and Subtracting Fractions
  const addSubtractFractions = await prisma.topic.upsert({
    where: { slug: 'adding-subtracting-fractions' },
    update: {},
    create: {
      slug: 'adding-subtracting-fractions',
      title: 'Adding and Subtracting Fractions',
      description: 'Learn to add and subtract fractions with same and different denominators',
      order: 2,
      categoryId: fractionsDecimals.id,
      isPremium: false,
      textContent: `
# Adding and Subtracting Fractions

## Same Denominator

When fractions have the same denominator, simply add or subtract the numerators:

$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2 + 3}{7} = \\frac{5}{7}$$

$$\\frac{5}{9} - \\frac{2}{9} = \\frac{5 - 2}{9} = \\frac{3}{9} = \\frac{1}{3}$$

## Different Denominators

### Steps:
1. Find a common denominator (usually the LCM)
2. Convert each fraction to an equivalent fraction
3. Add or subtract the numerators
4. Simplify if possible

**Example:**
$$\\frac{1}{4} + \\frac{1}{6}$$

LCM of 4 and 6 is 12:
$$\\frac{1}{4} = \\frac{3}{12}, \\quad \\frac{1}{6} = \\frac{2}{12}$$

$$\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$$

## Mixed Numbers

Convert to improper fractions first, then add/subtract:
$$2\\frac{1}{3} + 1\\frac{1}{2} = \\frac{7}{3} + \\frac{3}{2}$$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: addSubtractFractions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $\\frac{3}{8} + \\frac{2}{8}$',
        solution: `
**Solution:**

Same denominator - add the numerators:
$$\\frac{3}{8} + \\frac{2}{8} = \\frac{3 + 2}{8} = \\frac{5}{8}$$

**Answer:** $\\frac{5}{8}$
`
      },
      {
        topicId: addSubtractFractions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Calculate: $\\frac{2}{3} + \\frac{1}{4}$',
        solution: `
**Solution:**

Find common denominator (LCM of 3 and 4 is 12):

$$\\frac{2}{3} = \\frac{8}{12}$$

$$\\frac{1}{4} = \\frac{3}{12}$$

Add:
$$\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$$

**Answer:** $\\frac{11}{12}$
`
      },
      {
        topicId: addSubtractFractions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Sarah ran $2\\frac{3}{4}$ miles on Monday and $1\\frac{5}{6}$ miles on Tuesday. How many total miles did she run?',
        solution: `
**Solution:**

Convert to improper fractions:
$$2\\frac{3}{4} = \\frac{11}{4}, \\quad 1\\frac{5}{6} = \\frac{11}{6}$$

Find common denominator (LCM of 4 and 6 is 12):
$$\\frac{11}{4} = \\frac{33}{12}, \\quad \\frac{11}{6} = \\frac{22}{12}$$

Add:
$$\\frac{33}{12} + \\frac{22}{12} = \\frac{55}{12} = 4\\frac{7}{12}$$

**Answer:** $4\\frac{7}{12}$ miles
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: addSubtractFractions.id,
        front: 'How do you add fractions with the same denominator?',
        back: 'Add the numerators and keep the denominator the same'
      },
      {
        topicId: addSubtractFractions.id,
        front: 'What is the first step when adding fractions with different denominators?',
        back: 'Find a common denominator (usually the LCM of the denominators)'
      },
      {
        topicId: addSubtractFractions.id,
        front: 'How do you add mixed numbers?',
        back: 'Convert to improper fractions first, then add using common denominators'
      }
    ]
  })

  console.log('✓ Created topic: Adding and Subtracting Fractions (3 examples, 3 flashcards)')

  // Topic 5: Working with Decimals
  const workingDecimals = await prisma.topic.upsert({
    where: { slug: 'working-with-decimals' },
    update: {},
    create: {
      slug: 'working-with-decimals',
      title: 'Working with Decimals',
      description: 'Learn to add, subtract, multiply, and divide decimals',
      order: 3,
      categoryId: fractionsDecimals.id,
      isPremium: false,
      textContent: `
# Working with Decimals

## Understanding Decimals

Decimals are another way to represent parts of a whole.

**Place value:**
$$3.475$$
- 3 = ones
- 4 = tenths
- 7 = hundredths
- 5 = thousandths

## Adding and Subtracting Decimals

**Rule:** Line up the decimal points!

$$\\begin{align}
  &3.45 \\\\
+ &2.7 \\\\
\\hline
  &6.15
\\end{align}$$

## Multiplying Decimals

Steps:
1. Multiply as if they're whole numbers
2. Count total decimal places in both numbers
3. Put that many decimal places in the answer

**Example:** $2.5 \\times 0.3 = 0.75$ (2 decimal places total)

## Dividing Decimals

Steps:
1. Move the decimal in the divisor to make it a whole number
2. Move the decimal in the dividend the same number of places
3. Divide normally
4. Place the decimal point in the quotient

## Converting Between Fractions and Decimals

- **Fraction to decimal:** Divide numerator by denominator
- **Decimal to fraction:** Use place value ($0.75 = \\frac{75}{100} = \\frac{3}{4}$)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: workingDecimals.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Calculate: $5.6 + 3.84$',
        solution: `
**Solution:**

Line up the decimal points:
$$\\begin{align}
  &5.60 \\\\
+ &3.84 \\\\
\\hline
  &9.44
\\end{align}$$

**Answer:** $9.44$
`
      },
      {
        topicId: workingDecimals.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Calculate: $3.2 \\times 1.5$',
        solution: `
**Solution:**

Multiply as whole numbers:
$$32 \\times 15 = 480$$

Count decimal places (1 + 1 = 2 places):
$$480 \\rightarrow 4.80 = 4.8$$

**Answer:** $4.8$
`
      },
      {
        topicId: workingDecimals.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A rope is 15.6 meters long. It is cut into 4 equal pieces. How long is each piece?',
        solution: `
**Solution:**

Divide: $15.6 \\div 4$

$$\\begin{align}
&\\phantom{0}3.9 \\\\
4 &\\overline{)15.6} \\\\
&\\underline{12\\phantom{.0}} \\\\
&\\phantom{0}3.6 \\\\
&\\phantom{0}\\underline{3.6} \\\\
&\\phantom{00}0
\\end{align}$$

**Answer:** Each piece is $3.9$ meters long
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: workingDecimals.id,
        front: 'What is the most important rule when adding decimals?',
        back: 'Line up the decimal points before adding'
      },
      {
        topicId: workingDecimals.id,
        front: 'How do you multiply decimals?',
        back: 'Multiply as whole numbers, then count total decimal places in both numbers and place that many in the answer'
      },
      {
        topicId: workingDecimals.id,
        front: 'How do you convert a fraction to a decimal?',
        back: 'Divide the numerator by the denominator'
      }
    ]
  })

  console.log('✓ Created topic: Working with Decimals (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created initial Grade 6 Math content!')
  console.log('   New categories: 2 (Number Operations, Fractions and Decimals)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
