import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Energy Part 2...')

  // Find the Energy category
  const energyCategory = await prisma.category.findUnique({
    where: { slug: 'energy' },
  })

  if (!energyCategory) {
    throw new Error('Energy category not found')
  }

  // ============================================
  // TOPIC 3: Elastic Potential Energy and Springs
  // ============================================
  const elasticPE = await prisma.topic.upsert({
    where: { slug: 'elastic-potential-energy' },
    update: {},
    create: {
      slug: 'elastic-potential-energy',
      title: 'Elastic Potential Energy and Springs',
      description: 'Hooke\'s Law, spring force, and elastic potential energy',
      order: 3,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# 🌀 Elastic Potential Energy and Springs

## Hooke's Law

A spring exerts a **restoring force** proportional to its displacement from equilibrium:

$$F_s = -kx$$

where:
- $F_s$ = spring force (N)
- $k$ = spring constant (N/m) - measure of spring's stiffness
- $x$ = displacement from equilibrium position (m)
- Negative sign means force opposes displacement (restoring force)

> **💡 Hooke's Law**: Named after Robert Hooke, this is valid for springs in their **elastic region** (not stretched/compressed too far).

---

## Understanding the Spring Force

### Equilibrium Position
The **natural length** of the spring - no force exerted ($x = 0$)

### Compression ($x < 0$)
- Spring is **squeezed**
- Force pushes **outward** (away from compression)

### Extension ($x > 0$)
- Spring is **stretched**
- Force pulls **inward** (back toward equilibrium)

### Spring Constant $k$
- **Large $k$**: Stiff spring (hard to stretch/compress)
- **Small $k$**: Soft spring (easy to stretch/compress)
- Units: N/m (newtons per meter)

---

## Elastic Potential Energy

Energy stored in a compressed or stretched spring:

$$PE_{elastic} = \\frac{1}{2}kx^2$$

where:
- $PE_{elastic}$ (or $U_s$) = elastic potential energy (J)
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium (m)

### Key Properties

1. **Always positive** - $x^2$ is always positive (compressed or stretched)
2. **Quadratic relationship** - Double displacement = 4× energy
3. **Minimum at equilibrium** - PE = 0 when $x = 0$
4. **Symmetric** - Same energy whether compressed or stretched by $|x|$

---

## Work Done by/on a Spring

### Work done BY spring (spring releases)

$$W_{by\\,spring} = -\\Delta PE_{elastic} = -\\left(\\frac{1}{2}kx_f^2 - \\frac{1}{2}kx_i^2\\right)$$

### Work done ON spring (you compress/stretch it)

$$W_{on\\,spring} = \\Delta PE_{elastic} = \\frac{1}{2}kx_f^2 - \\frac{1}{2}kx_i^2$$

### Special case: From equilibrium to $x$

$$W = \\int_0^x F\\,dx = \\int_0^x kx'\\,dx' = \\frac{1}{2}kx^2$$

This equals the elastic PE stored.

---

## Why Is PE = ½kx², Not kx?

The spring force is **variable**: $F = kx$ (increases with displacement).

Average force from 0 to $x$: $F_{avg} = \\frac{0 + kx}{2} = \\frac{kx}{2}$

Work = Average force × distance:
$$W = F_{avg} \\cdot x = \\frac{kx}{2} \\cdot x = \\frac{1}{2}kx^2$$

Alternatively, work is the area under the $F$ vs. $x$ graph:
- Triangle with base $x$ and height $kx$
- Area = $\\frac{1}{2} \\cdot base \\cdot height = \\frac{1}{2}kx^2$

---

## Conservation of Energy with Springs

For a mass on a spring (horizontal, no friction):

$$E_{total} = KE + PE_{elastic} = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = constant$$

- At **maximum compression/extension**: $v = 0$, all energy is elastic PE
- At **equilibrium**: $x = 0$, all energy is kinetic

---

## Spring Combinations

### Springs in Series (end-to-end)

Effective spring constant is **smaller**:

$$\\frac{1}{k_{eff}} = \\frac{1}{k_1} + \\frac{1}{k_2}$$

Easier to stretch than individual springs.

### Springs in Parallel (side-by-side)

Effective spring constant is **larger**:

$$k_{eff} = k_1 + k_2$$

Harder to stretch than individual springs.

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the ½
❌ **Wrong**: $PE = kx^2$
✅ **Right**: $PE = \\frac{1}{2}kx^2$

### Mistake 2: Using Wrong x
$x$ is displacement **from equilibrium**, not from one end of possible motion!

### Mistake 3: Thinking PE Can Be Negative
Elastic PE is **always ≥ 0** (because of $x^2$)

### Mistake 4: Sign in Hooke's Law
$F = -kx$ has a negative sign (restoring force), but many problems just use magnitude: $|F| = k|x|$

---

## Problem-Solving Strategy

1. **Identify equilibrium position** where $x = 0$
2. **Measure displacement** $x$ from equilibrium
3. **For force**: Use $F = kx$ (magnitude) with direction toward equilibrium
4. **For energy**: Use $PE = \\frac{1}{2}kx^2$
5. **Apply conservation of energy** if appropriate

---

## Applications

### Vehicle Suspension
Springs absorb bumps, converting KE to elastic PE and back.

### Pogo Sticks
Compression of spring stores PE, which launches you upward (converts to gravitational PE and KE).

### Trampolines
Springs and elastic mat store PE when compressed, releasing it to bounce you up.

### Molecular Bonds
Atoms in molecules act like masses connected by springs (vibrating).

---

## Comparison: Elastic vs. Gravitational PE

| Property | Gravitational $PE_g = mgh$ | Elastic $PE_s = \\frac{1}{2}kx^2$ |
|----------|---------------------------|--------------------------------|
| **Zero point** | Choose reference (arbitrary) | Equilibrium position (natural) |
| **Can be negative?** | Yes (below reference) | No (always ≥ 0) |
| **Force** | Constant ($F = mg$) | Variable ($F = kx$) |
| **Exponent** | Linear in $h$ | Quadratic in $x$ |
| **Conservative?** | Yes | Yes |

---

## Key Formulas Summary

| Concept | Formula | Units |
|---------|---------|-------|
| Hooke's Law | $F_s = -kx$ | N |
| Spring constant | $k$ | N/m |
| Elastic PE | $PE_s = \\frac{1}{2}kx^2$ | J |
| Work by spring | $W = -\\Delta PE_s$ | J |
| Total energy (horizontal) | $E = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$ | J |
`,
      exampleProblems: {
        create: [
          {
            question: 'A spring with spring constant $k = 200$ N/m is compressed 0.15 m from its equilibrium position. (a) What is the spring force? (b) How much elastic potential energy is stored?',
            solution: `**Given Information:**
- Spring constant: $k = 200$ N/m
- Compression: $x = 0.15$ m

---

**(a) Find spring force**

---

Use Hooke's Law:

$$F = kx$$

(Using magnitude; direction is toward equilibrium)

$$F = (200)(0.15) = 30 \\text{ N}$$

The force points **outward** (opposite to compression).

---

**(b) Find elastic potential energy**

---

$$PE_{elastic} = \\frac{1}{2}kx^2$$

$$PE_{elastic} = \\frac{1}{2}(200)(0.15)^2$$

$$PE_{elastic} = 100(0.0225)$$

$$PE_{elastic} = 2.25 \\text{ J}$$

---

**Answers**: 
- (a) Spring force: **30 N** (directed outward, opposing compression)
- (b) Elastic PE stored: **2.25 J**`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 0.5 kg block is attached to a spring with $k = 100$ N/m on a frictionless horizontal surface. The spring is compressed 0.2 m and released. What is the maximum speed of the block?',
            solution: `**Given Information:**
- Mass: $m = 0.5$ kg
- Spring constant: $k = 100$ N/m
- Initial compression: $x_i = 0.2$ m
- Frictionless surface

---

**Find:** Maximum speed $v_{max}$

---

**Analysis:**

Maximum speed occurs at **equilibrium position** ($x = 0$) where all elastic PE converts to KE.

---

**Step 1: Calculate initial energy (at maximum compression)**

At $x = 0.2$ m:
- $KE_i = 0$ (released from rest)
- $PE_i = \\frac{1}{2}kx_i^2 = \\frac{1}{2}(100)(0.2)^2 = 50(0.04) = 2$ J

Total initial energy: $E_i = 2$ J

---

**Step 2: Calculate final energy (at equilibrium)**

At $x = 0$:
- $KE_f = \\frac{1}{2}mv_{max}^2$ (unknown)
- $PE_f = \\frac{1}{2}k(0)^2 = 0$ J

Total final energy: $E_f = \\frac{1}{2}mv_{max}^2$

---

**Step 3: Apply conservation of energy**

$$E_i = E_f$$

$$2 = \\frac{1}{2}(0.5)v_{max}^2$$

$$2 = 0.25v_{max}^2$$

$$v_{max}^2 = 8$$

$$v_{max} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.83 \\text{ m/s}$$

---

**Alternative formula:**

For a spring-mass system released from rest at maximum displacement:

$$v_{max} = x_{max}\\sqrt{\\frac{k}{m}} = 0.2\\sqrt{\\frac{100}{0.5}} = 0.2\\sqrt{200} = 0.2(10\\sqrt{2}) = 2\\sqrt{2}$$ m/s ✓

---

**Answer**: The maximum speed is **$2\\sqrt{2}$ m/s** or approximately **2.83 m/s**.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 2 kg block is attached to a vertical spring with $k = 500$ N/m. The block is pulled down 0.1 m from equilibrium and released. (a) What is the total mechanical energy? (b) How high above the release point does the block rise?',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Spring constant: $k = 500$ N/m
- Initial displacement: $x_i = 0.1$ m (down from equilibrium)
- Vertical spring

---

**(a) Find total mechanical energy**

---

**Step 1: Choose reference for gravitational PE**

Let equilibrium position be $h = 0$ for gravitational PE.

---

**Step 2: Calculate energy at release point**

At release (0.1 m below equilibrium):
- $KE_i = 0$ (released from rest)
- $PE_{elastic,i} = \\frac{1}{2}kx_i^2 = \\frac{1}{2}(500)(0.1)^2 = 250(0.01) = 2.5$ J
- $PE_{grav,i} = mgh_i = (2)(9.8)(-0.1) = -1.96$ J (negative because below equilibrium)

Total energy:
$$E = 0 + 2.5 + (-1.96) = 0.54 \\text{ J}$$

---

**(b) Find maximum height above release point**

---

**Step 3: At maximum height**

At highest point, block momentarily stops ($v = 0$) and spring returns through equilibrium and compresses.

Let's say spring compresses by distance $d$ above equilibrium.

At this point:
- $KE = 0$
- $PE_{elastic} = \\frac{1}{2}kd^2$
- $PE_{grav} = mg(d)$ (height $d$ above equilibrium, which is $d + 0.1$ above release)

---

**Step 4: Apply conservation of energy**

$$E_{initial} = E_{final}$$

$$0.54 = 0 + \\frac{1}{2}kd^2 + mgd$$

$$0.54 = 250d^2 + 19.6d$$

$$250d^2 + 19.6d - 0.54 = 0$$

---

**Step 5: Solve quadratic**

Using quadratic formula: $d = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

$$d = \\frac{-19.6 \\pm \\sqrt{(19.6)^2 - 4(250)(-0.54)}}{2(250)}$$

$$d = \\frac{-19.6 \\pm \\sqrt{384.16 + 540}}{500}$$

$$d = \\frac{-19.6 \\pm \\sqrt{924.16}}{500}$$

$$d = \\frac{-19.6 \\pm 30.4}{500}$$

Taking positive solution:
$$d = \\frac{10.8}{500} = 0.0216 \\text{ m} = 2.16 \\text{ cm}$$

Height above release point: $h = d + 0.1 = 0.0216 + 0.1 = 0.1216$ m

---

**Simplified approach (if we ignore spring compression at top):**

If spring just returns to equilibrium ($d = 0$):

$$0.54 = 0 + 0 + mg(h)$$
$$h = \\frac{0.54}{19.6} \\approx 0.0276$$ m

But spring actually compresses slightly, giving total height ≈ 0.122 m.

---

**Answers**: 
- (a) Total mechanical energy: **0.54 J**
- (b) Height above release point: approximately **0.122 m** or **12.2 cm**

> **Note**: This problem is complex because both gravitational and elastic PE change. The spring compresses slightly above equilibrium before the block stops.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Elastic Potential Energy')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: elasticPE.id,
        front: 'What is Hooke\'s Law?',
        back: '$F_s = -kx$ where $k$ is spring constant and $x$ is displacement from equilibrium. Negative sign means force is restoring (opposes displacement).',
        hint: 'Spring force is proportional to displacement',
      },
      {
        topicId: elasticPE.id,
        front: 'What is the formula for elastic potential energy?',
        back: '$PE_{elastic} = \\frac{1}{2}kx^2$ where $k$ is spring constant and $x$ is displacement from equilibrium',
        hint: 'Don\'t forget the ½! Energy goes as x squared',
      },
      {
        topicId: elasticPE.id,
        front: 'Why is there a ½ in the elastic PE formula?',
        back: 'Spring force is variable ($F = kx$), so average force is $\\frac{kx}{2}$. Work = avg force × distance = $\\frac{kx}{2} \\cdot x = \\frac{1}{2}kx^2$',
        hint: 'Variable force requires averaging',
      },
      {
        topicId: elasticPE.id,
        front: 'Can elastic potential energy be negative?',
        back: 'NO! Always positive or zero because $PE = \\frac{1}{2}kx^2$ and $x^2 \\geq 0$ always. Same PE whether compressed or stretched.',
        hint: 'x squared is always positive',
      },
      {
        topicId: elasticPE.id,
        front: 'What does the spring constant $k$ tell you?',
        back: 'Stiffness of spring. Large $k$ = stiff spring (hard to stretch). Small $k$ = soft spring (easy to stretch). Units: N/m',
        hint: 'Force per unit displacement',
      },
      {
        topicId: elasticPE.id,
        front: 'For a horizontal spring-mass system, when is KE maximum and when is PE maximum?',
        back: 'KE max at equilibrium ($x = 0$), PE max at maximum compression/extension. They trade back and forth.',
        hint: 'Energy transforms between KE and elastic PE',
      },
      {
        topicId: elasticPE.id,
        front: 'If you double the compression of a spring, how does the stored energy change?',
        back: 'Energy increases by factor of 4 (since $PE \\propto x^2$). Double compression = quadruple energy.',
        hint: 'Quadratic relationship',
      },
      {
        topicId: elasticPE.id,
        front: 'How do springs in series vs parallel combine?',
        back: 'Series (end-to-end): $\\frac{1}{k_{eff}} = \\frac{1}{k_1} + \\frac{1}{k_2}$ (softer). Parallel (side-by-side): $k_{eff} = k_1 + k_2$ (stiffer).',
        hint: 'Like resistors in circuits, but opposite!',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Elastic Potential Energy')

  // ============================================
  // TOPIC 4: Conservation of Energy
  // ============================================
  const conservationEnergy = await prisma.topic.upsert({
    where: { slug: 'conservation-of-energy' },
    update: {},
    create: {
      slug: 'conservation-of-energy',
      title: 'Conservation of Energy',
      description: 'Mechanical energy conservation and energy transformations',
      order: 4,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# 🔋 Conservation of Energy

## The Law of Conservation of Energy

**Energy cannot be created or destroyed, only transformed from one form to another.**

This is one of the most fundamental principles in all of physics!

---

## Mechanical Energy

**Mechanical energy** is the sum of kinetic and potential energies:

$$E_{mech} = KE + PE$$

For many problems:

$$E_{mech} = \\frac{1}{2}mv^2 + mgh + \\frac{1}{2}kx^2$$

(kinetic + gravitational PE + elastic PE)

---

## Conservation of Mechanical Energy

When **only conservative forces** do work:

$$E_i = E_f$$

$$KE_i + PE_i = KE_f + PE_f$$

$$\\frac{1}{2}mv_i^2 + mgh_i = \\frac{1}{2}mv_f^2 + mgh_f$$

> **💡 Key**: Total mechanical energy stays constant - energy just transforms between KE and PE!

---

## Conservative vs. Non-Conservative Forces

### Conservative Forces
Forces for which **mechanical energy is conserved**:
- **Gravity** - can define gravitational PE
- **Spring force** - can define elastic PE  
- **Electrostatic force** - can define electric PE

Properties:
- Work is **path-independent** (depends only on start/end points)
- Potential energy can be defined
- Work around closed path = 0

### Non-Conservative Forces
Forces that **dissipate** mechanical energy:
- **Friction** - converts mechanical energy to thermal energy
- **Air resistance** - converts KE to thermal energy
- **Tension** (usually) - can do positive or negative work

> **Important**: When non-conservative forces do work, mechanical energy is NOT conserved!

---

## Energy with Non-Conservative Forces

When friction or other non-conservative forces are present:

$$E_i + W_{nc} = E_f$$

$$KE_i + PE_i + W_{nc} = KE_f + PE_f$$

where $W_{nc}$ = work done by non-conservative forces

### Special case: Friction

$$W_{friction} = -f_k \\cdot d = -\\mu_k N \\cdot d$$

(Negative because friction opposes motion)

This energy is **converted to thermal energy** (heat) and "lost" from mechanical energy.

---

## Problem-Solving with Energy Conservation

### Step-by-Step Strategy

1. **Identify the system** and choose reference points
2. **Choose two points** in the motion (initial and final)
3. **List energies at each point**:
   - Kinetic: $\\frac{1}{2}mv^2$
   - Gravitational PE: $mgh$
   - Elastic PE: $\\frac{1}{2}kx^2$
4. **Check for non-conservative forces**
5. **Write conservation equation**:
   - If only conservative forces: $E_i = E_f$
   - If non-conservative forces present: $E_i + W_{nc} = E_f$
6. **Solve for unknown**

---

## Common Energy Transformations

### Pendulum
- At highest points: Maximum PE, minimum KE (zero if released from rest)
- At lowest point: Minimum PE, maximum KE
- Continuous conversion: $PE \\leftrightarrow KE$

### Roller Coaster
- Top of hill: High PE, low KE
- Bottom of dip: Low PE, high KE
- First hill must be highest (no external energy added)

### Vertical Spring
- Maximum compression: Maximum elastic PE
- Equilibrium: Maximum KE
- Includes both elastic and gravitational PE!

### Projectile Motion
- At launch: Some KE, some PE (if not ground level)
- At peak: Horizontal KE only, maximum PE
- At landing: Maximum KE (if returns to launch height)

---

## Energy Bar Diagrams

A useful visualization tool showing energy distribution. Energy bar diagrams show the distribution of kinetic and potential energy:

- Initial state: Mostly potential energy (at height)
- Final state: Mostly kinetic energy (at bottom)
- Total bar height stays same if energy conserved

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Energy Types
Don't forget to include ALL forms of energy! If there's a spring, include elastic PE. If there's height, include gravitational PE.

### Mistake 2: Wrong Reference Point
Choose a consistent reference point for PE. Usually pick the lowest point as $h = 0$.

### Mistake 3: Ignoring Non-Conservative Work
If friction is present, you CANNOT use $E_i = E_f$. Must account for work by friction!

### Mistake 4: Sign Errors
- PE increases as height increases (positive work against gravity)
- Friction work is negative (opposes motion)
- Spring PE is always positive

---

## When to Use Energy vs. Force Methods

### Use Energy Methods When:
- Asked for speed/velocity (not acceleration)
- Motion involves height changes
- Springs are involved
- Path is complicated but you only care about start/end

### Use Force Methods (Newton's Laws) When:
- Asked for acceleration or force
- Need to find motion at specific point (not just start/end)
- Need to analyze contact forces

Many problems can be solved either way!

---

## Power: Rate of Energy Transfer

**Power** is how fast energy is transferred:

$$P = \\frac{W}{t} = \\frac{\\Delta E}{t}$$

Also: $P = Fv$ (for constant force)

Units: Watt (W) = J/s

**1 horsepower (hp)** = 746 W

---

## Applications

### Hydroelectric Power
Gravitational PE of water → KE → Electrical energy

### Regenerative Braking
KE of car → Electrical energy (charges battery)

### Bungee Jumping
Gravitational PE → KE → Elastic PE (of cord) → KE → Gravitational PE

### Earthquakes
Elastic PE stored in rock → KE of seismic waves → Damage

---

## Key Formulas Summary

| Concept | Formula | When to Use |
|---------|---------|-------------|
| Mechanical Energy | $E = KE + PE$ | Always define |
| Conservation (no friction) | $E_i = E_f$ | Only conservative forces |
| With non-conservative forces | $E_i + W_{nc} = E_f$ | Friction present |
| Power | $P = \\frac{W}{t}$ or $P = Fv$ | Rate of work/energy |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 2 kg ball is dropped from a height of 5 m. What is its speed just before hitting the ground? (Use energy conservation)',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Initial height: $h_i = 5$ m
- Final height: $h_f = 0$ m
- Initial velocity: $v_i = 0$ (dropped from rest)

---

**Find:** Final speed $v_f$

---

**Step 1: Choose reference point**

Let ground be $h = 0$.

---

**Step 2: Calculate initial energy**

At height 5 m:
- $KE_i = \\frac{1}{2}mv_i^2 = 0$ (at rest)
- $PE_i = mgh_i = (2)(9.8)(5) = 98$ J

Total: $E_i = 98$ J

---

**Step 3: Calculate final energy**

At ground:
- $KE_f = \\frac{1}{2}mv_f^2$ (unknown)
- $PE_f = mgh_f = 0$ J

Total: $E_f = \\frac{1}{2}mv_f^2$

---

**Step 4: Apply conservation of energy**

$$E_i = E_f$$

$$98 = \\frac{1}{2}(2)v_f^2$$

$$98 = v_f^2$$

$$v_f = \\sqrt{98} = 7\\sqrt{2} \\approx 9.90 \\text{ m/s}$$

---

**Check with kinematics:**

$$v_f^2 = v_i^2 + 2g\\Delta h = 0 + 2(9.8)(5) = 98$$

$$v_f = \\sqrt{98}$$ ✓

---

**Answer**: The speed just before hitting the ground is approximately **9.90 m/s** or $7\\sqrt{2}$ m/s.

> **Note**: The mass cancels out - all objects fall at the same rate (ignoring air resistance)!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A roller coaster car (mass 500 kg) starts from rest at point A (height 30 m). It descends to point B (height 10 m). (a) What is its speed at point B? (b) What is its speed at ground level (point C)?',
            solution: `**Given Information:**
- Mass: $m = 500$ kg
- Point A: $h_A = 30$ m, $v_A = 0$ (starts from rest)
- Point B: $h_B = 10$ m
- Point C: $h_C = 0$ m
- Assume no friction

---

**(a) Find speed at point B**

---

**Step 1: Energy at point A**

$$E_A = KE_A + PE_A = 0 + mgh_A$$

$$E_A = (500)(9.8)(30) = 147,000 \\text{ J}$$

---

**Step 2: Energy at point B**

$$E_B = KE_B + PE_B = \\frac{1}{2}mv_B^2 + mgh_B$$

$$E_B = \\frac{1}{2}(500)v_B^2 + (500)(9.8)(10)$$

$$E_B = 250v_B^2 + 49,000$$

---

**Step 3: Apply conservation of energy**

$$E_A = E_B$$

$$147,000 = 250v_B^2 + 49,000$$

$$98,000 = 250v_B^2$$

$$v_B^2 = 392$$

$$v_B = \\sqrt{392} = 14\\sqrt{2} \\approx 19.8 \\text{ m/s}$$

---

**(b) Find speed at point C (ground)**

---

**Step 4: Energy at point C**

$$E_C = KE_C + PE_C = \\frac{1}{2}mv_C^2 + 0$$

---

**Step 5: Apply conservation**

$$E_A = E_C$$

$$147,000 = \\frac{1}{2}(500)v_C^2$$

$$147,000 = 250v_C^2$$

$$v_C^2 = 588$$

$$v_C = \\sqrt{588} = 14\\sqrt{3} \\approx 24.2 \\text{ m/s}$$

---

**Answers**: 
- (a) Speed at point B (10 m high): **19.8 m/s**
- (b) Speed at point C (ground): **24.2 m/s**

**Check**: Notice speed increases as height decreases - gravitational PE converts to KE!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 3 kg block slides down a 37° incline from a height of 4 m. If the coefficient of kinetic friction is 0.25, what is the block\'s speed at the bottom?',
            solution: `**Given Information:**
- Mass: $m = 3$ kg
- Initial height: $h_i = 4$ m
- Final height: $h_f = 0$ m
- Angle: $\\theta = 37°$
- Coefficient of kinetic friction: $\\mu_k = 0.25$
- Initial velocity: $v_i = 0$ (starts from rest)

---

**Find:** Final speed $v_f$

---

**Note**: Friction is present, so mechanical energy is NOT conserved. Must account for work by friction!

---

**Step 1: Find distance along incline**

$$d = \\frac{h}{\\sin\\theta} = \\frac{4}{\\sin(37°)} = \\frac{4}{0.6} \\approx 6.67 \\text{ m}$$

---

**Step 2: Find normal force**

On incline, $N = mg\\cos\\theta$:

$$N = (3)(9.8)\\cos(37°) = 29.4(0.8) = 23.52 \\text{ N}$$

---

**Step 3: Calculate work by friction**

$$W_f = -f_k \\cdot d = -\\mu_k N \\cdot d$$

$$W_f = -(0.25)(23.52)(6.67)$$

$$W_f = -39.2 \\text{ J}$$

(Negative because friction opposes motion)

---

**Step 4: Set up energy equation**

$$E_i + W_{friction} = E_f$$

$$KE_i + PE_i + W_f = KE_f + PE_f$$

$$0 + mgh_i + W_f = \\frac{1}{2}mv_f^2 + 0$$

---

**Step 5: Substitute and solve**

$$(3)(9.8)(4) + (-39.2) = \\frac{1}{2}(3)v_f^2$$

$$117.6 - 39.2 = 1.5v_f^2$$

$$78.4 = 1.5v_f^2$$

$$v_f^2 = 52.27$$

$$v_f \\approx 7.23 \\text{ m/s}$$

---

**Check without friction:**

If no friction: $mgh = \\frac{1}{2}mv^2$

$$v = \\sqrt{2gh} = \\sqrt{2(9.8)(4)} = \\sqrt{78.4} \\approx 8.85$$ m/s

With friction, speed is less (7.23 < 8.85) ✓

---

**Answer**: The block's speed at the bottom is approximately **7.23 m/s**.

**Energy accounting**:
- Initial PE: 117.6 J
- Lost to friction: 39.2 J
- Final KE: 78.4 J
- Total: 117.6 - 39.2 = 78.4 ✓`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Conservation of Energy')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conservationEnergy.id,
        front: 'What is the law of conservation of energy?',
        back: 'Energy cannot be created or destroyed, only transformed from one form to another. Total energy of an isolated system remains constant.',
        hint: 'One of the most fundamental laws in physics',
      },
      {
        topicId: conservationEnergy.id,
        front: 'What is mechanical energy?',
        back: '$E_{mech} = KE + PE = \\frac{1}{2}mv^2 + mgh + \\frac{1}{2}kx^2$ (sum of kinetic and all potential energies)',
        hint: 'Kinetic plus potential',
      },
      {
        topicId: conservationEnergy.id,
        front: 'When is mechanical energy conserved?',
        back: 'When ONLY conservative forces (gravity, springs, elastic) do work. If friction or air resistance present, mechanical energy is NOT conserved.',
        hint: 'No friction, no air resistance, no dissipation',
      },
      {
        topicId: conservationEnergy.id,
        front: 'What are conservative forces? Give examples.',
        back: 'Forces for which work is path-independent and PE can be defined. Examples: gravity, spring force, electrostatic force. NOT friction or air resistance.',
        hint: 'Work depends only on start/end points, not path',
      },
      {
        topicId: conservationEnergy.id,
        front: 'How do you account for friction in energy problems?',
        back: '$E_i + W_{friction} = E_f$ where $W_{friction} = -f_k \\cdot d = -\\mu_k N \\cdot d$ (negative because friction opposes motion)',
        hint: 'Friction dissipates mechanical energy to heat',
      },
      {
        topicId: conservationEnergy.id,
        front: 'For a pendulum, where is KE maximum and where is PE maximum?',
        back: 'KE max at lowest point (bottom of swing), PE max at highest points (ends of swing). Energy continuously converts between KE and PE.',
        hint: 'Speed is highest at bottom, height is highest at ends',
      },
      {
        topicId: conservationEnergy.id,
        front: 'When should you use energy methods vs. force methods (Newton\'s laws)?',
        back: 'Energy: finding speeds, heights, complex paths. Force: finding acceleration, forces, motion at specific points. Many problems can use either!',
        hint: 'Energy is often easier for speed problems',
      },
      {
        topicId: conservationEnergy.id,
        front: 'What is power and what are its units?',
        back: '$P = \\frac{W}{t} = \\frac{\\Delta E}{t}$ or $P = Fv$. Units: Watt (W) = J/s. Power is rate of energy transfer.',
        hint: 'How fast work is done or energy is transferred',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Conservation of Energy')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: energyCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: energyCategory.id,
      },
    },
  })

  const topicCount = await prisma.topic.count({
    where: {
      categoryId: energyCategory.id,
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Energy Part 2!')
  console.log(`   Topics: ${topicCount - 2} new (4 total in Energy category)`)
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
