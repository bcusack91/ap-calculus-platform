import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Grade 4 Math to CCSS standards...\n')

  const course = await prisma.course.findUnique({ where: { slug: 'grade-4-math' } })
  if (!course) { console.log('Course not found!'); return }

  // New categories with topics
  const expansions = [
    {
      categoryName: 'Place Value and Rounding',
      categorySlug: 'place-value-rounding-g4',
      order: 0,
      topics: [
        {
          title: 'Understanding Place Value',
          slug: 'understanding-place-value-grade4',
          order: 0,
          description: 'Recognize that a digit in one place is ten times what it represents in the place to its right.',
          textContent: `# Understanding Place Value

## Place Value Chart

Each place in a number is **10 times** the value of the place to its right.

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Ones |
|---|---|---|---|---|---|---|
| 1,000,000 | 100,000 | 10,000 | 1,000 | 100 | 10 | 1 |

## Reading Numbers

The number **4,523** means:
- **4** thousands = 4,000
- **5** hundreds = 500
- **2** tens = 20
- **3** ones = 3

So $4,523 = 4,000 + 500 + 20 + 3$

This is called **expanded form**.

## Comparing Numbers

Use place value to compare numbers from left to right:
- $3,456 < 3,789$ because in the hundreds place, $4 < 7$

Symbols: $<$ (less than), $>$ (greater than), $=$ (equal to)

## Patterns with 10

- $30 \\times 10 = 300$ (the digit moves one place to the left)
- $4,000 \\div 10 = 400$ (the digit moves one place to the right)

> **Practice**: Write 7,305 in expanded form: $7,000 + 300 + 0 + 5$`
        },
        {
          title: 'Rounding Whole Numbers',
          slug: 'rounding-whole-numbers-grade4',
          order: 1,
          description: 'Round multi-digit whole numbers to any place.',
          textContent: `# Rounding Whole Numbers

## Rules for Rounding

1. Find the **rounding place** (the digit you're rounding to)
2. Look at the digit **one place to the right**
3. If that digit is **5 or more**, round **up**
4. If that digit is **4 or less**, round **down** (keep the same)
5. Change all digits to the right of the rounding place to **0**

## Examples

**Round 3,742 to the nearest hundred:**
- Hundreds digit: **7**
- Digit to the right: **4** (less than 5)
- Round down: **3,700** ✅

**Round 8,561 to the nearest thousand:**
- Thousands digit: **8**
- Digit to the right: **5** (5 or more)
- Round up: **9,000** ✅

**Round 45,283 to the nearest ten thousand:**
- Ten thousands digit: **4**
- Digit to the right: **5** (5 or more)
- Round up: **50,000** ✅

## Why We Round

Rounding helps us **estimate** answers quickly:
- About how many students are in the school?
- Approximately how much will these items cost?

## Estimation with Rounding

To estimate $3,847 + 2,156$:
- Round: $3,800 + 2,200 = 6,000$ (to nearest hundred)
- Or: $4,000 + 2,000 = 6,000$ (to nearest thousand)

> **Tip**: The actual answer is 6,003. Our estimate was very close!`
        }
      ]
    },
    {
      categoryName: 'Factors and Multiples',
      categorySlug: 'factors-multiples-g4',
      order: 2,
      topics: [
        {
          title: 'Factors and Factor Pairs',
          slug: 'factors-factor-pairs-grade4',
          order: 0,
          description: 'Find all factor pairs of whole numbers 1–100 and identify prime and composite numbers.',
          textContent: `# Factors and Factor Pairs

## What Is a Factor?

A **factor** of a number divides evenly into that number (no remainder).

**Factors of 12**: 1, 2, 3, 4, 6, 12
Because: $12 \\div 1 = 12$, $12 \\div 2 = 6$, $12 \\div 3 = 4$, etc.

## Factor Pairs

Factors come in **pairs** that multiply to give the number:

**Factor pairs of 24**: $(1, 24)$, $(2, 12)$, $(3, 8)$, $(4, 6)$

## Finding All Factors

Start dividing by 1, 2, 3, 4, ... Stop when the pairs start repeating.

**Example**: Find all factors of 36
- $36 \\div 1 = 36$ → pair $(1, 36)$
- $36 \\div 2 = 18$ → pair $(2, 18)$
- $36 \\div 3 = 12$ → pair $(3, 12)$
- $36 \\div 4 = 9$ → pair $(4, 9)$
- $36 \\div 6 = 6$ → pair $(6, 6)$

Factors of 36: **1, 2, 3, 4, 6, 9, 12, 18, 36**

## Prime and Composite Numbers

- **Prime number**: Has exactly 2 factors (1 and itself). Examples: 2, 3, 5, 7, 11, 13
- **Composite number**: Has more than 2 factors. Examples: 4, 6, 8, 9, 10, 12
- **1** is neither prime nor composite

## Multiples

A **multiple** of a number is the product of that number and any whole number.

**Multiples of 5**: 5, 10, 15, 20, 25, 30, ...

> **Remember**: Every number is a factor of itself and a multiple of itself.`
        },
        {
          title: 'Patterns and Rules',
          slug: 'number-patterns-grade4',
          order: 1,
          description: 'Generate and analyze number patterns using rules.',
          textContent: `# Patterns and Rules

## Number Patterns

A **pattern** is a sequence that follows a **rule**.

**Example**: 3, 6, 9, 12, 15, ...
- Rule: **Add 3** each time
- Next numbers: 18, 21, 24

## Writing Rules

| Pattern | Rule |
|---------|------|
| 2, 4, 6, 8, ... | Add 2 |
| 5, 10, 20, 40, ... | Multiply by 2 |
| 100, 90, 80, 70, ... | Subtract 10 |
| 1, 4, 9, 16, 25, ... | Square numbers ($1^2, 2^2, 3^2, ...$) |

## Input-Output Tables

A rule connects **input** numbers to **output** numbers:

| Input | Output |
|-------|--------|
| 1 | 5 |
| 2 | 8 |
| 3 | 11 |
| 4 | ? |

Rule: Multiply by 3, then add 2. So input 4 → $4 \\times 3 + 2 = 14$

## Features of Patterns

- Patterns can be **increasing** (going up) or **decreasing** (going down)
- The same rule always gives the same result
- Patterns help us **predict** what comes next

## Even and Odd Patterns

- **Even + Even = Even**: $4 + 6 = 10$
- **Odd + Odd = Even**: $3 + 5 = 8$
- **Even + Odd = Odd**: $4 + 3 = 7$

> **Challenge**: What rule makes this pattern? 1, 1, 2, 3, 5, 8, 13, ... (Answer: Add the two previous numbers — this is the Fibonacci sequence!)`
        }
      ]
    },
    {
      categoryName: 'Addition and Subtraction',
      categorySlug: 'addition-subtraction-g4',
      order: 1,
      topics: [
        {
          title: 'Multi-Digit Addition and Subtraction',
          slug: 'multi-digit-add-subtract-grade4',
          order: 0,
          description: 'Add and subtract multi-digit whole numbers using the standard algorithm.',
          textContent: `# Multi-Digit Addition and Subtraction

## Addition with Regrouping

When digits in a column add up to 10 or more, **regroup** (carry) to the next column.

**Example**: $3,456 + 2,789$

Step by step:
- Ones: $6 + 9 = 15$ → write 5, carry 1
- Tens: $5 + 8 + 1 = 14$ → write 4, carry 1
- Hundreds: $4 + 7 + 1 = 12$ → write 2, carry 1
- Thousands: $3 + 2 + 1 = 6$

**Answer**: $3,456 + 2,789 = 6,245$ ✅

## Subtraction with Regrouping

When you can't subtract a digit, **borrow** from the next column.

**Example**: $5,302 - 1,847$

- Ones: $2 - 7$ → can't do it! Borrow from tens
- Tens: $0 - 4$ → need to borrow from hundreds too
- Continue borrowing as needed

**Answer**: $5,302 - 1,847 = 3,455$ ✅

## Estimating to Check

Always estimate to check if your answer is reasonable:
- $3,456 + 2,789 \\approx 3,500 + 2,800 = 6,300$ ✓ (close to 6,245)

## Word Problems

**Key words for addition**: total, sum, altogether, combined, in all
**Key words for subtraction**: difference, how many more, how much less, remaining

> **Tip**: Always line up numbers by place value when adding or subtracting!`
        }
      ]
    },
    {
      categoryName: 'Geometry and Angles',
      categorySlug: 'geometry-angles-g4',
      order: 5,
      topics: [
        {
          title: 'Lines, Rays, and Angles',
          slug: 'lines-rays-angles-grade4',
          order: 0,
          description: 'Identify and draw points, lines, line segments, rays, and angles.',
          textContent: `# Lines, Rays, and Angles

## Basic Geometric Figures

| Figure | Description | Symbol |
|--------|-------------|--------|
| **Point** | An exact location in space | Point $A$ |
| **Line** | Extends forever in both directions | $\\overleftrightarrow{AB}$ |
| **Line segment** | Part of a line with two endpoints | $\\overline{AB}$ |
| **Ray** | Part of a line with one endpoint, extends forever in one direction | $\\overrightarrow{AB}$ |

## Types of Lines

- **Parallel lines**: Lines that never intersect (like railroad tracks) ∥
- **Perpendicular lines**: Lines that intersect at a right angle (90°) ⊥
- **Intersecting lines**: Lines that cross at a point

## Angles

An **angle** is formed by two rays sharing a common endpoint (called the **vertex**).

## Types of Angles

| Type | Measure | Description |
|------|---------|-------------|
| **Right angle** | Exactly $90°$ | Looks like a corner of a square |
| **Acute angle** | Less than $90°$ | "Small" angle |
| **Obtuse angle** | Between $90°$ and $180°$ | "Wide" angle |
| **Straight angle** | Exactly $180°$ | Looks like a straight line |

## Measuring Angles with a Protractor

1. Place the center of the protractor on the vertex
2. Line up one ray with the $0°$ line
3. Read where the other ray crosses the protractor

## Symmetry

A shape has a **line of symmetry** if it can be folded in half and both sides match perfectly.

- A square has **4** lines of symmetry
- A rectangle has **2** lines of symmetry
- A circle has **infinite** lines of symmetry

> **Practice**: Find all the right angles in your classroom!`
        },
        {
          title: 'Classifying Shapes',
          slug: 'classifying-shapes-grade4',
          order: 1,
          description: 'Classify two-dimensional figures based on parallel lines, perpendicular lines, and angles.',
          textContent: `# Classifying Shapes

## Triangles by Angles

| Type | Angles |
|------|--------|
| **Acute triangle** | All angles less than $90°$ |
| **Right triangle** | One angle is exactly $90°$ |
| **Obtuse triangle** | One angle is greater than $90°$ |

## Triangles by Sides

| Type | Sides |
|------|-------|
| **Equilateral** | All 3 sides equal |
| **Isosceles** | At least 2 sides equal |
| **Scalene** | No sides equal |

## Quadrilaterals (4-sided shapes)

| Shape | Properties |
|-------|-----------|
| **Parallelogram** | 2 pairs of parallel sides |
| **Rectangle** | Parallelogram with 4 right angles |
| **Rhombus** | Parallelogram with 4 equal sides |
| **Square** | Rectangle AND rhombus (4 right angles, 4 equal sides) |
| **Trapezoid** | Exactly 1 pair of parallel sides |

## Shape Relationships

- Every square is a rectangle (but not every rectangle is a square)
- Every square is a rhombus (but not every rhombus is a square)
- Every rectangle is a parallelogram
- Every rhombus is a parallelogram

## Perimeter

**Perimeter** = distance around a shape = sum of all sides

- Rectangle: $P = 2l + 2w$
- Square: $P = 4s$

## Area

**Area** = space inside a shape (measured in square units)

- Rectangle: $A = l \\times w$
- Square: $A = s^2$

> **Remember**: Perimeter is measured in units (cm, in). Area is measured in **square** units (cm², in²).`
        }
      ]
    },
    {
      categoryName: 'Measurement and Data',
      categorySlug: 'measurement-data-g4',
      order: 6,
      topics: [
        {
          title: 'Units of Measurement',
          slug: 'units-measurement-grade4',
          order: 0,
          description: 'Convert between units of measurement within the same system.',
          textContent: `# Units of Measurement

## Customary Units

### Length
| Unit | Conversion |
|------|-----------|
| 1 foot (ft) | = 12 inches (in) |
| 1 yard (yd) | = 3 feet = 36 inches |
| 1 mile (mi) | = 5,280 feet |

### Weight
| Unit | Conversion |
|------|-----------|
| 1 pound (lb) | = 16 ounces (oz) |
| 1 ton (T) | = 2,000 pounds |

### Capacity
| Unit | Conversion |
|------|-----------|
| 1 cup (c) | = 8 fluid ounces |
| 1 pint (pt) | = 2 cups |
| 1 quart (qt) | = 2 pints |
| 1 gallon (gal) | = 4 quarts |

## Metric Units

### Length
| Unit | Conversion |
|------|-----------|
| 1 kilometer (km) | = 1,000 meters (m) |
| 1 meter (m) | = 100 centimeters (cm) |
| 1 centimeter (cm) | = 10 millimeters (mm) |

### Mass
| Unit | Conversion |
|------|-----------|
| 1 kilogram (kg) | = 1,000 grams (g) |

### Capacity
| Unit | Conversion |
|------|-----------|
| 1 liter (L) | = 1,000 milliliters (mL) |

## Converting Units

**To convert to a smaller unit**: Multiply
**To convert to a larger unit**: Divide

**Example**: How many inches are in 3 feet?
$3 \\text{ ft} \\times 12 \\text{ in/ft} = 36 \\text{ in}$

**Example**: How many meters are in 450 cm?
$450 \\text{ cm} \\div 100 = 4.5 \\text{ m}$

> **Memory trick**: "King Henry Died By Drinking Chocolate Milk" → km, hm, dam, m, dm, cm, mm`
        },
        {
          title: 'Line Plots and Data',
          slug: 'line-plots-data-grade4',
          order: 1,
          description: 'Make and interpret line plots with fractions on the number line.',
          textContent: `# Line Plots and Data

## What Is a Line Plot?

A **line plot** (also called a dot plot) shows data on a number line. Each X or dot represents one data value.

## Making a Line Plot

1. Draw a number line with the range of your data
2. For each data value, place an X above that number
3. Stack X's when values repeat
4. Add a title and label

## Example

Heights of seedlings (in inches): $\\frac{1}{4}, \\frac{1}{2}, \\frac{1}{4}, \\frac{3}{4}, \\frac{1}{2}, \\frac{1}{2}, \\frac{1}{4}, 1, \\frac{3}{4}$

Plot these on a number line from 0 to 1, marking $\\frac{1}{4}, \\frac{1}{2}, \\frac{3}{4}, 1$.

## Reading Line Plots

From a line plot you can find:
- **Most common value** (mode): The value with the most X's
- **Range**: Highest value − Lowest value
- **Total**: Count all the X's
- **Clusters**: Where data groups together
- **Gaps**: Where there's no data

## Solving Problems with Line Plots

**Example**: If the line plot shows seedling heights, you might answer:
- How many seedlings were measured? (Count all X's)
- What was the most common height? (Tallest stack)
- What is the total height of all seedlings? (Add all values)

## Fractions on Line Plots

Line plots can show fractional values like $\\frac{1}{8}, \\frac{1}{4}, \\frac{3}{8}, \\frac{1}{2}$

To find the total of fractional data, add all the fractions:
$\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{2} = \\frac{1}{4} + \\frac{1}{4} + \\frac{2}{4} = \\frac{4}{4} = 1$

> **Practice**: Collect data about something in your class (shoe sizes, number of siblings) and make a line plot!`
        }
      ]
    },
    {
      categoryName: 'Word Problems',
      categorySlug: 'word-problems-g4',
      order: 7,
      topics: [
        {
          title: 'Multi-Step Word Problems',
          slug: 'multi-step-word-problems-grade4',
          order: 0,
          description: 'Solve multi-step word problems using addition, subtraction, multiplication, and division.',
          textContent: `# Multi-Step Word Problems

## Problem-Solving Strategy

1. **Read** the problem carefully
2. **Identify** what you need to find
3. **Plan** which operations to use
4. **Solve** step by step
5. **Check** — does your answer make sense?

## Example 1: Two Steps

*A bookstore has 245 science books and 318 math books. They sell 127 books total. How many books are left?*

Step 1: Find total books: $245 + 318 = 563$
Step 2: Subtract sold books: $563 - 127 = 436$ books left ✅

## Example 2: Mixed Operations

*A school orders 8 boxes of pencils. Each box has 24 pencils. They give 5 pencils to each of the 32 students. How many pencils are left over?*

Step 1: Total pencils: $8 \\times 24 = 192$
Step 2: Pencils given out: $32 \\times 5 = 160$
Step 3: Pencils left: $192 - 160 = 32$ pencils ✅

## Key Words

| Operation | Key Words |
|-----------|-----------|
| Add | total, sum, altogether, combined, in all, plus |
| Subtract | difference, how many more, left over, remaining, fewer |
| Multiply | times, each, every, per, groups of, rows of |
| Divide | split, shared equally, per group, how many groups |

## Using Estimation to Check

After solving, estimate to make sure your answer is reasonable:
- $245 + 318 \\approx 250 + 300 = 550$ ✓
- $563 - 127 \\approx 560 - 130 = 430$ ✓ (close to 436)

## Remainders in Division

When dividing, think about what the remainder means:
- *48 students split into groups of 5*: $48 \\div 5 = 9$ R $3$ → You need **10** groups (round up!)
- *Sharing 48 stickers among 5 friends*: Each gets **9** stickers, 3 are left over

> **Tip**: Draw a picture or diagram if the problem is confusing. Visualizing helps!`
        }
      ]
    }
  ]

  let topicCount = 0
  for (const exp of expansions) {
    const cat = await prisma.category.create({
      data: {
        name: exp.categoryName,
        slug: exp.categorySlug,
        order: exp.order,
        courseId: course.id
      }
    })
    console.log('  📂 Created category: ' + exp.categoryName)

    for (const t of exp.topics) {
      await prisma.topic.create({
        data: {
          title: t.title,
          slug: t.slug,
          description: t.description,
          textContent: t.textContent,
          order: t.order,
          categoryId: cat.id
        }
      })
      console.log('    ✅ ' + t.slug)
      topicCount++
    }
  }

  // Also add topics to existing categories
  const existingExpansions = [
    {
      categorySlug: 'fractions-g4',
      findByName: 'Fractions',
      topics: [
        {
          title: 'Adding and Subtracting Fractions',
          slug: 'adding-subtracting-fractions-grade4',
          order: 2,
          description: 'Add and subtract fractions with like denominators.',
          textContent: `# Adding and Subtracting Fractions

## Same Denominators

When fractions have the **same denominator** (like denominators), just add or subtract the **numerators**:

$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

$$\\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$$

## Examples

$$\\frac{2}{5} + \\frac{1}{5} = \\frac{2 + 1}{5} = \\frac{3}{5}$$

$$\\frac{7}{8} - \\frac{3}{8} = \\frac{7 - 3}{8} = \\frac{4}{8} = \\frac{1}{2}$$

**Always simplify** your answer if possible!

## Mixed Numbers

A **mixed number** has a whole number and a fraction: $2\\frac{3}{4}$

To add mixed numbers:
1. Add the whole numbers
2. Add the fractions
3. Simplify if needed

$$1\\frac{2}{5} + 2\\frac{1}{5} = 3\\frac{3}{5}$$

## When the Fraction Part Is Too Big

$$2\\frac{3}{4} + 1\\frac{3}{4} = 3\\frac{6}{4} = 3 + 1\\frac{2}{4} = 4\\frac{1}{2}$$

Since $\\frac{6}{4} = 1\\frac{2}{4} = 1\\frac{1}{2}$

## Fractions Greater Than 1

$$\\frac{5}{3} = 1\\frac{2}{3}$$

To convert: Divide the numerator by the denominator.
$5 \\div 3 = 1$ remainder $2$, so $\\frac{5}{3} = 1\\frac{2}{3}$

> **Rule**: You can only add or subtract fractions that have the same denominator. In Grade 5, you'll learn how to handle different denominators!`
        },
        {
          title: 'Multiplying Fractions by Whole Numbers',
          slug: 'multiplying-fractions-whole-numbers-grade4',
          order: 3,
          description: 'Multiply a fraction by a whole number.',
          textContent: `# Multiplying Fractions by Whole Numbers

## The Idea

Multiplying a fraction by a whole number means adding that fraction multiple times:

$$3 \\times \\frac{2}{5} = \\frac{2}{5} + \\frac{2}{5} + \\frac{2}{5} = \\frac{6}{5} = 1\\frac{1}{5}$$

## The Shortcut

$$n \\times \\frac{a}{b} = \\frac{n \\times a}{b}$$

Multiply the whole number by the numerator. The denominator stays the same.

## Examples

$$4 \\times \\frac{3}{8} = \\frac{4 \\times 3}{8} = \\frac{12}{8} = \\frac{3}{2} = 1\\frac{1}{2}$$

$$5 \\times \\frac{1}{3} = \\frac{5}{3} = 1\\frac{2}{3}$$

$$6 \\times \\frac{2}{7} = \\frac{12}{7} = 1\\frac{5}{7}$$

## Word Problems

*Each person eats $\\frac{3}{8}$ of a pizza. How much pizza do 4 people eat?*

$$4 \\times \\frac{3}{8} = \\frac{12}{8} = 1\\frac{4}{8} = 1\\frac{1}{2} \\text{ pizzas}$$

## Simplifying

Always simplify your final answer:
- $\\frac{12}{8} = \\frac{3}{2} = 1\\frac{1}{2}$ ✅
- Divide numerator and denominator by their GCF

> **Visual model**: Draw a number line from 0 to 2. Show $\\frac{2}{5}$ three times by jumping $\\frac{2}{5}$ each time. You land at $\\frac{6}{5} = 1\\frac{1}{5}$.`
        }
      ]
    }
  ]

  for (const exp of existingExpansions) {
    const cat = await prisma.category.findFirst({
      where: { courseId: course.id, name: exp.findByName }
    })
    if (!cat) { console.log('  ⚠️ Category not found: ' + exp.findByName); continue }

    for (const t of exp.topics) {
      await prisma.topic.create({
        data: {
          title: t.title,
          slug: t.slug,
          description: t.description,
          textContent: t.textContent,
          order: t.order,
          categoryId: cat.id
        }
      })
      console.log('    ✅ ' + t.slug + ' (added to existing category)')
      topicCount++
    }
  }

  console.log('\n🎉 Grade 4 Math expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
