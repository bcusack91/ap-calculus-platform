import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 8 (3 topics)...\n');

  // Topic 1: Radical Operations (radical-operations-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'radical-operations-algebra1' },
    data: {
      textContent: `# Radical Operations

## Review: Simplifying Radicals

Before performing operations, always **simplify radicals first**.

**Key reminders:**
- Find perfect square factors
- √(a²) = a
- √(ab) = √a × √b
- Simplify coefficients and radicands separately

**Quick examples:**
- √50 = 5√2
- √75 = 5√3
- √12 = 2√3

## Adding and Subtracting Radicals

**Rule:** You can ONLY add or subtract **like radicals** (same radicand).

Think of radicals like variables:
- 3x + 5x = 8x
- 3√2 + 5√2 = 8√2

**Example 1:** 4√3 + 7√3

Same radicand (3), so combine coefficients:
4√3 + 7√3 = 11√3

**Example 2:** 9√5 - 2√5

9√5 - 2√5 = 7√5

**Example 3:** 6√7 + 3√7 - √7

Combine all terms:
(6 + 3 - 1)√7 = 8√7

Note: √7 = 1√7

**Example 4:** √2 + √3

Different radicands - CANNOT combine!
Answer: √2 + √3

## Simplify First, Then Add

Often you must simplify radicals before you can see they're alike.

**Example 1:** √12 + √27

Simplify each:
√12 = √(4 × 3) = 2√3
√27 = √(9 × 3) = 3√3

Now add like radicals:
2√3 + 3√3 = 5√3

**Example 2:** √50 + √32

Simplify:
√50 = √(25 × 2) = 5√2
√32 = √(16 × 2) = 4√2

Add:
5√2 + 4√2 = 9√2

**Example 3:** √8 - √18 + √50

Simplify each:
√8 = 2√2
√18 = 3√2
√50 = 5√2

Combine:
2√2 - 3√2 + 5√2 = 4√2

**Example 4:** 3√20 - √45

Simplify:
3√20 = 3 × 2√5 = 6√5
√45 = 3√5

Subtract:
6√5 - 3√5 = 3√5

## Mixed Radical Expressions

**Example 1:** 2√3 + √12 - √27

Simplify:
√12 = 2√3
√27 = 3√3

Rewrite:
2√3 + 2√3 - 3√3 = √3

**Example 2:** 4√8 + 2√2 - √32

Simplify:
4√8 = 4 × 2√2 = 8√2
√32 = 4√2

Combine:
8√2 + 2√2 - 4√2 = 6√2

## Multiple Different Radicals

Keep unlike radicals separate.

**Example:** 2√3 + 5√2 - √3 + 3√2

Group like radicals:
(2√3 - √3) + (5√2 + 3√2)
= √3 + 8√2

Final answer: √3 + 8√2

## Multiplying Radicals

**Product Rule:** √a × √b = √(ab)

**Example 1:** √2 × √3

√2 × √3 = √6

**Example 2:** √5 × √5

√5 × √5 = √25 = 5

**General rule:** √a × √a = a

**Example 3:** √6 × √10

√6 × √10 = √60

Simplify: √60 = √(4 × 15) = 2√15

**Example 4:** √3 × √12

√3 × √12 = √36 = 6

## Multiplying with Coefficients

Multiply coefficients separately from radicals.

**Example 1:** (2√3)(5√2)

Coefficients: 2 × 5 = 10
Radicals: √3 × √2 = √6

Answer: 10√6

**Example 2:** (3√5)(4√5)

Coefficients: 3 × 4 = 12
Radicals: √5 × √5 = 5

Answer: 12 × 5 = 60

**Example 3:** (6√2)(3√8)

Coefficients: 6 × 3 = 18
Radicals: √2 × √8 = √16 = 4

Answer: 18 × 4 = 72

**Example 4:** (-2√7)(5√3)

Coefficients: -2 × 5 = -10
Radicals: √7 × √3 = √21

Answer: -10√21

## Multiplying and Simplifying

**Example 1:** (2√6)(3√15)

Multiply:
(2 × 3)(√6 × √15) = 6√90

Simplify √90:
90 = 9 × 10
√90 = 3√10

Answer: 6 × 3√10 = 18√10

**Example 2:** (5√12)(2√3)

First simplify √12 = 2√3:
(5 × 2√3)(2√3) = (10√3)(2√3)

Multiply:
(10 × 2)(√3 × √3) = 20 × 3 = 60

## Distributive Property with Radicals

**Example 1:** √2(√3 + √5)

Distribute:
√2 × √3 + √2 × √5
= √6 + √10

**Example 2:** 3√5(2√5 - 4)

Distribute:
3√5 × 2√5 - 3√5 × 4
= 6 × 5 - 12√5
= 30 - 12√5

**Example 3:** 2√3(√12 + √27)

First simplify:
√12 = 2√3
√27 = 3√3

Distribute:
2√3(2√3 + 3√3)
= 2√3 × 2√3 + 2√3 × 3√3
= 4 × 3 + 6 × 3
= 12 + 18
= 30

## Multiplying Binomials with Radicals (FOIL)

Use FOIL: First, Outer, Inner, Last

**Example 1:** (√3 + 2)(√3 + 5)

F: √3 × √3 = 3
O: √3 × 5 = 5√3
I: 2 × √3 = 2√3
L: 2 × 5 = 10

Combine: 3 + 5√3 + 2√3 + 10 = 13 + 7√3

**Example 2:** (√5 + 1)(√5 - 1)

F: √5 × √5 = 5
O: √5 × (-1) = -√5
I: 1 × √5 = √5
L: 1 × (-1) = -1

Combine: 5 - √5 + √5 - 1 = 4

**Notice:** This is the difference of squares pattern!

**Example 3:** (2√3 + 4)(√3 - 2)

F: 2√3 × √3 = 2 × 3 = 6
O: 2√3 × (-2) = -4√3
I: 4 × √3 = 4√3
L: 4 × (-2) = -8

Combine: 6 - 4√3 + 4√3 - 8 = -2

## Conjugates

**Conjugates** differ only in the sign between terms:
- a + √b and a - √b are conjugates
- √a + √b and √a - √b are conjugates

**When you multiply conjugates, the radicals disappear!**

**Pattern:** (a + √b)(a - √b) = a² - b

**Example 1:** (3 + √2)(3 - √2)

= 9 - 2 = 7

**Example 2:** (√5 + √3)(√5 - √3)

= 5 - 3 = 2

**Example 3:** (2√7 + 1)(2√7 - 1)

= (2√7)² - 1² = 4 × 7 - 1 = 28 - 1 = 27

## Dividing Radicals

**Quotient Rule:** √a / √b = √(a/b)

**Example 1:** √30 / √6

= √(30/6) = √5

**Example 2:** √72 / √8

= √(72/8) = √9 = 3

**Example 3:** √50 / √2

= √(50/2) = √25 = 5

## Dividing with Coefficients

Divide coefficients and radicals separately.

**Example 1:** 12√10 / 3√2

Coefficients: 12/3 = 4
Radicals: √10/√2 = √5

Answer: 4√5

**Example 2:** 20√15 / 5√3

= (20/5)(√15/√3)
= 4√5

**Example 3:** 18√24 / 6√3

First simplify √24 = 2√6:
= 18 × 2√6 / 6√3
= 36√6 / 6√3
= 6(√6/√3)
= 6√2

## Rationalizing the Denominator

**Never leave a radical in the denominator!**

**Method:** Multiply by a form of 1 that eliminates the radical.

**Example 1:** 1/√3

Multiply by √3/√3:
= (1 × √3)/(√3 × √3)
= √3/3

**Example 2:** 5/√2

= (5√2)/(√2 × √2)
= 5√2/2

**Example 3:** 8/√8

First simplify √8 = 2√2:
= 8/(2√2) = 4/√2

Rationalize:
= 4√2/2 = 2√2

## Rationalizing with Variables

**Example 1:** 3/√x

= (3√x)/(√x × √x)
= 3√x/x

**Example 2:** 5/(2√y)

= (5√y)/(2√y × √y)
= 5√y/(2y)

## Rationalizing Binomial Denominators

Use the **conjugate** to rationalize.

**Example 1:** 6/(2 + √3)

Multiply by conjugate (2 - √3)/(2 - √3):

= 6(2 - √3)/[(2 + √3)(2 - √3)]
= 6(2 - √3)/(4 - 3)
= 6(2 - √3)/1
= 12 - 6√3

**Example 2:** 10/(√5 + 1)

Conjugate: (√5 - 1)/(√5 - 1)

= 10(√5 - 1)/[(√5 + 1)(√5 - 1)]
= 10(√5 - 1)/(5 - 1)
= 10(√5 - 1)/4
= 5(√5 - 1)/2
= (5√5 - 5)/2

**Example 3:** 1/(3 - √2)

Multiply by (3 + √2)/(3 + √2):

= (3 + √2)/[(3 - √2)(3 + √2)]
= (3 + √2)/(9 - 2)
= (3 + √2)/7

## Complex Rationalization

**Example:** (√3 + 1)/(√3 - 1)

Multiply by (√3 + 1)/(√3 + 1):

= (√3 + 1)²/[(√3 - 1)(√3 + 1)]
= (3 + 2√3 + 1)/(3 - 1)
= (4 + 2√3)/2
= 2 + √3

## Simplifying Complex Radical Expressions

**Example 1:** (2 + √12)/4

First simplify √12 = 2√3:
= (2 + 2√3)/4

Factor numerator:
= 2(1 + √3)/4
= (1 + √3)/2

**Example 2:** (6 - √18)/3

Simplify √18 = 3√2:
= (6 - 3√2)/3

Factor:
= 3(2 - √2)/3
= 2 - √2

## Higher Index Radicals

**Cube roots:** ³√a × ³√b = ³√(ab)

**Example 1:** ³√2 × ³√4

= ³√8 = 2

**Example 2:** ³√5 × ³√25

= ³√125 = 5

**Example 3:** ³√16 / ³√2

= ³√(16/2) = ³√8 = 2

## Mixed Operations

**Example 1:** (√12 + √27) - (√75 - √48)

Simplify each:
= (2√3 + 3√3) - (5√3 - 4√3)
= 5√3 - √3
= 4√3

**Example 2:** 2√18 × √2 + √32

= 2√36 + √32
= 12 + 4√2

**Example 3:** (√50 + √8)/√2

= (5√2 + 2√2)/√2
= 7√2/√2
= 7

## Applications: Pythagorean Theorem

**Example:** Right triangle with legs 2√3 and 4.

Find hypotenuse:
c² = (2√3)² + 4²
c² = 4 × 3 + 16
c² = 12 + 16
c² = 28
c = √28 = 2√7

## Applications: Geometric Mean

The geometric mean of a and b is √(ab).

**Example:** Find geometric mean of 8 and 18.

√(8 × 18) = √144 = 12

**Example:** Find geometric mean of 6 and 24.

√(6 × 24) = √144 = 12

## Applications: Distance and Area

**Example:** Square has area 50 cm². Find side length.

Side = √50 = 5√2 cm

Perimeter = 4 × 5√2 = 20√2 cm

## Common Mistakes to Avoid

1. **Adding unlike radicals**
   √2 + √3 ≠ √5 (cannot combine!)

2. **Distributing exponents incorrectly**
   (√a + √b)² ≠ a + b
   Must FOIL: (√a + √b)² = a + 2√(ab) + b

3. **Forgetting to simplify**
   Leave 2√3, not √12

4. **Rationalizing errors**
   Don't forget to multiply BOTH numerator and denominator

5. **Sign errors with conjugates**
   (a + √b)(a - √b) = a² - b, not a² + b

6. **Not combining like terms**
   5√2 - 3√2 = 2√2, not 5√2 - 3√2

## Order of Operations with Radicals

Follow PEMDAS/GEMDAS:
1. Parentheses/Grouping
2. Exponents (including radicals)
3. Multiplication and Division (left to right)
4. Addition and Subtraction (left to right)

**Example:** 2√3 + √12 × √3

Multiply first: √12 × √3 = √36 = 6
Then add: 2√3 + 6

## Quick Reference

**Adding/Subtracting:**
Only combine like radicals (same radicand)

**Multiplying:**
√a × √b = √(ab)
Multiply coefficients separately

**Dividing:**
√a / √b = √(a/b)

**Rationalizing:**
Multiply by √n/√n or conjugate

**Conjugate pattern:**
(a + √b)(a - √b) = a² - b

## Practice Strategy

**Level 1:** Add/subtract like radicals
- 3√2 + 5√2

**Level 2:** Simplify first, then add
- √12 + √27

**Level 3:** Multiply radicals
- (2√3)(5√2)

**Level 4:** FOIL with radicals
- (√5 + 2)(√5 - 3)

**Level 5:** Rationalize denominators
- 1/(2 + √3)

## Tips for Success

- Always simplify radicals first
- Only combine like radicals
- Multiply coefficients separately from radicals
- Rationalize all denominators
- Use conjugates for binomial denominators
- Check your work by approximating decimal values
- Remember √a × √a = a
- Watch for conjugate patterns
- Factor when possible to simplify
- Practice FOIL with radicals until automatic`
    }
  });

  console.log('✅ Updated: radical-operations-algebra1');

  // Topic 2: Completing the Square (completing-the-square-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'completing-the-square-algebra1' },
    data: {
      textContent: `# Completing the Square

## What is Completing the Square?

**Completing the square** is a method to rewrite a quadratic expression as a perfect square trinomial.

**Goal:** Transform ax² + bx + c into a(x - h)² + k

**Why use this method?**
- Solve quadratic equations
- Find vertex of parabola
- Derive the quadratic formula
- Convert between forms

## Perfect Square Trinomials

A **perfect square trinomial** is the result of squaring a binomial.

**Patterns:**
- (x + a)² = x² + 2ax + a²
- (x - a)² = x² - 2ax + a²

**Examples:**
- (x + 3)² = x² + 6x + 9
- (x - 5)² = x² - 10x + 25
- (x + 7)² = x² + 14x + 49

**Key observation:** The constant term is (half the coefficient of x)²

## The Pattern

For x² + bx + ?, what number makes it a perfect square?

**Formula:** Take (b/2)² where b is the coefficient of x

**Example 1:** x² + 8x + ?

b = 8
Half of 8 = 4
Square it: 4² = 16

So x² + 8x + 16 = (x + 4)²

**Example 2:** x² - 12x + ?

b = -12
Half: -12/2 = -6
Square: (-6)² = 36

So x² - 12x + 36 = (x - 6)²

**Example 3:** x² + 10x + ?

Half of 10 = 5
5² = 25

So x² + 10x + 25 = (x + 5)²

## Finding the Binomial

Once you've completed the square, write the binomial.

**Pattern:** x² + bx + (b/2)² = (x + b/2)²

**Example 1:** x² + 8x + 16

16 = 4²
Binomial: (x + 4)²

**Example 2:** x² - 14x + 49

49 = 7²
Sign is negative: (x - 7)²

**Example 3:** x² + 3x + 9/4

9/4 = (3/2)²
Binomial: (x + 3/2)²

## Completing the Square with Expressions

If the expression isn't a perfect square, we need to ADD the right number.

**Process:**
1. Group x² + bx terms
2. Find (b/2)²
3. Add AND subtract (b/2)² (to keep equation balanced)
4. Factor the perfect square
5. Simplify remaining terms

**Example 1:** x² + 6x + 2

Step 1: Identify b = 6
Step 2: (6/2)² = 9
Step 3: x² + 6x + 9 - 9 + 2
Step 4: (x + 3)² - 9 + 2
Step 5: (x + 3)² - 7

**Example 2:** x² - 8x + 5

b = -8, (b/2)² = 16
= x² - 8x + 16 - 16 + 5
= (x - 4)² - 11

**Example 3:** x² + 10x - 3

(10/2)² = 25
= x² + 10x + 25 - 25 - 3
= (x + 5)² - 28

## Solving Equations by Completing the Square

**General process:**
1. Move constant to right side
2. Complete the square on left side
3. Add (b/2)² to BOTH sides
4. Factor left side
5. Take square root of both sides
6. Solve for x

**Example 1:** x² + 6x - 7 = 0

Step 1: x² + 6x = 7
Step 2: (6/2)² = 9
Step 3: x² + 6x + 9 = 7 + 9
Step 4: (x + 3)² = 16
Step 5: x + 3 = ±4
Step 6: x = -3 ± 4

Solutions: x = 1 or x = -7

**Example 2:** x² - 4x - 5 = 0

x² - 4x = 5
(−4/2)² = 4
x² - 4x + 4 = 5 + 4
(x - 2)² = 9
x - 2 = ±3
x = 2 ± 3

Solutions: x = 5 or x = -1

**Example 3:** x² + 10x + 9 = 0

x² + 10x = -9
(10/2)² = 25
x² + 10x + 25 = -9 + 25
(x + 5)² = 16
x + 5 = ±4
x = -5 ± 4

Solutions: x = -1 or x = -9

## When a ≠ 1

If coefficient of x² is not 1, divide everything by that coefficient first!

**Example 1:** 2x² + 8x - 10 = 0

Divide by 2: x² + 4x - 5 = 0
x² + 4x = 5
Add (4/2)² = 4 to both sides:
x² + 4x + 4 = 9
(x + 2)² = 9
x + 2 = ±3
x = -2 ± 3

Solutions: x = 1 or x = -5

**Example 2:** 3x² - 12x + 9 = 0

Divide by 3: x² - 4x + 3 = 0
x² - 4x = -3
Add 4:
x² - 4x + 4 = 1
(x - 2)² = 1
x - 2 = ±1
x = 2 ± 1

Solutions: x = 3 or x = 1

## Vertex Form from Completing the Square

Completing the square converts standard form to vertex form!

**Standard form:** y = ax² + bx + c
**Vertex form:** y = a(x - h)² + k where (h, k) is vertex

**Example 1:** y = x² + 6x + 5

Complete the square:
y = (x² + 6x + 9) - 9 + 5
y = (x + 3)² - 4

Vertex: (-3, -4)

**Example 2:** y = x² - 4x + 7

y = (x² - 4x + 4) - 4 + 7
y = (x - 2)² + 3

Vertex: (2, 3)

**Example 3:** y = x² + 8x + 10

y = (x² + 8x + 16) - 16 + 10
y = (x + 4)² - 6

Vertex: (-4, -6)

## When a ≠ 1 in Vertex Form

Factor out 'a' from the x² and x terms only!

**Example 1:** y = 2x² + 12x + 7

Factor out 2 from first two terms:
y = 2(x² + 6x) + 7

Complete the square inside parentheses:
y = 2(x² + 6x + 9 - 9) + 7
y = 2(x² + 6x + 9) - 18 + 7
y = 2(x + 3)² - 11

Vertex: (-3, -11)

**Example 2:** y = -x² + 4x - 1

Factor out -1:
y = -(x² - 4x) - 1
y = -(x² - 4x + 4 - 4) - 1
y = -(x² - 4x + 4) + 4 - 1
y = -(x - 2)² + 3

Vertex: (2, 3)

**Example 3:** y = 3x² - 18x + 20

Factor out 3:
y = 3(x² - 6x) + 20
y = 3(x² - 6x + 9 - 9) + 20
y = 3(x - 3)² - 27 + 20
y = 3(x - 3)² - 7

Vertex: (3, -7)

## Fractional Coefficients

**Example:** x² + 5x + 2 = 0

x² + 5x = -2
(5/2)² = 25/4

x² + 5x + 25/4 = -2 + 25/4
(x + 5/2)² = -8/4 + 25/4
(x + 5/2)² = 17/4

x + 5/2 = ±√(17/4)
x = -5/2 ± √17/2

x = (-5 ± √17)/2

## No Real Solutions

If you get a negative under the square root, there are no real solutions.

**Example:** x² + 2x + 5 = 0

x² + 2x = -5
x² + 2x + 1 = -5 + 1
(x + 1)² = -4

Cannot take √(-4) in real numbers.
No real solutions!

## Deriving the Quadratic Formula

We can derive the quadratic formula by completing the square!

**Start with:** ax² + bx + c = 0

Divide by a: x² + (b/a)x + c/a = 0

Move constant: x² + (b/a)x = -c/a

Complete square: (b/2a)²
x² + (b/a)x + (b/2a)² = -c/a + b²/4a²

Factor: (x + b/2a)² = (b² - 4ac)/4a²

Square root: x + b/2a = ±√(b² - 4ac)/2a

Solve: x = -b/2a ± √(b² - 4ac)/2a

**Quadratic formula:** x = (-b ± √(b² - 4ac))/2a

## Applications: Maximum and Minimum

Completing the square finds the vertex, which gives max/min values.

**Example:** Projectile height h(t) = -16t² + 64t

Complete the square:
h(t) = -16(t² - 4t)
h(t) = -16(t² - 4t + 4 - 4)
h(t) = -16(t - 2)² + 64

Maximum height: 64 feet at t = 2 seconds

**Example 2:** Profit P(x) = -2x² + 40x - 50

P(x) = -2(x² - 20x) - 50
P(x) = -2(x² - 20x + 100 - 100) - 50
P(x) = -2(x - 10)² + 200 - 50
P(x) = -2(x - 10)² + 150

Maximum profit: $150 when x = 10

## Applications: Geometry

**Example:** Rectangle has perimeter 40 cm. Find dimensions for maximum area.

Let width = x, then length = 20 - x
Area: A = x(20 - x) = -x² + 20x

Complete the square:
A = -(x² - 20x)
A = -(x² - 20x + 100 - 100)
A = -(x - 10)² + 100

Maximum area: 100 cm² when x = 10 (square!)

## Common Mistakes to Avoid

1. **Forgetting to add (b/2)² to BOTH sides**
   When solving equations, balance both sides!

2. **Wrong sign in binomial**
   x² - 6x + 9 = (x - 3)², not (x + 3)²

3. **Not factoring out 'a' first when a ≠ 1**
   Must factor before completing square

4. **Forgetting the ± when taking square root**
   (x + 3)² = 16 gives x + 3 = ±4

5. **Arithmetic errors with fractions**
   (5/2)² = 25/4, not 5/4

6. **Distributing 'a' incorrectly in vertex form**
   Remember: 2(x² + 6x + 9) - 9 ≠ 2(x + 3)² - 9
   Should be: 2(x + 3)² - 18

## Comparing Methods

**Completing the Square:**
- Always works
- Gives exact answers
- Useful for vertex form
- More steps than quadratic formula
- Great for understanding

**Quadratic Formula:**
- Faster for solving
- Always works
- Just plug and solve

**Factoring:**
- Fastest when it works
- Only works with nice numbers

## Step-by-Step Summary

**For solving ax² + bx + c = 0:**
1. Divide by a (if a ≠ 1)
2. Move constant to right side
3. Find (b/2)²
4. Add (b/2)² to both sides
5. Factor left side as perfect square
6. Take square root of both sides (±)
7. Solve for x

**For vertex form:**
1. Factor out 'a' from x² and x terms
2. Complete square inside parentheses
3. Distribute 'a' through the added term
4. Combine constants outside
5. Write as a(x - h)² + k

## Quick Reference

**Finding term to complete square:**
(b/2)² where b is coefficient of x

**Perfect square pattern:**
x² + bx + (b/2)² = (x + b/2)²

**Solving steps:**
1. Move constant
2. Add (b/2)² to both sides
3. Factor and solve

**Vertex form:**
y = a(x - h)² + k
Vertex: (h, k)

## Practice Strategy

**Level 1:** Identify perfect squares
- x² + 10x + 25 = (x + 5)²

**Level 2:** Find missing term
- x² + 8x + ? = (x + ?)²

**Level 3:** Solve simple equations
- x² + 6x - 7 = 0

**Level 4:** When a ≠ 1
- 2x² + 8x - 10 = 0

**Level 5:** Convert to vertex form
- y = x² - 4x + 7

## Tips for Success

- Memorize the pattern: (b/2)²
- Always check if equation balances
- Watch signs carefully
- Factor out 'a' first when a ≠ 1
- Remember ± when taking square roots
- Practice finding vertex from standard form
- Check answers by substituting back
- Use this method to understand quadratic formula
- Draw parabolas to visualize vertex
- Keep work organized with clear steps`
    }
  });

  console.log('✅ Updated: completing-the-square-algebra1');

  // Topic 3: Arithmetic Sequences (arithmetic-sequences-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'arithmetic-sequences-algebra1' },
    data: {
      textContent: `# Arithmetic Sequences

## What is a Sequence?

A **sequence** is an ordered list of numbers called **terms**.

**Example:** 2, 4, 6, 8, 10, ...

**Notation:**
- a₁ = first term
- a₂ = second term
- a₃ = third term
- aₙ = nth term

**Types of sequences:**
- Arithmetic (constant difference)
- Geometric (constant ratio)
- Other patterns

## What is an Arithmetic Sequence?

An **arithmetic sequence** has a constant difference between consecutive terms.

**Examples:**
- 3, 7, 11, 15, 19, ... (add 4 each time)
- 20, 15, 10, 5, 0, ... (subtract 5 each time)
- 1, 1.5, 2, 2.5, 3, ... (add 0.5 each time)

The constant difference is called the **common difference (d)**.

## Finding the Common Difference

The **common difference (d)** is found by subtracting consecutive terms.

**Formula:** d = a₂ - a₁ = a₃ - a₂ = aₙ₊₁ - aₙ

**Example 1:** 5, 9, 13, 17, 21

d = 9 - 5 = 4
Check: 13 - 9 = 4 ✓
Common difference: d = 4

**Example 2:** 30, 25, 20, 15, 10

d = 25 - 30 = -5
Common difference: d = -5 (decreasing sequence)

**Example 3:** 2, 5, 8, 11, 14

d = 5 - 2 = 3
Common difference: d = 3

**Example 4:** 7, 7, 7, 7, 7

d = 7 - 7 = 0
Common difference: d = 0 (constant sequence)

## Writing the Next Terms

Add the common difference to find the next term.

**Example 1:** Find next 3 terms of 4, 7, 10, 13, ...

d = 3
Next terms: 13 + 3 = 16
           16 + 3 = 19
           19 + 3 = 22

Sequence: 4, 7, 10, 13, 16, 19, 22, ...

**Example 2:** Find next 3 terms of 100, 95, 90, 85, ...

d = -5
Next terms: 85 - 5 = 80
           80 - 5 = 75
           75 - 5 = 70

Sequence: 100, 95, 90, 85, 80, 75, 70, ...

## The Explicit Formula

The **explicit formula** (or **nth term formula**) lets you find any term directly.

**Formula:** aₙ = a₁ + (n - 1)d

where:
- aₙ = nth term
- a₁ = first term
- n = position number
- d = common difference

**Example 1:** Find the 20th term of 3, 7, 11, 15, ...

a₁ = 3, d = 4, n = 20

a₂₀ = 3 + (20 - 1)(4)
a₂₀ = 3 + 19(4)
a₂₀ = 3 + 76
a₂₀ = 79

**Example 2:** Find the 50th term of 100, 95, 90, ...

a₁ = 100, d = -5, n = 50

a₅₀ = 100 + (50 - 1)(-5)
a₅₀ = 100 + 49(-5)
a₅₀ = 100 - 245
a₅₀ = -145

**Example 3:** Find the 15th term of 2, 9, 16, 23, ...

a₁ = 2, d = 7

a₁₅ = 2 + (15 - 1)(7)
a₁₅ = 2 + 98
a₁₅ = 100

## Writing the Explicit Formula

Given the sequence, write the formula for aₙ.

**Example 1:** 5, 8, 11, 14, 17, ...

a₁ = 5, d = 3

Formula: aₙ = 5 + (n - 1)(3)
Simplified: aₙ = 5 + 3n - 3 = 3n + 2

**Example 2:** 20, 17, 14, 11, 8, ...

a₁ = 20, d = -3

Formula: aₙ = 20 + (n - 1)(-3)
Simplified: aₙ = 20 - 3n + 3 = -3n + 23

**Example 3:** 4, 9, 14, 19, 24, ...

a₁ = 4, d = 5

Formula: aₙ = 4 + (n - 1)(5) = 5n - 1

## Finding Which Term Has a Given Value

Set aₙ equal to the value and solve for n.

**Example 1:** In the sequence 3, 7, 11, 15, ..., which term equals 99?

Formula: aₙ = 3 + (n - 1)(4) = 4n - 1

Set equal: 4n - 1 = 99
4n = 100
n = 25

The 25th term equals 99.

**Example 2:** In sequence 50, 46, 42, 38, ..., which term equals 2?

Formula: aₙ = 50 + (n - 1)(-4) = -4n + 54

-4n + 54 = 2
-4n = -52
n = 13

The 13th term equals 2.

**Example 3:** In sequence 1, 6, 11, 16, ..., which term equals 101?

aₙ = 1 + (n - 1)(5) = 5n - 4

5n - 4 = 101
5n = 105
n = 21

The 21st term is 101.

## Recursive Formula

A **recursive formula** defines each term using the previous term.

**General form:** aₙ = aₙ₋₁ + d with a₁ given

**Example 1:** 5, 9, 13, 17, ...

a₁ = 5
aₙ = aₙ₋₁ + 4

**Example 2:** 30, 25, 20, 15, ...

a₁ = 30
aₙ = aₙ₋₁ - 5

**Recursive vs. Explicit:**
- Recursive: need previous term
- Explicit: can find any term directly

## Graphing Arithmetic Sequences

Plot points (n, aₙ) where n is term number.

**Example:** 2, 5, 8, 11, 14, ...

Points: (1, 2), (2, 5), (3, 8), (4, 11), (5, 14)

**Observation:** Points lie on a straight line!
Slope of line = common difference d

The graph is **discrete** (individual points), not continuous.

## Arithmetic Means

An **arithmetic mean** between two numbers is the average.

**Example:** Find arithmetic mean between 10 and 20.

Mean = (10 + 20)/2 = 15

**Multiple means:**
Insert numbers to form arithmetic sequence.

**Example:** Insert 3 arithmetic means between 5 and 25.

We need: 5, ?, ?, ?, 25 (5 terms total)

a₁ = 5, a₅ = 25, n = 5

Use formula: 25 = 5 + (5 - 1)d
25 = 5 + 4d
20 = 4d
d = 5

Sequence: 5, 10, 15, 20, 25

## Sum of Arithmetic Sequence

The **sum of n terms** (Sₙ) has a special formula.

**Formula 1:** Sₙ = n(a₁ + aₙ)/2

**Formula 2:** Sₙ = n[2a₁ + (n - 1)d]/2

**Example 1:** Find sum of first 10 terms of 3, 7, 11, 15, ...

First find a₁₀:
a₁₀ = 3 + (10 - 1)(4) = 39

Use Formula 1:
S₁₀ = 10(3 + 39)/2
S₁₀ = 10(42)/2
S₁₀ = 210

**Example 2:** Find sum: 2 + 5 + 8 + ... (20 terms)

a₁ = 2, d = 3, n = 20

Use Formula 2:
S₂₀ = 20[2(2) + (20 - 1)(3)]/2
S₂₀ = 20[4 + 57]/2
S₂₀ = 20(61)/2
S₂₀ = 610

**Example 3:** Sum of 1 + 2 + 3 + ... + 100

a₁ = 1, aₙ = 100, n = 100

S₁₀₀ = 100(1 + 100)/2
S₁₀₀ = 100(101)/2
S₁₀₀ = 5,050

## Why the Sum Formula Works

**Visual explanation:**
Sum = 1 + 2 + 3 + 4 + 5
Reverse = 5 + 4 + 3 + 2 + 1
Add: 6 + 6 + 6 + 6 + 6 = 5 × 6 = 30
So sum = 30/2 = 15

**General:** Sₙ = n(first + last)/2

## Applications: Saving Money

**Example:** Save $10 first week, $15 second week, $20 third week, etc. How much saved after 20 weeks?

a₁ = 10, d = 5, n = 20

First find a₂₀:
a₂₀ = 10 + (20 - 1)(5) = 105

Sum:
S₂₀ = 20(10 + 105)/2
S₂₀ = 20(115)/2
S₂₀ = $1,150

## Applications: Seating

**Example:** Theater has 20 rows. First row has 15 seats, each row has 2 more seats than previous. How many total seats?

a₁ = 15, d = 2, n = 20

a₂₀ = 15 + 19(2) = 53 seats in last row

Total: S₂₀ = 20(15 + 53)/2 = 20(68)/2 = 680 seats

## Applications: Falling Objects

**Example:** Object falls 16 ft in 1st second, 48 ft in 2nd second, 80 ft in 3rd second, etc. How far in 10 seconds?

Sequence: 16, 48, 80, ...
d = 32

a₁₀ = 16 + 9(32) = 304 ft in 10th second

Total distance:
S₁₀ = 10(16 + 304)/2 = 1,600 ft

## Identifying Arithmetic Sequences

**Check if sequence is arithmetic:**
Calculate differences between consecutive terms.
If all equal, it's arithmetic!

**Example 1:** 3, 6, 12, 24, ...
6 - 3 = 3
12 - 6 = 6 (different!)
NOT arithmetic (this is geometric)

**Example 2:** 5, 8, 11, 14, ...
8 - 5 = 3
11 - 8 = 3
14 - 11 = 3 ✓
Arithmetic with d = 3

## Common Mistakes to Avoid

1. **Confusing term number with term value**
   a₅ = 20 means 5th term is 20, not "a times 5"

2. **Wrong formula**
   Use aₙ = a₁ + (n - 1)d, not aₙ = a₁ + nd

3. **Arithmetic errors with negatives**
   If d = -3, then add -3 (subtract 3)

4. **Forgetting to find d first**
   Always identify common difference!

5. **Not checking if sequence is arithmetic**
   Calculate differences to verify

6. **Mixing up sum formulas**
   Sₙ needs (a₁ + aₙ)/2, not (a₁ + d)

## Arithmetic vs. Geometric

**Arithmetic:** constant difference (add/subtract)
- 2, 5, 8, 11, ... (add 3)

**Geometric:** constant ratio (multiply/divide)
- 2, 6, 18, 54, ... (multiply by 3)

**Other patterns:**
- 1, 4, 9, 16, ... (perfect squares)
- 1, 1, 2, 3, 5, 8, ... (Fibonacci)

## Real-World Examples

**Arithmetic sequences appear in:**
- Stacking objects (height increases by constant)
- Straight-line depreciation (value decreases by constant)
- Regular savings plans
- Seating arrangements
- Odometer readings at constant speed
- Rental fees (base + per day)

## Quick Reference

**Common difference:**
d = a₂ - a₁

**Explicit formula:**
aₙ = a₁ + (n - 1)d

**Recursive formula:**
aₙ = aₙ₋₁ + d

**Sum formula:**
Sₙ = n(a₁ + aₙ)/2

## Practice Strategy

**Level 1:** Find common difference
- Given sequence, find d

**Level 2:** Find next terms
- Continue the pattern

**Level 3:** Find specific term
- Use explicit formula

**Level 4:** Write formula
- Given sequence, find aₙ

**Level 5:** Applications
- Word problems with sequences

## Tips for Success

- Always find d first
- Memorize: aₙ = a₁ + (n - 1)d
- Check work by calculating a few terms
- Verify sequence is arithmetic before using formulas
- Draw diagrams for word problems
- Remember n is position number, not the term value
- Practice identifying patterns
- Use sum formula for long sequences
- Graph sequences to visualize
- Connect to linear functions (same slope as d)`
    }
  });

  console.log('✅ Updated: arithmetic-sequences-algebra1');

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
