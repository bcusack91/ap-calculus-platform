// AP Physics 1: Algebra-Based Free-Response Questions
// Built to the 2025+ exam: four typed FRQs per exam, 95 minutes, 40 points.
//   Mathematical Routines (MR) 10 · Translation Between Representations (TBR) 12
//   Experimental Design and Analysis (LAB) 10 · Qualitative/Quantitative Translation (QQT) 8
// Two questions per type (two complete exams). Units follow the 2024-25 CED:
// 1 Kinematics, 2 Force and Translational Dynamics, 3 Work, Energy, and Power,
// 4 Linear Momentum, 5 Torque and Rotational Dynamics, 6 Energy and Momentum of
// Rotating Systems, 7 Oscillations, 8 Fluids.
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

export type Physics1FRQType = 'mr' | 'tbr' | 'lab' | 'qqt'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const PHYSICS1_FRQ_TYPES: { type: Physics1FRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'mr', label: 'Mathematical Routines', short: 'MR', points: 10, minutes: 20 },
  { type: 'tbr', label: 'Translation Between Representations', short: 'TBR', points: 12, minutes: 25 },
  { type: 'lab', label: 'Experimental Design and Analysis', short: 'LAB', points: 10, minutes: 30 },
  { type: 'qqt', label: 'Qualitative/Quantitative Translation', short: 'QQT', points: 8, minutes: 20 },
]

export interface Physics1FRQ {
  id: string
  type: Physics1FRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const physics1FRQs: Physics1FRQ[] = [
  // =========================================================================
  // MR 1 — Collision through a spring bumper (Units 3 and 4)
  // =========================================================================
  {
    id: 'phys1-frq-mr-1',
    type: 'mr',
    unit: 4,
    title: 'Mathematical Routines: Carts Colliding Through a Spring Bumper',
    prompt:
      'Cart A of mass $m_A = 2.0$ kg moves to the right at $3.0$ m/s along a level, frictionless track toward cart B of mass $m_B = 4.0$ kg, which is at rest. Cart B has an ideal spring bumper of negligible mass and spring constant $k = 1200$ N/m attached to its left side. The carts interact only through the spring, and the collision is elastic. Take the system to be both carts and the spring.',
    totalPoints: 10,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'At the instant the spring is maximally compressed, the two carts have the same velocity. Calculate that common velocity.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses conservation of momentum for the two-cart system: $m_A v_{A0} = (m_A + m_B) v$.',
            keywords: ['momentum', '2(3)', '6 = 6v', 'm_a v'],
          },
          {
            points: 1,
            description: 'Correct answer with units and direction: $v = 1.0$ m/s to the right.',
            keywords: ['1.0 m/s', '1 m/s', 'v = 1'],
          },
        ],
        sampleAnswer:
          'No net external horizontal force acts on the system, so momentum is conserved:\n\n$m_A v_{A0} = (m_A + m_B) v \\Rightarrow (2.0)(3.0) = (6.0) v \\Rightarrow v = 1.0$ m/s, to the right.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the maximum compression of the spring.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Uses conservation of energy: the initial kinetic energy equals the kinetic energy at maximum compression plus the spring potential energy, $\\tfrac{1}{2}m_A v_{A0}^2 = \\tfrac{1}{2}(m_A + m_B)v^2 + \\tfrac{1}{2}kx^2$.',
            keywords: ['conservation of energy', 'energy is conserved', 'spring potential', '1/2kx', '1/2 kx'],
          },
          {
            points: 1,
            description:
              'Correct kinetic energies: 9.0 J initially and 3.0 J at maximum compression, so the spring stores 6.0 J.',
            keywords: ['9 j', '9.0 j', '6 j', '6.0 j'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $x = \\sqrt{2(6.0)/1200} = 0.10$ m.',
            keywords: ['0.10 m', '0.1 m', '10 cm'],
          },
        ],
        sampleAnswer:
          'Mechanical energy is conserved because the spring is ideal and the track is frictionless.\n\n$K_0 = \\tfrac{1}{2}(2.0)(3.0)^2 = 9.0$ J. At maximum compression, $K = \\tfrac{1}{2}(6.0)(1.0)^2 = 3.0$ J.\n\nSo $U_s = \\tfrac{1}{2}kx^2 = 9.0 - 3.0 = 6.0$ J, and $x = \\sqrt{2(6.0)/1200} = \\sqrt{0.010} = 0.10$ m.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the velocity of each cart after the carts separate. Indicate the direction of each.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Writes a momentum equation for the separated carts: $(2.0)(3.0) = 2.0\\,v_A + 4.0\\,v_B$.',
            keywords: ['momentum', '6 = 2v', '2v_a + 4v_b'],
          },
          {
            points: 1,
            description:
              'Writes a kinetic energy equation (elastic) or uses the reversal of relative velocity, $v_B - v_A = 3.0$ m/s.',
            keywords: ['kinetic energy', 'elastic', 'relative velocity', '9 = '],
          },
          {
            points: 1,
            description:
              'Correct answers: cart A moves at 1.0 m/s to the left ($v_A = -1.0$ m/s) and cart B at 2.0 m/s to the right.',
            keywords: ['-1.0 m/s', '-1 m/s', '1 m/s to the left', '1.0 m/s to the left', '2.0 m/s', '2 m/s'],
          },
        ],
        sampleAnswer:
          'Momentum: $6.0 = 2.0\\,v_A + 4.0\\,v_B$.\n\nFor an elastic collision the relative velocity reverses: $v_B - v_A = 3.0$ m/s, so $v_B = v_A + 3.0$.\n\nSubstituting: $6.0 = 2.0\\,v_A + 4.0\\,v_A + 12.0$, so $v_A = -1.0$ m/s and $v_B = 2.0$ m/s.\n\nCart A moves 1.0 m/s to the left; cart B moves 2.0 m/s to the right. Check: $K = \\tfrac{1}{2}(2)(1)^2 + \\tfrac{1}{2}(4)(2)^2 = 9.0$ J, as required.',
      },
      {
        label: '(d)',
        prompt:
          'The bumper is replaced with a stiffer ideal spring, and the experiment is repeated with the same initial velocities. Indicate whether the maximum magnitude of the force exerted on cart B by the spring is greater than, less than, or equal to the value in the original collision. Justify your answer.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the maximum force is greater.',
            keywords: ['greater', 'increase', 'larger'],
          },
          {
            points: 1,
            description:
              'Justifies: the energy stored at maximum compression is still 6.0 J (the common velocity is unchanged), so $\\tfrac{1}{2}kx^2$ is fixed; a larger $k$ gives a smaller $x$, but $F = kx = \\sqrt{2kU_s}$ grows with $k$.',
            keywords: ['same energy', '6 j', 'smaller compression', 'sqrt(2ku', 'kx'],
          },
        ],
        sampleAnswer:
          'Greater. The common velocity at maximum compression is still 1.0 m/s, so the spring still stores $U_s = 6.0$ J. From $U_s = \\tfrac{1}{2}kx^2$, the stiffer spring compresses less, but the force at maximum compression is $F = kx = \\sqrt{2kU_s}$, which increases as $k$ increases.',
      },
    ],
  },

  // =========================================================================
  // MR 2 — Submerged block held by a string (Unit 8: Fluids)
  // =========================================================================
  {
    id: 'phys1-frq-mr-2',
    type: 'mr',
    unit: 8,
    title: 'Mathematical Routines: A Submerged Block Held by a String',
    prompt:
      'A solid wooden block of volume $V = 2.0 \\times 10^{-3}$ m³ and uniform density $\\rho_b = 600$ kg/m³ is held completely under water (density $\\rho_w = 1000$ kg/m³) by a light string tied to the bottom of a tank. The block is at rest. Use $g = 10$ m/s².',
    totalPoints: 10,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe the free-body diagram of the block: identify every force exerted on it, its direction, and how the lengths of the force arrows compare.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Three forces and no others: the gravitational force (weight) downward, the buoyant force upward, and the tension from the string downward.',
            keywords: ['tension down', 'tension downward', 'string pulls down', 'buoyant force up', 'buoyant up'],
          },
          {
            points: 1,
            description:
              'The upward buoyant-force arrow is longer than the weight arrow, and its length equals the sum of the weight and tension arrows.',
            keywords: ['sum of', 'longer', 'equals the weight plus', 'larger than the weight'],
          },
        ],
        sampleAnswer:
          'Three forces act on the block: the gravitational force $mg$ downward, the tension $T$ from the string downward, and the buoyant force $F_B$ upward. The block is in equilibrium, so the buoyant-force arrow is the longest, equal in length to the weight arrow plus the tension arrow.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the magnitude of the buoyant force exerted on the block.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses Archimedes\u2019 principle with the full block volume submerged: $F_B = \\rho_w V g$.',
            keywords: ['archimedes', 'displaced', 'rho_w v g', 'ρvg', 'rho v g'],
          },
          {
            points: 1,
            description: 'Correct answer with units: $F_B = (1000)(2.0 \\times 10^{-3})(10) = 20$ N.',
            keywords: ['20 n', '20.0 n'],
          },
        ],
        sampleAnswer:
          'The block displaces its full volume of water: $F_B = \\rho_w V g = (1000)(2.0 \\times 10^{-3})(10) = 20$ N.',
      },
      {
        label: '(c)',
        prompt:
          'Derive an expression for the tension in the string in terms of $\\rho_w$, $\\rho_b$, $V$, and $g$. Then calculate its value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies Newton\u2019s second law with zero acceleration, $F_B - mg - T = 0$, with $m = \\rho_b V$, giving $T = (\\rho_w - \\rho_b)Vg$.',
            keywords: ['(rho_w - rho_b)', '(ρw − ρb)', '(ρw - ρb)', 'fb - mg', 'f_b - mg', 'equilibrium'],
          },
          {
            points: 1,
            description: 'Correct value with units: $T = 20 - 12 = 8.0$ N.',
            keywords: ['8 n', '8.0 n'],
          },
        ],
        sampleAnswer:
          'Equilibrium: $F_B - mg - T = 0$, with $F_B = \\rho_w V g$ and $m = \\rho_b V$.\n\n$T = \\rho_w V g - \\rho_b V g = (\\rho_w - \\rho_b) V g$.\n\n$T = (1000 - 600)(2.0 \\times 10^{-3})(10) = 8.0$ N. (The weight is $mg = 12$ N.)',
      },
      {
        label: '(d)',
        prompt:
          'The string is cut. Calculate the magnitude and direction of the acceleration of the block immediately after the string is cut. Neglect drag and the motion of the water.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Net force is $F_B - mg = 8.0$ N upward, with $m = \\rho_b V = 1.2$ kg.',
            keywords: ['1.2 kg', 'net force', '8 n'],
          },
          {
            points: 1,
            description: 'Correct answer with units and direction: $a = 8.0/1.2 \\approx 6.7$ m/s² upward.',
            keywords: ['6.7', '6.67', '20/3'],
          },
        ],
        sampleAnswer:
          'Once the tension is gone, $F_{net} = F_B - mg = 20 - 12 = 8.0$ N upward. The mass is $m = \\rho_b V = (600)(2.0 \\times 10^{-3}) = 1.2$ kg.\n\n$a = F_{net}/m = 8.0/1.2 \\approx 6.7$ m/s², directed upward.',
      },
      {
        label: '(e)',
        prompt:
          'The block rises and eventually floats at rest at the surface. Calculate the fraction of the block\u2019s volume that is below the water surface.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets the buoyant force equal to the weight for a floating object: $\\rho_w V_{sub} g = \\rho_b V g$.',
            keywords: ['buoyant force equals', 'equals the weight', 'f_b = mg', 'fb = mg', 'v_sub'],
          },
          {
            points: 1,
            description: 'Correct answer: $V_{sub}/V = \\rho_b/\\rho_w = 0.60$ (60%).',
            keywords: ['0.6', '60%', '60 %', '3/5'],
          },
        ],
        sampleAnswer:
          'Floating at rest, $F_B = mg$: $\\rho_w V_{sub} g = \\rho_b V g$.\n\n$\\dfrac{V_{sub}}{V} = \\dfrac{\\rho_b}{\\rho_w} = \\dfrac{600}{1000} = 0.60$, so 60% of the block is under water.',
      },
    ],
  },

  // =========================================================================
  // TBR 1 — Horizontal block-spring oscillator (Units 3 and 7)
  // =========================================================================
  {
    id: 'phys1-frq-tbr-1',
    type: 'tbr',
    unit: 7,
    title: 'Translation Between Representations: A Block-Spring Oscillator',
    prompt:
      'A block of mass $m = 0.50$ kg rests on a horizontal, frictionless surface and is attached to an ideal spring of spring constant $k = 50$ N/m. The block is pulled to position $x = +A$, where $A = 0.20$ m, and released from rest at time $t = 0$. Position $x = 0$ is the equilibrium position. The system is the block and the spring.',
    totalPoints: 12,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe energy bar charts for the system at three positions: $x = +A$, $x = 0$, and $x = +A/2$. For each, give the kinetic energy $K$ and the spring potential energy $U_s$ as fractions of the total mechanical energy $E$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'At $x = +A$: all spring potential energy, $U_s = E$ and $K = 0$.',
            keywords: ['all spring', 'k = 0 at', 'u_s = e', 'us = e', 'only spring'],
          },
          {
            points: 1,
            description: 'At $x = 0$: all kinetic energy, $K = E$ and $U_s = 0$.',
            keywords: ['all kinetic', 'k = e', 'only kinetic', 'us = 0', 'u_s = 0'],
          },
          {
            points: 1,
            description:
              'At $x = +A/2$: $U_s = E/4$ and $K = 3E/4$ (because $U_s \\propto x^2$); all three charts have the same total height.',
            keywords: ['1/4', '3/4', 'one quarter', 'one-fourth', 'three quarters'],
          },
        ],
        sampleAnswer:
          'Total energy: $E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(50)(0.20)^2 = 1.0$ J, the same total height in every chart.\n\n- $x = +A$: $U_s = E$ (1.0 J), $K = 0$.\n- $x = 0$: $K = E$ (1.0 J), $U_s = 0$.\n- $x = +A/2$: $U_s = \\tfrac{1}{2}k(A/2)^2 = E/4$ (0.25 J), so $K = 3E/4$ (0.75 J).',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the speed of the block at $x = +A/2$ in terms of $k$, $m$, and $A$. Then calculate its value.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Starts from conservation of mechanical energy for the block-spring system.',
            keywords: ['conservation of energy', 'energy is conserved', 'mechanical energy'],
          },
          {
            points: 1,
            description:
              'Correct energy equation: $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}k(A/2)^2 + \\tfrac{1}{2}mv^2$.',
            keywords: ['(a/2)', 'a/2)^2', 'a^2/4', 'ka^2/4'],
          },
          {
            points: 1,
            description:
              'Correct expression and value: $v = \\tfrac{\\sqrt{3}}{2}A\\sqrt{k/m} \\approx 1.7$ m/s.',
            keywords: ['sqrt(3)', '√3', '1.73', '1.7 m/s'],
          },
        ],
        sampleAnswer:
          'Mechanical energy is conserved (no friction):\n\n$\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}k\\left(\\tfrac{A}{2}\\right)^2 + \\tfrac{1}{2}mv^2 \\Rightarrow mv^2 = \\tfrac{3}{4}kA^2$\n\n$v = \\dfrac{\\sqrt{3}}{2}A\\sqrt{\\dfrac{k}{m}} = \\dfrac{\\sqrt{3}}{2}(0.20)\\sqrt{100} = \\sqrt{3} \\approx 1.7$ m/s.',
      },
      {
        label: '(c)',
        prompt:
          'Describe graphs of the block\u2019s position $x$ and velocity $v_x$ as functions of time from $t = 0$ to $t = T$, where $T$ is the period. Give the numerical value of $T$ and the values of the maximum position and maximum velocity on the axes.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Position: a cosine curve starting at $+A = 0.20$ m, reaching $-A$ at $T/2$ and returning to $+A$ at $T$.',
            keywords: ['cosine', 'starts at +a', 'starts at 0.20', 'starts at a maximum'],
          },
          {
            points: 1,
            description:
              'Velocity: starts at zero and first becomes negative (a negative sine curve), with extreme values $\\pm A\\sqrt{k/m} = \\pm 2.0$ m/s at $T/4$ and $3T/4$.',
            keywords: ['negative sine', '-sine', 'starts at zero', 'starts at 0', '2.0 m/s', '2 m/s'],
          },
          {
            points: 1,
            description: 'Correct period: $T = 2\\pi\\sqrt{m/k} \\approx 0.63$ s.',
            keywords: ['0.63', '0.628', '0.2π', '0.2pi'],
          },
        ],
        sampleAnswer:
          '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.50/50} = 0.2\\pi \\approx 0.63$ s.\n\nPosition: $x(t) = A\\cos(2\\pi t/T)$, a cosine curve that starts at $+0.20$ m, crosses zero at $T/4$, reaches $-0.20$ m at $T/2$, and returns to $+0.20$ m at $T$.\n\nVelocity: $v_x$ starts at zero, becomes negative (the block moves toward equilibrium), reaches $-2.0$ m/s at $T/4$, returns to zero at $T/2$, reaches $+2.0$ m/s at $3T/4$, and returns to zero at $T$. The maximum speed is $A\\sqrt{k/m} = (0.20)(10) = 2.0$ m/s.',
      },
      {
        label: '(d)',
        prompt:
          'The block is replaced by one of mass $4m$, and it is again released from rest at $x = +A$. Indicate how the new period and the new maximum speed compare with the original values (give the factor for each). Justify each answer using the equations for the period and the maximum speed.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'The period doubles (to about 1.3 s).',
            keywords: ['period doubles', 'twice the period', 'doubles', '1.26', '1.3 s'],
          },
          {
            points: 1,
            description: 'The maximum speed is halved (to 1.0 m/s).',
            keywords: ['halved', 'half', '1.0 m/s', '1 m/s'],
          },
          {
            points: 1,
            description:
              'Justification from functional dependence: $T \\propto \\sqrt{m}$ and $v_{max} = A\\sqrt{k/m} \\propto 1/\\sqrt{m}$; the stored energy $\\tfrac{1}{2}kA^2$ is unchanged, so four times the mass moves at half the speed.',
            keywords: ['square root', 'sqrt(m', '√m', 'same energy', 'proportional'],
          },
        ],
        sampleAnswer:
          'Period: $T = 2\\pi\\sqrt{m/k} \\propto \\sqrt{m}$, so with $4m$ the period doubles to about 1.26 s.\n\nMaximum speed: the total energy $\\tfrac{1}{2}kA^2 = 1.0$ J is unchanged because $A$ and $k$ are unchanged. At equilibrium $\\tfrac{1}{2}(4m)v_{max}^2 = \\tfrac{1}{2}kA^2$, so $v_{max} = A\\sqrt{k/(4m)}$, half the original: 1.0 m/s.',
      },
    ],
  },

  // =========================================================================
  // TBR 2 — Block hanging from a disk pulley (Units 5 and 6)
  // =========================================================================
  {
    id: 'phys1-frq-tbr-2',
    type: 'tbr',
    unit: 5,
    title: 'Translation Between Representations: A Block Unwinding a Disk Pulley',
    prompt:
      'A uniform solid disk of mass $M$ and radius $R$ is free to rotate without friction about a fixed horizontal axle through its center. Its rotational inertia is $I = \\tfrac{1}{2}MR^2$. A light string is wrapped around the rim of the disk, and a block of mass $m$ hangs from the free end of the string. The block is released from rest, and the string does not slip on the disk.',
    totalPoints: 12,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe (i) a free-body diagram for the block and (ii) a force diagram for the disk, showing where each force on the disk is applied. Indicate how the tension compares with the block\u2019s weight.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Block: weight $mg$ downward and tension $T$ upward, with no other forces.',
            keywords: ['tension up', 'tension upward', 'weight down', 'mg down'],
          },
          {
            points: 1,
            description: 'The tension arrow on the block is shorter than the weight arrow ($T < mg$) because the block accelerates downward.',
            keywords: ['t < mg', 'less than mg', 'less than the weight', 'shorter'],
          },
          {
            points: 1,
            description:
              'Disk: the tension acts downward at the rim, tangent to the disk, a distance $R$ from the axle; the disk\u2019s weight and the axle force act at the center (and produce no torque).',
            keywords: ['at the rim', 'at the edge', 'tangent', 'at the center', 'axle force'],
          },
        ],
        sampleAnswer:
          '(i) Block: the gravitational force $mg$ points down and the string tension $T$ points up. Since the block accelerates downward, the $T$ arrow is shorter than the $mg$ arrow.\n\n(ii) Disk: the string tension $T$ acts straight down at the edge of the disk, tangent to the rim, a distance $R$ from the axle. The disk\u2019s weight $Mg$ acts down at the center and the axle force acts up at the center; these pass through the axle and exert no torque.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the magnitude of the acceleration $a$ of the block in terms of $m$, $M$, and $g$.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Newton\u2019s second law for the block: $mg - T = ma$.',
            keywords: ['mg - t = ma', 'mg − t = ma', 'mg-t=ma'],
          },
          {
            points: 1,
            description: 'Rotational form of Newton\u2019s second law for the disk: $TR = I\\alpha$.',
            keywords: ['tr = iα', 'tr = i alpha', 'torque', 'τ = iα'],
          },
          {
            points: 1,
            description: 'No-slip condition relating the motions: $a = \\alpha R$.',
            keywords: ['a = αr', 'a = alpha r', 'a = rα', 'no slip', 'does not slip'],
          },
          {
            points: 1,
            description: 'Correct expression: $a = \\dfrac{mg}{m + M/2} = \\dfrac{2mg}{2m + M}$.',
            keywords: ['m + m/2', '2mg/(2m + m)', '2mg/(2m+m)', 'mg/(m + m/2)', 'mg/(m+m/2)'],
          },
        ],
        sampleAnswer:
          'Block: $mg - T = ma$.\n\nDisk: $\\tau = TR = I\\alpha = \\tfrac{1}{2}MR^2 \\alpha$.\n\nNo slipping: $a = \\alpha R$, so $TR = \\tfrac{1}{2}MR^2(a/R)$, giving $T = \\tfrac{1}{2}Ma$.\n\nThen $mg - \\tfrac{1}{2}Ma = ma$, so $a = \\dfrac{mg}{m + M/2} = \\dfrac{2mg}{2m + M}$.',
      },
      {
        label: '(c)',
        prompt:
          'In one trial, $m = 2.0$ kg, $M = 4.0$ kg, and $R = 0.10$ m. Use $g = 10$ m/s². Describe a graph of the angular velocity $\\omega$ of the disk as a function of time from $t = 0$ to $t = 0.80$ s, including the value of $\\omega$ at $t = 0.80$ s, and state the physical meaning of the slope.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Calculates $a = 20/(2.0 + 2.0) = 5.0$ m/s² and $\\alpha = a/R = 50$ rad/s².',
            keywords: ['50 rad/s', '5.0 m/s', '5 m/s'],
          },
          {
            points: 1,
            description: 'The graph is a straight line through the origin, reaching $\\omega = 40$ rad/s at $t = 0.80$ s.',
            keywords: ['40 rad/s', 'straight line', 'through the origin', 'linear'],
          },
          {
            points: 1,
            description: 'The slope of the graph is the angular acceleration of the disk (constant, 50 rad/s²).',
            keywords: ['slope is the angular acceleration', 'slope = α', 'slope equals the angular acceleration', 'angular acceleration'],
          },
        ],
        sampleAnswer:
          '$a = \\dfrac{mg}{m + M/2} = \\dfrac{(2.0)(10)}{2.0 + 2.0} = 5.0$ m/s², so $\\alpha = a/R = 5.0/0.10 = 50$ rad/s².\n\nThe disk starts from rest with constant $\\alpha$, so $\\omega(t) = \\alpha t$: a straight line through the origin, reaching $\\omega = (50)(0.80) = 40$ rad/s at $t = 0.80$ s. (In that time the block falls $\\tfrac{1}{2}(5.0)(0.80)^2 = 1.6$ m.) The slope of the line is the angular acceleration, 50 rad/s².',
      },
      {
        label: '(d)',
        prompt:
          'A student claims: "If the disk is replaced by a thin ring (hoop) of the same mass and radius, $I = MR^2$, the block will accelerate faster because more of the mass is at the rim, where the string pulls." Evaluate the claim using your derivation from part (b).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'States the claim is incorrect: the block accelerates more slowly with the hoop.',
            keywords: ['incorrect', 'smaller acceleration', 'slower', 'decreases', 'less acceleration'],
          },
          {
            points: 1,
            description:
              'Reasoning from the derivation: a larger rotational inertia gives $TR = MR^2\\alpha$, so $a = mg/(m + M) \\approx 3.3$ m/s², smaller than with the disk; more inertia means more of the gravitational energy goes into rotation.',
            keywords: ['mg/(m + m)', 'mg/(m+m)', '3.3', 'larger rotational inertia', 'greater rotational inertia'],
          },
        ],
        sampleAnswer:
          'The claim is incorrect. Repeating the derivation with $I = MR^2$ gives $T = Ma$ and $a = \\dfrac{mg}{m + M}$. With the numbers from part (c), $a = 20/6.0 \\approx 3.3$ m/s², less than 5.0 m/s². Placing the mass at the rim increases the rotational inertia, so the same torque produces a smaller angular acceleration, and the block accelerates more slowly.',
      },
    ],
  },

  // =========================================================================
  // LAB 1 — Density of an unknown liquid from buoyant force (Unit 8: Fluids)
  // =========================================================================
  {
    id: 'phys1-frq-lab-1',
    type: 'lab',
    unit: 8,
    title: 'Experimental Design and Analysis: Density of an Unknown Liquid',
    prompt:
      'Students want to determine the density $\\rho_L$ of an unknown liquid. They have a metal cylinder with a hook on top and a uniform cross-sectional area $A = 4.0 \\times 10^{-4}$ m², a force sensor that can hang vertically from a stand, a tall beaker of the liquid, a lab jack that raises and lowers the beaker, and a meterstick. The cylinder is denser than the liquid. Use $g = 9.8$ m/s².',
    totalPoints: 10,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Submerged depth d (m)</th><td>0.020</td><td>0.040</td><td>0.060</td><td>0.080</td><td>0.100</td></tr><tr><th>Force sensor reading F (N)</th><td>5.91</td><td>5.80</td><td>5.72</td><td>5.63</td><td>5.52</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure the students could use to collect data that would allow them to determine $\\rho_L$. Include enough detail that another student could repeat it.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Hangs the cylinder from the force sensor, raises the beaker so the cylinder is partially submerged (not touching the bottom or sides), and records the force reading and the submerged depth measured with the meterstick.',
            keywords: ['force sensor', 'submerged depth', 'depth', 'reading'],
          },
          {
            points: 1,
            description:
              'Reduces experimental uncertainty: measures at several different depths and/or repeats each measurement and averages.',
            keywords: ['different depths', 'several depths', 'repeat', 'average', 'multiple'],
          },
        ],
        sampleAnswer:
          '1. Hang the cylinder from the force sensor and record the reading with the cylinder in air.\n2. Raise the beaker with the lab jack until the bottom 2 cm of the cylinder is submerged, keeping the cylinder from touching the beaker. Measure the submerged depth $d$ with the meterstick and record the force sensor reading $F$.\n3. Raise the beaker to increase $d$ in steps of about 2 cm, recording $d$ and $F$ each time, up to 10 cm.\n4. Repeat the whole set three times and average the readings at each depth.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an equation for the force sensor reading $F$ in terms of the cylinder\u2019s weight $W$, $\\rho_L$, $A$, $d$, and $g$. Then describe how a graph of the data could be used to find $\\rho_L$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Equilibrium of the cylinder with the buoyant force equal to the weight of displaced liquid: $F + \\rho_L A d g = W$, so $F = W - \\rho_L g A d$.',
            keywords: ['w - ρ', 'w - rho', 'mg - ρ', 'mg - rho', 'f = w -', 'f = mg -'],
          },
          {
            points: 1,
            description:
              'Graphing $F$ versus $d$ gives a straight line whose slope is $-\\rho_L g A$, so $\\rho_L = -\\text{slope}/(gA)$.',
            keywords: ['f versus d', 'f vs d', 'f vs. d', 'slope = -ρ', 'slope is -ρ', '-rho g a', '−ρ'],
          },
        ],
        sampleAnswer:
          'The cylinder is in equilibrium: $F + F_B - W = 0$, where $F_B = \\rho_L V_{sub} g = \\rho_L A d g$.\n\n$F = W - \\rho_L g A d$.\n\nA graph of $F$ (vertical) versus $d$ (horizontal) is linear with slope $-\\rho_L g A$ and vertical intercept $W$. So $\\rho_L = -\\dfrac{\\text{slope}}{gA}$.',
      },
      {
        label: '(c)',
        prompt:
          'The table shows the students\u2019 averaged data. Using the quantities from part (b), describe the graph of the data and the best-fit line, and calculate the slope of the best-fit line, using points on the line rather than data points.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Plots force sensor reading $F$ (N) on the vertical axis against submerged depth $d$ (m) on the horizontal axis.',
            keywords: ['f on the vertical', 'force on the vertical', 'f (n)', 'f vs d', 'f versus d'],
          },
          {
            points: 1,
            description: 'Axes are labeled with units on linear scales that use most of the grid.',
            keywords: ['units', 'linear scale', '(m)', '(n)'],
          },
          {
            points: 1,
            description: 'The data fall close to a straight line with a negative slope; the best-fit line passes among the points rather than through every point.',
            keywords: ['negative slope', 'decreasing', 'straight line', 'best-fit', 'best fit'],
          },
          {
            points: 1,
            description: 'Slope of the best-fit line between $-4.5$ and $-5.0$ N/m (least-squares value $-4.75$ N/m).',
            keywords: ['-4.7', '-4.8', '-4.75', '-4.6', '4.7 n/m', '4.75 n/m', '4.8 n/m'],
          },
        ],
        sampleAnswer:
          'Plot $F$ (N) on the vertical axis and $d$ (m) on the horizontal axis, with linear scales from about 5.5 N to 6.0 N and 0 to 0.10 m. The five points fall close to a straight line that slopes downward.\n\nA best-fit line passes through about $(0.010\\text{ m}, 5.95\\text{ N})$ and $(0.090\\text{ m}, 5.57\\text{ N})$:\n\n$\\text{slope} = \\dfrac{5.57 - 5.95}{0.090 - 0.010} = \\dfrac{-0.38}{0.080} \\approx -4.75$ N/m.',
      },
      {
        label: '(d)',
        prompt: 'Use your slope to calculate the density of the liquid.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Uses $\\rho_L = -\\text{slope}/(gA)$ and obtains a value between 1150 and 1270 kg/m³ (about 1200 kg/m³).',
            keywords: ['1200', '1210', '1212', '1190', '1180', '1220', '1230', '1250'],
          },
        ],
        sampleAnswer:
          '$\\rho_L = \\dfrac{-\\text{slope}}{gA} = \\dfrac{4.75}{(9.8)(4.0 \\times 10^{-4})} \\approx 1.2 \\times 10^{3}$ kg/m³ (about 1210 kg/m³).',
      },
      {
        label: '(e)',
        prompt:
          'Identify the physical quantity represented by the vertical intercept of the best-fit line, and give its approximate value.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'The intercept is the reading with nothing submerged: the weight of the cylinder, about 6.0 N.',
            keywords: ['weight', '6.0 n', '6 n', 'in air'],
          },
        ],
        sampleAnswer:
          'At $d = 0$ there is no buoyant force, so the intercept equals the cylinder\u2019s weight $W$, about 6.0 N.',
      },
    ],
  },

  // =========================================================================
  // LAB 2 — Mass of a cart from accelerations on a track (Units 1 and 2)
  // =========================================================================
  {
    id: 'phys1-frq-lab-2',
    type: 'lab',
    unit: 2,
    title: 'Experimental Design and Analysis: Finding a Cart\u2019s Mass From Its Acceleration',
    prompt:
      'Students want to determine the mass $M$ of a cart without using a balance. The cart is on a level track with negligible friction. A light string attached to the cart passes over a light, frictionless pulley at the end of the track and supports a hanger to which slotted masses can be added. A motion detector can record the cart\u2019s velocity as a function of time. The masses of the hanger and slotted masses are known. Use $g = 9.8$ m/s².',
    totalPoints: 10,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Hanging mass m (kg)</th><td>0.050</td><td>0.100</td><td>0.150</td><td>0.200</td><td>0.250</td></tr><tr><th>Acceleration a (m/s²)</th><td>0.58</td><td>1.08</td><td>1.56</td><td>1.95</td><td>2.34</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure the students could use to measure the acceleration of the cart for different hanging masses. Include how the acceleration is found from the motion detector data.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Releases the cart from rest with a known hanging mass, records velocity versus time with the motion detector, and finds the acceleration as the slope of the velocity-time graph.',
            keywords: ['slope of the velocity', 'slope of the v', 'velocity-time', 'velocity vs time', 'velocity versus time'],
          },
          {
            points: 1,
            description: 'Repeats for several different hanging masses (and/or repeats trials at each mass and averages).',
            keywords: ['different hanging masses', 'several masses', 'repeat', 'average', 'multiple trials'],
          },
        ],
        sampleAnswer:
          '1. Hang a known mass $m$ on the string, hold the cart at rest, and start the motion detector.\n2. Release the cart and record its velocity versus time until just before the hanger reaches the floor.\n3. Fit a straight line to the velocity-time graph; its slope is the acceleration $a$.\n4. Repeat three times for this mass and average.\n5. Repeat steps 1 to 4 for at least five different hanging masses.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the acceleration $a$ of the cart in terms of $m$, $M$, and $g$, treating the cart, string, and hanging mass as one system.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies Newton\u2019s second law to the system: the only unbalanced external force is the weight of the hanging mass, $mg = (M + m)a$.',
            keywords: ['mg = (m + m)a', 'mg = (m+m)a', 'newton', 'net force'],
          },
          {
            points: 1,
            description: 'Correct expression: $a = \\dfrac{mg}{M + m}$.',
            keywords: ['mg/(m + m)', 'mg/(m+m)', 'a = mg/'],
          },
        ],
        sampleAnswer:
          'For the system of cart, string, and hanging mass, the normal force on the cart balances its weight, so the net external force is the hanging weight $mg$, and the whole system of mass $M + m$ shares one acceleration magnitude:\n\n$mg = (M + m)a \\Rightarrow a = \\dfrac{mg}{M + m}$.',
      },
      {
        label: '(c)',
        prompt:
          'The table shows the students\u2019 data. (i) Identify quantities that could be graphed to produce a straight line whose slope can be used to find $M$. (ii) Calculate the values of those quantities for the data. (iii) Determine the slope of the best-fit line.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Linearizes: $\\dfrac{1}{a} = \\dfrac{M}{g}\\cdot\\dfrac{1}{m} + \\dfrac{1}{g}$, so graph $1/a$ (vertical) versus $1/m$ (horizontal). Any correct linearization earns this point.',
            keywords: ['1/a', '1/m'],
          },
          {
            points: 1,
            description:
              'Correct transformed values: $1/m$ = 20, 10, 6.7, 5.0, 4.0 kg⁻¹ and $1/a$ = 1.72, 0.93, 0.64, 0.51, 0.43 s²/m.',
            keywords: ['1.72', '0.93', '0.64', '0.926', '0.641'],
          },
          {
            points: 1,
            description: 'Slope of the best-fit line between about 0.077 and 0.085 kg·s²/m (least-squares value 0.081).',
            keywords: ['0.081', '0.080', '0.08', '0.082', '0.079'],
          },
        ],
        sampleAnswer:
          'Taking reciprocals of $a = mg/(M + m)$:\n\n$\\dfrac{1}{a} = \\dfrac{M}{g}\\left(\\dfrac{1}{m}\\right) + \\dfrac{1}{g}$, so a graph of $1/a$ versus $1/m$ is linear with slope $M/g$.\n\n$1/m$ (kg⁻¹): 20, 10, 6.67, 5.00, 4.00\n\n$1/a$ (s²/m): 1.72, 0.93, 0.64, 0.51, 0.43\n\nA best-fit line through about $(4.0, 0.43)$ and $(20, 1.73)$ has slope $\\approx (1.73 - 0.43)/16 \\approx 0.081$ kg·s²/m.',
      },
      {
        label: '(d)',
        prompt:
          'Use the slope to calculate $M$. Then explain what the vertical intercept of your best-fit line should equal according to the model, and whether the data are consistent with it.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Relates the slope to the unknown: $\\text{slope} = M/g$, so $M = g \\cdot \\text{slope}$.',
            keywords: ['m = g', 'slope = m/g', 'slope times g', 'g × slope', 'g x slope'],
          },
          {
            points: 1,
            description: 'Value of $M$ between 0.75 and 0.85 kg (about 0.79 kg).',
            keywords: ['0.79', '0.8 kg', '0.80', '0.78', '0.77', '0.81'],
          },
          {
            points: 1,
            description:
              'For the $1/a$ versus $1/m$ graph, the model predicts an intercept of $1/g \\approx 0.10$ s²/m and the best-fit intercept is about 0.10 to 0.11 s²/m, so the data are consistent. (For another valid linearization, such as $m(g - a)$ versus $a$ with slope $M$, the model predicts an intercept of zero, and the fit gives about zero.)',
            keywords: ['1/g', '0.10', '0.102', '0.11', 'intercept of zero', 'intercept is zero', 'intercept should be zero'],
          },
        ],
        sampleAnswer:
          '$M = g \\cdot \\text{slope} = (9.8)(0.081) \\approx 0.79$ kg.\n\nAccording to the model, the vertical intercept (where $1/m \\to 0$, a very large hanging mass) is $1/g \\approx 0.102$ s²/m: the acceleration approaches $g$. The best-fit intercept is about 0.11 s²/m, close to $1/g$, so the data agree with the model.',
      },
    ],
  },

  // =========================================================================
  // QQT 1 — Maximum speed on a flat curve (Unit 2)
  // =========================================================================
  {
    id: 'phys1-frq-qqt-1',
    type: 'qqt',
    unit: 2,
    title: 'Qualitative/Quantitative Translation: Rounding a Flat Curve',
    prompt:
      'Car 1, of mass $m$, travels around a flat, horizontal circular curve of radius $r$. The coefficient of static friction between its tires and the road is $\\mu_s$. Car 2 has mass $2m$, identical tires, and travels around the same curve. Air resistance is negligible.',
    totalPoints: 8,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the maximum speed at which car 2 can round the curve without sliding is greater than, less than, or equal to the maximum speed for car 1. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the maximum speeds are equal.',
            keywords: ['equal', 'same maximum speed', 'the same', 'same speed'],
          },
          {
            points: 1,
            description:
              'Indicates that the maximum static friction force on car 2 is twice as large, because the normal force (equal to the weight on a flat road) is twice as large.',
            keywords: ['normal force', 'twice the friction', 'twice as much friction', 'friction doubles'],
          },
          {
            points: 1,
            description:
              'Indicates that car 2 also needs twice the net (centripetal) force to follow the same circle at the same speed, so the effects cancel.',
            keywords: ['twice the centripetal', 'twice the net force', 'needs twice', 'requires twice', 'cancel'],
          },
        ],
        sampleAnswer:
          'The maximum speeds are equal. Static friction is the only horizontal force, so it supplies the centripetal force. Car 2 has twice the weight, so the road pushes up with twice the normal force, and the maximum static friction is twice as large. But car 2 also has twice the mass, so it needs twice the centripetal force to travel the same circle at the same speed. The extra available friction exactly matches the extra required force.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the maximum speed $v_{max}$ at which a car can round the curve without sliding, in terms of $\\mu_s$, $r$, $g$, and the car\u2019s mass $M$ as needed.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Newton\u2019s second law in the radial direction with friction as the net force: $f_s = Mv^2/r$.',
            keywords: ['mv^2/r', 'mv²/r', 'centripetal'],
          },
          {
            points: 1,
            description: 'Maximum static friction with the normal force equal to the weight: $f_{s,max} = \\mu_s Mg$.',
            keywords: ['μmg', 'μ_s mg', 'mu mg', 'mu_s mg', 'μsmg', 'μs mg'],
          },
          {
            points: 1,
            description: 'Correct expression: $v_{max} = \\sqrt{\\mu_s g r}$.',
            keywords: ['sqrt(μ', 'sqrt(mu', '√(μ', 'sqrt(μsgr', '√μ'],
          },
        ],
        sampleAnswer:
          'Radially: $f_s = \\dfrac{Mv^2}{r}$. Vertically: $F_N = Mg$.\n\nAt the maximum speed, $f_s = \\mu_s F_N = \\mu_s Mg$:\n\n$\\mu_s Mg = \\dfrac{Mv_{max}^2}{r} \\Rightarrow v_{max} = \\sqrt{\\mu_s g r}$.',
      },
      {
        label: '(c)',
        prompt:
          'Explain how your expression from part (b) is or is not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional-dependence language about the derived expression: $v_{max}$ does not depend on (is independent of) the mass, because mass appears on both sides and cancels.',
            keywords: ['independent of mass', 'does not depend on mass', 'does not depend on the mass', 'mass cancels', 'no mass'],
          },
          {
            points: 1,
            description:
              'Connects to part (a): the cancellation matches the reasoning that doubling the mass doubles both the available friction and the required centripetal force, so the expression is consistent with "equal".',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'The expression $v_{max} = \\sqrt{\\mu_s g r}$ does not depend on the car\u2019s mass: $M$ appears in both the friction force and the required centripetal force and cancels. That is consistent with part (a), where I reasoned that doubling the mass doubles both forces, so both cars have the same maximum speed.',
      },
    ],
  },

  // =========================================================================
  // QQT 2 — Rolling race down an incline (Units 6 and 3)
  // =========================================================================
  {
    id: 'phys1-frq-qqt-2',
    type: 'qqt',
    unit: 6,
    title: 'Qualitative/Quantitative Translation: Rolling Race Down a Ramp',
    prompt:
      'A solid sphere and a thin-walled hoop have the same mass $M$ and the same radius $R$. Both are released from rest at the same height $h$ on the same ramp and roll without slipping to the bottom. The rotational inertia of each object about its center can be written $I = \\beta MR^2$, where $\\beta = \\tfrac{2}{5}$ for the sphere and $\\beta = 1$ for the hoop. Air resistance is negligible.',
    totalPoints: 8,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate which object has the greater translational speed at the bottom of the ramp, or whether the speeds are equal. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the sphere is faster at the bottom.',
            keywords: ['sphere is faster', 'sphere has the greater', 'sphere has a greater', 'sphere moves faster', 'sphere reaches', 'hoop is slower'],
          },
          {
            points: 1,
            description:
              'Indicates that both objects convert the same gravitational potential energy (same mass and height) into kinetic energy.',
            keywords: ['same potential energy', 'same gravitational potential', 'same total kinetic', 'same energy'],
          },
          {
            points: 1,
            description:
              'Indicates that the hoop\u2019s larger rotational inertia means a larger share of its kinetic energy is rotational, leaving less translational kinetic energy.',
            keywords: ['larger rotational inertia', 'greater rotational inertia', 'more rotational', 'more of its energy', 'less translational'],
          },
        ],
        sampleAnswer:
          'The sphere is faster at the bottom. Both objects have the same mass and drop the same height, so each converts the same gravitational potential energy into kinetic energy. Rolling objects split that energy between translation and rotation. The hoop has all of its mass at the rim, so it has the larger rotational inertia and a larger fraction of its energy goes into rotation, leaving less translational kinetic energy and a smaller speed.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the translational speed $v$ of an object at the bottom of the ramp in terms of $\\beta$, $g$, and $h$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Conservation of energy including both translational and rotational kinetic energy: $Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}I\\omega^2$.',
            keywords: ['1/2 iω', '1/2iω', '1/2 i omega', 'rotational kinetic', 'mgh ='],
          },
          {
            points: 1,
            description: 'Uses $I = \\beta MR^2$ and the rolling condition $v = \\omega R$.',
            keywords: ['v = ωr', 'v = omega r', 'v = rω', 'ω = v/r', 'without slipping'],
          },
          {
            points: 1,
            description: 'Correct expression: $v = \\sqrt{\\dfrac{2gh}{1 + \\beta}}$.',
            keywords: ['2gh/(1 + β)', '2gh/(1+β)', '2gh/(1 + beta)', '2gh/(1+beta)'],
          },
        ],
        sampleAnswer:
          'Energy is conserved (static friction does no work when there is no slipping):\n\n$Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}(\\beta MR^2)\\omega^2$, with $\\omega = v/R$:\n\n$Mgh = \\tfrac{1}{2}Mv^2(1 + \\beta) \\Rightarrow v = \\sqrt{\\dfrac{2gh}{1 + \\beta}}$.',
      },
      {
        label: '(c)',
        prompt:
          'Explain how your expression from part (b) is or is not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses functional dependence: $\\beta$ is in the denominator, so a larger $\\beta$ (larger rotational inertia) gives a smaller speed; the mass and radius cancel.',
            keywords: ['denominator', 'inversely', 'larger β', 'larger beta', 'as β increases', 'as beta increases'],
          },
          {
            points: 1,
            description:
              'Connects to part (a): the hoop ($\\beta = 1$, $v = \\sqrt{gh}$) is slower than the sphere ($\\beta = 2/5$, $v = \\sqrt{10gh/7}$), consistent with the claim that the sphere is faster.',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'In $v = \\sqrt{2gh/(1 + \\beta)}$, $\\beta$ is in the denominator, so a larger $\\beta$ means a smaller speed. The hoop ($\\beta = 1$) reaches $v = \\sqrt{gh}$ and the sphere ($\\beta = 2/5$) reaches $v = \\sqrt{10gh/7} \\approx 1.2\\sqrt{gh}$. The sphere is faster, consistent with part (a). The mass and radius cancel, so the result depends only on how the mass is distributed.',
      },
    ],
  },
]

// ============================================================================
// Accessor functions
// ============================================================================

export function getPhysics1FRQs(): Physics1FRQ[] {
  return physics1FRQs
}

export function getPhysics1FRQsByType(type: Physics1FRQType): Physics1FRQ[] {
  return physics1FRQs.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (MR, TBR, LAB, QQT): 40 points in 95 minutes. */
export function generateFullExamFRQs(): {
  questions: Physics1FRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = PHYSICS1_FRQ_TYPES.map(({ type }) => shuffleArray(getPhysics1FRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 95,
  }
}
