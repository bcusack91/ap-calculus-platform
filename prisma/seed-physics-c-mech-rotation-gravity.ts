import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: Mechanics - Rotation, Oscillations, and Gravitation...')

  // Get the AP Physics C: Mechanics course
  const mechCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-mechanics' }
  })

  if (!mechCourse) {
    throw new Error('AP Physics C: Mechanics course not found')
  }

  // Category 5: Rotational Motion
  const rotationCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-rotation' },
    update: {},
    create: {
      slug: 'physics-c-mech-rotation',
      name: 'Rotational Motion',
      description: 'Rotational kinematics, dynamics, moment of inertia, and angular momentum',
      order: 5,
      courseId: mechCourse.id
    }
  })

  // Topic 10: Rotational Kinematics and Dynamics
  const rotKinematicsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-rotational-kinematics-dynamics' },
    update: {},
    create: {
      slug: 'physics-c-rotational-kinematics-dynamics',
      title: 'Rotational Kinematics and Dynamics',
      description: 'Angular velocity, acceleration, and torque with calculus',
      order: 1,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# Rotational Kinematics and Dynamics

## Angular Quantities

**Angular position:** $\\theta$ (radians)

**Angular velocity:**
$$\\omega = \\frac{d\\theta}{dt}$$

**Angular acceleration:**
$$\\alpha = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}$$

## Relationship to Linear Quantities

For point at distance $r$ from axis:

**Arc length:** $s = r\\theta$

**Linear velocity:** $v = r\\omega$

**Tangential acceleration:** $a_t = r\\alpha$

**Centripetal acceleration:** $a_c = \\frac{v^2}{r} = r\\omega^2$

## Rotational Kinematics

For constant angular acceleration $\\alpha$:

$$\\omega = \\omega_0 + \\alpha t$$

$$\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$$

$$\\omega^2 = \\omega_0^2 + 2\\alpha(\\theta - \\theta_0)$$

(Analogous to linear kinematics)

## Variable Angular Acceleration

When $\\alpha(t)$ is given:

$$\\omega(t) = \\omega_0 + \\int_0^t \\alpha(t') \\, dt'$$

$$\\theta(t) = \\theta_0 + \\int_0^t \\omega(t') \\, dt'$$

When $\\alpha(\\theta)$ is given, use:
$$\\alpha = \\frac{d\\omega}{dt} = \\frac{d\\omega}{d\\theta}\\frac{d\\theta}{dt} = \\omega\\frac{d\\omega}{d\\theta}$$

## Torque

**Definition:**
$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$

**Magnitude:** $\\tau = rF\\sin\\phi$

where $\\phi$ is angle between $\\vec{r}$ and $\\vec{F}$.

**Perpendicular distance form:** $\\tau = r_{\\perp}F = rF_{\\perp}$

## Rotational Dynamics

**Newton's second law for rotation:**
$$\\tau_{net} = I\\alpha$$

where $I$ is moment of inertia.

**Differential form:**
$$\\tau = I\\frac{d\\omega}{dt}$$

## Work and Power in Rotation

**Work by torque:**
$$W = \\int_{\\theta_1}^{\\theta_2} \\tau \\, d\\theta$$

For constant torque:
$$W = \\tau\\Delta\\theta$$

**Rotational power:**
$$P = \\tau\\omega$$

(Analogous to $P = Fv$ for linear motion)

## Rotational Kinetic Energy

$$KE_{rot} = \\frac{1}{2}I\\omega^2$$

**Work-energy theorem:**
$$W_{net} = \\Delta KE_{rot} = \\frac{1}{2}I\\omega_f^2 - \\frac{1}{2}I\\omega_i^2$$

## Combined Translation and Rotation

For rolling object:

**Total kinetic energy:**
$$KE = KE_{trans} + KE_{rot} = \\frac{1}{2}Mv_{cm}^2 + \\frac{1}{2}I_{cm}\\omega^2$$

**Rolling without slipping:**
$$v_{cm} = R\\omega$$

where $R$ is radius.

### Example: Rolling Down Incline

Energy conservation:
$$Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2$$

Using $v = R\\omega$ and $I = \\beta MR^2$:

$$Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}\\beta MR^2\\frac{v^2}{R^2}$$

$$gh = \\frac{1}{2}v^2(1 + \\beta)$$

$$v = \\sqrt{\\frac{2gh}{1 + \\beta}}$$

where $\\beta$ depends on shape:
- Solid cylinder: $\\beta = 1/2$
- Solid sphere: $\\beta = 2/5$
- Hoop: $\\beta = 1$

## Angular Impulse

$$\\int_{t_1}^{t_2} \\tau \\, dt = \\Delta L = I\\Delta\\omega$$

where $L = I\\omega$ is angular momentum.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rotKinematicsTopic.id,
        front: 'How are angular velocity and acceleration defined?',
        back: 'ω = dθ/dt (angular velocity), α = dω/dt = d²θ/dt² (angular acceleration)'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'How are linear and angular quantities related for rotation?',
        back: 's = rθ, v = rω, a_t = rα, a_c = rω² for point at distance r from axis'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'What is torque and how is it calculated?',
        back: 'τ⃗ = r⃗ × F⃗. Magnitude: τ = rF sinφ = r_⊥F = rF_⊥'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'What is Newton\'s second law for rotation?',
        back: 'τ_net = Iα, where I is moment of inertia and α is angular acceleration'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'What is rotational kinetic energy?',
        back: 'KE_rot = ½Iω², analogous to ½mv² for linear motion'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'For an object rolling without slipping, what is the relationship between v and ω?',
        back: 'v_cm = Rω, where R is the radius and v_cm is velocity of center of mass'
      },
      {
        topicId: rotKinematicsTopic.id,
        front: 'What is rotational power?',
        back: 'P = τω, analogous to P = Fv for linear motion'
      }
    ]
  })

  console.log('✓ Created topic: Rotational Kinematics and Dynamics')

  // Topic 11: Moment of Inertia
  const momentInertiaTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-moment-of-inertia' },
    update: {},
    create: {
      slug: 'physics-c-moment-of-inertia',
      title: 'Moment of Inertia',
      description: 'Calculating moment of inertia using integration, parallel axis theorem',
      order: 2,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# Moment of Inertia

## Definition

For discrete point masses:
$$I = \\sum_i m_ir_i^2$$

where $r_i$ is perpendicular distance from rotation axis.

For continuous mass distribution:
$$I = \\int r^2 \\, dm$$

where $r$ is perpendicular distance from axis.

## Common Moments of Inertia

**Thin rod about center:**
$$I = \\frac{1}{12}ML^2$$

**Thin rod about end:**
$$I = \\frac{1}{3}ML^2$$

**Solid cylinder/disk about axis:**
$$I = \\frac{1}{2}MR^2$$

**Hollow cylinder about axis:**
$$I = MR^2$$

**Solid sphere about diameter:**
$$I = \\frac{2}{5}MR^2$$

**Hollow sphere about diameter:**
$$I = \\frac{2}{3}MR^2$$

**Rectangular plate about center:**
$$I = \\frac{1}{12}M(a^2 + b^2)$$

## Calculating I by Integration

### Example 1: Thin Rod About End

Rod of length $L$, mass $M$, uniform density.

Linear mass density: $\\lambda = M/L$

$$dm = \\lambda \\, dx = \\frac{M}{L} \\, dx$$

$$I = \\int_0^L x^2 \\, dm = \\int_0^L x^2 \\frac{M}{L} \\, dx$$

$$I = \\frac{M}{L}\\frac{x^3}{3}\\Big|_0^L = \\frac{ML^2}{3}$$

### Example 2: Solid Cylinder About Axis

Radius $R$, mass $M$, uniform density $\\rho$.

Use cylindrical shells: $dm = \\rho \\cdot 2\\pi r \\, dr \\cdot h$

$$I = \\int_0^R r^2 \\, dm = \\int_0^R r^2 \\cdot \\rho \\cdot 2\\pi rh \\, dr$$

$$I = 2\\pi\\rho h\\int_0^R r^3 \\, dr = 2\\pi\\rho h \\frac{R^4}{4}$$

Using $M = \\rho\\pi R^2h$:

$$I = \\frac{1}{2}MR^2$$

### Example 3: Solid Sphere About Diameter

Sphere of radius $R$, mass $M$.

Use disk method. At distance $z$ from center, disk has radius $r = \\sqrt{R^2 - z^2}$.

$$dI = \\frac{1}{2}(dm)r^2 = \\frac{1}{2}\\rho\\pi r^2 dz \\cdot r^2 = \\frac{1}{2}\\rho\\pi(R^2 - z^2)^2 dz$$

$$I = 2\\int_0^R \\frac{1}{2}\\rho\\pi(R^2 - z^2)^2 dz$$

After integration:
$$I = \\frac{2}{5}MR^2$$

## Parallel Axis Theorem

$$I = I_{cm} + Md^2$$

where:
- $I$ = moment about new axis
- $I_{cm}$ = moment about parallel axis through center of mass
- $d$ = distance between the two parallel axes

### Example: Rod About End

$I_{cm} = \\frac{1}{12}ML^2$ (about center)

$d = L/2$ (distance from center to end)

$$I = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2$$

## Perpendicular Axis Theorem

For planar object in xy-plane:
$$I_z = I_x + I_y$$

where axes pass through same point.

### Example: Thin Disk

About axis perpendicular to disk through center:
$$I_z = \\frac{1}{2}MR^2$$

By symmetry: $I_x = I_y$

$$I_x = I_y = \\frac{1}{2}I_z = \\frac{1}{4}MR^2$$

(moment about diameter)

## Composite Objects

For object composed of multiple parts:
$$I_{total} = \\sum_i I_i$$

Calculate moment of each part (using parallel axis if needed), then sum.

### Example: T-Shape

Two identical rods (length $L$, mass $M$ each) forming T-shape.

Vertical rod rotating about its end (where horizontal rod attaches):
$$I_1 = \\frac{1}{3}ML^2$$

Horizontal rod about its center (perpendicular to length):
$$I_2 = \\frac{1}{12}ML^2$$

$$I_{total} = \\frac{1}{3}ML^2 + \\frac{1}{12}ML^2 = \\frac{5}{12}ML^2$$

## Radius of Gyration

$$I = Mk^2$$

where $k$ is radius of gyration.

$k$ represents the distance from axis where all mass could be concentrated to give same $I$.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: momentInertiaTopic.id,
        front: 'How do you calculate moment of inertia for continuous objects?',
        back: 'I = ∫r² dm, where r is perpendicular distance from rotation axis'
      },
      {
        topicId: momentInertiaTopic.id,
        front: 'What is the moment of inertia for a solid cylinder about its axis?',
        back: 'I = ½MR², derived using cylindrical shell integration'
      },
      {
        topicId: momentInertiaTopic.id,
        front: 'What is the moment of inertia for a solid sphere about a diameter?',
        back: 'I = (2/5)MR², derived using disk method integration'
      },
      {
        topicId: momentInertiaTopic.id,
        front: 'What is the parallel axis theorem?',
        back: 'I = I_cm + Md², relating moment about any axis to moment about parallel axis through center of mass'
      },
      {
        topicId: momentInertiaTopic.id,
        front: 'What is the perpendicular axis theorem?',
        back: 'For planar objects: I_z = I_x + I_y, where all three axes pass through same point and z is perpendicular to plane'
      },
      {
        topicId: momentInertiaTopic.id,
        front: 'How do you find moment of inertia for composite objects?',
        back: 'I_total = ΣI_i. Calculate moment for each part (using parallel axis if needed), then sum'
      }
    ]
  })

  console.log('✓ Created topic: Moment of Inertia')

  // Topic 12: Angular Momentum
  const angularMomentumTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-angular-momentum' },
    update: {},
    create: {
      slug: 'physics-c-angular-momentum',
      title: 'Angular Momentum',
      description: 'Conservation of angular momentum, cross products, and applications',
      order: 3,
      categoryId: rotationCategory.id,
      isPremium: false,
      textContent: `
# Angular Momentum

## Definition

For a particle:
$$\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$$

**Magnitude:**
$$L = rmv\\sin\\theta = r_{\\perp}mv = mrv_{\\perp}$$

For rotation about fixed axis:
$$L = I\\omega$$

## Relationship to Torque

$$\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$$

(Rotational analog of $\\vec{F} = \\frac{d\\vec{p}}{dt}$)

For fixed axis with constant $I$:
$$\\tau = I\\frac{d\\omega}{dt} = I\\alpha$$

## Conservation of Angular Momentum

When $\\vec{\\tau}_{ext} = 0$:

$$\\vec{L} = \\text{constant}$$

$$I_i\\omega_i = I_f\\omega_f$$

### Example: Figure Skater

Skater pulls arms in, reducing moment of inertia:

$$I_i\\omega_i = I_f\\omega_f$$

If $I_f < I_i$, then $\\omega_f > \\omega_i$ (spins faster)

**Energy changes:**
$$KE_i = \\frac{1}{2}I_i\\omega_i^2, \\quad KE_f = \\frac{1}{2}I_f\\omega_f^2$$

$$KE_f = \\frac{1}{2}I_f\\left(\\frac{I_i}{I_f}\\omega_i\\right)^2 = \\frac{I_i}{I_f}\\cdot\\frac{1}{2}I_i\\omega_i^2 = \\frac{I_i}{I_f}KE_i$$

Energy increases! (Work done by internal forces)

## Angular Momentum of System

$$\\vec{L}_{total} = \\sum_i \\vec{L}_i = \\sum_i \\vec{r}_i \\times \\vec{p}_i$$

**About center of mass:**
$$\\vec{L} = \\vec{L}_{cm} + \\vec{L}_{orbital}$$

where:
- $\\vec{L}_{cm} = I_{cm}\\vec{\\omega}$ (spin)
- $\\vec{L}_{orbital} = \\vec{r}_{cm} \\times M\\vec{v}_{cm}$ (orbital)

## Central Force Motion

For central force (directed toward/away from fixed point):

$$\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$$

(because $\\vec{F}$ parallel to $\\vec{r}$)

Therefore: $\\vec{L}$ = constant

**Consequences:**
1. Motion confined to a plane
2. Areal velocity constant (Kepler's second law)
3. $r^2\\dot{\\theta} = \\frac{L}{m}$ = constant

## Areal Velocity

Area swept out per unit time:

$$\\frac{dA}{dt} = \\frac{1}{2}r^2\\frac{d\\theta}{dt} = \\frac{1}{2}r^2\\omega = \\frac{L}{2m}$$

(Constant for central forces)

## Collisions and Angular Momentum

For collision, if $\\vec{\\tau}_{ext} = 0$ about some point, then $\\vec{L}$ conserved about that point.

### Example: Putty Ball Hitting Rod

Ball of mass $m$, speed $v$ hits rod of length $L$, mass $M$ at distance $d$ from pivot.

**Before:** $L_i = mvd$ (ball's angular momentum)

**After:** $L_f = I_{total}\\omega$

where $I_{total} = \\frac{1}{3}ML^2 + md^2$ (rod + stuck ball)

$$mvd = \\left(\\frac{1}{3}ML^2 + md^2\\right)\\omega$$

$$\\omega = \\frac{mvd}{\\frac{1}{3}ML^2 + md^2}$$

## Precession

Spinning top with angular momentum $\\vec{L}$ tilted at angle $\\theta$:

Gravitational torque:
$$\\tau = mgr\\sin\\theta$$

This causes precession (axis rotates) with angular velocity:

$$\\Omega = \\frac{\\tau}{L\\sin\\theta} = \\frac{mgr}{L} = \\frac{mgr}{I\\omega}$$

## Gyroscopic Motion

Gyroscope resists changes in orientation due to angular momentum conservation.

Applied torque $\\vec{\\tau}$ causes change:
$$\\Delta\\vec{L} = \\vec{\\tau}\\Delta t$$

Direction of $\\Delta\\vec{L}$ perpendicular to both $\\vec{L}$ and $\\vec{\\tau}$, causing precession.

## Angular Impulse

$$\\int_{t_1}^{t_2} \\vec{\\tau} \\, dt = \\Delta\\vec{L}$$

Analog of linear impulse $\\int \\vec{F} \\, dt = \\Delta\\vec{p}$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: angularMomentumTopic.id,
        front: 'What is angular momentum for a particle?',
        back: 'L⃗ = r⃗ × p⃗ = m(r⃗ × v⃗). For rotation about fixed axis: L = Iω'
      },
      {
        topicId: angularMomentumTopic.id,
        front: 'How is torque related to angular momentum?',
        back: 'τ⃗ = dL⃗/dt, analogous to F⃗ = dp⃗/dt for linear motion'
      },
      {
        topicId: angularMomentumTopic.id,
        front: 'When is angular momentum conserved?',
        back: 'When τ⃗_ext = 0 (no net external torque), then L⃗ = constant'
      },
      {
        topicId: angularMomentumTopic.id,
        front: 'Why does a figure skater spin faster when pulling arms in?',
        back: 'L = Iω conserved. When I decreases, ω increases to maintain constant angular momentum'
      },
      {
        topicId: angularMomentumTopic.id,
        front: 'What is areal velocity and when is it constant?',
        back: 'dA/dt = ½r²ω = L/(2m). Constant for central forces (Kepler\'s second law)'
      },
      {
        topicId: angularMomentumTopic.id,
        front: 'What causes precession of a spinning top?',
        back: 'Gravitational torque τ = mgr sinθ causes L⃗ to change direction, resulting in precession with Ω = mgr/L'
      }
    ]
  })

  console.log('✓ Created topic: Angular Momentum')

  // Category 6: Oscillations
  const oscillationsCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-oscillations' },
    update: {},
    create: {
      slug: 'physics-c-mech-oscillations',
      name: 'Oscillations',
      description: 'Simple harmonic motion, damped and driven oscillations using differential equations',
      order: 6,
      courseId: mechCourse.id
    }
  })

  // Topic 13: Simple Harmonic Motion
  const shmTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-simple-harmonic-motion' },
    update: {},
    create: {
      slug: 'physics-c-simple-harmonic-motion',
      title: 'Simple Harmonic Motion',
      description: 'Differential equation approach to SHM, springs, and pendulums',
      order: 1,
      categoryId: oscillationsCategory.id,
      isPremium: false,
      textContent: `
# Simple Harmonic Motion

## Differential Equation

For restoring force $F = -kx$:

$$m\\frac{d^2x}{dt^2} = -kx$$

$$\\frac{d^2x}{dt^2} + \\omega_0^2x = 0$$

where $\\omega_0 = \\sqrt{k/m}$ is natural angular frequency.

## General Solution

$$x(t) = A\\cos(\\omega_0 t + \\phi)$$

or equivalently:

$$x(t) = C_1\\cos(\\omega_0 t) + C_2\\sin(\\omega_0 t)$$

where $A$ is amplitude and $\\phi$ is phase constant.

## Velocity and Acceleration

$$v(t) = \\frac{dx}{dt} = -A\\omega_0\\sin(\\omega_0 t + \\phi)$$

$$a(t) = \\frac{dv}{dt} = -A\\omega_0^2\\cos(\\omega_0 t + \\phi) = -\\omega_0^2 x$$

**Maximum velocity:** $v_{max} = A\\omega_0$

**Maximum acceleration:** $a_{max} = A\\omega_0^2$

## Energy in SHM

**Kinetic energy:**
$$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}mA^2\\omega_0^2\\sin^2(\\omega_0 t + \\phi)$$

**Potential energy:**
$$PE = \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2\\cos^2(\\omega_0 t + \\phi)$$

**Total energy:**
$$E = KE + PE = \\frac{1}{2}kA^2 = \\text{constant}$$

(Using $k = m\\omega_0^2$)

## Initial Conditions

Given $x_0 = x(0)$ and $v_0 = v(0)$:

$$A = \\sqrt{x_0^2 + \\frac{v_0^2}{\\omega_0^2}}$$

$$\\tan\\phi = -\\frac{v_0}{\\omega_0 x_0}$$

## Period and Frequency

**Period:** $T = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$

**Frequency:** $f = \\frac{1}{T} = \\frac{\\omega_0}{2\\pi} = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$

## Simple Pendulum

For small angles ($\\sin\\theta \\approx \\theta$):

$$\\frac{d^2\\theta}{dt^2} + \\frac{g}{L}\\theta = 0$$

$$\\omega_0 = \\sqrt{\\frac{g}{L}}$$

$$T = 2\\pi\\sqrt{\\frac{L}{g}}$$

## Physical Pendulum

Extended object rotating about pivot:

Torque: $\\tau = -mgd\\sin\\theta \\approx -mgd\\theta$

where $d$ is distance from pivot to center of mass.

$$I\\frac{d^2\\theta}{dt^2} = -mgd\\theta$$

$$\\omega_0 = \\sqrt{\\frac{mgd}{I}}$$

$$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$$

## Torsional Pendulum

Restoring torque: $\\tau = -\\kappa\\theta$

where $\\kappa$ is torsional constant.

$$I\\frac{d^2\\theta}{dt^2} = -\\kappa\\theta$$

$$\\omega_0 = \\sqrt{\\frac{\\kappa}{I}}$$

## Two-Body Oscillator

Two masses $m_1$ and $m_2$ connected by spring with constant $k$:

**Reduced mass:** $\\mu = \\frac{m_1m_2}{m_1 + m_2}$

$$\\omega_0 = \\sqrt{\\frac{k}{\\mu}}$$

System oscillates as if single mass $\\mu$ attached to spring $k$.

## Vertical Spring

Mass hanging from spring:

Equilibrium: $kx_{eq} = mg$

Displacement from equilibrium: $y = x - x_{eq}$

$$m\\frac{d^2y}{dt^2} = -ky$$

Same SHM equation! Period independent of gravity:

$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: shmTopic.id,
        front: 'What is the differential equation for simple harmonic motion?',
        back: 'd²x/dt² + ω₀²x = 0, where ω₀ = √(k/m) is the natural angular frequency'
      },
      {
        topicId: shmTopic.id,
        front: 'What is the general solution for SHM?',
        back: 'x(t) = A cos(ω₀t + φ), where A is amplitude and φ is phase constant'
      },
      {
        topicId: shmTopic.id,
        front: 'What is the total energy in SHM?',
        back: 'E = ½kA² = constant. Energy oscillates between kinetic and potential, but total is conserved'
      },
      {
        topicId: shmTopic.id,
        front: 'What is the period of a simple pendulum?',
        back: 'T = 2π√(L/g) for small angles, independent of mass'
      },
      {
        topicId: shmTopic.id,
        front: 'What is the period of a physical pendulum?',
        back: 'T = 2π√(I/(mgd)), where I is moment of inertia and d is distance from pivot to center of mass'
      },
      {
        topicId: shmTopic.id,
        front: 'How do initial conditions x₀ and v₀ determine amplitude?',
        back: 'A = √(x₀² + v₀²/ω₀²) and tan φ = -v₀/(ω₀x₀)'
      }
    ]
  })

  console.log('✓ Created topic: Simple Harmonic Motion')

  // Topic 14: Damped and Driven Oscillations
  const dampedTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-damped-driven-oscillations' },
    update: {},
    create: {
      slug: 'physics-c-damped-driven-oscillations',
      title: 'Damped and Driven Oscillations',
      description: 'Damping forces, resonance, and forced oscillations',
      order: 2,
      categoryId: oscillationsCategory.id,
      isPremium: false,
      textContent: `
# Damped and Driven Oscillations

## Damped Oscillations

With damping force $F_d = -bv$:

$$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = 0$$

Divide by $m$:

$$\\frac{d^2x}{dt^2} + 2\\gamma\\frac{dx}{dt} + \\omega_0^2x = 0$$

where:
- $\\gamma = b/(2m)$ (damping coefficient)
- $\\omega_0 = \\sqrt{k/m}$ (natural frequency)

## Three Cases of Damping

**Underdamped** ($\\gamma < \\omega_0$):

$$x(t) = Ae^{-\\gamma t}\\cos(\\omega' t + \\phi)$$

where $\\omega' = \\sqrt{\\omega_0^2 - \\gamma^2}$ (damped frequency)

Oscillates with decreasing amplitude.

**Critically damped** ($\\gamma = \\omega_0$):

$$x(t) = (A + Bt)e^{-\\gamma t}$$

Returns to equilibrium fastest without oscillating.

**Overdamped** ($\\gamma > \\omega_0$):

$$x(t) = Ae^{-\\alpha t} + Be^{-\\beta t}$$

where $\\alpha, \\beta = \\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$

Returns to equilibrium slowly without oscillating.

## Quality Factor

$$Q = \\frac{\\omega_0}{2\\gamma}$$

**High Q:** Light damping, many oscillations before amplitude decays

**Low Q:** Heavy damping, few oscillations

**Energy decay:**
$$E(t) = E_0 e^{-2\\gamma t}$$

**Time constant:** $\\tau = 1/(2\\gamma)$

## Driven Oscillations

With external driving force $F(t) = F_0\\cos(\\omega t)$:

$$m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F_0\\cos(\\omega t)$$

$$\\frac{d^2x}{dt^2} + 2\\gamma\\frac{dx}{dt} + \\omega_0^2x = \\frac{F_0}{m}\\cos(\\omega t)$$

## Steady-State Solution

After transients die out:

$$x(t) = A(\\omega)\\cos(\\omega t - \\delta)$$

**Amplitude:**
$$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (2\\gamma\\omega)^2}}$$

**Phase lag:**
$$\\tan\\delta = \\frac{2\\gamma\\omega}{\\omega_0^2 - \\omega^2}$$

## Resonance

Amplitude is maximum when denominator is minimum.

**Resonant frequency:**
$$\\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2}$$

For light damping ($\\gamma \\ll \\omega_0$): $\\omega_r \\approx \\omega_0$

**Maximum amplitude:**
$$A_{max} \\approx \\frac{F_0}{2m\\gamma\\omega_0} = \\frac{F_0Q}{m\\omega_0^2} = \\frac{F_0Q}{k}$$

## Power and Resonance

**Average power absorbed:**
$$P_{avg} = \\frac{1}{2}b\\omega^2 A^2$$

**Maximum at:** $\\omega = \\omega_0$ (exactly)

**Power at resonance:**
$$P_{max} = \\frac{F_0^2}{4m\\gamma}$$

## Bandwidth and Q

**Half-power points:** where $P = P_{max}/2$

Occur at $\\omega = \\omega_0 \\pm \\gamma$ (for small $\\gamma$)

**Bandwidth:** $\\Delta\\omega = 2\\gamma$

$$Q = \\frac{\\omega_0}{\\Delta\\omega} = \\frac{\\omega_0}{2\\gamma}$$

Sharp resonance: high Q, narrow bandwidth

## Complex Representation

Using $\\tilde{x} = x_0 e^{i\\omega t}$:

$$-\\omega^2\\tilde{x} + 2i\\gamma\\omega\\tilde{x} + \\omega_0^2\\tilde{x} = \\frac{F_0}{m}$$

$$\\tilde{x} = \\frac{F_0/m}{\\omega_0^2 - \\omega^2 + 2i\\gamma\\omega}$$

Magnitude gives amplitude, argument gives phase.

## Applications

**Shock absorbers:** Critical damping for quick settling

**Musical instruments:** High Q for pure tones

**Bridges:** Avoid driving at natural frequency

**RLC circuits:** Same equations as mechanical oscillators
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dampedTopic.id,
        front: 'What is the differential equation for damped harmonic motion?',
        back: 'd²x/dt² + 2γ(dx/dt) + ω₀²x = 0, where γ = b/(2m) and ω₀ = √(k/m)'
      },
      {
        topicId: dampedTopic.id,
        front: 'What are the three types of damping?',
        back: 'Underdamped (γ < ω₀): oscillates with decay. Critically damped (γ = ω₀): fastest return without oscillation. Overdamped (γ > ω₀): slow return'
      },
      {
        topicId: dampedTopic.id,
        front: 'What is the quality factor Q?',
        back: 'Q = ω₀/(2γ). High Q means light damping and sharp resonance. Also Q = ω₀/Δω where Δω is bandwidth'
      },
      {
        topicId: dampedTopic.id,
        front: 'What is the steady-state amplitude for driven oscillations?',
        back: 'A(ω) = (F₀/m)/√[(ω₀² - ω²)² + (2γω)²], maximized near resonance'
      },
      {
        topicId: dampedTopic.id,
        front: 'At what frequency does resonance occur?',
        back: 'ω_r = √(ω₀² - 2γ²). For light damping, ω_r ≈ ω₀. Power absorption is maximum at exactly ω₀'
      },
      {
        topicId: dampedTopic.id,
        front: 'How does energy decay in damped oscillations?',
        back: 'E(t) = E₀e^(-2γt), exponential decay with time constant τ = 1/(2γ)'
      }
    ]
  })

  console.log('✓ Created topic: Damped and Driven Oscillations')

  // Category 7: Gravitation
  const gravitationCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-gravitation' },
    update: {},
    create: {
      slug: 'physics-c-mech-gravitation',
      name: 'Gravitation',
      description: 'Universal gravitation, orbital mechanics, and gravitational potential energy',
      order: 7,
      courseId: mechCourse.id
    }
  })

  // Topic 15: Universal Gravitation and Orbits
  const gravitationTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-universal-gravitation' },
    update: {},
    create: {
      slug: 'physics-c-universal-gravitation',
      title: 'Universal Gravitation and Orbits',
      description: 'Newton\'s law of gravitation, orbital mechanics, and Kepler\'s laws',
      order: 1,
      categoryId: gravitationCategory.id,
      isPremium: false,
      textContent: `
# Universal Gravitation and Orbits

## Newton's Law of Universal Gravitation

$$F = G\\frac{m_1m_2}{r^2}$$

where $G = 6.67 \\times 10^{-11}$ N·m²/kg² is gravitational constant.

**Vector form:**
$$\\vec{F}_{12} = -G\\frac{m_1m_2}{r^2}\\hat{r}_{12}$$

## Gravitational Potential Energy

Choosing $U = 0$ at $r = \\infty$:

$$U(r) = -G\\frac{m_1m_2}{r}$$

Work to bring masses from infinity to separation $r$:

$$W = \\int_\\infty^r F \\, dr' = -G\\frac{m_1m_2}{r}$$

## Gravitational Field

$$\\vec{g} = -\\frac{GM}{r^2}\\hat{r}$$

**Gravitational potential:**
$$\\Phi = -\\frac{GM}{r}$$

$$\\vec{g} = -\\nabla\\Phi$$

## Escape Velocity

Minimum velocity to escape gravitational field:

Set total energy = 0:
$$\\frac{1}{2}mv_{esc}^2 - G\\frac{Mm}{R} = 0$$

$$v_{esc} = \\sqrt{\\frac{2GM}{R}}$$

For Earth: $v_{esc} \\approx 11.2$ km/s

## Circular Orbits

For circular orbit of radius $r$:

Centripetal force = Gravitational force:
$$\\frac{mv^2}{r} = G\\frac{Mm}{r^2}$$

**Orbital velocity:**
$$v = \\sqrt{\\frac{GM}{r}}$$

**Orbital period:**
$$T = \\frac{2\\pi r}{v} = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Orbital energy:**
$$E = KE + PE = \\frac{1}{2}mv^2 - G\\frac{Mm}{r}$$

$$E = -\\frac{GMm}{2r}$$

(Negative: bound orbit)

Note: $|E| = KE$ (virial theorem)

## Kepler's Laws

**First Law (Law of Ellipses):**
Planets move in elliptical orbits with the Sun at one focus.

**Second Law (Law of Equal Areas):**
Line from Sun to planet sweeps equal areas in equal times.

This follows from angular momentum conservation:
$$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{constant}$$

**Third Law (Harmonic Law):**
$$T^2 \\propto a^3$$

where $a$ is semi-major axis.

For circular orbit ($a = r$):
$$T^2 = \\frac{4\\pi^2}{GM}r^3$$

## Elliptical Orbits

**Energy:**
$$E = -\\frac{GMm}{2a}$$

where $a$ is semi-major axis.

**Semi-major axis from energy:**
$$a = -\\frac{GMm}{2E}$$

**Angular momentum:**
$$L = m\\sqrt{GMa(1-e^2)}$$

where $e$ is eccentricity.

**Eccentricity:**
$$e = \\sqrt{1 + \\frac{2EL^2}{m(GM)^2}}$$

## Perihelion and Aphelion

**Perihelion** (closest): $r_p = a(1-e)$

**Aphelion** (farthest): $r_a = a(1+e)$

**Velocities:**
$$v_p = \\sqrt{\\frac{GM}{a}\\frac{1+e}{1-e}}, \\quad v_a = \\sqrt{\\frac{GM}{a}\\frac{1-e}{1+e}}$$

(From energy and angular momentum conservation)

## Hohmann Transfer Orbit

Efficient orbit change between circular orbits:

**Transfer orbit energy:**
$$E_t = -\\frac{GM m}{r_1 + r_2}$$

**Velocity changes:**
$$\\Delta v_1 = \\sqrt{\\frac{GM}{r_1}}\\left(\\sqrt{\\frac{2r_2}{r_1+r_2}} - 1\\right)$$

$$\\Delta v_2 = \\sqrt{\\frac{GM}{r_2}}\\left(1 - \\sqrt{\\frac{2r_1}{r_1+r_2}}\\right)$$

## Reduced Mass Problem

Two-body problem reduces to one-body with reduced mass:

$$\\mu = \\frac{m_1m_2}{m_1+m_2}$$

Both orbit common center of mass.

## Gravitational Force Inside Sphere

For uniform sphere, only mass at $r' < r$ contributes:

$$M_{enclosed} = M\\frac{r^3}{R^3}$$

$$F(r) = G\\frac{Mm}{R^3}r$$

(Linear with $r$, like spring force!)

At center: $F = 0$

## Shell Theorem

1. Uniform spherical shell exerts no force on particle inside
2. Shell acts as point mass for particle outside

These allow us to treat planets as point masses for external objects.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: gravitationTopic.id,
        front: 'What is Newton\'s law of universal gravitation?',
        back: 'F = Gm₁m₂/r², attractive force between masses. G = 6.67×10⁻¹¹ N·m²/kg²'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is gravitational potential energy?',
        back: 'U(r) = -Gm₁m₂/r, choosing U = 0 at r = ∞. Negative because gravity is attractive'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is escape velocity?',
        back: 'v_esc = √(2GM/R), minimum velocity to escape gravitational field (total energy = 0)'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is the orbital velocity for a circular orbit?',
        back: 'v = √(GM/r), derived from mv²/r = GMm/r²'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is Kepler\'s third law?',
        back: 'T² ∝ a³, where a is semi-major axis. For circular orbits: T² = (4π²/GM)r³'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is the total energy of a circular orbit?',
        back: 'E = -GMm/(2r). Negative (bound), and |E| = KE (virial theorem)'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What does Kepler\'s second law state and why?',
        back: 'Equal areas in equal times. Follows from angular momentum conservation: dA/dt = L/(2m) = constant'
      },
      {
        topicId: gravitationTopic.id,
        front: 'What is the gravitational force inside a uniform sphere?',
        back: 'F(r) = GMmr/R³, linear with r. Only mass at r\' < r contributes. F = 0 at center'
      }
    ]
  })

  console.log('✓ Created topic: Universal Gravitation and Orbits')

  console.log('\n✅ Successfully seeded AP Physics C: Mechanics - Rotation, Oscillations, and Gravitation!')
  console.log('   Topics: 6')
  console.log('   Flashcards: 35')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
