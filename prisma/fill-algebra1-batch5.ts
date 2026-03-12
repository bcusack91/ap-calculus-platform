import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 5 (3 topics)...\n');

  // Topic 1: Adding and Subtracting Polynomials (polynomial-operations-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'polynomial-operations-algebra1' },
    data: {
      textContent: `# Adding and Subtracting Polynomials

## What is a Polynomial?

A **polynomial** is an expression made up of variables, coefficients, and exponents combined using addition and subtraction.

**Examples of polynomials:**
- 3x + 5
- x² - 4x + 7
- 2x³ + 5x² - x + 8
- 7 (constant is a polynomial)

**Not polynomials:**
- 1/x (negative exponent: x⁻¹)
- √x (fractional exponent: x^(1/2))
- x² + 3/x

## Polynomial Vocabulary

**Terms:** Parts separated by + or - signs
Example: 3x² - 5x + 7 has three terms

**Coefficient:** Number multiplying the variable
In 5x², the coefficient is 5

**Degree:** Highest exponent in the polynomial
- 3x² + 5x - 1 has degree 2
- x³ - 4x² + x has degree 3
- 7 has degree 0

**Leading Coefficient:** Coefficient of the highest degree term
In 2x³ - 5x² + 3x - 1, the leading coefficient is 2

**Constant Term:** The term without a variable
In x² + 3x + 5, the constant is 5

## Types of Polynomials by Number of Terms

**Monomial:** One term
- Examples: 5x², -3x, 7

**Binomial:** Two terms
- Examples: x + 5, 3x² - 7

**Trinomial:** Three terms
- Examples: x² + 5x + 6, 2x² - 3x + 1

**Polynomial:** Four or more terms (or general term)
- Example: x³ + 2x² - 5x + 3

## Types of Polynomials by Degree

**Linear (Degree 1):** 3x + 5

**Quadratic (Degree 2):** x² + 3x - 2

**Cubic (Degree 3):** 2x³ - x² + 4x + 1

**Quartic (Degree 4):** x⁴ - 3x² + 2

## Standard Form

Polynomials in **standard form** are written with:
- Terms in descending order of degree (highest to lowest)
- Like terms combined

**Examples:**

Not standard: 5 + 3x - 2x²
Standard: -2x² + 3x + 5

Not standard: x² + 3x² - 4 + x
Standard: 4x² + x - 4

## Like Terms

**Like terms** have the same variable(s) raised to the same power(s).

**Like terms:**
- 3x and 5x (same variable, same power)
- 2x² and -7x² (same variable, same power)
- 4xy and -xy (same variables, same powers)

**NOT like terms:**
- 3x and 3x² (different powers)
- 2x and 2y (different variables)
- 5x²y and 5xy² (different powers)

## Combining Like Terms

Add or subtract the coefficients; keep the variable part the same.

**Example 1:** 3x + 5x
= (3 + 5)x
= 8x

**Example 2:** 7x² - 2x²
= (7 - 2)x²
= 5x²

**Example 3:** 4x + 2y - x + 5y
= (4x - x) + (2y + 5y)
= 3x + 7y

**Example 4:** 5x² + 3x - 2x² + 7x
= (5x² - 2x²) + (3x + 7x)
= 3x² + 10x

## Adding Polynomials

**Method 1: Horizontal (Combine Like Terms)**

Add by grouping like terms together.

**Example 1:** Add (3x + 5) + (2x + 7)

Remove parentheses: 3x + 5 + 2x + 7
Group like terms: (3x + 2x) + (5 + 7)
Combine: 5x + 12

**Example 2:** Add (x² + 3x - 4) + (2x² - x + 5)

Remove parentheses: x² + 3x - 4 + 2x² - x + 5
Group like terms: (x² + 2x²) + (3x - x) + (-4 + 5)
Combine: 3x² + 2x + 1

**Example 3:** Add (4x² - 2x + 1) + (x² + 5x - 3)

= 4x² - 2x + 1 + x² + 5x - 3
= (4x² + x²) + (-2x + 5x) + (1 - 3)
= 5x² + 3x - 2

**Method 2: Vertical (Column Method)**

Align like terms in columns and add.

**Example:** Add (3x² + 5x - 2) + (x² - 3x + 7)

Write aligned:
- First row: 3x² + 5x - 2
- Second row: x² - 3x + 7
- Add columns: 4x² + 2x + 5

## Subtracting Polynomials

**Key Idea:** Distribute the negative sign (or multiply by -1) to every term in the second polynomial, then add.

**Example 1:** Subtract (2x + 5) - (x + 3)

Distribute negative: 2x + 5 - x - 3
Group like terms: (2x - x) + (5 - 3)
Combine: x + 2

**Example 2:** Subtract (3x² + 2x - 1) - (x² - 4x + 5)

Distribute negative: 3x² + 2x - 1 - x² + 4x - 5
Note: -(x²) = -x², -(-4x) = +4x, -(5) = -5
Group: (3x² - x²) + (2x + 4x) + (-1 - 5)
Combine: 2x² + 6x - 6

**Example 3:** Subtract (5x² - 3x + 7) - (2x² + x - 4)

= 5x² - 3x + 7 - 2x² - x + 4
= (5x² - 2x²) + (-3x - x) + (7 + 4)
= 3x² - 4x + 11

**Vertical Method for Subtraction:**

**Example:** (4x² + 3x - 5) - (2x² - x + 3)

Write the first polynomial, then change signs of second and add:
  First:  4x² + 3x - 5
  Second (signs changed): -2x² + x - 3
  
Add them together: 2x² + 4x - 8

## Important: Distributing the Negative Sign

**Common Mistake:** Forgetting to distribute negative to all terms!

**Wrong:** (3x - 5) - (2x - 4) = 3x - 5 - 2x - 4 = x - 9 ✗

**Right:** (3x - 5) - (2x - 4) = 3x - 5 - 2x + 4 = x - 1 ✓

The negative must change ALL signs in the parentheses!

## Complex Examples

**Example 1:** Add three polynomials
(2x² + x) + (3x² - 4x + 1) + (x² + 2x - 3)

= 2x² + x + 3x² - 4x + 1 + x² + 2x - 3
= (2x² + 3x² + x²) + (x - 4x + 2x) + (1 - 3)
= 6x² - x - 2

**Example 2:** Multiple operations
(5x² + 2x - 3) + (2x² - x + 1) - (3x² + 4x - 2)

First add: (5x² + 2x²) + (2x - x) + (-3 + 1)
= 7x² + x - 2

Then subtract: 7x² + x - 2 - 3x² - 4x + 2
= (7x² - 3x²) + (x - 4x) + (-2 + 2)
= 4x² - 3x

**Example 3:** With fractions
(1/2 x² + 3x) + (1/4 x² - 2x + 5)

= (1/2 x² + 1/4 x²) + (3x - 2x) + 5
= (2/4 x² + 1/4 x²) + x + 5
= 3/4 x² + x + 5

## Polynomials with Multiple Variables

Apply the same rules - combine only like terms.

**Example 1:** Add (3xy + 2x) + (5xy - 4x)

= (3xy + 5xy) + (2x - 4x)
= 8xy - 2x

**Example 2:** Subtract (4x²y - 3xy + 2) - (x²y + xy - 5)

= 4x²y - 3xy + 2 - x²y - xy + 5
= (4x²y - x²y) + (-3xy - xy) + (2 + 5)
= 3x²y - 4xy + 7

**Example 3:** Add (2a²b + 3ab² - ab) + (a²b - 2ab² + 4ab)

= (2a²b + a²b) + (3ab² - 2ab²) + (-ab + 4ab)
= 3a²b + ab² + 3ab

## Simplifying Expressions

Always write final answers in standard form.

**Example 1:** Simplify 5 + 2x - 3x² + x - 4

Combine like terms: -3x² + (2x + x) + (5 - 4)
= -3x² + 3x + 1

**Example 2:** Simplify 4x³ + 2x - x³ + 5x² - 3x + 1

= (4x³ - x³) + 5x² + (2x - 3x) + 1
= 3x³ + 5x² - x + 1

## Evaluating Polynomials

After adding/subtracting, you may need to evaluate for a specific value.

**Example:** If x = 2, evaluate (3x² + 5x) + (x² - 2x + 3)

First simplify: 4x² + 3x + 3

Then substitute x = 2:
= 4(2)² + 3(2) + 3
= 4(4) + 6 + 3
= 16 + 6 + 3
= 25

## Perimeter Applications

Adding polynomials often appears in geometry problems.

**Example:** A rectangle has length (3x + 5) and width (2x - 1). Find the perimeter.

Perimeter = 2(length) + 2(width)
= 2(3x + 5) + 2(2x - 1)
= 6x + 10 + 4x - 2
= 10x + 8

**Example 2:** A triangle has sides (x + 3), (2x - 1), and (x + 5). Find the perimeter.

P = (x + 3) + (2x - 1) + (x + 5)
= x + 3 + 2x - 1 + x + 5
= 4x + 7

## Word Problems

**Example:** The cost to produce x items is (50x + 200) dollars. The revenue from selling x items is (80x - 50) dollars. What is the profit?

Profit = Revenue - Cost
= (80x - 50) - (50x + 200)
= 80x - 50 - 50x - 200
= 30x - 250

The profit is (30x - 250) dollars.

## Common Mistakes to Avoid

1. **Not distributing the negative sign**
   (3x - 5) - (2x - 4) ≠ 3x - 5 - 2x - 4

2. **Combining unlike terms**
   3x + 2x² ≠ 5x³
   These cannot be combined!

3. **Forgetting to write in standard form**
   5 + 3x - 2x² should be -2x² + 3x + 5

4. **Sign errors with multiple operations**
   Be extra careful when subtracting twice

5. **Confusing coefficients and exponents**
   2x³ + 3x³ = 5x³, NOT 5x⁶

## Checking Your Work

**Method 1: Substitute a value**
Pick x = 1 and evaluate both the original expression and your answer. They should match.

**Method 2: Use a different value**
Try x = 2 as well to be more confident.

**Method 3: Reverse the operation**
For addition, subtract one polynomial from the sum to get the other.

## Quick Reference

| Operation | Rule |
|-----------|------|
| Adding | Combine like terms, keep signs |
| Subtracting | Distribute negative, then add |
| Like terms | Same variable(s) and power(s) |
| Standard form | Descending degree order |
| Combining | Add/subtract coefficients only |

## Practice Strategy

**Level 1:** Start with monomials and binomials
- 3x + 5x
- (2x + 3) + (x + 4)

**Level 2:** Move to trinomials
- (x² + 2x + 1) + (x² - x + 3)

**Level 3:** Practice subtraction carefully
- (3x² - 2x + 5) - (x² + 4x - 1)

**Level 4:** Multiple operations
- Add three or more polynomials
- Mix addition and subtraction

**Level 5:** Applications
- Perimeter problems
- Word problems
- Multiple variables

## Tips for Success

- Write clearly and line up like terms
- Use parentheses when needed
- Check signs carefully, especially when subtracting
- Always simplify completely
- Write final answers in standard form
- Show all steps - don't skip!
- Practice, practice, practice!

## Mental Math Shortcuts

For simple problems, combine mentally:
- (2x + 3) + (x + 5) = 3x + 8
- (5x - 2) - (3x + 1) = 2x - 3

For complex problems, write it out:
- Use horizontal or vertical method
- Show intermediate steps
- Double-check work`
    }
  });

  console.log('✅ Updated: polynomial-operations-algebra1');

  // Topic 2: Multiplying Polynomials (multiplying-polynomials-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'multiplying-polynomials-algebra1' },
    data: {
      textContent: `# Multiplying Polynomials

## Introduction to Polynomial Multiplication

Unlike addition and subtraction where we combine like terms, **multiplication** creates new terms by multiplying each term in one polynomial by each term in the other.

**Key Principle:** The distributive property
a(b + c) = ab + ac

This extends to polynomials of any size!

## Multiplying Monomials

A **monomial** is a single term.

**Rules:**
1. Multiply coefficients
2. Add exponents of like bases (product rule)

**Example 1:** 3x · 5x
= (3 · 5)(x · x)
= 15x²

**Example 2:** (2x²)(4x³)
= (2 · 4)(x² · x³)
= 8x⁵

**Example 3:** (3x²y)(5xy³)
= (3 · 5)(x² · x)(y · y³)
= 15x³y⁴

**Example 4:** (-4a²b)(3ab³)
= (-4 · 3)(a² · a)(b · b³)
= -12a³b⁴

## Multiplying Monomial by Polynomial

Use the **distributive property**: multiply the monomial by each term.

**Example 1:** 3(x + 5)
= 3x + 15

**Example 2:** 2x(3x + 4)
= 2x · 3x + 2x · 4
= 6x² + 8x

**Example 3:** 5x²(2x² - 3x + 4)
= 5x² · 2x² + 5x² · (-3x) + 5x² · 4
= 10x⁴ - 15x³ + 20x²

**Example 4:** -3x(4x² - 2x + 5)
= -3x · 4x² + (-3x) · (-2x) + (-3x) · 5
= -12x³ + 6x² - 15x

**Example 5:** 2xy(3x²y - 4xy + y²)
= 6x³y² - 8x²y² + 2xy³

## Multiplying Binomials (FOIL Method)

FOIL stands for: **F**irst, **O**uter, **I**nner, **L**ast

For (a + b)(c + d):
- First: a · c
- Outer: a · d
- Inner: b · c
- Last: b · d

Then combine like terms.

**Example 1:** (x + 3)(x + 5)

F: x · x = x²
O: x · 5 = 5x
I: 3 · x = 3x
L: 3 · 5 = 15

Combine: x² + 5x + 3x + 15 = x² + 8x + 15

**Example 2:** (x + 4)(x - 2)

F: x · x = x²
O: x · (-2) = -2x
I: 4 · x = 4x
L: 4 · (-2) = -8

Combine: x² - 2x + 4x - 8 = x² + 2x - 8

**Example 3:** (2x + 3)(x + 5)

F: 2x · x = 2x²
O: 2x · 5 = 10x
I: 3 · x = 3x
L: 3 · 5 = 15

Combine: 2x² + 10x + 3x + 15 = 2x² + 13x + 15

**Example 4:** (3x - 2)(2x - 5)

F: 3x · 2x = 6x²
O: 3x · (-5) = -15x
I: (-2) · 2x = -4x
L: (-2) · (-5) = 10

Combine: 6x² - 15x - 4x + 10 = 6x² - 19x + 10

## Alternative: Box Method for Binomials

Draw a 2×2 grid and multiply.

**Example:** (x + 3)(x + 5)

Create a box with:
- Top row: x and 5
- Left column: x and 3
- Fill boxes: x·x=x², x·5=5x, 3·x=3x, 3·5=15

Sum all boxes: x² + 5x + 3x + 15 = x² + 8x + 15

## Special Products: Difference of Squares

**(a + b)(a - b) = a² - b²**

The outer and inner terms cancel!

**Example 1:** (x + 5)(x - 5)
= x² - 25

**Example 2:** (3x + 4)(3x - 4)
= (3x)² - 4²
= 9x² - 16

**Example 3:** (2x + 7)(2x - 7)
= 4x² - 49

**Why it works:**
(x + 5)(x - 5)
= x² - 5x + 5x - 25
= x² - 25 (middle terms cancel)

## Special Products: Perfect Square Trinomials

**(a + b)² = a² + 2ab + b²**
**(a - b)² = a² - 2ab + b²**

**Example 1:** (x + 3)²
= x² + 2(x)(3) + 3²
= x² + 6x + 9

**Example 2:** (x - 5)²
= x² - 2(x)(5) + 5²
= x² - 10x + 25

**Example 3:** (2x + 4)²
= (2x)² + 2(2x)(4) + 4²
= 4x² + 16x + 16

**Example 4:** (3x - 2)²
= (3x)² - 2(3x)(2) + 2²
= 9x² - 12x + 4

**Common Mistake:**
(x + 3)² ≠ x² + 9
You MUST include the middle term: x² + 6x + 9

## Multiplying Binomial by Trinomial

Distribute each term of the binomial to all terms of the trinomial.

**Example 1:** (x + 2)(x² + 3x + 4)

x(x² + 3x + 4) + 2(x² + 3x + 4)
= x³ + 3x² + 4x + 2x² + 6x + 8
= x³ + 5x² + 10x + 8

**Example 2:** (2x - 1)(x² - x + 3)

2x(x² - x + 3) - 1(x² - x + 3)
= 2x³ - 2x² + 6x - x² + x - 3
= 2x³ - 3x² + 7x - 3

**Example 3:** (x + 3)(2x² - 5x + 1)

= x(2x² - 5x + 1) + 3(2x² - 5x + 1)
= 2x³ - 5x² + x + 6x² - 15x + 3
= 2x³ + x² - 14x + 3

## Box Method for Larger Polynomials

Useful for trinomial × trinomial or larger.

**Example:** (x + 2)(x² + 3x + 4)

Create a box with x² 3x and 4 across the top, x and 2 down the side:
- x times x² = x³
- x times 3x = 3x²
- x times 4 = 4x
- 2 times x² = 2x²
- 2 times 3x = 6x
- 2 times 4 = 8

Sum: x³ + 3x² + 4x + 2x² + 6x + 8 = x³ + 5x² + 10x + 8

## Multiplying Trinomials

Distribute systematically - each term times each term.

**Example:** (x + 1)(x + 2)(x + 3)

First multiply (x + 1)(x + 2):
= x² + 2x + x + 2
= x² + 3x + 2

Then multiply result by (x + 3):
(x² + 3x + 2)(x + 3)
= x(x² + 3x + 2) + 3(x² + 3x + 2)
= x³ + 3x² + 2x + 3x² + 9x + 6
= x³ + 6x² + 11x + 6

## Polynomials with Multiple Variables

Same rules apply!

**Example 1:** (x + y)(x + 2y)

F: x · x = x²
O: x · 2y = 2xy
I: y · x = xy
L: y · 2y = 2y²

Result: x² + 2xy + xy + 2y² = x² + 3xy + 2y²

**Example 2:** (2a + b)(3a - 2b)

= 6a² - 4ab + 3ab - 2b²
= 6a² - ab - 2b²

**Example 3:** (x + y)²
= x² + 2xy + y²

## Common Mistakes to Avoid

1. **Forgetting the middle term in perfect squares**
   Wrong: (x + 3)² = x² + 9
   Right: (x + 3)² = x² + 6x + 9

2. **Sign errors with negatives**
   Careful: (-3)(-2) = +6, not -6

3. **Not combining like terms**
   After FOIL, always combine!

4. **Forgetting to distribute to ALL terms**
   x(x² + 2x + 1) has THREE terms to multiply

5. **Exponent errors**
   x · x = x², not 2x or x

## Applications: Area Problems

**Example 1:** Rectangle with length (x + 5) and width (x + 3). Find area.

Area = length × width
= (x + 5)(x + 3)
= x² + 3x + 5x + 15
= x² + 8x + 15

**Example 2:** Square with side length (2x + 1). Find area.

Area = (side)²
= (2x + 1)²
= 4x² + 4x + 1

## Volume Applications

**Example:** Box with dimensions (x + 2), (x + 1), and x. Find volume.

V = length × width × height
= (x + 2)(x + 1)(x)

First: (x + 2)(x + 1) = x² + 3x + 2
Then: (x² + 3x + 2)(x) = x³ + 3x² + 2x

## Patterns and Shortcuts

**Binomial Squared:**
(a ± b)² = a² ± 2ab + b²

**Difference of Squares:**
(a + b)(a - b) = a² - b²

**Sum and Difference:**
If you see (x + k)(x - k), answer is x² - k²

**Trinomial × Monomial:**
Distribute the monomial to each term

## Simplifying Complex Products

**Example:** 2x(x + 3)(x - 2)

Method 1 - Left to right:
2x(x + 3) = 2x² + 6x
(2x² + 6x)(x - 2) = 2x³ - 4x² + 6x² - 12x = 2x³ + 2x² - 12x

Method 2 - Binomials first:
(x + 3)(x - 2) = x² + x - 6
2x(x² + x - 6) = 2x³ + 2x² - 12x

Same answer either way!

## Word Problem

**Example:** The profit from selling x items is (20x - 100) dollars. If you sell (x + 5) batches, what is the total profit?

Total profit = (20x - 100)(x + 5)
= 20x² + 100x - 100x - 500
= 20x² - 500

## Checking Your Work

**Method 1: Substitute x = 1**
Evaluate both expressions with x = 1.

Example: Does (x + 2)(x + 3) = x² + 5x + 6?
Left: (1 + 2)(1 + 3) = 3 · 4 = 12
Right: 1² + 5(1) + 6 = 1 + 5 + 6 = 12 ✓

**Method 2: Factor your answer**
If you can factor back to the original, it's correct!

## Quick Reference

| Product Type | Pattern | Example |
|--------------|---------|---------|
| Monomial × Monomial | Multiply coefficients, add exponents | 3x · 5x = 15x² |
| Monomial × Polynomial | Distribute | 2x(x + 3) = 2x² + 6x |
| Binomial × Binomial | FOIL | (x+2)(x+3) = x²+5x+6 |
| (a+b)(a-b) | a² - b² | (x+5)(x-5) = x²-25 |
| (a±b)² | a² ± 2ab + b² | (x+3)² = x²+6x+9 |

## Practice Strategy

**Level 1: Monomials**
- 2x · 3x
- 5x² · 4x³

**Level 2: Distribute**
- 3(x + 4)
- 2x(3x - 5)

**Level 3: FOIL**
- (x + 3)(x + 4)
- (x - 2)(x + 5)

**Level 4: Special products**
- (x + 5)(x - 5)
- (x + 3)²

**Level 5: Complex**
- (2x + 3)(x² - x + 1)
- (x + 1)(x + 2)(x + 3)

## Tips for Success

- Write neatly and organize work
- Show all steps - don't skip FOIL terms
- Combine like terms at the end
- Check signs carefully
- Practice special products until automatic
- Use box method for complex problems
- Always verify your answer`
    }
  });

  console.log('✅ Updated: multiplying-polynomials-algebra1');

  // Topic 3: Solving Quadratic Equations (solving-quadratics-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'solving-quadratics-algebra1' },
    data: {
      textContent: `# Solving Quadratic Equations

## What is a Quadratic Equation?

A **quadratic equation** is an equation that can be written in the form:

ax² + bx + c = 0

where:
- a, b, and c are constants (numbers)
- a ≠ 0 (if a = 0, it's linear, not quadratic)
- x is the variable

**Examples:**
- x² + 5x + 6 = 0
- 2x² - 3x + 1 = 0
- x² - 16 = 0
- x² = 9

## Standard Form

**Standard form:** ax² + bx + c = 0

Before solving, rearrange the equation to standard form (everything on one side, zero on the other).

**Example 1:** x² + 5x = -6
Standard form: x² + 5x + 6 = 0

**Example 2:** 2x² = 3x - 1
Standard form: 2x² - 3x + 1 = 0

**Example 3:** x² - 25 = 0
Already in standard form

## Solutions of Quadratic Equations

Quadratic equations can have:
- **Two different real solutions**
- **One repeated real solution** (two equal solutions)
- **No real solutions** (two complex solutions)

The solutions are also called:
- Roots
- Zeros
- x-intercepts (when graphed)

## Method 1: Solving by Factoring

When the quadratic can be factored, use the **Zero Product Property:**

If ab = 0, then a = 0 or b = 0

**Steps:**
1. Write in standard form
2. Factor the quadratic
3. Set each factor equal to zero
4. Solve each equation
5. Check solutions

**Example 1:** Solve x² + 5x + 6 = 0

Factor: (x + 2)(x + 3) = 0

Set each factor to zero:
x + 2 = 0  or  x + 3 = 0
x = -2     or  x = -3

Solutions: x = -2 or x = -3

Check x = -2: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓
Check x = -3: (-3)² + 5(-3) + 6 = 9 - 15 + 6 = 0 ✓

**Example 2:** Solve x² - 9 = 0

Factor (difference of squares): (x + 3)(x - 3) = 0

x + 3 = 0  or  x - 3 = 0
x = -3     or  x = 3

Solutions: x = ±3

**Example 3:** Solve 2x² + 5x - 3 = 0

Factor: (2x - 1)(x + 3) = 0

2x - 1 = 0  or  x + 3 = 0
x = 1/2     or  x = -3

Solutions: x = 1/2 or x = -3

**Example 4:** Solve x² - 6x + 9 = 0

Factor (perfect square): (x - 3)² = 0

x - 3 = 0
x = 3

Solution: x = 3 (repeated root)

## Method 2: Solving by Square Roots

For equations of the form x² = k, take the square root of both sides.

Remember: √(x²) = ±x (two solutions: positive and negative)

**Example 1:** Solve x² = 25

Take square root: x = ±√25
x = ±5

Solutions: x = 5 or x = -5

**Example 2:** Solve x² = 7

x = ±√7

Solutions: x = √7 or x = -√7

**Example 3:** Solve x² - 16 = 0

Add 16: x² = 16
x = ±4

**Example 4:** Solve 3x² = 75

Divide by 3: x² = 25
x = ±5

**Example 5:** Solve x² = -9

x = ±√(-9)

Since we can't take the square root of a negative number (in real numbers), there is **no real solution**.

## Solving (x - h)² = k

When the equation is in the form (x - h)² = k:

**Steps:**
1. Take square root of both sides: x - h = ±√k
2. Solve for x: x = h ± √k

**Example 1:** Solve (x - 3)² = 16

Take square root: x - 3 = ±4

Two equations:
x - 3 = 4   or   x - 3 = -4
x = 7       or   x = -1

**Example 2:** Solve (x + 2)² = 9

x + 2 = ±3

x + 2 = 3   or   x + 2 = -3
x = 1       or   x = -5

**Example 3:** Solve (x - 5)² = 12

x - 5 = ±√12
x - 5 = ±2√3
x = 5 ± 2√3

Solutions: x = 5 + 2√3 or x = 5 - 2√3

## When to Use Each Method

**Use Factoring when:**
- The quadratic factors nicely with integers
- You recognize special patterns (difference of squares, perfect square trinomial)
- a, b, c are small integers

**Use Square Roots when:**
- The equation is x² = k or (x - h)² = k
- There's no x term (b = 0)
- The equation is already isolated

**Use Quadratic Formula when:**
- The quadratic doesn't factor easily
- You need exact decimal answers
- Other methods don't work

## Factoring Strategy Review

**For x² + bx + c = 0:**
Find two numbers that multiply to c and add to b

**For ax² + bx + c = 0 (a ≠ 1):**
Use AC method or trial and error

**Difference of squares:**
x² - k² = (x + k)(x - k)

**Perfect square trinomial:**
x² ± 2kx + k² = (x ± k)²

## Solving with GCF First

Always factor out the GCF before using other methods.

**Example 1:** Solve 2x² + 8x = 0

Factor out 2x: 2x(x + 4) = 0

Set each factor to zero:
2x = 0   or   x + 4 = 0
x = 0    or   x = -4

**Example 2:** Solve 3x² - 12x = 0

Factor: 3x(x - 4) = 0

3x = 0   or   x - 4 = 0
x = 0    or   x = 4

**Example 3:** Solve 5x² = 20x

Standard form: 5x² - 20x = 0
Factor: 5x(x - 4) = 0

x = 0 or x = 4

**Warning:** Never divide both sides by x!
You'll lose the solution x = 0.

## Equations Not in Standard Form

**Example 1:** Solve x² + 7x = -12

Standard form: x² + 7x + 12 = 0
Factor: (x + 3)(x + 4) = 0
Solutions: x = -3 or x = -4

**Example 2:** Solve 2x² = 5x + 3

Standard form: 2x² - 5x - 3 = 0
Factor: (2x + 1)(x - 3) = 0
Solutions: x = -1/2 or x = 3

**Example 3:** Solve (x + 3)(x - 1) = 5

First expand: x² + 2x - 3 = 5
Standard form: x² + 2x - 8 = 0
Factor: (x + 4)(x - 2) = 0
Solutions: x = -4 or x = 2

**Important:** Don't set x + 3 = 5 and x - 1 = 5!
Must equal zero for zero product property.

## Applications: Area Problems

**Example 1:** A rectangle has length 3 more than width. Area is 40. Find dimensions.

Let w = width
Then w + 3 = length

Area: w(w + 3) = 40
w² + 3w = 40
w² + 3w - 40 = 0
(w + 8)(w - 5) = 0

w = -8 or w = 5

Since width must be positive: w = 5 cm
Length = 8 cm

**Example 2:** A square has area 144 cm². Find side length.

s² = 144
s = ±12

Since side length is positive: s = 12 cm

## Applications: Number Problems

**Example:** The product of two consecutive integers is 72. Find the integers.

Let n = first integer
Then n + 1 = second integer

n(n + 1) = 72
n² + n = 72
n² + n - 72 = 0
(n + 9)(n - 8) = 0

n = -9 or n = 8

Two solutions:
- If n = -9, then integers are -9 and -8
- If n = 8, then integers are 8 and 9

Both pairs work!

## Applications: Projectile Motion

Height formula: h = -16t² + v₀t + h₀

where:
- h = height at time t
- v₀ = initial velocity
- h₀ = initial height

**Example:** A ball is thrown upward at 48 ft/s from height 6 ft. When does it hit the ground?

h = -16t² + 48t + 6

Set h = 0 (ground level):
-16t² + 48t + 6 = 0

Divide by -2: 8t² - 24t - 3 = 0

This doesn't factor nicely - would use quadratic formula.

But if it were: -16t² + 48t = 0
Factor: -16t(t - 3) = 0
t = 0 or t = 3

At t = 0 (start) and t = 3 seconds (lands)

## Checking Solutions

Always substitute back into the original equation.

**Example:** Verify x = 2 is a solution to x² - 5x + 6 = 0

(2)² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓

## Common Mistakes

1. **Forgetting ± when taking square roots**
   x² = 9 has TWO solutions: x = 3 and x = -3

2. **Dividing by variable**
   Never divide both sides by x - you'll lose solutions!

3. **Not setting equal to zero**
   Must have 0 on one side to use factoring

4. **Arithmetic errors**
   Check your factoring by multiplying back

5. **Forgetting negative solutions**
   Both positive and negative roots are valid

## Quick Reference

| Form | Method | Example |
|------|--------|---------|
| x² = k | Square root | x² = 25 → x = ±5 |
| (x-h)² = k | Square root | (x-3)² = 16 → x = 3±4 |
| x² + bx + c = 0 | Factor | (x+2)(x+3) = 0 |
| ax² + bx = 0 | GCF | x(x+5) = 0 |
| x² - k² = 0 | Difference of squares | x² - 9 = (x+3)(x-3) |

## Practice Strategy

**Level 1:** x² = k
- x² = 16
- x² = 50

**Level 2:** GCF factoring
- x² + 5x = 0
- 2x² - 8x = 0

**Level 3:** Simple factoring
- x² + 7x + 12 = 0
- x² - 9 = 0

**Level 4:** Harder factoring
- 2x² + 5x + 3 = 0
- x² + 6x + 9 = 0

**Level 5:** Applications
- Area problems
- Number problems
- Projectile motion

## Tips for Success

- Always write in standard form first
- Try factoring before other methods
- Factor out GCF when possible
- Check both solutions
- Show all work clearly
- Practice recognizing factorable patterns
- Remember the ± when taking square roots`
    }
  });

  console.log('✅ Updated: solving-quadratics-algebra1');

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
