import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Electrostatics Part 1...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const electroCategory = await prisma.category.upsert({
    where: { slug: 'electrostatics' },
    update: {},
    create: {
      slug: 'electrostatics',
      name: 'Electrostatics',
      description: 'Electric charge, Coulomb\'s law, electric fields, and electric potential',
      order: 2,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Electrostatics')

  // ============================================
  // TOPIC 1: Electric Charge and Coulomb's Law
  // ============================================
  const electricCharge = await prisma.topic.upsert({
    where: { slug: 'electric-charge-coulombs-law' },
    update: {},
    create: {
      slug: 'electric-charge-coulombs-law',
      title: "Electric Charge and Coulomb's Law",
      description: 'Properties of electric charge, conservation, and electrostatic forces',
      order: 1,
      categoryId: electroCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Electric Charge and Coulomb's Law

## Electric Charge

**Electric charge** is a fundamental property of matter that causes electromagnetic interactions.

### Two Types:
- **Positive (+)**: Protons
- **Negative (-)**: Electrons

### Key Properties:

1. **Like charges repel, opposite charges attract**
2. **Charge is quantized**: Comes in multiples of elementary charge
   $$e = 1.60 \\times 10^{-19} \\text{ C}$$
3. **Charge is conserved**: Total charge in isolated system is constant
4. **Charge is invariant**: Doesn't depend on reference frame

---

## Units of Charge

**Coulomb (C)**: SI unit of electric charge

**Elementary charge**: $e = 1.60 \\times 10^{-19}$ C
- Charge of proton: $+e$
- Charge of electron: $-e$

Any charge: $q = ne$ where $n$ is an integer

---

## Charging Methods

### 1. Friction (Triboelectric Effect)
- Rubbing transfers electrons
- Example: Rubbing balloon on hair

### 2. Conduction (Contact)
- Direct contact transfers charge
- Charge distributes between objects

### 3. Induction
- Charge separation without contact
- Grounding removes one type of charge

---

## Conductors vs. Insulators

### Conductors
- Allow charges to move freely
- Examples: Metals, graphite, salt water
- Excess charge distributes on **surface**

### Insulators (Dielectrics)
- Charges cannot move freely
- Examples: Rubber, glass, plastic, wood
- Charge stays where placed

### Semiconductors
- Properties between conductors and insulators
- Examples: Silicon, germanium

---

## Coulomb's Law

**Coulomb's Law** gives the electrostatic force between two point charges:

$$F = k\\frac{|q_1 q_2|}{r^2}$$

where:
- $F$ = electrostatic force (N)
- $k = 8.99 \\times 10^9$ N·m²/C² (Coulomb's constant)
- $q_1, q_2$ = charges (C)
- $r$ = distance between charges (m)

### Vector Form:

$$\\vec{F} = k\\frac{q_1 q_2}{r^2}\\hat{r}$$

Direction:
- **Same signs** → repulsive (away from each other)
- **Opposite signs** → attractive (toward each other)

---

## Coulomb's Constant

$$k = \\frac{1}{4\\pi\\epsilon_0} = 8.99 \\times 10^9 \\text{ N·m}^2\\text{/C}^2$$

where $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²) is the **permittivity of free space**.

Often approximated as: $k \\approx 9.0 \\times 10^9$ N·m²/C²

---

## Comparison with Gravity

**Similarities:**
- Both are inverse square laws: $F \\propto 1/r^2$
- Both are long-range forces
- Both act along line connecting objects

**Differences:**

| Property | Gravity | Electricity |
|----------|---------|-------------|
| Always | Attractive | Attractive OR repulsive |
| Constant | $G = 6.67 \\times 10^{-11}$ | $k = 8.99 \\times 10^9$ |
| Relative strength | Very weak | Much stronger |
| Shielding | No | Yes (conductors) |

> **Electric force is ~10³⁹ times stronger than gravity!**

---

## Superposition Principle

For multiple charges, **total force = vector sum** of individual forces:

$$\\vec{F}_{total} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + ...$$

Each force calculated using Coulomb's Law independently.

### Steps:
1. Calculate force from each charge separately
2. Determine direction of each force
3. Resolve into components if needed
4. Add vectors (components)

---

## Problem-Solving Strategy

1. **Draw diagram** showing all charges and distances
2. **Identify charge signs** (+ or -)
3. **Apply Coulomb's Law** for each pair
4. **Determine force directions**:
   - Like charges → repel
   - Unlike charges → attract
5. **Use superposition** for multiple charges
6. **Add as vectors** (use components if needed)

---

## Common Mistakes

❌ Forgetting to square the distance in denominator
❌ Using wrong sign convention (use magnitude, then add direction)
❌ Not converting units (must use meters, coulombs)
❌ Adding forces as scalars instead of vectors
❌ Confusing force on A from B with force on B from A (equal magnitude, opposite direction)
`,
    },
  })

  console.log("✓ Created topic: Electric Charge and Coulomb's Law")

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: electricCharge.id,
        question: 'Two point charges, q₁ = +3.0 μC and q₂ = -2.0 μC, are separated by 0.50 m. What is the magnitude of the electrostatic force between them? (k = 9.0 × 10⁹ N·m²/C²)',
        solution: `**Given:**
- $q_1 = +3.0$ μC $= 3.0 \\times 10^{-6}$ C
- $q_2 = -2.0$ μC $= -2.0 \\times 10^{-6}$ C
- $r = 0.50$ m
- $k = 9.0 \\times 10^9$ N·m²/C²

**Find:** Force $F$

**Solution:**

Apply Coulomb's Law:
$$F = k\\frac{|q_1 q_2|}{r^2}$$
$$F = (9.0 \\times 10^9)\\frac{|(3.0 \\times 10^{-6})(-2.0 \\times 10^{-6})|}{(0.50)^2}$$
$$F = (9.0 \\times 10^9)\\frac{6.0 \\times 10^{-12}}{0.25}$$
$$F = (9.0 \\times 10^9)(2.4 \\times 10^{-11})$$
$$F = 0.216 \\text{ N} \\approx 0.22 \\text{ N}$$

**Direction:** Opposite signs → **attractive force**

**Answer:** **0.22 N**, attractive`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: electricCharge.id,
        question: 'Three charges are arranged in a line: q₁ = +2.0 μC at x = 0, q₂ = -3.0 μC at x = 0.30 m, and q₃ = +1.0 μC at x = 0.60 m. What is the net force on q₂?',
        solution: `**Given:**
- $q_1 = +2.0 \\times 10^{-6}$ C at x = 0
- $q_2 = -3.0 \\times 10^{-6}$ C at x = 0.30 m
- $q_3 = +1.0 \\times 10^{-6}$ C at x = 0.60 m

**Find:** Net force on $q_2$

**Solution:**

**Force from q₁ on q₂:**

Distance: $r_{12} = 0.30$ m
$$F_{12} = k\\frac{|q_1 q_2|}{r_{12}^2} = (9.0 \\times 10^9)\\frac{(2.0 \\times 10^{-6})(3.0 \\times 10^{-6})}{(0.30)^2}$$
$$F_{12} = (9.0 \\times 10^9)\\frac{6.0 \\times 10^{-12}}{0.09} = 0.60 \\text{ N}$$

Direction: Opposite signs → attractive → toward q₁ (left, negative)
$$\\vec{F}_{12} = -0.60 \\text{ N}$$

**Force from q₃ on q₂:**

Distance: $r_{23} = 0.60 - 0.30 = 0.30$ m
$$F_{23} = k\\frac{|q_2 q_3|}{r_{23}^2} = (9.0 \\times 10^9)\\frac{(3.0 \\times 10^{-6})(1.0 \\times 10^{-6})}{(0.30)^2}$$
$$F_{23} = (9.0 \\times 10^9)\\frac{3.0 \\times 10^{-12}}{0.09} = 0.30 \\text{ N}$$

Direction: Opposite signs → attractive → toward q₃ (right, positive)
$$\\vec{F}_{23} = +0.30 \\text{ N}$$

**Net force (superposition):**
$$F_{net} = F_{12} + F_{23} = -0.60 + 0.30 = -0.30 \\text{ N}$$

**Answer:** **0.30 N to the left** (toward q₁)`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: electricCharge.id,
        question: 'Four equal charges Q = +5.0 μC are placed at the corners of a square with side length 0.20 m. What is the magnitude and direction of the net force on one of the charges?',
        solution: `**Given:**
- Four charges: $Q = 5.0 \\times 10^{-6}$ C each
- Square side: $a = 0.20$ m

**Find:** Net force on one corner charge

**Solution:**

Consider force on charge at origin (0,0). Other charges at:
- (a, 0): distance = a
- (0, a): distance = a  
- (a, a): distance = $a\\sqrt{2}$ (diagonal)

**Force from adjacent charges (two):**
$$F_{adj} = k\\frac{Q^2}{a^2} = (9.0 \\times 10^9)\\frac{(5.0 \\times 10^{-6})^2}{(0.20)^2}$$
$$F_{adj} = (9.0 \\times 10^9)\\frac{2.5 \\times 10^{-11}}{0.04} = 5.625 \\text{ N}$$

Each points along edge (90° angle between them).

**Force from diagonal charge:**
$$F_{diag} = k\\frac{Q^2}{(a\\sqrt{2})^2} = k\\frac{Q^2}{2a^2} = \\frac{F_{adj}}{2} = 2.813 \\text{ N}$$

Points along diagonal toward corner.

**Components:**

From right: $\\vec{F}_1 = (5.625, 0)$ N
From top: $\\vec{F}_2 = (0, 5.625)$ N
From diagonal: At 45°, points toward (along diagonal from origin)
$$\\vec{F}_3 = (2.813\\cos 45°, 2.813\\sin 45°) = (1.99, 1.99)$ N

**Total:**
$$F_x = 5.625 + 0 + 1.99 = 7.62 \\text{ N}$$
$$F_y = 0 + 5.625 + 1.99 = 7.62 \\text{ N}$$

$$F_{net} = \\sqrt{F_x^2 + F_y^2} = \\sqrt{7.62^2 + 7.62^2} = 10.8 \\text{ N}$$

$$\\theta = \\tan^{-1}\\frac{F_y}{F_x} = 45°$$

**Answer:** **10.8 N at 45°** from the two adjacent sides (along diagonal outward)

By symmetry, this makes sense - force points directly away from center!`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: electricCharge.id,
        front: 'What are the fundamental properties of electric charge?',
        back: 'Two types (+/-), quantized (multiples of e = 1.60×10⁻¹⁹ C), conserved (total charge constant), invariant (same in all frames). Like charges repel, opposites attract.',
      },
      {
        topicId: electricCharge.id,
        front: "State Coulomb's Law.",
        back: 'F = k|q₁q₂|/r², where k = 8.99×10⁹ N·m²/C². Force is attractive for opposite charges, repulsive for like charges. Inverse square law like gravity.',
      },
      {
        topicId: electricCharge.id,
        front: 'What is the elementary charge?',
        back: 'e = 1.60 × 10⁻¹⁹ C. Charge of one proton (+e) or electron (-e). All charges are integer multiples: q = ne.',
      },
      {
        topicId: electricCharge.id,
        front: 'What are the three methods of charging objects?',
        back: 'Friction (rubbing transfers electrons), Conduction (direct contact transfers charge), Induction (charge separation without contact, requires grounding).',
      },
      {
        topicId: electricCharge.id,
        front: 'Difference between conductors and insulators?',
        back: 'Conductors: charges move freely (metals). Excess charge on surface. Insulators: charges cannot move (rubber, glass). Charge stays where placed.',
      },
      {
        topicId: electricCharge.id,
        front: 'State the superposition principle for electric forces.',
        back: 'Total force = vector sum of individual forces: F_total = F₁ + F₂ + F₃ +... Each force calculated independently using Coulomb\'s Law.',
      },
      {
        topicId: electricCharge.id,
        front: 'Compare electric force to gravitational force.',
        back: 'Both inverse square laws. Gravity: always attractive, very weak (G = 6.67×10⁻¹¹). Electric: attractive OR repulsive, much stronger (k = 9×10⁹), ~10³⁹ times stronger!',
      },
      {
        topicId: electricCharge.id,
        front: 'What is the permittivity of free space?',
        back: 'ε₀ = 8.85×10⁻¹² C²/(N·m²). Related to Coulomb constant by k = 1/(4πε₀) = 8.99×10⁹ N·m²/C². Appears in electric field equations.',
      },
    ],
  })

  console.log("✓ Created 8 flashcards for Electric Charge and Coulomb's Law")

  console.log('\n✅ Successfully seeded AP Physics 2 - Electrostatics Part 1!')
  console.log('   Topics: 1')
  console.log('   Examples: 3')
  console.log('   Flashcards: 8')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
