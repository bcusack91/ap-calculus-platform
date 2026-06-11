import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Equilibrium (Consolidated Part 3)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Equilibrium category
  const equilibriumCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Chemical Equilibrium'
    }
  });

  if (!equilibriumCategory) {
    throw new Error('Equilibrium category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: equilibriumCategory.id }
  });

  // Topic 3: ICE Tables and Calculations
  const iceTopic = await prisma.topic.create({
    data: {
      title: 'ICE Tables and Equilibrium Calculations',
      slug: 'ice-tables-calculations',
      description: 'Master ICE tables to solve equilibrium problems and calculate equilibrium concentrations from initial conditions.',
      order: existingTopics + 1,
      categoryId: equilibriumCategory.id,
      isPremium: false,
      textContent: `
# ICE Tables and Equilibrium Calculations

## What is an ICE Table?

**ICE = Initial, Change, Equilibrium**

**Organized method to track concentrations:**

| | A | + | B | ⇌ | C | + | D |
|-|---|---|---|---|---|---|---|
| **I**nitial | [A]₀ | | [B]₀ | | [C]₀ | | [D]₀ |
| **C**hange | -ax | | -bx | | +cx | | +dx |
| **E**quilibrium | [A]₀-ax | | [B]₀-bx | | [C]₀+cx | | [D]₀+dx |

**Key points:**
- Reactants decrease (negative change)
- Products increase (positive change)
- Changes related by stoichiometry
- Use variable x for unknown change

## Setting Up ICE Table

**Steps:**

1. **Write balanced equation** with ⇌
2. **Initial row:** Given concentrations (often some are 0)
3. **Change row:** Use coefficients
   - Reactants: -coefficient × x
   - Products: +coefficient × x
4. **Equilibrium row:** I + C for each species
5. **Write K expression** using E row
6. **Solve for x**

## Stoichiometric Relationships

**For reaction:** aA + bB ⇌ cC + dD

**If A changes by amount ax:**
- B changes by bx (same x, different coefficient)
- C changes by +cx
- D changes by +dx

**Ratio of changes = ratio of coefficients**

**Example:** N₂ + 3H₂ ⇌ 2NH₃

If N₂ changes by -x:
- H₂ changes by -3x (1:3 ratio)
- NH₃ changes by +2x

## Types of Equilibrium Problems

### Type 1: Calculate K from equilibrium concentrations

**Given:** All equilibrium concentrations
**Find:** K

**Method:**
- Plug directly into K expression
- No ICE table needed (already at equilibrium)

### Type 2: Calculate equilibrium concentrations from K

**Given:** Initial concentrations and K
**Find:** Equilibrium concentrations

**Method:**
1. Set up ICE table
2. Write K expression
3. Solve for x
4. Find equilibrium concentrations

### Type 3: Two initial concentrations given

**Given:** Some reactants, some products initially
**Find:** Equilibrium concentrations

**Method:**
1. Calculate Q to find direction
2. Set up ICE table
3. Solve for x

## Small x Approximation

**When K is very small (< 10⁻³):**

**If [initial] >> K:**
- Assume x is negligible
- Simplify: [initial] - x ≈ [initial]
- Easier algebra

**Check validity:**
- Calculate x
- If x/[initial] < 5%, approximation valid
- If x/[initial] > 5%, must use quadratic

**Example:**

K = 1.0 × 10⁻⁵, [initial] = 0.10 M

**With approximation:**
0.10 - x ≈ 0.10

**Check:** x/0.10 < 5%? If yes, good!

## Quadratic Equation

**When approximation invalid:**

**Standard form:** ax² + bx + c = 0

**Quadratic formula:**

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Use (+) or (-) based on physical meaning:**
- Concentrations must be positive
- Changes must make sense

## Example ICE Table Setup

**Reaction:** H₂(g) + I₂(g) ⇌ 2HI(g)

**Given:** [H₂]₀ = 0.50 M, [I₂]₀ = 0.50 M, [HI]₀ = 0

**ICE Table:**

| | H₂ | + | I₂ | ⇌ | 2HI |
|-|-------|---|-------|---|---------|
| I | 0.50 | | 0.50 | | 0 |
| C | -x | | -x | | +2x |
| E | 0.50-x | | 0.50-x | | 2x |

**K expression:**

$$K = \\frac{[HI]^2}{[H_2][I_2]} = \\frac{(2x)^2}{(0.50-x)(0.50-x)}$$

## Problem-Solving Strategy

**Step 1:** Write balanced equation

**Step 2:** Organize data
- List all initial concentrations
- Identify what you're finding

**Step 3:** Set up ICE table
- Use stoichiometry for changes
- Express equilibrium in terms of x

**Step 4:** Write K expression
- Use equilibrium row

**Step 5:** Solve for x
- Try small x approximation if K small
- Use quadratic if needed
- Take physically meaningful root

**Step 6:** Calculate final answer
- Substitute x back
- Check: concentrations positive?
- Verify with K expression

## Common Mistakes to Avoid

❌ **Wrong stoichiometry in change row**
✓ Use coefficients from balanced equation

❌ **Forgetting to square/cube in K expression**
✓ Exponents = coefficients

❌ **Using initial concentrations in K**
✓ Use equilibrium (E row)

❌ **Taking wrong quadratic root**
✓ Concentrations must be positive

❌ **Invalid small x approximation**
✓ Check x < 5% of initial
`,
      exampleProblems: {
        create: [
          {
            question: 'For H₂(g) + I₂(g) ⇌ 2HI(g), K_c = 50.0 at 500 K. If 1.00 mol H₂ and 1.00 mol I₂ are placed in a 1.00 L container, calculate equilibrium concentrations.',
            solution: `**Given:**
- Reaction: H₂(g) + I₂(g) ⇌ 2HI(g)
- K_c = 50.0
- Initial: 1.00 mol each in 1.00 L → [H₂]₀ = [I₂]₀ = 1.00 M
- [HI]₀ = 0

---

**Set up ICE table:**

| | H₂ | I₂ | 2HI |
|-|---------|---------|---------|
| I | 1.00 | 1.00 | 0 |
| C | -x | -x | +2x |
| E | 1.00-x | 1.00-x | 2x |

---

**Write K expression:**

$$K_c = \\frac{[HI]^2}{[H_2][I_2]} = \\frac{(2x)^2}{(1.00-x)(1.00-x)}$$

$$50.0 = \\frac{4x^2}{(1.00-x)^2}$$

---

**Solve for x:**

**Take square root of both sides:**

$$\\sqrt{50.0} = \\frac{2x}{1.00-x}$$

$$7.07 = \\frac{2x}{1.00-x}$$

**Cross multiply:**

$$7.07(1.00-x) = 2x$$

$$7.07 - 7.07x = 2x$$

$$7.07 = 2x + 7.07x$$

$$7.07 = 9.07x$$

$$x = \\frac{7.07}{9.07} = 0.780$$

---

**Calculate equilibrium concentrations:**

**[H₂]:** 1.00 - x = 1.00 - 0.780 = **0.22 M**

**[I₂]:** 1.00 - x = 1.00 - 0.780 = **0.22 M**

**[HI]:** 2x = 2(0.780) = **1.56 M**

---

**Check answer:**

$$K_c = \\frac{(1.56)^2}{(0.22)(0.22)} = \\frac{2.43}{0.048} = 50.6 \\approx 50.0$$ ✓

**Answers:**
- [H₂] = 0.22 M
- [I₂] = 0.22 M
- [HI] = 1.56 M`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For the reaction: 2NO(g) + Br₂(g) ⇌ 2NOBr(g), K_c = 1.3 × 10⁴ at 300 K. If [NO]₀ = 0.020 M and [Br₂]₀ = 0.025 M, find equilibrium concentrations.',
            solution: `**Given:**
- Reaction: 2NO(g) + Br₂(g) ⇌ 2NOBr(g)
- K_c = 1.3 × 10⁴ (very large!)
- [NO]₀ = 0.020 M
- [Br₂]₀ = 0.025 M
- [NOBr]₀ = 0

---

**Set up ICE table:**

| | 2NO | Br₂ | 2NOBr |
|-|-----------|-----------|-----------|
| I | 0.020 | 0.025 | 0 |
| C | -2x | -x | +2x |
| E | 0.020-2x | 0.025-x | 2x |

**Note stoichiometry:**
- NO has coefficient 2 → change is -2x
- Br₂ has coefficient 1 → change is -x
- NOBr has coefficient 2 → change is +2x

---

**Write K expression:**

$$K_c = \\frac{[NOBr]^2}{[NO]^2[Br_2]} = \\frac{(2x)^2}{(0.020-2x)^2(0.025-x)}$$

$$1.3 \\times 10^4 = \\frac{4x^2}{(0.020-2x)^2(0.025-x)}$$

---

**Large K analysis:**

K = 1.3 × 10⁴ is VERY large → reaction goes nearly to completion

**Limiting reactant:**
- NO: 0.020 M ÷ 2 = 0.010 M available
- Br₂: 0.025 M available
- **NO is limiting**

**Assume reaction goes to completion:**
- All NO consumed
- 0.020 M NO → 0.010 M Br₂ consumed
- 0.020 M NOBr formed

**Then small amount comes back:**

| | 2NO | Br₂ | 2NOBr |
|-|------|------------|---------|
| After completion | 0 | 0.015 | 0.020 |
| C | +2y | +y | -2y |
| E | 2y | 0.015+y | 0.020-2y |

**With small y:**

$$1.3 \\times 10^4 = \\frac{(0.020-2y)^2}{(2y)^2(0.015+y)}$$

**Assume y << 0.015:**

$$1.3 \\times 10^4 \\approx \\frac{(0.020)^2}{(2y)^2(0.015)}$$

$$1.3 \\times 10^4 = \\frac{4.0 \\times 10^{-4}}{4y^2(0.015)}$$

$$1.3 \\times 10^4 = \\frac{4.0 \\times 10^{-4}}{0.060y^2}$$

$$y^2 = \\frac{4.0 \\times 10^{-4}}{(1.3 \\times 10^4)(0.060)}$$

$$y^2 = 5.13 \\times 10^{-7}$$

$$y = 7.2 \\times 10^{-4}$$

---

**Equilibrium concentrations:**

**[NO]:** 2y = 2(7.2 × 10⁻⁴) = **1.4 × 10⁻³ M**

**[Br₂]:** 0.015 + y ≈ 0.015 M = **0.015 M**

**[NOBr]:** 0.020 - 2y = 0.020 - 0.0014 = **0.019 M**

---

**Answers:**
- [NO] = 1.4 × 10⁻³ M
- [Br₂] = 0.015 M
- [NOBr] = 0.019 M`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'For N₂O₄(g) ⇌ 2NO₂(g), K_c = 4.6 × 10⁻³ at 298 K. Initially, [N₂O₄] = 0.050 M and [NO₂] = 0. Calculate equilibrium concentrations.',
            solution: `**Given:**
- Reaction: N₂O₄(g) ⇌ 2NO₂(g)
- K_c = 4.6 × 10⁻³ (small K)
- [N₂O₄]₀ = 0.050 M
- [NO₂]₀ = 0

---

**Set up ICE table:**

| | N₂O₄ | 2NO₂ |
|-|-----------|---------|
| I | 0.050 | 0 |
| C | -x | +2x |
| E | 0.050-x | 2x |

---

**Write K expression:**

$$K_c = \\frac{[NO_2]^2}{[N_2O_4]} = \\frac{(2x)^2}{0.050-x}$$

$$4.6 \\times 10^{-3} = \\frac{4x^2}{0.050-x}$$

---

**Try small x approximation:**

**Since K is small (4.6 × 10⁻³):**
- Little dissociation occurs
- Try: 0.050 - x ≈ 0.050

$$4.6 \\times 10^{-3} = \\frac{4x^2}{0.050}$$

$$4x^2 = (4.6 \\times 10^{-3})(0.050)$$

$$4x^2 = 2.3 \\times 10^{-4}$$

$$x^2 = 5.75 \\times 10^{-5}$$

$$x = 7.58 \\times 10^{-3}$$

---

**Check approximation:**

$$\\frac{x}{[N_2O_4]_0} = \\frac{7.58 \\times 10^{-3}}{0.050} = 0.152 = 15.2\\%$$

**15.2% > 5% → approximation INVALID!**

Must use quadratic equation.

---

**Quadratic solution:**

$$4.6 \\times 10^{-3} = \\frac{4x^2}{0.050-x}$$

$$(4.6 \\times 10^{-3})(0.050-x) = 4x^2$$

$$2.3 \\times 10^{-4} - 4.6 \\times 10^{-3}x = 4x^2$$

$$4x^2 + 4.6 \\times 10^{-3}x - 2.3 \\times 10^{-4} = 0$$

**Quadratic formula:**
- a = 4
- b = 4.6 × 10⁻³
- c = -2.3 × 10⁻⁴

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

$$x = \\frac{-4.6 \\times 10^{-3} \\pm \\sqrt{(4.6 \\times 10^{-3})^2 - 4(4)(-2.3 \\times 10^{-4})}}{2(4)}$$

$$x = \\frac{-4.6 \\times 10^{-3} \\pm \\sqrt{2.1 \\times 10^{-5} + 3.68 \\times 10^{-3}}}{8}$$

$$x = \\frac{-4.6 \\times 10^{-3} \\pm \\sqrt{3.70 \\times 10^{-3}}}{8}$$

$$x = \\frac{-4.6 \\times 10^{-3} \\pm 0.0608}{8}$$

**Take positive root:**

$$x = \\frac{-0.0046 + 0.0608}{8} = \\frac{0.0562}{8} = 7.03 \\times 10^{-3}$$

---

**Calculate equilibrium concentrations:**

**[N₂O₄]:** 0.050 - x = 0.050 - 0.00703 = **0.043 M**

**[NO₂]:** 2x = 2(0.00703) = **0.014 M**

---

**Verify:**

$$K_c = \\frac{(0.014)^2}{0.043} = \\frac{1.96 \\times 10^{-4}}{0.043} = 4.6 \\times 10^{-3}$$ ✓

**Answers:**
- [N₂O₄] = 0.043 M
- [NO₂] = 0.014 M`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', iceTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: iceTopic.id,
        front: 'What is an ICE table and what do the letters stand for?',
        back: 'ICE = Initial, Change, Equilibrium. Organized table to track concentrations: I row = starting concentrations, C row = changes (use stoichiometry), E row = I + C for each species. Use E row in K expression.'
      },
      {
        topicId: iceTopic.id,
        front: 'How do you set up the change row in an ICE table for aA + bB ⇌ cC + dD?',
        back: 'Use variable x with stoichiometric coefficients. Reactants decrease: A changes by -ax, B by -bx. Products increase: C changes by +cx, D by +dx. Changes proportional to coefficients.'
      },
      {
        topicId: iceTopic.id,
        front: 'What are the three types of equilibrium calculations?',
        back: 'Type 1: Given all equilibrium conc, find K (plug directly). Type 2: Given initial conc and K, find equilibrium (ICE table). Type 3: Given some initial reactants and products, find equilibrium (calculate Q first).'
      },
      {
        topicId: iceTopic.id,
        front: 'When can you use the small x approximation and how do you check validity?',
        back: 'Use when K << 1 (typically K < 10⁻³) and initial concentration >> K. Assume x negligible: [initial]-x ≈ [initial]. Check: x/[initial] < 5% valid. If > 5%, must use quadratic.'
      },
      {
        topicId: iceTopic.id,
        front: 'What is the quadratic formula and when must you use it?',
        back: 'For ax² + bx + c = 0: x = [-b ± √(b²-4ac)]/2a. Use when small x approximation invalid (x > 5% of initial). Choose root that gives positive concentrations. Often need (+) root.'
      },
      {
        topicId: iceTopic.id,
        front: 'What is the general strategy for solving equilibrium problems with ICE tables?',
        back: '1) Write balanced equation, 2) List initial concentrations, 3) Set up ICE table with stoichiometry, 4) Write K expression from E row, 5) Solve for x (approximation or quadratic), 6) Calculate final concentrations, verify.'
      },
      {
        topicId: iceTopic.id,
        front: 'What are common mistakes to avoid with ICE tables?',
        back: 'Wrong stoichiometry in C row (use coefficients!), forgetting exponents in K expression, using I row instead of E row in K, taking wrong quadratic root (need positive conc), invalid small x approximation.'
      },
      {
        topicId: iceTopic.id,
        front: 'For large K values, what approximation can simplify the problem?',
        back: 'For very large K (>>1), reaction goes nearly to completion. Find limiting reactant, assume complete reaction, then set up reverse ICE with small amount coming back. Often easier than standard approach.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', iceTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Equilibrium (Part 3)!');
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
