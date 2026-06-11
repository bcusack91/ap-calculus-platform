import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * AP Physics C: Mechanics — Flashcard seed
 * ~40 cards across key topics: kinematics with calculus, Newton's laws,
 * work-energy theorem, momentum/impulse, rotation, oscillations, gravitation.
 *
 * Run:  npx ts-node prisma/add-flashcards-ap-physics-c-mech-formulas.ts
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const topicSlugs = [
  'physics-c-position-velocity-acceleration',
  'physics-c-newtons-laws-calculus',
  'physics-c-work-power',
  'physics-c-conservative-forces',
  'physics-c-momentum-collisions',
  'collisions',
  'physics-c-center-of-mass',
  'physics-c-rotational-kinematics-dynamics',
  'physics-c-moment-of-inertia',
  'physics-c-angular-momentum',
  'physics-c-simple-harmonic-motion',
  'physics-c-universal-gravitation',
]

interface Card { front: string; back: string; hint?: string }

const cardsByTopic: Record<string, Card[]> = {
  'physics-c-position-velocity-acceleration': [
    { front: 'How is velocity defined in terms of calculus?', back: 'v(t) = dx/dt — velocity is the time derivative of position.', hint: 'Derivative of position' },
    { front: 'How is acceleration defined in terms of calculus?', back: 'a(t) = dv/dt = d²x/dt² — acceleration is the derivative of velocity, or the second derivative of position.', hint: 'Second derivative' },
    { front: 'How do you find displacement from a velocity function?', back: 'Δx = ∫v(t) dt — integrate velocity over the time interval.', hint: 'Integral of v(t)' },
    { front: 'Given a(t) = 6t, v(0) = 2, find v(t).', back: 'v(t) = ∫6t dt = 3t² + C. v(0) = 2 → C = 2, so v(t) = 3t² + 2.', hint: 'Integrate and apply initial condition' },
  ],
  'physics-c-newtons-laws-calculus': [
    { front: 'State Newton\'s Second Law in its most general form.', back: 'F = dp/dt — net force equals the time rate of change of momentum.', hint: 'Derivative of momentum' },
    { front: 'For a variable force F(x), how do you find the work done?', back: 'W = ∫F(x) dx — integrate the force over the displacement.', hint: 'Area under F vs x curve' },
    { front: 'How do you handle a velocity-dependent drag force F = −bv?', back: 'ma = −bv → m(dv/dt) = −bv. Separate variables: dv/v = −(b/m)dt. Solution: v(t) = v₀e^(−bt/m).', hint: 'Separable differential equation' },
  ],
  'physics-c-work-power': [
    { front: 'State the work-energy theorem.', back: 'W_net = ΔKE = ½mv_f² − ½mv_i². The net work done on an object equals its change in kinetic energy.', hint: 'Net work = change in KE' },
    { front: 'How is work computed from a variable force?', back: 'W = ∫₁²F·dr — the line integral of force over the path.', hint: 'Line integral' },
    { front: 'Power in terms of force and velocity?', back: 'P = dW/dt = F·v — instantaneous power is force dot velocity.', hint: 'Rate of doing work' },
  ],
  'physics-c-conservative-forces': [
    { front: 'What is the relationship between a conservative force and potential energy?', back: 'F(x) = −dU/dx — the force is the negative derivative of the potential energy function.', hint: 'Negative gradient of U' },
    { front: 'State conservation of mechanical energy.', back: 'If only conservative forces do work: KE₁ + U₁ = KE₂ + U₂. Total mechanical energy is constant.', hint: 'E_mech = const' },
    { front: 'How do you find equilibrium points from U(x)?', back: 'Set dU/dx = 0. Stable: d²U/dx² > 0 (valley). Unstable: d²U/dx² < 0 (hill).', hint: 'First and second derivative tests' },
  ],
  'physics-c-momentum-collisions': [
    { front: 'Define impulse using calculus.', back: 'J = ∫F dt = Δp — impulse is the integral of force over time, equal to the change in momentum.', hint: 'Area under F-t curve' },
    { front: 'What is the impulse-momentum theorem?', back: 'J = Δp = p_f − p_i. The impulse on an object equals its change in linear momentum.', hint: 'Integral of F dt' },
    { front: 'How does Newton\'s 2nd law relate to impulse?', back: 'F = dp/dt. Integrating both sides: ∫F dt = Δp = J.', hint: 'Integrate F = dp/dt' },
  ],
  'collisions': [
    { front: 'In a perfectly elastic collision, which quantities are conserved?', back: 'Both momentum AND kinetic energy are conserved.', hint: 'Two conservation laws' },
    { front: 'In a perfectly inelastic collision, what happens?', back: 'Objects stick together. Momentum is conserved, but maximum kinetic energy is lost. m₁v₁ + m₂v₂ = (m₁+m₂)v_f.', hint: 'Objects stick together' },
    { front: 'In 2D collisions, how many conservation equations do you get?', back: 'Two: conservation of momentum in the x-direction and conservation of momentum in the y-direction (px and py separately).', hint: 'Component-wise momentum conservation' },
  ],
  'physics-c-center-of-mass': [
    { front: 'How is the center of mass position defined for discrete masses?', back: 'x_cm = Σ(m_i · x_i) / Σm_i — the mass-weighted average of positions.', hint: 'Weighted average' },
    { front: 'How do you find the center of mass of a continuous object?', back: 'x_cm = (1/M) ∫x dm — integrate x times the differential mass over the object.', hint: 'Replace sum with integral' },
    { front: 'What is the velocity of the center of mass?', back: 'v_cm = dp_total/M = Σ(m_i · v_i) / M. In the absence of external forces, v_cm is constant.', hint: 'Total momentum divided by total mass' },
  ],
  'physics-c-rotational-kinematics-dynamics': [
    { front: 'How are angular and linear quantities related?', back: 's = rθ, v = rω, a_t = rα. Linear quantities equal radius times angular quantities.', hint: 'Multiply by r' },
    { front: 'What are the rotational kinematic equations (constant α)?', back: 'ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ. Same form as linear kinematics.', hint: 'Replace v→ω, a→α, x→θ' },
  ],
  'physics-c-moment-of-inertia': [
    { front: 'What is the rotational analog of Newton\'s 2nd law?', back: 'τ_net = Iα — net torque equals moment of inertia times angular acceleration.', hint: 'τ = Iα like F = ma' },
    { front: 'How do you calculate moment of inertia for a continuous object?', back: 'I = ∫r² dm — integrate r² times the differential mass element.', hint: 'Integral of r²dm' },
    { front: 'State the parallel axis theorem.', back: 'I = I_cm + Md² — moment of inertia about any axis equals I about the CM plus M times the distance squared.', hint: 'Add Md² to center-of-mass I' },
    { front: 'What is the rotational kinetic energy?', back: 'KE_rot = ½Iω². For rolling without slipping: KE_total = ½mv² + ½Iω².', hint: 'Analog of ½mv²' },
  ],
  'physics-c-angular-momentum': [
    { front: 'Define angular momentum for a particle.', back: 'L = r × p = r × mv. Magnitude: L = mvr sin θ. For circular motion: L = Iω.', hint: 'Cross product of r and p' },
    { front: 'When is angular momentum conserved?', back: 'When the net external torque is zero: τ_net = dL/dt = 0 → L = constant.', hint: 'No net external torque' },
    { front: 'A spinning figure skater pulls in their arms. What happens?', back: 'I decreases, so ω increases (L = Iω = constant). Angular velocity increases to conserve angular momentum.', hint: 'Conservation of angular momentum' },
  ],
  'physics-c-simple-harmonic-motion': [
    { front: 'What differential equation defines SHM?', back: 'd²x/dt² = −ω²x, where ω = √(k/m) for a mass-spring system.', hint: 'a(t) = −ω²x' },
    { front: 'Write the general solution for SHM.', back: 'x(t) = A cos(ωt + φ), where A = amplitude, ω = angular frequency, φ = phase constant.', hint: 'Cosine function with phase' },
    { front: 'What is the period of a mass-spring system?', back: 'T = 2π√(m/k). Period depends on mass and spring constant, not amplitude.', hint: 'Does NOT depend on amplitude' },
    { front: 'Where are KE and PE maximum in SHM?', back: 'KE is max at equilibrium (x = 0). PE is max at maximum displacement (x = ±A). Total energy E = ½kA².', hint: 'Energy oscillates between KE and PE' },
  ],
  'physics-c-universal-gravitation': [
    { front: 'State Newton\'s law of universal gravitation.', back: 'F = −GMm/r². The gravitational force between two point masses is proportional to the product of their masses and inversely proportional to the square of the distance.', hint: 'Inverse square law' },
    { front: 'What is the gravitational potential energy for two point masses?', back: 'U = −GMm/r. Note the negative sign — U → 0 as r → ∞.', hint: 'Negative, goes to zero at infinity' },
    { front: 'Derive the orbital speed of a satellite in circular orbit.', back: 'Set gravitational force equal to centripetal: GMm/r² = mv²/r → v = √(GM/r).', hint: 'Equate gravity and centripetal force' },
    { front: 'What is escape velocity?', back: 'v_esc = √(2GM/R). Set total energy = 0: ½mv² − GMm/R = 0.', hint: 'Total energy = 0' },
  ],
}

async function main() {
  console.log('🔧 Seeding AP Physics C: Mechanics flashcards …')
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
