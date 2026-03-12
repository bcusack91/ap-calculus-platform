import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating additional SAT Math content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  const heartOfAlgebra = await prisma.category.findUnique({
    where: { slug: 'sat-heart-of-algebra' }
  })

  if (!heartOfAlgebra) {
    throw new Error('Heart of Algebra category not found')
  }

  // Topic 1: Systems of Linear Equations
  const systems = await prisma.topic.upsert({
    where: { slug: 'sat-systems-equations' },
    update: {},
    create: {
      slug: 'sat-systems-equations',
      title: 'Systems of Linear Equations',
      description: 'Solve systems using substitution, elimination, and graphing',
      order: 3,
      categoryId: heartOfAlgebra.id,
      isPremium: false,
      textContent: `
# Systems of Linear Equations (SAT)

## What is a System of Equations?

**Two or more equations with the same variables**

**Goal:** Find values that satisfy ALL equations simultaneously

## SAT Solution Methods

### Method 1: Substitution
**Best when:** One equation is already solved for a variable

**Steps:**
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for remaining variable
4. Back-substitute to find other variable

**Example:**
$$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$$

Substitute $y = 2x + 1$ into second equation:
$$3x + (2x + 1) = 11$$
$$5x = 10$$
$$x = 2, \\quad y = 5$$

### Method 2: Elimination (Addition/Subtraction)
**Best when:** Coefficients line up nicely

**Steps:**
1. Multiply equations to get matching coefficients
2. Add or subtract to eliminate one variable
3. Solve for remaining variable
4. Substitute back

**Example:**
$$\\begin{cases} 2x + 3y = 12 \\\\ 2x - y = 4 \\end{cases}$$

Subtract equations:
$$4y = 8 \\quad \\Rightarrow \\quad y = 2$$
$$x = 3$$

### Method 3: Graphing
**Best when:** Answer choices show intersection points

**Key insight:** Solution = where lines cross

**For SAT:**
- Might show you the graph
- Ask "where do they intersect?"
- Answer = $(x, y)$ coordinate

## Special Cases

### No Solution (Parallel Lines)
**Same slope, different y-intercepts**

$$\\begin{cases} y = 2x + 3 \\\\ y = 2x - 1 \\end{cases}$$

Lines never cross!

### Infinitely Many Solutions (Same Line)
**Equations are multiples of each other**

$$\\begin{cases} 2x + 4y = 8 \\\\ x + 2y = 4 \\end{cases}$$

Second equation × 2 = First equation!

## SAT Question Types

### Type 1: Direct Solve
**"What is the solution to the system?"**

Straightforward - use any method

### Type 2: Value of Expression
**"What is $x + y$?"**

Don't need individual values - look for shortcut!

**Example:**
$$\\begin{cases} 3x + 2y = 10 \\\\ x + y = ? \\end{cases}$$

Sometimes you can add/subtract equations directly

### Type 3: Which Point Satisfies Both?
**"Which ordered pair $(x,y)$ is a solution?"**

**SAT Trick:** Plug in answer choices!

### Type 4: Number of Solutions
**"How many solutions does the system have?"**

- Different slopes → 1 solution
- Same slope, different intercepts → 0 solutions
- Same line → Infinite solutions

## SAT Strategies

### Calculator Tip
**Your calculator can solve systems!**

1. Graph both equations
2. Find intersection point
3. Verify with answer choices

### Check Your Answer
Plug $(x, y)$ back into BOTH equations

### Work Backwards
If given answer choices, test them!

### Look for Shortcuts
Sometimes adding equations gives you what you need

## Common SAT Traps

### Trap 1: Only solving for one variable
**Question asks for $x$, you find $y$ → keep going!**

### Trap 2: Arithmetic errors
**Always check by substituting back**

### Trap 3: Confusing $x$ and $y$
**Answer choices like $(3, 5)$ vs $(5, 3)$**

### Trap 4: Forgetting to simplify
**May need to reduce fractions or combine terms**

## SAT Tips

- **Substitution** when equation already solved
- **Elimination** when coefficients match up
- **Graphing** when you have a calculator
- **Plug in answers** when given choices
- **Check your work** - takes 10 seconds, saves points!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: systems.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Solve the system:\n\n$$\\begin{cases} y = x + 2 \\\\ x + y = 8 \\end{cases}$$',
        solution: `
**Solution:**

First equation already solved for $y$, so use **substitution:**

$$x + (x + 2) = 8$$
$$2x + 2 = 8$$
$$2x = 6$$
$$x = 3$$

Find $y$:
$$y = 3 + 2 = 5$$

**Answer:** $(3, 5)$

**Check:** $3 + 5 = 8$ ✓

**SAT Tip:** When one equation is already solved, substitution is fastest!
`
      },
      {
        topicId: systems.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'If $\\begin{cases} 2x + 3y = 13 \\\\ 4x - y = 5 \\end{cases}$, what is the value of $x + y$?',
        solution: `
**Solution:**

**Method 1 - Solve completely:**

Multiply second equation by 3:
$$12x - 3y = 15$$

Add to first equation:
$$14x = 28$$
$$x = 2$$

Substitute: $4(2) - y = 5 \\Rightarrow y = 3$

So $x + y = 2 + 3 = 5$

**Method 2 - Look for shortcut:**
Could try to manipulate equations to get $x + y$ directly

**Answer:** $5$

**SAT Tip:** When asked for sum/difference, look for ways to combine equations!
`
      },
      {
        topicId: systems.id,
        order: 3,
        difficulty: 'HARD',
        question: 'How many solutions does this system have?\n\n$$\\begin{cases} 3x - 6y = 12 \\\\ x - 2y = 5 \\end{cases}$$',
        solution: `
**Solution:**

**Rewrite in slope-intercept form:**

First equation:
$$3x - 6y = 12$$
$$-6y = -3x + 12$$
$$y = \\frac{1}{2}x - 2$$

Second equation:
$$x - 2y = 5$$
$$-2y = -x + 5$$
$$y = \\frac{1}{2}x - \\frac{5}{2}$$

**Compare:**
- Both have slope $\\frac{1}{2}$ (SAME)
- Different y-intercepts: $-2$ vs $-\\frac{5}{2}$ (DIFFERENT)

**Same slope + Different intercepts = Parallel lines**

**Answer:** 0 solutions (no intersection)

**SAT Tip:** Parallel lines never meet! Check slopes and intercepts.
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: systems.id,
        front: 'When should you use substitution vs. elimination for systems of equations?',
        back: 'Substitution: when one equation is already solved for a variable; Elimination: when coefficients line up nicely'
      },
      {
        topicId: systems.id,
        front: 'How can you tell if a system has no solution?',
        back: 'Same slope, different y-intercepts (parallel lines that never cross)'
      },
      {
        topicId: systems.id,
        front: 'SAT Strategy: What should you do if a system question gives answer choices?',
        back: 'Plug in the answer choices to see which point satisfies both equations - faster than solving!'
      }
    ]
  })

  console.log('✓ Created topic: Systems of Linear Equations (3 examples, 3 flashcards)')

  // Get Problem Solving and Data Analysis category
  const problemSolving = await prisma.category.findUnique({
    where: { slug: 'sat-problem-solving-data' }
  })

  if (!problemSolving) {
    throw new Error('Problem Solving category not found')
  }

  // Topic 2: Data Analysis and Statistics
  const dataAnalysis = await prisma.topic.upsert({
    where: { slug: 'sat-data-statistics' },
    update: {},
    create: {
      slug: 'sat-data-statistics',
      title: 'Data Analysis and Statistics',
      description: 'Mean, median, mode, range, and interpreting data',
      order: 2,
      categoryId: problemSolving.id,
      isPremium: false,
      textContent: `
# Data Analysis and Statistics (SAT)

## Measures of Central Tendency

### Mean (Average)
**Formula:**
$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

**Example:** Test scores: 80, 85, 90, 95
$$\\text{Mean} = \\frac{80+85+90+95}{4} = \\frac{350}{4} = 87.5$$

### Median (Middle Value)
**Steps:**
1. Put numbers in order
2. Find the middle value
3. If even number of values, average the two middle ones

**Example:** 3, 7, 9, 12, 15
Median = 9 (middle value)

**Example:** 2, 5, 8, 11
Median = $\\frac{5+8}{2} = 6.5$ (average of middle two)

### Mode (Most Frequent)
**The value that appears most often**

**Example:** 2, 3, 3, 5, 7, 3, 9
Mode = 3 (appears three times)

**Note:** Can have no mode or multiple modes

### Range
**Maximum value - Minimum value**

**Example:** 10, 15, 22, 18, 30
Range = $30 - 10 = 20$

## Standard Deviation

**Measures spread/variability**

- **Low standard deviation:** Data close together
- **High standard deviation:** Data spread out

**You don't need the formula!** SAT gives context:

"Which dataset has greater variability?" → higher standard deviation

## Reading Data from Graphs

### Bar Graphs
- Height shows value
- Compare categories
- Look for trends

### Line Graphs
- Shows change over time
- Slope indicates rate of change
- Look for increases/decreases

### Scatter Plots
- Each point = one observation
- Look for patterns/trends
- Positive/negative correlation

### Box Plots (Box-and-Whisker)
Shows 5-number summary:
1. Minimum
2. Q1 (25th percentile)
3. Median (Q2, 50th percentile)
4. Q3 (75th percentile)
5. Maximum

**Interquartile Range (IQR):** $Q3 - Q1$

## Interpreting Data

### Correlation vs. Causation

**Correlation:** Two things are related
**Causation:** One CAUSES the other

**SAT Trap:** Just because things correlate doesn't mean one causes the other!

**Example:**
- Ice cream sales and drowning both increase in summer
- Correlation: YES
- Causation: NO (heat causes both, not each other)

### Positive vs. Negative Correlation

**Positive:** Both increase together
- Example: Study time and test scores

**Negative (Inverse):** One increases, other decreases
- Example: Speed and travel time

**No correlation:** No clear pattern

## Probability and Data

### Basic Probability
$$P(\\text{event}) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$$

### Two-Way Tables

| | Group A | Group B | Total |
|---|---------|---------|-------|
| Yes | 30 | 20 | 50 |
| No | 10 | 40 | 50 |
| Total | 40 | 60 | 100 |

**Questions:**
- "What percent of Group A said Yes?"
  $$\\frac{30}{40} = 75\\%$$

- "What percent of all respondents said Yes?"
  $$\\frac{50}{100} = 50\\%$$

## SAT Question Types

### Type 1: Calculate Mean/Median
**Given data, find the measure**

Use formulas/procedures above

### Type 2: Effect of Adding/Removing Data
**"If we add a value of 100, how does the mean change?"**

Calculate new mean with additional value

### Type 3: Reading Graphs
**"According to the graph, in which year...?"**

Direct lookup from visual

### Type 4: Interpreting Studies
**"The study shows that X is associated with Y. Can we conclude X causes Y?"**

Usually NO - correlation ≠ causation

## SAT Strategies

### Mean Tricks
**If all values increase by 5, mean increases by 5**
**If all values double, mean doubles**

### Median is Resistant
**Outliers don't affect median much**
**Outliers greatly affect mean**

### Use Calculator
**Sum, mean functions save time**

### Read Carefully
**"What percent of Group A" vs "What percent of all"**

## Common SAT Traps

### Trap 1: Mean vs. Median Confusion
**Mean = average**
**Median = middle**

### Trap 2: Percent vs. Number
**30% ≠ 30 people**

### Trap 3: Correlation = Causation
**Associated ≠ causes**

### Trap 4: Wrong Denominator
**Percent of subgroup vs. percent of total**

## SAT Tips

- **Median:** Always order the data first!
- **Mean:** Sum ÷ count
- **Outliers** affect mean more than median
- **Read graph labels** carefully (units, scale)
- **Check denominators** for percent questions
- **Correlation ≠ Causation** on SAT!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: dataAnalysis.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Find the median of: 12, 8, 15, 10, 9',
        solution: `
**Solution:**

**Step 1:** Put in order
$$8, 9, 10, 12, 15$$

**Step 2:** Find middle value
5 numbers, so middle is 3rd value

**Answer:** 10

**SAT Tip:** ALWAYS order the data first when finding median!
`
      },
      {
        topicId: dataAnalysis.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A dataset has 5 values with a mean of 20. If a 6th value of 32 is added, what is the new mean?',
        solution: `
**Solution:**

**Original sum:**
$$5 \\times 20 = 100$$

**Add new value:**
$$100 + 32 = 132$$

**New mean:**
$$\\frac{132}{6} = 22$$

**Answer:** 22

**SAT Tip:** Mean × count = sum. Use this to find totals!
`
      },
      {
        topicId: dataAnalysis.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A study found that students who eat breakfast tend to have higher test scores. Which conclusion is valid?\n\nA) Eating breakfast causes higher test scores\nB) There is an association between eating breakfast and test scores\nC) Students should be required to eat breakfast\nD) Skipping breakfast lowers intelligence',
        solution: `
**Solution:**

**Key word:** "tend to" = correlation/association

**Check each:**
- A) **Causes** - too strong! Correlation ≠ causation ❌
- B) **Association** - this is what the data shows ✓
- C) **Should be required** - policy decision, not data conclusion ❌
- D) **Lowers intelligence** - causation + extreme claim ❌

**Answer:** B - There is an association

**SAT Tip:** Studies show correlation/association. Saying "causes" requires controlled experiments!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dataAnalysis.id,
        front: 'What is the difference between mean and median?',
        back: 'Mean = average (sum ÷ count); Median = middle value when data is ordered'
      },
      {
        topicId: dataAnalysis.id,
        front: 'Which measure is affected more by outliers: mean or median?',
        back: 'Mean is greatly affected by outliers; Median is resistant to outliers'
      },
      {
        topicId: dataAnalysis.id,
        front: 'SAT Trap: Does correlation prove causation?',
        back: 'NO! Correlation shows association, but doesn\'t prove one thing causes the other'
      }
    ]
  })

  console.log('✓ Created topic: Data Analysis and Statistics (3 examples, 3 flashcards)')

  // Get Passport to Advanced Math category
  const passportMath = await prisma.category.findUnique({
    where: { slug: 'sat-passport-advanced-math' }
  })

  if (!passportMath) {
    throw new Error('Passport to Advanced Math category not found')
  }

  // Topic 3: Polynomial Operations and Factoring
  const polynomials = await prisma.topic.upsert({
    where: { slug: 'sat-polynomials-factoring' },
    update: {},
    create: {
      slug: 'sat-polynomials-factoring',
      title: 'Polynomial Operations and Factoring',
      description: 'Add, subtract, multiply, and factor polynomial expressions',
      order: 4,
      categoryId: passportMath.id,
      isPremium: false,
      textContent: `
# Polynomial Operations and Factoring (SAT)

## Adding and Subtracting Polynomials

### Rule: Combine Like Terms

**Like terms:** Same variable(s) with same exponent(s)

**Example:**
$$(3x^2 + 5x - 2) + (2x^2 - 3x + 7)$$
$$= 3x^2 + 2x^2 + 5x - 3x - 2 + 7$$
$$= 5x^2 + 2x + 5$$

**Subtraction:** Distribute the negative!
$$(4x^2 + 3x) - (2x^2 - x)$$
$$= 4x^2 + 3x - 2x^2 + x$$
$$= 2x^2 + 4x$$

## Multiplying Polynomials

### Monomial × Polynomial
**Distribute the monomial to each term**

$$3x(2x^2 - 5x + 1)$$
$$= 6x^3 - 15x^2 + 3x$$

### Binomial × Binomial (FOIL)
**F**irst, **O**uter, **I**nner, **L**ast

$$(x + 3)(x + 5)$$
$$= x^2 + 5x + 3x + 15$$
$$= x^2 + 8x + 15$$

### Special Products

**Square of a sum:**
$$(a + b)^2 = a^2 + 2ab + b^2$$

**Square of a difference:**
$$(a - b)^2 = a^2 - 2ab + b^2$$

**Difference of squares:**
$$(a + b)(a - b) = a^2 - b^2$$

**Examples:**
$$(x + 4)^2 = x^2 + 8x + 16$$
$$(x - 3)^2 = x^2 - 6x + 9$$
$$(x + 5)(x - 5) = x^2 - 25$$

## Factoring

### Greatest Common Factor (GCF)
**Pull out what's common**

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

### Factoring Trinomials
**$x^2 + bx + c$**

Find two numbers that:
- **Multiply** to $c$
- **Add** to $b$

**Example:** $x^2 + 7x + 12$
- Need: multiply to 12, add to 7
- Numbers: 3 and 4
- Factor: $(x + 3)(x + 4)$

### Difference of Squares
$$a^2 - b^2 = (a+b)(a-b)$$

**Example:** $x^2 - 16 = (x+4)(x-4)$

### Perfect Square Trinomials
$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

**Example:** $x^2 + 10x + 25 = (x + 5)^2$

### Factoring by Grouping
**For 4 terms**

$$ax + ay + bx + by$$
$$= a(x+y) + b(x+y)$$
$$= (a+b)(x+y)$$

## Polynomial Division

### Long Division (rarely on SAT)
Similar to numeric long division

### Synthetic Division (rarely on SAT)
Shortcut for dividing by $(x - a)$

**SAT Focus:** Usually simpler - factor and cancel

## SAT Question Types

### Type 1: Expand/Multiply
**"What is $(2x - 3)(x + 4)$?"**

Use FOIL or distribution

### Type 2: Factor Completely
**"Factor: $x^2 - 9$"**

Recognize patterns (difference of squares)

### Type 3: Simplify Expressions
**"Simplify: $(x^2 + 3x) - (2x^2 - x)$"**

Combine like terms

### Type 4: Application
**"The area of a rectangle is $x^2 + 7x + 12$. If the length is $x + 4$, what is the width?"**

Factor and divide: $(x+3)$

## SAT Strategies

### Recognize Patterns
- Difference of squares: $a^2 - b^2$
- Perfect squares: $a^2 ± 2ab + b^2$

### Check by FOIL-ing Back
**Factor: $x^2 + 5x + 6 = (x+2)(x+3)$**
Check: $(x+2)(x+3) = x^2 + 5x + 6$ ✓

### Use Answer Choices
**If asked to factor, check answers by multiplying**

### Common Coefficients
**Always check for GCF first!**

## Common SAT Traps

### Trap 1: Sign Errors
$$(x - 3)^2 ≠ x^2 - 9$$
Correct: $(x-3)^2 = x^2 - 6x + 9$

### Trap 2: Incomplete Factoring
$$2x^2 + 8x = 2x(x + 4)$$ ← Must pull out GCF

### Trap 3: Distributing Incorrectly
$$(x + 3)^2 ≠ x^2 + 9$$
Must include middle term: $x^2 + 6x + 9$

### Trap 4: Subtracting Without Parentheses
$$(3x) - (2x - 5) = 3x - 2x + 5 = x + 5$$ ← Distribute negative!

## SAT Tips

- **FOIL** for binomial multiplication
- **Difference of squares** appears often! $a^2 - b^2 = (a+b)(a-b)$
- **Check GCF first** when factoring
- **$(a+b)^2 = a^2 + 2ab + b^2$** (don't forget middle term!)
- **Verify** by expanding factored form
- **Use calculator** to check numeric results
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: polynomials.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Expand: $(x + 6)(x - 2)$',
        solution: `
**Solution:**

Use **FOIL** (First, Outer, Inner, Last):

**F:** $x \\cdot x = x^2$
**O:** $x \\cdot (-2) = -2x$
**I:** $6 \\cdot x = 6x$
**L:** $6 \\cdot (-2) = -12$

Combine:
$$x^2 - 2x + 6x - 12$$
$$= x^2 + 4x - 12$$

**Answer:** $x^2 + 4x - 12$

**SAT Tip:** Don't forget to combine like terms after FOIL-ing!
`
      },
      {
        topicId: polynomials.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Factor completely: $x^2 - 49$',
        solution: `
**Solution:**

Recognize **difference of squares** pattern:
$$a^2 - b^2 = (a+b)(a-b)$$

Here: $x^2 - 49 = x^2 - 7^2$

Factor:
$$= (x + 7)(x - 7)$$

**Answer:** $(x + 7)(x - 7)$

**Check:** $(x+7)(x-7) = x^2 - 7x + 7x - 49 = x^2 - 49$ ✓

**SAT Tip:** Difference of squares is common! Memorize $a^2 - b^2 = (a+b)(a-b)$
`
      },
      {
        topicId: polynomials.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which is equivalent to $(2x - 3)^2$?\n\nA) $4x^2 - 9$\nB) $4x^2 + 9$\nC) $4x^2 - 12x + 9$\nD) $4x^2 + 12x + 9$',
        solution: `
**Solution:**

Use **square of a difference** pattern:
$$(a - b)^2 = a^2 - 2ab + b^2$$

Here: $a = 2x$, $b = 3$

$$(2x)^2 = 4x^2$$
$$-2(2x)(3) = -12x$$
$$3^2 = 9$$

Result:
$$4x^2 - 12x + 9$$

**Answer:** C

**Common trap:** A is $(2x+3)(2x-3)$ (difference of squares, not square!)

**SAT Tip:** $(a-b)^2$ has THREE terms, not two! Don't forget the middle term.
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: polynomials.id,
        front: 'What does FOIL stand for?',
        back: 'First, Outer, Inner, Last - method for multiplying two binomials'
      },
      {
        topicId: polynomials.id,
        front: 'What is the difference of squares formula?',
        back: 'a² - b² = (a + b)(a - b)'
      },
      {
        topicId: polynomials.id,
        front: 'SAT Trap: What is (a + b)²?',
        back: 'a² + 2ab + b² (NOT a² + b²! Must include the middle term 2ab)'
      }
    ]
  })

  console.log('✓ Created topic: Polynomial Operations and Factoring (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created additional SAT Math content!')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
