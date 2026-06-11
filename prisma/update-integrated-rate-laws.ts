import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateIntegratedRateLaws() {
  await prisma.topic.update({
    where: { slug: 'integrated-rate-laws' },
    data: {
      textContent: `# Integrated Rate Laws and Half-Life

## Overview

**Integrated rate laws** relate concentration to time directly, allowing us to:
- Predict reactant concentration at any time
- Determine reaction order from experimental data
- Calculate rate constants from concentration-time data

These equations are derived from differential rate laws using calculus.

## Zero Order Reactions

**Rate law:** Rate = k

**Integrated form:**

$$[A]_t = [A]_0 - kt$$

**Key characteristics:**
- Concentration decreases **linearly** with time
- Plot **[A] vs t** gives straight line with slope = -k
- Half-life **depends on initial concentration**

**Half-life formula:**

$$t_{1/2} = \\frac{[A]_0}{2k}$$

**Example:** Surface-catalyzed reactions where catalyst surface is saturated

---

## First Order Reactions

**Rate law:** Rate = k[A]

**Integrated form:**

$$\\ln[A]_t = \\ln[A]_0 - kt$$

**Alternative form:**

$$[A]_t = [A]_0 e^{-kt}$$

**Key characteristics:**
- Concentration decreases **exponentially**
- Plot **ln[A] vs t** gives straight line with slope = -k
- Half-life is **constant** (independent of concentration)

**Half-life formula:**

$$t_{1/2} = \\frac{0.693}{k} = \\frac{\\ln 2}{k}$$

**Common examples:** Radioactive decay, many decomposition reactions

---

## Second Order Reactions

**Rate law:** Rate = k[A]²

**Integrated form:**

$$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$

**Key characteristics:**
- Plot **1/[A] vs t** gives straight line with slope = +k
- Half-life **increases** as reaction proceeds

**Half-life formula:**

$$t_{1/2} = \\frac{1}{k[A]_0}$$

**Example:** Gas-phase dimerization reactions (2A → A₂)

---

## Comparison at a Glance (Mobile‑Friendly)

Rather than a cramped table, here’s a stacked, easy‑scan summary for each key property:

**Rate law**
- Zero order: Rate = k
- First order: Rate = k[A]
- Second order: Rate = k[A]²

**Integrated law**
- Zero order: $$[A]_t = [A]_0 - kt$$
- First order: $$\\ln[A]_t = \\ln[A]_0 - kt$$ (equivalently, $$[A]_t = [A]_0 e^{-kt}$$)
- Second order: $$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$

**Linear plot for straight line**
- Zero order: [A] vs t (slope = −k)
- First order: ln[A] vs t (slope = −k)
- Second order: 1/[A] vs t (slope = +k)

**Half‑life**
- Zero order: $$t_{1/2} = \\dfrac{[A]_0}{2k}$$ (depends on [A]₀)
- First order: $$t_{1/2} = \\dfrac{0.693}{k}$$ (constant)
- Second order: $$t_{1/2} = \\dfrac{1}{k[A]_0}$$ (depends on [A]₀)

**Units of k**
- Zero order: M·s⁻¹
- First order: s⁻¹
- Second order: M⁻¹·s⁻¹

---

## Determining Reaction Order Graphically

**Method:**

1. **Collect data:** Measure [A] at various times
2. **Make three plots:**
   - [A] vs t
   - ln[A] vs t  
   - 1/[A] vs t
3. **Identify the linear plot** - this reveals the order:
   - **[A] vs t is linear** → Zero order
   - **ln[A] vs t is linear** → First order
   - **1/[A] vs t is linear** → Second order

**Extracting the rate constant:**
- **Zero/First order:** k = -slope (note negative!)
- **Second order:** k = +slope (positive)

---

## Half-Life Concepts

**Definition:** Time required for concentration to decrease to **half** its initial value

**After n half-lives:**

$$[A] = \\frac{[A]_0}{2^n}$$

**Examples:**
- After 1 half-life: [A] = [A]₀/2 = 50% remaining
- After 2 half-lives: [A] = [A]₀/4 = 25% remaining
- After 3 half-lives: [A] = [A]₀/8 = 12.5% remaining

**Key insight:** Only **first-order reactions** have a constant half-life!

---

## Practice Example

**Problem:** A reaction has the following data:

| Time (s) | [A] (M) |
|----------|---------|
| 0        | 1.00    |
| 50       | 0.61    |
| 100      | 0.37    |
| 150      | 0.22    |

**Determine the order and rate constant.**

**Solution:**

Calculate ln[A] and 1/[A]:

| Time (s) | [A] (M) | ln[A] | 1/[A] (M⁻¹) |
|----------|---------|-------|-------------|
| 0        | 1.00    | 0.00  | 1.00        |
| 50       | 0.61    | -0.49 | 1.64        |
| 100      | 0.37    | -0.99 | 2.70        |
| 150      | 0.22    | -1.51 | 4.55        |

Plot ln[A] vs t → **Linear!** (slope ≈ -0.01)

**Conclusion:** First order reaction with k = 0.01 s⁻¹

**Half-life:** t₁/₂ = 0.693/0.01 = 69.3 seconds

---

## Real-World Applications

**Radioactive Dating:**
- Carbon-14 dating: t₁/₂ = 5,730 years (first order)
- Used to date organic materials up to ~50,000 years old

**Pharmacology:**
- Drug metabolism follows first-order kinetics
- Constant half-life allows predictable dosing schedules
- Example: Aspirin t₁/₂ ≈ 2-3 hours

**Environmental Chemistry:**
- Pollutant degradation rates
- Predicting cleanup timelines

**Chemical Engineering:**
- Reactor design and optimization
- Determining optimal reaction times
`
    }
  });
  
  console.log('✅ Updated integrated-rate-laws topic with improved formatting!');
  console.log('📊 Key improvements:');
  console.log('  • Expanded each reaction order into its own section with clear formulas');
  console.log('  • Moved comparison table to summary position (easier to reference)');
  console.log('  • Added "t₁/₂ depends on [A]₀?" row to highlight key difference');
  console.log('  • Added practice example with worked solution');
  console.log('  • Improved visual hierarchy with horizontal rules');
  console.log('  • Enhanced readability of formulas outside cramped table cells');
  
  await prisma.$disconnect();
}

updateIntegratedRateLaws();
