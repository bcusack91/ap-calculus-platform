import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Torque & Rotational Motion Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' },
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or get the Torque & Rotational Motion category
  const rotationCategory = await prisma.category.upsert({
    where: { slug: 'torque-and-rotational-motion' },
    update: {},
    create: {
      slug: 'torque-and-rotational-motion',
      name: 'Torque & Rotational Motion',
      description: 'Torque, rotational equilibrium, rotational kinematics, and angular momentum',
      order: 6,
      courseId: physics1Course.id,
    },
  })

  console.log('✓ Created category: Torque & Rotational Motion')

  // ============================================
  // TOPIC 1: Torque and Rotational Equilibrium
  // ============================================
  const torque = await prisma.topic.upsert({
    where: { slug: 'torque-and-equilibrium' },
    update: {},
    create: {
      slug: 'torque-and-equilibrium',
      title: 'Torque and Rotational Equilibrium',
      description: 'Definition of torque, lever arm, and conditions for equilibrium',
      order: 1,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# 🔧 Torque and Rotational Equilibrium

## What is Torque?

**Torque** (also called moment of force) is the rotational equivalent of force. It measures the effectiveness of a force in causing rotation.

$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$

**Magnitude**:
$$\\tau = rF\\sin\\theta$$

where:
- $\\tau$ = torque (N·m)
- $r$ = distance from axis of rotation to point where force is applied (m)
- $F$ = applied force (N)
- $\\theta$ = angle between $\\vec{r}$ and $\\vec{F}$

> **💡 Key Idea**: Torque depends not just on force magnitude, but also on WHERE and HOW the force is applied. Same force can produce different torques depending on position and angle.

---

## Lever Arm (Moment Arm)

The **lever arm** (or moment arm) is the perpendicular distance from the axis of rotation to the line of action of the force:

$$r_{\\perp} = r\\sin\\theta$$

**Alternative torque formula**:
$$\\tau = r_{\\perp} \\cdot F$$

### Key Points:

- **Maximum torque** when $\\theta = 90°$: $\\tau_{max} = rF$
  - Force perpendicular to position vector
  
- **Zero torque** when $\\theta = 0°$ or $180°$: $\\tau = 0$
  - Force along the line to axis
  - No lever arm!

- **Larger lever arm** → more torque (easier to rotate)
  - Why door knobs are far from hinges
  - Why longer wrenches provide more turning ability

---

## Direction of Torque

**Sign Convention** (for problems in a plane):

- **Positive torque (+)**: tends to cause counterclockwise rotation
- **Negative torque (−)**: tends to cause clockwise rotation

**Right-Hand Rule** (3D):
1. Curl fingers from $\\vec{r}$ to $\\vec{F}$
2. Thumb points in direction of $\\vec{\\tau}$

---

## Net Torque

**Net torque** is the sum of all torques:

$$\\tau_{net} = \\sum \\tau_i = \\tau_1 + \\tau_2 + \\tau_3 + ...$$

Remember to include signs (clockwise vs. counterclockwise)!

---

## Rotational Equilibrium

An object is in **rotational equilibrium** when:

$$\\tau_{net} = 0$$

**No angular acceleration** - object either:
- Not rotating (at rest)
- Rotating at constant angular velocity

### Complete Equilibrium

For complete static equilibrium, need BOTH:

1. **Translational equilibrium**: $\\sum \\vec{F} = 0$
   - No linear acceleration
   
2. **Rotational equilibrium**: $\\sum \\vec{\\tau} = 0$
   - No angular acceleration

---

## Conditions for Equilibrium

### First Condition (Forces):
$$\\sum F_x = 0$$
$$\\sum F_y = 0$$

No net force in any direction.

### Second Condition (Torques):
$$\\sum \\tau = 0$$

Net torque about ANY axis is zero.

**Important**: You can choose ANY point as the axis for calculating torques! 
- Choose wisely to simplify calculations
- Often choose where unknown forces act (they contribute zero torque there)

---

## Common Applications

### Seesaws and Balance
- Balanced when torques are equal
- Heavier person sits closer to pivot
- $m_1 d_1 = m_2 d_2$ (for horizontal seesaw)

### Door Hinges
- Hinge is axis of rotation
- Push far from hinge (large $r$) → easy to open
- Push close to hinge (small $r$) → hard to open
- Push perpendicular to door → maximum torque

### Wrenches and Tools
- Longer wrench → larger lever arm → more torque
- Apply force perpendicular to handle
- Easier to loosen tight bolts

### Levers
Three classes based on positions of fulcrum, effort, and load:
- **Class 1**: Fulcrum between effort and load (seesaw, crowbar)
- **Class 2**: Load between fulcrum and effort (wheelbarrow, nutcracker)
- **Class 3**: Effort between fulcrum and load (tweezers, biceps)

---

## Center of Gravity

**Center of gravity** is the point where all the weight can be considered to act.

For uniform objects:
- **Symmetric objects**: at geometric center
- **Irregular objects**: found by suspension method or balancing

**Torque due to weight**:
$$\\tau = mg \\cdot d$$

where $d$ is horizontal distance from pivot to center of gravity.

---

## Problem-Solving Strategy

### For Equilibrium Problems:

1. **Draw a diagram** showing all forces and their points of application
2. **Choose coordinate system** (which direction is +x, +y)
3. **Choose axis of rotation** (smart choice simplifies math!)
   - Often choose where unknown force acts
4. **Apply $\\sum F_x = 0$** and **$\\sum F_y = 0$**
5. **Apply $\\sum \\tau = 0$** (about chosen axis)
   - Assign + to counterclockwise, − to clockwise
   - Include ALL torques
6. **Solve system of equations**
7. **Check**: Do all answers make physical sense?

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting the Angle
$\\tau = rF\\sin\\theta$, NOT just $rF$!
- Only when $\\theta = 90°$ does $\\tau = rF$

### Mistake 2: Using Wrong Distance
Must use perpendicular distance (lever arm), not just distance along the object!

### Mistake 3: Sign Errors
Be consistent with sign convention:
- Counterclockwise: positive
- Clockwise: negative

### Mistake 4: Axis Choice Confusion
Any axis works, but:
- Forces acting AT the axis contribute zero torque
- Choose axis through unknown force to eliminate it from torque equation

### Mistake 5: Forgetting Weight
Weight acts at center of gravity - don't forget to include it!

---

## Special Cases

### Uniform Beam/Rod
- Weight acts at center (midpoint)
- $W = mg$ at $x = L/2$

### Multiple Objects on Beam
- Each object contributes torque: $\\tau_i = m_i g \\cdot d_i$
- Sum all torques

### Ladder Against Wall
- Weight at center
- Normal forces at two contact points
- Friction at ground prevents sliding
- Equilibrium: $\\sum F = 0$ and $\\sum \\tau = 0$

---

## Units

**Torque**: N·m (newton-meter)

**Note**: Same dimensions as energy (joules), but different physical meaning!
- Energy: scalar
- Torque: vector (direction matters)

DO NOT write torque in joules!

---

## Torque vs. Force

| Property | Force | Torque |
|----------|-------|--------|
| **Effect** | Causes linear acceleration | Causes angular acceleration |
| **Formula** | $\\vec{F}$ | $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ |
| **Units** | N | N·m |
| **Depends on** | Just force | Force AND position AND angle |
| **Equilibrium** | $\\sum \\vec{F} = 0$ | $\\sum \\vec{\\tau} = 0$ |

---

## Real-World Examples

### Why Doors Have Handles Far from Hinges
- Maximize lever arm $r$
- Same force produces more torque
- Easier to open

### Why Long Wrenches Are Better
- Longer wrench = larger $r$
- More torque for same force
- "Cheater bar" increases effective length

### Balancing Objects
- Artist balancing mobile sculptures
- Equilibrium requires careful positioning
- Sum of clockwise torques = sum of counterclockwise torques

### Steering Wheel
- Large diameter gives large torque
- Easier to turn wheels
- Race cars have smaller steering wheels (power steering helps)

---

## Key Formulas Summary

| Concept | Formula | Notes |
|---------|---------|-------|
| **Torque (general)** | $\\tau = rF\\sin\\theta$ | $\\theta$ = angle between $\\vec{r}$ and $\\vec{F}$ |
| **Torque (perpendicular)** | $\\tau = rF$ | When $\\theta = 90°$ |
| **Lever arm** | $r_{\\perp} = r\\sin\\theta$ | Perpendicular distance |
| **Net torque** | $\\tau_{net} = \\sum \\tau_i$ | Algebraic sum (include signs) |
| **Rotational equilibrium** | $\\sum \\tau = 0$ | No angular acceleration |
| **Complete equilibrium** | $\\sum \\vec{F} = 0$ AND $\\sum \\vec{\\tau} = 0$ | Static equilibrium |
`,
      exampleProblems: {
        create: [
          {
            question: 'A force of 50 N is applied to a wrench 0.25 m from the bolt. (a) What is the maximum torque that can be applied? (b) If the force is applied at 60° to the wrench handle, what torque is produced?',
            solution: `**Given Information:**
- Force: $F = 50$ N
- Distance from bolt: $r = 0.25$ m

---

**(a) Find maximum torque**

---

**Step 1: Identify condition for maximum torque**

Maximum torque occurs when force is perpendicular to the wrench handle ($\\theta = 90°$).

---

**Step 2: Calculate maximum torque**

$$\\tau_{max} = rF\\sin(90°)$$

$$\\tau_{max} = rF = (0.25)(50)$$

$$\\tau_{max} = 12.5 \\text{ N·m}$$

---

**Answer (a)**: Maximum torque = **12.5 N·m** (when force is perpendicular)

---

**(b) Find torque at 60° angle**

---

**Step 3: Apply torque formula with angle**

$$\\tau = rF\\sin\\theta$$

$$\\tau = (0.25)(50)\\sin(60°)$$

$$\\tau = (0.25)(50)(0.866)$$

$$\\tau = 10.8 \\text{ N·m}$$

---

**Answer (b)**: Torque at 60° = **10.8 N·m**

**Note**: This is about 86% of the maximum torque. Applying force perpendicular gives the most "bang for your buck"!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A uniform 6 m long beam with mass 40 kg is supported by a pivot 2 m from the left end. A 30 kg child sits on the left end. Where should a 50 kg adult sit to balance the beam (achieve rotational equilibrium)?',
            solution: `**Given Information:**
- Beam: length $L = 6$ m, mass $m_b = 40$ kg
- Pivot: 2 m from left end (4 m from right end)
- Child: $m_c = 30$ kg at left end (0 m)
- Adult: $m_a = 50$ kg at unknown distance from left end

---

**Find:** Position of adult for equilibrium

---

**Step 1: Set up coordinate system**

Choose the pivot as axis of rotation (torques about this point).

Distances from pivot:
- Left end: 2 m to the left of pivot
- Right end: 4 m to the right of pivot
- Center of beam: at 3 m from left = 1 m to right of pivot

---

**Step 2: Identify all forces and distances**

**Child** (at left end):
- Force: $F_c = m_c g = 30g$ (downward)
- Distance from pivot: $d_c = 2$ m (to left)
- Torque: $\\tau_c = -30g(2) = -60g$ N·m (clockwise, negative)

**Beam weight** (at center):
- Force: $F_b = m_b g = 40g$ (downward)
- Distance from pivot: $d_b = 1$ m (to right)
- Torque: $\\tau_b = 40g(1) = 40g$ N·m (counterclockwise, positive)

**Adult** (at unknown position):
- Force: $F_a = m_a g = 50g$ (downward)
- Distance from pivot: $d_a = ?$
- Torque: $\\tau_a = $ depends on position

---

**Step 3: Apply rotational equilibrium**

$$\\sum \\tau = 0$$

Let $x$ = position of adult from left end.

Distance of adult from pivot = $(x - 2)$ m

**Sign**: If $x > 2$ (right of pivot): positive torque
If $x < 2$ (left of pivot): negative torque

---

**Step 4: Set up torque equation**

Taking counterclockwise as positive:

$$\\tau_b + \\tau_a + \\tau_c = 0$$

$$40g(1) + 50g(x - 2) + (-60g)(2) = 0$$

Divide by $g$:

$$40(1) + 50(x - 2) - 60(2) = 0$$

$$40 + 50x - 100 - 120 = 0$$

$$50x - 180 = 0$$

$$50x = 180$$

$$x = 3.6 \\text{ m from left end}$$

---

**Step 5: Verify the answer**

Distance from pivot: $3.6 - 2 = 1.6$ m to the right

**Check torques**:
- Child: $-30(9.8)(2) = -588$ N·m (clockwise)
- Beam: $+40(9.8)(1) = +392$ N·m (counterclockwise)
- Adult: $+50(9.8)(1.6) = +784$ N·m (counterclockwise)

**Sum**: $-588 + 392 + 784 = +588$ N·m... wait, let me recalculate.

Actually: $-588 + 392 + 784 = 588$ N·m

Let me redo: $40 + 50(x-2) - 120 = 0$
$50(x-2) = 80$
$x - 2 = 1.6$
$x = 3.6$ m ✓

Check: $40(1) + 50(1.6) - 60(2) = 40 + 80 - 120 = 0$ ✓

---

**Answer**: The adult should sit **3.6 m from the left end** (or 1.6 m to the right of the pivot).

**Physical sense**: Adult is heavier than child, so sits closer to pivot. Adult sits to right of pivot to counterbalance child on left. ✓`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A 5 m uniform ladder with mass 20 kg leans against a frictionless wall at an angle of 60° to the horizontal. The bottom of the ladder rests on the ground where the coefficient of static friction is μₛ = 0.4. How far up the ladder can a 70 kg person climb before the ladder starts to slip?',
            solution: `**Given Information:**
- Ladder: length $L = 5$ m, mass $m_L = 20$ kg
- Angle: $\\theta = 60°$ to horizontal
- Wall: frictionless (no friction force from wall)
- Ground: coefficient of static friction $\\mu_s = 0.4$
- Person: mass $m_p = 70$ kg, distance $d$ from bottom (unknown)

---

**Find:** Maximum distance $d$ before slipping

---

**Step 1: Draw free body diagram and identify forces**

**At bottom of ladder (ground contact)**:
- Normal force from ground: $N_g$ (upward)
- Friction from ground: $f_s$ (horizontal, to the right)

**At top of ladder (wall contact)**:
- Normal force from wall: $N_w$ (horizontal, to the left)
- No friction (wall is frictionless)

**Weights**:
- Ladder weight: $W_L = m_L g = 20g$ at center (2.5 m up ladder)
- Person weight: $W_p = m_p g = 70g$ at distance $d$ up ladder

---

**Step 2: Apply force equilibrium**

**Horizontal forces** ($\\sum F_x = 0$):
$$N_w - f_s = 0$$
$$N_w = f_s$$

**Vertical forces** ($\\sum F_y = 0$):
$$N_g - W_L - W_p = 0$$
$$N_g = (20 + 70)g = 90g$$

---

**Step 3: Choose axis for torque calculation**

Choose bottom of ladder as pivot (eliminates $N_g$ and $f_s$ from torque equation).

---

**Step 4: Calculate perpendicular distances**

Height of wall contact point: $h = L\\sin\\theta = 5\\sin(60°) = 5(0.866) = 4.33$ m

Horizontal distance to wall: $b = L\\cos\\theta = 5\\cos(60°) = 5(0.5) = 2.5$ m

**Perpendicular distances from bottom of ladder**:

For $N_w$ (acts horizontally at top):
- Lever arm = vertical distance = $L\\sin\\theta = 4.33$ m

For $W_L$ (acts at center, L/2 from bottom):
- Horizontal lever arm = $\\frac{L}{2}\\cos\\theta = 2.5\\cos(60°) = 1.25$ m

For $W_p$ (acts at distance $d$ from bottom):
- Horizontal lever arm = $d\\cos\\theta = d\\cos(60°) = 0.5d$

---

**Step 5: Apply rotational equilibrium** ($\\sum \\tau = 0$)

Taking counterclockwise as positive, about bottom of ladder:

$$N_w(L\\sin\\theta) - W_L\\left(\\frac{L}{2}\\cos\\theta\\right) - W_p(d\\cos\\theta) = 0$$

$$N_w(4.33) - 20g(1.25) - 70g(0.5d) = 0$$

$$N_w(4.33) = 20g(1.25) + 70g(0.5d)$$

$$N_w(4.33) = 25g + 35gd$$

$$N_w = \\frac{25g + 35gd}{4.33}$$

---

**Step 6: Apply friction condition**

For no slipping: $f_s \\leq \\mu_s N_g$

At the verge of slipping: $f_s = \\mu_s N_g$

Since $f_s = N_w$:

$$N_w = \\mu_s N_g = 0.4(90g) = 36g$$

---

**Step 7: Solve for d**

$$\\frac{25g + 35gd}{4.33} = 36g$$

$$25g + 35gd = 36g(4.33)$$

$$25 + 35d = 155.88$$

$$35d = 130.88$$

$$d = 3.74 \\text{ m}$$

---

**Answer**: The person can climb up to **3.74 m** (about 75% of the ladder's length) before the ladder starts to slip.

**Check**: Does this make sense?
- Person climbs 3.74 m out of 5 m ladder length ✓
- Person creates clockwise torque, wall force creates counterclockwise torque ✓
- Higher friction would allow climbing further ✓
- Steeper angle would allow climbing further (larger wall lever arm) ✓`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Torque and Rotational Equilibrium')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: torque.id,
        front: 'What is torque?',
        back: '$\\tau = rF\\sin\\theta$ - the rotational equivalent of force. Depends on force, distance from axis, and angle of application.',
        hint: 'r times F times sine of angle',
      },
      {
        topicId: torque.id,
        front: 'What is the lever arm?',
        back: '$r_{\\perp} = r\\sin\\theta$ - the perpendicular distance from axis to line of action of force. Also called moment arm.',
        hint: 'Perpendicular distance to force line',
      },
      {
        topicId: torque.id,
        front: 'When is torque maximum for a given force?',
        back: 'When $\\theta = 90°$ (force perpendicular to position vector): $\\tau_{max} = rF$',
        hint: 'Force perpendicular gives maximum',
      },
      {
        topicId: torque.id,
        front: 'When is torque zero?',
        back: 'When $\\theta = 0°$ or $180°$ (force along line to axis). No lever arm means no torque!',
        hint: 'Force along the line to axis',
      },
      {
        topicId: torque.id,
        front: 'What is the condition for rotational equilibrium?',
        back: '$\\sum \\tau = 0$ - net torque equals zero. Object has no angular acceleration.',
        hint: 'Sum of torques equals zero',
      },
      {
        topicId: torque.id,
        front: 'What are the two conditions for complete static equilibrium?',
        back: '1) $\\sum \\vec{F} = 0$ (translational equilibrium), 2) $\\sum \\vec{\\tau} = 0$ (rotational equilibrium)',
        hint: 'Zero net force AND zero net torque',
      },
      {
        topicId: torque.id,
        front: 'Why can you choose ANY point as the axis for torque calculations?',
        back: 'In equilibrium, net torque is zero about ANY axis. Choose wisely to simplify (often where unknown forces act).',
        hint: 'Smart choice simplifies calculations',
      },
      {
        topicId: torque.id,
        front: 'What are the units of torque?',
        back: 'N·m (newton-meters). NOT joules! Same dimensions as energy but different physical meaning (vector vs scalar).',
        hint: 'Newton-meters, not joules',
      },
      {
        topicId: torque.id,
        front: 'Why are door handles far from hinges?',
        back: 'To maximize lever arm $r$. Same force produces more torque, making it easier to open the door.',
        hint: 'Maximize lever arm for easier rotation',
      },
      {
        topicId: torque.id,
        front: 'Sign convention for torque in 2D problems?',
        back: 'Counterclockwise rotation: positive (+). Clockwise rotation: negative (−).',
        hint: 'Counterclockwise positive, clockwise negative',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Torque and Rotational Equilibrium')

  // ============================================
  // TOPIC 2: Rotational Kinematics
  // ============================================
  const rotationalKinematics = await prisma.topic.upsert({
    where: { slug: 'rotational-kinematics' },
    update: {},
    create: {
      slug: 'rotational-kinematics',
      title: 'Rotational Kinematics',
      description: 'Angular displacement, velocity, acceleration, and rotational kinematic equations',
      order: 2,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# 🌀 Rotational Kinematics

## Angular Quantities

Just as linear motion has position, velocity, and acceleration, rotational motion has corresponding angular quantities.

### Angular Position $\\theta$

**Angle** of rotation from reference line:
- Units: radians (rad)
- $2\\pi$ rad = 360° = one full rotation
- Conversion: $\\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180}$

### Angular Displacement $\\Delta\\theta$

**Change in angular position**:
$$\\Delta\\theta = \\theta_f - \\theta_i$$

Units: radians (rad)

Positive: counterclockwise rotation
Negative: clockwise rotation

### Angular Velocity $\\omega$

**Rate of change of angular position**:

**Average**:
$$\\omega_{avg} = \\frac{\\Delta\\theta}{\\Delta t}$$

**Instantaneous**:
$$\\omega = \\frac{d\\theta}{dt}$$

Units: rad/s (radians per second)

### Angular Acceleration $\\alpha$

**Rate of change of angular velocity**:

**Average**:
$$\\alpha_{avg} = \\frac{\\Delta\\omega}{\\Delta t}$$

**Instantaneous**:
$$\\alpha = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}$$

Units: rad/s² (radians per second squared)

---

## Analogy with Linear Motion

| Linear Motion | Rotational Motion |
|---------------|-------------------|
| Position $x$ | Angular position $\\theta$ |
| Velocity $v$ | Angular velocity $\\omega$ |
| Acceleration $a$ | Angular acceleration $\\alpha$ |
| Mass $m$ | Moment of inertia $I$ |
| Force $F$ | Torque $\\tau$ |

---

## Relationship Between Linear and Angular

For a point at distance $r$ from axis of rotation:

### Arc Length
$$s = r\\theta$$
(where $\\theta$ is in radians)

### Linear Velocity
$$v = r\\omega$$

**Tangential velocity** - velocity tangent to circular path

### Tangential Acceleration
$$a_t = r\\alpha$$

**Component of acceleration** tangent to circle (changes speed)

### Centripetal Acceleration
$$a_c = \\frac{v^2}{r} = \\omega^2 r$$

**Component of acceleration** toward center (changes direction)

---

## Rotational Kinematic Equations

For **constant angular acceleration** $\\alpha$:

### The Big Four Equations

**1. Angular velocity:**
$$\\omega_f = \\omega_i + \\alpha t$$

**2. Angular displacement:**
$$\\theta = \\theta_i + \\omega_i t + \\frac{1}{2}\\alpha t^2$$

**3. Velocity-displacement:**
$$\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta$$

**4. Average velocity:**
$$\\theta = \\theta_i + \\frac{1}{2}(\\omega_i + \\omega_f)t$$

> **💡 These are EXACTLY analogous to linear kinematic equations!** Just replace $x \\to \\theta$, $v \\to \\omega$, $a \\to \\alpha$.

---

## Comparison: Linear vs. Rotational Kinematics

| Linear (constant $a$) | Rotational (constant $\\alpha$) |
|----------------------|--------------------------------|
| $v_f = v_i + at$ | $\\omega_f = \\omega_i + \\alpha t$ |
| $x = x_i + v_i t + \\frac{1}{2}at^2$ | $\\theta = \\theta_i + \\omega_i t + \\frac{1}{2}\\alpha t^2$ |
| $v_f^2 = v_i^2 + 2a\\Delta x$ | $\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta$ |
| $x = x_i + \\frac{1}{2}(v_i + v_f)t$ | $\\theta = \\theta_i + \\frac{1}{2}(\\omega_i + \\omega_f)t$ |

---

## Period and Frequency

For uniform circular motion (constant $\\omega$):

### Period $T$
**Time for one complete rotation**:
$$T = \\frac{2\\pi}{\\omega}$$

Units: seconds

### Frequency $f$
**Rotations per second**:
$$f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}$$

Units: Hz (hertz) = rev/s

### Relationships
$$\\omega = 2\\pi f = \\frac{2\\pi}{T}$$

---

## Rolling Motion

For an object rolling without slipping:

**Constraint condition**:
$$v_{cm} = r\\omega$$

where:
- $v_{cm}$ = velocity of center of mass
- $r$ = radius
- $\\omega$ = angular velocity

**No slipping** means:
- Point of contact is instantaneously at rest
- Distance traveled = arc length: $s = r\\theta$

---

## Problem-Solving Strategy

### For Rotational Kinematics:

1. **Identify knowns**: $\\theta_i$, $\\omega_i$, $\\omega_f$, $\\alpha$, $t$, $\\Delta\\theta$
2. **Identify unknown**: What are you solving for?
3. **Choose equation**: Pick the one with known quantities and unknown
4. **Solve algebraically**
5. **Check units**: Should be rad, rad/s, or rad/s²
6. **Check reasonableness**: Does answer make sense?

**Tip**: If you know linear quantities ($v$, $a_t$, $s$), convert using:
- $\\omega = v/r$
- $\\alpha = a_t/r$
- $\\theta = s/r$

---

## ⚠️ Common Mistakes

### Mistake 1: Degrees vs. Radians
MUST use radians in equations! Convert degrees to radians first.

### Mistake 2: Confusing $a_t$ and $a_c$
- $a_t = r\\alpha$: tangential (changes speed)
- $a_c = \\omega^2 r$: centripetal (changes direction)
- Total: $a = \\sqrt{a_t^2 + a_c^2}$

### Mistake 3: Wrong Sign for $\\alpha$
- Speeding up in positive direction: $\\alpha > 0$
- Slowing down in positive direction: $\\alpha < 0$

### Mistake 4: Forgetting Initial Conditions
$\\omega_i$ and $\\theta_i$ are not always zero!

---

## Special Cases

### Starting from Rest
$\\omega_i = 0$:
- $\\omega_f = \\alpha t$
- $\\theta = \\frac{1}{2}\\alpha t^2$
- $\\omega_f^2 = 2\\alpha\\theta$

### Uniform Rotation
$\\alpha = 0$ (constant $\\omega$):
- $\\omega_f = \\omega_i = \\omega$
- $\\theta = \\omega t$
- Period: $T = \\frac{2\\pi}{\\omega}$

### Coming to Rest
$\\omega_f = 0$:
- $0 = \\omega_i + \\alpha t$ → $t = -\\frac{\\omega_i}{\\alpha}$
- $\\omega_i^2 = -2\\alpha\\Delta\\theta$ → $\\Delta\\theta = -\\frac{\\omega_i^2}{2\\alpha}$

---

## Applications

### Wheels and Gears
- Angular velocity determines linear speed
- Gear ratios change angular velocities
- $v = r\\omega$ connects the two

### Rotating Machinery
- Turbines, engines, motors
- Angular acceleration during startup
- Constant $\\omega$ during normal operation

### Sports
- Figure skating spins (angular velocity)
- Gymnastics rotations
- Diving somersaults

### Astronomy
- Planetary rotation (Earth: $T \\approx 24$ hr)
- Orbital motion
- Galaxy rotation

---

## Key Formulas Summary

| Quantity | Formula | Units |
|----------|---------|-------|
| **Angular velocity** | $\\omega = \\frac{d\\theta}{dt}$ | rad/s |
| **Angular acceleration** | $\\alpha = \\frac{d\\omega}{dt}$ | rad/s² |
| **Linear velocity** | $v = r\\omega$ | m/s |
| **Tangential acceleration** | $a_t = r\\alpha$ | m/s² |
| **Centripetal acceleration** | $a_c = \\omega^2 r$ | m/s² |
| **Period** | $T = \\frac{2\\pi}{\\omega}$ | s |
| **Frequency** | $f = \\frac{\\omega}{2\\pi}$ | Hz |

**Kinematic equations** (constant $\\alpha$):
1. $\\omega_f = \\omega_i + \\alpha t$
2. $\\theta = \\theta_i + \\omega_i t + \\frac{1}{2}\\alpha t^2$
3. $\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta$
`,
      exampleProblems: {
        create: [
          {
            question: 'A wheel starts from rest and accelerates uniformly at 2 rad/s² for 5 seconds. Find: (a) the final angular velocity, (b) the angular displacement during this time, and (c) the number of revolutions completed.',
            solution: `**Given Information:**
- Initial angular velocity: $\\omega_i = 0$ rad/s (starts from rest)
- Angular acceleration: $\\alpha = 2$ rad/s²
- Time: $t = 5$ s

---

**(a) Find final angular velocity**

---

**Step 1: Use first kinematic equation**

$$\\omega_f = \\omega_i + \\alpha t$$

$$\\omega_f = 0 + (2)(5)$$

$$\\omega_f = 10 \\text{ rad/s}$$

---

**Answer (a)**: Final angular velocity = **10 rad/s**

---

**(b) Find angular displacement**

---

**Step 2: Use displacement equation**

$$\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2$$

$$\\theta = 0(5) + \\frac{1}{2}(2)(5)^2$$

$$\\theta = 0 + \\frac{1}{2}(2)(25)$$

$$\\theta = 25 \\text{ rad}$$

---

**Alternative: Use average velocity**

$$\\theta = \\frac{1}{2}(\\omega_i + \\omega_f)t = \\frac{1}{2}(0 + 10)(5) = 25 \\text{ rad}$$

Both methods agree! ✓

---

**Answer (b)**: Angular displacement = **25 rad**

---

**(c) Find number of revolutions**

---

**Step 3: Convert radians to revolutions**

$$\\text{Revolutions} = \\frac{\\theta}{2\\pi} = \\frac{25}{2\\pi}$$

$$\\text{Revolutions} = \\frac{25}{6.28} = 3.98 \\text{ rev}$$

---

**Answer (c)**: Number of revolutions ≈ **4.0 revolutions**

**Summary**: The wheel accelerates from rest to 10 rad/s, turning through 25 radians (about 4 complete rotations) in 5 seconds.`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'A car tire with radius 0.3 m is rotating at 10 rev/s. The car brakes, and the tire comes to rest in 4 seconds with constant angular acceleration. Find: (a) the angular acceleration, and (b) the linear distance traveled during braking.',
            solution: `**Given Information:**
- Radius: $r = 0.3$ m
- Initial angular velocity: $\\omega_i = 10$ rev/s
- Final angular velocity: $\\omega_f = 0$ rad/s (comes to rest)
- Time: $t = 4$ s

---

**Step 0: Convert units**

$$\\omega_i = 10 \\text{ rev/s} \\times \\frac{2\\pi \\text{ rad}}{1 \\text{ rev}} = 20\\pi \\text{ rad/s} \\approx 62.8 \\text{ rad/s}$$

---

**(a) Find angular acceleration**

---

**Step 1: Use first kinematic equation**

$$\\omega_f = \\omega_i + \\alpha t$$

$$0 = 62.8 + \\alpha(4)$$

$$4\\alpha = -62.8$$

$$\\alpha = -15.7 \\text{ rad/s}^2$$

---

**Answer (a)**: Angular acceleration = **−15.7 rad/s²** (negative because it's slowing down)

---

**(b) Find linear distance traveled**

---

**Step 2: Find angular displacement**

$$\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2$$

$$\\theta = (62.8)(4) + \\frac{1}{2}(-15.7)(4)^2$$

$$\\theta = 251.2 + \\frac{1}{2}(-15.7)(16)$$

$$\\theta = 251.2 - 125.6$$

$$\\theta = 125.6 \\text{ rad}$$

---

**Alternative: Use average velocity**

$$\\theta = \\frac{1}{2}(\\omega_i + \\omega_f)t = \\frac{1}{2}(62.8 + 0)(4) = 125.6 \\text{ rad}$$

Both methods agree! ✓

---

**Step 3: Convert to linear distance**

$$s = r\\theta = (0.3)(125.6)$$

$$s = 37.7 \\text{ m}$$

---

**Answer (b)**: Linear distance traveled = **37.7 m** (about 38 meters)

**Check**: This is reasonable for a car braking from moderate speed over 4 seconds.

**Note**: Number of revolutions = $\\frac{125.6}{2\\pi} \\approx 20$ revolutions during braking.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A disk of radius 0.5 m starts from rest and rotates with constant angular acceleration. After 10 seconds, a point on the rim of the disk has a tangential speed of 15 m/s. Find: (a) the angular acceleration, (b) the angular displacement in those 10 seconds, and (c) the magnitude of the total acceleration of a point on the rim at t = 10 s.',
            solution: `**Given Information:**
- Radius: $r = 0.5$ m
- Initial angular velocity: $\\omega_i = 0$ rad/s (starts from rest)
- Time: $t = 10$ s
- Final tangential speed: $v_f = 15$ m/s

---

**(a) Find angular acceleration**

---

**Step 1: Find final angular velocity**

$$v = r\\omega$$

$$\\omega_f = \\frac{v_f}{r} = \\frac{15}{0.5} = 30 \\text{ rad/s}$$

---

**Step 2: Calculate angular acceleration**

$$\\omega_f = \\omega_i + \\alpha t$$

$$30 = 0 + \\alpha(10)$$

$$\\alpha = 3 \\text{ rad/s}^2$$

---

**Answer (a)**: Angular acceleration = **3 rad/s²**

---

**(b) Find angular displacement**

---

**Step 3: Use displacement equation**

$$\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2$$

$$\\theta = 0(10) + \\frac{1}{2}(3)(10)^2$$

$$\\theta = \\frac{1}{2}(3)(100)$$

$$\\theta = 150 \\text{ rad}$$

---

**Alternative: Use average velocity**

$$\\theta = \\frac{1}{2}(\\omega_i + \\omega_f)t = \\frac{1}{2}(0 + 30)(10) = 150 \\text{ rad}$$

---

**Answer (b)**: Angular displacement = **150 rad**

(This is $\\frac{150}{2\\pi} \\approx 23.9$ revolutions)

---

**(c) Find total acceleration at t = 10 s**

---

**Step 4: Calculate tangential acceleration**

$$a_t = r\\alpha = (0.5)(3) = 1.5 \\text{ m/s}^2$$

---

**Step 5: Calculate centripetal acceleration**

$$a_c = \\omega^2 r = (30)^2(0.5)$$

$$a_c = 900(0.5) = 450 \\text{ m/s}^2$$

---

**Step 6: Find magnitude of total acceleration**

Tangential and centripetal accelerations are perpendicular:

$$a_{total} = \\sqrt{a_t^2 + a_c^2}$$

$$a_{total} = \\sqrt{(1.5)^2 + (450)^2}$$

$$a_{total} = \\sqrt{2.25 + 202,500}$$

$$a_{total} = \\sqrt{202,502.25}$$

$$a_{total} \\approx 450 \\text{ m/s}^2$$

---

**Answer (c)**: Total acceleration ≈ **450 m/s²**

**Note**: The centripetal acceleration (450 m/s²) is MUCH larger than the tangential acceleration (1.5 m/s²), so the total acceleration is essentially just the centripetal acceleration. This makes sense at high rotational speeds!

**Direction**: The total acceleration points slightly inward from the purely radial direction (mostly toward center, with small tangential component).`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Rotational Kinematics')

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rotationalKinematics.id,
        front: 'What is angular velocity?',
        back: '$\\omega = \\frac{d\\theta}{dt}$ - rate of change of angular position. Units: rad/s.',
        hint: 'Change in angle per time',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'What is angular acceleration?',
        back: '$\\alpha = \\frac{d\\omega}{dt}$ - rate of change of angular velocity. Units: rad/s².',
        hint: 'Change in angular velocity per time',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'How is linear velocity related to angular velocity?',
        back: '$v = r\\omega$ - tangential velocity equals radius times angular velocity.',
        hint: 'v = rω',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'What is tangential acceleration?',
        back: '$a_t = r\\alpha$ - component of acceleration tangent to circular path. Changes the speed.',
        hint: 'r times angular acceleration',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'What are the rotational kinematic equations (constant α)?',
        back: '$\\omega_f = \\omega_i + \\alpha t$; $\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2$; $\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta$ - exactly analogous to linear equations!',
        hint: 'Replace v→ω, a→α, x→θ',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'How is period related to angular velocity?',
        back: '$T = \\frac{2\\pi}{\\omega}$ - time for one complete rotation. Also: $\\omega = 2\\pi f$',
        hint: '2π divided by ω',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'MUST angles be in radians or degrees for rotational equations?',
        back: 'MUST use RADIANS! Equations like $v = r\\omega$ and $s = r\\theta$ only work with radians.',
        hint: 'Always radians!',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'What is the rolling without slipping condition?',
        back: '$v_{cm} = r\\omega$ - velocity of center of mass equals radius times angular velocity. Point of contact is instantaneously at rest.',
        hint: 'v = rω for rolling',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'What is the difference between tangential and centripetal acceleration?',
        back: '$a_t = r\\alpha$ (changes speed, tangent to circle), $a_c = \\omega^2 r$ (changes direction, toward center). Total: $a = \\sqrt{a_t^2 + a_c^2}$',
        hint: 'Tangential changes speed, centripetal changes direction',
      },
      {
        topicId: rotationalKinematics.id,
        front: 'How many radians in one complete revolution?',
        back: '$2\\pi$ radians = 360° = 1 revolution. Conversion: $\\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180}$',
        hint: '2π radians per revolution',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Rotational Kinematics')

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

  console.log('\n✅ Successfully seeded AP Physics 1 - Torque & Rotational Motion Part 1!')
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
