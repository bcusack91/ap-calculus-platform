import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Grade 8 Math to CCSS standards...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'grade-8-math' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'The Number System',
      categorySlug: 'number-system-g8',
      order: 0,
      topics: [
        { title: 'Rational and Irrational Numbers', slug: 'rational-irrational-numbers-grade8', order: 0,
          description: 'Classify numbers as rational or irrational and approximate irrational numbers.',
          textContent: `# Rational and Irrational Numbers

## Rational Numbers

A **rational number** can be written as a fraction $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\neq 0$.

Examples: $\\frac{3}{4}$, $-2$, $0.75$, $0.\\overline{3}$

**Key property**: Rational numbers have decimal representations that either **terminate** or **repeat**.
- $\\frac{1}{4} = 0.25$ (terminates)
- $\\frac{1}{3} = 0.333...$ (repeats)

## Irrational Numbers

An **irrational number** CANNOT be written as a fraction. Its decimal **never terminates** and **never repeats**.

Examples: $\\pi \\approx 3.14159...$, $\\sqrt{2} \\approx 1.41421...$, $e \\approx 2.71828...$

## Square Roots

$$\\sqrt{n}$$ is the number that, when multiplied by itself, gives $n$.

**Perfect squares** have rational square roots:
$$\\sqrt{1} = 1, \\; \\sqrt{4} = 2, \\; \\sqrt{9} = 3, \\; \\sqrt{16} = 4, \\; \\sqrt{25} = 5, ...$$

Non-perfect squares have **irrational** square roots:
$$\\sqrt{2}, \\; \\sqrt{3}, \\; \\sqrt{5}, \\; \\sqrt{7}, \\; \\sqrt{10}, ...$$

## Approximating Irrational Numbers

$\\sqrt{7}$ is between $\\sqrt{4} = 2$ and $\\sqrt{9} = 3$.

Since 7 is closer to 9: $\\sqrt{7} \\approx 2.6$

More precisely: $\\sqrt{7} \\approx 2.646$

## The Real Number System

$$\\text{Real Numbers} \\begin{cases} \\text{Rational} \\begin{cases} \\text{Integers} \\begin{cases} \\text{Whole Numbers} \\begin{cases} \\text{Natural Numbers} \\end{cases} \\end{cases} \\end{cases} \\\\ \\text{Irrational} \\end{cases}$$

Every number on the number line is a **real number** — either rational or irrational.

> **Quick test**: Can you write it as a fraction? Yes → rational. No → irrational.`
        }
      ]
    },
    {
      categoryName: 'Expressions and Equations',
      categorySlug: 'expressions-equations-g8',
      order: 1,
      topics: [
        { title: 'Radicals and Integer Exponents', slug: 'radicals-integer-exponents-grade8', order: 0,
          description: 'Apply properties of integer exponents and work with square and cube roots.',
          textContent: `# Radicals and Integer Exponents

## Rules of Exponents

| Rule | Formula | Example |
|------|---------|---------|
| Product | $a^m \\cdot a^n = a^{m+n}$ | $x^3 \\cdot x^4 = x^7$ |
| Quotient | $\\frac{a^m}{a^n} = a^{m-n}$ | $\\frac{x^5}{x^2} = x^3$ |
| Power of a power | $(a^m)^n = a^{mn}$ | $(x^3)^2 = x^6$ |
| Zero exponent | $a^0 = 1$ ($a \\neq 0$) | $5^0 = 1$ |
| Negative exponent | $a^{-n} = \\frac{1}{a^n}$ | $2^{-3} = \\frac{1}{8}$ |

## Scientific Notation

A number in **scientific notation**: $a \\times 10^n$ where $1 \\leq a < 10$.

**Examples**:
- $45,000 = 4.5 \\times 10^4$
- $0.003 = 3 \\times 10^{-3}$
- $6,020,000 = 6.02 \\times 10^6$

## Operations with Scientific Notation

**Multiply**: $(3 \\times 10^4)(2 \\times 10^5) = 6 \\times 10^9$

**Divide**: $\\frac{8 \\times 10^7}{4 \\times 10^3} = 2 \\times 10^4$

## Square Roots and Cube Roots

$$\\sqrt{x} = x^{1/2} \\qquad \\sqrt[3]{x} = x^{1/3}$$

$$\\sqrt{36} = 6 \\qquad \\sqrt[3]{27} = 3 \\qquad \\sqrt[3]{-8} = -2$$

## Simplifying Square Roots

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$$

> **Tip**: Find the largest perfect square factor when simplifying radicals.`
        },
        { title: 'Solving Linear Equations', slug: 'solving-linear-equations-grade8', order: 1,
          description: 'Solve multi-step linear equations including equations with variables on both sides.',
          textContent: `# Solving Linear Equations

## Multi-Step Equations

Combine like terms and use inverse operations:

$$5x + 3 - 2x = 18$$
$$3x + 3 = 18$$
$$3x = 15$$
$$x = 5$$

## Variables on Both Sides

Get all variable terms on one side:

$$4x + 7 = 2x + 15$$
$$4x - 2x = 15 - 7$$
$$2x = 8$$
$$x = 4$$

## Distributive Property First

$$3(2x - 4) = 18$$
$$6x - 12 = 18$$
$$6x = 30$$
$$x = 5$$

## Special Cases

**No solution** (contradiction):
$$2x + 5 = 2x + 8$$
$$5 = 8$$ ← False! No value of $x$ works.

**Infinitely many solutions** (identity):
$$3(x + 2) = 3x + 6$$
$$3x + 6 = 3x + 6$$ ← Always true! Any value of $x$ works.

## Equations with Fractions

Multiply every term by the LCD to clear fractions:

$$\\frac{x}{3} + \\frac{x}{4} = 7$$

Multiply by 12:
$$4x + 3x = 84$$
$$7x = 84$$
$$x = 12$$

## Equations with Decimals

Multiply by a power of 10:

$$0.3x + 1.5 = 4.2$$
Multiply by 10: $3x + 15 = 42$
$3x = 27$, $x = 9$

> **Always check**: Substitute your answer back into the original equation to verify.`
        }
      ]
    },
    {
      categoryName: 'Functions',
      categorySlug: 'functions-g8',
      order: 3,
      topics: [
        { title: 'Understanding Functions', slug: 'understanding-functions-grade8', order: 0,
          description: 'Define functions, identify them from tables, graphs, and equations.',
          textContent: `# Understanding Functions

## What Is a Function?

A **function** is a rule that assigns to each **input** exactly **one output**.

$$\\text{Input} \\xrightarrow{\\text{function}} \\text{Output}$$

## Function Notation

$f(x)$ means "the output of function $f$ when the input is $x$."

If $f(x) = 2x + 3$:
- $f(1) = 2(1) + 3 = 5$
- $f(4) = 2(4) + 3 = 11$
- $f(-2) = 2(-2) + 3 = -1$

## Is It a Function?

**Table test**: Each input has only ONE output.

| Input | Output | Function? |
|-------|--------|-----------|
| 1 → 3, 2 → 5, 3 → 7 | ✅ Yes | Each input has one output |
| 1 → 3, 2 → 5, 1 → 7 | ❌ No | Input 1 has two outputs |

**Vertical Line Test**: If any vertical line crosses the graph **more than once**, it's NOT a function.

## Linear vs. Nonlinear Functions

**Linear**: Graph is a straight line, constant rate of change.
$$f(x) = mx + b$$

**Nonlinear**: Graph is curved, rate of change varies.
$$f(x) = x^2, \\quad f(x) = \\sqrt{x}, \\quad f(x) = |x|$$

## Comparing Functions

Functions can be represented as:
1. **Equations**: $y = 3x + 1$
2. **Tables**: pairs of $(x, y)$ values
3. **Graphs**: visual representation
4. **Verbal descriptions**: "3 times a number plus 1"

Compare functions by examining their **rates of change** (slopes) and **initial values** (y-intercepts).

> **Key idea**: A function is like a machine — put in an input, get exactly one output. No input gives two different outputs!`
        },
        { title: 'Slope and Linear Functions', slug: 'slope-linear-functions-grade8', order: 1,
          description: 'Calculate slope, write linear equations, and graph linear functions.',
          textContent: `# Slope and Linear Functions

## What Is Slope?

**Slope** measures the steepness of a line — the rate of change.

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$

## Types of Slope

| Type | Description | Example |
|------|-------------|---------|
| Positive | Line goes up left to right | $m = 2$ |
| Negative | Line goes down left to right | $m = -3$ |
| Zero | Horizontal line | $m = 0$ |
| Undefined | Vertical line | |

## Slope-Intercept Form

$$y = mx + b$$

- $m$ = slope (rate of change)
- $b$ = y-intercept (where the line crosses the y-axis)

**Example**: $y = 2x + 3$
- Slope = 2 (goes up 2 for every 1 right)
- Y-intercept = 3 (crosses y-axis at $(0, 3)$)

## Graphing a Line

From $y = -\\frac{1}{2}x + 4$:
1. Plot the y-intercept $(0, 4)$
2. Use slope: down 1, right 2 → plot $(2, 3)$
3. Connect the points

## Finding Slope from a Graph

Pick two points on the line and use the slope formula:
Points: $(1, 3)$ and $(4, 9)$
$$m = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

## Point-Slope Form

$$y - y_1 = m(x - x_1)$$

Through $(2, 5)$ with slope 3:
$$y - 5 = 3(x - 2)$$
$$y = 3x - 1$$

## Parallel and Perpendicular Lines

- **Parallel lines**: Same slope ($m_1 = m_2$)
- **Perpendicular lines**: Slopes are negative reciprocals ($m_1 \\cdot m_2 = -1$)

> **Real-world slope**: A roof has a pitch of 6:12 (rise of 6 for every run of 12), meaning $m = \\frac{1}{2}$.`
        }
      ]
    },
    {
      categoryName: 'Transformations',
      categorySlug: 'transformations-g8',
      order: 4,
      topics: [
        { title: 'Geometric Transformations', slug: 'geometric-transformations-grade8', order: 0,
          description: 'Perform translations, reflections, rotations, and dilations on the coordinate plane.',
          textContent: `# Geometric Transformations

## Types of Transformations

### Translation (Slide)
Every point moves the **same distance** in the **same direction**.

$(x, y) \\to (x + a, y + b)$

Translate right 3, up 2: $(x, y) \\to (x + 3, y + 2)$

### Reflection (Flip)
A mirror image across a line.

| Reflection | Rule |
|-----------|------|
| Over x-axis | $(x, y) \\to (x, -y)$ |
| Over y-axis | $(x, y) \\to (-x, y)$ |
| Over $y = x$ | $(x, y) \\to (y, x)$ |

### Rotation (Turn)
Turn around a center point (usually the origin).

| Rotation about origin | Rule |
|---|---|
| $90°$ counterclockwise | $(x, y) \\to (-y, x)$ |
| $180°$ | $(x, y) \\to (-x, -y)$ |
| $270°$ counterclockwise | $(x, y) \\to (y, -x)$ |

### Dilation (Resize)
Enlarge or shrink by a **scale factor** $k$ from a center point.

$(x, y) \\to (kx, ky)$

- $k > 1$: enlargement
- $0 < k < 1$: reduction

## Rigid Transformations (Congruence)

Translations, reflections, and rotations are **rigid** — they preserve:
- Size (lengths)
- Shape (angles)
- Congruence

## Similarity Transformations

**Dilations** change size but preserve shape. Combined with rigid transformations, they create **similar** figures.

## Congruence vs. Similarity

- **Congruent**: Same shape AND same size (rigid transformations)
- **Similar**: Same shape, possibly different size (dilation + rigid)

> **Coordinate practice**: Triangle with vertices $(1,2), (3,4), (1,4)$. Reflect over the y-axis to get $(-1,2), (-3,4), (-1,4)$.`
        }
      ]
    },
    {
      categoryName: 'Statistics and Probability',
      categorySlug: 'statistics-probability-g8',
      order: 5,
      topics: [
        { title: 'Scatter Plots and Trend Lines', slug: 'scatter-plots-trend-lines-grade8', order: 0,
          description: 'Construct and interpret scatter plots and use trend lines to make predictions.',
          textContent: `# Scatter Plots and Trend Lines

## What Is a Scatter Plot?

A **scatter plot** shows the relationship between two sets of numerical data. Each point represents one data pair.

## Correlation

| Pattern | Type | Example |
|---------|------|---------|
| Points go up | Positive correlation | Height and weight |
| Points go down | Negative correlation | TV time and grades |
| No pattern | No correlation | Shoe size and IQ |

## Strength of Correlation

- **Strong**: Points are close together, nearly forming a line
- **Weak**: Points are spread out
- **None**: No pattern at all

## Trend Lines (Lines of Best Fit)

A **trend line** is a straight line that best represents the data in a scatter plot.

Properties:
- Passes through or near most points
- Has roughly equal numbers of points above and below
- Follows the general direction of the data

## Making Predictions

Use the trend line equation to **predict** values:

If the trend line is $y = 2x + 10$ and $x = 15$:
$$y = 2(15) + 10 = 40$$

## Interpolation vs. Extrapolation

- **Interpolation**: Predicting within the data range (reliable)
- **Extrapolation**: Predicting outside the data range (less reliable)

## Clusters, Gaps, and Outliers

- **Cluster**: A group of points close together
- **Gap**: A space with no data points
- **Outlier**: A point far from the general pattern

## Two-Way Tables

For categorical data, use **two-way tables** to find relationships:

| | Likes Math | Doesn't Like Math | Total |
|---|---|---|---|
| Grade 7 | 30 | 20 | 50 |
| Grade 8 | 35 | 15 | 50 |
| Total | 65 | 35 | 100 |

> **Caution**: Correlation does NOT mean causation! Just because two variables are related doesn't mean one causes the other.`
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
  console.log('\n🎉 Grade 8 Math expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
