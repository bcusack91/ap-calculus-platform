import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics C: E&M — 4 FRQs in 2025+ format (40 points).
 * Section II: 100 minutes total. Calculator + equation sheet allowed.
 *
 *   Q1 Mathematical Routines (Gauss's law / fields) — 10 points
 *   Q2 Translation Between Representations (RC charging) — 12 points
 *   Q3 Experimental Design & Analysis (capacitance) — 10 points
 *   Q4 Qualitative/Quantitative Translation (Faraday/Lenz) — 8 points
 * Each rubric line is one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Math Routines — Gauss's law on a charged cylinder ---- */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**FRQ #1 — Mathematical Routines: Long Charged Insulating Cylinder (10 points)**

A long, solid, insulating cylinder of radius $R$ has uniform volume charge density $\\rho$. Use Gauss\'s law to derive the electric field everywhere.`,
    parts: [
      {
        prompt: '(a) Find the electric field magnitude $E(r)$ INSIDE the cylinder ($r < R$). Justify your choice of Gaussian surface.',
        rubric: [
          { id: 'a1', label: '1 pt — Gaussian surface with symmetry justification', description: 'A coaxial cylinder of radius $r$ and length $\\ell$: by cylindrical symmetry $\\vec E$ is radial and uniform on the curved side, and there is no flux through the end caps, so the flux is $E(2\\pi r\\ell)$.' },
          { id: 'a2', label: '1 pt — Enclosed charge', description: '$Q_{enc} = \\rho\\pi r^2\\ell$.' },
          { id: 'a3', label: '1 pt — Field inside', description: '$E(2\\pi r\\ell) = \\rho\\pi r^2\\ell/\\epsilon_0 \\Rightarrow E(r) = \\dfrac{\\rho r}{2\\epsilon_0}$.' },
        ],
      },
      {
        prompt: '(b) Find the electric field magnitude $E(r)$ OUTSIDE the cylinder ($r > R$).',
        rubric: [
          { id: 'b1', label: '1 pt — Enclosed charge', description: 'The whole cross-section is enclosed: $Q_{enc} = \\rho\\pi R^2\\ell$.' },
          { id: 'b2', label: '1 pt — Field outside', description: '$E(r) = \\dfrac{\\rho R^2}{2\\epsilon_0 r}$.' },
        ],
      },
      {
        prompt: '(c) Sketch $E(r)$ versus $r$ for $0 \\leq r \\leq 3R$. Label the value at $r = R$.',
        rubric: [
          { id: 'c1', label: '1 pt — Inside region', description: 'Straight line rising from 0 at $r = 0$ to the labeled maximum $\\rho R/(2\\epsilon_0)$ at $r = R$.' },
          { id: 'c2', label: '1 pt — Outside region', description: 'Decreases as $1/r$ for $r > R$ (to one-third of the maximum at $3R$), continuous at $r = R$.' },
        ],
      },
      {
        prompt: '(d) Find an expression for the potential difference $V(0) - V(R)$ between the axis and the surface.',
        rubric: [
          { id: 'd1', label: '1 pt — Relationship between $V$ and $E$ with correct sign', description: '$V(0) - V(R) = -\\int_R^0 E\\,dr = \\int_0^R E\\,dr$.' },
          { id: 'd2', label: '1 pt — Uses the inside field', description: '$\\int_0^R \\dfrac{\\rho r}{2\\epsilon_0}\\,dr$.' },
          { id: 'd3', label: '1 pt — Answer', description: '$V(0) - V(R) = \\dfrac{\\rho R^2}{4\\epsilon_0}$.' },
        ],
      },
    ],
  },

  /* ---- Q2: Translation between representations — RC charging ---- */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**FRQ #2 — Translation Between Representations: RC Charging Circuit (12 points)**

An EMF source $\\epsilon = 12$ V is connected in series with a resistor $R = 2.0$ kΩ and an initially uncharged capacitor $C = 500$ μF. The switch is closed at $t = 0$.`,
    parts: [
      {
        prompt: '(a) Write expressions for the charge $Q(t)$ on the capacitor and the current $I(t)$ in the circuit.',
        rubric: [
          { id: 'a1', label: '1 pt — Time constant', description: '$\\tau = RC = (2000)(500 \\times 10^{-6}) = 1.0$ s.' },
          { id: 'a2', label: '1 pt — Charge', description: '$Q(t) = C\\epsilon(1 - e^{-t/\\tau}) = (6.0 \\times 10^{-3})(1 - e^{-t})$ C.' },
          { id: 'a3', label: '1 pt — Current', description: '$I(t) = (\\epsilon/R)e^{-t/\\tau} = (6.0 \\times 10^{-3})e^{-t}$ A.' },
        ],
      },
      {
        prompt: '(b) Compute the initial current at $t = 0$ and the final charge as $t \\to \\infty$.',
        rubric: [
          { id: 'b1', label: '1 pt — Initial current', description: '$I_0 = \\epsilon/R = 12/2000 = 6.0$ mA (the uncharged capacitor acts like a wire).' },
          { id: 'b2', label: '1 pt — Final charge', description: '$Q_\\infty = C\\epsilon = (500 \\times 10^{-6})(12) = 6.0$ mC.' },
        ],
      },
      {
        prompt: '(c) Sketch $Q(t)$ and $I(t)$ on aligned axes. Mark the value at $t = \\tau = 1.0$ s.',
        rubric: [
          { id: 'c1', label: '1 pt — $Q(t)$ curve', description: 'Rises from 0, concave down, approaching an asymptote at 6.0 mC.' },
          { id: 'c2', label: '1 pt — $I(t)$ curve', description: 'Starts at 6.0 mA and decays exponentially toward 0.' },
          { id: 'c3', label: '1 pt — $Q(\\tau)$ marked', description: '$Q(1.0\\text{ s}) = 6.0(1 - e^{-1}) \\approx 3.79$ mC (63% of the final charge).' },
          { id: 'c4', label: '1 pt — $I(\\tau)$ marked', description: '$I(1.0\\text{ s}) = 6.0e^{-1} \\approx 2.21$ mA (37% of the initial current).' },
        ],
      },
      {
        prompt: '(d) Calculate the energy stored in the capacitor and the energy dissipated by the resistor in the limit $t \\to \\infty$. Comment on the comparison.',
        rubric: [
          { id: 'd1', label: '1 pt — Energy stored in the capacitor', description: '$U_C = \\tfrac{1}{2}C\\epsilon^2 = \\tfrac{1}{2}(500 \\times 10^{-6})(144) = 36$ mJ.' },
          { id: 'd2', label: '1 pt — Energy dissipated by the resistor', description: 'The battery supplies $\\epsilon Q_\\infty = (12)(6.0 \\times 10^{-3}) = 72$ mJ, so $W_R = 72 - 36 = 36$ mJ.' },
          { id: 'd3', label: '1 pt — Comparison', description: 'Exactly half the energy supplied by the battery is stored and half is dissipated in the resistor, independent of the value of $R$.' },
        ],
      },
    ],
  },

  /* ---- Q3: Experimental Design — measure capacitance via RC discharge ---- */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**FRQ #3 — Experimental Design: Measuring an Unknown Capacitance (10 points)**

A student wishes to determine an unknown capacitance $C$ by discharging it through a known resistor $R = 10.0$ kΩ. The capacitor is initially charged to $V_0 = 9.00$ V. The voltage across the capacitor is measured at intervals:

| Time t (s) | Voltage V (V) |
|------------|---------------|
| 0.0 | 9.00 |
| 1.0 | 5.46 |
| 2.0 | 3.31 |
| 3.0 | 2.01 |
| 4.0 | 1.22 |
| 5.0 | 0.74 |`,
    parts: [
      {
        prompt: '(a) Derive the expression for the voltage $V(t)$ across a capacitor discharging through a resistor with time constant $\\tau = RC$.',
        rubric: [
          { id: 'a1', label: '1 pt — Differential equation from the loop rule', description: '$V_C - IR = 0$ with $I = -dQ/dt = -C\\,dV/dt$, so $\\dfrac{dV}{V} = -\\dfrac{dt}{RC}$.' },
          { id: 'a2', label: '1 pt — Solution', description: 'Integrating with $V(0) = V_0$: $V(t) = V_0 e^{-t/(RC)} = V_0 e^{-t/\\tau}$.' },
        ],
      },
      {
        prompt: '(b) Identify a linearization of the data: state what to plot on the y-axis vs. x-axis so that the slope of the linear fit is related to $C$.',
        rubric: [
          { id: 'b1', label: '1 pt — Quantities to plot', description: '$\\ln V$ on the vertical axis vs. $t$ on the horizontal axis (from $\\ln V = \\ln V_0 - t/(RC)$).' },
          { id: 'b2', label: '1 pt — Meaning of the slope', description: 'Slope $= -1/(RC) = -1/\\tau$.' },
          { id: 'b3', label: '1 pt — Expression for $C$', description: '$C = -\\dfrac{1}{R \\cdot \\text{slope}}$.' },
        ],
      },
      {
        prompt: '(c) Using the data, compute the slope (use the first and last points) and determine $C$ in microfarads.',
        rubric: [
          { id: 'c1', label: '1 pt — Slope', description: '$\\ln(9.00) = 2.197$, $\\ln(0.74) = -0.301$; slope $= (-0.301 - 2.197)/(5 - 0) \\approx -0.500$ $s^{-1}$.' },
          { id: 'c2', label: '1 pt — Time constant', description: '$\\tau = 1/0.500 = 2.00$ s.' },
          { id: 'c3', label: '1 pt — Capacitance with units', description: '$C = \\tau/R = 2.00/10\\,000 = 2.0 \\times 10^{-4}$ F $= 200$ μF.' },
        ],
      },
      {
        prompt: '(d) Identify ONE source of systematic error and ONE source of random error in this experiment. For each, briefly indicate how it could be reduced.',
        rubric: [
          { id: 'd1', label: '1 pt — Systematic error with a way to reduce it', description: 'For example: the voltmeter\'s finite resistance in parallel with $C$ lowers the effective resistance, shortening $\\tau$ and underestimating $C$; reduce it with a high-impedance digital voltmeter ($R_V \\gg R$). Capacitor leakage is also acceptable.' },
          { id: 'd2', label: '1 pt — Random error with a way to reduce it', description: 'For example: timing and meter-reading errors at each measurement; reduce them with a data logger, or by repeating trials and averaging.' },
        ],
      },
    ],
  },

  /* ---- Q4: Qualitative/Quantitative — Faraday's law / sliding bar ---- */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative',
    stimulus: `**FRQ #4 — Qualitative/Quantitative Translation: Sliding Bar in Magnetic Field (8 points)**

A conducting bar of length $L = 0.40$ m and mass $m = 0.20$ kg slides without friction along two parallel horizontal conducting rails connected by a resistor $R = 2.0$ Ω. A uniform magnetic field $B = 0.50$ T points vertically upward (perpendicular to plane of rails). The bar is given an initial velocity $v_0 = 4.0$ m/s to the right.`,
    parts: [
      {
        prompt: '(a) Explain qualitatively (using Lenz\'s law) the direction of the induced current in the bar at the instant it is moving with velocity $v_0$.',
        rubric: [
          { id: 'a1', label: '1 pt — Change in flux', description: 'As the bar moves right, the area of the circuit and the upward magnetic flux through it increase.' },
          { id: 'a2', label: '1 pt — Lenz\'s law and direction', description: 'The induced current makes a downward field inside the loop, so it circulates clockwise as viewed from above; equivalently, the current in the bar is directed so that the force $I\\vec L \\times \\vec B$ on the bar points left, opposing the motion.' },
        ],
      },
      {
        prompt: '(b) Compute the magnitude of the induced EMF and current at the instant the bar moves at $v_0 = 4.0$ m/s.',
        rubric: [
          { id: 'b1', label: '1 pt — Motional EMF', description: '$\\epsilon = BLv = (0.50)(0.40)(4.0) = 0.80$ V.' },
          { id: 'b2', label: '1 pt — Current', description: '$I = \\epsilon/R = 0.80/2.0 = 0.40$ A.' },
        ],
      },
      {
        prompt: '(c) Compute the magnetic force on the bar at the instant $v = v_0$, and indicate its direction.',
        rubric: [
          { id: 'c1', label: '1 pt — Magnitude', description: '$F = BIL = (0.50)(0.40)(0.40) = 0.080$ N.' },
          { id: 'c2', label: '1 pt — Direction', description: 'To the left, opposing the motion (Lenz\'s law).' },
        ],
      },
      {
        prompt: '(d) Derive the differential equation for the bar\'s velocity $v(t)$ and solve it to find $v(t)$ for $t \\geq 0$.',
        rubric: [
          { id: 'd1', label: '1 pt — Differential equation', description: '$m\\dfrac{dv}{dt} = -BIL = -\\dfrac{B^2L^2}{R}v$.' },
          { id: 'd2', label: '1 pt — Solution', description: '$v(t) = v_0 e^{-t/\\tau}$ with $\\tau = \\dfrac{mR}{B^2L^2} = \\dfrac{(0.20)(2.0)}{(0.50)^2(0.40)^2} = 10$ s, so $v(t) = 4.0\\,e^{-t/10}$ m/s.' },
        ],
      },
    ],
  },
]
