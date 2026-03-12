import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: E&M - Circuits and Magnetism...')

  // Get the AP Physics C: E&M course
  const emCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-em' }
  })

  if (!emCourse) {
    throw new Error('AP Physics C: E&M course not found')
  }

  // Category 3: Electric Circuits
  const circuitsCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-circuits' },
    update: {},
    create: {
      slug: 'physics-c-em-circuits',
      name: 'Electric Circuits',
      description: 'Current, resistance, Kirchhoff\'s laws, and RC circuits with differential equations',
      order: 3,
      courseId: emCourse.id
    }
  })

  // Topic 5: Current, Resistance, and DC Circuits
  const dcCircuitsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-dc-circuits' },
    update: {},
    create: {
      slug: 'physics-c-dc-circuits',
      title: 'Current, Resistance, and DC Circuits',
      description: 'Ohm\'s law, Kirchhoff\'s rules, and power in circuits',
      order: 1,
      categoryId: circuitsCategory.id,
      isPremium: false,
      textContent: `
# Current, Resistance, and DC Circuits

## Electric Current

**Definition:**
$$I = \\frac{dQ}{dt}$$

**Units:** 1 ampere (A) = 1 coulomb/second

**Current density:**
$$\\vec{J} = nq\\vec{v}_d$$

where $n$ is charge carrier density, $q$ is charge per carrier, $\\vec{v}_d$ is drift velocity.

$$I = \\int \\vec{J} \\cdot d\\vec{A}$$

## Resistance and Ohm's Law

**Ohm's law:**
$$V = IR$$

**Resistance:**
$$R = \\frac{\\rho L}{A}$$

where:
- $\\rho$ = resistivity (material property)
- $L$ = length
- $A$ = cross-sectional area

**Conductivity:** $\\sigma = 1/\\rho$

**Microscopic Ohm's law:**
$$\\vec{J} = \\sigma\\vec{E}$$

## Temperature Dependence

$$\\rho = \\rho_0[1 + \\alpha(T - T_0)]$$

where $\\alpha$ is temperature coefficient of resistivity.

## Power

**Power dissipated:**
$$P = IV = I^2R = \\frac{V^2}{R}$$

**Energy:** $E = Pt$

## Resistors in Series

Same current through each:

$$R_{eq} = R_1 + R_2 + \\cdots$$

$$V_{total} = V_1 + V_2 + \\cdots$$

## Resistors in Parallel

Same voltage across each:

$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$

**Two resistors:**
$$R_{eq} = \\frac{R_1R_2}{R_1 + R_2}$$

## Kirchhoff's Rules

**Junction rule (current):**
$$\\sum I_{in} = \\sum I_{out}$$

(Charge conservation)

**Loop rule (voltage):**
$$\\sum \\Delta V = 0$$

(Energy conservation)

### Sign Conventions

- Traversing resistor with current: $-IR$
- Traversing resistor against current: $+IR$
- Traversing battery from $-$ to $+$: $+\\mathcal{E}$
- Traversing battery from $+$ to $-$: $-\\mathcal{E}$

## EMF and Internal Resistance

Real battery has internal resistance $r$:

$$V_{terminal} = \\mathcal{E} - Ir$$

**Maximum power to load:**
When $R_{load} = r$ (matched impedance)

## Multiloop Circuits

**Strategy:**
1. Assign current to each branch
2. Apply junction rule
3. Apply loop rule to independent loops
4. Solve system of equations

## Ammeter and Voltmeter

**Ammeter:** Measures current, low resistance (ideally 0), in series

**Voltmeter:** Measures voltage, high resistance (ideally ∞), in parallel

## Wheatstone Bridge

Balanced when:
$$\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$$

No current through galvanometer.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: dcCircuitsTopic.id,
        front: 'What is electric current?',
        back: 'I = dQ/dt, rate of charge flow. Unit: ampere (A) = coulomb/second'
      },
      {
        topicId: dcCircuitsTopic.id,
        front: 'What is Ohm\'s law?',
        back: 'V = IR. Resistance R = ρL/A, where ρ is resistivity, L is length, A is area'
      },
      {
        topicId: dcCircuitsTopic.id,
        front: 'What is power dissipated in a resistor?',
        back: 'P = IV = I²R = V²/R, dissipated as heat'
      },
      {
        topicId: dcCircuitsTopic.id,
        front: 'How do resistors combine in series and parallel?',
        back: 'Series: R_eq = ΣR_i. Parallel: 1/R_eq = Σ(1/R_i). (Opposite of capacitors!)'
      },
      {
        topicId: dcCircuitsTopic.id,
        front: 'What are Kirchhoff\'s rules?',
        back: 'Junction: ΣI_in = ΣI_out (charge conservation). Loop: ΣΔV = 0 (energy conservation)'
      },
      {
        topicId: dcCircuitsTopic.id,
        front: 'What is terminal voltage for a battery with internal resistance?',
        back: 'V_terminal = ℰ - Ir, where ℰ is EMF and r is internal resistance'
      }
    ]
  })

  console.log('✓ Created topic: Current, Resistance, and DC Circuits')

  // Topic 6: RC Circuits
  const rcCircuitsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-rc-circuits' },
    update: {},
    create: {
      slug: 'physics-c-rc-circuits',
      title: 'RC Circuits',
      description: 'Capacitor charging and discharging with differential equations',
      order: 2,
      categoryId: circuitsCategory.id,
      isPremium: false,
      textContent: `
# RC Circuits

## Charging Capacitor

Circuit: battery ($\\mathcal{E}$), resistor ($R$), capacitor ($C$) in series.

**Kirchhoff's loop rule:**
$$\\mathcal{E} - IR - \\frac{Q}{C} = 0$$

$$\\mathcal{E} - R\\frac{dQ}{dt} - \\frac{Q}{C} = 0$$

**Differential equation:**
$$\\frac{dQ}{dt} = \\frac{\\mathcal{E}}{R} - \\frac{Q}{RC}$$

## Solution: Charging

$$Q(t) = C\\mathcal{E}(1 - e^{-t/RC})$$

**Current:**
$$I(t) = \\frac{dQ}{dt} = \\frac{\\mathcal{E}}{R}e^{-t/RC}$$

**Voltage across capacitor:**
$$V_C(t) = \\frac{Q}{C} = \\mathcal{E}(1 - e^{-t/RC})$$

**Voltage across resistor:**
$$V_R(t) = IR = \\mathcal{E}e^{-t/RC}$$

**Time constant:**
$$\\tau = RC$$

After time $\\tau$:
- Capacitor reaches $(1 - 1/e) \\approx 63\\%$ of final charge
- Current drops to $1/e \\approx 37\\%$ of initial

## Discharging Capacitor

Initial charge $Q_0$ on capacitor, no battery.

**Loop rule:**
$$-IR - \\frac{Q}{C} = 0$$

$$R\\frac{dQ}{dt} + \\frac{Q}{C} = 0$$

**Solution:**
$$Q(t) = Q_0e^{-t/RC}$$

**Current:**
$$I(t) = -\\frac{dQ}{dt} = \\frac{Q_0}{RC}e^{-t/RC}$$

**Voltage:**
$$V_C(t) = V_0e^{-t/RC}$$

## Energy Considerations

**Charging:**

Energy supplied by battery: $W_{battery} = Q\\mathcal{E} = C\\mathcal{E}^2$

Energy stored in capacitor: $U_C = \\frac{1}{2}C\\mathcal{E}^2$

Energy dissipated in resistor: $U_R = \\frac{1}{2}C\\mathcal{E}^2$

(Half the energy is always dissipated as heat, independent of $R$!)

**Discharging:**

All energy dissipated in resistor: $U_R = \\frac{1}{2}CV_0^2$

## General RC Circuit

For any RC circuit, differential equation has form:

$$RC\\frac{dV_C}{dt} + V_C = V_{final}$$

**General solution:**
$$V_C(t) = V_{final} + (V_{initial} - V_{final})e^{-t/RC}$$

## Multiple Capacitors

Capacitors in series or parallel can be replaced by equivalent capacitance, then analyze as simple RC circuit.

**Effective time constant:** $\\tau = RC_{eq}$

## Applications

**Timer circuits:** Delay determined by $RC$

**Filters:** Block DC, pass AC (or vice versa)

**Integrators/Differentiators:** For signal processing

**Defibrillators:** Store energy, rapid discharge through heart
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: rcCircuitsTopic.id,
        front: 'What is the differential equation for a charging RC circuit?',
        back: 'dQ/dt = ℰ/R - Q/(RC), from Kirchhoff\'s loop rule'
      },
      {
        topicId: rcCircuitsTopic.id,
        front: 'What is the charge on a capacitor during charging?',
        back: 'Q(t) = Cℰ(1 - e^(-t/RC)), exponentially approaches Cℰ'
      },
      {
        topicId: rcCircuitsTopic.id,
        front: 'What is the current during capacitor charging?',
        back: 'I(t) = (ℰ/R)e^(-t/RC), exponentially decays from ℰ/R to zero'
      },
      {
        topicId: rcCircuitsTopic.id,
        front: 'What is the time constant τ for an RC circuit?',
        back: 'τ = RC. After τ, capacitor reaches 63% of final charge (charging) or 37% remains (discharging)'
      },
      {
        topicId: rcCircuitsTopic.id,
        front: 'What is the voltage across a discharging capacitor?',
        back: 'V_C(t) = V₀e^(-t/RC), exponential decay to zero'
      },
      {
        topicId: rcCircuitsTopic.id,
        front: 'How much energy is dissipated when charging a capacitor?',
        back: 'Exactly half: U_R = ½Cℰ², independent of R. The other half is stored in the capacitor'
      }
    ]
  })

  console.log('✓ Created topic: RC Circuits')

  // Category 4: Magnetism
  const magnetismCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-magnetism' },
    update: {},
    create: {
      slug: 'physics-c-em-magnetism',
      name: 'Magnetism',
      description: 'Magnetic fields, forces, and Ampere\'s law',
      order: 4,
      courseId: emCourse.id
    }
  })

  // Topic 7: Magnetic Fields and Forces
  const magneticForcesTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-magnetic-forces' },
    update: {},
    create: {
      slug: 'physics-c-magnetic-forces',
      title: 'Magnetic Fields and Forces',
      description: 'Lorentz force, motion of charges in magnetic fields',
      order: 1,
      categoryId: magnetismCategory.id,
      isPremium: false,
      textContent: `
# Magnetic Fields and Forces

## Magnetic Force on Moving Charge

**Lorentz force:**
$$\\vec{F} = q\\vec{v} \\times \\vec{B}$$

**Magnitude:**
$$F = qvB\\sin\\theta$$

where $\\theta$ is angle between $\\vec{v}$ and $\\vec{B}$.

**Direction:** Right-hand rule

**Properties:**
- Force perpendicular to both $\\vec{v}$ and $\\vec{B}$
- Magnetic force does no work ($\\vec{F} \\perp \\vec{v}$)
- Changes direction, not speed

## Circular Motion in Magnetic Field

For $\\vec{v} \\perp \\vec{B}$:

$$qvB = \\frac{mv^2}{r}$$

**Radius:**
$$r = \\frac{mv}{qB}$$

**Period:**
$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$

**Cyclotron frequency:**
$$f = \\frac{qB}{2\\pi m}$$

(Independent of $v$ and $r$!)

## Helical Motion

If $\\vec{v}$ has components both parallel and perpendicular to $\\vec{B}$:

- Perpendicular component causes circular motion
- Parallel component causes uniform motion
- Result: helix

**Pitch of helix:**
$$p = v_{\\parallel}T = \\frac{2\\pi m v_{\\parallel}}{qB}$$

## Combined Electric and Magnetic Fields

**Total force:**
$$\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$$

**Velocity selector:**

Crossed $\\vec{E}$ and $\\vec{B}$ perpendicular to $\\vec{v}$:

Particles with $v = E/B$ pass straight through ($\\vec{F} = 0$).

## Magnetic Force on Current

Current $I$ in wire of length $\\vec{L}$ in field $\\vec{B}$:

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

For straight wire:
$$F = ILB\\sin\\theta$$

**For curved wire:**
$$\\vec{F} = \\int I \\, d\\vec{l} \\times \\vec{B}$$

## Torque on Current Loop

Rectangular loop with area $A$, current $I$, in uniform field $\\vec{B}$:

**Magnetic dipole moment:**
$$\\vec{\\mu} = IA\\hat{n}$$

(where $\\hat{n}$ is normal to loop, by right-hand rule)

**Torque:**
$$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$$

$$\\tau = \\mu B\\sin\\theta = IAB\\sin\\theta$$

**Potential energy:**
$$U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B\\cos\\theta$$

(Minimum when $\\vec{\\mu}$ parallel to $\\vec{B}$)

## Applications

**Mass spectrometer:** Separates ions by mass using circular motion in $\\vec{B}$

**Cyclotron:** Accelerates particles using constant frequency RF field

**Hall effect:** Voltage across conductor perpendicular to current and $\\vec{B}$

$$V_H = \\frac{IB}{nqt}$$

where $n$ is charge carrier density, $t$ is thickness.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the magnetic force on a moving charge?',
        back: 'F⃗ = qv⃗ × B⃗. Force perpendicular to both v⃗ and B⃗, magnitude F = qvB sinθ'
      },
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the radius of circular motion in a magnetic field?',
        back: 'r = mv/(qB). From qvB = mv²/r (centripetal force = magnetic force)'
      },
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the cyclotron frequency?',
        back: 'f = qB/(2πm), independent of v and r. Period T = 2πm/(qB)'
      },
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the magnetic force on a current-carrying wire?',
        back: 'F⃗ = IL⃗ × B⃗. For straight wire: F = ILB sinθ'
      },
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the magnetic dipole moment of a current loop?',
        back: 'μ⃗ = IA(n̂), where A is area and n̂ is normal by right-hand rule'
      },
      {
        topicId: magneticForcesTopic.id,
        front: 'What is the torque on a current loop in a magnetic field?',
        back: 'τ⃗ = μ⃗ × B⃗, with magnitude τ = IAB sinθ. Potential energy U = -μ⃗·B⃗'
      }
    ]
  })

  console.log('✓ Created topic: Magnetic Fields and Forces')

  // Topic 8: Sources of Magnetic Fields
  const bFieldSourcesTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-magnetic-field-sources' },
    update: {},
    create: {
      slug: 'physics-c-magnetic-field-sources',
      title: 'Sources of Magnetic Fields',
      description: 'Biot-Savart law and Ampere\'s law for calculating magnetic fields',
      order: 2,
      categoryId: magnetismCategory.id,
      isPremium: false,
      textContent: `
# Sources of Magnetic Fields

## Biot-Savart Law

Magnetic field from current element:

$$d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I \\, d\\vec{l} \\times \\hat{r}}{r^2}$$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A is permeability of free space.

**Total field:**
$$\\vec{B} = \\frac{\\mu_0 I}{4\\pi}\\int \\frac{d\\vec{l} \\times \\hat{r}}{r^2}$$

## Infinite Straight Wire

Current $I$ in straight wire:

$$B = \\frac{\\mu_0 I}{2\\pi r}$$

Field circles wire by right-hand rule.

## Circular Loop

On axis at distance $x$ from center, loop radius $R$:

$$B_x = \\frac{\\mu_0 IR^2}{2(x^2 + R^2)^{3/2}}$$

**At center** ($x = 0$):
$$B = \\frac{\\mu_0 I}{2R}$$

**Far from loop** ($x \\gg R$):
$$B \\approx \\frac{\\mu_0 I\\pi R^2}{2\\pi x^3} = \\frac{\\mu_0 \\mu}{2\\pi x^3}$$

where $\\mu = I\\pi R^2$ is magnetic dipole moment.

## Ampere's Law

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$$

Line integral around closed path equals $\\mu_0$ times enclosed current.

**Works best for:**
- Infinite straight wire
- Solenoid
- Toroid
- Cylindrical symmetry

## Long Solenoid

$n$ turns per unit length, current $I$:

**Inside:** $B = \\mu_0 nI$ (uniform, parallel to axis)

**Outside:** $B \\approx 0$

## Toroid

$N$ total turns, inner radius $a$, outer radius $b$:

**Inside toroid:**
$$B = \\frac{\\mu_0 NI}{2\\pi r}$$

(varies with $r$)

**Outside:** $B = 0$

## Magnetic Field of Moving Charge

Point charge $q$ moving with velocity $\\vec{v}$:

$$\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{q\\vec{v} \\times \\hat{r}}{r^2}$$

## Two Parallel Wires

Wires separated by distance $d$, currents $I_1$ and $I_2$:

**Force per unit length:**
$$\\frac{F}{L} = \\frac{\\mu_0 I_1I_2}{2\\pi d}$$

- Same direction: attractive
- Opposite direction: repulsive

This defines the ampere!

## Magnetic Field Inside Conductor

For long straight conductor of radius $R$:

**Outside** ($r > R$): $B = \\mu_0 I/(2\\pi r)$

**Inside** ($r < R$), uniform current density:
$$B = \\frac{\\mu_0 Ir}{2\\pi R^2}$$

(Linear in $r$, like electric field in charged sphere)

## Maxwell's Modification

With changing electric field:

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc} + \\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}$$

The $\\mu_0\\epsilon_0 d\\Phi_E/dt$ term is **displacement current**.

This completes Maxwell's equations!
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is the Biot-Savart law?',
        back: 'dB⃗ = (μ₀/4π)(I dl⃗ × r̂)/r². Gives magnetic field from current element'
      },
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is the magnetic field of an infinite straight wire?',
        back: 'B = μ₀I/(2πr), circling wire by right-hand rule'
      },
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is the magnetic field at the center of a circular loop?',
        back: 'B = μ₀I/(2R), where R is loop radius'
      },
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is Ampere\'s law?',
        back: '∮B⃗·dl⃗ = μ₀I_enc. Line integral of B⃗ equals μ₀ times enclosed current'
      },
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is the magnetic field inside a solenoid?',
        back: 'B = μ₀nI, where n is turns per length. Uniform inside, nearly zero outside'
      },
      {
        topicId: bFieldSourcesTopic.id,
        front: 'What is the force per length between parallel current-carrying wires?',
        back: 'F/L = μ₀I₁I₂/(2πd). Attractive if currents same direction, repulsive if opposite'
      }
    ]
  })

  console.log('✓ Created topic: Sources of Magnetic Fields')

  console.log('\n✅ Successfully seeded AP Physics C: E&M - Circuits and Magnetism!')
  console.log('   Topics: 4')
  console.log('   Flashcards: 24')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
