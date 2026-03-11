import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'A 2 kg ball is thrown vertically upward with a speed of 10 m/s. What is its kinetic energy at the highest point?', options: ['0 J', '20 J', '100 J', '200 J'], correctAnswer: 0, explanation: 'At the highest point, the velocity is zero, so KE = ½mv² = 0 J.', topic: 'kinematics' },
  { question: 'A block on a frictionless surface is pushed with a constant force of 10 N for 5 m. What is the work done?', options: ['2 J', '15 J', '50 J', '100 J'], correctAnswer: 2, explanation: 'W = Fd = 10 N × 5 m = 50 J.', topic: 'work-energy' },
  { question: 'Two objects have the same momentum. Object A has twice the mass of Object B. Which has greater kinetic energy?', options: ['Object A', 'Object B', 'They are equal', 'Cannot be determined'], correctAnswer: 1, explanation: 'KE = p²/(2m). With the same momentum p, the lighter object (B) has greater KE since it has smaller mass in the denominator.', topic: 'momentum' },
  { question: 'A car travels around a circular track at constant speed. The net force on the car points:', options: ['Tangent to the circle', 'Toward the center of the circle', 'Away from the center', 'In the direction of motion'], correctAnswer: 1, explanation: 'For uniform circular motion, the net (centripetal) force always points toward the center of the circle.', topic: 'circular-motion' },
  { question: 'What is the period of a simple pendulum of length 1 m? (g = 10 m/s²)', options: ['1 s', '2 s', '≈ 2π s', '≈ π s'], correctAnswer: 1, explanation: 'T = 2π√(L/g) = 2π√(1/10) ≈ 2π(0.316) ≈ 1.99 ≈ 2 s.', topic: 'oscillations' },
  { question: 'Newton\'s third law states that forces come in pairs that are:', options: ['Equal in magnitude, same direction', 'Equal in magnitude, opposite in direction', 'Unequal, same direction', 'Unequal, opposite direction'], correctAnswer: 1, explanation: 'Newton\'s third law: for every action force, there is an equal and opposite reaction force.', topic: 'forces' },
  { question: 'A 5 kg object has a gravitational potential energy of 500 J. How high is it above the reference point? (g = 10 m/s²)', options: ['5 m', '10 m', '50 m', '100 m'], correctAnswer: 1, explanation: 'PE = mgh → h = PE/(mg) = 500/(5×10) = 10 m.', topic: 'work-energy' },
  { question: 'When two waves of equal amplitude and frequency travel in opposite directions, they form:', options: ['A traveling wave', 'A standing wave', 'A shock wave', 'Destructive interference only'], correctAnswer: 1, explanation: 'Two identical waves traveling in opposite directions create a standing wave with nodes and antinodes.', topic: 'waves' },
  { question: 'Which quantity is conserved in ALL collisions?', options: ['Kinetic energy', 'Momentum', 'Potential energy', 'Speed'], correctAnswer: 1, explanation: 'Momentum is conserved in all collisions (elastic and inelastic). Kinetic energy is only conserved in elastic collisions.', topic: 'momentum' },
  { question: 'An object is in static equilibrium when:', options: ['Net force = 0 only', 'Net torque = 0 only', 'Both net force and net torque = 0', 'It moves at constant velocity'], correctAnswer: 2, explanation: 'Static equilibrium requires both the net force AND net torque to be zero (object is at rest).', topic: 'torque' },
  { question: 'A positive charge moves to the right in a magnetic field pointing into the page. The force on the charge is:', options: ['Into the page', 'Out of the page', 'Upward', 'Downward'], correctAnswer: 2, explanation: 'Using F = qv×B with right-hand rule: v to the right, B into page → F is upward.', topic: 'magnetism' },
  { question: 'What is the equivalent resistance of two 6Ω resistors in parallel?', options: ['3 Ω', '6 Ω', '12 Ω', '36 Ω'], correctAnswer: 0, explanation: '1/R = 1/6 + 1/6 = 2/6 → R = 3 Ω. Two equal resistors in parallel give half the individual resistance.', topic: 'circuits' },
  { question: 'A projectile is launched at 45° above the horizontal. At the top of its trajectory:', options: ['Both velocity and acceleration are zero', 'Velocity is zero, acceleration is g downward', 'Horizontal velocity is nonzero, vertical velocity is zero', 'Both components of velocity are nonzero'], correctAnswer: 2, explanation: 'At the top, the vertical velocity component is zero but horizontal velocity remains constant (no air resistance).', topic: 'kinematics' },
  { question: 'What is the SI unit of electric charge?', options: ['Ampere', 'Coulomb', 'Volt', 'Ohm'], correctAnswer: 1, explanation: 'The coulomb (C) is the SI unit of electric charge. An ampere is one coulomb per second.', topic: 'electricity' },
  { question: 'The frequency of a wave is doubled. What happens to the wavelength (speed constant)?', options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'], correctAnswer: 1, explanation: 'v = fλ. If v is constant and f doubles, then λ must halve.', topic: 'waves' },
  { question: 'A spring with constant k = 200 N/m is compressed 0.1 m. What is the elastic potential energy stored?', options: ['1 J', '2 J', '10 J', '20 J'], correctAnswer: 0, explanation: 'PE = ½kx² = ½(200)(0.1)² = ½(200)(0.01) = 1 J.', topic: 'oscillations' },
  { question: 'Which law relates the voltage across a capacitor to its charge?', options: ['Ohm\'s law', 'Q = CV', 'Faraday\'s law', 'Coulomb\'s law'], correctAnswer: 1, explanation: 'Q = CV relates charge (Q), capacitance (C), and voltage (V) for a capacitor.', topic: 'circuits' },
  { question: 'In a perfectly inelastic collision, two objects:', options: ['Bounce apart', 'Stick together', 'Exchange velocities', 'Come to rest'], correctAnswer: 1, explanation: 'In a perfectly inelastic collision, objects stick together after collision, and maximum kinetic energy is lost.', topic: 'momentum' },
  { question: 'A diffraction grating produces maxima according to which equation?', options: ['n = d sin θ', 'd sin θ = nλ', 'f = c/λ', 'E = hf'], correctAnswer: 1, explanation: 'd sin θ = nλ gives the angles for constructive interference maxima, where d is slit spacing and n is the order.', topic: 'waves' },
  { question: 'What is the gravitational force between two 1 kg masses separated by 1 m?', options: ['6.67 × 10⁻¹¹ N', '9.8 N', '1 N', '6.67 × 10⁻⁸ N'], correctAnswer: 0, explanation: 'F = Gm₁m₂/r² = (6.67×10⁻¹¹)(1)(1)/1² = 6.67×10⁻¹¹ N.', topic: 'gravity' },
  { question: 'An ideal gas undergoes an isothermal expansion. Which is true?', options: ['Temperature increases', 'Internal energy increases', 'The gas does work on surroundings', 'Pressure increases'], correctAnswer: 2, explanation: 'In isothermal expansion, temperature stays constant, internal energy is unchanged, and the gas does work by expanding.', topic: 'thermodynamics' },
  { question: 'Which type of energy does a photon possess?', options: ['Kinetic', 'Potential', 'Electromagnetic', 'Thermal'], correctAnswer: 2, explanation: 'Photons carry electromagnetic energy, with E = hf (Planck\'s constant times frequency).', topic: 'modern-physics' },
  { question: 'The acceleration due to gravity on a planet depends on:', options: ['Planet mass only', 'Planet radius only', 'Both planet mass and radius', 'Atmospheric composition'], correctAnswer: 2, explanation: 'Surface gravity g = GM/R². It depends on both the planet\'s mass (M) and radius (R).', topic: 'gravity' },
  { question: 'A 100 W light bulb operates for 10 seconds. How much energy does it use?', options: ['10 J', '100 J', '1000 J', '10000 J'], correctAnswer: 2, explanation: 'E = Pt = 100 W × 10 s = 1000 J.', topic: 'work-energy' },
  { question: 'Coulomb\'s law states that the force between two charges is proportional to:', options: ['The sum of the charges', 'The product of the charges', 'The difference of the charges', 'The square of the charges'], correctAnswer: 1, explanation: 'Coulomb\'s law: F = kq₁q₂/r². Force is proportional to the product of the charges.', topic: 'electricity' },
  { question: 'At resonance, a driven oscillator exhibits:', options: ['Minimum amplitude', 'Maximum amplitude', 'Zero amplitude', 'Constant amplitude'], correctAnswer: 1, explanation: 'At resonance, the driving frequency matches the natural frequency, producing maximum amplitude.', topic: 'oscillations' },
  { question: 'Which principle explains why airplanes generate lift?', options: ['Newton\'s first law', 'Bernoulli\'s principle', 'Archimedes\' principle', 'Pascal\'s principle'], correctAnswer: 1, explanation: 'Bernoulli\'s principle: faster air over the curved top of a wing creates lower pressure, generating lift.', topic: 'fluids' },
  { question: 'The electric field inside a conductor in electrostatic equilibrium is:', options: ['Maximum', 'Uniform', 'Zero', 'Equal to the surface field'], correctAnswer: 2, explanation: 'In electrostatic equilibrium, any excess charge resides on the surface, and the electric field inside is zero.', topic: 'electricity' },
  { question: 'A 60 Hz AC signal completes one full cycle in:', options: ['60 s', '1/60 s', '1 s', '6 s'], correctAnswer: 1, explanation: 'Period T = 1/f = 1/60 s ≈ 0.0167 s.', topic: 'circuits' },
  { question: 'When light passes from air into glass, it:', options: ['Speeds up and bends away from normal', 'Slows down and bends toward normal', 'Speed is unchanged', 'Reflects completely'], correctAnswer: 1, explanation: 'Light slows down entering a denser medium (glass) and bends toward the normal (Snell\'s law).', topic: 'optics' },
  { question: 'An object falls freely from rest. After 3 seconds, its speed is approximately: (g = 10 m/s²)', options: ['10 m/s', '15 m/s', '30 m/s', '45 m/s'], correctAnswer: 2, explanation: 'v = gt = 10 × 3 = 30 m/s.', topic: 'kinematics' },
  { question: 'Which law of thermodynamics introduces entropy?', options: ['Zeroth', 'First', 'Second', 'Third'], correctAnswer: 2, explanation: 'The second law of thermodynamics states that the entropy of an isolated system tends to increase.', topic: 'thermodynamics' },
  { question: 'Two parallel plates separated by distance d have voltage V between them. The electric field between them is:', options: ['V/d', 'Vd', 'V²/d', 'd/V'], correctAnswer: 0, explanation: 'For parallel plates, E = V/d (uniform electric field between the plates).', topic: 'electricity' },
  { question: 'What is impulse equal to?', options: ['Force × distance', 'Force × time', 'Mass × acceleration', 'Power × time'], correctAnswer: 1, explanation: 'Impulse = Force × time = change in momentum (J = FΔt = Δp).', topic: 'momentum' },
  { question: 'A converging lens produces a real image when the object is placed:', options: ['Inside the focal point', 'At the focal point', 'Beyond the focal point', 'At the center of curvature only'], correctAnswer: 2, explanation: 'A converging lens produces a real, inverted image when the object is placed beyond the focal point.', topic: 'optics' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Physics 1',
  description: 'Timed practice exam covering kinematics, forces, energy, momentum, waves, and circuits.',
  backLink: { href: '/ap-physics-1', label: 'AP Physics 1' },
  ctaLinks: [
    { href: '/ap-physics1-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics1-daily-question', label: 'Daily Question' },
  ],
  accent: 'cyan',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all Physics 1 topics: mechanics, waves, electricity, and more.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Physics 1 Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 50 MC questions (90 min)', 'Section II: 5 Free Response (90 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Algebra-based physics'] },
    ],
  },
}
