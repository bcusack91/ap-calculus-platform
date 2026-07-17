/**
 * AP Exam Reference Sheet Data
 *
 * Contains equations and formulas provided to students on each AP exam.
 * Modeled after the official College Board reference materials.
 *
 * Math is written as inline LaTeX ($...$) and rendered by ReferenceSheetModal
 * via renderRichText/KaTeX. Prose annotations are left outside the $...$ spans.
 */

export interface ReferenceSection {
  title: string
  items: string[]
}

export interface APReferenceSheet {
  courseName: string
  emoji: string
  sections: ReferenceSection[]
}

export const AP_REFERENCE_SHEETS: Record<string, APReferenceSheet> = {
  'ap-statistics': {
    courseName: 'AP Statistics',
    emoji: '📊',
    sections: [
      {
        title: 'Descriptive Statistics',
        items: [
          '$\\bar{x} = (\\Sigma x_i)/n$',
          '$s_x = \\sqrt{\\Sigma(x_i - \\bar{x})^2/(n - 1)}$',
          '$\\hat{y} = b_0 + b_1 x$  (least-squares regression line)',
          '$b_1 = r(s_y/s_x)$  ;  $b_0 = \\bar{y} - b_1\\bar{x}$',
          '$r = \\frac{1}{n-1}\\, \\Sigma\\left[\\frac{x_i - \\bar{x}}{s_x}\\right]\\left[\\frac{y_i - \\bar{y}}{s_y}\\right]$',
          '$r^2$ = coefficient of determination',
          'Residual = observed − predicted = $y - \\hat{y}$',
        ],
      },
      {
        title: 'Probability',
        items: [
          '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
          '$P(A \\mid B) = P(A \\cap B)/P(B)$',
          'If A, B independent: $P(A \\cap B) = P(A)\\cdot P(B)$',
          '$E(X) = \\mu_x = \\Sigma x_i \\cdot P(x_i)$',
          '$\\mathrm{Var}(X) = \\sigma_x^2 = \\Sigma(x_i - \\mu_x)^2 \\cdot P(x_i)$',
          'If X, Y independent: $\\mathrm{Var}(X \\pm Y) = \\mathrm{Var}(X) + \\mathrm{Var}(Y)$',
          '$E(aX + b) = aE(X) + b$  ;  $\\mathrm{Var}(aX + b) = a^2\\mathrm{Var}(X)$',
        ],
      },
      {
        title: 'Binomial & Geometric Distributions',
        items: [
          'Binomial: $P(X = k) = \\binom{n}{k} p^k(1-p)^{n-k}$',
          '$\\mu = np$  ;  $\\sigma = \\sqrt{np(1-p)}$',
          'Geometric: $P(X = k) = (1-p)^{k-1} p$',
          '$\\mu = 1/p$',
        ],
      },
      {
        title: 'Sampling Distributions',
        items: [
          'Mean of $\\bar{x}$: $\\mu_{\\bar{x}} = \\mu$',
          'Std dev of $\\bar{x}$: $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$',
          'Mean of $\\hat{p}$: $\\mu_{\\hat{p}} = p$',
          'Std dev of $\\hat{p}$: $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$',
        ],
      },
      {
        title: 'Confidence Intervals',
        items: [
          'One-sample z interval for $\\mu$: $\\bar{x} \\pm z^* \\cdot (\\sigma/\\sqrt{n})$',
          'One-sample t interval for $\\mu$: $\\bar{x} \\pm t^* \\cdot (s/\\sqrt{n})$',
          'One-sample z interval for p: $\\hat{p} \\pm z^* \\cdot \\sqrt{\\hat{p}(1-\\hat{p})/n}$',
          'Two-sample t interval for $\\mu_1-\\mu_2$: $(\\bar{x}_1-\\bar{x}_2) \\pm t^* \\cdot \\sqrt{s_1^2/n_1 + s_2^2/n_2}$',
          'Two-sample z interval for $p_1-p_2$: $(\\hat{p}_1-\\hat{p}_2) \\pm z^* \\cdot \\sqrt{\\hat{p}_1(1-\\hat{p}_1)/n_1 + \\hat{p}_2(1-\\hat{p}_2)/n_2}$',
        ],
      },
      {
        title: 'Tests of Significance',
        items: [
          'One-sample z test: $z = (\\bar{x} - \\mu_0)/(\\sigma/\\sqrt{n})$',
          'One-sample t test: $t = (\\bar{x} - \\mu_0)/(s/\\sqrt{n})$  ;  $df = n - 1$',
          'One-sample z test for p: $z = (\\hat{p} - p_0)/\\sqrt{p_0(1-p_0)/n}$',
          'Two-sample t test: $t = (\\bar{x}_1-\\bar{x}_2)/\\sqrt{s_1^2/n_1 + s_2^2/n_2}$',
          'Paired t test: $t = \\bar{d}/(s_d/\\sqrt{n})$  ;  $df = n - 1$',
          'Chi-square test: $\\chi^2 = \\Sigma(O - E)^2/E$',
          'Chi-square df: $(r-1)(c-1)$ for two-way tables; $k-1$ for GOF',
          'Linear regression t test: $t = b_1/SE_{b_1}$  ;  $df = n - 2$',
        ],
      },
      {
        title: 'Common z* and t* Values',
        items: [
          '90% confidence: $z^* = 1.645$',
          '95% confidence: $z^* = 1.960$',
          '99% confidence: $z^* = 2.576$',
        ],
      },
    ],
  },

  'ap-biology': {
    courseName: 'AP Biology',
    emoji: '🧬',
    sections: [
      {
        title: 'Water Potential',
        items: [
          '$\\Psi = \\Psi_p + \\Psi_s$  (water potential = pressure potential + solute potential)',
          '$\\Psi_s = -iCRT$',
          '  i = ionization constant',
          '  C = molar concentration',
          '  R = 0.0831 L·bar/(mol·K)',
          '  T = temperature in Kelvin (273 + °C)',
        ],
      },
      {
        title: 'Hardy-Weinberg Equilibrium',
        items: [
          '$p + q = 1$  (allele frequencies)',
          '$p^2 + 2pq + q^2 = 1$  (genotype frequencies)',
          '$p^2$ = frequency of homozygous dominant',
          '$2pq$ = frequency of heterozygotes',
          '$q^2$ = frequency of homozygous recessive',
        ],
      },
      {
        title: 'Chi-Square Test',
        items: [
          '$\\chi^2 = \\Sigma\\, (\\text{observed} - \\text{expected})^2 / \\text{expected}$',
          '$df$ = number of categories − 1',
          'If $\\chi^2$ > critical value → reject null hypothesis',
        ],
      },
      {
        title: 'Rate & Surface Area',
        items: [
          'Rate = $\\Delta$Quantity / $\\Delta$Time',
          'Surface Area of a Sphere = $4\\pi r^2$',
          'Volume of a Sphere = $\\frac{4}{3}\\pi r^3$',
          'Surface Area / Volume ratio decreases as cell size increases',
        ],
      },
      {
        title: 'Population Growth',
        items: [
          '$dN/dt = B - D$  (births − deaths)',
          'Exponential growth: $dN/dt = r_{max}N$',
          'Logistic growth: $dN/dt = r_{max}N(K - N)/K$',
          '$K$ = carrying capacity',
          '$r_{max}$ = maximum per capita growth rate',
        ],
      },
      {
        title: 'Simpson\'s Diversity Index',
        items: [
          'Diversity Index = $1 - \\Sigma(p_i)^2$',
          '$p_i$ = proportion of total sample represented by species i',
          'Higher value = greater diversity',
        ],
      },
      {
        title: 'Gibbs Free Energy',
        items: [
          '$\\Delta G = \\Delta H - T\\Delta S$',
          '$\\Delta G < 0$ → spontaneous (exergonic)',
          '$\\Delta G > 0$ → non-spontaneous (endergonic)',
          '$\\Delta G = 0$ → equilibrium',
        ],
      },
      {
        title: 'pH',
        items: [
          'pH = $-\\log[\\text{H}^+]$',
          'pH < 7 → acidic  ;  pH = 7 → neutral  ;  pH > 7 → basic',
        ],
      },
      {
        title: 'Dilution',
        items: [
          '$C_1V_1 = C_2V_2$',
        ],
      },
    ],
  },

  'ap-physics-1': {
    courseName: 'AP Physics 1',
    emoji: '⚛️',
    sections: [
      {
        title: 'Kinematics',
        items: [
          '$v = v_0 + at$',
          '$x = x_0 + v_0 t + \\frac{1}{2}at^2$',
          '$v^2 = v_0^2 + 2a(x - x_0)$',
          '$x = x_0 + \\frac{1}{2}(v_0 + v)t$',
          '$a_c = v^2/r$  (centripetal acceleration)',
        ],
      },
      {
        title: 'Forces & Newton\'s Laws',
        items: [
          '$F_{net} = ma$  (Newton\'s Second Law)',
          '$F_g = mg$  (weight)',
          '$f_s \\le \\mu_s N$  (static friction)',
          '$f_k = \\mu_k N$  (kinetic friction)',
          '$F_{spring} = -kx$  (Hooke\'s Law)',
          '$F_g = Gm_1 m_2/r^2$  (gravitational force)',
        ],
      },
      {
        title: 'Energy & Work',
        items: [
          '$W = Fd\\cos\\theta$',
          '$KE = \\frac{1}{2}mv^2$',
          '$PE_g = mgh$',
          '$PE_{spring} = \\frac{1}{2}kx^2$',
          '$W_{net} = \\Delta KE$  (work-energy theorem)',
          '$P = W/t = Fv$  (power)',
          'Conservation of energy: $KE_1 + PE_1 = KE_2 + PE_2$ (if no non-conservative work)',
        ],
      },
      {
        title: 'Momentum & Impulse',
        items: [
          '$p = mv$',
          '$J = F\\Delta t = \\Delta p$  (impulse-momentum theorem)',
          '$\\Sigma p_{before} = \\Sigma p_{after}$  (conservation of momentum)',
          'Elastic collision: KE is conserved',
          'Inelastic collision: KE is NOT conserved; objects may stick',
        ],
      },
      {
        title: 'Rotational Motion',
        items: [
          '$\\tau = rF\\sin\\theta$  (torque)',
          '$\\tau_{net} = I\\alpha$',
          '$L = I\\omega$  (angular momentum)',
          '$KE_{rot} = \\frac{1}{2}I\\omega^2$',
          '$v = r\\omega$  ;  $a = r\\alpha$',
          '$\\omega = \\omega_0 + \\alpha t$  ;  $\\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2$',
          '$I = \\Sigma m_i r_i^2$  (moment of inertia)',
        ],
      },
      {
        title: 'Simple Harmonic Motion',
        items: [
          '$T_{pendulum} = 2\\pi\\sqrt{L/g}$',
          '$T_{spring} = 2\\pi\\sqrt{m/k}$',
          '$x(t) = A\\cos(\\omega t + \\phi)$  ;  $\\omega = 2\\pi/T$',
        ],
      },
      {
        title: 'Waves & Sound',
        items: [
          '$v = f\\lambda$',
          '$f_{beat} = |f_1 - f_2|$',
          'Open pipe: $f_n = nv/(2L)$  (n = 1, 2, 3, …)',
          'Closed pipe: $f_n = nv/(4L)$  (n = 1, 3, 5, …)',
        ],
      },
      {
        title: 'Electrostatics & Circuits',
        items: [
          '$F_E = kq_1 q_2/r^2$  (Coulomb\'s Law)',
          '$I = \\Delta Q/\\Delta t$  (current)',
          '$V = IR$  (Ohm\'s Law)',
          '$P = IV = I^2 R = V^2/R$',
          'Series: $R_{total} = R_1 + R_2 + \\ldots$',
          'Parallel: $1/R_{total} = 1/R_1 + 1/R_2 + \\ldots$',
        ],
      },
      {
        title: 'Constants',
        items: [
          '$g = 9.8$ m/s²',
          '$G = 6.674 \\times 10^{-11}$ N·m²/kg²',
          '$k = 8.99 \\times 10^9$ N·m²/C²',
          '$e = 1.60 \\times 10^{-19}$ C',
        ],
      },
    ],
  },

  'ap-physics-2': {
    courseName: 'AP Physics 2',
    emoji: '⚛️',
    sections: [
      {
        title: 'Fluid Mechanics',
        items: [
          '$P = F/A$  (pressure)',
          '$P = P_0 + \\rho gh$  (fluid pressure at depth)',
          '$F_{buoyant} = \\rho_{fluid} \\cdot V_{displaced} \\cdot g$  (Archimedes\' principle)',
          '$A_1 v_1 = A_2 v_2$  (continuity equation)',
          '$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gy_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gy_2$  (Bernoulli\'s equation)',
        ],
      },
      {
        title: 'Thermodynamics',
        items: [
          '$Q = mc\\Delta T$',
          '$\\Delta U = Q - W$  (first law)',
          '$PV = nRT$  (ideal gas law)',
          '$W = P\\Delta V$  (work done by gas at constant pressure)',
          '$KE_{avg} = \\frac{3}{2}k_B T$  (average kinetic energy per molecule)',
          '$e = W/Q_H = 1 - Q_C/Q_H$  (heat engine efficiency)',
          '$e_{Carnot} = 1 - T_C/T_H$  (Carnot efficiency)',
        ],
      },
      {
        title: 'Electrostatics',
        items: [
          '$F_E = kq_1 q_2/r^2$  ;  $k = 1/(4\\pi\\varepsilon_0)$',
          '$E = F/q$  (electric field)',
          '$E = kQ/r^2$  (point charge)',
          '$V = kQ/r$  (electric potential, point charge)',
          '$U_E = kq_1 q_2/r$  (electric potential energy)',
          '$C = Q/V$  ;  $C = \\kappa\\varepsilon_0 A/d$  (parallel plate capacitor)',
          '$U_C = \\frac{1}{2}QV = \\frac{1}{2}CV^2$  (energy in capacitor)',
        ],
      },
      {
        title: 'Circuits',
        items: [
          '$I = \\Delta Q/\\Delta t$  ;  $V = IR$',
          '$P = IV = I^2 R = V^2/R$',
          'Series: $R_{total} = R_1 + R_2 + \\ldots$  ;  $1/C_{total} = 1/C_1 + 1/C_2 + \\ldots$',
          'Parallel: $1/R_{total} = 1/R_1 + 1/R_2 + \\ldots$  ;  $C_{total} = C_1 + C_2 + \\ldots$',
          'Kirchhoff\'s loop rule: $\\Sigma V = 0$',
          'Kirchhoff\'s junction rule: $\\Sigma I_{in} = \\Sigma I_{out}$',
        ],
      },
      {
        title: 'Magnetism',
        items: [
          '$F = qvB\\sin\\theta$  (force on moving charge)',
          '$F = BIL\\sin\\theta$  (force on current-carrying wire)',
          '$\\Phi_B = BA\\cos\\theta$  (magnetic flux)',
          '$EMF = -\\Delta\\Phi_B/\\Delta t$  (Faraday\'s law)',
        ],
      },
      {
        title: 'Optics',
        items: [
          '$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$  (Snell\'s law)',
          '$n = c/v$  (index of refraction)',
          '$1/f = 1/d_o + 1/d_i$  (thin lens/mirror equation)',
          '$M = -d_i/d_o = h_i/h_o$  (magnification)',
          '$\\sin\\theta_c = n_2/n_1$  (critical angle for total internal reflection)',
        ],
      },
      {
        title: 'Modern Physics',
        items: [
          '$E = hf$  ;  $E = hc/\\lambda$',
          '$KE_{max} = hf - \\phi$  (photoelectric effect)',
          '$E = mc^2$',
          '$\\lambda = h/p$  (de Broglie wavelength)',
        ],
      },
      {
        title: 'Constants',
        items: [
          '$g = 9.8$ m/s²',
          '$G = 6.674 \\times 10^{-11}$ N·m²/kg²',
          '$k = 8.99 \\times 10^9$ N·m²/C²  ;  $\\varepsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²)',
          '$e = 1.60 \\times 10^{-19}$ C',
          '$h = 6.63 \\times 10^{-34}$ J·s',
          '$c = 3.00 \\times 10^8$ m/s',
          '$k_B = 1.38 \\times 10^{-23}$ J/K',
          '$R = 8.314$ J/(mol·K)',
          '$N_A = 6.02 \\times 10^{23}$ mol⁻¹',
          '1 atm = $1.013 \\times 10^5$ Pa',
          '1 eV = $1.60 \\times 10^{-19}$ J',
        ],
      },
    ],
  },

  'ap-physics-c-mechanics': {
    courseName: 'AP Physics C: Mechanics',
    emoji: '⚛️',
    sections: [
      {
        title: 'Kinematics',
        items: [
          '$v = dx/dt$  ;  $a = dv/dt = d^2x/dt^2$',
          '$x = x_0 + v_0 t + \\frac{1}{2}at^2$  (constant a)',
          '$v = v_0 + at$  ;  $v^2 = v_0^2 + 2a(x - x_0)$',
          '$a_c = v^2/r = \\omega^2 r$',
        ],
      },
      {
        title: 'Newton\'s Laws & Forces',
        items: [
          '$\\Sigma F = ma = dp/dt$',
          '$F_g = -Gm_1 m_2/r^2\\, \\hat{r}$',
          '$f \\le \\mu N$  ;  $F_{spring} = -kx$',
          '$F_{drag} \\propto v$ or $v^2$',
        ],
      },
      {
        title: 'Work, Energy & Power',
        items: [
          '$W = \\int F \\cdot dr$',
          '$KE = \\frac{1}{2}mv^2$  ;  $W_{net} = \\Delta KE$',
          '$U_g = mgh$  ;  $U_g = -Gm_1 m_2/r$',
          '$U_{spring} = \\frac{1}{2}kx^2$',
          '$F = -dU/dx$  (conservative force)',
          '$P = dW/dt = F \\cdot v$',
        ],
      },
      {
        title: 'Momentum & Collisions',
        items: [
          '$p = mv$  ;  $J = \\int F\\, dt = \\Delta p$',
          'Center of mass: $x_{cm} = \\Sigma m_i x_i / \\Sigma m_i$',
          '$v_{cm} = \\Sigma m_i v_i / \\Sigma m_i$',
        ],
      },
      {
        title: 'Rotation',
        items: [
          '$\\tau = r \\times F$  ;  $|\\tau| = rF\\sin\\theta$',
          '$\\Sigma\\tau = I\\alpha$',
          '$I = \\int r^2\\, dm$  ;  $I = I_{cm} + Md^2$  (parallel axis)',
          '$L = I\\omega$  ;  $\\tau = dL/dt$',
          '$KE_{rot} = \\frac{1}{2}I\\omega^2$  ;  $KE_{total} = \\frac{1}{2}mv_{cm}^2 + \\frac{1}{2}I_{cm}\\omega^2$',
          '$v = r\\omega$  ;  $a_t = r\\alpha$',
        ],
      },
      {
        title: 'Oscillations',
        items: [
          '$x(t) = A\\cos(\\omega t + \\phi)$',
          '$\\omega = \\sqrt{k/m}$  (mass-spring)  ;  $\\omega = \\sqrt{g/L}$  (pendulum, small angle)',
          '$T = 2\\pi/\\omega$  ;  $f = 1/T$',
          '$E = \\frac{1}{2}kA^2$  (total energy in SHM)',
        ],
      },
      {
        title: 'Gravitation',
        items: [
          '$F = Gm_1 m_2/r^2$',
          '$g = GM/R^2$',
          '$U_g = -Gm_1 m_2/r$',
          '$v_{orbit} = \\sqrt{GM/r}$  ;  $T^2 = (4\\pi^2/GM)r^3$  (Kepler\'s 3rd law)',
        ],
      },
      {
        title: 'Constants',
        items: [
          '$g = 9.8$ m/s²',
          '$G = 6.67 \\times 10^{-11}$ N·m²/kg²',
        ],
      },
    ],
  },

  'ap-physics-c-em': {
    courseName: 'AP Physics C: E&M',
    emoji: '⚛️',
    sections: [
      {
        title: 'Electrostatics',
        items: [
          '$F = kq_1 q_2/r^2$  ;  $k = 1/(4\\pi\\varepsilon_0)$',
          '$E = F/q_0$  ;  $E = kQ/r^2$  (point charge)',
          '$\\oint E \\cdot dA = Q_{enc}/\\varepsilon_0$  (Gauss\'s law)',
          '$V = -\\int E \\cdot dr$  ;  $E = -dV/dr$',
          '$V = kQ/r$  (point charge)',
          '$U = qV = kq_1 q_2/r$',
        ],
      },
      {
        title: 'Conductors & Capacitors',
        items: [
          '$C = Q/V$  ;  $C = \\kappa\\varepsilon_0 A/d$  (parallel plate)',
          '$U = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = Q^2/(2C)$',
          '$u = \\frac{1}{2}\\varepsilon_0 E^2$  (energy density)',
          'Series: $1/C_{eq} = 1/C_1 + 1/C_2 + \\ldots$',
          'Parallel: $C_{eq} = C_1 + C_2 + \\ldots$',
        ],
      },
      {
        title: 'Circuits',
        items: [
          '$I = dQ/dt$  ;  $V = IR$  ;  $P = IV$',
          'Series R: $R_{eq} = R_1 + R_2 + \\ldots$',
          'Parallel R: $1/R_{eq} = 1/R_1 + 1/R_2 + \\ldots$',
          'Kirchhoff: $\\Sigma V_{loop} = 0$  ;  $\\Sigma I_{junction} = 0$',
          'RC circuit: $Q(t) = Q_0(1 - e^{-t/RC})$  (charging)',
          'RC circuit: $Q(t) = Q_0 e^{-t/RC}$  (discharging)',
          '$\\tau = RC$  (time constant)',
        ],
      },
      {
        title: 'Magnetism',
        items: [
          '$F = qv \\times B$  ;  $|F| = qvB\\sin\\theta$',
          '$F = IL \\times B$  ;  $|F| = BIL\\sin\\theta$',
          '$dB = (\\mu_0/4\\pi)(I\\, dl \\times \\hat{r})/r^2$  (Biot-Savart)',
          '$\\oint B \\cdot dl = \\mu_0 I_{enc}$  (Ampère\'s law)',
          '$B_{solenoid} = \\mu_0 nI$  ;  $B_{wire} = \\mu_0 I/(2\\pi r)$',
          '$\\Phi_B = \\int B \\cdot dA$',
        ],
      },
      {
        title: 'Electromagnetic Induction',
        items: [
          '$EMF = -d\\Phi_B/dt$  (Faraday\'s law)',
          '$EMF = BLv$  (motional EMF)',
          '$L = N\\Phi_B/I$  ;  $EMF = -L\\, dI/dt$  (self-inductance)',
          '$U_L = \\frac{1}{2}LI^2$  (energy in inductor)',
          '$u_B = B^2/(2\\mu_0)$  (magnetic energy density)',
          'LR circuit: $I(t) = (V/R)(1 - e^{-Rt/L})$',
          '$\\tau = L/R$',
        ],
      },
      {
        title: 'Maxwell\'s Equations (integral form)',
        items: [
          '$\\oint E \\cdot dA = Q_{enc}/\\varepsilon_0$  (Gauss — electric)',
          '$\\oint B \\cdot dA = 0$  (Gauss — magnetic)',
          '$\\oint E \\cdot dl = -d\\Phi_B/dt$  (Faraday)',
          '$\\oint B \\cdot dl = \\mu_0 I + \\mu_0\\varepsilon_0\\, d\\Phi_E/dt$  (Ampère-Maxwell)',
        ],
      },
      {
        title: 'Constants',
        items: [
          '$k = 8.99 \\times 10^9$ N·m²/C²',
          '$\\varepsilon_0 = 8.85 \\times 10^{-12}$ C²/(N·m²)',
          '$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A',
          '$e = 1.60 \\times 10^{-19}$ C',
          '$c = 3.00 \\times 10^8$ m/s',
        ],
      },
    ],
  },

  'ap-psychology': {
    courseName: 'AP Psychology',
    emoji: '🧠',
    sections: [
      {
        title: 'Research Methods',
        items: [
          'Mean = $\\Sigma x / n$',
          'Median = middle value when data is ordered',
          'Mode = most frequently occurring value',
          'Range = max − min',
          'Standard deviation: measure of spread around the mean',
          'Normal distribution: 68% within $\\pm 1$ SD, 95% within $\\pm 2$ SD, 99.7% within $\\pm 3$ SD',
          'Correlation coefficient r: $-1$ to $+1$ (strength & direction)',
          'Correlation $\\ne$ causation',
          'Statistical significance: $p < 0.05$ conventionally',
        ],
      },
      {
        title: 'Biological Bases of Behavior',
        items: [
          'Neuron: dendrite → cell body → axon → terminal buttons',
          'Action potential: resting (−70 mV) → threshold → depolarization → repolarization → refractory',
          'Neurotransmitters: acetylcholine, dopamine, serotonin, norepinephrine, GABA, glutamate, endorphins',
          'Brain regions: frontal (planning), parietal (sensory), temporal (auditory), occipital (visual)',
          'Limbic system: amygdala (emotion), hippocampus (memory), hypothalamus (homeostasis)',
        ],
      },
      {
        title: 'Sensation & Perception',
        items: [
          'Absolute threshold: minimum stimulus detected 50% of the time',
          'Difference threshold (JND): smallest detectable change',
          'Weber\'s Law: $\\Delta I/I = k$ (JND is proportional to stimulus intensity)',
          'Signal detection theory: hit, miss, false alarm, correct rejection',
        ],
      },
      {
        title: 'Learning',
        items: [
          'Classical conditioning: NS + UCS → UCR; after pairing, CS → CR',
          'Operant conditioning: reinforcement (increases behavior), punishment (decreases behavior)',
          'Schedules of reinforcement: fixed/variable × ratio/interval',
          'Observational learning (Bandura): attention → retention → reproduction → motivation',
        ],
      },
      {
        title: 'Memory',
        items: [
          'Encoding → Storage → Retrieval',
          'Sensory → Short-term ($7\\pm 2$ items, ~30 sec) → Long-term',
          'Working memory model (Baddeley): central executive, phonological loop, visuospatial sketchpad',
          'Ebbinghaus forgetting curve: rapid initial forgetting, then levels off',
          'Interference: proactive (old → new) vs. retroactive (new → old)',
        ],
      },
      {
        title: 'Developmental Psychology',
        items: [
          'Piaget stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), formal operational (11+)',
          'Erikson: 8 psychosocial stages (trust vs. mistrust through integrity vs. despair)',
          'Kohlberg: preconventional, conventional, postconventional moral reasoning',
          'Attachment styles (Ainsworth): secure, avoidant, anxious/ambivalent, disorganized',
        ],
      },
      {
        title: 'Abnormal Psychology',
        items: [
          'DSM-5: Diagnostic and Statistical Manual of Mental Disorders',
          'Anxiety disorders, mood disorders, schizophrenia, personality disorders, dissociative disorders',
          'Biomedical therapy: medication, ECT, TMS',
          'Psychotherapy: cognitive-behavioral, psychodynamic, humanistic',
        ],
      },
    ],
  },

  'ap-precalculus': {
    courseName: 'AP Precalculus',
    emoji: '📐',
    sections: [
      {
        title: 'Polynomial & Rational Functions',
        items: [
          'Polynomial: $f(x) = a_n x^n + a_{n-1}x^{n-1} + \\ldots + a_1 x + a_0$',
          'End behavior determined by leading term $a_n x^n$',
          'Rational zeros theorem: possible zeros = $\\pm$(factors of $a_0$)/(factors of $a_n$)',
          'Remainder theorem: $f(c)$ = remainder when $f(x)$ is divided by $(x - c)$',
        ],
      },
      {
        title: 'Exponential & Logarithmic Functions',
        items: [
          '$y = ab^x$  (exponential)  ;  $y = a\\cdot e^{kx}$',
          '$\\log_a(b) = c \\iff a^c = b$',
          '$\\ln(xy) = \\ln x + \\ln y$  ;  $\\ln(x/y) = \\ln x - \\ln y$',
          '$\\ln(x^n) = n\\ln x$',
          'Change of base: $\\log_a(b) = \\ln b / \\ln a$',
          'Half-life: $t_{1/2} = \\ln 2 / k$',
          'Doubling time: $t_d = \\ln 2 / k$',
        ],
      },
      {
        title: 'Trigonometric Functions',
        items: [
          '$\\sin^2\\theta + \\cos^2\\theta = 1$',
          '$1 + \\tan^2\\theta = \\sec^2\\theta$  ;  $1 + \\cot^2\\theta = \\csc^2\\theta$',
          '$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$',
          '$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$',
          '$\\tan(A \\pm B) = (\\tan A \\pm \\tan B)/(1 \\mp \\tan A\\tan B)$',
          '$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$',
          '$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$',
          'Law of Sines: $a/\\sin A = b/\\sin B = c/\\sin C$',
          'Law of Cosines: $c^2 = a^2 + b^2 - 2ab\\cos C$',
          'Area = $\\frac{1}{2}ab\\sin C$',
        ],
      },
      {
        title: 'Polar & Parametric',
        items: [
          '$x = r\\cos\\theta$  ;  $y = r\\sin\\theta$',
          '$r = \\sqrt{x^2 + y^2}$  ;  $\\tan\\theta = y/x$',
          'Parametric: $x = f(t)$, $y = g(t)$',
          '$dy/dx = (dy/dt)/(dx/dt)$',
        ],
      },
      {
        title: 'Sequences & Series',
        items: [
          'Arithmetic: $a_n = a_1 + (n-1)d$  ;  $S_n = n(a_1 + a_n)/2$',
          'Geometric: $a_n = a_1\\cdot r^{n-1}$  ;  $S_n = a_1(1 - r^n)/(1 - r)$',
          'Infinite geometric: $S = a_1/(1 - r)$  for $|r| < 1$',
        ],
      },
      {
        title: 'Key Values',
        items: [
          'Unit circle: $\\pi/6$ (30°), $\\pi/4$ (45°), $\\pi/3$ (60°), $\\pi/2$ (90°)',
          '$\\sin(\\pi/6) = \\frac{1}{2}$  ;  $\\sin(\\pi/4) = \\sqrt{2}/2$  ;  $\\sin(\\pi/3) = \\sqrt{3}/2$',
          '$\\cos(\\pi/6) = \\sqrt{3}/2$  ;  $\\cos(\\pi/4) = \\sqrt{2}/2$  ;  $\\cos(\\pi/3) = \\frac{1}{2}$',
          '1 radian = $180^{\\circ}/\\pi \\approx 57.3^{\\circ}$  ;  $\\pi$ radians = 180°',
        ],
      },
    ],
  },
}

/**
 * Returns the reference sheet for a given course slug.
 * Falls back to undefined for courses without a reference sheet.
 */
export function getReferenceSheet(courseSlug: string): APReferenceSheet | undefined {
  return AP_REFERENCE_SHEETS[courseSlug]
}

/**
 * Returns true if a course has a reference sheet available.
 * AP Chemistry uses a specialized modal (periodic table + equations)
 * so it is handled as a special case here.
 */
export function hasReferenceSheet(courseSlug: string): boolean {
  return courseSlug in AP_REFERENCE_SHEETS || courseSlug === 'ap-chemistry'
}

/**
 * Determines the course slug from a topic slug by checking if
 * the topic slug starts with a known course prefix.
 */
export function getCourseSlugFromTopic(topicSlug: string): string | undefined {
  const coursePrefixes = Object.keys(AP_REFERENCE_SHEETS)
  for (const prefix of coursePrefixes) {
    if (topicSlug.startsWith(prefix)) {
      return prefix
    }
  }
  return undefined
}
