import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Grade 7 Math to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'grade-7-math' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Proportional Relationships',
      categorySlug: 'proportional-relationships-g7',
      order: 0,
      topics: [
        { title: 'Unit Rates with Fractions', slug: 'unit-rates-fractions-grade7', order: 0,
          description: 'Compute unit rates associated with ratios of fractions.',
          textContent: `# Unit Rates with Fractions

## Unit Rates with Complex Fractions

A **unit rate** tells how much of one quantity per **1 unit** of another.

With fractions, divide the numerator fraction by the denominator fraction.

**Example**: A snail travels $\\frac{3}{4}$ mile in $\\frac{1}{2}$ hour. What is its speed?

$$\\text{Speed} = \\frac{\\frac{3}{4} \\text{ mi}}{\\frac{1}{2} \\text{ hr}} = \\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = 1\\frac{1}{2} \\text{ mph}$$

## Constant of Proportionality

In a proportional relationship $y = kx$, the **constant of proportionality** $k$ is the unit rate.

| $x$ | $y$ | $\\frac{y}{x}$ |
|-----|-----|------|
| 2 | 6 | 3 |
| 4 | 12 | 3 |
| 5 | 15 | 3 |

$k = 3$, so $y = 3x$

## Identifying Proportional Relationships

A relationship is proportional if:
1. The graph is a **straight line through the origin**
2. The ratio $\\frac{y}{x}$ is **constant** for all pairs
3. It can be written as $y = kx$

## Graphs of Proportional Relationships

- Always pass through $(0, 0)$
- The unit rate $k$ is the **slope** of the line
- Steeper line = larger unit rate

> **Real world**: Recipes, maps, currency exchange, and speed are all proportional relationships!`
        },
        { title: 'Scale Drawings', slug: 'scale-drawings-grade7', order: 1,
          description: 'Use scale drawings and scale factors to solve problems.',
          textContent: `# Scale Drawings

## What Is a Scale Drawing?

A **scale drawing** is a proportional representation of an object (larger or smaller).

The **scale** tells the ratio of the drawing size to actual size.

## Scale Factor

$$\\text{Scale factor} = \\frac{\\text{Drawing measurement}}{\\text{Actual measurement}}$$

**Example**: Scale of $1 \\text{ in} : 50 \\text{ ft}$

If a room is 3 inches on the drawing:
$$\\text{Actual length} = 3 \\times 50 = 150 \\text{ ft}$$

## Finding Actual Dimensions

If scale is $1 : 200$ and drawing length is 4 cm:
$$\\text{Actual} = 4 \\times 200 = 800 \\text{ cm} = 8 \\text{ m}$$

## Finding Drawing Dimensions

If scale is $1 \\text{ cm} : 5 \\text{ m}$ and actual length is 30 m:
$$\\text{Drawing} = 30 \\div 5 = 6 \\text{ cm}$$

## Scale Factor and Area

If the scale factor for length is $k$, then:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$

If a room is 3× bigger in each dimension, its area is $3^2 = 9$ times bigger!

## Maps

Maps use scales like $1 \\text{ in} = 10 \\text{ miles}$.

If two cities are 4.5 inches apart on the map:
$$4.5 \\times 10 = 45 \\text{ miles apart}$$

> **Practice**: Measure your room and create a scale drawing using a scale of 1 cm = 1 foot.`
        }
      ]
    },
    {
      categoryName: 'Expressions and Equations',
      categorySlug: 'expressions-equations-g7',
      order: 2,
      topics: [
        { title: 'Two-Step Equations', slug: 'two-step-equations-grade7', order: 0,
          description: 'Solve two-step equations and inequalities with rational numbers.',
          textContent: `# Two-Step Equations

## Solving Two-Step Equations

A two-step equation requires **two inverse operations** to solve.

**Strategy**: Undo operations in **reverse order** (undo addition/subtraction first, then multiplication/division).

## Example 1

$$3x + 5 = 20$$

Step 1: Subtract 5 from both sides: $3x = 15$
Step 2: Divide both sides by 3: $x = 5$ ✅

Check: $3(5) + 5 = 15 + 5 = 20$ ✓

## Example 2

$$\\frac{x}{4} - 3 = 7$$

Step 1: Add 3 to both sides: $\\frac{x}{4} = 10$
Step 2: Multiply both sides by 4: $x = 40$ ✅

## Example 3 (Negative coefficient)

$$-2x + 8 = 14$$

Step 1: Subtract 8: $-2x = 6$
Step 2: Divide by $-2$: $x = -3$ ✅

## Equations with Fractions

$$\\frac{2}{3}x - 4 = 8$$

Step 1: Add 4: $\\frac{2}{3}x = 12$
Step 2: Multiply by $\\frac{3}{2}$: $x = 12 \\times \\frac{3}{2} = 18$ ✅

## Two-Step Inequalities

Same process, but **flip the inequality sign** when multiplying or dividing by a negative.

$$-3x + 9 > 21$$
$-3x > 12$
$x < -4$ (flipped because we divided by $-3$)

## Word Problems

*"A number doubled, then decreased by 7, equals 15. Find the number."*
$$2n - 7 = 15 \\implies 2n = 22 \\implies n = 11$$

> **Golden rule**: Whatever you do to one side, you MUST do to the other side.`
        },
        { title: 'Inequalities', slug: 'inequalities-grade7', order: 1,
          description: 'Write, solve, and graph inequalities on a number line.',
          textContent: `# Inequalities

## Inequality Symbols

| Symbol | Meaning |
|--------|---------|
| $<$ | Less than |
| $>$ | Greater than |
| $\\leq$ | Less than or equal to |
| $\\geq$ | Greater than or equal to |

## Graphing Inequalities

On a number line:
- $<$ or $>$: **Open circle** (value not included)
- $\\leq$ or $\\geq$: **Closed circle** (value included)
- Shade in the direction of the solutions

## Writing Inequalities from Words

| Words | Inequality |
|-------|-----------|
| "at least 5" | $x \\geq 5$ |
| "no more than 10" | $x \\leq 10$ |
| "fewer than 8" | $x < 8$ |
| "more than 3" | $x > 3$ |

## Solving Inequalities

Same as equations, EXCEPT: **flip the inequality sign** when you multiply or divide by a **negative number**.

$$-4x \\geq 20$$
$$x \\leq -5$$ (sign flipped!)

## Compound Inequalities

$$-3 < x \\leq 7$$

This means $x$ is between $-3$ (exclusive) and $7$ (inclusive).

## Checking Solutions

Is $x = 4$ a solution to $2x + 3 > 9$?
$$2(4) + 3 = 11 > 9$$ ✓ Yes!

Is $x = 2$ a solution?
$$2(2) + 3 = 7 > 9$$ ✗ No!

> **Key difference from equations**: Inequalities have **infinitely many** solutions, not just one!`
        }
      ]
    },
    {
      categoryName: 'Geometry',
      categorySlug: 'geometry-g7',
      order: 3,
      topics: [
        { title: 'Circles: Circumference and Area', slug: 'circles-circumference-area-grade7', order: 0,
          description: 'Calculate the circumference and area of circles using π.',
          textContent: `# Circles: Circumference and Area

## Parts of a Circle

- **Center**: The middle point
- **Radius** ($r$): Distance from center to edge
- **Diameter** ($d$): Distance across the circle through the center ($d = 2r$)

## Pi ($\\pi$)

$$\\pi \\approx 3.14159...$$

Pi is the ratio of any circle's circumference to its diameter. It's an **irrational number** (never ends, never repeats).

## Circumference (Perimeter of a Circle)

$$C = \\pi d = 2\\pi r$$

**Example**: Circle with radius 5 cm:
$$C = 2\\pi(5) = 10\\pi \\approx 31.42 \\text{ cm}$$

## Area of a Circle

$$A = \\pi r^2$$

**Example**: Circle with radius 5 cm:
$$A = \\pi(5)^2 = 25\\pi \\approx 78.54 \\text{ cm}^2$$

## Finding Radius from Circumference

If $C = 18.84$ cm:
$$r = \\frac{C}{2\\pi} = \\frac{18.84}{2(3.14)} = 3 \\text{ cm}$$

## Semicircle

A semicircle is half a circle:
- Area: $A = \\frac{1}{2}\\pi r^2$
- Perimeter: $P = \\pi r + 2r$ (curved part + diameter)

## Word Problems

*A circular pool has a diameter of 24 feet. How much fencing is needed around it?*
$$C = \\pi d = \\pi(24) = 24\\pi \\approx 75.4 \\text{ feet}$$

> **Remember**: Use **radius** in both formulas. If given diameter, divide by 2 first!`
        },
        { title: 'Angle Relationships', slug: 'angle-relationships-grade7', order: 1,
          description: 'Use angle relationships to find unknown angles including supplementary, complementary, and vertical angles.',
          textContent: `# Angle Relationships

## Complementary Angles

Two angles are **complementary** if they add up to $90°$.

$$\\angle A + \\angle B = 90°$$

If $\\angle A = 35°$, then $\\angle B = 90° - 35° = 55°$

## Supplementary Angles

Two angles are **supplementary** if they add up to $180°$.

$$\\angle A + \\angle B = 180°$$

If $\\angle A = 120°$, then $\\angle B = 180° - 120° = 60°$

## Vertical Angles

When two lines intersect, they form two pairs of **vertical angles**. Vertical angles are **equal**.

## Adjacent Angles

Angles that share a side and vertex. Adjacent angles on a straight line are supplementary.

## Angles in a Triangle

The sum of angles in any triangle is $180°$:

$$\\angle A + \\angle B + \\angle C = 180°$$

If $\\angle A = 50°$ and $\\angle B = 70°$:
$$\\angle C = 180° - 50° - 70° = 60°$$

## Angles with Parallel Lines

When a **transversal** crosses parallel lines:
- **Corresponding angles** are equal
- **Alternate interior angles** are equal
- **Co-interior (same-side interior) angles** are supplementary

## Solving for Unknown Angles

Use algebra! If two supplementary angles are $3x$ and $x + 20$:
$$3x + (x + 20) = 180$$
$$4x + 20 = 180$$
$$4x = 160$$
$$x = 40°$$

So the angles are $120°$ and $60°$.

> **Practice**: Look for angle relationships before writing equations. Vertical angles = equal, linear pair = supplementary.`
        }
      ]
    },
    {
      categoryName: 'Probability',
      categorySlug: 'probability-g7',
      order: 4,
      topics: [
        { title: 'Probability Basics', slug: 'probability-basics-grade7', order: 0,
          description: 'Understand and calculate probability of simple and compound events.',
          textContent: `# Probability Basics

## What Is Probability?

**Probability** measures how likely an event is to occur, on a scale from 0 to 1:

$$P(\\text{event}) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$$

## Probability Scale

| Value | Meaning |
|-------|---------|
| $0$ | Impossible |
| $0.25$ | Unlikely |
| $0.5$ | Equally likely |
| $0.75$ | Likely |
| $1$ | Certain |

## Theoretical vs. Experimental Probability

**Theoretical**: Based on reasoning about equally likely outcomes.
$$P(\\text{heads}) = \\frac{1}{2}$$

**Experimental**: Based on data from actual experiments.
$$P(\\text{heads}) = \\frac{\\text{number of heads}}{\\text{total flips}}$$

As the number of trials **increases**, experimental probability gets **closer** to theoretical probability. This is the **Law of Large Numbers**.

## Compound Events

**Independent events**: One event doesn't affect the other.
$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example**: Flip a coin AND roll a die:
$$P(\\text{heads and 6}) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$$

## "Or" Probability

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

## Sample Spaces

List all possible outcomes using:
- **Tree diagrams**
- **Tables**
- **Organized lists**

## Complement

$$P(\\text{not } A) = 1 - P(A)$$

If $P(\\text{rain}) = 0.3$, then $P(\\text{no rain}) = 0.7$

> **Key idea**: Probability is always between 0 and 1. If you get a value outside this range, check your work!`
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
  console.log('\n🎉 Grade 7 Math expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
