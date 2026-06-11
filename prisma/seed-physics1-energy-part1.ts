import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Energy Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or get the Energy category
  const energyCategory = await prisma.category.upsert({
    where: { slug: 'energy' },
    update: {},
    create: {
      slug: 'energy',
      name: 'Energy',
      description: 'Work, kinetic energy, potential energy, and conservation of energy',
      order: 3,
      courseId: physics1Course.id,
    },
  })

  console.log('✓ Created category: Energy')

  // ============================================
  // TOPIC 1: Work and Kinetic Energy
  // ============================================
  const workKineticEnergy = await prisma.topic.upsert({
    where: { slug: 'work-and-kinetic-energy' },
    update: {},
    create: {
      slug: 'work-and-kinetic-energy',
      title: 'Work and Kinetic Energy',
      description: 'Definition of work, kinetic energy, and the work-energy theorem',
      order: 1,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# ⚡ Work and Kinetic Energy

## What is Work?

In physics, **work** has a very specific meaning: work is done when a force causes a displacement.

### Definition of Work

$$W = Fd\\cos\\theta$$

where:
- $W$ = work (J, joules)
- $F$ = magnitude of force (N)
- $d$ = magnitude of displacement (m)
- $\\theta$ = angle between force and displacement vectors

**Units**: 1 joule (J) = 1 N·m = 1 kg·m²/s²

### Key Points

1. **Force must cause displacement** - No displacement = no work
2. **Only the component of force parallel to displacement does work**
3. **Work can be positive, negative, or zero**

> **💡 Important**: Work is a **scalar** quantity (not a vector), even though it's calculated from two vectors.

---

## Sign of Work

### Positive Work ($W > 0$)
- Force has component in direction of motion ($0° \\leq \\theta < 90°$)
- Energy is **added** to the system
- Example: Pushing a box forward while it moves forward

### Negative Work ($W < 0$)
- Force has component opposite to motion ($90° < \\theta \\leq 180°$)
- Energy is **removed** from the system
- Example: Friction on a sliding box (friction opposes motion)

### Zero Work ($W = 0$)
- Force perpendicular to motion ($\\theta = 90°$)
- OR no displacement ($d = 0$)
- Example: Carrying a box horizontally (weight is perpendicular to motion)

---

## Special Cases

### Case 1: Force Parallel to Displacement ($\\theta = 0°$)
$$W = Fd\\cos(0°) = Fd$$

Maximum positive work.

### Case 2: Force Opposite to Displacement ($\\theta = 180°$)
$$W = Fd\\cos(180°) = -Fd$$

Maximum negative work.

### Case 3: Force Perpendicular to Displacement ($\\theta = 90°$)
$$W = Fd\\cos(90°) = 0$$

No work done.

---

## Kinetic Energy

**Kinetic energy** is energy of motion:

$$KE = \\frac{1}{2}mv^2$$

where:
- $KE$ = kinetic energy (J)
- $m$ = mass (kg)
- $v$ = speed (m/s)

### Properties of Kinetic Energy

1. **Always positive** (or zero) - $v^2$ is always positive
2. **Scalar quantity** - no direction
3. **Depends on speed squared** - Double the speed = 4× the kinetic energy
4. **Frame-dependent** - KE depends on reference frame

---

## The Work-Energy Theorem

The **work-energy theorem** connects work and kinetic energy:

$$W_{net} = \\Delta KE = KE_f - KE_i$$

$$W_{net} = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$

### Interpretation

- **Net work** done on an object equals the **change** in its kinetic energy
- If $W_{net} > 0$: object speeds up (gains KE)
- If $W_{net} < 0$: object slows down (loses KE)
- If $W_{net} = 0$: speed unchanged (constant KE)

---

## Calculating Work by Multiple Forces

When multiple forces act on an object:

### Method 1: Sum the work done by each force
$$W_{net} = W_1 + W_2 + W_3 + ...$$

Each force can do positive, negative, or zero work.

### Method 2: Find net force first
$$W_{net} = F_{net} \\cdot d \\cdot \\cos\\theta$$

where $\\theta$ is angle between $\\vec{F}_{net}$ and $\\vec{d}$.

Both methods give the same result!

---

## Variable Forces and Work

For a **variable force** (force changes during motion):

$$W = \\int_{x_i}^{x_f} F(x)\\,dx$$

The work equals the **area under the force vs. position graph**.

For AP Physics 1, you usually just need to recognize this graphically.

---

## ⚠️ Common Misconceptions

### Misconception 1: Confusing Force and Work
❌ **Wrong**: "I'm doing work just by holding this box"
✅ **Right**: Holding stationary = no displacement = no work (even though it's tiring!)

### Misconception 2: Forgetting the Angle
❌ **Wrong**: $W = Fd$ always
✅ **Right**: $W = Fd\\cos\\theta$ - angle matters!

### Misconception 3: Thinking Work is a Vector
❌ **Wrong**: Work has direction
✅ **Right**: Work is a scalar (can be positive or negative, but that's not direction)

### Misconception 4: Normal Force Always Does Zero Work
Usually true (when surface is level), but NOT always! On an incline or accelerating elevator, normal force can do work.

---

## Problem-Solving Strategy

1. **Identify all forces** acting on the object
2. **Draw a free body diagram**
3. **For each force**, determine:
   - Magnitude $F$
   - Angle $\\theta$ relative to displacement
   - Sign of work (positive/negative/zero)
4. **Calculate work** for each force: $W = Fd\\cos\\theta$
5. **Sum** to find net work
6. **Apply work-energy theorem** if finding speed change

---

## Real-World Applications

### Stopping Distance
When brakes are applied, friction does negative work to remove kinetic energy:
$$W_{friction} = -\\frac{1}{2}mv^2$$

Doubling speed requires **4 times** the stopping distance!

### Accelerating Vehicles
Engine does positive work to increase kinetic energy:
$$W_{engine} = \\frac{1}{2}m(v_f^2 - v_i^2)$$

### Sports
- Baseball: Work done by bat on ball increases ball's KE
- Braking in cars: Friction converts KE to thermal energy

---

## Key Formulas Summary

| Concept | Formula | Units |
|---------|---------|-------|
| Work | $W = Fd\\cos\\theta$ | J (joules) |
| Kinetic Energy | $KE = \\frac{1}{2}mv^2$ | J |
| Work-Energy Theorem | $W_{net} = \\Delta KE$ | J |
| Power (rate of work) | $P = \\frac{W}{t}$ | W (watts) |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 5 kg box is pushed 10 m across a floor by a horizontal force of 20 N. If the box starts from rest, what is its final speed? (Assume no friction.)',
            solution: `**Given Information:**
- Mass: $m = 5$ kg
- Displacement: $d = 10$ m
- Applied force: $F = 20$ N (horizontal)
- Initial velocity: $v_i = 0$ m/s (starts from rest)
- No friction

---

**Find:** Final speed $v_f$

---

**Step 1: Calculate work done by applied force**

Since force is horizontal and displacement is horizontal, $\\theta = 0°$:

$$W = Fd\\cos\\theta = (20)(10)\\cos(0°) = 200 \\text{ J}$$

---

**Step 2: Apply work-energy theorem**

$$W_{net} = \\Delta KE$$

Since there's no friction, $W_{net} = W = 200$ J

$$200 = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$

$$200 = \\frac{1}{2}(5)v_f^2 - 0$$

$$200 = 2.5v_f^2$$

$$v_f^2 = 80$$

$$v_f = \\sqrt{80} = 4\\sqrt{5} \\approx 8.94 \\text{ m/s}$$

---

**Answer**: The final speed is approximately **8.94 m/s** or $4\\sqrt{5}$ m/s.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 2 kg block slides 5 m down a frictionless incline that makes a 30° angle with the horizontal. What is the work done by gravity?',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Displacement along incline: $d = 5$ m
- Angle of incline: $30°$
- Frictionless (no friction)

---

**Find:** Work done by gravity

---

**Step 1: Identify the gravitational force**

$$F_g = mg = (2)(9.8) = 19.6 \\text{ N}$$

This force points **vertically downward**.

---

**Step 2: Find the angle between force and displacement**

- Gravity points straight down (vertical)
- Displacement is along the incline (30° below horizontal)
- Angle between them: $\\theta = 90° - 30° = 60°$

---

**Step 3: Calculate work**

$$W_g = F_g d \\cos\\theta$$

$$W_g = (19.6)(5)\\cos(60°)$$

$$W_g = (19.6)(5)(0.5)$$

$$W_g = 49 \\text{ J}$$

---

**Alternative Method: Use vertical displacement**

Vertical drop: $h = d\\sin(30°) = 5(0.5) = 2.5$ m

Work by gravity = $mgh = (2)(9.8)(2.5) = 49$ J ✓

---

**Answer**: Gravity does **49 J** of work (positive because it has a component along the motion).

> **Note**: Even though the block moves 5 m along the incline, only the vertical component of that displacement matters for gravitational work!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 1200 kg car traveling at 25 m/s applies its brakes and comes to a stop in 50 m. (a) What is the work done by friction? (b) What is the magnitude of the average frictional force?',
            solution: `**Given Information:**
- Mass: $m = 1200$ kg
- Initial velocity: $v_i = 25$ m/s
- Final velocity: $v_f = 0$ m/s (stops)
- Displacement: $d = 50$ m

---

**(a) Find work done by friction**

---

**Step 1: Calculate initial kinetic energy**

$$KE_i = \\frac{1}{2}mv_i^2 = \\frac{1}{2}(1200)(25)^2$$

$$KE_i = 600(625) = 375,000 \\text{ J}$$

---

**Step 2: Calculate final kinetic energy**

$$KE_f = \\frac{1}{2}mv_f^2 = \\frac{1}{2}(1200)(0)^2 = 0 \\text{ J}$$

---

**Step 3: Apply work-energy theorem**

$$W_{friction} = \\Delta KE = KE_f - KE_i$$

$$W_{friction} = 0 - 375,000 = -375,000 \\text{ J}$$

The negative sign indicates friction removes energy from the car.

---

**(b) Find magnitude of frictional force**

---

**Step 4: Use work formula**

$$W = Fd\\cos\\theta$$

Since friction opposes motion, $\\theta = 180°$:

$$-375,000 = F(50)\\cos(180°)$$

$$-375,000 = F(50)(-1)$$

$$-375,000 = -50F$$

$$F = 7,500 \\text{ N}$$

---

**Alternative approach:**

$$|W| = Fd$$

$$375,000 = F(50)$$

$$F = 7,500 \\text{ N}$$

---

**Answers**: 
- (a) Work done by friction: **-375,000 J** (or -375 kJ)
- (b) Magnitude of friction force: **7,500 N**

**Interpretation**: The friction force of 7,500 N acting over 50 m removes all the car's kinetic energy, bringing it to rest.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Work and Kinetic Energy')

  // Create flashcards for Work and Kinetic Energy
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: workKineticEnergy.id,
        front: 'What is the definition of work in physics?',
        back: '$W = Fd\\cos\\theta$ where $F$ is force, $d$ is displacement, and $\\theta$ is the angle between them. Work is done when force causes displacement.',
        hint: 'Cosine of the angle is crucial!',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'When is work positive, negative, or zero?',
        back: 'Positive: force component along motion ($0° \\leq \\theta < 90°$). Negative: force opposes motion ($90° < \\theta \\leq 180°$). Zero: force perpendicular to motion ($\\theta = 90°$) or no displacement.',
        hint: 'Think about whether force helps, hinders, or is perpendicular to motion',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'What is the formula for kinetic energy?',
        back: '$KE = \\frac{1}{2}mv^2$ where $m$ is mass and $v$ is speed. Always positive (or zero).',
        hint: 'Energy of motion - depends on speed squared',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'What is the work-energy theorem?',
        back: '$W_{net} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$ - Net work equals change in kinetic energy',
        hint: 'Connects work to change in KE',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'If you double the speed of an object, how does its kinetic energy change?',
        back: 'KE increases by a factor of 4 (since $KE \\propto v^2$). This is why stopping distance quadruples when speed doubles!',
        hint: 'Speed is squared in the formula',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'Does holding a heavy box stationary do any work?',
        back: 'NO! Work requires displacement. $W = Fd$ and $d = 0$, so $W = 0$. (Even though it feels tiring, no physical work is done.)',
        hint: 'No displacement = no work',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'What are the SI units of work and energy?',
        back: 'Joule (J), where 1 J = 1 N·m = 1 kg·m²/s²',
        hint: 'Named after physicist James Prescott Joule',
      },
      {
        topicId: workKineticEnergy.id,
        front: 'If the net work on an object is zero, what happens to its speed?',
        back: 'Speed remains constant. $W_{net} = 0$ means $\\Delta KE = 0$, so $v_f = v_i$.',
        hint: 'Work-energy theorem: no net work = no change in KE',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Work and Kinetic Energy')

  // ============================================
  // TOPIC 2: Gravitational Potential Energy
  // ============================================
  const gravitationalPE = await prisma.topic.upsert({
    where: { slug: 'gravitational-potential-energy' },
    update: {},
    create: {
      slug: 'gravitational-potential-energy',
      title: 'Gravitational Potential Energy',
      description: 'Energy stored due to position in a gravitational field',
      order: 2,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# 🏔️ Gravitational Potential Energy

## What is Potential Energy?

**Potential energy** is **stored energy** due to position or configuration. 

**Gravitational potential energy (PE or $U_g$)** is energy an object has due to its position in a gravitational field.

---

## Formula for Gravitational PE

Near Earth's surface (constant $g$):

$$PE_g = mgh$$

where:
- $PE_g$ (or $U_g$) = gravitational potential energy (J)
- $m$ = mass (kg)
- $g$ = gravitational field strength = 9.8 m/s² (on Earth)
- $h$ = height above reference point (m)

---

## Key Concepts

### 1. Reference Point (Zero Level)

- You must **choose** where $h = 0$ (the reference point)
- Common choices: ground, floor, table top, lowest point in motion
- **PE is relative** to this choice
- Different reference points give different PE values, but **changes in PE** ($\\Delta PE$) are the same!

### 2. Only Changes in PE Matter

For energy problems, what matters is:

$$\\Delta PE = mg\\Delta h = mg(h_f - h_i)$$

The actual value of PE depends on your reference choice, but $\\Delta PE$ does not.

### 3. Sign of PE Change

- **Increase height** → $\\Delta PE > 0$ (gain PE)
- **Decrease height** → $\\Delta PE < 0$ (lose PE)

---

## Relationship to Work

Work done **by** gravity:

$$W_g = -\\Delta PE = -mg\\Delta h$$

The negative sign appears because:
- If object goes **up**: gravity does **negative work**, PE **increases**
- If object goes **down**: gravity does **positive work**, PE **decreases**

Alternatively, work done **against** gravity:

$$W_{against\\,g} = \\Delta PE = mg\\Delta h$$

This is the work **you** must do to lift an object.

---

## Conservative Forces

Gravity is a **conservative force** because:

1. **Work is path-independent** - Only start and end heights matter, not the path taken
2. **PE can be defined** - Conservative forces have associated potential energies
3. **Energy is conserved** - Can convert between KE and PE

### Path Independence

Whether you:
- Lift straight up
- Take a ramp
- Take a complicated winding path

The work done against gravity is the same: $W = mgh$ (for same height change).

---

## Examples with Different Reference Points

**Scenario**: A 2 kg book on a table 1 m high.

### Reference 1: Floor is $h = 0$
$$PE = mgh = (2)(9.8)(1) = 19.6 \\text{ J}$$

### Reference 2: Table is $h = 0$
$$PE = mgh = (2)(9.8)(0) = 0 \\text{ J}$$

### Reference 3: Floor is $h = -1$ m (table at $h = 0$)
$$PE = mg(-1) = -19.6 \\text{ J}$$

**All valid!** But if the book falls to the floor:

$$\\Delta PE = 0 - 19.6 = -19.6 \\text{ J (all three methods)}$$

---

## When Can We Use $PE = mgh$?

This formula is valid when:
- Near Earth's surface ($g \\approx$ constant)
- Height change is small compared to Earth's radius

For satellites or large heights, use:

$$PE = -\\frac{GMm}{r}$$

(This gives PE = 0 at $r = \\infty$)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting to Choose Reference
❌ **Wrong**: "The PE is 100 J" (without stating reference)
✅ **Right**: "The PE is 100 J above the ground" or "relative to the floor"

### Mistake 2: Thinking PE is Always Positive
PE **can be negative** if you're below your reference point. This is fine!

### Mistake 3: Confusing PE with Work
- **PE** is energy an object **has** (due to position)
- **Work** is energy **transferred** (by a force through displacement)
- Related by: $W_g = -\\Delta PE$

### Mistake 4: Using Wrong Height
Use **vertical height** change, not distance along a ramp!

If sliding 5 m down a 30° ramp:
- Distance along ramp: $d = 5$ m
- Vertical drop: $h = 5\\sin(30°) = 2.5$ m
- Use $h = 2.5$ m for PE!

---

## Problem-Solving Strategy

1. **Choose a reference point** where $h = 0$
2. **Identify initial and final heights** above reference
3. **Calculate initial PE**: $PE_i = mgh_i$
4. **Calculate final PE**: $PE_f = mgh_f$
5. **Find change**: $\\Delta PE = PE_f - PE_i = mg(h_f - h_i)$

Or directly: $\\Delta PE = mg\\Delta h$

---

## Applications

### Hydroelectric Dams
Water at height $h$ has PE. When it falls, PE converts to KE, which turns turbines.

### Roller Coasters
PE at the top of hills converts to KE on descents. Highest hill must have most PE to complete the circuit.

### Pendulums
Continuous conversion between PE (at extremes) and KE (at bottom).

### Falling Objects
As object falls, PE decreases and KE increases by the same amount (if no air resistance).

---

## Key Formulas Summary

| Concept | Formula | Notes |
|---------|---------|-------|
| Gravitational PE | $PE_g = mgh$ | $h$ relative to chosen reference |
| Change in PE | $\\Delta PE = mg\\Delta h$ | Same regardless of reference choice |
| Work by gravity | $W_g = -\\Delta PE$ | Negative of PE change |
| Work against gravity | $W = \\Delta PE = mgh$ | Work needed to lift object |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 0.5 kg ball is held 2 m above the ground. What is its gravitational potential energy relative to the ground?',
            solution: `**Given Information:**
- Mass: $m = 0.5$ kg
- Height above ground: $h = 2$ m
- Reference point: ground ($h = 0$)

---

**Find:** Gravitational potential energy

---

**Solution:**

Use the gravitational PE formula:

$$PE_g = mgh$$

$$PE_g = (0.5)(9.8)(2)$$

$$PE_g = 9.8 \\text{ J}$$

---

**Answer**: The gravitational potential energy is **9.8 J** relative to the ground.

> **Note**: If we chose a different reference (say, the 2 m height as $h = 0$), the PE would be 0 J at that point. But changes in PE would be the same!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 60 kg hiker climbs from an elevation of 500 m to 1200 m. (a) What is the change in gravitational potential energy? (b) How much work did the hiker do against gravity?',
            solution: `**Given Information:**
- Mass: $m = 60$ kg
- Initial height: $h_i = 500$ m
- Final height: $h_f = 1200$ m
- $g = 9.8$ m/s²

---

**(a) Find change in gravitational PE**

---

**Step 1: Calculate height change**

$$\\Delta h = h_f - h_i = 1200 - 500 = 700 \\text{ m}$$

---

**Step 2: Calculate change in PE**

$$\\Delta PE = mg\\Delta h$$

$$\\Delta PE = (60)(9.8)(700)$$

$$\\Delta PE = 411,600 \\text{ J} = 411.6 \\text{ kJ}$$

---

**(b) Work done against gravity**

---

Work done **against** gravity equals the change in PE:

$$W_{against\\,g} = \\Delta PE = 411,600 \\text{ J}$$

---

**Answers**: 
- (a) Change in PE: **411,600 J** or **411.6 kJ** (positive because height increased)
- (b) Work against gravity: **411,600 J**

**Note**: The hiker did 411.6 kJ of work to increase their PE by 411.6 kJ. If they slide back down, gravity would do +411.6 kJ of work on them.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 3 kg object is released from rest at a height of 10 m above the ground. What is its speed just before it hits the ground? (Use energy methods and ignore air resistance.)',
            solution: `**Given Information:**
- Mass: $m = 3$ kg
- Initial height: $h_i = 10$ m
- Final height: $h_f = 0$ m (ground)
- Initial velocity: $v_i = 0$ m/s (released from rest)
- No air resistance

---

**Find:** Final speed $v_f$ just before hitting ground

---

**Strategy:** Use conservation of energy (we'll learn this more in the next topic, but we can preview it here!)

---

**Step 1: Calculate initial energy**

At the top:
- $KE_i = \\frac{1}{2}mv_i^2 = 0$ (at rest)
- $PE_i = mgh_i = (3)(9.8)(10) = 294$ J

Total initial energy: $E_i = 0 + 294 = 294$ J

---

**Step 2: Calculate final energy**

At the ground:
- $KE_f = \\frac{1}{2}mv_f^2$ (unknown)
- $PE_f = mgh_f = (3)(9.8)(0) = 0$ J

Total final energy: $E_f = \\frac{1}{2}mv_f^2 + 0$

---

**Step 3: Apply conservation of energy**

$$E_i = E_f$$

$$294 = \\frac{1}{2}(3)v_f^2$$

$$294 = 1.5v_f^2$$

$$v_f^2 = 196$$

$$v_f = 14 \\text{ m/s}$$

---

**Alternative Method: Using work-energy theorem**

Work done by gravity:
$$W_g = mgh = (3)(9.8)(10) = 294 \\text{ J}$$

This equals change in KE:
$$294 = \\frac{1}{2}(3)v_f^2 - 0$$

Same result: $v_f = 14$ m/s

---

**Answer**: The speed just before hitting the ground is **14 m/s** (about 31 mph).

**Check**: Notice the speed doesn't depend on mass! All objects (ignoring air resistance) fall at the same rate.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Gravitational Potential Energy')

  // Create flashcards for Gravitational PE
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: gravitationalPE.id,
        front: 'What is the formula for gravitational potential energy near Earth\'s surface?',
        back: '$PE_g = mgh$ where $m$ is mass, $g = 9.8$ m/s², and $h$ is height above a chosen reference point',
        hint: 'Mass times g times height',
      },
      {
        topicId: gravitationalPE.id,
        front: 'Why must you choose a reference point for potential energy?',
        back: 'PE is relative - depends on where you define $h = 0$. Different references give different PE values, but changes in PE ($\\Delta PE$) are always the same.',
        hint: 'PE is relative, but changes in PE are absolute',
      },
      {
        topicId: gravitationalPE.id,
        front: 'What is the relationship between work done by gravity and change in PE?',
        back: '$W_g = -\\Delta PE$. Negative sign because: if object rises (PE increases), gravity does negative work. If object falls (PE decreases), gravity does positive work.',
        hint: 'Negative relationship - opposite signs',
      },
      {
        topicId: gravitationalPE.id,
        front: 'Can gravitational PE be negative?',
        back: 'YES! If you\'re below your chosen reference point, PE is negative. This is perfectly valid and doesn\'t cause problems.',
        hint: 'It\'s all relative to your choice of zero',
      },
      {
        topicId: gravitationalPE.id,
        front: 'What does it mean that gravity is a conservative force?',
        back: 'Work done by gravity is path-independent - only the height change matters, not how you get there. This allows us to define potential energy.',
        hint: 'Same work whether you go straight up, take a ramp, or zigzag',
      },
      {
        topicId: gravitationalPE.id,
        front: 'How much work must you do to lift a 5 kg box 2 m vertically?',
        back: '$W = mgh = (5)(9.8)(2) = 98$ J - This equals the increase in PE',
        hint: 'Work against gravity equals change in PE',
      },
      {
        topicId: gravitationalPE.id,
        front: 'If an object slides down a 10 m ramp at 30°, what is the change in PE?',
        back: 'Vertical drop: $h = 10\\sin(30°) = 5$ m. So $\\Delta PE = mgh = mg(5)$. Use vertical height, not ramp distance!',
        hint: 'Only vertical height change matters for PE',
      },
      {
        topicId: gravitationalPE.id,
        front: 'Does the formula $PE = mgh$ work for satellites?',
        back: 'No! Only valid near Earth\'s surface where $g$ is approximately constant. For satellites, use $PE = -\\frac{GMm}{r}$',
        hint: 'g changes significantly at satellite altitudes',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Gravitational Potential Energy')

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

  console.log('\n✅ Successfully seeded AP Physics 1 - Energy Part 1!')
  console.log(`   Topics: 2`)
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
