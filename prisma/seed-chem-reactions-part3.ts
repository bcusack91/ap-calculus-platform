import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Chemical Reactions (Part 3)...');

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

  // Topic 3: Net Ionic Equations
  const netIonicTopic = await prisma.topic.create({
    data: {
      title: 'Net Ionic Equations and Spectator Ions',
      slug: 'net-ionic-equations',
      description: 'Learn to write complete ionic and net ionic equations, identify spectator ions, and understand precipitation, acid-base, and gas-forming reactions at the ionic level.',
      order: existingTopics + 1,
      categoryId: reactionsCategory.id,
      isPremium: false,
      textContent: `
# Net Ionic Equations and Spectator Ions

## Introduction

**Why net ionic equations?**
- Show what's actually happening at the ionic level
- Eliminate spectator ions (don't participate)
- Focus on the chemical change
- More accurate representation of aqueous reactions

**Three types of equations:**
1. **Molecular equation** (complete formula units)
2. **Complete ionic equation** (all ions shown)
3. **Net ionic equation** (only reacting species)

## Types of Equations

### Molecular Equation

**Shows:** Complete formula units of all reactants and products

**Example:**

$$\\ce{AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)}$$

**Characteristics:**
- Looks like a typical balanced equation
- Doesn't show ionic nature of species
- Good for stoichiometry calculations
- Doesn't reveal mechanism

### Complete Ionic Equation

**Shows:** All strong electrolytes as separated ions

**Rules for complete ionic equations:**

**Write as ions (aq):**
- Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄
- Strong bases: Group 1 hydroxides (NaOH, KOH), Ba(OH)₂, Sr(OH)₂, Ca(OH)₂
- Soluble ionic compounds (use solubility rules)

**Keep as molecules:**
- Solids (s)
- Liquids (l)
- Gases (g)
- Weak acids and bases
- Insoluble compounds
- Water

**Example (same reaction):**

$$\\ce{Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s) + Na+(aq) + NO3-(aq)}$$

**All ions separated except AgCl (precipitate)**

### Net Ionic Equation

**Shows:** Only species that undergo chemical change

**Eliminate:** Spectator ions (appear on both sides unchanged)

**Example (same reaction):**

**Complete ionic:**

$$\\ce{Ag+(aq) + NO3-(aq) + Na+(aq) + Cl-(aq) -> AgCl(s) + Na+(aq) + NO3-(aq)}$$

**Identify spectators:**
- Na⁺ appears on both sides → spectator
- NO₃⁻ appears on both sides → spectator

**Cancel spectators:**

$$\\ce{Ag+(aq) + \\cancel{NO3-(aq)} + \\cancel{Na+(aq)} + Cl-(aq) -> AgCl(s) + \\cancel{Na+(aq)} + \\cancel{NO3-(aq)}}$$

**Net ionic equation:**

$$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}$$

**This shows the essential chemical change!**

## Spectator Ions

**Spectator ions:** Ions present in solution but don't participate in reaction
- Appear on both sides of complete ionic equation
- Remain dissolved and unchanged
- Don't affect chemical change
- Important for charge balance but not for reaction

**How to identify:**
1. Write complete ionic equation
2. Find ions that appear on both sides
3. Those are spectators

**Example:**

$$\\ce{2KOH(aq) + H2SO4(aq) -> K2SO4(aq) + 2H2O(l)}$$

**Complete ionic:**

$$\\ce{2K+(aq) + 2OH-(aq) + 2H+(aq) + SO4^{2-}(aq) -> 2K+(aq) + SO4^{2-}(aq) + 2H2O(l)}$$

**Spectators:** K⁺ and SO₄²⁻

**Net ionic:**

$$\\ce{2OH-(aq) + 2H+(aq) -> 2H2O(l)}$$

Or simplified:

$$\\ce{OH-(aq) + H+(aq) -> H2O(l)}$$

## Writing Net Ionic Equations

### Step-by-Step Procedure

**Step 1: Write balanced molecular equation**
- Include states (s, l, g, aq)
- Balance atoms and charges

**Step 2: Write complete ionic equation**
- Separate strong electrolytes into ions
- Keep solids, liquids, gases, and weak electrolytes together

**Step 3: Identify spectator ions**
- Find ions unchanged on both sides

**Step 4: Write net ionic equation**
- Remove spectator ions
- Simplify coefficients if possible
- Check that atoms and charges balance

**Example: Precipitation**

**Step 1: Molecular**

$$\\ce{Pb(NO3)2(aq) + 2KI(aq) -> PbI2(s) + 2KNO3(aq)}$$

**Step 2: Complete ionic**

$$\\ce{Pb^{2+}(aq) + 2NO3-(aq) + 2K+(aq) + 2I-(aq) -> PbI2(s) + 2K+(aq) + 2NO3-(aq)}$$

**Step 3: Identify spectators**
- K⁺: both sides
- NO₃⁻: both sides

**Step 4: Net ionic**

$$\\ce{Pb^{2+}(aq) + 2I-(aq) -> PbI2(s)}$$

**Check:**
- Atoms: 1 Pb, 2 I (both sides) ✓
- Charge: +2 + 2(-1) = 0 left, 0 right ✓

## Common Types of Net Ionic Equations

### 1. Precipitation Reactions

**Pattern:** Cation + Anion → Insoluble salt

**Example 1:**

$$\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}$$

**Example 2:**

$$\\ce{Ba^{2+}(aq) + SO4^{2-}(aq) -> BaSO4(s)}$$

**Example 3:**

$$\\ce{Ca^{2+}(aq) + CO3^{2-}(aq) -> CaCO3(s)}$$

**Driving force:** Formation of insoluble solid

### 2. Acid-Base Neutralization

**Strong acid + Strong base:**

**General net ionic equation:**

$$\\ce{H+(aq) + OH-(aq) -> H2O(l)}$$

**This is the net ionic equation for ALL strong acid + strong base reactions!**

**Example 1:** HCl + NaOH

$$\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

**Net ionic:**

$$\\ce{H+(aq) + OH-(aq) -> H2O(l)}$$

**Example 2:** H₂SO₄ + KOH

$$\\ce{H2SO4(aq) + 2KOH(aq) -> K2SO4(aq) + 2H2O(l)}$$

**Net ionic:**

$$\\ce{H+(aq) + OH-(aq) -> H2O(l)}$$

**Weak acid + Strong base:**

**Weak acid stays together (not fully ionized)**

**Example:** Acetic acid + NaOH

$$\\ce{CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l)}$$

**Net ionic:**

$$\\ce{CH3COOH(aq) + OH-(aq) -> CH3COO-(aq) + H2O(l)}$$

**Note:** CH₃COOH stays together (weak acid)

### 3. Gas-Forming Reactions

**Carbonate/Bicarbonate + Acid → CO₂ gas**

**Example 1:** Carbonate

$$\\ce{2HCl(aq) + Na2CO3(aq) -> 2NaCl(aq) + H2O(l) + CO2(g)}$$

**Net ionic:**

$$\\ce{2H+(aq) + CO3^{2-}(aq) -> H2O(l) + CO2(g)}$$

**Example 2:** Bicarbonate

$$\\ce{HCl(aq) + NaHCO3(aq) -> NaCl(aq) + H2O(l) + CO2(g)}$$

**Net ionic:**

$$\\ce{H+(aq) + HCO3-(aq) -> H2O(l) + CO2(g)}$$

**Sulfite + Acid → SO₂ gas**

$$\\ce{2H+(aq) + SO3^{2-}(aq) -> H2O(l) + SO2(g)}$$

**Sulfide + Acid → H₂S gas**

$$\\ce{2H+(aq) + S^{2-}(aq) -> H2S(g)}$$

**Ammonium salt + Strong base → NH₃ gas**

$$\\ce{NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l)}$$

### 4. Oxidation-Reduction (Redox)

**Electron transfer reactions**

**Example:** Zn + Cu²⁺

$$\\ce{Zn(s) + Cu^{2+}(aq) -> Zn^{2+}(aq) + Cu(s)}$$

**No spectators** (all species participate)

**This IS the net ionic equation**

## Rules for States in Net Ionic Equations

**Aqueous (aq):** 
- Strong electrolytes that dissociate
- Soluble ionic compounds
- Strong acids
- Strong bases

**Solid (s):**
- Precipitates (insoluble compounds)
- Pure metals

**Liquid (l):**
- Water (when product)
- Pure molecular liquids

**Gas (g):**
- Gases that escape (CO₂, H₂S, NH₃, SO₂)

## Checking Net Ionic Equations

**Two things must balance:**

### 1. Mass Balance (Atoms)

**Count each element on both sides**

**Example:**

$$\\ce{Fe^{3+}(aq) + 3OH-(aq) -> Fe(OH)3(s)}$$

**Left:** 1 Fe, 3 O, 3 H
**Right:** 1 Fe, 3 O, 3 H ✓

### 2. Charge Balance

**Sum of charges must equal on both sides**

**Example:**

$$\\ce{Fe^{3+}(aq) + 3OH-(aq) -> Fe(OH)3(s)}$$

**Left:** +3 + 3(-1) = 0
**Right:** 0 (neutral solid) ✓

**Common mistake:** Forgetting to balance charges!

## Special Cases

### Case 1: No Reaction

**If all ions are spectators → No net ionic equation**

**Example:**

$$\\ce{NaCl(aq) + KNO3(aq) -> NaNO3(aq) + KCl(aq)}$$

**All products soluble → all ions are spectators**

**Net ionic:** None (or write "No reaction")

**No driving force:**
- No precipitate
- No water formed
- No gas formed
- No electron transfer

### Case 2: Molecular Compounds React

**If reactants are molecular (not ionic)**

**Example:**

$$\\ce{NH3(aq) + HCl(aq) -> NH4Cl(aq)}$$

**Net ionic:**

$$\\ce{NH3(aq) + H+(aq) -> NH4+(aq)}$$

**NH₃ stays together (weak base)**

### Case 3: Polyatomic Ions Stay Together

**Common mistake:** Breaking up polyatomic ions

**Wrong:** SO₄²⁻ → S⁶⁺ + 4O²⁻

**Right:** SO₄²⁻ stays as one unit

**Polyatomic ions that stay together:**
- SO₄²⁻, NO₃⁻, CO₃²⁻, PO₄³⁻
- ClO₄⁻, ClO₃⁻, MnO₄⁻
- NH₄⁺, C₂H₃O₂⁻

**Exception:** Insoluble compounds or molecules

## Summary of Net Ionic Equation Types

| Type | Molecular Example | Net Ionic | Driving Force |
|------|-------------------|-----------|---------------|
| **Precipitation** | AgNO₃ + NaCl | Ag⁺ + Cl⁻ → AgCl(s) | Solid forms |
| **Acid-Base** | HCl + NaOH | H⁺ + OH⁻ → H₂O | Water forms |
| **Gas formation** | HCl + Na₂CO₃ | 2H⁺ + CO₃²⁻ → H₂O + CO₂(g) | Gas escapes |
| **Redox** | Zn + CuSO₄ | Zn + Cu²⁺ → Zn²⁺ + Cu | Electron transfer |

## Practice Strategy

**When writing net ionic equations:**

1. ✓ Start with balanced molecular equation
2. ✓ Assign correct states
3. ✓ Separate strong electrolytes
4. ✓ Keep weak electrolytes, solids, gases together
5. ✓ Identify and cancel spectators
6. ✓ Check atom balance
7. ✓ Check charge balance
8. ✓ Simplify coefficients if possible

**Common strong electrolytes to memorize:**
- Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄
- Strong bases: NaOH, KOH, LiOH, Ba(OH)₂, Sr(OH)₂, Ca(OH)₂
- Most salts (if soluble)

**Common weak electrolytes:**
- Weak acids: CH₃COOH, HF, H₂CO₃, H₃PO₄
- Weak bases: NH₃, amines
- Water (H₂O)
`,
      exampleProblems: {
        create: [
          {
            question: 'Write the complete ionic and net ionic equations for: BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)',
            solution: `**Solution:**

**Given molecular equation:**

$$\\ce{BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)}$$

**Task:** Write complete ionic and net ionic equations

---

**Step 1: Identify which species dissociate**

**Reactants:**
- **BaCl₂(aq):** Soluble ionic compound → dissociates
  - Ba²⁺ and Cl⁻ ions
  
- **Na₂SO₄(aq):** Soluble ionic compound → dissociates
  - Na⁺ and SO₄²⁻ ions

**Products:**
- **BaSO₄(s):** **Precipitate** (insoluble) → stays together
  - Keep as BaSO₄(s)
  
- **NaCl(aq):** Soluble ionic compound → dissociates
  - Na⁺ and Cl⁻ ions

**Key point:** Solids don't dissociate in ionic equations!

---

**Step 2: Write complete ionic equation**

**Dissociate all aqueous ionic compounds:**

**BaCl₂(aq):**
- Formula: BaCl₂
- Ions: 1 Ba²⁺ + 2 Cl⁻

**Na₂SO₄(aq):**
- Formula: Na₂SO₄
- Ions: 2 Na⁺ + 1 SO₄²⁻

**2NaCl(aq):**
- Formula: 2 NaCl
- Ions: 2 Na⁺ + 2 Cl⁻

**Complete ionic equation:**

$$\\ce{Ba^{2+}(aq) + 2Cl^-(aq) + 2Na^+(aq) + SO4^{2-}(aq) -> BaSO4(s) + 2Na^+(aq) + 2Cl^-(aq)}$$

**Answer - Complete ionic:**

$$\\boxed{\\ce{Ba^{2+}(aq) + 2Cl^-(aq) + 2Na^+(aq) + SO4^{2-}(aq) -> BaSO4(s) + 2Na^+(aq) + 2Cl^-(aq)}}$$

---

**Step 3: Identify spectator ions**

**Look for ions appearing on both sides unchanged:**

**Left side:**
- Ba²⁺(aq)
- 2Cl⁻(aq)
- 2Na⁺(aq)
- SO₄²⁻(aq)

**Right side:**
- BaSO₄(s) - not an ion!
- 2Na⁺(aq)
- 2Cl⁻(aq)

**Spectator ions:**
- **2Na⁺:** Appears on both sides as 2Na⁺(aq)
- **2Cl⁻:** Appears on both sides as 2Cl⁻(aq)

**Ions that react:**
- Ba²⁺: Left side as ion, right side in solid
- SO₄²⁻: Left side as ion, right side in solid

---

**Step 4: Cancel spectator ions**

$$\\ce{Ba^{2+}(aq) + \\cancel{2Cl^-(aq)} + \\cancel{2Na^+(aq)} + SO4^{2-}(aq) -> BaSO4(s) + \\cancel{2Na^+(aq)} + \\cancel{2Cl^-(aq)}}$$

---

**Step 5: Write net ionic equation**

**What remains after canceling:**

$$\\ce{Ba^{2+}(aq) + SO4^{2-}(aq) -> BaSO4(s)}$$

**Answer - Net ionic:**

$$\\boxed{\\ce{Ba^{2+}(aq) + SO4^{2-}(aq) -> BaSO4(s)}}$$

---

**Step 6: Verify the net ionic equation**

**Check 1: Atom balance**

**Left side:** 1 Ba, 1 S, 4 O
**Right side:** 1 Ba, 1 S, 4 O ✓

**Check 2: Charge balance**

**Left side:** (+2) + (-2) = 0
**Right side:** 0 (neutral solid) ✓

**Both balanced!** ✓

---

**Summary:**

| Type | Equation |
|------|----------|
| **Molecular** | BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq) |
| **Complete Ionic** | Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq) |
| **Net Ionic** | **Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)** |
| **Spectators** | Na⁺, Cl⁻ |

---

**Interpretation:**

**What the net ionic equation tells us:**
- **Essential change:** Ba²⁺ ions + SO₄²⁻ ions combine to form solid BaSO₄
- **Spectators ignored:** Na⁺ and Cl⁻ just "watch" the reaction
- **Driving force:** Formation of insoluble BaSO₄ precipitate

**Why this matters:**
- Net ionic shows ACTUAL chemical change
- Same net ionic equation for ANY soluble barium salt + ANY soluble sulfate
- Example: Ba(NO₃)₂ + K₂SO₄ gives same net ionic!

**General pattern for this type:**

$$\\ce{Ba^{2+} + SO4^{2-} -> BaSO4(s)}$$

**Any source of Ba²⁺ + any source of SO₄²⁻ → BaSO₄ precipitate**

**Observable evidence:**
- Clear solutions mixed
- White precipitate forms immediately
- Solution becomes cloudy/milky

**Applications:**
- Test for sulfate ions (add Ba²⁺ solution)
- Test for barium ions (add SO₄²⁻ solution)
- Qualitative analysis`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Write the net ionic equation for the reaction between aqueous solutions of hydrochloric acid and sodium carbonate. The products are sodium chloride, water, and carbon dioxide gas.',
            solution: `**Solution:**

**Given information:**
- Reactants: HCl(aq) and Na₂CO₃(aq)
- Products: NaCl, H₂O, CO₂(g)
- This is an acid-carbonate reaction (gas-forming)

---

**Step 1: Write balanced molecular equation**

**Reactants:**
- HCl(aq) - hydrochloric acid
- Na₂CO₃(aq) - sodium carbonate

**Products:**
- NaCl(aq) - sodium chloride (soluble)
- H₂O(l) - water
- CO₂(g) - carbon dioxide gas

**Unbalanced:**

$$\\ce{HCl(aq) + Na2CO3(aq) -> NaCl(aq) + H2O(l) + CO2(g)}$$

**Balance:**

Check atoms:
- H: 1 left, 2 right (from H₂O)
- Cl: 1 left, 1 right
- Na: 2 left, 1 right
- C: 1 left, 1 right
- O: 3 left, 3 right (1 in H₂O, 2 in CO₂)

**Need 2 HCl and 2 NaCl:**

$$\\ce{2HCl(aq) + Na2CO3(aq) -> 2NaCl(aq) + H2O(l) + CO2(g)}$$

**Final check:**
- H: 2, 2 ✓
- Cl: 2, 2 ✓
- Na: 2, 2 ✓
- C: 1, 1 ✓
- O: 3, 3 ✓

**Balanced molecular equation:**

$$\\boxed{\\ce{2HCl(aq) + Na2CO3(aq) -> 2NaCl(aq) + H2O(l) + CO2(g)}}$$

---

**Step 2: Write complete ionic equation**

**Identify what dissociates:**

**HCl(aq):** Strong acid → completely dissociates
- H⁺(aq) + Cl⁻(aq)
- 2HCl → 2H⁺ + 2Cl⁻

**Na₂CO₃(aq):** Soluble ionic compound → dissociates
- 2Na⁺(aq) + CO₃²⁻(aq)

**NaCl(aq):** Soluble ionic compound → dissociates
- Na⁺(aq) + Cl⁻(aq)
- 2NaCl → 2Na⁺ + 2Cl⁻

**H₂O(l):** Liquid → stays together (molecular)

**CO₂(g):** Gas → stays together (molecular)

**Complete ionic equation:**

$$\\ce{2H+(aq) + 2Cl-(aq) + 2Na+(aq) + CO3^{2-}(aq) -> 2Na+(aq) + 2Cl-(aq) + H2O(l) + CO2(g)}$$

---

**Step 3: Identify spectator ions**

**Compare both sides:**

**Left side:**
- 2H⁺(aq)
- 2Cl⁻(aq)
- 2Na⁺(aq)
- CO₃²⁻(aq)

**Right side:**
- 2Na⁺(aq)
- 2Cl⁻(aq)
- H₂O(l)
- CO₂(g)

**Spectator ions (appear unchanged on both sides):**
- **2Na⁺(aq)**
- **2Cl⁻(aq)**

**Reacting species:**
- 2H⁺ → becomes part of H₂O
- CO₃²⁻ → becomes part of H₂O and CO₂

---

**Step 4: Cancel spectator ions**

$$\\ce{2H+(aq) + \\cancel{2Cl-(aq)} + \\cancel{2Na+(aq)} + CO3^{2-}(aq) -> \\cancel{2Na+(aq)} + \\cancel{2Cl-(aq)} + H2O(l) + CO2(g)}$$

---

**Step 5: Write net ionic equation**

$$\\ce{2H+(aq) + CO3^{2-}(aq) -> H2O(l) + CO2(g)}$$

**Answer:**

$$\\boxed{\\ce{2H+(aq) + CO3^{2-}(aq) -> H2O(l) + CO2(g)}}$$

---

**Step 6: Verify balance**

**Atom balance:**
- H: 2 left, 2 right (in H₂O) ✓
- C: 1 left, 1 right (in CO₂) ✓
- O: 3 left, 3 right (1 in H₂O, 2 in CO₂) ✓

**Charge balance:**
- Left: 2(+1) + (-2) = +2 - 2 = 0
- Right: 0 (all neutral molecules) ✓

**Both balanced!** ✓

---

**Interpretation and Analysis:**

**What does this equation show?**
- **Essential change:** H⁺ ions react with CO₃²⁻ ions
- **Products:** Water and CO₂ gas
- **Driving forces:** 
  1. Formation of water (stable molecule)
  2. Formation of gas (escapes solution)

**Why CO₂ forms:**

**Step-by-step mechanism:**

1. **First H⁺ reacts with CO₃²⁻:**

$$\\ce{H+ + CO3^{2-} -> HCO3-}$$ (bicarbonate)

2. **Second H⁺ reacts with HCO₃⁻:**

$$\\ce{H+ + HCO3- -> H2CO3}$$ (carbonic acid)

3. **Carbonic acid unstable, decomposes:**

$$\\ce{H2CO3 -> H2O + CO2(g)}$$

**Net result:** Same as our net ionic equation!

---

**General applicability:**

**This net ionic equation applies to:**
- **ANY acid + carbonate**
- Doesn't matter what the spectator ions are

**Examples with same net ionic:**

1. **Sulfuric acid + potassium carbonate:**

$$\\ce{H2SO4 + K2CO3 -> K2SO4 + H2O + CO2}$$

**Net ionic:** Same! $\\ce{2H+ + CO3^{2-} -> H2O + CO2}$

2. **Nitric acid + calcium carbonate:**

$$\\ce{2HNO3 + CaCO3 -> Ca(NO3)2 + H2O + CO2}$$

**Net ionic:** Same! $\\ce{2H+ + CO3^{2-} -> H2O + CO2}$

---

**Observable evidence:**

**In the lab, you would see:**
- Vigorous bubbling (CO₂ gas escaping)
- "Fizzing" or "effervescence"
- Gas can be tested:
  * Turns limewater cloudy
  * Extinguishes burning splint

**This reaction is used for:**
- Antacids (neutralize stomach acid)
  - CaCO₃ + HCl → CO₂ (burping)
- Baking: baking soda (NaHCO₃) + acid
- Cleaning: vinegar + baking soda
- Testing for carbonates in qualitative analysis

---

**Comparison to bicarbonate:**

**If using NaHCO₃ (bicarbonate) instead:**

$$\\ce{HCl + NaHCO3 -> NaCl + H2O + CO2}$$

**Net ionic:**

$$\\ce{H+(aq) + HCO3-(aq) -> H2O(l) + CO2(g)}$$

**Notice:** Only need 1 H⁺ (not 2) for bicarbonate

---

**Summary:**

| Equation Type | Equation |
|---------------|----------|
| **Molecular** | 2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂ |
| **Complete Ionic** | 2H⁺ + 2Cl⁻ + 2Na⁺ + CO₃²⁻ → 2Na⁺ + 2Cl⁻ + H₂O + CO₂ |
| **Net Ionic** | **2H⁺ + CO₃²⁻ → H₂O + CO₂** |
| **Spectators** | Na⁺, Cl⁻ |
| **Driving Forces** | Water formation, gas evolution |

**Key takeaway:** Any strong acid + carbonate → water + CO₂ gas`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Consider the following three reactions. For each: (i) write the complete ionic equation, (ii) identify spectator ions, (iii) write the net ionic equation. (a) Fe(NO₃)₃(aq) + 3NaOH(aq) → Fe(OH)₃(s) + 3NaNO₃(aq), (b) HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l), (c) NH₄Cl(aq) + NaOH(aq) → NaCl(aq) + NH₃(g) + H₂O(l)',
            solution: `**Solution:**

**Given:** Three balanced molecular equations

**Task:** For each reaction, write complete ionic and net ionic equations

---

## **Reaction (a): Fe(NO₃)₃ + 3NaOH → Fe(OH)₃ + 3NaNO₃**

**Type:** Precipitation reaction

### **(i) Complete ionic equation**

**Identify what dissociates:**

**Fe(NO₃)₃(aq):** Soluble ionic compound
- Fe³⁺(aq) + 3NO₃⁻(aq)

**3NaOH(aq):** Strong base (soluble)
- 3Na⁺(aq) + 3OH⁻(aq)

**Fe(OH)₃(s):** **Precipitate** (insoluble) - stays together!

**3NaNO₃(aq):** Soluble ionic compound
- 3Na⁺(aq) + 3NO₃⁻(aq)

**Complete ionic:**

$$\\boxed{\\ce{Fe^{3+}(aq) + 3NO3-(aq) + 3Na+(aq) + 3OH-(aq) -> Fe(OH)3(s) + 3Na+(aq) + 3NO3-(aq)}}$$

### **(ii) Identify spectator ions**

**Compare both sides:**

**Spectators (appear unchanged):**
- **3Na⁺(aq):** Both sides
- **3NO₃⁻(aq):** Both sides

**Reacting species:**
- Fe³⁺ and OH⁻ → form Fe(OH)₃(s)

### **(iii) Net ionic equation**

**Cancel spectators:**

$$\\ce{Fe^{3+}(aq) + \\cancel{3NO3-(aq)} + \\cancel{3Na+(aq)} + 3OH-(aq) -> Fe(OH)3(s) + \\cancel{3Na+(aq)} + \\cancel{3NO3-(aq)}}$$

**Net ionic:**

$$\\boxed{\\ce{Fe^{3+}(aq) + 3OH-(aq) -> Fe(OH)3(s)}}$$

**Verification:**
- Atoms: 1 Fe, 3 O, 3 H (both sides) ✓
- Charge: (+3) + 3(-1) = 0 left, 0 right ✓

**Driving force:** Formation of insoluble Fe(OH)₃ precipitate (rust-colored)

---

## **Reaction (b): HNO₃ + KOH → KNO₃ + H₂O**

**Type:** Acid-base neutralization (strong acid + strong base)

### **(i) Complete ionic equation**

**Identify what dissociates:**

**HNO₃(aq):** Strong acid
- H⁺(aq) + NO₃⁻(aq)

**KOH(aq):** Strong base
- K⁺(aq) + OH⁻(aq)

**KNO₃(aq):** Soluble ionic compound
- K⁺(aq) + NO₃⁻(aq)

**H₂O(l):** Liquid - stays together!

**Complete ionic:**

$$\\boxed{\\ce{H+(aq) + NO3-(aq) + K+(aq) + OH-(aq) -> K+(aq) + NO3-(aq) + H2O(l)}}$$

### **(ii) Identify spectator ions**

**Spectators (appear unchanged):**
- **K⁺(aq):** Both sides
- **NO₃⁻(aq):** Both sides

**Reacting species:**
- H⁺ and OH⁻ → form H₂O

### **(iii) Net ionic equation**

**Cancel spectators:**

$$\\ce{H+(aq) + \\cancel{NO3-(aq)} + \\cancel{K+(aq)} + OH-(aq) -> \\cancel{K+(aq)} + \\cancel{NO3-(aq)} + H2O(l)}$$

**Net ionic:**

$$\\boxed{\\ce{H+(aq) + OH-(aq) -> H2O(l)}}$$

**Verification:**
- Atoms: 2 H, 1 O (both sides) ✓
- Charge: (+1) + (-1) = 0 left, 0 right ✓

**Key insight:** This is the SAME net ionic equation for ALL strong acid + strong base reactions!
- HCl + NaOH → same net ionic
- H₂SO₄ + KOH → same net ionic
- Spectators change, but essence is always: H⁺ + OH⁻ → H₂O

**Driving force:** Formation of water (very stable molecule)

---

## **Reaction (c): NH₄Cl + NaOH → NaCl + NH₃ + H₂O**

**Type:** Gas-forming reaction (weak base formation)

### **(i) Complete ionic equation**

**Identify what dissociates:**

**NH₄Cl(aq):** Soluble ionic compound
- NH₄⁺(aq) + Cl⁻(aq)

**NaOH(aq):** Strong base
- Na⁺(aq) + OH⁻(aq)

**NaCl(aq):** Soluble ionic compound
- Na⁺(aq) + Cl⁻(aq)

**NH₃(g):** Gas - stays together! (molecular)

**H₂O(l):** Liquid - stays together!

**Complete ionic:**

$$\\boxed{\\ce{NH4+(aq) + Cl-(aq) + Na+(aq) + OH-(aq) -> Na+(aq) + Cl-(aq) + NH3(g) + H2O(l)}}$$

### **(ii) Identify spectator ions**

**Spectators (appear unchanged):**
- **Na⁺(aq):** Both sides
- **Cl⁻(aq):** Both sides

**Reacting species:**
- NH₄⁺ and OH⁻ → form NH₃ and H₂O

### **(iii) Net ionic equation**

**Cancel spectators:**

$$\\ce{NH4+(aq) + \\cancel{Cl-(aq)} + \\cancel{Na+(aq)} + OH-(aq) -> \\cancel{Na+(aq)} + \\cancel{Cl-(aq)} + NH3(g) + H2O(l)}$$

**Net ionic:**

$$\\boxed{\\ce{NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l)}}$$

**Verification:**
- Atoms: 5 H, 1 N, 1 O (both sides) ✓
- Charge: (+1) + (-1) = 0 left, 0 right ✓

**Driving forces:**
1. Formation of gas (NH₃ escapes)
2. Formation of water

**Observable evidence:**
- Smell of ammonia (pungent, characteristic)
- If heated, reaction faster and more gas evolves
- Can test with damp red litmus paper → turns blue (NH₃ is basic)

---

## **Summary Table**

| Reaction | Complete Ionic | Spectators | Net Ionic | Type |
|----------|----------------|------------|-----------|------|
| **(a)** Fe(NO₃)₃ + 3NaOH | Fe³⁺ + 3NO₃⁻ + 3Na⁺ + 3OH⁻ → Fe(OH)₃(s) + 3Na⁺ + 3NO₃⁻ | Na⁺, NO₃⁻ | **Fe³⁺ + 3OH⁻ → Fe(OH)₃(s)** | Precipitation |
| **(b)** HNO₃ + KOH | H⁺ + NO₃⁻ + K⁺ + OH⁻ → K⁺ + NO₃⁻ + H₂O | K⁺, NO₃⁻ | **H⁺ + OH⁻ → H₂O** | Neutralization |
| **(c)** NH₄Cl + NaOH | NH₄⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + NH₃(g) + H₂O | Na⁺, Cl⁻ | **NH₄⁺ + OH⁻ → NH₃(g) + H₂O** | Gas formation |

---

## **Key Observations and Patterns**

### **Reaction (a) - Precipitation Pattern**

**General pattern:** Metal ion + OH⁻ → Metal hydroxide precipitate

**Works for:**
- Fe³⁺ + 3OH⁻ → Fe(OH)₃(s) [rust-colored]
- Al³⁺ + 3OH⁻ → Al(OH)₃(s) [white]
- Cu²⁺ + 2OH⁻ → Cu(OH)₂(s) [blue]
- Mg²⁺ + 2OH⁻ → Mg(OH)₂(s) [white]

**Exceptions (soluble hydroxides):**
- Group 1 metals (NaOH, KOH)
- Ba(OH)₂, Sr(OH)₂, Ca(OH)₂

### **Reaction (b) - Universal Neutralization**

**This net ionic equation is universal for:**
- ALL strong acid + strong base reactions
- H⁺ + OH⁻ → H₂O

**Examples:**
- HCl + NaOH
- H₂SO₄ + KOH
- HBr + LiOH
- HI + Ca(OH)₂

**All have same essence:** Neutralization of H⁺ and OH⁻

### **Reaction (c) - Ammonium + Base Pattern**

**General pattern:** NH₄⁺ + OH⁻ → NH₃(g) + H₂O

**This is how you prepare ammonia gas in lab!**

**Applications:**
- Qualitative test for ammonium ions
  - Add strong base + heat
  - Smell ammonia or test with litmus
- Industrial ammonia production (different method)

---

## **Additional Practice**

**Can you predict net ionic equations for these?**

1. **Al₂(SO₄)₃ + 6KOH → 2Al(OH)₃ + 3K₂SO₄**
   - Net ionic: Al³⁺ + 3OH⁻ → Al(OH)₃(s)
   
2. **HCl + NaOH → NaCl + H₂O**
   - Net ionic: H⁺ + OH⁻ → H₂O
   
3. **CaCl₂ + 2AgNO₃ → Ca(NO₃)₂ + 2AgCl**
   - Net ionic: Ag⁺ + Cl⁻ → AgCl(s)

**Notice:** Different molecular equations, but similar patterns in net ionic!

---

**Key Takeaway:**

**Net ionic equations reveal:**
1. Actual chemical change (not spectators)
2. Driving forces (precipitate, water, gas)
3. Universal patterns across different reactions
4. What's really happening at ionic level

**Spectator ions are important for:**
- Electrical neutrality
- Complete molecular equation
- But don't participate in reaction itself`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', netIonicTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: netIonicTopic.id,
        front: 'What are the three types of chemical equations and what does each show?',
        back: 'Molecular: complete formula units. Complete ionic: all strong electrolytes as separated ions. Net ionic: only reacting species (spectators removed). Net ionic shows actual chemical change.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'What are spectator ions and how do you identify them?',
        back: 'Ions present in solution but don\'t participate in reaction. Appear unchanged on both sides of complete ionic equation. Identify by writing complete ionic equation and finding ions on both sides.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'What are the rules for writing complete ionic equations?',
        back: 'Separate strong electrolytes into ions (aq). Keep together: solids (s), liquids (l), gases (g), weak acids/bases, insoluble compounds, water. Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'What is the net ionic equation for ALL strong acid + strong base reactions?',
        back: 'H⁺(aq) + OH⁻(aq) → H₂O(l). This is universal regardless of which strong acid or base. Spectator ions (Na⁺, Cl⁻, etc.) change but essence is always same.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'How do you check if a net ionic equation is correct?',
        back: 'Two checks: 1) Atom balance - count each element on both sides, 2) Charge balance - sum of charges must equal on both sides. Both must balance!'
      },
      {
        topicId: netIonicTopic.id,
        front: 'What are common net ionic equations for precipitation reactions?',
        back: 'Ag⁺ + Cl⁻ → AgCl(s), Ba²⁺ + SO₄²⁻ → BaSO₄(s), Ca²⁺ + CO₃²⁻ → CaCO₃(s), Fe³⁺ + 3OH⁻ → Fe(OH)₃(s). Pattern: cation + anion → insoluble salt.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'What are common net ionic equations for gas-forming reactions?',
        back: '2H⁺ + CO₃²⁻ → H₂O + CO₂(g), 2H⁺ + S²⁻ → H₂S(g), NH₄⁺ + OH⁻ → NH₃(g) + H₂O, 2H⁺ + SO₃²⁻ → H₂O + SO₂(g). Driving force: gas escapes.'
      },
      {
        topicId: netIonicTopic.id,
        front: 'When is there "no reaction" in terms of net ionic equations?',
        back: 'When all ions are spectators (no driving force). No precipitate, no water, no gas, no electron transfer. Example: NaCl + KNO₃ → all products soluble, all ions spectators.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', netIonicTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Chemical Reactions (Part 3)!');
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
