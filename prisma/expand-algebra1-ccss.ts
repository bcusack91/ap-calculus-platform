import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Algebra 1 to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'algebra-1' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Inequalities',
      categorySlug: 'inequalities-alg1',
      order: 2,
      topics: [
        { title: 'Compound and Absolute Value Inequalities', slug: 'compound-absolute-value-inequalities-alg1', order: 0,
          description: 'Solve compound inequalities and absolute value equations and inequalities.',
          textContent: `# Compound and Absolute Value Inequalities

## Compound Inequalities

### "And" Inequalities (Intersection)
Both conditions must be true: $a < x < b$

$$-3 < 2x + 1 < 7$$
$$-4 < 2x < 6$$
$$-2 < x < 3$$

Graph: Open circles at -2 and 3, shade between.

### "Or" Inequalities (Union)
At least one condition must be true:

$$x < -2 \\quad \\text{or} \\quad x > 5$$

Graph: Open circles at -2 and 5, shade left of -2 and right of 5.

## Absolute Value Equations

$$|ax + b| = c \\quad (c \\geq 0)$$

Split into two equations:
$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$

**Example**: $|2x - 3| = 7$
$$2x - 3 = 7 \\implies x = 5$$
$$2x - 3 = -7 \\implies x = -2$$

## Absolute Value Inequalities

### Less Than: $|x| < c$ → "And"
$$|ax + b| < c \\implies -c < ax + b < c$$

### Greater Than: $|x| > c$ → "Or"
$$|ax + b| > c \\implies ax + b > c \\quad \\text{or} \\quad ax + b < -c$$

**Example**: $|x - 4| \\leq 3$
$$-3 \\leq x - 4 \\leq 3$$
$$1 \\leq x \\leq 7$$

**Example**: $|2x + 1| > 5$
$$2x + 1 > 5 \\implies x > 2$$
$$2x + 1 < -5 \\implies x < -3$$

> **Memory trick**: "Less thAND" and "GreatOR."`
        }
      ]
    },
    {
      categoryName: 'Exponential Functions',
      categorySlug: 'exponential-functions-alg1',
      order: 3,
      topics: [
        { title: 'Exponential Growth and Decay', slug: 'exponential-growth-decay-alg1', order: 0,
          description: 'Model exponential growth and decay situations with equations and graphs.',
          textContent: `# Exponential Growth and Decay

## Exponential Functions

$$f(x) = a \\cdot b^x$$

- $a$ = initial value (y-intercept)
- $b$ = growth/decay factor
- $b > 1$: **exponential growth**
- $0 < b < 1$: **exponential decay**

## Exponential Growth

$$y = a(1 + r)^t$$

- $a$ = initial amount
- $r$ = growth rate (as a decimal)
- $t$ = time
- $(1 + r)$ = growth factor

**Example**: A population of 500 grows at 3% per year:
$$y = 500(1.03)^t$$

After 10 years: $y = 500(1.03)^{10} \\approx 672$

## Exponential Decay

$$y = a(1 - r)^t$$

- $(1 - r)$ = decay factor

**Example**: A car worth \\$25,000 depreciates at 15% per year:
$$y = 25000(0.85)^t$$

After 5 years: $y = 25000(0.85)^5 \\approx \\$11,093$

## Compound Interest

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

- $P$ = principal (initial investment)
- $r$ = annual interest rate
- $n$ = times compounded per year
- $t$ = years

## Graphs of Exponential Functions

**Growth** ($b > 1$): Curve goes up, gets steeper
**Decay** ($0 < b < 1$): Curve goes down, flattens out

Both have:
- **Horizontal asymptote** at $y = 0$
- **Y-intercept** at $(0, a)$
- **Domain**: All real numbers
- **Range**: $y > 0$ (if $a > 0$)

## Comparing Linear vs. Exponential

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Rate of change | Constant | Increasing/decreasing |
| Equation | $y = mx + b$ | $y = ab^x$ |
| Graph | Straight line | Curve |
| Eventually wins? | No | Always grows faster |

> **Key insight**: Exponential functions eventually grow faster than ANY linear function, no matter how steep the line.`
        }
      ]
    },
    {
      categoryName: 'Radical Expressions',
      categorySlug: 'radical-expressions-alg1',
      order: 4,
      topics: [
        { title: 'Simplifying Radicals and Radical Operations', slug: 'simplifying-radicals-alg1', order: 0,
          description: 'Simplify radical expressions and perform operations with radicals.',
          textContent: `# Simplifying Radicals and Radical Operations

## Perfect Squares

$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, ...$$

## Simplifying Square Roots

Find the **largest perfect square** factor:

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$
$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$
$$\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$$

## Product Property

$$\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$$

## Quotient Property

$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$

$$\\sqrt{\\frac{25}{9}} = \\frac{\\sqrt{25}}{\\sqrt{9}} = \\frac{5}{3}$$

## Adding and Subtracting Radicals

Only combine **like radicals** (same radicand):

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$
$$6\\sqrt{2} - 2\\sqrt{2} = 4\\sqrt{2}$$

Cannot combine: $3\\sqrt{2} + 4\\sqrt{3}$ (unlike radicals)

## Multiplying Radicals

$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$$

$$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$$

## Rationalizing the Denominator

Remove radicals from the denominator:

$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$

## Solving Radical Equations

$$\\sqrt{x + 3} = 5$$
$$x + 3 = 25$$
$$x = 22$$

**Always check**: $\\sqrt{22 + 3} = \\sqrt{25} = 5$ ✓

> **Watch out**: Always check solutions to radical equations — squaring both sides can introduce extraneous solutions!`
        }
      ]
    },
    {
      categoryName: 'Sequences and Functions',
      categorySlug: 'sequences-functions-alg1',
      order: 5,
      topics: [
        { title: 'Arithmetic and Geometric Sequences', slug: 'arithmetic-geometric-sequences-alg1', order: 0,
          description: 'Identify and write formulas for arithmetic and geometric sequences.',
          textContent: `# Arithmetic and Geometric Sequences

## Arithmetic Sequences

Each term is found by **adding a constant** called the **common difference** $d$.

$$a_n = a_1 + (n-1)d$$

**Example**: $3, 7, 11, 15, 19, ...$
- $a_1 = 3$, $d = 4$
- $a_n = 3 + (n-1)(4) = 4n - 1$
- $a_{10} = 4(10) - 1 = 39$

## Geometric Sequences

Each term is found by **multiplying by a constant** called the **common ratio** $r$.

$$a_n = a_1 \\cdot r^{n-1}$$

**Example**: $2, 6, 18, 54, ...$
- $a_1 = 2$, $r = 3$
- $a_n = 2 \\cdot 3^{n-1}$
- $a_5 = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$

## Identifying the Type

| Sequence | Differences | Ratios | Type |
|----------|------------|--------|------|
| 5, 8, 11, 14 | 3, 3, 3 | — | Arithmetic ($d = 3$) |
| 3, 6, 12, 24 | 3, 6, 12 | 2, 2, 2 | Geometric ($r = 2$) |
| 1, 4, 9, 16 | 3, 5, 7 | — | Neither (perfect squares) |

## Arithmetic Series (Sum)

$$S_n = \\frac{n}{2}(a_1 + a_n)$$

Sum of first 20 terms of $3, 7, 11, ...$:
$a_{20} = 3 + 19(4) = 79$
$S_{20} = \\frac{20}{2}(3 + 79) = 10(82) = 820$

## Connection to Functions

- Arithmetic sequences → **Linear functions** ($f(x) = mx + b$)
- Geometric sequences → **Exponential functions** ($f(x) = ab^x$)

> **Quick check**: Subtract consecutive terms. If the differences are constant → arithmetic. Divide consecutive terms. If the ratios are constant → geometric.`
        }
      ]
    },
    {
      categoryName: 'Statistics and Data Analysis',
      categorySlug: 'statistics-data-alg1',
      order: 6,
      topics: [
        { title: 'Linear Regression and Correlation', slug: 'linear-regression-correlation-alg1', order: 0,
          description: 'Find lines of best fit and interpret correlation in real-world contexts.',
          textContent: `# Linear Regression and Correlation

## Scatter Plots Review

A scatter plot shows the relationship between two quantitative variables.

**Direction**: Positive, negative, or none
**Form**: Linear or nonlinear
**Strength**: Strong, moderate, or weak

## Correlation Coefficient ($r$)

Measures the strength and direction of a **linear** relationship:
- $r = 1$: Perfect positive linear
- $r = -1$: Perfect negative linear
- $r = 0$: No linear relationship
- $|r|$ close to 1: Strong

## Line of Best Fit (Regression Line)

The line that best represents the trend in the data:
$$\\hat{y} = mx + b$$

## Making Predictions

Use the regression equation:
If $\\hat{y} = 2.5x + 10$ and $x = 8$:
$$\\hat{y} = 2.5(8) + 10 = 30$$

## Residuals

$$\\text{Residual} = \\text{Actual} - \\text{Predicted} = y - \\hat{y}$$

- Positive residual: actual is above the line
- Negative residual: actual is below the line

## Interpreting the Slope

"For every 1-unit increase in $x$, the predicted $y$ increases/decreases by $m$ units."

## Interpreting the Y-Intercept

"When $x = 0$, the predicted $y$ is $b$." (May not always make practical sense.)

## Cautions

1. **Correlation ≠ Causation**
2. Don't **extrapolate** beyond the data range
3. Outliers can strongly affect the regression line
4. $r$ only measures **linear** relationships

> **Example interpretation**: "There is a strong positive linear relationship ($r = 0.92$) between hours studied and test score. For each additional hour of studying, the predicted test score increases by about 5 points."`
        }
      ]
    }
  ]

  let topicCount = 0
  for (const exp of expansions) {
    const cat = await prisma.category.create({
      data: { name: exp.categoryName, slug: exp.categorySlug, order: exp.order, courseId: course.id }
    })
    console.log('  📂 Created category: ' + exp.categoryName)
    for (const t of exp.topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: cat.id }
      })
      console.log('    ✅ ' + t.slug)
      topicCount++
    }
  }
  console.log('\n🎉 Algebra 1 expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
