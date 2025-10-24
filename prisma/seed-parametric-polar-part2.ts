import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Parametric & Polar (BC) micro-lessons - Part 2...')

  // Get the Parametric & Polar category
  const parametricPolarCategory = await prisma.category.upsert({
    where: { slug: 'parametric-polar' },
    update: {},
    create: {
      slug: 'parametric-polar',
      name: 'Parametric & Polar (BC)',
      description: 'Parametric equations and polar coordinates for Calculus BC',
      order: 6,
      icon: '📐',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'polar-coordinates-intro',
          'polar-calculus',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Introduction to Polar Coordinates
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'polar-coordinates-intro',
      title: 'Introduction to Polar Coordinates',
      description: 'Understanding curves in polar form',
      order: 3,
      categoryId: parametricPolarCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Introduction to Polar Coordinates

## What Are Polar Coordinates?

Instead of locating a point by $(x, y)$ (Cartesian), use:
- $r$ = **distance** from origin (radius)
- $\\theta$ = **angle** from positive x-axis (measured counterclockwise)

**Polar notation**: $(r, \\theta)$

> **💡 Key Idea**: Every point can be described by how far and in what direction from the origin!

---

## Converting Between Polar and Cartesian

### From Polar to Cartesian:

$$x = r\\cos\\theta$$
$$y = r\\sin\\theta$$

**Derivation**: Draw a right triangle from origin to point.

---

### From Cartesian to Polar:

$$r = \\sqrt{x^2 + y^2}$$
$$\\tan\\theta = \\frac{y}{x}$$ (so $\\theta = \\arctan\\frac{y}{x}$, with quadrant adjustment)

**Alternative** for $\\theta$:
$$\\theta = \\begin{cases}
\\arctan(y/x) & \\text{if } x > 0 \\\\
\\arctan(y/x) + \\pi & \\text{if } x < 0 \\\\
\\pi/2 & \\text{if } x = 0, y > 0 \\\\
-\\pi/2 & \\text{if } x = 0, y < 0
\\end{cases}$$

---

## Example 1: Polar to Cartesian

Convert $(r, \\theta) = (5, \\frac{\\pi}{3})$ to Cartesian coordinates.

**Step 1: Apply formulas**

$$x = r\\cos\\theta = 5\\cos\\frac{\\pi}{3} = 5 \\cdot \\frac{1}{2} = \\frac{5}{2}$$

$$y = r\\sin\\theta = 5\\sin\\frac{\\pi}{3} = 5 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{5\\sqrt{3}}{2}$$

**Answer**: $\\left(\\frac{5}{2}, \\frac{5\\sqrt{3}}{2}\\right)$

---

## Example 2: Cartesian to Polar

Convert $(x, y) = (3, 4)$ to polar coordinates.

**Step 1: Find $r$**

$$r = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

---

**Step 2: Find $\\theta$**

$$\\tan\\theta = \\frac{4}{3}$$

$$\\theta = \\arctan\\frac{4}{3} \\approx 0.927 \\text{ radians} \\approx 53.1°$$

**Answer**: $(r, \\theta) = (5, \\arctan\\frac{4}{3})$ or approximately $(5, 0.927)$

---

## Non-Uniqueness of Polar Coordinates

**Important**: Unlike Cartesian, polar coordinates are **not unique**!

The point $(r, \\theta)$ is the same as:
- $(r, \\theta + 2\\pi n)$ for any integer $n$
- $(-r, \\theta + \\pi)$ (negative radius means opposite direction)

**Example**: $(2, \\frac{\\pi}{4})$ is the same as:
- $(2, \\frac{9\\pi}{4})$ (add $2\\pi$)
- $(-2, \\frac{5\\pi}{4})$ (negative $r$, add $\\pi$)

---

## Polar Equations

An equation in the form $r = f(\\theta)$ describes a curve in polar coordinates.

**Example**: $r = 2$ is a circle of radius 2 centered at origin.

---

## Common Polar Curves

### Circle centered at origin, radius $a$:

$$r = a$$

---

### Circle passing through origin:

$$r = 2a\\cos\\theta$$ (circle with diameter on x-axis)

$$r = 2a\\sin\\theta$$ (circle with diameter on y-axis)

---

### Line through origin:

$$\\theta = c$$ (constant angle)

This is a ray from the origin!

---

### Spiral (Archimedean):

$$r = a\\theta$$

As $\\theta$ increases, $r$ increases linearly.

---

## Example 3: Graphing $r = 1 + \\cos\\theta$

This is a **cardioid** (heart-shaped curve).

**Make a table**:

| $\\theta$ | $\\cos\\theta$ | $r = 1 + \\cos\\theta$ |
|-----------|----------------|------------------------|
| 0         | 1              | 2                      |
| $\\pi/3$  | 1/2            | 3/2                    |
| $\\pi/2$  | 0              | 1                      |
| $2\\pi/3$ | -1/2           | 1/2                    |
| $\\pi$    | -1             | 0                      |
| $4\\pi/3$ | -1/2           | 1/2                    |
| $3\\pi/2$ | 0              | 1                      |
| $5\\pi/3$ | 1/2            | 3/2                    |
| $2\\pi$   | 1              | 2                      |

---

**Key features**:
- Maximum $r = 2$ at $\\theta = 0$
- Minimum $r = 0$ at $\\theta = \\pi$ (cusp at origin)
- Symmetric about x-axis (since $\\cos(-\\theta) = \\cos\\theta$)

---

## Rose Curves

### $r = a\\cos(n\\theta)$ or $r = a\\sin(n\\theta)$

- If $n$ is odd: $n$ petals
- If $n$ is even: $2n$ petals
- Each petal has length $a$

**Example**: $r = 3\\cos(2\\theta)$ has 4 petals of length 3.

**Example**: $r = 2\\sin(5\\theta)$ has 5 petals of length 2.

---

## Limaçons

### $r = a \\pm b\\cos\\theta$ or $r = a \\pm b\\sin\\theta$

Shape depends on ratio $\\frac{a}{b}$:

- $\\frac{a}{b} < 1$: **Inner loop**
- $\\frac{a}{b} = 1$: **Cardioid** (heart shape)
- $1 < \\frac{a}{b} < 2$: **Dimpled** (indented)
- $\\frac{a}{b} \\geq 2$: **Convex** (oval)

---

## Lemniscates

### $r^2 = a^2\\cos(2\\theta)$ or $r^2 = a^2\\sin(2\\theta)$

**Figure-eight** or infinity symbol shape!

**Example**: $r^2 = 4\\cos(2\\theta)$

Note: $r = \\pm 2\\sqrt{\\cos(2\\theta)}$ (exists only when $\\cos(2\\theta) \\geq 0$)

---

## Symmetry in Polar Graphs

### Symmetric about x-axis:

If replacing $\\theta$ with $-\\theta$ gives same equation.

**Test**: Does $r(\\theta) = r(-\\theta)$?

**Example**: $r = 1 + \\cos\\theta$ (since $\\cos(-\\theta) = \\cos\\theta$)

---

### Symmetric about y-axis:

If replacing $\\theta$ with $\\pi - \\theta$ gives same equation.

**Test**: Does $r(\\theta) = r(\\pi - \\theta)$?

**Example**: $r = 1 + \\sin\\theta$ (since $\\sin(\\pi - \\theta) = \\sin\\theta$)

---

### Symmetric about origin:

If replacing $r$ with $-r$ OR $\\theta$ with $\\theta + \\pi$ gives same equation.

**Test**: Does $-r(\\theta) = r(\\theta)$ or $r(\\theta) = r(\\theta + \\pi)$?

**Example**: $r = \\sin(2\\theta)$

---

## Converting Polar Equations to Cartesian

Use substitutions:
- $r = \\sqrt{x^2 + y^2}$
- $\\cos\\theta = \\frac{x}{r} = \\frac{x}{\\sqrt{x^2 + y^2}}$
- $\\sin\\theta = \\frac{y}{r} = \\frac{y}{\\sqrt{x^2 + y^2}}$

---

## Example 4: Convert $r = 4\\sin\\theta$ to Cartesian

**Step 1: Multiply both sides by $r$**

$$r^2 = 4r\\sin\\theta$$

---

**Step 2: Substitute**

$$x^2 + y^2 = 4y$$

---

**Step 3: Complete the square**

$$x^2 + y^2 - 4y = 0$$
$$x^2 + (y^2 - 4y + 4) = 4$$
$$x^2 + (y - 2)^2 = 4$$

**This is a circle** with center $(0, 2)$ and radius 2!

---

## Converting Cartesian to Polar

Use substitutions:
- $x = r\\cos\\theta$
- $y = r\\sin\\theta$
- $x^2 + y^2 = r^2$

---

## Example 5: Convert $y = x$ to Polar

**Step 1: Substitute**

$$r\\sin\\theta = r\\cos\\theta$$

---

**Step 2: Simplify** (assuming $r \\neq 0$)

$$\\sin\\theta = \\cos\\theta$$
$$\\tan\\theta = 1$$
$$\\theta = \\frac{\\pi}{4}$$ (or $\\theta = \\frac{5\\pi}{4}$)

**Answer**: $\\theta = \\frac{\\pi}{4}$ (a ray from origin at 45°)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Quadrant

When using $\\arctan\\frac{y}{x}$, check which quadrant the point is in!

Calculator gives $-\\frac{\\pi}{2} < \\theta < \\frac{\\pi}{2}$, but point might be in quadrant II or III.

---

### Mistake 2: Negative Radius

In polar, $r$ can be negative! It means go in the opposite direction.

$(−2, 0)$ is the same as $(2, \\pi)$ (both represent point $(-2, 0)$ in Cartesian).

---

### Mistake 3: Not Checking Domain

For $r = \\sqrt{\\cos\\theta}$, we need $\\cos\\theta \\geq 0$!

The curve only exists where the expression under the square root is non-negative.

---

### Mistake 4: Missing Multiplicity

$r^2 = 4$ gives $r = \\pm 2$

This is TWO circles (though they overlap), not one!

---

## Polar Grid

Polar graphs use circular grid:
- Concentric circles for different $r$ values
- Radial lines for different $\\theta$ values

**Tip**: When plotting, mark angles at multiples of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$ for common points.

---

## 📝 Practice Strategy

1. **For plotting**: Make a table of $\\theta$ and $r$ values
2. **Use special angles**: $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\ldots$
3. **Check symmetry** before plotting full curve
4. **Find where $r = 0$**: These are points at the origin
5. **Find maximum/minimum $r$**: These are furthest/closest points
6. **For conversion**: Use the standard formulas, simplify
7. **Sketch before calculating** - builds intuition!
`,
      exampleProblems: {
        create: [
          {
            question: 'Convert the Cartesian equation $x^2 + (y-3)^2 = 9$ to polar form.',
            solution: `**Step 1: Expand the equation**

$$x^2 + y^2 - 6y + 9 = 9$$
$$x^2 + y^2 - 6y = 0$$

---

**Step 2: Substitute polar equivalents**

$x^2 + y^2 = r^2$ and $y = r\\sin\\theta$:

$$r^2 - 6r\\sin\\theta = 0$$

---

**Step 3: Factor**

$$r(r - 6\\sin\\theta) = 0$$

This gives $r = 0$ (the origin) or:

$$r = 6\\sin\\theta$$

---

**Step 4: Simplify**

Since $r = 0$ is included in $r = 6\\sin\\theta$ (when $\\theta = 0$ or $\\pi$), the polar equation is:

$$r = 6\\sin\\theta$$

**Answer**: $r = 6\\sin\\theta$

**Note**: This is a circle with diameter 6 on the y-axis, centered at $(0, 3)$.`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find all points of intersection of $r = 1$ and $r = 2\\cos\\theta$.',
            solution: `**Step 1: Set equations equal**

$$1 = 2\\cos\\theta$$
$$\\cos\\theta = \\frac{1}{2}$$

---

**Step 2: Solve for $\\theta$**

In $[0, 2\\pi)$:
$$\\theta = \\frac{\\pi}{3}, \\quad \\theta = \\frac{5\\pi}{3}$$

---

**Step 3: Find points**

At $\\theta = \\frac{\\pi}{3}$: $r = 1$ gives $(1, \\frac{\\pi}{3})$

At $\\theta = \\frac{5\\pi}{3}$: $r = 1$ gives $(1, \\frac{5\\pi}{3})$

---

**Step 4: Check for origin**

For $r = 1$: never passes through origin ($r \\neq 0$)

For $r = 2\\cos\\theta$: passes through origin when $\\cos\\theta = 0$, at $\\theta = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$

So both curves pass through origin, but at different angles!

The origin is also an intersection point (represented differently in each equation).

---

**Answer**: Three intersection points:
- $(1, \\frac{\\pi}{3})$
- $(1, \\frac{5\\pi}{3})$
- Origin (pole)`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Identify and sketch $r = 2 + 2\\cos\\theta$. Find the maximum value of $r$.',
            solution: `**Step 1: Identify the curve type**

This is a limaçon of the form $r = a + b\\cos\\theta$ with $a = 2, b = 2$.

Since $\\frac{a}{b} = \\frac{2}{2} = 1$, this is a **cardioid**.

---

**Step 2: Find maximum $r$**

$r = 2 + 2\\cos\\theta$ is maximized when $\\cos\\theta$ is maximized.

$\\cos\\theta_{\\max} = 1$ at $\\theta = 0$

$$r_{\\max} = 2 + 2(1) = 4$$

---

**Step 3: Find minimum $r$**

$\\cos\\theta_{\\min} = -1$ at $\\theta = \\pi$

$$r_{\\min} = 2 + 2(-1) = 0$$

So the curve passes through the origin at $\\theta = \\pi$.

---

**Step 4: Check symmetry**

Replace $\\theta$ with $-\\theta$:
$$r(-\\theta) = 2 + 2\\cos(-\\theta) = 2 + 2\\cos\\theta = r(\\theta)$$

**Symmetric about the x-axis** (polar axis).

---

**Step 5: Key points**

| $\\theta$ | $r$ |
|-----------|-----|
| 0         | 4   |
| $\\pi/2$  | 2   |
| $\\pi$    | 0   |
| $3\\pi/2$ | 2   |
| $2\\pi$   | 4   |

---

**Answer**: 
- Curve: Cardioid
- Maximum: $r = 4$ at $\\theta = 0$
- Shape: Heart-shaped, pointing right, symmetric about x-axis`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'How do you convert between polar and Cartesian coordinates?',
            back: 'Polar to Cartesian: $x = r\\cos\\theta$, $y = r\\sin\\theta$. Cartesian to polar: $r = \\sqrt{x^2+y^2}$, $\\tan\\theta = y/x$ (watch quadrant!). Also useful: $r^2 = x^2+y^2$, $x = r\\cos\\theta$, $y = r\\sin\\theta$ for equations.',
            hint: 'Use trig functions and Pythagorean theorem',
          },
          {
            front: 'What are the main types of polar curves?',
            back: 'Circle: $r=a$ (origin), $r=2a\\cos\\theta$ or $r=2a\\sin\\theta$ (through origin). Rose: $r=a\\cos(n\\theta)$ (n odd→n petals, n even→2n petals). Limaçon: $r=a±b\\cos\\theta$ (shape depends on a/b). Lemniscate: $r^2=a^2\\cos(2\\theta)$ (figure-eight). Spiral: $r=a\\theta$.',
            hint: 'Circles, roses, limaçons, lemniscates, spirals',
          },
          {
            front: 'How do you test symmetry in polar coordinates?',
            back: 'x-axis: Replace $\\theta$ with $-\\theta$, if equivalent→symmetric. y-axis: Replace $\\theta$ with $\\pi-\\theta$. Origin: Replace $r$ with $-r$ OR $\\theta$ with $\\theta+\\pi$. Use symmetry to reduce graphing work!',
            hint: 'Test by substituting -θ, π-θ, or -r',
          },
          {
            front: 'What are important facts about polar coordinates?',
            back: '1) Not unique: $(r,\\theta) = (r,\\theta+2\\pi n) = (-r,\\theta+\\pi)$. 2) $r$ can be negative (opposite direction). 3) Origin is the pole, represented as $(0,\\theta)$ for any $\\theta$. 4) When finding intersections, check origin separately (different $\\theta$ values).',
            hint: 'Multiple representations, negative r allowed',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Calculus with Polar Coordinates
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'polar-calculus',
      title: 'Calculus with Polar Coordinates',
      description: 'Derivatives, tangents, and area in polar form',
      order: 4,
      categoryId: parametricPolarCategory.id,
      isPremium: true,
      textContent: `
# 🎯 Calculus with Polar Coordinates

## Slope of Polar Curves

For a polar curve $r = f(\\theta)$, we can express it parametrically:

$$x = r\\cos\\theta = f(\\theta)\\cos\\theta$$
$$y = r\\sin\\theta = f(\\theta)\\sin\\theta$$

Then use the parametric derivative formula!

$$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$$

---

## Derivatives for Polar Curves

### Find $\\frac{dx}{d\\theta}$ and $\\frac{dy}{d\\theta}$:

$$\\frac{dx}{d\\theta} = \\frac{d}{d\\theta}(r\\cos\\theta) = \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta$$

$$\\frac{dy}{d\\theta} = \\frac{d}{d\\theta}(r\\sin\\theta) = \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta$$

---

### Then:

$$\\frac{dy}{dx} = \\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta}$$

**Memorize this formula or derive it each time using product rule!**

---

## Example 1: Slope of Cardioid

Find $\\frac{dy}{dx}$ for $r = 1 + \\cos\\theta$ at $\\theta = \\frac{\\pi}{2}$.

**Step 1: Find $\\frac{dr}{d\\theta}$**

$$r = 1 + \\cos\\theta$$
$$\\frac{dr}{d\\theta} = -\\sin\\theta$$

---

**Step 2: Compute numerator and denominator**

At $\\theta = \\frac{\\pi}{2}$:
- $r = 1 + \\cos\\frac{\\pi}{2} = 1 + 0 = 1$
- $\\frac{dr}{d\\theta} = -\\sin\\frac{\\pi}{2} = -1$

Numerator:
$$\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = (-1)(1) + (1)(0) = -1$$

Denominator:
$$\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = (-1)(0) - (1)(1) = -1$$

---

**Step 3: Calculate slope**

$$\\frac{dy}{dx} = \\frac{-1}{-1} = 1$$

**Answer**: The slope at $\\theta = \\frac{\\pi}{2}$ is $1$.

---

## Horizontal and Vertical Tangents

### Horizontal Tangent

When $\\frac{dy}{d\\theta} = 0$ and $\\frac{dx}{d\\theta} \\neq 0$:

$$\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = 0$$

---

### Vertical Tangent

When $\\frac{dx}{d\\theta} = 0$ and $\\frac{dy}{d\\theta} \\neq 0$:

$$\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = 0$$

---

## Example 2: Tangent at the Pole

For most polar curves, when $r = 0$ (at the origin/pole):

The tangent line has slope based on the angle $\\theta$ where $r = 0$.

**At the pole, the tangent is the line $\\theta = \\theta_0$** where $r(\\theta_0) = 0$.

---

## Area in Polar Coordinates

The area enclosed by $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$$

> **💡 Key Idea**: Sum up infinitely many thin "pizza slices" with area $\\frac{1}{2}r^2\\Delta\\theta$!

---

## Why This Formula?

Each infinitesimal sector has:
- Radius: $r$
- Angle: $d\\theta$
- Area: $\\frac{1}{2}r^2\\,d\\theta$ (like area of triangle with arc)

Integrate to get total area!

---

## Example 3: Area of Circle

Find the area enclosed by $r = 3$ for $0 \\leq \\theta \\leq 2\\pi$.

**Step 1: Set up integral**

$$A = \\frac{1}{2}\\int_0^{2\\pi} 3^2\\,d\\theta = \\frac{1}{2}\\int_0^{2\\pi} 9\\,d\\theta$$

---

**Step 2: Integrate**

$$= \\frac{9}{2}[\\theta]_0^{2\\pi} = \\frac{9}{2}(2\\pi) = 9\\pi$$

**Answer**: $9\\pi$ (area of circle with radius 3) ✓

---

## Example 4: Area of Cardioid

Find the area enclosed by $r = 1 + \\cos\\theta$.

**Step 1: Determine limits**

Full cardioid: $0 \\leq \\theta \\leq 2\\pi$

By symmetry, can do $0$ to $\\pi$ and double.

---

**Step 2: Set up integral**

$$A = \\frac{1}{2}\\int_0^{2\\pi} (1 + \\cos\\theta)^2\\,d\\theta$$

---

**Step 3: Expand**

$$(1 + \\cos\\theta)^2 = 1 + 2\\cos\\theta + \\cos^2\\theta$$

Use identity: $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$

$$= 1 + 2\\cos\\theta + \\frac{1 + \\cos 2\\theta}{2}$$

$$= \\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}$$

---

**Step 4: Integrate**

$$A = \\frac{1}{2}\\int_0^{2\\pi} \\left(\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}\\right)d\\theta$$

$$= \\frac{1}{2}\\left[\\frac{3\\theta}{2} + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}\\right]_0^{2\\pi}$$

$$= \\frac{1}{2}\\left[3\\pi + 0 + 0 - 0 - 0 - 0\\right]$$

$$= \\frac{3\\pi}{2}$$

**Answer**: $\\frac{3\\pi}{2}$

---

## Area Between Two Polar Curves

For $r_1 = f(\\theta)$ (outer) and $r_2 = g(\\theta)$ (inner) from $\\theta = \\alpha$ to $\\beta$:

$$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} \\left[r_1^2 - r_2^2\\right]d\\theta$$

**Think**: Big circle sector minus small circle sector!

---

## Example 5: Area Between Curves

Find the area inside $r = 2$ but outside $r = 2\\cos\\theta$.

**Step 1: Find intersection points**

$$2 = 2\\cos\\theta$$
$$\\cos\\theta = 1$$
$$\\theta = 0$$

Wait, that's not right. Let me reconsider: when does $2\\cos\\theta \\leq 2$?

When $\\cos\\theta \\leq 1$, which is always true.

Actually, find where $r = 2\\cos\\theta$ intersects $r = 2$:

Actually the circle $r = 2\\cos\\theta$ has maximum radius 2 (when $\\theta = 0$).

Let me set them equal:
$$2\\cos\\theta = 2$$
$$\\cos\\theta = 1$$
$$\\theta = 0$$

Hmm, they're tangent. Let me reconsider the problem...

**Better approach**: $r = 2\\cos\\theta$ is a circle of diameter 2 centered at $(1, 0)$.

The region "inside $r = 2$ but outside $r = 2\\cos\\theta$" needs intersection points.

$$2 = 2\\cos\\theta \\implies \\theta = 0$$

$r = 2\\cos\\theta$ goes negative for $\\frac{\\pi}{2} < \\theta < \\frac{3\\pi}{2}$.

---

For $-\\frac{\\pi}{2} \\leq \\theta \\leq \\frac{\\pi}{2}$, $r = 2\\cos\\theta \\geq 0$ and $\\leq 2$.

**Setup**:
$$A = \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} \\left[2^2 - (2\\cos\\theta)^2\\right]d\\theta$$

$$= \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} (4 - 4\\cos^2\\theta)\\,d\\theta$$

$$= 2\\int_{-\\pi/2}^{\\pi/2} (1 - \\cos^2\\theta)\\,d\\theta$$

$$= 2\\int_{-\\pi/2}^{\\pi/2} \\sin^2\\theta\\,d\\theta$$

Using $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$:

$$= 2\\int_{-\\pi/2}^{\\pi/2} \\frac{1 - \\cos 2\\theta}{2}\\,d\\theta$$

$$= \\left[\\theta - \\frac{\\sin 2\\theta}{2}\\right]_{-\\pi/2}^{\\pi/2}$$

$$= \\left(\\frac{\\pi}{2} - 0\\right) - \\left(-\\frac{\\pi}{2} - 0\\right) = \\pi$$

**Answer**: $\\pi$

---

## Arc Length in Polar

Arc length from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$$

**Derivation**: From parametric form $x = r\\cos\\theta$, $y = r\\sin\\theta$, use:

$$\\left(\\frac{dx}{d\\theta}\\right)^2 + \\left(\\frac{dy}{d\\theta}\\right)^2 = r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2$$

---

## Example 6: Arc Length

Find the perimeter of $r = 2(1 + \\cos\\theta)$ (cardioid).

**Step 1: Find $\\frac{dr}{d\\theta}$**

$$r = 2(1 + \\cos\\theta)$$
$$\\frac{dr}{d\\theta} = -2\\sin\\theta$$

---

**Step 2: Set up integral**

$$L = \\int_0^{2\\pi} \\sqrt{[2(1+\\cos\\theta)]^2 + (-2\\sin\\theta)^2}\\,d\\theta$$

$$= \\int_0^{2\\pi} \\sqrt{4(1+\\cos\\theta)^2 + 4\\sin^2\\theta}\\,d\\theta$$

$$= 2\\int_0^{2\\pi} \\sqrt{(1+\\cos\\theta)^2 + \\sin^2\\theta}\\,d\\theta$$

---

**Step 3: Expand under square root**

$$= 2\\int_0^{2\\pi} \\sqrt{1 + 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta}\\,d\\theta$$

$$= 2\\int_0^{2\\pi} \\sqrt{2 + 2\\cos\\theta}\\,d\\theta$$

$$= 2\\sqrt{2}\\int_0^{2\\pi} \\sqrt{1 + \\cos\\theta}\\,d\\theta$$

---

**Step 4: Use half-angle identity**

$$1 + \\cos\\theta = 2\\cos^2\\frac{\\theta}{2}$$

$$L = 2\\sqrt{2}\\int_0^{2\\pi} \\sqrt{2\\cos^2\\frac{\\theta}{2}}\\,d\\theta$$

$$= 2\\sqrt{2} \\cdot \\sqrt{2}\\int_0^{2\\pi} \\left|\\cos\\frac{\\theta}{2}\\right|d\\theta$$

$$= 4\\int_0^{2\\pi} \\left|\\cos\\frac{\\theta}{2}\\right|d\\theta$$

For $0 \\leq \\theta \\leq \\pi$: $\\cos\\frac{\\theta}{2} \\geq 0$

For $\\pi < \\theta \\leq 2\\pi$: $\\cos\\frac{\\theta}{2} < 0$ (needs absolute value)

By symmetry or direct integration:

$$= 4 \\cdot 2\\int_0^{\\pi} \\cos\\frac{\\theta}{2}\\,d\\theta = 8\\left[2\\sin\\frac{\\theta}{2}\\right]_0^{\\pi}$$

$$= 16[\\sin\\frac{\\pi}{2} - 0] = 16(1) = 16$$

**Answer**: $16$

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the $\\frac{1}{2}$

**WRONG**: $A = \\int r^2\\,d\\theta$

**RIGHT**: $A = \\frac{1}{2}\\int r^2\\,d\\theta$

Area of sector is $\\frac{1}{2}r^2\\theta$!

---

### Mistake 2: Wrong Limits

Always check: what values of $\\theta$ trace the desired region?

For full closed curve, often $0$ to $2\\pi$, but not always!

---

### Mistake 3: Squaring the Wrong Thing

For area between curves:

$$\\frac{1}{2}\\int (r_1^2 - r_2^2)\\,d\\theta$$

NOT $\\frac{1}{2}\\int (r_1 - r_2)^2\\,d\\theta$!

---

### Mistake 4: Missing Intersections

When finding area between curves, find ALL intersection points to determine correct limits!

Don't forget the origin (pole) - curves can pass through at different $\\theta$ values.

---

## 📝 Practice Strategy

1. **For slope**: Use $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$, apply product rule carefully
2. **For area**: Use $A = \\frac{1}{2}\\int r^2\\,d\\theta$, don't forget the $\\frac{1}{2}$!
3. **Expand squares**: $(a + b\\cos\\theta)^2$ and use trig identities
4. **Use half-angle formulas** for $\\cos^2\\theta$ or $\\sin^2\\theta$
5. **Check symmetry** to simplify integrals
6. **Draw the region** - visual helps with limits
7. **For arc length**: Formula is $\\sqrt{r^2 + (dr/d\\theta)^2}$
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the area of one petal of the rose $r = 3\\sin(2\\theta)$.',
            solution: `**Step 1: Find when one petal is traced**

$r = 3\\sin(2\\theta) = 0$ when $2\\theta = 0, \\pi, 2\\pi, \\ldots$

So $\\theta = 0, \\frac{\\pi}{2}, \\pi, \\ldots$

One petal: $0 \\leq \\theta \\leq \\frac{\\pi}{2}$

---

**Step 2: Set up area integral**

$$A = \\frac{1}{2}\\int_0^{\\pi/2} [3\\sin(2\\theta)]^2\\,d\\theta$$

$$= \\frac{1}{2}\\int_0^{\\pi/2} 9\\sin^2(2\\theta)\\,d\\theta$$

$$= \\frac{9}{2}\\int_0^{\\pi/2} \\sin^2(2\\theta)\\,d\\theta$$

---

**Step 3: Use identity $\\sin^2 u = \\frac{1 - \\cos 2u}{2}$**

With $u = 2\\theta$:

$$\\sin^2(2\\theta) = \\frac{1 - \\cos(4\\theta)}{2}$$

$$A = \\frac{9}{2}\\int_0^{\\pi/2} \\frac{1 - \\cos(4\\theta)}{2}\\,d\\theta$$

$$= \\frac{9}{4}\\int_0^{\\pi/2} (1 - \\cos(4\\theta))\\,d\\theta$$

---

**Step 4: Integrate**

$$= \\frac{9}{4}\\left[\\theta - \\frac{\\sin(4\\theta)}{4}\\right]_0^{\\pi/2}$$

$$= \\frac{9}{4}\\left[\\left(\\frac{\\pi}{2} - \\frac{\\sin(2\\pi)}{4}\\right) - (0 - 0)\\right]$$

$$= \\frac{9}{4} \\cdot \\frac{\\pi}{2} = \\frac{9\\pi}{8}$$

**Answer**: $\\frac{9\\pi}{8}$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find $\\frac{dy}{dx}$ for $r = \\theta$ at $\\theta = \\frac{\\pi}{4}$.',
            solution: `**Step 1: Find $\\frac{dr}{d\\theta}$**

$$r = \\theta$$
$$\\frac{dr}{d\\theta} = 1$$

---

**Step 2: Compute derivatives**

$$\\frac{dx}{d\\theta} = \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta = \\cos\\theta - \\theta\\sin\\theta$$

$$\\frac{dy}{d\\theta} = \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta = \\sin\\theta + \\theta\\cos\\theta$$

---

**Step 3: Evaluate at $\\theta = \\frac{\\pi}{4}$**

$$\\frac{dx}{d\\theta}\\bigg|_{\\pi/4} = \\cos\\frac{\\pi}{4} - \\frac{\\pi}{4}\\sin\\frac{\\pi}{4}$$

$$= \\frac{\\sqrt{2}}{2} - \\frac{\\pi}{4} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}\\left(1 - \\frac{\\pi}{4}\\right)$$

$$\\frac{dy}{d\\theta}\\bigg|_{\\pi/4} = \\sin\\frac{\\pi}{4} + \\frac{\\pi}{4}\\cos\\frac{\\pi}{4}$$

$$= \\frac{\\sqrt{2}}{2} + \\frac{\\pi}{4} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2}}{2}\\left(1 + \\frac{\\pi}{4}\\right)$$

---

**Step 4: Calculate slope**

$$\\frac{dy}{dx} = \\frac{\\frac{\\sqrt{2}}{2}(1 + \\frac{\\pi}{4})}{\\frac{\\sqrt{2}}{2}(1 - \\frac{\\pi}{4})} = \\frac{1 + \\frac{\\pi}{4}}{1 - \\frac{\\pi}{4}}$$

$$= \\frac{4 + \\pi}{4 - \\pi}$$

**Answer**: $\\frac{4 + \\pi}{4 - \\pi}$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find the area inside both $r = \\sin\\theta$ and $r = \\cos\\theta$.',
            solution: `**Step 1: Find intersection points**

Set equal:
$$\\sin\\theta = \\cos\\theta$$
$$\\tan\\theta = 1$$
$$\\theta = \\frac{\\pi}{4}$$ (in first quadrant)

---

**Step 2: Visualize**

$r = \\sin\\theta$: circle with diameter on positive y-axis

$r = \\cos\\theta$: circle with diameter on positive x-axis

Both pass through origin and intersect at $\\theta = \\frac{\\pi}{4}$.

---

**Step 3: Determine which is outer**

For $0 \\leq \\theta \\leq \\frac{\\pi}{4}$: $\\cos\\theta \\geq \\sin\\theta$, so $r = \\cos\\theta$ is outer.

For $\\frac{\\pi}{4} \\leq \\theta \\leq \\frac{\\pi}{2}$: $\\sin\\theta \\geq \\cos\\theta$, so $r = \\sin\\theta$ is outer.

---

**Step 4: By symmetry, use one piece and double**

$$A = 2 \\cdot \\frac{1}{2}\\int_0^{\\pi/4} \\cos^2\\theta\\,d\\theta$$

$$= \\int_0^{\\pi/4} \\cos^2\\theta\\,d\\theta$$

---

**Step 5: Use identity $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$**

$$= \\int_0^{\\pi/4} \\frac{1 + \\cos 2\\theta}{2}\\,d\\theta$$

$$= \\frac{1}{2}\\left[\\theta + \\frac{\\sin 2\\theta}{2}\\right]_0^{\\pi/4}$$

$$= \\frac{1}{2}\\left[\\frac{\\pi}{4} + \\frac{\\sin(\\pi/2)}{2} - 0\\right]$$

$$= \\frac{1}{2}\\left[\\frac{\\pi}{4} + \\frac{1}{2}\\right]$$

$$= \\frac{\\pi}{8} + \\frac{1}{4}$$

**Answer**: $\\frac{\\pi}{8} + \\frac{1}{4}$ or $\\frac{\\pi + 2}{8}$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the formula for slope dy/dx in polar coordinates?',
            back: '$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$ where $\\frac{dx}{d\\theta} = \\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta$ and $\\frac{dy}{d\\theta} = \\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta$. Use product rule on $x=r\\cos\\theta, y=r\\sin\\theta$ treating $r$ as function of $\\theta$.',
            hint: 'Product rule on x and y as functions of θ',
          },
          {
            front: 'What is the area formula in polar coordinates?',
            back: '$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$ for single region. Between curves: $A = \\frac{1}{2}\\int [r_{outer}^2 - r_{inner}^2]\\,d\\theta$. The $\\frac{1}{2}$ comes from sector area formula $\\frac{1}{2}r^2\\theta$. Don\'t forget it!',
            hint: 'One-half integral of r-squared',
          },
          {
            front: 'What is the arc length formula in polar coordinates?',
            back: '$L = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + (\\frac{dr}{d\\theta})^2}\\,d\\theta$. Comes from parametric arc length with $x=r\\cos\\theta, y=r\\sin\\theta$. Can simplify: $(dx/d\\theta)^2 + (dy/d\\theta)^2 = r^2 + (dr/d\\theta)^2$.',
            hint: 'Square root of r-squared plus r-prime-squared',
          },
          {
            front: 'Common mistakes with polar calculus?',
            back: '1) Forgetting $\\frac{1}{2}$ in area formula. 2) Wrong limits (check what $\\theta$ traces region). 3) For area between: use $r_1^2 - r_2^2$ NOT $(r_1-r_2)^2$. 4) Missing intersections at origin (different $\\theta$ values). 5) Not checking which curve is outer.',
            hint: 'Half in area, squared individually for between',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Parametric & Polar (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  3. Introduction to Polar Coordinates')
  console.log('  4. Calculus with Polar Coordinates')
  console.log('\n🎯 Polar coordinates complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
