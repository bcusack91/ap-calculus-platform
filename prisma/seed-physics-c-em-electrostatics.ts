import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Physics C: E&M - Electrostatics...')

  // Get the AP Physics C: E&M course
  const emCourse = await prisma.course.findUnique({
    where: { slug: 'ap-physics-c-em' }
  })

  if (!emCourse) {
    throw new Error('AP Physics C: E&M course not found')
  }

  // Category 1: Electrostatics
  const electrostaticsCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-electrostatics' },
    update: {},
    create: {
      slug: 'physics-c-em-electrostatics',
      name: 'Electrostatics',
      description: 'Electric charge, Coulomb\'s law, electric fields with calculus',
      order: 1,
      courseId: emCourse.id
    }
  })

  // Topic 1: Electric Field and Coulomb's Law
  const electricFieldTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-electric-field-coulomb' },
    update: {},
    create: {
      slug: 'physics-c-electric-field-coulomb',
      title: 'Electric Field and Coulomb\'s Law',
      description: 'Coulomb\'s law, electric field from continuous charge distributions',
      order: 1,
      categoryId: electrostaticsCategory.id,
      isPremium: false,
      textContent: `
# Electric Field and Coulomb's Law

## Coulomb's Law

Force between two point charges:

$$\\vec{F} = k\\frac{q_1q_2}{r^2}\\hat{r} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}\\hat{r}$$

where:
- $k = 8.99 \\times 10^9$ N·m²/C²
- $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²) (permittivity of free space)

**Vector form:**
$$\\vec{F}_{12} = k\\frac{q_1q_2}{r_{12}^2}\\hat{r}_{12}$$

## Electric Field

Electric field due to point charge:

$$\\vec{E} = k\\frac{q}{r^2}\\hat{r}$$

**Definition:**
$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$

where $q_0$ is test charge.

**Superposition principle:**
$$\\vec{E}_{total} = \\sum_i \\vec{E}_i$$

## Continuous Charge Distributions

For continuous distribution with charge density $\\rho$:

$$\\vec{E} = k\\int \\frac{dq}{r^2}\\hat{r}$$

### Linear Charge Density

Charge per unit length: $\\lambda = dq/dl$

$$d\\vec{E} = k\\frac{\\lambda \\, dl}{r^2}\\hat{r}$$

### Surface Charge Density

Charge per unit area: $\\sigma = dq/dA$

$$d\\vec{E} = k\\frac{\\sigma \\, dA}{r^2}\\hat{r}$$

### Volume Charge Density

Charge per unit volume: $\\rho = dq/dV$

$$d\\vec{E} = k\\frac{\\rho \\, dV}{r^2}\\hat{r}$$

## Example: Infinite Line of Charge

Uniform line charge density $\\lambda$, find field at distance $r$:

By symmetry, field is radial. Consider element at distance $z$:

$$dE_x = \\frac{k\\lambda \\, dz}{(r^2 + z^2)}\\frac{r}{\\sqrt{r^2 + z^2}}$$

$$E = \\int_{-\\infty}^{\\infty} \\frac{k\\lambda r \\, dz}{(r^2 + z^2)^{3/2}}$$

Using $z = r\\tan\\theta$:

$$E = \\frac{2k\\lambda}{r} = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$

## Example: Ring of Charge

Ring of radius $R$, total charge $Q$, find field on axis at distance $x$:

$$E_x = \\frac{kQx}{(x^2 + R^2)^{3/2}}$$

**At center** ($x = 0$): $E = 0$ (by symmetry)

**Far from ring** ($x \\gg R$): $E \\approx kQ/x^2$ (point charge)

## Example: Disk of Charge

Uniform surface charge density $\\sigma$, radius $R$, field on axis:

$$E_x = \\frac{\\sigma}{2\\epsilon_0}\\left(1 - \\frac{x}{\\sqrt{x^2 + R^2}}\\right)$$

**At surface** ($x = 0$): $E = \\sigma/(2\\epsilon_0)$

**Far from disk** ($x \\gg R$): $E \\approx k\\pi R^2\\sigma/x^2 = kQ/x^2$

**Infinite sheet** ($R \\to \\infty$): $E = \\sigma/(2\\epsilon_0)$ (uniform!)

## Example: Spherical Shell

Uniform surface charge density, total charge $Q$, radius $R$:

**Outside** ($r > R$): $E = kQ/r^2$ (like point charge)

**Inside** ($r < R$): $E = 0$

(From Gauss's law, derived below)

## Dipole

Two charges $+q$ and $-q$ separated by distance $d$:

**Dipole moment:**
$$\\vec{p} = q\\vec{d}$$

(points from $-q$ to $+q$)

**Field on axis** (far field, $r \\gg d$):
$$E_{axis} = \\frac{2kp}{r^3}$$

**Field on perpendicular bisector:**
$$E_{perp} = \\frac{kp}{r^3}$$
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: electricFieldTopic.id,
        front: 'What is Coulomb\'s law?',
        back: 'F = kq₁q₂/r², where k = 8.99×10⁹ N·m²/C² = 1/(4πε₀). Force between point charges'
      },
      {
        topicId: electricFieldTopic.id,
        front: 'What is the electric field of a point charge?',
        back: 'E⃗ = kq/r² r̂. Electric field is force per unit test charge'
      },
      {
        topicId: electricFieldTopic.id,
        front: 'What is the electric field of an infinite line charge?',
        back: 'E = λ/(2πε₀r) = 2kλ/r, pointing radially outward, where λ is charge per length'
      },
      {
        topicId: electricFieldTopic.id,
        front: 'What is the electric field of an infinite sheet of charge?',
        back: 'E = σ/(2ε₀), uniform and perpendicular to sheet, where σ is surface charge density'
      },
      {
        topicId: electricFieldTopic.id,
        front: 'What is the electric dipole moment?',
        back: 'p⃗ = qd⃗, where d⃗ points from -q to +q. Far-field drops as 1/r³'
      }
    ]
  })

  console.log('✓ Created topic: Electric Field and Coulomb\'s Law')

  // Topic 2: Gauss's Law
  const gaussLawTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-gauss-law' },
    update: {},
    create: {
      slug: 'physics-c-gauss-law',
      title: 'Gauss\'s Law',
      description: 'Integral form of Gauss\'s law and applications to symmetric charge distributions',
      order: 2,
      categoryId: electrostaticsCategory.id,
      isPremium: false,
      textContent: `
# Gauss's Law

## Statement of Gauss's Law

$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$$

The electric flux through a closed surface equals enclosed charge divided by $\\epsilon_0$.

## Electric Flux

$$\\Phi_E = \\int \\vec{E} \\cdot d\\vec{A}$$

For uniform field and flat surface:
$$\\Phi_E = \\vec{E} \\cdot \\vec{A} = EA\\cos\\theta$$

## Applying Gauss's Law

**Strategy:**
1. Choose Gaussian surface with symmetry
2. Calculate flux on each part
3. Find enclosed charge
4. Solve for $E$

**Works best for:**
- Spherical symmetry
- Cylindrical symmetry
- Planar symmetry

## Spherical Symmetry

### Point Charge

Gaussian surface: sphere of radius $r$

$$\\oint E \\, dA = E(4\\pi r^2) = \\frac{q}{\\epsilon_0}$$

$$E = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2} = k\\frac{q}{r^2}$$

### Uniform Spherical Shell

Shell of radius $R$, total charge $Q$:

**Outside** ($r > R$):
$$E(4\\pi r^2) = \\frac{Q}{\\epsilon_0}$$

$$E = k\\frac{Q}{r^2}$$

**Inside** ($r < R$):
$$Q_{enc} = 0 \\Rightarrow E = 0$$

### Uniform Solid Sphere

Sphere of radius $R$, uniform charge density $\\rho$, total charge $Q$:

**Outside** ($r > R$):
$$E = k\\frac{Q}{r^2}$$

**Inside** ($r < R$):
$$Q_{enc} = \\rho \\cdot \\frac{4}{3}\\pi r^3 = Q\\frac{r^3}{R^3}$$

$$E(4\\pi r^2) = \\frac{Q}{\\epsilon_0}\\frac{r^3}{R^3}$$

$$E = k\\frac{Q}{R^3}r$$

(Linear in $r$, maximum at surface)

## Cylindrical Symmetry

### Infinite Line Charge

Line with charge density $\\lambda$:

Gaussian surface: cylinder of radius $r$, length $L$

$$E(2\\pi rL) = \\frac{\\lambda L}{\\epsilon_0}$$

$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r} = \\frac{2k\\lambda}{r}$$

### Infinite Cylindrical Shell

Shell of radius $R$, charge per length $\\lambda$:

**Outside** ($r > R$): $E = \\lambda/(2\\pi\\epsilon_0 r)$

**Inside** ($r < R$): $E = 0$

### Infinite Solid Cylinder

Cylinder of radius $R$, uniform volume charge density $\\rho$:

**Outside** ($r > R$): $E = \\lambda/(2\\pi\\epsilon_0 r)$ where $\\lambda = \\rho\\pi R^2$

**Inside** ($r < R$):
$$Q_{enc} = \\rho(\\pi r^2 L)$$

$$E = \\frac{\\rho r}{2\\epsilon_0}$$

## Planar Symmetry

### Infinite Sheet

Surface charge density $\\sigma$:

Gaussian surface: pillbox with area $A$

$$2EA = \\frac{\\sigma A}{\\epsilon_0}$$

$$E = \\frac{\\sigma}{2\\epsilon_0}$$

(Field is uniform, independent of distance!)

### Two Parallel Sheets

Sheets with $+\\sigma$ and $-\\sigma$:

**Between sheets:** $E = \\sigma/\\epsilon_0$ (fields add)

**Outside:** $E = 0$ (fields cancel)

This is a **capacitor**.

## Conductors in Electrostatic Equilibrium

1. $\\vec{E} = 0$ inside conductor
2. Net charge resides on surface
3. $\\vec{E}$ perpendicular to surface just outside
4. $E = \\sigma/\\epsilon_0$ just outside surface

### Conducting Shell

Hollow conductor with charge $Q$:

- Inner surface: charge $-q$ (if $+q$ inside cavity)
- Outer surface: charge $Q + q$
- Field inside conductor: $E = 0$
- Field in cavity: depends on charge inside

## Differential Form

Using divergence theorem:

$$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}$$

This is one of **Maxwell's equations**.
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: gaussLawTopic.id,
        front: 'What is Gauss\'s law?',
        back: '∮E⃗·dA⃗ = Q_enc/ε₀. Electric flux through closed surface equals enclosed charge divided by ε₀'
      },
      {
        topicId: gaussLawTopic.id,
        front: 'What is the electric field inside a uniformly charged spherical shell?',
        back: 'E = 0. No enclosed charge, so by Gauss\'s law, no field inside'
      },
      {
        topicId: gaussLawTopic.id,
        front: 'What is the electric field inside a uniformly charged solid sphere?',
        back: 'E = kQr/R³, linear in r. Only charge at r\' < r contributes'
      },
      {
        topicId: gaussLawTopic.id,
        front: 'What is the electric field between two parallel oppositely charged sheets?',
        back: 'E = σ/ε₀, uniform field. Fields from each sheet add between them, cancel outside'
      },
      {
        topicId: gaussLawTopic.id,
        front: 'What are the properties of conductors in electrostatic equilibrium?',
        back: 'E = 0 inside; charge on surface; E perpendicular to surface; E = σ/ε₀ just outside'
      },
      {
        topicId: gaussLawTopic.id,
        front: 'What is the differential form of Gauss\'s law?',
        back: '∇·E⃗ = ρ/ε₀, one of Maxwell\'s equations'
      }
    ]
  })

  console.log('✓ Created topic: Gauss\'s Law')

  // Topic 3: Electric Potential
  const potentialTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-electric-potential' },
    update: {},
    create: {
      slug: 'physics-c-electric-potential',
      title: 'Electric Potential',
      description: 'Electric potential energy, voltage, and calculating potential from fields',
      order: 3,
      categoryId: electrostaticsCategory.id,
      isPremium: false,
      textContent: `
# Electric Potential

## Electric Potential Energy

Work done by electric force:

$$W = \\int_A^B \\vec{F} \\cdot d\\vec{l} = q\\int_A^B \\vec{E} \\cdot d\\vec{l}$$

**Potential energy change:**
$$\\Delta U = -W = -q\\int_A^B \\vec{E} \\cdot d\\vec{l}$$

## Electric Potential (Voltage)

$$V = \\frac{U}{q}$$

**Potential difference:**
$$\\Delta V = V_B - V_A = -\\int_A^B \\vec{E} \\cdot d\\vec{l}$$

(Path-independent for electrostatic fields)

**Units:** 1 volt = 1 joule/coulomb

## Electric Field from Potential

$$\\vec{E} = -\\nabla V = -\\left(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}\\right)$$

In one dimension:
$$E_x = -\\frac{dV}{dx}$$

Field points from high to low potential (down the potential gradient).

## Potential of Point Charge

Choose $V = 0$ at $r = \\infty$:

$$V(r) = -\\int_\\infty^r \\vec{E} \\cdot d\\vec{l} = -\\int_\\infty^r k\\frac{q}{r^2} \\, dr$$

$$V(r) = k\\frac{q}{r}$$

**For multiple charges:**
$$V = \\sum_i k\\frac{q_i}{r_i}$$

(Scalar sum, easier than vector sum for $\\vec{E}$!)

## Potential of Continuous Distributions

$$V = k\\int \\frac{dq}{r}$$

### Infinite Line Charge

$$V = -\\frac{\\lambda}{2\\pi\\epsilon_0}\\ln\\frac{r}{r_0}$$

(Must choose reference point $r_0$ since $V \\to \\infty$ at infinity)

### Ring of Charge

On axis at distance $x$:

$$V = \\frac{kQ}{\\sqrt{x^2 + R^2}}$$

**At center:** $V = kQ/R$

### Disk of Charge

On axis:

$$V = \\frac{\\sigma}{2\\epsilon_0}\\left(\\sqrt{x^2 + R^2} - x\\right)$$

### Spherical Shell

Total charge $Q$, radius $R$:

**Outside** ($r > R$): $V = kQ/r$

**On surface** ($r = R$): $V = kQ/R$

**Inside** ($r < R$): $V = kQ/R$ (constant!)

### Solid Sphere

Uniform charge density, total $Q$, radius $R$:

**Outside** ($r > R$): $V = kQ/r$

**Inside** ($r < R$):
$$V = \\frac{kQ}{2R^3}(3R^2 - r^2)$$

**At center:** $V = 3kQ/(2R)$

## Equipotential Surfaces

Surfaces where $V$ = constant.

- Electric field perpendicular to equipotentials
- No work to move charge along equipotential
- Conductors are equipotentials

## Electric Dipole Potential

Far field ($r \\gg d$):

$$V = k\\frac{p\\cos\\theta}{r^2}$$

where $\\theta$ is angle from dipole axis and $p = qd$.

**Electric field:**
$$E_r = -\\frac{\\partial V}{\\partial r} = \\frac{2kp\\cos\\theta}{r^3}$$

$$E_\\theta = -\\frac{1}{r}\\frac{\\partial V}{\\partial \\theta} = \\frac{kp\\sin\\theta}{r^3}$$

## Energy of Charge Distributions

Work to assemble charges:

$$U = \\frac{1}{2}\\sum_{i} q_i V_i$$

where $V_i$ is potential at location of $q_i$ due to all other charges.

**For continuous distribution:**
$$U = \\frac{\\epsilon_0}{2}\\int E^2 \\, dV$$

(Energy stored in electric field)
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: potentialTopic.id,
        front: 'What is electric potential?',
        back: 'V = U/q, potential energy per unit charge. ΔV = -∫E⃗·dl⃗ (line integral of electric field)'
      },
      {
        topicId: potentialTopic.id,
        front: 'How do you find electric field from potential?',
        back: 'E⃗ = -∇V. In 1D: E = -dV/dx. Field points from high to low potential'
      },
      {
        topicId: potentialTopic.id,
        front: 'What is the potential of a point charge?',
        back: 'V(r) = kq/r, choosing V = 0 at r = ∞. For multiple charges, add scalars: V = Σkq_i/r_i'
      },
      {
        topicId: potentialTopic.id,
        front: 'What is the potential inside a conducting spherical shell?',
        back: 'V = kQ/R (constant). Same as on surface, since E = 0 inside'
      },
      {
        topicId: potentialTopic.id,
        front: 'What are equipotential surfaces?',
        back: 'Surfaces where V = constant. E⃗ is perpendicular to equipotentials. Conductors are equipotentials'
      },
      {
        topicId: potentialTopic.id,
        front: 'How is energy stored in an electric field?',
        back: 'U = (ε₀/2)∫E² dV, integrated over all space. Energy density u = ε₀E²/2'
      }
    ]
  })

  console.log('✓ Created topic: Electric Potential')

  // Category 2: Capacitance
  const capacitanceCategory = await prisma.category.upsert({
    where: { slug: 'physics-c-em-capacitance' },
    update: {},
    create: {
      slug: 'physics-c-em-capacitance',
      name: 'Capacitance',
      description: 'Capacitors, energy storage, and dielectrics',
      order: 2,
      courseId: emCourse.id
    }
  })

  // Topic 4: Capacitors and Dielectrics
  const capacitorsTopic = await prisma.topic.upsert({
    where: { slug: 'physics-c-capacitors-dielectrics' },
    update: {},
    create: {
      slug: 'physics-c-capacitors-dielectrics',
      title: 'Capacitors and Dielectrics',
      description: 'Capacitance calculations, energy storage, and dielectric materials',
      order: 1,
      categoryId: capacitanceCategory.id,
      isPremium: false,
      textContent: `
# Capacitors and Dielectrics

## Capacitance

**Definition:**
$$C = \\frac{Q}{V}$$

where $Q$ is charge on each plate, $V$ is potential difference.

**Units:** 1 farad (F) = 1 coulomb/volt

## Parallel Plate Capacitor

Area $A$, separation $d$:

$$E = \\frac{\\sigma}{\\epsilon_0} = \\frac{Q}{\\epsilon_0 A}$$

$$V = Ed = \\frac{Qd}{\\epsilon_0 A}$$

$$C = \\frac{Q}{V} = \\frac{\\epsilon_0 A}{d}$$

## Other Geometries

### Cylindrical Capacitor

Inner radius $a$, outer radius $b$, length $L$:

$$C = \\frac{2\\pi\\epsilon_0 L}{\\ln(b/a)}$$

### Spherical Capacitor

Inner radius $a$, outer radius $b$:

$$C = 4\\pi\\epsilon_0\\frac{ab}{b-a}$$

### Isolated Sphere

Radius $R$ (other conductor at infinity):

$$C = 4\\pi\\epsilon_0 R$$

## Capacitors in Series

Same charge $Q$ on each:

$$\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots$$

**Two capacitors:**
$$C_{eq} = \\frac{C_1C_2}{C_1 + C_2}$$

## Capacitors in Parallel

Same voltage $V$ across each:

$$C_{eq} = C_1 + C_2 + \\cdots$$

## Energy Stored in Capacitor

Work to charge capacitor:

$$W = \\int_0^Q V \\, dq = \\int_0^Q \\frac{q}{C} \\, dq = \\frac{Q^2}{2C}$$

**Energy:**
$$U = \\frac{1}{2}\\frac{Q^2}{C} = \\frac{1}{2}CV^2 = \\frac{1}{2}QV$$

**Energy density** (parallel plate):
$$u = \\frac{U}{Ad} = \\frac{1}{2}\\epsilon_0 E^2$$

## Dielectrics

Insulating material inserted between plates:

**Dielectric constant:** $\\kappa$ (or $K$)

**With dielectric:**
- Capacitance: $C = \\kappa C_0$
- Electric field: $E = E_0/\\kappa$
- Potential: $V = V_0/\\kappa$ (if charge constant)

**Permittivity of material:**
$$\\epsilon = \\kappa\\epsilon_0$$

**Modified equations:**
$$C = \\frac{\\kappa\\epsilon_0 A}{d}$$

$$u = \\frac{1}{2}\\kappa\\epsilon_0 E^2$$

## Dielectric Breakdown

Maximum field before dielectric breaks down:

Air: ~$3 \\times 10^6$ V/m

Different materials have different breakdown strengths.

## Gauss's Law with Dielectrics

$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{free}}{\\kappa\\epsilon_0}$$

or using **electric displacement** $\\vec{D} = \\kappa\\epsilon_0\\vec{E}$:

$$\\oint \\vec{D} \\cdot d\\vec{A} = Q_{free}$$

## Polarization

Dielectric polarizes in electric field:

**Polarization:** $\\vec{P} = \\kappa\\epsilon_0(\\kappa - 1)\\vec{E}$

**Bound surface charge:**
$$\\sigma_b = P$$

This reduces net field inside dielectric.

## Energy with Dielectric

If dielectric inserted with:

**Constant charge:** $U_f = U_i/\\kappa$ (energy decreases)

**Constant voltage:** $U_f = \\kappa U_i$ (energy increases)

**Force on dielectric:**

Dielectric pulled into capacitor (lower energy state).
`
    }
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: capacitorsTopic.id,
        front: 'What is capacitance?',
        back: 'C = Q/V, charge stored per unit voltage. Unit: farad (F) = coulomb/volt'
      },
      {
        topicId: capacitorsTopic.id,
        front: 'What is the capacitance of a parallel plate capacitor?',
        back: 'C = ε₀A/d, where A is area and d is separation'
      },
      {
        topicId: capacitorsTopic.id,
        front: 'How do capacitors combine in series and parallel?',
        back: 'Series: 1/C_eq = Σ(1/C_i). Parallel: C_eq = ΣC_i. (Opposite of resistors!)'
      },
      {
        topicId: capacitorsTopic.id,
        front: 'What is the energy stored in a capacitor?',
        back: 'U = ½Q²/C = ½CV² = ½QV. Energy density u = ½ε₀E²'
      },
      {
        topicId: capacitorsTopic.id,
        front: 'What does a dielectric do to capacitance?',
        back: 'Increases it: C = κC₀, where κ is dielectric constant. Also reduces E and V by factor κ'
      },
      {
        topicId: capacitorsTopic.id,
        front: 'What is the electric displacement D⃗?',
        back: 'D⃗ = κε₀E⃗. Gauss\'s law with dielectrics: ∮D⃗·dA⃗ = Q_free'
      }
    ]
  })

  console.log('✓ Created topic: Capacitors and Dielectrics')

  console.log('\n✅ Successfully seeded AP Physics C: E&M - Electrostatics!')
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
