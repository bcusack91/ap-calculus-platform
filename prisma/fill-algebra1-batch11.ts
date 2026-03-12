import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Algebra 1 topics - Batch 11 (FINAL - 1 topic)...\n');

  // Topic 1: Rational Expressions Introduction (rational-expressions-intro-algebra1)
  await prisma.topic.updateMany({
    where: { slug: 'rational-expressions-intro-algebra1' },
    data: {
      textContent: `# Introduction to Rational Expressions

## What is a Rational Expression?

A **rational expression** is a fraction where the numerator and/or denominator contains a variable.

**General form:** P(x) / Q(x) where P and Q are polynomials

**Examples:**
- 3/x
- (x + 2)/(x - 5)
- (x² - 4)/(x² + 3x + 2)
- 5/(2x² - 7x + 3)

Think of them as "algebraic fractions"!

## Rational Expressions vs. Fractions

**Regular fraction:** 3/4, 7/8 (numbers only)

**Rational expression:** 3/x, (x+1)/(x-2) (has variables)

**Same rules apply!**
- Simplify by canceling common factors
- Find common denominators to add/subtract
- Multiply/divide using same techniques

## Domain Restrictions

The denominator can NEVER equal zero!

**Finding restrictions:**
1. Set denominator equal to zero
2. Solve for x
3. Exclude those values from domain

**Example 1:** 3/x

Restriction: x ≠ 0
Domain: All real numbers except 0
Written: (-∞, 0) ∪ (0, ∞)

**Example 2:** (x + 1)/(x - 5)

Set denominator to zero: x - 5 = 0
x = 5

Restriction: x ≠ 5
Domain: (-∞, 5) ∪ (5, ∞)

**Example 3:** 4/(x² - 9)

x² - 9 = 0
x² = 9
x = ±3

Restrictions: x ≠ 3 and x ≠ -3
Domain: (-∞, -3) ∪ (-3, 3) ∪ (3, ∞)

**Example 4:** (2x + 1)/(x² + 5x + 6)

Factor denominator: (x + 2)(x + 3) = 0
x = -2 or x = -3

Restrictions: x ≠ -2, x ≠ -3

## Evaluating Rational Expressions

Substitute the value and simplify.

**Example 1:** Evaluate 3/x when x = 6

3/6 = 1/2

**Example 2:** Evaluate (x + 2)/(x - 1) when x = 4

(4 + 2)/(4 - 1) = 6/3 = 2

**Example 3:** Evaluate (x² - 4)/(x + 2) when x = 3

(3² - 4)/(3 + 2) = (9 - 4)/5 = 5/5 = 1

**Warning:** Never evaluate at a restricted value!

If x = 5 is restricted, DON'T substitute x = 5.

## Simplifying Rational Expressions

**Process:**
1. Factor numerator completely
2. Factor denominator completely
3. Cancel common factors
4. State restrictions

**Example 1:** Simplify (x² - 4)/(x + 2)

Factor numerator: x² - 4 = (x + 2)(x - 2)

Expression: (x + 2)(x - 2)/(x + 2)

Cancel common factor (x + 2):
= x - 2

**Restriction:** x ≠ -2 (from original denominator)

**Final answer:** x - 2, where x ≠ -2

**Example 2:** Simplify (2x + 6)/(4x + 12)

Factor numerator: 2(x + 3)
Factor denominator: 4(x + 3)

= 2(x + 3)/[4(x + 3)]

Cancel (x + 3):
= 2/4 = 1/2

**Restriction:** x ≠ -3

**Example 3:** Simplify (x² - 5x + 6)/(x² - 4)

Factor numerator: (x - 2)(x - 3)
Factor denominator: (x - 2)(x + 2)

= (x - 2)(x - 3)/[(x - 2)(x + 2)]

Cancel (x - 2):
= (x - 3)/(x + 2)

**Restrictions:** x ≠ 2, x ≠ -2

## Common Factors to Cancel

**Only cancel FACTORS, not TERMS!**

**Correct:** (x - 3)/(x - 3) = 1

**WRONG:** (x + 3)/x ≠ 3 (can't cancel x when it's a term, not factor!)

**Correct factoring first:**

(x² + 3x)/x = x(x + 3)/x = x + 3 ✓

## Factoring Review for Rational Expressions

**Difference of squares:**
x² - 9 = (x - 3)(x + 3)

**Trinomials:**
x² + 5x + 6 = (x + 2)(x + 3)

**GCF (Greatest Common Factor):**
3x² + 6x = 3x(x + 2)

**Factor completely before simplifying!**

## Example: Complete Simplification

Simplify: (x² + 6x + 8)/(x² - 4)

**Step 1:** Factor numerator
x² + 6x + 8 = (x + 2)(x + 4)

**Step 2:** Factor denominator
x² - 4 = (x + 2)(x - 2)

**Step 3:** Write with factors
= (x + 2)(x + 4)/[(x + 2)(x - 2)]

**Step 4:** Cancel common factors
= (x + 4)/(x - 2)

**Step 5:** State restrictions
x ≠ 2, x ≠ -2 (from original denominator)

**Final answer:** (x + 4)/(x - 2), where x ≠ ±2

## Opposites in Rational Expressions

**Key fact:** (a - b) = -(b - a)

**Example:** (x - 5) = -(5 - x)

**Useful for simplifying:**

(x - 3)/(3 - x) = (x - 3)/[-(x - 3)] = -1

**Example:** Simplify (2 - x)/(x - 2)

Rewrite numerator: -(x - 2)

= -(x - 2)/(x - 2) = -1

**Restriction:** x ≠ 2

## Multiplying Rational Expressions

**Rule:** (a/b) · (c/d) = (ac)/(bd)

**Process:**
1. Factor all numerators and denominators
2. Cancel common factors
3. Multiply remaining factors
4. State restrictions

**Example 1:** (x/3) · (6/x²)

= (x · 6)/(3 · x²)
= 6x/(3x²)
= 2/x

**Restriction:** x ≠ 0

**Example 2:** [(x² - 4)/(x + 3)] · [(x + 3)/(x - 2)]

Factor: [(x - 2)(x + 2)/(x + 3)] · [(x + 3)/(x - 2)]

Cancel (x - 2) and (x + 3):
= x + 2

**Restrictions:** x ≠ -3, x ≠ 2

**Example 3:** [(2x + 6)/(x² - 9)] · [(x - 3)/(4)]

Factor: [2(x + 3)/(x - 3)(x + 3)] · [(x - 3)/4]

Cancel (x + 3) and (x - 3):
= 2/4 = 1/2

**Restrictions:** x ≠ ±3

## Dividing Rational Expressions

**Rule:** (a/b) ÷ (c/d) = (a/b) · (d/c)

**"Flip and multiply!"**

**Process:**
1. Change ÷ to ×
2. Flip the second fraction (reciprocal)
3. Follow multiplication steps

**Example 1:** (x/5) ÷ (x/10)

= (x/5) · (10/x)
= 10x/(5x)
= 2

**Restriction:** x ≠ 0

**Example 2:** [(x² - 1)/(x + 2)] ÷ [(x - 1)/(x + 2)]

= [(x² - 1)/(x + 2)] · [(x + 2)/(x - 1)]

Factor: [(x - 1)(x + 1)/(x + 2)] · [(x + 2)/(x - 1)]

Cancel (x - 1) and (x + 2):
= x + 1

**Restrictions:** x ≠ -2, x ≠ 1

## Adding/Subtracting with Same Denominator

**Rule:** a/c + b/c = (a + b)/c

**Example 1:** (3/x) + (5/x)

= (3 + 5)/x = 8/x

**Example 2:** [(x + 1)/(x - 2)] + [(x - 3)/(x - 2)]

= (x + 1 + x - 3)/(x - 2)
= (2x - 2)/(x - 2)
= 2(x - 1)/(x - 2)

**Restriction:** x ≠ 2

**Example 3:** [(2x)/(x + 5)] - [(x - 3)/(x + 5)]

= [2x - (x - 3)]/(x + 5)
= (2x - x + 3)/(x + 5)
= (x + 3)/(x + 5)

**Be careful with subtraction! Distribute the negative.**

## Finding Common Denominators

For different denominators, find LCD (Least Common Denominator).

**Example 1:** Add 2/x + 3/(2x)

LCD = 2x

Convert: (2 · 2)/(x · 2) + 3/(2x) = 4/(2x) + 3/(2x) = 7/(2x)

**Example 2:** Add 1/(x - 1) + 2/(x + 1)

LCD = (x - 1)(x + 1)

Convert each:
= [1(x + 1)]/[(x - 1)(x + 1)] + [2(x - 1)]/[(x - 1)(x + 1)]
= (x + 1 + 2x - 2)/[(x - 1)(x + 1)]
= (3x - 1)/[(x - 1)(x + 1)]

**Restrictions:** x ≠ 1, x ≠ -1

## Complex Fractions

A **complex fraction** has a fraction in the numerator and/or denominator.

**Example:** (2/x) / (3/y)

**Method 1:** Multiply by reciprocal
= (2/x) · (y/3) = 2y/(3x)

**Method 2:** Multiply by LCD of small fractions
LCD of x and y is xy

= [(2/x) · xy] / [(3/y) · xy]
= 2y / 3x

**Example 2:** (1 + 1/x) / (1 - 1/x)

Multiply numerator and denominator by x:
= [x(1 + 1/x)] / [x(1 - 1/x)]
= (x + 1) / (x - 1)

## Real-World Applications

**Example 1: Average Speed**

If you drive 120 miles at speed r, time = 120/r hours

**Example 2: Work Rate**

If you can paint a room in x hours, your rate = 1/x of the room per hour

**Example 3: Concentration**

If you have x grams of salt in 100 mL of water, concentration = x/100 grams per mL

## Undefined vs. Zero

**Expression equals ZERO:** Numerator = 0 (denominator ≠ 0)

**Expression UNDEFINED:** Denominator = 0

**Example:** When is (x - 3)/(x + 2) equal to zero?

Set numerator to zero: x - 3 = 0 → x = 3
Check denominator at x = 3: 3 + 2 = 5 ≠ 0 ✓

Expression equals zero when x = 3

**When undefined?**
x + 2 = 0 → x = -2

## Common Mistakes to Avoid

1. **Canceling terms instead of factors**
   WRONG: (x + 3)/x = 3
   CORRECT: Must factor first!

2. **Forgetting restrictions**
   Always state x ≠ (restricted values)

3. **Not factoring completely**
   Factor both numerator and denominator fully

4. **Sign errors in subtraction**
   (a - b)/c - (d - e)/c = [a - b - (d - e)]/c
   Distribute the negative!

5. **Evaluating at restricted values**
   Never substitute restricted values

6. **Forgetting to flip when dividing**
   Division: multiply by reciprocal

## Simplifying Strategy

**Step-by-step:**
1. Factor everything completely
2. Identify restrictions (from original denominators)
3. Cancel common factors
4. Multiply/divide/add/subtract as needed
5. Simplify final answer
6. State restrictions clearly

## Quick Reference

**Domain:** Exclude values where denominator = 0

**Simplifying:** Factor, then cancel common factors

**Multiplying:** (a/b)(c/d) = (ac)/(bd)

**Dividing:** (a/b) ÷ (c/d) = (a/b) · (d/c)

**Adding (same denominator):** (a/c) + (b/c) = (a+b)/c

**Adding (different):** Find LCD first

**Opposites:** (a - b) = -(b - a)

## Practice Strategy

**Level 1:** Find restrictions
- Given expression, find domain

**Level 2:** Simplify by factoring
- Factor and cancel

**Level 3:** Multiply and divide
- With factoring

**Level 4:** Add and subtract
- Find common denominators

**Level 5:** Complex fractions
- Simplify multi-level fractions

## Tips for Success

- Always find restrictions FIRST from original denominator
- Factor completely before canceling
- Only cancel FACTORS, never terms
- Keep track of restrictions through all steps
- Use parentheses when subtracting expressions
- Check answers by substituting values
- Remember opposite factors: (a-b) = -(b-a)
- Find LCD carefully for addition/subtraction
- Simplify final answer completely
- Practice factoring skills - it's essential!
- Write restrictions with every answer
- Don't fear complex fractions - multiply by LCD
- Connect to numeric fraction skills
- Understand why we can't divide by zero
- Master this foundation for advanced algebra!

## Looking Ahead

Rational expressions appear in:
- **Algebra 2:** Rational equations, rational functions
- **Precalculus:** Asymptotes, holes in graphs
- **Calculus:** Limits, derivatives, partial fractions
- **Real-world:** Rates, concentrations, efficiency

Mastering these basics now will help you succeed later!`
    }
  });

  console.log('✅ Updated: rational-expressions-intro-algebra1');

  console.log('\n✨ Successfully created content for the final topic!');
  console.log('🎉 CONTENT CREATION PHASE COMPLETE! All 31 topics now have comprehensive content!');
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
