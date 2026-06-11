import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: Mechanics - Kinematics and Dynamics...')

  // Get the AP Physics C: Mechanics course
  const mechCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-mechanics' }
  })

  if (!mechCourse) {
    throw new Error('AP Physics C: Mechanics course not found')
  }

  // Category 1: Calculus-Based Kinematics
  const kinematicsCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-kinematics' },
    update: {},
    create: {
      slug: 'physics-c-mech-kinematics',
      name: 'Kinematics',
      description: 'Calculus-based motion analysis in one and two dimensions',
      order: 1,
      courseId: mechCourse.id
    }
  })

  // Topic 1: Position, Velocity, and Acceleration
  const positionVelocityTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-position-velocity-acceleration' },
    update: {},
    create: {
      slug: 'physics-c-position-velocity-acceleration',
      title: 'Position, Velocity, and Acceleration',
      description: 'Derivatives and integrals in kinematics',
      order: 1,
      categoryId: kinematicsCategory.id,
      isPremium: false,
      textContent: `
# Position, Velocity, and Acceleration

## Fundamental Relationships

Position, velocity, and acceleration are related through calculus:

**Velocity as derivative of position:**
$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt}$$

**Acceleration as derivative of velocity:**
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}$$

**Position from velocity (integration):**
$$\\vec{r}(t) = \\vec{r}_0 + \\int_{t_0}^{t} \\vec{v}(t') \\, dt'$$

**Velocity from acceleration (integration):**
$$\\vec{v}(t) = \\vec{v}_0 + \\int_{t_0}^{t} \\vec{a}(t') \\, dt'$$

## One-Dimensional Motion

For motion along a straight line (x-axis):

**Position function:** $x(t)$

**Velocity:** $v_x(t) = \\frac{dx}{dt}$

**Acceleration:** $a_x(t) = \\frac{dv_x}{dt} = \\frac{d^2x}{dt^2}$

### Example: Polynomial Position Function

If $x(t) = 3t^3 - 2t^2 + 5t + 1$ (in meters), then:

**Velocity:**
$$v_x = \\frac{dx}{dt} = 9t^2 - 4t + 5 \\text{ m/s}$$

**Acceleration:**
$$a_x = \\frac{dv_x}{dt} = 18t - 4 \\text{ m/s}^2$$

## Two-Dimensional Motion

Position vector in 2D:
$$\\vec{r}(t) = x(t)\\hat{i} + y(t)\\hat{j}$$

**Velocity vector:**
$$\\vec{v}(t) = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j} = v_x\\hat{i} + v_y\\hat{j}$$

**Acceleration vector:**
$$\\vec{a}(t) = \\frac{dv_x}{dt}\\hat{i} + \\frac{dv_y}{dt}\\hat{j} = a_x\\hat{i} + a_y\\hat{j}$$

**Speed (magnitude of velocity):**
$$v = |\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$

## Projectile Motion

For projectile motion with no air resistance:

**Horizontal component:** 
- $a_x = 0$
- $v_x = v_{0x} = v_0\\cos\\theta$ (constant)
- $x(t) = x_0 + v_{0x}t$

**Vertical component:**
- $a_y = -g$
- $v_y(t) = v_{0y} - gt = v_0\\sin\\theta - gt$
- $y(t) = y_0 + v_{0y}t - \\frac{1}{2}gt^2$

## Variable Acceleration

When acceleration is a function of time, $a(t)$:

$$v(t) = v_0 + \\int_0^t a(t') \\, dt'$$

$$x(t) = x_0 + \\int_0^t v(t') \\, dt'$$

### Example: Time-Dependent Acceleration

If $a(t) = 6t - 4$ m/s², and $v_0 = 2$ m/s, $x_0 = 0$:

$$v(t) = 2 + \\int_0^t (6t' - 4) \\, dt' = 2 + 3t^2 - 4t$$

$$x(t) = \\int_0^t (2 + 3t'^2 - 4t') \\, dt' = 2t + t^3 - 2t^2$$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: positionVelocityTopic.id,
        front: 'What is the relationship between velocity and position?',
        back: 'Velocity is the time derivative of position: v = dr/dt. Position is the integral of velocity: r = r₀ + ∫v dt'
      },
      {
        topicId: positionVelocityTopic.id,
        front: 'What is the relationship between acceleration and velocity?',
        back: 'Acceleration is the time derivative of velocity: a = dv/dt. Velocity is the integral of acceleration: v = v₀ + ∫a dt'
      },
      {
        topicId: positionVelocityTopic.id,
        front: 'How do you find velocity from a position function x(t)?',
        back: 'Take the derivative: v = dx/dt. For example, if x = 3t² + 2t, then v = 6t + 2'
      },
      {
        topicId: positionVelocityTopic.id,
        front: 'How do you find position from a velocity function?',
        back: 'Integrate the velocity function: x(t) = x₀ + ∫v(t) dt. Use initial position x₀ as the constant of integration'
      },
      {
        topicId: positionVelocityTopic.id,
        front: 'What is the second derivative of position with respect to time?',
        back: 'Acceleration: a = d²x/dt² = d/dt(dx/dt) = dv/dt'
      }
    ]
  })

  console.log('✓ Created topic: Position, Velocity, and Acceleration')

  // Topic 2: Motion with Variable Acceleration
  const variableAccelTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-variable-acceleration' },
    update: {},
    create: {
      slug: 'physics-c-variable-acceleration',
      title: 'Motion with Variable Acceleration',
      description: 'Solving kinematics problems when acceleration depends on time, position, or velocity',
      order: 2,
      categoryId: kinematicsCategory.id,
      isPremium: false,
      textContent: `
# Motion with Variable Acceleration

## Acceleration as a Function of Time: a(t)

When acceleration varies with time:

$$v(t) = v_0 + \\int_{t_0}^t a(t') \\, dt'$$

$$x(t) = x_0 + \\int_{t_0}^t v(t') \\, dt'$$

### Example: Linear Time Dependence

If $a(t) = At + B$ where $A$ and $B$ are constants:

$$v(t) = v_0 + \\int_0^t (At' + B) \\, dt' = v_0 + \\frac{1}{2}At^2 + Bt$$

$$x(t) = x_0 + \\int_0^t \\left(v_0 + \\frac{1}{2}At'^2 + Bt'\\right) dt' = x_0 + v_0t + \\frac{1}{6}At^3 + \\frac{1}{2}Bt^2$$

## Acceleration as a Function of Position: a(x)

When acceleration depends on position, use the chain rule:

$$a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v\\frac{dv}{dx}$$

Therefore:
$$v \\, dv = a(x) \\, dx$$

Integrating both sides:
$$\\int_{v_0}^v v' \\, dv' = \\int_{x_0}^x a(x') \\, dx'$$

$$\\frac{1}{2}(v^2 - v_0^2) = \\int_{x_0}^x a(x') \\, dx'$$

### Example: Spring Force

For a spring with $a = -\\frac{k}{m}x$:

$$v \\, dv = -\\frac{k}{m}x \\, dx$$

$$\\int_{v_0}^v v' \\, dv' = -\\frac{k}{m}\\int_{x_0}^x x' \\, dx'$$

$$\\frac{1}{2}(v^2 - v_0^2) = -\\frac{k}{2m}(x^2 - x_0^2)$$

$$v^2 = v_0^2 - \\frac{k}{m}(x^2 - x_0^2)$$

## Acceleration as a Function of Velocity: a(v)

When acceleration depends on velocity:

$$a = \\frac{dv}{dt} = a(v)$$

Separate variables:
$$\\frac{dv}{a(v)} = dt$$

Integrate:
$$\\int_{v_0}^v \\frac{dv'}{a(v')} = \\int_0^t dt' = t$$

### Example: Linear Drag Force

For drag force $a = -bv$ (where $b > 0$):

$$\\frac{dv}{dt} = -bv$$

$$\\frac{dv}{v} = -b \\, dt$$

$$\\int_{v_0}^v \\frac{dv'}{v'} = -b\\int_0^t dt'$$

$$\\ln\\frac{v}{v_0} = -bt$$

$$v(t) = v_0e^{-bt}$$

To find position, integrate velocity:

$$x(t) = \\int_0^t v_0e^{-bt'} \\, dt' = \\frac{v_0}{b}(1 - e^{-bt})$$

## Quadratic Drag Force

For drag proportional to $v^2$: $a = -bv^2$

$$\\frac{dv}{dt} = -bv^2$$

$$\\int_{v_0}^v \\frac{dv'}{v'^2} = -b\\int_0^t dt'$$

$$-\\frac{1}{v} + \\frac{1}{v_0} = -bt$$

$$v(t) = \\frac{v_0}{1 + bv_0t}$$

## Falling with Air Resistance

Terminal velocity occurs when drag force equals gravitational force:

For linear drag: $a = g - bv$

At terminal velocity: $v_t = \\frac{g}{b}$

General solution:
$$v(t) = v_t(1 - e^{-bt}) + v_0e^{-bt}$$

For quadratic drag: $a = g - bv^2$

Terminal velocity: $v_t = \\sqrt{\\frac{g}{b}}$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: variableAccelTopic.id,
        front: 'How do you solve for velocity when a(t) is given?',
        back: 'Integrate acceleration: v(t) = v₀ + ∫a(t) dt. Find the constant using initial conditions.'
      },
      {
        topicId: variableAccelTopic.id,
        front: 'What substitution is used when acceleration depends on position a(x)?',
        back: 'Use a = v(dv/dx), then separate variables: v dv = a(x) dx, and integrate both sides'
      },
      {
        topicId: variableAccelTopic.id,
        front: 'For linear drag force a = -bv, what is the velocity as a function of time?',
        back: 'v(t) = v₀e^(-bt), which shows exponential decay to zero velocity'
      },
      {
        topicId: variableAccelTopic.id,
        front: 'What is terminal velocity for an object falling with linear drag a = g - bv?',
        back: 'Terminal velocity v_t = g/b, where drag force equals gravitational force and acceleration becomes zero'
      },
      {
        topicId: variableAccelTopic.id,
        front: 'How do you separate variables when a(v) is given?',
        back: 'Write dv/dt = a(v), then dv/a(v) = dt, and integrate: ∫dv/a(v) = ∫dt = t'
      }
    ]
  })

  console.log('✓ Created topic: Motion with Variable Acceleration')

  // Topic 3: Circular Motion and Polar Coordinates
  const circularMotionTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-circular-motion' },
    update: {},
    create: {
      slug: 'physics-c-circular-motion',
      title: 'Circular Motion and Polar Coordinates',
      description: 'Centripetal acceleration, angular velocity, and motion in polar coordinates',
      order: 3,
      categoryId: kinematicsCategory.id,
      isPremium: false,
      textContent: `
# Circular Motion and Polar Coordinates

## Uniform Circular Motion

For motion in a circle of radius $r$ at constant speed $v$:

**Centripetal acceleration:**
$$a_c = \\frac{v^2}{r} = \\omega^2 r$$

**Angular velocity:**
$$\\omega = \\frac{v}{r}$$

**Period:**
$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi}{\\omega}$$

## Polar Coordinates

Position in polar coordinates: $(r, \\theta)$

Unit vectors: $\\hat{r}$ (radial), $\\hat{\\theta}$ (tangential)

**Important:** These unit vectors are not constant—they change direction as the particle moves.

**Time derivatives of unit vectors:**
$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\hat{\\theta} = \\omega\\hat{\\theta}$$

$$\\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\hat{r} = -\\omega\\hat{r}$$

## Velocity in Polar Coordinates

Position vector: $\\vec{r} = r\\hat{r}$

Velocity:
$$\\vec{v} = \\frac{d\\vec{r}}{dt} = \\frac{dr}{dt}\\hat{r} + r\\frac{d\\hat{r}}{dt}$$

$$\\vec{v} = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$$

**Radial component:** $v_r = \\dot{r}$

**Tangential component:** $v_{\\theta} = r\\dot{\\theta} = r\\omega$

**Speed:** $v = \\sqrt{v_r^2 + v_{\\theta}^2} = \\sqrt{\\dot{r}^2 + r^2\\dot{\\theta}^2}$

## Acceleration in Polar Coordinates

$$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt}(\\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta})$$

After applying product rule and substituting unit vector derivatives:

$$\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$

**Radial component:** $a_r = \\ddot{r} - r\\omega^2$

**Tangential component:** $a_{\\theta} = r\\alpha + 2\\dot{r}\\omega$

where $\\alpha = \\ddot{\\theta}$ is angular acceleration.

## Circular Motion (r = constant)

When radius is constant ($\\dot{r} = 0$, $\\ddot{r} = 0$):

**Radial acceleration (centripetal):**
$$a_r = -r\\omega^2 = -\\frac{v^2}{r}$$

**Tangential acceleration:**
$$a_{\\theta} = r\\alpha = r\\frac{d\\omega}{dt}$$

The negative sign in $a_r$ indicates the acceleration points toward the center (opposite to $\\hat{r}$).

## Non-Uniform Circular Motion

When speed changes: both centripetal and tangential acceleration exist.

**Centripetal:** changes direction of velocity
**Tangential:** changes magnitude of velocity

Total acceleration magnitude:
$$a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{\\left(\\frac{v^2}{r}\\right)^2 + (r\\alpha)^2}$$

## Example: Spiral Motion

A particle moves in a spiral: $r(t) = bt$, $\\theta(t) = \\omega t$ (both constant $b$ and $\\omega$)

**Position:** $\\vec{r} = bt\\hat{r}$

**Velocity:**
$$\\vec{v} = b\\hat{r} + bt\\omega\\hat{\\theta}$$

**Acceleration:**
$$\\vec{a} = -bt\\omega^2\\hat{r} + 2b\\omega\\hat{\\theta}$$

Notice the $2\\dot{r}\\omega$ term (Coriolis-like term) appears even though $\\alpha = 0$.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: circularMotionTopic.id,
        front: 'What is the centripetal acceleration formula for circular motion?',
        back: 'a_c = v²/r = ω²r, directed toward the center of the circle'
      },
      {
        topicId: circularMotionTopic.id,
        front: 'What are the time derivatives of polar unit vectors?',
        back: 'd(r̂)/dt = ω(θ̂) and d(θ̂)/dt = -ω(r̂), where ω = θ̇'
      },
      {
        topicId: circularMotionTopic.id,
        front: 'What is velocity in polar coordinates?',
        back: 'v⃗ = ṙ(r̂) + rθ̇(θ̂), with radial component ṙ and tangential component rω'
      },
      {
        topicId: circularMotionTopic.id,
        front: 'What is the general acceleration formula in polar coordinates?',
        back: 'a⃗ = (r̈ - rω²)(r̂) + (rα + 2ṙω)(θ̂), where α = θ̈'
      },
      {
        topicId: circularMotionTopic.id,
        front: 'For uniform circular motion (constant r and ω), what is the acceleration?',
        back: 'a⃗ = -rω²(r̂) = -v²/r(r̂), purely centripetal (radial) pointing toward center'
      },
      {
        topicId: circularMotionTopic.id,
        front: 'What causes the 2ṙω term in tangential acceleration?',
        back: 'This Coriolis-like term appears when both radius changes (ṙ ≠ 0) and angular velocity exists, even with constant ω'
      }
    ]
  })

  console.log('✓ Created topic: Circular Motion and Polar Coordinates')

  // Category 2: Newton's Laws and Dynamics
  const dynamicsCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-dynamics' },
    update: {},
    create: {
      slug: 'physics-c-mech-dynamics',
      name: 'Dynamics',
      description: "Newton's laws with calculus, force analysis, and applications",
      order: 2,
      courseId: mechCourse.id
    }
  })

  // Topic 4: Newton's Laws with Calculus
  const newtonsLawsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-newtons-laws-calculus' },
    update: {},
    create: {
      slug: 'physics-c-newtons-laws-calculus',
      title: "Newton's Laws with Calculus",
      description: 'Force, mass, and acceleration relationships using derivatives and integrals',
      order: 1,
      categoryId: dynamicsCategory.id,
      isPremium: false,
      textContent: `
# Newton's Laws with Calculus

## Newton's Second Law

**Vector form:**
$$\\vec{F}_{net} = m\\vec{a} = m\\frac{d\\vec{v}}{dt} = m\\frac{d^2\\vec{r}}{dt^2}$$

**Component form:**
$$F_x = m\\frac{dv_x}{dt}, \\quad F_y = m\\frac{dv_y}{dt}, \\quad F_z = m\\frac{dv_z}{dt}$$

## Impulse-Momentum Theorem

From Newton's second law:
$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$

where momentum $\\vec{p} = m\\vec{v}$.

Integrating both sides:
$$\\int_{t_1}^{t_2} \\vec{F} \\, dt = \\int_{t_1}^{t_2} \\frac{d\\vec{p}}{dt} \\, dt = \\vec{p}_2 - \\vec{p}_1 = \\Delta \\vec{p}$$

**Impulse:**
$$\\vec{J} = \\int_{t_1}^{t_2} \\vec{F} \\, dt = \\Delta \\vec{p}$$

### Variable Force Example

If $F(t) = F_0\\cos(\\omega t)$ for time $0$ to $T = \\pi/(2\\omega)$:

$$J = \\int_0^T F_0\\cos(\\omega t) \\, dt = \\frac{F_0}{\\omega}\\sin(\\omega t)\\Big|_0^T = \\frac{F_0}{\\omega}$$

## Variable Mass Systems

For systems where mass changes with time (rockets):

$$\\vec{F}_{ext} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt} = m\\frac{d\\vec{v}}{dt} + \\vec{v}\\frac{dm}{dt}$$

**Rocket equation:**
$$m\\frac{dv}{dt} = -v_{rel}\\frac{dm}{dt} + F_{ext}$$

where $v_{rel}$ is exhaust velocity relative to rocket.

For no external forces and integrating:
$$\\Delta v = v_{rel}\\ln\\frac{m_0}{m_f}$$

(Tsiolkovsky rocket equation)

## Drag Forces

**Linear drag:** $F_d = -bv$

$$m\\frac{dv}{dt} = -bv$$

Solution: $v(t) = v_0e^{-bt/m}$

**Quadratic drag:** $F_d = -cv^2$

$$m\\frac{dv}{dt} = -cv^2$$

Separating variables:
$$\\int_{v_0}^v \\frac{dv'}{v'^2} = -\\frac{c}{m}\\int_0^t dt'$$

$$v(t) = \\frac{v_0}{1 + \\frac{cv_0t}{m}}$$

## Falling with Air Resistance

Equation of motion:
$$m\\frac{dv}{dt} = mg - bv$$

Terminal velocity: $v_t = \\frac{mg}{b}$

Rewrite as:
$$\\frac{dv}{dt} = g - \\frac{b}{m}v = \\frac{b}{m}(v_t - v)$$

Solution:
$$v(t) = v_t(1 - e^{-bt/m})$$

## Forces in Polar Coordinates

Newton's second law in polar coordinates:

**Radial direction:**
$$F_r = m(\\ddot{r} - r\\dot{\\theta}^2)$$

**Tangential direction:**
$$F_{\\theta} = m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})$$

### Example: Central Force

For motion under central force (depends only on $r$):

$F_{\\theta} = 0$, so:
$$r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} = 0$$

$$\\frac{d}{dt}(r^2\\dot{\\theta}) = 0$$

This means $r^2\\dot{\\theta} = L/m$ is constant (angular momentum conservation).
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: newtonsLawsTopic.id,
        front: 'What is Newton\'s second law in calculus form?',
        back: 'F⃗ = ma⃗ = m(dv⃗/dt) = m(d²r⃗/dt²), relating force to the time derivatives of velocity or position'
      },
      {
        topicId: newtonsLawsTopic.id,
        front: 'What is the impulse-momentum theorem?',
        back: 'J⃗ = ∫F⃗ dt = Δp⃗. Impulse (integral of force over time) equals change in momentum'
      },
      {
        topicId: newtonsLawsTopic.id,
        front: 'What is the Tsiolkovsky rocket equation?',
        back: 'Δv = v_rel ln(m₀/m_f), relating velocity change to exhaust velocity and mass ratio'
      },
      {
        topicId: newtonsLawsTopic.id,
        front: 'For linear drag F = -bv, what is the velocity as a function of time?',
        back: 'v(t) = v₀e^(-bt/m), exponential decay with time constant m/b'
      },
      {
        topicId: newtonsLawsTopic.id,
        front: 'What is terminal velocity for falling with linear drag?',
        back: 'v_t = mg/b, where drag force equals weight and net force becomes zero'
      },
      {
        topicId: newtonsLawsTopic.id,
        front: 'What does F_θ = 0 imply for central force motion?',
        back: 'Angular momentum is conserved: r²θ̇ = L/m = constant'
      }
    ]
  })

  console.log('✓ Created topic: Newton\'s Laws with Calculus')

  // Topic 5: Friction and Inclined Planes
  const frictionTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-friction-inclines' },
    update: {},
    create: {
      slug: 'physics-c-friction-inclines',
      title: 'Friction and Inclined Planes',
      description: 'Static and kinetic friction, motion on inclines with calculus analysis',
      order: 2,
      categoryId: dynamicsCategory.id,
      isPremium: false,
      textContent: `
# Friction and Inclined Planes

## Friction Forces

**Static friction:** $f_s \\leq \\mu_s N$

**Kinetic friction:** $f_k = \\mu_k N$

where $N$ is the normal force and typically $\\mu_s > \\mu_k$.

## Motion with Friction

For an object sliding with kinetic friction:

$$ma = F_{applied} - f_k = F_{applied} - \\mu_k mg$$

$$\\frac{dv}{dt} = \\frac{F_{applied}}{m} - \\mu_k g$$

### Stopping Distance

Object sliding on horizontal surface with initial velocity $v_0$:

$$a = -\\mu_k g$$

$$v\\frac{dv}{dx} = -\\mu_k g$$

$$\\int_{v_0}^0 v \\, dv = -\\mu_k g \\int_0^d dx$$

$$-\\frac{1}{2}v_0^2 = -\\mu_k gd$$

$$d = \\frac{v_0^2}{2\\mu_k g}$$

## Inclined Planes

For angle $\\theta$ from horizontal:

**Coordinate system:** x-axis along incline (positive down), y-axis perpendicular

**Weight components:**
- Parallel to incline: $F_{\\parallel} = mg\\sin\\theta$
- Perpendicular: $F_{\\perp} = mg\\cos\\theta$

**Normal force:** $N = mg\\cos\\theta$ (when no vertical acceleration)

## Sliding Down Incline

With kinetic friction:

$$ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta$$

$$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$$

**Condition for sliding:** $\\sin\\theta > \\mu_k\\cos\\theta$, or $\\tan\\theta > \\mu_k$

**Velocity after distance $d$:**
$$v^2 = v_0^2 + 2ad = v_0^2 + 2gd(\\sin\\theta - \\mu_k\\cos\\theta)$$

## Critical Angle for Static Friction

Object on the verge of sliding:

$$f_s = \\mu_s N$$

$$mg\\sin\\theta_c = \\mu_s mg\\cos\\theta_c$$

$$\\tan\\theta_c = \\mu_s$$

## Motion with Time-Dependent Force

Force $F(t)$ applied up an incline:

$$m\\frac{dv}{dt} = F(t) - mg\\sin\\theta - \\mu_k mg\\cos\\theta$$

$$v(t) = v_0 + \\int_0^t \\frac{F(t')}{m} \\, dt' - gt(\\sin\\theta + \\mu_k\\cos\\theta)$$

### Example: Exponential Force

If $F(t) = F_0e^{-t/\\tau}$:

$$v(t) = v_0 + \\frac{F_0\\tau}{m}(1 - e^{-t/\\tau}) - gt(\\sin\\theta + \\mu_k\\cos\\theta)$$

## Blocks Connected on Incline

Two blocks (masses $m_1$, $m_2$) connected by rope over pulley:

Block 1 on incline at angle $\\theta$, block 2 hanging vertically.

**Constraint:** $a_1 = a_2 = a$ (magnitude)

**Block 1 (up incline positive):**
$$m_1a = T - m_1g\\sin\\theta - f_k$$

**Block 2 (down positive):**
$$m_2a = m_2g - T$$

Adding equations (T cancels):
$$a = \\frac{m_2g - m_1g\\sin\\theta - \\mu_k m_1g\\cos\\theta}{m_1 + m_2}$$

## Energy Considerations with Friction

Work done by friction:
$$W_f = -f_k \\cdot d = -\\mu_k mgd\\cos\\theta$$

(negative because friction opposes motion)

This work is converted to thermal energy (non-conservative force).
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: frictionTopic.id,
        front: 'What is the difference between static and kinetic friction?',
        back: 'Static friction f_s ≤ μ_s N prevents motion. Kinetic friction f_k = μ_k N opposes motion. Usually μ_s > μ_k.'
      },
      {
        topicId: frictionTopic.id,
        front: 'What is the stopping distance for an object sliding with initial velocity v₀?',
        back: 'd = v₀²/(2μ_k g), derived from v dv/dx = -μ_k g and integrating'
      },
      {
        topicId: frictionTopic.id,
        front: 'What is the acceleration down an incline with friction?',
        back: 'a = g(sinθ - μ_k cosθ). Object slides when tanθ > μ_k'
      },
      {
        topicId: frictionTopic.id,
        front: 'What is the critical angle for an object on the verge of sliding?',
        back: 'tanθ_c = μ_s, where static friction equals the parallel component of weight'
      },
      {
        topicId: frictionTopic.id,
        front: 'Is friction a conservative force?',
        back: 'No, friction is non-conservative. Work done by friction W_f = -f_k·d is converted to thermal energy and depends on path'
      }
    ]
  })

  console.log('✓ Created topic: Friction and Inclined Planes')

  console.log('\n✅ Successfully seeded AP Physics C: Mechanics - Kinematics and Dynamics!')
  console.log('   Topics: 5')
  console.log('   Flashcards: 27')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
