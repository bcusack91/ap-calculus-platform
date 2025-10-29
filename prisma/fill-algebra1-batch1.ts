import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 1 (3 topics)...\n');

  // Topic 1: Solving Linear Equations (solving-linear-equations-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'solving-linear-equations-algebra1' },
    data: {
      textContent: `# Solving Linear Equations

## What is a Linear Equation?

A **linear equation** is an algebraic equation where the highest power of the variable is 1. The graph of a linear equation is always a straight line. Linear equations have the general form:

ax + b = c

Where:
- x is the variable (unknown)
- a, b, and c are constants (known numbers)
- a ≠ 0

Examples of linear equations:
- 2x + 5 = 13
- 3x - 7 = 20
- x/4 + 3 = 7
- 5(x - 2) = 15

## Goal of Solving Equations

The goal is to **isolate the variable** on one side of the equation. This means getting x (or whatever variable) alone, with a coefficient of 1.

We want to transform the equation into:
x = (some number)

## Properties of Equality

These properties allow us to manipulate equations while keeping them balanced:

**1. Addition Property of Equality**
If a = b, then a + c = b + c
You can add the same number to both sides.

**2. Subtraction Property of Equality**
If a = b, then a - c = b - c
You can subtract the same number from both sides.

**3. Multiplication Property of Equality**
If a = b, then a × c = b × c (where c ≠ 0)
You can multiply both sides by the same non-zero number.

**4. Division Property of Equality**
If a = b, then a ÷ c = b ÷ c (where c ≠ 0)
You can divide both sides by the same non-zero number.

## Solving One-Step Equations

**Addition/Subtraction Equations:**

Example 1: x + 7 = 12
Subtract 7 from both sides:
x + 7 - 7 = 12 - 7
x = 5

Example 2: x - 4 = 9
Add 4 to both sides:
x - 4 + 4 = 9 + 4
x = 13

**Multiplication/Division Equations:**

Example 3: 3x = 15
Divide both sides by 3:
3x/3 = 15/3
x = 5

Example 4: x/2 = 8
Multiply both sides by 2:
2 × (x/2) = 2 × 8
x = 16

## Solving Two-Step Equations

Two-step equations require two operations to solve. Use **reverse order of operations** - undo addition/subtraction first, then multiplication/division.

**General Strategy:**
1. Undo addition or subtraction
2. Undo multiplication or division

Example 1: 2x + 5 = 13
Step 1: Subtract 5 from both sides
2x + 5 - 5 = 13 - 5
2x = 8

Step 2: Divide both sides by 2
2x/2 = 8/2
x = 4

Check: 2(4) + 5 = 8 + 5 = 13 ✓

Example 2: 3x - 7 = 20
Step 1: Add 7 to both sides
3x - 7 + 7 = 20 + 7
3x = 27

Step 2: Divide both sides by 3
x = 9

Example 3: x/4 + 3 = 7
Step 1: Subtract 3 from both sides
x/4 = 4

Step 2: Multiply both sides by 4
x = 16

## Solving Multi-Step Equations

For more complex equations, follow this order:

**Step 1: Simplify each side** (distribute, combine like terms)
**Step 2: Get all variable terms on one side**
**Step 3: Get all constants on the other side**
**Step 4: Isolate the variable**

Example 1: 5(x - 2) = 15
Step 1: Distribute 5
5x - 10 = 15

Step 2: Add 10 to both sides
5x = 25

Step 3: Divide by 5
x = 5

Example 2: 3x + 7 = x + 19
Step 1: Subtract x from both sides
2x + 7 = 19

Step 2: Subtract 7 from both sides
2x = 12

Step 3: Divide by 2
x = 6

Example 3: 2(x + 3) - 5 = 4x - 7
Step 1: Distribute
2x + 6 - 5 = 4x - 7
2x + 1 = 4x - 7

Step 2: Subtract 2x from both sides
1 = 2x - 7

Step 3: Add 7 to both sides
8 = 2x

Step 4: Divide by 2
4 = x, or x = 4

## Equations with Variables on Both Sides

When variables appear on both sides, collect all variable terms on one side and all constants on the other.

Example: 5x - 3 = 2x + 12
Step 1: Subtract 2x from both sides
3x - 3 = 12

Step 2: Add 3 to both sides
3x = 15

Step 3: Divide by 3
x = 5

## Equations with Fractions

**Method 1: Clear fractions by multiplying by LCD**

Example: (x/3) + (x/4) = 7
LCD = 12
Multiply everything by 12:
12(x/3) + 12(x/4) = 12(7)
4x + 3x = 84
7x = 84
x = 12

**Method 2: Work with fractions directly**

Example: (2x + 1)/3 = 5
Multiply both sides by 3:
2x + 1 = 15
2x = 14
x = 7

## Checking Your Solution

Always check by substituting your answer back into the original equation.

Example: If solving 3x + 5 = 14 gives x = 3
Check: 3(3) + 5 = 9 + 5 = 14 ✓

## Special Cases

**Identity (Infinitely Many Solutions):**
When you get a statement that's always true (like 0 = 0 or 5 = 5)
Example: 2(x + 3) = 2x + 6
After simplifying: 6 = 6 (true for all x)

**Contradiction (No Solution):**
When you get a false statement (like 0 = 5)
Example: 2(x + 3) = 2x + 8
After simplifying: 6 = 8 (never true)

## Common Mistakes to Avoid

1. **Not doing the same thing to both sides**
   Wrong: If 2x = 10, x = 10 - 2 = 8
   Right: Divide both sides by 2, x = 5

2. **Forgetting to distribute**
   Wrong: 3(x + 2) = 3x + 2
   Right: 3(x + 2) = 3x + 6

3. **Sign errors when moving terms**
   2x + 5 = 13
   Remember: 2x = 13 - 5, not 13 + 5

4. **Dividing by zero**
   Never divide both sides by 0

5. **Not checking the solution**
   Always substitute back to verify!

## Real-World Applications

Linear equations appear in many real-life situations:

**Example 1: Age Problems**
"Sarah is 5 years older than Tom. Together their ages sum to 27. How old is Tom?"
Let x = Tom's age
x + (x + 5) = 27
2x + 5 = 27
x = 11 (Tom is 11)

**Example 2: Money Problems**
"You have $50. After buying some items at $7 each, you have $15 left. How many items did you buy?"
50 - 7x = 15
7x = 35
x = 5 items

**Example 3: Geometry**
"The perimeter of a rectangle is 40 cm. The length is 3 cm more than the width. Find the dimensions."
Let w = width
Perimeter: 2w + 2(w + 3) = 40
4w + 6 = 40
w = 8.5 cm

## Problem-Solving Strategy

1. Read the problem carefully
2. Identify what you're solving for (define variable)
3. Write an equation
4. Solve the equation
5. Check if the answer makes sense
6. Answer the question in words

## Quick Reference

| Type | Example | First Step |
|------|---------|------------|
| x + 5 = 12 | One-step | Subtract 5 |
| 3x = 15 | One-step | Divide by 3 |
| 2x + 5 = 13 | Two-step | Subtract 5 |
| 3(x - 2) = 15 | Multi-step | Distribute 3 |
| 5x - 3 = 2x + 12 | Variables both sides | Collect variables |

## Practice Tips

- Always show your work step-by-step
- Check your solution by substituting back
- Keep equations balanced (what you do to one side, do to the other)
- Work in reverse order of operations
- Simplify before solving when possible
- Be careful with negative signs`
    }
  });

  console.log('✅ Updated: solving-linear-equations-algebra1');

  // Topic 2: Graphing Linear Equations (graphing-linear-equations-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'graphing-linear-equations-algebra1' },
    data: {
      textContent: `# Graphing Linear Equations

## What is a Graph of a Linear Equation?

The graph of a linear equation is a **straight line** on the coordinate plane. Every point (x, y) on the line is a solution to the equation.

For example, the equation y = 2x + 1 is graphed as a line where every point satisfies the equation. The point (2, 5) is on the line because 5 = 2(2) + 1.

## The Coordinate Plane

The coordinate plane (also called the Cartesian plane) has:
- A horizontal axis called the **x-axis**
- A vertical axis called the **y-axis**
- The point where they meet is the **origin** (0, 0)

The plane is divided into four **quadrants:**
- Quadrant I: (+, +) upper right
- Quadrant II: (-, +) upper left
- Quadrant III: (-, -) lower left
- Quadrant IV: (+, -) lower right

## Ordered Pairs

Points are written as **(x, y)** called ordered pairs:
- The first number is the x-coordinate (horizontal position)
- The second number is the y-coordinate (vertical position)

To plot (3, 4):
1. Start at origin
2. Move 3 units right (positive x)
3. Move 4 units up (positive y)
4. Mark the point

To plot (-2, 5):
1. Start at origin
2. Move 2 units left (negative x)
3. Move 5 units up (positive y)
4. Mark the point

## Graphing Linear Equations Using a Table

**Method: Make a table of values, plot points, draw a line**

Example: Graph y = 2x - 3

Step 1: Create a table (choose x-values, calculate y)

| x  | y = 2x - 3 | (x, y)    |
|----|------------|-----------|
| -1 | 2(-1) - 3 = -5 | (-1, -5) |
| 0  | 2(0) - 3 = -3  | (0, -3)  |
| 1  | 2(1) - 3 = -1  | (1, -1)  |
| 2  | 2(2) - 3 = 1   | (2, 1)   |
| 3  | 2(3) - 3 = 3   | (3, 3)   |

Step 2: Plot these points on a coordinate plane

Step 3: Draw a straight line through the points

Step 4: Add arrows at both ends (line extends forever)

**Tip:** You only need 2 points to draw a line, but use 3 as a check!

## Slope-Intercept Form

The most common form for graphing is **slope-intercept form:**

y = mx + b

Where:
- m is the **slope** (steepness of line)
- b is the **y-intercept** (where line crosses y-axis)

Example: y = 3x + 2
- Slope (m) = 3
- Y-intercept (b) = 2

## Understanding Slope

**Slope** measures the steepness and direction of a line.

Slope = rise/run = change in y / change in x = (y₂ - y₁)/(x₂ - x₁)

**Types of Slope:**

**Positive Slope (m > 0):**
- Line goes upward from left to right
- Example: y = 2x + 1 (slope = 2)

**Negative Slope (m < 0):**
- Line goes downward from left to right
- Example: y = -3x + 5 (slope = -3)

**Zero Slope (m = 0):**
- Horizontal line
- Example: y = 4 (slope = 0)

**Undefined Slope:**
- Vertical line
- Example: x = 3 (slope undefined)

## Graphing Using Slope-Intercept Form

**Method:** Start at y-intercept, use slope to find next points

Example: Graph y = (2/3)x - 1

Step 1: Identify slope and y-intercept
- Slope m = 2/3 (rise 2, run 3)
- Y-intercept b = -1

Step 2: Plot y-intercept
Plot point (0, -1)

Step 3: Use slope to find next point
From (0, -1):
- Rise 2 (up 2 units)
- Run 3 (right 3 units)
- Plot point (3, 1)

Step 4: Continue or go backwards
From (0, -1):
- Fall 2 (down 2)
- Run left 3 (left 3)
- Plot point (-3, -3)

Step 5: Draw line through points

## Finding Slope from Two Points

Given two points (x₁, y₁) and (x₂, y₂):

slope = (y₂ - y₁)/(x₂ - x₁)

Example: Find slope through (1, 3) and (4, 9)
m = (9 - 3)/(4 - 1)
m = 6/3
m = 2

## The Y-Intercept

The **y-intercept** is where the line crosses the y-axis.
- At this point, x = 0
- Written as point (0, b)

To find y-intercept from an equation:
Set x = 0 and solve for y

Example: Find y-intercept of 2x + 3y = 12
Set x = 0:
2(0) + 3y = 12
3y = 12
y = 4
Y-intercept: (0, 4)

## The X-Intercept

The **x-intercept** is where the line crosses the x-axis.
- At this point, y = 0
- Written as point (a, 0)

To find x-intercept from an equation:
Set y = 0 and solve for x

Example: Find x-intercept of 2x + 3y = 12
Set y = 0:
2x + 3(0) = 12
2x = 12
x = 6
X-intercept: (6, 0)

## Graphing Using Intercepts

**Method:** Find x-intercept and y-intercept, draw line through them

Example: Graph 3x + 2y = 12

Step 1: Find y-intercept (set x = 0)
3(0) + 2y = 12
y = 6
Point: (0, 6)

Step 2: Find x-intercept (set y = 0)
3x + 2(0) = 12
x = 4
Point: (4, 0)

Step 3: Plot both intercepts

Step 4: Draw line through them

Step 5: Check with a third point

## Standard Form

Standard form: Ax + By = C
Where A, B, C are integers and A is positive

Example: 2x + 3y = 12

To graph from standard form:
- Find x and y intercepts, OR
- Convert to slope-intercept form

Converting to slope-intercept form:
2x + 3y = 12
3y = -2x + 12
y = (-2/3)x + 4

## Special Lines

**Horizontal Lines:**
- Form: y = k (constant)
- Slope = 0
- Parallel to x-axis
- Example: y = 3

**Vertical Lines:**
- Form: x = k (constant)
- Undefined slope
- Parallel to y-axis
- Example: x = -2

## Parallel and Perpendicular Lines

**Parallel Lines:**
- Have the SAME slope
- Never intersect
- Example: y = 2x + 1 and y = 2x - 3 (both have slope 2)

**Perpendicular Lines:**
- Slopes are NEGATIVE RECIPROCALS
- Intersect at 90° angle
- If slope₁ = m, then slope₂ = -1/m
- Example: y = 2x + 1 (slope = 2) and y = (-1/2)x + 3 (slope = -1/2)

Product of perpendicular slopes = -1

## Common Mistakes to Avoid

1. **Plotting points incorrectly**
   Remember: (x, y) not (y, x)!

2. **Wrong direction for slope**
   Positive slope: up-right
   Negative slope: down-right

3. **Not extending line far enough**
   Lines go on forever - add arrows!

4. **Confusing slope and y-intercept**
   In y = 3x + 2: slope is 3, intercept is 2

5. **Calculating slope incorrectly**
   Use (y₂ - y₁)/(x₂ - x₁), keep order consistent

## Real-World Applications

**Example 1: Phone Plan**
A phone plan costs $20/month plus $0.10 per text.
Equation: y = 0.10x + 20
- Slope: $0.10 per text
- Y-intercept: $20 base fee

**Example 2: Temperature**
Converting Fahrenheit to Celsius: C = (5/9)(F - 32)
This is a linear relationship.

**Example 3: Car Depreciation**
A car worth $30,000 depreciates $2,000/year.
Equation: y = -2000x + 30000
- Slope: -$2,000/year (negative = decreasing)
- Y-intercept: $30,000 initial value

## Problem-Solving Strategy

When given a word problem:
1. Identify rate of change (slope)
2. Identify starting value (y-intercept)
3. Write equation in y = mx + b form
4. Graph the equation
5. Use graph to answer questions

## Quick Reference

| Form | Equation | Use |
|------|----------|-----|
| Slope-Intercept | y = mx + b | Easy to graph, see slope/intercept |
| Standard | Ax + By = C | Find intercepts easily |
| Point-Slope | y - y₁ = m(x - x₁) | Know slope and one point |
| Horizontal | y = k | Slope is 0 |
| Vertical | x = k | Undefined slope |

## Practice Tips

- Always label axes and scale
- Plot at least 3 points to verify
- Use a ruler for straight lines
- Check your points in the equation
- Extend line with arrows
- Practice recognizing slope from graphs`
    }
  });

  console.log('✅ Updated: graphing-linear-equations-algebra1');

  // Topic 3: Linear Inequalities (linear-inequalities-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'linear-inequalities-algebra1' },
    data: {
      textContent: `# Linear Inequalities

## What is an Inequality?

An **inequality** is a mathematical statement that compares two expressions using inequality symbols instead of an equals sign.

**Inequality Symbols:**
- **<** less than
- **>** greater than
- **≤** less than or equal to
- **≥** greater than or equal to

Examples:
- x < 5 (x is less than 5)
- x ≥ 3 (x is greater than or equal to 3)
- 2x + 1 > 7 (2x + 1 is greater than 7)

## Difference from Equations

**Equations** have ONE solution (or specific number of solutions)
Example: x + 2 = 5 has solution x = 3

**Inequalities** have INFINITE solutions (a range of values)
Example: x + 2 < 5 has solutions x < 3 (all numbers less than 3)

## Solutions of Inequalities

A **solution** to an inequality is any value that makes the inequality true.

Example: Is x = 2 a solution to x < 5?
Check: 2 < 5? Yes ✓
So x = 2 is a solution.

Is x = 7 a solution to x < 5?
Check: 7 < 5? No ✗
So x = 7 is NOT a solution.

## Graphing Solutions on a Number Line

We represent solutions visually on a number line:

**Open Circle (○):** Use for < or >
The number is NOT included in the solution

**Closed Circle (●):** Use for ≤ or ≥
The number IS included in the solution

**Arrow:** Shows direction of other solutions

Examples:

x < 3
○ at 3, arrow pointing left
Numbers less than 3

x ≥ -2
● at -2, arrow pointing right
-2 and numbers greater than -2

## Solving One-Step Inequalities

Solve inequalities just like equations, with ONE IMPORTANT EXCEPTION: flip the inequality sign when multiplying or dividing by a NEGATIVE number.

**Addition/Subtraction (no sign flip):**

Example 1: x + 4 < 9
Subtract 4 from both sides:
x < 5

Example 2: x - 3 ≥ 7
Add 3 to both sides:
x ≥ 10

**Multiplication/Division by POSITIVE (no sign flip):**

Example 3: 3x > 12
Divide both sides by 3:
x > 4

Example 4: x/2 ≤ 5
Multiply both sides by 2:
x ≤ 10

**Multiplication/Division by NEGATIVE (FLIP the sign!):**

Example 5: -2x < 8
Divide both sides by -2 AND flip sign:
x > -4

Example 6: -x ≥ 5
Multiply both sides by -1 AND flip sign:
x ≤ -5

## Why Flip the Sign for Negatives?

When you multiply or divide by a negative, the order of numbers reverses.

Example: Start with true statement 3 < 5
Multiply both sides by -1:
-3 ? -5

On a number line, -3 is to the RIGHT of -5, so:
-3 > -5

The inequality flipped!

## Solving Two-Step Inequalities

Use the same process as equations: undo addition/subtraction first, then multiplication/division.

Example 1: 2x + 5 < 13
Step 1: Subtract 5 from both sides
2x < 8

Step 2: Divide both sides by 2
x < 4

Example 2: -3x + 7 ≥ 16
Step 1: Subtract 7 from both sides
-3x ≥ 9

Step 2: Divide both sides by -3 (FLIP sign!)
x ≤ -3

Example 3: x/4 - 3 > 2
Step 1: Add 3 to both sides
x/4 > 5

Step 2: Multiply both sides by 4
x > 20

## Solving Multi-Step Inequalities

Follow the same steps as multi-step equations:

Example 1: 3(x - 2) ≤ 15
Step 1: Distribute
3x - 6 ≤ 15

Step 2: Add 6
3x ≤ 21

Step 3: Divide by 3
x ≤ 7

Example 2: 5x - 3 < 2x + 9
Step 1: Subtract 2x from both sides
3x - 3 < 9

Step 2: Add 3
3x < 12

Step 3: Divide by 3
x < 4

Example 3: -2(x + 4) > 6
Step 1: Distribute -2
-2x - 8 > 6

Step 2: Add 8
-2x > 14

Step 3: Divide by -2 (FLIP!)
x < -7

## Compound Inequalities

**Compound inequalities** combine two inequalities.

**"And" Compound Inequalities:**
Written as a < x < b or using AND
The solution satisfies BOTH inequalities (overlap)

Example: -2 < x < 5
Read as: "x is greater than -2 AND less than 5"
Solution: numbers between -2 and 5
Graph: ○ at -2, ○ at 5, line between them

Solving: -3 < 2x + 1 < 7
Solve as three parts:
-3 < 2x + 1  AND  2x + 1 < 7
-4 < 2x      AND  2x < 6
-2 < x       AND  x < 3
Solution: -2 < x < 3

**"Or" Compound Inequalities:**
The solution satisfies EITHER inequality (union)

Example: x < -1 OR x > 3
Solution: numbers less than -1 or greater than 3
Graph: ○ at -1 with arrow left, ○ at 3 with arrow right

## Graphing Linear Inequalities in Two Variables

When graphing inequalities like y > 2x + 1:

**Step 1:** Graph the boundary line (as if it were an equation)
- Use solid line for ≤ or ≥
- Use dashed line for < or >

**Step 2:** Shade the appropriate region
- For y > or y ≥: shade ABOVE the line
- For y < or y ≤: shade BELOW the line

**Test Point Method:**
Pick a test point (often (0,0) if not on the line)
Substitute into inequality
If true, shade region containing that point
If false, shade the other region

Example: Graph y < 2x + 1

Step 1: Graph y = 2x + 1 with DASHED line
(slope 2, y-intercept 1)

Step 2: Test point (0, 0)
0 < 2(0) + 1
0 < 1 ✓ true

Step 3: Shade region containing (0, 0) (below line)

## Checking Solutions

Always check by substituting a value from your solution back into the original inequality.

Example: If solving 3x - 4 > 8 gives x > 4
Check with x = 5:
3(5) - 4 > 8
15 - 4 > 8
11 > 8 ✓

## Special Cases

**All Real Numbers:**
When you get a statement that's always true
Example: x + 3 > x + 1
After simplifying: 3 > 1 (always true)
Solution: all real numbers

**No Solution:**
When you get a false statement
Example: x + 3 < x + 1
After simplifying: 3 < 1 (never true)
Solution: no solution (empty set)

## Common Mistakes to Avoid

1. **Forgetting to flip the inequality sign**
   When dividing by -2, must flip!
   -2x < 8 becomes x > -4, NOT x < -4

2. **Using wrong circle type**
   < or > use open circle ○
   ≤ or ≥ use closed circle ●

3. **Wrong direction on number line**
   x < 3 means numbers to the LEFT of 3
   x > 3 means numbers to the RIGHT of 3

4. **Not distributing negative correctly**
   -2(x - 3) = -2x + 6, not -2x - 6

5. **Treating inequality like an equation**
   Remember: infinity solutions, not just one!

## Real-World Applications

Inequalities model many real situations:

**Example 1: Budget**
"You have $50. Each movie ticket costs $12. How many tickets can you buy?"
Let x = number of tickets
12x ≤ 50
x ≤ 4.17
You can buy at most 4 tickets (can't buy partial ticket)

**Example 2: Speed Limit**
"The speed limit is 65 mph"
s ≤ 65 (your speed must be at most 65)

**Example 3: Minimum Age**
"You must be at least 16 to drive"
a ≥ 16 (your age must be 16 or greater)

**Example 4: Temperature**
"Water is liquid between 32°F and 212°F"
32 < T < 212 (temperature is between 32 and 212)

## Problem-Solving Strategy

1. Read problem and identify what you're solving for
2. Define a variable
3. Identify the inequality symbol from words:
   - "at least" means ≥
   - "at most" means ≤
   - "more than" means >
   - "less than" means <
   - "no more than" means ≤
   - "no less than" means ≥
4. Write the inequality
5. Solve the inequality
6. Interpret answer in context

## Key Words and Phrases

| Phrase | Symbol |
|--------|--------|
| Greater than | > |
| Less than | < |
| At least | ≥ |
| At most | ≤ |
| No more than | ≤ |
| No less than | ≥ |
| More than | > |
| Fewer than | < |
| Minimum | ≥ |
| Maximum | ≤ |

## Quick Reference

| Inequality | Read As | Number Line |
|------------|---------|-------------|
| x < 3 | x less than 3 | ○ at 3, arrow left |
| x > 3 | x greater than 3 | ○ at 3, arrow right |
| x ≤ 3 | x at most 3 | ● at 3, arrow left |
| x ≥ 3 | x at least 3 | ● at 3, arrow right |

## Practice Tips

- Always check if you need to flip the sign
- Test a value to verify your solution
- Draw number lines clearly with correct circles
- Remember: ≤ and ≥ include the endpoint
- Word problems: translate carefully to inequality symbols
- Keep track of negative signs when distributing`
    }
  });

  console.log('✅ Updated: linear-inequalities-algebra1');

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
