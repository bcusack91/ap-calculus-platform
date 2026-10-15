import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 2 — Section II Free-Response (4 questions, 100 minutes total, 40 points).
 * Q1: Mathematical Routines (~20 min) — Circuits — 10 points
 * Q2: Translation Between Representations (~25 min) — Thermodynamics PV diagram — 12 points
 * Q3: Experimental Design (~30 min) — Index of refraction — 10 points
 * Q4: Qualitative/Quantitative Translation (~25 min) — EM induction — 8 points
 * Each rubric line is one point.
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — Mathematical Routines (Circuits) ============== */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines-circuits',
    stimulus: `**Q1 — Mathematical Routines (DC Circuits) (10 points)**

A 12 V battery (negligible internal resistance) is connected to a circuit consisting of a 4 Ω resistor in series with a parallel combination of a 6 Ω resistor and a 3 Ω resistor.`,
    parts: [
      {
        prompt: '**(a)** Calculate the equivalent resistance of the circuit.',
        rubric: [
          { id: 'a1', label: '1 pt — Parallel combination expression', description: '$\\dfrac{1}{R_p} = \\dfrac{1}{6} + \\dfrac{1}{3}$.' },
          { id: 'a2', label: '1 pt — Parallel resistance', description: '$R_p = 2$ Ω.' },
          { id: 'a3', label: '1 pt — Adds the series resistor', description: '$R_{eq} = 4 + 2 = 6$ Ω.' },
        ],
      },
      {
        prompt: '**(b)** Calculate the current drawn from the battery.',
        rubric: [
          { id: 'b1', label: '1 pt — Ohm\'s law for the whole circuit', description: '$I = \\varepsilon/R_{eq}$, using the equivalent resistance from part (a).' },
          { id: 'b2', label: '1 pt — Answer with units', description: '$I = 12/6 = 2$ A.' },
        ],
      },
      {
        prompt: '**(c)** Calculate the voltage across the 4 Ω resistor and across the parallel combination.',
        rubric: [
          { id: 'c1', label: '1 pt — Voltage across the 4 Ω resistor', description: 'All 2 A passes through it: $V_4 = IR = 2(4) = 8$ V.' },
          { id: 'c2', label: '1 pt — Voltage across the parallel combination', description: '$V_p = 12 - 8 = 4$ V (loop rule), or $IR_p = 2(2) = 4$ V.' },
        ],
      },
      {
        prompt: '**(d)** Calculate the power dissipated by the 6 Ω resistor.',
        rubric: [
          { id: 'd1', label: '1 pt — Voltage across the 6 Ω resistor', description: 'Parallel branches share the same potential difference, so the 6 Ω resistor has 4 V across it.' },
          { id: 'd2', label: '1 pt — Power expression', description: '$P = V^2/R$, or $P = I^2R$ with $I_6 = 4/6 \\approx 0.67$ A.' },
          { id: 'd3', label: '1 pt — Answer with units', description: '$P = 16/6 \\approx 2.67$ W.' },
        ],
      },
    ],
  },

  /* ============== Q2 — Translation Between Representations ============== */
  {
    type: 'saq',
    topic: 'frq-translation-pv-diagram',
    stimulus: `**Q2 — Translation Between Representations (Thermodynamics) (12 points)**

An ideal monatomic gas is taken through the cycle A → B → C → A:
- A → B: Isobaric expansion at $P = 2 \\times 10^5$ Pa from $V_A = 1 \\times 10^{-3}$ $m^{3}$ to $V_B = 3 \\times 10^{-3}$ $m^{3}$.
- B → C: Isochoric (constant volume) cooling, pressure drops to $P_C = \\tfrac{2}{3} \\times 10^5$ Pa $\\approx 6.7 \\times 10^4$ Pa.
- C → A: Isothermal compression back to state A.`,
    parts: [
      {
        prompt: '**(a)** Sketch the cycle on a $P$-$V$ diagram, labeling states A, B, and C with their coordinates.',
        rubric: [
          { id: 'a1', label: '1 pt — A → B', description: 'Horizontal line at $P = 2 \\times 10^5$ Pa from A $(1 \\times 10^{-3}$ $m^{3}$, $2 \\times 10^5$ Pa$)$ to B $(3 \\times 10^{-3}$ $m^{3}$, $2 \\times 10^5$ Pa$)$, both labeled.' },
          { id: 'a2', label: '1 pt — B → C', description: 'Vertical line down at $V = 3 \\times 10^{-3}$ $m^{3}$ to C $(3 \\times 10^{-3}$ $m^{3}$, $\\tfrac{2}{3} \\times 10^5$ Pa$)$, labeled.' },
          { id: 'a3', label: '1 pt — C → A', description: 'A curve (concave up, like a hyperbola $PV$ = constant) from C back up to A, not a straight line.' },
          { id: 'a4', label: '1 pt — Direction of the cycle', description: 'Arrows show A → B → C → A (clockwise). A and C lie on one isotherm: $P_AV_A = P_CV_C = 200$ J.' },
        ],
      },
      {
        prompt: '**(b)** Calculate the work done BY the gas during the A → B isobaric expansion.',
        rubric: [
          { id: 'b1', label: '1 pt — Work expression', description: 'Work by the gas $= P\\Delta V$ (the area under the horizontal A → B line); equivalently, the work done ON the gas is $W = -P\\Delta V$.' },
          { id: 'b2', label: '1 pt — Answer with units', description: '$(2 \\times 10^5)(2 \\times 10^{-3}) = 400$ J by the gas (so $W = -400$ J on the gas).' },
        ],
      },
      {
        prompt: '**(c)** Calculate the energy transferred to the gas by heating during the A → B step. (For a monatomic ideal gas, $U = \\tfrac{3}{2}nRT$.)',
        rubric: [
          { id: 'c1', label: '1 pt — Relates $nR\\Delta T$ to $P\\Delta V$', description: 'At constant pressure the ideal gas law gives $nR\\Delta T = P\\Delta V = 400$ J.' },
          { id: 'c2', label: '1 pt — First law', description: '$\\Delta U = \\tfrac{3}{2}nR\\Delta T = \\tfrac{3}{2}P\\Delta V = 600$ J, and $Q = \\Delta U - W$ with $W = -400$ J on the gas.' },
          { id: 'c3', label: '1 pt — Answer with units', description: '$Q_{A \\to B} = 1000$ J.' },
        ],
      },
      {
        prompt: '**(d)** Determine whether the work done BY the gas during the C → A isothermal compression is positive or negative, and explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Negative', description: 'The work done by the gas during C → A is negative.' },
          { id: 'd2', label: '1 pt — Volume reasoning', description: 'The gas is compressed ($\\Delta V < 0$), so work is done on the gas rather than by it ($W$ on the gas is positive).' },
          { id: 'd3', label: '1 pt — Connects to the P-V diagram', description: 'The C → A path runs right to left, so the area under it counts as negative work by the gas.' },
        ],
      },
    ],
  },

  /* ============== Q3 — Experimental Design (Snell's Law) ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design-optics',
    stimulus: `**Q3 — Experimental Design (Index of Refraction) (10 points)**

A student wants to determine the index of refraction of an unknown transparent block. Available equipment: a laser pointer, a protractor, a sheet of paper, the rectangular block, a meter stick, and a pencil.`,
    parts: [
      {
        prompt: '**(a)** Describe an experimental procedure that would allow the student to measure the angle of incidence and angle of refraction for several different incident angles.',
        rubric: [
          { id: 'a1', label: '1 pt — Records the ray paths', description: 'Places the block on the paper and traces its outline; aims the laser at one face at an angle and marks where the beam enters and exits the block.' },
          { id: 'a2', label: '1 pt — Measures both angles from the normal', description: 'After removing the block, draws the normal at the entry point and uses the protractor to measure $\\theta_1$ (incident ray to normal) and $\\theta_2$ (line from entry to exit point, to the normal).' },
          { id: 'a3', label: '1 pt — Reduces uncertainty', description: 'Repeats for at least 5 different angles of incidence.' },
        ],
      },
      {
        prompt: '**(b)** Identify the independent and dependent variables and state how they should be plotted to give a straight-line graph whose slope yields the index of refraction.',
        rubric: [
          { id: 'b1', label: '1 pt — Variables', description: 'Independent: angle of incidence $\\theta_1$. Dependent: angle of refraction $\\theta_2$.' },
          { id: 'b2', label: '1 pt — Linearized quantities', description: 'Plot $\\sin\\theta_1$ (vertical) vs. $\\sin\\theta_2$ (horizontal).' },
          { id: 'b3', label: '1 pt — Slope is $n$, from Snell\'s law', description: 'With $n_{air} = 1$, $\\sin\\theta_1 = n\\sin\\theta_2$, so the line passes through the origin with slope $n$ (or slope $1/n$ if the axes are swapped).' },
        ],
      },
      {
        prompt: '**(c)** Sample data:\n\n| $\\theta_1$ | $\\theta_2$ |\n|---|---|\n| 20° | 13° |\n| 40° | 25° |\n| 60° | 35° |\n\nUsing the 60° row, calculate the index of refraction.',
        rubric: [
          { id: 'c1', label: '1 pt — Snell\'s law with the 60° row', description: '$n = \\dfrac{\\sin 60°}{\\sin 35°} = \\dfrac{0.866}{0.574}$.' },
          { id: 'c2', label: '1 pt — Answer', description: '$n \\approx 1.51$ (the other rows give about 1.52, consistent with glass).' },
        ],
      },
      {
        prompt: '**(d)** Identify one source of experimental error and explain whether it would tend to systematically overestimate or underestimate $n$.',
        rubric: [
          { id: 'd1', label: '1 pt — A plausible systematic source of error', description: 'For example: the normal line is drawn slightly tilted rather than perpendicular to the face of the block.' },
          { id: 'd2', label: '1 pt — Direction of the effect, with reasoning', description: 'For example: if the drawn normal is rotated away from both rays, both measured angles are too large by the same amount; because $\\theta_2 < \\theta_1$, $\\sin\\theta_2$ increases by a larger fraction than $\\sin\\theta_1$, so $n$ is underestimated (rotated the other way, $n$ is overestimated). A purely random error such as protractor reading only adds scatter and does not earn this point without a directional argument.' },
        ],
      },
    ],
  },

  /* ============== Q4 — Qualitative/Quantitative Translation ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-em-induction',
    stimulus: `**Q4 — Qualitative/Quantitative Translation (Electromagnetic Induction) (8 points)**

A square conducting loop of side $L = 0.20$ m and resistance $R = 4.0$ Ω is positioned in the plane of the page in a region of uniform magnetic field $B$ pointing INTO the page. The field magnitude increases uniformly from 0 to 2.0 T over a time interval of 5.0 s.`,
    parts: [
      {
        prompt: '**(a)** Calculate the magnitude of the EMF induced in the loop during this time.',
        rubric: [
          { id: 'a1', label: '1 pt — Faraday\'s law expression', description: '$|\\varepsilon| = A\\dfrac{\\Delta B}{\\Delta t}$ with $A = (0.20)^2 = 0.04$ $m^{2}$ and $\\Delta B/\\Delta t = 0.4$ T/s.' },
          { id: 'a2', label: '1 pt — Answer with units', description: '$|\\varepsilon| = (0.04)(0.4) = 0.016$ V.' },
        ],
      },
      {
        prompt: '**(b)** Calculate the magnitude of the induced current in the loop.',
        rubric: [
          { id: 'b1', label: '1 pt — Answer with units', description: '$I = \\varepsilon/R = 0.016/4.0 = 0.004$ A $= 4.0$ mA.' },
        ],
      },
      {
        prompt: '**(c)** Determine the direction of the induced current (clockwise or counterclockwise as viewed from the front of the page). Justify using Lenz\'s law.',
        rubric: [
          { id: 'c1', label: '1 pt — Change in flux', description: 'The magnetic flux into the page through the loop is increasing.' },
          { id: 'c2', label: '1 pt — Lenz\'s law', description: 'The induced current opposes the change, so it produces a magnetic field out of the page inside the loop.' },
          { id: 'c3', label: '1 pt — Direction', description: 'By the right-hand rule, the induced current is counterclockwise as viewed from the front of the page.' },
        ],
      },
      {
        prompt: '**(d)** A student claims, "If the loop\'s resistance were doubled, the induced EMF would also double." Argue whether this is correct.',
        rubric: [
          { id: 'd1', label: '1 pt — Incorrect, with reason', description: 'The induced EMF depends only on the rate of change of magnetic flux (field change and loop area), not on the loop\'s resistance.' },
          { id: 'd2', label: '1 pt — Effect of doubling $R$', description: 'The EMF stays 0.016 V; the current $I = \\varepsilon/R$ is halved, to 2.0 mA.' },
        ],
      },
    ],
  },
]
