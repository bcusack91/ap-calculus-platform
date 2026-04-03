/**
 * AP Physics 2 Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~33 questions each spanning all 7 AP
 * Physics 2 units. Weak areas map to topic slugs for review.
 */

export interface APPhysics2DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysics2Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPhysics2DiagnosticTestData {
  form: 'A' | 'B'
  questions: APPhysics2DiagnosticQuestion[]
  domains: APPhysics2Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysics2DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysics2RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APPhysics2DiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysics2DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysics2RecommendedTopic[]
}

const AP_PHYSICS2_DOMAINS: APPhysics2Domain[] = [
  { id: 'fluids', name: 'Fluids', topicSlugs: ['density-and-pressure', 'fluid-dynamics'], questionTarget: 5 },
  { id: 'thermodynamics', name: 'Thermodynamics', topicSlugs: ['heat-specific-heat', 'laws-of-thermodynamics'], questionTarget: 5 },
  { id: 'electric-force-field', name: 'Electric Force, Field & Potential', topicSlugs: ['electric-charge-coulombs-law', 'electric-fields-potential'], questionTarget: 5 },
  { id: 'electric-circuits', name: 'Electric Circuits', topicSlugs: ['series-parallel-circuits', 'series-parallel-circuits'], questionTarget: 5 },
  { id: 'magnetism', name: 'Magnetism & Electromagnetic Induction', topicSlugs: ['magnetic-fields-forces', 'electromagnetic-induction'], questionTarget: 5 },
  { id: 'optics', name: 'Geometric & Physical Optics', topicSlugs: ['reflection-refraction', 'interference-diffraction'], questionTarget: 4 },
  { id: 'modern-physics', name: 'Quantum, Atomic & Nuclear Physics', topicSlugs: ['photons-atomic-nuclear', 'photons-atomic-nuclear'], questionTarget: 4 },
]

export { AP_PHYSICS2_DOMAINS }

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
  // ---- Fluids ----
  { question: 'A cube of wood floats in water with 60% of its volume submerged. The density of the wood is:', options: ['400 kg/m³', '600 kg/m³', '800 kg/m³', '1000 kg/m³'], correctAnswer: 1, explanation: 'For floating objects, ρ_object/ρ_fluid = fraction submerged. ρ = 0.60 × 1000 = 600 kg/m³.', domain: 'fluids', topicSlug: 'density-and-pressure', formSet: 'A' },
  { question: 'Gauge pressure at a depth h in a fluid of density ρ is:', options: ['ρh', 'ρgh', 'ρg/h', 'P₀ + ρgh'], correctAnswer: 1, explanation: 'Gauge pressure = ρgh (pressure due to the fluid column above). Absolute pressure = P₀ + ρgh.', domain: 'fluids', topicSlug: 'density-and-pressure', formSet: 'A' },
  { question: 'According to the continuity equation, when a pipe narrows:', options: ['Flow speed decreases', 'Flow speed increases', 'Pressure increases', 'Volume flow rate changes'], correctAnswer: 1, explanation: 'A₁v₁ = A₂v₂. When area decreases, speed must increase to maintain constant volume flow rate.', domain: 'fluids', topicSlug: 'fluid-dynamics', formSet: 'A' },
  { question: 'Bernoulli\'s equation relates:', options: ['Force and acceleration in fluids', 'Pressure, speed, and height along a streamline for ideal flow', 'Viscosity and flow rate', 'Temperature and pressure'], correctAnswer: 1, explanation: 'Bernoulli: P + ½ρv² + ρgy = constant along a streamline (for incompressible, non-viscous flow).', domain: 'fluids', topicSlug: 'fluid-dynamics', formSet: 'B' },
  { question: 'Pascal\'s principle states that pressure applied to an enclosed fluid:', options: ['Decreases with depth', 'Is transmitted equally in all directions', 'Creates turbulence', 'Only acts downward'], correctAnswer: 1, explanation: 'Pascal\'s principle: pressure changes in an enclosed fluid are transmitted undiminished throughout the fluid.', domain: 'fluids', topicSlug: 'density-and-pressure', formSet: 'B' },
  { question: 'The buoyant force on an object equals:', options: ['The object\'s weight', 'The weight of fluid displaced', 'The pressure times the area', 'The density of the object times g'], correctAnswer: 1, explanation: 'Archimedes\' principle: buoyant force = weight of displaced fluid = ρ_fluid × V_displaced × g.', domain: 'fluids', topicSlug: 'density-and-pressure', formSet: 'both' },
  { question: 'In Bernoulli\'s equation, where fluid speed is greatest the pressure is:', options: ['Greatest', 'Lowest', 'Unchanged', 'Atmospheric'], correctAnswer: 1, explanation: 'Bernoulli\'s principle: higher speed corresponds to lower pressure (P + ½ρv² = constant at same height).', domain: 'fluids', topicSlug: 'fluid-dynamics', formSet: 'both' },
  { question: 'A hydraulic press has pistons of area 10 cm² and 100 cm². A 50 N force on the small piston produces what force on the large piston?', options: ['5 N', '50 N', '500 N', '5000 N'], correctAnswer: 2, explanation: 'By Pascal\'s principle: F₂ = F₁ × (A₂/A₁) = 50 × (100/10) = 500 N.', domain: 'fluids', topicSlug: 'density-and-pressure', formSet: 'B' },

  // ---- Thermodynamics ----
  { question: 'Heat transfer by conduction is driven by:', options: ['Temperature difference between objects in contact', 'Electromagnetic waves', 'Fluid motion', 'Pressure difference'], correctAnswer: 0, explanation: 'Conduction transfers thermal energy through direct contact due to a temperature gradient.', domain: 'thermodynamics', topicSlug: 'heat-specific-heat', formSet: 'A' },
  { question: 'In an isothermal process of an ideal gas:', options: ['Temperature changes at constant volume', 'Internal energy changes', 'Temperature remains constant and ΔU = 0', 'No work is done'], correctAnswer: 2, explanation: 'Isothermal: T = constant → ΔU = 0 for an ideal gas. Q = W (all heat goes to work or vice versa).', domain: 'thermodynamics', topicSlug: 'laws-of-thermodynamics', formSet: 'A' },
  { question: 'The second law of thermodynamics implies that:', options: ['Energy is always conserved', 'Entropy of an isolated system never decreases', 'Heat flows from cold to hot spontaneously', 'All processes are reversible'], correctAnswer: 1, explanation: 'The second law: entropy of an isolated system tends to increase or stay the same; it never spontaneously decreases.', domain: 'thermodynamics', topicSlug: 'laws-of-thermodynamics', formSet: 'A' },
  { question: 'Specific heat capacity is the amount of energy required to:', options: ['Change the state of 1 kg of a substance', 'Raise the temperature of 1 kg by 1°C', 'Melt one mole of a substance', 'Double the temperature of any mass'], correctAnswer: 1, explanation: 'Specific heat c: Q = mcΔT. It is the energy per unit mass per degree of temperature change.', domain: 'thermodynamics', topicSlug: 'heat-specific-heat', formSet: 'B' },
  { question: 'In an adiabatic process:', options: ['No heat is exchanged with the surroundings', 'Temperature is constant', 'Pressure is constant', 'Volume is constant'], correctAnswer: 0, explanation: 'Adiabatic: Q = 0. The system does not exchange heat. Changes in internal energy equal the negative of work done.', domain: 'thermodynamics', topicSlug: 'laws-of-thermodynamics', formSet: 'B' },
  { question: 'The efficiency of a Carnot engine operating between temperatures T_H and T_C is:', options: ['1 − T_H/T_C', '1 − T_C/T_H', 'T_C/T_H', 'T_H − T_C'], correctAnswer: 1, explanation: 'Carnot efficiency = 1 − T_C/T_H (temperatures in Kelvin). No engine can exceed this.', domain: 'thermodynamics', topicSlug: 'laws-of-thermodynamics', formSet: 'B' },
  { question: 'The first law of thermodynamics states:', options: ['ΔU = Q − W', 'Q = 0 in all processes', 'Entropy always increases', 'Internal energy depends only on volume'], correctAnswer: 0, explanation: 'First law: ΔU = Q − W. Internal energy change = heat added minus work done by the system.', domain: 'thermodynamics', topicSlug: 'laws-of-thermodynamics', formSet: 'both' },
  { question: 'During a phase change (e.g., melting), the temperature of a substance:', options: ['Increases rapidly', 'Decreases', 'Remains constant', 'Fluctuates'], correctAnswer: 2, explanation: 'During a phase change, added heat goes into breaking intermolecular bonds, not increasing temperature.', domain: 'thermodynamics', topicSlug: 'heat-specific-heat', formSet: 'both' },

  // ---- Electric Force, Field & Potential ----
  { question: 'Coulomb\'s law states that the electric force between two charges is proportional to:', options: ['The sum of the charges', 'The product of the charges divided by distance squared', 'The square of the distance', 'The difference of the charges'], correctAnswer: 1, explanation: 'F = kq₁q₂/r². Force is proportional to the product of charges and inversely proportional to distance squared.', domain: 'electric-force-field', topicSlug: 'electric-charge-coulombs-law', formSet: 'A' },
  { question: 'Electric field lines point:', options: ['From negative to positive charges', 'From positive to negative charges', 'In circles around charges', 'Perpendicular to the force on a test charge'], correctAnswer: 1, explanation: 'By convention, electric field lines originate on positive charges and terminate on negative charges.', domain: 'electric-force-field', topicSlug: 'electric-charge-coulombs-law', formSet: 'A' },
  { question: 'The electric potential due to a point charge q at distance r is:', options: ['kq/r²', 'kq/r', 'kq²/r', 'kqr'], correctAnswer: 1, explanation: 'V = kq/r. Potential is a scalar that falls off as 1/r (not 1/r² like the field).', domain: 'electric-force-field', topicSlug: 'electric-fields-potential', formSet: 'A' },
  { question: 'Two equal positive charges are placed 1 m apart. The electric field at the midpoint is:', options: ['Zero', 'Pointing left', 'Pointing right', 'Twice the field of one charge'], correctAnswer: 0, explanation: 'At the midpoint, the fields from each charge are equal in magnitude but opposite in direction, so they cancel.', domain: 'electric-force-field', topicSlug: 'electric-charge-coulombs-law', formSet: 'B' },
  { question: 'Electric potential energy of two charges q₁ and q₂ separated by distance r is:', options: ['kq₁q₂/r²', 'kq₁q₂/r', 'kq₁q₂r', 'q₁q₂/4πε₀r²'], correctAnswer: 1, explanation: 'U = kq₁q₂/r. Potential energy (like potential) falls off as 1/r.', domain: 'electric-force-field', topicSlug: 'electric-fields-potential', formSet: 'B' },
  { question: 'Equipotential surfaces are always:', options: ['Parallel to electric field lines', 'Perpendicular to electric field lines', 'Circular', 'At the same distance from all charges'], correctAnswer: 1, explanation: 'Equipotential surfaces are perpendicular to electric field lines. No work is done moving a charge along one.', domain: 'electric-force-field', topicSlug: 'electric-fields-potential', formSet: 'B' },
  { question: 'The electric field inside a conductor in electrostatic equilibrium is:', options: ['Maximum', 'Equal to the surface field', 'Zero', 'Proportional to the charge'], correctAnswer: 2, explanation: 'In electrostatic equilibrium, free charges arrange so the internal field is zero; all excess charge resides on the surface.', domain: 'electric-force-field', topicSlug: 'electric-charge-coulombs-law', formSet: 'both' },
  { question: 'If the distance between two charges is tripled, the electric force becomes:', options: ['1/3 as strong', '1/9 as strong', '3 times as strong', '9 times as strong'], correctAnswer: 1, explanation: 'F ∝ 1/r². Tripling r: F_new = F/(3²) = F/9.', domain: 'electric-force-field', topicSlug: 'electric-charge-coulombs-law', formSet: 'both' },

  // ---- Electric Circuits ----
  { question: 'In a series circuit, the current through each resistor is:', options: ['Different for each', 'The same through all', 'Zero', 'Proportional to resistance'], correctAnswer: 1, explanation: 'In series, there is only one path for current, so the same current flows through every component.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'A' },
  { question: 'The equivalent resistance of two 10 Ω resistors in parallel is:', options: ['20 Ω', '10 Ω', '5 Ω', '0.2 Ω'], correctAnswer: 2, explanation: '1/R_eq = 1/10 + 1/10 = 2/10 → R_eq = 5 Ω. Parallel resistance is always less than the smallest individual resistor.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'A' },
  { question: 'The energy stored in a capacitor is:', options: ['CV', '½CV', '½CV²', 'C²V'], correctAnswer: 2, explanation: 'Energy stored = ½CV² = ½QV = Q²/(2C).', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'A' },
  { question: 'Kirchhoff\'s junction rule is based on conservation of:', options: ['Energy', 'Charge', 'Momentum', 'Voltage'], correctAnswer: 1, explanation: 'The junction rule states that total current entering a node equals total current leaving — conservation of charge.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'B' },
  { question: 'When capacitors are connected in series, the total capacitance:', options: ['Increases', 'Decreases (less than the smallest)', 'Stays the same', 'Doubles'], correctAnswer: 1, explanation: '1/C_total = 1/C₁ + 1/C₂ + ... Series capacitance is always less than the smallest individual capacitor.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'B' },
  { question: 'Power dissipated by a resistor R carrying current I is:', options: ['IR', 'I²R', 'IR²', 'I/R'], correctAnswer: 1, explanation: 'P = I²R = IV = V²/R. Power is proportional to the square of the current times resistance.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'B' },
  { question: 'Ohm\'s law states:', options: ['V = IR', 'V = I/R', 'I = VR', 'R = IV'], correctAnswer: 0, explanation: 'Ohm\'s law: V = IR. Voltage across a resistor equals current times resistance.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'both' },
  { question: 'The time constant of an RC circuit is:', options: ['R/C', 'RC', 'R + C', '1/RC'], correctAnswer: 1, explanation: 'τ = RC. After one time constant, a charging capacitor reaches ~63% of its final voltage.', domain: 'electric-circuits', topicSlug: 'series-parallel-circuits', formSet: 'both' },

  // ---- Magnetism ----
  { question: 'The force on a charge q moving with velocity v in a magnetic field B is:', options: ['qvB (always)', 'qvB sin θ', 'qvB cos θ', 'qv/B'], correctAnswer: 1, explanation: 'F = qvB sin θ, where θ is the angle between v and B. Maximum force when v ⊥ B; zero when parallel.', domain: 'magnetism', topicSlug: 'magnetic-fields-forces', formSet: 'A' },
  { question: 'A current-carrying wire in a magnetic field experiences a force determined by:', options: ['F = BIL sin θ', 'F = BIL cos θ', 'F = BI/L', 'F = BL/I'], correctAnswer: 0, explanation: 'F = BIL sin θ (or F = IL × B). Force is maximum when the wire is perpendicular to B.', domain: 'magnetism', topicSlug: 'magnetic-fields-forces', formSet: 'A' },
  { question: 'Faraday\'s law states that the induced EMF is proportional to:', options: ['The magnetic flux', 'The rate of change of magnetic flux', 'The magnetic field strength', 'The current in the loop'], correctAnswer: 1, explanation: 'EMF = −dΦ_B/dt. The induced voltage equals the negative rate of change of magnetic flux (Faraday\'s law).', domain: 'magnetism', topicSlug: 'electromagnetic-induction', formSet: 'A' },
  { question: 'Lenz\'s law states that the direction of an induced current:', options: ['Is always clockwise', 'Opposes the change in flux that produced it', 'Is in the same direction as the external field', 'Is parallel to the wire'], correctAnswer: 1, explanation: 'Lenz\'s law: the induced current creates a magnetic field that opposes the change in flux causing the induction.', domain: 'magnetism', topicSlug: 'electromagnetic-induction', formSet: 'B' },
  { question: 'The magnetic field inside a solenoid is:', options: ['Zero', 'Proportional to the current and number of turns per length', 'Inversely proportional to the length', 'Dependent on the diameter'], correctAnswer: 1, explanation: 'B = μ₀nI, where n is the number of turns per unit length. The field is uniform inside an ideal solenoid.', domain: 'magnetism', topicSlug: 'magnetic-fields-forces', formSet: 'B' },
  { question: 'A charged particle moves parallel to a magnetic field. The magnetic force on it is:', options: ['Maximum', 'qvB', 'Zero', 'Equal to its weight'], correctAnswer: 2, explanation: 'F = qvB sin θ. When v is parallel to B, θ = 0° and sin 0° = 0, so the force is zero.', domain: 'magnetism', topicSlug: 'magnetic-fields-forces', formSet: 'both' },
  { question: 'An EMF can be induced in a loop by:', options: ['Only changing the magnetic field', 'Changing the area, magnetic field, or angle between them', 'Only rotating the loop', 'Keeping everything constant'], correctAnswer: 1, explanation: 'EMF = −dΦ/dt where Φ = BA cos θ. Changing B, A, or θ can induce an EMF.', domain: 'magnetism', topicSlug: 'electromagnetic-induction', formSet: 'both' },
  { question: 'The right-hand rule for a long straight current-carrying wire shows that the magnetic field:', options: ['Points along the wire', 'Forms concentric circles around the wire', 'Points away from the wire', 'Is zero everywhere'], correctAnswer: 1, explanation: 'The magnetic field around a long straight wire forms concentric circles; direction given by the right-hand rule.', domain: 'magnetism', topicSlug: 'magnetic-fields-forces', formSet: 'A' },

  // ---- Optics ----
  { question: 'Snell\'s law relates:', options: ['The speed of light to wavelength', 'The angles of incidence and refraction to the indices of refraction', 'The focal length to the object distance', 'Diffraction angle to slit width'], correctAnswer: 1, explanation: 'Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂. It relates angles and indices of refraction at a boundary.', domain: 'optics', topicSlug: 'reflection-refraction', formSet: 'A' },
  { question: 'Total internal reflection occurs when:', options: ['Light passes from a less dense to a denser medium', 'The angle of incidence exceeds the critical angle (going from denser to less dense medium)', 'Light hits a mirror', 'The index of refraction is 1'], correctAnswer: 1, explanation: 'Total internal reflection occurs at angles above the critical angle when light travels from higher to lower index medium.', domain: 'optics', topicSlug: 'reflection-refraction', formSet: 'A' },
  { question: 'In a double-slit experiment, increasing the slit separation:', options: ['Increases fringe spacing', 'Decreases fringe spacing', 'Has no effect', 'Eliminates the pattern'], correctAnswer: 1, explanation: 'Fringe spacing = λL/d. Increasing d (slit separation) decreases the spacing between bright fringes.', domain: 'optics', topicSlug: 'interference-diffraction', formSet: 'A' },
  { question: 'A converging lens produces a real, inverted image when the object is:', options: ['Inside the focal point', 'At the focal point', 'Beyond the focal point', 'At infinity only'], correctAnswer: 2, explanation: 'When an object is beyond the focal point of a converging lens, a real inverted image forms on the opposite side.', domain: 'optics', topicSlug: 'reflection-refraction', formSet: 'B' },
  { question: 'Constructive interference occurs when the path difference equals:', options: ['λ/4', '(n + ½)λ', 'nλ (where n is an integer)', 'Any random value'], correctAnswer: 2, explanation: 'Constructive interference: path difference = nλ (integer multiples of wavelength). Waves arrive in phase.', domain: 'optics', topicSlug: 'interference-diffraction', formSet: 'B' },
  { question: 'The thin lens equation is:', options: ['1/f = 1/d_o + 1/d_i', 'f = d_o × d_i', 'f = d_o + d_i', '1/f = d_o − d_i'], correctAnswer: 0, explanation: '1/f = 1/d_o + 1/d_i. Relates focal length, object distance, and image distance.', domain: 'optics', topicSlug: 'reflection-refraction', formSet: 'both' },
  { question: 'Single-slit diffraction produces a central maximum that is:', options: ['The narrowest bright band', 'Twice the width of other bright bands', 'The same width as all others', 'Not visible'], correctAnswer: 1, explanation: 'The central maximum in single-slit diffraction is twice as wide (and much brighter) than the secondary maxima.', domain: 'optics', topicSlug: 'interference-diffraction', formSet: 'both' },

  // ---- Modern Physics ----
  { question: 'In the photoelectric effect, increasing the frequency of light above the threshold:', options: ['Increases the number of electrons emitted', 'Increases the maximum kinetic energy of emitted electrons', 'Has no effect', 'Decreases the current'], correctAnswer: 1, explanation: 'KE_max = hf − φ. Higher frequency means more energy per photon, so ejected electrons have more kinetic energy.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'A' },
  { question: 'The work function (φ) of a metal represents:', options: ['The energy of the most energetic photon', 'The minimum energy needed to eject an electron from the surface', 'The kinetic energy of all photoelectrons', 'The frequency of incident light'], correctAnswer: 1, explanation: 'The work function is the minimum photon energy required to free an electron from the metal surface.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'A' },
  { question: 'In nuclear fission:', options: ['Small nuclei combine to form a larger one', 'A heavy nucleus splits into lighter nuclei, releasing energy', 'Electrons are ejected from the nucleus', 'No energy is released'], correctAnswer: 1, explanation: 'Fission: a heavy nucleus (e.g., U-235) splits into smaller fragments, releasing a large amount of energy.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'A' },
  { question: 'De Broglie\'s wavelength of a particle is given by:', options: ['λ = h/p', 'λ = hp', 'λ = p/h', 'λ = hf'], correctAnswer: 0, explanation: 'λ = h/p = h/(mv). All matter has a wave nature with wavelength inversely proportional to momentum.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'B' },
  { question: 'Alpha decay results in:', options: ['A decrease of 4 in mass number and 2 in atomic number', 'No change in mass number', 'An increase in atomic number by 1', 'Emission of a photon only'], correctAnswer: 0, explanation: 'Alpha particles are ⁴₂He nuclei. Emission reduces mass number by 4 and atomic number by 2.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'B' },
  { question: 'Beta-minus decay converts:', options: ['A proton into a neutron', 'A neutron into a proton, emitting an electron and antineutrino', 'An electron into a positron', 'A nucleus into a different element by emitting a He nucleus'], correctAnswer: 1, explanation: 'β⁻ decay: n → p + e⁻ + ν̄ₑ. The atomic number increases by 1; mass number stays the same.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'B' },
  { question: 'The energy of a photon is:', options: ['E = mc²', 'E = hf', 'E = ½mv²', 'E = hf²'], correctAnswer: 1, explanation: 'E = hf = hc/λ. Photon energy is proportional to frequency (and inversely proportional to wavelength).', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'both' },
  { question: 'The half-life of a radioactive isotope is the time for:', options: ['All atoms to decay', 'Half the atoms to decay', 'The activity to double', 'The mass to double'], correctAnswer: 1, explanation: 'Half-life is the time for half the radioactive nuclei in a sample to decay. After n half-lives, N = N₀/2ⁿ.', domain: 'modern-physics', topicSlug: 'photons-atomic-nuclear', formSet: 'both' },
]

export function generateAPPhysics2DiagnosticTest(form: 'A' | 'B'): APPhysics2DiagnosticTestData {
  const questions: APPhysics2DiagnosticQuestion[] = []
  for (const domain of AP_PHYSICS2_DOMAINS) {
    const pool = questionPool.filter(q => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'))
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    for (const q of shuffled.slice(0, domain.questionTarget)) {
      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })
    }
  }
  return { form, questions: questions.sort(() => Math.random() - 0.5), domains: AP_PHYSICS2_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 45 }
}

export function scoreAPPhysics2Diagnostic(form: 'A' | 'B', questions: APPhysics2DiagnosticQuestion[], answers: Record<number, number>): APPhysics2DiagnosticResults {
  const domainResults: APPhysics2DomainResult[] = AP_PHYSICS2_DOMAINS.map(domain => {
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

  const recommendedTopics: APPhysics2RecommendedTopic[] = []
  for (const wd of domainResults.filter(d => d.level === 'weak')) {
    const domainDef = AP_PHYSICS2_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs) { if (recommendedTopics.length < 5) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of domainResults.filter(d => d.level === 'moderate')) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PHYSICS2_DOMAINS.find(d => d.id === md.domainId)
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
  'density-and-pressure': 'Fluid Statics',
  'fluid-dynamics': 'Fluid Dynamics',
  'heat-specific-heat': 'Thermal Energy & Heat Transfer',
  'laws-of-thermodynamics': 'Laws of Thermodynamics',
  'electric-charge-coulombs-law': 'Coulomb\'s Law & Electric Field',
  'electric-fields-potential': 'Electric Potential & Energy',
  'series-parallel-circuits': 'DC Circuits',
  'series-parallel-circuits': 'Capacitors',
  'magnetic-fields-forces': 'Magnetic Fields & Forces',
  'electromagnetic-induction': 'Electromagnetic Induction',
  'reflection-refraction': 'Reflection & Refraction',
  'interference-diffraction': 'Interference & Diffraction',
  'photons-atomic-nuclear': 'Photoelectric Effect & Quantum',
  'photons-atomic-nuclear': 'Nuclear Physics',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
