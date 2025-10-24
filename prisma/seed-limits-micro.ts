import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Creating highly granular Limits and Continuity lessons...')

  // Find or create the Limits and Continuity category
  const category = await prisma.category.upsert({
    where: { slug: 'limits' },
    update: {},
    create: {
      slug: 'limits',
      name: 'Limits and Continuity',
      description: 'Understanding limits, continuity, and the foundations of calculus',
      order: 1,
      icon: '∞'
    }
  })

  // Delete existing topics to replace with more granular ones
  await prisma.topic.deleteMany({
    where: { categoryId: category.id }
  })

  // 1. What is a Limit? (Intuitive Understanding)
  const topic1 = await prisma.topic.create({
    data: {
      title: 'What is a Limit?',
      slug: 'what-is-a-limit',
      description: 'An intuitive introduction to the concept of limits in calculus',
      order: 1,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Understanding Limits Intuitively

A **limit** describes what happens to a function as the input gets closer and closer to a certain value. Think of it as asking: "Where is this function heading?"

> **Key Idea**: Limits are about the *journey*, not the *destination*. We care about where a function is *going*, not necessarily where it *is*.

### The Limit Notation

We write:

$$\\lim_{x \\to a} f(x) = L$$

This reads: "The limit of f(x) as x approaches a equals L"

### What This Means

- **$x \\to a$**: The variable x gets closer and closer to the value a
- **$f(x) \\to L$**: The function values get closer and closer to L
- We don't care about what happens *at* x = a, only what happens *near* it

### A Simple Example

Consider the function: $f(x) = 2x + 1$

What is $\\lim_{x \\to 3} (2x + 1)$?

As x gets close to 3:
- When x = 2.9: $f(2.9) = 2(2.9) + 1 = 6.8$
- When x = 2.99: $f(2.99) = 2(2.99) + 1 = 6.98$
- When x = 2.999: $f(2.999) = 2(2.999) + 1 = 6.998$

The values are getting closer to **7**!

Therefore: $\\lim_{x \\to 3} (2x + 1) = 7$

### Why Limits Matter

Limits are the foundation of calculus because they help us:
- Define derivatives (rate of change)
- Define integrals (area under curves)
- Understand function behavior near problematic points
- Handle infinity and infinitesimal quantities

### Important Note

> The limit of f(x) as x approaches a might be different from f(a), or f(a) might not even exist!
`,
      exampleProblems: {
        create: [
          {
            question: 'Using your intuition, estimate $\\lim_{x \\to 2} (3x - 1)$ by checking values near x = 2.',
            solution: `Let's check values approaching 2 from both sides:

**From the left (x < 2):**
- x = 1.9: $f(1.9) = 3(1.9) - 1 = 4.7$
- x = 1.99: $f(1.99) = 3(1.99) - 1 = 4.97$
- x = 1.999: $f(1.999) = 3(1.999) - 1 = 4.997$

**From the right (x > 2):**
- x = 2.1: $f(2.1) = 3(2.1) - 1 = 5.3$
- x = 2.01: $f(2.01) = 3(2.01) - 1 = 5.03$
- x = 2.001: $f(2.001) = 3(2.001) - 1 = 5.003$

Both sides approach **5**, so: $\\lim_{x \\to 2} (3x - 1) = 5$`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What does the notation $\\lim_{x \\to a} f(x) = L$ mean in words?',
            back: 'The limit of f(x) as x approaches a equals L. It means as x gets closer to a, f(x) gets closer to L.'
          },
          {
            front: 'True or False: The limit of f(x) as x approaches a must equal f(a).',
            back: 'False! The limit describes where f(x) is heading as x approaches a, which may be different from the actual value at a, or f(a) may not even exist.'
          },
          {
            front: 'What are limits used for in calculus?',
            back: 'Limits are the foundation for defining derivatives (rate of change) and integrals (area under curves), and for understanding function behavior.'
          }
        ]
      }
    }
  })

  // 2. Limit Notation and Terminology
  const topic2 = await prisma.topic.create({
    data: {
      title: 'Limit Notation and Terminology',
      slug: 'limit-notation-terminology',
      description: 'Master the formal notation and vocabulary used when working with limits',
      order: 2,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Limit Notation Explained

Understanding the symbols and language of limits is crucial for reading and writing mathematics correctly.

### The Basic Notation

$$\\lim_{x \\to a} f(x) = L$$

Breaking this down:
- **$\\lim$**: The limit symbol (abbreviation of "limit")
- **$x \\to a$**: "x approaches a" (shown below the limit symbol)
- **$f(x)$**: The function we're examining
- **$= L$**: Equals the limit value L

### Reading Limits Aloud

You can say any of these:
- "The limit of f(x) as x approaches a equals L"
- "The limit of f(x) as x tends to a is L"
- "As x approaches a, f(x) approaches L"

### One-Sided Notation

**Left-hand limit** (approaching from the left):
$$\\lim_{x \\to a^-} f(x) = L$$

The superscript minus sign means "from values less than a"

**Right-hand limit** (approaching from the right):
$$\\lim_{x \\to a^+} f(x) = L$$

The superscript plus sign means "from values greater than a"

### Infinite Limits

**Limit equals infinity:**
$$\\lim_{x \\to a} f(x) = \\infty$$
This means f(x) grows without bound as x approaches a.

**Limit as x approaches infinity:**
$$\\lim_{x \\to \\infty} f(x) = L$$
This means as x gets arbitrarily large, f(x) approaches L.

### Important Phrases

| Phrase | Notation | Meaning |
|--------|----------|---------|
| "x approaches a" | $x \\to a$ | x gets closer to a |
| "from the left" | $x \\to a^-$ | x < a, moving toward a |
| "from the right" | $x \\to a^+$ | x > a, moving toward a |
| "f(x) approaches L" | $f(x) \\to L$ | Function values near L |
| "does not exist" | DNE | No single value |

### Example Statements

1. $\\lim_{x \\to 5} (x^2) = 25$ → "The limit of x squared as x approaches 5 is 25"

2. $\\lim_{x \\to 0^+} \\frac{1}{x} = \\infty$ → "The limit of 1/x as x approaches 0 from the right is infinity"

3. $\\lim_{x \\to 2} f(x)$ DNE → "The limit of f(x) as x approaches 2 does not exist"
`,
      exampleProblems: {
        create: [
          {
            question: 'Write the following statement using proper limit notation: "As x approaches 4, the function 2x + 3 approaches 11"',
            solution: `The statement translates to:

$$\\lim_{x \\to 4} (2x + 3) = 11$$

Breaking it down:
- "as x approaches 4" → $x \\to 4$
- "the function 2x + 3" → $f(x) = 2x + 3$
- "approaches 11" → $= 11$`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'What is the difference between $\\lim_{x \\to 3^-} f(x)$ and $\\lim_{x \\to 3^+} f(x)$?',
            solution: `**$\\lim_{x \\to 3^-} f(x)$** is the **left-hand limit**:
- We approach 3 from values less than 3 (like 2.9, 2.99, 2.999...)
- We're coming from the left side on a number line

**$\\lim_{x \\to 3^+} f(x)$** is the **right-hand limit**:
- We approach 3 from values greater than 3 (like 3.1, 3.01, 3.001...)
- We're coming from the right side on a number line

The overall limit $\\lim_{x \\to 3} f(x)$ exists **only if both one-sided limits exist and are equal**.`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What does the notation $x \\to a^-$ mean?',
            back: 'x approaches a from the left (from values less than a)'
          },
          {
            front: 'What does the notation $x \\to a^+$ mean?',
            back: 'x approaches a from the right (from values greater than a)'
          },
          {
            front: 'When does $\\lim_{x \\to a} f(x)$ exist?',
            back: 'The limit exists when both one-sided limits exist and are equal: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$'
          },
          {
            front: 'What does DNE mean in the context of limits?',
            back: 'Does Not Exist - the limit does not approach a single finite value'
          }
        ]
      }
    }
  })

  // 3. Estimating Limits from Tables
  const topic3 = await prisma.topic.create({
    data: {
      title: 'Estimating Limits from Tables',
      slug: 'estimating-limits-tables',
      description: 'Learn to estimate limit values by examining tables of function values',
      order: 3,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Using Tables to Find Limits

One of the most intuitive ways to understand limits is by creating a table of values and observing the pattern.

### The Strategy

To estimate $\\lim_{x \\to a} f(x)$:

1. **Choose values approaching from the left** (x < a)
2. **Choose values approaching from the right** (x > a)
3. **Calculate f(x) for each value**
4. **Look for a pattern** - what value are the outputs approaching?

### Example Setup

Let's find $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ using a table.

> Note: We can't just plug in x = 2 because we'd get $\\frac{0}{0}$ (undefined!)

**From the left (x < 2):**

| x | f(x) = $\\frac{x^2 - 4}{x - 2}$ |
|---|---|
| 1.9 | $\\frac{(1.9)^2 - 4}{1.9 - 2} = \\frac{-0.39}{-0.1} = 3.9$ |
| 1.99 | $\\frac{(1.99)^2 - 4}{1.99 - 2} = \\frac{-0.0399}{-0.01} = 3.99$ |
| 1.999 | $\\frac{(1.999)^2 - 4}{1.999 - 2} \\approx 3.999$ |

**From the right (x > 2):**

| x | f(x) = $\\frac{x^2 - 4}{x - 2}$ |
|---|---|
| 2.1 | $\\frac{(2.1)^2 - 4}{2.1 - 2} = \\frac{0.41}{0.1} = 4.1$ |
| 2.01 | $\\frac{(2.01)^2 - 4}{2.01 - 2} = \\frac{0.0401}{0.01} = 4.01$ |
| 2.001 | $\\frac{(2.001)^2 - 4}{2.001 - 2} \\approx 4.001$ |

### The Pattern

Both sides are approaching **4**!

Therefore: $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = 4$

### Tips for Making Tables

1. **Start reasonably close** - Use values like 0.1, 0.01 away from a
2. **Get progressively closer** - Move to 0.01, 0.001, etc.
3. **Check both sides** - Always examine left and right approaches
4. **Use a calculator** - For complex functions, don't do it by hand
5. **Look for agreement** - If both sides approach the same value, that's your limit!

### When Tables Fail

Tables are estimates! They might be misleading if:
- You don't get close enough to the point
- The function oscillates wildly near the point
- There's a very steep change right at the point

> Tables are excellent for building intuition, but algebraic methods (coming in later lessons) are more precise.
`,
      exampleProblems: {
        create: [
          {
            question: 'Use a table to estimate $\\lim_{x \\to 1} \\frac{x - 1}{x^2 - 1}$. Check values from both sides.',
            solution: `Let's create a table approaching x = 1:

**From the left (x < 1):**

| x | $\\frac{x - 1}{x^2 - 1}$ | Decimal |
|---|---|---|
| 0.9 | $\\frac{-0.1}{-0.19}$ | 0.526 |
| 0.99 | $\\frac{-0.01}{-0.0199}$ | 0.503 |
| 0.999 | $\\frac{-0.001}{-0.001999}$ | 0.500 |

**From the right (x > 1):**

| x | $\\frac{x - 1}{x^2 - 1}$ | Decimal |
|---|---|---|
| 1.1 | $\\frac{0.1}{0.21}$ | 0.476 |
| 1.01 | $\\frac{0.01}{0.0201}$ | 0.498 |
| 1.001 | $\\frac{0.001}{0.002001}$ | 0.500 |

Both sides approach **0.5**, so:

$$\\lim_{x \\to 1} \\frac{x - 1}{x^2 - 1} = 0.5 = \\frac{1}{2}$$`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'When using tables to estimate limits, what two directions should you always check?',
            back: 'Approach from the left (values less than a) and from the right (values greater than a)'
          },
          {
            front: 'What indicates that a limit exists when using a table of values?',
            back: 'When values from both the left and right approach the same number'
          },
          {
            front: 'Why might a table method be misleading for estimating limits?',
            back: 'If you don\'t get close enough, if the function oscillates wildly, or if there\'s a steep change right at the point'
          }
        ]
      }
    }
  })

  // 4. Estimating Limits from Graphs
  const topic4 = await prisma.topic.create({
    data: {
      title: 'Estimating Limits from Graphs',
      slug: 'estimating-limits-graphs',
      description: 'Visualize limit behavior by reading and interpreting function graphs',
      order: 4,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Reading Limits from Graphs

Graphs provide a powerful visual way to understand limit behavior. You can often *see* where a function is heading!

### The Visual Approach

To find $\\lim_{x \\to a} f(x)$ from a graph:

1. **Locate x = a** on the horizontal axis
2. **Trace from the left** - Where is the curve heading as you approach a from the left?
3. **Trace from the right** - Where is the curve heading as you approach a from the right?
4. **Check if they agree** - Do both sides point to the same y-value?

### Key Visual Clues

#### Case 1: Continuous Point
If the function is smooth and connected at x = a, the limit exists and equals f(a).

> The curve flows smoothly through the point - both sides meet at the same spot.

#### Case 2: Hole (Removable Discontinuity)
Even if there's a hole at x = a, the limit can still exist!

> Follow where the curve *would* go if the hole weren't there. Both sides still point to the same y-value.

#### Case 3: Jump Discontinuity
If the left side approaches one value and the right side approaches a different value, the limit does **not exist**.

> The curve "jumps" - there's no single value both sides agree on.

#### Case 4: Vertical Asymptote
If the function shoots up to $\\infty$ or down to $-\\infty$, we say the limit is infinite (or DNE, depending on context).

> The curve races off toward infinity - unbounded behavior.

### Reading One-Sided Limits

**Left-hand limit** $\\lim_{x \\to a^-} f(x)$:
- Trace along the curve from the left
- What y-value does it approach?

**Right-hand limit** $\\lim_{x \\to a^+} f(x)$:
- Trace along the curve from the right
- What y-value does it approach?

> Remember: If left ≠ right, the two-sided limit DNE!

### Important Graph Features

| Feature | Symbol | Meaning |
|---------|--------|---------|
| **Solid dot** | • | Function value exists there |
| **Open circle** | ○ | Hole - function undefined there |
| **Arrow up/down** | ↑↓ | Function goes to ±∞ |
| **Break in curve** | ⌿ | Discontinuity |

### Practice Strategy

When looking at a graph:
1. Cover the point in question with your finger
2. Slide toward it from the left - where are you heading?
3. Slide toward it from the right - where are you heading?
4. If both sides agree, that's your limit!

### Example Interpretation

Imagine a graph where:
- As you approach x = 3 from the left, the y-values approach 5
- As you approach x = 3 from the right, the y-values approach 5
- But there's an open circle at (3, 5) and a solid dot at (3, 7)

What's the limit?

$\\lim_{x \\to 3} f(x) = 5$ (even though f(3) = 7!)

The limit is about where the function is *heading*, not where it *is*.
`,
      exampleProblems: {
        create: [
          {
            question: 'A function has the following behavior: as x approaches 2 from the left, y approaches 4; as x approaches 2 from the right, y approaches 4; but f(2) = 1. What is $\\lim_{x \\to 2} f(x)$? Does it equal f(2)?',
            solution: `**Finding the limit:**

From the left: $\\lim_{x \\to 2^-} f(x) = 4$

From the right: $\\lim_{x \\to 2^+} f(x) = 4$

Since both one-sided limits exist and are equal:

$$\\lim_{x \\to 2} f(x) = 4$$

**Comparing to f(2):**

We're told that f(2) = 1.

Therefore: $\\lim_{x \\to 2} f(x) = 4 \\neq f(2) = 1$

The limit does NOT equal the function value!

**What this looks like:**
- There's a hole at (2, 4) where the function "wants" to be
- There's a solid dot at (2, 1) where the function actually is
- This is called a **removable discontinuity**`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'On a graph, what does an open circle represent?',
            back: 'A hole - the function is undefined at that point, even though the limit may exist there'
          },
          {
            front: 'If a graph shows the curve approaching different y-values from the left and right, what can you conclude?',
            back: 'The limit does not exist (DNE) at that point - this is a jump discontinuity'
          },
          {
            front: 'Can a limit exist at a point where the function is undefined?',
            back: 'Yes! The limit describes where the function is heading, not where it actually is. A hole is a perfect example.'
          }
        ]
      }
    }
  })

  console.log('✅ Created 4 micro-lessons for Limits!')
  console.log('📚 Topics created:')
  console.log('   1. What is a Limit?')
  console.log('   2. Limit Notation and Terminology')
  console.log('   3. Estimating Limits from Tables')
  console.log('   4. Estimating Limits from Graphs')
  console.log('\n💡 Continue building more micro-lessons to complete the Limits section!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
