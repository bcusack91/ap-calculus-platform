import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Circular Motion Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or get the Circular Motion & Gravitation category
  const circularCategory = await prisma.category.upsert({
    where: { slug: 'circular-motion-gravitation' },
    update: {},
    create: {
      slug: 'circular-motion-gravitation',
      name: 'Circular Motion & Gravitation',
      description: 'Centripetal acceleration, centripetal force, and universal gravitation',
      order: 2,
      courseId: physics1Course.id,
    },
  })

  console.log('✓ Created category: Circular Motion & Gravitation')

  // ============================================
  // TOPIC 1: Uniform Circular Motion
  // ============================================
  const uniformCircularMotion = await prisma.topic.upsert({
    where: { slug: 'uniform-circular-motion' },
    update: {},
    create: {
      slug: 'uniform-circular-motion',
      title: 'Uniform Circular Motion',
      description: 'Centripetal acceleration and circular motion kinematics',
      order: 1,
      categoryId: circularCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Uniform Circular Motion

## What is Uniform Circular Motion?

**Uniform Circular Motion (UCM)** occurs when an object moves in a circular path at **constant speed**.

### Key Characteristics

1. **Speed is constant** - the magnitude of velocity doesn't change
2. **Velocity is NOT constant** - the direction is continuously changing
3. **There MUST be acceleration** - changing direction means changing velocity
4. **Acceleration points toward the center** - called **centripetal acceleration**

> **💡 Critical Insight**: Even though speed is constant, there IS acceleration because velocity is a vector (has direction). Changing direction = changing velocity = acceleration!

---

## Centripetal Acceleration

The acceleration that points toward the center of the circular path is called **centripetal acceleration** (meaning "center-seeking").

### Formula

$$a_c = \\frac{v^2}{r}$$

where:
- $a_c$ = centripetal acceleration (m/s²)
- $v$ = speed (m/s)
- $r$ = radius of circular path (m)

### Direction

- **Always points toward the center** of the circle
- Perpendicular to the velocity vector
- Changes direction as the object moves around the circle

### Alternative Form

Using $v = \\frac{2\\pi r}{T}$ (where $T$ is period):

$$a_c = \\frac{4\\pi^2 r}{T^2}$$

Also, using angular velocity $\\omega = \\frac{v}{r}$:

$$a_c = \\omega^2 r$$

---

## Period and Frequency

### Period (T)

The **period** is the time for one complete revolution:

$$T = \\frac{2\\pi r}{v}$$

Units: seconds (s)

### Frequency (f)

The **frequency** is the number of revolutions per second:

$$f = \\frac{1}{T}$$

Units: hertz (Hz) or revolutions per second (rev/s)

### Relationship Between v, r, T, and f

$$v = \\frac{2\\pi r}{T} = 2\\pi r f$$

---

## Angular Velocity

**Angular velocity** ($\\omega$) measures how fast the angle changes:

$$\\omega = \\frac{\\Delta \\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$$

Units: radians per second (rad/s)

### Relationship to Linear Velocity

$$v = r\\omega$$

This connects the speed along the circular path ($v$) to the angular velocity ($\\omega$).

---

## Common Scenarios

### Scenario 1: Object on a String

A ball swung in a horizontal circle:
- Tension provides centripetal force
- $a_c = \\frac{v^2}{r}$ points toward center
- If string breaks, object flies off tangent to circle (not radially outward!)

### Scenario 2: Car Rounding a Curve

A car turning on a flat road:
- Friction provides centripetal force
- Maximum safe speed: $v_{max} = \\sqrt{\\mu_s g r}$
- Radius affects speed: tighter curves require slower speeds

### Scenario 3: Satellite in Orbit

A satellite orbiting Earth:
- Gravity provides centripetal force
- $a_c = g$ at Earth's surface
- Orbital period depends on altitude

---

## ⚠️ Common Misconceptions

### Misconception 1: "Centrifugal Force"
❌ **Wrong**: There's an outward "centrifugal force" on the object
✅ **Right**: There's no outward force. The object wants to move in a straight line (Newton's 1st Law), but centripetal force pulls it inward toward the center. "Centrifugal force" is a fictitious force felt in the rotating reference frame.

### Misconception 2: Constant Velocity
❌ **Wrong**: Uniform circular motion has constant velocity
✅ **Right**: UCM has constant **speed** but changing **velocity** (because direction changes)

### Misconception 3: Acceleration and Speed
❌ **Wrong**: If speed is constant, acceleration must be zero
✅ **Right**: Acceleration can be perpendicular to velocity, changing direction without changing speed

### Misconception 4: Direction After Release
❌ **Wrong**: If the string breaks, the object flies radially outward
✅ **Right**: The object flies off **tangent** to the circle (in the direction of instantaneous velocity)

---

## Problem-Solving Strategy

1. **Draw a diagram** showing the circular path and center
2. **Identify the radius** of the circular path
3. **Find or calculate the speed** (may need to use $v = \\frac{2\\pi r}{T}$ or $v = r\\omega$)
4. **Calculate centripetal acceleration**: $a_c = \\frac{v^2}{r}$
5. **Direction**: Always toward the center

---

## Key Equations Summary

| Quantity | Formula | Units |
|----------|---------|-------|
| Centripetal acceleration | $a_c = \\frac{v^2}{r} = \\omega^2 r$ | m/s² |
| Speed | $v = \\frac{2\\pi r}{T} = r\\omega$ | m/s |
| Period | $T = \\frac{2\\pi r}{v}$ | s |
| Frequency | $f = \\frac{1}{T}$ | Hz |
| Angular velocity | $\\omega = \\frac{2\\pi}{T} = 2\\pi f = \\frac{v}{r}$ | rad/s |

---

## 📝 Important Notes

- Centripetal acceleration exists even though speed is constant
- The acceleration changes direction continuously (always pointing toward center)
- Period and frequency are inversely related: $f = \\frac{1}{T}$
- For a given radius, higher speed requires greater centripetal acceleration
- All points on a rigid rotating object have the same angular velocity but different linear velocities
`,
      exampleProblems: {
        create: [
          {
            question: 'A car travels around a circular track with a radius of 50 m at a constant speed of 20 m/s. What is the magnitude of the car\'s centripetal acceleration?',
            solution: `**Given Information:**
- Radius: $r = 50$ m
- Speed: $v = 20$ m/s
- Motion: uniform circular motion (constant speed)

---

**Find:** Centripetal acceleration $a_c$

---

**Solution:**

Use the centripetal acceleration formula:

$$a_c = \\frac{v^2}{r}$$

Substitute the values:

$$a_c = \\frac{(20 \\text{ m/s})^2}{50 \\text{ m}}$$

$$a_c = \\frac{400 \\text{ m}^2/\\text{s}^2}{50 \\text{ m}}$$

$$a_c = 8 \\text{ m/s}^2$$

---

**Answer**: The centripetal acceleration is **8 m/s²** directed toward the center of the circular track.

> **Note**: This acceleration is less than $g$ (9.8 m/s²), so friction alone could provide this if the coefficient is sufficient.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 0.5 kg ball is attached to a 1.2 m string and swung in a horizontal circle, making 2 complete revolutions per second. Calculate: (a) the period, (b) the speed of the ball, and (c) the centripetal acceleration.',
            solution: `**Given Information:**
- Mass: $m = 0.5$ kg
- Radius: $r = 1.2$ m
- Frequency: $f = 2$ rev/s = 2 Hz

---

**(a) Find the period $T$:**

The period is the time for one revolution:

$$T = \\frac{1}{f} = \\frac{1}{2 \\text{ Hz}} = 0.5 \\text{ s}$$

---

**(b) Find the speed $v$:**

Use the relationship between speed, radius, and period:

$$v = \\frac{2\\pi r}{T}$$

$$v = \\frac{2\\pi (1.2 \\text{ m})}{0.5 \\text{ s}}$$

$$v = \\frac{2.4\\pi \\text{ m}}{0.5 \\text{ s}}$$

$$v = 4.8\\pi \\text{ m/s} \\approx 15.1 \\text{ m/s}$$

---

**(c) Find the centripetal acceleration $a_c$:**

$$a_c = \\frac{v^2}{r}$$

Using exact value $v = 4.8\\pi$ m/s:

$$a_c = \\frac{(4.8\\pi)^2}{1.2}$$

$$a_c = \\frac{23.04\\pi^2}{1.2}$$

$$a_c = 19.2\\pi^2 \\approx 189.5 \\text{ m/s}^2$$

**Alternative method** using $a_c = 4\\pi^2 r f^2$:

$$a_c = 4\\pi^2 (1.2)(2)^2 = 4\\pi^2 (1.2)(4) = 19.2\\pi^2 \\approx 189.5 \\text{ m/s}^2$$

---

**Answers**: 
- (a) Period: **0.5 s**
- (b) Speed: **15.1 m/s**
- (c) Centripetal acceleration: **189.5 m/s²** (toward center)

> **Note**: This is about 19 times the acceleration due to gravity!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A space station rotates to create artificial gravity. If the station has a radius of 100 m and the centripetal acceleration at the outer edge is to equal Earth\'s gravity (9.8 m/s²), what should be the period of rotation?',
            solution: `**Given Information:**
- Radius: $r = 100$ m
- Desired centripetal acceleration: $a_c = 9.8$ m/s² (to simulate Earth's gravity)

---

**Find:** Period $T$

---

**Strategy:** We need to work backwards from $a_c$ to find $v$, then use $v$ to find $T$.

---

**Step 1: Find the required speed**

From $a_c = \\frac{v^2}{r}$, solve for $v$:

$$v^2 = a_c \\cdot r$$

$$v = \\sqrt{a_c \\cdot r}$$

$$v = \\sqrt{(9.8 \\text{ m/s}^2)(100 \\text{ m})}$$

$$v = \\sqrt{980 \\text{ m}^2/\\text{s}^2}$$

$$v = 31.3 \\text{ m/s}$$

---

**Step 2: Find the period**

From $v = \\frac{2\\pi r}{T}$, solve for $T$:

$$T = \\frac{2\\pi r}{v}$$

$$T = \\frac{2\\pi (100 \\text{ m})}{31.3 \\text{ m/s}}$$

$$T = \\frac{200\\pi}{31.3} \\text{ s}$$

$$T \\approx 20.1 \\text{ s}$$

---

**Alternative Method:** Using $a_c = \\frac{4\\pi^2 r}{T^2}$

$$T^2 = \\frac{4\\pi^2 r}{a_c}$$

$$T = 2\\pi\\sqrt{\\frac{r}{a_c}}$$

$$T = 2\\pi\\sqrt{\\frac{100}{9.8}}$$

$$T = 2\\pi\\sqrt{10.2}$$

$$T = 2\\pi(3.20) \\approx 20.1 \\text{ s}$$

---

**Answer**: The period of rotation should be approximately **20.1 seconds**.

**Interpretation**: The station completes one rotation about every 20 seconds, creating a centripetal acceleration of $9.8$ m/s² at the outer edge, which would feel like Earth's gravity to people standing on the outer rim.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Uniform Circular Motion')

  // Create flashcards for Uniform Circular Motion
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: uniformCircularMotion.id,
        front: 'What is uniform circular motion?',
        back: 'Motion in a circular path at constant **speed** (but NOT constant velocity, since direction changes continuously)',
        hint: 'Speed is constant, but velocity changes because direction changes',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'What is the formula for centripetal acceleration?',
        back: '$a_c = \\frac{v^2}{r}$ where $v$ is speed and $r$ is radius. It always points toward the center of the circle.',
        hint: 'Speed squared over radius',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'What is the relationship between period $T$ and frequency $f$?',
        back: '$f = \\frac{1}{T}$ and $T = \\frac{1}{f}$ - They are reciprocals. Period is time per revolution, frequency is revolutions per time.',
        hint: 'Inverse relationship',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'How is linear speed $v$ related to period $T$ in circular motion?',
        back: '$v = \\frac{2\\pi r}{T}$ - The circumference divided by the time for one revolution',
        hint: 'Distance per revolution divided by time per revolution',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'What is angular velocity $\\omega$ and how does it relate to linear velocity?',
        back: '$\\omega = \\frac{2\\pi}{T} = 2\\pi f$ (in rad/s), and $v = r\\omega$ connects it to linear velocity',
        hint: 'Measures how fast the angle changes',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'If an object in circular motion is suddenly released, what direction does it move?',
        back: 'Tangent to the circle (in the direction of the instantaneous velocity), NOT radially outward',
        hint: 'Newton\'s 1st Law - objects continue in straight line when force is removed',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'Why is there acceleration in uniform circular motion even though speed is constant?',
        back: 'Because velocity is a vector - changing direction means changing velocity, which means acceleration exists (centripetal acceleration toward center)',
        hint: 'Acceleration can change direction without changing speed',
      },
      {
        topicId: uniformCircularMotion.id,
        front: 'What is "centrifugal force"?',
        back: 'A fictitious (apparent) force felt in a rotating reference frame. There is NO real outward force - the object wants to go straight (Newton\'s 1st Law) while centripetal force pulls it inward.',
        hint: 'Not a real force - just inertia in a rotating frame',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Uniform Circular Motion')

  // ============================================
  // TOPIC 2: Centripetal Force
  // ============================================
  const centripetalForce = await prisma.topic.upsert({
    where: { slug: 'centripetal-force' },
    update: {},
    create: {
      slug: 'centripetal-force',
      title: 'Centripetal Force',
      description: 'Forces causing circular motion in horizontal and vertical circles',
      order: 2,
      categoryId: circularCategory.id,
      isPremium: false,
      textContent: `
# 💫 Centripetal Force

## What is Centripetal Force?

**Centripetal force** is NOT a new type of force! It's the **net force** that causes an object to move in a circular path.

### Newton's Second Law for Circular Motion

$$F_c = ma_c = \\frac{mv^2}{r}$$

where:
- $F_c$ = centripetal force (net force toward center)
- $m$ = mass (kg)
- $v$ = speed (m/s)
- $r$ = radius (m)

> **💡 Key Point**: "Centripetal force" is just a name for whatever force (or combination of forces) points toward the center and causes circular motion.

---

## Sources of Centripetal Force

Different situations provide centripetal force from different sources:

| Situation | Source of Centripetal Force |
|-----------|----------------------------|
| Ball on string | Tension in string |
| Car on flat curve | Friction between tires and road |
| Satellite orbiting Earth | Gravitational force |
| Electron orbiting nucleus | Electric force |
| Car on banked curve | Component of normal force (+ friction) |
| Clothes in dryer | Normal force from drum wall |

---

## Horizontal Circular Motion

### Example: Object on String (Horizontal Circle)

For a ball swung in a horizontal circle:

$$T = \\frac{mv^2}{r}$$

where $T$ is the tension in the string.

**Free Body Diagram:**
- Tension $T$ points toward center (provides all centripetal force)
- Weight $mg$ points down
- If truly horizontal, tension must also support weight (actually moves in slight cone shape)

### Example: Car on Flat Curve

For a car turning on a flat road:

$$f_s = \\frac{mv^2}{r}$$

The static friction provides centripetal force.

**Maximum safe speed:**

$$f_{s,max} = \\mu_s N = \\mu_s mg$$

$$\\frac{mv_{max}^2}{r} = \\mu_s mg$$

$$v_{max} = \\sqrt{\\mu_s gr}$$

> **Important**: Tighter curves (smaller $r$) require lower speeds!

---

## Vertical Circular Motion

Vertical circles are more complex because **gravity** acts differently at different points.

### Top of Circle

At the highest point:
- Both weight and normal force point toward center (downward)
- $F_c = N + mg = \\frac{mv^2}{r}$
- $N = \\frac{mv^2}{r} - mg$

**Minimum speed at top:**

For the object to maintain contact ($N \\geq 0$):

$$\\frac{mv_{min}^2}{r} \\geq mg$$

$$v_{min} = \\sqrt{gr}$$

If $v < \\sqrt{gr}$, the object falls away from the circle!

### Bottom of Circle

At the lowest point:
- Normal force points up (toward center)
- Weight points down (away from center)
- $F_c = N - mg = \\frac{mv^2}{r}$
- $N = \\frac{mv^2}{r} + mg$

Normal force is **largest** at the bottom (you feel "heavier").

### General Point

At angle $\\theta$ from bottom:
- Must resolve weight into components
- Component toward center: $mg\\cos\\theta$
- $F_c = N - mg\\cos\\theta = \\frac{mv^2}{r}$

---

## Banked Curves

A **banked curve** is tilted at angle $\\theta$ to help cars turn without relying solely on friction.

### Without Friction (Ideal Banking)

The horizontal component of normal force provides centripetal force:

$$N\\sin\\theta = \\frac{mv^2}{r}$$

The vertical component balances weight:

$$N\\cos\\theta = mg$$

Dividing these equations:

$$\\tan\\theta = \\frac{v^2}{rg}$$

This gives the **ideal banking angle** for speed $v$.

### With Friction

If friction is present:
- Can handle range of speeds
- Friction helps at high speeds, opposes at low speeds
- Banking reduces friction needed

---

## Problem-Solving Strategy

1. **Draw a free body diagram**
2. **Identify the center** of the circular path
3. **Choose a coordinate system** with one axis toward the center
4. **Apply Newton's 2nd Law** in the centripetal direction: $\\sum F_c = \\frac{mv^2}{r}$
5. **Apply Newton's 2nd Law** perpendicular to centripetal direction (often: $\\sum F = 0$)
6. **Solve** for the unknown

---

## Common Scenarios and Formulas

### 1. Horizontal Circle with String
$$T = \\frac{mv^2}{r}$$

### 2. Car on Flat Curve
$$v_{max} = \\sqrt{\\mu_s gr}$$

### 3. Top of Vertical Circle
$$N = \\frac{mv^2}{r} - mg$$
$$v_{min} = \\sqrt{gr}$$

### 4. Bottom of Vertical Circle
$$N = \\frac{mv^2}{r} + mg$$

### 5. Banked Curve (No Friction)
$$\\tan\\theta = \\frac{v^2}{rg}$$

---

## ⚠️ Common Mistakes

### Mistake 1: Centripetal Force as a Separate Force
❌ **Wrong**: Drawing "centripetal force" as an additional force on FBD
✅ **Right**: Centripetal force is the NET force toward center from real forces (tension, friction, gravity, normal, etc.)

### Mistake 2: Direction of Friction on Curves
❌ **Wrong**: Friction always opposes motion (points backward)
✅ **Right**: On a curve, friction points toward the center (perpendicular to velocity) to provide centripetal force

### Mistake 3: Tension in Vertical Circles
❌ **Wrong**: Tension is the same at top and bottom
✅ **Right**: Tension is much larger at bottom than at top: $N_{bottom} = \\frac{mv^2}{r} + mg$ vs $N_{top} = \\frac{mv^2}{r} - mg$

### Mistake 4: Minimum Speed
❌ **Wrong**: Minimum speed is zero
✅ **Right**: At the top of a vertical circle, $v_{min} = \\sqrt{gr}$ to maintain circular motion

---

## Real-World Applications

### Loop-the-Loop Roller Coasters

- Must have $v \\geq \\sqrt{gr}$ at top to maintain contact
- Designed with extra speed for safety
- Riders feel "weightless" if $v = \\sqrt{gr}$ (normal force = 0)

### Centrifuges

- Large $v$ and small $r$ create huge centripetal acceleration
- Separate substances by density
- Can create accelerations of thousands of $g$'s

### Banked Highways

- Interstate highway curves are banked for typical speed limits
- Reduces wear on tires and reliance on friction
- Can navigate safely even on ice (at design speed)

---

## 📝 Key Formulas Summary

$$F_c = \\frac{mv^2}{r} = m\\omega^2 r$$

$$v_{max,\\text{flat curve}} = \\sqrt{\\mu_s gr}$$

$$v_{min,\\text{top of loop}} = \\sqrt{gr}$$

$$\\tan\\theta_{\\text{banking}} = \\frac{v^2}{rg}$$
`,
      exampleProblems: {
        create: [
          {
            question: 'A 1200 kg car travels at 15 m/s around a curve with a radius of 30 m on a flat road. What is the minimum coefficient of static friction needed to prevent the car from slipping?',
            solution: `**Given Information:**
- Mass: $m = 1200$ kg
- Speed: $v = 15$ m/s
- Radius: $r = 30$ m
- Flat road (no banking)

---

**Find:** Minimum coefficient of static friction $\\mu_s$

---

**Analysis:**

The static friction force provides the centripetal force needed for circular motion.

---

**Step 1: Draw FBD and identify forces**

- Normal force: $N = mg$ (vertical equilibrium on flat road)
- Friction: $f_s$ points toward center (provides $F_c$)

---

**Step 2: Apply Newton's 2nd Law in centripetal direction**

$$f_s = F_c$$

$$f_s = \\frac{mv^2}{r}$$

---

**Step 3: Use friction relationship**

$$f_s \\leq \\mu_s N = \\mu_s mg$$

For the car not to slip:

$$\\frac{mv^2}{r} \\leq \\mu_s mg$$

---

**Step 4: Solve for $\\mu_s$**

$$\\mu_s \\geq \\frac{v^2}{rg}$$

$$\\mu_s \\geq \\frac{(15)^2}{(30)(9.8)}$$

$$\\mu_s \\geq \\frac{225}{294}$$

$$\\mu_s \\geq 0.77$$

---

**Answer**: The minimum coefficient of static friction is **0.77**.

> **Note**: This is relatively high - dry concrete on rubber is about 1.0, but wet roads are much lower (~0.4), which is why cars slip on curves when wet!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A 60 kg student rides a roller coaster through a vertical loop with radius 8 m. At the top of the loop, the student is moving at 12 m/s. What is the normal force exerted by the seat on the student at this point?',
            solution: `**Given Information:**
- Mass: $m = 60$ kg
- Radius: $r = 8$ m
- Speed at top: $v = 12$ m/s
- Location: top of vertical loop

---

**Find:** Normal force $N$ at the top

---

**Analysis:**

At the top of the loop, both weight and normal force point downward (toward center). Their sum provides the centripetal force.

---

**Step 1: Draw FBD at top of loop**

Forces on student:
- Weight: $W = mg = 60 \\times 9.8 = 588$ N (down, toward center)
- Normal force: $N$ (down, toward center)

---

**Step 2: Apply Newton's 2nd Law toward center (downward)**

$$\\sum F_c = N + mg = \\frac{mv^2}{r}$$

---

**Step 3: Solve for $N$**

$$N = \\frac{mv^2}{r} - mg$$

$$N = m\\left(\\frac{v^2}{r} - g\\right)$$

$$N = 60\\left(\\frac{(12)^2}{8} - 9.8\\right)$$

$$N = 60\\left(\\frac{144}{8} - 9.8\\right)$$

$$N = 60(18 - 9.8)$$

$$N = 60(8.2)$$

$$N = 492 \\text{ N}$$

---

**Check minimum speed:**

$$v_{min} = \\sqrt{gr} = \\sqrt{9.8 \\times 8} = \\sqrt{78.4} \\approx 8.85 \\text{ m/s}$$

Since $12 > 8.85$ m/s, the student maintains contact ✓

---

**Answer**: The normal force is **492 N** (downward on the student, or upward on the seat).

**Interpretation**: The student feels lighter than normal since $N < mg$ (588 N). The apparent weight is about 84% of the actual weight.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A highway curve with radius 150 m is banked at an angle of 10°. (a) What is the "design speed" for which no friction is needed? (b) If a car travels at 30 m/s on this curve, what minimum coefficient of friction is required?',
            solution: `**Given Information:**
- Radius: $r = 150$ m
- Banking angle: $\\theta = 10°$
- For part (b): speed $v = 30$ m/s

---

**(a) Find design speed (no friction needed)**

---

**Analysis:**

At the design speed, the horizontal component of the normal force alone provides the centripetal force.

---

**Step 1: Set up equations**

Horizontal (toward center):
$$N\\sin\\theta = \\frac{mv^2}{r}$$

Vertical (equilibrium):
$$N\\cos\\theta = mg$$

---

**Step 2: Divide equations to eliminate $N$ and $m$**

$$\\frac{N\\sin\\theta}{N\\cos\\theta} = \\frac{mv^2/r}{mg}$$

$$\\tan\\theta = \\frac{v^2}{rg}$$

---

**Step 3: Solve for $v$**

$$v = \\sqrt{rg\\tan\\theta}$$

$$v = \\sqrt{150 \\times 9.8 \\times \\tan(10°)}$$

$$v = \\sqrt{1470 \\times 0.1763}$$

$$v = \\sqrt{259.2}$$

$$v \\approx 16.1 \\text{ m/s}$$

---

**(b) Find minimum $\\mu_s$ for $v = 30$ m/s**

---

**Analysis:**

At 30 m/s, the car is going faster than the design speed, so friction must help provide additional centripetal force. Friction points down the slope (toward center and down).

---

**Step 4: Forces with friction**

Let $f$ be friction force down the slope.

Horizontal (toward center):
$$N\\sin\\theta + f\\cos\\theta = \\frac{mv^2}{r}$$

Vertical (equilibrium):
$$N\\cos\\theta - f\\sin\\theta = mg$$

Also: $f = \\mu_s N$

---

**Step 5: Substitute and solve**

From vertical equation:
$$N\\cos\\theta - \\mu_s N\\sin\\theta = mg$$
$$N(\\cos\\theta - \\mu_s\\sin\\theta) = mg$$
$$N = \\frac{mg}{\\cos\\theta - \\mu_s\\sin\\theta}$$

From horizontal equation:
$$N\\sin\\theta + \\mu_s N\\cos\\theta = \\frac{mv^2}{r}$$
$$N(\\sin\\theta + \\mu_s\\cos\\theta) = \\frac{mv^2}{r}$$

Divide:
$$\\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta} = \\frac{v^2}{rg}$$

Let $k = \\frac{v^2}{rg} = \\frac{900}{1470} = 0.612$

$$\\sin\\theta + \\mu_s\\cos\\theta = k(\\cos\\theta - \\mu_s\\sin\\theta)$$

$$\\sin\\theta + \\mu_s\\cos\\theta = k\\cos\\theta - k\\mu_s\\sin\\theta$$

$$\\mu_s\\cos\\theta + k\\mu_s\\sin\\theta = k\\cos\\theta - \\sin\\theta$$

$$\\mu_s(\\cos\\theta + k\\sin\\theta) = k\\cos\\theta - \\sin\\theta$$

$$\\mu_s = \\frac{k\\cos\\theta - \\sin\\theta}{\\cos\\theta + k\\sin\\theta}$$

With $\\theta = 10°$, $\\cos(10°) = 0.985$, $\\sin(10°) = 0.174$:

$$\\mu_s = \\frac{0.612(0.985) - 0.174}{0.985 + 0.612(0.174)}$$

$$\\mu_s = \\frac{0.603 - 0.174}{0.985 + 0.106}$$

$$\\mu_s = \\frac{0.429}{1.091}$$

$$\\mu_s \\approx 0.39$$

---

**Answers**: 
- (a) Design speed: **16.1 m/s** (about 36 mph)
- (b) Minimum coefficient of friction: **0.39**`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Centripetal Force')

  // Create flashcards for Centripetal Force
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: centripetalForce.id,
        front: 'What is centripetal force?',
        back: 'The NET force directed toward the center of a circular path. It\'s not a new type of force - it\'s whatever force (tension, friction, gravity, etc.) causes circular motion.',
        hint: 'It\'s the name for the net force, not a separate force',
      },
      {
        topicId: centripetalForce.id,
        front: 'What is the formula for centripetal force?',
        back: '$F_c = \\frac{mv^2}{r}$ where $m$ is mass, $v$ is speed, and $r$ is radius',
        hint: 'Comes from $F = ma$ with $a_c = \\frac{v^2}{r}$',
      },
      {
        topicId: centripetalForce.id,
        front: 'What is the maximum safe speed for a car on a flat curve?',
        back: '$v_{max} = \\sqrt{\\mu_s gr}$ where $\\mu_s$ is coefficient of static friction, $g$ is gravity, and $r$ is radius',
        hint: 'Friction provides the centripetal force',
      },
      {
        topicId: centripetalForce.id,
        front: 'At the top of a vertical loop, what is the minimum speed to maintain circular motion?',
        back: '$v_{min} = \\sqrt{gr}$ - Below this speed, the object falls away from the circle',
        hint: 'Set normal force equal to zero at the top',
      },
      {
        topicId: centripetalForce.id,
        front: 'How does the normal force compare at the top vs. bottom of a vertical loop?',
        back: 'Bottom: $N = \\frac{mv^2}{r} + mg$ (largest). Top: $N = \\frac{mv^2}{r} - mg$ (smallest). Normal force is greater at the bottom.',
        hint: 'At bottom you feel heavier, at top you feel lighter',
      },
      {
        topicId: centripetalForce.id,
        front: 'What is the ideal banking angle for a curve with no friction?',
        back: '$\\tan\\theta = \\frac{v^2}{rg}$ where $v$ is the design speed',
        hint: 'Horizontal component of normal force provides centripetal force',
      },
      {
        topicId: centripetalForce.id,
        front: 'What provides the centripetal force for: (a) a satellite orbiting Earth, (b) a car on a curve, (c) a ball on a string?',
        back: '(a) Gravity, (b) Friction, (c) Tension in the string',
        hint: 'Different situations, different sources',
      },
      {
        topicId: centripetalForce.id,
        front: 'Common mistake: Should you draw "centripetal force" as a separate arrow on a free body diagram?',
        back: 'NO! Centripetal force is the NET force from real forces (tension, friction, gravity, normal). Don\'t add it as a separate force.',
        hint: 'Only draw real forces: weight, normal, tension, friction',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Centripetal Force')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: circularCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: circularCategory.id,
      },
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Circular Motion Part 1!')
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
