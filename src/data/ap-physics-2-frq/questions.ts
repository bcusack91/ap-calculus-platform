// AP Physics 2: Algebra-Based Free-Response Questions
// Built to the 2025+ exam: four typed FRQs per exam, 95 minutes, 40 points.
//   Mathematical Routines (MR) 10 · Translation Between Representations (TBR) 12
//   Experimental Design and Analysis (LAB) 10 · Qualitative/Quantitative Translation (QQT) 8
// Two questions per type (two complete exams). Units follow the 2024-25 CED:
// 9 Thermodynamics, 10 Electric Force, Field, and Potential, 11 Electric Circuits,
// 12 Magnetism and Electromagnetism, 13 Geometric Optics, 14 Waves, Sound, and
// Physical Optics, 15 Modern Physics. (Fluids moved to Physics 1 in 2024-25.)
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

export type Physics2FRQType = 'mr' | 'tbr' | 'lab' | 'qqt'

/** Exam order, labels, points, and suggested minutes for the four real FRQ types. */
export const PHYSICS2_FRQ_TYPES: { type: Physics2FRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'mr', label: 'Mathematical Routines', short: 'MR', points: 10, minutes: 20 },
  { type: 'tbr', label: 'Translation Between Representations', short: 'TBR', points: 12, minutes: 25 },
  { type: 'lab', label: 'Experimental Design and Analysis', short: 'LAB', points: 10, minutes: 30 },
  { type: 'qqt', label: 'Qualitative/Quantitative Translation', short: 'QQT', points: 8, minutes: 20 },
]

export interface Physics2FRQ {
  id: string
  type: Physics2FRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
  dataTableHtml?: string
}

const allQuestions: Physics2FRQ[] = [
  // =========================================================================
  // MR 1 — Field and potential of two point charges (Unit 10)
  // =========================================================================
  {
    id: 'phys2-frq-mr-1',
    type: 'mr',
    unit: 10,
    title: 'Mathematical Routines: Field and Potential of Two Point Charges',
    prompt:
      'Point charge $q_1 = +4.0\\ \\mu\\text{C}$ is fixed at $x = 0$ on the x-axis, and point charge $q_2 = -1.0\\ \\mu\\text{C}$ is fixed at $x = 0.30$ m. Point P is on the x-axis at $x = 0.10$ m. Use $k = 9.0 \\times 10^{9}$ N·m²/C², and take the electric potential to be zero infinitely far from both charges.',
    totalPoints: 10,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the magnitude and direction of the net electric field at point P.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Uses $E = k|q|/r^2$ for each charge with the correct distances (0.10 m from $q_1$, 0.20 m from $q_2$): $E_1 = 3.6 \\times 10^{6}$ N/C and $E_2 = 2.25 \\times 10^{5}$ N/C.',
            keywords: ['3.6 x 10^6', '3.6x10^6', '3.6×10^6', '3.6 × 10^6', '3.6e6', '2.25 x 10^5', '2.25x10^5', '2.25×10^5', '2.25 × 10^5', '2.25e5', '225,000', '3,600,000', '3600000'],
          },
          {
            points: 1,
            description:
              'Both fields point in the $+x$ direction at P (away from the positive $q_1$ and toward the negative $q_2$), so the magnitudes add.',
            keywords: ['both point', 'both in the +x', 'both +x', 'both to the right', 'same direction', 'magnitudes add'],
          },
          {
            points: 1,
            description: 'Correct answer: $E \\approx 3.8 \\times 10^{6}$ N/C in the $+x$ direction.',
            keywords: ['3.8 x 10^6', '3.8x10^6', '3.8×10^6', '3.8 × 10^6', '3.8e6', '3.825', '3.83', '3,825,000', '3,830,000'],
          },
        ],
        sampleAnswer:
          '$E_1 = \\dfrac{k q_1}{r_1^2} = \\dfrac{(9.0 \\times 10^{9})(4.0 \\times 10^{-6})}{(0.10)^2} = 3.6 \\times 10^{6}$ N/C, pointing away from $q_1$: $+x$.\n\n$E_2 = \\dfrac{k|q_2|}{r_2^2} = \\dfrac{(9.0 \\times 10^{9})(1.0 \\times 10^{-6})}{(0.20)^2} = 2.25 \\times 10^{5}$ N/C, pointing toward $q_2$: also $+x$.\n\n$E_{net} = 3.6 \\times 10^{6} + 0.225 \\times 10^{6} \\approx 3.8 \\times 10^{6}$ N/C in the $+x$ direction.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the electric potential at point P.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Adds the potentials as signed scalars: $V = kq_1/r_1 + kq_2/r_2$, including the negative sign of $q_2$.',
            keywords: ['scalar', 'kq1/r1 + kq2/r2', 'kq/r', 'negative sign'],
          },
          {
            points: 1,
            description: 'Correct answer: $V_P = 3.6 \\times 10^{5} - 4.5 \\times 10^{4} \\approx 3.2 \\times 10^{5}$ V.',
            keywords: ['3.15', '3.2 x 10^5', '3.2x10^5', '3.2×10^5', '3.2 × 10^5', '3.2e5', '315,000', '315000'],
          },
        ],
        sampleAnswer:
          '$V_P = k\\left(\\dfrac{q_1}{r_1} + \\dfrac{q_2}{r_2}\\right) = (9.0 \\times 10^{9})\\left(\\dfrac{4.0 \\times 10^{-6}}{0.10} + \\dfrac{-1.0 \\times 10^{-6}}{0.20}\\right)$\n\n$V_P = 3.6 \\times 10^{5} - 4.5 \\times 10^{4} = 3.15 \\times 10^{5}$ V.',
      },
      {
        label: '(c)',
        prompt:
          'There is one location on the x-axis (other than infinitely far away) where the net electric field is zero. Determine its position.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Identifies the region: to the right of $q_2$ ($x > 0.30$ m), because only outside the pair are the two fields opposite, and only on the side of the smaller-magnitude charge can their magnitudes be equal.',
            keywords: ['right of q2', 'right of q_2', 'x > 0.30', 'beyond q2', 'beyond q_2', 'smaller charge'],
          },
          {
            points: 1,
            description: 'Sets the magnitudes equal: $\\dfrac{k(4.0\\ \\mu\\text{C})}{x^2} = \\dfrac{k(1.0\\ \\mu\\text{C})}{(x - 0.30)^2}$.',
            keywords: ['(x - 0.30)', '(x-0.30)', '(x - 0.3)', '(x-0.3)', '2/x'],
          },
          {
            points: 1,
            description: 'Correct answer: $x = 0.60$ m.',
            keywords: ['0.60 m', '0.6 m', 'x = 0.60', 'x = 0.6'],
          },
        ],
        sampleAnswer:
          'Between the charges both fields point $+x$, so they cannot cancel. To the left of $q_1$ the fields are opposite, but every point there is closer to the larger charge, so $E_1 > E_2$. To the right of $q_2$ the fields are opposite and the point is closer to the smaller charge, so they can cancel.\n\n$\\dfrac{4.0}{x^2} = \\dfrac{1.0}{(x - 0.30)^2} \\Rightarrow \\dfrac{2}{x} = \\dfrac{1}{x - 0.30} \\Rightarrow 2x - 0.60 = x \\Rightarrow x = 0.60$ m.',
      },
      {
        label: '(d)',
        prompt:
          'A particle with charge $+2.0$ nC is moved from point P to a location very far from both fixed charges. Calculate the work done on the particle by the electric field of the two fixed charges during this move.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses $W = -\\Delta U = q(V_P - V_\\infty)$ with $V_\\infty = 0$.',
            keywords: ['w = qv', 'w = q(v', '-δu', 'q δv', 'qδv', 'change in potential energy'],
          },
          {
            points: 1,
            description: 'Correct answer: $W = (2.0 \\times 10^{-9})(3.15 \\times 10^{5}) \\approx 6.3 \\times 10^{-4}$ J (positive).',
            keywords: ['6.3 x 10^-4', '6.3x10^-4', '6.3×10^-4', '6.3 × 10^-4', '6.3e-4', '0.00063', '6.3 x 10-4'],
          },
        ],
        sampleAnswer:
          '$W_{field} = -\\Delta U = -q(V_\\infty - V_P) = qV_P = (2.0 \\times 10^{-9})(3.15 \\times 10^{5}) \\approx 6.3 \\times 10^{-4}$ J. The work is positive because the positive particle moves from high potential to zero potential. Because the electric field is conservative, this does not depend on the path taken.',
      },
    ],
  },

  // =========================================================================
  // MR 2 — Alpha decay of polonium-210 (Unit 15)
  // Replaces the old Co-60 item, which mixed atomic and nuclear masses.
  // =========================================================================
  {
    id: 'phys2-frq-mr-2',
    type: 'mr',
    unit: 15,
    title: 'Mathematical Routines: Alpha Decay of Polonium-210',
    prompt:
      'A polonium-210 nucleus at rest undergoes alpha decay into lead-206:\n\n${}^{210}_{84}\\text{Po} \\rightarrow {}^{206}_{82}\\text{Pb} + {}^{4}_{2}\\text{He}$\n\nThe **atomic** masses are: Po-210, 209.982874 u; Pb-206, 205.974465 u; He-4, 4.002603 u. Use $1\\text{ u} = 931.5$ MeV/c² $= 1.66 \\times 10^{-27}$ kg and $1\\text{ MeV} = 1.60 \\times 10^{-13}$ J. The half-life of Po-210 is 138 days. Treat all speeds as nonrelativistic.',
    totalPoints: 10,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt: 'Calculate the energy $Q$ released in one decay, in MeV.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Mass defect from the atomic masses: $\\Delta m = m_{Po} - m_{Pb} - m_{He}$. The electron masses cancel (84 electrons on each side), so no electron-mass correction is needed.',
            keywords: ['mass defect', 'δm', 'm_po - m_pb', 'electrons cancel', 'electron masses cancel'],
          },
          {
            points: 1,
            description: 'Correct mass defect: $\\Delta m = 0.005806$ u.',
            keywords: ['0.005806', '0.00581', '5.806'],
          },
          {
            points: 1,
            description: 'Correct energy: $Q = (0.005806)(931.5) \\approx 5.41$ MeV.',
            keywords: ['5.41', '5.408', '5.4 mev'],
          },
        ],
        sampleAnswer:
          '$\\Delta m = 209.982874 - 205.974465 - 4.002603 = 0.005806$ u. (Using atomic masses is correct here: the Po atom has 84 electrons, and the Pb and He atoms together also have $82 + 2 = 84$.)\n\n$Q = \\Delta m c^2 = (0.005806)(931.5) \\approx 5.41$ MeV.',
      },
      {
        label: '(b)',
        prompt:
          'Assume all of $Q$ becomes kinetic energy of the alpha particle and the lead nucleus. Use masses of 4.00 u and 206 u. Derive an expression for the alpha particle\u2019s kinetic energy $K_\\alpha$ in terms of $Q$, $m_\\alpha$, and $m_{Pb}$, and calculate its value.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description:
              'Momentum conservation: the parent is at rest, so the alpha particle and lead nucleus have momenta of equal magnitude in opposite directions.',
            keywords: ['equal and opposite', 'equal magnitude', 'momentum is conserved', 'conservation of momentum'],
          },
          {
            points: 1,
            description: 'Uses $K = p^2/(2m)$ so that $K_\\alpha/K_{Pb} = m_{Pb}/m_\\alpha$.',
            keywords: ['p^2/2m', 'p²/2m', 'p^2/(2m)', 'p²/(2m)', 'k_α/k_pb'],
          },
          {
            points: 1,
            description: 'Correct expression: $K_\\alpha = Q\\dfrac{m_{Pb}}{m_\\alpha + m_{Pb}}$.',
            keywords: ['/(m_α + m_pb)', '/(m_alpha + m_pb)', '206/210', 'q(m_pb', 'q m_pb'],
          },
          {
            points: 1,
            description: 'Correct value: $K_\\alpha \\approx 5.31$ MeV (the lead nucleus gets about 0.10 MeV).',
            keywords: ['5.31', '5.30', '5.3 mev'],
          },
        ],
        sampleAnswer:
          'The nucleus starts at rest, so $p_\\alpha = p_{Pb}$ in magnitude, opposite in direction. With $K = \\dfrac{p^2}{2m}$:\n\n$\\dfrac{K_\\alpha}{K_{Pb}} = \\dfrac{m_{Pb}}{m_\\alpha}$, and $K_\\alpha + K_{Pb} = Q$.\n\n$K_\\alpha = Q\\dfrac{m_{Pb}}{m_\\alpha + m_{Pb}} = (5.41)\\dfrac{206}{210} \\approx 5.31$ MeV. The lead nucleus recoils with about 0.10 MeV.',
      },
      {
        label: '(c)',
        prompt: 'Calculate the speed of the alpha particle.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Converts to SI and uses $K = \\tfrac{1}{2}mv^2$: $K_\\alpha = 8.5 \\times 10^{-13}$ J and $m_\\alpha = 6.64 \\times 10^{-27}$ kg.',
            keywords: ['8.5 x 10^-13', '8.5x10^-13', '8.5×10^-13', '8.5 × 10^-13', '8.5e-13', '8.49', '8.50', '6.64 x 10^-27', '6.64x10^-27', '6.64×10^-27', '6.64 × 10^-27', '6.64e-27'],
          },
          {
            points: 1,
            description: 'Correct answer: $v \\approx 1.6 \\times 10^{7}$ m/s.',
            keywords: ['1.6 x 10^7', '1.6x10^7', '1.6×10^7', '1.6 × 10^7', '1.6e7', '1.60 x 10^7', '1.60x10^7', '1.60×10^7', '1.60 × 10^7', '1.60e7', '16,000,000'],
          },
        ],
        sampleAnswer:
          '$K_\\alpha = (5.31)(1.60 \\times 10^{-13}) \\approx 8.5 \\times 10^{-13}$ J and $m_\\alpha = (4.00)(1.66 \\times 10^{-27}) = 6.64 \\times 10^{-27}$ kg.\n\n$v = \\sqrt{\\dfrac{2K_\\alpha}{m_\\alpha}} = \\sqrt{\\dfrac{2(8.5 \\times 10^{-13})}{6.64 \\times 10^{-27}}} \\approx 1.6 \\times 10^{7}$ m/s, about 5% of the speed of light, so the nonrelativistic treatment is reasonable.',
      },
      {
        label: '(d)',
        prompt:
          'A sample initially contains $N_0$ Po-210 nuclei. Determine the number of Po-210 nuclei remaining after 414 days.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: '414 days is three half-lives, so $N = N_0/8$.',
            keywords: ['n0/8', 'n_0/8', '1/8', 'one eighth', 'one-eighth', '12.5%'],
          },
        ],
        sampleAnswer:
          '$414/138 = 3$ half-lives, so $N = N_0\\left(\\tfrac{1}{2}\\right)^3 = N_0/8$.',
      },
    ],
  },

  // =========================================================================
  // TBR 1 — Ideal-gas cycle on a PV diagram (Unit 9)
  // =========================================================================
  {
    id: 'phys2-frq-tbr-1',
    type: 'tbr',
    unit: 9,
    title: 'Translation Between Representations: A Three-Step Gas Cycle',
    prompt:
      'A sample of ideal monatomic gas is taken through a cycle A → B → C → A.\n\n- **State A:** $P_A = 2.0 \\times 10^{5}$ Pa, $V_A = 1.0 \\times 10^{-3}$ m³.\n- **A → B:** the gas expands at constant pressure to $V_B = 3.0 \\times 10^{-3}$ m³.\n- **B → C:** the gas is cooled at constant volume until $P_C = 1.0 \\times 10^{5}$ Pa.\n- **C → A:** the gas returns to state A along a straight line on the PV diagram.\n\nFor a monatomic ideal gas, $U = \\tfrac{3}{2}nRT = \\tfrac{3}{2}PV$. Use the AP sign convention $\\Delta U = Q + W$, where $W$ is the work done **on** the gas.',
    totalPoints: 12,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe the cycle on a PV diagram (pressure on the vertical axis, volume on the horizontal axis): the shape of each process and the direction in which the cycle is traversed.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'A → B: horizontal line at $2.0 \\times 10^{5}$ Pa from $1.0 \\times 10^{-3}$ to $3.0 \\times 10^{-3}$ m³.',
            keywords: ['horizontal', 'constant pressure'],
          },
          {
            points: 1,
            description: 'B → C: vertical line at $3.0 \\times 10^{-3}$ m³ down to $1.0 \\times 10^{5}$ Pa.',
            keywords: ['vertical', 'straight down', 'constant volume'],
          },
          {
            points: 1,
            description: 'C → A: straight diagonal line back up to A; the cycle runs clockwise.',
            keywords: ['clockwise', 'diagonal'],
          },
        ],
        sampleAnswer:
          'A → B is a horizontal line at $P = 2.0 \\times 10^{5}$ Pa from $V = 1.0 \\times 10^{-3}$ m³ to $3.0 \\times 10^{-3}$ m³. B → C is a vertical line at $V = 3.0 \\times 10^{-3}$ m³ dropping to $1.0 \\times 10^{5}$ Pa. C → A is a straight diagonal line back up and to the left to A. The cycle forms a right triangle and is traversed clockwise.',
      },
      {
        label: '(b)',
        prompt:
          'For process A → B, calculate the work $W$ done on the gas, the change in internal energy $\\Delta U$, and the energy $Q$ transferred to the gas by heating.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Work done on the gas: $W = -P\\Delta V = -(2.0 \\times 10^{5})(2.0 \\times 10^{-3}) = -400$ J (or 400 J done by the gas).',
            keywords: ['-400 j', '−400 j', '400 j'],
          },
          {
            points: 1,
            description: 'Change in internal energy: $\\Delta U = \\tfrac{3}{2}(P_BV_B - P_AV_A) = \\tfrac{3}{2}(600 - 200) = 600$ J.',
            keywords: ['600 j', 'δu = 600'],
          },
          {
            points: 1,
            description: 'Applies the first law with consistent signs: $Q = \\Delta U - W$.',
            keywords: ['first law', 'q = δu - w', 'δu = q + w'],
          },
          {
            points: 1,
            description: 'Correct answer: $Q = 600 - (-400) = 1000$ J, transferred into the gas.',
            keywords: ['1000 j', '1,000 j', '1.0 x 10^3', '1.0x10^3', '1.0×10^3', '1.0 × 10^3', '1.0e3', '1 kj'],
          },
        ],
        sampleAnswer:
          '$W = -P\\Delta V = -(2.0 \\times 10^{5})(3.0 \\times 10^{-3} - 1.0 \\times 10^{-3}) = -400$ J (the gas does 400 J of work on its surroundings).\n\n$\\Delta U = \\tfrac{3}{2}(P_BV_B - P_AV_A) = \\tfrac{3}{2}(600 - 200) = 600$ J.\n\nFirst law: $Q = \\Delta U - W = 600 - (-400) = 1000$ J, so 1000 J enters the gas by heating.',
      },
      {
        label: '(c)',
        prompt:
          'For the complete cycle, determine the net work done on the gas and the net energy transferred to the gas by heating. Explain how you used the PV diagram.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'The magnitude of the net work is the area enclosed by the cycle, a triangle: $\\tfrac{1}{2}(2.0 \\times 10^{-3})(1.0 \\times 10^{5}) = 100$ J.',
            keywords: ['area', 'enclosed', 'triangle'],
          },
          {
            points: 1,
            description: 'Sign: the cycle is clockwise, so the gas does net positive work; the net work done on the gas is $-100$ J.',
            keywords: ['-100 j', '−100 j', 'clockwise'],
          },
          {
            points: 1,
            description: '$\\Delta U = 0$ over a complete cycle, so $Q_{net} = -W = +100$ J into the gas.',
            keywords: ['δu = 0', 'returns to', 'same state', '+100 j', '100 j into'],
          },
        ],
        sampleAnswer:
          'The net work equals the area enclosed by the cycle on the PV diagram, a right triangle with legs $2.0 \\times 10^{-3}$ m³ and $1.0 \\times 10^{5}$ Pa: $\\tfrac{1}{2}(2.0 \\times 10^{-3})(1.0 \\times 10^{5}) = 100$ J.\n\nThe cycle is clockwise, so the gas does more work expanding (A → B, at high pressure) than is done on it while being compressed (C → A). Net work done on the gas: $W = -100$ J.\n\nThe gas returns to state A, so $\\Delta U = 0$ and $Q_{net} = -W = +100$ J: a net 100 J enters the gas by heating.',
      },
      {
        label: '(d)',
        prompt:
          'Rank the temperatures $T_A$, $T_B$, and $T_C$ from highest to lowest. Justify the ranking using the PV diagram.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correct ranking: $T_B > T_C > T_A$.',
            keywords: ['tb > tc > ta', 't_b > t_c > t_a', 'b > c > a', 'b, c, a'],
          },
          {
            points: 1,
            description:
              'Justification: for a fixed amount of ideal gas $T \\propto PV$, and $PV$ = 600 J at B, 300 J at C, 200 J at A.',
            keywords: ['pv = nrt', 'proportional to pv', 't ∝ pv', '600', '300'],
          },
        ],
        sampleAnswer:
          'From $PV = nRT$ with $n$ fixed, $T \\propto PV$. $P_BV_B = 600$ J, $P_CV_C = (1.0 \\times 10^{5})(3.0 \\times 10^{-3}) = 300$ J, and $P_AV_A = 200$ J. So $T_B > T_C > T_A$.',
      },
    ],
  },

  // =========================================================================
  // TBR 2 — Converging lens: ray diagram, equation, graph (Unit 13)
  // =========================================================================
  {
    id: 'phys2-frq-tbr-2',
    type: 'tbr',
    unit: 13,
    title: 'Translation Between Representations: Images From a Converging Lens',
    prompt:
      'A thin converging lens has focal length $f = 10$ cm. An object 2.0 cm tall stands upright on the principal axis, 15 cm to the left of the lens. Use the convention that image distances are positive for real images on the opposite side of the lens.',
    totalPoints: 12,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a ray diagram that locates the image: trace two principal rays from the top of the object and describe where they meet and what kind of image forms.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'A ray parallel to the principal axis refracts through the focal point on the far (right) side of the lens.',
            keywords: ['parallel', 'through the focal point', 'through the far focal', 'through f'],
          },
          {
            points: 1,
            description: 'A ray through the center of the lens continues undeflected (or a ray through the near focal point exits parallel).',
            keywords: ['through the center', 'undeflected', 'straight through', 'exits parallel'],
          },
          {
            points: 1,
            description: 'The rays cross on the right side beyond $2f$, forming a real, inverted, enlarged image.',
            keywords: ['real', 'inverted', 'enlarged', 'magnified'],
          },
        ],
        sampleAnswer:
          'Ray 1 leaves the top of the object parallel to the axis and refracts through the focal point 10 cm to the right of the lens. Ray 2 passes through the center of the lens without bending. The two rays cross to the right of the lens, more than 20 cm away and below the axis, so the image is real, inverted, and larger than the object.',
      },
      {
        label: '(b)',
        prompt: 'Calculate the image distance and the image height, including sign.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Thin-lens equation: $\\dfrac{1}{s_o} + \\dfrac{1}{s_i} = \\dfrac{1}{f}$.',
            keywords: ['1/so + 1/si', '1/s_o + 1/s_i', '1/do + 1/di', '1/d_o + 1/d_i', 'thin lens', 'thin-lens'],
          },
          {
            points: 1,
            description: 'Image distance: $s_i = 30$ cm (real image, right of the lens).',
            keywords: ['30 cm', 's_i = 30', 'si = 30', 'di = 30'],
          },
          {
            points: 1,
            description: 'Magnification: $M = -s_i/s_o = -2.0$.',
            keywords: ['-2', '−2', 'm = -s', 'magnification'],
          },
          {
            points: 1,
            description: 'Image height: $h_i = -4.0$ cm (4.0 cm tall, inverted).',
            keywords: ['-4.0 cm', '-4 cm', '−4', '4.0 cm', '4 cm'],
          },
        ],
        sampleAnswer:
          '$\\dfrac{1}{s_i} = \\dfrac{1}{f} - \\dfrac{1}{s_o} = \\dfrac{1}{10} - \\dfrac{1}{15} = \\dfrac{1}{30}$, so $s_i = 30$ cm (real, to the right of the lens).\n\n$M = -\\dfrac{s_i}{s_o} = -\\dfrac{30}{15} = -2.0$, so $h_i = Mh_o = (-2.0)(2.0) = -4.0$ cm: 4.0 cm tall and inverted.',
      },
      {
        label: '(c)',
        prompt:
          'A student moves the object to many positions beyond the focal point and measures each image distance. Describe the graph of $1/s_i$ (vertical axis) versus $1/s_o$ (horizontal axis): its shape, slope, and intercepts. Locate the trial from part (b) on the graph.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'A straight line with slope $-1$.',
            keywords: ['slope of -1', 'slope -1', 'slope = -1', 'slope of −1', 'negative one'],
          },
          {
            points: 1,
            description: 'Both intercepts equal $1/f = 0.10$ cm⁻¹.',
            keywords: ['1/f', '0.10', '0.1 cm'],
          },
          {
            points: 1,
            description: 'The trial from part (b) is the point $(1/15, 1/30) \\approx (0.067, 0.033)$ cm⁻¹, which lies on the line.',
            keywords: ['0.067', '0.033', '1/15', '1/30'],
          },
        ],
        sampleAnswer:
          'Rearranging the thin-lens equation, $\\dfrac{1}{s_i} = -\\dfrac{1}{s_o} + \\dfrac{1}{f}$. The graph is a straight line with slope $-1$ and vertical intercept $1/f = 0.10$ cm⁻¹; its horizontal intercept is also 0.10 cm⁻¹. The trial from part (b) is the point $(1/15, 1/30) \\approx (0.067, 0.033)$ cm⁻¹, and $0.067 + 0.033 = 0.10$, so it lies on the line.',
      },
      {
        label: '(d)',
        prompt:
          'The object is moved to 5.0 cm from the lens. Describe the new image (location, orientation, and size) and justify your answer with a calculation or with your graph from part (c).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'The image is virtual and upright, on the same side as the object, and enlarged.',
            keywords: ['virtual', 'upright', 'same side'],
          },
          {
            points: 1,
            description:
              'Justification: $1/s_i = 1/10 - 1/5 = -1/10$, so $s_i = -10$ cm (negative means virtual), and $M = -s_i/s_o = +2.0$ (image 4.0 cm tall).',
            keywords: ['-10 cm', '−10 cm', 's_i = -10', 'si = -10', '+2', 'm = 2'],
          },
        ],
        sampleAnswer:
          '$\\dfrac{1}{s_i} = \\dfrac{1}{10} - \\dfrac{1}{5.0} = -\\dfrac{1}{10}$, so $s_i = -10$ cm. The negative image distance means the image is virtual, 10 cm from the lens on the same side as the object. $M = -s_i/s_o = -(-10)/5.0 = +2.0$, so the image is upright and 4.0 cm tall. (On the graph from part (c), $1/s_o = 0.20$ cm⁻¹ puts the line below the axis, a negative $1/s_i$.)',
      },
    ],
  },

  // =========================================================================
  // LAB 1 — Resistivity of a wire (Unit 11)
  // =========================================================================
  {
    id: 'phys2-frq-lab-1',
    type: 'lab',
    unit: 11,
    title: 'Experimental Design and Analysis: Resistivity of a Wire',
    prompt:
      'Students want to determine the resistivity $\\rho$ of the metal in a long, uniform wire of diameter 0.50 mm. They have the wire stretched along a meterstick, a variable power supply, an ammeter, a voltmeter, connecting leads, and a sliding clip that can make contact with the wire at any point.',
    totalPoints: 10,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Length L (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>Potential difference ΔV (V)</th><td>0.51</td><td>1.00</td><td>1.50</td><td>2.02</td><td>2.49</td></tr><tr><th>Current I (A)</th><td>0.50</td><td>0.49</td><td>0.49</td><td>0.50</td><td>0.49</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt:
          'Describe a procedure, including how the meters are connected, that the students could use to collect the data needed to find $\\rho$.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Connects the ammeter in series with the length of wire and the voltmeter in parallel across that length; records $\\Delta V$, $I$, and the length $L$ between the end and the clip.',
            keywords: ['series', 'parallel', 'across the wire', 'across the length'],
          },
          {
            points: 1,
            description: 'Varies the length using the sliding clip, collecting several lengths (and/or repeated trials).',
            keywords: ['different lengths', 'several lengths', 'vary the length', 'move the clip', 'repeat'],
          },
        ],
        sampleAnswer:
          '1. Connect the power supply, the ammeter, and the wire (from its fixed end to the sliding clip) in series. Connect the voltmeter in parallel across the same section of wire.\n2. Place the clip 0.20 m from the end, measuring the length with the meterstick. Turn on the supply and record the current and the potential difference.\n3. Move the clip to 0.40, 0.60, 0.80, and 1.00 m, recording $L$, $I$, and $\\Delta V$ each time. Keep the current small so the wire does not heat up.\n4. Repeat each length three times and average.',
      },
      {
        label: '(b)',
        prompt:
          'Explain how the data can be graphed to produce a straight line, and how $\\rho$ can be found from the slope.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Each resistance is found from $R = \\Delta V/I$.',
            keywords: ['r = v/i', 'r = δv/i', 'ohm'],
          },
          {
            points: 1,
            description:
              'Uses $R = \\rho L/A$: graph $R$ versus $L$, a straight line whose slope is $\\rho/A$, so $\\rho = \\text{slope} \\times A$ with $A = \\pi(d/2)^2$.',
            keywords: ['ρl/a', 'rho l/a', 'ρ/a', 'rho/a', 'slope × a', 'slope x a', 'slope times a'],
          },
        ],
        sampleAnswer:
          'Calculate $R = \\Delta V/I$ for each length. Since $R = \\dfrac{\\rho L}{A}$, a graph of $R$ (vertical) versus $L$ (horizontal) is a straight line through the origin with slope $\\rho/A$. Then $\\rho = \\text{slope} \\times A$, where $A = \\pi (d/2)^2$ is the wire\u2019s cross-sectional area.',
      },
      {
        label: '(c)',
        prompt:
          'The table shows the students\u2019 data. (i) Calculate the resistance for each length. (ii) Calculate the cross-sectional area of the wire. (iii) Describe the graph of $R$ versus $L$ and determine the slope of the best-fit line.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Resistances: about 1.02, 2.04, 3.06, 4.04, and 5.08 Ω.',
            keywords: ['1.02', '2.04', '3.06', '4.04', '5.08'],
          },
          {
            points: 1,
            description: 'Area: $A = \\pi(0.25 \\times 10^{-3}\\text{ m})^2 \\approx 1.96 \\times 10^{-7}$ m².',
            keywords: ['1.96', '1.963', '1.9635', '2.0 x 10^-7', '2.0x10^-7', '2.0×10^-7', '2.0 × 10^-7', '2.0e-7', '0.196'],
          },
          {
            points: 1,
            description: 'The points lie close to a straight line through (or very near) the origin with positive slope.',
            keywords: ['straight line', 'linear', 'through the origin', 'proportional'],
          },
          {
            points: 1,
            description: 'Slope of the best-fit line between 4.9 and 5.2 Ω/m (least-squares value 5.06 Ω/m).',
            keywords: ['5.06', '5.1', '5.0 ω/m', '5.0 ohm', '5.05', '5.08 ω/m', '5 ω/m'],
          },
        ],
        sampleAnswer:
          '(i) $R = \\Delta V/I$: 1.02, 2.04, 3.06, 4.04, 5.08 Ω.\n\n(ii) $A = \\pi\\left(\\dfrac{0.50 \\times 10^{-3}}{2}\\right)^2 = \\pi(2.5 \\times 10^{-4})^2 \\approx 1.96 \\times 10^{-7}$ m².\n\n(iii) Plotting $R$ (Ω) against $L$ (m) gives points that lie close to a straight line through the origin. A best-fit line through about $(0.10\\text{ m}, 0.52\\ \\Omega)$ and $(0.90\\text{ m}, 4.57\\ \\Omega)$ has slope $\\approx 4.05/0.80 \\approx 5.06$ Ω/m.',
      },
      {
        label: '(d)',
        prompt: 'Calculate the resistivity of the metal.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses $\\rho = \\text{slope} \\times A$.',
            keywords: ['slope × a', 'slope x a', 'slope times a', 'ρ = slope', 'rho = slope'],
          },
          {
            points: 1,
            description: 'Value between $9.5 \\times 10^{-7}$ and $1.05 \\times 10^{-6}$ Ω·m (about $1.0 \\times 10^{-6}$ Ω·m).',
            keywords: ['1.0 x 10^-6', '1.0x10^-6', '1.0×10^-6', '1.0 × 10^-6', '1.0e-6', '9.9 x 10^-7', '9.9x10^-7', '9.9×10^-7', '9.9 × 10^-7', '9.9e-7', '9.94', '1e-6'],
          },
        ],
        sampleAnswer:
          '$\\rho = \\text{slope} \\times A = (5.06\\ \\Omega/\\text{m})(1.96 \\times 10^{-7}\\text{ m}^2) \\approx 9.9 \\times 10^{-7}\\ \\Omega \\cdot \\text{m}$, about $1.0 \\times 10^{-6}$ Ω·m (close to nichrome).',
      },
    ],
  },

  // =========================================================================
  // LAB 2 — Speed of sound with a resonance tube (Unit 14)
  // =========================================================================
  {
    id: 'phys2-frq-lab-2',
    type: 'lab',
    unit: 14,
    title: 'Experimental Design and Analysis: Speed of Sound in a Resonance Tube',
    prompt:
      'Students want to measure the speed of sound in air. They have a set of tuning forks of known frequencies, a long vertical glass tube open at the top, a large container of water whose level inside the tube can be raised and lowered, and a meterstick. The water surface closes the bottom of the air column.',
    totalPoints: 10,
    timeRecommendation: '~30 minutes',
    calculatorAllowed: true,
    dataTableHtml:
      '<table><tr><th>Frequency f (Hz)</th><td>256</td><td>320</td><td>384</td><td>480</td><td>512</td></tr><tr><th>Shortest resonant length L (m)</th><td>0.327</td><td>0.258</td><td>0.215</td><td>0.169</td><td>0.159</td></tr></table>',
    parts: [
      {
        label: '(a)',
        prompt: 'Describe a procedure the students could use to collect the data in the table.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Holds a struck tuning fork over the open end, slowly changes the water level from the top down until the sound is loudest (resonance), and measures the length of the air column from the open end to the water surface.',
            keywords: ['loudest', 'resonance', 'water level', 'air column'],
          },
          {
            points: 1,
            description: 'Repeats with each tuning fork (and/or repeats each measurement and averages).',
            keywords: ['each tuning fork', 'each fork', 'different frequencies', 'repeat', 'average'],
          },
        ],
        sampleAnswer:
          '1. Start with the water level near the top of the tube.\n2. Strike a tuning fork and hold it just above the open end. Slowly lower the water level until the sound is loudest: the first resonance.\n3. Measure the air-column length $L$ from the top of the tube to the water surface.\n4. Repeat three times for this fork and average.\n5. Repeat for each of the other forks.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the shortest resonant length $L$ in terms of the speed of sound $v$ and the frequency $f$, ignoring any end effects.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'The tube is closed at one end: a displacement node at the water surface and an antinode at the open end, so the shortest resonance is one quarter wavelength, $L = \\lambda/4$.',
            keywords: ['λ/4', 'lambda/4', 'quarter', 'node at the water', 'antinode at the open'],
          },
          {
            points: 1,
            description: 'Uses $v = f\\lambda$: $L = \\dfrac{v}{4f}$.',
            keywords: ['v/4f', 'v/(4f)', 'l = v/4f'],
          },
        ],
        sampleAnswer:
          'The water surface is a displacement node and the open top is a displacement antinode. The shortest standing wave with a node at one end and an antinode at the other is a quarter wavelength: $L = \\lambda/4$. With $v = f\\lambda$, $L = \\dfrac{v}{4f}$.',
      },
      {
        label: '(c)',
        prompt:
          'Using the data in the table: (i) identify quantities that could be graphed to produce a straight line whose slope can be used to find $v$; (ii) calculate those quantities; (iii) determine the slope of the best-fit line.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Graph $L$ versus $1/f$ (or an equivalent linearization), since $L = \\dfrac{v}{4}\\cdot\\dfrac{1}{f}$.',
            keywords: ['1/f'],
          },
          {
            points: 1,
            description: 'Correct values of $1/f$: 0.00391, 0.00313, 0.00260, 0.00208, 0.00195 s.',
            keywords: ['0.0039', '0.00391', '0.00313', '0.0026', '0.00208', '0.00195', '3.91'],
          },
          {
            points: 1,
            description: 'Slope between about 83 and 89 m/s (least-squares value 86 m/s).',
            keywords: ['86', '85', '87', '84', '88'],
          },
        ],
        sampleAnswer:
          'Since $L = \\dfrac{v}{4}\\cdot\\dfrac{1}{f}$, graph $L$ (m) versus $1/f$ (s); the slope is $v/4$.\n\n$1/f$ (s): 0.00391, 0.00313, 0.00260, 0.00208, 0.00195\n\nThe points lie close to a straight line. A best-fit line through about $(0.0020\\text{ s}, 0.163\\text{ m})$ and $(0.0039\\text{ s}, 0.326\\text{ m})$ has slope $\\approx 0.163/0.0019 \\approx 86$ m/s.',
      },
      {
        label: '(d)',
        prompt: 'Use the slope to calculate the speed of sound.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Relates the slope to the speed: $\\text{slope} = v/4$, so $v = 4 \\times \\text{slope}$.',
            keywords: ['v = 4', '4 × slope', '4 x slope', '4 times the slope', 'slope = v/4'],
          },
          {
            points: 1,
            description: 'Value between 330 and 355 m/s (about 344 m/s).',
            keywords: ['344', '343', '340', '345', '346', '348', '350', '336'],
          },
        ],
        sampleAnswer:
          '$v = 4 \\times \\text{slope} = 4(86\\text{ m/s}) \\approx 344$ m/s.',
      },
      {
        label: '(e)',
        prompt:
          'The best-fit line does not pass through the origin; its vertical intercept is about $-0.01$ m. Explain a physical reason for this, and explain whether it affects the value of $v$ found from the slope.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'The antinode forms slightly above the open end (end correction), so the measured column is shorter than $\\lambda/4$ by a constant amount at every frequency; a constant offset shifts the intercept but not the slope, so $v$ is unaffected.',
            keywords: ['end correction', 'above the open end', 'beyond the open end', 'constant offset', 'does not affect the slope', 'slope is unaffected'],
          },
        ],
        sampleAnswer:
          'The displacement antinode forms slightly outside (above) the open end of the tube, so the effective air column is a little longer than the measured length: $L_{measured} = \\lambda/4 - c$ for a constant end correction $c$ of about 0.01 m. Subtracting the same constant at every frequency shifts the line down without changing its slope, so the value of $v$ from the slope is unaffected.',
      },
    ],
  },

  // =========================================================================
  // QQT 1 — Terminal voltage and internal resistance (Unit 11)
  // =========================================================================
  {
    id: 'phys2-frq-qqt-1',
    type: 'qqt',
    unit: 11,
    title: 'Qualitative/Quantitative Translation: Adding a Parallel Resistor to a Real Battery',
    prompt:
      'A battery has emf $\\varepsilon$ and internal resistance $r$. It is connected to a single resistor of resistance $R$. A voltmeter measures the terminal voltage $V_T$ of the battery (the potential difference across its terminals). A second resistor, also of resistance $R$, is then connected in parallel with the first.',
    totalPoints: 8,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the terminal voltage increases, decreases, or stays the same when the second resistor is added. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that the terminal voltage decreases.',
            keywords: ['decreases', 'decrease', 'drops', 'goes down'],
          },
          {
            points: 1,
            description: 'Adding a parallel branch lowers the equivalent external resistance, so the current through the battery increases.',
            keywords: ['equivalent resistance decreases', 'lower equivalent', 'smaller equivalent', 'current increases', 'more current'],
          },
          {
            points: 1,
            description:
              'A larger current means a larger potential drop across the internal resistance, so less of the emf appears across the terminals.',
            keywords: ['internal resistance', 'drop across the internal', 'potential drop inside'],
          },
        ],
        sampleAnswer:
          'The terminal voltage decreases. Adding a second resistor in parallel gives the current another path, which lowers the external equivalent resistance and increases the current through the battery. That current also passes through the battery\u2019s internal resistance, so the potential drop inside the battery grows, and less of the emf is left across the terminals.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the terminal voltage $V_T$ after the second resistor is added, in terms of $\\varepsilon$, $r$, and $R$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Loop rule (conservation of energy) around the circuit: $\\varepsilon - Ir - IR_{eq} = 0$.',
            keywords: ['loop rule', 'kirchhoff', 'ε - ir', 'emf - ir', 'ε − ir'],
          },
          {
            points: 1,
            description: 'Uses $R_{eq} = R/2$ for the two parallel resistors, giving $I = \\dfrac{\\varepsilon}{r + R/2}$.',
            keywords: ['r/2', 'r_eq = r/2', 'req = r/2'],
          },
          {
            points: 1,
            description: 'Correct expression: $V_T = IR_{eq} = \\dfrac{\\varepsilon R}{R + 2r}$.',
            keywords: ['εr/(r + 2r)', 'εr/(r+2r)', '(r + 2r)', '(r+2r)', '(2r + r)', '(2r+r)'],
          },
        ],
        sampleAnswer:
          'Loop rule: $\\varepsilon - Ir - IR_{eq} = 0$, with $R_{eq} = \\left(\\dfrac{1}{R} + \\dfrac{1}{R}\\right)^{-1} = \\dfrac{R}{2}$.\n\n$I = \\dfrac{\\varepsilon}{r + R/2}$, and $V_T = \\varepsilon - Ir = IR_{eq} = \\dfrac{\\varepsilon (R/2)}{r + R/2} = \\dfrac{\\varepsilon R}{R + 2r}$.',
      },
      {
        label: '(c)',
        prompt:
          'With only one resistor connected, $V_T = \\dfrac{\\varepsilon R}{R + r}$. Explain how your expression from part (b) is or is not consistent with your answer to part (a).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Compares the expressions using functional dependence: the numerators are the same and the denominator $R + 2r$ is larger than $R + r$, so $V_T$ is smaller.',
            keywords: ['denominator', 'larger denominator', 'r + 2r is larger', 'r + 2r > r + r'],
          },
          {
            points: 1,
            description: 'Connects to part (a): a smaller terminal voltage is consistent with the prediction that it decreases.',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'Both expressions have $\\varepsilon R$ in the numerator, but after the second resistor is added the denominator is $R + 2r$ instead of $R + r$. A larger denominator makes $V_T$ smaller, so the expression is consistent with my prediction in part (a) that the terminal voltage decreases. (If $r = 0$, both reduce to $\\varepsilon$, consistent with the reasoning that the decrease comes from the internal resistance.)',
      },
    ],
  },

  // =========================================================================
  // QQT 2 — A conducting loop falling out of a magnetic field (Unit 12)
  // =========================================================================
  {
    id: 'phys2-frq-qqt-2',
    type: 'qqt',
    unit: 12,
    title: 'Qualitative/Quantitative Translation: A Loop Falling Out of a Magnetic Field',
    prompt:
      'A rectangular loop of wire with mass $m$, resistance $R$, and horizontal width $L$ falls vertically in the plane of the page. Above a horizontal boundary there is a uniform magnetic field of magnitude $B$ directed into the page; below the boundary there is no field. The loop is tall enough that, while it falls through the boundary, its top side stays in the field and its bottom side is below the field. Air resistance is negligible. Loop 1 reaches a constant (terminal) speed while its top side is still in the field. Loop 2 is identical in size, shape, and mass but is made of wire with a greater resistance.',
    totalPoints: 8,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Indicate whether the terminal speed of loop 2 is greater than, less than, or equal to that of loop 1. Justify your answer without deriving or manipulating equations.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Indicates that loop 2 has the greater terminal speed.',
            keywords: ['greater', 'faster', 'larger terminal speed'],
          },
          {
            points: 1,
            description:
              'As the loop leaves the field, the magnetic flux through it decreases, inducing an emf; at a given speed the emf is the same for both loops, but the greater resistance means a smaller induced current in loop 2.',
            keywords: ['flux', 'induced current', 'smaller current', 'less current', 'faraday'],
          },
          {
            points: 1,
            description:
              'The upward magnetic force on the current in the top side is smaller for the same speed, so loop 2 must fall faster before the magnetic force balances its weight.',
            keywords: ['magnetic force', 'upward force', 'balances the weight', 'balance gravity', 'equals the weight', 'lenz'],
          },
        ],
        sampleAnswer:
          'Loop 2 has the greater terminal speed. As either loop falls out of the field, the flux through it decreases, so an emf is induced. At the same speed, both loops have the same emf, but loop 2 has more resistance, so less current flows in it. The magnetic force on the current in the top side points upward, opposing the motion (Lenz\u2019s law), and it is proportional to the current. To get an upward force large enough to balance its weight, loop 2 needs a larger current, which requires a larger emf and therefore a greater speed.',
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the terminal speed $v_T$ of a loop in terms of $m$, $g$, $R$, $B$, and $L$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Faraday\u2019s law for the moving side: $\\varepsilon = BLv$, so $I = BLv/R$.',
            keywords: ['blv', 'b l v', 'blv/r'],
          },
          {
            points: 1,
            description: 'Magnetic force on the top side: $F_B = ILB = \\dfrac{B^2L^2v}{R}$, directed upward.',
            keywords: ['ilb', 'i l b', 'b^2l^2v', 'b²l²v', 'b^2 l^2 v'],
          },
          {
            points: 1,
            description: 'At terminal speed the forces balance, $mg = \\dfrac{B^2L^2v_T}{R}$, giving $v_T = \\dfrac{mgR}{B^2L^2}$.',
            keywords: ['mgr/(b^2l^2)', 'mgr/b^2l^2', 'mgr/(b²l²)', 'mgr/b²l²', 'mgr/(b^2 l^2)'],
          },
        ],
        sampleAnswer:
          'Only the top side is in the field, so the flux changes at the rate $BLv$: $\\varepsilon = BLv$ and $I = \\dfrac{BLv}{R}$.\n\nForce on the top side: $F_B = ILB = \\dfrac{B^2L^2v}{R}$, upward.\n\nAt terminal speed the net force is zero: $mg = \\dfrac{B^2L^2v_T}{R}$, so $v_T = \\dfrac{mgR}{B^2L^2}$.',
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
              'Uses functional dependence: $v_T$ is directly proportional to $R$ ($R$ is in the numerator), so a larger resistance gives a larger terminal speed.',
            keywords: ['proportional to r', 'directly proportional', 'numerator', 'increases with r', 'as r increases'],
          },
          {
            points: 1,
            description: 'Connects to part (a): loop 2 (greater $R$) has the greater terminal speed, consistent with the prediction.',
            keywords: ['consistent', 'agrees', 'matches'],
          },
        ],
        sampleAnswer:
          'In $v_T = \\dfrac{mgR}{B^2L^2}$, $R$ is in the numerator, so $v_T$ is directly proportional to the resistance. Loop 2 has the greater resistance and the same $m$, $B$, and $L$, so it has the greater terminal speed, consistent with part (a).',
      },
    ],
  },
]

// ─── Export Functions ────────────────────────────────────────────────────────

export function getPhysics2FRQs(): Physics2FRQ[] {
  return allQuestions
}

export function getPhysics2FRQsByType(type: Physics2FRQType): Physics2FRQ[] {
  return allQuestions.filter((q) => q.type === type)
}

/** One FRQ of each real type, in exam order (MR, TBR, LAB, QQT): 40 points in 95 minutes. */
export function generateFullExamFRQs(): {
  questions: Physics2FRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = PHYSICS2_FRQ_TYPES.map(({ type }) => shuffleArray(getPhysics2FRQsByType(type))[0])
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: 95,
  }
}
