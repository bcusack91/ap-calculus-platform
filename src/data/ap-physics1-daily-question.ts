/**
 * AP Physics 1 — Question of the Day
 *
 * Self-contained question pool covering all AP Physics 1 units.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is the acceleration?', options: ['2 m/s²', '4 m/s²', '10 m/s²', '100 m/s²'], correctAnswer: 1, explanation: 'Using a = Δv/Δt = (20 − 0)/5 = 4 m/s².' },
  { question: 'A 5 kg block rests on a frictionless surface. A net force of 15 N is applied. What is the acceleration?', options: ['1 m/s²', '3 m/s²', '5 m/s²', '75 m/s²'], correctAnswer: 1, explanation: 'By Newton\'s second law, a = F/m = 15/5 = 3 m/s².' },
  { question: 'Which of Newton\'s laws explains why you feel pushed back into your seat when a car accelerates?', options: ['First law (inertia)', 'Second law (F = ma)', 'Third law (action-reaction)', 'Law of universal gravitation'], correctAnswer: 0, explanation: 'Newton\'s first law (inertia) explains that your body tends to remain at rest while the car accelerates forward, making you feel pushed back.' },
  { question: 'A ball is thrown vertically upward with an initial velocity of 20 m/s. How high does it rise? (g = 10 m/s²)', options: ['10 m', '20 m', '40 m', '200 m'], correctAnswer: 1, explanation: 'At the top, v = 0. Using v² = v₀² − 2gh → 0 = 400 − 20h → h = 20 m.' },
  { question: 'Two objects with masses m and 2m are dropped from the same height in a vacuum. Which hits the ground first?', options: ['The heavier object', 'The lighter object', 'They hit at the same time', 'Depends on their shapes'], correctAnswer: 2, explanation: 'In a vacuum (no air resistance), all objects fall with the same acceleration g regardless of mass, so they hit the ground simultaneously.' },
  { question: 'What is the SI unit of momentum?', options: ['kg·m/s²', 'kg·m/s', 'N·m', 'J/s'], correctAnswer: 1, explanation: 'Momentum p = mv, so its unit is kg·m/s (kilogram-meters per second).' },
  { question: 'A 2 kg object moves at 3 m/s and collides with a stationary 1 kg object. They stick together. What is their final velocity?', options: ['1 m/s', '2 m/s', '3 m/s', '6 m/s'], correctAnswer: 1, explanation: 'By conservation of momentum: (2)(3) + (1)(0) = (2+1)v → v = 6/3 = 2 m/s.' },
  { question: 'Work is defined as:', options: ['Force times time', 'Force times displacement in the direction of the force', 'Mass times velocity', 'Power times distance'], correctAnswer: 1, explanation: 'Work W = F·d·cos θ, the product of force and displacement in the direction of the force.' },
  { question: 'A 10 kg box is lifted 3 meters vertically. How much gravitational PE does it gain? (g = 10 m/s²)', options: ['30 J', '100 J', '300 J', '3000 J'], correctAnswer: 2, explanation: 'PE = mgh = (10)(10)(3) = 300 J.' },
  { question: 'Which quantity is conserved in ALL collisions?', options: ['Kinetic energy', 'Potential energy', 'Momentum', 'Velocity'], correctAnswer: 2, explanation: 'Total momentum is conserved in all collisions (elastic and inelastic) as long as no external net force acts on the system.' },
  { question: 'A spring with k = 200 N/m is compressed 0.1 m. What is the elastic PE stored?', options: ['0.5 J', '1 J', '10 J', '20 J'], correctAnswer: 1, explanation: 'PE = ½kx² = ½(200)(0.1)² = ½(200)(0.01) = 1 J.' },
  { question: 'What is the period of a simple pendulum with length 1 m on Earth? (g ≈ 10 m/s²)', options: ['About 1 s', 'About 2 s', 'About 3 s', 'About 0.5 s'], correctAnswer: 1, explanation: 'T = 2π√(L/g) = 2π√(1/10) ≈ 2π(0.316) ≈ 2.0 s.' },
  { question: 'An object moves in a circle at constant speed. The net force acting on it is directed:', options: ['Tangent to the circle', 'Away from the center', 'Toward the center', 'In the direction of motion'], correctAnswer: 2, explanation: 'Uniform circular motion requires centripetal acceleration directed toward the center, so the net force (centripetal force) points toward the center.' },
  { question: 'If the radius of a circular orbit doubles and speed stays the same, what happens to centripetal acceleration?', options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'], correctAnswer: 1, explanation: 'Centripetal acceleration a = v²/r. If r doubles and v stays the same, a is halved.' },
  { question: 'What is the gravitational force between two 1 kg masses separated by 1 m? (G = 6.67 × 10⁻¹¹ N·m²/kg²)', options: ['6.67 × 10⁻¹¹ N', '6.67 × 10⁻⁸ N', '9.8 N', '1 N'], correctAnswer: 0, explanation: 'F = Gm₁m₂/r² = (6.67 × 10⁻¹¹)(1)(1)/1² = 6.67 × 10⁻¹¹ N.' },
  { question: 'A torque of 20 N·m is applied to a wheel with a moment of inertia of 4 kg·m². What is the angular acceleration?', options: ['2 rad/s²', '5 rad/s²', '80 rad/s²', '0.2 rad/s²'], correctAnswer: 1, explanation: 'τ = Iα → α = τ/I = 20/4 = 5 rad/s².' },
  { question: 'What happens to the frequency of a wave if its wavelength is halved and the speed remains constant?', options: ['Halved', 'Doubled', 'Stays the same', 'Quadrupled'], correctAnswer: 1, explanation: 'v = fλ. If v is constant and λ is halved, then f must double.' },
  { question: 'Two pulses traveling toward each other on a string overlap. This phenomenon is called:', options: ['Refraction', 'Diffraction', 'Superposition', 'Polarization'], correctAnswer: 2, explanation: 'When two waves overlap, their displacements add according to the principle of superposition.' },
  { question: 'A sound wave is an example of a:', options: ['Transverse wave', 'Longitudinal wave', 'Standing wave', 'Electromagnetic wave'], correctAnswer: 1, explanation: 'Sound waves are longitudinal — the particles of the medium vibrate parallel to the direction of wave propagation (compressions and rarefactions).' },
  { question: 'What is the net charge of a system containing 3 protons and 5 electrons?', options: ['+2e', '−2e', '+8e', '−8e'], correctAnswer: 1, explanation: 'Net charge = (3)(+e) + (5)(−e) = −2e. The system has two more electrons than protons.' },
  { question: 'Coulomb\'s law states that the force between two charges is proportional to:', options: ['The sum of the charges', 'The product of the charges divided by distance squared', 'The distance between them', 'The square of the distance'], correctAnswer: 1, explanation: 'F = kq₁q₂/r². The force is proportional to the product of the charges and inversely proportional to the square of the distance.' },
  { question: 'In a series circuit with two equal resistors, the voltage across each resistor is:', options: ['Equal to the total voltage', 'Half the total voltage', 'Zero', 'Double the total voltage'], correctAnswer: 1, explanation: 'In a series circuit with equal resistors, the total voltage divides equally — each resistor gets half the total voltage.' },
  { question: 'What is the equivalent resistance of two 10 Ω resistors connected in parallel?', options: ['20 Ω', '10 Ω', '5 Ω', '0.2 Ω'], correctAnswer: 2, explanation: '1/R_eq = 1/10 + 1/10 = 2/10 → R_eq = 5 Ω. Parallel resistance is always less than the smallest individual resistance.' },
  { question: 'An object in free fall near Earth\'s surface has an acceleration of approximately:', options: ['0 m/s²', '5 m/s²', '9.8 m/s²', '15 m/s²'], correctAnswer: 2, explanation: 'Near Earth\'s surface, the acceleration due to gravity is approximately 9.8 m/s² (often rounded to 10 m/s² for calculations).' },
  { question: 'Power is defined as:', options: ['Force times distance', 'Work done per unit time', 'Energy times velocity', 'Mass times acceleration squared'], correctAnswer: 1, explanation: 'Power P = W/t (work per unit time), measured in watts (W). One watt equals one joule per second.' },
  { question: 'A projectile is launched at 45° above the horizontal. Ignoring air resistance, which quantity is zero at the highest point?', options: ['Horizontal velocity', 'Vertical velocity', 'Speed', 'Acceleration'], correctAnswer: 1, explanation: 'At the highest point of projectile motion, the vertical component of velocity is zero. The horizontal component remains constant (no air resistance), and acceleration (g) always acts downward.' },
  { question: 'According to the impulse-momentum theorem, impulse equals:', options: ['Force times velocity', 'Change in momentum', 'Mass times acceleration', 'Kinetic energy'], correctAnswer: 1, explanation: 'The impulse-momentum theorem states J = FΔt = Δp (change in momentum).' },
  { question: 'A 1000 kg car and a 2000 kg truck collide head-on and stick together. Which experiences the greater force during the collision?', options: ['The car', 'The truck', 'Equal force on both', 'Depends on their velocities'], correctAnswer: 2, explanation: 'By Newton\'s third law, the forces are equal and opposite. The car and truck exert the same magnitude of force on each other during the collision.' },
  { question: 'If the amplitude of a wave is doubled, the energy carried by the wave:', options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'], correctAnswer: 2, explanation: 'Wave energy is proportional to the square of the amplitude. Doubling the amplitude quadruples the energy.' },
  { question: 'Static friction is always:', options: ['Greater than kinetic friction', 'Equal to kinetic friction', 'Less than or equal to μₛN', 'Exactly μₛN'], correctAnswer: 2, explanation: 'Static friction adjusts to match the applied force up to a maximum of fₛ(max) = μₛN. It is not always at its maximum value.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface PhysicsDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): PhysicsDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'ap-physics-1', question: q, dayNumber: day }]
}
