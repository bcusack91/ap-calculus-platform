import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Thermodynamics Part 3...')

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
  // TOPIC 4: Laws of Thermodynamics
  // ============================================
  const thermoLaws = await prisma.topic.upsert({
    where: { slug: 'laws-of-thermodynamics' },
    update: {},
    create: {
      slug: 'laws-of-thermodynamics',
      title: 'Laws of Thermodynamics',
      description: 'First and second laws of thermodynamics, PV diagrams, and thermodynamic processes',
      order: 4,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# ⚙️ Laws of Thermodynamics

## First Law of Thermodynamics

**Energy conservation** for thermodynamic systems:

$$\\Delta U = Q - W$$

where:
- $\\Delta U$ = change in internal energy (J)
- $Q$ = heat added to system (J)
- $W$ = work done BY system (J)

### Sign Conventions:

**Heat (Q):**
- $Q > 0$: Heat added to system (absorbed)
- $Q < 0$: Heat removed from system (released)

**Work (W):**
- $W > 0$: System does work on surroundings (expansion)
- $W < 0$: Work done on system (compression)

**Internal Energy (ΔU):**
- $\\Delta U > 0$: Energy increases, temperature rises
- $\\Delta U < 0$: Energy decreases, temperature falls

> **💡 Key Insight**: Energy can enter as heat or leave as work, but total energy is conserved.

---

## Internal Energy

**Internal energy** is the total kinetic and potential energy of all molecules.

For an **ideal gas**:
$$U = \\frac{3}{2}nRT$$

where:
- $n$ = number of moles
- $R$ = 8.31 J/(mol·K)
- $T$ = absolute temperature (K)

**For ideal gas**: $\\Delta U$ depends ONLY on temperature change!
$$\\Delta U = \\frac{3}{2}nR\\Delta T$$

---

## Work in Thermodynamic Processes

For gas expansion/compression:

$$W = P\\Delta V$$

where:
- $P$ = pressure (Pa)
- $\\Delta V = V_f - V_i$ (m³)

**On a PV diagram**: Work = area under curve

- **Expansion** ($\\Delta V > 0$): $W > 0$ (system does work)
- **Compression** ($\\Delta V < 0$): $W < 0$ (work done on system)

---

## Thermodynamic Processes

### 1. Isothermal (Constant Temperature)

- $\\Delta T = 0$ → $\\Delta U = 0$
- First Law: $Q = W$
- All heat becomes work
- For ideal gas: $PV = $ constant

### 2. Adiabatic (No Heat Transfer)

- $Q = 0$
- First Law: $\\Delta U = -W$
- Work comes from/goes to internal energy
- Temperature changes!
- Example: Rapid compression/expansion

### 3. Isobaric (Constant Pressure)

- $P = $ constant
- $W = P\\Delta V$
- $Q = \\Delta U + P\\Delta V$
- Example: Piston free to move

### 4. Isochoric (Constant Volume)

- $\\Delta V = 0$ → $W = 0$
- First Law: $Q = \\Delta U$
- All heat changes internal energy
- Example: Rigid container

---

## PV Diagrams

**Pressure-Volume (PV) diagrams** show thermodynamic processes:

- **Horizontal line**: Isobaric (constant P)
- **Vertical line**: Isochoric (constant V)
- **Curve**: Isothermal or adiabatic

**Work = area under curve**
- Clockwise cycle: Net work done BY system (W > 0)
- Counter-clockwise: Net work done ON system (W < 0)

---

## Second Law of Thermodynamics

**Heat flows spontaneously from hot to cold**, not the reverse (without external work).

Equivalently: **Entropy of an isolated system always increases**.

**Entropy (S)**: Measure of disorder/randomness
- Natural processes increase total entropy
- Energy becomes more spread out, less useful

### Implications:

1. **No perfect heat engine**: Can't convert all heat to work
2. **No perfect refrigerator**: Can't transfer heat from cold to hot without work
3. **Time's arrow**: Explains why time has a direction

---

## Heat Engines

Convert heat into mechanical work:

**Efficiency:**
$$e = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H} = 1 - \\frac{Q_C}{Q_H}$$

where:
- $Q_H$ = heat absorbed from hot reservoir
- $Q_C$ = heat expelled to cold reservoir
- $W = Q_H - Q_C$ = useful work output

**Maximum efficiency** (Carnot engine):
$$e_{max} = 1 - \\frac{T_C}{T_H}$$

Temperatures in **Kelvin**!

> **💡 Key**: Efficiency always < 100%. Some heat must be expelled.

---

## Refrigerators and Heat Pumps

Move heat from cold to hot (requires work):

**Coefficient of Performance (COP):**
$$COP_{refrigerator} = \\frac{Q_C}{W}$$
$$COP_{heat pump} = \\frac{Q_H}{W}$$

Higher COP = more efficient

---

## Problem-Solving Strategy

1. **Identify the process**: Isothermal, adiabatic, isobaric, isochoric
2. **Apply First Law**: $\\Delta U = Q - W$
3. **Use process-specific relationships**:
   - Isothermal: $\\Delta U = 0$
   - Adiabatic: $Q = 0$
   - Isobaric: $W = P\\Delta V$
   - Isochoric: $W = 0$
4. **For ideal gas**: $\\Delta U = \\frac{3}{2}nR\\Delta T$
5. **Watch signs** for Q and W!

---

## Common Mistakes

❌ Wrong sign for Q or W
❌ Using Celsius instead of Kelvin for Carnot efficiency
❌ Forgetting ΔU = 0 for isothermal process
❌ Confusing heat added vs. heat expelled in engines
❌ Assuming all heat can be converted to work (violates 2nd Law)
`,
    },
  })

  console.log('✓ Created topic: Laws of Thermodynamics')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: thermoLaws.id,
        question: 'A gas absorbs 500 J of heat and does 300 J of work. What is the change in internal energy?',
        solution: `**Given:**
- Heat absorbed: $Q = +500$ J (positive, added to system)
- Work done by system: $W = +300$ J (positive, expansion)

**Find:** Change in internal energy $\\Delta U$

**Solution:**

Apply First Law:
$$\\Delta U = Q - W$$
$$\\Delta U = 500 - 300 = 200 \\text{ J}$$

**Answer:** Internal energy **increases by 200 J**

The gas gained 500 J as heat but lost 300 J doing work, net gain of 200 J.`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: thermoLaws.id,
        question: 'An ideal gas undergoes an isothermal expansion at 300 K. It absorbs 800 J of heat. (a) What is the change in internal energy? (b) How much work does the gas do?',
        solution: `**Given:**
- Process: Isothermal (constant T = 300 K)
- Heat absorbed: $Q = +800$ J

**Find:** (a) $\\Delta U$, (b) $W$

**Solution:**

**Part (a):** Change in internal energy

For isothermal process with ideal gas:
$$\\Delta T = 0 \\Rightarrow \\Delta U = 0$$

**Part (b):** Work done

Apply First Law:
$$\\Delta U = Q - W$$
$$0 = 800 - W$$
$$W = 800 \\text{ J}$$

**Answer:**
- **(a)** $\\Delta U = 0$ (temperature constant)
- **(b)** $W = 800$ J (all heat converted to work!)

In isothermal expansion, all absorbed heat becomes work.`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: thermoLaws.id,
        question: 'A Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. (a) What is its maximum efficiency? (b) If it absorbs 1000 J from the hot reservoir, how much work does it do? (c) How much heat is expelled to the cold reservoir?',
        solution: `**Given:**
- Hot reservoir: $T_H = 500$ K
- Cold reservoir: $T_C = 300$ K
- Heat absorbed: $Q_H = 1000$ J

**Solution:**

**Part (a):** Maximum efficiency

For Carnot engine:
$$e_{max} = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300}{500}$$
$$e_{max} = 1 - 0.6 = 0.4 = 40\\%$$

**Part (b):** Work output

$$e = \\frac{W}{Q_H}$$
$$W = e \\cdot Q_H = (0.4)(1000) = 400 \\text{ J}$$

**Part (c):** Heat expelled

Energy conservation:
$$Q_H = W + Q_C$$
$$Q_C = Q_H - W = 1000 - 400 = 600 \\text{ J}$$

**Verification:**
$$e = 1 - \\frac{Q_C}{Q_H} = 1 - \\frac{600}{1000} = 0.4$$ ✓

**Answer:**
- **(a)** Maximum efficiency: **40%**
- **(b)** Work done: **400 J**
- **(c)** Heat expelled: **600 J**

Even the perfect Carnot engine can't achieve 100% efficiency!`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: thermoLaws.id,
        front: 'State the First Law of Thermodynamics and define each term.',
        back: 'ΔU = Q - W. ΔU = change in internal energy, Q = heat added to system, W = work done BY system. Energy conservation for thermodynamic systems.',
      },
      {
        topicId: thermoLaws.id,
        front: 'What are the sign conventions for Q, W, and ΔU?',
        back: 'Q: +absorbed/-released. W: +expansion (system does work)/-compression (work on system). ΔU: +energy increases/-energy decreases.',
      },
      {
        topicId: thermoLaws.id,
        front: 'Describe an isothermal process.',
        back: 'Constant temperature (ΔT = 0). For ideal gas: ΔU = 0, so Q = W. All heat absorbed becomes work. PV = constant.',
      },
      {
        topicId: thermoLaws.id,
        front: 'Describe an adiabatic process.',
        back: 'No heat transfer (Q = 0). First Law: ΔU = -W. Work comes from/goes to internal energy. Temperature changes. Example: rapid compression.',
      },
      {
        topicId: thermoLaws.id,
        front: 'Describe isobaric and isochoric processes.',
        back: 'Isobaric: constant pressure, W = PΔV. Isochoric: constant volume, ΔV = 0 so W = 0, all heat changes internal energy (Q = ΔU).',
      },
      {
        topicId: thermoLaws.id,
        front: 'State the Second Law of Thermodynamics.',
        back: 'Heat flows spontaneously from hot to cold only. Equivalently: entropy of isolated system always increases. No perfect heat engine (e < 100%).',
      },
      {
        topicId: thermoLaws.id,
        front: 'What is the efficiency of a heat engine?',
        back: 'e = W/Q_H = (Q_H - Q_C)/Q_H = 1 - Q_C/Q_H. Maximum (Carnot): e_max = 1 - T_C/T_H (temperatures in Kelvin!). Always <100%.',
      },
      {
        topicId: thermoLaws.id,
        front: 'How is work calculated on a PV diagram?',
        back: 'Work = area under curve. Expansion (ΔV > 0): W > 0 (system does work). Compression (ΔV < 0): W < 0 (work on system). Clockwise cycle: net positive work.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Laws of Thermodynamics')

  console.log('\n✅ Successfully seeded AP Physics 2 - Thermodynamics Part 3!')
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
