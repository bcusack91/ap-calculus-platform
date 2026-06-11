import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Molecular and Ionic Compound Structure (Part 2)...');

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

  // Topic 2: Lewis Structures
  const lewisTopic = await prisma.topic.create({
    data: {
      title: 'Lewis Structures and Formal Charge',
      slug: 'lewis-structures-formal-charge',
      description: 'Draw Lewis structures for molecules and ions, apply the octet rule, identify resonance structures, and calculate formal charges.',
      order: existingTopics + 1,
      categoryId: molecularCategory.id,
      isPremium: false,
      textContent: `
# Lewis Structures and Formal Charge

## What are Lewis Structures?

**Lewis structures** (or Lewis dot diagrams) show:
- **Valence electrons** as dots or lines
- **Bonding electrons** as lines (each line = 2 electrons)
- **Lone pairs** (nonbonding electrons) as pairs of dots
- Arrangement of atoms in a molecule

**Purpose:** Visualize electron distribution and predict molecular properties

## Drawing Lewis Structures

### Step-by-Step Method

**Step 1: Count total valence electrons**

Sum valence electrons from all atoms:
- For neutral molecules: sum valence electrons
- For cations (+): subtract electrons
- For anions (-): add electrons

**Example: CO₂**
- C: 4 valence electrons
- O: 6 valence electrons (×2)
- Total: 4 + 12 = 16 electrons

**Step 2: Determine the skeletal structure**

- **Central atom:** Usually the least electronegative (except H)
- H is always terminal (outer atom)
- C is usually central in organic molecules
- Connect atoms with single bonds

**Example: CO₂**
$$\\ce{O - C - O}$$

**Step 3: Count electrons used so far**

Each single bond = 2 electrons

**Example: CO₂**
- 2 bonds × 2 electrons = 4 electrons used
- Remaining: 16 - 4 = 12 electrons

**Step 4: Complete octets of outer atoms**

Add lone pairs to terminal atoms (except H gets 2 electrons)

**Example: CO₂**
$$\\ce{:O - C - O:}$$ (add 6 electrons to each O)

Each O now has 8 electrons (2 bonding + 6 nonbonding)
- Used: 4 (bonds) + 12 (lone pairs) = 16 electrons ✓

**Step 5: Place remaining electrons on central atom**

**Example: CO₂**
No electrons remaining (all 16 used)

**Step 6: Check central atom's octet**

If central atom has < 8 electrons, form multiple bonds

**Example: CO₂**
C currently has only 4 electrons (2 bonds) → need double bonds

$$\\ce{O=C=O}$$

Now C has 8 electrons (4 bonds) ✓

**Final structure:**

$$\\ce{:O=C=O:}$$

Each O: 4 bonding + 4 nonbonding = 8 ✓
C: 8 bonding electrons = 8 ✓

## The Octet Rule

**Statement:** Atoms tend to gain, lose, or share electrons to achieve **8 valence electrons** (like noble gases)

**Exceptions:**

### 1. Hydrogen and Helium
- Follow **duet rule** (2 electrons)
- H forms 1 bond

### 2. Incomplete Octets (Less than 8)
- **Boron (B):** Often has 6 electrons (3 bonds)
  - Example: BF₃ has 6 electrons around B
- **Beryllium (Be):** Often has 4 electrons (2 bonds)
  - Example: BeCl₂ has 4 electrons around Be

### 3. Expanded Octets (More than 8)
- Elements in **Period 3 and beyond** can have > 8 electrons
- Use d orbitals to accommodate extra electrons
- Common in P, S, Cl, Br, I, Xe

**Examples:**
- **PCl₅:** P has 10 electrons (5 bonds)
- **SF₆:** S has 12 electrons (6 bonds)
- **ClF₃:** Cl has 10 electrons (3 bonds + 2 lone pairs)

### 4. Odd-Electron Species (Radicals)
- Total number of electrons is odd
- Cannot satisfy octet for all atoms
- **Examples:** NO (11 electrons), NO₂ (17 electrons), ClO₂

## Formal Charge

**Definition:** The charge an atom would have if all bonding electrons were shared equally

**Purpose:** Determine the most stable Lewis structure

**Formula:**

$$\\text{FC} = V - (L + \\frac{B}{2})$$

Where:
- $V$ = number of valence electrons (from periodic table)
- $L$ = number of lone pair electrons
- $B$ = number of bonding electrons

**Alternative formula:**

$$\\text{FC} = V - L - \\frac{1}{2}B$$

or

$$\\text{FC} = V - (\\text{nonbonding e}^-) - \\frac{1}{2}(\\text{bonding e}^-)$$

**Simplified thinking:**
- Each lone pair electron counts fully (×1)
- Each bonding electron counts as half (×0.5)

### Calculating Formal Charge

**Example: CO₂**

$$\\ce{:O=C=O:}$$

**For left O:**
- $V = 6$ (oxygen has 6 valence electrons)
- $L = 4$ (two lone pairs)
- $B = 4$ (two double bonds)
- $\\text{FC} = 6 - 4 - \\frac{4}{2} = 6 - 4 - 2 = 0$

**For C:**
- $V = 4$ (carbon has 4 valence electrons)
- $L = 0$ (no lone pairs)
- $B = 8$ (four bonds total)
- $\\text{FC} = 4 - 0 - \\frac{8}{2} = 4 - 0 - 4 = 0$

**For right O:** Same as left O, FC = 0

**Sum of formal charges = 0** ✓ (matches molecular charge)

### Rules for Formal Charge

1. **Sum of formal charges = overall molecular charge**
   - Neutral molecule: sum = 0
   - Cation: sum = positive charge
   - Anion: sum = negative charge

2. **Best Lewis structure minimizes formal charges**
   - Structures with formal charges of 0 are preferred
   - Minimize magnitude of formal charges

3. **Negative formal charges on more electronegative atoms**
   - If formal charges exist, negative FC should be on more EN atoms
   - Positive FC should be on less EN atoms

4. **Adjacent formal charges of same sign are unfavorable**
   - Avoid structures with +1 next to +1, or -1 next to -1

## Resonance Structures

**Definition:** Multiple valid Lewis structures for the same molecule with same atom positions but different electron arrangements

**Key points:**
- **Actual structure** is a **hybrid** (average) of all resonance forms
- Electrons are **delocalized** (spread out)
- All resonance structures must have same arrangement of atoms
- Only electrons move, not atoms
- Use double-headed arrow (↔) between structures

### Drawing Resonance Structures

**Example: Ozone (O₃)**

$$\\ce{O=O-O:} \\leftrightarrow \\ce{:O-O=O}$$

**Both structures:**
- Same atom positions
- Different electron positions
- Both have same total charge (0)
- Both contribute to actual structure

**Actual structure:** Hybrid with **1.5 bonds** between each O-O pair

### Resonance and Stability

**More resonance structures = more stable molecule**

- Delocalization lowers energy
- Electrons spread over larger area
- More equivalent structures = more delocalization

**Example: Benzene (C₆H₆)**

Has two major resonance structures with alternating double/single bonds:

$$\\text{Resonance 1} \\leftrightarrow \\text{Resonance 2}$$

**Actual structure:** All C-C bonds are equivalent (1.5 bond order)

### Equivalent vs. Non-equivalent Resonance

**Equivalent resonance structures:**
- Same energy
- Contribute equally to hybrid
- Example: CO₃²⁻ has 3 equivalent structures

**Non-equivalent resonance structures:**
- Different energies
- Lower formal charges contribute more
- Example: Some structures of CO₂⁻ radical

## Common Molecular Examples

### Water (H₂O)

**Valence electrons:** 2(1) + 6 = 8

$$\\ce{H-O-H}$$

With lone pairs:

$$\\ce{H-\\overset{..}{O}-H}$$ (two lone pairs on O)

### Ammonia (NH₃)

**Valence electrons:** 3(1) + 5 = 8

$$\\ce{H-N-H}$$ with one lone pair on N
$$\\ce{| }$$
$$\\ce{H}$$

### Carbon dioxide (CO₂)

**Valence electrons:** 4 + 2(6) = 16

$$\\ce{O=C=O}$$ (two double bonds)

### Sulfate ion (SO₄²⁻)

**Valence electrons:** 6 + 4(6) + 2 = 32

Central S with 4 O atoms, multiple resonance structures

### Nitrate ion (NO₃⁻)

**Valence electrons:** 5 + 3(6) + 1 = 24

Central N with 3 O atoms, 3 equivalent resonance structures

## Expanded Octet Examples

### Sulfur hexafluoride (SF₆)

**Valence electrons:** 6 + 6(7) = 48

- S (period 3) can expand octet
- S has 12 electrons (6 bonds)
- Each F has 8 electrons (1 bond + 3 lone pairs)

### Phosphorus pentachloride (PCl₅)

**Valence electrons:** 5 + 5(7) = 40

- P (period 3) can expand octet
- P has 10 electrons (5 bonds)
- Each Cl has 8 electrons (1 bond + 3 lone pairs)

### Xenon tetrafluoride (XeF₄)

**Valence electrons:** 8 + 4(7) = 36

- Xe (period 5) can expand octet
- Xe has 12 electrons (4 bonds + 2 lone pairs)
- Each F has 8 electrons (1 bond + 3 lone pairs)

## Tips and Tricks

1. **Central atom:** Usually least electronegative (except H)
2. **Check your math:** Total electrons must match valence electron count
3. **Symmetry:** More symmetrical structures often preferred
4. **Multiple bonds:** Form when central atom needs more electrons
5. **Resonance:** Look for possibility to move lone pairs to create multiple bonds
6. **Formal charge sum:** Must equal molecular charge
7. **Period matters:** Period 3+ can expand octet; period 2 cannot

## Common Mistakes to Avoid

1. Forgetting to add/subtract electrons for ions
2. Giving H more than 2 electrons
3. Not forming multiple bonds when central atom needs them
4. Incorrect formal charge calculations
5. Placing too many electrons (exceeding valence count)
6. Not considering resonance structures
7. Moving atoms (not electrons) between resonance structures
`,
      exampleProblems: {
        create: [
          {
            question: 'Draw the Lewis structure for ammonia (NH₃) and determine the formal charge on each atom.',
            solution: `**Solution:**

**Given:** NH₃ (ammonia)
**Find:** Lewis structure and formal charges

**Step 1: Count total valence electrons**

- N: 5 valence electrons
- H: 1 valence electron (×3)
- Total: 5 + 3 = **8 electrons**

**Step 2: Determine skeletal structure**

N is central (less electronegative than H is irrelevant; H is always terminal):

$$\\ce{H - N - H}$$
$$\\ce{    |    }$$
$$\\ce{    H    }$$

**Step 3: Count electrons used in bonds**

3 single bonds × 2 electrons = 6 electrons used
Remaining: 8 - 6 = 2 electrons

**Step 4: Complete octets of outer atoms**

H atoms follow duet rule (2 electrons each) - already satisfied ✓

**Step 5: Place remaining electrons on central atom**

Place 2 remaining electrons on N as lone pair:

$$\\ce{H - N - H}$$
$$\\ce{    |    }$$  
$$\\ce{    H    }$$

(N has one lone pair on top, not shown with dots here)

**Step 6: Verify octets**

- Each H: 2 electrons (1 bond) ✓ (duet satisfied)
- N: 8 electrons (3 bonds + 1 lone pair) ✓ (octet satisfied)

**Lewis Structure:**

$$\\ce{    ..     }$$
$$\\ce{H - N - H}$$
$$\\ce{    |     }$$
$$\\ce{    H     }$$

Or more clearly:
$$\\ce{H-\\overset{..}{N}-H}$$
$$\\ce{     |       }$$
$$\\ce{     H       }$$

**Step 7: Calculate formal charges**

**Formula:** $\\text{FC} = V - L - \\frac{B}{2}$

**For nitrogen (N):**
- $V = 5$ (nitrogen has 5 valence electrons)
- $L = 2$ (one lone pair = 2 electrons)
- $B = 6$ (three single bonds = 6 bonding electrons)

$$\\text{FC}_N = 5 - 2 - \\frac{6}{2} = 5 - 2 - 3 = 0$$

**For each hydrogen (H):**
- $V = 1$ (hydrogen has 1 valence electron)
- $L = 0$ (no lone pairs)
- $B = 2$ (one single bond = 2 bonding electrons)

$$\\text{FC}_H = 1 - 0 - \\frac{2}{2} = 1 - 0 - 1 = 0$$

**Step 8: Verify sum of formal charges**

Sum = 0 (N) + 0 (H) + 0 (H) + 0 (H) = **0** ✓

Matches molecular charge (neutral) ✓

**Answer:**

Lewis structure shows N bonded to three H atoms with one lone pair on N.

**Formal charges:** All atoms have FC = 0

This structure is optimal because all formal charges are zero.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Draw the Lewis structure for the carbonate ion (CO₃²⁻). Include all resonance structures and calculate the formal charge on each atom in one resonance structure.',
            solution: `**Solution:**

**Given:** CO₃²⁻ (carbonate ion)
**Find:** Lewis structure with resonance forms and formal charges

**Step 1: Count total valence electrons**

- C: 4 valence electrons
- O: 6 valence electrons (×3)
- Charge: -2 means add 2 electrons
- Total: 4 + 18 + 2 = **24 electrons**

**Step 2: Determine skeletal structure**

C is central (less electronegative than O):

$$\\ce{O - C - O}$$
$$\\ce{    |    }$$
$$\\ce{    O    }$$

**Step 3: Count electrons in bonds**

3 single bonds × 2 = 6 electrons used
Remaining: 24 - 6 = 18 electrons

**Step 4: Complete octets of outer atoms (O)**

Each O needs 6 more electrons (3 lone pairs):

Each O: 2 (bonding) + 6 (lone pairs) = 8 ✓

Used: 6 (bonds) + 18 (lone pairs) = 24 electrons ✓

**Step 5: Check central atom**

C currently has only 6 electrons (3 bonds) → needs 2 more

**Step 6: Form double bond**

Convert one lone pair from an O to make C=O double bond:

$$\\ce{    :O:     }$$
$$\\ce{     |       }$$
$$\\ce{:O = C - O:}$$

Now C has 8 electrons (4 bonds) ✓

**Step 7: Draw resonance structures**

The double bond can be between C and any of the three O atoms:

**Resonance Structure 1:**
$$\\ce{[:O:]^- - C = O - [:O:]^-}$$

**Resonance Structure 2:**
$$\\ce{O = C - [:O:]^- - [:O:]^-}$$

**Resonance Structure 3:**
$$\\ce{[:O:]^- - [:O:]^- - C = O}$$

(Shown linearly for simplicity; actual structure is trigonal planar)

All three structures are equivalent!

**Step 8: Calculate formal charges (using Structure 1)**

**Structure 1:** Left O with single bond, C with double bond to middle O, right O with single bond

**For C (double bonded to one O, single bonded to two O):**
- $V = 4$
- $L = 0$ (no lone pairs)
- $B = 8$ (1 double bond + 2 single bonds = 8 bonding electrons)
- $\\text{FC} = 4 - 0 - \\frac{8}{2} = 4 - 0 - 4 = 0$

**For double-bonded O (middle):**
- $V = 6$
- $L = 4$ (2 lone pairs)
- $B = 4$ (1 double bond = 4 bonding electrons)
- $\\text{FC} = 6 - 4 - \\frac{4}{2} = 6 - 4 - 2 = 0$

**For each single-bonded O (left and right):**
- $V = 6$
- $L = 6$ (3 lone pairs)
- $B = 2$ (1 single bond = 2 bonding electrons)
- $\\text{FC} = 6 - 6 - \\frac{2}{2} = 6 - 6 - 1 = -1$

**Step 9: Verify sum of formal charges**

Sum = 0 (C) + 0 (double-bonded O) + (-1) (left O) + (-1) (right O) = **-2** ✓

Matches ion charge (-2) ✓

**Answer:**

**Three equivalent resonance structures** with double bond between C and each O in turn.

**Formal charges in each structure:**
- C: 0
- Double-bonded O: 0
- Single-bonded O (two of them): -1 each

**Actual structure:** Hybrid with all three C-O bonds equivalent (bond order = 1.33)

**Key insight:** The negative charges are **delocalized** over all three oxygen atoms, so each oxygen actually bears -2/3 charge in the resonance hybrid.`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Draw the Lewis structure for sulfur hexafluoride (SF₆). Calculate the formal charge on the central sulfur atom and explain how sulfur can accommodate more than 8 electrons.',
            solution: `**Solution:**

**Given:** SF₆ (sulfur hexafluoride)
**Find:** Lewis structure, formal charge on S, explanation for expanded octet

**Step 1: Count total valence electrons**

- S: 6 valence electrons
- F: 7 valence electrons (×6)
- Total: 6 + 42 = **48 electrons**

**Step 2: Determine skeletal structure**

S is central (less electronegative than F):

Six F atoms arranged around S:

$$\\ce{F - S - F}$$ (with 4 more F atoms above, below, front, back)

**Step 3: Connect atoms with single bonds**

6 single bonds (S-F) × 2 electrons = 12 electrons used
Remaining: 48 - 12 = 36 electrons

**Step 4: Complete octets of outer atoms (F)**

Each F needs 6 more electrons (3 lone pairs):
- 6 F atoms × 6 electrons = 36 electrons for lone pairs

Each F now has: 2 (bonding) + 6 (lone pairs) = 8 ✓

Total used: 12 (bonds) + 36 (lone pairs) = 48 ✓

**Step 5: Check central atom (S)**

S has 12 electrons from 6 bonds → **expanded octet**

This is acceptable because S is in **period 3**.

**Lewis Structure:**

$$\\ce{    :F:     }$$
$$\\ce{     |      }$$
$$\\ce{:F: - S - :F:}$$
$$\\ce{     |      }$$
$$\\ce{    :F:     }$$

(Plus 2 more F atoms in 3D, front and back)

Each F has 3 lone pairs (shown as :), S has 6 single bonds

**Step 6: Calculate formal charge on sulfur**

**Formula:** $\\text{FC} = V - L - \\frac{B}{2}$

**For S:**
- $V = 6$ (sulfur has 6 valence electrons)
- $L = 0$ (no lone pairs on S)
- $B = 12$ (six single bonds = 12 bonding electrons)

$$\\text{FC}_S = 6 - 0 - \\frac{12}{2} = 6 - 0 - 6 = 0$$

**For each F:**
- $V = 7$
- $L = 6$ (3 lone pairs)
- $B = 2$ (1 single bond)

$$\\text{FC}_F = 7 - 6 - \\frac{2}{2} = 7 - 6 - 1 = 0$$

**Sum of formal charges:** 0 + 6(0) = 0 ✓ (neutral molecule)

**Step 7: Explain expanded octet**

**Why can sulfur have 12 electrons?**

1. **Period 3 element:** S is in period 3, which has access to **d orbitals** (3d)

2. **Electron configuration:** S can use 3s, 3p, and 3d orbitals for bonding

3. **Hybridization:** S uses **sp³d² hybridization** to accommodate 6 bonds
   - 1 s orbital
   - 3 p orbitals  
   - 2 d orbitals
   - = 6 hybrid orbitals → 6 bonds

4. **Geometry:** Octahedral shape (90° angles)

5. **Period 2 limitation:** Elements in period 2 (C, N, O, F) **cannot** expand octets
   - No d orbitals available in valence shell
   - Maximum 8 electrons (using 2s and 2p only)
   - Example: NF₃ exists, but NF₅ does NOT

**General rule:**
- **Period 2:** Maximum 8 electrons (octet rule strictly followed)
- **Period 3+:** Can expand octet using d orbitals
  - Common in P, S, Cl, Br, I, Xe
  - Examples: PCl₅ (10 e⁻), SF₆ (12 e⁻), IF₇ (14 e⁻)

**Answer:**

Lewis structure has S bonded to 6 F atoms, each F with 3 lone pairs.

**Formal charge on S:** FC = 0

**Expanded octet explanation:** Sulfur is in period 3 and can use d orbitals (sp³d² hybridization) to accommodate 12 electrons (6 bonds). Period 2 elements cannot do this.

**Note:** Recent theoretical studies suggest the role of d orbitals may be overstated, and that ionic character and polarization also contribute, but sp³d² hybridization remains the standard AP Chemistry explanation.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', lewisTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: lewisTopic.id,
        front: 'What are the steps to draw a Lewis structure?',
        back: '1) Count valence electrons 2) Draw skeletal structure 3) Connect with single bonds 4) Complete octets of outer atoms 5) Place remaining electrons on central atom 6) Form multiple bonds if needed.'
      },
      {
        topicId: lewisTopic.id,
        front: 'What is the octet rule and what are the main exceptions?',
        back: 'Atoms tend to have 8 valence electrons. Exceptions: H (duet, 2e⁻), B (6e⁻), Be (4e⁻), Period 3+ can expand octet (>8e⁻), odd-electron radicals.'
      },
      {
        topicId: lewisTopic.id,
        front: 'What is the formula for formal charge?',
        back: 'FC = V - L - B/2, where V = valence electrons, L = lone pair electrons, B = bonding electrons. Or: FC = V - (nonbonding e⁻) - ½(bonding e⁻).'
      },
      {
        topicId: lewisTopic.id,
        front: 'What are the rules for using formal charge to determine best Lewis structure?',
        back: '1) Sum of FC = molecular charge 2) Minimize FC magnitudes 3) Negative FC on more electronegative atoms 4) Avoid adjacent same-sign charges. Structure with FC closer to zero is preferred.'
      },
      {
        topicId: lewisTopic.id,
        front: 'What are resonance structures?',
        back: 'Multiple valid Lewis structures with same atom positions but different electron arrangements. Actual structure is hybrid (average). Use ↔ between structures. Only electrons move, not atoms.'
      },
      {
        topicId: lewisTopic.id,
        front: 'Which elements can have expanded octets and why?',
        back: 'Period 3+ elements (P, S, Cl, Br, I, Xe) can have >8 electrons using d orbitals. Examples: PCl₅ (10e⁻), SF₆ (12e⁻). Period 2 elements cannot expand octets.'
      },
      {
        topicId: lewisTopic.id,
        front: 'How do you determine the central atom in a Lewis structure?',
        back: 'Usually the least electronegative atom (except H). H is always terminal. C is typically central in organic molecules. More electronegative atoms go on the outside.'
      },
      {
        topicId: lewisTopic.id,
        front: 'What does it mean when a molecule has equivalent resonance structures?',
        back: 'All resonance structures have same energy and contribute equally to the hybrid. Electrons are delocalized equally. Example: CO₃²⁻ has 3 equivalent structures with 1.33 bond order for each C-O.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', lewisTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Molecular and Ionic Compound Structure (Part 2)!');
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
