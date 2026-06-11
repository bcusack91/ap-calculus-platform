import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Exponential and Logarithmic Functions (Part 2)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'exponential-logarithmic-functions' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 3: Solving Exponential and Logarithmic Equations
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'solving-exponential-logarithmic-equations' },
    update: {},
    create: {
      title: 'Solving Exponential and Logarithmic Equations',
      slug: 'solving-exponential-logarithmic-equations',
      description: 'Techniques for solving equations involving exponentials and logarithms',
      order: 3,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Solving Exponential and Logarithmic Equations

## Solving Exponential Equations

An **exponential equation** has the variable in the exponent.

### Strategy 1: Same Base Method

If you can express both sides with the same base, set the exponents equal.

**If $b^x = b^y$, then $x = y$**

#### Example
$$2^{3x} = 2^{15}$$
$$3x = 15$$
$$x = 5$$

### Strategy 2: Taking Logarithms

If you can't easily get the same base, take the logarithm of both sides.

**Steps:**
1. Isolate the exponential expression
2. Take log (or ln) of both sides
3. Use the power rule: $\\log(b^x) = x\\log(b)$
4. Solve for the variable

#### Example
$$5^x = 17$$
$$\\ln(5^x) = \\ln(17)$$
$$x\\ln(5) = \\ln(17)$$
$$x = \\frac{\\ln(17)}{\\ln(5)}$$

## Solving Logarithmic Equations

A **logarithmic equation** contains logarithmic expressions.

### Strategy 1: Convert to Exponential Form

Use the definition: $\\log_b(x) = y$ means $b^y = x$

#### Example
$$\\log_3(x) = 4$$
$$x = 3^4 = 81$$

### Strategy 2: Combine Logarithms

Use logarithm properties to combine into a single log, then solve.

#### Key Properties to Use
- $\\log_b(M) + \\log_b(N) = \\log_b(MN)$
- $\\log_b(M) - \\log_b(N) = \\log_b(M/N)$
- $p\\log_b(M) = \\log_b(M^p)$

### Strategy 3: Equal Logs Method

**If $\\log_b(M) = \\log_b(N)$, then $M = N$**

(assuming same base and same domain)

## Important Reminders

⚠️ **Check your answers!**
- Logarithms require positive arguments: $x > 0$ for $\\log(x)$
- Reject any solutions that give $\\log(\\text{negative})$ or $\\log(0)$

⚠️ **One-to-one property**
- $b^x$ is one-to-one (equal outputs → equal inputs)
- $\\log_b(x)$ is one-to-one (equal outputs → equal inputs)

## Common Equations to Recognize

### Type 1: $b^x = a$
$$x = \\log_b(a) = \\frac{\\ln(a)}{\\ln(b)}$$

### Type 2: $a \\cdot b^{cx} + d = e$
1. Isolate: $b^{cx} = \\frac{e - d}{a}$
2. Take log: $cx\\ln(b) = \\ln\\left(\\frac{e - d}{a}\\right)$
3. Solve: $x = \\frac{1}{c\\ln(b)}\\ln\\left(\\frac{e - d}{a}\\right)$

### Type 3: $\\log(x) + \\log(x - 3) = 1$
1. Combine: $\\log(x(x - 3)) = 1$
2. Convert: $x(x - 3) = 10^1$
3. Solve quadratic: $x^2 - 3x - 10 = 0$

## Applications

1. **Compound Interest**: $A = P(1 + r)^t$
2. **Exponential Growth/Decay**: $A = A_0e^{kt}$
3. **Half-life Problems**: $A = A_0(1/2)^{t/h}$
4. **Doubling Time**: Solve $2A_0 = A_0e^{kt}$ for $t$
`,
      exampleProblems: {
        create: [
          {
            question: 'Solve for $x$: $3^{2x-1} = 27$',
            solution: `**Solution:**

Step 1: Express both sides with the same base.

Notice that $27 = 3^3$:
$$3^{2x-1} = 3^3$$

Step 2: Set exponents equal.

Since the bases are equal:
$$2x - 1 = 3$$

Step 3: Solve for $x$.
$$2x = 4$$
$$x = 2$$

Step 4: Check.
$$3^{2(2)-1} = 3^{4-1} = 3^3 = 27$$ ✓

**Answer:** $x = 2$`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Solve for $x$: $5^x = 23$',
            solution: `**Solution:**

Step 1: Take the natural log of both sides.

$$\\ln(5^x) = \\ln(23)$$

Step 2: Use the power rule.
$$x\\ln(5) = \\ln(23)$$

Step 3: Solve for $x$.
$$x = \\frac{\\ln(23)}{\\ln(5)}$$

Step 4: Calculate (optional).
$$x \\approx \\frac{3.135}{1.609} \\approx 1.948$$

**Answer:** $x = \\frac{\\ln(23)}{\\ln(5)} \\approx 1.948$`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Solve for $x$: $\\log_2(x) + \\log_2(x - 3) = 2$',
            solution: `**Solution:**

Step 1: Combine logarithms using the product rule.

$$\\log_2(x) + \\log_2(x - 3) = \\log_2(x(x - 3)) = 2$$

Step 2: Convert to exponential form.
$$x(x - 3) = 2^2 = 4$$

Step 3: Expand and rearrange.
$$x^2 - 3x = 4$$
$$x^2 - 3x - 4 = 0$$

Step 4: Factor.
$$(x - 4)(x + 1) = 0$$
$$x = 4 \\text{ or } x = -1$$

Step 5: Check both solutions in the original equation.

**For $x = 4$:**
$$\\log_2(4) + \\log_2(4 - 3) = \\log_2(4) + \\log_2(1)$$
$$= 2 + 0 = 2$$ ✓

**For $x = -1$:**
$$\\log_2(-1) + \\log_2(-4)$$ 
This is undefined (cannot take log of negative numbers) ✗

**Answer:** $x = 4$ (reject $x = -1$)`,
            difficulty: 'MEDIUM',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic3.title}`)

  const flashcards3 = [
    {
      topicId: topic3.id,
      front: 'If $b^x = b^y$, what can you conclude?',
      back: '$x = y$ (one-to-one property)',
    },
    {
      topicId: topic3.id,
      front: 'How do you solve $a^x = b$ when you can\'t use the same base?',
      back: 'Take log of both sides: $x\\ln(a) = \\ln(b)$, so $x = \\frac{\\ln(b)}{\\ln(a)}$',
    },
    {
      topicId: topic3.id,
      front: 'If $\\log_b(M) = \\log_b(N)$, what can you conclude?',
      back: '$M = N$ (one-to-one property of logarithms)',
    },
    {
      topicId: topic3.id,
      front: 'What must you always check when solving logarithmic equations?',
      back: 'Check that all solutions give positive arguments for all logarithms (domain restrictions)',
    },
    {
      topicId: topic3.id,
      front: 'How do you combine $\\log(x) + \\log(y)$?',
      back: '$\\log(xy)$ using the product rule',
    },
    {
      topicId: topic3.id,
      front: 'What is the first step in solving $\\log_3(x) = 5$?',
      back: 'Convert to exponential form: $x = 3^5 = 243$',
    },
  ]

  for (const flashcard of flashcards3) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards3.length} flashcards for ${topic3.title}`)

  // Topic 4: Logarithmic and Exponential Models
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'logarithmic-exponential-models' },
    update: {},
    create: {
      title: 'Logarithmic and Exponential Models',
      slug: 'logarithmic-exponential-models',
      description: 'Real-world applications including compound interest, population growth, and radioactive decay',
      order: 4,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Logarithmic and Exponential Models

## Exponential Growth Model

The general exponential growth model is:

$$A(t) = A_0 e^{kt}$$

where:
- $A(t)$ = amount at time $t$
- $A_0$ = initial amount (at $t = 0$)
- $k$ = growth rate constant ($k > 0$ for growth)
- $t$ = time
- $e \\approx 2.71828$ (Euler's number)

### Finding the Growth Rate $k$

If you know two data points, you can solve for $k$:

1. Substitute known values
2. Divide by $A_0$
3. Take natural log of both sides
4. Solve for $k$

## Exponential Decay Model

Same formula, but $k < 0$ (negative):

$$A(t) = A_0 e^{-kt}$$

where $k > 0$ represents the decay rate.

### Half-Life Formula

The **half-life** is the time it takes for half the substance to decay.

$$A(t) = A_0\\left(\\frac{1}{2}\\right)^{t/h}$$

where $h$ is the half-life.

**Relationship to $k$:**
$$h = \\frac{\\ln(2)}{k}$$

## Compound Interest Models

### Compound Interest (n times per year)

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

where:
- $P$ = principal (initial investment)
- $r$ = annual interest rate (as decimal)
- $n$ = number of times compounded per year
- $t$ = time in years

### Continuous Compounding

$$A = Pe^{rt}$$

This is the limit as $n \\to \\infty$ (compounding infinitely often).

## Doubling Time

The time it takes for a quantity to double:

$$2A_0 = A_0e^{kt}$$
$$2 = e^{kt}$$
$$\\ln(2) = kt$$
$$t = \\frac{\\ln(2)}{k}$$

**Doubling time**: $t_d = \\frac{\\ln(2)}{k} \\approx \\frac{0.693}{k}$

## Population Growth Models

### Unlimited Growth (Malthusian)

$$P(t) = P_0e^{kt}$$

Assumes unlimited resources (not realistic long-term).

### Logistic Growth

$$P(t) = \\frac{L}{1 + Ce^{-kt}}$$

where:
- $L$ = carrying capacity (maximum sustainable population)
- $C$ = constant based on initial conditions
- $k$ = growth rate

The population approaches $L$ as $t \\to \\infty$.

## Newton's Law of Cooling

Temperature of an object over time:

$$T(t) = T_s + (T_0 - T_s)e^{-kt}$$

where:
- $T(t)$ = temperature at time $t$
- $T_s$ = surrounding (ambient) temperature
- $T_0$ = initial temperature
- $k$ = cooling rate constant

## Logarithmic Models

Some phenomena grow logarithmically:

$$y = a + b\\ln(x)$$

Examples:
- Earthquake intensity (Richter scale)
- Sound intensity (decibels)
- pH scale (acidity)

### Richter Scale

Earthquake magnitude:
$$M = \\log\\left(\\frac{I}{I_0}\\right)$$

where $I$ is intensity and $I_0$ is reference intensity.

An increase of 1 on the Richter scale means 10 times more intense!

## Solving Applied Problems

**General Strategy:**
1. Identify the type of model needed
2. Write the equation with known values
3. Solve for the unknown (often $k$ first, then answer the question)
4. Check if the answer makes sense in context
`,
      exampleProblems: {
        create: [
          {
            question: 'A population of bacteria grows from 100 to 500 in 3 hours. Assuming exponential growth $P(t) = P_0e^{kt}$, find the growth rate $k$ and predict the population after 5 hours.',
            solution: `**Solution:**

**Part 1: Find $k$**

Given: $P_0 = 100$, $P(3) = 500$, $t = 3$

Step 1: Write the equation.
$$500 = 100e^{3k}$$

Step 2: Divide by 100.
$$5 = e^{3k}$$

Step 3: Take natural log.
$$\\ln(5) = 3k$$

Step 4: Solve for $k$.
$$k = \\frac{\\ln(5)}{3} \\approx \\frac{1.609}{3} \\approx 0.536 \\text{ per hour}$$

**Part 2: Find $P(5)$**

$$P(5) = 100e^{0.536(5)}$$
$$= 100e^{2.68}$$
$$\\approx 100(14.58)$$
$$\\approx 1458$$

**Answers:**
- Growth rate: $k \\approx 0.536$ per hour
- Population after 5 hours: approximately 1,458 bacteria`,
            difficulty: 'MEDIUM',
            order: 1,
          },
          {
            question: 'Invest \\$5,000 at 6% annual interest compounded monthly. How much will you have after 10 years?',
            solution: `**Solution:**

Given:
- $P = 5000$ (principal)
- $r = 0.06$ (6% as decimal)
- $n = 12$ (monthly compounding)
- $t = 10$ years

Step 1: Write the compound interest formula.
$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

Step 2: Substitute values.
$$A = 5000\\left(1 + \\frac{0.06}{12}\\right)^{12(10)}$$

$$= 5000\\left(1 + 0.005\\right)^{120}$$

$$= 5000(1.005)^{120}$$

Step 3: Calculate.
$$(1.005)^{120} \\approx 1.8194$$

$$A \\approx 5000(1.8194) \\approx 9097$$

**Answer:** You will have approximately **\\$9,097** after 10 years.`,
            difficulty: 'EASY',
            order: 2,
          },
          {
            question: 'Carbon-14 has a half-life of 5,730 years. If a fossil contains 25% of its original carbon-14, how old is the fossil?',
            solution: `**Solution:**

Given:
- Half-life: $h = 5730$ years
- Current amount: $A(t) = 0.25A_0$ (25% remaining)

Step 1: Write the half-life formula.
$$A(t) = A_0\\left(\\frac{1}{2}\\right)^{t/h}$$

Step 2: Substitute known values.
$$0.25A_0 = A_0\\left(\\frac{1}{2}\\right)^{t/5730}$$

Step 3: Divide by $A_0$.
$$0.25 = \\left(\\frac{1}{2}\\right)^{t/5730}$$

Step 4: Recognize that $0.25 = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2$.
$$\\left(\\frac{1}{2}\\right)^2 = \\left(\\frac{1}{2}\\right)^{t/5730}$$

Step 5: Set exponents equal.
$$2 = \\frac{t}{5730}$$

Step 6: Solve for $t$.
$$t = 2(5730) = 11,460 \\text{ years}$$

**Alternative method using logarithms:**

$$\\ln(0.25) = \\frac{t}{5730}\\ln(0.5)$$

$$t = \\frac{5730 \\ln(0.25)}{\\ln(0.5)} = 11,460 \\text{ years}$$

**Answer:** The fossil is approximately **11,460 years old**.`,
            difficulty: 'HARD',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic4.title}`)

  const flashcards4 = [
    {
      topicId: topic4.id,
      front: 'What is the exponential growth model formula?',
      back: '$A(t) = A_0e^{kt}$ where $k > 0$ is the growth rate',
    },
    {
      topicId: topic4.id,
      front: 'What is the compound interest formula for continuous compounding?',
      back: '$A = Pe^{rt}$',
    },
    {
      topicId: topic4.id,
      front: 'What is the half-life formula?',
      back: '$A(t) = A_0(\\frac{1}{2})^{t/h}$ where $h$ is the half-life',
    },
    {
      topicId: topic4.id,
      front: 'What is the doubling time formula?',
      back: '$t_d = \\frac{\\ln(2)}{k}$ where $k$ is the growth rate',
    },
    {
      topicId: topic4.id,
      front: 'In the compound interest formula $A = P(1 + \\frac{r}{n})^{nt}$, what does $n$ represent?',
      back: 'The number of times interest is compounded per year',
    },
    {
      topicId: topic4.id,
      front: 'What happens to a quantity after one half-life?',
      back: 'It reduces to 50% (half) of its original amount',
    },
    {
      topicId: topic4.id,
      front: 'What is the relationship between half-life $h$ and decay constant $k$?',
      back: '$h = \\frac{\\ln(2)}{k}$',
    },
  ]

  for (const flashcard of flashcards4) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards4.length} flashcards for ${topic4.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Exponential and Logarithmic Functions (Part 2)!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards3.length + flashcards4.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
