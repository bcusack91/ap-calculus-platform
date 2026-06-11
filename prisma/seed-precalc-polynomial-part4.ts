import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Polynomial and Rational Functions (Part 4)...');

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  });

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found');
  }

  // Find the Polynomial and Rational Functions category
  const polynomialCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      name: 'Polynomial and Rational Functions'
    }
  });

  if (!polynomialCategory) {
    throw new Error('Polynomial and Rational Functions category not found');
  }

  // Get current topic count to set proper order
  const existingTopics = await prisma.topic.count({
    where: { categoryId: polynomialCategory.id }
  });

  // Topic 7: Polynomial Inequalities
  const polynomialInequalitiesTopic = await prisma.topic.create({
    data: {
      title: 'Polynomial Inequalities',
      slug: 'solving-polynomial-inequalities',
      description: 'Solve polynomial inequalities using sign analysis, test points, and graphical methods.',
      order: existingTopics + 1,
      categoryId: polynomialCategory.id,
      isPremium: false,
      textContent: `
# Polynomial Inequalities

## Introduction

A **polynomial inequality** involves a polynomial expression with an inequality sign ($<$, $>$, $\\leq$, or $\\geq$).

**Examples:**
- $x^2 - 5x + 6 > 0$
- $x^3 - 4x \\leq 0$
- $2x^4 - 8x^2 + 6 \\geq 0$

## Solution Strategy

The key steps for solving polynomial inequalities:

1. **Move all terms to one side** (get 0 on the other side)
2. **Factor the polynomial** completely
3. **Find critical values** (zeros/roots of the polynomial)
4. **Create a sign chart** to test intervals
5. **Determine solution intervals** based on the inequality
6. **Write the solution** in interval notation

## Sign Analysis Method

### Step-by-Step Process

**Step 1: Set up the inequality**

Rearrange so that the polynomial is on one side and 0 is on the other.

**Step 2: Factor**

Factor the polynomial completely to identify all zeros.

**Step 3: Find critical values**

Set each factor equal to zero and solve. These are the **critical values** that divide the number line into intervals.

**Step 4: Create intervals**

The critical values divide the number line into regions. Test a point from each region.

**Step 5: Make a sign chart**

Create a table showing:
- The intervals
- The sign of each factor in each interval
- The overall sign of the product

**Step 6: Identify solution intervals**

- For $> 0$ or $\\geq 0$: Choose intervals where the product is **positive**
- For $< 0$ or $\\leq 0$: Choose intervals where the product is **negative**
- Use $\\leq$ or $\\geq$ to **include** critical values where the expression equals 0
- Use $<$ or $>$ to **exclude** critical values

## Sign Chart Template

For $f(x) = (x - a)(x - b)(x - c)$ where $a < b < c$:

| Interval | $(x-a)$ | $(x-b)$ | $(x-c)$ | $f(x)$ |
|----------|---------|---------|---------|--------|
| $x < a$ | $-$ | $-$ | $-$ | $-$ |
| $a < x < b$ | $+$ | $-$ | $-$ | $+$ |
| $b < x < c$ | $+$ | $+$ | $-$ | $-$ |
| $x > c$ | $+$ | $+$ | $+$ | $+$ |

## Key Principles

### Sign of Linear Factors

For $(x - a)$:
- **Negative** when $x < a$
- **Zero** when $x = a$
- **Positive** when $x > a$

### Multiplicity Effects

- **Odd multiplicity**: Sign **changes** across the zero
- **Even multiplicity**: Sign **stays the same** across the zero

**Example:** $(x - 2)^2(x - 5)$
- At $x = 2$ (multiplicity 2): sign doesn't change
- At $x = 5$ (multiplicity 1): sign changes

## Graphical Interpretation

The solution to a polynomial inequality corresponds to where the graph satisfies the condition:

- $f(x) > 0$: Graph is **above** the x-axis
- $f(x) < 0$: Graph is **below** the x-axis
- $f(x) \\geq 0$: Graph is **above or on** the x-axis
- $f(x) \\leq 0$: Graph is **below or on** the x-axis

## Interval Notation

**Symbols:**
- $(a, b)$: Open interval (doesn't include endpoints)
- $[a, b]$: Closed interval (includes both endpoints)
- $[a, b)$: Half-open interval (includes $a$ but not $b$)
- $(a, \\infty)$: Unbounded interval extending to positive infinity

**Union:** Use $\\cup$ to combine disjoint intervals

**Example:** $(-\\infty, -2] \\cup [3, \\infty)$

## Special Cases

### Always Positive or Always Negative

Some polynomials never change sign:
- $x^2 + 1 > 0$ for all real $x$ (always positive, never zero)
- $-(x^2 + 4) < 0$ for all real $x$ (always negative)

### Includes Equality

Remember:
- $f(x) \\geq 0$: Include values where $f(x) = 0$ (use brackets [ ])
- $f(x) > 0$: Exclude values where $f(x) = 0$ (use parentheses ( ))
`,
      exampleProblems: {
        create: [
          {
            question: 'Solve the inequality $x^2 - 5x + 6 \\leq 0$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $x^2 - 5x + 6 \\leq 0$

**Step 1: Factor the polynomial**
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Step 2: Find critical values**

Set each factor equal to zero:
- $x - 2 = 0 \\Rightarrow x = 2$
- $x - 3 = 0 \\Rightarrow x = 3$

Critical values: $x = 2, 3$

**Step 3: Create a sign chart**

Test intervals: $(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$

| Interval | Test Point | $(x-2)$ | $(x-3)$ | $(x-2)(x-3)$ |
|----------|-----------|---------|---------|--------------|
| $x < 2$ | $x = 0$ | $-$ | $-$ | $+$ |
| $2 < x < 3$ | $x = 2.5$ | $+$ | $-$ | $-$ |
| $x > 3$ | $x = 4$ | $+$ | $+$ | $+$ |

**Step 4: Identify where $f(x) \\leq 0$**

We need intervals where the product is **negative or zero**.

From the chart:
- Negative in interval $(2, 3)$
- Zero at $x = 2$ and $x = 3$

Since we have $\\leq$ (includes equality), we include the critical values.

**Answer:** $[2, 3]$

**Verification:**
- At $x = 2$: $(2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0$ ✓
- At $x = 2.5$: $(2.5)^2 - 5(2.5) + 6 = 6.25 - 12.5 + 6 = -0.25 < 0$ ✓
- At $x = 3$: $(3)^2 - 5(3) + 6 = 9 - 15 + 6 = 0$ ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Solve $x^3 - 4x > 0$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $x^3 - 4x > 0$

**Step 1: Factor the polynomial**
$$x^3 - 4x = x(x^2 - 4) = x(x - 2)(x + 2)$$

**Step 2: Find critical values**

Set each factor equal to zero:
- $x = 0$
- $x - 2 = 0 \\Rightarrow x = 2$
- $x + 2 = 0 \\Rightarrow x = -2$

Critical values: $x = -2, 0, 2$ (in order)

**Step 3: Create a sign chart**

Test intervals: $(-\\infty, -2)$, $(-2, 0)$, $(0, 2)$, $(2, \\infty)$

| Interval | Test | $x$ | $(x-2)$ | $(x+2)$ | Product |
|----------|------|-----|---------|---------|---------|
| $x < -2$ | $-3$ | $-$ | $-$ | $-$ | $-$ |
| $-2 < x < 0$ | $-1$ | $-$ | $-$ | $+$ | $+$ |
| $0 < x < 2$ | $1$ | $+$ | $-$ | $+$ | $-$ |
| $x > 2$ | $3$ | $+$ | $+$ | $+$ | $+$ |

**Step 4: Identify where the product is positive**

We need $> 0$ (strictly positive, exclude zeros).

From the chart, the product is positive in:
- $(-2, 0)$
- $(2, \\infty)$

Since we have $>$ (strict inequality), we **exclude** the critical values.

**Answer:** $(-2, 0) \\cup (2, \\infty)$

**Verification:**
- At $x = -1$ (in first interval): $(-1)^3 - 4(-1) = -1 + 4 = 3 > 0$ ✓
- At $x = 1$ (in middle): $(1)^3 - 4(1) = 1 - 4 = -3 < 0$ ✓
- At $x = 3$ (in last interval): $(3)^3 - 4(3) = 27 - 12 = 15 > 0$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Solve $(x - 1)^2(x + 3) \\geq 0$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $(x - 1)^2(x + 3) \\geq 0$

**Step 1: Identify factors (already factored)**

The polynomial is already factored:
- $(x - 1)^2$ with multiplicity 2
- $(x + 3)$ with multiplicity 1

**Step 2: Find critical values**

- $x - 1 = 0 \\Rightarrow x = 1$ (multiplicity 2)
- $x + 3 = 0 \\Rightarrow x = -3$ (multiplicity 1)

Critical values: $x = -3, 1$

**Step 3: Analyze signs**

**Important:** $(x - 1)^2$ is **always non-negative** and equals 0 only at $x = 1$.

Since $(x - 1)^2 \\geq 0$ always, the sign of the product depends on $(x + 3)$:

| Interval | $(x-1)^2$ | $(x+3)$ | Product |
|----------|-----------|---------|---------|
| $x < -3$ | $+$ | $-$ | $-$ |
| $-3 < x < 1$ | $+$ | $+$ | $+$ |
| $x = 1$ | $0$ | $+$ | $0$ |
| $x > 1$ | $+$ | $+$ | $+$ |

**Step 4: Identify where product $\\geq 0$**

We need non-negative values (positive or zero).

From analysis:
- Negative when $x < -3$
- Zero at $x = -3$ (included with $\\geq$)
- Positive when $-3 < x < 1$
- Zero at $x = 1$ (included with $\\geq$)
- Positive when $x > 1$

**Answer:** $[-3, \\infty)$

**Key insight:** The even multiplicity at $x = 1$ means the sign doesn't change there. The factor $(x-1)^2$ touches the x-axis but doesn't cross it.

**Verification:**
- At $x = -4$: $(-4-1)^2(-4+3) = 25(-1) = -25 < 0$ ✓
- At $x = -3$: $(-3-1)^2(-3+3) = 16(0) = 0$ ✓
- At $x = 0$: $(0-1)^2(0+3) = 1(3) = 3 > 0$ ✓
- At $x = 1$: $(1-1)^2(1+3) = 0(4) = 0$ ✓
- At $x = 2$: $(2-1)^2(2+3) = 1(5) = 5 > 0$ ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', polynomialInequalitiesTopic.title);

  // Create flashcards for polynomial inequalities topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'What are the main steps for solving a polynomial inequality?',
        back: '1) Move all terms to one side, 2) Factor completely, 3) Find critical values (zeros), 4) Create sign chart, 5) Determine solution intervals, 6) Write in interval notation.'
      },
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'How do you determine the sign of $(x - a)$ in different regions?',
        back: 'Negative when $x < a$, zero when $x = a$, positive when $x > a$.'
      },
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'What is the effect of even vs. odd multiplicity on the sign of a polynomial?',
        back: 'Odd multiplicity: sign changes across the zero. Even multiplicity: sign stays the same (graph touches but doesn\'t cross x-axis).'
      },
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'When solving $f(x) \\geq 0$, should you include or exclude the critical values?',
        back: 'Include the critical values where $f(x) = 0$ (use brackets [ ]). For $f(x) > 0$, exclude them (use parentheses ( )).'
      },
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'Graphically, what does $f(x) > 0$ represent?',
        back: 'The intervals where the graph is above the x-axis.'
      },
      {
        topicId: polynomialInequalitiesTopic.id,
        front: 'How do you write a solution with two separate intervals?',
        back: 'Use the union symbol $\\cup$. Example: $(-\\infty, -2) \\cup (3, \\infty)$'
      }
    ]
  });

  console.log('✓ Created 6 flashcards for', polynomialInequalitiesTopic.title);

  // Topic 8: Rational Inequalities
  const rationalInequalitiesTopic = await prisma.topic.create({
    data: {
      title: 'Rational Inequalities',
      slug: 'solving-rational-inequalities',
      description: 'Solve rational inequalities by finding critical values from zeros and vertical asymptotes, then using sign analysis.',
      order: existingTopics + 2,
      categoryId: polynomialCategory.id,
      isPremium: false,
      textContent: `
# Rational Inequalities

## Introduction

A **rational inequality** involves a rational expression (fraction with polynomials) and an inequality sign.

**Examples:**
- $\\frac{x + 1}{x - 2} > 0$
- $\\frac{x^2 - 4}{x + 3} \\leq 0$
- $\\frac{2x}{x^2 - 9} \\geq 1$

## Key Differences from Polynomial Inequalities

**Critical values come from TWO sources:**

1. **Zeros of the numerator** (where the expression equals 0)
2. **Zeros of the denominator** (vertical asymptotes - where expression is undefined)

**IMPORTANT:** Values that make the denominator zero are **NEVER** included in the solution, even with $\\leq$ or $\\geq$.

## Solution Strategy

### Step-by-Step Process

**Step 1: Move everything to one side**

Get the inequality in the form $\\frac{P(x)}{Q(x)} \\diamond 0$ where $\\diamond$ is $<$, $>$, $\\leq$, or $\\geq$.

**Warning:** Never multiply both sides by the denominator (you don't know if it's positive or negative).

**Step 2: Find critical values**

- **Numerator zeros**: Set $P(x) = 0$ and solve
- **Denominator zeros**: Set $Q(x) = 0$ and solve

**Step 3: Create intervals**

The critical values divide the number line into regions.

**Step 4: Make a sign chart**

Test a point from each interval to determine the sign of the rational expression.

**Step 5: Identify solution intervals**

- For $> 0$ or $\\geq 0$: positive intervals
- For $< 0$ or $\\leq 0$: negative intervals

**Step 6: Check endpoints**

- **Include** numerator zeros if using $\\leq$ or $\\geq$
- **Never include** denominator zeros (always undefined)

## Sign Chart for Rational Expressions

For $\\frac{(x - a)(x - b)}{(x - c)}$ where $a < b < c$:

| Interval | $(x-a)$ | $(x-b)$ | $(x-c)$ | $\\frac{(x-a)(x-b)}{(x-c)}$ |
|----------|---------|---------|---------|---------------------|
| $x < a$ | $-$ | $-$ | $-$ | $-$ |
| $a < x < b$ | $+$ | $-$ | $-$ | $+$ |
| $b < x < c$ | $+$ | $+$ | $-$ | $-$ |
| $x > c$ | $+$ | $+$ | $+$ | $+$ |

**Note:** At $x = c$, the expression is undefined (vertical asymptote).

## Common Mistake to Avoid

**WRONG:** Multiplying by the denominator without considering its sign

**Example of wrong approach:**
$$\\frac{x + 1}{x - 2} > 0$$
**Wrong:** Multiply by $(x - 2)$ to get $x + 1 > 0$

**Why it's wrong:** If $x - 2 < 0$, multiplying reverses the inequality!

**RIGHT:** Use sign analysis on the rational expression as-is.

## Converting to Standard Form

If the inequality is not in the form $\\frac{P(x)}{Q(x)} \\diamond 0$, rearrange:

**Example:** $\\frac{x}{x - 1} \\geq 2$

Move everything to one side:
$$\\frac{x}{x - 1} - 2 \\geq 0$$

Get common denominator:
$$\\frac{x - 2(x - 1)}{x - 1} \\geq 0$$
$$\\frac{x - 2x + 2}{x - 1} \\geq 0$$
$$\\frac{-x + 2}{x - 1} \\geq 0$$

Now analyze this rational expression.

## Special Considerations

### Numerator Zeros vs. Denominator Zeros

- **Numerator zero**: Expression equals 0 (may be included in solution)
- **Denominator zero**: Expression is **undefined** (never in solution)

Use different notation:
- Open circle ○ for denominator zeros (excluded)
- Closed circle ● for numerator zeros with $\\leq$ or $\\geq$ (included)

### Multiple Factors

Apply the same multiplicity rules as with polynomials:
- Odd multiplicity: sign changes
- Even multiplicity: sign stays the same

### Simplifying First

**Be careful:** Canceling common factors can eliminate critical values!

**Example:** $\\frac{(x - 2)(x + 1)}{x - 2} \\geq 0$

If you cancel $(x - 2)$, you get $x + 1 \\geq 0$, which gives $x \\geq -1$.

**But:** $x = 2$ must be **excluded** (makes original denominator 0).

**Correct answer:** $[-1, 2) \\cup (2, \\infty)$

## Graphical Interpretation

The graph of $y = \\frac{P(x)}{Q(x)}$ has:
- **Zeros** at numerator zeros (crosses or touches x-axis)
- **Vertical asymptotes** at denominator zeros

Solution to $\\frac{P(x)}{Q(x)} > 0$: where graph is above x-axis
Solution to $\\frac{P(x)}{Q(x)} < 0$: where graph is below x-axis
`,
      exampleProblems: {
        create: [
          {
            question: 'Solve $\\frac{x + 1}{x - 2} > 0$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $\\frac{x + 1}{x - 2} > 0$

**Step 1: Find critical values**

**Numerator zero:**
$$x + 1 = 0 \\Rightarrow x = -1$$

**Denominator zero:**
$$x - 2 = 0 \\Rightarrow x = 2$$

Critical values: $x = -1, 2$

**Step 2: Create intervals**

The critical values divide the number line: $(-\\infty, -1)$, $(-1, 2)$, $(2, \\infty)$

**Step 3: Make a sign chart**

| Interval | Test Point | $(x+1)$ | $(x-2)$ | $\\frac{x+1}{x-2}$ |
|----------|-----------|---------|---------|------------|
| $x < -1$ | $x = -2$ | $-$ | $-$ | $+$ |
| $-1 < x < 2$ | $x = 0$ | $+$ | $-$ | $-$ |
| $x > 2$ | $x = 3$ | $+$ | $+$ | $+$ |

**Step 4: Identify where expression $> 0$**

We need positive intervals:
- $(-\\infty, -1)$: positive ✓
- $(2, \\infty)$: positive ✓

**Step 5: Check endpoints**

- At $x = -1$: Expression equals 0, but we have $>$ (strict), so **exclude**
- At $x = 2$: Expression is **undefined**, so **exclude**

**Answer:** $(-\\infty, -1) \\cup (2, \\infty)$

**Verification:**
- At $x = -2$: $\\frac{-2+1}{-2-2} = \\frac{-1}{-4} = \\frac{1}{4} > 0$ ✓
- At $x = 0$: $\\frac{0+1}{0-2} = \\frac{1}{-2} = -\\frac{1}{2} < 0$ ✓
- At $x = 3$: $\\frac{3+1}{3-2} = \\frac{4}{1} = 4 > 0$ ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Solve $\\frac{x^2 - 4}{x + 3} \\leq 0$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $\\frac{x^2 - 4}{x + 3} \\leq 0$

**Step 1: Factor the numerator**
$$\\frac{(x - 2)(x + 2)}{x + 3} \\leq 0$$

**Step 2: Find critical values**

**Numerator zeros:**
- $x - 2 = 0 \\Rightarrow x = 2$
- $x + 2 = 0 \\Rightarrow x = -2$

**Denominator zero:**
- $x + 3 = 0 \\Rightarrow x = -3$

Critical values: $x = -3, -2, 2$ (in order)

**Step 3: Make a sign chart**

| Interval | Test | $(x-2)$ | $(x+2)$ | $(x+3)$ | Expression |
|----------|------|---------|---------|---------|------------|
| $x < -3$ | $-4$ | $-$ | $-$ | $-$ | $-$ |
| $-3 < x < -2$ | $-2.5$ | $-$ | $-$ | $+$ | $+$ |
| $-2 < x < 2$ | $0$ | $-$ | $+$ | $+$ | $-$ |
| $x > 2$ | $3$ | $+$ | $+$ | $+$ | $+$ |

**Step 4: Identify where expression $\\leq 0$**

We need negative or zero:
- $x < -3$: negative ✓
- $-2 < x < 2$: negative ✓

**Step 5: Check endpoints**

- At $x = -3$: **Undefined** (denominator zero), **exclude**
- At $x = -2$: Expression equals 0, and we have $\\leq$, so **include**
- At $x = 2$: Expression equals 0, and we have $\\leq$, so **include**

**Answer:** $(-\\infty, -3) \\cup [-2, 2]$

**Verification:**
- At $x = -4$: $\\frac{(-4)^2-4}{-4+3} = \\frac{12}{-1} = -12 < 0$ ✓
- At $x = -2$: $\\frac{(-2)^2-4}{-2+3} = \\frac{0}{1} = 0$ ✓
- At $x = 0$: $\\frac{0-4}{0+3} = \\frac{-4}{3} < 0$ ✓
- At $x = 2$: $\\frac{4-4}{2+3} = \\frac{0}{5} = 0$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Solve $\\frac{2x}{x^2 - 9} \\geq 1$ and express the solution in interval notation.',
            solution: `**Solution:**

Given: $\\frac{2x}{x^2 - 9} \\geq 1$

**Step 1: Move everything to one side**
$$\\frac{2x}{x^2 - 9} - 1 \\geq 0$$

**Step 2: Get common denominator**
$$\\frac{2x - (x^2 - 9)}{x^2 - 9} \\geq 0$$
$$\\frac{2x - x^2 + 9}{x^2 - 9} \\geq 0$$
$$\\frac{-x^2 + 2x + 9}{x^2 - 9} \\geq 0$$

**Step 3: Factor**

**Numerator:** $-x^2 + 2x + 9$

Using quadratic formula: $x = \\frac{-2 \\pm \\sqrt{4 + 36}}{-2} = \\frac{-2 \\pm \\sqrt{40}}{-2} = \\frac{-2 \\pm 2\\sqrt{10}}{-2} = 1 \\mp \\sqrt{10}$

So numerator zeros are: $x = 1 - \\sqrt{10} \\approx -2.16$ and $x = 1 + \\sqrt{10} \\approx 4.16$

**Denominator:** $x^2 - 9 = (x - 3)(x + 3)$

Denominator zeros: $x = -3, 3$

**Critical values (in order):** $1 - \\sqrt{10}, -3, 3, 1 + \\sqrt{10}$

Approximately: $-2.16, -3, 3, 4.16$

**Step 4: Make sign chart**

| Interval | Numerator | Denominator | Expression |
|----------|-----------|-------------|------------|
| $x < 1-\\sqrt{10}$ | $-$ | $+$ | $-$ |
| $1-\\sqrt{10} < x < -3$ | $+$ | $+$ | $+$ |
| $-3 < x < 3$ | $+$ | $-$ | $-$ |
| $3 < x < 1+\\sqrt{10}$ | $+$ | $+$ | $+$ |
| $x > 1+\\sqrt{10}$ | $-$ | $+$ | $-$ |

**Step 5: Identify where expression $\\geq 0$**

Positive or zero:
- $[1 - \\sqrt{10}, -3)$: positive, include left endpoint
- $(3, 1 + \\sqrt{10}]$: positive, include right endpoint

**Never include $x = -3$ or $x = 3$ (undefined).**

**Answer:** $[1 - \\sqrt{10}, -3) \\cup (3, 1 + \\sqrt{10}]$

Or approximately: $[-2.16, -3) \\cup (3, 4.16]$

**Verification at $x = 0$ (should be negative):**
$$\\frac{2(0)}{0^2 - 9} = \\frac{0}{-9} = 0 < 1$$ 
So $\\frac{2x}{x^2-9} - 1 = -1 < 0$ ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', rationalInequalitiesTopic.title);

  // Create flashcards for rational inequalities topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'What are the two sources of critical values for rational inequalities?',
        back: '1) Zeros of the numerator (where expression = 0), and 2) Zeros of the denominator (vertical asymptotes, where expression is undefined).'
      },
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'Can you multiply both sides of a rational inequality by the denominator to solve it?',
        back: 'No! Never multiply by the denominator because you don\'t know if it\'s positive or negative (which would reverse the inequality). Use sign analysis instead.'
      },
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'When solving $\\frac{P(x)}{Q(x)} \\geq 0$, which critical values can be included in the solution?',
        back: 'Only numerator zeros can be included (where expression = 0). Denominator zeros are NEVER included because the expression is undefined there.'
      },
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'How do you convert $\\frac{x}{x-2} \\geq 3$ to standard form?',
        back: 'Move everything to one side: $\\frac{x}{x-2} - 3 \\geq 0$. Get common denominator: $\\frac{x - 3(x-2)}{x-2} \\geq 0$, which simplifies to $\\frac{-2x+6}{x-2} \\geq 0$.'
      },
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'What happens if you cancel common factors in a rational inequality before solving?',
        back: 'You can lose critical values! Any value that made the original denominator zero must still be excluded from the final answer.'
      },
      {
        topicId: rationalInequalitiesTopic.id,
        front: 'Graphically, what does the solution to $\\frac{P(x)}{Q(x)} < 0$ represent?',
        back: 'The intervals where the graph of the rational function is below the x-axis (between zeros and asymptotes where the function is negative).'
      }
    ]
  });

  console.log('✓ Created 6 flashcards for', rationalInequalitiesTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Polynomial and Rational Functions (Part 4)!');
  console.log('   Topics: 2');
  console.log('   Examples: 6');
  console.log('   Flashcards: 12');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
