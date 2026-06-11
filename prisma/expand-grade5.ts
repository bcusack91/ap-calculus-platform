import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Grade 5 Math to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'grade-5-math' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Operations with Whole Numbers',
      categorySlug: 'operations-whole-numbers-g5',
      order: 0,
      topics: [
        {
          title: 'Multi-Digit Multiplication', slug: 'multi-digit-multiplication-grade5', order: 0,
          description: 'Multiply multi-digit whole numbers using the standard algorithm.',
          textContent: `# Multi-Digit Multiplication

## The Standard Algorithm

To multiply large numbers, use **partial products** or the standard algorithm.

**Example**: $346 \\times 28$

Step 1: Multiply 346 by 8 (ones digit):
$346 \\times 8 = 2,768$

Step 2: Multiply 346 by 20 (tens digit):
$346 \\times 20 = 6,920$

Step 3: Add the partial products:
$2,768 + 6,920 = 9,688$

So $346 \\times 28 = 9,688$ ✅

## Estimating Products

Round factors to estimate:
$346 \\times 28 \\approx 350 \\times 30 = 10,500$ (close to 9,688 ✓)

## Properties of Multiplication

- **Commutative**: $a \\times b = b \\times a$
- **Associative**: $(a \\times b) \\times c = a \\times (b \\times c)$
- **Distributive**: $a \\times (b + c) = a \\times b + a \\times c$

**Using the distributive property**:
$7 \\times 98 = 7 \\times (100 - 2) = 700 - 14 = 686$

## Powers of 10

- $10^1 = 10$ (one zero)
- $10^2 = 100$ (two zeros)
- $10^3 = 1,000$ (three zeros)

To multiply by a power of 10, **add zeros**:
$45 \\times 1,000 = 45,000$

> **Check**: Your product should have approximately as many digits as the sum of digits in both factors.`
        },
        {
          title: 'Multi-Digit Division', slug: 'multi-digit-division-grade5', order: 1,
          description: 'Divide multi-digit numbers using the standard algorithm.',
          textContent: `# Multi-Digit Division

## Long Division Steps: Divide, Multiply, Subtract, Bring Down

Remember: **D**oes **M**cDonald's **S**ell **B**urgers?

**Example**: $1,365 \\div 5$

1. **Divide**: $13 \\div 5 = 2$ (write 2 above)
2. **Multiply**: $2 \\times 5 = 10$
3. **Subtract**: $13 - 10 = 3$
4. **Bring down**: Bring down the 6 → 36
5. Repeat: $36 \\div 5 = 7$, $7 \\times 5 = 35$, $36 - 35 = 1$
6. Bring down 5 → 15: $15 \\div 5 = 3$

Answer: $1,365 \\div 5 = 273$ ✅

## Division with Remainders

$247 \\div 6 = 41$ R $1$

Check: $41 \\times 6 + 1 = 246 + 1 = 247$ ✓

## Interpreting Remainders

The remainder's meaning depends on context:
- **Drop it**: "How many full boxes?" → Use quotient only
- **Round up**: "How many buses needed?" → Add 1 to quotient
- **Use as fraction**: "Share equally" → $41\\frac{1}{6}$

## Dividing by Two-Digit Numbers

**Example**: $7,344 \\div 24$

Estimate: $7,200 \\div 24 = 300$

Use long division to get exact answer: $7,344 \\div 24 = 306$

## Checking Division

Always check: $\\text{quotient} \\times \\text{divisor} + \\text{remainder} = \\text{dividend}$

> **Estimation tip**: Round the divisor to the nearest ten to estimate each step of long division.`
        }
      ]
    },
    {
      categoryName: 'Fraction Operations',
      categorySlug: 'fraction-operations-g5',
      order: 2,
      topics: [
        {
          title: 'Adding Fractions with Unlike Denominators', slug: 'adding-unlike-fractions-grade5', order: 0,
          description: 'Add fractions with unlike denominators by finding common denominators.',
          textContent: `# Adding Fractions with Unlike Denominators

## Finding a Common Denominator

To add fractions with **different denominators**, first find a **common denominator** — a number both denominators divide into evenly.

$$\\frac{1}{3} + \\frac{1}{4}$$

The **least common denominator (LCD)** of 3 and 4 is **12**.

## Steps

1. Find the LCD
2. Write equivalent fractions with the LCD
3. Add the numerators
4. Simplify if needed

$$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

## More Examples

$$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$$

$$\\frac{3}{4} + \\frac{5}{6} = \\frac{9}{12} + \\frac{10}{12} = \\frac{19}{12} = 1\\frac{7}{12}$$

## Adding Mixed Numbers

$$2\\frac{1}{3} + 1\\frac{3}{4}$$

1. Convert fractions to common denominator: $\\frac{1}{3} = \\frac{4}{12}$, $\\frac{3}{4} = \\frac{9}{12}$
2. Add whole numbers: $2 + 1 = 3$
3. Add fractions: $\\frac{4}{12} + \\frac{9}{12} = \\frac{13}{12} = 1\\frac{1}{12}$
4. Combine: $3 + 1\\frac{1}{12} = 4\\frac{1}{12}$

## Subtracting with Unlike Denominators

Same process — find LCD, convert, then **subtract** numerators:

$$\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$

> **Finding LCD**: List multiples of each denominator until you find a match. For 3: 3, 6, 9, 12... For 4: 4, 8, 12... LCD = 12!`
        },
        {
          title: 'Multiplying and Dividing Fractions', slug: 'multiply-divide-fractions-grade5', order: 1,
          description: 'Multiply fractions by fractions and divide fractions using reciprocals.',
          textContent: `# Multiplying and Dividing Fractions

## Multiplying Fractions

Multiply **numerator × numerator** and **denominator × denominator**:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Example**: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$

## Simplify Before Multiplying (Cross-Cancel)

$$\\frac{3}{4} \\times \\frac{8}{9}$$

Cancel the 3 and 9 (divide by 3): $\\frac{1}{4} \\times \\frac{8}{3}$
Cancel the 4 and 8 (divide by 4): $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$

## Multiplying Mixed Numbers

Convert to **improper fractions** first:

$$2\\frac{1}{3} \\times 1\\frac{1}{2} = \\frac{7}{3} \\times \\frac{3}{2} = \\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$$

## Dividing Fractions

To divide by a fraction, **multiply by the reciprocal** (flip the second fraction):

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

**Keep, Change, Flip!**

$$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$

## What Division Means

$\\frac{3}{4} \\div \\frac{1}{2}$ means: "How many halves fit in $\\frac{3}{4}$?"

Answer: $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = 1\\frac{1}{2}$ halves

## Word Problems

*A recipe calls for $\\frac{3}{4}$ cup of flour. You want to make $\\frac{1}{2}$ the recipe. How much flour?*

$\\frac{1}{2} \\times \\frac{3}{4} = \\frac{3}{8}$ cup of flour

> **Remember**: "Of" means multiply! "$\\frac{1}{2}$ of $\\frac{3}{4}$" = $\\frac{1}{2} \\times \\frac{3}{4}$`
        }
      ]
    },
    {
      categoryName: 'Decimal Operations',
      categorySlug: 'decimal-operations-g5',
      order: 3,
      topics: [
        {
          title: 'Multiplying Decimals', slug: 'multiplying-decimals-grade5', order: 0,
          description: 'Multiply decimals using the standard algorithm.',
          textContent: `# Multiplying Decimals

## Steps

1. **Ignore** the decimal points and multiply as whole numbers
2. **Count** the total decimal places in both factors
3. **Place** the decimal point in the product (same total number of decimal places)

## Example

$2.4 \\times 1.3$

1. Multiply: $24 \\times 13 = 312$
2. Count decimal places: $2.4$ has 1, $1.3$ has 1 → total = 2
3. Place decimal: $3.12$

So $2.4 \\times 1.3 = 3.12$ ✅

## More Examples

$0.6 \\times 0.7$:
- $6 \\times 7 = 42$
- 2 decimal places → $0.42$ ✅

$3.25 \\times 4.1$:
- $325 \\times 41 = 13,325$
- 3 decimal places → $13.325$ ✅

## Multiplying by 10, 100, 1000

- Multiply by 10: move decimal **right 1** place ($3.45 \\times 10 = 34.5$)
- Multiply by 100: move decimal **right 2** places ($3.45 \\times 100 = 345$)
- Multiply by 1000: move decimal **right 3** places ($3.45 \\times 1000 = 3450$)

## Estimation

$4.8 \\times 3.2 \\approx 5 \\times 3 = 15$
Actual answer: $15.36$ ✓ (close!)

> **Quick check**: If both factors are less than 1, the product is **less** than either factor: $0.3 \\times 0.5 = 0.15$`
        },
        {
          title: 'Dividing Decimals', slug: 'dividing-decimals-grade5', order: 1,
          description: 'Divide decimals by whole numbers and by other decimals.',
          textContent: `# Dividing Decimals

## Dividing a Decimal by a Whole Number

Place the decimal point in the quotient **directly above** the decimal point in the dividend, then divide normally.

**Example**: $8.64 \\div 4$

$8.64 \\div 4 = 2.16$ ✅

## Dividing by a Decimal

Make the divisor a **whole number** first:

1. Move the decimal point in the **divisor** to the right to make it a whole number
2. Move the decimal point in the **dividend** the same number of places
3. Divide normally

**Example**: $7.56 \\div 0.6$
- Move both decimals 1 place right: $75.6 \\div 6$
- Divide: $75.6 \\div 6 = 12.6$ ✅

## Dividing by 10, 100, 1000

- Divide by 10: move decimal **left 1** place ($34.5 \\div 10 = 3.45$)
- Divide by 100: move decimal **left 2** places ($345 \\div 100 = 3.45$)
- Divide by 1000: move decimal **left 3** places ($3450 \\div 1000 = 3.45$)

## Adding Zeros

Sometimes you need to **add zeros** to keep dividing:

$5 \\div 4 = 1.25$
(Add decimal point and zeros: $5.00 \\div 4 = 1.25$)

## Estimation

$8.7 \\div 2.9 \\approx 9 \\div 3 = 3$
Actual: $8.7 \\div 2.9 = 3$ ✓

> **Tip**: Always check by multiplying: $12.6 \\times 0.6 = 7.56$ ✓`
        }
      ]
    },
    {
      categoryName: 'Coordinate Plane',
      categorySlug: 'coordinate-plane-g5',
      order: 5,
      topics: [
        {
          title: 'Graphing on the Coordinate Plane', slug: 'coordinate-plane-graphing-grade5', order: 0,
          description: 'Plot and identify points on the coordinate plane in the first quadrant.',
          textContent: `# Graphing on the Coordinate Plane

## The Coordinate Plane

The **coordinate plane** is formed by two number lines that cross at the **origin** (0, 0):
- **x-axis**: The horizontal number line
- **y-axis**: The vertical number line

## Ordered Pairs

A point is located by an **ordered pair** $(x, y)$:
- $x$ = how far **right** (horizontal)
- $y$ = how far **up** (vertical)

**Example**: $(3, 5)$ means go right 3 and up 5.

## Plotting Points

To plot $(4, 2)$:
1. Start at the origin $(0, 0)$
2. Move **right 4** along the x-axis
3. Move **up 2** from there
4. Mark the point

## The Origin

$(0, 0)$ is where the axes cross. It's the starting point for all plotting.

## Practice Points

| Point | x | y | Description |
|-------|---|---|-------------|
| $A = (1, 3)$ | 1 | 3 | Right 1, up 3 |
| $B = (4, 0)$ | 4 | 0 | Right 4, on x-axis |
| $C = (0, 5)$ | 0 | 5 | On y-axis, up 5 |
| $D = (2, 2)$ | 2 | 2 | Right 2, up 2 |

## Patterns on the Coordinate Plane

Plotting number pattern pairs creates shapes and lines:
- $(1, 2), (2, 4), (3, 6), (4, 8)$ → makes a straight line (rule: $y = 2x$)

## Real-World Uses

Maps use a grid system just like the coordinate plane! "Meet me at the corner of 3rd Street and 5th Avenue" is like saying $(3, 5)$.

> **Memory trick**: Think of it as a house: you walk **across** the floor first (x), then climb the **stairs** (y). "Run before you rise!"`
        }
      ]
    },
    {
      categoryName: 'Measurement and Volume',
      categorySlug: 'measurement-volume-g5',
      order: 4,
      topics: [
        {
          title: 'Converting Measurement Units', slug: 'converting-units-grade5', order: 0,
          description: 'Convert between different measurement units within a measurement system.',
          textContent: `# Converting Measurement Units

## Converting Within the Metric System

The metric system is based on powers of 10:

**Larger → Smaller**: Multiply
**Smaller → Larger**: Divide

| Conversion | Formula |
|-----------|---------|
| km → m | $\\times 1,000$ |
| m → cm | $\\times 100$ |
| cm → mm | $\\times 10$ |
| kg → g | $\\times 1,000$ |
| L → mL | $\\times 1,000$ |

**Examples**:
- $3.5$ km $= 3.5 \\times 1,000 = 3,500$ m
- $250$ cm $= 250 \\div 100 = 2.5$ m

## Converting Within Customary Units

| Conversion | Formula |
|-----------|---------|
| ft → in | $\\times 12$ |
| yd → ft | $\\times 3$ |
| lb → oz | $\\times 16$ |
| gal → qt | $\\times 4$ |
| qt → pt | $\\times 2$ |
| pt → cups | $\\times 2$ |

**Examples**:
- $4$ ft $= 4 \\times 12 = 48$ in
- $3$ gal $= 3 \\times 4 = 12$ qt

## Multi-Step Conversions

$5$ yards to inches:
$5$ yd $\\times 3 = 15$ ft $\\times 12 = 180$ in

## Using Tables

| Hours | Minutes |
|-------|---------|
| 1 | 60 |
| 2 | 120 |
| 3 | 180 |
| 4 | 240 |

Pattern: Multiply hours by 60

> **Remember**: When converting to a **smaller** unit, you get a **bigger** number. When converting to a **bigger** unit, you get a **smaller** number.`
        }
      ]
    }
  ]

  let topicCount = 0
  for (const exp of expansions) {
    const cat = await prisma.category.create({
      data: { name: exp.categoryName, slug: exp.categorySlug, order: exp.order, courseId: course.id }
    })
    console.log('  📂 Created category: ' + exp.categoryName)
    for (const t of exp.topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: cat.id }
      })
      console.log('    ✅ ' + t.slug)
      topicCount++
    }
  }
  console.log('\n🎉 Grade 5 Math expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
