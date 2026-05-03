import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics C: Mechanics — 40 MCQs across all 7 units (2025+ CED).
 *   U1 Kinematics                         (6)
 *   U2 Newton's Laws of Motion            (6)
 *   U3 Work, Energy, Power                (6)
 *   U4 Linear Momentum                    (5)
 *   U5 Torque & Rotational Motion         (8)
 *   U6 Oscillations                       (5)
 *   U7 Gravitation                        (4)
 *
 * Calculator allowed throughout (per 2025+ CED).
 */

export const MCQS: MCQItem[] = [
  /* ---- U1 Kinematics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A particle moves with position $x(t) = 3t^3 - 6t^2 + 2t$ (meters). Its acceleration at $t = 2$ s is',
    options: ['$12$ m/s²', '$24$ m/s²', '$18$ m/s²', '$36$ m/s²'],
    correctAnswer: 1,
    explanation: '$v = 9t^2 - 12t + 2$; $a = 18t - 12$. At $t = 2$: $a = 36 - 12 = 24$ m/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A particle has velocity $v(t) = 4t - 6$ m/s. Its displacement from $t = 0$ to $t = 3$ s is',
    options: ['$0$ m', '$6$ m', '$12$ m', '$18$ m'],
    correctAnswer: 0,
    explanation: '$\\Delta x = \\int_0^3 (4t - 6)\\,dt = [2t^2 - 6t]_0^3 = 18 - 18 = 0$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A ball is thrown straight up with initial velocity 20 m/s. Taking $g = 10$ m/s², the maximum height reached is',
    options: ['$10$ m', '$20$ m', '$40$ m', '$200$ m'],
    correctAnswer: 1,
    explanation: '$v^2 = v_0^2 - 2gh$. At max: $0 = 400 - 20h \\Rightarrow h = 20$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A projectile is launched with speed $v_0$ at angle $\\theta$ above horizontal on level ground. The range is maximized when $\\theta = $',
    options: ['$30°$', '$45°$', '$60°$', '$90°$'],
    correctAnswer: 1,
    explanation: '$R = v_0^2 \\sin(2\\theta)/g$ is maximized when $\\sin(2\\theta) = 1 \\Rightarrow 2\\theta = 90° \\Rightarrow \\theta = 45°$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'An object moves so that its acceleration is $a(t) = 6t$ m/s². If $v(0) = 0$ and $x(0) = 0$, then $x(2)$ equals',
    options: ['$4$ m', '$6$ m', '$8$ m', '$12$ m'],
    correctAnswer: 2,
    explanation: '$v = \\int 6t\\,dt = 3t^2$. $x = \\int 3t^2\\,dt = t^3$. $x(2) = 8$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A car traveling at 30 m/s decelerates uniformly to a stop over 75 m. The deceleration magnitude is',
    options: ['$3.0$ m/s²', '$6.0$ m/s²', '$9.0$ m/s²', '$15$ m/s²'],
    correctAnswer: 1,
    explanation: '$v^2 = v_0^2 + 2ad \\Rightarrow 0 = 900 + 2a(75) \\Rightarrow a = -6.0$ m/s². Magnitude = 6.0 m/s².',
  },

  /* ---- U2 Newton's Laws (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'A 5 kg block on a frictionless horizontal surface is pulled by a 20 N horizontal force. Its acceleration is',
    options: ['$2$ m/s²', '$4$ m/s²', '$5$ m/s²', '$25$ m/s²'],
    correctAnswer: 1,
    explanation: '$a = F/m = 20/5 = 4$ m/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'A 2 kg object hanging from a rope attached to the ceiling of an elevator. If the elevator accelerates upward at 3 m/s², the rope tension is (g = 10 m/s²)',
    options: ['$14$ N', '$20$ N', '$26$ N', '$30$ N'],
    correctAnswer: 2,
    explanation: '$T - mg = ma \\Rightarrow T = m(g+a) = 2(13) = 26$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'A block slides down a frictionless incline of angle $\\theta$. Its acceleration along the incline is',
    options: ['$g$', '$g\\sin\\theta$', '$g\\cos\\theta$', '$g\\tan\\theta$'],
    correctAnswer: 1,
    explanation: 'Net force along incline = $mg\\sin\\theta$. Therefore $a = g\\sin\\theta$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'An object of mass m falls through air with drag force $F_d = bv$. Its terminal velocity is',
    options: ['$mg/b$', '$b/(mg)$', '$\\sqrt{mg/b}$', '$bg$'],
    correctAnswer: 0,
    explanation: 'At terminal velocity, $a = 0 \\Rightarrow mg = bv_t \\Rightarrow v_t = mg/b$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'A 4 kg block sits on a 6 kg block on a frictionless surface. The coefficient of static friction between blocks is 0.40. The maximum horizontal force on the lower block such that the upper block does not slip is (g = 10 m/s²)',
    options: ['$16$ N', '$24$ N', '$40$ N', '$60$ N'],
    correctAnswer: 2,
    explanation: 'Max friction on top block = $\\mu_s m_{top} g = 0.40(4)(10) = 16$ N. This gives top block max accel $a = 16/4 = 4$ m/s². Both move together: $F = (m_{top}+m_{bot})a = 10(4) = 40$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-newtons-laws',
    question: 'A car rounds a flat (unbanked) curve of radius 50 m. The minimum coefficient of static friction needed for the car to navigate at 20 m/s without slipping is (g = 10 m/s²)',
    options: ['$0.40$', '$0.50$', '$0.60$', '$0.80$'],
    correctAnswer: 3,
    explanation: 'Centripetal: $\\mu g = v^2/r \\Rightarrow \\mu = v^2/(rg) = 400/(50 \\cdot 10) = 0.80$.',
  },

  /* ---- U3 Work, Energy, Power (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'A force $F(x) = 3x^2$ N acts on an object as it moves from $x = 0$ to $x = 2$ m. Work done is',
    options: ['$4$ J', '$6$ J', '$8$ J', '$12$ J'],
    correctAnswer: 2,
    explanation: '$W = \\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'A 2 kg object moving at 6 m/s collides with a horizontal spring (k = 200 N/m). The maximum compression is',
    options: ['$0.30$ m', '$0.45$ m', '$0.60$ m', '$0.90$ m'],
    correctAnswer: 2,
    explanation: 'KE = PE: $\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}kx^2 \\Rightarrow x = v\\sqrt{m/k} = 6\\sqrt{2/200} = 6(0.1) = 0.60$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'For a conservative force, the relation between potential energy U(x) and force F(x) is',
    options: ['$F = U$', '$F = dU/dx$', '$F = -dU/dx$', '$F = \\int U\\,dx$'],
    correctAnswer: 2,
    explanation: 'Conservative force: $F = -dU/dx$ (force points "downhill" in potential).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'A 1500 kg car accelerates from rest to 20 m/s in 5 seconds. The average power delivered is',
    options: ['$30$ kW', '$60$ kW', '$120$ kW', '$300$ kW'],
    correctAnswer: 1,
    explanation: '$\\Delta KE = \\tfrac{1}{2}(1500)(20)^2 = 300{,}000$ J. $P_{avg} = W/t = 300{,}000/5 = 60{,}000$ W = 60 kW.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'A potential energy function is $U(x) = 2x^3 - 6x$. Stable equilibrium occurs at',
    options: ['$x = 0$', '$x = 1$', '$x = -1$', 'No stable equilibrium exists'],
    correctAnswer: 1,
    explanation: '$dU/dx = 6x^2 - 6 = 0 \\Rightarrow x = \\pm 1$. $d^2U/dx^2 = 12x$. At $x = 1$: $12 > 0$ ⇒ STABLE. At $x = -1$: $-12 < 0$ ⇒ unstable.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy',
    question: 'A block slides down a curved frictionless ramp from height h, reaching the bottom with speed v. If h is doubled, the new speed is',
    options: ['$v$', '$\\sqrt{2}\\,v$', '$2v$', '$4v$'],
    correctAnswer: 1,
    explanation: '$v = \\sqrt{2gh}$. Double h: $v_{new} = \\sqrt{2g(2h)} = \\sqrt{2}\\,v$.',
  },

  /* ---- U4 Linear Momentum (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 0.5 kg ball moving at 10 m/s strikes a wall and rebounds at 8 m/s in the opposite direction. The impulse on the ball is',
    options: ['$1.0$ N·s', '$5.0$ N·s', '$9.0$ N·s', '$18$ N·s'],
    correctAnswer: 2,
    explanation: '$\\Delta p = m(v_f - v_i) = 0.5(-8 - 10) = -9$ N·s. Magnitude = 9 N·s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 3 kg cart moving at 4 m/s collides and sticks to a 5 kg cart at rest. The final velocity of the combined carts is',
    options: ['$0.75$ m/s', '$1.5$ m/s', '$2.0$ m/s', '$3.0$ m/s'],
    correctAnswer: 1,
    explanation: 'Conservation of momentum: $(3)(4) = (3+5)v_f \\Rightarrow v_f = 12/8 = 1.5$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A force F(t) acts on a 2 kg object initially at rest. F(t) = 6t N for 0 ≤ t ≤ 4 s. The velocity at t = 4 s is',
    options: ['$12$ m/s', '$24$ m/s', '$48$ m/s', '$96$ m/s'],
    correctAnswer: 1,
    explanation: 'Impulse $J = \\int_0^4 6t\\,dt = [3t^2]_0^4 = 48$ N·s. $v = J/m = 48/2 = 24$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 4 kg object moving at +5 m/s and a 2 kg object moving at -3 m/s collide and move together. The final velocity is',
    options: ['$+1.0$ m/s', '$+2.3$ m/s', '$+3.5$ m/s', '$+1.7$ m/s'],
    correctAnswer: 1,
    explanation: '$p_i = (4)(5) + (2)(-3) = 20 - 6 = 14$ kg·m/s. $v_f = 14/(4+2) = 14/6 \\approx 2.33$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A particle\'s position vector is $\\vec{r}(t) = 2t\\hat{i} + 3t^2\\hat{j}$ m. Its momentum at $t = 2$ s for mass 1 kg is',
    options: ['$(2\\hat{i} + 6\\hat{j})$ kg·m/s', '$(2\\hat{i} + 12\\hat{j})$ kg·m/s', '$(4\\hat{i} + 12\\hat{j})$ kg·m/s', '$(2\\hat{i} + 24\\hat{j})$ kg·m/s'],
    correctAnswer: 1,
    explanation: '$\\vec{v} = d\\vec{r}/dt = 2\\hat{i} + 6t\\hat{j}$. At t=2: $\\vec{v} = 2\\hat{i} + 12\\hat{j}$. $\\vec{p} = m\\vec{v} = (2\\hat{i} + 12\\hat{j})$ kg·m/s.',
  },

  /* ---- U5 Torque & Rotational Motion (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A solid uniform disk of mass M and radius R rotates about its central axis. Its moment of inertia is',
    options: ['$\\tfrac{1}{4}MR^2$', '$\\tfrac{1}{2}MR^2$', '$MR^2$', '$\\tfrac{2}{5}MR^2$'],
    correctAnswer: 1,
    explanation: 'For solid disk/cylinder about central axis: $I = \\tfrac{1}{2}MR^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A torque of 10 N·m is applied to a wheel with moment of inertia 2 kg·m². The angular acceleration is',
    options: ['$2$ rad/s²', '$5$ rad/s²', '$10$ rad/s²', '$20$ rad/s²'],
    correctAnswer: 1,
    explanation: '$\\tau = I\\alpha \\Rightarrow \\alpha = \\tau/I = 10/2 = 5$ rad/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A solid sphere ($I = \\tfrac{2}{5}MR^2$) rolls without slipping down an incline from height h. Its speed at the bottom is',
    options: ['$\\sqrt{2gh}$', '$\\sqrt{10gh/7}$', '$\\sqrt{4gh/3}$', '$\\sqrt{gh}$'],
    correctAnswer: 1,
    explanation: '$mgh = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{2}mv^2(1 + 2/5) = \\tfrac{7}{10}mv^2$. $v = \\sqrt{10gh/7}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A figure skater pulls in her arms while spinning, decreasing her moment of inertia from $4$ kg·m² to $1$ kg·m². If her initial angular velocity was 2 rad/s, her new angular velocity is',
    options: ['$0.5$ rad/s', '$2$ rad/s', '$4$ rad/s', '$8$ rad/s'],
    correctAnswer: 3,
    explanation: 'Conservation of angular momentum: $I_1\\omega_1 = I_2\\omega_2$. $4(2) = 1\\omega_2 \\Rightarrow \\omega_2 = 8$ rad/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A uniform rod of length L and mass M rotates about an axis through one end. The moment of inertia is',
    options: ['$\\tfrac{1}{12}ML^2$', '$\\tfrac{1}{4}ML^2$', '$\\tfrac{1}{3}ML^2$', '$\\tfrac{1}{2}ML^2$'],
    correctAnswer: 2,
    explanation: 'For rod about end: $I = \\tfrac{1}{3}ML^2$. About center: $\\tfrac{1}{12}ML^2$ (parallel axis: add $M(L/2)^2$).',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A wheel rotating at 10 rad/s decelerates uniformly to rest in 5 s. The total angular displacement is',
    options: ['$10$ rad', '$25$ rad', '$50$ rad', '$100$ rad'],
    correctAnswer: 1,
    explanation: 'Average $\\omega = 5$ rad/s. $\\theta = \\omega_{avg} \\cdot t = 5(5) = 25$ rad.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A particle of mass m moves in a circle of radius r at speed v. Its angular momentum about the center is',
    options: ['$mv$', '$mvr$', '$mr$', '$mv/r$'],
    correctAnswer: 1,
    explanation: '$L = mvr$ for circular motion (with v ⊥ r).',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational',
    question: 'A torque is applied to a thin hoop ($I = MR^2$) of mass 2 kg and radius 0.5 m. To produce angular acceleration 4 rad/s², the required torque is',
    options: ['$1.0$ N·m', '$2.0$ N·m', '$4.0$ N·m', '$8.0$ N·m'],
    correctAnswer: 1,
    explanation: '$I = (2)(0.5)^2 = 0.5$ kg·m². $\\tau = I\\alpha = 0.5(4) = 2.0$ N·m.',
  },

  /* ---- U6 Oscillations (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-oscillations',
    question: 'A mass m on a spring of constant k oscillates with angular frequency',
    options: ['$\\sqrt{k/m}$', '$\\sqrt{m/k}$', '$\\sqrt{km}$', '$2\\pi\\sqrt{m/k}$'],
    correctAnswer: 0,
    explanation: '$\\omega = \\sqrt{k/m}$. The PERIOD is $T = 2\\pi\\sqrt{m/k}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-oscillations',
    question: 'A simple pendulum of length L on Earth (g = 9.8 m/s²) has period 2.0 s. The length L is approximately',
    options: ['$0.50$ m', '$0.99$ m', '$1.50$ m', '$2.0$ m'],
    correctAnswer: 1,
    explanation: '$T = 2\\pi\\sqrt{L/g} \\Rightarrow L = T^2 g/(4\\pi^2) = 4(9.8)/(39.5) \\approx 0.99$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-oscillations',
    question: 'For a 0.5 kg mass on a spring (k = 200 N/m) oscillating with amplitude 0.10 m, the maximum speed is',
    options: ['$1.0$ m/s', '$2.0$ m/s', '$4.0$ m/s', '$10$ m/s'],
    correctAnswer: 1,
    explanation: 'Energy: $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}mv_{max}^2$. $v_{max} = A\\sqrt{k/m} = 0.10\\sqrt{200/0.5} = 0.10(20) = 2.0$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-oscillations',
    question: 'A simple harmonic oscillator has $x(t) = 5\\cos(2t)$ m. Its acceleration at $t = 0$ is',
    options: ['$0$ m/s²', '$-10$ m/s²', '$-20$ m/s²', '$+20$ m/s²'],
    correctAnswer: 2,
    explanation: '$a = d^2x/dt^2 = -5(4)\\cos(2t) = -20\\cos(2t)$. At t=0: $a = -20$ m/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-6-oscillations',
    question: 'A physical pendulum consists of a uniform rod (length L, mass M) pivoted at one end. The period for small oscillations is (use $I = \\tfrac{1}{3}ML^2$, distance to CoM = L/2)',
    options: ['$2\\pi\\sqrt{L/g}$', '$2\\pi\\sqrt{2L/(3g)}$', '$2\\pi\\sqrt{L/(3g)}$', '$2\\pi\\sqrt{3L/(2g)}$'],
    correctAnswer: 1,
    explanation: 'Physical pendulum: $T = 2\\pi\\sqrt{I/(Mgd)} = 2\\pi\\sqrt{(\\tfrac{1}{3}ML^2)/(Mg \\cdot L/2)} = 2\\pi\\sqrt{2L/(3g)}$.',
  },

  /* ---- U7 Gravitation (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-gravitation',
    question: 'The gravitational force between two masses m₁ and m₂ at separation r is',
    options: ['$Gm_1 m_2/r$', '$Gm_1 m_2/r^2$', '$Gm_1 m_2 r^2$', '$G(m_1 + m_2)/r^2$'],
    correctAnswer: 1,
    explanation: 'Newton\'s law of gravitation: $F = Gm_1 m_2/r^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-gravitation',
    question: 'A satellite orbits Earth at radius r with speed v. If r is doubled, the new orbital speed (for circular orbit) is',
    options: ['$v$', '$v/\\sqrt{2}$', '$v/2$', '$2v$'],
    correctAnswer: 1,
    explanation: '$v = \\sqrt{GM/r}$. Doubling r: $v_{new} = \\sqrt{GM/(2r)} = v/\\sqrt{2}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-gravitation',
    question: 'The gravitational potential energy of a mass m at distance r from a planet of mass M is',
    options: ['$+GMm/r$', '$-GMm/r$', '$+GMm/r^2$', '$-GMm/r^2$'],
    correctAnswer: 1,
    explanation: '$U = -GMm/r$ (taking U = 0 at infinity). Negative because gravity is attractive ⇒ work to bring mass in from infinity is negative.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-gravitation',
    question: 'The escape speed from the surface of a planet of mass M and radius R is',
    options: ['$\\sqrt{GM/R}$', '$\\sqrt{2GM/R}$', '$\\sqrt{GM/(2R)}$', '$2\\sqrt{GM/R}$'],
    correctAnswer: 1,
    explanation: 'Set total energy = 0: $\\tfrac{1}{2}mv_e^2 - GMm/R = 0 \\Rightarrow v_e = \\sqrt{2GM/R}$.',
  },
]
