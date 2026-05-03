import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 — 40 MCQs across all 8 units (2024+ CED).
 *   U1 Kinematics                                     (5)
 *   U2 Force & Translational Dynamics                 (6)
 *   U3 Work, Energy, Power                            (5)
 *   U4 Linear Momentum                                (5)
 *   U5 Torque & Rotational Dynamics                   (5)
 *   U6 Energy & Momentum of Rotating Systems          (4)
 *   U7 Oscillations (Simple Harmonic Motion)          (5)
 *   U8 Fluids                                         (5)
 *
 * Calculator allowed throughout AP Physics 1 (per CB rules).
 */

export const MCQS: MCQItem[] = [
  /* ---- U1 Kinematics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A ball is thrown straight up with initial speed 20 m/s. Taking $g = 10\\,\\text{m/s}^2$ and ignoring air resistance, the maximum height reached is',
    options: ['10 m', '20 m', '40 m', '80 m'],
    correctAnswer: 1,
    explanation: '$v^2 = v_0^2 - 2gh \\Rightarrow 0 = 400 - 20h \\Rightarrow h = 20$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A car accelerates uniformly from rest to 30 m/s in 10 s. The distance traveled is',
    options: ['75 m', '150 m', '300 m', '600 m'],
    correctAnswer: 1,
    explanation: 'Average velocity $= 15$ m/s, time = 10 s, so $d = 150$ m. Or $d = \\frac{1}{2}(3)(10)^2 = 150$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A projectile is launched at 30° above the horizontal with speed 40 m/s. Its horizontal range on level ground (with $g = 10$ m/s²) is closest to',
    options: ['80 m', '120 m', '139 m', '160 m'],
    correctAnswer: 2,
    explanation: '$R = v_0^2 \\sin(2\\theta)/g = 1600 \\sin 60° / 10 = 160(0.866) \\approx 139$ m.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'A position-time graph is a horizontal line for $0 \\le t \\le 5$ s. Which statement is true?',
    options: ['Object is moving with constant nonzero velocity.', 'Object is at rest.', 'Object has constant nonzero acceleration.', 'Object is moving in a circle.'],
    correctAnswer: 1,
    explanation: 'Horizontal $x$-$t$ graph means $x$ does not change with time ⇒ velocity = 0 ⇒ at rest.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question: 'Two cars start from rest. Car A accelerates at 2 m/s², Car B at 4 m/s². At $t = 5$ s, the ratio of distance traveled by A to B is',
    options: ['1:1', '1:2', '1:4', '2:1'],
    correctAnswer: 1,
    explanation: '$d = \\tfrac{1}{2}at^2$. Same $t$, so ratio of distances = ratio of accelerations = 2:4 = 1:2.',
  },

  /* ---- U2 Force & Translational Dynamics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'A 5 kg block on a frictionless surface is pulled by a horizontal force of 20 N. Its acceleration is',
    options: ['2 m/s²', '4 m/s²', '5 m/s²', '20 m/s²'],
    correctAnswer: 1,
    explanation: '$a = F/m = 20/5 = 4$ m/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'A 2 kg block sits on a horizontal surface with coefficient of static friction 0.3. The minimum horizontal force needed to start sliding it is (use $g = 10$ m/s²)',
    options: ['2 N', '6 N', '10 N', '20 N'],
    correctAnswer: 1,
    explanation: '$f_{s,\\max} = \\mu_s N = 0.3(2)(10) = 6$ N. Need to exceed this to start motion; minimum force ≈ 6 N.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'An elevator accelerates upward at 2 m/s². A 60 kg person inside experiences an apparent weight (normal force from scale) of (use $g = 10$ m/s²)',
    options: ['480 N', '600 N', '720 N', '840 N'],
    correctAnswer: 2,
    explanation: '$N - mg = ma \\Rightarrow N = m(g + a) = 60(12) = 720$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'Two blocks (5 kg and 3 kg) are connected by a string over a frictionless pulley (Atwood machine). Acceleration of the system (use $g = 10$ m/s²) is',
    options: ['1.25 m/s²', '2.5 m/s²', '5 m/s²', '10 m/s²'],
    correctAnswer: 1,
    explanation: '$a = (m_1 - m_2)g/(m_1 + m_2) = (5-3)(10)/(8) = 2.5$ m/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'A 10 kg block slides down a frictionless incline at 30°. Its acceleration along the incline is (use $g = 10$ m/s²)',
    options: ['2.5 m/s²', '5 m/s²', '8.66 m/s²', '10 m/s²'],
    correctAnswer: 1,
    explanation: '$a = g\\sin\\theta = 10(0.5) = 5$ m/s². Mass cancels.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question: 'A car rounds a flat curve of radius 50 m at 20 m/s. The minimum coefficient of static friction needed is (use $g = 10$ m/s²)',
    options: ['0.4', '0.6', '0.8', '1.0'],
    correctAnswer: 2,
    explanation: '$\\mu_s g \\ge v^2/r \\Rightarrow \\mu_s \\ge 400/(50 \\cdot 10) = 0.8$.',
  },

  /* ---- U3 Work, Energy, Power (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question: 'A 2 kg object moves at 5 m/s. Its kinetic energy is',
    options: ['5 J', '10 J', '25 J', '50 J'],
    correctAnswer: 2,
    explanation: '$KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}(2)(25) = 25$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question: 'A 0.5 kg ball is dropped from rest from a height of 4 m. Its speed just before hitting the ground (no air resistance, $g = 10$ m/s²) is',
    options: ['$2\\sqrt 2$ m/s', '$\\sqrt{40}$ m/s', '$\\sqrt{80}$ m/s', '20 m/s'],
    correctAnswer: 2,
    explanation: '$v = \\sqrt{2gh} = \\sqrt{80} \\approx 8.94$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question: 'A spring with constant $k = 200$ N/m is compressed 0.10 m. The energy stored is',
    options: ['1 J', '2 J', '10 J', '20 J'],
    correctAnswer: 0,
    explanation: '$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(200)(0.01) = 1$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question: 'A constant 50 N horizontal force pushes a 10 kg crate 4 m across a floor in 5 s. The average power delivered is',
    options: ['10 W', '40 W', '50 W', '200 W'],
    correctAnswer: 1,
    explanation: '$W = Fd = 200$ J. $P = W/t = 200/5 = 40$ W.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question: 'A 1 kg block slides on a horizontal surface with $\\mu_k = 0.2$. It enters with speed 4 m/s. How far does it slide before stopping? (use $g = 10$ m/s²)',
    options: ['2 m', '4 m', '8 m', '16 m'],
    correctAnswer: 1,
    explanation: 'Work-energy: $\\mu_k mgd = \\tfrac{1}{2}mv^2 \\Rightarrow d = v^2/(2\\mu_k g) = 16/4 = 4$ m.',
  },

  /* ---- U4 Linear Momentum (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 0.2 kg ball moving at 10 m/s strikes a wall and rebounds at 8 m/s in the opposite direction. The magnitude of the impulse on the ball is',
    options: ['0.4 N·s', '2.0 N·s', '3.6 N·s', '20 N·s'],
    correctAnswer: 2,
    explanation: '$J = \\Delta p = m(v_f - v_i) = 0.2(-8 - 10) = -3.6$ N·s. Magnitude = 3.6 N·s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 4 kg cart at 3 m/s collides with and sticks to a 2 kg cart at rest. Their common speed after is',
    options: ['1 m/s', '1.5 m/s', '2 m/s', '6 m/s'],
    correctAnswer: 2,
    explanation: 'Momentum: $4(3) = 6 v \\Rightarrow v = 2$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'In the previous collision, the ratio of final KE to initial KE is',
    options: ['1/3', '2/3', '1', '3/2'],
    correctAnswer: 1,
    explanation: '$KE_i = \\tfrac{1}{2}(4)(9) = 18$ J. $KE_f = \\tfrac{1}{2}(6)(4) = 12$ J. Ratio = 12/18 = 2/3.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A 70 kg astronaut at rest in space throws a 5 kg tool at 8 m/s. The astronaut\'s recoil speed is',
    options: ['0.57 m/s', '1.14 m/s', '5.6 m/s', '8 m/s'],
    correctAnswer: 0,
    explanation: 'Conservation: $0 = 70 v + 5(8) \\Rightarrow v = -40/70 \\approx -0.57$ m/s. Speed ≈ 0.57 m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question: 'A force vs time graph for a 2 kg object shows a triangle peaking at $F = 10$ N at $t = 2$ s, returning to 0 at $t = 4$ s. The change in velocity over $[0, 4]$ s is',
    options: ['5 m/s', '10 m/s', '20 m/s', '40 m/s'],
    correctAnswer: 1,
    explanation: 'Impulse = area under $F$-$t$ curve = $\\tfrac{1}{2}(4)(10) = 20$ N·s. $\\Delta v = J/m = 20/2 = 10$ m/s.',
  },

  /* ---- U5 Torque & Rotational Dynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question: 'A force of 20 N is applied perpendicularly at the end of a 0.5 m wrench. The torque about the bolt is',
    options: ['4 N·m', '10 N·m', '20 N·m', '40 N·m'],
    correctAnswer: 1,
    explanation: '$\\tau = rF\\sin\\theta = (0.5)(20)(1) = 10$ N·m.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question: 'A uniform rod of length 2 m and mass 4 kg rotates about its center. Its moment of inertia is',
    options: ['$0.33$ kg·m²', '$1.33$ kg·m²', '$4$ kg·m²', '$5.33$ kg·m²'],
    correctAnswer: 1,
    explanation: '$I_{center} = \\tfrac{1}{12}ML^2 = \\tfrac{1}{12}(4)(4) = 16/12 \\approx 1.33$ kg·m².',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question: 'A net torque of 6 N·m acts on a wheel with moment of inertia 3 kg·m². Its angular acceleration is',
    options: ['0.5 rad/s²', '2 rad/s²', '6 rad/s²', '18 rad/s²'],
    correctAnswer: 1,
    explanation: '$\\alpha = \\tau/I = 6/3 = 2$ rad/s².',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question: 'A uniform 10 kg beam, 4 m long, is supported at one end by a pivot and held horizontal by a vertical rope at the other end. Tension in the rope is (use $g = 10$ m/s²)',
    options: ['25 N', '50 N', '100 N', '200 N'],
    correctAnswer: 1,
    explanation: 'Torque about pivot: $T(4) = mg(2) = 100(2) \\Rightarrow T = 50$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question: 'A merry-go-round of moment of inertia $I = 200$ kg·m² is initially at rest. A child applies tangential force 50 N at radius 2 m for 4 s. Final angular velocity is',
    options: ['1 rad/s', '2 rad/s', '4 rad/s', '8 rad/s'],
    correctAnswer: 1,
    explanation: '$\\tau = (50)(2) = 100$ N·m. $\\alpha = 100/200 = 0.5$ rad/s². $\\omega = \\alpha t = 0.5(4) = 2$ rad/s.',
  },

  /* ---- U6 Energy & Momentum of Rotating Systems (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question: 'A solid sphere ($I = \\tfrac{2}{5}MR^2$) rolls without slipping. Fraction of its total KE that is rotational is',
    options: ['1/5', '2/7', '2/5', '1/2'],
    correctAnswer: 1,
    explanation: '$KE_{rot} = \\tfrac{1}{2}I\\omega^2 = \\tfrac{1}{5}MR^2\\omega^2 = \\tfrac{1}{5}Mv^2$. $KE_{trans} = \\tfrac{1}{2}Mv^2$. Total $= \\tfrac{7}{10}Mv^2$. Ratio rot/total $= (1/5)/(7/10) = 2/7$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question: 'A figure skater spinning at 3 rad/s pulls in her arms, halving her moment of inertia. Her new angular velocity is',
    options: ['1.5 rad/s', '3 rad/s', '6 rad/s', '12 rad/s'],
    correctAnswer: 2,
    explanation: 'Conservation of $L = I\\omega$. If $I$ halves, $\\omega$ doubles to 6 rad/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question: 'In the previous problem, the ratio of the skater\'s final KE to initial KE is',
    options: ['1/2', '1', '2', '4'],
    correctAnswer: 2,
    explanation: '$KE = L^2/(2I)$. $L$ constant, $I$ halves ⇒ $KE$ doubles. Ratio = 2.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question: 'A solid sphere and a hollow sphere of equal mass and radius roll without slipping down the same incline from rest. At the bottom,',
    options: [
      'the solid sphere is faster.',
      'the hollow sphere is faster.',
      'they have equal speed.',
      'the hollow sphere does not roll.',
    ],
    correctAnswer: 0,
    explanation: 'Smaller $I/MR^2$ ratio ⇒ less energy in rotation ⇒ more in translation ⇒ faster. Solid: 2/5; hollow: 2/3. Solid wins.',
  },

  /* ---- U7 Oscillations / SHM (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question: 'A 0.5 kg mass on a spring with $k = 200$ N/m has period',
    options: ['$0.10$ s', '$0.31$ s', '$0.63$ s', '$2.0$ s'],
    correctAnswer: 1,
    explanation: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.5/200} = 2\\pi(0.05) = 0.314$ s.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question: 'A simple pendulum of length 1 m has period (use $g = 9.8$ m/s²)',
    options: ['$0.5$ s', '$1.0$ s', '$2.01$ s', '$4.0$ s'],
    correctAnswer: 2,
    explanation: '$T = 2\\pi\\sqrt{L/g} = 2\\pi\\sqrt{1/9.8} \\approx 2.01$ s.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question: 'For a mass on a spring undergoing SHM, KE is maximum when',
    options: ['displacement is at maximum', 'displacement is at zero (equilibrium)', 'velocity is zero', 'acceleration is at maximum'],
    correctAnswer: 1,
    explanation: 'At equilibrium, all energy is kinetic (PE = 0), so KE is at max ⇒ speed is at max.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question: 'If the mass on a spring is doubled, the period of oscillation',
    options: ['halves', 'stays the same', 'multiplies by $\\sqrt 2$', 'doubles'],
    correctAnswer: 2,
    explanation: '$T \\propto \\sqrt m$. Double mass ⇒ $T$ multiplies by $\\sqrt 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question: 'A pendulum is taken to a planet where $g$ is 4 times Earth\'s. The new period (compared to Earth) is',
    options: ['1/4 as long', '1/2 as long', '2× as long', '4× as long'],
    correctAnswer: 1,
    explanation: '$T \\propto 1/\\sqrt g$. $g$ ×4 ⇒ $T$ ÷ 2.',
  },

  /* ---- U8 Fluids (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question: 'Pressure at depth 5 m below the surface of fresh water ($\\rho = 1000$ kg/m³, $g = 10$ m/s², $P_{atm} = 10^5$ Pa) is',
    options: ['$5 \\times 10^4$ Pa', '$10^5$ Pa', '$1.5 \\times 10^5$ Pa', '$5 \\times 10^5$ Pa'],
    correctAnswer: 2,
    explanation: '$P = P_0 + \\rho g h = 10^5 + (1000)(10)(5) = 10^5 + 5 \\times 10^4 = 1.5 \\times 10^5$ Pa.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question: 'An object of volume $0.001$ m³ is fully submerged in water. The buoyant force on it is (use $g = 10$ m/s²)',
    options: ['1 N', '10 N', '100 N', '1000 N'],
    correctAnswer: 1,
    explanation: '$F_B = \\rho_{water} V g = 1000(0.001)(10) = 10$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question: 'A wood block ($\\rho = 600$ kg/m³) floats in water. Fraction of its volume submerged is',
    options: ['0.4', '0.5', '0.6', '0.8'],
    correctAnswer: 2,
    explanation: 'For floating: $\\rho_{obj}/\\rho_{water} = V_{submerged}/V_{total} = 600/1000 = 0.6$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question: 'Water flows steadily through a pipe whose cross-sectional area decreases from $0.10$ m² to $0.05$ m². If the inlet speed is 2 m/s, the outlet speed is',
    options: ['1 m/s', '2 m/s', '4 m/s', '8 m/s'],
    correctAnswer: 2,
    explanation: 'Continuity: $A_1 v_1 = A_2 v_2 \\Rightarrow v_2 = (0.10)(2)/0.05 = 4$ m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question: 'Two openings in a tank are at the same depth but different sizes. The exit speed of the water through each (Torricelli\'s theorem) depends on',
    options: [
      'the diameter of the opening',
      'the depth of the opening below the water surface',
      'the cross-sectional area of the tank',
      'the density of the water',
    ],
    correctAnswer: 1,
    explanation: 'Torricelli: $v = \\sqrt{2gh}$. Speed depends only on depth $h$ below the surface.',
  },
]
