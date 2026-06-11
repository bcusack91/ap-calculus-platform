import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Grade 6 Math to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'grade-6-math' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Ratios and Proportional Relationships',
      categorySlug: 'ratios-proportions-g6',
      order: 0,
      topics: [
        {
          title: 'Understanding Ratios', slug: 'understanding-ratios-grade6', order: 0,
          description: 'Use ratio language and notation to describe relationships between quantities.',
          textContent: `# Understanding Ratios

## What Is a Ratio?

A **ratio** compares two quantities. It tells you how much of one thing there is compared to another.

## Ways to Write Ratios

The ratio of 3 dogs to 5 cats can be written:
- $3$ to $5$
- $3 : 5$
- $\\frac{3}{5}$

## Types of Ratios

- **Part to part**: 3 dogs to 5 cats
- **Part to whole**: 3 dogs to 8 total animals
- **Whole to part**: 8 animals to 3 dogs

## Equivalent Ratios

Equivalent ratios show the same relationship:
$$2 : 3 = 4 : 6 = 6 : 9 = 10 : 15$$

To find equivalent ratios, **multiply or divide both parts** by the same number.

## Ratio Tables

| Red Paint | Blue Paint |
|-----------|-----------|
| 2 | 3 |
| 4 | 6 |
| 6 | 9 |
| 8 | 12 |

The ratio $2 : 3$ is maintained throughout.

## Unit Rate

A **unit rate** has a denominator of 1:
- If 6 apples cost \\$3, the unit rate is $\\frac{\\$3}{6} = \\$0.50$ per apple

## Tape Diagrams

A **tape diagram** (or bar model) visualizes ratios:

For the ratio $2 : 3$:
- Draw 2 equal boxes for the first quantity
- Draw 3 equal boxes for the second quantity

If the total is 25:
- Each box = $25 \\div 5 = 5$
- First quantity = $2 \\times 5 = 10$
- Second quantity = $3 \\times 5 = 15$

> **Real world**: Recipes use ratios! If a recipe uses 2 cups flour and 1 cup sugar, the ratio is $2:1$. To double the recipe, use $4:2$.`
        },
        {
          title: 'Rates and Unit Rates', slug: 'rates-unit-rates-grade6', order: 1,
          description: 'Calculate and compare unit rates to solve problems.',
          textContent: `# Rates and Unit Rates

## What Is a Rate?

A **rate** is a ratio that compares two quantities with **different units**.

Examples: miles per hour, dollars per pound, words per minute

## Unit Rate

A **unit rate** is a rate with a denominator of **1**.

**Finding a unit rate**: Divide the first quantity by the second.

**Example**: A car travels 240 miles in 4 hours.
$$\\text{Unit rate} = \\frac{240 \\text{ miles}}{4 \\text{ hours}} = 60 \\text{ miles per hour}$$

## Comparing Unit Rates

*Store A: 5 apples for \\$3.00. Store B: 8 apples for \\$4.40.*

Store A: $\\frac{\\$3.00}{5} = \\$0.60$ per apple
Store B: $\\frac{\\$4.40}{8} = \\$0.55$ per apple

**Store B is the better deal!** (lower cost per apple)

## Unit Price

The **unit price** tells the cost per single item:
$$\\text{Unit price} = \\frac{\\text{Total cost}}{\\text{Number of items}}$$

## Speed, Distance, and Time

$$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$$

$$\\text{Distance} = \\text{Speed} \\times \\text{Time}$$

$$\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$$

**Example**: How far does a car going 55 mph travel in 3 hours?
$$55 \\times 3 = 165 \\text{ miles}$$

## Percent as a Rate

A percent is a rate per 100:
- 75% = $\\frac{75}{100}$ = 0.75

> **Consumer tip**: Always compare unit prices when shopping! The biggest package isn't always the best deal.`
        }
      ]
    },
    {
      categoryName: 'The Number System',
      categorySlug: 'number-system-g6',
      order: 2,
      topics: [
        {
          title: 'Integers and the Number Line', slug: 'integers-number-line-grade6', order: 0,
          description: 'Understand positive and negative numbers, absolute value, and ordering on a number line.',
          textContent: `# Integers and the Number Line

## What Are Integers?

**Integers** are whole numbers and their opposites:
$$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$$

- **Positive integers**: $1, 2, 3, \\ldots$ (to the right of 0)
- **Negative integers**: $-1, -2, -3, \\ldots$ (to the left of 0)
- **Zero** is neither positive nor negative

## The Number Line

$$\\leftarrow \\;\\; -5 \\;\\; -4 \\;\\; -3 \\;\\; -2 \\;\\; -1 \\;\\; 0 \\;\\; 1 \\;\\; 2 \\;\\; 3 \\;\\; 4 \\;\\; 5 \\;\\; \\rightarrow$$

Numbers **increase** from left to right.

## Comparing Integers

Use $<$, $>$, or $=$:
- $3 > -5$ (3 is to the right of -5)
- $-2 > -7$ (-2 is to the right of -7)
- $-4 < 1$ (-4 is to the left of 1)

## Absolute Value

The **absolute value** $|x|$ is the distance from zero on the number line.

$$|5| = 5 \\quad |{-5}| = 5 \\quad |0| = 0$$

Absolute value is always **non-negative** (≥ 0).

## Opposites

Two numbers are **opposites** if they are the same distance from zero on opposite sides:
- The opposite of $4$ is $-4$
- The opposite of $-7$ is $7$
- The opposite of $0$ is $0$

## Ordering Integers

Order from least to greatest: $-8, 3, -1, 5, -3, 0$

Answer: $-8, -3, -1, 0, 3, 5$

## Real-World Negative Numbers

- Temperature: $-10°$F (below zero)
- Elevation: $-200$ ft (below sea level)
- Money: $-\\$50$ (debt)

> **Remember**: A negative number is ALWAYS less than a positive number. Among negatives, the number with the bigger absolute value is actually smaller: $-10 < -3$.`
        },
        {
          title: 'Operations with Integers', slug: 'integer-operations-grade6', order: 1,
          description: 'Add, subtract, multiply, and divide positive and negative integers.',
          textContent: `# Operations with Integers

## Adding Integers

**Same signs**: Add absolute values, keep the sign.
$$5 + 3 = 8 \\qquad (-5) + (-3) = -8$$

**Different signs**: Subtract absolute values, keep the sign of the larger absolute value.
$$5 + (-3) = 2 \\qquad (-5) + 3 = -2$$

## Subtracting Integers

**Change to addition**: Add the **opposite** of the second number.
$$a - b = a + (-b)$$

**Examples**:
$$7 - 10 = 7 + (-10) = -3$$
$$-4 - 3 = -4 + (-3) = -7$$
$$-2 - (-6) = -2 + 6 = 4$$

## Multiplying Integers

| Signs | Result |
|-------|--------|
| $(+)(+)$ | Positive |
| $(-)(-)$ | Positive |
| $(+)(-)$ | Negative |
| $(-)(+)$ | Negative |

**Same signs → positive, different signs → negative**

$$(-3)(-4) = 12 \\qquad (-3)(4) = -12$$

## Dividing Integers

Same rules as multiplication:
$$(-12) \\div (-3) = 4 \\qquad (-12) \\div 3 = -4$$

## Order of Operations with Integers

Follow PEMDAS: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right).

$$-3 + 4 \\times (-2) = -3 + (-8) = -11$$

> **Tip**: "Two negatives make a positive" only applies to multiplication and division, NOT addition!`
        }
      ]
    },
    {
      categoryName: 'Expressions and Equations',
      categorySlug: 'expressions-equations-g6',
      order: 3,
      topics: [
        {
          title: 'Writing and Evaluating Expressions', slug: 'writing-evaluating-expressions-grade6', order: 0,
          description: 'Write, read, and evaluate algebraic expressions with variables.',
          textContent: `# Writing and Evaluating Expressions

## Variables

A **variable** is a letter that represents an unknown number: $x$, $y$, $n$, etc.

## Algebraic Expressions

An **expression** combines numbers, variables, and operations:
- $3x + 5$ means "3 times $x$ plus 5"
- $2(n - 4)$ means "2 times the quantity $n$ minus 4"

## Translating Words to Expressions

| Words | Expression |
|-------|-----------|
| A number plus 7 | $n + 7$ |
| 5 less than a number | $n - 5$ |
| 3 times a number | $3n$ |
| A number divided by 4 | $\\frac{n}{4}$ |
| Twice a number increased by 1 | $2n + 1$ |

## Evaluating Expressions

**Substitute** the given value and compute:

Evaluate $3x + 7$ when $x = 4$:
$$3(4) + 7 = 12 + 7 = 19$$

Evaluate $x^2 - 2x$ when $x = 5$:
$$5^2 - 2(5) = 25 - 10 = 15$$

## Parts of an Expression

- **Term**: Parts separated by $+$ or $-$ signs
- **Coefficient**: The number multiplied by a variable ($3x$ → coefficient is 3)
- **Constant**: A term without a variable ($+5$)

In $4x + 3y - 7$:
- Terms: $4x$, $3y$, $-7$
- Coefficients: 4, 3
- Constant: $-7$

## Properties

- **Commutative**: $a + b = b + a$ and $ab = ba$
- **Associative**: $(a + b) + c = a + (b + c)$
- **Distributive**: $a(b + c) = ab + ac$

> **Remember**: $5n$ means $5 \\times n$. In algebra, we usually skip the multiplication sign.`
        },
        {
          title: 'Solving One-Step Equations', slug: 'one-step-equations-grade6', order: 1,
          description: 'Solve one-step equations using inverse operations.',
          textContent: `# Solving One-Step Equations

## What Is an Equation?

An **equation** has an equal sign and says two expressions are equal:
$$x + 5 = 12$$

## Solving with Inverse Operations

To solve, **undo** the operation using its inverse:

| Operation | Inverse |
|-----------|---------|
| Addition | Subtraction |
| Subtraction | Addition |
| Multiplication | Division |
| Division | Multiplication |

## Addition Equations

$$x + 5 = 12$$
$$x + 5 - 5 = 12 - 5$$
$$x = 7$$ ✅

**Check**: $7 + 5 = 12$ ✓

## Subtraction Equations

$$n - 3 = 8$$
$$n - 3 + 3 = 8 + 3$$
$$n = 11$$ ✅

## Multiplication Equations

$$4x = 20$$
$$\\frac{4x}{4} = \\frac{20}{4}$$
$$x = 5$$ ✅

## Division Equations

$$\\frac{x}{3} = 6$$
$$\\frac{x}{3} \\times 3 = 6 \\times 3$$
$$x = 18$$ ✅

## The Balance Model

Think of an equation as a **balance scale**:
- Whatever you do to one side, you must do to the other
- The goal is to get the variable **alone** on one side

## Writing Equations from Word Problems

*"A number increased by 7 equals 15"*
$$n + 7 = 15 \\implies n = 8$$

*"Three times a number is 24"*
$$3n = 24 \\implies n = 8$$

> **Always check** your answer by substituting it back into the original equation!`
        }
      ]
    },
    {
      categoryName: 'Statistics and Data',
      categorySlug: 'statistics-data-g6',
      order: 5,
      topics: [
        {
          title: 'Mean, Median, Mode, and Range', slug: 'mean-median-mode-range-grade6', order: 0,
          description: 'Calculate and interpret measures of center and variability for data sets.',
          textContent: `# Mean, Median, Mode, and Range

## Mean (Average)

Add all values and divide by the number of values:

$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

**Example**: Data: $4, 7, 9, 3, 12$
$$\\text{Mean} = \\frac{4 + 7 + 9 + 3 + 12}{5} = \\frac{35}{5} = 7$$

## Median (Middle Value)

1. Put values in **order** from least to greatest
2. Find the **middle** value

**Odd number of values**: $3, 4, 7, 9, 12$ → Median = $7$

**Even number of values**: $3, 4, 7, 9$ → Median = $\\frac{4 + 7}{2} = 5.5$

## Mode (Most Common)

The value that appears **most often**.

**Example**: $2, 3, 3, 5, 7, 3, 8$ → Mode = $3$

A data set can have:
- One mode
- More than one mode (bimodal, multimodal)
- No mode (all values appear once)

## Range (Spread)

$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$

**Example**: $3, 4, 7, 9, 12$ → Range = $12 - 3 = 9$

## Which Measure to Use?

| Situation | Best Measure |
|-----------|-------------|
| Symmetric data, no outliers | Mean |
| Skewed data or outliers | Median |
| Categorical data | Mode |
| How spread out | Range |

## Effect of Outliers

An **outlier** is a value much larger or smaller than the rest.

Data: $5, 6, 7, 8, 100$
- Mean = $\\frac{126}{5} = 25.2$ (pulled up by outlier)
- Median = $7$ (not affected)

> **Key idea**: The mean is sensitive to outliers; the median is resistant to outliers.`
        },
        {
          title: 'Data Displays', slug: 'data-displays-grade6', order: 1,
          description: 'Create and interpret histograms, box plots, and dot plots.',
          textContent: `# Data Displays

## Dot Plots (Line Plots)

Each dot represents one data value placed above a number line.

**Best for**: Small data sets, seeing individual values, identifying clusters and gaps.

## Histograms

Bars show the frequency of data in **intervals** (bins).

**How to make a histogram**:
1. Choose equal-width intervals
2. Count values in each interval (frequency)
3. Draw bars (no gaps between bars!)

**Reading histograms**: The height shows how many values fall in each interval.

**Best for**: Large data sets, seeing the shape of a distribution.

## Box Plots (Box-and-Whisker Plots)

A box plot shows the **five-number summary**:
1. **Minimum** (smallest value)
2. **Q1** (first quartile — 25th percentile)
3. **Median** (middle — 50th percentile)
4. **Q3** (third quartile — 75th percentile)
5. **Maximum** (largest value)

The **box** spans from Q1 to Q3. The **whiskers** extend to the min and max.

## IQR (Interquartile Range)

$$IQR = Q_3 - Q_1$$

The IQR measures the spread of the **middle 50%** of the data.

## Choosing the Right Display

| Display | Use When |
|---------|----------|
| Dot plot | Small data set, see individual values |
| Histogram | Large data set, see distribution shape |
| Box plot | Compare distributions, see spread |
| Bar graph | Categorical data |
| Circle graph | Parts of a whole |

## Describing Distributions

Use **shape**, **center**, and **spread**:
- Shape: symmetric, skewed left, skewed right
- Center: mean or median
- Spread: range or IQR

> **Remember**: Histograms have **no gaps** between bars (quantitative data). Bar graphs **do** have gaps (categorical data).`
        }
      ]
    },
    {
      categoryName: 'Geometry: Area and Volume',
      categorySlug: 'geometry-area-volume-g6',
      order: 4,
      topics: [
        {
          title: 'Area of Polygons', slug: 'area-polygons-grade6', order: 0,
          description: 'Find the area of triangles, parallelograms, and composite shapes.',
          textContent: `# Area of Polygons

## Area Formulas

### Rectangle
$$A = l \\times w$$

### Parallelogram
$$A = b \\times h$$
where $b$ = base and $h$ = **perpendicular** height (not the slant side!)

### Triangle
$$A = \\frac{1}{2} \\times b \\times h$$
A triangle is **half** of a parallelogram.

### Trapezoid
$$A = \\frac{1}{2}(b_1 + b_2) \\times h$$
where $b_1$ and $b_2$ are the two parallel bases.

## Composite Shapes

Break complex shapes into rectangles, triangles, etc. Find each area, then **add** (or subtract).

**Example**: An L-shaped room can be split into two rectangles.

Rectangle 1: $8 \\times 5 = 40$ sq ft
Rectangle 2: $6 \\times 3 = 18$ sq ft
Total area: $40 + 18 = 58$ sq ft

## Area on the Coordinate Plane

Plot the vertices on a coordinate plane, then use the appropriate formula or count grid squares.

## Units

Area is always in **square units**: $\\text{cm}^2$, $\\text{ft}^2$, $\\text{m}^2$, etc.

> **Common mistake**: For parallelograms and triangles, use the **height** (perpendicular to the base), not the slant side!`
        },
        {
          title: 'Surface Area and Volume', slug: 'surface-area-volume-grade6', order: 1,
          description: 'Find the surface area and volume of rectangular prisms.',
          textContent: `# Surface Area and Volume

## Nets

A **net** is a 2D pattern that folds into a 3D shape.

A rectangular prism's net has **6 rectangles** (3 pairs of identical faces).

## Surface Area

**Surface area** = total area of all faces of a 3D shape.

### Rectangular Prism
$$SA = 2lw + 2lh + 2wh$$

**Example**: $l = 5$, $w = 3$, $h = 4$
$$SA = 2(5)(3) + 2(5)(4) + 2(3)(4)$$
$$= 30 + 40 + 24 = 94 \\text{ sq units}$$

### Cube
$$SA = 6s^2$$

## Volume

**Volume** = amount of space inside a 3D shape (measured in **cubic units**).

### Rectangular Prism
$$V = l \\times w \\times h$$

**Example**: $l = 5$, $w = 3$, $h = 4$
$$V = 5 \\times 3 \\times 4 = 60 \\text{ cubic units}$$

### Cube
$$V = s^3$$

### With Fractional Edges
$$V = 2\\frac{1}{2} \\times 3 \\times 1\\frac{1}{2} = \\frac{5}{2} \\times 3 \\times \\frac{3}{2} = \\frac{45}{4} = 11\\frac{1}{4}$$

## Units

- Surface area: square units ($\\text{cm}^2$, $\\text{in}^2$)
- Volume: cubic units ($\\text{cm}^3$, $\\text{in}^3$, $\\text{ft}^3$)

> **Remember**: Surface area tells you how much **wrapping paper** you need. Volume tells you how much **stuff** fits inside.`
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
  console.log('\n🎉 Grade 6 Math expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
