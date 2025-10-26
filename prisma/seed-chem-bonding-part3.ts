import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Molecular and Ionic Compound Structure (Part 3)...');

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

  // Topic 3: VSEPR Theory and Molecular Geometry
  const vsepTopic = await prisma.topic.create({
    data: {
      title: 'VSEPR Theory and Molecular Geometry',
      slug: 'vsepr-molecular-geometry',
      description: 'Use VSEPR theory to predict molecular shapes, bond angles, and understand the relationship between electron geometry and molecular geometry.',
      order: existingTopics + 1,
      categoryId: molecularCategory.id,
      isPremium: false,
      textContent: `
# VSEPR Theory and Molecular Geometry

## What is VSEPR Theory?

**VSEPR** = **V**alence **S**hell **E**lectron **P**air **R**epulsion Theory

**Key Principle:** Electron pairs (bonding and lone pairs) repel each other and arrange themselves to be as far apart as possible, minimizing repulsion.

**Result:** Predicts 3D molecular shapes

**Developed by:** Ronald Gillespie and Ronald Nyholm (1957)

## Electron Domains

**Electron domain:** A region of electron density around a central atom

**Types of electron domains:**
1. **Single bond:** 1 electron domain
2. **Double bond:** 1 electron domain (counts as one region)
3. **Triple bond:** 1 electron domain (counts as one region)
4. **Lone pair:** 1 electron domain

**Key point:** Multiple bonds count as ONE electron domain

**Example: CO₂**

$$\\ce{O=C=O}$$

- 2 double bonds = **2 electron domains**
- No lone pairs
- Total: **2 electron domains**

## Steric Number

**Steric Number (SN):** Total number of electron domains around central atom

$$\\text{SN} = (\\text{bonding domains}) + (\\text{lone pairs})$$

**Alternative:**

$$\\text{SN} = (\\text{number of atoms bonded}) + (\\text{lone pairs on central atom})$$

**Examples:**

**CH₄:** 4 bonds + 0 lone pairs = SN 4

**NH₃:** 3 bonds + 1 lone pair = SN 4

**H₂O:** 2 bonds + 2 lone pairs = SN 4

All have SN = 4, but different **molecular** shapes!

## Electron Geometry vs. Molecular Geometry

### Electron Geometry

**Definition:** Arrangement of ALL electron domains (bonds + lone pairs)

**Determined by:** Steric number only

### Molecular Geometry

**Definition:** Arrangement of ATOMS only (ignores lone pairs)

**Determined by:** Steric number AND number of lone pairs

**Key distinction:** Lone pairs affect geometry but aren't "seen" in molecular shape

## Five Basic Electron Geometries

Based on steric number:

| SN | Electron Geometry | Bond Angles | Example |
|----|-------------------|-------------|---------|
| 2 | Linear | 180° | CO₂ |
| 3 | Trigonal planar | 120° | BF₃ |
| 4 | Tetrahedral | 109.5° | CH₄ |
| 5 | Trigonal bipyramidal | 90°, 120° | PCl₅ |
| 6 | Octahedral | 90° | SF₆ |

## Molecular Geometries by Steric Number

### SN = 2 (2 electron domains)

**Electron geometry:** Linear

| Bonding | Lone Pairs | Molecular Geometry | Bond Angle | Example |
|---------|------------|-------------------|------------|---------|
| 2 | 0 | **Linear** | 180° | CO₂, BeH₂ |

**Linear:** All atoms in straight line

$$\\ce{O=C=O}$$ (180°)

### SN = 3 (3 electron domains)

**Electron geometry:** Trigonal planar

| Bonding | Lone Pairs | Molecular Geometry | Bond Angle | Example |
|---------|------------|-------------------|------------|---------|
| 3 | 0 | **Trigonal planar** | 120° | BF₃, SO₃ |
| 2 | 1 | **Bent** | <120° (~118°) | SO₂, O₃ |

**Trigonal planar:** Flat, three atoms around center

$$\\ce{F - B - F}$$ with third F above (all in plane)
$$\\ce{    |    }$$
$$\\ce{    F    }$$

**Bent (from trigonal planar):** V-shaped

$$\\ce{O=S=O}$$ (with lone pair on S, angle ~119°)

### SN = 4 (4 electron domains)

**Electron geometry:** Tetrahedral

| Bonding | Lone Pairs | Molecular Geometry | Bond Angle | Example |
|---------|------------|-------------------|------------|---------|
| 4 | 0 | **Tetrahedral** | 109.5° | CH₄, CCl₄ |
| 3 | 1 | **Trigonal pyramidal** | <109.5° (~107°) | NH₃, PCl₃ |
| 2 | 2 | **Bent** | <109.5° (~104.5°) | H₂O, H₂S |

**Tetrahedral:** 3D pyramid shape

CH₄: Carbon at center, 4 H atoms at corners of tetrahedron

**Trigonal pyramidal:** Pyramid with triangular base

NH₃: N at top, 3 H atoms form triangular base (lone pair on top)

**Bent (from tetrahedral):** V-shaped

H₂O: O at vertex, 2 H atoms, 2 lone pairs (angle 104.5°)

### SN = 5 (5 electron domains)

**Electron geometry:** Trigonal bipyramidal

**Two types of positions:**
- **Axial:** Top and bottom (3 at 90°)
- **Equatorial:** Middle three (at 120°)

**Lone pairs prefer equatorial positions** (more space, less repulsion)

| Bonding | Lone Pairs | Molecular Geometry | Bond Angle | Example |
|---------|------------|-------------------|------------|---------|
| 5 | 0 | **Trigonal bipyramidal** | 90°, 120° | PCl₅ |
| 4 | 1 | **Seesaw** | <90°, <120° | SF₄ |
| 3 | 2 | **T-shaped** | <90° | ClF₃ |
| 2 | 3 | **Linear** | 180° | XeF₂ |

**Trigonal bipyramidal:** Two pyramids joined at base

**Seesaw:** Like teeter-totter

**T-shaped:** Like letter T

**Linear (from SN 5):** Straight line with 3 lone pairs

### SN = 6 (6 electron domains)

**Electron geometry:** Octahedral

**All positions are equivalent** (all 90° apart)

| Bonding | Lone Pairs | Molecular Geometry | Bond Angle | Example |
|---------|------------|-------------------|------------|---------|
| 6 | 0 | **Octahedral** | 90° | SF₆ |
| 5 | 1 | **Square pyramidal** | <90° | BrF₅ |
| 4 | 2 | **Square planar** | 90° | XeF₄ |

**Octahedral:** 8-sided figure, 6 atoms at corners of octahedron

**Square pyramidal:** Square base with atom above

**Square planar:** Flat square (lone pairs above and below)

## Bond Angle Deviations

### General Rules

**Repulsion strength:** Lone pair-lone pair > Lone pair-bond > Bond-bond

**Effect:** Lone pairs take up more space than bonding pairs

**Result:** Bond angles decrease when lone pairs present

### Examples of Angle Changes

**CH₄ (no lone pairs):** 109.5° (ideal tetrahedral)

**NH₃ (1 lone pair):** ~107° (slightly compressed)

**H₂O (2 lone pairs):** ~104.5° (more compressed)

**Trend:** More lone pairs → smaller bond angles

### Why Lone Pairs Compress Angles

1. Lone pairs are closer to nucleus (not shared)
2. Lone pairs have more electron density
3. Greater repulsion pushes bonding pairs closer together
4. Bond angles become smaller

## Predicting Molecular Geometry - Step by Step

**Step 1:** Draw Lewis structure

**Step 2:** Count electron domains on central atom
- Bonds (single, double, triple each = 1 domain)
- Lone pairs (each = 1 domain)

**Step 3:** Determine steric number (SN)

**Step 4:** Identify electron geometry from SN

**Step 5:** Count lone pairs

**Step 6:** Determine molecular geometry
- Use table based on SN and lone pairs

**Step 7:** Predict bond angles
- Start with ideal angle for electron geometry
- Decrease if lone pairs present

## Example Walkthrough: NH₃

**Step 1: Lewis structure**

$$\\ce{H - N - H}$$ with lone pair on N
$$\\ce{    |    }$$
$$\\ce{    H    }$$

**Step 2: Count electron domains**
- 3 N-H bonds = 3 domains
- 1 lone pair = 1 domain
- Total: 4 domains

**Step 3: Steric number**
SN = 4

**Step 4: Electron geometry**
SN 4 → **Tetrahedral** electron geometry

**Step 5: Count lone pairs**
1 lone pair

**Step 6: Molecular geometry**
SN 4, 1 lone pair → **Trigonal pyramidal**

**Step 7: Bond angles**
- Ideal tetrahedral: 109.5°
- With 1 lone pair: ~107° (slightly less)

## Polarity and Molecular Geometry

**Molecular polarity** depends on:
1. **Bond polarity** (electronegativity difference)
2. **Molecular geometry** (symmetry)

### Polar vs. Nonpolar Molecules

**Nonpolar molecules:**
- Symmetrical geometry
- Bond dipoles cancel out
- Examples: CO₂ (linear), CCl₄ (tetrahedral), BF₃ (trigonal planar)

**Polar molecules:**
- Asymmetrical geometry
- Bond dipoles do NOT cancel
- Examples: H₂O (bent), NH₃ (trigonal pyramidal), HCl (linear but different atoms)

### Key Patterns

**Always polar if:**
- Lone pairs on central atom with polar bonds
- Asymmetric arrangement

**Always nonpolar if:**
- All bonds are identical AND symmetrical
- No lone pairs AND all surrounding atoms identical

**Examples:**

**CO₂:** O=C=O (linear, symmetrical) → **Nonpolar**

**H₂O:** H-O-H (bent due to lone pairs) → **Polar**

**CCl₄:** Tetrahedral, all Cl identical → **Nonpolar**

**CHCl₃:** Tetrahedral, but H ≠ Cl → **Polar**

**NH₃:** Trigonal pyramidal with lone pair → **Polar**

**BF₃:** Trigonal planar, all F identical → **Nonpolar**

## Multiple Central Atoms

For molecules with multiple "central" atoms, analyze each separately:

**Example: Ethanol (C₂H₅OH)**

- **Left C:** SN 4, tetrahedral
- **Right C:** SN 4, tetrahedral  
- **O:** SN 4, bent (2 lone pairs)

## Common Mistakes to Avoid

1. **Counting multiple bonds as multiple domains:** Double/triple bonds = 1 domain
2. **Confusing electron geometry with molecular geometry:** Lone pairs count for electron geometry only
3. **Forgetting lone pairs:** Always include in steric number
4. **Wrong polarity determination:** Check BOTH bond polarity AND geometry
5. **Ignoring lone pair repulsion:** Lone pairs decrease bond angles

## Summary Table

| SN | Electron Geometry | 0 LP | 1 LP | 2 LP | 3 LP |
|----|-------------------|------|------|------|------|
| 2 | Linear | Linear (180°) | - | - | - |
| 3 | Trigonal planar | Trig planar (120°) | Bent (<120°) | - | - |
| 4 | Tetrahedral | Tetrahedral (109.5°) | Trig pyramidal (<109.5°) | Bent (<109.5°) | - |
| 5 | Trig bipyramidal | Trig bipyramidal (90°,120°) | Seesaw | T-shaped | Linear (180°) |
| 6 | Octahedral | Octahedral (90°) | Sq pyramidal | Sq planar (90°) | - |

LP = Lone Pairs

## Applications

1. **Predicting molecular properties:** Shape affects polarity, boiling point, reactivity
2. **Drug design:** Molecular shape determines how drugs fit receptors
3. **Materials science:** Geometry affects crystal structure and material properties
4. **Understanding reactivity:** Shape determines which atoms can interact
`,
      exampleProblems: {
        create: [
          {
            question: 'Determine the molecular geometry and bond angle for carbon dioxide (CO₂).',
            solution: `**Solution:**

**Given:** CO₂
**Find:** Molecular geometry and bond angle

**Step 1: Draw Lewis structure**

Total valence electrons: 4 (C) + 2(6) (O) = 16

$$\\ce{O=C=O}$$

Each O has 2 double bonds and 2 lone pairs
C has 2 double bonds (no lone pairs)

**Step 2: Identify central atom**

Central atom: **C** (carbon)

**Step 3: Count electron domains on C**

- 1 double bond to left O = **1 electron domain**
- 1 double bond to right O = **1 electron domain**
- 0 lone pairs on C

**Total electron domains: 2**

**Remember:** Multiple bonds count as ONE domain!

**Step 4: Determine steric number**

$$\\text{SN} = 2$$

**Step 5: Identify electron geometry**

SN = 2 → **Linear** electron geometry

**Step 6: Count lone pairs on central atom**

C has **0 lone pairs**

**Step 7: Determine molecular geometry**

SN = 2, 0 lone pairs → **Linear** molecular geometry

**Step 8: Predict bond angle**

Linear geometry → **180°**

**Answer:**

- **Molecular geometry:** Linear
- **Bond angle:** 180°
- **Structure:** O=C=O (all atoms in straight line)

**Verification:**
- 2 electron domains ✓
- 0 lone pairs ✓
- Electron geometry = Molecular geometry (no lone pairs) ✓
- Maximum separation of 2 domains = 180° ✓

**Note:** CO₂ is also **nonpolar** because the two C=O dipoles point in opposite directions and cancel out due to the linear, symmetrical geometry.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Water (H₂O) and methane (CH₄) both have a steric number of 4, yet they have different molecular geometries and bond angles. Explain why.',
            solution: `**Solution:**

**Given:** H₂O and CH₄ both have SN = 4
**Find:** Explain different geometries and bond angles

**Step 1: Draw Lewis structures**

**H₂O (Water):**

$$\\ce{H - O - H}$$

O has 2 bonding pairs and **2 lone pairs**

**CH₄ (Methane):**

$$\\ce{H - C - H}$$ (with 2 more H atoms)

C has 4 bonding pairs and **0 lone pairs**

**Step 2: Calculate steric numbers**

**H₂O:**
- 2 O-H bonds = 2 domains
- 2 lone pairs = 2 domains
- **SN = 4**

**CH₄:**
- 4 C-H bonds = 4 domains
- 0 lone pairs = 0 domains
- **SN = 4**

Both have SN = 4 ✓

**Step 3: Determine electron geometry**

Both have SN = 4 → **Tetrahedral** electron geometry

**Step 4: Determine molecular geometry**

**H₂O:**
- SN = 4, **2 lone pairs**
- Molecular geometry: **Bent**
- Only "see" the 2 H atoms (ignore lone pairs in molecular shape)

**CH₄:**
- SN = 4, **0 lone pairs**
- Molecular geometry: **Tetrahedral**
- "See" all 4 H atoms

**Step 5: Explain bond angles**

**CH₄:**
- Ideal tetrahedral: **109.5°**
- No lone pairs → no compression
- H-C-H angle = **109.5°**

**H₂O:**
- Ideal tetrahedral would be 109.5°
- BUT: 2 lone pairs present
- **Lone pairs repel more** than bonding pairs
- Lone pairs push H atoms closer together
- H-O-H angle = **104.5°** (compressed)

**Step 6: Visualize repulsions**

**Repulsion strength:**
$$\\text{LP-LP} > \\text{LP-BP} > \\text{BP-BP}$$

**H₂O has:**
- 1 LP-LP repulsion (strongest)
- 4 LP-BP repulsions
- 1 BP-BP repulsion (weakest)

The strong LP-LP and LP-BP repulsions compress the bond angle.

**CH₄ has:**
- 0 LP-LP repulsions
- 0 LP-BP repulsions  
- 6 BP-BP repulsions (all equal)

Equal repulsions maintain ideal 109.5° angle.

**Answer:**

**Why different despite same SN?**

1. **Electron geometry is the same** (tetrahedral for both)
2. **Molecular geometry differs** due to lone pairs:
   - H₂O: Bent (2 LP compress bonding pairs)
   - CH₄: Tetrahedral (0 LP, all positions equivalent)

3. **Bond angles differ** due to lone pair repulsion:
   - H₂O: 104.5° (compressed by 2 lone pairs)
   - CH₄: 109.5° (ideal tetrahedral, no lone pairs)

**Key principle:** Molecular geometry depends on BOTH steric number AND number of lone pairs. Lone pairs are "invisible" in the molecular shape but strongly affect bond angles through greater repulsion.

**Summary:**

| Property | H₂O | CH₄ |
|----------|-----|-----|
| Steric Number | 4 | 4 |
| Electron Geometry | Tetrahedral | Tetrahedral |
| Lone Pairs | 2 | 0 |
| Molecular Geometry | Bent | Tetrahedral |
| Bond Angle | 104.5° | 109.5° |`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Xenon tetrafluoride (XeF₄) is a stable compound. Determine its molecular geometry, predict the bond angles, and explain whether the molecule is polar or nonpolar.',
            solution: `**Solution:**

**Given:** XeF₄ (xenon tetrafluoride)
**Find:** Molecular geometry, bond angles, polarity

**Step 1: Draw Lewis structure**

**Count valence electrons:**
- Xe: 8 valence electrons (Group 18, noble gas)
- F: 7 valence electrons (×4)
- Total: 8 + 28 = **36 electrons**

**Skeletal structure:** Xe is central

$$\\ce{F - Xe - F}$$ (with 2 more F atoms)

**Connect with single bonds:**
4 Xe-F bonds = 8 electrons used
Remaining: 36 - 8 = 28 electrons

**Complete octets of F atoms:**
Each F needs 6 more electrons (3 lone pairs)
4 F × 6 = 24 electrons
Remaining: 28 - 24 = 4 electrons

**Place remaining electrons on Xe:**
4 electrons = **2 lone pairs** on Xe

**Lewis structure:**

$$\\ce{    F     }$$
$$\\ce{    |     }$$
$$\\ce{F - Xe - F}$$
$$\\ce{    |     }$$
$$\\ce{    F     }$$

Xe has 4 bonds and **2 lone pairs**

**Step 2: Count electron domains on Xe**

- 4 Xe-F single bonds = 4 domains
- 2 lone pairs = 2 domains
- **Total: 6 electron domains**

**Step 3: Determine steric number**

$$\\text{SN} = 6$$

**Step 4: Identify electron geometry**

SN = 6 → **Octahedral** electron geometry

**Step 5: Count lone pairs**

Xe has **2 lone pairs**

**Step 6: Determine molecular geometry**

SN = 6, 2 lone pairs → **Square planar**

**Why square planar?**
- In octahedral geometry, all 6 positions are equivalent
- Lone pairs occupy positions **opposite** each other (minimizes repulsion)
- Remaining 4 F atoms form a square in a plane
- Xe at center, lone pairs above and below

**Step 7: Predict bond angles**

**F-Xe-F angles:**
- **Adjacent F atoms:** 90° (corners of square)
- **Opposite F atoms:** 180° (across square)

**Ideal octahedral angles:** 90°

**With 2 lone pairs:** 
- LP-LP repulsion is strongest
- LP-BP repulsion compresses slightly
- But symmetry maintains approximately **90° and 180°**

**Step 8: Determine polarity**

**Check bond polarity:**
- Xe-F bonds are polar (ΔEN ≈ 2.0)
- Each Xe-F bond has dipole toward F (F is more electronegative)

**Check molecular symmetry:**

$$\\ce{    F     }$$
$$\\ce{    ↑     }$$
$$\\ce{F ← Xe → F}$$
$$\\ce{    ↓     }$$
$$\\ce{    F     }$$

**Dipole analysis:**
- Top F dipole ↑ cancels with bottom F dipole ↓
- Left F dipole ← cancels with right F dipole →
- Perfect symmetry in square planar arrangement
- **Net dipole = 0**

**Answer:**

**Molecular geometry:** Square planar

**Bond angles:** 
- F-Xe-F (adjacent): **90°**
- F-Xe-F (opposite): **180°**

**Polarity:** **Nonpolar**

**Explanation of polarity:**
Even though Xe-F bonds are polar, the square planar geometry is perfectly symmetrical. The four bond dipoles point toward the corners of a square and cancel out vectorially. The two lone pairs are positioned opposite each other (above and below the plane), maintaining symmetry.

**Additional notes:**

1. **Expanded octet:** Xe (Period 5) can accommodate 12 electrons (6 electron domains) using d orbitals

2. **Lone pair placement:** In octahedral geometry, lone pairs prefer to be 180° apart (trans position) to minimize LP-LP repulsion

3. **Why not other geometries?**
   - If lone pairs were adjacent (90°), LP-LP repulsion would be much stronger
   - Square planar with trans lone pairs is most stable

4. **Other examples of square planar:** ICl₄⁻, BrF₄⁻

**Summary:**

| Property | Value |
|----------|-------|
| Steric Number | 6 |
| Electron Geometry | Octahedral |
| Lone Pairs | 2 (opposite positions) |
| Molecular Geometry | Square planar |
| Bond Angles | 90°, 180° |
| Polarity | Nonpolar (symmetrical) |`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', vsepTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: vsepTopic.id,
        front: 'What is VSEPR theory and its main principle?',
        back: 'Valence Shell Electron Pair Repulsion theory. Principle: Electron pairs (bonding and lone) repel each other and arrange to be as far apart as possible, minimizing repulsion.'
      },
      {
        topicId: vsepTopic.id,
        front: 'What is steric number and how do you calculate it?',
        back: 'SN = (bonding domains) + (lone pairs on central atom). Multiple bonds count as ONE domain. SN determines electron geometry.'
      },
      {
        topicId: vsepTopic.id,
        front: 'What is the difference between electron geometry and molecular geometry?',
        back: 'Electron geometry: arrangement of ALL electron domains (bonds + lone pairs). Molecular geometry: arrangement of ATOMS only (ignores lone pairs in shape description).'
      },
      {
        topicId: vsepTopic.id,
        front: 'What are the 5 basic electron geometries and their steric numbers?',
        back: 'SN 2: Linear (180°), SN 3: Trigonal planar (120°), SN 4: Tetrahedral (109.5°), SN 5: Trigonal bipyramidal (90°,120°), SN 6: Octahedral (90°).'
      },
      {
        topicId: vsepTopic.id,
        front: 'How do lone pairs affect bond angles?',
        back: 'Lone pairs cause bond angles to be SMALLER than ideal. Repulsion order: LP-LP > LP-BP > BP-BP. Lone pairs take more space and compress bonding pairs closer together.'
      },
      {
        topicId: vsepTopic.id,
        front: 'What is the molecular geometry for SN 4 with 2 lone pairs? What about the bond angle?',
        back: 'Bent molecular geometry. Bond angle is <109.5° (typically ~104.5° like in H₂O). Electron geometry is tetrahedral, but only 2 atoms are visible.'
      },
      {
        topicId: vsepTopic.id,
        front: 'In trigonal bipyramidal geometry (SN 5), where do lone pairs prefer to go?',
        back: 'Equatorial positions (the middle three at 120°) because they have more space and experience less repulsion than axial positions (90° angles).'
      },
      {
        topicId: vsepTopic.id,
        front: 'How do you determine if a molecule is polar using VSEPR?',
        back: 'Check: 1) Are bonds polar? (ΔEN) 2) Is geometry symmetrical? Asymmetric molecules with polar bonds are polar. Symmetric molecules with identical bonds are nonpolar (dipoles cancel).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', vsepTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Molecular and Ionic Compound Structure (Part 3)!');
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
