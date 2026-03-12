import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Fluid Mechanics Part 2...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const fluidCategory = await prisma.category.findFirst({
    where: {
      slug: 'fluid-mechanics',
      courseId: physics2Course.id,
    },
  })

  if (!fluidCategory) {
    throw new Error('Fluid Mechanics category not found')
  }

  console.log('✓ Found category: Fluid Mechanics')

  // ============================================
  // TOPIC 3: Fluid Dynamics and Continuity
  // ============================================
  const fluidDynamics = await prisma.topic.upsert({
    where: { slug: 'fluid-dynamics-continuity' },
    update: {},
    create: {
      slug: 'fluid-dynamics-continuity',
      title: 'Fluid Dynamics and Continuity',
      description: 'Flow rate, continuity equation, and fluid motion in pipes',
      order: 3,
      categoryId: fluidCategory.id,
      isPremium: false,
      textContent: `
# 🌊 Fluid Dynamics and Continuity

## Introduction

So far we've studied fluids at rest (**fluid statics**). Now we examine fluids in motion (**fluid dynamics**). Understanding how fluids flow is essential for everything from plumbing to blood circulation to airplane design.

---

## Types of Fluid Flow

### Laminar Flow
- Smooth, orderly flow in parallel layers
- No mixing between layers
- Occurs at low velocities
- Example: Honey pouring slowly

### Turbulent Flow
- Chaotic, irregular flow with eddies
- Significant mixing
- Occurs at high velocities
- Example: Rapids in a river

### Steady Flow
- Velocity at any point doesn't change with time
- Fluid properties constant at each location
- Most problems assume steady flow

---

## Flow Rate

**Volume flow rate** (Q) is the volume of fluid passing a point per unit time:

$$Q = \\frac{V}{t}$$

Units: m³/s (or L/s, gallons/min)

For flow through a pipe:

$$Q = A \\cdot v$$

where:
- $A$ = cross-sectional area (m²)
- $v$ = flow speed (m/s)

### Mass Flow Rate

$$\\frac{dm}{dt} = \\rho \\cdot Q = \\rho A v$$

For incompressible fluids (liquids), density is constant.

---

## Equation of Continuity

For an **incompressible fluid** in **steady flow**, mass is conserved. This leads to the **continuity equation**:

$$A_1 v_1 = A_2 v_2$$

or equivalently:

$$Q_1 = Q_2$$

**Key Insight**: Volume flow rate is constant throughout the pipe.

### What This Means:

- **Wide pipe** (large A) → **slow flow** (small v)
- **Narrow pipe** (small A) → **fast flow** (large v)

This is why:
- Water shoots faster from a partially covered hose
- Rivers flow faster through narrow sections
- Blood flows faster through capillaries (collectively larger area than arteries)

---

## Derivation of Continuity

Consider fluid flowing through a pipe that changes diameter:

**In time Δt:**
- Volume entering at point 1: $V_1 = A_1 v_1 \\Delta t$
- Volume leaving at point 2: $V_2 = A_2 v_2 \\Delta t$

**Conservation of mass** (incompressible fluid):
$$V_1 = V_2$$
$$A_1 v_1 \\Delta t = A_2 v_2 \\Delta t$$
$$A_1 v_1 = A_2 v_2$$ ✓

---

## Applications

### Garden Hose
When you cover part of the opening:
- Area decreases → velocity increases
- Water sprays farther

### Blood Flow
- Aorta: large area, slower velocity
- Capillaries (total): larger total area, slower velocity
- Individual capillary: tiny area, moderate velocity

### River Dynamics
- Wide sections: slow, deep flow
- Narrow sections: fast, shallow flow
- Total flow rate constant

---

## Problem-Solving Strategy

1. **Identify the two cross-sections** where you know/need information
2. **Write the continuity equation**: $A_1 v_1 = A_2 v_2$
3. **Express areas**: 
   - Circle: $A = \\pi r^2$
   - Rectangle: $A = w \\times h$
4. **Solve for unknown** (usually velocity or diameter)
5. **Check units** and reasonableness

---

## Common Mistakes

❌ Using diameter instead of radius in area formula
❌ Forgetting to square the radius: $A = \\pi r^2$ not $\\pi r$
❌ Assuming velocity is constant (only flow rate Q is constant)
❌ Applying to compressible fluids (gases) without accounting for density changes
❌ Confusing cross-sectional area with surface area
`,
    },
  })

  console.log('✓ Created topic: Fluid Dynamics and Continuity')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: fluidDynamics.id,
        question: 'Water flows through a pipe with a cross-sectional area of 0.50 m² at a velocity of 2.0 m/s. What is the volume flow rate?',
        solution: `**Given:**
- Area: $A = 0.50$ m²
- Velocity: $v = 2.0$ m/s

**Find:** Volume flow rate $Q$

**Solution:**

$$Q = A \\cdot v = (0.50)(2.0) = 1.0 \\text{ m}^3\\text{/s}$$

**Answer:** **1.0 m³/s** (or 1000 L/s)

This is a lot of water - equivalent to filling a cubic meter container every second!`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: fluidDynamics.id,
        question: 'Water flows through a pipe at 3.0 m/s. The pipe narrows from a diameter of 8.0 cm to 4.0 cm. What is the water velocity in the narrow section?',
        solution: `**Given:**
- Initial velocity: $v_1 = 3.0$ m/s
- Initial diameter: $d_1 = 8.0$ cm $= 0.080$ m
- Final diameter: $d_2 = 4.0$ cm $= 0.040$ m

**Find:** Final velocity $v_2$

**Solution:**

Step 1: Calculate areas.
$$A_1 = \\pi r_1^2 = \\pi (0.040)^2 = 5.03 \\times 10^{-3} \\text{ m}^2$$
$$A_2 = \\pi r_2^2 = \\pi (0.020)^2 = 1.26 \\times 10^{-3} \\text{ m}^2$$

Step 2: Apply continuity equation.
$$A_1 v_1 = A_2 v_2$$
$$v_2 = v_1 \\frac{A_1}{A_2}$$

Step 3: Calculate ratio of areas.
$$\\frac{A_1}{A_2} = \\frac{\\pi r_1^2}{\\pi r_2^2} = \\frac{r_1^2}{r_2^2} = \\frac{(0.040)^2}{(0.020)^2} = 4$$

Step 4: Find final velocity.
$$v_2 = 3.0 \\times 4 = 12 \\text{ m/s}$$

**Answer:** **12 m/s**

The diameter halved, so the area became 1/4 as large. Therefore velocity must quadruple to maintain constant flow rate.`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: fluidDynamics.id,
        question: 'A garden hose (diameter 2.0 cm) delivers water at 0.60 L/s. (a) What is the water speed in the hose? (b) A nozzle reduces the diameter to 0.50 cm. What is the exit speed? (c) How much faster does water exit compared to the hose?',
        solution: `**Given:**
- Hose diameter: $d_1 = 2.0$ cm $= 0.020$ m
- Flow rate: $Q = 0.60$ L/s $= 6.0 \\times 10^{-4}$ m³/s
- Nozzle diameter: $d_2 = 0.50$ cm $= 0.0050$ m

**Solution:**

**Part (a):** Speed in hose

Step 1: Calculate hose area.
$$A_1 = \\pi r_1^2 = \\pi (0.010)^2 = 3.14 \\times 10^{-4} \\text{ m}^2$$

Step 2: Use $Q = A v$.
$$v_1 = \\frac{Q}{A_1} = \\frac{6.0 \\times 10^{-4}}{3.14 \\times 10^{-4}} = 1.91 \\text{ m/s}$$

**Part (b):** Exit speed from nozzle

Step 1: Calculate nozzle area.
$$A_2 = \\pi r_2^2 = \\pi (0.0025)^2 = 1.96 \\times 10^{-5} \\text{ m}^2$$

Step 2: Use continuity or $Q = A v$.
$$v_2 = \\frac{Q}{A_2} = \\frac{6.0 \\times 10^{-4}}{1.96 \\times 10^{-5}} = 30.6 \\text{ m/s}$$

**Part (c):** Speed ratio

$$\\frac{v_2}{v_1} = \\frac{30.6}{1.91} = 16$$

**Alternative for (c):** Using area ratio.
$$\\frac{v_2}{v_1} = \\frac{A_1}{A_2} = \\frac{r_1^2}{r_2^2} = \\left(\\frac{2.0}{0.50}\\right)^2 = 16$$ ✓

**Answer:**
- **(a)** Speed in hose: **1.91 m/s**
- **(b)** Exit speed: **30.6 m/s** (about 68 mph!)
- **(c)** Water exits **16 times faster** than in the hose`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: fluidDynamics.id,
        front: 'What is the difference between laminar and turbulent flow?',
        back: 'Laminar: smooth, orderly flow in parallel layers (low velocity). Turbulent: chaotic, irregular flow with mixing (high velocity).',
      },
      {
        topicId: fluidDynamics.id,
        front: 'Define volume flow rate and give its formula.',
        back: 'Volume flow rate Q is volume of fluid passing per unit time: Q = Av, where A is cross-sectional area and v is flow speed. Units: m³/s.',
      },
      {
        topicId: fluidDynamics.id,
        front: 'State the equation of continuity for incompressible fluids.',
        back: 'A₁v₁ = A₂v₂ (or Q₁ = Q₂). Volume flow rate is constant throughout the pipe. Wide pipe → slow flow; narrow pipe → fast flow.',
      },
      {
        topicId: fluidDynamics.id,
        front: 'If a pipe diameter is halved, what happens to flow velocity?',
        back: 'Velocity quadruples (×4). Since A = πr², halving diameter means r → r/2, so A → A/4. By continuity Av = constant, so v → 4v.',
      },
      {
        topicId: fluidDynamics.id,
        front: 'Why does water spray farther when you partially cover a hose opening?',
        back: 'Covering reduces the area, which increases velocity (continuity: Av = constant). Higher exit velocity means water travels farther.',
      },
      {
        topicId: fluidDynamics.id,
        front: 'What assumptions are needed for the continuity equation?',
        back: 'Fluid must be: (1) incompressible (constant density), (2) in steady flow (no time variation), (3) conserving mass.',
      },
      {
        topicId: fluidDynamics.id,
        front: 'Does the continuity equation apply to gases?',
        back: 'Only if density changes are negligible. For significant pressure/temperature changes, must use ρ₁A₁v₁ = ρ₂A₂v₂ (mass flow rate).',
      },
      {
        topicId: fluidDynamics.id,
        front: 'In blood flow, where is velocity highest: aorta or capillaries?',
        back: 'Neither! Total capillary area > aorta area, so velocity is slower in capillaries (collectively). Individual capillary has tiny area but moderate velocity.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Fluid Dynamics and Continuity')

  // ============================================
  // TOPIC 4: Bernoulli's Equation
  // ============================================
  const bernoulli = await prisma.topic.upsert({
    where: { slug: 'bernoullis-equation' },
    update: {},
    create: {
      slug: 'bernoullis-equation',
      title: "Bernoulli's Equation",
      description: 'Energy conservation in fluids, applications to lift and flow',
      order: 4,
      categoryId: fluidCategory.id,
      isPremium: false,
      textContent: `
# ✈️ Bernoulli's Equation

## Introduction

**Bernoulli's Equation** is the application of energy conservation to fluid flow. It relates pressure, velocity, and height at different points in a flowing fluid.

---

## Bernoulli's Equation

For an **ideal fluid** (incompressible, non-viscous) in **steady flow**:

$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$$

At two different points along a streamline:

$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$

### Three Terms:

1. **$P$** - Pressure (static pressure)
2. **$\\frac{1}{2}\\rho v^2$** - Kinetic energy per unit volume (dynamic pressure)
3. **$\\rho g h$** - Potential energy per unit volume

> **💡 Key Insight**: As velocity increases, pressure decreases (and vice versa), assuming height is constant.

---

## Energy Interpretation

Bernoulli's equation represents **energy per unit volume**:

$$\\frac{\\text{Pressure energy}}{\\text{Volume}} + \\frac{\\text{Kinetic energy}}{\\text{Volume}} + \\frac{\\text{Potential energy}}{\\text{Volume}} = \\text{constant}$$

**Pressure energy**: Work done by pressure forces
**Kinetic energy**: $\\frac{1}{2}\\rho v^2 = \\frac{1}{2}\\frac{m}{V}v^2 = \\frac{KE}{V}$
**Potential energy**: $\\rho g h = \\frac{m}{V}gh = \\frac{PE}{V}$

---

## Special Cases

### Horizontal Flow (h₁ = h₂)

$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$

- **Faster flow** → **lower pressure**
- **Slower flow** → **higher pressure**

### Static Fluid (v₁ = v₂ = 0)

$$P_1 + \\rho g h_1 = P_2 + \\rho g h_2$$
$$P_2 - P_1 = -\\rho g (h_2 - h_1) = \\rho g h$$

This reduces to our pressure-depth equation from fluid statics! ✓

---

## Applications

### Venturi Effect
In a horizontal pipe that narrows:
- By continuity: velocity increases in narrow section
- By Bernoulli: pressure decreases in narrow section

Used in:
- Carburetors (draws fuel into air stream)
- Venturi meters (measure flow rate)
- Atomizers and spray bottles

### Airplane Wings (Lift)
- Air flows faster over curved top surface
- Faster flow → lower pressure (Bernoulli)
- Higher pressure below wing pushes up
- Net upward force = **lift**

(Note: This is simplified; actual lift is more complex)

### Torricelli's Theorem
Water flowing from a hole at depth $h$ below surface:

$$v = \\sqrt{2gh}$$

Same as free fall velocity! Water exits as if it fell from height $h$.

### Chimney Draft
- Hot air rises in chimney
- Creates low pressure at bottom
- Outside air rushes in to replace it
- Maintains fire combustion

---

## Limitations and Assumptions

Bernoulli's equation assumes:

1. **Incompressible fluid** (liquids, not gases at high speeds)
2. **Non-viscous** (no internal friction/resistance)
3. **Steady flow** (no time variation)
4. **Along a streamline** (single flow path)

Real fluids have **viscosity** (resistance to flow), which causes:
- Energy loss (heat)
- Pressure drop along pipes
- Deviation from ideal Bernoulli predictions

---

## Problem-Solving Strategy

1. **Identify two points** along the flow
2. **Write Bernoulli's equation**: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2$
3. **Simplify** based on conditions:
   - Same height? Drop $\\rho gh$ terms
   - Open to atmosphere? Set $P = P_{atm}$
   - Static point? Set $v = 0$
4. **Use continuity** if needed: $A_1v_1 = A_2v_2$
5. **Solve** for unknown
6. **Check** units and reasonableness

---

## Bernoulli + Continuity

Many problems require **both** equations:

**Continuity**: $A_1 v_1 = A_2 v_2$ (relates velocities)
**Bernoulli**: $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2$ (relates pressures)

---

## Common Mistakes

❌ Forgetting to use gauge pressure (subtract $P_{atm}$ when appropriate)
❌ Mixing up which point has higher/lower pressure
❌ Not using continuity to find second velocity
❌ Forgetting the $\\frac{1}{2}$ in kinetic term
❌ Using Bernoulli for viscous fluids or turbulent flow
`,
    },
  })

  console.log("✓ Created topic: Bernoulli's Equation")

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: bernoulli.id,
        question: 'Water flows horizontally through a pipe. At point 1, the pressure is 200 kPa and velocity is 2.0 m/s. At point 2, the velocity is 8.0 m/s. What is the pressure at point 2? (ρ_water = 1000 kg/m³)',
        solution: `**Given:**
- Horizontal flow: $h_1 = h_2$
- $P_1 = 200$ kPa $= 2.0 \\times 10^5$ Pa
- $v_1 = 2.0$ m/s, $v_2 = 8.0$ m/s
- $\\rho = 1000$ kg/m³

**Find:** Pressure $P_2$

**Solution:**

Since horizontal, Bernoulli simplifies:
$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$

Solve for $P_2$:
$$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2)$$
$$P_2 = 2.0 \\times 10^5 + \\frac{1}{2}(1000)(2.0^2 - 8.0^2)$$
$$P_2 = 2.0 \\times 10^5 + 500(4 - 64)$$
$$P_2 = 2.0 \\times 10^5 - 30,000$$
$$P_2 = 1.7 \\times 10^5 \\text{ Pa} = 170 \\text{ kPa}$$

**Answer:** **170 kPa**

Velocity quadrupled (×4), so kinetic term increased by 16×. Pressure must decrease to conserve energy.`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: bernoulli.id,
        question: 'A large open tank of water has a small hole 5.0 m below the water surface. (a) What is the velocity of water exiting the hole? (b) How far horizontally does the water travel if the hole is 1.0 m above the ground?',
        solution: `**Given:**
- Depth below surface: $h = 5.0$ m
- Height above ground: $y = 1.0$ m

**Solution:**

**Part (a):** Exit velocity (Torricelli's Theorem)

Apply Bernoulli between surface (point 1) and hole (point 2):
- Point 1: $P_1 = P_{atm}$, $v_1 \\approx 0$ (large tank), $h_1 = h$
- Point 2: $P_2 = P_{atm}$, $v_2 = ?$, $h_2 = 0$

$$P_{atm} + 0 + \\rho g h = P_{atm} + \\frac{1}{2}\\rho v_2^2 + 0$$
$$\\rho g h = \\frac{1}{2}\\rho v_2^2$$
$$v_2 = \\sqrt{2gh} = \\sqrt{2(9.8)(5.0)} = \\sqrt{98} = 9.9 \\text{ m/s}$$

**Part (b):** Horizontal distance (projectile motion)

Horizontal motion: $x = v_2 t$
Vertical motion: $y = \\frac{1}{2}gt^2$

Find time to fall 1.0 m:
$$1.0 = \\frac{1}{2}(9.8)t^2$$
$$t = \\sqrt{\\frac{2.0}{9.8}} = 0.452 \\text{ s}$$

Horizontal distance:
$$x = v_2 t = (9.9)(0.452) = 4.5 \\text{ m}$$

**Answer:**
- **(a)** Exit velocity: **9.9 m/s**
- **(b)** Horizontal distance: **4.5 m**`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: bernoulli.id,
        question: 'Water flows through a horizontal pipe that changes from 10 cm diameter to 5.0 cm diameter. The pressure in the wide section is 150 kPa and velocity is 2.0 m/s. (a) Find velocity in narrow section. (b) Find pressure in narrow section.',
        solution: `**Given:**
- $d_1 = 10$ cm $= 0.10$ m, $d_2 = 5.0$ cm $= 0.050$ m
- $P_1 = 150$ kPa $= 1.5 \\times 10^5$ Pa
- $v_1 = 2.0$ m/s
- $\\rho = 1000$ kg/m³

**Solution:**

**Part (a):** Velocity in narrow section

Use continuity: $A_1 v_1 = A_2 v_2$

$$v_2 = v_1 \\frac{A_1}{A_2} = v_1 \\frac{r_1^2}{r_2^2} = v_1 \\left(\\frac{d_1}{d_2}\\right)^2$$
$$v_2 = 2.0 \\left(\\frac{0.10}{0.050}\\right)^2 = 2.0(4) = 8.0 \\text{ m/s}$$

**Part (b):** Pressure in narrow section

Use Bernoulli (horizontal):
$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$

$$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2)$$
$$P_2 = 1.5 \\times 10^5 + \\frac{1}{2}(1000)(2.0^2 - 8.0^2)$$
$$P_2 = 1.5 \\times 10^5 + 500(4 - 64)$$
$$P_2 = 1.5 \\times 10^5 - 30,000$$
$$P_2 = 1.2 \\times 10^5 \\text{ Pa} = 120 \\text{ kPa}$$

**Answer:**
- **(a)** Velocity in narrow section: **8.0 m/s**
- **(b)** Pressure in narrow section: **120 kPa**

**Verification:** Diameter halved → area became 1/4 → velocity ×4.
Faster flow → lower pressure (Bernoulli) ✓`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: bernoulli.id,
        front: "State Bernoulli's Equation.",
        back: 'P + ½ρv² + ρgh = constant. At two points: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂. Energy conservation for ideal fluid flow.',
      },
      {
        topicId: bernoulli.id,
        front: "What do the three terms in Bernoulli's equation represent?",
        back: 'P = pressure (static), ½ρv² = kinetic energy per volume (dynamic), ρgh = potential energy per volume. Sum is constant along streamline.',
      },
      {
        topicId: bernoulli.id,
        front: "For horizontal flow, what is the relationship between velocity and pressure?",
        back: 'Inverse relationship: faster flow → lower pressure, slower flow → higher pressure. This is the Venturi effect.',
      },
      {
        topicId: bernoulli.id,
        front: "State Torricelli's Theorem.",
        back: 'Water exiting a hole at depth h below surface has velocity v = √(2gh), same as free fall from height h. Derived from Bernoulli\'s equation.',
      },
      {
        topicId: bernoulli.id,
        front: 'How does the Venturi effect work?',
        back: 'In a narrowing pipe: continuity → velocity increases, Bernoulli → pressure decreases. Used in carburetors, atomizers, flow meters.',
      },
      {
        topicId: bernoulli.id,
        front: "What assumptions does Bernoulli's equation require?",
        back: 'Fluid must be: (1) incompressible, (2) non-viscous (no friction), (3) in steady flow, (4) along a streamline. Real fluids violate assumption 2.',
      },
      {
        topicId: bernoulli.id,
        front: 'How does Bernoulli explain airplane lift?',
        back: 'Air flows faster over curved top wing surface → lower pressure on top (Bernoulli). Higher pressure below pushes up → net upward lift force.',
      },
      {
        topicId: bernoulli.id,
        front: 'Why must you often use both continuity and Bernoulli equations?',
        back: 'Continuity gives velocity relationship (A₁v₁ = A₂v₂), Bernoulli gives pressure relationship. Together they solve for unknowns in flow problems.',
      },
    ],
  })

  console.log("✓ Created 8 flashcards for Bernoulli's Equation")

  console.log('\n✅ Successfully seeded AP Physics 2 - Fluid Mechanics Part 2!')
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
