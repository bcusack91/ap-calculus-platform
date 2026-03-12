/**
 * AP Physics C: Mechanics Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 5 core domains.
 */

export interface APPhysicsCMechQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysicsCMechDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPhysicsCMechTestData {
  form: 'A' | 'B'
  questions: APPhysicsCMechQuestion[]
  domains: APPhysicsCMechDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysicsCMechDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysicsCMechRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface APPhysicsCMechResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysicsCMechDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysicsCMechRecommendedTopic[]
}

const AP_PHYSICS_C_MECH_DOMAINS: APPhysicsCMechDomain[] = [
  { id: 'kinematics', name: 'Kinematics', topicSlugs: ['motion-in-one-dimension', 'projectile-motion', 'relative-motion'], questionTarget: 6 },
  { id: 'newtons-laws', name: "Newton's Laws of Motion", topicSlugs: ['newtons-first-law', 'newtons-second-law', 'friction-forces'], questionTarget: 6 },
  { id: 'work-energy-power', name: 'Work, Energy & Power', topicSlugs: ['work-energy-theorem', 'conservation-of-energy', 'power-mechanics'], questionTarget: 6 },
  { id: 'momentum', name: 'Systems of Particles & Momentum', topicSlugs: ['linear-momentum', 'impulse-momentum', 'collisions'], questionTarget: 6 },
  { id: 'rotation', name: 'Rotation & Oscillation', topicSlugs: ['rotational-kinematics', 'torque-angular-momentum', 'simple-harmonic-motion'], questionTarget: 6 },
]

export { AP_PHYSICS_C_MECH_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- Kinematics ----
  { question: 'A particle moves along the x-axis with position x(t) = 3t² − 2t + 1. Its velocity at t = 2 s is:', options: ['10 m/s', '12 m/s', '8 m/s', '6 m/s'], correctAnswer: 0, explanation: 'v(t) = dx/dt = 6t − 2. At t = 2: v = 12 − 2 = 10 m/s.', domain: 'kinematics', topicSlug: 'motion-in-one-dimension', formSet: 'A' },
  { question: 'A ball is thrown horizontally from a 45 m cliff at 20 m/s. How far does it travel horizontally? (g = 10 m/s²)', options: ['60 m', '40 m', '90 m', '45 m'], correctAnswer: 0, explanation: 'Time to fall: t = √(2h/g) = √(90/10) = 3 s. Horizontal distance = 20 × 3 = 60 m.', domain: 'kinematics', topicSlug: 'projectile-motion', formSet: 'A' },
  { question: 'The acceleration of a particle whose position is x(t) = 5t³ − t at t = 1 s is:', options: ['30 m/s²', '15 m/s²', '14 m/s²', '29 m/s²'], correctAnswer: 0, explanation: 'v(t) = 15t² − 1, a(t) = 30t. At t = 1: a = 30 m/s².', domain: 'kinematics', topicSlug: 'motion-in-one-dimension', formSet: 'A' },
  { question: 'A car accelerates uniformly from rest to 30 m/s in 6 s. The distance traveled is:', options: ['90 m', '180 m', '45 m', '60 m'], correctAnswer: 0, explanation: 'd = ½at² = ½(5)(36) = 90 m. (a = 30/6 = 5 m/s²)', domain: 'kinematics', topicSlug: 'motion-in-one-dimension', formSet: 'B' },
  { question: 'A projectile is launched at 30° above the horizontal at 40 m/s. Its initial vertical velocity is:', options: ['20 m/s', '34.6 m/s', '40 m/s', '10 m/s'], correctAnswer: 0, explanation: 'v_y = v sin(30°) = 40 × 0.5 = 20 m/s.', domain: 'kinematics', topicSlug: 'projectile-motion', formSet: 'B' },
  { question: 'If velocity is v(t) = 4t − 6 (m/s), the displacement from t = 0 to t = 3 s is:', options: ['0 m', '−3 m', '6 m', '3 m'], correctAnswer: 0, explanation: '∫₀³ (4t − 6) dt = [2t² − 6t]₀³ = (18 − 18) − 0 = 0 m.', domain: 'kinematics', topicSlug: 'motion-in-one-dimension', formSet: 'B' },
  { question: 'Two cars approach each other at 60 km/h and 40 km/h. Their relative speed of approach is:', options: ['100 km/h', '20 km/h', '50 km/h', '60 km/h'], correctAnswer: 0, explanation: 'Head-on: relative speed = 60 + 40 = 100 km/h.', domain: 'kinematics', topicSlug: 'relative-motion', formSet: 'both' },
  { question: 'For uniformly accelerated motion from rest, the distance in the nth second is proportional to:', options: ['(2n − 1)', 'n²', 'n', '1/n'], correctAnswer: 0, explanation: 'Distance in nth second: sₙ = u + a(2n−1)/2. From rest, sₙ ∝ (2n − 1).', domain: 'kinematics', topicSlug: 'motion-in-one-dimension', formSet: 'both' },

  // ---- Newton's Laws ----
  { question: 'A 5 kg block on a frictionless surface has a 20 N horizontal force applied. Its acceleration is:', options: ['4 m/s²', '5 m/s²', '100 m/s²', '0.25 m/s²'], correctAnswer: 0, explanation: 'F = ma → a = F/m = 20/5 = 4 m/s².', domain: 'newtons-laws', topicSlug: 'newtons-second-law', formSet: 'A' },
  { question: 'A 10 kg box on a surface with μₖ = 0.3 has a kinetic friction force of: (g = 10 m/s²)', options: ['30 N', '3 N', '100 N', '33 N'], correctAnswer: 0, explanation: 'f = μₖ mg = 0.3 × 10 × 10 = 30 N.', domain: 'newtons-laws', topicSlug: 'friction-forces', formSet: 'A' },
  { question: 'Two blocks (3 kg and 2 kg) are connected by a string on a frictionless surface. A 10 N force pulls the 3 kg block. The tension is:', options: ['4 N', '6 N', '10 N', '2 N'], correctAnswer: 0, explanation: 'a = F/(m₁+m₂) = 10/5 = 2 m/s². T = m₂a = 2 × 2 = 4 N.', domain: 'newtons-laws', topicSlug: 'newtons-second-law', formSet: 'A' },
  { question: 'An elevator accelerates upward at 2 m/s². The apparent weight of a 60 kg person is: (g = 10 m/s²)', options: ['720 N', '600 N', '480 N', '660 N'], correctAnswer: 0, explanation: 'Apparent weight = m(g + a) = 60(10 + 2) = 720 N.', domain: 'newtons-laws', topicSlug: 'newtons-second-law', formSet: 'B' },
  { question: 'A block rests on a 30° incline with μₛ = 0.6. Does it slide? The maximum static friction compared to gravitational component along the incline:', options: ['Friction is larger — it stays', 'Friction is smaller — it slides', 'They are equal', 'Cannot determine'], correctAnswer: 0, explanation: 'mg sin 30° = 0.5mg. μₛ mg cos 30° = 0.6(0.866)mg ≈ 0.52mg > 0.5mg. The block stays.', domain: 'newtons-laws', topicSlug: 'friction-forces', formSet: 'B' },
  { question: 'Newton\'s first law is also called the law of:', options: ['Inertia', 'Action-reaction', 'Acceleration', 'Gravitation'], correctAnswer: 0, explanation: 'Newton\'s first law states that objects at rest stay at rest (inertia) unless acted upon by an external force.', domain: 'newtons-laws', topicSlug: 'newtons-first-law', formSet: 'B' },
  { question: 'A 2 kg object moves in a circle of radius 4 m at 6 m/s. The centripetal force is:', options: ['18 N', '12 N', '72 N', '3 N'], correctAnswer: 0, explanation: 'F = mv²/r = 2(36)/4 = 18 N.', domain: 'newtons-laws', topicSlug: 'newtons-second-law', formSet: 'both' },
  { question: 'Action and reaction forces in Newton\'s third law act on:', options: ['Different objects', 'The same object', 'Only the larger object', 'Only the smaller object'], correctAnswer: 0, explanation: 'Newton\'s third law: every action has an equal and opposite reaction on a different body.', domain: 'newtons-laws', topicSlug: 'newtons-first-law', formSet: 'both' },

  // ---- Work, Energy & Power ----
  { question: 'A 4 kg object is lifted 5 m vertically. The work done against gravity is: (g = 10 m/s²)', options: ['200 J', '20 J', '100 J', '50 J'], correctAnswer: 0, explanation: 'W = mgh = 4 × 10 × 5 = 200 J.', domain: 'work-energy-power', topicSlug: 'work-energy-theorem', formSet: 'A' },
  { question: 'A spring with k = 200 N/m is compressed 0.1 m. The stored potential energy is:', options: ['1 J', '2 J', '10 J', '20 J'], correctAnswer: 0, explanation: 'PE = ½kx² = ½(200)(0.01) = 1 J.', domain: 'work-energy-power', topicSlug: 'conservation-of-energy', formSet: 'A' },
  { question: 'A 1000 kg car traveling at 20 m/s brakes to a stop. The kinetic energy dissipated is:', options: ['200,000 J', '20,000 J', '10,000 J', '400,000 J'], correctAnswer: 0, explanation: 'KE = ½mv² = ½(1000)(400) = 200,000 J.', domain: 'work-energy-power', topicSlug: 'work-energy-theorem', formSet: 'A' },
  { question: 'A motor lifts a 50 kg mass 10 m in 5 s. The power output is: (g = 10 m/s²)', options: ['1000 W', '500 W', '2500 W', '100 W'], correctAnswer: 0, explanation: 'P = W/t = mgh/t = (50)(10)(10)/5 = 1000 W.', domain: 'work-energy-power', topicSlug: 'power-mechanics', formSet: 'B' },
  { question: 'A force F = 3x² (N) acts on a particle moving from x = 0 to x = 2 m. The work done is:', options: ['8 J', '12 J', '6 J', '24 J'], correctAnswer: 0, explanation: 'W = ∫₀² 3x² dx = [x³]₀² = 8 J.', domain: 'work-energy-power', topicSlug: 'work-energy-theorem', formSet: 'B' },
  { question: 'A pendulum released from height h swings to its lowest point. Its speed there is:', options: ['√(2gh)', '√(gh)', '2gh', 'gh'], correctAnswer: 0, explanation: 'Conservation of energy: mgh = ½mv² → v = √(2gh).', domain: 'work-energy-power', topicSlug: 'conservation-of-energy', formSet: 'B' },
  { question: 'The work-energy theorem states that the net work on an object equals its change in:', options: ['Kinetic energy', 'Potential energy', 'Total energy', 'Momentum'], correctAnswer: 0, explanation: 'W_net = ΔKE = ½mv²_f − ½mv²_i.', domain: 'work-energy-power', topicSlug: 'work-energy-theorem', formSet: 'both' },
  { question: 'If the speed of a car doubles, its kinetic energy:', options: ['Quadruples', 'Doubles', 'Triples', 'Stays the same'], correctAnswer: 0, explanation: 'KE = ½mv². Doubling v → KE multiplied by 4.', domain: 'work-energy-power', topicSlug: 'work-energy-theorem', formSet: 'both' },

  // ---- Systems of Particles & Momentum ----
  { question: 'A 2 kg ball moving at 5 m/s collides with a stationary 3 kg ball. If they stick together, their speed is:', options: ['2 m/s', '5 m/s', '3.33 m/s', '1 m/s'], correctAnswer: 0, explanation: 'p_i = 2(5) = 10. p_f = 5v → v = 2 m/s.', domain: 'momentum', topicSlug: 'collisions', formSet: 'A' },
  { question: 'The impulse delivered to an object is equal to its change in:', options: ['Momentum', 'Kinetic energy', 'Velocity', 'Force'], correctAnswer: 0, explanation: 'Impulse-momentum theorem: J = Δp = FΔt.', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'A' },
  { question: 'A 0.5 kg ball hits a wall at 10 m/s and rebounds at 8 m/s. The impulse magnitude is:', options: ['9 kg·m/s', '1 kg·m/s', '5 kg·m/s', '4 kg·m/s'], correctAnswer: 0, explanation: 'Δp = m(v_f − v_i) = 0.5(8 − (−10)) = 0.5(18) = 9 kg·m/s.', domain: 'momentum', topicSlug: 'impulse-momentum', formSet: 'A' },
  { question: 'In a perfectly elastic collision between equal masses (one at rest), the first mass:', options: ['Stops completely', 'Continues at half speed', 'Rebounds at half speed', 'Continues at full speed'], correctAnswer: 0, explanation: 'In head-on elastic collision of equal masses, the moving one stops and the other moves with the initial velocity.', domain: 'momentum', topicSlug: 'collisions', formSet: 'B' },
  { question: 'The center of mass of two particles (3 kg at x = 0 and 1 kg at x = 8 m) is at:', options: ['x = 2 m', 'x = 4 m', 'x = 6 m', 'x = 3 m'], correctAnswer: 0, explanation: 'x_cm = (3·0 + 1·8)/(3+1) = 8/4 = 2 m.', domain: 'momentum', topicSlug: 'linear-momentum', formSet: 'B' },
  { question: 'A 60 kg astronaut throws a 5 kg tool at 12 m/s in space. The astronaut\'s recoil speed is:', options: ['1 m/s', '12 m/s', '0.5 m/s', '2 m/s'], correctAnswer: 0, explanation: 'Conservation of momentum: 0 = 60v + 5(12) → v = −1 m/s. Speed = 1 m/s.', domain: 'momentum', topicSlug: 'linear-momentum', formSet: 'B' },
  { question: 'In which collision type is kinetic energy conserved?', options: ['Elastic', 'Perfectly inelastic', 'All collisions', 'None'], correctAnswer: 0, explanation: 'Only elastic collisions conserve both momentum and kinetic energy.', domain: 'momentum', topicSlug: 'collisions', formSet: 'both' },
  { question: 'The total momentum of an isolated system:', options: ['Is always conserved', 'Increases over time', 'Decreases over time', 'Is conserved only in elastic collisions'], correctAnswer: 0, explanation: 'Conservation of momentum applies to all collisions in an isolated system.', domain: 'momentum', topicSlug: 'linear-momentum', formSet: 'both' },

  // ---- Rotation & Oscillation ----
  { question: 'A disk has moment of inertia I = 2 kg·m². A torque of 10 N·m gives an angular acceleration of:', options: ['5 rad/s²', '20 rad/s²', '0.2 rad/s²', '12 rad/s²'], correctAnswer: 0, explanation: 'τ = Iα → α = τ/I = 10/2 = 5 rad/s².', domain: 'rotation', topicSlug: 'torque-angular-momentum', formSet: 'A' },
  { question: 'The period of a simple pendulum of length 1 m is approximately: (g = 10 m/s²)', options: ['2 s', '1 s', 'π s', '0.5 s'], correctAnswer: 0, explanation: 'T = 2π√(L/g) = 2π√(0.1) ≈ 2π(0.316) ≈ 2 s.', domain: 'rotation', topicSlug: 'simple-harmonic-motion', formSet: 'A' },
  { question: 'A wheel spins at 10 rad/s and decelerates at 2 rad/s². It stops after:', options: ['5 s', '20 s', '10 s', '2.5 s'], correctAnswer: 0, explanation: 'ω = ω₀ + αt → 0 = 10 − 2t → t = 5 s.', domain: 'rotation', topicSlug: 'rotational-kinematics', formSet: 'A' },
  { question: 'A mass on a spring (k = 100 N/m, m = 1 kg) has angular frequency:', options: ['10 rad/s', '100 rad/s', '1 rad/s', '50 rad/s'], correctAnswer: 0, explanation: 'ω = √(k/m) = √(100/1) = 10 rad/s.', domain: 'rotation', topicSlug: 'simple-harmonic-motion', formSet: 'B' },
  { question: 'The rotational kinetic energy of a flywheel with I = 4 kg·m² spinning at 3 rad/s is:', options: ['18 J', '6 J', '36 J', '12 J'], correctAnswer: 0, explanation: 'KE_rot = ½Iω² = ½(4)(9) = 18 J.', domain: 'rotation', topicSlug: 'rotational-kinematics', formSet: 'B' },
  { question: 'Angular momentum is conserved when the net external torque is:', options: ['Zero', 'Constant', 'Maximum', 'Equal to force'], correctAnswer: 0, explanation: 'L = Iω is conserved when Στ_ext = 0.', domain: 'rotation', topicSlug: 'torque-angular-momentum', formSet: 'B' },
  { question: 'The moment of inertia of a solid sphere about its center is:', options: ['(2/5)MR²', '(1/2)MR²', 'MR²', '(2/3)MR²'], correctAnswer: 0, explanation: 'Standard result for a solid sphere: I = (2/5)MR².', domain: 'rotation', topicSlug: 'rotational-kinematics', formSet: 'both' },
  { question: 'In SHM, when velocity is zero the displacement is:', options: ['Maximum (at amplitude)', 'Zero', 'Half the amplitude', 'Undefined'], correctAnswer: 0, explanation: 'In SHM, velocity is zero at the endpoints (maximum displacement = amplitude).', domain: 'rotation', topicSlug: 'simple-harmonic-motion', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generateAPPhysicsCMechTest(form: 'A' | 'B'): APPhysicsCMechTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of AP_PHYSICS_C_MECH_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: APPhysicsCMechQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: AP_PHYSICS_C_MECH_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scoreAPPhysicsCMech(form: 'A' | 'B', questions: APPhysicsCMechQuestion[], answers: Record<number, number>): APPhysicsCMechResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  AP_PHYSICS_C_MECH_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: APPhysicsCMechDomainResult[] = AP_PHYSICS_C_MECH_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedAPScore = pct >= 85 ? 5 : pct >= 70 ? 4 : pct >= 55 ? 3 : pct >= 40 ? 2 : 1
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  const recommendedTopics: APPhysicsCMechRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = AP_PHYSICS_C_MECH_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
