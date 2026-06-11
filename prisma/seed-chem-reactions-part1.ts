import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Chemical Reactions (Part 1)...');

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

  // Topic 1: Types of Chemical Reactions
  const reactionTypesTopic = await prisma.topic.create({
    data: {
      title: 'Types of Chemical Reactions',
      slug: 'reaction-types',
      description: 'Master the classification of chemical reactions including synthesis, decomposition, single and double replacement, combustion, and precipitation reactions.',
      order: existingTopics + 1,
      categoryId: reactionsCategory.id,
      isPremium: false,
      textContent: `
# Types of Chemical Reactions

## Overview

**Chemical reaction:** Process where reactants are transformed into products
- Bonds broken in reactants
- New bonds formed in products
- Atoms conserved (Law of Conservation of Mass)
- Energy changes accompany reactions

**General representation:**

$$\\ce{Reactants -> Products}$$

**Balanced equation:** Same number of each type of atom on both sides

## Five Main Types of Reactions

### 1. Synthesis (Combination) Reactions

**Definition:** Two or more substances combine to form a single product

**General form:**

$$\\ce{A + B -> AB}$$

**Examples:**

**Metal + Nonmetal → Ionic compound:**

$$\\ce{2Na(s) + Cl2(g) -> 2NaCl(s)}$$

$$\\ce{2Mg(s) + O2(g) -> 2MgO(s)}$$

**Nonmetal + Nonmetal → Molecular compound:**

$$\\ce{C(s) + O2(g) -> CO2(g)}$$

$$\\ce{N2(g) + 3H2(g) -> 2NH3(g)}$$ (Haber process)

**Metal oxide + Water → Metal hydroxide:**

$$\\ce{CaO(s) + H2O(l) -> Ca(OH)2(aq)}$$

$$\\ce{Na2O(s) + H2O(l) -> 2NaOH(aq)}$$

**Nonmetal oxide + Water → Acid:**

$$\\ce{CO2(g) + H2O(l) -> H2CO3(aq)}$$ (carbonic acid)

$$\\ce{SO3(g) + H2O(l) -> H2SO4(aq)}$$ (sulfuric acid)

**Characteristics:**
- Multiple reactants → One product
- Often exothermic (releases energy)
- Opposite of decomposition

### 2. Decomposition Reactions

**Definition:** Single compound breaks down into two or more simpler substances

**General form:**

$$\\ce{AB -> A + B}$$

**Examples:**

**Heat decomposition:**

$$\\ce{2HgO(s) ->[\\Delta] 2Hg(l) + O2(g)}$$

$$\\ce{CaCO3(s) ->[\\Delta] CaO(s) + CO2(g)}$$

**Electrolysis (electrical energy):**

$$\\ce{2H2O(l) ->[\\text{electricity}] 2H2(g) + O2(g)}$$

$$\\ce{2NaCl(l) ->[\\text{electricity}] 2Na(l) + Cl2(g)}$$

**Catalytic decomposition:**

$$\\ce{2H2O2(aq) ->[MnO_2] 2H2O(l) + O2(g)}$$

**Binary compound decomposition:**

$$\\ce{2KClO3(s) ->[\\Delta] 2KCl(s) + 3O2(g)}$$

**Characteristics:**
- One reactant → Multiple products
- Often requires energy input (endothermic)
- Need heat, electricity, or light
- Opposite of synthesis

### 3. Single Replacement (Displacement) Reactions

**Definition:** One element replaces another in a compound

**General forms:**

**Metal replaces metal:**

$$\\ce{A + BC -> AC + B}$$

**Nonmetal replaces nonmetal:**

$$\\ce{A + BC -> BA + C}$$

**Examples:**

**More reactive metal displaces less reactive:**

$$\\ce{Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)}$$

$$\\ce{Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)}$$

$$\\ce{2Al(s) + 3CuCl2(aq) -> 2AlCl3(aq) + 3Cu(s)}$$

**More reactive halogen displaces less reactive:**

$$\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$$

$$\\ce{Br2(l) + 2KI(aq) -> 2KBr(aq) + I2(s)}$$

**Predicting if reaction occurs:**

Use **Activity Series** (reactivity order)

**Metal Activity Series (most → least reactive):**
- Li > K > Ba > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Ag > Au

**Rule:** Metal higher in series displaces metal lower in series

**Halogen Activity Series:**
- F₂ > Cl₂ > Br₂ > I₂

**Rule:** Halogen higher in series displaces halogen lower in series

**Will this reaction occur?**

$$\\ce{Cu(s) + 2AgNO3(aq) -> ?}$$

**Check:** Cu is above Ag in activity series → YES, reaction occurs

$$\\ce{Cu(s) + 2AgNO3(aq) -> Cu(NO3)2(aq) + 2Ag(s)}$$

$$\\ce{Ag(s) + CuSO4(aq) -> ?}$$

**Check:** Ag is below Cu in activity series → NO, no reaction

$$\\ce{Ag(s) + CuSO4(aq) -> \\text{No Reaction}}$$

### 4. Double Replacement (Metathesis) Reactions

**Definition:** Two compounds exchange partners

**General form:**

$$\\ce{AB + CD -> AD + CB}$$

**Cations and anions "switch partners"**

**Examples:**

**Precipitation reactions:**

$$\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}$$

$$\\ce{Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)}$$

**Acid-base neutralization:**

$$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

$$\\ce{H2SO4(aq) + 2KOH(aq) -> K2SO4(aq) + 2H2O(l)}$$

**Gas formation:**

$$\\ce{2HCl(aq) + Na2CO3(aq) -> 2NaCl(aq) + H2O(l) + CO2(g)}$$

$$\\ce{2HCl(aq) + Na2S(aq) -> 2NaCl(aq) + H2S(g)}$$

**Predicting if reaction occurs:**

Double replacement reactions occur if one of these forms:
1. **Precipitate** (insoluble solid)
2. **Water** (in neutralization)
3. **Gas** (escapes from solution)

**Use solubility rules to predict precipitates!**

### 5. Combustion Reactions

**Definition:** Substance reacts rapidly with oxygen, releasing energy as heat and light

**General form (hydrocarbon combustion):**

$$\\ce{C_xH_y + O2 -> CO2 + H2O + \\text{energy}}$$

**Complete combustion examples:**

$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$$ (methane)

$$\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g)}$$ (propane)

$$\\ce{2C8H18(l) + 25O2(g) -> 16CO2(g) + 18H2O(g)}$$ (octane)

**Complete combustion products:**
- CO₂ (carbon dioxide)
- H₂O (water)
- Energy (heat and light)

**Incomplete combustion (insufficient O₂):**

$$\\ce{2CH4(g) + 3O2(g) -> 2CO(g) + 4H2O(g)}$$ (produces CO)

$$\\ce{CH4(g) + O2(g) -> C(s) + 2H2O(g)}$$ (produces soot)

**Other combustion reactions:**

$$\\ce{S(s) + O2(g) -> SO2(g)}$$

$$\\ce{4Fe(s) + 3O2(g) -> 2Fe2O3(s)}$$ (rusting)

**Characteristics:**
- Always involves O₂ as reactant
- Exothermic (releases energy)
- Often produces flame
- Important for energy production

## Solubility Rules

**Essential for predicting precipitation in double replacement reactions**

### Soluble Compounds (form aqueous solutions)

**1. Group 1 (alkali metals) compounds:**
- All Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺ salts are **soluble**
- Example: NaCl, K₂SO₄, LiNO₃

**2. Ammonium (NH₄⁺) compounds:**
- All NH₄⁺ salts are **soluble**
- Example: (NH₄)₂SO₄, NH₄Cl

**3. Nitrates (NO₃⁻), acetates (C₂H₃O₂⁻), perchlorates (ClO₄⁻):**
- All **soluble**
- Example: AgNO₃, Ca(NO₃)₂, Pb(C₂H₃O₂)₂

**4. Most chlorides (Cl⁻), bromides (Br⁻), iodides (I⁻):**
- **Soluble** EXCEPT with Ag⁺, Pb²⁺, Hg₂²⁺
- AgCl, PbBr₂, Hg₂I₂ are **insoluble**

**5. Most sulfates (SO₄²⁻):**
- **Soluble** EXCEPT with Sr²⁺, Ba²⁺, Pb²⁺
- SrSO₄, BaSO₄, PbSO₄ are **insoluble**

### Insoluble Compounds (form precipitates)

**1. Carbonates (CO₃²⁻), phosphates (PO₄³⁻), chromates (CrO₄²⁻):**
- **Insoluble** EXCEPT with Group 1 and NH₄⁺
- CaCO₃, Ag₃PO₄, PbCrO₄ are **insoluble**
- But: Na₂CO₃, K₃PO₄, (NH₄)₂CrO₄ are **soluble**

**2. Hydroxides (OH⁻):**
- **Insoluble** EXCEPT with Group 1, Ba²⁺, Sr²⁺, Ca²⁺ (slightly)
- Fe(OH)₃, Al(OH)₃, Cu(OH)₂ are **insoluble**
- But: NaOH, KOH, Ba(OH)₂ are **soluble**

**3. Sulfides (S²⁻):**
- **Insoluble** EXCEPT with Group 1, Group 2, NH₄⁺
- CuS, FeS, PbS are **insoluble**
- But: Na₂S, (NH₄)₂S are **soluble**

### Using Solubility Rules

**Example:** Will precipitation occur?

$$\\ce{AgNO3(aq) + NaCl(aq) -> ?}$$

**Step 1:** Identify potential products (switch partners)
- Ag⁺ with Cl⁻ → AgCl
- Na⁺ with NO₃⁻ → NaNO₃

**Step 2:** Check solubility
- AgCl: Cl⁻ compound with Ag⁺ → **Insoluble** (exception to Cl⁻ rule)
- NaNO₃: Group 1 compound → **Soluble**

**Step 3:** Write equation
- AgCl precipitates → (s)
- NaNO₃ stays dissolved → (aq)

$$\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}$$

**Yes, precipitation occurs!** (AgCl is white precipitate)

## Identifying Reaction Types

**Strategy: Look for patterns**

**Synthesis:** Multiple → One
- 2 or more reactants, 1 product
- Example: $\\ce{2H2 + O2 -> 2H2O}$

**Decomposition:** One → Multiple
- 1 reactant, 2 or more products
- Often needs energy input
- Example: $\\ce{2H2O -> 2H2 + O2}$

**Single Replacement:** Element + Compound → Element + Compound
- Free element replaces element in compound
- Check activity series
- Example: $\\ce{Zn + CuSO4 -> ZnSO4 + Cu}$

**Double Replacement:** Compound + Compound → Compound + Compound
- Ions switch partners
- Forms precipitate, water, or gas
- Example: $\\ce{AgNO3 + NaCl -> AgCl + NaNO3}$

**Combustion:** Substance + O₂ → CO₂ + H₂O
- Always has O₂ as reactant
- Produces CO₂ and H₂O (if hydrocarbon)
- Exothermic, flame
- Example: $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$

**Note:** Some reactions fit multiple categories!

$$\\ce{2H2(g) + O2(g) -> 2H2O(g)}$$

This is **both** synthesis AND combustion!

## Driving Forces for Reactions

**Why do reactions occur? What makes them "go"?**

### 1. Formation of Precipitate

**Ions in solution combine to form insoluble solid**

$$\\ce{Pb^{2+}(aq) + 2I^-(aq) -> PbI2(s)}$$

**Driving force:** Decrease in solubility (ions prefer solid state)

### 2. Formation of Water

**Neutralization reactions**

$$\\ce{H^+(aq) + OH^-(aq) -> H2O(l)}$$

**Driving force:** Formation of very stable H₂O molecule

### 3. Formation of Gas

**Gas escapes from solution**

$$\\ce{2H^+(aq) + CO3^{2-}(aq) -> H2O(l) + CO2(g) ^}$$

**Driving force:** Entropy increase (gas more disordered than aqueous)

**Common gases formed:**
- CO₂ from carbonates + acid
- H₂S from sulfides + acid
- NH₃ from ammonium salts + base
- SO₂ from sulfites + acid

### 4. Transfer of Electrons (Redox)

**Oxidation-reduction reactions**

$$\\ce{Zn(s) + Cu^{2+}(aq) -> Zn^{2+}(aq) + Cu(s)}$$

**Driving force:** Electron transfer to more stable configuration

### 5. Energy Release

**Exothermic reactions (ΔH < 0)**

$$\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g) + \\text{energy}}$$

**Driving force:** System goes to lower energy state

**Note:** Most spontaneous reactions have at least one driving force!

## Summary Table

| Type | Pattern | Example | Key Feature |
|------|---------|---------|-------------|
| **Synthesis** | A + B → AB | $\\ce{2Na + Cl2 -> 2NaCl}$ | Combine |
| **Decomposition** | AB → A + B | $\\ce{2H2O -> 2H2 + O2}$ | Break apart |
| **Single Replacement** | A + BC → AC + B | $\\ce{Zn + CuSO4 -> ZnSO4 + Cu}$ | One swap |
| **Double Replacement** | AB + CD → AD + CB | $\\ce{AgNO3 + NaCl -> AgCl + NaNO3}$ | Two swap |
| **Combustion** | Fuel + O₂ → CO₂ + H₂O | $\\ce{CH4 + 2O2 -> CO2 + 2H2O}$ | Burns with O₂ |

## Tips for Success

**1. Learn to recognize patterns**
- Count reactants and products
- Look for free elements
- Identify ions switching

**2. Use activity series**
- Predicts single replacement
- Higher replaces lower

**3. Memorize solubility rules**
- Essential for double replacement
- Predicts precipitates

**4. Check for driving forces**
- Precipitate, water, gas, redox
- No driving force → likely no reaction

**5. Balance equations**
- Atoms must be conserved
- Check your work!
`,
      exampleProblems: {
        create: [
          {
            question: 'Classify each of the following reactions by type: (a) 2Mg(s) + O₂(g) → 2MgO(s), (b) CaCO₃(s) → CaO(s) + CO₂(g), (c) Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g), (d) AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)',
            solution: `**Solution:**

**Given:** Four balanced chemical equations

**Find:** Classify each reaction type

---

**(a) 2Mg(s) + O₂(g) → 2MgO(s)**

**Step 1: Count reactants and products**
- Reactants: **2 substances** (Mg and O₂)
- Products: **1 substance** (MgO)

**Step 2: Identify pattern**
- Multiple reactants → Single product
- This is **COMBINATION** pattern

**Step 3: Classify**

$$\\boxed{\\text{Synthesis (Combination) Reaction}}$$

**Explanation:**
- Two elements (Mg and O₂) combine to form one compound (MgO)
- Fits pattern: A + B → AB
- Also could be classified as combustion (metal + oxygen)

**Additional notes:**
- This is formation of ionic compound (metal + nonmetal)
- Exothermic (releases energy as heat and light)
- This is how magnesium burns with bright white flame

---

**(b) CaCO₃(s) → CaO(s) + CO₂(g)**

**Step 1: Count reactants and products**
- Reactants: **1 substance** (CaCO₃)
- Products: **2 substances** (CaO and CO₂)

**Step 2: Identify pattern**
- Single reactant → Multiple products
- This is **BREAKDOWN** pattern

**Step 3: Classify**

$$\\boxed{\\text{Decomposition Reaction}}$$

**Explanation:**
- One compound (CaCO₃) breaks down into two simpler substances
- Fits pattern: AB → A + B
- Requires heat (Δ) - thermal decomposition

**Additional notes:**
- This is how limestone (CaCO₃) is converted to lime (CaO)
- Important industrial process
- Endothermic (requires energy input)
- CO₂ gas escapes (driving force)

**Real-world application:**
- Making cement
- Occurs in caves forming stalactites/stalagmites (reverse reaction)

---

**(c) Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)**

**Step 1: Count reactants and products**
- Reactants: 2 substances
- Products: 2 substances

**Pattern so far:** Could be single or double replacement

**Step 2: Look more closely at reactants**
- **Zn(s):** Free element (metal)
- **HCl(aq):** Compound

**One reactant is free element!**

**Step 3: Identify what's happening**

**Rewrite to see the replacement:**

$$\\ce{Zn + H-Cl -> Zn-Cl2 + H2}$$

- Zn **replaces** H in HCl
- H is displaced as H₂ gas

**Step 4: Classify**

$$\\boxed{\\text{Single Replacement (Displacement) Reaction}}$$

**Explanation:**
- Free element (Zn) replaces another element (H) in a compound
- Fits pattern: A + BC → AC + B
- Zn is more reactive than H (check activity series)

**Verification using activity series:**
- Activity series: ... Zn > Fe > Ni > Sn > Pb > **H** > Cu > Ag > Au
- Zn is **above** H → can displace H
- Reaction occurs ✓

**Additional notes:**
- This produces H₂ gas (bubbling)
- Common lab reaction
- Used to test for reactive metals

**Observable evidence:**
- Zn metal dissolves
- H₂ gas bubbles form
- Solution gets warm (exothermic)

---

**(d) AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)**

**Step 1: Count reactants and products**
- Reactants: 2 compounds
- Products: 2 compounds

**Step 2: Identify what's happening**

**Look at ions switching:**

**Reactants:**
- AgNO₃: Ag⁺ and NO₃⁻
- NaCl: Na⁺ and Cl⁻

**Products:**
- AgCl: Ag⁺ and Cl⁻ (Ag switched from NO₃⁻ to Cl⁻)
- NaNO₃: Na⁺ and NO₃⁻ (Na switched from Cl⁻ to NO₃⁻)

**Both cations switched anions!**

**Pattern:**
- AB + CD → AD + CB
- Ag⁺NO₃⁻ + Na⁺Cl⁻ → Ag⁺Cl⁻ + Na⁺NO₃⁻

**Step 3: Classify**

$$\\boxed{\\text{Double Replacement (Metathesis) Reaction}}$$

**Explanation:**
- Two compounds exchange ions
- Cations and anions "switch partners"
- Forms precipitate AgCl(s) - driving force!

**Step 4: Verify precipitation using solubility rules**

**Check AgCl:**
- Chloride (Cl⁻) compound
- Most chlorides soluble...
- **BUT** AgCl is exception (Ag⁺ is insoluble with Cl⁻)
- AgCl is **insoluble** → precipitates ✓

**Check NaNO₃:**
- Nitrate (NO₃⁻) compound
- All nitrates soluble
- NaNO₃ stays **dissolved** ✓

**Additional notes:**
- AgCl is white precipitate
- This is classic precipitation reaction
- Used in qualitative analysis to test for Cl⁻ ions

**Observable evidence:**
- White cloudy precipitate forms immediately
- Solution becomes opaque

---

**Summary Table:**

| Equation | Type | Key Feature |
|----------|------|-------------|
| (a) 2Mg + O₂ → 2MgO | Synthesis | 2 reactants → 1 product |
| (b) CaCO₃ → CaO + CO₂ | Decomposition | 1 reactant → 2 products |
| (c) Zn + 2HCl → ZnCl₂ + H₂ | Single Replacement | Free element replaces H |
| (d) AgNO₃ + NaCl → AgCl + NaNO₃ | Double Replacement | Ions switch, precipitate forms |

**Key skills practiced:**
1. Counting reactants/products
2. Recognizing free elements
3. Identifying ion exchanges
4. Using activity series
5. Applying solubility rules

**Strategy for identifying reaction types:**
1. Count substances (reactants and products)
2. Look for free elements
3. Check if ions are switching
4. Identify driving forces (precipitate, gas, water)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Predict the products and write balanced equations for each reaction. If no reaction occurs, write "NR". (a) Cl₂(g) + NaBr(aq) →, (b) Cu(s) + HCl(aq) →, (c) Ba(NO₃)₂(aq) + K₂SO₄(aq) →, (d) C₃H₈(g) + O₂(g) →',
            solution: `**Solution:**

**Task:** Predict products, write balanced equations, or indicate no reaction

---

**(a) Cl₂(g) + NaBr(aq) →**

**Step 1: Identify reaction type**
- Cl₂: Free element (halogen)
- NaBr: Compound
- Pattern: Element + Compound

**This is SINGLE REPLACEMENT**

**Step 2: Determine if reaction occurs**

**Check halogen activity series:**
- F₂ > Cl₂ > Br₂ > I₂

**Cl₂ is above Br₂** → Cl₂ is more reactive
- Cl₂ can displace Br⁻ from compounds
- **Reaction occurs!**

**Step 3: Predict products**

Cl₂ replaces Br in NaBr:
- Na⁺ pairs with Cl⁻ → NaCl
- Br is displaced as Br₂

**Unbalanced:**

$$\\ce{Cl2(g) + NaBr(aq) -> NaCl(aq) + Br2(l)}$$

**Step 4: Balance equation**

**Check atoms:**
- Left: 2 Cl, 1 Na, 1 Br
- Right: 1 Cl, 1 Na, 2 Br

**Br not balanced!**

**Balance Br:** Need 2 NaBr on left

$$\\ce{Cl2(g) + 2NaBr(aq) -> NaCl(aq) + Br2(l)}$$

**Check atoms:**
- Left: 2 Cl, 2 Na, 2 Br
- Right: 1 Cl, 1 Na, 2 Br

**Cl and Na not balanced!**

**Balance Cl and Na:** Need 2 NaCl on right

$$\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}$$

**Final check:**
- Left: 2 Cl, 2 Na, 2 Br ✓
- Right: 2 Cl, 2 Na, 2 Br ✓

**Answer (a):**

$$\\boxed{\\ce{Cl2(g) + 2NaBr(aq) -> 2NaCl(aq) + Br2(l)}}$$

**Observation:** Solution turns brown/orange (color of Br₂)

---

**(b) Cu(s) + HCl(aq) →**

**Step 1: Identify reaction type**
- Cu: Free element (metal)
- HCl: Compound (acid)
- Pattern: Element + Compound

**This would be SINGLE REPLACEMENT if it occurs**

**Step 2: Check if reaction occurs**

**Use metal activity series:**
- ... Zn > Fe > Ni > Sn > Pb > **H** > **Cu** > Ag > Au

**Cu is BELOW H in activity series**
- Cu is less reactive than H
- Cu **cannot** displace H from acids
- **NO REACTION**

**Answer (b):**

$$\\boxed{\\ce{Cu(s) + HCl(aq) -> NR \\text{ (No Reaction)}}}$$

**Explanation:**
- Copper is too unreactive (noble)
- Cannot displace hydrogen from HCl
- This is why copper pipes are safe for water systems

**Contrast:**
- If we used Zn instead: $\\ce{Zn + 2HCl -> ZnCl2 + H2}$ ✓ (Zn above H)
- If we used Au: $\\ce{Au + HCl -> NR}$ (Au below H)

**To dissolve copper, need:**
- Oxidizing acid (HNO₃ or hot concentrated H₂SO₄)
- These work by different mechanism (not simple single replacement)

---

**(c) Ba(NO₃)₂(aq) + K₂SO₄(aq) →**

**Step 1: Identify reaction type**
- Both are ionic compounds in solution
- Pattern: Compound + Compound

**This is DOUBLE REPLACEMENT**

**Step 2: Predict products (switch partners)**

**Identify ions:**
- Ba(NO₃)₂: Ba²⁺ and NO₃⁻
- K₂SO₄: K⁺ and SO₄²⁻

**Switch partners:**
- Ba²⁺ with SO₄²⁻ → BaSO₄
- K⁺ with NO₃⁻ → KNO₃

**Unbalanced:**

$$\\ce{Ba(NO3)2(aq) + K2SO4(aq) -> BaSO4 + KNO3}$$

**Step 3: Check if reaction occurs (solubility)**

**Check BaSO₄:**
- Sulfate (SO₄²⁻) compound
- Most sulfates soluble...
- **BUT** BaSO₄ is exception (Ba²⁺ makes insoluble sulfate)
- BaSO₄ is **INSOLUBLE** → **precipitates!** ✓

**Check KNO₃:**
- Nitrate (NO₃⁻) compound
- All nitrates soluble
- KNO₃ stays dissolved

**Reaction occurs because precipitate forms!**

**Step 4: Assign states**

$$\\ce{Ba(NO3)2(aq) + K2SO4(aq) -> BaSO4(s) + KNO3(aq)}$$

**Step 5: Balance equation**

**Check atoms:**
- Ba: 1 left, 1 right ✓
- N: 2 left, 1 right ✗
- O: 6 + 4 = 10 left, 4 + 3 = 7 right ✗
- K: 2 left, 1 right ✗
- S: 1 left, 1 right ✓

**Balance K and N:** Need 2 KNO₃

$$\\ce{Ba(NO3)2(aq) + K2SO4(aq) -> BaSO4(s) + 2KNO3(aq)}$$

**Final check:**
- Ba: 1, 1 ✓
- N: 2, 2 ✓
- O: 10, 10 ✓
- K: 2, 2 ✓
- S: 1, 1 ✓

**Answer (c):**

$$\\boxed{\\ce{Ba(NO3)2(aq) + K2SO4(aq) -> BaSO4(s) + 2KNO3(aq)}}$$

**Observation:** White precipitate (BaSO₄) forms immediately

**Note:** BaSO₄ is used in medical imaging (barium meals)

---

**(d) C₃H₈(g) + O₂(g) →**

**Step 1: Identify reaction type**
- C₃H₈: Hydrocarbon (propane)
- O₂: Oxygen gas
- Pattern: Hydrocarbon + O₂

**This is COMBUSTION**

**Step 2: Predict products**

**Complete combustion of hydrocarbon:**
- C → CO₂
- H → H₂O
- Energy released

$$\\ce{C3H8(g) + O2(g) -> CO2(g) + H2O(g)}$$

**Step 3: Balance equation**

**Strategy: Balance in order C, H, then O**

**Balance C:** 3 carbons left → need 3 CO₂

$$\\ce{C3H8 + O2 -> 3CO2 + H2O}$$

**Balance H:** 8 hydrogens left → need 4 H₂O (each has 2 H)

$$\\ce{C3H8 + O2 -> 3CO2 + 4H2O}$$

**Balance O:**
- Right side: 3 CO₂ = 6 O, plus 4 H₂O = 4 O
- Total O on right = 6 + 4 = 10 O atoms
- Need 10 O atoms on left
- Each O₂ has 2 O → need 10/2 = 5 O₂

$$\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$$

**Final check:**
- C: 3, 3 ✓
- H: 8, 8 ✓
- O: 10, 10 ✓

**Answer (d):**

$$\\boxed{\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(g) + \\text{energy}}}$$

**Additional information:**
- This is complete combustion (sufficient O₂)
- Highly exothermic (releases heat and light)
- Blue flame when burning
- Used in gas grills, camping stoves, torches

**If insufficient O₂ (incomplete combustion):**

$$\\ce{2C3H8 + 7O2 -> 6CO + 8H2O}$$ (produces toxic CO)

Or:

$$\\ce{C3H8 + 2O2 -> 3C + 4H2O}$$ (produces soot)

**Yellow/orange flame indicates incomplete combustion**

---

**Summary of Answers:**

| Reaction | Balanced Equation | Type |
|----------|-------------------|------|
| (a) | $\\ce{Cl2 + 2NaBr -> 2NaCl + Br2}$ | Single replacement ✓ |
| (b) | $\\ce{Cu + HCl -> NR}$ | Would be SR, but no reaction |
| (c) | $\\ce{Ba(NO3)2 + K2SO4 -> BaSO4(s) + 2KNO3}$ | Double replacement ✓ |
| (d) | $\\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$ | Combustion ✓ |

**Key concepts applied:**
1. Activity series (halogens and metals)
2. Solubility rules
3. Combustion product prediction
4. Balancing equations
5. State symbols`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A student adds a piece of aluminum metal to a solution containing copper(II) sulfate. A reddish-brown solid forms on the aluminum, and the blue solution fades. (a) Write the balanced molecular equation for this reaction. (b) Identify the oxidation and reduction half-reactions. (c) Calculate the mass of copper that forms when 5.40 g of aluminum reacts with excess CuSO₄. (Al = 27.0 g/mol, Cu = 63.5 g/mol)',
            solution: `**Solution:**

**Given:**
- Aluminum metal (Al) added to copper(II) sulfate solution (CuSO₄)
- Observations: Reddish-brown solid forms, blue solution fades
- Mass of Al = 5.40 g
- Molar masses: Al = 27.0 g/mol, Cu = 63.5 g/mol

**Find:** (a) Balanced equation, (b) Half-reactions, (c) Mass of Cu formed

---

**Part (a): Write balanced molecular equation**

**Step 1: Identify reaction type**
- Al: Free element (metal)
- CuSO₄: Compound
- Pattern: Metal + Compound

**This is SINGLE REPLACEMENT**

**Step 2: Check activity series**

**Metal activity series:**
- ... Mg > **Al** > Zn > Fe > ... > **Cu** > Ag > Au

**Al is ABOVE Cu** → Al is more reactive
- Al can displace Cu from compounds
- **Reaction occurs!** ✓

**Step 3: Predict products**

Al replaces Cu in CuSO₄:
- Al pairs with SO₄²⁻ → Al₂(SO₄)₃
- Cu is displaced as Cu metal

**Why Al₂(SO₄)₃?**
- Al forms Al³⁺ ions
- SO₄²⁻ is 2- charge
- Need 2 Al³⁺ and 3 SO₄²⁻ to balance charges
- Formula: Al₂(SO₄)₃

**Unbalanced equation:**

$$\\ce{Al(s) + CuSO4(aq) -> Al2(SO4)3(aq) + Cu(s)}$$

**Step 4: Balance the equation**

**Method: Balance atoms systematically**

**Current atoms:**
- Al: 1 left, 2 right → need 2 Al on left
- Cu: 1 left, 1 right → balanced for now
- S: 1 left, 3 right → need 3 CuSO₄ on left
- O: 4 left, 12 right → will balance with sulfates

**Try balancing:**

$$\\ce{2Al + 3CuSO4 -> Al2(SO4)3 + Cu}$$

**Check Cu:** 3 left, 1 right → need 3 Cu on right

$$\\ce{2Al(s) + 3CuSO4(aq) -> Al2(SO4)3(aq) + 3Cu(s)}$$

**Final atom check:**
- Al: 2, 2 ✓
- Cu: 3, 3 ✓
- S: 3, 3 ✓
- O: 12, 12 ✓

**Answer (a):**

$$\\boxed{\\ce{2Al(s) + 3CuSO4(aq) -> Al2(SO4)3(aq) + 3Cu(s)}}$$

**Verification of observations:**
- Reddish-brown solid: Cu metal forming on Al ✓
- Blue solution fades: Cu²⁺ ions (blue) being reduced to Cu(s) ✓

---

**Part (b): Identify oxidation and reduction half-reactions**

**Step 1: Determine oxidation states**

**Reactants:**
- Al(s): 0 (free element)
- CuSO₄: Cu is +2, S is +6, O is -2

**Products:**
- Al₂(SO₄)₃: Al is +3, S is +6, O is -2
- Cu(s): 0 (free element)

**Step 2: Identify changes**

**Aluminum:**
- Al: 0 → +3
- Loses 3 electrons
- **Oxidation** (LEO: Lose Electrons = Oxidation)

**Copper:**
- Cu: +2 → 0
- Gains 2 electrons
- **Reduction** (GER: Gain Electrons = Reduction)

**Step 3: Write half-reactions**

**Oxidation half-reaction (Al loses electrons):**

$$\\ce{Al(s) -> Al^{3+}(aq) + 3e^-}$$

**Al is oxidized** (oxidation number increases)
- Loses 3 electrons
- Becomes Al³⁺

**Reduction half-reaction (Cu gains electrons):**

$$\\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)}$$

**Cu²⁺ is reduced** (oxidation number decreases)
- Gains 2 electrons
- Becomes Cu metal

**Answer (b):**

$$\\boxed{\\text{Oxidation: } \\ce{Al(s) -> Al^{3+}(aq) + 3e^-}}$$

$$\\boxed{\\text{Reduction: } \\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)}}$$

**Step 4: Verify overall equation**

To get overall reaction, balance electrons:
- Oxidation produces 3 e⁻ per Al
- Reduction uses 2 e⁻ per Cu
- LCM of 3 and 2 = 6

**Multiply to balance electrons:**
- Oxidation × 2: $\\ce{2Al -> 2Al^{3+} + 6e^-}$
- Reduction × 3: $\\ce{3Cu^{2+} + 6e^- -> 3Cu}$

**Add half-reactions:**

$$\\ce{2Al + 3Cu^{2+} + 6e^- -> 2Al^{3+} + 3Cu + 6e^-}$$

**Cancel electrons:**

$$\\ce{2Al + 3Cu^{2+} -> 2Al^{3+} + 3Cu}$$

**Add spectator ions (SO₄²⁻):**

$$\\ce{2Al + 3CuSO4 -> Al2(SO4)3 + 3Cu}$$ ✓

**Matches our answer from part (a)!**

**Terminology:**
- **Al is the reducing agent** (causes reduction of Cu²⁺, gets oxidized itself)
- **Cu²⁺ is the oxidizing agent** (causes oxidation of Al, gets reduced itself)

---

**Part (c): Calculate mass of Cu formed**

**Given:**
- Mass of Al = 5.40 g
- Excess CuSO₄ (Al is limiting reactant)

**Step 1: Convert mass of Al to moles**

$$n_{Al} = \\frac{\\text{mass}}{\\text{molar mass}}$$

$$n_{Al} = \\frac{5.40 \\text{ g}}{27.0 \\text{ g/mol}} = 0.200 \\text{ mol Al}$$

**Step 2: Use stoichiometry to find moles of Cu**

**From balanced equation:**

$$\\ce{2Al + 3CuSO4 -> Al2(SO4)3 + 3Cu}$$

**Mole ratio:** 2 mol Al : 3 mol Cu

$$\\frac{2 \\text{ mol Al}}{3 \\text{ mol Cu}}$$

**Calculate moles of Cu:**

$$n_{Cu} = 0.200 \\text{ mol Al} \\times \\frac{3 \\text{ mol Cu}}{2 \\text{ mol Al}}$$

$$n_{Cu} = 0.200 \\times \\frac{3}{2} = 0.300 \\text{ mol Cu}$$

**Step 3: Convert moles of Cu to mass**

$$\\text{mass}_{Cu} = n_{Cu} \\times M_{Cu}$$

$$\\text{mass}_{Cu} = 0.300 \\text{ mol} \\times 63.5 \\text{ g/mol}$$

$$\\text{mass}_{Cu} = 19.05 \\text{ g}$$

$$\\text{mass}_{Cu} = 19.1 \\text{ g}$$ (3 sig figs)

**Answer (c):**

$$\\boxed{19.1 \\text{ g Cu}}$$

---

**Summary of Solution:**

**Calculation flow:**

$$5.40 \\text{ g Al} \\xrightarrow{÷27.0} 0.200 \\text{ mol Al} \\xrightarrow{×\\frac{3}{2}} 0.300 \\text{ mol Cu} \\xrightarrow{×63.5} 19.1 \\text{ g Cu}$$

**Stoichiometry summary:**

| Substance | Molar Mass | Moles | Mass |
|-----------|------------|-------|------|
| Al (reactant) | 27.0 g/mol | 0.200 mol | 5.40 g (given) |
| Cu (product) | 63.5 g/mol | 0.300 mol | 19.1 g (answer) |

**Mole ratio check:**
- $\\frac{n_{Cu}}{n_{Al}} = \\frac{0.300}{0.200} = \\frac{3}{2}$ ✓ (matches equation)

---

**Additional Insights:**

**Why does this reaction occur?**
1. **Activity series:** Al more reactive than Cu
2. **Electron transfer:** Al readily loses electrons (good reducing agent)
3. **Energy favorable:** Overall reaction exothermic

**Practical applications:**
- Demonstrates reactivity of metals
- Shows electron transfer visually
- Thermite reaction (Fe₂O₃ + Al) uses same principle

**Observable changes:**
- Al surface becomes pitted/dissolved
- Reddish-brown Cu deposits on Al
- Blue Cu²⁺ solution becomes colorless
- Solution may get warm (exothermic)

**Safety notes:**
- Reaction is exothermic
- If large amounts used, significant heat generated
- Al₂(SO₄)₃ remains dissolved (not visible)

**Percent yield consideration:**
- Calculated: 19.1 g (theoretical yield)
- Actual yield in lab might be less
- Some Cu might not adhere to Al
- Some might remain suspended in solution

**Mass comparison:**
- Started with 5.40 g Al
- Produced 19.1 g Cu
- Mass of Cu > mass of Al used
- This makes sense: Cu has larger molar mass (63.5 vs 27.0)
- Even though we make fewer moles of Cu (0.300 vs 0.200 used), the mass is greater

**Complete answer check:**
✓ Equation balanced
✓ Half-reactions identified correctly
✓ Stoichiometry calculation accurate
✓ Significant figures appropriate (3 sig figs)`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', reactionTypesTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: reactionTypesTopic.id,
        front: 'What are the 5 main types of chemical reactions and their general patterns?',
        back: '1) Synthesis: A + B → AB (combine), 2) Decomposition: AB → A + B (break apart), 3) Single Replacement: A + BC → AC + B (one swap), 4) Double Replacement: AB + CD → AD + CB (two swap), 5) Combustion: Fuel + O₂ → CO₂ + H₂O (burns).'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'What is the metal activity series and how is it used?',
        back: 'Li > K > Ba > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Ag > Au. Higher metals displace lower metals from compounds. Use to predict if single replacement reactions occur.'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'What are the key solubility rules for predicting precipitates?',
        back: 'SOLUBLE: Group 1, NH₄⁺, NO₃⁻, most Cl⁻/Br⁻/I⁻ (except Ag⁺, Pb²⁺), most SO₄²⁻ (except Ba²⁺, Pb²⁺). INSOLUBLE: Most CO₃²⁻, PO₄³⁻, OH⁻, S²⁻ (except Group 1, NH₄⁺).'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'What are the driving forces that make reactions "go"?',
        back: '1) Formation of precipitate (insoluble solid), 2) Formation of water (neutralization), 3) Formation of gas (escapes), 4) Transfer of electrons (redox), 5) Energy release (exothermic).'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'How do you predict products of a double replacement reaction?',
        back: 'Switch cations and anions (AB + CD → AD + CB), then check solubility rules. Reaction occurs if precipitate, water, or gas forms. Use solubility rules to determine states (s) or (aq).'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'What are the products of complete combustion of hydrocarbons?',
        back: 'CO₂ (carbon dioxide) + H₂O (water) + energy. Pattern: CₓHᵧ + O₂ → CO₂ + H₂O. Incomplete combustion (insufficient O₂) produces CO or C (soot).'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'How do you determine if a single replacement reaction will occur?',
        back: 'Use activity series. For metals: Higher metal displaces lower metal. For halogens (F₂ > Cl₂ > Br₂ > I₂): Higher halogen displaces lower halogen. If reactant metal/halogen is below the one in compound, NO REACTION.'
      },
      {
        topicId: reactionTypesTopic.id,
        front: 'What is the difference between synthesis and decomposition reactions?',
        back: 'Synthesis: Multiple reactants combine to form ONE product (A + B → AB). Often exothermic. Decomposition: ONE reactant breaks into multiple products (AB → A + B). Often endothermic, requires energy input (heat, electricity, light).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', reactionTypesTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Chemical Reactions (Part 1)!');
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
