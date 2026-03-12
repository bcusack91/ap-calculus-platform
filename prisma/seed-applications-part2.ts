import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Applications of Derivatives micro-lessons - Part 2...')

  // Get the Applications of Derivatives category
  const applicationsCategory = await prisma.category.upsert({
    where: { slug: 'applications-of-derivatives' },
    update: {},
    create: {
      slug: 'applications-of-derivatives',
      name: 'Applications of Derivatives',
      description: 'Using derivatives to solve real-world problems',
      order: 3,
      icon: '🎯',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'second-derivative-test',
          'optimization-problems',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Second Derivative Test
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'second-derivative-test',
      title: 'The Second Derivative Test',
      description: 'Using the second derivative to classify critical points',
      order: 3,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 📐 The Second Derivative Test

## What is the Second Derivative Test?

The **Second Derivative Test** is a quick way to classify critical points using the **second derivative** $f''(x)$ instead of checking sign changes in $f'(x)$.

> **💡 Key Idea**: If the graph is curving upward at a critical point, it's a minimum. If curving downward, it's a maximum!

---

## The Test (Formal Statement)

Let $c$ be a critical point where $f'(c) = 0$.

**Evaluate the second derivative at $c$**:

### Case 1: Local Minimum
If $f''(c) > 0$ (concave up):
- Then $f(c)$ is a **local minimum** ∪

### Case 2: Local Maximum
If $f''(c) < 0$ (concave down):
- Then $f(c)$ is a **local maximum** ∩

### Case 3: Inconclusive
If $f''(c) = 0$:
- The test **fails** - use the First Derivative Test instead
- Could be a max, min, or neither

---

## Why It Works

Think about concavity:

**Concave Up** ($f'' > 0$): Graph curves like ∪
- If you also have $f'(c) = 0$ (horizontal tangent)
- The point must be at the bottom → **minimum**

**Concave Down** ($f'' < 0$): Graph curves like ∩
- If you also have $f'(c) = 0$ (horizontal tangent)
- The point must be at the top → **maximum**

> **💡 Memory Trick**: "Concave up = cup = holds minimum" and "Concave down = frown = maximum"

---

## Step-by-Step Process

**Step 1**: Find $f'(x)$

**Step 2**: Find critical points by solving $f'(x) = 0$

**Step 3**: Find $f''(x)$

**Step 4**: Evaluate $f''(c)$ at each critical point $c$

**Step 5**: Apply the test:
- $f''(c) > 0$ → local min
- $f''(c) < 0$ → local max
- $f''(c) = 0$ → use First Derivative Test

**Step 6**: Calculate $f(c)$ to get the actual min/max value

---

## Example 1: Basic Application

Classify the critical points of $f(x) = x^3 - 6x^2 + 9x + 1$

**Step 1: Find first derivative**

$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$

**Step 2: Find critical points**

$3(x-1)(x-3) = 0$

Critical points: $x = 1$ and $x = 3$

**Step 3: Find second derivative**

$f''(x) = 6x - 12 = 6(x - 2)$

**Step 4: Evaluate at critical points**

At $x = 1$: $f''(1) = 6(1-2) = -6 < 0$ → **LOCAL MAX** ∩

At $x = 3$: $f''(3) = 6(3-2) = 6 > 0$ → **LOCAL MIN** ∪

**Step 5: Find the values**

$f(1) = 1 - 6 + 9 + 1 = 5$

$f(3) = 27 - 54 + 27 + 1 = 1$

**Answer**: Local maximum of 5 at $x = 1$, local minimum of 1 at $x = 3$

---

## When the Test Fails

If $f''(c) = 0$, the Second Derivative Test gives **no information**.

### Example: $f(x) = x^4$

$f'(x) = 4x^3$, so critical point at $x = 0$

$f''(x) = 12x^2$, so $f''(0) = 0$

The test is **inconclusive**! 

But using the First Derivative Test:
- $f'(x) < 0$ for $x < 0$
- $f'(x) > 0$ for $x > 0$
- Changes from − to + → **local minimum** at $x = 0$ ✓

### Example: $f(x) = x^3$

$f'(x) = 3x^2$, so critical point at $x = 0$

$f''(x) = 6x$, so $f''(0) = 0$

The test **fails** again!

Using First Derivative Test:
- $f'(x) > 0$ for all $x \\neq 0$
- No sign change → **neither** max nor min (inflection point) ✓

---

## Comparing the Two Tests

### First Derivative Test
✅ **Always works** (when derivative exists nearby)
✅ Gives increasing/decreasing information
✅ Can handle points where $f'$ is undefined
❌ Requires checking intervals on both sides
❌ More work (sign chart needed)

### Second Derivative Test
✅ **Faster** - only evaluate at one point
✅ **Simpler** - just check one sign
❌ **Fails** when $f''(c) = 0$
❌ Doesn't give increasing/decreasing info
❌ Requires finding second derivative

> **💡 Strategy**: Try Second Derivative Test first (it's faster). If it fails ($f'' = 0$), use First Derivative Test.

---

## Using Both Derivatives Together

The most complete analysis uses both:

### Complete Analysis Template

For critical point $c$:

1. **Location**: $x = c$
2. **First derivative**: $f'(c) = 0$ (confirms it's critical)
3. **Second derivative**: 
   - $f''(c) > 0$ → local min
   - $f''(c) < 0$ → local max
   - $f''(c) = 0$ → inconclusive
4. **Value**: $f(c) = ?$

---

## Relationship to Concavity

The Second Derivative Test is really a concavity test:

**Remember**:
- $f''(x) > 0$ → graph is concave up ∪
- $f''(x) < 0$ → graph is concave down ∩

At a critical point (where $f' = 0$):
- Concave up + flat tangent = bottom of curve = **minimum**
- Concave down + flat tangent = top of curve = **maximum**

---

## ⚠️ Common Mistakes

### Mistake 1: Using Wrong Derivative
❌ Evaluating $f'(c)$ instead of $f''(c)$
✅ Second Derivative Test uses $f''(c)$

### Mistake 2: Forgetting f'(c) = 0
The test only works at critical points where $f'(c) = 0$, NOT where $f'$ is undefined!

### Mistake 3: Thinking 0 Means Maximum or Minimum
If $f''(c) = 0$, the test is **inconclusive**, not "neither"!

### Mistake 4: Wrong Sign Interpretation
- $f''(c) > 0$ is POSITIVE → **minimum** (concave up ∪)
- $f''(c) < 0$ is NEGATIVE → **maximum** (concave down ∩)

Don't mix these up!

---

## Special Cases

### Case 1: Multiple Critical Points

Test each one separately.

**Example**: Critical points at $x = 1, 3, 5$
- Check $f''(1)$, $f''(3)$, $f''(5)$ individually

### Case 2: Second Derivative is Constant

**Example**: $f(x) = x^2$ → $f''(x) = 2 > 0$ everywhere

The second derivative is always positive, so any critical point is a minimum.

### Case 3: Optimization Problems

The Second Derivative Test is especially useful in optimization to verify that a critical point is indeed a max or min!

---

## Quick Reference

| $f''(c)$ | Shape | Result |
|----------|-------|--------|
| $> 0$ | ∪ (concave up) | Local MIN |
| $< 0$ | ∩ (concave down) | Local MAX |
| $= 0$ | ? | INCONCLUSIVE |

---

## 📝 Practice Tips

1. **Find both derivatives** first: $f'(x)$ and $f''(x)$
2. **Critical points** come from $f'(x) = 0$
3. **Evaluate** $f''$ at each critical point (just plug in!)
4. **Check the sign**: positive = min, negative = max, zero = use other test
5. **Calculate** $f(c)$ to get the actual extremum value
6. **Remember**: This test ONLY works where $f'(c) = 0$, not where $f'$ is undefined
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the Second Derivative Test to classify the critical points of $f(x) = 2x^3 - 9x^2 + 12x - 3$.',
            solution: `**Step 1: Find the first derivative**

$f'(x) = 6x^2 - 18x + 12$

---

**Step 2: Find critical points**

$6x^2 - 18x + 12 = 0$

$6(x^2 - 3x + 2) = 0$

$6(x-1)(x-2) = 0$

Critical points: $x = 1$ and $x = 2$

---

**Step 3: Find the second derivative**

$f''(x) = 12x - 18$

---

**Step 4: Apply Second Derivative Test**

At $x = 1$:
$f''(1) = 12(1) - 18 = -6 < 0$

**Negative → LOCAL MAXIMUM** ∩

At $x = 2$:
$f''(2) = 12(2) - 18 = 6 > 0$

**Positive → LOCAL MINIMUM** ∪

---

**Step 5: Find the values**

$f(1) = 2(1)^3 - 9(1)^2 + 12(1) - 3 = 2 - 9 + 12 - 3 = 2$

$f(2) = 2(2)^3 - 9(2)^2 + 12(2) - 3 = 16 - 36 + 24 - 3 = 1$

**Answer**: 
- Local maximum of $2$ at $x = 1$
- Local minimum of $1$ at $x = 2$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'Find and classify all critical points of $g(x) = x^4 - 4x^3 + 4x^2$.',
            solution: `**Step 1: Find first derivative**

$g'(x) = 4x^3 - 12x^2 + 8x = 4x(x^2 - 3x + 2) = 4x(x-1)(x-2)$

---

**Step 2: Find critical points**

$4x(x-1)(x-2) = 0$

Critical points: $x = 0, 1, 2$

---

**Step 3: Find second derivative**

$g''(x) = 12x^2 - 24x + 8$

---

**Step 4: Test at $x = 0$**

$g''(0) = 12(0)^2 - 24(0) + 8 = 8 > 0$

**Positive → LOCAL MINIMUM** ∪

---

**Step 5: Test at $x = 1$**

$g''(1) = 12(1)^2 - 24(1) + 8 = 12 - 24 + 8 = -4 < 0$

**Negative → LOCAL MAXIMUM** ∩

---

**Step 6: Test at $x = 2$**

$g''(2) = 12(2)^2 - 24(2) + 8 = 48 - 48 + 8 = 8 > 0$

**Positive → LOCAL MINIMUM** ∪

---

**Step 7: Calculate values**

$g(0) = 0$

$g(1) = 1 - 4 + 4 = 1$

$g(2) = 16 - 32 + 16 = 0$

**Answer**:
- Local minimum of $0$ at $x = 0$
- Local maximum of $1$ at $x = 1$
- Local minimum of $0$ at $x = 2$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Use the Second Derivative Test on $h(x) = x^5 - 5x$. If the test fails at any point, use the First Derivative Test instead.',
            solution: `**Step 1: Find first derivative**

$h'(x) = 5x^4 - 5 = 5(x^4 - 1) = 5(x^2-1)(x^2+1) = 5(x-1)(x+1)(x^2+1)$

---

**Step 2: Find critical points**

$5(x-1)(x+1)(x^2+1) = 0$

Since $x^2 + 1 > 0$ for all real $x$:

Critical points: $x = -1$ and $x = 1$

---

**Step 3: Find second derivative**

$h''(x) = 20x^3$

---

**Step 4: Test at $x = -1$**

$h''(-1) = 20(-1)^3 = -20 < 0$

**Negative → LOCAL MAXIMUM** ∩

---

**Step 5: Test at $x = 1$**

$h''(1) = 20(1)^3 = 20 > 0$

**Positive → LOCAL MINIMUM** ∪

---

**Step 6: Calculate values**

$h(-1) = (-1)^5 - 5(-1) = -1 + 5 = 4$

$h(1) = 1^5 - 5(1) = 1 - 5 = -4$

---

**Note**: The Second Derivative Test worked at both points! If we had gotten $h''(c) = 0$ anywhere, we would have needed the First Derivative Test.

**Answer**:
- Local maximum of $4$ at $x = -1$
- Local minimum of $-4$ at $x = 1$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What does the Second Derivative Test tell you?',
            back: 'At a critical point $c$ where $f\'(c) = 0$: If $f\'\'(c) > 0$ → local min (concave up), if $f\'\'(c) < 0$ → local max (concave down), if $f\'\'(c) = 0$ → inconclusive.',
            hint: 'Uses the second derivative to classify critical points',
          },
          {
            front: 'What does $f\'\'(c) > 0$ mean for a critical point?',
            back: 'Positive second derivative means concave up (∪), so $f(c)$ is a **local minimum**. Think: "cup holds the minimum".',
            hint: 'Concave up is a minimum',
          },
          {
            front: 'When does the Second Derivative Test fail?',
            back: 'When $f\'\'(c) = 0$ at the critical point. In this case, use the First Derivative Test instead.',
            hint: 'Zero second derivative = inconclusive',
          },
          {
            front: 'Which is faster: First Derivative Test or Second Derivative Test?',
            back: 'Second Derivative Test is faster (just evaluate at one point), but it can fail when $f\'\'(c) = 0$. First Derivative Test always works but requires checking sign changes.',
            hint: 'Second is faster but can fail',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Optimization Problems
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'optimization-problems',
      title: 'Optimization Problems',
      description: 'Using calculus to find maximum and minimum values in real-world situations',
      order: 4,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🎯 Optimization Problems

## What is Optimization?

**Optimization** means finding the **best** solution to a problem - usually the maximum or minimum value of some quantity.

### Real-World Examples

1. **Business**: Maximize profit, minimize cost
2. **Engineering**: Minimize material used, maximize strength
3. **Geometry**: Maximize area with fixed perimeter, minimize surface area for given volume
4. **Physics**: Minimize time, maximize distance

> **💡 Key Idea**: Use calculus to find where the derivative equals zero, then verify it's actually a max or min!

---

## The General Strategy

### Step-by-Step Process

**Step 1**: **Read carefully** and identify what to maximize or minimize

**Step 2**: **Draw a diagram** (if applicable)

**Step 3**: **Assign variables** to all quantities

**Step 4**: **Write the primary equation** - the function to optimize

**Step 5**: **Find constraint equations** (relationships between variables)

**Step 6**: **Reduce to one variable** using constraints

**Step 7**: **Find the derivative** and critical points

**Step 8**: **Verify it's a max/min** (Second Derivative Test or endpoints)

**Step 9**: **Answer the question** (often needs more than just the critical point!)

---

## Example 1: Basic Geometry

**Problem**: A farmer has 100 meters of fence to enclose a rectangular garden. What dimensions give the maximum area?

---

**Step 1: Identify**

Maximize: **Area**

---

**Step 2: Draw**

\`\`\`
     x
   ┌───┐
 y │   │ y
   └───┘
     x
\`\`\`

---

**Step 3: Assign variables**

Let $x$ = width, $y$ = length

---

**Step 4: Primary equation**

Area: $A = xy$

This is what we want to maximize.

---

**Step 5: Constraint**

Perimeter: $2x + 2y = 100$

---

**Step 6: Reduce to one variable**

From constraint: $2y = 100 - 2x$, so $y = 50 - x$

Substitute into area:
$$A(x) = x(50 - x) = 50x - x^2$$

Now $A$ is a function of $x$ only!

---

**Step 7: Find critical points**

$A'(x) = 50 - 2x$

Set equal to zero: $50 - 2x = 0$

$x = 25$ meters

---

**Step 8: Verify maximum**

$A''(x) = -2 < 0$ (concave down)

Since $A'' < 0$, this is a **maximum** ✓

Also check endpoints: $x = 0$ or $x = 50$ gives $A = 0$ (no area)

---

**Step 9: Answer the question**

$x = 25$ meters (width)

$y = 50 - 25 = 25$ meters (length)

**Answer**: The garden should be a **25 × 25 meter square** with maximum area of **625 square meters**.

---

## Example 2: Manufacturing/Cost

**Problem**: A box with a square base and open top must have a volume of 32 cubic feet. Find the dimensions that minimize the amount of material used.

---

**Step 1: Identify**

Minimize: **Surface area** (amount of material)

---

**Step 2: Draw**

\`\`\`
    ┌─── x ───┐
    │         │
  h │         │
    │         │
    └─────────┘
        x
\`\`\`

Square base: $x \\times x$, height: $h$

---

**Step 3: Variables**

$x$ = side length of base
$h$ = height

---

**Step 4: Primary equation**

Surface area (no top!):
$$S = x^2 + 4xh$$

(base $x^2$ plus four sides $xh$ each)

---

**Step 5: Constraint**

Volume: $x^2h = 32$

---

**Step 6: Reduce to one variable**

From constraint: $h = \\frac{32}{x^2}$

Substitute:
$$S(x) = x^2 + 4x\\left(\\frac{32}{x^2}\\right) = x^2 + \\frac{128}{x}$$

---

**Step 7: Find critical points**

$S'(x) = 2x - \\frac{128}{x^2}$

Set equal to zero:
$$2x - \\frac{128}{x^2} = 0$$

$$2x = \\frac{128}{x^2}$$

$$2x^3 = 128$$

$$x^3 = 64$$

$$x = 4$$ feet

---

**Step 8: Verify minimum**

$S''(x) = 2 + \\frac{256}{x^3}$

$S''(4) = 2 + \\frac{256}{64} = 2 + 4 = 6 > 0$ ✓

Positive → **minimum** ✓

---

**Step 9: Find all dimensions**

$x = 4$ feet (base side length)

$h = \\frac{32}{4^2} = \\frac{32}{16} = 2$ feet (height)

**Answer**: Base is **4 × 4 feet**, height is **2 feet**. Minimum surface area is **48 square feet**.

---

## Common Problem Types

### Type 1: Fencing Problems

Given perimeter, maximize area (or vice versa)

**Key**: Use constraint to eliminate one variable

### Type 2: Box/Container Problems

Minimize surface area for given volume

**Key**: Remember which surfaces are included!

### Type 3: Distance Problems

Minimize distance from a point to a curve

**Key**: Can minimize distance² to avoid square roots

### Type 4: Economics

Maximize revenue, profit; minimize cost

**Key**: $\\text{Profit} = \\text{Revenue} - \\text{Cost}$

### Type 5: Right Triangle Problems

Often use Pythagorean Theorem as constraint

**Key**: Draw the triangle and label everything

---

## Important Tips

### Domain Considerations

**Always check the domain!**

- Variables often must be positive: $x > 0$
- Constraints might limit the range
- Check endpoints if the domain is closed

### Units

Pay attention to units and include them in your answer!

### Answer the Actual Question

Sometimes the question asks for:
- The dimensions (not just $x$)
- The maximum value (not just where it occurs)
- Multiple quantities

---

## ⚠️ Common Mistakes

### Mistake 1: Not Reducing to One Variable
You MUST express the function in terms of a single variable before differentiating!

### Mistake 2: Forgetting Constraints
Use ALL given information to create constraint equations.

### Mistake 3: Not Verifying Max/Min
Use Second Derivative Test or check endpoints to confirm!

### Mistake 4: Domain Errors
Make sure your answer makes physical sense (positive lengths, etc.)

### Mistake 5: Incomplete Answers
If the problem asks for dimensions, give ALL dimensions, not just $x$.

---

## Special Techniques

### Technique 1: Implicit Differentiation

If the constraint is hard to solve, use implicit differentiation (in related rates style).

### Technique 2: Eliminating Square Roots

To minimize distance $d = \\sqrt{f(x)}$, minimize $d^2 = f(x)$ instead (same critical points, easier derivative).

### Technique 3: Symmetry

Often the optimal solution has symmetric dimensions (like a square instead of rectangle).

---

## Closed Interval Method for Optimization

If the domain is a closed interval $[a, b]$:

1. Find critical points in $(a, b)$
2. Evaluate function at critical points
3. Evaluate function at endpoints $a$ and $b$
4. Compare all values

---

## 📝 Problem-Solving Checklist

- [ ] Read problem carefully
- [ ] Draw a diagram
- [ ] Label all variables
- [ ] Write equation to optimize
- [ ] Find constraint(s)
- [ ] Reduce to one variable
- [ ] Find derivative and critical points
- [ ] Verify max/min (Second Derivative Test or endpoints)
- [ ] Calculate all requested values
- [ ] Check answer makes sense
- [ ] Include units!

---

## Practice Tips

1. **Start with simple problems** (single constraint, basic geometry)
2. **Draw everything** - visual representation helps enormously
3. **Label clearly** - know what each variable represents
4. **Check endpoints** - don't forget the domain!
5. **Verify your answer** - does it make physical sense?
6. **Practice word problems** - these take time to master
`,
      exampleProblems: {
        create: [
          {
            question: 'Find two positive numbers whose sum is 20 and whose product is as large as possible.',
            solution: `**Step 1: Identify**

Maximize: **Product** of two numbers

---

**Step 2: Assign variables**

Let the numbers be $x$ and $y$

---

**Step 3: Primary equation**

Product: $P = xy$

---

**Step 4: Constraint**

Sum is 20: $x + y = 20$

---

**Step 5: Reduce to one variable**

From constraint: $y = 20 - x$

Substitute:
$$P(x) = x(20 - x) = 20x - x^2$$

---

**Step 6: Find domain**

Since both numbers must be positive:
$x > 0$ and $y = 20 - x > 0$

So $0 < x < 20$

---

**Step 7: Find critical points**

$P'(x) = 20 - 2x$

Set equal to zero: $20 - 2x = 0$

$x = 10$

---

**Step 8: Verify maximum**

$P''(x) = -2 < 0$ (concave down)

This is a **maximum** ✓

Check endpoints:
- At $x = 0$: $P = 0$
- At $x = 20$: $P = 0$
- At $x = 10$: $P = 10(10) = 100$

Maximum is clearly at $x = 10$ ✓

---

**Step 9: Find both numbers**

$x = 10$

$y = 20 - 10 = 10$

**Answer**: The two numbers are **10 and 10** with maximum product **100**.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A rectangular poster is to have 50 square inches of printed material with 2-inch margins on top and bottom and 1-inch margins on each side. What dimensions minimize the total area of the poster?',
            solution: `**Step 1: Draw a diagram**

\`\`\`
┌─────────────────┐
│  1"         1"  │ ← 2" margin top
│ ┌───────────┐   │
│ │  printed  │   │
│ │   area    │   │
│ └───────────┘   │
│                 │ ← 2" margin bottom
└─────────────────┘
\`\`\`

---

**Step 2: Assign variables**

Let $x$ = width of printed area

Let $y$ = height of printed area

---

**Step 3: Constraint**

Printed area: $xy = 50$

---

**Step 4: Primary equation (total area)**

Total width: $x + 1 + 1 = x + 2$

Total height: $y + 2 + 2 = y + 4$

Total area: $A = (x + 2)(y + 4)$

---

**Step 5: Reduce to one variable**

From constraint: $y = \\frac{50}{x}$

Substitute:
$$A(x) = (x + 2)\\left(\\frac{50}{x} + 4\\right)$$

$$= (x + 2)\\left(\\frac{50 + 4x}{x}\\right)$$

$$= \\frac{(x + 2)(50 + 4x)}{x}$$

$$= \\frac{50x + 4x^2 + 100 + 8x}{x}$$

$$= \\frac{4x^2 + 58x + 100}{x}$$

$$= 4x + 58 + \\frac{100}{x}$$

---

**Step 6: Find critical points**

$A'(x) = 4 - \\frac{100}{x^2}$

Set equal to zero:
$$4 - \\frac{100}{x^2} = 0$$

$$4 = \\frac{100}{x^2}$$

$$4x^2 = 100$$

$$x^2 = 25$$

$$x = 5$$ (positive solution)

---

**Step 7: Verify minimum**

$A''(x) = \\frac{200}{x^3}$

$A''(5) = \\frac{200}{125} = 1.6 > 0$ ✓

**Minimum confirmed** ✓

---

**Step 8: Find dimensions**

Printed width: $x = 5$ inches

Printed height: $y = \\frac{50}{5} = 10$ inches

**Total poster dimensions**:

Total width: $5 + 2 = 7$ inches

Total height: $10 + 4 = 14$ inches

**Answer**: The poster should be **7 inches wide by 14 inches tall**.`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'A cylindrical can is to hold 1000 cubic centimeters of juice. Find the dimensions that will minimize the cost of metal to make the can.',
            solution: `**Step 1: Draw**

\`\`\`
     ┌───────┐
     │       │
   h │       │ ← height
     │       │
     └───────┘
        r (radius)
\`\`\`

---

**Step 2: Identify**

Minimize: **Surface area** (amount of metal)

---

**Step 3: Assign variables**

$r$ = radius of base

$h$ = height

---

**Step 4: Constraint**

Volume: $\\pi r^2 h = 1000$

---

**Step 5: Primary equation**

Surface area (top + bottom + side):
$$S = 2\\pi r^2 + 2\\pi rh$$

---

**Step 6: Reduce to one variable**

From constraint: $h = \\frac{1000}{\\pi r^2}$

Substitute:
$$S(r) = 2\\pi r^2 + 2\\pi r\\left(\\frac{1000}{\\pi r^2}\\right)$$

$$= 2\\pi r^2 + \\frac{2000}{r}$$

---

**Step 7: Find critical points**

$S'(r) = 4\\pi r - \\frac{2000}{r^2}$

Set equal to zero:
$$4\\pi r - \\frac{2000}{r^2} = 0$$

$$4\\pi r = \\frac{2000}{r^2}$$

$$4\\pi r^3 = 2000$$

$$r^3 = \\frac{2000}{4\\pi} = \\frac{500}{\\pi}$$

$$r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5.42$$ cm

---

**Step 8: Verify minimum**

$S''(r) = 4\\pi + \\frac{4000}{r^3}$

Since $r > 0$, we have $S''(r) > 0$ for all $r$ ✓

This is a **minimum** ✓

---

**Step 9: Find height**

$$h = \\frac{1000}{\\pi r^2} = \\frac{1000}{\\pi \\left(\\frac{500}{\\pi}\\right)^{2/3}}$$

Computing: $h = 2\\sqrt[3]{\\frac{500}{\\pi}} \\approx 10.84$ cm

Note: $h = 2r$ (interesting!)

---

**Answer**: 
- **Radius**: $r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5.42$ cm
- **Height**: $h = 2\\sqrt[3]{\\frac{500}{\\pi}} \\approx 10.84$ cm

The optimal can has height equal to the diameter!`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the main steps for solving optimization problems?',
            back: '1) Identify what to max/min, 2) Draw diagram, 3) Assign variables, 4) Write primary equation, 5) Find constraints, 6) Reduce to one variable, 7) Find derivative and critical points, 8) Verify max/min, 9) Answer question',
            hint: 'Think: identify, diagram, equations, reduce, differentiate, verify',
          },
          {
            front: 'Why must you reduce the function to one variable before differentiating?',
            back: 'You can only take derivatives of single-variable functions. Use constraint equations to express all variables in terms of one variable.',
            hint: 'Use constraints to eliminate extra variables',
          },
          {
            front: 'In an optimization problem, what should you check to verify you have a maximum or minimum?',
            back: 'Use the Second Derivative Test (check if $f\'\'(c) > 0$ for min or $f\'\'(c) < 0$ for max), OR check endpoints if the domain is closed, OR use First Derivative Test.',
            hint: 'Don\'t forget to verify - critical points aren\'t always extrema!',
          },
          {
            front: 'What is a common mistake when answering optimization problems?',
            back: 'Not answering the actual question! If asked for dimensions, give ALL dimensions. If asked for maximum value, calculate $f(c)$. Always include units and check if your answer makes physical sense.',
            hint: 'Read what the question is actually asking for',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Applications of Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  3. Second Derivative Test')
  console.log('  4. Optimization Problems')
  console.log('\n💡 Building out comprehensive Applications section!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
