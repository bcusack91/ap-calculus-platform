import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'A particle moves along the x-axis with velocity $v(t) = 3t^2 - 6t$. At what time(s) does the particle change direction?', options: ['t = 0 only', 't = 2 only', 't = 0 and t = 2', 't = 1 only'], correctAnswer: 1, explanation: 'The particle changes direction when v = 0 and the sign of v changes. v(t) = 3t(t−2) = 0 at t = 0 and t = 2. Since v changes sign from negative to positive at t = 2 (and is zero initially), it changes direction at t = 2.', topic: 'kinematics' },
  { question: 'A 4 kg block slides on a surface where the friction coefficient varies with position as $\\mu(x) = 0.1x$. What is the friction force at $x = 3$ m?', options: ['1.2 N', '11.76 N', '3.92 N', '0.3 N'], correctAnswer: 1, explanation: 'f = μ(x)mg = (0.1)(3)(4)(9.8) = 11.76 N.', topic: 'friction' },
  { question: 'The position of a particle is $x(t) = t^3 - 6t^2 + 9t$. What is the acceleration at $t = 1$ s?', options: ['-6 m/s²', '0 m/s²', '-4 m/s²', '6 m/s²'], correctAnswer: 0, explanation: 'v(t) = 3t² − 12t + 9, a(t) = 6t − 12. At t = 1: a = 6 − 12 = −6 m/s².', topic: 'kinematics' },
  { question: 'A bullet of mass $m$ embeds in a block of mass $M$ on a frictionless surface. What fraction of kinetic energy is lost?', options: ['$m/(m+M)$', '$M/(m+M)$', '$m²/(m+M)²$', '$mM/(m+M)²$'], correctAnswer: 1, explanation: 'In a perfectly inelastic collision, the fraction of KE lost is M/(m+M). By momentum conservation: KE_f/KE_i = m/(m+M), so fraction lost = 1 − m/(m+M) = M/(m+M).', topic: 'momentum' },
  { question: 'A force $F(x) = 6x^2$ N acts on a particle from $x = 0$ to $x = 3$ m. What is the work done?', options: ['18 J', '27 J', '54 J', '162 J'], correctAnswer: 2, explanation: 'W = ∫₀³ 6x² dx = [2x³]₀³ = 2(27) = 54 J.', topic: 'work-energy' },
  { question: 'A satellite orbits Earth at radius $2R_E$. Its orbital speed compared to a surface-level orbit (at $R_E$) is:', options: ['Half', '$1/\\sqrt{2}$ times', 'The same', '$\\sqrt{2}$ times'], correctAnswer: 1, explanation: 'v_orbit = √(GM/r). At 2R_E: v = √(GM/2R_E) = v_surface/√2.', topic: 'gravitation' },
  { question: 'A uniform disk of mass $M$ and radius $R$ rolls without slipping down an incline. Its total kinetic energy is:', options: ['$\\frac{1}{2}Mv^2$', '$\\frac{1}{4}Mv^2$', '$\\frac{3}{4}Mv^2$', '$Mv^2$'], correctAnswer: 2, explanation: 'For rolling: KE = ½Mv² + ½Iω². For a disk, I = ½MR² and ω = v/R, so KE = ½Mv² + ¼Mv² = ¾Mv².', topic: 'rotation' },
  { question: 'The moment of inertia of a thin rod of mass $M$ and length $L$ about its center is:', options: ['$ML^2$', '$\\frac{1}{2}ML^2$', '$\\frac{1}{12}ML^2$', '$\\frac{1}{3}ML^2$'], correctAnswer: 2, explanation: 'I = ∫ r² dm. For a uniform rod about its center, I = ML²/12. About one end, it would be ML²/3.', topic: 'rotation' },
  { question: 'A mass on a spring has equation of motion $x(t) = 0.5\\cos(4t)$. What is the maximum speed?', options: ['0.5 m/s', '1 m/s', '2 m/s', '4 m/s'], correctAnswer: 2, explanation: 'v(t) = −0.5(4)sin(4t) = −2sin(4t). Maximum speed = Aω = 0.5 × 4 = 2 m/s.', topic: 'oscillations' },
  { question: 'For a mass $m$ on a spring with spring constant $k$, the angular frequency is:', options: ['$\\sqrt{k/m}$', '$\\sqrt{m/k}$', '$2\\pi\\sqrt{k/m}$', '$k/m$'], correctAnswer: 0, explanation: 'ω = √(k/m). The period T = 2π/ω = 2π√(m/k). The frequency f = ω/(2π).', topic: 'oscillations' },
  { question: 'Two blocks of masses $m$ and $2m$ are connected by a string over a frictionless pulley. The acceleration is:', options: ['$g/3$', '$g/2$', '$2g/3$', '$g$'], correctAnswer: 0, explanation: 'For an Atwood machine: a = (m₂−m₁)g/(m₁+m₂) = (2m−m)g/(m+2m) = mg/(3m) = g/3.', topic: 'forces' },
  { question: 'A particle moves in a circle of radius $r$ with speed $v(t) = bt$ where $b$ is constant. The magnitude of total acceleration at time $t$ is:', options: ['$b$', '$b²t²/r$', '$\\sqrt{b^2 + b^4t^4/r^2}$', '$b + b²t²/r$'], correctAnswer: 2, explanation: 'Tangential acceleration aₜ = dv/dt = b. Centripetal acceleration aᶜ = v²/r = b²t²/r. Total: a = √(aₜ² + aᶜ²) = √(b² + b⁴t⁴/r²).', topic: 'circular-motion' },
  { question: 'The gravitational potential energy between two masses is $U = -GMm/r$. The force is:', options: ['$GMm/r$', '$-GMm/r^2$', '$GMm/r^2$', '$-GMm/r$'], correctAnswer: 2, explanation: 'F = -dU/dr = -d/dr(-GMm/r) = -GMm/r² × (-1) = -GMm/r² (attractive). The magnitude is GMm/r².', topic: 'gravitation' },
  { question: 'A torque of $\\tau(t) = 6t$ N·m acts on a wheel with moment of inertia $I = 3$ kg·m². Starting from rest, what is the angular velocity at $t = 2$ s?', options: ['2 rad/s', '4 rad/s', '6 rad/s', '8 rad/s'], correctAnswer: 1, explanation: 'α = τ/I = 6t/3 = 2t. ω = ∫₀² 2t dt = [t²]₀² = 4 rad/s.', topic: 'rotation' },
  { question: 'A block of mass $m$ is attached to two springs in parallel with constants $k_1$ and $k_2$. The period of oscillation is:', options: ['$2\\pi\\sqrt{m/(k_1+k_2)}$', '$2\\pi\\sqrt{m(k_1+k_2)}$', '$2\\pi\\sqrt{m/k_1} + 2\\pi\\sqrt{m/k_2}$', '$2\\pi\\sqrt{mk_1 k_2/(k_1+k_2)}$'], correctAnswer: 0, explanation: 'Springs in parallel have effective constant k_eff = k₁ + k₂. Period T = 2π√(m/k_eff) = 2π√(m/(k₁+k₂)).', topic: 'oscillations' },
  { question: 'The work done by a conservative force around a closed path is:', options: ['Maximum', 'Positive', 'Negative', 'Zero'], correctAnswer: 3, explanation: 'By definition, a conservative force does zero net work over any closed path. This is equivalent to saying the force has a well-defined potential energy function.', topic: 'work-energy' },
  { question: 'A mass $m$ slides down a frictionless incline of angle $\\theta$ and height $h$. Its speed at the bottom is:', options: ['$\\sqrt{gh}$', '$\\sqrt{2gh}$', '$\\sqrt{2gh\\sin\\theta}$', '$\\sqrt{gh/\\sin\\theta}$'], correctAnswer: 1, explanation: 'By conservation of energy: mgh = ½mv² → v = √(2gh). The angle doesn\'t affect the final speed on a frictionless incline.', topic: 'work-energy' },
  { question: 'The center of mass of a system of particles:', options: ['Must be located at a particle', 'Accelerates as if all external forces act on it', 'Has velocity equal to the fastest particle', 'Must be inside the system'], correctAnswer: 1, explanation: 'F_net,ext = Ma_cm. The center of mass accelerates as if all external forces are applied there. It can be outside the physical system.', topic: 'center-of-mass' },
  { question: 'In damped harmonic motion, the amplitude:', options: ['Increases exponentially', 'Remains constant', 'Decreases exponentially', 'Oscillates'], correctAnswer: 2, explanation: 'Damped oscillation: x(t) = A₀e^(-γt)cos(ω\'t). The amplitude envelope A₀e^(-γt) decreases exponentially.', topic: 'oscillations' },
  { question: 'The angular momentum of a particle about a point is $\\vec{L} = \\vec{r} \\times \\vec{p}$. If $\\vec{r}$ and $\\vec{p}$ are parallel, $L$ equals:', options: ['$rp$', '$rp\\sin 90°$', '0', '$rp\\cos 0°$'], correctAnswer: 2, explanation: 'L = rp sinθ. If r and p are parallel, θ = 0° and sin(0°) = 0, so L = 0.', topic: 'angular-momentum' },
  { question: 'A planet in an elliptical orbit moves fastest at:', options: ['Aphelion (farthest point)', 'Perihelion (closest point)', 'The semi-major axis', 'The focus'], correctAnswer: 1, explanation: 'By conservation of angular momentum (Kepler\'s 2nd law): r₁v₁ = r₂v₂. At perihelion r is smallest, so v is largest.', topic: 'gravitation' },
  { question: 'The parallel axis theorem states $I = I_{cm} + Md^2$. For a solid sphere about an axis tangent to its surface:', options: ['$\\frac{2}{5}MR^2$', '$\\frac{7}{5}MR^2$', '$\\frac{3}{5}MR^2$', '$MR^2$'], correctAnswer: 1, explanation: 'I_cm for a solid sphere = 2MR²/5. Tangent axis: d = R. I = 2MR²/5 + MR² = 7MR²/5.', topic: 'rotation' },
  { question: 'Power is defined as:', options: ['$W/t$', '$F \\cdot v$', '$dW/dt$', 'All of the above'], correctAnswer: 3, explanation: 'Power = dW/dt (instantaneous) = W/t (average for constant power) = F·v (instantaneous, from P = dW/dt = F dx/dt = Fv). All are equivalent.', topic: 'work-energy' },
  { question: 'A block on a rough surface is pulled at constant velocity. The work done by friction is:', options: ['Positive', 'Negative', 'Zero', 'Depends on the surface'], correctAnswer: 1, explanation: 'Friction opposes the direction of motion, so the angle between friction force and displacement is 180°. W = Fd cos(180°) < 0.', topic: 'friction' },
  { question: 'A uniform hoop and a uniform disk, both of mass $M$ and radius $R$, roll down the same incline from rest. Which reaches the bottom first?', options: ['Hoop', 'Disk', 'They arrive together', 'Cannot be determined'], correctAnswer: 1, explanation: 'The disk has a smaller moment of inertia (½MR²) vs. the hoop (MR²). More energy goes to translation for the disk, so it accelerates faster: a_disk = 2g sinθ/3 > a_hoop = g sinθ/2.', topic: 'rotation' },
  { question: 'What is the escape velocity from a planet of mass $M$ and radius $R$?', options: ['$\\sqrt{GM/R}$', '$\\sqrt{2GM/R}$', '$\\sqrt{GM/2R}$', '$2\\sqrt{GM/R}$'], correctAnswer: 1, explanation: 'Setting KE = |PE|: ½mv² = GMm/R → v_escape = √(2GM/R).', topic: 'gravitation' },
  { question: 'A net torque $\\tau$ causes an angular acceleration $\\alpha$ in a rigid body. If the moment of inertia is doubled and the torque is tripled, the new angular acceleration is:', options: ['$\\frac{3}{2}\\alpha$', '$\\frac{2}{3}\\alpha$', '$6\\alpha$', '$\\frac{\\alpha}{6}$'], correctAnswer: 0, explanation: 'τ = Iα, so α = τ/I. New: α\' = 3τ/(2I) = (3/2)(τ/I) = (3/2)α.', topic: 'rotation' },
  { question: 'In simple harmonic motion, when is the potential energy maximum?', options: ['At equilibrium', 'At maximum displacement', 'When kinetic energy is maximum', 'At all times equally'], correctAnswer: 1, explanation: 'PE = ½kx² is maximum when x = ±A (maximum displacement). At equilibrium (x = 0), PE = 0 and KE is maximum.', topic: 'oscillations' },
  { question: 'The impulse delivered to an object equals:', options: ['The change in kinetic energy', 'The change in momentum', 'The force times distance', 'The power times time'], correctAnswer: 1, explanation: 'J = ∫F dt = Δp. Impulse equals the change in momentum (impulse-momentum theorem).', topic: 'momentum' },
  { question: 'A rocket of initial mass $M$ expels gas at speed $v_e$ relative to the rocket. The thrust force is:', options: ['$Mv_e$', '$v_e \\cdot dM/dt$', '$-v_e \\cdot dM/dt$', '$Mg$'], correctAnswer: 2, explanation: 'Thrust = -v_e(dM/dt), where dM/dt < 0 (mass is decreasing), making thrust positive. This follows from the rocket equation.', topic: 'momentum' },
  { question: 'The coefficient of restitution $e$ for a perfectly elastic collision is:', options: ['0', '0.5', '1', '∞'], correctAnswer: 2, explanation: 'e = (relative speed after)/(relative speed before). For elastic: e = 1 (fully bouncy). For perfectly inelastic: e = 0 (stick together).', topic: 'momentum' },
  { question: 'A uniform rod of length $L$ is pivoted at one end. Its moment of inertia about the pivot is:', options: ['$\\frac{1}{12}ML^2$', '$\\frac{1}{3}ML^2$', '$\\frac{1}{2}ML^2$', '$ML^2$'], correctAnswer: 1, explanation: 'By the parallel axis theorem: I = I_cm + Md² = ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/3.', topic: 'rotation' },
  { question: 'A spring-mass system has energy $E = \\frac{1}{2}kA^2$. If the amplitude is doubled, the energy becomes:', options: ['$E$', '$2E$', '$4E$', '$\\sqrt{2}E$'], correctAnswer: 2, explanation: 'E = ½kA². If A → 2A: E\' = ½k(2A)² = 4(½kA²) = 4E. Energy scales as amplitude squared.', topic: 'oscillations' },
  { question: 'A particle of mass $m$ moves with velocity $v$ in a circle of radius $r$. Its angular momentum about the center is:', options: ['$mvr$', '$mv/r$', '$mr^2v$', '$mv^2r$'], correctAnswer: 0, explanation: 'L = mvr sinθ. For circular motion, v is perpendicular to r, so sin90° = 1 and L = mvr.', topic: 'angular-momentum' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Physics C: Mechanics',
  description: 'Timed practice exam covering kinematics with calculus, Newton\'s laws, work-energy, momentum, rotation, oscillations, and gravitation.',
  backLink: { href: '/ap-physics-c-mechanics', label: 'AP Physics C: Mechanics' },
  ctaLinks: [
    { href: '/ap-physics-c-mech-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-physics-c-mech-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all Physics C: Mechanics topics with calculus-based problems.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Physics C: Mechanics Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 35 MC questions (45 min)', 'Section II: 3 Free Response (45 min)', 'Total: 1.5 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Calculus-based physics'] },
    ],
  },
}
