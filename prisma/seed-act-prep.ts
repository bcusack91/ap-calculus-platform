import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating ACT Prep content...')

  const act = await prisma.course.findUnique({
    where: { slug: 'act-prep' }
  })

  if (!act) {
    throw new Error('ACT Prep course not found')
  }

  // Category 1: ACT Math
  const actMath = await prisma.category.upsert({
    where: { slug: 'act-math' },
    update: {},
    create: {
      slug: 'act-math',
      name: 'ACT Math',
      order: 1,
      courseId: act.id
    }
  })

  // Topic 1: Pre-Algebra and Elementary Algebra
  const preAlgebra = await prisma.topic.upsert({
    where: { slug: 'act-pre-algebra-elementary' },
    update: {},
    create: {
      slug: 'act-pre-algebra-elementary',
      title: 'Pre-Algebra and Elementary Algebra',
      description: 'Master basic operations, fractions, decimals, and simple equations for ACT',
      order: 1,
      categoryId: actMath.id,
      isPremium: false,
      textContent: `
# Pre-Algebra and Elementary Algebra (ACT)

## Number Operations

### Order of Operations (PEMDAS)
**Example:** $3 + 4 \\times 2^2$

1. Exponents: $2^2 = 4$
2. Multiply: $4 \\times 4 = 16$
3. Add: $3 + 16 = 19$

### Fractions and Decimals
- Adding fractions: Find common denominator
- Converting: $0.25 = \\frac{1}{4}$
- Percent to decimal: $15\\% = 0.15$

## Simple Equations

**One-step:**
$$x + 7 = 12 \\quad \\Rightarrow \\quad x = 5$$

**Two-step:**
$$3x - 5 = 10 \\quad \\Rightarrow \\quad 3x = 15 \\quad \\Rightarrow \\quad x = 5$$

## Word Problems

**Strategy:**
1. Identify the unknown (let $x$ = ...)
2. Write an equation
3. Solve
4. Check if answer makes sense

**Example:** "Five more than twice a number is 17"
$$2x + 5 = 17 \\quad \\Rightarrow \\quad x = 6$$

## ACT Tips

- **Calculator allowed!** Use it for complex arithmetic
- **Work backwards:** Plug answer choices into equations
- **Estimate:** Eliminate unreasonable answers
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: preAlgebra.id,
        order: 1,
        difficulty: 'EASY',
        question: 'What is $\\frac{2}{3} + \\frac{1}{6}$?',
        solution: `
**Solution:**

Find common denominator (6):
$$\\frac{2}{3} = \\frac{4}{6}$$

Add:
$$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$$

**Answer:** $\\frac{5}{6}$
`
      },
      {
        topicId: preAlgebra.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'If $5x - 3 = 22$, what is $x$?',
        solution: `
**Solution:**

Add 3 to both sides:
$$5x = 25$$

Divide by 5:
$$x = 5$$

**Answer:** $x = 5$

**ACT Tip:** Always check: $5(5) - 3 = 25 - 3 = 22$ ✓
`
      },
      {
        topicId: preAlgebra.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A shirt originally costs $\\$40$. It is on sale for 25% off. What is the sale price?',
        solution: `
**Solution:**

Calculate discount:
$$0.25 \\times 40 = 10$$

Subtract from original:
$$40 - 10 = 30$$

**Or use multiplier:**
$$40 \\times (1 - 0.25) = 40 \\times 0.75 = 30$$

**Answer:** $\\$30$
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: preAlgebra.id,
        front: 'What does PEMDAS stand for?',
        back: 'Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)'
      },
      {
        topicId: preAlgebra.id,
        front: 'ACT Math Strategy: What should you do if solving seems complicated?',
        back: 'Plug in answer choices (work backwards) or estimate and eliminate'
      },
      {
        topicId: preAlgebra.id,
        front: 'How do you convert a percent to a decimal?',
        back: 'Move decimal point two places left (25% = 0.25)'
      }
    ]
  })

  console.log('✓ Created topic: Pre-Algebra and Elementary Algebra (3 examples, 3 flashcards)')

  // Category 2: ACT English
  const actEnglish = await prisma.category.upsert({
    where: { slug: 'act-english' },
    update: {},
    create: {
      slug: 'act-english',
      name: 'ACT English',
      order: 2,
      courseId: act.id
    }
  })

  // Topic 2: Usage and Mechanics
  const usageMechanics = await prisma.topic.upsert({
    where: { slug: 'act-usage-mechanics' },
    update: {},
    create: {
      slug: 'act-usage-mechanics',
      title: 'Usage and Mechanics',
      description: 'Grammar, punctuation, and sentence structure for ACT English',
      order: 1,
      categoryId: actEnglish.id,
      isPremium: false,
      textContent: `
# Usage and Mechanics (ACT English)

## Grammar and Usage

### Subject-Verb Agreement
**Rule:** Singular subjects use singular verbs, plural use plural.

❌ "The box of cookies **are** here"
✓ "The box of cookies **is** here" (subject is "box")

### Pronoun-Antecedent Agreement
**Rule:** Pronouns must match their antecedent in number.

❌ "Each student must bring **their** book"
✓ "Each student must bring **his or her** book"
✓ "Students must bring **their** books"

## Punctuation

### Commas
**Use for:**
- Lists: "apples, oranges, and bananas"
- Before FANBOYS with two complete sentences: "I ran, **and** she walked"
- After introductory phrases: "After the game**,** we left"

### Semicolons
**Use to join two independent clauses:**
"I love reading**;** she prefers movies"

## Sentence Structure

### Run-on Sentences
❌ "I studied I passed" → needs punctuation/conjunction
✓ "I studied, and I passed"
✓ "I studied; I passed"
✓ "I studied. I passed"

### Fragments
❌ "Because I was tired." → incomplete thought
✓ "I left early because I was tired."

## ACT Tips

- **"No change" is often right!** Don't overthink
- **Shorter is usually better** (if grammatically correct)
- **Trust your ear** but verify with rules
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: usageMechanics.id,
        order: 1,
        difficulty: 'EASY',
        question: 'Which is correct?\n\nA) Each of the students have a book.\nB) Each of the students has a book.',
        solution: `
**Solution:**

"Each" is the subject (singular).
"Of the students" is a prepositional phrase.

Singular subject needs singular verb: **has**

**Answer:** B - Each of the students has a book.

**ACT Tip:** Ignore words between subject and verb when checking agreement!
`
      },
      {
        topicId: usageMechanics.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'Which is correct?\n\nA) I enjoy reading, my sister likes sports.\nB) I enjoy reading; my sister likes sports.\nC) I enjoy reading my sister likes sports.',
        solution: `
**Solution:**

Two independent clauses (complete sentences):
- "I enjoy reading"
- "My sister likes sports"

**Cannot use:**
- C: No punctuation (run-on)
- A: Comma alone (comma splice)

**Must use:**
- Semicolon, period, or comma + conjunction

**Answer:** B - I enjoy reading; my sister likes sports.
`
      },
      {
        topicId: usageMechanics.id,
        order: 3,
        difficulty: 'HARD',
        question: 'Which is the BEST revision?\n\nOriginal: "The team, which practiced every day, they won the championship."\n\nA) NO CHANGE\nB) The team, which practiced every day, won the championship.\nC) The team which practiced every day, they won the championship.',
        solution: `
**Solution:**

The original has **two subjects**: "team" AND "they"

This creates awkward redundancy.

**Fix:** Remove "they"

**A:** Keeps the error
**B:** Removes "they" ✓
**C:** Missing commas around non-essential clause AND keeps "they"

**Answer:** B

**ACT Tip:** Avoid redundant subjects!
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: usageMechanics.id,
        front: 'What is a comma splice?',
        back: 'Using only a comma to join two complete sentences (incorrect! Use semicolon, period, or comma + conjunction)'
      },
      {
        topicId: usageMechanics.id,
        front: 'ACT English: When in doubt between answer choices, which should you pick?',
        back: 'The shorter one (if grammatically correct) - ACT prefers concise writing'
      },
      {
        topicId: usageMechanics.id,
        front: 'What is wrong with "The team they won"?',
        back: 'Redundant subjects (team = they). Remove one: "The team won"'
      }
    ]
  })

  console.log('✓ Created topic: Usage and Mechanics (3 examples, 3 flashcards)')

  // Category 3: ACT Science
  const actScience = await prisma.category.upsert({
    where: { slug: 'act-science' },
    update: {},
    create: {
      slug: 'act-science',
      name: 'ACT Science',
      order: 3,
      courseId: act.id
    }
  })

  // Topic 3: Data Representation
  const dataRepresentation = await prisma.topic.upsert({
    where: { slug: 'act-data-representation' },
    update: {},
    create: {
      slug: 'act-data-representation',
      title: 'Data Representation',
      description: 'Read and interpret graphs, tables, and charts on ACT Science',
      order: 1,
      categoryId: actScience.id,
      isPremium: false,
      textContent: `
# Data Representation (ACT Science)

## What is ACT Science?

**Not a test of science knowledge!** It tests your ability to:
- Read graphs and tables
- Identify trends
- Compare data
- Draw conclusions

## Types of Data Presentations

### 1. Graphs
- **Line graphs:** Show trends over time
- **Bar graphs:** Compare categories
- **Scatter plots:** Show relationships

### 2. Tables
- Organized rows and columns
- Look at headers to understand what data represents

### 3. Diagrams
- Show experimental setup
- Illustrate processes

## Reading Graphs

### Step 1: Read the Labels
- **Title:** What is being measured?
- **X-axis:** Independent variable (what changes)
- **Y-axis:** Dependent variable (what's measured)
- **Units:** Pay attention! (meters, seconds, °C)

### Step 2: Identify the Trend
- Increasing? Decreasing? Constant?
- Direct relationship? Inverse relationship?

### Step 3: Find Specific Values
- Trace from axis to data point
- Interpolate (between points) or extrapolate (beyond graph)

## Common Question Types

**1. Direct lookup:** "What was the temperature at 5 minutes?"
**2. Trend identification:** "As time increases, temperature..."
**3. Comparison:** "Which trial had the highest value?"
**4. Prediction:** "Based on the trend, what would happen at 10 minutes?"

## ACT Tips

- **Skim passage first** - know what you're looking for
- **Use the figures** - answers are in the data, not your knowledge
- **Watch units!** Convert if needed
- **Eliminate wrong answers** - often obvious
`
    }
  })

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: dataRepresentation.id,
        order: 1,
        difficulty: 'EASY',
        question: 'When reading a line graph, what does the x-axis typically represent?',
        solution: `
**Solution:**

The **x-axis** (horizontal) typically shows the **independent variable** - the variable that is controlled or changes.

**Examples:**
- Time (in experiments over time)
- Temperature (when testing at different temps)
- Distance (when measuring across space)

**Answer:** The independent variable (what is being changed/controlled)

**ACT Tip:** Always read axis labels carefully!
`
      },
      {
        topicId: dataRepresentation.id,
        order: 2,
        difficulty: 'MEDIUM',
        question: 'A graph shows temperature increasing from 0°C to 100°C while pressure increases from 1 atm to 5 atm. What is the relationship?',
        solution: `
**Solution:**

Both variables increase together.

**This is a direct (positive) relationship:**
- As temperature ↑, pressure ↑
- As temperature ↓, pressure ↓

**Inverse relationship would be:**
- As one ↑, the other ↓

**Answer:** Direct (positive) relationship

**ACT Tip:** Identify if both increase together (direct) or move opposite (inverse)
`
      },
      {
        topicId: dataRepresentation.id,
        order: 3,
        difficulty: 'HARD',
        question: 'A table shows data at 10°C, 20°C, and 30°C. A question asks about 25°C. What should you do?',
        solution: `
**Solution:**

25°C is **between** 20°C and 30°C but not in the table.

This requires **interpolation** (estimating between known values).

**Strategy:**
1. Find the two closest values (20°C and 30°C)
2. Estimate the midpoint between their results
3. 25°C is halfway between, so pick middle value

**Answer:** Interpolate between the two closest data points

**ACT Tip:** Interpolate = between points; Extrapolate = beyond the data
`
      }
    ]
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dataRepresentation.id,
        front: 'What does ACT Science actually test?',
        back: 'Reading graphs/tables, identifying trends, and interpreting data - NOT science knowledge!'
      },
      {
        topicId: dataRepresentation.id,
        front: 'What is a direct relationship in a graph?',
        back: 'Both variables move in the same direction (both increase or both decrease together)'
      },
      {
        topicId: dataRepresentation.id,
        front: 'What is the difference between interpolate and extrapolate?',
        back: 'Interpolate = estimate BETWEEN known data points; Extrapolate = estimate BEYOND the data'
      }
    ]
  })

  console.log('✓ Created topic: Data Representation (3 examples, 3 flashcards)')

  console.log('\n✅ Successfully created ACT Prep content!')
  console.log('   New categories: 3 (Math, English, Science)')
  console.log('   New topics: 3')
  console.log('   Total example problems added: 9')
  console.log('   Total flashcards added: 9')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
