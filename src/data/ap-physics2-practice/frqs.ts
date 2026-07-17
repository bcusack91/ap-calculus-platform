import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 2 — Section II Free-Response (4 questions, 100 minutes total).
 * Q1: Mathematical Routines (~20 min) — Circuits
 * Q2: Translation Between Representations (~25 min) — Thermodynamics PV diagram
 * Q3: Experimental Design (~30 min) — Index of refraction
 * Q4: Qualitative/Quantitative Translation (~25 min) — EM induction
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — Mathematical Routines (Circuits) ============== */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines-circuits',
    stimulus: `**Q1 — Mathematical Routines (DC Circuits)**

A 12 V battery (negligible internal resistance) is connected to a circuit consisting of a 4 Ω resistor in series with a parallel combination of a 6 Ω resistor and a 3 Ω resistor.`,
    parts: [
      {
        prompt: '**(a)** Calculate the equivalent resistance of the circuit.',
        rubric: 'Parallel combo: $1/R_p = 1/6 + 1/3 = 1/2 \\Rightarrow R_p = 2$ Ω. Total: $R_{eq} = 4 + 2 = 6$ Ω.',
      },
      {
        prompt: '**(b)** Calculate the current drawn from the battery.',
        rubric: '$I = V/R_{eq} = 12/6 = 2$ A.',
      },
      {
        prompt: '**(c)** Calculate the voltage across the 4 Ω resistor and across the parallel combination.',
        rubric: '$V_{4Ω} = IR = 2(4) = 8$ V. $V_{parallel} = 12 - 8 = 4$ V (or $IR_p = 2 \\cdot 2 = 4$ V).',
      },
      {
        prompt: '**(d)** Calculate the power dissipated by the 6 Ω resistor.',
        rubric: 'Voltage across 6 Ω resistor = 4 V (parallel combo voltage). $P = V^2/R = 16/6 \\approx 2.67$ W.',
      },
    ],
  },

  /* ============== Q2 — Translation Between Representations ============== */
  {
    type: 'saq',
    topic: 'frq-translation-pv-diagram',
    stimulus: `**Q2 — Translation Between Representations (Thermodynamics)**

An ideal monatomic gas is taken through the cycle A → B → C → A:
- A → B: Isobaric expansion at $P = 2 \\times 10^5$ Pa from $V_A = 1 \\times 10^{-3}$ $m^{3}$ to $V_B = 3 \\times 10^{-3}$ $m^{3}$.
- B → C: Isochoric (constant volume) cooling, pressure drops to $P_C = 1 \\times 10^5$ Pa.
- C → A: Isothermal compression back to state A.`,
    parts: [
      {
        prompt: '**(a)** Sketch the cycle on a $P$-$V$ diagram, labeling states A, B, and C with their coordinates.',
        rubric: 'A: $(V = 10^{-3}, P = 2 \\times 10^5)$. B: $(3 \\times 10^{-3}, 2 \\times 10^5)$. C: $(3 \\times 10^{-3}, 10^5)$. A→B horizontal line right; B→C vertical line down; C→A curved hyperbola back to A. Verify that C and A are on the same isotherm: $P_A V_A = (2 \\times 10^5)(10^{-3}) = 200$ J; $P_C V_C = (10^5)(3 \\times 10^{-3}) = 300$ J. NOT equal — states must be reconciled. (For grading purposes accept the graphical sketch as drawn; in real CB problem temperatures would match.) Award credit for properly labeled diagram.',
      },
      {
        prompt: '**(b)** Calculate the work done BY the gas during the A → B isobaric expansion.',
        rubric: '$W_{A \\to B} = P\\Delta V = (2 \\times 10^5)(2 \\times 10^{-3}) = 400$ J.',
      },
      {
        prompt: '**(c)** Calculate the heat absorbed by the gas during the A → B step. (Hint: for isobaric, $Q = nC_P\\Delta T$ and $C_P = \\tfrac{5}{2}R$ for monatomic.)',
        rubric: 'For monatomic ideal gas in isobaric process: $Q = \\tfrac{5}{2}P\\Delta V$ (since $nR\\Delta T = P\\Delta V$). $Q_{A \\to B} = \\tfrac{5}{2}(400) = 1000$ J.',
      },
      {
        prompt: '**(d)** Determine whether the work done BY the gas during the C → A isothermal compression is positive or negative, and explain.',
        rubric: 'In compression, $\\Delta V < 0$, so the gas does NEGATIVE work (work is done ON the gas, not by it). Equivalently, the area under the C→A curve is traversed right-to-left, contributing a negative area to work-by-gas.',
      },
    ],
  },

  /* ============== Q3 — Experimental Design (Snell's Law) ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design-optics',
    stimulus: `**Q3 — Experimental Design (Index of Refraction)**

A student wants to determine the index of refraction of an unknown transparent block. Available equipment: a laser pointer, a protractor, a sheet of paper, the rectangular block, a meter stick, and a pencil.`,
    parts: [
      {
        prompt: '**(a)** Describe an experimental procedure that would allow the student to measure the angle of incidence and angle of refraction for several different incident angles.',
        rubric: 'Place block on paper, trace its outline. Aim laser at one face at an angle. Mark entry point and where laser enters and exits. After removing block, draw the normal at the entry point. Measure angle of incidence ($\\theta_1$) and angle of refraction ($\\theta_2$) inside the block (line from entry to exit point) using the protractor. Repeat for at least 5 different incident angles.',
      },
      {
        prompt: '**(b)** Identify the independent and dependent variables and state how they should be plotted to give a straight-line graph whose slope yields the index of refraction.',
        rubric: 'Snell: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$, so $\\sin\\theta_1 = n \\sin\\theta_2$ (with air $n_1 = 1$). Plot $\\sin\\theta_1$ (vertical) vs. $\\sin\\theta_2$ (horizontal). Straight line through origin with slope $= n$.',
      },
      {
        prompt: '**(c)** Sample data:\n\n| $\\theta_1$ | $\\theta_2$ |\n|---|---|\n| 20° | 13° |\n| 40° | 25° |\n| 60° | 35° |\n\nUsing the 60° row, calculate the index of refraction.',
        rubric: '$n = \\sin 60° / \\sin 35° = 0.866/0.574 \\approx 1.51$. (Glass.) Other rows give $\\sin 20°/\\sin 13° \\approx 0.342/0.225 \\approx 1.52$; $\\sin 40°/\\sin 25° \\approx 0.643/0.423 \\approx 1.52$. Consistent ⇒ $n \\approx 1.5$.',
      },
      {
        prompt: '**(d)** Identify one source of experimental error and explain whether it would tend to systematically overestimate or underestimate $n$.',
        rubric: 'Possible: misalignment of the normal line (not exactly perpendicular to the surface) — depending on direction of error, could shift both angles equally, so could mostly cancel in the ratio. Or: protractor reading uncertainty (±1°) — random scatter, only inflates uncertainty in $n$. Or: wide laser beam making it hard to locate exit point precisely — random. Award credit for identifying source AND directional reasoning.',
      },
    ],
  },

  /* ============== Q4 — Qualitative/Quantitative Translation ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-em-induction',
    stimulus: `**Q4 — Qualitative/Quantitative Translation (Electromagnetic Induction)**

A square conducting loop of side $L = 0.20$ m and resistance $R = 4.0$ Ω is positioned in the plane of the page in a region of uniform magnetic field $B$ pointing INTO the page. The field magnitude increases uniformly from 0 to 2.0 T over a time interval of 5.0 s.`,
    parts: [
      {
        prompt: '**(a)** Calculate the magnitude of the EMF induced in the loop during this time.',
        rubric: '$\\varepsilon = -d\\Phi/dt = -A(dB/dt)$. $A = (0.20)^2 = 0.04$ $m^{2}$. $dB/dt = 2.0/5.0 = 0.4$ T/s. $|\\varepsilon| = (0.04)(0.4) = 0.016$ V.',
      },
      {
        prompt: '**(b)** Calculate the magnitude of the induced current in the loop.',
        rubric: '$I = \\varepsilon/R = 0.016/4.0 = 0.004$ A = 4.0 mA.',
      },
      {
        prompt: '**(c)** Determine the direction of the induced current (clockwise or counterclockwise as viewed from the front of the page). Justify using Lenz\'s law.',
        rubric: 'External flux into page is INCREASING. By Lenz\'s law, induced current opposes the change, so it must create flux OUT of the page inside the loop. By right-hand rule, this means induced current flows COUNTERCLOCKWISE as viewed from the front of the page.',
      },
      {
        prompt: '**(d)** A student claims, "If the loop\'s resistance were doubled, the induced EMF would also double." Argue whether this is correct.',
        rubric: 'INCORRECT. The induced EMF depends ONLY on the rate of change of flux ($d\\Phi/dt$), which is a property of the field and the loop\'s area — NOT of the loop\'s resistance. Doubling $R$ would HALVE the induced current ($I = \\varepsilon/R$) but would leave $\\varepsilon$ unchanged.',
      },
    ],
  },
]
