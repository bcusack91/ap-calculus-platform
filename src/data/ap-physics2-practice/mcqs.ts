import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 2 — 40 MCQs across 7 units (2024+ CED).
 *   U1 Fluids (review/extension)            (4)
 *   U2 Thermodynamics                       (6)
 *   U3 Electric Forces, Fields, Potential   (7)
 *   U4 DC Circuits                          (7)
 *   U5 Magnetism & Electromagnetic Induction(6)
 *   U6 Geometric Optics & Waves             (5)
 *   U7 Modern / Quantum Physics             (5)
 *
 * Calculator allowed throughout AP Physics 2.
 */

export const MCQS: MCQItem[] = [
  /* ---- U1 Fluids (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-fluids',
    question: 'A solid object floats with 80% of its volume submerged in water ($\\rho_{water} = 1000$ kg/m³). The density of the object is',
    options: ['200 kg/m³', '500 kg/m³', '800 kg/m³', '1250 kg/m³'],
    correctAnswer: 2,
    explanation: 'Floating: $\\rho_{obj}/\\rho_{fluid} = $ submerged fraction $= 0.80 \\Rightarrow \\rho_{obj} = 800$ kg/m³.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-fluids',
    question: 'Water flows through a horizontal pipe of varying cross-section. At a wide section the pressure is high. At a narrow section, by Bernoulli\'s principle,',
    options: [
      'pressure is higher and speed is higher',
      'pressure is higher and speed is lower',
      'pressure is lower and speed is higher',
      'pressure is lower and speed is lower',
    ],
    correctAnswer: 2,
    explanation: 'Continuity: smaller area ⇒ higher speed. Bernoulli: higher speed ⇒ lower pressure (in horizontal flow).',
  },
  {
    type: 'mcq',
    topic: 'unit-1-fluids',
    question: 'A hydraulic lift uses incompressible fluid. A 100 N force on the small piston (area 0.01 m²) lifts a load on the large piston (area 0.10 m²). Maximum load is',
    options: ['10 N', '100 N', '1000 N', '10000 N'],
    correctAnswer: 2,
    explanation: 'Pascal: $F_2 = F_1(A_2/A_1) = 100(10) = 1000$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-fluids',
    question: 'A tank of water has a hole at depth 5 m below the surface. The exit speed of water (use $g = 10$ m/s²) is',
    options: ['5 m/s', '10 m/s', '50 m/s', '100 m/s'],
    correctAnswer: 1,
    explanation: 'Torricelli: $v = \\sqrt{2gh} = \\sqrt{100} = 10$ m/s.',
  },

  /* ---- U2 Thermodynamics (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'An ideal gas is held at constant volume while heat is added. Which is true?',
    options: [
      'Work done by gas is positive; temperature rises',
      'Work done by gas is zero; temperature rises',
      'Work done by gas is positive; temperature unchanged',
      'Work done by gas is zero; temperature unchanged',
    ],
    correctAnswer: 1,
    explanation: 'At constant $V$, $W = P\\Delta V = 0$. By 1st law, $\\Delta U = Q > 0$, so $T$ rises.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'For an ideal gas the rms speed of molecules is proportional to',
    options: ['$T$', '$T^{1/2}$', '$T^{2}$', '$1/T$'],
    correctAnswer: 1,
    explanation: '$v_{rms} = \\sqrt{3k_BT/m}$, so $v_{rms} \\propto \\sqrt T$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'An ideal gas undergoes an isothermal expansion. Which statement is true?',
    options: [
      '$\\Delta U > 0$, $Q = 0$',
      '$\\Delta U = 0$, $Q = W > 0$',
      '$\\Delta U < 0$, $Q < 0$',
      '$\\Delta U = 0$, $Q = 0$',
    ],
    correctAnswer: 1,
    explanation: 'Isothermal ⇒ $\\Delta T = 0 \\Rightarrow \\Delta U = 0$. 1st law: $Q = W$. Expansion ⇒ $W > 0$, so $Q > 0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'A heat engine absorbs 1000 J from a hot reservoir and exhausts 700 J to a cold reservoir. Its efficiency is',
    options: ['30%', '43%', '70%', '100%'],
    correctAnswer: 0,
    explanation: '$e = W/Q_H = (Q_H - Q_C)/Q_H = 300/1000 = 30\\%$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'A Carnot engine operates between hot reservoir 600 K and cold reservoir 300 K. Maximum theoretical efficiency is',
    options: ['25%', '50%', '75%', '100%'],
    correctAnswer: 1,
    explanation: '$e_{Carnot} = 1 - T_C/T_H = 1 - 300/600 = 0.50 = 50\\%$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-thermodynamics',
    question: 'The internal energy of an ideal monatomic gas with $n$ moles at temperature $T$ is',
    options: ['$nRT$', '$\\tfrac{3}{2}nRT$', '$\\tfrac{5}{2}nRT$', '$3nRT$'],
    correctAnswer: 1,
    explanation: '$U = \\tfrac{3}{2}nRT$ for an ideal monatomic gas (3 translational DOF × $\\tfrac{1}{2}k_BT$ each).',
  },

  /* ---- U3 Electric Forces, Fields, Potential (7) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'Two point charges of $+2$ μC and $-3$ μC are 0.30 m apart. The magnitude of the electric force between them is (use $k = 9 \\times 10^9$ N·m²/C²)',
    options: ['$0.06$ N', '$0.6$ N', '$6$ N', '$60$ N'],
    correctAnswer: 1,
    explanation: '$F = k|q_1 q_2|/r^2 = 9 \\times 10^9 (2 \\times 10^{-6})(3 \\times 10^{-6})/(0.09) = 9 \\times 10^9 \\cdot 6 \\times 10^{-12}/0.09 = 0.6$ N.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'The electric field a distance $r$ from a point charge $+Q$ points',
    options: ['toward the charge', 'away from the charge', 'tangent to a circle of radius $r$', 'in any direction depending on $Q$'],
    correctAnswer: 1,
    explanation: '$\\vec E$ from positive charge points radially OUTWARD (away). From negative charge it points inward.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'A charge $+q$ moves from a point at potential 200 V to a point at potential 50 V. The work done by the electric field on the charge is',
    options: ['$-150q$', '$+150q$', '$+250q$', '$0$'],
    correctAnswer: 1,
    explanation: '$W_{field} = q(V_i - V_f) = q(200 - 50) = +150q$. Positive: field accelerates positive charge from high to low potential.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'Inside a hollow conducting sphere with no enclosed charges, the electric field is',
    options: ['Zero everywhere inside', 'Constant nonzero', 'Inversely proportional to $r^2$', 'Same as on the surface'],
    correctAnswer: 0,
    explanation: 'By Gauss\'s law: a Gaussian surface inside encloses zero charge ⇒ $E = 0$ everywhere inside a conductor in electrostatic equilibrium.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'A parallel-plate capacitor has capacitance $C$. If the plate separation is doubled while plate area stays constant, the new capacitance is',
    options: ['$C/4$', '$C/2$', '$2C$', '$4C$'],
    correctAnswer: 1,
    explanation: '$C = \\varepsilon_0 A/d$. Double $d$ ⇒ $C$ halves.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'A 5 μF capacitor is charged to 12 V. The energy stored is',
    options: ['$6 \\times 10^{-5}$ J', '$3.6 \\times 10^{-4}$ J', '$6 \\times 10^{-4}$ J', '$7.2 \\times 10^{-4}$ J'],
    correctAnswer: 1,
    explanation: '$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(5 \\times 10^{-6})(144) = 3.6 \\times 10^{-4}$ J.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-electric-forces-fields-potential',
    question: 'Two parallel plates separated by 0.02 m have a uniform field of 1000 V/m between them. The potential difference across the plates is',
    options: ['10 V', '20 V', '50 V', '500 V'],
    correctAnswer: 1,
    explanation: '$V = Ed = 1000 \\times 0.02 = 20$ V.',
  },

  /* ---- U4 DC Circuits (7) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'A 12 V battery is connected to a 4 Ω resistor. The current is',
    options: ['1 A', '2 A', '3 A', '4 A'],
    correctAnswer: 2,
    explanation: 'Ohm: $I = V/R = 12/4 = 3$ A.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'Two 6 Ω resistors connected in parallel have equivalent resistance',
    options: ['3 Ω', '6 Ω', '9 Ω', '12 Ω'],
    correctAnswer: 0,
    explanation: '$1/R_{eq} = 1/6 + 1/6 = 2/6 \\Rightarrow R_{eq} = 3$ Ω.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'Three resistors (2 Ω, 3 Ω, 5 Ω) in series across a 20 V battery. Current through them is',
    options: ['2 A', '4 A', '5 A', '10 A'],
    correctAnswer: 0,
    explanation: '$R_{eq} = 10$ Ω. $I = 20/10 = 2$ A.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'A 10 Ω resistor dissipates 40 W. The current through it is',
    options: ['0.5 A', '2 A', '4 A', '8 A'],
    correctAnswer: 1,
    explanation: '$P = I^2 R \\Rightarrow I = \\sqrt{P/R} = \\sqrt{4} = 2$ A.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'Kirchhoff\'s junction (current) rule expresses conservation of',
    options: ['energy', 'momentum', 'charge', 'voltage'],
    correctAnswer: 2,
    explanation: 'Junction rule: total current in = total current out, expressing conservation of CHARGE. (Loop rule expresses conservation of energy.)',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'A 100 W incandescent bulb is run for 5 hours. The energy used is',
    options: ['0.5 kWh', '1 kWh', '5 kWh', '500 kWh'],
    correctAnswer: 0,
    explanation: '$E = Pt = 0.100$ kW × 5 h = 0.5 kWh.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-dc-circuits',
    question: 'A capacitor charging through a resistor in an RC circuit. After one time constant $\\tau = RC$, the capacitor has charged to approximately what fraction of its final charge?',
    options: ['10%', '37%', '63%', '100%'],
    correctAnswer: 2,
    explanation: '$Q(t) = Q_0(1 - e^{-t/\\tau})$. At $t = \\tau$: $Q = Q_0(1 - 1/e) \\approx 0.632 Q_0$ ⇒ 63%.',
  },

  /* ---- U5 Magnetism & EM Induction (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'A proton moves with velocity $\\vec v$ in the $+x$ direction in a magnetic field $\\vec B$ in the $+y$ direction. The magnetic force on the proton is in the',
    options: ['$+x$ direction', '$+z$ direction', '$-z$ direction', '$+y$ direction'],
    correctAnswer: 1,
    explanation: '$\\vec F = q\\vec v \\times \\vec B$. $\\hat x \\times \\hat y = \\hat z$. Positive charge ⇒ force in $+z$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'A long straight wire carries current $I$. The magnetic field at distance $r$ from the wire has magnitude',
    options: ['$\\mu_0 I/(2\\pi r)$', '$\\mu_0 I/(4\\pi r^2)$', '$\\mu_0 I r$', '$\\mu_0 I^2/r$'],
    correctAnswer: 0,
    explanation: 'Ampère\'s law for long straight wire: $B = \\mu_0 I/(2\\pi r)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'A rectangular loop is pulled out of a region of uniform magnetic field at constant velocity. The induced current in the loop',
    options: [
      'is zero',
      'flows in a direction to oppose the decrease in flux',
      'flows in the same direction as the original flux',
      'reverses direction periodically',
    ],
    correctAnswer: 1,
    explanation: 'Lenz\'s law: as flux through loop decreases, induced current flows to MAINTAIN the original flux (oppose the change).',
  },
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'A 0.10 m² coil with 50 turns has its plane perpendicular to a magnetic field that increases uniformly from 0 to 0.40 T in 2.0 s. The induced EMF is',
    options: ['0.04 V', '0.20 V', '1.0 V', '4.0 V'],
    correctAnswer: 2,
    explanation: '$\\varepsilon = -N \\, d\\Phi/dt = N A (dB/dt) = 50(0.10)(0.40/2.0) = 50(0.10)(0.20) = 1.0$ V.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'A charged particle moves in a circle of radius $r$ in a uniform magnetic field. If the particle\'s speed doubles (with $B$ unchanged), the new radius is',
    options: ['$r/2$', '$r$', '$2r$', '$4r$'],
    correctAnswer: 2,
    explanation: '$r = mv/(qB)$. Double $v$ ⇒ double $r$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-magnetism-induction',
    question: 'The magnetic force does no work on a charged particle because',
    options: [
      'the magnetic field is always zero',
      'the force is always perpendicular to the velocity',
      'magnetic charges do not exist',
      'the particle moves in a straight line',
    ],
    correctAnswer: 1,
    explanation: '$\\vec F_B = q\\vec v \\times \\vec B$ is always perpendicular to $\\vec v$, so $\\vec F \\cdot \\vec v = 0 \\Rightarrow$ zero power, zero work.',
  },

  /* ---- U6 Geometric Optics & Waves (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-optics-waves',
    question: 'Light travels from air ($n = 1.00$) into glass ($n = 1.50$) at 30° from the normal. The angle of refraction is',
    options: ['19.5°', '30°', '41.8°', '60°'],
    correctAnswer: 0,
    explanation: 'Snell: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\Rightarrow \\sin\\theta_2 = (1.00)(0.5)/1.50 = 0.333 \\Rightarrow \\theta_2 \\approx 19.5°$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-optics-waves',
    question: 'For total internal reflection to occur, light must travel from',
    options: [
      'lower index to higher index',
      'higher index to lower index, above the critical angle',
      'air to glass',
      'any medium at any angle',
    ],
    correctAnswer: 1,
    explanation: 'TIR requires $n_1 > n_2$ AND incidence angle $> \\theta_c$ where $\\sin\\theta_c = n_2/n_1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-optics-waves',
    question: 'A converging lens of focal length 10 cm produces a real image when an object is placed at',
    options: ['5 cm from lens', '10 cm from lens', '15 cm from lens', 'It always produces a virtual image'],
    correctAnswer: 2,
    explanation: 'Real image forms when object is BEYOND the focal point ($d_o > f$). At $d_o = 15$ cm $> 10$ cm, image is real and inverted.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-optics-waves',
    question: 'In a double-slit experiment with slit separation 0.20 mm and screen distance 1.0 m, the second-order bright fringe of 600 nm light is at',
    options: ['1.5 mm', '3.0 mm', '6.0 mm', '12 mm'],
    correctAnswer: 2,
    explanation: '$y = m\\lambda L/d = 2(600 \\times 10^{-9})(1.0)/(0.20 \\times 10^{-3}) = 6.0 \\times 10^{-3}$ m = 6.0 mm.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-optics-waves',
    question: 'A wave on a string has frequency 200 Hz and wavelength 0.50 m. Its speed is',
    options: ['50 m/s', '100 m/s', '200 m/s', '400 m/s'],
    correctAnswer: 1,
    explanation: '$v = f\\lambda = 200(0.50) = 100$ m/s.',
  },

  /* ---- U7 Modern / Quantum (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-modern-physics',
    question: 'In the photoelectric effect, increasing the intensity of incident light (frequency unchanged) increases',
    options: [
      'the maximum kinetic energy of emitted electrons',
      'the work function of the metal',
      'the number of emitted electrons per second',
      'the threshold frequency',
    ],
    correctAnswer: 2,
    explanation: 'KE_max depends only on frequency, not intensity. Intensity ↑ ⇒ more photons per second ⇒ more electrons emitted per second.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-modern-physics',
    question: 'The energy of a photon with frequency $f$ is',
    options: ['$hf$', '$h/f$', '$hc f$', '$h^2 f$'],
    correctAnswer: 0,
    explanation: 'Planck: $E = hf$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-modern-physics',
    question: 'The de Broglie wavelength of a particle with momentum $p$ is',
    options: ['$h p$', '$h/p$', '$p/h$', '$\\sqrt{hp}$'],
    correctAnswer: 1,
    explanation: 'de Broglie: $\\lambda = h/p$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-modern-physics',
    question: 'A nucleus emits an alpha particle. Its mass number $A$ and atomic number $Z$ change by',
    options: ['$\\Delta A = -2$, $\\Delta Z = -2$', '$\\Delta A = -4$, $\\Delta Z = -2$', '$\\Delta A = 0$, $\\Delta Z = +1$', '$\\Delta A = -4$, $\\Delta Z = -4$'],
    correctAnswer: 1,
    explanation: 'Alpha = $^4_2$He nucleus. Parent loses 4 nucleons (so $\\Delta A = -4$) and 2 protons ($\\Delta Z = -2$).',
  },
  {
    type: 'mcq',
    topic: 'unit-7-modern-physics',
    question: 'A radioactive sample has half-life 10 years. After 30 years, the fraction of the original sample remaining is',
    options: ['$1/3$', '$1/8$', '$1/9$', '$1/30$'],
    correctAnswer: 1,
    explanation: '30 years = 3 half-lives. Fraction remaining $= (1/2)^3 = 1/8$.',
  },
]
