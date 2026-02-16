import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Parametric & Polar (BC) micro-lessons - Part 1...')

  // Create Parametric & Polar category (BC content)
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
          'parametric-equations-intro',
          'parametric-calculus',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Introduction to Parametric Equations
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'parametric-equations-intro',
      title: 'Introduction to Parametric Equations',
      description: 'Understanding curves defined parametrically',
      order: 1,
      categoryId: parametricPolarCategory.id,
      isPremium: true,
      textContent: `
# 📐 Introduction to Parametric Equations

## What Are Parametric Equations?

Instead of $y = f(x)$, we define both $x$ and $y$ in terms of a third variable $t$ (the **parameter**):

$$x = f(t), \\quad y = g(t)$$

> **💡 Key Idea**: The parameter $t$ often represents time, and the equations trace out a path or curve!

---

## Why Use Parametric Equations?

### Advantages:

1. **Can describe curves that aren't functions**
   - Example: A circle fails the vertical line test
   - But parametrically: $x = \\cos t$, $y = \\sin t$ works perfectly!

2. **Natural for motion problems**
   - $t$ = time
   - Position: $(x(t), y(t))$
   - Describes the path of a moving object

3. **More flexibility**
   - Can go backwards, loop, cross itself
   - Can control speed along the curve

---

## Example 1: A Simple Line

Consider: $x = t$, $y = 2t + 1$ for $t \\in \\mathbb{R}$

**Step 1: Make a table**

| $t$ | $x = t$ | $y = 2t + 1$ | Point |
|-----|---------|--------------|-------|
| -2  | -2      | -3           | (-2, -3) |
| -1  | -1      | -1           | (-1, -1) |
| 0   | 0       | 1            | (0, 1) |
| 1   | 1       | 3            | (1, 3) |
| 2   | 2       | 5            | (2, 5) |

---

**Step 2: Eliminate the parameter**

From $x = t$, we have $t = x$

Substitute into $y = 2t + 1$:
$$y = 2x + 1$$

This is a **line** with slope 2!

**Direction**: As $t$ increases, we move in the direction of increasing $x$ (left to right).

---

## Example 2: A Circle

Consider: $x = 3\\cos t$, $y = 3\\sin t$ for $0 \\leq t \\leq 2\\pi$

**Step 1: Eliminate the parameter**

We know: $\\cos^2 t + \\sin^2 t = 1$

From the equations:
$$\\frac{x}{3} = \\cos t, \\quad \\frac{y}{3} = \\sin t$$

Square and add:
$$\\left(\\frac{x}{3}\\right)^2 + \\left(\\frac{y}{3}\\right)^2 = \\cos^2 t + \\sin^2 t = 1$$

$$\\frac{x^2}{9} + \\frac{y^2}{9} = 1$$

$$x^2 + y^2 = 9$$

---

**This is a circle** with center $(0, 0)$ and radius 3!

**Direction**: As $t$ goes from 0 to $2\\pi$:
- At $t = 0$: $(3, 0)$ (starting point)
- At $t = \\pi/2$: $(0, 3)$ (top)
- At $t = \\pi$: $(-3, 0)$ (left)
- At $t = 3\\pi/2$: $(0, -3)$ (bottom)

**Counterclockwise** motion!

---

## Example 3: An Ellipse

Consider: $x = 4\\cos t$, $y = 2\\sin t$ for $0 \\leq t \\leq 2\\pi$

**Eliminate the parameter**:

$$\\frac{x}{4} = \\cos t, \\quad \\frac{y}{2} = \\sin t$$

$$\\left(\\frac{x}{4}\\right)^2 + \\left(\\frac{y}{2}\\right)^2 = 1$$

$$\\frac{x^2}{16} + \\frac{y^2}{4} = 1$$

**This is an ellipse** with semi-major axis 4 (horizontal) and semi-minor axis 2 (vertical)!

---

## Direction of Motion

The **orientation** of the curve matters!

**To find direction**:
1. Plug in a few values of $t$
2. See which way the point moves as $t$ increases
3. Draw arrows on the curve

**Example**: For $x = \\cos t$, $y = \\sin t$:
- $t = 0 \\to \\pi/2$: Point moves from $(1,0)$ to $(0,1)$
- This is **counterclockwise**

---

## Eliminating the Parameter

### Common Techniques:

**1. Solve for $t$ from one equation, substitute into other**

Example: $x = t + 1$, $y = t^2$

From first: $t = x - 1$

Substitute: $y = (x-1)^2$

---

**2. Use trigonometric identities**

For $x = a\\cos t$, $y = b\\sin t$:

$$\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y}{b}\\right)^2 = 1$$

---

**3. Use relationships between expressions**

Example: $x = t^2$, $y = t^3$

Note: $y = t \\cdot t^2 = t \\cdot x$

But $t = \\pm\\sqrt{x}$, so $y = \\pm x\\sqrt{x} = \\pm x^{3/2}$

---

## Example 4: A Parabola

Consider: $x = t^2$, $y = 2t$ for $t \\geq 0$

**Step 1: Solve for $t$**

From $y = 2t$: $t = \\frac{y}{2}$

---

**Step 2: Substitute**

$$x = t^2 = \\left(\\frac{y}{2}\\right)^2 = \\frac{y^2}{4}$$

$$y^2 = 4x$$

This is a **parabola** opening to the right!

**Restriction**: Since $t \\geq 0$, we have $y = 2t \\geq 0$, so only the upper half!

---

## Domain Restrictions

Pay attention to the **range of $t$**!

**Example**: $x = \\cos t$, $y = \\sin t$ for $0 \\leq t \\leq \\pi$

This traces only the **upper semicircle** (from $(1,0)$ to $(-1,0)$), not the full circle!

---

## Parametric vs Cartesian

### Same Curve, Different Parametrizations

**Example**: The line $y = x$ can be represented as:

1. $x = t, y = t$
2. $x = 2t, y = 2t$
3. $x = t^3, y = t^3$

All trace the same line, but at different "speeds"!

---

## Common Parametric Curves

### Line through $(x_0, y_0)$ with slope $m$:

$$x = x_0 + at, \\quad y = y_0 + bt$$

where $\\frac{b}{a} = m$ (slope)

---

### Circle with center $(h, k)$ and radius $r$:

$$x = h + r\\cos t, \\quad y = k + r\\sin t$$

for $0 \\leq t \\leq 2\\pi$

---

### Ellipse with center $(h, k)$:

$$x = h + a\\cos t, \\quad y = k + b\\sin t$$

where $a$ = horizontal radius, $b$ = vertical radius

---

## Example 5: A Cycloid

The path traced by a point on the rim of a rolling wheel!

$$x = r(t - \\sin t), \\quad y = r(1 - \\cos t)$$

where $r$ is the radius of the wheel.

**Famous curve** in physics - fastest descent path (brachistochrone)!

---

## Finding Intersections

To find where a parametric curve intersects itself or another curve:

**Step 1**: Set $x(t_1) = x(t_2)$ and $y(t_1) = y(t_2)$

**Step 2**: Solve for $t_1$ and $t_2$ (with $t_1 \\neq t_2$)

**Step 3**: Those $t$ values give the intersection point(s)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Domain Restrictions

When eliminating $t$, the Cartesian equation might represent more than the parametric curve!

Always note restrictions on $t$, $x$, or $y$.

---

### Mistake 2: Losing Direction Information

The Cartesian equation doesn't tell you which way the curve is traced!

Always check a few points to determine orientation.

---

### Mistake 3: Assuming One-to-One

A parametric curve can cross itself!

Different values of $t$ can give the same point $(x, y)$.

---

## Applications of Parametric Equations

1. **Projectile motion**: 
   - $x = (v_0\\cos\\theta)t$
   - $y = (v_0\\sin\\theta)t - \\frac{1}{2}gt^2$

2. **Planetary orbits**: Elliptical paths

3. **Computer graphics**: Bezier curves for design

4. **Engineering**: Cam profiles, gear shapes

---

## 📝 Practice Strategy

1. **Make a table** of values for small integer $t$ values
2. **Plot points** and connect smoothly
3. **Draw arrows** showing direction as $t$ increases
4. **Eliminate parameter** to identify the curve type
5. **Check domain** - does the parametric curve trace all or part of the Cartesian curve?
6. **Identify key features**: starting point, ending point, orientation
7. **Look for symmetry** or special structure
`,
      exampleProblems: {
        create: [
          {
            question: 'Eliminate the parameter for $x = 1 + 2t$, $y = 3 - t$ and sketch the curve, indicating direction.',
            solution: `**Step 1: Solve for $t$ from one equation**

From $x = 1 + 2t$:
$$2t = x - 1$$
$$t = \\frac{x-1}{2}$$

---

**Step 2: Substitute into the other equation**

$$y = 3 - t = 3 - \\frac{x-1}{2}$$

$$y = 3 - \\frac{x}{2} + \\frac{1}{2} = \\frac{7}{2} - \\frac{x}{2}$$

$$y = -\\frac{1}{2}x + \\frac{7}{2}$$

This is a **line** with slope $-\\frac{1}{2}$ and y-intercept $\\frac{7}{2}$.

---

**Step 3: Find direction**

Make a table:

| $t$ | $x = 1+2t$ | $y = 3-t$ |
|-----|------------|-----------|
| 0   | 1          | 3         |
| 1   | 3          | 2         |
| 2   | 5          | 1         |

As $t$ increases, $x$ increases and $y$ decreases.

**Direction**: Left to right, downward along the line.

**Answer**: Line $y = -\\frac{1}{2}x + \\frac{7}{2}$, traced left to right as $t$ increases.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'For $x = 2\\cos t$, $y = 3\\sin t$ where $0 \\leq t \\leq 2\\pi$, eliminate the parameter and describe the curve.',
            solution: `**Step 1: Use the Pythagorean identity**

From the equations:
$$\\cos t = \\frac{x}{2}, \\quad \\sin t = \\frac{y}{3}$$

---

**Step 2: Apply $\\cos^2 t + \\sin^2 t = 1$**

$$\\left(\\frac{x}{2}\\right)^2 + \\left(\\frac{y}{3}\\right)^2 = 1$$

$$\\frac{x^2}{4} + \\frac{y^2}{9} = 1$$

---

**Step 3: Identify the curve**

This is an **ellipse** with:
- Center: $(0, 0)$
- Horizontal semi-axis: $a = 2$
- Vertical semi-axis: $b = 3$

---

**Step 4: Find direction**

Check a few points:
- $t = 0$: $(2, 0)$
- $t = \\pi/2$: $(0, 3)$
- $t = \\pi$: $(-2, 0)$
- $t = 3\\pi/2$: $(0, -3)$

**Direction**: Counterclockwise, starting at $(2, 0)$.

**Answer**: Ellipse $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$, traced counterclockwise once.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Eliminate the parameter for $x = e^t$, $y = e^{2t} + 1$ and identify any restrictions.',
            solution: `**Step 1: Express $t$ in terms of $x$**

From $x = e^t$:
$$t = \\ln x$$

(Note: This requires $x > 0$)

---

**Step 2: Substitute into $y$ equation**

$$y = e^{2t} + 1 = (e^t)^2 + 1$$

Since $e^t = x$:
$$y = x^2 + 1$$

---

**Step 3: Identify restrictions**

Since $x = e^t$ and $e^t > 0$ for all $t$:
- Domain: $x > 0$
- This is only the **right half** of the parabola $y = x^2 + 1$

---

**Step 4: Additional restriction on $y$**

When $x > 0$: $x^2 > 0$, so $y = x^2 + 1 > 1$

Therefore: $y > 1$

---

**Answer**: Parabola $y = x^2 + 1$ for $x > 0$ (equivalently, $y > 1$).

The curve is only the right branch of the parabola.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are parametric equations and why use them?',
            back: 'Parametric equations define $x$ and $y$ separately in terms of parameter $t$: $x=f(t), y=g(t)$. Advantages: 1) Can describe non-functions (like circles). 2) Natural for motion ($t$=time). 3) Control direction and speed. 4) More flexibility (loops, self-intersections).',
            hint: 'Both coordinates depend on parameter t',
          },
          {
            front: 'How do you eliminate the parameter from parametric equations?',
            back: 'Common methods: 1) Solve for $t$ from one equation, substitute into other. 2) Use trig identities (for $x=a\\cos t, y=b\\sin t$ use $\\cos^2t+\\sin^2t=1$). 3) Find algebraic relationships. Always note domain restrictions after eliminating!',
            hint: 'Solve for t or use identities',
          },
          {
            front: 'How do you determine the direction of a parametric curve?',
            back: 'Plug in increasing values of $t$ and see which way the point $(x(t), y(t))$ moves. Draw arrows on the curve. Example: For circle $x=\\cos t, y=\\sin t$, as $t$ goes $0\\to\\pi/2$, point moves $(1,0)\\to(0,1)$ (counterclockwise).',
            hint: 'Check where points move as t increases',
          },
          {
            front: 'What are parametric equations for common curves?',
            back: 'Line through $(x_0,y_0)$: $x=x_0+at, y=y_0+bt$. Circle center $(h,k)$ radius $r$: $x=h+r\\cos t, y=k+r\\sin t$. Ellipse: $x=h+a\\cos t, y=k+b\\sin t$. Always specify parameter range (usually $0\\le t\\le 2\\pi$ for closed curves).',
            hint: 'Line: linear in t; Circle/ellipse: trig functions',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Calculus with Parametric Equations
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'parametric-calculus',
      title: 'Calculus with Parametric Equations',
      description: 'Derivatives, tangent lines, and arc length for parametric curves',
      order: 2,
      categoryId: parametricPolarCategory.id,
      isPremium: true,
      textContent: `
# 📊 Calculus with Parametric Equations

## Finding dy/dx for Parametric Curves

For parametric equations $x = f(t)$ and $y = g(t)$:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}$$

provided $f'(t) \\neq 0$.

> **💡 Key Idea**: Use the chain rule! Since both $x$ and $y$ depend on $t$, divide the rates of change.

---

## Why This Formula Works

By the chain rule:
$$\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}$$

Solving for $\\frac{dy}{dx}$:
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$

**Think**: "How fast is $y$ changing compared to how fast $x$ is changing?"

---

## Example 1: Finding dy/dx

For $x = t^2$, $y = t^3$, find $\\frac{dy}{dx}$.

**Step 1: Find derivatives with respect to $t$**

$$\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2$$

---

**Step 2: Apply formula**

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3t}{2}$$

---

**Step 3: Express in terms of $x$ (optional)**

Since $x = t^2$, we have $t = \\pm\\sqrt{x}$

$$\\frac{dy}{dx} = \\frac{3\\sqrt{x}}{2} \\text{ or } \\frac{-3\\sqrt{x}}{2}$$

(depending on which branch)

---

## Example 2: Slope at a Point

For $x = 3\\cos t$, $y = 2\\sin t$, find the slope at $t = \\frac{\\pi}{4}$.

**Step 1: Find derivatives**

$$\\frac{dx}{dt} = -3\\sin t, \\quad \\frac{dy}{dt} = 2\\cos t$$

---

**Step 2: Find dy/dx**

$$\\frac{dy}{dx} = \\frac{2\\cos t}{-3\\sin t} = -\\frac{2\\cos t}{3\\sin t} = -\\frac{2}{3}\\cot t$$

---

**Step 3: Evaluate at $t = \\frac{\\pi}{4}$**

$$\\frac{dy}{dx}\\bigg|_{t=\\pi/4} = -\\frac{2}{3}\\cot\\frac{\\pi}{4} = -\\frac{2}{3}(1) = -\\frac{2}{3}$$

**Answer**: The slope at $t = \\frac{\\pi}{4}$ is $-\\frac{2}{3}$.

---

## Horizontal and Vertical Tangents

### Horizontal Tangent

Occurs when $\\frac{dy}{dx} = 0$

This happens when:
- $\\frac{dy}{dt} = 0$ AND
- $\\frac{dx}{dt} \\neq 0$

---

### Vertical Tangent

Occurs when $\\frac{dy}{dx}$ is undefined

This happens when:
- $\\frac{dx}{dt} = 0$ AND
- $\\frac{dy}{dt} \\neq 0$

---

### Singular Point

If $\\frac{dx}{dt} = 0$ AND $\\frac{dy}{dt} = 0$ simultaneously:
- The curve might have a cusp, self-intersection, or other singularity
- Need more analysis (possibly using higher derivatives)

---

## Example 3: Finding Tangent Lines

For $x = t^3 - 3t$, $y = t^2$, find all points where the tangent is horizontal.

**Step 1: Find derivatives**

$$\\frac{dx}{dt} = 3t^2 - 3, \\quad \\frac{dy}{dt} = 2t$$

---

**Step 2: Set $\\frac{dy}{dt} = 0$**

$$2t = 0 \\implies t = 0$$

---

**Step 3: Check that $\\frac{dx}{dt} \\neq 0$ at $t = 0$**

$$\\frac{dx}{dt}\\bigg|_{t=0} = 3(0)^2 - 3 = -3 \\neq 0$$ ✓

---

**Step 4: Find the point**

At $t = 0$:
$$x = 0^3 - 3(0) = 0$$
$$y = 0^2 = 0$$

**Answer**: Horizontal tangent at point $(0, 0)$.

---

## Second Derivative

To find $\\frac{d^2y}{dx^2}$ for parametric curves:

$$\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{d/dt(dy/dx)}{dx/dt}$$

**Process**:
1. Find $\\frac{dy}{dx}$ as before
2. Take derivative with respect to $t$: $\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)$
3. Divide by $\\frac{dx}{dt}$

---

## Example 4: Second Derivative

For $x = t^2$, $y = t^3$, find $\\frac{d^2y}{dx^2}$.

**Step 1: Find first derivative**

$$\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}$$

---

**Step 2: Differentiate with respect to $t$**

$$\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = \\frac{d}{dt}\\left(\\frac{3t}{2}\\right) = \\frac{3}{2}$$

---

**Step 3: Divide by $\\frac{dx}{dt}$**

$$\\frac{d^2y}{dx^2} = \\frac{3/2}{2t} = \\frac{3}{4t}$$

**Answer**: $\\frac{d^2y}{dx^2} = \\frac{3}{4t}$

---

## Arc Length of Parametric Curves

The arc length from $t = a$ to $t = b$ is:

$$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

**Think**: Speed = $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$, integrate over time!

---

## Where This Comes From

Infinitesimal arc length:
$$ds = \\sqrt{(dx)^2 + (dy)^2}$$

$$= \\sqrt{\\left(\\frac{dx}{dt}dt\\right)^2 + \\left(\\frac{dy}{dt}dt\\right)^2}$$

$$= \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

Integrate from $t = a$ to $t = b$!

---

## Example 5: Arc Length of Circle

Find the circumference of $x = r\\cos t$, $y = r\\sin t$ for $0 \\leq t \\leq 2\\pi$.

**Step 1: Find derivatives**

$$\\frac{dx}{dt} = -r\\sin t, \\quad \\frac{dy}{dt} = r\\cos t$$

---

**Step 2: Compute the integrand**

$$\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} = \\sqrt{r^2\\sin^2 t + r^2\\cos^2 t}$$

$$= \\sqrt{r^2(\\sin^2 t + \\cos^2 t)} = \\sqrt{r^2} = r$$

---

**Step 3: Integrate**

$$L = \\int_0^{2\\pi} r\\,dt = r[t]_0^{2\\pi} = r(2\\pi - 0) = 2\\pi r$$

**Answer**: $2\\pi r$ (the circumference formula!) ✓

---

## Example 6: Arc Length with Integration

Find the arc length of $x = t^2$, $y = \\frac{2}{3}t^3$ from $t = 0$ to $t = 1$.

**Step 1: Find derivatives**

$$\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 2t^2$$

---

**Step 2: Set up integral**

$$L = \\int_0^1 \\sqrt{(2t)^2 + (2t^2)^2}\\,dt$$

$$= \\int_0^1 \\sqrt{4t^2 + 4t^4}\\,dt$$

$$= \\int_0^1 \\sqrt{4t^2(1 + t^2)}\\,dt$$

$$= \\int_0^1 2t\\sqrt{1 + t^2}\\,dt$$

---

**Step 3: Use substitution**

Let $u = 1 + t^2$, $du = 2t\\,dt$

When $t = 0$: $u = 1$
When $t = 1$: $u = 2$

$$L = \\int_1^2 \\sqrt{u}\\,du = \\left[\\frac{2u^{3/2}}{3}\\right]_1^2$$

$$= \\frac{2(2)^{3/2}}{3} - \\frac{2(1)^{3/2}}{3} = \\frac{2(2\\sqrt{2})}{3} - \\frac{2}{3}$$

$$= \\frac{4\\sqrt{2} - 2}{3}$$

**Answer**: $\\frac{4\\sqrt{2} - 2}{3}$ or $\\frac{2(2\\sqrt{2} - 1)}{3}$

---

## Surface Area of Revolution

When rotating a parametric curve around the x-axis from $t = a$ to $t = b$:

$$S = 2\\pi \\int_a^b y\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

Around the y-axis:

$$S = 2\\pi \\int_a^b x\\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

---

## ⚠️ Common Mistakes

### Mistake 1: Flipping the Fraction

**WRONG**: $\\frac{dy}{dx} = \\frac{dx/dt}{dy/dt}$

**RIGHT**: $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$

The derivative you want is on top!

---

### Mistake 2: Forgetting to Check Conditions

For horizontal tangent: $\\frac{dy}{dt} = 0$ AND $\\frac{dx}{dt} \\neq 0$

Don't forget to verify the second condition!

---

### Mistake 3: Wrong Arc Length Formula

**WRONG**: $L = \\int \\sqrt{(dx)^2 + (dy)^2}$

**RIGHT**: $L = \\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$

Need to integrate with respect to the parameter!

---

### Mistake 4: Second Derivative Error

$$\\frac{d^2y}{dx^2} \\neq \\frac{d^2y/dt^2}{d^2x/dt^2}$$

Must use: $\\frac{d^2y}{dx^2} = \\frac{d/dt(dy/dx)}{dx/dt}$

---

## Summary of Formulas

### First Derivative:
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$

### Second Derivative:
$$\\frac{d^2y}{dx^2} = \\frac{d/dt(dy/dx)}{dx/dt}$$

### Arc Length:
$$L = \\int_a^b \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt$$

---

## 📝 Practice Strategy

1. **Find $\\frac{dx}{dt}$ and $\\frac{dy}{dt}$** first
2. **For slope**: Divide $\\frac{dy}{dt}$ by $\\frac{dx}{dt}$
3. **For horizontal tangent**: Set $\\frac{dy}{dt} = 0$, check $\\frac{dx}{dt} \\neq 0$
4. **For vertical tangent**: Set $\\frac{dx}{dt} = 0$, check $\\frac{dy}{dt} \\neq 0$
5. **For arc length**: Use formula with square root, often needs u-substitution
6. **Check your setup** before integrating
7. **Simplify** under the square root if possible
`,
      exampleProblems: {
        create: [
          {
            question: 'For $x = 2t - 1$, $y = t^2 + 3$, find the equation of the tangent line at $t = 2$.',
            solution: `**Step 1: Find the point at $t = 2$**

$$x = 2(2) - 1 = 3$$
$$y = 2^2 + 3 = 7$$

Point: $(3, 7)$

---

**Step 2: Find derivatives**

$$\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 2t$$

---

**Step 3: Find slope at $t = 2$**

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{2t}{2} = t$$

At $t = 2$: $\\frac{dy}{dx} = 2$

---

**Step 4: Write tangent line equation**

Using point-slope form with point $(3, 7)$ and slope $m = 2$:

$$y - 7 = 2(x - 3)$$
$$y - 7 = 2x - 6$$
$$y = 2x + 1$$

**Answer**: $y = 2x + 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'For $x = \\cos t$, $y = \\sin 2t$ where $0 \\leq t \\leq 2\\pi$, find all points where the tangent line is vertical.',
            solution: `**Step 1: Find derivatives**

$$\\frac{dx}{dt} = -\\sin t$$
$$\\frac{dy}{dt} = 2\\cos 2t$$

---

**Step 2: For vertical tangent, set $\\frac{dx}{dt} = 0$**

$$-\\sin t = 0$$
$$\\sin t = 0$$

In $[0, 2\\pi]$: $t = 0, \\pi, 2\\pi$

---

**Step 3: Check that $\\frac{dy}{dt} \\neq 0$ at these values**

At $t = 0$: $\\frac{dy}{dt} = 2\\cos(0) = 2 \\neq 0$ ✓

At $t = \\pi$: $\\frac{dy}{dt} = 2\\cos(2\\pi) = 2 \\neq 0$ ✓

At $t = 2\\pi$: $\\frac{dy}{dt} = 2\\cos(4\\pi) = 2 \\neq 0$ ✓

---

**Step 4: Find the points**

At $t = 0$: $x = \\cos 0 = 1$, $y = \\sin 0 = 0$ → $(1, 0)$

At $t = \\pi$: $x = \\cos \\pi = -1$, $y = \\sin 2\\pi = 0$ → $(-1, 0)$

At $t = 2\\pi$: $x = \\cos 2\\pi = 1$, $y = \\sin 4\\pi = 0$ → $(1, 0)$

(Note: $t=0$ and $t=2\\pi$ give the same point)

---

**Answer**: Vertical tangents at $(1, 0)$ and $(-1, 0)$.`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find the arc length of $x = e^t\\cos t$, $y = e^t\\sin t$ from $t = 0$ to $t = \\pi/2$.',
            solution: `**Step 1: Find derivatives**

Using product rule:

$$\\frac{dx}{dt} = e^t\\cos t + e^t(-\\sin t) = e^t(\\cos t - \\sin t)$$

$$\\frac{dy}{dt} = e^t\\sin t + e^t\\cos t = e^t(\\sin t + \\cos t)$$

---

**Step 2: Compute $(dx/dt)^2 + (dy/dt)^2$**

$$(dx/dt)^2 = e^{2t}(\\cos t - \\sin t)^2 = e^{2t}(\\cos^2 t - 2\\sin t\\cos t + \\sin^2 t)$$

$$= e^{2t}(1 - 2\\sin t\\cos t)$$

$$(dy/dt)^2 = e^{2t}(\\sin t + \\cos t)^2 = e^{2t}(\\sin^2 t + 2\\sin t\\cos t + \\cos^2 t)$$

$$= e^{2t}(1 + 2\\sin t\\cos t)$$

---

**Step 3: Add**

$$(dx/dt)^2 + (dy/dt)^2 = e^{2t}(1 - 2\\sin t\\cos t) + e^{2t}(1 + 2\\sin t\\cos t)$$

$$= e^{2t}(2) = 2e^{2t}$$

---

**Step 4: Set up arc length integral**

$$L = \\int_0^{\\pi/2} \\sqrt{2e^{2t}}\\,dt = \\int_0^{\\pi/2} e^t\\sqrt{2}\\,dt$$

$$= \\sqrt{2}\\int_0^{\\pi/2} e^t\\,dt$$

---

**Step 5: Integrate**

$$= \\sqrt{2}[e^t]_0^{\\pi/2}$$

$$= \\sqrt{2}(e^{\\pi/2} - e^0)$$

$$= \\sqrt{2}(e^{\\pi/2} - 1)$$

**Answer**: $\\sqrt{2}(e^{\\pi/2} - 1)$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the formula for dy/dx in parametric equations?',
            back: '$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g\'(t)}{f\'(t)}$ where $x=f(t), y=g(t)$. Comes from chain rule: divide rate of change of $y$ by rate of change of $x$. Works when $dx/dt \\neq 0$.',
            hint: 'Divide dy/dt by dx/dt',
          },
          {
            front: 'When does a parametric curve have horizontal or vertical tangents?',
            back: 'Horizontal: $\\frac{dy}{dt}=0$ AND $\\frac{dx}{dt}\\neq 0$. Vertical: $\\frac{dx}{dt}=0$ AND $\\frac{dy}{dt}\\neq 0$. If both derivatives are 0, it\'s a singular point (cusp, self-intersection, etc.) needing further analysis.',
            hint: 'Horizontal: dy/dt=0; Vertical: dx/dt=0',
          },
          {
            front: 'What is the arc length formula for parametric curves?',
            back: '$L = \\int_a^b \\sqrt{(\\frac{dx}{dt})^2 + (\\frac{dy}{dt})^2}\\,dt$ from $t=a$ to $t=b$. The expression under square root is speed (rate of change of position). Integrating speed over time gives distance traveled.',
            hint: 'Integral of square root of sum of squares',
          },
          {
            front: 'How do you find the second derivative d²y/dx² parametrically?',
            back: '$\\frac{d^2y}{dx^2} = \\frac{d/dt(dy/dx)}{dx/dt}$. First find $dy/dx$, then differentiate it with respect to $t$, then divide by $dx/dt$. NOT $\\frac{d^2y/dt^2}{d^2x/dt^2}$ (common mistake)!',
            hint: 'Differentiate dy/dx with respect to t, divide by dx/dt',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Parametric & Polar (BC) micro-lessons!')
  console.log('\nTopics created:')
  console.log('  1. Introduction to Parametric Equations')
  console.log('  2. Calculus with Parametric Equations')
  console.log('\n📐 Parametric equations complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
