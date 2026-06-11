import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics 1 - Kinematics Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' }
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or find the Kinematics category
  let kinematicsCategory = await prisma.category.findFirst({
    where: {
      courseId: physics1Course.id,
      slug: 'kinematics'
    }
  })

  if (!kinematicsCategory) {
    kinematicsCategory = await prisma.category.create({
      data: {
        name: 'Kinematics',
        slug: 'kinematics',
        description: 'Motion in one and two dimensions',
        order: 0,
        courseId: physics1Course.id
      }
    })
    console.log('✓ Created category: Kinematics')
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: kinematicsCategory.id }
  })

  // Topic 1: One-Dimensional Motion
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'one-dimensional-motion' },
    update: {},
    create: {
      title: 'One-Dimensional Motion',
      slug: 'one-dimensional-motion',
      description: 'Position, velocity, and acceleration in one dimension',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: kinematicsCategory.id,
      textContent: `# One-Dimensional Motion

## Introduction to Kinematics

**Kinematics** is the study of motion without considering the forces that cause it. We describe motion using:
- **Position** ($x$)
- **Velocity** ($v$)
- **Acceleration** ($a$)
- **Time** ($t$)

## Position and Displacement

### Position
**Position** ($x$) is the location of an object relative to a reference point (origin).
- Measured in meters (m)
- Can be positive or negative
- Example: $x = 5$ m means 5 meters to the right of the origin

### Displacement
**Displacement** ($\\Delta x$) is the change in position.

$$\\Delta x = x_f - x_i$$

Where:
- $x_f$ = final position
- $x_i$ = initial position

**Note:** Displacement is different from distance traveled!
- Displacement: straight-line change (can be negative)
- Distance: total path length (always positive)

## Velocity

### Average Velocity
**Average velocity** is displacement divided by time interval.

$$v_{avg} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}$$

- Units: m/s
- Can be positive (moving right/up) or negative (moving left/down)
- Vector quantity (has direction)

### Instantaneous Velocity
**Instantaneous velocity** is the velocity at a specific instant.

$$v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}$$

- This is the slope of the position-time graph at a point
- On a graph: tangent line slope

### Speed
**Speed** is the magnitude of velocity (always positive).

$$\\text{speed} = |v|$$

## Acceleration

### Average Acceleration
**Average acceleration** is the change in velocity divided by time.

$$a_{avg} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_f - v_i}{t_f - t_i}$$

- Units: m/s²
- Can be positive or negative
- Positive $a$: speeding up in positive direction OR slowing down in negative direction

### Instantaneous Acceleration
**Instantaneous acceleration** is the acceleration at a specific instant.

$$a = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v}{\\Delta t} = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$

- This is the slope of the velocity-time graph at a point

## Kinematic Equations (Constant Acceleration)

When acceleration is **constant**, we can use these powerful equations:

### The Big Four Kinematic Equations

$$v = v_0 + at$$

$$x = x_0 + v_0 t + \\frac{1}{2}at^2$$

$$v^2 = v_0^2 + 2a(x - x_0)$$

$$x = x_0 + \\frac{1}{2}(v_0 + v)t$$

Where:
- $x_0$ = initial position
- $x$ = final position
- $v_0$ = initial velocity
- $v$ = final velocity
- $a$ = acceleration (constant)
- $t$ = time

### Choosing the Right Equation

| Missing variable | Use equation |
|-----------------|--------------|
| $x$ | $v = v_0 + at$ |
| $v$ | $x = x_0 + v_0 t + \\frac{1}{2}at^2$ |
| $a$ | $x = x_0 + \\frac{1}{2}(v_0 + v)t$ |
| $t$ | $v^2 = v_0^2 + 2a(x - x_0)$ |

## Free Fall

**Free fall** is motion under gravity alone (no air resistance).

$$a = -g = -9.8 \\text{ m/s}^2$$

- Negative because gravity pulls downward
- Same equations apply, but use $a = -g$
- Objects thrown upward: velocity decreases at rate $g$ until $v = 0$ at peak

### Key Facts About Free Fall
1. At the peak of motion, $v = 0$ but $a = -g$
2. Time up = time down (for same height)
3. Landing speed = launching speed (magnitude)

## Sign Conventions

**Always establish a coordinate system first!**

Common convention:
- **Positive direction:** right, up
- **Negative direction:** left, down

Then:
- Velocity in positive direction → $v > 0$
- Velocity in negative direction → $v < 0$
- Acceleration in positive direction → $a > 0$
- Acceleration in negative direction → $a < 0$

## Problem-Solving Strategy

1. **Draw a diagram** with coordinate system
2. **List known variables** ($x_0$, $v_0$, $v$, $a$, $t$)
3. **Identify unknown** you need to find
4. **Choose equation** that relates knowns and unknown
5. **Solve algebraically** before plugging in numbers
6. **Check units** and reasonableness
`,
      exampleProblems: {
        create: [
          {
            question: 'A car starts from rest and accelerates uniformly at $2.0$ m/s² for $5.0$ seconds. How far does it travel?',
            solution: `**Given information:**
- Initial velocity: $v_0 = 0$ m/s (starts from rest)
- Acceleration: $a = 2.0$ m/s²
- Time: $t = 5.0$ s
- Initial position: $x_0 = 0$ (assume)

**Find:** Distance traveled ($x$)

**Choose equation:** We have $v_0$, $a$, and $t$, and need $x$. Missing $v$.

Use: $x = x_0 + v_0 t + \\frac{1}{2}at^2$

**Solve:**
$$x = 0 + (0)(5.0) + \\frac{1}{2}(2.0)(5.0)^2$$
$$x = 0 + 0 + \\frac{1}{2}(2.0)(25)$$
$$x = \\frac{1}{2}(50)$$
$$x = 25 \\text{ m}$$

**Answer:** The car travels **25 meters**.

**Check:** Units are correct (m). A car accelerating for 5 seconds should travel a reasonable distance, and 25 m ≈ 82 feet seems right.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A ball is thrown vertically upward with an initial velocity of $20$ m/s. How high does it go? (Use $g = 10$ m/s²)',
            solution: `**Set up coordinate system:**
- Positive direction: upward
- Origin: ground level

**Given information:**
- Initial velocity: $v_0 = +20$ m/s (upward)
- Acceleration: $a = -g = -10$ m/s² (gravity pulls down)
- At maximum height: $v = 0$ m/s
- Initial position: $y_0 = 0$ (ground)

**Find:** Maximum height ($y$)

**Choose equation:** We have $v_0$, $v$, and $a$, need $y$. Missing $t$.

Use: $v^2 = v_0^2 + 2a(y - y_0)$

**Solve:**
$$0^2 = (20)^2 + 2(-10)(y - 0)$$
$$0 = 400 - 20y$$
$$20y = 400$$
$$y = 20 \\text{ m}$$

**Answer:** The ball reaches a maximum height of **20 meters**.

**Physical insight:** At the peak, velocity is zero but acceleration is still $-10$ m/s² (gravity never stops pulling down!).`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A train traveling at $30$ m/s begins to decelerate uniformly at $-1.5$ m/s². How long does it take to stop, and how far does it travel during this time?',
            solution: `**Given information:**
- Initial velocity: $v_0 = 30$ m/s
- Final velocity: $v = 0$ m/s (stops)
- Acceleration: $a = -1.5$ m/s² (negative = slowing down)
- Initial position: $x_0 = 0$ (assume)

**Find:** 
1. Time to stop ($t$)
2. Distance traveled ($x$)

**Part 1: Find time**

Use: $v = v_0 + at$

$$0 = 30 + (-1.5)t$$
$$1.5t = 30$$
$$t = 20 \\text{ s}$$

**Part 2: Find distance**

Method 1 - Use the time we just found:
$$x = x_0 + v_0 t + \\frac{1}{2}at^2$$
$$x = 0 + (30)(20) + \\frac{1}{2}(-1.5)(20)^2$$
$$x = 600 + \\frac{1}{2}(-1.5)(400)$$
$$x = 600 - 300$$
$$x = 300 \\text{ m}$$

Method 2 - Without using time (faster!):
$$v^2 = v_0^2 + 2a(x - x_0)$$
$$0^2 = (30)^2 + 2(-1.5)(x - 0)$$
$$0 = 900 - 3x$$
$$3x = 900$$
$$x = 300 \\text{ m}$$

**Answers:**
- Time to stop: **20 seconds**
- Distance traveled: **300 meters**

**Check:** Average velocity = $\\frac{30 + 0}{2} = 15$ m/s. Distance = $(15)(20) = 300$ m ✓`,
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
      front: 'What is the difference between distance and displacement?',
      back: 'Distance is total path length (scalar, always positive). Displacement is the straight-line change in position (vector, can be negative).'
    },
    {
      topicId: topic1.id,
      front: 'What is the formula for average velocity?',
      back: '$v_{avg} = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}$'
    },
    {
      topicId: topic1.id,
      front: 'What does instantaneous velocity represent on a position-time graph?',
      back: 'The slope of the tangent line at that point'
    },
    {
      topicId: topic1.id,
      front: 'What are the units of acceleration?',
      back: 'm/s² (meters per second squared)'
    },
    {
      topicId: topic1.id,
      front: 'What is the kinematic equation without displacement?',
      back: '$v = v_0 + at$'
    },
    {
      topicId: topic1.id,
      front: 'What is the kinematic equation without final velocity?',
      back: '$x = x_0 + v_0 t + \\frac{1}{2}at^2$'
    },
    {
      topicId: topic1.id,
      front: 'What is the kinematic equation without time?',
      back: '$v^2 = v_0^2 + 2a(x - x_0)$'
    },
    {
      topicId: topic1.id,
      front: 'What is the acceleration due to gravity?',
      back: '$g = 9.8$ m/s² (often approximated as $10$ m/s²), directed downward'
    },
    {
      topicId: topic1.id,
      front: 'At the peak of vertical motion, what are the velocity and acceleration?',
      back: 'Velocity: $v = 0$. Acceleration: $a = -g$ (gravity still acts!)'
    },
    {
      topicId: topic1.id,
      front: 'If an object has positive velocity and negative acceleration, what is happening?',
      back: 'The object is moving in the positive direction but slowing down'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Motion Graphs
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'motion-graphs' },
    update: {},
    create: {
      title: 'Motion Graphs',
      slug: 'motion-graphs',
      description: 'Position-time, velocity-time, and acceleration-time graphs',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: kinematicsCategory.id,
      textContent: `# Motion Graphs

## Introduction

Graphs are powerful tools for visualizing and analyzing motion. The three main types are:
1. **Position-time graphs** ($x$ vs $t$)
2. **Velocity-time graphs** ($v$ vs $t$)
3. **Acceleration-time graphs** ($a$ vs $t$)

## Position-Time Graphs

### Interpreting Slope
The **slope** of a position-time graph gives the **velocity**.

$$\\text{slope} = \\frac{\\Delta x}{\\Delta t} = v$$

**Key features:**
- Horizontal line → zero velocity (at rest)
- Positive slope → positive velocity (moving forward)
- Negative slope → negative velocity (moving backward)
- Steeper slope → greater speed
- Curved line → changing velocity (acceleration)

### Interpreting Curvature
- **Straight line:** constant velocity ($a = 0$)
- **Curve upward:** increasing velocity (positive acceleration)
- **Curve downward:** decreasing velocity (negative acceleration)

### Reading the Graph
- **y-value:** position at that time
- **Slope:** velocity at that time
- **Change in slope:** acceleration

## Velocity-Time Graphs

### Interpreting Slope
The **slope** of a velocity-time graph gives the **acceleration**.

$$\\text{slope} = \\frac{\\Delta v}{\\Delta t} = a$$

**Key features:**
- Horizontal line → zero acceleration (constant velocity)
- Positive slope → positive acceleration
- Negative slope → negative acceleration (deceleration)
- Steeper slope → greater acceleration

### Interpreting Area
The **area under** a velocity-time graph gives the **displacement**.

$$\\text{area} = \\int v \\, dt = \\Delta x$$

**For constant velocity (rectangle):**
$$\\Delta x = v \\cdot t$$

**For constant acceleration (trapezoid or triangle):**
$$\\Delta x = \\frac{1}{2}(v_0 + v)t$$

**Sign matters:**
- Area above time axis → positive displacement
- Area below time axis → negative displacement

### Reading the Graph
- **y-value:** velocity at that time
- **Slope:** acceleration at that time
- **Area under curve:** displacement

## Acceleration-Time Graphs

### Interpreting Area
The **area under** an acceleration-time graph gives the **change in velocity**.

$$\\text{area} = \\int a \\, dt = \\Delta v$$

**For constant acceleration:**
$$\\Delta v = a \\cdot t$$

### Reading the Graph
- **y-value:** acceleration at that time
- **Area under curve:** change in velocity
- **Horizontal line:** constant acceleration

## Relationships Between Graphs

| If you have... | To get... | Operation |
|----------------|-----------|-----------|
| Position-time | Velocity-time | Take slope (derivative) |
| Velocity-time | Acceleration-time | Take slope (derivative) |
| Velocity-time | Position-time | Find area (integral) |
| Acceleration-time | Velocity-time | Find area (integral) |

## Common Motion Patterns

### Constant Velocity
- Position-time: straight line (slope = velocity)
- Velocity-time: horizontal line
- Acceleration-time: zero (horizontal at $a = 0$)

### Constant Acceleration
- Position-time: parabola (curved)
- Velocity-time: straight line (slope = acceleration)
- Acceleration-time: horizontal line

### Speeding Up vs. Slowing Down

**Speeding up:** velocity and acceleration have the same sign
- Moving right and accelerating right: $v > 0$, $a > 0$
- Moving left and accelerating left: $v < 0$, $a < 0$

**Slowing down:** velocity and acceleration have opposite signs
- Moving right and accelerating left: $v > 0$, $a < 0$
- Moving left and accelerating right: $v < 0$, $a > 0$

## Problem-Solving Tips

1. **Identify the type of graph** (position, velocity, or acceleration)
2. **Look at the y-value** for the quantity itself
3. **Calculate slope** to find the derivative quantity
4. **Calculate area** to find the integral quantity
5. **Check signs** carefully (positive/negative)
6. **Draw the graph** if only given data
`,
      exampleProblems: {
        create: [
          {
            question: 'A position-time graph is a straight line passing through $(0, 5)$ m and $(10, 25)$ m. What is the velocity?',
            solution: `**Given information:**
- Position at $t = 0$ s: $x_0 = 5$ m
- Position at $t = 10$ s: $x = 25$ m
- Graph is a straight line (constant velocity)

**Find:** Velocity

**Solution:**
The velocity is the slope of the position-time graph.

$$v = \\frac{\\Delta x}{\\Delta t} = \\frac{x - x_0}{t - t_0}$$

$$v = \\frac{25 - 5}{10 - 0} = \\frac{20}{10} = 2 \\text{ m/s}$$

**Answer:** The velocity is **2 m/s** (constant).

**Interpretation:** The object moves in the positive direction at a steady 2 m/s. Since the slope is constant (straight line), there is no acceleration.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A velocity-time graph shows a horizontal line at $v = 15$ m/s from $t = 0$ to $t = 8$ s. Find the displacement and acceleration.',
            solution: `**Given information:**
- Velocity: $v = 15$ m/s (constant)
- Time interval: $0$ to $8$ s
- Graph is horizontal line

**Find:** 
1. Displacement
2. Acceleration

**Part 1: Displacement**
Displacement = area under velocity-time graph

Since velocity is constant, the area is a rectangle:
$$\\text{Area} = \\text{base} \\times \\text{height}$$
$$\\Delta x = t \\times v = 8 \\times 15 = 120 \\text{ m}$$

**Part 2: Acceleration**
Acceleration = slope of velocity-time graph

Since the line is horizontal:
$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{0}{8} = 0 \\text{ m/s}^2$$

**Answers:**
- Displacement: **120 m**
- Acceleration: **0 m/s²** (moving at constant velocity)

**Key insight:** Horizontal line on $v$-$t$ graph means constant velocity (zero acceleration).`,
            difficulty: 'EASY',
            order: 2
          },
          {
            question: 'A velocity-time graph shows a straight line from $(0, 0)$ to $(5, 20)$ m/s. Find: (a) the acceleration, (b) the displacement during this time.',
            solution: `**Given information:**
- Initial velocity at $t = 0$: $v_0 = 0$ m/s
- Final velocity at $t = 5$ s: $v = 20$ m/s
- Graph is a straight line (constant acceleration)

**Part (a): Find acceleration**
Acceleration = slope of velocity-time graph

$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t - 0}$$

$$a = \\frac{20 - 0}{5 - 0} = \\frac{20}{5} = 4 \\text{ m/s}^2$$

**Part (b): Find displacement**
Displacement = area under velocity-time graph

The graph forms a **triangle** with:
- Base = $5$ s
- Height = $20$ m/s

$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$

$$\\Delta x = \\frac{1}{2} \\times 5 \\times 20 = \\frac{1}{2} \\times 100 = 50 \\text{ m}$$

**Alternative method for (b):**
Use kinematic equation: $\\Delta x = \\frac{1}{2}(v_0 + v)t$

$$\\Delta x = \\frac{1}{2}(0 + 20)(5) = \\frac{1}{2}(100) = 50 \\text{ m}$$

**Answers:**
- (a) Acceleration: **4 m/s²**
- (b) Displacement: **50 m**

**Check:** Using $v = v_0 + at$: $20 = 0 + 4(5) = 20$ ✓`,
            difficulty: 'MEDIUM',
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
      front: 'What does the slope of a position-time graph represent?',
      back: 'Velocity'
    },
    {
      topicId: topic2.id,
      front: 'What does the slope of a velocity-time graph represent?',
      back: 'Acceleration'
    },
    {
      topicId: topic2.id,
      front: 'What does the area under a velocity-time graph represent?',
      back: 'Displacement (change in position)'
    },
    {
      topicId: topic2.id,
      front: 'What does the area under an acceleration-time graph represent?',
      back: 'Change in velocity'
    },
    {
      topicId: topic2.id,
      front: 'What does a horizontal line on a position-time graph indicate?',
      back: 'The object is at rest (zero velocity)'
    },
    {
      topicId: topic2.id,
      front: 'What does a horizontal line on a velocity-time graph indicate?',
      back: 'Constant velocity (zero acceleration)'
    },
    {
      topicId: topic2.id,
      front: 'What does a curved position-time graph indicate?',
      back: 'Changing velocity (non-zero acceleration)'
    },
    {
      topicId: topic2.id,
      front: 'How do you know if an object is speeding up from a velocity-time graph?',
      back: 'The velocity and acceleration have the same sign (both above or both below the time axis at that instant)'
    },
    {
      topicId: topic2.id,
      front: 'What shape is a velocity-time graph for constant acceleration?',
      back: 'A straight line (constant slope)'
    },
    {
      topicId: topic2.id,
      front: 'How do you find displacement from a velocity-time graph with changing velocity?',
      back: 'Calculate the area under the curve (may need to break into geometric shapes like triangles and rectangles)'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Physics 1 - Kinematics Part 1!')
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
