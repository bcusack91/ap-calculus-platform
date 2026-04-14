/**
 * AP Physics C: Electricity & Magnetism — Flashcard seed
 * ~40 cards across key topics: electrostatics, Gauss's law, potential,
 * capacitors, circuits, magnetic forces, induction, Maxwell's equations.
 *
 * Run:  npx ts-node prisma/add-flashcards-ap-physics-c-em-formulas.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'physics-c-electric-field-coulomb',
  'physics-c-gauss-law',
  'physics-c-electric-potential',
  'physics-c-capacitors-dielectrics',
  'physics-c-dc-circuits',
  'physics-c-rc-circuits',
  'physics-c-magnetic-forces',
  'physics-c-magnetic-field-sources',
  'physics-c-faraday-lenz',
  'physics-c-inductance-rl-circuits',
  'physics-c-maxwell-equations',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'physics-c-electric-field-coulomb': [
    { front: 'State Coulomb\'s law.', back: 'F = kq₁q₂/r² (scalar) or F = (1/4πε₀)(q₁q₂/r²) r̂. Like charges repel, opposites attract.', hint: 'Inverse square law for charges' },
    { front: 'What is the electric field due to a point charge?', back: 'E = kQ/r² = (1/4πε₀)(Q/r²), directed radially outward from positive charge.', hint: 'Force per unit charge' },
    { front: 'How do you find E from a continuous charge distribution?', back: 'dE = (1/4πε₀)(dq/r²) r̂. Integrate over the distribution: E = ∫dE.', hint: 'Integrate dE contributions' },
    { front: 'What is the electric field inside a conductor in equilibrium?', back: 'E = 0 inside the conductor. All excess charge resides on the surface.', hint: 'Charges rearrange to cancel internal field' },
  ],
  'physics-c-gauss-law': [
    { front: 'State Gauss\'s law.', back: '∮E·dA = Q_enc/ε₀. The electric flux through any closed surface equals the enclosed charge divided by ε₀.', hint: 'Flux through closed surface' },
    { front: 'When is Gauss\'s law most useful?', back: 'When symmetry makes E constant on the Gaussian surface: spherical, cylindrical, or planar symmetry.', hint: 'High symmetry cases' },
    { front: 'E field of infinite plane of charge (surface charge σ)?', back: 'E = σ/(2ε₀) — uniform, perpendicular to the plane, independent of distance.', hint: 'Pillbox Gaussian surface' },
    { front: 'E field outside a uniformly charged sphere?', back: 'E = kQ/r² — same as a point charge at the center (for r > R).', hint: 'Shell theorem' },
  ],
  'physics-c-electric-potential': [
    { front: 'How is electric potential related to electric field?', back: 'E = −dV/dr (or E = −∇V). The field points from high to low potential.', hint: 'Negative gradient' },
    { front: 'How do you find potential difference from E?', back: 'ΔV = −∫E·dr. Integrate the electric field along a path from a to b.', hint: 'Line integral of E' },
    { front: 'What is the potential due to a point charge?', back: 'V = kQ/r = (1/4πε₀)(Q/r). Scalar — no direction.', hint: 'Scalar quantity, not a vector' },
    { front: 'What are equipotential surfaces?', back: 'Surfaces where V is constant. They are always perpendicular to electric field lines. No work is done moving a charge along an equipotential.', hint: 'Perpendicular to E field' },
  ],
  'physics-c-capacitors-dielectrics': [
    { front: 'What is capacitance?', back: 'C = Q/V — the ratio of stored charge to voltage. SI unit: farad (F).', hint: 'Charge per volt' },
    { front: 'Capacitance of a parallel-plate capacitor?', back: 'C = ε₀A/d, where A = plate area, d = separation. With dielectric: C = κε₀A/d.', hint: 'Proportional to area, inversely to distance' },
    { front: 'Energy stored in a capacitor?', back: 'U = ½CV² = ½QV = Q²/(2C).', hint: 'Three equivalent forms' },
    { front: 'How do capacitors combine in parallel? In series?', back: 'Parallel: C_total = C₁ + C₂ + … (same V). Series: 1/C_total = 1/C₁ + 1/C₂ + … (same Q).', hint: 'Opposite of resistors' },
  ],
  'physics-c-dc-circuits': [
    { front: 'Define current in terms of calculus.', back: 'I = dQ/dt — current is the time rate of charge flow. SI unit: ampere (A).', hint: 'Charge per unit time' },
    { front: 'State Ohm\'s law and the microscopic version.', back: 'V = IR (macroscopic). J = σE (microscopic), where J = current density, σ = conductivity.', hint: 'V/I = R' },
    { front: 'State Kirchhoff\'s junction and loop rules.', back: 'Junction: ΣI_in = ΣI_out (charge conservation). Loop: ΣΔV = 0 around any closed loop (energy conservation).', hint: 'Conservation of charge and energy' },
    { front: 'How do resistors combine in series and parallel?', back: 'Series: R_total = R₁ + R₂ + … (same I). Parallel: 1/R_total = 1/R₁ + 1/R₂ + … (same V).', hint: 'Opposite of capacitors' },
  ],
  'physics-c-rc-circuits': [
    { front: 'What is the charging equation for an RC circuit?', back: 'Q(t) = Cε(1 − e^(−t/RC)), I(t) = (ε/R)e^(−t/RC). Time constant τ = RC.', hint: 'Exponential approach to Cε' },
    { front: 'What is the discharging equation for an RC circuit?', back: 'Q(t) = Q₀e^(−t/RC), I(t) = −(Q₀/RC)e^(−t/RC). Exponential decay with τ = RC.', hint: 'Exponential decay' },
    { front: 'What does the time constant τ = RC represent?', back: 'The time for the charge to reach ~63% of its final value (charging) or drop to ~37% (discharging).', hint: '1 − 1/e ≈ 63%' },
  ],
  'physics-c-magnetic-forces': [
    { front: 'What is the magnetic force on a moving charge?', back: 'F = qv × B. Magnitude: F = qvB sin θ. The force is always perpendicular to both v and B.', hint: 'Cross product, right-hand rule' },
    { front: 'What is the force on a current-carrying wire in a B field?', back: 'F = IL × B. Magnitude: F = BIL sin θ, where L is the wire length vector.', hint: 'Replace qv with IL' },
    { front: 'Why does a charged particle move in a circle in a uniform B field?', back: 'F = qvB is always perpendicular to v, providing centripetal force: qvB = mv²/r → r = mv/(qB).', hint: 'Magnetic force = centripetal force' },
  ],
  'physics-c-magnetic-field-sources': [
    { front: 'State the Biot-Savart law.', back: 'dB = (μ₀/4π)(I dL × r̂)/r². Gives the magnetic field contribution from a small current element.', hint: 'Analog of Coulomb\'s law for magnetism' },
    { front: 'State Ampère\'s law.', back: '∮B·dL = μ₀I_enc. The line integral of B around a closed loop equals μ₀ times the enclosed current.', hint: 'Magnetic analog of Gauss\'s law' },
    { front: 'B field inside a solenoid (n turns per length, current I)?', back: 'B = μ₀nI, uniform inside and ~0 outside. Direction: along the axis (right-hand rule).', hint: 'Uniform inside, zero outside' },
    { front: 'B field at distance r from an infinite straight wire?', back: 'B = μ₀I/(2πr). Field wraps around the wire in concentric circles.', hint: 'Ampère\'s law with circular path' },
  ],
  'physics-c-faraday-lenz': [
    { front: 'State Faraday\'s law of induction.', back: 'EMF = −dΦ_B/dt, where Φ_B = ∫B·dA is the magnetic flux. The induced EMF opposes the change in flux (Lenz\'s law).', hint: 'Rate of change of flux' },
    { front: 'What is Lenz\'s law?', back: 'The induced current flows in a direction that opposes the change in magnetic flux that produced it. This is the reason for the negative sign in Faraday\'s law.', hint: 'Opposes the change' },
    { front: 'EMF in a bar sliding on rails (length L, velocity v, field B)?', back: 'EMF = BLv. Current = BLv/R. This is motional EMF.', hint: 'Motional EMF' },
  ],
  'physics-c-inductance-rl-circuits': [
    { front: 'What is self-inductance?', back: 'L = NΦ_B/I. The induced EMF in an inductor: EMF = −L(dI/dt). SI unit: henry (H).', hint: 'Opposes changes in current' },
    { front: 'Energy stored in an inductor?', back: 'U = ½LI². Stored in the magnetic field.', hint: 'Analog of ½CV² for capacitors' },
    { front: 'Current in an LR circuit (closing switch)?', back: 'I(t) = (ε/R)(1 − e^(−Rt/L)). Time constant τ = L/R.', hint: 'Exponential growth to ε/R' },
  ],
  'physics-c-maxwell-equations': [
    { front: 'List all 4 Maxwell\'s equations (integral form).', back: '1) ∮E·dA = Q/ε₀ (Gauss), 2) ∮B·dA = 0 (no monopoles), 3) ∮E·dL = −dΦ_B/dt (Faraday), 4) ∮B·dL = μ₀I + μ₀ε₀(dΦ_E/dt) (Ampère-Maxwell).', hint: 'Gauss E, Gauss B, Faraday, Ampère-Maxwell' },
    { front: 'What did Maxwell add to Ampère\'s law?', back: 'The displacement current term: μ₀ε₀(dΦ_E/dt). This accounts for changing electric fields producing magnetic fields, completing the symmetry.', hint: 'Displacement current' },
    { front: 'What is the speed of electromagnetic waves from Maxwell\'s equations?', back: 'c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s. EM waves are self-propagating oscillating E and B fields.', hint: 'From the wave equation' },
  ],
}

async function main() {
  console.log('🔧 Seeding AP Physics C: E&M flashcards …')
  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } })
    if (!topic) { console.log(`  ⚠️  Topic "${slug}" not found — skipping`); continue }

    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } })

    const cards = cardsByTopic[slug]
    if (!cards?.length) continue

    await prisma.flashcard.createMany({
      data: cards.map((c) => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
      })),
    })
    console.log(`  ✅ ${cards.length} cards → ${slug}`)
  }
  console.log('Done.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
