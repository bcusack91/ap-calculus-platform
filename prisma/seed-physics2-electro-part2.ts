import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Electrostatics Part 2...')

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
      description: 'Electric charge, electric fields, electric potential, capacitance',
      order: 2,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Found category: Electrostatics')

  // ============================================
  // TOPIC 2: Electric Fields and Electric Potential
  // ============================================
  const electricFields = await prisma.topic.upsert({
    where: { slug: 'electric-fields-potential' },
    update: {},
    create: {
      slug: 'electric-fields-potential',
      title: 'Electric Fields and Electric Potential',
      description: 'Electric field vectors, field lines, electric potential energy, and voltage',
      order: 2,
      categoryId: electroCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Electric Fields and Electric Potential

## Electric Field

An **electric field** is a vector field that describes the electric force per unit charge at any point in space.

$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$

where:
- $\\vec{E}$ = electric field (N/C or V/m)
- $\\vec{F}$ = force on test charge
- $q_0$ = small positive test charge

### Point Charge Field:

$$E = k\\frac{|q|}{r^2}$$

Direction:
- **Positive charge** → field points **away**
- **Negative charge** → field points **toward**

---

## Electric Field Lines

Visual representation of electric fields:

**Rules:**
1. Lines start on positive charges, end on negative charges
2. Density of lines ∝ field strength
3. Lines never cross
4. Tangent to line gives field direction
5. Perpendicular to conductor surfaces

**Uniform field:** Parallel, evenly spaced lines (e.g., parallel plates)

---

## Superposition of Fields

$$\\vec{E}_{total} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + ...$$

Calculate field from each charge, then vector sum.

---

## Electric Potential Energy

Work done moving charge in electric field:

$$U_E = k\\frac{q_1 q_2}{r}$$

- Same sign charges: $U > 0$ (repulsive, stored energy)
- Opposite sign charges: $U < 0$ (attractive, bound state)

**Change in PE:**
$$\\Delta U = -W_{field} = W_{external}$$

---

## Electric Potential (Voltage)

**Electric potential** (V) is potential energy per unit charge:

$$V = \\frac{U}{q_0} = k\\frac{q}{r}$$

Units: **Volt (V)** = J/C

### Potential Difference:

$$\\Delta V = V_f - V_i = -\\int \\vec{E} \\cdot d\\vec{r}$$

For uniform field:
$$\\Delta V = -Ed$$

where $d$ is distance in field direction.

---

## Relationship: E and V

$$\\vec{E} = -\\frac{dV}{dr}$$

Electric field points from **high to low potential** (downhill).

For uniform field:
$$E = \\frac{\\Delta V}{d}$$

---

## Parallel Plate Capacitor

Uniform field between plates:

$$E = \\frac{V}{d} = \\frac{\\sigma}{\\epsilon_0}$$

where:
- $V$ = potential difference
- $d$ = plate separation
- $\\sigma$ = surface charge density

---

## Equipotential Surfaces

Surfaces where $V =$ constant

- No work to move charge along equipotential
- Always ⊥ to electric field lines
- Closer spacing → stronger field

---

## Electron Volt (eV)

Energy gained by electron moving through 1 V:

$$1 \\text{ eV} = 1.60 \\times 10^{-19} \\text{ J}$$

Useful for atomic/particle physics.

---

## Problem-Solving Strategy

**For Fields:**
1. Calculate $E$ from each charge
2. Determine directions (away from +, toward -)
3. Use components if needed
4. Vector sum

**For Potential:**
1. Calculate $V$ from each charge (scalar!)
2. Algebraic sum (watch signs)
3. Or use $\\Delta V = -Ed$ for uniform field

---

## Common Mistakes

❌ Treating potential as vector (it's scalar!)
❌ Wrong field direction from negative charge
❌ Forgetting $\\Delta V = V_f - V_i$ (order matters)
❌ Sign errors in potential energy
❌ Confusing E (field) with V (potential)
`,
    },
  })

  console.log('✓ Created topic: Electric Fields and Electric Potential')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: electricFields.id,
        question: 'A +2.0 μC charge creates an electric field. What is the field strength 0.30 m away? What force would a -3.0 μC charge experience at that point?',
        solution: `**Given:**
- Source: $q = +2.0 \\times 10^{-6}$ C
- Distance: $r = 0.30$ m
- Test charge: $q_0 = -3.0 \\times 10^{-6}$ C

**Part (a):** Electric field

$$E = k\\frac{|q|}{r^2} = (9.0 \\times 10^9)\\frac{2.0 \\times 10^{-6}}{(0.30)^2}$$
$$E = (9.0 \\times 10^9)\\frac{2.0 \\times 10^{-6}}{0.09} = 2.0 \\times 10^5 \\text{ N/C}$$

Direction: Away from positive charge

**Part (b):** Force on test charge

$$F = |q_0|E = (3.0 \\times 10^{-6})(2.0 \\times 10^5) = 0.60 \\text{ N}$$

Direction: Toward source (opposite to field, negative charge)

**Answer:** E = **2.0 × 10⁵ N/C**, F = **0.60 N toward source**`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: electricFields.id,
        question: 'Two parallel plates are 2.0 cm apart with a potential difference of 100 V. (a) What is the electric field between the plates? (b) What force acts on an electron between the plates?',
        solution: `**Given:**
- Plate separation: $d = 2.0$ cm $= 0.020$ m
- Potential difference: $\\Delta V = 100$ V
- Electron charge: $e = -1.60 \\times 10^{-19}$ C

**Part (a):** Electric field

$$E = \\frac{\\Delta V}{d} = \\frac{100}{0.020} = 5000 \\text{ N/C} = 5.0 \\text{ kN/C}$$

**Part (b):** Force on electron

$$F = |e|E = (1.60 \\times 10^{-19})(5000)$$
$$F = 8.0 \\times 10^{-16} \\text{ N}$$

Direction: Toward positive plate (opposite to field direction)

**Answer:**
- **(a)** E = **5.0 kN/C**
- **(b)** F = **8.0 × 10⁻¹⁶ N** toward positive plate`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: electricFields.id,
        question: 'A +5.0 μC charge is at the origin and a -3.0 μC charge is at x = 0.40 m. (a) Find the electric potential at x = 0.20 m. (b) How much work is required to bring a +2.0 μC charge from infinity to x = 0.20 m?',
        solution: `**Given:**
- $q_1 = +5.0 \\times 10^{-6}$ C at x = 0
- $q_2 = -3.0 \\times 10^{-6}$ C at x = 0.40 m
- Point of interest: x = 0.20 m

**Part (a):** Electric potential at x = 0.20 m

Distance from $q_1$: $r_1 = 0.20$ m
Distance from $q_2$: $r_2 = 0.40 - 0.20 = 0.20$ m

Potential is scalar, so algebraic sum:
$$V = V_1 + V_2 = k\\frac{q_1}{r_1} + k\\frac{q_2}{r_2}$$
$$V = (9.0 \\times 10^9)\\left[\\frac{5.0 \\times 10^{-6}}{0.20} + \\frac{-3.0 \\times 10^{-6}}{0.20}\\right]$$
$$V = (9.0 \\times 10^9)\\left[\\frac{2.0 \\times 10^{-6}}{0.20}\\right]$$
$$V = (9.0 \\times 10^9)(1.0 \\times 10^{-5})$$
$$V = 9.0 \\times 10^4 \\text{ V} = 90 \\text{ kV}$$

**Part (b):** Work to bring charge from infinity

At infinity: $V_i = 0$
At x = 0.20 m: $V_f = 90$ kV

Work by external force:
$$W = q\\Delta V = q(V_f - V_i)$$
$$W = (2.0 \\times 10^{-6})(9.0 \\times 10^4 - 0)$$
$$W = 0.18 \\text{ J}$$

**Answer:**
- **(a)** V = **90 kV**
- **(b)** W = **0.18 J** (positive, work must be done against field)`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: electricFields.id,
        front: 'Define electric field and give its formula.',
        back: 'Electric field is force per unit charge: E = F/q₀. For point charge: E = k|q|/r². Units: N/C or V/m. Direction: away from + charge, toward - charge.',
      },
      {
        topicId: electricFields.id,
        front: 'What are the rules for drawing electric field lines?',
        back: 'Start on +, end on -. Density ∝ strength. Never cross. Tangent = direction. Perpendicular to conductors. Uniform field = parallel, evenly spaced lines.',
      },
      {
        topicId: electricFields.id,
        front: 'Define electric potential (voltage).',
        back: 'Electric potential is PE per unit charge: V = U/q₀ = kq/r. Units: Volt (V) = J/C. Scalar quantity (easier than field!). Reference usually at infinity (V = 0).',
      },
      {
        topicId: electricFields.id,
        front: 'How are electric field and potential related?',
        back: 'E = -dV/dr (field = negative gradient of potential). Field points from high to low potential. For uniform field: E = ΔV/d.',
      },
      {
        topicId: electricFields.id,
        front: 'What is an equipotential surface?',
        back: 'Surface where V = constant. No work to move charge along it. Always perpendicular to E field lines. Closer spacing → stronger field.',
      },
      {
        topicId: electricFields.id,
        front: 'For parallel plates, what is the relationship between E, V, and d?',
        back: 'E = V/d, where V is potential difference and d is plate separation. Uniform field between plates. Also E = σ/ε₀ (surface charge density).',
      },
      {
        topicId: electricFields.id,
        front: 'What is an electron volt (eV)?',
        back: '1 eV = 1.60 × 10⁻¹⁹ J. Energy gained by electron accelerated through 1 V. Useful unit for atomic/particle physics. KE = eΔV for electron.',
      },
      {
        topicId: electricFields.id,
        front: 'What is electric potential energy for two point charges?',
        back: 'U = kq₁q₂/r. Same sign: U > 0 (repulsive). Opposite sign: U < 0 (attractive, bound). Work to assemble: W = ΔU.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Electric Fields and Electric Potential')

  console.log('\n✅ Successfully seeded AP Physics 2 - Electrostatics Part 2!')
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
