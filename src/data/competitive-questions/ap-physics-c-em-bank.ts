export interface ApPhysicsCEMQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: ApPhysicsCEMQuestion[] = [
  // ── physics-c-electric-field-coulomb ───────────────────────────
  { id: 1, question: 'The electric field due to a point charge Q at distance r is:', options: ['E = kQ/r', 'E = kQ/r²', 'E = kQ²/r²', 'E = kQr'], correctAnswer: 1, explanation: 'E = kQ/r² = Q/(4πε₀r²), radially outward for positive Q.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 2, question: 'The electric field inside a uniformly charged conducting sphere is:', options: ['kQ/R²', 'kQ/r²', 'Zero', 'kQr/R³'], correctAnswer: 2, explanation: 'Inside a conductor in electrostatic equilibrium, E = 0.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 3, question: 'The superposition principle for electric fields states:', options: ['Fields from multiple charges add as scalars', 'Fields from multiple charges add as vectors', 'Only the nearest charge matters', 'Fields cancel out'], correctAnswer: 1, explanation: 'The total electric field is the vector sum of fields from each individual charge.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 4, question: 'Two equal positive charges are on the x-axis at ±d. At the origin, the net E field is:', options: ['2kQ/d² to the right', '2kQ/d² to the left', 'Zero', 'kQ/d² upward'], correctAnswer: 2, explanation: 'By symmetry, the fields from each charge are equal and opposite at the origin → E = 0.', difficulty: 'medium', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 5, question: 'The electric field of an infinite line charge (linear charge density λ) at distance r is:', options: ['E = λ/(2πε₀r)', 'E = λ/(4πε₀r²)', 'E = λr/(2ε₀)', 'E = λ/(ε₀r²)'], correctAnswer: 0, explanation: 'By Gauss\'s law: E = λ/(2πε₀r) for an infinite line charge.', difficulty: 'medium', topicSlug: 'physics-c-electric-field-coulomb' },

  // ── physics-c-gauss-law ───────────────────────────────────────
  { id: 6, question: 'Gauss\'s law states:', options: ['∮E · dA = Q_enc/ε₀', '∮E · dA = Q_enc × ε₀', '∮E · dA = 0 always', '∮B · dA = Q_enc/ε₀'], correctAnswer: 0, explanation: 'Gauss\'s law: ∮E · dA = Q_enc/ε₀. Electric flux through a closed surface = enclosed charge / ε₀.', difficulty: 'easy', topicSlug: 'physics-c-gauss-law' },
  { id: 7, question: 'The electric flux through a closed surface enclosing no charge is:', options: ['Infinite', 'ε₀', 'Zero', 'Depends on surface shape'], correctAnswer: 2, explanation: 'If Q_enc = 0, then Φ_E = Q_enc/ε₀ = 0.', difficulty: 'easy', topicSlug: 'physics-c-gauss-law' },
  { id: 8, question: 'For a uniformly charged insulating sphere (radius R), the field at r < R is:', options: ['kQ/R²', 'kQ/r²', 'kQr/R³', 'Zero'], correctAnswer: 2, explanation: 'Inside a uniform sphere: E = kQr/R³ (linearly increasing with r).', difficulty: 'medium', topicSlug: 'physics-c-gauss-law' },
  { id: 9, question: 'The ideal Gaussian surface for a point charge is a:', options: ['Cube', 'Cylinder', 'Sphere centered on the charge', 'Any surface works equally well'], correctAnswer: 2, explanation: 'A concentric sphere exploits the symmetry: E is constant on the surface and perpendicular to it.', difficulty: 'easy', topicSlug: 'physics-c-gauss-law' },
  { id: 10, question: 'The electric field just outside a conducting surface with surface charge density σ is:', options: ['σ/ε₀', 'σ/(2ε₀)', '2σ/ε₀', 'σε₀'], correctAnswer: 0, explanation: 'E = σ/ε₀ just outside a conductor (by Gauss\'s law with pillbox surface).', difficulty: 'medium', topicSlug: 'physics-c-gauss-law' },

  // ── physics-c-electric-potential ───────────────────────────────
  { id: 11, question: 'The potential due to a point charge Q at distance r is:', options: ['V = kQ/r²', 'V = kQ/r', 'V = kQr', 'V = kQ²/r'], correctAnswer: 1, explanation: 'V = kQ/r. Potential is a scalar.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 12, question: 'The relationship between E and V is:', options: ['E = dV/dr', 'E = −dV/dr (or E = −∇V)', 'V = Ed always', 'E = V/r'], correctAnswer: 1, explanation: 'E = −dV/dr in 1D, or E = −∇V in general. Field points from high to low potential.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 13, question: 'The potential energy of two point charges is:', options: ['U = kq₁q₂/r', 'U = kq₁q₂/r²', 'U = −kq₁q₂/r', 'U = kq₁q₂r'], correctAnswer: 0, explanation: 'U = kq₁q₂/r. Positive for like charges (repulsive), negative for unlike (attractive).', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 14, question: 'Equipotential surfaces are:', options: ['Always parallel to E-field lines', 'Always perpendicular to E-field lines', 'Always planar', 'Always spherical'], correctAnswer: 1, explanation: 'Equipotential surfaces are perpendicular to electric field lines.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 15, question: 'The potential inside a conducting sphere (charge Q, radius R) is:', options: ['kQ/R (constant)', 'kQ/r (varies with r)', 'Zero', 'kQr/R²'], correctAnswer: 0, explanation: 'Inside a conductor, V = kQ/R = constant (same as the surface value).', difficulty: 'medium', topicSlug: 'physics-c-electric-potential' },

  // ── gauss-law-applications ────────────────────────────────────
  { id: 16, question: 'The electric field between two infinite parallel plates with surface charge ±σ is:', options: ['σ/ε₀', 'σ/(2ε₀)', '2σ/ε₀', 'Zero'], correctAnswer: 0, explanation: 'Between the plates, fields from each add: E = σ/ε₀.', difficulty: 'medium', topicSlug: 'gauss-law-applications' },
  { id: 17, question: 'Outside both plates of a parallel plate capacitor, the electric field is:', options: ['σ/ε₀', 'σ/(2ε₀)', 'Zero (fields cancel)', '2σ/ε₀'], correctAnswer: 2, explanation: 'Outside the plates, the fields from each plate are equal and opposite → E = 0.', difficulty: 'medium', topicSlug: 'gauss-law-applications' },
  { id: 18, question: 'The electric field of an infinite plane of charge (surface density σ) is:', options: ['σ/ε₀', 'σ/(2ε₀)', '2σ/ε₀', 'σε₀'], correctAnswer: 1, explanation: 'By Gauss\'s law with a pillbox: E = σ/(2ε₀), uniform on each side.', difficulty: 'medium', topicSlug: 'gauss-law-applications' },
  { id: 19, question: 'A coaxial cable has inner radius a and outer radius b. Between them, for a line charge λ:', options: ['E = λ/(2πε₀r)', 'E = λ/(4πε₀r²)', 'E = 0', 'E = λ/(ε₀r)'], correctAnswer: 0, explanation: 'Using a cylindrical Gaussian surface: E(2πrL) = λL/ε₀ → E = λ/(2πε₀r).', difficulty: 'hard', topicSlug: 'gauss-law-applications' },
  { id: 20, question: 'Inside a spherical shell of charge, the electric field is:', options: ['kQ/r²', 'kQ/R²', 'Zero', 'Depends on position'], correctAnswer: 2, explanation: 'Shell theorem: E = 0 everywhere inside a uniformly charged spherical shell.', difficulty: 'easy', topicSlug: 'gauss-law-applications' },

  // ── physics-c-capacitors-dielectrics ───────────────────────────
  { id: 21, question: 'Capacitance of a parallel plate capacitor is:', options: ['C = ε₀A/d', 'C = ε₀d/A', 'C = A/(ε₀d)', 'C = ε₀Ad'], correctAnswer: 0, explanation: 'C = ε₀A/d, where A is plate area and d is separation.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 22, question: 'Energy stored in a capacitor is:', options: ['U = CV', 'U = ½CV²', 'U = CV²', 'U = C/V'], correctAnswer: 1, explanation: 'U = ½CV² = ½Q²/C = ½QV.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 23, question: 'Inserting a dielectric (κ > 1) into a capacitor at constant voltage:', options: ['Decreases capacitance', 'Increases capacitance', 'Does not change capacitance', 'Decreases charge'], correctAnswer: 1, explanation: 'C = κε₀A/d. Dielectric increases C by factor κ.', difficulty: 'medium', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 24, question: 'Two capacitors in series: 1/C_total =', options: ['C₁ + C₂', '1/C₁ + 1/C₂', 'C₁C₂', '(C₁ + C₂)/2'], correctAnswer: 1, explanation: 'Series capacitors: 1/C_total = 1/C₁ + 1/C₂.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 25, question: 'Two 6 μF capacitors in parallel give a total capacitance of:', options: ['3 μF', '6 μF', '12 μF', '36 μF'], correctAnswer: 2, explanation: 'Parallel: C_total = C₁ + C₂ = 6 + 6 = 12 μF.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },

  // ── physics-c-dc-circuits ─────────────────────────────────────
  { id: 26, question: 'In a DC circuit, resistors in series have the same:', options: ['Voltage', 'Current', 'Power', 'Resistance'], correctAnswer: 1, explanation: 'Series components carry the same current.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 27, question: 'The time constant of an RC circuit is:', options: ['τ = RC', 'τ = R/C', 'τ = C/R', 'τ = R²C'], correctAnswer: 0, explanation: 'τ = RC. After one time constant, charge reaches ~63% of final value.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 28, question: 'Power dissipated by a 100 Ω resistor carrying 2 A is:', options: ['200 W', '400 W', '50 W', '100 W'], correctAnswer: 1, explanation: 'P = I²R = 4 × 100 = 400 W.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 29, question: 'A battery with EMF ε and internal resistance r delivers current I = ', options: ['ε/R', 'ε/(R+r)', 'ε/r', '(ε−IR)/r'], correctAnswer: 1, explanation: 'I = ε/(R+r), where R is external resistance.', difficulty: 'medium', topicSlug: 'physics-c-dc-circuits' },
  { id: 30, question: 'Kirchhoff\'s loop rule is based on:', options: ['Conservation of charge', 'Conservation of energy', 'Ohm\'s law', 'Faraday\'s law'], correctAnswer: 1, explanation: 'KVL: the sum of voltage changes around any closed loop = 0 (energy conservation).', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },

  // ── physics-c-rc-circuits / rc-circuits ───────────────────────
  { id: 31, question: 'During charging of an RC circuit, charge on the capacitor is:', options: ['Q(t) = Q_max(1 − e^(−t/RC))', 'Q(t) = Q_max e^(−t/RC)', 'Q(t) = Q_max t', 'Q(t) = Q_max'], correctAnswer: 0, explanation: 'Charging: Q(t) = Cε(1 − e^(−t/RC)).', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 32, question: 'During discharging, the voltage across the capacitor is:', options: ['V(t) = V₀(1 − e^(−t/RC))', 'V(t) = V₀ e^(−t/RC)', 'V(t) = constant', 'V(t) = V₀t/RC'], correctAnswer: 1, explanation: 'Discharging: V(t) = V₀e^(−t/RC) (exponential decay).', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 33, question: 'After 5 time constants (5τ), a charging capacitor has reached approximately:', options: ['63%', '87%', '95%', '99%'], correctAnswer: 3, explanation: '1 − e^(−5) ≈ 0.993 ≈ 99%. Effectively fully charged.', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 34, question: 'The current in a charging RC circuit at t = 0 is:', options: ['0', 'ε/R (maximum)', 'ε/C', 'Infinite'], correctAnswer: 1, explanation: 'At t = 0, the uncharged capacitor acts like a short: I₀ = ε/R.', difficulty: 'easy', topicSlug: 'rc-circuits' },
  { id: 35, question: 'In an RC circuit with R = 1 kΩ and C = 1 μF, the time constant is:', options: ['1 ms', '1 μs', '1 s', '0.001 μs'], correctAnswer: 0, explanation: 'τ = RC = 1000 × 10⁻⁶ = 10⁻³ s = 1 ms.', difficulty: 'easy', topicSlug: 'rc-circuits' },

  // ── physics-c-magnetic-forces ──────────────────────────────────
  { id: 36, question: 'The force on a charge q moving with velocity v in a magnetic field B is:', options: ['F = qvB', 'F = qv × B', 'F = qv · B', 'F = qB/v'], correctAnswer: 1, explanation: 'F = qv × B (cross product). Magnitude: F = qvB sin θ.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },
  { id: 37, question: 'A charged particle moves in a circle in a uniform magnetic field. The radius is:', options: ['r = mv/(qB)', 'r = qB/(mv)', 'r = mqB/v', 'r = mv²/(qB)'], correctAnswer: 0, explanation: 'Set qvB = mv²/r → r = mv/(qB).', difficulty: 'medium', topicSlug: 'physics-c-magnetic-forces' },
  { id: 38, question: 'The force on a straight current-carrying wire in a magnetic field is:', options: ['F = IL × B', 'F = ILB always', 'F = BL/I', 'F = I/BL'], correctAnswer: 0, explanation: 'F = IL × B. Magnitude: F = BIL sin θ.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },
  { id: 39, question: 'A velocity selector uses crossed E and B fields. Particles pass through when:', options: ['v = E/B', 'v = B/E', 'v = EB', 'v = E²/B'], correctAnswer: 0, explanation: 'Electric and magnetic forces balance: qE = qvB → v = E/B.', difficulty: 'medium', topicSlug: 'physics-c-magnetic-forces' },
  { id: 40, question: 'The magnetic force does no work on a charged particle because:', options: ['B = 0 inside the particle', 'The force is always perpendicular to velocity', 'Magnetic fields carry no energy', 'The particle is neutral'], correctAnswer: 1, explanation: 'F ⊥ v always → W = ∫F · ds = 0. Speed and KE don\'t change.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },

  // ── physics-c-magnetic-field-sources ───────────────────────────
  { id: 41, question: 'The Biot-Savart law gives the field from a current element dℓ as:', options: ['dB = (μ₀/4π)(Idℓ × r̂)/r²', 'dB = μ₀Idℓ/r', 'dB = Idℓ/r²', 'dB = μ₀Ir/dℓ'], correctAnswer: 0, explanation: 'Biot-Savart: dB = (μ₀/4π)(Idℓ × r̂)/r².', difficulty: 'medium', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 42, question: 'The magnetic field at the center of a circular loop of radius R carrying current I is:', options: ['B = μ₀I/(2R)', 'B = μ₀I/(2πR)', 'B = μ₀IR²', 'B = μ₀I/R²'], correctAnswer: 0, explanation: 'B = μ₀I/(2R) at the center of a current loop.', difficulty: 'medium', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 43, question: 'Ampère\'s law states:', options: ['∮B · dℓ = μ₀I_enc', '∮B · dA = μ₀I_enc', '∮E · dℓ = −dΦ_B/dt', 'B = μ₀nI'], correctAnswer: 0, explanation: '∮B · dℓ = μ₀I_enc (line integral around a closed loop).', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 44, question: 'The magnetic field inside a solenoid (n turns/length, current I) is:', options: ['B = μ₀I', 'B = μ₀nI', 'B = μ₀NI', 'B = μ₀I/(2πr)'], correctAnswer: 1, explanation: 'B = μ₀nI inside an ideal solenoid (uniform, along the axis).', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 45, question: 'The magnetic field at distance r from a long straight wire is:', options: ['B = μ₀I/(2πr)', 'B = μ₀I/(4πr²)', 'B = μ₀Ir', 'B = μ₀I/r²'], correctAnswer: 0, explanation: 'By Ampère\'s law: B(2πr) = μ₀I → B = μ₀I/(2πr).', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },

  // ── physics-c-faraday-lenz ────────────────────────────────────
  { id: 46, question: 'Faraday\'s law: EMF = ', options: ['−dΦ_B/dt', 'dΦ_B/dt', 'Φ_B × t', 'Φ_B / I'], correctAnswer: 0, explanation: 'EMF = −dΦ_B/dt. The negative sign reflects Lenz\'s law.', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 47, question: 'The magnetic flux through a loop of area A in a uniform field B at angle θ to the normal is:', options: ['Φ = BA sin θ', 'Φ = BA cos θ', 'Φ = BA', 'Φ = B/A cos θ'], correctAnswer: 1, explanation: 'Φ = BA cos θ (θ between B and the area normal).', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 48, question: 'A motional EMF is generated when a conductor moves through a magnetic field. EMF = ', options: ['BLv', 'BL/v', 'Bv/L', 'B²Lv'], correctAnswer: 0, explanation: 'EMF = BLv for a rod of length L moving at speed v perpendicular to B.', difficulty: 'medium', topicSlug: 'physics-c-faraday-lenz' },
  { id: 49, question: 'Lenz\'s law implies that induced currents always:', options: ['Flow clockwise', 'Oppose the change in flux that caused them', 'Increase the flux', 'Flow in the same direction as B'], correctAnswer: 1, explanation: 'Lenz\'s law: the induced current opposes the change in magnetic flux.', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 50, question: 'If the flux through a coil of N turns changes, the total EMF is:', options: ['−dΦ/dt', '−NdΦ/dt', 'NΦ/t', '−Φ/(Nt)'], correctAnswer: 1, explanation: 'For N turns: EMF = −N dΦ/dt.', difficulty: 'medium', topicSlug: 'physics-c-faraday-lenz' },

  // ── physics-c-inductance-rl-circuits ───────────────────────────
  { id: 51, question: 'Self-inductance L of a solenoid is:', options: ['L = μ₀n²Aℓ', 'L = μ₀nA', 'L = μ₀nI', 'L = μ₀N²/ℓA'], correctAnswer: 0, explanation: 'L = μ₀n²Aℓ = μ₀N²A/ℓ (for a solenoid of n turns/length, area A, length ℓ).', difficulty: 'medium', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 52, question: 'The time constant of an RL circuit is:', options: ['τ = L/R', 'τ = LR', 'τ = R/L', 'τ = √(L/R)'], correctAnswer: 0, explanation: 'τ = L/R for an RL circuit.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 53, question: 'Energy stored in an inductor is:', options: ['U = LI', 'U = ½LI²', 'U = LI²', 'U = L²I/2'], correctAnswer: 1, explanation: 'U = ½LI² (analogous to ½CV² for a capacitor).', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 54, question: 'The EMF across an inductor is:', options: ['V = LI', 'V = L dI/dt', 'V = −L dI/dt', 'V = LI²/2'], correctAnswer: 2, explanation: 'V_L = −L dI/dt (opposes change in current).', difficulty: 'medium', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 55, question: 'In an RL circuit with ε and R, the final steady-state current is:', options: ['ε/L', 'ε/R', 'ε/(R+L)', 'εR/L'], correctAnswer: 1, explanation: 'At steady state, dI/dt = 0, so the inductor acts like a wire: I = ε/R.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },

  // ── physics-c-maxwell-equations ────────────────────────────────
  { id: 56, question: 'Maxwell added the displacement current term to:', options: ['Gauss\'s law', 'Faraday\'s law', 'Ampère\'s law', 'Gauss\'s law for magnetism'], correctAnswer: 2, explanation: 'Maxwell added ε₀ dΦ_E/dt (displacement current) to Ampère\'s law.', difficulty: 'medium', topicSlug: 'physics-c-maxwell-equations' },
  { id: 57, question: 'Gauss\'s law for magnetism states:', options: ['∮B · dA = μ₀I', '∮B · dA = 0', '∮E · dA = 0', '∮B · dℓ = 0'], correctAnswer: 1, explanation: '∮B · dA = 0 means there are no magnetic monopoles.', difficulty: 'easy', topicSlug: 'physics-c-maxwell-equations' },
  { id: 58, question: 'The number of Maxwell\'s equations is:', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'There are 4 Maxwell\'s equations: Gauss (E), Gauss (B), Faraday, Ampère-Maxwell.', difficulty: 'easy', topicSlug: 'physics-c-maxwell-equations' },
  { id: 59, question: 'The displacement current density is:', options: ['J_d = ε₀ dE/dt', 'J_d = μ₀ dB/dt', 'J_d = σE', 'J_d = I/A'], correctAnswer: 0, explanation: 'J_d = ε₀ ∂E/∂t. The displacement current ID = ε₀ dΦ_E/dt.', difficulty: 'hard', topicSlug: 'physics-c-maxwell-equations' },
  { id: 60, question: 'Maxwell\'s equations predict that electromagnetic waves travel at:', options: ['c = 1/√(μ₀ε₀)', 'c = μ₀ε₀', 'c = √(μ₀/ε₀)', 'c = ε₀/μ₀'], correctAnswer: 0, explanation: 'c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s.', difficulty: 'medium', topicSlug: 'physics-c-maxwell-equations' },

  // ── physics-c-electromagnetic-waves ────────────────────────────
  { id: 61, question: 'In an electromagnetic wave, E and B are:', options: ['Parallel to each other', 'Perpendicular to each other and to the direction of propagation', 'Perpendicular to each other but parallel to propagation', 'In phase and parallel'], correctAnswer: 1, explanation: 'EM waves are transverse: E ⊥ B ⊥ direction of propagation.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 62, question: 'The relationship between E and B magnitudes in an EM wave is:', options: ['E = cB', 'E = B/c', 'E = B', 'E = c²B'], correctAnswer: 0, explanation: 'E = cB at all points in an electromagnetic wave.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 63, question: 'The intensity of an EM wave is:', options: ['I = c ε₀ E₀² / 2', 'I = E₀B₀', 'I = E₀²/(2μ₀c)', 'Both A and C are correct'], correctAnswer: 3, explanation: 'I = ½cε₀E₀² = E₀²/(2μ₀c) = cB₀²/(2μ₀). Multiple equivalent forms.', difficulty: 'medium', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 64, question: 'The Poynting vector S represents:', options: ['Electric field direction', 'Energy flux (power per unit area) of an EM wave', 'Magnetic flux', 'Charge density'], correctAnswer: 1, explanation: 'S = (1/μ₀)(E × B) gives the power per unit area carried by the wave.', difficulty: 'medium', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 65, question: 'EM waves carry momentum. The radiation pressure on a perfectly absorbing surface is:', options: ['I/c', '2I/c', 'Ic', 'I/c²'], correctAnswer: 0, explanation: 'Radiation pressure = I/c for perfect absorption, 2I/c for perfect reflection.', difficulty: 'hard', topicSlug: 'physics-c-electromagnetic-waves' },

  // ============ TOP-UP: bring all sub-topics to >=10 questions ============
  // physics-c-electric-field-coulomb (was 5 → 10)
  { id: 66, question: 'Coulomb\'s law: F =', options: ['kq₁q₂/r²', 'kq₁q₂/r', 'kq/r', 'kq²r'], correctAnswer: 0, explanation: 'F = kq₁q₂/r² (k = 1/4πε₀).', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 67, question: 'Electric field of a point charge q at distance r:', options: ['kq/r²', 'kq/r', 'kq', 'kq·r'], correctAnswer: 0, explanation: 'E = kq/r², radially.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 68, question: 'Electric field is defined as:', options: ['F/q (force per unit positive test charge)', 'qE', 'qd', 'V/q'], correctAnswer: 0, explanation: 'E⃗ = F⃗/q.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 69, question: 'Two equal positive charges. Field midway between them is:', options: ['Zero', 'Maximum', 'Toward the larger', 'Perpendicular'], correctAnswer: 0, explanation: 'Equal-magnitude opposing fields cancel.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },
  { id: 70, question: 'Field lines from a positive charge point:', options: ['Outward (radially)', 'Inward', 'Tangentially', 'Zero direction'], correctAnswer: 0, explanation: 'Convention: field lines exit + charges, enter − charges.', difficulty: 'easy', topicSlug: 'physics-c-electric-field-coulomb' },

  // physics-c-gauss-law (was 5 → 10)
  { id: 71, question: 'Gauss\'s law:', options: ['∮E·dA = Q_enc/ε₀', '∮E·dA = Q_enc·ε₀', '∮B·dA = μ₀I', '∮E·dl = 0'], correctAnswer: 0, explanation: '∮E·dA = Q_enc/ε₀.', difficulty: 'easy', topicSlug: 'physics-c-gauss-law' },
  { id: 72, question: 'For a uniformly charged sphere with charge Q, the field outside (r > R) is:', options: ['kQ/r² (like a point charge)', 'kQ/R²', 'kQr/R³', '0'], correctAnswer: 0, explanation: 'Outside, the sphere acts like a point charge at the center.', difficulty: 'easy', topicSlug: 'physics-c-gauss-law' },
  { id: 73, question: 'Inside a uniformly charged solid sphere (r < R), E ∝', options: ['r', 'r²', '1/r', '1/r²'], correctAnswer: 0, explanation: 'E(r) = kQr/R³ — linear in r.', difficulty: 'medium', topicSlug: 'physics-c-gauss-law' },
  { id: 74, question: 'Field of an infinite plane of surface charge density σ:', options: ['σ/(2ε₀)', 'σ/ε₀', 'σε₀/2', '0'], correctAnswer: 0, explanation: 'Symmetric: E = σ/(2ε₀) on each side.', difficulty: 'medium', topicSlug: 'physics-c-gauss-law' },
  { id: 75, question: 'Field of an infinite line of charge λ at distance r:', options: ['λ/(2πε₀r)', 'kλ/r²', 'σ/ε₀', '0'], correctAnswer: 0, explanation: 'Cylindrical Gaussian surface: E = λ/(2πε₀r).', difficulty: 'medium', topicSlug: 'physics-c-gauss-law' },

  // gauss-law-applications (was 5 → 10)
  { id: 76, question: 'Inside a hollow conducting shell, the electric field is:', options: ['Zero', 'kQ/r²', 'σ/ε₀', 'Constant nonzero'], correctAnswer: 0, explanation: 'No enclosed charge ⇒ E = 0 inside the cavity.', difficulty: 'easy', topicSlug: 'gauss-law-applications' },
  { id: 77, question: 'Just outside a charged conductor surface (charge density σ), E =', options: ['σ/ε₀', 'σ/(2ε₀)', '0', 'kσ'], correctAnswer: 0, explanation: 'For a conductor surface, E_outside = σ/ε₀.', difficulty: 'medium', topicSlug: 'gauss-law-applications' },
  { id: 78, question: 'Inside a perfect conductor in electrostatic equilibrium:', options: ['E = 0', 'E = σ/ε₀', 'E ∝ r', 'V = 0'], correctAnswer: 0, explanation: 'No net field inside, otherwise charges would still move.', difficulty: 'easy', topicSlug: 'gauss-law-applications' },
  { id: 79, question: 'For Gauss\'s law to be useful, you typically choose a Gaussian surface where:', options: ['E is constant or zero on each piece', 'E points in random directions', 'There is no charge', 'Surface area is unknown'], correctAnswer: 0, explanation: 'Symmetry surfaces (spheres, cylinders, slabs) make ∮E·dA tractable.', difficulty: 'easy', topicSlug: 'gauss-law-applications' },
  { id: 80, question: 'Excess charge on an isolated conductor resides:', options: ['On its outer surface', 'In its interior', 'Uniformly throughout', 'On the inner surface only'], correctAnswer: 0, explanation: 'Mutual repulsion pushes excess charge to outer surface.', difficulty: 'easy', topicSlug: 'gauss-law-applications' },

  // physics-c-electric-potential (was 5 → 10)
  { id: 81, question: 'Electric potential of a point charge:', options: ['kq/r', 'kq/r²', 'kqr', 'kq²'], correctAnswer: 0, explanation: 'V(r) = kq/r (taking V(∞) = 0).', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 82, question: 'Relation between E and V (1D):', options: ['E = −dV/dx', 'E = dV/dx', 'V = −dE/dx', 'V = E·dx'], correctAnswer: 0, explanation: 'E_x = −dV/dx.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 83, question: 'Work to move charge q through ΔV:', options: ['qΔV', 'qV', 'qE·d', 'q²/V'], correctAnswer: 0, explanation: 'W = qΔV.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 84, question: 'Potential along an equipotential surface:', options: ['Constant', 'Zero', 'Maximum', 'Variable'], correctAnswer: 0, explanation: 'No work needed to move charge ⇒ V is constant.', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },
  { id: 85, question: 'Electric field is always:', options: ['Perpendicular to equipotentials', 'Parallel to equipotentials', 'Zero on equipotentials', 'Tangent to equipotentials'], correctAnswer: 0, explanation: 'E points in direction of greatest decrease in V (perpendicular to equipotentials).', difficulty: 'easy', topicSlug: 'physics-c-electric-potential' },

  // physics-c-capacitors-dielectrics (was 5 → 10)
  { id: 86, question: 'Capacitance of a parallel-plate capacitor:', options: ['C = ε₀A/d', 'C = ε₀d/A', 'C = Q/V²', 'C = QV'], correctAnswer: 0, explanation: 'C = ε₀A/d (vacuum).', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 87, question: 'Energy stored in a capacitor:', options: ['½CV²', '½QV²', 'QV', 'CV'], correctAnswer: 0, explanation: 'U = ½CV² = Q²/(2C) = ½QV.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 88, question: 'Inserting a dielectric (κ > 1) at constant charge:', options: ['V decreases by κ', 'V increases by κ', 'Q changes', 'Q decreases'], correctAnswer: 0, explanation: 'C → κC; with Q fixed, V = Q/C drops by factor κ.', difficulty: 'medium', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 89, question: 'Capacitors in parallel:', options: ['C_eq = C₁ + C₂', '1/C_eq = 1/C₁ + 1/C₂', 'C_eq = C₁·C₂', 'C_eq = C₁ − C₂'], correctAnswer: 0, explanation: 'Same V across each ⇒ capacitances add.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },
  { id: 90, question: 'Capacitors in series:', options: ['1/C_eq = 1/C₁ + 1/C₂', 'C_eq = C₁ + C₂', 'C_eq = C₁·C₂', 'C_eq = C₁/C₂'], correctAnswer: 0, explanation: 'Same Q on each ⇒ reciprocals add.', difficulty: 'easy', topicSlug: 'physics-c-capacitors-dielectrics' },

  // physics-c-dc-circuits (was 5 → 10)
  { id: 91, question: 'Ohm\'s law:', options: ['V = IR', 'V = I/R', 'V = I²R', 'V = R/I'], correctAnswer: 0, explanation: 'V = IR.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 92, question: 'Power dissipated in a resistor:', options: ['I²R', 'IR', 'V/R', 'V²·R'], correctAnswer: 0, explanation: 'P = IV = I²R = V²/R.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 93, question: 'Resistors in series:', options: ['R_eq = R₁ + R₂', '1/R_eq = 1/R₁ + 1/R₂', 'R_eq = R₁·R₂', 'R_eq = R₁/R₂'], correctAnswer: 0, explanation: 'Same current ⇒ voltages add.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 94, question: 'Resistors in parallel:', options: ['1/R_eq = 1/R₁ + 1/R₂', 'R_eq = R₁ + R₂', 'R_eq = R₁·R₂', '0'], correctAnswer: 0, explanation: 'Same voltage ⇒ reciprocals add.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },
  { id: 95, question: 'Kirchhoff\'s voltage law states around any loop:', options: ['ΣV = 0', 'ΣI = 0', 'ΣR = 0', 'ΣP = max'], correctAnswer: 0, explanation: 'Conservation of energy ⇒ sum of EMFs and IR drops = 0 around a loop.', difficulty: 'easy', topicSlug: 'physics-c-dc-circuits' },

  // rc-circuits (was 2 → 10)
  { id: 96, question: 'Time constant of an RC circuit is:', options: ['τ = RC', 'τ = R/C', 'τ = R + C', 'τ = R·C²'], correctAnswer: 0, explanation: 'τ = RC has units of seconds.', difficulty: 'easy', topicSlug: 'rc-circuits' },
  { id: 97, question: 'Charging RC: q(t) =', options: ['Q_max(1 − e^(−t/RC))', 'Q_max e^(−t/RC)', 'Q_max e^(t/RC)', 'Q_max'], correctAnswer: 0, explanation: 'Charge approaches Q_max with time constant RC.', difficulty: 'medium', topicSlug: 'rc-circuits' },
  { id: 98, question: 'Discharging RC: q(t) =', options: ['Q₀ e^(−t/RC)', 'Q₀(1 − e^(−t/RC))', 'Q₀ e^(t/RC)', 'Q₀'], correctAnswer: 0, explanation: 'Exponential decay with τ = RC.', difficulty: 'medium', topicSlug: 'rc-circuits' },
  { id: 99, question: 'After one time constant of charging, q ≈', options: ['0.63 Q_max', '0.37 Q_max', 'Q_max', '0'], correctAnswer: 0, explanation: '1 − e^(−1) ≈ 0.63.', difficulty: 'medium', topicSlug: 'rc-circuits' },
  { id: 100, question: 'Initial current when charging an empty capacitor through R from EMF ε:', options: ['ε/R', '0', 'εR', 'ε/C'], correctAnswer: 0, explanation: 'At t = 0, capacitor acts like a wire ⇒ I₀ = ε/R.', difficulty: 'easy', topicSlug: 'rc-circuits' },
  { id: 101, question: 'After many time constants, the charging current approaches:', options: ['0', 'ε/R', '∞', 'ε/(R+C)'], correctAnswer: 0, explanation: 'Capacitor fully charged ⇒ no current.', difficulty: 'easy', topicSlug: 'rc-circuits' },
  { id: 102, question: 'Doubling R in an RC circuit changes τ by factor:', options: ['2', '½', '4', '1'], correctAnswer: 0, explanation: 'τ = RC, linear in R.', difficulty: 'easy', topicSlug: 'rc-circuits' },
  { id: 103, question: 'Energy dissipated in R while charging an initially empty C through ε equals:', options: ['½Cε²', 'Cε²', '¼Cε²', '2Cε²'], correctAnswer: 0, explanation: 'Half the supplied energy is dissipated; ½Cε² stored, ½Cε² lost.', difficulty: 'hard', topicSlug: 'rc-circuits' },

  // physics-c-rc-circuits (was 3 → 10)
  { id: 104, question: 'During capacitor discharge, current I(t) =', options: ['(Q₀/RC) e^(−t/RC)', 'Q₀ e^(t/RC)', 'Q₀/(RC)', '0'], correctAnswer: 0, explanation: 'I = −dq/dt = (Q₀/RC) e^(−t/RC).', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 105, question: 'Voltage across capacitor while charging from EMF ε:', options: ['ε(1 − e^(−t/RC))', 'ε e^(−t/RC)', 'εe^(t/RC)', 'ε'], correctAnswer: 0, explanation: 'V_C(t) = ε(1 − e^(−t/RC)).', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 106, question: 'After one τ of discharge, capacitor charge is about:', options: ['0.37 Q₀', '0.63 Q₀', 'Q₀', '0'], correctAnswer: 0, explanation: 'e^(−1) ≈ 0.37.', difficulty: 'medium', topicSlug: 'physics-c-rc-circuits' },
  { id: 107, question: 'For an RC circuit, units of τ are:', options: ['seconds', 'ohms', 'farads', 'volts'], correctAnswer: 0, explanation: '[Ω][F] = [V/A][C/V] = [C/A] = [s].', difficulty: 'easy', topicSlug: 'physics-c-rc-circuits' },
  { id: 108, question: 'A larger C in an RC charging circuit:', options: ['Slows the charging', 'Speeds the charging', 'Has no effect', 'Decreases ε'], correctAnswer: 0, explanation: 'τ = RC increases with C ⇒ slower approach to V = ε.', difficulty: 'easy', topicSlug: 'physics-c-rc-circuits' },
  { id: 109, question: 'Steady-state current through a fully-charged capacitor branch:', options: ['Zero', 'Maximum', 'ε/R', 'Constant nonzero'], correctAnswer: 0, explanation: 'No further change in q ⇒ no current.', difficulty: 'easy', topicSlug: 'physics-c-rc-circuits' },
  { id: 110, question: 'Initial charging current in an RC circuit (capacitor empty):', options: ['ε/R', '0', 'ε/C', 'ε·RC'], correctAnswer: 0, explanation: 'V_C = 0 ⇒ I₀ = ε/R.', difficulty: 'easy', topicSlug: 'physics-c-rc-circuits' },

  // physics-c-magnetic-forces (was 5 → 10)
  { id: 111, question: 'Magnetic force on a moving charge:', options: ['F = qv × B', 'F = qE', 'F = qB', 'F = qv·B'], correctAnswer: 0, explanation: 'F⃗ = qv⃗ × B⃗.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },
  { id: 112, question: 'Magnetic force on a current-carrying wire:', options: ['F = IL × B', 'F = IB/L', 'F = IL/B', 'F = I + L + B'], correctAnswer: 0, explanation: 'F⃗ = IL⃗ × B⃗.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },
  { id: 113, question: 'A charge moving parallel to B experiences:', options: ['Zero force', 'Maximum force', 'Force perpendicular to v', 'F = qE'], correctAnswer: 0, explanation: 'sinθ = 0 when v is parallel to B.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-forces' },
  { id: 114, question: 'Radius of circular motion of a charge in B:', options: ['r = mv/(|q|B)', 'r = qB/(mv)', 'r = vB/m', 'r = mB/v'], correctAnswer: 0, explanation: 'qvB = mv²/r ⇒ r = mv/(|q|B).', difficulty: 'medium', topicSlug: 'physics-c-magnetic-forces' },
  { id: 115, question: 'Cyclotron frequency:', options: ['f = qB/(2πm)', 'f = m/(qB)', 'f = qm/B', 'f = 2πqB·m'], correctAnswer: 0, explanation: 'ω = qB/m ⇒ f = qB/(2πm).', difficulty: 'medium', topicSlug: 'physics-c-magnetic-forces' },

  // physics-c-magnetic-field-sources (was 5 → 10)
  { id: 116, question: 'Field at distance r from a long straight wire:', options: ['B = μ₀I/(2πr)', 'B = μ₀I/r²', 'B = μ₀Ir', 'B = 0'], correctAnswer: 0, explanation: 'Ampère\'s law: B = μ₀I/(2πr).', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 117, question: 'Field inside a long solenoid (n turns/m, current I):', options: ['B = μ₀nI', 'B = μ₀I/n', 'B = μ₀I', 'B = 0'], correctAnswer: 0, explanation: 'B = μ₀nI inside, ≈ 0 outside.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 118, question: 'Biot–Savart law gives:', options: ['dB from a current element Idℓ', 'Force on a charge', 'EMF in a loop', 'Power'], correctAnswer: 0, explanation: 'dB = (μ₀/4π) (Idℓ × r̂)/r².', difficulty: 'medium', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 119, question: 'Field at center of a circular loop of radius R carrying I:', options: ['μ₀I/(2R)', 'μ₀I/(2πR)', 'μ₀I/R²', 'μ₀I·R'], correctAnswer: 0, explanation: 'B = μ₀I/(2R) at the center.', difficulty: 'medium', topicSlug: 'physics-c-magnetic-field-sources' },
  { id: 120, question: 'Two parallel wires carrying currents in the same direction:', options: ['Attract each other', 'Repel each other', 'Exert no force', 'Always cancel'], correctAnswer: 0, explanation: 'Like-direction currents attract; opposite repel.', difficulty: 'easy', topicSlug: 'physics-c-magnetic-field-sources' },

  // physics-c-faraday-lenz (was 5 → 10)
  { id: 121, question: 'Faraday\'s law:', options: ['EMF = −dΦ_B/dt', 'EMF = Φ_B·t', 'EMF = B·A', 'EMF = qv'], correctAnswer: 0, explanation: 'Induced EMF equals negative rate of change of magnetic flux.', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 122, question: 'Magnetic flux through a flat surface:', options: ['Φ = B·A·cosθ', 'Φ = BA²', 'Φ = B/A', 'Φ = qBA'], correctAnswer: 0, explanation: 'Φ_B = ∫B·dA; for uniform B, BAcosθ.', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 123, question: 'Lenz\'s law states the induced current:', options: ['Opposes the change in flux', 'Reinforces the change in flux', 'Always flows clockwise', 'Is zero'], correctAnswer: 0, explanation: 'Induced effect opposes the cause (energy conservation).', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },
  { id: 124, question: 'A bar of length L moving with velocity v perpendicular to B has EMF =', options: ['BLv', 'B/(Lv)', 'B·v/L', '0'], correctAnswer: 0, explanation: 'Motional EMF: ε = BLv.', difficulty: 'medium', topicSlug: 'physics-c-faraday-lenz' },
  { id: 125, question: 'Doubling the rate of change of flux through a loop:', options: ['Doubles the induced EMF', 'Halves the induced EMF', 'Has no effect', 'Cancels EMF'], correctAnswer: 0, explanation: 'EMF ∝ |dΦ/dt|.', difficulty: 'easy', topicSlug: 'physics-c-faraday-lenz' },

  // physics-c-inductance-rl-circuits (was 5 → 10)
  { id: 126, question: 'EMF across an inductor:', options: ['ε_L = −L dI/dt', 'ε_L = L·I', 'ε_L = LI²', 'ε_L = LI/t'], correctAnswer: 0, explanation: 'Self-induced EMF opposes change in current.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 127, question: 'Energy stored in an inductor:', options: ['½LI²', 'LI', '½L²I', 'L/I'], correctAnswer: 0, explanation: 'U = ½LI².', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 128, question: 'Time constant of an RL circuit:', options: ['τ = L/R', 'τ = RL', 'τ = R/L', 'τ = R + L'], correctAnswer: 0, explanation: 'τ = L/R seconds.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 129, question: 'Initial current through an inductor (just after switch closes):', options: ['Zero', 'ε/R', 'Maximum', 'Infinite'], correctAnswer: 0, explanation: 'Inductor opposes any sudden change ⇒ I(0) = 0.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },
  { id: 130, question: 'Long-term steady-state current in series RL with EMF ε:', options: ['ε/R', 'ε/(RL)', 'εL/R', '0'], correctAnswer: 0, explanation: 'After many τ, dI/dt → 0 ⇒ I = ε/R.', difficulty: 'easy', topicSlug: 'physics-c-inductance-rl-circuits' },

  // physics-c-maxwell-equations (was 5 → 10)
  { id: 131, question: 'Maxwell\'s correction adds which term to Ampère\'s law?', options: ['Displacement current μ₀ε₀ dΦ_E/dt', 'EMF', 'Magnetic flux', 'Charge density'], correctAnswer: 0, explanation: 'Ampère–Maxwell: ∮B·dℓ = μ₀(I_enc + ε₀ dΦ_E/dt).', difficulty: 'medium', topicSlug: 'physics-c-maxwell-equations' },
  { id: 132, question: 'Gauss\'s law for magnetism:', options: ['∮B·dA = 0', '∮B·dA = μ₀I', '∮B·dA = Q/ε₀', '∮E·dA = 0'], correctAnswer: 0, explanation: 'No magnetic monopoles ⇒ net flux = 0.', difficulty: 'easy', topicSlug: 'physics-c-maxwell-equations' },
  { id: 133, question: 'Faraday\'s law in integral form:', options: ['∮E·dℓ = −dΦ_B/dt', '∮E·dℓ = 0', '∮E·dℓ = Φ_B·t', '∮E·dℓ = qΦ_B'], correctAnswer: 0, explanation: 'Time-varying B induces a circulating E.', difficulty: 'easy', topicSlug: 'physics-c-maxwell-equations' },
  { id: 134, question: 'Maxwell\'s equations predict that EM waves travel at speed:', options: ['c = 1/√(μ₀ε₀)', 'c = √(μ₀ε₀)', 'c = μ₀ε₀', 'c = 1/(μ₀ε₀)'], correctAnswer: 0, explanation: 'c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s.', difficulty: 'medium', topicSlug: 'physics-c-maxwell-equations' },
  { id: 135, question: 'Which of Maxwell\'s laws is symmetric (no source) in vacuum?', options: ['Gauss\'s law for B', 'Gauss\'s law for E', 'Ampère\'s law', 'None'], correctAnswer: 0, explanation: '∮B·dA = 0 always (no magnetic monopoles).', difficulty: 'easy', topicSlug: 'physics-c-maxwell-equations' },

  // physics-c-electromagnetic-waves (was 5 → 10)
  { id: 136, question: 'In a vacuum EM wave, E and B are:', options: ['Perpendicular and in phase', 'Parallel', 'Perpendicular and out of phase', 'Independent'], correctAnswer: 0, explanation: 'E ⊥ B ⊥ direction of propagation; in phase.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 137, question: 'Ratio E/B in a vacuum EM wave:', options: ['c', '1/c', 'c²', '√c'], correctAnswer: 0, explanation: 'E = cB.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 138, question: 'EM waves in vacuum carry energy in direction:', options: ['Of E × B', 'Of E', 'Of B', 'Opposite to propagation'], correctAnswer: 0, explanation: 'Poynting vector S = (1/μ₀) E × B.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 139, question: 'Visible light frequencies are roughly:', options: ['4×10¹⁴–7×10¹⁴ Hz', '10⁹ Hz', '10¹⁸ Hz', '10² Hz'], correctAnswer: 0, explanation: 'Visible spectrum lies in this range.', difficulty: 'easy', topicSlug: 'physics-c-electromagnetic-waves' },
  { id: 140, question: 'Doubling the amplitude of an EM wave changes its intensity by factor:', options: ['4', '2', '½', '1'], correctAnswer: 0, explanation: 'I ∝ E₀² ⇒ amplitude × 2 → intensity × 4.', difficulty: 'medium', topicSlug: 'physics-c-electromagnetic-waves' },
]

export function getApPhysicsCEMQuestions(count: number = 10, topicSlug?: string): ApPhysicsCEMQuestion[] {
  let pool = allQuestions
  if (topicSlug) {
    const filtered = allQuestions.filter(q => q.topicSlug === topicSlug)
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
