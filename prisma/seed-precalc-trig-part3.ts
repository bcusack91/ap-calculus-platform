import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Precalculus - Trigonometric Functions (Part 3)...');

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

  // Topic 5: Inverse Trigonometric Functions
  const inverseTrigTopic = await prisma.topic.create({
    data: {
      title: 'Inverse Trigonometric Functions',
      slug: 'inverse-trig-functions',
      description: 'Understand inverse trigonometric functions, their domains, ranges, and how to evaluate and use them to solve equations.',
      order: existingTopics + 1,
      categoryId: trigCategory.id,
      isPremium: false,
      textContent: `
# Inverse Trigonometric Functions

## Introduction

**Inverse trigonometric functions** reverse the action of the regular trig functions. They answer the question: "What angle has this trig value?"

**Notation:**
- $\\arcsin(x)$ or $\\sin^{-1}(x)$ is the inverse of sine
- $\\arccos(x)$ or $\\cos^{-1}(x)$ is the inverse of cosine
- $\\arctan(x)$ or $\\tan^{-1}(x)$ is the inverse of tangent

**Important:** $\\sin^{-1}(x) \\neq \\frac{1}{\\sin(x)}$. The $-1$ is NOT an exponent!
- $\\sin^{-1}(x)$ means inverse sine (arcsin)
- $\\frac{1}{\\sin(x)} = \\csc(x)$ is the reciprocal

## Why We Need Restrictions

Trig functions are **periodic** (repeat), so they're not one-to-one. To have an inverse function, we must restrict the domain.

### Restricted Domains (Principal Values)

**For $y = \\sin(x)$:**
- Restrict to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (Quadrants I and IV)
- This gives all y-values from $-1$ to $1$ exactly once

**For $y = \\cos(x)$:**
- Restrict to $[0, \\pi]$ (Quadrants I and II)
- This gives all y-values from $-1$ to $1$ exactly once

**For $y = \\tan(x)$:**
- Restrict to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ (Quadrants I and IV)
- This gives all real y-values exactly once

## Inverse Sine: $y = \\arcsin(x)$

**Definition:** $y = \\arcsin(x)$ means $\\sin(y) = x$ where $-\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}$

**Domain:** $[-1, 1]$ (input must be a valid sine value)

**Range:** $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (output is an angle)

**Key values:**
- $\\arcsin(0) = 0$
- $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$
- $\\arcsin(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$
- $\\arcsin(\\frac{\\sqrt{3}}{2}) = \\frac{\\pi}{3}$
- $\\arcsin(1) = \\frac{\\pi}{2}$
- $\\arcsin(-1) = -\\frac{\\pi}{2}$

## Inverse Cosine: $y = \\arccos(x)$

**Definition:** $y = \\arccos(x)$ means $\\cos(y) = x$ where $0 \\leq y \\leq \\pi$

**Domain:** $[-1, 1]$

**Range:** $[0, \\pi]$

**Key values:**
- $\\arccos(1) = 0$
- $\\arccos(\\frac{\\sqrt{3}}{2}) = \\frac{\\pi}{6}$
- $\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$
- $\\arccos(\\frac{1}{2}) = \\frac{\\pi}{3}$
- $\\arccos(0) = \\frac{\\pi}{2}$
- $\\arccos(-1) = \\pi$

## Inverse Tangent: $y = \\arctan(x)$

**Definition:** $y = \\arctan(x)$ means $\\tan(y) = x$ where $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$

**Domain:** All real numbers $(-\\infty, \\infty)$

**Range:** $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$

**Key values:**
- $\\arctan(0) = 0$
- $\\arctan(1) = \\frac{\\pi}{4}$
- $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
- $\\arctan(-1) = -\\frac{\\pi}{4}$

**Asymptotes:** 
- $\\lim_{x \\to \\infty} \\arctan(x) = \\frac{\\pi}{2}$
- $\\lim_{x \\to -\\infty} \\arctan(x) = -\\frac{\\pi}{2}$

## Composition Properties

**Inverse function property:**

For values in the appropriate domains:
- $\\sin(\\arcsin(x)) = x$ for $x \\in [-1, 1]$
- $\\arcsin(\\sin(x)) = x$ for $x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$

Similarly for cosine and tangent.

**Warning:** $\\arcsin(\\sin(x))$ does NOT always equal $x$!

**Example:** $\\arcsin(\\sin(\\frac{3\\pi}{4})) = \\frac{\\pi}{4}$ (not $\\frac{3\\pi}{4}$)

Why? Because $\\frac{3\\pi}{4}$ is outside the range of arcsin.

## Using Inverse Trig to Solve Equations

**Example:** Solve $\\sin(x) = 0.7$ for $0 \\leq x < 2\\pi$

**Step 1:** Find the reference angle
$$x_{ref} = \\arcsin(0.7) \\approx 0.775 \\text{ radians}$$

**Step 2:** Determine quadrants (sine is positive in I and II)
- Quadrant I: $x = 0.775$
- Quadrant II: $x = \\pi - 0.775 \\approx 2.366$

**Solutions:** $x \\approx 0.775, 2.366$

## Graphs of Inverse Trig Functions

All inverse trig functions are **reflections** of the restricted trig functions over the line $y = x$.

### Graph characteristics:

**$y = \\arcsin(x)$:**
- Domain: $[-1, 1]$, Range: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
- Increasing function
- Passes through origin

**$y = \\arccos(x)$:**
- Domain: $[-1, 1]$, Range: $[0, \\pi]$
- Decreasing function
- $y$-intercept at $(0, \\frac{\\pi}{2})$

**$y = \\arctan(x)$:**
- Domain: $(-\\infty, \\infty)$, Range: $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$
- Increasing function
- Horizontal asymptotes at $y = \\pm\\frac{\\pi}{2}$
- Passes through origin

## Other Inverse Trig Functions

- $y = \\arccsc(x) = \\arcsin(\\frac{1}{x})$ for $|x| \\geq 1$
- $y = \\arcsec(x) = \\arccos(\\frac{1}{x})$ for $|x| \\geq 1$
- $y = \\arccot(x) = \\arctan(\\frac{1}{x})$ (with adjustments)

These are less commonly used but follow similar principles.
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\arcsin(\\frac{1}{2})$ exactly in radians.',
            solution: `**Solution:**

We need to find the angle $y$ such that:
$$\\sin(y) = \\frac{1}{2} \\quad \\text{and} \\quad -\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}$$

**From the unit circle:**

$\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$

And $\\frac{\\pi}{6}$ is in the range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ✓

**Answer:** $\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$

**Verification:**
$$\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$$ ✓

**Note:** Even though $\\sin(\\frac{5\\pi}{6}) = \\frac{1}{2}$ as well, we don't choose $\\frac{5\\pi}{6}$ because it's outside the range of arcsin.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Find the exact value of $\\sin(\\arccos(\\frac{3}{5}))$.',
            solution: `**Solution:**

Let $\\theta = \\arccos(\\frac{3}{5})$

This means: $\\cos(\\theta) = \\frac{3}{5}$ where $0 \\leq \\theta \\leq \\pi$

We need to find: $\\sin(\\theta)$

**Method: Use Pythagorean identity**

$$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$$

Substitute $\\cos(\\theta) = \\frac{3}{5}$:
$$\\sin^2(\\theta) + (\\frac{3}{5})^2 = 1$$
$$\\sin^2(\\theta) + \\frac{9}{25} = 1$$
$$\\sin^2(\\theta) = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\sin(\\theta) = \\pm\\frac{4}{5}$$

**Determine the sign:**

Since $\\theta = \\arccos(\\frac{3}{5})$ and the range of arccos is $[0, \\pi]$, $\\theta$ is in Quadrant I or II.

In both quadrants, sine is **positive**.

**Answer:** $\\sin(\\arccos(\\frac{3}{5})) = \\frac{4}{5}$

**Alternative method (right triangle):**

If $\\cos(\\theta) = \\frac{3}{5} = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$:
- Adjacent = 3
- Hypotenuse = 5
- Opposite = $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$

Therefore: $\\sin(\\theta) = \\frac{4}{5}$ ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Solve for $x$: $\\arctan(x) + \\arctan(2x) = \\frac{\\pi}{4}$',
            solution: `**Solution:**

Given: $\\arctan(x) + \\arctan(2x) = \\frac{\\pi}{4}$

**Step 1: Isolate one arctan**
$$\\arctan(x) = \\frac{\\pi}{4} - \\arctan(2x)$$

**Step 2: Take tangent of both sides**
$$x = \\tan(\\frac{\\pi}{4} - \\arctan(2x))$$

**Step 3: Use tangent difference formula**

$$\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$$

Here: $A = \\frac{\\pi}{4}$, $B = \\arctan(2x)$

$$x = \\frac{\\tan(\\frac{\\pi}{4}) - \\tan(\\arctan(2x))}{1 + \\tan(\\frac{\\pi}{4})\\tan(\\arctan(2x))}$$

**Step 4: Simplify**

Since $\\tan(\\frac{\\pi}{4}) = 1$ and $\\tan(\\arctan(2x)) = 2x$:

$$x = \\frac{1 - 2x}{1 + (1)(2x)} = \\frac{1 - 2x}{1 + 2x}$$

**Step 5: Solve for $x$**

$$x(1 + 2x) = 1 - 2x$$
$$x + 2x^2 = 1 - 2x$$
$$2x^2 + x + 2x - 1 = 0$$
$$2x^2 + 3x - 1 = 0$$

**Step 6: Use quadratic formula**

$$x = \\frac{-3 \\pm \\sqrt{9 + 8}}{4} = \\frac{-3 \\pm \\sqrt{17}}{4}$$

**Step 7: Check which solution is valid**

$x_1 = \\frac{-3 + \\sqrt{17}}{4} \\approx 0.281$

$x_2 = \\frac{-3 - \\sqrt{17}}{4} \\approx -1.781$

Both are in the domain of arctan, so check by substitution:

For $x = \\frac{-3 + \\sqrt{17}}{4}$:
Calculate $\\arctan(x) + \\arctan(2x)$ numerically to verify it equals $\\frac{\\pi}{4} \\approx 0.785$

**Answer:** $x = \\frac{-3 + \\sqrt{17}}{4}$

(The negative solution may or may not work depending on domain restrictions)`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', inverseTrigTopic.title);

  // Create flashcards for inverse trig topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inverseTrigTopic.id,
        front: 'What is the domain and range of $y = \\arcsin(x)$?',
        back: 'Domain: $[-1, 1]$, Range: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ (Quadrants I and IV)'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'What is the domain and range of $y = \\arccos(x)$?',
        back: 'Domain: $[-1, 1]$, Range: $[0, \\pi]$ (Quadrants I and II)'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'What is the domain and range of $y = \\arctan(x)$?',
        back: 'Domain: $(-\\infty, \\infty)$ (all real numbers), Range: $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'What does $\\sin^{-1}(x)$ mean? Is it the same as $\\frac{1}{\\sin(x)}$?',
        back: '$\\sin^{-1}(x) = \\arcsin(x)$ is the inverse sine function. It is NOT $\\frac{1}{\\sin(x)}$ (which is $\\csc(x)$). The $-1$ is not an exponent!'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'Does $\\arcsin(\\sin(x))$ always equal $x$?',
        back: 'No! It equals $x$ only if $x$ is in the range of arcsin: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. Otherwise, the output is adjusted to fall within this range.'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'What is $\\arcsin(\\frac{\\sqrt{2}}{2})$?',
        back: '$\\frac{\\pi}{4}$ (or 45°). This is the angle in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ whose sine is $\\frac{\\sqrt{2}}{2}$.'
      },
      {
        topicId: inverseTrigTopic.id,
        front: 'What are the horizontal asymptotes of $y = \\arctan(x)$?',
        back: '$y = \\frac{\\pi}{2}$ as $x \\to \\infty$ and $y = -\\frac{\\pi}{2}$ as $x \\to -\\infty$'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', inverseTrigTopic.title);

  console.log('\n✅ Successfully seeded AP Precalculus - Trigonometric Functions (Part 3)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 7');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
