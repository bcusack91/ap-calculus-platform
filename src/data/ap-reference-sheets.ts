/**
 * AP Exam Reference Sheet Data
 * 
 * Contains equations and formulas provided to students on each AP exam.
 * Modeled after the official College Board reference materials.
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
          'x̄ = (Σxᵢ)/n',
          'sₓ = √[Σ(xᵢ − x̄)²/(n − 1)]',
          'ŷ = b₀ + b₁x  (least-squares regression line)',
          'b₁ = r(sᵧ/sₓ)  ;  b₀ = ȳ − b₁x̄',
          'r = (1/(n−1)) Σ[(xᵢ − x̄)/sₓ][(yᵢ − ȳ)/sᵧ]',
          'r² = coefficient of determination',
          'Residual = observed − predicted = y − ŷ',
        ],
      },
      {
        title: 'Probability',
        items: [
          'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
          'P(A|B) = P(A ∩ B)/P(B)',
          'If A, B independent: P(A ∩ B) = P(A)·P(B)',
          'E(X) = μₓ = Σ xᵢ · P(xᵢ)',
          'Var(X) = σ²ₓ = Σ(xᵢ − μₓ)² · P(xᵢ)',
          'If X, Y independent: Var(X ± Y) = Var(X) + Var(Y)',
          'E(aX + b) = aE(X) + b  ;  Var(aX + b) = a²Var(X)',
        ],
      },
      {
        title: 'Binomial & Geometric Distributions',
        items: [
          'Binomial: P(X = k) = C(n,k) pᵏ(1−p)ⁿ⁻ᵏ',
          'μ = np  ;  σ = √(np(1−p))',
          'Geometric: P(X = k) = (1−p)ᵏ⁻¹ p',
          'μ = 1/p',
        ],
      },
      {
        title: 'Sampling Distributions',
        items: [
          'Mean of x̄: μ_x̄ = μ',
          'Std dev of x̄: σ_x̄ = σ/√n',
          'Mean of p̂: μ_p̂ = p',
          'Std dev of p̂: σ_p̂ = √[p(1−p)/n]',
        ],
      },
      {
        title: 'Confidence Intervals',
        items: [
          'One-sample z interval for μ: x̄ ± z* · (σ/√n)',
          'One-sample t interval for μ: x̄ ± t* · (s/√n)',
          'One-sample z interval for p: p̂ ± z* · √[p̂(1−p̂)/n]',
          'Two-sample t interval for μ₁−μ₂: (x̄₁−x̄₂) ± t* · √(s₁²/n₁ + s₂²/n₂)',
          'Two-sample z interval for p₁−p₂: (p̂₁−p̂₂) ± z* · √[p̂₁(1−p̂₁)/n₁ + p̂₂(1−p̂₂)/n₂]',
        ],
      },
      {
        title: 'Tests of Significance',
        items: [
          'One-sample z test: z = (x̄ − μ₀)/(σ/√n)',
          'One-sample t test: t = (x̄ − μ₀)/(s/√n)  ;  df = n − 1',
          'One-sample z test for p: z = (p̂ − p₀)/√[p₀(1−p₀)/n]',
          'Two-sample t test: t = (x̄₁−x̄₂)/√(s₁²/n₁ + s₂²/n₂)',
          'Paired t test: t = d̄/(s_d/√n)  ;  df = n − 1',
          'Chi-square test: χ² = Σ(O − E)²/E',
          'Chi-square df: (r−1)(c−1) for two-way tables; k−1 for GOF',
          'Linear regression t test: t = b₁/SE_b₁  ;  df = n − 2',
        ],
      },
      {
        title: 'Common z* and t* Values',
        items: [
          '90% confidence: z* = 1.645',
          '95% confidence: z* = 1.960',
          '99% confidence: z* = 2.576',
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
          'Ψ = Ψₚ + Ψₛ  (water potential = pressure potential + solute potential)',
          'Ψₛ = −iCRT',
          '  i = ionization constant',
          '  C = molar concentration',
          '  R = 0.0831 L·bar/(mol·K)',
          '  T = temperature in Kelvin (273 + °C)',
        ],
      },
      {
        title: 'Hardy-Weinberg Equilibrium',
        items: [
          'p + q = 1  (allele frequencies)',
          'p² + 2pq + q² = 1  (genotype frequencies)',
          'p² = frequency of homozygous dominant',
          '2pq = frequency of heterozygotes',
          'q² = frequency of homozygous recessive',
        ],
      },
      {
        title: 'Chi-Square Test',
        items: [
          'χ² = Σ (observed − expected)² / expected',
          'df = number of categories − 1',
          'If χ² > critical value → reject null hypothesis',
        ],
      },
      {
        title: 'Rate & Surface Area',
        items: [
          'Rate = ΔQuantity / ΔTime',
          'Surface Area of a Sphere = 4πr²',
          'Volume of a Sphere = (4/3)πr³',
          'Surface Area / Volume ratio decreases as cell size increases',
        ],
      },
      {
        title: 'Population Growth',
        items: [
          'dN/dt = B − D  (births − deaths)',
          'Exponential growth: dN/dt = rₘₐₓN',
          'Logistic growth: dN/dt = rₘₐₓN(K − N)/K',
          'K = carrying capacity',
          'rₘₐₓ = maximum per capita growth rate',
        ],
      },
      {
        title: 'Simpson\'s Diversity Index',
        items: [
          'Diversity Index = 1 − Σ(pᵢ)²',
          'pᵢ = proportion of total sample represented by species i',
          'Higher value = greater diversity',
        ],
      },
      {
        title: 'Gibbs Free Energy',
        items: [
          'ΔG = ΔH − TΔS',
          'ΔG < 0 → spontaneous (exergonic)',
          'ΔG > 0 → non-spontaneous (endergonic)',
          'ΔG = 0 → equilibrium',
        ],
      },
      {
        title: 'pH',
        items: [
          'pH = −log[H⁺]',
          'pH < 7 → acidic  ;  pH = 7 → neutral  ;  pH > 7 → basic',
        ],
      },
      {
        title: 'Dilution',
        items: [
          'C₁V₁ = C₂V₂',
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
          'v = v₀ + at',
          'x = x₀ + v₀t + ½at²',
          'v² = v₀² + 2a(x − x₀)',
          'x = x₀ + ½(v₀ + v)t',
          'a_c = v²/r  (centripetal acceleration)',
        ],
      },
      {
        title: 'Forces & Newton\'s Laws',
        items: [
          'F_net = ma  (Newton\'s Second Law)',
          'F_g = mg  (weight)',
          'f_s ≤ μₛN  (static friction)',
          'f_k = μₖN  (kinetic friction)',
          'F_spring = −kx  (Hooke\'s Law)',
          'F_g = Gm₁m₂/r²  (gravitational force)',
        ],
      },
      {
        title: 'Energy & Work',
        items: [
          'W = Fd cos θ',
          'KE = ½mv²',
          'PE_g = mgh',
          'PE_spring = ½kx²',
          'W_net = ΔKE  (work-energy theorem)',
          'P = W/t = Fv  (power)',
          'Conservation of energy: KE₁ + PE₁ = KE₂ + PE₂ (if no non-conservative work)',
        ],
      },
      {
        title: 'Momentum & Impulse',
        items: [
          'p = mv',
          'J = FΔt = Δp  (impulse-momentum theorem)',
          'Σp_before = Σp_after  (conservation of momentum)',
          'Elastic collision: KE is conserved',
          'Inelastic collision: KE is NOT conserved; objects may stick',
        ],
      },
      {
        title: 'Rotational Motion',
        items: [
          'τ = rF sin θ  (torque)',
          'τ_net = Iα',
          'L = Iω  (angular momentum)',
          'KE_rot = ½Iω²',
          'v = rω  ;  a = rα',
          'ω = ω₀ + αt  ;  θ = θ₀ + ω₀t + ½αt²',
          'I = Σmᵢrᵢ²  (moment of inertia)',
        ],
      },
      {
        title: 'Simple Harmonic Motion',
        items: [
          'T_pendulum = 2π√(L/g)',
          'T_spring = 2π√(m/k)',
          'x(t) = A cos(ωt + φ)  ;  ω = 2π/T',
        ],
      },
      {
        title: 'Waves & Sound',
        items: [
          'v = fλ',
          'f_beat = |f₁ − f₂|',
          'Open pipe: fₙ = nv/(2L)  (n = 1, 2, 3, …)',
          'Closed pipe: fₙ = nv/(4L)  (n = 1, 3, 5, …)',
        ],
      },
      {
        title: 'Electrostatics & Circuits',
        items: [
          'F_E = kq₁q₂/r²  (Coulomb\'s Law)',
          'I = ΔQ/Δt  (current)',
          'V = IR  (Ohm\'s Law)',
          'P = IV = I²R = V²/R',
          'Series: R_total = R₁ + R₂ + …',
          'Parallel: 1/R_total = 1/R₁ + 1/R₂ + …',
        ],
      },
      {
        title: 'Constants',
        items: [
          'g = 9.8 m/s²',
          'G = 6.674 × 10⁻¹¹ N·m²/kg²',
          'k = 8.99 × 10⁹ N·m²/C²',
          'e = 1.60 × 10⁻¹⁹ C',
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
          'P = F/A  (pressure)',
          'P = P₀ + ρgh  (fluid pressure at depth)',
          'F_buoyant = ρ_fluid · V_displaced · g  (Archimedes\' principle)',
          'A₁v₁ = A₂v₂  (continuity equation)',
          'P₁ + ½ρv₁² + ρgy₁ = P₂ + ½ρv₂² + ρgy₂  (Bernoulli\'s equation)',
        ],
      },
      {
        title: 'Thermodynamics',
        items: [
          'Q = mcΔT',
          'ΔU = Q − W  (first law)',
          'PV = nRT  (ideal gas law)',
          'W = PΔV  (work done by gas at constant pressure)',
          'KE_avg = (3/2)k_BT  (average kinetic energy per molecule)',
          'e = W/Q_H = 1 − Q_C/Q_H  (heat engine efficiency)',
          'e_Carnot = 1 − T_C/T_H  (Carnot efficiency)',
        ],
      },
      {
        title: 'Electrostatics',
        items: [
          'F_E = kq₁q₂/r²  ;  k = 1/(4πε₀)',
          'E = F/q  (electric field)',
          'E = kQ/r²  (point charge)',
          'V = kQ/r  (electric potential, point charge)',
          'UE = kq₁q₂/r  (electric potential energy)',
          'C = Q/V  ;  C = κε₀A/d  (parallel plate capacitor)',
          'U_C = ½QV = ½CV²  (energy in capacitor)',
        ],
      },
      {
        title: 'Circuits',
        items: [
          'I = ΔQ/Δt  ;  V = IR',
          'P = IV = I²R = V²/R',
          'Series: R_total = R₁ + R₂ + …  ;  1/C_total = 1/C₁ + 1/C₂ + …',
          'Parallel: 1/R_total = 1/R₁ + 1/R₂ + …  ;  C_total = C₁ + C₂ + …',
          'Kirchhoff\'s loop rule: ΣV = 0',
          'Kirchhoff\'s junction rule: ΣI_in = ΣI_out',
        ],
      },
      {
        title: 'Magnetism',
        items: [
          'F = qvB sin θ  (force on moving charge)',
          'F = BIL sin θ  (force on current-carrying wire)',
          'Φ_B = BA cos θ  (magnetic flux)',
          'EMF = −ΔΦ_B/Δt  (Faraday\'s law)',
        ],
      },
      {
        title: 'Optics',
        items: [
          'n₁ sin θ₁ = n₂ sin θ₂  (Snell\'s law)',
          'n = c/v  (index of refraction)',
          '1/f = 1/d_o + 1/d_i  (thin lens/mirror equation)',
          'M = −d_i/d_o = h_i/h_o  (magnification)',
          'sin θ_c = n₂/n₁  (critical angle for total internal reflection)',
        ],
      },
      {
        title: 'Modern Physics',
        items: [
          'E = hf  ;  E = hc/λ',
          'KE_max = hf − φ  (photoelectric effect)',
          'E = mc²',
          'λ = h/p  (de Broglie wavelength)',
        ],
      },
      {
        title: 'Constants',
        items: [
          'g = 9.8 m/s²',
          'G = 6.674 × 10⁻¹¹ N·m²/kg²',
          'k = 8.99 × 10⁹ N·m²/C²  ;  ε₀ = 8.85 × 10⁻¹² C²/(N·m²)',
          'e = 1.60 × 10⁻¹⁹ C',
          'h = 6.63 × 10⁻³⁴ J·s',
          'c = 3.00 × 10⁸ m/s',
          'k_B = 1.38 × 10⁻²³ J/K',
          'R = 8.314 J/(mol·K)',
          'N_A = 6.02 × 10²³ mol⁻¹',
          '1 atm = 1.013 × 10⁵ Pa',
          '1 eV = 1.60 × 10⁻¹⁹ J',
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
          'v = dx/dt  ;  a = dv/dt = d²x/dt²',
          'x = x₀ + v₀t + ½at²  (constant a)',
          'v = v₀ + at  ;  v² = v₀² + 2a(x − x₀)',
          'a_c = v²/r = ω²r',
        ],
      },
      {
        title: 'Newton\'s Laws & Forces',
        items: [
          'ΣF = ma = dp/dt',
          'F_g = −Gm₁m₂/r² r̂',
          'f ≤ μN  ;  F_spring = −kx',
          'F_drag ∝ v or v²',
        ],
      },
      {
        title: 'Work, Energy & Power',
        items: [
          'W = ∫ F · dr',
          'KE = ½mv²  ;  W_net = ΔKE',
          'U_g = mgh  ;  U_g = −Gm₁m₂/r',
          'U_spring = ½kx²',
          'F = −dU/dx  (conservative force)',
          'P = dW/dt = F · v',
        ],
      },
      {
        title: 'Momentum & Collisions',
        items: [
          'p = mv  ;  J = ∫ F dt = Δp',
          'Center of mass: x_cm = Σmᵢxᵢ / Σmᵢ',
          'v_cm = Σmᵢvᵢ / Σmᵢ',
        ],
      },
      {
        title: 'Rotation',
        items: [
          'τ = r × F  ;  |τ| = rF sin θ',
          'Στ = Iα',
          'I = ∫ r² dm  ;  I = I_cm + Md²  (parallel axis)',
          'L = Iω  ;  τ = dL/dt',
          'KE_rot = ½Iω²  ;  KE_total = ½mv_cm² + ½I_cmω²',
          'v = rω  ;  a_t = rα',
        ],
      },
      {
        title: 'Oscillations',
        items: [
          'x(t) = A cos(ωt + φ)',
          'ω = √(k/m)  (mass-spring)  ;  ω = √(g/L)  (pendulum, small angle)',
          'T = 2π/ω  ;  f = 1/T',
          'E = ½kA²  (total energy in SHM)',
        ],
      },
      {
        title: 'Gravitation',
        items: [
          'F = Gm₁m₂/r²',
          'g = GM/R²',
          'U_g = −Gm₁m₂/r',
          'v_orbit = √(GM/r)  ;  T² = (4π²/GM)r³  (Kepler\'s 3rd law)',
        ],
      },
      {
        title: 'Constants',
        items: [
          'g = 9.8 m/s²',
          'G = 6.67 × 10⁻¹¹ N·m²/kg²',
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
          'F = kq₁q₂/r²  ;  k = 1/(4πε₀)',
          'E = F/q₀  ;  E = kQ/r²  (point charge)',
          '∮ E · dA = Q_enc/ε₀  (Gauss\'s law)',
          'V = −∫ E · dr  ;  E = −dV/dr',
          'V = kQ/r  (point charge)',
          'U = qV = kq₁q₂/r',
        ],
      },
      {
        title: 'Conductors & Capacitors',
        items: [
          'C = Q/V  ;  C = κε₀A/d  (parallel plate)',
          'U = ½QV = ½CV² = Q²/(2C)',
          'u = ½ε₀E²  (energy density)',
          'Series: 1/C_eq = 1/C₁ + 1/C₂ + …',
          'Parallel: C_eq = C₁ + C₂ + …',
        ],
      },
      {
        title: 'Circuits',
        items: [
          'I = dQ/dt  ;  V = IR  ;  P = IV',
          'Series R: R_eq = R₁ + R₂ + …',
          'Parallel R: 1/R_eq = 1/R₁ + 1/R₂ + …',
          'Kirchhoff: ΣV_loop = 0  ;  ΣI_junction = 0',
          'RC circuit: Q(t) = Q₀(1 − e^(−t/RC))  (charging)',
          'RC circuit: Q(t) = Q₀e^(−t/RC)  (discharging)',
          'τ = RC  (time constant)',
        ],
      },
      {
        title: 'Magnetism',
        items: [
          'F = qv × B  ;  |F| = qvB sin θ',
          'F = IL × B  ;  |F| = BIL sin θ',
          'dB = (μ₀/4π)(I dl × r̂)/r²  (Biot-Savart)',
          '∮ B · dl = μ₀I_enc  (Ampère\'s law)',
          'B_solenoid = μ₀nI  ;  B_wire = μ₀I/(2πr)',
          'Φ_B = ∫ B · dA',
        ],
      },
      {
        title: 'Electromagnetic Induction',
        items: [
          'EMF = −dΦ_B/dt  (Faraday\'s law)',
          'EMF = BLv  (motional EMF)',
          'L = NΦ_B/I  ;  EMF = −L dI/dt  (self-inductance)',
          'U_L = ½LI²  (energy in inductor)',
          'u_B = B²/(2μ₀)  (magnetic energy density)',
          'LR circuit: I(t) = (V/R)(1 − e^(−Rt/L))',
          'τ = L/R',
        ],
      },
      {
        title: 'Maxwell\'s Equations (integral form)',
        items: [
          '∮ E · dA = Q_enc/ε₀  (Gauss — electric)',
          '∮ B · dA = 0  (Gauss — magnetic)',
          '∮ E · dl = −dΦ_B/dt  (Faraday)',
          '∮ B · dl = μ₀I + μ₀ε₀ dΦ_E/dt  (Ampère-Maxwell)',
        ],
      },
      {
        title: 'Constants',
        items: [
          'k = 8.99 × 10⁹ N·m²/C²',
          'ε₀ = 8.85 × 10⁻¹² C²/(N·m²)',
          'μ₀ = 4π × 10⁻⁷ T·m/A',
          'e = 1.60 × 10⁻¹⁹ C',
          'c = 3.00 × 10⁸ m/s',
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
          'Mean = Σx / n',
          'Median = middle value when data is ordered',
          'Mode = most frequently occurring value',
          'Range = max − min',
          'Standard deviation: measure of spread around the mean',
          'Normal distribution: 68% within ±1 SD, 95% within ±2 SD, 99.7% within ±3 SD',
          'Correlation coefficient r: −1 to +1 (strength & direction)',
          'Correlation ≠ causation',
          'Statistical significance: p < 0.05 conventionally',
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
          'Weber\'s Law: ΔI/I = k (JND is proportional to stimulus intensity)',
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
          'Sensory → Short-term (7±2 items, ~30 sec) → Long-term',
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
          'Polynomial: f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀',
          'End behavior determined by leading term aₙxⁿ',
          'Rational zeros theorem: possible zeros = ±(factors of a₀)/(factors of aₙ)',
          'Remainder theorem: f(c) = remainder when f(x) is divided by (x − c)',
        ],
      },
      {
        title: 'Exponential & Logarithmic Functions',
        items: [
          'y = abˣ  (exponential)  ;  y = a·eᵏˣ',
          'logₐ(b) = c  ⟺  aᶜ = b',
          'ln(xy) = ln x + ln y  ;  ln(x/y) = ln x − ln y',
          'ln(xⁿ) = n ln x',
          'Change of base: logₐ(b) = ln b / ln a',
          'Half-life: t₁/₂ = ln 2 / k',
          'Doubling time: t_d = ln 2 / k',
        ],
      },
      {
        title: 'Trigonometric Functions',
        items: [
          'sin²θ + cos²θ = 1',
          '1 + tan²θ = sec²θ  ;  1 + cot²θ = csc²θ',
          'sin(A ± B) = sin A cos B ± cos A sin B',
          'cos(A ± B) = cos A cos B ∓ sin A sin B',
          'tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)',
          'sin 2θ = 2 sin θ cos θ',
          'cos 2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ',
          'Law of Sines: a/sin A = b/sin B = c/sin C',
          'Law of Cosines: c² = a² + b² − 2ab cos C',
          'Area = ½ab sin C',
        ],
      },
      {
        title: 'Polar & Parametric',
        items: [
          'x = r cos θ  ;  y = r sin θ',
          'r = √(x² + y²)  ;  tan θ = y/x',
          'Parametric: x = f(t), y = g(t)',
          'dy/dx = (dy/dt)/(dx/dt)',
        ],
      },
      {
        title: 'Sequences & Series',
        items: [
          'Arithmetic: aₙ = a₁ + (n−1)d  ;  Sₙ = n(a₁ + aₙ)/2',
          'Geometric: aₙ = a₁·rⁿ⁻¹  ;  Sₙ = a₁(1 − rⁿ)/(1 − r)',
          'Infinite geometric: S = a₁/(1 − r)  for |r| < 1',
        ],
      },
      {
        title: 'Key Values',
        items: [
          'Unit circle: π/6 (30°), π/4 (45°), π/3 (60°), π/2 (90°)',
          'sin(π/6) = ½  ;  sin(π/4) = √2/2  ;  sin(π/3) = √3/2',
          'cos(π/6) = √3/2  ;  cos(π/4) = √2/2  ;  cos(π/3) = ½',
          '1 radian = 180°/π ≈ 57.3°  ;  π radians = 180°',
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
 */
export function hasReferenceSheet(courseSlug: string): boolean {
  return courseSlug in AP_REFERENCE_SHEETS
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
