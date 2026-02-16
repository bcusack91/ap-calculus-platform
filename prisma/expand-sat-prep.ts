import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Expanding SAT Prep...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'sat-prep' } })
  if (course === null) { console.log('Course not found'); return }

  const cats = await prisma.category.findMany({ where: { courseId: course.id } })
  const heartAlg = cats.find(c => c.slug === 'sat-heart-of-algebra')
  const probSolv = cats.find(c => c.slug === 'sat-problem-solving-data')
  const passAdv = cats.find(c => c.slug === 'sat-passport-advanced-math')

  let count = 0

  if (heartAlg) {
    const topics = [
      { title: 'Systems of Linear Equations', slug: 'sat-systems-linear-equations', order: 2,
        description: 'Solve systems of linear equations using substitution, elimination, and graphing.',
        textContent: `# SAT: Systems of Linear Equations

## Methods for Solving Systems

### Substitution
1. Solve one equation for a variable
2. Substitute into the other equation

$$y = 2x + 3$$
$$3x + y = 13$$
$$3x + (2x + 3) = 13 \\implies 5x = 10 \\implies x = 2, y = 7$$

### Elimination
Add or subtract equations to eliminate a variable:

$$2x + 3y = 12$$
$$2x - y = 4$$

Subtract: $4y = 8 \\implies y = 2 \\implies x = 3$

## Number of Solutions

| System Type | Solutions | Graph |
|-------------|-----------|-------|
| Independent | Exactly 1 | Lines cross |
| Inconsistent | None | Parallel lines |
| Dependent | Infinite | Same line |

## SAT Strategy: Coefficient Matching

If $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ then no solution.
If $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ then infinite solutions.

> **SAT Tip**: On the Digital SAT, you can use the built-in Desmos calculator to graph both equations and find the intersection point.`
      },
      { title: 'Linear Inequalities and Graphs', slug: 'sat-linear-inequalities-graphs', order: 3,
        description: 'Graph linear inequalities and solve systems of linear inequalities.',
        textContent: `# SAT: Linear Inequalities and Graphs

## Graphing Linear Inequalities

1. Graph the boundary line ($y = mx + b$)
   - **Solid line** for $\\leq$ or $\\geq$
   - **Dashed line** for $<$ or $>$
2. **Shade** the region that satisfies the inequality

## Systems of Inequalities

The solution is the **overlapping shaded region**.

## Interpreting in Context

"A store sells shirts for $15 and pants for $25. They need at least $500 in revenue and can stock at most 30 items."

$$15x + 25y \\geq 500$$
$$x + y \\leq 30$$
$$x \\geq 0, \\quad y \\geq 0$$

## Absolute Value Inequalities

$$|ax + b| < c \\implies -c < ax + b < c$$
$$|ax + b| > c \\implies ax + b > c \\text{ or } ax + b < -c$$

> **SAT Tip**: When testing a point in an inequality, use (0, 0) if it is not on the boundary line.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({ data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: heartAlg.id } })
      console.log('  ✅ ' + t.slug); count++
    }
  }

  if (probSolv) {
    const topics = [
      { title: 'Statistics and Data Interpretation', slug: 'sat-statistics-data-interpretation', order: 1,
        description: 'Analyze data using mean, median, mode, standard deviation, and data displays.',
        textContent: `# SAT: Statistics and Data Interpretation

## Measures of Center

### Mean (Average)
$$\\bar{x} = \\frac{\\sum x_i}{n}$$

### Median
Middle value when data is ordered. For even $n$: average of two middle values.

## Measures of Spread

### Range: $\\text{max} - \\text{min}$
### Standard Deviation: Larger SD = more spread out
### IQR: $Q_3 - Q_1$

## Reading Data Displays

- **Box plots**: Show median, quartiles, range
- **Histograms**: Show frequency distribution
- **Scatter plots**: Show relationships between variables

## Margin of Error

$$\\text{Estimate} \\pm \\text{margin of error}$$

Larger sample = smaller margin of error.

> **SAT Tip**: Correlation does NOT equal causation. You can only generalize to the population sampled.`
      },
      { title: 'Probability and Two-Way Tables', slug: 'sat-probability-two-way-tables', order: 2,
        description: 'Calculate probabilities from two-way tables and counting principles.',
        textContent: `# SAT: Probability and Two-Way Tables

## Basic Probability

$$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$

## Two-Way Tables

- **Joint** probability: specific cell / grand total
- **Marginal** probability: row or column total / grand total
- **Conditional** probability: specific cell / row or column total

## Conditional Probability

$$P(A | B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

## Complement Rule

$$P(\\text{not } A) = 1 - P(A)$$

## Addition Rule

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$$

> **SAT Tip**: Two-way table problems are VERY common. Read "given that" as looking at only ONE row or column.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({ data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: probSolv.id } })
      console.log('  ✅ ' + t.slug); count++
    }
  }

  if (passAdv) {
    const topics = [
      { title: 'Polynomial and Rational Expressions', slug: 'sat-polynomial-rational-expressions', order: 2,
        description: 'Factor, simplify, and operate with polynomial and rational expressions.',
        textContent: `# SAT: Polynomial and Rational Expressions

## Factoring Techniques

### GCF: $6x^3 + 9x^2 = 3x^2(2x + 3)$
### Difference of Squares: $a^2 - b^2 = (a+b)(a-b)$
### Trinomial: $x^2 + 5x + 6 = (x+2)(x+3)$
### Grouping: $x^3 + 2x^2 + 3x + 6 = (x^2+3)(x+2)$

## Rational Expressions

### Simplifying
$$\\frac{x^2 - 9}{x + 3} = \\frac{(x+3)(x-3)}{x+3} = x - 3$$

### Adding: Find common denominator
$$\\frac{2}{x} + \\frac{3}{x+1} = \\frac{2(x+1) + 3x}{x(x+1)} = \\frac{5x+2}{x(x+1)}$$

## Sum/Product of Roots

For $ax^2 + bx + c = 0$:
$$\\text{sum} = -\\frac{b}{a}, \\quad \\text{product} = \\frac{c}{a}$$

> **SAT Tip**: Factoring is THE most important algebra skill on the SAT. Practice until it is automatic.`
      },
      { title: 'Nonlinear Equations and Functions', slug: 'sat-nonlinear-equations-functions', order: 3,
        description: 'Solve quadratic, absolute value, and exponential equations.',
        textContent: `# SAT: Nonlinear Equations and Functions

## Quadratic Formula

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Discriminant** ($b^2 - 4ac$):
- $> 0$: Two real solutions
- $= 0$: One real solution
- $< 0$: No real solutions

## Vertex Form: $f(x) = a(x-h)^2 + k$

Vertex at $(h, k)$

## Completing the Square

$$x^2 + 6x + 5 = (x+3)^2 - 4$$

## Exponential Growth/Decay

$$f(t) = a(1 + r)^t \\quad \\text{or} \\quad f(t) = a(1-r)^t$$

## Function Composition

$$(f \\circ g)(x) = f(g(x))$$

> **SAT Tip**: When a quadratic has no real solutions, the SAT often asks you to find values of a parameter that make the discriminant zero or negative.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({ data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: passAdv.id } })
      console.log('  ✅ ' + t.slug); count++
    }
  }

  // New categories
  const addCat = await prisma.category.create({ data: { name: 'Additional Topics in Math', slug: 'sat-additional-topics', order: 3, courseId: course.id } })
  const geoTrig = await prisma.topic.create({ data: {
    title: 'Geometry and Trigonometry', slug: 'sat-geometry-trigonometry', order: 0,
    description: 'Apply geometry concepts including area, volume, angles, and basic trigonometry.',
    textContent: `# SAT: Geometry and Trigonometry

## Essential Formulas

### Area
- Triangle: $A = \\frac{1}{2}bh$
- Circle: $A = \\pi r^2$

### Volume
- Cylinder: $V = \\pi r^2 h$
- Sphere: $V = \\frac{4}{3}\\pi r^3$
- Cone: $V = \\frac{1}{3}\\pi r^2 h$

### Special Right Triangles
- 45-45-90: $x : x : x\\sqrt{2}$
- 30-60-90: $x : x\\sqrt{3} : 2x$

## Angle Relationships

- Supplementary: $a + b = 180$
- Triangle angle sum: $180$
- Exterior angle = sum of remote interior angles

## Right Triangle Trigonometry

$$\\sin \\theta = \\frac{\\text{opp}}{\\text{hyp}} \\quad \\cos \\theta = \\frac{\\text{adj}}{\\text{hyp}} \\quad \\tan \\theta = \\frac{\\text{opp}}{\\text{adj}}$$

## Circle Equations

$$(x-h)^2 + (y-k)^2 = r^2$$

## Distance and Midpoint

$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$
$$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$$

> **SAT Tip**: Draw a diagram for every geometry problem. The reference sheet gives formulas but you need to know WHEN to use them.`,
    categoryId: addCat.id
  }})
  console.log('  ✅ sat-geometry-trigonometry'); count++

  await prisma.topic.create({ data: {
    title: 'Complex Numbers on the SAT', slug: 'sat-complex-numbers', order: 1,
    description: 'Perform operations with complex numbers.',
    textContent: `# SAT: Complex Numbers

## The Imaginary Unit
$$i = \\sqrt{-1}, \\quad i^2 = -1$$

## Operations
- Add/Subtract: Combine like terms: $(3 + 2i) + (1 - 5i) = 4 - 3i$
- Multiply (FOIL): $(2 + 3i)(4 - i) = 11 + 10i$
- Divide: Multiply by conjugate

## Powers of $i$
$$i^1 = i, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$$

Pattern repeats every 4. For $i^n$: find $n \\mod 4$.

> **SAT Tip**: Complex number problems are usually straightforward computation. Remember $i^2 = -1$.`,
    categoryId: addCat.id
  }})
  console.log('  ✅ sat-complex-numbers'); count++

  const rwCat = await prisma.category.create({ data: { name: 'SAT Reading and Writing', slug: 'sat-reading-writing', order: 4, courseId: course.id } })
  await prisma.topic.create({ data: {
    title: 'Reading Comprehension Strategies', slug: 'sat-reading-comprehension', order: 0,
    description: 'Master strategies for the Digital SAT Reading and Writing section.',
    textContent: `# SAT: Reading Comprehension Strategies

## Digital SAT Format

54 questions in 64 minutes, divided into two modules. Each question has a short passage (25-150 words) with one question.

## Question Types

### Information and Ideas (26%)
- Central idea/purpose
- Detail and inference
- Command of evidence

### Craft and Structure (28%)
- Words in context
- Text structure and purpose
- Cross-text connections

### Expression of Ideas (20%)
- Rhetorical synthesis
- Transitions

### Standard English Conventions (26%)
- Grammar, usage, punctuation

## Key Strategies

1. Read the question FIRST
2. Read the passage carefully
3. Find evidence in the text
4. Eliminate wrong answers
5. Watch for traps: answers that are true but do not answer the question

> **SAT Tip**: On the Digital SAT, passage-based questions are SHORT. Read carefully rather than skimming.`,
    categoryId: rwCat.id
  }})
  console.log('  ✅ sat-reading-comprehension'); count++

  await prisma.topic.create({ data: {
    title: 'Grammar and Conventions', slug: 'sat-grammar-conventions', order: 1,
    description: 'Master the grammar rules tested on the Digital SAT.',
    textContent: `# SAT: Grammar and Conventions

## Subject-Verb Agreement
The verb must agree with the subject in number:
- "The list of items **is** long." (subject = list)

## Pronoun Rules
- Must match antecedent in number
- Must clearly refer to one antecedent

## Punctuation
- **Commas**: Lists, introductory elements, non-essential info
- **Semicolons**: Join two independent clauses
- **Colons**: After complete sentence, before list or explanation
- **Dashes**: Set off non-essential information

## Modifiers
The modifier must describe the subject:
- Wrong: "Walking to school, the rain started."
- Right: "Walking to school, I got caught in the rain."

## Parallel Structure
Items in a list must be in the same grammatical form.

## Verb Tense
Stay consistent unless there is a logical reason to change.

> **SAT Tip**: Read the whole sentence before answering. Context determines the correct answer.`,
    categoryId: rwCat.id
  }})
  console.log('  ✅ sat-grammar-conventions'); count++

  console.log('\n🎉 SAT Prep expanded with ' + count + ' new topics.')
}

main().catch(console.error).finally(() => prisma.$disconnect())
