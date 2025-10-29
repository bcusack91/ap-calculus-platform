import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 8 Math topics - Batch 1 (3 topics)...\n');

  // Topic 1: Integer Exponents
  await prisma.topic.updateMany({
    where: {
      slug: 'integer-exponents'
    },
    data: {
      textContent: `# Integer Exponents

Exponents are a powerful tool in mathematics! When we expand beyond positive whole number exponents to include negative and zero exponents, we unlock even more mathematical possibilities. Let's explore how integer exponents work!

---

## What Are Integer Exponents?

**Integer exponents** include:
- Positive integers: 2³, 5⁴, 10²
- Zero: 5⁰, 10⁰, x⁰
- Negative integers: 2⁻³, 5⁻², 10⁻¹

All follow consistent rules that make calculations easier!

---

## Review: Positive Exponents

**Base** = the number being multiplied
**Exponent** = how many times to multiply it

**Example:** 2⁴ = 2 × 2 × 2 × 2 = 16

**General form:** aⁿ where a is the base, n is the exponent

---

## Zero as an Exponent

**Rule:** Any non-zero number raised to the power of 0 equals 1.

**a⁰ = 1** (where a ≠ 0)

**Examples:**
- 5⁰ = 1
- 10⁰ = 1
- 237⁰ = 1
- (-8)⁰ = 1
- x⁰ = 1

**Why?** Using the division property of exponents:
- 5³ ÷ 5³ = 125 ÷ 125 = 1
- 5³ ÷ 5³ = 5³⁻³ = 5⁰
- Therefore, 5⁰ = 1

**Special note:** 0⁰ is undefined in mathematics.

---

## Negative Exponents

**Rule:** A negative exponent means "take the reciprocal."

**a⁻ⁿ = 1/aⁿ**

**Examples:**

**Example 1:** 2⁻³
2⁻³ = 1/2³ = 1/8

**Example 2:** 5⁻²
5⁻² = 1/5² = 1/25

**Example 3:** 10⁻¹
10⁻¹ = 1/10¹ = 1/10 = 0.1

**Example 4:** 3⁻⁴
3⁻⁴ = 1/3⁴ = 1/81

---

## Negative Exponents with Fractions

**Rule:** (a/b)⁻ⁿ = (b/a)ⁿ

Flip the fraction and make the exponent positive!

**Examples:**

**Example 1:** (2/3)⁻²
(2/3)⁻² = (3/2)² = 9/4

**Example 2:** (1/4)⁻³
(1/4)⁻³ = (4/1)³ = 4³ = 64

**Example 3:** (5/2)⁻¹
(5/2)⁻¹ = (2/5)¹ = 2/5

---

## Negative Exponents in Fractions

If a negative exponent appears in the numerator or denominator:

**Rule 1:** 1/a⁻ⁿ = aⁿ
Move from denominator to numerator and change sign!

**Example:** 1/2⁻³ = 2³ = 8

**Rule 2:** a⁻ⁿ/b = 1/(aⁿb)

**Example:** 3⁻²/5 = 1/(3²·5) = 1/(9·5) = 1/45

---

## Laws of Exponents with Integers

All exponent rules work with integer exponents!

**Product Rule:** aᵐ · aⁿ = aᵐ⁺ⁿ

**Example:** 2³ · 2⁻⁵ = 2³⁺⁽⁻⁵⁾ = 2⁻² = 1/4

**Quotient Rule:** aᵐ ÷ aⁿ = aᵐ⁻ⁿ

**Example:** 5² ÷ 5⁵ = 5²⁻⁵ = 5⁻³ = 1/125

**Power Rule:** (aᵐ)ⁿ = aᵐⁿ

**Example:** (3⁻²)³ = 3⁻⁶ = 1/729

**Power of a Product:** (ab)ⁿ = aⁿbⁿ

**Example:** (2x)⁻³ = 2⁻³x⁻³ = x⁻³/8

**Power of a Quotient:** (a/b)ⁿ = aⁿ/bⁿ

**Example:** (2/3)⁻² = 2⁻²/3⁻² = 3²/2² = 9/4

---

## Simplifying Expressions with Integer Exponents

**Example 1:** Simplify x⁻⁴ · x⁷

**Solution:**
Use product rule: x⁻⁴⁺⁷ = x³

**Answer: x³**

**Example 2:** Simplify (2a⁻³b²)⁻²

**Solution:**
Apply power rule:
(2a⁻³b²)⁻² = 2⁻² · a⁶ · b⁻⁴

Convert to positive exponents:
= a⁶/(2² · b⁴)
= a⁶/(4b⁴)

**Answer: a⁶/(4b⁴)**

**Example 3:** Simplify (3x²y⁻¹)/(6x⁻³y⁴)

**Solution:**
Separate coefficients and variables:
= (3/6) · (x²/x⁻³) · (y⁻¹/y⁴)

Simplify each part:
= (1/2) · x²⁻⁽⁻³⁾ · y⁻¹⁻⁴
= (1/2) · x⁵ · y⁻⁵
= x⁵/(2y⁵)

**Answer: x⁵/(2y⁵)**

---

## Writing with Positive Exponents

Often we want to rewrite expressions using only positive exponents.

**Example 1:** Write 5x⁻³ with positive exponents

**Solution:** 5x⁻³ = 5/x³

**Example 2:** Write 2a⁻²b⁴/c⁻³ with positive exponents

**Solution:**
Move negative exponents:
= 2b⁴c³/a²

**Example 3:** Write (m⁻²n³)⁻¹ with positive exponents

**Solution:**
Apply power rule:
= m²n⁻³
= m²/n³

---

## Real-World Applications

**Scientific Notation:** Negative exponents represent very small numbers
- 1 millimeter = 10⁻³ meters
- 1 microsecond = 10⁻⁶ seconds
- Diameter of a cell: 10⁻⁵ meters

**Computer Science:** Data sizes
- 1 byte = 2⁰ bytes
- 1 kilobyte = 2¹⁰ bytes
- 1 megabyte = 2²⁰ bytes

**Finance:** Compound interest formulas use exponents
- Amount = P(1 + r)⁻ⁿ for present value

**Physics:** Inverse square laws
- Light intensity ∝ distance⁻²
- Gravitational force ∝ distance⁻²

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Thinking 5⁰ = 0
- **Wrong:** 5⁰ = 0
- **Right:** 5⁰ = 1

❌ **Mistake 2:** Making the base negative instead of reciprocal
- **Wrong:** 2⁻³ = -8
- **Right:** 2⁻³ = 1/8

❌ **Mistake 3:** Forgetting to flip when dividing
- **Wrong:** 1/3⁻² = 1/9
- **Right:** 1/3⁻² = 3² = 9

❌ **Mistake 4:** Applying exponent to coefficient incorrectly
- **Wrong:** 2x⁻³ = 1/(2x³) ... NO! Only x has negative exponent
- **Right:** 2x⁻³ = 2/x³

❌ **Mistake 5:** Adding exponents when multiplying different bases
- **Wrong:** 2³ · 3² = 6⁵
- **Right:** 2³ · 3² = 8 · 9 = 72

---

## Practice Strategy

**Step 1:** Identify negative and zero exponents

**Step 2:** Apply definitions:
- a⁰ = 1
- a⁻ⁿ = 1/aⁿ

**Step 3:** Use exponent laws to combine like bases

**Step 4:** Convert to positive exponents if required

**Step 5:** Simplify fully

---

## Quick Reference

**Zero Exponent:**
- a⁰ = 1

**Negative Exponent:**
- a⁻ⁿ = 1/aⁿ
- 1/a⁻ⁿ = aⁿ
- (a/b)⁻ⁿ = (b/a)ⁿ

**Exponent Laws:**
- aᵐ · aⁿ = aᵐ⁺ⁿ
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- (ab)ⁿ = aⁿbⁿ
- (a/b)ⁿ = aⁿ/bⁿ

---

## Summary

**Integer exponents** extend our understanding beyond positive whole numbers:

**Zero exponents:** Any non-zero base to the power of 0 equals 1
- 5⁰ = 1, x⁰ = 1

**Negative exponents:** Represent reciprocals
- 2⁻³ = 1/8
- x⁻² = 1/x²

**All exponent laws apply** to integer exponents, making calculations consistent and predictable.

**Key skills:**
- Convert negative exponents to positive
- Simplify expressions using exponent laws
- Recognize real-world applications

Understanding integer exponents is essential for algebra, scientific notation, and advanced mathematics!`
    }
  });
  console.log('✅ Updated: integer-exponents');

  // Topic 2: Operations with Scientific Notation
  await prisma.topic.updateMany({
    where: {
      slug: 'operations-scientific-notation'
    },
    data: {
      textContent: `# Operations with Scientific Notation

Scientific notation is incredibly useful for working with very large or very small numbers! Once you know how to add, subtract, multiply, and divide numbers in scientific notation, you can tackle problems in science, engineering, and technology with ease.

---

## Review: What Is Scientific Notation?

**Scientific notation** expresses numbers as:

**a × 10ⁿ**

Where:
- a is a number between 1 and 10 (1 ≤ a < 10)
- n is an integer exponent

**Examples:**
- 3,000 = 3 × 10³
- 0.0045 = 4.5 × 10⁻³
- 6,500,000 = 6.5 × 10⁶

---

## Multiplying Scientific Notation

**Rule:** Multiply the coefficients, add the exponents

**(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ**

**Example 1:** (3 × 10⁴) × (2 × 10⁵)

**Solution:**
Step 1: Multiply coefficients: 3 × 2 = 6
Step 2: Add exponents: 10⁴⁺⁵ = 10⁹
Step 3: Combine: 6 × 10⁹

**Answer: 6 × 10⁹**

**Example 2:** (4 × 10³) × (5 × 10⁻²)

**Solution:**
Step 1: Multiply: 4 × 5 = 20
Step 2: Add exponents: 10³⁺⁽⁻²⁾ = 10¹
Step 3: Combine: 20 × 10¹

Step 4: Adjust to proper form (1 ≤ a < 10):
20 × 10¹ = 2.0 × 10² = 2 × 10²

**Answer: 2 × 10²**

**Example 3:** (6.5 × 10⁻³) × (4 × 10⁷)

**Solution:**
Multiply: 6.5 × 4 = 26
Add exponents: 10⁻³⁺⁷ = 10⁴
Combine: 26 × 10⁴

Adjust: 26 × 10⁴ = 2.6 × 10⁵

**Answer: 2.6 × 10⁵**

---

## Dividing Scientific Notation

**Rule:** Divide the coefficients, subtract the exponents

**(a × 10ᵐ) ÷ (b × 10ⁿ) = (a ÷ b) × 10ᵐ⁻ⁿ**

**Example 1:** (8 × 10⁶) ÷ (2 × 10³)

**Solution:**
Step 1: Divide coefficients: 8 ÷ 2 = 4
Step 2: Subtract exponents: 10⁶⁻³ = 10³
Step 3: Combine: 4 × 10³

**Answer: 4 × 10³**

**Example 2:** (9 × 10⁵) ÷ (3 × 10⁷)

**Solution:**
Divide: 9 ÷ 3 = 3
Subtract exponents: 10⁵⁻⁷ = 10⁻²
Combine: 3 × 10⁻²

**Answer: 3 × 10⁻²**

**Example 3:** (7.2 × 10⁴) ÷ (1.8 × 10⁻²)

**Solution:**
Divide: 7.2 ÷ 1.8 = 4
Subtract exponents: 10⁴⁻⁽⁻²⁾ = 10⁴⁺² = 10⁶
Combine: 4 × 10⁶

**Answer: 4 × 10⁶**

---

## Adding and Subtracting Scientific Notation

**Rule:** Exponents must be the SAME before adding/subtracting

**Steps:**
1. Convert numbers to have the same exponent
2. Add or subtract the coefficients
3. Keep the common exponent
4. Adjust to proper scientific notation if needed

**Example 1:** (3 × 10⁴) + (5 × 10⁴)

**Solution:**
Same exponents! Just add coefficients:
(3 + 5) × 10⁴ = 8 × 10⁴

**Answer: 8 × 10⁴**

**Example 2:** (6 × 10⁵) + (2 × 10³)

**Solution:**
Different exponents! Convert to same power of 10:

Option 1: Use 10⁵
2 × 10³ = 0.02 × 10⁵

Now add:
(6 + 0.02) × 10⁵ = 6.02 × 10⁵

**Answer: 6.02 × 10⁵**

**Example 3:** (7 × 10⁴) - (3 × 10³)

**Solution:**
Convert to 10⁴:
3 × 10³ = 0.3 × 10⁴

Subtract:
(7 - 0.3) × 10⁴ = 6.7 × 10⁴

**Answer: 6.7 × 10⁴**

**Example 4:** (5.2 × 10⁶) + (8.5 × 10⁶)

**Solution:**
Same exponents:
(5.2 + 8.5) × 10⁶ = 13.7 × 10⁶

Adjust to proper form:
13.7 × 10⁶ = 1.37 × 10⁷

**Answer: 1.37 × 10⁷**

---

## Combined Operations

**Example 1:** (4 × 10³) × (6 × 10²) ÷ (3 × 10⁴)

**Solution:**
Step 1: Multiply first two numbers
(4 × 6) × 10³⁺² = 24 × 10⁵ = 2.4 × 10⁶

Step 2: Divide by third number
(2.4 × 10⁶) ÷ (3 × 10⁴)
= (2.4 ÷ 3) × 10⁶⁻⁴
= 0.8 × 10²
= 8 × 10¹

**Answer: 8 × 10¹ or 80**

**Example 2:** (5 × 10⁴) + (2 × 10⁴) - (3 × 10³)

**Solution:**
Step 1: Add first two (same exponents)
(5 + 2) × 10⁴ = 7 × 10⁴

Step 2: Subtract third (convert exponents)
3 × 10³ = 0.3 × 10⁴
7 × 10⁴ - 0.3 × 10⁴ = 6.7 × 10⁴

**Answer: 6.7 × 10⁴**

---

## Real-World Applications

**Astronomy:** Distance calculations
- Earth to Sun: 1.5 × 10⁸ km
- Sun to nearest star: 4 × 10¹³ km
- Ratio: (4 × 10¹³) ÷ (1.5 × 10⁸) ≈ 2.67 × 10⁵ times farther

**Biology:** Cell measurements
- Red blood cell: 7 × 10⁻⁶ m diameter
- Bacterial cell: 2 × 10⁻⁶ m diameter
- Difference: (7 - 2) × 10⁻⁶ = 5 × 10⁻⁶ m

**Computing:** Data calculations
- Internet traffic: 4.5 × 10¹⁸ bytes per day
- Average per second: (4.5 × 10¹⁸) ÷ (8.64 × 10⁴) ≈ 5.2 × 10¹³ bytes/sec

**Chemistry:** Molecular quantities
- Avogadro's number: 6.02 × 10²³ molecules/mole
- Two moles: 2 × (6.02 × 10²³) = 1.204 × 10²⁴ molecules

---

## Calculator Tips

Most calculators have a scientific notation button (often labeled EE or EXP):

**To enter 3.5 × 10⁸:**
- Type: 3.5 [EE] 8
- Display might show: 3.5 E8 or 3.5⁺⁰⁸

**To enter 2.7 × 10⁻⁵:**
- Type: 2.7 [EE] [-] 5
- Display: 2.7 E-5 or 2.7⁻⁰⁵

**Note:** Don't type the ×10 part — the EE button does that!

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Adding exponents when adding numbers
- **Wrong:** (3 × 10⁴) + (2 × 10⁵) = 5 × 10⁹
- **Right:** Convert to same exponent first!

❌ **Mistake 2:** Forgetting to adjust after multiplication
- **Wrong:** (5 × 10³) × (4 × 10²) = 20 × 10⁵ (not proper form!)
- **Right:** 20 × 10⁵ = 2 × 10⁶

❌ **Mistake 3:** Subtracting exponents when multiplying
- **Wrong:** (2 × 10⁴) × (3 × 10⁵) = 6 × 10⁻¹
- **Right:** 6 × 10⁹ (add exponents!)

❌ **Mistake 4:** Not converting to same exponent before adding
- **Wrong:** (5 × 10⁶) + (3 × 10⁴) = 8 × 10⁶
- **Right:** 5.03 × 10⁶ or 503 × 10⁴

❌ **Mistake 5:** Forgetting negative sign in exponent
- **Wrong:** 10⁴ ÷ 10⁶ = 10² 
- **Right:** 10⁴⁻⁶ = 10⁻²

---

## Step-by-Step Strategy

**For Multiplication:**
1. Multiply the coefficients
2. Add the exponents
3. Adjust to proper form (1 ≤ a < 10)

**For Division:**
1. Divide the coefficients
2. Subtract the exponents
3. Adjust to proper form

**For Addition/Subtraction:**
1. Make exponents the same
2. Add or subtract coefficients
3. Keep the common exponent
4. Adjust to proper form

---

## Quick Reference

**Multiplication:**
(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ

**Division:**
(a × 10ᵐ) ÷ (b × 10ⁿ) = (a ÷ b) × 10ᵐ⁻ⁿ

**Addition/Subtraction:**
First make exponents equal, then:
(a × 10ⁿ) ± (b × 10ⁿ) = (a ± b) × 10ⁿ

**Proper Form:**
1 ≤ coefficient < 10

---

## Summary

Operations with scientific notation follow clear patterns:

**Multiply:** Multiply coefficients, add exponents

**Divide:** Divide coefficients, subtract exponents

**Add/Subtract:** Match exponents first, then add/subtract coefficients

**Always adjust** your answer to proper scientific notation (coefficient between 1 and 10).

These skills are essential for:
- Science calculations (astronomy, chemistry, biology)
- Engineering (very large and very small measurements)
- Technology (data sizes, processing speeds)
- Finance (large-scale economics)

Master these operations and you'll handle numbers of any size with confidence!`
    }
  });
  console.log('✅ Updated: operations-scientific-notation');

  // Topic 3: Slope and Rate of Change
  await prisma.topic.updateMany({
    where: {
      slug: 'slope-rate-of-change'
    },
    data: {
      textContent: `# Slope and Rate of Change

Understanding slope is fundamental to algebra and real-world problem solving! Slope tells us how steep a line is and how quickly something changes. Whether you're calculating speed, analyzing costs, or studying graphs, slope is everywhere!

---

## What Is Slope?

**Slope** measures the steepness and direction of a line.

**Think of it as:**
- How much the line rises or falls
- How fast something is changing
- The "tilt" of the line

**Symbol:** Usually represented by the letter **m**

---

## The Slope Formula

Given two points (x₁, y₁) and (x₂, y₂):

**m = (y₂ - y₁)/(x₂ - x₁)**

Or think: **m = rise/run**

**Rise** = change in y (vertical change)
**Run** = change in x (horizontal change)

**Another way to write it:**
m = Δy/Δx (Δ means "change in")

---

## Calculating Slope from Two Points

**Example 1:** Find the slope of the line through (1, 2) and (4, 8)

**Solution:**
Identify points:
(x₁, y₁) = (1, 2)
(x₂, y₂) = (4, 8)

Apply formula:
m = (8 - 2)/(4 - 1) = 6/3 = 2

**Answer: m = 2**

The line rises 2 units for every 1 unit to the right.

**Example 2:** Find the slope through (-2, 5) and (3, -5)

**Solution:**
(x₁, y₁) = (-2, 5)
(x₂, y₂) = (3, -5)

m = (-5 - 5)/(3 - (-2))
m = -10/(3 + 2)
m = -10/5
m = -2

**Answer: m = -2**

The line falls 2 units for every 1 unit to the right.

**Example 3:** Find the slope through (0, 4) and (5, 4)

**Solution:**
m = (4 - 4)/(5 - 0) = 0/5 = 0

**Answer: m = 0**

This is a horizontal line (no rise).

---

## Types of Slope

**Positive Slope (m > 0)**
- Line goes upward from left to right
- Example: m = 2, m = 1/3, m = 5
- Real-world: Profit increasing, temperature rising

**Negative Slope (m < 0)**
- Line goes downward from left to right  
- Example: m = -1, m = -3/4, m = -5
- Real-world: Price decreasing, altitude descending

**Zero Slope (m = 0)**
- Horizontal line (flat)
- Example: y = 3, y = -2
- Real-world: Constant speed, steady temperature

**Undefined Slope**
- Vertical line (straight up and down)
- Division by zero! (x₂ - x₁ = 0)
- Example: x = 5, x = -3
- Real-world: Time standing still (not realistic)

---

## Slope from a Graph

**Method:** Count the rise and run between two clear points

**Steps:**
1. Pick two points on the line with nice coordinates
2. Start at the first point
3. Count vertical movement (rise) - up is positive, down is negative
4. Count horizontal movement (run) - right is positive, left is negative
5. Calculate: slope = rise/run

**Example:** Line passes through (1, 1) and (3, 5)

From (1, 1) to (3, 5):
- Rise: up 4 units
- Run: right 2 units
- Slope: m = 4/2 = 2

---

## Slope and Rate of Change

**Slope IS the rate of change!**

Rate of change tells us how one quantity changes relative to another.

**Formula:** Rate of Change = (Change in Output)/(Change in Input)

This is exactly the slope formula!

**Real-World Example 1: Speed**

A car travels 150 miles in 3 hours. What's the rate of change (speed)?

Rate = Distance/Time = 150 miles/3 hours = 50 mph

This is slope! If you graphed distance vs. time, slope = 50.

**Real-World Example 2: Cost**

A phone plan costs $20 for 0 GB and $35 for 5 GB. What's the rate of change?

Rate = (Cost change)/(Data change)
Rate = ($35 - $20)/(5 - 0)
Rate = $15/5 GB = $3 per GB

**Real-World Example 3: Growth**

A plant is 8 cm tall on day 2 and 20 cm tall on day 8. How fast is it growing?

Rate = (20 - 8) cm/(8 - 2) days
Rate = 12 cm/6 days = 2 cm/day

---

## Interpreting Slope in Context

**Slope = 4** in a distance-time graph
- Speed is 4 units of distance per unit of time
- "The car travels 4 meters per second"

**Slope = -3** in a savings-spending graph
- Losing $3 per day
- "Spending $3 per day from savings"

**Slope = 1/2** in a recipe
- 1/2 cup of sugar per cup of flour
- "For every 2 cups flour, use 1 cup sugar"

**Slope = 0** in an elevation-time graph
- No change in height
- "Walking on flat ground"

---

## Parallel and Perpendicular Lines

**Parallel Lines:**
- Have the SAME slope
- Never intersect
- Example: m = 2 and m = 2 are parallel

**Perpendicular Lines:**
- Slopes are negative reciprocals
- Form 90° angles
- If one slope is m, the other is -1/m

**Examples:**
- m = 2 and m = -1/2 are perpendicular
- m = 3/4 and m = -4/3 are perpendicular
- m = -5 and m = 1/5 are perpendicular

**Check:** Multiply the slopes. If you get -1, they're perpendicular!
- 2 × (-1/2) = -1 ✓
- (3/4) × (-4/3) = -1 ✓

---

## Finding Slope from an Equation

For equations in **y = mx + b** form (slope-intercept form):
- m is the slope
- b is the y-intercept

**Example 1:** y = 3x + 5
Slope = 3

**Example 2:** y = -2x + 7
Slope = -2

**Example 3:** y = (1/2)x - 4
Slope = 1/2

**Example 4:** Convert 2x + y = 8 to slope-intercept form
Solve for y:
y = -2x + 8
Slope = -2

---

## Steeper vs. Flatter Lines

**Steeper line** = Larger absolute value of slope
- |m| = 5 is steeper than |m| = 2
- |m| = -10 is steeper than |m| = -3

**Flatter line** = Smaller absolute value of slope
- |m| = 1/4 is flatter than |m| = 2
- |m| = -1/2 is flatter than |m| = -5

**Reminder:** Use absolute value to compare steepness!

---

## Real-World Applications

**Construction:** Roof pitch
- Slope of 4/12 means "4 inches of rise per 12 inches of run"
- Steeper roofs shed water faster

**Accessibility:** Wheelchair ramps
- ADA requires slope ≤ 1/12 (1 inch rise per 12 inches run)
- Gentler slopes are easier to navigate

**Economics:** Supply and demand curves
- Positive slope: As price increases, quantity increases
- Negative slope: As price increases, quantity decreases

**Geography:** Mountain grade
- Grade = slope × 100%
- Slope of 0.15 = 15% grade
- Steeper grades are harder to climb

**Finance:** Investment growth
- Slope shows rate of return
- Steeper positive slope = faster growth

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Mixing up x and y
- **Wrong:** m = (x₂ - x₁)/(y₂ - y₁)
- **Right:** m = (y₂ - y₁)/(x₂ - x₁)

❌ **Mistake 2:** Subtracting in wrong order
- **Wrong:** (y₁ - y₂)/(x₂ - x₁) when you meant opposite
- **Right:** Be consistent with order! Both top and bottom should use same order

❌ **Mistake 3:** Thinking vertical line has zero slope
- **Wrong:** Vertical line has m = 0
- **Right:** Vertical line has undefined slope (division by zero)

❌ **Mistake 4:** Confusing negative slope with downhill
- Negative slope DOES go downhill (from left to right)
- This is actually correct! Just remember the direction.

❌ **Mistake 5:** Forgetting to simplify fractions
- **Not simplified:** m = 6/8
- **Simplified:** m = 3/4

---

## Practice Strategy

**Step 1:** Identify the two points clearly
- Label (x₁, y₁) and (x₂, y₂)

**Step 2:** Write the slope formula
- m = (y₂ - y₁)/(x₂ - x₁)

**Step 3:** Substitute carefully
- Watch those negative signs!

**Step 4:** Simplify the fraction

**Step 5:** Interpret in context if needed

---

## Quick Reference

**Slope Formula:**
m = (y₂ - y₁)/(x₂ - x₁) = rise/run

**Types:**
- Positive: upward ↗
- Negative: downward ↘
- Zero: horizontal →
- Undefined: vertical ↕

**Rate of Change:**
Slope = Rate of Change = (Change in y)/(Change in x)

**Parallel Lines:**
Same slope (m₁ = m₂)

**Perpendicular Lines:**
Slopes are negative reciprocals (m₁ × m₂ = -1)

---

## Summary

**Slope** measures steepness and direction of a line:
- Calculate using m = (y₂ - y₁)/(x₂ - x₁)
- Represents rate of change in real situations
- Positive = increasing, Negative = decreasing
- Zero = no change, Undefined = vertical line

**Key applications:**
- Speed (distance over time)
- Cost rates (price per unit)
- Growth rates (change over time)
- Real-world problems (ramps, roofs, roads)

Understanding slope helps you analyze relationships, make predictions, and solve real-world problems in science, business, and everyday life!`
    }
  });
  console.log('✅ Updated: slope-rate-of-change');

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
