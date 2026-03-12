import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 8 Math topics - Batch 3 (3 topics)...\n');

  // Topic 1: Distance Formula
  await prisma.topic.updateMany({
    where: {
      slug: 'distance-formula'
    },
    data: {
      textContent: `# Distance Formula

How do you find the distance between two points on a coordinate plane? The distance formula gives you the exact answer every time! This powerful tool combines the Pythagorean Theorem with coordinate geometry.

---

## What Is the Distance Formula?

The **distance formula** calculates the straight-line distance between two points on a coordinate plane.

**Given two points:** (x₁, y₁) and (x₂, y₂)

**Distance formula:**

**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

Where d represents the distance between the points.

---

## Where Does It Come From?

The distance formula comes from the **Pythagorean Theorem**!

**Imagine:** Two points (x₁, y₁) and (x₂, y₂) on a graph.

**Create a right triangle:**
- Horizontal leg: |x₂ - x₁| (difference in x-coordinates)
- Vertical leg: |y₂ - y₁| (difference in y-coordinates)
- Hypotenuse: distance between the points

**Apply Pythagorean Theorem:**
d² = (x₂ - x₁)² + (y₂ - y₁)²

**Solve for d:**
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

This is the distance formula!

---

## Using the Distance Formula

**Example 1:** Find the distance between (1, 2) and (4, 6)

**Solution:**
Identify coordinates:
(x₁, y₁) = (1, 2)
(x₂, y₂) = (4, 6)

Apply formula:
d = √[(4 - 1)² + (6 - 2)²]
d = √[(3)² + (4)²]
d = √[9 + 16]
d = √25
d = 5

**Answer: 5 units**

**Example 2:** Find the distance between (-2, 3) and (4, -1)

**Solution:**
(x₁, y₁) = (-2, 3)
(x₂, y₂) = (4, -1)

d = √[(4 - (-2))² + (-1 - 3)²]
d = √[(4 + 2)² + (-4)²]
d = √[(6)² + (-4)²]
d = √[36 + 16]
d = √52
d = √(4 × 13)
d = 2√13 ≈ 7.21

**Answer: 2√13 units (or approximately 7.21 units)**

**Example 3:** Find the distance between (0, 0) and (3, 4)

**Solution:**
d = √[(3 - 0)² + (4 - 0)²]
d = √[9 + 16]
d = √25
d = 5

**Answer: 5 units**

This is a 3-4-5 right triangle!

---

## Special Cases

**Horizontal Distance (same y-coordinate):**

Points (1, 3) and (7, 3):
d = √[(7-1)² + (3-3)²]
d = √[36 + 0]
d = √36 = 6

**Shortcut:** Just find |x₂ - x₁| = |7 - 1| = 6

**Vertical Distance (same x-coordinate):**

Points (2, 1) and (2, 8):
d = √[(2-2)² + (8-1)²]
d = √[0 + 49]
d = √49 = 7

**Shortcut:** Just find |y₂ - y₁| = |8 - 1| = 7

**Distance from Origin:**

Point (5, 12) to origin (0, 0):
d = √[(5-0)² + (12-0)²]
d = √[25 + 144]
d = √169 = 13

**Shortcut:** d = √(x² + y²)

---

## Working with Negative Coordinates

Negative coordinates work the same way!

**Example:** Find distance between (-5, -2) and (3, 4)

**Solution:**
d = √[(3 - (-5))² + (4 - (-2))²]
d = √[(3 + 5)² + (4 + 2)²]
d = √[(8)² + (6)²]
d = √[64 + 36]
d = √100
d = 10

**Answer: 10 units**

**Remember:** Squaring eliminates negative signs!
- (-3)² = 9 (positive!)
- (3)² = 9 (positive!)

---

## Simplifying Radical Answers

Sometimes the answer is not a perfect square.

**Example:** √50

**Simplify:**
√50 = √(25 × 2) = √25 × √2 = 5√2

**Common simplifications:**
- √8 = 2√2
- √12 = 2√3
- √18 = 3√2
- √20 = 2√5
- √27 = 3√3
- √32 = 4√2
- √45 = 3√5
- √48 = 4√3
- √50 = 5√2
- √72 = 6√2

**When to use decimals vs. radicals:**
- **Exact answer:** Leave as radical (5√2)
- **Approximate:** Use calculator (≈ 7.07)

---

## Finding a Missing Coordinate

Sometimes you know the distance and need to find a coordinate!

**Example:** Point A is at (2, 3) and point B is at (x, 7). The distance is 5 units. Find x.

**Solution:**
Use distance formula:
5 = √[(x - 2)² + (7 - 3)²]
5 = √[(x - 2)² + 16]

Square both sides:
25 = (x - 2)² + 16

Subtract 16:
9 = (x - 2)²

Take square root:
±3 = x - 2

Solve:
x - 2 = 3  or  x - 2 = -3
x = 5  or  x = -1

**Answer: x = 5 or x = -1**

Both work! There are two points 5 units from (2, 3) with y-coordinate 7.

---

## Real-World Applications

**Mapping and GPS:**
- Distance between two cities on a coordinate map
- Shortest path "as the crow flies"
- GPS calculates distance between coordinates

**Sports:**
- Distance a player ran on a field
- Finding shortest route to a target

**Aviation:**
- Distance between aircraft on radar
- Flight path calculations

**Video Games:**
- Calculating distance between characters
- Detecting when objects are close enough to interact

**Architecture:**
- Diagonal measurements in construction
- Room layout planning

---

## The Midpoint Formula (Related Concept)

The **midpoint** is the point exactly halfway between two points.

**Midpoint Formula:**

**M = ((x₁ + x₂)/2, (y₁ + y₂)/2)**

**Example:** Find the midpoint between (2, 5) and (8, 11)

**Solution:**
M = ((2 + 8)/2, (5 + 11)/2)
M = (10/2, 16/2)
M = (5, 8)

**Answer: (5, 8)**

**Note:** Average the x-coordinates, average the y-coordinates!

---

## Combining Distance and Midpoint

**Example:** Points A(1, 3) and B(7, 11) are endpoints of a diameter of a circle. Find the center and radius.

**Solution:**

**Center** = Midpoint of AB
C = ((1 + 7)/2, (3 + 11)/2) = (4, 7)

**Radius** = Distance from center to either endpoint
r = distance from (4, 7) to (1, 3)
r = √[(4 - 1)² + (7 - 3)²]
r = √[9 + 16]
r = √25 = 5

**Answer: Center (4, 7), Radius = 5 units**

---

## Verifying Geometric Shapes

Use the distance formula to verify properties of shapes!

**Example:** Verify that points A(0, 0), B(3, 4), and C(6, 0) form an isosceles triangle.

**Solution:**
Find all three side lengths:

AB = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5

AC = √[(6-0)² + (0-0)²] = √36 = 6

BC = √[(6-3)² + (0-4)²] = √[9 + 16] = √25 = 5

**AB = BC = 5** (two sides equal)

**Answer: Yes, it's isosceles!** (Two sides have equal length)

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to square the differences
- **Wrong:** d = √[(x₂ - x₁) + (y₂ - y₁)]
- **Right:** d = √[(x₂ - x₁)² + (y₂ - y₁)²]

❌ **Mistake 2:** Forgetting the square root
- **Wrong:** d = (x₂ - x₁)² + (y₂ - y₁)²
- **Right:** d = √[(x₂ - x₁)² + (y₂ - y₁)²]

❌ **Mistake 3:** Sign errors with negatives
- **Wrong:** 5 - (-3) = 2
- **Right:** 5 - (-3) = 5 + 3 = 8

❌ **Mistake 4:** Mixing up x and y
- **Wrong:** d = √[(y₂ - y₁)² + (x₂ - x₁)²]
- **Right:** Either order works! (x₂-x₁)² + (y₂-y₁)² is same as (y₂-y₁)² + (x₂-x₁)²

❌ **Mistake 5:** Not simplifying radicals
- **Not simplified:** √50
- **Simplified:** 5√2

---

## Step-by-Step Strategy

**Step 1:** Label your points clearly
- (x₁, y₁) and (x₂, y₂)

**Step 2:** Write the distance formula
- d = √[(x₂ - x₁)² + (y₂ - y₁)²]

**Step 3:** Substitute the coordinates
- Watch negative signs!

**Step 4:** Calculate inside the parentheses
- x₂ - x₁ and y₂ - y₁

**Step 5:** Square each difference
- Remember: negatives become positive

**Step 6:** Add the squares

**Step 7:** Take the square root
- Simplify if possible

**Step 8:** Round if needed (or leave exact)

---

## Quick Reference

**Distance Formula:**
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

**Midpoint Formula:**
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

**Special Cases:**
- Horizontal: d = |x₂ - x₁|
- Vertical: d = |y₂ - y₁|
- From origin: d = √(x² + y²)

**Remember:**
- Squaring eliminates negatives
- Order doesn't matter
- Simplify radicals when possible

---

## Practice Tips

**Tip 1:** Draw a picture
- Plot the points on a coordinate plane
- Visualize the right triangle
- Check if your answer makes sense

**Tip 2:** Check your arithmetic
- Subtraction with negatives is tricky!
- Use parentheses carefully
- Verify by using the Pythagorean Theorem visually

**Tip 3:** Simplify radicals
- Factor out perfect squares
- √(a²·b) = a√b

**Tip 4:** Use a calculator wisely
- For exact answers, leave as radicals
- For approximate answers, round appropriately

---

## Connecting to Other Concepts

**Pythagorean Theorem:**
Distance formula IS the Pythagorean Theorem applied to coordinate plane!

**Slope:**
Slope uses differences too: m = (y₂ - y₁)/(x₂ - x₁)

**Circles:**
Circle equation uses distance from center:
(x - h)² + (y - k)² = r²

**3D Distance (Preview):**
In 3D: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]

---

## Summary

The **distance formula** calculates the straight-line distance between two points:

**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

**Key concepts:**
- Based on the Pythagorean Theorem
- Works with any coordinates (positive, negative, zero)
- Answers can be exact (radicals) or approximate (decimals)
- Related to midpoint formula

**Applications:**
- Navigation and mapping
- Geometry (verifying shapes)
- Real-world distance calculations
- Computer graphics and game design

Mastering the distance formula connects algebra, geometry, and real-world problem solving!`
    }
  });
  console.log('✅ Updated: distance-formula');

  // Topic 2: Volume of Cylinders, Cones, and Spheres
  await prisma.topic.updateMany({
    where: {
      slug: 'volume-cylinders-cones-spheres'
    },
    data: {
      textContent: `# Volume of Cylinders, Cones, and Spheres

Understanding the volume of curved 3D shapes opens up a world of real-world applications! From soda cans to ice cream cones to basketballs, these formulas help us calculate capacity and make practical decisions.

---

## Review: What Is Volume?

**Volume** measures the amount of space inside a 3D shape.

**Think of it as:**
- How much liquid it can hold
- How many unit cubes fit inside
- The capacity of the shape

**Units:** Cubic units (cm³, in³, m³, ft³)

---

## Volume of a Cylinder

A **cylinder** has two circular bases and a curved side (like a soda can).

**Formula:**

**V = πr²h**

Where:
- r = radius of the circular base
- h = height of the cylinder
- π ≈ 3.14 or use calculator's π button

**Think of it as:** Area of base × height
- Base area = πr²
- Multiply by height: πr² × h = πr²h

**Example 1:** Find the volume of a cylinder with radius 3 cm and height 10 cm. Use π ≈ 3.14.

**Solution:**
V = πr²h
V = π × (3)² × 10
V = π × 9 × 10
V = 90π
V ≈ 90 × 3.14
V ≈ 282.6 cm³

**Answer: 90π cm³ or approximately 282.6 cm³**

**Example 2:** A cylindrical water tank has diameter 8 ft and height 12 ft. What's the volume?

**Solution:**
Diameter = 8 ft, so radius = 4 ft

V = π(4)²(12)
V = π × 16 × 12
V = 192π
V ≈ 603.2 ft³

**Answer: 192π ft³ or about 603 ft³**

---

## Volume of a Cone

A **cone** has one circular base and comes to a point (apex) at the top.

**Formula:**

**V = (1/3)πr²h**

Where:
- r = radius of the circular base
- h = height (perpendicular from base to apex)
- π ≈ 3.14

**Key insight:** A cone's volume is **1/3 of a cylinder** with the same base and height!

**Example 1:** Find the volume of a cone with radius 5 in and height 9 in.

**Solution:**
V = (1/3)πr²h
V = (1/3)π(5)²(9)
V = (1/3)π(25)(9)
V = (1/3)π(225)
V = 75π
V ≈ 235.5 in³

**Answer: 75π in³ or about 235.5 in³**

**Example 2:** An ice cream cone has radius 2 cm and height 12 cm. How much ice cream fits inside?

**Solution:**
V = (1/3)π(2)²(12)
V = (1/3)π(4)(12)
V = (1/3)π(48)
V = 16π
V ≈ 50.24 cm³

**Answer: 16π cm³ or about 50 cm³**

**Example 3:** Compare volumes: Cylinder vs. Cone (same base and height)

Cylinder: r = 3, h = 6
V = π(3)²(6) = 54π

Cone: r = 3, h = 6
V = (1/3)π(3)²(6) = 18π

**Cone volume = (1/3) × Cylinder volume** ✓

---

## Volume of a Sphere

A **sphere** is perfectly round in all directions (like a ball).

**Formula:**

**V = (4/3)πr³**

Where:
- r = radius of the sphere
- π ≈ 3.14

**Example 1:** Find the volume of a sphere with radius 6 cm.

**Solution:**
V = (4/3)πr³
V = (4/3)π(6)³
V = (4/3)π(216)
V = (4/3) × 216π
V = 288π
V ≈ 904.3 cm³

**Answer: 288π cm³ or about 904 cm³**

**Example 2:** A basketball has diameter 24 cm. What's its volume?

**Solution:**
Diameter = 24 cm, so radius = 12 cm

V = (4/3)π(12)³
V = (4/3)π(1,728)
V = (4/3) × 1,728π
V = 2,304π
V ≈ 7,238.2 cm³

**Answer: 2,304π cm³ or about 7,238 cm³**

**Example 3:** A spherical water droplet has radius 0.5 mm. Find its volume.

**Solution:**
V = (4/3)π(0.5)³
V = (4/3)π(0.125)
V = (0.5/3)π
V ≈ 0.524 mm³

**Answer: About 0.52 mm³**

---

## Comparing the Three Formulas

**Cylinder:** V = πr²h
- "Pi r squared h"
- Base area × height

**Cone:** V = (1/3)πr²h
- "One-third pi r squared h"
- 1/3 of cylinder volume

**Sphere:** V = (4/3)πr³
- "Four-thirds pi r cubed"
- Only depends on radius

**Pattern:** All use π because they involve circles!

---

## Finding Unknown Dimensions

Sometimes you know the volume and need to find a dimension.

**Example 1:** A cylinder has volume 200π cm³ and height 8 cm. Find the radius.

**Solution:**
V = πr²h
200π = πr²(8)
200π = 8πr²

Divide by 8π:
25 = r²
r = 5 cm

**Answer: r = 5 cm**

**Example 2:** A sphere has volume 288π in³. Find the radius.

**Solution:**
V = (4/3)πr³
288π = (4/3)πr³

Multiply by 3/4:
(3/4) × 288π = πr³
216π = πr³

Divide by π:
216 = r³
r = 6 in

**Answer: r = 6 in**

---

## Real-World Applications

**Cylinders:**

**Food cans:** Calculate how much soup or soda fits
- Soda can: r ≈ 3 cm, h ≈ 12 cm
- V ≈ 339 cm³ (about 339 mL)

**Water tanks:** Storage capacity
- Tank: r = 5 ft, h = 10 ft
- V ≈ 785 ft³

**Pipes:** How much water flows through
- Pipe: r = 2 in, length = 100 in
- V ≈ 1,256 in³

**Cones:**

**Ice cream cones:** How much ice cream fits
- Waffle cone: r = 3 cm, h = 10 cm
- V ≈ 94 cm³

**Traffic cones:** Volume of material
- Orange cone: r = 6 in, h = 18 in
- V ≈ 678 in³

**Funnels:** Liquid capacity

**Spheres:**

**Sports balls:** Air volume inside
- Basketball: r ≈ 12 cm
- V ≈ 7,238 cm³

**Planets:** Volume of celestial bodies
- Earth radius ≈ 6,371 km
- V ≈ 1.08 × 10¹² km³

**Ball bearings:** Industrial applications

**Water balloons:** How much water they hold

---

## Composite Shapes

Sometimes shapes are combined!

**Example:** A shape consists of a cylinder topped with a hemisphere (half-sphere). The radius is 4 cm and the cylinder height is 10 cm. Find total volume.

**Solution:**

**Cylinder part:**
V₁ = πr²h = π(4)²(10) = 160π cm³

**Hemisphere part:**
Full sphere: V = (4/3)π(4)³ = (256/3)π
Half sphere: V₂ = (128/3)π cm³

**Total:**
V = 160π + (128/3)π
V = (480/3)π + (128/3)π
V = (608/3)π
V ≈ 637 cm³

**Answer: (608/3)π cm³ or about 637 cm³**

---

## Units and Conversions

**Volume units must be CUBIC:**

**Length units → Volume units:**
- cm → cm³
- m → m³
- ft → ft³
- in → in³

**Important conversions:**
- 1 m³ = 1,000,000 cm³
- 1 ft³ = 1,728 in³
- 1 cm³ = 1 mL (milliliter)
- 1 m³ = 1,000 liters

**Example:** A cylinder has r = 10 cm and h = 20 cm. Find volume in liters.

**Solution:**
V = π(10)²(20) = 2,000π ≈ 6,283 cm³

Convert to liters:
6,283 cm³ = 6,283 mL = 6.283 liters

**Answer: About 6.3 liters**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Using diameter instead of radius
- **Wrong:** V = π(10)²h when diameter = 10
- **Right:** r = 5, so V = π(5)²h

❌ **Mistake 2:** Forgetting the 1/3 for cones
- **Wrong:** Cone V = πr²h
- **Right:** Cone V = (1/3)πr²h

❌ **Mistake 3:** Forgetting the 4/3 for spheres
- **Wrong:** V = πr³
- **Right:** V = (4/3)πr³

❌ **Mistake 4:** Wrong units (square instead of cubic)
- **Wrong:** Volume = 50 cm²
- **Right:** Volume = 50 cm³

❌ **Mistake 5:** Calculation errors with π
- Use calculator's π button for accuracy
- Or use 3.14 as approximation

❌ **Mistake 6:** Confusing height with slant height (cones)
- Use perpendicular height, not slant

---

## Problem-Solving Strategy

**Step 1:** Identify the shape
- Cylinder? Cone? Sphere? Combination?

**Step 2:** Write the appropriate formula

**Step 3:** Identify given information
- Radius or diameter?
- Height?
- Convert diameter to radius if needed

**Step 4:** Substitute into formula

**Step 5:** Calculate step-by-step
- Handle fractions carefully
- Keep π in answer or use 3.14

**Step 6:** Include proper units (cubic!)

**Step 7:** Round appropriately if needed

---

## Quick Reference

**Cylinder:**
V = πr²h

**Cone:**
V = (1/3)πr²h

**Sphere:**
V = (4/3)πr³

**Remember:**
- All use radius (r), not diameter
- Cone = 1/3 of cylinder
- Units must be cubic (cm³, m³, etc.)
- Diameter = 2 × radius

---

## Practice Tips

**Tip 1:** Draw and label
- Sketch the shape
- Mark radius, height, diameter
- Check which you're given

**Tip 2:** Double-check formulas
- Cylinder has h
- Cone has 1/3
- Sphere has 4/3 and r³

**Tip 3:** Watch for diameter vs. radius
- Always convert diameter to radius!
- r = d/2

**Tip 4:** Use calculator wisely
- π button for best accuracy
- Or use 3.14 for approximation

**Tip 5:** Check reasonableness
- Cone should be 1/3 of cylinder
- Larger radius = much larger volume (squared or cubed!)

---

## Summary

**Volume formulas for curved shapes:**

**Cylinder:** V = πr²h
- Two circular bases
- Straight sides
- Applications: cans, tanks, pipes

**Cone:** V = (1/3)πr²h
- One circular base
- Comes to a point
- 1/3 of cylinder volume
- Applications: ice cream cones, funnels

**Sphere:** V = (4/3)πr³
- Perfectly round
- Only depends on radius
- Applications: balls, planets, bubbles

**Key skills:**
- Identify the correct formula
- Convert diameter to radius
- Calculate accurately with π
- Use proper cubic units

These formulas are essential for engineering, manufacturing, science, and countless real-world applications!`
    }
  });
  console.log('✅ Updated: volume-cylinders-cones-spheres');

  // Topic 3: Translations and Reflections
  await prisma.topic.updateMany({
    where: {
      slug: 'translations-reflections'
    },
    data: {
      textContent: `# Translations and Reflections

Transformations change the position or orientation of shapes on a coordinate plane! Translations slide shapes, while reflections flip them. Understanding these transformations is essential for geometry, computer graphics, and real-world applications.

---

## What Are Transformations?

**Transformations** move or change shapes in predictable ways.

**Four main types:**
1. **Translation** - Slide
2. **Reflection** - Flip
3. **Rotation** - Turn
4. **Dilation** - Resize

This topic focuses on **translations** and **reflections**.

---

## Translations (Slides)

A **translation** slides every point of a shape the same distance in the same direction.

**Think of it as:**
- Moving a shape without rotating or flipping it
- Sliding on a sheet of paper
- Same shape, same size, new location

**Properties:**
- Shape and size stay the same
- Orientation stays the same (doesn't flip or turn)
- All points move the same distance and direction

---

## Translation Rules

**Notation:** (x, y) → (x + a, y + b)

Where:
- **a** = horizontal shift (positive = right, negative = left)
- **b** = vertical shift (positive = up, negative = down)

**Example translations:**

**(x, y) → (x + 3, y + 5)**
- Move 3 units right and 5 units up

**(x, y) → (x - 4, y + 2)**
- Move 4 units left and 2 units up

**(x, y) → (x + 1, y - 6)**
- Move 1 unit right and 6 units down

**(x, y) → (x - 2, y - 3)**
- Move 2 units left and 3 units down

---

## Performing Translations

**Example 1:** Translate point A(2, 3) by the rule (x, y) → (x + 4, y - 1)

**Solution:**
Original: (2, 3)
Apply rule: (2 + 4, 3 - 1) = (6, 2)

**Answer: A' = (6, 2)**

The prime symbol (') means "after transformation"

**Example 2:** Translate triangle ABC where A(1, 2), B(3, 5), C(4, 1) by moving 3 units left and 2 units up.

**Solution:**
Rule: (x, y) → (x - 3, y + 2)

A(1, 2) → A'(1 - 3, 2 + 2) = A'(-2, 4)
B(3, 5) → B'(3 - 3, 5 + 2) = B'(0, 7)
C(4, 1) → C'(4 - 3, 1 + 2) = C'(1, 3)

**Answer: A'(-2, 4), B'(0, 7), C'(1, 3)**

**Example 3:** A point moves from (5, -2) to (1, 3). Describe the translation.

**Solution:**
Original: (5, -2)
New: (1, 3)

Horizontal change: 1 - 5 = -4 (moved 4 left)
Vertical change: 3 - (-2) = 5 (moved 5 up)

**Answer: Translation rule is (x, y) → (x - 4, y + 5)**

---

## Reflections (Flips)

A **reflection** flips a shape over a line (called the line of reflection).

**Think of it as:**
- Looking in a mirror
- Folding paper along a line
- Creating a mirror image

**Properties:**
- Shape and size stay the same
- Orientation reverses (flips)
- Distance from line of reflection stays the same

---

## Common Lines of Reflection

**1. Reflection over the x-axis**

**Rule:** (x, y) → (x, -y)

The x-coordinate stays the same, y-coordinate changes sign.

**Example:**
A(3, 5) → A'(3, -5)
B(-2, 4) → B'(-2, -4)
C(1, -3) → C'(1, 3)

**Pattern:** Points above the x-axis flip below, and vice versa.

**2. Reflection over the y-axis**

**Rule:** (x, y) → (-x, y)

The y-coordinate stays the same, x-coordinate changes sign.

**Example:**
A(4, 2) → A'(-4, 2)
B(-3, 5) → B'(3, 5)
C(6, -1) → C'(-6, -1)

**Pattern:** Points right of y-axis flip left, and vice versa.

**3. Reflection over the line y = x**

**Rule:** (x, y) → (y, x)

Swap the coordinates!

**Example:**
A(2, 5) → A'(5, 2)
B(3, 1) → B'(1, 3)
C(-4, 2) → C'(2, -4)

**Pattern:** The diagonal line y = x is the mirror.

**4. Reflection over the line y = -x**

**Rule:** (x, y) → (-y, -x)

Swap coordinates AND change both signs.

**Example:**
A(3, 2) → A'(-2, -3)
B(1, 4) → B'(-4, -1)
C(-2, 5) → C'(-5, 2)

---

## Comparing Reflections

| Line of Reflection | Rule | What Changes |
|-------------------|------|--------------|
| x-axis | (x, y) → (x, -y) | y changes sign |
| y-axis | (x, y) → (-x, y) | x changes sign |
| y = x | (x, y) → (y, x) | Coordinates swap |
| y = -x | (x, y) → (-y, -x) | Swap and both change sign |

---

## Performing Reflections

**Example 1:** Reflect point P(4, -3) over the x-axis.

**Solution:**
Rule: (x, y) → (x, -y)
P(4, -3) → P'(4, 3)

**Answer: P'(4, 3)**

**Example 2:** Reflect triangle ABC where A(2, 1), B(5, 4), C(3, 6) over the y-axis.

**Solution:**
Rule: (x, y) → (-x, y)

A(2, 1) → A'(-2, 1)
B(5, 4) → B'(-5, 4)
C(3, 6) → C'(-3, 6)

**Answer: A'(-2, 1), B'(-5, 4), C'(-3, 6)**

**Example 3:** Reflect point Q(-3, 5) over the line y = x.

**Solution:**
Rule: (x, y) → (y, x)
Q(-3, 5) → Q'(5, -3)

**Answer: Q'(5, -3)**

---

## Combining Transformations

You can perform multiple transformations in sequence!

**Example:** Point A(2, 3) is translated by (x, y) → (x + 1, y - 2), then reflected over the x-axis. Find the final position.

**Solution:**

**Step 1:** Translation
A(2, 3) → (2 + 1, 3 - 2) = (3, 1)

**Step 2:** Reflection over x-axis
(3, 1) → (3, -1)

**Answer: Final position is (3, -1)**

---

## Properties Preserved

**Both translations and reflections preserve:**
- **Size** - distances don't change
- **Shape** - angles and proportions stay the same
- **Congruence** - original and image are congruent

**What changes:**
- **Position** - both move the shape
- **Orientation** - reflections flip the shape (translations don't)

---

## Real-World Applications

**Translations:**

**Computer graphics:** Moving sprites in video games
- Character moves right: (x, y) → (x + speed, y)

**Animation:** Sliding objects across screen

**Maps:** Shifting a view on GPS

**Manufacturing:** Moving parts on assembly line

**Reflections:**

**Mirror images:** Photography, design
- Symmetric designs use reflections

**Letter symmetry:** Some letters reflect over vertical line
- A, H, M, T, U, V, W, Y

**Architecture:** Symmetric building designs

**Nature:** Butterfly wings, faces (approximate symmetry)

**Logos:** Many company logos use reflections

---

## Identifying Transformations

**Given original and image, determine the transformation:**

**Example:** Point A(3, 2) becomes A'(3, -2). What transformation?

**Solution:**
x stayed the same (3 = 3)
y changed sign (2 → -2)

**Answer: Reflection over the x-axis**

**Example:** Point B(4, 5) becomes B'(7, 3). What transformation?

**Solution:**
x changed by +3 (4 + 3 = 7)
y changed by -2 (5 - 2 = 3)

**Answer: Translation (x, y) → (x + 3, y - 2)**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing which coordinate changes in reflections
- **Wrong:** Reflect over x-axis: (x, y) → (-x, y)
- **Right:** Reflect over x-axis: (x, y) → (x, -y)

❌ **Mistake 2:** Adding when you should subtract in translations
- **Wrong:** Move 3 left: (x, y) → (x + 3, y)
- **Right:** Move 3 left: (x, y) → (x - 3, y)

❌ **Mistake 3:** Forgetting to swap in y = x reflection
- **Wrong:** (3, 5) over y = x stays (3, 5)
- **Right:** (3, 5) over y = x becomes (5, 3)

❌ **Mistake 4:** Applying transformation to only one point
- **Wrong:** Translate only one vertex of a triangle
- **Right:** Apply to ALL points of the shape

❌ **Mistake 5:** Sign errors with negative coordinates
- Be careful: -(-3) = +3!

---

## Step-by-Step Strategy

**For Translations:**
1. Identify the rule (x + a, y + b)
2. Add a to every x-coordinate
3. Add b to every y-coordinate
4. Plot new points

**For Reflections:**
1. Identify the line of reflection
2. Apply the correct rule:
   - x-axis: flip y
   - y-axis: flip x
   - y = x: swap x and y
   - y = -x: swap and flip both
3. Plot new points

---

## Quick Reference

**Translations:**
(x, y) → (x + a, y + b)
- +a = right, -a = left
- +b = up, -b = down

**Reflections:**
- x-axis: (x, y) → (x, -y)
- y-axis: (x, y) → (-x, y)
- y = x: (x, y) → (y, x)
- y = -x: (x, y) → (-y, -x)

**Properties Preserved:**
- Size, shape, congruence

**What Changes:**
- Position (both)
- Orientation (reflections only)

---

## Summary

**Translations** slide shapes without changing orientation:
- All points move same distance and direction
- Rule: (x, y) → (x + a, y + b)
- Preserves size, shape, and orientation

**Reflections** flip shapes over a line:
- Creates mirror image
- Four common lines: x-axis, y-axis, y = x, y = -x
- Preserves size and shape, reverses orientation

**Both are rigid transformations:**
- Shapes stay congruent
- Only position/orientation changes
- Essential for geometry, graphics, and design

Understanding these transformations builds foundation for advanced geometry and real-world applications!`
    }
  });
  console.log('✅ Updated: translations-reflections');

  console.log('\n✨ Successfully updated 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
