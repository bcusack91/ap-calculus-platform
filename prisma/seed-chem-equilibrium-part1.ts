import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Equilibrium (Consolidated Part 1)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Create or find Equilibrium category
  let equilibriumCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Chemical Equilibrium'
    }
  });

  if (!equilibriumCategory) {
    const maxOrder = await prisma.category.findFirst({
      where: { courseId: chemistryCourse.id },
      orderBy: { order: 'desc' }
    });

    equilibriumCategory = await prisma.category.create({
      data: {
        name: 'Chemical Equilibrium',
        slug: 'chemical-equilibrium',
        description: 'Master equilibrium constants, Le Chatelier\'s principle, and equilibrium calculations.',
        order: (maxOrder?.order ?? 0) + 1,
        courseId: chemistryCourse.id
      }
    });

    console.log('✓ Created category:', equilibriumCategory.name);
  }

  // Topic 1: Introduction to Equilibrium
  const equilibriumTopic = await prisma.topic.create({
    data: {
      title: 'Introduction to Chemical Equilibrium',
      slug: 'intro-equilibrium',
      description: 'Understand reversible reactions, dynamic equilibrium, and equilibrium constant expressions (K_c and K_p).',
      order: 1,
      categoryId: equilibriumCategory.id,
      isPremium: false,
      textContent: `
# Introduction to Chemical Equilibrium

## What is Chemical Equilibrium?

**Equilibrium:** State where forward and reverse reaction rates are equal

**Dynamic equilibrium:**
- Reactions still occurring
- No net change in concentrations
- Forward rate = Reverse rate

**Example:**

$$\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$$

At equilibrium: [N₂], [H₂], [NH₃] constant (but reactions ongoing)

## Reversible Reactions

**Notation:**
- ⇌ or <=> indicates reversible
- Single arrow → indicates irreversible

**Characteristics:**
- Can proceed in both directions
- Eventually reach equilibrium
- Position depends on conditions

## Equilibrium Constant (K_c)

**For general reaction:**

$$\\ce{aA + bB <=> cC + dD}$$

**Equilibrium expression:**

$$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

**Key points:**
- Products in numerator
- Reactants in denominator
- Coefficients become exponents
- Concentrations at equilibrium (mol/L)
- Temperature dependent

## Rules for K Expressions

### What to Include:

**Include:** Gases and aqueous solutions
- Use [ ] for molarity (mol/L)

**Exclude:**
- Pure solids
- Pure liquids
- Solvents (usually water)

**Examples:**

1. **CaCO₃(s) ⇌ CaO(s) + CO₂(g)**

$$K_c = [\\ce{CO2}]$$

(Solids omitted)

2. **CH₃COOH(aq) + H₂O(l) ⇌ CH₃COO⁻(aq) + H₃O⁺(aq)**

$$K_c = \\frac{[\\ce{CH3COO-}][\\ce{H3O+}]}{[\\ce{CH3COOH}]}$$

(Water omitted - solvent)

3. **N₂(g) + 3H₂(g) ⇌ 2NH₃(g)**

$$K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}$$

## Equilibrium Constant (K_p)

**For gas-phase reactions:**

$$K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$$

**Use partial pressures (atm) instead of concentrations**

### Relationship between K_c and K_p:

$$K_p = K_c(RT)^{\\Delta n}$$

**Where:**
- R = 0.08206 L·atm/(mol·K)
- T = temperature (K)
- Δn = moles gas products - moles gas reactants

**If Δn = 0:** K_p = K_c

## Magnitude of K

**Interpretation:**

| K value | Meaning |
|---------|---------|
| **K >> 1** (>10³) | Products favored, equilibrium far right |
| **K ≈ 1** (10⁻³ to 10³) | Significant amounts of both |
| **K << 1** (<10⁻³) | Reactants favored, equilibrium far left |

**Examples:**
- K = 1.0 × 10⁵: Products dominate
- K = 1.0 × 10⁻⁵: Reactants dominate
- K = 5.0: Comparable amounts

## Manipulating Equilibrium Expressions

### Reverse Reaction:

**If K_forward = x, then K_reverse = 1/x**

Example: If K = 100 for A ⇌ B, then K = 0.01 for B ⇌ A

### Multiply Equation:

**If multiply by n, then K_new = (K_original)^n**

Example: If K = 10 for A ⇌ B, then K = 100 for 2A ⇌ 2B

### Add Equations:

**If add reactions, multiply K values**

K_overall = K₁ × K₂ × K₃...

## Heterogeneous vs Homogeneous Equilibria

**Homogeneous:** All species in same phase
- Example: All gases or all aqueous

**Heterogeneous:** Multiple phases present
- Example: Solid + gas, solid + aqueous
- Remember: Omit pure solids and liquids from K expression

## Writing K Expressions - Practice

**General strategy:**
1. Identify products and reactants
2. Omit pure solids, pure liquids, solvents
3. Products in numerator
4. Reactants in denominator
5. Use coefficients as exponents
`,
      exampleProblems: {
        create: [
          {
            question: 'Write the equilibrium constant expression (K_c) for: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
            solution: `**Reaction:** 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)

**Identify components:**
- **Products:** SO₃ (coefficient: 2)
- **Reactants:** SO₂ (coefficient: 2), O₂ (coefficient: 1)
- All are gases → all included

---

**K_c expression:**

$$K_c = \\frac{[\\text{products}]}{[\\text{reactants}]}$$

**Apply coefficients as exponents:**

$$K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2[\\ce{O2}]}$$

**Answer:**

$$K_c = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2[\\ce{O2}]}$$

---

**Key points:**
- Products (SO₃) in numerator
- Reactants (SO₂, O₂) in denominator
- Coefficient 2 becomes exponent 2
- All concentrations at equilibrium
- Unitless (convention)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), K_c = 0.500 at 400°C. Calculate K_p at the same temperature.',
            solution: `**Given:**
- Reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
- K_c = 0.500
- T = 400°C = 673 K
- R = 0.08206 L·atm/(mol·K)

---

**Relationship:**

$$K_p = K_c(RT)^{\\Delta n}$$

---

**Calculate Δn:**

Δn = moles gas products - moles gas reactants

**Products:** 2 mol NH₃
**Reactants:** 1 mol N₂ + 3 mol H₂ = 4 mol

Δn = 2 - 4 = -2

---

**Calculate RT:**

RT = (0.08206)(673) = 55.2 L·atm/mol

---

**Calculate K_p:**

$$K_p = K_c(RT)^{\\Delta n}$$

$$K_p = (0.500)(55.2)^{-2}$$

$$K_p = (0.500) \\times \\frac{1}{(55.2)^2}$$

$$K_p = (0.500) \\times \\frac{1}{3047}$$

$$K_p = 1.64 \\times 10^{-4}$$

**Answer:** K_p = 1.64 × 10⁻⁴

---

**Interpretation:**

**K_p < K_c because Δn < 0**
- Decreasing moles of gas
- Pressure-based K is smaller
- Both indicate reactants favored (K < 1)`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'At equilibrium at 500 K: H₂(g) + I₂(g) ⇌ 2HI(g), [H₂] = 0.20 M, [I₂] = 0.20 M, [HI] = 1.60 M. (a) Calculate K_c. (b) If this reaction is reversed, what is the new K_c?',
            solution: `**Given:**
- Reaction: H₂(g) + I₂(g) ⇌ 2HI(g)
- At equilibrium:
  - [H₂] = 0.20 M
  - [I₂] = 0.20 M
  - [HI] = 1.60 M
- T = 500 K

---

**(a) Calculate K_c**

**K_c expression:**

$$K_c = \\frac{[\\ce{HI}]^2}{[\\ce{H2}][\\ce{I2}]}$$

**Substitute values:**

$$K_c = \\frac{(1.60)^2}{(0.20)(0.20)}$$

$$K_c = \\frac{2.56}{0.040}$$

$$K_c = 64$$

**Answer (a):** K_c = 64

---

**(b) Reversed reaction K_c**

**Reversed reaction:** 2HI(g) ⇌ H₂(g) + I₂(g)

**Rule:** K_reverse = 1/K_forward

$$K_{c,\\text{reverse}} = \\frac{1}{K_{c,\\text{forward}}}$$

$$K_{c,\\text{reverse}} = \\frac{1}{64}$$

$$K_{c,\\text{reverse}} = 0.0156$$

**Answer (b):** K_c = 0.0156 or 1.56 × 10⁻²

---

**Interpretation:**

**Forward reaction (K = 64):**
- Products strongly favored
- Equilibrium lies far right
- HI formation favored

**Reverse reaction (K = 0.0156):**
- Reactants strongly favored
- Equilibrium lies far left
- HI decomposition unfavored

**Note:** K_forward × K_reverse = 64 × 0.0156 = 1 ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', equilibriumTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: equilibriumTopic.id,
        front: 'What is chemical equilibrium and what does "dynamic" mean?',
        back: 'Equilibrium: state where forward and reverse rates are equal. Dynamic: reactions still occurring but no net change in concentrations. Both directions proceed continuously at equal rates.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'How do you write K_c expression for aA + bB ⇌ cC + dD?',
        back: 'K_c = [C]^c[D]^d / [A]^a[B]^b. Products in numerator, reactants in denominator. Coefficients become exponents. Use equilibrium concentrations (mol/L). Temperature dependent.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'What do you exclude from equilibrium constant expressions?',
        back: 'Exclude: 1) Pure solids, 2) Pure liquids, 3) Solvents (usually H₂O). Include only: gases (g) and aqueous solutions (aq). Use concentrations [M] or partial pressures.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'What is the relationship between K_c and K_p?',
        back: 'K_p = K_c(RT)^Δn. R = 0.08206 L·atm/(mol·K), T in Kelvin. Δn = moles gas products - moles gas reactants. If Δn = 0, then K_p = K_c.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'How do you interpret the magnitude of K?',
        back: 'K >> 1 (>10³): products favored, equilibrium right. K ≈ 1 (10⁻³ to 10³): significant amounts of both. K << 1 (<10⁻³): reactants favored, equilibrium left. K is temperature dependent.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'What happens to K when you reverse a reaction?',
        back: 'K_reverse = 1/K_forward. Example: if forward K = 100, reverse K = 0.01. Products and reactants swap positions in expression. Large K becomes small K.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'What happens to K when you multiply a reaction by a factor n?',
        back: 'K_new = (K_original)^n. Example: if A ⇌ B has K = 10, then 2A ⇌ 2B has K = 10² = 100. All exponents in K expression multiply by n.'
      },
      {
        topicId: equilibriumTopic.id,
        front: 'What is the difference between homogeneous and heterogeneous equilibria?',
        back: 'Homogeneous: all species in same phase (all gas or all aqueous). Heterogeneous: multiple phases (solid+gas, solid+aqueous). For heterogeneous, omit pure solids and liquids from K expression.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', equilibriumTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Equilibrium (Part 1)!');
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
