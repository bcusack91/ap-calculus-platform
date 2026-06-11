import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Momentum Part 2...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Find the Momentum category
  const momentumCategory = await prisma.category.findUnique({
    where: { slug: 'momentum' },
  })

  if (!momentumCategory) {
    throw new Error('Momentum category not found')
  }

  console.log('✓ Found category: Momentum')

  // ============================================
  // TOPIC 3: Collisions
  // ============================================
  const collisions = await prisma.topic.upsert({
    where: { slug: 'collisions' },
    update: {},
    create: {
      slug: 'collisions',
      title: 'Collisions',
      description: 'Elastic and inelastic collisions, coefficient of restitution',
      order: 3,
      categoryId: momentumCategory.id,
      isPremium: false,
      textContent: `
# 💥 Collisions

## Types of Collisions

Collisions are classified based on what happens to kinetic energy:

| Type | Momentum Conserved? | Kinetic Energy Conserved? | What Happens |
|------|-------------------|------------------------|--------------|
| **Elastic** | ✅ Yes | ✅ Yes | Objects bounce off, no deformation |
| **Inelastic** | ✅ Yes | ❌ No | Some KE lost to heat, sound, deformation |
| **Perfectly Inelastic** | ✅ Yes | ❌ No (max loss) | Objects stick together |

> **💡 Key Point**: Momentum is ALWAYS conserved in collisions (if system is isolated). Kinetic energy is only conserved in elastic collisions.

---

## Elastic Collisions

In an **elastic collision**:
- Momentum is conserved
- Kinetic energy is conserved
- Objects bounce apart
- No energy lost to heat, sound, or deformation

**Examples:**
- Colliding billiard balls (nearly elastic)
- Molecules in ideal gas
- Atomic particles (fundamental particles)

### Conservation Equations (1D)

**Momentum:**
$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

**Kinetic Energy:**
$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$

**Two equations, two unknowns** (if we know initial velocities and masses)

---

## Special Case: Equal Masses (Elastic)

If $m_1 = m_2$ and object 2 is initially at rest:

**Before**: Object 1 moving at $v$, object 2 at rest

**After**: 
- Object 1 comes to rest ($v_{1f} = 0$)
- Object 2 moves with original velocity ($v_{2f} = v$)

**They exchange velocities!**

---

## Special Case: One Object Much Heavier

**Light object hits heavy object at rest:**
- Light object bounces back (reverses direction)
- Heavy object barely moves

**Heavy object hits light object at rest:**
- Heavy object continues forward (barely slows)
- Light object shoots forward at high speed

---

## Inelastic Collisions

In an **inelastic collision**:
- Momentum is conserved ✓
- Kinetic energy is NOT conserved ✗
- Some KE converted to other forms (heat, sound, deformation)
- Objects may or may not stick together

**Examples:**
- Car crash (crumple zones absorb energy)
- Dropped ball (loses energy on each bounce)
- Most real-world collisions

### Energy Loss

$$KE_{lost} = KE_i - KE_f$$

$$KE_{lost} = \\left(\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2\\right) - \\left(\\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2\\right)$$

This energy goes into:
- Heat (friction)
- Sound
- Deformation (crushing, bending)
- Internal energy

---

## Perfectly Inelastic Collisions

In a **perfectly inelastic collision**:
- Objects **stick together** after collision
- Move with same final velocity
- Maximum possible kinetic energy loss (for given initial conditions)
- Momentum still conserved!

**Examples:**
- Clay balls colliding
- Train cars coupling
- Tackle in football
- Meteor impact creating crater

### Simplified Equation

Since objects stick together: $v_{1f} = v_{2f} = v_f$

**Momentum conservation:**
$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$$

$$v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

**Only one unknown!** Much simpler than elastic collisions.

---

## Coefficient of Restitution

The **coefficient of restitution** $e$ measures "bounciness":

$$e = \\frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|} = \\frac{\\text{relative speed after}}{\\text{relative speed before}}$$

**Values:**
- $e = 1$: Perfectly elastic (ideal bounce)
- $0 < e < 1$: Inelastic (some energy lost)
- $e = 0$: Perfectly inelastic (stick together, no bounce)

**For a ball bouncing:**
$$e = \\sqrt{\\frac{h_f}{h_i}}$$

where $h_i$ is drop height, $h_f$ is bounce height.

---

## Problem-Solving Strategy

### For Elastic Collisions:

1. **Write momentum conservation**: $m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$
2. **Write energy conservation**: $\\frac{1}{2}m_1v_{1i}^2 + \\frac{1}{2}m_2v_{2i}^2 = \\frac{1}{2}m_1v_{1f}^2 + \\frac{1}{2}m_2v_{2f}^2$
3. **Solve system of equations** (algebra intensive!)
4. **Check**: KE should be equal before and after

### For Perfectly Inelastic Collisions:

1. **Use simplified equation**: $m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$
2. **Solve for** $v_f$
3. **Optional**: Calculate energy lost

Much simpler because objects stick together!

---

## ⚠️ Common Mistakes

### Mistake 1: Assuming KE is Always Conserved
❌ **Wrong**: KE is conserved in all collisions
✅ **Right**: KE is only conserved in ELASTIC collisions

### Mistake 2: Perfectly Inelastic = No Motion
❌ **Wrong**: Perfectly inelastic means objects stop moving
✅ **Right**: Perfectly inelastic means objects stick together (they can still move!)

### Mistake 3: Sign Errors in Momentum
Remember: velocities in opposite directions have opposite signs!

### Mistake 4: Confusing Speed and Velocity
In coefficient of restitution, use **relative speeds** (magnitudes), but in momentum conservation use **velocities** (with signs).

---

## 2D Collisions

For collisions in two dimensions:

**Conserve momentum in EACH direction:**

**x-direction:**
$$m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$

**y-direction:**
$$m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

**For elastic collisions, also conserve energy:**
$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$

**Need to use components**: $v_x = v\\cos\\theta$, $v_y = v\\sin\\theta$

---

## Real-World Applications

### Car Safety

Modern cars designed for **inelastic collisions**:
- Crumple zones deform (absorb energy)
- Reduces force on passengers
- Energy goes into crushing metal, not hurting people

### Sports

**Elastic collisions:**
- Golf ball and club (nearly elastic for maximum energy transfer)
- Billiards (designed to be elastic)

**Inelastic collisions:**
- Football tackle (maximum energy dissipation)
- Boxing glove (padding increases collision time, decreases force)

### Particle Physics

Particle accelerators create collisions:
- Analyze momentum and energy
- Discover new particles
- Test fundamental physics laws

---

## Comparing Collision Types

### Same Initial Conditions

Consider object 1 (mass $m$, velocity $v$) hitting object 2 (mass $m$, at rest):

**Elastic:**
- Object 1 stops: $v_{1f} = 0$
- Object 2 moves: $v_{2f} = v$
- $KE_i = KE_f = \\frac{1}{2}mv^2$
- No energy lost

**Perfectly Inelastic:**
- Both move together: $v_f = \\frac{v}{2}$
- $KE_i = \\frac{1}{2}mv^2$
- $KE_f = \\frac{1}{2}(2m)\\left(\\frac{v}{2}\\right)^2 = \\frac{1}{4}mv^2$
- **Half the kinetic energy lost!**

---

## Explosions (Reverse Collisions)

An **explosion** is like a collision in reverse:
- Start: objects together (or at rest)
- End: objects flying apart

**Still conserve momentum!**

If explosion from rest:
$$m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0$$

Energy is ADDED to system (from chemical energy, spring, etc.)

---

## Key Formulas Summary

| Type | Momentum | Kinetic Energy | Formula |
|------|----------|----------------|---------|
| **Elastic** | Conserved | Conserved | Two conservation equations |
| **Inelastic** | Conserved | Not conserved | Momentum equation only |
| **Perfectly Inelastic** | Conserved | Not conserved (max loss) | $(m_1 + m_2)v_f = m_1v_{1i} + m_2v_{2i}$ |
| **Coefficient of restitution** | - | - | $e = \\frac{v_{separation}}{v_{approach}}$ |
`,
      exampleProblems: {
        create: [
          {
            question: 'Two identical 2 kg balls collide elastically. Ball 1 is moving at 6 m/s and ball 2 is at rest. Find the final velocities of both balls.',
            solution: `**Given Information:**
- Ball 1: $m_1 = 2$ kg, $v_{1i} = 6$ m/s
- Ball 2: $m_2 = 2$ kg, $v_{2i} = 0$ m/s (at rest)
- Elastic collision (momentum AND energy conserved)

---

**Find:** $v_{1f}$ and $v_{2f}$

---

**Step 1: Apply conservation of momentum**

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$

$$(2)(6) + (2)(0) = (2)v_{1f} + (2)v_{2f}$$

$$12 = 2v_{1f} + 2v_{2f}$$

$$6 = v_{1f} + v_{2f} \\quad \\text{(Equation 1)}$$

---

**Step 2: Apply conservation of kinetic energy**

$$\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2$$

$$\\frac{1}{2}(2)(6)^2 + 0 = \\frac{1}{2}(2)v_{1f}^2 + \\frac{1}{2}(2)v_{2f}^2$$

$$36 = v_{1f}^2 + v_{2f}^2 \\quad \\text{(Equation 2)}$$

---

**Step 3: Use special case result**

For **elastic collision** with **equal masses** where one is at rest:

**The velocities are exchanged!**

$$v_{1f} = 0 \\text{ m/s}$$
$$v_{2f} = 6 \\text{ m/s}$$

---

**Step 4: Verify with equations**

**Check Equation 1:**
$$v_{1f} + v_{2f} = 0 + 6 = 6 \\quad ✓$$

**Check Equation 2:**
$$v_{1f}^2 + v_{2f}^2 = 0^2 + 6^2 = 36 \\quad ✓$$

---

**Answers**: 
- Ball 1 final velocity: **0 m/s** (comes to rest)
- Ball 2 final velocity: **6 m/s** (takes on ball 1's velocity)

**Physical Interpretation**: Ball 1 transfers all its momentum and energy to ball 2. This is what you see in Newton's cradle!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 1500 kg car traveling at 20 m/s rear-ends a 1000 kg car traveling at 15 m/s in the same direction. The cars stick together after the collision. (a) Find their common velocity after the collision. (b) How much kinetic energy is lost?',
            solution: `**Given Information:**
- Car 1: $m_1 = 1500$ kg, $v_{1i} = 20$ m/s
- Car 2: $m_2 = 1000$ kg, $v_{2i} = 15$ m/s (same direction)
- Perfectly inelastic collision (stick together)

---

**(a) Find common velocity after collision**

---

**Step 1: Apply conservation of momentum**

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$$

$$(1500)(20) + (1000)(15) = (1500 + 1000)v_f$$

$$30,000 + 15,000 = 2500v_f$$

$$45,000 = 2500v_f$$

$$v_f = \\frac{45,000}{2500} = 18 \\text{ m/s}$$

---

**Answer (a)**: Common velocity after collision is **18 m/s**

---

**(b) Find kinetic energy lost**

---

**Step 2: Calculate initial kinetic energy**

$$KE_i = \\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2$$

$$KE_i = \\frac{1}{2}(1500)(20)^2 + \\frac{1}{2}(1000)(15)^2$$

$$KE_i = \\frac{1}{2}(1500)(400) + \\frac{1}{2}(1000)(225)$$

$$KE_i = 300,000 + 112,500$$

$$KE_i = 412,500 \\text{ J}$$

---

**Step 3: Calculate final kinetic energy**

$$KE_f = \\frac{1}{2}(m_1 + m_2)v_f^2$$

$$KE_f = \\frac{1}{2}(2500)(18)^2$$

$$KE_f = \\frac{1}{2}(2500)(324)$$

$$KE_f = 405,000 \\text{ J}$$

---

**Step 4: Calculate energy lost**

$$KE_{lost} = KE_i - KE_f$$

$$KE_{lost} = 412,500 - 405,000$$

$$KE_{lost} = 7,500 \\text{ J}$$

---

**Answer (b)**: Kinetic energy lost = **7,500 J**

**Percentage lost**: $\\frac{7,500}{412,500} \\times 100\\% \\approx 1.8\\%$

**Note**: This energy goes into crumpling metal, heat, and sound. Even though both cars were moving in the same direction and the speed difference was only 5 m/s, significant energy was dissipated!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 0.2 kg ball is dropped from a height of 2 m and bounces to a height of 1.2 m. (a) Find the coefficient of restitution. (b) If the ball was in contact with the ground for 0.01 s, what average force did the ground exert on the ball?',
            solution: `**Given Information:**
- Mass: $m = 0.2$ kg
- Drop height: $h_i = 2$ m
- Bounce height: $h_f = 1.2$ m
- Contact time: $\\Delta t = 0.01$ s

---

**(a) Find coefficient of restitution**

---

**Step 1: Calculate velocity just before hitting ground**

Using energy conservation: $mgh_i = \\frac{1}{2}mv_{before}^2$

$$v_{before} = \\sqrt{2gh_i} = \\sqrt{2(9.8)(2)}$$

$$v_{before} = \\sqrt{39.2} = 6.26 \\text{ m/s (downward)}$$

---

**Step 2: Calculate velocity just after leaving ground**

Using energy conservation: $\\frac{1}{2}mv_{after}^2 = mgh_f$

$$v_{after} = \\sqrt{2gh_f} = \\sqrt{2(9.8)(1.2)}$$

$$v_{after} = \\sqrt{23.52} = 4.85 \\text{ m/s (upward)}$$

---

**Step 3: Calculate coefficient of restitution**

$$e = \\frac{v_{separation}}{v_{approach}} = \\frac{v_{after}}{v_{before}}$$

$$e = \\frac{4.85}{6.26} = 0.775$$

**Alternative formula using heights:**

$$e = \\sqrt{\\frac{h_f}{h_i}} = \\sqrt{\\frac{1.2}{2}} = \\sqrt{0.6} = 0.775$$

---

**Answer (a)**: Coefficient of restitution = **0.775**

This means the collision is inelastic (not perfectly elastic where $e = 1$).

---

**(b) Find average force from ground**

---

**Step 4: Set up velocity directions**

Taking upward as positive:
- Velocity before collision: $v_i = -6.26$ m/s (downward)
- Velocity after collision: $v_f = +4.85$ m/s (upward)

---

**Step 5: Calculate change in momentum**

$$\\Delta p = m(v_f - v_i)$$

$$\\Delta p = (0.2)(4.85 - (-6.26))$$

$$\\Delta p = (0.2)(4.85 + 6.26)$$

$$\\Delta p = (0.2)(11.11)$$

$$\\Delta p = 2.22 \\text{ kg·m/s (upward)}$$

---

**Step 6: Apply impulse-momentum theorem**

$$F_{net}\\Delta t = \\Delta p$$

$$F_{net}(0.01) = 2.22$$

$$F_{net} = 222 \\text{ N (upward)}$$

---

**Step 7: Find force from ground**

Net force = Normal force from ground - Weight

$$F_{net} = N - mg$$

$$222 = N - (0.2)(9.8)$$

$$222 = N - 1.96$$

$$N = 223.96 \\text{ N}$$

---

**Answer (b)**: Average force from ground = **224 N**

**Note**: This is about **114 times** the ball's weight! The ground must exert a large force because:
1. It must stop the ball's downward motion
2. It must accelerate the ball upward
3. All in a very short time (0.01 s)

If the contact time were longer (softer surface), the force would be smaller.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Collisions')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: collisions.id,
        front: 'What is the difference between elastic and inelastic collisions?',
        back: 'Elastic: both momentum AND kinetic energy conserved. Inelastic: only momentum conserved, some KE lost to heat/sound/deformation.',
        hint: 'Think about what happens to kinetic energy',
      },
      {
        topicId: collisions.id,
        front: 'What is a perfectly inelastic collision?',
        back: 'Objects stick together after collision. Maximum possible KE loss (for given conditions). Momentum still conserved: $(m_1 + m_2)v_f = m_1v_{1i} + m_2v_{2i}$',
        hint: 'Objects stick together',
      },
      {
        topicId: collisions.id,
        front: 'Is momentum conserved in ALL types of collisions?',
        back: 'YES! Momentum is conserved in elastic, inelastic, and perfectly inelastic collisions (if system is isolated).',
        hint: 'Momentum: always. KE: only in elastic',
      },
      {
        topicId: collisions.id,
        front: 'In an elastic collision between equal masses (one at rest), what happens?',
        back: 'The velocities are exchanged! Moving object stops, stationary object takes on the velocity of the first object.',
        hint: 'Perfect momentum and energy transfer',
      },
      {
        topicId: collisions.id,
        front: 'What is the coefficient of restitution?',
        back: '$e = \\frac{v_{separation}}{v_{approach}}$ - measures "bounciness". $e=1$ (perfectly elastic), $0<e<1$ (inelastic), $e=0$ (perfectly inelastic)',
        hint: 'Ratio of relative speeds after/before',
      },
      {
        topicId: collisions.id,
        front: 'For a ball bouncing, how is coefficient of restitution related to height?',
        back: '$e = \\sqrt{\\frac{h_f}{h_i}}$ where $h_i$ is drop height and $h_f$ is bounce height.',
        hint: 'Square root of height ratio',
      },
      {
        topicId: collisions.id,
        front: 'Why are car crumple zones designed to deform (inelastic collision)?',
        back: 'Deformation absorbs energy and increases collision time, reducing force on passengers. Better to destroy metal than people!',
        hint: 'Energy absorption protects passengers',
      },
      {
        topicId: collisions.id,
        front: 'In a 2D collision, how many equations do you need?',
        back: 'At least 2: momentum conservation in x-direction AND y-direction. For elastic, also add energy conservation (3rd equation).',
        hint: 'One equation per dimension, plus energy if elastic',
      },
      {
        topicId: collisions.id,
        front: 'Where does the "lost" kinetic energy go in an inelastic collision?',
        back: 'Converted to heat, sound, and deformation (crushing/bending). Energy is conserved overall, just not in kinetic form.',
        hint: 'Heat, sound, deformation',
      },
      {
        topicId: collisions.id,
        front: 'Can kinetic energy INCREASE in a collision?',
        back: 'Yes! In an explosion or if there\'s an internal energy source (spring, chemical). But momentum is still conserved.',
        hint: 'Explosions add energy to the system',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Collisions')

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

  console.log('\n✅ Successfully seeded AP Physics 1 - Momentum Part 2!')
  console.log(`   Topics: 3 total (Momentum and Impulse, Conservation of Momentum, Collisions)`)
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
