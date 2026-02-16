import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Electric Circuits Part 1...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const circuitsCategory = await prisma.category.upsert({
    where: { slug: 'electric-circuits' },
    update: {},
    create: {
      slug: 'electric-circuits',
      name: 'Electric Circuits',
      description: 'Current, resistance, Ohm\'s law, series and parallel circuits, Kirchhoff\'s laws',
      order: 3,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Electric Circuits')

  // ============================================
  // TOPIC 1: Current, Resistance, and Ohm's Law
  // ============================================
  const currentResistance = await prisma.topic.upsert({
    where: { slug: 'current-resistance-ohms-law' },
    update: {},
    create: {
      slug: 'current-resistance-ohms-law',
      title: "Current, Resistance, and Ohm's Law",
      description: 'Electric current, resistance, resistivity, and Ohm\'s law',
      order: 1,
      categoryId: circuitsCategory.id,
      isPremium: false,
      textContent: `
# 🔌 Current, Resistance, and Ohm's Law

## Electric Current

**Electric current** is the rate of charge flow:

$$I = \\frac{\\Delta Q}{\\Delta t}$$

where:
- $I$ = current (Ampere, A)
- $\\Delta Q$ = charge passing point (C)
- $\\Delta t$ = time interval (s)

**1 Ampere = 1 Coulomb/second**

### Direction:
- **Conventional current**: Direction positive charges flow (+ to -)
- **Electron flow**: Opposite direction (- to +)

We use conventional current!

---

## Drift Velocity

In conductors, electrons drift slowly:

$$I = nAv_d e$$

where:
- $n$ = charge carrier density
- $A$ = cross-sectional area
- $v_d$ = drift velocity (~mm/s, very slow!)
- $e$ = elementary charge

> **💡 Key**: Current is fast (~speed of light), but individual electrons drift slowly!

---

## Resistance

**Resistance** opposes current flow:

$$R = \\frac{V}{I}$$

Units: **Ohm (Ω)** = V/A

### Resistivity

Material property:

$$R = \\frac{\\rho L}{A}$$

where:
- $\\rho$ = resistivity (Ω·m)
- $L$ = length
- $A$ = cross-sectional area

**Good conductors**: Low $\\rho$ (copper: $1.7 \\times 10^{-8}$ Ω·m)
**Insulators**: High $\\rho$

---

## Temperature Dependence

$$R = R_0(1 + \\alpha \\Delta T)$$

where $\\alpha$ is temperature coefficient.

- Metals: $\\alpha > 0$ (R increases with T)
- Semiconductors: $\\alpha < 0$ (R decreases with T)

---

## Ohm's Law

$$V = IR$$

**Ohmic materials**: Constant R (linear V-I graph)
**Non-ohmic**: R varies (curved V-I graph, like diodes)

---

## Electric Power

Power dissipated in resistor:

$$P = IV = I^2R = \\frac{V^2}{R}$$

Units: **Watt (W)** = J/s

Energy dissipated (heat):
$$E = Pt = I^2Rt = \\frac{V^2}{R}t$$

---

## Electrical Energy Cost

Power companies charge by **kilowatt-hour (kWh)**:

$$1 \\text{ kWh} = (1000 \\text{ W})(3600 \\text{ s}) = 3.6 \\times 10^6 \\text{ J}$$

Cost = (Power in kW) × (time in hours) × (rate per kWh)

---

## AC vs DC

**DC (Direct Current)**: Constant direction (batteries)
**AC (Alternating Current)**: Oscillates (wall outlets, 60 Hz in US)

For AC: $V_{rms} = \\frac{V_0}{\\sqrt{2}}$, $I_{rms} = \\frac{I_0}{\\sqrt{2}}$

Household: 120 V AC is $V_{rms}$

---

## Problem-Solving Strategy

1. **Identify knowns**: V, I, or R
2. **Choose formula**:
   - Ohm's Law: $V = IR$
   - Power: $P = IV = I^2R = V^2/R$
   - Resistance: $R = \\rho L/A$
3. **Watch units**: A, V, Ω, W
4. **Check reasonableness**

---

## Common Mistakes

❌ Confusing current direction (use conventional!)
❌ Using diameter instead of radius in area ($A = \\pi r^2$)
❌ Wrong power formula (choose based on what you know)
❌ Forgetting to convert units (mA → A, kΩ → Ω)
❌ Treating all materials as ohmic
`,
    },
  })

  console.log("✓ Created topic: Current, Resistance, and Ohm's Law")

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: currentResistance.id,
        question: 'A 12 V battery is connected to a 6.0 Ω resistor. (a) What is the current? (b) What power is dissipated?',
        solution: `**Given:**
- Voltage: $V = 12$ V
- Resistance: $R = 6.0$ Ω

**Part (a):** Current

Use Ohm's Law:
$$I = \\frac{V}{R} = \\frac{12}{6.0} = 2.0 \\text{ A}$$

**Part (b):** Power dissipated

$$P = IV = (2.0)(12) = 24 \\text{ W}$$

Or alternatively:
$$P = \\frac{V^2}{R} = \\frac{(12)^2}{6.0} = \\frac{144}{6.0} = 24 \\text{ W}$$ ✓

**Answer:**
- **(a)** I = **2.0 A**
- **(b)** P = **24 W**`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: currentResistance.id,
        question: 'A copper wire (ρ = 1.7 × 10⁻⁸ Ω·m) has length 2.0 m and diameter 1.0 mm. What is its resistance?',
        solution: `**Given:**
- Resistivity: $\\rho = 1.7 \\times 10^{-8}$ Ω·m
- Length: $L = 2.0$ m
- Diameter: $d = 1.0$ mm $= 1.0 \\times 10^{-3}$ m

**Solution:**

Step 1: Find cross-sectional area.
$$r = \\frac{d}{2} = 5.0 \\times 10^{-4} \\text{ m}$$
$$A = \\pi r^2 = \\pi (5.0 \\times 10^{-4})^2 = 7.85 \\times 10^{-7} \\text{ m}^2$$

Step 2: Calculate resistance.
$$R = \\frac{\\rho L}{A} = \\frac{(1.7 \\times 10^{-8})(2.0)}{7.85 \\times 10^{-7}}$$
$$R = \\frac{3.4 \\times 10^{-8}}{7.85 \\times 10^{-7}} = 0.043 \\text{ Ω}$$

**Answer:** R = **0.043 Ω** (very low, good conductor!)`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: currentResistance.id,
        question: 'A 1500 W electric heater operates on 120 V. (a) What is the current? (b) What is the resistance? (c) How much does it cost to run for 8 hours if electricity costs $0.12 per kWh?',
        solution: `**Given:**
- Power: $P = 1500$ W
- Voltage: $V = 120$ V
- Time: $t = 8$ hours
- Rate: $0.12 per kWh

**Part (a):** Current

$$P = IV$$
$$I = \\frac{P}{V} = \\frac{1500}{120} = 12.5 \\text{ A}$$

**Part (b):** Resistance

$$P = \\frac{V^2}{R}$$
$$R = \\frac{V^2}{P} = \\frac{(120)^2}{1500} = \\frac{14,400}{1500} = 9.6 \\text{ Ω}$$

Or using Ohm's Law:
$$R = \\frac{V}{I} = \\frac{120}{12.5} = 9.6 \\text{ Ω}$$ ✓

**Part (c):** Cost

Energy used:
$$E = Pt = (1500 \\text{ W})(8 \\text{ h}) = 12,000 \\text{ Wh} = 12 \\text{ kWh}$$

Cost:
$$\\text{Cost} = (12 \\text{ kWh})(\\$0.12/\\text{kWh}) = \\$1.44$$

**Answer:**
- **(a)** I = **12.5 A**
- **(b)** R = **9.6 Ω**
- **(c)** Cost = **$1.44**`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: currentResistance.id,
        front: 'Define electric current and give its units.',
        back: 'Current is rate of charge flow: I = ΔQ/Δt. Unit: Ampere (A) = C/s. Conventional current flows from + to - (opposite to electron flow).',
      },
      {
        topicId: currentResistance.id,
        front: "State Ohm's Law.",
        back: 'V = IR, where V is voltage (V), I is current (A), R is resistance (Ω). Ohmic materials have constant R (linear V-I graph). Non-ohmic: R varies.',
      },
      {
        topicId: currentResistance.id,
        front: 'How is resistance related to resistivity?',
        back: 'R = ρL/A, where ρ is resistivity (material property, Ω·m), L is length, A is cross-sectional area. Long thin wires have high R.',
      },
      {
        topicId: currentResistance.id,
        front: 'Give three formulas for electric power.',
        back: 'P = IV = I²R = V²/R. Units: Watt (W) = J/s. Choose formula based on what you know. Energy: E = Pt.',
      },
      {
        topicId: currentResistance.id,
        front: 'What is the relationship between resistance and temperature?',
        back: 'R = R₀(1 + αΔT). Metals: α > 0 (R increases with T). Semiconductors: α < 0 (R decreases with T). Temperature coefficient α varies by material.',
      },
      {
        topicId: currentResistance.id,
        front: 'What is a kilowatt-hour (kWh)?',
        back: '1 kWh = 3.6 × 10⁶ J. Energy unit used by power companies. Energy = (Power in kW) × (time in hours). Cost = Energy × rate.',
      },
      {
        topicId: currentResistance.id,
        front: 'What is drift velocity?',
        back: 'Average velocity of charge carriers in conductor. Very slow (~mm/s). Current: I = nAv_de. Signal travels fast (~c), but electrons drift slowly!',
      },
      {
        topicId: currentResistance.id,
        front: 'Difference between AC and DC?',
        back: 'DC: constant direction (batteries). AC: oscillates (wall outlets, 60 Hz US). For AC: V_rms = V₀/√2. Household 120 V is rms value.',
      },
    ],
  })

  console.log("✓ Created 8 flashcards for Current, Resistance, and Ohm's Law")

  console.log('\n✅ Successfully seeded AP Physics 2 - Electric Circuits Part 1!')
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
