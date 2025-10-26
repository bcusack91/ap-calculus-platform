import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Simple Harmonic Motion Part 2...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Find the Simple Harmonic Motion category
  const shmCategory = await prisma.category.findUnique({
    where: { slug: 'simple-harmonic-motion' },
  })

  if (!shmCategory) {
    throw new Error('Simple Harmonic Motion category not found')
  }

  console.log('✓ Found category: Simple Harmonic Motion')

  // ============================================
  // TOPIC 2: Energy in Simple Harmonic Motion
  // ============================================
  const energySHM = await prisma.topic.upsert({
    where: { slug: 'energy-in-shm' },
    update: {},
    create: {
      slug: 'energy-in-shm',
      title: 'Energy in Simple Harmonic Motion',
      description: 'Kinetic energy, potential energy, and total energy in oscillating systems',
      order: 2,
      categoryId: shmCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Energy in Simple Harmonic Motion

## Total Energy in SHM

In an ideal oscillating system with no friction, **total mechanical energy is conserved**:

$$E_{total} = KE + PE = \\text{constant}$$

Energy continuously transforms between kinetic and potential, but the total remains constant.

> **💡 Key Idea**: Energy sloshes back and forth between kinetic (motion) and potential (position) forms. At any instant, total energy equals the maximum potential energy (at amplitude).

---

## Potential Energy in Mass-Spring System

**Elastic potential energy** stored in a spring:

$$PE = \\frac{1}{2}kx^2$$

where:
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium (m)

### Key Points:

- **Maximum at amplitude**: $PE_{max} = \\frac{1}{2}kA^2$ (when $x = \\pm A$)
- **Zero at equilibrium**: $PE = 0$ (when $x = 0$)
- Always **positive** (depends on $x^2$, not $x$)
- Same value at $+x$ and $-x$

---

## Kinetic Energy in SHM

$$KE = \\frac{1}{2}mv^2$$

where $v$ is the instantaneous speed.

### Key Points:

- **Maximum at equilibrium**: $KE_{max} = \\frac{1}{2}mv_{max}^2 = \\frac{1}{2}m(A\\omega)^2$ (when $x = 0$)
- **Zero at amplitude**: $KE = 0$ (when $x = \\pm A$, momentarily at rest)
- Always **positive**

---

## Total Energy

Since energy is conserved:

$$E_{total} = KE + PE = \\text{constant}$$

At any position:
$$E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$$

### Finding Total Energy:

**Method 1: At amplitude** ($x = A$, $v = 0$):
$$E_{total} = 0 + \\frac{1}{2}kA^2 = \\frac{1}{2}kA^2$$

**Method 2: At equilibrium** ($x = 0$, $v = v_{max}$):
$$E_{total} = \\frac{1}{2}mv_{max}^2 + 0 = \\frac{1}{2}m(A\\omega)^2$$

Since $\\omega^2 = \\frac{k}{m}$:
$$E_{total} = \\frac{1}{2}m \\cdot A^2 \\cdot \\frac{k}{m} = \\frac{1}{2}kA^2$$

Both methods give the same result! ✓

---

## Energy at Any Position

At position $x$ with speed $v$:

$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

Solving for $v$:
$$v = \\sqrt{\\frac{k}{m}(A^2 - x^2)} = \\omega\\sqrt{A^2 - x^2}$$

This gives speed at any position!

---

## Energy Transformations During Oscillation

**At maximum displacement** ($x = A$):
- All potential energy: $E = \\frac{1}{2}kA^2$
- No kinetic energy: $v = 0$
- Object momentarily at rest

**At equilibrium** ($x = 0$):
- All kinetic energy: $E = \\frac{1}{2}mv_{max}^2$
- No potential energy
- Maximum speed

**Midway** ($x = \\frac{A}{2}$):
- Mix of KE and PE
- $PE = \\frac{1}{2}k\\left(\\frac{A}{2}\\right)^2 = \\frac{1}{8}kA^2$ (1/4 of maximum)
- $KE = \\frac{1}{2}kA^2 - \\frac{1}{8}kA^2 = \\frac{3}{8}kA^2$ (3/4 of maximum)

---

## Energy Graphs

**Potential Energy**: Parabola
- Minimum at $x = 0$
- Maximum at $x = \\pm A$
- $PE = \\frac{1}{2}kx^2$

**Kinetic Energy**: Inverted parabola
- Maximum at $x = 0$
- Zero at $x = \\pm A$
- $KE = \\frac{1}{2}k(A^2 - x^2)$

**Total Energy**: Horizontal line
- Constant at $E = \\frac{1}{2}kA^2$
- Independent of position

---

## Pendulum Energy

For a simple pendulum:

**Potential Energy**: Gravitational
$$PE = mgh$$

where $h$ is height above lowest point.

For small angles:
$$h \\approx \\frac{L\\theta^2}{2}$$

**Total Energy**:
$$E = \\frac{1}{2}mv^2 + mgh$$

At maximum angle $\\theta_0$:
$$E = mgL(1 - \\cos\\theta_0) \\approx \\frac{1}{2}mgL\\theta_0^2$$

(for small angles)

---

## Using Energy to Find Speed

**Problem type**: "Find speed at position $x$"

**Method**:
1. Find total energy: $E = \\frac{1}{2}kA^2$
2. At position $x$: $E = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$
3. Set equal and solve for $v$:
   $$v = \\omega\\sqrt{A^2 - x^2}$$

**Check**:
- At $x = 0$: $v = \\omega A = v_{max}$ ✓
- At $x = A$: $v = 0$ ✓

---

## Effect of Damping

In **real systems**, friction causes energy loss:

**Damped Oscillation**:
- Amplitude decreases over time
- Period slightly longer
- Eventually stops

Energy is converted to:
- Heat (friction)
- Sound
- Air resistance

**Not in AP Physics 1 scope**: Detailed damping equations (that's AP Physics 2/C)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Total Energy is Constant
In ideal SHM (no friction), $E_{total} = \\frac{1}{2}kA^2 =$ constant at ALL positions.

### Mistake 2: Negative Potential Energy
Spring PE is always positive: $PE = \\frac{1}{2}kx^2$ (even when $x < 0$, we square it!)

### Mistake 3: KE and PE at Wrong Positions
- Max KE at equilibrium ($x = 0$), NOT at amplitude
- Max PE at amplitude ($x = \\pm A$), NOT at equilibrium

### Mistake 4: Confusing x and A
- $x$ = current position (variable)
- $A$ = amplitude (maximum displacement, constant)

---

## Problem-Solving Strategy

### Energy Method for SHM:

1. **Find amplitude** $A$ (from initial conditions)
2. **Calculate total energy**: $E = \\frac{1}{2}kA^2$
3. **At any position** $x$:
   - Potential: $PE = \\frac{1}{2}kx^2$
   - Kinetic: $KE = E - PE = \\frac{1}{2}k(A^2 - x^2)$
4. **Find speed**: $v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$
5. **Check answer**: Does it make sense?
   - $v$ should be max at $x = 0$
   - $v$ should be zero at $x = A$

---

## Comparing Two Oscillators

**Same amplitude, different masses**:
- Same total energy: $E = \\frac{1}{2}kA^2$ (independent of mass!)
- Lighter mass → higher maximum speed
- Heavier mass → lower maximum speed

**Same mass and spring, different amplitudes**:
- Larger amplitude → more total energy ($E \\propto A^2$)
- Larger amplitude → higher maximum speed ($v_{max} = A\\omega$)
- But same period! ($T$ independent of $A$)

---

## Applications

### Shock Absorbers
Convert kinetic energy to heat through damping:
- Car hits bump (KE increases)
- Spring compresses (converts to PE)
- Damper dissipates energy
- Smooth ride

### Energy Storage
Springs can store energy:
- Mechanical watches (mainspring)
- Pogo sticks
- Trampolines

### Molecular Vibrations
Chemical bonds act like springs:
- Bond energy = spring PE
- Vibrational energy quantized
- Infrared spectroscopy

---

## Key Formulas Summary

| Quantity | Formula | Notes |
|----------|---------|-------|
| **Potential Energy (spring)** | $PE = \\frac{1}{2}kx^2$ | Max at $x = \\pm A$ |
| **Kinetic Energy** | $KE = \\frac{1}{2}mv^2$ | Max at $x = 0$ |
| **Total Energy** | $E = \\frac{1}{2}kA^2$ | Constant, independent of mass |
| **Speed at position x** | $v = \\omega\\sqrt{A^2 - x^2}$ | From energy conservation |
| **Maximum speed** | $v_{max} = A\\omega$ | At equilibrium |
| **Maximum KE** | $KE_{max} = \\frac{1}{2}kA^2$ | Equals total energy |

**Key Relationships**:
- $E_{total} = KE + PE = \\frac{1}{2}kA^2$
- Energy oscillates between KE and PE
- Total energy $\\propto A^2$ (doubles amplitude → 4× energy)
`,
      exampleProblems: {
        create: [
          {
            question: 'A 0.8 kg mass on a spring with k = 120 N/m oscillates with amplitude 0.2 m. Find: (a) the total energy, (b) the maximum speed, and (c) the potential energy when the displacement is 0.15 m.',
            solution: `**Given Information:**
- Mass: $m = 0.8$ kg
- Spring constant: $k = 120$ N/m
- Amplitude: $A = 0.2$ m

---

**(a) Find total energy**

---

**Step 1: Calculate total energy**

At amplitude, all energy is potential:

$$E = \\frac{1}{2}kA^2$$

$$E = \\frac{1}{2}(120)(0.2)^2$$

$$E = \\frac{1}{2}(120)(0.04)$$

$$E = 2.4 \\text{ J}$$

---

**Answer (a)**: Total energy = **2.4 J**

---

**(b) Find maximum speed**

---

**Step 2: Calculate angular frequency**

$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{120}{0.8}} = \\sqrt{150} = 12.25 \\text{ rad/s}$$

---

**Step 3: Calculate maximum speed**

$$v_{max} = A\\omega$$

$$v_{max} = (0.2)(12.25)$$

$$v_{max} = 2.45 \\text{ m/s}$$

---

**Alternative: Use energy**

At equilibrium, all energy is kinetic:

$$\\frac{1}{2}mv_{max}^2 = E$$

$$v_{max} = \\sqrt{\\frac{2E}{m}} = \\sqrt{\\frac{2(2.4)}{0.8}} = \\sqrt{6} = 2.45 \\text{ m/s}$$

Both methods agree! ✓

---

**Answer (b)**: Maximum speed = **2.45 m/s**

---

**(c) Find PE at x = 0.15 m**

---

**Step 4: Calculate potential energy**

$$PE = \\frac{1}{2}kx^2$$

$$PE = \\frac{1}{2}(120)(0.15)^2$$

$$PE = \\frac{1}{2}(120)(0.0225)$$

$$PE = 1.35 \\text{ J}$$

---

**Answer (c)**: Potential energy at $x = 0.15$ m is **1.35 J**

**Note**: This is $\\frac{1.35}{2.4} = 56\\%$ of total energy. The remaining $2.4 - 1.35 = 1.05$ J is kinetic energy at this position.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 1.5 kg mass on a spring oscillates with amplitude 0.25 m. When the mass is 0.1 m from equilibrium, its speed is 1.2 m/s. Find: (a) the spring constant, and (b) the speed when the mass is 0.2 m from equilibrium.',
            solution: `**Given Information:**
- Mass: $m = 1.5$ kg
- Amplitude: $A = 0.25$ m
- At $x_1 = 0.1$ m: $v_1 = 1.2$ m/s

---

**(a) Find spring constant**

---

**Step 1: Write total energy at known position**

At $x_1 = 0.1$ m with $v_1 = 1.2$ m/s:

$$E = \\frac{1}{2}mv_1^2 + \\frac{1}{2}kx_1^2$$

$$E = \\frac{1}{2}(1.5)(1.2)^2 + \\frac{1}{2}k(0.1)^2$$

$$E = \\frac{1}{2}(1.5)(1.44) + \\frac{1}{2}k(0.01)$$

$$E = 1.08 + 0.005k$$

---

**Step 2: Write total energy at amplitude**

At amplitude ($x = A$, $v = 0$):

$$E = \\frac{1}{2}kA^2$$

$$E = \\frac{1}{2}k(0.25)^2$$

$$E = \\frac{1}{2}k(0.0625)$$

$$E = 0.03125k$$

---

**Step 3: Set energies equal and solve for k**

$$1.08 + 0.005k = 0.03125k$$

$$1.08 = 0.03125k - 0.005k$$

$$1.08 = 0.02625k$$

$$k = \\frac{1.08}{0.02625}$$

$$k = 41.1 \\text{ N/m}$$

---

**Answer (a)**: Spring constant = **41.1 N/m**

---

**(b) Find speed at x = 0.2 m**

---

**Step 4: Calculate total energy**

$$E = \\frac{1}{2}kA^2 = \\frac{1}{2}(41.1)(0.25)^2$$

$$E = \\frac{1}{2}(41.1)(0.0625)$$

$$E = 1.284 \\text{ J}$$

---

**Step 5: Apply energy conservation at x = 0.2 m**

$$E = \\frac{1}{2}kx_2^2 + \\frac{1}{2}mv_2^2$$

$$1.284 = \\frac{1}{2}(41.1)(0.2)^2 + \\frac{1}{2}(1.5)v_2^2$$

$$1.284 = \\frac{1}{2}(41.1)(0.04) + 0.75v_2^2$$

$$1.284 = 0.822 + 0.75v_2^2$$

$$0.462 = 0.75v_2^2$$

$$v_2^2 = 0.616$$

$$v_2 = 0.785 \\text{ m/s}$$

---

**Answer (b)**: Speed at $x = 0.2$ m is **0.785 m/s** (about 0.79 m/s)

**Check**: Speed should decrease as we move away from equilibrium:
- At $x = 0.1$ m: $v = 1.2$ m/s ✓
- At $x = 0.2$ m: $v = 0.79$ m/s ✓
- At $x = 0.25$ m: $v = 0$ m/s ✓

Makes sense!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 2 kg mass attached to a spring with k = 200 N/m is released from rest at 0.3 m from equilibrium. (a) Find the total energy. (b) At what position is the kinetic energy equal to the potential energy? (c) What fraction of the total energy is kinetic when the mass is at half the amplitude?',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Spring constant: $k = 200$ N/m
- Amplitude: $A = 0.3$ m (released from rest)

---

**(a) Find total energy**

---

**Step 1: Calculate total energy**

Released from rest at $x = A$:

$$E = \\frac{1}{2}kA^2$$

$$E = \\frac{1}{2}(200)(0.3)^2$$

$$E = \\frac{1}{2}(200)(0.09)$$

$$E = 9 \\text{ J}$$

---

**Answer (a)**: Total energy = **9 J**

---

**(b) Find position where KE = PE**

---

**Step 2: Set up condition KE = PE**

If $KE = PE$ and $KE + PE = E$, then:

$$2 \\cdot KE = E$$

$$KE = \\frac{E}{2}$$

Also:
$$PE = \\frac{E}{2}$$

---

**Step 3: Use PE formula to find x**

$$\\frac{1}{2}kx^2 = \\frac{E}{2}$$

$$\\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot \\frac{1}{2}kA^2$$

$$x^2 = \\frac{A^2}{2}$$

$$x = \\frac{A}{\\sqrt{2}} = \\frac{0.3}{\\sqrt{2}}$$

$$x = \\frac{0.3}{1.414} = 0.212 \\text{ m}$$

---

**Answer (b)**: KE = PE at position **$x = \\pm 0.212$ m** (or $\\pm \\frac{A}{\\sqrt{2}}$)

**Note**: This happens at $\\pm 70.7\\%$ of amplitude (about 0.707$A$).

---

**(c) Find fraction of KE at x = A/2**

---

**Step 4: Calculate PE at x = A/2**

$$PE = \\frac{1}{2}k\\left(\\frac{A}{2}\\right)^2$$

$$PE = \\frac{1}{2}k \\cdot \\frac{A^2}{4} = \\frac{1}{8}kA^2$$

Since $E = \\frac{1}{2}kA^2$:

$$PE = \\frac{1}{8}kA^2 = \\frac{1}{4} \\cdot \\frac{1}{2}kA^2 = \\frac{E}{4}$$

---

**Step 5: Calculate KE at x = A/2**

$$KE = E - PE = E - \\frac{E}{4} = \\frac{3E}{4}$$

---

**Step 6: Find fraction**

$$\\text{Fraction} = \\frac{KE}{E} = \\frac{3E/4}{E} = \\frac{3}{4}$$

---

**Answer (c)**: At half the amplitude, **75%** (or 3/4) of the energy is kinetic.

**Summary**:
- At $x = A/2$:
  - PE = 25% of total energy
  - KE = 75% of total energy
- At $x = A/\\sqrt{2}$:
  - PE = 50% of total energy
  - KE = 50% of total energy
- At $x = 0$:
  - PE = 0% of total energy
  - KE = 100% of total energy

**General pattern**: As object moves toward equilibrium, PE decreases and KE increases!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Energy in Simple Harmonic Motion')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: energySHM.id,
        front: 'What is the total energy in an ideal SHM system?',
        back: '$E = \\frac{1}{2}kA^2$ - constant at all positions. Energy oscillates between kinetic and potential.',
        hint: 'Half k times amplitude squared',
      },
      {
        topicId: energySHM.id,
        front: 'What is the potential energy formula for a spring?',
        back: '$PE = \\frac{1}{2}kx^2$ - Always positive, maximum at amplitude ($\\pm A$), zero at equilibrium.',
        hint: 'Half k times displacement squared',
      },
      {
        topicId: energySHM.id,
        front: 'Where is kinetic energy maximum in SHM?',
        back: 'At equilibrium ($x = 0$). All energy is kinetic: $KE_{max} = \\frac{1}{2}mv_{max}^2 = \\frac{1}{2}kA^2$',
        hint: 'Where speed is maximum',
      },
      {
        topicId: energySHM.id,
        front: 'Where is potential energy maximum in SHM?',
        back: 'At amplitude ($x = \\pm A$). All energy is potential: $PE_{max} = \\frac{1}{2}kA^2$. Object momentarily at rest.',
        hint: 'Where speed is zero',
      },
      {
        topicId: energySHM.id,
        front: 'How do you find speed at any position x using energy?',
        back: '$v = \\omega\\sqrt{A^2 - x^2}$ from $\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$',
        hint: 'Energy conservation: total = KE + PE',
      },
      {
        topicId: energySHM.id,
        front: 'At what position is KE = PE in SHM?',
        back: 'At $x = \\pm\\frac{A}{\\sqrt{2}} \\approx \\pm 0.707A$. Each has half the total energy.',
        hint: 'A divided by square root of 2',
      },
      {
        topicId: energySHM.id,
        front: 'Does total energy depend on mass in mass-spring system?',
        back: 'NO! $E = \\frac{1}{2}kA^2$ depends only on spring constant and amplitude, not mass.',
        hint: 'Independent of mass',
      },
      {
        topicId: energySHM.id,
        front: 'How does total energy change if amplitude doubles?',
        back: 'Energy quadruples! $E \\propto A^2$. Double amplitude → 4× energy.',
        hint: 'Energy proportional to A²',
      },
      {
        topicId: energySHM.id,
        front: 'What happens to energy in a damped oscillator?',
        back: 'Total energy decreases over time due to friction. Converts to heat and sound. Amplitude decreases.',
        hint: 'Energy dissipated by friction',
      },
      {
        topicId: energySHM.id,
        front: 'At x = A/2, what fraction of energy is potential?',
        back: '$PE = \\frac{1}{2}k(A/2)^2 = \\frac{1}{8}kA^2 = \\frac{1}{4}E$ (25%). So KE = 75% of total.',
        hint: 'One quarter (25%)',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Energy in SHM')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: shmCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: shmCategory.id,
      },
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Simple Harmonic Motion Part 2!')
  console.log(`   Topics: 2 total (Introduction to SHM, Energy in SHM)`)
  console.log(`   Examples: ${exampleCount}`)
  console.log(`   Flashcards: ${flashcardCount}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
