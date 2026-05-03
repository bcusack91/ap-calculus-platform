import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics C: E&M — 4 FRQs in 2025+ format.
 * Section II: 100 minutes total. Calculator + equation sheet allowed.
 *
 *   Q1 Mathematical Routines (Gauss's law / fields)
 *   Q2 Translation Between Representations (RC charging)
 *   Q3 Experimental Design & Analysis (capacitance)
 *   Q4 Qualitative/Quantitative Translation (Faraday/Lenz)
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Math Routines — Gauss's law on a charged cylinder ---- */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**FRQ #1 — Mathematical Routines: Long Charged Insulating Cylinder**

A long, solid, insulating cylinder of radius $R$ has uniform volume charge density $\\rho$. Use Gauss\'s law to derive the electric field everywhere.`,
    parts: [
      {
        prompt: '(a) Find the electric field magnitude $E(r)$ INSIDE the cylinder ($r < R$). Justify your choice of Gaussian surface.',
        rubric: 'Choose a coaxial cylindrical Gaussian surface of radius $r$ and length $\\ell$ (cylindrical symmetry ⇒ E is radial, constant on surface). Enclosed charge: $Q_{enc} = \\rho \\pi r^2 \\ell$. Flux through curved side: $E(2\\pi r \\ell)$. Gauss: $E(2\\pi r \\ell) = \\rho \\pi r^2 \\ell/\\epsilon_0$ ⇒ $E(r) = \\rho r/(2\\epsilon_0)$. 3 pts.',
      },
      {
        prompt: '(b) Find the electric field magnitude $E(r)$ OUTSIDE the cylinder ($r > R$).',
        rubric: 'Same Gaussian surface, $r > R$: $Q_{enc} = \\rho \\pi R^2 \\ell$ (entire cylinder cross-section). $E(2\\pi r\\ell) = \\rho\\pi R^2 \\ell/\\epsilon_0$ ⇒ $E(r) = \\rho R^2/(2\\epsilon_0 r)$. 2 pts.',
      },
      {
        prompt: '(c) Sketch $E(r)$ versus $r$ for $0 \\leq r \\leq 3R$. Label the value at $r = R$.',
        rubric: 'Graph: linearly increasing from 0 to $E_{max} = \\rho R/(2\\epsilon_0)$ at $r = R$, then decreasing as $1/r$ for $r > R$ (continuous at $r = R$). Award 1 pt per correct region + 1 pt for continuity at $r = R$. 2 pts.',
      },
      {
        prompt: '(d) Find an expression for the potential difference $V(0) - V(R)$ between the axis and the surface.',
        rubric: '$V(0) - V(R) = -\\int_R^0 E(r)\\,dr = \\int_0^R E(r)\\,dr = \\int_0^R \\frac{\\rho r}{2\\epsilon_0}\\,dr = \\frac{\\rho}{2\\epsilon_0} \\cdot \\frac{R^2}{2} = \\frac{\\rho R^2}{4\\epsilon_0}$. 3 pts.',
      },
    ],
  },

  /* ---- Q2: Translation between representations — RC charging ---- */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**FRQ #2 — Translation Between Representations: RC Charging Circuit**

An EMF source $\\epsilon = 12$ V is connected in series with a resistor $R = 2.0$ kΩ and an initially uncharged capacitor $C = 500$ μF. The switch is closed at $t = 0$.`,
    parts: [
      {
        prompt: '(a) Write expressions for the charge $Q(t)$ on the capacitor and the current $I(t)$ in the circuit.',
        rubric: '$\\tau = RC = (2000)(500 \\times 10^{-6}) = 1.0$ s. $Q(t) = C\\epsilon(1 - e^{-t/\\tau}) = (6.0 \\times 10^{-3})(1 - e^{-t})$ C. $I(t) = (\\epsilon/R)e^{-t/\\tau} = (6.0 \\times 10^{-3})e^{-t}$ A. 3 pts.',
      },
      {
        prompt: '(b) Compute the initial current at $t = 0$ and the final charge as $t \\to \\infty$.',
        rubric: '$I_0 = \\epsilon/R = 12/2000 = 6.0 \\times 10^{-3}$ A = 6.0 mA. $Q_\\infty = C\\epsilon = (500 \\times 10^{-6})(12) = 6.0 \\times 10^{-3}$ C = 6.0 mC. 2 pts.',
      },
      {
        prompt: '(c) Sketch $Q(t)$ and $I(t)$ on aligned axes. Mark the value at $t = \\tau = 1.0$ s.',
        rubric: '$Q(t)$: rises from 0, asymptote at 6 mC. At $t = \\tau$: $Q = 6(1 - e^{-1}) = 6(0.632) = 3.79$ mC. $I(t)$: starts at 6 mA, decays exponentially to 0. At $t = \\tau$: $I = 6 e^{-1} = 2.21$ mA. Award 1 per correct curve + 1 for marked $\\tau$ values. 3 pts.',
      },
      {
        prompt: '(d) Calculate the energy stored in the capacitor and the energy dissipated by the resistor in the limit $t \\to \\infty$. Comment on the comparison.',
        rubric: '$U_C = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(500 \\times 10^{-6})(144) = 0.036$ J = 36 mJ. Energy from battery: $W_{batt} = \\epsilon Q_\\infty = (12)(6 \\times 10^{-3}) = 0.072$ J = 72 mJ. Energy dissipated by R: $W_R = W_{batt} - U_C = 36$ mJ. Comparison: exactly half the battery energy goes to the capacitor and half is dissipated as heat in R — a classic RC charging result, independent of the value of R. 2 pts.',
      },
    ],
  },

  /* ---- Q3: Experimental Design — measure capacitance via RC discharge ---- */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**FRQ #3 — Experimental Design: Measuring an Unknown Capacitance**

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
        rubric: 'KVL: $V_C - IR = 0$ with $I = -dQ/dt = -C(dV/dt)$. So $V = -RC(dV/dt) \\Rightarrow dV/V = -dt/(RC)$. Integrate: $V(t) = V_0 e^{-t/(RC)} = V_0 e^{-t/\\tau}$. 2 pts.',
      },
      {
        prompt: '(b) Identify a linearization of the data: state what to plot on the y-axis vs. x-axis so that the slope of the linear fit is related to $C$.',
        rubric: 'Take ln of both sides: $\\ln V = \\ln V_0 - t/(RC)$. Plot $\\ln V$ (y-axis) vs. $t$ (x-axis). Slope = $-1/(RC) = -1/\\tau$. From slope, $C = -1/(R \\cdot \\text{slope})$. 3 pts.',
      },
      {
        prompt: '(c) Using the data, compute the slope (use the first and last points) and determine $C$ in microfarads.',
        rubric: '$\\ln(9.00) = 2.197$, $\\ln(0.74) = -0.301$. Slope $= (-0.301 - 2.197)/(5 - 0) = -2.498/5 = -0.500$ s⁻¹. $\\tau = 1/0.500 = 2.00$ s. $C = \\tau/R = 2.00/10000 = 2.0 \\times 10^{-4}$ F = 200 μF. 3 pts.',
      },
      {
        prompt: '(d) Identify ONE source of systematic error and ONE source of random error in this experiment. For each, briefly indicate how it could be reduced.',
        rubric: 'Systematic example: voltmeter has finite internal resistance $R_V$ in parallel with C ⇒ effectively reduces $\\tau$ ⇒ underestimates $C$. Reduce: use high-impedance digital voltmeter ($R_V \\gg R$). Random example: timing/reading errors at each measurement. Reduce: use a digital data-logger or take many trials and average. (Other valid: leakage current in capacitor, ambient temperature effects, contact resistance.) 2 pts.',
      },
    ],
  },

  /* ---- Q4: Qualitative/Quantitative — Faraday's law / sliding bar ---- */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative',
    stimulus: `**FRQ #4 — Qualitative/Quantitative Translation: Sliding Bar in Magnetic Field**

A conducting bar of length $L = 0.40$ m and mass $m = 0.20$ kg slides without friction along two parallel horizontal conducting rails connected by a resistor $R = 2.0$ Ω. A uniform magnetic field $B = 0.50$ T points vertically upward (perpendicular to plane of rails). The bar is given an initial velocity $v_0 = 4.0$ m/s to the right.`,
    parts: [
      {
        prompt: '(a) Explain qualitatively (using Lenz\'s law) the direction of the induced current in the bar at the instant it is moving with velocity $v_0$.',
        rubric: 'As the bar moves right, the area of the loop (and thus magnetic flux through it) INCREASES (since B is up out of the loop). By Lenz\'s law, induced current opposes this change ⇒ induced current creates B field DOWNWARD through the loop ⇒ by right-hand rule, current flows CLOCKWISE in the loop (when viewed from above). Through the bar itself, the current direction depends on circuit orientation, but it is the direction such that $\\vec{F} = I\\vec{L} \\times \\vec{B}$ on the bar opposes motion (i.e., points LEFT). 3 pts.',
      },
      {
        prompt: '(b) Compute the magnitude of the induced EMF and current at the instant the bar moves at $v_0 = 4.0$ m/s.',
        rubric: 'Motional EMF: $\\epsilon = BLv = (0.50)(0.40)(4.0) = 0.80$ V. Current: $I = \\epsilon/R = 0.80/2.0 = 0.40$ A. 2 pts.',
      },
      {
        prompt: '(c) Compute the magnetic force on the bar at the instant $v = v_0$, and indicate its direction.',
        rubric: '$F = BIL = (0.50)(0.40)(0.40) = 0.080$ N. Direction: opposes motion (Lenz\'s law) ⇒ to the LEFT. 2 pts.',
      },
      {
        prompt: '(d) Derive the differential equation for the bar\'s velocity $v(t)$ and solve it to find $v(t)$ for $t \\geq 0$.',
        rubric: 'Newton\'s 2nd law: $m\\frac{dv}{dt} = -F = -BIL = -B^2 L^2 v/R$. ⇒ $\\frac{dv}{v} = -\\frac{B^2 L^2}{mR}dt$. Define $\\tau = mR/(B^2 L^2) = (0.20)(2.0)/((0.5)^2(0.4)^2) = 0.40/0.04 = 10$ s. Solve: $v(t) = v_0 e^{-t/\\tau} = 4.0\\, e^{-t/10}$ m/s. The bar\'s velocity decays exponentially. 3 pts.',
      },
    ],
  },
]
