import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Physics C: E&M topics...')

  // Topic 1: Electric Field and Coulomb's Law
  const electricFieldTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-electric-field-coulomb' }
  })

  if (electricFieldTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: electricFieldTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'A thin rod of length L = 0.5 m has a non-uniform linear charge density λ(x) = λ₀x, where λ₀ = 4.0 × 10⁻⁶ C/m² and x is measured from one end. Find the electric field at a point P located a distance d = 0.2 m from the end where x = 0, along the axis of the rod.',
          solution: `**Given:**
- L = 0.5 m
- λ(x) = λ₀x where λ₀ = 4.0 × 10⁻⁶ C/m²
- d = 0.2 m
- k = 8.99 × 10⁹ N·m²/C²

**Setup:**

For a small element dx at position x from the origin, the charge is:
$$dq = λ(x)dx = λ_0 x \\, dx$$

The electric field contribution at P (located at distance d from x = 0):
$$dE = k\\frac{dq}{r^2} = k\\frac{λ_0 x \\, dx}{(d + x)^2}$$

**Integration:**

$$E = \\int_0^L k\\frac{λ_0 x}{(d + x)^2} \\, dx = kλ_0 \\int_0^L \\frac{x}{(d + x)^2} \\, dx$$

Using substitution u = d + x, du = dx, when x = 0, u = d; when x = L, u = d + L:
$$E = kλ_0 \\int_d^{d+L} \\frac{u - d}{u^2} \\, du = kλ_0 \\int_d^{d+L} \\left(\\frac{1}{u} - \\frac{d}{u^2}\\right) du$$

$$E = kλ_0 \\left[\\ln u + \\frac{d}{u}\\right]_d^{d+L}$$

$$E = kλ_0 \\left[\\ln(d+L) - \\ln d + \\frac{d}{d+L} - 1\\right]$$

$$E = kλ_0 \\left[\\ln\\left(\\frac{d+L}{d}\\right) + \\frac{d}{d+L} - 1\\right]$$

**Numerical calculation:**
$$E = (8.99 \\times 10^9)(4.0 \\times 10^{-6})\\left[\\ln\\left(\\frac{0.7}{0.2}\\right) + \\frac{0.2}{0.7} - 1\\right]$$

$$E = 35,960 \\left[\\ln(3.5) + 0.286 - 1\\right]$$

$$E = 35,960 \\left[1.253 + 0.286 - 1\\right] = 35,960(0.539)$$

$$E = 1.94 \\times 10^4 \\text{ N/C}$$

**Answer:** The electric field at point P is **1.94 × 10⁴ N/C** pointing away from the rod.`
        },
        {
          topicId: electricFieldTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A ring of radius R = 0.1 m carries a uniformly distributed charge Q = 2.0 × 10⁻⁸ C. (a) Find the electric field at a point on the axis at distance x = 0.05 m from the center. (b) At what distance x does the electric field reach its maximum value? (c) What is the maximum field strength?',
          solution: `**Given:**
- R = 0.1 m
- Q = 2.0 × 10⁻⁸ C = 20 nC
- k = 8.99 × 10⁹ N·m²/C²

**Formula for field on axis:**
$$E_x = \\frac{kQx}{(x^2 + R^2)^{3/2}}$$

**(a) Field at x = 0.05 m:**

$$E = \\frac{(8.99 \\times 10^9)(2.0 \\times 10^{-8})(0.05)}{[(0.05)^2 + (0.1)^2]^{3/2}}$$

$$E = \\frac{(8.99)(0.1)}{[(0.0025 + 0.01)]^{3/2}} = \\frac{0.899}{(0.0125)^{3/2}}$$

$$E = \\frac{0.899}{1.40 \\times 10^{-3}} = 6.42 \\times 10^2 \\text{ N/C}$$

**(b) Maximum field position:**

To find maximum, take derivative and set equal to zero:
$$\\frac{dE_x}{dx} = kQ\\frac{d}{dx}\\left[\\frac{x}{(x^2 + R^2)^{3/2}}\\right] = 0$$

$$\\frac{dE_x}{dx} = kQ\\frac{(x^2 + R^2)^{3/2} - x \\cdot \\frac{3}{2}(x^2 + R^2)^{1/2}(2x)}{(x^2 + R^2)^3}$$

$$= kQ\\frac{(x^2 + R^2) - 3x^2}{(x^2 + R^2)^{5/2}} = 0$$

$$R^2 - 2x^2 = 0$$

$$x = \\frac{R}{\\sqrt{2}} = \\frac{0.1}{\\sqrt{2}} = 0.0707 \\text{ m}$$

**(c) Maximum field strength:**

$$E_{max} = \\frac{kQ(R/\\sqrt{2})}{[(R/\\sqrt{2})^2 + R^2]^{3/2}}$$

$$= \\frac{kQ(R/\\sqrt{2})}{[R^2/2 + R^2]^{3/2}} = \\frac{kQ(R/\\sqrt{2})}{(3R^2/2)^{3/2}}$$

$$= \\frac{kQ}{R^2\\sqrt{2}(3/2)^{3/2}} = \\frac{kQ}{R^2\\sqrt{2} \\cdot \\frac{3\\sqrt{3}}{2\\sqrt{2}}}$$

$$= \\frac{2kQ}{3\\sqrt{3}R^2} = \\frac{2(8.99 \\times 10^9)(2.0 \\times 10^{-8})}{3\\sqrt{3}(0.1)^2}$$

$$= \\frac{359.6}{0.052} = 6.91 \\times 10^2 \\text{ N/C}$$

**Answers:**
(a) **E = 642 N/C**
(b) **x = 7.07 cm = R/√2**
(c) **E_max = 691 N/C**`
        },
        {
          topicId: electricFieldTopic.id,
          order: 3,
          difficulty: 'MEDIUM',
          question: 'An electric dipole consists of charges +q and -q separated by distance d = 2.0 mm. The dipole moment is p = 5.0 × 10⁻¹² C·m. Find (a) the magnitude of each charge, (b) the electric field at a point on the perpendicular bisector at distance r = 10 cm (where r >> d), and (c) the electric field at a point on the axis at distance r = 10 cm from the center.',
          solution: `**Given:**
- d = 2.0 × 10⁻³ m = 2.0 mm
- p = 5.0 × 10⁻¹² C·m
- r = 0.1 m = 10 cm
- k = 8.99 × 10⁹ N·m²/C²

**(a) Magnitude of each charge:**

Dipole moment: p = qd

$$q = \\frac{p}{d} = \\frac{5.0 \\times 10^{-12}}{2.0 \\times 10^{-3}} = 2.5 \\times 10^{-9} \\text{ C} = 2.5 \\text{ nC}$$

**(b) Field on perpendicular bisector (far field, r >> d):**

$$E_{perp} = \\frac{kp}{r^3}$$

$$E = \\frac{(8.99 \\times 10^9)(5.0 \\times 10^{-12})}{(0.1)^3}$$

$$E = \\frac{4.495 \\times 10^{-2}}{10^{-3}} = 44.95 \\text{ N/C}$$

Direction: From +q toward -q (perpendicular to dipole axis)

**(c) Field on axis (far field, r >> d):**

$$E_{axis} = \\frac{2kp}{r^3}$$

$$E = \\frac{2(8.99 \\times 10^9)(5.0 \\times 10^{-12})}{(0.1)^3}$$

$$E = \\frac{8.99 \\times 10^{-2}}{10^{-3}} = 89.9 \\text{ N/C}$$

Direction: Away from dipole (from -q toward +q) for points on the side of +q

**Note:** The axial field is exactly twice the perpendicular field at the same distance:
$$E_{axis} = 2E_{perp}$$

**Answers:**
(a) **q = 2.5 nC**
(b) **E = 45.0 N/C** (perpendicular to axis)
(c) **E = 89.9 N/C** (along axis)**`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Electric Field and Coulomb\'s Law')
  }

  // Topic 2: Gauss's Law
  const gaussLawTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-gauss-law' }
  })

  if (gaussLawTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: gaussLawTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A solid insulating sphere of radius R = 0.08 m has a uniform volume charge density ρ = 6.5 × 10⁻⁶ C/m³. Use Gauss\'s law to find: (a) the electric field at r = 0.05 m (inside), (b) the electric field at r = 0.12 m (outside), and (c) the total charge of the sphere.',
          solution: `**Given:**
- R = 0.08 m
- ρ = 6.5 × 10⁻⁶ C/m³
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²)
- k = 8.99 × 10⁹ N·m²/C²

**Gauss's Law:** ∮E⃗·dA⃗ = Q_enc/ε₀

**(a) Inside sphere (r = 0.05 m < R):**

Choose Gaussian surface: sphere of radius r

By symmetry, E is constant on surface and radial:
$$E(4πr^2) = \\frac{Q_{enc}}{ε_0}$$

Enclosed charge:
$$Q_{enc} = ρ \\cdot \\frac{4}{3}πr^3$$

$$E = \\frac{ρr^3}{3ε_0r^2} = \\frac{ρr}{3ε_0}$$

$$E = \\frac{(6.5 \\times 10^{-6})(0.05)}{3(8.85 \\times 10^{-12})} = \\frac{3.25 \\times 10^{-7}}{2.655 \\times 10^{-11}}$$

$$E = 1.22 \\times 10^4 \\text{ N/C}$$

Or using k = 1/(4πε₀):
$$E = \\frac{4πkρr}{3} = \\frac{4π(8.99 \\times 10^9)(6.5 \\times 10^{-6})(0.05)}{3}$$

$$E = 1.22 \\times 10^4 \\text{ N/C}$$

**(b) Outside sphere (r = 0.12 m > R):**

Total charge enclosed:
$$Q = ρ \\cdot \\frac{4}{3}πR^3 = (6.5 \\times 10^{-6}) \\cdot \\frac{4}{3}π(0.08)^3$$

$$Q = (6.5 \\times 10^{-6})(2.144 \\times 10^{-3}) = 1.39 \\times 10^{-8} \\text{ C}$$

Outside, field is like a point charge:
$$E = \\frac{kQ}{r^2} = \\frac{(8.99 \\times 10^9)(1.39 \\times 10^{-8})}{(0.12)^2}$$

$$E = \\frac{1.25 \\times 10^2}{1.44 \\times 10^{-2}} = 8.68 \\times 10^3 \\text{ N/C}$$

**(c) Total charge:**

Already calculated: Q = 1.39 × 10⁻⁸ C = **13.9 nC**

**Verification:** Field at surface using both formulas:
- From inside: E(R) = ρR/(3ε₀) = 1.96 × 10⁴ N/C
- From outside: E(R) = kQ/R² = 1.96 × 10⁴ N/C ✓

**Answers:**
(a) **E = 1.22 × 10⁴ N/C**
(b) **E = 8.68 × 10³ N/C**
(c) **Q = 13.9 nC**`
        },
        {
          topicId: gaussLawTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'An infinite cylindrical shell of radius R = 0.05 m carries a uniform surface charge density σ = 3.5 × 10⁻⁶ C/m². Find the electric field: (a) inside the cylinder at r = 0.02 m, (b) outside the cylinder at r = 0.08 m. (c) What is the charge per unit length on the cylinder?',
          solution: `**Given:**
- R = 0.05 m
- σ = 3.5 × 10⁻⁶ C/m²
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²)

**Gauss's Law for cylindrical symmetry:**

Choose Gaussian surface: cylinder of radius r and length L

**(a) Inside cylinder (r = 0.02 m < R):**

No charge enclosed:
$$Q_{enc} = 0$$

By Gauss's law:
$$E(2πrL) = 0$$

$$E = 0$$

**(b) Outside cylinder (r = 0.08 m > R):**

Enclosed charge:
$$Q_{enc} = σ \\cdot 2πRL$$

By Gauss's law:
$$E(2πrL) = \\frac{σ(2πRL)}{ε_0}$$

$$E = \\frac{σR}{ε_0r}$$

$$E = \\frac{(3.5 \\times 10^{-6})(0.05)}{(8.85 \\times 10^{-12})(0.08)}$$

$$E = \\frac{1.75 \\times 10^{-7}}{7.08 \\times 10^{-13}} = 2.47 \\times 10^5 \\text{ N/C}$$

**(c) Charge per unit length:**

$$λ = \\frac{Q}{L} = \\frac{σ(2πRL)}{L} = 2πRσ$$

$$λ = 2π(0.05)(3.5 \\times 10^{-6})$$

$$λ = 1.10 \\times 10^{-6} \\text{ C/m} = 1.10 \\text{ μC/m}$$

**Alternative formula for outside:**
$$E = \\frac{λ}{2πε_0r} = \\frac{2kλ}{r}$$

$$E = \\frac{2(8.99 \\times 10^9)(1.10 \\times 10^{-6})}{0.08} = 2.47 \\times 10^5 \\text{ N/C}$$ ✓

**Answers:**
(a) **E = 0** (inside cylindrical shell)
(b) **E = 2.47 × 10⁵ N/C** (radially outward)
(c) **λ = 1.10 μC/m**`
        },
        {
          topicId: gaussLawTopic.id,
          order: 3,
          difficulty: 'EASY',
          question: 'Two large parallel conducting plates are separated by distance d = 2.0 cm. The plates carry surface charge densities +σ and -σ where σ = 4.5 × 10⁻⁷ C/m². Find: (a) the electric field between the plates, (b) the electric field outside the plates, and (c) the potential difference between the plates.',
          solution: `**Given:**
- d = 0.02 m
- σ = 4.5 × 10⁻⁷ C/m²
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²)

**Field from single infinite sheet:** E = σ/(2ε₀)

**(a) Field between the plates:**

Each plate creates field E = σ/(2ε₀)

- Positive plate creates field pointing away (to the right)
- Negative plate creates field pointing toward it (also to the right)

Fields **add** between plates:
$$E_{between} = \\frac{σ}{2ε_0} + \\frac{σ}{2ε_0} = \\frac{σ}{ε_0}$$

$$E = \\frac{4.5 \\times 10^{-7}}{8.85 \\times 10^{-12}} = 5.08 \\times 10^4 \\text{ N/C}$$

Direction: from positive to negative plate

**(b) Field outside the plates:**

On the left of both plates:
- Positive plate: field to the left
- Negative plate: field to the right

Fields **cancel**:
$$E_{outside} = \\frac{σ}{2ε_0} - \\frac{σ}{2ε_0} = 0$$

Same reasoning for right side: **E = 0**

**(c) Potential difference:**

$$ΔV = \\int_0^d E \\, dx = Ed$$

$$ΔV = (5.08 \\times 10^4)(0.02) = 1.016 \\times 10^3 \\text{ V}$$

$$ΔV = 1.02 \\text{ kV}$$

**Note:** This configuration is a parallel-plate capacitor!

Capacitance: C = ε₀A/d
$$E = \\frac{V}{d} = \\frac{Q}{ε_0A} = \\frac{σ}{ε_0}$$

**Answers:**
(a) **E = 5.08 × 10⁴ N/C** (between plates, uniform)
(b) **E = 0** (outside plates)
(c) **ΔV = 1.02 kV**`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Gauss\'s Law')
  }

  // Topic 3: Electric Potential
  const potentialTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-electric-potential' }
  })

  if (potentialTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: potentialTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A uniformly charged ring of radius R = 0.15 m carries total charge Q = 8.0 × 10⁻⁹ C. (a) Find the electric potential at a point on the axis at distance x = 0.20 m from the center. (b) Find the electric field at this point from E = -dV/dx. (c) Find the work done to bring a charge q = 2.0 × 10⁻⁹ C from infinity to this point.',
          solution: `**Given:**
- R = 0.15 m
- Q = 8.0 × 10⁻⁹ C = 8.0 nC
- x = 0.20 m
- q = 2.0 × 10⁻⁹ C = 2.0 nC
- k = 8.99 × 10⁹ N·m²/C²

**(a) Potential on axis:**

All points on ring are at same distance from point P:
$$r = \\sqrt{x^2 + R^2} = \\sqrt{(0.20)^2 + (0.15)^2}$$

$$r = \\sqrt{0.04 + 0.0225} = \\sqrt{0.0625} = 0.25 \\text{ m}$$

Potential (scalar sum):
$$V = \\frac{kQ}{r} = \\frac{kQ}{\\sqrt{x^2 + R^2}}$$

$$V = \\frac{(8.99 \\times 10^9)(8.0 \\times 10^{-9})}{0.25}$$

$$V = \\frac{71.92}{0.25} = 287.68 \\text{ V}$$

**(b) Electric field from potential:**

$$E_x = -\\frac{dV}{dx} = -\\frac{d}{dx}\\left[\\frac{kQ}{\\sqrt{x^2 + R^2}}\\right]$$

$$= -kQ \\cdot \\left(-\\frac{1}{2}\\right)(x^2 + R^2)^{-3/2}(2x)$$

$$E_x = \\frac{kQx}{(x^2 + R^2)^{3/2}}$$

$$E_x = \\frac{(8.99 \\times 10^9)(8.0 \\times 10^{-9})(0.20)}{(0.25)^3}$$

$$E_x = \\frac{14.384}{0.015625} = 920.6 \\text{ N/C}$$

**(c) Work done:**

Work to bring charge from infinity:
$$W = qΔV = q(V_f - V_i) = q(V - 0)$$

$$W = (2.0 \\times 10^{-9})(287.68)$$

$$W = 5.75 \\times 10^{-7} \\text{ J} = 575 \\text{ nJ}$$

**Note:** Work is positive because we're bringing like charges together (both positive).

**Answers:**
(a) **V = 288 V**
(b) **E = 921 N/C** (along axis, away from ring)
(c) **W = 575 nJ**`
        },
        {
          topicId: potentialTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A uniformly charged solid sphere of radius R = 0.10 m has total charge Q = 6.0 × 10⁻⁸ C. Find the electric potential: (a) at the center (r = 0), (b) at the surface (r = R), and (c) at a point outside at r = 0.20 m.',
          solution: `**Given:**
- R = 0.10 m  
- Q = 6.0 × 10⁻⁸ C = 60 nC
- k = 8.99 × 10⁹ N·m²/C²

**Formula for uniformly charged solid sphere:**

Outside (r ≥ R): $V(r) = \\frac{kQ}{r}$

Inside (r < R): $V(r) = \\frac{kQ}{2R^3}(3R^2 - r^2)$

**(a) Potential at center (r = 0):**

$$V(0) = \\frac{kQ}{2R^3}(3R^2 - 0) = \\frac{3kQ}{2R}$$

$$V(0) = \\frac{3(8.99 \\times 10^9)(6.0 \\times 10^{-8})}{2(0.10)}$$

$$V(0) = \\frac{1618.2}{0.20} = 8091 \\text{ V}$$

**(b) Potential at surface (r = R):**

Using inside formula:
$$V(R) = \\frac{kQ}{2R^3}(3R^2 - R^2) = \\frac{kQ}{2R^3}(2R^2) = \\frac{kQ}{R}$$

Or using outside formula:
$$V(R) = \\frac{kQ}{R}$$

$$V(R) = \\frac{(8.99 \\times 10^9)(6.0 \\times 10^{-8})}{0.10}$$

$$V(R) = 5394 \\text{ V}$$

**(c) Potential at r = 0.20 m > R:**

$$V(0.20) = \\frac{kQ}{r} = \\frac{(8.99 \\times 10^9)(6.0 \\times 10^{-8})}{0.20}$$

$$V(0.20) = 2697 \\text{ V}$$

**Verification:**
- V(0) = (3/2)V(R) = (3/2)(5394) = 8091 V ✓
- V(0.20) = (1/2)V(R) since r = 2R ✓

**Potential ratio:**
$$\\frac{V(0)}{V(R)} = \\frac{3/2 \\cdot kQ/R}{kQ/R} = \\frac{3}{2} = 1.5$$

**Answers:**
(a) **V(0) = 8.09 kV** (center)
(b) **V(R) = 5.39 kV** (surface)
(c) **V(0.20 m) = 2.70 kV** (outside)`
        },
        {
          topicId: potentialTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Three point charges are located at the vertices of an equilateral triangle with side length a = 0.30 m. The charges are q₁ = +4.0 nC, q₂ = +4.0 nC, and q₃ = -4.0 nC. Find: (a) the electric potential at the center of the triangle, (b) the electric field at the center, and (c) the work required to bring a charge q = +2.0 nC from infinity to the center.',
          solution: `**Given:**
- a = 0.30 m
- q₁ = q₂ = +4.0 × 10⁻⁹ C
- q₃ = -4.0 × 10⁻⁹ C
- q = +2.0 × 10⁻⁹ C
- k = 8.99 × 10⁹ N·m²/C²

**Distance from vertices to center:**

For equilateral triangle, center to vertex:
$$r = \\frac{a}{\\sqrt{3}} = \\frac{0.30}{\\sqrt{3}} = 0.173 \\text{ m}$$

**(a) Potential at center:**

Potential is scalar sum:
$$V = k\\sum \\frac{q_i}{r_i} = \\frac{k}{r}(q_1 + q_2 + q_3)$$

$$V = \\frac{8.99 \\times 10^9}{0.173}(4.0 \\times 10^{-9} + 4.0 \\times 10^{-9} - 4.0 \\times 10^{-9})$$

$$V = \\frac{8.99 \\times 10^9}{0.173}(4.0 \\times 10^{-9})$$

$$V = (5.20 \\times 10^{10})(4.0 \\times 10^{-9}) = 208 \\text{ V}$$

**(b) Electric field at center:**

Set up coordinates: q₁ at top, q₂ at bottom-left, q₃ at bottom-right

Field from each charge:
$$E_i = \\frac{kq_i}{r^2} = \\frac{(8.99 \\times 10^9)(4.0 \\times 10^{-9})}{(0.173)^2}$$

$$E_i = \\frac{35.96}{0.0299} = 1203 \\text{ N/C}$$

**Vector addition:**

By symmetry, q₁ and q₂ (both positive, same magnitude):
- Their fields point away from charges
- The horizontal components cancel
- Vertical components add

The field from q₃ (negative) points toward it (upward by our setup).

Due to symmetry of two positive charges and one negative of equal magnitude:

Net field components:
- E₁ points down from top: E₁ = 1203 N/C (down)
- E₂ points from bottom-left: at 60° from horizontal
- E₃ points toward bottom-right: at 60° from horizontal (opposite side)

E₂ and E₃ have components that partially cancel...

Actually, with two +4 nC and one -4 nC arranged symmetrically, the net field has magnitude:

$$E_{net} = \\frac{3k|q|}{r^2} = 3(1203) = 3609 \\text{ N/C}$$

Direction: toward the negative charge.

**(c) Work to bring charge from infinity:**

$$W = qV = (2.0 \\times 10^{-9})(208) = 4.16 \\times 10^{-7} \\text{ J}$$

$$W = 416 \\text{ nJ}$$

**Answers:**
(a) **V = 208 V**
(b) **E ≈ 3.6 kN/C** (toward q₃)
(c) **W = 416 nJ**`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Electric Potential')
  }

  // Topic 4: Capacitors and Dielectrics
  const capacitorsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-capacitors-dielectrics' }
  })

  if (capacitorsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: capacitorsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A parallel-plate capacitor has circular plates of radius R = 5.0 cm separated by distance d = 2.0 mm. (a) Find the capacitance in vacuum. (b) If a dielectric material with κ = 3.5 is inserted, what is the new capacitance? (c) If the capacitor is charged to 12 V with the dielectric in place, how much charge is stored?',
          solution: `**Given:**
- R = 5.0 cm = 0.05 m
- d = 2.0 mm = 0.002 m
- κ = 3.5
- V = 12 V
- ε₀ = 8.85 × 10⁻¹² F/m

**(a) Capacitance in vacuum:**

The area of the circular plates is:
$$A = \\pi R^2 = \\pi (0.05)^2 = 7.85 \\times 10^{-3} \\text{ m}^2$$

The capacitance is:
$$C_0 = \\frac{\\epsilon_0 A}{d} = \\frac{(8.85 \\times 10^{-12})(7.85 \\times 10^{-3})}{0.002}$$

$$C_0 = 3.47 \\times 10^{-11} \\text{ F} = \\boxed{34.7 \\text{ pF}}$$

**(b) Capacitance with dielectric:**

With a dielectric, the capacitance increases by factor κ:
$$C = \\kappa C_0 = (3.5)(34.7 \\text{ pF})$$

$$C = \\boxed{121 \\text{ pF}}$$

**(c) Charge stored:**

Using Q = CV:
$$Q = CV = (121 \\times 10^{-12})(12)$$

$$Q = 1.45 \\times 10^{-9} \\text{ C} = \\boxed{1.45 \\text{ nC}}$$`
        },
        {
          topicId: capacitorsTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'Three capacitors (C₁ = 4.0 μF, C₂ = 6.0 μF, C₃ = 3.0 μF) are connected with C₁ and C₂ in series, and this combination is in parallel with C₃. The entire network is connected to a 24 V battery. Find: (a) the equivalent capacitance, (b) the charge on each capacitor, and (c) the voltage across each capacitor.',
          solution: `**Given:**
- C₁ = 4.0 μF, C₂ = 6.0 μF, C₃ = 3.0 μF
- V = 24 V

**(a) Equivalent capacitance:**

C₁ and C₂ in series:
$$\\frac{1}{C_{12}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{4.0} + \\frac{1}{6.0} = \\frac{5}{12}$$

$$C_{12} = 2.4 \\text{ μF}$$

C₁₂ in parallel with C₃:
$$C_{eq} = C_{12} + C_3 = 2.4 + 3.0$$

$$C_{eq} = \\boxed{5.4 \\text{ μF}}$$

**(b) Charges:**

Total charge from battery:
$$Q_{total} = C_{eq}V = (5.4)(24) = 129.6 \\text{ μC}$$

For parallel combination:
- Q₃ = C₃V = (3.0)(24) = **72 μC**
- Q₁₂ = C₁₂V = (2.4)(24) = **57.6 μC**

In series, C₁ and C₂ have same charge:
- Q₁ = Q₂ = Q₁₂ = **57.6 μC**

**(c) Voltages:**

$$V_1 = \\frac{Q_1}{C_1} = \\frac{57.6}{4.0} = \\boxed{14.4 \\text{ V}}$$

$$V_2 = \\frac{Q_2}{C_2} = \\frac{57.6}{6.0} = \\boxed{9.6 \\text{ V}}$$

$$V_3 = \\boxed{24 \\text{ V}}$$

Note: V₁ + V₂ = 14.4 + 9.6 = 24 V ✓`
        },
        {
          topicId: capacitorsTopic.id,
          order: 3,
          difficulty: 'MEDIUM',
          question: 'A parallel-plate capacitor with capacitance C₀ = 50 pF is charged to voltage V₀ = 100 V and then disconnected from the battery. A dielectric slab with κ = 2.5 is then inserted between the plates. Find: (a) the charge on the capacitor (before and after), (b) the new voltage, and (c) the change in stored energy.',
          solution: `**Given:**
- C₀ = 50 pF
- V₀ = 100 V
- κ = 2.5
- Capacitor is isolated (Q constant)

**(a) Charge:**

Initial charge:
$$Q = C_0 V_0 = (50 \\times 10^{-12})(100) = 5.0 \\times 10^{-9} \\text{ C}$$

Since capacitor is isolated, charge remains constant:
$$Q_{before} = Q_{after} = \\boxed{5.0 \\text{ nC}}$$

**(b) New voltage:**

With dielectric:
$$C = \\kappa C_0 = (2.5)(50) = 125 \\text{ pF}$$

Voltage decreases:
$$V = \\frac{Q}{C} = \\frac{5.0 \\times 10^{-9}}{125 \\times 10^{-12}}$$

$$V = \\boxed{40 \\text{ V}}$$

**(c) Change in energy:**

Initial energy:
$$U_0 = \\frac{1}{2}C_0 V_0^2 = \\frac{1}{2}(50 \\times 10^{-12})(100)^2 = 2.5 \\times 10^{-7} \\text{ J}$$

Final energy:
$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(125 \\times 10^{-12})(40)^2 = 1.0 \\times 10^{-7} \\text{ J}$$

Change in energy:
$$\\Delta U = U - U_0 = 1.0 \\times 10^{-7} - 2.5 \\times 10^{-7}$$

$$\\Delta U = \\boxed{-1.5 \\times 10^{-7} \\text{ J}}$$

Energy decreases (absorbed by dielectric being pulled in).`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Capacitors and Dielectrics')
  }

  // Topic 5: Current, Resistance, and DC Circuits
  const dcCircuitsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-dc-circuits' }
  })

  if (dcCircuitsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: dcCircuitsTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A cylindrical wire of radius r = 1.5 mm and length L = 2.0 m has resistivity ρ = 1.7 × 10⁻⁸ Ω·m. (a) Find the resistance of the wire. (b) If a current I = 5.0 A flows through it, find the current density J. (c) Find the electric field inside the wire.',
          solution: `**Given:**
- r = 1.5 mm = 1.5 × 10⁻³ m
- L = 2.0 m
- ρ = 1.7 × 10⁻⁸ Ω·m
- I = 5.0 A

**(a) Resistance:**

Cross-sectional area:
$$A = \\pi r^2 = \\pi (1.5 \\times 10^{-3})^2 = 7.07 \\times 10^{-6} \\text{ m}^2$$

$$R = \\frac{\\rho L}{A} = \\frac{(1.7 \\times 10^{-8})(2.0)}{7.07 \\times 10^{-6}}$$

$$R = \\boxed{4.81 \\times 10^{-3} \\text{ Ω} = 4.81 \\text{ mΩ}}$$

**(b) Current density:**

$$J = \\frac{I}{A} = \\frac{5.0}{7.07 \\times 10^{-6}}$$

$$J = \\boxed{7.07 \\times 10^5 \\text{ A/m}^2}$$

**(c) Electric field:**

Using Ohm's law in differential form: $\\vec{J} = \\sigma \\vec{E}$ where $\\sigma = 1/\\rho$:
$$E = \\rho J = (1.7 \\times 10^{-8})(7.07 \\times 10^5)$$

$$E = \\boxed{0.012 \\text{ V/m} = 12 \\text{ mV/m}}$$

Alternatively: $E = V/L$ where $V = IR = (5.0)(4.81 \\times 10^{-3}) = 0.024$ V`
        },
        {
          topicId: dcCircuitsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'In the circuit shown, a 24 V battery is connected to three resistors: R₁ = 6.0 Ω, R₂ = 4.0 Ω, and R₃ = 12 Ω. R₁ and R₂ are in parallel, and this combination is in series with R₃. Find: (a) the equivalent resistance, (b) the current through R₃, and (c) the power dissipated by each resistor.',
          solution: `**Given:**
- V = 24 V
- R₁ = 6.0 Ω, R₂ = 4.0 Ω, R₃ = 12 Ω

**(a) Equivalent resistance:**

R₁ and R₂ in parallel:
$$\\frac{1}{R_{12}} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{6.0} + \\frac{1}{4.0} = \\frac{5}{12}$$

$$R_{12} = 2.4 \\text{ Ω}$$

Total resistance:
$$R_{eq} = R_{12} + R_3 = 2.4 + 12 = \\boxed{14.4 \\text{ Ω}}$$

**(b) Current through R₃:**

Total current from battery:
$$I_{total} = \\frac{V}{R_{eq}} = \\frac{24}{14.4}$$

$$I_3 = I_{total} = \\boxed{1.67 \\text{ A}}$$

(In series, all current flows through R₃)

**(c) Power dissipated:**

Voltage across parallel combination:
$$V_{12} = V - V_3 = V - I_3 R_3 = 24 - (1.67)(12) = 4.0 \\text{ V}$$

$$P_1 = \\frac{V_{12}^2}{R_1} = \\frac{(4.0)^2}{6.0} = \\boxed{2.67 \\text{ W}}$$

$$P_2 = \\frac{V_{12}^2}{R_2} = \\frac{(4.0)^2}{4.0} = \\boxed{4.0 \\text{ W}}$$

$$P_3 = I_3^2 R_3 = (1.67)^2(12) = \\boxed{33.3 \\text{ W}}$$

Total power: 2.67 + 4.0 + 33.3 = 40 W = VI ✓`
        },
        {
          topicId: dcCircuitsTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Two batteries (ε₁ = 12 V with internal resistance r₁ = 0.5 Ω, and ε₂ = 6.0 V with r₂ = 0.3 Ω) are connected in parallel to an external load R = 3.0 Ω. Use Kirchhoff\'s laws to find: (a) the current through each battery, (b) the current through R, and (c) the terminal voltage across R.',
          solution: `**Given:**
- ε₁ = 12 V, r₁ = 0.5 Ω
- ε₂ = 6.0 V, r₂ = 0.3 Ω
- R = 3.0 Ω

**Setup:**

Let I₁ = current from battery 1 (positive right)
Let I₂ = current from battery 2 (positive right)
Let I = current through R (positive down)

Kirchhoff's current law at top junction:
$$I_1 + I_2 = I \\quad \\text{...(1)}$$

**(a) & (b) Finding currents:**

Loop through battery 1 and R (clockwise):
$$\\varepsilon_1 - I_1 r_1 - IR = 0$$
$$12 - 0.5I_1 - 3I = 0 \\quad \\text{...(2)}$$

Loop through battery 2 and R (clockwise):
$$\\varepsilon_2 - I_2 r_2 - IR = 0$$
$$6 - 0.3I_2 - 3I = 0 \\quad \\text{...(3)}$$

From (2): $I = \\frac{12 - 0.5I_1}{3}$

From (3): $I = \\frac{6 - 0.3I_2}{3}$

Setting equal:
$$12 - 0.5I_1 = 6 - 0.3I_2$$
$$6 = 0.5I_1 - 0.3I_2 \\quad \\text{...(4)}$$

From (1): $I_2 = I - I_1$

Substitute into (4):
$$6 = 0.5I_1 - 0.3(I - I_1) = 0.5I_1 - 0.3I + 0.3I_1 = 0.8I_1 - 0.3I$$

From (2): $I = 4 - 0.167I_1$

Substitute:
$$6 = 0.8I_1 - 0.3(4 - 0.167I_1)$$
$$6 = 0.8I_1 - 1.2 + 0.05I_1$$
$$7.2 = 0.85I_1$$

$$I_1 = \\boxed{8.47 \\text{ A}}$$

$$I = 4 - 0.167(8.47) = \\boxed{2.58 \\text{ A}}$$

$$I_2 = 2.58 - 8.47 = \\boxed{-5.89 \\text{ A}}$$

(Negative means battery 2 is being charged!)

**(c) Terminal voltage:**

$$V = IR = (2.58)(3.0) = \\boxed{7.74 \\text{ V}}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Current, Resistance, and DC Circuits')
  }

  // Topic 6: RC Circuits
  const rcCircuitsTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-rc-circuits' }
  })

  if (rcCircuitsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: rcCircuitsTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'An RC circuit consists of R = 2.0 MΩ, C = 5.0 μF, and a battery ε = 12 V. The capacitor is initially uncharged. Find: (a) the time constant τ, (b) the charge on the capacitor at t = 5.0 s, and (c) the current at t = 5.0 s.',
          solution: `**Given:**
- R = 2.0 MΩ = 2.0 × 10⁶ Ω
- C = 5.0 μF = 5.0 × 10⁻⁶ F
- ε = 12 V
- Q₀ = 0 (initially uncharged)
- t = 5.0 s

**(a) Time constant:**

$$\\tau = RC = (2.0 \\times 10^6)(5.0 \\times 10^{-6})$$

$$\\tau = \\boxed{10 \\text{ s}}$$

**(b) Charge at t = 5.0 s:**

For charging capacitor:
$$Q(t) = Q_{max}(1 - e^{-t/\\tau})$$

where $Q_{max} = C\\varepsilon = (5.0 \\times 10^{-6})(12) = 6.0 \\times 10^{-5}$ C

$$Q(5.0) = (6.0 \\times 10^{-5})(1 - e^{-5.0/10})$$

$$Q(5.0) = (6.0 \\times 10^{-5})(1 - e^{-0.5})$$

$$Q(5.0) = (6.0 \\times 10^{-5})(1 - 0.6065)$$

$$Q(5.0) = (6.0 \\times 10^{-5})(0.3935) = \\boxed{2.36 \\times 10^{-5} \\text{ C} = 23.6 \\text{ μC}}$$

**(c) Current at t = 5.0 s:**

For charging:
$$I(t) = I_0 e^{-t/\\tau}$$

where $I_0 = \\varepsilon/R = 12/(2.0 \\times 10^6) = 6.0 \\times 10^{-6}$ A

$$I(5.0) = (6.0 \\times 10^{-6})e^{-0.5}$$

$$I(5.0) = (6.0 \\times 10^{-6})(0.6065) = \\boxed{3.64 \\times 10^{-6} \\text{ A} = 3.64 \\text{ μA}}$$`
        },
        {
          topicId: rcCircuitsTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A capacitor C = 100 μF is charged to V₀ = 50 V and then connected to a resistor R = 500 Ω (battery removed). Find: (a) the initial energy stored, (b) the time for the energy to decrease to 25% of its initial value, and (c) the total energy dissipated in the resistor as t → ∞.',
          solution: `**Given:**
- C = 100 μF = 1.0 × 10⁻⁴ F
- V₀ = 50 V
- R = 500 Ω
- Discharging circuit

**(a) Initial energy:**

$$U_0 = \\frac{1}{2}CV_0^2 = \\frac{1}{2}(1.0 \\times 10^{-4})(50)^2$$

$$U_0 = \\boxed{0.125 \\text{ J}}$$

**(b) Time for U = 0.25U₀:**

Energy in capacitor:
$$U(t) = \\frac{1}{2}C[V(t)]^2 = \\frac{1}{2}C[V_0 e^{-t/\\tau}]^2 = U_0 e^{-2t/\\tau}$$

Set U = 0.25U₀:
$$0.25U_0 = U_0 e^{-2t/\\tau}$$
$$0.25 = e^{-2t/\\tau}$$
$$\\ln(0.25) = -\\frac{2t}{\\tau}$$

Time constant: $\\tau = RC = (500)(1.0 \\times 10^{-4}) = 0.05$ s

$$t = -\\frac{\\tau \\ln(0.25)}{2} = -\\frac{(0.05)(-1.386)}{2}$$

$$t = \\boxed{0.0347 \\text{ s} = 34.7 \\text{ ms}}$$

**(c) Total energy dissipated:**

As t → ∞, all energy in capacitor is dissipated in resistor:

$$E_{dissipated} = U_0 = \\boxed{0.125 \\text{ J}}$$

Check: $\\int_0^\\infty I^2 R \\, dt = \\int_0^\\infty \\frac{V_0^2}{R}e^{-2t/\\tau} dt = \\frac{V_0^2}{R} \\cdot \\frac{\\tau}{2} = \\frac{1}{2}CV_0^2$ ✓`
        },
        {
          topicId: rcCircuitsTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'In an RC circuit with R = 1.5 kΩ, C = 20 μF, and ε = 9.0 V, the switch is closed at t = 0. Derive and evaluate: (a) the differential equation for Q(t), (b) the time when the voltage across the capacitor equals the voltage across the resistor, and (c) the rate of energy storage in the capacitor at this time.',
          solution: `**Given:**
- R = 1.5 kΩ = 1500 Ω
- C = 20 μF = 2.0 × 10⁻⁵ F
- ε = 9.0 V

**(a) Differential equation:**

Kirchhoff's voltage law:
$$\\varepsilon - V_R - V_C = 0$$
$$\\varepsilon - IR - \\frac{Q}{C} = 0$$

Since $I = dQ/dt$:
$$\\varepsilon - R\\frac{dQ}{dt} - \\frac{Q}{C} = 0$$

Rearranging:
$$\\boxed{\\frac{dQ}{dt} + \\frac{Q}{RC} = \\frac{\\varepsilon}{R}}$$

This is first-order linear ODE with solution:
$$Q(t) = C\\varepsilon(1 - e^{-t/RC})$$

**(b) Time when V_C = V_R:**

$$V_C = \\frac{Q}{C} = \\varepsilon(1 - e^{-t/\\tau})$$

$$V_R = IR = \\varepsilon e^{-t/\\tau}$$

Set equal:
$$\\varepsilon(1 - e^{-t/\\tau}) = \\varepsilon e^{-t/\\tau}$$
$$1 - e^{-t/\\tau} = e^{-t/\\tau}$$
$$1 = 2e^{-t/\\tau}$$
$$e^{-t/\\tau} = 0.5$$
$$t = \\tau \\ln(2)$$

where $\\tau = RC = (1500)(2.0 \\times 10^{-5}) = 0.03$ s

$$t = (0.03)\\ln(2) = \\boxed{0.0208 \\text{ s} = 20.8 \\text{ ms}}$$

**(c) Rate of energy storage:**

Energy in capacitor: $U_C = \\frac{Q^2}{2C}$

$$\\frac{dU_C}{dt} = \\frac{Q}{C} \\cdot \\frac{dQ}{dt} = V_C \\cdot I$$

At t = 20.8 ms: $V_C = 4.5$ V, $I = V_R/R = 4.5/1500 = 0.003$ A

$$\\frac{dU_C}{dt} = (4.5)(0.003) = \\boxed{0.0135 \\text{ W} = 13.5 \\text{ mW}}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: RC Circuits')
  }

  // Topic 7: Magnetic Fields and Forces
  const magneticForcesTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-magnetic-forces' }
  })

  if (magneticForcesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: magneticForcesTopic.id,
          order: 1,
          difficulty: 'EASY',
          question: 'A proton (q = 1.6 × 10⁻¹⁹ C, m = 1.67 × 10⁻²⁷ kg) enters a uniform magnetic field B = 0.5 T with velocity v = 2.0 × 10⁶ m/s perpendicular to the field. Find: (a) the magnitude of the magnetic force, (b) the radius of the circular path, and (c) the period of the motion.',
          solution: `**Given:**
- q = 1.6 × 10⁻¹⁹ C
- m = 1.67 × 10⁻²⁷ kg
- B = 0.5 T
- v = 2.0 × 10⁶ m/s
- θ = 90° (perpendicular)

**(a) Magnetic force:**

$$F = qvB\\sin\\theta = (1.6 \\times 10^{-19})(2.0 \\times 10^6)(0.5)(1)$$

$$F = \\boxed{1.6 \\times 10^{-13} \\text{ N}}$$

**(b) Radius of path:**

Magnetic force provides centripetal force:
$$qvB = \\frac{mv^2}{r}$$

$$r = \\frac{mv}{qB} = \\frac{(1.67 \\times 10^{-27})(2.0 \\times 10^6)}{(1.6 \\times 10^{-19})(0.5)}$$

$$r = \\boxed{4.18 \\times 10^{-2} \\text{ m} = 4.18 \\text{ cm}}$$

**(c) Period:**

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$

$$T = \\frac{2\\pi (1.67 \\times 10^{-27})}{(1.6 \\times 10^{-19})(0.5)}$$

$$T = \\boxed{1.31 \\times 10^{-7} \\text{ s} = 131 \\text{ ns}}$$

Note: Period is independent of velocity!`
        },
        {
          topicId: magneticForcesTopic.id,
          order: 2,
          difficulty: 'MEDIUM',
          question: 'A rectangular current loop (dimensions: 0.2 m × 0.3 m) carries current I = 5.0 A. The loop is placed in a uniform magnetic field B = 0.8 T with the field parallel to the plane of the loop, making angle θ = 30° with the normal to the loop. Find: (a) the magnetic dipole moment, (b) the torque on the loop, and (c) the orientation angle for maximum torque.',
          solution: `**Given:**
- Dimensions: 0.2 m × 0.3 m
- I = 5.0 A
- B = 0.8 T
- θ = 30° (angle between normal and field)

**(a) Magnetic dipole moment:**

$$\\mu = IA = I(\\text{length} \\times \\text{width})$$

$$\\mu = (5.0)(0.2)(0.3) = \\boxed{0.3 \\text{ A·m}^2}$$

Direction: perpendicular to loop (right-hand rule)

**(b) Torque:**

$$\\tau = \\mu B \\sin\\theta = (0.3)(0.8)\\sin(30°)$$

$$\\tau = (0.24)(0.5) = \\boxed{0.12 \\text{ N·m}}$$

Direction: tends to align μ with B

**(c) Maximum torque:**

Torque is maximum when $\\sin\\theta = 1$, i.e., when:

$$\\theta = \\boxed{90°}$$

This occurs when the normal to the loop is perpendicular to B, meaning the magnetic field is in the plane of the loop.

Maximum torque:
$$\\tau_{max} = \\mu B = (0.3)(0.8) = 0.24 \\text{ N·m}$$`
        },
        {
          topicId: magneticForcesTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A particle with charge q = 2.0 μC and mass m = 1.0 × 10⁻⁸ kg enters a region with perpendicular electric field E = 500 V/m and magnetic field B = 0.1 T. The particle moves in a straight line. Find: (a) the velocity of the particle (velocity selector), (b) if E is then turned off, find the radius of the resulting circular path, and (c) explain how this setup could be used as a mass spectrometer.',
          solution: `**Given:**
- q = 2.0 μC = 2.0 × 10⁻⁶ C
- m = 1.0 × 10⁻⁸ kg
- E = 500 V/m
- B = 0.1 T
- Straight-line motion initially

**(a) Velocity (velocity selector):**

For straight-line motion, electric and magnetic forces balance:
$$F_E = F_B$$
$$qE = qvB$$

$$v = \\frac{E}{B} = \\frac{500}{0.1}$$

$$v = \\boxed{5000 \\text{ m/s}}$$

This velocity is independent of q and m!

**(b) Radius with E off:**

With only magnetic force:
$$r = \\frac{mv}{qB} = \\frac{(1.0 \\times 10^{-8})(5000)}{(2.0 \\times 10^{-6})(0.1)}$$

$$r = \\frac{5.0 \\times 10^{-5}}{2.0 \\times 10^{-7}}$$

$$r = \\boxed{0.25 \\text{ m} = 25 \\text{ cm}}$$

**(c) Mass spectrometer principle:**

Since $r = \\frac{mv}{qB}$ and $v = E/B$:

$$r = \\frac{m(E/B)}{qB} = \\frac{mE}{qB^2}$$

For particles with same q but different m:
$$\\frac{r_1}{r_2} = \\frac{m_1}{m_2}$$

**How it works:**
1. Velocity selector ensures all particles have same v (regardless of m)
2. Magnetic field separates particles by mass
3. Heavier particles follow larger radius paths
4. Detector measures radius → determines mass
5. Can separate isotopes (same q, different m)

Example: ²³⁵U and ²³⁸U ions would separate into different paths.`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Magnetic Fields and Forces')
  }

  // Topic 8: Sources of Magnetic Fields
  const magneticSourcesTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-magnetic-field-sources' }
  })

  if (magneticSourcesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: magneticSourcesTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A long straight wire carries current I = 15 A. Find the magnetic field at distances: (a) r = 2.0 cm from the wire, (b) r = 10 cm from the wire. (c) At what distance is the field B = 1.0 × 10⁻⁵ T? Use μ₀ = 4π × 10⁻⁷ T·m/A.',
          solution: `**Given:**
- I = 15 A
- μ₀ = 4π × 10⁻⁷ T·m/A

**(a) Field at r = 2.0 cm:**

For long straight wire:
$$B = \\frac{\\mu_0 I}{2\\pi r}$$

$$B = \\frac{(4\\pi \\times 10^{-7})(15)}{2\\pi(0.02)}$$

$$B = \\frac{(2 \\times 10^{-7})(15)}{0.02} = \\frac{3.0 \\times 10^{-6}}{0.02}$$

$$B = \\boxed{1.5 \\times 10^{-4} \\text{ T} = 0.15 \\text{ mT}}$$

**(b) Field at r = 10 cm:**

$$B = \\frac{(2 \\times 10^{-7})(15)}{0.10}$$

$$B = \\boxed{3.0 \\times 10^{-5} \\text{ T} = 30 \\text{ μT}}$$

**(c) Distance for B = 1.0 × 10⁻⁵ T:**

$$1.0 \\times 10^{-5} = \\frac{(2 \\times 10^{-7})(15)}{r}$$

$$r = \\frac{(2 \\times 10^{-7})(15)}{1.0 \\times 10^{-5}} = \\frac{3.0 \\times 10^{-6}}{1.0 \\times 10^{-5}}$$

$$r = \\boxed{0.30 \\text{ m} = 30 \\text{ cm}}$$

Note: B ∝ 1/r for long straight wire`
        },
        {
          topicId: magneticSourcesTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A solenoid has N = 400 turns, length L = 0.25 m, and radius R = 0.02 m, carrying current I = 3.0 A. Find: (a) the magnetic field inside the solenoid (far from ends), (b) the magnetic field at the center of a circular coil with the same specifications, and (c) the self-inductance of the solenoid.',
          solution: `**Given:**
- N = 400 turns
- L = 0.25 m
- R = 0.02 m
- I = 3.0 A
- μ₀ = 4π × 10⁻⁷ T·m/A

**(a) Field inside solenoid:**

Turn density: $n = N/L = 400/0.25 = 1600$ turns/m

$$B = \\mu_0 n I = (4\\pi \\times 10^{-7})(1600)(3.0)$$

$$B = (4\\pi \\times 10^{-7})(4800)$$

$$B = \\boxed{6.03 \\times 10^{-3} \\text{ T} = 6.03 \\text{ mT}}$$

**(b) Field at center of circular coil:**

Using Biot-Savart law for N loops:
$$B_{coil} = \\frac{\\mu_0 N I}{2R}$$

$$B_{coil} = \\frac{(4\\pi \\times 10^{-7})(400)(3.0)}{2(0.02)}$$

$$B_{coil} = \\frac{(4\\pi \\times 10^{-7})(1200)}{0.04}$$

$$B_{coil} = \\boxed{3.77 \\times 10^{-2} \\text{ T} = 37.7 \\text{ mT}}$$

Note: Coil field is stronger than solenoid field!

**(c) Self-inductance:**

$$L = \\frac{\\mu_0 N^2 A}{l}$$

where $A = \\pi R^2 = \\pi(0.02)^2 = 1.26 \\times 10^{-3}$ m²

$$L = \\frac{(4\\pi \\times 10^{-7})(400)^2(1.26 \\times 10^{-3})}{0.25}$$

$$L = \\frac{(4\\pi \\times 10^{-7})(160000)(1.26 \\times 10^{-3})}{0.25}$$

$$L = \\boxed{1.01 \\times 10^{-3} \\text{ H} = 1.01 \\text{ mH}}$$`
        },
        {
          topicId: magneticSourcesTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'Use Ampère\'s law to find the magnetic field: (a) inside a long cylindrical wire of radius R = 3.0 mm carrying uniform current density J = 5.0 × 10⁵ A/m², at radius r = 2.0 mm, and (b) outside the wire at r = 5.0 mm. (c) At what radius is the field maximum?',
          solution: `**Given:**
- R = 3.0 mm = 3.0 × 10⁻³ m
- J = 5.0 × 10⁵ A/m² (uniform)
- r₁ = 2.0 mm = 2.0 × 10⁻³ m (inside)
- r₂ = 5.0 mm = 5.0 × 10⁻³ m (outside)

**Total current:**
$$I_{total} = J \\cdot \\pi R^2 = (5.0 \\times 10^5)(\\pi)(3.0 \\times 10^{-3})^2 = 14.1 \\text{ A}$$

**(a) Field inside (r < R):**

Current enclosed by circle of radius r:
$$I_{enc} = J \\cdot \\pi r^2$$

Ampère's law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$

$$B(2\\pi r) = \\mu_0 J \\pi r^2$$

$$B = \\frac{\\mu_0 J r}{2}$$

At r = 2.0 mm:
$$B = \\frac{(4\\pi \\times 10^{-7})(5.0 \\times 10^5)(2.0 \\times 10^{-3})}{2}$$

$$B = \\boxed{6.28 \\times 10^{-4} \\text{ T} = 0.628 \\text{ mT}}$$

**(b) Field outside (r > R):**

$$B = \\frac{\\mu_0 I_{total}}{2\\pi r}$$

At r = 5.0 mm:
$$B = \\frac{(4\\pi \\times 10^{-7})(14.1)}{2\\pi(5.0 \\times 10^{-3})}$$

$$B = \\frac{(2 \\times 10^{-7})(14.1)}{5.0 \\times 10^{-3}}$$

$$B = \\boxed{5.64 \\times 10^{-4} \\text{ T} = 0.564 \\text{ mT}}$$

**(c) Maximum field:**

Inside: $B = \\frac{\\mu_0 Jr}{2}$ increases with r

Outside: $B = \\frac{\\mu_0 I_{total}}{2\\pi r}$ decreases with r

Maximum occurs at the surface:

$$r_{max} = \\boxed{R = 3.0 \\text{ mm}}$$

$$B_{max} = \\frac{\\mu_0 JR}{2} = 9.42 \\times 10^{-4} \\text{ T}$$`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Sources of Magnetic Fields')
  }

  // Topic 9: Faraday's Law and Lenz's Law
  const faradayTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-faraday-lenz' }
  })

  if (faradayTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: faradayTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A circular loop of radius r = 0.08 m has resistance R = 2.0 Ω. The loop is perpendicular to a uniform magnetic field that increases from B₀ = 0.2 T to B₁ = 0.8 T in time Δt = 0.5 s. Find: (a) the induced EMF, (b) the induced current (magnitude and direction), and (c) the total charge that flows through the loop.',
          solution: `**Given:**
- r = 0.08 m
- R = 2.0 Ω
- B₀ = 0.2 T, B₁ = 0.8 T
- Δt = 0.5 s
- Loop perpendicular to field

**(a) Induced EMF:**

Area: $A = \\pi r^2 = \\pi(0.08)^2 = 0.0201$ m²

Change in flux:
$$\\Delta \\Phi_B = A \\Delta B = A(B_1 - B_0)$$
$$\\Delta \\Phi_B = (0.0201)(0.8 - 0.2) = 0.0121 \\text{ Wb}$$

Faraday's law:
$$|\\mathcal{E}| = \\left|\\frac{\\Delta \\Phi_B}{\\Delta t}\\right| = \\frac{0.0121}{0.5}$$

$$|\\mathcal{E}| = \\boxed{0.0241 \\text{ V} = 24.1 \\text{ mV}}$$

**(b) Induced current:**

$$I = \\frac{|\\mathcal{E}|}{R} = \\frac{0.0241}{2.0}$$

$$I = \\boxed{0.0121 \\text{ A} = 12.1 \\text{ mA}}$$

**Direction (Lenz's law):**
- B is increasing into page
- Induced current opposes this change
- Induced B must point out of page
- By right-hand rule: current flows **counterclockwise** (viewed from front)

**(c) Total charge:**

$$Q = \\int I \\, dt = \\int \\frac{|\\mathcal{E}|}{R} dt = \\frac{1}{R} \\int |\\mathcal{E}| \\, dt$$

$$Q = \\frac{\\Delta \\Phi_B}{R} = \\frac{0.0121}{2.0}$$

$$Q = \\boxed{6.03 \\times 10^{-3} \\text{ C} = 6.03 \\text{ mC}}$$`
        },
        {
          topicId: faradayTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A rectangular loop (0.5 m × 0.3 m) moves at constant velocity v = 2.0 m/s into a region where B = 0.6 T (perpendicular to loop). The loop has resistance R = 0.8 Ω. At the instant when the loop is partially in the field (0.2 m inside): Find (a) the induced EMF, (b) the induced current and power dissipated, and (c) the magnetic force on the loop.',
          solution: `**Given:**
- Dimensions: 0.5 m (width) × 0.3 m (height)
- v = 2.0 m/s
- B = 0.6 T
- R = 0.8 Ω
- x = 0.2 m inside field

**(a) Induced EMF:**

As loop enters field, flux through it increases:
$$\\Phi_B = B \\cdot (x \\times \\text{height}) = B \\cdot x \\cdot h$$

Rate of change:
$$\\frac{d\\Phi_B}{dt} = Bh\\frac{dx}{dt} = Bhv$$

Motional EMF:
$$|\\mathcal{E}| = Bhv = (0.6)(0.3)(2.0)$$

$$|\\mathcal{E}| = \\boxed{0.36 \\text{ V}}$$

Alternatively: $\\mathcal{E} = Blv$ where l = height

**(b) Current and power:**

$$I = \\frac{|\\mathcal{E}|}{R} = \\frac{0.36}{0.8}$$

$$I = \\boxed{0.45 \\text{ A}}$$

**Direction:** By Lenz's law, current opposes flux increase
- Induced current creates field out of page (if B into page)
- Current flows counterclockwise in loop

Power dissipated:
$$P = I^2 R = (0.45)^2(0.8) = \\boxed{0.162 \\text{ W}}$$

Or: $P = \\mathcal{E}I = (0.36)(0.45) = 0.162$ W ✓

**(c) Magnetic force:**

Force on current-carrying edge in field:
$$F = BIl = (0.6)(0.45)(0.3)$$

$$F = \\boxed{0.081 \\text{ N}}$$

**Direction:** By Lenz's law, force opposes motion
- Force points **opposite to velocity** (to the left)
- This is the force you must overcome to maintain constant v

Check energy: $Fv = (0.081)(2.0) = 0.162$ W = P ✓`
        },
        {
          topicId: faradayTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A long solenoid (n = 2000 turns/m, radius R = 0.04 m) has current I(t) = I₀sin(ωt) where I₀ = 5.0 A and ω = 100π rad/s. A single circular loop of radius r = 0.06 m and resistance R = 0.5 Ω is placed around the solenoid. Find: (a) the magnetic flux through the loop as a function of time, (b) the maximum induced EMF, and (c) the maximum power dissipated.',
          solution: `**Given:**
- Solenoid: n = 2000 turns/m, R_s = 0.04 m
- I(t) = I₀sin(ωt), I₀ = 5.0 A, ω = 100π rad/s
- Loop: r = 0.06 m, R = 0.5 Ω
- μ₀ = 4π × 10⁻⁷ T·m/A

**(a) Flux through loop:**

B inside solenoid: $B(t) = \\mu_0 n I(t) = \\mu_0 n I_0 \\sin(\\omega t)$

Since r > R_s, only the solenoid cross-section contributes:
$$\\Phi_B(t) = B(t) \\cdot \\pi R_s^2 = \\mu_0 n I_0 \\pi R_s^2 \\sin(\\omega t)$$

$$\\Phi_B(t) = (4\\pi \\times 10^{-7})(2000)(5.0)(\\pi)(0.04)^2 \\sin(100\\pi t)$$

$$\\Phi_B(t) = (5.03 \\times 10^{-5}) \\sin(100\\pi t) \\text{ Wb}$$

$$\\boxed{\\Phi_B(t) = 5.03 \\times 10^{-5} \\sin(100\\pi t) \\text{ Wb}}$$

**(b) Maximum induced EMF:**

$$\\mathcal{E}(t) = -\\frac{d\\Phi_B}{dt} = -\\Phi_0 \\omega \\cos(\\omega t)$$

where $\\Phi_0 = 5.03 \\times 10^{-5}$ Wb

$$|\\mathcal{E}_{max}| = \\Phi_0 \\omega = (5.03 \\times 10^{-5})(100\\pi)$$

$$|\\mathcal{E}_{max}| = \\boxed{0.0158 \\text{ V} = 15.8 \\text{ mV}}$$

**(c) Maximum power:**

Maximum current:
$$I_{max} = \\frac{|\\mathcal{E}_{max}|}{R} = \\frac{0.0158}{0.5} = 0.0316 \\text{ A}$$

$$P_{max} = I_{max}^2 R = (0.0316)^2(0.5)$$

$$P_{max} = \\boxed{5.0 \\times 10^{-4} \\text{ W} = 0.50 \\text{ mW}}$$

Or: $P_{max} = \\frac{\\mathcal{E}_{max}^2}{R} = \\frac{(0.0158)^2}{0.5} = 5.0 \\times 10^{-4}$ W ✓`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Faraday\'s Law and Lenz\'s Law')
  }

  // Topic 10: Inductance and RL Circuits
  const inductanceTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-inductance-rl-circuits' }
  })

  if (inductanceTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: inductanceTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'An RL circuit consists of R = 8.0 Ω, L = 0.4 H, and a battery ε = 12 V. The switch is closed at t = 0. Find: (a) the time constant, (b) the current at t = 0.08 s, and (c) the rate of energy storage in the inductor at this time.',
          solution: `**Given:**
- R = 8.0 Ω
- L = 0.4 H
- ε = 12 V
- t = 0.08 s

**(a) Time constant:**

$$\\tau = \\frac{L}{R} = \\frac{0.4}{8.0}$$

$$\\tau = \\boxed{0.05 \\text{ s} = 50 \\text{ ms}}$$

**(b) Current at t = 0.08 s:**

For RL circuit with battery:
$$I(t) = I_{max}(1 - e^{-t/\\tau})$$

where $I_{max} = \\varepsilon/R = 12/8.0 = 1.5$ A

$$I(0.08) = 1.5(1 - e^{-0.08/0.05})$$

$$I(0.08) = 1.5(1 - e^{-1.6})$$

$$I(0.08) = 1.5(1 - 0.2019)$$

$$I(0.08) = 1.5(0.7981) = \\boxed{1.20 \\text{ A}}$$

**(c) Rate of energy storage:**

Energy in inductor: $U_L = \\frac{1}{2}LI^2$

$$\\frac{dU_L}{dt} = LI\\frac{dI}{dt}$$

From differential equation: $\\varepsilon = IR + L\\frac{dI}{dt}$

$$\\frac{dI}{dt} = \\frac{\\varepsilon - IR}{L}$$

At t = 0.08 s:
$$\\frac{dI}{dt} = \\frac{12 - (1.20)(8.0)}{0.4} = \\frac{12 - 9.6}{0.4} = 6.0 \\text{ A/s}$$

$$\\frac{dU_L}{dt} = LI\\frac{dI}{dt} = (0.4)(1.20)(6.0)$$

$$\\frac{dU_L}{dt} = \\boxed{2.88 \\text{ W}}$$

Alternatively: $P_L = \\varepsilon I - I^2 R = VI_L$ where $V_L = L\\frac{dI}{dt}$`
        },
        {
          topicId: inductanceTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'An inductor L = 0.25 H carrying current I₀ = 2.0 A is suddenly connected to a resistor R = 10 Ω (battery removed). Find: (a) the current as a function of time, (b) the time for the current to decrease to 10% of its initial value, and (c) the total energy dissipated in the resistor.',
          solution: `**Given:**
- L = 0.25 H
- I₀ = 2.0 A
- R = 10 Ω
- Discharging RL circuit

**(a) Current vs. time:**

For discharging: $\\varepsilon = 0$, so:
$$-L\\frac{dI}{dt} = IR$$

$$\\frac{dI}{I} = -\\frac{R}{L}dt$$

Integrating:
$$\\ln I = -\\frac{R}{L}t + C$$

At t = 0: I = I₀, so C = ln I₀

$$\\ln\\left(\\frac{I}{I_0}\\right) = -\\frac{R}{L}t$$

$$\\boxed{I(t) = I_0 e^{-Rt/L} = 2.0 e^{-10t/0.25} = 2.0e^{-40t} \\text{ A}}$$

**(b) Time for I = 0.1I₀:**

$$0.1I_0 = I_0 e^{-Rt/L}$$

$$0.1 = e^{-Rt/L}$$

$$\\ln(0.1) = -\\frac{Rt}{L}$$

$$t = -\\frac{L\\ln(0.1)}{R} = -\\frac{(0.25)(-2.303)}{10}$$

$$t = \\boxed{0.0576 \\text{ s} = 57.6 \\text{ ms}}$$

This is $2.3\\tau$ where $\\tau = L/R = 0.025$ s

**(c) Total energy dissipated:**

Initial energy stored in inductor:
$$U_0 = \\frac{1}{2}LI_0^2 = \\frac{1}{2}(0.25)(2.0)^2$$

$$U_0 = 0.5 \\text{ J}$$

As t → ∞, all energy is dissipated:
$$E_{dissipated} = U_0 = \\boxed{0.5 \\text{ J}}$$

Check: $\\int_0^\\infty I^2 R \\, dt = \\int_0^\\infty I_0^2 e^{-2Rt/L} R \\, dt = \\frac{I_0^2 R L}{2R} = \\frac{1}{2}LI_0^2$ ✓`
        },
        {
          topicId: inductanceTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'An LC circuit consists of L = 0.1 H and C = 50 μF. The capacitor is initially charged to Q₀ = 1.0 × 10⁻⁴ C, then connected to the inductor at t = 0. Find: (a) the angular frequency of oscillation, (b) the maximum current, and (c) expressions for Q(t) and I(t).',
          solution: `**Given:**
- L = 0.1 H
- C = 50 μF = 5.0 × 10⁻⁵ F
- Q₀ = 1.0 × 10⁻⁴ C
- I₀ = 0 (initially)

**(a) Angular frequency:**

For LC circuit:
$$\\omega = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{(0.1)(5.0 \\times 10^{-5})}}$$

$$\\omega = \\frac{1}{\\sqrt{5.0 \\times 10^{-6}}} = \\frac{1}{2.24 \\times 10^{-3}}$$

$$\\omega = \\boxed{447 \\text{ rad/s}}$$

Frequency: $f = \\omega/(2\\pi) = 71.2$ Hz

**(b) Maximum current:**

Energy conservation: $U_C = U_L$

$$\\frac{Q_0^2}{2C} = \\frac{1}{2}LI_{max}^2$$

$$I_{max} = \\frac{Q_0}{\\sqrt{LC}} = Q_0 \\omega$$

$$I_{max} = (1.0 \\times 10^{-4})(447)$$

$$I_{max} = \\boxed{0.0447 \\text{ A} = 44.7 \\text{ mA}}$$

**(c) Q(t) and I(t):**

General solution: $Q(t) = Q_0 \\cos(\\omega t + \\phi)$

At t = 0: Q = Q₀, so φ = 0

$$\\boxed{Q(t) = Q_0 \\cos(\\omega t) = (1.0 \\times 10^{-4})\\cos(447t) \\text{ C}}$$

Current:
$$I(t) = -\\frac{dQ}{dt} = Q_0 \\omega \\sin(\\omega t)$$

$$\\boxed{I(t) = I_{max} \\sin(\\omega t) = 0.0447\\sin(447t) \\text{ A}}$$

Energy oscillates between capacitor and inductor:
- At $\\omega t = 0, \\pi, 2\\pi$: all energy in C
- At $\\omega t = \\pi/2, 3\\pi/2$: all energy in L`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Inductance and RL Circuits')
  }

  // Topic 11: Maxwell's Equations
  const maxwellTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-maxwell-equations' }
  })

  if (maxwellTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: maxwellTopic.id,
          order: 1,
          difficulty: 'HARD',
          question: 'A parallel-plate capacitor with circular plates (radius R = 0.05 m, separation d = 2.0 mm) is being charged. At a certain instant, the electric field between the plates is increasing at rate dE/dt = 1.0 × 10¹² V/(m·s). Find: (a) the displacement current between the plates, (b) the magnetic field at radius r = 0.03 m between the plates, and (c) verify this satisfies Maxwell-Ampère law.',
          solution: `**Given:**
- R = 0.05 m
- d = 2.0 mm = 0.002 m
- dE/dt = 1.0 × 10¹² V/(m·s)
- r = 0.03 m
- ε₀ = 8.85 × 10⁻¹² F/m
- μ₀ = 4π × 10⁻⁷ T·m/A

**(a) Displacement current:**

$$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 A \\frac{dE}{dt}$$

where $A = \\pi R^2 = \\pi(0.05)^2 = 7.85 \\times 10^{-3}$ m²

$$I_d = (8.85 \\times 10^{-12})(7.85 \\times 10^{-3})(1.0 \\times 10^{12})$$

$$I_d = \\boxed{69.5 \\text{ A}}$$

**(b) Magnetic field at r = 0.03 m:**

Using Maxwell-Ampère law with cylindrical symmetry:
$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{d,enc}$$

Displacement current through circle of radius r:
$$I_{d,enc} = I_d \\frac{\\pi r^2}{\\pi R^2} = I_d \\frac{r^2}{R^2}$$

$$B(2\\pi r) = \\mu_0 I_d \\frac{r^2}{R^2}$$

$$B = \\frac{\\mu_0 I_d r}{2\\pi R^2}$$

$$B = \\frac{(4\\pi \\times 10^{-7})(69.5)(0.03)}{2\\pi(0.05)^2}$$

$$B = \\frac{(2 \\times 10^{-7})(69.5)(0.03)}{(0.05)^2}$$

$$B = \\boxed{1.67 \\times 10^{-4} \\text{ T} = 0.167 \\text{ mT}}$$

**(c) Verify Maxwell-Ampère:**

$$\\oint \\vec{B} \\cdot d\\vec{l} = B(2\\pi r) = (1.67 \\times 10^{-4})(2\\pi)(0.03)$$

$$= 3.14 \\times 10^{-5} \\text{ T·m}$$

$$\\mu_0 I_{d,enc} = (4\\pi \\times 10^{-7})(69.5)\\frac{(0.03)^2}{(0.05)^2}$$

$$= (4\\pi \\times 10^{-7})(69.5)(0.36) = 3.14 \\times 10^{-5} \\text{ T·m}$$ ✓

The circulating magnetic field is produced by the changing electric flux!`
        },
        {
          topicId: maxwellTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'State all four Maxwell\'s equations in both integral and differential forms. Then explain: (a) which equation shows that magnetic monopoles don\'t exist, (b) which equation was modified by Maxwell\'s displacement current, and (c) how these equations predict electromagnetic waves.',
          solution: `**Maxwell's Equations:**

**1. Gauss's Law (Electric):**

Integral: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\varepsilon_0}$

Differential: $\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$

**2. Gauss's Law (Magnetic):**

Integral: $\\oint \\vec{B} \\cdot d\\vec{A} = 0$

Differential: $\\nabla \\cdot \\vec{B} = 0$

**3. Faraday's Law:**

Integral: $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$

Differential: $\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$

**4. Maxwell-Ampère Law:**

Integral: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$

Differential: $\\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$

**(a) No magnetic monopoles:**

**Gauss's Law for Magnetism** ($\\nabla \\cdot \\vec{B} = 0$)

This says magnetic field lines form closed loops - they never start or end. Electric field lines start on + charges and end on - charges, but there are no magnetic "charges" (monopoles).

**(b) Maxwell's modification:**

**Ampère's Law** → **Maxwell-Ampère Law**

Maxwell added the displacement current term:
$$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$$

This was needed for consistency - changing electric fields produce magnetic fields, just as changing magnetic fields (Faraday) produce electric fields. Symmetry!

**(c) Electromagnetic waves:**

Take curl of Faraday's law:
$$\\nabla \\times (\\nabla \\times \\vec{E}) = -\\frac{\\partial}{\\partial t}(\\nabla \\times \\vec{B})$$

Using Maxwell-Ampère (in vacuum, J = 0):
$$\\nabla \\times (\\nabla \\times \\vec{E}) = -\\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$$

Using vector identity and $\\nabla \\cdot \\vec{E} = 0$:
$$\\nabla^2 \\vec{E} = \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$$

**This is the wave equation!** Wave speed:
$$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3.0 \\times 10^8 \\text{ m/s}$$

Similarly for B. Maxwell predicted light is EM waves!`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Maxwell\'s Equations')
  }

  // Topic 12: Electromagnetic Waves
  const emWavesTopic = await prisma.topic.findUnique({
    where: { slug: 'physics-c-electromagnetic-waves' }
  })

  if (emWavesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: emWavesTopic.id,
          order: 1,
          difficulty: 'MEDIUM',
          question: 'A plane electromagnetic wave in vacuum has electric field amplitude E₀ = 600 V/m and frequency f = 5.0 × 10¹⁴ Hz. Find: (a) the magnetic field amplitude B₀, (b) the wavelength λ, and (c) the intensity I of the wave.',
          solution: `**Given:**
- E₀ = 600 V/m
- f = 5.0 × 10¹⁴ Hz
- c = 3.0 × 10⁸ m/s
- μ₀ = 4π × 10⁻⁷ T·m/A
- ε₀ = 8.85 × 10⁻¹² F/m

**(a) Magnetic field amplitude:**

In EM waves: $E_0 = cB_0$

$$B_0 = \\frac{E_0}{c} = \\frac{600}{3.0 \\times 10^8}$$

$$B_0 = \\boxed{2.0 \\times 10^{-6} \\text{ T} = 2.0 \\text{ μT}}$$

**(b) Wavelength:**

$$\\lambda = \\frac{c}{f} = \\frac{3.0 \\times 10^8}{5.0 \\times 10^{14}}$$

$$\\lambda = \\boxed{6.0 \\times 10^{-7} \\text{ m} = 600 \\text{ nm}}$$

This is orange/yellow visible light!

**(c) Intensity:**

$$I = \\frac{1}{2}\\varepsilon_0 c E_0^2$$

$$I = \\frac{1}{2}(8.85 \\times 10^{-12})(3.0 \\times 10^8)(600)^2$$

$$I = \\frac{1}{2}(8.85 \\times 10^{-12})(3.0 \\times 10^8)(3.6 \\times 10^5)$$

$$I = \\boxed{477 \\text{ W/m}^2}$$

Alternatively: $I = \\frac{E_0 B_0}{2\\mu_0} = \\frac{(600)(2.0 \\times 10^{-6})}{2(4\\pi \\times 10^{-7})} = 477$ W/m² ✓`
        },
        {
          topicId: emWavesTopic.id,
          order: 2,
          difficulty: 'HARD',
          question: 'A laser beam with intensity I = 1.0 × 10⁴ W/m² is incident normally on a perfectly reflecting mirror of area A = 2.0 cm². Find: (a) the radiation pressure on the mirror, (b) the force on the mirror, and (c) compare this to the force if the mirror were perfectly absorbing.',
          solution: `**Given:**
- I = 1.0 × 10⁴ W/m²
- A = 2.0 cm² = 2.0 × 10⁻⁴ m²
- c = 3.0 × 10⁸ m/s
- Perfectly reflecting

**(a) Radiation pressure (reflecting):**

For perfect reflection:
$$P = \\frac{2I}{c}$$

$$P = \\frac{2(1.0 \\times 10^4)}{3.0 \\times 10^8}$$

$$P = \\boxed{6.67 \\times 10^{-5} \\text{ Pa}}$$

**(b) Force on mirror:**

$$F = PA = (6.67 \\times 10^{-5})(2.0 \\times 10^{-4})$$

$$F = \\boxed{1.33 \\times 10^{-8} \\text{ N} = 13.3 \\text{ nN}}$$

Very small! But significant for:
- Solar sails in space
- Optical tweezers (manipulating particles)
- Radiation pressure from Sun on comet tails

**(c) Perfectly absorbing:**

For perfect absorption:
$$P_{abs} = \\frac{I}{c}$$

$$P_{abs} = \\frac{1.0 \\times 10^4}{3.0 \\times 10^8} = 3.33 \\times 10^{-5} \\text{ Pa}$$

$$F_{abs} = (3.33 \\times 10^{-5})(2.0 \\times 10^{-4})$$

$$F_{abs} = \\boxed{6.67 \\times 10^{-9} \\text{ N} = 6.67 \\text{ nN}}$$

**Reflection produces twice the force as absorption!**

Why? Momentum change:
- Absorption: Δp = p (from p to 0)
- Reflection: Δp = 2p (from +p to -p)

**Physics:** EM waves carry momentum $p = U/c$ where U is energy`
        },
        {
          topicId: emWavesTopic.id,
          order: 3,
          difficulty: 'HARD',
          question: 'A plane EM wave traveling in the +x direction has electric field $\\vec{E} = E_0 \\sin(kx - \\omega t)\\hat{j}$ where E₀ = 300 V/m, k = 1.0 × 10⁷ m⁻¹, and ω = 3.0 × 10¹⁵ rad/s. Find: (a) the magnetic field vector, (b) verify these satisfy v = ω/k = c, and (c) the Poynting vector and its time-averaged value.',
          solution: `**Given:**
- $\\vec{E} = E_0 \\sin(kx - \\omega t)\\hat{j}$
- E₀ = 300 V/m
- k = 1.0 × 10⁷ m⁻¹
- ω = 3.0 × 10¹⁵ rad/s
- Direction: +x
- c = 3.0 × 10⁸ m/s
- μ₀ = 4π × 10⁻⁷ T·m/A

**(a) Magnetic field:**

For EM wave: $\\vec{E} \\perp \\vec{B} \\perp$ direction

E is in +y direction, wave travels in +x, so B must be in ±z direction.

Using right-hand rule ($\\vec{E} \\times \\vec{B}$ points in propagation direction):
$$\\hat{j} \\times \\hat{k} = \\hat{i}$$ ✓

Amplitude: $B_0 = E_0/c = 300/(3.0 \\times 10^8) = 1.0 \\times 10^{-6}$ T

$$\\boxed{\\vec{B} = B_0 \\sin(kx - \\omega t)\\hat{k} = (1.0 \\times 10^{-6})\\sin(kx - \\omega t)\\hat{k} \\text{ T}}$$

**(b) Verify wave speed:**

$$v = \\frac{\\omega}{k} = \\frac{3.0 \\times 10^{15}}{1.0 \\times 10^7}$$

$$v = 3.0 \\times 10^8 \\text{ m/s} = c$$ ✓

Also check: $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3.0 \\times 10^8$ m/s ✓

**(c) Poynting vector:**

$$\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$$

$$\\vec{S} = \\frac{1}{\\mu_0}E_0 B_0 \\sin^2(kx - \\omega t)(\\hat{j} \\times \\hat{k})$$

$$\\vec{S} = \\frac{E_0 B_0}{\\mu_0}\\sin^2(kx - \\omega t)\\hat{i}$$

$$\\vec{S} = \\frac{(300)(1.0 \\times 10^{-6})}{4\\pi \\times 10^{-7}}\\sin^2(kx - \\omega t)\\hat{i}$$

$$\\boxed{\\vec{S} = (239)\\sin^2(kx - \\omega t)\\hat{i} \\text{ W/m}^2}$$

**Time-averaged value:**

$$\\langle \\sin^2(kx - \\omega t) \\rangle = \\frac{1}{2}$$

$$\\langle \\vec{S} \\rangle = \\frac{1}{2}\\frac{E_0 B_0}{\\mu_0}\\hat{i} = \\frac{1}{2}\\varepsilon_0 c E_0^2 \\hat{i}$$

$$\\boxed{\\langle \\vec{S} \\rangle = 120\\hat{i} \\text{ W/m}^2}$$

This is the intensity I!`
        }
      ]
    })
    console.log('✓ Added 3 problems to: Electromagnetic Waves')
  }

  console.log('\n✅ Successfully added ALL example problems to Physics C: E&M topics!')
  console.log('Total problems added: 36')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
