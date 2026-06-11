import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating SAT Math content...')

  const sat = await prisma.course.findUnique({
    where: { slug: 'sat-prep' }
  })

  if (!sat) {
    throw new Error('SAT Prep course not found')
  }

  // Category 1: Heart of Algebra
  const heartAlgebra = await prisma.category.upsert({
    where: { slug: 'sat-heart-of-algebra' },
    update: {},
    create: {
      slug: 'sat-heart-of-algebra',
      name: 'Heart of Algebra',
      order: 1,
      courseId: sat.id
    }
  })

  // Topic 1: Linear Equations and Inequalities
  const linearEquations = await prisma.topic.upsert({
    where: { slug: 'sat-linear-equations-inequalities' },
    update: {},
    create: {
      slug: 'sat-linear-equations-inequalities',
      title: 'Linear Equations and Inequalities',
      description: 'Solve linear equations and inequalities - core SAT skill',
      order: 1,
      categoryId: heartAlgebra.id,
      isPremium: false,
      textContent: `
# Linear Equations and Inequalities (SAT)

## One-Variable Linear Equations

**SAT Format:** You'll see equations to solve or word problems requiring setup.

**Example:** Solve for $x$: $3(x - 2) = 15$

**Steps:**
1. Distribute: $3x - 6 = 15$
2. Add 6: $3x = 21$
3. Divide by 3: $x = 7$

## Linear Inequalities

**Key Difference:** When multiplying/dividing by a negative, flip the inequality sign!

**Example:** $-2x + 5 > 11$
- Subtract 5: $-2x > 6$
- Divide by -2 (flip sign!): $x < -3$

## Systems of Linear Equations

**Two methods:**

### Substitution
$$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$$

Substitute first into second:
$$3x + (2x + 1) = 11$$
$$5x = 10$$
$$x = 2, \\quad y = 5$$

### Elimination
$$\\begin{cases} 2x + 3y = 12 \\\\ 4x - 3y = 6 \\end{cases}$$

Add equations:
$$6x = 18 \\quad \\Rightarrow \\quad x = 3$$

## SAT Tips

- **Check your answer** by substituting back
- **Word problems:** Identify the variable, write equation, solve
- **Watch for tricks:** $2x = 10$ asks for $x$, not $2x$
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: linearEquations.id,
        order: 1,
        difficulty: 'EASY',
        question: 'If $4x - 7 = 21$, what is the value of $x$?',
        solution: `
**Solution:**

$$4x - 7 = 21$$

Add 7 to both sides:
$$4x = 28$$

Divide by 4:
$$x = 7$$

**Answer:** $x = 7$

**SAT Tip:** Always check: $4(7) - 7 = 28 - 7 = 21$ ✓
`
      },
      {
        topicId: linearEquations.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Solve the system: $\\begin{cases} y = 3x - 2 \\\\ 2x + y = 13 \\end{cases}$',
        solution: `
**Solution:**

Use substitution - plug first equation into second:
$$2x + (3x - 2) = 13$$
$$5x - 2 = 13$$
$$5x = 15$$
$$x = 3$$

Find $y$:
$$y = 3(3) - 2 = 7$$

**Answer:** $(3, 7)$ or $x = 3, y = 7$

**Check:** $2(3) + 7 = 13$ ✓
`
      },
      {
        topicId: linearEquations.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A phone plan costs $\\$25$ per month plus $\\$0.10$ per text message. If the total bill was $\\$37$, how many text messages were sent?',
        solution: `
**Solution:**

Let $t$ = number of text messages

**Equation:**
$$25 + 0.10t = 37$$

Subtract 25:
$$0.10t = 12$$

Divide by 0.10:
$$t = 120$$

**Answer:** 120 text messages

**SAT Tip:** Set up word problems carefully - identify what the variable represents!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: linearEquations.id,
        front: 'What must you do when multiplying/dividing an inequality by a negative number?',
        back: 'Flip the inequality sign (< becomes >, ≤ becomes ≥)'
      },
      {
        topicId: linearEquations.id,
        front: 'What are the two methods for solving systems of equations?',
        back: 'Substitution (solve for one variable, plug in) and Elimination (add/subtract equations)'
      },
      {
        topicId: linearEquations.id,
        front: 'SAT Tip: If asked to solve 3x + 5 = 20, what should you always do?',
        back: 'Check your answer by substituting back into the original equation'
      }
    ]
  })

  console.log('✓ Created topic: Linear Equations and Inequalities (3 examples, 3 flashcards)')

  // Topic 2: Functions
  const functions = await prisma.topic.upsert({
    where: { slug: 'sat-functions' },
    update: {},
    create: {
      slug: 'sat-functions',
      title: 'Functions',
      description: 'Master function notation, evaluation, and transformations for SAT',
      order: 2,
      categoryId: heartAlgebra.id,
      isPremium: false,
      textContent: `
# Functions (SAT)

## Function Notation

$$f(x) = 2x + 3$$

**Reading:** "f of x equals 2x plus 3"

**Evaluating:** $f(5) = 2(5) + 3 = 13$

## Types of SAT Function Questions

### 1. Evaluation
"If $f(x) = x^2 - 3$, what is $f(4)$?"

Answer: $f(4) = 16 - 3 = 13$

### 2. Composition
$(f \\circ g)(x) = f(g(x))$

If $f(x) = 2x$ and $g(x) = x + 1$:
$$f(g(3)) = f(4) = 8$$

### 3. Finding Input
"If $f(x) = 3x - 1$ and $f(a) = 14$, what is $a$?"

Solve: $3a - 1 = 14 \\Rightarrow a = 5$

## Domain and Range

- **Domain:** All possible input values (x-values)
- **Range:** All possible output values (y-values)

## SAT Function Tricks

Watch for:
- $f(x + 2)$ vs $f(x) + 2$ (very different!)
- Questions asking for $2f(3)$ when they give you $f(3) = 5$
  - Answer: $2(5) = 10$, not $f(6)$!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: functions.id,
        order: 1,
        difficulty: 'EASY',
        question: 'If $f(x) = 3x - 4$, what is $f(6)$?',
        solution: `
**Solution:**

Substitute $x = 6$:
$$f(6) = 3(6) - 4$$
$$f(6) = 18 - 4$$
$$f(6) = 14$$

**Answer:** $14$
`
      },
      {
        topicId: functions.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'If $g(x) = x^2 + 2x$, what is $g(-3)$?',
        solution: `
**Solution:**

Substitute $x = -3$:
$$g(-3) = (-3)^2 + 2(-3)$$
$$g(-3) = 9 - 6$$
$$g(-3) = 3$$

**Answer:** $3$

**SAT Tip:** Be careful with negatives! $(-3)^2 = 9$
`
      },
      {
        topicId: functions.id,
        order: 3,
        difficulty: 'HARD',
        question: 'If $h(x) = 2x + 5$ and $h(a) = 17$, what is the value of $a$?',
        solution: `
**Solution:**

Set up the equation:
$$h(a) = 17$$
$$2a + 5 = 17$$

Solve:
$$2a = 12$$
$$a = 6$$

**Answer:** $a = 6$

**Check:** $h(6) = 2(6) + 5 = 17$ ✓
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: functions.id,
        front: 'What does f(5) mean?',
        back: 'The output of function f when the input is 5 (substitute 5 for x)'
      },
      {
        topicId: functions.id,
        front: 'What is the difference between f(x + 2) and f(x) + 2?',
        back: 'f(x + 2) means substitute (x + 2) into function; f(x) + 2 means evaluate f(x) then add 2'
      },
      {
        topicId: functions.id,
        front: 'If f(3) = 7, what is 2f(3)?',
        back: '2 × 7 = 14 (multiply the output by 2, don\'t evaluate f(6)!)'
      }
    ]
  })

  console.log('✓ Created topic: Functions (3 examples, 3 flashcards)')

  // Category 2: Problem Solving and Data Analysis
  const problemSolving = await prisma.category.upsert({
    where: { slug: 'sat-problem-solving-data' },
    update: {},
    create: {
      slug: 'sat-problem-solving-data',
      name: 'Problem Solving and Data Analysis',
      order: 2,
      courseId: sat.id
    }
  })

  // Topic 3: Ratios, Proportions, and Percents
  const ratiosPercents = await prisma.topic.upsert({
    where: { slug: 'sat-ratios-proportions-percents' },
    update: {},
    create: {
      slug: 'sat-ratios-proportions-percents',
      title: 'Ratios, Proportions, and Percents',
      description: 'Master ratio problems and percent calculations on SAT',
      order: 1,
      categoryId: problemSolving.id,
      isPremium: false,
      textContent: `
# Ratios, Proportions, and Percents (SAT)

## Ratios

A ratio compares two quantities: $3:5$ or $\\frac{3}{5}$

**SAT Trick:** Total parts = sum of ratio parts

**Example:** Ratio of boys to girls is $2:3$
- Total parts = $2 + 3 = 5$
- If 30 students: boys = $\\frac{2}{5}(30) = 12$

## Proportions

Cross-multiply to solve:
$$\\frac{3}{4} = \\frac{x}{12} \\quad \\Rightarrow \\quad 4x = 36 \\quad \\Rightarrow \\quad x = 9$$

## Percent Problems

**Three types:**

### 1. Find percent of a number
What is 25% of 80?
$$0.25 \\times 80 = 20$$

### 2. Percent increase/decrease
**Formula:**
$$\\text{Percent Change} = \\frac{\\text{New - Original}}{\\text{Original}} \\times 100\\%$$

### 3. Find the whole
15 is 30% of what number?
$$15 = 0.30x \\quad \\Rightarrow \\quad x = 50$$

## SAT Percent Tricks

- **Successive percents:** Two 10% increases ≠ 20% increase!
  - $100 \\times 1.10 \\times 1.10 = 121$ (21% increase)
  
- **Discount then tax:** Order matters!
  - 20% off then 8% tax ≠ 12% off
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: ratiosPercents.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is 15% of 200?',
        solution: `
**Solution:**

Convert to decimal and multiply:
$$0.15 \\times 200 = 30$$

**Answer:** $30$

**SAT Tip:** 15% = 0.15 (move decimal two places left)
`
      },
      {
        topicId: ratiosPercents.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A price increased from $\\$80$ to $\\$100$. What is the percent increase?',
        solution: `
**Solution:**

Use percent change formula:
$$\\text{Percent Change} = \\frac{100 - 80}{80} \\times 100\\%$$

$$= \\frac{20}{80} \\times 100\\%$$

$$= 0.25 \\times 100\\% = 25\\%$$

**Answer:** $25\\%$ increase
`
      },
      {
        topicId: ratiosPercents.id,
        order: 3,
        difficulty: 'HARD',
        question: 'In a class, the ratio of boys to girls is $3:5$. If there are 40 students total, how many are girls?',
        solution: `
**Solution:**

Total ratio parts: $3 + 5 = 8$

Girls represent $\\frac{5}{8}$ of total:
$$\\frac{5}{8} \\times 40 = 25$$

**Answer:** 25 girls

**Check:** Boys = $\\frac{3}{8}(40) = 15$; Total = $15 + 25 = 40$ ✓
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ratiosPercents.id,
        front: 'If ratio of A to B is 2:3 and total is 50, how do you find A?',
        back: 'Total parts = 2 + 3 = 5; A = (2/5) × 50 = 20'
      },
      {
        topicId: ratiosPercents.id,
        front: 'What is the percent change formula?',
        back: '(New - Original) / Original × 100%'
      },
      {
        topicId: ratiosPercents.id,
        front: 'SAT Trick: Does a 20% increase followed by 20% decrease return to original?',
        back: 'No! You end up with 96% of original (0.8 × 1.2 = 0.96)'
      }
    ]
  })

  console.log('✓ Created topic: Ratios, Proportions, and Percents (3 examples, 3 flashcards)')

  // Category 3: Passport to Advanced Math
  const passportMath = await prisma.category.upsert({
    where: { slug: 'sat-passport-advanced-math' },
    update: {},
    create: {
      slug: 'sat-passport-advanced-math',
      name: 'Passport to Advanced Math',
      order: 3,
      courseId: sat.id
    }
  })

  // Topic 4: Quadratic Equations
  const quadratics = await prisma.topic.upsert({
    where: { slug: 'sat-quadratic-equations' },
    update: {},
    create: {
      slug: 'sat-quadratic-equations',
      title: 'Quadratic Equations',
      description: 'Solve quadratics by factoring, completing the square, and quadratic formula',
      order: 1,
      categoryId: passportMath.id,
      isPremium: false,
      textContent: `
# Quadratic Equations (SAT)

## Standard Form

$$ax^2 + bx + c = 0$$

## Method 1: Factoring

**Example:** $x^2 + 5x + 6 = 0$

Factor: $(x + 2)(x + 3) = 0$

Solutions: $x = -2$ or $x = -3$

## Method 2: Quadratic Formula

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Example:** $x^2 - 3x - 10 = 0$

Here: $a = 1, b = -3, c = -10$

$$x = \\frac{3 \\pm \\sqrt{9 + 40}}{2} = \\frac{3 \\pm 7}{2}$$

Solutions: $x = 5$ or $x = -2$

## The Discriminant

$$\\Delta = b^2 - 4ac$$

- If $\\Delta > 0$: Two real solutions
- If $\\Delta = 0$: One real solution
- If $\\Delta < 0$: No real solutions

## Vertex Form

$$y = a(x - h)^2 + k$$

Vertex is at $(h, k)$

## SAT Tips

- **Factor when possible** (fastest method)
- **Quadratic formula** works every time
- **Watch for:** $x^2 = 16$ means $x = \\pm 4$ (two solutions!)
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: quadratics.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Solve: $x^2 - 9 = 0$',
        solution: `
**Solution:**

Add 9 to both sides:
$$x^2 = 9$$

Take square root (remember ±):
$$x = \\pm 3$$

**Answer:** $x = 3$ or $x = -3$

**SAT Tip:** Don't forget the negative solution!
`
      },
      {
        topicId: quadratics.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Solve by factoring: $x^2 + 7x + 12 = 0$',
        solution: `
**Solution:**

Factor (find two numbers that multiply to 12 and add to 7):
$$(x + 3)(x + 4) = 0$$

Set each factor to zero:
$$x + 3 = 0 \\quad \\Rightarrow \\quad x = -3$$
$$x + 4 = 0 \\quad \\Rightarrow \\quad x = -4$$

**Answer:** $x = -3$ or $x = -4$
`
      },
      {
        topicId: quadratics.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Use the quadratic formula to solve: $2x^2 - 5x - 3 = 0$',
        solution: `
**Solution:**

Identify: $a = 2, b = -5, c = -3$

$$x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(2)(-3)}}{2(2)}$$

$$x = \\frac{5 \\pm \\sqrt{25 + 24}}{4}$$

$$x = \\frac{5 \\pm \\sqrt{49}}{4} = \\frac{5 \\pm 7}{4}$$

$$x = \\frac{12}{4} = 3 \\quad \\text{or} \\quad x = \\frac{-2}{4} = -\\frac{1}{2}$$

**Answer:** $x = 3$ or $x = -\\frac{1}{2}$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: quadratics.id,
        front: 'What is the quadratic formula?',
        back: 'x = (-b ± √(b² - 4ac)) / (2a) for ax² + bx + c = 0'
      },
      {
        topicId: quadratics.id,
        front: 'If x² = 25, what are the solutions?',
        back: 'x = 5 AND x = -5 (don\'t forget the negative!)'
      },
      {
        topicId: quadratics.id,
        front: 'What does the discriminant (b² - 4ac) tell you?',
        back: 'Number of real solutions: >0 (two), =0 (one), <0 (none)'
      }
    ]
  })

  console.log('✓ Created topic: Quadratic Equations (3 examples, 3 flashcards)')

  // Topic 5: Exponents and Radicals
  const exponentsRadicals = await prisma.topic.upsert({
    where: { slug: 'sat-exponents-radicals' },
    update: {},
    create: {
      slug: 'sat-exponents-radicals',
      title: 'Exponents and Radicals',
      description: 'Master exponent rules and radical simplification for SAT',
      order: 2,
      categoryId: passportMath.id,
      isPremium: false,
      textContent: `
# Exponents and Radicals (SAT)

## Exponent Rules

### Product Rule
$$a^m \\cdot a^n = a^{m+n}$$

### Quotient Rule
$$\\frac{a^m}{a^n} = a^{m-n}$$

### Power Rule
$$(a^m)^n = a^{mn}$$

### Negative Exponents
$$a^{-n} = \\frac{1}{a^n}$$

### Zero Exponent
$$a^0 = 1$$ (if $a \\neq 0$)

## Radicals

### Simplifying
$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$$

### Converting Between Forms
$$\\sqrt[n]{a^m} = a^{m/n}$$

**Examples:**
- $\\sqrt{x} = x^{1/2}$
- $\\sqrt[3]{x^2} = x^{2/3}$

## SAT Tricks

- **Fractional exponents:** $x^{3/2} = (\\sqrt{x})^3 = \\sqrt{x^3}$
- **Rationalizing:** $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$
- **Watch for:** $(2x)^3 = 8x^3$, not $2x^3$!
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: exponentsRadicals.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Simplify: $x^5 \\cdot x^3$',
        solution: `
**Solution:**

Use product rule (add exponents):
$$x^5 \\cdot x^3 = x^{5+3} = x^8$$

**Answer:** $x^8$
`
      },
      {
        topicId: exponentsRadicals.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Simplify: $\\sqrt{72}$',
        solution: `
**Solution:**

Factor to find perfect squares:
$$\\sqrt{72} = \\sqrt{36 \\cdot 2}$$

$$= \\sqrt{36} \\cdot \\sqrt{2}$$

$$= 6\\sqrt{2}$$

**Answer:** $6\\sqrt{2}$
`
      },
      {
        topicId: exponentsRadicals.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Simplify: $\\frac{(x^3)^4}{x^7}$',
        solution: `
**Solution:**

Step 1: Power rule in numerator
$$(x^3)^4 = x^{12}$$

Step 2: Quotient rule
$$\\frac{x^{12}}{x^7} = x^{12-7} = x^5$$

**Answer:** $x^5$

**SAT Tip:** Apply power rule before quotient rule!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: exponentsRadicals.id,
        front: 'What is the product rule for exponents?',
        back: 'When multiplying same bases, add exponents: aᵐ · aⁿ = aᵐ⁺ⁿ'
      },
      {
        topicId: exponentsRadicals.id,
        front: 'What does a negative exponent mean?',
        back: 'Reciprocal: a⁻ⁿ = 1/aⁿ'
      },
      {
        topicId: exponentsRadicals.id,
        front: 'How do you convert √x to exponential form?',
        back: 'x^(1/2) - the index becomes the denominator'
      }
    ]
  })

  console.log('✓ Created topic: Exponents and Radicals (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created SAT Math content!')
  console.log('   New categories: 3 (Heart of Algebra, Problem Solving/Data, Passport to Advanced Math)')
  console.log('   New topics: 5')
  console.log('   Total example problems added: 15')
  console.log('   Total flashcards added: 15')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
