// AP Physics C: Mechanics Free-Response Questions
// Built to the 2025+ exam: four typed FRQs per exam, 95 minutes, 40 points.
//   Mathematical Routines (MR) 10 · Translation Between Representations (TBR) 12
//   Experimental Design and Analysis (LAB) 10 · Qualitative/Quantitative Translation (QQT) 8
// Two questions per type (two complete exams), calculus-based. Units follow the
// 2024-25 CED: 1 Kinematics, 2 Force and Translational Dynamics, 3 Work, Energy,
// and Power, 4 Linear Momentum, 5 Torque and Rotational Dynamics, 6 Energy and
// Momentum of Rotating Systems, 7 Oscillations.
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

export type PhysicsCMechFRQType = 'mr' | 'tbr' | 'lab' | 'qqt'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const PHYSICS_C_MECH_FRQ_TYPES: { type: PhysicsCMechFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'mr', label: 'Mathematical Routines', short: 'MR', points: 10, minutes: 20 },
  { type: 'tbr', label: 'Translation Between Representations', short: 'TBR', points: 12, minutes: 25 },
  { type: 'lab', label: 'Experimental Design and Analysis', short: 'LAB', points: 10, minutes: 30 },
  { type: 'qqt', label: 'Qualitative/Quantitative Translation', short: 'QQT', points: 8, minutes: 20 },
]

export interface PhysicsCMechFRQ {
  id: string
  type: PhysicsCMechFRQType
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

const mechFRQs: PhysicsCMechFRQ[] = [
  // =========================================================================
  // MR 1 — Falling sphere with a linear drag force (Units 1 and 2)
  // =========================================================================
  {
    id: 'mech-frq-mr-1',
    type: 'mr',
    unit: 2,
    title: 'Mathematical Routines: A Sphere Falling With Linear Drag',
    prompt:
      'A small sphere of mass $m = 0.20$ kg is released from rest at time $t = 0$ and falls vertically through a viscous fluid. The fluid exerts a resistive force of magnitude $bv$ directed opposite the velocity, where $v$ is the sphere\u2019s speed and $b = 0.50$ kg/s. Neglect the buoyant force. Take downward as positive, and use $g = 9.8$ m/s².',
    totalPoints: 10,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the terminal speed $v_T$ of the sphere.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'At terminal speed the acceleration is zero, so the forces balance: $mg - bv_T = 0$.',
            keywords: ['mg - bv', 'mg − bv', 'mg = bv', 'mg/b', 'a = 0', 'net force is zero', 'forces balance'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $v_T = mg/b = (0.20)(9.8)/0.50 \\approx 3.9$ m/s.',
            keywords: ['3.9', '3.92'],
          },
        ],
        sampleAnswer:
          'At terminal speed $a = 0$, so the drag balances the weight: $mg - bv_T = 0$.\n\n$v_T = \\dfrac{mg}{b} = \\dfrac{(0.20)(9.8)}{0.50} \\approx 3.9$ m/s.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the speed $v(t)$ of the sphere as a function of time, in terms of $m$, $b$, $g$, and $t$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Writes Newton\u2019s second law as a differential equation: $m\\dfrac{dv}{dt} = mg - bv$.',
            keywords: ['dv/dt', 'm dv', 'mdv'],
          },
          {
            points: 1,
            description:
              'Separates variables and integrates with the initial condition $v(0) = 0$ (appropriate limits or a constant of integration): $\\displaystyle\\int_0^v \\frac{dv\'}{g - (b/m)v\'} = \\int_0^t dt\'$.',
            keywords: ['separat', 'integrat', 'ln(', 'ln ', '∫'],
          },
          {
            points: 1,
            description: 'Correct expression: $v(t) = \\dfrac{mg}{b}\\left(1 - e^{-bt/m}\\right)$.',
            keywords: ['1 - e^', '1 − e^', '1-e^', 'e^(-bt/m)', 'e^{-bt/m}', 'e^-bt/m', 'e^(−bt/m)'],
          },
        ],
        sampleAnswer:
          'Newton\u2019s second law (down positive): $m\\dfrac{dv}{dt} = mg - bv$.\n\nSeparate variables: $\\dfrac{dv}{mg - bv} = \\dfrac{dt}{m}$. Integrate from $v = 0$ at $t = 0$:\n\n$-\\dfrac{1}{b}\\ln\\left(\\dfrac{mg - bv}{mg}\\right) = \\dfrac{t}{m} \\Rightarrow mg - bv = mg\\,e^{-bt/m}$.\n\n$v(t) = \\dfrac{mg}{b}\\left(1 - e^{-bt/m}\\right) = v_T\\left(1 - e^{-bt/m}\\right)$.',
      },
      {
        label: '(c)',
        prompt: 'Calculate the time at which the speed of the sphere is half its terminal speed.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets $1 - e^{-bt/m} = \\tfrac{1}{2}$ and solves: $t = \\dfrac{m}{b}\\ln 2$.',
            keywords: ['ln 2', 'ln(2)', 'ln2', '= 1/2', '= 0.5'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $t = (0.40\\text{ s})\\ln 2 \\approx 0.28$ s.',
            keywords: ['0.28', '0.277'],
          },
        ],
        sampleAnswer:
          '$\\tfrac{1}{2}v_T = v_T\\left(1 - e^{-bt/m}\\right) \\Rightarrow e^{-bt/m} = \\tfrac{1}{2} \\Rightarrow t = \\dfrac{m}{b}\\ln 2$.\n\nWith $m/b = 0.20/0.50 = 0.40$ s: $t = 0.40\\ln 2 \\approx 0.28$ s.',
      },
      {
        label: '(d)',
        prompt: 'Calculate the distance the sphere falls from $t = 0$ to the time found in part (c).',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Integrates the velocity: $y = \\displaystyle\\int_0^{t} v(t\')\\,dt\'$.',
            keywords: ['∫', 'integral', 'integrat', 'area under'],
          },
          {
            points: 1,
            description:
              'Correct position function: $y(t) = v_T t - v_T\\dfrac{m}{b}\\left(1 - e^{-bt/m}\\right)$, which at $t = (m/b)\\ln 2$ is $v_T\\dfrac{m}{b}\\left(\\ln 2 - \\tfrac{1}{2}\\right)$.',
            keywords: ['(m/b)(1', 'm/b(1', 'ln 2 - 1/2', 'ln2 - 0.5', 'ln 2 - 0.5', 'ln(2) - 1/2', '(m/b)(ln'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $y \\approx 0.30$ m.',
            keywords: ['0.30 m', '0.3 m', '0.303', '30 cm'],
          },
        ],
        sampleAnswer:
          '$y(t) = \\displaystyle\\int_0^t v_T\\left(1 - e^{-bt\'/m}\\right)dt\' = v_T t - v_T\\frac{m}{b}\\left(1 - e^{-bt/m}\\right)$.\n\nAt $t = (m/b)\\ln 2$, $e^{-bt/m} = \\tfrac{1}{2}$:\n\n$y = v_T\\dfrac{m}{b}\\left(\\ln 2 - \\tfrac{1}{2}\\right) = (3.92)(0.40)(0.193) \\approx 0.30$ m.',
      },
    ],
  },

  // =========================================================================
  // MR 2 — Nonuniform rod swinging about one end (Units 5 and 6)
  // =========================================================================
  {
    id: 'mech-frq-mr-2',
    type: 'mr',
    unit: 5,
    title: 'Mathematical Routines: A Nonuniform Rod Swinging About One End',
    prompt:
      'A thin rod of length $L = 1.5$ m lies along the $x$-axis from $x = 0$ to $x = L$. Its linear mass density increases with distance from the left end as $\\lambda(x) = \\beta x$, where $\\beta = 2.0$ kg/m². The rod can rotate without friction in a vertical plane about a horizontal axle through its left end ($x = 0$). Use $g = 9.8$ m/s².',
    totalPoints: 10,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the total mass $M$ of the rod in terms of $\\beta$ and $L$. Then calculate its value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Integrates the density along the rod: $M = \\displaystyle\\int_0^L \\beta x\\,dx$.',
            keywords: ['βx dx', 'beta x dx', 'λ dx', 'lambda dx', '∫', 'integral'],
          },
          {
            points: 1,
            description: 'Correct expression and value: $M = \\tfrac{1}{2}\\beta L^2 = 2.25$ kg.',
            keywords: ['2.25', '2.3 kg', 'βl^2/2', 'βl²/2'],
          },
        ],
        sampleAnswer:
          '$M = \\displaystyle\\int_0^L \\lambda\\,dx = \\int_0^L \\beta x\\,dx = \\frac{\\beta L^2}{2} = \\frac{(2.0)(1.5)^2}{2} = 2.25$ kg.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the rotational inertia $I$ of the rod about the axle, in terms of $M$ and $L$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses $I = \\displaystyle\\int x^2\\,dm = \\int_0^L \\beta x^3\\,dx = \\tfrac{1}{4}\\beta L^4$.',
            keywords: ['x^2 dm', 'x² dm', 'r^2 dm', 'r² dm', 'βx^3', 'βx³', 'beta x^3', 'x^3 dx', 'x³ dx'],
          },
          {
            points: 1,
            description: 'Correct expression in terms of $M$ and $L$: $I = \\tfrac{1}{2}ML^2$ (about 2.53 kg·m²).',
            keywords: ['1/2 ml^2', '1/2ml^2', 'ml^2/2', 'ml²/2', '1/2 ml²', '½ml', '2.53'],
          },
        ],
        sampleAnswer:
          '$I = \\displaystyle\\int_0^L x^2\\,dm = \\int_0^L x^2(\\beta x)\\,dx = \\frac{\\beta L^4}{4}$.\n\nSince $\\beta L^2 = 2M$: $I = \\dfrac{(2M)L^2}{4} = \\tfrac{1}{2}ML^2 = \\tfrac{1}{2}(2.25)(1.5)^2 \\approx 2.53$ kg·m².',
      },
      {
        label: '(c)',
        prompt: 'Calculate the distance of the rod\u2019s center of mass from the axle.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses $x_{cm} = \\dfrac{1}{M}\\displaystyle\\int x\\,dm = \\dfrac{1}{M}\\int_0^L \\beta x^2\\,dx$.',
            keywords: ['x dm', 'βx^2', 'βx²', 'beta x^2', 'x^2 dx', 'x² dx'],
          },
          {
            points: 1,
            description: 'Correct answer: $x_{cm} = \\tfrac{2}{3}L = 1.0$ m.',
            keywords: ['2l/3', '2/3 l', '(2/3)l', '1.0 m', '1 m'],
          },
        ],
        sampleAnswer:
          '$x_{cm} = \\dfrac{1}{M}\\displaystyle\\int_0^L x(\\beta x)\\,dx = \\frac{\\beta L^3/3}{\\beta L^2/2} = \\frac{2L}{3} = \\frac{2(1.5)}{3} = 1.0$ m.\n\nThe center of mass is past the midpoint because more of the mass is near the far end.',
      },
      {
        label: '(d)',
        prompt:
          'The rod is held horizontal and released from rest. Calculate the magnitude of its angular acceleration immediately after release.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies the rotational form of Newton\u2019s second law with the weight acting at the center of mass: $Mg\\,x_{cm} = I\\alpha$.',
            keywords: ['τ = iα', 'τ=iα', 'torque', 'i alpha', 'iα'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $\\alpha = \\dfrac{4g}{3L} \\approx 8.7$ rad/s².',
            keywords: ['8.7', '4g/3l', '4g/(3l)'],
          },
        ],
        sampleAnswer:
          'The weight acts at the center of mass, a lever arm $x_{cm} = 2L/3$ from the axle when the rod is horizontal:\n\n$\\tau = Mg\\left(\\tfrac{2L}{3}\\right) = I\\alpha = \\tfrac{1}{2}ML^2\\alpha \\Rightarrow \\alpha = \\dfrac{4g}{3L} = \\dfrac{4(9.8)}{3(1.5)} \\approx 8.7$ rad/s².',
      },
      {
        label: '(e)',
        prompt: 'Calculate the angular speed of the rod as it swings through the vertical position.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses conservation of energy for the rod-Earth system: the center of mass falls $x_{cm}$, so $Mg\\,x_{cm} = \\tfrac{1}{2}I\\omega^2$.',
            keywords: ['1/2 iω', '1/2iω', '1/2 i omega', 'conservation of energy', 'energy is conserved', 'mgh = 1/2'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $\\omega = \\sqrt{\\dfrac{8g}{3L}} \\approx 4.2$ rad/s.',
            keywords: ['4.2', '4.17', '8g/3l', '8g/(3l)'],
          },
        ],
        sampleAnswer:
          'Mechanical energy is conserved (frictionless axle). The center of mass drops $x_{cm} = 1.0$ m:\n\n$Mg\\,x_{cm} = \\tfrac{1}{2}I\\omega^2 \\Rightarrow (2.25)(9.8)(1.0) = \\tfrac{1}{2}(2.53)\\omega^2$\n\n$\\omega = \\sqrt{\\dfrac{8g}{3L}} = \\sqrt{17.4} \\approx 4.2$ rad/s.',
      },
    ],
  },

  // =========================================================================
  // TBR 1 — Potential-energy curve and force graph (Units 3 and 7)
  // =========================================================================
  {
    id: 'mech-frq-tbr-1',
    type: 'tbr',
    unit: 3,
    title: 'Translation Between Representations: Motion in a Double Potential Well',
    prompt:
      'A particle of mass $m = 0.50$ kg moves along the $x$-axis. The only force exerted on it is conservative, with potential energy $U(x) = Ax^4 - Bx^2$, where $A = 2.0$ J/m⁴ and $B = 4.0$ J/m². A graph of $U$ versus $x$ is a symmetric "W" shape: $U = 0$ at $x = 0$, minima of $-2.0$ J at $x = \\pm 1.0$ m, and $U$ rising back through zero at $x = \\pm 1.41$ m.',
    totalPoints: 12,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the force $F_x(x)$ exerted on the particle. Then describe a graph of $F_x$ versus $x$ for $-1.5\\text{ m} \\le x \\le 1.5$ m, labeling every position where $F_x = 0$ and the value of $F_x$ at $x = 1.5$ m.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Uses $F_x = -dU/dx$ to obtain $F_x = 2Bx - 4Ax^3 = 8x - 8x^3$ (in newtons, $x$ in meters).',
            keywords: ['-du/dx', '−du/dx', '- du/dx', '8x - 8x^3', '8x − 8x^3', '8x-8x^3', '-8x^3 + 8x', '8x(1 - x^2)', '8x(1-x^2)'],
          },
          {
            points: 1,
            description: 'The graph crosses zero at $x = -1.0$ m, $0$, and $+1.0$ m.',
            keywords: ['±1', 'x = -1', 'x = −1', 'zeros at', 'zero at x = 0', '-1, 0', '−1, 0'],
          },
          {
            points: 1,
            description:
              'Correct signs: $F_x > 0$ for $x < -1$ m and $0 < x < 1$ m, $F_x < 0$ for $-1 < x < 0$ m and $x > 1$ m, with $F_x(1.5\\text{ m}) = -15$ N.',
            keywords: ['-15 n', '−15 n', '-15', '−15'],
          },
        ],
        sampleAnswer:
          '$F_x = -\\dfrac{dU}{dx} = -(4Ax^3 - 2Bx) = 8x - 8x^3 = 8x(1 - x^2)$.\n\nThe graph is an odd (point-symmetric) cubic. It is zero at $x = -1.0$, $0$, and $+1.0$ m. It is positive for $0 < x < 1$ m (peaking near $+3.1$ N at $x \\approx 0.58$ m) and negative for $x > 1$ m, falling to $F_x(1.5) = 8(1.5) - 8(3.375) = -15$ N. By symmetry it is negative for $-1 < x < 0$ m and positive for $x < -1$ m, reaching $+15$ N at $x = -1.5$ m.',
      },
      {
        label: '(b)',
        prompt:
          'Identify each equilibrium position and classify each as stable or unstable. Justify your classifications using both the $U(x)$ graph and the $F_x(x)$ graph.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Equilibrium positions are $x = 0$ and $x = \\pm 1.0$ m, where the slope of $U(x)$ is zero and $F_x = 0$.',
            keywords: ['slope of u', 'slope of the u', 'du/dx = 0', 'f = 0', 'force is zero', 'f_x = 0'],
          },
          {
            points: 1,
            description:
              '$x = \\pm 1.0$ m are stable: they are minima of $U$, and $F_x$ goes from positive to negative through them, so a small displacement produces a restoring force.',
            keywords: ['minimum', 'minima', 'restoring', 'back toward'],
          },
          {
            points: 1,
            description:
              '$x = 0$ is unstable: it is a maximum of $U$, and $F_x$ goes from negative to positive through it, so a small displacement produces a force away from equilibrium.',
            keywords: ['unstable', 'maximum', 'away from'],
          },
        ],
        sampleAnswer:
          'Equilibrium requires $F_x = -dU/dx = 0$: $x = 0$ and $x = \\pm 1.0$ m.\n\n- $x = \\pm 1.0$ m are stable. They are the minima of $U(x)$. On the $F_x$ graph the force is positive just to the left and negative just to the right, so a small displacement in either direction produces a restoring force back toward equilibrium.\n- $x = 0$ is unstable. It is a local maximum of $U(x)$. The force is negative just to the left and positive just to the right, so a small displacement produces a force that pushes the particle farther away.',
      },
      {
        label: '(c)',
        prompt:
          'The particle is released from rest at $x = 0.50$ m. (i) Calculate the total mechanical energy of the system. (ii) Describe energy bar charts showing $K$, $U$, and the total energy at $x = 0.50$ m and at $x = 1.0$ m. (iii) Calculate the speed of the particle at $x = 1.0$ m. (iv) Determine the other position at which the particle momentarily comes to rest.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Total energy equals the potential energy at release: $E = U(0.50) = 2(0.0625) - 4(0.25) = -0.875$ J.',
            keywords: ['-0.875', '−0.875', '-0.88', '−0.88'],
          },
          {
            points: 1,
            description:
              'Bar charts: at $x = 0.50$ m, $K = 0$ and $U = E = -0.875$ J (a negative bar); at $x = 1.0$ m, $U = -2.0$ J (a longer negative bar) and $K = +1.125$ J, with the same total in both charts.',
            keywords: ['k = 0', 'negative bar', '1.125', '1.13', 'same total'],
          },
          {
            points: 1,
            description: 'Speed at $x = 1.0$ m: $\\tfrac{1}{2}mv^2 = 1.125$ J, so $v \\approx 2.1$ m/s.',
            keywords: ['2.1 m/s', '2.12', '√4.5', 'sqrt(4.5)'],
          },
          {
            points: 1,
            description:
              'Other turning point where $U(x) = E$: $2x^4 - 4x^2 + 0.875 = 0$ gives $x^2 = 1.75$, so $x \\approx 1.32$ m.',
            keywords: ['1.32', '1.3 m', 'sqrt(1.75)', '√1.75'],
          },
        ],
        sampleAnswer:
          '(i) Released from rest, so $E = U(0.50) = 2(0.50)^4 - 4(0.50)^2 = 0.125 - 1.000 = -0.875$ J.\n\n(ii) At $x = 0.50$ m: $K = 0$; $U = -0.875$ J (a bar below the axis); total $-0.875$ J. At $x = 1.0$ m: $U = -2.0$ J (a longer bar below the axis), $K = +1.125$ J (above the axis), total still $-0.875$ J.\n\n(iii) $K = E - U(1.0) = -0.875 - (-2.0) = 1.125$ J, so $v = \\sqrt{2K/m} = \\sqrt{2(1.125)/0.50} = \\sqrt{4.5} \\approx 2.1$ m/s.\n\n(iv) The particle turns around where $U(x) = E$: $2x^4 - 4x^2 = -0.875$. With $u = x^2$: $2u^2 - 4u + 0.875 = 0$, so $u = \\dfrac{4 \\pm 3}{4} = 0.25$ or $1.75$. The root $x = 0.50$ m is the release point; the other turning point is $x = \\sqrt{1.75} \\approx 1.32$ m. The particle oscillates between 0.50 m and 1.32 m.',
      },
      {
        label: '(d)',
        prompt:
          'A student claims: "If the particle is instead released from rest at $x = 0.10$ m, it will cross $x = 0$ and reach the region $x < 0$, because it starts so close to the origin." Evaluate the student\u2019s claim.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'States that the claim is incorrect: the particle stays in the region $x > 0$.',
            keywords: ['incorrect', 'does not cross', 'cannot reach', 'never reaches', 'stays', 'remains'],
          },
          {
            points: 1,
            description:
              'Justifies with energy or force: $E = U(0.10) \\approx -0.040$ J is less than $U(0) = 0$, so the particle cannot reach $x = 0$; equivalently, at release $F_x \\approx +0.79$ N pushes it away from the origin.',
            keywords: ['-0.04', '−0.04', 'less than u(0)', 'barrier', 'away from the origin', 'not enough energy', '0.79'],
          },
        ],
        sampleAnswer:
          'The claim is incorrect. Released from rest at $x = 0.10$ m, the total energy is $E = U(0.10) = 2(0.10)^4 - 4(0.10)^2 \\approx -0.040$ J. Reaching $x = 0$ would require $U = 0 > E$, which would make the kinetic energy negative, so the particle can never get there. The force at release is $F_x = 8(0.10) - 8(0.10)^3 \\approx +0.79$ N, pointing away from the origin, so the particle moves to the right and oscillates in the right-hand well.',
      },
    ],
  },

  // =========================================================================
  // TBR 2 — Bowling ball that slides, then rolls (Units 5 and 6)
  // =========================================================================
  {
    id: 'mech-frq-tbr-2',
    type: 'tbr',
    unit: 6,
    title: 'Translation Between Representations: A Bowling Ball That Slides Before It Rolls',
    prompt:
      'A bowling ball, modeled as a uniform solid sphere of mass $M = 6.0$ kg and radius $R = 0.11$ m ($I = \\tfrac{2}{5}MR^2$ about its center), is launched along a level lane at $t = 0$ with a forward speed $v_0 = 7.0$ m/s and no rotation. The coefficient of kinetic friction between the ball and the lane is $\\mu_k = 0.20$. The ball slides as it begins to spin, until at time $t_1$ it rolls without slipping. Use $g = 9.8$ m/s².',
    totalPoints: 12,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a force diagram for the ball while it is slipping, showing the point of application of each force. Indicate the direction of the frictional force and its effect on the ball\u2019s translational and rotational motion.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Exactly three forces: the gravitational force downward at the center, the normal force upward at the contact point, and kinetic friction at the contact point.',
            keywords: ['three forces', 'normal force up', 'normal force upward', 'weight down', 'gravitational force down'],
          },
          {
            points: 1,
            description: 'Friction points backward, opposite the velocity of the ball\u2019s center, so it decreases the translational speed.',
            keywords: ['backward', 'opposite the velocity', 'opposite the motion', 'opposite to the motion', 'opposite its velocity'],
          },
          {
            points: 1,
            description:
              'Friction acts at the contact point, a distance $R$ below the center, so it exerts a torque about the center that increases the angular speed in the forward-rolling sense.',
            keywords: ['torque', 'at the contact point', 'at the bottom', 'increases the angular', 'spins up'],
          },
        ],
        sampleAnswer:
          'Three forces act: the gravitational force $Mg$ downward at the center, the normal force $F_N = Mg$ upward at the contact point, and kinetic friction $f_k = \\mu_k Mg$ at the contact point. The bottom of the ball slides forward over the lane, so friction points backward. It slows the center of mass, and because it acts at the contact point, a distance $R$ from the center, it also exerts a torque $f_kR$ about the center that spins the ball up in the forward-rolling direction.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for $t_1$ in terms of $v_0$, $\\mu_k$, and $g$. Then calculate its value.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Translational: $-\\mu_k Mg = Ma$, so $v = v_0 - \\mu_k g t$.',
            keywords: ['v0 - μ', 'v_0 - μ', 'v0 - mu', 'v0 − μ', 'a = -μ', 'a = −μ', 'μmg = ma', 'μkmg = ma'],
          },
          {
            points: 1,
            description:
              'Rotational: $\\mu_k MgR = \\tfrac{2}{5}MR^2\\alpha$, so $R\\omega = \\tfrac{5}{2}\\mu_k g t$.',
            keywords: ['5/2', '5μg/2', '5μkg/2', '2.5μ', 'iα', 'τ = i'],
          },
          {
            points: 1,
            description: 'Uses the rolling-without-slipping condition $v = R\\omega$ to define $t_1$.',
            keywords: ['v = rω', 'v = ωr', 'v = omega r', 'v = r omega', 'rolling without slipping when'],
          },
          {
            points: 1,
            description: 'Correct result: $t_1 = \\dfrac{2v_0}{7\\mu_k g} \\approx 1.0$ s.',
            keywords: ['2v0/(7', '2v_0/(7', '2v0/7', '1.02', '1.0 s'],
          },
        ],
        sampleAnswer:
          'Translation: $-\\mu_k Mg = Ma \\Rightarrow v(t) = v_0 - \\mu_k g t$.\n\nRotation about the center: $\\tau = \\mu_k MgR = \\tfrac{2}{5}MR^2\\alpha \\Rightarrow \\alpha = \\dfrac{5\\mu_k g}{2R}$, so $R\\omega(t) = \\tfrac{5}{2}\\mu_k g t$.\n\nRolling without slipping begins when $v = R\\omega$:\n\n$v_0 - \\mu_k g t_1 = \\tfrac{5}{2}\\mu_k g t_1 \\Rightarrow t_1 = \\dfrac{2v_0}{7\\mu_k g} = \\dfrac{2(7.0)}{7(0.20)(9.8)} \\approx 1.0$ s.',
      },
      {
        label: '(c)',
        prompt:
          'On the same axes, describe graphs of the speed $v$ of the ball\u2019s center and the rim speed $R\\omega$ as functions of time from $t = 0$ to $t = 2.0$ s. Label the starting values and the time and speed at which the graphs meet.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: '$v$: a straight line starting at 7.0 m/s and decreasing with slope $-\\mu_k g = -1.96$ m/s².',
            keywords: ['-1.96', '−1.96', 'starts at 7', 'from 7.0', 'decreases linearly'],
          },
          {
            points: 1,
            description: '$R\\omega$: a straight line starting at zero and increasing with slope $\\tfrac{5}{2}\\mu_k g = 4.9$ m/s².',
            keywords: ['4.9', 'starts at 0', 'starts at zero', 'from zero'],
          },
          {
            points: 1,
            description:
              'The lines meet at $t_1 \\approx 1.0$ s at $v = \\tfrac{5}{7}v_0 = 5.0$ m/s; after that both are horizontal (constant) at 5.0 m/s.',
            keywords: ['5.0 m/s', '5 m/s', '5/7', 'horizontal'],
          },
        ],
        sampleAnswer:
          '$v$ starts at 7.0 m/s and decreases linearly with slope $-1.96$ m/s². $R\\omega$ starts at 0 and increases linearly with slope $+4.9$ m/s². The lines meet at $t_1 \\approx 1.02$ s, where both equal $7.0 - (1.96)(1.02) = 5.0$ m/s ($= \\tfrac{5}{7}v_0$). From $t_1$ to 2.0 s both graphs are the same horizontal line at 5.0 m/s, because a ball rolling without slipping on a level surface needs no friction.',
      },
      {
        label: '(d)',
        prompt:
          'A student claims: "Friction keeps acting on the ball after $t_1$, so the ball keeps losing kinetic energy all the way down the lane." Evaluate the claim, and calculate the kinetic energy converted to thermal energy before $t_1$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'The claim is incorrect: once the ball rolls without slipping on level ground, no friction is needed (the contact point is at rest), so the kinetic energy stays constant.',
            keywords: ['incorrect', 'no friction', 'friction is zero', 'zero friction', 'stays constant', 'remains constant', 'does no work'],
          },
          {
            points: 1,
            description:
              'Energy dissipated: $K_0 = 147$ J and $K_1 = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}I\\omega^2 = \\tfrac{7}{10}Mv^2 = 105$ J, so 42 J (2/7 of the initial energy) is converted to thermal energy.',
            keywords: ['42 j', '42.0', '42 joules', '2/7'],
          },
        ],
        sampleAnswer:
          'The claim is incorrect. After $t_1$ the contact point is momentarily at rest, so there is no sliding and no kinetic friction. On a level lane nothing else exerts a horizontal force or a torque about the center, so static friction is zero too, and the kinetic energy stays constant.\n\nBefore $t_1$: $K_0 = \\tfrac{1}{2}(6.0)(7.0)^2 = 147$ J. At $t_1$: $K_1 = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}\\left(\\tfrac{2}{5}MR^2\\right)\\left(\\tfrac{v}{R}\\right)^2 = \\tfrac{7}{10}(6.0)(5.0)^2 = 105$ J. So $147 - 105 = 42$ J was converted to thermal energy while the ball slipped.',
      },
    ],
  },

  // =========================================================================
  // LAB 1 — Measuring g with a physical pendulum (Unit 7)
  // =========================================================================
  {
    id: 'mech-frq-lab-1',
    type: 'lab',
    unit: 7,
    title: 'Experimental Design and Analysis: Measuring g With a Physical Pendulum',
    prompt:
      'Students want to determine the acceleration due to gravity $g$ using a physical pendulum. They have a uniform meterstick of length $L = 1.00$ m with small holes drilled along it, a horizontal nail that fits through any hole as a pivot with negligible friction, a stopwatch, and a second meterstick for measuring. The pivot is a distance $d$ from the center of the meterstick. The rotational inertia of a uniform rod about its center is $\\tfrac{1}{12}ML^2$.',
    totalPoints: 10,
    timeRecommendation: 30,
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Pivot distance from center d (m)</th><td>0.10</td><td>0.15</td><td>0.20</td><td>0.30</td><td>0.40</td><td>0.50</td></tr><tr><th>Period T (s)</th><td>1.94</td><td>1.67</td><td>1.58</td><td>1.53</td><td>1.56</td><td>1.64</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure the students could use to measure the period $T$ for different values of $d$. Include enough detail that another student could repeat it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Measures $d$ and finds $T$ by releasing the stick from a small angle and timing several oscillations, then dividing by the number of oscillations.',
            keywords: ['small angle', 'small amplitude', '10 oscillations', 'ten oscillations', 'several oscillations', 'divide by'],
          },
          {
            points: 1,
            description:
              'Reduces experimental uncertainty: repeats the timing and averages, and/or uses several different values of $d$.',
            keywords: ['repeat', 'average', 'different d', 'different pivot', 'several values', 'different holes'],
          },
        ],
        sampleAnswer:
          '1. Hang the meterstick on the nail through a hole and measure $d$ from the nail to the 50 cm mark.\n2. Pull the stick aside by less than about 10° and release it from rest.\n3. Time 10 complete oscillations with the stopwatch and divide by 10 to get $T$.\n4. Repeat the timing three times and average.\n5. Repeat steps 1 to 4 for at least five different holes (values of $d$).',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the period $T$ of small oscillations in terms of $d$, $L$, and $g$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Parallel-axis theorem: $I = \\tfrac{1}{12}ML^2 + Md^2$.',
            keywords: ['parallel axis', 'parallel-axis', 'ml^2/12 + md^2', 'ml²/12 + md²', '+ md^2', '+ md²'],
          },
          {
            points: 1,
            description:
              'Restoring torque $\\tau = -Mgd\\sin\\theta \\approx -Mgd\\,\\theta$ (small angle), giving simple harmonic motion with $\\omega^2 = Mgd/I$.',
            keywords: ['sin θ ≈ θ', 'sinθ ≈ θ', 'sin(θ) ≈ θ', 'small angle', 'mgd/i', '-mgdθ', '−mgdθ', '-mgd sin'],
          },
          {
            points: 1,
            description: 'Correct expression: $T = 2\\pi\\sqrt{\\dfrac{L^2/12 + d^2}{gd}}$.',
            keywords: ['2π√', '2pi sqrt', '2π sqrt', 'l^2/12 + d^2', 'l²/12 + d²', '(l^2 + 12d^2)'],
          },
        ],
        sampleAnswer:
          'About the pivot, $I = \\tfrac{1}{12}ML^2 + Md^2$ (parallel-axis theorem).\n\nThe weight acts at the center, so $\\tau = -Mgd\\sin\\theta \\approx -Mgd\\,\\theta$ for small angles. Then $I\\dfrac{d^2\\theta}{dt^2} = -Mgd\\,\\theta$, which is simple harmonic motion with $\\omega^2 = \\dfrac{Mgd}{I}$.\n\n$T = \\dfrac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\dfrac{L^2/12 + d^2}{gd}}$.',
      },
      {
        label: '(c)',
        prompt:
          'The table shows the students\u2019 averaged data. (i) Using your expression from part (b), identify quantities that could be graphed to produce a straight line whose slope can be used to determine $g$. (ii) Calculate the values of those quantities for the data. (iii) Determine the slope of the best-fit line.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Linearizes: $T^2 d = \\dfrac{4\\pi^2}{g}d^2 + \\dfrac{4\\pi^2 L^2}{12g}$, so graph $T^2 d$ (vertical) versus $d^2$ (horizontal). Any correct linearization earns this point.',
            keywords: ['t^2 d', 't²d', 't^2d', 't² d', 't^2*d', 't^2·d', 'd + l^2/(12d)', 'd + l²/(12d)'],
          },
          {
            points: 1,
            description:
              'Correct transformed values: $d^2$ = 0.010, 0.0225, 0.040, 0.090, 0.160, 0.250 m²; $T^2 d$ = 0.376, 0.418, 0.499, 0.702, 0.973, 1.345 s²·m.',
            keywords: ['0.376', '0.499', '0.702', '0.973', '1.345', '1.34'],
          },
          {
            points: 1,
            description: 'Slope of the best-fit line between 3.9 and 4.2 s²/m (least-squares value 4.03 s²/m).',
            keywords: ['4.03', '4.0 s', '4.04', '4.1', '3.9', '4.02'],
          },
        ],
        sampleAnswer:
          'Squaring and multiplying by $d$: $T^2 d = \\dfrac{4\\pi^2}{g}\\,d^2 + \\dfrac{4\\pi^2}{g}\\cdot\\dfrac{L^2}{12}$.\n\nSo $T^2 d$ versus $d^2$ is linear with slope $4\\pi^2/g$.\n\n$d^2$ (m²): 0.010, 0.0225, 0.040, 0.090, 0.160, 0.250\n\n$T^2 d$ (s²·m): 0.376, 0.418, 0.499, 0.702, 0.973, 1.345\n\nA best-fit line through about $(0, 0.334)$ and $(0.250, 1.343)$ has slope $\\approx 1.009/0.250 \\approx 4.03$ s²/m.',
      },
      {
        label: '(d)',
        prompt:
          'Use your slope to calculate $g$. Then determine what the vertical intercept of your best-fit line should equal according to the model, and state whether the data are consistent with it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$g = 4\\pi^2/\\text{slope}$, giving a value between 9.4 and 10.1 m/s² (about 9.8 m/s²).',
            keywords: ['9.8', '9.79', '9.7', '9.9', '9.6', '10.0'],
          },
          {
            points: 1,
            description:
              'The model predicts an intercept of $\\dfrac{4\\pi^2 L^2}{12g} \\approx 0.34$ s²·m; the best-fit intercept is about 0.33 s²·m, so the data are consistent. (For another valid linearization, the corresponding predicted intercept.)',
            keywords: ['0.33', '0.34', '0.336', '0.334'],
          },
        ],
        sampleAnswer:
          '$g = \\dfrac{4\\pi^2}{\\text{slope}} = \\dfrac{39.48}{4.03} \\approx 9.8$ m/s².\n\nThe model predicts the intercept $\\dfrac{4\\pi^2}{g}\\cdot\\dfrac{L^2}{12} = (4.03)(0.0833) \\approx 0.34$ s²·m. The best-fit intercept is about 0.33 s²·m, which agrees, so the data are consistent with the model (equivalently, the intercept gives $L \\approx 1.00$ m).',
      },
    ],
  },

  // =========================================================================
  // LAB 2 — Finding a cart's mass from impulse data (Units 4 and 1)
  // =========================================================================
  {
    id: 'mech-frq-lab-2',
    type: 'lab',
    unit: 4,
    title: 'Experimental Design and Analysis: A Cart\u2019s Mass From Impulse Data',
    prompt:
      'Students want to determine the mass $m$ of a cart using the impulse-momentum theorem, without a balance. The cart rolls along a level, low-friction track into a spring bumper on a force sensor fixed at the end of the track, and rebounds. A motion detector measures the cart\u2019s speed $v_i$ just before and $v_f$ just after the collision, and the force sensor records the force $F(t)$ the bumper exerts on the cart, 1000 times per second. The students launch the cart at five different speeds.',
    totalPoints: 10,
    timeRecommendation: 30,
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Speed before v<sub>i</sub> (m/s)</th><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td><td>1.20</td></tr><tr><th>Speed after v<sub>f</sub> (m/s)</th><td>0.31</td><td>0.49</td><td>0.63</td><td>0.81</td><td>0.95</td></tr><tr><th>Area under F-t graph J (N·s)</th><td>0.36</td><td>0.54</td><td>0.72</td><td>0.89</td><td>1.08</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe how the students should determine the impulse $J$ for one trial from the force sensor data, and describe one way they could reduce experimental uncertainty.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'The impulse is the area under the force-time graph over the duration of the collision, found by numerically integrating (summing $F\\,\\Delta t$ over the samples).',
            keywords: ['area under', 'integrat', 'sum of f', 'f δt', 'fδt', 'f*dt'],
          },
          {
            points: 1,
            description: 'Reduces uncertainty: repeats each launch speed and averages, and/or uses many launch speeds.',
            keywords: ['repeat', 'average', 'several speeds', 'multiple trials', 'different speeds'],
          },
        ],
        sampleAnswer:
          'Select the part of the force-time graph from the instant the force rises from zero until it returns to zero. The impulse is the area under that curve: with 1000 samples per second, add up $F\\,\\Delta t$ for every sample, with $\\Delta t = 0.001$ s (or use the software\u2019s integral tool). To reduce uncertainty, repeat each launch speed three times and average the values of $v_i$, $v_f$, and $J$.',
      },
      {
        label: '(b)',
        prompt:
          'In trial 3, the force sensor graph is well modeled by $F(t) = F_{max}\\sin(\\pi t/\\Delta t)$ for $0 \\le t \\le \\Delta t$, with $F_{max} = 22.6$ N and $\\Delta t = 0.050$ s. Derive an expression for the impulse in terms of $F_{max}$ and $\\Delta t$. Then calculate its value and compare it with the value in the table.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Integrates: $J = \\displaystyle\\int_0^{\\Delta t} F_{max}\\sin\\left(\\frac{\\pi t}{\\Delta t}\\right)dt = \\frac{2F_{max}\\Delta t}{\\pi}$.',
            keywords: ['2f_max', '2fmax', '2 f_max', '2 fmax', '2fδt/π', '/π', '/pi', 'cos(π'],
          },
          {
            points: 1,
            description: 'Correct value: $J \\approx 0.72$ N·s, which matches the table value for trial 3.',
            keywords: ['0.72', '0.719'],
          },
        ],
        sampleAnswer:
          '$J = \\displaystyle\\int_0^{\\Delta t} F_{max}\\sin\\left(\\frac{\\pi t}{\\Delta t}\\right)dt = F_{max}\\frac{\\Delta t}{\\pi}\\left[-\\cos\\left(\\frac{\\pi t}{\\Delta t}\\right)\\right]_0^{\\Delta t} = \\frac{2F_{max}\\Delta t}{\\pi}$.\n\n$J = \\dfrac{2(22.6)(0.050)}{\\pi} \\approx 0.72$ N·s, the same as the table value for trial 3.',
      },
      {
        label: '(c)',
        prompt:
          '(i) Using the impulse-momentum theorem, identify quantities that could be graphed to produce a straight line whose slope is the mass $m$. (ii) Calculate any quantities you need from the data, and describe the graph and best-fit line. (iii) Determine the slope of the best-fit line.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description:
              'The cart reverses direction, so $J = m(v_i + v_f)$ in terms of speeds; graph $J$ versus $(v_i + v_f)$. Any correct linearization earns this point.',
            keywords: ['v_i + v_f', 'vi + vf', 'v_f + v_i', 'vf + vi', 'sum of the speeds', 'sum of speeds', 'reverses direction'],
          },
          {
            points: 1,
            description: 'Correct values of $v_i + v_f$: 0.71, 1.09, 1.43, 1.81, 2.15 m/s.',
            keywords: ['0.71', '1.09', '1.43', '1.81', '2.15'],
          },
          {
            points: 1,
            description:
              'Axes labeled with units on linear scales; the points lie close to a straight line through (approximately) the origin, and the best-fit line passes among them.',
            keywords: ['best-fit', 'best fit', 'through the origin', 'straight line'],
          },
          {
            points: 1,
            description: 'Slope between 0.48 and 0.52 kg (least-squares value 0.50 kg).',
            keywords: ['0.50', '0.497', '0.49', '0.5 kg', '0.51'],
          },
        ],
        sampleAnswer:
          'Taking the direction toward the bumper as positive, $\\Delta p = m(-v_f) - m(v_i)$, so the impulse from the bumper has magnitude $J = m(v_i + v_f)$. A graph of $J$ (N·s, vertical) versus $v_i + v_f$ (m/s, horizontal) is a straight line through the origin with slope $m$.\n\n$v_i + v_f$ (m/s): 0.71, 1.09, 1.43, 1.81, 2.15\n\nThe five points fall close to a straight line through the origin. A best-fit line through $(0, 0)$ and about $(2.15, 1.07)$ has slope $\\approx 0.50$ kg (N·s per m/s).',
      },
      {
        label: '(d)',
        prompt:
          'Use your slope to determine $m$. A second student analyzes the same data using $J = m(v_i - v_f)$. Indicate whether that student\u2019s value of $m$ is greater than, less than, or equal to yours, and explain the error.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'The mass equals the slope: $m \\approx 0.50$ kg.',
            keywords: ['0.50 kg', '0.5 kg', '0.497', 'm = 0.50', 'm = 0.5'],
          },
          {
            points: 1,
            description:
              'The second student\u2019s mass is much greater (about 4 kg for trial 3, since $0.72/0.17 \\approx 4.2$ kg) because that equation ignores the reversal of direction, using a change in velocity that is far too small.',
            keywords: ['greater', 'larger', 'too large', 'overestimat', 'direction', 'reverses'],
          },
        ],
        sampleAnswer:
          '$m = \\text{slope} \\approx 0.50$ kg.\n\nThe second student\u2019s value is much greater. Velocity is a vector: the cart moves toward the bumper at $v_i$ and away at $v_f$, so the change in velocity has magnitude $v_i + v_f$ (1.43 m/s in trial 3), not $v_i - v_f$ (0.17 m/s). Dividing the same impulse by the much smaller $v_i - v_f$ gives $m \\approx 0.72/0.17 \\approx 4.2$ kg, far too large.',
      },
    ],
  },

  // =========================================================================
  // QQT 1 — Ring dropped onto a spinning disk (Unit 6)
  // =========================================================================
  {
    id: 'mech-frq-qqt-1',
    type: 'qqt',
    unit: 6,
    title: 'Qualitative/Quantitative Translation: A Ring Dropped Onto a Spinning Disk',
    prompt:
      'A uniform disk of mass $M$ and radius $R$ ($I = \\tfrac{1}{2}MR^2$) spins freely about a frictionless vertical axle with angular speed $\\omega_0$. A thin ring of the same mass $M$ and radius $R$ ($I = MR^2$), initially not rotating, is dropped from a small height so that it lands flat on top of the disk, centered on the axle. Friction between the ring and the disk eventually makes them rotate together.',
    totalPoints: 8,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the final rotational kinetic energy of the disk-ring system is greater than, less than, or equal to the initial kinetic energy of the disk. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the final kinetic energy is less.',
            keywords: ['is less', 'less than', 'decreases', 'smaller', 'lower', 'energy is lost'],
          },
          {
            points: 1,
            description:
              'Indicates that the angular momentum of the disk-ring system is conserved because the frictionless axle exerts no external torque about the axis.',
            keywords: ['angular momentum is conserved', 'conservation of angular momentum', 'no external torque', 'no net external torque'],
          },
          {
            points: 1,
            description:
              'Indicates that while the surfaces slip, kinetic friction between them converts some kinetic energy to thermal energy (a rotational inelastic collision); the same angular momentum shared by a larger rotational inertia means a slower rotation and less kinetic energy.',
            keywords: ['thermal', 'heat', 'slip', 'inelastic', 'internal energy'],
          },
        ],
        sampleAnswer:
          'The final kinetic energy is less. The axle is frictionless and the ring falls along the axis, so nothing exerts an external torque about the axle and the angular momentum of the disk-ring system stays the same. But until they rotate together, the ring slides over the disk, and kinetic friction between the rubbing surfaces converts some of the kinetic energy into thermal energy. This is the rotational version of a perfectly inelastic collision: the same angular momentum is shared by a larger rotational inertia, which turns more slowly and carries less kinetic energy.',
      },
      {
        label: '(b)',
        prompt:
          'Derive expressions for the final angular speed $\\omega_f$ in terms of $\\omega_0$, and for the ratio of the final kinetic energy to the initial kinetic energy, $K_f/K_0$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Writes conservation of angular momentum: $\\tfrac{1}{2}MR^2\\omega_0 = \\left(\\tfrac{1}{2}MR^2 + MR^2\\right)\\omega_f$.',
            keywords: ['1/2 mr^2 ω0', '1/2mr^2ω0', 'iω0 =', 'i1ω0', 'i_1ω_0', 'l_i = l_f', 'li = lf', '3/2 mr^2'],
          },
          {
            points: 1,
            description: 'Correct final angular speed: $\\omega_f = \\omega_0/3$.',
            keywords: ['ω0/3', 'ω_0/3', 'omega0/3', 'omega_0/3', 'w0/3', '(1/3)ω'],
          },
          {
            points: 1,
            description:
              'Correct ratio: $K_f/K_0 = \\dfrac{\\tfrac{1}{2}\\left(\\tfrac{3}{2}MR^2\\right)(\\omega_0/3)^2}{\\tfrac{1}{2}\\left(\\tfrac{1}{2}MR^2\\right)\\omega_0^2} = \\tfrac{1}{3}$.',
            keywords: ['kf/k0 = 1/3', 'k_f/k_0 = 1/3', 'one third of', 'one-third of', 'k0/3', 'k_0/3', 'ratio is 1/3', '= 1/3'],
          },
        ],
        sampleAnswer:
          'Angular momentum about the axle is conserved:\n\n$\\tfrac{1}{2}MR^2\\omega_0 = \\left(\\tfrac{1}{2}MR^2 + MR^2\\right)\\omega_f = \\tfrac{3}{2}MR^2\\omega_f \\Rightarrow \\omega_f = \\dfrac{\\omega_0}{3}$.\n\n$K_0 = \\tfrac{1}{2}\\left(\\tfrac{1}{2}MR^2\\right)\\omega_0^2 = \\tfrac{1}{4}MR^2\\omega_0^2$\n\n$K_f = \\tfrac{1}{2}\\left(\\tfrac{3}{2}MR^2\\right)\\left(\\tfrac{\\omega_0}{3}\\right)^2 = \\tfrac{1}{12}MR^2\\omega_0^2$\n\n$K_f/K_0 = 1/3$.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your result from part (b) is or is not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional dependence: for a fixed angular momentum, $K = L^2/(2I)$, so tripling the rotational inertia reduces the kinetic energy to one third.',
            keywords: ['l^2/2i', 'l²/2i', 'l^2/(2i)', 'l²/(2i)', 'triples', 'tripled', 'three times', 'inversely'],
          },
          {
            points: 1,
            description: 'Connects to part (a): $K_f/K_0 = 1/3 < 1$, so the kinetic energy decreases, consistent with "less".',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'For a fixed angular momentum $L$, the kinetic energy is $K = \\dfrac{L^2}{2I}$, inversely proportional to the rotational inertia. Adding the ring triples the rotational inertia ($\\tfrac{1}{2}MR^2 \\to \\tfrac{3}{2}MR^2$) while $L$ is unchanged, so $K$ falls to one third. Since $K_f/K_0 = 1/3 < 1$, this is consistent with my answer in part (a) that the kinetic energy decreases; the missing two thirds became thermal energy.',
      },
    ],
  },

  // =========================================================================
  // QQT 2 — Stopping on a surface whose friction grows with distance (Units 3 and 2)
  // =========================================================================
  {
    id: 'mech-frq-qqt-2',
    type: 'qqt',
    unit: 3,
    title: 'Qualitative/Quantitative Translation: Stopping Where Friction Grows With Distance',
    prompt:
      'A block of mass $m$ slides on a frictionless horizontal surface with speed $v_0$. At $x = 0$ it enters a rough horizontal region where the coefficient of kinetic friction increases with distance as $\\mu_k(x) = \\gamma x$, where $\\gamma$ is a positive constant. The block comes to rest at $x = D$. Air resistance is negligible.',
    totalPoints: 8,
    timeRecommendation: 20,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'An identical block enters the rough region with speed $2v_0$. Indicate whether its stopping distance is greater than $2D$, equal to $2D$, or less than $2D$. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the stopping distance equals $2D$.',
            keywords: ['equal to 2d', 'exactly twice', 'twice the distance', 'twice as far', '= 2d', 'equals 2d'],
          },
          {
            points: 1,
            description: 'Indicates that the second block starts with four times the kinetic energy.',
            keywords: ['four times', '4 times', 'quadruple', '4k'],
          },
          {
            points: 1,
            description:
              'Indicates that the friction force grows in proportion to the distance traveled, so the work done by friction (the triangular area under a force-versus-position graph) grows as the square of the distance; doubling the distance gives four times the work.',
            keywords: ['triangle', 'area under', 'square of the distance', 'proportional to the distance', 'grows linearly', 'increases linearly', 'twice the average', 'average friction'],
          },
        ],
        sampleAnswer:
          'The stopping distance is exactly $2D$. Doubling the speed gives the block four times the kinetic energy, so friction must do four times as much negative work. The friction force is not constant: it grows in proportion to the distance into the rough region, so a graph of friction force versus position is a straight line from the origin, and the work is the triangular area under it. If the distance doubles, both the base and the height of that triangle double, so the area (the work) is four times as large. Four times the work needs exactly twice the distance.',
      },
      {
        label: '(b)',
        prompt: 'Derive an expression for $D$ in terms of $v_0$, $\\gamma$, and $g$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Writes the work done by the position-dependent friction force as an integral, $W_f = -\\displaystyle\\int_0^D \\gamma m g x\\,dx$ (or uses $a = v\\,dv/dx$).',
            keywords: ['∫', 'integral', 'γmgx', 'γ m g x', 'gamma m g x', 'v dv/dx', 'vdv/dx'],
          },
          {
            points: 1,
            description: 'Applies the work-energy theorem: $-\\tfrac{1}{2}\\gamma m g D^2 = 0 - \\tfrac{1}{2}mv_0^2$.',
            keywords: ['1/2 γmgd^2', '1/2γmgd^2', 'γmgd^2/2', 'γmgd²/2', 'work-energy', 'work energy', '1/2 mv0^2', '1/2mv0^2'],
          },
          {
            points: 1,
            description: 'Correct expression: $D = \\dfrac{v_0}{\\sqrt{\\gamma g}}$.',
            keywords: ['v0/sqrt(γg)', 'v0/√(γg)', 'v_0/sqrt', 'v0/sqrt(gamma g)', 'v0/√γg', 'v_0/√', 'v0/sqrt(gγ)', 'v0/√(gγ)'],
          },
        ],
        sampleAnswer:
          'The normal force is $mg$, so the friction force at position $x$ is $f = \\mu_k(x)mg = \\gamma m g x$, opposite the motion.\n\nWork done by friction: $W_f = -\\displaystyle\\int_0^D \\gamma m g x\\,dx = -\\tfrac{1}{2}\\gamma m g D^2$.\n\nWork-energy theorem: $-\\tfrac{1}{2}\\gamma m g D^2 = 0 - \\tfrac{1}{2}mv_0^2 \\Rightarrow D = \\dfrac{v_0}{\\sqrt{\\gamma g}}$.',
      },
      {
        label: '(c)',
        prompt: 'Explain how your expression from part (b) is or is not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional dependence: $D$ is directly proportional to $v_0$ (and independent of mass), so doubling $v_0$ doubles $D$.',
            keywords: ['directly proportional', 'proportional to v0', 'proportional to v_0', 'linear in v', 'doubles'],
          },
          {
            points: 1,
            description: 'Connects to part (a): the new stopping distance is exactly $2D$, consistent with the prediction.',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'In $D = v_0/\\sqrt{\\gamma g}$, the stopping distance is directly proportional to $v_0$, and the mass cancels. Doubling $v_0$ therefore doubles $D$, giving exactly $2D$. This is consistent with part (a): four times the kinetic energy requires twice the distance because the work done by friction grows as the square of the distance.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export const getAllFRQs = (): PhysicsCMechFRQ[] => [...mechFRQs]

export function getFRQsByType(type: PhysicsCMechFRQType): PhysicsCMechFRQ[] {
  return mechFRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (MR, TBR, LAB, QQT): 40 points in 95 minutes. */
export function generateFullExamFRQs(): {
  questions: PhysicsCMechFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = PHYSICS_C_MECH_FRQ_TYPES.map(({ type }) => shuffleArray(getFRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 95,
  }
}
