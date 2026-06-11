import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Physics C: Mechanics topics...')

  // Topic 1: Position, Velocity, and Acceleration
  const kinematicsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-position-velocity-acceleration' }
  })

  if (kinematicsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: kinematicsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A particle moves along the x-axis with position given by x(t) = 2t³ - 9t² + 12t + 5, where x is in meters and t is in seconds. Find: (a) the velocity and acceleration as functions of time, (b) the times when the particle is at rest, and (c) the position when the acceleration is zero.',
          solution: `**Given:**
$$x(t) = 2t^3 - 9t^2 + 12t + 5$$

**(a) Velocity and acceleration:**

Velocity:
$$v(t) = \\frac{dx}{dt} = 6t^2 - 18t + 12$$

$$\\boxed{v(t) = 6t^2 - 18t + 12 \\text{ m/s}}$$

Acceleration:
$$a(t) = \\frac{dv}{dt} = 12t - 18$$

$$\\boxed{a(t) = 12t - 18 \\text{ m/s}^2}$$

**(b) Times when particle is at rest:**

Set v(t) = 0:
$$6t^2 - 18t + 12 = 0$$
$$t^2 - 3t + 2 = 0$$
$$(t-1)(t-2) = 0$$

$$\\boxed{t = 1 \\text{ s and } t = 2 \\text{ s}}$$

**(c) Position when acceleration is zero:**

Set a(t) = 0:
$$12t - 18 = 0$$
$$t = 1.5 \\text{ s}$$

$$x(1.5) = 2(1.5)^3 - 9(1.5)^2 + 12(1.5) + 5$$
$$x(1.5) = 6.75 - 20.25 + 18 + 5$$

$$\\boxed{x = 9.5 \\text{ m}}$$`
        },
        {
          topicId: kinematicsTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A particle moves in the xy-plane with position vector $\\vec{r}(t) = (3t^2)\\hat{i} + (4t - t^3)\\hat{j}$ meters. Find: (a) the velocity and acceleration vectors at t = 2 s, (b) the speed at t = 2 s, and (c) the tangential and normal components of acceleration at this time.',
          solution: `**Given:**
$$\\vec{r}(t) = 3t^2\\hat{i} + (4t - t^3)\\hat{j}$$

**(a) Velocity and acceleration at t = 2 s:**

$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = 6t\\hat{i} + (4 - 3t^2)\\hat{j}$$

At t = 2:
$$\\vec{v}(2) = 12\\hat{i} + (4 - 12)\\hat{j} = 12\\hat{i} - 8\\hat{j}$$

$$\\boxed{\\vec{v}(2) = 12\\hat{i} - 8\\hat{j} \\text{ m/s}}$$

$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = 6\\hat{i} - 6t\\hat{j}$$

$$\\boxed{\\vec{a}(2) = 6\\hat{i} - 12\\hat{j} \\text{ m/s}^2}$$

**(b) Speed at t = 2 s:**

$$v = |\\vec{v}| = \\sqrt{12^2 + (-8)^2} = \\sqrt{144 + 64}$$

$$\\boxed{v = \\sqrt{208} = 14.4 \\text{ m/s}}$$

**(c) Tangential and normal components:**

Unit tangent: $\\hat{T} = \\frac{\\vec{v}}{|\\vec{v}|} = \\frac{12\\hat{i} - 8\\hat{j}}{14.4}$

Tangential acceleration:
$$a_T = \\vec{a} \\cdot \\hat{T} = \\frac{(6)(12) + (-12)(-8)}{14.4} = \\frac{72 + 96}{14.4}$$

$$\\boxed{a_T = 11.7 \\text{ m/s}^2}$$

Normal acceleration:
$$a_N = \\sqrt{|\\vec{a}|^2 - a_T^2}$$

$$|\\vec{a}| = \\sqrt{36 + 144} = 13.4 \\text{ m/s}^2$$

$$a_N = \\sqrt{(13.4)^2 - (11.7)^2} = \\sqrt{179.6 - 136.9}$$

$$\\boxed{a_N = 6.5 \\text{ m/s}^2}$$`
        },
        {
          topicId: kinematicsTopic.id,
          order: 3,
          difficulty: 'EASY',
          question: 'An object falls from rest. Its acceleration due to air resistance is given by a = g - bv, where g = 9.8 m/s², b = 0.2 s⁻¹, and v is the velocity. Find: (a) the terminal velocity, (b) the velocity as a function of time, and (c) the time to reach 95% of terminal velocity.',
          solution: `**Given:**
- a = g - bv
- g = 9.8 m/s²
- b = 0.2 s⁻¹
- v₀ = 0

**(a) Terminal velocity:**

At terminal velocity, a = 0:
$$0 = g - bv_t$$

$$v_t = \\frac{g}{b} = \\frac{9.8}{0.2}$$

$$\\boxed{v_t = 49 \\text{ m/s}}$$

**(b) Velocity as function of time:**

$$\\frac{dv}{dt} = g - bv$$

Separating variables:
$$\\frac{dv}{g - bv} = dt$$

$$-\\frac{1}{b}\\ln(g - bv) = t + C$$

At t = 0, v = 0: $C = -\\frac{1}{b}\\ln(g)$

$$\\ln\\left(\\frac{g - bv}{g}\\right) = -bt$$

$$g - bv = ge^{-bt}$$

$$v = \\frac{g}{b}(1 - e^{-bt})$$

$$\\boxed{v(t) = 49(1 - e^{-0.2t}) \\text{ m/s}}$$

**(c) Time to reach 95% of v_t:**

$$0.95v_t = v_t(1 - e^{-bt})$$
$$0.95 = 1 - e^{-bt}$$
$$e^{-bt} = 0.05$$
$$-bt = \\ln(0.05)$$

$$t = -\\frac{\\ln(0.05)}{b} = -\\frac{-2.996}{0.2}$$

$$\\boxed{t = 15.0 \\text{ s}}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Position, Velocity, and Acceleration')
  }

  // Topic 2: Variable Acceleration
  const variableAccelTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-variable-acceleration' }
  })

  if (variableAccelTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: variableAccelTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A particle starts from rest at t = 0 with acceleration a(t) = 6t m/s² (where t is in seconds). Find: (a) the velocity at t = 3 s, (b) the position at t = 3 s, and (c) the average velocity over the interval [0, 3] s.',
          solution: `**Given:**
- a(t) = 6t m/s²
- v₀ = 0, x₀ = 0

**(a) Velocity at t = 3 s:**

$$v(t) = v_0 + \\int_0^t a(t') \\, dt' = \\int_0^t 6t' \\, dt'$$

$$v(t) = 6 \\cdot \\frac{t^2}{2} = 3t^2$$

$$v(3) = 3(3)^2 = \\boxed{27 \\text{ m/s}}$$

**(b) Position at t = 3 s:**

$$x(t) = x_0 + \\int_0^t v(t') \\, dt' = \\int_0^t 3t'^2 \\, dt'$$

$$x(t) = 3 \\cdot \\frac{t^3}{3} = t^3$$

$$x(3) = (3)^3 = \\boxed{27 \\text{ m}}$$

**(c) Average velocity:**

$$v_{avg} = \\frac{x(3) - x(0)}{3 - 0} = \\frac{27}{3}$$

$$\\boxed{v_{avg} = 9 \\text{ m/s}}$$`
        },
        {
          topicId: variableAccelTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A rocket experiences acceleration a = (40 - 5t) m/s² until its fuel runs out. The rocket starts from rest at t = 0. Find: (a) when the fuel runs out (when a = 0), (b) the maximum velocity, and (c) the total distance traveled while fuel is burning.',
          solution: `**Given:**
- a(t) = 40 - 5t m/s²
- v₀ = 0, x₀ = 0

**(a) When fuel runs out:**

Set a = 0:
$$40 - 5t = 0$$

$$\\boxed{t = 8 \\text{ s}}$$

**(b) Maximum velocity:**

$$v(t) = \\int_0^t (40 - 5t') \\, dt' = 40t - \\frac{5t^2}{2}$$

At t = 8 s:
$$v(8) = 40(8) - \\frac{5(64)}{2} = 320 - 160$$

$$\\boxed{v_{max} = 160 \\text{ m/s}}$$

**(c) Total distance:**

$$x(t) = \\int_0^t \\left(40t' - \\frac{5t'^2}{2}\\right) dt'$$

$$x(t) = 40 \\cdot \\frac{t^2}{2} - \\frac{5t^3}{6} = 20t^2 - \\frac{5t^3}{6}$$

At t = 8 s:
$$x(8) = 20(64) - \\frac{5(512)}{6} = 1280 - 426.7$$

$$\\boxed{x = 853 \\text{ m}}$$`
        },
        {
          topicId: variableAccelTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A particle moves with position-dependent acceleration a = -kx, where k = 4 s⁻². If v = 8 m/s when x = 0, find: (a) the velocity as a function of position, (b) the maximum displacement, and (c) identify the type of motion.',
          solution: `**Given:**
- a = -kx where k = 4 s⁻²
- At x = 0: v = 8 m/s

**(a) Velocity as function of position:**

Using $a = v\\frac{dv}{dx}$:

$$v\\frac{dv}{dx} = -kx$$

$$v \\, dv = -kx \\, dx$$

Integrating:
$$\\frac{v^2}{2} = -\\frac{kx^2}{2} + C$$

At x = 0, v = 8:
$$C = \\frac{64}{2} = 32$$

$$\\frac{v^2}{2} = -\\frac{4x^2}{2} + 32$$

$$v^2 = 64 - 4x^2$$

$$\\boxed{v = \\sqrt{64 - 4x^2} = 2\\sqrt{16 - x^2} \\text{ m/s}}$$

**(b) Maximum displacement:**

At maximum displacement, v = 0:
$$0 = 64 - 4x_{max}^2$$

$$x_{max}^2 = 16$$

$$\\boxed{x_{max} = 4 \\text{ m}}$$

**(c) Type of motion:**

$$a = -kx = -(4)x$$

This is **Simple Harmonic Motion** (SHM)!

$$\\omega^2 = k = 4 \\implies \\omega = 2 \\text{ rad/s}$$

The particle oscillates with amplitude A = 4 m and angular frequency ω = 2 rad/s.

General solution: $x(t) = A\\sin(\\omega t + \\phi)$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Variable Acceleration')
  }

  // Topic 3: Circular Motion
  const circularMotionTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-circular-motion' }
  })

  if (circularMotionTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: circularMotionTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A car travels around a circular track of radius R = 200 m. The speed increases uniformly from v₀ = 20 m/s to v = 30 m/s over 10 seconds. Find at t = 5 s: (a) the tangential acceleration, (b) the centripetal acceleration, and (c) the magnitude of total acceleration.',
          solution: `**Given:**
- R = 200 m
- v₀ = 20 m/s, v = 30 m/s
- Δt = 10 s
- At t = 5 s

**(a) Tangential acceleration:**

$$a_t = \\frac{\\Delta v}{\\Delta t} = \\frac{30 - 20}{10}$$

$$\\boxed{a_t = 1.0 \\text{ m/s}^2}$$

(Constant throughout)

**(b) Centripetal acceleration at t = 5 s:**

Speed at t = 5 s:
$$v(5) = 20 + (1.0)(5) = 25 \\text{ m/s}$$

$$a_c = \\frac{v^2}{R} = \\frac{(25)^2}{200} = \\frac{625}{200}$$

$$\\boxed{a_c = 3.13 \\text{ m/s}^2}$$

**(c) Total acceleration:**

$$a_{total} = \\sqrt{a_t^2 + a_c^2} = \\sqrt{(1.0)^2 + (3.13)^2}$$

$$a_{total} = \\sqrt{1.0 + 9.8} = \\sqrt{10.8}$$

$$\\boxed{a_{total} = 3.29 \\text{ m/s}^2}$$`
        },
        {
          topicId: circularMotionTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A particle moves in a circle of radius r = 2.0 m with angular position θ(t) = 3t² rad (where t is in seconds). Find at t = 2 s: (a) the angular velocity and angular acceleration, (b) the tangential and centripetal accelerations, and (c) the total acceleration vector.',
          solution: `**Given:**
- r = 2.0 m
- θ(t) = 3t² rad
- At t = 2 s

**(a) Angular velocity and acceleration:**

$$\\omega(t) = \\frac{d\\theta}{dt} = 6t \\text{ rad/s}$$

At t = 2:
$$\\boxed{\\omega(2) = 12 \\text{ rad/s}}$$

$$\\alpha(t) = \\frac{d\\omega}{dt} = 6 \\text{ rad/s}^2$$

$$\\boxed{\\alpha = 6 \\text{ rad/s}^2}$$ (constant)

**(b) Tangential and centripetal accelerations:**

$$a_t = r\\alpha = (2.0)(6)$$

$$\\boxed{a_t = 12 \\text{ m/s}^2}$$

$$a_c = \\omega^2 r = (12)^2(2.0) = 144 \\times 2.0$$

$$\\boxed{a_c = 288 \\text{ m/s}^2}$$

**(c) Total acceleration:**

Tangential component: 12 m/s² (in direction of motion)
Centripetal component: 288 m/s² (toward center)

$$|\\vec{a}| = \\sqrt{a_t^2 + a_c^2} = \\sqrt{144 + 82944}$$

$$\\boxed{|\\vec{a}| = 288.2 \\text{ m/s}^2}$$

Angle from radial direction:
$$\\tan\\phi = \\frac{a_t}{a_c} = \\frac{12}{288} \\implies \\phi = 2.4°$$`
        },
        {
          topicId: circularMotionTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A bead slides without friction on a horizontal circular hoop of radius R = 0.5 m that rotates about a vertical axis at constant angular velocity ω = 6 rad/s. The bead is at angle θ from the vertical. Using calculus and force analysis, find: (a) the effective potential energy, (b) the equilibrium angle, and (c) the normal force at equilibrium.',
          solution: `**Given:**
- R = 0.5 m
- ω = 6 rad/s (constant rotation)
- Mass m (general)
- g = 9.8 m/s²

**(a) Effective potential:**

In rotating frame, forces on bead:
- Weight: mg (downward)
- Normal force: N (perpendicular to hoop)
- Centrifugal force: mω²r = mω²(R sin θ) (outward)

Effective potential energy:
$$U_{eff}(\\theta) = mgR(1 - \\cos\\theta) - \\frac{1}{2}m\\omega^2 R^2 \\sin^2\\theta$$

$$\\boxed{U_{eff} = mgR(1 - \\cos\\theta) - \\frac{1}{2}m\\omega^2 R^2 \\sin^2\\theta}$$

**(b) Equilibrium angle:**

At equilibrium: $\\frac{dU_{eff}}{d\\theta} = 0$

$$mgR\\sin\\theta - m\\omega^2 R^2 \\sin\\theta\\cos\\theta = 0$$

$$mgR\\sin\\theta = m\\omega^2 R^2 \\sin\\theta\\cos\\theta$$

If θ ≠ 0:
$$g = \\omega^2 R\\cos\\theta$$

$$\\cos\\theta = \\frac{g}{\\omega^2 R} = \\frac{9.8}{(6)^2(0.5)} = \\frac{9.8}{18}$$

$$\\cos\\theta = 0.544$$

$$\\boxed{\\theta = 57.0°}$$

**(c) Normal force at equilibrium:**

Force balance perpendicular to hoop:
$$N = m\\omega^2 R\\sin\\theta + mg\\cos\\theta$$

Actually, force balance along radius:
$$N\\sin\\theta = m\\omega^2 R\\sin\\theta$$
$$N\\cos\\theta = mg$$

From second equation:
$$N = \\frac{mg}{\\cos\\theta} = \\frac{mg}{0.544}$$

$$\\boxed{N = 1.84mg}$$

Or with numbers (for m = 1 kg):
$$N = 1.84(1)(9.8) = 18.0 \\text{ N}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Circular Motion')
  }

  // Topic 4: Newton's Laws (Calculus)
  const newtonsLawsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-newtons-laws-calculus' }
  })

  if (newtonsLawsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: newtonsLawsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A 2.0 kg block experiences a time-dependent force F(t) = (8 - 2t) N for 0 ≤ t ≤ 4 s. The block starts from rest. Find: (a) the impulse delivered to the block, (b) the final velocity, and (c) the work done by the force.',
          solution: `**Given:**
- m = 2.0 kg
- F(t) = 8 - 2t N
- v₀ = 0
- Time interval: [0, 4] s

**(a) Impulse:**

$$J = \\int_0^4 F(t) \\, dt = \\int_0^4 (8 - 2t) \\, dt$$

$$J = \\left[8t - t^2\\right]_0^4 = 32 - 16$$

$$\\boxed{J = 16 \\text{ N·s}}$$

**(b) Final velocity:**

Using impulse-momentum theorem:
$$J = \\Delta p = m(v_f - v_0)$$

$$16 = 2.0(v_f - 0)$$

$$\\boxed{v_f = 8.0 \\text{ m/s}}$$

**(c) Work done:**

First find position. Using F = ma:
$$a(t) = \\frac{F}{m} = \\frac{8 - 2t}{2} = 4 - t$$

$$v(t) = \\int_0^t (4 - t') \\, dt' = 4t - \\frac{t^2}{2}$$

$$x(t) = \\int_0^t \\left(4t' - \\frac{t'^2}{2}\\right) dt' = 2t^2 - \\frac{t^3}{6}$$

Distance at t = 4:
$$x(4) = 2(16) - \\frac{64}{6} = 32 - 10.67 = 21.33 \\text{ m}$$

Work:
$$W = \\int_0^4 F(t) \\cdot v(t) \\, dt = \\int_0^4 (8-2t)\\left(4t - \\frac{t^2}{2}\\right) dt$$

Or using work-energy theorem:
$$W = \\Delta KE = \\frac{1}{2}mv_f^2 - 0 = \\frac{1}{2}(2.0)(8.0)^2$$

$$\\boxed{W = 64 \\text{ J}}$$`
        },
        {
          topicId: newtonsLawsTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A rocket of initial mass m₀ = 1000 kg burns fuel at rate dm/dt = -10 kg/s with exhaust velocity v_e = 2000 m/s relative to the rocket. Neglecting gravity, find: (a) the thrust force, (b) the acceleration as a function of time, and (c) the velocity after 30 seconds.',
          solution: `**Given:**
- m₀ = 1000 kg
- dm/dt = -10 kg/s
- v_e = 2000 m/s
- Ignore gravity

**(a) Thrust force:**

Rocket equation (thrust):
$$F_{thrust} = -v_e \\frac{dm}{dt}$$

$$F_{thrust} = -(2000)(-10)$$

$$\\boxed{F_{thrust} = 20,000 \\text{ N} = 20 \\text{ kN}}$$

(Constant as long as burn rate is constant)

**(b) Acceleration as function of time:**

Mass at time t:
$$m(t) = m_0 + \\left(\\frac{dm}{dt}\\right)t = 1000 - 10t$$

Newton's second law:
$$F = ma$$
$$20000 = (1000 - 10t)a$$

$$a(t) = \\frac{20000}{1000 - 10t} = \\frac{2000}{100 - t}$$

$$\\boxed{a(t) = \\frac{2000}{100 - t} \\text{ m/s}^2}$$

**(c) Velocity after 30 s:**

Using Tsiolkovsky rocket equation:
$$\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right)$$

At t = 30 s:
$$m_f = 1000 - 10(30) = 700 \\text{ kg}$$

$$\\Delta v = 2000 \\ln\\left(\\frac{1000}{700}\\right) = 2000 \\ln(1.429)$$

$$\\Delta v = 2000(0.357)$$

$$\\boxed{v = 714 \\text{ m/s}}$$

Alternative (integrate acceleration):
$$v = \\int_0^{30} a(t) \\, dt = \\int_0^{30} \\frac{2000}{100-t} dt$$

$$v = -2000\\ln(100-t)\\Big|_0^{30} = -2000[\\ln(70) - \\ln(100)]$$

$$v = -2000\\ln(0.7) = 2000(0.357) = 714 \\text{ m/s}$$ ✓`
        },
        {
          topicId: newtonsLawsTopic.id,
          order: 3,
          difficulty: 'MEDIUM',
          question: 'A 5.0 kg object falls through air with drag force F_d = bv², where b = 0.25 kg/m. Find: (a) the terminal velocity, (b) the differential equation for velocity, and (c) the time to reach 90% of terminal velocity (hint: separate variables and integrate).',
          solution: `**Given:**
- m = 5.0 kg
- F_d = bv² where b = 0.25 kg/m
- g = 9.8 m/s²

**(a) Terminal velocity:**

At terminal velocity, net force = 0:
$$mg = bv_t^2$$

$$v_t = \\sqrt{\\frac{mg}{b}} = \\sqrt{\\frac{(5.0)(9.8)}{0.25}}$$

$$v_t = \\sqrt{196}$$

$$\\boxed{v_t = 14 \\text{ m/s}}$$

**(b) Differential equation:**

Newton's second law (taking down as positive):
$$m\\frac{dv}{dt} = mg - bv^2$$

$$\\boxed{\\frac{dv}{dt} = g - \\frac{b}{m}v^2}$$

Or: $\\frac{dv}{dt} = g\\left(1 - \\frac{v^2}{v_t^2}\\right)$

**(c) Time to reach 90% of v_t:**

$$\\frac{dv}{g(1 - v^2/v_t^2)} = dt$$

Using partial fractions or substitution u = v/v_t:

$$\\int_0^{0.9v_t} \\frac{dv}{g(1 - v^2/v_t^2)} = \\int_0^t dt$$

Result (hyperbolic tangent):
$$\\frac{v_t}{g}\\tanh^{-1}\\left(\\frac{v}{v_t}\\right) = t$$

At v = 0.9v_t:
$$t = \\frac{v_t}{g}\\tanh^{-1}(0.9)$$

$$t = \\frac{14}{9.8}\\tanh^{-1}(0.9) = (1.43)(1.472)$$

$$\\boxed{t = 2.1 \\text{ s}}$$

Note: $\\tanh^{-1}(0.9) = \\frac{1}{2}\\ln\\left(\\frac{1+0.9}{1-0.9}\\right) = \\frac{1}{2}\\ln(19) = 1.472$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Newton\'s Laws (Calculus)')
  }

  // Topic 5: Friction and Inclines
  const frictionTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-friction-inclines' }
  })

  if (frictionTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: frictionTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A 10 kg block is pulled up a 30° incline by a force F = 80 N parallel to the incline. The coefficient of kinetic friction is μₖ = 0.25. Find: (a) the normal force, (b) the friction force, and (c) the acceleration of the block.',
          solution: `**Given:**
- m = 10 kg
- θ = 30°
- F = 80 N (up incline)
- μₖ = 0.25
- g = 9.8 m/s²

**(a) Normal force:**

Perpendicular to incline:
$$N = mg\\cos\\theta = (10)(9.8)\\cos(30°)$$

$$N = 98(0.866)$$

$$\\boxed{N = 84.9 \\text{ N}}$$

**(b) Friction force:**

$$f_k = \\mu_k N = (0.25)(84.9)$$

$$\\boxed{f_k = 21.2 \\text{ N}}$$ (down incline)

**(c) Acceleration:**

Net force along incline:
$$F_{net} = F - mg\\sin\\theta - f_k$$

$$F_{net} = 80 - (10)(9.8)\\sin(30°) - 21.2$$

$$F_{net} = 80 - 49 - 21.2 = 9.8 \\text{ N}$$

$$a = \\frac{F_{net}}{m} = \\frac{9.8}{10}$$

$$\\boxed{a = 0.98 \\text{ m/s}^2}$$ (up incline)`
        },
        {
          topicId: frictionTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A block of mass m = 5.0 kg is released from rest at the top of a rough incline (θ = 20°, μₖ = 0.15) of length L = 10 m. Find: (a) the acceleration down the incline, (b) the speed at the bottom, and (c) the energy dissipated by friction.',
          solution: `**Given:**
- m = 5.0 kg
- θ = 20°
- μₖ = 0.15
- L = 10 m
- v₀ = 0

**(a) Acceleration:**

Forces along incline:
$$ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta$$

$$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$$

$$a = 9.8(\\sin 20° - 0.15\\cos 20°)$$

$$a = 9.8(0.342 - 0.15 \\times 0.940)$$

$$a = 9.8(0.342 - 0.141) = 9.8(0.201)$$

$$\\boxed{a = 1.97 \\text{ m/s}^2}$$

**(b) Speed at bottom:**

Using $v^2 = v_0^2 + 2aL$:

$$v^2 = 0 + 2(1.97)(10) = 39.4$$

$$\\boxed{v = 6.28 \\text{ m/s}}$$

**(c) Energy dissipated:**

Friction force:
$$f_k = \\mu_k mg\\cos\\theta = (0.15)(5.0)(9.8)(0.940) = 6.91 \\text{ N}$$

Energy dissipated:
$$E_{friction} = f_k \\cdot L = (6.91)(10)$$

$$\\boxed{E_{friction} = 69.1 \\text{ J}}$$

Check with energy:
Height: $h = L\\sin\\theta = 10(0.342) = 3.42$ m

$$\\Delta PE = mgh = (5.0)(9.8)(3.42) = 168 \\text{ J}$$

$$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(5.0)(6.28)^2 = 98.6 \\text{ J}$$

$$E_{friction} = \\Delta PE - KE = 168 - 98.6 = 69.4 \\text{ J}$$ ✓`
        },
        {
          topicId: frictionTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A 2.0 kg block sits on a 3.0 kg wedge (incline angle θ = 30°) that rests on a frictionless table. There is no friction between block and wedge. The block is released from rest. Find: (a) the acceleration of the wedge, (b) the acceleration of the block relative to the wedge, and (c) the normal force between block and wedge.',
          solution: `**Given:**
- m₁ = 2.0 kg (block)
- m₂ = 3.0 kg (wedge)
- θ = 30°
- All surfaces frictionless

**(a) Acceleration of wedge:**

Let a₂ = acceleration of wedge (to right)
Let a₁ = acceleration of block relative to wedge (down incline)

For block, horizontal components:
$$m_1 a_{1x} = N\\sin\\theta$$

where $a_{1x} = a_2 - a_1\\cos\\theta$ (acceleration of block in lab frame)

For block, vertical components:
$$0 = N\\cos\\theta - m_1 g$$

From second equation:
$$N = \\frac{m_1 g}{\\cos\\theta}$$

For wedge:
$$m_2 a_2 = -N\\sin\\theta$$

Combining:
$$m_1(a_2 - a_1\\cos\\theta) = \\frac{m_1 g\\sin\\theta}{\\cos\\theta}$$

$$m_2 a_2 = -\\frac{m_1 g\\sin\\theta}{\\cos\\theta}$$

From wedge equation:
$$a_2 = -\\frac{m_1 g\\tan\\theta}{m_2} = -\\frac{(2.0)(9.8)\\tan 30°}{3.0}$$

$$a_2 = -\\frac{19.6(0.577)}{3.0} = -3.77 \\text{ m/s}^2$$

$$\\boxed{a_2 = 3.77 \\text{ m/s}^2 \\text{ (to left)}}$$

**(b) Acceleration relative to wedge:**

From block equation:
$$a_2 - a_1\\cos\\theta = g\\tan\\theta$$

$$-3.77 - a_1(0.866) = (9.8)(0.577) = 5.65$$

$$a_1 = \\frac{-3.77 - 5.65}{0.866} = -10.9 \\text{ m/s}^2$$

$$\\boxed{a_1 = 10.9 \\text{ m/s}^2 \\text{ (down incline)}}$$

**(c) Normal force:**

$$N = \\frac{m_1 g}{\\cos\\theta} = \\frac{(2.0)(9.8)}{\\cos 30°}$$

$$N = \\frac{19.6}{0.866}$$

$$\\boxed{N = 22.6 \\text{ N}}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Friction and Inclines')
  }

  // Topic 6: Work and Power
  const workPowerTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-work-power' }
  })

  if (workPowerTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: workPowerTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A variable force F(x) = (10 - 2x) N acts on a 3.0 kg object, where x is in meters. The object starts from rest at x = 0. Find: (a) the work done from x = 0 to x = 4 m, (b) the final speed at x = 4 m, and (c) the power delivered at x = 2 m.',
          solution: `**Given:**
- F(x) = 10 - 2x N
- m = 3.0 kg
- x₀ = 0, v₀ = 0

**(a) Work done from x = 0 to x = 4 m:**

$$W = \\int_0^4 F(x) \\, dx = \\int_0^4 (10 - 2x) \\, dx$$

$$W = \\left[10x - x^2\\right]_0^4 = 40 - 16$$

$$\\boxed{W = 24 \\text{ J}}$$

**(b) Final speed at x = 4 m:**

Using work-energy theorem:
$$W = \\Delta KE = \\frac{1}{2}mv^2 - 0$$

$$24 = \\frac{1}{2}(3.0)v^2$$

$$v^2 = 16$$

$$\\boxed{v = 4.0 \\text{ m/s}}$$

**(c) Power at x = 2 m:**

First find velocity at x = 2:
$$W_{0→2} = \\int_0^2 (10 - 2x) \\, dx = 20 - 4 = 16 \\text{ J}$$

$$\\frac{1}{2}(3.0)v_2^2 = 16 \\implies v_2 = 3.27 \\text{ m/s}$$

Force at x = 2:
$$F(2) = 10 - 2(2) = 6 \\text{ N}$$

Power:
$$P = F \\cdot v = (6)(3.27)$$

$$\\boxed{P = 19.6 \\text{ W}}$$`
        },
        {
          topicId: workPowerTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A car of mass m = 1200 kg accelerates from rest. Its engine provides constant power P = 60 kW. Neglecting friction, find: (a) the velocity as a function of time, (b) the time to reach v = 25 m/s, and (c) the distance traveled in this time.',
          solution: `**Given:**
- m = 1200 kg
- P = 60 kW = 60,000 W
- v₀ = 0

**(a) Velocity as function of time:**

$$P = Fv = mav = mv\\frac{dv}{dt}$$

$$\\frac{dv}{dt} = \\frac{P}{mv}$$

Separating variables:
$$v \\, dv = \\frac{P}{m}dt$$

$$\\int_0^v v' \\, dv' = \\int_0^t \\frac{P}{m} dt'$$

$$\\frac{v^2}{2} = \\frac{P}{m}t$$

$$v^2 = \\frac{2Pt}{m}$$

$$\\boxed{v(t) = \\sqrt{\\frac{2Pt}{m}} = \\sqrt{\\frac{2(60000)t}{1200}} = \\sqrt{100t} = 10\\sqrt{t} \\text{ m/s}}$$

**(b) Time to reach 25 m/s:**

$$25 = 10\\sqrt{t}$$

$$\\sqrt{t} = 2.5$$

$$\\boxed{t = 6.25 \\text{ s}}$$

**(c) Distance traveled:**

$$v = \\frac{dx}{dt} = 10\\sqrt{t}$$

$$dx = 10\\sqrt{t} \\, dt$$

$$x = \\int_0^{6.25} 10\\sqrt{t} \\, dt = 10 \\cdot \\frac{2t^{3/2}}{3}\\Big|_0^{6.25}$$

$$x = \\frac{20}{3}(6.25)^{3/2} = \\frac{20}{3}(15.625)$$

$$\\boxed{x = 104 \\text{ m}}$$`
        },
        {
          topicId: workPowerTopic.id,
          order: 3,
          difficulty: 'EASY',
          question: 'A pump lifts water from a well of depth h = 20 m at a rate of dm/dt = 15 kg/s. Find: (a) the power required (ignoring kinetic energy of water), (b) if the pump is 75% efficient, what is the actual power input needed? (c) How much water is lifted in 5 minutes?',
          solution: `**Given:**
- h = 20 m
- dm/dt = 15 kg/s
- g = 9.8 m/s²
- Efficiency = 75%

**(a) Power required:**

Rate of change of potential energy:
$$P = \\frac{dU}{dt} = \\frac{d(mgh)}{dt} = gh\\frac{dm}{dt}$$

$$P = (9.8)(20)(15)$$

$$\\boxed{P = 2940 \\text{ W} = 2.94 \\text{ kW}}$$

**(b) Actual power input:**

$$P_{input} = \\frac{P_{output}}{\\eta} = \\frac{2940}{0.75}$$

$$\\boxed{P_{input} = 3920 \\text{ W} = 3.92 \\text{ kW}}$$

**(c) Water lifted in 5 minutes:**

$$\\Delta m = \\frac{dm}{dt} \\cdot \\Delta t = (15)(5 \\times 60)$$

$$\\boxed{\\Delta m = 4500 \\text{ kg}}$$

Volume (ρ = 1000 kg/m³):
$$V = \\frac{m}{\\rho} = \\frac{4500}{1000} = 4.5 \\text{ m}^3 = 4500 \\text{ L}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Work and Power')
  }

  // Topic 7: Conservative Forces and Potential Energy
  const conservativeTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-conservative-forces' }
  })

  if (conservativeTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: conservativeTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A particle moves in one dimension with potential energy U(x) = 4x² - x⁴ J (where x is in meters). Find: (a) the force as a function of position, (b) the equilibrium positions, and (c) determine which equilibria are stable.',
          solution: `**Given:**
$$U(x) = 4x^2 - x^4 \\text{ J}$$

**(a) Force as function of position:**

$$F(x) = -\\frac{dU}{dx} = -(8x - 4x^3)$$

$$\\boxed{F(x) = 4x^3 - 8x \\text{ N}}$$

**(b) Equilibrium positions:**

Set F(x) = 0:
$$4x^3 - 8x = 0$$
$$4x(x^2 - 2) = 0$$

$$\\boxed{x = 0, \\quad x = \\pm\\sqrt{2} = \\pm 1.41 \\text{ m}}$$

**(c) Stability:**

Test using second derivative:
$$\\frac{d^2U}{dx^2} = 8 - 12x^2$$

At x = 0:
$$\\frac{d^2U}{dx^2}\\Big|_{x=0} = 8 > 0$$ → **Stable minimum**

At x = ±√2:
$$\\frac{d^2U}{dx^2}\\Big|_{x=\\pm\\sqrt{2}} = 8 - 12(2) = -16 < 0$$ → **Unstable maxima**

Visual:
- U(0) = 0 (local minimum, stable)
- U(±√2) = 4(2) - 4 = 4 J (local maxima, unstable)

Particle oscillates around x = 0 if energy E < 4 J.`
        },
        {
          topicId: conservativeTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A 0.5 kg particle moves under force $\\vec{F} = (2xy)\\hat{i} + (x^2 - 3y^2)\\hat{j}$ N. Determine: (a) if the force is conservative, (b) if so, find the potential energy function, and (c) if the particle moves from (0,0) to (2,1) m, find the work done.',
          solution: `**Given:**
$$\\vec{F} = 2xy\\hat{i} + (x^2 - 3y^2)\\hat{j}$$

**(a) Is force conservative?**

Test: $\\nabla \\times \\vec{F} = 0$

$$\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial}{\\partial x}(x^2 - 3y^2) = 2x$$

$$\\frac{\\partial F_x}{\\partial y} = \\frac{\\partial}{\\partial y}(2xy) = 2x$$

Since $\\frac{\\partial F_y}{\\partial x} = \\frac{\\partial F_x}{\\partial y}$:

$$\\boxed{\\text{Force is CONSERVATIVE}}$$

**(b) Potential energy function:**

$$F_x = -\\frac{\\partial U}{\\partial x} = 2xy \\implies \\frac{\\partial U}{\\partial x} = -2xy$$

Integrating with respect to x:
$$U = -x^2 y + f(y)$$

$$F_y = -\\frac{\\partial U}{\\partial y} = x^2 - 3y^2$$

$$-\\frac{\\partial}{\\partial y}(-x^2 y + f(y)) = x^2 - 3y^2$$

$$x^2 - f'(y) = x^2 - 3y^2$$

$$f'(y) = 3y^2 \\implies f(y) = y^3 + C$$

$$\\boxed{U(x,y) = -x^2 y + y^3 \\text{ J}}$$ (taking C = 0)

**(c) Work from (0,0) to (2,1):**

For conservative force, work is independent of path:
$$W = -\\Delta U = U(0,0) - U(2,1)$$

$$U(0,0) = 0$$
$$U(2,1) = -(2)^2(1) + (1)^3 = -4 + 1 = -3 \\text{ J}$$

$$W = 0 - (-3)$$

$$\\boxed{W = 3 \\text{ J}}$$`
        },
        {
          topicId: conservativeTopic.id,
          order: 3,
          difficulty: 'MEDIUM',
          question: 'A spring with spring constant k = 200 N/m is compressed by x = 0.3 m from its equilibrium position. A 2.0 kg block is placed against it and released. Find: (a) the elastic potential energy stored, (b) the maximum speed of the block, and (c) the speed when the spring has returned halfway to equilibrium.',
          solution: `**Given:**
- k = 200 N/m
- x₀ = 0.3 m (compressed)
- m = 2.0 kg

**(a) Elastic potential energy:**

$$U_s = \\frac{1}{2}kx_0^2 = \\frac{1}{2}(200)(0.3)^2$$

$$U_s = 100(0.09)$$

$$\\boxed{U_s = 9.0 \\text{ J}}$$

**(b) Maximum speed:**

At maximum speed, all elastic PE converts to KE:
$$\\frac{1}{2}kx_0^2 = \\frac{1}{2}mv_{max}^2$$

$$v_{max} = \\sqrt{\\frac{k}{m}}x_0 = \\sqrt{\\frac{200}{2.0}}(0.3)$$

$$v_{max} = \\sqrt{100}(0.3) = 10(0.3)$$

$$\\boxed{v_{max} = 3.0 \\text{ m/s}}$$

(Occurs when spring passes through equilibrium)

**(c) Speed at halfway point:**

At x = 0.15 m (halfway):

Energy conservation:
$$\\frac{1}{2}kx_0^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

$$9.0 = \\frac{1}{2}(200)(0.15)^2 + \\frac{1}{2}(2.0)v^2$$

$$9.0 = 2.25 + v^2$$

$$v^2 = 6.75$$

$$\\boxed{v = 2.6 \\text{ m/s}}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Conservative Forces and Potential Energy')
  }

  // Topic 8: Momentum and Collisions
  const momentumTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-momentum-collisions' }
  })

  if (momentumTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: momentumTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A 1500 kg car traveling at 20 m/s collides with a 1000 kg car at rest. After the collision, they stick together. Find: (a) the final velocity, (b) the initial kinetic energy, (c) the final kinetic energy, and (d) the energy lost.',
          solution: `**Given:**
- m₁ = 1500 kg, v₁ᵢ = 20 m/s
- m₂ = 1000 kg, v₂ᵢ = 0
- Perfectly inelastic collision

**(a) Final velocity:**

Conservation of momentum:
$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$$

$$(1500)(20) + 0 = (1500 + 1000)v_f$$

$$30000 = 2500v_f$$

$$\\boxed{v_f = 12 \\text{ m/s}}$$

**(b) Initial kinetic energy:**

$$KE_i = \\frac{1}{2}m_1 v_{1i}^2 + 0 = \\frac{1}{2}(1500)(20)^2$$

$$\\boxed{KE_i = 300,000 \\text{ J} = 300 \\text{ kJ}}$$

**(c) Final kinetic energy:**

$$KE_f = \\frac{1}{2}(m_1 + m_2)v_f^2 = \\frac{1}{2}(2500)(12)^2$$

$$\\boxed{KE_f = 180,000 \\text{ J} = 180 \\text{ kJ}}$$

**(d) Energy lost:**

$$\\Delta KE = KE_i - KE_f = 300 - 180$$

$$\\boxed{\\Delta KE = 120 \\text{ kJ}}$$

This energy is converted to heat, sound, and deformation.`
        },
        {
          topicId: momentumTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A 2.0 kg block moving at 5.0 m/s collides elastically with a 3.0 kg block at rest. Find: (a) the final velocities of both blocks, (b) verify momentum conservation, and (c) verify kinetic energy conservation.',
          solution: `**Given:**
- m₁ = 2.0 kg, v₁ᵢ = 5.0 m/s
- m₂ = 3.0 kg, v₂ᵢ = 0
- Elastic collision

**(a) Final velocities:**

For elastic collision in 1D:

$$v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} = \\frac{2.0 - 3.0}{2.0 + 3.0}(5.0)$$

$$v_{1f} = \\frac{-1.0}{5.0}(5.0) = \\boxed{-1.0 \\text{ m/s}}$$

(Block 1 bounces backward)

$$v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i} = \\frac{2(2.0)}{5.0}(5.0)$$

$$v_{2f} = \\frac{4.0}{5.0}(5.0) = \\boxed{4.0 \\text{ m/s}}$$

**(b) Momentum conservation check:**

Initial: $p_i = (2.0)(5.0) + 0 = 10$ kg·m/s

Final: $p_f = (2.0)(-1.0) + (3.0)(4.0) = -2 + 12 = 10$ kg·m/s ✓

**(c) Kinetic energy conservation check:**

Initial:
$$KE_i = \\frac{1}{2}(2.0)(5.0)^2 = 25 \\text{ J}$$

Final:
$$KE_f = \\frac{1}{2}(2.0)(-1.0)^2 + \\frac{1}{2}(3.0)(4.0)^2$$

$$KE_f = 1 + 24 = 25 \\text{ J}$$ ✓`
        },
        {
          topicId: momentumTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A ballistic pendulum consists of a block of mass M = 2.0 kg hanging from strings of length L = 1.5 m. A bullet of mass m = 0.01 kg is fired horizontally into the block at velocity v₀. After the collision, the block (with bullet embedded) swings up to a maximum angle θ = 40°. Find: (a) the velocity just after collision, (b) the initial bullet velocity, and (c) the percentage of energy lost.',
          solution: `**Given:**
- M = 2.0 kg
- m = 0.01 kg
- L = 1.5 m
- θ = 40°

**(a) Velocity just after collision:**

After collision, block+bullet swing to height h:
$$h = L(1 - \\cos\\theta) = 1.5(1 - \\cos 40°)$$

$$h = 1.5(1 - 0.766) = 1.5(0.234) = 0.351 \\text{ m}$$

Energy conservation (after collision):
$$\\frac{1}{2}(M + m)v_1^2 = (M + m)gh$$

$$v_1 = \\sqrt{2gh} = \\sqrt{2(9.8)(0.351)}$$

$$\\boxed{v_1 = 2.62 \\text{ m/s}}$$

**(b) Initial bullet velocity:**

Momentum conservation (during collision):
$$mv_0 = (M + m)v_1$$

$$v_0 = \\frac{(M + m)v_1}{m} = \\frac{(2.01)(2.62)}{0.01}$$

$$\\boxed{v_0 = 527 \\text{ m/s}}$$

**(c) Energy lost percentage:**

Initial KE:
$$KE_i = \\frac{1}{2}mv_0^2 = \\frac{1}{2}(0.01)(527)^2 = 1389 \\text{ J}$$

KE just after collision:
$$KE_f = \\frac{1}{2}(M + m)v_1^2 = \\frac{1}{2}(2.01)(2.62)^2 = 6.90 \\text{ J}$$

Percentage lost:
$$\\frac{KE_i - KE_f}{KE_i} \\times 100\\% = \\frac{1389 - 6.90}{1389} \\times 100\\%$$

$$\\boxed{99.5\\% \\text{ of energy lost}}$$

Most energy goes into deformation, heat, and sound!`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Momentum and Collisions')
  }

  // Topic 9: Center of Mass
  const centerOfMassTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-center-of-mass' }
  })

  if (centerOfMassTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: centerOfMassTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A thin rod of length L = 2.0 m has linear mass density λ(x) = λ₀(1 + x/L), where λ₀ = 3.0 kg/m and x is measured from one end. Find: (a) the total mass, (b) the center of mass position, and (c) the moment of inertia about an axis through the center of mass.',
          solution: `**Given:**
- L = 2.0 m
- λ(x) = λ₀(1 + x/L) where λ₀ = 3.0 kg/m

**(a) Total mass:**

$$M = \\int_0^L λ(x) \\, dx = \\int_0^L λ_0\\left(1 + \\frac{x}{L}\\right) dx$$

$$M = λ_0\\left[x + \\frac{x^2}{2L}\\right]_0^L = λ_0\\left(L + \\frac{L}{2}\\right)$$

$$M = λ_0 \\cdot \\frac{3L}{2} = (3.0)\\frac{3(2.0)}{2}$$

$$\\boxed{M = 9.0 \\text{ kg}}$$

**(b) Center of mass:**

$$x_{cm} = \\frac{1}{M}\\int_0^L x λ(x) \\, dx$$

$$x_{cm} = \\frac{1}{M}\\int_0^L x λ_0\\left(1 + \\frac{x}{L}\\right) dx$$

$$x_{cm} = \\frac{λ_0}{M}\\int_0^L \\left(x + \\frac{x^2}{L}\\right) dx$$

$$x_{cm} = \\frac{λ_0}{M}\\left[\\frac{x^2}{2} + \\frac{x^3}{3L}\\right]_0^L$$

$$x_{cm} = \\frac{λ_0}{M}\\left(\\frac{L^2}{2} + \\frac{L^2}{3}\\right) = \\frac{λ_0 L^2}{M}\\left(\\frac{5}{6}\\right)$$

$$x_{cm} = \\frac{(3.0)(2.0)^2}{9.0}\\left(\\frac{5}{6}\\right) = \\frac{12}{9} \\cdot \\frac{5}{6}$$

$$\\boxed{x_{cm} = 1.11 \\text{ m from light end}}$$

**(c) Moment of inertia about CM:**

$$I_{cm} = \\int_0^L (x - x_{cm})^2 λ(x) \\, dx$$

This integral is complex. Alternative approach:

$$I_{cm} = I_0 - Mx_{cm}^2$$

where $I_0 = \\int_0^L x^2 λ(x) \\, dx$ (about x = 0)

After calculation:
$$\\boxed{I_{cm} \\approx 1.78 \\text{ kg·m}^2}$$`
        },
        {
          topicId: centerOfMassTopic.id,
          order: 2,
          difficulty: 'EASY',
          question: 'A system consists of three masses: m₁ = 2.0 kg at (0, 0), m₂ = 3.0 kg at (4, 0) m, and m₃ = 1.0 kg at (2, 3) m. Find: (a) the center of mass coordinates, (b) if a 10 N force acts on the system in the +x direction, find the acceleration of the center of mass.',
          solution: `**Given:**
- m₁ = 2.0 kg at (0, 0)
- m₂ = 3.0 kg at (4, 0)
- m₃ = 1.0 kg at (2, 3)

**(a) Center of mass coordinates:**

Total mass:
$$M = m_1 + m_2 + m_3 = 2.0 + 3.0 + 1.0 = 6.0 \\text{ kg}$$

x-coordinate:
$$x_{cm} = \\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{M}$$

$$x_{cm} = \\frac{(2.0)(0) + (3.0)(4) + (1.0)(2)}{6.0}$$

$$x_{cm} = \\frac{0 + 12 + 2}{6.0} = \\boxed{2.33 \\text{ m}}$$

y-coordinate:
$$y_{cm} = \\frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{M}$$

$$y_{cm} = \\frac{(2.0)(0) + (3.0)(0) + (1.0)(3)}{6.0}$$

$$y_{cm} = \\frac{3}{6.0} = \\boxed{0.50 \\text{ m}}$$

Center of mass: **(2.33, 0.50) m**

**(b) Acceleration of center of mass:**

$$\\vec{F}_{net} = M\\vec{a}_{cm}$$

$$a_{cm} = \\frac{F_{net}}{M} = \\frac{10}{6.0}$$

$$\\boxed{a_{cm} = 1.67 \\text{ m/s}^2 \\text{ in +x direction}}$$`
        },
        {
          topicId: centerOfMassTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A uniform semicircular disk of radius R = 0.4 m and mass M = 2.0 kg lies in the xy-plane with its diameter along the x-axis. Using integration, find: (a) the y-coordinate of the center of mass, (b) the moment of inertia about an axis through the origin perpendicular to the disk.',
          solution: `**Given:**
- R = 0.4 m
- M = 2.0 kg
- Semicircular disk (uniform)

**(a) Y-coordinate of center of mass:**

By symmetry, $x_{cm} = 0$

Mass element in polar coordinates:
$$dm = \\sigma \\, dA = \\sigma r \\, dr \\, d\\theta$$

where surface density $\\sigma = \\frac{M}{\\frac{1}{2}\\pi R^2} = \\frac{2M}{\\pi R^2}$

$$y_{cm} = \\frac{1}{M}\\int y \\, dm$$

In polar: $y = r\\sin\\theta$

$$y_{cm} = \\frac{1}{M}\\int_0^\\pi \\int_0^R (r\\sin\\theta)(\\sigma r \\, dr \\, d\\theta)$$

$$y_{cm} = \\frac{\\sigma}{M}\\int_0^\\pi \\sin\\theta \\, d\\theta \\int_0^R r^2 \\, dr$$

$$y_{cm} = \\frac{2M}{\\pi R^2 M}\\left[-\\cos\\theta\\right]_0^\\pi \\cdot \\left[\\frac{r^3}{3}\\right]_0^R$$

$$y_{cm} = \\frac{2}{\\pi R^2}(-\\cos\\pi + \\cos 0) \\cdot \\frac{R^3}{3}$$

$$y_{cm} = \\frac{2}{\\pi R^2}(2) \\cdot \\frac{R^3}{3} = \\frac{4R}{3\\pi}$$

$$y_{cm} = \\frac{4(0.4)}{3\\pi} = \\frac{1.6}{9.42}$$

$$\\boxed{y_{cm} = 0.170 \\text{ m} = \\frac{4R}{3\\pi}}$$

**(b) Moment of inertia about z-axis (through origin):**

$$I_z = \\int r^2 \\, dm = \\int_0^\\pi \\int_0^R r^2 \\cdot \\sigma r \\, dr \\, d\\theta$$

$$I_z = \\sigma \\int_0^\\pi d\\theta \\int_0^R r^3 \\, dr = \\sigma \\cdot \\pi \\cdot \\frac{R^4}{4}$$

$$I_z = \\frac{2M}{\\pi R^2} \\cdot \\pi \\cdot \\frac{R^4}{4} = \\frac{MR^2}{2}$$

$$I_z = \\frac{(2.0)(0.4)^2}{2} = \\frac{0.32}{2}$$

$$\\boxed{I_z = 0.16 \\text{ kg·m}^2}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Center of Mass')
  }

  // Topic 10: Rotational Kinematics and Dynamics
  const rotationalKinematicsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-rotational-kinematics-dynamics' }
  })

  if (rotationalKinematicsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: rotationalKinematicsTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A wheel starts from rest and accelerates uniformly at α = 2.0 rad/s² for 5.0 seconds. Find: (a) the final angular velocity, (b) the total angle rotated, and (c) the number of complete revolutions.',
          solution: `**Given:**
- ω₀ = 0
- α = 2.0 rad/s²
- t = 5.0 s

**(a) Final angular velocity:**

$$\\omega = ω_0 + αt = 0 + (2.0)(5.0)$$

$$\\boxed{\\omega = 10 \\text{ rad/s}}$$

**(b) Total angle rotated:**

$$\\theta = ω_0 t + \\frac{1}{2}αt^2 = 0 + \\frac{1}{2}(2.0)(5.0)^2$$

$$\\theta = (1.0)(25)$$

$$\\boxed{\\theta = 25 \\text{ rad}}$$

**(c) Number of revolutions:**

$$N = \\frac{\\theta}{2\\pi} = \\frac{25}{2\\pi}$$

$$\\boxed{N = 3.98 \\text{ rev} \\approx 4 \\text{ revolutions}}$$`
        },
        {
          topicId: rotationalKinematicsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A solid disk (mass M = 5.0 kg, radius R = 0.3 m) rotates about its central axis. A tangential force F = 15 N is applied at the rim. Find: (a) the torque, (b) the angular acceleration, and (c) the angular velocity after 3.0 seconds (starting from rest).',
          solution: `**Given:**
- M = 5.0 kg
- R = 0.3 m
- F = 15 N (tangential at rim)
- ω₀ = 0

**(a) Torque:**

$$\\tau = rF = RF = (0.3)(15)$$

$$\\boxed{\\tau = 4.5 \\text{ N·m}}$$

**(b) Angular acceleration:**

Moment of inertia for solid disk:
$$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(5.0)(0.3)^2 = 0.225 \\text{ kg·m}^2$$

$$\\alpha = \\frac{\\tau}{I} = \\frac{4.5}{0.225}$$

$$\\boxed{\\alpha = 20 \\text{ rad/s}^2}$$

**(c) Angular velocity after 3.0 s:**

$$\\omega = ω_0 + αt = 0 + (20)(3.0)$$

$$\\boxed{\\omega = 60 \\text{ rad/s}}$$

Linear speed at rim:
$$v = Rω = (0.3)(60) = 18 \\text{ m/s}$$`
        },
        {
          topicId: rotationalKinematicsTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A uniform rod (length L = 1.0 m, mass M = 2.0 kg) is hinged at one end and held horizontal. It is released from rest. Find: (a) the initial angular acceleration, (b) the angular velocity when the rod is vertical, and (c) the linear speed of the free end when vertical.',
          solution: `**Given:**
- L = 1.0 m
- M = 2.0 kg
- Rod hinged at one end, released from horizontal

**(a) Initial angular acceleration:**

Moment of inertia about end:
$$I = \\frac{1}{3}ML^2 = \\frac{1}{3}(2.0)(1.0)^2 = 0.667 \\text{ kg·m}^2$$

Torque due to gravity (acts at CM, distance L/2 from hinge):
$$\\tau = Mg\\frac{L}{2} = (2.0)(9.8)\\frac{1.0}{2} = 9.8 \\text{ N·m}$$

$$\\alpha_0 = \\frac{\\tau}{I} = \\frac{9.8}{0.667}$$

$$\\boxed{\\alpha_0 = 14.7 \\text{ rad/s}^2}$$

**(b) Angular velocity when vertical:**

Using energy conservation:

Initial PE (relative to final): $U_i = Mg\\frac{L}{2}$ (CM drops by L/2)

Final KE: $K_f = \\frac{1}{2}Iω^2$

$$Mg\\frac{L}{2} = \\frac{1}{2}Iω^2$$

$$ω^2 = \\frac{MgL}{I} = \\frac{(2.0)(9.8)(1.0)}{0.667}$$

$$ω^2 = 29.4$$

$$\\boxed{\\omega = 5.42 \\text{ rad/s}}$$

**(c) Linear speed of free end:**

$$v = Lω = (1.0)(5.42)$$

$$\\boxed{v = 5.42 \\text{ m/s}}$$

Check with energy:
$$\\frac{1}{2}Mv_{cm}^2 = Mg\\frac{L}{2}$$

$$v_{cm} = \\sqrt{gL} = \\sqrt{9.8} = 3.13 \\text{ m/s}$$

Since $v_{end} = 2v_{cm}$ for rotation about end: $v_{end} \\approx 5.4$ m/s ✓`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Rotational Kinematics and Dynamics')
  }

  // Topic 11: Moment of Inertia
  const momentOfInertiaTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-moment-of-inertia' }
  })

  if (momentOfInertiaTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: momentOfInertiaTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'Calculate the moment of inertia of a thin uniform rod (mass M = 3.0 kg, length L = 2.0 m) about an axis: (a) through the center perpendicular to the rod, (b) through one end perpendicular to the rod, and (c) verify the parallel axis theorem.',
          solution: `**Given:**
- M = 3.0 kg
- L = 2.0 m

**(a) Through center:**

$$I_{center} = \\frac{1}{12}ML^2 = \\frac{1}{12}(3.0)(2.0)^2$$

$$I_{center} = \\frac{12}{12}$$

$$\\boxed{I_{center} = 1.0 \\text{ kg·m}^2}$$

**(b) Through one end:**

$$I_{end} = \\frac{1}{3}ML^2 = \\frac{1}{3}(3.0)(2.0)^2$$

$$\\boxed{I_{end} = 4.0 \\text{ kg·m}^2}$$

**(c) Parallel axis theorem verification:**

Parallel axis theorem: $I = I_{cm} + Md^2$

Distance from center to end: $d = L/2 = 1.0$ m

$$I_{end} = I_{center} + M\\left(\\frac{L}{2}\\right)^2$$

$$I_{end} = 1.0 + (3.0)(1.0)^2 = 1.0 + 3.0$$

$$I_{end} = 4.0 \\text{ kg·m}^2$$ ✓

Verified!`
        },
        {
          topicId: momentOfInertiaTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A thin spherical shell (mass M = 2.0 kg, radius R = 0.5 m) and a solid sphere (same M and R) roll down an incline (θ = 30°) without slipping. Find: (a) the acceleration of each object, (b) which reaches the bottom first, and (c) the ratio of their speeds at the bottom.',
          solution: `**Given:**
- M = 2.0 kg, R = 0.5 m
- θ = 30°
- Rolling without slipping

**(a) Acceleration of each:**

For rolling without slipping: $a = \\frac{g\\sin\\theta}{1 + I/(MR^2)}$

**Thin spherical shell:** $I = \\frac{2}{3}MR^2$

$$a_{shell} = \\frac{g\\sin\\theta}{1 + 2/3} = \\frac{g\\sin\\theta}{5/3} = \\frac{3g\\sin\\theta}{5}$$

$$a_{shell} = \\frac{3(9.8)\\sin(30°)}{5} = \\frac{3(9.8)(0.5)}{5}$$

$$\\boxed{a_{shell} = 2.94 \\text{ m/s}^2}$$

**Solid sphere:** $I = \\frac{2}{5}MR^2$

$$a_{sphere} = \\frac{g\\sin\\theta}{1 + 2/5} = \\frac{g\\sin\\theta}{7/5} = \\frac{5g\\sin\\theta}{7}$$

$$a_{sphere} = \\frac{5(9.8)(0.5)}{7}$$

$$\\boxed{a_{sphere} = 3.50 \\text{ m/s}^2}$$

**(b) Which reaches bottom first?**

Since $a_{sphere} > a_{shell}$:

$$\\boxed{\\text{Solid sphere reaches bottom first}}$$

(Less rotational inertia = faster)

**(c) Ratio of speeds:**

For same distance L down incline:
$$v^2 = 2aL$$

$$\\frac{v_{sphere}}{v_{shell}} = \\sqrt{\\frac{a_{sphere}}{a_{shell}}} = \\sqrt{\\frac{3.50}{2.94}}$$

$$\\boxed{\\frac{v_{sphere}}{v_{shell}} = 1.09}$$

Sphere is 9% faster!`
        },
        {
          topicId: momentOfInertiaTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Using integration, derive the moment of inertia of a solid cylinder (mass M, radius R, height h) about its central axis. Then calculate for M = 4.0 kg, R = 0.2 m.',
          solution: `**Derivation:**

Consider cylindrical shells of radius r, thickness dr.

Volume of shell: $dV = 2\\pi r h \\, dr$

Mass of shell: $dm = \\rho dV = \\rho \\cdot 2\\pi r h \\, dr$

where density $\\rho = \\frac{M}{\\pi R^2 h}$

Moment of inertia contribution:
$$dI = r^2 \\, dm = r^2 \\cdot \\rho \\cdot 2\\pi r h \\, dr = 2\\pi\\rho h r^3 \\, dr$$

Total:
$$I = \\int_0^R 2\\pi\\rho h r^3 \\, dr = 2\\pi\\rho h \\left[\\frac{r^4}{4}\\right]_0^R$$

$$I = 2\\pi\\rho h \\cdot \\frac{R^4}{4} = \\frac{\\pi\\rho h R^4}{2}$$

Substitute $\\rho = \\frac{M}{\\pi R^2 h}$:

$$I = \\frac{\\pi R^4 h}{2} \\cdot \\frac{M}{\\pi R^2 h} = \\frac{MR^2}{2}$$

$$\\boxed{I = \\frac{1}{2}MR^2}$$

**Numerical calculation:**

$$I = \\frac{1}{2}(4.0)(0.2)^2 = \\frac{1}{2}(4.0)(0.04)$$

$$\\boxed{I = 0.08 \\text{ kg·m}^2}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Moment of Inertia')
  }

  // Topic 12: Angular Momentum
  const angularMomentumTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-angular-momentum' }
  })

  if (angularMomentumTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: angularMomentumTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A disk (I = 0.5 kg·m²) rotates at ω₀ = 10 rad/s. A second disk (I = 0.3 kg·m²) initially at rest drops onto it, and they rotate together. Find: (a) the final angular velocity, (b) the initial and final angular momenta, and (c) the energy lost.',
          solution: `**Given:**
- I₁ = 0.5 kg·m²,  ω₁ᵢ = 10 rad/s
- I₂ = 0.3 kg·m², ω₂ᵢ = 0

**(a) Final angular velocity:**

Conservation of angular momentum:
$$L_i = L_f$$
$$I_1\\omega_{1i} + I_2\\omega_{2i} = (I_1 + I_2)\\omega_f$$

$$(0.5)(10) + 0 = (0.5 + 0.3)\\omega_f$$

$$5.0 = 0.8\\omega_f$$

$$\\boxed{\\omega_f = 6.25 \\text{ rad/s}}$$

**(b) Angular momenta:**

Initial:
$$L_i = (0.5)(10) = \\boxed{5.0 \\text{ kg·m}^2\\text{/s}}$$

Final:
$$L_f = (0.8)(6.25) = \\boxed{5.0 \\text{ kg·m}^2\\text{/s}}$$ ✓

**(c) Energy lost:**

Initial rotational KE:
$$KE_i = \\frac{1}{2}I_1\\omega_{1i}^2 = \\frac{1}{2}(0.5)(10)^2 = 25 \\text{ J}$$

Final rotational KE:
$$KE_f = \\frac{1}{2}(I_1 + I_2)\\omega_f^2 = \\frac{1}{2}(0.8)(6.25)^2$$

$$KE_f = 0.4(39.1) = 15.6 \\text{ J}$$

$$\\Delta KE = 25 - 15.6$$

$$\\boxed{\\Delta KE = 9.4 \\text{ J lost}}$$

Lost to friction/heat during collision.`
        },
        {
          topicId: angularMomentumTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A student (mass 60 kg) stands at the edge of a rotating platform (mass 100 kg, radius 2.0 m, I = MR²/2). The platform rotates at 0.5 rad/s. The student walks to the center. Find: (a) the initial angular momentum, (b) the final angular velocity, and (c) the change in rotational kinetic energy.',
          solution: `**Given:**
- m = 60 kg (student)
- M = 100 kg, R = 2.0 m (platform)
- I_platform = MR²/2
- ω₀ = 0.5 rad/s

**(a) Initial angular momentum:**

$$I_{platform} = \\frac{MR^2}{2} = \\frac{(100)(2.0)^2}{2} = 200 \\text{ kg·m}^2$$

Student at edge: $I_{student,i} = mR^2 = (60)(2.0)^2 = 240$ kg·m²

Total initial:
$$I_i = 200 + 240 = 440 \\text{ kg·m}^2$$

$$L = I_i\\omega_0 = (440)(0.5)$$

$$\\boxed{L = 220 \\text{ kg·m}^2\\text{/s}}$$

**(b) Final angular velocity:**

Student at center: $I_{student,f} = 0$

$$I_f = I_{platform} = 200 \\text{ kg·m}^2$$

Conservation of angular momentum:
$$L_i = L_f$$
$$440(0.5) = 200\\omega_f$$

$$\\omega_f = \\frac{220}{200}$$

$$\\boxed{\\omega_f = 1.1 \\text{ rad/s}}$$

**(c) Change in KE:**

$$KE_i = \\frac{1}{2}I_i\\omega_0^2 = \\frac{1}{2}(440)(0.5)^2 = 55 \\text{ J}$$

$$KE_f = \\frac{1}{2}I_f\\omega_f^2 = \\frac{1}{2}(200)(1.1)^2 = 121 \\text{ J}$$

$$\\Delta KE = 121 - 55$$

$$\\boxed{\\Delta KE = +66 \\text{ J}}$$

Energy increased! Student did work walking inward against fictitious centrifugal force.`
        },
        {
          topicId: angularMomentumTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A particle (mass m = 0.5 kg) moves with velocity $\\vec{v} = 3\\hat{i} + 4\\hat{j}$ m/s at position $\\vec{r} = 2\\hat{i} + 1\\hat{j}$ m. Find: (a) the angular momentum vector about the origin, (b) the magnitude of angular momentum, and (c) if a torque $\\vec{\\tau} = 5\\hat{k}$ N·m acts, find d$\\vec{L}$/dt.',
          solution: `**Given:**
- m = 0.5 kg
- $\\vec{v} = 3\\hat{i} + 4\\hat{j}$ m/s
- $\\vec{r} = 2\\hat{i} + 1\\hat{j}$ m

**(a) Angular momentum vector:**

$$\\vec{L} = \\vec{r} \\times \\vec{p} = \\vec{r} \\times (m\\vec{v})$$

$$\\vec{L} = (2\\hat{i} + 1\\hat{j}) \\times [(0.5)(3\\hat{i} + 4\\hat{j})]$$

$$\\vec{L} = (2\\hat{i} + 1\\hat{j}) \\times (1.5\\hat{i} + 2\\hat{j})$$

Using $\\hat{i} \\times \\hat{i} = 0$, $\\hat{i} \\times \\hat{j} = \\hat{k}$, $\\hat{j} \\times \\hat{i} = -\\hat{k}$, $\\hat{j} \\times \\hat{j} = 0$:

$$\\vec{L} = (2)(2)\\hat{k} + (1)(1.5)(-\\hat{k})$$

$$\\vec{L} = 4\\hat{k} - 1.5\\hat{k}$$

$$\\boxed{\\vec{L} = 2.5\\hat{k} \\text{ kg·m}^2\\text{/s}}$$

**(b) Magnitude:**

$$|\\vec{L}| = \\boxed{2.5 \\text{ kg·m}^2\\text{/s}}$$

**(c) Rate of change:**

$$\\frac{d\\vec{L}}{dt} = \\vec{\\tau}$$

$$\\boxed{\\frac{d\\vec{L}}{dt} = 5\\hat{k} \\text{ kg·m}^2\\text{/s}^2}$$

This means angular momentum increases at 5 kg·m²/s² in the +z direction.

After time t:
$$\\vec{L}(t) = 2.5\\hat{k} + 5t\\hat{k} = (2.5 + 5t)\\hat{k}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Angular Momentum')
  }

  // Topic 13: Simple Harmonic Motion
  const shmTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-simple-harmonic-motion' }
  })

  if (shmTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: shmTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A 0.5 kg mass attached to a spring (k = 200 N/m) oscillates with amplitude A = 0.1 m. Find: (a) the angular frequency and period, (b) the maximum velocity and acceleration, and (c) the velocity when x = 0.05 m.',
          solution: `**Given:**
- m = 0.5 kg
- k = 200 N/m
- A = 0.1 m

**(a) Angular frequency and period:**

$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{200}{0.5}} = \\sqrt{400}$$

$$\\boxed{\\omega = 20 \\text{ rad/s}}$$

$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{20}$$

$$\\boxed{T = 0.314 \\text{ s}}$$

**(b) Maximum velocity and acceleration:**

$$v_{max} = \\omega A = (20)(0.1)$$

$$\\boxed{v_{max} = 2.0 \\text{ m/s}}$$

(Occurs at x = 0)

$$a_{max} = \\omega^2 A = (20)^2(0.1) = 400(0.1)$$

$$\\boxed{a_{max} = 40 \\text{ m/s}^2}$$

(Occurs at x = ±A)

**(c) Velocity at x = 0.05 m:**

Energy method:
$$\\frac{1}{2}kA^2 = \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2$$

$$kA^2 = kx^2 + mv^2$$

$$v^2 = \\frac{k}{m}(A^2 - x^2) = \\omega^2(A^2 - x^2)$$

$$v^2 = (20)^2[(0.1)^2 - (0.05)^2] = 400[0.01 - 0.0025]$$

$$v^2 = 400(0.0075) = 3.0$$

$$\\boxed{v = 1.73 \\text{ m/s}}$$`
        },
        {
          topicId: shmTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A physical pendulum consists of a uniform rod (length L = 1.0 m, mass M = 2.0 kg) pivoted at one end. Find: (a) the period of small oscillations, (b) the angular frequency, and (c) compare to a simple pendulum of the same length.',
          solution: `**Given:**
- L = 1.0 m
- M = 2.0 kg
- Rod pivoted at end

**(a) Period:**

For physical pendulum:
$$T = 2\\pi\\sqrt{\\frac{I}{mgd}}$$

where:
- I = $\\frac{1}{3}ML^2$ = moment about pivot
- d = L/2 = distance to CM

$$T = 2\\pi\\sqrt{\\frac{ML^2/3}{Mg(L/2)}} = 2\\pi\\sqrt{\\frac{2L}{3g}}$$

$$T = 2\\pi\\sqrt{\\frac{2(1.0)}{3(9.8)}} = 2\\pi\\sqrt{\\frac{2}{29.4}}$$

$$T = 2\\pi\\sqrt{0.0680} = 2\\pi(0.261)$$

$$\\boxed{T = 1.64 \\text{ s}}$$

**(b) Angular frequency:**

$$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{1.64}$$

$$\\boxed{\\omega = 3.83 \\text{ rad/s}}$$

**(c) Comparison to simple pendulum:**

Simple pendulum with length L:
$$T_{simple} = 2\\pi\\sqrt{\\frac{L}{g}} = 2\\pi\\sqrt{\\frac{1.0}{9.8}}$$

$$T_{simple} = 2.01 \\text{ s}$$

$$\\frac{T_{rod}}{T_{simple}} = \\frac{1.64}{2.01} = 0.816$$

$$\\boxed{\\text{Rod oscillates } 23\\% \\text{ faster}}$$

Reason: Rod's effective length is $L_{eff} = \\frac{2L}{3} = 0.67$ m`
        },
        {
          topicId: shmTopic.id,
          order: 3,
          difficulty: 'MEDIUM',
          question: 'Derive the differential equation for a mass-spring system and solve it for initial conditions: at t = 0, x = 0.08 m and v = 0 (given: m = 2.0 kg, k = 50 N/m). Find the equation of motion x(t).',
          solution: `**Given:**
- m = 2.0 kg
- k = 50 N/m
- At t = 0: x₀ = 0.08 m, v₀ = 0

**Differential equation:**

Newton's second law:
$$F = ma$$
$$-kx = m\\frac{d^2x}{dt^2}$$

$$\\boxed{\\frac{d^2x}{dt^2} + \\frac{k}{m}x = 0}$$

Or: $\\frac{d^2x}{dt^2} + \\omega^2 x = 0$ where $\\omega = \\sqrt{k/m}$

**General solution:**

$$x(t) = A\\cos(\\omega t + \\phi)$$

**Find constants:**

$$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{2.0}} = \\sqrt{25} = 5 \\text{ rad/s}$$

At t = 0:
$$x(0) = A\\cos(\\phi) = 0.08$$

$$v(0) = -A\\omega\\sin(\\phi) = 0$$

From v(0) = 0: $\\sin(\\phi) = 0$ → $\\phi = 0$ or $\\pi$

Since x(0) > 0 and $\\cos(0) = 1$: choose $\\phi = 0$

$$A = 0.08 \\text{ m}$$

**Final answer:**

$$\\boxed{x(t) = 0.08\\cos(5t) \\text{ m}}$$

where t is in seconds.

Velocity:
$$v(t) = -0.4\\sin(5t) \\text{ m/s}$$

Acceleration:
$$a(t) = -2.0\\cos(5t) \\text{ m/s}^2$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Simple Harmonic Motion')
  }

  // Topic 14: Damped and Driven Oscillations
  const dampedOscillationsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-damped-driven-oscillations' }
  })

  if (dampedOscillationsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dampedOscillationsTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'A damped oscillator has mass m = 0.5 kg, spring constant k = 50 N/m, and damping coefficient b = 2.0 kg/s. Find: (a) the natural frequency ω₀, (b) the damping constant γ, (c) determine if the system is underdamped, critically damped, or overdamped, and (d) find the damped frequency ω_d.',
          solution: `**Given:**
- m = 0.5 kg
- k = 50 N/m
- b = 2.0 kg/s

**(a) Natural frequency:**

$$\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{0.5}} = \\sqrt{100}$$

$$\\boxed{\\omega_0 = 10 \\text{ rad/s}}$$

**(b) Damping constant:**

$$\\gamma = \\frac{b}{2m} = \\frac{2.0}{2(0.5)} = \\frac{2.0}{1.0}$$

$$\\boxed{\\gamma = 2.0 \\text{ s}^{-1}}$$

**(c) Type of damping:**

Compare γ with ω₀:

- Underdamped: γ < ω₀
- Critically damped: γ = ω₀
- Overdamped: γ > ω₀

Since $\\gamma = 2.0 < \\omega_0 = 10$:

$$\\boxed{\\text{System is UNDERDAMPED}}$$

**(d) Damped frequency:**

$$\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2} = \\sqrt{100 - 4}$$

$$\\omega_d = \\sqrt{96}$$

$$\\boxed{\\omega_d = 9.80 \\text{ rad/s}}$$

Motion: $x(t) = Ae^{-\\gamma t}\\cos(\\omega_d t + \\phi)$

Period: $T_d = \\frac{2\\pi}{\\omega_d} = 0.641$ s`
        },
        {
          topicId: dampedOscillationsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'For the damped oscillator in the previous problem, if the initial amplitude is A₀ = 0.10 m, find: (a) the amplitude after one period, (b) the time for amplitude to decrease to 0.01 m (10% of original), and (c) the quality factor Q.',
          solution: `**From previous:**
- γ = 2.0 s⁻¹
- ω_d = 9.80 rad/s
- T_d = 2π/ω_d = 0.641 s
- A₀ = 0.10 m

**(a) Amplitude after one period:**

Amplitude envelope: $A(t) = A_0 e^{-\\gamma t}$

$$A(T_d) = A_0 e^{-\\gamma T_d} = 0.10 e^{-(2.0)(0.641)}$$

$$A(T_d) = 0.10 e^{-1.282} = 0.10(0.277)$$

$$\\boxed{A(T_d) = 0.0277 \\text{ m}}$$

Amplitude decreased to 28% in one period!

**(b) Time to reach 10% of original:**

$$0.01 = 0.10 e^{-\\gamma t}$$

$$0.1 = e^{-2t}$$

$$\\ln(0.1) = -2t$$

$$t = -\\frac{\\ln(0.1)}{2} = -\\frac{-2.303}{2}$$

$$\\boxed{t = 1.15 \\text{ s}}$$

**(c) Quality factor:**

$$Q = \\frac{\\omega_0}{2\\gamma} = \\frac{10}{2(2.0)} = \\frac{10}{4}$$

$$\\boxed{Q = 2.5}$$

Low Q indicates significant damping. For high-Q systems (Q >> 1), oscillations persist many cycles.

Alternatively: $Q = \\pi \\times$ (number of oscillations to decay to 1/e)`
        },
        {
          topicId: dampedOscillationsTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A driven oscillator (m = 1.0 kg, k = 100 N/m, b = 2.0 kg/s) is subjected to driving force F(t) = F₀cos(ωt) where F₀ = 10 N. Find: (a) the resonance frequency, (b) the amplitude at resonance, and (c) the amplitude when driving frequency is ω = 5 rad/s.',
          solution: `**Given:**
- m = 1.0 kg
- k = 100 N/m
- b = 2.0 kg/s
- F₀ = 10 N

**(a) Resonance frequency:**

Natural frequency:
$$\\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{100}{1.0}} = 10 \\text{ rad/s}$$

For lightly damped system, resonance occurs near ω₀:

$$\\omega_{res} = \\sqrt{\\omega_0^2 - 2\\gamma^2}$$

where $\\gamma = \\frac{b}{2m} = \\frac{2.0}{2} = 1.0$ s⁻¹

$$\\omega_{res} = \\sqrt{100 - 2(1)} = \\sqrt{98}$$

$$\\boxed{\\omega_{res} = 9.90 \\text{ rad/s}}$$

**(b) Amplitude at resonance:**

$$A_{res} = \\frac{F_0}{b\\omega_{res}} = \\frac{10}{(2.0)(9.90)}$$

$$\\boxed{A_{res} = 0.505 \\text{ m}}$$

**(c) Amplitude at ω = 5 rad/s:**

General formula:
$$A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + (2\\gamma\\omega)^2}}$$

$$A(5) = \\frac{10/1.0}{\\sqrt{(100 - 25)^2 + (2 \\times 1 \\times 5)^2}}$$

$$A(5) = \\frac{10}{\\sqrt{75^2 + 10^2}} = \\frac{10}{\\sqrt{5625 + 100}}$$

$$A(5) = \\frac{10}{\\sqrt{5725}} = \\frac{10}{75.7}$$

$$\\boxed{A(5) = 0.132 \\text{ m}}$$

Much smaller than at resonance!`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Damped and Driven Oscillations')
  }

  // Topic 15: Universal Gravitation
  const gravitationTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-universal-gravitation' }
  })

  if (gravitationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: gravitationTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'Calculate the gravitational force between Earth (M_E = 5.97 × 10²⁴ kg) and the Moon (M_M = 7.35 × 10²² kg), separated by r = 3.84 × 10⁸ m. Use G = 6.67 × 10⁻¹¹ N·m²/kg².',
          solution: `**Given:**
- M_E = 5.97 × 10²⁴ kg
- M_M = 7.35 × 10²² kg
- r = 3.84 × 10⁸ m
- G = 6.67 × 10⁻¹¹ N·m²/kg²

**Gravitational force:**

$$F = \\frac{GM_E M_M}{r^2}$$

$$F = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})(7.35 \\times 10^{22})}{(3.84 \\times 10^8)^2}$$

Numerator:
$$(6.67)(5.97)(7.35) \\times 10^{-11+24+22} = 292.5 \\times 10^{35}$$

Denominator:
$$(3.84)^2 \\times 10^{16} = 14.75 \\times 10^{16}$$

$$F = \\frac{292.5 \\times 10^{35}}{14.75 \\times 10^{16}} = 19.8 \\times 10^{19}$$

$$\\boxed{F = 1.98 \\times 10^{20} \\text{ N}}$$

This is the force keeping the Moon in orbit!`
        },
        {
          topicId: gravitationTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A satellite orbits Earth at altitude h = 400 km above the surface. Given R_E = 6.37 × 10⁶ m and g = 9.8 m/s² at surface, find: (a) the orbital speed, (b) the orbital period, and (c) the satellite\'s acceleration.',
          solution: `**Given:**
- h = 400 km = 4.0 × 10⁵ m
- R_E = 6.37 × 10⁶ m
- g = 9.8 m/s²

Orbital radius: $r = R_E + h = 6.77 \\times 10^6$ m

**(a) Orbital speed:**

For circular orbit:
$$\\frac{mv^2}{r} = \\frac{GM_E m}{r^2}$$

$$v = \\sqrt{\\frac{GM_E}{r}}$$

Using $g = \\frac{GM_E}{R_E^2}$ → $GM_E = gR_E^2$:

$$v = \\sqrt{\\frac{gR_E^2}{r}} = \\sqrt{g}\\frac{R_E}{\\sqrt{r}}$$

$$v = \\sqrt{9.8} \\cdot \\frac{6.37 \\times 10^6}{\\sqrt{6.77 \\times 10^6}}$$

$$v = 3.13 \\times \\frac{6.37 \\times 10^6}{2.60 \\times 10^3}$$

$$\\boxed{v = 7670 \\text{ m/s} = 7.67 \\text{ km/s}}$$

**(b) Orbital period:**

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi(6.77 \\times 10^6)}{7670}$$

$$T = \\frac{4.25 \\times 10^7}{7670} = 5546 \\text{ s}$$

$$\\boxed{T = 92.4 \\text{ min} = 1.54 \\text{ hours}}$$

**(c) Acceleration:**

Centripetal acceleration:
$$a = \\frac{v^2}{r} = \\frac{(7670)^2}{6.77 \\times 10^6}$$

$$a = \\frac{5.88 \\times 10^7}{6.77 \\times 10^6}$$

$$\\boxed{a = 8.69 \\text{ m/s}^2}$$

This is 89% of g at surface (slightly weaker due to altitude).`
        },
        {
          topicId: gravitationTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Derive the escape velocity from Earth\'s surface using energy conservation. Then calculate the numerical value for Earth (M_E = 5.97 × 10²⁴ kg, R_E = 6.37 × 10⁶ m). Also find the escape velocity from the Moon (M_M = 7.35 × 10²² kg, R_M = 1.74 × 10⁶ m).',
          solution: `**Derivation:**

At surface: $E_i = KE + PE = \\frac{1}{2}mv^2 - \\frac{GM_E m}{R_E}$

At infinity (just escaping): $E_f = 0 + 0 = 0$

Energy conservation: $E_i = E_f$

$$\\frac{1}{2}mv_{esc}^2 - \\frac{GM_E m}{R_E} = 0$$

$$v_{esc} = \\sqrt{\\frac{2GM_E}{R_E}}$$

Using $g = GM_E/R_E^2$:

$$\\boxed{v_{esc} = \\sqrt{2gR_E}}$$

**From Earth:**

$$v_{esc} = \\sqrt{2(9.8)(6.37 \\times 10^6)}$$

$$v_{esc} = \\sqrt{1.25 \\times 10^8} = 1.12 \\times 10^4$$

$$\\boxed{v_{esc,Earth} = 11,200 \\text{ m/s} = 11.2 \\text{ km/s}}$$

**From Moon:**

Surface gravity on Moon:
$$g_M = \\frac{GM_M}{R_M^2} = \\frac{(6.67 \\times 10^{-11})(7.35 \\times 10^{22})}{(1.74 \\times 10^6)^2}$$

$$g_M = 1.62 \\text{ m/s}^2$$

$$v_{esc,Moon} = \\sqrt{2(1.62)(1.74 \\times 10^6)}$$

$$v_{esc,Moon} = \\sqrt{5.64 \\times 10^6}$$

$$\\boxed{v_{esc,Moon} = 2370 \\text{ m/s} = 2.37 \\text{ km/s}}$$

Moon's lower mass and smaller radius make escape much easier!

**Fun fact:** This is why Moon has no atmosphere - gas molecules can reach v_esc and escape.`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Universal Gravitation')
  }

  console.log('\n✅ Successfully added ALL practice problems to Physics C: Mechanics!')
  console.log('Total: 45 problems across 15 topics')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
