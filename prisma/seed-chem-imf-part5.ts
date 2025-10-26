import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Intermolecular Forces and Properties (Part 5)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Intermolecular Forces category
  const imfCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Intermolecular Forces and Properties'
    }
  });

  if (!imfCategory) {
    throw new Error('Intermolecular Forces and Properties category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: imfCategory.id }
  });

  // Topic 5: Mixtures and Separations
  const mixturesTopic = await prisma.topic.create({
    data: {
      title: 'Mixtures and Separation Techniques',
      slug: 'mixtures-separations',
      description: 'Understand types of mixtures, chromatography, distillation, and techniques for separating components based on physical properties.',
      order: existingTopics + 1,
      categoryId: imfCategory.id,
      isPremium: false,
      textContent: `
# Mixtures and Separation Techniques

## Types of Mixtures

**Mixture:** Physical combination of two or more substances
- Components retain their chemical identities
- Can be separated by physical methods
- No chemical bonds formed between components

### Homogeneous Mixtures (Solutions)

**Definition:** Uniform composition throughout
- Same properties in all parts
- Components not visibly distinguishable
- Molecularly mixed

**Examples:**
- Air (N₂, O₂, Ar mixed)
- Salt water (NaCl dissolved in H₂O)
- Brass (Cu and Zn alloy)
- Vinegar (acetic acid in water)
- Gasoline (mixture of hydrocarbons)

**Particle size:** Molecular level (< 1 nm)

**Properties:**
- Clear (may be colored)
- Does not settle
- Cannot be separated by filtration
- Passes through filter paper

### Heterogeneous Mixtures

**Definition:** Non-uniform composition
- Different properties in different parts
- Components visibly distinguishable
- Not molecularly mixed

**Types:**

**1. Suspensions**
- Large particles (> 1000 nm)
- Particles settle over time
- Cloudy/opaque appearance
- Can be separated by filtration

**Examples:**
- Muddy water
- Orange juice with pulp
- Sand in water
- Blood (cells in plasma)

**2. Colloids**
- Intermediate particle size (1-1000 nm)
- Particles do NOT settle
- Cloudy but stable
- Cannot be separated by filtration
- Show **Tyndall effect** (scatter light)

**Examples:**
- Milk (fat droplets in water)
- Fog (water droplets in air)
- Smoke (solid particles in air)
- Gelatin
- Mayonnaise

### Comparison Table

| Type | Particle Size | Settles? | Filterable? | Examples |
|------|---------------|----------|-------------|----------|
| Solution | < 1 nm | No | No | Salt water, air |
| Colloid | 1-1000 nm | No | No | Milk, fog |
| Suspension | > 1000 nm | Yes | Yes | Muddy water |

## Tyndall Effect

**Definition:** Scattering of light by colloidal particles

**Observation:**
- Beam of light passes through solution: **invisible path**
- Beam of light passes through colloid: **visible path** (scattering)

**Example:**
- Flashlight beam in fog (colloid) → visible
- Flashlight beam in clear air (solution of gases) → invisible

**Why it occurs:**
- Colloidal particles large enough to scatter light
- Solution particles too small to scatter light

**Test for colloid:**
- Shine light through mixture
- If beam visible → colloid
- If beam invisible → solution

## Separation Techniques

**General principle:** Use differences in **physical properties** to separate components

### 1. Filtration

**Separates:** Solid from liquid in suspension

**Based on:** Particle size

**Method:**
- Pour mixture through filter paper
- Solid particles trapped (residue)
- Liquid passes through (filtrate)

**Examples:**
- Separate sand from water
- Coffee filter (grounds vs. liquid)
- Laboratory: precipitate from solution

**Limitations:**
- Only works for large particles (suspensions)
- Cannot separate solutions or colloids

### 2. Distillation

**Separates:** Liquids with different boiling points

**Based on:** Boiling point differences

**Simple Distillation:**

**Setup:**
1. Heat mixture in flask
2. Vapor rises and enters condenser
3. Condenser cools vapor back to liquid
4. Collect purified liquid (distillate)

**Process:**
- Component with **lower BP** evaporates first
- Vapor travels to condenser
- Condenses and is collected
- Component with higher BP remains in flask

**Best for:** Large BP differences (> 25°C)

**Examples:**
- Purify water (remove salt)
- Separate ethanol from water
- Crude oil refining

**Fractional Distillation:**

**For:** Liquids with **similar boiling points**

**Difference from simple:**
- Uses fractionating column
- Multiple vaporization-condensation cycles
- Better separation

**Examples:**
- Separate crude oil into fractions (gasoline, kerosene, diesel)
- Purify ethanol-water mixtures

### 3. Chromatography

**Separates:** Components based on different affinities for mobile and stationary phases

**Based on:** 
- Polarity differences
- Solubility differences
- Adsorption to stationary phase

**Two phases:**

**Stationary phase:** Fixed material (paper, silica gel, column packing)

**Mobile phase:** Moving solvent that carries mixture

**Types:**

#### Paper Chromatography

**Setup:**
- Spot of mixture placed on paper (stationary phase)
- Paper placed in solvent (mobile phase)
- Solvent travels up paper by capillary action
- Components separate as solvent moves

**How it works:**
- **More polar** components: Stick to polar paper, move slowly
- **Less polar** components: Dissolve better in solvent, move faster

**Result:** Components separate into spots at different heights

**Rf value (Retention factor):**

$$R_f = \\frac{\\text{distance traveled by component}}{\\text{distance traveled by solvent}}$$

**Range:** 0 < Rf < 1

**Uses:**
- Each component has characteristic Rf
- Identify unknown substances
- Check purity

**Example:**
- Separate pigments in black ink
- Separate amino acids
- Analyze dyes

#### Thin Layer Chromatography (TLC)

**Similar to paper chromatography:**
- Stationary phase: Silica gel or alumina on glass/plastic plate
- Mobile phase: Organic solvent

**Advantages over paper:**
- Faster
- Better resolution
- More reproducible Rf values

#### Column Chromatography

**Setup:**
- Column packed with stationary phase (silica, alumina)
- Pour mixture at top
- Add mobile phase (solvent)
- Collect fractions as they elute

**How it works:**
- Components with weak affinity for stationary phase → elute first (faster)
- Components with strong affinity → elute last (slower)

**Uses:**
- Purify compounds
- Separate mixtures
- Isolate products from reactions

**Large scale:** Can purify grams to kilograms

#### Gas Chromatography (GC)

**For:** Volatile compounds

**Mobile phase:** Inert gas (He, N₂) - carrier gas

**Stationary phase:** Liquid coating inside column

**Process:**
1. Inject sample (vaporizes)
2. Carrier gas pushes through column
3. Components separate based on BP and polarity
4. Detector measures components as they exit

**Output:** Chromatogram (peaks at different retention times)

**Uses:**
- Analyze volatile organic compounds
- Forensics (blood alcohol, drugs)
- Environmental testing (pollutants)

**Advantages:**
- Very sensitive
- Can separate complex mixtures
- Quantitative (peak area ∝ amount)

### 4. Crystallization

**Separates:** Solid from impurities

**Based on:** Solubility differences with temperature

**Process:**
1. Dissolve impure solid in hot solvent
2. Cool solution slowly
3. Pure crystals form (impurities stay dissolved)
4. Filter to collect pure crystals

**Why it works:**
- Desired compound: **High solubility** when hot, **low solubility** when cold
- Impurities: Remain dissolved at all temperatures (if low concentration)

**Example:**
- Purify sugar
- Purify aspirin
- Make rock candy

### 5. Extraction

**Separates:** Components based on solubility in different solvents

**Based on:** "Like dissolves like" principle

**Liquid-Liquid Extraction:**

**Setup:**
- Two **immiscible** solvents (don't mix)
- Example: Water and diethyl ether

**Process:**
1. Mixture dissolved in solvent 1
2. Add immiscible solvent 2
3. Shake (components partition between solvents)
4. Separate layers in separatory funnel
5. Component soluble in solvent 2 extracted

**Example:**
- Extract caffeine from tea (polar) into CH₂Cl₂ (nonpolar)
- Nonpolar caffeine prefers organic layer
- Polar tea components stay in water

**Distribution coefficient (Kd):**

$$K_d = \\frac{[\\text{compound in organic}]}{[\\text{compound in water}]}$$

**Large Kd:** Compound prefers organic layer

### 6. Evaporation

**Separates:** Dissolved solid from liquid

**Based on:** Volatility difference (liquid evaporates, solid doesn't)

**Process:**
- Heat solution
- Liquid evaporates
- Solid remains

**Example:**
- Recover salt from seawater
- Concentrate solution

**Difference from distillation:**
- Evaporation: Discard liquid, keep solid
- Distillation: Keep liquid (purify it)

### 7. Decanting

**Separates:** Liquid from settled solid

**Process:**
- Allow solid to settle
- Carefully pour off liquid
- Solid remains in container

**Simple but limited:**
- Cannot achieve complete separation
- Some solid particles may remain suspended

**Example:**
- Pour wine from bottle (leave sediment)
- Separate sand from water after settling

## Summary of Separation Techniques

| Technique | Separates | Based on | Example |
|-----------|-----------|----------|---------|
| **Filtration** | Solid/liquid | Particle size | Sand from water |
| **Distillation** | Liquids | Boiling point | Water from salt water |
| **Chromatography** | Components | Polarity/affinity | Ink pigments |
| **Crystallization** | Pure solid | Solubility vs T | Purify sugar |
| **Extraction** | Components | Solubility | Caffeine from tea |
| **Evaporation** | Solid/liquid | Volatility | Salt from seawater |
| **Decanting** | Solid/liquid | Density/settling | Wine from sediment |

## Chromatography in Detail

### Interpreting Chromatograms

**Paper/TLC chromatography:**

**Rf calculation:**
- Measure distance from origin to spot center
- Measure distance from origin to solvent front
- Calculate ratio

**Factors affecting Rf:**
1. **Polarity of compound:**
   - More polar → lower Rf (sticks to polar paper)
   - Less polar → higher Rf (travels with solvent)

2. **Polarity of solvent:**
   - More polar solvent → all Rf values increase
   - Less polar solvent → all Rf values decrease

3. **Temperature:** Affects solvent properties

**Using Rf for identification:**
- Run known standards alongside unknown
- Compare Rf values
- Match to identify unknown

**Limitations:**
- Rf can vary with conditions
- Two compounds may have same Rf (need additional tests)

### Column Chromatography

**Elution order:**
- **Least polar** compounds elute first
- **Most polar** compounds elute last

**Why?**
- Polar stationary phase (silica, alumina)
- Polar compounds stick more → retained longer
- Nonpolar compounds don't stick → elute quickly

**Choosing solvent:**
- Start with **nonpolar** solvent (elute nonpolar compounds)
- Gradually increase polarity (elute progressively more polar compounds)
- Common sequence: Hexane → CH₂Cl₂ → Ethyl acetate → Methanol

## Practical Applications

### Water Purification

**Multiple techniques combined:**

1. **Filtration:** Remove large particles (sand, debris)
2. **Coagulation:** Add chemicals to clump small particles
3. **Sedimentation:** Allow particles to settle
4. **Filtration again:** Remove coagulated particles
5. **Disinfection:** Add chlorine or UV to kill bacteria
6. **Distillation** (optional): Remove dissolved salts (desalination)

### Petroleum Refining

**Fractional distillation of crude oil:**

| Fraction | BP Range (°C) | Uses |
|----------|---------------|------|
| Gas | < 20 | LPG, fuel |
| Gasoline | 20-200 | Car fuel |
| Kerosene | 200-300 | Jet fuel |
| Diesel | 300-370 | Diesel fuel |
| Lubricating oil | 370-500 | Motor oil |
| Residue | > 500 | Asphalt, tar |

**Process:**
- Heat crude oil in fractionating tower
- Components vaporize at different temperatures
- Collect fractions at different heights

### Forensic Chemistry

**Gas chromatography applications:**
- Blood alcohol content (BAC)
- Drug testing
- Arson investigation (identify accelerants)
- Explosive residue analysis

**Paper chromatography:**
- Ink analysis (questioned documents)
- Dye identification

## Key Concepts Summary

**1. Mixtures vs. Pure Substances:**
- Mixtures: Variable composition, can be separated physically
- Pure substances: Fixed composition, definite properties

**2. Physical vs. Chemical Separation:**
- Physical: Based on physical properties (BP, polarity, size)
  - No new substances formed
  - Examples: All techniques in this topic
- Chemical: Breaking/forming bonds
  - New substances formed
  - Example: Electrolysis of water

**3. Choosing Separation Method:**
- Consider physical property differences
- Solid/liquid → filtration, evaporation, crystallization
- Liquid/liquid → distillation, extraction
- Components in solution → chromatography
- Multiple methods often needed

**4. Polarity is Key:**
- Chromatography: Polar vs. nonpolar separation
- Extraction: "Like dissolves like"
- Solubility: Affects crystallization

**5. Scale Matters:**
- Lab scale: Paper chromatography, simple distillation
- Industrial scale: Fractional distillation, column chromatography
- Analytical: TLC, GC (small amounts for analysis)
- Preparative: Column chromatography (purify products)
`,
      exampleProblems: {
        create: [
          {
            question: 'A student performs paper chromatography on a sample of black ink. After the solvent travels 10.0 cm up the paper, three colored spots are visible: a blue spot 8.0 cm from the origin, a red spot 5.0 cm from the origin, and a yellow spot 2.0 cm from the origin. (a) Calculate the Rf value for each pigment. (b) Which pigment is most polar? (c) If the student used a more polar solvent, how would the Rf values change?',
            solution: `**Solution:**

**Given:**
- Solvent front distance = 10.0 cm (distance solvent traveled)
- Blue spot distance = 8.0 cm from origin
- Red spot distance = 5.0 cm from origin
- Yellow spot distance = 2.0 cm from origin

**Find:** (a) Rf values, (b) Most polar pigment, (c) Effect of more polar solvent

---

**Part (a): Calculate Rf values**

**Rf (Retention factor) formula:**

$$R_f = \\frac{\\text{distance traveled by component}}{\\text{distance traveled by solvent}}$$

**For blue pigment:**

$$R_f(\\text{blue}) = \\frac{8.0 \\text{ cm}}{10.0 \\text{ cm}} = 0.80$$

**For red pigment:**

$$R_f(\\text{red}) = \\frac{5.0 \\text{ cm}}{10.0 \\text{ cm}} = 0.50$$

**For yellow pigment:**

$$R_f(\\text{yellow}) = \\frac{2.0 \\text{ cm}}{10.0 \\text{ cm}} = 0.20$$

**Answer (a):**

$$\\boxed{R_f(\\text{blue}) = 0.80, \\quad R_f(\\text{red}) = 0.50, \\quad R_f(\\text{yellow}) = 0.20}$$

**Summary table:**

| Pigment | Distance (cm) | Rf value |
|---------|---------------|----------|
| Blue | 8.0 | 0.80 |
| Red | 5.0 | 0.50 |
| Yellow | 2.0 | 0.20 |

---

**Part (b): Which pigment is most polar?**

**Principle of paper chromatography:**

**Paper = stationary phase (polar cellulose)**
**Solvent = mobile phase**

**How polarity affects Rf:**

**Polar compounds:**
- Strong attraction to **polar paper** (stationary phase)
- Stick to paper more
- Move slowly with solvent
- **Low Rf value**

**Nonpolar compounds:**
- Weak attraction to polar paper
- Dissolve better in solvent (mobile phase)
- Move quickly with solvent
- **High Rf value**

**Relationship:**

$$\\text{More polar} \\rightarrow \\text{Lower } R_f$$

$$\\text{Less polar} \\rightarrow \\text{Higher } R_f$$

**Comparing our pigments:**

| Pigment | Rf | Polarity |
|---------|-----|----------|
| Blue | 0.80 (highest) | **Least polar** |
| Red | 0.50 (middle) | Intermediate polarity |
| Yellow | 0.20 (lowest) | **Most polar** |

**Answer (b):**

$$\\boxed{\\text{Yellow pigment is most polar}}$$

**Explanation:**
- Yellow has lowest Rf (0.20)
- Traveled least distance
- Strong attraction to polar paper
- Therefore most polar

---

**Part (c): Effect of more polar solvent**

**Current situation:**
- Paper: Polar (stationary phase)
- Solvent: Some polarity (mobile phase)
- Pigments partition between paper and solvent

**If solvent becomes MORE polar:**

**Effect on pigment behavior:**

1. **More polar solvent better dissolves polar pigments**
   - Polar pigments pulled into mobile phase more
   - Less attraction to stationary phase (relatively)

2. **All pigments carried farther up paper**
   - Better solvation by solvent
   - Move faster/farther

3. **All Rf values INCREASE**

**Specific predictions:**

**Yellow (most polar):**
- Currently Rf = 0.20
- More polar solvent → much better dissolved
- Rf increases significantly
- Example: Might go to Rf ≈ 0.35-0.40

**Red (intermediate):**
- Currently Rf = 0.50
- Moderately affected
- Rf increases
- Example: Might go to Rf ≈ 0.60-0.65

**Blue (least polar):**
- Currently Rf = 0.80
- Already moves well
- Slight increase (already near maximum)
- Example: Might go to Rf ≈ 0.85-0.90

**Answer (c):**

$$\\boxed{\\text{All } R_f \\text{ values would INCREASE (pigments travel farther)}}$$

**Reasoning:**
- More polar solvent better dissolves all pigments
- Pigments spend more time in mobile phase
- Less time stuck to stationary phase
- Travel farther up paper
- Higher Rf values

**Visual representation:**

**Current (less polar solvent):**
- Solvent front: 10 cm
- Blue spot: 8 cm (Rf = 0.80)
- Red spot: 5 cm (Rf = 0.50)
- Yellow spot: 2 cm (Rf = 0.20)
- Origin: 0 cm

**With more polar solvent:**
- Solvent front: 10 cm
- Blue spot: 9 cm (Rf = 0.90)
- Red spot: 6.5 cm (Rf = 0.65)
- Yellow spot: 4 cm (Rf = 0.40)
- Origin: 0 cm

**Note:** Spots still in same order (blue > red > yellow), but all higher

---

**Additional insights:**

**Why does order stay the same?**
- Blue always least polar → always highest Rf
- Yellow always most polar → always lowest Rf
- Changing solvent polarity shifts ALL Rf values but maintains order

**Practical implications:**

**Too polar solvent:**
- All Rf values very high (0.8-1.0)
- Poor separation
- Spots close together near top

**Too nonpolar solvent:**
- All Rf values very low (0.0-0.2)
- Poor separation
- Spots close together near bottom

**Optimal solvent:**
- Rf values spread out (0.2-0.8)
- Good separation
- Easy to distinguish components

**Summary of key concepts:**

1. **Rf = distance(component) / distance(solvent)**
   - Always between 0 and 1
   - Characteristic for each compound (under same conditions)

2. **Lower Rf = more polar** (for polar stationary phase)
   - Polar compounds stick to polar paper

3. **More polar solvent → higher Rf values**
   - Better dissolves polar compounds
   - Carries them farther

4. **Chromatography separates by polarity**
   - Different affinities for stationary vs mobile phases`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A mixture of ethanol (BP 78°C) and water (BP 100°C) is to be separated. (a) Which separation technique would be most appropriate and why? (b) During simple distillation, which component will distill over first? (c) Why can\'t pure ethanol (100%) be obtained by simple distillation of an ethanol-water mixture? (d) What additional technique could achieve better separation?',
            solution: `**Solution:**

**Given:**
- Mixture: Ethanol (C₂H₅OH) and water (H₂O)
- BP(ethanol) = 78°C
- BP(water) = 100°C
- Two miscible liquids (form homogeneous solution)

**Find:** (a) Best separation technique, (b) Which distills first, (c) Why not 100% pure, (d) Better technique

---

**Part (a): Most appropriate separation technique**

**Analysis of mixture:**

**Type:** Two **miscible liquids** (form solution)
- Cannot use filtration (both dissolved)
- Cannot use chromatography easily (not good for large amounts)
- Cannot use crystallization (both liquids)

**Key property difference:** **Boiling points**
- BP difference = 100°C - 78°C = 22°C
- Moderate difference

**Best technique:** **DISTILLATION**

**Why distillation?**

1. **Liquids have different BPs**
   - Component with lower BP vaporizes first
   - Can be selectively evaporated and condensed

2. **Components are miscible**
   - Cannot separate by density/filtration
   - Need to use volatility difference

3. **Want to purify/collect both components**
   - Distillation allows collection of volatile component
   - Leaves less volatile component in flask

**Answer (a):**

$$\\boxed{\\text{Distillation (specifically simple or fractional distillation)}}$$

**Reason:** Separates miscible liquids based on boiling point differences. Ethanol (lower BP) vaporizes first, travels to condenser, and is collected. Water (higher BP) remains in flask.

---

**Part (b): Which component distills first?**

**Principle:** Component with **lower boiling point** vaporizes first

**Comparison:**
- Ethanol BP: 78°C (lower)
- Water BP: 100°C (higher)

**During distillation:**

**Step 1: Heat mixture**
- Temperature rises toward lowest BP
- At ~78°C, ethanol begins to boil

**Step 2: Vaporization**
- Ethanol vaporizes preferentially
- Vapor is enriched in ethanol (more ethanol than water in vapor)

**Step 3: Condensation**
- Ethanol vapor enters condenser
- Cools back to liquid
- Collected as distillate

**Answer (b):**

$$\\boxed{\\text{Ethanol distills over first}}$$

**Reason:** Lower boiling point (78°C < 100°C). Component with lower BP is more volatile and evaporates first.

---

**Part (c): Why can't 100% pure ethanol be obtained?**

**Key concept: Ethanol-water forms an AZEOTROPE**

**Azeotrope:** Mixture that boils at constant temperature with constant composition
- Vapor has **same composition** as liquid
- Cannot be separated further by simple distillation

**Ethanol-water azeotrope:**
- Composition: **95.6% ethanol, 4.4% water** (by volume)
- Boiling point: **78.1°C**
- This is as pure as you can get by normal distillation

**Why azeotrope forms:**

**Intermolecular forces:**
- Ethanol and water form **hydrogen bonds** with each other
- Ethanol: O-H can H-bond
- Water: O-H can H-bond

**H-bonding between ethanol and water:**

$$\\ce{C2H5OH ··· H-O-H}$$

**These interactions:**
- Stabilize the mixture
- Change vapor pressure behavior
- Create composition where liquid and vapor have same ratio

**Distillation behavior:**

**Starting with dilute ethanol (e.g., 10% ethanol):**
1. Heat to ~78°C
2. Vapor enriched in ethanol (more volatile)
3. Collect distillate (higher % ethanol)
4. Repeat: gradually increase ethanol concentration

**But at 95.6% ethanol:**
- Reach azeotrope
- Vapor composition = liquid composition
- Cannot increase ethanol % further
- No matter how many times you distill!

**Answer (c):**

$$\\boxed{\\text{Ethanol-water forms an azeotrope at 95.6% ethanol}}$$

**Explanation:** At this composition, liquid and vapor have identical composition. Further distillation cannot increase purity beyond 95.6%. Strong hydrogen bonding between ethanol and water creates this constant-boiling mixture.

---

**Part (d): Techniques for better separation**

**To get > 95.6% ethanol (absolute ethanol), use:**

**Method 1: Add drying agent**
- Add anhydrous calcium oxide (CaO) or molecular sieves
- Drying agent chemically reacts with or absorbs water
- Removes water from azeotrope
- Then distill to get pure ethanol

**Chemical reaction:**

$$\\ce{CaO + H2O -> Ca(OH)2}$$

**Method 2: Azeotropic distillation**
- Add third component (e.g., benzene, cyclohexane)
- Forms new azeotrope with water
- This azeotrope boils at different temperature
- Can distill off water with third component
- Leaves pure ethanol

**Method 3: Fractional distillation**
- Won't break azeotrope, but...
- Better separation before reaching azeotrope
- Uses fractionating column
- Multiple vaporization-condensation cycles
- Gets to 95.6% more efficiently than simple distillation

**For initial question (a) - should specify:**

**If BP difference is moderate (20-25°C):**
- **Fractional distillation** preferred over simple distillation
- Better separation
- Higher purity

**Answer (d):**

$$\\boxed{\\text{Fractional distillation (for better separation to azeotrope)}}$$
$$\\boxed{\\text{+ Drying agent (to break azeotrope and get 100% ethanol)}}$$

**Fractional distillation advantages:**
- Fractionating column provides multiple theoretical distillations
- Better separation than simple distillation
- More efficient path to 95.6% purity

**To get absolute ethanol (100%):**
- Must use chemical method (drying agent)
- Or azeotropic distillation with third component
- Physical distillation alone cannot break azeotrope

---

**Summary comparison:**

| Method | Can reach | How it works |
|--------|-----------|--------------|
| Simple distillation | ~95.6% ethanol | BP difference, one vaporization |
| Fractional distillation | 95.6% ethanol | Multiple vaporization cycles, efficient |
| + Drying agent | 100% ethanol | Removes water chemically |
| Azeotropic distillation | 100% ethanol | Third component breaks original azeotrope |

---

**Key concepts:**

1. **Choose separation by property difference**
   - Different BPs → distillation
   - Different polarities → chromatography/extraction
   - Different sizes → filtration

2. **Lower BP → distills first**
   - More volatile
   - Evaporates at lower temperature

3. **Azeotropes limit distillation**
   - Constant-boiling mixtures
   - Same composition in liquid and vapor
   - Cannot be separated further by distillation alone

4. **Fractional > Simple distillation**
   - Better separation
   - Multiple stages
   - Use when BP difference < ~25°C

5. **Break azeotrope chemically**
   - Add drying agent
   - Add third component
   - Change IMFs in mixture`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A student needs to separate a mixture containing sand (SiO₂), salt (NaCl), and naphthalene (C₁₀H₈, a nonpolar organic solid, sublimes at 80°C). Design a complete separation scheme to isolate each component in pure form. For each step, identify: (i) the technique used, (ii) the property exploited, (iii) what is separated from what. Draw a flow chart of your procedure.',
            solution: `**Solution:**

**Given mixture components:**
1. **Sand (SiO₂):** Insoluble in water, nonpolar, high melting point, does not sublime
2. **Salt (NaCl):** Ionic, very soluble in water, high melting point
3. **Naphthalene (C₁₀H₈):** Nonpolar organic solid, insoluble in water, sublimes at 80°C

**Objective:** Separate and isolate ALL THREE components in pure form

**Key properties to exploit:**

| Component | Water soluble? | Sublimes? | Polarity |
|-----------|----------------|-----------|----------|
| Sand | No | No | Nonpolar |
| Salt | Yes | No | Ionic |
| Naphthalene | No | Yes (80°C) | Nonpolar |

---

**SEPARATION SCHEME:**

**STEP 1: SUBLIMATION**

**(i) Technique:** Sublimation

**(ii) Property exploited:** Naphthalene sublimes (solid → gas directly) at 80°C; sand and salt do not sublime

**(iii) What is separated:** **Naphthalene** (collected) from sand + salt (remain)

**Procedure:**
1. Place mixture in evaporating dish
2. Cover with inverted funnel with cold water flask on top
3. Heat gently to ~80°C
4. Naphthalene sublimes (becomes vapor)
5. Vapor contacts cold surface, deposits as solid crystals
6. Collect pure naphthalene from cold surface

**Result after Step 1:**
- ✓ **Pure naphthalene** (collected on cold surface)
- Sand + salt mixture (remains in dish)

---

**STEP 2: DISSOLUTION**

**(i) Technique:** Dissolution / Extraction with water

**(ii) Property exploited:** Salt is soluble in water; sand is not

**(iii) What is separated:** **Salt** (dissolves) from **sand** (does not dissolve)

**Procedure:**
1. Add distilled water to sand + salt mixture
2. Stir thoroughly to dissolve all salt
3. Result: Aqueous solution of NaCl + undissolved sand

**Result after Step 2:**
- Aqueous solution containing dissolved NaCl
- Solid sand (undissolved)

---

**STEP 3: FILTRATION**

**(i) Technique:** Filtration

**(ii) Property exploited:** Particle size - sand particles too large to pass through filter

**(iii) What is separated:** **Sand** (trapped) from **salt solution** (passes through)

**Procedure:**
1. Pour mixture through filter paper in funnel
2. Sand trapped on filter paper (residue)
3. Salt solution passes through (filtrate)

**Result after Step 3:**
- **Wet sand** on filter paper
- Salt solution collected as filtrate

---

**STEP 4: DRYING SAND**

**(i) Technique:** Drying / Evaporation

**(ii) Property exploited:** Water evaporates; sand does not

**(iii) What is separated:** **Water** (evaporates) from **sand** (remains)

**Procedure:**
1. Leave sand on filter paper in warm place
2. Or place in drying oven at low temperature (100-110°C)
3. Water evaporates

**Result after Step 4:**
- ✓ **Pure dry sand**

---

**STEP 5: EVAPORATION / CRYSTALLIZATION**

**(i) Technique:** Evaporation (or crystallization for better purity)

**(ii) Property exploited:** Water evaporates; salt does not (non-volatile)

**(iii) What is separated:** **Water** (evaporates) from **salt** (remains)

**Procedure:**

**Method A - Evaporation (faster):**
1. Heat salt solution in evaporating dish
2. Water evaporates
3. Salt crystals remain

**Method B - Crystallization (purer):**
1. Heat salt solution to near boiling
2. Evaporate some water (concentrated solution)
3. Cool slowly
4. Salt crystals form
5. Filter to collect crystals
6. Dry crystals

**Result after Step 5:**
- ✓ **Pure dry salt (NaCl)**

---

**COMPLETE FLOW CHART:**

**Step 1: SUBLIMATION (80°C)**
- Input: Sand + Salt + Naphthalene
- Property: Naphthalene sublimes
- Output: NAPHTHALENE (pure) + remaining (Sand + Salt)

**Step 2: ADD WATER**
- Input: Sand + Salt
- Property: Salt dissolves, sand doesn't
- Output: Sand + Salt solution

**Step 3: FILTRATION**
- Input: Sand + Salt solution
- Property: Particle size
- Output: SAND (wet, on filter) + Salt solution (filtrate)

**Step 4: DRY SAND**
- Input: Wet sand
- Property: Water evaporates
- Output: SAND (pure, dry)

**Step 5: EVAPORATION**
- Input: Salt solution
- Property: Water evaporates
- Output: SALT (pure, dry)

---

**ALTERNATIVE SCHEME (Different order):**

Could also start with dissolution:
1. MIXTURE + ADD WATER
2. FILTRATION gives: Salt solution + (Sand + Naphthalene)
3. EVAPORATE salt solution → SALT
4. SUBLIMATION of (Sand + Naphthalene) → NAPHTHALENE

**But first scheme is better because:**
- Sublimation first removes naphthalene without solvents
- Cleaner separation
- Less contamination risk

---

**DETAILED SUMMARY TABLE:**

| Step | Technique | Property Used | Separated | Result |
|------|-----------|---------------|-----------|--------|
| 1 | Sublimation | Sublimes at 80°C | Naphthalene from (sand + salt) | Pure C₁₀H₈ |
| 2 | Dissolution | Water solubility | Salt dissolves, sand doesn't | Solution + solid |
| 3 | Filtration | Particle size | Sand from salt solution | Sand (wet) + filtrate |
| 4 | Drying | Volatility | Water from sand | Pure SiO₂ |
| 5 | Evaporation | Volatility | Water from salt | Pure NaCl |

---

**KEY CONSIDERATIONS:**

**Order matters:**
- Must do sublimation **before** adding water
- If you add water first, naphthalene might stick to sand (harder to separate)
- Sublimation is cleanest first step

**Temperature control:**
- Sublimation: ~80°C (not too high or salt might decompose)
- Drying sand: 100-110°C (above water BP)
- Evaporating salt solution: Can heat to boiling

**Purity checks:**
- Naphthalene: Check melting point (should be 80°C)
- Sand: Rinse with water again to ensure no salt
- Salt: Could recrystallize for higher purity

**Common mistakes to avoid:**
❌ Filtering before dissolving salt (would trap salt + sand together)
❌ Adding water before sublimation (naphthalene hard to remove when wet)
❌ Not drying sand properly (would have salt contamination from residual water)

---

**ALTERNATIVE TECHNIQUES (if available):**

**Instead of sublimation, could use:**
- **Solvent extraction** with nonpolar solvent
  - Add hexane or toluene
  - Naphthalene dissolves (nonpolar)
  - Sand and salt don't dissolve
  - Filter, evaporate hexane → naphthalene

**Advantage of sublimation over extraction:**
- No organic solvents needed
- Environmentally friendlier
- Simpler procedure
- Direct collection of pure solid

---

**FINAL ANSWER:**

**Complete separation scheme:**

1. **Sublimation** (80°C) → isolate naphthalene
2. **Add water** → dissolve salt
3. **Filtration** → separate sand
4. **Dry sand** (100°C) → pure sand
5. **Evaporate water** → pure salt

**All three components isolated in pure form!**

$$\\boxed{\\text{Naphthalene (sublimation) → Sand (filtration + drying) → Salt (evaporation)}}$$

**Key concepts applied:**
- **Multiple techniques** needed for complex mixture
- **Order of operations** critical
- **Choose technique** based on property differences
- **Physical properties** enable separation (sublimation, solubility, size)`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', mixturesTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: mixturesTopic.id,
        front: 'What are the three types of mixtures and how do they differ?',
        back: 'Solutions (< 1 nm, uniform, don\'t settle), Colloids (1-1000 nm, show Tyndall effect, don\'t settle), Suspensions (> 1000 nm, settle, can filter). Differ by particle size and properties.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'What is the Tyndall effect and how is it used?',
        back: 'Scattering of light by colloidal particles. Light beam visible through colloid, invisible through solution. Test: shine light through mixture - visible path = colloid.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'How does paper chromatography separate components and what does Rf mean?',
        back: 'Separates by polarity. Polar compounds stick to polar paper (low Rf), nonpolar travel with solvent (high Rf). Rf = distance(compound)/distance(solvent). Range: 0-1.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'When should you use distillation vs. filtration vs. chromatography?',
        back: 'Filtration: solid/liquid (suspensions). Distillation: liquids with different BPs. Chromatography: components with different polarities in solution. Choose based on physical property difference.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'What is fractional distillation and when is it better than simple distillation?',
        back: 'Uses fractionating column for multiple vaporization-condensation cycles. Better for liquids with similar BPs (< 25°C difference). Example: separate crude oil fractions.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'How does column chromatography work and what elutes first?',
        back: 'Mobile phase (solvent) carries mixture through stationary phase (silica/alumina). LEAST polar compounds elute first (don\'t stick). Most polar elute last (stick to polar stationary phase).'
      },
      {
        topicId: mixturesTopic.id,
        front: 'What is an azeotrope and why does it matter for distillation?',
        back: 'Constant-boiling mixture where liquid and vapor have same composition. Cannot separate further by distillation. Example: ethanol-water at 95.6% ethanol. Need chemical method to break.'
      },
      {
        topicId: mixturesTopic.id,
        front: 'How do you separate sand, salt, and a subliming organic compound?',
        back: '1) Sublimation (isolate organic), 2) Add water (dissolve salt), 3) Filter (separate sand), 4) Dry sand, 5) Evaporate water (get salt). Order matters - sublime first!'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', mixturesTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Intermolecular Forces and Properties (Part 5)!');
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
