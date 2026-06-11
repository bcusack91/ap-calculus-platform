import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Kinetics (Consolidated Part 2)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Kinetics category
  const kineticsCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Kinetics'
    }
  });

  if (!kineticsCategory) {
    throw new Error('Kinetics category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: kineticsCategory.id }
  });

  // Topic 2: Integrated Rate Laws and Half-Life
  const integratedTopic = await prisma.topic.create({
    data: {
      title: 'Integrated Rate Laws and Half-Life',
      slug: 'integrated-rate-laws',
      description: 'Master integrated rate laws for zero, first, and second order reactions, calculate concentrations over time, and understand half-life concepts.',
      order: existingTopics + 1,
      categoryId: kineticsCategory.id,
      isPremium: false,
      textContent: `
# Integrated Rate Laws and Half-Life

## Overview

**Integrated rate laws:** Relate concentration to time directly
- Derived from differential rate laws using calculus
- Allow prediction of [A] at any time t
- Used to determine reaction order graphically

## Zero Order Reactions

**Rate law:** Rate = k

**Integrated form:**

$$[A]_t = [A]_0 - kt$$

**Characteristics:**
- Linear decrease in [A] over time
- Plot [A] vs t → straight line, slope = -k
- Half-life depends on [A]₀: $t_{1/2} = \\frac{[A]_0}{2k}$

**Example:** Surface-catalyzed reactions where surface is saturated

## First Order Reactions

**Rate law:** Rate = k[A]

**Integrated form:**

$$\\ln[A]_t = \\ln[A]_0 - kt$$

**Or:** $[A]_t = [A]_0 e^{-kt}$

**Characteristics:**
- Exponential decay
- Plot ln[A] vs t → straight line, slope = -k
- **Constant half-life:** $t_{1/2} = \\frac{0.693}{k}$ (independent of [A]₀)

**Common examples:** Radioactive decay, many decompositions

## Second Order Reactions

**Rate law:** Rate = k[A]²

**Integrated form:**

$$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$

**Characteristics:**
- Plot 1/[A] vs t → straight line, slope = k
- Half-life increases as reaction proceeds: $t_{1/2} = \\frac{1}{k[A]_0}$

**Example:** Gas-phase dimerizations

## Comparison Table

| Order | Integrated Law | Linear Plot | Slope | Half-life | k Units |
|-------|----------------|-------------|-------|-----------|---------|
| 0 | [A] = [A]₀ - kt | [A] vs t | -k | [A]₀/(2k) | M·s⁻¹ |
| 1 | ln[A] = ln[A]₀ - kt | ln[A] vs t | -k | 0.693/k | s⁻¹ |
| 2 | 1/[A] = 1/[A]₀ + kt | 1/[A] vs t | +k | 1/(k[A]₀) | M⁻¹·s⁻¹ |

## Determining Order Graphically

**Procedure:**
1. Plot [A] vs t (zero order check)
2. Plot ln[A] vs t (first order check)
3. Plot 1/[A] vs t (second order check)
4. Whichever is linear indicates the order

**From slope:**
- Zero/first order: k = -slope
- Second order: k = +slope

## Half-Life

**Half-life (t₁/₂):** Time for [A] to decrease to half its value

**Key insight:** Only first order has constant t₁/₂
- After 1 half-life: [A] = [A]₀/2
- After 2 half-lives: [A] = [A]₀/4
- After n half-lives: [A] = [A]₀/2ⁿ

**Applications:**
- Radioactive dating (¹⁴C, t₁/₂ = 5730 years)
- Drug metabolism (pharmacokinetics)
- Chemical stability predictions
`,
      exampleProblems: {
        create: [
          {
            question: 'The decomposition of N₂O₅ is first order with k = 5.0 × 10⁻⁴ s⁻¹. If [N₂O₅]₀ = 0.200 M, find: (a) [N₂O₅] after 100 seconds, (b) time to reach 0.050 M, (c) half-life.',
            solution: `**Given:**
- First order: k = 5.0 × 10⁻⁴ s⁻¹
- [N₂O₅]₀ = 0.200 M

**First order integrated law:** ln[A]_t = ln[A]₀ - kt

---

**(a) Find [N₂O₅] after t = 100 s**

ln[N₂O₅]₁₀₀ = ln(0.200) - (5.0 × 10⁻⁴)(100)
ln[N₂O₅]₁₀₀ = -1.609 - 0.050 = -1.659

[N₂O₅]₁₀₀ = e⁻¹·⁶⁵⁹ = 0.190 M

**Answer:** 0.190 M

---

**(b) Time to reach 0.050 M**

Rearrange: t = (1/k)ln([A]₀/[A]_t)

t = (1/(5.0 × 10⁻⁴))ln(0.200/0.050)
t = 2000 × ln(4) = 2000 × 1.386
t = 2772 s = 46.2 min

**Answer:** 2772 s or 46 min

---

**(c) Half-life**

For first order: t₁/₂ = 0.693/k

t₁/₂ = 0.693/(5.0 × 10⁻⁴) = 1386 s = 23.1 min

**Answer:** 1386 s or 23 min

**Check:** In part (b), 0.200 M → 0.050 M is a factor of 4 = 2²
So time = 2 half-lives = 2(1386) = 2772 s ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Given concentration vs time data, determine the order and rate constant: t(s): 0, 10, 20, 30, 40 | [A](M): 1.00, 0.63, 0.46, 0.36, 0.29',
            solution: `**Data:**
| t (s) | [A] (M) | ln[A] | 1/[A] (M⁻¹) |
|-------|---------|-------|-------------|
| 0     | 1.00    | 0.000 | 1.00        |
| 10    | 0.63    | -0.462| 1.59        |
| 20    | 0.46    | -0.777| 2.17        |
| 30    | 0.36    | -1.022| 2.78        |
| 40    | 0.29    | -1.238| 3.45        |

---

**Test for zero order:** Plot [A] vs t
- Not linear (curved)

**Test for first order:** Plot ln[A] vs t
- Points: (0, 0.000), (10, -0.462), (20, -0.777), (30, -1.022), (40, -1.238)
- Check linearity: Δ(ln[A])/Δt ≈ -0.031 per second (constant!)
- **Linear!** → First order

**Test for second order:** Plot 1/[A] vs t
- Not as linear as ln[A] plot

---

**Conclusion:** First order

**Calculate k from slope:**

slope = Δ(ln[A])/Δt = (-1.238 - 0.000)/(40 - 0) = -0.031 s⁻¹

For first order: slope = -k
k = 0.031 s⁻¹

**Verification:** Calculate t₁/₂ = 0.693/k = 0.693/0.031 = 22.4 s
Check data: At t ≈ 22 s, [A] should be ≈ 0.50 M (half of 1.00)
Interpolating between t=20 (0.46 M) and t=30 (0.36 M) gives ≈ 0.48 M ✓

**Answer:** First order, k = 0.031 s⁻¹`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A second-order reaction has k = 0.54 M⁻¹·s⁻¹ and [A]₀ = 0.10 M. (a) What is [A] after 2.0 s? (b) What is the first half-life? (c) What is the second half-life?',
            solution: `**Given:**
- Second order: k = 0.54 M⁻¹·s⁻¹
- [A]₀ = 0.10 M

**Second order integrated law:** 1/[A]_t = 1/[A]₀ + kt

---

**(a) [A] after 2.0 s**

1/[A]₂ = 1/0.10 + (0.54)(2.0)
1/[A]₂ = 10 + 1.08 = 11.08 M⁻¹

[A]₂ = 1/11.08 = 0.0903 M

**Answer:** 0.090 M

---

**(b) First half-life**

For second order: t₁/₂ = 1/(k[A]₀)

t₁/₂ = 1/((0.54)(0.10)) = 1/0.054 = 18.5 s

**Answer:** 18.5 s

**Verification:** After 18.5 s, [A] should be 0.050 M

1/[A]₁₈.₅ = 10 + (0.54)(18.5) = 10 + 10 = 20 M⁻¹
[A]₁₈.₅ = 1/20 = 0.050 M ✓

---

**(c) Second half-life**

**Key point:** For second order, half-life increases!

After first t₁/₂: [A] = 0.050 M (new starting point)

Second t₁/₂ = 1/(k × 0.050) = 1/((0.54)(0.050))
Second t₁/₂ = 1/0.027 = 37.0 s

**Answer:** 37.0 s

**Important:** Second half-life (37 s) is twice the first (18.5 s)
- For second order: each successive half-life doubles
- Total time for 2 half-lives: 18.5 + 37.0 = 55.5 s
- After 55.5 s: [A] = 0.025 M (1/4 of original)

**Contrast with first order:**
- First order: all half-lives equal
- Second order: each half-life = 2 × previous
- Zero order: each half-life = 1/2 × previous`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', integratedTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: integratedTopic.id,
        front: 'What are the integrated rate laws for zero, first, and second order reactions?',
        back: 'Zero: [A]_t = [A]₀ - kt. First: ln[A]_t = ln[A]₀ - kt. Second: 1/[A]_t = 1/[A]₀ + kt. These allow calculating concentration at any time.'
      },
      {
        topicId: integratedTopic.id,
        front: 'How do you determine reaction order graphically using integrated rate laws?',
        back: 'Plot [A] vs t (zero order linear), ln[A] vs t (first order linear), and 1/[A] vs t (second order linear). Whichever plot is linear indicates the order. Slope gives k.'
      },
      {
        topicId: integratedTopic.id,
        front: 'What is special about first-order half-life and what is the equation?',
        back: 't₁/₂ = 0.693/k = ln(2)/k. Unique feature: half-life is CONSTANT (independent of concentration). Only first order has this property. Useful for radioactive decay and drug metabolism.'
      },
      {
        topicId: integratedTopic.id,
        front: 'How do half-lives differ for zero, first, and second order reactions?',
        back: 'Zero order: t₁/₂ = [A]₀/(2k) (decreases each cycle). First order: t₁/₂ = 0.693/k (constant). Second order: t₁/₂ = 1/(k[A]₀) (increases each cycle, doubles).'
      },
      {
        topicId: integratedTopic.id,
        front: 'For a first-order reaction, if t₁/₂ = 10 min, how much remains after 30 min?',
        back: '30 min = 3 half-lives. After each t₁/₂, concentration halves. After 3 half-lives: [A] = [A]₀/2³ = [A]₀/8 = 12.5% remains. General: after n half-lives, [A] = [A]₀/2ⁿ.'
      },
      {
        topicId: integratedTopic.id,
        front: 'What are the units of k for zero, first, and second order reactions?',
        back: 'Zero order: M·s⁻¹. First order: s⁻¹. Second order: M⁻¹·s⁻¹. Units ensure dimensional consistency in integrated rate laws.'
      },
      {
        topicId: integratedTopic.id,
        front: 'How do you calculate time needed for concentration to drop from [A]₀ to [A]_t for first order?',
        back: 'Rearrange ln[A]_t = ln[A]₀ - kt to get: t = (1/k)ln([A]₀/[A]_t). For half-life, [A]_t = [A]₀/2, giving t = (1/k)ln(2) = 0.693/k.'
      },
      {
        topicId: integratedTopic.id,
        front: 'What is the relationship between slope and k in integrated rate law plots?',
        back: 'Zero order ([A] vs t): slope = -k. First order (ln[A] vs t): slope = -k. Second order (1/[A] vs t): slope = +k. Note sign difference for second order!'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', integratedTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Kinetics (Part 2)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 8');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
