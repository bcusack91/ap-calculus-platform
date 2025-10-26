import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Molecular and Ionic Compound Structure (Part 1)...');

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

  // Topic 1: Types of Chemical Bonds
  const bondsTopic = await prisma.topic.create({
    data: {
      title: 'Types of Chemical Bonds',
      slug: 'types-of-chemical-bonds',
      description: 'Understand ionic, covalent, and metallic bonds, including how electronegativity differences determine bond type and properties.',
      order: existingTopics + 1,
      categoryId: molecularCategory.id,
      isPremium: false,
      textContent: `
# Types of Chemical Bonds

## Why Do Atoms Bond?

Atoms form chemical bonds to achieve **lower potential energy** and greater **stability**.

**Key principle:** Atoms bond to achieve a **stable electron configuration**, typically a filled valence shell (octet rule for most elements, duet for hydrogen).

## Three Main Types of Bonds

### 1. Ionic Bonds

**Definition:** Electrostatic attraction between oppositely charged ions

**Formation:**
- **Complete transfer** of electrons from metal to nonmetal
- Metal loses electrons → becomes cation (+)
- Nonmetal gains electrons → becomes anion (-)
- Opposite charges attract

**Characteristics:**
- Form between **metals and nonmetals**
- Large difference in electronegativity (ΔEN > 1.7)
- Form **crystalline lattice** structures
- High melting and boiling points
- Conduct electricity when molten or dissolved (ions are mobile)
- Brittle (layers can shift and repel)

**Example:** NaCl (sodium chloride)

$$\\ce{Na -> Na+ + e-}$$ (sodium loses 1 electron)
$$\\ce{Cl + e- -> Cl-}$$ (chlorine gains 1 electron)
$$\\ce{Na+ + Cl- -> NaCl}$$ (ionic bond forms)

**Electronegativity:**
- Na: 0.9
- Cl: 3.0
- ΔEN = 2.1 (large difference → ionic)

### 2. Covalent Bonds

**Definition:** Sharing of electron pairs between atoms

**Formation:**
- Electrons are **shared** between atoms (not transferred)
- Both atoms contribute to shared electron pair
- Occurs between **nonmetals**
- Can be single, double, or triple bonds

**Types of Covalent Bonds:**

**a) Nonpolar Covalent:**
- Equal sharing of electrons
- ΔEN < 0.4
- Symmetrical electron distribution
- Example: H₂, O₂, N₂, Cl₂

**b) Polar Covalent:**
- Unequal sharing of electrons
- 0.4 < ΔEN < 1.7
- More electronegative atom attracts electrons more
- Creates partial charges (δ+ and δ-)
- Example: H₂O, HCl, NH₃

**Characteristics of Covalent Compounds:**
- Lower melting/boiling points than ionic (generally)
- Do not conduct electricity (no charged particles)
- Can be gases, liquids, or solids at room temperature
- Soft and flexible (molecular compounds)

**Example:** H₂O (water)

Each H shares electrons with O:
- O has 6 valence electrons
- Each H has 1 valence electron
- 2 covalent bonds form (O-H bonds)
- O achieves octet, H achieves duet

**Electronegativity:**
- H: 2.1
- O: 3.5
- ΔEN = 1.4 (moderate difference → polar covalent)

### 3. Metallic Bonds

**Definition:** Attraction between metal cations and delocalized electrons

**Formation:**
- Metal atoms release valence electrons
- Electrons form "sea" of mobile electrons
- Metal cations are embedded in electron sea
- Electrons are **delocalized** (shared among all atoms)

**Characteristics:**
- Occur in **pure metals** and **alloys**
- Conduct electricity in solid state (mobile electrons)
- Conduct heat well
- Malleable and ductile (layers can slide)
- Lustrous (shiny)
- Variable melting points (depends on metal)

**Example:** Sodium metal (Na)

- Each Na atom contributes 1 valence electron to "sea"
- Na⁺ ions arrange in crystal lattice
- Electrons move freely throughout structure

**Visualization:**

$$\\ce{[Na+][Na+][Na+]}$$
$$\\text{Electron sea: } e^- e^- e^- e^- e^-$$

## Electronegativity and Bond Type

**Electronegativity (EN):** Ability to attract bonding electrons

**Pauling Scale:** 0.7 (Cs) to 4.0 (F)

### Predicting Bond Type

Use **difference in electronegativity (ΔEN)**:

| ΔEN Range | Bond Type | Example |
|-----------|-----------|---------|
| 0 - 0.4 | Nonpolar covalent | H₂, Cl₂ |
| 0.4 - 1.7 | Polar covalent | H₂O, NH₃ |
| > 1.7 | Ionic | NaCl, MgO |

**Note:** These are guidelines; bonding is a spectrum, not discrete categories.

**Example Calculations:**

**1. H-Cl bond:**
- H: 2.1, Cl: 3.0
- ΔEN = |3.0 - 2.1| = 0.9
- **Polar covalent**

**2. Na-Cl bond:**
- Na: 0.9, Cl: 3.0
- ΔEN = |3.0 - 0.9| = 2.1
- **Ionic**

**3. C-H bond:**
- C: 2.5, H: 2.1
- ΔEN = |2.5 - 2.1| = 0.4
- **Nonpolar covalent** (borderline)

## Bond Polarity

**Polar bonds** have unequal electron distribution:

- More electronegative atom has partial negative charge (δ-)
- Less electronegative atom has partial positive charge (δ+)
- Creates **dipole moment**

**Representation:**

$$\\ce{H-Cl}$$

With electronegativity values:
- H (2.1) → δ+
- Cl (3.0) → δ-

**Dipole arrow:** Points from δ+ to δ-

$$\\ce{H ->[ \\delta^+][\\delta^-] Cl}$$

or

$$\\ce{H ->[+][-] Cl}$$

## Bond Strength

### Factors Affecting Bond Strength

1. **Bond order:** Triple > Double > Single
2. **Atomic size:** Smaller atoms form stronger bonds
3. **Electronegativity difference:** Greater difference can mean stronger bonds (to a point)

### Bond Length vs. Bond Energy

**Inverse relationship:**
- Shorter bond → Stronger bond → Higher bond energy
- Longer bond → Weaker bond → Lower bond energy

**Example: Carbon bonds**

| Bond | Length (pm) | Energy (kJ/mol) |
|------|-------------|-----------------|
| C-C | 154 | 348 |
| C=C | 134 | 614 |
| C≡C | 120 | 839 |

As bond order increases: length decreases, energy increases

## Lewis Structures and Bonding

**Lewis structures** show:
- Valence electrons as dots
- Bonds as lines (2 electrons per line)
- Lone pairs as pairs of dots

**Steps to draw:**
1. Count total valence electrons
2. Connect atoms with single bonds
3. Complete octets (start with outer atoms)
4. Place remaining electrons on central atom
5. Form multiple bonds if needed

**Example: CO₂**

Total valence electrons: 4 (C) + 6×2 (O) = 16

$$\\ce{O=C=O}$$

- C has 4 bonds (8 electrons) ✓
- Each O has 2 bonds + 2 lone pairs (8 electrons) ✓
- Total: 16 electrons ✓

## Comparing Properties

| Property | Ionic | Covalent | Metallic |
|----------|-------|----------|----------|
| Elements | Metal + Nonmetal | Nonmetal + Nonmetal | Metal + Metal |
| Electron transfer/sharing | Transfer | Sharing | Delocalized |
| Melting point | High | Low to moderate | Variable |
| Electrical conductivity (solid) | No | No | Yes |
| Electrical conductivity (liquid) | Yes | No | Yes |
| Solubility in water | Often soluble | Varies | Insoluble |
| Hardness | Hard but brittle | Soft | Malleable |

## Exceptions and Special Cases

### 1. Network Covalent Solids

- Giant covalent structures (diamond, SiO₂)
- Very high melting points
- Very hard
- Do not conduct electricity

### 2. Polar vs. Nonpolar Molecules

**Bond polarity ≠ Molecular polarity**

- Molecule can have polar bonds but be nonpolar overall (CO₂, CCl₄)
- Symmetry cancels out individual bond dipoles
- Will discuss more in VSEPR theory

### 3. Transition Between Bond Types

Bonding is a **continuum**, not discrete:
- No bond is 100% ionic (even NaCl has some covalent character)
- No bond is 100% covalent (even H₂ has tiny dipole from quantum effects)

## Summary

1. **Ionic bonds:** Transfer of electrons, metal + nonmetal, ΔEN > 1.7
2. **Covalent bonds:** Sharing of electrons, nonmetal + nonmetal, ΔEN < 1.7
   - Nonpolar: ΔEN < 0.4
   - Polar: 0.4 < ΔEN < 1.7
3. **Metallic bonds:** Delocalized electrons, metal + metal
4. **Electronegativity difference** predicts bond type
5. **Bond strength:** Depends on bond order, atomic size, and electronegativity
`,
      exampleProblems: {
        create: [
          {
            question: 'Classify the following bonds as ionic, polar covalent, or nonpolar covalent: (a) K-Cl, (b) C-O, (c) Cl-Cl. Use electronegativity values: K = 0.8, Cl = 3.0, C = 2.5, O = 3.5',
            solution: `**Solution:**

**Given:** Electronegativity values and three bonds to classify
**Find:** Bond type for each

**Step 1: Calculate ΔEN for each bond**

**(a) K-Cl:**
$$\\Delta EN = |3.0 - 0.8| = 2.2$$

**(b) C-O:**
$$\\Delta EN = |3.5 - 2.5| = 1.0$$

**(c) Cl-Cl:**
$$\\Delta EN = |3.0 - 3.0| = 0.0$$

**Step 2: Apply classification rules**

| ΔEN Range | Bond Type |
|-----------|-----------|
| 0 - 0.4 | Nonpolar covalent |
| 0.4 - 1.7 | Polar covalent |
| > 1.7 | Ionic |

**Step 3: Classify each bond**

**(a) K-Cl: ΔEN = 2.2**
- ΔEN > 1.7 → **Ionic bond**
- K is metal, Cl is nonmetal ✓
- K loses electron → K⁺
- Cl gains electron → Cl⁻

**(b) C-O: ΔEN = 1.0**
- 0.4 < ΔEN < 1.7 → **Polar covalent bond**
- Both C and O are nonmetals ✓
- O is more electronegative → partial negative charge (δ-)
- C has partial positive charge (δ+)

**(c) Cl-Cl: ΔEN = 0.0**
- ΔEN = 0 → **Nonpolar covalent bond**
- Identical atoms share electrons equally
- No charge separation
- Example: Cl₂ molecule

**Answer:**
- (a) K-Cl: **Ionic**
- (b) C-O: **Polar covalent**
- (c) Cl-Cl: **Nonpolar covalent**

**Summary:**
Large ΔEN (>1.7) indicates electron transfer (ionic), moderate ΔEN (0.4-1.7) indicates unequal sharing (polar covalent), and small ΔEN (<0.4) indicates equal sharing (nonpolar covalent).`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Explain why sodium chloride (NaCl) has a much higher melting point (801°C) than water (H₂O, melting point 0°C), even though both compounds involve bonding between atoms.',
            solution: `**Solution:**

**Given:** NaCl melting point = 801°C, H₂O melting point = 0°C
**Find:** Explain the large difference

**Step 1: Identify bond types**

**NaCl:**
- Na: metal (electronegativity = 0.9)
- Cl: nonmetal (electronegativity = 3.0)
- ΔEN = 2.1 → **Ionic bond**

**H₂O:**
- H: nonmetal (electronegativity = 2.1)
- O: nonmetal (electronegativity = 3.5)
- ΔEN = 1.4 → **Polar covalent bond**

**Step 2: Describe structure differences**

**NaCl:**
- Forms **ionic crystal lattice**
- Each Na⁺ surrounded by 6 Cl⁻ ions
- Each Cl⁻ surrounded by 6 Na⁺ ions
- **3D network** of strong electrostatic attractions
- Must break many strong ionic bonds to melt

**H₂O:**
- Forms **discrete molecules** (H-O-H)
- Covalent bonds **within** molecules (strong)
- Hydrogen bonds **between** molecules (weaker)
- Must break intermolecular forces to melt, NOT covalent bonds

**Step 3: Compare forces that must be overcome**

**To melt NaCl:**
- Must overcome **ionic bonds** between Na⁺ and Cl⁻
- Very strong electrostatic attractions (∝ 1/r²)
- Lattice energy is very high (~787 kJ/mol)

**To melt H₂O:**
- Must overcome **hydrogen bonds** between molecules
- Much weaker than ionic or covalent bonds (~20 kJ/mol per H-bond)
- Covalent O-H bonds remain intact when ice melts

**Step 4: Energy comparison**

**Breaking ionic bonds in NaCl:**
- Requires ~787 kJ/mol (lattice energy)
- Very high temperature needed (801°C)

**Breaking H-bonds in ice:**
- Requires ~6 kJ/mol (enthalpy of fusion)
- Low temperature needed (0°C)

**Answer:**

NaCl has a much higher melting point because melting requires breaking **strong ionic bonds** in the crystal lattice, while melting ice only requires breaking **weak hydrogen bonds** between water molecules. The covalent bonds within water molecules remain intact during melting.

**Key distinction:**
- **Intramolecular forces** (ionic/covalent bonds): very strong
- **Intermolecular forces** (H-bonds, dipole-dipole, London): weaker

Melting ionic compounds requires breaking intramolecular forces, while melting molecular compounds typically only requires breaking intermolecular forces.

**Additional note:** If you had to break the O-H covalent bonds in water (like in decomposition), that would require much more energy (~460 kJ/mol per bond), comparable to ionic bonds.`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Diamond (C) and graphite (C) are both composed entirely of carbon atoms but have very different properties. Diamond is extremely hard with a very high melting point (~3550°C), while graphite is soft and has a lower melting point (~3600°C but sublimes). Both conduct heat well, but only graphite conducts electricity. Explain these differences in terms of bonding and structure.',
            solution: `**Solution:**

**Given:** Two allotropes of carbon with different properties
**Find:** Explain differences using bonding and structure

**Step 1: Describe diamond structure**

**Diamond:**
- **3D network covalent structure**
- Each C atom bonded to **4 other C atoms**
- Tetrahedral geometry (sp³ hybridization)
- All electrons in **localized C-C single bonds**
- No free electrons

**Bonding diagram:**
$$\\ce{C - C - C - C}$$ (in 3D tetrahedral network)

Each C: 4 covalent bonds, no lone pairs

**Step 2: Describe graphite structure**

**Graphite:**
- **Layered structure**
- Each C atom bonded to **3 other C atoms** (in plane)
- Trigonal planar geometry (sp² hybridization)
- **Delocalized π electrons** above and below planes
- Fourth electron per C is delocalized
- Layers held by **weak London dispersion forces**

**Bonding diagram:**
$$\\ce{C=C-C=C}$$ (resonance, delocalized π system)

Each C: 3 σ bonds, 1 delocalized π electron

**Step 3: Explain hardness**

**Diamond - extremely hard:**
- Must break **strong C-C covalent bonds** (348 kJ/mol)
- 3D network means cutting requires breaking many bonds
- All atoms rigidly locked in position
- No planes of weakness

**Graphite - soft:**
- **Layers can slide** past each other
- Only weak London forces between layers (~10 kJ/mol)
- C-C bonds within layers are strong
- But layers separate easily (like a deck of cards)
- This is why graphite is used as lubricant

**Step 4: Explain electrical conductivity**

**Diamond - does NOT conduct:**
- All 4 valence electrons per C in **localized bonds**
- No free electrons to carry charge
- All electrons held tightly in σ bonds
- Insulator

**Graphite - conducts electricity:**
- **Delocalized π electrons** above/below planes
- One electron per C is mobile within layers
- Electrons can move parallel to layers
- Similar to metallic bonding (electron sea within layers)
- Conductor

**Step 5: Explain melting point**

**Both have very high melting points:**
- Diamond: ~3550°C (actually sublimes at very high T)
- Graphite: ~3600°C (sublimes above ~3700°C at low pressure)

**Why both are high:**
- Both must break **strong C-C covalent bonds**
- Network covalent structures throughout
- Diamond: 3D network
- Graphite: 2D networks in each layer

**Why similar values:**
- Both involve breaking C-C bonds (~348 kJ/mol)
- Graphite layers are strongly bonded internally
- Weak interlayer forces don't affect melting (that's not what melts)

**Step 6: Explain thermal conductivity**

**Both conduct heat well:**
- **Diamond:** Atoms in rigid 3D network vibrate and transfer energy
- **Graphite:** Delocalized electrons + rigid layers transfer energy

**Answer Summary:**

| Property | Diamond | Graphite | Explanation |
|----------|---------|----------|-------------|
| **Structure** | 3D network, sp³ | Layers, sp² | Hybridization difference |
| **Hardness** | Extremely hard | Soft | 3D network vs. sliding layers |
| **Electrical conductivity** | No | Yes (in plane) | No free e⁻ vs. delocalized π electrons |
| **Melting point** | Very high (~3550°C) | Very high (~3600°C) | Both require breaking C-C bonds |
| **Thermal conductivity** | High | High | Rigid structure + (for graphite) mobile electrons |

**Key insight:**
Same element (carbon), but different **bonding arrangements** (sp³ vs. sp²) and **structures** (3D network vs. layered) lead to dramatically different macroscopic properties. This demonstrates that properties depend not just on atomic composition, but on how atoms are connected.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', bondsTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: bondsTopic.id,
        front: 'What are the three main types of chemical bonds?',
        back: 'Ionic (electron transfer, metal+nonmetal), Covalent (electron sharing, nonmetal+nonmetal), and Metallic (delocalized electrons, metal+metal).'
      },
      {
        topicId: bondsTopic.id,
        front: 'How do you predict bond type using electronegativity difference (ΔEN)?',
        back: 'ΔEN < 0.4: Nonpolar covalent; 0.4 < ΔEN < 1.7: Polar covalent; ΔEN > 1.7: Ionic. These are guidelines on a bonding continuum.'
      },
      {
        topicId: bondsTopic.id,
        front: 'What are the key characteristics of ionic bonds?',
        back: 'Form between metal and nonmetal, complete electron transfer, form crystalline lattice, high melting points, conduct electricity when molten/dissolved, brittle.'
      },
      {
        topicId: bondsTopic.id,
        front: 'What is the difference between polar and nonpolar covalent bonds?',
        back: 'Nonpolar: equal sharing (ΔEN < 0.4), no charge separation. Polar: unequal sharing (0.4 < ΔEN < 1.7), partial charges (δ+ and δ-) create dipole.'
      },
      {
        topicId: bondsTopic.id,
        front: 'What are metallic bonds and their properties?',
        back: 'Metal cations in sea of delocalized electrons. Conduct electricity/heat in solid state, malleable, ductile, lustrous. Electrons move freely throughout structure.'
      },
      {
        topicId: bondsTopic.id,
        front: 'What is the relationship between bond length and bond energy?',
        back: 'Inverse relationship: Shorter bonds are stronger (higher energy). Bond order increases: triple > double > single (shorter and stronger).'
      },
      {
        topicId: bondsTopic.id,
        front: 'Why do ionic compounds have high melting points?',
        back: 'Must break strong electrostatic attractions in 3D crystal lattice. Requires significant energy to overcome many ionic bonds throughout the structure.'
      },
      {
        topicId: bondsTopic.id,
        front: 'What is a network covalent solid?',
        back: 'Giant covalent structure (diamond, SiO₂) where atoms are covalently bonded throughout. Very high melting points, very hard, do not conduct electricity (exception: graphite).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', bondsTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Molecular and Ionic Compound Structure (Part 1)!');
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
