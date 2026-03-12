import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Intermolecular Forces and Properties (Part 1)...');

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

  // Topic 1: Intermolecular Forces
  const imfTopic = await prisma.topic.create({
    data: {
      title: 'Types of Intermolecular Forces',
      slug: 'types-intermolecular-forces',
      description: 'Understand London dispersion forces, dipole-dipole interactions, and hydrogen bonding, and predict how they affect physical properties.',
      order: existingTopics + 1,
      categoryId: imfCategory.id,
      isPremium: false,
      textContent: `
# Types of Intermolecular Forces

## Intermolecular Forces (IMF) vs. Intramolecular Forces

### Intramolecular Forces

**Definition:** Forces **within** a molecule that hold atoms together

**Types:** Ionic bonds, covalent bonds, metallic bonds

**Strength:** Very strong (200-1000 kJ/mol)

**Example:** The O-H bonds in H₂O

### Intermolecular Forces (IMF)

**Definition:** Forces **between** molecules

**Types:** London dispersion, dipole-dipole, hydrogen bonding

**Strength:** Much weaker than intramolecular forces (0.1-40 kJ/mol)

**Example:** Attractions between H₂O molecules

**Key distinction:** 
- **Breaking intramolecular forces:** Chemical change (breaking bonds)
- **Breaking intermolecular forces:** Physical change (melting, boiling, dissolving)

## Why IMFs Matter

**Physical properties affected by IMF strength:**
1. **Boiling point:** Stronger IMF → higher BP
2. **Melting point:** Stronger IMF → higher MP
3. **Vapor pressure:** Stronger IMF → lower VP
4. **Viscosity:** Stronger IMF → higher viscosity
5. **Surface tension:** Stronger IMF → higher surface tension
6. **Solubility:** "Like dissolves like" (similar IMFs)

## Three Main Types of IMFs

### 1. London Dispersion Forces (LDF)

**Also called:** Van der Waals forces, induced dipole-induced dipole

**Definition:** Temporary attractive forces caused by temporary dipoles in atoms/molecules

**Mechanism:**
1. Electrons in atom/molecule move randomly
2. At any instant, electron distribution may be **asymmetric**
3. Creates **temporary (instantaneous) dipole**
4. This dipole induces dipole in neighboring molecule
5. Temporary dipoles attract each other

**Key points:**
- **Present in ALL molecules** (only IMF in nonpolar molecules)
- Weakest type of IMF
- Very short-lived (constantly forming and breaking)

**Strength factors:**

**a) Molar mass / Number of electrons:**
- More electrons → stronger LDF
- Larger electron cloud → more polarizable
- Bigger molecules → stronger LDF

**Example:** I₂ > Br₂ > Cl₂ > F₂ (increasing LDF strength)

**b) Molecular shape:**
- More surface area contact → stronger LDF
- Linear molecules > compact spherical molecules

**Example:** n-pentane (linear) vs. neopentane (spherical)
- Same formula (C₅H₁₂), but n-pentane has higher BP due to more surface contact

**Strength range:** 0.1 - 2 kJ/mol (typically)

**Examples of molecules with ONLY LDF:**
- Noble gases (He, Ne, Ar, Kr, Xe)
- Nonpolar molecules (H₂, N₂, O₂, CH₄, CO₂, CCl₄)

### 2. Dipole-Dipole Forces

**Definition:** Attractive forces between **permanent dipoles** in polar molecules

**Mechanism:**
1. Polar molecules have permanent dipoles (δ+ and δ-)
2. Positive end of one molecule attracts negative end of another
3. Molecules align: δ+ ↔ δ-

**Requirements:**
- Molecule must be **polar** (permanent dipole moment)
- Asymmetric molecular geometry
- Polar bonds that don't cancel

**Key points:**
- Only in polar molecules
- Stronger than London dispersion forces
- Molecules with dipole-dipole also have LDF!

**Strength factors:**
- Greater polarity (larger dipole moment) → stronger force
- Electronegativity difference matters

**Strength range:** 5 - 25 kJ/mol (typically)

**Examples:**
- HCl, HBr, HI (polar molecules)
- SO₂ (bent, polar)
- CH₃Cl (polar)
- Acetone (CH₃COCH₃)

**Effect on properties:**
- Polar molecules have **higher BP** than nonpolar molecules of similar mass
- Example: CH₃Cl (BP = -24°C) vs. CH₄ (BP = -161°C)

### 3. Hydrogen Bonding

**Definition:** Special, extra-strong dipole-dipole interaction when H is bonded to N, O, or F

**Requirements (both must be met):**
1. H bonded **directly** to N, O, or F (highly electronegative atoms)
2. Another molecule with lone pair on N, O, or F

**Mechanism:**
- H bonded to N/O/F becomes very δ+
- Small H atom allows close approach to lone pair on another N/O/F
- Strong electrostatic attraction
- Partially covalent character

**Representation:**

$$\\ce{R-O-H ... O-R}$$

The dotted line (...) represents hydrogen bond

**Key points:**
- **Strongest** type of intermolecular force
- Much stronger than regular dipole-dipole
- Responsible for water's unique properties
- Directional (involves specific geometry)

**Strength range:** 10 - 40 kJ/mol (strongest IMF)

**Common examples:**
- **Water (H₂O):** Each molecule can form 4 H-bonds
  - 2 H atoms (donors)
  - 2 lone pairs on O (acceptors)
- **Ammonia (NH₃):** Can form 4 H-bonds
  - 3 H atoms (donors)
  - 1 lone pair on N (acceptor)
- **Hydrogen fluoride (HF):** Extensive H-bonding
- **Alcohols (R-OH):** One H-bond donor, one acceptor
- **Carboxylic acids (R-COOH):** Strong H-bonding (often form dimers)

**Special note about water:**
- Ice has **open structure** due to H-bonding
- Each H₂O forms 4 H-bonds in tetrahedral arrangement
- Ice is **less dense** than liquid water (unusual!)
- Maximum density at 4°C

**Effect on properties:**
- **Dramatically higher BP** than expected
- Example: H₂O (BP = 100°C) vs. H₂S (BP = -60°C)
- Similar mass, but H₂O has H-bonding, H₂S doesn't

## Comparing IMF Strengths

**General strength order:**

$$\\text{London Dispersion} < \\text{Dipole-Dipole} < \\text{Hydrogen Bonding}$$

**However:**
- Very large nonpolar molecules (strong LDF) can have higher BP than small polar molecules
- Example: C₁₀H₂₂ (nonpolar, high BP) vs. CH₃OH (polar, lower BP)

**For similar molecules:**

$$\\text{Hydrogen bonding} > \\text{Dipole-dipole} > \\text{London dispersion}$$

## Identifying IMFs - Step by Step

**Step 1:** Determine if molecule is polar or nonpolar
- Draw Lewis structure
- Determine geometry (VSEPR)
- Check for symmetry

**Step 2:** Identify IMFs present

**If nonpolar:**
- **Only London dispersion forces**
- Examples: CH₄, CCl₄, CO₂, noble gases

**If polar (but no N-H, O-H, or F-H bonds):**
- **Dipole-dipole + London dispersion**
- Examples: HCl, CH₃Cl, SO₂

**If has N-H, O-H, or F-H bonds:**
- **Hydrogen bonding + dipole-dipole + London dispersion**
- Examples: H₂O, NH₃, CH₃OH, HF

**Step 3:** Identify strongest IMF
- This determines physical properties

## Effect on Boiling Points

**Boiling point trends:**

### Trend 1: Within same type of IMF
**Larger molar mass → Higher BP** (stronger LDF)

**Example - Halogens (all nonpolar, only LDF):**
- F₂ (38 g/mol): BP = -188°C
- Cl₂ (71 g/mol): BP = -34°C
- Br₂ (160 g/mol): BP = 59°C
- I₂ (254 g/mol): BP = 184°C

### Trend 2: Different types of IMF
**H-bonding > Dipole-dipole > LDF only**

**Example - Similar molar masses:**
- CH₄ (16 g/mol, LDF only): BP = -161°C
- NH₃ (17 g/mol, H-bonding): BP = -33°C
- H₂O (18 g/mol, H-bonding): BP = 100°C

### Trend 3: Period trends
**Hydrides of Group 14-17:**

**Group 14 (no polarity):** CH₄ < SiH₄ < GeH₄ < SnH₄ (normal trend)

**Group 15-17 (H-bonding possible):**
- NH₃ > PH₃ < AsH₃ < SbH₃ (anomaly due to H-bonding)
- H₂O > H₂S < H₂Se < H₂Te (anomaly due to H-bonding)
- HF > HCl < HBr < HI (anomaly due to H-bonding)

**Explanation:** Period 2 hydrides (NH₃, H₂O, HF) have H-bonding, dramatically increasing BP

## Molecular Comparisons

### Example 1: CH₄ vs. NH₃ vs. H₂O

| Molecule | Molar Mass | Polarity | IMFs | BP |
|----------|------------|----------|------|-----|
| CH₄ | 16 | Nonpolar | LDF only | -161°C |
| NH₃ | 17 | Polar | H-bonding, DD, LDF | -33°C |
| H₂O | 18 | Polar | H-bonding, DD, LDF | 100°C |

**Trend:** H₂O > NH₃ > CH₄

**Why:** H₂O has strongest H-bonding (2 donors, 2 acceptors)

### Example 2: n-Pentane vs. Neopentane

**Same formula (C₅H₁₂), different shapes:**

**n-Pentane:** Linear chain
- More surface area contact
- Stronger LDF
- BP = 36°C

**Neopentane:** Compact, spherical
- Less surface area contact  
- Weaker LDF
- BP = 10°C

**Trend:** Linear > branched for same molecular formula

## Special Cases

### 1. Intramolecular H-bonding

**Example:** Salicylic acid
- H-bond within same molecule
- Lower BP than expected
- Less intermolecular H-bonding available

### 2. Network Covalent Solids

**Examples:** Diamond, SiO₂, SiC
- Covalent bonds throughout (NOT IMFs)
- Extremely high melting points
- Very hard

### 3. Metallic Bonding

**Metals:** Strong bonding, but not IMF
- Delocalized electrons
- High melting points (generally)

## Summary Table

| IMF Type | Strength (kJ/mol) | Requirements | Examples |
|----------|-------------------|--------------|----------|
| London Dispersion | 0.1 - 2 | ALL molecules | He, CH₄, CCl₄ |
| Dipole-Dipole | 5 - 25 | Polar molecules | HCl, SO₂, CH₃Cl |
| Hydrogen Bonding | 10 - 40 | H bonded to N/O/F | H₂O, NH₃, HF |

**Note:** Molecules with dipole-dipole or H-bonding also have LDF!

## Applications

1. **Predicting physical states:** Stronger IMF → likely solid/liquid at room temperature
2. **Boiling/melting points:** Stronger IMF → higher BP/MP
3. **Solubility:** Similar IMFs → soluble ("like dissolves like")
4. **Biological systems:** H-bonding in DNA, proteins, cell membranes
5. **Materials science:** IMFs affect polymer properties, adhesion, coatings
`,
      exampleProblems: {
        create: [
          {
            question: 'Identify the intermolecular forces present in each molecule: (a) CH₄, (b) HCl, (c) NH₃',
            solution: `**Solution:**

**Given:** Three molecules
**Find:** Identify all IMFs present in each

**Step 1: Analyze CH₄ (methane)**

**Lewis structure:** C with 4 H atoms, tetrahedral

**Molecular geometry:** Tetrahedral (SN = 4, 0 lone pairs)

**Polarity check:**
- C-H bonds have small polarity (ΔEN = 0.4)
- **Symmetrical** tetrahedral geometry
- All C-H dipoles **cancel out**
- **Nonpolar molecule**

**IMFs present:**
- **London Dispersion Forces (LDF) only**
- All molecules have LDF
- No permanent dipole → no dipole-dipole
- No O-H, N-H, or F-H → no hydrogen bonding

**Answer for (a):** London dispersion forces only

---

**Step 2: Analyze HCl (hydrogen chloride)**

**Lewis structure:** H-Cl with 3 lone pairs on Cl

**Molecular geometry:** Linear (diatomic)

**Polarity check:**
- H-Cl bond is polar (ΔEN = |3.0 - 2.1| = 0.9)
- Only one bond (diatomic)
- **Polar molecule** with permanent dipole
- δ+ on H, δ- on Cl

**IMFs present:**

1. **London Dispersion Forces (LDF)** ✓
   - All molecules have LDF

2. **Dipole-Dipole Forces** ✓
   - HCl is polar
   - Permanent dipole moment
   - Molecules align: H(δ+) ↔ Cl(δ-)

3. **Hydrogen Bonding?** ✗
   - Has H, but H is bonded to Cl (not N, O, or F)
   - Cl is not electronegative enough
   - **No hydrogen bonding**

**Answer for (b):** Dipole-dipole forces and London dispersion forces

---

**Step 3: Analyze NH₃ (ammonia)**

**Lewis structure:** N with 3 H atoms and 1 lone pair

**Molecular geometry:** Trigonal pyramidal (SN = 4, 1 lone pair)

**Polarity check:**
- N-H bonds are polar (ΔEN = |3.0 - 2.1| = 0.9)
- **Asymmetric** trigonal pyramidal geometry (lone pair)
- N-H dipoles do **NOT cancel**
- **Polar molecule**

**IMFs present:**

1. **London Dispersion Forces (LDF)** ✓
   - All molecules have LDF

2. **Dipole-Dipole Forces** ✓
   - NH₃ is polar
   - Permanent dipole moment

3. **Hydrogen Bonding** ✓
   - H bonded directly to **N** (nitrogen) ✓
   - Other NH₃ molecules have lone pair on N to accept H-bond ✓
   - **Both requirements met!**

**Hydrogen bonding in NH₃:**
- Each NH₃ can form up to 4 H-bonds
- 3 H atoms as donors
- 1 lone pair as acceptor

$$\\ce{H-N-H ... N-H}$$

**Answer for (c):** Hydrogen bonding, dipole-dipole forces, and London dispersion forces

---

**Summary:**

| Molecule | LDF | Dipole-Dipole | H-bonding | Strongest IMF |
|----------|-----|---------------|-----------|---------------|
| CH₄ | ✓ | ✗ | ✗ | LDF |
| HCl | ✓ | ✓ | ✗ | Dipole-dipole |
| NH₃ | ✓ | ✓ | ✓ | Hydrogen bonding |

**Expected boiling point order:** NH₃ > HCl > CH₄

**Actual values:**
- CH₄: -161°C (weakest IMF)
- HCl: -85°C (dipole-dipole)
- NH₃: -33°C (H-bonding, strongest IMF)

**Key takeaway:** 
- Nonpolar → LDF only
- Polar (no N-H/O-H/F-H) → DD + LDF
- Has N-H, O-H, or F-H → H-bonding + DD + LDF`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Explain why water (H₂O, MW = 18 g/mol) has a much higher boiling point (100°C) than hydrogen sulfide (H₂S, MW = 34 g/mol, BP = -60°C), despite H₂S having a higher molar mass.',
            solution: `**Solution:**

**Given:** 
- H₂O: MW = 18 g/mol, BP = 100°C
- H₂S: MW = 34 g/mol, BP = -60°C

**Find:** Explain why H₂O has higher BP despite lower molar mass

**Expected trend violation:**
- Normally, higher molar mass → higher BP (stronger LDF)
- But here: H₂S has higher mass but LOWER BP
- Must consider **type** of IMF, not just molecular size

**Step 1: Analyze H₂O structure and IMFs**

**Lewis structure:** H-O-H with 2 lone pairs on O

**Molecular geometry:** Bent (SN = 4, 2 lone pairs)

**Polarity:** Polar (asymmetric, dipoles don't cancel)

**IMFs present:**

1. **Hydrogen bonding:** ✓
   - O-H bonds present (H bonded to oxygen)
   - Lone pairs on O can accept H-bonds
   - Each H₂O can form **4 hydrogen bonds:**
     * 2 H atoms as donors
     * 2 lone pairs as acceptors

2. **Dipole-dipole:** ✓ (but overshadowed by H-bonding)

3. **London dispersion:** ✓ (weak, small molecule)

**Strongest IMF:** **Hydrogen bonding (10-40 kJ/mol)**

**Step 2: Analyze H₂S structure and IMFs**

**Lewis structure:** H-S-H with 2 lone pairs on S

**Molecular geometry:** Bent (SN = 4, 2 lone pairs)

**Polarity:** Polar (asymmetric, like H₂O)

**IMFs present:**

1. **Hydrogen bonding:** ✗
   - Has H-S bonds, BUT
   - S is in **Period 3** (not N, O, or F)
   - S is not electronegative enough for H-bonding
   - Electronegativity: S (2.5) vs. O (3.5)
   - **No hydrogen bonding**

2. **Dipole-dipole:** ✓
   - H₂S is polar
   - Weaker than H₂O's dipole (S less electronegative than O)

3. **London dispersion:** ✓
   - Stronger than H₂O (more electrons: 18 vs. 10)

**Strongest IMF:** **Dipole-dipole forces (5-25 kJ/mol)**

**Step 3: Compare IMF strengths**

**H₂O:**
- Strongest IMF: **Hydrogen bonding (~20 kJ/mol)**
- Very strong intermolecular attractions
- Requires high temperature to break IMFs and boil

**H₂S:**
- Strongest IMF: **Dipole-dipole (~5-10 kJ/mol)**
- Moderate intermolecular attractions
- Even though it has stronger LDF (more electrons), dipole-dipole is still weaker than H-bonding

**Step 4: Explain boiling point difference**

**Boiling point depends on IMF strength:**

$$\\text{Stronger IMF} \\rightarrow \\text{Higher energy needed} \\rightarrow \\text{Higher BP}$$

**H₂O (BP = 100°C):**
- Must break **hydrogen bonds** to boil
- Requires significant energy
- Each molecule bonded to ~4 neighbors via H-bonds
- Extended H-bonding network

**H₂S (BP = -60°C):**
- Must break **dipole-dipole forces** to boil
- Requires much less energy
- Weaker intermolecular attractions

**Energy comparison:**
- H-bonding in H₂O: ~20 kJ/mol
- Dipole-dipole in H₂S: ~10 kJ/mol
- H₂O requires roughly **2× more energy** to boil

**Answer:**

Water has a much higher boiling point than hydrogen sulfide because **water exhibits hydrogen bonding** while H₂S does not.

**Key points:**

1. **Hydrogen bonding requires H bonded to N, O, or F**
   - H₂O qualifies (O-H bonds)
   - H₂S does not (S is Period 3, not electronegative enough)

2. **Hydrogen bonding is much stronger than dipole-dipole**
   - H-bonding: 10-40 kJ/mol
   - Dipole-dipole: 5-25 kJ/mol
   - H-bonding in H₂O >> dipole-dipole in H₂S

3. **Type of IMF matters more than molar mass**
   - H₂S has more electrons (stronger LDF)
   - But H₂O's H-bonding dominates
   - Demonstrates: H-bonding > dipole-dipole + LDF

**General principle:** For hydrides of Group 15-17 elements, **Period 2 hydrides (NH₃, H₂O, HF) have anomalously high boiling points** due to hydrogen bonding. Period 3+ hydrides (PH₃, H₂S, HCl) follow normal trend based on molar mass.

**Comparison:**
- Without H-bonding, H₂O would have BP around -80°C (similar to H₂S)
- H-bonding raises it by ~180°C!`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Consider three isomers with formula C₅H₁₂: n-pentane (linear chain), isopentane (one branch), and neopentane (highly branched, compact). All are nonpolar. Predict the order of boiling points and explain your reasoning in terms of intermolecular forces.',
            solution: `**Solution:**

**Given:** Three C₅H₁₂ isomers (same molecular formula, different structures)
- n-pentane: CH₃-CH₂-CH₂-CH₂-CH₃ (linear)
- isopentane: CH₃-CH(CH₃)-CH₂-CH₃ (one branch)
- neopentane: C(CH₃)₄ (four CH₃ groups around central C, highly branched)

**Find:** Predict BP order and explain

**Step 1: Identify molecular properties**

**All three isomers:**
- **Same molecular formula:** C₅H₁₂
- **Same molar mass:** 72 g/mol
- **Same number of electrons:** 42 electrons
- **All nonpolar:** Symmetrical C-H bonds, no overall dipole
- **Same IMFs:** London Dispersion Forces (LDF) only

**Since mass and polarity are identical, what differs?**

**Answer:** **Molecular shape / Surface area contact**

**Step 2: Analyze molecular shapes**

**n-Pentane (linear chain):**
- Extended, elongated shape
- Can align closely with neighboring molecules
- **Maximum surface area contact**
- Like two logs lying parallel

$$\\ce{CH3-CH2-CH2-CH2-CH3}$$

**Isopentane (one branch):**
- Somewhat compact
- Less surface contact than linear
- **Intermediate surface area contact**

$$\\ce{CH3-CH(CH3)-CH2-CH3}$$

**Neopentane (highly branched):**
- Nearly **spherical** shape
- Very compact
- **Minimum surface area contact**
- Like two soccer balls touching (only contact at one point)

$$\\ce{    CH3     }$$
$$\\ce{     |      }$$
$$\\ce{CH3-C-CH3}$$
$$\\ce{     |      }$$
$$\\ce{    CH3     }$$

**Step 3: Relate shape to LDF strength**

**London Dispersion Forces depend on:**

1. **Number of electrons** (same for all three = 42 electrons) ✓
2. **Surface area contact between molecules**
   - More contact → more temporary dipoles can interact
   - More contact → stronger total LDF

**Shape effect:**
- **Linear molecules:** Maximum surface contact → Strongest LDF
- **Branched molecules:** Less surface contact → Weaker LDF  
- **Compact/spherical:** Minimum contact → Weakest LDF

**Analogy:**
- Two pencils lying parallel (n-pentane): Large contact area
- Two partly-branched objects (isopentane): Medium contact
- Two balls touching (neopentane): Small contact area (point contact)

**Step 4: Predict boiling points**

**Boiling point trend:**

$$\\text{Stronger IMF} \\rightarrow \\text{Higher BP}$$

**LDF strength order:**

$$\\text{n-pentane} > \\text{isopentane} > \\text{neopentane}$$

**Therefore, BP order:**

$$\\text{n-pentane} > \\text{isopentane} > \\text{neopentane}$$

**Step 5: Verify with actual data**

**Actual boiling points:**
- **n-Pentane:** 36°C (highest)
- **Isopentane:** 28°C (middle)
- **Neopentane:** 10°C (lowest)

**Difference:** 26°C range for same molecular formula!

**Step 6: Explain the trend**

**Why does shape matter so much?**

**n-Pentane (BP = 36°C):**
- Linear chain allows molecules to pack closely
- Large surface area in contact
- Many weak LDF interactions add up
- Collective effect creates stronger total attraction
- Requires more energy to separate molecules

**Isopentane (BP = 28°C):**
- One branch reduces contact area
- Fewer LDF interaction points
- Intermediate attraction

**Neopentane (BP = 10°C):**
- Compact, nearly spherical
- Minimal contact (molecules touch at small area)
- Fewest LDF interactions
- Weakest total attraction
- Easiest to separate (boils at lowest temperature)

**Answer:**

**Boiling point order:** n-pentane > isopentane > neopentane

**Reasoning:**

All three isomers have identical molecular formulas (C₅H₁₂), molar masses (72 g/mol), and are nonpolar, so they experience **only London Dispersion Forces**. 

The difference in boiling points arises from **molecular shape**, which affects the surface area available for intermolecular contact:

1. **n-Pentane** (linear): Maximum surface contact between molecules → strongest LDF → highest BP (36°C)

2. **Isopentane** (one branch): Intermediate surface contact → intermediate LDF → middle BP (28°C)

3. **Neopentane** (highly branched, compact): Minimum surface contact → weakest LDF → lowest BP (10°C)

**General principle:** For isomers with same molecular formula:
- **More branching** → More compact → Less surface contact → **Lower BP**
- **Linear structure** → Extended shape → More surface contact → **Higher BP**

**Key insight:** Even though all molecules have the same number of electrons (same inherent LDF capability), the **geometric arrangement** determines how effectively molecules can interact. This demonstrates that molecular shape is crucial for determining physical properties, even when chemical composition is identical.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', imfTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: imfTopic.id,
        front: 'What is the difference between intramolecular and intermolecular forces?',
        back: 'Intramolecular: forces WITHIN molecules (ionic/covalent bonds, strong, 200-1000 kJ/mol). Intermolecular: forces BETWEEN molecules (LDF, dipole-dipole, H-bonding, weak, 0.1-40 kJ/mol).'
      },
      {
        topicId: imfTopic.id,
        front: 'What are the three main types of intermolecular forces in order of strength?',
        back: 'London Dispersion < Dipole-Dipole < Hydrogen Bonding. All molecules have LDF. Polar molecules also have dipole-dipole. H-bonding requires H bonded to N, O, or F.'
      },
      {
        topicId: imfTopic.id,
        front: 'What are London Dispersion Forces and what affects their strength?',
        back: 'Temporary attractive forces from instantaneous dipoles. Present in ALL molecules. Strength increases with: 1) More electrons/larger molar mass, 2) Greater surface area contact (linear > compact).'
      },
      {
        topicId: imfTopic.id,
        front: 'What are the requirements for hydrogen bonding?',
        back: 'H must be bonded directly to N, O, or F (highly electronegative). Another molecule must have lone pair on N, O, or F to accept H-bond. Strongest IMF (10-40 kJ/mol).'
      },
      {
        topicId: imfTopic.id,
        front: 'How do intermolecular forces affect boiling point?',
        back: 'Stronger IMF → Higher boiling point. Must overcome IMFs to separate molecules and boil. Order: H-bonding > dipole-dipole > LDF only (for similar-sized molecules).'
      },
      {
        topicId: imfTopic.id,
        front: 'Why does H₂O have a higher BP than H₂S despite lower molar mass?',
        back: 'H₂O exhibits hydrogen bonding (O-H bonds), while H₂S has only dipole-dipole forces (S is Period 3, not electronegative enough for H-bonding). H-bonding is much stronger than dipole-dipole.'
      },
      {
        topicId: imfTopic.id,
        front: 'How does molecular shape affect London Dispersion Forces?',
        back: 'More surface area contact → stronger LDF. Linear molecules have more contact than compact/spherical molecules. Example: n-pentane (linear, higher BP) vs neopentane (compact, lower BP).'
      },
      {
        topicId: imfTopic.id,
        front: 'What IMFs are present in: (a) nonpolar molecules, (b) polar molecules without N-H/O-H/F-H, (c) molecules with N-H/O-H/F-H?',
        back: '(a) LDF only. (b) Dipole-dipole + LDF. (c) Hydrogen bonding + dipole-dipole + LDF. The strongest IMF determines physical properties.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', imfTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Intermolecular Forces and Properties (Part 1)!');
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
