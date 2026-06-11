import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Chemical Reactions (Part 2)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Chemical Reactions category
  const reactionsCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Chemical Reactions'
    }
  });

  if (!reactionsCategory) {
    throw new Error('Chemical Reactions category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: reactionsCategory.id }
  });

  // Topic 2: Stoichiometry and Limiting Reactants
  const stoichiometryTopic = await prisma.topic.create({
    data: {
      title: 'Stoichiometry and Limiting Reactants',
      slug: 'stoichiometry-limiting-reactants',
      description: 'Master stoichiometric calculations, mole ratios, limiting reactants, theoretical yield, percent yield, and solution stoichiometry.',
      order: existingTopics + 1,
      categoryId: reactionsCategory.id,
      isPremium: false,
      textContent: `
# Stoichiometry and Limiting Reactants

## Introduction to Stoichiometry

**Stoichiometry:** The quantitative study of reactants and products in chemical reactions

**From Greek:**
- *stoicheion* = "element"
- *metron* = "measure"

**What stoichiometry tells us:**
- How much product forms from given reactants
- How much reactant needed to make desired product
- Which reactant limits the reaction
- Theoretical vs. actual yield

**Foundation:** Balanced chemical equations

## Mole Ratios from Balanced Equations

**Balanced equation provides mole ratios**

**Example:**

$$\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$$

**Mole ratios:**
- 1 mol N₂ : 3 mol H₂
- 1 mol N₂ : 2 mol NH₃
- 3 mol H₂ : 2 mol NH₃

**These ratios are exact (not measured)**
- Can have infinite sig figs
- Used as conversion factors

**Interpretation:**
- 1 mole of N₂ reacts with 3 moles of H₂
- 1 mole of N₂ produces 2 moles of NH₃
- 3 moles of H₂ produce 2 moles of NH₃

**Key concept:** Coefficients give mole-to-mole relationships

## Basic Stoichiometry Calculations

### Mass-to-Mass Calculations

**Problem type:** Given mass of reactant, find mass of product

**General strategy:**

$$\\text{Mass A} \\xrightarrow{\\text{÷ Molar mass}} \\text{Moles A} \\xrightarrow{\\text{Mole ratio}} \\text{Moles B} \\xrightarrow{\\text{× Molar mass}} \\text{Mass B}$$

**Example:**

How many grams of NH₃ can be produced from 28.0 g of N₂?

$$\\ce{N2 + 3H2 -> 2NH3}$$

**Step 1:** Convert mass N₂ to moles

$$n_{N_2} = \\frac{28.0 \\text{ g}}{28.0 \\text{ g/mol}} = 1.00 \\text{ mol N}_2$$

**Step 2:** Use mole ratio to find moles NH₃

$$n_{NH_3} = 1.00 \\text{ mol N}_2 \\times \\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2} = 2.00 \\text{ mol NH}_3$$

**Step 3:** Convert moles NH₃ to mass

$$\\text{mass}_{NH_3} = 2.00 \\text{ mol} \\times 17.0 \\text{ g/mol} = 34.0 \\text{ g}$$

**Answer: 34.0 g NH₃**

### Mole-to-Mole Calculations

**Simplest type:** Already have moles

**Example:**

How many moles of O₂ needed to react with 5.0 mol glucose?

$$\\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O}$$

**Solution:**

$$n_{O_2} = 5.0 \\text{ mol C}_6\\text{H}_{12}\\text{O}_6 \\times \\frac{6 \\text{ mol O}_2}{1 \\text{ mol C}_6\\text{H}_{12}\\text{O}_6} = 30 \\text{ mol O}_2$$

**Answer: 30 mol O₂**

### Mass-to-Particles Calculations

**Use Avogadro's number:** $N_A = 6.022 \\times 10^{23}$ particles/mol

**Example:**

How many molecules of H₂O form from 9.0 g H₂?

$$\\ce{2H2 + O2 -> 2H2O}$$

**Step 1:** Moles H₂

$$n_{H_2} = \\frac{9.0 \\text{ g}}{2.0 \\text{ g/mol}} = 4.5 \\text{ mol}$$

**Step 2:** Moles H₂O

$$n_{H_2O} = 4.5 \\text{ mol H}_2 \\times \\frac{2 \\text{ mol H}_2\\text{O}}{2 \\text{ mol H}_2} = 4.5 \\text{ mol}$$

**Step 3:** Convert to molecules

$$N = 4.5 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol} = 2.7 \\times 10^{24} \\text{ molecules}$$

**Answer: $2.7 \\times 10^{24}$ molecules H₂O**

## Limiting Reactants

**Limiting reactant:** Reactant that is completely consumed first, limiting the amount of product

**Excess reactant:** Reactant that remains after the reaction stops

**Analogy: Making sandwiches**
- 10 slices bread + 6 slices cheese
- 1 sandwich needs 2 bread + 1 cheese
- Can make only 5 sandwiches (limited by bread)
- Bread = limiting reactant
- Cheese = excess (1 slice left over)

### Identifying Limiting Reactant

**Method 1: Calculate product from each reactant**

**Compare:** Which reactant produces **less** product?
- That reactant is **limiting**

**Example:**

$$\\ce{2Al + 3Cl2 -> 2AlCl3}$$

Given: 5.0 mol Al and 6.0 mol Cl₂

**From Al:**

$$n_{AlCl_3} = 5.0 \\text{ mol Al} \\times \\frac{2 \\text{ mol AlCl}_3}{2 \\text{ mol Al}} = 5.0 \\text{ mol AlCl}_3$$

**From Cl₂:**

$$n_{AlCl_3} = 6.0 \\text{ mol Cl}_2 \\times \\frac{2 \\text{ mol AlCl}_3}{3 \\text{ mol Cl}_2} = 4.0 \\text{ mol AlCl}_3$$

**Cl₂ produces less product → Cl₂ is limiting reactant**

**Al is in excess**

**Actual product formed: 4.0 mol AlCl₃** (limited by Cl₂)

**Method 2: Compare mole ratios**

**Calculate:** $\\frac{\\text{moles available}}{\\text{coefficient}}$ for each reactant

**Smallest ratio** → limiting reactant

**Example (same reaction):**

$$\\ce{2Al + 3Cl2 -> 2AlCl3}$$

Given: 5.0 mol Al and 6.0 mol Cl₂

**For Al:**

$$\\frac{5.0 \\text{ mol}}{2} = 2.5$$

**For Cl₂:**

$$\\frac{6.0 \\text{ mol}}{3} = 2.0$$

**Cl₂ has smaller ratio → Cl₂ is limiting** ✓

**Method 3: Calculate how much of one reactant is needed**

**Calculate:** How much of reactant B is needed to react with all of reactant A?

**Compare:** Available B vs. needed B
- If available < needed → B is limiting
- If available > needed → A is limiting

**Example (same reaction):**

Given: 5.0 mol Al and 6.0 mol Cl₂

**How much Cl₂ needed for all 5.0 mol Al?**

$$n_{Cl_2 \\text{ needed}} = 5.0 \\text{ mol Al} \\times \\frac{3 \\text{ mol Cl}_2}{2 \\text{ mol Al}} = 7.5 \\text{ mol Cl}_2$$

**Available Cl₂: 6.0 mol**
**Needed Cl₂: 7.5 mol**

**6.0 < 7.5** → Not enough Cl₂ → **Cl₂ is limiting** ✓

### Calculating Excess Reactant Remaining

**After reaction, how much excess reactant left?**

**Strategy:**
1. Use limiting reactant to find how much excess reactant consumed
2. Subtract consumed from initial amount

**Example:**

$$\\ce{2Al + 3Cl2 -> 2AlCl3}$$

Given: 5.0 mol Al, 6.0 mol Cl₂ (Cl₂ is limiting)

**How much Al remains?**

**Step 1:** How much Al consumed by 6.0 mol Cl₂?

$$n_{Al \\text{ used}} = 6.0 \\text{ mol Cl}_2 \\times \\frac{2 \\text{ mol Al}}{3 \\text{ mol Cl}_2} = 4.0 \\text{ mol Al}$$

**Step 2:** Calculate Al remaining

$$n_{Al \\text{ remaining}} = 5.0 \\text{ mol initial} - 4.0 \\text{ mol used} = 1.0 \\text{ mol Al}$$

**Answer: 1.0 mol Al remains (excess)**

## Theoretical, Actual, and Percent Yield

### Theoretical Yield

**Theoretical yield:** Maximum amount of product that can form from given reactants
- Calculated from stoichiometry
- Assumes 100% efficiency
- Based on limiting reactant

**Always use limiting reactant for theoretical yield!**

### Actual Yield

**Actual yield:** Amount of product actually obtained in lab
- Measured experimentally
- Always **less than** theoretical yield
- Due to side reactions, losses, incomplete reactions

### Percent Yield

**Percent yield:** Efficiency of reaction

$$\\text{Percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$

**Example:**

Theoretical yield: 50.0 g product
Actual yield: 42.5 g product

$$\\text{Percent yield} = \\frac{42.5 \\text{ g}}{50.0 \\text{ g}} \\times 100\\% = 85.0\\%$$

**Interpretation:** Reaction is 85% efficient

**Why actual < theoretical?**
1. **Side reactions:** Reactants form unwanted products
2. **Incomplete reactions:** Not all reactants convert to products
3. **Losses during purification:** Some product lost in transfer, filtering, etc.
4. **Impure reactants:** Starting materials not 100% pure

**Percent yield range:**
- 0-100% (cannot exceed 100% with pure products)
- Good lab technique: 80-95%
- Industrial processes often optimize for high percent yield

### Using Percent Yield

**If percent yield known, can calculate actual yield:**

$$\\text{Actual yield} = \\frac{\\text{percent yield}}{100} \\times \\text{theoretical yield}$$

**Example:**

If theoretical yield = 30.0 g and reaction is 75% efficient:

$$\\text{Actual yield} = \\frac{75}{100} \\times 30.0 \\text{ g} = 22.5 \\text{ g}$$

## Solution Stoichiometry

**For reactions in solution, use molarity**

**Molarity (M):**

$$M = \\frac{\\text{moles solute}}{\\text{liters solution}}$$

**Rearranged:**

$$\\text{moles} = M \\times V_{\\text{liters}}$$

### Strategy for Solution Stoichiometry

**Given volumes and molarities, find product:**

1. **Calculate moles** of each reactant: $n = M \\times V$
2. **Identify limiting reactant**
3. **Use stoichiometry** to find product moles
4. **Convert to mass** (if needed) or **molarity** (if in solution)

**Example:**

$$\\ce{2AgNO3(aq) + CaCl2(aq) -> 2AgCl(s) + Ca(NO3)2(aq)}$$

Mix 50.0 mL of 0.200 M AgNO₃ with 30.0 mL of 0.100 M CaCl₂

**How many grams of AgCl precipitate?**

**Step 1:** Calculate moles of reactants

$$n_{AgNO_3} = 0.200 \\text{ M} \\times 0.0500 \\text{ L} = 0.0100 \\text{ mol}$$

$$n_{CaCl_2} = 0.100 \\text{ M} \\times 0.0300 \\text{ L} = 0.00300 \\text{ mol}$$

**Step 2:** Identify limiting reactant

**From AgNO₃:**

$$n_{AgCl} = 0.0100 \\text{ mol AgNO}_3 \\times \\frac{2 \\text{ mol AgCl}}{2 \\text{ mol AgNO}_3} = 0.0100 \\text{ mol}$$

**From CaCl₂:**

$$n_{AgCl} = 0.00300 \\text{ mol CaCl}_2 \\times \\frac{2 \\text{ mol AgCl}}{1 \\text{ mol CaCl}_2} = 0.00600 \\text{ mol}$$

**CaCl₂ produces less → CaCl₂ is limiting**

**Step 3:** Calculate mass of AgCl

$$\\text{mass} = 0.00600 \\text{ mol} \\times 143.5 \\text{ g/mol} = 0.861 \\text{ g AgCl}$$

**Answer: 0.861 g AgCl precipitates**

## Consecutive Reactions

**Sometimes reactions occur in sequence**

**Product of first reaction → reactant for second reaction**

**Example:**

$$\\ce{S(s) + O2(g) -> SO2(g)}$$ (Reaction 1)

$$\\ce{2SO2(g) + O2(g) -> 2SO3(g)}$$ (Reaction 2)

**If given amount of S, find SO₃:**

**Strategy:** Chain the stoichiometry

$$\\text{S} \\xrightarrow{\\text{Reaction 1}} \\text{SO}_2 \\xrightarrow{\\text{Reaction 2}} \\text{SO}_3$$

**Use mole ratios from both equations**

## Summary of Stoichiometry Steps

**General problem-solving strategy:**

1. **Write balanced equation**
   - Double-check coefficients

2. **Convert given to moles**
   - Use molar mass (g → mol)
   - Use molarity × volume (M × L → mol)
   - Use Avogadro's number (particles → mol)

3. **Identify limiting reactant** (if multiple reactants given)
   - Calculate product from each reactant
   - Smallest product → that reactant is limiting
   - OR use ratio method

4. **Use mole ratios** (from balanced equation)
   - Convert moles of limiting reactant to moles of product

5. **Convert to desired units**
   - Mass (mol → g using molar mass)
   - Particles (mol → particles using $N_A$)
   - Volume (if gas at STP: 22.4 L/mol)
   - Molarity (if in solution)

6. **Calculate percent yield** (if actual yield given)
   - Compare actual to theoretical

## Common Stoichiometry Errors

**❌ Mistake 1:** Using wrong mole ratio
- Check coefficients carefully
- Write ratio as fraction

**❌ Mistake 2:** Forgetting to identify limiting reactant
- If given multiple reactants, MUST determine limiting
- Calculate product from each reactant

**❌ Mistake 3:** Using excess reactant for calculations
- Always use limiting reactant for product calculations
- Excess reactant doesn't limit product

**❌ Mistake 4:** Rounding too early
- Keep extra sig figs during calculation
- Round at final answer

**❌ Mistake 5:** Unit errors
- Track units throughout
- Cancel units properly
- Convert volumes to liters for molarity

## Tips for Success

✓ **Always start with balanced equation**

✓ **Write out conversion factors explicitly**

✓ **Track units through calculation**

✓ **For limiting reactant: Calculate product from EACH reactant**

✓ **Check reasonableness of answer**
- Product mass shouldn't exceed reactant mass (usually)
- Percent yield can't exceed 100%

✓ **Use dimensional analysis**
- Set up so units cancel

✓ **For solution problems: V must be in liters for molarity**
`,
      exampleProblems: {
        create: [
          {
            question: 'Ammonia (NH₃) is produced by the Haber process: N₂(g) + 3H₂(g) → 2NH₃(g). How many grams of NH₃ can be produced from 56.0 g of N₂ and 12.0 g of H₂? (N = 14.0 g/mol, H = 1.0 g/mol)',
            solution: `**Solution:**

**Given:**
- Balanced equation: $\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$
- Mass of N₂ = 56.0 g
- Mass of H₂ = 12.0 g
- Molar masses: N = 14.0 g/mol, H = 1.0 g/mol

**Find:** Mass of NH₃ produced

**This is a LIMITING REACTANT problem** (two reactants given!)

---

**Step 1: Calculate molar masses**

$$M_{N_2} = 2 \\times 14.0 = 28.0 \\text{ g/mol}$$

$$M_{H_2} = 2 \\times 1.0 = 2.0 \\text{ g/mol}$$

$$M_{NH_3} = 14.0 + 3(1.0) = 17.0 \\text{ g/mol}$$

---

**Step 2: Convert masses to moles**

**Moles of N₂:**

$$n_{N_2} = \\frac{56.0 \\text{ g}}{28.0 \\text{ g/mol}} = 2.00 \\text{ mol N}_2$$

**Moles of H₂:**

$$n_{H_2} = \\frac{12.0 \\text{ g}}{2.0 \\text{ g/mol}} = 6.0 \\text{ mol H}_2$$

---

**Step 3: Identify limiting reactant**

**Method: Calculate NH₃ from each reactant, compare**

**From N₂:**

Using mole ratio: $\\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2}$

$$n_{NH_3} = 2.00 \\text{ mol N}_2 \\times \\frac{2 \\text{ mol NH}_3}{1 \\text{ mol N}_2} = 4.00 \\text{ mol NH}_3$$

**From H₂:**

Using mole ratio: $\\frac{2 \\text{ mol NH}_3}{3 \\text{ mol H}_2}$

$$n_{NH_3} = 6.0 \\text{ mol H}_2 \\times \\frac{2 \\text{ mol NH}_3}{3 \\text{ mol H}_2}$$

$$n_{NH_3} = 6.0 \\times \\frac{2}{3} = 4.0 \\text{ mol NH}_3$$

**Compare:**
- From N₂: 4.00 mol NH₃
- From H₂: 4.0 mol NH₃

**Both give same amount!** → **Both are completely consumed** (neither in excess)

**This is a special case: stoichiometric amounts**

**Limiting reactant:** Both (or can say either)

**Product formed:** 4.0 mol NH₃

---

**Alternative check - Ratio method:**

$$\\ce{N2 + 3H2 -> 2NH3}$$

**For N₂:** $\\frac{2.00 \\text{ mol}}{1} = 2.00$

**For H₂:** $\\frac{6.0 \\text{ mol}}{3} = 2.0$

**Ratios equal** → Stoichiometric amounts (both limiting) ✓

---

**Step 4: Convert moles NH₃ to mass**

$$\\text{mass}_{NH_3} = n_{NH_3} \\times M_{NH_3}$$

$$\\text{mass}_{NH_3} = 4.0 \\text{ mol} \\times 17.0 \\text{ g/mol}$$

$$\\text{mass}_{NH_3} = 68 \\text{ g}$$

**Answer:**

$$\\boxed{68 \\text{ g NH}_3}$$

---

**Summary:**

| Substance | Given Mass | Moles | NH₃ Produced |
|-----------|------------|-------|--------------|
| N₂ | 56.0 g | 2.00 mol | 4.00 mol |
| H₂ | 12.0 g | 6.0 mol | 4.0 mol |
| NH₃ | ? | 4.0 mol | **68 g** |

**Stoichiometry flow:**

$$56.0 \\text{ g N}_2 \\xrightarrow{÷28.0} 2.00 \\text{ mol N}_2 \\xrightarrow{×\\frac{2}{1}} 4.0 \\text{ mol NH}_3 \\xrightarrow{×17.0} 68 \\text{ g NH}_3$$

Or:

$$12.0 \\text{ g H}_2 \\xrightarrow{÷2.0} 6.0 \\text{ mol H}_2 \\xrightarrow{×\\frac{2}{3}} 4.0 \\text{ mol NH}_3 \\xrightarrow{×17.0} 68 \\text{ g NH}_3$$

---

**Additional insights:**

**Why are these stoichiometric amounts?**

From balanced equation: $\\ce{N2 + 3H2 -> 2NH3}$

**Mole ratio:** 1 mol N₂ : 3 mol H₂

**Given amounts:**
- N₂: 2.00 mol
- H₂: 6.0 mol

**Check ratio:** $\\frac{6.0}{2.00} = 3$ ✓

**Exactly 3:1 ratio** → Perfect stoichiometric amounts!

**No excess reactant remains**

**In real industrial process:**
- Usually use excess H₂ (cheaper than N₂)
- Forces equilibrium toward products
- Not run at stoichiometric ratio

**Check conservation of mass:**
- Reactants: 56.0 g + 12.0 g = 68.0 g
- Products: 68 g NH₃
- Mass conserved! ✓

**This makes sense because all reactants consumed**`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'When 15.0 g of aluminum reacts with excess hydrochloric acid according to the equation 2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g), 16.8 L of H₂ gas is collected at STP. (a) Calculate the theoretical yield of H₂ in liters at STP. (b) Calculate the percent yield. (Al = 27.0 g/mol)',
            solution: `**Solution:**

**Given:**
- Mass of Al = 15.0 g
- Equation: $\\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$
- HCl in excess (Al is limiting reactant)
- Actual yield of H₂ = 16.8 L at STP
- Molar mass Al = 27.0 g/mol
- At STP: 1 mol gas = 22.4 L

**Find:** (a) Theoretical yield of H₂, (b) Percent yield

---

**Part (a): Calculate theoretical yield**

**Step 1: Convert mass Al to moles**

$$n_{Al} = \\frac{\\text{mass}}{\\text{molar mass}}$$

$$n_{Al} = \\frac{15.0 \\text{ g}}{27.0 \\text{ g/mol}}$$

$$n_{Al} = 0.556 \\text{ mol Al}$$

**Step 2: Use stoichiometry to find moles H₂**

**From balanced equation:**

$$\\ce{2Al + 6HCl -> 2AlCl3 + 3H2}$$

**Mole ratio:** $\\frac{3 \\text{ mol H}_2}{2 \\text{ mol Al}}$

$$n_{H_2} = 0.556 \\text{ mol Al} \\times \\frac{3 \\text{ mol H}_2}{2 \\text{ mol Al}}$$

$$n_{H_2} = 0.556 \\times 1.5$$

$$n_{H_2} = 0.834 \\text{ mol H}_2$$

**Step 3: Convert moles H₂ to volume at STP**

**At STP:** 1 mol gas = 22.4 L (molar volume)

$$V_{H_2} = n_{H_2} \\times 22.4 \\text{ L/mol}$$

$$V_{H_2} = 0.834 \\text{ mol} \\times 22.4 \\text{ L/mol}$$

$$V_{H_2} = 18.7 \\text{ L}$$

**Answer (a):**

$$\\boxed{\\text{Theoretical yield} = 18.7 \\text{ L H}_2}$$

**This is the maximum H₂ that could be produced from 15.0 g Al**

---

**Part (b): Calculate percent yield**

**Step 4: Use percent yield formula**

$$\\text{Percent yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$

**Given:**
- Actual yield = 16.8 L (measured in lab)
- Theoretical yield = 18.7 L (calculated above)

**Calculate:**

$$\\text{Percent yield} = \\frac{16.8 \\text{ L}}{18.7 \\text{ L}} \\times 100\\%$$

$$\\text{Percent yield} = 0.898 \\times 100\\%$$

$$\\text{Percent yield} = 89.8\\%$$

**Answer (b):**

$$\\boxed{\\text{Percent yield} = 89.8\\%}$$

**Or:** $\\boxed{90\\%}$ (2 sig figs)

---

**Interpretation:**

**What does 89.8% yield mean?**
- Reaction produced 89.8% of theoretical maximum
- This is actually quite good efficiency for lab reaction
- 10.2% of potential H₂ not collected

**Why is actual < theoretical?**

**Possible reasons:**
1. **Gas escaped** during collection
   - Not all H₂ captured in collection apparatus
   - Small leaks in setup

2. **Incomplete reaction**
   - Not all Al dissolved
   - Oxide coating on Al surface prevents complete reaction

3. **Impure aluminum**
   - Al sample may contain impurities
   - Less than 15.0 g pure Al actually present

4. **Measurement errors**
   - Volume measurement not exact
   - Temperature or pressure not exactly STP

5. **Side reactions**
   - Some Al reacts with O₂ in air instead of HCl

**In industrial processes:**
- 89.8% would be excellent yield
- Industries optimize conditions for high percent yield
- Economic motivation (more product per reactant)

---

**Summary of calculations:**

**Stoichiometry path:**

$$15.0 \\text{ g Al} \\xrightarrow{÷27.0} 0.556 \\text{ mol Al} \\xrightarrow{×\\frac{3}{2}} 0.834 \\text{ mol H}_2 \\xrightarrow{×22.4} 18.7 \\text{ L H}_2$$

**Percent yield:**

$$\\frac{16.8 \\text{ L (actual)}}{18.7 \\text{ L (theoretical)}} \\times 100\\% = 89.8\\%$$

**Comparison table:**

| Quantity | Value |
|----------|-------|
| Mass Al (given) | 15.0 g |
| Moles Al | 0.556 mol |
| Moles H₂ (from stoichiometry) | 0.834 mol |
| **Theoretical yield H₂** | **18.7 L** |
| **Actual yield H₂** (given) | **16.8 L** |
| **Percent yield** | **89.8%** |

---

**Additional practice:**

**What if we wanted mass of H₂ instead of volume?**

$$\\text{mass}_{H_2} = 0.834 \\text{ mol} \\times 2.0 \\text{ g/mol} = 1.67 \\text{ g H}_2$$ (theoretical)

$$\\text{mass}_{H_2 \\text{ actual}} = 1.67 \\text{ g} \\times 0.898 = 1.50 \\text{ g}$$ (actual)

**Or from volume:**

At STP: 22.4 L H₂ = 2.0 g H₂

$$18.7 \\text{ L} \\times \\frac{2.0 \\text{ g}}{22.4 \\text{ L}} = 1.67 \\text{ g}$$ ✓

**Key concepts demonstrated:**
1. Stoichiometry with limiting reactant
2. Gas volume at STP (molar volume = 22.4 L/mol)
3. Theoretical yield calculation
4. Percent yield formula and interpretation
5. Understanding why actual < theoretical`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: '50.0 mL of 0.200 M Pb(NO₃)₂ is mixed with 30.0 mL of 0.300 M KI. The reaction is: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). (a) Identify the limiting reactant. (b) Calculate the mass of PbI₂ precipitate formed. (c) Calculate the molar concentration of K⁺ ions in the final solution (assume volumes are additive). (Pb = 207.2 g/mol, I = 126.9 g/mol, K = 39.1 g/mol)',
            solution: `**Solution:**

**Given:**
- Volume Pb(NO₃)₂ = 50.0 mL = 0.0500 L
- Molarity Pb(NO₃)₂ = 0.200 M
- Volume KI = 30.0 mL = 0.0300 L
- Molarity KI = 0.300 M
- Equation: $\\ce{Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)}$
- Molar masses: Pb = 207.2, I = 126.9, K = 39.1 g/mol

**Find:** (a) Limiting reactant, (b) Mass PbI₂, (c) [K⁺] in final solution

---

**Part (a): Identify limiting reactant**

**Step 1: Calculate moles of each reactant**

**Moles of Pb(NO₃)₂:**

$$n_{Pb(NO_3)_2} = M \\times V$$

$$n_{Pb(NO_3)_2} = 0.200 \\text{ M} \\times 0.0500 \\text{ L}$$

$$n_{Pb(NO_3)_2} = 0.0100 \\text{ mol}$$

**Moles of KI:**

$$n_{KI} = M \\times V$$

$$n_{KI} = 0.300 \\text{ M} \\times 0.0300 \\text{ L}$$

$$n_{KI} = 0.00900 \\text{ mol}$$

**Step 2: Identify limiting reactant**

**Method 1: Calculate product from each reactant**

**From balanced equation:**

$$\\ce{Pb(NO3)2 + 2KI -> PbI2 + 2KNO3}$$

**Mole ratio:** 1 Pb(NO₃)₂ : 2 KI : 1 PbI₂

**From Pb(NO₃)₂:**

$$n_{PbI_2} = 0.0100 \\text{ mol Pb(NO}_3)_2 \\times \\frac{1 \\text{ mol PbI}_2}{1 \\text{ mol Pb(NO}_3)_2}$$

$$n_{PbI_2} = 0.0100 \\text{ mol}$$

**From KI:**

$$n_{PbI_2} = 0.00900 \\text{ mol KI} \\times \\frac{1 \\text{ mol PbI}_2}{2 \\text{ mol KI}}$$

$$n_{PbI_2} = 0.00450 \\text{ mol}$$

**Compare:**
- From Pb(NO₃)₂: 0.0100 mol PbI₂
- From KI: 0.00450 mol PbI₂

**KI produces less product** → **KI is limiting reactant** ✓

**Method 2: Ratio method (verification)**

$$\\frac{n_{Pb(NO_3)_2}}{\\text{coefficient}} = \\frac{0.0100}{1} = 0.0100$$

$$\\frac{n_{KI}}{\\text{coefficient}} = \\frac{0.00900}{2} = 0.00450$$

**KI has smaller ratio** → **KI is limiting** ✓

**Answer (a):**

$$\\boxed{\\text{KI is the limiting reactant}}$$

**Pb(NO₃)₂ is in excess**

---

**Part (b): Calculate mass of PbI₂**

**Step 3: Calculate moles of PbI₂ formed**

**Use limiting reactant (KI):**

$$n_{PbI_2} = 0.00900 \\text{ mol KI} \\times \\frac{1 \\text{ mol PbI}_2}{2 \\text{ mol KI}}$$

$$n_{PbI_2} = 0.00450 \\text{ mol}$$

**Step 4: Calculate molar mass of PbI₂**

$$M_{PbI_2} = 207.2 + 2(126.9)$$

$$M_{PbI_2} = 207.2 + 253.8$$

$$M_{PbI_2} = 461.0 \\text{ g/mol}$$

**Step 5: Convert moles to mass**

$$\\text{mass}_{PbI_2} = n_{PbI_2} \\times M_{PbI_2}$$

$$\\text{mass}_{PbI_2} = 0.00450 \\text{ mol} \\times 461.0 \\text{ g/mol}$$

$$\\text{mass}_{PbI_2} = 2.07 \\text{ g}$$

**Answer (b):**

$$\\boxed{2.07 \\text{ g PbI}_2 \\text{ precipitates}}$$

**This is bright yellow precipitate**

---

**Part (c): Calculate [K⁺] in final solution**

**Step 6: Find total moles of K⁺**

**K⁺ comes from KI:**
- Each KI provides 1 K⁺
- Started with 0.00900 mol KI
- Therefore: 0.00900 mol K⁺ total

**Note:** All KI dissolves initially (before precipitation)
- KI → K⁺ + I⁻ (complete dissociation)
- Then: Pb²⁺ + 2I⁻ → PbI₂(s)
- K⁺ is **spectator ion** (stays dissolved)

**All K⁺ remains in solution**

**Step 7: Calculate total volume**

**Assume volumes are additive:**

$$V_{total} = V_{Pb(NO_3)_2} + V_{KI}$$

$$V_{total} = 50.0 \\text{ mL} + 30.0 \\text{ mL} = 80.0 \\text{ mL}$$

$$V_{total} = 0.0800 \\text{ L}$$

**Step 8: Calculate molarity of K⁺**

$$[K^+] = \\frac{n_{K^+}}{V_{total}}$$

$$[K^+] = \\frac{0.00900 \\text{ mol}}{0.0800 \\text{ L}}$$

$$[K^+] = 0.1125 \\text{ M}$$

$$[K^+] = 0.113 \\text{ M}$$

**Answer (c):**

$$\\boxed{[K^+] = 0.113 \\text{ M}}$$

---

**Summary Table:**

| Species | Initial moles | Final status |
|---------|---------------|--------------|
| Pb(NO₃)₂ | 0.0100 mol | Excess (some remains) |
| KI | 0.00900 mol | **Limiting** (all consumed) |
| PbI₂ | 0 | 0.00450 mol formed (2.07 g solid) |
| K⁺ | 0.00900 mol | 0.00900 mol (dissolved, 0.113 M) |

---

**Additional analysis:**

**How much Pb(NO₃)₂ remains?**

**Pb(NO₃)₂ consumed:**

$$n_{Pb(NO_3)_2 \\text{ used}} = 0.00900 \\text{ mol KI} \\times \\frac{1 \\text{ mol Pb(NO}_3)_2}{2 \\text{ mol KI}}$$

$$n_{Pb(NO_3)_2 \\text{ used}} = 0.00450 \\text{ mol}$$

**Pb(NO₃)₂ remaining:**

$$n_{Pb(NO_3)_2 \\text{ remaining}} = 0.0100 - 0.00450 = 0.00550 \\text{ mol}$$

**Concentration of Pb²⁺ in final solution:**

$$[Pb^{2+}] = \\frac{0.00550 \\text{ mol}}{0.0800 \\text{ L}} = 0.0688 \\text{ M}$$

**Wait!** This ignores PbI₂ solubility equilibrium
- PbI₂ is "insoluble" but has tiny solubility
- Some Pb²⁺ and I⁻ in equilibrium with solid
- For this problem, assume PbI₂ completely insoluble

**What about NO₃⁻ concentration?**

**NO₃⁻ from Pb(NO₃)₂:**
- Each Pb(NO₃)₂ provides 2 NO₃⁻
- Started with 0.0100 mol Pb(NO₃)₂
- Total NO₃⁻ = 0.0100 × 2 = 0.0200 mol

**NO₃⁻ is spectator ion** (stays dissolved)

$$[NO_3^-] = \\frac{0.0200 \\text{ mol}}{0.0800 \\text{ L}} = 0.250 \\text{ M}$$

**Complete ion inventory in final solution:**

| Ion | Concentration |
|-----|---------------|
| K⁺ | 0.113 M |
| NO₃⁻ | 0.250 M |
| Pb²⁺ | ~0.069 M (excess) |
| I⁻ | ~0 M (consumed) |

**Plus:** Solid PbI₂ precipitate (2.07 g)

---

**Key concepts demonstrated:**

1. **Solution stoichiometry** using M × V = n
2. **Limiting reactant** determination with multiple reactants
3. **Precipitate formation** (PbI₂ is insoluble)
4. **Spectator ions** (K⁺ and NO₃⁻ don't react)
5. **Final concentration** calculation with mixed volumes
6. **Excess reactant** remaining after reaction

**Observable evidence:**
- Solutions mixed → immediately bright yellow precipitate forms
- Yellow solid settles to bottom
- Clear solution above contains K⁺, NO₃⁻, excess Pb²⁺`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', stoichiometryTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: stoichiometryTopic.id,
        front: 'What are the basic steps for any stoichiometry calculation?',
        back: '1) Write balanced equation, 2) Convert given to moles, 3) Identify limiting reactant (if multiple reactants), 4) Use mole ratios from equation, 5) Convert to desired units. Always work in moles for stoichiometry!'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'How do you identify the limiting reactant?',
        back: 'Method 1: Calculate product from EACH reactant using stoichiometry. Whichever produces LESS product is limiting. Method 2: Divide moles by coefficient for each reactant. Smallest ratio = limiting.'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'What is the difference between theoretical, actual, and percent yield?',
        back: 'Theoretical yield: Maximum possible (from stoichiometry). Actual yield: What you get in lab (always less). Percent yield = (actual/theoretical) × 100%. Can\'t exceed 100% with pure products.'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'For solution stoichiometry, how do you find moles from molarity and volume?',
        back: 'moles = M × V (volume MUST be in liters!). Then use mole ratios from balanced equation for stoichiometry. Don\'t forget to convert mL to L.'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'Why is actual yield always less than theoretical yield?',
        back: 'Side reactions form unwanted products, incomplete reactions (not all reactants convert), losses during purification/transfer, impure starting materials. Good lab technique: 80-95% yield.'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'How do you calculate the amount of excess reactant remaining?',
        back: '1) Use limiting reactant to find how much excess reactant is consumed (stoichiometry), 2) Subtract consumed from initial amount: remaining = initial - consumed.'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'What is a mole ratio and where does it come from?',
        back: 'Ratio of coefficients from balanced equation. Used as conversion factor between reactants/products. Example: 2H₂ + O₂ → 2H₂O gives ratios 2:1:2. These are EXACT (infinite sig figs).'
      },
      {
        topicId: stoichiometryTopic.id,
        front: 'What common mistakes should you avoid in stoichiometry?',
        back: 'Using wrong mole ratio, forgetting to identify limiting reactant, using excess reactant for calculations, rounding too early, unit errors (especially mL vs L for molarity), not balancing equation first.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', stoichiometryTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Chemical Reactions (Part 2)!');
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
