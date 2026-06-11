import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: Mechanics - Work, Energy, and Momentum...')

  // Get the AP Physics C: Mechanics course
  const mechCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-mechanics' }
  })

  if (!mechCourse) {
    throw new Error('AP Physics C: Mechanics course not found')
  }

  // Category 3: Work and Energy
  const energyCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-work-energy' },
    update: {},
    create: {
      slug: 'physics-c-mech-work-energy',
      name: 'Work and Energy',
      description: 'Work-energy theorem, conservative forces, and potential energy with calculus',
      order: 3,
      courseId: mechCourse.id
    }
  })

  // Topic 6: Work and Power
  const workPowerTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-work-power' },
    update: {},
    create: {
      slug: 'physics-c-work-power',
      title: 'Work and Power',
      description: 'Calculating work using line integrals and instantaneous power',
      order: 1,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# Work and Power

## Work as a Line Integral

For a variable force $\\vec{F}$ along a path from point A to B:

$$W = \\int_A^B \\vec{F} \\cdot d\\vec{r}$$

In one dimension:
$$W = \\int_{x_1}^{x_2} F_x \\, dx$$

In three dimensions:
$$W = \\int_A^B (F_x \\, dx + F_y \\, dy + F_z \\, dz)$$

## Work-Energy Theorem

From Newton's second law:
$$F = m\\frac{dv}{dt} = m\\frac{dv}{dx}\\frac{dx}{dt} = mv\\frac{dv}{dx}$$

$$F \\, dx = mv \\, dv$$

Integrating:
$$\\int_{x_1}^{x_2} F \\, dx = \\int_{v_1}^{v_2} mv \\, dv$$

$$W = \\frac{1}{2}mv_2^2 - \\frac{1}{2}mv_1^2 = \\Delta KE$$

**Work-energy theorem:** $W_{net} = \\Delta KE$

## Common Force Examples

### Constant Force
$$W = F \\cdot d = Fd\\cos\\theta$$

where $\\theta$ is angle between force and displacement.

### Spring Force
$$F = -kx$$

$$W = \\int_0^x (-kx') \\, dx' = -\\frac{1}{2}kx^2$$

(Work done by spring; work done on spring is positive)

### Gravity Near Earth's Surface
$$W = \\int_{y_1}^{y_2} (-mg) \\, dy = -mg(y_2 - y_1) = -mg\\Delta h$$

### Inverse Square Force (Gravity/Electrostatic)
$$F = -\\frac{k}{r^2}$$

$$W = \\int_{r_1}^{r_2} \\left(-\\frac{k}{r^2}\\right) dr = k\\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)$$

## Power

**Instantaneous power:**
$$P = \\frac{dW}{dt}$$

Since $dW = \\vec{F} \\cdot d\\vec{r}$:

$$P = \\frac{dW}{dt} = \\vec{F} \\cdot \\frac{d\\vec{r}}{dt} = \\vec{F} \\cdot \\vec{v}$$

**In one dimension:**
$$P = Fv$$

### Average Power
$$P_{avg} = \\frac{W}{\\Delta t}$$

### Power and Kinetic Energy

$$P = \\frac{dKE}{dt} = \\frac{d}{dt}\\left(\\frac{1}{2}mv^2\\right) = mv\\frac{dv}{dt} = mva = Fv$$

## Work on Variable Mass Systems

For rocket with exhaust velocity $v_e$ relative to rocket:

Power delivered by engine:
$$P = F_{thrust} \\cdot v = v_{rel}\\left|\\frac{dm}{dt}\\right| \\cdot v$$

## Example: Work Against Drag

Object moving through fluid with drag $F_d = -bv^2$:

$$W = \\int_0^d F_d \\, dx = -b\\int_0^d v^2 \\, dx$$

If $v(t)$ is known, use $dx = v \\, dt$:

$$W = -b\\int_0^T v^3 \\, dt$$

This work is dissipated as heat.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: workPowerTopic.id,
        front: 'What is the general definition of work for a variable force?',
        back: 'W = ∫F⃗·dr⃗, the line integral of force along the path'
      },
      {
        topicId: workPowerTopic.id,
        front: 'What is the work-energy theorem?',
        back: 'W_net = ΔKE. The net work done on an object equals its change in kinetic energy'
      },
      {
        topicId: workPowerTopic.id,
        front: 'What is the work done by a spring force F = -kx from x = 0 to x?',
        back: 'W = -½kx², derived from W = ∫(-kx) dx (negative because spring opposes displacement)'
      },
      {
        topicId: workPowerTopic.id,
        front: 'What is instantaneous power?',
        back: 'P = dW/dt = F⃗·v⃗, the dot product of force and velocity'
      },
      {
        topicId: workPowerTopic.id,
        front: 'How do you calculate work for an inverse square force F = -k/r²?',
        back: 'W = ∫(-k/r²) dr = k(1/r₂ - 1/r₁), important for gravity and electrostatics'
      }
    ]
  })

  console.log('✓ Created topic: Work and Power')

  // Topic 7: Conservative Forces and Potential Energy
  const conservativeTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-conservative-forces' },
    update: {},
    create: {
      slug: 'physics-c-conservative-forces',
      title: 'Conservative Forces and Potential Energy',
      description: 'Path independence, potential energy functions, and mechanical energy conservation',
      order: 2,
      categoryId: energyCategory.id,
      isPremium: false,
      textContent: `
# Conservative Forces and Potential Energy

## Conservative Force Definition

A force is **conservative** if the work done is independent of path (depends only on endpoints).

Equivalently:
1. Work around any closed path is zero: $\\oint \\vec{F} \\cdot d\\vec{r} = 0$
2. The force can be written as: $\\vec{F} = -\\nabla U$ (gradient of scalar potential)

## Potential Energy

For a conservative force:
$$W = -\\Delta U = -(U_f - U_i)$$

Differential form:
$$dW = \\vec{F} \\cdot d\\vec{r} = -dU$$

### Finding U from F

In one dimension:
$$F_x = -\\frac{dU}{dx}$$

$$U(x) = -\\int F_x \\, dx + C$$

In three dimensions:
$$\\vec{F} = -\\nabla U = -\\left(\\frac{\\partial U}{\\partial x}\\hat{i} + \\frac{\\partial U}{\\partial y}\\hat{j} + \\frac{\\partial U}{\\partial z}\\hat{k}\\right)$$

### Finding F from U

$$F_x = -\\frac{\\partial U}{\\partial x}, \\quad F_y = -\\frac{\\partial U}{\\partial y}, \\quad F_z = -\\frac{\\partial U}{\\partial z}$$

## Common Potential Energies

### Gravitational (near Earth)
$$U_g = mgh$$

$$F_y = -\\frac{dU}{dy} = -mg$$

### Spring
$$U_s = \\frac{1}{2}kx^2$$

$$F_x = -\\frac{dU}{dx} = -kx$$

### Universal Gravitation
$$U_g = -\\frac{Gm_1m_2}{r}$$

$$F_r = -\\frac{dU}{dr} = -\\frac{Gm_1m_2}{r^2}$$

(Choosing $U = 0$ at $r = \\infty$)

### Electric Potential Energy
$$U_e = k\\frac{q_1q_2}{r}$$

$$F_r = -\\frac{dU}{dr} = -k\\frac{q_1q_2}{r^2}$$

## Conservation of Mechanical Energy

For conservative forces only:
$$E = KE + U = \\text{constant}$$

$$\\frac{1}{2}mv^2 + U(x) = E$$

Taking time derivative:
$$mv\\frac{dv}{dt} + \\frac{dU}{dt} = 0$$

$$mv\\frac{dv}{dt} + \\frac{dU}{dx}\\frac{dx}{dt} = 0$$

$$ma + \\frac{dU}{dx}v = 0$$

$$F = -\\frac{dU}{dx}$$ (recovers $\\vec{F} = -\\nabla U$)

## Equilibrium Points

At equilibrium, $F = 0$:
$$\\frac{dU}{dx} = 0$$

**Stable equilibrium:** $\\frac{d^2U}{dx^2} > 0$ (local minimum of $U$)

**Unstable equilibrium:** $\\frac{d^2U}{dx^2} < 0$ (local maximum of $U$)

**Neutral equilibrium:** $\\frac{d^2U}{dx^2} = 0$ ($U$ is flat)

### Example: Potential Energy Curve

$$U(x) = \\frac{1}{2}kx^2 - \\frac{1}{6}bx^3$$

Equilibrium points:
$$\\frac{dU}{dx} = kx - \\frac{1}{2}bx^2 = 0$$

$$x = 0 \\text{ or } x = \\frac{2k}{b}$$

Stability:
$$\\frac{d^2U}{dx^2} = k - bx$$

At $x = 0$: $\\frac{d^2U}{dx^2} = k > 0$ (stable)

At $x = \\frac{2k}{b}$: $\\frac{d^2U}{dx^2} = k - 2k = -k < 0$ (unstable)

## Energy Diagrams

Plot $U(x)$ vs $x$. For total energy $E$:

- Particle confined to regions where $E \\geq U(x)$
- Turning points where $E = U(x)$ (velocity = 0)
- Kinetic energy: $KE = E - U(x)$

## Non-Conservative Forces

When non-conservative forces (friction, drag) are present:

$$W_{nc} = \\Delta KE + \\Delta U = \\Delta E$$

Mechanical energy is not conserved; it decreases by work done against non-conservative forces.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: conservativeTopic.id,
        front: 'What defines a conservative force?',
        back: 'Work is path-independent (depends only on endpoints), or equivalently ∮F⃗·dr⃗ = 0 around any closed path'
      },
      {
        topicId: conservativeTopic.id,
        front: 'How is force related to potential energy?',
        back: 'F⃗ = -∇U. In 1D: F = -dU/dx. Force points in direction of decreasing potential energy'
      },
      {
        topicId: conservativeTopic.id,
        front: 'What is the potential energy for a spring?',
        back: 'U_s = ½kx², with F = -kx = -dU/dx'
      },
      {
        topicId: conservativeTopic.id,
        front: 'What is the condition for equilibrium in terms of potential energy?',
        back: 'dU/dx = 0. Stable if d²U/dx² > 0 (minimum), unstable if d²U/dx² < 0 (maximum)'
      },
      {
        topicId: conservativeTopic.id,
        front: 'What is conservation of mechanical energy?',
        back: 'E = KE + U = constant when only conservative forces act. With non-conservative forces: W_nc = ΔE'
      },
      {
        topicId: conservativeTopic.id,
        front: 'What is the gravitational potential energy for universal gravitation?',
        back: 'U_g = -Gm₁m₂/r, choosing U = 0 at r = ∞, with F = -dU/dr = -Gm₁m₂/r²'
      }
    ]
  })

  console.log('✓ Created topic: Conservative Forces and Potential Energy')

  // Category 4: Linear Momentum and Collisions
  const momentumCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-mech-momentum' },
    update: {},
    create: {
      slug: 'physics-c-mech-momentum',
      name: 'Linear Momentum',
      description: 'Momentum conservation, collisions, and center of mass with calculus',
      order: 4,
      courseId: mechCourse.id
    }
  })

  // Topic 8: Momentum and Collisions
  const collisionsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-momentum-collisions' },
    update: {},
    create: {
      slug: 'physics-c-momentum-collisions',
      title: 'Momentum and Collisions',
      description: 'Conservation of momentum, elastic and inelastic collisions',
      order: 1,
      categoryId: momentumCategory.id,
      isPremium: false,
      textContent: `
# Momentum and Collisions

## Linear Momentum

$$\\vec{p} = m\\vec{v}$$

**Newton's second law:**
$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$

For constant mass:
$$\\vec{F} = m\\frac{d\\vec{v}}{dt} = m\\vec{a}$$

## Conservation of Momentum

When $\\vec{F}_{ext} = 0$:

$$\\frac{d\\vec{p}_{total}}{dt} = 0$$

$$\\vec{p}_{total} = \\text{constant}$$

For a system of particles:
$$\\vec{p}_{total} = \\sum_i m_i\\vec{v}_i = \\text{constant}$$

## Impulse

$$\\vec{J} = \\int_{t_1}^{t_2} \\vec{F} \\, dt = \\Delta \\vec{p}$$

### Variable Force Example

If $F(t) = F_0\\sin(\\omega t)$ from $t = 0$ to $t = \\pi/\\omega$:

$$J = \\int_0^{\\pi/\\omega} F_0\\sin(\\omega t) \\, dt = \\frac{F_0}{\\omega}[-\\cos(\\omega t)]_0^{\\pi/\\omega}$$

$$J = \\frac{F_0}{\\omega}(1 - (-1)) = \\frac{2F_0}{\\omega}$$

## Elastic Collisions (1D)

Conservation of momentum:
$$m_1v_{1i} + m_2v_{2i} = m_1v_{1f} + m_2v_{2f}$$

Conservation of kinetic energy:
$$\\frac{1}{2}m_1v_{1i}^2 + \\frac{1}{2}m_2v_{2i}^2 = \\frac{1}{2}m_1v_{1f}^2 + \\frac{1}{2}m_2v_{2f}^2$$

**Solutions:**
$$v_{1f} = \\frac{(m_1 - m_2)v_{1i} + 2m_2v_{2i}}{m_1 + m_2}$$

$$v_{2f} = \\frac{(m_2 - m_1)v_{2i} + 2m_1v_{1i}}{m_1 + m_2}$$

### Special Cases

**Equal masses** ($m_1 = m_2$):
$$v_{1f} = v_{2i}, \\quad v_{2f} = v_{1i}$$
(velocities exchange)

**Target at rest** ($v_{2i} = 0$):
$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i}, \\quad v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i}$$

**Massive target** ($m_2 \\gg m_1$, $v_{2i} = 0$):
$$v_{1f} \\approx -v_{1i}, \\quad v_{2f} \\approx 0$$
(light object bounces back)

## Inelastic Collisions

Momentum conserved, but kinetic energy not conserved.

**Perfectly inelastic** (objects stick together):
$$m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f$$

$$v_f = \\frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2}$$

**Energy lost:**
$$\\Delta KE = KE_f - KE_i = \\frac{1}{2}\\frac{m_1m_2}{m_1 + m_2}(v_{1i} - v_{2i})^2$$

(This energy is converted to heat, deformation, sound, etc.)

## Coefficient of Restitution

For partially elastic collisions:
$$e = \\frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|}$$

- $e = 1$: perfectly elastic
- $e = 0$: perfectly inelastic
- $0 < e < 1$: partially elastic

**Relative velocity after collision:**
$$v_{2f} - v_{1f} = -e(v_{2i} - v_{1i})$$

## 2D Collisions

Momentum conserved in each direction:

**x-component:**
$$m_1v_{1ix} + m_2v_{2ix} = m_1v_{1fx} + m_2v_{2fx}$$

**y-component:**
$$m_1v_{1iy} + m_2v_{2iy} = m_1v_{1fy} + m_2v_{2fy}$$

For elastic collisions, also conserve kinetic energy.

## Rocket Motion

Variable mass: $m(t)$ decreases as fuel burns.

$$m\\frac{dv}{dt} = -v_{rel}\\frac{dm}{dt} + F_{ext}$$

where $v_{rel}$ is exhaust speed relative to rocket.

In space ($F_{ext} = 0$):
$$m \\, dv = -v_{rel} \\, dm$$

$$\\int_{v_0}^v dv' = -v_{rel}\\int_{m_0}^m \\frac{dm'}{m'}$$

$$\\Delta v = v_{rel}\\ln\\frac{m_0}{m}$$

**Tsiolkovsky equation**
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: collisionsTopic.id,
        front: 'What is the momentum form of Newton\'s second law?',
        back: 'F⃗ = dp⃗/dt. For constant mass, this becomes F⃗ = ma⃗'
      },
      {
        topicId: collisionsTopic.id,
        front: 'When is momentum conserved?',
        back: 'When F⃗_ext = 0 (no net external force), then p⃗_total = constant'
      },
      {
        topicId: collisionsTopic.id,
        front: 'What are the two conservation laws for elastic collisions?',
        back: 'Conservation of momentum: Σp_i = Σp_f, and conservation of kinetic energy: ΣKE_i = ΣKE_f'
      },
      {
        topicId: collisionsTopic.id,
        front: 'For a perfectly inelastic collision, what is the final velocity?',
        back: 'v_f = (m₁v₁ᵢ + m₂v₂ᵢ)/(m₁ + m₂), where objects stick together after collision'
      },
      {
        topicId: collisionsTopic.id,
        front: 'What is the coefficient of restitution e?',
        back: 'e = |v₂f - v₁f|/|v₁ᵢ - v₂ᵢ|, ratio of relative velocities. e = 1 (elastic), e = 0 (perfectly inelastic)'
      },
      {
        topicId: collisionsTopic.id,
        front: 'What is the Tsiolkovsky rocket equation?',
        back: 'Δv = v_rel ln(m₀/m), relating velocity change to exhaust velocity and mass ratio for rocket in space'
      }
    ]
  })

  console.log('✓ Created topic: Momentum and Collisions')

  // Topic 9: Center of Mass
  const centerMassTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-center-of-mass' },
    update: {},
    create: {
      slug: 'physics-c-center-of-mass',
      title: 'Center of Mass',
      description: 'Center of mass calculations for discrete and continuous systems',
      order: 2,
      categoryId: momentumCategory.id,
      isPremium: false,
      textContent: `
# Center of Mass

## Definition

For a system of discrete particles:

$$\\vec{r}_{cm} = \\frac{\\sum_i m_i\\vec{r}_i}{\\sum_i m_i} = \\frac{\\sum_i m_i\\vec{r}_i}{M}$$

where $M = \\sum_i m_i$ is total mass.

**Components:**
$$x_{cm} = \\frac{\\sum_i m_ix_i}{M}, \\quad y_{cm} = \\frac{\\sum_i m_iy_i}{M}, \\quad z_{cm} = \\frac{\\sum_i m_iz_i}{M}$$

## Continuous Mass Distribution

For continuous objects with mass density $\\rho(\\vec{r})$:

$$\\vec{r}_{cm} = \\frac{1}{M}\\int \\vec{r} \\, dm = \\frac{1}{M}\\int \\rho(\\vec{r})\\vec{r} \\, dV$$

**For uniform density** ($\\rho$ = constant):
$$\\vec{r}_{cm} = \\frac{1}{V}\\int \\vec{r} \\, dV$$

### Linear Objects

Mass per unit length: $\\lambda = dm/dx$

$$x_{cm} = \\frac{1}{M}\\int x \\, dm = \\frac{1}{M}\\int x\\lambda(x) \\, dx$$

### Planar Objects

Mass per unit area: $\\sigma = dm/dA$

$$x_{cm} = \\frac{1}{M}\\int x \\, dm = \\frac{1}{M}\\int x\\sigma(x,y) \\, dA$$

## Velocity and Acceleration of Center of Mass

**Velocity:**
$$\\vec{v}_{cm} = \\frac{d\\vec{r}_{cm}}{dt} = \\frac{\\sum_i m_i\\vec{v}_i}{M}$$

**Acceleration:**
$$\\vec{a}_{cm} = \\frac{d\\vec{v}_{cm}}{dt} = \\frac{\\sum_i m_i\\vec{a}_i}{M}$$

## Newton's Second Law for Systems

$$\\vec{F}_{ext} = M\\vec{a}_{cm}$$

The center of mass moves as if all mass were concentrated there and all external forces acted there.

**Internal forces cancel** (Newton's third law).

## Momentum and Center of Mass

Total momentum:
$$\\vec{p}_{total} = \\sum_i m_i\\vec{v}_i = M\\vec{v}_{cm}$$

$$\\vec{F}_{ext} = \\frac{d\\vec{p}_{total}}{dt} = M\\frac{d\\vec{v}_{cm}}{dt}$$

When $\\vec{F}_{ext} = 0$: $\\vec{v}_{cm}$ is constant (momentum conserved).

## Example: Triangle

Uniform triangular plate with vertices at $(0,0)$, $(a,0)$, $(0,b)$.

For uniform density:
$$x_{cm} = \\frac{a}{3}, \\quad y_{cm} = \\frac{b}{3}$$

(Center of mass at centroid, 1/3 from each side)

## Example: Semicircular Ring

Ring of radius $R$ (upper half):

$$x_{cm} = 0$$ (by symmetry)

$$y_{cm} = \\frac{1}{M}\\int y \\, dm$$

Parametrize: $y = R\\sin\\theta$, $dm = \\frac{M}{\\pi R}R \\, d\\theta$

$$y_{cm} = \\frac{1}{\\pi R}\\int_0^{\\pi} R\\sin\\theta \\cdot R \\, d\\theta = \\frac{R}{\\pi}\\int_0^{\\pi}\\sin\\theta \\, d\\theta$$

$$y_{cm} = \\frac{R}{\\pi}[-\\cos\\theta]_0^{\\pi} = \\frac{2R}{\\pi}$$

## Example: Solid Cone

Cone of height $h$ and base radius $R$ (vertex at origin):

By symmetry: $x_{cm} = y_{cm} = 0$

Use disk method:
$$z_{cm} = \\frac{1}{M}\\int z \\, dm$$

At height $z$, radius $r = \\frac{R}{h}z$, disk mass $dm = \\rho\\pi r^2 dz$

$$z_{cm} = \\frac{1}{M}\\int_0^h z \\cdot \\rho\\pi\\frac{R^2}{h^2}z^2 \\, dz = \\frac{3h}{4}$$

## Two-Body Problem

For two bodies with masses $m_1$ and $m_2$ separated by distance $r$:

Place $m_1$ at origin:
$$r_{cm} = \\frac{m_2r}{m_1 + m_2}$$

Distance from $m_1$ to CM: $r_1 = \\frac{m_2r}{m_1 + m_2}$

Distance from $m_2$ to CM: $r_2 = \\frac{m_1r}{m_1 + m_2}$

Note: $r_1 + r_2 = r$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: centerMassTopic.id,
        front: 'How do you calculate center of mass for discrete particles?',
        back: 'r⃗_cm = Σ(m_i r⃗_i)/M, where M is total mass. Weight each position by its mass.'
      },
      {
        topicId: centerMassTopic.id,
        front: 'How do you calculate center of mass for continuous objects?',
        back: 'r⃗_cm = (1/M)∫r⃗ dm = (1/M)∫ρ(r⃗)r⃗ dV, integrating over the mass distribution'
      },
      {
        topicId: centerMassTopic.id,
        front: 'What is Newton\'s second law for a system of particles?',
        back: 'F⃗_ext = Ma⃗_cm. External forces cause center of mass to accelerate; internal forces cancel'
      },
      {
        topicId: centerMassTopic.id,
        front: 'How is total momentum related to center of mass?',
        back: 'p⃗_total = Mv⃗_cm. Total momentum equals total mass times velocity of center of mass'
      },
      {
        topicId: centerMassTopic.id,
        front: 'Where is the center of mass of a uniform triangle?',
        back: 'At the centroid, located 1/3 of the distance from each side (or 2/3 from each vertex)'
      },
      {
        topicId: centerMassTopic.id,
        front: 'Where is the center of mass of a uniform solid cone of height h?',
        back: 'At z_cm = 3h/4 from the vertex (or h/4 from the base), along the axis of symmetry'
      }
    ]
  })

  console.log('✓ Created topic: Center of Mass')

  console.log('\n✅ Successfully seeded AP Physics C: Mechanics - Work, Energy, and Momentum!')
  console.log('   Topics: 4')
  console.log('   Flashcards: 23')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
