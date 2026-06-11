import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Molecular and Ionic Compound Structure (Part 4)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Molecular and Ionic category
  const molecularCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Molecular and Ionic Compound Structure and Properties'
    }
  });

  if (!molecularCategory) {
    throw new Error('Molecular and Ionic Compound Structure and Properties category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: molecularCategory.id }
  });

  // Topic 4: Hybridization
  const hybridizationTopic = await prisma.topic.create({
    data: {
      title: 'Hybridization and Sigma/Pi Bonds',
      slug: 'hybridization-sigma-pi-bonds',
      description: 'Understand orbital hybridization (sp, sp², sp³, sp³d, sp³d²), distinguish between sigma and pi bonds, and relate hybridization to molecular geometry.',
      order: existingTopics + 1,
      categoryId: molecularCategory.id,
      isPremium: false,
      textContent: `
# Hybridization and Sigma/Pi Bonds

## What is Hybridization?

**Hybridization:** The mixing of atomic orbitals to form new **hybrid orbitals** of equal energy that can form bonds

**Why hybridization occurs:**
- Pure atomic orbitals (s, p, d) don't always explain observed molecular geometries
- Hybrid orbitals better describe bonding in molecules
- Provides framework for understanding molecular shapes

**Key concept:** Number and type of hybrid orbitals = number and type of electron domains (from VSEPR)

## Relationship: Hybridization and Steric Number

| Steric Number | Hybridization | Electron Geometry | Bond Angle |
|---------------|---------------|-------------------|------------|
| 2 | **sp** | Linear | 180° |
| 3 | **sp²** | Trigonal planar | 120° |
| 4 | **sp³** | Tetrahedral | 109.5° |
| 5 | **sp³d** | Trigonal bipyramidal | 90°, 120° |
| 6 | **sp³d²** | Octahedral | 90° |

**Pattern:** Steric number determines hybridization directly!

## Types of Hybridization

### sp Hybridization

**Orbitals mixed:** 1 s + 1 p = **2 sp hybrid orbitals**

**Electron geometry:** Linear

**Bond angle:** 180°

**Remaining p orbitals:** 2 unhybridized p orbitals (can form π bonds)

**Example:** CO₂, BeCl₂, HCN, C₂H₂ (acetylene)

**Carbon in acetylene (C₂H₂):**

$$\\ce{H-C≡C-H}$$

- Each C is sp hybridized
- 2 sp orbitals form σ bonds (1 to H, 1 to other C)
- 2 unhybridized p orbitals form 2 π bonds (triple bond = 1 σ + 2 π)

**Geometry:** Linear (all atoms in line)

### sp² Hybridization

**Orbitals mixed:** 1 s + 2 p = **3 sp² hybrid orbitals**

**Electron geometry:** Trigonal planar

**Bond angle:** 120°

**Remaining p orbitals:** 1 unhybridized p orbital (can form π bond)

**Example:** C₂H₄ (ethylene), BF₃, formaldehyde (H₂CO)

**Carbon in ethylene (C₂H₄):**

$$\\ce{H2C=CH2}$$

- Each C is sp² hybridized
- 3 sp² orbitals form σ bonds (2 to H, 1 to other C)
- 1 unhybridized p orbital forms 1 π bond (double bond = 1 σ + 1 π)

**Geometry:** Trigonal planar around each C (all atoms in same plane)

### sp³ Hybridization

**Orbitals mixed:** 1 s + 3 p = **4 sp³ hybrid orbitals**

**Electron geometry:** Tetrahedral

**Bond angle:** 109.5°

**Remaining p orbitals:** None (all p orbitals used)

**Example:** CH₄, H₂O, NH₃, CCl₄

**Carbon in methane (CH₄):**

- C is sp³ hybridized
- 4 sp³ orbitals form 4 σ bonds to H atoms
- No π bonds (only single bonds)

**Geometry:** Tetrahedral

**Note on lone pairs:**
- H₂O: O is sp³ hybridized (2 bonds + 2 lone pairs = 4 electron domains)
- NH₃: N is sp³ hybridized (3 bonds + 1 lone pair = 4 electron domains)
- Lone pairs occupy hybrid orbitals!

### sp³d Hybridization

**Orbitals mixed:** 1 s + 3 p + 1 d = **5 sp³d hybrid orbitals**

**Electron geometry:** Trigonal bipyramidal

**Bond angles:** 90°, 120°

**Example:** PCl₅, SF₄

**Only in Period 3+** (need d orbitals)

**Phosphorus in PCl₅:**

- P is sp³d hybridized
- 5 sp³d orbitals form 5 σ bonds to Cl atoms
- Trigonal bipyramidal geometry

### sp³d² Hybridization

**Orbitals mixed:** 1 s + 3 p + 2 d = **6 sp³d² hybrid orbitals**

**Electron geometry:** Octahedral

**Bond angles:** 90°

**Example:** SF₆, XeF₄

**Only in Period 3+** (need d orbitals)

**Sulfur in SF₆:**

- S is sp³d² hybridized
- 6 sp³d² orbitals form 6 σ bonds to F atoms
- Octahedral geometry

**Xenon in XeF₄:**

- Xe is sp³d² hybridized
- 4 sp³d² orbitals form σ bonds to F atoms
- 2 sp³d² orbitals contain lone pairs
- Square planar molecular geometry

## Sigma (σ) and Pi (π) Bonds

### Sigma (σ) Bonds

**Definition:** Bond formed by **head-on overlap** of orbitals along the internuclear axis

**Characteristics:**
- Strongest type of covalent bond
- Electron density concentrated between nuclei
- Allows rotation around bond axis
- Can form from: s-s, s-p, p-p (head-on), or hybrid-hybrid overlap

**In every bond:**
- Single bond: 1 σ bond
- Double bond: 1 σ bond (+ 1 π)
- Triple bond: 1 σ bond (+ 2 π)

**There is ALWAYS one (and only one) σ bond between any two bonded atoms**

### Pi (π) Bonds

**Definition:** Bond formed by **side-by-side overlap** of parallel p orbitals

**Characteristics:**
- Weaker than σ bonds
- Electron density above and below internuclear axis
- Restricts rotation (causes rigidity)
- Can only form from unhybridized p orbitals (or d orbitals)

**Occurrence:**
- Single bond: 0 π bonds
- Double bond: 1 π bond
- Triple bond: 2 π bonds

**π bonds only exist in multiple bonds!**

### Visualizing σ and π Bonds

**Single bond (C-C):**
- 1 σ bond (sp³-sp³ overlap)
- Total: **1 σ, 0 π**

**Double bond (C=C):**
- 1 σ bond (sp²-sp² overlap)
- 1 π bond (p-p side overlap)
- Total: **1 σ, 1 π**

**Triple bond (C≡C):**
- 1 σ bond (sp-sp overlap)
- 2 π bonds (two sets of p-p overlaps)
- Total: **1 σ, 2 π**

## Determining Hybridization - Step by Step

**Step 1:** Draw Lewis structure

**Step 2:** Identify central atom

**Step 3:** Count electron domains (steric number)
- Bonds (each counts as 1, regardless of single/double/triple)
- Lone pairs (each counts as 1)

**Step 4:** Match steric number to hybridization

| SN | Hybridization |
|----|---------------|
| 2 | sp |
| 3 | sp² |
| 4 | sp³ |
| 5 | sp³d |
| 6 | sp³d² |

**Step 5:** Count σ and π bonds
- Count all bonds
- Each bond has 1 σ bond
- Double bond: +1 π bond
- Triple bond: +2 π bonds

## Examples of Hybridization

### Example 1: Methane (CH₄)

**Lewis structure:** C with 4 single bonds to H

**Step 1:** Central atom = C

**Step 2:** Count domains
- 4 C-H bonds = 4 domains
- 0 lone pairs
- SN = 4

**Step 3:** Hybridization
- SN = 4 → **sp³**

**Step 4:** Bonds
- 4 single bonds = 4 σ bonds
- No π bonds
- **Total: 4 σ, 0 π**

### Example 2: Ethylene (C₂H₄)

**Lewis structure:** H₂C=CH₂

**For each C:**

**Step 1:** Count domains
- 2 C-H bonds = 2 domains
- 1 C=C bond = 1 domain (double bond counts as 1!)
- 0 lone pairs
- SN = 3

**Step 2:** Hybridization
- SN = 3 → **sp²**

**Step 3:** Bonds (entire molecule)
- 4 C-H bonds = 4 σ bonds
- 1 C=C double bond = 1 σ + 1 π
- **Total: 5 σ, 1 π**

### Example 3: Acetylene (C₂H₂)

**Lewis structure:** H-C≡C-H

**For each C:**

**Step 1:** Count domains
- 1 C-H bond = 1 domain
- 1 C≡C bond = 1 domain (triple bond counts as 1!)
- 0 lone pairs
- SN = 2

**Step 2:** Hybridization
- SN = 2 → **sp**

**Step 3:** Bonds (entire molecule)
- 2 C-H bonds = 2 σ bonds
- 1 C≡C triple bond = 1 σ + 2 π
- **Total: 3 σ, 2 π**

### Example 4: Water (H₂O)

**Lewis structure:** H-O-H with 2 lone pairs on O

**For O:**

**Step 1:** Count domains
- 2 O-H bonds = 2 domains
- 2 lone pairs = 2 domains
- SN = 4

**Step 2:** Hybridization
- SN = 4 → **sp³**

**Important:** Lone pairs occupy hybrid orbitals!

**Step 3:** Bonds
- 2 O-H bonds = 2 σ bonds
- **Total: 2 σ, 0 π**

## Hybridization in Complex Molecules

For molecules with multiple central atoms, analyze each atom separately.

### Example: Formaldehyde (H₂CO)

$$\\ce{H2C=O}$$

**For C:**
- 2 C-H bonds + 1 C=O bond = 3 domains
- SN = 3 → **sp²** hybridization

**For O:**
- 1 C=O bond + 2 lone pairs = 3 domains
- SN = 3 → **sp²** hybridization

**Bonds:**
- 2 C-H: 2 σ bonds
- 1 C=O: 1 σ + 1 π
- **Total: 3 σ, 1 π**

## Properties Related to π Bonds

### Rotation

**Single bonds (only σ):** Free rotation possible
- σ bond allows rotation around bond axis
- Examples: C-C in ethane

**Double bonds (σ + π):** No rotation
- π bond restricts rotation (would break π overlap)
- Creates geometric isomers (cis/trans)
- Examples: C=C in ethylene

**Triple bonds (σ + 2π):** No rotation
- Even more restricted than double bonds
- Linear geometry maintained

### Bond Strength and Length

**More π bonds → Stronger, shorter bonds**

**C-C bonds:**

| Bond | Length (pm) | Energy (kJ/mol) | σ bonds | π bonds |
|------|-------------|-----------------|---------|---------|
| C-C | 154 | 348 | 1 | 0 |
| C=C | 134 | 614 | 1 | 1 |
| C≡C | 120 | 839 | 1 | 2 |

**Pattern:**
- More bonds → shorter distance
- More bonds → higher energy (stronger)

## Common Mistakes to Avoid

1. **Counting multiple bonds as multiple domains:** C=O is ONE domain, not two
2. **Forgetting lone pairs in hybridization:** Lone pairs occupy hybrid orbitals
3. **Confusing σ and π count:** Every bond has exactly 1 σ; π bonds only in multiple bonds
4. **Wrong hybrid orbital count:** sp³ makes 4 orbitals, not 3
5. **Assuming Period 2 can expand octet:** C, N, O, F cannot use d orbitals (no sp³d or sp³d²)

## Summary Table: Complete Reference

| Molecule | Central Atom | SN | Hybridization | Geometry | σ bonds | π bonds |
|----------|--------------|-----|---------------|----------|---------|---------|
| CO₂ | C | 2 | sp | Linear | 2 | 2 |
| BF₃ | B | 3 | sp² | Trig planar | 3 | 0 |
| CH₄ | C | 4 | sp³ | Tetrahedral | 4 | 0 |
| H₂O | O | 4 | sp³ | Bent | 2 | 0 |
| PCl₅ | P | 5 | sp³d | Trig bipyramidal | 5 | 0 |
| SF₆ | S | 6 | sp³d² | Octahedral | 6 | 0 |
| C₂H₄ | C | 3 | sp² | Trig planar | 5 | 1 |
| C₂H₂ | C | 2 | sp | Linear | 3 | 2 |
| NH₃ | N | 4 | sp³ | Trig pyramidal | 3 | 0 |

## Applications

1. **Predicting molecular properties:** Hybridization explains observed geometries
2. **Understanding reactivity:** π bonds are more reactive than σ bonds
3. **Isomerism:** Restricted rotation around double bonds creates geometric isomers
4. **Conjugation:** Alternating single/double bonds create extended π systems
5. **Spectroscopy:** π→π* transitions explain UV-visible absorption
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine the hybridization of the central atom in ammonia (NH₃) and count the number of sigma and pi bonds.',
            solution: `**Solution:**

**Given:** NH₃ (ammonia)
**Find:** Hybridization of N, count σ and π bonds

**Step 1: Draw Lewis structure**

$$\\ce{H - N - H}$$
$$\\ce{    |    }$$
$$\\ce{    H    }$$

N has 3 N-H bonds and **1 lone pair**

**Step 2: Identify central atom**

Central atom: **N** (nitrogen)

**Step 3: Count electron domains on N**

- 3 N-H single bonds = **3 domains**
- 1 lone pair = **1 domain**
- **Total: 4 electron domains**

**Step 4: Determine steric number**

$$\\text{SN} = 4$$

**Step 5: Determine hybridization**

SN = 4 → **sp³ hybridization**

**Important:** The lone pair occupies one of the sp³ hybrid orbitals!

**Step 6: Count sigma (σ) bonds**

- 3 N-H bonds = **3 σ bonds**
- Each single bond = 1 σ bond

**Step 7: Count pi (π) bonds**

- No double or triple bonds
- **0 π bonds**

**Answer:**

**Hybridization of N:** sp³

**Bonds:**
- σ bonds: **3**
- π bonds: **0**

**Explanation:**

Nitrogen uses sp³ hybridization because it has 4 electron domains (3 bonds + 1 lone pair). The 4 sp³ hybrid orbitals are arranged tetrahedrally:
- 3 sp³ orbitals form σ bonds with H atoms (overlap with H 1s orbitals)
- 1 sp³ orbital contains the lone pair

The molecular geometry is **trigonal pyramidal** (not tetrahedral) because we only "see" the 3 H atoms in the molecular shape, though the electron geometry is tetrahedral.

**Bond angle:** ~107° (less than ideal 109.5° due to lone pair repulsion)

**Key takeaway:** Hybridization is determined by TOTAL electron domains (including lone pairs), not just bonding domains.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For the molecule formaldehyde (H₂CO), determine: (a) the hybridization of both C and O, (b) the total number of sigma and pi bonds, and (c) explain why the molecule is planar.',
            solution: `**Solution:**

**Given:** H₂CO (formaldehyde)
**Find:** (a) Hybridization of C and O, (b) σ and π bond counts, (c) why planar

**Step 1: Draw Lewis structure**

$$\\ce{    H     }$$
$$\\ce{    |     }$$
$$\\ce{H - C = O}$$

Or more clearly: C has 2 single bonds to H and 1 double bond to O
O has 2 lone pairs

**Part (a): Determine hybridization**

**For Carbon (C):**

**Count electron domains:**
- 2 C-H single bonds = 2 domains
- 1 C=O double bond = **1 domain** (multiple bonds count as 1!)
- 0 lone pairs
- **Total: 3 electron domains**

**Steric number:** SN = 3

**Hybridization:** SN = 3 → **sp² hybridization**

**For Oxygen (O):**

**Count electron domains:**
- 1 C=O double bond = 1 domain
- 2 lone pairs = 2 domains
- **Total: 3 electron domains**

**Steric number:** SN = 3

**Hybridization:** SN = 3 → **sp² hybridization**

**Part (b): Count σ and π bonds**

**Sigma bonds:**
- C-H bond (left): 1 σ (sp²-s overlap)
- C-H bond (right): 1 σ (sp²-s overlap)
- C=O bond: 1 σ (sp²-sp² overlap)
- **Total σ bonds: 3**

**Pi bonds:**
- C=O double bond: 1 π (p-p side overlap)
- **Total π bonds: 1**

**Verification:**
- Total bonds: 2 single + 1 double = 4 bonds
- 4 bonds = 3 σ + 1 π ✓

**Part (c): Explain planarity**

**Why is H₂CO planar?**

1. **Carbon hybridization:** C is sp² hybridized
   - sp² creates trigonal planar electron geometry
   - All 3 sp² orbitals lie in the same plane
   - Bond angles ~120°

2. **Pi bond requirement:** The C=O double bond requires:
   - 1 σ bond (sp² hybrid overlap)
   - 1 π bond (unhybridized p orbital overlap)
   
3. **P orbital orientation:**
   - Each sp² hybridized atom (C and O) has 1 unhybridized p orbital
   - These p orbitals must be **parallel** to overlap and form π bond
   - P orbitals are perpendicular to the plane of sp² orbitals
   - This forces all atoms to lie in the same plane

4. **Restricted rotation:**
   - π bond prevents rotation around C=O
   - If molecule tried to twist, p orbitals wouldn't overlap
   - Planarity is maintained

**Answer:**

**(a) Hybridization:**
- Carbon: **sp²**
- Oxygen: **sp²**

**(b) Bonds:**
- Sigma (σ) bonds: **3**
- Pi (π) bonds: **1**

**(c) Planarity explanation:**

The molecule is planar because both C and O are sp² hybridized. sp² hybridization creates a trigonal planar arrangement where all atoms lie in the same plane. Additionally, the π bond in the C=O double bond requires parallel p orbitals, which forces the molecule to remain flat. Any deviation from planarity would disrupt the p orbital overlap needed for the π bond.

**Molecular geometry:** 
- Around C: Trigonal planar (3 groups)
- Around O: Bent (1 bond + 2 lone pairs, but sp² geometry)
- All 4 atoms (H, C, H, O) in same plane

**Bond angles:**
- H-C-H: ~120°
- H-C=O: ~120°
- Total around C: ~360° (planar)`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Consider the molecule acetylene (C₂H₂) with structure H-C≡C-H. (a) Determine the hybridization of each carbon atom. (b) Count the total number of sigma and pi bonds. (c) Describe the orbital overlap for each bond. (d) Explain the geometry and why all atoms are collinear.',
            solution: `**Solution:**

**Given:** C₂H₂ (acetylene), structure H-C≡C-H
**Find:** (a) Hybridization, (b) σ and π counts, (c) orbital overlaps, (d) geometry explanation

**Step 1: Draw Lewis structure**

$$\\ce{H - C ≡ C - H}$$

Each C has:
- 1 single bond to H
- 1 triple bond to other C

**Part (a): Determine hybridization of each C**

**For left carbon (C₁):**

**Count electron domains:**
- 1 C-H single bond = 1 domain
- 1 C≡C triple bond = **1 domain** (triple bond counts as 1!)
- 0 lone pairs
- **Total: 2 electron domains**

**Steric number:** SN = 2

**Hybridization:** SN = 2 → **sp hybridization**

**For right carbon (C₂):**

Same analysis as C₁:
- SN = 2 → **sp hybridization**

**Orbital composition for sp hybridization:**
- Mix 1 s + 1 p orbital → 2 sp hybrid orbitals
- **Remaining:** 2 unhybridized p orbitals (py and pz)

**Part (b): Count σ and π bonds**

**Sigma bonds:**
- H-C bond (left): 1 σ
- C≡C bond: 1 σ (sp-sp overlap)
- C-H bond (right): 1 σ
- **Total σ bonds: 3**

**Pi bonds:**
- C≡C triple bond: 2 π bonds (two sets of p-p overlaps)
- **Total π bonds: 2**

**Total bonds:** 3 σ + 2 π = 5 bonds
- 2 single bonds (H-C, C-H) = 2 bonds
- 1 triple bond (C≡C) = 3 bonds
- Total: 5 bonds ✓

**Part (c): Describe orbital overlap for each bond**

**Left H-C bond:**
- **Type:** σ bond
- **Orbitals:** H (1s) overlaps with C (sp hybrid)
- **Overlap:** Head-on (along internuclear axis)

**C≡C bond (triple bond):**

**σ bond (1):**
- **Orbitals:** C (sp hybrid) overlaps with C (sp hybrid)
- **Overlap:** Head-on (sp-sp)
- **Orientation:** Along C-C axis

**π bond (1):**
- **Orbitals:** C (unhybridized py) overlaps with C (unhybridized py)
- **Overlap:** Side-by-side (parallel p orbitals)
- **Orientation:** Above and below C-C axis

**π bond (2):**
- **Orbitals:** C (unhybridized pz) overlaps with C (unhybridized pz)
- **Overlap:** Side-by-side (parallel p orbitals)
- **Orientation:** Front and back of C-C axis

**Right C-H bond:**
- **Type:** σ bond
- **Orbitals:** C (sp hybrid) overlaps with H (1s)
- **Overlap:** Head-on

**Visualization of p orbitals:**
- py orbitals: create π bond in vertical plane
- pz orbitals: create π bond in horizontal plane
- Together: cylindrical electron cloud around C-C axis

**Part (d): Explain geometry and collinearity**

**Why are all atoms collinear (in a straight line)?**

**1. sp Hybridization geometry:**
- sp hybridization → **linear electron geometry**
- 2 sp hybrid orbitals point in opposite directions (180° apart)
- This minimizes repulsion between 2 electron domains

**2. Orbital arrangement:**

**Left carbon:**
- One sp orbital points toward H (forms H-C σ bond)
- One sp orbital points toward other C (forms C-C σ bond)
- 180° angle between H and C

**Right carbon:**
- One sp orbital points toward other C (forms C-C σ bond)
- One sp orbital points toward H (forms C-H σ bond)
- 180° angle between C and H

**3. Pi bond requirement:**
- Two sets of p orbitals must be perpendicular to each other
- Both sets must be perpendicular to the sp orbital axis
- This arrangement requires linear geometry
- Any bending would destroy p orbital overlap

**4. Maximum separation:**
- SN = 2 means 2 electron domains
- Maximum separation = 180° (linear)
- Minimizes electron-electron repulsion

**Answer:**

**(a) Hybridization:**
- Both carbon atoms: **sp**

**(b) Bonds:**
- Sigma (σ) bonds: **3** (2 C-H + 1 C-C)
- Pi (π) bonds: **2** (both in C≡C)

**(c) Orbital overlaps:**
- H-C bonds: H(1s)-C(sp) σ bonds
- C≡C bond: 
  * 1 σ bond from C(sp)-C(sp) overlap
  * 2 π bonds from C(py)-C(py) and C(pz)-C(pz) overlaps

**(d) Geometry:**

**All atoms are collinear (linear) because:**
1. sp hybridization creates 2 hybrid orbitals at 180°
2. Steric number = 2 requires linear geometry (maximum separation)
3. π bonds require unhybridized p orbitals to be perpendicular to internuclear axis
4. This forces H-C-C-H into straight line

**Bond angle:** H-C-C = C-C-H = **180°**

**Overall molecular geometry:** Linear (all 4 atoms in straight line)

**Key insight:** The triple bond (1 σ + 2 π) creates a very strong, rigid, linear structure. The two π bonds form a cylindrical electron cloud around the C-C σ bond, preventing any rotation or bending.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', hybridizationTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: hybridizationTopic.id,
        front: 'What is hybridization and why does it occur?',
        back: 'Mixing of atomic orbitals to form new hybrid orbitals of equal energy. Occurs to explain observed molecular geometries that pure s, p, d orbitals cannot explain.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'How do you determine hybridization from steric number?',
        back: 'SN 2: sp, SN 3: sp², SN 4: sp³, SN 5: sp³d, SN 6: sp³d². Steric number (bonds + lone pairs) directly determines hybridization type.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'What is the difference between sigma (σ) and pi (π) bonds?',
        back: 'σ bonds: head-on orbital overlap along internuclear axis, strongest, allows rotation. π bonds: side-by-side overlap of parallel p orbitals, weaker, restricts rotation. Every bond has 1 σ; π only in multiple bonds.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'How many sigma and pi bonds are in a triple bond?',
        back: '1 sigma (σ) bond and 2 pi (π) bonds. Total = 1 σ + 2 π. The σ bond is from sp-sp overlap; the 2 π bonds from two sets of p-p overlaps.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'What hybridization does carbon have in CH₄, C₂H₄, and C₂H₂?',
        back: 'CH₄ (methane): sp³ (tetrahedral). C₂H₄ (ethylene): sp² (trigonal planar). C₂H₂ (acetylene): sp (linear). Relates to number of bonds to each C.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'Do lone pairs occupy hybrid orbitals?',
        back: 'YES! Lone pairs occupy hybrid orbitals just like bonding pairs. Example: H₂O has sp³ O with 2 bonds and 2 lone pairs in sp³ orbitals (SN = 4).'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'Why does a double bond restrict rotation?',
        back: 'The pi (π) bond requires parallel p orbitals with side-by-side overlap. Rotation would break this overlap, destroying the π bond. Only σ bonds allow free rotation.'
      },
      {
        topicId: hybridizationTopic.id,
        front: 'Which elements can have sp³d or sp³d² hybridization?',
        back: 'Only Period 3+ elements (P, S, Cl, Br, I, Xe, etc.) because they have accessible d orbitals. Period 2 elements (C, N, O, F) cannot expand octets - maximum is sp³.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', hybridizationTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Molecular and Ionic Compound Structure (Part 4)!');
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
