/**
 * AP Physics 1 Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~33 questions each spanning all 7 AP
 * Physics 1 units. Weak areas map to topic slugs for review.
 */

export interface APPhysics1DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysics1Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPhysics1DiagnosticTestData {
  form: 'A' | 'B'
  questions: APPhysics1DiagnosticQuestion[]
  domains: APPhysics1Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysics1DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysics1RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APPhysics1DiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysics1DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysics1RecommendedTopic[]
}

const AP_PHYSICS1_DOMAINS: APPhysics1Domain[] = [
  { id: 'kinematics', name: 'Kinematics', topicSlugs: ['one-dimensional-motion', 'two-dimensional-motion'], questionTarget: 5 },
  { id: 'dynamics', name: 'Dynamics (Newton\'s Laws)', topicSlugs: ['newtons-laws', 'friction-forces'], questionTarget: 5 },
  { id: 'circular-motion-gravity', name: 'Circular Motion & Gravitation', topicSlugs: ['circular-motion', 'gravitation'], questionTarget: 5 },
  { id: 'energy', name: 'Energy', topicSlugs: ['work-energy-theorem', 'conservation-of-energy'], questionTarget: 5 },
  { id: 'momentum', name: 'Momentum', topicSlugs: ['impulse-momentum', 'collisions'], questionTarget: 5 },
  { id: 'simple-harmonic-motion', name: 'Simple Harmonic Motion', topicSlugs: ['oscillations', 'waves-sound'], questionTarget: 4 },
  { id: 'torque-rotation', name: 'Torque & Rotational Motion', topicSlugs: ['torque-equilibrium', 'rotational-dynamics'], questionTarget: 4 },
]

export { AP_PHYSICS1_DOMAINS }

interface PoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

const questionPool: PoolQuestion[] = [
  // ---- Kinematics ----
  { question: 'An object is thrown vertically upward. At the highest point, its acceleration is:', options: ['Zero', '9.8 m/s² downward', '9.8 m/s² upward', 'Dependent on the initial velocity'], correctAnswer: 1, explanation: 'Near Earth\'s surface, the acceleration due to gravity is always 9.8 m/s² downward, regardless of velocity.', domain: 'kinematics', topicSlug: 'one-dimensional-motion', formSet: 'A' },
  { question: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds. How far does it travel?', options: ['50 m', '100 m', '25 m', '200 m'], correctAnswer: 0, explanation: 'd = ½at² = ½(4)(25) = 50 m. Or d = (v₀ + v)t/2 = (0 + 20)(5)/2 = 50 m.', domain: 'kinematics', topicSlug: 'one-dimensional-motion', formSet: 'A' },
  { question: 'A projectile is launched at 45° above the horizontal. At what angle is the velocity vector at the highest point?', options: ['45° above horizontal', '0° (horizontal)', '90° (vertical)', '45° below horizontal'], correctAnswer: 1, explanation: 'At the peak the vertical velocity is zero; only horizontal velocity remains, so the velocity is horizontal (0°).', domain: 'kinematics', topicSlug: 'two-dimensional-motion', formSet: 'A' },
  { question: 'Two balls are dropped from the same height. Ball A has twice the mass of Ball B. Ignoring air resistance, which hits the ground first?', options: ['Ball A', 'Ball B', 'They hit at the same time', 'Cannot be determined'], correctAnswer: 2, explanation: 'In free fall (no air resistance), all objects experience the same gravitational acceleration regardless of mass.', domain: 'kinematics', topicSlug: 'one-dimensional-motion', formSet: 'B' },
  { question: 'A ball is launched horizontally from a cliff. What determines the time in the air?', options: ['The horizontal velocity', 'The height of the cliff', 'The mass of the ball', 'Both horizontal velocity and height'], correctAnswer: 1, explanation: 'Time of flight depends only on the vertical fall: t = √(2h/g). Horizontal velocity is independent.', domain: 'kinematics', topicSlug: 'two-dimensional-motion', formSet: 'B' },
  { question: 'The slope of a position-time graph represents:', options: ['Acceleration', 'Velocity', 'Force', 'Displacement'], correctAnswer: 1, explanation: 'The slope Δx/Δt of a position-time graph gives velocity (or instantaneous velocity for a curve).', domain: 'kinematics', topicSlug: 'one-dimensional-motion', formSet: 'B' },
  { question: 'A projectile has a range R when launched at angle θ. What other angle gives the same range?', options: ['θ/2', '90° − θ', '180° − θ', '2θ'], correctAnswer: 1, explanation: 'For the same launch speed, complementary angles (θ and 90° − θ) give the same range due to the sin(2θ) factor.', domain: 'kinematics', topicSlug: 'two-dimensional-motion', formSet: 'both' },
  { question: 'The area under an acceleration-time graph gives:', options: ['Displacement', 'Change in velocity', 'Force', 'Kinetic energy'], correctAnswer: 1, explanation: 'Area under a-t graph = ∫a dt = Δv (change in velocity).', domain: 'kinematics', topicSlug: 'one-dimensional-motion', formSet: 'both' },

  // ---- Dynamics ----
  { question: 'A 5 kg object experiences a net force of 20 N. Its acceleration is:', options: ['4 m/s²', '100 m/s²', '0.25 m/s²', '25 m/s²'], correctAnswer: 0, explanation: 'Newton\'s second law: a = F/m = 20/5 = 4 m/s².', domain: 'dynamics', topicSlug: 'newtons-laws', formSet: 'A' },
  { question: 'A book sits on a table. The normal force on the book is an example of Newton\'s:', options: ['First law', 'Second law', 'Third law', 'Law of gravitation'], correctAnswer: 2, explanation: 'The normal force is the table\'s reaction to the book pushing down — an action-reaction pair (Third law).', domain: 'dynamics', topicSlug: 'newtons-laws', formSet: 'A' },
  { question: 'A 10 kg box is pushed with 50 N across a floor with μk = 0.3. What is the acceleration?', options: ['5 m/s²', '2.06 m/s²', '3 m/s²', '2 m/s²'], correctAnswer: 1, explanation: 'f = μk·mg = 0.3(10)(9.8) = 29.4 N. Fnet = 50 − 29.4 = 20.6 N. a = 20.6/10 ≈ 2.06 m/s².', domain: 'dynamics', topicSlug: 'friction-forces', formSet: 'A' },
  { question: 'An elevator accelerates upward. The apparent weight of a person inside is:', options: ['Less than their true weight', 'Equal to their true weight', 'Greater than their true weight', 'Zero'], correctAnswer: 2, explanation: 'When accelerating up, the normal force (apparent weight) exceeds mg: N = m(g + a).', domain: 'dynamics', topicSlug: 'newtons-laws', formSet: 'B' },
  { question: 'Static friction is always:', options: ['Equal to μsN', 'Less than or equal to μsN', 'Greater than kinetic friction', 'Proportional to velocity'], correctAnswer: 1, explanation: 'Static friction adjusts up to a maximum of μsN. It\'s only equal to μsN at the point of impending motion.', domain: 'dynamics', topicSlug: 'friction-forces', formSet: 'B' },
  { question: 'Two objects are connected by a massless string over a frictionless pulley (Atwood machine). They accelerate because:', options: ['The total force is zero', 'The net force on the system is the difference in their weights', 'Tension is different on each side', 'Gravity is different for each mass'], correctAnswer: 1, explanation: 'For an Atwood machine: a = (m₁ − m₂)g/(m₁ + m₂). The net force is the weight difference.', domain: 'dynamics', topicSlug: 'newtons-laws', formSet: 'B' },
  { question: 'Newton\'s first law (inertia) states:', options: ['F = ma', 'Every action has an equal and opposite reaction', 'An object maintains its state of motion unless a net force acts on it', 'Force equals the rate of change of momentum'], correctAnswer: 2, explanation: 'The law of inertia: without a net external force, an object remains at rest or moves at constant velocity.', domain: 'dynamics', topicSlug: 'newtons-laws', formSet: 'both' },
  { question: 'A block slides down a frictionless incline at angle θ. Its acceleration is:', options: ['g', 'g sin θ', 'g cos θ', 'g tan θ'], correctAnswer: 1, explanation: 'On a frictionless incline, the component of gravity along the surface is mg sin θ, so a = g sin θ.', domain: 'dynamics', topicSlug: 'friction-forces', formSet: 'both' },

  // ---- Circular Motion & Gravitation ----
  { question: 'An object in uniform circular motion has a constant:', options: ['Velocity', 'Acceleration', 'Speed', 'Net force direction'], correctAnswer: 2, explanation: 'In uniform circular motion speed is constant but velocity changes direction continuously.', domain: 'circular-motion-gravity', topicSlug: 'circular-motion', formSet: 'A' },
  { question: 'The centripetal acceleration of an object moving in a circle of radius r at speed v is:', options: ['v/r', 'v²/r', 'vr', 'v²r'], correctAnswer: 1, explanation: 'Centripetal acceleration ac = v²/r, directed toward the center of the circle.', domain: 'circular-motion-gravity', topicSlug: 'circular-motion', formSet: 'A' },
  { question: 'Newton\'s law of gravitation states that gravitational force is proportional to:', options: ['The sum of the masses', 'The product of the masses divided by distance squared', 'The difference of the masses', 'Mass times distance'], correctAnswer: 1, explanation: 'F = Gm₁m₂/r². Force is proportional to the product of masses and inversely proportional to distance squared.', domain: 'circular-motion-gravity', topicSlug: 'gravitation', formSet: 'A' },
  { question: 'A satellite in circular orbit has its centripetal force provided by:', options: ['Its engines', 'Gravity', 'Normal force', 'Tension'], correctAnswer: 1, explanation: 'For a satellite, gravity provides the centripetal force: mg = mv²/r.', domain: 'circular-motion-gravity', topicSlug: 'gravitation', formSet: 'B' },
  { question: 'If the radius of a circular orbit doubles (same speed), the centripetal acceleration:', options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'], correctAnswer: 1, explanation: 'ac = v²/r. If r doubles and v stays the same, ac is halved.', domain: 'circular-motion-gravity', topicSlug: 'circular-motion', formSet: 'B' },
  { question: 'At the top of a vertical loop, the minimum speed for an object to maintain contact is found by setting:', options: ['N = mg', 'mg = mv²/r (with N = 0)', 'T = mg', 'F = 0'], correctAnswer: 1, explanation: 'At the minimum speed, normal force is zero: gravity alone provides centripetal force, so mg = mv²/r → v = √(gr).', domain: 'circular-motion-gravity', topicSlug: 'circular-motion', formSet: 'B' },
  { question: 'The gravitational field strength g at distance r from Earth\'s center is:', options: ['GM/r', 'GM/r²', 'GMr', 'GM/r³'], correctAnswer: 1, explanation: 'g = GM/r², which decreases as the square of the distance from the center.', domain: 'circular-motion-gravity', topicSlug: 'gravitation', formSet: 'both' },
  { question: 'A car rounds a flat, unbanked curve. The force providing centripetal acceleration is:', options: ['Gravity', 'Normal force', 'Friction', 'The engine force'], correctAnswer: 2, explanation: 'On a flat curve, static friction between the tires and road provides the centripetal force.', domain: 'circular-motion-gravity', topicSlug: 'circular-motion', formSet: 'both' },

  // ---- Energy ----
  { question: 'The work-energy theorem states:', options: ['Work equals force times distance always', 'The net work on an object equals its change in kinetic energy', 'Energy is always conserved', 'Work done by friction is always positive'], correctAnswer: 1, explanation: 'W_net = ΔKE = ½mv² − ½mv₀². Net work equals the change in kinetic energy.', domain: 'energy', topicSlug: 'work-energy-theorem', formSet: 'A' },
  { question: 'A spring compressed by x stores potential energy equal to:', options: ['kx', '½kx', 'kx²', '½kx²'], correctAnswer: 3, explanation: 'Elastic potential energy PE = ½kx², where k is the spring constant.', domain: 'energy', topicSlug: 'conservation-of-energy', formSet: 'A' },
  { question: 'If a ball is dropped from height h, its speed just before hitting the ground is:', options: ['√(gh)', '√(2gh)', '2gh', 'gh'], correctAnswer: 1, explanation: 'Conservation of energy: mgh = ½mv² → v = √(2gh).', domain: 'energy', topicSlug: 'conservation-of-energy', formSet: 'A' },
  { question: 'Work done by a constant force at 90° to the displacement is:', options: ['Maximum', 'Positive', 'Negative', 'Zero'], correctAnswer: 3, explanation: 'W = Fd cos θ. When θ = 90°, cos 90° = 0, so no work is done.', domain: 'energy', topicSlug: 'work-energy-theorem', formSet: 'B' },
  { question: 'Power is defined as:', options: ['Force × displacement', 'Work / time', 'Energy × time', 'Force / acceleration'], correctAnswer: 1, explanation: 'Power = W/t = rate of doing work, measured in watts (J/s).', domain: 'energy', topicSlug: 'work-energy-theorem', formSet: 'B' },
  { question: 'In a system where only conservative forces act, which quantity is conserved?', options: ['Kinetic energy only', 'Potential energy only', 'Total mechanical energy (KE + PE)', 'Momentum only'], correctAnswer: 2, explanation: 'When only conservative forces (gravity, springs) do work, total mechanical energy KE + PE is conserved.', domain: 'energy', topicSlug: 'conservation-of-energy', formSet: 'B' },
  { question: 'Doubling the speed of an object multiplies its kinetic energy by:', options: ['2', '4', '8', '√2'], correctAnswer: 1, explanation: 'KE = ½mv². If v doubles, KE = ½m(2v)² = 4(½mv²), so KE quadruples.', domain: 'energy', topicSlug: 'work-energy-theorem', formSet: 'both' },
  { question: 'A roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, its speed at the bottom is approximately:', options: ['10 m/s', '14 m/s', '20 m/s', '40 m/s'], correctAnswer: 2, explanation: 'v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s (using g ≈ 10 m/s²).', domain: 'energy', topicSlug: 'conservation-of-energy', formSet: 'both' },

  // ---- Momentum ----
  { question: 'Impulse is equal to:', options: ['Force × time = change in momentum', 'Force × distance', 'Mass × acceleration', 'Energy / time'], correctAnswer: 0, explanation: 'Impulse J = FΔt = Δp (change in momentum). This is the impulse-momentum theorem.', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'A' },
  { question: 'In a perfectly inelastic collision, which is conserved?', options: ['Kinetic energy only', 'Momentum only', 'Both kinetic energy and momentum', 'Neither'], correctAnswer: 1, explanation: 'In perfectly inelastic collisions, objects stick together. Momentum is conserved but kinetic energy is not.', domain: 'momentum', topicSlug: 'collisions', formSet: 'A' },
  { question: 'A 2 kg ball moving at 3 m/s collides head-on with a 1 kg ball at rest and they stick together. Their final speed is:', options: ['1 m/s', '2 m/s', '3 m/s', '6 m/s'], correctAnswer: 1, explanation: 'Conservation of momentum: 2(3) + 1(0) = (2+1)v → v = 6/3 = 2 m/s.', domain: 'momentum', topicSlug: 'collisions', formSet: 'A' },
  { question: 'A firecracker at rest explodes into two pieces. Their total momentum after the explosion is:', options: ['Greater than zero', 'Zero', 'Dependent on the masses', 'Equal to the kinetic energy'], correctAnswer: 1, explanation: 'Initial momentum was zero. By conservation of momentum, total momentum remains zero after the explosion.', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'B' },
  { question: 'In an elastic collision between two identical masses where one is initially at rest, the first mass:', options: ['Bounces backward', 'Stops completely', 'Continues at half its speed', 'Speeds up'], correctAnswer: 1, explanation: 'In a 1D elastic collision between equal masses, the moving mass stops and the stationary mass takes on its full velocity.', domain: 'momentum', topicSlug: 'collisions', formSet: 'B' },
  { question: 'A longer collision time (like an airbag) reduces:', options: ['Impulse', 'Change in momentum', 'Force experienced', 'Total energy'], correctAnswer: 2, explanation: 'J = FΔt = Δp. If Δp is fixed but Δt increases, the average force F decreases — that is the purpose of airbags.', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'B' },
  { question: 'The center of mass of a system with no external forces:', options: ['Accelerates toward the heavier object', 'Moves at constant velocity', 'Is always at rest', 'Oscillates'], correctAnswer: 1, explanation: 'Without external forces, the center of mass maintains constant velocity (Newton\'s first law for systems).', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'both' },
  { question: 'In which type of collision is kinetic energy conserved?', options: ['Perfectly inelastic', 'Elastic', 'Explosive', 'All collisions'], correctAnswer: 1, explanation: 'By definition, elastic collisions conserve both momentum and kinetic energy.', domain: 'momentum', topicSlug: 'collisions', formSet: 'both' },

  // ---- Simple Harmonic Motion ----
  { question: 'In simple harmonic motion, the restoring force is proportional to:', options: ['Velocity', 'Displacement from equilibrium', 'Acceleration only', 'Mass'], correctAnswer: 1, explanation: 'SHM requires F = −kx: the restoring force is proportional to displacement and directed toward equilibrium.', domain: 'simple-harmonic-motion', topicSlug: 'oscillations', formSet: 'A' },
  { question: 'The period of a simple pendulum depends on:', options: ['Mass and length', 'Length and gravitational acceleration only', 'Mass and amplitude', 'Amplitude only'], correctAnswer: 1, explanation: 'T = 2π√(L/g). Period depends only on length and g, not on mass or (small) amplitude.', domain: 'simple-harmonic-motion', topicSlug: 'oscillations', formSet: 'A' },
  { question: 'A standing wave on a string fixed at both ends has nodes at the endpoints. The fundamental frequency has:', options: ['No nodes', 'One antinode in the middle', 'Two antinodes', 'Three antinodes'], correctAnswer: 1, explanation: 'The fundamental mode (first harmonic) has nodes at both ends and one antinode at the center (half wavelength).', domain: 'simple-harmonic-motion', topicSlug: 'waves-sound', formSet: 'A' },
  { question: 'The period of a mass-spring system is:', options: ['T = 2π√(m/k)', 'T = 2π√(k/m)', 'T = 2π√(L/g)', 'T = 1/f²'], correctAnswer: 0, explanation: 'For a mass on a spring: T = 2π√(m/k). Period increases with mass and decreases with stiffer springs.', domain: 'simple-harmonic-motion', topicSlug: 'oscillations', formSet: 'B' },
  { question: 'The speed of a wave on a string increases when:', options: ['Tension increases', 'Mass per unit length increases', 'Frequency decreases', 'Amplitude increases'], correctAnswer: 0, explanation: 'v = √(T/μ). Greater tension increases wave speed; greater linear density decreases it.', domain: 'simple-harmonic-motion', topicSlug: 'waves-sound', formSet: 'B' },
  { question: 'At the equilibrium position of SHM, the object has:', options: ['Maximum displacement and zero velocity', 'Maximum velocity and zero displacement', 'Maximum acceleration', 'Zero kinetic energy'], correctAnswer: 1, explanation: 'At equilibrium, displacement is zero (max velocity) and acceleration is zero (no restoring force).', domain: 'simple-harmonic-motion', topicSlug: 'oscillations', formSet: 'both' },
  { question: 'Resonance occurs when:', options: ['Friction is very high', 'The driving frequency matches the natural frequency of the system', 'The amplitude is zero', 'The system is critically damped'], correctAnswer: 1, explanation: 'Resonance produces maximum amplitude when the external driving frequency equals the system\'s natural frequency.', domain: 'simple-harmonic-motion', topicSlug: 'waves-sound', formSet: 'both' },

  // ---- Torque & Rotational Motion ----
  { question: 'Torque is calculated as:', options: ['Force × distance (parallel)', 'Force × lever arm (perpendicular distance)', 'Mass × angular acceleration', 'Both B and C are correct'], correctAnswer: 3, explanation: 'τ = rF sin θ = r⊥F (lever arm method) and τ = Iα (Newton\'s second law for rotation). Both are valid.', domain: 'torque-rotation', topicSlug: 'torque-equilibrium', formSet: 'A' },
  { question: 'For an object in static equilibrium:', options: ['Net force is zero only', 'Net torque is zero only', 'Both net force and net torque are zero', 'Velocity must be zero'], correctAnswer: 2, explanation: 'Static equilibrium requires both ΣF = 0 (translational) and Στ = 0 (rotational).', domain: 'torque-rotation', topicSlug: 'torque-equilibrium', formSet: 'A' },
  { question: 'The moment of inertia of an object depends on:', options: ['Mass only', 'Shape only', 'Mass distribution relative to the axis of rotation', 'Angular velocity'], correctAnswer: 2, explanation: 'I = Σmr². Moment of inertia depends on both the mass and how it is distributed relative to the rotation axis.', domain: 'torque-rotation', topicSlug: 'rotational-dynamics', formSet: 'A' },
  { question: 'Angular momentum is conserved when:', options: ['No net external force acts', 'No net external torque acts', 'The object moves in a straight line', 'Speed is constant'], correctAnswer: 1, explanation: 'Angular momentum L = Iω is conserved when the net external torque on the system is zero.', domain: 'torque-rotation', topicSlug: 'rotational-dynamics', formSet: 'B' },
  { question: 'A spinning figure skater pulls in their arms. Their angular velocity:', options: ['Decreases', 'Increases', 'Stays the same', 'Goes to zero'], correctAnswer: 1, explanation: 'Pulling arms in reduces I. Since L = Iω is conserved, ω must increase.', domain: 'torque-rotation', topicSlug: 'rotational-dynamics', formSet: 'B' },
  { question: 'A wrench applies the most torque when the force is applied:', options: ['Parallel to the wrench', 'At the pivot point', 'Perpendicular to the wrench at the end', 'At any angle near the pivot'], correctAnswer: 2, explanation: 'τ = rF sin θ is maximized when θ = 90° (perpendicular) and r is maximum (far from pivot).', domain: 'torque-rotation', topicSlug: 'torque-equilibrium', formSet: 'B' },
  { question: 'The rotational analog of F = ma is:', options: ['L = Iω', 'τ = Iα', 'KE = ½Iω²', 'W = τθ'], correctAnswer: 1, explanation: 'τ = Iα is Newton\'s second law for rotation: net torque equals moment of inertia times angular acceleration.', domain: 'torque-rotation', topicSlug: 'rotational-dynamics', formSet: 'both' },
  { question: 'A seesaw is balanced when a 40 kg child sits 2 m from the pivot. Where must a 20 kg child sit?', options: ['1 m from the pivot', '2 m from the pivot', '4 m from the pivot', '3 m from the pivot'], correctAnswer: 2, explanation: 'Balance: 40(2) = 20(x) → x = 4 m. Torques must be equal and opposite.', domain: 'torque-rotation', topicSlug: 'torque-equilibrium', formSet: 'both' },
]

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysics1DiagnosticTest(form: 'A' | 'B'): APPhysics1DiagnosticTestData {
  const questions: APPhysics1DiagnosticQuestion[] = []

  for (const domain of AP_PHYSICS1_DOMAINS) {
    const pool = questionPool.filter(
      q => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'),
    )
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, domain.questionTarget)
    for (const q of selected) {
      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })
    }
  }

  return { form, questions: questions.sort(() => Math.random() - 0.5), domains: AP_PHYSICS1_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 45 }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPhysics1Diagnostic(
  form: 'A' | 'B',
  questions: APPhysics1DiagnosticQuestion[],
  answers: Record<number, number>,
): APPhysics1DiagnosticResults {
  const domainResults: APPhysics1DomainResult[] = AP_PHYSICS1_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => answers[i] !== undefined && answers[i] === questions[i].correctAnswer).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  const recommendedTopics: APPhysics1RecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs].values().next().value : domainDef.topicSlugs[0]
    if (slug) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: md.domainId, priority: 'medium' })
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[previousForms.length - 1] === 'A' ? 'B' : 'A'
}

const SLUG_LABELS: Record<string, string> = {
  'one-dimensional-motion': '1D Motion & Free Fall',
  'two-dimensional-motion': '2D Motion & Projectiles',
  'newtons-laws': 'Newton\'s Laws of Motion',
  'friction-forces': 'Friction & Applied Forces',
  'circular-motion': 'Circular Motion',
  'gravitation': 'Gravitation',
  'work-energy-theorem': 'Work-Energy Theorem',
  'conservation-of-energy': 'Conservation of Energy',
  'impulse-momentum': 'Impulse & Momentum',
  'collisions': 'Collisions',
  'oscillations': 'Oscillations & SHM',
  'waves-sound': 'Waves & Sound',
  'torque-equilibrium': 'Torque & Equilibrium',
  'rotational-dynamics': 'Rotational Dynamics',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
