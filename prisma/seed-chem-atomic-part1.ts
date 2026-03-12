import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Atomic Structure and Properties (Part 1)...');

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

  // Topic 1: Moles and Molar Mass
  const molesTopic = await prisma.topic.create({
    data: {
      title: 'Moles and Molar Mass',
      slug: 'moles-molar-mass',
      description: 'Understand the mole concept, Avogadro\'s number, and how to calculate molar mass and convert between mass, moles, and particles.',
      order: 1,
      categoryId: atomicCategory.id,
      isPremium: false,
      textContent: `
# Moles and Molar Mass

## The Mole Concept

The **mole** (mol) is the SI unit for amount of substance. It's one of the seven fundamental SI units.

**Definition:** One mole contains exactly $6.022 \\times 10^{23}$ particles.

This number is called **Avogadro's number** ($N_A$).

$$N_A = 6.022 \\times 10^{23} \\text{ mol}^{-1}$$

### Why We Need Moles

Atoms and molecules are incredibly small. A mole provides a convenient way to:
- Count particles (atoms, molecules, ions, etc.)
- Relate macroscopic measurements to atomic-scale quantities
- Perform stoichiometric calculations

**Analogy:** Just like "dozen" means 12, "mole" means $6.022 \\times 10^{23}$.

## Converting Between Particles and Moles

$$\\text{Number of particles} = \\text{moles} \\times N_A$$

$$\\text{moles} = \\frac{\\text{Number of particles}}{N_A}$$

**Example:** How many atoms are in 2.5 moles of carbon?

$$\\text{atoms} = 2.5 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ atoms/mol} = 1.51 \\times 10^{24} \\text{ atoms}$$

## Molar Mass

**Molar mass** ($M$) is the mass of one mole of a substance, expressed in grams per mole (g/mol).

### For Elements

The molar mass of an element equals its **atomic mass** from the periodic table.

**Examples:**
- Carbon (C): 12.01 g/mol
- Oxygen (O): 16.00 g/mol
- Hydrogen (H): 1.008 g/mol

### For Compounds

Add up the molar masses of all atoms in the molecular formula.

**Example:** Water (H₂O)

$$M_{H_2O} = 2(1.008) + 1(16.00) = 2.016 + 16.00 = 18.02 \\text{ g/mol}$$

**Example:** Glucose (C₆H₁₂O₆)

$$M_{C_6H_{12}O_6} = 6(12.01) + 12(1.008) + 6(16.00) = 72.06 + 12.10 + 96.00 = 180.16 \\text{ g/mol}$$

## Converting Between Mass and Moles

$$\\text{moles} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$$

$$\\text{mass (g)} = \\text{moles} \\times \\text{molar mass (g/mol)}$$

**Example:** How many moles are in 25.0 g of NaCl?

First find molar mass: $M_{NaCl} = 22.99 + 35.45 = 58.44$ g/mol

$$\\text{moles} = \\frac{25.0 \\text{ g}}{58.44 \\text{ g/mol}} = 0.428 \\text{ mol}$$

## The Mole Road Map

To convert between different quantities, use this road map:

$$\\text{Mass (g)} \\xleftrightarrow[\\text{divide by } M]{\\text{multiply by } M} \\text{Moles} \\xleftrightarrow[\\text{divide by } N_A]{\\text{multiply by } N_A} \\text{Particles}$$

## Percent Composition

**Percent composition** is the percent by mass of each element in a compound.

$$\\text{Percent of element} = \\frac{\\text{mass of element in 1 mol}}{\\text{molar mass of compound}} \\times 100\\%$$

**Example:** Find the percent composition of H₂O

$$\\%H = \\frac{2(1.008)}{18.02} \\times 100\\% = \\frac{2.016}{18.02} \\times 100\\% = 11.19\\%$$

$$\\%O = \\frac{16.00}{18.02} \\times 100\\% = 88.81\\%$$

Check: $11.19\\% + 88.81\\% = 100\\%$ ✓

## Empirical vs. Molecular Formulas

**Empirical formula:** Simplest whole-number ratio of atoms
**Molecular formula:** Actual number of atoms in one molecule

**Example:** 
- Empirical formula: CH₂O
- Molecular formula: C₆H₁₂O₆ (glucose)

The molecular formula is always a whole-number multiple of the empirical formula.

## Common Calculations

### 1. Mass to Moles
Given mass, find moles: $n = \\frac{m}{M}$

### 2. Moles to Particles
Given moles, find particles: $N = n \\times N_A$

### 3. Mass to Particles
Combine: $N = \\frac{m}{M} \\times N_A$

### 4. Molar Mass from Formula
Add atomic masses from periodic table
`,
      exampleProblems: {
        create: [
          {
            question: 'How many molecules are in 8.50 g of CO₂?',
            solution: `**Solution:**

**Given:** 8.50 g of CO₂
**Find:** Number of molecules

**Step 1: Find molar mass of CO₂**

$$M_{CO_2} = 12.01 + 2(16.00) = 12.01 + 32.00 = 44.01 \\text{ g/mol}$$

**Step 2: Convert mass to moles**

$$n = \\frac{m}{M} = \\frac{8.50 \\text{ g}}{44.01 \\text{ g/mol}} = 0.193 \\text{ mol}$$

**Step 3: Convert moles to molecules**

$$N = n \\times N_A = 0.193 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol}$$

$$N = 1.16 \\times 10^{23} \\text{ molecules}$$

**Answer:** $1.16 \\times 10^{23}$ molecules of CO₂

**Verification:**
- Used correct molar mass for CO₂ ✓
- Converted g → mol → molecules ✓
- Answer has correct units ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate the molar mass and percent composition of calcium nitrate, Ca(NO₃)₂.',
            solution: `**Solution:**

**Given:** Ca(NO₃)₂
**Find:** Molar mass and percent composition

**Step 1: Identify atoms in the formula**

Ca(NO₃)₂ contains:
- 1 Ca atom
- 2 N atoms (from 2 × NO₃)
- 6 O atoms (from 2 × 3O)

**Step 2: Calculate molar mass**

From periodic table:
- Ca: 40.08 g/mol
- N: 14.01 g/mol
- O: 16.00 g/mol

$$M = 1(40.08) + 2(14.01) + 6(16.00)$$
$$M = 40.08 + 28.02 + 96.00 = 164.10 \\text{ g/mol}$$

**Step 3: Calculate percent composition**

$$\\%Ca = \\frac{40.08}{164.10} \\times 100\\% = 24.42\\%$$

$$\\%N = \\frac{28.02}{164.10} \\times 100\\% = 17.07\\%$$

$$\\%O = \\frac{96.00}{164.10} \\times 100\\% = 58.50\\%$$

**Answer:** 
- Molar mass: 164.10 g/mol
- Percent composition: 24.42% Ca, 17.07% N, 58.50% O

**Verification:**
- $24.42 + 17.07 + 58.50 = 99.99 \\approx 100\\%$ ✓ (rounding)`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. If its molar mass is 180 g/mol, what is its molecular formula?',
            solution: `**Solution:**

**Given:** 
- 40.0% C, 6.7% H, 53.3% O
- Molar mass = 180 g/mol
**Find:** Molecular formula

**Step 1: Assume 100 g sample (percents become grams)**

- 40.0 g C
- 6.7 g H
- 53.3 g O

**Step 2: Convert to moles**

$$\\text{mol C} = \\frac{40.0 \\text{ g}}{12.01 \\text{ g/mol}} = 3.33 \\text{ mol}$$

$$\\text{mol H} = \\frac{6.7 \\text{ g}}{1.008 \\text{ g/mol}} = 6.65 \\text{ mol}$$

$$\\text{mol O} = \\frac{53.3 \\text{ g}}{16.00 \\text{ g/mol}} = 3.33 \\text{ mol}$$

**Step 3: Find simplest ratio (divide by smallest)**

Smallest = 3.33

$$C: \\frac{3.33}{3.33} = 1$$
$$H: \\frac{6.65}{3.33} = 2$$
$$O: \\frac{3.33}{3.33} = 1$$

**Empirical formula:** CH₂O

**Step 4: Find empirical formula mass**

$$M_{CH_2O} = 12.01 + 2(1.008) + 16.00 = 30.03 \\text{ g/mol}$$

**Step 5: Find multiplier**

$$n = \\frac{\\text{Molecular mass}}{\\text{Empirical mass}} = \\frac{180}{30.03} = 6$$

**Step 6: Multiply empirical formula by n**

$$\\text{Molecular formula} = (CH_2O) \\times 6 = C_6H_{12}O_6$$

**Answer:** C₆H₁₂O₆ (glucose)

**Verification:**
- Molar mass of C₆H₁₂O₆ = 6(12.01) + 12(1.008) + 6(16.00) = 180.16 g/mol ✓
- Matches given molar mass ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', molesTopic.title);

  // Create flashcards for moles topic
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: molesTopic.id,
        front: 'What is Avogadro\'s number and what does it represent?',
        back: '$N_A = 6.022 \\times 10^{23}$ mol⁻¹. It represents the number of particles (atoms, molecules, ions, etc.) in one mole.'
      },
      {
        topicId: molesTopic.id,
        front: 'How do you calculate molar mass of a compound?',
        back: 'Add up the atomic masses of all atoms in the molecular formula. For example, H₂O = 2(1.008) + 16.00 = 18.02 g/mol.'
      },
      {
        topicId: molesTopic.id,
        front: 'What is the formula to convert mass to moles?',
        back: '$n = \\frac{m}{M}$ where $n$ = moles, $m$ = mass in grams, $M$ = molar mass in g/mol'
      },
      {
        topicId: molesTopic.id,
        front: 'What is the formula to convert moles to number of particles?',
        back: '$N = n \\times N_A$ where $N$ = number of particles, $n$ = moles, $N_A$ = Avogadro\'s number'
      },
      {
        topicId: molesTopic.id,
        front: 'What is the difference between empirical and molecular formulas?',
        back: 'Empirical formula shows the simplest whole-number ratio of atoms. Molecular formula shows the actual number of atoms in one molecule. Molecular formula is always a whole-number multiple of empirical formula.'
      },
      {
        topicId: molesTopic.id,
        front: 'How do you calculate percent composition?',
        back: '$\\% \\text{ element} = \\frac{\\text{mass of element in 1 mol}}{\\text{molar mass of compound}} \\times 100\\%$'
      },
      {
        topicId: molesTopic.id,
        front: 'What is the mole road map for conversions?',
        back: 'Mass (g) ↔ Moles ↔ Particles. Use molar mass $M$ to convert mass ↔ moles. Use Avogadro\'s number $N_A$ to convert moles ↔ particles.'
      }
    ]
  });

  console.log('✓ Created 7 flashcards for', molesTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Atomic Structure and Properties (Part 1)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 7');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
