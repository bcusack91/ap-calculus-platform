import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 7 (3 topics)...\n');

  // Topic 1: Domain and Range (domain-range-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'domain-range-algebra1' },
    data: {
      textContent: `# Domain and Range

## What are Domain and Range?

**Domain:** The set of all possible INPUT values (x-values) for a function.

**Range:** The set of all possible OUTPUT values (y-values or f(x)-values) for a function.

Think of it this way:
- **Domain** = What you can PUT INTO the function
- **Range** = What you can GET OUT OF the function

## Why Domain and Range Matter

Not all inputs make sense for every function:
- Can't divide by zero
- Can't take square root of negative (in real numbers)
- Real-world constraints (can't have negative time)

Understanding domain and range helps you:
- Know when a function is defined
- Understand function behavior
- Solve real-world problems correctly
- Avoid mathematical errors

## Interval Notation

We use **interval notation** to write domain and range efficiently.

**Symbols:**
- **(a, b)** means all numbers between a and b, NOT including a or b (open interval)
- **[a, b]** means all numbers between a and b, INCLUDING both a and b (closed interval)
- **(a, b]** means between a and b, NOT including a but INCLUDING b
- **[a, b)** means between a and b, INCLUDING a but NOT including b
- **∞** (infinity) always uses parentheses: (a, ∞) or (-∞, b)

**Examples:**
- (2, 5) means 2 < x < 5
- [2, 5] means 2 ≤ x ≤ 5
- (-∞, 3] means x ≤ 3
- [4, ∞) means x ≥ 4
- (-∞, ∞) means all real numbers

## Set Notation

Another way to express domain and range:

**{x | condition}** reads as "the set of all x such that condition"

**Examples:**
- {x | x > 0} means "all x greater than 0"
- {x | x ≠ 2} means "all x except 2"
- {x | x ∈ ℝ} means "all real numbers"

## Domain of Linear Functions

**Linear functions:** f(x) = mx + b

**Domain:** ALL real numbers
Written as: (-∞, ∞) or {x | x ∈ ℝ}

**Why?** You can plug any number into a linear function.

**Examples:**
- f(x) = 2x + 3, Domain: (-∞, ∞)
- g(x) = -x + 7, Domain: (-∞, ∞)
- h(x) = 5, Domain: (-∞, ∞)

## Range of Linear Functions

**Non-constant linear:** Range is ALL real numbers (-∞, ∞)

**Constant function:** f(x) = c
Range is just {c} (a single value)

**Examples:**
- f(x) = 2x + 3, Range: (-∞, ∞)
- g(x) = 5, Range: {5} or [5, 5]

## Domain of Quadratic Functions

**Quadratic functions:** f(x) = ax² + bx + c

**Domain:** ALL real numbers (-∞, ∞)

**Why?** You can square any real number.

**Examples:**
- f(x) = x², Domain: (-∞, ∞)
- g(x) = -2x² + 3x - 1, Domain: (-∞, ∞)

## Range of Quadratic Functions

Range depends on the vertex and direction of opening.

**If parabola opens UP (a > 0):**
Range: [k, ∞) where k is the y-coordinate of the vertex (minimum value)

**If parabola opens DOWN (a < 0):**
Range: (-∞, k] where k is the y-coordinate of the vertex (maximum value)

**Example 1:** f(x) = x² - 4x + 3

Find vertex: x = -(-4)/(2·1) = 2
f(2) = 4 - 8 + 3 = -1
Vertex: (2, -1)

Opens up (a = 1 > 0)
Range: [-1, ∞)

**Example 2:** g(x) = -x² + 6x - 5

Vertex: x = -6/(2·(-1)) = 3
g(3) = -9 + 18 - 5 = 4
Vertex: (3, 4)

Opens down (a = -1 < 0)
Range: (-∞, 4]

## Domain Restrictions: Division

**Cannot divide by zero!**

When a function has a variable in the denominator, exclude values that make the denominator zero.

**Example 1:** f(x) = 1/x

Denominator = x
Set equal to zero: x = 0
Domain: All real numbers EXCEPT 0
Written as: (-∞, 0) ∪ (0, ∞) or {x | x ≠ 0}

**Example 2:** g(x) = 3/(x - 5)

Denominator = x - 5
Set equal to zero: x - 5 = 0, so x = 5
Domain: All real numbers EXCEPT 5
Written as: (-∞, 5) ∪ (5, ∞) or {x | x ≠ 5}

**Example 3:** h(x) = (2x + 1)/(x² - 4)

Denominator = x² - 4
Set equal to zero: x² - 4 = 0
x² = 4
x = ±2

Domain: All real numbers EXCEPT 2 and -2
Written as: (-∞, -2) ∪ (-2, 2) ∪ (2, ∞) or {x | x ≠ ±2}

## Domain Restrictions: Square Roots

**Cannot take square root of negative number** (in real numbers).

When a function has a square root, the expression inside must be ≥ 0.

**Example 1:** f(x) = √x

Inside square root: x
Requirement: x ≥ 0
Domain: [0, ∞)

**Example 2:** g(x) = √(x - 3)

Inside: x - 3
Requirement: x - 3 ≥ 0
Solve: x ≥ 3
Domain: [3, ∞)

**Example 3:** h(x) = √(5 - x)

Inside: 5 - x
Requirement: 5 - x ≥ 0
Solve: -x ≥ -5
Multiply by -1 (flip inequality): x ≤ 5
Domain: (-∞, 5]

**Example 4:** f(x) = √(x² - 9)

Inside: x² - 9
Requirement: x² - 9 ≥ 0
x² ≥ 9
|x| ≥ 3
This means x ≤ -3 or x ≥ 3
Domain: (-∞, -3] ∪ [3, ∞)

## Combined Restrictions

Sometimes functions have BOTH division and square roots.

**Example:** f(x) = √x / (x - 4)

**Square root restriction:** x ≥ 0
**Division restriction:** x ≠ 4

**Combined domain:** [0, 4) ∪ (4, ∞)

We need x ≥ 0 AND x ≠ 4.

## Finding Range from Graphs

**From a graph:**
1. Look at the y-axis
2. Identify the lowest and highest y-values the graph reaches
3. Write the range

**Example:** If a graph goes from y = -2 up to y = 5 (including both)
Range: [-2, 5]

**Example:** If a parabola opening up has vertex at y = 3
Range: [3, ∞)

**Example:** If a parabola opening down has vertex at y = -1
Range: (-∞, -1]

## Finding Domain from Graphs

**From a graph:**
1. Look at the x-axis
2. Identify all x-values that have corresponding points on the graph
3. Write the domain

**Example:** If a graph extends forever left and right
Domain: (-∞, ∞)

**Example:** If a graph starts at x = 2 and extends right
Domain: [2, ∞)

**Example:** If there's a gap (like at x = 3)
Domain might be: (-∞, 3) ∪ (3, ∞)

## Absolute Value Functions

**f(x) = |x|**
Domain: (-∞, ∞)
Range: [0, ∞) (absolute value is never negative)

**f(x) = |x - h| + k**
Domain: (-∞, ∞)
Range: [k, ∞) if upright V, (-∞, k] if upside-down

**Example:** f(x) = |x - 2| + 3
Domain: (-∞, ∞)
Range: [3, ∞)
The vertex of the V is at (2, 3).

## Piecewise Functions

Domain is typically all real numbers (unless specified).
Range depends on the individual pieces.

**Example:**
f(x) = x + 1 if x < 0
f(x) = x² if x ≥ 0

Domain: (-∞, ∞)

For range, consider both pieces:
- When x < 0: f(x) = x + 1 gives values from (-∞, 1)
- When x ≥ 0: f(x) = x² gives values from [0, ∞)

Range: (-∞, 1) ∪ [0, ∞) = (-∞, ∞)

## Real-World Domain and Range

Context matters! Physical constraints restrict domain and range.

**Example 1: Area of square**
A(s) = s² where s is side length

**Mathematical domain:** (-∞, ∞)
**Real-world domain:** (0, ∞) because side length must be positive

**Mathematical range:** [0, ∞)
**Real-world range:** (0, ∞) because area must be positive

**Example 2: Projectile**
h(t) = -16t² + 64t where t is time

**Real-world domain:** [0, 4] (from launch until it hits ground)
**Real-world range:** [0, 64] (from ground to maximum height)

**Example 3: Cost function**
C(n) = 50 + 10n where n is number of items

**Real-world domain:** {0, 1, 2, 3, ...} (can't buy 2.5 items)
**Real-world range:** {50, 60, 70, 80, ...} (discrete values)

## Practice: Finding Domain

**For each function, find the domain:**

**Problem 1:** f(x) = 3x - 7
Linear, no restrictions
Domain: (-∞, ∞)

**Problem 2:** g(x) = 1/(x + 2)
Denominator zero when x = -2
Domain: (-∞, -2) ∪ (-2, ∞)

**Problem 3:** h(x) = √(x + 4)
Inside must be ≥ 0: x + 4 ≥ 0, so x ≥ -4
Domain: [-4, ∞)

**Problem 4:** f(x) = x²
No restrictions
Domain: (-∞, ∞)

**Problem 5:** g(x) = √(2x - 6)
Inside ≥ 0: 2x - 6 ≥ 0, so 2x ≥ 6, thus x ≥ 3
Domain: [3, ∞)

## Practice: Finding Range

**Problem 1:** f(x) = x - 5
Linear (non-constant)
Range: (-∞, ∞)

**Problem 2:** g(x) = x² + 1
Parabola opening up, vertex at (0, 1)
Range: [1, ∞)

**Problem 3:** h(x) = -x² + 4
Parabola opening down, vertex at (0, 4)
Range: (-∞, 4]

**Problem 4:** f(x) = |x| - 3
V-shape with vertex at (0, -3), opens up
Range: [-3, ∞)

**Problem 5:** g(x) = 7
Constant function
Range: {7}

## Union Notation

Use ∪ (union) to combine separate intervals.

**Example:** x < 2 or x > 5
Written as: (-∞, 2) ∪ (5, ∞)

**Example:** All real numbers except x = 3
Written as: (-∞, 3) ∪ (3, ∞)

**Example:** -4 ≤ x < -1 or 2 < x ≤ 7
Written as: [-4, -1) ∪ (2, 7]

## Common Mistakes to Avoid

1. **Using wrong brackets**
   Remember: ( ) for open, [ ] for closed
   Infinity ALWAYS uses ( )

2. **Forgetting to solve inequalities**
   √(x - 3) requires x - 3 ≥ 0, which gives x ≥ 3

3. **Confusing domain and range**
   Domain = inputs (x), Range = outputs (y)

4. **Missing restrictions**
   Always check for division by zero and square roots

5. **Ignoring graph direction**
   Parabola up: range [k, ∞)
   Parabola down: range (-∞, k]

6. **Writing infinity with brackets**
   Never write [∞) or (-∞]
   Always (∞) and (-∞)

## Domain and Range from Tables

**Table:**
| x  | y  |
|----|-----|
| -2 | 3   |
| 0  | 5   |
| 2  | 7   |
| 4  | 9   |

Domain: {-2, 0, 2, 4} (discrete values shown)
Range: {3, 5, 7, 9}

If the pattern continues forever:
Domain: all even integers
Range: all odd integers starting from 3

## Continuous vs. Discrete

**Continuous domain/range:** Any value in an interval
Example: (-∞, ∞), [2, 5]

**Discrete domain/range:** Only specific separate values
Example: {0, 1, 2, 3, ...}, {-2, 0, 2, 4}

**Real-world examples of discrete:**
- Number of students (can't have 25.5 students)
- Number of cars (whole numbers only)
- Days of the week (discrete set)

## Testing Your Understanding

**Quick checks:**

**For domain:**
- Can I divide by zero? If yes, exclude that x-value
- Is there a square root? If yes, set inside ≥ 0
- Are there real-world constraints? If yes, apply them

**For range:**
- Is it linear (non-constant)? Range is (-∞, ∞)
- Is it quadratic? Find vertex, check if up or down
- Is there a minimum or maximum? Use [ or ]
- Can I reach all y-values or only some?

## Step-by-Step Process

**Finding Domain:**
1. Identify function type
2. Check for division (denominator ≠ 0)
3. Check for square roots (inside ≥ 0)
4. Check for other restrictions
5. Apply real-world constraints if applicable
6. Write in interval notation

**Finding Range:**
1. Determine function type
2. For linear: usually (-∞, ∞) unless constant
3. For quadratic: find vertex and direction
4. For other functions: analyze graph or behavior
5. Apply real-world constraints if applicable
6. Write in interval notation

## Advanced Example

**f(x) = √(4 - x²)**

**Domain:**
Inside square root: 4 - x² ≥ 0
-x² ≥ -4
x² ≤ 4
|x| ≤ 2
-2 ≤ x ≤ 2
Domain: [-2, 2]

**Range:**
When x = 0: f(0) = √4 = 2 (maximum)
When x = ±2: f(±2) = √0 = 0 (minimum)
Range: [0, 2]

This is actually the upper half of a circle!

## Quick Reference

**Common Domains:**
- Linear: (-∞, ∞)
- Quadratic: (-∞, ∞)
- f(x) = 1/x: (-∞, 0) ∪ (0, ∞)
- f(x) = √x: [0, ∞)
- Absolute value: (-∞, ∞)

**Common Ranges:**
- Linear (non-constant): (-∞, ∞)
- Constant: {c}
- Quadratic up: [k, ∞)
- Quadratic down: (-∞, k]
- f(x) = √x: [0, ∞)
- f(x) = |x|: [0, ∞)

## Tips for Success

- Always check for division by zero
- Square roots need non-negative inputs
- Graph the function if unsure about range
- Use correct bracket notation
- Consider real-world constraints
- Domain comes from input restrictions
- Range comes from output possibilities
- Practice with various function types
- When in doubt, make a table or graph`
    }
  });

  console.log('✅ Updated: domain-range-algebra1');

  // Topic 2: Ratios and Proportions (ratios-proportions-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'ratios-proportions-algebra1' },
    data: {
      textContent: `# Ratios and Proportions

## What is a Ratio?

A **ratio** compares two quantities by division.

**Ways to write a ratio:**
- a to b
- a:b
- a/b

**Example:** If there are 12 boys and 15 girls in a class:
- Ratio of boys to girls: 12 to 15, or 12:15, or 12/15

All three notations mean the same thing!

## Simplifying Ratios

Like fractions, ratios should be simplified to lowest terms.

**Example 1:** Ratio of 12 to 15
12/15 = 4/5 (divide both by 3)
Simplified ratio: 4 to 5 or 4:5

**Example 2:** Ratio of 24 to 36
24/36 = 2/3 (divide both by 12)
Simplified ratio: 2:3

**Example 3:** Ratio of 8 to 12 to 20
Divide all by GCF (4): 2 to 3 to 5

## Equivalent Ratios

**Equivalent ratios** are like equivalent fractions - they represent the same comparison.

**Example:** 2:3 is equivalent to:
- 4:6 (multiply by 2)
- 6:9 (multiply by 3)
- 10:15 (multiply by 5)

Just like 2/3 = 4/6 = 6/9 = 10/15

## Part-to-Part vs. Part-to-Whole

**Part-to-Part Ratio:**
Compares one part to another part

**Example:** 12 boys and 15 girls
Boys to girls: 12:15 = 4:5

**Part-to-Whole Ratio:**
Compares one part to the total

**Example:** 12 boys out of 27 total students
Boys to total: 12:27 = 4:9

**Important:** Know which type is being asked!

## Ratios with Units

When quantities have different units, include them!

**Example 1:** A car travels 120 miles in 2 hours
Ratio: 120 miles : 2 hours = 60 miles : 1 hour
This is a rate: 60 miles per hour

**Example 2:** $15 for 3 pounds
Ratio: $15 : 3 pounds = $5 : 1 pound
Rate: $5 per pound

**Example 3:** 300 words in 5 minutes
Ratio: 300 words : 5 minutes = 60 words : 1 minute
Rate: 60 words per minute

## What is a Proportion?

A **proportion** states that two ratios are equal.

**Standard form:** a/b = c/d

Read as: "a is to b as c is to d"

**Example:** 2/3 = 6/9 is a proportion

**Example:** 3/4 = 9/12 is a proportion

## Checking if a Proportion is True

Use **cross-multiplication**: a/b = c/d is true if ad = bc

**Example 1:** Is 3/5 = 9/15 true?
Cross multiply: 3 × 15 = 45 and 5 × 9 = 45
45 = 45 ✓ Yes, it's a proportion!

**Example 2:** Is 2/7 = 5/14 true?
Cross multiply: 2 × 14 = 28 and 7 × 5 = 35
28 ≠ 35 ✗ No, not a proportion

**Example 3:** Is 4/6 = 10/15 true?
Cross multiply: 4 × 15 = 60 and 6 × 10 = 60
60 = 60 ✓ Yes!

## Solving Proportions

To solve a proportion, use cross-multiplication.

**Example 1:** x/5 = 3/15

Cross multiply: 15x = 5 × 3
15x = 15
x = 1

Check: 1/5 = 3/15? → 1/5 = 1/5 ✓

**Example 2:** 4/7 = x/21

Cross multiply: 7x = 4 × 21
7x = 84
x = 12

**Example 3:** 2/x = 8/12

Cross multiply: 2 × 12 = 8x
24 = 8x
x = 3

**Example 4:** (x+1)/3 = 5/6

Cross multiply: 6(x + 1) = 3 × 5
6x + 6 = 15
6x = 9
x = 3/2 or 1.5

## Using Proportions in Word Problems

Proportions are powerful tools for solving real-world problems!

**General strategy:**
1. Identify the two ratios being compared
2. Set up proportion with same units in corresponding positions
3. Use x for the unknown value
4. Cross multiply and solve
5. Check if answer makes sense

## Scale and Map Problems

**Example 1:** On a map, 2 inches represents 50 miles. If two cities are 7 inches apart on the map, how far apart are they in reality?

Set up proportion:
2 inches / 50 miles = 7 inches / x miles

Cross multiply: 2x = 350
x = 175 miles

**Example 2:** A model car has scale 1:24. If the model is 6 inches long, how long is the real car?

1/24 = 6/x

Cross multiply: x = 144 inches = 12 feet

## Recipe and Cooking Problems

**Example:** A recipe for 4 servings needs 3 cups of flour. How much flour for 10 servings?

Set up proportion:
3 cups / 4 servings = x cups / 10 servings

Cross multiply: 4x = 30
x = 7.5 cups

## Similar Figures

**Similar figures** have the same shape but different sizes. Corresponding sides are proportional.

**Example:** Two similar triangles. First has sides 3, 4, 5. Second has shortest side 9. Find other sides.

Set up proportion using corresponding sides:
3/9 = 4/x = 5/y

From 3/9 = 4/x:
3x = 36
x = 12

From 3/9 = 5/y:
3y = 45
y = 15

Second triangle: 9, 12, 15

## Rate Problems

**Example 1:** If 5 pounds of apples cost $8, how much do 8 pounds cost?

5 pounds / $8 = 8 pounds / $x

Cross multiply: 5x = 64
x = $12.80

**Example 2:** A printer prints 120 pages in 3 minutes. How long to print 200 pages?

120 pages / 3 minutes = 200 pages / x minutes

Cross multiply: 120x = 600
x = 5 minutes

## Percent Problems as Proportions

Percent means "per hundred," so we can use proportions!

**Form:** part/whole = percent/100

**Example 1:** What is 35% of 80?

x/80 = 35/100

Cross multiply: 100x = 2800
x = 28

**Example 2:** 15 is what percent of 60?

15/60 = x/100

Cross multiply: 60x = 1500
x = 25

So 15 is 25% of 60.

**Example 3:** 12 is 30% of what number?

12/x = 30/100

Cross multiply: 30x = 1200
x = 40

## Unit Rate

A **unit rate** compares a quantity to 1 unit of another quantity.

**Example 1:** $6 for 2 pounds
Unit rate: $6 ÷ 2 = $3 per pound

**Example 2:** 150 miles in 3 hours
Unit rate: 150 ÷ 3 = 50 miles per hour

**Example 3:** $4.50 for 3 cans
Unit rate: $4.50 ÷ 3 = $1.50 per can

Unit rates help compare different deals!

## Comparing Unit Rates

**Example:** Which is a better deal?
Option A: 8 oz for $3.20
Option B: 12 oz for $4.20

Find unit rates:
A: $3.20 ÷ 8 = $0.40 per oz
B: $4.20 ÷ 12 = $0.35 per oz

Option B is better! (lower price per ounce)

## Direct Variation

When two quantities are proportional, we say they **vary directly**.

**Form:** y/x = k (constant) or y = kx

**Example:** If y varies directly with x, and y = 12 when x = 3, find y when x = 7.

First find k: 12 = k(3), so k = 4
Equation: y = 4x
When x = 7: y = 4(7) = 28

## Inverse Variation

When one quantity increases as another decreases proportionally, they **vary inversely**.

**Form:** xy = k (constant) or y = k/x

**Example:** Time to complete a job varies inversely with number of workers. 3 workers take 8 hours. How long for 6 workers?

Find k: 3 × 8 = 24
So xy = 24
When x = 6: 6y = 24, y = 4 hours

## Complex Proportions

**Example 1:** If 4 workers can build 6 walls in 8 days, how many walls can 10 workers build in 12 days?

Set up: (4 workers × 8 days) / 6 walls = (10 workers × 12 days) / x walls

32/6 = 120/x

Cross multiply: 32x = 720
x = 22.5 walls

**Example 2:** If 8 machines produce 240 items in 3 hours, how many items can 12 machines produce in 5 hours?

(8 machines × 3 hours) / 240 items = (12 machines × 5 hours) / x items

24/240 = 60/x

Cross multiply: 24x = 14,400
x = 600 items

## Ratio Tables

A **ratio table** helps organize equivalent ratios.

**Example:** Ratio of cups to servings is 2:5

| Cups | Servings |
|------|----------|
| 2    | 5        |
| 4    | 10       |
| 6    | 15       |
| 8    | 20       |

Each row shows equivalent ratios.

## Using Ratio Tables to Solve

**Example:** If 3 pounds cost $7.50, what do 5 pounds cost?

| Pounds | Cost   |
|--------|--------|
| 3      | $7.50  |
| 1      | $2.50  |
| 5      | $12.50 |

First find unit rate (1 pound), then multiply.

## Common Mistakes to Avoid

1. **Mixing up units in proportions**
   Make sure corresponding parts match!
   Correct: inches/miles = inches/miles
   Wrong: inches/miles = miles/inches

2. **Not simplifying ratios**
   12:18 should be simplified to 2:3

3. **Forgetting to label**
   Keep track of what each number represents

4. **Cross-multiplying incorrectly**
   a/b = c/d gives ad = bc, not ab = cd

5. **Not checking answers**
   Substitute back to verify!

6. **Confusing part-to-part with part-to-whole**
   Read problem carefully to know which is asked

## Applications in Geometry

**Example:** Two similar rectangles. First is 4 by 6. Second has length 9. Find width.

Corresponding sides are proportional:
4/6 = w/9

Cross multiply: 6w = 36
w = 6

## Applications in Business

**Example:** A company's profit-to-revenue ratio is 1:5. If revenue is $250,000, what's the profit?

1/5 = x/250,000

Cross multiply: 5x = 250,000
x = $50,000 profit

## Applications in Science

**Example:** A solution has a 3:7 ratio of acid to water. How much acid in 500 mL total solution?

Total parts: 3 + 7 = 10
Acid is 3 out of 10 parts

3/10 = x/500

Cross multiply: 10x = 1500
x = 150 mL acid

## Solving for Multiple Unknowns

**Example:** Two numbers are in ratio 3:4 and their sum is 35. Find the numbers.

Let first number = 3x
Let second number = 4x

Sum: 3x + 4x = 35
7x = 35
x = 5

First number: 3(5) = 15
Second number: 4(5) = 20

Check: 15:20 = 3:4 ✓ and 15 + 20 = 35 ✓

## Golden Ratio (Preview)

The **golden ratio** φ ≈ 1.618 appears in nature, art, and architecture.

a/b = (a+b)/a ≈ 1.618

Found in:
- Nautilus shells
- Flower petals
- Rectangle proportions
- Classical architecture

## Quick Reference

**Setting up proportions:**
a/b = c/d where a and c are similar, b and d are similar

**Cross-multiplication:**
If a/b = c/d, then ad = bc

**Unit rate:**
Divide to get quantity per 1 unit

**Direct variation:**
y = kx (y/x is constant)

**Inverse variation:**
xy = k (product is constant)

## Practice Strategy

**Level 1:** Simple proportions
- 2/3 = x/12

**Level 2:** Word problems with one step
- Map scale problems

**Level 3:** Recipe and rate problems
- Converting amounts

**Level 4:** Similar figures
- Finding missing sides

**Level 5:** Complex problems
- Multiple workers/machines

## Tips for Success

- Always label your quantities with units
- Set up proportions with same units in same positions
- Simplify ratios before solving
- Cross-multiply carefully
- Check your answer by substituting back
- Ask: does my answer make sense?
- Draw diagrams for geometry problems
- Make ratio tables for complex problems
- Practice unit conversions
- Remember: proportion means equal ratios`
    }
  });

  console.log('✅ Updated: ratios-proportions-algebra1');

  // Topic 3: Simplifying Radicals (simplifying-radicals-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'simplifying-radicals-algebra1' },
    data: {
      textContent: `# Simplifying Radicals

## What is a Radical?

A **radical** is an expression that includes a root symbol (√).

**Parts of a radical:**
- **Radical symbol:** √
- **Radicand:** the number/expression under the radical
- **Index:** the small number indicating which root (if no number shown, it's 2 for square root)

**Examples:**
- √25: square root of 25
- ³√8: cube root of 8
- ⁴√16: fourth root of 16

## Perfect Squares

**Perfect squares** are numbers whose square root is a whole number.

**First 15 perfect squares:**
- 1² = 1
- 2² = 4
- 3² = 9
- 4² = 16
- 5² = 25
- 6² = 36
- 7² = 49
- 8² = 64
- 9² = 81
- 10² = 100
- 11² = 121
- 12² = 144
- 13² = 169
- 14² = 196
- 15² = 225

**Memorize these!** They're essential for simplifying radicals.

## Simplifying Square Roots

A square root is **simplified** when the radicand has no perfect square factors (other than 1).

**Strategy:**
1. Find the largest perfect square factor of the radicand
2. Rewrite as product: √(perfect square × other factor)
3. Take the square root of the perfect square
4. Leave the other factor under the radical

## Example 1: √12

**Find perfect square factors of 12:**
12 = 4 × 3 (4 is a perfect square!)

**Rewrite:**
√12 = √(4 × 3)

**Simplify:**
√12 = √4 × √3
√12 = 2√3

**Final answer:** 2√3

## Example 2: √50

**Factor:**
50 = 25 × 2 (25 is perfect square)

**Simplify:**
√50 = √(25 × 2)
√50 = √25 × √2
√50 = 5√2

## Example 3: √72

**Factor:**
72 = 36 × 2 (36 is perfect square)

**Simplify:**
√72 = √(36 × 2)
√72 = 6√2

**Alternative factoring:**
72 = 4 × 18
√72 = 2√18

But √18 can be simplified further!
18 = 9 × 2
√18 = 3√2

So √72 = 2 × 3√2 = 6√2 ✓

Always use the LARGEST perfect square factor!

## Example 4: √48

**Factor:**
48 = 16 × 3

**Simplify:**
√48 = √(16 × 3)
√48 = 4√3

## Prime Factorization Method

For larger numbers, use prime factorization.

**Example: √180**

**Prime factorization:**
180 = 2 × 2 × 3 × 3 × 5
180 = 2² × 3² × 5

**Group pairs:**
√180 = √(2² × 3² × 5)

**Take out pairs:**
√180 = 2 × 3 × √5
√180 = 6√5

## When Radicals Don't Simplify

**Example: √15**

15 = 3 × 5 (no perfect square factors)

√15 is already simplified!

**Example: √7**

7 is prime, no perfect square factors.

√7 is already simplified!

## Simplifying Radicals with Variables

Use the same process with variables!

**Rule:** √(x²) = x (when x ≥ 0)

**Example 1:** √(x⁴)

x⁴ = (x²)²

√(x⁴) = x²

**Example 2:** √(x⁶)

x⁶ = (x³)²

√(x⁶) = x³

**Example 3:** √(16x²)

√(16x²) = √16 × √(x²)
√(16x²) = 4x

## Simplifying with Variables and Numbers

**Example 1:** √(25x⁴)

√(25x⁴) = √25 × √(x⁴)
√(25x⁴) = 5x²

**Example 2:** √(50x⁶)

50 = 25 × 2
x⁶ = (x³)²

√(50x⁶) = √(25 × 2 × (x³)²)
√(50x⁶) = 5x³√2

**Example 3:** √(12x⁵)

12 = 4 × 3
x⁵ = x⁴ × x = (x²)² × x

√(12x⁵) = √(4 × 3 × x⁴ × x)
√(12x⁵) = 2x²√(3x)

## Adding and Subtracting Radicals

You can only combine **like radicals** (same radicand).

Think of them like variables: 3x + 5x = 8x

**Example 1:** 3√2 + 5√2

Same radicand (2), so combine:
3√2 + 5√2 = 8√2

**Example 2:** 7√5 - 2√5

7√5 - 2√5 = 5√5

**Example 3:** √3 + √7

Different radicands, CANNOT combine.
Answer: √3 + √7

## Simplify Before Adding

Sometimes you must simplify first to see like radicals.

**Example 1:** √12 + √27

Simplify each:
√12 = 2√3
√27 = √(9 × 3) = 3√3

Now add:
2√3 + 3√3 = 5√3

**Example 2:** √50 - √8

Simplify:
√50 = 5√2
√8 = √(4 × 2) = 2√2

Subtract:
5√2 - 2√2 = 3√2

**Example 3:** 2√18 + √32

Simplify:
2√18 = 2 × 3√2 = 6√2
√32 = √(16 × 2) = 4√2

Add:
6√2 + 4√2 = 10√2

## Multiplying Radicals

**Rule:** √a × √b = √(a × b)

**Example 1:** √3 × √5

√3 × √5 = √15

**Example 2:** √2 × √8

√2 × √8 = √16 = 4

**Example 3:** 2√3 × 5√2

Multiply coefficients and radicals separately:
(2 × 5)(√3 × √2) = 10√6

**Example 4:** √6 × √6

√6 × √6 = √36 = 6

**General rule:** √a × √a = a

## Multiplying with Simplification

**Example 1:** √2 × √18

√2 × √18 = √36 = 6

**Example 2:** √5 × √20

√5 × √20 = √100 = 10

**Example 3:** 3√2 × 4√8

3√2 × 4√8 = 12√16 = 12 × 4 = 48

**Example 4:** 2√6 × 5√3

2√6 × 5√3 = 10√18 = 10 × 3√2 = 30√2

## Dividing Radicals

**Rule:** √a / √b = √(a/b)

**Example 1:** √30 / √6

√30 / √6 = √(30/6) = √5

**Example 2:** √50 / √2

√50 / √2 = √(50/2) = √25 = 5

**Example 3:** 10√15 / 2√3

Divide coefficients and radicals:
(10/2)(√15/√3) = 5√5

## Rationalizing the Denominator

We don't leave radicals in the denominator!

**Process:** Multiply numerator and denominator by the radical in the denominator.

**Example 1:** 3 / √2

Multiply by √2/√2:
(3 × √2) / (√2 × √2) = 3√2 / 2

**Example 2:** 5 / √3

Multiply by √3/√3:
(5 × √3) / (√3 × √3) = 5√3 / 3

**Example 3:** 8 / √8

First simplify √8 = 2√2:
8 / 2√2 = 4 / √2

Rationalize:
(4 × √2) / (√2 × √2) = 4√2 / 2 = 2√2

## Rationalizing with Binomials

When denominator is a + √b, multiply by the **conjugate** a - √b.

**Example:** 1 / (2 + √3)

Conjugate of 2 + √3 is 2 - √3

Multiply:
(1 × (2 - √3)) / ((2 + √3)(2 - √3))

Denominator: (2 + √3)(2 - √3) = 4 - 3 = 1

Result: 2 - √3

## Cube Roots and Higher

**Cube root:** ³√a means what number cubed equals a?

**Perfect cubes:**
- 1³ = 1
- 2³ = 8
- 3³ = 27
- 4³ = 64
- 5³ = 125
- 6³ = 216

**Example 1:** ³√8 = 2 (because 2³ = 8)

**Example 2:** ³√27 = 3

**Example 3:** ³√64 = 4

**Example 4:** ³√125 = 5

## Simplifying Cube Roots

**Example 1:** ³√24

Factor: 24 = 8 × 3 (8 is perfect cube)

³√24 = ³√(8 × 3) = ³√8 × ³√3 = 2³√3

**Example 2:** ³√54

54 = 27 × 2

³√54 = ³√(27 × 2) = 3³√2

## Product Rule for Radicals

**√a × √b = √(ab)** works for any index.

**Example (cube roots):** ³√2 × ³√4

³√2 × ³√4 = ³√8 = 2

## Radicals in Equations

**Example:** Solve √x = 5

Square both sides:
(√x)² = 5²
x = 25

**Check:** √25 = 5 ✓

**Example 2:** Solve √(x + 3) = 7

Square both sides:
x + 3 = 49
x = 46

**Check:** √(46 + 3) = √49 = 7 ✓

## Applications: Pythagorean Theorem

For right triangles: a² + b² = c²

**Example:** Legs are 3 and 4. Find hypotenuse.

3² + 4² = c²
9 + 16 = c²
25 = c²
c = √25 = 5

**Example 2:** Hypotenuse is 10, one leg is 6. Find other leg.

6² + b² = 10²
36 + b² = 100
b² = 64
b = √64 = 8

## Applications: Area and Geometry

**Example:** Area of square is 50 cm². Find side length.

Side = √50 = √(25 × 2) = 5√2 cm

**Approximate:** 5 × 1.414 ≈ 7.07 cm

## Common Mistakes to Avoid

1. **√(a + b) ≠ √a + √b**
   √(9 + 16) = √25 = 5
   NOT √9 + √16 = 3 + 4 = 7

2. **Not using largest perfect square**
   Use √(36 × 2) not √(4 × 18) for √72

3. **Adding unlike radicals**
   √2 + √3 cannot be simplified!

4. **Forgetting to simplify final answer**
   Leave answer as 2√3, not √12

5. **Losing negative signs**
   -5√2 + 3√2 = -2√2, not 2√2

6. **Not rationalizing denominators**
   Final answer should not have √ in denominator

## Quick Reference

**Simplifying:**
Find perfect square factor, take it out

**Adding/Subtracting:**
Only combine like radicals

**Multiplying:**
√a × √b = √(ab)

**Dividing:**
√a / √b = √(a/b)

**Rationalizing:**
Multiply by √n/√n to remove √ from denominator

## Practice Strategy

**Level 1:** Perfect squares
- √4, √16, √36, √100

**Level 2:** Simple simplification
- √12, √18, √20, √50

**Level 3:** Larger numbers
- √72, √98, √200

**Level 4:** With variables
- √(x⁴), √(25x²), √(18x⁶)

**Level 5:** Operations
- Add, subtract, multiply, divide radicals

## Tips for Success

- Memorize perfect squares 1-225
- Look for largest perfect square factor
- Simplify before adding or subtracting
- Always rationalize denominators
- Check work by squaring result
- Practice prime factorization
- Draw factor trees for complex numbers
- Remember √a × √a = a
- Keep track of coefficients separately
- Simplify your final answer completely`
    }
  });

  console.log('✅ Updated: simplifying-radicals-algebra1');

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
