import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: E&M - Electromagnetic Induction and Maxwell\'s Equations...')

  // Get the AP Physics C: E&M course
  const emCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-em' }
  })

  if (!emCourse) {
    throw new Error('AP Physics C: E&M course not found')
  }

  // Category 5: Electromagnetic Induction
  const inductionCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-induction' },
    update: {},
    create: {
      slug: 'physics-c-em-induction',
      name: 'Electromagnetic Induction',
      description: 'Faraday\'s law, Lenz\'s law, inductance, and RL circuits',
      order: 5,
      courseId: emCourse.id
    }
  })

  // Topic 9: Faraday's Law and Lenz's Law
  const faradayTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-faraday-lenz' },
    update: {},
    create: {
      slug: 'physics-c-faraday-lenz',
      title: 'Faraday\'s Law and Lenz\'s Law',
      description: 'Electromagnetic induction and induced EMF',
      order: 1,
      categoryId: inductionCategory.id,
      isPremium: false,
      textContent: `
# Faraday's Law and Lenz's Law

## Magnetic Flux

$$\\Phi_B = \\int \\vec{B} \\cdot d\\vec{A}$$

For uniform field and flat surface:
$$\\Phi_B = BA\\cos\\theta$$

**Units:** 1 weber (Wb) = 1 T·m²

## Faraday's Law

**Induced EMF:**
$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$

Negative sign is **Lenz's law**: induced current opposes change in flux.

**For N-turn coil:**
$$\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$$

## Ways to Change Flux

1. **Change B:** $\\Phi_B = BA\\cos\\theta$, vary $B$
2. **Change A:** Move wire to change loop area
3. **Change θ:** Rotate loop in field

## Motional EMF

Rod of length $L$ moving with velocity $v$ perpendicular to field $B$:

**Magnetic force on charges:** $F = qvB$

**EMF:**
$$\\mathcal{E} = BLv$$

**From Faraday's law:**
$$\\mathcal{E} = -\\frac{d(BA)}{dt} = -B\\frac{dA}{dt} = -BL\\frac{dx}{dt} = -BLv$$

(Magnitude $BLv$; sign from Lenz's law)

## Induced Electric Field

Changing magnetic flux creates electric field:

$$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$

**This $\\vec{E}$ is non-conservative!** (Circulation not zero)

For cylindrical symmetry:
$$E(2\\pi r) = -\\frac{d\\Phi_B}{dt}$$

## Eddy Currents

Induced currents in bulk conductor:

- Flow in loops (eddies)
- Dissipate energy as heat
- Create magnetic braking

**Applications:**
- Metal detectors
- Magnetic braking
- Induction heating

## Generators

Rotating coil in magnetic field:

$$\\Phi_B = BA\\cos(\\omega t)$$

$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = BA\\omega\\sin(\\omega t)$$

$$\\mathcal{E} = \\mathcal{E}_0\\sin(\\omega t)$$

where $\\mathcal{E}_0 = NBA\\omega$ (N turns, area A).

## Betatron

Accelerates electrons in circular path:

**Condition for stable orbit:**
$$B_{orbit} = \\frac{1}{2}B_{avg}$$

where $B_{avg}$ is average field inside orbit.

## Lenz's Law

Induced current creates magnetic field that **opposes** the change in flux.

- Flux increasing: induced $\\vec{B}$ opposes it
- Flux decreasing: induced $\\vec{B}$ tries to maintain it

**Energy conservation:** Work required to change flux against induced current.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: faradayTopic.id,
        front: 'What is magnetic flux?',
        back: 'Φ_B = ∫B⃗·dA⃗. For uniform field: Φ_B = BA cosθ. Unit: weber (Wb) = T·m²'
      },
      {
        topicId: faradayTopic.id,
        front: 'What is Faraday\'s law?',
        back: 'ℰ = -dΦ_B/dt. Induced EMF equals negative rate of change of magnetic flux'
      },
      {
        topicId: faradayTopic.id,
        front: 'What is Lenz\'s law?',
        back: 'Induced current opposes the change in flux. This is the negative sign in Faraday\'s law'
      },
      {
        topicId: faradayTopic.id,
        front: 'What is motional EMF for a rod moving in a magnetic field?',
        back: 'ℰ = BLv, where L is length, v is velocity perpendicular to B'
      },
      {
        topicId: faradayTopic.id,
        front: 'What is the induced electric field from changing magnetic flux?',
        back: '∮E⃗·dl⃗ = -dΦ_B/dt. This E⃗ is non-conservative (has circulation)'
      },
      {
        topicId: faradayTopic.id,
        front: 'What is the EMF of a rotating generator?',
        back: 'ℰ = ℰ₀ sin(ωt), where ℰ₀ = NBAω for N turns, area A, angular frequency ω'
      }
    ]
  })

  console.log('✓ Created topic: Faraday\'s Law and Lenz\'s Law')

  // Topic 10: Inductance and RL Circuits
  const inductanceTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-inductance-rl-circuits' },
    update: {},
    create: {
      slug: 'physics-c-inductance-rl-circuits',
      title: 'Inductance and RL Circuits',
      description: 'Self-inductance, mutual inductance, and RL circuit dynamics',
      order: 2,
      categoryId: inductionCategory.id,
      isPremium: false,
      textContent: `
# Inductance and RL Circuits

## Self-Inductance

Changing current in coil induces EMF in same coil:

$$\\mathcal{E} = -L\\frac{dI}{dt}$$

where $L$ is **inductance** (or self-inductance).

**Units:** 1 henry (H) = 1 Wb/A = 1 V·s/A

## Inductance of Solenoid

Long solenoid: $n$ turns/length, cross-sectional area $A$, length $l$:

$$L = \\mu_0 n^2 Al = \\mu_0 \\frac{N^2}{l}A$$

## Mutual Inductance

Current $I_1$ in coil 1 creates flux through coil 2:

$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$$

**Mutual inductance:**
$$M = \\frac{\\Phi_{21}}{I_1} = \\frac{\\Phi_{12}}{I_2}$$

(Same value both ways: $M_{12} = M_{21}$)

## Energy Stored in Inductor

$$U_L = \\frac{1}{2}LI^2$$

**Energy density in magnetic field:**
$$u_B = \\frac{B^2}{2\\mu_0}$$

For solenoid:
$$U = u_B \\cdot \\text{volume} = \\frac{B^2}{2\\mu_0}Al = \\frac{1}{2}LI^2$$

(Using $B = \\mu_0 nI$ and $L = \\mu_0 n^2 Al$)

## RL Circuit: Current Growth

Circuit: battery ($\\mathcal{E}$), resistor ($R$), inductor ($L$) in series.

**Kirchhoff's loop rule:**
$$\\mathcal{E} - IR - L\\frac{dI}{dt} = 0$$

**Differential equation:**
$$\\frac{dI}{dt} = \\frac{\\mathcal{E}}{L} - \\frac{R}{L}I$$

**Solution:**
$$I(t) = \\frac{\\mathcal{E}}{R}(1 - e^{-Rt/L})$$

**Time constant:**
$$\\tau_L = \\frac{L}{R}$$

After time $\\tau_L$: current reaches $(1 - 1/e) \\approx 63\\%$ of final value.

## RL Circuit: Current Decay

Remove battery, current decays:

$$L\\frac{dI}{dt} + IR = 0$$

**Solution:**
$$I(t) = I_0 e^{-Rt/L}$$

Current decays exponentially with time constant $\\tau_L = L/R$.

## Energy Considerations

**Current growth:**

Energy from battery: $W = \\int_0^\\infty \\mathcal{E}I \\, dt = \\frac{\\mathcal{E}^2L}{R^2}$

Energy stored in inductor: $U_L = \\frac{1}{2}L\\left(\\frac{\\mathcal{E}}{R}\\right)^2$

Energy dissipated in resistor: $U_R = \\frac{1}{2}L\\left(\\frac{\\mathcal{E}}{R}\\right)^2$

(Equal amounts stored and dissipated)

## LC Circuit

Inductor and capacitor (no resistance):

$$L\\frac{d^2Q}{dt^2} + \\frac{Q}{C} = 0$$

**Oscillation:**
$$Q(t) = Q_0\\cos(\\omega t + \\phi)$$

where $\\omega = 1/\\sqrt{LC}$ (angular frequency).

**Energy oscillates between:**
- Electric: $U_E = Q^2/(2C)$
- Magnetic: $U_B = LI^2/2$
- Total: $U = U_E + U_B$ = constant

## LRC Circuit

With resistance, oscillations damped:

$$L\\frac{d^2Q}{dt^2} + R\\frac{dQ}{dt} + \\frac{Q}{C} = 0$$

**Damped oscillation** (for $R < 2\\sqrt{L/C}$):
$$Q(t) = Q_0e^{-Rt/(2L)}\\cos(\\omega' t)$$

where $\\omega' = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{4L^2}}$

**Quality factor:**
$$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: inductanceTopic.id,
        front: 'What is self-inductance?',
        back: 'ℰ = -L(dI/dt). Changing current induces EMF opposing change. Unit: henry (H) = Wb/A'
      },
      {
        topicId: inductanceTopic.id,
        front: 'What is the inductance of a solenoid?',
        back: 'L = μ₀n²Al, where n is turns per length, A is area, l is length'
      },
      {
        topicId: inductanceTopic.id,
        front: 'What is energy stored in an inductor?',
        back: 'U_L = ½LI². Energy density in magnetic field: u_B = B²/(2μ₀)'
      },
      {
        topicId: inductanceTopic.id,
        front: 'What is the current growth in an RL circuit?',
        back: 'I(t) = (ℰ/R)(1 - e^(-Rt/L)), exponentially approaches ℰ/R with time constant τ_L = L/R'
      },
      {
        topicId: inductanceTopic.id,
        front: 'What is the frequency of oscillation in an LC circuit?',
        back: 'ω = 1/√(LC). Energy oscillates between electric (capacitor) and magnetic (inductor)'
      },
      {
        topicId: inductanceTopic.id,
        front: 'What happens in an LRC circuit?',
        back: 'Damped oscillations if R < 2√(L/C). Energy dissipated in resistor causes decay'
      }
    ]
  })

  console.log('✓ Created topic: Inductance and RL Circuits')

  // Category 6: Maxwell's Equations and EM Waves
  const maxwellCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-maxwell' },
    update: {},
    create: {
      slug: 'physics-c-em-maxwell',
      name: 'Maxwell\'s Equations',
      description: 'Complete set of Maxwell\'s equations and electromagnetic waves',
      order: 6,
      courseId: emCourse.id
    }
  })

  // Topic 11: Maxwell's Equations
  const maxwellTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-maxwell-equations' },
    update: {},
    create: {
      slug: 'physics-c-maxwell-equations',
      title: 'Maxwell\'s Equations',
      description: 'The four fundamental equations of electromagnetism',
      order: 1,
      categoryId: maxwellCategory.id,
      isPremium: false,
      textContent: `
# Maxwell's Equations

## The Four Maxwell's Equations

### 1. Gauss's Law (Electric)

**Integral form:**
$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$$

**Differential form:**
$$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}$$

Electric field diverges from charges.

### 2. Gauss's Law for Magnetism

**Integral form:**
$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

**Differential form:**
$$\\nabla \\cdot \\vec{B} = 0$$

No magnetic monopoles; magnetic field lines are closed loops.

### 3. Faraday's Law

**Integral form:**
$$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$

**Differential form:**
$$\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$$

Changing magnetic field creates electric field (circulation).

### 4. Ampere-Maxwell Law

**Integral form:**
$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc} + \\mu_0\\epsilon_0\\frac{d\\Phi_E}{dt}$$

**Differential form:**
$$\\nabla \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\epsilon_0\\frac{\\partial \\vec{E}}{\\partial t}$$

Current and changing electric field create magnetic field (circulation).

## Displacement Current

Maxwell's addition to Ampere's law:

$$I_d = \\epsilon_0\\frac{d\\Phi_E}{dt}$$

**Displacement current density:**
$$\\vec{J}_d = \\epsilon_0\\frac{\\partial \\vec{E}}{\\partial t}$$

**Why needed:**

In charging capacitor, no conduction current between plates, but changing $\\vec{E}$ creates magnetic field as if current flowed.

Ensures $\\nabla \\cdot \\vec{J} + \\frac{\\partial \\rho}{\\partial t} = 0$ (charge conservation).

## Symmetry in Maxwell's Equations

**In vacuum** ($\\rho = 0$, $\\vec{J} = 0$):

$$\\nabla \\cdot \\vec{E} = 0, \\quad \\nabla \\cdot \\vec{B} = 0$$

$$\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}, \\quad \\nabla \\times \\vec{B} = \\mu_0\\epsilon_0\\frac{\\partial \\vec{E}}{\\partial t}$$

Nearly symmetric! Differences:
- No magnetic monopoles (no $\\rho_m$)
- Factor $\\mu_0\\epsilon_0$ in Ampere-Maxwell

## Poynting Vector

Energy flux in electromagnetic field:

$$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$$

**Units:** W/m² (power per area)

**Direction:** Direction of energy propagation

**Intensity:** $I = |\\vec{S}|_{avg}$

## Energy Density

**Electric field:**
$$u_E = \\frac{1}{2}\\epsilon_0 E^2$$

**Magnetic field:**
$$u_B = \\frac{1}{2\\mu_0}B^2$$

**Total:**
$$u = u_E + u_B = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2$$

## Continuity Equation

Energy conservation:

$$\\frac{\\partial u}{\\partial t} + \\nabla \\cdot \\vec{S} = -\\vec{J} \\cdot \\vec{E}$$

Rate of energy change + energy flux out = work done by field on charges.

## Historical Significance

Maxwell's equations unified electricity and magnetism, predicted electromagnetic waves, led to:
- Radio
- Radar
- Modern telecommunications
- Understanding of light as electromagnetic wave
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: maxwellTopic.id,
        front: 'What are the four Maxwell\'s equations (integral form)?',
        back: '1) ∮E⃗·dA⃗=Q/ε₀ 2) ∮B⃗·dA⃗=0 3) ∮E⃗·dl⃗=-dΦ_B/dt 4) ∮B⃗·dl⃗=μ₀I+μ₀ε₀dΦ_E/dt'
      },
      {
        topicId: maxwellTopic.id,
        front: 'What is Gauss\'s law for magnetism?',
        back: '∮B⃗·dA⃗ = 0 or ∇·B⃗ = 0. No magnetic monopoles; field lines are closed loops'
      },
      {
        topicId: maxwellTopic.id,
        front: 'What is Maxwell\'s displacement current?',
        back: 'I_d = ε₀dΦ_E/dt. Changing electric field creates magnetic field as if current flowed'
      },
      {
        topicId: maxwellTopic.id,
        front: 'What is the Poynting vector?',
        back: 'S⃗ = (1/μ₀)E⃗×B⃗. Energy flux (W/m²) in EM field, points in direction of propagation'
      },
      {
        topicId: maxwellTopic.id,
        front: 'What is electromagnetic energy density?',
        back: 'u = u_E + u_B = ½ε₀E² + B²/(2μ₀), energy per volume in EM field'
      },
      {
        topicId: maxwellTopic.id,
        front: 'Why was the displacement current term needed?',
        back: 'Completes Ampere\'s law for time-varying fields, ensures charge conservation, predicts EM waves'
      }
    ]
  })

  console.log('✓ Created topic: Maxwell\'s Equations')

  // Topic 12: Electromagnetic Waves
  const emWavesTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-electromagnetic-waves' },
    update: {},
    create: {
      slug: 'physics-c-electromagnetic-waves',
      title: 'Electromagnetic Waves',
      description: 'Wave equations from Maxwell\'s equations, properties of EM waves',
      order: 2,
      categoryId: maxwellCategory.id,
      isPremium: false,
      textContent: `
# Electromagnetic Waves

## Wave Equation from Maxwell

In vacuum, taking curl of Faraday's law and using Ampere-Maxwell:

$$\\nabla^2\\vec{E} = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec{E}}{\\partial t^2}$$

$$\\nabla^2\\vec{B} = \\mu_0\\epsilon_0\\frac{\\partial^2\\vec{B}}{\\partial t^2}$$

These are **wave equations** with speed:

$$c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}} = 3.00 \\times 10^8 \\text{ m/s}$$

(Speed of light!)

## Plane Wave Solution

**Electric field:**
$$\\vec{E} = E_0\\sin(kx - \\omega t)\\hat{j}$$

**Magnetic field:**
$$\\vec{B} = B_0\\sin(kx - \\omega t)\\hat{k}$$

where:
- $k = 2\\pi/\\lambda$ (wave number)
- $\\omega = 2\\pi f$ (angular frequency)
- $\\omega = ck$ (dispersion relation)

## Properties of EM Waves

1. **Transverse:** $\\vec{E}$ and $\\vec{B}$ perpendicular to propagation direction

2. **Perpendicular to each other:** $\\vec{E} \\perp \\vec{B}$

3. **In phase:** $\\vec{E}$ and $\\vec{B}$ oscillate together

4. **Right-hand rule:** $\\vec{E} \\times \\vec{B}$ points in propagation direction

5. **Field magnitudes related:**
$$\\frac{E}{B} = c$$

## Energy in EM Wave

**Energy density:**
$$u = \\epsilon_0 E^2 = \\frac{B^2}{\\mu_0}$$

(Equal contributions from $\\vec{E}$ and $\\vec{B}$)

**Intensity (average power per area):**
$$I = \\langle S \\rangle = \\frac{1}{2}\\epsilon_0 cE_0^2 = \\frac{E_0^2}{2\\mu_0 c}$$

or in terms of $B_0$:
$$I = \\frac{cB_0^2}{2\\mu_0}$$

## Momentum and Radiation Pressure

EM wave carries momentum:

$$p = \\frac{U}{c}$$

**Momentum density:**
$$g = \\frac{u}{c} = \\frac{S}{c^2}$$

**Radiation pressure:**

Complete absorption: $P = \\frac{I}{c}$

Complete reflection: $P = \\frac{2I}{c}$

## Polarization

**Linear polarization:** $\\vec{E}$ oscillates in fixed plane

**Circular polarization:** $\\vec{E}$ rotates, constant magnitude

**Unpolarized:** Random polarization directions

**Malus's law:** Intensity through polarizer:
$$I = I_0\\cos^2\\theta$$

where $\\theta$ is angle from polarization axis.

## Electromagnetic Spectrum

All EM waves travel at $c$ in vacuum, differ only in frequency/wavelength:

- Radio waves: $f < 10^9$ Hz
- Microwaves: $10^9$ - $10^{12}$ Hz
- Infrared: $10^{12}$ - $10^{14}$ Hz
- Visible: $4 \\times 10^{14}$ - $7 \\times 10^{14}$ Hz
- Ultraviolet: $10^{15}$ - $10^{17}$ Hz
- X-rays: $10^{17}$ - $10^{19}$ Hz
- Gamma rays: $f > 10^{19}$ Hz

## Standing EM Waves

Boundary conditions (e.g., in cavity) create standing waves:

$$E_y = 2E_0\\sin(kx)\\cos(\\omega t)$$

**Nodes:** $E = 0$ at $x = 0, \\lambda/2, \\lambda, ...$

Used in:
- Lasers
- Microwave ovens
- Radio antennas

## Doppler Effect

Source moving with velocity $v$:

**Moving toward observer:**
$$f' = f\\frac{c}{c - v}$$

**Moving away:**
$$f' = f\\frac{c}{c + v}$$

For $v \\ll c$:
$$\\frac{\\Delta f}{f} \\approx \\frac{v}{c}$$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: emWavesTopic.id,
        front: 'What is the wave equation for electromagnetic waves?',
        back: '∇²E⃗ = μ₀ε₀(∂²E⃗/∂t²), derived from Maxwell\'s equations. Wave speed c = 1/√(μ₀ε₀)'
      },
      {
        topicId: emWavesTopic.id,
        front: 'What is the relationship between E and B in an EM wave?',
        back: 'E/B = c. They are perpendicular, in phase, and E⃗×B⃗ points in propagation direction'
      },
      {
        topicId: emWavesTopic.id,
        front: 'What is the intensity of an EM wave?',
        back: 'I = ½ε₀cE₀² = cB₀²/(2μ₀), average power per unit area'
      },
      {
        topicId: emWavesTopic.id,
        front: 'What is radiation pressure?',
        back: 'P = I/c (absorption) or P = 2I/c (reflection). EM waves carry momentum p = U/c'
      },
      {
        topicId: emWavesTopic.id,
        front: 'What is Malus\'s law?',
        back: 'I = I₀cos²θ for intensity through polarizer at angle θ from polarization axis'
      },
      {
        topicId: emWavesTopic.id,
        front: 'What is the speed of all EM waves in vacuum?',
        back: 'c = 3.00×10⁸ m/s = 1/√(μ₀ε₀), independent of frequency'
      }
    ]
  })

  console.log('✓ Created topic: Electromagnetic Waves')

  console.log('\n✅ Successfully seeded AP Physics C: E&M - Electromagnetic Induction and Maxwell\'s Equations!')
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
