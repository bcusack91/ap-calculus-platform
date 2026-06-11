import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 2 (3 topics)...\n');

  // Topic 1: Absolute Value Equations (absolute-value-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'absolute-value-algebra1' },
    data: {
      textContent: `# Absolute Value Equations

## What is Absolute Value?

**Absolute value** is the distance a number is from zero on the number line. Distance is always positive or zero, never negative.

The absolute value of a number x is written as |x|.

Examples:
- |5| = 5 (5 is 5 units from zero)
- |-5| = 5 (-5 is also 5 units from zero)
- |0| = 0 (0 is 0 units from zero)
- |-3.7| = 3.7
- |2 - 7| = |-5| = 5

## Key Property of Absolute Value

The absolute value makes all numbers non-negative:
- If x ≥ 0, then |x| = x
- If x < 0, then |x| = -x

Example: |-8| = -(-8) = 8

## What is an Absolute Value Equation?

An **absolute value equation** is an equation that contains an absolute value expression.

Examples:
- |x| = 5
- |x - 3| = 7
- |2x + 1| = 9
- 2|x - 4| + 3 = 11

## Why Two Solutions?

Most absolute value equations have TWO solutions because two different numbers can have the same absolute value.

Example: |x| = 5
Both x = 5 and x = -5 work because:
- |5| = 5 ✓
- |-5| = 5 ✓

Think about it: What numbers are 5 units away from zero? Both 5 and -5!

## Solving Basic Absolute Value Equations

**Form:** |x| = a (where a ≥ 0)

**Solution:** x = a or x = -a

Example 1: |x| = 7
Solution: x = 7 or x = -7

Check:
- |7| = 7 ✓
- |-7| = 7 ✓

Example 2: |x| = 12
Solution: x = 12 or x = -12

Example 3: |x| = 0
Solution: x = 0 (only one solution when a = 0)

## Solving |ax + b| = c

**Steps:**
1. Isolate the absolute value expression
2. Set up two equations:
   - ax + b = c (positive case)
   - ax + b = -c (negative case)
3. Solve both equations
4. Check both solutions

Example 1: |x + 3| = 8

Step 1: Already isolated

Step 2: Set up two equations
Case 1: x + 3 = 8
Case 2: x + 3 = -8

Step 3: Solve both
Case 1: x = 5
Case 2: x = -11

Step 4: Check
- |5 + 3| = |8| = 8 ✓
- |-11 + 3| = |-8| = 8 ✓

Solution: x = 5 or x = -11

Example 2: |2x - 1| = 7

Case 1: 2x - 1 = 7
2x = 8
x = 4

Case 2: 2x - 1 = -7
2x = -6
x = -3

Check:
- |2(4) - 1| = |7| = 7 ✓
- |2(-3) - 1| = |-7| = 7 ✓

Solution: x = 4 or x = -3

Example 3: |3x + 5| = 4

Case 1: 3x + 5 = 4
3x = -1
x = -1/3

Case 2: 3x + 5 = -4
3x = -9
x = -3

Solution: x = -1/3 or x = -3

## Isolating the Absolute Value First

If the absolute value is not already isolated, isolate it BEFORE setting up two equations.

Example 1: 2|x - 3| = 10

Step 1: Divide both sides by 2
|x - 3| = 5

Step 2: Set up two equations
x - 3 = 5  or  x - 3 = -5

Step 3: Solve
x = 8  or  x = -2

Example 2: |x + 1| + 5 = 12

Step 1: Subtract 5 from both sides
|x + 1| = 7

Step 2: Set up two equations
x + 1 = 7  or  x + 1 = -7

Step 3: Solve
x = 6  or  x = -8

Example 3: 3|2x - 4| - 5 = 10

Step 1: Add 5 to both sides
3|2x - 4| = 15

Step 2: Divide by 3
|2x - 4| = 5

Step 3: Set up two equations
2x - 4 = 5  or  2x - 4 = -5

Step 4: Solve
2x = 9       or  2x = -1
x = 4.5      or  x = -0.5

## Special Cases

**Case 1: |expression| = 0**
Only ONE solution (the expression equals 0)

Example: |x - 5| = 0
x - 5 = 0
x = 5 (only solution)

**Case 2: |expression| = negative number**
NO SOLUTION (absolute value cannot be negative)

Example: |x + 2| = -3
No solution (absolute value is never negative)

**Case 3: Expression equals its negative**
Example: |2x - 6| = 6 - 2x
This happens when the expression is ≤ 0

2x - 6 = 6 - 2x
4x = 12
x = 3

Check: |2(3) - 6| = |0| = 0 and 6 - 2(3) = 0 ✓

## Absolute Value with Variables on Both Sides

**Form:** |ax + b| = cx + d

This is more complex. Consider when the right side can be positive or negative.

Example: |x - 2| = x + 4

Case 1: x - 2 = x + 4
-2 = 4 (no solution from this case)

Case 2: x - 2 = -(x + 4)
x - 2 = -x - 4
2x = -2
x = -1

Check: |-1 - 2| = |-3| = 3 and -1 + 4 = 3 ✓

Solution: x = -1

## Solving Equations with Two Absolute Values

**Form:** |expression₁| = |expression₂|

This means the expressions are equal OR opposites.

Set up two equations:
- expression₁ = expression₂
- expression₁ = -(expression₂)

Example: |2x - 1| = |x + 3|

Case 1: 2x - 1 = x + 3
x = 4

Case 2: 2x - 1 = -(x + 3)
2x - 1 = -x - 3
3x = -2
x = -2/3

Check both solutions in original equation:
- For x = 4: |2(4) - 1| = |7| = 7 and |4 + 3| = |7| = 7 ✓
- For x = -2/3: |2(-2/3) - 1| = |-7/3| = 7/3 and |-2/3 + 3| = |7/3| = 7/3 ✓

Solution: x = 4 or x = -2/3

## Graphical Interpretation

The solutions to |x - a| = b are the x-values where the distance from x to a equals b.

Example: |x - 3| = 5
Find all x-values that are 5 units away from 3
x = 3 + 5 = 8  or  x = 3 - 5 = -2

On a number line:
-2 is 5 units to the left of 3
8 is 5 units to the right of 3

## Common Mistakes to Avoid

1. **Forgetting the negative case**
   Wrong: |x + 2| = 5, so x + 2 = 5, x = 3 (missing x = -7)
   Right: Set up BOTH x + 2 = 5 and x + 2 = -5

2. **Not isolating absolute value first**
   For 2|x| + 3 = 11, must get |x| = 4 before setting up two equations

3. **Thinking absolute value can be negative**
   |x| = -5 has NO solution

4. **Not checking solutions**
   Sometimes algebraic solutions don't work in original equation

5. **Distributing negative incorrectly**
   -(2x + 3) = -2x - 3, not -2x + 3

## Checking Your Solutions

Always substitute solutions back into the ORIGINAL equation.

Example: Solve |2x - 3| = 5
Solutions: x = 4 or x = -1

Check x = 4:
|2(4) - 3| = |8 - 3| = |5| = 5 ✓

Check x = -1:
|2(-1) - 3| = |-2 - 3| = |-5| = 5 ✓

Both solutions work!

## Real-World Applications

Absolute value equations model situations involving distance, tolerance, and error.

**Example 1: Manufacturing Tolerance**
A bolt must be 5 cm long with a tolerance of ±0.2 cm.
|length - 5| ≤ 0.2
Acceptable lengths: 4.8 cm to 5.2 cm

**Example 2: Temperature Range**
The temperature should be 70°F, varying by at most 3°.
|T - 70| ≤ 3
Acceptable range: 67°F to 73°F

**Example 3: Distance**
Two cars start from the same point and drive in opposite directions. When are they 100 miles apart?
If they each travel x miles: |x - (-x)| = |2x| = 100
So 2x = 100, x = 50 miles each

## Problem-Solving Strategy

1. Isolate the absolute value expression
2. Check if the right side is positive, zero, or negative
   - Negative: no solution
   - Zero: one solution
   - Positive: usually two solutions
3. Set up two equations (positive and negative cases)
4. Solve both equations
5. Check all solutions in the original equation
6. Reject any solutions that don't work

## Absolute Value Inequalities (Preview)

While this topic focuses on equations, you'll later learn:
- |x| < a means -a < x < a (between)
- |x| > a means x < -a or x > a (outside)

## Quick Reference

| Equation Type | Setup | Number of Solutions |
|---------------|-------|---------------------|
| \|x\| = a (a > 0) | x = ±a | 2 solutions |
| \|x\| = 0 | x = 0 | 1 solution |
| \|x\| = a (a < 0) | No solution | 0 solutions |
| \|ax + b\| = c | ax + b = ±c | Usually 2 |
| \|expr₁\| = \|expr₂\| | expr₁ = ±expr₂ | Usually 2 |

## Practice Tips

- Always isolate the absolute value first
- Set up both positive and negative cases
- Be systematic in your work
- Always check your solutions
- Remember: absolute value is never negative
- Draw number lines to visualize distance
- Look for special cases (0, negative, variables on both sides)
- Practice with different types of problems`
    }
  });

  console.log('✅ Updated: absolute-value-algebra1');

  // Topic 2: Linear Equation Word Problems (word-problems-linear-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'word-problems-linear-algebra1' },
    data: {
      textContent: `# Linear Equation Word Problems

## Introduction to Word Problems

Word problems translate real-world situations into mathematical equations. The key is understanding the language and identifying the mathematical relationships.

**Why Word Problems Matter:**
- They connect math to real life
- They develop critical thinking skills
- They appear on standardized tests
- They show practical applications of algebra

## The Problem-Solving Process

**Step 1: Read and Understand**
- Read the entire problem carefully
- Identify what you're looking for
- Note any given information

**Step 2: Define Variables**
- Choose a letter to represent the unknown
- Write what the variable represents in words

**Step 3: Write an Equation**
- Translate words into math symbols
- Use the relationships described

**Step 4: Solve the Equation**
- Use algebraic techniques
- Show all work step-by-step

**Step 5: Check and Interpret**
- Does the answer make sense?
- Answer the question in a complete sentence
- Check in the original problem (not just the equation)

## Key Words and Phrases

**Addition (+):**
- sum, total, combined, more than, increased by, plus, added to

**Subtraction (-):**
- difference, less than, decreased by, minus, fewer, reduced by, subtracted from

**Multiplication (×):**
- product, times, of, multiplied by, at (rate), per, twice, double, triple

**Division (÷):**
- quotient, divided by, ratio, per, split, shared equally

**Equals (=):**
- is, equals, is equal to, amounts to, results in, the same as

## Number Problems

These involve relationships between numbers.

**Example 1: Consecutive Integers**
Problem: The sum of three consecutive integers is 72. Find the integers.

Let x = first integer
Then x + 1 = second integer
And x + 2 = third integer

Equation: x + (x + 1) + (x + 2) = 72
3x + 3 = 72
3x = 69
x = 23

Answer: The integers are 23, 24, and 25.

Check: 23 + 24 + 25 = 72 ✓

**Example 2: Number Relationships**
Problem: One number is 5 more than twice another number. Their sum is 38. Find the numbers.

Let x = smaller number
Then 2x + 5 = larger number

Equation: x + (2x + 5) = 38
3x + 5 = 38
3x = 33
x = 11

Answer: The numbers are 11 and 27.

Check: 11 + 27 = 38 ✓ and 27 = 2(11) + 5 ✓

**Example 3: Even Consecutive Integers**
Problem: Find three consecutive even integers whose sum is 126.

Let x = first even integer
Then x + 2 = second even integer
And x + 4 = third even integer

Equation: x + (x + 2) + (x + 4) = 126
3x + 6 = 126
3x = 120
x = 40

Answer: The integers are 40, 42, and 44.

## Age Problems

These involve relationships between people's ages.

**Example 1: Current Ages**
Problem: Maria is 3 years older than her brother. The sum of their ages is 27. How old is each?

Let x = brother's age
Then x + 3 = Maria's age

Equation: x + (x + 3) = 27
2x + 3 = 27
2x = 24
x = 12

Answer: Brother is 12, Maria is 15.

**Example 2: Ages in the Future**
Problem: Sarah is 8 years old. In how many years will she be 20?

Let x = number of years
Her future age: 8 + x

Equation: 8 + x = 20
x = 12

Answer: In 12 years.

**Example 3: Ages in the Past**
Problem: Tom is currently 24. His age is 6 more than twice his age 5 years ago. Is this true?

Let x = Tom's age 5 years ago
Then x + 5 = Tom's current age (24)

So x = 19 (Tom was 19 five years ago)
Check: Is 24 six more than twice 19?
2(19) + 6 = 38 + 6 = 44 ≠ 24

This reveals an inconsistency in the problem setup.

## Money and Cost Problems

**Example 1: Shopping**
Problem: You buy 3 notebooks and 2 pens for $11. If each pen costs $1.50, what is the cost of each notebook?

Let x = cost of one notebook
Total: 3x + 2(1.50) = 11

Equation: 3x + 3 = 11
3x = 8
x = 2.67 (approximately)

Answer: Each notebook costs about $2.67.

**Example 2: Ticket Sales**
Problem: Student tickets cost $3 and adult tickets cost $5. If 200 tickets were sold for $840, how many were student tickets?

Let x = number of student tickets
Then 200 - x = number of adult tickets

Equation: 3x + 5(200 - x) = 840
3x + 1000 - 5x = 840
-2x = -160
x = 80

Answer: 80 student tickets were sold.

**Example 3: Budget**
Problem: You have $50 to buy supplies. Binders cost $4 each and you need to buy 3 folders at $2 each. How many binders can you buy?

Let x = number of binders
Cost equation: 4x + 3(2) ≤ 50

4x + 6 ≤ 50
4x ≤ 44
x ≤ 11

Answer: You can buy at most 11 binders.

## Geometry Problems

**Example 1: Perimeter**
Problem: The perimeter of a rectangle is 50 cm. The length is 5 cm more than the width. Find the dimensions.

Let w = width
Then w + 5 = length

Perimeter formula: 2w + 2(w + 5) = 50
2w + 2w + 10 = 50
4w = 40
w = 10

Answer: Width is 10 cm, length is 15 cm.

Check: 2(10) + 2(15) = 20 + 30 = 50 ✓

**Example 2: Angles**
Problem: Two angles are supplementary (sum to 180°). One angle is 30° more than twice the other. Find both angles.

Let x = smaller angle
Then 2x + 30 = larger angle

Equation: x + (2x + 30) = 180
3x + 30 = 180
3x = 150
x = 50

Answer: The angles are 50° and 130°.

**Example 3: Triangle**
Problem: The second angle of a triangle is twice the first. The third angle is 20° more than the first. Find all three angles.

Let x = first angle
Then 2x = second angle
And x + 20 = third angle

Sum of angles: x + 2x + (x + 20) = 180
4x + 20 = 180
4x = 160
x = 40

Answer: The angles are 40°, 80°, and 60°.

## Distance, Rate, and Time Problems

Use the formula: Distance = Rate × Time (d = rt)

**Example 1: Travel Time**
Problem: You drive 240 miles at 60 mph. How long does it take?

Using d = rt:
240 = 60t
t = 4

Answer: 4 hours.

**Example 2: Meeting**
Problem: Two cars leave the same point driving in opposite directions. One travels at 50 mph, the other at 60 mph. After how many hours are they 330 miles apart?

Let t = time in hours
Distance apart = distance car 1 + distance car 2

Equation: 50t + 60t = 330
110t = 330
t = 3

Answer: After 3 hours.

**Example 3: Catch Up**
Problem: A car leaves at noon traveling 55 mph. Another car leaves at 1 PM traveling 65 mph on the same route. When does the second car catch up?

Let t = time the second car travels (hours)
Then t + 1 = time the first car travels

When they meet, distances are equal:
65t = 55(t + 1)
65t = 55t + 55
10t = 55
t = 5.5

Answer: The second car catches up at 6:30 PM.

## Percent Problems

**Example 1: Discount**
Problem: A shirt is on sale for 25% off. If the sale price is $30, what was the original price?

Let x = original price
Sale price = original - discount

Equation: x - 0.25x = 30
0.75x = 30
x = 40

Answer: The original price was $40.

**Example 2: Tax**
Problem: The total cost of an item including 8% sales tax is $54. What was the pre-tax price?

Let x = pre-tax price
Total = price + tax

Equation: x + 0.08x = 54
1.08x = 54
x = 50

Answer: The pre-tax price was $50.

## Mixture Problems (Preview)

**Example: Combining Solutions**
Problem: How many liters of 20% acid solution should be mixed with 5 liters of 50% acid solution to get a 30% solution?

Let x = liters of 20% solution

Amount of pure acid from each:
0.20x + 0.50(5) = 0.30(x + 5)
0.20x + 2.5 = 0.30x + 1.5
1 = 0.10x
x = 10

Answer: 10 liters of 20% solution.

## Common Mistakes to Avoid

1. **Not defining the variable clearly**
   Always write what your variable represents!

2. **Translating words incorrectly**
   "5 less than x" is x - 5, NOT 5 - x

3. **Forgetting units**
   Keep track of dollars, hours, miles, etc.

4. **Not checking the answer in context**
   Does a negative age make sense? Can you buy 3.7 tickets?

5. **Answering the wrong question**
   If asked "How old is Maria?" don't just solve for x and stop!

## Problem-Solving Tips

- Draw a picture or diagram when possible
- Make a table to organize information
- Use the variable for the quantity you know least about
- Write formulas you might need (d = rt, P = 2l + 2w, etc.)
- Work backwards from the answer choices if given
- Check reasonableness: Is the answer logical?

## Practice Strategy

1. Start with easier problems to build confidence
2. Identify the problem type (age, money, geometry, etc.)
3. Look for keywords that indicate operations
4. Write the equation before solving
5. Show all steps clearly
6. Always check your work
7. Practice translating English to algebra

## Quick Reference - Common Setups

| Problem Type | Variable Setup | Common Formula |
|-------------|----------------|----------------|
| Consecutive integers | x, x+1, x+2 | Sum or product |
| Age | x = age now | Current, past, future |
| Perimeter rectangle | w, l = w+k | P = 2l + 2w |
| Supplementary angles | x, 180-x | Sum = 180° |
| Distance | d = rt | Distance = rate × time |
| Discount | x = original | Sale = x - discount |

## Word Problem Checklist

Before submitting your answer:
- ☐ Did I define my variable?
- ☐ Did I write an equation?
- ☐ Did I solve correctly?
- ☐ Did I check my solution?
- ☐ Does my answer make sense?
- ☐ Did I answer in a complete sentence?
- ☐ Did I include units if needed?`
    }
  });

  console.log('✅ Updated: word-problems-linear-algebra1');

  // Topic 3: Writing Linear Equations / Slope-Intercept Form (slope-intercept-form-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'slope-intercept-form-algebra1' },
    data: {
      textContent: `# Writing Linear Equations (Slope-Intercept Form)

## What is Slope-Intercept Form?

**Slope-intercept form** is the most common way to write linear equations:

y = mx + b

Where:
- **m** is the slope (rate of change)
- **b** is the y-intercept (where the line crosses the y-axis)
- **x** and **y** are variables

This form is called "slope-intercept" because it directly shows the slope and y-intercept!

## Why Use This Form?

Slope-intercept form is useful because:
- You can immediately identify the slope and y-intercept
- It's easy to graph
- It clearly shows the rate of change and starting value
- It's perfect for real-world applications

## Understanding Slope (m)

**Slope** measures how steep a line is and its direction.

**Formula:** m = rise/run = (change in y)/(change in x) = (y₂ - y₁)/(x₂ - x₁)

**Interpretation:**
- Slope tells you: "For every 1 unit you move right, how much do you move up or down?"
- m = 2 means: "up 2 for every 1 right"
- m = -3 means: "down 3 for every 1 right"
- m = 1/2 means: "up 1 for every 2 right"

**Types of Slope:**

**Positive Slope (m > 0):**
Line rises from left to right
Example: m = 3, the line goes upward

**Negative Slope (m < 0):**
Line falls from left to right
Example: m = -2, the line goes downward

**Zero Slope (m = 0):**
Horizontal line
Example: y = 5 (no x term, so m = 0)

**Undefined Slope:**
Vertical line (cannot be written in slope-intercept form)
Example: x = 3

## Understanding Y-Intercept (b)

The **y-intercept** is the point where the line crosses the y-axis.

Key facts:
- At the y-intercept, x = 0
- Written as the point (0, b)
- Represents the "starting value" in many real-world problems

Examples:
- y = 2x + 5 has y-intercept (0, 5)
- y = -x - 3 has y-intercept (0, -3)
- y = 4x has y-intercept (0, 0)

## Finding Slope from Two Points

Given two points (x₁, y₁) and (x₂, y₂), use:

m = (y₂ - y₁)/(x₂ - x₁)

**Example 1:** Find slope through (2, 5) and (6, 13)

m = (13 - 5)/(6 - 2)
m = 8/4
m = 2

**Example 2:** Find slope through (-1, 4) and (3, -2)

m = (-2 - 4)/(3 - (-1))
m = -6/4
m = -3/2

**Example 3:** Find slope through (2, 5) and (7, 5)

m = (5 - 5)/(7 - 2)
m = 0/5
m = 0 (horizontal line)

## Writing Equations Given Slope and Y-Intercept

This is the easiest case - just substitute into y = mx + b!

**Example 1:** Write equation with slope 3 and y-intercept -2

m = 3, b = -2
y = 3x - 2

**Example 2:** Write equation with slope -1/2 and y-intercept 4

m = -1/2, b = 4
y = (-1/2)x + 4

**Example 3:** Write equation with slope 0 and y-intercept 7

m = 0, b = 7
y = 0x + 7
y = 7 (horizontal line)

## Writing Equations Given Slope and One Point

**Steps:**
1. Use y = mx + b
2. Substitute the slope for m
3. Substitute the point's coordinates for x and y
4. Solve for b
5. Write final equation

**Example 1:** Write equation with slope 2 passing through (3, 8)

Step 1: y = mx + b
Step 2: y = 2x + b
Step 3: Substitute (3, 8)
8 = 2(3) + b
8 = 6 + b
b = 2
Step 4: y = 2x + 2

Check: Does (3, 8) work? 8 = 2(3) + 2 = 8 ✓

**Example 2:** Write equation with slope -3 passing through (1, 5)

y = -3x + b
5 = -3(1) + b
5 = -3 + b
b = 8

Equation: y = -3x + 8

**Example 3:** Write equation with slope 1/2 passing through (4, 7)

y = (1/2)x + b
7 = (1/2)(4) + b
7 = 2 + b
b = 5

Equation: y = (1/2)x + 5

## Writing Equations Given Two Points

**Steps:**
1. Find the slope using m = (y₂ - y₁)/(x₂ - x₁)
2. Use the slope and one of the points
3. Substitute into y = mx + b
4. Solve for b
5. Write final equation

**Example 1:** Write equation through (1, 3) and (5, 11)

Step 1: Find slope
m = (11 - 3)/(5 - 1) = 8/4 = 2

Step 2: Use m = 2 and point (1, 3)
3 = 2(1) + b
3 = 2 + b
b = 1

Equation: y = 2x + 1

Check with other point (5, 11):
11 = 2(5) + 1 = 11 ✓

**Example 2:** Write equation through (-2, 7) and (3, -3)

Step 1: Find slope
m = (-3 - 7)/(3 - (-2)) = -10/5 = -2

Step 2: Use m = -2 and point (3, -3)
-3 = -2(3) + b
-3 = -6 + b
b = 3

Equation: y = -2x + 3

**Example 3:** Write equation through (0, 4) and (2, 10)

Step 1: Find slope
m = (10 - 4)/(2 - 0) = 6/2 = 3

Step 2: Notice (0, 4) is the y-intercept!
So b = 4 immediately

Equation: y = 3x + 4

## Writing Equations from a Graph

**Method 1:** Identify slope and y-intercept directly
- Find where line crosses y-axis (that's b)
- Count rise/run between two clear points (that's m)
- Write y = mx + b

**Method 2:** Use two points from the graph
- Identify coordinates of two points
- Calculate slope
- Find y-intercept
- Write equation

**Example:** Graph shows line through (0, 2) and (3, 8)

Y-intercept: (0, 2), so b = 2
Slope: m = (8 - 2)/(3 - 0) = 6/3 = 2

Equation: y = 2x + 2

## Parallel Lines

**Parallel lines** have the SAME slope but different y-intercepts.

**Example 1:** Write equation parallel to y = 3x + 1 through (2, 10)

Parallel means same slope: m = 3
Using point (2, 10):
10 = 3(2) + b
10 = 6 + b
b = 4

Equation: y = 3x + 4

**Example 2:** Write equation parallel to y = -2x - 5 with y-intercept 3

Same slope: m = -2
Given y-intercept: b = 3

Equation: y = -2x + 3

## Perpendicular Lines

**Perpendicular lines** have slopes that are negative reciprocals.

If line 1 has slope m₁, perpendicular line has slope m₂ = -1/m₁

Key relationship: m₁ × m₂ = -1

**Example 1:** Write equation perpendicular to y = 2x + 1 through (4, 5)

Original slope: m₁ = 2
Perpendicular slope: m₂ = -1/2

Using point (4, 5):
5 = (-1/2)(4) + b
5 = -2 + b
b = 7

Equation: y = (-1/2)x + 7

**Example 2:** Write equation perpendicular to y = -3x + 2 through (6, 1)

Original slope: m₁ = -3
Perpendicular slope: m₂ = -1/(-3) = 1/3

Using point (6, 1):
1 = (1/3)(6) + b
1 = 2 + b
b = -1

Equation: y = (1/3)x - 1

## Converting to Slope-Intercept Form

If an equation is in standard form (Ax + By = C), solve for y to get slope-intercept form.

**Example 1:** Convert 2x + 3y = 12 to slope-intercept form

3y = -2x + 12
y = (-2/3)x + 4

Slope: m = -2/3, y-intercept: b = 4

**Example 2:** Convert 5x - 2y = 10 to slope-intercept form

-2y = -5x + 10
y = (5/2)x - 5

**Example 3:** Convert x + y = 7 to slope-intercept form

y = -x + 7

Slope: m = -1, y-intercept: b = 7

## Real-World Applications

Slope-intercept form naturally fits many real situations:

**Example 1: Phone Plan**
A phone plan costs $30/month plus $0.10 per text message.

Let x = number of texts
Let y = total cost

Equation: y = 0.10x + 30
- Slope (0.10): cost per text
- Y-intercept (30): base monthly fee

**Example 2: Temperature Conversion**
Fahrenheit to Celsius: C = (5/9)(F - 32)

Rearranged: C = (5/9)F - 160/9
- Slope (5/9): rate of change
- Y-intercept (-160/9): offset

**Example 3: Car Rental**
Rent a car for $40 plus $0.25 per mile driven.

Equation: y = 0.25x + 40
- x: miles driven
- y: total cost
- Slope: $0.25 per mile
- Y-intercept: $40 base fee

**Example 4: Water Draining**
A pool with 1000 gallons drains at 50 gallons per hour.

Equation: y = -50x + 1000
- x: hours
- y: gallons remaining
- Slope: -50 (negative = decreasing)
- Y-intercept: 1000 (starting amount)

## Common Mistakes to Avoid

1. **Confusing m and b**
   In y = 3x + 5: slope is 3, not 5!

2. **Sign errors with negative slopes**
   y = -2x + 3, not y = 2x - 3

3. **Not simplifying fractions**
   Write y = (2/4)x + 1 as y = (1/2)x + 1

4. **Wrong order in slope formula**
   m = (y₂ - y₁)/(x₂ - x₁), be consistent!

5. **Forgetting negative reciprocal for perpendicular**
   Perpendicular to m = 2 is m = -1/2, not m = 1/2

## Problem-Solving Strategy

**Given slope and y-intercept:** Direct substitution
**Given slope and point:** Substitute and solve for b
**Given two points:** Find slope first, then find b
**From a graph:** Identify points and calculate
**Parallel lines:** Same slope, different b
**Perpendicular lines:** Negative reciprocal slope

## Quick Reference

| Given Information | Strategy |
|-------------------|----------|
| m and b | Write y = mx + b directly |
| m and (x₁, y₁) | Substitute point, solve for b |
| (x₁, y₁) and (x₂, y₂) | Find m, then find b |
| Graph | Identify b, calculate m |
| Parallel to y = mx + b | Use same m, find new b |
| Perpendicular to y = mx + b | Use m_perp = -1/m, find b |

## Practice Tips

- Always identify what you're given (slope? points? graph?)
- Write y = mx + b and fill in what you know
- Show all substitution steps
- Check your equation with given points
- Practice converting between forms
- Memorize: parallel = same slope, perpendicular = negative reciprocal
- In word problems, identify what slope and y-intercept represent`
    }
  });

  console.log('✅ Updated: slope-intercept-form-algebra1');

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
