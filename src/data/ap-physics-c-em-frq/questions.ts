// AP Physics C: Electricity & Magnetism — Free Response Questions
// Calculus-based FRQs covering all 5 units

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

export interface PhysicsCEMFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: number
  calculatorAllowed: boolean
  dataTableHtml?: string
}

// ─────────────────────────────────────────────
// LONG FRQs (5 questions, 10 pts each, 25 min)
// ─────────────────────────────────────────────

const longFRQs: PhysicsCEMFRQ[] = [
  // ── em-long-1: Gauss's Law (Unit 1) ──
  {
    id: 'em-long-1',
    type: 'long',
    unit: 1,
    title: "Gauss's Law — Non-Uniform Spherical Charge",
    prompt:
      'A solid insulating sphere of radius R carries a volume charge density ρ(r) = ρ₀(r/R), where ρ₀ is a positive constant and r is the distance from the center of the sphere. The sphere is surrounded by vacuum.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using Gauss\'s law, derive an expression for the electric field E(r) for r ≤ R. Express your answer in terms of ρ₀, r, R, and ε₀.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Correctly identifies a spherical Gaussian surface of radius r and writes Gauss\'s law: ∮ E⃗·dA⃗ = Q_enc/ε₀',
            keywords: ['gaussian surface', 'sphere', 'gauss', 'enclosed charge', 'symmetry']
          },
          {
            points: 1,
            description: 'Correctly computes Q_enc by integrating ρ(r\') over the volume: Q_enc = ∫₀ʳ ρ₀(r\'/R)·4πr\'² dr\' = πρ₀r⁴/R',
            keywords: ['integral', 'volume', 'charge density', 'r^4', 'ρ₀']
          },
          {
            points: 1,
            description: 'Solves for E: E(4πr²) = πρ₀r⁴/(Rε₀), giving E = ρ₀r²/(4ε₀R)',
            keywords: ['E =', 'r²', '4ε₀R', 'electric field']
          }
        ],
        sampleAnswer:
          'Choose a spherical Gaussian surface of radius r (r ≤ R) centered at the sphere.\n\nBy symmetry, E⃗ is radial and constant on this surface:\n∮ E⃗·dA⃗ = E(4πr²)\n\nThe enclosed charge is:\nQ_enc = ∫₀ʳ ρ₀(r\'/R) · 4πr\'² dr\' = (4πρ₀/R) ∫₀ʳ r\'³ dr\' = (4πρ₀/R)(r⁴/4) = πρ₀r⁴/R\n\nApplying Gauss\'s law:\nE(4πr²) = πρ₀r⁴/(Rε₀)\n\nE(r) = ρ₀r²/(4ε₀R)  (directed radially outward)'
      },
      {
        label: '(b)',
        prompt:
          'Derive an expression for the electric field E(r) for r > R.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Computes total charge Q_total = πρ₀R³ by integrating ρ(r) over the full sphere',
            keywords: ['total charge', 'Q_total', 'πρ₀R³', 'integral', 'R']
          },
          {
            points: 1,
            description: 'Writes E = Q_total/(4πε₀r²) = ρ₀R³/(4ε₀r²)',
            keywords: ['1/r²', 'point charge', 'ρ₀R³', 'outside']
          }
        ],
        sampleAnswer:
          'For r > R, the Gaussian surface encloses the entire sphere.\n\nQ_total = ∫₀ᴿ ρ₀(r\'/R)·4πr\'² dr\' = (4πρ₀/R)(R⁴/4) = πρ₀R³\n\nGauss\'s law: E(4πr²) = πρ₀R³/ε₀\n\nE(r) = ρ₀R³/(4ε₀r²)  (radially outward)\n\nThis is equivalent to a point charge Q = πρ₀R³ at the origin.'
      },
      {
        label: '(c)',
        prompt:
          'Derive an expression for the electric potential V(r) at a point r < R, taking V = 0 at infinity.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Correctly sets up V(r) = −∫_∞^r E·dr, splitting the integral at R',
            keywords: ['potential', 'integral', 'negative', 'split', 'infinity']
          },
          {
            points: 1,
            description: 'Computes the contribution from ∞ to R: V₁ = ρ₀R²/(4ε₀)',
            keywords: ['V₁', 'outside', 'ρ₀R²/(4ε₀)']
          },
          {
            points: 1,
            description: 'Computes the contribution from R to r and combines: V(r) = ρ₀R²/(4ε₀) − ρ₀(r³ − R³)/(12ε₀R) or equivalent simplified form',
            keywords: ['inside', 'r³', '12ε₀R', 'combine']
          }
        ],
        sampleAnswer:
          'V(r) = −∫_∞^r E·dr\' = −∫_∞^R E_outside dr\' − ∫_R^r E_inside dr\'\n\nFirst integral (∞ to R):\n−∫_∞^R [ρ₀R³/(4ε₀r\'²)] dr\' = ρ₀R³/(4ε₀) · [1/r\']_∞^R = ρ₀R²/(4ε₀)\n\nSecond integral (R to r):\n−∫_R^r [ρ₀r\'²/(4ε₀R)] dr\' = −ρ₀/(4ε₀R) · [r\'³/3]_R^r = −ρ₀(r³ − R³)/(12ε₀R)\n\nV(r) = ρ₀R²/(4ε₀) − ρ₀(r³ − R³)/(12ε₀R)\n     = ρ₀/(12ε₀R) [3R³ − r³ + R³]\n     = ρ₀(4R³ − r³)/(12ε₀R)'
      },
      {
        label: '(d)',
        prompt:
          'On the axes below, sketch E(r) vs r and V(r) vs r for 0 ≤ r ≤ 3R. Indicate any maximum or minimum values on each graph.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'E(r): parabolic increase (∝ r²) for r < R, then drops as 1/r² for r > R; continuous at r = R with value ρ₀R/(4ε₀)',
            keywords: ['parabola', 'r²', '1/r²', 'continuous', 'maximum at R']
          },
          {
            points: 1,
            description: 'V(r): monotonically decreasing from V(0) = ρ₀R²/(3ε₀) toward 0 as r → ∞; continuous and smooth at r = R',
            keywords: ['decreasing', 'continuous', 'V(0)', 'smooth']
          }
        ],
        sampleAnswer:
          'E(r) vs r:\n• For 0 ≤ r ≤ R: E increases as r² (parabolic), reaching E_max = ρ₀R/(4ε₀) at r = R.\n• For r > R: E decreases as 1/r².\n• E is continuous at r = R.\n\nV(r) vs r:\n• V(0) = ρ₀R²/(3ε₀) (maximum value).\n• V decreases monotonically: for r < R it decreases (cubic shape), for r > R it falls as 1/r.\n• V is continuous and differentiable at r = R.\n• V → 0 as r → ∞.'
      }
    ]
  },

  // ── em-long-2: Capacitors + Energy (Unit 2) ──
  {
    id: 'em-long-2',
    type: 'long',
    unit: 2,
    title: 'Parallel-Plate Capacitor with Dielectric Slab',
    prompt:
      'A parallel-plate capacitor has plates of area A separated by a distance d. The capacitor is charged to a voltage V₀ by a battery, which is then disconnected. A slab of dielectric material with dielectric constant κ and thickness t (t < d) is then inserted between the plates.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the capacitance of the system after the dielectric slab is inserted.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Models the system as two capacitors in series: dielectric region (thickness t) and air gap (thickness d − t)',
            keywords: ['series', 'two capacitors', 'air gap', 'dielectric region']
          },
          {
            points: 1,
            description: 'Writes C_dielectric = κε₀A/t and C_air = ε₀A/(d − t)',
            keywords: ['κε₀A/t', 'ε₀A/(d−t)', 'capacitance']
          },
          {
            points: 1,
            description: 'Combines in series: 1/C = t/(κε₀A) + (d−t)/(ε₀A) → C = κε₀A/(κ(d−t)+t)',
            keywords: ['1/C', 'series combination', 'κε₀A', 'κ(d−t)+t']
          }
        ],
        sampleAnswer:
          'Treat the system as two capacitors in series:\n\nC₁ (dielectric slab): C₁ = κε₀A/t\nC₂ (air gap):         C₂ = ε₀A/(d − t)\n\n1/C = 1/C₁ + 1/C₂ = t/(κε₀A) + (d − t)/(ε₀A)\n    = [t + κ(d − t)]/(κε₀A)\n\nC = κε₀A / [κ(d − t) + t]'
      },
      {
        label: '(b)',
        prompt:
          'Find the new voltage across the capacitor after the dielectric is inserted. The battery remains disconnected.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Recognizes that charge Q is conserved (battery disconnected): Q = C₀V₀ = ε₀AV₀/d',
            keywords: ['charge conserved', 'Q = C₀V₀', 'battery disconnected']
          },
          {
            points: 1,
            description: 'Writes V_new = Q/C_new = V₀[κ(d−t)+t]/(κd)',
            keywords: ['V_new', 'Q/C', 'voltage decreases']
          }
        ],
        sampleAnswer:
          'Since the battery is disconnected, charge is conserved:\nQ = C₀V₀ = (ε₀A/d)V₀\n\nNew voltage:\nV_new = Q/C_new = (ε₀AV₀/d) · [κ(d−t)+t]/(κε₀A)\n      = V₀[κ(d−t)+t]/(κd)\n\nSince κ > 1 and t < d, V_new < V₀: the voltage decreases.'
      },
      {
        label: '(c)',
        prompt:
          'Derive expressions for the energy stored in the capacitor before and after the dielectric is inserted. Does the energy increase, decrease, or stay the same? Explain physically.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Before: U₀ = ½C₀V₀² = ε₀AV₀²/(2d)',
            keywords: ['U₀', '½CV²', 'ε₀AV₀²/(2d)', 'before']
          },
          {
            points: 1,
            description: 'After: U = Q²/(2C_new) and correctly simplifies; U < U₀',
            keywords: ['Q²/(2C)', 'U_new', 'energy decreases', 'after']
          },
          {
            points: 1,
            description: 'Physical explanation: the dielectric is pulled in by the fringe field; the work done pulling it in accounts for the decrease in stored energy',
            keywords: ['fringe field', 'work', 'pulled in', 'force', 'mechanical']
          }
        ],
        sampleAnswer:
          'Before insertion:\nU₀ = ½C₀V₀² = ε₀AV₀²/(2d)\n\nAfter insertion (using U = Q²/(2C) since Q is constant):\nU = Q²/(2C_new) = (ε₀AV₀/d)² / [2 · κε₀A/(κ(d−t)+t)]\n  = ε₀AV₀²[κ(d−t)+t]/(2κd²)\n\nCompare: U/U₀ = [κ(d−t)+t]/(κd)\nSince κ > 1 and t > 0: κ(d−t)+t = κd − (κ−1)t < κd, so U < U₀.\n\nThe energy decreases because the fringe electric field exerts an attractive force on the dielectric, doing positive work pulling it in. This mechanical work done by the field reduces the stored electrical energy.'
      },
      {
        label: '(d)',
        prompt:
          'Now suppose the battery remains connected (at V₀) when the dielectric is inserted. How does the charge on the plates change? Does the battery do positive or negative work?',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'With battery connected, V = V₀ is fixed; C increases so Q = CV₀ increases; additional charge flows from battery',
            keywords: ['voltage fixed', 'charge increases', 'battery connected', 'C increases']
          },
          {
            points: 1,
            description: 'Battery does positive work: W_batt = ΔQ · V₀ > 0; both stored energy and mechanical work come from the battery',
            keywords: ['positive work', 'W_batt', 'ΔQ·V₀', 'battery supplies']
          }
        ],
        sampleAnswer:
          'With the battery connected, V = V₀ remains constant.\n\nNew capacitance C_new > C₀, so:\nQ_new = C_new · V₀ > C₀V₀ = Q₀\n\nThe charge on the plates increases; additional charge ΔQ = (C_new − C₀)V₀ flows from the battery.\n\nThe battery does positive work:\nW_batt = ΔQ · V₀ = (C_new − C₀)V₀² > 0\n\nThis work supplies both the increase in stored energy (ΔU = ½(C_new − C₀)V₀²) and the mechanical work done pulling in the dielectric. Energy is conserved: W_batt = ΔU + W_mech.'
      }
    ]
  },

  // ── em-long-3: RC Circuits (Unit 3) ──
  {
    id: 'em-long-3',
    type: 'long',
    unit: 3,
    title: 'RC Circuit — Charging and Discharging',
    prompt:
      'A circuit consists of a battery of emf ε, a resistor of resistance R, a capacitor of capacitance C, and a switch S, all connected in series. At time t = 0 the capacitor is uncharged and the switch is closed.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using Kirchhoff\'s voltage law, write the differential equation for the charge q(t) on the capacitor. Solve this differential equation to find q(t) and the current i(t).',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Writes Kirchhoff\'s loop: ε − iR − q/C = 0, with i = dq/dt',
            keywords: ['Kirchhoff', 'loop', 'ε − iR − q/C', 'dq/dt']
          },
          {
            points: 1,
            description: 'Rearranges to standard form: dq/dt + q/(RC) = ε/R',
            keywords: ['differential equation', 'dq/dt', 'RC', 'first order', 'linear']
          },
          {
            points: 1,
            description: 'Solves: q(t) = Cε(1 − e^(−t/(RC)))',
            keywords: ['q(t)', 'Cε', '1 − e^(−t/RC)', 'exponential']
          },
          {
            points: 1,
            description: 'Derives i(t) = dq/dt = (ε/R)e^(−t/(RC))',
            keywords: ['i(t)', 'ε/R', 'e^(−t/RC)', 'derivative', 'current']
          }
        ],
        sampleAnswer:
          'Apply Kirchhoff\'s voltage law around the loop:\nε − iR − q/C = 0\n\nSince i = dq/dt:\nε − R(dq/dt) − q/C = 0\ndq/dt + q/(RC) = ε/R\n\nThis is a first-order linear ODE. The integrating factor is e^(t/(RC)).\n\nMultiply: d/dt[q · e^(t/(RC))] = (ε/R)e^(t/(RC))\n\nIntegrate: q · e^(t/(RC)) = Cε · e^(t/(RC)) + A\nWith q(0) = 0: 0 = Cε + A → A = −Cε\n\nq(t) = Cε(1 − e^(−t/(RC)))\n\ni(t) = dq/dt = (ε/R)e^(−t/(RC))\n\nAt t = 0: i = ε/R (maximum). As t → ∞: q → Cε, i → 0.'
      },
      {
        label: '(b)',
        prompt:
          'After the capacitor is fully charged, the battery is removed and the circuit is reconnected so the capacitor discharges through R. Derive the voltage across the capacitor V_C(t) during discharge, taking the new t = 0 when discharge begins.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Sets up discharge loop: V_C + iR = 0 or q/C + R(dq/dt) = 0',
            keywords: ['discharge', 'q/C', 'dq/dt', 'homogeneous']
          },
          {
            points: 1,
            description: 'Solves: q(t) = Cε · e^(−t/(RC)), so V_C(t) = ε · e^(−t/(RC))',
            keywords: ['exponential decay', 'e^(−t/RC)', 'V_C', 'ε·e^(−t/RC)']
          },
          {
            points: 1,
            description: 'Identifies τ = RC as the time constant; at t = τ, V_C = ε/e ≈ 0.368ε',
            keywords: ['time constant', 'τ = RC', '1/e', '0.368', '63%']
          }
        ],
        sampleAnswer:
          'For the discharge circuit (no battery):\nq/C + R(dq/dt) = 0\ndq/dt = −q/(RC)\n\nSeparate and integrate:\n∫ dq/q = −∫ dt/(RC)\nln q = −t/(RC) + const\n\nWith q(0) = Cε:\nq(t) = Cε · e^(−t/(RC))\n\nV_C(t) = q(t)/C = ε · e^(−t/(RC))\n\nThe time constant is τ = RC.\nAt t = τ: V_C = ε · e⁻¹ ≈ 0.368ε (the voltage has dropped to ~36.8% of its initial value).'
      },
      {
        label: '(c)',
        prompt:
          'During the charging phase, derive an expression for the total energy dissipated in the resistor as t → ∞. Compare this to the energy stored in the capacitor and account for any difference.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Sets up energy dissipated: W_R = ∫₀^∞ i²R dt = ∫₀^∞ (ε²/R)e^(−2t/(RC)) dt',
            keywords: ['integral', 'i²R', 'power', 'dissipated']
          },
          {
            points: 1,
            description: 'Evaluates: W_R = (ε²/R)(RC/2) = ½Cε²',
            keywords: ['½Cε²', 'W_R', 'energy in resistor']
          },
          {
            points: 1,
            description: 'Notes energy stored U_C = ½Cε², so W_R = U_C; total energy from battery = εQ = Cε² = 2U_C; exactly half is dissipated, half stored',
            keywords: ['half', 'battery', 'Cε²', 'conservation', 'equal']
          }
        ],
        sampleAnswer:
          'Power dissipated in resistor: P = i²R = (ε²/R)e^(−2t/(RC))\n\nTotal energy dissipated:\nW_R = ∫₀^∞ (ε²/R)e^(−2t/(RC)) dt = (ε²/R) · [−RC/2 · e^(−2t/(RC))]₀^∞\n    = (ε²/R)(RC/2) = ½Cε²\n\nEnergy stored in capacitor: U_C = ½Cε²\n\nTotal energy from battery: W_batt = εQ = ε(Cε) = Cε²\n\nCheck: W_R + U_C = ½Cε² + ½Cε² = Cε² = W_batt ✓\n\nExactly half of the energy supplied by the battery is dissipated as heat in the resistor, regardless of the value of R. The other half is stored in the electric field of the capacitor.'
      }
    ]
  },

  // ── em-long-4: Ampère's Law (Unit 4) ──
  {
    id: 'em-long-4',
    type: 'long',
    unit: 4,
    title: "Ampère's Law — Coaxial Cable",
    prompt:
      'A long coaxial cable consists of a solid inner conductor of radius a carrying current I uniformly distributed over its cross-section (out of the page), and a thin outer conducting shell of radius b carrying current I in the opposite direction (into the page). The region a < r < b is vacuum.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          "Use Ampère's law to find the magnetic field B(r) for r < a (inside the inner conductor).",
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Chooses a circular Amperian loop of radius r < a; invokes symmetry so B is tangential and constant on the loop',
            keywords: ['Amperian loop', 'circle', 'symmetry', 'tangential']
          },
          {
            points: 1,
            description: 'Computes enclosed current: I_enc = I(r²/a²) using uniform current density J = I/(πa²)',
            keywords: ['enclosed current', 'r²/a²', 'current density', 'J']
          },
          {
            points: 1,
            description: 'Solves: B(2πr) = μ₀I(r²/a²) → B = μ₀Ir/(2πa²)',
            keywords: ['B =', 'μ₀Ir/(2πa²)', 'linear in r']
          }
        ],
        sampleAnswer:
          'Choose a circular Amperian loop of radius r < a, coaxial with the cable.\n\nBy symmetry, B⃗ is tangential and constant on this loop:\n∮ B⃗·dl⃗ = B(2πr)\n\nThe current density is J = I/(πa²).\nEnclosed current: I_enc = J · πr² = I(r²/a²)\n\nAmpère\'s law: B(2πr) = μ₀I(r²/a²)\n\nB(r) = μ₀Ir/(2πa²)  (tangential, in the direction given by the right-hand rule)\n\nThe field increases linearly from 0 at r = 0 to μ₀I/(2πa) at r = a.'
      },
      {
        label: '(b)',
        prompt:
          'Find B(r) for a < r < b (between the conductors).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Enclosed current is I (full inner conductor, no outer shell): I_enc = I',
            keywords: ['I_enc = I', 'full current', 'inner conductor']
          },
          {
            points: 1,
            description: 'B = μ₀I/(2πr)',
            keywords: ['μ₀I/(2πr)', '1/r', 'same as long wire']
          }
        ],
        sampleAnswer:
          'For a < r < b, the Amperian loop encloses the entire inner conductor (current I out of page) but none of the outer shell.\n\nI_enc = I\n\nB(2πr) = μ₀I\nB(r) = μ₀I/(2πr)\n\nThis is identical to the field of a long straight wire — the field falls off as 1/r.'
      },
      {
        label: '(c)',
        prompt:
          'Find B(r) for r > b (outside the cable). Explain your result.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'I_enc = I − I = 0 (inner and outer currents cancel)',
            keywords: ['cancel', 'I_enc = 0', 'net current zero']
          },
          {
            points: 1,
            description: 'B = 0 for r > b; explains that the coaxial geometry shields external fields',
            keywords: ['B = 0', 'shielding', 'no external field']
          }
        ],
        sampleAnswer:
          'For r > b, the Amperian loop encloses both conductors:\nI_enc = I (out) + I (in) = 0\n\nAmpère\'s law: B(2πr) = μ₀ · 0 = 0\nB(r) = 0\n\nThe equal and opposite currents produce no net magnetic field outside the cable. This is the principle behind coaxial cable shielding — no magnetic (or electric) interference is produced externally.'
      },
      {
        label: '(d)',
        prompt:
          'Derive an expression for the magnetic energy stored per unit length in the region between the conductors (a < r < b).',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Uses energy density u = B²/(2μ₀) with B = μ₀I/(2πr)',
            keywords: ['energy density', 'B²/(2μ₀)', 'u']
          },
          {
            points: 1,
            description: 'Sets up integral: U/L = ∫ₐᵇ [B²/(2μ₀)] · 2πr dr (over cylindrical shell)',
            keywords: ['integral', '2πr dr', 'cylindrical', 'per unit length']
          },
          {
            points: 1,
            description: 'Evaluates: U/L = (μ₀I²/(4π)) ln(b/a)',
            keywords: ['μ₀I²/(4π)', 'ln(b/a)', 'logarithm']
          }
        ],
        sampleAnswer:
          'The magnetic energy density is u = B²/(2μ₀).\n\nIn the region a < r < b: B = μ₀I/(2πr)\nu = μ₀I²/(8π²r²)\n\nFor a cylindrical shell of length L, thickness dr:\ndV = 2πr · L · dr\n\nEnergy per unit length:\nU/L = ∫ₐᵇ u · 2πr dr = ∫ₐᵇ [μ₀I²/(8π²r²)] · 2πr dr\n    = (μ₀I²/(4π)) ∫ₐᵇ dr/r\n    = (μ₀I²/(4π)) ln(b/a)\n\nNote: This can also be written as U/L = ½LI² with inductance per unit length L/L = (μ₀/(2π)) ln(b/a).'
      }
    ]
  },

  // ── em-long-5: Faraday's Law + Inductance (Unit 5) ──
  {
    id: 'em-long-5',
    type: 'long',
    unit: 5,
    title: "Faraday's Law and Mutual Inductance",
    prompt:
      'A long solenoid has n turns per unit length, radius R, and carries a time-varying current I(t) = I₀ sin(ωt). A circular conducting loop of radius r (r > R) is placed coaxially around the solenoid in a plane perpendicular to its axis. The loop has total resistance R_loop.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the magnetic flux Φ through the loop as a function of time.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'States B inside solenoid: B = μ₀nI(t) = μ₀nI₀ sin(ωt); B = 0 outside the solenoid',
            keywords: ['B = μ₀nI', 'solenoid', 'inside', 'outside zero']
          },
          {
            points: 1,
            description: 'Recognizes that flux through loop uses the solenoid cross-section πR², not the loop area πr²',
            keywords: ['πR²', 'solenoid area', 'not πr²', 'flux area']
          },
          {
            points: 1,
            description: 'Φ(t) = μ₀nI₀πR² sin(ωt)',
            keywords: ['Φ(t)', 'μ₀nI₀πR²', 'sin(ωt)']
          }
        ],
        sampleAnswer:
          'Inside the solenoid: B = μ₀nI(t) = μ₀nI₀ sin(ωt)\nOutside the solenoid: B ≈ 0\n\nThe magnetic flux through the external loop is determined only by the field inside the solenoid cross-section:\n\nΦ(t) = B · πR² = μ₀nI₀πR² sin(ωt)\n\nKey point: we use πR² (solenoid radius), not πr² (loop radius), because B = 0 for r\' > R.'
      },
      {
        label: '(b)',
        prompt:
          "Using Faraday's law, find the induced emf and the induced current in the loop.",
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Applies Faraday\'s law: ε = −dΦ/dt',
            keywords: ['Faraday', 'dΦ/dt', 'emf', 'induced']
          },
          {
            points: 1,
            description: 'Differentiates: ε = −μ₀nI₀πR²ω cos(ωt)',
            keywords: ['cos(ωt)', 'ω', 'derivative', 'μ₀nI₀πR²ω']
          },
          {
            points: 1,
            description: 'Current: i(t) = ε/R_loop = −μ₀nI₀πR²ω cos(ωt)/R_loop',
            keywords: ['i(t)', 'ε/R_loop', 'current', 'Ohm']
          },
          {
            points: 1,
            description: 'Correctly applies Lenz\'s law: current direction opposes the change in flux',
            keywords: ['Lenz', 'opposes', 'change in flux', 'direction']
          }
        ],
        sampleAnswer:
          'Faraday\'s law: ε = −dΦ/dt = −d/dt[μ₀nI₀πR² sin(ωt)]\n\nε(t) = −μ₀nI₀πR²ω cos(ωt)\n\nThe magnitude of the peak emf is ε₀ = μ₀nI₀πR²ω.\n\nInduced current:\ni(t) = ε(t)/R_loop = −(μ₀nI₀πR²ω/R_loop) cos(ωt)\n\nBy Lenz\'s law, when the solenoid flux is increasing (dΦ/dt > 0), the induced current flows in the direction to create a flux opposing the increase — i.e., the induced current creates a field opposing B_solenoid through the loop.'
      },
      {
        label: '(c)',
        prompt:
          'Derive the mutual inductance M between the solenoid and the loop. If n = 1000 turns/m, R = 0.03 m, and I₀ = 2 A, calculate M.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Defines M via Φ_loop = MI: so M = Φ/I = μ₀nπR²',
            keywords: ['M = Φ/I', 'mutual inductance', 'μ₀nπR²']
          },
          {
            points: 1,
            description: 'Notes M is independent of the loop radius r (as long as r > R) and independent of I₀',
            keywords: ['independent', 'loop radius', 'r > R']
          },
          {
            points: 1,
            description: 'Calculates M = (4π × 10⁻⁷)(1000)π(0.03)² ≈ 3.55 × 10⁻⁶ H ≈ 3.55 μH',
            keywords: ['3.55', 'μH', '10⁻⁶', 'calculation']
          }
        ],
        sampleAnswer:
          'Mutual inductance is defined by Φ_loop = M · I.\n\nM = Φ/I = μ₀nπR²\n\nNote: M depends only on the solenoid geometry (n, R), not on the loop radius r (as long as r > R so the loop encloses all the flux). M is also independent of the current.\n\nNumerical calculation:\nM = (4π × 10⁻⁷ T·m/A)(1000 m⁻¹)π(0.03 m)²\n  = (4π × 10⁻⁴)π(9 × 10⁻⁴)\n  = 4π² × 9 × 10⁻⁸\n  = 36π² × 10⁻⁸\n  ≈ 355.3 × 10⁻⁸ H\n  ≈ 3.55 × 10⁻⁶ H = 3.55 μH'
      }
    ]
  }
];

// ─────────────────────────────────────────────
// SHORT FRQs (8 questions, 4 pts each, 10 min)
// ─────────────────────────────────────────────

const shortFRQs: PhysicsCEMFRQ[] = [
  // ── em-short-1: Coulomb's Law (Unit 1) ──
  {
    id: 'em-short-1',
    type: 'short',
    unit: 1,
    title: "Coulomb's Law — Three Collinear Charges",
    prompt:
      'Three point charges are placed along the x-axis: charge +Q at x = 0, charge +Q at x = d, and charge −2Q at x = 2d.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the magnitude and direction of the net electric force on the charge at x = d due to the other two charges.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Force from +Q at origin: F₁ = kQ²/d² in +x direction (repulsion)',
            keywords: ['kQ²/d²', 'repulsion', '+x', 'origin charge']
          },
          {
            points: 1,
            description: 'Force from −2Q at 2d: F₂ = 2kQ²/d² in +x direction (attraction toward −2Q). Net = 3kQ²/d² in +x',
            keywords: ['2kQ²/d²', 'attraction', 'net', '3kQ²/d²', '+x direction']
          }
        ],
        sampleAnswer:
          'On the charge +Q at x = d:\n\nForce from +Q at x = 0:\nF₁ = kQ·Q/d² = kQ²/d², directed in +x (repulsion pushes it away from origin)\n\nForce from −2Q at x = 2d:\nF₂ = k·Q·2Q/d² = 2kQ²/d², directed in +x (attraction pulls it toward the −2Q charge)\n\nBoth forces point in the +x direction.\n\nF_net = F₁ + F₂ = kQ²/d² + 2kQ²/d² = 3kQ²/d²\n\nDirection: +x (to the right)'
      },
      {
        label: '(b)',
        prompt:
          'Is there a point on the x-axis (other than at infinity) where the electric field is zero? If so, find its location.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Argues the zero-field point must lie to the left of x = 0 (x < 0), where the repulsive fields from both positive charges can balance the attractive field from −2Q',
            keywords: ['x < 0', 'left', 'between', 'balance']
          },
          {
            points: 1,
            description: 'Sets up kQ/x² + kQ/(x+d)² = 2kQ/(x+2d)² (taking x as distance left of origin) or equivalent, and identifies the equation to solve (exact solution not required if method is correct)',
            keywords: ['equation', 'superposition', '1/x²', 'solve']
          }
        ],
        sampleAnswer:
          'Consider a test point at x = −s (where s > 0, to the left of the origin).\n\nE from +Q at x = 0: kQ/s² in −x direction (pointing left, away from +Q)\nE from +Q at x = d: kQ/(s+d)² in −x direction\nE from −2Q at x = 2d: 2kQ/(s+2d)² in +x direction (toward −2Q)\n\nFor E = 0 at this point, the +x component must balance the −x components:\n2kQ/(s+2d)² = kQ/s² + kQ/(s+d)²\n\nSimplify (divide by kQ):\n2/(s+2d)² = 1/s² + 1/(s+d)²\n\nThis transcendental equation has a solution for some positive s. The zero is to the left of the origin because in that region the two +Q fields oppose the −2Q field.\n\n(There is no zero between the charges because the fields from adjacent charges reinforce there.)'
      }
    ]
  },

  // ── em-short-2: Electric Potential (Unit 1) ──
  {
    id: 'em-short-2',
    type: 'short',
    unit: 1,
    title: 'Electric Potential from a Continuous Charge Distribution',
    prompt:
      'A thin rod of length L carries a total charge Q distributed uniformly. The rod lies along the x-axis from x = 0 to x = L. Point P is located on the x-axis at x = −a (a distance a to the left of the left end of the rod).',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the electric potential V at point P. Express your answer in terms of Q, L, a, and fundamental constants.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Sets up element: dq = (Q/L)dx\', distance from dx\' to P is (x\' + a), integral from 0 to L',
            keywords: ['dq', 'Q/L', 'dx', 'x\' + a', 'integral']
          },
          {
            points: 1,
            description: 'V = kQ/L · ln((L+a)/a) or equivalently (Q/(4πε₀L)) ln(1 + L/a)',
            keywords: ['ln', '(L+a)/a', 'kQ/L', 'logarithm']
          }
        ],
        sampleAnswer:
          'Linear charge density: λ = Q/L\n\nAn element dx\' at position x\' (0 ≤ x\' ≤ L) is at distance (x\' + a) from point P.\n\nV = ∫ k dq/r = ∫₀ᴸ k(Q/L) dx\'/(x\' + a)\n  = kQ/L · [ln(x\' + a)]₀ᴸ\n  = kQ/L · [ln(L + a) − ln(a)]\n  = kQ/L · ln((L + a)/a)\n  = Q/(4πε₀L) · ln(1 + L/a)'
      },
      {
        label: '(b)',
        prompt:
          'From your result, find the electric field E at point P. Verify the direction makes physical sense.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Uses E = −dV/da (since P is at x = −a, so E_x = −∂V/∂(−a) or equivalently computes −dV/dx evaluated at P)',
            keywords: ['E = −dV/da', 'derivative', 'gradient']
          },
          {
            points: 1,
            description: 'E = kQ/[a(L+a)] pointing in −x direction (away from the positive rod)',
            keywords: ['kQ/[a(L+a)]', '−x direction', 'away from rod']
          }
        ],
        sampleAnswer:
          'The electric field at P is in the x-direction:\nE_x = −∂V/∂x_P\n\nSince x_P = −a, we need E = +dV/da (pointing left is −x):\n\ndV/da = kQ/L · d/da [ln(L+a) − ln(a)]\n      = kQ/L · [1/(L+a) − 1/a]\n      = kQ/L · [a − (L+a)] / [a(L+a)]\n      = kQ/L · [−L] / [a(L+a)]\n      = −kQ / [a(L+a)]\n\nE_x = −(−dV/da) ... taking care with signs:\n\nThe field at P points in the −x direction (to the left, away from the positive rod).\n\n|E| = kQ / [a(L + a)]\n\nThis makes sense: the rod is positively charged, so the field pushes a positive test charge to the left (away from the rod).'
      }
    ]
  },

  // ── em-short-3: Dielectrics (Unit 2) ──
  {
    id: 'em-short-3',
    type: 'short',
    unit: 2,
    title: 'Capacitor with Two Dielectrics',
    prompt:
      'A parallel-plate capacitor with plate area A and separation d is half-filled with a dielectric of constant κ₁ and half-filled with a dielectric of constant κ₂. The two dielectric slabs are each of thickness d, placed side by side (each covering half the plate area A/2).',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the equivalent capacitance of this arrangement.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Identifies the two dielectric regions as two capacitors in parallel (same voltage across both, different areas)',
            keywords: ['parallel', 'same voltage', 'A/2', 'two capacitors']
          },
          {
            points: 1,
            description: 'C = C₁ + C₂ = κ₁ε₀(A/2)/d + κ₂ε₀(A/2)/d = ε₀A(κ₁ + κ₂)/(2d)',
            keywords: ['C₁ + C₂', 'ε₀A(κ₁+κ₂)/(2d)', 'parallel combination']
          }
        ],
        sampleAnswer:
          'Since the dielectrics are side by side, they have the same potential difference across them (same plate voltage). This is a parallel combination.\n\nC₁ = κ₁ε₀(A/2)/d\nC₂ = κ₂ε₀(A/2)/d\n\nC_eq = C₁ + C₂ = ε₀A/(2d) · (κ₁ + κ₂)'
      },
      {
        label: '(b)',
        prompt:
          'If instead the two dielectric slabs are stacked on top of each other (each of thickness d/2, covering the full area A), find the new equivalent capacitance.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Identifies stacked arrangement as two capacitors in series (same charge, different voltages)',
            keywords: ['series', 'stacked', 'same charge', 'd/2']
          },
          {
            points: 1,
            description: '1/C = 1/C₁ + 1/C₂ with C₁ = κ₁ε₀A/(d/2) = 2κ₁ε₀A/d, giving C = 2ε₀Aκ₁κ₂/[d(κ₁+κ₂)]',
            keywords: ['1/C₁ + 1/C₂', '2ε₀Aκ₁κ₂', 'd(κ₁+κ₂)', 'series combination']
          }
        ],
        sampleAnswer:
          'Stacked dielectrics share the same charge → series combination.\n\nC₁ = κ₁ε₀A/(d/2) = 2κ₁ε₀A/d\nC₂ = κ₂ε₀A/(d/2) = 2κ₂ε₀A/d\n\n1/C_eq = 1/C₁ + 1/C₂ = d/(2ε₀A) · [1/κ₁ + 1/κ₂]\n       = d(κ₁ + κ₂)/(2ε₀Aκ₁κ₂)\n\nC_eq = 2ε₀Aκ₁κ₂ / [d(κ₁ + κ₂)]'
      }
    ]
  },

  // ── em-short-4: Kirchhoff's Laws (Unit 3) ──
  {
    id: 'em-short-4',
    type: 'short',
    unit: 3,
    title: "Kirchhoff's Laws — Two-Loop Circuit",
    prompt:
      'A circuit has two loops sharing a common branch. The left loop contains a battery ε₁ = 12 V and resistor R₁ = 4 Ω. The right loop contains a battery ε₂ = 6 V and resistor R₂ = 6 Ω. The shared branch has a resistor R₃ = 3 Ω. Both batteries have their positive terminals at the top.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          "Write Kirchhoff's junction rule and loop equations for this circuit. Define your current variables clearly.",
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Junction rule: I₁ = I₂ + I₃ (or equivalent with defined current directions)',
            keywords: ['junction', 'I₁ = I₂ + I₃', 'node', 'conservation']
          },
          {
            points: 1,
            description: 'Two independent loop equations correctly applying KVL with consistent sign conventions',
            keywords: ['loop', 'KVL', 'ε₁ − I₁R₁ − I₃R₃ = 0', 'ε₂ − I₂R₂ − I₃R₃ = 0']
          }
        ],
        sampleAnswer:
          'Define currents: I₁ flows clockwise in the left loop (through ε₁, R₁), I₂ flows clockwise in the right loop (through ε₂, R₂). I₃ flows downward through R₃.\n\nJunction rule (top node):\nI₁ = I₂ + I₃  →  I₃ = I₁ − I₂\n\nLeft loop (clockwise):\nε₁ − I₁R₁ − I₃R₃ = 0\n12 − 4I₁ − 3I₃ = 0\n\nRight loop (clockwise):\nε₂ − I₂R₂ − I₃R₃ = 0\n6 − 6I₂ − 3I₃ = 0'
      },
      {
        label: '(b)',
        prompt:
          'Solve for the current through each resistor.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correctly substitutes I₃ = I₁ − I₂ and solves the 2×2 system',
            keywords: ['substitute', 'solve', 'system', 'simultaneous']
          },
          {
            points: 1,
            description: 'Correct numerical answers: I₁ = 2 A, I₂ = 0 A, I₃ = 2 A (or consistent with their sign conventions)',
            keywords: ['I₁ = 2', 'I₂ = 0', 'I₃ = 2', 'amperes']
          }
        ],
        sampleAnswer:
          'Substitute I₃ = I₁ − I₂:\n\nLeft loop: 12 − 4I₁ − 3(I₁ − I₂) = 0 → 12 − 7I₁ + 3I₂ = 0  ... (1)\nRight loop: 6 − 6I₂ − 3(I₁ − I₂) = 0 → 6 − 3I₁ − 3I₂ = 0  ... (2)\n\nFrom (2): I₁ = (6 − 3I₂)/3 = 2 − I₂\nSubstitute into (1): 12 − 7(2 − I₂) + 3I₂ = 0\n12 − 14 + 7I₂ + 3I₂ = 0\n−2 + 10I₂ = 0\nI₂ = 0.2 A\n\nI₁ = 2 − 0.2 = 1.8 A\nI₃ = I₁ − I₂ = 1.6 A\n\nThrough R₁: I₁ = 1.8 A\nThrough R₂: I₂ = 0.2 A\nThrough R₃: I₃ = 1.6 A'
      }
    ]
  },

  // ── em-short-5: Biot-Savart Law (Unit 4) ──
  {
    id: 'em-short-5',
    type: 'short',
    unit: 4,
    title: 'Biot-Savart Law — Magnetic Field at Center of Arc',
    prompt:
      'A wire carrying current I is bent into an arc of radius R subtending an angle θ (in radians) at its center. The arc lies in the xy-plane.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using the Biot-Savart law, derive the magnetic field at the center of the arc.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Sets up dB = μ₀I dl/(4πR²) with dl = R dφ and |dl⃗ × r̂| = 1 (perpendicular at center)',
            keywords: ['dB', 'μ₀I/(4πR²)', 'dl = Rdφ', 'perpendicular', 'Biot-Savart']
          },
          {
            points: 1,
            description: 'Integrates: B = μ₀Iθ/(4πR), directed along ẑ (by right-hand rule)',
            keywords: ['B = μ₀Iθ/(4πR)', 'integrate', 'ẑ', 'right-hand rule']
          }
        ],
        sampleAnswer:
          'Biot-Savart law: dB⃗ = (μ₀I/4π) · (dl⃗ × r̂)/r²\n\nFor each element dl on the arc:\n• dl = R dφ\n• r = R (distance to center)\n• dl⃗ × r̂ is perpendicular to the plane (ẑ direction), with |dl⃗ × r̂| = dl\n\ndB = μ₀I R dφ/(4πR²) = μ₀I dφ/(4πR)\n\nIntegrate over angle θ:\nB = ∫₀θ μ₀I dφ/(4πR) = μ₀Iθ/(4πR)\n\nDirection: ẑ (out of page, by right-hand rule for counterclockwise current).\n\nSpecial case: full circle (θ = 2π) gives B = μ₀I/(2R) ✓'
      },
      {
        label: '(b)',
        prompt:
          'Two such arcs of the same radius R, carrying the same current I, subtend angles π/2 and 3π/2 at a common center but lie in perpendicular planes (xy and xz). Find the magnitude of the total B field at the center.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Computes each field: B₁ = μ₀I(π/2)/(4πR) = μ₀I/(8R) and B₂ = μ₀I(3π/2)/(4πR) = 3μ₀I/(8R)',
            keywords: ['μ₀I/(8R)', '3μ₀I/(8R)', 'two arcs', 'components']
          },
          {
            points: 1,
            description: 'Since fields are perpendicular: |B_total| = √(B₁² + B₂²) = μ₀I√10/(8R)',
            keywords: ['perpendicular', 'Pythagorean', '√(B₁²+B₂²)', '√10', 'magnitude']
          }
        ],
        sampleAnswer:
          'Arc 1 (xy-plane, angle π/2):\nB₁ = μ₀I(π/2)/(4πR) = μ₀I/(8R), directed along ẑ\n\nArc 2 (xz-plane, angle 3π/2):\nB₂ = μ₀I(3π/2)/(4πR) = 3μ₀I/(8R), directed along ŷ\n\nSince B₁ ⊥ B₂:\n|B_total| = √(B₁² + B₂²) = √[(μ₀I/(8R))² + (3μ₀I/(8R))²]\n          = (μ₀I/(8R))√(1 + 9)\n          = μ₀I√10/(8R)'
      }
    ]
  },

  // ── em-short-6: Magnetic Force on Current-Carrying Wire (Unit 4) ──
  {
    id: 'em-short-6',
    type: 'short',
    unit: 4,
    title: 'Magnetic Force on a Current-Carrying Wire',
    prompt:
      'A straight wire of length L carries current I in the +y direction. The wire is in a non-uniform magnetic field B⃗ = B₀(x/a) ẑ, where B₀ and a are positive constants. The wire extends from x = a to x = 3a along a line parallel to the y-axis at some fixed x-coordinate.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Wait — the wire is parallel to the y-axis, so x is constant along the wire. If the wire is at position x = 2a, find the force on the wire.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'At x = 2a: B = B₀(2a/a)ẑ = 2B₀ẑ. Since x is constant along the wire, B is uniform along it.',
            keywords: ['x = 2a', 'B = 2B₀', 'constant', 'uniform']
          },
          {
            points: 1,
            description: 'F⃗ = IL⃗ × B⃗ = I(Lŷ) × (2B₀ẑ) = 2ILB₀(ŷ × ẑ) = 2ILB₀x̂',
            keywords: ['F = ILB', '2ILB₀', 'x̂', 'cross product', 'ŷ × ẑ']
          }
        ],
        sampleAnswer:
          'At x = 2a, the field is B⃗ = B₀(2a/a)ẑ = 2B₀ẑ.\n\nSince x does not vary along the wire, B is constant along the wire.\n\nF⃗ = IL⃗ × B⃗ = I(Lŷ) × (2B₀ẑ) = 2ILB₀(ŷ × ẑ) = 2ILB₀ x̂\n\n|F| = 2ILB₀, directed in the +x direction.'
      },
      {
        label: '(b)',
        prompt:
          'Now suppose the wire lies along the x-axis from x = a to x = 3a, carrying current I in the +x direction, in the same field B⃗ = B₀(x/a)ẑ. Find the total force on the wire.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Sets up dF⃗ = I(dx x̂) × B₀(x/a)ẑ = −IB₀(x/a)dx ŷ (using x̂ × ẑ = −ŷ)',
            keywords: ['dF', 'integral', 'x̂ × ẑ', '−ŷ', 'dx']
          },
          {
            points: 1,
            description: 'Integrates: F = −(IB₀/a)∫ₐ³ᵃ x dx = −(IB₀/a)(4a²) = −4IB₀a ŷ',
            keywords: ['integrate', '4IB₀a', '−ŷ direction', 'x dx']
          }
        ],
        sampleAnswer:
          'Now x varies along the wire, so we must integrate.\n\ndl⃗ = dx x̂\ndF⃗ = I(dx x̂) × B₀(x/a)ẑ = IB₀(x/a)(x̂ × ẑ) dx = −IB₀(x/a) dx ŷ\n\n(Using x̂ × ẑ = −ŷ)\n\nF⃗ = −(IB₀/a)ŷ ∫ₐ³ᵃ x dx = −(IB₀/a)ŷ · [x²/2]ₐ³ᵃ\n   = −(IB₀/a)ŷ · (9a² − a²)/2\n   = −(IB₀/a)ŷ · 4a²\n   = −4IB₀a ŷ\n\n|F| = 4IB₀a, directed in the −y direction.'
      }
    ]
  },

  // ── em-short-7: RL Circuits (Unit 5) ──
  {
    id: 'em-short-7',
    type: 'short',
    unit: 5,
    title: 'RL Circuit — Current Growth and Energy',
    prompt:
      'A series RL circuit consists of a battery of emf ε, a resistor R, an inductor L, and a switch. At t = 0 the switch is closed.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using Kirchhoff\'s voltage law, derive the current i(t) in the circuit.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'KVL: ε − iR − L(di/dt) = 0; rearranges to di/dt + (R/L)i = ε/L',
            keywords: ['KVL', 'ε − iR − L di/dt', 'differential equation', 'R/L']
          },
          {
            points: 1,
            description: 'Solution: i(t) = (ε/R)(1 − e^(−Rt/L)) with time constant τ = L/R',
            keywords: ['i(t)', 'ε/R', '1 − e^(−Rt/L)', 'τ = L/R', 'exponential']
          }
        ],
        sampleAnswer:
          'KVL around the loop:\nε − iR − L(di/dt) = 0\n\nRearrange:\ndi/dt + (R/L)i = ε/L\n\nThis is a first-order linear ODE. Using integrating factor e^(Rt/L):\n\nd/dt[i · e^(Rt/L)] = (ε/L)e^(Rt/L)\n\nIntegrate:\ni · e^(Rt/L) = (ε/R)e^(Rt/L) + C\n\nWith i(0) = 0: C = −ε/R\n\ni(t) = (ε/R)(1 − e^(−Rt/L))\n\nTime constant: τ = L/R\nAs t → ∞: i → ε/R (steady state)'
      },
      {
        label: '(b)',
        prompt:
          'Find the energy stored in the inductor as t → ∞. What fraction of the total energy delivered by the battery has been dissipated in the resistor by that time?',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'At steady state i = ε/R, so U_L = ½L(ε/R)² = Lε²/(2R²)',
            keywords: ['½Li²', 'Lε²/(2R²)', 'steady state', 'energy stored']
          },
          {
            points: 1,
            description: 'Total battery energy is infinite (constant current through R dissipates power continuously). At any finite time, W_R = ∫₀ᵗ i²R dt, which grows without bound. The inductor energy is finite; all additional energy goes to R.',
            keywords: ['infinite', 'continuous dissipation', 'power = i²R', 'steady state current']
          }
        ],
        sampleAnswer:
          'As t → ∞: i → ε/R\n\nEnergy stored in inductor:\nU_L = ½Li² = ½L(ε/R)² = Lε²/(2R²)\n\nThis energy is finite and constant once steady state is reached.\n\nHowever, in steady state the current ε/R flows through R continuously, dissipating power P = (ε/R)²·R = ε²/R.\n\nThe battery delivers power P_batt = εi = ε²/R continuously.\n\nSo the total energy dissipated in R grows without bound: W_R(t) → ∞ as t → ∞.\n\nThe fraction dissipated approaches 1 — essentially all of the battery\'s energy goes to Joule heating; the inductor stores a fixed finite amount Lε²/(2R²).'
      }
    ]
  },

  // ── em-short-8: Maxwell's Equations (Unit 5) ──
  {
    id: 'em-short-8',
    type: 'short',
    unit: 5,
    title: "Maxwell's Equations — Displacement Current",
    prompt:
      'A parallel-plate capacitor with circular plates of radius R is being charged by a constant current I. The electric field between the plates is increasing uniformly.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the displacement current I_d between the plates and show it equals the conduction current I.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Writes displacement current: I_d = ε₀ dΦ_E/dt where Φ_E = EA = E(πR²)',
            keywords: ['displacement current', 'ε₀ dΦ_E/dt', 'Φ_E', 'electric flux']
          },
          {
            points: 1,
            description: 'Uses E = σ/ε₀ = Q/(ε₀πR²), so dΦ_E/dt = (dQ/dt)/(ε₀) = I/ε₀, giving I_d = ε₀(I/ε₀) = I',
            keywords: ['I_d = I', 'dQ/dt', 'equals conduction', 'continuity']
          }
        ],
        sampleAnswer:
          'The electric field between the plates:\nE = σ/ε₀ = Q/(ε₀πR²)\n\nElectric flux:\nΦ_E = E · πR² = Q/ε₀\n\nDisplacement current:\nI_d = ε₀ dΦ_E/dt = ε₀ · d/dt(Q/ε₀) = dQ/dt = I\n\nThe displacement current between the plates equals the conduction current in the wires. This is Maxwell\'s key insight: the changing electric field acts as an effective current source for the magnetic field, ensuring continuity of "current" through the capacitor gap.'
      },
      {
        label: '(b)',
        prompt:
          "Use the Ampère-Maxwell law to find the magnetic field B at a radial distance r < R from the axis between the plates.",
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Ampère-Maxwell: ∮B⃗·dl⃗ = μ₀I_d,enc = μ₀ε₀(dΦ_E/dt)_enc; only fraction πr²/(πR²) of displacement current is enclosed',
            keywords: ['Ampère-Maxwell', 'enclosed', 'r²/R²', 'fraction']
          },
          {
            points: 1,
            description: 'B(2πr) = μ₀I(r²/R²), so B = μ₀Ir/(2πR²)',
            keywords: ['B = μ₀Ir/(2πR²)', 'linear in r', 'inside plates']
          }
        ],
        sampleAnswer:
          'Apply the Ampère-Maxwell law with a circular Amperian loop of radius r < R between the plates:\n\n∮ B⃗·dl⃗ = μ₀(I_conduction + I_d,enc)\n\nNo conduction current passes through this surface (it\'s between the plates), so:\n∮ B⃗·dl⃗ = μ₀I_d,enc\n\nThe displacement current is uniformly distributed over the plate area πR².\nEnclosed displacement current:\nI_d,enc = I · (πr²)/(πR²) = Ir²/R²\n\nBy symmetry, B is tangential and constant on the loop:\nB(2πr) = μ₀Ir²/R²\n\nB(r) = μ₀Ir/(2πR²)\n\nThe field increases linearly with r inside the plates — the same form as inside a long cylindrical conductor carrying uniform current.'
      }
    ]
  }
];

// ─────────────────────────────────────────────
// Export helpers
// ─────────────────────────────────────────────

/** Returns all 13 FRQs (5 long + 8 short). */
export function getAllFRQs(): PhysicsCEMFRQ[] {
  return [...longFRQs, ...shortFRQs];
}

/** Returns only the 5 long FRQs (10 pts each). */
export function getLongFRQs(): PhysicsCEMFRQ[] {
  return [...longFRQs];
}

/** Returns only the 8 short FRQs (4 pts each). */
export function getShortFRQs(): PhysicsCEMFRQ[] {
  return [...shortFRQs];
}

/**
 * Generates a simulated full AP Physics C: E&M FRQ section.
 * Picks 3 random long FRQs and 4 random short FRQs.
 * Total: 3×10 + 4×4 = 46 points, ~115 min.
 */
export function generateFullExamFRQs(): {
  longQuestions: PhysicsCEMFRQ[]
  shortQuestions: PhysicsCEMFRQ[]
  totalPoints: number
  totalTime: number
} {
  const shuffledLong = [...longFRQs].sort(() => Math.random() - 0.5);
  const shuffledShort = [...shortFRQs].sort(() => Math.random() - 0.5);

  const selectedLong = shuffledLong.slice(0, 3);
  const selectedShort = shuffledShort.slice(0, 4);

  const totalPoints =
    selectedLong.reduce((s, q) => s + q.totalPoints, 0) +
    selectedShort.reduce((s, q) => s + q.totalPoints, 0);

  const totalTime =
    selectedLong.reduce((s, q) => s + q.timeRecommendation, 0) +
    selectedShort.reduce((s, q) => s + q.timeRecommendation, 0);

  return { longQuestions: selectedLong, shortQuestions: selectedShort, totalPoints, totalTime };
}
