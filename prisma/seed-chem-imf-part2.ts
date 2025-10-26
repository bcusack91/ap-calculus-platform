import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Intermolecular Forces and Properties (Part 2)...');

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

  // Topic 2: Properties of Solids, Liquids, and Gases
  const statesTopic = await prisma.topic.create({
    data: {
      title: 'Properties of Solids, Liquids, and Gases',
      slug: 'properties-states-matter',
      description: 'Understand the properties of solids, liquids, and gases, including phase changes, vapor pressure, and the relationship to intermolecular forces.',
      order: existingTopics + 1,
      categoryId: imfCategory.id,
      isPremium: false,
      textContent: `
# Properties of Solids, Liquids, and Gases

## Three States of Matter

The state of matter depends on **balance between kinetic energy and intermolecular forces**:

| State | Kinetic Energy | IMF Strength | Particle Arrangement |
|-------|----------------|--------------|---------------------|
| **Solid** | Low | Strong (KE < IMF) | Fixed, ordered positions |
| **Liquid** | Medium | Moderate (KE ≈ IMF) | Close but mobile |
| **Gas** | High | Weak (KE > IMF) | Far apart, random motion |

## Properties of Solids

### Characteristics

1. **Definite shape and volume**
   - Particles in fixed positions
   - Strong intermolecular forces hold structure

2. **High density**
   - Particles closely packed
   - Little empty space

3. **Incompressible**
   - Cannot be compressed significantly
   - Particles already at minimum distance

4. **Very low compressibility**
   - Particles vibrate in place
   - Cannot flow or move past each other

### Types of Solids

**1. Crystalline Solids**
- **Ordered, repeating 3D structure**
- Sharp melting point
- Examples: NaCl, diamond, ice

**Types of crystalline solids:**

**a) Ionic Solids**
- Ions held by electrostatic forces
- Hard, brittle, high melting points
- Conduct when molten/dissolved
- Example: NaCl, CaCO₃

**b) Molecular Solids**
- Molecules held by IMFs (LDF, dipole-dipole, H-bonding)
- Soft, low melting points
- Do not conduct electricity
- Example: Ice (H₂O), dry ice (CO₂), I₂

**c) Covalent Network Solids**
- Atoms covalently bonded throughout
- Very hard, very high melting points
- Do not conduct (except graphite)
- Example: Diamond, SiO₂ (quartz), SiC

**d) Metallic Solids**
- Metal cations in sea of electrons
- Malleable, ductile, lustrous
- Conduct electricity and heat
- Variable melting points
- Example: Na, Fe, Cu, Au

**2. Amorphous Solids**
- **No long-range order**
- Broad melting range
- Examples: Glass, rubber, plastics

### Phase Diagram Features (Solids)

**Triple point:** Temperature and pressure where all 3 phases coexist

**Normal melting point:** Temperature at 1 atm where solid ↔ liquid

## Properties of Liquids

### Characteristics

1. **Definite volume, no definite shape**
   - Takes shape of container
   - Particles mobile but close together

2. **High density** (similar to solids)
   - Particles still close
   - Slightly more space than solids

3. **Incompressible**
   - Little empty space between particles

4. **Can flow**
   - Particles slide past each other
   - Viscosity depends on IMF strength

### Key Liquid Properties

**1. Viscosity**

**Definition:** Resistance to flow

**Factors affecting viscosity:**
- **Stronger IMFs** → Higher viscosity
- **Larger molecules** → Higher viscosity
- **Higher temperature** → Lower viscosity (more KE overcomes IMFs)

**Examples:**
- Water: Low viscosity (H-bonding, but small molecule)
- Glycerol: High viscosity (3 OH groups, extensive H-bonding)
- Motor oil: High viscosity (large molecules, strong LDF)

**2. Surface Tension**

**Definition:** Energy required to increase surface area of liquid

**Cause:** Molecules at surface experience **net inward force**
- Bulk molecules: attracted equally in all directions
- Surface molecules: only attracted downward and sideways
- Creates "skin" on liquid surface

**Factors:**
- **Stronger IMFs** → Higher surface tension
- Water has high surface tension (H-bonding)
- Allows some insects to walk on water

**3. Capillary Action**

**Definition:** Spontaneous rise of liquid in narrow tube

**Two competing forces:**

**Adhesion:** Attraction between liquid and tube surface
- Liquid "sticks" to walls

**Cohesion:** Attraction between liquid molecules (IMFs)
- Liquid sticks to itself

**Result:**
- If adhesion > cohesion: Liquid rises (water in glass)
- If cohesion > adhesion: Liquid depressed (mercury in glass)

**Meniscus:**
- Water: Concave (curves up at edges)
- Mercury: Convex (curves down at edges)

**4. Vapor Pressure**

**Definition:** Pressure exerted by vapor in equilibrium with liquid

**Dynamic equilibrium:**

$$\\text{Liquid} \\rightleftharpoons \\text{Vapor}$$

Rate of evaporation = Rate of condensation

**Factors affecting vapor pressure:**

**a) Temperature:**
- **Higher T** → Higher vapor pressure
- More molecules have enough KE to escape

**b) IMF Strength:**
- **Stronger IMFs** → Lower vapor pressure
- Harder for molecules to escape liquid
- Example: Water (H-bonding) has lower VP than ethanol at same T

**Volatile liquids:** High vapor pressure (weak IMFs)
- Examples: Acetone, diethyl ether

**Nonvolatile liquids:** Low vapor pressure (strong IMFs)
- Examples: Glycerol, motor oil

**Normal Boiling Point:** Temperature where vapor pressure = 1 atm (760 mmHg)

## Properties of Gases

### Characteristics

1. **No definite shape or volume**
   - Fills entire container
   - Expands to occupy all available space

2. **Very low density**
   - Particles far apart
   - Mostly empty space (~99.9%)

3. **Highly compressible**
   - Can squeeze particles closer
   - Volume decreases with pressure

4. **Complete mixing**
   - Particles move randomly
   - Rapid diffusion

### Kinetic Molecular Theory (KMT)

**Five postulates:**

1. **Gas particles are in constant, random motion**
   - Move in straight lines until collision

2. **Negligible particle volume**
   - Volume of particles ≈ 0 compared to container
   - Mostly empty space

3. **No intermolecular forces**
   - Particles don't attract or repel (ideal gas assumption)

4. **Elastic collisions**
   - No energy lost in collisions
   - Total KE conserved

5. **Average kinetic energy ∝ Temperature**
   - Higher T → Higher average KE
   - $\\overline{KE} = \\frac{3}{2}RT$

### Gas Pressure

**Cause:** Collisions of gas particles with container walls

**Factors affecting pressure:**

1. **Temperature** (↑T → ↑P at constant V, n)
   - Higher KE → more forceful, frequent collisions

2. **Volume** (↓V → ↑P at constant T, n)
   - Smaller space → more collisions per area

3. **Number of moles** (↑n → ↑P at constant T, V)
   - More particles → more collisions

4. **Molar mass** (indirect effect)
   - At same T, all gases have same average KE
   - Lighter gases move faster, heavier gases move slower

## Phase Changes

### Types of Phase Changes

**Endothermic (absorb energy):**
1. **Melting (fusion):** Solid → Liquid
2. **Vaporization:** Liquid → Gas
3. **Sublimation:** Solid → Gas (direct)

**Exothermic (release energy):**
4. **Freezing:** Liquid → Solid
5. **Condensation:** Gas → Liquid
6. **Deposition:** Gas → Solid (direct)

### Energy of Phase Changes

**Enthalpy of fusion (ΔHfus):** Energy to melt 1 mole
- Breaking IMFs in solid structure
- Example: H₂O: ΔHfus = 6.01 kJ/mol

**Enthalpy of vaporization (ΔHvap):** Energy to vaporize 1 mole
- Breaking all remaining IMFs
- Example: H₂O: ΔHvap = 40.7 kJ/mol

**Key relationship:**

$$\\Delta H_{vap} > \\Delta H_{fus}$$

**Why:** More IMFs to break going liquid → gas than solid → liquid

### Heating Curve

**Temperature vs. Heat Added graph:**

**Features:**

1. **Solid heating:** Temperature increases
   - Slope depends on specific heat of solid

2. **Melting plateau:** Temperature constant at melting point
   - Energy goes to breaking IMFs, not increasing KE
   - Length depends on ΔHfus

3. **Liquid heating:** Temperature increases
   - Slope depends on specific heat of liquid

4. **Boiling plateau:** Temperature constant at boiling point
   - Energy goes to breaking IMFs
   - Length depends on ΔHvap (longer than melting)

5. **Gas heating:** Temperature increases
   - Slope depends on specific heat of gas

**Calculation:**

$$q = n \\cdot \\Delta H_{phase}$$ (during phase change)

$$q = m \\cdot c \\cdot \\Delta T$$ (within one phase)

## Clausius-Clapeyron Equation

**Relates vapor pressure to temperature:**

$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

Where:
- $P_1$, $P_2$ = vapor pressures
- $T_1$, $T_2$ = temperatures (K)
- $\\Delta H_{vap}$ = enthalpy of vaporization
- $R$ = 8.314 J/(mol·K)

**Linear form:**

$$\\ln P = -\\frac{\\Delta H_{vap}}{R} \\cdot \\frac{1}{T} + C$$

**Plot:** ln P vs. 1/T gives straight line with slope = $-\\frac{\\Delta H_{vap}}{R}$

## Water's Unique Properties

**Due to hydrogen bonding:**

1. **High boiling point** (100°C)
   - Much higher than other hydrides (H₂S: -60°C)

2. **High specific heat**
   - Moderates temperature changes
   - Important for climate, organisms

3. **High heat of vaporization**
   - Cooling effect of sweating

4. **Ice less dense than water**
   - Ice floats
   - H-bonding creates open crystal structure
   - Unique among common substances

5. **High surface tension**
   - Capillary action in plants
   - Water transport in trees

## Summary Table

| Property | Solid | Liquid | Gas |
|----------|-------|--------|-----|
| **Shape** | Definite | Indefinite | Indefinite |
| **Volume** | Definite | Definite | Indefinite |
| **Density** | High | High | Very low |
| **Compressibility** | Very low | Low | High |
| **Particle motion** | Vibration | Translation, rotation | Random, rapid |
| **IMF importance** | Very important | Important | Negligible |
| **KE vs IMF** | KE < IMF | KE ≈ IMF | KE >> IMF |

## Applications

1. **Distillation:** Separates based on different boiling points
2. **Refrigeration:** Uses phase changes to transfer heat
3. **Weather:** Water vapor pressure affects humidity, precipitation
4. **Materials science:** Solid structure determines material properties
5. **Biological systems:** Cell membranes, protein folding affected by IMFs
`,
      exampleProblems: {
        create: [
          {
            question: 'Explain why ice floats on water, and why this property is unusual compared to most other substances.',
            solution: `**Solution:**

**Given:** Ice floats on liquid water
**Find:** Explain why and why this is unusual

**Step 1: Recall density principles**

**General rule:** Objects float if less dense than the liquid

For ice to float on water:
$$\\rho_{ice} < \\rho_{water}$$

**This means:** Ice has larger volume than same mass of water

**Step 2: Typical behavior of substances**

**Most substances:**
- **Solid is MORE dense** than liquid
- Particles pack closer in solid (ordered structure)
- Solid sinks in its own liquid
- Example: Solid paraffin sinks in liquid paraffin

**Step 3: Explain water's unusual behavior**

**In liquid water:**
- H₂O molecules in constant motion
- H-bonding exists but constantly breaking/reforming
- Average of ~3.4 H-bonds per molecule
- Molecules relatively close but not in fixed positions
- Density at 4°C: **1.000 g/cm³** (maximum density)

**In ice (solid water):**
- H₂O molecules in **fixed crystalline structure**
- Each molecule forms **4 H-bonds** (maximum)
- Tetrahedral arrangement around each molecule
- Creates **hexagonal crystal structure** with lots of empty space
- Open, cage-like structure
- Density at 0°C: **0.917 g/cm³**

**Step 4: Why the open structure?**

**Hydrogen bonding geometry:**
- Each O has 2 H atoms (H-bond donors)
- Each O has 2 lone pairs (H-bond acceptors)
- Total: Can form 4 H-bonds per molecule

**In ice:**
- All 4 H-bonds form simultaneously
- Tetrahedral geometry (109.5° angles)
- This specific geometry requires **more space**
- Molecules held at fixed distances
- Creates channels and cavities in structure

**In liquid water:**
- H-bonds constantly breaking/reforming
- Not all 4 H-bonds present at once
- Molecules can pack more closely
- Less open space

**Step 5: Quantitative comparison**

**Ice:** 0.917 g/cm³
**Water:** 1.000 g/cm³

**Ratio:** Ice is about **8-9% less dense** than water

**Volume increase:** When water freezes, it expands by ~9%
- This is why pipes burst in winter
- Why ice cubes expand in freezer

**Step 6: Why is this unusual?**

**For most substances:**
- Freezing brings particles closer together
- Solid is 10-20% MORE dense than liquid
- Increased order = tighter packing

**For water:**
- Freezing creates more H-bonds
- More H-bonds = more rigid, open structure  
- Increased order = LESS dense

**Only a few substances behave this way:**
- Water (most important)
- Silicon
- Bismuth
- Antimony

**Answer:**

**Ice floats because it is less dense than liquid water** (0.917 g/cm³ vs. 1.000 g/cm³).

**Explanation:**

In ice, water molecules form a **hexagonal crystalline structure** where each H₂O molecule forms **4 hydrogen bonds** in a tetrahedral arrangement. This creates an **open, cage-like structure** with large empty spaces between molecules.

In liquid water, H-bonds are constantly breaking and reforming, so molecules are not locked into this rigid structure and can pack more closely together, resulting in higher density.

**Why unusual:**

For most substances, the solid phase is MORE dense than the liquid because particles pack closer in the ordered solid structure. Water is unusual because the specific geometry required by hydrogen bonding (tetrahedral, 4 H-bonds per molecule) forces molecules APART, creating an open structure that is less dense than the liquid.

**Importance:**

1. **Aquatic life:** Ice forms on surface of lakes/oceans, insulating water below and allowing life to survive winter
2. **Climate:** Ice caps reflect sunlight (albedo effect)
3. **Weathering:** Water expanding when freezing can crack rocks
4. **Plumbing:** Pipes can burst when water freezes and expands

Without this property, bodies of water would freeze from bottom up, potentially killing aquatic ecosystems.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Two liquids, hexane (C₆H₁₄) and water (H₂O), have similar molar masses (86 g/mol vs. 18 g/mol). However, hexane boils at 69°C while water boils at 100°C. Additionally, hexane has lower viscosity and surface tension than water. Explain these differences in terms of intermolecular forces.',
            solution: `**Solution:**

**Given:** 
- Hexane (C₆H₁₄): MW = 86 g/mol, BP = 69°C, low viscosity, low surface tension
- Water (H₂O): MW = 18 g/mol, BP = 100°C, higher viscosity, higher surface tension

**Find:** Explain property differences using IMF concepts

**Step 1: Identify intermolecular forces in each liquid**

**Hexane (C₆H₁₄):**

Structure: CH₃-CH₂-CH₂-CH₂-CH₂-CH₃ (saturated hydrocarbon)

**Lewis structure analysis:**
- Only C-C and C-H bonds
- C-H bonds slightly polar (ΔEN = 0.4)
- **Molecular geometry:** Nonpolar overall (symmetrical)
- No N-H, O-H, or F-H bonds

**IMFs present:**
- **London Dispersion Forces (LDF) ONLY**
- 42 total electrons (more polarizable than water)
- Linear structure → good surface contact

**Water (H₂O):**

**Lewis structure analysis:**
- O-H bonds (highly polar, ΔEN = 1.4)
- Bent geometry (2 lone pairs on O)
- **Molecular geometry:** Polar

**IMFs present:**
- **Hydrogen bonding** (strongest)
- **Dipole-dipole** forces
- **London Dispersion Forces** (weakest, only 10 electrons)

**Step 2: Explain boiling point difference**

**Expected based on molar mass:**
- Hexane: 86 g/mol → more electrons → stronger LDF
- Water: 18 g/mol → fewer electrons → weaker LDF
- **Prediction:** Hexane should have higher BP

**Actual result:** Water has higher BP (100°C vs. 69°C)

**Explanation:**

**Type of IMF matters more than size!**

**Water:**
- **Hydrogen bonding strength:** 10-40 kJ/mol per H-bond
- Each H₂O can form **up to 4 H-bonds** (2 donors, 2 acceptors)
- Extensive H-bonding network
- Total IMF energy per molecule: ~40 kJ/mol
- Requires **significant energy** to break H-bonds and boil

**Hexane:**
- **LDF strength:** ~30 kJ/mol total (for all LDF in molecule)
- Even with 42 electrons (strong for LDF)
- LDF still weaker than H-bonding
- Requires **less energy** to overcome IMFs and boil

$$\\text{H-bonding (H₂O)} > \\text{LDF (hexane)}$$

**Result:** Water boils at higher temperature

**Step 3: Explain viscosity difference**

**Viscosity = resistance to flow**

**Factors:**
1. Strength of IMFs
2. Molecular size/shape
3. Temperature

**Water:**
- **Higher viscosity** (relatively)
- Strong H-bonding between molecules
- Molecules must "unstick" from neighbors to flow
- H-bonds constantly breaking/reforming as molecules move

**Hexane:**
- **Lower viscosity**
- Only weak LDF
- Molecules slide past each other easily
- Less resistance to flow
- Despite being larger molecule, weaker IMFs dominate

**However, note:** Water actually has relatively LOW viscosity for a H-bonding liquid because it's so small. Glycerol (3 OH groups) has much higher viscosity.

**Step 4: Explain surface tension difference**

**Surface tension = energy to increase surface area**

**Cause:** Molecules at surface experience net inward pull

**Water:**
- **High surface tension** (~73 mN/m at 25°C)
- Strong H-bonding pulls surface molecules inward
- Surface molecules "miss" the H-bonds above them
- Strong cohesive forces
- Creates strong "skin" effect
- Allows insects to walk on water, water drops to bead up

**Hexane:**
- **Low surface tension** (~18 mN/m at 25°C)
- Only weak LDF
- Less "pulling" of surface molecules inward
- Weaker cohesive forces
- Spreads out easily (wets surfaces better)

**Ratio:** Water has ~4× higher surface tension than hexane

**Step 5: Summary of IMF effects**

**Property relationships:**

All these properties depend on **IMF strength:**

$$\\text{Stronger IMFs} → \\begin{cases}
\\text{Higher boiling point} \\\\
\\text{Higher viscosity} \\\\
\\text{Higher surface tension} \\\\
\\text{Lower vapor pressure}
\\end{cases}$$

**Answer:**

**Boiling Point:**
Water (100°C) > Hexane (69°C) because **hydrogen bonding in water is much stronger than London dispersion forces in hexane**, despite hexane having higher molar mass. H-bonding requires more energy to overcome than LDF.

**Viscosity:**
Water has higher viscosity than hexane because **strong H-bonds resist molecular flow** more than weak LDF, even though hexane is a larger molecule.

**Surface tension:**
Water has higher surface tension (~73 mN/m) than hexane (~18 mN/m) because **H-bonding creates strong cohesive forces** that pull surface molecules inward, while hexane's weak LDF provide less cohesion.

**General principle:**

The **type of intermolecular force matters more than molecular size** for determining physical properties. Hydrogen bonding (10-40 kJ/mol) is significantly stronger than London dispersion forces in nonpolar molecules, even large ones.

**Summary table:**

| Property | Water | Hexane | Reason |
|----------|-------|--------|--------|
| Molar Mass | 18 g/mol | 86 g/mol | Hexane larger |
| IMF Type | H-bonding | LDF only | H-bonding stronger |
| BP | 100°C | 69°C | H-bonding > LDF |
| Viscosity | Higher | Lower | H-bonding resists flow |
| Surface Tension | 73 mN/m | 18 mN/m | H-bonding cohesion |`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The vapor pressure of water at 25°C is 23.8 mmHg, and at 50°C it is 92.5 mmHg. Use the Clausius-Clapeyron equation to calculate the enthalpy of vaporization (ΔHvap) for water. R = 8.314 J/(mol·K).',
            solution: `**Solution:**

**Given:**
- T₁ = 25°C = 298 K
- P₁ = 23.8 mmHg
- T₂ = 50°C = 323 K  
- P₂ = 92.5 mmHg
- R = 8.314 J/(mol·K)

**Find:** ΔHvap for water

**Step 1: Write Clausius-Clapeyron equation**

$$\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

**Step 2: Identify known and unknown values**

**Known:**
- P₁ = 23.8 mmHg
- P₂ = 92.5 mmHg
- T₁ = 298 K
- T₂ = 323 K
- R = 8.314 J/(mol·K)

**Unknown:**
- ΔHvap = ?

**Step 3: Calculate pressure ratio**

$$\\frac{P_2}{P_1} = \\frac{92.5}{23.8} = 3.887$$

$$\\ln\\left(\\frac{P_2}{P_1}\\right) = \\ln(3.887) = 1.358$$

**Step 4: Calculate temperature term**

$$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{323} - \\frac{1}{298}$$

$$= 0.003096 - 0.003356$$

$$= -0.000260 \\text{ K}^{-1}$$

Or more precisely:
$$= -2.60 \\times 10^{-4} \\text{ K}^{-1}$$

**Step 5: Substitute into Clausius-Clapeyron equation**

$$1.358 = -\\frac{\\Delta H_{vap}}{8.314} \\times (-2.60 \\times 10^{-4})$$

$$1.358 = \\frac{\\Delta H_{vap}}{8.314} \\times 2.60 \\times 10^{-4}$$

**Step 6: Solve for ΔHvap**

$$\\Delta H_{vap} = \\frac{1.358 \\times 8.314}{2.60 \\times 10^{-4}}$$

$$\\Delta H_{vap} = \\frac{11.29}{2.60 \\times 10^{-4}}$$

$$\\Delta H_{vap} = 43,400 \\text{ J/mol}$$

$$\\Delta H_{vap} = 43.4 \\text{ kJ/mol}$$

**Step 7: Check reasonableness**

**Literature value:** ΔHvap for water ≈ 40.7 kJ/mol at 100°C

Our calculated value: **43.4 kJ/mol**

**Why slightly higher?**
- ΔHvap decreases slightly with temperature
- At 25-50°C (lower than boiling point), ΔHvap is slightly higher
- Our value is reasonable!

**Step 8: Verify with unit analysis**

$$\\Delta H_{vap} = \\frac{\\ln(P_2/P_1) \\times R}{(1/T_2 - 1/T_1)}$$

Units:
$$= \\frac{\\text{(dimensionless)} \\times \\text{J/(mol·K)}}{\\text{K}^{-1}}$$

$$= \\frac{\\text{J/(mol·K)}}{\\text{K}^{-1}} = \\text{J/mol}$$ ✓

**Answer:**

$$\\boxed{\\Delta H_{vap} = 43.4 \\text{ kJ/mol}}$$

**Step-by-step summary:**

1. Converted temperatures to Kelvin
2. Calculated ln(P₂/P₁) = 1.358
3. Calculated (1/T₂ - 1/T₁) = -2.60 × 10⁻⁴ K⁻¹
4. Substituted into Clausius-Clapeyron equation
5. Solved for ΔHvap = 43.4 kJ/mol

**Physical interpretation:**

**43.4 kJ/mol** is the energy required to convert 1 mole of liquid water to water vapor at constant temperature (around 25-50°C).

This energy is needed to:
- Break hydrogen bonds between water molecules
- Separate molecules from liquid to gas phase
- Overcome intermolecular attractions

**Comparison:**
- ΔHvap of water: 43.4 kJ/mol (calculated)
- ΔHfus of water: 6.01 kJ/mol (literature)

**Ratio:** ΔHvap/ΔHfus ≈ 7.2

Much more energy required for vaporization than melting because:
- Melting: Only partially breaks IMFs (molecules still close)
- Vaporization: Completely breaks all IMFs (molecules far apart)

**Alternative approach - Linear form:**

Could also use: ln P = -ΔHvap/R × (1/T) + C

Plot ln P vs. 1/T → slope = -ΔHvap/R

This problem uses the two-point form, which is more common for single calculations.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', statesTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: statesTopic.id,
        front: 'What determines the state of matter (solid, liquid, or gas)?',
        back: 'Balance between kinetic energy (KE) and intermolecular forces (IMF). Solid: KE < IMF, Liquid: KE ≈ IMF, Gas: KE >> IMF. Higher temperature increases KE.'
      },
      {
        topicId: statesTopic.id,
        front: 'What are the four types of crystalline solids and their properties?',
        back: 'Ionic (high MP, conduct when molten), Molecular (low MP, weak IMFs), Covalent network (very high MP, very hard), Metallic (variable MP, conduct, malleable).'
      },
      {
        topicId: statesTopic.id,
        front: 'What is vapor pressure and what factors affect it?',
        back: 'Pressure of vapor in equilibrium with liquid. Higher temperature → higher VP. Stronger IMFs → lower VP. Volatile liquids have high VP (weak IMFs).'
      },
      {
        topicId: statesTopic.id,
        front: 'Why is ice less dense than liquid water?',
        back: 'Ice has hexagonal crystal structure with each H₂O forming 4 H-bonds in tetrahedral arrangement. This creates open, cage-like structure with empty space. Liquid water molecules pack more closely (0.917 vs 1.000 g/cm³).'
      },
      {
        topicId: statesTopic.id,
        front: 'What is the relationship between ΔHvap and ΔHfus?',
        back: 'ΔHvap > ΔHfus (always). Vaporization requires breaking ALL IMFs (liquid to gas). Melting only partially breaks IMFs (solid to liquid). For H₂O: ΔHvap = 40.7 kJ/mol, ΔHfus = 6.01 kJ/mol.'
      },
      {
        topicId: statesTopic.id,
        front: 'What happens during the plateaus on a heating curve?',
        back: 'Temperature stays constant during phase changes (melting or boiling). Energy goes to breaking IMFs, not increasing kinetic energy. Length of plateau depends on ΔH of phase change.'
      },
      {
        topicId: statesTopic.id,
        front: 'What is the Clausius-Clapeyron equation used for?',
        back: 'Relates vapor pressure to temperature: ln(P₂/P₁) = -(ΔHvap/R)(1/T₂ - 1/T₁). Can calculate ΔHvap from VP at two temperatures, or predict VP at different temperatures.'
      },
      {
        topicId: statesTopic.id,
        front: 'How do IMFs affect viscosity and surface tension?',
        back: 'Stronger IMFs → Higher viscosity (more resistance to flow) and Higher surface tension (stronger cohesive forces at surface). Water has high values due to H-bonding.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', statesTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Intermolecular Forces and Properties (Part 2)!');
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
