import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 7 Math topics - Batch 3 (3 topics)...\n');

  // Topic 1: Solving Inequalities
  await prisma.topic.updateMany({
    where: {
      slug: 'solving-inequalities'
    },
    data: {
      textContent: `# Solving Inequalities

Inequalities are like equations, but instead of saying two things are equal, they show that one is greater than or less than the other. You'll learn to solve and graph inequalities just like you solve equations!

---

## What Is an Inequality?

An **inequality** is a mathematical statement that compares two expressions using inequality symbols.

**Inequality Symbols:**
- **<** means "less than" (3 < 5)
- **>** means "greater than" (7 > 2)
- **≤** means "less than or equal to" (x ≤ 10)
- **≥** means "greater than or equal to" (y ≥ -3)

**Examples:**
- x > 5 (x is greater than 5)
- y ≤ 10 (y is less than or equal to 10)
- 2x + 3 < 15 (an inequality to solve)

---

## Inequalities vs. Equations

**Equation:** x + 3 = 7 (has ONE solution: x = 4)

**Inequality:** x + 3 > 7 (has MANY solutions: x > 4)
- Solutions: 5, 6, 7, 100, 4.1, etc. (infinitely many!)

**Key Difference:** Inequalities have a range of solutions!

---

## Solving One-Step Inequalities

Solve inequalities just like equations - use inverse operations!

### Addition and Subtraction

**Example 1:** Solve x + 5 > 12

**Step 1:** Subtract 5 from both sides
x + 5 - 5 > 12 - 5
x > 7

**Answer: x > 7**

**Meaning:** Any number greater than 7 is a solution!
- Test: x = 8 → 8 + 5 = 13 > 12 ✓
- Test: x = 10 → 10 + 5 = 15 > 12 ✓

**Example 2:** Solve y - 3 ≤ 8

**Step 1:** Add 3 to both sides
y - 3 + 3 ≤ 8 + 3
y ≤ 11

**Answer: y ≤ 11**

**Meaning:** Any number less than or equal to 11 works!

### Multiplication and Division (Positive Numbers)

**Example 3:** Solve 4x < 20

**Step 1:** Divide both sides by 4
4x ÷ 4 < 20 ÷ 4
x < 5

**Answer: x < 5**

**Example 4:** Solve x/3 ≥ 6

**Step 1:** Multiply both sides by 3
3 × (x/3) ≥ 3 × 6
x ≥ 18

**Answer: x ≥ 18**

---

## THE SPECIAL RULE: Multiplying or Dividing by Negatives

**CRITICAL:** When you multiply or divide both sides by a NEGATIVE number, you must **FLIP the inequality symbol**!

**Why?** Think about it: 5 > 2 is true
- Multiply both by -1: -5 ? -2
- On a number line, -5 is LEFT of -2, so -5 < -2
- The inequality flipped!

### Example 1: Dividing by a Negative

Solve: -3x > 12

**Step 1:** Divide both sides by -3 AND flip the symbol
-3x ÷ (-3) < 12 ÷ (-3)  (> becomes <)
x < -4

**Answer: x < -4**

**Check:** Try x = -5
- -3(-5) = 15 > 12 ✓

### Example 2: Multiplying by a Negative

Solve: -x/2 ≤ 4

**Step 1:** Multiply both sides by -2 AND flip the symbol
(-2) × (-x/2) ≥ (-2) × 4  (≤ becomes ≥)
x ≥ -8

**Answer: x ≥ -8**

### Example 3: Watch the Sign!

Solve: -5y < 25

**Step 1:** Divide by -5, flip the symbol
-5y ÷ (-5) > 25 ÷ (-5)
y > -5

**Answer: y > -5**

**Remember:** ONLY flip when multiplying or dividing by a NEGATIVE!

---

## Solving Multi-Step Inequalities

Use the same strategy as multi-step equations!

### Example 1: Two Steps

Solve: 3x + 7 < 22

**Step 1:** Subtract 7 from both sides
3x < 15

**Step 2:** Divide by 3
x < 5

**Answer: x < 5**

### Example 2: With Negative Coefficient

Solve: -2x + 5 ≥ 13

**Step 1:** Subtract 5 from both sides
-2x ≥ 8

**Step 2:** Divide by -2 AND FLIP
x ≤ -4

**Answer: x ≤ -4**

### Example 3: Distributive Property

Solve: 3(x - 4) > 15

**Step 1:** Distribute
3x - 12 > 15

**Step 2:** Add 12 to both sides
3x > 27

**Step 3:** Divide by 3
x > 9

**Answer: x > 9**

### Example 4: Variable on Both Sides

Solve: 5x - 3 < 2x + 9

**Step 1:** Subtract 2x from both sides
3x - 3 < 9

**Step 2:** Add 3 to both sides
3x < 12

**Step 3:** Divide by 3
x < 4

**Answer: x < 4**

---

## Graphing Inequalities on a Number Line

**Symbols and Graphing:**
- **< or >** use an **open circle** (○) - the number is NOT included
- **≤ or ≥** use a **closed/filled circle** (●) - the number IS included
- Shade to the left for "less than"
- Shade to the right for "greater than"

### Example 1: x > 3

Graph: Open circle at 3, shade RIGHT
- 3 is NOT included (open circle)
- All numbers greater than 3 are shaded

### Example 2: x ≤ -2

Graph: Closed circle at -2, shade LEFT
- -2 IS included (closed circle)
- All numbers less than or equal to -2 are shaded

### Example 3: x ≥ 0

Graph: Closed circle at 0, shade RIGHT
- 0 IS included
- All positive numbers and zero are shaded

---

## Writing Inequalities from Graphs

Look at the circle (open or closed) and the shading direction!

**Example 1:** Closed circle at 5, shaded right
- Answer: x ≥ 5

**Example 2:** Open circle at -3, shaded left
- Answer: x < -3

**Example 3:** Closed circle at 0, shaded left
- Answer: x ≤ 0

---

## Writing Inequalities from Word Problems

Translate words into inequality symbols!

**Word Clues:**

**Greater than (>):**
- "more than"
- "exceeds"
- "above"

**Greater than or equal to (≥):**
- "at least"
- "no less than"
- "minimum"

**Less than (<):**
- "fewer than"
- "below"
- "under"

**Less than or equal to (≤):**
- "at most"
- "no more than"
- "maximum"

### Example 1: At Least

"You must be at least 13 years old to have a social media account."

**Inequality:** a ≥ 13 (age must be greater than or equal to 13)

### Example 2: No More Than

"The elevator can hold no more than 2,000 pounds."

**Inequality:** w ≤ 2,000 (weight must be less than or equal to 2,000)

### Example 3: More Than

"Sarah has more than $50 in her account."

**Inequality:** m > 50 (money is greater than 50)

---

## Real-World Applications

### Shopping with a Budget

**Problem:** You have $100 to spend. You buy a shirt for $25. If jeans cost $35 each, how many pairs can you buy?

**Let x = number of jeans**

**Inequality:** 25 + 35x ≤ 100

**Solution:**
35x ≤ 75
x ≤ 75/35
x ≤ 2.14...

**Answer:** You can buy at most 2 pairs of jeans (since you can't buy a fraction of jeans!)

### Grade Requirements

**Problem:** Your test average must be at least 80% to get a B. You've taken 3 tests and scored 75, 82, and 78. What do you need on the 4th test?

**Let x = 4th test score**

**Inequality:** (75 + 82 + 78 + x)/4 ≥ 80

**Solution:**
(235 + x)/4 ≥ 80
235 + x ≥ 320
x ≥ 85

**Answer:** You need at least 85% on the 4th test

### Speed Limits

**Problem:** The speed limit is 65 mph. Write an inequality for legal speeds.

**Let s = speed**

**Inequality:** s ≤ 65

### Weight Restrictions

**Problem:** A bridge has a maximum weight of 10 tons. A truck weighs 3 tons. If each crate weighs 0.5 tons, how many crates can the truck carry?

**Let c = number of crates**

**Inequality:** 3 + 0.5c ≤ 10

**Solution:**
0.5c ≤ 7
c ≤ 14

**Answer:** Maximum 14 crates

---

## Compound Inequalities (Introduction)

Sometimes a value is between two numbers!

**Example:** "Temperature should be between 60°F and 75°F"

**Written as:** 60 ≤ t ≤ 75 or 60 < t < 75

This means t ≥ 60 AND t ≤ 75 at the same time.

**Graph:** Closed circles at 60 and 75, shade between them

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to flip when dividing by negative
- **Wrong:** -2x > 8 → x > -4
- **Right:** -2x > 8 → x < -4 (flip!)

❌ **Mistake 2:** Flipping when you shouldn't
- **Wrong:** 3x < 12 → x > 4 (no negative, don't flip!)
- **Right:** 3x < 12 → x < 4

❌ **Mistake 3:** Using wrong circle on graph
- < or > : open circle ○
- ≤ or ≥ : closed circle ●

❌ **Mistake 4:** Shading wrong direction
- < or ≤ : shade LEFT
- > or ≥ : shade RIGHT

❌ **Mistake 5:** Treating inequality like equation
- Inequalities have MANY solutions, not just one!

---

## Practice Strategy

**Step 1: Solve like an equation**
- Use inverse operations
- Isolate the variable

**Step 2: Watch for negatives!**
- If you multiply or divide by a negative, FLIP the symbol

**Step 3: Graph your answer**
- Choose correct circle (open or closed)
- Shade correct direction

**Step 4: Check with a test value**
- Pick a number that should work
- Substitute it in
- Verify it makes the inequality true

---

## Checking Your Solution

**Example:** Solve x + 5 < 12, got answer x < 7

**Check 1:** Try x = 6 (should work)
- 6 + 5 = 11 < 12 ✓ True!

**Check 2:** Try x = 7 (boundary, should NOT work since it's <, not ≤)
- 7 + 5 = 12 NOT < 12 ✓ Correct!

**Check 3:** Try x = 8 (should NOT work)
- 8 + 5 = 13 NOT < 12 ✓ Correct!

---

## Quick Reference Chart

| Operation | Example | Rule |
|-----------|---------|------|
| Add/Subtract | x + 3 > 7 → x > 4 | Same as equations |
| Multiply/Divide (positive) | 2x < 8 → x < 4 | Same as equations |
| Multiply/Divide (negative) | -2x < 8 → x > -4 | FLIP the symbol! |

**Graphing:**
- < or > : Open circle, shade direction
- ≤ or ≥ : Closed circle, shade direction

**Word Clues:**
- At least, minimum, no less than → ≥
- At most, maximum, no more than → ≤
- More than, above, exceeds → >
- Less than, below, under → <

---

## Summary

**Inequalities** show relationships using <, >, ≤, ≥ symbols.

**Solving:**
- Use inverse operations like equations
- **FLIP the symbol** when multiplying or dividing by a negative
- Solution is a range of values, not just one number

**Graphing:**
- Open circle (○) for < or >
- Closed circle (●) for ≤ or ≥
- Shade left for "less than"
- Shade right for "greater than"

**Applications:**
- Budgets (at most, no more than)
- Requirements (at least, minimum)
- Limits (maximum, speed limits)
- Constraints (weight, capacity)

Master inequalities and you're ready for systems of inequalities, linear programming, and real-world optimization!`
    }
  });
  console.log('✅ Updated: solving-inequalities');

  // Topic 2: Angle Relationships
  await prisma.topic.updateMany({
    where: {
      slug: 'angle-relationships'
    },
    data: {
      textContent: `# Angle Relationships

Angles are everywhere in geometry! Understanding how angles relate to each other helps you solve problems involving shapes, parallel lines, and intersections. Let's explore the key angle relationships you need to know!

---

## Review: Measuring Angles

**Angle:** Formed by two rays with a common endpoint (vertex)

**Measuring angles:**
- Use a protractor
- Measured in degrees (°)
- Full rotation = 360°

**Types of angles by measure:**
- **Acute:** Less than 90° (sharp)
- **Right:** Exactly 90° (square corner)
- **Obtuse:** Between 90° and 180° (wide)
- **Straight:** Exactly 180° (straight line)

---

## Complementary Angles

**Complementary angles** are two angles that add up to **90°**.

**Examples:**
- 30° and 60° are complementary (30 + 60 = 90)
- 45° and 45° are complementary (45 + 45 = 90)
- 25° and 65° are complementary (25 + 65 = 90)

**Key:** They don't have to be next to each other!

### Finding Complement

**Example 1:** What is the complement of 35°?

**Solution:** 90° - 35° = 55°

**Example 2:** Two complementary angles. One is 3x and the other is 2x. Find each angle.

**Solution:**
3x + 2x = 90
5x = 90
x = 18

**Angles:** 3(18) = 54° and 2(18) = 36°

---

## Supplementary Angles

**Supplementary angles** are two angles that add up to **180°**.

**Examples:**
- 120° and 60° are supplementary (120 + 60 = 180)
- 90° and 90° are supplementary (90 + 90 = 180)
- 130° and 50° are supplementary (130 + 50 = 180)

**Key:** They form a straight line when placed adjacent!

### Finding Supplement

**Example 1:** What is the supplement of 110°?

**Solution:** 180° - 110° = 70°

**Example 2:** Two supplementary angles. One is twice the other. Find both angles.

**Let x = smaller angle, then 2x = larger angle**

**Solution:**
x + 2x = 180
3x = 180
x = 60

**Angles:** 60° and 120°

---

## Adjacent Angles

**Adjacent angles** share a common vertex and a common side, but don't overlap.

**Think:** Side-by-side angles

**Example:** If you have a pizza slice, then cut it in half, you create two adjacent angles.

**Note:** Adjacent angles can be complementary, supplementary, or neither!

---

## Vertical Angles

When two lines intersect, they form **vertical angles** - angles that are opposite each other.

**Key Property: Vertical angles are ALWAYS EQUAL!**

**Example:** If two lines intersect and one angle is 50°, what are the others?

When two lines cross, they form 4 angles. The angles opposite each other (vertical angles) are equal, and adjacent angles are supplementary.

**Solution:**
- Vertical to 50° is also 50°
- Adjacent angles are supplementary: 180° - 50° = 130°
- All four angles: 50°, 130°, 50°, 130°

### Example Problem

**Two lines intersect. One angle is 3x and its vertical angle is 105°. Find x.**

**Solution:**
Vertical angles are equal!
3x = 105
x = 35

**Answer: x = 35**

---

## Linear Pairs

A **linear pair** consists of two adjacent angles that form a straight line.

**Key Property: Linear pairs are ALWAYS SUPPLEMENTARY (add to 180°)!**

**Example:** Angles ABC and CBD form a linear pair. If angle ABC = 75°, find angle CBD.

**Solution:**
75° + CBD = 180°
CBD = 105°

---

## Angles Formed by Parallel Lines and a Transversal

When a line (transversal) crosses two parallel lines, it creates 8 angles with special relationships!

**Key angle pairs:**

### 1. Corresponding Angles

**Location:** Same position at each intersection

**Property:** Corresponding angles are EQUAL when lines are parallel

**Example:** If angle 1 = 70°, then angle 5 = 70° (corresponding)

### 2. Alternate Interior Angles

**Location:** Between the parallel lines, on opposite sides of the transversal

**Property:** Alternate interior angles are EQUAL when lines are parallel

**Example:** If angle 3 = 110°, then angle 6 = 110° (alternate interior)

### 3. Alternate Exterior Angles

**Location:** Outside the parallel lines, on opposite sides of the transversal

**Property:** Alternate exterior angles are EQUAL when lines are parallel

**Example:** If angle 1 = 70°, then angle 8 = 70° (alternate exterior)

### 4. Consecutive Interior Angles (Same-Side Interior)

**Location:** Between the parallel lines, on the same side of the transversal

**Property:** Consecutive interior angles are SUPPLEMENTARY (add to 180°)

**Example:** If angle 3 = 110°, then angle 5 = 70° (consecutive interior: 110 + 70 = 180)

---

## Solving with Parallel Lines

**Example:** Lines m and n are parallel. A transversal crosses them. If one angle is 65°, find all 8 angles.

**Solution:**

At first intersection: 65°, 115°, 65°, 115° (vertical and supplementary)

At second intersection (using corresponding angles):
- Corresponding to 65° → 65°
- Corresponding to 115° → 115°
- Pattern repeats: 65°, 115°, 65°, 115°

**All 8 angles:** Four 65° angles and four 115° angles

---

## Using Variables with Angle Relationships

### Example 1: Vertical Angles

Two vertical angles measure (2x + 10)° and (3x - 15)°. Find x.

**Solution:**
Vertical angles are equal!
2x + 10 = 3x - 15
10 + 15 = 3x - 2x
25 = x

**Answer: x = 25**

**Angles:** 2(25) + 10 = 60° and 3(25) - 15 = 60° ✓

### Example 2: Supplementary Angles

Two angles are supplementary. One measures (4x + 5)° and the other (3x + 10)°. Find both angles.

**Solution:**
(4x + 5) + (3x + 10) = 180
7x + 15 = 180
7x = 165
x = 23.57... or about 23.6°

**Angles:** 4(23.6) + 5 = 99.4° and 3(23.6) + 10 = 80.6°

Check: 99.4 + 80.6 = 180° ✓

### Example 3: Parallel Lines

Lines are parallel. One angle is (5x - 20)° and its corresponding angle is (3x + 40)°. Find x.

**Solution:**
Corresponding angles are equal!
5x - 20 = 3x + 40
5x - 3x = 40 + 20
2x = 60
x = 30

**Answer: x = 30**

**Angles:** 5(30) - 20 = 130° and 3(30) + 40 = 130° ✓

---

## Real-World Applications

### Architecture

**Problem:** A roof truss forms an angle of 35° with the horizontal. What is the complement of this angle?

**Solution:** 90° - 35° = 55°

### Street Intersections

**Problem:** Two streets intersect. One corner angle is 72°. What are the other three angles?

**Solution:**
- Vertical: 72°
- Adjacent (supplementary): 180° - 72° = 108°
- Other vertical: 108°

**Angles: 72°, 108°, 72°, 108°**

### Railroad Tracks

**Problem:** Parallel railroad tracks are crossed by a road. If one angle is 115°, what are the other angles?

**Solution:**
All angles are either 115° or 65° (supplement)
Using angle relationships: Four 115° angles and four 65° angles

---

## Angle Relationship Summary Table

| Relationship | Sum/Equality | Example |
|--------------|--------------|---------|
| Complementary | Sum = 90° | 30° + 60° |
| Supplementary | Sum = 180° | 110° + 70° |
| Vertical | Equal | Both are 50° |
| Linear Pair | Sum = 180° | 75° + 105° |
| Corresponding (parallel) | Equal | Both are 65° |
| Alternate Interior (parallel) | Equal | Both are 120° |
| Alternate Exterior (parallel) | Equal | Both are 60° |
| Consecutive Interior (parallel) | Sum = 180° | 110° + 70° |

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing complementary and supplementary
- Complementary = 90° (Think: Corner = 90°)
- Supplementary = 180° (Think: Straight line = 180°)

❌ **Mistake 2:** Assuming all intersecting angles are 90°
- Only perpendicular lines form 90° angles!

❌ **Mistake 3:** Forgetting vertical angles are equal
- They're ALWAYS equal, no exceptions!

❌ **Mistake 4:** Mixing up angle pairs with parallel lines
- Corresponding: Same position
- Alternate interior: Between lines, opposite sides
- Consecutive interior: Between lines, same side

❌ **Mistake 5:** Not checking if lines are parallel
- Special angle relationships ONLY work when lines are parallel!

---

## Practice Tips

**Tip 1: Draw a diagram**
- Visual representation helps identify relationships
- Label angles clearly

**Tip 2: Look for key words**
- "Complement" → add to 90°
- "Supplement" → add to 180°
- "Vertical" → equal
- "Parallel lines" → use special relationships

**Tip 3: Use what you know**
- If you know one angle, you can find others!
- With parallel lines and one angle, you can find all 8!

**Tip 4: Set up equations**
- For variables, write an equation based on the relationship
- Solve algebraically

**Tip 5: Always check**
- Do complementary angles add to 90°?
- Do supplementary angles add to 180°?
- Does your answer make sense?

---

## Quick Formulas

**Finding complement:** 90° - angle

**Finding supplement:** 180° - angle

**With variables:**
- Complementary: x + y = 90
- Supplementary: x + y = 180
- Vertical: angle₁ = angle₂
- Linear pair: angle₁ + angle₂ = 180

---

## Identifying Angle Relationships Checklist

**Are the angles:**
1. Adding to 90°? → Complementary
2. Adding to 180°? → Supplementary
3. Opposite at an intersection? → Vertical (equal)
4. Adjacent and form a straight line? → Linear pair (supplementary)
5. Formed by parallel lines cut by a transversal?
   - Same position? → Corresponding (equal)
   - Between lines, opposite sides? → Alternate interior (equal)
   - Outside lines, opposite sides? → Alternate exterior (equal)
   - Between lines, same side? → Consecutive interior (supplementary)

---

## Summary

**Key Angle Relationships:**

**Complementary:** Add to 90°
**Supplementary:** Add to 180°
**Vertical:** Opposite angles at intersection (always equal)
**Linear Pair:** Adjacent angles forming straight line (supplementary)

**With Parallel Lines:**
**Corresponding:** Equal (same position)
**Alternate Interior:** Equal (between, opposite sides)
**Alternate Exterior:** Equal (outside, opposite sides)
**Consecutive Interior:** Supplementary (between, same side)

**Remember:**
- Vertical angles are ALWAYS equal
- Linear pairs are ALWAYS supplementary
- Parallel line relationships only work when lines are parallel!

Understanding angle relationships is essential for geometry proofs, construction, engineering, and solving real-world problems!`
    }
  });
  console.log('✅ Updated: angle-relationships');

  // Topic 3: Area of Composite Figures
  await prisma.topic.updateMany({
    where: {
      slug: 'area-composite-figures'
    },
    data: {
      textContent: `# Area of Composite Figures

A **composite figure** is a shape made up of two or more basic shapes. To find the area, you break it into simpler shapes, find each area, then add them together!

---

## What Is a Composite Figure?

A **composite figure** (also called a complex figure) is created by combining basic shapes like:
- Rectangles
- Triangles
- Circles
- Trapezoids
- Semicircles

**Real-world examples:**
- Floor plans of houses
- Gardens with multiple sections
- Swimming pools with different depths
- Letters and logos

---

## Review: Area Formulas for Basic Shapes

**Rectangle:** A = length × width = lw

**Square:** A = side × side = s²

**Triangle:** A = (1/2) × base × height = (1/2)bh

**Parallelogram:** A = base × height = bh

**Trapezoid:** A = (1/2) × (base₁ + base₂) × height = (1/2)(b₁ + b₂)h

**Circle:** A = πr² (where r = radius)

**Semicircle:** A = (1/2)πr² (half of a circle)

---

## Strategy for Finding Area of Composite Figures

**Step 1:** Break the figure into basic shapes
- Look for rectangles, triangles, circles, etc.
- Draw lines to separate shapes

**Step 2:** Find the area of each basic shape
- Use appropriate formula for each piece
- Label dimensions carefully

**Step 3:** Add all the areas together
- Total Area = Area₁ + Area₂ + Area₃ + ...

---

## Method 1: Addition Method

Break the figure into parts and ADD the areas.

### Example 1: L-Shaped Figure

An L-shaped figure can be split into two rectangles:
- Top rectangle: 8 ft × 3 ft
- Bottom rectangle: 5 ft × 4 ft

**Solution:**

**Area of top rectangle:**
A₁ = 8 × 3 = 24 ft²

**Area of bottom rectangle:**
A₂ = 5 × 4 = 20 ft²

**Total Area:**
A = 24 + 20 = 44 ft²

**Answer: 44 ft²**

### Example 2: Rectangle with Triangle on Top

A house-shaped figure: rectangle base with triangular roof
- Rectangle: 12 m × 8 m
- Triangle: base = 12 m, height = 5 m

**Solution:**

**Rectangle area:**
A₁ = 12 × 8 = 96 m²

**Triangle area:**
A₂ = (1/2) × 12 × 5 = 30 m²

**Total Area:**
A = 96 + 30 = 126 m²

**Answer: 126 m²**

### Example 3: Rectangle with Semicircle

A shape with rectangle (10 cm × 6 cm) and semicircle on one end (diameter = 6 cm, radius = 3 cm)

**Solution:**

**Rectangle area:**
A₁ = 10 × 6 = 60 cm²

**Semicircle area:**
A₂ = (1/2)π(3²) = (1/2)π(9) = 4.5π ≈ 14.14 cm²

**Total Area:**
A = 60 + 14.14 ≈ 74.14 cm²

**Answer: About 74.14 cm²**

---

## Method 2: Subtraction Method

Sometimes it's easier to find a large shape's area, then SUBTRACT a missing piece!

### Example 1: Rectangle with Corner Cut Out

A 10 in × 8 in rectangle with a 3 in × 2 in rectangle cut from one corner.

**Solution:**

**Large rectangle area:**
A₁ = 10 × 8 = 80 in²

**Cut-out rectangle area:**
A₂ = 3 × 2 = 6 in²

**Remaining Area:**
A = 80 - 6 = 74 in²

**Answer: 74 in²**

### Example 2: Circle with Hole

A circular disc with outer radius 10 cm and a circular hole with radius 4 cm.

**Solution:**

**Outer circle area:**
A₁ = π(10²) = 100π cm²

**Inner circle (hole) area:**
A₂ = π(4²) = 16π cm²

**Remaining Area:**
A = 100π - 16π = 84π ≈ 263.89 cm²

**Answer: About 263.89 cm²**

### Example 3: Rectangle with Triangle Removed

A 15 ft × 10 ft rectangle with a triangle (base = 6 ft, height = 4 ft) removed from one corner.

**Solution:**

**Rectangle area:**
A₁ = 15 × 10 = 150 ft²

**Triangle area:**
A₂ = (1/2) × 6 × 4 = 12 ft²

**Remaining Area:**
A = 150 - 12 = 138 ft²

**Answer: 138 ft²**

---

## Finding Missing Dimensions

Sometimes you need to calculate missing dimensions before finding areas!

### Example: T-Shaped Figure

A T-shaped figure:
- Top horizontal bar: 12 cm × 3 cm
- Vertical stem: ? cm × 4 cm
- Total height: 10 cm

**Step 1: Find missing dimension**
Vertical stem height = 10 - 3 = 7 cm

**Step 2: Find areas**
Top bar: 12 × 3 = 36 cm²
Vertical stem: 7 × 4 = 28 cm²

**Step 3: Add**
Total = 36 + 28 = 64 cm²

**Answer: 64 cm²**

---

## Working with Multiple Shapes

### Example: Complex Floor Plan

A room has:
- Main rectangular area: 20 ft × 15 ft
- Alcove (small rectangle): 8 ft × 5 ft
- Circular bay window: radius = 4 ft (semicircle)

**Solution:**

**Main room:**
A₁ = 20 × 15 = 300 ft²

**Alcove:**
A₂ = 8 × 5 = 40 ft²

**Bay window (semicircle):**
A₃ = (1/2)π(4²) = 8π ≈ 25.13 ft²

**Total Area:**
A = 300 + 40 + 25.13 = 365.13 ft²

**Answer: About 365 ft²**

---

## Real-World Applications

### Landscaping

**Problem:** A garden has a rectangular section (15 m × 10 m) and a triangular section (base = 10 m, height = 6 m). How much area needs to be planted?

**Solution:**
Rectangle: 15 × 10 = 150 m²
Triangle: (1/2) × 10 × 6 = 30 m²
Total: 150 + 30 = 180 m²

**Answer: 180 m²**

### Painting

**Problem:** A wall shaped like a house (rectangle with triangle on top) needs paint. Rectangle is 12 ft × 8 ft, triangle has base 12 ft and height 3 ft. One gallon covers 50 ft². How many gallons needed?

**Solution:**
Rectangle: 12 × 8 = 96 ft²
Triangle: (1/2) × 12 × 3 = 18 ft²
Total: 96 + 18 = 114 ft²
Gallons: 114 ÷ 50 = 2.28 → Need 3 gallons

**Answer: 3 gallons**

### Flooring

**Problem:** An L-shaped room needs tile. One section is 14 ft × 10 ft, the other is 8 ft × 6 ft. Tiles cost $3 per square foot. What's the total cost?

**Solution:**
Section 1: 14 × 10 = 140 ft²
Section 2: 8 × 6 = 48 ft²
Total area: 188 ft²
Cost: 188 × $3 = $564

**Answer: $564**

---

## Using Both Addition and Subtraction

### Example: Swimming Pool

A rectangular pool (20 m × 10 m) has a semicircular extension on one end (radius = 5 m), but a rectangular shallow area (4 m × 3 m) is excluded from the total.

**Solution:**

**Main pool:**
A₁ = 20 × 10 = 200 m²

**Semicircular extension (add):**
A₂ = (1/2)π(5²) = 12.5π ≈ 39.27 m²

**Shallow area to exclude (subtract):**
A₃ = 4 × 3 = 12 m²

**Total:**
A = 200 + 39.27 - 12 = 227.27 m²

**Answer: About 227 m²**

---

## Tips for Success

**Tip 1: Sketch and label**
- Draw the figure neatly
- Label all dimensions
- Mark where you're splitting shapes

**Tip 2: Look for patterns**
- Can you make rectangles?
- Do you see triangles?
- Are there circles or parts of circles?

**Tip 3: Choose your method**
- Addition: When adding sections makes sense
- Subtraction: When removing a piece is easier
- Sometimes you can use either method!

**Tip 4: Track units**
- Keep units consistent (all feet or all meters)
- Final answer is in square units (ft², m², etc.)

**Tip 5: Use formulas correctly**
- Triangle: Don't forget the 1/2!
- Circle: π ≈ 3.14 or use calculator's π button
- Check which dimension is base vs. height

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Counting overlapping areas twice
- Make sure pieces don't overlap!
- Each part of the figure should be counted exactly once

❌ **Mistake 2:** Using wrong dimensions
- Base and height must be perpendicular
- For circles, make sure you have radius (not diameter!)

❌ **Mistake 3:** Forgetting to add/subtract all pieces
- Count all sections of the composite figure

❌ **Mistake 4:** Unit errors
- Mixing feet and inches
- Forgetting to convert
- Writing final answer without square units

❌ **Mistake 5:** Calculation errors with π
- Semicircle is HALF the circle, don't forget the 1/2
- Use consistent value for π (3.14 or calculator)

---

## Practice Strategy

**Step 1: Identify**
- What basic shapes make up this figure?

**Step 2: Decide on method**
- Addition (add pieces) or subtraction (remove pieces)?

**Step 3: Find missing dimensions**
- Do you need to calculate any lengths?

**Step 4: Calculate each area**
- Use correct formula for each shape
- Show your work!

**Step 5: Combine**
- Add or subtract as needed
- Include units!

**Step 6: Check reasonableness**
- Does your answer make sense?
- Is it bigger/smaller than you expected?

---

## Different Ways to Break Up the Same Figure

**Example:** An L-shape can be split multiple ways:

**Method 1:** Two rectangles (horizontal cut)
**Method 2:** Two rectangles (vertical cut)
**Method 3:** Large rectangle minus missing corner

**All methods give the SAME ANSWER!** Choose whichever is easiest for you.

---

## Quick Reference

**Addition Method:**
Total Area = A₁ + A₂ + A₃ + ...

**Subtraction Method:**
Total Area = Large Area - Removed Area

**Key Formulas:**
- Rectangle: lw
- Triangle: (1/2)bh
- Circle: πr²
- Semicircle: (1/2)πr²

**Remember:**
- Break complex into simple
- Use appropriate formulas
- Add or subtract as needed
- Keep track of units!

---

## Summary

**Composite figures** are made up of multiple basic shapes.

**Strategy:**
1. Break into simpler shapes (rectangles, triangles, circles, etc.)
2. Find area of each piece using appropriate formula
3. Add areas together (or subtract if removing a piece)

**Two Main Methods:**
- **Addition:** Add all the pieces
- **Subtraction:** Large shape minus removed piece

**Applications:**
- Floor plans and architecture
- Landscaping and gardening
- Painting and flooring
- Manufacturing and design

Understanding composite figures is essential for real-world problem solving, construction, design, and advanced geometry!`
    }
  });
  console.log('✅ Updated: area-composite-figures');

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
