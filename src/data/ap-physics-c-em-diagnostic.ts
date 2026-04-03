/**
 * AP Physics C: Electricity & Magnetism Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 5 core domains.
 */

export interface APPhysicsCEMQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysicsCEMDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPhysicsCEMTestData {
  form: 'A' | 'B'
  questions: APPhysicsCEMQuestion[]
  domains: APPhysicsCEMDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysicsCEMDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysicsCEMRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface APPhysicsCEMResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysicsCEMDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysicsCEMRecommendedTopic[]
}

const AP_PHYSICS_C_EM_DOMAINS: APPhysicsCEMDomain[] = [
  { id: 'electrostatics', name: 'Electrostatics', topicSlugs: ['physics-c-electric-field-coulomb', 'physics-c-electric-field-coulomb', 'physics-c-gauss-law'], questionTarget: 6 },
  { id: 'conductors-capacitors', name: 'Conductors, Capacitors & Dielectrics', topicSlugs: ['physics-c-capacitors-dielectrics', 'physics-c-capacitors-dielectrics', 'physics-c-electric-potential'], questionTarget: 6 },
  { id: 'electric-circuits', name: 'Electric Circuits', topicSlugs: ['physics-c-dc-circuits', 'physics-c-rc-circuits', 'physics-c-dc-circuits'], questionTarget: 6 },
  { id: 'magnetic-fields', name: 'Magnetic Fields', topicSlugs: ['physics-c-magnetic-field-sources', 'physics-c-magnetic-field-sources', 'physics-c-magnetic-forces'], questionTarget: 6 },
  { id: 'electromagnetism', name: 'Electromagnetism', topicSlugs: ['physics-c-faraday-lenz', 'physics-c-inductance-rl-circuits', 'physics-c-maxwell-equations'], questionTarget: 6 },
]

export { AP_PHYSICS_C_EM_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- Electrostatics ----
  { question: 'Coulomb\'s law force between two charges is proportional to:', options: ['1/r²', '1/r', 'r²', 'r'], correctAnswer: 0, explanation: 'F = kq₁q₂/r² — inverse square law.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'A' },
  { question: 'The electric field due to a point charge at distance r is:', options: ['kQ/r²', 'kQ/r', 'kQ²/r²', 'kQ²/r'], correctAnswer: 0, explanation: 'E = kQ/r² — Coulomb field of a point charge.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'A' },
  { question: 'Gauss\'s law relates the electric flux through a closed surface to:', options: ['The enclosed charge', 'The external charge', 'The surface area', 'The electric potential'], correctAnswer: 0, explanation: '∮ E·dA = Q_enc/ε₀.', domain: 'electrostatics', topicSlug: 'physics-c-gauss-law', formSet: 'A' },
  { question: 'The electric field inside a conducting sphere in electrostatic equilibrium is:', options: ['Zero', 'kQ/r²', 'Uniform', 'Maximum at center'], correctAnswer: 0, explanation: 'Charge resides on the surface; E = 0 inside by Gauss\'s law.', domain: 'electrostatics', topicSlug: 'physics-c-gauss-law', formSet: 'B' },
  { question: 'Two charges +Q and −Q separated by distance d create a:', options: ['Dipole', 'Monopole', 'Quadrupole', 'Null field'], correctAnswer: 0, explanation: 'A pair of equal and opposite charges is an electric dipole.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'B' },
  { question: 'The work done moving a charge in a closed loop in a conservative electric field is:', options: ['Zero', 'Positive', 'Negative', 'kQ/r'], correctAnswer: 0, explanation: 'Electrostatic field is conservative: ∮ E·dl = 0 → W = 0.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'B' },
  { question: 'Electric potential V at distance r from a point charge Q is:', options: ['kQ/r', 'kQ/r²', 'kQ²/r', 'kQr'], correctAnswer: 0, explanation: 'V = kQ/r — scalar quantity.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'both' },
  { question: 'The SI unit of electric field is:', options: ['N/C (or V/m)', 'C/m²', 'J/C', 'N·m²/C²'], correctAnswer: 0, explanation: 'Electric field E has units of newtons per coulomb or volts per meter.', domain: 'electrostatics', topicSlug: 'physics-c-electric-field-coulomb', formSet: 'both' },

  // ---- Conductors, Capacitors & Dielectrics ----
  { question: 'The capacitance of a parallel-plate capacitor is C = ε₀A/d. Doubling the plate separation d:', options: ['Halves the capacitance', 'Doubles the capacitance', 'Quadruples it', 'No change'], correctAnswer: 0, explanation: 'C = ε₀A/d → if d doubles, C halves.', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'A' },
  { question: 'Inserting a dielectric between capacitor plates:', options: ['Increases capacitance', 'Decreases capacitance', 'Has no effect', 'Decreases charge'], correctAnswer: 0, explanation: 'C → κC, where κ > 1 is the dielectric constant.', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'A' },
  { question: 'The energy stored in a capacitor is:', options: ['½CV²', 'CV', 'CV²', '½C²V'], correctAnswer: 0, explanation: 'U = ½CV² = ½Q²/C = ½QV.', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'A' },
  { question: 'Two capacitors C₁ and C₂ in series have equivalent capacitance:', options: ['C₁C₂/(C₁+C₂)', 'C₁+C₂', 'C₁C₂', '(C₁+C₂)/C₁C₂'], correctAnswer: 0, explanation: '1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁+C₂).', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'B' },
  { question: 'On a charged conductor, charge accumulates most at:', options: ['Points/sharp edges', 'Flat surfaces', 'The center', 'Uniformly everywhere'], correctAnswer: 0, explanation: 'Charge density is highest at points of greatest curvature (sharp edges).', domain: 'conductors-capacitors', topicSlug: 'physics-c-electric-potential', formSet: 'B' },
  { question: 'The dielectric constant κ of a vacuum is:', options: ['1', '0', '∞', '8.85 × 10⁻¹²'], correctAnswer: 0, explanation: 'By definition, κ = 1 for vacuum (free space).', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'B' },
  { question: 'Two capacitors in parallel have equivalent capacitance:', options: ['C₁ + C₂', 'C₁C₂/(C₁+C₂)', '1/(C₁+C₂)', 'C₁ − C₂'], correctAnswer: 0, explanation: 'Parallel: C_eq = C₁ + C₂.', domain: 'conductors-capacitors', topicSlug: 'physics-c-capacitors-dielectrics', formSet: 'both' },
  { question: 'The electric field just outside a conductor surface is:', options: ['σ/ε₀ (perpendicular)', 'Zero', 'σ/2ε₀', 'Tangential'], correctAnswer: 0, explanation: 'E = σ/ε₀ directed normal to the surface.', domain: 'conductors-capacitors', topicSlug: 'physics-c-electric-potential', formSet: 'both' },

  // ---- Electric Circuits ----
  { question: 'The equivalent resistance of two 6 Ω resistors in parallel is:', options: ['3 Ω', '12 Ω', '6 Ω', '0.33 Ω'], correctAnswer: 0, explanation: '1/R = 1/6 + 1/6 = 1/3 → R = 3 Ω.', domain: 'electric-circuits', topicSlug: 'physics-c-dc-circuits', formSet: 'A' },
  { question: 'In an RC circuit charging from zero, the voltage across the capacitor at t = RC is approximately:', options: ['63.2% of V₀', '36.8% of V₀', '50% of V₀', '100% of V₀'], correctAnswer: 0, explanation: 'V(t) = V₀(1 − e^(−t/RC)). At t = RC: V = V₀(1 − 1/e) ≈ 0.632 V₀.', domain: 'electric-circuits', topicSlug: 'physics-c-rc-circuits', formSet: 'A' },
  { question: 'Power dissipated in a resistor carrying current I is:', options: ['I²R', 'IR²', 'I/R', 'R/I²'], correctAnswer: 0, explanation: 'P = I²R = V²/R = IV.', domain: 'electric-circuits', topicSlug: 'physics-c-dc-circuits', formSet: 'A' },
  { question: 'Kirchhoff\'s junction rule is based on conservation of:', options: ['Charge', 'Energy', 'Momentum', 'Mass'], correctAnswer: 0, explanation: 'Conservation of charge: ΣI_in = ΣI_out at any junction.', domain: 'electric-circuits', topicSlug: 'physics-c-dc-circuits', formSet: 'B' },
  { question: 'The time constant τ of an RC circuit is:', options: ['RC', 'R/C', 'C/R', '√(RC)'], correctAnswer: 0, explanation: 'τ = RC — determines charging/discharging rate.', domain: 'electric-circuits', topicSlug: 'physics-c-rc-circuits', formSet: 'B' },
  { question: 'Kirchhoff\'s loop rule is based on conservation of:', options: ['Energy', 'Charge', 'Momentum', 'Current'], correctAnswer: 0, explanation: 'The loop rule: ΣV = 0 around a closed loop — conservation of energy.', domain: 'electric-circuits', topicSlug: 'physics-c-dc-circuits', formSet: 'B' },
  { question: 'Ohm\'s law states:', options: ['V = IR', 'V = I/R', 'V = I²R', 'V = R/I'], correctAnswer: 0, explanation: 'V = IR — voltage equals current times resistance.', domain: 'electric-circuits', topicSlug: 'physics-c-dc-circuits', formSet: 'both' },
  { question: 'After 5 time constants, a charging RC capacitor reaches approximately:', options: ['99.3% of V₀', '63.2% of V₀', '86.5% of V₀', '95% of V₀'], correctAnswer: 0, explanation: 'V = V₀(1 − e⁻⁵) ≈ 0.993 V₀ → 99.3%.', domain: 'electric-circuits', topicSlug: 'physics-c-rc-circuits', formSet: 'both' },

  // ---- Magnetic Fields ----
  { question: 'The magnetic force on a charge q moving with velocity v in field B is:', options: ['qv × B', 'qvB', 'qB/v', 'qv/B'], correctAnswer: 0, explanation: 'F = qv × B — cross product gives direction perpendicular to both v and B.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-forces', formSet: 'A' },
  { question: 'The magnetic field at distance r from a long straight wire carrying current I is (per Ampère\'s law):', options: ['μ₀I/(2πr)', 'μ₀I/r', 'μ₀I/(4πr²)', 'μ₀I/r²'], correctAnswer: 0, explanation: 'B = μ₀I/(2πr) from Ampère\'s law.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-field-sources', formSet: 'A' },
  { question: 'The Biot-Savart law gives the magnetic field contribution from:', options: ['A current element', 'A point charge at rest', 'A magnetic monopole', 'An electric field'], correctAnswer: 0, explanation: 'dB = (μ₀/4π)(Idl × r̂)/r² — field from a current element.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-field-sources', formSet: 'A' },
  { question: 'A charged particle moving perpendicular to a uniform B field follows:', options: ['A circular path', 'A straight line', 'A parabola', 'A spiral'], correctAnswer: 0, explanation: 'F = qvB provides centripetal force → circular motion with r = mv/(qB).', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-forces', formSet: 'B' },
  { question: 'The magnetic field inside a solenoid with n turns per unit length and current I is:', options: ['μ₀nI', 'μ₀NI', 'μ₀I/(2πr)', 'μ₀NI/L²'], correctAnswer: 0, explanation: 'B = μ₀nI — uniform field inside a long solenoid.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-field-sources', formSet: 'B' },
  { question: 'The force between two parallel wires carrying current in the same direction is:', options: ['Attractive', 'Repulsive', 'Zero', 'Oscillating'], correctAnswer: 0, explanation: 'Same-direction currents attract; opposite-direction currents repel.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-forces', formSet: 'B' },
  { question: 'The magnetic force on a stationary charge is:', options: ['Zero', 'Maximum', 'qB', 'Depends on B'], correctAnswer: 0, explanation: 'F = qv × B. If v = 0, then F = 0.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-forces', formSet: 'both' },
  { question: 'Ampère\'s law (in integral form, without displacement current) is:', options: ['∮ B·dl = μ₀I_enc', '∮ E·dA = Q/ε₀', '∮ B·dA = 0', '∇ × E = −∂B/∂t'], correctAnswer: 0, explanation: '∮ B·dl = μ₀I_enc — circulation of B equals μ₀ times enclosed current.', domain: 'magnetic-fields', topicSlug: 'physics-c-magnetic-field-sources', formSet: 'both' },

  // ---- Electromagnetism ----
  { question: 'Faraday\'s law states that the induced EMF is equal to:', options: ['−dΦ_B/dt', 'dΦ_E/dt', 'ΦB/t', 'BIL'], correctAnswer: 0, explanation: 'ε = −dΦ_B/dt — rate of change of magnetic flux.', domain: 'electromagnetism', topicSlug: 'physics-c-faraday-lenz', formSet: 'A' },
  { question: 'The self-inductance of a solenoid with N turns, length l, area A is:', options: ['μ₀N²A/l', 'μ₀NA/l', 'μ₀N²l/A', 'μ₀NIA'], correctAnswer: 0, explanation: 'L = μ₀N²A/l = μ₀n²Al.', domain: 'electromagnetism', topicSlug: 'physics-c-inductance-rl-circuits', formSet: 'A' },
  { question: 'Lenz\'s law states that the induced current opposes:', options: ['The change in flux that causes it', 'The existing flux', 'The current direction', 'The applied voltage'], correctAnswer: 0, explanation: 'Lenz\'s law: induced EMF opposes the change in magnetic flux producing it.', domain: 'electromagnetism', topicSlug: 'physics-c-faraday-lenz', formSet: 'A' },
  { question: 'The energy stored in an inductor carrying current I is:', options: ['½LI²', 'LI', 'LI²', '½L²I'], correctAnswer: 0, explanation: 'U = ½LI² — analogous to ½CV² for a capacitor.', domain: 'electromagnetism', topicSlug: 'physics-c-inductance-rl-circuits', formSet: 'B' },
  { question: 'Maxwell\'s addition to Ampère\'s law is the:', options: ['Displacement current', 'Conduction current', 'Magnetic monopole', 'Magnetic flux'], correctAnswer: 0, explanation: 'Maxwell added ε₀(dΦ_E/dt) — the displacement current term.', domain: 'electromagnetism', topicSlug: 'physics-c-maxwell-equations', formSet: 'B' },
  { question: 'A changing magnetic field induces:', options: ['An electric field', 'A gravitational field', 'A static charge', 'No field'], correctAnswer: 0, explanation: 'Faraday\'s law: ∇ × E = −∂B/∂t — a time-varying B creates E.', domain: 'electromagnetism', topicSlug: 'physics-c-faraday-lenz', formSet: 'B' },
  { question: 'The time constant of an LR circuit is:', options: ['L/R', 'LR', 'R/L', '√(LR)'], correctAnswer: 0, explanation: 'τ = L/R for an inductor-resistor circuit.', domain: 'electromagnetism', topicSlug: 'physics-c-inductance-rl-circuits', formSet: 'both' },
  { question: 'The number of Maxwell\'s equations is:', options: ['4', '2', '3', '6'], correctAnswer: 0, explanation: 'There are 4 Maxwell\'s equations: Gauss (E), Gauss (B), Faraday, Ampère-Maxwell.', domain: 'electromagnetism', topicSlug: 'physics-c-maxwell-equations', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generateAPPhysicsCEMTest(form: 'A' | 'B'): APPhysicsCEMTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of AP_PHYSICS_C_EM_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: APPhysicsCEMQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: AP_PHYSICS_C_EM_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 40 }
}

export function scoreAPPhysicsCEM(form: 'A' | 'B', questions: APPhysicsCEMQuestion[], answers: Record<number, number>): APPhysicsCEMResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  AP_PHYSICS_C_EM_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: APPhysicsCEMDomainResult[] = AP_PHYSICS_C_EM_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedAPScore = pct >= 85 ? 5 : pct >= 70 ? 4 : pct >= 55 ? 3 : pct >= 40 ? 2 : 1
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  const recommendedTopics: APPhysicsCEMRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = AP_PHYSICS_C_EM_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
