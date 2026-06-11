import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics 1 - Dynamics Part 1...')

  // Find the AP Physics 1 course
  const physics1Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-1' }
  })

  if (!physics1Course) {
    throw new Error('AP Physics 1 course not found')
  }

  // Create or find the Dynamics category
  let dynamicsCategory = await prisma.category.findFirst({
    where: {
      courseId: physics1Course.id,
      slug: 'dynamics'
    }
  })

  if (!dynamicsCategory) {
    dynamicsCategory = await prisma.category.create({
      data: {
        name: 'Dynamics',
        slug: 'dynamics',
        description: 'Newton\'s Laws and forces',
        order: 1,
        courseId: physics1Course.id
      }
    })
    console.log('✓ Created category: Dynamics')
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: dynamicsCategory.id }
  })

  // Topic 1: Newton's First and Second Laws
  const topic1 = await prisma.topic.upsert({
    where: { slug: 'newtons-first-second-laws' },
    update: {},
    create: {
      title: 'Newton\'s First and Second Laws',
      slug: 'newtons-first-second-laws',
      description: 'Inertia, net force, and F = ma',
      order: existingTopics + 1,
      isPremium: false,
      categoryId: dynamicsCategory.id,
      textContent: `# Newton's First and Second Laws

## Newton's First Law (Law of Inertia)

**Statement:** An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.

$$\\text{If } \\sum \\vec{F} = 0, \\text{ then } \\vec{v} = \\text{constant}$$

### Key Concepts

**Inertia** is the tendency of an object to resist changes in its motion.
- More massive objects have more inertia
- Inertia is measured by **mass** (kg)

**Equilibrium** occurs when the net force is zero.
- **Static equilibrium:** object at rest ($v = 0$)
- **Dynamic equilibrium:** object moving at constant velocity ($v = \\text{constant}$, $a = 0$)

### Common Misconceptions

❌ **Wrong:** "A force is needed to keep an object moving"
✓ **Correct:** A force is only needed to *change* motion (accelerate)

❌ **Wrong:** "If velocity is zero, force must be zero"
✓ **Correct:** Multiple forces can balance to give zero net force

## Newton's Second Law

**Statement:** The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

$$\\sum \\vec{F} = m\\vec{a}$$

Or in component form:
$$\\sum F_x = ma_x$$
$$\\sum F_y = ma_y$$

### Understanding the Equation

**Net force ($\\sum \\vec{F}$):** Vector sum of all forces
- Measured in Newtons (N)
- $1 \\text{ N} = 1 \\text{ kg·m/s}^2$

**Mass ($m$):** Measure of inertia
- Measured in kilograms (kg)
- Scalar quantity (no direction)
- *Not* the same as weight!

**Acceleration ($\\vec{a}$):** Rate of change of velocity
- Measured in m/s²
- Vector quantity (same direction as net force)
- If $\\sum \\vec{F} = 0$, then $a = 0$

### Key Relationships

1. **Direct relationship with force:** If you double the force, you double the acceleration (same mass)
   $$a \\propto F \\text{ (when } m \\text{ is constant)}$$

2. **Inverse relationship with mass:** If you double the mass, you halve the acceleration (same force)
   $$a \\propto \\frac{1}{m} \\text{ (when } F \\text{ is constant)}$$

3. **Direction:** Acceleration is always in the same direction as the net force

## Mass vs. Weight

### Mass
- **Mass** is the amount of matter in an object
- Scalar quantity
- Measured in kg
- Same everywhere in the universe
- Measure of inertia

### Weight
- **Weight** is the gravitational force on an object
- Vector quantity (points toward Earth's center)
- Measured in Newtons (N)
- Depends on location (gravity varies)
- Formula: $W = mg$

**On Earth's surface:**
$$W = mg \\quad \\text{where } g = 9.8 \\text{ m/s}^2$$

**On the Moon:** $g_{moon} \\approx 1.6$ m/s² (about 1/6 of Earth)
- Same mass, but weight is 1/6 as much!

## Free Body Diagrams (FBDs)

A **free body diagram** shows all forces acting on a single object.

### Steps to Draw an FBD

1. **Isolate the object** (draw a dot or box)
2. **Draw all forces as arrows** starting from the object
   - Length represents magnitude
   - Direction shows force direction
3. **Label each force** (e.g., $F_N$, $F_g$, $F_T$)
4. **Do NOT include:**
   - Motion (velocity, acceleration)
   - Forces the object exerts on other things

### Common Forces

- **Weight ($\\vec{F}_g$ or $\\vec{W}$):** Always points downward, magnitude $mg$
- **Normal force ($\\vec{F}_N$ or $\\vec{N}$):** Perpendicular to surface, pushes away from surface
- **Tension ($\\vec{F}_T$ or $\\vec{T}$):** Along rope/string, pulls toward rope
- **Friction ($\\vec{f}$):** Parallel to surface, opposes motion/attempted motion
- **Applied force ($\\vec{F}_{app}$):** Push or pull from external agent

## Problem-Solving Strategy

1. **Draw a free body diagram**
2. **Choose coordinate system** (align with motion when possible)
3. **Write $\\sum F_x = ma_x$ and $\\sum F_y = ma_y$**
4. **List all forces in each direction** (use + and - signs)
5. **Solve for unknowns**
6. **Check units and reasonableness**

## Newton's Laws Summary

| Law | Statement | Equation |
|-----|-----------|----------|
| First | Object maintains velocity unless net force acts | $\\sum \\vec{F} = 0 \\Rightarrow \\vec{v} = \\text{const}$ |
| Second | Net force causes acceleration | $\\sum \\vec{F} = m\\vec{a}$ |
| Third | Forces come in equal/opposite pairs | $\\vec{F}_{AB} = -\\vec{F}_{BA}$ |

## Special Cases

### Zero Acceleration
If $a = 0$, then $\\sum F = 0$ (equilibrium)
- Object at rest OR moving at constant velocity
- All forces balance

### Constant Acceleration
If $a = \\text{constant}$, then $\\sum F = \\text{constant}$
- Can use kinematic equations
- Common in free fall, inclined planes

### Variable Acceleration
If $a$ changes, then $\\sum F$ changes
- More complex analysis required
- Need calculus or numerical methods
`,
      exampleProblems: {
        create: [
          {
            question: 'A $5$ kg box experiences a net force of $20$ N to the right. What is its acceleration?',
            solution: `**Given:**
- Mass: $m = 5$ kg
- Net force: $\\sum F = 20$ N (to the right)

**Find:** Acceleration $a$

**Use Newton's Second Law:**
$$\\sum F = ma$$

**Solve for acceleration:**
$$a = \\frac{\\sum F}{m} = \\frac{20}{5} = 4 \\text{ m/s}^2$$

**Direction:** To the right (same as net force)

**Answer:** The acceleration is **4 m/s² to the right**.

**Check:** 
- Units: N/kg = (kg·m/s²)/kg = m/s² ✓
- Larger force → larger acceleration ✓
- Direction matches force ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A $1200$ kg car accelerates from rest to $20$ m/s in $5$ seconds on a straight road. What is the net force on the car?',
            solution: `**Given:**
- Mass: $m = 1200$ kg
- Initial velocity: $v_0 = 0$ m/s
- Final velocity: $v = 20$ m/s
- Time: $t = 5$ s

**Find:** Net force $\\sum F$

**Step 1: Find acceleration**
$$a = \\frac{v - v_0}{t} = \\frac{20 - 0}{5} = 4 \\text{ m/s}^2$$

**Step 2: Apply Newton's Second Law**
$$\\sum F = ma$$
$$\\sum F = (1200)(4)$$
$$\\sum F = 4800 \\text{ N}$$

**Answer:** The net force on the car is **4800 N** (in the direction of motion).

**Alternative:** $4800$ N $= 4.8$ kN (kilonewtons)

**Physical interpretation:** This is a significant force—equivalent to the weight of about 490 kg! The engine must provide this force (minus friction) to accelerate the car.`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A $2$ kg book rests on a table. Draw a free body diagram and find the normal force. Then, if someone pushes down on the book with a force of $10$ N, what is the new normal force?',
            solution: `**Part 1: Book at rest**

**Free Body Diagram:**
- Weight $W = mg$ pointing down
- Normal force $N$ pointing up

**Given:**
- Mass: $m = 2$ kg
- $g = 10$ m/s² (approximate)
- Acceleration: $a = 0$ (at rest)

**Apply Newton's Second Law (vertical direction):**

Choose up as positive.

$$\\sum F_y = ma_y$$
$$N - W = 0$$
$$N - mg = 0$$
$$N = mg = (2)(10) = 20 \\text{ N}$$

**Part 2: Someone pushes down with 10 N**

**Updated Free Body Diagram:**
- Weight $W = 20$ N pointing down
- Normal force $N$ pointing up
- Applied force $F_{app} = 10$ N pointing down

**Apply Newton's Second Law:**
$$\\sum F_y = ma_y$$
$$N - W - F_{app} = 0 \\quad \\text{(still at rest, so } a = 0\\text{)}$$
$$N - 20 - 10 = 0$$
$$N = 30 \\text{ N}$$

**Answers:**
- Part 1: Normal force = **20 N** (equals weight)
- Part 2: Normal force = **30 N** (equals weight + push)

**Key insight:** Normal force is NOT always equal to weight! It adjusts to prevent the object from accelerating through the surface. Here, the table "pushes back harder" to support both the weight and the downward push.`,
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
      front: 'What is Newton\'s First Law?',
      back: 'An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force'
    },
    {
      topicId: topic1.id,
      front: 'What is inertia?',
      back: 'The tendency of an object to resist changes in its motion. Mass is the measure of inertia.'
    },
    {
      topicId: topic1.id,
      front: 'What is Newton\'s Second Law?',
      back: '$\\sum \\vec{F} = m\\vec{a}$ - Net force equals mass times acceleration'
    },
    {
      topicId: topic1.id,
      front: 'What are the units of force?',
      back: 'Newton (N), where $1 \\text{ N} = 1 \\text{ kg·m/s}^2$'
    },
    {
      topicId: topic1.id,
      front: 'What is the difference between mass and weight?',
      back: 'Mass is the amount of matter (kg, scalar, same everywhere). Weight is gravitational force (N, vector, varies with location). $W = mg$'
    },
    {
      topicId: topic1.id,
      front: 'If net force is zero, what can you conclude about acceleration?',
      back: 'Acceleration is zero. The object is either at rest or moving at constant velocity (equilibrium).'
    },
    {
      topicId: topic1.id,
      front: 'What direction is acceleration relative to net force?',
      back: 'Acceleration is always in the same direction as the net force'
    },
    {
      topicId: topic1.id,
      front: 'What is a free body diagram?',
      back: 'A diagram showing all forces acting on a single isolated object, with arrows representing force vectors'
    },
    {
      topicId: topic1.id,
      front: 'Is normal force always equal to weight?',
      back: 'No! Normal force equals whatever is needed to prevent the object from accelerating through the surface. It only equals weight on a horizontal surface with no other vertical forces.'
    },
    {
      topicId: topic1.id,
      front: 'If you double the net force on an object while keeping mass constant, what happens to acceleration?',
      back: 'Acceleration doubles (direct proportionality: $a \\propto F$)'
    }
  ]

  for (const flashcard of flashcards1) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards1.length} flashcards for ${topic1.title}`)

  // Topic 2: Newton's Third Law and Applications
  const topic2 = await prisma.topic.upsert({
    where: { slug: 'newtons-third-law' },
    update: {},
    create: {
      title: 'Newton\'s Third Law and Applications',
      slug: 'newtons-third-law',
      description: 'Action-reaction pairs and force interactions',
      order: existingTopics + 2,
      isPremium: false,
      categoryId: dynamicsCategory.id,
      textContent: `# Newton's Third Law and Applications

## Newton's Third Law

**Statement:** For every action, there is an equal and opposite reaction.

More precisely: When object A exerts a force on object B, object B exerts an equal magnitude force on object A in the opposite direction.

$$\\vec{F}_{A \\text{ on } B} = -\\vec{F}_{B \\text{ on } A}$$

Or more compactly:
$$\\vec{F}_{AB} = -\\vec{F}_{BA}$$

### Key Characteristics of Action-Reaction Pairs

1. **Equal magnitude:** $|F_{AB}| = |F_{BA}|$
2. **Opposite directions:** One points one way, the other points the opposite way
3. **Same type of force:** If one is gravitational, both are gravitational
4. **Different objects:** Each force acts on a different object
5. **Simultaneous:** Both forces exist at the same time

## Identifying Action-Reaction Pairs

### Template
"Object A exerts force on object B" ⟺ "Object B exerts force on object A"

### Examples

**Example 1: Book on table**
- Action: Earth pulls down on book (weight)
- Reaction: Book pulls up on Earth

**NOT** action-reaction:
- Weight (Earth on book) and Normal force (table on book) - these act on the same object!

**Example 2: Hammer hits nail**
- Action: Hammer exerts force on nail (to the right)
- Reaction: Nail exerts force on hammer (to the left)

**Example 3: Rocket propulsion**
- Action: Rocket pushes gas backward
- Reaction: Gas pushes rocket forward

### Common Mistakes

❌ **Wrong:** Normal force and weight are action-reaction pairs
✓ **Correct:** They act on the same object, so they can't be action-reaction

❌ **Wrong:** Action happens first, then reaction
✓ **Correct:** Both happen simultaneously

❌ **Wrong:** The heavier object exerts more force
✓ **Correct:** Forces in a pair are always equal magnitude

## Why Don't Action-Reaction Forces Cancel?

Action-reaction forces act on **different objects**, so they don't cancel!

**Example:** Push a wall
- You push wall to the right with force $F$
- Wall pushes you to the left with force $F$
- Net force on you: $F$ to the left (you accelerate backward)
- Net force on wall: $F$ to the right (but wall doesn't move—it's also attached to Earth!)

Forces only cancel if they act on the **same object**.

## Applications of Newton's Third Law

### Walking
- Your foot pushes backward on ground
- Ground pushes forward on your foot (you accelerate forward)
- Without friction, you can't push on ground → can't walk (like ice skating!)

### Swimming
- You push water backward with your hands
- Water pushes you forward
- More water displaced → greater forward force

### Rocket Propulsion
- Engine expels gas backward (action)
- Gas pushes rocket forward (reaction)
- Works in space (doesn't need air to "push against")

### Tension in Ropes
If rope has negligible mass:
- Tension is the same throughout the rope
- Forces at both ends of rope segment are equal and opposite (third law)

### Normal Force
- Object pushes down on surface
- Surface pushes up on object (normal force)
- Perpendicular to surface

## Internal vs. External Forces

### Internal Forces
- Forces between objects within a system
- Come in action-reaction pairs
- **Cancel out** when considering the system as a whole
- Example: Tension between two connected blocks

### External Forces
- Forces from outside the system
- Don't have reaction partners within the system
- Cause acceleration of the system
- Example: Friction from ground on a car

**For a system:** Only external forces affect the motion of the center of mass.

## Problem-Solving with Third Law

1. **Identify the two objects** in the interaction
2. **Name both forces:**
   - Force object A exerts on object B
   - Force object B exerts on object A
3. **Remember:** Equal magnitude, opposite direction
4. **Draw separate FBDs** for each object if needed
5. **Apply Second Law to each object separately**

## Connected Objects

When objects are connected (ropes, contact, etc.):

1. **Draw separate FBDs** for each object
2. **Apply Newton's Second Law** to each object
3. **Use Third Law** to relate interaction forces
4. **Solve the system** of equations

**Example:** Two blocks connected by rope
- Tension force on block 1: $T$ (pulls block 1)
- Tension force on block 2: $T$ (pulls block 2)
- If rope is massless: same tension throughout

## Misconceptions Clarified

**Q:** If forces are always equal and opposite, how does anything accelerate?

**A:** Action-reaction forces act on different objects! The net force on each object determines its acceleration.

**Q:** When a horse pulls a cart, doesn't the cart pull back equally hard on the horse? How does the cart move?

**A:** Yes, cart pulls on horse (backward) and horse pulls on cart (forward) with equal forces. But these act on different objects!
- For the cart to accelerate: Forward force from horse > Backward friction on cart
- The horse accelerates forward because: Ground pushes horse forward > Cart pulls horse backward

**Q:** If I push a wall and it pushes back equally hard, why do I move but the wall doesn't?

**A:** The wall is attached to the Earth (huge mass!). The force accelerates you: $a = F/m$. Same force on Earth: $a = F/M_{Earth} \\approx 0$ (negligible).
`,
      exampleProblems: {
        create: [
          {
            question: 'You push on a wall with a force of $50$ N. What is the force the wall exerts on you?',
            solution: `**Given:**
- Force you exert on wall: $F_{you \\text{ on wall}} = 50$ N

**Find:** Force wall exerts on you

**Apply Newton's Third Law:**

Every action has an equal and opposite reaction. When you push on the wall, the wall pushes back on you.

$$F_{wall \\text{ on you}} = -F_{you \\text{ on wall}}$$

**Magnitude:** $|F_{wall \\text{ on you}}| = 50$ N

**Direction:** Opposite to the force you exerted

**Answer:** The wall exerts a force of **50 N** on you, directed away from the wall (pushing you backward).

**Key point:** The forces are equal in magnitude but opposite in direction. They act on different objects (you vs. wall), so they don't cancel.`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A $60$ kg astronaut floating in space pushes a $120$ kg satellite with a force of $240$ N. What is the acceleration of: (a) the satellite, (b) the astronaut?',
            solution: `**Given:**
- Astronaut mass: $m_A = 60$ kg
- Satellite mass: $m_S = 120$ kg
- Force astronaut exerts on satellite: $F_{A \\text{ on } S} = 240$ N

**Part (a): Acceleration of satellite**

Apply Newton's Second Law to the satellite:
$$a_S = \\frac{F_{A \\text{ on } S}}{m_S} = \\frac{240}{120} = 2 \\text{ m/s}^2$$

Direction: In the direction the astronaut pushed

**Part (b): Acceleration of astronaut**

By Newton's Third Law:
$$F_{S \\text{ on } A} = -F_{A \\text{ on } S}$$

Magnitude: $|F_{S \\text{ on } A}| = 240$ N

Direction: Opposite (satellite pushes back on astronaut)

Apply Newton's Second Law to the astronaut:
$$a_A = \\frac{F_{S \\text{ on } A}}{m_A} = \\frac{240}{60} = 4 \\text{ m/s}^2$$

Direction: Opposite to the satellite's acceleration (astronaut moves backward)

**Answers:**
- (a) Satellite acceleration: **2 m/s²** (forward)
- (b) Astronaut acceleration: **4 m/s²** (backward)

**Key insight:** Even though the forces are equal, the accelerations are different because the masses are different! The less massive astronaut accelerates more ($a \\propto 1/m$).`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A $5$ kg book rests on a table. Identify all the forces on the book and state whether any pairs are action-reaction pairs according to Newton\'s Third Law.',
            solution: `**Forces acting on the book:**

1. **Weight** ($\\vec{W}$ or $\\vec{F}_g$): Earth pulls down on book
   - Magnitude: $W = mg = (5)(9.8) = 49$ N
   - Direction: Downward

2. **Normal force** ($\\vec{N}$ or $\\vec{F}_N$): Table pushes up on book
   - Magnitude: $N = 49$ N (since book is at rest)
   - Direction: Upward

**Are weight and normal force action-reaction pairs?**

**NO!** They are not action-reaction pairs because:
- Both forces act on the **same object** (the book)
- Action-reaction pairs must act on **different objects**
- They are different types of forces (gravitational vs. contact)

**What ARE the action-reaction pairs?**

**Pair 1: Gravitational forces**
- Action: Earth pulls down on book (weight) = 49 N downward
- Reaction: Book pulls up on Earth = 49 N upward

**Pair 2: Contact forces**
- Action: Book pushes down on table = 49 N downward
- Reaction: Table pushes up on book (normal force) = 49 N upward

**Summary:**
- Weight and normal force act on the book → they balance (net force = 0, so $a = 0$)
- The reaction to weight acts on Earth
- The reaction to normal force acts on the table

**Key insight:** Just because two forces are equal and opposite doesn't make them an action-reaction pair! They must act on different objects and be the same type of force.`,
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
      front: 'What is Newton\'s Third Law?',
      back: 'For every action, there is an equal and opposite reaction. $\\vec{F}_{AB} = -\\vec{F}_{BA}$'
    },
    {
      topicId: topic2.id,
      front: 'What are the characteristics of action-reaction force pairs?',
      back: 'Equal magnitude, opposite directions, same type of force, act on different objects, and occur simultaneously'
    },
    {
      topicId: topic2.id,
      front: 'Why don\'t action-reaction forces cancel each other?',
      back: 'Because they act on different objects. Forces only cancel if they act on the same object.'
    },
    {
      topicId: topic2.id,
      front: 'Are weight and normal force an action-reaction pair?',
      back: 'No! They both act on the same object. Action-reaction pairs must act on different objects.'
    },
    {
      topicId: topic2.id,
      front: 'What is the reaction force to the Earth pulling down on you (your weight)?',
      back: 'You pulling up on the Earth with equal force'
    },
    {
      topicId: topic2.id,
      front: 'How does a rocket accelerate in space if there\'s no air to push against?',
      back: 'The rocket pushes gas backward (action), and the gas pushes the rocket forward (reaction). Newton\'s Third Law doesn\'t require a medium.'
    },
    {
      topicId: topic2.id,
      front: 'What is the difference between internal and external forces for a system?',
      back: 'Internal forces are between objects in the system (come in action-reaction pairs, cancel out). External forces come from outside the system and cause acceleration.'
    },
    {
      topicId: topic2.id,
      front: 'If you push a car and it pushes back on you with equal force, why does the car move?',
      back: 'The forces act on different objects. The car experiences your push (and friction from ground). You experience the car\'s push. Each object\'s motion depends on the net force acting on it.'
    }
  ]

  for (const flashcard of flashcards2) {
    await prisma.flashcard.create({
      data: flashcard
    })
  }

  console.log(`✓ Created ${flashcards2.length} flashcards for ${topic2.title}`)

  console.log('\n✅ Successfully seeded AP Physics 1 - Dynamics Part 1!')
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
