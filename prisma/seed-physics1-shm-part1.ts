import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Simple Harmonic Motion Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or get the Simple Harmonic Motion category
  const shmCategory = await prisma.category.upsert({
    where: { slug: 'simple-harmonic-motion' },
    update: {},
    create: {
      slug: 'simple-harmonic-motion',
      name: 'Simple Harmonic Motion',
      description: 'Oscillatory motion, springs, pendulums, and energy in SHM',
      order: 5,
      courseId: physics1Course.id,
    },
  })

  console.log('✓ Created category: Simple Harmonic Motion')

  // ============================================
  // TOPIC 1: Introduction to Simple Harmonic Motion
  // ============================================
  const introSHM = await prisma.topic.upsert({
    where: { slug: 'introduction-to-shm' },
    update: {},
    create: {
      slug: 'introduction-to-shm',
      title: 'Introduction to Simple Harmonic Motion',
      description: 'Restoring forces, period, frequency, and Hooke\'s Law',
      order: 1,
      categoryId: shmCategory.id,
      isPremium: false,
      textContent: `
# 🌊 Introduction to Simple Harmonic Motion

## What is Simple Harmonic Motion (SHM)?

**Simple Harmonic Motion** is periodic oscillatory motion where the restoring force is proportional to displacement:

$$F = -kx$$

where:
- $F$ = restoring force (N)
- $k$ = spring constant or force constant (N/m)
- $x$ = displacement from equilibrium (m)
- **Negative sign**: force always points toward equilibrium

> **💡 Key Idea**: SHM occurs when an object experiences a restoring force proportional to its displacement from equilibrium. The negative sign means the force always tries to bring the object back to equilibrium.

---

## Examples of SHM

**Mass-Spring System:**
- Mass attached to spring
- Pull and release → oscillates
- Spring force: $F = -kx$ (Hooke's Law)

**Simple Pendulum:**
- Mass on string
- Pull aside and release → swings
- For small angles: acts like SHM
- Restoring force: component of gravity

**Other Examples:**
- Vibrating guitar string
- Atoms in a solid (vibrate about equilibrium)
- Molecular bonds
- Earthquake oscillations (seismograph)

---

## Hooke's Law

For an ideal spring, the force is proportional to displacement:

$$F = -kx$$

**Spring Constant** $k$:
- Measures spring "stiffness"
- Units: N/m
- **Large $k$**: stiff spring (hard to stretch)
- **Small $k$**: soft spring (easy to stretch)

**Equilibrium Position:**
- Where spring is unstretched ($x = 0$)
- No net force
- Object naturally returns here

---

## Characteristics of SHM

### Amplitude $A$

**Maximum displacement** from equilibrium:
- If object goes from $-A$ to $+A$, amplitude is $A$
- Always positive
- Units: meters
- Independent of mass or spring constant

### Period $T$

**Time for one complete oscillation**:
- From max displacement, through equilibrium, to other max, and back
- Units: seconds (s)
- Does NOT depend on amplitude!

For **mass-spring system**:
$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$

For **simple pendulum** (small angles):
$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

where $L$ is length, $g$ is gravitational acceleration.

### Frequency $f$

**Number of oscillations per second**:
$$f = \\frac{1}{T}$$

Units: Hz (hertz) = 1/s = cycles/second

For **mass-spring**:
$$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$

### Angular Frequency $\\omega$

$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

Units: rad/s

For **mass-spring**:
$$\\omega = \\sqrt{\\frac{k}{m}}$$

---

## Position, Velocity, and Acceleration in SHM

### Position

$$x(t) = A\\cos(\\omega t + \\phi)$$

or

$$x(t) = A\\sin(\\omega t + \\phi)$$

where:
- $A$ = amplitude
- $\\omega$ = angular frequency
- $\\phi$ = phase constant (depends on initial conditions)
- $t$ = time

### Velocity

$$v(t) = -A\\omega\\sin(\\omega t + \\phi)$$

**Maximum speed** (at equilibrium, $x = 0$):
$$v_{max} = A\\omega$$

### Acceleration

$$a(t) = -A\\omega^2\\cos(\\omega t + \\phi) = -\\omega^2 x$$

**Maximum acceleration** (at amplitude, $x = \\pm A$):
$$a_{max} = A\\omega^2$$

**Key relationship**:
$$a = -\\omega^2 x$$

Acceleration is always proportional to (and opposite in direction to) displacement!

---

## Mass-Spring System

For a mass $m$ attached to spring with constant $k$:

**Period**:
$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$

**Frequency**:
$$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$$

**Key Observations:**
- Heavier mass → longer period (slower oscillation)
- Stiffer spring (larger $k$) → shorter period (faster oscillation)
- **Independent of amplitude!** (as long as spring obeys Hooke's Law)

---

## Simple Pendulum

For a pendulum with length $L$ and small amplitude:

**Period**:
$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

**Key Observations:**
- Longer pendulum → longer period
- **Independent of mass!**
- **Independent of amplitude!** (for small angles < 15°)
- Only depends on length and gravity

**Note**: For large angles, period does depend on amplitude (not SHM anymore).

---

## ⚠️ Common Mistakes

### Mistake 1: Confusing Period and Frequency
- Period $T$: time for ONE oscillation (seconds)
- Frequency $f$: oscillations per second (Hz)
- They are reciprocals: $f = 1/T$

### Mistake 2: Thinking Amplitude Affects Period
In ideal SHM, period is **independent of amplitude**! 
- Large swing or small swing, same period
- As long as Hooke's Law holds

### Mistake 3: Sign of Restoring Force
Force is ALWAYS opposite to displacement: $F = -kx$
- If $x > 0$ (stretched right), then $F < 0$ (force left)
- If $x < 0$ (compressed left), then $F > 0$ (force right)

### Mistake 4: Pendulum Period and Mass
Pendulum period does NOT depend on mass!
- Only length $L$ and gravity $g$ matter
- Heavy or light bob, same period (if same length)

---

## Restoring Force

**Definition**: Force that always acts to return object to equilibrium

**Characteristics:**
- Always points toward equilibrium
- Proportional to displacement (for SHM)
- Creates oscillatory motion

**For Spring**: $F = -kx$

**For Pendulum** (small angle $\\theta$):
- Restoring force = component of weight tangent to arc
- $F = -mg\\sin\\theta \\approx -mg\\theta$ (for small $\\theta$)
- For small angles: $\\theta \\approx \\frac{x}{L}$
- So: $F \\approx -\\frac{mg}{L}x$ (proportional to $x$!)

---

## Problem-Solving Strategy

### For Mass-Spring Problems:

1. **Identify**: mass $m$, spring constant $k$
2. **Calculate period**: $T = 2\\pi\\sqrt{\\frac{m}{k}}$
3. **Calculate frequency**: $f = 1/T$
4. **Find amplitude**: from initial conditions
5. **Maximum speed**: $v_{max} = A\\omega$
6. **Maximum acceleration**: $a_{max} = A\\omega^2$

### For Pendulum Problems:

1. **Identify**: length $L$
2. **Check**: small angle approximation valid? ($\\theta < 15°$)
3. **Calculate period**: $T = 2\\pi\\sqrt{\\frac{L}{g}}$
4. **Note**: independent of mass and (small) amplitude

---

## Applications

### Clocks and Timekeeping
- Pendulum clocks: invented by Christiaan Huygens (1656)
- Period independent of amplitude (for small swings)
- Reliable timekeeping

### Seismographs
- Detect earthquake vibrations
- Record ground oscillations
- Mass-spring system measures ground motion

### Musical Instruments
- Vibrating strings (guitars, violins)
- Vibrating air columns (flutes, organ pipes)
- Vibrating membranes (drums)

### Molecular Vibrations
- Atoms in molecules vibrate about equilibrium
- Absorption spectra reveal molecular structure
- Chemical bond strength ~ spring constant

---

## Key Formulas Summary

| Quantity | Symbol | Mass-Spring | Pendulum |
|----------|--------|-------------|----------|
| **Restoring Force** | $F$ | $-kx$ | $-mg\\sin\\theta \\approx -mg\\theta$ |
| **Period** | $T$ | $2\\pi\\sqrt{\\frac{m}{k}}$ | $2\\pi\\sqrt{\\frac{L}{g}}$ |
| **Frequency** | $f$ | $\\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$ | $\\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$ |
| **Angular Frequency** | $\\omega$ | $\\sqrt{\\frac{k}{m}}$ | $\\sqrt{\\frac{g}{L}}$ |
| **Max Speed** | $v_{max}$ | $A\\omega$ | $A\\omega$ |
| **Max Acceleration** | $a_{max}$ | $A\\omega^2$ | $A\\omega^2$ |

**Universal**: $f = 1/T$, $\\omega = 2\\pi f$, $a = -\\omega^2 x$
`,
      exampleProblems: {
        create: [
          {
            question: 'A 0.5 kg mass is attached to a spring with spring constant k = 200 N/m. The mass is pulled 0.1 m from equilibrium and released. Find: (a) the period of oscillation, (b) the frequency, and (c) the maximum speed.',
            solution: `**Given Information:**
- Mass: $m = 0.5$ kg
- Spring constant: $k = 200$ N/m
- Amplitude: $A = 0.1$ m (pulled 0.1 m from equilibrium)

---

**(a) Find period of oscillation**

---

**Step 1: Calculate period**

$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$

$$T = 2\\pi\\sqrt{\\frac{0.5}{200}}$$

$$T = 2\\pi\\sqrt{0.0025}$$

$$T = 2\\pi(0.05)$$

$$T = 0.314 \\text{ s}$$

---

**Answer (a)**: Period = **0.314 s** (about 0.31 seconds per oscillation)

---

**(b) Find frequency**

---

**Step 2: Calculate frequency**

$$f = \\frac{1}{T}$$

$$f = \\frac{1}{0.314}$$

$$f = 3.18 \\text{ Hz}$$

---

**Answer (b)**: Frequency = **3.18 Hz** (about 3.2 oscillations per second)

---

**(c) Find maximum speed**

---

**Step 3: Calculate angular frequency**

$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.314} = 20 \\text{ rad/s}$$

Or directly:
$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{200}{0.5}} = \\sqrt{400} = 20 \\text{ rad/s}$$

---

**Step 4: Calculate maximum speed**

Maximum speed occurs at equilibrium position:

$$v_{max} = A\\omega$$

$$v_{max} = (0.1)(20)$$

$$v_{max} = 2.0 \\text{ m/s}$$

---

**Answer (c)**: Maximum speed = **2.0 m/s**

**Summary**: The mass oscillates with period 0.31 s, completing about 3.2 cycles per second, reaching a maximum speed of 2 m/s as it passes through equilibrium.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A simple pendulum has a length of 2 m. (a) What is its period on Earth? (b) If the same pendulum were on the Moon (where g = 1.6 m/s²), what would its period be?',
            solution: `**Given Information:**
- Length: $L = 2$ m
- Earth: $g_{Earth} = 9.8$ m/s²
- Moon: $g_{Moon} = 1.6$ m/s²

---

**(a) Find period on Earth**

---

**Step 1: Apply pendulum period formula**

$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

$$T_{Earth} = 2\\pi\\sqrt{\\frac{2}{9.8}}$$

$$T_{Earth} = 2\\pi\\sqrt{0.204}$$

$$T_{Earth} = 2\\pi(0.452)$$

$$T_{Earth} = 2.84 \\text{ s}$$

---

**Answer (a)**: Period on Earth = **2.84 s**

---

**(b) Find period on Moon**

---

**Step 2: Apply formula with Moon's gravity**

$$T_{Moon} = 2\\pi\\sqrt{\\frac{L}{g_{Moon}}}$$

$$T_{Moon} = 2\\pi\\sqrt{\\frac{2}{1.6}}$$

$$T_{Moon} = 2\\pi\\sqrt{1.25}$$

$$T_{Moon} = 2\\pi(1.118)$$

$$T_{Moon} = 7.02 \\text{ s}$$

---

**Step 3: Compare the periods**

$$\\frac{T_{Moon}}{T_{Earth}} = \\frac{7.02}{2.84} \\approx 2.47$$

The Moon pendulum has a period about **2.5 times longer** than on Earth!

---

**Answer (b)**: Period on Moon = **7.02 s**

**Explanation**: Lower gravity means weaker restoring force, so the pendulum oscillates more slowly. 

**Ratio check**: 
$$\\frac{T_{Moon}}{T_{Earth}} = \\sqrt{\\frac{g_{Earth}}{g_{Moon}}} = \\sqrt{\\frac{9.8}{1.6}} = \\sqrt{6.125} \\approx 2.47 \\quad ✓$$

**Note**: This is why pendulum clocks would run slower on the Moon!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 2 kg mass on a spring oscillates with amplitude 0.15 m and period 1.5 s. Find: (a) the spring constant, (b) the maximum speed, (c) the maximum acceleration, and (d) the speed when the displacement is 0.1 m from equilibrium.',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Amplitude: $A = 0.15$ m
- Period: $T = 1.5$ s

---

**(a) Find spring constant**

---

**Step 1: Use period formula and solve for k**

$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$

Square both sides:
$$T^2 = 4\\pi^2\\frac{m}{k}$$

Solve for $k$:
$$k = \\frac{4\\pi^2 m}{T^2}$$

$$k = \\frac{4\\pi^2 (2)}{(1.5)^2}$$

$$k = \\frac{4(9.87)(2)}{2.25}$$

$$k = \\frac{78.96}{2.25}$$

$$k = 35.1 \\text{ N/m}$$

---

**Answer (a)**: Spring constant = **35.1 N/m**

---

**(b) Find maximum speed**

---

**Step 2: Calculate angular frequency**

$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{1.5} = 4.19 \\text{ rad/s}$$

---

**Step 3: Calculate maximum speed**

$$v_{max} = A\\omega$$

$$v_{max} = (0.15)(4.19)$$

$$v_{max} = 0.629 \\text{ m/s}$$

---

**Answer (b)**: Maximum speed = **0.63 m/s**

---

**(c) Find maximum acceleration**

---

**Step 4: Calculate maximum acceleration**

$$a_{max} = A\\omega^2$$

$$a_{max} = (0.15)(4.19)^2$$

$$a_{max} = (0.15)(17.6)$$

$$a_{max} = 2.64 \\text{ m/s}^2$$

---

**Answer (c)**: Maximum acceleration = **2.64 m/s²**

---

**(d) Find speed at x = 0.1 m**

---

**Step 5: Use energy conservation**

Total energy (constant):
$$E = \\frac{1}{2}kA^2$$

At position $x$:
$$E = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

---

**Step 6: Set equations equal and solve for v**

$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

Multiply by 2 and cancel:
$$kA^2 = kx^2 + mv^2$$

$$k(A^2 - x^2) = mv^2$$

$$v^2 = \\frac{k}{m}(A^2 - x^2)$$

Note: $\\frac{k}{m} = \\omega^2 = (4.19)^2 = 17.6$ rad²/s²

$$v^2 = 17.6[(0.15)^2 - (0.1)^2]$$

$$v^2 = 17.6[0.0225 - 0.01]$$

$$v^2 = 17.6(0.0125)$$

$$v^2 = 0.22$$

$$v = 0.47 \\text{ m/s}$$

---

**Answer (d)**: Speed at $x = 0.1$ m is **0.47 m/s**

**Check**: At $x = 0$: $v = \\sqrt{17.6(0.0225)} = 0.63$ m/s = $v_{max}$ ✓

At $x = A = 0.15$ m: $v = \\sqrt{17.6(0)} = 0$ m/s ✓

Makes sense: speed is maximum at equilibrium, zero at amplitude!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Introduction to Simple Harmonic Motion')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: introSHM.id,
        front: 'What is the defining characteristic of Simple Harmonic Motion?',
        back: 'Restoring force proportional to displacement: $F = -kx$. Negative sign means force always points toward equilibrium.',
        hint: 'Force proportional to displacement',
      },
      {
        topicId: introSHM.id,
        front: 'What is Hooke\'s Law?',
        back: '$F = -kx$ where $k$ is spring constant (N/m). Larger $k$ = stiffer spring.',
        hint: 'Spring force law',
      },
      {
        topicId: introSHM.id,
        front: 'What is the period formula for a mass-spring system?',
        back: '$T = 2\\pi\\sqrt{\\frac{m}{k}}$ - Heavier mass or softer spring → longer period. Independent of amplitude!',
        hint: '2π times square root of m/k',
      },
      {
        topicId: introSHM.id,
        front: 'What is the period formula for a simple pendulum?',
        back: '$T = 2\\pi\\sqrt{\\frac{L}{g}}$ - Only depends on length and gravity. Independent of mass and (small) amplitude!',
        hint: '2π times square root of L/g',
      },
      {
        topicId: introSHM.id,
        front: 'What is frequency and how does it relate to period?',
        back: 'Frequency $f$ = oscillations per second (Hz). $f = \\frac{1}{T}$ (reciprocal of period)',
        hint: 'f = 1/T',
      },
      {
        topicId: introSHM.id,
        front: 'What is the maximum speed in SHM?',
        back: '$v_{max} = A\\omega$ where $A$ is amplitude and $\\omega$ is angular frequency. Occurs at equilibrium position.',
        hint: 'Amplitude times angular frequency',
      },
      {
        topicId: introSHM.id,
        front: 'What is the relationship between acceleration and displacement in SHM?',
        back: '$a = -\\omega^2 x$ - Acceleration is always proportional to (and opposite) displacement.',
        hint: 'a = -ω²x',
      },
      {
        topicId: introSHM.id,
        front: 'Does amplitude affect the period of SHM?',
        back: 'NO! Period is independent of amplitude (for ideal SHM). Large or small swing, same period.',
        hint: 'Period independent of amplitude',
      },
      {
        topicId: introSHM.id,
        front: 'Does the mass of a pendulum bob affect its period?',
        back: 'NO! Pendulum period $T = 2\\pi\\sqrt{\\frac{L}{g}}$ depends only on length and gravity, not mass.',
        hint: 'Period independent of mass for pendulum',
      },
      {
        topicId: introSHM.id,
        front: 'What is angular frequency ω and how does it relate to regular frequency?',
        back: '$\\omega = 2\\pi f = \\frac{2\\pi}{T}$ (units: rad/s). For mass-spring: $\\omega = \\sqrt{\\frac{k}{m}}$',
        hint: 'ω = 2πf',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Introduction to SHM')

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

  console.log('\n✅ Successfully seeded AP Physics 1 - Simple Harmonic Motion Part 1!')
  console.log(`   Topics: 1`)
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
