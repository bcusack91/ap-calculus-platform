import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Integration micro-lessons - Part 4...')

  // Get the Integration category
  const integrationCategory = await prisma.category.upsert({
    where: { slug: 'integration' },
    update: {},
    create: {
      slug: 'integration',
      name: 'Integration',
      description: 'Antiderivatives and the reverse process of differentiation',
      order: 4,
      icon: '∫',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'area-between-curves',
          'volumes-disk-method',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Area Between Curves
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'area-between-curves',
      title: 'Area Between Curves',
      description: 'Finding area enclosed by two functions',
      order: 7,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 📐 Area Between Curves

## The Setup

How do we find the area between **two curves**?

**Example**: Find the area between $f(x) = x^2$ and $g(x) = x$ from $x = 0$ to $x = 1$.

> **💡 Key Idea**: Area between curves = (Upper curve) - (Lower curve), integrated over the interval!

$$\\text{Area} = \\int_a^b [f(x) - g(x)]\\,dx$$

where $f(x) \\geq g(x)$ on $[a, b]$

---

## The Formula (Vertical Slices)

### When integrating with respect to x

$$A = \\int_a^b [\\text{top} - \\text{bottom}]\\,dx$$

**Steps**:
1. **Sketch** the curves
2. **Identify** which is on top
3. **Find** intersection points (if needed for limits)
4. **Integrate** (top - bottom)

---

## Example 1: Basic Area Between Curves

Find the area between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$.

**Step 1: Sketch the curves**

$y = x$ is a line through the origin
$y = x^2$ is a parabola

On $[0, 1]$, the line is above the parabola.

---

**Step 2: Set up integral**

Top curve: $y = x$
Bottom curve: $y = x^2$

$$A = \\int_0^1 (x - x^2)\\,dx$$

---

**Step 3: Integrate**

$$= \\int_0^1 (x - x^2)\\,dx$$

$$= \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1$$

$$= \\left(\\frac{1}{2} - \\frac{1}{3}\\right) - (0 - 0)$$

$$= \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}$$

**Answer**: $\\frac{1}{6}$ square units

---

## Finding Intersection Points

Often, the limits of integration are **intersection points** of the curves.

**To find intersections**: Set the functions equal and solve!

$$f(x) = g(x)$$

---

## Example 2: Finding Intersections First

Find the area between $y = x^2$ and $y = 2x + 3$.

**Step 1: Find intersection points**

Set $x^2 = 2x + 3$:

$$x^2 = 2x + 3$$
$$x^2 - 2x - 3 = 0$$
$$(x - 3)(x + 1) = 0$$

So $x = -1$ or $x = 3$

---

**Step 2: Determine which is on top**

Test a point between $x = -1$ and $x = 3$, say $x = 0$:

At $x = 0$: 
- Line: $y = 2(0) + 3 = 3$
- Parabola: $y = 0^2 = 0$

The line is above the parabola!

---

**Step 3: Set up and evaluate integral**

$$A = \\int_{-1}^3 [(2x + 3) - x^2]\\,dx$$

$$= \\int_{-1}^3 (2x + 3 - x^2)\\,dx$$

$$= \\left[x^2 + 3x - \\frac{x^3}{3}\\right]_{-1}^3$$

---

**At $x = 3$**:
$$3^2 + 3(3) - \\frac{3^3}{3} = 9 + 9 - 9 = 9$$

**At $x = -1$**:
$$(-1)^2 + 3(-1) - \\frac{(-1)^3}{3} = 1 - 3 + \\frac{1}{3} = -\\frac{5}{3}$$

---

**Step 4: Subtract**

$$A = 9 - \\left(-\\frac{5}{3}\\right) = 9 + \\frac{5}{3} = \\frac{27}{3} + \\frac{5}{3} = \\frac{32}{3}$$

**Answer**: $\\frac{32}{3}$ square units

---

## When Curves Switch Position

Sometimes the "top" curve changes!

**Strategy**: Split the integral at the switching point.

$$A = \\int_a^c [f(x) - g(x)]\\,dx + \\int_c^b [g(x) - f(x)]\\,dx$$

where $c$ is where the curves cross

---

## Example 3: Curves That Cross

Find the area between $y = \\sin x$ and $y = \\cos x$ from $x = 0$ to $x = \\frac{\\pi}{2}$.

**Step 1: Find where they intersect**

Set $\\sin x = \\cos x$:

$$\\tan x = 1$$
$$x = \\frac{\\pi}{4}$$ (in the given interval)

---

**Step 2: Determine top/bottom on each piece**

On $[0, \\frac{\\pi}{4}]$: $\\cos x > \\sin x$ (cosine on top)

On $[\\frac{\\pi}{4}, \\frac{\\pi}{2}]$: $\\sin x > \\cos x$ (sine on top)

---

**Step 3: Set up two integrals**

$$A = \\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x)\\,dx$$

---

**Step 4: Integrate each piece**

First integral:
$$\\int_0^{\\pi/4} (\\cos x - \\sin x)\\,dx = [\\sin x + \\cos x]_0^{\\pi/4}$$

$$= \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) - (0 + 1)$$

$$= \\sqrt{2} - 1$$

---

Second integral:
$$\\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x)\\,dx = [-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2}$$

$$= (0 - 1) - \\left(-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\right)$$

$$= -1 - (-\\sqrt{2}) = \\sqrt{2} - 1$$

---

**Step 5: Add the areas**

$$A = (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2 = 2(\\sqrt{2} - 1)$$

**Answer**: $2(\\sqrt{2} - 1)$ square units

---

## Horizontal Slices (Integrating with respect to y)

Sometimes it's easier to integrate with respect to $y$!

$$A = \\int_c^d [\\text{right} - \\text{left}]\\,dy$$

**When to use**:
- Functions given as $x = f(y)$
- Simpler to express in terms of $y$
- Horizontal rectangles make more sense

---

## Example 4: Horizontal Integration

Find the area between $x = y^2$ and $x = y + 2$ from $y = -1$ to $y = 2$.

**Step 1: Identify right and left**

Test a point, say $y = 0$:
- Parabola: $x = 0^2 = 0$
- Line: $x = 0 + 2 = 2$

Line is to the right!

---

**Step 2: Set up integral**

$$A = \\int_{-1}^2 [(y + 2) - y^2]\\,dy$$

---

**Step 3: Integrate**

$$= \\int_{-1}^2 (y + 2 - y^2)\\,dy$$

$$= \\left[\\frac{y^2}{2} + 2y - \\frac{y^3}{3}\\right]_{-1}^2$$

---

**At $y = 2$**:
$$\\frac{4}{2} + 4 - \\frac{8}{3} = 2 + 4 - \\frac{8}{3} = 6 - \\frac{8}{3} = \\frac{10}{3}$$

**At $y = -1$**:
$$\\frac{1}{2} - 2 + \\frac{1}{3} = \\frac{3}{6} - \\frac{12}{6} + \\frac{2}{6} = -\\frac{7}{6}$$

---

**Step 4: Subtract**

$$A = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$$

**Answer**: $\\frac{9}{2}$ square units

---

## Choosing Between dx and dy

### Use $dx$ (vertical slices) when:
- Functions are $y = f(x)$
- Vertical lines cross each curve once
- Natural to think "top minus bottom"

### Use $dy$ (horizontal slices) when:
- Functions are $x = f(y)$
- Horizontal lines cross each curve once
- Would need multiple pieces with $dx$

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Order

**WRONG**: Bottom - Top

**RIGHT**: Top - Bottom (or Right - Left for dy)

Always subtract the lower/left function!

---

### Mistake 2: Forgetting Absolute Value

If you get a negative area, you either:
- Subtracted in wrong order, OR
- Need to split where curves cross

Area should be positive!

---

### Mistake 3: Wrong Limits

**Check**: Are your limits the actual intersection points?

Set $f(x) = g(x)$ and solve to find where curves meet!

---

### Mistake 4: Not Splitting When Needed

If curves cross in the middle of the interval, you **must** split the integral at that point!

---

## Area Between Multiple Curves

For three curves where $f(x) \\geq g(x) \\geq h(x)$:

**Area between f and h**:
$$\\int_a^b [f(x) - h(x)]\\,dx$$

**Area between f and g only**:
$$\\int_a^b [f(x) - g(x)]\\,dx$$

**Area between g and h only**:
$$\\int_a^b [g(x) - h(x)]\\,dx$$

---

## Summary of Steps

1. **Sketch** the curves
2. **Find intersection points** (set functions equal)
3. **Determine** which is on top (or right)
4. **Check** if curves switch position
5. **Set up integral**: $\\int_a^b [\\text{top} - \\text{bottom}]\\,dx$
6. **Evaluate** using FTC
7. **Check**: Is the answer positive?

---

## 📝 Practice Strategy

1. **Always sketch** - visual helps identify top/bottom
2. **Find intersections** by setting functions equal
3. **Test a point** to determine which is on top
4. **Watch for crossings** - split the integral if needed
5. **Choose dx or dy** based on which is simpler
6. **Top minus bottom** (or right minus left)
7. **Check your answer** - area should be positive!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the area enclosed by $y = x^2 - 4$ and $y = 0$ (the x-axis).',
            solution: `**Step 1: Find intersection points**

Set $x^2 - 4 = 0$:

$$x^2 = 4$$
$$x = \\pm 2$$

So the parabola crosses the x-axis at $x = -2$ and $x = 2$.

---

**Step 2: Determine which is on top**

Between $x = -2$ and $x = 2$, the parabola $y = x^2 - 4$ is **below** the x-axis (negative values).

Top: $y = 0$
Bottom: $y = x^2 - 4$

---

**Step 3: Set up integral**

$$A = \\int_{-2}^2 [0 - (x^2 - 4)]\\,dx$$

$$= \\int_{-2}^2 (4 - x^2)\\,dx$$

---

**Step 4: Integrate**

$$= \\left[4x - \\frac{x^3}{3}\\right]_{-2}^2$$

---

**At $x = 2$**:
$$4(2) - \\frac{8}{3} = 8 - \\frac{8}{3} = \\frac{16}{3}$$

**At $x = -2$**:
$$4(-2) - \\frac{-8}{3} = -8 + \\frac{8}{3} = -\\frac{16}{3}$$

---

**Step 5: Subtract**

$$A = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$$

**Answer**: $\\frac{32}{3}$ square units`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the area between $y = e^x$ and $y = e^{-x}$ from $x = 0$ to $x = 1$.',
            solution: `**Step 1: Determine which is on top**

At $x = 0$: both equal 1 (they meet!)

At $x = 0.5$:
- $e^{0.5} \\approx 1.65$
- $e^{-0.5} \\approx 0.61$

So $e^x$ is on top.

---

**Step 2: Set up integral**

$$A = \\int_0^1 (e^x - e^{-x})\\,dx$$

---

**Step 3: Integrate**

$$= [e^x - (-e^{-x})]_0^1$$

$$= [e^x + e^{-x}]_0^1$$

---

**Step 4: Evaluate**

**At $x = 1$**:
$$e^1 + e^{-1} = e + \\frac{1}{e}$$

**At $x = 0$**:
$$e^0 + e^0 = 1 + 1 = 2$$

---

**Step 5: Subtract**

$$A = \\left(e + \\frac{1}{e}\\right) - 2 = e + \\frac{1}{e} - 2$$

**Answer**: $e + \\frac{1}{e} - 2$ square units (or $e + e^{-1} - 2$)`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the area of the region bounded by $y = x$ and $y = x^3$.',
            solution: `**Step 1: Find intersection points**

Set $x = x^3$:

$$x^3 - x = 0$$
$$x(x^2 - 1) = 0$$
$$x(x-1)(x+1) = 0$$

So $x = -1, 0, 1$

---

**Step 2: Determine top/bottom on each interval**

On $[-1, 0]$:
Test $x = -0.5$: 
- Line: $y = -0.5$
- Cubic: $y = (-0.5)^3 = -0.125$

Cubic is above line (less negative).

On $[0, 1]$:
Test $x = 0.5$:
- Line: $y = 0.5$
- Cubic: $y = 0.125$

Line is above cubic.

---

**Step 3: Set up two integrals**

$$A = \\int_{-1}^0 (x^3 - x)\\,dx + \\int_0^1 (x - x^3)\\,dx$$

---

**Step 4: Integrate first piece**

$$\\int_{-1}^0 (x^3 - x)\\,dx = \\left[\\frac{x^4}{4} - \\frac{x^2}{2}\\right]_{-1}^0$$

$$= (0 - 0) - \\left(\\frac{1}{4} - \\frac{1}{2}\\right)$$

$$= 0 - \\left(-\\frac{1}{4}\\right) = \\frac{1}{4}$$

---

**Step 5: Integrate second piece**

$$\\int_0^1 (x - x^3)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^4}{4}\\right]_0^1$$

$$= \\left(\\frac{1}{2} - \\frac{1}{4}\\right) - (0 - 0)$$

$$= \\frac{1}{4}$$

---

**Step 6: Add the areas**

$$A = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$

**Answer**: $\\frac{1}{2}$ square unit

**Note**: By symmetry, both pieces have the same area!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the formula for area between two curves?',
            back: '$A = \\int_a^b [\\text{top} - \\text{bottom}]\\,dx$ when integrating with respect to $x$, or $A = \\int_c^d [\\text{right} - \\text{left}]\\,dy$ with respect to $y$. Always subtract the lower/left function from upper/right. Find limits by setting functions equal.',
            hint: 'Upper minus lower, integrated over interval',
          },
          {
            front: 'How do you find the intersection points of two curves?',
            back: 'Set the functions equal and solve: $f(x) = g(x)$. These intersection points typically serve as the limits of integration. Always verify which function is on top by testing a point between intersections.',
            hint: 'Set functions equal to each other',
          },
          {
            front: 'When should you split an area integral into multiple parts?',
            back: 'Split the integral when curves cross in the middle of the region (top/bottom switch positions). Find crossing point by solving $f(x) = g(x)$, then integrate $(f-g)$ on one piece and $(g-f)$ on the other. Add the absolute values.',
            hint: 'When the top curve changes',
          },
          {
            front: 'When should you use dy instead of dx for area between curves?',
            back: 'Use $dy$ (horizontal slices) when: functions are given as $x = f(y)$, horizontal lines cross each curve once, or vertical slices would require splitting into multiple pieces. Formula: $A = \\int_c^d [\\text{right} - \\text{left}]\\,dy$.',
            hint: 'When horizontal slices are simpler',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Volumes - Disk Method
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'volumes-disk-method',
      title: 'Volumes of Revolution: Disk Method',
      description: 'Finding volumes by rotating regions around an axis',
      order: 8,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Volumes of Revolution: Disk Method

## The Volume Problem

How do we find the volume of a 3D solid formed by rotating a region around an axis?

**Example**: Rotate $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ around the x-axis.

> **💡 Key Idea**: Slice the solid into thin disks (like coins), find the volume of each disk, then integrate!

---

## The Disk Method Formula

### Rotating around the x-axis

When rotating $y = f(x)$ around the x-axis from $x = a$ to $x = b$:

$$V = \\int_a^b \\pi [f(x)]^2\\,dx = \\pi \\int_a^b [f(x)]^2\\,dx$$

**Think**: Volume = $\\pi$ × (radius)² × thickness, summed up!

---

## Where Does This Come From?

### Volume of a Disk

A disk (thin cylinder) has:
- Radius: $r = f(x)$
- Thickness: $\\Delta x$
- Volume: $\\pi r^2 \\cdot \\Delta x = \\pi [f(x)]^2 \\Delta x$

---

### Summing the Disks

$$V \\approx \\sum_{i=1}^n \\pi [f(x_i)]^2 \\Delta x$$

Taking the limit as $n \\to \\infty$:

$$V = \\lim_{n \\to \\infty} \\sum_{i=1}^n \\pi [f(x_i)]^2 \\Delta x = \\int_a^b \\pi [f(x)]^2\\,dx$$

---

## Example 1: Basic Disk Method

Find the volume when $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated around the x-axis.

**Step 1: Set up the integral**

$$V = \\pi \\int_0^4 [\\sqrt{x}]^2\\,dx$$

$$= \\pi \\int_0^4 x\\,dx$$

---

**Step 2: Integrate**

$$= \\pi \\left[\\frac{x^2}{2}\\right]_0^4$$

$$= \\pi \\left(\\frac{16}{2} - 0\\right)$$

$$= \\pi \\cdot 8 = 8\\pi$$

**Answer**: $8\\pi$ cubic units

---

## Example 2: Polynomial Function

Find the volume when $y = x^2$ from $x = 0$ to $x = 2$ is rotated around the x-axis.

**Step 1: Set up the integral**

$$V = \\pi \\int_0^2 [x^2]^2\\,dx$$

$$= \\pi \\int_0^2 x^4\\,dx$$

---

**Step 2: Integrate**

$$= \\pi \\left[\\frac{x^5}{5}\\right]_0^2$$

$$= \\pi \\left(\\frac{32}{5} - 0\\right) = \\frac{32\\pi}{5}$$

**Answer**: $\\frac{32\\pi}{5}$ cubic units

---

## Rotating Around the y-axis

### Formula for y-axis rotation

When rotating $x = g(y)$ around the y-axis from $y = c$ to $y = d$:

$$V = \\pi \\int_c^d [g(y)]^2\\,dy$$

**Key**: Swap $x$ and $y$, integrate with respect to $y$!

---

## Example 3: Rotation Around y-axis

Find the volume when $x = y^2$ from $y = 0$ to $y = 2$ is rotated around the y-axis.

**Step 1: Set up the integral**

$$V = \\pi \\int_0^2 [y^2]^2\\,dy$$

$$= \\pi \\int_0^2 y^4\\,dy$$

---

**Step 2: Integrate**

$$= \\pi \\left[\\frac{y^5}{5}\\right]_0^2$$

$$= \\pi \\left(\\frac{32}{5} - 0\\right) = \\frac{32\\pi}{5}$$

**Answer**: $\\frac{32\\pi}{5}$ cubic units

---

## Rewriting Functions

Sometimes you need to solve for $x$ in terms of $y$ (or vice versa).

**Example**: Rotate $y = \\sqrt{x}$ around the y-axis from $y = 0$ to $y = 2$.

**Step 1: Rewrite as $x = g(y)$**

$$y = \\sqrt{x}$$
$$y^2 = x$$
$$x = y^2$$

---

**Step 2: Set up and integrate**

$$V = \\pi \\int_0^2 [y^2]^2\\,dy = \\pi \\int_0^2 y^4\\,dy$$

$$= \\pi \\left[\\frac{y^5}{5}\\right]_0^2 = \\frac{32\\pi}{5}$$

---

## Special Solids

### Sphere

Rotate $y = \\sqrt{r^2 - x^2}$ (semicircle) around the x-axis from $x = -r$ to $x = r$:

$$V = \\pi \\int_{-r}^r (r^2 - x^2)\\,dx = \\frac{4\\pi r^3}{3}$$

This is the famous sphere volume formula!

---

### Cone

Rotate $y = \\frac{h}{r}x$ (line) from $x = 0$ to $x = r$ around the x-axis:

$$V = \\pi \\int_0^r \\left(\\frac{h}{r}x\\right)^2\\,dx = \\frac{\\pi h^2}{r^2} \\int_0^r x^2\\,dx$$

$$= \\frac{\\pi h^2}{r^2} \\cdot \\frac{r^3}{3} = \\frac{\\pi r h^2}{3}$$

With base radius $r$ and height $h$, we get $V = \\frac{1}{3}\\pi r^2 h$ ✓

---

## Example 4: Trigonometric Function

Find the volume when $y = \\sin x$ from $x = 0$ to $x = \\pi$ is rotated around the x-axis.

**Step 1: Set up the integral**

$$V = \\pi \\int_0^{\\pi} [\\sin x]^2\\,dx$$

$$= \\pi \\int_0^{\\pi} \\sin^2 x\\,dx$$

---

**Step 2: Use trig identity**

$$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$$

$$V = \\pi \\int_0^{\\pi} \\frac{1 - \\cos 2x}{2}\\,dx$$

$$= \\frac{\\pi}{2} \\int_0^{\\pi} (1 - \\cos 2x)\\,dx$$

---

**Step 3: Integrate**

$$= \\frac{\\pi}{2} \\left[x - \\frac{\\sin 2x}{2}\\right]_0^{\\pi}$$

$$= \\frac{\\pi}{2} \\left[\\left(\\pi - \\frac{\\sin 2\\pi}{2}\\right) - \\left(0 - \\frac{\\sin 0}{2}\\right)\\right]$$

$$= \\frac{\\pi}{2}[\\pi - 0] = \\frac{\\pi^2}{2}$$

**Answer**: $\\frac{\\pi^2}{2}$ cubic units

---

## The Washer Method (Preview)

What if there's a **hole** in the middle?

**Example**: Rotate the region between $y = x$ and $y = x^2$ around the x-axis.

This creates a washer (disk with hole)!

**Formula**:
$$V = \\pi \\int_a^b [(R(x))^2 - (r(x))^2]\\,dx$$

where $R(x)$ is outer radius and $r(x)$ is inner radius.

We'll cover this in detail next!

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Square

**WRONG**: $V = \\pi \\int_a^b f(x)\\,dx$

**RIGHT**: $V = \\pi \\int_a^b [f(x)]^2\\,dx$

The radius must be **squared**!

---

### Mistake 2: Forgetting π

Volume of revolution always involves $\\pi$!

$$V = \\pi \\int_a^b [f(x)]^2\\,dx$$

---

### Mistake 3: Wrong Variable

Rotating around **x-axis**: integrate with respect to $x$

Rotating around **y-axis**: integrate with respect to $y$

Match the axis to the variable!

---

### Mistake 4: Using Diameter Instead of Radius

The disk method uses **radius**, not diameter!

Radius = $f(x)$ (distance from axis to curve)

---

## Summary of Disk Method

### Around x-axis

$$V = \\pi \\int_a^b [f(x)]^2\\,dx$$

- Radius: $r = f(x)$
- Limits: $x = a$ to $x = b$

### Around y-axis

$$V = \\pi \\int_c^d [g(y)]^2\\,dy$$

- Radius: $r = g(y)$
- Limits: $y = c$ to $y = d$

---

## Visualizing the Solid

**Steps to visualize**:
1. **Sketch** the 2D region
2. **Identify** the axis of rotation
3. **Imagine** spinning the region
4. **See** the 3D solid formed
5. **Picture** a cross-section (disk)

Practice this mental rotation - it helps tremendously!

---

## 📝 Practice Strategy

1. **Sketch** the region to be rotated
2. **Identify** the axis of rotation (x or y)
3. **Find** the radius function $r = f(x)$ or $r = g(y)$
4. **Set up**: $V = \\pi \\int [\\text{radius}]^2\\,d(\\text{variable})$
5. **Don't forget to square** the radius!
6. **Integrate** and evaluate
7. **Include $\\pi$** in your final answer
8. **Check units**: volume should be cubic units
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the volume of the solid formed by rotating $y = 2x$ from $x = 0$ to $x = 3$ around the x-axis.',
            solution: `**Step 1: Set up the integral**

Rotating around x-axis, so radius = $f(x) = 2x$

$$V = \\pi \\int_0^3 [2x]^2\\,dx$$

$$= \\pi \\int_0^3 4x^2\\,dx$$

$$= 4\\pi \\int_0^3 x^2\\,dx$$

---

**Step 2: Integrate**

$$= 4\\pi \\left[\\frac{x^3}{3}\\right]_0^3$$

$$= 4\\pi \\left(\\frac{27}{3} - 0\\right)$$

$$= 4\\pi \\cdot 9 = 36\\pi$$

**Answer**: $36\\pi$ cubic units

**Note**: This is a cone with base radius 6 and height 3. Check: $V = \\frac{1}{3}\\pi(6)^2(3) = 36\\pi$ ✓`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find the volume when the region bounded by $y = \\sqrt{4-x^2}$ (semicircle) from $x = -2$ to $x = 2$ is rotated around the x-axis.',
            solution: `**Step 1: Recognize the shape**

$y = \\sqrt{4-x^2}$ is the top half of circle $x^2 + y^2 = 4$ (radius 2).

Rotating this semicircle around the x-axis creates a **sphere** of radius 2!

---

**Step 2: Set up the integral**

$$V = \\pi \\int_{-2}^2 [\\sqrt{4-x^2}]^2\\,dx$$

$$= \\pi \\int_{-2}^2 (4-x^2)\\,dx$$

---

**Step 3: Integrate**

$$= \\pi \\left[4x - \\frac{x^3}{3}\\right]_{-2}^2$$

---

**At $x = 2$**:
$$4(2) - \\frac{8}{3} = 8 - \\frac{8}{3} = \\frac{16}{3}$$

**At $x = -2$**:
$$4(-2) - \\frac{-8}{3} = -8 + \\frac{8}{3} = -\\frac{16}{3}$$

---

**Step 4: Subtract**

$$V = \\pi \\left(\\frac{16}{3} - \\left(-\\frac{16}{3}\\right)\\right)$$

$$= \\pi \\cdot \\frac{32}{3} = \\frac{32\\pi}{3}$$

**Answer**: $\\frac{32\\pi}{3}$ cubic units

**Check**: Sphere formula with $r = 2$: $V = \\frac{4\\pi(2)^3}{3} = \\frac{32\\pi}{3}$ ✓`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the volume when $y = e^x$ from $x = 0$ to $x = 1$ is rotated around the x-axis.',
            solution: `**Step 1: Set up the integral**

$$V = \\pi \\int_0^1 [e^x]^2\\,dx$$

$$= \\pi \\int_0^1 e^{2x}\\,dx$$

---

**Step 2: Integrate**

For $\\int e^{2x}\\,dx$, use substitution or remember: $\\int e^{ax}\\,dx = \\frac{e^{ax}}{a}$

$$= \\pi \\left[\\frac{e^{2x}}{2}\\right]_0^1$$

---

**Step 3: Evaluate**

$$= \\pi \\left(\\frac{e^2}{2} - \\frac{e^0}{2}\\right)$$

$$= \\pi \\left(\\frac{e^2}{2} - \\frac{1}{2}\\right)$$

$$= \\frac{\\pi}{2}(e^2 - 1)$$

**Answer**: $\\frac{\\pi(e^2 - 1)}{2}$ cubic units`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the disk method formula for volumes of revolution?',
            back: 'Around x-axis: $V = \\pi \\int_a^b [f(x)]^2\\,dx$. Around y-axis: $V = \\pi \\int_c^d [g(y)]^2\\,dy$. The formula comes from summing volumes of thin disks: $\\pi r^2 \\Delta x$ where radius $r = f(x)$. Always square the radius!',
            hint: 'Pi times radius squared, integrated',
          },
          {
            front: 'How do you rotate a region around the y-axis?',
            back: 'Rewrite function as $x = g(y)$, then use $V = \\pi \\int_c^d [g(y)]^2\\,dy$ where $c$ and $d$ are y-values. The radius is now $g(y)$ (horizontal distance from y-axis to curve). Integrate with respect to $y$.',
            hint: 'Solve for x in terms of y, integrate dy',
          },
          {
            front: 'What\'s the difference between disk method and washer method?',
            back: 'Disk: solid with no hole, $V = \\pi \\int [R(x)]^2\\,dx$. Washer: hollow solid (hole in middle), $V = \\pi \\int [(R(x))^2 - (r(x))^2]\\,dx$ where $R$ is outer radius and $r$ is inner radius. Washer = big disk minus small disk.',
            hint: 'Washer has a hole, disk doesn\'t',
          },
          {
            front: 'What are common mistakes with the disk method?',
            back: '1) Forgetting to square: use $[f(x)]^2$ not $f(x)$. 2) Forgetting $\\pi$. 3) Using wrong variable (x-axis needs dx, y-axis needs dy). 4) Using diameter instead of radius. Volume should always have $\\pi$ and cubic units.',
            hint: 'Square the radius, include pi, match variable to axis',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Integration micro-lessons!')
  console.log('\nTopics created:')
  console.log('  7. Area Between Curves')
  console.log('  8. Volumes of Revolution: Disk Method')
  console.log('\n🎨 Integration applications expanding!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
