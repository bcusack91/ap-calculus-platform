import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Precalculus - Exponential and Logarithmic Functions (Part 1)...')

  const category = await prisma.category.findUnique({
    where: { slug: 'exponential-logarithmic-functions' }
  })

  if (!category) {
    throw new Error('Category not found. Please run seed-precalculus-categories.ts first.')
  }

  // Topic 1: Exponential Functions and Growth/Decay
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'exponential-functions-growth-decay' },
    update: {},
    create: {
      title: 'Exponential Functions and Growth/Decay',
      slug: 'exponential-functions-growth-decay',
      description: 'Understanding exponential functions, exponential growth, and exponential decay models',
      order: 1,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Exponential Functions and Growth/Decay

## What is an Exponential Function?

An **exponential function** is a function of the form:

$$f(x) = ab^x$$

where:
- $a$ is the **initial value** (when $x = 0$)
- $b$ is the **base** (must be positive and $b \\neq 1$)
- $x$ is the **exponent** (the variable)

**Key Property**: The variable is in the exponent, not the base!

## Basic Exponential Functions

The parent function is $f(x) = b^x$ where $b > 0$ and $b \\neq 1$.

### Two Cases:

1. **Exponential Growth** when $b > 1$
   - Example: $f(x) = 2^x$
   - The function increases as $x$ increases
   - Rises steeply to the right

2. **Exponential Decay** when $0 < b < 1$
   - Example: $f(x) = \\left(\\frac{1}{2}\\right)^x$
   - The function decreases as $x$ increases
   - Approaches zero but never reaches it

## Properties of Exponential Functions

For $f(x) = ab^x$ where $a > 0$ and $b > 0, b \\neq 1$:

1. **Domain**: All real numbers $(-\\infty, \\infty)$
2. **Range**: $(0, \\infty)$ if $a > 0$, or $(-\\infty, 0)$ if $a < 0$
3. **y-intercept**: $(0, a)$ since $f(0) = ab^0 = a$
4. **Horizontal Asymptote**: $y = 0$ (the x-axis)
5. **Always positive** (if $a > 0$) - never crosses the x-axis

## Exponential Growth and Decay Models

### Growth Model
$$A(t) = A_0(1 + r)^t$$

where:
- $A(t)$ = amount after time $t$
- $A_0$ = initial amount
- $r$ = growth rate (as a decimal)
- $t$ = time

### Decay Model
$$A(t) = A_0(1 - r)^t$$

where:
- $r$ = decay rate (as a decimal)

### Continuous Compounding
$$A(t) = A_0 e^{rt}$$

where $e \\approx 2.71828$ (Euler's number)

## Key Patterns

- **Doubling**: If something doubles, multiply by 2
- **Tripling**: If something triples, multiply by 3
- **Half-life**: If something halves, multiply by $\\frac{1}{2}$
- **Growth by 5%**: Multiply by $(1 + 0.05) = 1.05$
- **Decay by 5%**: Multiply by $(1 - 0.05) = 0.95$

## Transformations

Just like other functions, exponential functions can be transformed:

- $f(x) = ab^x + k$: vertical shift by $k$
- $f(x) = ab^{x-h}$: horizontal shift by $h$
- $f(x) = -ab^x$: reflection over x-axis
`,
      exampleProblems: {
        create: [
          {
            question: 'A population of bacteria starts with 200 bacteria and doubles every 3 hours. Write an exponential function to model the population after $t$ hours.',
            solution: `**Solution:**

Step 1: Identify the initial value and growth pattern.
- Initial population: $A_0 = 200$
- The population doubles every 3 hours

Step 2: Determine the base for doubling every 3 hours.

Since it doubles every 3 hours, after 3 hours we have $2 \\times 200 = 400$.

We need to find $b$ such that $200b^3 = 400$.

$$b^3 = 2$$
$$b = 2^{1/3} = \\sqrt[3]{2}$$

Step 3: Write the function.

$$A(t) = 200 \\cdot 2^{t/3}$$

OR equivalently:
$$A(t) = 200 \\cdot (\\sqrt[3]{2})^t$$

Step 4: Verify.
- At $t = 0$: $A(0) = 200 \\cdot 2^{0/3} = 200$ ✓
- At $t = 3$: $A(3) = 200 \\cdot 2^{3/3} = 200 \\cdot 2 = 400$ ✓
- At $t = 6$: $A(6) = 200 \\cdot 2^{6/3} = 200 \\cdot 4 = 800$ ✓

**Answer:** $A(t) = 200 \\cdot 2^{t/3}$ bacteria`,
            difficulty: 'MEDIUM',
            order: 1,
          },
          {
            question: 'A car purchased for \\$25,000 depreciates by 15% each year. What is the car worth after 5 years?',
            solution: `**Solution:**

Step 1: Identify the initial value and decay rate.
- Initial value: $A_0 = 25000$
- Decay rate: $r = 0.15$ (15%)

Step 2: Write the exponential decay model.

Since the car loses 15% each year, it retains 85% of its value:
$$A(t) = 25000(1 - 0.15)^t = 25000(0.85)^t$$

Step 3: Calculate the value after 5 years.

$$A(5) = 25000(0.85)^5$$
$$A(5) = 25000(0.4437...)$$
$$A(5) \\approx 11,092.63$$

**Answer:** The car is worth approximately **\\$11,093** after 5 years.`,
            difficulty: 'EASY',
            order: 2,
          },
          {
            question: 'Determine whether each function represents exponential growth or decay: (a) $f(x) = 5(1.2)^x$, (b) $g(x) = 3(0.8)^x$, (c) $h(x) = 2e^{-0.5x}$',
            solution: `**Solution:**

**Part a)** $f(x) = 5(1.2)^x$

Base: $b = 1.2 > 1$

Since the base is greater than 1, this represents **exponential growth**.

**Part b)** $g(x) = 3(0.8)^x$

Base: $b = 0.8 < 1$ (but $0.8 > 0$)

Since the base is between 0 and 1, this represents **exponential decay**.

**Part c)** $h(x) = 2e^{-0.5x}$

Rewrite: $h(x) = 2(e^{-0.5})^x$

The base is $e^{-0.5} \\approx 0.606 < 1$

Since the base is between 0 and 1, this represents **exponential decay**.

**Alternative approach for part c):** The negative exponent indicates decay.

**Answers:**
- a) Growth
- b) Decay  
- c) Decay`,
            difficulty: 'EASY',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What is the general form of an exponential function?',
      back: '$f(x) = ab^x$ where $a$ is the initial value and $b$ is the base',
    },
    {
      topicId: topic1.id,
      front: 'When does an exponential function represent growth vs. decay?',
      back: 'Growth when $b > 1$, Decay when $0 < b < 1$',
    },
    {
      topicId: topic1.id,
      front: 'What is the domain of an exponential function $f(x) = ab^x$?',
      back: 'All real numbers: $(-\\infty, \\infty)$',
    },
    {
      topicId: topic1.id,
      front: 'What is the range of $f(x) = ab^x$ when $a > 0$?',
      back: '$(0, \\infty)$ - all positive real numbers',
    },
    {
      topicId: topic1.id,
      front: 'What is the horizontal asymptote of $f(x) = ab^x$?',
      back: '$y = 0$ (the x-axis)',
    },
    {
      topicId: topic1.id,
      front: 'What is the exponential growth model formula?',
      back: '$A(t) = A_0(1 + r)^t$ where $A_0$ is initial amount, $r$ is growth rate, $t$ is time',
    },
    {
      topicId: topic1.id,
      front: 'If a quantity grows by 8% each year, what is the base $b$ in the exponential model?',
      back: '$b = 1.08$ (or $1 + 0.08$)',
    },
    {
      topicId: topic1.id,
      front: 'If a quantity decays by 20% each period, what is the base $b$?',
      back: '$b = 0.80$ (or $1 - 0.20$)',
    },
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Logarithmic Functions
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'logarithmic-functions' },
    update: {},
    create: {
      title: 'Logarithmic Functions',
      slug: 'logarithmic-functions',
      description: 'Understanding logarithms as inverse of exponentials, logarithmic properties, and solving logarithmic equations',
      order: 2,
      isPremium: false,
      categoryId: category.id,
      textContent: `# Logarithmic Functions

## What is a Logarithm?

A **logarithm** is the inverse operation of exponentiation. It answers the question:

> "To what power must we raise the base to get a certain number?"

### Definition

$$\\log_b(x) = y \\quad \\text{means} \\quad b^y = x$$

Read as: "log base $b$ of $x$ equals $y$"

**Example:** $\\log_2(8) = 3$ because $2^3 = 8$

## Common Logarithms

1. **Common logarithm** (base 10): $\\log(x) = \\log_{10}(x)$
2. **Natural logarithm** (base $e$): $\\ln(x) = \\log_e(x)$

## Converting Between Forms

| Exponential Form | Logarithmic Form |
|------------------|------------------|
| $2^3 = 8$ | $\\log_2(8) = 3$ |
| $10^2 = 100$ | $\\log(100) = 2$ |
| $e^x = 5$ | $\\ln(5) = x$ |
| $b^y = x$ | $\\log_b(x) = y$ |

## Properties of Logarithms

### Product Rule
$$\\log_b(MN) = \\log_b(M) + \\log_b(N)$$

The log of a product is the sum of the logs.

### Quotient Rule
$$\\log_b\\left(\\frac{M}{N}\\right) = \\log_b(M) - \\log_b(N)$$

The log of a quotient is the difference of the logs.

### Power Rule
$$\\log_b(M^p) = p \\cdot \\log_b(M)$$

The log of a power is the exponent times the log.

### Change of Base Formula
$$\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)} = \\frac{\\ln(x)}{\\ln(b)}$$

Useful for calculating logs with different bases on a calculator.

## Special Logarithm Values

1. $\\log_b(1) = 0$ because $b^0 = 1$
2. $\\log_b(b) = 1$ because $b^1 = b$
3. $\\log_b(b^x) = x$ (inverse property)
4. $b^{\\log_b(x)} = x$ (inverse property)

## Logarithmic Functions

The function $f(x) = \\log_b(x)$ has these properties:

- **Domain**: $(0, \\infty)$ (only positive numbers)
- **Range**: $(-\\infty, \\infty)$ (all real numbers)
- **Vertical Asymptote**: $x = 0$ (the y-axis)
- **x-intercept**: $(1, 0)$ since $\\log_b(1) = 0$
- **Always increasing** if $b > 1$
- **Always decreasing** if $0 < b < 1$

## Solving Logarithmic Equations

**Strategy 1**: Convert to exponential form

**Strategy 2**: Use logarithm properties to combine/simplify

**Strategy 3**: Check your answers (domain restrictions!)

## Important Note

⚠️ **You cannot take the log of a negative number or zero!**

The domain of $\\log_b(x)$ requires $x > 0$.
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate the following logarithms: (a) $\\log_3(27)$, (b) $\\log_5(\\frac{1}{25})$, (c) $\\log(10000)$',
            solution: `**Solution:**

**Part a)** $\\log_3(27)$

Ask: "3 raised to what power equals 27?"

$3^? = 27$
$3^3 = 27$

Therefore: $\\log_3(27) = 3$

**Part b)** $\\log_5\\left(\\frac{1}{25}\\right)$

Ask: "5 raised to what power equals $\\frac{1}{25}$?"

$5^? = \\frac{1}{25}$

We know $5^2 = 25$, so $5^{-2} = \\frac{1}{25}$

Therefore: $\\log_5\\left(\\frac{1}{25}\\right) = -2$

**Part c)** $\\log(10000)$ (base 10)

Ask: "10 raised to what power equals 10000?"

$10^? = 10000$
$10^4 = 10000$

Therefore: $\\log(10000) = 4$

**Answers:** (a) 3, (b) -2, (c) 4`,
            difficulty: 'EASY',
            order: 1,
          },
          {
            question: 'Expand using logarithm properties: $\\log_2\\left(\\frac{8x^3}{y^2}\\right)$',
            solution: `**Solution:**

Step 1: Apply the quotient rule.

$$\\log_2\\left(\\frac{8x^3}{y^2}\\right) = \\log_2(8x^3) - \\log_2(y^2)$$

Step 2: Apply the product rule to the first term.

$$= \\log_2(8) + \\log_2(x^3) - \\log_2(y^2)$$

Step 3: Apply the power rule.

$$= \\log_2(8) + 3\\log_2(x) - 2\\log_2(y)$$

Step 4: Simplify $\\log_2(8)$.

Since $2^3 = 8$, we have $\\log_2(8) = 3$

$$= 3 + 3\\log_2(x) - 2\\log_2(y)$$

**Answer:** $3 + 3\\log_2(x) - 2\\log_2(y)$`,
            difficulty: 'MEDIUM',
            order: 2,
          },
          {
            question: 'Solve for $x$: $\\log_4(x) = 3$',
            solution: `**Solution:**

Step 1: Convert from logarithmic form to exponential form.

$$\\log_4(x) = 3 \\quad \\Rightarrow \\quad 4^3 = x$$

Step 2: Evaluate.

$$x = 4^3 = 64$$

Step 3: Check (optional but recommended).

$$\\log_4(64) = \\log_4(4^3) = 3$$ ✓

**Answer:** $x = 64$`,
            difficulty: 'EASY',
            order: 3,
          },
        ],
      },
    },
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What does $\\log_b(x) = y$ mean in exponential form?',
      back: '$b^y = x$',
    },
    {
      topicId: topic2.id,
      front: 'What is $\\log_2(16)$?',
      back: '4 (because $2^4 = 16$)',
    },
    {
      topicId: topic2.id,
      front: 'What is the product rule for logarithms?',
      back: '$\\log_b(MN) = \\log_b(M) + \\log_b(N)$',
    },
    {
      topicId: topic2.id,
      front: 'What is the quotient rule for logarithms?',
      back: '$\\log_b(\\frac{M}{N}) = \\log_b(M) - \\log_b(N)$',
    },
    {
      topicId: topic2.id,
      front: 'What is the power rule for logarithms?',
      back: '$\\log_b(M^p) = p \\cdot \\log_b(M)$',
    },
    {
      topicId: topic2.id,
      front: 'What is $\\log_b(1)$ for any base $b$?',
      back: '0 (because $b^0 = 1$)',
    },
    {
      topicId: topic2.id,
      front: 'What is $\\log_b(b)$ for any base $b$?',
      back: '1 (because $b^1 = b$)',
    },
    {
      topicId: topic2.id,
      front: 'What is the domain of $f(x) = \\log_b(x)$?',
      back: '$(0, \\infty)$ - only positive numbers',
    },
    {
      topicId: topic2.id,
      front: 'What is the change of base formula?',
      back: '$\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}$ or $\\frac{\\log(x)}{\\log(b)}$',
    },
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard,
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Precalculus - Exponential and Logarithmic Functions (Part 1)!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards1.length + flashcards2.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
