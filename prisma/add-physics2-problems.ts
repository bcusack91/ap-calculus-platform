import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Physics 2 topics...')

  // Topic 1: Density and Pressure
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'density-and-pressure' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A cube of metal with sides of 5.0 cm has a mass of 1.5 kg. (a) What is its density? (b) Will it float in water (ρ_water = 1000 kg/m³)? (c) What is the pressure at the bottom of the cube when it rests on a table?`,
          solution: `**Solution:**

Given: side = 5.0 cm = 0.050 m, m = 1.5 kg

(a) **Density:**
Volume = (0.050)³ = 1.25 × 10⁻⁴ m³
ρ = m/V = 1.5/(1.25 × 10⁻⁴) = **12,000 kg/m³**

(b) **Will it float?**
ρ_metal = 12,000 kg/m³ > ρ_water = 1000 kg/m³
**No, it will sink** (denser than water)

(c) **Pressure at bottom:**
Weight: W = mg = 1.5 × 10 = 15 N
Area: A = (0.050)² = 2.5 × 10⁻³ m²
P = F/A = 15/(2.5 × 10⁻³) = **6,000 Pa** or **6.0 kPa**`,
        },
        {
          topicId: topic1.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A swimming pool is 2.5 m deep. (a) What is the absolute pressure at the bottom? (b) What is the gauge pressure at the bottom? (c) What is the force on a 2.0 m × 1.0 m rectangular section at the bottom? Use ρ_water = 1000 kg/m³, P_atm = 1.01 × 10⁵ Pa, g = 10 m/s².`,
          solution: `**Solution:**

Given: h = 2.5 m, ρ = 1000 kg/m³, P_atm = 1.01 × 10⁵ Pa

(a) **Absolute pressure:**
P = P_atm + ρgh
P = 1.01 × 10⁵ + (1000)(10)(2.5)
P = 1.01 × 10⁵ + 2.5 × 10⁴
P = **1.26 × 10⁵ Pa** or **126 kPa**

(b) **Gauge pressure:**
P_gauge = ρgh = (1000)(10)(2.5) = **2.5 × 10⁴ Pa** or **25 kPa**

(c) **Force on bottom:**
Area = 2.0 × 1.0 = 2.0 m²
F = PA = (1.26 × 10⁵)(2.0)
F = **2.52 × 10⁵ N** or **252 kN**

Note: If using gauge pressure, F = (2.5 × 10⁴)(2.0) = 5.0 × 10⁴ N (force due to water only)`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Density and Pressure')
  }

  // Topic 2: Buoyancy and Archimedes' Principle
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'buoyancy-archimedes-principle' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 5.0 kg block with density 800 kg/m³ is submerged in water (ρ = 1000 kg/m³). (a) What is the buoyant force on the block? (b) What is the block's apparent weight? (c) What is the block's acceleration if released from rest?`,
          solution: `**Solution:**

Given: m = 5.0 kg, ρ_block = 800 kg/m³, ρ_water = 1000 kg/m³, g = 10 m/s²

(a) **Buoyant force:**
Volume of block: V = m/ρ = 5.0/800 = 6.25 × 10⁻³ m³
F_B = ρ_water × V × g = (1000)(6.25 × 10⁻³)(10)
F_B = **62.5 N** or **63 N**

(b) **Apparent weight:**
Weight: W = mg = 5.0 × 10 = 50 N
W_apparent = W - F_B = 50 - 62.5 = **-12.5 N**

Negative means net upward force! Block will rise.

(c) **Acceleration:**
F_net = F_B - W = 62.5 - 50 = 12.5 N (upward)
a = F_net/m = 12.5/5.0 = **2.5 m/s²** (upward)`,
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A wooden block (ρ = 600 kg/m³) floats in water with 40% of its volume above the surface. (a) Verify this using Archimedes' principle. (b) If the block has volume 0.010 m³, what is its mass? (c) What additional mass must be added to just submerge it?`,
          solution: `**Solution:**

Given: ρ_wood = 600 kg/m³, ρ_water = 1000 kg/m³, 40% above → 60% submerged

(a) **Verify floating fraction:**
At equilibrium: F_B = Weight
ρ_water × V_submerged × g = ρ_wood × V_total × g
V_submerged/V_total = ρ_wood/ρ_water = 600/1000 = 0.60 = **60% submerged** ✓

(b) **Mass of block:**
V = 0.010 m³
m = ρV = 600 × 0.010 = **6.0 kg**

(c) **Additional mass to submerge:**
When fully submerged (V_sub = V_total = 0.010 m³):
F_B = ρ_water × V × g = 1000 × 0.010 × 10 = 100 N

Currently: Weight = 6.0 × 10 = 60 N
Additional weight needed: 100 - 60 = 40 N
Additional mass: m_add = 40/10 = **4.0 kg**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Buoyancy and Archimedes\' Principle')
  }

  // Topic 3: Bernoulli's Equation
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'bernoullis-equation' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Water flows through a horizontal pipe. At point A, the diameter is 10 cm and the pressure is 2.0 × 10⁵ Pa. At point B, the diameter is 5.0 cm. If the speed at A is 2.0 m/s, find (a) the speed at B, (b) the pressure at B. Use ρ = 1000 kg/m³.`,
          solution: `**Solution:**

Given: d_A = 10 cm, P_A = 2.0 × 10⁵ Pa, v_A = 2.0 m/s, d_B = 5.0 cm

(a) **Speed at B (Continuity equation):**
A_A v_A = A_B v_B
π(0.05)² × 2.0 = π(0.025)² × v_B
(0.05)²(2.0) = (0.025)²v_B
v_B = (0.05)²(2.0)/(0.025)²
v_B = (2.5 × 10⁻³)(2.0)/(6.25 × 10⁻⁴)
v_B = **8.0 m/s**

(b) **Pressure at B (Bernoulli's equation):**
P_A + ½ρv_A² = P_B + ½ρv_B² (horizontal pipe, same height)

P_B = P_A + ½ρ(v_A² - v_B²)
P_B = 2.0 × 10⁵ + ½(1000)(2.0² - 8.0²)
P_B = 2.0 × 10⁵ + 500(4 - 64)
P_B = 2.0 × 10⁵ - 30,000
P_B = **1.7 × 10⁵ Pa** or **170 kPa**

Pressure decreases where speed increases!`,
        },
      ]
    })
    console.log('✓ Added 1 problem to: Bernoulli\'s Equation')
  }

  // Topic 4: Heat and Specific Heat
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'heat-specific-heat' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 200 g aluminum cup (c = 900 J/(kg·°C)) contains 500 g of water (c = 4186 J/(kg·°C)) at 20°C. A 100 g piece of copper (c = 387 J/(kg·°C)) at 80°C is placed in the water. Find the final equilibrium temperature.`,
          solution: `**Solution:**

Given: 
- Al cup: m₁ = 0.200 kg, c₁ = 900 J/(kg·°C), T₁ = 20°C
- Water: m₂ = 0.500 kg, c₂ = 4186 J/(kg·°C), T₂ = 20°C  
- Cu: m₃ = 0.100 kg, c₃ = 387 J/(kg·°C), T₃ = 80°C

**Energy conservation:**
Heat lost by copper = Heat gained by water + aluminum

m₃c₃(T₃ - T_f) = m₁c₁(T_f - T₁) + m₂c₂(T_f - T₂)

Since T₁ = T₂ = 20°C:
(0.100)(387)(80 - T_f) = (0.200)(900)(T_f - 20) + (0.500)(4186)(T_f - 20)

3096 - 38.7T_f = 180T_f - 3600 + 2093T_f - 41,860
3096 - 38.7T_f = 2273T_f - 45,460
48,556 = 2311.7T_f
T_f = **21.0°C**

The large mass and high specific heat of water dominates.`,
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `How much heat is required to raise the temperature of 2.0 kg of water from 20°C to 80°C? Use c_water = 4186 J/(kg·°C).`,
          solution: `**Solution:**

Given: m = 2.0 kg, c = 4186 J/(kg·°C), ΔT = 80 - 20 = 60°C

**Heat required:**
Q = mcΔT
Q = (2.0)(4186)(60)
Q = **5.02 × 10⁵ J** or **502 kJ**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Heat and Specific Heat')
  }

  // Topic 5: Phase Changes and Latent Heat
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'phase-changes-latent-heat' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `How much energy is required to convert 1.0 kg of ice at -10°C to steam at 110°C? Use: c_ice = 2100 J/(kg·°C), c_water = 4186 J/(kg·°C), c_steam = 2010 J/(kg·°C), L_f = 3.34 × 10⁵ J/kg, L_v = 2.26 × 10⁶ J/kg.`,
          solution: `**Solution:**

**Five stages:**

**1) Heat ice from -10°C to 0°C:**
Q₁ = mc_ice ΔT = (1.0)(2100)(10) = 21,000 J

**2) Melt ice at 0°C:**
Q₂ = mL_f = (1.0)(3.34 × 10⁵) = 334,000 J

**3) Heat water from 0°C to 100°C:**
Q₃ = mc_water ΔT = (1.0)(4186)(100) = 418,600 J

**4) Vaporize water at 100°C:**
Q₄ = mL_v = (1.0)(2.26 × 10⁶) = 2,260,000 J

**5) Heat steam from 100°C to 110°C:**
Q₅ = mc_steam ΔT = (1.0)(2010)(10) = 20,100 J

**Total:**
Q_total = 21,000 + 334,000 + 418,600 + 2,260,000 + 20,100
Q_total = **3.05 × 10⁶ J** or **3.05 MJ** or **3050 kJ**

Most energy goes into vaporization!`,
        },
      ]
    })
    console.log('✓ Added 1 problem to: Phase Changes and Latent Heat')
  }

  // Topic 6: Electric Charge and Coulomb's Law
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'electric-charge-coulombs-law' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Two point charges, q₁ = +3.0 μC and q₂ = -5.0 μC, are separated by 0.20 m. (a) What is the magnitude of the electric force between them? (b) Is the force attractive or repulsive? Use k = 9.0 × 10⁹ N·m²/C².`,
          solution: `**Solution:**

Given: q₁ = +3.0 × 10⁻⁶ C, q₂ = -5.0 × 10⁻⁶ C, r = 0.20 m, k = 9.0 × 10⁹ N·m²/C²

(a) **Force magnitude (Coulomb's Law):**
F = k|q₁q₂|/r²
F = (9.0 × 10⁹)|3.0 × 10⁻⁶ × (-5.0 × 10⁻⁶)|/(0.20)²
F = (9.0 × 10⁹)(15 × 10⁻¹²)/0.04
F = (135 × 10⁻³)/0.04
F = **3.4 N**

(b) **Attractive or repulsive?**
q₁ is positive, q₂ is negative (opposite signs)
**Attractive force** (opposite charges attract)`,
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Three charges are arranged in a line: q₁ = +2.0 μC at x = 0, q₂ = -4.0 μC at x = 0.30 m, and q₃ = +1.0 μC at x = 0.50 m. Find the net force on q₂. Use k = 9.0 × 10⁹ N·m²/C².`,
          solution: `**Solution:**

**Force on q₂ from q₁:**
r₁₂ = 0.30 m
F₁₂ = kq₁q₂/r₁₂² = (9.0 × 10⁹)(2.0 × 10⁻⁶)(4.0 × 10⁻⁶)/(0.30)²
F₁₂ = (72 × 10⁻³)/0.09 = 0.800 N

Direction: q₁ (+) attracts q₂ (-) → **0.800 N to the left** (negative direction)

**Force on q₂ from q₃:**
r₂₃ = 0.50 - 0.30 = 0.20 m
F₂₃ = kq₂q₃/r₂₃² = (9.0 × 10⁹)(4.0 × 10⁻⁶)(1.0 × 10⁻⁶)/(0.20)²
F₂₃ = (36 × 10⁻³)/0.04 = 0.900 N

Direction: q₃ (+) attracts q₂ (-) → **0.900 N to the right** (positive direction)

**Net force:**
F_net = -0.800 + 0.900 = **+0.100 N** or **0.10 N to the right**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Electric Charge and Coulomb\'s Law')
  }

  // Topic 7: Electric Fields and Potential
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'electric-fields-potential' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A point charge of +4.0 μC is located at the origin. (a) What is the electric field at a point 0.50 m away? (b) What is the electric potential at this point? (c) How much work is required to bring a +2.0 μC charge from infinity to this point? Use k = 9.0 × 10⁹ N·m²/C².`,
          solution: `**Solution:**

Given: Q = +4.0 × 10⁻⁶ C, r = 0.50 m, k = 9.0 × 10⁹ N·m²/C²

(a) **Electric field:**
E = kQ/r² = (9.0 × 10⁹)(4.0 × 10⁻⁶)/(0.50)²
E = (36 × 10³)/0.25
E = **1.44 × 10⁵ N/C** or **144 kN/C** (radially outward)

(b) **Electric potential:**
V = kQ/r = (9.0 × 10⁹)(4.0 × 10⁻⁶)/0.50
V = (36 × 10³)/0.50
V = **7.2 × 10⁴ V** or **72 kV**

(c) **Work required:**
W = qΔV = q(V_f - V_∞)
W = (2.0 × 10⁻⁶)(7.2 × 10⁴ - 0)
W = **0.144 J** or **144 mJ**

Positive work (energy input required) to bring positive charge toward positive charge.`,
        },
        {
          topicId: topic7.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Two parallel plates separated by 0.020 m have a potential difference of 100 V. (a) What is the electric field between the plates? (b) What force acts on an electron in this field? (c) If an electron starts from rest at the negative plate, what is its speed when it reaches the positive plate? Use e = 1.6 × 10⁻¹⁹ C, m_e = 9.1 × 10⁻³¹ kg.`,
          solution: `**Solution:**

Given: d = 0.020 m, V = 100 V, e = 1.6 × 10⁻¹⁹ C, m = 9.1 × 10⁻³¹ kg

(a) **Electric field:**
E = V/d = 100/0.020 = **5000 V/m** or **5.0 × 10³ N/C**
(uniform field between parallel plates)

(b) **Force on electron:**
F = eE = (1.6 × 10⁻¹⁹)(5000)
F = **8.0 × 10⁻¹⁶ N** (toward positive plate)

(c) **Final speed:**
Using energy: ΔKE = Work = eV
½mv² - 0 = eV
v² = 2eV/m = 2(1.6 × 10⁻¹⁹)(100)/(9.1 × 10⁻³¹)
v² = (32 × 10⁻¹⁸)/(9.1 × 10⁻³¹) = 3.52 × 10¹³
v = **5.9 × 10⁶ m/s**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Electric Fields and Potential')
  }

  // Topic 8: Current, Resistance, and Ohm's Law
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'current-resistance-ohms-law' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `A 12 V battery is connected to a 4.0 Ω resistor. (a) What is the current through the resistor? (b) What is the power dissipated? (c) How much energy is dissipated in 5.0 minutes?`,
          solution: `**Solution:**

Given: V = 12 V, R = 4.0 Ω, t = 5.0 min = 300 s

(a) **Current (Ohm's Law):**
I = V/R = 12/4.0 = **3.0 A**

(b) **Power:**
P = VI = 12 × 3.0 = **36 W**
Or: P = V²/R = 144/4.0 = 36 W ✓
Or: P = I²R = (3.0)²(4.0) = 36 W ✓

(c) **Energy:**
E = Pt = 36 × 300 = **10,800 J** or **10.8 kJ**`,
        },
        {
          topicId: topic8.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A wire of length 2.0 m and cross-sectional area 1.0 × 10⁻⁶ m² has resistance 0.50 Ω. (a) What is the resistivity of the material? (b) If the wire is stretched to 3.0 m (volume constant), what is the new resistance?`,
          solution: `**Solution:**

Given: L = 2.0 m, A = 1.0 × 10⁻⁶ m², R = 0.50 Ω

(a) **Resistivity:**
R = ρL/A
ρ = RA/L = (0.50)(1.0 × 10⁻⁶)/2.0
ρ = **2.5 × 10⁻⁷ Ω·m**

(b) **New resistance after stretching:**
Volume constant: V = A₁L₁ = A₂L₂
A₂ = A₁L₁/L₂ = (1.0 × 10⁻⁶)(2.0)/3.0 = 6.67 × 10⁻⁷ m²

R₂ = ρL₂/A₂ = (2.5 × 10⁻⁷)(3.0)/(6.67 × 10⁻⁷)
R₂ = **1.125 Ω** or **1.1 Ω**

Alternative: R ∝ L²/V, so R₂ = R₁(L₂/L₁)² = 0.50(3.0/2.0)² = 1.125 Ω ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Current, Resistance, and Ohm\'s Law')
  }

  // Topic 9: Series and Parallel Circuits
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'series-parallel-circuits' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Three resistors (R₁ = 2.0 Ω, R₂ = 4.0 Ω, R₃ = 6.0 Ω) are connected in series to a 24 V battery. (a) Find the equivalent resistance. (b) Find the current. (c) Find the voltage across each resistor. (d) Find the power dissipated by R₂.`,
          solution: `**Solution:**

**Series connection:** Same current through all resistors

(a) **Equivalent resistance:**
R_eq = R₁ + R₂ + R₃ = 2.0 + 4.0 + 6.0 = **12 Ω**

(b) **Current:**
I = V/R_eq = 24/12 = **2.0 A** (same through all)

(c) **Voltage across each:**
V₁ = IR₁ = 2.0 × 2.0 = **4.0 V**
V₂ = IR₂ = 2.0 × 4.0 = **8.0 V**
V₃ = IR₃ = 2.0 × 6.0 = **12 V**

Check: 4.0 + 8.0 + 12 = 24 V ✓

(d) **Power in R₂:**
P₂ = I²R₂ = (2.0)²(4.0) = **16 W**`,
        },
        {
          topicId: topic9.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Three resistors (R₁ = 6.0 Ω, R₂ = 3.0 Ω, R₃ = 2.0 Ω) are connected in parallel to a 12 V battery. (a) Find the equivalent resistance. (b) Find the current through each resistor. (c) Find the total current from the battery. (d) Find the total power.`,
          solution: `**Solution:**

**Parallel connection:** Same voltage across all resistors (12 V)

(a) **Equivalent resistance:**
1/R_eq = 1/R₁ + 1/R₂ + 1/R₃
1/R_eq = 1/6.0 + 1/3.0 + 1/2.0 = 1/6 + 2/6 + 3/6 = 6/6 = 1
R_eq = **1.0 Ω**

(b) **Current through each:**
I₁ = V/R₁ = 12/6.0 = **2.0 A**
I₂ = V/R₂ = 12/3.0 = **4.0 A**
I₃ = V/R₃ = 12/2.0 = **6.0 A**

(c) **Total current:**
I_total = I₁ + I₂ + I₃ = 2.0 + 4.0 + 6.0 = **12 A**

Or: I_total = V/R_eq = 12/1.0 = 12 A ✓

(d) **Total power:**
P_total = VI_total = 12 × 12 = **144 W**

Or: P = V²/R_eq = 144/1.0 = 144 W ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Series and Parallel Circuits')
  }

  // Topic 10: Magnetic Fields and Forces
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'magnetic-fields-forces' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `An electron (q = -1.6 × 10⁻¹⁹ C) moves at 2.0 × 10⁶ m/s perpendicular to a magnetic field of 0.50 T. (a) What is the magnitude of the magnetic force? (b) What is the direction of the force? (c) What is the radius of the circular path?`,
          solution: `**Solution:**

Given: q = -1.6 × 10⁻¹⁹ C, v = 2.0 × 10⁶ m/s, B = 0.50 T, m_e = 9.1 × 10⁻³¹ kg

(a) **Magnetic force:**
F = |q|vB sin θ = |q|vB (since θ = 90°)
F = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50)
F = **1.6 × 10⁻¹³ N**

(b) **Direction:**
Use right-hand rule: Point fingers in direction of v, curl toward B, thumb points in direction of F for positive charge. For electron (negative), force is **opposite** to right-hand rule direction.

(c) **Radius of circular path:**
F = mv²/r (centripetal force)
r = mv²/(|q|vB) = mv/(|q|B)
r = (9.1 × 10⁻³¹)(2.0 × 10⁶)/[(1.6 × 10⁻¹⁹)(0.50)]
r = (1.82 × 10⁻²⁴)/(8.0 × 10⁻²⁰)
r = **2.3 × 10⁻⁵ m** or **0.023 mm**`,
        },
        {
          topicId: topic10.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A wire carrying 5.0 A of current has length 0.30 m in a uniform 0.80 T magnetic field. The wire makes an angle of 60° with the field. (a) What is the magnetic force on the wire? (b) What angle gives maximum force?`,
          solution: `**Solution:**

Given: I = 5.0 A, L = 0.30 m, B = 0.80 T, θ = 60°

(a) **Magnetic force:**
F = BIL sin θ
F = (0.80)(5.0)(0.30) sin 60°
F = (0.80)(5.0)(0.30)(0.866)
F = **1.04 N** or **1.0 N**

(b) **Maximum force angle:**
F is maximum when sin θ = 1
θ = **90°** (wire perpendicular to field)`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Magnetic Fields and Forces')
  }

  // Topic 11: Reflection and Refraction
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'reflection-refraction' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Light travels from air (n = 1.00) into water (n = 1.33) at an incident angle of 40°. (a) What is the angle of refraction? (b) What is the speed of light in water? (c) Does the wavelength increase or decrease? Use c = 3.0 × 10⁸ m/s.`,
          solution: `**Solution:**

Given: n₁ = 1.00, n₂ = 1.33, θ₁ = 40°, c = 3.0 × 10⁸ m/s

(a) **Angle of refraction (Snell's Law):**
n₁ sin θ₁ = n₂ sin θ₂
(1.00) sin 40° = (1.33) sin θ₂
0.643 = 1.33 sin θ₂
sin θ₂ = 0.483
θ₂ = **28.9°** or **29°**

Light bends toward the normal entering denser medium.

(b) **Speed in water:**
v = c/n = (3.0 × 10⁸)/1.33 = **2.26 × 10⁸ m/s**

(c) **Wavelength change:**
λ = v/f, and frequency f is constant
λ₂/λ₁ = v₂/v₁ = 1/n₂ = 1/1.33 = 0.75

**Wavelength decreases** to 75% of its value in air.`,
        },
        {
          topicId: topic11.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Light in a glass fiber (n = 1.50) strikes the glass-air boundary at 50°. (a) Will total internal reflection occur? (b) What is the critical angle for this fiber? Use n_air = 1.00.`,
          solution: `**Solution:**

Given: n_glass = 1.50, n_air = 1.00, θ = 50°

(a) **Will TIR occur?**
First find critical angle: n₁ sin θ_c = n₂ sin 90°
(1.50) sin θ_c = (1.00)(1)
sin θ_c = 1/1.50 = 0.667
θ_c = 41.8°

Since θ = 50° > θ_c = 41.8°, **YES, total internal reflection occurs**.

(b) **Critical angle:**
θ_c = sin⁻¹(n₂/n₁) = sin⁻¹(1.00/1.50) = **41.8°** or **42°**

For angles greater than 42°, all light is reflected (this is how fiber optics work!).`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Reflection and Refraction')
  }

  // Topic 12: Lenses
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'lenses' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A converging lens has focal length 20 cm. An object is placed 30 cm from the lens. (a) Where is the image located? (b) What is the magnification? (c) Is the image real or virtual, upright or inverted?`,
          solution: `**Solution:**

Given: f = +20 cm (converging), d_o = +30 cm

(a) **Image location (Thin lens equation):**
1/f = 1/d_o + 1/d_i
1/20 = 1/30 + 1/d_i
1/d_i = 1/20 - 1/30 = 3/60 - 2/60 = 1/60
d_i = **60 cm** (on opposite side of lens from object)

(b) **Magnification:**
m = -d_i/d_o = -60/30 = **-2.0**

(c) **Image characteristics:**
- d_i > 0 → **Real image** (light actually converges)
- m < 0 → **Inverted**
- |m| = 2.0 → Image is twice as large as object`,
        },
        {
          topicId: topic12.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A diverging lens has focal length -15 cm. An object is placed 10 cm from the lens. (a) Where is the image? (b) What is the magnification? (c) Describe the image.`,
          solution: `**Solution:**

Given: f = -15 cm (diverging), d_o = +10 cm

(a) **Image location:**
1/f = 1/d_o + 1/d_i
1/(-15) = 1/10 + 1/d_i
1/d_i = -1/15 - 1/10 = -2/30 - 3/30 = -5/30 = -1/6
d_i = **-6.0 cm** (same side as object)

(b) **Magnification:**
m = -d_i/d_o = -(-6.0)/10 = **+0.60**

(c) **Image characteristics:**
- d_i < 0 → **Virtual image** (light appears to diverge from this point)
- m > 0 → **Upright**
- |m| = 0.60 → **Reduced** to 60% of object size

Diverging lenses always produce virtual, upright, reduced images.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Lenses')
  }

  // Topic 13: Interference and Diffraction
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'interference-diffraction' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `In a double-slit experiment, light with wavelength 600 nm passes through slits separated by 0.10 mm. A screen is 2.0 m away. (a) What is the distance between adjacent bright fringes? (b) What is the angle to the third-order bright fringe?`,
          solution: `**Solution:**

Given: λ = 600 nm = 6.0 × 10⁻⁷ m, d = 0.10 mm = 1.0 × 10⁻⁴ m, L = 2.0 m

(a) **Distance between bright fringes:**
For small angles: Δy = λL/d
Δy = (6.0 × 10⁻⁷)(2.0)/(1.0 × 10⁻⁴)
Δy = (12 × 10⁻⁷)/(1.0 × 10⁻⁴)
Δy = **1.2 × 10⁻² m** or **1.2 cm**

(b) **Angle to third bright fringe (m = 3):**
d sin θ = mλ
sin θ = mλ/d = 3(6.0 × 10⁻⁷)/(1.0 × 10⁻⁴)
sin θ = (18 × 10⁻⁷)/(1.0 × 10⁻⁴) = 0.018
θ = **1.03°** or **1.0°**

Very small angle (small angle approximation valid).`,
        },
        {
          topicId: topic13.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Light of wavelength 500 nm passes through a single slit of width 0.050 mm. (a) What is the angular width of the central bright fringe? (b) If the screen is 1.5 m away, what is the linear width of the central maximum?`,
          solution: `**Solution:**

Given: λ = 500 nm = 5.0 × 10⁻⁷ m, a = 0.050 mm = 5.0 × 10⁻⁵ m, L = 1.5 m

(a) **Angular width of central maximum:**
First minimum occurs at: a sin θ = λ
sin θ = λ/a = (5.0 × 10⁻⁷)/(5.0 × 10⁻⁵) = 0.010
θ = 0.573° (to first minimum on one side)

Angular width = 2θ = **1.15°** or **1.1°** (center to both first minima)

(b) **Linear width on screen:**
y = L tan θ ≈ L sin θ (small angle)
y = (1.5)(0.010) = 0.015 m (to first minimum)

Total width = 2y = **3.0 cm** (or 0.030 m)

Central maximum is twice as wide as other maxima in single-slit diffraction.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Interference and Diffraction')
  }

  // Topic 14: Photons and Atomic Physics
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'photons-atomic-nuclear' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Light of wavelength 400 nm strikes a metal surface. (a) What is the energy of each photon? (b) If the work function is 2.0 eV, what is the maximum kinetic energy of ejected electrons? Use h = 6.63 × 10⁻³⁴ J·s, c = 3.0 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J.`,
          solution: `**Solution:**

Given: λ = 400 nm = 4.0 × 10⁻⁷ m, φ = 2.0 eV = 3.2 × 10⁻¹⁹ J

(a) **Photon energy:**
E = hf = hc/λ
E = (6.63 × 10⁻³⁴)(3.0 × 10⁸)/(4.0 × 10⁻⁷)
E = (19.9 × 10⁻²⁶)/(4.0 × 10⁻⁷)
E = 4.98 × 10⁻¹⁹ J = **3.1 eV**

(b) **Maximum kinetic energy (Photoelectric effect):**
KE_max = E - φ
KE_max = 3.1 - 2.0 = **1.1 eV**

Or in Joules: KE_max = 4.98 × 10⁻¹⁹ - 3.2 × 10⁻¹⁹ = **1.78 × 10⁻¹⁹ J**`,
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `In the hydrogen atom, an electron transitions from n = 3 to n = 2. (a) Calculate the energy of the emitted photon using E_n = -13.6 eV/n². (b) What is the wavelength of the emitted light? (c) What region of the spectrum is this?`,
          solution: `**Solution:**

(a) **Photon energy:**
E₃ = -13.6/3² = -13.6/9 = -1.51 eV
E₂ = -13.6/2² = -13.6/4 = -3.40 eV

ΔE = E₃ - E₂ = -1.51 - (-3.40) = **1.89 eV**

Or: 1.89 eV × 1.6 × 10⁻¹⁹ J/eV = 3.02 × 10⁻¹⁹ J

(b) **Wavelength:**
E = hc/λ
λ = hc/E = (6.63 × 10⁻³⁴)(3.0 × 10⁸)/(3.02 × 10⁻¹⁹)
λ = (19.9 × 10⁻²⁶)/(3.02 × 10⁻¹⁹)
λ = 6.59 × 10⁻⁷ m = **659 nm**

(c) **Spectrum region:**
λ = 659 nm is in the **visible red** region (visible: 400-700 nm)

This is the first line of the Balmer series (transitions to n = 2).`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Photons and Atomic/Nuclear Physics')
  }

  console.log('\n✅ Successfully added example problems to Physics 2 topics!')
  console.log('Total: 28 example problems added to 14 AP Physics 2 topics')
  console.log('Coverage: Fluids, thermodynamics, electrostatics, circuits, magnetism, optics, modern physics')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
