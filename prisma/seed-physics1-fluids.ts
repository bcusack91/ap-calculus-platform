import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

/**
 * Seeds the AP Physics 1 "Fluids" unit (Unit 8 in the 2024-25 CED).
 * Idempotent: every row is upserted/created on a stable slug, so re-running
 * is safe.
 *
 * Creates:
 *   • Category:        Fluids                       (slug = fluids)
 *   • Topics + lesson content:
 *       1. fluids-density-and-pressure
 *       2. fluids-buoyancy
 *       3. fluids-continuity
 *       4. fluids-bernoulli
 *   • ExampleProblem rows for each topic
 *   • Flashcards for each topic
 *
 * The matching entrance/exit-quiz questions live in
 *   src/data/exit-quizzes/ap-physics-1.ts
 * and the per-topic registration is added in
 *   src/data/exit-quizzes/index.ts
 * so the existing CourseEntranceQuiz component automatically picks them up.
 */
async function main() {
  console.log('Seeding AP Physics 1 — Fluids…')

  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })
  if (!physics1Course) throw new Error('AP Physics 1 course not found')

  const fluids = await prisma.category.upsert({
    where: { slug: 'fluids' },
    update: {
      name: 'Fluids',
      description: 'Density, pressure, buoyancy, continuity, and Bernoulli\'s principle',
      order: 8,
    },
    create: {
      slug: 'fluids',
      name: 'Fluids',
      description: 'Density, pressure, buoyancy, continuity, and Bernoulli\'s principle',
      order: 8,
      courseId: physics1Course.id,
    },
  })
  console.log('✓ Category: Fluids')

  // ─────────────────────────────────────────────────────────────────────
  // Topic 1: Density and Pressure
  // ─────────────────────────────────────────────────────────────────────
  const density = await prisma.topic.upsert({
    where: { slug: 'fluids-density-and-pressure' },
    update: {},
    create: {
      slug: 'fluids-density-and-pressure',
      title: 'Density and Pressure in Fluids',
      description: 'Density, pressure, hydrostatic pressure, and Pascal\'s principle',
      order: 1,
      categoryId: fluids.id,
      isPremium: false,
      textContent: `
# 💧 Density and Pressure

A **fluid** is anything that flows — gases and liquids. AP Physics 1 (Unit 8) treats fluids as **incompressible** and **non-viscous** unless told otherwise.

## Density

$$\\rho = \\frac{m}{V}$$

- $\\rho$ = density (kg/m³)
- $m$ = mass (kg)
- $V$ = volume (m³)

> **Reference:** $\\rho_{\\text{water}} = 1000$ kg/m³ = 1 g/cm³.

**Relative (specific) density** = $\\rho_{\\text{object}}/\\rho_{\\text{water}}$. If it's < 1 the object floats in water; > 1 it sinks.

---

## Pressure

$$P = \\frac{F_\\perp}{A}$$

- $P$ = pressure (Pa = N/m²)
- $F_\\perp$ = force perpendicular to the surface
- $A$ = area

Pressure is a **scalar** — it acts in all directions at a point.

---

## Hydrostatic (Gauge) Pressure

For a fluid at rest, the pressure increases linearly with depth:

$$P = P_0 + \\rho g h$$

- $P_0$ = pressure at the surface (often atmospheric, $\\approx 1.0\\times10^{5}$ Pa)
- $\\rho g h$ is called the **gauge pressure** — pressure *above* atmospheric

> **💡 Key Idea:** Pressure depends only on **depth and fluid density**, not on container shape or total volume.

---

## Pascal's Principle

A pressure change applied to an enclosed, incompressible fluid is transmitted **undiminished** to every point in the fluid.

For a hydraulic lift:

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$

A small force on a small piston produces a much larger force on a large piston (mechanical advantage = $A_2/A_1$).

---

## ⚠️ Common Mistakes

1. **Using container shape:** Pressure at depth $h$ does **not** depend on container shape — only $h$.
2. **Confusing absolute vs. gauge pressure:** $P_{\\text{abs}} = P_{\\text{atm}} + \\rho g h$.
3. **Mixing units:** 1 L = 0.001 m³. Always convert to SI.

---

## Key Formulas

| Quantity | Formula | Units |
|----------|---------|-------|
| Density | $\\rho = m/V$ | kg/m³ |
| Pressure | $P = F/A$ | Pa = N/m² |
| Gauge pressure | $P = \\rho g h$ | Pa |
| Hydraulic lift | $F_1/A_1 = F_2/A_2$ | — |
`,
      exampleProblems: {
        create: [
          {
            question: 'A diver descends to 12 m below the surface of a freshwater lake. What is the absolute pressure at that depth? ($P_{\\text{atm}} = 1.0\\times10^{5}$ Pa, $g = 9.8$ m/s²)',
            solution: `Hydrostatic pressure: $\\rho g h = 1000(9.8)(12) = 1.176\\times10^{5}$ Pa.\n\nAbsolute pressure: $P = P_{\\text{atm}} + \\rho g h = 1.0\\times10^{5} + 1.176\\times10^{5} \\approx 2.18\\times10^{5}$ Pa.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A hydraulic lift has a small piston of area $0.005$ m² and a large piston of area $0.20$ m². What input force lifts a 1500 kg car?',
            solution: `Weight to lift: $W = mg = 1500(9.8) = 14{,}700$ N.\n\nPascal's principle: $F_1/A_1 = F_2/A_2$, so\n$$F_1 = F_2 \\frac{A_1}{A_2} = 14{,}700 \\cdot \\frac{0.005}{0.20} = 367.5\\text{ N}.$$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A rectangular tank holds 0.40 m³ of olive oil ($\\rho = 920$ kg/m³). Find the mass of oil and the gauge pressure at the bottom of a 0.80 m column.',
            solution: `Mass: $m = \\rho V = 920(0.40) = 368$ kg.\n\nGauge pressure at depth 0.80 m: $P = \\rho g h = 920(9.8)(0.80) \\approx 7.21\\times10^{3}$ Pa.`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
    },
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: density.id, front: 'Density formula?', back: '$\\rho = m/V$ (kg/m³)' },
      { topicId: density.id, front: 'Pressure formula?', back: '$P = F_\\perp/A$ (Pa = N/m²)' },
      { topicId: density.id, front: 'Density of water?', back: '$1000$ kg/m³ = 1 g/cm³' },
      { topicId: density.id, front: 'Hydrostatic / gauge pressure at depth $h$?', back: '$P_{\\text{gauge}} = \\rho g h$' },
      { topicId: density.id, front: 'Absolute pressure at depth $h$?', back: '$P = P_{\\text{atm}} + \\rho g h$' },
      { topicId: density.id, front: 'Does pressure depend on container shape?', back: 'No — only on depth and fluid density.' },
      { topicId: density.id, front: 'State Pascal\'s principle.', back: 'A pressure change in a confined incompressible fluid is transmitted undiminished throughout.' },
      { topicId: density.id, front: 'Hydraulic lift relation?', back: '$F_1/A_1 = F_2/A_2$ — small piston force × area ratio = large piston force.' },
      { topicId: density.id, front: '1 atm in pascals?', back: '$\\approx 1.0\\times10^{5}$ Pa.' },
      { topicId: density.id, front: 'Specific (relative) density tells you what?', back: 'Whether an object floats ( < 1) or sinks ( > 1) in water.' },
    ],
  })
  console.log('✓ Topic: Density and Pressure  (+10 flashcards, 3 examples)')

  // ─────────────────────────────────────────────────────────────────────
  // Topic 2: Buoyancy & Archimedes' Principle
  // ─────────────────────────────────────────────────────────────────────
  const buoyancy = await prisma.topic.upsert({
    where: { slug: 'fluids-buoyancy' },
    update: {},
    create: {
      slug: 'fluids-buoyancy',
      title: 'Buoyancy and Archimedes\' Principle',
      description: 'Buoyant force, floating, sinking, and apparent weight in a fluid',
      order: 2,
      categoryId: fluids.id,
      isPremium: false,
      textContent: `
# 🛶 Buoyancy and Archimedes' Principle

When an object is submerged (fully or partially) in a fluid, the fluid exerts an upward **buoyant force**. This is just the net effect of pressure being larger on the bottom of the object than on the top.

## Archimedes' Principle

$$F_b = \\rho_{\\text{fluid}} \\, g \\, V_{\\text{disp}}$$

- $\\rho_{\\text{fluid}}$ = density of the **fluid** (not the object!)
- $V_{\\text{disp}}$ = volume of fluid displaced by the object

> **💡 Key Idea:** Buoyant force equals the **weight of the fluid displaced**.

---

## Floating, Sinking, Suspended

For an object of density $\\rho_{\\text{obj}}$ in a fluid of density $\\rho_{\\text{fluid}}$:

| Condition | Result |
|-----------|--------|
| $\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$ | **Floats** — only part submerged |
| $\\rho_{\\text{obj}} = \\rho_{\\text{fluid}}$ | **Suspended** anywhere in the fluid |
| $\\rho_{\\text{obj}} > \\rho_{\\text{fluid}}$ | **Sinks** to the bottom |

For a **floating** object the buoyant force equals its weight:

$$\\rho_{\\text{fluid}} g V_{\\text{sub}} = \\rho_{\\text{obj}} g V_{\\text{obj}}$$

So the **submerged fraction** equals the density ratio:

$$\\frac{V_{\\text{sub}}}{V_{\\text{obj}}} = \\frac{\\rho_{\\text{obj}}}{\\rho_{\\text{fluid}}}$$

---

## Apparent Weight

When an object is fully submerged but not floating freely:

$$W_{\\text{apparent}} = W_{\\text{actual}} - F_b = (\\rho_{\\text{obj}} - \\rho_{\\text{fluid}}) g V$$

This is what a scale reads when an object hangs from it underwater.

---

## ⚠️ Common Mistakes

1. **Using the wrong density.** Buoyancy uses the **fluid's** density, not the object's.
2. **Forgetting partial submersion.** A floating object only displaces enough fluid to balance its weight.
3. **Confusing weight and apparent weight.** True weight does not change underwater — only the *net* downward force does.

---

## Key Formulas

| Quantity | Formula |
|----------|---------|
| Buoyant force | $F_b = \\rho_{\\text{fluid}} g V_{\\text{disp}}$ |
| Float condition | $\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$ |
| Submerged fraction (floating) | $V_{\\text{sub}}/V_{\\text{obj}} = \\rho_{\\text{obj}}/\\rho_{\\text{fluid}}$ |
| Apparent weight | $W_{\\text{app}} = W - F_b$ |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 5.0 kg block of aluminum ($\\rho = 2700$ kg/m³) is fully submerged in water. Find the buoyant force on it.',
            solution: `Volume of block: $V = m/\\rho = 5.0/2700 \\approx 1.85\\times10^{-3}$ m³.\n\nBuoyant force (fully submerged → $V_{\\text{disp}} = V$):\n$$F_b = \\rho_{\\text{water}} g V = 1000(9.8)(1.85\\times10^{-3}) \\approx 18.1\\text{ N}.$$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A wooden block of density 600 kg/m³ floats in water. What fraction of the block is submerged?',
            solution: `Floating equilibrium: $\\rho_{\\text{fluid}} V_{\\text{sub}} = \\rho_{\\text{obj}} V_{\\text{obj}}$.\n\n$$\\frac{V_{\\text{sub}}}{V_{\\text{obj}}} = \\frac{600}{1000} = 0.60.$$\n\nSo **60%** of the block is below the water surface.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 2.0 kg metal sphere has a volume of $5.0\\times10^{-4}$ m³ and is completely submerged in water while hanging from a string. Find the tension in the string.',
            solution: `Weight: $W = mg = 2.0(9.8) = 19.6$ N.\n\nBuoyant force: $F_b = \\rho_{\\text{water}} g V = 1000(9.8)(5.0\\times10^{-4}) = 4.9$ N.\n\nString tension balances net downward force:\n$$T = W - F_b = 19.6 - 4.9 = 14.7\\text{ N}.$$`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
    },
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: buoyancy.id, front: 'State Archimedes\' principle.', back: 'Buoyant force = weight of fluid displaced: $F_b = \\rho_{\\text{fluid}} g V_{\\text{disp}}$.' },
      { topicId: buoyancy.id, front: 'Which density goes in the buoyant-force formula?', back: 'The density of the **fluid**, not the object.' },
      { topicId: buoyancy.id, front: 'When does an object float in a fluid?', back: 'When $\\rho_{\\text{obj}} < \\rho_{\\text{fluid}}$.' },
      { topicId: buoyancy.id, front: 'For a floating object, what fraction is submerged?', back: '$V_{\\text{sub}}/V_{\\text{obj}} = \\rho_{\\text{obj}}/\\rho_{\\text{fluid}}$.' },
      { topicId: buoyancy.id, front: 'Apparent weight underwater?', back: '$W_{\\text{app}} = W - F_b$.' },
      { topicId: buoyancy.id, front: 'Why does buoyancy exist physically?', back: 'Pressure increases with depth → more upward pressure on the bottom of the object than downward pressure on the top.' },
      { topicId: buoyancy.id, front: 'What happens if $\\rho_{\\text{obj}} = \\rho_{\\text{fluid}}$?', back: 'The object stays at neutral buoyancy — suspended at any depth.' },
      { topicId: buoyancy.id, front: 'Does a floating object\'s submerged volume depend on $g$?', back: 'No — $g$ cancels in the equilibrium equation.' },
      { topicId: buoyancy.id, front: 'A boat made of steel ($\\rho > \\rho_{\\text{water}}$) floats — why?', back: 'Its hollow shape displaces enough water that the average density is less than water.' },
      { topicId: buoyancy.id, front: 'A scale reads less for a submerged object because…', back: '…the buoyant force partially supports the weight; the scale registers $W - F_b$.' },
    ],
  })
  console.log('✓ Topic: Buoyancy  (+10 flashcards, 3 examples)')

  // ─────────────────────────────────────────────────────────────────────
  // Topic 3: Continuity Equation (Fluid Flow)
  // ─────────────────────────────────────────────────────────────────────
  const continuity = await prisma.topic.upsert({
    where: { slug: 'fluids-continuity' },
    update: {},
    create: {
      slug: 'fluids-continuity',
      title: 'Continuity Equation and Flow Rate',
      description: 'Volume flow rate, mass flow rate, and the continuity equation for incompressible fluids',
      order: 3,
      categoryId: fluids.id,
      isPremium: false,
      textContent: `
# 🌊 Continuity Equation

For an **incompressible** fluid in steady flow, the same mass passes every cross-section per second.

## Volume Flow Rate

$$Q = A v$$

- $Q$ = volume flow rate (m³/s)
- $A$ = cross-sectional area (m²)
- $v$ = average flow speed (m/s)

## Continuity Equation

$$A_1 v_1 = A_2 v_2$$

> **💡 Key Idea:** Where the pipe is **narrow**, the fluid moves **faster**. Where the pipe is wide, it moves slower. (Think of squeezing a hose.)

For compressible flow: $\\rho_1 A_1 v_1 = \\rho_2 A_2 v_2$ (mass flow rate). AP Physics 1 only deals with the incompressible case.

---

## Where Continuity Comes From

It's just **conservation of mass** for an incompressible fluid: in a time $\\Delta t$, the volume entering at section 1 ($A_1 v_1 \\Delta t$) must equal the volume leaving at section 2 ($A_2 v_2 \\Delta t$).

---

## ⚠️ Common Mistakes

1. **Using diameter instead of area.** Area scales as the square of radius (or diameter), so halving the diameter quadruples the speed.
2. **Adding speeds at a junction.** When two pipes merge, **flow rates** ($Av$) add, not speeds.
3. **Confusing flow speed with mass flow.** Speed depends on cross-section; mass flow rate is constant along a streamline.

---

## Key Formulas

| Quantity | Formula | Units |
|----------|---------|-------|
| Volume flow rate | $Q = Av$ | m³/s |
| Continuity (incompressible) | $A_1 v_1 = A_2 v_2$ | — |
| Mass flow rate | $\\dot m = \\rho A v$ | kg/s |
`,
      exampleProblems: {
        create: [
          {
            question: 'Water flows at 2.0 m/s through a horizontal pipe of cross-sectional area $4.0\\times10^{-4}$ m². The pipe narrows to area $1.0\\times10^{-4}$ m². Find the speed in the narrow section.',
            solution: `Continuity: $A_1 v_1 = A_2 v_2$.\n\n$$v_2 = v_1 \\frac{A_1}{A_2} = 2.0 \\cdot \\frac{4.0\\times10^{-4}}{1.0\\times10^{-4}} = 8.0\\text{ m/s}.$$`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A garden hose with inner diameter 2.0 cm carries water at 1.5 m/s. What is the volume flow rate (in L/s)?',
            solution: `Radius: $r = 0.010$ m → area $A = \\pi r^2 = \\pi(0.010)^2 \\approx 3.14\\times10^{-4}$ m².\n\n$$Q = Av = 3.14\\times10^{-4} \\cdot 1.5 \\approx 4.71\\times10^{-4}\\text{ m}^3/\\text{s} = 0.47\\text{ L/s}.$$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A pipe of radius 6 cm narrows to radius 2 cm. By what factor does the fluid speed change?',
            solution: `$A \\propto r^2$, so $\\frac{A_1}{A_2} = (6/2)^2 = 9$.\n\nBy continuity, $v_2 = v_1 \\cdot 9$ — the fluid speeds up by a factor of **9**.`,
            difficulty: Difficulty.MEDIUM,
            order: 3,
          },
        ],
      },
    },
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: continuity.id, front: 'Volume flow rate?', back: '$Q = A v$ (m³/s)' },
      { topicId: continuity.id, front: 'Continuity equation (incompressible)?', back: '$A_1 v_1 = A_2 v_2$' },
      { topicId: continuity.id, front: 'Where does fluid flow fastest in a pipe of varying width?', back: 'In the **narrowest** section.' },
      { topicId: continuity.id, front: 'If pipe radius halves, by what factor does fluid speed change?', back: 'Speed is multiplied by 4 (area ∝ r²).' },
      { topicId: continuity.id, front: 'What conservation law gives the continuity equation?', back: 'Conservation of mass for an incompressible fluid in steady flow.' },
      { topicId: continuity.id, front: 'Mass flow rate?', back: '$\\dot m = \\rho A v$ (kg/s)' },
      { topicId: continuity.id, front: 'Two pipes merge into one — what is conserved at the junction?', back: 'The total volume flow rate: $Q_1 + Q_2 = Q_{\\text{out}}$.' },
      { topicId: continuity.id, front: 'Units of $Q$?', back: 'm³/s (or L/s).' },
      { topicId: continuity.id, front: 'Why must $Av$ be constant along a streamline?', back: 'Because the same mass per second must cross every section in steady, incompressible flow.' },
      { topicId: continuity.id, front: 'Does continuity hold for compressible gases?', back: 'Only as $\\rho A v$ = const; the simpler $Av$ = const requires incompressibility.' },
    ],
  })
  console.log('✓ Topic: Continuity  (+10 flashcards, 3 examples)')

  // ─────────────────────────────────────────────────────────────────────
  // Topic 4: Bernoulli's Equation
  // ─────────────────────────────────────────────────────────────────────
  const bernoulli = await prisma.topic.upsert({
    where: { slug: 'fluids-bernoulli' },
    update: {},
    create: {
      slug: 'fluids-bernoulli',
      title: 'Bernoulli\'s Equation',
      description: 'Energy conservation for fluids: pressure, speed, and elevation along a streamline',
      order: 4,
      categoryId: fluids.id,
      isPremium: false,
      textContent: `
# ✈️ Bernoulli's Equation

Bernoulli's equation is **conservation of energy per unit volume** for an incompressible, non-viscous fluid in steady flow along a streamline:

$$P + \\tfrac{1}{2}\\rho v^2 + \\rho g y = \\text{const}$$

Or, between two points:

$$P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g y_1 \\;=\\; P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g y_2$$

| Term | Meaning |
|------|---------|
| $P$ | Static pressure |
| $\\tfrac{1}{2}\\rho v^2$ | Dynamic (kinetic) pressure |
| $\\rho g y$ | Gravitational pressure (height) |

> **💡 Key Idea:** Where the fluid moves **faster**, the **pressure is lower** (at the same height). This is why airplane wings lift, shower curtains pull inward, and roofs blow off in hurricanes.

---

## Special Cases

### Horizontal flow ($y_1 = y_2$)
$$P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$$

### Static fluid ($v_1 = v_2 = 0$)
$$P_1 + \\rho g y_1 = P_2 + \\rho g y_2 \\;\\;\\Rightarrow\\;\\; P_2 - P_1 = \\rho g (y_1 - y_2)$$

This recovers $P = P_0 + \\rho g h$.

### Torricelli's Theorem (open tank)
For a small hole a depth $h$ below the open top of a tank:
$$v = \\sqrt{2 g h}$$

Same as a freely-falling object dropped from height $h$ — fluid speed depends on depth, not on the tank's cross-section.

---

## Combining With Continuity

Most AP problems use **both** $A_1 v_1 = A_2 v_2$ **and** Bernoulli's equation. Use continuity to find an unknown speed, then plug into Bernoulli to find the pressure.

---

## ⚠️ Common Mistakes

1. **Forgetting the height term.** Always check whether $y_1$ and $y_2$ differ.
2. **Misreading the relation.** Pressure does **not** decrease everywhere a fluid moves — only along the *same* streamline (and at the same height).
3. **Using gauge vs. absolute pressure inconsistently.** Use the same convention on both sides.
4. **Applying Bernoulli through a fan or pump.** Bernoulli is only valid where no work is added or removed (and viscous losses are negligible).

---

## Key Formulas

| Form | Equation |
|------|----------|
| General | $P + \\tfrac{1}{2}\\rho v^2 + \\rho g y = $ const |
| Horizontal | $P_1 + \\tfrac{1}{2}\\rho v_1^2 = P_2 + \\tfrac{1}{2}\\rho v_2^2$ |
| Torricelli | $v = \\sqrt{2 g h}$ |
| Continuity (often paired) | $A_1 v_1 = A_2 v_2$ |
`,
      exampleProblems: {
        create: [
          {
            question: 'Water flows through a horizontal pipe. At point 1 the speed is 2 m/s and the pressure is $1.5\\times10^{5}$ Pa. At point 2 the pipe narrows so the speed is 6 m/s. Find the pressure at point 2. ($\\rho = 1000$ kg/m³)',
            solution: `Horizontal Bernoulli: $P_1 + \\tfrac12\\rho v_1^2 = P_2 + \\tfrac12\\rho v_2^2$.\n\n$$P_2 = P_1 + \\tfrac12\\rho(v_1^2 - v_2^2) = 1.5\\times10^5 + \\tfrac12 (1000)(4 - 36)$$\n$$= 1.5\\times10^5 - 1.6\\times10^4 = 1.34\\times10^{5}\\text{ Pa}.$$\n\nFaster speed → lower pressure ✓.`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'A large open water tank has a small hole 5.0 m below the water surface. Find the speed of water exiting the hole.',
            solution: `Torricelli's theorem: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(5.0)} = \\sqrt{98} \\approx 9.9$ m/s.\n\n(Same speed as a rock dropped 5.0 m — that's no accident; it falls straight out of energy conservation.)`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'A horizontal pipe goes from a section with $A_1 = 6.0\\times10^{-4}$ m², $v_1 = 1.5$ m/s, $P_1 = 2.0\\times10^{5}$ Pa to a narrower section with $A_2 = 2.0\\times10^{-4}$ m². Find $v_2$ and $P_2$.',
            solution: `Continuity → $v_2 = v_1 (A_1/A_2) = 1.5(3) = 4.5$ m/s.\n\nBernoulli (horizontal):\n$$P_2 = P_1 + \\tfrac12\\rho(v_1^2 - v_2^2) = 2.0\\times10^5 + \\tfrac12(1000)(2.25 - 20.25)$$\n$$= 2.0\\times10^5 - 9000 = 1.91\\times10^{5}\\text{ Pa}.$$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  await prisma.flashcard.createMany({
    data: [
      { topicId: bernoulli.id, front: 'Bernoulli\'s equation?', back: '$P + \\tfrac12\\rho v^2 + \\rho g y$ = constant along a streamline.' },
      { topicId: bernoulli.id, front: 'What does Bernoulli\'s equation represent physically?', back: 'Conservation of energy per unit volume for an incompressible, non-viscous fluid.' },
      { topicId: bernoulli.id, front: 'Faster fluid speed (at same height) means…', back: '…lower pressure.' },
      { topicId: bernoulli.id, front: 'Torricelli\'s theorem?', back: '$v = \\sqrt{2gh}$ — speed of fluid leaving a hole depth $h$ below an open surface.' },
      { topicId: bernoulli.id, front: 'Bernoulli for horizontal flow?', back: '$P_1 + \\tfrac12\\rho v_1^2 = P_2 + \\tfrac12\\rho v_2^2$.' },
      { topicId: bernoulli.id, front: 'When does Bernoulli reduce to $P = P_0 + \\rho g h$?', back: 'When the fluid is at rest ($v = 0$).' },
      { topicId: bernoulli.id, front: 'Why does an airplane wing produce lift?', back: 'Air moves faster over the curved top → lower pressure on top → net upward force.' },
      { topicId: bernoulli.id, front: 'Conditions required for Bernoulli\'s equation?', back: 'Incompressible, non-viscous, steady flow, along a single streamline.' },
      { topicId: bernoulli.id, front: 'Equation usually paired with Bernoulli to solve flow problems?', back: 'The continuity equation $A_1 v_1 = A_2 v_2$.' },
      { topicId: bernoulli.id, front: 'Units of each term in Bernoulli\'s equation?', back: 'Pa (= N/m² = J/m³) — energy per unit volume.' },
    ],
  })
  console.log('✓ Topic: Bernoulli  (+10 flashcards, 3 examples)')

  const totals = await prisma.topic.findMany({
    where: { categoryId: fluids.id },
    select: { _count: { select: { flashcards: true, exampleProblems: true } } },
  })
  const fc = totals.reduce((s, t) => s + t._count.flashcards, 0)
  const ex = totals.reduce((s, t) => s + t._count.exampleProblems, 0)
  console.log(`\n✅ AP Physics 1 Fluids seeded: ${totals.length} topics, ${fc} flashcards, ${ex} example problems.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
