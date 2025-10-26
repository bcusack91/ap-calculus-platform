import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Thermodynamics Part 2...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const thermoCategory = await prisma.category.upsert({
    where: { slug: 'thermodynamics' },
    update: {},
    create: {
      slug: 'thermodynamics',
      name: 'Thermodynamics',
      description: 'Temperature, heat, phase changes, laws of thermodynamics',
      order: 1,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Found category: Thermodynamics')

  // ============================================
  // TOPIC 2: Heat and Specific Heat
  // ============================================
  const heatSpecific = await prisma.topic.upsert({
    where: { slug: 'heat-specific-heat' },
    update: {},
    create: {
      slug: 'heat-specific-heat',
      title: 'Heat and Specific Heat',
      description: 'Heat transfer, specific heat capacity, and calorimetry',
      order: 2,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# 🔥 Heat and Specific Heat

## Heat vs. Temperature

**Temperature**: Measure of average kinetic energy of particles
**Heat (Q)**: Energy transferred between objects due to temperature difference

> **💡 Key Distinction**: Temperature is a property; heat is energy in transit.

Heat flows spontaneously from **hot to cold** until thermal equilibrium is reached.

---

## Units of Heat

- **Joule (J)**: SI unit of energy
- **Calorie (cal)**: Energy to raise 1 g of water by 1°C
  - 1 cal = 4.186 J
- **Kilocalorie (kcal or Cal)**: Food "Calorie" 
  - 1 kcal = 1000 cal = 4186 J

---

## Specific Heat Capacity

**Specific heat** (c) is the energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K).

$$Q = mc\\Delta T$$

where:
- $Q$ = heat transferred (J)
- $m$ = mass (kg)
- $c$ = specific heat (J/kg·°C or J/kg·K)
- $\\Delta T$ = temperature change (°C or K)

### Common Specific Heats:

| Substance | c (J/kg·°C) |
|-----------|-------------|
| Water     | 4186        |
| Ice       | 2090        |
| Steam     | 2010        |
| Aluminum  | 900         |
| Steel     | 470         |
| Copper    | 387         |
| Lead      | 128         |

**Water has the highest specific heat** of common substances! This is why:
- Coastal areas have moderate climates
- Water is used in cooling systems
- Land heats/cools faster than oceans

---

## Sign Convention

- **$Q > 0$**: Heat absorbed (temperature increases)
- **$Q < 0$**: Heat released (temperature decreases)

$$\\Delta T = T_{final} - T_{initial}$$

If $\\Delta T > 0$: temperature increases → heat absorbed
If $\\Delta T < 0$: temperature decreases → heat released

---

## Calorimetry

**Calorimetry** measures heat transfer using conservation of energy.

**Principle**: In an isolated system, heat lost = heat gained

$$Q_{lost} + Q_{gained} = 0$$

or

$$\\sum Q_i = 0$$

### Typical Setup:
- Hot object placed in cold water
- System isolated (insulated calorimeter)
- Final temperature measured
- Energy conservation: $Q_{hot} + Q_{cold} = 0$

---

## Heat Capacity

**Heat capacity** (C) is heat needed to raise an object's temperature by 1°C:

$$C = mc$$

$$Q = C\\Delta T$$

Units: J/°C

**Difference:**
- **Specific heat (c)**: Property of material (per kg)
- **Heat capacity (C)**: Property of specific object (total)

---

## Methods of Heat Transfer

### 1. Conduction
- Heat transfer through direct contact
- Molecular collisions
- Requires material medium
- Example: Metal spoon in hot soup

### 2. Convection
- Heat transfer by fluid motion
- Hot fluid rises, cold sinks
- Requires fluid (liquid or gas)
- Example: Boiling water, ocean currents

### 3. Radiation
- Heat transfer by electromagnetic waves
- No medium required (works in vacuum)
- All objects emit thermal radiation
- Example: Sun warming Earth, heat lamps

---

## Problem-Solving Strategy

1. **Identify all objects** exchanging heat
2. **Set up energy conservation**: $\\sum Q = 0$
3. **Write Q for each object**: $Q = mc\\Delta T$
4. **Determine signs**:
   - Heating: $Q > 0$, $\\Delta T > 0$
   - Cooling: $Q < 0$, $\\Delta T < 0$
5. **Solve for unknown** (usually final temperature or specific heat)
6. **Check reasonableness**: Final T should be between initial temperatures

---

## Common Mistakes

❌ Using wrong sign for heat (lost vs. gained)
❌ Forgetting to convert units (g → kg, cal → J)
❌ Using Celsius in place of Kelvin inappropriately (ΔT is same, but not absolute T)
❌ Neglecting heat lost to surroundings (real calorimeters aren't perfectly insulated)
❌ Mixing up specific heat (c) and heat capacity (C)
`,
    },
  })

  console.log('✓ Created topic: Heat and Specific Heat')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: heatSpecific.id,
        question: 'How much heat is required to raise the temperature of 2.0 kg of water from 20°C to 80°C? (c_water = 4186 J/kg·°C)',
        solution: `**Given:**
- Mass: $m = 2.0$ kg
- Initial temp: $T_i = 20°\\text{C}$
- Final temp: $T_f = 80°\\text{C}$
- Specific heat: $c = 4186$ J/kg·°C

**Find:** Heat required $Q$

**Solution:**

Step 1: Calculate temperature change.
$$\\Delta T = T_f - T_i = 80 - 20 = 60°\\text{C}$$

Step 2: Apply heat formula.
$$Q = mc\\Delta T$$
$$Q = (2.0)(4186)(60)$$
$$Q = 502,320 \\text{ J} = 502 \\text{ kJ}$$

**Answer:** **502 kJ** of heat is required

This is equivalent to about 120 food Calories (kcal).`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: heatSpecific.id,
        question: 'A 0.50 kg piece of aluminum at 100°C is dropped into 2.0 kg of water at 20°C. What is the final equilibrium temperature? (c_Al = 900 J/kg·°C, c_water = 4186 J/kg·°C)',
        solution: `**Given:**
- Aluminum: $m_{Al} = 0.50$ kg, $T_{Al,i} = 100°\\text{C}$, $c_{Al} = 900$ J/kg·°C
- Water: $m_w = 2.0$ kg, $T_{w,i} = 20°\\text{C}$, $c_w = 4186$ J/kg·°C

**Find:** Final temperature $T_f$

**Solution:**

Step 1: Set up energy conservation.
$$Q_{Al} + Q_w = 0$$
$$m_{Al}c_{Al}\\Delta T_{Al} + m_w c_w \\Delta T_w = 0$$

Step 2: Express temperature changes.
$$m_{Al}c_{Al}(T_f - T_{Al,i}) + m_w c_w(T_f - T_{w,i}) = 0$$

Step 3: Substitute values.
$$(0.50)(900)(T_f - 100) + (2.0)(4186)(T_f - 20) = 0$$
$$450(T_f - 100) + 8372(T_f - 20) = 0$$
$$450T_f - 45,000 + 8372T_f - 167,440 = 0$$
$$8822T_f = 212,440$$
$$T_f = 24.1°\\text{C}$$

**Verification:** 
- Aluminum cools: $\\Delta T_{Al} = 24.1 - 100 = -75.9°\\text{C}$ ✓
- Water warms: $\\Delta T_w = 24.1 - 20 = 4.1°\\text{C}$ ✓
- Final T between initial temperatures ✓

**Answer:** Final temperature is **24.1°C**

The water barely warms because it has much larger mass and specific heat!`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: heatSpecific.id,
        question: 'A 0.20 kg piece of unknown metal at 150°C is placed in 0.50 kg of water at 20°C. The final temperature is 25°C. What is the specific heat of the metal? Assume no heat is lost to surroundings. (c_water = 4186 J/kg·°C)',
        solution: `**Given:**
- Metal: $m_m = 0.20$ kg, $T_{m,i} = 150°\\text{C}$, $c_m = ?$
- Water: $m_w = 0.50$ kg, $T_{w,i} = 20°\\text{C}$, $c_w = 4186$ J/kg·°C
- Final: $T_f = 25°\\text{C}$

**Find:** Specific heat of metal $c_m$

**Solution:**

Step 1: Set up energy conservation.
$$Q_m + Q_w = 0$$
$$m_m c_m \\Delta T_m + m_w c_w \\Delta T_w = 0$$

Step 2: Calculate temperature changes.
$$\\Delta T_m = 25 - 150 = -125°\\text{C}$$
$$\\Delta T_w = 25 - 20 = 5°\\text{C}$$

Step 3: Solve for $c_m$.
$$m_m c_m \\Delta T_m = -m_w c_w \\Delta T_w$$
$$c_m = -\\frac{m_w c_w \\Delta T_w}{m_m \\Delta T_m}$$
$$c_m = -\\frac{(0.50)(4186)(5)}{(0.20)(-125)}$$
$$c_m = -\\frac{10,465}{-25}$$
$$c_m = 419 \\text{ J/kg·°C}$$

**Comparison with known metals:**
- Copper: 387 J/kg·°C
- Steel: 470 J/kg·°C

**Answer:** Specific heat is **419 J/kg·°C**

This is close to copper (387) or possibly a copper alloy.`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: heatSpecific.id,
        front: 'What is the difference between heat and temperature?',
        back: 'Temperature is a measure of average kinetic energy (a property). Heat is energy transferred between objects due to temperature difference (energy in transit).',
      },
      {
        topicId: heatSpecific.id,
        front: 'Define specific heat capacity and give its formula.',
        back: 'Specific heat (c) is energy required to raise 1 kg of substance by 1°C. Formula: Q = mcΔT. Units: J/kg·°C or J/kg·K.',
      },
      {
        topicId: heatSpecific.id,
        front: 'What is the specific heat of water and why is it significant?',
        back: 'c_water = 4186 J/kg·°C, highest of common substances. This moderates coastal climates, makes water good for cooling, explains why land heats/cools faster than oceans.',
      },
      {
        topicId: heatSpecific.id,
        front: 'What is the sign convention for heat transfer?',
        back: 'Q > 0: heat absorbed (temperature increases). Q < 0: heat released (temperature decreases). ΔT = T_final - T_initial determines sign.',
      },
      {
        topicId: heatSpecific.id,
        front: 'State the principle of calorimetry.',
        back: 'In an isolated system, heat lost equals heat gained: Q_lost + Q_gained = 0, or ΣQ_i = 0. Energy conservation for thermal processes.',
      },
      {
        topicId: heatSpecific.id,
        front: 'What are the three methods of heat transfer?',
        back: 'Conduction (direct contact, molecular collisions), Convection (fluid motion, hot rises/cold sinks), Radiation (EM waves, no medium needed).',
      },
      {
        topicId: heatSpecific.id,
        front: 'Difference between specific heat (c) and heat capacity (C)?',
        back: 'Specific heat (c): property of material, J/kg·°C (per unit mass). Heat capacity (C = mc): property of specific object, J/°C (total). Q = CΔT.',
      },
      {
        topicId: heatSpecific.id,
        front: 'Convert between calories and joules.',
        back: '1 calorie = 4.186 J (energy to raise 1 g water by 1°C). 1 food Calorie (kcal) = 1000 cal = 4186 J. Always use J in physics calculations.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Heat and Specific Heat')

  // ============================================
  // TOPIC 3: Phase Changes and Latent Heat
  // ============================================
  const phaseChanges = await prisma.topic.upsert({
    where: { slug: 'phase-changes-latent-heat' },
    update: {},
    create: {
      slug: 'phase-changes-latent-heat',
      title: 'Phase Changes and Latent Heat',
      description: 'States of matter, phase transitions, and latent heat',
      order: 3,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# 🧊💧💨 Phase Changes and Latent Heat

## States of Matter

### Solid
- Fixed shape and volume
- Particles vibrate in fixed positions
- Strong intermolecular forces

### Liquid
- Fixed volume, takes shape of container
- Particles can flow past each other
- Moderate intermolecular forces

### Gas
- No fixed shape or volume
- Particles move freely
- Weak intermolecular forces

---

## Phase Changes

### Six Types of Phase Transitions:

**Adding Energy:**
1. **Melting** (Fusion): Solid → Liquid
2. **Vaporization**: Liquid → Gas
3. **Sublimation**: Solid → Gas (direct)

**Removing Energy:**
4. **Freezing** (Solidification): Liquid → Solid
5. **Condensation**: Gas → Liquid
6. **Deposition**: Gas → Solid (direct)

> **💡 Key Insight**: During a phase change, temperature remains constant even as energy is added/removed!

---

## Latent Heat

**Latent heat** is energy required to change phase without changing temperature.

### Heat of Fusion (L_f)

Energy to melt (or freeze) 1 kg of substance:

$$Q = mL_f$$

**For water**: $L_f = 334,000$ J/kg = 334 kJ/kg

### Heat of Vaporization (L_v)

Energy to vaporize (or condense) 1 kg of substance:

$$Q = mL_v$$

**For water**: $L_v = 2,260,000$ J/kg = 2260 kJ/kg

> Note: $L_v > L_f$ because you must completely overcome intermolecular forces for vaporization.

---

## Heating Curve for Water

When heating ice from -20°C to steam at 120°C:

**Stage 1**: Ice warms (-20°C → 0°C)
$$Q_1 = m c_{ice} \\Delta T = m(2090)(20)$$

**Stage 2**: Ice melts at 0°C (phase change)
$$Q_2 = m L_f = m(334,000)$$
Temperature stays at 0°C!

**Stage 3**: Water warms (0°C → 100°C)
$$Q_3 = m c_{water} \\Delta T = m(4186)(100)$$

**Stage 4**: Water boils at 100°C (phase change)
$$Q_4 = m L_v = m(2,260,000)$$
Temperature stays at 100°C!

**Stage 5**: Steam warms (100°C → 120°C)
$$Q_5 = m c_{steam} \\Delta T = m(2010)(20)$$

**Total energy**: $Q_{total} = Q_1 + Q_2 + Q_3 + Q_4 + Q_5$

---

## Why Temperature Stays Constant

During phase changes:
- Energy goes into breaking molecular bonds
- Does NOT increase kinetic energy (temperature)
- Potential energy increases, kinetic energy constant
- Both phases coexist at transition temperature

Example: Ice-water mixture stays at 0°C until all ice melts.

---

## Evaporation vs. Boiling

### Evaporation
- Occurs at surface
- Happens at any temperature
- Faster molecules escape
- Causes cooling (loses high-energy molecules)

### Boiling
- Occurs throughout liquid
- Happens at specific temperature (boiling point)
- Vapor pressure equals atmospheric pressure
- Bubbles form inside liquid

---

## Important Values for Water

| Property | Value |
|----------|-------|
| Melting point | 0°C (273 K) |
| Boiling point | 100°C (373 K) at 1 atm |
| L_f (fusion) | 334 kJ/kg |
| L_v (vaporization) | 2260 kJ/kg |
| c_ice | 2090 J/kg·°C |
| c_water | 4186 J/kg·°C |
| c_steam | 2010 J/kg·°C |

---

## Pressure Dependence

- **Higher pressure** → **higher boiling point**
  - Pressure cooker: cooks faster at higher T
  - Mountain top: water boils below 100°C

- **Lower pressure** → **lower boiling point**
  - Vacuum chamber: water boils at room temp

Melting point is less affected by pressure (except for water/ice).

---

## Problem-Solving Strategy

1. **Identify all stages** of heating/cooling
2. **Separate into segments**:
   - Temperature changes: $Q = mc\\Delta T$
   - Phase changes: $Q = mL$
3. **Add all energy contributions**: $Q_{total} = \\sum Q_i$
4. **Watch for mixed-phase problems** (some melts, some doesn't)
5. **Check if enough energy** for complete phase change

---

## Common Mistakes

❌ Forgetting temperature is constant during phase change
❌ Using wrong specific heat (ice vs. water vs. steam)
❌ Adding ΔT during phase change (it's zero!)
❌ Confusing L_f and L_v
❌ Not checking if phase change is complete
`,
    },
  })

  console.log('✓ Created topic: Phase Changes and Latent Heat')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: phaseChanges.id,
        question: 'How much energy is required to melt 2.0 kg of ice at 0°C? (L_f = 334 kJ/kg)',
        solution: `**Given:**
- Mass: $m = 2.0$ kg
- Temperature: Already at 0°C (melting point)
- Heat of fusion: $L_f = 334$ kJ/kg $= 334,000$ J/kg

**Find:** Energy required $Q$

**Solution:**

Since ice is already at melting point, only need energy for phase change:

$$Q = mL_f = (2.0)(334,000) = 668,000 \\text{ J} = 668 \\text{ kJ}$$

**Answer:** **668 kJ** is required to melt the ice

Note: Temperature stays at 0°C during melting!`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: phaseChanges.id,
        question: 'How much energy is needed to convert 0.50 kg of ice at -10°C to water at 20°C? (c_ice = 2090 J/kg·°C, L_f = 334 kJ/kg, c_water = 4186 J/kg·°C)',
        solution: `**Given:**
- Mass: $m = 0.50$ kg
- Initial: -10°C (ice)
- Final: 20°C (water)

**Find:** Total energy $Q_{total}$

**Solution:**

**Stage 1:** Heat ice from -10°C to 0°C
$$Q_1 = mc_{ice}\\Delta T = (0.50)(2090)(10) = 10,450 \\text{ J}$$

**Stage 2:** Melt ice at 0°C
$$Q_2 = mL_f = (0.50)(334,000) = 167,000 \\text{ J}$$

**Stage 3:** Heat water from 0°C to 20°C
$$Q_3 = mc_{water}\\Delta T = (0.50)(4186)(20) = 41,860 \\text{ J}$$

**Total energy:**
$$Q_{total} = Q_1 + Q_2 + Q_3$$
$$Q_{total} = 10,450 + 167,000 + 41,860$$
$$Q_{total} = 219,310 \\text{ J} = 219 \\text{ kJ}$$

**Answer:** **219 kJ** is required

**Note:** Most energy goes to melting (76%), not warming!`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: phaseChanges.id,
        question: 'A 0.10 kg piece of ice at 0°C is placed in 0.50 kg of water at 30°C in an insulated container. Does all the ice melt? If so, what is the final temperature? If not, how much ice melts? (L_f = 334 kJ/kg, c_water = 4186 J/kg·°C)',
        solution: `**Given:**
- Ice: $m_i = 0.10$ kg at 0°C
- Water: $m_w = 0.50$ kg at 30°C
- $L_f = 334,000$ J/kg, $c_w = 4186$ J/kg·°C

**Solution:**

**Step 1:** Find maximum energy available from cooling water to 0°C.
$$Q_{available} = m_w c_w \\Delta T = (0.50)(4186)(30) = 62,790 \\text{ J}$$

**Step 2:** Find energy needed to melt all ice.
$$Q_{needed} = m_i L_f = (0.10)(334,000) = 33,400 \\text{ J}$$

**Step 3:** Compare.
$$Q_{available} = 62,790 \\text{ J} > Q_{needed} = 33,400 \\text{ J}$$

**All ice melts!** ✓ Excess energy warms the resulting water.

**Step 4:** Find final temperature.

Energy conservation:
$$Q_{ice} + Q_{water} = 0$$
$$m_i L_f + m_i c_w(T_f - 0) + m_w c_w(T_f - 30) = 0$$

$$33,400 + (0.10)(4186)T_f + (0.50)(4186)(T_f - 30) = 0$$
$$33,400 + 418.6T_f + 2093T_f - 62,790 = 0$$
$$2511.6T_f = 29,390$$
$$T_f = 11.7°\\text{C}$$

**Answer:** All ice melts, final temperature is **11.7°C**`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: phaseChanges.id,
        front: 'What are the six types of phase changes?',
        back: 'Adding energy: Melting (S→L), Vaporization (L→G), Sublimation (S→G). Removing energy: Freezing (L→S), Condensation (G→L), Deposition (G→S).',
      },
      {
        topicId: phaseChanges.id,
        front: 'What is latent heat and why does temperature stay constant during phase changes?',
        back: 'Latent heat is energy for phase change without temperature change. Energy breaks molecular bonds (increases PE), not kinetic energy, so temperature stays constant.',
      },
      {
        topicId: phaseChanges.id,
        front: 'Define heat of fusion and give the formula.',
        back: 'Heat of fusion (L_f) is energy to melt/freeze 1 kg: Q = mL_f. For water: L_f = 334 kJ/kg. Temperature stays at melting point during transition.',
      },
      {
        topicId: phaseChanges.id,
        front: 'Define heat of vaporization and give the formula.',
        back: 'Heat of vaporization (L_v) is energy to vaporize/condense 1 kg: Q = mL_v. For water: L_v = 2260 kJ/kg. Much larger than L_f!',
      },
      {
        topicId: phaseChanges.id,
        front: 'Why is L_v much larger than L_f for water?',
        back: 'Vaporization requires completely overcoming all intermolecular forces. Melting only weakens bonds. For water: L_v = 2260 kJ/kg vs L_f = 334 kJ/kg (6.8× larger).',
      },
      {
        topicId: phaseChanges.id,
        front: 'Difference between evaporation and boiling?',
        back: 'Evaporation: surface only, any temperature, faster molecules escape, causes cooling. Boiling: throughout liquid, specific temperature, vapor pressure = atmospheric, bubbles form.',
      },
      {
        topicId: phaseChanges.id,
        front: 'How does pressure affect boiling point?',
        back: 'Higher pressure → higher boiling point (pressure cooker cooks faster). Lower pressure → lower boiling point (mountain top, water boils <100°C).',
      },
      {
        topicId: phaseChanges.id,
        front: 'What happens during an ice-water equilibrium at 0°C?',
        back: 'Both phases coexist. Temperature stays at 0°C until all ice melts or all water freezes. Energy added/removed changes phase, not temperature.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Phase Changes and Latent Heat')

  console.log('\n✅ Successfully seeded AP Physics 2 - Thermodynamics Part 2!')
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
