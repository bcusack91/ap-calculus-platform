import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Get the unit circle topic to find its category and order
  const unitCircleTopic = await prisma.topic.findUnique({
    where: { slug: 'the-unit-circle' }
  })

  if (!unitCircleTopic) {
    console.log('❌ Unit circle topic not found')
    return
  }

  // Create new topic for Negative and Coterminal Angles
  const newTopic = await prisma.topic.upsert({
    where: { slug: 'negative-and-coterminal-angles' },
    update: {},
    create: {
      title: 'Negative and Coterminal Angles',
      slug: 'negative-and-coterminal-angles',
      description: 'Understand negative angles and coterminal angles, and learn how to find them.',
      order: unitCircleTopic.order + 1,
      categoryId: unitCircleTopic.categoryId,
      textContent: `# Negative and Coterminal Angles

## Negative Angles

### What are Negative Angles?

**Negative angles** are measured **clockwise** from the positive x-axis, instead of counterclockwise.

- **Positive angles**: Rotate counterclockwise (standard direction)
- **Negative angles**: Rotate clockwise

### Examples

**Example 1**: $-90°$ (or $-\\frac{\\pi}{2}$ radians)
- This is a $90°$ rotation **clockwise**
- Ends up pointing straight down (negative y-axis)
- Same terminal side as $270°$ (or $\\frac{3\\pi}{2}$)

**Example 2**: $-\\frac{\\pi}{4}$
- This is $45°$ **clockwise**
- Ends up in Quadrant IV
- Same terminal side as $\\frac{7\\pi}{4}$ or $315°$

**Example 3**: $-180°$
- Half circle clockwise
- Ends up on negative x-axis
- Same terminal side as $180°$

### Converting Between Positive and Negative Angles

To convert a negative angle to its positive equivalent:

**Add $360°$ (or $2\\pi$ radians)**

**Examples:**

**Convert $-45°$ to positive:**
$$-45° + 360° = 315°$$

**Convert $-\\frac{\\pi}{3}$ to positive:**
$$-\\frac{\\pi}{3} + 2\\pi = -\\frac{\\pi}{3} + \\frac{6\\pi}{3} = \\frac{5\\pi}{3}$$

**Convert $-120°$ to positive:**
$$-120° + 360° = 240°$$

### Why Use Negative Angles?

Negative angles are useful for:
- **Physics**: Describing clockwise rotation (gears, wheels)
- **Navigation**: Turning right vs. left
- **Computer graphics**: Rotation transformations
- **General math**: Sometimes a negative angle is simpler to describe

## Coterminal Angles

### What are Coterminal Angles?

**Coterminal angles** are angles that have the **same terminal side** (they end up pointing in the same direction).

**Key insight**: You can make coterminal angles by adding or subtracting full rotations ($360°$ or $2\\pi$ radians).

### Finding Coterminal Angles

**Formula:**
$$\\theta_{\\text{coterminal}} = \\theta + 360°n \\quad \\text{(or } \\theta + 2\\pi n \\text{ in radians)}$$

where $n$ is any integer ($...,-2, -1, 0, 1, 2, ...$)

### Examples

**Example 1**: Find coterminal angles with $30°$

Add/subtract $360°$:
- $30° + 360° = 390°$ ✓
- $30° - 360° = -330°$ ✓
- $30° + 720° = 750°$ ✓
- $30° - 720° = -690°$ ✓

All of these angles are coterminal with $30°$!

**Example 2**: Find coterminal angles with $\\frac{\\pi}{6}$

Add/subtract $2\\pi$:
- $\\frac{\\pi}{6} + 2\\pi = \\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{13\\pi}{6}$ ✓
- $\\frac{\\pi}{6} - 2\\pi = \\frac{\\pi}{6} - \\frac{12\\pi}{6} = -\\frac{11\\pi}{6}$ ✓

**Example 3**: Are $45°$ and $405°$ coterminal?

Check: $405° - 45° = 360°$ 

Yes! They differ by exactly one full rotation, so they're coterminal.

**Example 4**: Find the coterminal angle between $0°$ and $360°$ for $-210°$

Add $360°$:
$$-210° + 360° = 150°$$

So $-210°$ and $150°$ are coterminal.

**Example 5**: Find the coterminal angle between $0$ and $2\\pi$ for $\\frac{13\\pi}{4}$

Subtract $2\\pi$ until we're in range:
$$\\frac{13\\pi}{4} - 2\\pi = \\frac{13\\pi}{4} - \\frac{8\\pi}{4} = \\frac{5\\pi}{4}$$

So $\\frac{13\\pi}{4}$ and $\\frac{5\\pi}{4}$ are coterminal.

### Standard Position

The **standard position coterminal angle** is the coterminal angle between:
- $0°$ and $360°$ (or $0$ and $2\\pi$ in radians)

This is often the most useful form.

**To find it:**
1. If the angle is negative, keep adding $360°$ (or $2\\pi$) until it's positive
2. If the angle is greater than $360°$ (or $2\\pi$), keep subtracting $360°$ (or $2\\pi$) until it's in range

### Trig Values of Coterminal Angles

**Important property**: Coterminal angles have the **same trig values**!

Since they have the same terminal side on the unit circle:
$$\\sin(\\theta) = \\sin(\\theta + 360°n)$$
$$\\cos(\\theta) = \\cos(\\theta + 360°n)$$
$$\\tan(\\theta) = \\tan(\\theta + 360°n)$$

**Example:**
$$\\sin(30°) = \\sin(390°) = \\sin(-330°) = \\frac{1}{2}$$

All three angles are coterminal, so they all have the same sine value!

## Practice Problems

**Problem 1**: Convert $-\\frac{2\\pi}{3}$ to a positive angle.

**Problem 2**: Find three coterminal angles with $120°$ (one positive, one negative, one greater than $360°$).

**Problem 3**: Find the standard position coterminal angle for $940°$.

**Problem 4**: Are $-\\frac{\\pi}{4}$ and $\\frac{7\\pi}{4}$ coterminal?

**Problem 5**: If $\\cos(50°) = x$, what is $\\cos(410°)$?

**Problem 6**: Find the standard position coterminal angle for $-\\frac{17\\pi}{6}$.

## Real-World Applications

**Wheels and Gears**
- Rotating clockwise vs. counterclockwise
- Multiple full rotations

**Navigation**
- Ship/plane headings that go past $360°$
- Turning more than one full circle

**Physics**
- Angular displacement (can be positive or negative)
- Periodic motion (repeating angles)

**Astronomy**
- Planetary orbits (many full rotations)
- Celestial coordinate systems

## Summary

**Negative Angles:**
- Measured clockwise
- Convert to positive by adding $360°$ (or $2\\pi$)

**Coterminal Angles:**
- Share the same terminal side
- Found by adding/subtracting $360°$ (or $2\\pi$)
- Have the same trig values
- Standard position: between $0°$ and $360°$ (or $0$ and $2\\pi$)

**Key Formula:**
$$\\theta_{\\text{coterminal}} = \\theta \\pm 360°n \\quad (\\text{or } \\theta \\pm 2\\pi n)$$`
    }
  })

  // Update the unit circle topic to remove the negative and coterminal angles section
  await prisma.topic.update({
    where: { slug: 'the-unit-circle' },
    data: {
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

  console.log('✅ Created new topic:', newTopic.title)
  console.log(`   Order: ${newTopic.order}`)
  console.log('✅ Updated unit circle topic to remove negative and coterminal angles section')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
