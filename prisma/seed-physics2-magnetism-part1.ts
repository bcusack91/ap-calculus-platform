import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Magnetism Part 1...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const magnetismCategory = await prisma.category.upsert({
    where: { slug: 'magnetism' },
    update: {},
    create: {
      slug: 'magnetism',
      name: 'Magnetism',
      description: 'Magnetic fields, forces on charges and currents, electromagnetic induction',
      order: 4,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Magnetism')

  // ============================================
  // TOPIC: Magnetic Fields and Forces
  // ============================================
  const magneticForces = await prisma.topic.upsert({
    where: { slug: 'magnetic-fields-forces' },
    update: {},
    create: {
      slug: 'magnetic-fields-forces',
      title: 'Magnetic Fields and Forces',
      description: 'Magnetic fields, forces on moving charges, forces on current-carrying wires, torque on current loops',
      order: 1,
      categoryId: magnetismCategory.id,
      isPremium: false,
      textContent: `
# 🧲 Magnetic Fields and Forces

## Magnetic Field

**Magnetic field** $\\vec{B}$ is a vector field created by moving charges.

Unit: **Tesla (T)** = N/(A·m) = kg/(A·s²)

Also: **Gauss (G)** where 1 T = 10⁴ G

**Earth's field**: ~0.5 G = 5 × 10⁻⁵ T

---

## Sources of Magnetic Fields

1. **Permanent magnets**: Aligned atomic magnetic moments
2. **Moving charges**: Create B field
3. **Current-carrying wires**: Moving charges → B field
4. **Electromagnets**: Coils of wire with current

### Magnetic Poles:
- North and South (like charges, but **no magnetic monopoles!**)
- Like poles repel, opposite poles attract
- Field lines: N → S outside magnet

---

## Force on Moving Charge

$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

Magnitude:
$$F = qvB \\sin\\theta$$

where $\\theta$ is angle between $\\vec{v}$ and $\\vec{B}$.

### Direction: **Right-Hand Rule #1**
1. Point fingers along $\\vec{v}$ (velocity)
2. Curl fingers toward $\\vec{B}$ (field)
3. Thumb points along $\\vec{F}$ (force) for positive charge

For **negative charge**: Force is opposite!

### Key Points:
- $\\theta = 90°$: Maximum force ($F = qvB$)
- $\\theta = 0°$ or $180°$: No force (parallel or anti-parallel)
- Force is **perpendicular** to both $\\vec{v}$ and $\\vec{B}$
- **No work done** (F ⊥ v, so F·v = 0)

---

## Circular Motion in B Field

If $\\vec{v} \\perp \\vec{B}$, charge moves in **circle**!

Magnetic force provides centripetal force:
$$qvB = \\frac{mv^2}{r}$$

**Radius of orbit:**
$$r = \\frac{mv}{qB}$$

**Period:**
$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$

**Frequency** (cyclotron frequency):
$$f = \\frac{1}{T} = \\frac{qB}{2\\pi m}$$

> **💡 Note**: Period and frequency are **independent of v and r**!

---

## Applications: Mass Spectrometer

Separates ions by mass:
1. Ions accelerated through V
2. Enter perpendicular B field
3. Radius depends on m/q ratio
4. Heavier ions have larger radius

$$r = \\frac{1}{B}\\sqrt{\\frac{2mV}{q}}$$

---

## Force on Current-Carrying Wire

Current = moving charges, so wire in B field experiences force!

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

Magnitude:
$$F = BIL \\sin\\theta$$

where:
- I = current (A)
- L = length of wire in field (m)
- $\\theta$ = angle between wire and B field

### Direction: **Right-Hand Rule #2**
1. Point fingers along **current direction**
2. Curl toward $\\vec{B}$
3. Thumb = force direction

**Maximum force**: Wire perpendicular to B ($F = BIL$)
**No force**: Wire parallel to B

---

## Force Between Parallel Wires

Two parallel wires carrying currents:

$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$

where:
- $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A (permeability of free space)
- d = distance between wires

**Same direction currents**: Attract
**Opposite direction currents**: Repel

> **💡 This defines the Ampere!** 1 A = current that produces 2×10⁻⁷ N/m force between parallel wires 1 m apart.

---

## Torque on Current Loop

Rectangular loop (sides a and b) in B field:

$$\\tau = NIAB \\sin\\theta$$

where:
- N = number of turns
- I = current
- A = area of loop
- $\\theta$ = angle between **normal to loop** and B field

**Magnetic dipole moment**: $\\mu = NIA$ (A·m²)

$$\\tau = \\mu B \\sin\\theta$$

**Maximum torque**: Loop perpendicular to B ($\\theta = 90°$)
**Equilibrium**: Loop parallel to B ($\\theta = 0°$)

---

## Applications: Electric Motor

1. Current through loop in B field
2. Torque rotates loop
3. Commutator reverses current every half-turn
4. Continuous rotation!

---

## Magnetic Field of Long Straight Wire

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

Direction: **Right-Hand Rule #3** (Grip Rule)
- Thumb along current
- Fingers curl around wire → B field direction

Field forms **circles** around wire.

---

## Magnetic Field of Solenoid

Long coil of wire (N turns, length L):

**Inside** (uniform field):
$$B = \\mu_0 nI = \\mu_0 \\frac{N}{L} I$$

where n = N/L = turns per unit length

**Outside**: B ≈ 0

Solenoid is like bar magnet with N and S poles!

---

## Problem-Solving Strategy

1. **Identify**: Charge or current in B field?
2. **Find angle** $\\theta$ between v (or I) and B
3. **Calculate magnitude**: F = qvB sinθ or F = BIL sinθ
4. **Find direction**: Right-hand rule
5. **For circular motion**: Use r = mv/qB

---

## Common Mistakes

❌ Forgetting sin θ term
❌ Wrong right-hand rule (for negative charges)
❌ Confusing E and B field formulas
❌ Saying magnetic force does work (it doesn't! F ⊥ v)
❌ Using v when parallel to B (F = 0)
❌ Wrong units (convert G to T, cm to m)
`,
    },
  })

  console.log('✓ Created topic: Magnetic Fields and Forces')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: magneticForces.id,
        question: 'An electron (q = -1.6×10⁻¹⁹ C, m = 9.11×10⁻³¹ kg) moves at 2.0×10⁶ m/s perpendicular to a 0.50 T magnetic field. Find (a) the magnetic force, (b) the radius of its circular path.',
        solution: `**Given:**
- Charge: $q = -1.6 \\times 10^{-19}$ C
- Mass: $m = 9.11 \\times 10^{-31}$ kg
- Velocity: $v = 2.0 \\times 10^6$ m/s
- B field: $B = 0.50$ T
- Angle: $\\theta = 90°$ (perpendicular)

**Part (a):** Magnetic force

$$F = |q|vB \\sin\\theta = (1.6 \\times 10^{-19})(2.0 \\times 10^6)(0.50)(1)$$
$$F = 1.6 \\times 10^{-13} \\text{ N}$$

(Direction: Use right-hand rule, then reverse for negative charge)

**Part (b):** Radius of circular path

$$r = \\frac{mv}{|q|B} = \\frac{(9.11 \\times 10^{-31})(2.0 \\times 10^6)}{(1.6 \\times 10^{-19})(0.50)}$$
$$r = \\frac{1.82 \\times 10^{-24}}{8.0 \\times 10^{-20}} = 2.3 \\times 10^{-5} \\text{ m} = 0.023 \\text{ mm}$$

Very small radius!

**Answer:**
- **(a)** F = **1.6 × 10⁻¹³ N**
- **(b)** r = **0.023 mm**`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: magneticForces.id,
        question: 'A straight wire carries 10 A current. A 0.30 m section lies perpendicular to a 0.80 T magnetic field. What is the magnetic force on this section?',
        solution: `**Given:**
- Current: $I = 10$ A
- Length: $L = 0.30$ m
- B field: $B = 0.80$ T
- Angle: $\\theta = 90°$ (perpendicular)

**Solution:**

Force on current-carrying wire:
$$F = BIL \\sin\\theta = (0.80)(10)(0.30)(1)$$
$$F = 2.4 \\text{ N}$$

Direction: Use right-hand rule #2
- Fingers along current
- Curl toward B field
- Thumb = force direction

**Answer:** F = **2.4 N**`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: magneticForces.id,
        question: 'A rectangular loop (10 cm × 5 cm) with 20 turns carries 3.0 A current. It is placed in a 0.40 T field with its plane at 30° to the field. Find the torque on the loop.',
        solution: `**Given:**
- Dimensions: 10 cm × 5 cm
- Number of turns: $N = 20$
- Current: $I = 3.0$ A
- B field: $B = 0.40$ T
- Angle: Plane at 30° to field

**Solution:**

Step 1: Find area.
$$A = (0.10)(0.05) = 0.0050 \\text{ m}^2 = 5.0 \\times 10^{-3} \\text{ m}^2$$

Step 2: Find angle θ.
If plane is at 30° to field, then **normal to plane** is at 60° to field!
$$\\theta = 90° - 30° = 60°$$

Step 3: Calculate torque.
$$\\tau = NIAB \\sin\\theta$$
$$\\tau = (20)(3.0)(5.0 \\times 10^{-3})(0.40)\\sin(60°)$$
$$\\tau = (20)(3.0)(5.0 \\times 10^{-3})(0.40)(0.866)$$
$$\\tau = 0.052 \\text{ N·m}$$

**Answer:** τ = **0.052 N·m** = **52 mN·m**

(Torque tends to align loop with field)`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: magneticForces.id,
        front: 'What is the unit of magnetic field? Give typical values.',
        back: 'Tesla (T) = N/(A·m). Also Gauss (G), where 1 T = 10⁴ G. Earth\'s field: ~0.5 G = 5×10⁻⁵ T. Strong lab magnet: ~1-2 T.',
      },
      {
        topicId: magneticForces.id,
        front: 'Give the formula for magnetic force on a moving charge.',
        back: 'F = qvB sinθ, where θ is angle between v and B. Maximum when perpendicular (θ=90°). Zero when parallel (θ=0°). Direction: right-hand rule, reverse for negative charge.',
      },
      {
        topicId: magneticForces.id,
        front: 'What is the radius of circular motion for a charge in a B field?',
        back: 'r = mv/(qB). Perpendicular motion only. Larger m or v → larger r. Larger q or B → smaller r. Period T = 2πm/(qB), independent of v!',
      },
      {
        topicId: magneticForces.id,
        front: 'Does magnetic force do work on a moving charge?',
        back: 'NO! F ⊥ v always, so F·v = 0. Magnetic force changes DIRECTION of velocity, not speed. Kinetic energy remains constant. Only electric forces do work on charges.',
      },
      {
        topicId: magneticForces.id,
        front: 'What is the force on a current-carrying wire in a B field?',
        back: 'F = BIL sinθ, where L is wire length, θ angle between wire and B. Max when perpendicular. Direction: right-hand rule (fingers along current, curl to B, thumb = F).',
      },
      {
        topicId: magneticForces.id,
        front: 'Do parallel wires carrying currents attract or repel?',
        back: 'Same direction currents: ATTRACT. Opposite currents: REPEL. Force per length: F/L = μ₀I₁I₂/(2πd). This defines the Ampere!',
      },
      {
        topicId: magneticForces.id,
        front: 'What is the torque on a current loop in a B field?',
        back: 'τ = NIAB sinθ = μB sinθ, where μ = NIA is magnetic dipole moment. θ angle between loop normal and B. Max when loop ⊥ B. Zero when loop ∥ B (equilibrium).',
      },
      {
        topicId: magneticForces.id,
        front: 'What is the magnetic field of a long straight wire?',
        back: 'B = μ₀I/(2πr), where r is distance from wire. μ₀ = 4π×10⁻⁷ T·m/A. Field circles wire. Direction: right-hand grip rule (thumb = current, fingers = B).',
      },
      {
        topicId: magneticForces.id,
        front: 'What is the magnetic field inside a solenoid?',
        back: 'B = μ₀nI = μ₀(N/L)I, where n = turns per length. UNIFORM field inside, nearly zero outside. Solenoid acts like bar magnet with N and S poles.',
      },
      {
        topicId: magneticForces.id,
        front: 'What are magnetic monopoles?',
        back: 'Hypothetical isolated N or S pole. NEVER observed! Magnetic field lines always form closed loops. Breaking magnet creates two smaller magnets, not monopoles.',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Magnetic Fields and Forces')

  console.log('\n✅ Successfully seeded AP Physics 2 - Magnetism Part 1!')
  console.log('   Topics: 1')
  console.log('   Examples: 3')
  console.log('   Flashcards: 10')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
