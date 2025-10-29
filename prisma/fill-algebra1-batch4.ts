import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 4 (3 topics)...\n');

  // Topic 1: Systems of Equations Word Problems (systems-word-problems-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'systems-word-problems-algebra1' },
    data: {
      textContent: `# Systems of Equations Word Problems

## Introduction

Many real-world problems involve **two unknowns** and **two relationships** between them. These situations require a system of two equations to solve.

**Key Difference from One-Variable Problems:**
- One equation: One unknown, one relationship
- System: Two unknowns, two relationships

## Identifying System Problems

Look for these signs you need a system:
- Two different quantities are unknown
- Two separate pieces of information are given
- The problem involves rates, prices, or quantities of two different items
- Words like "combined," "together," "total" alongside individual descriptions

## The Problem-Solving Process

**Step 1: Read Carefully**
Understand what you're looking for (identify the two unknowns)

**Step 2: Define Variables**
Let x = first unknown
Let y = second unknown
Write clearly what each represents!

**Step 3: Write Two Equations**
Use the given information to create two different equations

**Step 4: Solve the System**
Use substitution, elimination, or graphing

**Step 5: Check and Interpret**
Verify solution works in both equations
Answer in complete sentences with units

## Number Problems

**Example 1: Sum and Difference**
Problem: The sum of two numbers is 25. Their difference is 7. Find the numbers.

Let x = larger number
Let y = smaller number

Equation 1 (sum): x + y = 25
Equation 2 (difference): x - y = 7

Using elimination (add equations):
  x + y = 25
+ x - y = 7
  2x    = 32
  x = 16

Substitute: 16 + y = 25
y = 9

Answer: The numbers are 16 and 9.

Check: 16 + 9 = 25 ✓ and 16 - 9 = 7 ✓

**Example 2: Digit Problem**
Problem: A two-digit number has digits whose sum is 12. If the digits are reversed, the new number is 36 more than the original. Find the number.

Let t = tens digit
Let u = units digit

Original number: 10t + u
Reversed number: 10u + t

Equation 1 (sum of digits): t + u = 12
Equation 2 (reversed is 36 more): 10u + t = (10t + u) + 36

Simplify equation 2:
10u + t = 10t + u + 36
9u - 9t = 36
u - t = 4

System:
t + u = 12
u - t = 4

Add equations: 2u = 16, so u = 8
Then: t + 8 = 12, so t = 4

Answer: The number is 48.

Check: 4 + 8 = 12 ✓ and 84 - 48 = 36 ✓

## Money and Coin Problems

**Example 1: Ticket Sales**
Problem: A theater sold 350 tickets. Adult tickets cost $8 and child tickets cost $5. Total sales were $2,350. How many of each type were sold?

Let a = adult tickets
Let c = child tickets

Equation 1 (number of tickets): a + c = 350
Equation 2 (total money): 8a + 5c = 2350

From equation 1: c = 350 - a
Substitute into equation 2:
8a + 5(350 - a) = 2350
8a + 1750 - 5a = 2350
3a = 600
a = 200

Then: c = 350 - 200 = 150

Answer: 200 adult tickets and 150 child tickets.

Check: 200 + 150 = 350 ✓
8(200) + 5(150) = 1600 + 750 = 2350 ✓

**Example 2: Coin Problem**
Problem: You have 27 coins in quarters and dimes worth $4.95. How many of each coin do you have?

Let q = number of quarters
Let d = number of dimes

Equation 1 (number of coins): q + d = 27
Equation 2 (value in cents): 25q + 10d = 495

From equation 1: d = 27 - q
Substitute:
25q + 10(27 - q) = 495
25q + 270 - 10q = 495
15q = 225
q = 15

Then: d = 27 - 15 = 12

Answer: 15 quarters and 12 dimes.

Check: 15(0.25) + 12(0.10) = 3.75 + 1.20 = 4.95 ✓

**Example 3: Investment**
Problem: You invest $5,000 in two accounts. One earns 3% interest, the other 5%. After one year, you earn $210 in interest. How much was invested in each account?

Let x = amount at 3%
Let y = amount at 5%

Equation 1 (total investment): x + y = 5000
Equation 2 (total interest): 0.03x + 0.05y = 210

From equation 1: y = 5000 - x
Substitute:
0.03x + 0.05(5000 - x) = 210
0.03x + 250 - 0.05x = 210
-0.02x = -40
x = 2000

Then: y = 5000 - 2000 = 3000

Answer: $2,000 at 3% and $3,000 at 5%.

## Mixture Problems

**Example 1: Solution Concentration**
Problem: A chemist needs 10 liters of 30% acid solution. She has 20% and 50% solutions available. How much of each should she mix?

Let x = liters of 20% solution
Let y = liters of 50% solution

Equation 1 (total volume): x + y = 10
Equation 2 (amount of acid): 0.20x + 0.50y = 0.30(10)

Simplify equation 2: 0.20x + 0.50y = 3

Multiply by 10: 2x + 5y = 30

System:
x + y = 10
2x + 5y = 30

From first: x = 10 - y
Substitute: 2(10 - y) + 5y = 30
20 - 2y + 5y = 30
3y = 10
y = 10/3 ≈ 3.33 liters

x = 10 - 10/3 = 20/3 ≈ 6.67 liters

Answer: About 6.67 liters of 20% solution and 3.33 liters of 50% solution.

**Example 2: Nut Mixture**
Problem: A store mixes peanuts ($3/lb) with cashews ($8/lb) to make 20 pounds of mixed nuts worth $5/lb. How many pounds of each should be used?

Let p = pounds of peanuts
Let c = pounds of cashews

Equation 1 (total weight): p + c = 20
Equation 2 (total value): 3p + 8c = 5(20)

Simplify equation 2: 3p + 8c = 100

From equation 1: c = 20 - p
Substitute: 3p + 8(20 - p) = 100
3p + 160 - 8p = 100
-5p = -60
p = 12

Then: c = 20 - 12 = 8

Answer: 12 pounds of peanuts and 8 pounds of cashews.

## Distance, Rate, and Time Problems

Formula: Distance = Rate × Time (d = rt)

**Example 1: Traveling Toward Each Other**
Problem: Two cars are 400 miles apart and drive toward each other. One travels at 50 mph, the other at 60 mph. How long until they meet?

Let t = time until they meet (same for both)
Let d₁ = distance first car travels
Let d₂ = distance second car travels

Equation 1 (total distance): d₁ + d₂ = 400
Equation 2 (using d = rt):
  First car: d₁ = 50t
  Second car: d₂ = 60t

Substitute into equation 1:
50t + 60t = 400
110t = 400
t = 400/110 ≈ 3.64 hours

Answer: They meet in about 3.64 hours (or 3 hours 38 minutes).

**Example 2: Boat in Current**
Problem: A boat travels 30 miles downstream in 2 hours. The return trip upstream takes 3 hours. Find the boat's speed in still water and the current's speed.

Let b = boat speed in still water
Let c = current speed

Downstream speed: b + c
Upstream speed: b - c

Using d = rt:
Equation 1 (downstream): (b + c) × 2 = 30
Equation 2 (upstream): (b - c) × 3 = 30

Simplify:
2b + 2c = 30 → b + c = 15
3b - 3c = 30 → b - c = 10

Add equations:
2b = 25
b = 12.5

Then: 12.5 + c = 15
c = 2.5

Answer: Boat speed is 12.5 mph, current is 2.5 mph.

**Example 3: Round Trip**
Problem: You drive to a destination at 60 mph and return at 40 mph. The total trip takes 5 hours. How far is the destination?

Let d = distance to destination (same both ways)
Let t₁ = time going
Let t₂ = time returning

Using d = rt:
Equation 1: d = 60t₁
Equation 2: d = 40t₂
Equation 3: t₁ + t₂ = 5

From equations 1 and 2: 60t₁ = 40t₂
Simplify: 3t₁ = 2t₂
So: t₂ = (3/2)t₁

Substitute into equation 3:
t₁ + (3/2)t₁ = 5
(5/2)t₁ = 5
t₁ = 2

Then: d = 60(2) = 120

Answer: The destination is 120 miles away.

## Work Rate Problems

Formula: Work = Rate × Time

**Example 1: Working Together**
Problem: One pipe can fill a pool in 6 hours. Another can fill it in 4 hours. How long does it take both pipes together?

Let t = time to fill together

Pipe 1 rate: 1/6 pool per hour
Pipe 2 rate: 1/4 pool per hour
Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 pool per hour

Equation: (5/12)t = 1
t = 12/5 = 2.4 hours

Answer: 2.4 hours (or 2 hours 24 minutes).

**Example 2: Different Work Rates**
Problem: Working alone, John can paint a fence in 8 hours and Mary can paint it in 6 hours. They work together for 2 hours, then Mary leaves. How much longer does John need to finish?

Let x = additional time John works alone

Work done together in 2 hours: 2(1/8 + 1/6) = 2(3/24 + 4/24) = 2(7/24) = 7/12

Work remaining: 1 - 7/12 = 5/12

John finishes at rate 1/8:
(1/8)x = 5/12
x = (5/12) × 8 = 40/12 = 10/3 ≈ 3.33 hours

Answer: About 3.33 hours (or 3 hours 20 minutes).

## Age Problems

**Example 1: Current and Future Ages**
Problem: Sarah is 4 years older than Tom. In 6 years, the sum of their ages will be 36. How old are they now?

Let s = Sarah's current age
Let t = Tom's current age

Equation 1 (current): s = t + 4
Equation 2 (in 6 years): (s + 6) + (t + 6) = 36

Simplify equation 2:
s + t + 12 = 36
s + t = 24

Substitute s = t + 4:
(t + 4) + t = 24
2t = 20
t = 10

Then: s = 10 + 4 = 14

Answer: Tom is 10, Sarah is 14.

## Geometry Problems

**Example 1: Rectangle Dimensions**
Problem: A rectangle's perimeter is 60 cm. The length is twice the width. Find the dimensions.

Let l = length
Let w = width

Equation 1 (relationship): l = 2w
Equation 2 (perimeter): 2l + 2w = 60

Substitute:
2(2w) + 2w = 60
4w + 2w = 60
6w = 60
w = 10

Then: l = 2(10) = 20

Answer: Width is 10 cm, length is 20 cm.

**Example 2: Angles**
Problem: Two angles are complementary (sum to 90°). One angle is 15° more than twice the other. Find both angles.

Let x = smaller angle
Let y = larger angle

Equation 1 (complementary): x + y = 90
Equation 2 (relationship): y = 2x + 15

Substitute:
x + (2x + 15) = 90
3x + 15 = 90
3x = 75
x = 25

Then: y = 2(25) + 15 = 65

Answer: The angles are 25° and 65°.

## Common Mistakes to Avoid

1. **Not defining variables clearly**
   Always write what x and y represent!

2. **Writing only one equation**
   Need TWO equations for TWO unknowns

3. **Mixing up units**
   Keep dollars vs cents, hours vs minutes consistent

4. **Forgetting to answer the question**
   "Find how many of each" means find BOTH values

5. **Not checking the solution**
   Verify in both original equations AND in context

6. **Setting up equations incorrectly**
   "Total" usually means addition
   "Combined rate" means add rates

## Problem-Solving Strategy

**Before You Start:**
1. Read the entire problem twice
2. Identify what you're looking for (the two unknowns)
3. Look for two separate pieces of information

**Setting Up:**
1. Define variables with words, not just letters
2. Write one equation for each piece of information
3. Make sure equations are independent (not the same info)

**Solving:**
1. Choose substitution or elimination
2. Solve for one variable
3. Substitute to find the other
4. Show all work

**Finishing:**
1. Check in both original equations
2. Does answer make sense in context?
3. Answer in complete sentence with units
4. Did you answer what was asked?

## Quick Reference - Problem Types

| Type | Variables | Common Equations |
|------|-----------|------------------|
| Coin/Ticket | Number of each | Total count, Total value |
| Mixture | Amount of each | Total volume, Total concentration |
| Age | Current ages | Current relationship, Future/past |
| Distance | Distances or speeds | d = rt for each, Total distance |
| Work | Time or rates | Combined work = 1 |
| Geometry | Dimensions | Perimeter/area, Relationships |

## Practice Tips

- Start with simpler two-variable problems
- Draw diagrams when helpful (especially for distance/geometry)
- Make tables to organize information
- Label which equation represents which information
- Practice both substitution and elimination
- Check reasonableness (negative ages? fractional tickets?)
- Read carefully - word problems test reading as much as math
- Write clear, complete solutions showing all steps`
    }
  });

  console.log('✅ Updated: systems-word-problems-algebra1');

  // Topic 2: Factoring Polynomials (factoring-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'factoring-algebra1' },
    data: {
      textContent: `# Factoring Polynomials

## What is Factoring?

**Factoring** is the process of breaking down an expression into a product of simpler expressions (factors).

Think of it as the reverse of multiplying:
- Multiplying: 3(x + 2) = 3x + 6
- Factoring: 3x + 6 = 3(x + 2)

**Why Factor?**
- Solving equations (especially quadratics)
- Simplifying expressions
- Finding zeros of functions
- Real-world applications

## Factors and Multiples Review

**Factors** of a number divide evenly into it.
Factors of 12: 1, 2, 3, 4, 6, 12

**Greatest Common Factor (GCF)** is the largest number that divides all terms.
GCF of 12 and 18: 6

## Types of Factoring

We'll cover several methods:
1. Greatest Common Factor (GCF)
2. Factoring by Grouping
3. Factoring Trinomials (x² + bx + c)
4. Factoring Trinomials (ax² + bx + c where a ≠ 1)
5. Difference of Squares
6. Perfect Square Trinomials

## Method 1: Greatest Common Factor (GCF)

**Always factor out the GCF first!**

**Steps:**
1. Find the GCF of all terms
2. Divide each term by the GCF
3. Write as GCF times the remaining expression

**Example 1:** Factor 6x + 12

GCF of 6 and 12 is 6
6x + 12 = 6(x + 2)

Check: 6(x + 2) = 6x + 12 ✓

**Example 2:** Factor 15x² - 10x

GCF of 15 and 10 is 5
GCF of x² and x is x
Overall GCF: 5x

15x² - 10x = 5x(3x - 2)

Check: 5x(3x - 2) = 15x² - 10x ✓

**Example 3:** Factor 4x³ + 8x² - 12x

GCF: 4x
4x³ + 8x² - 12x = 4x(x² + 2x - 3)

Note: x² + 2x - 3 can be factored further!
= 4x(x + 3)(x - 1)

**Example 4:** Factor -3x² - 6x

Factor out -3x:
-3x² - 6x = -3x(x + 2)

Tip: Factor out negative when first term is negative

## Method 2: Factoring by Grouping

Used for polynomials with **four terms**.

**Steps:**
1. Group terms in pairs
2. Factor GCF from each pair
3. Factor out common binomial

**Example 1:** Factor x³ + 3x² + 2x + 6

Group: (x³ + 3x²) + (2x + 6)

Factor each group:
x²(x + 3) + 2(x + 3)

Factor out (x + 3):
(x + 3)(x² + 2)

Check: (x + 3)(x² + 2) = x³ + 2x + 3x² + 6 = x³ + 3x² + 2x + 6 ✓

**Example 2:** Factor 2x³ - 4x² + 3x - 6

Group: (2x³ - 4x²) + (3x - 6)

Factor: 2x²(x - 2) + 3(x - 2)

Factor out (x - 2):
(x - 2)(2x² + 3)

**Example 3:** Factor 6x² + 9x + 4x + 6

Group: (6x² + 9x) + (4x + 6)

Factor: 3x(2x + 3) + 2(2x + 3)

Factor out (2x + 3):
(2x + 3)(3x + 2)

## Method 3: Factoring x² + bx + c

For trinomials where the coefficient of x² is 1.

**Find two numbers that:**
- Multiply to give c (constant term)
- Add to give b (coefficient of x)

**Form:** x² + bx + c = (x + m)(x + n)
where m × n = c and m + n = b

**Example 1:** Factor x² + 7x + 12

Need two numbers that multiply to 12 and add to 7
Factors of 12: 1×12, 2×6, 3×4
3 + 4 = 7 ✓

x² + 7x + 12 = (x + 3)(x + 4)

Check: (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓

**Example 2:** Factor x² - 5x + 6

Need two numbers that multiply to 6 and add to -5
Both must be negative: -2 and -3

x² - 5x + 6 = (x - 2)(x - 3)

**Example 3:** Factor x² + 2x - 15

Need two numbers that multiply to -15 and add to 2
One positive, one negative: 5 and -3

x² + 2x - 15 = (x + 5)(x - 3)

**Example 4:** Factor x² - x - 20

Multiply to -20, add to -1
Factors: -5 and 4

x² - x - 20 = (x - 5)(x + 4)

**Sign Pattern:**
- Both positive if c > 0 and b > 0
- Both negative if c > 0 and b < 0
- Different signs if c < 0 (larger magnitude has sign of b)

## Method 4: Factoring ax² + bx + c (a ≠ 1)

When the leading coefficient is not 1, use the **AC method** or **trial and error**.

**AC Method:**

**Steps:**
1. Multiply a × c
2. Find two numbers that multiply to ac and add to b
3. Rewrite middle term using those numbers
4. Factor by grouping

**Example 1:** Factor 2x² + 7x + 3

a = 2, b = 7, c = 3
ac = 2 × 3 = 6

Find two numbers: multiply to 6, add to 7
Numbers: 1 and 6

Rewrite: 2x² + x + 6x + 3
Group: (2x² + x) + (6x + 3)
Factor: x(2x + 1) + 3(2x + 1)
Result: (2x + 1)(x + 3)

**Example 2:** Factor 3x² - 10x + 8

ac = 3 × 8 = 24
Find: multiply to 24, add to -10
Numbers: -4 and -6

Rewrite: 3x² - 4x - 6x + 8
Group: (3x² - 4x) + (-6x + 8)
Factor: x(3x - 4) - 2(3x - 4)
Result: (3x - 4)(x - 2)

**Example 3:** Factor 6x² + 11x - 10

ac = 6 × (-10) = -60
Find: multiply to -60, add to 11
Numbers: 15 and -4

Rewrite: 6x² + 15x - 4x - 10
Group: (6x² + 15x) + (-4x - 10)
Factor: 3x(2x + 5) - 2(2x + 5)
Result: (2x + 5)(3x - 2)

## Method 5: Difference of Squares

**Pattern:** a² - b² = (a + b)(a - b)

This only works for **difference** (subtraction), not sum!

**Example 1:** Factor x² - 9

Both are perfect squares: x² and 3²
x² - 9 = (x + 3)(x - 3)

**Example 2:** Factor 4x² - 25

Both perfect squares: (2x)² and 5²
4x² - 25 = (2x + 5)(2x - 5)

**Example 3:** Factor 9x² - 16

(3x)² - 4² = (3x + 4)(3x - 4)

**Example 4:** Factor x⁴ - 1

(x²)² - 1² = (x² + 1)(x² - 1)

But x² - 1 is also a difference of squares!
= (x² + 1)(x + 1)(x - 1)

**Example 5:** Factor 50x² - 2

First factor out GCF: 2(25x² - 1)
Then difference of squares: 2(5x + 1)(5x - 1)

## Method 6: Perfect Square Trinomials

**Patterns:**
- a² + 2ab + b² = (a + b)²
- a² - 2ab + b² = (a - b)²

**Recognition:** First and last terms are perfect squares, middle term is twice their product.

**Example 1:** Factor x² + 6x + 9

x² = (x)²
9 = 3²
6x = 2(x)(3) ✓

x² + 6x + 9 = (x + 3)²

**Example 2:** Factor x² - 10x + 25

x² = (x)²
25 = 5²
10x = 2(x)(5) ✓

x² - 10x + 25 = (x - 5)²

**Example 3:** Factor 4x² + 12x + 9

4x² = (2x)²
9 = 3²
12x = 2(2x)(3) ✓

4x² + 12x + 9 = (2x + 3)²

## Complete Factoring Strategy

**Step 1:** Always factor out GCF first

**Step 2:** Count terms
- 2 terms: Difference of squares?
- 3 terms: Trinomial? Perfect square?
- 4 terms: Factor by grouping

**Step 3:** Check if factoring is complete
Can any factor be factored further?

**Step 4:** Check by multiplying back

**Example:** Factor completely: 2x³ - 18x

Step 1: GCF is 2x
2x(x² - 9)

Step 2: x² - 9 is difference of squares
2x(x + 3)(x - 3)

Final answer: 2x(x + 3)(x - 3)

## Checking Your Work

**Method 1: Multiply back**
Expand your factored form and verify it matches the original

**Method 2: Substitute a value**
Pick x = 2, evaluate both original and factored forms
They should give the same result

## Common Mistakes to Avoid

1. **Forgetting to factor out GCF first**
   Always look for GCF before other methods!

2. **Stopping too soon**
   Factor completely - check each factor

3. **Sign errors**
   Be careful with negatives, especially in grouping

4. **Not checking work**
   Always multiply back or substitute to verify

5. **Confusing sum and difference of squares**
   a² + b² does NOT factor (over real numbers)
   a² - b² = (a + b)(a - b)

## When Polynomials Don't Factor

Some polynomials are **prime** (cannot be factored over integers).

Example: x² + 5x + 1
No integers multiply to 1 and add to 5

This is prime (cannot be factored with integer coefficients).

## Real-World Applications

Factoring helps find dimensions, zeros, break-even points.

**Example:** Area of rectangle is x² + 5x + 6. Find possible dimensions.

Factor: (x + 2)(x + 3)

Dimensions could be (x + 2) by (x + 3)

## Quick Reference

| Expression Type | Method | Pattern |
|----------------|--------|---------|
| 3x + 6 | GCF | a(b + c) |
| x² + 5x + 6 | Trinomial (a=1) | (x + m)(x + n) |
| 2x² + 5x + 3 | AC Method | Factor by grouping |
| x² - 16 | Difference of squares | (x + 4)(x - 4) |
| x² + 6x + 9 | Perfect square | (x + 3)² |
| x³ + 2x² + 3x + 6 | Grouping | (x + 2)(x² + 3) |

## Practice Tips

- Master GCF factoring first
- Memorize perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...
- Practice sign patterns for trinomials
- Always check by multiplying
- Try all methods systematically
- Factor completely - don't stop too soon
- Keep practicing until patterns become automatic`
    }
  });

  console.log('✅ Updated: factoring-algebra1');

  // Topic 3: Exponent Rules (exponent-rules-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'exponent-rules-algebra1' },
    data: {
      textContent: `# Exponent Rules

## What are Exponents?

An **exponent** (or power) tells how many times to multiply a number by itself.

**Notation:** bⁿ
- b is the **base**
- n is the **exponent** (or power)

Examples:
- 2³ = 2 × 2 × 2 = 8
- x⁴ = x × x × x × x
- 5² = 5 × 5 = 25

## Understanding the Meaning

**Positive Integer Exponents:**
xⁿ means multiply x by itself n times

- x¹ = x (just one x)
- x² = x × x (x squared)
- x³ = x × x × x (x cubed)
- x⁴ = x × x × x × x (x to the fourth)

## The Product Rule

When **multiplying** with the same base, **add** the exponents.

**Rule:** xᵃ · xᵇ = xᵃ⁺ᵇ

**Why?** x³ · x² = (x·x·x) · (x·x) = x⁵

**Examples:**

Example 1: x⁴ · x³
= x⁴⁺³
= x⁷

Example 2: 2³ · 2⁵
= 2³⁺⁵
= 2⁸
= 256

Example 3: a² · a⁷ · a
= a² · a⁷ · a¹
= a²⁺⁷⁺¹
= a¹⁰

Example 4: 3x⁴ · 5x²
= (3 · 5)(x⁴ · x²)
= 15x⁶

**Important:** Bases must be the same!
x³ · y² cannot be simplified using this rule

## The Quotient Rule

When **dividing** with the same base, **subtract** the exponents.

**Rule:** xᵃ ÷ xᵇ = xᵃ⁻ᵇ (when a > b)

**Why?** x⁵/x² = (x·x·x·x·x)/(x·x) = x³

**Examples:**

Example 1: x⁷ ÷ x³
= x⁷⁻³
= x⁴

Example 2: 2⁸/2⁵
= 2⁸⁻⁵
= 2³
= 8

Example 3: a¹⁰/a⁴
= a¹⁰⁻⁴
= a⁶

Example 4: 12x⁵/3x²
= (12/3)(x⁵/x²)
= 4x³

## The Power Rule

When raising a power to a power, **multiply** the exponents.

**Rule:** (xᵃ)ᵇ = xᵃᵇ

**Why?** (x²)³ = x² · x² · x² = x⁶

**Examples:**

Example 1: (x³)⁴
= x³ˣ⁴
= x¹²

Example 2: (a²)⁵
= a¹⁰

Example 3: (2³)²
= 2⁶
= 64

Example 4: (y⁴)⁷
= y²⁸

## Power of a Product

When raising a product to a power, raise each factor to that power.

**Rule:** (xy)ⁿ = xⁿyⁿ

**Examples:**

Example 1: (xy)³
= x³y³

Example 2: (2a)⁴
= 2⁴a⁴
= 16a⁴

Example 3: (3x²)³
= 3³(x²)³
= 27x⁶

Example 4: (-2ab)³
= (-2)³a³b³
= -8a³b³

## Power of a Quotient

When raising a quotient to a power, raise both numerator and denominator to that power.

**Rule:** (x/y)ⁿ = xⁿ/yⁿ

**Examples:**

Example 1: (x/y)²
= x²/y²

Example 2: (a/3)³
= a³/3³
= a³/27

Example 3: (2x/5)²
= (2x)²/5²
= 4x²/25

Example 4: (3a²/b)³
= (3a²)³/b³
= 27a⁶/b³

## Zero Exponent

Any non-zero number raised to the power of zero equals 1.

**Rule:** x⁰ = 1 (where x ≠ 0)

**Why?** Using quotient rule: x³/x³ = x³⁻³ = x⁰
But x³/x³ = 1, so x⁰ = 1

**Examples:**

Example 1: 5⁰ = 1

Example 2: x⁰ = 1

Example 3: (3ab)⁰ = 1

Example 4: 7x⁰ = 7(1) = 7

**Warning:** 0⁰ is undefined!

## Negative Exponents

A negative exponent means "reciprocal."

**Rule:** x⁻ⁿ = 1/xⁿ (where x ≠ 0)

**Examples:**

Example 1: x⁻³
= 1/x³

Example 2: 2⁻⁴
= 1/2⁴
= 1/16

Example 3: 5⁻²
= 1/5²
= 1/25

Example 4: (1/x)⁻² = x²

**Rule for fractions:** (a/b)⁻ⁿ = (b/a)ⁿ

Example: (2/3)⁻² = (3/2)² = 9/4

## Moving Between Numerator and Denominator

Move a factor with an exponent by changing the sign of the exponent.

**Examples:**

Example 1: 1/x⁻³ = x³

Example 2: 2/x⁻² = 2x²

Example 3: x⁻⁴/y⁻² = y²/x⁴

Example 4: 3x⁻²y³ = 3y³/x²

## Combining Multiple Rules

Most problems require using several rules together.

**Example 1:** Simplify (x²y³)⁴

= (x²)⁴(y³)⁴  [Power of product]
= x⁸y¹²

**Example 2:** Simplify (2x³)²(3x⁴)

= 2²(x³)² · 3x⁴  [Power of product]
= 4x⁶ · 3x⁴
= 12x¹⁰  [Product rule]

**Example 3:** Simplify (x⁵/x²)³

= (x⁵⁻²)³  [Quotient rule]
= (x³)³
= x⁹  [Power rule]

**Example 4:** Simplify (2a³b⁻²)⁻³

= 2⁻³(a³)⁻³(b⁻²)⁻³  [Power of product]
= (1/8)a⁻⁹b⁶
= b⁶/(8a⁹)  [Negative exponent]

## Simplifying Expressions with Exponents

**Goal:** Write with positive exponents, simplified completely.

**Example 1:** Simplify x⁻³ · x⁷

= x⁻³⁺⁷  [Product rule]
= x⁴

**Example 2:** Simplify (3x⁻²y⁴)/(6x³y⁻¹)

= (3/6)(x⁻²/x³)(y⁴/y⁻¹)
= (1/2)x⁻⁵y⁵
= y⁵/(2x⁵)

**Example 3:** Simplify (a²b⁻³c⁰)²

= (a²)²(b⁻³)²(c⁰)²
= a⁴b⁻⁶ · 1
= a⁴/b⁶

**Example 4:** Simplify 10x⁵y⁻²/(2x⁻³y⁴)

= (10/2)(x⁵/x⁻³)(y⁻²/y⁴)
= 5x⁸y⁻⁶
= 5x⁸/y⁶

## Scientific Notation

Scientific notation uses powers of 10: a × 10ⁿ where 1 ≤ a < 10

**Examples:**

Example 1: 3,400 = 3.4 × 10³

Example 2: 0.0056 = 5.6 × 10⁻³

Example 3: 7,800,000 = 7.8 × 10⁶

**Operations in Scientific Notation:**

Multiplication: (2 × 10³)(3 × 10⁵) = 6 × 10⁸

Division: (8 × 10⁶)/(2 × 10²) = 4 × 10⁴

## Common Mistakes to Avoid

1. **Adding exponents when multiplying bases**
   Wrong: 2³ · 3² = 6⁵
   Right: 2³ · 3² = 8 · 9 = 72

2. **Multiplying exponents with product rule**
   Wrong: x³ · x² = x⁶
   Right: x³ · x² = x⁵

3. **Forgetting to distribute exponents**
   Wrong: (2x)³ = 2x³
   Right: (2x)³ = 8x³

4. **Confusing negative exponent with negative number**
   x⁻² ≠ -x²
   x⁻² = 1/x²

5. **Thinking x⁰ = 0**
   Wrong: 5⁰ = 0
   Right: 5⁰ = 1

6. **Not simplifying negative exponents**
   Leave answer as x⁻³ instead of 1/x³

## Order of Operations with Exponents

Remember PEMDAS - exponents come before multiplication/division.

**Example 1:** Evaluate 2 · 3²
= 2 · 9 = 18
NOT (2 · 3)² = 36

**Example 2:** Evaluate -2⁴
= -(2⁴) = -16
NOT (-2)⁴ = 16

**Example 3:** 3 + 2³
= 3 + 8 = 11

## Properties Summary

| Rule | Formula | Example |
|------|---------|---------|
| Product | xᵃ · xᵇ = xᵃ⁺ᵇ | x² · x³ = x⁵ |
| Quotient | xᵃ/xᵇ = xᵃ⁻ᵇ | x⁵/x² = x³ |
| Power | (xᵃ)ᵇ = xᵃᵇ | (x²)³ = x⁶ |
| Power of Product | (xy)ⁿ = xⁿyⁿ | (2x)³ = 8x³ |
| Power of Quotient | (x/y)ⁿ = xⁿ/yⁿ | (x/2)² = x²/4 |
| Zero | x⁰ = 1 | 7⁰ = 1 |
| Negative | x⁻ⁿ = 1/xⁿ | 2⁻³ = 1/8 |

## Practice Strategy

1. **Master one rule at a time**
   Practice each rule separately first

2. **Recognize patterns**
   Same base? Product or quotient rule
   Power to power? Power rule

3. **Work step-by-step**
   Don't skip steps when learning

4. **Check your work**
   Substitute numbers to verify

5. **Practice mixed problems**
   Real problems use multiple rules

6. **Write exponents clearly**
   Use proper notation to avoid errors

7. **Simplify completely**
   Final answer should have positive exponents only

## Quick Checks

**Is it simplified?**
- ✓ All positive exponents (unless specifically asked for negative)
- ✓ No exponents on denominators that could be moved
- ✓ All like bases combined
- ✓ No parentheses with exponents that can be distributed
- ✓ Coefficients multiplied out`
    }
  });

  console.log('✅ Updated: exponent-rules-algebra1');

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
