import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 6 (3 topics)...\n');

  // Topic 1: The Quadratic Formula (quadratic-formula-detailed-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'quadratic-formula-detailed-algebra1' },
    data: {
      textContent: `# The Quadratic Formula

## Introduction

The **quadratic formula** is a powerful tool that solves ANY quadratic equation, even when factoring is difficult or impossible.

For any quadratic equation in standard form:
ax² + bx + c = 0

The solutions are given by:

**x = (-b ± √(b² - 4ac)) / (2a)**

This formula ALWAYS works for quadratic equations!

## Understanding the Formula

Let's break down each part:

**-b:** The opposite of the coefficient of x

**±:** Plus-or-minus symbol (gives us two solutions)

**√(b² - 4ac):** The square root of the discriminant

**2a:** Twice the coefficient of x²

**The discriminant:** b² - 4ac
This tells us about the nature of the solutions.

## When to Use the Quadratic Formula

**Use the quadratic formula when:**
- The quadratic doesn't factor nicely
- You need exact decimal answers
- You want to be absolutely sure of the solutions
- Factoring seems too difficult

**You might use other methods when:**
- The equation factors easily
- It's in the form x² = k
- You're looking for quick integer solutions

## Step-by-Step Process

**Step 1:** Write equation in standard form (ax² + bx + c = 0)

**Step 2:** Identify a, b, and c

**Step 3:** Substitute into the formula

**Step 4:** Simplify under the square root (the discriminant)

**Step 5:** Simplify the entire expression

**Step 6:** Write two solutions (one with +, one with -)

**Step 7:** Check your solutions

## Example 1: Two Real Solutions

Solve: x² + 5x + 3 = 0

**Step 1:** Already in standard form

**Step 2:** Identify coefficients
- a = 1
- b = 5
- c = 3

**Step 3:** Substitute into formula
x = (-5 ± √(5² - 4(1)(3))) / (2(1))

**Step 4:** Simplify discriminant
x = (-5 ± √(25 - 12)) / 2
x = (-5 ± √13) / 2

**Step 5:** This is simplified (√13 cannot be simplified)

**Step 6:** Two solutions
x = (-5 + √13) / 2  or  x = (-5 - √13) / 2

**Approximate values:**
x ≈ (-5 + 3.606) / 2 ≈ -0.697
x ≈ (-5 - 3.606) / 2 ≈ -4.303

## Example 2: Simplifying Radicals

Solve: x² - 4x + 1 = 0

**Coefficients:**
a = 1, b = -4, c = 1

**Substitute:**
x = (4 ± √((-4)² - 4(1)(1))) / (2(1))
x = (4 ± √(16 - 4)) / 2
x = (4 ± √12) / 2

**Simplify √12:**
√12 = √(4 · 3) = 2√3

x = (4 ± 2√3) / 2

**Factor out 2:**
x = 2(2 ± √3) / 2
x = 2 ± √3

**Solutions:**
x = 2 + √3  or  x = 2 - √3

## Example 3: When a ≠ 1

Solve: 2x² + 7x + 3 = 0

**Coefficients:**
a = 2, b = 7, c = 3

**Substitute:**
x = (-7 ± √(7² - 4(2)(3))) / (2(2))
x = (-7 ± √(49 - 24)) / 4
x = (-7 ± √25) / 4
x = (-7 ± 5) / 4

**Two solutions:**
x = (-7 + 5) / 4 = -2/4 = -1/2
x = (-7 - 5) / 4 = -12/4 = -3

**Check:** This could have been factored as (2x + 1)(x + 3) = 0

## Example 4: Rearranging First

Solve: 3x² = 5x + 2

**Step 1:** Standard form
3x² - 5x - 2 = 0

**Coefficients:**
a = 3, b = -5, c = -2

**Substitute:**
x = (5 ± √((-5)² - 4(3)(-2))) / (2(3))
x = (5 ± √(25 + 24)) / 6
x = (5 ± √49) / 6
x = (5 ± 7) / 6

**Solutions:**
x = (5 + 7) / 6 = 12/6 = 2
x = (5 - 7) / 6 = -2/6 = -1/3

## The Discriminant: b² - 4ac

The **discriminant** tells us the nature of solutions BEFORE we solve!

**If b² - 4ac > 0:** Two different real solutions

**If b² - 4ac = 0:** One repeated real solution (two equal solutions)

**If b² - 4ac < 0:** No real solutions (two complex solutions)

## Using the Discriminant

**Example 1:** How many solutions does x² + 6x + 5 = 0 have?

Calculate discriminant:
b² - 4ac = 6² - 4(1)(5) = 36 - 20 = 16

Since 16 > 0, there are **two different real solutions**.

We could solve: x = (-6 ± 4) / 2, giving x = -1 or x = -5

**Example 2:** How many solutions does x² - 4x + 4 = 0 have?

b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0

Since discriminant = 0, there is **one repeated solution**.

x = (4 ± 0) / 2 = 2

This is (x - 2)² = 0

**Example 3:** How many solutions does x² + 2x + 5 = 0 have?

b² - 4ac = 2² - 4(1)(5) = 4 - 20 = -16

Since -16 < 0, there are **no real solutions**.

The graph doesn't cross the x-axis.

## One Repeated Solution

When the discriminant equals zero, you get one repeated root.

**Example:** x² - 10x + 25 = 0

a = 1, b = -10, c = 25

Discriminant: (-10)² - 4(1)(25) = 100 - 100 = 0

x = (10 ± 0) / 2 = 10/2 = 5

This is a perfect square: (x - 5)² = 0

## Careful with Negative Signs

Be extra careful when b or c is negative!

**Example:** x² - 3x - 4 = 0

a = 1, b = -3, c = -4

x = (-(-3) ± √((-3)² - 4(1)(-4))) / (2(1))
x = (3 ± √(9 + 16)) / 2
x = (3 ± √25) / 2
x = (3 ± 5) / 2

x = 4 or x = -1

**Common mistakes:**
- Writing -b as -3 instead of -(-3) = 3
- Writing -4c as -4(-4) = 16, but forgetting the negative in front

## Simplifying Square Roots

Always simplify radicals in your answer.

**Example:** If you get √50:
√50 = √(25 · 2) = 5√2

**Example:** If you get √72:
√72 = √(36 · 2) = 6√2

**Example:** x = (6 ± √48) / 4

Simplify √48 = √(16 · 3) = 4√3

x = (6 ± 4√3) / 4

Factor out 2:
x = 2(3 ± 2√3) / 4
x = (3 ± 2√3) / 2

## Applications: Projectile Motion

The height of a projectile is often modeled by:
h = -16t² + v₀t + h₀

**Example:** A ball is thrown upward at 64 ft/s from height 6 ft. When does it hit the ground?

Equation: -16t² + 64t + 6 = 0

Divide by -2: 8t² - 32t - 3 = 0

Using quadratic formula:
a = 8, b = -32, c = -3

t = (32 ± √(1024 + 96)) / 16
t = (32 ± √1120) / 16
t = (32 ± 4√70) / 16
t = (8 ± √70) / 4

t ≈ (8 + 8.37) / 4 ≈ 4.09 seconds (positive solution)

We reject the negative time solution.

## Applications: Area Problems

**Example:** A rectangle has length 4 cm more than its width. Area is 60 cm². Find dimensions.

Let w = width
Then w + 4 = length

w(w + 4) = 60
w² + 4w - 60 = 0

Using quadratic formula:
w = (-4 ± √(16 + 240)) / 2
w = (-4 ± √256) / 2
w = (-4 ± 16) / 2

w = 6 or w = -10

Since width must be positive: w = 6 cm, length = 10 cm

## Applications: Number Problems

**Example:** The sum of a number and its reciprocal is 13/6. Find the number.

Let x = the number
Then 1/x = reciprocal

x + 1/x = 13/6

Multiply by 6x: 6x² + 6 = 13x
Rearrange: 6x² - 13x + 6 = 0

x = (13 ± √(169 - 144)) / 12
x = (13 ± √25) / 12
x = (13 ± 5) / 12

x = 18/12 = 3/2  or  x = 8/12 = 2/3

Both solutions work! (They're reciprocals of each other)

## Checking Solutions

Substitute back into the original equation to verify.

**Example:** For x² - 5x + 6 = 0, we get x = 2 or x = 3

Check x = 2: 2² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓
Check x = 3: 3² - 5(3) + 6 = 9 - 15 + 6 = 0 ✓

## Common Mistakes to Avoid

1. **Forgetting the negative sign in -b**
   The formula is -b, not b!

2. **Order of operations in discriminant**
   Calculate b² first, then 4ac, then subtract

3. **Not simplifying radicals**
   √12 should be written as 2√3

4. **Forgetting ± gives TWO solutions**
   Don't just use + or just use -

5. **Division errors**
   Divide ENTIRE numerator by denominator

6. **Sign errors with negative b or c**
   Be extra careful: -(-3) = 3, -4(-2) = 8

## Comparing Methods

**Factoring:**
- Fastest when it works
- Only works with nice integers
- x² + 5x + 6 = 0 → (x+2)(x+3) = 0

**Quadratic Formula:**
- Always works
- More calculation
- Exact answers with radicals
- x² + 5x + 3 = 0 → x = (-5 ± √13)/2

**Completing the Square:**
- Useful for deriving the formula
- Good for vertex form
- More steps than formula

## Practice Strategy

**Level 1:** a = 1, perfect squares
- x² - 6x + 9 = 0

**Level 2:** a = 1, two solutions
- x² + 5x + 3 = 0

**Level 3:** a ≠ 1
- 2x² + 7x + 3 = 0

**Level 4:** Requires simplifying
- x² - 4x + 1 = 0

**Level 5:** Applications
- Projectile motion
- Area problems

## Quick Reference

**The Formula:**
x = (-b ± √(b² - 4ac)) / (2a)

**The Discriminant:**
b² - 4ac

- Positive: 2 real solutions
- Zero: 1 solution
- Negative: 0 real solutions

**Steps:**
1. Standard form
2. Identify a, b, c
3. Substitute into formula
4. Simplify
5. Write both solutions
6. Check

## Tips for Success

- Write the formula at the top of your work
- Show all substitution clearly
- Be careful with negative signs
- Simplify radicals completely
- Check discriminant first to know what to expect
- Always write two solutions (even if they're equal)
- Verify answers when possible
- Practice until the formula becomes automatic`
    }
  });

  console.log('✅ Updated: quadratic-formula-detailed-algebra1');

  // Topic 2: Graphing Quadratic Functions (graphing-quadratics-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'graphing-quadratics-algebra1' },
    data: {
      textContent: `# Graphing Quadratic Functions

## What is a Quadratic Function?

A **quadratic function** has the form:

f(x) = ax² + bx + c  or  y = ax² + bx + c

where a ≠ 0.

The graph of a quadratic function is a **parabola** - a U-shaped curve.

**Key features:**
- Opens up (if a > 0) or down (if a < 0)
- Has a vertex (highest or lowest point)
- Has an axis of symmetry (vertical line through vertex)
- May have 0, 1, or 2 x-intercepts

## The Standard Form

**Standard Form:** y = ax² + bx + c

**What each coefficient tells us:**

**a (leading coefficient):**
- If a > 0: parabola opens UP (∪)
- If a < 0: parabola opens DOWN (∩)
- |a| > 1: narrower parabola (steeper)
- |a| < 1: wider parabola (flatter)

**c (constant term):**
- The y-intercept (where graph crosses y-axis)
- The point (0, c)

**b (middle coefficient):**
- Affects the position of the vertex horizontally
- Used to find axis of symmetry

## Parent Function: y = x²

The simplest quadratic is y = x².

**Key points:**
- Vertex at origin (0, 0)
- Opens upward
- Axis of symmetry: x = 0 (y-axis)
- Symmetric about y-axis

**Table of values:**
| x  | y = x² |
|----|--------|
| -2 | 4      |
| -1 | 1      |
| 0  | 0      |
| 1  | 1      |
| 2  | 4      |

The parabola is symmetric: same y-values for ±x

## The Vertex

The **vertex** is the turning point of the parabola.

**If a > 0:** Vertex is the MINIMUM (lowest point)

**If a < 0:** Vertex is the MAXIMUM (highest point)

**Finding the vertex from y = ax² + bx + c:**

**x-coordinate:** x = -b/(2a)

**y-coordinate:** Substitute x-value into equation

**Example:** Find vertex of y = x² - 4x + 3

x = -(-4)/(2(1)) = 4/2 = 2

y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1

Vertex: (2, -1)

## Axis of Symmetry

The **axis of symmetry** is a vertical line through the vertex.

**Equation:** x = -b/(2a)

This is the same as the x-coordinate of the vertex!

**Example:** y = 2x² + 8x + 5

Axis of symmetry: x = -8/(2·2) = -8/4 = -2

The parabola is symmetric about the line x = -2.

## Finding the Y-Intercept

The **y-intercept** is where the graph crosses the y-axis (when x = 0).

Simply evaluate f(0) = c

**Example:** y = 2x² - 5x + 3
Y-intercept: (0, 3)

## Finding X-Intercepts (Zeros/Roots)

The **x-intercepts** are where the graph crosses the x-axis (when y = 0).

Set y = 0 and solve: ax² + bx + c = 0

Use factoring, quadratic formula, or other methods.

**Example:** Find x-intercepts of y = x² - 5x + 6

Set y = 0: x² - 5x + 6 = 0
Factor: (x - 2)(x - 3) = 0
x = 2 or x = 3

X-intercepts: (2, 0) and (3, 0)

## Number of X-Intercepts

Use the **discriminant** b² - 4ac:

**b² - 4ac > 0:** Two x-intercepts (parabola crosses x-axis twice)

**b² - 4ac = 0:** One x-intercept (parabola touches x-axis at vertex)

**b² - 4ac < 0:** No x-intercepts (parabola doesn't reach x-axis)

**Example 1:** y = x² - 4
Discriminant: 0² - 4(1)(-4) = 16 > 0
Two x-intercepts: x = ±2

**Example 2:** y = x² + 1
Discriminant: 0² - 4(1)(1) = -4 < 0
No x-intercepts

## Graphing Using Key Points

**Step-by-step process:**

**Step 1:** Determine if parabola opens up or down (check sign of a)

**Step 2:** Find vertex using x = -b/(2a), then find y

**Step 3:** Draw axis of symmetry (vertical line through vertex)

**Step 4:** Find y-intercept (0, c)

**Step 5:** Find x-intercepts if they exist (solve ax² + bx + c = 0)

**Step 6:** Plot additional points if needed

**Step 7:** Draw smooth U-shaped curve through points

## Example 1: Complete Graphing

Graph: y = x² - 4x + 3

**Step 1:** a = 1 > 0, opens UP

**Step 2:** Find vertex
x = -(-4)/(2·1) = 2
y = (2)² - 4(2) + 3 = -1
Vertex: (2, -1)

**Step 3:** Axis of symmetry: x = 2

**Step 4:** Y-intercept: (0, 3)

**Step 5:** X-intercepts: x² - 4x + 3 = 0
(x - 1)(x - 3) = 0
x = 1 or x = 3
Points: (1, 0) and (3, 0)

**Step 6:** Use symmetry
If (0, 3) is on the graph, then (4, 3) is also on it (symmetric about x = 2)

**Step 7:** Draw parabola through: (1,0), (2,-1), (3,0), (0,3), (4,3)

## Example 2: Parabola Opening Down

Graph: y = -x² + 2x + 3

**Step 1:** a = -1 < 0, opens DOWN

**Step 2:** Vertex
x = -2/(2·(-1)) = 1
y = -(1)² + 2(1) + 3 = 4
Vertex: (1, 4) - this is the maximum!

**Step 3:** Axis of symmetry: x = 1

**Step 4:** Y-intercept: (0, 3)

**Step 5:** X-intercepts: -x² + 2x + 3 = 0
Multiply by -1: x² - 2x - 3 = 0
(x - 3)(x + 1) = 0
Points: (-1, 0) and (3, 0)

**Step 6:** Plot and draw downward parabola

## Vertex Form

**Vertex form:** y = a(x - h)² + k

where (h, k) is the vertex.

This form makes graphing easier!

**Converting from vertex form to standard form:**
Expand the squared binomial

**Example:** y = 2(x - 3)² + 1

Vertex: (3, 1)
Opens up (a = 2 > 0)
Narrower than y = x² (a = 2 > 1)

Expand to standard form:
y = 2(x² - 6x + 9) + 1
y = 2x² - 12x + 18 + 1
y = 2x² - 12x + 19

## Transformations from y = x²

**y = x² + k:** Vertical shift
- k > 0: shift UP k units
- k < 0: shift DOWN |k| units

**y = (x - h)²:** Horizontal shift
- h > 0: shift RIGHT h units
- h < 0: shift LEFT |h| units

**y = ax²:** Vertical stretch/compression
- a > 1: vertical stretch (narrower)
- 0 < a < 1: vertical compression (wider)
- a < 0: reflection over x-axis

**Example:** y = (x - 2)² + 3

Starting from y = x²:
- Shift right 2 units
- Shift up 3 units
- Vertex moves from (0,0) to (2,3)

## Maximum and Minimum Values

**If a > 0 (opens up):**
- Minimum value at vertex
- No maximum value

**If a < 0 (opens down):**
- Maximum value at vertex
- No minimum value

**Example:** y = -2x² + 8x - 3

Vertex: x = -8/(2·(-2)) = 2
y = -2(2)² + 8(2) - 3 = -8 + 16 - 3 = 5

Since a < 0, maximum value is 5 (at x = 2)

## Domain and Range

**Domain:** All quadratic functions have domain: all real numbers
(-∞, ∞) or {x | x ∈ ℝ}

**Range:** Depends on vertex and direction

**If a > 0 (opens up):**
Range: [k, ∞) where k is y-coordinate of vertex

**If a < 0 (opens down):**
Range: (-∞, k] where k is y-coordinate of vertex

**Example:** y = x² - 4x + 3
Vertex: (2, -1), opens up
Range: [-1, ∞)

## Comparing Parabolas

**Width:**
Determined by |a|
- Larger |a|: narrower parabola
- Smaller |a|: wider parabola

**Example:**
- y = 3x² is narrower than y = x²
- y = (1/2)x² is wider than y = x²
- y = -x² and y = x² have same width (|a| = 1)

## Using a Table of Values

When in doubt, make a table!

**Example:** y = x² + 2x - 3

| x  | y    | Point    |
|----|------|----------|
| -3 | 0    | (-3, 0)  |
| -2 | -3   | (-2, -3) |
| -1 | -4   | (-1, -4) |
| 0  | -3   | (0, -3)  |
| 1  | 0    | (1, 0)   |

Vertex appears to be at (-1, -4)
Verify: x = -2/(2·1) = -1 ✓

## Applications: Projectile Motion

Height of projectile: h(t) = -16t² + v₀t + h₀

The graph is a parabola opening down.

**Example:** Ball thrown at 48 ft/s from ground level
h(t) = -16t² + 48t

Maximum height at vertex:
t = -48/(2·(-16)) = 1.5 seconds
h = -16(1.5)² + 48(1.5) = 36 feet

The ball reaches 36 feet at 1.5 seconds.

## Applications: Business

Profit/Revenue functions often quadratic.

**Example:** Profit = -2x² + 40x - 50
where x is number of items (in hundreds)

Maximum profit at vertex:
x = -40/(2·(-2)) = 10
P = -2(10)² + 40(10) - 50 = 150

Maximum profit is $15,000 (when x = 10 hundreds = 1000 items)

## Applications: Area

**Example:** You have 100 feet of fence. What dimensions maximize the rectangular area?

Let x = width
Then (100 - 2x)/2 = length = 50 - x

Area: A = x(50 - x) = -x² + 50x

Maximum at vertex:
x = -50/(2·(-1)) = 25 feet
Length = 25 feet

Maximum area: 625 square feet (a square!)

## Sketching vs. Precise Graphing

**Quick sketch needs:**
- Vertex
- Direction (up/down)
- Y-intercept
- General shape

**Precise graph needs:**
- Vertex
- Axis of symmetry
- Y-intercept
- X-intercepts
- Additional points
- Scale marked clearly

## Common Mistakes to Avoid

1. **Wrong direction**
   Check sign of a carefully!

2. **Forgetting negative in vertex formula**
   x = -b/(2a), not b/(2a)

3. **Not simplifying vertex coordinates**
   Show actual numbers, not formulas

4. **Assuming parabola crosses x-axis**
   Check discriminant!

5. **Plotting points but not drawing smooth curve**
   Use a smooth U-shape, not line segments

6. **Forgetting axis of symmetry**
   Use it to find additional points easily

## Quick Reference

**Standard Form:** y = ax² + bx + c

**Vertex:** (-b/(2a), f(-b/(2a)))

**Axis of Symmetry:** x = -b/(2a)

**Y-intercept:** (0, c)

**X-intercepts:** Solve ax² + bx + c = 0

**Direction:**
- a > 0: opens up
- a < 0: opens down

**Width:**
- |a| > 1: narrow
- |a| < 1: wide

## Practice Strategy

**Level 1:** Simple parabolas
- y = x²
- y = x² + 3
- y = -x²

**Level 2:** Shifted parabolas
- y = (x - 2)²
- y = (x + 1)² - 4

**Level 3:** Standard form with factoring
- y = x² - 4x + 3

**Level 4:** Need quadratic formula
- y = x² + 4x + 1

**Level 5:** Applications
- Projectile motion
- Business optimization
- Area problems

## Tips for Success

- Always find the vertex first
- Use axis of symmetry to find symmetric points
- Check if parabola opens up or down
- Calculate discriminant to know about x-intercepts
- Plot at least 5 points for accuracy
- Draw smooth curves, not choppy lines
- Label all key points clearly
- Include arrows at ends of parabola
- Practice vertex formula until automatic`
    }
  });

  console.log('✅ Updated: graphing-quadratics-algebra1');

  // Topic 3: Introduction to Functions (functions-basics-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'functions-basics-algebra1' },
    data: {
      textContent: `# Introduction to Functions

## What is a Function?

A **function** is a special relationship between inputs and outputs where each input has exactly ONE output.

Think of a function as a machine:
- You put in an input (x)
- The machine processes it
- You get exactly one output (y)

**Real-life examples:**
- Vending machine: insert money (input) → get item (output)
- Temperature conversion: Fahrenheit (input) → Celsius (output)
- Square function: number (input) → its square (output)

## Function Notation

Instead of writing y = 2x + 3, we can write:

**f(x) = 2x + 3**

Read as: "f of x equals 2x plus 3"

**Parts:**
- **f** is the name of the function (can be any letter)
- **x** is the input variable (independent variable)
- **f(x)** is the output value (dependent variable)
- **f(x)** replaces y

**Other function names:**
- g(x), h(x), F(x), etc.

## Evaluating Functions

**Evaluating** a function means finding the output for a specific input.

**Example 1:** If f(x) = 3x + 5, find f(2)

Substitute x = 2:
f(2) = 3(2) + 5
f(2) = 6 + 5
f(2) = 11

This means when x = 2, the output is 11.

**Example 2:** If g(x) = x² - 4, find g(-3)

g(-3) = (-3)² - 4
g(-3) = 9 - 4
g(-3) = 5

**Example 3:** If h(x) = 2x² + x - 1, find h(0)

h(0) = 2(0)² + 0 - 1
h(0) = -1

**Example 4:** If f(x) = x² + 3x, find f(a)

f(a) = a² + 3a

We just replace x with a!

## Evaluating with Expressions

**Example 1:** If f(x) = x² + 1, find f(x + 2)

Substitute (x + 2) for every x:
f(x + 2) = (x + 2)² + 1
f(x + 2) = x² + 4x + 4 + 1
f(x + 2) = x² + 4x + 5

**Example 2:** If g(x) = 2x - 3, find g(3a)

g(3a) = 2(3a) - 3
g(3a) = 6a - 3

**Example 3:** If h(x) = x², find h(x + h)

h(x + h) = (x + h)²
h(x + h) = x² + 2xh + h²

## Function vs. Not a Function

**The Vertical Line Test:**
A graph represents a function if NO vertical line crosses it more than once.

**Example: Functions**
- y = 2x + 1 (linear) ✓
- y = x² (parabola) ✓
- y = |x| (absolute value) ✓

**Example: Not Functions**
- x² + y² = 1 (circle) ✗
- x = y² (sideways parabola) ✗

These fail because one x-value gives multiple y-values.

## Functions from Tables

A table represents a function if each input appears only ONCE.

**Function:** ✓
| x | y |
|---|---|
| 1 | 3 |
| 2 | 5 |
| 3 | 7 |

Each x has exactly one y.

**Not a function:** ✗
| x | y |
|---|---|
| 1 | 3 |
| 1 | 5 |
| 2 | 7 |

x = 1 has two different outputs!

## Functions from Ordered Pairs

A set of ordered pairs is a function if no two pairs have the same first element with different second elements.

**Function:** {(1, 2), (2, 4), (3, 6)} ✓

**Not a function:** {(1, 2), (1, 3), (2, 5)} ✗
Because (1, 2) and (1, 3) have same input, different outputs.

## Functions from Mappings

A **mapping diagram** shows inputs pointing to outputs.

**Function:** Each input has exactly ONE arrow going out.

**Not a function:** If any input has MULTIPLE arrows going to different outputs.

## Independent and Dependent Variables

**Independent variable (input):**
- The variable you choose freely
- Usually x
- Plotted on horizontal axis

**Dependent variable (output):**
- The variable that depends on input
- Usually y or f(x)
- Plotted on vertical axis

**Example:** In f(x) = 2x + 3
- x is independent (you choose x)
- f(x) is dependent (value depends on what x you chose)

## Types of Functions

**Linear Function:**
f(x) = mx + b
Graph is a straight line
Example: f(x) = 2x + 3

**Quadratic Function:**
f(x) = ax² + bx + c
Graph is a parabola
Example: f(x) = x² - 4

**Absolute Value Function:**
f(x) = |x|
Graph is V-shaped
Example: f(x) = |x - 2|

**Constant Function:**
f(x) = c (always same output)
Graph is horizontal line
Example: f(x) = 5

**Identity Function:**
f(x) = x (output equals input)
Graph is line through origin with slope 1

## Finding Inputs from Outputs

Sometimes we know f(x) and need to find x.

**Example 1:** If f(x) = 3x - 2 and f(x) = 7, find x

Set up equation:
3x - 2 = 7
3x = 9
x = 3

So f(3) = 7

**Example 2:** If g(x) = x² and g(x) = 16, find x

x² = 16
x = ±4

Both x = 4 and x = -4 give output 16.

**Example 3:** If h(x) = 2x + 1 and h(x) = -3, find x

2x + 1 = -3
2x = -4
x = -2

## Domain and Range (Introduction)

**Domain:** The set of all possible INPUT values (x-values)

**Range:** The set of all possible OUTPUT values (y-values or f(x)-values)

**Example 1:** f(x) = x + 5
Domain: all real numbers
Range: all real numbers

**Example 2:** g(x) = x²
Domain: all real numbers
Range: y ≥ 0 (squares are never negative)

**Example 3:** h(x) = 1/x
Domain: all real numbers except 0 (can't divide by 0)
Range: all real numbers except 0

## Real-World Function Examples

**Example 1: Temperature Conversion**
C(F) = (5/9)(F - 32)

Input: Fahrenheit temperature
Output: Celsius temperature

C(32) = (5/9)(32 - 32) = 0°C
C(212) = (5/9)(212 - 32) = 100°C

**Example 2: Cost Function**
C(n) = 50 + 10n

Input: number of items (n)
Output: total cost in dollars

C(5) = 50 + 10(5) = $100
This means 5 items cost $100.

**Example 3: Distance**
d(t) = 60t

Input: time in hours
Output: distance in miles (at 60 mph)

d(3) = 60(3) = 180 miles
After 3 hours, you've traveled 180 miles.

## Function Composition (Preview)

**Composition** means putting one function inside another.

Notation: (f ∘ g)(x) = f(g(x))

Read as: "f of g of x"

**Example:** If f(x) = x + 1 and g(x) = 2x

f(g(x)) = f(2x) = 2x + 1

First apply g, then apply f to the result.

## Why Functions Matter

Functions are everywhere in mathematics and real life:
- **Physics:** distance, velocity, acceleration
- **Economics:** cost, revenue, profit
- **Biology:** population growth
- **Engineering:** stress, strain, load
- **Computer Science:** algorithms, programs
- **Everyday:** recipes, directions, conversions

Understanding functions is key to advanced mathematics!

## Common Mistakes to Avoid

1. **Confusing f(x) with f · x**
   f(x) is NOT f times x, it's function notation

2. **Adding instead of substituting**
   f(2) means replace x with 2, not add 2

3. **Not using parentheses**
   If f(x) = x², then f(2x) = (2x)² = 4x², not 2x²

4. **Thinking every relation is a function**
   Remember: each input needs exactly ONE output

5. **Mixing up domain and range**
   Domain = inputs (x), Range = outputs (y)

## Checking if an Equation Represents a Function

**Method 1: Solve for y**
If you can solve for y and get only one y for each x, it's a function.

**Example:** x + y = 5
Solve: y = 5 - x ✓ Function (one y for each x)

**Example:** x² + y² = 25
Solve: y = ±√(25 - x²) ✗ Not a function (two y-values)

**Method 2: Graph and use vertical line test**

**Method 3: Make a table and check for repeated inputs**

## Function Notation Advantages

**Why use f(x) instead of y?**

1. **Names multiple functions clearly**
   f(x), g(x), h(x) vs. y₁, y₂, y₃

2. **Shows input explicitly**
   f(3) clearly means input is 3

3. **Easier composition**
   f(g(x)) is clearer than nested y's

4. **Better for applications**
   C(n), d(t), P(x) tell you what the variables mean

## Practice Problems Approach

**When evaluating f(a):**
1. Write out the function
2. Replace every x with a (use parentheses!)
3. Simplify following order of operations
4. Write final answer

**When finding x given f(x):**
1. Set f(x) equal to given value
2. Solve the equation for x
3. Check your answer by substituting back

## Quick Reference

**Function Definition:**
Each input has exactly ONE output

**Notation:**
f(x) = expression

**Evaluation:**
f(a) means substitute a for x

**Vertical Line Test:**
Function if no vertical line crosses graph twice

**Domain:**
All possible inputs

**Range:**
All possible outputs

## Practice Strategy

**Level 1:** Simple evaluation
- f(x) = x + 3, find f(5)
- g(x) = 2x, find g(7)

**Level 2:** Quadratic functions
- f(x) = x², find f(-3)
- h(x) = x² + 2x, find h(4)

**Level 3:** Expressions as inputs
- f(x) = x + 1, find f(2x)
- g(x) = x², find g(x + 1)

**Level 4:** Working backwards
- f(x) = 3x - 2, f(x) = 10, find x

**Level 5:** Applications
- Real-world function problems

## Tips for Success

- Always use parentheses when substituting
- Follow order of operations carefully
- Check if relations are functions before evaluating
- Remember f(x) is just another way to write y
- Practice with different function names (f, g, h)
- Understand the input-output relationship
- Use the vertical line test on graphs
- Master evaluation before moving to composition`
    }
  });

  console.log('✅ Updated: functions-basics-algebra1');

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
