import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // First, get the current topic to find its category and order
  const currentTopic = await prisma.topic.findUnique({
    where: { slug: 'unit-circle-radian-measure' },
    include: { category: true }
  })

  if (!currentTopic) {
    console.log('❌ Current topic not found')
    return
  }

  console.log(`Found topic: ${currentTopic.title}`)
  console.log(`Category: ${currentTopic.category.name}`)
  console.log(`Current order: ${currentTopic.order}`)

  // Topic 1: Degrees and Radians
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'degrees-and-radians' },
    update: {},
    create: {
      title: 'Degrees and Radians',
      slug: 'degrees-and-radians',
      description: 'Learn how to convert between degrees and radians, and understand radian measure.',
      order: currentTopic.order,
      categoryId: currentTopic.categoryId,
      textContent: `# Degrees and Radians

## What is Radian Measure?

A **radian** is the angle formed when the arc length equals the radius of a circle.

**Key insight**: One complete revolution around a circle is $2\\pi$ radians (or $360°$).

## The Fundamental Conversion

$$180° = \\pi \\text{ radians}$$

This is the most important relationship to remember!

## Converting Between Degrees and Radians

### Degrees to Radians

**Formula**: Multiply by $\\frac{\\pi}{180}$

**Example 1**: Convert $45°$ to radians

$$45° \\times \\frac{\\pi}{180} = \\frac{45\\pi}{180} = \\frac{\\pi}{4}$$

**Example 2**: Convert $120°$ to radians

$$120° \\times \\frac{\\pi}{180} = \\frac{120\\pi}{180} = \\frac{2\\pi}{3}$$

### Radians to Degrees

**Formula**: Multiply by $\\frac{180}{\\pi}$

**Example 1**: Convert $\\frac{\\pi}{6}$ to degrees

$$\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{180}{6} = 30°$$

**Example 2**: Convert $\\frac{5\\pi}{4}$ to degrees

$$\\frac{5\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{5 \\times 180}{4} = \\frac{900}{4} = 225°$$

## Common Angle Conversions

Memorize these frequently used conversions:

| Degrees | Radians | Notes |
|---------|---------|-------|
| $0°$ | $0$ | Starting point |
| $30°$ | $\\frac{\\pi}{6}$ | Half of $60°$ |
| $45°$ | $\\frac{\\pi}{4}$ | Quarter turn |
| $60°$ | $\\frac{\\pi}{3}$ | Twice $30°$ |
| $90°$ | $\\frac{\\pi}{2}$ | Right angle |
| $120°$ | $\\frac{2\\pi}{3}$ | Twice $60°$ |
| $135°$ | $\\frac{3\\pi}{4}$ | Three times $45°$ |
| $150°$ | $\\frac{5\\pi}{6}$ | Five times $30°$ |
| $180°$ | $\\pi$ | Straight angle |
| $270°$ | $\\frac{3\\pi}{2}$ | Three-quarter turn |
| $360°$ | $2\\pi$ | Full circle |

## Why Use Radians?

1. **Simpler formulas**: Arc length is just $s = r\\theta$ (when $\\theta$ is in radians)
2. **Calculus**: Derivatives and integrals of trig functions work cleanly with radians
3. **Natural measure**: Radians measure angles based on the circle itself, not an arbitrary division into 360 parts

## Quick Tips

**To convert degrees to radians mentally:**
1. Divide the degree measure by $180$
2. Multiply by $\\pi$
3. Simplify the fraction

**Example**: $270°$
- Step 1: $270 \\div 180 = \\frac{270}{180} = \\frac{3}{2}$
- Step 2: $\\frac{3}{2} \\times \\pi = \\frac{3\\pi}{2}$

## Practice Problems

1. Convert $210°$ to radians
2. Convert $\\frac{7\\pi}{6}$ to degrees
3. Convert $315°$ to radians
4. What angle in radians is one-third of a full rotation?

## Real-World Applications

- **Astronomy**: Angles between celestial objects
- **Engineering**: Rotational motion and angular velocity
- **Computer graphics**: Rotation transformations
- **Physics**: Circular motion and wave properties`
    }
  })

  // Topic 2: Arc Length and Sector Area
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'arc-length-and-sector-area' },
    update: {},
    create: {
      title: 'Arc Length and Sector Area',
      slug: 'arc-length-and-sector-area',
      description: 'Calculate arc lengths and sector areas using radian measure.',
      order: currentTopic.order + 1,
      categoryId: currentTopic.categoryId,
      textContent: `# Arc Length and Sector Area

## Prerequisites

Before studying this topic, make sure you understand:
- Converting between degrees and radians
- Basic circle geometry (radius, circumference, area)

## Arc Length

**Arc length** is the distance along the curved edge of a circle between two points.

### The Formula (Radians)

For a circle with radius $r$ and central angle $\\theta$ (in **radians**):

$$s = r\\theta$$

Where:
- $s$ = arc length
- $r$ = radius
- $\\theta$ = central angle in radians

### Why This Formula Works

The circumference of a full circle is $2\\pi r$. A full rotation is $2\\pi$ radians.

So the arc length for angle $\\theta$ is:
$$s = \\frac{\\theta}{2\\pi} \\times 2\\pi r = r\\theta$$

### Examples

**Example 1**: A circle has radius 5 cm. Find the arc length for a central angle of $\\frac{\\pi}{3}$ radians.

$$s = r\\theta = 5 \\times \\frac{\\pi}{3} = \\frac{5\\pi}{3} \\text{ cm} \\approx 5.24 \\text{ cm}$$

**Example 2**: A circle has radius 10 inches. Find the arc length for a central angle of $60°$.

First, convert to radians: $60° = \\frac{\\pi}{3}$ radians

$$s = 10 \\times \\frac{\\pi}{3} = \\frac{10\\pi}{3} \\text{ inches} \\approx 10.47 \\text{ inches}$$

**Example 3**: If an arc has length 12 cm and the radius is 8 cm, find the central angle in radians.

$$\\theta = \\frac{s}{r} = \\frac{12}{8} = \\frac{3}{2} \\text{ radians} = 1.5 \\text{ radians}$$

## Sector Area

A **sector** is a "slice" of a circle, like a piece of pie.

### The Formula (Radians)

For a circle with radius $r$ and central angle $\\theta$ (in **radians**):

$$A = \\frac{1}{2}r^2\\theta$$

Where:
- $A$ = sector area
- $r$ = radius
- $\\theta$ = central angle in radians

### Why This Formula Works

The area of a full circle is $\\pi r^2$. A full rotation is $2\\pi$ radians.

So the sector area for angle $\\theta$ is:
$$A = \\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2}r^2\\theta$$

### Examples

**Example 1**: Find the area of a sector with radius 6 cm and central angle $\\frac{\\pi}{4}$ radians.

$$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(6)^2 \\times \\frac{\\pi}{4} = \\frac{1}{2}(36) \\times \\frac{\\pi}{4} = \\frac{36\\pi}{8} = \\frac{9\\pi}{2} \\text{ cm}^2$$

**Example 2**: A pizza with radius 12 inches is cut into 8 equal slices. What is the area of one slice?

Each slice has central angle: $\\frac{2\\pi}{8} = \\frac{\\pi}{4}$ radians

$$A = \\frac{1}{2}(12)^2 \\times \\frac{\\pi}{4} = \\frac{1}{2}(144) \\times \\frac{\\pi}{4} = \\frac{144\\pi}{8} = 18\\pi \\text{ in}^2 \\approx 56.55 \\text{ in}^2$$

**Example 3**: A sector has area $20\\pi$ cm² and radius 10 cm. Find the central angle.

$$\\theta = \\frac{2A}{r^2} = \\frac{2(20\\pi)}{(10)^2} = \\frac{40\\pi}{100} = \\frac{2\\pi}{5} \\text{ radians}$$

## Combined Problems

**Example**: A circle has radius 15 m. A sector has central angle $\\frac{2\\pi}{3}$ radians. Find both the arc length and sector area.

Arc length: $s = r\\theta = 15 \\times \\frac{2\\pi}{3} = 10\\pi$ m $\\approx 31.42$ m

Sector area: $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(15)^2 \\times \\frac{2\\pi}{3} = \\frac{1}{2}(225) \\times \\frac{2\\pi}{3} = \\frac{450\\pi}{6} = 75\\pi$ m² $\\approx 235.62$ m²

## Important Notes

⚠️ **These formulas only work when the angle is in radians!**

If you're given degrees, convert to radians first.

## Real-World Applications

- **Architecture**: Circular windows, arches, domes
- **Engineering**: Gears, pulleys, rotating machinery
- **Sports**: Basketball court three-point lines, running tracks
- **Landscaping**: Curved garden beds, irrigation coverage
- **Navigation**: Distance along Earth's surface (great circle routes)`
    }
  })

  // Topic 3: The Unit Circle
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'the-unit-circle' },
    update: {},
    create: {
      title: 'The Unit Circle',
      slug: 'the-unit-circle',
      description: 'Master the unit circle, special angles, reference angles, and the CAST rule.',
      order: currentTopic.order + 2,
      categoryId: currentTopic.categoryId,
      textContent: `# The Unit Circle

## What is the Unit Circle?

The **unit circle** is a circle with:
- Center at the origin $(0, 0)$
- Radius of exactly 1

Its equation is:
$$x^2 + y^2 = 1$$

## Why the Unit Circle Matters

The unit circle allows us to define trigonometric functions for **all angles**, not just acute angles in right triangles.

For any angle $\\theta$ in standard position (starting from the positive x-axis):
- $\\cos(\\theta)$ = **x-coordinate** of the point on the unit circle
- $\\sin(\\theta)$ = **y-coordinate** of the point on the unit circle
- $\\tan(\\theta) = \\frac{y}{x} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$

## Special Angles on the Unit Circle

### The Key Angles to Memorize

You should know these angles in **both degrees and radians**:

| Angle (Degrees) | Angle (Radians) | Point $(x, y)$ | $\\cos$ | $\\sin$ | $\\tan$ |
|-----------------|-----------------|----------------|---------|---------|---------|
| $0°$ | $0$ | $(1, 0)$ | $1$ | $0$ | $0$ |
| $30°$ | $\\frac{\\pi}{6}$ | $(\\frac{\\sqrt{3}}{2}, \\frac{1}{2})$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{3}$ |
| $45°$ | $\\frac{\\pi}{4}$ | $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\\frac{\\pi}{3}$ | $(\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\sqrt{3}$ |
| $90°$ | $\\frac{\\pi}{2}$ | $(0, 1)$ | $0$ | $1$ | undefined |

### Pattern Recognition

**For 30° and 60° angles**:
- Think of the ratios: $\\frac{1}{2}$, $\\frac{\\sqrt{3}}{2}$
- At $30°$: sine is small ($\\frac{1}{2}$), cosine is large ($\\frac{\\sqrt{3}}{2}$)
- At $60°$: sine is large ($\\frac{\\sqrt{3}}{2}$), cosine is small ($\\frac{1}{2}$)

**For 45° angles**:
- Everything is $\\frac{\\sqrt{2}}{2}$ (except tangent = 1)
- This makes sense: at $45°$, x and y coordinates are equal

### All Four Quadrants

Once you know the first quadrant angles, you can find any angle using reference angles and the CAST rule!

**Common angles in all quadrants** (in radians):

- **Quadrant I** ($0$ to $\\frac{\\pi}{2}$): $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$
- **Quadrant II** ($\\frac{\\pi}{2}$ to $\\pi$): $\\frac{2\\pi}{3}, \\frac{3\\pi}{4}, \\frac{5\\pi}{6}, \\pi$
- **Quadrant III** ($\\pi$ to $\\frac{3\\pi}{2}$): $\\frac{7\\pi}{6}, \\frac{5\\pi}{4}, \\frac{4\\pi}{3}, \\frac{3\\pi}{2}$
- **Quadrant IV** ($\\frac{3\\pi}{2}$ to $2\\pi$): $\\frac{5\\pi}{3}, \\frac{7\\pi}{4}, \\frac{11\\pi}{6}, 2\\pi$

## Reference Angles

A **reference angle** is the **acute angle** formed between the terminal side of the angle and the x-axis.

Reference angles help you find trig values for angles in any quadrant!

### Finding Reference Angles

Let $\\theta$ be your angle. The reference angle $\\theta'$ is:

- **Quadrant I**: $\\theta' = \\theta$
- **Quadrant II**: $\\theta' = \\pi - \\theta$ (or $180° - \\theta$)
- **Quadrant III**: $\\theta' = \\theta - \\pi$ (or $\\theta - 180°$)
- **Quadrant IV**: $\\theta' = 2\\pi - \\theta$ (or $360° - \\theta$)

### Examples

**Example 1**: Find the reference angle for $\\frac{5\\pi}{6}$

This is in Quadrant II, so:
$$\\theta' = \\pi - \\frac{5\\pi}{6} = \\frac{6\\pi}{6} - \\frac{5\\pi}{6} = \\frac{\\pi}{6}$$

**Example 2**: Find the reference angle for $240°$

This is in Quadrant III, so:
$$\\theta' = 240° - 180° = 60°$$

**Example 3**: Find $\\cos(\\frac{5\\pi}{4})$

- $\\frac{5\\pi}{4}$ is in Quadrant III
- Reference angle: $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$
- We know $\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$
- In Quadrant III, cosine is **negative**
- Therefore: $\\cos(\\frac{5\\pi}{4}) = -\\frac{\\sqrt{2}}{2}$

## CAST Rule (Signs by Quadrant)

**CAST** tells you which trig functions are **positive** in each quadrant:

- **Quadrant I**: **A**ll (sine, cosine, tangent all positive)
- **Quadrant II**: **S**ine positive only
- **Quadrant III**: **T**angent positive only
- **Quadrant IV**: **C**osine positive only

**Memory tricks**:
- "All Students Take Calculus"
- "Add Sugar To Coffee"

### Why CAST Works

Think about the signs of x and y coordinates:
- **Quadrant I**: $(+, +)$ → all positive
- **Quadrant II**: $(-, +)$ → $\\sin = y$ is positive, $\\cos = x$ is negative
- **Quadrant III**: $(-, -)$ → $\\tan = \\frac{y}{x}$ is positive (negative ÷ negative)
- **Quadrant IV**: $(+, -)$ → $\\cos = x$ is positive, $\\sin = y$ is negative

## Negative and Coterminal Angles

**Negative angles**: Measured clockwise from the positive x-axis
- Example: $-\\frac{\\pi}{4}$ is the same as $\\frac{7\\pi}{4}$ (or $315°$)

**Coterminal angles**: Angles that share the same terminal side
- Add or subtract $2\\pi$ (or $360°$) to find coterminal angles
- Example: $\\frac{\\pi}{3}$, $\\frac{7\\pi}{3}$, and $-\\frac{5\\pi}{3}$ are all coterminal

## Tips for Mastering the Unit Circle

1. **Draw it!** Practice sketching the unit circle with all special angles
2. **Use symmetry**: The circle has symmetry across both axes and both diagonals
3. **Start with Quadrant I**: Learn those 5 angles perfectly, then use reference angles
4. **Remember patterns**: The denominators for radians follow a pattern (6, 4, 3, 2)
5. **Practice regularly**: The unit circle becomes automatic with repetition

## Real-World Applications

- **Engineering**: Analyzing periodic motion and vibrations
- **Physics**: Projectile motion, waves, oscillations
- **Computer graphics**: Rotating objects, circular motion
- **Music**: Sound waves and frequencies
- **Astronomy**: Planetary orbits and celestial mechanics`
    }
  })

  // Update the original topic to redirect or archive it
  await prisma.topic.update({
    where: { slug: 'unit-circle-radian-measure' },
    data: {
      title: 'Unit Circle and Radian Measure (Combined - See Split Topics)',
      description: 'This topic has been split into three focused topics: Degrees and Radians, Arc Length and Sector Area, and The Unit Circle.',
    }
  })

  console.log('✅ Successfully created three new topics:')
  console.log(`   1. ${topic1.title} (order ${topic1.order})`)
  console.log(`   2. ${topic2.title} (order ${topic2.order})`)
  console.log(`   3. ${topic3.title} (order ${topic3.order})`)
  console.log('\n📝 Updated original topic with note about split')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
