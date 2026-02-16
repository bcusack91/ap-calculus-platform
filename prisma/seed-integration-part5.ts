import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Integration micro-lessons - Part 5...')

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
          'volumes-washer-method',
          'volumes-shell-method',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Volumes - Washer Method
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'volumes-washer-method',
      title: 'Volumes of Revolution: Washer Method',
      description: 'Finding volumes of solids with holes using washers',
      order: 9,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🍩 Volumes of Revolution: Washer Method

## The Problem with Holes

What if rotating a region creates a solid with a **hole** in the middle?

**Example**: Rotate the region between $y = x$ and $y = x^2$ around the x-axis.

> **💡 Key Idea**: Use washers (disks with holes) instead of solid disks! Subtract the inner disk from the outer disk.

---

## The Washer Method Formula

### Rotating around the x-axis

When rotating the region between $f(x)$ (outer) and $g(x)$ (inner) from $x = a$ to $x = b$:

$$V = \\pi \\int_a^b \\left[(R(x))^2 - (r(x))^2\\right]\\,dx$$

where:
- $R(x)$ = **outer radius** (distance from axis to outer curve)
- $r(x)$ = **inner radius** (distance from axis to inner curve)

---

## Why This Works

### Volume of a Washer

A washer is a disk with a circular hole:

**Outer disk area**: $\\pi R^2$
**Inner disk area**: $\\pi r^2$
**Washer area**: $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$

Multiply by thickness $\\Delta x$:
$$\\text{Volume} = \\pi(R^2 - r^2)\\Delta x$$

Sum and take the limit → integral!

---

## Example 1: Region Between Two Curves

Find the volume when the region between $y = x$ and $y = x^2$ from $x = 0$ to $x = 1$ is rotated around the x-axis.

**Step 1: Identify outer and inner radii**

On $[0, 1]$, the line $y = x$ is above $y = x^2$.

- Outer radius: $R(x) = x$ (distance to line)
- Inner radius: $r(x) = x^2$ (distance to parabola)

---

**Step 2: Set up the integral**

$$V = \\pi \\int_0^1 [(x)^2 - (x^2)^2]\\,dx$$

$$= \\pi \\int_0^1 (x^2 - x^4)\\,dx$$

---

**Step 3: Integrate**

$$= \\pi \\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1$$

$$= \\pi \\left(\\frac{1}{3} - \\frac{1}{5}\\right) - 0$$

$$= \\pi \\left(\\frac{5}{15} - \\frac{3}{15}\\right) = \\frac{2\\pi}{15}$$

**Answer**: $\\frac{2\\pi}{15}$ cubic units

---

## Example 2: Region Between Curve and Axis

Find the volume when the region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$ is rotated around the line $y = -1$.

**Step 1: Identify the radii**

The axis of rotation is $y = -1$ (horizontal line below x-axis).

- Outer radius: $R(x) = \\sqrt{x} - (-1) = \\sqrt{x} + 1$
- Inner radius: $r(x) = 0 - (-1) = 1$

(Distance from axis to each curve!)

---

**Step 2: Set up the integral**

$$V = \\pi \\int_0^4 [(\\sqrt{x} + 1)^2 - 1^2]\\,dx$$

---

**Step 3: Expand $(\\sqrt{x} + 1)^2$**

$$(\\sqrt{x} + 1)^2 = x + 2\\sqrt{x} + 1$$

$$V = \\pi \\int_0^4 [(x + 2\\sqrt{x} + 1) - 1]\\,dx$$

$$= \\pi \\int_0^4 (x + 2\\sqrt{x})\\,dx$$

$$= \\pi \\int_0^4 (x + 2x^{1/2})\\,dx$$

---

**Step 4: Integrate**

$$= \\pi \\left[\\frac{x^2}{2} + 2 \\cdot \\frac{x^{3/2}}{3/2}\\right]_0^4$$

$$= \\pi \\left[\\frac{x^2}{2} + \\frac{4x^{3/2}}{3}\\right]_0^4$$

$$= \\pi \\left(\\frac{16}{2} + \\frac{4(8)}{3}\\right)$$

$$= \\pi \\left(8 + \\frac{32}{3}\\right) = \\pi \\left(\\frac{24 + 32}{3}\\right) = \\frac{56\\pi}{3}$$

**Answer**: $\\frac{56\\pi}{3}$ cubic units

---

## Rotating Around Vertical Lines

### Around the y-axis (or $x = 0$)

$$V = \\pi \\int_c^d \\left[(R(y))^2 - (r(y))^2\\right]\\,dy$$

- Outer radius: $R(y)$ (rightmost curve)
- Inner radius: $r(y)$ (leftmost curve)

---

### Around the line $x = k$

Adjust radii by distance from the line $x = k$:

- If curve is at $x = f(y)$ and $f(y) > k$: radius = $f(y) - k$
- If curve is at $x = f(y)$ and $f(y) < k$: radius = $k - f(y)$

**Always**: radius = |distance from axis to curve|

---

## Example 3: Rotating Around y-axis

Find the volume when the region between $x = y^2$ and $x = 4$ from $y = -2$ to $y = 2$ is rotated around the y-axis.

**Step 1: Identify radii**

The line $x = 4$ is farther from the y-axis than $x = y^2$.

- Outer radius: $R(y) = 4$
- Inner radius: $r(y) = y^2$

---

**Step 2: Set up the integral**

$$V = \\pi \\int_{-2}^2 [4^2 - (y^2)^2]\\,dy$$

$$= \\pi \\int_{-2}^2 (16 - y^4)\\,dy$$

---

**Step 3: Integrate**

$$= \\pi \\left[16y - \\frac{y^5}{5}\\right]_{-2}^2$$

---

**At $y = 2$**:
$$16(2) - \\frac{32}{5} = 32 - \\frac{32}{5} = \\frac{128}{5}$$

**At $y = -2$**:
$$16(-2) - \\frac{-32}{5} = -32 + \\frac{32}{5} = -\\frac{128}{5}$$

---

**Step 4: Subtract**

$$V = \\pi \\left(\\frac{128}{5} - \\left(-\\frac{128}{5}\\right)\\right)$$

$$= \\pi \\cdot \\frac{256}{5} = \\frac{256\\pi}{5}$$

**Answer**: $\\frac{256\\pi}{5}$ cubic units

---

## Disk vs Washer: When to Use Which

### Use Disk Method when:
- Region is bounded by **one curve** and an axis
- Rotation creates a **solid** (no hole)
- Formula: $V = \\pi \\int [R(x)]^2\\,dx$

### Use Washer Method when:
- Region is between **two curves**
- Rotation creates a **hollow solid**
- Formula: $V = \\pi \\int [(R(x))^2 - (r(x))^2]\\,dx$

---

## Finding Radii

### Key Questions:

1. **What is the axis of rotation?**
2. **Which curve is farther from the axis?** (outer radius)
3. **Which curve is closer to the axis?** (inner radius)
4. **What is the distance from axis to each curve?** (that's the radius)

---

## Example 4: Non-Standard Axis

Find the volume when the region between $y = x^2$ and $y = 2x$ from $x = 0$ to $x = 2$ is rotated around the line $y = 8$.

**Step 1: Find which is closer to $y = 8$**

At $x = 1$:
- Line: $y = 2(1) = 2$, distance from $y = 8$ is $8 - 2 = 6$
- Parabola: $y = 1^2 = 1$, distance from $y = 8$ is $8 - 1 = 7$

Line is closer (inner), parabola is farther (outer)? No, wait...

Actually, the line is ABOVE the parabola (farther from axis below).

Let me reconsider: $y = 8$ is ABOVE both curves.

---

**Better approach**: 
- Both curves below $y = 8$
- Line $y = 2x$ is closer to $y = 8$ (smaller distance)
- Parabola $y = x^2$ is farther from $y = 8$ (larger distance)

**Radii**:
- Outer radius: $R(x) = 8 - x^2$ (to parabola)
- Inner radius: $r(x) = 8 - 2x$ (to line)

---

**Step 2: Set up and integrate**

$$V = \\pi \\int_0^2 [(8-x^2)^2 - (8-2x)^2]\\,dx$$

---

**Expand**:
$(8-x^2)^2 = 64 - 16x^2 + x^4$

$(8-2x)^2 = 64 - 32x + 4x^2$

$$V = \\pi \\int_0^2 [(64 - 16x^2 + x^4) - (64 - 32x + 4x^2)]\\,dx$$

$$= \\pi \\int_0^2 (32x - 20x^2 + x^4)\\,dx$$

---

**Step 3: Integrate**

$$= \\pi \\left[16x^2 - \\frac{20x^3}{3} + \\frac{x^5}{5}\\right]_0^2$$

$$= \\pi \\left(64 - \\frac{160}{3} + \\frac{32}{5}\\right)$$

$$= \\pi \\left(\\frac{960 - 800 + 96}{15}\\right) = \\frac{256\\pi}{15}$$

**Answer**: $\\frac{256\\pi}{15}$ cubic units

---

## ⚠️ Common Mistakes

### Mistake 1: Confusing Inner and Outer

**Check**: Which curve is **farther** from the axis of rotation?

That's your outer radius $R(x)$!

---

### Mistake 2: Not Squaring Correctly

**WRONG**: $[(R(x))^2 - (r(x))^2] = [R(x) - r(x)]^2$

**RIGHT**: Square each radius separately, then subtract!

$$R^2 - r^2 \\neq (R - r)^2$$

---

### Mistake 3: Forgetting the Axis of Rotation

If rotating around $y = k$ (not the x-axis):
- Radius ≠ just $f(x)$
- Radius = distance from curve to line $y = k$

---

### Mistake 4: Sign Errors with Distance

Distance is always **positive**!

If axis is at $y = k$ and curve is at $y = f(x)$:
- Radius = $|f(x) - k|$

Usually: if curve below axis, $r = k - f(x)$
If curve above axis, $r = f(x) - k$

---

## Disk Method as Special Case

Notice: If inner radius $r(x) = 0$ (one curve is the axis):

$$V = \\pi \\int_a^b [R^2 - 0^2]\\,dx = \\pi \\int_a^b R^2\\,dx$$

This is just the **disk method**!

Washer method is the general case.

---

## Summary: Washer Method

### Around x-axis or $y = k$

$$V = \\pi \\int_a^b \\left[(R(x))^2 - (r(x))^2\\right]\\,dx$$

### Around y-axis or $x = h$

$$V = \\pi \\int_c^d \\left[(R(y))^2 - (r(y))^2\\right]\\,dy$$

**Remember**: 
- $R$ = outer (farther from axis)
- $r$ = inner (closer to axis)
- Both are **distances** (positive)
- Square each separately!

---

## 📝 Practice Strategy

1. **Sketch** the region and axis of rotation
2. **Draw** a sample washer (perpendicular to axis)
3. **Identify** outer and inner radii
4. **Calculate** distances from axis to each curve
5. **Set up**: $V = \\pi \\int [(R)^2 - (r)^2]\\,dx$ or $dy$
6. **Expand** if needed (watch for $(a+b)^2$!)
7. **Integrate** and evaluate
8. **Check**: Answer should be positive!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the volume when the region bounded by $y = \\sqrt{x}$ and $y = x$ from $x = 0$ to $x = 1$ is rotated around the x-axis.',
            solution: `**Step 1: Determine which is outer/inner**

At $x = 0.25$:
- $\\sqrt{0.25} = 0.5$
- $0.25 = 0.25$

So $\\sqrt{x} > x$ on $(0, 1)$. The square root is on top (outer).

---

**Step 2: Identify radii**

- Outer radius: $R(x) = \\sqrt{x}$
- Inner radius: $r(x) = x$

---

**Step 3: Set up the integral**

$$V = \\pi \\int_0^1 [(\\sqrt{x})^2 - (x)^2]\\,dx$$

$$= \\pi \\int_0^1 (x - x^2)\\,dx$$

---

**Step 4: Integrate**

$$= \\pi \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1$$

$$= \\pi \\left(\\frac{1}{2} - \\frac{1}{3}\\right)$$

$$= \\pi \\left(\\frac{3-2}{6}\\right) = \\frac{\\pi}{6}$$

**Answer**: $\\frac{\\pi}{6}$ cubic units`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Find the volume when the region between $y = x^2 + 1$ and $y = 0$ from $x = 0$ to $x = 2$ is rotated around the line $y = -2$.',
            solution: `**Step 1: Visualize the setup**

The axis $y = -2$ is below both curves.

Distance from $y = -2$ to $y = x^2 + 1$: $(x^2 + 1) - (-2) = x^2 + 3$

Distance from $y = -2$ to $y = 0$: $0 - (-2) = 2$

---

**Step 2: Identify radii**

- Outer radius: $R(x) = x^2 + 3$ (to upper curve)
- Inner radius: $r(x) = 2$ (to x-axis)

---

**Step 3: Set up the integral**

$$V = \\pi \\int_0^2 [(x^2+3)^2 - 2^2]\\,dx$$

---

**Step 4: Expand $(x^2+3)^2$**

$$(x^2+3)^2 = x^4 + 6x^2 + 9$$

$$V = \\pi \\int_0^2 (x^4 + 6x^2 + 9 - 4)\\,dx$$

$$= \\pi \\int_0^2 (x^4 + 6x^2 + 5)\\,dx$$

---

**Step 5: Integrate**

$$= \\pi \\left[\\frac{x^5}{5} + 2x^3 + 5x\\right]_0^2$$

$$= \\pi \\left(\\frac{32}{5} + 16 + 10\\right)$$

$$= \\pi \\left(\\frac{32}{5} + 26\\right)$$

$$= \\pi \\left(\\frac{32 + 130}{5}\\right) = \\frac{162\\pi}{5}$$

**Answer**: $\\frac{162\\pi}{5}$ cubic units`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find the volume when the region between $x = y^2$ and $x = 2y$ from $y = 0$ to $y = 2$ is rotated around the y-axis.',
            solution: `**Step 1: Determine which is outer/inner**

At $y = 1$:
- Line: $x = 2(1) = 2$
- Parabola: $x = 1^2 = 1$

Line is farther from y-axis (outer).

---

**Step 2: Identify radii**

- Outer radius: $R(y) = 2y$
- Inner radius: $r(y) = y^2$

---

**Step 3: Set up the integral**

$$V = \\pi \\int_0^2 [(2y)^2 - (y^2)^2]\\,dy$$

$$= \\pi \\int_0^2 (4y^2 - y^4)\\,dy$$

---

**Step 4: Integrate**

$$= \\pi \\left[\\frac{4y^3}{3} - \\frac{y^5}{5}\\right]_0^2$$

$$= \\pi \\left(\\frac{32}{3} - \\frac{32}{5}\\right)$$

$$= \\pi \\left(\\frac{160 - 96}{15}\\right) = \\frac{64\\pi}{15}$$

**Answer**: $\\frac{64\\pi}{15}$ cubic units`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the washer method formula?',
            back: '$V = \\pi \\int_a^b [(R(x))^2 - (r(x))^2]\\,dx$ where $R(x)$ is outer radius (farther from axis) and $r(x)$ is inner radius (closer to axis). Used when rotation creates hollow solid. Subtract inner disk from outer disk to get washer.',
            hint: 'Pi times (outer squared minus inner squared)',
          },
          {
            front: 'How do you find outer and inner radii for washer method?',
            back: 'Outer radius $R$ = distance from axis to curve farther away. Inner radius $r$ = distance from axis to curve closer. If rotating around $y=k$: radius = $|f(x) - k|$. If rotating around $x=h$: radius = $|g(y) - h|$. Both distances are positive!',
            hint: 'Distance from axis to each curve',
          },
          {
            front: 'What\'s the difference between disk and washer methods?',
            back: 'Disk: one curve, solid (no hole), $V = \\pi \\int [R]^2\\,dx$. Washer: two curves, hollow solid, $V = \\pi \\int [R^2 - r^2]\\,dx$. Disk method is special case of washer where inner radius $r = 0$. Use washer when region is between two curves.',
            hint: 'Washer has inner and outer radius',
          },
          {
            front: 'Common mistakes with washer method?',
            back: '1) Confusing outer/inner (check which curve is farther from axis). 2) Wrong algebra: $R^2 - r^2 \\neq (R-r)^2$, square separately! 3) Forgetting axis location (radius = distance from axis, not just function value). 4) Sign errors (distance always positive).',
            hint: 'Square separately, distance from axis',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Volumes - Shell Method
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'volumes-shell-method',
      title: 'Volumes of Revolution: Shell Method',
      description: 'Finding volumes using cylindrical shells',
      order: 10,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🥫 Volumes of Revolution: Shell Method

## A Different Approach

Sometimes the disk/washer method is complicated. There's another way!

**Shell Method**: Slice the solid into **cylindrical shells** (like soup cans).

> **💡 Key Idea**: Instead of slicing perpendicular to the axis, slice parallel to it!

---

## The Shell Method Formula

### Rotating around the y-axis

When rotating $y = f(x)$ from $x = a$ to $x = b$ around the y-axis:

$$V = 2\\pi \\int_a^b x \\cdot f(x)\\,dx$$

$$V = 2\\pi \\int_a^b (\\text{radius})(\\text{height})\\,dx$$

**Components**:
- Radius = $x$ (distance from y-axis)
- Height = $f(x)$ (height of shell)
- Circumference = $2\\pi x$

---

## Where Does This Come From?

### Volume of a Cylindrical Shell

Imagine unrolling a thin cylindrical shell:
- It becomes a rectangular sheet!
- Length = circumference = $2\\pi r$
- Height = $h$
- Thickness = $\\Delta x$

**Volume** = length × height × thickness
$$V = 2\\pi r \\cdot h \\cdot \\Delta x$$

---

### With Our Variables

At position $x$:
- Radius: $r = x$
- Height: $h = f(x)$
- Thickness: $\\Delta x$

**Shell volume**: $2\\pi x \\cdot f(x) \\cdot \\Delta x$

Sum all shells and take limit → integral!

---

## Example 1: Basic Shell Method

Find the volume when $y = x^2$ from $x = 0$ to $x = 2$ is rotated around the y-axis.

**Step 1: Identify components**

- Axis: y-axis (vertical)
- Radius: $r = x$ (distance from y-axis)
- Height: $h = f(x) = x^2$

---

**Step 2: Set up the integral**

$$V = 2\\pi \\int_0^2 x \\cdot x^2\\,dx$$

$$= 2\\pi \\int_0^2 x^3\\,dx$$

---

**Step 3: Integrate**

$$= 2\\pi \\left[\\frac{x^4}{4}\\right]_0^2$$

$$= 2\\pi \\cdot \\frac{16}{4} = 2\\pi \\cdot 4 = 8\\pi$$

**Answer**: $8\\pi$ cubic units

---

## Example 2: Region Between Curves

Find the volume when the region between $y = x$ and $y = x^2$ from $x = 0$ to $x = 1$ is rotated around the y-axis.

**Step 1: Identify height**

Height of shell = (top curve) - (bottom curve)

$$h = x - x^2$$

---

**Step 2: Set up the integral**

$$V = 2\\pi \\int_0^1 x(x - x^2)\\,dx$$

$$= 2\\pi \\int_0^1 (x^2 - x^3)\\,dx$$

---

**Step 3: Integrate**

$$= 2\\pi \\left[\\frac{x^3}{3} - \\frac{x^4}{4}\\right]_0^1$$

$$= 2\\pi \\left(\\frac{1}{3} - \\frac{1}{4}\\right)$$

$$= 2\\pi \\left(\\frac{4-3}{12}\\right) = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$$

**Answer**: $\\frac{\\pi}{6}$ cubic units

---

## Rotating Around the x-axis with Shells

### Formula

When rotating $x = g(y)$ from $y = c$ to $y = d$ around the x-axis:

$$V = 2\\pi \\int_c^d y \\cdot g(y)\\,dy$$

**Components**:
- Radius = $y$ (distance from x-axis)
- Height = $g(y)$ (horizontal extent)

---

## Example 3: Horizontal Shells

Find the volume when $x = y^2$ from $y = 0$ to $y = 2$ is rotated around the x-axis.

**Step 1: Set up with shells**

- Radius: $r = y$
- Height: $h = y^2$

$$V = 2\\pi \\int_0^2 y \\cdot y^2\\,dy$$

$$= 2\\pi \\int_0^2 y^3\\,dy$$

---

**Step 2: Integrate**

$$= 2\\pi \\left[\\frac{y^4}{4}\\right]_0^2$$

$$= 2\\pi \\cdot \\frac{16}{4} = 8\\pi$$

**Answer**: $8\\pi$ cubic units

---

## Rotating Around Other Lines

### Around the line $x = k$

Radius = distance from line $x = k$ to the shell

If shell is at position $x$:
- If $x > k$: radius = $x - k$
- If $x < k$: radius = $k - x$

Generally: $r = |x - k|$

$$V = 2\\pi \\int_a^b (\\text{radius})(\\text{height})\\,dx$$

---

## Example 4: Rotating Around $x = -1$

Find the volume when $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ is rotated around the line $x = -1$.

**Step 1: Find radius**

Shell at position $x$ is distance $x - (-1) = x + 1$ from the line.

- Radius: $r = x + 1$
- Height: $h = \\sqrt{x}$

---

**Step 2: Set up the integral**

$$V = 2\\pi \\int_0^4 (x+1)\\sqrt{x}\\,dx$$

$$= 2\\pi \\int_0^4 (x^{3/2} + x^{1/2})\\,dx$$

---

**Step 3: Integrate**

$$= 2\\pi \\left[\\frac{x^{5/2}}{5/2} + \\frac{x^{3/2}}{3/2}\\right]_0^4$$

$$= 2\\pi \\left[\\frac{2x^{5/2}}{5} + \\frac{2x^{3/2}}{3}\\right]_0^4$$

$$= 2\\pi \\left(\\frac{2(32)}{5} + \\frac{2(8)}{3}\\right)$$

$$= 2\\pi \\left(\\frac{64}{5} + \\frac{16}{3}\\right)$$

$$= 2\\pi \\left(\\frac{192 + 80}{15}\\right) = \\frac{544\\pi}{15}$$

**Answer**: $\\frac{544\\pi}{15}$ cubic units

---

## Shell Method vs Disk/Washer

### When to Use Shell Method:

1. **Rotating around y-axis** but function is $y = f(x)$
   - Shell: easy! $2\\pi \\int x \\cdot f(x)\\,dx$
   - Disk: would need to solve for $x = g(y)$ (hard!)

2. **Avoiding complicated algebra**
   - Shell often simpler than squaring in washer method

3. **Region naturally described in terms of x** but rotating around y-axis

---

## Example 5: Why Shell is Better

Find the volume when $y = e^{-x^2}$ from $x = 0$ to $x = 1$ is rotated around the y-axis.

**With shells**: 
$$V = 2\\pi \\int_0^1 x \\cdot e^{-x^2}\\,dx$$

Use substitution $u = -x^2$, $du = -2x\\,dx$:

$$= 2\\pi \\int_0^{-1} -\\frac{1}{2}e^u\\,du = \\pi[e^u]_0^{-1}$$

$$= \\pi(e^{-1} - 1) = \\pi\\left(\\frac{1}{e} - 1\\right)$$

**Easy!**

---

**With disks**:

Need to solve $y = e^{-x^2}$ for $x$:

$$x = \\sqrt{-\\ln y}$$

This is much more complicated!

---

## General Shell Method Formula

### Around vertical line $x = k$

$$V = 2\\pi \\int_a^b |x - k| \\cdot h(x)\\,dx$$

where $h(x)$ is the height of the shell.

### Around horizontal line $y = k$

$$V = 2\\pi \\int_c^d |y - k| \\cdot h(y)\\,dy$$

where $h(y)$ is the length of the shell.

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the $2\\pi$

Shell method **always** has $2\\pi$ (from circumference)!

$$V = 2\\pi \\int (\\text{radius})(\\text{height})\\,dx$$

---

### Mistake 2: Wrong Radius

Radius = **distance from axis of rotation**

Not just $x$! If rotating around $x = 3$, radius might be $|x - 3|$.

---

### Mistake 3: Wrong Height

For region between two curves:
$$h = \\text{top} - \\text{bottom}$$

Don't forget to subtract!

---

### Mistake 4: Choosing Wrong Method

Sometimes both methods work, but one is **much** easier.

**Quick check**:
- Function is $y = f(x)$, rotating around y-axis? → Shell!
- Function is $x = g(y)$, rotating around x-axis? → Shell!
- Otherwise, compare which seems simpler.

---

## Shell Method Formula Summary

### Around y-axis (or $x = k$)

$$V = 2\\pi \\int_a^b (\\text{radius})(\\text{height})\\,dx$$

- Radius: distance from vertical axis
- Height: vertical extent of region
- Integrate with respect to $x$

### Around x-axis (or $y = k$)

$$V = 2\\pi \\int_c^d (\\text{radius})(\\text{height})\\,dy$$

- Radius: distance from horizontal axis
- Height: horizontal extent of region
- Integrate with respect to $y$

---

## Comparison Table

| Method | Slice Direction | Formula |
|--------|----------------|---------|
| Disk | Perpendicular to axis | $\\pi \\int [R]^2$ |
| Washer | Perpendicular to axis | $\\pi \\int [R^2 - r^2]$ |
| Shell | Parallel to axis | $2\\pi \\int r \\cdot h$ |

**Choose** based on which makes the integral simpler!

---

## 📝 Practice Strategy

1. **Identify** axis of rotation
2. **Decide**: Shell or Disk/Washer?
   - Shell if parallel slicing is easier
   - Disk/Washer if perpendicular slicing is easier
3. **Find radius**: distance from axis to shell
4. **Find height**: extent of shell (top - bottom)
5. **Set up**: $V = 2\\pi \\int (\\text{radius})(\\text{height})\\,dx$
6. **Remember $2\\pi$**!
7. **Integrate** and evaluate
8. **Compare** with other method as a check
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the volume when $y = 4 - x^2$ from $x = 0$ to $x = 2$ is rotated around the y-axis using the shell method.',
            solution: `**Step 1: Set up with shell method**

Rotating around y-axis:
- Radius: $r = x$ (distance from y-axis)
- Height: $h = 4 - x^2$

---

**Step 2: Write the integral**

$$V = 2\\pi \\int_0^2 x(4 - x^2)\\,dx$$

$$= 2\\pi \\int_0^2 (4x - x^3)\\,dx$$

---

**Step 3: Integrate**

$$= 2\\pi \\left[2x^2 - \\frac{x^4}{4}\\right]_0^2$$

$$= 2\\pi \\left(8 - \\frac{16}{4}\\right)$$

$$= 2\\pi(8 - 4) = 2\\pi \\cdot 4 = 8\\pi$$

**Answer**: $8\\pi$ cubic units`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find the volume when the region bounded by $y = x^2$, $y = 4$, and $x = 0$ is rotated around the y-axis.',
            solution: `**Step 1: Find limits of integration**

The parabola $y = x^2$ meets $y = 4$ when:
$$x^2 = 4$$
$$x = 2$$ (taking positive value)

So $x$ goes from 0 to 2.

---

**Step 2: Find height of shell**

At position $x$:
- Top: $y = 4$
- Bottom: $y = x^2$
- Height: $h = 4 - x^2$

---

**Step 3: Set up with shell method**

$$V = 2\\pi \\int_0^2 x(4 - x^2)\\,dx$$

$$= 2\\pi \\int_0^2 (4x - x^3)\\,dx$$

---

**Step 4: Integrate**

$$= 2\\pi \\left[2x^2 - \\frac{x^4}{4}\\right]_0^2$$

$$= 2\\pi \\left(8 - 4\\right) = 8\\pi$$

**Answer**: $8\\pi$ cubic units`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the volume when $y = \\frac{1}{x}$ from $x = 1$ to $x = 3$ is rotated around the line $x = -2$.',
            solution: `**Step 1: Find radius**

The axis is $x = -2$, which is to the left of our region.

Shell at position $x$ has radius:
$$r = x - (-2) = x + 2$$

---

**Step 2: Find height**

$$h = f(x) = \\frac{1}{x}$$

---

**Step 3: Set up the integral**

$$V = 2\\pi \\int_1^3 (x+2) \\cdot \\frac{1}{x}\\,dx$$

$$= 2\\pi \\int_1^3 \\left(1 + \\frac{2}{x}\\right)\\,dx$$

---

**Step 4: Integrate**

$$= 2\\pi [x + 2\\ln|x|]_1^3$$

$$= 2\\pi [(3 + 2\\ln 3) - (1 + 2\\ln 1)]$$

$$= 2\\pi [3 + 2\\ln 3 - 1 - 0]$$

$$= 2\\pi(2 + 2\\ln 3)$$

$$= 4\\pi(1 + \\ln 3)$$

**Answer**: $4\\pi(1 + \\ln 3)$ cubic units`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the shell method formula?',
            back: 'Around y-axis: $V = 2\\pi \\int_a^b x \\cdot f(x)\\,dx$ or generally $V = 2\\pi \\int (\\text{radius})(\\text{height})\\,dx$. Radius = distance from axis, height = extent of region. Comes from unrolling cylindrical shell into rectangle: circumference × height × thickness.',
            hint: '2π times radius times height, integrated',
          },
          {
            front: 'When should you use shell method instead of disk/washer?',
            back: 'Use shell when: 1) Rotating $y=f(x)$ around y-axis (avoids solving for x). 2) Parallel slicing is simpler than perpendicular. 3) Would need complicated squaring with washer. Shell often easier when axis is perpendicular to natural variable.',
            hint: 'When parallel slicing is simpler',
          },
          {
            front: 'How do you find radius and height for shell method?',
            back: 'Radius = distance from shell to axis of rotation. Around y-axis: $r=x$. Around $x=k$: $r=|x-k|$. Height = vertical extent of region (top curve - bottom curve). Always: radius is perpendicular distance to axis, height is parallel to axis.',
            hint: 'Radius: distance to axis; Height: extent of region',
          },
          {
            front: 'Common mistakes with shell method?',
            back: '1) Forgetting $2\\pi$ (always there!). 2) Wrong radius (use distance from axis, not just $x$). 3) Wrong height (remember top - bottom for regions between curves). 4) Using shell when disk/washer is simpler (compare both sometimes).',
            hint: 'Remember 2π, distance from axis, top minus bottom',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Integration micro-lessons!')
  console.log('\nTopics created:')
  console.log('  9. Volumes of Revolution: Washer Method')
  console.log('  10. Volumes of Revolution: Shell Method')
  console.log('\n🎉 Integration section complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
