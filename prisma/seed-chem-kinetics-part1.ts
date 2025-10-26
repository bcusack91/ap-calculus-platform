import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Kinetics (Part 1)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Check if Kinetics category exists, if not create it
  let kineticsCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Kinetics'
    }
  });

  if (!kineticsCategory) {
    // Get the current max order
    const maxOrder = await prisma.category.findFirst({
      where: { courseId: chemistryCourse.id },
      orderBy: { order: 'desc' },
      select: { order: true }
    });

    kineticsCategory = await prisma.category.create({
      data: {
        name: 'Kinetics',
        slug: 'kinetics',
        description: 'Study reaction rates, rate laws, mechanisms, and factors affecting reaction speed.',
        courseId: chemistryCourse.id,
        order: (maxOrder?.order ?? 0) + 1
      }
    });
    console.log('✓ Created category: Kinetics');
  }

  // Topic 1: Reaction Rates and Rate Laws
  const ratesTopic = await prisma.topic.create({
    data: {
      title: 'Reaction Rates and Rate Laws',
      slug: 'reaction-rates-and-rate-laws',
      description: 'Learn to measure reaction rates, determine rate laws experimentally, understand reaction order, and calculate rate constants.',
      order: 1,
      categoryId: kineticsCategory.id,
      isPremium: false,
      textContent: `
# Reaction Rates and Rate Laws

## Introduction to Reaction Rates

**Kinetics:** Study of reaction rates and mechanisms

**Reaction rate:** How fast reactants convert to products
- Measured by change in concentration over time
- Units: M/s (molarity per second) or similar

**Why study kinetics?**
- Control reaction speed (industrial processes)
- Understand reaction mechanisms
- Optimize conditions (temperature, catalysts)
- Predict product formation rates

**Key distinction:**
- **Thermodynamics:** Will a reaction occur? (ΔG)
- **Kinetics:** How fast will it occur? (rate)

**Example:** Diamond → Graphite
- Thermodynamically favorable (ΔG < 0)
- Kinetically very slow (rate ≈ 0)
- That's why diamonds last "forever"

## Expressing Reaction Rate

### For General Reaction: aA + bB → cC + dD

**Rate definitions:**

**Rate of disappearance (reactants):**

$$\\text{Rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[B]}{\\Delta t}$$

**Rate of appearance (products):**

$$\\text{Rate} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta[D]}{\\Delta t}$$

**Why negative for reactants?** 
- [A] decreases, so Δ[A] < 0
- Negative sign makes rate positive

**Why divide by coefficients?**
- Makes rate same regardless of which species measured
- Accounts for stoichiometry

### Example: 2N₂O₅ → 4NO₂ + O₂

**All these express the same rate:**

$$\\text{Rate} = -\\frac{1}{2}\\frac{\\Delta[N_2O_5]}{\\Delta t} = +\\frac{1}{4}\\frac{\\Delta[NO_2]}{\\Delta t} = +\\frac{\\Delta[O_2]}{\\Delta t}$$

**If O₂ appears at 0.10 M/s:**

$$\\text{Rate} = +\\frac{\\Delta[O_2]}{\\Delta t} = 0.10 \\text{ M/s}$$

**Then:**

$$\\frac{\\Delta[NO_2]}{\\Delta t} = 4 \\times 0.10 = 0.40 \\text{ M/s}$$

$$\\frac{\\Delta[N_2O_5]}{\\Delta t} = -2 \\times 0.10 = -0.20 \\text{ M/s}$$

**Note:** NO₂ forms 4 times faster than O₂ (stoichiometry)

## Instantaneous vs Average Rate

### Average Rate

**Over time interval Δt:**

$$\\text{Average rate} = \\frac{\\Delta[A]}{\\Delta t} = \\frac{[A]_2 - [A]_1}{t_2 - t_1}$$

**Example:** If [A] goes from 1.0 M to 0.6 M in 20 seconds:

$$\\text{Average rate} = \\frac{0.6 - 1.0}{20 - 0} = \\frac{-0.4}{20} = -0.02 \\text{ M/s}$$

### Instantaneous Rate

**Rate at specific moment:**

$$\\text{Instantaneous rate} = \\frac{d[A]}{dt}$$

**Found by:**
- Tangent to concentration vs time curve
- Slope at that instant
- Derivative (calculus)

**Rate typically decreases over time:**
- Fast at start (high [reactants])
- Slows as reactants consumed
- Eventually approaches zero

### Initial Rate

**Rate at t = 0:**

$$\\text{Initial rate} = \\left(\\frac{d[A]}{dt}\\right)_{t=0}$$

**Why useful?**
- Before significant reverse reaction
- Simplifies analysis
- Used to determine rate law experimentally

## Rate Law (Rate Equation)

**Rate law:** Equation relating rate to concentrations

**General form:**

$$\\text{Rate} = k[A]^m[B]^n$$

**Where:**
- **k** = rate constant (specific to reaction and temperature)
- **[A], [B]** = molar concentrations
- **m, n** = reaction orders (exponents)

**Key points:**
- Rate law must be determined experimentally
- Cannot be predicted from balanced equation
- Exponents usually 0, 1, or 2 (can be fractional)

### Rate Constant (k)

**Units depend on overall order:**

**Zero order:** M/s or M·s⁻¹

**First order:** s⁻¹ or 1/s

**Second order:** M⁻¹·s⁻¹ or 1/(M·s)

**Third order:** M⁻²·s⁻¹

**Temperature dependence:**
- k increases with temperature
- Related by Arrhenius equation (later)

### Reaction Order

**Order with respect to reactant:**
- Exponent in rate law
- How rate depends on that concentration

**Example:** Rate = k[A]²[B]
- Order with respect to A: 2 (second order in A)
- Order with respect to B: 1 (first order in B)

**Overall order:**
- Sum of all exponents
- Example above: 2 + 1 = 3 (third order overall)

## Determining Reaction Order

**Cannot determine from balanced equation!**

**Must use experimental data:**

### Method 1: Initial Rates Method

**Procedure:**
1. Run multiple experiments
2. Vary one reactant concentration at a time
3. Measure initial rate for each
4. Compare how rate changes

**Analysis:**

**If [A] doubles and rate doubles:**
- Rate ∝ [A]¹
- First order in A

**If [A] doubles and rate quadruples (×4):**
- Rate ∝ [A]²
- Second order in A

**If [A] doubles and rate unchanged:**
- Rate ∝ [A]⁰
- Zero order in A

**General rule:**

If [A] changes by factor *f*, rate changes by factor *f^m*:

$$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\left(\\frac{[A]_2}{[A]_1}\\right)^m = f^m$$

**Solve for m:**

$$m = \\frac{\\log(\\text{rate}_2/\\text{rate}_1)}{\\log([A]_2/[A]_1)}$$

### Method 2: Graphical Method (Integrated Rate Laws)

**Use integrated rate laws** (covered in next topic):
- Zero order: [A] vs t is linear
- First order: ln[A] vs t is linear
- Second order: 1/[A] vs t is linear

**Plot data, see which is linear**

## Reaction Order Types

### Zero Order in Reactant

**Rate law:** Rate = k[A]⁰ = k

**Characteristics:**
- Rate independent of [A]
- Rate constant over time (until A runs out)
- Graph [A] vs t: straight line, negative slope

**Example:**
- Surface-catalyzed reactions (surface saturated)
- Enzyme reactions (enzyme saturated)

**Integrated form:**

$$[A]_t = [A]_0 - kt$$

### First Order in Reactant

**Rate law:** Rate = k[A]¹ = k[A]

**Characteristics:**
- Rate proportional to [A]
- If [A] doubles, rate doubles
- Graph ln[A] vs t: straight line, slope = -k

**Example:**
- Radioactive decay
- Many decomposition reactions

**Integrated form:**

$$\\ln[A]_t = \\ln[A]_0 - kt$$

**Or:**

$$[A]_t = [A]_0 e^{-kt}$$

**Half-life (constant):**

$$t_{1/2} = \\frac{0.693}{k} = \\frac{\\ln 2}{k}$$

### Second Order in Reactant

**Rate law:** Rate = k[A]²

**Characteristics:**
- Rate proportional to [A]²
- If [A] doubles, rate quadruples
- Graph 1/[A] vs t: straight line, slope = k

**Example:**
- Some gas-phase reactions
- Dimerization reactions

**Integrated form:**

$$\\frac{1}{[A]_t} = \\frac{1}{[A]_0} + kt$$

**Half-life (not constant):**

$$t_{1/2} = \\frac{1}{k[A]_0}$$

**Depends on initial concentration!**

## Mixed Orders

**Different orders for different reactants:**

**Example:** Rate = k[A]²[B]

- Second order in A
- First order in B
- Third order overall

**To determine each order:**
- Vary [A] while keeping [B] constant
- Vary [B] while keeping [A] constant
- Use initial rates method

## Summary Table: Reaction Orders

| Order | Rate Law | Linear Plot | Half-life | Units of k |
|-------|----------|-------------|-----------|------------|
| **0** | Rate = k | [A] vs t | t₁/₂ = [A]₀/(2k) | M·s⁻¹ |
| **1** | Rate = k[A] | ln[A] vs t | t₁/₂ = 0.693/k | s⁻¹ |
| **2** | Rate = k[A]² | 1/[A] vs t | t₁/₂ = 1/(k[A]₀) | M⁻¹·s⁻¹ |

## Example: Initial Rates Data

**Reaction:** 2NO + O₂ → 2NO₂

**Experimental data:**

| Exp | [NO]₀ (M) | [O₂]₀ (M) | Initial Rate (M/s) |
|-----|-----------|-----------|-------------------|
| 1   | 0.010     | 0.010     | 2.5 × 10⁻⁵       |
| 2   | 0.020     | 0.010     | 1.0 × 10⁻⁴       |
| 3   | 0.010     | 0.020     | 5.0 × 10⁻⁵       |

**Determine rate law:**

**Compare Exp 1 and 2** ([O₂] constant):

$$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\frac{1.0 \\times 10^{-4}}{2.5 \\times 10^{-5}} = 4$$

$$\\frac{[NO]_2}{[NO]_1} = \\frac{0.020}{0.010} = 2$$

**Rate quadrupled when [NO] doubled:**

$$2^m = 4 \\implies m = 2$$

**Second order in NO**

**Compare Exp 1 and 3** ([NO] constant):

$$\\frac{\\text{rate}_3}{\\text{rate}_1} = \\frac{5.0 \\times 10^{-5}}{2.5 \\times 10^{-5}} = 2$$

$$\\frac{[O_2]_3}{[O_2]_1} = \\frac{0.020}{0.010} = 2$$

**Rate doubled when [O₂] doubled:**

$$2^n = 2 \\implies n = 1$$

**First order in O₂**

**Rate law:**

$$\\boxed{\\text{Rate} = k[NO]^2[O_2]}$$

**Overall order:** 2 + 1 = 3 (third order)

**Calculate k from Exp 1:**

$$k = \\frac{\\text{rate}}{[NO]^2[O_2]} = \\frac{2.5 \\times 10^{-5}}{(0.010)^2(0.010)}$$

$$k = \\frac{2.5 \\times 10^{-5}}{1.0 \\times 10^{-6}} = 2.5 \\times 10^1 = 25 \\text{ M}^{-2}\\text{s}^{-1}$$

## Factors Affecting Reaction Rate

### 1. Concentration

**Higher concentration → faster rate**
- More molecules
- More collisions
- Rate law quantifies this

### 2. Temperature

**Higher temperature → faster rate**
- Molecules move faster
- More energetic collisions
- More exceed activation energy
- Arrhenius equation quantifies

### 3. Surface Area

**Greater surface area → faster rate**
- For heterogeneous reactions
- More contact between phases
- Example: powder vs chunk

### 4. Catalysts

**Catalyst → faster rate**
- Lower activation energy
- Provides alternate pathway
- Not consumed
- Doesn't change equilibrium position

### 5. Nature of Reactants

**Ionic reactions:** Very fast (no bonds to break)

**Covalent reactions:** Slower (bonds must break)

**Example:**
- Ag⁺ + Cl⁻ → AgCl: instantaneous
- Organic reactions: may take hours/days

## Applications

### Industrial Processes

**Haber process (NH₃ synthesis):**
- High temperature (increases k)
- High pressure (increases [N₂], [H₂])
- Catalyst (Fe/Fe₃O₄)

### Pharmaceuticals

**Drug stability:**
- Rate of decomposition
- Shelf life predictions
- Storage temperature

### Environmental

**Atmospheric reactions:**
- Ozone depletion rates
- Pollutant degradation
- Climate modeling

### Food Chemistry

**Spoilage rates:**
- Temperature dependence (refrigeration)
- Preservatives (inhibitors)
- Oxidation rates

## Key Concepts Summary

1. **Rate = Δ[concentration]/Δt**
   - Negative for reactants
   - Positive for products
   - Divide by stoichiometric coefficient

2. **Rate law: Rate = k[A]^m[B]^n**
   - Determined experimentally
   - Exponents ≠ stoichiometric coefficients
   - k increases with temperature

3. **Reaction order:**
   - Zero: rate independent of [A]
   - First: rate ∝ [A]
   - Second: rate ∝ [A]²

4. **Initial rates method:**
   - Vary one reactant at a time
   - Compare rate changes
   - Determine orders

5. **Rate depends on:**
   - Concentration (rate law)
   - Temperature (Arrhenius)
   - Catalysts, surface area
`,
      exampleProblems: {
        create: [
          {
            question: 'For the reaction 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g), oxygen is consumed at a rate of 2.0 × 10⁻³ M/s. (a) What is the rate of the reaction? (b) At what rate is NO produced? (c) At what rate is NH₃ consumed?',
            solution: `**Solution:**

**Given reaction:**

$$\\ce{4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)}$$

**Given:** O₂ consumed at 2.0 × 10⁻³ M/s

**Note:** "Consumed" means disappearance, so Δ[O₂]/Δt is negative

---

## **(a) Rate of reaction**

**General rate expression:**

For reaction: aA + bB → cC + dD

$$\\text{Rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[B]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t} = +\\frac{1}{d}\\frac{\\Delta[D]}{\\Delta t}$$

**For our reaction:**

$$\\text{Rate} = -\\frac{1}{4}\\frac{\\Delta[NH_3]}{\\Delta t} = -\\frac{1}{5}\\frac{\\Delta[O_2]}{\\Delta t} = +\\frac{1}{4}\\frac{\\Delta[NO]}{\\Delta t} = +\\frac{1}{6}\\frac{\\Delta[H_2O]}{\\Delta t}$$

**Using O₂ term:**

**Given:** O₂ consumed at 2.0 × 10⁻³ M/s

$$\\frac{\\Delta[O_2]}{\\Delta t} = -2.0 \\times 10^{-3} \\text{ M/s}$$

**(Negative because O₂ is disappearing)**

**Calculate rate:**

$$\\text{Rate} = -\\frac{1}{5}\\frac{\\Delta[O_2]}{\\Delta t}$$

$$\\text{Rate} = -\\frac{1}{5}(-2.0 \\times 10^{-3})$$

$$\\text{Rate} = \\frac{2.0 \\times 10^{-3}}{5}$$

$$\\text{Rate} = 0.40 \\times 10^{-3} = 4.0 \\times 10^{-4} \\text{ M/s}$$

**Answer (a):**

$$\\boxed{\\text{Rate} = 4.0 \\times 10^{-4} \\text{ M/s}}$$

---

## **(b) Rate of NO production**

**Using rate expression:**

$$\\text{Rate} = +\\frac{1}{4}\\frac{\\Delta[NO]}{\\Delta t}$$

**Solve for Δ[NO]/Δt:**

$$\\frac{\\Delta[NO]}{\\Delta t} = 4 \\times \\text{Rate}$$

$$\\frac{\\Delta[NO]}{\\Delta t} = 4 \\times (4.0 \\times 10^{-4})$$

$$\\frac{\\Delta[NO]}{\\Delta t} = 16 \\times 10^{-4}$$

$$\\frac{\\Delta[NO]}{\\Delta t} = 1.6 \\times 10^{-3} \\text{ M/s}$$

**Answer (b):**

$$\\boxed{\\frac{\\Delta[NO]}{\\Delta t} = 1.6 \\times 10^{-3} \\text{ M/s}}$$

**Interpretation:** NO produced at 1.6 × 10⁻³ M/s (positive = production)

---

## **(c) Rate of NH₃ consumption**

**Using rate expression:**

$$\\text{Rate} = -\\frac{1}{4}\\frac{\\Delta[NH_3]}{\\Delta t}$$

**Solve for Δ[NH₃]/Δt:**

$$\\frac{\\Delta[NH_3]}{\\Delta t} = -4 \\times \\text{Rate}$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = -4 \\times (4.0 \\times 10^{-4})$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = -16 \\times 10^{-4}$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = -1.6 \\times 10^{-3} \\text{ M/s}$$

**Answer (c):**

$$\\boxed{\\frac{\\Delta[NH_3]}{\\Delta t} = -1.6 \\times 10^{-3} \\text{ M/s}}$$

**Or, stating as consumption rate (magnitude):**

$$\\boxed{\\text{NH}_3 \\text{ consumed at } 1.6 \\times 10^{-3} \\text{ M/s}}$$

---

## **Summary of Results**

| Species | Stoichiometric Coefficient | Rate of Change (M/s) | Type |
|---------|---------------------------|---------------------|------|
| NH₃ | 4 | -1.6 × 10⁻³ | Consumed |
| O₂ | 5 | -2.0 × 10⁻³ | Consumed (given) |
| NO | 4 | +1.6 × 10⁻³ | Produced |
| H₂O | 6 | +2.4 × 10⁻³ | Produced |
| **Reaction** | — | **4.0 × 10⁻⁴** | **Rate** |

---

## **Verification**

**Check stoichiometric relationships:**

**From balanced equation:** 4 NH₃ : 5 O₂ : 4 NO : 6 H₂O

**From our rates:**

$$\\frac{|\\Delta[NH_3]/\\Delta t|}{4} = \\frac{1.6 \\times 10^{-3}}{4} = 4.0 \\times 10^{-4}$$ ✓

$$\\frac{|\\Delta[O_2]/\\Delta t|}{5} = \\frac{2.0 \\times 10^{-3}}{5} = 4.0 \\times 10^{-4}$$ ✓

$$\\frac{|\\Delta[NO]/\\Delta t|}{4} = \\frac{1.6 \\times 10^{-3}}{4} = 4.0 \\times 10^{-4}$$ ✓

**All equal to the rate!** ✓

---

## **Key Insights**

**1. Stoichiometric relationships:**
- NH₃ and NO have same coefficient (4)
- Therefore consumed/produced at same rate
- Both: 1.6 × 10⁻³ M/s

**2. Ratio comparison:**

$$\\frac{\\Delta[NH_3]/\\Delta t}{\\Delta[O_2]/\\Delta t} = \\frac{-1.6 \\times 10^{-3}}{-2.0 \\times 10^{-3}} = \\frac{1.6}{2.0} = \\frac{4}{5}$$

**Matches stoichiometry:** 4 NH₃ : 5 O₂ ✓

**3. Why divide by coefficients?**
- Makes "rate of reaction" unique
- Same value regardless of which species you measure
- Accounts for stoichiometric ratios

**4. Sign conventions:**
- Reactants: negative Δ[]/Δt (decreasing)
- Products: positive Δ[]/Δt (increasing)
- Rate of reaction: always positive

---

## **Alternative approach:**

**Could also use ratios directly:**

**Given:** Δ[O₂]/Δt = -2.0 × 10⁻³ M/s

**Want:** Δ[NH₃]/Δt

**From stoichiometry:** 4 NH₃ consumed per 5 O₂

$$\\frac{\\Delta[NH_3]/\\Delta t}{\\Delta[O_2]/\\Delta t} = \\frac{4}{5}$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = \\frac{4}{5} \\times \\frac{\\Delta[O_2]}{\\Delta t}$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = \\frac{4}{5} \\times (-2.0 \\times 10^{-3})$$

$$\\frac{\\Delta[NH_3]}{\\Delta t} = -1.6 \\times 10^{-3} \\text{ M/s}$$ ✓

**Same answer!**

---

## **This is the Ostwald process:**

**Industrial production of nitric acid:**

**Step 1:** 4NH₃ + 5O₂ → 4NO + 6H₂O (this reaction)

**Step 2:** 2NO + O₂ → 2NO₂

**Step 3:** 3NO₂ + H₂O → 2HNO₃ + NO

**Used to make:**
- Fertilizers
- Explosives  
- Various chemicals

**Conditions:**
- High temperature (850-900°C)
- Platinum-rhodium catalyst
- Important industrial process`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'The following data were collected for the reaction: 2NO(g) + Cl₂(g) → 2NOCl(g). Determine (a) the rate law, (b) the value of k with units, (c) the rate when [NO] = 0.050 M and [Cl₂] = 0.020 M. | Exp | [NO]₀ (M) | [Cl₂]₀ (M) | Initial Rate (M/s) | |-----|-----------|-----------|-------------------| | 1   | 0.10      | 0.10      | 0.18             | | 2   | 0.10      | 0.20      | 0.36             | | 3   | 0.20      | 0.20      | 1.44             |',
            solution: `**Solution:**

**Given reaction:**

$$\\ce{2NO(g) + Cl2(g) -> 2NOCl(g)}$$

**Data table:**

| Exp | [NO]₀ (M) | [Cl₂]₀ (M) | Initial Rate (M/s) |
|-----|-----------|-----------|-------------------|
| 1   | 0.10      | 0.10      | 0.18             |
| 2   | 0.10      | 0.20      | 0.36             |
| 3   | 0.20      | 0.20      | 1.44             |

**General rate law form:**

$$\\text{Rate} = k[NO]^m[Cl_2]^n$$

**Need to find:** m, n, k

---

## **(a) Determine rate law**

### **Find order with respect to Cl₂ (n):**

**Compare Exp 1 and 2** (keep [NO] constant, vary [Cl₂])

**Set up ratio:**

$$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\frac{k[NO]_2^m[Cl_2]_2^n}{k[NO]_1^m[Cl_2]_1^n}$$

**Since [NO] is same in both:**

$$\\frac{\\text{rate}_2}{\\text{rate}_1} = \\frac{[Cl_2]_2^n}{[Cl_2]_1^n} = \\left(\\frac{[Cl_2]_2}{[Cl_2]_1}\\right)^n$$

**Substitute values:**

$$\\frac{0.36}{0.18} = \\left(\\frac{0.20}{0.10}\\right)^n$$

$$2 = 2^n$$

$$n = 1$$

**First order in Cl₂**

---

### **Find order with respect to NO (m):**

**Compare Exp 2 and 3** (keep [Cl₂] constant, vary [NO])

**Set up ratio:**

$$\\frac{\\text{rate}_3}{\\text{rate}_2} = \\frac{k[NO]_3^m[Cl_2]_3^n}{k[NO]_2^m[Cl_2]_2^n}$$

**Since [Cl₂] is same in both:**

$$\\frac{\\text{rate}_3}{\\text{rate}_2} = \\frac{[NO]_3^m}{[NO]_2^m} = \\left(\\frac{[NO]_3}{[NO]_2}\\right)^m$$

**Substitute values:**

$$\\frac{1.44}{0.36} = \\left(\\frac{0.20}{0.10}\\right)^m$$

$$4 = 2^m$$

$$2^2 = 2^m$$

$$m = 2$$

**Second order in NO**

---

### **Rate law:**

$$\\boxed{\\text{Rate} = k[NO]^2[Cl_2]}$$

**Orders:**
- With respect to NO: 2 (second order)
- With respect to Cl₂: 1 (first order)
- Overall: 2 + 1 = 3 (third order)

---

## **(b) Calculate k with units**

**Use any experiment; let's use Exp 1:**

$$\\text{Rate} = k[NO]^2[Cl_2]$$

**Solve for k:**

$$k = \\frac{\\text{Rate}}{[NO]^2[Cl_2]}$$

**Substitute values from Exp 1:**

$$k = \\frac{0.18}{(0.10)^2(0.10)}$$

$$k = \\frac{0.18}{(0.01)(0.10)}$$

$$k = \\frac{0.18}{0.001}$$

$$k = 180$$

---

### **Determine units of k:**

**From rate equation:**

$$\\text{Rate (M/s)} = k[NO]^2[Cl_2]$$

$$\\text{M/s} = k \\times \\text{M}^2 \\times \\text{M}$$

$$\\text{M/s} = k \\times \\text{M}^3$$

**Solve for units of k:**

$$k = \\frac{\\text{M/s}}{\\text{M}^3} = \\frac{\\text{M}}{\\text{s} \\cdot \\text{M}^3} = \\frac{1}{\\text{M}^2 \\cdot \\text{s}} = \\text{M}^{-2}\\text{s}^{-1}$$

**Answer (b):**

$$\\boxed{k = 180 \\text{ M}^{-2}\\text{s}^{-1}}$$

**Or equivalently:** k = 180 L²·mol⁻²·s⁻¹

---

### **Verify with other experiments:**

**Check with Exp 2:**

$$k = \\frac{0.36}{(0.10)^2(0.20)} = \\frac{0.36}{0.002} = 180$$ ✓

**Check with Exp 3:**

$$k = \\frac{1.44}{(0.20)^2(0.20)} = \\frac{1.44}{0.008} = 180$$ ✓

**Consistent!** ✓

---

## **(c) Calculate rate at [NO] = 0.050 M, [Cl₂] = 0.020 M**

**Use rate law with k = 180 M⁻²s⁻¹:**

$$\\text{Rate} = k[NO]^2[Cl_2]$$

$$\\text{Rate} = 180 \\times (0.050)^2 \\times (0.020)$$

**Calculate (0.050)²:**

$$(0.050)^2 = 0.0025$$

**Calculate rate:**

$$\\text{Rate} = 180 \\times 0.0025 \\times 0.020$$

$$\\text{Rate} = 180 \\times 0.000050$$

$$\\text{Rate} = 0.0090 \\text{ M/s}$$

$$\\text{Rate} = 9.0 \\times 10^{-3} \\text{ M/s}$$

**Answer (c):**

$$\\boxed{\\text{Rate} = 9.0 \\times 10^{-3} \\text{ M/s} \\text{ or } 0.0090 \\text{ M/s}}$$

---

## **Summary of Results**

| Question | Answer |
|----------|--------|
| **(a) Rate law** | Rate = k[NO]²[Cl₂] |
| **(b) Rate constant** | k = 180 M⁻²s⁻¹ |
| **(c) Rate at given [NO], [Cl₂]** | 9.0 × 10⁻³ M/s |

---

## **Key Observations**

### **1. Rate law vs stoichiometry:**

**Balanced equation:** 2NO + Cl₂ → 2NOCl

**Rate law:** Rate = k[NO]²[Cl₂]

**Notice:**
- Exponent for NO: 2 (matches coefficient)
- Exponent for Cl₂: 1 (matches coefficient)

**This is coincidental!** 
- Rate law determined experimentally
- Sometimes matches, sometimes doesn't
- Never assume exponents = coefficients

### **2. Reaction order interpretation:**

**Second order in NO:**
- If [NO] doubles, rate quadruples
- NO concentration has large effect
- Suggests 2 NO molecules in rate-determining step

**First order in Cl₂:**
- If [Cl₂] doubles, rate doubles
- Linear dependence
- Suggests 1 Cl₂ molecule in rate-determining step

**Third order overall:**
- Complex reaction
- Likely multi-step mechanism
- Rate-determining step involves 2 NO + 1 Cl₂

### **3. Initial rates method steps:**

**Step 1:** Identify pairs where only one concentration varies

**Step 2:** Set up rate ratio equation

**Step 3:** Concentrations constant cancel out

**Step 4:** Solve for exponent

**Step 5:** Repeat for each reactant

**Step 6:** Calculate k from any experiment

**Step 7:** Verify k consistent across all experiments

---

## **Units of k for different orders:**

| Overall Order | Units of k |
|---------------|------------|
| 0 | M·s⁻¹ |
| 1 | s⁻¹ |
| 2 | M⁻¹·s⁻¹ |
| 3 | M⁻²·s⁻¹ |
| n | M¹⁻ⁿ·s⁻¹ |

**Our reaction:** Order = 3, so k has units M⁻²·s⁻¹ ✓

---

## **Real-world context:**

**This reaction:**
- Gas-phase radical reaction
- Studied extensively for mechanism
- Shows typical behavior for NO reactions

**Proposed mechanism:**

**Step 1 (fast equilibrium):**

$$\\ce{NO + Cl2 <=> NOCl2}$$

**Step 2 (slow, rate-determining):**

$$\\ce{NOCl2 + NO -> 2NOCl}$$

**Overall:** 2NO + Cl₂ → 2NOCl ✓

**Rate-determining step involves:**
- 1 NOCl₂ (which comes from 1 NO + 1 Cl₂)
- 1 NO
- Total: 2 NO + 1 Cl₂

**This explains the rate law:** Rate = k[NO]²[Cl₂] ✓

---

## **Practice tip:**

**When doing initial rates problems:**

1. ✓ Organize data in table
2. ✓ Find pairs where only ONE concentration changes
3. ✓ Set up ratio (things that don't change cancel)
4. ✓ Solve for exponent
5. ✓ Calculate k from any experiment
6. ✓ Check k is same for all experiments
7. ✓ Pay attention to units!`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The decomposition of hydrogen peroxide is first order: 2H₂O₂(aq) → 2H₂O(l) + O₂(g). At 20°C, k = 1.8 × 10⁻⁵ s⁻¹. (a) If the initial concentration is 0.30 M, what will be the concentration after 1.0 hour? (b) How long will it take for the concentration to drop from 0.30 M to 0.10 M? (c) What is the half-life of this reaction?',
            solution: `**Solution:**

**Given:**
- Reaction: 2H₂O₂(aq) → 2H₂O(l) + O₂(g)
- Order: First order
- k = 1.8 × 10⁻⁵ s⁻¹ at 20°C
- [H₂O₂]₀ = 0.30 M

**First order integrated rate law:**

$$\\ln[A]_t = \\ln[A]_0 - kt$$

**Or:**

$$[A]_t = [A]_0 e^{-kt}$$

---

## **(a) Concentration after 1.0 hour**

**Given:**
- t = 1.0 hour
- [H₂O₂]₀ = 0.30 M

**Convert time to seconds:**

$$t = 1.0 \\text{ hour} \\times \\frac{60 \\text{ min}}{1 \\text{ hour}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} = 3600 \\text{ s}$$

**Use integrated rate law:**

$$\\ln[H_2O_2]_t = \\ln[H_2O_2]_0 - kt$$

**Substitute values:**

$$\\ln[H_2O_2]_t = \\ln(0.30) - (1.8 \\times 10^{-5})(3600)$$

**Calculate each term:**

$$\\ln(0.30) = -1.204$$

$$(1.8 \\times 10^{-5})(3600) = 0.0648$$

**Substitute:**

$$\\ln[H_2O_2]_t = -1.204 - 0.0648$$

$$\\ln[H_2O_2]_t = -1.269$$

**Take exponential:**

$$[H_2O_2]_t = e^{-1.269}$$

$$[H_2O_2]_t = 0.281 \\text{ M}$$

**Answer (a):**

$$\\boxed{[H_2O_2]_t = 0.28 \\text{ M}}$$

---

### **Alternative method using exponential form:**

$$[H_2O_2]_t = [H_2O_2]_0 e^{-kt}$$

$$[H_2O_2]_t = 0.30 \\times e^{-(1.8 \\times 10^{-5})(3600)}$$

$$[H_2O_2]_t = 0.30 \\times e^{-0.0648}$$

$$e^{-0.0648} = 0.937$$

$$[H_2O_2]_t = 0.30 \\times 0.937 = 0.281 \\text{ M}$$

**Same answer!** ✓

---

### **Interpretation:**

- **Initial:** 0.30 M
- **After 1 hour:** 0.28 M
- **Decrease:** 0.02 M (about 6.3% decomposed)
- **Very slow reaction** at 20°C without catalyst

---

## **(b) Time to drop from 0.30 M to 0.10 M**

**Given:**
- [H₂O₂]₀ = 0.30 M
- [H₂O₂]_t = 0.10 M
- Find: t

**Use integrated rate law:**

$$\\ln[H_2O_2]_t = \\ln[H_2O_2]_0 - kt$$

**Rearrange to solve for t:**

$$kt = \\ln[H_2O_2]_0 - \\ln[H_2O_2]_t$$

$$kt = \\ln\\left(\\frac{[H_2O_2]_0}{[H_2O_2]_t}\\right)$$

$$t = \\frac{1}{k}\\ln\\left(\\frac{[H_2O_2]_0}{[H_2O_2]_t}\\right)$$

**Substitute values:**

$$t = \\frac{1}{1.8 \\times 10^{-5}}\\ln\\left(\\frac{0.30}{0.10}\\right)$$

$$t = \\frac{1}{1.8 \\times 10^{-5}}\\ln(3.0)$$

**Calculate ln(3.0):**

$$\\ln(3.0) = 1.099$$

**Calculate t:**

$$t = \\frac{1.099}{1.8 \\times 10^{-5}}$$

$$t = 6.106 \\times 10^4 \\text{ s}$$

$$t = 61,060 \\text{ s}$$

**Convert to hours:**

$$t = 61,060 \\text{ s} \\times \\frac{1 \\text{ min}}{60 \\text{ s}} \\times \\frac{1 \\text{ hour}}{60 \\text{ min}}$$

$$t = \\frac{61,060}{3600} \\text{ hours}$$

$$t = 16.96 \\text{ hours} \\approx 17 \\text{ hours}$$

**Answer (b):**

$$\\boxed{t = 6.1 \\times 10^4 \\text{ s} \\text{ or } 17 \\text{ hours}}$$

---

### **Interpretation:**

- To drop from 0.30 M to 0.10 M takes 17 hours
- Concentration reduced to 1/3 of original
- Much longer than 1 hour (part a)
- Shows exponential decay nature

---

## **(c) Half-life**

**For first-order reactions, half-life is constant:**

$$t_{1/2} = \\frac{0.693}{k} = \\frac{\\ln 2}{k}$$

**Substitute k:**

$$t_{1/2} = \\frac{0.693}{1.8 \\times 10^{-5}}$$

$$t_{1/2} = 3.85 \\times 10^4 \\text{ s}$$

**Convert to hours:**

$$t_{1/2} = \\frac{3.85 \\times 10^4}{3600} \\text{ hours}$$

$$t_{1/2} = 10.7 \\text{ hours}$$

**Answer (c):**

$$\\boxed{t_{1/2} = 3.85 \\times 10^4 \\text{ s} \\text{ or } 10.7 \\text{ hours}}$$

---

### **Verification using half-life:**

**After one half-life (10.7 hours):**
- [H₂O₂] drops from 0.30 M to 0.15 M

**After two half-lives (21.4 hours):**
- [H₂O₂] drops from 0.15 M to 0.075 M

**To go from 0.30 M to 0.10 M:**

$$\\frac{0.30}{0.10} = 3 = 2^{1.585}$$

**So time needed:**

$$t = 1.585 \\times t_{1/2} = 1.585 \\times 10.7 = 17.0 \\text{ hours}$$

**Matches part (b)!** ✓

---

## **Summary Table**

| Part | Question | Answer |
|------|----------|--------|
| **(a)** | [H₂O₂] after 1.0 hour | 0.28 M |
| **(b)** | Time: 0.30 M → 0.10 M | 6.1 × 10⁴ s (17 hours) |
| **(c)** | Half-life | 3.85 × 10⁴ s (10.7 hours) |

---

## **Key Concepts Illustrated**

### **1. First-order characteristics:**

**Constant half-life:**
- t₁/₂ = 10.7 hours (independent of concentration)
- After each 10.7 hours, concentration halves
- Exponential decay pattern

**Linear ln[A] vs t:**
- If plotted, would give straight line
- Slope = -k
- Intercept = ln[A]₀

### **2. Time conversions:**

**Always check units!**
- k given in s⁻¹
- Time must be in seconds
- Convert hours → seconds for calculations
- Can convert back to hours for answer

### **3. Integrated rate law applications:**

**Forward calculation (given t, find [A]):**
- Use: ln[A]_t = ln[A]₀ - kt
- Or: [A]_t = [A]₀e^(-kt)

**Reverse calculation (given [A], find t):**
- Rearrange: t = (1/k)ln([A]₀/[A]_t)

**Half-life:**
- Special case: [A]_t = [A]₀/2
- Gives: t₁/₂ = ln(2)/k = 0.693/k

---

## **Real-world context:**

**H₂O₂ decomposition:**

**Storage:**
- Brown bottles (blocks light)
- Light catalyzes decomposition
- Cool, dark place preferred

**Catalysts:**
- MnO₂: very fast decomposition
- Enzymes (catalase): extremely fast
- Used to demonstrate catalysis

**Applications:**
- Bleaching agent
- Disinfectant
- Rocket propellant (concentrated)
- Must monitor concentration over time

**Medical use:**
- 3% solution (drugstore)
- Slow decomposition allows storage
- Eventually loses potency (O₂ escapes)

---

## **Graphical representation:**

**Concentration vs time:**
- Exponential decay curve
- Starts at 0.30 M
- Asymptotically approaches 0
- After 10.7 h: 0.15 M
- After 21.4 h: 0.075 M

**ln[H₂O₂] vs time:**
- Straight line
- Slope = -k = -1.8 × 10⁻⁵ s⁻¹
- Useful for determining if reaction is first order

---

## **Practice tips:**

**For first-order problems:**

1. ✓ Identify it's first order (given or determined)
2. ✓ Use ln[A]_t = ln[A]₀ - kt
3. ✓ Check time units match k units
4. ✓ For half-life: t₁/₂ = 0.693/k (constant!)
5. ✓ Remember ln(a/b) = ln(a) - ln(b)
6. ✓ Calculator: ln is natural log (base e)

**Common mistakes:**
- ✗ Using log instead of ln
- ✗ Mixing time units (hours vs seconds)
- ✗ Forgetting negative sign in rate law
- ✗ Using wrong integrated rate law for order`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', ratesTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: ratesTopic.id,
        front: 'What is reaction rate and how is it expressed for the general reaction aA + bB → cC + dD?',
        back: 'Change in concentration over time. Rate = -(1/a)Δ[A]/Δt = -(1/b)Δ[B]/Δt = +(1/c)Δ[C]/Δt = +(1/d)Δ[D]/Δt. Negative for reactants (decreasing), positive for products (increasing), divide by coefficient.'
      },
      {
        topicId: ratesTopic.id,
        front: 'What is a rate law and what are its key features?',
        back: 'Rate = k[A]^m[B]^n. k = rate constant (temperature dependent). m, n = reaction orders (must be determined experimentally). Exponents NOT equal to stoichiometric coefficients. Shows how rate depends on concentrations.'
      },
      {
        topicId: ratesTopic.id,
        front: 'How do you determine reaction order using the initial rates method?',
        back: 'Run experiments varying one reactant at a time. Compare: if [A] doubles and rate doubles → first order. If rate quadruples → second order. If rate unchanged → zero order. Use ratio: rate₂/rate₁ = ([A]₂/[A]₁)^m.'
      },
      {
        topicId: ratesTopic.id,
        front: 'What are the characteristics of zero, first, and second order reactions?',
        back: 'Zero: Rate = k (independent of [A]), linear [A] vs t. First: Rate = k[A], linear ln[A] vs t, constant t₁/₂ = 0.693/k. Second: Rate = k[A]², linear 1/[A] vs t, t₁/₂ = 1/(k[A]₀).'
      },
      {
        topicId: ratesTopic.id,
        front: 'What are the units of k for different overall reaction orders?',
        back: 'Zero order: M·s⁻¹. First order: s⁻¹. Second order: M⁻¹·s⁻¹. Third order: M⁻²·s⁻¹. General: M^(1-n)·s⁻¹ where n = overall order.'
      },
      {
        topicId: ratesTopic.id,
        front: 'What is the integrated rate law for first order reactions and what is special about half-life?',
        back: 'ln[A]_t = ln[A]₀ - kt or [A]_t = [A]₀e^(-kt). Half-life: t₁/₂ = 0.693/k = ln(2)/k. Half-life is CONSTANT (independent of concentration), unique to first order.'
      },
      {
        topicId: ratesTopic.id,
        front: 'What factors affect reaction rate?',
        back: '1) Concentration (rate law), 2) Temperature (Arrhenius), 3) Surface area (heterogeneous), 4) Catalysts (lower Ea), 5) Nature of reactants (ionic fast, covalent slower).'
      },
      {
        topicId: ratesTopic.id,
        front: 'What is the difference between average rate and instantaneous rate?',
        back: 'Average rate: Δ[A]/Δt over time interval (secant line). Instantaneous rate: d[A]/dt at specific moment (tangent to curve, derivative). Rate typically decreases over time as reactants consumed. Initial rate: rate at t=0.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', ratesTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Kinetics (Part 1)!');
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
