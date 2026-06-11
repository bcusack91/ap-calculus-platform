import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Momentum Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or get the Momentum category
  const momentumCategory = await prisma.category.upsert({
    where: { slug: 'momentum' },
    update: {},
    create: {
      slug: 'momentum',
      name: 'Momentum',
      description: 'Linear momentum, impulse, and conservation of momentum',
      order: 4,
      courseId: physics1Course.id,
    },
  })

  console.log('✓ Created category: Momentum')

  // ============================================
  // TOPIC 1: Momentum and Impulse
  // ============================================
  const momentumImpulse = await prisma.topic.upsert({
    where: { slug: 'momentum-and-impulse' },
    update: {},
    create: {
      slug: 'momentum-and-impulse',
      title: 'Momentum and Impulse',
      description: 'Definition of momentum, impulse, and impulse-momentum theorem',
      order: 1,
      categoryId: momentumCategory.id,
      isPremium: false,
      textContent: `
# 💨 Momentum and Impulse

## What is Momentum?

**Momentum** is the product of mass and velocity:

$$\\vec{p} = m\\vec{v}$$

where:
- $\\vec{p}$ = momentum (kg·m/s)
- $m$ = mass (kg)
- $\\vec{v}$ = velocity (m/s)

### Key Properties

1. **Vector quantity** - has magnitude and direction (same direction as velocity)
2. **Depends on both mass and velocity** - heavy slow object can have same momentum as light fast object
3. **Units**: kg·m/s (or N·s)

> **💡 Physical Meaning**: Momentum measures "quantity of motion" - how hard it is to stop a moving object.

---

## Understanding Momentum

### Large Momentum
- **Heavy object moving fast**: Truck at highway speed
- **Hard to stop**: Requires large force or long time

### Small Momentum
- **Light object moving slowly**: Tennis ball rolling
- **Easy to stop**: Small force does the job

### Zero Momentum
- Object at rest ($v = 0$)
- Velocities cancel (two objects moving opposite directions with same $|mv|$)

---

## Impulse

**Impulse** is the product of force and time:

$$\\vec{J} = \\vec{F}\\Delta t$$

where:
- $\\vec{J}$ = impulse (N·s or kg·m/s)
- $\\vec{F}$ = average force (N)
- $\\Delta t$ = time interval (s)

### For Variable Forces

$$\\vec{J} = \\int_{t_i}^{t_f} \\vec{F}(t)\\,dt$$

Graphically: **Area under force vs. time graph**

---

## Impulse-Momentum Theorem

Impulse equals change in momentum:

$$\\vec{J} = \\Delta \\vec{p}$$

$$\\vec{F}\\Delta t = m\\vec{v}_f - m\\vec{v}_i$$

$$\\vec{F}\\Delta t = m(\\vec{v}_f - \\vec{v}_i)$$

### Derivation

From Newton's 2nd Law: $\\vec{F} = m\\vec{a} = m\\frac{\\Delta \\vec{v}}{\\Delta t}$

Multiply both sides by $\\Delta t$:

$$\\vec{F}\\Delta t = m\\Delta \\vec{v} = \\Delta \\vec{p}$$

---

## Applications of Impulse-Momentum Theorem

### Same Change in Momentum, Different Ways

To stop a moving object ($\\Delta p$ is fixed):

**Option 1: Large force, short time**
- Example: Hitting a wall
- $F$ is large, $\\Delta t$ is small
- Result: Large force can cause injury/damage

**Option 2: Small force, long time**
- Example: Catching with hands that "give"
- $F$ is small, $\\Delta t$ is large
- Result: Safer, less damage

Since $F\\Delta t = \\Delta p$ (constant), increasing $\\Delta t$ decreases $F$!

---

## Real-World Examples

### Air Bags
- Increase collision time $\\Delta t$
- Same momentum change, but force reduced
- Prevents injury

### Padded Dashboards
- Increase stopping time
- Reduce peak force on passengers

### Following Through (Sports)
- Golf, tennis, baseball
- Increase contact time
- Greater impulse → greater momentum change

### Karate: Breaking Boards
- Short contact time
- Large force generated
- Follow through maximizes impulse

### Catching a Ball
- Pull hands back (increase $\\Delta t$)
- Reduce force on hands
- More comfortable catch

---

## Problem-Solving Strategy

### For Impulse Problems:

1. **Identify initial and final velocities**
2. **Calculate change in momentum**: $\\Delta p = m(v_f - v_i)$
   - Remember: momentum is a vector! Watch signs!
3. **Apply impulse-momentum theorem**: $J = \\Delta p$ or $F\\Delta t = \\Delta p$
4. **Solve for unknown** (usually $F$ or $\\Delta t$)

### Important Notes:

- **Direction matters!** Use + and - for 1D problems
- If $F$ varies, use average force: $F_{avg}\\Delta t = \\Delta p$
- Impulse has same units as momentum: N·s = kg·m/s

---

## Momentum vs. Kinetic Energy

Both depend on mass and velocity, but differently:

| Property | Momentum | Kinetic Energy |
|----------|----------|----------------|
| Formula | $p = mv$ | $KE = \\frac{1}{2}mv^2$ |
| Vector? | Yes | No (scalar) |
| Velocity dependence | Linear ($v$) | Quadratic ($v^2$) |
| Always conserved? | Yes (isolated system) | No (can convert to other forms) |
| Can be negative? | Yes (direction) | No (always ≥ 0) |

**Example**: If you double velocity:
- Momentum doubles ($p \\to 2p$)
- Kinetic energy quadruples ($KE \\to 4KE$)

---

## Force-Time Graphs

The **area under** a Force vs. Time graph equals the impulse.

For a **constant force**: $J = F\\Delta t$ (rectangle area)

For a **variable force**: $J = \\int F\\,dt$ (total area)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Vector Nature
❌ **Wrong**: Using speeds instead of velocities (losing direction info)
✅ **Right**: Use velocity with proper signs: $\\Delta p = m(v_f - v_i)$

### Mistake 2: Impulse vs. Force
Impulse is NOT force! Impulse = force × time

### Mistake 3: Units Confusion
Remember: 1 N·s = 1 kg·m/s (same units as momentum)

### Mistake 4: Sign Errors
If object reverses direction:
- Initial: $v_i = +10$ m/s
- Final: $v_f = -5$ m/s
- $\\Delta v = -5 - 10 = -15$ m/s (NOT -5 m/s!)

---

## Special Cases

### Object Bouncing Off Wall

If object hits wall and bounces back elastically:
- Before: $v_i = +v$
- After: $v_f = -v$
- $\\Delta v = -v - v = -2v$
- $|\\Delta p| = 2mv$ (twice what you might expect!)

### Object Sticking to Wall

- Before: $v_i = +v$
- After: $v_f = 0$
- $\\Delta v = -v$
- $|\\Delta p| = mv$

Bouncing off creates **twice the momentum change** of sticking!

---

## Key Formulas Summary

| Concept | Formula | Units |
|---------|---------|-------|
| Momentum | $\\vec{p} = m\\vec{v}$ | kg·m/s |
| Impulse | $\\vec{J} = \\vec{F}\\Delta t$ | N·s |
| Impulse-Momentum Theorem | $\\vec{J} = \\Delta \\vec{p}$ | kg·m/s |
| Newton's 2nd Law (momentum form) | $\\vec{F} = \\frac{d\\vec{p}}{dt}$ | N |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 0.15 kg baseball traveling at 40 m/s is hit by a bat and reverses direction, leaving at 50 m/s. If the bat and ball are in contact for 0.002 s, what is the average force exerted by the bat on the ball?',
            solution: `**Given Information:**
- Mass: $m = 0.15$ kg
- Initial velocity: $v_i = +40$ m/s (choose toward bat as positive)
- Final velocity: $v_f = -50$ m/s (reverses direction)
- Contact time: $\\Delta t = 0.002$ s

---

**Find:** Average force $F$

---

**Step 1: Calculate initial momentum**

$$p_i = mv_i = (0.15)(40) = 6 \\text{ kg·m/s}$$

---

**Step 2: Calculate final momentum**

$$p_f = mv_f = (0.15)(-50) = -7.5 \\text{ kg·m/s}$$

---

**Step 3: Calculate change in momentum**

$$\\Delta p = p_f - p_i = -7.5 - 6 = -13.5 \\text{ kg·m/s}$$

The negative sign indicates the direction (away from bat).

Magnitude: $|\\Delta p| = 13.5$ kg·m/s

---

**Step 4: Apply impulse-momentum theorem**

$$F\\Delta t = \\Delta p$$

$$F(0.002) = -13.5$$

$$F = \\frac{-13.5}{0.002} = -6,750 \\text{ N}$$

---

**Answer**: The average force is **6,750 N** in the direction opposite to the initial motion (the bat pushes the ball backward).

**Magnitude**: 6,750 N (about 1,500 pounds of force!)

**Note**: The change in momentum is $13.5$ kg·m/s, not just $7.5$ kg·m/s, because the ball reversed direction. The velocity change is $50 - (-40) = 90$ m/s!`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'A 60 kg person jumps from a height and lands on the ground, coming to rest in 0.1 s. If the person was traveling at 5 m/s just before landing, what average force does the ground exert on the person?',
            solution: `**Given Information:**
- Mass: $m = 60$ kg
- Initial velocity (downward): $v_i = -5$ m/s (taking down as negative)
- Final velocity: $v_f = 0$ m/s (comes to rest)
- Time to stop: $\\Delta t = 0.1$ s

---

**Find:** Average force from ground

---

**Step 1: Calculate change in momentum**

$$\\Delta p = m(v_f - v_i) = 60(0 - (-5))$$

$$\\Delta p = 60(5) = 300 \\text{ kg·m/s}$$

(Positive means upward direction)

---

**Step 2: Apply impulse-momentum theorem**

$$F_{net}\\Delta t = \\Delta p$$

$$F_{net}(0.1) = 300$$

$$F_{net} = 3,000 \\text{ N (upward)}$$

---

**Step 3: Identify forces**

Two forces act on the person:
- Weight: $W = mg = 60(9.8) = 588$ N (downward, so negative)
- Normal force from ground: $N$ (upward, positive)

Net force: $F_{net} = N - W = N - 588$

---

**Step 4: Solve for normal force**

$$N - 588 = 3,000$$

$$N = 3,588 \\text{ N}$$

---

**Answer**: The ground exerts an average force of **3,588 N** upward (about 6 times the person's weight).

**Note**: If the person bends their knees and takes 0.2 s to stop instead, the force would be cut in half to about 1,794 N. This is why we bend our knees when landing!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 1200 kg car traveling at 25 m/s collides with a wall and comes to rest in 0.15 s. (a) What is the impulse on the car? (b) What is the average force on the car? (c) If the car had an airbag that increased the stopping time to 0.3 s, how would the force change?',
            solution: `**Given Information:**
- Mass: $m = 1200$ kg
- Initial velocity: $v_i = 25$ m/s
- Final velocity: $v_f = 0$ m/s
- Stopping time: $\\Delta t = 0.15$ s

---

**(a) Find impulse on the car**

---

**Step 1: Calculate change in momentum**

$$\\Delta p = m(v_f - v_i) = 1200(0 - 25)$$

$$\\Delta p = -30,000 \\text{ kg·m/s}$$

---

**Step 2: Impulse equals change in momentum**

$$J = \\Delta p = -30,000 \\text{ kg·m/s (or N·s)}$$

The negative sign indicates the impulse is opposite to the initial motion (backward).

Magnitude: $|J| = 30,000$ N·s

---

**(b) Find average force**

---

**Step 3: Apply impulse-momentum theorem**

$$F\\Delta t = J$$

$$F(0.15) = -30,000$$

$$F = \\frac{-30,000}{0.15} = -200,000 \\text{ N}$$

---

**Answer (a)**: Impulse = **-30,000 N·s** (or 30,000 N·s backward)

**Answer (b)**: Average force = **200,000 N** (about 45,000 pounds!)

---

**(c) With airbag ($\\Delta t = 0.3$ s)**

---

**Step 4: Calculate new force**

The impulse remains the same ($J = -30,000$ N·s), but time doubles:

$$F'\\Delta t' = J$$

$$F'(0.3) = -30,000$$

$$F' = \\frac{-30,000}{0.3} = -100,000 \\text{ N}$$

---

**Step 5: Compare forces**

$$\\frac{F'}{F} = \\frac{100,000}{200,000} = \\frac{1}{2}$$

The force is **reduced by half** when the time is doubled!

---

**Answer (c)**: With airbag, force = **100,000 N** (half the original force)

**Key Insight**: Since $F\\Delta t = $ constant, increasing stopping time decreases the force. This is why airbags, crumple zones, and padded dashboards save lives - they increase $\\Delta t$ to decrease $F$.

$$\\text{If } \\Delta t \\text{ doubles} \\Rightarrow F \\text{ is cut in half}$$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Momentum and Impulse')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: momentumImpulse.id,
        front: 'What is momentum?',
        back: '$\\vec{p} = m\\vec{v}$ - the product of mass and velocity. It\'s a vector quantity with units kg·m/s.',
        hint: 'Mass times velocity',
      },
      {
        topicId: momentumImpulse.id,
        front: 'What is impulse?',
        back: '$\\vec{J} = \\vec{F}\\Delta t$ - the product of force and time. Has same units as momentum (N·s = kg·m/s).',
        hint: 'Force times time interval',
      },
      {
        topicId: momentumImpulse.id,
        front: 'What is the impulse-momentum theorem?',
        back: '$\\vec{J} = \\Delta \\vec{p}$ or $\\vec{F}\\Delta t = m\\vec{v}_f - m\\vec{v}_i$ - impulse equals change in momentum',
        hint: 'Connects force/time to change in motion',
      },
      {
        topicId: momentumImpulse.id,
        front: 'How can you reduce the force in a collision?',
        back: 'Increase the collision time $\\Delta t$. Since $F\\Delta t = \\Delta p$ (constant), larger $\\Delta t$ means smaller $F$. Examples: airbags, bending knees when landing.',
        hint: 'If Δt doubles, F is cut in half',
      },
      {
        topicId: momentumImpulse.id,
        front: 'If a ball bounces off a wall vs. sticks to it, which creates more impulse?',
        back: 'Bouncing creates TWICE the impulse! Bounce: $\\Delta v = v_f - v_i = (-v) - v = -2v$. Stick: $\\Delta v = 0 - v = -v$.',
        hint: 'Reversing direction doubles the change in velocity',
      },
      {
        topicId: momentumImpulse.id,
        front: 'What does the area under a Force vs. Time graph represent?',
        back: 'The impulse $J = \\int F\\,dt$. For constant force, $J = F\\Delta t$ (rectangle area).',
        hint: 'Area = impulse',
      },
      {
        topicId: momentumImpulse.id,
        front: 'How does momentum differ from kinetic energy?',
        back: 'Momentum: vector, $p = mv$ (linear in $v$), always conserved. KE: scalar, $KE = \\frac{1}{2}mv^2$ (quadratic in $v$), can be converted to other forms.',
        hint: 'One is a vector, one is a scalar',
      },
      {
        topicId: momentumImpulse.id,
        front: 'Why do you pull your hands back when catching a ball?',
        back: 'To increase the stopping time $\\Delta t$, which reduces the force on your hands. Same $\\Delta p$, but longer time means smaller force.',
        hint: 'Extend the collision time',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Momentum and Impulse')

  // ============================================
  // TOPIC 2: Conservation of Momentum
  // ============================================
  const conservationMomentum = await prisma.topic.upsert({
    where: { slug: 'conservation-of-momentum' },
    update: {},
    create: {
      slug: 'conservation-of-momentum',
      title: 'Conservation of Momentum',
      description: 'Conservation law for isolated systems and applications',
      order: 2,
      categoryId: momentumCategory.id,
      isPremium: false,
      textContent: `
# 🎯 Conservation of Momentum

## The Law of Conservation of Momentum

**In an isolated system (no external forces), the total momentum remains constant.**

$$\\vec{p}_{total,i} = \\vec{p}_{total,f}$$

$$m_1\\vec{v}_{1i} + m_2\\vec{v}_{2i} = m_1\\vec{v}_{1f} + m_2\\vec{v}_{2f}$$

> **💡 Fundamental Law**: This is one of the most important conservation laws in physics! It applies to all interactions, from colliding billiard balls to exploding stars.

---

## Isolated System

A system is **isolated** when:
- No external forces act on the system
- OR external forces sum to zero
- OR external forces are negligible compared to internal forces

**Examples of isolated systems:**
- Two ice skaters pushing apart (on frictionless ice)
- Collision between two cars (during brief collision, friction negligible)
- Explosion of fireworks (no external forces during explosion)

**Not isolated:**
- Ball rolling on rough surface (friction is external force)
- Rocket launching (thrust is internal, but gravity/air resistance are external)

---

## Why is Momentum Conserved?

### Derivation from Newton's Laws

For two objects interacting:

By Newton's 3rd Law: $\\vec{F}_{12} = -\\vec{F}_{21}$

$$\\frac{d\\vec{p}_1}{dt} = -\\frac{d\\vec{p}_2}{dt}$$

$$\\frac{d\\vec{p}_1}{dt} + \\frac{d\\vec{p}_2}{dt} = 0$$

$$\\frac{d(\\vec{p}_1 + \\vec{p}_2)}{dt} = 0$$

Therefore: $\\vec{p}_1 + \\vec{p}_2 = $ constant ✓

Internal forces come in action-reaction pairs that cancel!

---

## One-Dimensional Collisions

For motion along a line (use + and - for direction):

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

### Problem-Solving Steps:

1. **Choose positive direction** (usually direction of motion)
2. **List known values** with proper signs
3. **Write conservation equation**
4. **Solve for unknown**

---

## Two-Dimensional Collisions

Momentum is conserved in **each direction independently**:

**x-direction:**
$$m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$

**y-direction:**
$$m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

Need to use components: $v_x = v\\cos\\theta$, $v_y = v\\sin\\theta$

---

## Explosions and Recoil

In an **explosion**, objects initially at rest fly apart:

**Before**: $p_i = 0$ (at rest)

**After**: $p_f = m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0$

Therefore: $m_1\\vec{v}_1 = -m_2\\vec{v}_2$

Objects move in **opposite directions** with momenta equal in magnitude.

### Examples:
- **Rifle recoil**: Bullet goes forward, rifle goes backward
- **Rocket propulsion**: Exhaust goes backward, rocket goes forward
- **Ice skaters pushing apart**: Equal and opposite momenta

---

## Center of Mass

The **center of mass** of an isolated system moves at constant velocity:

$$\\vec{v}_{cm} = \\frac{m_1\\vec{v}_1 + m_2\\vec{v}_2}{m_1 + m_2} = \\frac{\\vec{p}_{total}}{m_{total}}$$

If system is isolated, $\\vec{p}_{total}$ is constant, so $\\vec{v}_{cm}$ is constant!

**Example**: Two skaters pushing apart
- Each skater accelerates
- But center of mass continues at same velocity (or stays at rest)

---

## When is Momentum NOT Conserved?

Momentum is NOT conserved when:
- External forces act on system
- Friction is significant
- System is not isolated

**However**: Even with external forces, conservation can apply during brief interactions where internal forces dominate.

**Example**: Car collision
- Friction acts on system (external)
- But during 0.1 s collision, collision forces >> friction
- Momentum approximately conserved during collision

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting Vector Nature
In 2D problems, must conserve momentum in EACH direction separately.

### Mistake 2: Wrong Signs
Velocities in opposite directions have opposite signs!
- Object moving right: $v > 0$
- Object moving left: $v < 0$

### Mistake 3: Including External Forces
Don't apply conservation if significant external forces act on system!

### Mistake 4: Confusing Before and After
Make sure you clearly identify which velocities are initial ($v_i$) and which are final ($v_f$).

---

## Momentum vs. Energy Conservation

| Conservation Law | Always Valid? | Remarks |
|------------------|---------------|---------|
| **Momentum** | Yes (if isolated) | Vector, conserved in all collisions |
| **Energy** | Yes | But can convert forms (not always mechanical) |
| **Kinetic Energy** | No | Only conserved in elastic collisions |

In **inelastic collisions**:
- Momentum IS conserved ✓
- Kinetic energy is NOT conserved (some converts to heat, sound, deformation)

---

## Problem-Solving Strategy

### For Collision Problems:

1. **Identify the system** (what objects are involved?)
2. **Check if isolated** (are external forces negligible?)
3. **Choose coordinate system** (which direction is positive?)
4. **List knowns and unknowns**
   - Before collision: $m_1, v_{1i}, m_2, v_{2i}$
   - After collision: $v_{1f}, v_{2f}$ (unknowns?)
5. **Apply conservation of momentum**
   - 1D: One equation
   - 2D: Two equations (x and y)
6. **Solve algebraically**
7. **Check your answer** (reasonable magnitude? correct direction?)

---

## Applications

### Rocket Propulsion
Momentum of rocket + exhaust is conserved:
$$m_{rocket}v_{rocket} + m_{exhaust}v_{exhaust} = 0$$

Exhaust goes backward → rocket goes forward

### Particle Physics
When particles collide or decay, total momentum is always conserved. Used to detect invisible particles!

### Asteroid Defense
To deflect asteroid:
- Explosion changes asteroid's momentum
- Conservation tells us required impulse

### Traffic Accidents
Forensics use conservation of momentum to determine pre-collision speeds from post-collision debris patterns.

---

## Key Formulas Summary

| Concept | Formula | Condition |
|---------|---------|-----------|
| Conservation (1D) | $m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$ | Isolated system |
| Conservation (general) | $\\vec{p}_{total,i} = \\vec{p}_{total,f}$ | Isolated system |
| Explosion/recoil | $m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0$ | Initially at rest |
| Center of mass velocity | $\\vec{v}_{cm} = \\frac{\\vec{p}_{total}}{m_{total}}$ | Always |
`,
      exampleProblems: {
        create: [
          {
            question: 'A 1000 kg car traveling at 20 m/s collides with a 2000 kg truck at rest. After the collision, the two vehicles stick together. What is their velocity immediately after the collision?',
            solution: `**Given Information:**
- Car mass: $m_1 = 1000$ kg
- Car initial velocity: $v_{1i} = 20$ m/s
- Truck mass: $m_2 = 2000$ kg
- Truck initial velocity: $v_{2i} = 0$ m/s (at rest)
- After collision: stuck together (same final velocity $v_f$)

---

**Find:** Final velocity $v_f$

---

**Step 1: Identify the system**

System = car + truck (isolated during collision)

---

**Step 2: Calculate initial momentum**

$$p_i = m_1 v_{1i} + m_2 v_{2i}$$

$$p_i = (1000)(20) + (2000)(0)$$

$$p_i = 20,000 \\text{ kg·m/s}$$

---

**Step 3: Calculate final momentum**

After sticking together, combined mass moves with velocity $v_f$:

$$p_f = (m_1 + m_2)v_f$$

$$p_f = (1000 + 2000)v_f = 3000v_f$$

---

**Step 4: Apply conservation of momentum**

$$p_i = p_f$$

$$20,000 = 3000v_f$$

$$v_f = \\frac{20,000}{3000} = 6.67 \\text{ m/s}$$

---

**Answer**: The velocity immediately after collision is **6.67 m/s** in the direction the car was traveling.

**Check**: Final velocity (6.67 m/s) is less than initial car velocity (20 m/s), which makes sense since the car must slow down when it hits the truck. ✓`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'An astronaut (mass 80 kg) floating at rest in space throws a 2 kg wrench away at 10 m/s. What is the astronaut\'s recoil velocity?',
            solution: `**Given Information:**
- Astronaut mass: $m_a = 80$ kg
- Wrench mass: $m_w = 2$ kg
- Initial state: both at rest
- Wrench final velocity: $v_{w} = +10$ m/s (choose this as positive direction)

---

**Find:** Astronaut's recoil velocity $v_a$

---

**Step 1: Calculate initial momentum**

Both at rest initially:

$$p_i = 0$$

---

**Step 2: Calculate final momentum**

$$p_f = m_a v_a + m_w v_w$$

$$p_f = (80)v_a + (2)(10)$$

$$p_f = 80v_a + 20$$

---

**Step 3: Apply conservation of momentum**

$$p_i = p_f$$

$$0 = 80v_a + 20$$

$$80v_a = -20$$

$$v_a = -0.25 \\text{ m/s}$$

---

**Answer**: The astronaut recoils at **0.25 m/s in the opposite direction** to the wrench.

**Interpretation**: 
- Negative sign means opposite direction to wrench
- Astronaut moves backward when wrench is thrown forward
- Smaller velocity because astronaut has much larger mass
- Momentum magnitudes: $|p_a| = 80(0.25) = 20$ kg·m/s = $|p_w|$ ✓`,
            difficulty: Difficulty.EASY,
            order: 2,
          },
          {
            question: 'A 3 kg ball moving at 4 m/s in the +x direction collides with a 2 kg ball moving at 3 m/s at an angle of 60° above the +x axis. After the collision, the 3 kg ball moves at 2 m/s in the +y direction. Find the velocity (magnitude and direction) of the 2 kg ball after the collision.',
            solution: `**Given Information:**
- Ball 1: $m_1 = 3$ kg
  - Before: $v_{1i} = 4$ m/s in +x direction
  - After: $v_{1f} = 2$ m/s in +y direction
- Ball 2: $m_2 = 2$ kg
  - Before: $v_{2i} = 3$ m/s at 60° above +x axis
  - After: $v_{2f} = ?$ (unknown magnitude and direction)

---

**Find:** $v_{2f}$ (magnitude and direction)

---

**Step 1: Set up initial velocities in components**

**Ball 1 (before):**
- $v_{1ix} = 4$ m/s
- $v_{1iy} = 0$ m/s

**Ball 2 (before):**
- $v_{2ix} = 3\\cos(60°) = 3(0.5) = 1.5$ m/s
- $v_{2iy} = 3\\sin(60°) = 3(0.866) = 2.60$ m/s

---

**Step 2: Set up final velocities in components**

**Ball 1 (after):**
- $v_{1fx} = 0$ m/s
- $v_{1fy} = 2$ m/s

**Ball 2 (after):**
- $v_{2fx} = ?$ (unknown)
- $v_{2fy} = ?$ (unknown)

---

**Step 3: Apply conservation of momentum in x-direction**

$$m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$

$$(3)(4) + (2)(1.5) = (3)(0) + (2)v_{2fx}$$

$$12 + 3 = 0 + 2v_{2fx}$$

$$15 = 2v_{2fx}$$

$$v_{2fx} = 7.5 \\text{ m/s}$$

---

**Step 4: Apply conservation of momentum in y-direction**

$$m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

$$(3)(0) + (2)(2.60) = (3)(2) + (2)v_{2fy}$$

$$0 + 5.2 = 6 + 2v_{2fy}$$

$$5.2 = 6 + 2v_{2fy}$$

$$2v_{2fy} = -0.8$$

$$v_{2fy} = -0.4 \\text{ m/s}$$

---

**Step 5: Find magnitude of final velocity**

$$v_{2f} = \\sqrt{v_{2fx}^2 + v_{2fy}^2}$$

$$v_{2f} = \\sqrt{(7.5)^2 + (-0.4)^2}$$

$$v_{2f} = \\sqrt{56.25 + 0.16}$$

$$v_{2f} = \\sqrt{56.41} \\approx 7.51 \\text{ m/s}$$

---

**Step 6: Find direction**

$$\\theta = \\tan^{-1}\\left(\\frac{v_{2fy}}{v_{2fx}}\\right)$$

$$\\theta = \\tan^{-1}\\left(\\frac{-0.4}{7.5}\\right)$$

$$\\theta = \\tan^{-1}(-0.0533)$$

$$\\theta \\approx -3.05°$$

(Negative means below the +x axis)

---

**Answers**: 
- **Magnitude**: 7.51 m/s
- **Direction**: 3.05° below the +x axis (or 356.95° measured counterclockwise from +x axis)

**Summary**: After the collision, the 2 kg ball moves at approximately 7.5 m/s almost horizontally (just slightly downward).`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Conservation of Momentum')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conservationMomentum.id,
        front: 'What is the law of conservation of momentum?',
        back: 'In an isolated system (no external forces), total momentum remains constant: $\\vec{p}_{total,i} = \\vec{p}_{total,f}$',
        hint: 'Total momentum before = total momentum after',
      },
      {
        topicId: conservationMomentum.id,
        front: 'What makes a system "isolated"?',
        back: 'No external forces act on the system (or they sum to zero, or are negligible compared to internal forces during interaction)',
        hint: 'External forces are absent or negligible',
      },
      {
        topicId: conservationMomentum.id,
        front: 'Why is momentum conserved? (Newton\'s Laws perspective)',
        back: 'Internal forces come in action-reaction pairs (Newton\'s 3rd Law) that cancel: $\\vec{F}_{12} = -\\vec{F}_{21}$, so total momentum doesn\'t change.',
        hint: 'Action-reaction pairs cancel out',
      },
      {
        topicId: conservationMomentum.id,
        front: 'In an explosion from rest, how do the pieces move?',
        back: 'In opposite directions with equal magnitude momenta: $m_1\\vec{v}_1 = -m_2\\vec{v}_2$. Total momentum stays zero.',
        hint: 'Started at rest, total momentum must stay zero',
      },
      {
        topicId: conservationMomentum.id,
        front: 'For 2D collisions, how do you apply conservation of momentum?',
        back: 'Conserve momentum in EACH direction independently: x-direction equation AND y-direction equation. Use components of velocities.',
        hint: 'Two equations: one for x, one for y',
      },
      {
        topicId: conservationMomentum.id,
        front: 'Is momentum conserved in ALL collisions?',
        back: 'Yes (if system is isolated)! Both elastic AND inelastic collisions conserve momentum. Only kinetic energy is different between them.',
        hint: 'Momentum: always. Kinetic energy: only in elastic',
      },
      {
        topicId: conservationMomentum.id,
        front: 'What happens to the center of mass of an isolated system?',
        back: 'Moves at constant velocity (or stays at rest). $\\vec{v}_{cm} = \\frac{\\vec{p}_{total}}{m_{total}}$ = constant if isolated.',
        hint: 'Center of mass doesn\'t accelerate if isolated',
      },
      {
        topicId: conservationMomentum.id,
        front: 'Can you use conservation of momentum if friction is present?',
        back: 'Usually NO (friction is external force). BUT during brief collisions where collision forces >> friction, can approximate as conserved.',
        hint: 'Depends on whether friction is significant',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Conservation of Momentum')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: momentumCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: momentumCategory.id,
      },
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Momentum Part 1!')
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
