import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 10 (3 topics)...\n');

  // Topic 1: Introduction to Exponential Functions (exponential-functions-intro-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'exponential-functions-intro-algebra1' },
    data: {
      textContent: `# Introduction to Exponential Functions

## What is an Exponential Function?

An **exponential function** has the variable in the exponent.

**General form:** f(x) = a · bˣ

where:
- **a** = initial value (when x = 0)
- **b** = base (growth/decay factor, b > 0, b ≠ 1)
- **x** = exponent (the variable)

**Examples:**
- f(x) = 2ˣ
- f(x) = 3 · 5ˣ
- f(x) = 100 · (0.5)ˣ

## Exponential vs. Linear Functions

**Linear function:** y = mx + b
- Constant rate of change (slope)
- Adds same amount each time
- Graph is a straight line

**Exponential function:** y = a · bˣ
- Rate of change increases/decreases
- Multiplies by same factor each time
- Graph is a curve

**Example comparison:**

Linear: 2, 4, 6, 8, 10 (add 2 each time)
Exponential: 2, 4, 8, 16, 32 (multiply by 2 each time)

## Exponential Growth

**Exponential growth** occurs when b > 1.

**Example 1:** f(x) = 2ˣ

| x  | f(x) = 2ˣ |
|----|-----------|
| -2 | 1/4       |
| -1 | 1/2       |
| 0  | 1         |
| 1  | 2         |
| 2  | 4         |
| 3  | 8         |

**Observations:**
- As x increases, y increases rapidly
- Graph curves upward
- Growth accelerates
- Never touches x-axis (y > 0 always)

**Example 2:** f(x) = 3ˣ

Grows even faster than 2ˣ
Larger base = faster growth

**Real-world examples:**
- Population growth
- Compound interest
- Viral spread
- Bacterial growth

## Exponential Decay

**Exponential decay** occurs when 0 < b < 1.

**Example 1:** f(x) = (1/2)ˣ or f(x) = 0.5ˣ

| x  | f(x)  |
|----|-------|
| 0  | 1     |
| 1  | 0.5   |
| 2  | 0.25  |
| 3  | 0.125 |
| 4  | 0.0625|

**Observations:**
- As x increases, y decreases
- Approaches 0 but never reaches it
- Graph curves downward
- Decay slows over time

**Example 2:** f(x) = (1/3)ˣ

Decays faster than (1/2)ˣ
Smaller base = faster decay

**Real-world examples:**
- Radioactive decay
- Depreciation
- Medicine leaving body
- Cooling of objects

## The Number e

**e** is a special irrational number ≈ 2.71828...

**Function:** f(x) = eˣ

This is the **natural exponential function**.

**Why important?**
- Appears in calculus
- Models continuous growth
- Used in finance, science
- Natural growth rate

**Properties:**
- e⁰ = 1
- e¹ = e ≈ 2.718
- e grows faster than 2ˣ but slower than 3ˣ

## Evaluating Exponential Functions

**Example 1:** If f(x) = 5 · 2ˣ, find f(3)

f(3) = 5 · 2³
f(3) = 5 · 8
f(3) = 40

**Example 2:** If g(x) = 3ˣ, find g(-2)

g(-2) = 3⁻²
g(-2) = 1/3²
g(-2) = 1/9

**Example 3:** If h(x) = 100 · (0.5)ˣ, find h(4)

h(4) = 100 · (0.5)⁴
h(4) = 100 · 0.0625
h(4) = 6.25

## Key Properties of Exponential Functions

**For f(x) = a · bˣ:**

1. **Domain:** All real numbers (-∞, ∞)
2. **Range:** (0, ∞) if a > 0
3. **Y-intercept:** (0, a)
4. **Horizontal asymptote:** y = 0
5. **Always positive** (if a > 0)
6. **One-to-one:** passes horizontal line test

## Horizontal Asymptotes

An **asymptote** is a line the graph approaches but never touches.

**For y = a · bˣ:**
Horizontal asymptote is y = 0 (x-axis)

**Meaning:**
- Growth: As x → -∞, y → 0
- Decay: As x → ∞, y → 0

The function gets infinitely close to 0 but never equals 0.

## Graphing Exponential Functions

**Steps to graph y = a · bˣ:**

1. Find y-intercept: (0, a)
2. Determine if growth (b > 1) or decay (0 < b < 1)
3. Calculate additional points
4. Draw horizontal asymptote y = 0
5. Sketch smooth curve through points

**Example:** Graph y = 2ˣ

Points: (-2, 0.25), (-1, 0.5), (0, 1), (1, 2), (2, 4)
Asymptote: y = 0
Curve: Rising from left, through (0,1), accelerating upward

## Transformations

**Vertical shifts:** y = bˣ + k
- Shifts graph up/down k units
- New asymptote: y = k

**Example:** y = 2ˣ + 3
- Shifts y = 2ˣ up 3 units
- Asymptote: y = 3
- Y-intercept: (0, 4)

**Horizontal shifts:** y = b⁽ˣ⁻ʰ⁾
- Shifts graph right/left h units

**Example:** y = 2⁽ˣ⁻³⁾
- Shifts y = 2ˣ right 3 units

**Reflections:** y = -bˣ
- Reflects over x-axis

**Vertical stretch/compression:** y = a · bˣ
- a > 1: vertical stretch
- 0 < a < 1: vertical compression

## Growth Factor vs. Growth Rate

**Growth factor (b):** What you multiply by

**Growth rate (r):** Percent increase/decrease

**Relationship:** b = 1 + r

**Example 1:** Population grows 5% per year
r = 0.05
b = 1 + 0.05 = 1.05
Function: P(t) = P₀ · (1.05)ᵗ

**Example 2:** Value decreases 20% per year
r = -0.20
b = 1 + (-0.20) = 0.80
Function: V(t) = V₀ · (0.80)ᵗ

## Compound Interest

**Formula:** A = P(1 + r/n)ⁿᵗ

where:
- A = final amount
- P = principal (initial amount)
- r = annual interest rate (decimal)
- n = times compounded per year
- t = time in years

**Example:** $1000 at 5% annual interest, compounded quarterly, for 3 years

P = 1000, r = 0.05, n = 4, t = 3

A = 1000(1 + 0.05/4)⁴ˣ³
A = 1000(1.0125)¹²
A ≈ 1000(1.1608)
A ≈ $1160.75

## Continuous Compounding

**Formula:** A = Peʳᵗ

Used when interest compounds continuously.

**Example:** $1000 at 5% continuously compounded for 3 years

A = 1000e⁰·⁰⁵ˣ³
A = 1000e⁰·¹⁵
A ≈ 1000(1.1618)
A ≈ $1161.83

Slightly more than quarterly compounding!

## Population Growth

**Formula:** P(t) = P₀ · bᵗ

where:
- P(t) = population at time t
- P₀ = initial population
- b = growth factor
- t = time

**Example:** City has 50,000 people, growing 3% annually

P₀ = 50,000
b = 1.03

P(t) = 50,000 · (1.03)ᵗ

After 10 years:
P(10) = 50,000 · (1.03)¹⁰
P(10) ≈ 67,196 people

## Radioactive Decay

**Half-life:** Time for half to decay

**Formula:** A(t) = A₀ · (1/2)ᵗ/ʰ

where:
- A(t) = amount at time t
- A₀ = initial amount
- h = half-life
- t = time

**Example:** 100g substance, half-life 5 years

A(t) = 100 · (1/2)ᵗ/⁵

After 15 years:
A(15) = 100 · (1/2)¹⁵/⁵
A(15) = 100 · (1/2)³
A(15) = 100 · 1/8
A(15) = 12.5g

## Comparing Exponential and Linear

**Which grows faster in long run?**

Exponential ALWAYS overtakes linear eventually!

**Example:**
Linear: f(x) = 100x (starts faster)
Exponential: g(x) = 2ˣ (starts slower)

At x = 10:
f(10) = 1000
g(10) = 1024

At x = 20:
f(20) = 2000
g(20) = 1,048,576 (exponential dominates!)

## Identifying Exponential Functions

**From table:** Check if y-values have constant ratio

**Example 1:**
x: 0, 1, 2, 3
y: 5, 10, 20, 40

Ratios: 10/5 = 2, 20/10 = 2, 40/20 = 2
Constant ratio = 2, so exponential!
Function: y = 5 · 2ˣ

**Example 2:**
x: 0, 1, 2, 3
y: 3, 6, 9, 12

Differences: 3, 3, 3 (constant)
Linear, not exponential!

## Writing Exponential Functions

**Given two points:**

**Method:** Use y = a · bˣ

**Example:** Points (0, 5) and (2, 45)

From (0, 5): a = 5
From (2, 45): 45 = 5 · b²
9 = b²
b = 3

Function: y = 5 · 3ˣ

**Check:** When x = 2: y = 5 · 3² = 45 ✓

## Exponential Equations

Solve by making bases equal.

**Example 1:** 2ˣ = 8

Rewrite 8 as power of 2:
2ˣ = 2³
x = 3

**Example 2:** 3²ˣ = 27

27 = 3³
3²ˣ = 3³
2x = 3
x = 3/2

**Example 3:** 5ˣ⁺¹ = 125

125 = 5³
5ˣ⁺¹ = 5³
x + 1 = 3
x = 2

## Applications: Depreciation

**Formula:** V(t) = V₀ · (1 - r)ᵗ

where:
- V(t) = value at time t
- V₀ = initial value
- r = depreciation rate
- t = time

**Example:** Car costs $30,000, depreciates 15% annually

V(t) = 30,000 · (1 - 0.15)ᵗ
V(t) = 30,000 · (0.85)ᵗ

After 5 years:
V(5) = 30,000 · (0.85)⁵
V(5) ≈ $13,308

## Applications: Medicine

**Example:** Drug dose 500mg, body eliminates 25% per hour

A(t) = 500 · (0.75)ᵗ

After 4 hours:
A(4) = 500 · (0.75)⁴
A(4) ≈ 158mg remaining

## Common Mistakes to Avoid

1. **Confusing exponential with power functions**
   - Exponential: y = 2ˣ (x is exponent)
   - Power: y = x² (x is base)

2. **Thinking exponential can be negative**
   - bˣ > 0 for all x (if b > 0)

3. **Forgetting asymptote at y = 0**
   - Graph approaches but never touches x-axis

4. **Adding instead of multiplying**
   - Exponential multiplies by constant factor
   - Linear adds constant amount

5. **Wrong base for growth/decay**
   - Growth: b > 1
   - Decay: 0 < b < 1

6. **Confusing growth rate with growth factor**
   - If grows 20%, factor is 1.20, not 0.20

## Exponential vs. Quadratic

**Quadratic:** y = x²
- Symmetric
- Has maximum or minimum
- Can be negative

**Exponential:** y = 2ˣ
- Not symmetric
- Always increasing or decreasing
- Always positive

Eventually, exponential grows faster than any polynomial!

## Quick Reference

**General form:** f(x) = a · bˣ

**Growth:** b > 1 (curve rises)
**Decay:** 0 < b < 1 (curve falls)

**Domain:** All real numbers
**Range:** (0, ∞) if a > 0

**Y-intercept:** (0, a)
**Asymptote:** y = 0

**Growth factor:** b = 1 + r
**Decay factor:** b = 1 - r

## Practice Strategy

**Level 1:** Evaluate simple exponentials
- 2³, 5⁻², (1/2)⁴

**Level 2:** Graph basic functions
- y = 2ˣ, y = (1/2)ˣ

**Level 3:** Identify from tables
- Is it exponential? Find b

**Level 4:** Write functions from points
**Level 5:** Real-world applications

## Tips for Success

- Remember: variable is in the EXPONENT
- Growth: b > 1, Decay: 0 < b < 1
- Y-intercept always at (0, a)
- Graph never touches x-axis
- Exponential eventually beats polynomial
- Check ratios to identify exponential
- Practice with calculator for decimal bases
- Understand real-world contexts
- Remember growth factor = 1 + rate
- Sketch graphs to visualize behavior`
    }
  });

  console.log('✅ Updated: exponential-functions-intro-algebra1');

  // Topic 2: Piecewise Functions (piecewise-functions-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'piecewise-functions-algebra1' },
    data: {
      textContent: `# Piecewise Functions

## What is a Piecewise Function?

A **piecewise function** is defined by different formulas for different parts of the domain.

Think of it as a function with multiple "pieces" or "rules."

**General notation:**

f(x) = expression1, if condition1
f(x) = expression2, if condition2
f(x) = expression3, if condition3

Each piece applies to a specific interval or condition.

## Simple Example

f(x) = x + 2, if x < 0
f(x) = 2x, if x ≥ 0

**Meaning:**
- When x is negative: use f(x) = x + 2
- When x is zero or positive: use f(x) = 2x

**Evaluating:**
f(-3) = -3 + 2 = -1 (use first piece, since -3 < 0)
f(5) = 2(5) = 10 (use second piece, since 5 ≥ 0)
f(0) = 2(0) = 0 (use second piece, since 0 ≥ 0)

## Evaluating Piecewise Functions

**Process:**
1. Identify which piece applies (check conditions)
2. Use that formula
3. Substitute and evaluate

**Example 1:**

f(x) = x², if x ≤ 1
f(x) = 2x + 1, if x > 1

Find f(0), f(1), f(3)

**f(0):** 0 ≤ 1, use first piece
f(0) = 0² = 0

**f(1):** 1 ≤ 1, use first piece
f(1) = 1² = 1

**f(3):** 3 > 1, use second piece
f(3) = 2(3) + 1 = 7

**Example 2:**

g(x) = -x, if x < -2
g(x) = x² - 1, if -2 ≤ x ≤ 2
g(x) = 3, if x > 2

Find g(-5), g(0), g(4)

**g(-5):** -5 < -2, use first piece
g(-5) = -(-5) = 5

**g(0):** -2 ≤ 0 ≤ 2, use second piece
g(0) = 0² - 1 = -1

**g(4):** 4 > 2, use third piece
g(4) = 3

## Graphing Piecewise Functions

**Steps:**
1. Graph each piece on its interval
2. Use open circle (○) for excluded endpoints
3. Use closed circle (●) for included endpoints
4. Check for continuity at boundaries

**Example 1:**

f(x) = x + 1, if x < 2
f(x) = 3, if x ≥ 2

**First piece:** Line y = x + 1 for x < 2
- At x = 2: y = 3 (but use open circle, not included)
- Draw line left of x = 2

**Second piece:** Horizontal line y = 3 for x ≥ 2
- At x = 2: y = 3 (closed circle, included)
- Draw horizontal line from x = 2 rightward

**At x = 2:** Open circle at (2, 3) from first piece, closed circle at (2, 3) from second piece
Result: Point at (2, 3), continuous!

## Continuity vs. Discontinuity

**Continuous:** No breaks or jumps

**Discontinuous:** Gap or jump in graph

**Example of discontinuity:**

f(x) = x, if x < 1
f(x) = x + 2, if x ≥ 1

At x = 1:
- From left: approaches 1
- From right: starts at 3
- Jump discontinuity!

## Absolute Value as Piecewise

The absolute value function can be written piecewise:

|x| = x, if x ≥ 0
|x| = -x, if x < 0

**Why?**
- When x positive: |x| = x
- When x negative: |x| removes the negative sign

**Example:** |x - 3|

|x - 3| = x - 3, if x ≥ 3
|x - 3| = -(x - 3) = -x + 3, if x < 3

## Writing Piecewise Functions

**From graph:**
1. Identify different "pieces" or sections
2. Find formula for each piece
3. Determine domain intervals
4. Check boundary points

**Example:** Graph shows:
- Line through origin with slope 2 for x ≤ 1
- Horizontal line at y = 2 for x > 1

Function:
f(x) = 2x, if x ≤ 1
f(x) = 2, if x > 1

## Real-World Example: Parking Fees

Parking costs:
- First hour: $5
- Each additional hour: $3

**Function:**

C(h) = 5, if 0 < h ≤ 1
C(h) = 5 + 3(h - 1), if h > 1

**Simplified second piece:**
C(h) = 3h + 2, if h > 1

**Examples:**
C(0.5) = $5 (first hour)
C(3) = 3(3) + 2 = $11

## Real-World Example: Tax Brackets

Income tax:
- $0 - $10,000: 10%
- $10,001 - $50,000: 15%
- Over $50,000: 20%

**Function for tax owed:**

T(x) = 0.10x, if 0 ≤ x ≤ 10,000
T(x) = 1,000 + 0.15(x - 10,000), if 10,000 < x ≤ 50,000
T(x) = 7,000 + 0.20(x - 50,000), if x > 50,000

## Step Functions

A **step function** is constant on each interval (looks like stairs).

**Example: Greatest Integer Function (Floor)**

f(x) = floor(x) = greatest integer ≤ x

floor(2.3) = 2
floor(5.9) = 5
floor(-1.5) = -2

**Graph:** Horizontal segments (steps)

## Real-World Example: Postage

Mailing cost:
- Up to 1 oz: $0.55
- 1-2 oz: $0.70
- 2-3 oz: $0.85
- etc.

**Piecewise function:**

C(w) = 0.55, if 0 < w ≤ 1
C(w) = 0.70, if 1 < w ≤ 2
C(w) = 0.85, if 2 < w ≤ 3

**Step function!**

## Domain and Range

**Domain:** Usually all real numbers (unless specified)
Check each piece's domain

**Range:** Union of all outputs from all pieces

**Example:**

f(x) = x², if x < 0
f(x) = x, if x ≥ 0

**Domain:** All real numbers (-∞, ∞)

**Range:**
- First piece (x < 0): x² gives (0, ∞)
- Second piece (x ≥ 0): x gives [0, ∞)
- Combined: [0, ∞)

## Finding Function Values

**Example:**

h(x) = x + 5, if x ≤ -2
h(x) = x², if -2 < x < 3
h(x) = -x, if x ≥ 3

Find h(-3) + h(0) + h(5)

**h(-3):** -3 ≤ -2, use first piece
h(-3) = -3 + 5 = 2

**h(0):** -2 < 0 < 3, use second piece
h(0) = 0² = 0

**h(5):** 5 ≥ 3, use third piece
h(5) = -5

**Sum:** 2 + 0 + (-5) = -3

## Solving Piecewise Equations

**Example:** Solve f(x) = 3 where

f(x) = 2x, if x < 1
f(x) = x + 1, if x ≥ 1

**Try first piece:** 2x = 3
x = 1.5
But 1.5 ≮ 1, so this doesn't work in first piece!

**Try second piece:** x + 1 = 3
x = 2
Check: 2 ≥ 1 ✓
And f(2) = 2 + 1 = 3 ✓

**Solution:** x = 2

## Creating Piecewise Functions

**From description:**

"Function equals x² when x is negative, and equals 2x when x is non-negative"

f(x) = x², if x < 0
f(x) = 2x, if x ≥ 0

**From table with pattern changes:**

| x  | f(x) |
|----|------|
| -2 | 4    |
| -1 | 2    |
| 0  | 0    |
| 1  | 1    |
| 2  | 4    |

Pattern: For x ≤ 0: f(x) = -2x
Pattern: For x > 0: f(x) = x²

## Multiple Pieces

Functions can have many pieces!

**Example:**

g(x) = -3, if x < -5
g(x) = x + 2, if -5 ≤ x < 0
g(x) = x², if 0 ≤ x < 3
g(x) = 10, if x ≥ 3

Four different pieces for four intervals.

## Continuity at Boundaries

Check if left and right pieces connect.

**Example:**

f(x) = x + 3, if x < 2
f(x) = 2x - 1, if x ≥ 2

At x = 2:
- Left piece approaches: 2 + 3 = 5
- Right piece starts at: 2(2) - 1 = 3

**Discontinuous!** Jump from 5 to 3.

**Making continuous:**
Choose second piece as 2x + 1 instead
Then: 2(2) + 1 = 5 (matches!)

## Notation Variations

**Bracket notation:**

f(x) = x + 1, if x < 0
       2x,    if x ≥ 0

**With curly brace:**

       { x + 1,  if x < 0
f(x) = {
       { 2x,     if x ≥ 0

**All mean the same thing!**

## Applications: Utility Bills

Electric bill:
- First 500 kWh: $0.10 per kWh
- Over 500 kWh: $0.15 per kWh

**Function:**

C(k) = 0.10k, if 0 ≤ k ≤ 500
C(k) = 50 + 0.15(k - 500), if k > 500

**Example:** 750 kWh used
C(750) = 50 + 0.15(250) = 50 + 37.50 = $87.50

## Applications: Shipping Costs

Shipping:
- Under 5 lbs: $8
- 5-10 lbs: $12
- Over 10 lbs: $12 + $2 per additional lb

**Function:**

S(w) = 8, if 0 < w < 5
S(w) = 12, if 5 ≤ w ≤ 10
S(w) = 12 + 2(w - 10), if w > 10

## Common Mistakes to Avoid

1. **Using wrong piece**
   Check condition carefully!

2. **Incorrect inequality signs**
   Pay attention to ≤ vs. <

3. **Forgetting to check if x satisfies condition**
   Solution must be in correct interval

4. **Not showing open/closed circles on graph**
   Critical for boundary points!

5. **Assuming continuity**
   Check if pieces connect at boundaries

6. **Mixing up domain intervals**
   Make sure intervals cover all values (no gaps or overlaps)

## Quick Reference

**Definition:**
Different formulas for different intervals

**Evaluating:**
1. Check which piece applies
2. Use that formula
3. Calculate

**Graphing:**
- Graph each piece on its interval
- Open circle: not included
- Closed circle: included

**Continuity:**
Check if pieces connect at boundaries

## Practice Strategy

**Level 1:** Evaluate given piecewise functions

**Level 2:** Graph simple two-piece functions

**Level 3:** Write piecewise from descriptions

**Level 4:** Solve piecewise equations

**Level 5:** Real-world applications

## Tips for Success

- Always check which piece to use first
- Draw number line to visualize intervals
- Check boundary points carefully
- Use open/closed circles correctly when graphing
- Test continuity at interval boundaries
- Organize work clearly for each piece
- Practice with absolute value as piecewise
- Understand step functions
- Connect to real-world situations (taxes, fees)
- Remember: one x-value gives only one y-value`
    }
  });

  console.log('✅ Updated: piecewise-functions-algebra1');

  // Topic 3: Systems of Inequalities (systems-inequalities-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'systems-inequalities-algebra1' },
    data: {
      textContent: `# Systems of Inequalities

## What is a System of Inequalities?

A **system of inequalities** is two or more inequalities considered together.

**Example:**
y > 2x + 1
y ≤ -x + 5

We need to find all points (x, y) that satisfy BOTH inequalities simultaneously.

## Solution to a System

A **solution** is an ordered pair (x, y) that makes ALL inequalities true.

**Example:** Is (1, 4) a solution?

System:
y > 2x + 1
y ≤ -x + 5

**Check first inequality:** 4 > 2(1) + 1 → 4 > 3 ✓
**Check second inequality:** 4 ≤ -(1) + 5 → 4 ≤ 4 ✓

Both true, so (1, 4) IS a solution!

## Graphing Linear Inequalities (Review)

**Steps to graph one inequality:**
1. Graph the boundary line
   - Use solid line for ≤ or ≥
   - Use dashed line for < or >
2. Choose test point (usually (0, 0) if not on line)
3. Shade appropriate region
   - If test point works: shade that side
   - If test point fails: shade other side

**Example:** y ≥ x + 2

1. Graph y = x + 2 (solid line)
2. Test (0, 0): 0 ≥ 0 + 2 → 0 ≥ 2 ✗
3. Shade above the line (opposite side from origin)

## Graphing Systems of Inequalities

**Steps:**
1. Graph each inequality on same coordinate plane
2. Shade each region
3. The **solution region** is where shaded areas OVERLAP
4. The overlapping region satisfies all inequalities

**Helpful:** Use different shading patterns or colors for each inequality

## Example 1: Two Inequalities

Graph the system:
y < x + 3
y ≥ -2x + 1

**First inequality: y < x + 3**
- Dashed line y = x + 3 (slope 1, y-int 3)
- Test (0, 0): 0 < 3 ✓
- Shade below the line

**Second inequality: y ≥ -2x + 1**
- Solid line y = -2x + 1 (slope -2, y-int 1)
- Test (0, 0): 0 ≥ 1 ✗
- Shade above the line

**Solution:** Region where both shadings overlap

## Example 2: Three Inequalities

Graph the system:
x ≥ 0
y ≥ 0
y ≤ -x + 4

**First inequality: x ≥ 0**
- Vertical line x = 0 (y-axis)
- Shade right side (positive x)

**Second inequality: y ≥ 0**
- Horizontal line y = 0 (x-axis)
- Shade above (positive y)

**Third inequality: y ≤ -x + 4**
- Line y = -x + 4
- Shade below

**Solution:** Triangular region in first quadrant bounded by the three lines

## Vertices of Solution Region

The **vertices** (corner points) are where boundary lines intersect.

**Why important?**
- Define the boundaries of solution region
- Used in optimization problems (linear programming)
- Easy to test as solutions

**Example:** Find vertices of:
y ≥ 0
x ≥ 0
y ≤ -2x + 6

**Intersections:**
- x-axis and y-axis: (0, 0)
- y-axis and y = -2x + 6: Set x = 0 → (0, 6)
- x-axis and y = -2x + 6: Set y = 0 → 0 = -2x + 6 → x = 3 → (3, 0)

**Vertices:** (0, 0), (0, 6), (3, 0)

## Bounded vs. Unbounded Regions

**Bounded region:** Enclosed area (like a polygon)
- Has finite area
- All vertices can be found

**Unbounded region:** Extends infinitely
- Infinite area
- Goes on forever in some direction

**Example of bounded:**
x ≥ 0, y ≥ 0, x + y ≤ 5
Forms a triangle

**Example of unbounded:**
y > x, y < x + 3
Forms infinite strip

## Testing Solutions

To check if a point is in solution region:
1. Substitute into each inequality
2. All must be true

**Example:** System:
y ≤ 2x + 4
y > -x + 1

**Test (2, 5):**
5 ≤ 2(2) + 4 → 5 ≤ 8 ✓
5 > -(2) + 1 → 5 > -1 ✓
Solution!

**Test (0, 0):**
0 ≤ 2(0) + 4 → 0 ≤ 4 ✓
0 > -(0) + 1 → 0 > 1 ✗
Not a solution!

## Horizontal and Vertical Boundaries

**Horizontal lines:**
- y < k (below y = k)
- y > k (above y = k)

**Vertical lines:**
- x < k (left of x = k)
- x > k (right of x = k)

**Example:** System:
x > 1
y < 3

**Solution:** Rectangular region to the right of x = 1 and below y = 3

## Systems with Parallel Lines

Parallel lines never intersect.

**Example:**
y > 2x + 1
y < 2x - 3

Lines y = 2x + 1 and y = 2x - 3 are parallel (same slope).

**Result:** No overlapping region → No solution!

## Systems Creating Triangular Regions

**Example:**
y ≥ 0
y ≤ x
y ≤ -x + 6

**Graph results in triangle with vertices:**
- (0, 0): intersection of y = 0 and y = x
- (0, 6): intersection of y = 0 and y = -x + 6  [CORRECTION: should be where x-axis and y = -x + 6 meet]
- (3, 3): intersection of y = x and y = -x + 6

Actually, let me recalculate:
- y = 0 and y = x: (0, 0)
- y = x and y = -x + 6: x = -x + 6 → 2x = 6 → x = 3, y = 3 → (3, 3)
- y = 0 and y = -x + 6: 0 = -x + 6 → x = 6 → (6, 0)

**Vertices:** (0, 0), (3, 3), (6, 0)

## Real-World Application: Budgeting

You have $100 to spend on pizza (p) and soda (s).
- Pizza costs $10 each
- Soda costs $2 each
- Want at least 2 sodas
- Can't buy negative amounts

**System:**
10p + 2s ≤ 100 (budget constraint)
s ≥ 2 (at least 2 sodas)
p ≥ 0 (non-negative)
s ≥ 0 (non-negative, but already have s ≥ 2)

**Simplified:**
10p + 2s ≤ 100
s ≥ 2
p ≥ 0

**Graph shows feasible combinations of pizza and soda.**

## Real-World Application: Manufacturing

Factory makes chairs (c) and tables (t).
- Chairs take 2 hours each
- Tables take 4 hours each
- Have 40 hours available
- Need to make at least 5 chairs

**System:**
2c + 4t ≤ 40 (time constraint)
c ≥ 5 (minimum chairs)
c ≥ 0, t ≥ 0 (non-negative)

**Solution region shows possible production combinations.**

## Optimization (Preview)

Often we want to find the "best" solution.

**Example:** Maximize profit given constraints

Profit: P = 3x + 5y

Subject to:
x + 2y ≤ 10
x ≥ 0
y ≥ 0

**Method:**
1. Graph system to find solution region
2. Identify vertices
3. Test each vertex in profit formula
4. Maximum occurs at a vertex!

This is called **linear programming**.

## Absolute Value Inequalities as Systems

|x| < 3 can be written as:
x < 3 AND x > -3

**As system:**
x < 3
x > -3

**Solution:** -3 < x < 3 (interval on number line)

**On coordinate plane:**
Could represent vertical strip between x = -3 and x = 3

## Finding Number of Solutions

**Infinite solutions:** Overlapping region has area (typical case)

**No solution:** No overlapping region (parallel lines, contradictory)

**Example of no solution:**
y > x + 2
y < x - 1

Lines y = x + 2 and y = x - 1 are parallel.
Region above first and below second don't overlap.

## Writing Systems from Graphs

**Process:**
1. Identify each boundary line
2. Determine if solid or dashed
3. Determine inequality direction (which side shaded)
4. Write all inequalities

**Example:** Graph shows:
- Solid line through (0, 0) and (1, 1), shaded above
- Dashed line through (0, 4) and (2, 0), shaded below

**First line:** y = x (slope 1), solid, shaded above
Inequality: y ≥ x

**Second line:** y = -2x + 4, dashed, shaded below  
Inequality: y < -2x + 4

**System:**
y ≥ x
y < -2x + 4

## Common Mistakes to Avoid

1. **Wrong line type**
   Solid for ≤/≥, dashed for </> 

2. **Shading wrong region**
   Always test a point!

3. **Forgetting overlapping region**
   Solution is where ALL shadings overlap

4. **Not checking boundary**
   Solid line = included, dashed = not included

5. **Incorrect vertices**
   Find intersections algebraically, not just visually

6. **Forgetting non-negative constraints**
   Many real-world problems require x ≥ 0, y ≥ 0

## Compound Inequalities Connection

**"And" system:**
y > x + 1 AND y < 2x - 3

This IS a system of inequalities!
Solution is intersection (overlap).

**"Or" problems** are different (union, not intersection).

## Quick Reference

**Graphing system:**
1. Graph each inequality
2. Find overlapping region
3. That's the solution!

**Solution region:**
- Overlap of all shaded areas
- Can be bounded or unbounded
- Edges solid or dashed depending on inequality

**Vertices:**
- Find by solving pairs of boundary equations
- Important for optimization

**Testing point:**
Substitute into ALL inequalities
All must be true

## Practice Strategy

**Level 1:** Graph systems of two inequalities

**Level 2:** Systems with horizontal/vertical lines

**Level 3:** Three or more inequalities

**Level 4:** Find vertices, bounded regions

**Level 5:** Real-world applications, optimization

## Tips for Success

- Use different shading patterns for clarity
- Always test a point to check shading direction
- Label boundary lines with equations
- Mark solid vs. dashed lines clearly
- Find vertices algebraically for accuracy
- Check if region is bounded or unbounded
- Practice with real-world constraints
- Remember: solution satisfies ALL inequalities
- Understand connection to linear programming
- Use graph paper for accuracy`
    }
  });

  console.log('✅ Updated: systems-inequalities-algebra1');

  console.log('\n✨ Successfully created content for 3 topics!');
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
