import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Atomic Structure and Properties (Part 2)...');

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

  // Topic 2: Atomic Structure and Electron Configuration
  const electronConfigTopic = await prisma.topic.create({
    data: {
      title: 'Atomic Structure and Electron Configuration',
      slug: 'electron-configuration',
      description: 'Learn about subatomic particles, energy levels, orbitals, and how to write electron configurations for atoms and ions.',
      order: existingTopics + 1,
      categoryId: atomicCategory.id,
      isPremium: false,
      textContent: `
# Atomic Structure and Electron Configuration

## Structure of the Atom

The atom consists of three fundamental particles:

| Particle | Symbol | Charge | Mass (amu) | Location |
|----------|--------|--------|------------|----------|
| **Proton** | p⁺ | +1 | 1.007 | Nucleus |
| **Neutron** | n⁰ | 0 | 1.009 | Nucleus |
| **Electron** | e⁻ | -1 | 0.00055 | Electron cloud |

### Key Definitions

- **Atomic number** ($Z$): Number of protons (defines the element)
- **Mass number** ($A$): Total protons + neutrons
- **Isotopes**: Atoms of same element with different numbers of neutrons

**Notation:** $^A_ZX$ where $X$ is element symbol

Example: $^{12}_6C$ (Carbon-12) has 6 protons, 6 neutrons, 6 electrons

## Quantum Numbers

Four quantum numbers describe each electron in an atom:

### 1. Principal Quantum Number ($n$)

- **Values:** $n = 1, 2, 3, 4, ...$
- **Meaning:** Energy level (shell)
- **Capacity:** Maximum $2n^2$ electrons per level

### 2. Angular Momentum Quantum Number ($\\ell$)

- **Values:** $\\ell = 0$ to $n-1$
- **Meaning:** Sublevel (subshell) shape
  - $\\ell = 0$: s orbital (spherical)
  - $\\ell = 1$: p orbital (dumbbell)
  - $\\ell = 2$: d orbital (cloverleaf)
  - $\\ell = 3$: f orbital (complex)

### 3. Magnetic Quantum Number ($m_\\ell$)

- **Values:** $-\\ell$ to $+\\ell$ (including 0)
- **Meaning:** Orbital orientation in space
- **Number of orbitals:** $2\\ell + 1$

### 4. Spin Quantum Number ($m_s$)

- **Values:** $+\\frac{1}{2}$ or $-\\frac{1}{2}$
- **Meaning:** Electron spin direction
- **Pauli Exclusion Principle:** No two electrons can have the same four quantum numbers

## Orbital Capacity

| Sublevel | Number of Orbitals | Max Electrons |
|----------|-------------------|---------------|
| s ($\\ell=0$) | 1 | 2 |
| p ($\\ell=1$) | 3 | 6 |
| d ($\\ell=2$) | 5 | 10 |
| f ($\\ell=3$) | 7 | 14 |

## Electron Configuration

**Electron configuration** shows how electrons are distributed among orbitals.

### Order of Filling (Aufbau Principle)

Electrons fill orbitals in order of increasing energy:

$$1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p$$

**Memory aid:** Use the diagonal rule or periodic table

### Notation

**Full configuration:** List all sublevels with number of electrons

Example: Oxygen (8 electrons)
$$1s^2 2s^2 2p^4$$

**Noble gas configuration:** Use previous noble gas in brackets

Example: Calcium (20 electrons)
$$[Ar] 4s^2$$

**Orbital diagram:** Show each orbital as a box with electron spins

## Three Key Rules

### 1. Aufbau Principle
Electrons fill lowest energy orbitals first.

### 2. Pauli Exclusion Principle
Maximum 2 electrons per orbital, with opposite spins.

### 3. Hund's Rule
When filling orbitals of equal energy (like three p orbitals), place one electron in each orbital before pairing.

**Example:** Nitrogen (7 electrons)

2p orbitals: ↑ ↑ ↑ (one electron in each)

NOT: ↑↓ ↑ (incorrect - violates Hund's rule)

## Electron Configurations of Ions

### Cations (positive ions)
Remove electrons from **highest** $n$ value first (usually outermost s)

**Example:** Fe → Fe²⁺
- Fe: $[Ar] 4s^2 3d^6$
- Fe²⁺: $[Ar] 3d^6$ (remove 4s² electrons)

### Anions (negative ions)
Add electrons following normal filling order

**Example:** O → O²⁻
- O: $1s^2 2s^2 2p^4$
- O²⁻: $1s^2 2s^2 2p^6$ (add 2 electrons to 2p)

## Exceptions to Filling Order

Some elements have anomalous electron configurations for extra stability:

**Chromium (Cr):**
- Expected: $[Ar] 4s^2 3d^4$
- Actual: $[Ar] 4s^1 3d^5$ (half-filled d sublevel is more stable)

**Copper (Cu):**
- Expected: $[Ar] 4s^2 3d^9$
- Actual: $[Ar] 4s^1 3d^{10}$ (filled d sublevel is more stable)

**Why:** Half-filled and fully-filled sublevels have extra stability.

## Valence Electrons

**Valence electrons** are electrons in the outermost shell (highest $n$).

They determine:
- Chemical properties
- Bonding behavior
- Reactivity

**Example:** Nitrogen $[He] 2s^2 2p^3$
- Valence electrons: 5 (in $n=2$ shell)

## Core vs. Valence Notation

**Core electrons:** Inner electrons (represented by noble gas)
**Valence electrons:** Outer electrons (written out)

**Example:** Phosphorus (P)
- Full: $1s^2 2s^2 2p^6 3s^2 3p^3$
- Noble gas: $[Ne] 3s^2 3p^3$
- Core: [Ne] (10 electrons)
- Valence: $3s^2 3p^3$ (5 electrons)
`,
      exampleProblems: {
        create: [
          {
            question: 'Write the full electron configuration for sulfur (S, atomic number 16).',
            solution: `**Solution:**

**Given:** Sulfur (S), $Z = 16$
**Find:** Full electron configuration

**Step 1: Determine number of electrons**

Neutral sulfur has 16 electrons (same as protons).

**Step 2: Fill orbitals in order**

Order: 1s, 2s, 2p, 3s, 3p

- 1s: 2 electrons → $1s^2$ (total: 2)
- 2s: 2 electrons → $2s^2$ (total: 4)
- 2p: 6 electrons → $2p^6$ (total: 10)
- 3s: 2 electrons → $3s^2$ (total: 12)
- 3p: 4 electrons → $3p^4$ (total: 16) ✓

**Answer:** $1s^2 2s^2 2p^6 3s^2 3p^4$

**Noble gas notation:** $[Ne] 3s^2 3p^4$

**Verification:**
- Total electrons: $2 + 2 + 6 + 2 + 4 = 16$ ✓
- Valence electrons: 6 (matches Group 16) ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Draw the orbital diagram for carbon (C) and identify any unpaired electrons.',
            solution: `**Solution:**

**Given:** Carbon (C), $Z = 6$
**Find:** Orbital diagram and unpaired electrons

**Step 1: Write electron configuration**

Carbon: $1s^2 2s^2 2p^2$

**Step 2: Draw orbital diagram**

**1s:** ↑↓

**2s:** ↑↓

**2p:** ↑ ↑ _ (three orbitals: px, py, pz)

**Step 3: Apply Hund's Rule**

For the 2 electrons in 2p:
- Place one electron in first orbital (↑)
- Place one electron in second orbital (↑)
- Leave third orbital empty

**Complete diagram:**

\`\`\`
      ↑↓        ↑↓      ↑  ↑  _
      1s        2s      2p
\`\`\`

**Answer:** 
- Orbital diagram shown above
- **Unpaired electrons:** 2 (both in 2p sublevel)

**Explanation:**
- Hund's rule requires maximizing unpaired electrons in degenerate orbitals
- Carbon's 2 unpaired electrons make it chemically reactive
- These unpaired electrons form bonds in compounds like CO₂, CH₄

**Verification:**
- Total electrons: 2 + 2 + 2 = 6 ✓
- Hund's rule followed ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Write the electron configuration for Fe²⁺ and explain how it differs from neutral Fe.',
            solution: `**Solution:**

**Given:** Fe (iron, $Z = 26$) and Fe²⁺
**Find:** Electron configurations and explanation

**Step 1: Write configuration for neutral Fe**

Iron has 26 electrons.

Following the filling order through 4s and 3d:

$$\\text{Fe: } [Ar] 4s^2 3d^6$$

Expanded: $[Ar] = 1s^2 2s^2 2p^6 3s^2 3p^6$

**Step 2: Form Fe²⁺ (remove 2 electrons)**

**Key concept:** When forming cations, remove electrons from the **highest $n$ value first**.

For Fe: Remove from 4s before 3d

$$\\text{Fe}^{2+}: [Ar] 3d^6$$

**NOT** $[Ar] 4s^2 3d^4$ (incorrect!)

**Step 3: Explain the difference**

**Neutral Fe:** $[Ar] 4s^2 3d^6$ (26 electrons)
- 4s sublevel: 2 electrons
- 3d sublevel: 6 electrons

**Fe²⁺:** $[Ar] 3d^6$ (24 electrons)
- 4s sublevel: 0 electrons (both removed)
- 3d sublevel: 6 electrons (unchanged)

**Why remove 4s first?**

Even though 4s fills before 3d, once the 3d sublevel begins filling, it becomes lower in energy than 4s. When ionizing, electrons are removed from the highest energy orbital, which is 4s.

**Answer:**
- Fe: $[Ar] 4s^2 3d^6$
- Fe²⁺: $[Ar] 3d^6$
- Difference: Lost both 4s electrons

**Verification:**
- Fe has 26 electrons ✓
- Fe²⁺ has 24 electrons (26 - 2) ✓
- 4s electrons removed before 3d ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', electronConfigTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: electronConfigTopic.id,
        front: 'What are the three fundamental subatomic particles and their charges?',
        back: 'Proton (+1), Neutron (0), Electron (-1). Protons and neutrons are in the nucleus; electrons are in the electron cloud.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'What is the Aufbau Principle?',
        back: 'Electrons fill orbitals in order of increasing energy, starting with the lowest energy orbital (1s) first.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'What is the Pauli Exclusion Principle?',
        back: 'No two electrons in an atom can have the same four quantum numbers. This means each orbital can hold a maximum of 2 electrons with opposite spins.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'What is Hund\'s Rule?',
        back: 'When filling orbitals of equal energy, place one electron in each orbital before pairing. This maximizes unpaired electrons.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'How many electrons can each sublevel hold? (s, p, d, f)',
        back: 's: 2 electrons (1 orbital), p: 6 electrons (3 orbitals), d: 10 electrons (5 orbitals), f: 14 electrons (7 orbitals)'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'When forming cations, which electrons are removed first?',
        back: 'Electrons are removed from the highest principal energy level (highest $n$) first. For transition metals, remove $s$ electrons before $d$ electrons.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'What are valence electrons?',
        back: 'Electrons in the outermost shell (highest $n$ value). They determine chemical properties and bonding behavior.'
      },
      {
        topicId: electronConfigTopic.id,
        front: 'Why do Cr and Cu have anomalous electron configurations?',
        back: 'Cr: $[Ar] 4s^1 3d^5$ and Cu: $[Ar] 4s^1 3d^{10}$ because half-filled and fully-filled d sublevels are more stable than expected configurations.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', electronConfigTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Atomic Structure and Properties (Part 2)!');
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
