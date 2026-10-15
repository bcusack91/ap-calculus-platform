// AP Physics C: Electricity and Magnetism Free-Response Questions
// Built to the 2025+ exam: four typed FRQs per exam, 95 minutes, 40 points.
//   Mathematical Routines (MR) 10 · Translation Between Representations (TBR) 12
//   Experimental Design and Analysis (LAB) 10 · Qualitative/Quantitative Translation (QQT) 8
// Two questions per type (two complete exams), calculus-based. Units follow the
// 2024-25 CED: 8 Electric Charges, Fields, and Gauss's Law, 9 Electric Potential,
// 10 Conductors and Capacitors, 11 Electric Circuits, 12 Magnetic Fields and
// Electromagnetism, 13 Electromagnetic Induction.
// Displacement current and mutual inductance are deliberately not assessed here.
// Every rubric line is worth one point, as on the official scoring guidelines.

import { shuffleArray } from '@/lib/shuffle-options'

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type PhysicsCEMFRQType = 'mr' | 'tbr' | 'lab' | 'qqt'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const PHYSICS_C_EM_FRQ_TYPES: { type: PhysicsCEMFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'mr', label: 'Mathematical Routines', short: 'MR', points: 10, minutes: 20 },
  { type: 'tbr', label: 'Translation Between Representations', short: 'TBR', points: 12, minutes: 25 },
  { type: 'lab', label: 'Experimental Design and Analysis', short: 'LAB', points: 10, minutes: 30 },
  { type: 'qqt', label: 'Qualitative/Quantitative Translation', short: 'QQT', points: 8, minutes: 20 },
]

export interface PhysicsCEMFRQ {
  id: string
  type: PhysicsCEMFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  /** Suggested minutes. */
  timeRecommendation: number
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const emFRQs: PhysicsCEMFRQ[] = [
  // =========================================================================
  // MR 1 — Gauss's law for a nonuniformly charged sphere (Units 8 and 9)
  // =========================================================================
  {
    id: 'em-frq-mr-1',
    type: 'mr',
    unit: 8,
    title: 'Mathematical Routines: A Sphere With Nonuniform Charge Density',
    prompt:
      'A solid, nonconducting sphere of radius $R = 0.10$ m has a spherically symmetric volume charge density $\\rho(r) = \\rho_0\\dfrac{r}{R}$ for $r \\le R$, where $\\rho_0 = 3.0 \\times 10^{-6}$ C/m³ and $r$ is the distance from the center. There are no other charges nearby. Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²).',
    totalPoints: 10,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the total charge $Q$ of the sphere in terms of $\\rho_0$ and $R$. Then calculate its value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Integrates over thin spherical shells: $Q = \\displaystyle\\int_0^R \\rho_0\\frac{r}{R}\\,4\\pi r^2\\,dr$.',
            keywords: ['4πr^2 dr', '4πr² dr', '4 pi r^2 dr', '4πr^2dr', 'dv = 4π', 'spherical shell'],
          },
          {
            points: 1,
            description: 'Correct expression and value: $Q = \\pi\\rho_0 R^3 \\approx 9.4 \\times 10^{-9}$ C.',
            keywords: ['πρ0r^3', 'πρ_0r^3', 'πρ0r³', 'pi rho0 r^3', '9.4', '9.42'],
          },
        ],
        sampleAnswer:
          '$Q = \\displaystyle\\int_0^R \\rho\\,dV = \\int_0^R \\rho_0\\frac{r}{R}\\,(4\\pi r^2\\,dr) = \\frac{4\\pi\\rho_0}{R}\\cdot\\frac{R^4}{4} = \\pi\\rho_0 R^3$.\n\n$Q = \\pi(3.0 \\times 10^{-6})(0.10)^3 \\approx 9.4 \\times 10^{-9}$ C.',
      },
      {
        label: '(b)',
        prompt:
          'Use Gauss\u2019s law to derive an expression for the magnitude of the electric field $E(r)$ inside the sphere ($r < R$), in terms of $\\rho_0$, $R$, $r$, and physical constants.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Chooses a concentric spherical Gaussian surface of radius $r$; by symmetry $\\vec E$ is radial and uniform on it, so the flux is $E(4\\pi r^2)$.',
            keywords: ['gaussian sphere', 'gaussian surface', 'e(4πr^2)', 'e(4πr²)', 'e·4πr', '4πr^2 e', '4πr² e', 'e 4πr^2'],
          },
          {
            points: 1,
            description:
              'Correct enclosed charge: $Q_{enc} = \\displaystyle\\int_0^r \\rho_0\\frac{r\'}{R}4\\pi r\'^2\\,dr\' = \\frac{\\pi\\rho_0 r^4}{R}$.',
            keywords: ['r^4/r', 'πρ0r^4', 'πρ_0r^4', 'πρ0r⁴', 'r⁴', 'r^4'],
          },
          {
            points: 1,
            description: 'Correct field: $E = \\dfrac{\\rho_0 r^2}{4\\epsilon_0 R}$.',
            keywords: ['ρ0r^2/(4ε0r)', 'ρ0 r^2/(4ε0 r)', 'ρ_0r^2/(4ε_0r)', 'r^2/(4ε0', 'r²/(4ε0', 'r^2/4ε0', 'r²/4ε0', 'r^2/(4ε_0'],
          },
        ],
        sampleAnswer:
          'Take a concentric spherical Gaussian surface of radius $r < R$. By spherical symmetry $\\vec E$ is radial with the same magnitude everywhere on the surface, so $\\oint \\vec E \\cdot d\\vec A = E(4\\pi r^2)$.\n\n$Q_{enc} = \\displaystyle\\int_0^r \\rho_0\\frac{r\'}{R}\\,4\\pi r\'^2\\,dr\' = \\frac{\\pi\\rho_0 r^4}{R}$.\n\nGauss\u2019s law: $E(4\\pi r^2) = \\dfrac{\\pi\\rho_0 r^4}{\\epsilon_0 R} \\Rightarrow E = \\dfrac{\\rho_0 r^2}{4\\epsilon_0 R}$, directed radially outward.',
      },
      {
        label: '(c)',
        prompt:
          'Derive an expression for the magnitude of the electric field outside the sphere ($r > R$). Calculate the field magnitude at the surface, and show that your expressions from parts (b) and (c) agree there.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'The whole charge is enclosed: $E = \\dfrac{Q}{4\\pi\\epsilon_0 r^2} = \\dfrac{\\rho_0 R^3}{4\\epsilon_0 r^2}$.',
            keywords: ['ρ0r^3/(4ε0r^2)', 'ρ0 r^3/(4ε0 r^2)', 'q/(4πε0r^2)', 'q/(4πε0 r^2)', 'kq/r^2', 'kq/r²', '1/r^2', '1/r²'],
          },
          {
            points: 1,
            description:
              'At $r = R$ both expressions give $\\dfrac{\\rho_0 R}{4\\epsilon_0} \\approx 8.5 \\times 10^3$ N/C, so the field is continuous.',
            keywords: ['8.5', '8.47', '8470', '8,470', 'continuous'],
          },
        ],
        sampleAnswer:
          'For $r > R$ the Gaussian sphere encloses all of $Q = \\pi\\rho_0 R^3$:\n\n$E(4\\pi r^2) = \\dfrac{\\pi\\rho_0 R^3}{\\epsilon_0} \\Rightarrow E = \\dfrac{\\rho_0 R^3}{4\\epsilon_0 r^2}$.\n\nAt $r = R$, part (b) gives $\\dfrac{\\rho_0 R^2}{4\\epsilon_0 R} = \\dfrac{\\rho_0 R}{4\\epsilon_0}$ and part (c) gives $\\dfrac{\\rho_0 R^3}{4\\epsilon_0 R^2} = \\dfrac{\\rho_0 R}{4\\epsilon_0}$, the same.\n\n$E(R) = \\dfrac{(3.0 \\times 10^{-6})(0.10)}{4(8.85 \\times 10^{-12})} \\approx 8.5 \\times 10^3$ N/C.',
      },
      {
        label: '(d)',
        prompt:
          'Derive an expression for the potential difference $V(0) - V(R)$ between the center and the surface of the sphere. Then calculate its value.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Relates potential to field with the correct sign: $V(0) - V(R) = -\\displaystyle\\int_R^0 E\\,dr = \\int_0^R E\\,dr$.',
            keywords: ['-∫e', '−∫e', '- ∫ e', '∫e dr', '∫ e dr', '∫edr', 'integral of e', '-∫ e'],
          },
          {
            points: 1,
            description: 'Uses the inside field: $\\displaystyle\\int_0^R \\frac{\\rho_0 r^2}{4\\epsilon_0 R}\\,dr$.',
            keywords: ['r^3/3', 'r³/3', 'ρ0r^2/(4ε0r) dr', 'r^2/(4ε0r) dr', 'inside field'],
          },
          {
            points: 1,
            description: 'Correct result: $V(0) - V(R) = \\dfrac{\\rho_0 R^2}{12\\epsilon_0} \\approx 2.8 \\times 10^2$ V.',
            keywords: ['12ε0', '12 ε0', '12ε_0', '282', '283', '2.8 × 10^2', '2.8x10^2', '280 v'],
          },
        ],
        sampleAnswer:
          '$V(0) - V(R) = -\\displaystyle\\int_R^0 E\\,dr = \\int_0^R \\frac{\\rho_0 r^2}{4\\epsilon_0 R}\\,dr = \\frac{\\rho_0}{4\\epsilon_0 R}\\cdot\\frac{R^3}{3} = \\frac{\\rho_0 R^2}{12\\epsilon_0}$.\n\n$V(0) - V(R) = \\dfrac{(3.0 \\times 10^{-6})(0.10)^2}{12(8.85 \\times 10^{-12})} \\approx 2.8 \\times 10^2$ V. The center is at the higher potential, as expected for positive charge with an outward field.',
      },
    ],
  },

  // =========================================================================
  // MR 2 — Long wire and a rectangular loop (Units 12 and 13)
  // =========================================================================
  {
    id: 'em-frq-mr-2',
    type: 'mr',
    unit: 12,
    title: 'Mathematical Routines: A Long Wire and a Rectangular Loop',
    prompt:
      'A long, straight wire lies along the $y$-axis and carries a constant current $I_1 = 20$ A in the $+y$-direction. A rectangular loop of wire lies in the $xy$-plane to the right of the wire. The loop\u2019s two sides parallel to the wire have length $a = 0.10$ m, and its two sides perpendicular to the wire have length $b = 0.20$ m. The near side is at $x = d = 0.050$ m and the far side is at $x = d + b = 0.25$ m. A small power supply in the loop maintains a current $I_2 = 5.0$ A that circulates clockwise as viewed from the $+z$-axis, so the current in the near side is in the $+y$-direction. Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.',
    totalPoints: 10,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Use Ampère\u2019s law to derive an expression for the magnitude of the magnetic field a distance $r$ from the long wire. Then calculate the magnitude and direction of the field at the near side of the loop.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies Ampère\u2019s law to a circular path centered on the wire: $B(2\\pi r) = \\mu_0 I_1$, so $B = \\dfrac{\\mu_0 I_1}{2\\pi r}$.',
            keywords: ['b(2πr)', 'b·2πr', 'b 2πr', 'b(2pi r)', 'amperian', 'μ0i/(2πr)', 'μ0 i/(2πr)', 'μ0i1/(2πr)'],
          },
          {
            points: 1,
            description: 'Correct value and direction: $B = 8.0 \\times 10^{-5}$ T, in the $-z$-direction (into the page).',
            keywords: ['8.0 × 10^-5', '8 × 10^-5', '8.0x10^-5', '8x10^-5', '8.0e-5', '8e-5', '8.0 x 10^-5'],
          },
        ],
        sampleAnswer:
          'By symmetry the field forms circles around the wire with constant magnitude on a circle of radius $r$. Ampère\u2019s law: $\\oint \\vec B \\cdot d\\vec\\ell = B(2\\pi r) = \\mu_0 I_1 \\Rightarrow B = \\dfrac{\\mu_0 I_1}{2\\pi r}$.\n\nAt $r = d = 0.050$ m: $B = \\dfrac{(4\\pi \\times 10^{-7})(20)}{2\\pi(0.050)} = 8.0 \\times 10^{-5}$ T. By the right-hand rule (current in $+y$, point at $+x$), the field points in the $-z$-direction, into the page.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the magnitude and direction of the net magnetic force exerted on the loop by the long wire.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Indicates that the forces on the two sides perpendicular to the wire are equal in magnitude and opposite in direction, so they cancel.',
            keywords: ['cancel', 'equal and opposite'],
          },
          {
            points: 1,
            description:
              'Correct forces on the parallel sides: $\\dfrac{\\mu_0 I_1 I_2 a}{2\\pi d} = 4.0 \\times 10^{-5}$ N toward the wire on the near side and $8.0 \\times 10^{-6}$ N away from the wire on the far side.',
            keywords: ['4.0 × 10^-5', '4 × 10^-5', '4.0x10^-5', '4x10^-5', '4e-5', '8.0 × 10^-6', '8 × 10^-6', '8x10^-6', '8e-6'],
          },
          {
            points: 1,
            description: 'Correct net force: $3.2 \\times 10^{-5}$ N toward the wire (the $-x$-direction).',
            keywords: ['3.2 × 10^-5', '3.2x10^-5', '3.2e-5', '3.2 x 10^-5'],
          },
        ],
        sampleAnswer:
          'The top and bottom sides carry opposite currents through the same field pattern, so their forces are equal and opposite and cancel.\n\nNear side (current parallel to $I_1$, attracted): $F = \\dfrac{\\mu_0 I_1 I_2 a}{2\\pi d} = \\dfrac{(2 \\times 10^{-7})(20)(5.0)(0.10)}{0.050} = 4.0 \\times 10^{-5}$ N toward the wire.\n\nFar side (current antiparallel, repelled): $F = \\dfrac{(2 \\times 10^{-7})(20)(5.0)(0.10)}{0.25} = 8.0 \\times 10^{-6}$ N away from the wire.\n\nNet: $4.0 \\times 10^{-5} - 0.8 \\times 10^{-5} = 3.2 \\times 10^{-5}$ N toward the wire ($-x$).',
      },
      {
        label: '(c)',
        prompt:
          'Derive an expression for the magnetic flux through the loop due to the long wire, in terms of $I_1$, $a$, $b$, $d$, and physical constants. Then calculate its value.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Because $B$ varies with $x$, integrates over thin strips of area $a\\,dx$: $\\Phi = \\displaystyle\\int_d^{d+b} \\frac{\\mu_0 I_1}{2\\pi x}\\,a\\,dx$.',
            keywords: ['a dx', 'a·dx', 'adx', 'integrat', '∫'],
          },
          {
            points: 1,
            description: 'Correct expression: $\\Phi = \\dfrac{\\mu_0 I_1 a}{2\\pi}\\ln\\left(\\dfrac{d + b}{d}\\right)$.',
            keywords: ['ln((d + b)/d)', 'ln((d+b)/d)', 'ln(5)', 'ln 5', 'ln5'],
          },
          {
            points: 1,
            description: 'Correct value: $\\Phi \\approx 6.4 \\times 10^{-7}$ Wb.',
            keywords: ['6.4 × 10^-7', '6.4x10^-7', '6.4e-7', '6.44', '6.4 x 10^-7'],
          },
        ],
        sampleAnswer:
          'The field is perpendicular to the loop but depends on $x$, so take strips of width $dx$ and height $a$:\n\n$\\Phi = \\displaystyle\\int_d^{d+b} \\frac{\\mu_0 I_1}{2\\pi x}\\,a\\,dx = \\frac{\\mu_0 I_1 a}{2\\pi}\\ln\\left(\\frac{d + b}{d}\\right)$.\n\n$\\Phi = (2 \\times 10^{-7})(20)(0.10)\\ln 5 \\approx 6.4 \\times 10^{-7}$ Wb.',
      },
      {
        label: '(d)',
        prompt:
          'The power supply is removed, leaving a closed conducting loop. The current $I_1$ in the long wire is then made to decrease at a constant rate of 40 A/s. Calculate the magnitude of the emf induced in the loop, and indicate the direction of the induced current (clockwise or counterclockwise as viewed from the $+z$-axis).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Faraday\u2019s law: $|\\varepsilon| = \\dfrac{d\\Phi}{dt} = \\dfrac{\\mu_0 a}{2\\pi}\\ln\\left(\\dfrac{d + b}{d}\\right)\\left|\\dfrac{dI_1}{dt}\\right| \\approx 1.3 \\times 10^{-6}$ V.',
            keywords: ['1.3 × 10^-6', '1.3x10^-6', '1.29', '1.3e-6', '1.3 x 10^-6', '1.3 μv', '1.3 µv'],
          },
          {
            points: 1,
            description:
              'Clockwise: the flux into the page is decreasing, so by Lenz\u2019s law the induced current produces a field into the page inside the loop.',
            keywords: [' clockwise', 'is clockwise', 'flows clockwise'],
          },
        ],
        sampleAnswer:
          '$|\\varepsilon| = \\left|\\dfrac{d\\Phi}{dt}\\right| = \\dfrac{\\mu_0 a}{2\\pi}\\ln 5\\left|\\dfrac{dI_1}{dt}\\right| = (2 \\times 10^{-7})(0.10)(1.609)(40) \\approx 1.3 \\times 10^{-6}$ V.\n\nThe wire\u2019s field through the loop points into the page ($-z$) and is decreasing. By Lenz\u2019s law the induced current opposes the change by producing a field into the page inside the loop, so the induced current is clockwise as viewed from the $+z$-axis.',
      },
    ],
  },

  // =========================================================================
  // TBR 1 — RC circuit with a capacitor across one resistor (Unit 11)
  // =========================================================================
  {
    id: 'em-frq-tbr-1',
    type: 'tbr',
    unit: 11,
    title: 'Translation Between Representations: A Capacitor in Parallel With a Resistor',
    prompt:
      'A battery of emf $\\varepsilon = 12$ V and negligible internal resistance, a switch S, and a resistor $R_1 = 100\\ \\Omega$ are connected in series with a parallel combination of a resistor $R_2 = 200\\ \\Omega$ and a capacitor $C = 50\\ \\mu$F (the capacitor is connected directly across $R_2$). The capacitor is initially uncharged. Switch S is closed at time $t = 0$.',
    totalPoints: 12,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Calculate the current in $R_1$ and in $R_2$ (i) immediately after the switch is closed and (ii) a long time after the switch is closed. (iii) Calculate the charge on the capacitor a long time after the switch is closed.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Immediately after closing, the uncharged capacitor has no potential difference and acts like a wire across $R_2$: $I_1 = \\varepsilon/R_1 = 0.12$ A and $I_2 = 0$.',
            keywords: ['0.12 a', '120 ma', 'like a wire', 'short'],
          },
          {
            points: 1,
            description:
              'Long after, the capacitor carries no current: $I_1 = I_2 = \\varepsilon/(R_1 + R_2) = 0.040$ A.',
            keywords: ['0.040 a', '0.04 a', '40 ma'],
          },
          {
            points: 1,
            description: 'The capacitor voltage equals the voltage across $R_2$, 8.0 V, so $Q = CV = 4.0 \\times 10^{-4}$ C.',
            keywords: ['4.0 × 10^-4', '4 × 10^-4', '4.0x10^-4', '4x10^-4', '4e-4', '400 μc', '400 µc', '400 uc', '0.40 mc', '0.4 mc'],
          },
        ],
        sampleAnswer:
          '(i) At $t = 0$ the capacitor is uncharged, so $V_C = 0$ and it acts like a wire that shorts out $R_2$: $I_2 = V_C/R_2 = 0$ and $I_1 = \\varepsilon/R_1 = 12/100 = 0.12$ A (all of it into the capacitor).\n\n(ii) After a long time the capacitor is fully charged and carries no current, so $R_1$ and $R_2$ are in series: $I_1 = I_2 = \\dfrac{12}{300} = 0.040$ A.\n\n(iii) $V_C = I_2R_2 = (0.040)(200) = 8.0$ V, so $Q = CV_C = (50 \\times 10^{-6})(8.0) = 4.0 \\times 10^{-4}$ C.',
      },
      {
        label: '(b)',
        prompt:
          'Derive a differential equation for the capacitor voltage $V_C(t)$ while the capacitor charges. Then solve it to find $V_C(t)$, including the numerical value of the time constant.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Loop rule through the battery, $R_1$, and the capacitor: $\\varepsilon - I_1 R_1 - V_C = 0$.',
            keywords: ['loop rule', 'kirchhoff', 'ε - i1r1', 'ε − i1r1', 'ε - i_1r_1', '12 - 100i', 'emf - i1r1'],
          },
          {
            points: 1,
            description:
              'Junction rule with the capacitor current: $I_1 = \\dfrac{V_C}{R_2} + C\\dfrac{dV_C}{dt}$.',
            keywords: ['c dv/dt', 'cdv/dt', 'c(dv/dt)', 'dq/dt', 'junction'],
          },
          {
            points: 1,
            description:
              'Combines and solves (separation of variables with $V_C(0) = 0$): $C\\dfrac{dV_C}{dt} = \\dfrac{\\varepsilon}{R_1} - V_C\\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)$.',
            keywords: ['separat', 'ln', 'integrat', '1/r1 + 1/r2'],
          },
          {
            points: 1,
            description:
              'Correct solution: $V_C(t) = 8.0\\left(1 - e^{-t/\\tau}\\right)$ V with $\\tau = \\dfrac{R_1R_2}{R_1 + R_2}C \\approx 3.3$ ms.',
            keywords: ['3.3 ms', '0.0033', '3.33', '1/300 s', '3.3 × 10^-3', '3.3x10^-3'],
          },
        ],
        sampleAnswer:
          'Loop through the battery, $R_1$, and $C$: $\\varepsilon - I_1R_1 - V_C = 0$.\n\nJunction: $I_1 = I_2 + I_C = \\dfrac{V_C}{R_2} + C\\dfrac{dV_C}{dt}$.\n\nSubstituting: $C\\dfrac{dV_C}{dt} = \\dfrac{\\varepsilon - V_C}{R_1} - \\dfrac{V_C}{R_2} = \\dfrac{\\varepsilon}{R_1} - V_C\\left(\\dfrac{R_1 + R_2}{R_1R_2}\\right)$.\n\nThis has the form $\\dfrac{dV_C}{dt} = \\dfrac{V_f - V_C}{\\tau}$ with $V_f = \\dfrac{\\varepsilon R_2}{R_1 + R_2} = 8.0$ V and $\\tau = \\dfrac{R_1R_2}{R_1 + R_2}C = (66.7)(50 \\times 10^{-6}) \\approx 3.3 \\times 10^{-3}$ s. Separating and integrating from $V_C(0) = 0$:\n\n$V_C(t) = 8.0\\left(1 - e^{-t/(3.3\\text{ ms})}\\right)$ V.',
      },
      {
        label: '(c)',
        prompt:
          'Describe graphs of the current $I_1$ in $R_1$ and the capacitor voltage $V_C$ as functions of time from $t = 0$ to $t = 20$ ms. Label the starting value, the value approached, and the value at $t = \\tau$ on each graph.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              '$I_1$: starts at 0.12 A and decreases exponentially (concave up), approaching 0.040 A asymptotically.',
            keywords: ['from 0.12', 'starts at 0.12', 'approaches 0.04', 'approaches 0.040', 'asymptot'],
          },
          {
            points: 1,
            description: '$V_C$: starts at 0 and increases (concave down), approaching 8.0 V asymptotically.',
            keywords: ['approaches 8', 'to 8.0 v', 'to 8 v', 'toward 8'],
          },
          {
            points: 1,
            description:
              'Values at $t = \\tau \\approx 3.3$ ms: $V_C \\approx 5.1$ V (63% of 8.0 V) and $I_1 = (\\varepsilon - V_C)/R_1 \\approx 0.069$ A; both graphs are essentially flat after about $5\\tau \\approx 17$ ms.',
            keywords: ['5.1', '63%', '0.069', '0.07 a', '17 ms', '5τ'],
          },
        ],
        sampleAnswer:
          '$V_C$ starts at 0, rises steeply at first and then levels off (concave down), approaching 8.0 V. At $t = \\tau \\approx 3.3$ ms it is $8.0(1 - e^{-1}) \\approx 5.1$ V.\n\n$I_1 = (\\varepsilon - V_C)/R_1$ starts at 0.12 A and decays exponentially (concave up) toward 0.040 A. At $t = \\tau$: $I_1 = (12 - 5.1)/100 \\approx 0.069$ A.\n\nBy about $5\\tau \\approx 17$ ms both graphs are essentially at their final values, so they are nearly horizontal from 17 ms to 20 ms.',
      },
      {
        label: '(d)',
        prompt:
          'A long time after S was closed, S is opened. (i) Indicate whether the current in $R_2$ immediately after S is opened is in the same direction as, or the opposite direction to, the current in $R_2$ just before, and give its magnitude. (ii) Calculate the time after S is opened for the capacitor voltage to fall to half its initial value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Same direction and the same magnitude, 0.040 A: the capacitor (still at 8.0 V with the same polarity) now discharges through $R_2$.',
            keywords: ['same direction', 'unchanged direction', 'does not reverse'],
          },
          {
            points: 1,
            description: 'The capacitor discharges through $R_2$ alone: $t_{1/2} = R_2C\\ln 2 \\approx 6.9$ ms.',
            keywords: ['6.9 ms', '0.0069', '6.93', '6.9 × 10^-3', '6.9x10^-3'],
          },
        ],
        sampleAnswer:
          '(i) Same direction, magnitude 0.040 A. With S open, the only path is the loop formed by $C$ and $R_2$. The capacitor\u2019s higher-potential plate is connected to the same end of $R_2$ that was at the higher potential before, so charge flows through $R_2$ the same way, initially $I_2 = 8.0/200 = 0.040$ A.\n\n(ii) The discharge time constant is $R_2C = (200)(50 \\times 10^{-6}) = 0.010$ s. $V_C = 8.0e^{-t/R_2C}$ falls to half when $t = R_2C\\ln 2 \\approx 6.9$ ms.',
      },
    ],
  },

  // =========================================================================
  // TBR 2 — Point charge inside a charged conducting shell (Units 8, 9, 10)
  // =========================================================================
  {
    id: 'em-frq-tbr-2',
    type: 'tbr',
    unit: 10,
    title: 'Translation Between Representations: A Point Charge Inside a Conducting Shell',
    prompt:
      'A point charge $+Q$ is fixed at the center of a thick, spherical conducting shell with inner radius $a$ and outer radius $b$. The shell carries a net charge of $-3Q$. The system is in electrostatic equilibrium, there are no other charges nearby, and $V = 0$ infinitely far away. Let $k = \\dfrac{1}{4\\pi\\epsilon_0}$, and take radially outward as positive.',
    totalPoints: 12,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate the charge on the inner surface and the charge on the outer surface of the shell. Justify your answer.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Inner surface charge: $-Q$.',
            keywords: ['inner surface has -q', 'inner surface: -q', 'inner surface is -q', 'inner surface −q', 'inner surface -q', '-q on the inner', '−q on the inner'],
          },
          {
            points: 1,
            description: 'Outer surface charge: $-2Q$.',
            keywords: ['-2q', '−2q'],
          },
          {
            points: 1,
            description:
              'Justification: $\\vec E = 0$ inside the conducting material, so a Gaussian surface within the conductor has zero flux and encloses zero net charge; charge conservation puts the rest, $-3Q - (-Q) = -2Q$, on the outer surface.',
            keywords: ['field inside the conductor is zero', 'e = 0 inside', 'zero inside the conductor', 'encloses zero', 'zero net charge', 'zero flux'],
          },
        ],
        sampleAnswer:
          'Inner surface: $-Q$. Outer surface: $-2Q$.\n\nIn electrostatic equilibrium the field inside the conducting material is zero. A Gaussian sphere drawn inside the conductor therefore has zero flux and must enclose zero net charge, so the inner surface must carry $-Q$ to cancel the $+Q$ at the center. The shell\u2019s total charge is $-3Q$, so the outer surface carries $-3Q - (-Q) = -2Q$.',
      },
      {
        label: '(b)',
        prompt:
          'Use Gauss\u2019s law to derive expressions for the radial component of the electric field $E_r$ in the three regions $r < a$, $a < r < b$, and $r > b$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Uses concentric spherical Gaussian surfaces, on which $E$ is radial and uniform by symmetry: $E_r(4\\pi r^2) = Q_{enc}/\\epsilon_0$.',
            keywords: ['gaussian sphere', 'gaussian surface', 'e(4πr^2)', 'e(4πr²)', '4πr^2', '4πr²'],
          },
          {
            points: 1,
            description: '$r < a$: $E_r = +\\dfrac{kQ}{r^2}$; $a < r < b$: $E_r = 0$.',
            keywords: ['kq/r^2', 'kq/r²', 'q/(4πε0r^2)', 'q/(4πε0 r^2)'],
          },
          {
            points: 1,
            description: '$r > b$: $Q_{enc} = -2Q$, so $E_r = -\\dfrac{2kQ}{r^2}$ (directed radially inward).',
            keywords: ['-2kq/r^2', '−2kq/r^2', '-2kq/r²', '−2kq/r²', '2kq/r^2 inward', 'inward'],
          },
        ],
        sampleAnswer:
          'For a concentric Gaussian sphere of radius $r$, symmetry makes $E_r$ uniform over the surface: $E_r(4\\pi r^2) = Q_{enc}/\\epsilon_0$, so $E_r = kQ_{enc}/r^2$.\n\n- $r < a$: $Q_{enc} = +Q$, so $E_r = +\\dfrac{kQ}{r^2}$ (outward).\n- $a < r < b$ (in the conductor): $Q_{enc} = Q - Q = 0$, so $E_r = 0$.\n- $r > b$: $Q_{enc} = Q - 3Q = -2Q$, so $E_r = -\\dfrac{2kQ}{r^2}$ (inward).',
      },
      {
        label: '(c)',
        prompt:
          'Describe a graph of $E_r$ as a function of $r$ from $r = 0$ to $r = 3b$. Label the values of $E_r$ just inside $r = a$ and just outside $r = b$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              '$0 < r < a$: positive, decreasing as $1/r^2$ (very large near the center) down to $kQ/a^2$ just inside $r = a$.',
            keywords: ['kq/a^2', 'kq/a²', 'positive and decreas', 'decreases as 1/r^2', '1/r^2', '1/r²'],
          },
          {
            points: 1,
            description: '$a < r < b$: exactly zero, with abrupt jumps at $r = a$ and $r = b$.',
            keywords: ['zero between', 'zero inside the conductor', 'zero in the conductor', 'jump', 'discontinu'],
          },
          {
            points: 1,
            description:
              '$r > b$: negative, starting at $-2kQ/b^2$ just outside $r = b$ and approaching zero as $1/r^2$ (reaching $-2kQ/(9b^2)$ at $r = 3b$).',
            keywords: ['-2kq/b^2', '−2kq/b^2', '-2kq/b²', '−2kq/b²', '2kq/b^2', '2kq/b²'],
          },
        ],
        sampleAnswer:
          'For $0 < r < a$ the graph is above the axis and falls off as $1/r^2$, growing without bound near $r = 0$ and reaching $kQ/a^2$ just inside $r = a$. It drops abruptly to zero at $r = a$ and stays exactly zero throughout the conductor. At $r = b$ it jumps abruptly to $-2kQ/b^2$, below the axis, and then rises toward zero as $1/r^2$, reaching $-2kQ/(9b^2)$ at $r = 3b$.',
      },
      {
        label: '(d)',
        prompt:
          'Derive expressions for the electric potential $V(r)$ in the regions $r > b$, $a < r < b$, and $r < a$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: '$r > b$: $V = -\\dfrac{2kQ}{r}$, using $V = -\\displaystyle\\int_\\infty^r E_r\\,dr$.',
            keywords: ['-2kq/r', '−2kq/r'],
          },
          {
            points: 1,
            description: '$a < r < b$: the potential is constant, $V = -\\dfrac{2kQ}{b}$, because $E = 0$ in the conductor.',
            keywords: ['-2kq/b', '−2kq/b', 'constant'],
          },
          {
            points: 1,
            description: '$r < a$: $V = \\dfrac{kQ}{r} - \\dfrac{kQ}{a} - \\dfrac{2kQ}{b}$.',
            keywords: ['kq/r - kq/a', 'kq/r − kq/a', 'kq/a - 2kq/b', 'kq/a − 2kq/b', '1/r - 1/a', '1/r − 1/a'],
          },
        ],
        sampleAnswer:
          '$V(r) = -\\displaystyle\\int_\\infty^r E_r\\,dr$.\n\n- $r > b$: $V = -\\displaystyle\\int_\\infty^r \\left(-\\frac{2kQ}{r\'^2}\\right)dr\' = -\\frac{2kQ}{r}$.\n- $a < r < b$: $E_r = 0$, so $V$ stays at its value at $r = b$: $V = -\\dfrac{2kQ}{b}$.\n- $r < a$: $V(r) = V(a) - \\displaystyle\\int_a^r \\frac{kQ}{r\'^2}\\,dr\' = -\\frac{2kQ}{b} + kQ\\left(\\frac{1}{r} - \\frac{1}{a}\\right) = \\frac{kQ}{r} - \\frac{kQ}{a} - \\frac{2kQ}{b}$.',
      },
    ],
  },

  // =========================================================================
  // LAB 1 — Dielectric constant of paper (Unit 10)
  // =========================================================================
  {
    id: 'em-frq-lab-1',
    type: 'lab',
    unit: 10,
    title: 'Experimental Design and Analysis: The Dielectric Constant of Paper',
    prompt:
      'Students want to determine the dielectric constant $\\kappa$ of a type of paper. They have two flat square aluminum plates, each of area $A = 0.040$ m², a stack of identical sheets of the paper, each of thickness $t = 1.0 \\times 10^{-4}$ m, a capacitance meter, and heavy books to press the plates flat. Placing $n$ sheets between the plates makes a parallel-plate capacitor with plate separation $nt$ completely filled with paper. Use $\\epsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²).',
    totalPoints: 10,
    timeRecommendation: 30,
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Number of sheets n</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>Capacitance C (nF)</th><td>10.7</td><td>5.4</td><td>3.6</td><td>2.7</td><td>2.2</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure the students could use to collect data that would allow them to determine $\\kappa$. Include enough detail that another student could repeat it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Places $n$ sheets between the plates, presses them flat, and measures the capacitance with the meter, for several different numbers of sheets.',
            keywords: ['capacitance meter', 'number of sheets', 'different numbers of sheets', 'vary n', 'different n'],
          },
          {
            points: 1,
            description:
              'Reduces experimental uncertainty: repeats each measurement (reassembling the stack) and averages, and/or uses many values of $n$.',
            keywords: ['repeat', 'average', 'several values', 'multiple trials'],
          },
        ],
        sampleAnswer:
          '1. Put one sheet of paper between the plates, line the plates up, and press them flat with the books.\n2. Connect the capacitance meter to the two plates and record $C$.\n3. Repeat with 2, 3, 4, and 5 sheets.\n4. For each $n$, take the stack apart, reassemble it, and measure three times; average the readings.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an equation for $C$ in terms of $n$, $\\kappa$, $A$, $t$, and physical constants. Then describe how a graph of the data could be used to find $\\kappa$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses $C = \\dfrac{\\kappa\\epsilon_0 A}{d}$ with $d = nt$: $C = \\dfrac{\\kappa\\epsilon_0 A}{nt}$.',
            keywords: ['κε0a/(nt)', 'κε0a/nt', 'kε0a/(nt)', 'κε_0a/(nt)', 'κ ε0 a/(n t)', 'kappa', 'κε0a/d'],
          },
          {
            points: 1,
            description:
              'A graph of $C$ versus $1/n$ is a straight line through the origin with slope $\\kappa\\epsilon_0 A/t$, so $\\kappa = \\dfrac{\\text{slope}\\cdot t}{\\epsilon_0 A}$. Any correct linearization earns this point (for example, $1/C$ versus $n$, with slope $t/(\\kappa\\epsilon_0 A)$).',
            keywords: ['c vs 1/n', 'c versus 1/n', 'c vs. 1/n', 'against 1/n', 'κε0a/t', 'kε0a/t', '1/c vs n', '1/c versus n', 't/(κε0a)'],
          },
        ],
        sampleAnswer:
          'For a parallel-plate capacitor filled with a dielectric, $C = \\dfrac{\\kappa\\epsilon_0 A}{d}$, and here $d = nt$:\n\n$C = \\dfrac{\\kappa\\epsilon_0 A}{t}\\cdot\\dfrac{1}{n}$.\n\nA graph of $C$ (vertical) versus $1/n$ (horizontal) is a straight line through the origin with slope $\\dfrac{\\kappa\\epsilon_0 A}{t}$, so $\\kappa = \\dfrac{\\text{slope}\\cdot t}{\\epsilon_0 A}$.',
      },
      {
        label: '(c)',
        prompt:
          'Using the quantities from part (b), calculate any values you need from the data in the table, describe the graph of the data and the best-fit line, and calculate the slope of the best-fit line, using points on the line rather than data points.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Correct values of $1/n$: 1.00, 0.50, 0.33, 0.25, 0.20.',
            keywords: ['0.33', '0.333', '1.00, 0.50', '1, 0.5'],
          },
          {
            points: 1,
            description: 'Plots $C$ (nF) on the vertical axis against $1/n$ on the horizontal axis, with labeled axes and linear scales.',
            keywords: ['c (nf)', 'capacitance (nf)', 'vertical axis', 'horizontal axis', 'y-axis', 'x-axis'],
          },
          {
            points: 1,
            description: 'The points lie close to a straight line that passes through (approximately) the origin; the best-fit line passes among them.',
            keywords: ['best-fit', 'best fit', 'straight line', 'through the origin'],
          },
          {
            points: 1,
            description: 'Slope between 10.3 and 11.0 nF (least-squares value 10.6 nF, or $1.06 \\times 10^{-8}$ F).',
            keywords: ['10.6', '10.5', '10.7', '10.4', '1.06 × 10^-8', '1.06x10^-8', '1.06e-8'],
          },
        ],
        sampleAnswer:
          '$1/n$: 1.00, 0.50, 0.33, 0.25, 0.20.\n\nPlot $C$ (nF) on the vertical axis from 0 to 11 nF and $1/n$ on the horizontal axis from 0 to 1.0. The five points lie very close to a straight line through the origin.\n\nA best-fit line passes through about $(0.10, 1.12\\text{ nF})$ and $(1.00, 10.70\\text{ nF})$:\n\n$\\text{slope} = \\dfrac{10.70 - 1.12}{1.00 - 0.10} \\approx 10.6$ nF $= 1.06 \\times 10^{-8}$ F.',
      },
      {
        label: '(d)',
        prompt:
          'Use your slope to calculate $\\kappa$. The best-fit line has a small positive vertical intercept, about 0.06 nF. Suggest a physical reason for it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$\\kappa = \\dfrac{\\text{slope}\\cdot t}{\\epsilon_0 A}$, giving a value between 2.9 and 3.1 (about 3.0).',
            keywords: ['3.0', '2.99', '3.01', '2.9', '3.1', 'κ = 3', 'kappa = 3'],
          },
          {
            points: 1,
            description:
              'A reasonable cause of a small extra capacitance that does not depend on $n$: the capacitance of the meter leads and connections (stray capacitance), or fringing fields at the plate edges.',
            keywords: ['stray', 'leads', 'wires', 'fringing', 'edge', 'parasitic'],
          },
        ],
        sampleAnswer:
          '$\\kappa = \\dfrac{\\text{slope}\\cdot t}{\\epsilon_0 A} = \\dfrac{(1.06 \\times 10^{-8})(1.0 \\times 10^{-4})}{(8.85 \\times 10^{-12})(0.040)} \\approx 3.0$.\n\nThe model predicts zero capacitance as $1/n \\to 0$ (infinite separation). The small positive intercept suggests an extra capacitance that is present no matter how many sheets are used, such as the stray capacitance of the meter leads and connections.',
      },
    ],
  },

  // =========================================================================
  // LAB 2 — Measuring B with a rotating coil (Unit 13)
  // =========================================================================
  {
    id: 'em-frq-lab-2',
    type: 'lab',
    unit: 13,
    title: 'Experimental Design and Analysis: Measuring a Magnetic Field With a Rotating Coil',
    prompt:
      'Students want to measure the magnitude $B$ of the uniform magnetic field between the poles of a large permanent magnet. They have a flat coil of $N = 50$ turns, each enclosing area $A = 0.010$ m², mounted on an axle so that it can be spun in the field by a variable-speed motor; the axle is perpendicular to the field. The coil\u2019s ends connect through slip rings to a voltage probe and a computer that records voltage versus time. A photogate measures the rotation rate $f$ in revolutions per second.',
    totalPoints: 10,
    timeRecommendation: 30,
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Rotation rate f (rev/s)</th><td>2.0</td><td>4.0</td><td>6.0</td><td>8.0</td><td>10.0</td></tr><tr><th>Peak emf ε<sub>max</sub> (V)</th><td>0.26</td><td>0.49</td><td>0.77</td><td>0.99</td><td>1.27</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure the students could use to collect data that would allow them to determine $B$. Include enough detail that another student could repeat it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Spins the coil at a steady rate, measures $f$ with the photogate, and reads the peak (maximum) emf from the voltage-time graph, for several different rotation rates.',
            keywords: ['peak', 'maximum voltage', 'maximum emf', 'amplitude'],
          },
          {
            points: 1,
            description: 'Reduces uncertainty: averages the peak over many cycles and/or repeats at each rate.',
            keywords: ['repeat', 'average', 'many cycles', 'several cycles', 'different rates', 'different speeds'],
          },
        ],
        sampleAnswer:
          '1. Set the motor to a steady speed and record the rotation rate $f$ from the photogate.\n2. Record the coil\u2019s voltage versus time for several seconds and read the peak emf $\\varepsilon_{max}$ from the graph, averaging the peaks over 10 cycles.\n3. Repeat for at least five different motor speeds.\n4. Repeat the whole set and average the peak emf at each speed.',
      },
      {
        label: '(b)',
        prompt:
          'The coil rotates with angular speed $\\omega = 2\\pi f$, and at $t = 0$ its plane is perpendicular to the field. Derive an expression for the emf $\\varepsilon(t)$ induced in the coil, and from it an expression for the peak emf $\\varepsilon_{max}$ in terms of $N$, $B$, $A$, and $f$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Flux linkage: $N\\Phi_B = NBA\\cos(\\omega t)$.',
            keywords: ['cos(ωt)', 'cos ωt', 'cosωt', 'cos(wt)', 'nba cos', 'ba cos'],
          },
          {
            points: 1,
            description:
              'Faraday\u2019s law: $\\varepsilon = -N\\dfrac{d\\Phi_B}{dt} = NBA\\omega\\sin(\\omega t)$, so $\\varepsilon_{max} = NBA\\omega = 2\\pi NBAf$.',
            keywords: ['nbaω', 'nba ω', 'nbaw', '2πnbaf', '2π nbaf', '2pi nbaf', 'sin(ωt)', 'sin ωt'],
          },
        ],
        sampleAnswer:
          'The flux through each turn is $\\Phi_B = BA\\cos(\\omega t)$. Faraday\u2019s law for $N$ turns:\n\n$\\varepsilon = -N\\dfrac{d\\Phi_B}{dt} = NBA\\omega\\sin(\\omega t)$.\n\nThe peak emf is $\\varepsilon_{max} = NBA\\omega = 2\\pi NBA f$.',
      },
      {
        label: '(c)',
        prompt:
          'The table shows the students\u2019 data. (i) Identify quantities that could be graphed to produce a straight line whose slope can be used to determine $B$. (ii) Describe the graph and best-fit line. (iii) Calculate the slope of the best-fit line.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description:
              'Graph $\\varepsilon_{max}$ versus $f$ (slope $2\\pi NBA$) or versus $\\omega = 2\\pi f$ (slope $NBA$).',
            keywords: ['versus f', 'vs f', 'vs. f', 'against f', 'versus ω', 'vs ω', 'vs. ω', '2πnba', 'slope = nba'],
          },
          {
            points: 1,
            description: 'Axes labeled with quantities and units (V; rev/s or rad/s) on linear scales.',
            keywords: ['rev/s', 'rad/s', '(v)', 'units'],
          },
          {
            points: 1,
            description: 'The points lie close to a straight line through (approximately) the origin; the best-fit line passes among them.',
            keywords: ['best-fit', 'best fit', 'straight line', 'through the origin'],
          },
          {
            points: 1,
            description:
              'Slope between 0.12 and 0.13 V·s per revolution (least-squares 0.126) for $\\varepsilon_{max}$ versus $f$, or between 0.019 and 0.021 V·s for $\\varepsilon_{max}$ versus $\\omega$.',
            keywords: ['0.126', '0.125', '0.127', '0.12', '0.13', '0.020', '0.0200', '0.0201'],
          },
        ],
        sampleAnswer:
          'Graph $\\varepsilon_{max}$ (V) on the vertical axis against $f$ (rev/s) on the horizontal axis. Since $\\varepsilon_{max} = (2\\pi NBA)f$, the graph should be a straight line through the origin with slope $2\\pi NBA$.\n\nThe five points lie close to a straight line through the origin. A best-fit line through $(0, 0)$ and about $(10.0, 1.26)$ has slope $\\approx 0.126$ V·s.',
      },
      {
        label: '(d)',
        prompt:
          'Use your slope to calculate $B$. Then indicate how the slope of the graph would change if the students repeated the experiment with a coil of the same area but 100 turns.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$B = \\dfrac{\\text{slope}}{2\\pi NA}$ (or slope$/NA$ for the $\\omega$ graph), giving a value between 0.038 and 0.042 T.',
            keywords: ['0.040 t', '0.04 t', '0.040', '0.0401', '0.039', '0.041', '40 mt'],
          },
          {
            points: 1,
            description: 'The slope would double, because $\\varepsilon_{max}$ is directly proportional to $N$.',
            keywords: ['double', 'twice', 'two times', 'factor of 2'],
          },
        ],
        sampleAnswer:
          '$B = \\dfrac{\\text{slope}}{2\\pi NA} = \\dfrac{0.126}{2\\pi(50)(0.010)} \\approx 0.040$ T.\n\nWith 100 turns the slope $2\\pi NBA$ would double (to about 0.25 V·s), because the peak emf is directly proportional to the number of turns.',
      },
    ],
  },

  // =========================================================================
  // QQT 1 — LR circuits with different inductances (Unit 13)
  // =========================================================================
  {
    id: 'em-frq-qqt-1',
    type: 'qqt',
    unit: 13,
    title: 'Qualitative/Quantitative Translation: Current Growth in Two LR Circuits',
    prompt:
      'Circuit 1 consists of a battery of emf $\\varepsilon$ and negligible internal resistance, a switch, a resistor of resistance $R$, and an ideal inductor of inductance $L$, all in series. Circuit 2 is identical except that its inductor has inductance $2L$. Both switches are closed at $t = 0$, when there is no current in either circuit.',
    totalPoints: 8,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the time for the current in circuit 2 to reach half of its final value is greater than, less than, or equal to the corresponding time for circuit 1. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the time is greater for circuit 2.',
            keywords: ['greater', 'longer', 'more time', 'takes longer'],
          },
          {
            points: 1,
            description:
              'Indicates that an inductor produces a self-induced emf that opposes changes in the current (Lenz\u2019s law), and that for the same rate of change a larger inductance produces a larger opposing emf, so the current grows more slowly.',
            keywords: ['opposes the change', 'opposes changes', 'back emf', 'self-induced', 'induced emf', 'more slowly', 'slower'],
          },
          {
            points: 1,
            description:
              'Indicates that the final current is the same in both circuits, because once the current is steady the inductor has no emf and only the resistor limits the current; so circuit 2 takes longer to reach the same half-value.',
            keywords: ['same final current', 'final current is the same', 'same steady', 'final currents are the same', 'like a wire'],
          },
        ],
        sampleAnswer:
          'Circuit 2 takes longer. An inductor produces an emf that opposes any change in the current through it. When the switch closes, the current starts to grow, and the inductor\u2019s opposing emf is larger for a larger inductance at the same rate of change, so the current in circuit 2 grows more slowly. The final current is the same in both circuits: once the current is steady, the inductor has no emf and behaves like a wire, so only the battery and resistor set the current. Circuit 2 rises more slowly toward the same final value, so it takes longer to reach half of it.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the current $I(t)$ in a series circuit with emf $\\varepsilon$, resistance $R$, and inductance $L$. Then derive an expression for the time $t_{1/2}$ at which the current reaches half of its final value.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Loop rule with the inductor: $\\varepsilon - IR - L\\dfrac{dI}{dt} = 0$.',
            keywords: ['l di/dt', 'ldi/dt', 'l(di/dt)', 'l dI/dt', 'l·di/dt'],
          },
          {
            points: 1,
            description: 'Correct solution with $I(0) = 0$: $I(t) = \\dfrac{\\varepsilon}{R}\\left(1 - e^{-Rt/L}\\right)$.',
            keywords: ['1 - e^', '1 − e^', '1-e^', 'e^(-rt/l)', 'e^{-rt/l}', 'e^-rt/l', 'e^(−rt/l)'],
          },
          {
            points: 1,
            description: 'Correct half-value time: $t_{1/2} = \\dfrac{L}{R}\\ln 2$.',
            keywords: ['(l/r) ln 2', '(l/r)ln2', 'l ln 2/r', 'l ln2/r', 'ln 2', 'ln(2)', 'ln2'],
          },
        ],
        sampleAnswer:
          'Loop rule: $\\varepsilon - IR - L\\dfrac{dI}{dt} = 0$.\n\nSeparate variables: $\\dfrac{dI}{\\varepsilon/R - I} = \\dfrac{R}{L}dt$. Integrating from $I = 0$ at $t = 0$:\n\n$I(t) = \\dfrac{\\varepsilon}{R}\\left(1 - e^{-Rt/L}\\right)$, with final value $\\varepsilon/R$.\n\nHalf of the final value: $1 - e^{-Rt/L} = \\tfrac{1}{2} \\Rightarrow t_{1/2} = \\dfrac{L}{R}\\ln 2$.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your expressions from part (b) are or are not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional dependence: $t_{1/2}$ is directly proportional to $L$, so doubling $L$ doubles $t_{1/2}$, while the final current $\\varepsilon/R$ does not depend on $L$.',
            keywords: ['directly proportional', 'proportional to l', 'doubles', 'twice', 'does not depend on l', 'independent of l'],
          },
          {
            points: 1,
            description: 'Connects to part (a): circuit 2 takes twice as long, consistent with "greater".',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'In $t_{1/2} = (L/R)\\ln 2$, the time is directly proportional to $L$, so circuit 2 (inductance $2L$) takes twice as long. The final current $\\varepsilon/R$ does not depend on $L$ at all. Both results are consistent with part (a): the same final current, approached more slowly by the circuit with the larger inductance.',
      },
    ],
  },

  // =========================================================================
  // QQT 2 — Conducting slab inserted into an isolated capacitor (Unit 10)
  // =========================================================================
  {
    id: 'em-frq-qqt-2',
    type: 'qqt',
    unit: 10,
    title: 'Qualitative/Quantitative Translation: A Conducting Slab in an Isolated Capacitor',
    prompt:
      'An air-filled parallel-plate capacitor has plate area $A$ and plate separation $d$. It is charged to charge $Q$ by a battery and then disconnected, so the charge on its plates remains $Q$. The energy stored is then $U_0$. An uncharged conducting slab of thickness $d/2$ and the same area $A$ is then inserted between the plates, parallel to them, without touching either plate. Neglect edge effects.',
    totalPoints: 8,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the energy stored in the capacitor after the slab is inserted is greater than, less than, or equal to $U_0$. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the stored energy is less than $U_0$.',
            keywords: ['is less', 'less than', 'decreases', 'smaller', 'lower'],
          },
          {
            points: 1,
            description:
              'Indicates that the charge on the plates cannot change because the capacitor is isolated, so the field in the air gaps (set by the surface charge density) is unchanged.',
            keywords: ['charge stays', 'charge is constant', 'same charge', 'charge cannot change', 'isolated', 'disconnected'],
          },
          {
            points: 1,
            description:
              'Indicates that the field inside the conducting slab is zero, so half of the space between the plates no longer stores field energy.',
            keywords: ['zero inside', 'field is zero', 'no field', 'inside the conductor', 'energy density', 'no electric field'],
          },
        ],
        sampleAnswer:
          'The stored energy is less than $U_0$. Because the capacitor is disconnected, the charge on the plates cannot change, so the surface charge density, and therefore the field in the air between the plates and the slab, stays the same. Inside the conducting slab, induced surface charges make the field zero. Energy is stored in the electric field, so the same field now fills only half the volume between the plates, and the stored energy goes down.',
      },
      {
        label: '(b)',
        prompt:
          'Derive expressions for the new capacitance $C\'$ and the new stored energy $U\'$ in terms of $Q$, $A$, $d$, and physical constants. Express $U\'$ also as a fraction of $U_0$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'The field in the gaps is $E = \\dfrac{Q}{\\epsilon_0 A}$ and is zero in the slab, so the potential difference is $\\Delta V = E\\cdot\\dfrac{d}{2}$.',
            keywords: ['q/(ε0a)', 'q/ε0a', 'σ/ε0', 'q/(ε_0a)', 'e(d/2)', 'e·d/2', 'qd/(2ε0a)'],
          },
          {
            points: 1,
            description: '$C\' = \\dfrac{Q}{\\Delta V} = \\dfrac{2\\epsilon_0 A}{d} = 2C_0$.',
            keywords: ['2ε0a/d', '2ε_0a/d', '2c0', '2c_0', '2 c0'],
          },
          {
            points: 1,
            description: '$U\' = \\dfrac{Q^2}{2C\'} = \\dfrac{Q^2 d}{4\\epsilon_0 A} = \\tfrac{1}{2}U_0$.',
            keywords: ['u0/2', 'u_0/2', 'q^2d/(4ε0a)', 'q²d/(4ε0a)', 'half of u', '1/2 u0', '1/2u0'],
          },
        ],
        sampleAnswer:
          'The plate charge is still $Q$, so the field in each air gap is $E = \\dfrac{\\sigma}{\\epsilon_0} = \\dfrac{Q}{\\epsilon_0 A}$, and inside the conductor $E = 0$. The total air gap is $d - d/2 = d/2$:\n\n$\\Delta V = E\\cdot\\dfrac{d}{2} = \\dfrac{Qd}{2\\epsilon_0 A}$, so $C\' = \\dfrac{Q}{\\Delta V} = \\dfrac{2\\epsilon_0 A}{d} = 2C_0$.\n\n$U\' = \\dfrac{Q^2}{2C\'} = \\dfrac{Q^2 d}{4\\epsilon_0 A}$. Since $U_0 = \\dfrac{Q^2}{2C_0} = \\dfrac{Q^2 d}{2\\epsilon_0 A}$, $U\' = \\tfrac{1}{2}U_0$.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your results from part (b) are or are not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional dependence: at fixed charge, $U = Q^2/(2C)$ is inversely proportional to $C$, so doubling $C$ halves $U$.',
            keywords: ['inversely', '1/c', 'q^2/2c', 'q^2/(2c)', 'q²/2c', 'q²/(2c)'],
          },
          {
            points: 1,
            description: 'Connects to part (a): $U\' = U_0/2 < U_0$, consistent with "less".',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'With the charge fixed, $U = \\dfrac{Q^2}{2C}$ is inversely proportional to the capacitance. The slab doubles the capacitance, so the stored energy is halved: $U\' = U_0/2 < U_0$. This is consistent with part (a), where the energy decreased because the field filled only half the volume (and the field-energy picture gives the same factor of one half).',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export const getAllFRQs = (): PhysicsCEMFRQ[] => [...emFRQs]

export function getFRQsByType(type: PhysicsCEMFRQType): PhysicsCEMFRQ[] {
  return emFRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (MR, TBR, LAB, QQT): 40 points in 95 minutes. */
export function generateFullExamFRQs(): {
  questions: PhysicsCEMFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = PHYSICS_C_EM_FRQ_TYPES.map(({ type }) => shuffleArray(getFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 95,
  }
}
