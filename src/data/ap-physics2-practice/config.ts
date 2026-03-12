import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'What is the electric flux through a closed surface containing a net charge of +Q?', options: ['0', 'Q/ε₀', 'ε₀Q', 'Q²/ε₀'], correctAnswer: 1, explanation: 'By Gauss\'s law, the electric flux through a closed surface equals the enclosed charge divided by ε₀: Φ = Q/ε₀.', topic: 'electrostatics' },
  { question: 'The capacitance of a parallel-plate capacitor is doubled when:', options: ['Plate separation is doubled', 'Plate area is doubled', 'Voltage is doubled', 'Charge is halved'], correctAnswer: 1, explanation: 'C = ε₀A/d. Doubling the area A doubles the capacitance.', topic: 'capacitance' },
  { question: 'In a DC circuit, what is the energy stored in a capacitor with capacitance C and voltage V?', options: ['CV', 'CV²', '½CV²', '½C²V'], correctAnswer: 2, explanation: 'Energy stored in a capacitor: U = ½CV².', topic: 'capacitance' },
  { question: 'A charged particle moves parallel to a magnetic field. The magnetic force on it is:', options: ['Maximum', 'Zero', 'Perpendicular to its velocity', 'Equal to qvB'], correctAnswer: 1, explanation: 'F = qv × B. When v is parallel to B, the cross product is zero, so no magnetic force acts.', topic: 'magnetism' },
  { question: 'According to Faraday\'s law, an EMF is induced when:', options: ['A charge is stationary in a field', 'Magnetic flux through a loop changes', 'Current flows through a resistor', 'An electric field is constant'], correctAnswer: 1, explanation: 'Faraday\'s law states that a changing magnetic flux through a loop induces an EMF: ε = -dΦ_B/dt.', topic: 'electromagnetic-induction' },
  { question: 'The electric field inside a hollow conducting sphere with surface charge is:', options: ['Uniform', 'Proportional to r', 'Zero', 'Inversely proportional to r²'], correctAnswer: 2, explanation: 'By Gauss\'s law, since there is no enclosed charge inside a hollow conductor, the electric field inside is zero.', topic: 'electrostatics' },
  { question: 'When a dielectric is inserted between capacitor plates (battery connected), the charge:', options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'], correctAnswer: 2, explanation: 'With battery connected, V is constant. C increases with dielectric (C = κC₀), so Q = CV increases.', topic: 'capacitance' },
  { question: 'An LC circuit oscillates with frequency:', options: ['f = 1/(2π√LC)', 'f = 2π√LC', 'f = L/C', 'f = √(LC)'], correctAnswer: 0, explanation: 'The resonant frequency of an LC circuit is f = 1/(2π√LC).', topic: 'circuits' },
  { question: 'The direction of an electromagnetic wave\'s propagation is given by:', options: ['E × B', 'E + B', 'E · B', 'B/E'], correctAnswer: 0, explanation: 'The Poynting vector S = E × B gives the direction of energy flow (propagation) of an electromagnetic wave.', topic: 'electromagnetic-waves' },
  { question: 'What is the total resistance of three resistors (2Ω, 3Ω, 6Ω) in parallel?', options: ['1 Ω', '11 Ω', '0.5 Ω', '3.67 Ω'], correctAnswer: 0, explanation: '1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1, so R = 1Ω.', topic: 'circuits' },
  { question: 'For a point charge, the electric potential at distance r is proportional to:', options: ['1/r²', '1/r', 'r', 'r²'], correctAnswer: 1, explanation: 'V = kQ/r. Electric potential varies as 1/r for a point charge (not 1/r² like the field).', topic: 'electrostatics' },
  { question: 'The magnetic dipole moment of a current loop with area A and current I is:', options: ['IA', 'I/A', 'A/I', 'I²A'], correctAnswer: 0, explanation: 'Magnetic dipole moment μ = NIA, where N is the number of loops, I is current, and A is area.', topic: 'magnetism' },
  { question: 'In an RC circuit, the time constant τ equals:', options: ['R + C', 'R/C', 'RC', 'C/R'], correctAnswer: 2, explanation: 'The time constant τ = RC determines how quickly a capacitor charges/discharges.', topic: 'circuits' },
  { question: 'A solenoid with N turns, length L, and current I has a magnetic field of:', options: ['μ₀NI', 'μ₀NI/L', 'μ₀I/N', 'NI/μ₀L'], correctAnswer: 1, explanation: 'The magnetic field inside a solenoid: B = μ₀nI = μ₀(N/L)I.', topic: 'magnetism' },
  { question: 'What is the index of refraction for a material where light travels at 2×10⁸ m/s?', options: ['0.67', '1.5', '2.0', '3.0'], correctAnswer: 1, explanation: 'n = c/v = (3×10⁸)/(2×10⁸) = 1.5.', topic: 'optics' },
  { question: 'The total energy in an LC circuit is:', options: ['Always electric', 'Always magnetic', 'Constant (oscillates between electric and magnetic)', 'Always zero'], correctAnswer: 2, explanation: 'In an ideal LC circuit, total energy = ½LI² + ½CV² = constant, oscillating between magnetic and electric forms.', topic: 'circuits' },
  { question: 'Gauss\'s law for magnetism states that:', options: ['Magnetic monopoles exist', 'The net magnetic flux through any closed surface is zero', 'B = μ₀I', 'Magnetic fields do work'], correctAnswer: 1, explanation: 'Gauss\'s law for magnetism: ∮B·dA = 0, meaning magnetic field lines always form closed loops (no monopoles).', topic: 'magnetism' },
  { question: 'The phenomenon of total internal reflection occurs when:', options: ['Light goes from a less dense to denser medium', 'The angle of incidence exceeds the critical angle', 'Light hits a mirror', 'Frequency changes at an interface'], correctAnswer: 1, explanation: 'Total internal reflection occurs when light in a denser medium hits the interface at an angle > critical angle.', topic: 'optics' },
  { question: 'A beam of electrons enters a region with both E and B fields perpendicular to each other. The beam is undeflected when:', options: ['E = B', 'v = E/B', 'v = B/E', 'E = 0'], correctAnswer: 1, explanation: 'Electric and magnetic forces balance: qE = qvB → v = E/B (velocity selector principle).', topic: 'electromagnetic-waves' },
  { question: 'The equivalent capacitance of two capacitors C₁ and C₂ in series is:', options: ['C₁ + C₂', 'C₁C₂', '(C₁ + C₂)/(C₁C₂)', 'C₁C₂/(C₁ + C₂)'], correctAnswer: 3, explanation: '1/C_eq = 1/C₁ + 1/C₂ → C_eq = C₁C₂/(C₁ + C₂) for series capacitors.', topic: 'capacitance' },
  { question: 'Maxwell\'s equations predict that electromagnetic waves travel at:', options: ['c = 1/√(μ₀ε₀)', 'c = μ₀ε₀', 'c = √(μ₀/ε₀)', 'c = ε₀/μ₀'], correctAnswer: 0, explanation: 'From Maxwell\'s equations, the speed of electromagnetic waves: c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s.', topic: 'electromagnetic-waves' },
  { question: 'Kirchhoff\'s junction rule is based on conservation of:', options: ['Energy', 'Charge', 'Momentum', 'Magnetic flux'], correctAnswer: 1, explanation: 'Kirchhoff\'s junction (current) rule: ΣI_in = ΣI_out, based on conservation of charge.', topic: 'circuits' },
  { question: 'A proton moves in a circle of radius R in a uniform magnetic field B. Its momentum is:', options: ['qBR', 'qB/R', 'R/qB', 'qR/B'], correctAnswer: 0, explanation: 'qvB = mv²/R → mv = p = qBR.', topic: 'magnetism' },
  { question: 'In a double-slit experiment, increasing the slit separation d will:', options: ['Increase fringe spacing', 'Decrease fringe spacing', 'Not change the pattern', 'Eliminate interference'], correctAnswer: 1, explanation: 'Fringe spacing Δy = λL/d. Increasing d decreases fringe spacing.', topic: 'optics' },
  { question: 'Lenz\'s law states that the induced current:', options: ['Enhances the change in flux', 'Opposes the change in flux that produced it', 'Is always clockwise', 'Equals the applied EMF'], correctAnswer: 1, explanation: 'Lenz\'s law: the induced current flows in a direction that opposes the change in magnetic flux that caused it.', topic: 'electromagnetic-induction' },
  { question: 'What is the energy stored in an inductor carrying current I?', options: ['LI', '½LI', '½LI²', 'LI²'], correctAnswer: 2, explanation: 'Energy stored in an inductor: U = ½LI².', topic: 'circuits' },
  { question: 'The electric potential energy of a system of two point charges q₁ and q₂ separated by r is:', options: ['kq₁q₂/r²', 'kq₁q₂/r', 'kq₁q₂r', 'kq₁q₂r²'], correctAnswer: 1, explanation: 'U = kq₁q₂/r. Note this is 1/r (not 1/r² like the force).', topic: 'electrostatics' },
  { question: 'A transformer with 100 primary turns and 500 secondary turns has an input of 120V. Output voltage is:', options: ['24 V', '120 V', '600 V', '3000 V'], correctAnswer: 2, explanation: 'V₂/V₁ = N₂/N₁ → V₂ = 120 × (500/100) = 600 V.', topic: 'electromagnetic-induction' },
  { question: 'The Biot-Savart law gives the magnetic field due to:', options: ['A stationary charge', 'An infinite wire', 'A current-carrying element', 'A magnetic dipole'], correctAnswer: 2, explanation: 'The Biot-Savart law: dB = (μ₀/4π)(Idl × r̂)/r² gives B due to a differential current element.', topic: 'magnetism' },
  { question: 'For a uniformly charged ring of radius R, the electric field on the axis at distance x is maximum at:', options: ['x = 0', 'x = R/√2', 'x = R', 'x → ∞'], correctAnswer: 1, explanation: 'The on-axis field E = kQx/(x² + R²)^(3/2) is maximized at x = R/√2.', topic: 'electrostatics' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Physics 2',
  description: 'Timed practice exam covering electrostatics, circuits, magnetism, optics, and electromagnetic waves.',
  backLink: { href: '/ap-physics-2', label: 'AP Physics 2' },
  ctaLinks: [
    { href: '/ap-physics-2', label: 'Study Hub' },
  ],
  accent: 'violet',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering fluids, thermodynamics, electricity, magnetism, optics, and modern physics.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Physics 2 Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 50 MC questions (90 min)', 'Section II: 4 Free Response (90 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Algebra-based physics'] },
    ],
  },
}
