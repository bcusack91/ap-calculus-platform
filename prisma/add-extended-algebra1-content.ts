import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding extended Algebra 1 content...')

  const algebra1Course = await prisma.course.findUnique({
    where: { slug: 'algebra-1' }
  })

  if (!algebra1Course) {
    throw new Error('Algebra 1 course not found')
  }

  // Get existing categories
  const linearEq = await prisma.category.findUnique({
    where: { slug: 'algebra1-linear-equations' }
  })
  
  const systems = await prisma.category.findUnique({
    where: { slug: 'algebra1-systems' }
  })

  const statistics = await prisma.category.findUnique({
    where: { slug: 'algebra1-statistics' }
  })

  const functions = await prisma.category.findUnique({
    where: { slug: 'algebra1-functions' }
  })

  const ratios = await prisma.category.findUnique({
    where: { slug: 'algebra1-ratios-proportions' }
  })

  // Topic: Scatter Plots and Trend Lines
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'scatter-plots-algebra1' },
    update: {},
    create: {
      slug: 'scatter-plots-algebra1',
      title: 'Scatter Plots and Correlations',
      description: 'Analyzing scatter plots and identifying correlations',
      order: 2,
      categoryId: statistics!.id,
      textContent: `# Scatter Plots and Correlations

## What is a Scatter Plot?

A **scatter plot** displays the relationship between two quantitative variables.
- Each point represents one data pair $(x, y)$
- Used to identify patterns and trends

## Types of Correlation

**Positive Correlation:**
- As $x$ increases, $y$ increases
- Points slope upward from left to right
- Example: Height vs. Weight

**Negative Correlation:**
- As $x$ increases, $y$ decreases
- Points slope downward from left to right
- Example: Hours of TV vs. Test Scores

**No Correlation:**
- No clear pattern
- Points are randomly scattered
- Example: Shoe size vs. IQ

## Strength of Correlation

**Strong:** Points are tightly clustered around a line
**Weak:** Points are loosely scattered
**Moderate:** Between strong and weak

## Line of Best Fit

A **trend line** that best represents the data pattern.

The line minimizes the distance from all points.

**Equation form:** $y = mx + b$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic1.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'A scatter plot shows hours studied vs. test scores. As hours increase, scores increase. What type of correlation is this?',
        solution: `When one variable increases and the other also increases, we have a **positive correlation**.

The points would slope upward from left to right.

**Answer:** Positive correlation`
      },
      {
        topicId: topic1.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A trend line for temperature (°F) vs. ice cream sales has the equation $y = 50x - 1000$. Predict sales when temperature is 80°F.',
        solution: `Substitute $x = 80$ into the equation:

$$y = 50(80) - 1000$$
$$y = 4000 - 1000$$
$$y = 3000$$

**Answer:** Predicted sales: \\$3,000`
      },
      {
        topicId: topic1.id,
        order: 3,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Describe the correlation: As outdoor temperature increases, heating bills decrease.',
        solution: `One variable (temperature) **increases** while the other (heating bills) **decreases**.

This is a **negative correlation**.

The relationship makes sense: warmer weather means less heating needed!

**Answer:** Negative correlation`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic1.id, front: 'What does positive correlation mean?', back: 'As x increases, y also increases' },
      { topicId: topic1.id, front: 'What is a scatter plot?', back: 'A graph showing the relationship between two variables' },
      { topicId: topic1.id, front: 'What is a line of best fit?', back: 'A trend line that best represents the pattern in a scatter plot' }
    ]
  })

  console.log('✓ Created topic: Scatter Plots and Correlations (3 examples, 3 flashcards)')

  // Topic: Basic Probability
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'probability-basics-algebra1' },
    update: {},
    create: {
      slug: 'probability-basics-algebra1',
      title: 'Introduction to Probability',
      description: 'Basic probability concepts and calculations',
      order: 3,
      categoryId: statistics!.id,
      textContent: `# Introduction to Probability

## What is Probability?

**Probability** measures how likely an event is to occur.

$$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of possible outcomes}}$$

## Probability Range

Probability is always between 0 and 1 (or 0% and 100%):
- $P = 0$: **Impossible** event
- $P = 0.5$: **Equally likely** to happen or not
- $P = 1$: **Certain** event

## Complementary Events

The **complement** of event $A$ is "not $A$":
$$P(\\text{not } A) = 1 - P(A)$$

**Example:** If $P(\\text{rain}) = 0.3$, then $P(\\text{no rain}) = 1 - 0.3 = 0.7$

## Independent Events

Events are **independent** if one doesn't affect the other.

**Multiplication Rule:**
$$P(A \\text{ and } B) = P(A) \\times P(B)$$

**Example:** Flipping a coin twice:
$$P(\\text{heads, heads}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

## Mutually Exclusive Events

Events that **cannot both happen** at the same time.

**Addition Rule:**
$$P(A \\text{ or } B) = P(A) + P(B)$$`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic2.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'What is the probability of rolling a 4 on a standard die?',
        solution: `A standard die has 6 sides: 1, 2, 3, 4, 5, 6

**Favorable outcomes:** 1 (rolling a 4)
**Total outcomes:** 6

$$P(4) = \\frac{1}{6}$$

**Answer:** $\\frac{1}{6}$ or about 16.7%`
      },
      {
        topicId: topic2.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A bag contains 5 red marbles and 3 blue marbles. What is the probability of drawing a red marble?',
        solution: `**Total marbles:** $5 + 3 = 8$
**Red marbles:** $5$

$$P(\\text{red}) = \\frac{\\text{number of red}}{\\text{total}} = \\frac{5}{8}$$

**Answer:** $\\frac{5}{8}$ or 62.5%`
      },
      {
        topicId: topic2.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'You flip a coin and roll a die. What is the probability of getting heads AND rolling a number greater than 4?',
        solution: `These are **independent events**.

**Step 1:** Find $P(\\text{heads})$
$$P(\\text{heads}) = \\frac{1}{2}$$

**Step 2:** Find $P(\\text{greater than 4})$
Numbers greater than 4: {5, 6} → 2 outcomes out of 6
$$P(>4) = \\frac{2}{6} = \\frac{1}{3}$$

**Step 3:** Multiply (independent events)
$$P(\\text{heads and } >4) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$

**Answer:** $\\frac{1}{6}$ or about 16.7%`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic2.id, front: 'What is the formula for probability?', back: '$P = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$' },
      { topicId: topic2.id, front: 'If $P(A) = 0.4$, what is $P(\\text{not } A)$?', back: '$0.6$ (complement: $1 - 0.4$)' },
      { topicId: topic2.id, front: 'How do you find probability of two independent events both happening?', back: 'Multiply their probabilities' }
    ]
  })

  console.log('✓ Created topic: Introduction to Probability (3 examples, 3 flashcards)')

  // Topic: Sequences (Arithmetic)
  const topic3 = await prisma.topic.upsert({
    where: { slug: 'arithmetic-sequences-algebra1' },
    update: {},
    create: {
      slug: 'arithmetic-sequences-algebra1',
      title: 'Arithmetic Sequences',
      description: 'Patterns and formulas for arithmetic sequences',
      order: 3,
      categoryId: functions!.id,
      textContent: `# Arithmetic Sequences

## What is a Sequence?

A **sequence** is an ordered list of numbers.

**Example:** $2, 5, 8, 11, 14, ...$

Each number is called a **term**.

## Arithmetic Sequence

An **arithmetic sequence** has a **common difference** ($d$) between consecutive terms.

**Example:** $3, 7, 11, 15, 19, ...$
- Common difference: $d = 4$

## Finding the Common Difference

$$d = a_2 - a_1 = a_3 - a_2 = ...$$

Subtract any term from the next term.

## Explicit Formula

To find the $n$th term:
$$a_n = a_1 + (n - 1)d$$

where:
- $a_n$ = nth term
- $a_1$ = first term
- $d$ = common difference
- $n$ = term number

## Recursive Formula

$$a_n = a_{n-1} + d$$

Each term equals the previous term plus $d$.`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic3.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Find the common difference: $5, 9, 13, 17, ...$',
        solution: `Subtract consecutive terms:

$$d = 9 - 5 = 4$$

Check: $13 - 9 = 4$ ✓

**Answer:** Common difference = $4$`
      },
      {
        topicId: topic3.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Find the 10th term of the sequence: $3, 7, 11, 15, ...$',
        solution: `**Step 1:** Identify $a_1$ and $d$
$$a_1 = 3, \\quad d = 7 - 3 = 4$$

**Step 2:** Use the explicit formula
$$a_n = a_1 + (n - 1)d$$

**Step 3:** Substitute $n = 10$
$$a_{10} = 3 + (10 - 1)(4)$$
$$= 3 + 9(4)$$
$$= 3 + 36$$
$$= 39$$

**Answer:** $a_{10} = 39$`
      },
      {
        topicId: topic3.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'The 5th term of an arithmetic sequence is 23 and the common difference is 4. Find the first term.',
        solution: `Use the formula: $a_n = a_1 + (n - 1)d$

**Given:** $a_5 = 23$, $d = 4$, $n = 5$

Substitute:
$$23 = a_1 + (5 - 1)(4)$$
$$23 = a_1 + 16$$

Solve for $a_1$:
$$a_1 = 23 - 16 = 7$$

**Check:** If $a_1 = 7$ and $d = 4$:
$7, 11, 15, 19, 23$ ✓

**Answer:** $a_1 = 7$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic3.id, front: 'What is an arithmetic sequence?', back: 'A sequence with a constant difference between consecutive terms' },
      { topicId: topic3.id, front: 'What is the explicit formula for arithmetic sequences?', back: '$a_n = a_1 + (n-1)d$' },
      { topicId: topic3.id, front: 'Find the next term: 2, 5, 8, 11, ...', back: '14 (add common difference of 3)' }
    ]
  })

  console.log('✓ Created topic: Arithmetic Sequences (3 examples, 3 flashcards)')

  // Topic: Linear Inequalities Word Problems
  const topic4 = await prisma.topic.upsert({
    where: { slug: 'inequality-word-problems-algebra1' },
    update: {},
    create: {
      slug: 'inequality-word-problems-algebra1',
      title: 'Inequality Word Problems',
      description: 'Real-world problems using inequalities',
      order: 7,
      categoryId: linearEq!.id,
      textContent: `# Inequality Word Problems

## Key Phrases for Inequalities

| Phrase | Symbol |
|--------|--------|
| "at least", "minimum", "no less than" | $\\geq$ |
| "at most", "maximum", "no more than" | $\\leq$ |
| "more than", "greater than" | $>$ |
| "less than", "fewer than" | $<$ |

## Strategy

1. **Define** a variable
2. **Write** an inequality from the problem
3. **Solve** the inequality
4. **Check** if the answer makes sense in context

## Common Scenarios

**Budget problems:** Total cost ≤ available money

**Grade problems:** Average score ≥ desired grade

**Capacity problems:** Number of people ≤ maximum capacity

## Interpreting Solutions

Remember to consider **realistic constraints**:
- Can't have negative people
- Can't work negative hours
- Round to whole numbers when appropriate`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic4.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'Sarah wants to buy notebooks that cost \\$3 each. She has \\$20. What is the maximum number of notebooks she can buy?',
        solution: `Let $n$ = number of notebooks

The cost must be **at most** \\$20:
$$3n \\leq 20$$

Divide by 3:
$$n \\leq \\frac{20}{3} \\approx 6.67$$

Since she can't buy a fraction of a notebook:
$$n \\leq 6$$

**Answer:** Maximum of 6 notebooks`
      },
      {
        topicId: topic4.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'A taxi charges \\$5 plus \\$2 per mile. You have \\$25. What is the maximum distance you can travel?',
        solution: `Let $m$ = miles traveled

**Total cost:** $5 + 2m$

This must be at most \\$25:
$$5 + 2m \\leq 25$$

Subtract 5:
$$2m \\leq 20$$

Divide by 2:
$$m \\leq 10$$

**Answer:** Maximum distance is 10 miles`
      },
      {
        topicId: topic4.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'Maria scored 85, 92, and 88 on her first three tests. What must she score on the fourth test to have an average of at least 90?',
        solution: `Let $x$ = score on fourth test

**Average formula:**
$$\\frac{85 + 92 + 88 + x}{4} \\geq 90$$

Multiply both sides by 4:
$$85 + 92 + 88 + x \\geq 360$$
$$265 + x \\geq 360$$

Subtract 265:
$$x \\geq 95$$

**Answer:** She must score at least 95 on the fourth test`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic4.id, front: 'What symbol means "at least"?', back: '$\\geq$ (greater than or equal to)' },
      { topicId: topic4.id, front: 'What symbol means "at most"?', back: '$\\leq$ (less than or equal to)' },
      { topicId: topic4.id, front: 'What does "no more than 5" mean?', back: '$\\leq 5$ (at most 5)' }
    ]
  })

  console.log('✓ Created topic: Inequality Word Problems (3 examples, 3 flashcards)')

  // Topic: Systems Word Problems
  const topic5 = await prisma.topic.upsert({
    where: { slug: 'systems-word-problems-algebra1' },
    update: {},
    create: {
      slug: 'systems-word-problems-algebra1',
      title: 'Systems of Equations Word Problems',
      description: 'Real-world applications of systems',
      order: 3,
      categoryId: systems!.id,
      textContent: `# Systems Word Problems

## When to Use Systems

Use a system of equations when you have:
- **Two unknowns**
- **Two conditions** (pieces of information)

## Common Types

**Mixture Problems:** Combining items with different values

**Rate Problems:** Distance = Rate × Time

**Age Problems:** Current ages vs. future/past ages

**Money Problems:** Different coins or bills

## Strategy

1. **Define** two variables
2. **Write** two equations from the problem
3. **Solve** using substitution or elimination
4. **Check** your answer in context

## Setting Up Equations

Read carefully for relationships like:
- "The sum is..."
- "One is twice the other..."
- "Together they..."`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic5.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: 'The sum of two numbers is 25. Their difference is 7. Find the numbers.',
        solution: `Let $x$ = larger number, $y$ = smaller number

**Equation 1 (sum):**
$$x + y = 25$$

**Equation 2 (difference):**
$$x - y = 7$$

**Add the equations:**
$$2x = 32$$
$$x = 16$$

**Substitute into equation 1:**
$$16 + y = 25$$
$$y = 9$$

**Check:** $16 + 9 = 25$ ✓ and $16 - 9 = 7$ ✓

**Answer:** The numbers are 16 and 9`
      },
      {
        topicId: topic5.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: 'Adult tickets cost \\$12 and child tickets cost \\$8. A family bought 7 tickets for \\$76. How many of each did they buy?',
        solution: `Let $a$ = adult tickets, $c$ = child tickets

**Equation 1 (total tickets):**
$$a + c = 7$$

**Equation 2 (total cost):**
$$12a + 8c = 76$$

**From equation 1:** $c = 7 - a$

**Substitute into equation 2:**
$$12a + 8(7 - a) = 76$$
$$12a + 56 - 8a = 76$$
$$4a = 20$$
$$a = 5$$

**Find c:**
$$c = 7 - 5 = 2$$

**Check:** $5 + 2 = 7$ ✓ and $12(5) + 8(2) = 60 + 16 = 76$ ✓

**Answer:** 5 adult tickets and 2 child tickets`
      },
      {
        topicId: topic5.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: 'A store sells nuts. Cashews cost \\$8/lb and peanuts cost \\$5/lb. How many pounds of each should be mixed to make 10 pounds of mix worth \\$62?',
        solution: `Let $c$ = pounds of cashews, $p$ = pounds of peanuts

**Equation 1 (total weight):**
$$c + p = 10$$

**Equation 2 (total value):**
$$8c + 5p = 62$$

**From equation 1:** $p = 10 - c$

**Substitute:**
$$8c + 5(10 - c) = 62$$
$$8c + 50 - 5c = 62$$
$$3c = 12$$
$$c = 4$$

**Find p:**
$$p = 10 - 4 = 6$$

**Check:** $4 + 6 = 10$ ✓ and $8(4) + 5(6) = 32 + 30 = 62$ ✓

**Answer:** 4 pounds of cashews and 6 pounds of peanuts`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic5.id, front: 'When should you use a system of equations?', back: 'When you have two unknowns and two pieces of information' },
      { topicId: topic5.id, front: 'What are the two main methods for solving systems?', back: 'Substitution and elimination' },
      { topicId: topic5.id, front: 'In mixture problems, what do you typically set equal?', back: 'Total weight/amount AND total value' }
    ]
  })

  console.log('✓ Created topic: Systems Word Problems (3 examples, 3 flashcards)')

  // Topic: Direct and Inverse Variation
  const topic6 = await prisma.topic.upsert({
    where: { slug: 'variation-algebra1' },
    update: {},
    create: {
      slug: 'variation-algebra1',
      title: 'Direct and Inverse Variation',
      description: 'Relationships between varying quantities',
      order: 4,
      categoryId: ratios!.id,
      textContent: `# Direct and Inverse Variation

## Direct Variation

$y$ **varies directly** with $x$ if:
$$y = kx$$

where $k$ is the **constant of variation**.

**Characteristics:**
- When $x$ doubles, $y$ doubles
- When $x$ triples, $y$ triples
- Graph passes through the origin
- Graph is a straight line

**Example:** If $y = 6$ when $x = 2$:
$$6 = k(2)$$ → $k = 3$
So $y = 3x$

## Inverse Variation

$y$ **varies inversely** with $x$ if:
$$y = \\frac{k}{x}$$ or $xy = k$

**Characteristics:**
- When $x$ doubles, $y$ is halved
- When $x$ increases, $y$ decreases
- Graph is a hyperbola

**Example:** If $y = 8$ when $x = 3$:
$$8 = \\frac{k}{3}$$ → $k = 24$
So $y = \\frac{24}{x}$

## Real-World Examples

**Direct:** Distance and time (at constant speed)
**Inverse:** Speed and time (for fixed distance)`,
      isPremium: false
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: topic6.id,
        order: 1,
        difficulty: 'EASY' as Difficulty,
        question: '$y$ varies directly with $x$, and $y = 12$ when $x = 4$. Find the constant of variation.',
        solution: `For direct variation: $y = kx$

Substitute the given values:
$$12 = k(4)$$

Divide by 4:
$$k = 3$$

**Answer:** The constant of variation is $k = 3$`
      },
      {
        topicId: topic6.id,
        order: 2,
        difficulty: 'MEDIUM' as Difficulty,
        question: '$y$ varies directly with $x$, and $y = 15$ when $x = 5$. Find $y$ when $x = 8$.',
        solution: `**Step 1:** Find $k$
$$15 = k(5)$$
$$k = 3$$

**Step 2:** Write the equation
$$y = 3x$$

**Step 3:** Find $y$ when $x = 8$
$$y = 3(8) = 24$$

**Answer:** $y = 24$`
      },
      {
        topicId: topic6.id,
        order: 3,
        difficulty: 'HARD' as Difficulty,
        question: '$y$ varies inversely with $x$, and $y = 6$ when $x = 4$. Find $y$ when $x = 8$.',
        solution: `**Step 1:** Find $k$ using $y = \\frac{k}{x}$
$$6 = \\frac{k}{4}$$
$$k = 24$$

**Step 2:** Write the equation
$$y = \\frac{24}{x}$$

**Step 3:** Find $y$ when $x = 8$
$$y = \\frac{24}{8} = 3$$

**Note:** When $x$ doubled from 4 to 8, $y$ was halved from 6 to 3 ✓

**Answer:** $y = 3$`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: topic6.id, front: 'What is the equation for direct variation?', back: '$y = kx$ (y varies directly with x)' },
      { topicId: topic6.id, front: 'What is the equation for inverse variation?', back: '$y = \\frac{k}{x}$ or $xy = k$' },
      { topicId: topic6.id, front: 'In inverse variation, if x doubles, what happens to y?', back: 'y is halved (cut in half)' }
    ]
  })

  console.log('✓ Created topic: Direct and Inverse Variation (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully added extended Algebra 1 content!')
  console.log('   New topics: 6')
  console.log('   Total example problems added: 18')
  console.log('   Total flashcards added: 18')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
