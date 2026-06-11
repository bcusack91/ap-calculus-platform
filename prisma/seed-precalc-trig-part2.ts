import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Trigonometric Functions (Part 2)...');

  // Find the AP Precalculus course
  const precalcCourse = await prisma.course.findUnique({
    where: { slug: 'ap-precalculus' }
  });

  if (!precalcCourse) {
    throw new Error('AP Precalculus course not found');
  }

  // Find the Trigonometric Functions category
  const trigCategory = await prisma.category.findFirst({
    where: {
      courseId: precalcCourse.id,
      name: 'Trigonometric Functions'
    }
  });

  if (!trigCategory) {
    throw new Error('Trigonometric Functions category not found');
  }

  // Get current topic count to set proper order
  const existingTopics = await prisma.topic.count({
    where: { categoryId: trigCategory.id }
  });

  // Topic 3: Graphing Trigonometric Functions
  const graphingTrigTopic = await prisma.topic.create({
    data: {
      title: 'Graphing Trigonometric Functions',
      slug: 'graphing-trig-functions',
      description: 'Graph sine, cosine, and tangent functions and understand transformations including amplitude, period, phase shift, and vertical shift.',
      order: existingTopics + 1,
      categoryId: trigCategory.id,
      isPremium: false,
      textContent: `
# Graphing Trigonometric Functions

## Parent Functions

The three main trigonometric functions have distinct graphs:

### Sine Function: $y = \\sin(x)$
- **Domain**: All real numbers $(-\\infty, \\infty)$
- **Range**: $[-1, 1]$
- **Period**: $2\\pi$
- **Amplitude**: 1
- **Key points**: $(0, 0)$, $(\\frac{\\pi}{2}, 1)$, $(\\pi, 0)$, $(\\frac{3\\pi}{2}, -1)$, $(2\\pi, 0)$
- **Zeros**: $x = n\\pi$ where $n$ is an integer

### Cosine Function: $y = \\cos(x)$
- **Domain**: All real numbers $(-\\infty, \\infty)$
- **Range**: $[-1, 1]$
- **Period**: $2\\pi$
- **Amplitude**: 1
- **Key points**: $(0, 1)$, $(\\frac{\\pi}{2}, 0)$, $(\\pi, -1)$, $(\\frac{3\\pi}{2}, 0)$, $(2\\pi, 1)$
- **Zeros**: $x = \\frac{\\pi}{2} + n\\pi$ where $n$ is an integer

### Tangent Function: $y = \\tan(x)$
- **Domain**: All real numbers except $x = \\frac{\\pi}{2} + n\\pi$ where $n$ is an integer
- **Range**: All real numbers $(-\\infty, \\infty)$
- **Period**: $\\pi$
- **Vertical asymptotes**: $x = \\frac{\\pi}{2} + n\\pi$
- **Key points**: $(0, 0)$, $(\\frac{\\pi}{4}, 1)$, $(-\\frac{\\pi}{4}, -1)$
- **Zeros**: $x = n\\pi$ where $n$ is an integer

## General Form and Transformations

The general form of a sinusoidal function is:

$$y = A\\sin(B(x - C)) + D \\quad \\text{or} \\quad y = A\\cos(B(x - C)) + D$$

Where:
- **$|A|$** = **Amplitude** (vertical stretch/compression)
  - If $A < 0$, the graph is reflected over the x-axis
- **$B$** affects the **Period**: Period = $\\frac{2\\pi}{|B|}$
  - If $B > 1$, horizontal compression (shorter period)
  - If $0 < B < 1$, horizontal stretch (longer period)
- **$C$** = **Phase shift** (horizontal translation)
  - If $C > 0$, shift right
  - If $C < 0$, shift left
- **$D$** = **Vertical shift** (midline)
  - The midline is $y = D$

### For Tangent Functions

$$y = A\\tan(B(x - C)) + D$$

- **Period** = $\\frac{\\pi}{|B|}$
- Vertical asymptotes at $x = C + \\frac{\\pi}{2B} + \\frac{n\\pi}{B}$ where $n$ is an integer

## Finding Key Features from Equations

Given $y = A\\sin(B(x - C)) + D$:

1. **Amplitude**: $|A|$
2. **Period**: $\\frac{2\\pi}{|B|}$
3. **Phase Shift**: $C$
4. **Vertical Shift/Midline**: $y = D$
5. **Maximum value**: $D + |A|$
6. **Minimum value**: $D - |A|$

## Graphing Strategy

1. **Identify** $A$, $B$, $C$, and $D$
2. **Draw the midline** at $y = D$
3. **Mark the amplitude** (max at $D + |A|$, min at $D - |A|$)
4. **Find the period** and mark one complete cycle
5. **Apply phase shift** (start at $x = C$)
6. **Plot key points** within one period
7. **Sketch the curve** and extend if needed

## Common Patterns

### Cosecant and Secant
- $\\csc(x) = \\frac{1}{\\sin(x)}$: Has vertical asymptotes where $\\sin(x) = 0$
- $\\sec(x) = \\frac{1}{\\cos(x)}$: Has vertical asymptotes where $\\cos(x) = 0$

### Cotangent
- $\\cot(x) = \\frac{1}{\\tan(x)}$: Period is $\\pi$, asymptotes where $\\tan(x) = 0$
`,
      exampleProblems: {
        create: [
          {
            question: 'Graph $y = 2\\sin(x) + 1$ and identify the amplitude, period, and midline.',
            solution: `**Solution:**

Given: $y = 2\\sin(x) + 1$

Compare to general form: $y = A\\sin(B(x - C)) + D$
- $A = 2$
- $B = 1$
- $C = 0$
- $D = 1$

**Features:**
1. **Amplitude**: $|A| = |2| = 2$
2. **Period**: $\\frac{2\\pi}{|B|} = \\frac{2\\pi}{1} = 2\\pi$
3. **Phase Shift**: $C = 0$ (no horizontal shift)
4. **Midline**: $y = D = 1$
5. **Maximum**: $1 + 2 = 3$
6. **Minimum**: $1 - 2 = -1$

**Key Points** (one period from $x = 0$ to $x = 2\\pi$):
- Start: $(0, 1)$ (midline)
- Max: $(\\frac{\\pi}{2}, 3)$
- Midline: $(\\pi, 1)$
- Min: $(\\frac{3\\pi}{2}, -1)$
- End: $(2\\pi, 1)$ (midline)

The graph oscillates between $y = -1$ and $y = 3$, centered on the midline $y = 1$.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Find the equation of a cosine function with amplitude 3, period $\\pi$, phase shift $\\frac{\\pi}{4}$ to the right, and vertical shift down 2.',
            solution: `**Solution:**

General form: $y = A\\cos(B(x - C)) + D$

**Given information:**
- Amplitude: $|A| = 3$, so $A = 3$ (assuming positive)
- Period: $\\frac{2\\pi}{B} = \\pi$
- Phase shift right: $C = \\frac{\\pi}{4}$
- Vertical shift down: $D = -2$

**Find $B$:**
$$\\frac{2\\pi}{B} = \\pi$$
$$2\\pi = \\pi B$$
$$B = 2$$

**Equation:**
$$y = 3\\cos(2(x - \\frac{\\pi}{4})) - 2$$

Or simplified:
$$y = 3\\cos(2x - \\frac{\\pi}{2}) - 2$$

**Verification:**
- Amplitude: $|3| = 3$ ✓
- Period: $\\frac{2\\pi}{2} = \\pi$ ✓
- Phase shift: $\\frac{\\pi}{4}$ right ✓
- Vertical shift: $-2$ ✓
- Range: $[-2-3, -2+3] = [-5, 1]$`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Graph $y = -\\frac{1}{2}\\tan(\\frac{x}{2}) + 3$ and identify all asymptotes in the interval $[0, 4\\pi]$.',
            solution: `**Solution:**

Given: $y = -\\frac{1}{2}\\tan(\\frac{x}{2}) + 3$

Compare to general form: $y = A\\tan(B(x - C)) + D$
- $A = -\\frac{1}{2}$ (negative means reflection over x-axis)
- $B = \\frac{1}{2}$
- $C = 0$
- $D = 3$

**Features:**
1. **Period**: $\\frac{\\pi}{|B|} = \\frac{\\pi}{1/2} = 2\\pi$
2. **Vertical shift**: $y = 3$ (midline)
3. **Reflection**: Negative $A$ means graph is reflected over the midline
4. **Vertical asymptotes** occur at $x = \\frac{\\pi}{2B} + \\frac{n\\pi}{B}$

**Find asymptotes:**
$$x = \\frac{\\pi}{2(1/2)} + \\frac{n\\pi}{1/2} = \\pi + 2n\\pi$$

For $n = 0, 1, 2$:
- $n = 0$: $x = \\pi$
- $n = 1$: $x = 3\\pi$
- $n = 2$: $x = 5\\pi$ (outside interval)

**In $[0, 4\\pi]$, asymptotes are at $x = \\pi$ and $x = 3\\pi$.**

**Key points between asymptotes:**

Between $x = -\\pi$ and $x = \\pi$:
- $(0, 3)$ (midline, where tangent crosses zero)
- $(-\\frac{\\pi}{2}, 3.5)$ (quarter period from center)
- $(\\frac{\\pi}{2}, 2.5)$ (quarter period from center)

The graph decreases from top to bottom (due to negative $A$) within each period, with the center line at $y = 3$.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', graphingTrigTopic.title);

  // Create flashcards for graphing trig topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: graphingTrigTopic.id,
        front: 'What is the general form of a sinusoidal function and what does each parameter represent?',
        back: '$y = A\\sin(B(x - C)) + D$ where $|A|$ is amplitude, $B$ affects period ($\\frac{2\\pi}{|B|}$), $C$ is phase shift (horizontal), and $D$ is vertical shift (midline).'
      },
      {
        topicId: graphingTrigTopic.id,
        front: 'What is the period of $y = \\sin(x)$ and $y = \\cos(x)$?',
        back: 'Both have period $2\\pi$. For $y = A\\sin(Bx)$ or $y = A\\cos(Bx)$, the period is $\\frac{2\\pi}{|B|}$.'
      },
      {
        topicId: graphingTrigTopic.id,
        front: 'What is the period of $y = \\tan(x)$?',
        back: 'The period is $\\pi$. For $y = A\\tan(Bx)$, the period is $\\frac{\\pi}{|B|}$.'
      },
      {
        topicId: graphingTrigTopic.id,
        front: 'How do you find the amplitude and range of $y = A\\sin(x) + D$?',
        back: 'Amplitude is $|A|$. Range is $[D - |A|, D + |A|]$. Maximum value is $D + |A|$ and minimum is $D - |A|$.'
      },
      {
        topicId: graphingTrigTopic.id,
        front: 'Where are the vertical asymptotes of $y = \\tan(x)$?',
        back: 'At $x = \\frac{\\pi}{2} + n\\pi$ where $n$ is any integer. For $y = A\\tan(B(x-C))$, asymptotes are at $x = C + \\frac{\\pi}{2B} + \\frac{n\\pi}{B}$.'
      },
      {
        topicId: graphingTrigTopic.id,
        front: 'What is a phase shift and how do you identify it?',
        back: 'A phase shift is a horizontal translation. In $y = A\\sin(B(x - C)) + D$, the phase shift is $C$ units. If $C > 0$, shift right; if $C < 0$, shift left.'
      }
    ]
  });

  console.log('✓ Created 6 flashcards for', graphingTrigTopic.title);

  // Topic 4: Solving Trigonometric Equations
  const solvingTrigTopic = await prisma.topic.create({
    data: {
      title: 'Solving Trigonometric Equations',
      slug: 'solving-trig-equations',
      description: 'Solve trigonometric equations using algebraic techniques, inverse functions, and the unit circle.',
      order: existingTopics + 2,
      categoryId: trigCategory.id,
      isPremium: false,
      textContent: `
# Solving Trigonometric Equations

## Basic Strategies

When solving trigonometric equations, we use several key techniques:

1. **Isolate the trigonometric function**
2. **Use inverse trig functions** or the unit circle
3. **Find all solutions** in the given interval
4. **Consider periodicity** for general solutions

## Types of Trigonometric Equations

### Type 1: Linear Equations

**Example form**: $\\sin(x) = a$ where $-1 \\leq a \\leq 1$

**Solution method:**
1. Find the reference angle: $\\theta_r = \\arcsin(|a|)$
2. Determine which quadrants based on the sign of $a$
3. Find all solutions in $[0, 2\\pi)$
4. Add $2\\pi n$ for general solution

**General solution patterns:**
- If $\\sin(x) = a$: $x = \\arcsin(a) + 2\\pi n$ or $x = \\pi - \\arcsin(a) + 2\\pi n$
- If $\\cos(x) = a$: $x = \\arccos(a) + 2\\pi n$ or $x = -\\arccos(a) + 2\\pi n$
- If $\\tan(x) = a$: $x = \\arctan(a) + \\pi n$

### Type 2: Quadratic Equations

**Example form**: $\\sin^2(x) + b\\sin(x) + c = 0$

**Solution method:**
1. Substitute $u = \\sin(x)$ (or the relevant trig function)
2. Solve the quadratic equation for $u$
3. Solve $\\sin(x) = u$ for each value of $u$
4. Check that solutions are in the domain

### Type 3: Equations with Multiple Angles

**Example form**: $\\sin(2x) = \\frac{1}{2}$

**Solution method:**
1. Let $u = 2x$ (or the multiple angle)
2. Solve $\\sin(u) = \\frac{1}{2}$
3. Divide by the coefficient to find $x$
4. Consider the extended period

### Type 4: Equations with Multiple Functions

**Example form**: $\\sin(x) + \\cos(x) = 1$

**Solution methods:**
- Use Pythagorean identities to express in terms of one function
- Square both sides (check for extraneous solutions)
- Use sum-to-product or product-to-sum identities

## Key Identities for Solving

### Pythagorean Identities
- $\\sin^2(x) + \\cos^2(x) = 1$
- $1 + \\tan^2(x) = \\sec^2(x)$
- $1 + \\cot^2(x) = \\csc^2(x)$

### Double Angle Formulas
- $\\sin(2x) = 2\\sin(x)\\cos(x)$
- $\\cos(2x) = \\cos^2(x) - \\sin^2(x) = 2\\cos^2(x) - 1 = 1 - 2\\sin^2(x)$
- $\\tan(2x) = \\frac{2\\tan(x)}{1 - \\tan^2(x)}$

### Half Angle Formulas
- $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$
- $\\cos^2(x) = \\frac{1 + \\cos(2x)}{2}$

## Interval Considerations

- **Standard interval**: $[0, 2\\pi)$ or $[0°, 360°)$
- **Extended intervals**: May need to consider multiple periods
- **General solution**: Include $+ 2\\pi n$ (or $+ \\pi n$ for tangent) where $n$ is an integer

## Checking Solutions

Always verify solutions by:
1. Substituting back into the original equation
2. Checking domain restrictions (e.g., no division by zero)
3. Eliminating extraneous solutions from squaring

## Common Reference Angles

| Angle | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ |
|-------|------|-------|-------|-------|-------|
| Radians | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |
| $\\sin$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ |
| $\\cos$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\tan$ | $0$ | $\\frac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ | undefined |
`,
      exampleProblems: {
        create: [
          {
            question: 'Solve $2\\sin(x) - 1 = 0$ for $x$ in $[0, 2\\pi)$.',
            solution: `**Solution:**

Starting equation: $2\\sin(x) - 1 = 0$

**Step 1: Isolate the trig function**
$$2\\sin(x) = 1$$
$$\\sin(x) = \\frac{1}{2}$$

**Step 2: Find solutions using the unit circle**

$\\sin(x) = \\frac{1}{2}$ when $x$ is in Quadrants I and II (where sine is positive).

Reference angle: $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$

**Step 3: Find all solutions in $[0, 2\\pi)$**

- **Quadrant I**: $x = \\frac{\\pi}{6}$
- **Quadrant II**: $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$

**Answer:** $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$

**Verification:**
- $2\\sin(\\frac{\\pi}{6}) - 1 = 2(\\frac{1}{2}) - 1 = 0$ ✓
- $2\\sin(\\frac{5\\pi}{6}) - 1 = 2(\\frac{1}{2}) - 1 = 0$ ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Solve $2\\cos^2(x) - \\cos(x) - 1 = 0$ for $x$ in $[0, 2\\pi)$.',
            solution: `**Solution:**

Given: $2\\cos^2(x) - \\cos(x) - 1 = 0$

This is a quadratic equation in $\\cos(x)$.

**Step 1: Factor or use quadratic formula**

Let $u = \\cos(x)$:
$$2u^2 - u - 1 = 0$$

Factor: $(2u + 1)(u - 1) = 0$

**Step 2: Solve for $u$**
$$2u + 1 = 0 \\quad \\text{or} \\quad u - 1 = 0$$
$$u = -\\frac{1}{2} \\quad \\text{or} \\quad u = 1$$

**Step 3: Solve for $x$**

**Case 1:** $\\cos(x) = -\\frac{1}{2}$

Cosine is negative in Quadrants II and III.
Reference angle: $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$

- Quadrant II: $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$
- Quadrant III: $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$

**Case 2:** $\\cos(x) = 1$

$x = 0$ (or $2\\pi$, but we use $[0, 2\\pi)$)

**Answer:** $x = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$

**Verification:**
- At $x = 0$: $2(1)^2 - 1 - 1 = 0$ ✓
- At $x = \\frac{2\\pi}{3}$: $2(-\\frac{1}{2})^2 - (-\\frac{1}{2}) - 1 = \\frac{1}{2} + \\frac{1}{2} - 1 = 0$ ✓
- At $x = \\frac{4\\pi}{3}$: $2(-\\frac{1}{2})^2 - (-\\frac{1}{2}) - 1 = 0$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Solve $\\sin(2x) = \\sin(x)$ for $x$ in $[0, 2\\pi)$.',
            solution: `**Solution:**

Given: $\\sin(2x) = \\sin(x)$

**Step 1: Use double angle formula**
$$2\\sin(x)\\cos(x) = \\sin(x)$$

**Step 2: Move all terms to one side**
$$2\\sin(x)\\cos(x) - \\sin(x) = 0$$

**Step 3: Factor out $\\sin(x)$**
$$\\sin(x)(2\\cos(x) - 1) = 0$$

**Step 4: Solve each factor**

**Factor 1:** $\\sin(x) = 0$

In $[0, 2\\pi)$: $x = 0, \\pi$

**Factor 2:** $2\\cos(x) - 1 = 0$
$$\\cos(x) = \\frac{1}{2}$$

Cosine is positive in Quadrants I and IV.
Reference angle: $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$

- Quadrant I: $x = \\frac{\\pi}{3}$
- Quadrant IV: $x = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$

**Answer:** $x = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$

**Verification:**
- At $x = 0$: $\\sin(0) = \\sin(0) = 0$ ✓
- At $x = \\frac{\\pi}{3}$: $\\sin(\\frac{2\\pi}{3}) = \\frac{\\sqrt{3}}{2}$ and $\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$ ✓
- At $x = \\pi$: $\\sin(2\\pi) = \\sin(\\pi) = 0$ ✓
- At $x = \\frac{5\\pi}{3}$: $\\sin(\\frac{10\\pi}{3}) = \\sin(\\frac{4\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$ and $\\sin(\\frac{5\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$ ✓

**Note:** We reduced $\\sin(\\frac{10\\pi}{3})$ by subtracting $2\\pi$: $\\frac{10\\pi}{3} - 2\\pi = \\frac{4\\pi}{3}$`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', solvingTrigTopic.title);

  // Create flashcards for solving trig topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingTrigTopic.id,
        front: 'What are the general solutions for $\\sin(x) = a$?',
        back: '$x = \\arcsin(a) + 2\\pi n$ or $x = \\pi - \\arcsin(a) + 2\\pi n$ where $n$ is any integer and $-1 \\leq a \\leq 1$.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'What is the general solution for $\\tan(x) = a$?',
        back: '$x = \\arctan(a) + \\pi n$ where $n$ is any integer. Tangent has period $\\pi$, so we add $\\pi n$ instead of $2\\pi n$.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'How do you solve a quadratic trigonometric equation like $2\\sin^2(x) + 3\\sin(x) - 2 = 0$?',
        back: 'Substitute $u = \\sin(x)$, solve the quadratic for $u$, then solve $\\sin(x) = u$ for each value of $u$ found.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'What is the double angle formula for $\\sin(2x)$?',
        back: '$\\sin(2x) = 2\\sin(x)\\cos(x)$. This is useful for solving equations involving $\\sin(2x)$.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'What are the three forms of the double angle formula for cosine?',
        back: '$\\cos(2x) = \\cos^2(x) - \\sin^2(x) = 2\\cos^2(x) - 1 = 1 - 2\\sin^2(x)$. Choose the form based on which function appears in your equation.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'When solving trig equations, why must you check for extraneous solutions?',
        back: 'Squaring both sides or using certain identities can introduce solutions that don\'t satisfy the original equation. Always substitute back to verify.'
      },
      {
        topicId: solvingTrigTopic.id,
        front: 'For which values of $x$ in $[0, 2\\pi)$ is $\\sin(x) = \\frac{\\sqrt{2}}{2}$?',
        back: '$x = \\frac{\\pi}{4}$ (Quadrant I) and $x = \\frac{3\\pi}{4}$ (Quadrant II), where sine is positive.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', solvingTrigTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Trigonometric Functions (Part 2)!');
  console.log('   Topics: 2');
  console.log('   Examples: 6');
  console.log('   Flashcards: 13');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
