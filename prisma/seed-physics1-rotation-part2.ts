import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Torque & Rotational Motion Part 2...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Find the Torque & Rotational Motion category
  const rotationCategory = await prisma.category.findUnique({
    where: { slug: 'torque-and-rotational-motion' },
  })

  if (!rotationCategory) {
    throw new Error('Torque & Rotational Motion category not found')
  }

  console.log('✓ Found category: Torque & Rotational Motion')

  // ============================================
  // TOPIC 3: Rotational Dynamics and Angular Momentum
  // ============================================
  const angularMomentum = await prisma.topic.upsert({
    where: { slug: 'angular-momentum' },
    update: {},
    create: {
      slug: 'angular-momentum',
      title: 'Rotational Dynamics and Angular Momentum',
      description: 'Moment of inertia, rotational dynamics, angular momentum, and conservation',
      order: 3,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Rotational Dynamics and Angular Momentum

## Moment of Inertia

**Moment of inertia** $I$ is the rotational equivalent of mass. It measures resistance to rotational acceleration.

$$I = \\sum m_i r_i^2$$

For continuous objects:
$$I = \\int r^2 \\, dm$$

where:
- $I$ = moment of inertia (kg·m²)
- $m_i$ = mass of particle $i$
- $r_i$ = distance of particle $i$ from axis of rotation

> **💡 Key Idea**: Moment of inertia depends on both mass AND how that mass is distributed relative to the axis. Same object can have different moments of inertia for different axes!

---

## Common Moments of Inertia

| Object | Axis | Moment of Inertia |
|--------|------|-------------------|
| **Point mass** | Distance $r$ from axis | $I = mr^2$ |
| **Thin rod** | Through center, perpendicular | $I = \\frac{1}{12}mL^2$ |
| **Thin rod** | Through end, perpendicular | $I = \\frac{1}{3}mL^2$ |
| **Solid disk/cylinder** | Through center, along axis | $I = \\frac{1}{2}mr^2$ |
| **Hollow cylinder (thin)** | Through center, along axis | $I = mr^2$ |
| **Solid sphere** | Through center | $I = \\frac{2}{5}mr^2$ |
| **Hollow sphere (thin)** | Through center | $I = \\frac{2}{3}mr^2$ |

**Note**: These formulas are given on AP Physics 1 formula sheet!

---

## Properties of Moment of Inertia

### Depends on Axis
Same object, different axis → different $I$

Example: Rod
- Center axis: $I = \\frac{1}{12}mL^2$
- End axis: $I = \\frac{1}{3}mL^2$ (larger!)

### Depends on Mass Distribution
- Mass farther from axis → larger $I$
- Mass closer to axis → smaller $I$

**Why figure skaters spin faster with arms in**: Pulling arms in decreases $I$, so $\\omega$ increases to conserve angular momentum!

---

## Newton's Second Law for Rotation

$$\\tau_{net} = I\\alpha$$

where:
- $\\tau_{net}$ = net torque (N·m)
- $I$ = moment of inertia (kg·m²)
- $\\alpha$ = angular acceleration (rad/s²)

**Analogy**: $F = ma$ for linear motion

**Interpretation**: 
- Larger torque → larger angular acceleration
- Larger moment of inertia → harder to accelerate rotationally

---

## Rotational Kinetic Energy

$$KE_{rot} = \\frac{1}{2}I\\omega^2$$

**Analogy**: $KE = \\frac{1}{2}mv^2$ for linear motion

**Total kinetic energy** of rolling object:
$$KE_{total} = KE_{trans} + KE_{rot} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I\\omega^2$$

For rolling without slipping ($v_{cm} = r\\omega$):
$$KE_{total} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I\\left(\\frac{v_{cm}}{r}\\right)^2$$

---

## Angular Momentum

**Angular momentum** $L$ is the rotational equivalent of linear momentum:

$$L = I\\omega$$

where:
- $L$ = angular momentum (kg·m²/s)
- $I$ = moment of inertia (kg·m²)
- $\\omega$ = angular velocity (rad/s)

**Analogy**: $p = mv$ for linear motion

### For Point Particle
$$\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$$

Magnitude: $L = mvr\\sin\\theta$

---

## Conservation of Angular Momentum

**In an isolated system** (no external torques):

$$L_{initial} = L_{final}$$

$$I_i \\omega_i = I_f \\omega_f$$

> **💡 Fundamental Law**: Like linear momentum, angular momentum is conserved when no external torques act on the system.

---

## Applications of Conservation

### Figure Skating Spins
- Arms out: large $I$, small $\\omega$
- Arms in: small $I$, large $\\omega$
- $I_i \\omega_i = I_f \\omega_f$

If $I$ decreases by factor of 3, then $\\omega$ increases by factor of 3!

### Diving
- Tucked position: small $I$ → fast rotation
- Layout position: large $I$ → slow rotation
- Controls rotation rate mid-air

### Planetary Orbits
- Closer to sun: smaller $r$, larger $v$
- Farther from sun: larger $r$, smaller $v$
- Kepler's 2nd Law (equal areas in equal times)

### Gyroscopes
- Large angular momentum resists changes in orientation
- Used in navigation, stabilization

---

## Relationship: Torque and Angular Momentum

$$\\tau_{net} = \\frac{dL}{dt}$$

**Analogy**: $F = \\frac{dp}{dt}$ (Newton's 2nd Law)

**If no external torque**: $\\frac{dL}{dt} = 0$ → $L$ is constant ✓

---

## Problem-Solving Strategy

### For Rotational Dynamics:

1. **Identify** moment of inertia $I$ (use formula or calculate)
2. **Find net torque**: $\\tau_{net} = \\sum \\tau_i$
3. **Apply**: $\\tau_{net} = I\\alpha$
4. **Solve** for unknown ($\\tau$, $I$, or $\\alpha$)
5. **Use kinematics** if needed (to find $\\omega$, $\\theta$, etc.)

### For Angular Momentum Conservation:

1. **Check**: Is system isolated? (No external torques?)
2. **Write initial state**: $L_i = I_i \\omega_i$
3. **Write final state**: $L_f = I_f \\omega_f$
4. **Set equal**: $I_i \\omega_i = I_f \\omega_f$
5. **Solve** for unknown

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting $I$ Depends on Axis
Same object, different axis → different $I$!

### Mistake 2: Using Wrong $I$ Formula
Check axis location and object shape carefully!

### Mistake 3: Confusing $L = I\\omega$ with $p = mv$
These are analogous but not the same!
- Angular momentum has different units (kg·m²/s)
- Depends on axis choice

### Mistake 4: Assuming $I$ is Constant
In conservation problems, $I$ often changes (figure skater pulling arms in)!

### Mistake 5: Forgetting Rolling Kinetic Energy
Rolling objects have BOTH translational and rotational KE!

---

## Energy in Rotational Motion

### Work Done by Torque
$$W = \\tau \\theta$$

(when $\\tau$ is constant)

**Analogy**: $W = Fd$ for linear motion

### Work-Energy Theorem (Rotational)
$$W_{net} = \\Delta KE_{rot} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$$

---

## Rolling Motion

For object rolling without slipping down incline:

**Energy conservation**:
$$mgh = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I\\omega^2$$

Using $v_{cm} = r\\omega$ and $I = \\beta mr^2$ (where $\\beta$ is shape factor):

$$gh = \\frac{1}{2}v_{cm}^2\\left(1 + \\beta\\right)$$

$$v_{cm} = \\sqrt{\\frac{2gh}{1 + \\beta}}$$

**Different objects, different speeds**:
- Hollow cylinder ($\\beta = 1$): slowest
- Solid cylinder ($\\beta = 1/2$): medium
- Solid sphere ($\\beta = 2/5$): fastest

All faster than sliding (no friction) box!

---

## Comparing Linear and Rotational

| Linear | Rotational | Relationship |
|--------|-----------|--------------|
| Mass $m$ | Moment of inertia $I$ | $I = \\sum mr^2$ |
| Velocity $v$ | Angular velocity $\\omega$ | $v = r\\omega$ |
| Acceleration $a$ | Angular acceleration $\\alpha$ | $a_t = r\\alpha$ |
| Force $F$ | Torque $\\tau$ | $\\tau = rF\\sin\\theta$ |
| $F = ma$ | $\\tau = I\\alpha$ | Newton's 2nd Law |
| Momentum $p = mv$ | Angular momentum $L = I\\omega$ | $L = r \\times p$ |
| $KE = \\frac{1}{2}mv^2$ | $KE_{rot} = \\frac{1}{2}I\\omega^2$ | Kinetic energy |
| $p$ conserved | $L$ conserved | No external force/torque |

---

## Real-World Applications

### Spinning Top/Gyroscope
- Large $L$ → resists tipping
- Precession when external torque applied
- Used in navigation systems

### Bicycle Wheels
- Spinning wheels have angular momentum
- Harder to tip over when moving
- Gyroscopic stability

### Earth's Rotation
- Huge moment of inertia
- Angular momentum conserved
- Day length nearly constant

### Tornadoes and Hurricanes
- Air spiraling inward
- $r$ decreases → $\\omega$ increases
- Conservation of angular momentum

---

## Key Formulas Summary

| Concept | Formula | Units |
|---------|---------|-------|
| **Moment of inertia** | $I = \\sum mr^2$ | kg·m² |
| **Rotational 2nd Law** | $\\tau = I\\alpha$ | N·m |
| **Rotational KE** | $KE_{rot} = \\frac{1}{2}I\\omega^2$ | J |
| **Angular momentum** | $L = I\\omega$ | kg·m²/s |
| **Conservation** | $I_i\\omega_i = I_f\\omega_f$ | (isolated) |
| **Torque-momentum** | $\\tau = \\frac{dL}{dt}$ | N·m |
| **Work by torque** | $W = \\tau\\theta$ | J |

**Common $I$ values**:
- Point mass: $mr^2$
- Disk: $\\frac{1}{2}mr^2$
- Sphere: $\\frac{2}{5}mr^2$
- Rod (center): $\\frac{1}{12}mL^2$
- Rod (end): $\\frac{1}{3}mL^2$
`,
      exampleProblems: {
        create: [
          {
            question: 'A solid disk with mass 2 kg and radius 0.4 m rotates about its center. A constant torque of 3 N·m is applied. Find: (a) the moment of inertia, (b) the angular acceleration, and (c) the angular velocity after 5 seconds (starting from rest).',
            solution: `**Given Information:**
- Mass: $m = 2$ kg
- Radius: $r = 0.4$ m
- Torque: $\\tau = 3$ N·m
- Initial angular velocity: $\\omega_i = 0$ rad/s (starts from rest)
- Time: $t = 5$ s

---

**(a) Find moment of inertia**

---

**Step 1: Use formula for solid disk**

For a solid disk rotating about its center:

$$I = \\frac{1}{2}mr^2$$

$$I = \\frac{1}{2}(2)(0.4)^2$$

$$I = \\frac{1}{2}(2)(0.16)$$

$$I = 0.16 \\text{ kg·m}^2$$

---

**Answer (a)**: Moment of inertia = **0.16 kg·m²**

---

**(b) Find angular acceleration**

---

**Step 2: Apply Newton's 2nd Law for rotation**

$$\\tau = I\\alpha$$

$$\\alpha = \\frac{\\tau}{I} = \\frac{3}{0.16}$$

$$\\alpha = 18.75 \\text{ rad/s}^2$$

---

**Answer (b)**: Angular acceleration = **18.75 rad/s²**

---

**(c) Find angular velocity after 5 seconds**

---

**Step 3: Use rotational kinematics**

$$\\omega_f = \\omega_i + \\alpha t$$

$$\\omega_f = 0 + (18.75)(5)$$

$$\\omega_f = 93.75 \\text{ rad/s}$$

---

**Answer (c)**: Angular velocity after 5 s = **93.75 rad/s** (about 94 rad/s)

**Check**: 
- In revolutions: $\\frac{93.75}{2\\pi} \\approx 14.9$ rev/s
- Tangential speed at rim: $v = r\\omega = 0.4(93.75) = 37.5$ m/s ✓`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A figure skater is spinning at 2 rev/s with arms extended (moment of inertia = 3 kg·m²). She pulls her arms in, reducing her moment of inertia to 1.5 kg·m². Find: (a) her new angular velocity, and (b) the ratio of her final kinetic energy to initial kinetic energy.',
            solution: `**Given Information:**
- Initial: $I_i = 3$ kg·m², $\\omega_i = 2$ rev/s
- Final: $I_f = 1.5$ kg·m², $\\omega_f = ?$

---

**Step 0: Convert units**

$$\\omega_i = 2 \\text{ rev/s} \\times \\frac{2\\pi \\text{ rad}}{1 \\text{ rev}} = 4\\pi \\text{ rad/s} \\approx 12.57 \\text{ rad/s}$$

---

**(a) Find new angular velocity**

---

**Step 1: Apply conservation of angular momentum**

No external torques, so angular momentum is conserved:

$$L_i = L_f$$

$$I_i \\omega_i = I_f \\omega_f$$

$$(3)(12.57) = (1.5)\\omega_f$$

$$37.7 = 1.5\\omega_f$$

$$\\omega_f = \\frac{37.7}{1.5} = 25.1 \\text{ rad/s}$$

---

**Convert to rev/s**:

$$\\omega_f = \\frac{25.1}{2\\pi} \\approx 4 \\text{ rev/s}$$

---

**Answer (a)**: New angular velocity = **4 rev/s** (or 25.1 rad/s)

**Note**: She spins twice as fast when she halves her moment of inertia!

---

**(b) Find ratio of kinetic energies**

---

**Step 2: Calculate initial kinetic energy**

$$KE_i = \\frac{1}{2}I_i\\omega_i^2$$

$$KE_i = \\frac{1}{2}(3)(12.57)^2$$

$$KE_i = \\frac{1}{2}(3)(158.0)$$

$$KE_i = 237 \\text{ J}$$

---

**Step 3: Calculate final kinetic energy**

$$KE_f = \\frac{1}{2}I_f\\omega_f^2$$

$$KE_f = \\frac{1}{2}(1.5)(25.1)^2$$

$$KE_f = \\frac{1}{2}(1.5)(630.0)$$

$$KE_f = 472.5 \\text{ J}$$

---

**Step 4: Calculate ratio**

$$\\frac{KE_f}{KE_i} = \\frac{472.5}{237} \\approx 2$$

---

**Answer (b)**: The ratio is **2:1** (kinetic energy doubles!)

**Explanation**: Where does the extra energy come from? The skater does work pulling her arms in against centrifugal effects. This work becomes rotational kinetic energy!

**General formula**: If $I_f = \\frac{I_i}{n}$, then:
- $\\omega_f = n\\omega_i$ (angular velocity multiplies by $n$)
- $KE_f = nKE_i$ (kinetic energy multiplies by $n$)

In this case, $n = 2$ ✓`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A solid sphere (mass 5 kg, radius 0.2 m) and a hollow cylinder (mass 5 kg, radius 0.2 m) both start from rest at the top of a 3 m high incline. They roll without slipping. Find: (a) the speed of each at the bottom, and (b) which one reaches the bottom first.',
            solution: `**Given Information:**
- Both: mass $m = 5$ kg, radius $r = 0.2$ m
- Height: $h = 3$ m
- Start from rest: $v_i = 0$, $\\omega_i = 0$
- Roll without slipping: $v = r\\omega$

**Moments of inertia**:
- Solid sphere: $I_s = \\frac{2}{5}mr^2$
- Hollow cylinder: $I_c = mr^2$

---

**(a) Find speeds at bottom**

---

**Step 1: Use energy conservation for solid sphere**

$$mgh = \\frac{1}{2}mv_s^2 + \\frac{1}{2}I_s\\omega_s^2$$

Using $v = r\\omega$ so $\\omega = \\frac{v}{r}$:

$$mgh = \\frac{1}{2}mv_s^2 + \\frac{1}{2}I_s\\left(\\frac{v_s}{r}\\right)^2$$

$$mgh = \\frac{1}{2}mv_s^2 + \\frac{1}{2}\\left(\\frac{2}{5}mr^2\\right)\\frac{v_s^2}{r^2}$$

$$mgh = \\frac{1}{2}mv_s^2 + \\frac{1}{5}mv_s^2$$

$$mgh = \\frac{7}{10}mv_s^2$$

$$gh = \\frac{7}{10}v_s^2$$

$$v_s = \\sqrt{\\frac{10gh}{7}}$$

$$v_s = \\sqrt{\\frac{10(9.8)(3)}{7}}$$

$$v_s = \\sqrt{\\frac{294}{7}}$$

$$v_s = \\sqrt{42}$$

$$v_s = 6.48 \\text{ m/s}$$

---

**Step 2: Use energy conservation for hollow cylinder**

$$mgh = \\frac{1}{2}mv_c^2 + \\frac{1}{2}I_c\\omega_c^2$$

$$mgh = \\frac{1}{2}mv_c^2 + \\frac{1}{2}(mr^2)\\frac{v_c^2}{r^2}$$

$$mgh = \\frac{1}{2}mv_c^2 + \\frac{1}{2}mv_c^2$$

$$mgh = mv_c^2$$

$$v_c = \\sqrt{gh}$$

$$v_c = \\sqrt{(9.8)(3)}$$

$$v_c = \\sqrt{29.4}$$

$$v_c = 5.42 \\text{ m/s}$$

---

**Answer (a)**: 
- Solid sphere: **6.48 m/s**
- Hollow cylinder: **5.42 m/s**

---

**(b) Which reaches bottom first?**

---

**Step 3: Compare speeds**

The solid sphere has **higher speed** (6.48 m/s vs. 5.42 m/s).

Since both start from rest and travel the same distance, the one with higher final speed must have had higher average speed.

**Higher average speed** → **less time** → **reaches bottom first**

---

**Answer (b)**: The **solid sphere** reaches the bottom first.

---

**Explanation**:

The solid sphere has a **smaller moment of inertia** relative to its mass ($I = \\frac{2}{5}mr^2$ vs. $I = mr^2$).

This means:
- Less energy goes into rotation
- More energy goes into translation
- Higher linear speed
- Shorter time to bottom

**General rule**: Objects with **mass concentrated near center** (smaller $I/mr^2$) roll faster down inclines!

**Ranking** (fastest to slowest):
1. Solid sphere: $I = \\frac{2}{5}mr^2$ → $v = \\sqrt{\\frac{10gh}{7}}$
2. Solid disk/cylinder: $I = \\frac{1}{2}mr^2$ → $v = \\sqrt{\\frac{4gh}{3}}$
3. Hollow cylinder: $I = mr^2$ → $v = \\sqrt{gh}$
4. Hollow sphere: $I = \\frac{2}{3}mr^2$ → $v = \\sqrt{\\frac{6gh}{5}}$

All are **slower** than a frictionless sliding block: $v = \\sqrt{2gh}$ ✓`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Rotational Dynamics and Angular Momentum')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: angularMomentum.id,
        front: 'What is moment of inertia?',
        back: '$I = \\sum mr^2$ - rotational equivalent of mass. Measures resistance to rotational acceleration. Depends on mass distribution and axis.',
        hint: 'Sum of m times r squared',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is Newton\'s 2nd Law for rotation?',
        back: '$\\tau = I\\alpha$ - net torque equals moment of inertia times angular acceleration. Analogous to $F = ma$.',
        hint: 'Torque = I times alpha',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is rotational kinetic energy?',
        back: '$KE_{rot} = \\frac{1}{2}I\\omega^2$ - analogous to $KE = \\frac{1}{2}mv^2$ for linear motion.',
        hint: 'Half I omega squared',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is angular momentum?',
        back: '$L = I\\omega$ - rotational equivalent of linear momentum ($p = mv$). Units: kg·m²/s.',
        hint: 'I times omega',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is the law of conservation of angular momentum?',
        back: 'In isolated system (no external torques): $I_i\\omega_i = I_f\\omega_f$. Angular momentum remains constant.',
        hint: 'L initial = L final if no external torques',
      },
      {
        topicId: angularMomentum.id,
        front: 'Why does a figure skater spin faster when pulling arms in?',
        back: 'Pulling arms in decreases $I$. Since $L = I\\omega$ is conserved, $\\omega$ must increase to keep $L$ constant!',
        hint: 'Conservation: if I decreases, ω increases',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is the moment of inertia of a solid disk about its center?',
        back: '$I = \\frac{1}{2}mr^2$ - given on formula sheet.',
        hint: 'Half m r squared',
      },
      {
        topicId: angularMomentum.id,
        front: 'What is the moment of inertia of a solid sphere about its center?',
        back: '$I = \\frac{2}{5}mr^2$ - given on formula sheet.',
        hint: 'Two-fifths m r squared',
      },
      {
        topicId: angularMomentum.id,
        front: 'For rolling motion, what is the total kinetic energy?',
        back: '$KE_{total} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ - sum of translational and rotational KE.',
        hint: 'Translational plus rotational',
      },
      {
        topicId: angularMomentum.id,
        front: 'Why does a solid sphere roll down an incline faster than a hollow cylinder?',
        back: 'Solid sphere has smaller $I$ relative to mass. Less energy goes to rotation, more to translation → higher speed.',
        hint: 'Smaller moment of inertia wins the race',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Rotational Dynamics and Angular Momentum')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: rotationCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: rotationCategory.id,
      },
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Torque & Rotational Motion Part 2!')
  console.log(`   Topics: 3 total (Torque, Rotational Kinematics, Angular Momentum)`)
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
