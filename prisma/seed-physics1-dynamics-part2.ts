import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics 1 - Dynamics Part 2...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' }
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Find the Dynamics category
  const dynamicsCategory = await prisma.category.findFirst({
    where: {
      courseId: physics1Course.id,
      slug: 'dynamics'
    }
  })

  if (!dynamicsCategory) {
    throw new Error('Dynamics category not found')
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: dynamicsCategory.id }
  })

  // Topic 1: Friction
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'friction' },
    update: {},
    create: {
      title: 'Friction',
      slug: 'friction',
      description: 'Static and kinetic friction forces',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: dynamicsCategory.id,
      textContent: `# Friction

## Introduction to Friction

**Friction** is a force that opposes motion or attempted motion between surfaces in contact.

### Key Characteristics
- Always parallel to the surface
- Always opposes motion (or attempted motion)
- Caused by microscopic interactions between surfaces
- Converted to thermal energy (heat)
- Can be helpful (walking, driving) or harmful (wear, energy loss)

## Types of Friction

### Static Friction ($f_s$)

**Static friction** opposes the tendency to move when surfaces are not sliding.

$$f_s \\leq \\mu_s N$$

Where:
- $f_s$ = static friction force
- $\\mu_s$ = coefficient of static friction (no units)
- $N$ = normal force
- $\\leq$ means "less than or equal to"

**Key points:**
- Static friction **adjusts** to prevent motion (up to a maximum)
- Maximum value: $f_{s,max} = \\mu_s N$
- When applied force < $f_{s,max}$: object doesn't move
- When applied force = $f_{s,max}$: object is on verge of moving
- When applied force > $f_{s,max}$: object starts to slide

### Kinetic Friction ($f_k$)

**Kinetic friction** opposes motion when surfaces are sliding.

$$f_k = \\mu_k N$$

Where:
- $f_k$ = kinetic friction force
- $\\mu_k$ = coefficient of kinetic friction (no units)
- $N$ = normal force

**Key points:**
- Kinetic friction has a constant value (for given surfaces)
- Always less than maximum static friction: $f_k < f_{s,max}$
- Therefore: $\\mu_k < \\mu_s$ (always!)
- Direction: opposite to velocity

## Coefficients of Friction

### Properties of $\\mu$ (mu)
- **Dimensionless** (no units)
- Depends on surfaces in contact (materials, roughness)
- Ranges from 0 (frictionless) to >1 (very rough)
- Typical values: $0.1$ to $1.5$
- $\\mu_s > \\mu_k$ (harder to start moving than to keep moving)

### Common Values

| Surfaces | $\\mu_s$ | $\\mu_k$ |
|----------|---------|---------|
| Rubber on dry concrete | 1.0 | 0.8 |
| Wood on wood | 0.5 | 0.3 |
| Steel on steel | 0.7 | 0.6 |
| Ice on ice | 0.1 | 0.03 |
| Teflon on Teflon | 0.04 | 0.04 |

## Direction of Friction

**Static friction:** Opposes the direction the object would move if there were no friction

**Kinetic friction:** Opposes the direction of motion (opposite to velocity)

### On a horizontal surface:
- Object pushed to the right → friction points left
- Object moving left → friction points right

### On an incline:
- Object tendency to slide down → friction points up the incline
- Object sliding down → friction points up the incline
- Object being pulled up → friction points down the incline

## Relationship to Normal Force

$$f \\propto N$$

**Important:** Friction depends on normal force, NOT on:
- Surface area (wider tire doesn't reduce friction)
- Weight directly (only through $N$)
- Speed (in simple models)

**On horizontal surface:** $N = mg$, so $f_{s,max} = \\mu_s mg$

**On incline:** $N = mg\\cos\\theta$, so $f_{s,max} = \\mu_s mg\\cos\\theta$

## Static Friction: Adjust or Maximum?

Static friction can be **any value** from $0$ to $\\mu_s N$:

### Case 1: Object at Rest (Equilibrium)
Applied force $F_{app} = 20$ N, $f_{s,max} = 50$ N
- Static friction adjusts: $f_s = 20$ N
- Object doesn't move: $\\sum F = 0$

### Case 2: On the Verge of Moving
Applied force $F_{app} = 50$ N, $f_{s,max} = 50$ N
- Static friction at maximum: $f_s = 50$ N
- Object about to slide: $\\sum F = 0$ (barely)

### Case 3: Sliding
Applied force $F_{app} = 60$ N, $f_{s,max} = 50$ N
- Static friction can't hold: object slides!
- Now kinetic friction applies: $f_k = \\mu_k N < 50$ N
- Object accelerates: $\\sum F = F_{app} - f_k > 0$

## Motion on a Horizontal Surface

### Free Body Diagram:
- Weight $W = mg$ (down)
- Normal force $N$ (up)
- Applied force $F_{app}$ (horizontal)
- Friction $f$ (opposite to motion/tendency)

### Equations:
**Vertical:** $N - mg = 0$, so $N = mg$

**Horizontal:**
- If not moving: $F_{app} - f_s = 0$, so $f_s = F_{app}$ (up to $\\mu_s N$)
- If moving: $F_{app} - f_k = ma$, where $f_k = \\mu_k N$

## Problem-Solving Strategy

1. **Draw free body diagram**
2. **Identify whether static or kinetic friction applies**
   - At rest or no sliding → static
   - Sliding → kinetic
3. **Find normal force** (from vertical equilibrium)
4. **Calculate friction force**
   - Static: $f_s \\leq \\mu_s N$ (adjusts to prevent motion)
   - Kinetic: $f_k = \\mu_k N$ (constant)
5. **Apply Newton's Second Law** in direction of motion
6. **Solve for unknowns**

## Common Scenarios

### Starting Motion
Find minimum force to start an object moving:
$$F_{min} = f_{s,max} = \\mu_s N$$

### Constant Velocity
Object moving at constant speed:
- $a = 0$, so $\\sum F = 0$
- Applied force = kinetic friction
- $F_{app} = f_k = \\mu_k N$

### Accelerating Motion
Object speeding up or slowing down:
- $a \\neq 0$
- $\\sum F = ma$
- $F_{app} - f_k = ma$ (if moving to the right)

## Air Resistance (Brief)

**Air resistance** (drag) is a type of friction with air:
- Depends on speed (higher speed → more drag)
- Depends on surface area and shape
- Negligible at low speeds
- At terminal velocity: drag force = weight (no acceleration)

We'll usually **neglect air resistance** in AP Physics 1 unless stated.
`,
      exampleProblems: {
        create: [
          {
            question: 'A $10$ kg box rests on a horizontal surface. The coefficient of static friction is $\\mu_s = 0.4$. What is the maximum static friction force?',
            solution: `**Given:**
- Mass: $m = 10$ kg
- Coefficient of static friction: $\\mu_s = 0.4$
- On horizontal surface
- $g = 10$ m/s²

**Find:** Maximum static friction $f_{s,max}$

**Step 1: Find normal force**

Draw free body diagram (vertical direction):
- Weight down: $W = mg$
- Normal force up: $N$

Since no vertical acceleration:
$$N - mg = 0$$
$$N = mg = (10)(10) = 100 \\text{ N}$$

**Step 2: Calculate maximum static friction**

$$f_{s,max} = \\mu_s N$$
$$f_{s,max} = (0.4)(100)$$
$$f_{s,max} = 40 \\text{ N}$$

**Answer:** The maximum static friction force is **40 N**.

**Interpretation:** The box will remain at rest as long as the horizontal applied force is less than or equal to 40 N. If the applied force exceeds 40 N, the box will start to slide.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A $5$ kg block on a horizontal surface experiences a horizontal applied force of $30$ N. The coefficients of friction are $\\mu_s = 0.5$ and $\\mu_k = 0.3$. Does the block move? If so, what is its acceleration? (Use $g = 10$ m/s²)',
            solution: `**Given:**
- Mass: $m = 5$ kg
- Applied force: $F_{app} = 30$ N (horizontal)
- $\\mu_s = 0.5$, $\\mu_k = 0.3$
- $g = 10$ m/s²

**Find:** Does it move? If yes, find acceleration.

**Step 1: Find normal force**
$$N = mg = (5)(10) = 50 \\text{ N}$$

**Step 2: Find maximum static friction**
$$f_{s,max} = \\mu_s N = (0.5)(50) = 25 \\text{ N}$$

**Step 3: Compare applied force to max static friction**
$$F_{app} = 30 \\text{ N} > f_{s,max} = 25 \\text{ N}$$

Since applied force exceeds maximum static friction, **the block will slide!**

**Step 4: Find kinetic friction** (now that it's moving)
$$f_k = \\mu_k N = (0.3)(50) = 15 \\text{ N}$$

**Step 5: Apply Newton's Second Law (horizontal)**

Choose right as positive direction:
$$\\sum F_x = ma$$
$$F_{app} - f_k = ma$$
$$30 - 15 = 5a$$
$$15 = 5a$$
$$a = 3 \\text{ m/s}^2$$

**Answers:**
- **Yes, the block moves** (applied force > max static friction)
- Acceleration: **3 m/s²** to the right

**Key insight:** Once sliding starts, kinetic friction (15 N) is less than max static friction (25 N), so there's a net force causing acceleration.`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A $20$ kg crate is pulled across a horizontal floor at constant velocity by a rope making an angle of $30°$ above the horizontal. The coefficient of kinetic friction is $\\mu_k = 0.25$. Find the tension in the rope. (Use $g = 10$ m/s², $\\cos 30° = 0.866$, $\\sin 30° = 0.5$)',
            solution: `**Given:**
- Mass: $m = 20$ kg
- Angle of rope: $\\theta = 30°$
- Constant velocity (so $a = 0$)
- $\\mu_k = 0.25$
- $g = 10$ m/s²

**Find:** Tension $T$ in the rope

**Free Body Diagram:**
- Weight: $W = mg = 200$ N (down)
- Normal: $N$ (up)
- Tension: $T$ at angle $30°$
  - Horizontal component: $T_x = T\\cos 30°$
  - Vertical component: $T_y = T\\sin 30°$
- Kinetic friction: $f_k = \\mu_k N$ (left, opposing motion)

**Step 1: Vertical direction** (no vertical acceleration)

$$\\sum F_y = 0$$
$$N + T\\sin 30° - mg = 0$$
$$N + 0.5T - 200 = 0$$
$$N = 200 - 0.5T$$

**Step 2: Horizontal direction** (constant velocity, so $a = 0$)

$$\\sum F_x = 0$$
$$T\\cos 30° - f_k = 0$$
$$T\\cos 30° = f_k$$

**Step 3: Express friction in terms of normal force**

$$f_k = \\mu_k N = 0.25N$$

Substituting $N$ from Step 1:
$$f_k = 0.25(200 - 0.5T)$$
$$f_k = 50 - 0.125T$$

**Step 4: Substitute into horizontal equation**

$$T\\cos 30° = 50 - 0.125T$$
$$0.866T = 50 - 0.125T$$
$$0.866T + 0.125T = 50$$
$$0.991T = 50$$
$$T = \\frac{50}{0.991} \\approx 50.5 \\text{ N}$$

**Answer:** The tension in the rope is approximately **50.5 N**.

**Check:** 
- $N = 200 - 0.5(50.5) = 174.75$ N
- $f_k = 0.25(174.75) = 43.7$ N
- $T\\cos 30° = 50.5(0.866) = 43.7$ N ✓

**Key insight:** The upward component of tension reduces the normal force, which reduces friction, which reduces the horizontal force needed!`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic1.title}`)

  // Create flashcards for Topic 1
  const flashcards1 = [
    {
      topicId: topic1.id,
      front: 'What is the formula for maximum static friction?',
      back: '$f_{s,max} = \\mu_s N$ where $\\mu_s$ is the coefficient of static friction and $N$ is the normal force'
    },
    {
      topicId: topic1.id,
      front: 'What is the formula for kinetic friction?',
      back: '$f_k = \\mu_k N$ where $\\mu_k$ is the coefficient of kinetic friction and $N$ is the normal force'
    },
    {
      topicId: topic1.id,
      front: 'How do you know whether to use static or kinetic friction?',
      back: 'Static friction: surfaces not sliding (at rest or no relative motion). Kinetic friction: surfaces sliding relative to each other.'
    },
    {
      topicId: topic1.id,
      front: 'Which is larger: static or kinetic coefficient of friction?',
      back: 'Static: $\\mu_s > \\mu_k$ (always). It\'s harder to start motion than to maintain it.'
    },
    {
      topicId: topic1.id,
      front: 'What direction does friction act?',
      back: 'Always parallel to the surface, opposing motion or attempted motion'
    },
    {
      topicId: topic1.id,
      front: 'Does friction depend on surface area?',
      back: 'No! Friction depends only on the normal force and coefficient of friction, not on surface area.'
    },
    {
      topicId: topic1.id,
      front: 'If an object is at rest on a horizontal surface with friction, what is the friction force?',
      back: 'Static friction adjusts to balance the applied force: $f_s = F_{app}$ (up to maximum $\\mu_s N$)'
    },
    {
      topicId: topic1.id,
      front: 'What is the minimum force needed to start an object moving?',
      back: '$F_{min} = f_{s,max} = \\mu_s N$'
    },
    {
      topicId: topic1.id,
      front: 'If an object moves at constant velocity, what can you conclude about forces?',
      back: 'Net force is zero. Applied force equals friction: $F_{app} = f_k$ (if kinetic friction applies)'
    },
    {
      topicId: topic1.id,
      front: 'Do coefficients of friction have units?',
      back: 'No, they are dimensionless (no units)'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Inclined Planes
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'inclined-planes' },
    update: {},
    create: {
      title: 'Inclined Planes',
      slug: 'inclined-planes',
      description: 'Forces and motion on inclined surfaces',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: dynamicsCategory.id,
      textContent: `# Inclined Planes

## Introduction

An **inclined plane** is a flat surface tilted at an angle to the horizontal.

**Why they're important:**
- Reduces force needed to lift objects (mechanical advantage)
- Common in real world: ramps, hills, roofs
- Requires careful component analysis

## Coordinate System

**Standard choice:** Rotate axes so one axis is parallel to the incline.

- **x-axis:** Parallel to incline (positive = up the incline)
- **y-axis:** Perpendicular to incline (positive = away from surface)
- **Angle:** $\\theta$ = angle incline makes with horizontal

**Why this choice?**
- Motion is along the incline (parallel to x-axis)
- No motion perpendicular to incline (y-direction equilibrium)
- Simplifies math!

## Forces on an Incline

### Weight Components

Weight $W = mg$ points **straight down** (not perpendicular to incline!).

Break weight into components:

**Parallel to incline** (down the slope):
$$W_x = mg\\sin\\theta$$

**Perpendicular to incline** (into the surface):
$$W_y = mg\\cos\\theta$$

**Derivation from geometry:**
- Angle between weight and perpendicular to incline = $\\theta$
- Therefore: parallel component uses $\\sin\\theta$, perpendicular uses $\\cos\\theta$

### Normal Force

**Normal force** $N$ acts perpendicular to the surface (along y-axis).

In y-direction (no acceleration perpendicular to incline):
$$N - mg\\cos\\theta = 0$$
$$N = mg\\cos\\theta$$

**Key point:** Normal force is NOT equal to $mg$ on an incline!

### Friction

**Friction** acts parallel to incline, opposing motion or attempted motion.

- If object slides down: friction points up the incline
- If object is pushed up: friction points down the incline

**Maximum static friction:**
$$f_{s,max} = \\mu_s N = \\mu_s mg\\cos\\theta$$

**Kinetic friction:**
$$f_k = \\mu_k N = \\mu_k mg\\cos\\theta$$

## Motion Down a Frictionless Incline

**Free body diagram:**
- Weight component parallel: $mg\\sin\\theta$ (down incline)
- Weight component perpendicular: $mg\\cos\\theta$ (into surface)
- Normal force: $N = mg\\cos\\theta$ (out from surface)
- No friction

**Apply Newton's Second Law (x-direction, parallel to incline):**

$$\\sum F_x = ma$$
$$mg\\sin\\theta = ma$$
$$a = g\\sin\\theta$$

**Key results:**
- Acceleration is independent of mass!
- Acceleration increases with steeper incline ($\\theta$ larger)
- At $\\theta = 90°$: $a = g$ (free fall)
- At $\\theta = 0°$: $a = 0$ (horizontal surface)

## Motion with Friction

### Object at Rest on Incline

**Question:** What coefficient of friction is needed to prevent sliding?

**Analysis:**

Parallel to incline (equilibrium):
$$f_s = mg\\sin\\theta$$

Maximum static friction:
$$f_{s,max} = \\mu_s N = \\mu_s mg\\cos\\theta$$

**Condition for no sliding:**
$$mg\\sin\\theta \\leq \\mu_s mg\\cos\\theta$$
$$\\sin\\theta \\leq \\mu_s \\cos\\theta$$
$$\\tan\\theta \\leq \\mu_s$$

**Critical angle:** $\\theta_c = \\tan^{-1}(\\mu_s)$

- If $\\theta < \\theta_c$: object stays at rest
- If $\\theta = \\theta_c$: object on verge of sliding
- If $\\theta > \\theta_c$: object slides down

### Object Sliding Down Incline

**Free body diagram:**
- Weight component parallel: $mg\\sin\\theta$ (down)
- Kinetic friction: $f_k = \\mu_k mg\\cos\\theta$ (up)
- Normal force: $N = mg\\cos\\theta$

**Apply Newton's Second Law:**

$$\\sum F_x = ma$$
$$mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$$
$$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$$

**Special cases:**
- If $\\sin\\theta = \\mu_k\\cos\\theta$: $a = 0$ (slides at constant velocity)
- If $\\sin\\theta > \\mu_k\\cos\\theta$: $a > 0$ (speeds up)
- If $\\sin\\theta < \\mu_k\\cos\\theta$: Can't slide down (would need initial motion)

### Object Pushed Up Incline

**Forces parallel to incline:**
- Applied force $F_{app}$ (up incline)
- Weight component: $mg\\sin\\theta$ (down incline)
- Friction: $f_k = \\mu_k mg\\cos\\theta$ (down incline, opposes motion)

**Newton's Second Law:**
$$F_{app} - mg\\sin\\theta - \\mu_k mg\\cos\\theta = ma$$

**To push at constant velocity** ($a = 0$):
$$F_{app} = mg\\sin\\theta + \\mu_k mg\\cos\\theta$$
$$F_{app} = mg(\\sin\\theta + \\mu_k\\cos\\theta)$$

## Problem-Solving Strategy

1. **Draw the incline and identify angle** $\\theta$
2. **Rotate coordinate system** (x parallel, y perpendicular to incline)
3. **Draw free body diagram** with rotated axes
4. **Break weight into components:**
   - Parallel: $mg\\sin\\theta$
   - Perpendicular: $mg\\cos\\theta$
5. **Find normal force** from y-direction equilibrium: $N = mg\\cos\\theta$
6. **Determine friction** (static or kinetic)
7. **Apply Newton's Second Law** in x-direction
8. **Solve for unknowns**

## Common Angles and Trig Values

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|---------|-------------|-------------|-------------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $0.5$ | $0.866$ | $0.577$ |
| $37°$ | $0.6$ | $0.8$ | $0.75$ |
| $45°$ | $0.707$ | $0.707$ | $1$ |
| $53°$ | $0.8$ | $0.6$ | $1.33$ |
| $90°$ | $1$ | $0$ | undefined |

## Real-World Applications

- **Ramps:** Reduce force needed to lift heavy objects
- **Roads on hills:** Banking prevents cars from sliding
- **Ski slopes:** Steeper = faster (larger $g\\sin\\theta$)
- **Conveyor belts:** Angle and friction determine maximum load
`,
      exampleProblems: {
        create: [
          {
            question: 'A $5$ kg block rests on a frictionless incline at $30°$. What is its acceleration down the incline? (Use $g = 10$ m/s²)',
            solution: `**Given:**
- Mass: $m = 5$ kg
- Incline angle: $\\theta = 30°$
- Frictionless (no friction)
- $g = 10$ m/s²
- $\\sin 30° = 0.5$

**Find:** Acceleration down the incline

**Free Body Diagram** (rotated axes):
- Weight component parallel (down incline): $mg\\sin\\theta$
- Weight component perpendicular: $mg\\cos\\theta$
- Normal force: $N$ (perpendicular, out from surface)

**Apply Newton's Second Law** (parallel to incline):

$$\\sum F_x = ma$$
$$mg\\sin\\theta = ma$$

**Solve for acceleration:**
$$a = g\\sin\\theta$$
$$a = (10)(0.5)$$
$$a = 5 \\text{ m/s}^2$$

Direction: Down the incline

**Answer:** The acceleration is **5 m/s² down the incline**.

**Key insight:** Acceleration is independent of mass! A 5 kg block and a 50 kg block both accelerate at the same rate on a frictionless incline.

**Check:** At $\\theta = 90°$: $a = g\\sin 90° = g$ (free fall) ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A box sits on an incline at $37°$. The coefficient of static friction is $\\mu_s = 0.75$. Does the box slide down? (Use $\\sin 37° = 0.6$, $\\cos 37° = 0.8$, $\\tan 37° = 0.75$)',
            solution: `**Given:**
- Incline angle: $\\theta = 37°$
- Coefficient of static friction: $\\mu_s = 0.75$
- Box initially at rest

**Find:** Does it slide?

**Method 1: Compare forces**

**Step 1:** Force trying to pull box down incline:
$$F_{down} = mg\\sin 37° = 0.6mg$$

**Step 2:** Maximum friction force holding box:
$$f_{s,max} = \\mu_s N = \\mu_s mg\\cos 37°$$
$$f_{s,max} = (0.75)(mg)(0.8) = 0.6mg$$

**Step 3:** Compare:
$$F_{down} = 0.6mg = f_{s,max}$$

**Conclusion:** The box is **on the verge of sliding** (just barely held in place).

**Method 2: Critical angle**

Critical angle: $\\theta_c = \\tan^{-1}(\\mu_s)$

$$\\tan\\theta_c = 0.75$$
$$\\theta_c = \\tan^{-1}(0.75) = 37°$$

Since $\\theta = \\theta_c$, the box is on the verge of sliding.

**Answer:** The box is **on the verge of sliding but does not slide** (at the critical angle). Any slight increase in angle or decrease in friction would cause sliding.

**Key insight:** When $\\tan\\theta = \\mu_s$, the object is at the critical angle. Notice that $\\tan 37° = 0.75 = \\mu_s$!`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A $10$ kg sled slides down a $30°$ incline with coefficient of kinetic friction $\\mu_k = 0.2$. Find: (a) the acceleration of the sled, (b) the speed after sliding $20$ m from rest. (Use $g = 10$ m/s², $\\sin 30° = 0.5$, $\\cos 30° = 0.866$)',
            solution: `**Given:**
- Mass: $m = 10$ kg
- Angle: $\\theta = 30°$
- $\\mu_k = 0.2$
- Distance: $d = 20$ m
- Initial velocity: $v_0 = 0$ (starts from rest)
- $g = 10$ m/s²

**Part (a): Find acceleration**

**Step 1: Find normal force**
$$N = mg\\cos\\theta = (10)(10)(0.866) = 86.6 \\text{ N}$$

**Step 2: Find kinetic friction**
$$f_k = \\mu_k N = (0.2)(86.6) = 17.32 \\text{ N}$$

**Step 3: Find weight component down incline**
$$F_{parallel} = mg\\sin\\theta = (10)(10)(0.5) = 50 \\text{ N}$$

**Step 4: Apply Newton's Second Law** (down incline is positive)

$$\\sum F_x = ma$$
$$mg\\sin\\theta - f_k = ma$$
$$50 - 17.32 = 10a$$
$$32.68 = 10a$$
$$a = 3.268 \\text{ m/s}^2 \\approx 3.27 \\text{ m/s}^2$$

**Alternative formula:**
$$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$$
$$a = 10(0.5 - 0.2 \\times 0.866)$$
$$a = 10(0.5 - 0.173)$$
$$a = 10(0.327) = 3.27 \\text{ m/s}^2$$

**Part (b): Find speed after 20 m**

Use kinematic equation: $v^2 = v_0^2 + 2ad$

$$v^2 = 0^2 + 2(3.27)(20)$$
$$v^2 = 130.8$$
$$v = \\sqrt{130.8} \\approx 11.4 \\text{ m/s}$$

**Answers:**
- (a) Acceleration: **3.27 m/s²** down the incline
- (b) Speed after 20 m: **11.4 m/s**

**Check:** Without friction, $a = g\\sin 30° = 5$ m/s². With friction, $a = 3.27$ m/s² < 5 m/s² ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  })

  console.log(`✓ Created topic: ${topic2.title}`)

  // Create flashcards for Topic 2
  const flashcards2 = [
    {
      topicId: topic2.id,
      front: 'What are the components of weight on an incline?',
      back: 'Parallel to incline: $mg\\sin\\theta$ (down slope). Perpendicular: $mg\\cos\\theta$ (into surface)'
    },
    {
      topicId: topic2.id,
      front: 'What is the normal force on an incline?',
      back: '$N = mg\\cos\\theta$ (less than $mg$ on an incline!)'
    },
    {
      topicId: topic2.id,
      front: 'What is the acceleration of an object on a frictionless incline?',
      back: '$a = g\\sin\\theta$ (independent of mass!)'
    },
    {
      topicId: topic2.id,
      front: 'What is the critical angle for an object on an incline with friction?',
      back: '$\\theta_c = \\tan^{-1}(\\mu_s)$ - the angle at which the object just starts to slide'
    },
    {
      topicId: topic2.id,
      front: 'What condition must be satisfied for an object to remain at rest on an incline?',
      back: '$\\tan\\theta \\leq \\mu_s$ or equivalently $\\theta \\leq \\tan^{-1}(\\mu_s)$'
    },
    {
      topicId: topic2.id,
      front: 'What is the friction force on an incline?',
      back: 'Maximum static: $f_{s,max} = \\mu_s mg\\cos\\theta$. Kinetic: $f_k = \\mu_k mg\\cos\\theta$'
    },
    {
      topicId: topic2.id,
      front: 'Which direction does friction point when an object slides down an incline?',
      back: 'Up the incline (opposes motion)'
    },
    {
      topicId: topic2.id,
      front: 'What is the acceleration of an object sliding down an incline with friction?',
      back: '$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$'
    },
    {
      topicId: topic2.id,
      front: 'Why do we rotate the coordinate system for incline problems?',
      back: 'To align one axis with the motion (parallel to incline), simplifying the math since there\'s no acceleration perpendicular to the incline'
    },
    {
      topicId: topic2.id,
      front: 'At what angle does a frictionless incline give the same acceleration as free fall?',
      back: '$90°$ (vertical) - then $a = g\\sin 90° = g$'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Physics 1 - Dynamics Part 2!')
  console.log(`   Topics: 2`)
  console.log(`   Examples: 6`)
  console.log(`   Flashcards: ${flashcards1.length + flashcards2.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
