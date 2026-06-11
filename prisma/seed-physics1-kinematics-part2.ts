import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics 1 - Kinematics Part 2...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' }
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Find the Kinematics category
  const kinematicsCategory = await prisma.category.findFirst({
    where: {
      courseId: physics1Course.id,
      slug: 'kinematics'
    }
  })

  if (!kinematicsCategory) {
    throw new Error('Kinematics category not found')
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: kinematicsCategory.id }
  })

  // Topic 1: Two-Dimensional Motion
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'two-dimensional-motion' },
    update: {},
    create: {
      title: 'Two-Dimensional Motion',
      slug: 'two-dimensional-motion',
      description: 'Vectors, components, and motion in a plane',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: kinematicsCategory.id,
      textContent: `# Two-Dimensional Motion

## Introduction to Vectors

**Vectors** have both magnitude and direction. In 2D motion, we need to track both $x$ and $y$ components.

### Vector Notation
- **Vector:** $\\vec{v}$ or **v** (bold)
- **Magnitude:** $|\\vec{v}|$ or $v$ (no arrow/bold)
- **Components:** $v_x$ (horizontal), $v_y$ (vertical)

## Breaking Vectors into Components

For a vector $\\vec{v}$ at angle $\\theta$ from the horizontal:

$$v_x = v \\cos \\theta$$
$$v_y = v \\sin \\theta$$

**Magnitude from components:**
$$v = \\sqrt{v_x^2 + v_y^2}$$

**Angle from components:**
$$\\theta = \\tan^{-1}\\left(\\frac{v_y}{v_x}\\right)$$

### Sign Conventions
- $v_x > 0$: pointing right
- $v_x < 0$: pointing left
- $v_y > 0$: pointing up
- $v_y < 0$: pointing down

## Independence of Motion

**KEY PRINCIPLE:** Horizontal and vertical motions are **independent**.

This means:
- $x$-direction motion doesn't affect $y$-direction motion
- $y$-direction motion doesn't affect $x$-direction motion
- We can analyze each direction separately!

### Horizontal Direction
$$x = x_0 + v_{0x}t + \\frac{1}{2}a_x t^2$$
$$v_x = v_{0x} + a_x t$$

### Vertical Direction
$$y = y_0 + v_{0y}t + \\frac{1}{2}a_y t^2$$
$$v_y = v_{0y} + a_y t$$

**Important:** Time $t$ is the same for both directions!

## Position and Displacement Vectors

### Position Vector
$$\\vec{r} = x\\hat{i} + y\\hat{j}$$

Where $\\hat{i}$ and $\\hat{j}$ are unit vectors in $x$ and $y$ directions.

### Displacement Vector
$$\\Delta \\vec{r} = \\Delta x \\hat{i} + \\Delta y \\hat{j}$$

$$\\Delta \\vec{r} = (x_f - x_i)\\hat{i} + (y_f - y_i)\\hat{j}$$

**Magnitude of displacement:**
$$|\\Delta \\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$$

## Velocity Vectors

### Average Velocity Vector
$$\\vec{v}_{avg} = \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{\\Delta x}{\\Delta t}\\hat{i} + \\frac{\\Delta y}{\\Delta t}\\hat{j}$$

$$\\vec{v}_{avg} = v_{avg,x}\\hat{i} + v_{avg,y}\\hat{j}$$

### Instantaneous Velocity Vector
$$\\vec{v} = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$

Where:
$$v_x = \\frac{dx}{dt}, \\quad v_y = \\frac{dy}{dt}$$

**Speed (magnitude of velocity):**
$$v = |\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$

**Direction of velocity:**
$$\\theta = \\tan^{-1}\\left(\\frac{v_y}{v_x}\\right)$$

**Key fact:** Velocity vector is always **tangent to the path**.

## Acceleration Vectors

### Acceleration Vector
$$\\vec{a} = a_x\\hat{i} + a_y\\hat{j}$$

Where:
$$a_x = \\frac{dv_x}{dt}, \\quad a_y = \\frac{dv_y}{dt}$$

**Magnitude:**
$$a = |\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$$

## Relative Velocity

The velocity of object A relative to object B:

$$\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$$

**Example:** Velocity of plane relative to ground = velocity of plane relative to air + velocity of air relative to ground (wind).

$$\\vec{v}_{plane/ground} = \\vec{v}_{plane/air} + \\vec{v}_{air/ground}$$

## Problem-Solving Strategy

1. **Set up coordinate system** ($x$-$y$ axes)
2. **Break initial velocity into components** using trig
3. **Write separate equations for $x$ and $y$**
4. **Use the fact that $t$ is the same** in both directions
5. **Solve for unknowns**
6. **Combine components** if asked for magnitude/direction

## Common Scenarios

### Motion on an Incline
- Rotate axes: one parallel to incline, one perpendicular
- Gravity component parallel: $g \\sin \\theta$
- Gravity component perpendicular: $g \\cos \\theta$

### Circular Motion (Preview)
- Velocity is always tangent to circle
- Acceleration points toward center
- Speed can be constant, but velocity changes (direction changes)
`,
      exampleProblems: {
        create: [
          {
            question: 'A velocity vector has components $v_x = 6$ m/s and $v_y = 8$ m/s. Find the magnitude and direction of the velocity.',
            solution: `**Given:**
- Horizontal component: $v_x = 6$ m/s
- Vertical component: $v_y = 8$ m/s

**Find:** 
1. Magnitude $v$
2. Direction $\\theta$ (angle from horizontal)

**Part 1: Magnitude**
Use the Pythagorean theorem:

$$v = \\sqrt{v_x^2 + v_y^2}$$
$$v = \\sqrt{6^2 + 8^2}$$
$$v = \\sqrt{36 + 64}$$
$$v = \\sqrt{100}$$
$$v = 10 \\text{ m/s}$$

**Part 2: Direction**
Use inverse tangent:

$$\\theta = \\tan^{-1}\\left(\\frac{v_y}{v_x}\\right)$$
$$\\theta = \\tan^{-1}\\left(\\frac{8}{6}\\right)$$
$$\\theta = \\tan^{-1}(1.333)$$
$$\\theta \\approx 53.1°$$

**Answers:**
- Magnitude: **10 m/s**
- Direction: **53.1° above the horizontal** (or from the positive $x$-axis)

**Note:** This is a 3-4-5 right triangle scaled by 2!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'An object moves from position $(2, 3)$ m to $(7, 15)$ m in $4$ seconds. Find the average velocity vector and its magnitude.',
            solution: `**Given:**
- Initial position: $(x_i, y_i) = (2, 3)$ m
- Final position: $(x_f, y_f) = (7, 15)$ m
- Time interval: $\\Delta t = 4$ s

**Find:** Average velocity vector and magnitude

**Step 1: Find displacement components**
$$\\Delta x = x_f - x_i = 7 - 2 = 5 \\text{ m}$$
$$\\Delta y = y_f - y_i = 15 - 3 = 12 \\text{ m}$$

**Step 2: Find average velocity components**
$$v_{avg,x} = \\frac{\\Delta x}{\\Delta t} = \\frac{5}{4} = 1.25 \\text{ m/s}$$

$$v_{avg,y} = \\frac{\\Delta y}{\\Delta t} = \\frac{12}{4} = 3.0 \\text{ m/s}$$

**Step 3: Write vector**
$$\\vec{v}_{avg} = 1.25\\hat{i} + 3.0\\hat{j} \\text{ m/s}$$

Or: $\\vec{v}_{avg} = (1.25, 3.0)$ m/s

**Step 4: Find magnitude**
$$v_{avg} = \\sqrt{v_{avg,x}^2 + v_{avg,y}^2}$$
$$v_{avg} = \\sqrt{(1.25)^2 + (3.0)^2}$$
$$v_{avg} = \\sqrt{1.5625 + 9.0}$$
$$v_{avg} = \\sqrt{10.5625}$$
$$v_{avg} \\approx 3.25 \\text{ m/s}$$

**Answers:**
- Average velocity vector: **$(1.25, 3.0)$ m/s** or $1.25\\hat{i} + 3.0\\hat{j}$ m/s
- Magnitude: **3.25 m/s**`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A boat can travel at $5$ m/s in still water. It heads due north across a river that flows east at $3$ m/s. What is the boat\'s velocity relative to the shore (magnitude and direction)?',
            solution: `**Given:**
- Boat velocity relative to water: $\\vec{v}_{boat/water} = 5$ m/s north
- Water velocity relative to shore: $\\vec{v}_{water/shore} = 3$ m/s east

**Find:** Boat velocity relative to shore

**Set up components:**
Let east be $+x$ and north be $+y$.

Boat relative to water:
- $v_{boat/water, x} = 0$ m/s
- $v_{boat/water, y} = 5$ m/s

Water relative to shore:
- $v_{water/shore, x} = 3$ m/s
- $v_{water/shore, y} = 0$ m/s

**Apply relative velocity formula:**
$$\\vec{v}_{boat/shore} = \\vec{v}_{boat/water} + \\vec{v}_{water/shore}$$

**Components:**
$$v_{boat/shore, x} = 0 + 3 = 3 \\text{ m/s}$$
$$v_{boat/shore, y} = 5 + 0 = 5 \\text{ m/s}$$

**Magnitude:**
$$v_{boat/shore} = \\sqrt{3^2 + 5^2} = \\sqrt{9 + 25} = \\sqrt{34} \\approx 5.83 \\text{ m/s}$$

**Direction:**
$$\\theta = \\tan^{-1}\\left(\\frac{5}{3}\\right) \\approx 59.0°$$

This angle is measured from east (the positive $x$-axis).

**Answers:**
- Velocity relative to shore: **5.83 m/s**
- Direction: **59.0° north of east** (or 31.0° east of north)

**Physical interpretation:** The current pushes the boat downstream (east) even though it's trying to go north!`,
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
      front: 'How do you find the horizontal component of a vector at angle $\\theta$?',
      back: '$v_x = v \\cos \\theta$'
    },
    {
      topicId: topic1.id,
      front: 'How do you find the vertical component of a vector at angle $\\theta$?',
      back: '$v_y = v \\sin \\theta$'
    },
    {
      topicId: topic1.id,
      front: 'How do you find the magnitude of a vector from its components?',
      back: '$v = \\sqrt{v_x^2 + v_y^2}$ (Pythagorean theorem)'
    },
    {
      topicId: topic1.id,
      front: 'What is the key principle of 2D motion?',
      back: 'Horizontal and vertical motions are independent of each other'
    },
    {
      topicId: topic1.id,
      front: 'What is the same in both $x$ and $y$ directions for projectile motion?',
      back: 'Time $t$ is the same for both horizontal and vertical components'
    },
    {
      topicId: topic1.id,
      front: 'What is the formula for relative velocity?',
      back: '$\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$ (velocity of A relative to B)'
    },
    {
      topicId: topic1.id,
      front: 'What direction is the velocity vector relative to the path?',
      back: 'Always tangent to the path'
    },
    {
      topicId: topic1.id,
      front: 'How do you find the angle of a vector from its components?',
      back: '$\\theta = \\tan^{-1}(v_y / v_x)$'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Projectile Motion
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'projectile-motion' },
    update: {},
    create: {
      title: 'Projectile Motion',
      slug: 'projectile-motion',
      description: 'Motion under gravity in two dimensions',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: kinematicsCategory.id,
      textContent: `# Projectile Motion

## Introduction

**Projectile motion** is 2D motion under the influence of gravity only (ignoring air resistance).

Examples:
- Ball thrown at an angle
- Cannonball fired from a cannon
- Water from a fountain
- Long jumper

## Key Characteristics

1. **Horizontal motion:** constant velocity (no horizontal acceleration)
   $$a_x = 0$$
   $$v_x = v_{0x} = \\text{constant}$$

2. **Vertical motion:** constant acceleration due to gravity
   $$a_y = -g = -9.8 \\text{ m/s}^2$$

3. **Parabolic path:** The trajectory is a parabola

4. **Independence:** Horizontal and vertical motions are independent

## Initial Velocity Components

If launched at angle $\\theta_0$ with initial speed $v_0$:

$$v_{0x} = v_0 \\cos \\theta_0$$
$$v_{0y} = v_0 \\sin \\theta_0$$

## Equations of Motion

### Horizontal Direction (constant velocity)
$$x = x_0 + v_{0x}t$$
$$v_x = v_{0x} = \\text{constant}$$

### Vertical Direction (constant acceleration)
$$y = y_0 + v_{0y}t - \\frac{1}{2}gt^2$$
$$v_y = v_{0y} - gt$$
$$v_y^2 = v_{0y}^2 - 2g(y - y_0)$$

**Note:** Using $-g$ for downward acceleration.

## Key Features of Parabolic Trajectory

### At the Peak
- **Vertical velocity:** $v_y = 0$ (changes from positive to negative)
- **Horizontal velocity:** $v_x = v_{0x}$ (unchanged)
- **Total velocity:** $v = v_x$ (purely horizontal)
- **Acceleration:** $a = -g$ (always downward, even at peak!)

### Symmetry Properties

For projectile launched and landing at same height:

1. **Time up = Time down**
   $$t_{up} = t_{down} = \\frac{v_{0y}}{g}$$

2. **Total time of flight:**
   $$t_{total} = \\frac{2v_{0y}}{g} = \\frac{2v_0 \\sin \\theta_0}{g}$$

3. **Maximum height:**
   $$h_{max} = \\frac{v_{0y}^2}{2g} = \\frac{(v_0 \\sin \\theta_0)^2}{2g}$$

4. **Range (horizontal distance):**
   $$R = \\frac{v_0^2 \\sin(2\\theta_0)}{g}$$

5. **Landing speed = Launch speed** (magnitude)

6. **Landing angle = Launch angle** (below horizontal)

## Special Cases

### Horizontal Launch ($\\theta_0 = 0°$)
- $v_{0x} = v_0$
- $v_{0y} = 0$
- Time in air: $t = \\sqrt{\\frac{2h}{g}}$ where $h$ is initial height

### Vertical Launch ($\\theta_0 = 90°$)
- $v_{0x} = 0$ (no horizontal motion)
- $v_{0y} = v_0$
- 1D motion only

### 45° Launch (Maximum Range)
- For a given speed $v_0$, $\\theta_0 = 45°$ gives maximum range
- $R_{max} = \\frac{v_0^2}{g}$

### Complementary Angles
- $\\theta_0$ and $(90° - \\theta_0)$ give the same range
- Example: 30° and 60° both give same range (but different trajectories!)

## Problem-Solving Strategy

1. **Draw a diagram** showing trajectory
2. **Set up coordinate system** (origin at launch point)
3. **List knowns:** $v_0$, $\\theta_0$, $x_0$, $y_0$, etc.
4. **Break $v_0$ into components:** $v_{0x}$ and $v_{0y}$
5. **Write separate equations for $x$ and $y$**
6. **Use time as the link** between horizontal and vertical
7. **Solve step by step**

## Common Questions

**Q: What is the acceleration at the peak?**
A: $a = -g$ downward. Acceleration is **always** $-g$ throughout flight!

**Q: What is the velocity at the peak?**
A: $v = v_x = v_{0x}$ (horizontal only, since $v_y = 0$)

**Q: How do you find time to reach maximum height?**
A: Use $v_y = v_{0y} - gt$ and set $v_y = 0$: $t = \\frac{v_{0y}}{g}$

**Q: How do you find range?**
A: Find total time of flight, then $R = v_x \\cdot t_{total}$

## Real-World Applications

- Sports: basketball, soccer, golf, baseball
- Military: ballistics, artillery
- Engineering: water fountains, sprinkler systems
- Space: satellite trajectories (approximately)
`,
      exampleProblems: {
        create: [
          {
            question: 'A ball is kicked at $20$ m/s at an angle of $30°$ above the horizontal. Find the horizontal and vertical components of the initial velocity.',
            solution: `**Given:**
- Initial speed: $v_0 = 20$ m/s
- Launch angle: $\\theta_0 = 30°$

**Find:** $v_{0x}$ and $v_{0y}$

**Horizontal component:**
$$v_{0x} = v_0 \\cos \\theta_0$$
$$v_{0x} = 20 \\cos(30°)$$
$$v_{0x} = 20 \\times 0.866$$
$$v_{0x} \\approx 17.3 \\text{ m/s}$$

**Vertical component:**
$$v_{0y} = v_0 \\sin \\theta_0$$
$$v_{0y} = 20 \\sin(30°)$$
$$v_{0y} = 20 \\times 0.5$$
$$v_{0y} = 10 \\text{ m/s}$$

**Answers:**
- Horizontal component: **17.3 m/s**
- Vertical component: **10 m/s**

**Check:** $\\sqrt{17.3^2 + 10^2} = \\sqrt{299.29 + 100} \\approx 20$ m/s ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A projectile is launched horizontally from a cliff $80$ m high with initial speed $30$ m/s. How long is it in the air, and how far from the base of the cliff does it land? (Use $g = 10$ m/s²)',
            solution: `**Given:**
- Initial height: $y_0 = 80$ m
- Horizontal launch: $\\theta_0 = 0°$
- Initial speed: $v_0 = 30$ m/s
- $v_{0x} = 30$ m/s, $v_{0y} = 0$ m/s
- $g = 10$ m/s²

**Find:** 
1. Time in air
2. Horizontal distance (range)

**Part 1: Time in air**

Use vertical motion equation:
$$y = y_0 + v_{0y}t - \\frac{1}{2}gt^2$$

At landing, $y = 0$:
$$0 = 80 + 0 \\cdot t - \\frac{1}{2}(10)t^2$$
$$0 = 80 - 5t^2$$
$$5t^2 = 80$$
$$t^2 = 16$$
$$t = 4 \\text{ s}$$

**Part 2: Horizontal distance**

Use horizontal motion (constant velocity):
$$x = v_{0x} \\cdot t$$
$$x = 30 \\times 4$$
$$x = 120 \\text{ m}$$

**Answers:**
- Time in air: **4 seconds**
- Horizontal distance: **120 m from base of cliff**

**Note:** The horizontal speed doesn't affect time in air—only the height does!`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A soccer ball is kicked at $25$ m/s at an angle of $37°$ above horizontal. Find: (a) the maximum height reached, (b) the time of flight, and (c) the range. Use $g = 10$ m/s² and $\\sin(37°) \\approx 0.6$, $\\cos(37°) \\approx 0.8$.',
            solution: `**Given:**
- Initial speed: $v_0 = 25$ m/s
- Launch angle: $\\theta_0 = 37°$
- $g = 10$ m/s²

**Step 1: Find initial velocity components**
$$v_{0x} = v_0 \\cos(37°) = 25 \\times 0.8 = 20 \\text{ m/s}$$
$$v_{0y} = v_0 \\sin(37°) = 25 \\times 0.6 = 15 \\text{ m/s}$$

**Part (a): Maximum height**

Use $v_y^2 = v_{0y}^2 - 2gh$ where $v_y = 0$ at max height:
$$0 = (15)^2 - 2(10)h$$
$$0 = 225 - 20h$$
$$20h = 225$$
$$h = 11.25 \\text{ m}$$

**Alternative:** $h_{max} = \\frac{v_{0y}^2}{2g} = \\frac{225}{20} = 11.25$ m

**Part (b): Time of flight**

Time to peak: $t_{up} = \\frac{v_{0y}}{g} = \\frac{15}{10} = 1.5$ s

Total time (up and down): $t_{total} = 2 \\times 1.5 = 3.0$ s

**Part (c): Range**

Horizontal distance traveled:
$$R = v_{0x} \\times t_{total}$$
$$R = 20 \\times 3.0$$
$$R = 60 \\text{ m}$$

**Alternative formula:** $R = \\frac{v_0^2 \\sin(2\\theta_0)}{g} = \\frac{625 \\times 2 \\times 0.6 \\times 0.8}{10} = \\frac{600}{10} = 60$ m

**Answers:**
- (a) Maximum height: **11.25 m**
- (b) Time of flight: **3.0 s**
- (c) Range: **60 m**

**Check:** At landing, $v_y = -15$ m/s (same magnitude as launch, opposite direction) ✓`,
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
      front: 'What is the horizontal acceleration in projectile motion?',
      back: '$a_x = 0$ (no horizontal acceleration)'
    },
    {
      topicId: topic2.id,
      front: 'What is the vertical acceleration in projectile motion?',
      back: '$a_y = -g = -9.8$ m/s² (constant downward)'
    },
    {
      topicId: topic2.id,
      front: 'What is the shape of a projectile\'s path?',
      back: 'A parabola'
    },
    {
      topicId: topic2.id,
      front: 'What is the vertical velocity at the peak of projectile motion?',
      back: '$v_y = 0$ (but horizontal velocity is still $v_x$!)'
    },
    {
      topicId: topic2.id,
      front: 'What is the acceleration at the peak of projectile motion?',
      back: '$a = -g$ downward (acceleration is always $-g$ throughout flight!)'
    },
    {
      topicId: topic2.id,
      front: 'What launch angle gives maximum range for a projectile?',
      back: '$45°$ (for a given initial speed)'
    },
    {
      topicId: topic2.id,
      front: 'What is the time to reach maximum height in projectile motion?',
      back: '$t = \\frac{v_{0y}}{g}$ (when $v_y = 0$)'
    },
    {
      topicId: topic2.id,
      front: 'What is the formula for maximum height of a projectile?',
      back: '$h_{max} = \\frac{v_{0y}^2}{2g}$'
    },
    {
      topicId: topic2.id,
      front: 'For a projectile launched and landing at the same height, how does landing speed compare to launch speed?',
      back: 'They are equal in magnitude (but landing velocity is at angle below horizontal)'
    },
    {
      topicId: topic2.id,
      front: 'Which two launch angles give the same range?',
      back: 'Complementary angles: $\\theta$ and $(90° - \\theta)$ (e.g., 30° and 60°)'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Physics 1 - Kinematics Part 2!')
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
