import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding Pre-Algebra...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'pre-algebra' } })
  if (!course) { console.log('Course not found!'); return }

  const expansions = [
    {
      categoryName: 'Variables and Expressions',
      categorySlug: 'variables-expressions-prealg',
      order: 2,
      topics: [
        { title: 'Variables and Algebraic Expressions', slug: 'variables-algebraic-expressions-prealg', order: 0,
          description: 'Write and evaluate algebraic expressions using variables.',
          textContent: `# Variables and Algebraic Expressions

## What Is a Variable?

A **variable** is a letter (like $x$, $y$, or $n$) that represents an unknown number.

## Algebraic Expressions

An **algebraic expression** contains numbers, variables, and operations.

| Expression | Meaning |
|-----------|---------|
| $x + 5$ | A number plus 5 |
| $3x$ | 3 times a number |
| $\\frac{x}{2}$ | A number divided by 2 |
| $x^2 - 4$ | A number squared minus 4 |

## Evaluating Expressions

**Substitute** the value of the variable and calculate.

Evaluate $3x + 7$ when $x = 4$:
$$3(4) + 7 = 12 + 7 = 19$$

Evaluate $x^2 - 2x + 1$ when $x = 3$:
$$3^2 - 2(3) + 1 = 9 - 6 + 1 = 4$$

## Combining Like Terms

**Like terms** have the same variable raised to the same power.

$$5x + 3x = 8x \\qquad 7y - 2y = 5y$$
$$4x + 3y + 2x + y = 6x + 4y$$

## The Distributive Property

$$a(b + c) = ab + ac$$

$$3(x + 4) = 3x + 12$$
$$-2(3x - 5) = -6x + 10$$

> **Remember**: When writing expressions, $5 \\times x$ is written as $5x$ (skip the multiplication sign).`
        },
        { title: 'Exponents and Order of Operations', slug: 'exponents-order-operations-prealg', order: 1,
          description: 'Evaluate expressions with exponents following the order of operations.',
          textContent: `# Exponents and Order of Operations

## Exponents

An **exponent** tells you how many times to multiply the base by itself:

$$x^n = \\underbrace{x \\times x \\times \\cdots \\times x}_{n \\text{ times}}$$

**Examples**:
$$2^3 = 2 \\times 2 \\times 2 = 8$$
$$5^2 = 5 \\times 5 = 25$$
$$10^4 = 10{,}000$$

## Special Exponents

$$x^0 = 1 \\quad (x \\neq 0)$$
$$x^1 = x$$

## Order of Operations (PEMDAS)

**P** - Parentheses (and brackets)
**E** - Exponents
**M/D** - Multiplication and Division (left to right)
**A/S** - Addition and Subtraction (left to right)

## Example

$$3 + 4 \\times 2^2 - (6 + 1)$$

1. Parentheses: $3 + 4 \\times 2^2 - 7$
2. Exponents: $3 + 4 \\times 4 - 7$
3. Multiplication: $3 + 16 - 7$
4. Left to right: $19 - 7 = 12$

## Common Mistakes

❌ $2 + 3 \\times 4 = 20$ (wrong — did addition first)
✅ $2 + 3 \\times 4 = 2 + 12 = 14$ (correct — multiplication first)

❌ $-3^2 = 9$ (wrong)
✅ $-3^2 = -(3^2) = -9$ (the exponent only applies to the 3)
✅ $(-3)^2 = 9$ (now the exponent applies to $-3$)

> **Memory aid**: "Please Excuse My Dear Aunt Sally" for PEMDAS.`
        }
      ]
    },
    {
      categoryName: 'Equations and Inequalities',
      categorySlug: 'equations-inequalities-prealg',
      order: 3,
      topics: [
        { title: 'Solving One and Two-Step Equations', slug: 'solving-equations-prealg', order: 0,
          description: 'Solve equations using inverse operations and check solutions.',
          textContent: `# Solving One and Two-Step Equations

## One-Step Equations

Use **inverse operations** to isolate the variable:

$$x + 7 = 12 \\implies x = 12 - 7 = 5$$
$$x - 3 = 9 \\implies x = 9 + 3 = 12$$
$$4x = 28 \\implies x = 28 \\div 4 = 7$$
$$\\frac{x}{5} = 6 \\implies x = 6 \\times 5 = 30$$

## Two-Step Equations

Undo addition/subtraction first, then multiplication/division:

$$2x + 5 = 13$$
$$2x = 8$$
$$x = 4$$

$$\\frac{x}{3} - 4 = 2$$
$$\\frac{x}{3} = 6$$
$$x = 18$$

## Equations with Negative Numbers

$$-3x + 9 = 0$$
$$-3x = -9$$
$$x = 3$$

## Checking Your Solution

Always substitute back:
If $x = 4$ in $2x + 5 = 13$:
$$2(4) + 5 = 8 + 5 = 13$$ ✓

## Writing Equations from Words

| Words | Equation |
|-------|---------|
| "5 more than a number is 12" | $n + 5 = 12$ |
| "A number divided by 3 equals 7" | $\\frac{n}{3} = 7$ |
| "Twice a number minus 4 is 10" | $2n - 4 = 10$ |

> **Golden rule**: Whatever you do to one side, do to the other. Keep the equation balanced!`
        },
        { title: 'Solving and Graphing Inequalities', slug: 'solving-graphing-inequalities-prealg', order: 1,
          description: 'Solve one-step and two-step inequalities and graph solutions on a number line.',
          textContent: `# Solving and Graphing Inequalities

## Inequality Symbols

$<$ less than · $>$ greater than · $\\leq$ less than or equal · $\\geq$ greater than or equal

## Solving Inequalities

Same as equations, with ONE key difference:

> **When you multiply or divide by a negative number, FLIP the inequality sign!**

## Examples

$$x + 4 > 10 \\implies x > 6$$

$$3x \\leq 15 \\implies x \\leq 5$$

$$-2x > 8 \\implies x < -4$$ (sign flipped!)

$$\\frac{x}{-3} \\geq 4 \\implies x \\leq -12$$ (sign flipped!)

## Graphing on a Number Line

- $x > 3$: **Open circle** at 3, shade right
- $x \\geq 3$: **Closed circle** at 3, shade right
- $x < -1$: **Open circle** at -1, shade left
- $x \\leq -1$: **Closed circle** at -1, shade left

## Two-Step Inequalities

$$2x - 5 > 7$$
$$2x > 12$$
$$x > 6$$

## Checking Solutions

Is $x = 8$ a solution to $2x - 5 > 7$?
$2(8) - 5 = 11 > 7$ ✓ Yes!

Is $x = 5$ a solution?
$2(5) - 5 = 5 > 7$? No! ✗

> **Key difference from equations**: An inequality has **infinitely many** solutions, shown as a range on the number line.`
        }
      ]
    },
    {
      categoryName: 'Ratios, Proportions, and Percents',
      categorySlug: 'ratios-proportions-prealg',
      order: 4,
      topics: [
        { title: 'Ratios and Proportions', slug: 'ratios-proportions-prealg', order: 0,
          description: 'Solve proportions using cross multiplication.',
          textContent: `# Ratios and Proportions

## Ratios

A **ratio** compares two quantities: $\\frac{a}{b}$ or $a : b$

## Proportions

A **proportion** is an equation stating two ratios are equal:
$$\\frac{a}{b} = \\frac{c}{d}$$

## Cross Multiplication

To solve a proportion, **cross multiply**:
$$\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc$$

**Example**: $\\frac{3}{4} = \\frac{x}{20}$
$$3 \\times 20 = 4 \\times x$$
$$60 = 4x$$
$$x = 15$$

## Word Problems with Proportions

*If 3 apples cost $\\$2.25$, how much do 8 apples cost?*

$$\\frac{3}{2.25} = \\frac{8}{x}$$
$$3x = 2.25 \\times 8 = 18$$
$$x = \\$6.00$$

## Scale Factor

The ratio of corresponding lengths in similar figures:

If a model car is $\\frac{1}{24}$ scale and the model is 7.5 inches:
$$\\text{Real length} = 7.5 \\times 24 = 180 \\text{ inches} = 15 \\text{ feet}$$

## Similar Figures

Figures are **similar** if:
- Corresponding angles are equal
- Corresponding sides are proportional

> **Tip**: Set up proportions so the same type of quantity is in each fraction's numerator (or denominator).`
        },
        { title: 'Percents and Applications', slug: 'percents-applications-prealg', order: 1,
          description: 'Solve percent problems including tax, tip, discount, and percent change.',
          textContent: `# Percents and Applications

## Percent Basics

**Percent** means "per 100": $25\\% = \\frac{25}{100} = 0.25$

## Converting

| From → To | Method |
|-----------|--------|
| Percent → Decimal | Divide by 100 ($45\\% = 0.45$) |
| Decimal → Percent | Multiply by 100 ($0.08 = 8\\%$) |
| Fraction → Percent | Divide, then multiply by 100 |
| Percent → Fraction | Put over 100, simplify ($60\\% = \\frac{3}{5}$) |

## The Percent Equation

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

*What is 30% of 80?*
$$x = 0.30 \\times 80 = 24$$

*15 is what percent of 60?*
$$15 = x \\times 60 \\implies x = 0.25 = 25\\%$$

## Applications

### Tax
$$\\text{Total} = \\text{Price} + \\text{Price} \\times \\text{Tax Rate}$$
$$\\text{Total} = \\text{Price} \\times (1 + \\text{Tax Rate})$$

Item: $\\$45$, Tax: $8\\%$
$$\\$45 \\times 1.08 = \\$48.60$$

### Tip
$$\\text{Tip} = \\text{Bill} \\times \\text{Tip Rate}$$

### Discount
$$\\text{Sale Price} = \\text{Original} \\times (1 - \\text{Discount Rate})$$

$\\$80$ shirt, $25\\%$ off: $\\$80 \\times 0.75 = \\$60$

### Percent Change
$$\\text{Percent Change} = \\frac{|\\text{New} - \\text{Original}|}{\\text{Original}} \\times 100\\%$$

From 50 to 65: $\\frac{|65-50|}{50} \\times 100 = 30\\%$ increase

> **Shortcut**: "Percent OF" means multiply. "What IS" means equals.`
        }
      ]
    },
    {
      categoryName: 'Introduction to Graphing',
      categorySlug: 'intro-graphing-prealg',
      order: 5,
      topics: [
        { title: 'The Coordinate Plane and Graphing', slug: 'coordinate-plane-graphing-prealg', order: 0,
          description: 'Plot points in all four quadrants and graph linear equations.',
          textContent: `# The Coordinate Plane and Graphing

## Four Quadrants

The coordinate plane is divided into four **quadrants**:

| Quadrant | $x$ | $y$ | Example |
|----------|-----|-----|---------|
| I | + | + | $(3, 2)$ |
| II | – | + | $(-3, 2)$ |
| III | – | – | $(-3, -2)$ |
| IV | + | – | $(3, -2)$ |

## Graphing Linear Equations

A **linear equation** graphs as a straight line.

To graph $y = 2x - 1$:

| $x$ | $y = 2x - 1$ | Point |
|-----|-------------|-------|
| -1 | $2(-1) - 1 = -3$ | $(-1, -3)$ |
| 0 | $2(0) - 1 = -1$ | $(0, -1)$ |
| 1 | $2(1) - 1 = 1$ | $(1, 1)$ |
| 2 | $2(2) - 1 = 3$ | $(2, 3)$ |

Plot the points and connect them with a straight line.

## X-intercept and Y-intercept

- **Y-intercept**: Where the line crosses the y-axis ($x = 0$)
- **X-intercept**: Where the line crosses the x-axis ($y = 0$)

For $y = 2x - 4$:
- Y-intercept: $(0, -4)$
- X-intercept: Set $y = 0$: $0 = 2x - 4 \\implies x = 2$, so $(2, 0)$

## Horizontal and Vertical Lines

- **Horizontal**: $y = c$ (example: $y = 3$)
- **Vertical**: $x = c$ (example: $x = -2$)

## Distance on the Coordinate Plane

For horizontal/vertical distances, subtract coordinates:
- Distance from $(1, 3)$ to $(5, 3)$: $|5 - 1| = 4$ units

> **Practice**: Graph $y = -x + 3$ by making a table of values. Find the x-intercept and y-intercept.`
        }
      ]
    },
    {
      categoryName: 'Basic Statistics',
      categorySlug: 'basic-statistics-prealg',
      order: 6,
      topics: [
        { title: 'Introduction to Statistics', slug: 'intro-statistics-prealg', order: 0,
          description: 'Calculate measures of central tendency and create basic data displays.',
          textContent: `# Introduction to Statistics

## Measures of Central Tendency

### Mean (Average)
$$\\text{Mean} = \\frac{\\text{Sum of values}}{\\text{Number of values}}$$

### Median
Middle value when data is ordered. For even count, average the two middle values.

### Mode
Most frequently occurring value.

## Example

Data: $5, 8, 3, 8, 12, 6, 8$

Ordered: $3, 5, 6, 8, 8, 8, 12$

- **Mean**: $\\frac{3+5+6+8+8+8+12}{7} = \\frac{50}{7} \\approx 7.14$
- **Median**: $8$ (4th value out of 7)
- **Mode**: $8$ (appears 3 times)

## Measures of Spread

- **Range**: $\\text{Max} - \\text{Min} = 12 - 3 = 9$
- **IQR** (Interquartile Range): $Q_3 - Q_1$

## Box Plots

Show the **five-number summary**: Min, Q1, Median, Q3, Max

## Stem-and-Leaf Plots

Show data values organized by their leading digits.

Data: 23, 25, 31, 34, 37, 42, 45

| Stem | Leaf |
|------|------|
| 2 | 3 5 |
| 3 | 1 4 7 |
| 4 | 2 5 |

## Choosing the Right Display

| Data Type | Display |
|-----------|---------|
| Categorical | Bar graph, circle graph |
| Numerical | Histogram, dot plot, box plot |
| Comparing two groups | Double bar graph, side-by-side box plots |

> **Key idea**: The mean is affected by outliers; the median is not. Choose the median for skewed data.`
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
  console.log('\n🎉 Pre-Algebra expanded with ' + topicCount + ' new topics!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
