import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Fluid Mechanics Part 1...')

  // Find the AP Physics 2 course
  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  // Create or get the Fluid Mechanics category
  const fluidCategory = await prisma.category.upsert({
    where: { slug: 'fluid-mechanics' },
    update: {},
    create: {
      slug: 'fluid-mechanics',
      name: 'Fluid Mechanics',
      description: 'Density, pressure, buoyancy, and fluid dynamics',
      order: 0,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Fluid Mechanics')

  // ============================================
  // TOPIC 1: Density and Pressure
  // ============================================
  const densityPressure = await prisma.topic.upsert({
    where: { slug: 'density-and-pressure' },
    update: {},
    create: {
      slug: 'density-and-pressure',
      title: 'Density and Pressure',
      description: 'Fluid density, pressure, Pascal\'s principle, and pressure variation with depth',
      order: 1,
      categoryId: fluidCategory.id,
      isPremium: false,
      textContent: `
# 💧 Density and Pressure

## Introduction

Fluid mechanics begins with understanding the fundamental properties of fluids: **density** and **pressure**. These concepts form the foundation for analyzing fluid behavior in both static and dynamic situations.

---

## Density

**Density** is mass per unit volume, measuring how tightly matter is packed:

$$\\rho = \\frac{m}{V}$$

where:
- $\\rho$ (rho) = density (kg/m³)
- $m$ = mass (kg)
- $V$ = volume (m³)

### Common Densities:

| Material | Density (kg/m³) |
|----------|----------------|
| Water    | 1000          |
| Ice      | 917           |
| Air (STP)| 1.29          |
| Mercury  | 13,600        |
| Aluminum | 2700          |
| Gold     | 19,300        |

### Specific Gravity

**Specific Gravity (SG)** is the ratio of a substance's density to water's density:

$$SG = \\frac{\\rho_{substance}}{\\rho_{water}}$$

- Dimensionless (no units)
- SG < 1: floats in water
- SG > 1: sinks in water

---

## Pressure

**Pressure** is force per unit area:

$$P = \\frac{F}{A}$$

where:
- $P$ = pressure (Pa or N/m²)
- $F$ = force perpendicular to surface (N)
- $A$ = area (m²)

### Common Units:

- **Pascal (Pa)**: 1 Pa = 1 N/m²
- **Atmosphere (atm)**: 1 atm = 101,325 Pa ≈ 101 kPa
- **Bar**: 1 bar = 100,000 Pa
- **mmHg**: 760 mmHg = 1 atm
- **psi**: 14.7 psi = 1 atm

---

## Pressure in Fluids

Unlike solids, fluids cannot sustain shear stress - they flow. This creates unique pressure properties:

1. **Pressure acts perpendicular to surfaces** - fluid pressure always pushes normal to any surface

2. **Pressure is isotropic** - equal in all directions at a point

3. **Pressure increases with depth**

### Pressure vs. Depth

For a fluid at rest, pressure increases linearly with depth:

$$P = P_0 + \\rho g h$$

where:
- $P$ = pressure at depth $h$
- $P_0$ = pressure at surface (usually atmospheric)
- $\\rho$ = fluid density (kg/m³)
- $g$ = 9.8 m/s²
- $h$ = depth below surface (m)

> **💡 Key Insight**: Pressure depends only on **vertical depth**, not container shape!

### Gauge vs. Absolute Pressure

- **Absolute pressure**: Total pressure including atmosphere
  $$P_{absolute} = P_{atm} + P_{gauge}$$

- **Gauge pressure**: Pressure relative to atmosphere
  $$P_{gauge} = \\rho g h$$

Most pressure gauges (like tire gauges) read **gauge pressure**.

---

## Pascal's Principle

**Pascal's Principle**: A change in pressure applied to an enclosed fluid is transmitted undiminished to every point in the fluid.

### Hydraulic Systems

This principle enables hydraulic lifts:

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$

Force multiplication:
$$F_2 = F_1 \\frac{A_2}{A_1}$$

**Trade-off**: Volume conservation means:
$$d_1 A_1 = d_2 A_2$$

Small piston moves far, large piston moves little distance.

---

## Atmospheric Pressure

At sea level:

$$P_{atm} = 101,325 \\text{ Pa} = 101.3 \\text{ kPa} = 1 \\text{ atm}$$

This is equivalent to:
- 10.3 m column of water
- 760 mm column of mercury

Atmospheric pressure **decreases with altitude**.

---

## Problem-Solving Strategy

1. Identify pressure type needed (gauge or absolute)
2. Choose reference point (usually surface)
3. Apply $P = P_0 + \\rho g h$
4. Remember $h$ is **vertical depth only**
5. Check units (convert to SI)

---

## Common Mistakes

❌ Forgetting atmospheric pressure in absolute calculations
❌ Using horizontal distance for $h$
❌ Mixing gauge and absolute pressure
❌ Unit confusion (1 atm ≠ 1 Pa)
❌ Thinking pressure depends on container shape
`,
    },
  })

  console.log('✓ Created topic: Density and Pressure')

  // Examples for Density and Pressure
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: densityPressure.id,
        question: 'A cube of aluminum has sides of length 5.0 cm. The density of aluminum is 2700 kg/m³. What is the mass of the cube?',
        solution: `**Given:**
- Side length: $L = 5.0$ cm $= 0.050$ m
- Density: $\\rho_{Al} = 2700$ kg/m³

**Find:** Mass $m$

**Solution:**

Step 1: Calculate volume of cube.
$$V = L^3 = (0.050)^3 = 1.25 \\times 10^{-4} \\text{ m}^3$$

Step 2: Use density formula.
$$m = \\rho V = (2700)(1.25 \\times 10^{-4}) = 0.338 \\text{ kg}$$

**Answer:** **338 g**`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: densityPressure.id,
        question: 'A submarine is at a depth of 200 m below the ocean surface. The density of seawater is 1025 kg/m³. What is the absolute pressure at this depth? What is the gauge pressure?',
        solution: `**Given:**
- Depth: $h = 200$ m
- Seawater density: $\\rho = 1025$ kg/m³
- $g = 9.8$ m/s²
- $P_{atm} = 1.01 \\times 10^5$ Pa

**Find:** Absolute and gauge pressure

**Solution:**

Step 1: Calculate gauge pressure (water only).
$$P_{gauge} = \\rho g h = (1025)(9.8)(200)$$
$$P_{gauge} = 2.01 \\times 10^6 \\text{ Pa} = 2.01 \\text{ MPa}$$

Step 2: Calculate absolute pressure (total).
$$P_{absolute} = P_{atm} + P_{gauge}$$
$$P_{absolute} = 1.01 \\times 10^5 + 2.01 \\times 10^6$$
$$P_{absolute} = 2.11 \\times 10^6 \\text{ Pa} = 2.11 \\text{ MPa}$$

Step 3: Convert to atmospheres.
$$P_{absolute} = \\frac{2.11 \\times 10^6}{1.01 \\times 10^5} \\approx 20.9 \\text{ atm}$$

**Answer:** 
- Gauge: **2.01 MPa**
- Absolute: **2.11 MPa or 20.9 atm**`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: densityPressure.id,
        question: 'A hydraulic lift has an input piston (diameter 5.0 cm) and output piston (diameter 30 cm). (a) What force must be applied to lift a 2000 kg car? (b) If the input piston is pushed down 20 cm, how far does the car rise?',
        solution: `**Given:**
- $d_1 = 5.0$ cm $= 0.050$ m, $d_2 = 30$ cm $= 0.30$ m
- Car mass: $m = 2000$ kg

**Solution:**

**Part (a):** Find input force

Step 1: Calculate areas.
$$A_1 = \\pi r_1^2 = \\pi (0.025)^2 = 1.96 \\times 10^{-3} \\text{ m}^2$$
$$A_2 = \\pi r_2^2 = \\pi (0.15)^2 = 7.07 \\times 10^{-2} \\text{ m}^2$$

Step 2: Find output force (car weight).
$$F_2 = mg = (2000)(9.8) = 19,600 \\text{ N}$$

Step 3: Apply Pascal's principle.
$$F_1 = F_2 \\frac{A_1}{A_2} = (19,600) \\frac{1.96 \\times 10^{-3}}{7.07 \\times 10^{-2}}$$
$$F_1 = 543 \\text{ N}$$

**Part (b):** Find output displacement

Step 4: Use volume conservation.
$$A_1 d_1 = A_2 d_2$$
$$d_2 = d_1 \\frac{A_1}{A_2} = (0.20) \\frac{1.96 \\times 10^{-3}}{7.07 \\times 10^{-2}}$$
$$d_2 = 0.0055 \\text{ m} = 5.5 \\text{ mm}$$

**Answer:**
- **(a)** Input force: **543 N**
- **(b)** Car rises: **5.5 mm**

Mechanical advantage = 36, but distance disadvantage = 36. Energy conserved!`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  // Flashcards for Density and Pressure
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: densityPressure.id,
        front: 'What is the definition of density and its SI unit?',
        back: 'Density is mass per unit volume: ρ = m/V. SI unit is kg/m³. It measures how tightly matter is packed.',
      },
      {
        topicId: densityPressure.id,
        front: 'What is the density of water in kg/m³?',
        back: 'ρ_water = 1000 kg/m³ (or 1 g/cm³). This is the reference for specific gravity calculations.',
      },
      {
        topicId: densityPressure.id,
        front: 'Define pressure and give its SI unit.',
        back: 'Pressure is force per unit area: P = F/A. SI unit is the Pascal (Pa), where 1 Pa = 1 N/m². Pressure acts perpendicular to surfaces.',
      },
      {
        topicId: densityPressure.id,
        front: 'How does pressure vary with depth in a fluid at rest?',
        back: 'Pressure increases linearly with depth: P = P₀ + ρgh, where P₀ is surface pressure, ρ is fluid density, g is gravity, and h is depth.',
      },
      {
        topicId: densityPressure.id,
        front: 'What is atmospheric pressure at sea level in Pascals?',
        back: 'P_atm = 101,325 Pa ≈ 101 kPa = 1.01 × 10⁵ Pa = 1 atm. This is from the weight of Earth\'s atmosphere.',
      },
      {
        topicId: densityPressure.id,
        front: 'What is the difference between gauge and absolute pressure?',
        back: 'Gauge: P_gauge = P - P_atm (above atmospheric). Absolute: P_absolute = P_atm + P_gauge (total including atmosphere).',
      },
      {
        topicId: densityPressure.id,
        front: 'State Pascal\'s Principle.',
        back: 'A change in pressure applied to an enclosed fluid is transmitted undiminished to every point in the fluid and container walls. Enables hydraulic systems.',
      },
      {
        topicId: densityPressure.id,
        front: 'In hydraulic systems, how are forces related on different pistons?',
        back: 'F₁/A₁ = F₂/A₂. Small force on small piston produces large force on large piston: F₂ = F₁(A₂/A₁). Mechanical advantage comes at cost of distance.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Density and Pressure')

  // ============================================
  // TOPIC 2: Buoyancy and Archimedes' Principle
  // ============================================
  const buoyancy = await prisma.topic.upsert({
    where: { slug: 'buoyancy-archimedes-principle' },
    update: {},
    create: {
      slug: 'buoyancy-archimedes-principle',
      title: "Buoyancy and Archimedes' Principle",
      description: 'Buoyant force, floating and sinking, apparent weight in fluids',
      order: 2,
      categoryId: fluidCategory.id,
      isPremium: false,
      textContent: `
# ⬆️ Buoyancy and Archimedes' Principle

## Introduction

When objects are submerged in fluids, they experience an upward force called **buoyancy**. This explains why ships float, balloons rise, and you feel lighter in water.

---

## Archimedes' Principle

**Archimedes' Principle**: An object fully or partially submerged in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced.

$$F_B = \\rho_{fluid} \\cdot g \\cdot V_{displaced}$$

where:
- $F_B$ = buoyant force (N)
- $\\rho_{fluid}$ = density of the fluid (kg/m³)
- $g$ = 9.8 m/s²
- $V_{displaced}$ = volume of fluid displaced (m³)

### Key Insights:

1. **Buoyant force depends on fluid density**, not object density
2. **Buoyant force depends on displaced volume**
3. **Direction is always upward** (opposes gravity)

---

## Floating, Sinking, and Equilibrium

Two forces act on a submerged object:
- **Weight**: $F_g = mg = \\rho_{object} g V_{object}$ ⬇️
- **Buoyant force**: $F_B = \\rho_{fluid} g V_{displaced}$ ⬆️

### Three Cases:

**1. Object Sinks** ($\\rho_{object} > \\rho_{fluid}$)
- Weight > Buoyant force
- Net force downward
- Accelerates to bottom

**2. Object Floats** ($\\rho_{object} < \\rho_{fluid}$)
- Partially submerged
- At equilibrium: $F_B = F_g$
- Fraction submerged: $\\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{object}}{\\rho_{fluid}}$

**3. Neutral Buoyancy** ($\\rho_{object} = \\rho_{fluid}$)
- Weight = Buoyant force
- Remains at any depth (like submarine)
- Fully submerged, no net force

---

## Fraction Submerged

For a floating object in equilibrium:

$$\\frac{V_{submerged}}{V_{total}} = \\frac{\\rho_{object}}{\\rho_{fluid}}$$

**Example:** Ice ($\\rho = 917$ kg/m³) in water ($\\rho = 1000$ kg/m³):

$$\\frac{V_{sub}}{V_{total}} = \\frac{917}{1000} = 0.917 = 91.7\\%$$

This is why **icebergs show only ~10% above water**!

---

## Apparent Weight

When submerged in a fluid, an object's **apparent weight** is reduced:

$$W_{apparent} = W_{actual} - F_B$$

For a fully submerged object:

$$W_{apparent} = \\rho_{object} gV - \\rho_{fluid} gV = (\\rho_{object} - \\rho_{fluid}) gV$$

> **💡 This is why you feel lighter in a pool** - buoyant force reduces apparent weight!

---

## Why Buoyancy Occurs (Pressure Explanation)

Buoyancy arises from **pressure differences** in the fluid:
- Bottom of object: higher pressure (greater depth)
- Top of object: lower pressure
- **Net upward force** from pressure difference

For a cube of height $h$, area $A$:
$$F_B = (P_{bottom} - P_{top}) \\cdot A = \\rho g h \\cdot A = \\rho g V$$

Matches Archimedes' Principle! ✓

---

## Applications

### Ships and Boats
- Average density (including air spaces) < water density
- Displace enough water so buoyant force = weight

### Hot Air Balloons
- Hot air less dense than cool air
- Buoyant force from cool air > weight → rises

### Submarines
Control depth by adjusting average density:
- **Dive**: Fill ballast tanks with water → ↑ density → sink
- **Surface**: Blow water out → ↓ density → rise  
- **Cruise**: Balance water/air → neutral buoyancy

---

## Problem-Solving Strategy

1. Draw free body diagram (weight down, buoyancy up)
2. Identify situation: floating, sinking, or neutral?
3. Apply Archimedes': $F_B = \\rho_{fluid} g V_{displaced}$
4. For equilibrium (floating): $F_B = F_g$
5. For apparent weight: $W_{app} = W - F_B$
6. Watch volumes: fully or partially submerged?

---

## Common Mistakes

❌ Using object density for $F_B$ (use fluid density!)
❌ Forgetting partial submersion (floating objects)
❌ Sign errors with apparent weight
❌ Assuming floating = fully submerged
❌ Unit inconsistency (keep kg/m³, m³)
`,
    },
  })

  console.log("✓ Created topic: Buoyancy and Archimedes' Principle")

  // Examples for Buoyancy
  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: buoyancy.id,
        question: 'A solid cube with sides of 10 cm is fully submerged in water. What is the buoyant force on the cube? (ρ_water = 1000 kg/m³)',
        solution: `**Given:**
- Side length: $L = 10$ cm $= 0.10$ m
- Water density: $\\rho = 1000$ kg/m³

**Find:** Buoyant force $F_B$

**Solution:**

Step 1: Calculate volume.
$$V = L^3 = (0.10)^3 = 1.0 \\times 10^{-3} \\text{ m}^3 = 1.0 \\text{ L}$$

Step 2: Apply Archimedes' Principle.
$$F_B = \\rho_{fluid} g V_{displaced}$$

Since fully submerged: $V_{displaced} = V$

$$F_B = (1000)(9.8)(1.0 \\times 10^{-3}) = 9.8 \\text{ N}$$

**Answer:** **9.8 N** upward

This equals the weight of 1.0 kg (1 liter) of water displaced! ✓`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: buoyancy.id,
        question: 'A wooden block (ρ = 600 kg/m³) floats in water (ρ = 1000 kg/m³). What fraction is submerged? If the block has mass 2.0 kg, what volume of water is displaced?',
        solution: `**Given:**
- Wood: $\\rho_{wood} = 600$ kg/m³
- Water: $\\rho_{water} = 1000$ kg/m³
- Mass: $m = 2.0$ kg

**Solution:**

**Part (a):** Fraction submerged

$$\\frac{V_{sub}}{V_{total}} = \\frac{\\rho_{object}}{\\rho_{fluid}} = \\frac{600}{1000} = 0.60 = 60\\%$$

**Part (b):** Volume displaced

Step 1: Find total volume.
$$V_{total} = \\frac{m}{\\rho_{wood}} = \\frac{2.0}{600} = 3.33 \\times 10^{-3} \\text{ m}^3$$

Step 2: Find displaced volume.
$$V_{displaced} = 0.60 \\times 3.33 \\times 10^{-3} = 2.0 \\times 10^{-3} \\text{ m}^3 = 2.0 \\text{ L}$$

**Verification:**
$$F_B = (1000)(9.8)(2.0 \\times 10^{-3}) = 19.6 \\text{ N}$$
$$F_g = (2.0)(9.8) = 19.6 \\text{ N}$$ ✓

**Answer:**
- **(a)** **60% submerged**
- **(b)** **2.0 L displaced**`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: buoyancy.id,
        question: 'A brass weight (m = 5.0 kg, ρ = 8500 kg/m³) is held underwater by a string. (a) What is its weight in air? (b) What is its apparent weight in water? (c) What is the string tension?',
        solution: `**Given:**
- Mass: $m = 5.0$ kg
- Brass: $\\rho_{brass} = 8500$ kg/m³
- Water: $\\rho_{water} = 1000$ kg/m³

**Solution:**

**Part (a):** Weight in air
$$W = mg = (5.0)(9.8) = 49 \\text{ N}$$

**Part (b):** Apparent weight

Step 1: Find volume.
$$V = \\frac{m}{\\rho_{brass}} = \\frac{5.0}{8500} = 5.88 \\times 10^{-4} \\text{ m}^3$$

Step 2: Calculate buoyant force.
$$F_B = \\rho_{water} g V = (1000)(9.8)(5.88 \\times 10^{-4}) = 5.76 \\text{ N}$$

Step 3: Find apparent weight.
$$W_{apparent} = W - F_B = 49 - 5.76 = 43.2 \\text{ N}$$

**Part (c):** String tension

The string provides the apparent weight:
$$T = W_{apparent} = 43.2 \\text{ N}$$

**Alternative method:**
$$W_{app} = W\\left(1 - \\frac{\\rho_{fluid}}{\\rho_{object}}\\right) = 49\\left(1 - \\frac{1000}{8500}\\right) = 43.2 \\text{ N}$$ ✓

**Answer:**
- **(a)** **49 N** in air
- **(b)** **43.2 N** apparent (12% lighter!)
- **(c)** **43.2 N** tension`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  // Flashcards for Buoyancy
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: buoyancy.id,
        front: "State Archimedes' Principle.",
        back: 'An object submerged in a fluid experiences an upward buoyant force equal to the weight of fluid displaced: F_B = ρ_fluid × g × V_displaced.',
      },
      {
        topicId: buoyancy.id,
        front: 'What determines whether an object floats or sinks?',
        back: 'Compare densities: ρ_object < ρ_fluid → floats; ρ_object > ρ_fluid → sinks; ρ_object = ρ_fluid → neutral buoyancy.',
      },
      {
        topicId: buoyancy.id,
        front: 'For a floating object, what fraction is submerged?',
        back: 'V_submerged/V_total = ρ_object/ρ_fluid. Example: Ice (917 kg/m³) in water is 91.7% submerged, so icebergs show ~10% above water.',
      },
      {
        topicId: buoyancy.id,
        front: 'What is apparent weight and how is it calculated?',
        back: 'Apparent weight is the weight felt in a fluid: W_apparent = W - F_B. Objects feel lighter in fluids due to buoyant force opposing gravity.',
      },
      {
        topicId: buoyancy.id,
        front: 'Why does buoyancy occur? (Pressure explanation)',
        back: 'Pressure increases with depth. Bottom of object has higher pressure than top, creating net upward force: F_B = ΔP × A = ρghA = ρgV.',
      },
      {
        topicId: buoyancy.id,
        front: "Does buoyant force depend on the object's density?",
        back: 'No! F_B depends only on fluid density and displaced volume: F_B = ρ_fluid × g × V_displaced. Object density determines if it floats, not F_B magnitude.',
      },
      {
        topicId: buoyancy.id,
        front: 'How do submarines control their depth?',
        back: 'Adjust average density with ballast tanks: Fill with water to sink (increase density), blow water out to rise (decrease density), balance for neutral buoyancy.',
      },
      {
        topicId: buoyancy.id,
        front: 'Why do hot air balloons rise?',
        back: 'Hot air is less dense than cool air. Buoyant force from surrounding cool air exceeds weight of balloon + hot air, producing net upward force.',
      },
    ],
  })

  console.log("✓ Created 8 flashcards for Buoyancy and Archimedes' Principle")

  console.log('\n✅ Successfully seeded AP Physics 2 - Fluid Mechanics Part 1!')
  console.log('   Topics: 2')
  console.log('   Examples: 6')
  console.log('   Flashcards: 16')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
