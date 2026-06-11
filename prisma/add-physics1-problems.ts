import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Physics 1 topics...')

  // Topic 1: One-Dimensional Motion
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'one-dimensional-motion' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A car accelerates uniformly from rest to 25 m/s in 5.0 seconds. (a) What is the car's acceleration? (b) How far does the car travel during this time? (c) What is the car's average velocity during this interval?`,
          solution: `**Solution:**

Given: v₀ = 0 m/s (starts from rest), v = 25 m/s, t = 5.0 s

(a) **Acceleration:**
Using v = v₀ + at
25 = 0 + a(5.0)
a = 25/5.0 = **5.0 m/s²**

(b) **Distance traveled:**
Using Δx = v₀t + ½at²
Δx = 0 + ½(5.0)(5.0)²
Δx = ½(5.0)(25)
Δx = **62.5 m** or **63 m**

Alternatively, using v² = v₀² + 2aΔx:
(25)² = 0 + 2(5.0)Δx
625 = 10Δx
Δx = 62.5 m ✓

(c) **Average velocity:**
v_avg = (v₀ + v)/2 = (0 + 25)/2 = **12.5 m/s**

Or: v_avg = Δx/t = 62.5/5.0 = 12.5 m/s ✓`,
        },
        {
          topicId: topic1.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A ball is thrown straight upward with an initial velocity of 20 m/s. Taking upward as positive and g = 10 m/s², find: (a) the maximum height reached, (b) the time to reach maximum height, (c) the total time in the air before returning to the starting point, and (d) the velocity when it returns to the starting height.`,
          solution: `**Solution:**

Given: v₀ = +20 m/s, a = -10 m/s² (gravity acts downward)

(a) **Maximum height:**
At max height, v = 0
Using v² = v₀² + 2aΔy
0 = (20)² + 2(-10)Δy
0 = 400 - 20Δy
Δy = **20 m**

(b) **Time to max height:**
Using v = v₀ + at
0 = 20 + (-10)t
t = **2.0 s**

(c) **Total time in air:**
The motion is symmetric for projectiles. Time up = Time down
Total time = 2 × 2.0 s = **4.0 s**

Alternatively, using Δy = v₀t + ½at² with Δy = 0 (returns to start):
0 = 20t + ½(-10)t²
0 = 20t - 5t²
0 = t(20 - 5t)
t = 0 or t = 4.0 s → **4.0 s**

(d) **Velocity upon return:**
Using v = v₀ + at
v = 20 + (-10)(4.0)
v = 20 - 40 = **-20 m/s** (downward)

The speed is the same, but direction reversed.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: One-Dimensional Motion')
  }

  // Topic 2: Motion Graphs
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'motion-graphs' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A velocity vs. time graph shows a straight line starting at v = 10 m/s at t = 0 and ending at v = 30 m/s at t = 4 s. (a) What is the object's acceleration? (b) What is the displacement during this time interval? (c) Describe what the area under the v-t curve represents.`,
          solution: `**Solution:**

(a) **Acceleration from v-t graph:**
Acceleration = slope of v-t graph
a = Δv/Δt = (30 - 10)/(4 - 0) = 20/4 = **5.0 m/s²**

(b) **Displacement:**
Displacement = area under v-t curve
The area is a trapezoid with parallel sides 10 m/s and 30 m/s, height 4 s.

Area = ½(v₁ + v₂)t = ½(10 + 30)(4) = ½(40)(4) = **80 m**

(c) **Meaning of area under v-t curve:**
The area under a velocity-time graph represents the **displacement** of the object. For motion in one direction, this equals the distance traveled.`,
        },
        {
          topicId: topic2.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `An object's position is given by the equation x(t) = 2t³ - 6t² + 4t + 5, where x is in meters and t is in seconds. (a) Find the velocity function v(t). (b) Find the acceleration function a(t). (c) At what time(s) is the object momentarily at rest?`,
          solution: `**Solution:**

(a) **Velocity function:**
v(t) = dx/dt = d/dt(2t³ - 6t² + 4t + 5)
v(t) = 6t² - 12t + 4 **m/s**

(b) **Acceleration function:**
a(t) = dv/dt = d/dt(6t² - 12t + 4)
a(t) = 12t - 12 **m/s²**

(c) **When object is at rest:**
Object at rest when v(t) = 0
6t² - 12t + 4 = 0
Divide by 2: 3t² - 6t + 2 = 0

Using quadratic formula: t = [6 ± √(36-24)]/6 = [6 ± √12]/6 = [6 ± 2√3]/6

t = (6 + 2√3)/6 ≈ **1.58 s** and t = (6 - 2√3)/6 ≈ **0.42 s**

The object is momentarily at rest at t ≈ 0.42 s and t ≈ 1.58 s.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Motion Graphs')
  }

  // Topic 3: Projectile Motion
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'projectile-motion' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A ball is kicked at 20 m/s at an angle of 37° above the horizontal. Use g = 10 m/s². (a) What are the horizontal and vertical components of the initial velocity? (b) What is the maximum height? (c) What is the time of flight? (d) What is the range?`,
          solution: `**Solution:**

Given: v₀ = 20 m/s, θ = 37°, g = 10 m/s²
Note: sin 37° ≈ 0.60, cos 37° ≈ 0.80

(a) **Initial velocity components:**
v₀ₓ = v₀ cos θ = 20(0.80) = **16 m/s**
v₀ᵧ = v₀ sin θ = 20(0.60) = **12 m/s**

(b) **Maximum height:**
At max height, vᵧ = 0
Using vᵧ² = v₀ᵧ² - 2gΔy
0 = (12)² - 2(10)Δy
20Δy = 144
Δy = **7.2 m**

(c) **Time of flight:**
Using Δy = v₀ᵧt - ½gt² with Δy = 0 (lands at same height)
0 = 12t - 5t²
t(12 - 5t) = 0
t = 0 or t = 12/5 = **2.4 s**

(d) **Range:**
R = v₀ₓ × t_total = 16 × 2.4 = **38.4 m** or **38 m**

Alternatively: R = (v₀² sin 2θ)/g = (400 × sin 74°)/10 ≈ 38.4 m`,
        },
        {
          topicId: topic3.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A ball rolls off a table 1.2 m high with a horizontal velocity of 3.0 m/s. (a) How long does it take to hit the ground? (b) How far from the base of the table does it land? (c) What is its velocity (magnitude and direction) just before impact?`,
          solution: `**Solution:**

Given: h = 1.2 m, v₀ₓ = 3.0 m/s, v₀ᵧ = 0 (horizontal launch), g = 10 m/s²

(a) **Time to hit ground:**
Using Δy = v₀ᵧt + ½gt² (taking down as positive)
1.2 = 0 + ½(10)t²
1.2 = 5t²
t² = 0.24
t = **0.49 s** or **0.5 s**

(b) **Horizontal distance:**
x = v₀ₓt = 3.0 × 0.49 = **1.47 m** or **1.5 m**

(c) **Velocity at impact:**
Horizontal: vₓ = v₀ₓ = **3.0 m/s** (constant)
Vertical: vᵧ = v₀ᵧ + gt = 0 + 10(0.49) = **4.9 m/s** (downward)

Magnitude: v = √(vₓ² + vᵧ²) = √(3.0² + 4.9²) = √(9 + 24) = **5.7 m/s**

Direction: θ = tan⁻¹(vᵧ/vₓ) = tan⁻¹(4.9/3.0) = **59° below horizontal**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Projectile Motion')
  }

  // Topic 4: Newton's First and Second Laws
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'newtons-first-second-laws' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 5.0 kg box is pushed across a frictionless floor with a force of 20 N. (a) What is the acceleration of the box? (b) If the box starts from rest, what is its velocity after 3.0 seconds? (c) How far has it traveled in this time?`,
          solution: `**Solution:**

Given: m = 5.0 kg, F = 20 N, friction = 0

(a) **Acceleration:**
Using Newton's 2nd Law: F_net = ma
20 = 5.0a
a = **4.0 m/s²**

(b) **Velocity after 3.0 s:**
Using v = v₀ + at
v = 0 + 4.0(3.0)
v = **12 m/s**

(c) **Distance traveled:**
Using Δx = v₀t + ½at²
Δx = 0 + ½(4.0)(3.0)²
Δx = 2.0(9.0)
Δx = **18 m**`,
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Three forces act on a 2.0 kg object: F₁ = 10 N east, F₂ = 8.0 N north, and F₃ = 6.0 N west. (a) Find the net force (magnitude and direction). (b) Find the acceleration of the object. (c) If the object starts from rest, what is its velocity after 5.0 seconds?`,
          solution: `**Solution:**

(a) **Net force:**
Choose coordinate system: +x = east, +y = north

F_net,x = F₁ - F₃ = 10 - 6.0 = 4.0 N (east)
F_net,y = F₂ = 8.0 N (north)

Magnitude: F_net = √(4.0² + 8.0²) = √(16 + 64) = √80 = **8.9 N**

Direction: θ = tan⁻¹(F_y/F_x) = tan⁻¹(8.0/4.0) = tan⁻¹(2) = **63° north of east**

(b) **Acceleration:**
F_net = ma
8.9 = 2.0a
a = **4.5 m/s²** (in direction of F_net)

(c) **Velocity after 5.0 s:**
v = v₀ + at = 0 + 4.5(5.0) = **22.5 m/s** at **63° north of east**

Components: vₓ = 4.0/2.0 × 5.0 = 10 m/s, vᵧ = 8.0/2.0 × 5.0 = 20 m/s`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Newton\'s First and Second Laws')
  }

  // Topic 5: Newton's Third Law
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'newtons-third-law' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 1000 kg car pulls a 500 kg trailer with an acceleration of 2.0 m/s². Assume no friction. (a) What is the net force on the car-trailer system? (b) What force does the car's engine produce? (c) What is the tension in the connection between the car and trailer?`,
          solution: `**Solution:**

Given: m_car = 1000 kg, m_trailer = 500 kg, a = 2.0 m/s²

(a) **Net force on system:**
Total mass = 1000 + 500 = 1500 kg
F_net = m_total × a = 1500 × 2.0 = **3000 N**

(b) **Engine force:**
Since there's no friction, the engine force equals the net force:
F_engine = **3000 N**

(c) **Tension in connection:**
Consider just the trailer (free body diagram):
F_net on trailer = m_trailer × a
T = 500 × 2.0 = **1000 N**

**Check:** Consider the car alone:
F_engine - T = m_car × a
3000 - T = 1000 × 2.0
T = 3000 - 2000 = 1000 N ✓

By Newton's 3rd Law, the trailer pulls back on the car with 1000 N.`,
        },
        {
          topicId: topic5.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `You push on a wall with a force of 100 N. (a) What force does the wall exert on you? (b) If you and the wall don't move, explain why the forces are balanced. (c) Why don't the action-reaction pair cancel each other out?`,
          solution: `**Solution:**

(a) **Force from wall:**
By Newton's 3rd Law, the wall pushes back on you with **100 N** in the opposite direction.

(b) **Why balanced (no movement):**
The forces ARE balanced, but we must consider all forces:
- Force you exert on wall: 100 N (action)
- Force wall exerts on you: 100 N (reaction)

However, these act on DIFFERENT objects:
- On YOU: Wall pushes you backward (100 N). But friction from ground pushes you forward (100 N). Net force on you = 0.
- On WALL: You push forward (100 N). But the wall's foundation pushes it backward (100 N). Net force on wall = 0.

(c) **Why action-reaction don't cancel:**
Newton's 3rd Law pairs:
- Act on **different objects**
- Cannot be added together because they're not acting on the same object
- Only forces on the SAME object can cancel

The 100 N on you and 100 N on wall are separate - they don't cancel because they're on different objects!`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Newton\'s Third Law')
  }

  // Topic 6: Friction
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'friction' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 10 kg box rests on a horizontal floor with μₛ = 0.50 and μₖ = 0.30. (a) What is the maximum static friction force? (b) What minimum force is needed to start the box moving? (c) Once moving, what force is needed to keep it moving at constant velocity?`,
          solution: `**Solution:**

Given: m = 10 kg, μₛ = 0.50, μₖ = 0.30, g = 10 m/s²

(a) **Maximum static friction:**
Normal force: N = mg = 10 × 10 = 100 N
f_s,max = μₛN = 0.50 × 100 = **50 N**

(b) **Force to start moving:**
To overcome static friction: F_min = f_s,max = **50 N**

(c) **Force for constant velocity:**
At constant velocity, a = 0, so F_applied = f_k
f_k = μₖN = 0.30 × 100 = **30 N**

**Note:** Less force is needed to keep it moving (30 N) than to start it (50 N) because μₖ < μₛ.`,
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 5.0 kg block on a horizontal surface is pulled by a 40 N force at 30° above the horizontal. The coefficient of kinetic friction is μₖ = 0.25. (a) Find the normal force. (b) Find the friction force. (c) Find the block's acceleration.`,
          solution: `**Solution:**

Given: m = 5.0 kg, F = 40 N at 30°, μₖ = 0.25, g = 10 m/s²

**Force components:**
F_x = F cos 30° = 40(0.866) = 34.6 N
F_y = F sin 30° = 40(0.50) = 20 N (upward)

(a) **Normal force:**
Vertical equilibrium (a_y = 0):
N + F_y = mg
N = mg - F_y = 5.0(10) - 20 = **30 N**

(b) **Friction force:**
f_k = μₖN = 0.25 × 30 = **7.5 N** (opposing motion)

(c) **Acceleration:**
Horizontal direction:
F_net,x = F_x - f_k = ma
34.6 - 7.5 = 5.0a
27.1 = 5.0a
a = **5.4 m/s²**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Friction')
  }

  // Topic 7: Work and Kinetic Energy
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'work-and-kinetic-energy' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 2.0 kg block is pushed 5.0 m across a floor by a constant 15 N force parallel to the floor. (a) How much work is done by the applied force? (b) If the block starts from rest, what is its final kinetic energy? (c) What is its final speed?`,
          solution: `**Solution:**

Given: m = 2.0 kg, d = 5.0 m, F = 15 N, v₀ = 0

(a) **Work done:**
W = Fd cos θ (θ = 0° since force is parallel to displacement)
W = 15 × 5.0 × cos 0°
W = 15 × 5.0 × 1
W = **75 J**

(b) **Final kinetic energy:**
Assuming no friction, by Work-Energy Theorem:
W_net = ΔKE = KE_f - KE_i
75 = KE_f - 0
KE_f = **75 J**

(c) **Final speed:**
KE = ½mv²
75 = ½(2.0)v²
75 = v²
v = **8.7 m/s**`,
        },
        {
          topicId: topic7.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 3.0 kg box is pulled 8.0 m up a frictionless 30° incline by a force of 25 N parallel to the incline. (a) Find the work done by the applied force. (b) Find the work done by gravity. (c) Find the net work. (d) If the box starts from rest, what is its final speed?`,
          solution: `**Solution:**

Given: m = 3.0 kg, d = 8.0 m, F = 25 N, θ = 30°, g = 10 m/s²

(a) **Work by applied force:**
W_F = Fd cos 0° = 25 × 8.0 = **200 J**

(b) **Work by gravity:**
Vertical height: h = d sin 30° = 8.0 × 0.5 = 4.0 m
Weight: mg = 3.0 × 10 = 30 N (downward)
Angle between F_g and displacement = 180° - 30° = 150°

W_g = mgd cos 150° = 30 × 8.0 × (-cos 30°)
W_g = 30 × 8.0 × (-0.866) = **-208 J**

Or: W_g = -mgh = -30 × 4.0 = -120 J ✓ (simpler method)

(c) **Net work:**
W_net = W_F + W_g = 200 + (-120) = **80 J**

(d) **Final speed:**
W_net = ΔKE = ½mv² - 0
80 = ½(3.0)v²
v² = 160/3 = 53.3
v = **7.3 m/s**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Work and Kinetic Energy')
  }

  // Topic 8: Conservation of Energy
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'conservation-of-energy' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 0.50 kg ball is dropped from a height of 10 m. Ignore air resistance. (a) What is its initial potential energy? (b) What is its kinetic energy just before hitting the ground? (c) What is its speed just before impact?`,
          solution: `**Solution:**

Given: m = 0.50 kg, h = 10 m, g = 10 m/s²

(a) **Initial potential energy:**
PE_i = mgh = 0.50 × 10 × 10 = **50 J**
(KE_i = 0 since dropped from rest)

(b) **Kinetic energy at ground:**
By conservation of energy: E_total = constant
PE_i + KE_i = PE_f + KE_f
50 + 0 = 0 + KE_f
KE_f = **50 J**

(c) **Speed at impact:**
KE_f = ½mv²
50 = ½(0.50)v²
50 = 0.25v²
v² = 200
v = **14.1 m/s** or **14 m/s**

**Check using kinematics:** v² = v₀² + 2gh = 0 + 2(10)(10) = 200 → v = 14.1 m/s ✓`,
        },
        {
          topicId: topic8.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 2.0 kg block slides down a frictionless curved ramp from a height of 5.0 m. At the bottom, it encounters a horizontal surface with μₖ = 0.40. (a) What is the block's speed at the bottom of the ramp? (b) How far does it slide on the horizontal surface before stopping?`,
          solution: `**Solution:**

Given: m = 2.0 kg, h = 5.0 m, μₖ = 0.40, g = 10 m/s²

(a) **Speed at bottom (frictionless ramp):**
Conservation of energy:
PE_top = KE_bottom
mgh = ½mv²
gh = ½v²
v² = 2gh = 2(10)(5.0) = 100
v = **10 m/s**

(b) **Distance on horizontal surface:**
On horizontal surface, friction does negative work:
KE_bottom = W_friction
½mv² = f_k × d

Friction force: f_k = μₖN = μₖmg = 0.40(2.0)(10) = 8.0 N

½(2.0)(10)² = 8.0 × d
100 = 8.0d
d = **12.5 m**

**Alternative using kinematics:**
Deceleration: a = -f_k/m = -8.0/2.0 = -4.0 m/s²
v² = v₀² + 2ad
0 = (10)² + 2(-4.0)d
8d = 100
d = 12.5 m ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Conservation of Energy')
  }

  // Topic 9: Uniform Circular Motion
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'uniform-circular-motion' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A car travels at a constant speed of 20 m/s around a circular track with radius 50 m. (a) What is the car's centripetal acceleration? (b) What is the period of one complete lap? (c) What is the frequency of rotation?`,
          solution: `**Solution:**

Given: v = 20 m/s, r = 50 m

(a) **Centripetal acceleration:**
a_c = v²/r = (20)²/50 = 400/50 = **8.0 m/s²** (toward center)

(b) **Period:**
Circumference = 2πr = 2π(50) = 100π m
Period T = distance/speed = 100π/20 = 5π = **15.7 s**

(c) **Frequency:**
f = 1/T = 1/(5π) = **0.064 Hz** or **0.064 rev/s**

**Note:** Even though speed is constant, velocity changes direction, creating acceleration toward the center.`,
        },
        {
          topicId: topic9.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 0.50 kg ball on a string is whirled in a horizontal circle of radius 1.2 m. The ball makes 2.0 revolutions per second. (a) What is the ball's speed? (b) What is the centripetal acceleration? (c) What is the tension in the string?`,
          solution: `**Solution:**

Given: m = 0.50 kg, r = 1.2 m, f = 2.0 rev/s

(a) **Speed:**
Period T = 1/f = 1/2.0 = 0.50 s
Circumference = 2πr = 2π(1.2) = 2.4π m
v = 2πr/T = 2.4π/0.50 = 4.8π = **15.1 m/s**

(b) **Centripetal acceleration:**
a_c = v²/r = (15.1)²/1.2 = 228/1.2 = **190 m/s²**

Or: a_c = 4π²r/T² = 4π²(1.2)/(0.50)² = 190 m/s² ✓

(c) **Tension:**
For horizontal circular motion, tension provides centripetal force:
F_c = ma_c
T = 0.50 × 190 = **95 N**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Uniform Circular Motion')
  }

  // Topic 10: Momentum and Impulse
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'momentum-and-impulse' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 0.15 kg baseball traveling at 40 m/s is hit by a bat and reverses direction, leaving at 50 m/s. The bat is in contact with the ball for 0.001 seconds. (a) What is the change in momentum? (b) What is the impulse on the ball? (c) What is the average force exerted by the bat?`,
          solution: `**Solution:**

Given: m = 0.15 kg, v_i = 40 m/s, v_f = -50 m/s (reversed), Δt = 0.001 s

(a) **Change in momentum:**
Choose initial direction as positive.
p_i = mv_i = 0.15 × 40 = 6.0 kg·m/s
p_f = mv_f = 0.15 × (-50) = -7.5 kg·m/s
Δp = p_f - p_i = -7.5 - 6.0 = **-13.5 kg·m/s**

Magnitude: |Δp| = 13.5 kg·m/s

(b) **Impulse:**
J = Δp = **-13.5 kg·m/s** (or 13.5 kg·m/s in direction of bat)

(c) **Average force:**
J = F_avg Δt
-13.5 = F_avg (0.001)
F_avg = **-13,500 N** or **1.35 × 10⁴ N**

The negative sign indicates force is in direction of final velocity (opposite to initial).`,
        },
        {
          topicId: topic10.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 1200 kg car traveling at 25 m/s crashes into a barrier and comes to rest in 0.10 seconds. (a) What is the impulse on the car? (b) What is the average force on the car? (c) How would increasing the crash time to 0.20 s affect the average force?`,
          solution: `**Solution:**

Given: m = 1200 kg, v_i = 25 m/s, v_f = 0, Δt = 0.10 s

(a) **Impulse:**
J = Δp = m(v_f - v_i) = 1200(0 - 25) = **-30,000 kg·m/s**
Magnitude: 3.0 × 10⁴ kg·m/s

(b) **Average force:**
J = F_avg Δt
-30,000 = F_avg (0.10)
F_avg = **-300,000 N** or **-3.0 × 10⁵ N**
Magnitude: 3.0 × 10⁵ N (opposing motion)

(c) **Effect of longer crash time:**
If Δt = 0.20 s:
F_avg = J/Δt = -30,000/0.20 = **-150,000 N** or **-1.5 × 10⁵ N**

**Conclusion:** Doubling the crash time **halves the average force**. This is why cars have crumple zones - they increase collision time, reducing force on passengers.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Momentum and Impulse')
  }

  // Topic 11: Conservation of Momentum
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'conservation-of-momentum' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 1500 kg car traveling east at 20 m/s collides with a 2000 kg truck traveling west at 10 m/s. They stick together after the collision. (a) What is the total momentum before the collision? (b) What is their velocity after the collision?`,
          solution: `**Solution:**

Given: m₁ = 1500 kg, v₁ = +20 m/s (east), m₂ = 2000 kg, v₂ = -10 m/s (west)

(a) **Total momentum before:**
p_total = m₁v₁ + m₂v₂
p_total = 1500(20) + 2000(-10)
p_total = 30,000 - 20,000
p_total = **10,000 kg·m/s east**

(b) **Velocity after collision:**
Conservation of momentum: p_before = p_after
10,000 = (m₁ + m₂)v_f
10,000 = (1500 + 2000)v_f
10,000 = 3500v_f
v_f = **2.86 m/s east** (or **2.9 m/s east**)

The combined wreckage moves east at 2.9 m/s.`,
        },
        {
          topicId: topic11.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 60 kg astronaut floating in space throws a 2.0 kg tool at 15 m/s. (a) What is the astronaut's recoil velocity? (b) If the astronaut catches the tool coming back at the same speed, what is the final velocity of the astronaut+tool system?`,
          solution: `**Solution:**

(a) **Recoil velocity:**
Initial momentum = 0 (both at rest)
Conservation of momentum:
0 = m_astronaut × v_a + m_tool × v_t
0 = 60v_a + 2.0(15)
0 = 60v_a + 30
v_a = -30/60 = **-0.50 m/s**

The astronaut moves backward at 0.50 m/s.

(b) **Final velocity after catching:**
Before catch:
- Astronaut: 60 kg at -0.50 m/s → p = -30 kg·m/s
- Tool: 2.0 kg at -15 m/s (coming back) → p = -30 kg·m/s
- Total: p = -60 kg·m/s

After catch (inelastic collision):
p_total = (m_a + m_t)v_f
-60 = (60 + 2.0)v_f
v_f = -60/62 = **-0.97 m/s**

Both move backward together at 0.97 m/s.`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Conservation of Momentum')
  }

  // Topic 12: Collisions
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'collisions' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 3.0 kg ball moving at 8.0 m/s collides head-on with a 5.0 kg ball at rest. The collision is elastic. (a) Find the final velocity of each ball. (b) Verify that kinetic energy is conserved.`,
          solution: `**Solution:**

Given: m₁ = 3.0 kg, v₁ᵢ = 8.0 m/s, m₂ = 5.0 kg, v₂ᵢ = 0

For elastic collision with one object initially at rest:

v₁f = ((m₁ - m₂)/(m₁ + m₂))v₁ᵢ = ((3.0 - 5.0)/(3.0 + 5.0))(8.0)
v₁f = (-2.0/8.0)(8.0) = **-2.0 m/s** (bounces back)

v₂f = (2m₁/(m₁ + m₂))v₁ᵢ = (2(3.0)/(8.0))(8.0)
v₂f = (6.0/8.0)(8.0) = **6.0 m/s**

(b) **Check KE conservation:**
KE_i = ½m₁v₁ᵢ² = ½(3.0)(8.0)² = 96 J

KE_f = ½m₁v₁f² + ½m₂v₂f²
KE_f = ½(3.0)(2.0)² + ½(5.0)(6.0)²
KE_f = 6.0 + 90 = 96 J ✓

Kinetic energy is conserved!`,
        },
        {
          topicId: topic12.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 0.20 kg ball moving at 5.0 m/s collides with a 0.30 kg ball initially at rest. After the collision, the 0.20 kg ball moves at 2.0 m/s at 60° to its original direction. (a) Find the velocity of the 0.30 kg ball after collision. (b) Is this collision elastic or inelastic?`,
          solution: `**Solution:**

Given: m₁ = 0.20 kg, v₁ᵢ = 5.0 m/s, m₂ = 0.30 kg, v₂ᵢ = 0
After: v₁f = 2.0 m/s at 60°

(a) **Velocity of m₂:**
Conservation of momentum (x-direction):
m₁v₁ᵢ = m₁v₁f cos 60° + m₂v₂f,x
0.20(5.0) = 0.20(2.0)(0.5) + 0.30v₂f,x
1.0 = 0.20 + 0.30v₂f,x
v₂f,x = 2.67 m/s

Conservation of momentum (y-direction):
0 = m₁v₁f sin 60° + m₂v₂f,y
0 = 0.20(2.0)(0.866) + 0.30v₂f,y
v₂f,y = -1.15 m/s

Magnitude: v₂f = √(2.67² + 1.15²) = **2.9 m/s**
Direction: θ = tan⁻¹(1.15/2.67) = **23° below original direction**

(b) **Elastic or inelastic?**
KE_i = ½(0.20)(5.0)² = 2.5 J
KE_f = ½(0.20)(2.0)² + ½(0.30)(2.9)² = 0.40 + 1.26 = 1.66 J

KE lost = 2.5 - 1.66 = 0.84 J
**Inelastic collision** (KE not conserved)`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Collisions')
  }

  // Topic 13: Torque and Equilibrium
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'torque-and-equilibrium' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A 4.0 m uniform beam with mass 20 kg is supported at its center. A 30 kg child sits 1.5 m from the center on one side. How far from the center must a 40 kg child sit on the other side to balance the beam?`,
          solution: `**Solution:**

Given: L = 4.0 m, m_beam = 20 kg, m₁ = 30 kg at r₁ = 1.5 m, m₂ = 40 kg at r₂ = ?

**For equilibrium: Στ = 0** (about the pivot)

The beam's weight acts at center (pivot), so creates no torque.

Clockwise torque = Counterclockwise torque
m₁gr₁ = m₂gr₂
30(1.5) = 40r₂
45 = 40r₂
r₂ = **1.125 m** or **1.1 m**

The 40 kg child must sit 1.1 m from center on the opposite side.`,
        },
        {
          topicId: topic13.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 5.0 m ladder of mass 15 kg leans against a frictionless wall at 60° to the horizontal. The center of mass is at the midpoint. (a) Find the normal force from the wall. (b) Find the normal force from the ground. (c) Find the minimum coefficient of static friction needed at the ground.`,
          solution: `**Solution:**

Given: L = 5.0 m, m = 15 kg, θ = 60°, g = 10 m/s²

Let N_w = normal from wall, N_g = normal from ground, f = friction

(a) **Normal force from wall:**
Sum torques about bottom (eliminates N_g and f):
Clockwise: mg(L/2)cos θ = 15(10)(2.5)cos 60° = 375(0.5) = 187.5 N·m
Counterclockwise: N_w(L sin θ) = N_w(5.0)(0.866) = 4.33N_w

187.5 = 4.33N_w
N_w = **43.3 N** or **43 N**

(b) **Normal force from ground:**
Vertical equilibrium: ΣF_y = 0
N_g = mg = 15(10) = **150 N**

(c) **Friction coefficient:**
Horizontal equilibrium: ΣF_x = 0
f = N_w = 43.3 N

For no slipping: f ≤ μₛN_g
43.3 ≤ μₛ(150)
μₛ ≥ 43.3/150 = **0.29**

Minimum μₛ = **0.29**`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Torque and Equilibrium')
  }

  // Topic 14: Rotational Kinematics
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'rotational-kinematics' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A wheel starts from rest and accelerates uniformly to 120 rpm in 8.0 seconds. (a) What is the angular acceleration in rad/s²? (b) How many revolutions does it make during this time? (c) What is the final angular velocity in rad/s?`,
          solution: `**Solution:**

Given: ω₀ = 0, ω_f = 120 rpm, t = 8.0 s

(a) **Angular acceleration:**
Convert to rad/s: ω_f = 120 rev/min × (2π rad/rev) × (1 min/60 s) = 4π rad/s

α = (ω_f - ω₀)/t = (4π - 0)/8.0 = **1.57 rad/s²** or **π/2 rad/s²**

(b) **Number of revolutions:**
θ = ω₀t + ½αt² = 0 + ½(π/2)(8.0)²
θ = ½(π/2)(64) = 16π rad

Convert to revolutions: 16π rad × (1 rev/2π rad) = **8.0 rev**

(c) **Final angular velocity:**
ω_f = 4π = **12.6 rad/s**

Or 120 rpm as given.`,
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A merry-go-round with radius 2.0 m rotates at 0.50 rev/s. A child stands at the outer edge. (a) What is the child's angular velocity? (b) What is the child's tangential (linear) speed? (c) What is the child's centripetal acceleration?`,
          solution: `**Solution:**

Given: r = 2.0 m, f = 0.50 rev/s

(a) **Angular velocity:**
ω = 2πf = 2π(0.50) = **π rad/s** or **3.14 rad/s**

(b) **Tangential speed:**
v = rω = 2.0(π) = **2π m/s** or **6.28 m/s**

(c) **Centripetal acceleration:**
a_c = v²/r = (2π)²/2.0 = 4π²/2.0 = **19.7 m/s²**

Or: a_c = rω² = 2.0(π)² = 2π² = 19.7 m/s² ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Rotational Kinematics')
  }

  // Topic 15: Introduction to SHM
  const topic15 = await prisma.topic.findUnique({
    where: { slug: 'introduction-to-shm' }
  })

  if (topic15) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic15.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `A mass on a spring oscillates with amplitude 0.10 m and frequency 2.0 Hz. (a) What is the period? (b) What is the maximum speed? (c) What is the maximum acceleration?`,
          solution: `**Solution:**

Given: A = 0.10 m, f = 2.0 Hz

(a) **Period:**
T = 1/f = 1/2.0 = **0.50 s**

(b) **Maximum speed:**
Angular frequency: ω = 2πf = 2π(2.0) = 4π rad/s
v_max = Aω = 0.10(4π) = **1.26 m/s** or **0.4π m/s**

(c) **Maximum acceleration:**
a_max = Aω² = 0.10(4π)² = 0.10(16π²)
a_max = **15.8 m/s²** or **1.6π² m/s²**

**Note:** Maximum speed occurs at equilibrium (x = 0), maximum acceleration at maximum displacement (x = ±A).`,
        },
        {
          topicId: topic15.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `A 0.50 kg mass on a spring oscillates with amplitude 0.15 m. At a displacement of 0.10 m from equilibrium, the speed is 0.80 m/s. (a) Find the angular frequency. (b) Find the spring constant. (c) Find the period.`,
          solution: `**Solution:**

Given: m = 0.50 kg, A = 0.15 m, at x = 0.10 m, v = 0.80 m/s

(a) **Angular frequency:**
For SHM: v² = ω²(A² - x²)
(0.80)² = ω²[(0.15)² - (0.10)²]
0.64 = ω²[0.0225 - 0.0100]
0.64 = ω²(0.0125)
ω² = 51.2
ω = **7.16 rad/s** or **7.2 rad/s**

(b) **Spring constant:**
ω = √(k/m)
7.16 = √(k/0.50)
51.2 = k/0.50
k = **25.6 N/m** or **26 N/m**

(c) **Period:**
T = 2π/ω = 2π/7.16 = **0.88 s**

Or: T = 2π√(m/k) = 2π√(0.50/25.6) = 0.88 s ✓`,
        },
      ]
    })
    console.log('✓ Added 2 problems to: Introduction to SHM')
  }

  console.log('\n✅ Successfully added example problems to Physics 1 topics!')
  console.log('Total: 30 example problems added to 15 AP Physics 1 topics')
  console.log('Coverage: Kinematics, dynamics, energy, circular motion, momentum, collisions, rotation, SHM')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
