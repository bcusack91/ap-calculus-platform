import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
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

<UnitCircleTable />

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

  console.log('✅ Updated unit circle topic with UnitCircleTable component')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
