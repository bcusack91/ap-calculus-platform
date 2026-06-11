import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Pre-Algebra topics - Batch 4 (3 topics)...\n');

  // Topic 1: Order of Operations (PEMDAS)
  await prisma.topic.updateMany({
    where: {
      slug: 'order-of-operations-pemdas'
    },
    data: {
      textContent: `# Order of Operations (PEMDAS)

When an expression has multiple operations, which do you do first? The order of operations ensures everyone gets the same answer!

---

## What Is Order of Operations?

**Order of operations** is a set of rules that tells you the correct sequence for evaluating mathematical expressions.

**Without rules:**
5 + 3 × 2 = ?

Some might think: 5 + 3 = 8, then 8 × 2 = 16
Others might think: 3 × 2 = 6, then 5 + 6 = 11

**Which is right?** We need a standard order!

---

## PEMDAS: The Order

**PEMDAS** is an acronym to remember the order:

**P** - Parentheses (and other grouping symbols)
**E** - Exponents (powers and roots)
**M** - Multiplication
**D** - Division
**A** - Addition
**S** - Subtraction

**Memory trick:** "Please Excuse My Dear Aunt Sally"

---

## Important: Multiplication/Division Are Equal

**Key point:** M and D have the SAME priority!
**Do them left to right as they appear.**

Same with A and S - equal priority, left to right.

**Better to think of PEMDAS as:**
1. **P**arentheses
2. **E**xponents
3. **MD** (Multiplication/Division, left to right)
4. **AS** (Addition/Subtraction, left to right)

---

## Step 1: Parentheses First

**Do operations inside parentheses FIRST.**

**Example:** 3 + (4 × 2)

Step 1: Parentheses → 4 × 2 = 8
Step 2: Addition → 3 + 8 = 11

**Answer: 11**

**Example 2:** (5 + 3) × 2

Step 1: Parentheses → 5 + 3 = 8
Step 2: Multiplication → 8 × 2 = 16

**Answer: 16**

**Without parentheses:** 5 + 3 × 2 = 5 + 6 = 11 (different!)

---

## Step 2: Exponents

**After parentheses, do exponents.**

**Example:** 2 + 3²

Step 1: Exponents → 3² = 9
Step 2: Addition → 2 + 9 = 11

**Answer: 11**

**Example 2:** 5 × 2³ - 10

Step 1: Exponents → 2³ = 8
Step 2: Multiplication → 5 × 8 = 40
Step 3: Subtraction → 40 - 10 = 30

**Answer: 30**

---

## Step 3: Multiplication and Division (Left to Right)

**After exponents, do multiplication and division AS THEY APPEAR from left to right.**

**Example:** 12 ÷ 3 × 2

**Left to right:**
12 ÷ 3 = 4
4 × 2 = 8

**Answer: 8**

**NOT** 12 ÷ (3 × 2) = 12 ÷ 6 = 2 ❌

**Example 2:** 20 × 2 ÷ 5

Left to right:
20 × 2 = 40
40 ÷ 5 = 8

**Answer: 8**

---

## Step 4: Addition and Subtraction (Left to Right)

**Last, do addition and subtraction AS THEY APPEAR from left to right.**

**Example:** 10 - 3 + 2

Left to right:
10 - 3 = 7
7 + 2 = 9

**Answer: 9**

**NOT** 10 - (3 + 2) = 10 - 5 = 5 ❌

**Example 2:** 5 + 8 - 4 + 2

Left to right:
5 + 8 = 13
13 - 4 = 9
9 + 2 = 11

**Answer: 11**

---

## Complete Example

**Evaluate:** 3 + 4 × 2² - 5

**Step 1: Parentheses** (none)

**Step 2: Exponents**
2² = 4
Expression: 3 + 4 × 4 - 5

**Step 3: Multiplication/Division**
4 × 4 = 16
Expression: 3 + 16 - 5

**Step 4: Addition/Subtraction (left to right)**
3 + 16 = 19
19 - 5 = 14

**Answer: 14**

---

## Nested Parentheses

**Work from inside out!**

**Example:** 2 × (3 + (4 × 5))

**Step 1:** Innermost parentheses
4 × 5 = 20
Expression: 2 × (3 + 20)

**Step 2:** Next parentheses
3 + 20 = 23
Expression: 2 × 23

**Step 3:** Multiply
2 × 23 = 46

**Answer: 46**

---

## Brackets and Braces

**Different grouping symbols, same priority as parentheses:**

**( )** - Parentheses
**[ ]** - Brackets
**{ }** - Braces

**All mean "do this first!"**

**Example:** 5 + [3 × (2 + 1)]

Inside to out:
2 + 1 = 3
3 × 3 = 9
5 + 9 = 14

**Answer: 14**

---

## Fraction Bars Act Like Parentheses

**The fraction bar groups the numerator and denominator.**

**Example:** (6 + 4) / (5 - 3)

Think of it as: (6 + 4) ÷ (5 - 3)

Numerator: 6 + 4 = 10
Denominator: 5 - 3 = 2
Division: 10 ÷ 2 = 5

**Answer: 5**

---

## Common Expression: 5 + 3 × 2

**Many students incorrectly do this:**
5 + 3 = 8
8 × 2 = 16 ❌ WRONG!

**Correct order:**
Multiplication first: 3 × 2 = 6
Then addition: 5 + 6 = 11 ✓

**Remember:** Multiplication before addition!

---

## Expression with All Operations

**Evaluate:** 20 ÷ 4 + 3² × 2 - 1

**Step 1: Exponents**
3² = 9
Expression: 20 ÷ 4 + 9 × 2 - 1

**Step 2: Multiplication/Division (left to right)**
20 ÷ 4 = 5
9 × 2 = 18
Expression: 5 + 18 - 1

**Step 3: Addition/Subtraction (left to right)**
5 + 18 = 23
23 - 1 = 22

**Answer: 22**

---

## Why Left to Right Matters

**Example:** 8 ÷ 4 × 2

**Correct (left to right):**
8 ÷ 4 = 2
2 × 2 = 4 ✓

**Incorrect (if you did multiplication first):**
4 × 2 = 8
8 ÷ 8 = 1 ❌ WRONG!

**Always left to right for operations of equal priority!**

---

## Negative Numbers in Order of Operations

**Example:** -3² vs (-3)²

**-3²:** Exponent first, then negative
3² = 9
Then apply negative: -9

**(-3)²:** Parentheses include the negative
(-3) × (-3) = 9

**Very different answers!**

**Example 2:** 5 + -3

This is really 5 + (-3) = 2

---

## Multiple Parentheses

**Example:** (8 - 3) × (2 + 4)

**Step 1:** Do both parentheses
8 - 3 = 5
2 + 4 = 6

**Step 2:** Multiply results
5 × 6 = 30

**Answer: 30**

---

## Order of Operations with Variables

**Example:** 2x + 3² when x = 4

**Step 1:** Substitute
2(4) + 3²

**Step 2:** Exponents
2(4) + 9

**Step 3:** Multiplication
8 + 9

**Step 4:** Addition
17

**Answer: 17**

---

## Real-World Application

**Shopping:**
You buy 3 shirts at $15 each and a $20 hat.
Total cost?

Expression: 3 × 15 + 20

**Correct:**
Multiply first: 3 × 15 = 45
Add: 45 + 20 = 65

**Total: $65**

**If you added first (wrong):**
15 + 20 = 35
3 × 35 = 105 ❌ WRONG!

---

## Area and Perimeter

**Rectangle:** length 5, width (3 + 2)

**Perimeter:** 2(5 + 3 + 2)
Parentheses: 5 + 3 + 2 = 10
Multiply: 2 × 10 = 20

**Or:** 2 × 5 + 2(3 + 2)
= 10 + 2(5)
= 10 + 10
= 20

**Same answer both ways!**

---

## Expressions with Square Roots

**Square root acts like parentheses for what's underneath.**

**Example:** √(16 + 9)

Add first: 16 + 9 = 25
Then square root: √25 = 5

**Answer: 5**

**NOT** √16 + √9 = 4 + 3 = 7 ❌

---

## Complex Expression Practice

**Evaluate:** 100 - 4(2³ - 5) + 10 ÷ 2

**Step 1: Parentheses (inside first)**
Exponent in parentheses: 2³ = 8
Subtraction: 8 - 5 = 3
Expression: 100 - 4(3) + 10 ÷ 2

**Step 2: Multiplication/Division (left to right)**
4(3) = 12
10 ÷ 2 = 5
Expression: 100 - 12 + 5

**Step 3: Addition/Subtraction (left to right)**
100 - 12 = 88
88 + 5 = 93

**Answer: 93**

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Adding before multiplying
- Wrong: 5 + 3 × 2 = 8 × 2 = 16
- Right: 5 + 3 × 2 = 5 + 6 = 11

❌ **Mistake 2:** Not going left to right
- Wrong: 12 ÷ 3 × 2 = 12 ÷ 6 = 2
- Right: 12 ÷ 3 × 2 = 4 × 2 = 8

❌ **Mistake 3:** Forgetting parentheses change everything
- 5 + 3 × 2 = 11
- (5 + 3) × 2 = 16 (different!)

❌ **Mistake 4:** Squaring negative incorrectly
- -3² = -9 (exponent first)
- (-3)² = 9 (parentheses first)

❌ **Mistake 5:** Not working inside out with nested parentheses
- Must do innermost first!

---

## Memory Aids

**PEMDAS:** Please Excuse My Dear Aunt Sally

**Alternative:** GEMDAS
- **G**rouping symbols (parentheses, brackets, braces)
- **E**xponents
- **M**ultiplication
- **D**ivision
- **A**ddition
- **S**ubtraction

**Alternative:** BODMAS (British)
- **B**rackets
- **O**rders (exponents)
- **D**ivision
- **M**ultiplication
- **A**ddition
- **S**ubtraction

**All mean the same thing!**

---

## Step-by-Step Strategy

**To evaluate any expression:**

1. **Scan for parentheses** (or brackets/braces)
   - Do these first, inside to out

2. **Look for exponents** (and roots)
   - Do these second

3. **Find multiplication and division**
   - Do left to right

4. **Do addition and subtraction**
   - Do left to right

5. **Check your work**
   - Re-read the original problem
   - Make sure you didn't skip anything

---

## Calculator vs Mental Math

**Most calculators follow order of operations automatically.**

**Try:** Enter 5 + 3 × 2

Scientific calculator: 11 ✓
Basic calculator might give: 16 ❌ (depends on calculator)

**When in doubt, use parentheses to be clear!**

---

## Writing Expressions Clearly

**Ambiguous:** 6 ÷ 2 × 3

Could be interpreted differently. Better to write:

(6 ÷ 2) × 3 = 9
or
6 ÷ (2 × 3) = 1

**Use parentheses to make your intent clear!**

---

## Practice Pattern Recognition

**All × before +:**
- 2 + 3 × 4 = 2 + 12 = 14
- 5 × 2 + 1 = 10 + 1 = 11
- 7 + 2 × 5 = 7 + 10 = 17

**Parentheses change everything:**
- (2 + 3) × 4 = 5 × 4 = 20
- 5 × (2 + 1) = 5 × 3 = 15
- (7 + 2) × 5 = 9 × 5 = 45

**Exponents before multiplication:**
- 2 × 3² = 2 × 9 = 18
- 5² × 2 = 25 × 2 = 50
- 3 × 2³ = 3 × 8 = 24

---

## Quick Reference

**Order:**
1. Parentheses (grouping symbols)
2. Exponents (powers, roots)
3. Multiplication/Division (left to right)
4. Addition/Subtraction (left to right)

**Remember:**
- M and D are equal priority → left to right
- A and S are equal priority → left to right
- Parentheses always first
- Work inside out with nested grouping

**PEMDAS = Please Excuse My Dear Aunt Sally**

---

## When to Use Parentheses in Writing

**To change the order:**
- Want addition first? Use parentheses: (5 + 3) × 2

**To make clear what you mean:**
- Numerator with addition: (2 + 3) ÷ 5
- Multiple operations: (8 - 2) × (3 + 1)

**In algebra:**
- Distributing: 2(x + 3)
- Negative distributed: -(x - 5)

---

## Summary

**Order of operations (PEMDAS) ensures everyone gets the same answer:**

**Priority from highest to lowest:**
1. **P**arentheses and grouping symbols (inside out)
2. **E**xponents and roots
3. **M**ultiplication and **D**ivision (left to right, equal priority)
4. **A**ddition and **S**ubtraction (left to right, equal priority)

**Key principles:**
- Parentheses can change the answer completely
- Multiplication/Division before Addition/Subtraction
- Operations of equal priority go left to right
- Fraction bars and square root symbols act as grouping

**Applications:**
- Evaluating expressions correctly
- Solving equations
- Real-world calculations (shopping, area, etc.)
- Programming and calculators

**Common errors to avoid:**
- Adding before multiplying
- Not going left to right for M/D and A/S
- Forgetting parentheses change order
- Squaring negatives incorrectly

Master PEMDAS and you'll evaluate any expression correctly every time!`
    }
  });
  console.log('✅ Updated: order-of-operations-pemdas');

  // Topic 2: Angle Measurements
  await prisma.topic.updateMany({
    where: {
      slug: 'angle-measurements'
    },
    data: {
      textContent: `# Angle Measurements

How do we measure the space between two rays? Understanding angles is essential for geometry, navigation, construction, and many real-world applications!

---

## What Is an Angle?

An **angle** is formed by two rays that share a common endpoint.

**Parts of an angle:**
- **Vertex:** The common endpoint where the rays meet
- **Rays (or sides):** The two lines extending from the vertex
- **Angle measure:** The amount of rotation between the rays

**Symbol:** ∠ (means "angle")

**Example:** ∠ABC means the angle at vertex B, formed by rays BA and BC

---

## Measuring Angles

**Angles are measured in degrees.**

**Symbol:** ° (degree symbol)

**Full rotation:** 360°
**Half rotation (straight line):** 180°
**Quarter rotation (right angle):** 90°

**Think:** Like a circle divided into 360 equal parts!

---

## Using a Protractor

A **protractor** is a tool for measuring angles.

**How to use:**
1. Place the center point on the vertex
2. Align the 0° line with one ray
3. Read where the other ray crosses the scale
4. Use the correct scale (0-180 from left or right)

**Tips:**
- Most protractors have two scales (inner and outer)
- Start from 0° on the ray you aligned
- Read the same scale all the way around

---

## Types of Angles by Measure

**Acute Angle:** Less than 90°
- Examples: 30°, 45°, 60°, 89°
- **Sharp, small opening**

**Right Angle:** Exactly 90°
- Forms a square corner
- Marked with a small square symbol □
- **Like the corner of a book**

**Obtuse Angle:** Greater than 90° but less than 180°
- Examples: 120°, 135°, 150°, 179°
- **Wide opening, larger than right angle**

**Straight Angle:** Exactly 180°
- Forms a straight line
- **Opposite rays**

**Reflex Angle:** Greater than 180° but less than 360°
- Examples: 270°, 300°
- **Larger than straight angle**
- Goes the "long way around"

---

## Special Angles

**0°:** No rotation, rays point same direction

**90°:** Right angle, perpendicular lines

**180°:** Straight line, opposite directions

**270°:** Three-quarters of a rotation

**360°:** Full rotation, complete circle, back to start

---

## Complementary Angles

**Complementary angles** add up to 90°.

**Example:** 30° and 60° are complementary
30° + 60° = 90°

**Example 2:** 45° and 45° are complementary
45° + 45° = 90°

**Finding complement:**
Complement of angle x = 90° - x

If angle is 35°, complement is 90° - 35° = 55°

**Real-world:** Two acute angles that form a right angle

---

## Supplementary Angles

**Supplementary angles** add up to 180°.

**Example:** 120° and 60° are supplementary
120° + 60° = 180°

**Example 2:** 90° and 90° are supplementary
90° + 90° = 180°

**Finding supplement:**
Supplement of angle x = 180° - x

If angle is 110°, supplement is 180° - 110° = 70°

**Real-world:** Angles on a straight line

---

## Adjacent Angles

**Adjacent angles:**
- Share a common vertex
- Share a common side (ray)
- Don't overlap

**Example:** If one angle is 50° and the adjacent angle is 40°, together they form a 90° angle (they're also complementary).

---

## Vertical Angles

When two lines intersect, they form four angles.

**Vertical angles** are opposite each other.

**Key property: Vertical angles are ALWAYS equal!**

**Example:**
If one angle is 40°, the vertical angle across from it is also 40°.

The other two angles are both 140° (supplementary to 40°).

**This is always true for intersecting lines!**

---

## Angles on a Straight Line

**Angles on a straight line add up to 180°.**

**Example:** Three angles on a line are 60°, 70°, and x°
60° + 70° + x° = 180°
130° + x° = 180°
x° = 50°

**Any number of angles along a straight line sum to 180°!**

---

## Angles Around a Point

**Angles around a point add up to 360°.**

**Example:** Four angles meet at a point: 90°, 100°, 80°, and x°
90° + 100° + 80° + x° = 360°
270° + x° = 360°
x° = 90°

**Like a full rotation around a circle!**

---

## Drawing Angles

**To draw a 60° angle:**

1. Draw a ray (starting side)
2. Place protractor with center at endpoint
3. Mark 60° on the protractor
4. Draw ray from endpoint through the mark

**Accuracy tips:**
- Use a sharp pencil
- Read the protractor carefully
- Check which scale you're using (0-180)

---

## Estimating Angles

**Helpful benchmarks:**

**45°:** Half of a right angle (90°)
**30°:** One-third of a right angle
**60°:** Two-thirds of a right angle
**135°:** 90° + 45°
**150°:** Almost a straight line (180°)

**Practice estimating before measuring!**

---

## Angle Bisector

An **angle bisector** divides an angle into two equal parts.

**Example:** Bisector of a 60° angle creates two 30° angles
60° ÷ 2 = 30°

**Each half is equal!**

**Finding the bisector:**
If angle is x°, each half is x° ÷ 2

---

## Interior and Exterior Angles

**Interior angles:** Inside a shape
**Exterior angles:** Outside a shape, formed by extending a side

**Triangle fact:**
Interior angles of a triangle sum to 180°

**Example:** Triangle with angles 60°, 70°, x°
60° + 70° + x° = 180°
x° = 50°

---

## Parallel Lines and Transversals

When a line crosses two parallel lines:

**Corresponding angles are equal**
**Alternate interior angles are equal**
**Alternate exterior angles are equal**
**Co-interior angles add to 180°**

**These relationships help find unknown angles!**

---

## Real-World Applications

**Construction:**
- Right angles for walls (90°)
- Roof pitch angles
- Stair angles

**Navigation:**
- Compass bearings (0° = North, 90° = East, 180° = South, 270° = West)
- Turn angles

**Sports:**
- Basketball shooting angles
- Golf club angles
- Skateboard ramp angles

**Clock:**
- Hour hand moves 30° per hour (360° ÷ 12)
- Minute hand moves 6° per minute (360° ÷ 60)

**Photography:**
- Camera angles
- Wide angle vs narrow angle lenses

---

## Clock Angles

**Finding angle between clock hands:**

At 3:00:
- Hour hand at 3 (90°)
- Minute hand at 12 (0°)
- Angle: 90°

At 6:00:
- Hour hand at 6 (180°)
- Minute hand at 12 (0°)
- Angle: 180°

**Each hour = 30°** (360° ÷ 12 hours)
**Each minute = 6°** (360° ÷ 60 minutes)

---

## Compass Directions

**Cardinal directions on a compass:**
- North: 0° (or 360°)
- East: 90°
- South: 180°
- West: 270°

**Example:** Turning from North to East is a 90° clockwise rotation.

**Bearing:** The angle measured clockwise from North.

---

## Angle Addition

**If you know two adjacent angles, you can find the total:**

Angle ABC and Angle CBD share vertex B and side BC.

**Total angle ABD = Angle ABC + Angle CBD**

**Example:**
∠ABC = 35°
∠CBD = 55°
∠ABD = 35° + 55° = 90°

---

## Common Angle Measures to Know

**Common angles:**
- 30°, 45°, 60° (divide right angle)
- 90° (right angle)
- 120°, 135°, 150° (obtuse angles)
- 180° (straight line)

**Special triangle angles:**
- 30°-60°-90° triangle
- 45°-45°-90° triangle (isosceles right triangle)

---

## Solving for Unknown Angles

**Example 1:** Two supplementary angles. One is 3 times the other. Find both.

Let x = smaller angle
3x = larger angle

x + 3x = 180°
4x = 180°
x = 45°

**Angles are 45° and 135°**

**Example 2:** Complementary angles differ by 20°. Find both.

Let x = smaller
x + 20 = larger

x + (x + 20) = 90°
2x + 20 = 90°
2x = 70°
x = 35°

**Angles are 35° and 55°**

---

## Angle Relationships in Shapes

**Triangle:** Interior angles sum to 180°

**Quadrilateral:** Interior angles sum to 360°

**Pentagon:** Interior angles sum to 540°

**Pattern:** For n-sided polygon:
Sum = (n - 2) × 180°

---

## Congruent Angles

**Congruent angles** have the same measure.

**Symbol:** ≅ (means "congruent to")

**Example:** If ∠A = 50° and ∠B = 50°, then ∠A ≅ ∠B

**In geometry:**
- Vertical angles are congruent
- Angles in an equilateral triangle are congruent (all 60°)
- Base angles of an isosceles triangle are congruent

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Reading wrong scale on protractor
- Check which scale starts at 0° for your angle

❌ **Mistake 2:** Confusing complementary and supplementary
- Complementary = 90°
- Supplementary = 180°

❌ **Mistake 3:** Assuming angles look a certain size
- Always measure! Angles can be deceiving visually

❌ **Mistake 4:** Forgetting angle sum rules
- Triangle = 180°
- Straight line = 180°
- Full rotation = 360°

❌ **Mistake 5:** Not labeling angle measurements
- Always include the ° symbol!

---

## Problem-Solving Strategies

**To find unknown angles:**

1. **Identify relationships**
   - Complementary? Supplementary?
   - Vertical angles? Angles on a line?

2. **Write an equation**
   - Use angle sum rules
   - Set up based on given information

3. **Solve the equation**
   - Use algebra skills
   - Check that answer makes sense

4. **Verify**
   - Do angles add to correct sum?
   - Is answer in reasonable range?

---

## Angle Notation

**Ways to name angles:**

**By three points:** ∠ABC (vertex in middle)
**By vertex:** ∠B (if only one angle at that vertex)
**By number:** ∠1, ∠2 (labeled angles)

**Angle measure notation:**
m∠ABC = 45° (means "measure of angle ABC is 45 degrees")

---

## Quick Reference

**Angle types:**
- Acute: < 90°
- Right: = 90°
- Obtuse: 90° to 180°
- Straight: = 180°
- Reflex: 180° to 360°

**Angle relationships:**
- Complementary: sum to 90°
- Supplementary: sum to 180°
- Vertical: opposite and equal when lines intersect

**Angle sums:**
- Straight line: 180°
- Around a point: 360°
- Triangle: 180°

**Tools:**
- Protractor for measuring
- Ruler for drawing straight rays
- Compass for constructing angles

---

## Practice Tips

**Tip 1:** Practice with a protractor
- Measure many angles
- Draw angles of different sizes
- Check your estimates by measuring

**Tip 2:** Memorize key angle relationships
- Complementary, supplementary
- Vertical angles equal
- Angles on a line

**Tip 3:** Visualize common angles
- Know what 45°, 90°, 180° look like
- Use these as reference points

**Tip 4:** Set up equations for unknowns
- Use algebra to solve
- Check answers make sense (positive, reasonable size)

**Tip 5:** Look for angle relationships in real life
- Corners, intersections, shapes
- Clock positions, compass directions

---

## Summary

**Angles measure the rotation between two rays:**

**Measured in degrees (°):**
- Full rotation = 360°
- Straight line = 180°
- Right angle = 90°

**Angle types:**
- Acute (< 90°), Right (90°), Obtuse (90°-180°), Straight (180°), Reflex (180°-360°)

**Angle relationships:**
- Complementary sum to 90°
- Supplementary sum to 180°
- Vertical angles are equal
- Angles on a line sum to 180°
- Angles around a point sum to 360°

**Tools and skills:**
- Use protractor to measure and draw
- Estimate angle sizes
- Solve for unknowns using relationships
- Apply to triangles, polygons, parallel lines

**Applications:**
- Construction and design
- Navigation and bearings
- Time (clock angles)
- Sports and everyday activities

Understanding angles is fundamental to geometry and essential for many practical applications!`
    }
  });
  console.log('✅ Updated: angle-measurements');

  // Topic 3: Perimeter and Area
  await prisma.topic.updateMany({
    where: {
      slug: 'perimeter-and-area'
    },
    data: {
      textContent: `# Perimeter and Area

How do we measure around a shape and the space inside it? Perimeter and area are fundamental concepts for measuring two-dimensional figures!

---

## What Is Perimeter?

**Perimeter** is the distance around the outside of a shape.

**Think:** Walking around the edge of a shape - how far would you walk?

**Units:** Linear units (inches, feet, meters, cm, etc.)

**Formula idea:** Add up all the side lengths!

---

## What Is Area?

**Area** is the amount of space inside a shape.

**Think:** How many square tiles would cover the shape?

**Units:** Square units (square inches, square feet, square meters, cm², etc.)

**Formula idea:** Length × Width for rectangles, variations for other shapes!

---

## Key Difference: Perimeter vs Area

**Perimeter:**
- Distance AROUND
- One-dimensional (length)
- Units: inches, cm, feet, meters
- Like a fence around a yard

**Area:**
- Space INSIDE
- Two-dimensional (length × width)
- Units: square inches, cm², square feet, m²
- Like carpet covering a floor

**Different measurements for different purposes!**

---

## Rectangle Perimeter

**Perimeter of rectangle = 2 × length + 2 × width**

Or: **P = 2l + 2w**

Or: **P = 2(l + w)**

**Example:** Rectangle with length 8 cm, width 5 cm

P = 2(8) + 2(5)
P = 16 + 10
P = 26 cm

**Or:** P = 2(8 + 5) = 2(13) = 26 cm

**All sides added: 8 + 5 + 8 + 5 = 26 cm**

---

## Rectangle Area

**Area of rectangle = length × width**

**A = l × w**

**Example:** Rectangle with length 8 cm, width 5 cm

A = 8 × 5
A = 40 cm²

**Read as "40 square centimeters"**

**Think:** 8 rows of 5 square centimeters = 40 squares total

---

## Square Perimeter

A **square** has all four sides equal.

**Perimeter of square = 4 × side**

**P = 4s**

**Example:** Square with side 6 inches

P = 4 × 6
P = 24 inches

**Simple: just multiply side length by 4!**

---

## Square Area

**Area of square = side × side**

**A = s²**

**Example:** Square with side 6 inches

A = 6 × 6
A = 36 square inches
A = 36 in²

**This is why we call it "squared"!**

---

## Triangle Perimeter

**Perimeter of triangle = sum of all three sides**

**P = a + b + c**

**Example:** Triangle with sides 5 cm, 7 cm, 8 cm

P = 5 + 7 + 8
P = 20 cm

**Just add all three sides!**

---

## Triangle Area

**Area of triangle = 1/2 × base × height**

**A = (1/2)bh** or **A = bh/2**

**Important:** Height must be PERPENDICULAR to the base!

**Example:** Triangle with base 10 cm, height 6 cm

A = (1/2) × 10 × 6
A = (1/2) × 60
A = 30 cm²

**Think:** A triangle is half a rectangle!

---

## Understanding Triangle Height

**Height (altitude):**
- Perpendicular distance from base to opposite vertex
- Forms a right angle with the base
- May be inside, outside, or on the side of the triangle

**Any side can be the base!**
- Just make sure height is perpendicular to that base

---

## Parallelogram Area

**Area of parallelogram = base × height**

**A = bh**

**Example:** Parallelogram with base 9 m, height 4 m

A = 9 × 4
A = 36 m²

**Note:** Height is perpendicular to base, not the slanted side!

**Perimeter:** Add all four sides (not just base × 2!)

---

## Trapezoid Area

**Area of trapezoid = 1/2 × (base₁ + base₂) × height**

**A = (1/2)(b₁ + b₂)h**

**Trapezoid:** Quadrilateral with exactly one pair of parallel sides

**Example:** Trapezoid with bases 8 ft and 12 ft, height 5 ft

A = (1/2)(8 + 12) × 5
A = (1/2)(20) × 5
A = 10 × 5
A = 50 ft²

**Think:** Average of the two bases, times the height!

---

## Circle Circumference

**Circumference** is the perimeter of a circle.

**C = 2πr** (using radius)
**C = πd** (using diameter)

**π (pi) ≈ 3.14** or **π ≈ 22/7**

**Example:** Circle with radius 7 cm

C = 2π(7)
C = 14π
C ≈ 14 × 3.14
C ≈ 43.96 cm

**Or:** C = πd = π(14) ≈ 43.96 cm

---

## Circle Area

**Area of circle = πr²**

**A = πr²**

**Example:** Circle with radius 5 inches

A = π(5)²
A = π(25)
A = 25π
A ≈ 25 × 3.14
A ≈ 78.5 in²

**Remember:** Radius squared, then multiply by π!

---

## Finding Radius from Diameter

**Diameter = 2 × radius**
**Radius = diameter ÷ 2**

**Example:** Circle with diameter 20 m

Radius = 20 ÷ 2 = 10 m

Then:
C = πd = π(20) ≈ 62.8 m
A = πr² = π(10)² = 100π ≈ 314 m²

---

## Composite Figures

**Composite figure:** Made of multiple shapes combined.

**Strategy:**
1. Break into simpler shapes
2. Find area of each part
3. Add (or subtract) areas

**Example:** L-shaped figure

Can be: Two rectangles added
Or: Large rectangle minus small rectangle

**Both methods give same answer!**

---

## Composite Example: L-Shape

**L-shape:** 
- Horizontal part: 10 × 3 = 30 units²
- Vertical part: 4 × 5 = 20 units²
- Total: 30 + 20 = 50 units²

**Or:**
- Large rectangle: 10 × 8 = 80 units²
- Missing corner: 6 × 5 = 30 units²
- Total: 80 - 30 = 50 units²

**Same answer both ways!**

---

## Composite Example: Rectangle with Semicircle

**Figure:** Rectangle 8 × 6 with semicircle on top (diameter 8)

**Rectangle area:**
A = 8 × 6 = 48 units²

**Semicircle area:**
Radius = 8 ÷ 2 = 4
Full circle: A = π(4)² = 16π
Semicircle: A = 16π ÷ 2 = 8π ≈ 25.12 units²

**Total area:**
48 + 25.12 ≈ 73.12 units²

---

## Units Matter!

**Perimeter:** Linear units
- 20 feet, 30 cm, 15 m

**Area:** Square units
- 50 ft², 100 cm², 75 m²

**Converting units:**
- 1 foot = 12 inches
- 1 square foot = 144 square inches (12 × 12)

**Always include units in your answer!**

---

## Real-World Applications

**Perimeter:**
- Fencing a yard (how much fence?)
- Framing a picture
- Edging a garden bed
- Running track length

**Area:**
- Carpeting a room (how much carpet?)
- Painting a wall (how much paint?)
- Tiling a floor (how many tiles?)
- Seeding a lawn (how much seed?)

**Different uses, different measurements!**

---

## Finding Missing Dimensions

**If you know perimeter:**

Rectangle perimeter = 40 cm, length = 12 cm, find width

P = 2l + 2w
40 = 2(12) + 2w
40 = 24 + 2w
16 = 2w
w = 8 cm

**If you know area:**

Rectangle area = 63 m², length = 9 m, find width

A = l × w
63 = 9 × w
w = 7 m

---

## Scaling and Area

**If you double the dimensions, area quadruples!**

**Original square:** side = 2, area = 4
**Doubled square:** side = 4, area = 16

**Why?** Area = s²
- Original: 2² = 4
- Doubled: 4² = 16 (multiplied by 4!)

**If you triple dimensions, area is multiplied by 9!** (3²)

---

## Comparing Shapes with Same Perimeter

**Different shapes can have same perimeter but different areas!**

**Example:** Both have perimeter 24 units

Rectangle 8 × 4:
- Perimeter: 2(8 + 4) = 24
- Area: 8 × 4 = 32 units²

Rectangle 6 × 6 (square):
- Perimeter: 4(6) = 24
- Area: 6 × 6 = 36 units²

**Square has larger area with same perimeter!**

---

## Comparing Shapes with Same Area

**Different shapes can have same area but different perimeters!**

**Example:** Both have area 36 units²

Rectangle 9 × 4:
- Area: 9 × 4 = 36
- Perimeter: 2(9 + 4) = 26

Square 6 × 6:
- Area: 6 × 6 = 36
- Perimeter: 4(6) = 24

**Square has smaller perimeter with same area!**

---

## Irregular Shapes on Grid

**For shapes on a grid:**

**Method 1:** Count whole squares and partial squares
- Whole squares = 1 unit² each
- Two halves = 1 unit²

**Method 2:** Enclose in rectangle, subtract uncovered parts

**Estimate partial squares when needed!**

---

## Formulas Summary

**Rectangle:**
- Perimeter: P = 2l + 2w or P = 2(l + w)
- Area: A = lw

**Square:**
- Perimeter: P = 4s
- Area: A = s²

**Triangle:**
- Perimeter: P = a + b + c
- Area: A = (1/2)bh

**Parallelogram:**
- Area: A = bh

**Trapezoid:**
- Area: A = (1/2)(b₁ + b₂)h

**Circle:**
- Circumference: C = 2πr or C = πd
- Area: A = πr²

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing perimeter and area
- Perimeter = around, Area = inside

❌ **Mistake 2:** Wrong units
- Perimeter: feet, Area: square feet

❌ **Mistake 3:** Using slant height instead of perpendicular height
- Height must be perpendicular to base!

❌ **Mistake 4:** Forgetting to square the radius in circle area
- A = πr² not πr

❌ **Mistake 5:** Adding areas when you should subtract
- In composite figures, check if parts overlap

---

## Problem-Solving Strategy

**To find perimeter:**
1. Identify the shape
2. Find all side lengths
3. Add them up
4. Include linear units

**To find area:**
1. Identify the shape
2. Find needed measurements (base, height, radius, etc.)
3. Use correct formula
4. Include square units

**For composite figures:**
1. Break into simpler shapes
2. Find area of each
3. Add or subtract as needed
4. Check work makes sense

---

## Estimation Skills

**Estimate before calculating:**

**Perimeter:** About how many sides added?
**Area:** About how many squares fit inside?

**Rounding:**
- π ≈ 3 for quick estimates
- Round dimensions to nearest whole number

**Check:** Does final answer match estimate?

---

## Quick Reference

**Perimeter:**
- Distance around
- Add all sides
- Linear units

**Area:**
- Space inside
- Length × width (for rectangles)
- Square units

**Key formulas:**
- Rectangle: P = 2(l + w), A = lw
- Square: P = 4s, A = s²
- Triangle: A = (1/2)bh
- Circle: C = 2πr, A = πr²

**Remember:**
- Height perpendicular to base
- Radius is half diameter
- Include units in answer!

---

## Practice Tips

**Tip 1:** Draw and label figures
- Visual helps understanding
- Mark what you know

**Tip 2:** Write formula first
- Then substitute values
- Reduces errors

**Tip 3:** Check units
- Convert if needed
- Square units for area!

**Tip 4:** Estimate first
- Helps catch big errors
- Builds number sense

**Tip 5:** Practice with real objects
- Measure room perimeter
- Calculate floor area
- Makes it concrete!

---

## Summary

**Perimeter and area measure different aspects of shapes:**

**Perimeter:**
- Distance around the outside
- Add all side lengths
- Uses linear units (cm, m, ft, in)
- Applications: fencing, framing, borders

**Area:**
- Amount of space inside
- Uses formulas based on shape
- Uses square units (cm², m², ft², in²)
- Applications: flooring, painting, covering

**Key concepts:**
- Different shapes, different formulas
- Height must be perpendicular
- Composite figures: break into parts
- Scaling changes area dramatically
- Always include proper units

**Essential formulas:**
- Rectangle/Square: A = lw or s²
- Triangle: A = (1/2)bh
- Circle: A = πr², C = 2πr
- Perimeter: sum of all sides

Master these and you can measure any two-dimensional space!`
    }
  });
  console.log('✅ Updated: perimeter-and-area');

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
