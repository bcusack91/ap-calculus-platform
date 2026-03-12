import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Atomic Structure and Properties (Part 3)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Atomic Structure category
  const atomicCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Atomic Structure and Properties'
    }
  });

  if (!atomicCategory) {
    throw new Error('Atomic Structure and Properties category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: atomicCategory.id }
  });

  // Topic 3: Periodic Trends
  const periodicTrendsTopic = await prisma.topic.create({
    data: {
      title: 'Periodic Trends',
      slug: 'periodic-trends',
      description: 'Understand and predict trends in atomic radius, ionization energy, electron affinity, and electronegativity across the periodic table.',
      order: existingTopics + 1,
      categoryId: atomicCategory.id,
      isPremium: false,
      textContent: `
# Periodic Trends

## Organization of the Periodic Table

The periodic table is organized by:
- **Periods** (rows): Horizontal rows numbered 1-7
- **Groups** (columns): Vertical columns numbered 1-18
- **Blocks**: s, p, d, f based on electron configuration

### Key Regions

- **Metals**: Left and center (conduct electricity, malleable, lustrous)
- **Nonmetals**: Right side (poor conductors, brittle as solids)
- **Metalloids**: Staircase line (properties between metals and nonmetals)

## Four Major Periodic Trends

### 1. Atomic Radius

**Definition:** Distance from nucleus to outermost electron (half the distance between nuclei of bonded atoms)

**Trends:**
- **Across a period (left → right):** Decreases
- **Down a group (top → bottom):** Increases

**Explanation:**

**Across a period:**
- Same energy level, but increasing nuclear charge
- More protons pull electrons closer
- Effective nuclear charge increases

**Down a group:**
- Each period adds a new energy level (shell)
- Electrons are farther from nucleus
- Shielding from inner electrons

**Example:** Na > Mg > Al > Si > P > S > Cl (Period 3)

### 2. Ionization Energy (IE)

**Definition:** Energy required to remove an electron from a gaseous atom

$$X(g) + \\text{energy} \\rightarrow X^+(g) + e^-$$

**Trends:**
- **Across a period (left → right):** Increases
- **Down a group (top → bottom):** Decreases

**Explanation:**

**Across a period:**
- Smaller atomic radius
- Stronger attraction between nucleus and electrons
- Harder to remove electron

**Down a group:**
- Larger atomic radius
- Electrons farther from nucleus
- Easier to remove electron

**Exceptions:**
- Slight decrease from Group 15 to 16 (half-filled stability)
- Slight decrease from Group 2 to 13 (new sublevel)

**Example:** He has highest IE; Cs has lowest IE

### 3. Electron Affinity (EA)

**Definition:** Energy change when an electron is added to a gaseous atom

$$X(g) + e^- \\rightarrow X^-(g) + \\text{energy}$$

**Convention:** Negative EA means energy is released (favorable)

**Trends:**
- **Across a period (left → right):** Generally becomes more negative (more favorable)
- **Down a group (top → bottom):** Generally becomes less negative

**Explanation:**

**Across a period:**
- Smaller atoms can accommodate extra electron more easily
- Higher effective nuclear charge attracts electron

**Down a group:**
- Larger atoms have more diffuse electron cloud
- Added electron is farther from nucleus

**Exceptions:**
- Noble gases have positive EA (stable configuration)
- Group 2 and 15 have less negative EA (filled/half-filled stability)

**Example:** Cl has most negative EA (excluding noble gases)

### 4. Electronegativity

**Definition:** Ability of an atom to attract electrons in a chemical bond

**Pauling Scale:** 0.7 (Cs) to 4.0 (F)

**Trends:**
- **Across a period (left → right):** Increases
- **Down a group (top → bottom):** Decreases

**Explanation:**

Similar to ionization energy:
- Smaller atoms attract bonding electrons more strongly
- Higher nuclear charge increases pull on electrons

**Example:** F (4.0) > O (3.5) > N (3.0) > C (2.5)

**Note:** Noble gases are not assigned electronegativity values (don't form bonds)

## Ionic Radius Trends

### Cations (Positive Ions)
- **Always smaller** than parent atom
- Lost electrons → less electron-electron repulsion
- Same nuclear charge pulls fewer electrons

**Example:** Na (186 pm) > Na⁺ (102 pm)

### Anions (Negative Ions)
- **Always larger** than parent atom
- Gained electrons → more electron-electron repulsion
- Same nuclear charge pulls more electrons

**Example:** Cl (99 pm) < Cl⁻ (181 pm)

### Isoelectronic Series

Atoms/ions with same number of electrons:

**Example:** O²⁻, F⁻, Ne, Na⁺, Mg²⁺ (all have 10 electrons)

**Trend:** As nuclear charge increases, radius decreases
$$O^{2-} > F^- > Ne > Na^+ > Mg^{2+}$$

More protons → stronger pull → smaller radius

## Successive Ionization Energies

**First ionization energy (IE₁):** Remove first electron
**Second ionization energy (IE₂):** Remove second electron
**Third ionization energy (IE₃):** Remove third electron, etc.

**Trend:** IE₁ < IE₂ < IE₃ < ...

**Why:** Each successive electron is removed from a more positive ion

**Big Jump:** Large increase when removing electron from inner shell

**Example:** Magnesium (Mg)
- IE₁ = 738 kJ/mol (remove 3s¹)
- IE₂ = 1451 kJ/mol (remove 3s¹)
- IE₃ = 7733 kJ/mol (HUGE jump - removing from filled 2p⁶)

This confirms Mg forms Mg²⁺, not Mg³⁺

## Summary of Trends

| Property | Across Period (→) | Down Group (↓) |
|----------|-------------------|----------------|
| Atomic Radius | Decreases | Increases |
| Ionization Energy | Increases | Decreases |
| Electron Affinity | More negative | Less negative |
| Electronegativity | Increases | Decreases |
| Metallic Character | Decreases | Increases |

## Applications

1. **Predicting reactivity:** Most reactive metals (lower left), most reactive nonmetals (upper right)
2. **Bond polarity:** Difference in electronegativity determines bond type
3. **Ion formation:** Elements lose/gain electrons to achieve noble gas configuration
4. **Chemical behavior:** Trends explain why elements in same group have similar properties
`,
      exampleProblems: {
        create: [
          {
            question: 'Arrange the following in order of increasing atomic radius: O, S, Se, Te',
            solution: `**Solution:**

**Given:** O, S, Se, Te (all Group 16 elements)
**Find:** Order of increasing atomic radius

**Step 1: Identify the trend**

All elements are in **Group 16** (same group, different periods).

**Trend:** Atomic radius **increases** down a group.

**Step 2: Determine period numbers**
- O (oxygen): Period 2
- S (sulfur): Period 3
- Se (selenium): Period 4
- Te (tellurium): Period 5

**Step 3: Apply the trend**

Going down the group (increasing period):
- O is smallest (Period 2)
- S is next (Period 3)
- Se is larger (Period 4)
- Te is largest (Period 5)

**Answer:** O < S < Se < Te

**Explanation:**
Each successive element has one more electron shell, placing the outermost electrons farther from the nucleus despite increasing nuclear charge. The shielding effect from inner electrons outweighs the increased nuclear charge.

**Verification:**
- All in same group ✓
- Order follows period numbers ✓
- Radius increases down group ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Which has the larger radius: Mg or Mg²⁺? Explain your reasoning.',
            solution: `**Solution:**

**Given:** Mg (neutral magnesium) and Mg²⁺ (magnesium ion)
**Find:** Which has larger radius and why

**Step 1: Write electron configurations**

**Mg:** $1s^2 2s^2 2p^6 3s^2$ (12 electrons)
- Valence electrons: 2 in 3s orbital
- 3 electron shells

**Mg²⁺:** $1s^2 2s^2 2p^6$ (10 electrons)
- Lost both 3s electrons
- 2 electron shells (same as Ne)

**Step 2: Compare structures**

**Mg:**
- 12 protons
- 12 electrons
- Outermost shell: n = 3

**Mg²⁺:**
- 12 protons (unchanged)
- 10 electrons (lost 2)
- Outermost shell: n = 2

**Step 3: Apply cation trend**

When forming a cation:
1. Entire outermost shell is lost (3s)
2. Same number of protons pulling fewer electrons
3. Less electron-electron repulsion
4. Electrons pulled closer to nucleus

**Answer:** **Mg > Mg²⁺** (neutral atom is larger)

**Explanation:**

Mg²⁺ is smaller because:
- Lost entire n=3 shell → fewer shells
- Same nuclear charge (12+) pulling only 10 electrons instead of 12
- Higher charge-to-electron ratio
- Tighter electron cloud

**Typical values:**
- Mg radius: ~160 pm
- Mg²⁺ radius: ~72 pm (less than half!)

**General rule:** Cations are always smaller than their parent atoms.`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The successive ionization energies for element X are: IE₁ = 580 kJ/mol, IE₂ = 1815 kJ/mol, IE₃ = 2740 kJ/mol, IE₄ = 11,600 kJ/mol. In which group of the periodic table is element X likely found?',
            solution: `**Solution:**

**Given:** Successive ionization energies with large jump after IE₃
**Find:** Group number of element X

**Step 1: Analyze the pattern**

$$IE_1 = 580 \\text{ kJ/mol}$$
$$IE_2 = 1815 \\text{ kJ/mol}$$ (×3.1 increase)
$$IE_3 = 2740 \\text{ kJ/mol}$$ (×1.5 increase)
$$IE_4 = 11,600 \\text{ kJ/mol}$$ (×4.2 increase - **HUGE jump!**)

**Step 2: Interpret the large jump**

The enormous increase from IE₃ to IE₄ indicates:
- First 3 electrons are relatively easy to remove (valence electrons)
- Fourth electron is much harder to remove (core electron)
- **Conclusion:** Element X has **3 valence electrons**

**Step 3: Determine group**

Elements with 3 valence electrons are in **Group 13** (IIIA).

Electron configuration pattern: $ns^2 np^1$

**Examples:** B, Al, Ga, In, Tl

**Step 4: Verify with electron configuration**

For aluminum (Al) as example:
- Configuration: $[Ne] 3s^2 3p^1$
- IE₁: Remove 3p¹ electron (easiest)
- IE₂: Remove 3s¹ electron (harder, same shell)
- IE₃: Remove 3s¹ electron (even harder, now +3 charge)
- IE₄: Remove 2p⁶ electron (HUGE jump - breaking into filled shell)

**Answer:** **Group 13** (or IIIA)

**Reasoning:**
The large jump after the third ionization indicates that the element has 3 valence electrons. Removing the fourth electron breaks into a stable, filled inner shell (noble gas configuration), requiring significantly more energy.

**General principle:** The position of the large jump in successive ionization energies reveals the number of valence electrons.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', periodicTrendsTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: periodicTrendsTopic.id,
        front: 'What is the trend for atomic radius across a period and down a group?',
        back: 'Across a period (left to right): DECREASES due to increasing nuclear charge. Down a group: INCREASES due to additional electron shells.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'What is ionization energy and what is its trend?',
        back: 'Energy required to remove an electron. Increases across a period (left to right) and decreases down a group. He has the highest IE.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'What is electronegativity and what is its trend?',
        back: 'Ability to attract electrons in a bond. Increases across a period and decreases down a group. F is most electronegative (4.0), Cs is least (0.7).'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'How does the size of a cation compare to its neutral atom?',
        back: 'Cations are ALWAYS smaller than their parent atoms. Losing electrons means same nuclear charge pulls fewer electrons, reducing electron-electron repulsion.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'How does the size of an anion compare to its neutral atom?',
        back: 'Anions are ALWAYS larger than their parent atoms. Gaining electrons increases electron-electron repulsion while nuclear charge stays the same.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'What is an isoelectronic series and how does size vary?',
        back: 'Species with same number of electrons (e.g., O²⁻, F⁻, Ne, Na⁺, Mg²⁺). As nuclear charge increases, radius decreases.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'Why is there a large jump in successive ionization energies?',
        back: 'When an electron is removed from a filled inner shell (core electrons), it requires significantly more energy. The position of the jump reveals the number of valence electrons.'
      },
      {
        topicId: periodicTrendsTopic.id,
        front: 'What is electron affinity and its general trend?',
        back: 'Energy change when adding an electron. Becomes more negative (favorable) across a period. Chlorine has the most negative EA (excluding noble gases).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', periodicTrendsTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Atomic Structure and Properties (Part 3)!');
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
