import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 8 Math topics - Batch 2 (2 topics)...\n');

  // Topic 1: Linear Equations
  await prisma.topic.updateMany({
    where: {
      slug: 'linear-equations'
    },
    data: {
      textContent: `# Linear Equations

Linear equations are the foundation of algebra! They represent straight-line relationships and appear everywhere in the real world. Understanding how to write, graph, and use linear equations opens doors to advanced mathematics and practical problem-solving.

---

## What Is a Linear Equation?

A **linear equation** is an equation whose graph is a straight line.

**General form:** Ax + By = C (where A, B, C are constants)

**Most common form:** y = mx + b (slope-intercept form)

**Characteristics:**
- Variables have exponent of 1 (no x², x³, etc.)
- Graph is always a straight line
- Can have one or two variables

**Examples of linear equations:**
- y = 2x + 3
- 3x + 4y = 12
- y = -5x
- x = 7
- y = 4

**NOT linear equations:**
- y = x² (parabola)
- y = 1/x (hyperbola)
- xy = 6 (hyperbola)

---

## Slope-Intercept Form

**y = mx + b**

Where:
- **m** = slope (steepness and direction)
- **b** = y-intercept (where line crosses y-axis)

This is the most useful form for graphing and understanding lines!

**Example 1:** y = 3x + 2
- Slope (m) = 3
- Y-intercept (b) = 2
- Line rises 3 units for every 1 unit right
- Crosses y-axis at (0, 2)

**Example 2:** y = -2x + 5
- Slope (m) = -2
- Y-intercept (b) = 5
- Line falls 2 units for every 1 unit right
- Crosses y-axis at (0, 5)

**Example 3:** y = (1/2)x - 3
- Slope (m) = 1/2
- Y-intercept (b) = -3
- Line rises 1 unit for every 2 units right
- Crosses y-axis at (0, -3)

---

## Converting to Slope-Intercept Form

**Goal:** Solve for y to get y = mx + b

**Example 1:** Convert 2x + y = 8 to slope-intercept form

**Solution:**
2x + y = 8
Subtract 2x from both sides:
y = -2x + 8

**Answer: y = -2x + 8**
- Slope = -2
- Y-intercept = 8

**Example 2:** Convert 3x - 2y = 6 to slope-intercept form

**Solution:**
3x - 2y = 6
Subtract 3x:
-2y = -3x + 6
Divide by -2:
y = (3/2)x - 3

**Answer: y = (3/2)x - 3**
- Slope = 3/2
- Y-intercept = -3

**Example 3:** Convert 4x + 2y = 10 to slope-intercept form

**Solution:**
4x + 2y = 10
-2y = -4x + 10
y = 2x - 5

**Answer: y = 2x - 5**

---

## Graphing Linear Equations

**Method 1: Using Slope and Y-Intercept**

**Steps:**
1. Identify b (y-intercept) and plot point (0, b)
2. Use slope m = rise/run to find another point
3. Draw a line through the points

**Example:** Graph y = 2x + 1

**Step 1:** Y-intercept = 1, plot (0, 1)

**Step 2:** Slope = 2 = 2/1 (rise 2, run 1)
From (0, 1): go up 2, right 1 → (1, 3)

**Step 3:** Draw line through (0, 1) and (1, 3)

**Method 2: Using Two Points (Table of Values)**

**Steps:**
1. Choose x-values (usually include 0)
2. Calculate corresponding y-values
3. Plot points
4. Draw line

**Example:** Graph y = -x + 4

| x | y = -x + 4 | Point |
|---|-----------|-------|
| 0 | -0 + 4 = 4 | (0, 4) |
| 2 | -2 + 4 = 2 | (2, 2) |
| 4 | -4 + 4 = 0 | (4, 0) |

Plot points and draw line through them.

**Method 3: Using Intercepts**

**Steps:**
1. Find x-intercept (set y = 0)
2. Find y-intercept (set x = 0)
3. Plot both intercepts
4. Draw line

**Example:** Graph 2x + 3y = 6

**X-intercept:** Set y = 0
2x + 3(0) = 6
2x = 6
x = 3 → Point (3, 0)

**Y-intercept:** Set x = 0
2(0) + 3y = 6
3y = 6
y = 2 → Point (0, 2)

Plot (3, 0) and (0, 2), draw line.

---

## Writing Linear Equations

**Given slope and y-intercept:**

Simply plug into y = mx + b!

**Example:** Write equation with slope 4 and y-intercept -3

**Answer: y = 4x - 3**

**Given slope and a point:**

**Use point-slope form:** y - y₁ = m(x - x₁)

**Example:** Write equation with slope 2 passing through (3, 5)

**Solution:**
y - 5 = 2(x - 3)
y - 5 = 2x - 6
y = 2x - 1

**Answer: y = 2x - 1**

**Given two points:**

**Step 1:** Find slope using m = (y₂ - y₁)/(x₂ - x₁)
**Step 2:** Use point-slope form with either point

**Example:** Write equation through (1, 3) and (4, 9)

**Solution:**

**Step 1:** Find slope
m = (9 - 3)/(4 - 1) = 6/3 = 2

**Step 2:** Use point-slope form with (1, 3)
y - 3 = 2(x - 1)
y - 3 = 2x - 2
y = 2x + 1

**Answer: y = 2x + 1**

---

## Special Linear Equations

**Horizontal Lines:** y = k (constant)
- Slope = 0
- Parallel to x-axis
- Example: y = 5

**Vertical Lines:** x = k (constant)
- Undefined slope
- Parallel to y-axis
- NOT a function!
- Example: x = -2

**Lines through Origin:** y = mx
- Y-intercept = 0
- Passes through (0, 0)
- Example: y = 3x

---

## Parallel and Perpendicular Lines

**Parallel Lines:**
- Have the SAME slope
- Never intersect
- Different y-intercepts

**Example:** y = 2x + 3 and y = 2x - 5 are parallel
(both have slope = 2)

**Perpendicular Lines:**
- Slopes are negative reciprocals
- Intersect at 90° angle
- If one slope is m, other is -1/m

**Example:** y = 3x + 1 and y = (-1/3)x + 4 are perpendicular
- Slopes: 3 and -1/3
- Product: 3 × (-1/3) = -1 ✓

**Finding Parallel Line:**

**Example:** Write equation parallel to y = 2x + 5 passing through (1, 4)

**Solution:**
Same slope: m = 2
Use point-slope: y - 4 = 2(x - 1)
y = 2x + 2

**Answer: y = 2x + 2**

**Finding Perpendicular Line:**

**Example:** Write equation perpendicular to y = 4x - 1 passing through (2, 3)

**Solution:**
Original slope: 4
Perpendicular slope: -1/4
Use point-slope: y - 3 = (-1/4)(x - 2)
y - 3 = (-1/4)x + 1/2
y = (-1/4)x + 7/2

**Answer: y = (-1/4)x + 3.5**

---

## Point-Slope Form

**y - y₁ = m(x - x₁)**

Where:
- m = slope
- (x₁, y₁) = a point on the line

**Useful when you know:**
- The slope
- One point on the line

**Example:** Write equation with slope -3 through point (2, 5)

**Solution:**
y - 5 = -3(x - 2)

Can leave in this form or convert to slope-intercept:
y - 5 = -3x + 6
y = -3x + 11

---

## Standard Form

**Ax + By = C**

Where A, B, C are integers (A should be positive)

**Converting from slope-intercept to standard form:**

**Example:** Convert y = 2x + 3 to standard form

**Solution:**
y = 2x + 3
Subtract 2x from both sides:
-2x + y = 3
Multiply by -1 to make A positive:
2x - y = -3

**Answer: 2x - y = -3**

**Note:** Standard form is useful for finding intercepts quickly!

---

## Real-World Applications

**Cost Equations:**

**Problem:** A taxi charges $3 plus $2 per mile. Write an equation for total cost.

**Solution:**
Let x = miles traveled, y = total cost
Fixed charge: $3 (y-intercept)
Per mile: $2 (slope)

**Equation: y = 2x + 3**

**Temperature Conversion:**

Celsius to Fahrenheit: F = (9/5)C + 32
- Slope: 9/5
- Y-intercept: 32

**Savings:**

**Problem:** You have $50 and save $10 per week. Write equation for savings.

**Solution:**
Starting amount: $50 (y-intercept)
Weekly savings: $10 (slope)

**Equation: y = 10x + 50** (where x = weeks, y = total)

**Phone Plans:**

Plan A: $20/month + $0.10 per text
Equation: y = 0.10x + 20

Plan B: $30/month, unlimited texts
Equation: y = 30 (horizontal line!)

---

## Solving Real-World Problems

**Example:** A plant is 6 cm tall and grows 2 cm per day.

**a) Write equation for height**

h = 2d + 6 (where d = days, h = height)

**b) How tall after 10 days?**

h = 2(10) + 6 = 26 cm

**c) When will it be 20 cm tall?**

20 = 2d + 6
14 = 2d
d = 7 days

---

## Identifying Linear vs. Non-Linear

**Linear (constant rate of change):**
- y = 3x + 2 ✓
- 2x + y = 5 ✓
- y = 7 ✓
- Table with constant slope ✓

**NOT Linear:**
- y = x² (rate of change varies)
- y = 2ˣ (exponential)
- xy = 10 (variables multiply)
- y = 1/x (rational function)

**Check a table:**

| x | y | Change |
|---|---|--------|
| 1 | 5 | - |
| 2 | 7 | +2 |
| 3 | 9 | +2 |
| 4 | 11 | +2 |

Constant change = LINEAR! ✓

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Confusing slope and y-intercept
- In y = 3x + 5, slope is 3 (not 5!)

❌ **Mistake 2:** Sign errors when converting
- Wrong: 2x + y = 8 → y = 2x - 8
- Right: 2x + y = 8 → y = -2x + 8

❌ **Mistake 3:** Thinking vertical lines are y = k
- Wrong: Vertical line through x = 3 is y = 3
- Right: x = 3

❌ **Mistake 4:** Forgetting negative reciprocal for perpendicular
- Wrong: Perpendicular to m = 2 is m = -2
- Right: Perpendicular to m = 2 is m = -1/2

❌ **Mistake 5:** Not simplifying slope
- Not simplified: m = 6/8
- Simplified: m = 3/4

---

## Problem-Solving Strategy

**For graphing:**
1. Convert to y = mx + b if needed
2. Plot y-intercept
3. Use slope to find more points
4. Draw line

**For writing equations:**
1. Identify what you know (slope? points? intercept?)
2. Choose appropriate form
3. Substitute values
4. Simplify if needed

**For applications:**
1. Identify variables
2. Find slope (rate of change)
3. Find y-intercept (starting value)
4. Write equation
5. Use it to answer questions

---

## Quick Reference

**Forms of Linear Equations:**

**Slope-Intercept:** y = mx + b
- m = slope, b = y-intercept
- Best for graphing

**Point-Slope:** y - y₁ = m(x - x₁)
- Best when you know slope and a point

**Standard Form:** Ax + By = C
- Useful for finding intercepts

**Slope Formula:** m = (y₂ - y₁)/(x₂ - x₁)

**Special Lines:**
- Horizontal: y = k (slope = 0)
- Vertical: x = k (undefined slope)

**Parallel Lines:** Same slope

**Perpendicular Lines:** Slopes multiply to -1

---

## Practice Tips

**Tip 1:** Always identify m and b first
- Slope tells you steepness and direction
- Y-intercept tells you starting point

**Tip 2:** Check your graph
- Does it look steep enough?
- Does it cross y-axis at right spot?
- Do your points fit the line?

**Tip 3:** Use (0, 0) to check
- Plug x = 0, y = 0 into equation
- If it works, line passes through origin!

**Tip 4:** Verify with a third point
- After graphing, pick an x-value
- Calculate y using equation
- Check if it's on your line

---

## Summary

**Linear equations** represent straight-line relationships:

**Key forms:**
- Slope-intercept: y = mx + b (most common)
- Point-slope: y - y₁ = m(x - x₁)
- Standard form: Ax + By = C

**Important concepts:**
- Slope (m) shows rate of change
- Y-intercept (b) shows starting value
- Parallel lines have same slope
- Perpendicular lines have negative reciprocal slopes

**Graphing methods:**
- Use slope and y-intercept
- Plot points from table
- Use x and y intercepts

**Real-world applications:**
- Cost calculations
- Growth/decay over time
- Conversions
- Comparisons

Linear equations are fundamental to algebra and appear constantly in mathematics, science, business, and everyday life!`
    }
  });
  console.log('✅ Updated: linear-equations');

  // Topic 2: Systems of Linear Equations
  await prisma.topic.updateMany({
    where: {
      slug: 'systems-linear-equations'
    },
    data: {
      textContent: `# Systems of Linear Equations

What happens when two lines meet? A system of linear equations helps us find that intersection point! Systems appear everywhere in real life - from business decisions to science problems. Let's explore how to solve them!

---

## What Is a System of Linear Equations?

A **system of linear equations** is a set of two or more linear equations with the same variables.

**Example system:**
y = 2x + 1
y = -x + 4

**The solution** is the point(s) where the lines intersect - the (x, y) values that satisfy BOTH equations simultaneously.

---

## Types of Solutions

**One Solution:**
- Lines intersect at exactly one point
- Different slopes
- Most common case

**Example:**
y = 2x + 1
y = -x + 4

These intersect at (1, 3)

**No Solution:**
- Lines are parallel (never intersect)
- Same slope, different y-intercepts
- Inconsistent system

**Example:**
y = 3x + 2
y = 3x - 5

Same slope (3), different intercepts → parallel!

**Infinitely Many Solutions:**
- Lines are identical (same line!)
- Same slope, same y-intercept
- Dependent system

**Example:**
y = 2x + 3
2y = 4x + 6 (simplifies to y = 2x + 3)

Same line → infinite solutions!

---

## Method 1: Graphing

**Steps:**
1. Graph both equations on same coordinate plane
2. Find the intersection point
3. Check the solution in both equations

**Example:** Solve by graphing:
y = x + 1
y = -2x + 4

**Solution:**

**Graph y = x + 1:**
- Y-intercept: (0, 1)
- Slope: 1 (up 1, right 1)
- Points: (0, 1), (1, 2), (2, 3)

**Graph y = -2x + 4:**
- Y-intercept: (0, 4)
- Slope: -2 (down 2, right 1)
- Points: (0, 4), (1, 2), (2, 0)

**Intersection:** Lines cross at (1, 2)

**Check:**
y = x + 1: 2 = 1 + 1 ✓
y = -2x + 4: 2 = -2(1) + 4 = 2 ✓

**Answer: (1, 2)**

**Limitations of graphing:**
- Not precise for non-integer solutions
- Time-consuming
- Hard to see if lines are exactly parallel

---

## Method 2: Substitution

**Best when one equation is already solved for a variable**

**Steps:**
1. Solve one equation for one variable (if not already)
2. Substitute that expression into the other equation
3. Solve for the remaining variable
4. Substitute back to find the other variable
5. Check solution

**Example 1:** Solve:
y = 3x - 2
2x + y = 8

**Solution:**

**Step 1:** First equation already solved for y ✓

**Step 2:** Substitute y = 3x - 2 into second equation
2x + (3x - 2) = 8

**Step 3:** Solve for x
2x + 3x - 2 = 8
5x - 2 = 8
5x = 10
x = 2

**Step 4:** Substitute x = 2 into y = 3x - 2
y = 3(2) - 2 = 6 - 2 = 4

**Step 5:** Check in both equations
y = 3x - 2: 4 = 3(2) - 2 = 4 ✓
2x + y = 8: 2(2) + 4 = 8 ✓

**Answer: (2, 4)**

**Example 2:** Solve:
x + 2y = 7
3x - y = 5

**Solution:**

**Step 1:** Solve first equation for x
x = 7 - 2y

**Step 2:** Substitute into second equation
3(7 - 2y) - y = 5

**Step 3:** Solve for y
21 - 6y - y = 5
21 - 7y = 5
-7y = -16
y = 16/7

**Step 4:** Substitute back
x = 7 - 2(16/7) = 7 - 32/7 = 49/7 - 32/7 = 17/7

**Answer: (17/7, 16/7)** or approximately (2.43, 2.29)

---

## Method 3: Elimination (Addition)

**Best when coefficients line up nicely**

**Steps:**
1. Arrange equations in standard form (Ax + By = C)
2. Multiply one or both equations to make coefficients of one variable opposites
3. Add equations to eliminate that variable
4. Solve for remaining variable
5. Substitute back to find other variable
6. Check solution

**Example 1:** Solve:
2x + 3y = 12
x - 3y = -3

**Solution:**

**Step 1:** Already in standard form ✓

**Step 2:** The y-coefficients are already opposites (3 and -3) ✓

**Step 3:** Add equations
2x + 3y = 12
+ (x - 3y = -3)
_______________
3x + 0y = 9
3x = 9
x = 3

**Step 4:** Substitute x = 3 into first equation
2(3) + 3y = 12
6 + 3y = 12
3y = 6
y = 2

**Step 5:** Check
2x + 3y = 12: 2(3) + 3(2) = 6 + 6 = 12 ✓
x - 3y = -3: 3 - 3(2) = 3 - 6 = -3 ✓

**Answer: (3, 2)**

**Example 2:** Solve (requires multiplication):
3x + 2y = 16
5x - y = 7

**Solution:**

**Step 1:** Standard form ✓

**Step 2:** Multiply second equation by 2 to make y-coefficients opposites
3x + 2y = 16
2(5x - y = 7) → 10x - 2y = 14

**Step 3:** Add
3x + 2y = 16
+ (10x - 2y = 14)
_______________
13x = 30
x = 30/13

**Step 4:** Substitute into 5x - y = 7
5(30/13) - y = 7
150/13 - y = 7
-y = 7 - 150/13 = 91/13 - 150/13 = -59/13
y = 59/13

**Answer: (30/13, 59/13)** or approximately (2.31, 4.54)

**Example 3:** Solve (both need multiplication):
2x + 3y = 13
3x + 4y = 18

**Solution:**

**Step 1:** Multiply first by 3, second by -2 to eliminate x
6x + 9y = 39
-6x - 8y = -36

**Step 2:** Add
y = 3

**Step 3:** Substitute y = 3 into 2x + 3y = 13
2x + 3(3) = 13
2x + 9 = 13
2x = 4
x = 2

**Answer: (2, 3)**

---

## Identifying No Solution or Infinite Solutions

**No Solution (Parallel Lines):**

**Example:**
2x + y = 5
2x + y = 8

When you try to solve:
2x + y = 5
-(2x + y = 8)
___________
0 = -3 (FALSE!)

**Result:** No solution (inconsistent)

**Infinite Solutions (Same Line):**

**Example:**
x + 2y = 6
2x + 4y = 12

When you try to solve:
2(x + 2y = 6) → 2x + 4y = 12
-(2x + 4y = 12)
_______________
0 = 0 (TRUE!)

**Result:** Infinitely many solutions (dependent)

---

## Real-World Applications

**Business Problem:**

**Problem:** Movie tickets cost $8 for adults and $5 for children. A group buys 20 tickets for $115. How many of each?

**Solution:**

Let a = adult tickets, c = child tickets

**Equation 1:** a + c = 20 (total tickets)
**Equation 2:** 8a + 5c = 115 (total cost)

**Solve by substitution:**
From equation 1: a = 20 - c

Substitute into equation 2:
8(20 - c) + 5c = 115
160 - 8c + 5c = 115
160 - 3c = 115
-3c = -45
c = 15

Then: a = 20 - 15 = 5

**Answer: 5 adult tickets, 15 child tickets**

**Mixture Problem:**

**Problem:** How many liters of 20% acid solution and 50% acid solution should be mixed to get 30 liters of 35% acid solution?

**Solution:**

Let x = liters of 20% solution, y = liters of 50% solution

**Equation 1:** x + y = 30 (total volume)
**Equation 2:** 0.20x + 0.50y = 0.35(30) = 10.5 (acid amount)

**Solve:**
From equation 1: y = 30 - x

Substitute:
0.20x + 0.50(30 - x) = 10.5
0.20x + 15 - 0.50x = 10.5
-0.30x = -4.5
x = 15

Then: y = 30 - 15 = 15

**Answer: 15 L of 20% solution, 15 L of 50% solution**

**Break-Even Analysis:**

**Problem:** Company A charges $50 setup + $10 per item. Company B charges $20 per item with no setup fee. When do they cost the same?

**Solution:**

Cost A: y = 10x + 50
Cost B: y = 20x

Set equal:
10x + 50 = 20x
50 = 10x
x = 5

**Answer: At 5 items, both cost $100 (break-even point)**

---

## Choosing the Best Method

**Use Graphing when:**
- Quick estimate needed
- Visual representation helpful
- Solutions are integers

**Use Substitution when:**
- One variable is already isolated
- Equations like y = mx + b
- Fractions can be avoided

**Use Elimination when:**
- Both equations in standard form
- Coefficients are easy to match
- No variable is isolated

---

## Common Mistakes to Avoid

❌ **Mistake 1:** Forgetting to multiply ALL terms
- Wrong: 2(3x + y = 5) → 6x + y = 10
- Right: 2(3x + y = 5) → 6x + 2y = 10

❌ **Mistake 2:** Sign errors when subtracting
- Be careful with negatives!
- Subtracting an equation = multiply by -1 then add

❌ **Mistake 3:** Not checking the solution
- Always verify in BOTH original equations

❌ **Mistake 4:** Stopping after finding one variable
- You need both x AND y!

❌ **Mistake 5:** Mixing up coordinates
- Solution is (x, y), not (y, x)

---

## Problem-Solving Strategy

**Step 1:** Define variables clearly

**Step 2:** Write two equations from the problem

**Step 3:** Choose best solution method
- Graphing, substitution, or elimination?

**Step 4:** Solve the system carefully

**Step 5:** Check the solution in both equations

**Step 6:** Answer in context
- Include units!
- Answer the question asked

---

## Quick Reference

**Three Solution Methods:**

**Graphing:**
- Graph both lines
- Find intersection point

**Substitution:**
- Solve for one variable
- Substitute into other equation

**Elimination:**
- Make coefficients opposites
- Add equations to eliminate variable

**Types of Solutions:**
- **One solution:** Lines intersect (different slopes)
- **No solution:** Parallel lines (same slope, different intercepts)
- **Infinite solutions:** Same line (identical equations)

**Checking for Special Cases:**
- Eliminate variable → 0 = 0? Infinite solutions
- Eliminate variable → 0 = (non-zero)? No solution

---

## Practice Tips

**Tip 1:** Organize your work
- Write equations clearly
- Show each step
- Keep = signs aligned

**Tip 2:** Check for easy elimination first
- Look for coefficients that are already opposites
- Or same coefficients (subtract equations)

**Tip 3:** Use fractions carefully
- Can multiply to clear denominators
- Or use calculator for decimal approximations

**Tip 4:** Make a plan before starting
- Which method seems easiest?
- What's the first step?

**Tip 5:** Verify your answer
- Plug back into BOTH original equations
- Does it make sense in context?

---

## Summary

**Systems of linear equations** have two or more equations to solve together:

**Solution types:**
- One solution (intersection point)
- No solution (parallel lines)
- Infinitely many solutions (same line)

**Solution methods:**
- **Graphing:** Visual, good for estimates
- **Substitution:** Best when variable isolated
- **Elimination:** Best for standard form

**Real-world applications:**
- Business and money problems
- Mixture problems
- Break-even analysis
- Comparison problems

**Key skill:** Translate word problems into two equations, then solve using the most efficient method!

Systems of equations are essential tools for solving complex real-world problems in business, science, engineering, and everyday life!`
    }
  });
  console.log('✅ Updated: systems-linear-equations');

  console.log('\n✨ Successfully updated 2 topics!');
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
