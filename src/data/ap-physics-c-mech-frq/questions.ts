// AP Physics C: Mechanics — Free Response Questions
// Calculus-based FRQs with rubrics for auto-grading

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

export interface PhysicsCMechFRQ {
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

const longFRQs: PhysicsCMechFRQ[] = [
  // ── LONG 1: Kinematics + Newton's Laws ──
  {
    id: 'mech-long-1',
    type: 'long',
    unit: 1,
    title: 'Variable-Force Kinematics on an Inclined Track',
    prompt:
      'A block of mass m = 2.0 kg is released from rest at the top of a frictionless incline of length L = 5.0 m that makes an angle θ = 30° with the horizontal. A position-dependent braking force F(x) = $-\\beta x^{2}$ acts on the block along the incline, where β = 0.80 $N/m^{2}$ and x is measured from the release point down the incline.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using Newton\'s second law, write the differential equation of motion for the block as it slides down the incline. Express your answer in terms of m, g, θ, β, and x.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Identify the net force along the incline: mg sin θ − $\\beta x^{2}$',
            keywords: ['mg sin', 'βx²', 'net force', 'along the incline']
          },
          {
            points: 1,
            description: 'Apply Newton\'s second law: ma = mg sin θ − $\\beta x^{2}$',
            keywords: ['ma', 'newton', 'second law', 'F = ma']
          },
          {
            points: 1,
            description: 'Write as differential equation: $m(d^{2}x/dt^{2})$ = mg sin θ − $\\beta x^{2}$',
            keywords: ['d²x/dt²', 'differential equation', 'acceleration']
          }
        ],
        sampleAnswer:
          'The forces along the incline are the gravitational component mg sin θ (down the incline) and the braking force $-\\beta x^{2}$ (opposing motion, up the incline). By Newton\'s second law:\n\n$m(d^{2}x/dt^{2})$ = mg sin θ − $\\beta x^{2}$\n\nSubstituting values: $2.0(d^{2}x/dt^{2})$ = 2.0(9.8)(sin 30°) − $0.80x^{2}$ = 9.8 − $0.80x^{2}$'
      },
      {
        label: '(b)',
        prompt:
          'Using the relation a = v(dv/dx), derive an expression for the velocity v as a function of position x. Evaluate v at x = 2.0 m.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Substitute a = v dv/dx into the equation of motion',
            keywords: ['v dv/dx', 'chain rule', 'substitution']
          },
          {
            points: 1,
            description: 'Integrate: ∫v dv = $\\int (g \\sin \\theta - (\\beta /m)x^{2})$ dx to get $v^{2}/2$ = g sin θ · x − $(\\beta /3m)x^{3}$',
            keywords: ['integrate', 'v²/2', 'x³', 'antiderivative']
          },
          {
            points: 1,
            description: 'Correct numerical evaluation at x = 2.0 m',
            keywords: ['v =', 'm/s', 'numerical', 'evaluate']
          }
        ],
        sampleAnswer:
          'Using a = v(dv/dx):\n\nmv(dv/dx) = mg sin θ − $\\beta x^{2}$\n\n$\\int_{0}^{v}$ v dv = $\\int_{0}^{x}$ [g sin θ − $(\\beta /m)x^{2}$] dx\n\n$v^{2}/2$ = g sin θ · x − (β)/(3m) · $x^{3}$\n\n$v^{2}$ = 2g sin θ · x − (2β)/(3m) · $x^{3}$\n\nAt x = 2.0 m:\n$v^{2}$ = 2(9.8)(0.5)(2.0) − $2(0.80)/(3\\cdot 2.0)(2.0)^{3}$ = 19.6 − 2.133 = 17.467\nv = $\\sqrt{17.467}$ ≈ 4.18 m/s'
      },
      {
        label: '(c)',
        prompt:
          'Determine the position $x_{0}$ at which the block reaches its maximum velocity. Express your answer both symbolically and numerically.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set dv/dx = 0, which means a = 0, so mg sin θ = $\\beta x_{0}^{2}$',
            keywords: ['dv/dx = 0', 'acceleration = 0', 'maximum velocity']
          },
          {
            points: 1,
            description: 'Solve $x_{0}$ = $\\sqrt{mg \\sin \\theta / \\beta}$ and evaluate numerically',
            keywords: ['√', 'square root', 'x₀', 'mg sin θ / β']
          }
        ],
        sampleAnswer:
          'Maximum velocity occurs when acceleration = 0:\n\nmg sin θ − $\\beta x_{0}^{2}$ = 0\n$x_{0}^{2}$ = mg sin θ / β\n$x_{0}$ = $\\sqrt{mg \\sin \\theta / \\beta}$ = $\\sqrt{2.0 \\cdot 9.8 \\cdot 0.5 / 0.80}$ = $\\sqrt{12.25}$ ≈ 3.50 m'
      },
      {
        label: '(d)',
        prompt:
          'Calculate the work done by the braking force as the block travels from x = 0 to x = 3.0 m.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set up the integral W = $-\\int_{0}^{3}$ $\\beta x^{2}$ dx',
            keywords: ['integral', '∫', 'βx²', 'work']
          },
          {
            points: 1,
            description: 'Evaluate: W = $-\\beta (x^{3}/3)$|$ {}_{0}^{3}$ = −0.80(27/3) = −7.2 J',
            keywords: ['−7.2', 'joules', 'x³/3', 'negative']
          }
        ],
        sampleAnswer:
          'W = $\\int_{0}^{3}$ F(x) dx = $-\\int_{0}^{3}$ $\\beta x^{2}$ dx = −β[$x^{3}/3$]$ {}_{0}^{3}$ = $-0.80(3.0^{3}/3)$ = −0.80(9.0) = −7.2 J\n\nThe braking force does −7.2 J of work on the block.'
      }
    ]
  },

  // ── LONG 2: Work-Energy Theorem ──
  {
    id: 'mech-long-2',
    type: 'long',
    unit: 3,
    title: 'Variable Spring and Energy Dissipation',
    prompt:
      'A nonlinear spring exerts a restoring force F(x) = −kx − $\\alpha x^{3}$ on a block of mass m = 1.5 kg, where k = 40 N/m, α = 8.0 $N/m^{3}$, and x is the displacement from equilibrium. The block is pushed to compress the spring by $x_{0}$ = 0.50 m and released from rest on a horizontal surface with kinetic friction coefficient $\\mu_{k}$ = 0.10.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the potential energy U(x) stored in the nonlinear spring. Evaluate $U(x_{0})$.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Set up U(x) = $-\\int_{0}^{x}$ F dx = $\\int_{0}^{x}$ $(kx + \\alpha x^{3})$ dx',
            keywords: ['U(x)', '−∫F dx', 'potential energy', 'integral']
          },
          {
            points: 1,
            description: 'Integrate to get U(x) = $kx^{2}/2$ + $\\alpha x^{4}/4$',
            keywords: ['kx²/2', 'αx⁴/4', 'antiderivative']
          },
          {
            points: 1,
            description: 'Evaluate U(0.50) correctly',
            keywords: ['U(x₀)', 'joules', 'numerical']
          }
        ],
        sampleAnswer:
          'U(x) = $-\\int_{0}^{x}$ F(x\') dx\' = $\\int_{0}^{x}$ (kx\' + αx\'$ {}^{3}$) dx\' = $kx^{2}/2$ + $\\alpha x^{4}/4$\n\nU(0.50) = $40(0.50)^{2}/2$ + $8.0(0.50)^{4}/4$ = 40(0.25)/2 + 8.0(0.0625)/4 = 5.0 + 0.125 = 5.125 J'
      },
      {
        label: '(b)',
        prompt:
          'Using the work-energy theorem, determine the speed of the block as it passes through equilibrium (x = 0).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Apply W_net = ΔKE: $U(x_{0})$ − $\\mu_{k}mg\\cdot x_{0}$ = $\\tfrac{1}{2} mv^{2}$',
            keywords: ['work-energy', 'ΔKE', 'friction work', '½mv²']
          },
          {
            points: 1,
            description: 'Correct numerical result for v',
            keywords: ['v =', 'm/s', 'speed']
          }
        ],
        sampleAnswer:
          'Energy conservation with friction:\n$\\tfrac{1}{2} mv^{2}$ = $U(x_{0})$ − $\\mu_{k}mg\\cdot x_{0}$\n$\\tfrac{1}{2} (1.5)v^{2}$ = 5.125 − 0.10(1.5)(9.8)(0.50)\n$0.75v^{2}$ = 5.125 − 0.735 = 4.39\n$v^{2}$ = 5.853\nv ≈ 2.42 m/s'
      },
      {
        label: '(c)',
        prompt:
          'Write a differential equation relating the block\'s velocity v to its position x as it moves from x = $-x_{0}$ toward equilibrium. Use the chain rule a = v(dv/dx).',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Identify all forces: spring force and friction',
            keywords: ['spring force', 'friction', 'kx', 'αx³', 'μₖmg']
          },
          {
            points: 1,
            description: 'Write ma = −kx − $\\alpha x^{3}$ − $\\mu_{k}mg$ (friction opposes motion toward +x)',
            keywords: ['ma =', 'net force', 'direction', 'opposes motion']
          },
          {
            points: 1,
            description: 'Substitute a = v(dv/dx) to get mv(dv/dx) = −kx − $\\alpha x^{3}$ − $\\mu_{k}mg$',
            keywords: ['v dv/dx', 'chain rule', 'differential equation']
          }
        ],
        sampleAnswer:
          'As the block moves from $-x_{0}$ toward equilibrium (positive direction), friction opposes the motion (acts in −x direction):\n\nma = −kx − $\\alpha x^{3}$ − $\\mu_{k}mg$\n\nUsing a = v(dv/dx):\n\nmv(dv/dx) = −kx − $\\alpha x^{3}$ − $\\mu_{k}mg$\n\nThis is a first-order ODE in v(x).'
      },
      {
        label: '(d)',
        prompt:
          'Determine the maximum extension x_max of the spring on the far side of equilibrium. Set up the integral equation needed and indicate whether an exact closed-form solution is possible.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set up energy equation: $U(x_{0})$ = U(x_max) + $\\mu_{k}mg(x_{0} + x_{max})$ with v = 0 at x_max',
            keywords: ['U(x_max)', 'v = 0', 'energy conservation', 'friction']
          },
          {
            points: 1,
            description: 'Recognize quartic equation: $kx_{max}^{2}/2$ + $\\alpha x_{max}^{4}/4$ + $\\mu_{k}mg\\cdot x_{max}$ = $U(x_{0})$ − $\\mu_{k}mg\\cdot x_{0}$, requires numerical solution',
            keywords: ['quartic', 'numerical', 'no closed form', 'transcendental']
          }
        ],
        sampleAnswer:
          'At maximum extension v = 0. Energy conservation:\n\n$U(x_{0})$ = U(x_max) + $\\mu_{k}mg(x_{0} + x_{max})$\n\n$kx_{0}^{2}/2$ + $\\alpha x_{0}^{4}/4$ = $kx_{max}^{2}/2$ + $\\alpha x_{max}^{4}/4$ + $\\mu_{k}mg(x_{0} + x_{max})$\n\n5.125 = $20x_{max}^{2}$ + $2x_{max}^{4}$ + 1.47(0.50 + x_max)\n\nThis is a quartic equation in x_max. No simple closed-form solution exists; it must be solved numerically. Using iteration or a calculator: x_max ≈ 0.46 m.'
      }
    ]
  },

  // ── LONG 3: Rotational Dynamics ──
  {
    id: 'mech-long-3',
    type: 'long',
    unit: 5,
    title: 'Pulley System with Rotational Inertia',
    prompt:
      'A uniform solid disk of mass M = 4.0 kg and radius R = 0.25 m is mounted on a frictionless axle. A light, inextensible string is wrapped around the rim. A hanging block of mass m = 2.0 kg is attached to the free end of the string and released from rest. The disk has moment of inertia I = $\\tfrac{1}{2} MR^{2}$.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Draw free-body diagrams for both the block and the disk. Using Newton\'s second law for the block and the rotational analog (τ = Iα) for the disk, derive expressions for the linear acceleration a of the block and the tension T in the string.',
        maxPoints: 4,
        rubric: [
          {
            points: 1,
            description: 'Correct FBD for block: weight mg down, tension T up',
            keywords: ['free body', 'mg', 'tension', 'block']
          },
          {
            points: 1,
            description: 'Newton\'s second law for block: mg − T = ma',
            keywords: ['mg − T', 'ma', 'block equation']
          },
          {
            points: 1,
            description: 'Torque equation for disk: τ = TR = Iα = $(\\tfrac{1}{2} MR^{2})(a/R)$',
            keywords: ['τ = Iα', 'torque', 'TR', 'α = a/R']
          },
          {
            points: 1,
            description: 'Solve: a = mg/(m + M/2) and T = Mmg/(2m + M)',
            keywords: ['a =', 'T =', 'solve', 'acceleration']
          }
        ],
        sampleAnswer:
          'Block FBD: mg downward, T upward.\nDisk: T tangential at rim, normal force and weight at axle.\n\nBlock: mg − T = ma … (1)\nDisk: τ = Iα → TR = $(\\tfrac{1}{2} MR^{2})(a/R)$ → T = ½Ma … (2)\n\nSubstitute (2) into (1):\nmg − ½Ma = ma\nmg = a(m + M/2)\na = mg/(m + M/2) = 2.0(9.8)/(2.0 + 2.0) = 4.9 $m/s^{2}$\n\nT = ½Ma = ½(4.0)(4.9) = 9.8 N'
      },
      {
        label: '(b)',
        prompt:
          'Derive expressions for the angular velocity ω(t) and angular displacement θ(t) of the disk as functions of time. How many revolutions does the disk make in the first 2.0 s?',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'ω(t) = αt = (a/R)t with constant angular acceleration',
            keywords: ['ω(t)', 'αt', 'angular velocity', 'a/R']
          },
          {
            points: 1,
            description: 'θ(t) = $\\tfrac{1}{2} \\alpha t^{2}$ = $(a/2R)t^{2}$',
            keywords: ['θ(t)', '½αt²', 'angular displacement']
          },
          {
            points: 1,
            description: 'Correct numerical answer for revolutions at t = 2.0 s',
            keywords: ['revolutions', 'θ/(2π)', 'numerical']
          }
        ],
        sampleAnswer:
          'α = a/R = 4.9/0.25 = 19.6 $rad/s^{2}$\n\nω(t) = αt = 19.6t rad/s\nθ(t) = $\\tfrac{1}{2} \\alpha t^{2}$ = $9.8t^{2}$ rad\n\nAt t = 2.0 s:\nθ = 9.8(4.0) = 39.2 rad\nRevolutions = 39.2/(2π) ≈ 6.24 revolutions'
      },
      {
        label: '(c)',
        prompt:
          'Using energy methods, verify the speed of the block after falling a distance h = 1.5 m. Show that the result is consistent with the kinematic approach.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Energy conservation: mgh = $\\tfrac{1}{2} mv^{2}$ + $\\tfrac{1}{2} I\\omega^{2}$ with ω = v/R',
            keywords: ['energy conservation', 'mgh', '½mv²', '½Iω²']
          },
          {
            points: 1,
            description: 'Simplify to mgh = $\\tfrac{1}{2} (m + M/2)v^{2}$ and solve for v',
            keywords: ['½(m + M/2)v²', 'effective mass', 'simplify']
          },
          {
            points: 1,
            description: 'Verify $v^{2}$ = 2ah gives same result',
            keywords: ['v² = 2ah', 'consistent', 'verify', 'kinematic']
          }
        ],
        sampleAnswer:
          'Energy conservation:\nmgh = $\\tfrac{1}{2} mv^{2}$ + $\\tfrac{1}{2} I\\omega^{2}$ = $\\tfrac{1}{2} mv^{2}$ + $\\tfrac{1}{2} (\\tfrac{1}{2} MR^{2})(v/R)^{2}$ = $\\tfrac{1}{2} mv^{2}$ + $\\tfrac{1}{4} Mv^{2}$ = $\\tfrac{1}{2} (m + M/2)v^{2}$\n\n$v^{2}$ = 2mgh/(m + M/2) = 2(2.0)(9.8)(1.5)/(2.0 + 2.0) = 14.7\nv = $\\sqrt{14.7}$ ≈ 3.83 m/s\n\nKinematic check: $v^{2}$ = 2ah = 2(4.9)(1.5) = 14.7 ✓\nBoth methods agree.'
      }
    ]
  },

  // ── LONG 4: Momentum + Collisions ──
  {
    id: 'mech-long-4',
    type: 'long',
    unit: 4,
    title: 'Two-Dimensional Collision with Impulse Analysis',
    prompt:
      'A ball of mass $m_{1}$ = 0.50 kg moves with velocity $v_{1}$ = 6.0 m/s in the +x direction and collides with a stationary ball of mass $m_{2}$ = 0.30 kg. After the collision, $m_{1}$ moves at 4.0 m/s at 30° above the +x axis. The collision lasts Δt = 8.0 ms.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using conservation of momentum in both x and y directions, determine the velocity (magnitude and direction) of $m_{2}$ after the collision.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'x-momentum: $m_{1}v_{1}$ = $m_{1}v_{1}$\'cos30° + $m_{2}v_{2x}$',
            keywords: ['x-momentum', 'conservation', 'cos 30', 'v₂ₓ']
          },
          {
            points: 1,
            description: 'y-momentum: 0 = $m_{1}v_{1}$\'sin30° − $m_{2}v_{2}$ᵧ',
            keywords: ['y-momentum', 'sin 30', 'v₂ᵧ', '= 0']
          },
          {
            points: 1,
            description: 'Correct magnitude and direction of $v_{2}$',
            keywords: ['magnitude', 'direction', 'angle', 'v₂']
          }
        ],
        sampleAnswer:
          'x-momentum: 0.50(6.0) = 0.50(4.0)cos30° + $0.30v_{2x}$\n3.0 = 1.732 + $0.30v_{2x}$ → $v_{2x}$ = 4.227 m/s\n\ny-momentum: 0 = 0.50(4.0)sin30° − $0.30v_{2}$ᵧ\n0 = 1.0 − $0.30v_{2}$ᵧ → $v_{2}$ᵧ = 3.333 m/s\n\n$v_{2}$ = $\\sqrt{4.227^{2} + 3.333^{2}}$ = $\\sqrt{17.87 + 11.11}$ = $\\sqrt{28.98}$ ≈ 5.38 m/s\nφ = arctan(3.333/4.227) ≈ 38.3° below the +x axis'
      },
      {
        label: '(b)',
        prompt:
          'Determine whether this collision is elastic, inelastic, or perfectly inelastic. Justify with a kinetic energy calculation.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Calculate KE_before and KE_after',
            keywords: ['KE', 'kinetic energy', '½mv²', 'before', 'after']
          },
          {
            points: 1,
            description: 'Compare and classify correctly as inelastic (KE_after < KE_before, objects separate)',
            keywords: ['inelastic', 'KE lost', 'not elastic', 'separate']
          }
        ],
        sampleAnswer:
          'KE_before = $\\tfrac{1}{2} (0.50)(6.0^{2})$ = 9.0 J\nKE_after = $\\tfrac{1}{2} (0.50)(4.0^{2})$ + $\\tfrac{1}{2} (0.30)(5.38^{2})$ = 4.0 + 4.34 = 8.34 J\n\nKE_after < KE_before (8.34 J < 9.0 J), and the objects separate.\nThis is an inelastic collision. Energy lost = 0.66 J.'
      },
      {
        label: '(c)',
        prompt:
          'Calculate the impulse vector J delivered to $m_{2}$. Then determine the average force exerted on $m_{2}$ during the collision.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'J = $m_{2}v_{2,\\text{final}}$ − $m_{2}v_{2,\\text{initial}}$ = $m_{2}v_{2}$ (since initially at rest)',
            keywords: ['impulse', 'Δp', 'J =', 'm₂v₂']
          },
          {
            points: 1,
            description: 'Correct impulse components: $J_{x}$ = $m_{2}v_{2x}$, Jᵧ = $-m_{2}v_{2}$ᵧ',
            keywords: ['Jₓ', 'Jᵧ', 'components', 'impulse vector']
          },
          {
            points: 1,
            description: 'F_avg = J/Δt with correct magnitude',
            keywords: ['average force', 'F_avg', 'J/Δt', 'newtons']
          }
        ],
        sampleAnswer:
          'J = $m_{2}v_{2f}$ = 0.30(4.227 x̂ − 3.333 ŷ) = (1.268 x̂ − 1.000 ŷ) N·s\n|J| = $\\sqrt{1.268^{2} + 1.000^{2}}$ = $\\sqrt{2.608}$ ≈ 1.615 N·s\n\nF_avg = J/Δt = 1.615/(0.008) ≈ 201.9 N\nDirection: 38.3° below +x axis'
      },
      {
        label: '(d)',
        prompt:
          'If the force on $m_{2}$ varies as F(t) = $F_{0}$ sin(πt/Δt) during the collision, determine $F_{0}$ such that the impulse magnitude matches part (c).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set up integral: |J| = $\\int_{0}^{\\Delta}t$ $F_{0}$ sin(πt/Δt) dt',
            keywords: ['integral', '∫', 'sin', 'impulse integral']
          },
          {
            points: 1,
            description: 'Evaluate integral: |J| = $F_{0}(2\\Delta t/\\pi )$ → $F_{0}$ = π|J|/(2Δt)',
            keywords: ['F₀ =', '2Δt/π', 'evaluate', 'peak force']
          }
        ],
        sampleAnswer:
          '|J| = $\\int_{0}^{\\Delta}t$ $F_{0}$ sin(πt/Δt) dt\n\nLet u = πt/Δt, du = π/Δt dt:\n= $F_{0}(\\Delta t/\\pi )\\int_{0}^{\\pi}$ sin u du = $F_{0}(\\Delta t/\\pi )$[−cos u]$ {}_{0}^{\\pi}$ = $F_{0}(\\Delta t/\\pi )(2)$ = $2F_{0}\\Delta t/\\pi$\n\n$F_{0}$ = π|J|/(2Δt) = π(1.615)/(2 × 0.008) ≈ 317 N'
      }
    ]
  },

  // ── LONG 5: Oscillations + Rotation (physical pendulum) ──
  {
    id: 'mech-long-5',
    type: 'long',
    unit: 6,
    title: 'Physical Pendulum: SHM, Energy, and Angular Momentum',
    prompt:
      'A uniform rod of mass M = 1.2 kg and length L = 0.90 m is free to rotate about a frictionless horizontal axle through one end. The rotational inertia of a uniform rod about its end is I = (1/3)ML^2. Use g = 9.8 m/s^2.',
    totalPoints: 10,
    timeRecommendation: 25,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'The rod hangs vertically and is displaced by a small angle θ from equilibrium. Starting from the rotational form of Newton\'s second law, derive the differential equation of motion and show that the motion is simple harmonic for small angles.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Torque about the pivot: τ = −Mg(L/2)sinθ (weight acts at the center of mass)',
            keywords: ['torque', 'Mg(L/2)', 'sinθ', 'center of mass']
          },
          {
            points: 1,
            description: 'Apply τ = Iα with I = (1/3)ML²: $(1/3)ML^{2}(d^{2}\\theta/dt^{2})$ = −Mg(L/2)sinθ',
            keywords: ['Iα', '(1/3)ML²', 'd²θ/dt²']
          },
          {
            points: 1,
            description: 'Small-angle approximation sinθ ≈ θ gives $d^{2}\\theta/dt^{2}$ = −(3g/2L)θ — SHM with $\\omega^{2}$ = 3g/2L',
            keywords: ['small angle', 'sinθ ≈ θ', '3g/2L', 'simple harmonic']
          }
        ],
        sampleAnswer:
          'Torque about the pivot from gravity (acting at the center of mass, L/2 from the axle): τ = −Mg(L/2)sinθ.\n\nRotational second law: Iα = τ with I = (1/3)ML²:\n$(1/3)ML^{2}(d^{2}\\theta/dt^{2})$ = −Mg(L/2)sinθ\n\nFor small angles sinθ ≈ θ:\n$d^{2}\\theta/dt^{2}$ = −(3g/2L)θ\n\nThis has the SHM form $d^{2}\\theta/dt^{2}$ = −$\\omega^{2}\\theta$ with $\\omega^{2}$ = 3g/(2L), so the motion is simple harmonic.'
      },
      {
        label: '(b)',
        prompt: 'Determine the period of small oscillations of the rod.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'T = 2π/ω = $2\\pi\\sqrt{2L/(3g)}$',
            keywords: ['T = 2π/ω', '√(2L/3g)', 'period']
          },
          {
            points: 1,
            description: 'Numeric: T = 2π√(1.8/29.4) ≈ 1.55 s',
            keywords: ['1.55', 's']
          }
        ],
        sampleAnswer:
          'T = 2π/ω = $2\\pi\\sqrt{2L/(3g)}$ = 2π√(2 × 0.90 / (3 × 9.8)) = 2π√(0.0612) ≈ 2π(0.247) ≈ 1.55 s.'
      },
      {
        label: '(c)',
        prompt:
          'The rod is now held horizontal and released from rest. Using energy methods, determine the angular speed of the rod as it swings through the vertical position. (The small-angle approximation does not apply here.)',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'Center of mass falls Δh = L/2, so ΔU = Mg(L/2)',
            keywords: ['L/2', 'Mg(L/2)', 'center of mass drop']
          },
          {
            points: 1,
            description: 'Energy conservation: Mg(L/2) = $(1/2)I\\omega^{2}$ with I = (1/3)ML²',
            keywords: ['conservation', '(1/2)Iω²']
          },
          {
            points: 1,
            description: 'ω = $\\sqrt{3g/L}$ = √(29.4/0.90) ≈ 5.72 rad/s',
            keywords: ['√(3g/L)', '5.72', 'rad/s']
          }
        ],
        sampleAnswer:
          'The center of mass falls Δh = L/2 = 0.45 m.\n\nMg(L/2) = $(1/2)I\\omega^{2}$ = $(1/2)(1/3)ML^{2}\\omega^{2}$\n\nSolving: $\\omega$ = $\\sqrt{3g/L}$ = √(3 × 9.8 / 0.90) = √32.7 ≈ 5.72 rad/s.\n\n(Check: ΔU = 1.2 × 9.8 × 0.45 = 5.29 J; (1/2)(0.324)(5.72²) ≈ 5.30 J ✓)'
      },
      {
        label: '(d)',
        prompt: 'Determine the magnitude of the rod\'s angular momentum about the axle as it passes through the vertical position.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'L = Iω with I = (1/3)ML² = 0.324 kg·m²',
            keywords: ['L = Iω', '0.324']
          },
          {
            points: 1,
            description: 'L = 0.324 × 5.72 ≈ 1.85 kg·m²/s',
            keywords: ['1.85', 'kg·m²/s']
          }
        ],
        sampleAnswer:
          'I = (1/3)ML² = (1/3)(1.2)(0.90²) = 0.324 kg·m².\n\nL = Iω = 0.324 × 5.72 ≈ 1.85 kg·m²/s, directed along the axle by the right-hand rule.'
      }
    ]
  },

]

// ─────────────────────────────────────────────
// SHORT FRQs (8 questions, 4 pts each, 10 min)
// ─────────────────────────────────────────────

const shortFRQs: PhysicsCMechFRQ[] = [
  // ── SHORT 1: Variable Acceleration ──
  {
    id: 'mech-short-1',
    type: 'short',
    unit: 1,
    title: 'Variable Acceleration from a Time-Dependent Force',
    prompt:
      'A 3.0 kg object moves along the x-axis under the influence of a single force F(t) = $6t^{2}$ N, where t is in seconds. The object starts from rest at x = 0 at t = 0.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive expressions for the velocity v(t) and position x(t) by integrating the equation of motion.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'v(t) = ∫a dt = $\\int (2t^{2})dt$ = $(2/3)t^{3}$',
            keywords: ['v(t)', 'integrate', '(2/3)t³', 'velocity']
          },
          {
            points: 1,
            description: 'x(t) = ∫v dt = $(1/6)t^{4}$',
            keywords: ['x(t)', 'integrate', 't⁴/6', 'position']
          }
        ],
        sampleAnswer:
          'a(t) = F(t)/m = $6t^{2}/3$ = $2t^{2}$ $m/s^{2}$\n\nv(t) = $\\int_{0}^{t}$ 2t\'$ {}^{2}$ dt\' = $(2/3)t^{3}$ m/s\n\nx(t) = $\\int_{0}^{t}$ (2/3)t\'$ {}^{3}$ dt\' = $(2/3)(t^{4}/4)$ = $t^{4}/6$ m'
      },
      {
        label: '(b)',
        prompt:
          'Find the velocity and position of the object at t = 3.0 s.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'v(3) = (2/3)(27) = 18 m/s',
            keywords: ['18', 'm/s', 'v(3)']
          },
          {
            points: 1,
            description: 'x(3) = (81)/6 = 13.5 m',
            keywords: ['13.5', 'm', 'x(3)']
          }
        ],
        sampleAnswer:
          'v(3.0) = $(2/3)(3.0)^{3}$ = (2/3)(27) = 18 m/s\n\nx(3.0) = $(3.0)^{4}/6$ = 81/6 = 13.5 m'
      }
    ]
  },

  // ── SHORT 2: Friction on an Incline ──
  {
    id: 'mech-short-2',
    type: 'short',
    unit: 2,
    title: 'Block on a Rough Incline with Applied Force',
    prompt:
      'A block of mass m = 5.0 kg rests on an incline of angle θ = 37° with coefficient of static friction $\\mu_{s}$ = 0.45. A horizontal force F is applied to the block.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Resolve forces along and perpendicular to the incline. Write the equilibrium equations when the block is on the verge of sliding up the incline.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Perpendicular: N = mg cos θ + F sin θ',
            keywords: ['N =', 'mg cos θ', 'F sin θ', 'normal force', 'perpendicular']
          },
          {
            points: 1,
            description: 'Along incline: F cos θ = mg sin θ + $\\mu_{s}N$ (for sliding up)',
            keywords: ['F cos θ', 'mg sin θ', 'μₛN', 'equilibrium', 'along incline']
          }
        ],
        sampleAnswer:
          'Axes: parallel and perpendicular to incline.\n\nPerpendicular equilibrium: N = mg cos θ + F sin θ\n\nParallel (verge of sliding up): F cos θ = mg sin θ + $\\mu_{s}N$\nF cos θ = mg sin θ + $\\mu_{s}(mg \\cos \\theta + F \\sin \\theta )$\nF cos θ − $\\mu_{s}$ F sin θ = mg sin θ + $\\mu_{s}$ mg cos θ\nF(cos θ − $\\mu_{s}$ sin θ) = mg(sin θ + $\\mu_{s}$ cos θ)'
      },
      {
        label: '(b)',
        prompt:
          'Solve for the minimum horizontal force F to start the block moving up the incline.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Correctly isolate F: F = mg(sin θ + $\\mu_{s}$ cos θ)/(cos θ − $\\mu_{s}$ sin θ)',
            keywords: ['F =', 'sin θ + μₛ cos θ', 'cos θ − μₛ sin θ', 'isolate']
          },
          {
            points: 1,
            description: 'Numerical answer: F ≈ 89 N',
            keywords: ['89', 'N', 'newtons', 'numerical']
          }
        ],
        sampleAnswer:
          'F = mg(sin θ + $\\mu_{s}$ cos θ)/(cos θ − $\\mu_{s}$ sin θ)\n\nsin 37° ≈ 0.6018, cos 37° ≈ 0.7986\n\nNumerator: 5.0(9.8)(0.6018 + 0.45 × 0.7986) = 49(0.6018 + 0.3594) = 49(0.9612) = 47.10\nDenominator: 0.7986 − 0.45(0.6018) = 0.7986 − 0.2708 = 0.5278\n\nF = 47.10/0.5278 ≈ 89.2 N'
      }
    ]
  },

  // ── SHORT 3: Conservative Forces ──
  {
    id: 'mech-short-3',
    type: 'short',
    unit: 3,
    title: 'Potential Energy and Conservative Force Fields',
    prompt:
      'A particle of mass m = 2.0 kg moves in one dimension under a potential energy function U(x) = 3x⁴ − 8x² + 2 (in joules, with x in meters).',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive the force F(x) from the potential energy. Find all equilibrium positions and classify each as stable or unstable.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'F(x) = −dU/dx = $-12x^{3}$ + 16x = $-4x(3x^{2} - 4)$',
            keywords: ['−dU/dx', 'derivative', '−12x³', '16x', 'force']
          },
          {
            points: 1,
            description: 'Equilibrium at x = 0 (unstable, $d^{2}U/dx^{2}$ < 0) and x = $\\pm \\sqrt{4/3}$ (stable, $d^{2}U/dx^{2}$ > 0)',
            keywords: ['equilibrium', 'x = 0', 'unstable', 'stable', '±√(4/3)', 'd²U/dx²']
          }
        ],
        sampleAnswer:
          'F(x) = −dU/dx = $-(12x^{3} - 16x)$ = $-12x^{3}$ + 16x\n\nEquilibrium: F = 0 → $-4x(3x^{2} - 4)$ = 0\nx = 0 or x = $\\pm \\sqrt{4/3}$ = $\\pm 2/\\sqrt{3}$ ≈ ±1.155 m\n\n$d^{2}U/dx^{2}$ = $36x^{2}$ − 16\n\nAt x = 0: $d^{2}U/dx^{2}$ = −16 < 0 → concave down → unstable\nAt x = $\\pm 2/\\sqrt{3}$: $d^{2}U/dx^{2}$ = 36(4/3) − 16 = 48 − 16 = 32 > 0 → concave up → stable'
      },
      {
        label: '(b)',
        prompt:
          'If the particle is released from rest at x = 2.0 m, determine its speed as it passes through the nearest stable equilibrium point.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Energy conservation: $\\tfrac{1}{2} mv^{2}$ = U(2.0) − $U(2/\\sqrt{3})$',
            keywords: ['energy conservation', 'U(2.0)', 'U(2/√3)', 'ΔU']
          },
          {
            points: 1,
            description: 'Correct numerical speed',
            keywords: ['v =', 'm/s', 'speed']
          }
        ],
        sampleAnswer:
          'U(2.0) = 3(16) − 8(4) + 2 = 48 − 32 + 2 = 18 J\n$U(2/\\sqrt{3})$ = $3(4/3)^{2}$ − 8(4/3) + 2 = 3(16/9) − 32/3 + 2 = 16/3 − 32/3 + 2 = −16/3 + 2 = −10/3 ≈ −3.333 J\n\n$\\tfrac{1}{2} mv^{2}$ = U(2.0) − $U(2/\\sqrt{3})$ = 18 − (−3.333) = 21.333 J\n$v^{2}$ = 2(21.333)/2.0 = 21.333\nv ≈ 4.62 m/s'
      }
    ]
  },

  // ── SHORT 4: Center of Mass ──
  {
    id: 'mech-short-4',
    type: 'short',
    unit: 4,
    title: 'Center of Mass of a Non-Uniform Rod',
    prompt:
      'A thin rod of length L = 2.0 m has a linear mass density that varies as λ(x) = $\\lambda_{0}(1 + x/L)$, where $\\lambda_{0}$ = 3.0 kg/m and x is measured from one end.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the total mass M of the rod by integrating the linear mass density.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set up M = $\\int_{0}$ᴸ $\\lambda_{0}(1 + x/L)$ dx',
            keywords: ['∫', 'integral', 'λ₀(1 + x/L)', 'mass']
          },
          {
            points: 1,
            description: 'Evaluate: M = $\\lambda_{0}(L + L/2)$ = $\\lambda_{0}(3L/2)$ = 9.0 kg',
            keywords: ['9.0', 'kg', '3L/2', 'total mass']
          }
        ],
        sampleAnswer:
          'M = $\\int_{0}$ᴸ λ(x) dx = $\\int_{0}$ᴸ $\\lambda_{0}(1 + x/L)$ dx = $\\lambda_{0}$[x + $x^{2}/(2L)$]$ {}_{0}$ᴸ = $\\lambda_{0}(L + L/2)$ = $3\\lambda_{0}L/2$\n\nM = 3(3.0)(2.0)/2 = 9.0 kg'
      },
      {
        label: '(b)',
        prompt:
          'Find the position of the center of mass x_cm of the rod.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'Set up x_cm = $(1/M)\\int_{0}$ᴸ xλ(x) dx = $(1/M)\\int_{0}$ᴸ $\\lambda_{0}x(1 + x/L)$ dx',
            keywords: ['x_cm', '∫xλ', 'center of mass integral']
          },
          {
            points: 1,
            description: 'Evaluate: x_cm = $(\\lambda_{0}/M)(L^{2}/2 + L^{2}/3)$ = $(\\lambda_{0}/M)(5L^{2}/6)$',
            keywords: ['x_cm =', '5L²/6', 'numerical', 'center of mass']
          }
        ],
        sampleAnswer:
          'x_cm = $(1/M)\\int_{0}$ᴸ $x\\lambda_{0}(1 + x/L)$ dx = $(\\lambda_{0}/M)\\int_{0}$ᴸ $(x + x^{2}/L)$ dx\n\n= $(\\lambda_{0}/M)$[$x^{2}/2$ + $x^{3}/(3L)$]$ {}_{0}$ᴸ = $(\\lambda_{0}/M)(L^{2}/2 + L^{2}/3)$ = $(\\lambda_{0}/M)(5L^{2}/6)$\n\nx_cm = (3.0)(5 × 4/6)/9.0 = (3.0)(20/6)/9.0 = 10/9.0 ≈ 1.11 m\n\nThe center of mass is at x_cm ≈ 1.11 m from the lighter end, past the midpoint as expected.'
      }
    ]
  },

  // ── SHORT 5: Moment of Inertia ──
  {
    id: 'mech-short-5',
    type: 'short',
    unit: 5,
    title: 'Moment of Inertia by Integration',
    prompt:
      'A uniform thin disk of mass M = 3.0 kg and radius R = 0.40 m has a circular hole of radius R/2 cut from it. The hole is centered at a distance R/2 from the center of the original disk.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the mass of the removed disk and the remaining piece.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description: 'Area ratio gives m_hole = M/4. Remaining mass = 3M/4.',
            keywords: ['M/4', '3M/4', 'area ratio', 'mass removed']
          }
        ],
        sampleAnswer:
          'The hole has radius R/2, so its area is $\\pi (R/2)^{2}$ = $\\pi R^{2}/4$.\nOriginal area = $\\pi R^{2}$.\nBy uniform density: m_hole = M × $(\\pi R^{2}/4)/(\\pi R^{2})$ = M/4 = 0.75 kg\nRemaining mass = M − M/4 = 3M/4 = 2.25 kg'
      },
      {
        label: '(b)',
        prompt:
          'Using the parallel axis theorem and the subtraction method, find the moment of inertia of the remaining piece about the center of the original disk.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description: 'I_full = $\\tfrac{1}{2} MR^{2}$ for the complete disk',
            keywords: ['½MR²', 'full disk', 'moment of inertia']
          },
          {
            points: 1,
            description: 'I_hole about original center: $\\tfrac{1}{2} (M/4)(R/2)^{2}$ + $(M/4)(R/2)^{2}$ = $(M/4)(R^{2}/8 + R^{2}/4)$ = $3MR^{2}/32$ using parallel axis theorem',
            keywords: ['parallel axis', 'I_hole', '3MR²/32', 'md²']
          },
          {
            points: 1,
            description: 'I_remaining = I_full − I_hole = $\\tfrac{1}{2} MR^{2}$ − $3MR^{2}/32$ = $13MR^{2}/32$',
            keywords: ['subtraction', '13MR²/32', 'I_remaining', 'final']
          }
        ],
        sampleAnswer:
          'I_full = $\\tfrac{1}{2} MR^{2}$ = $\\tfrac{1}{2} (3.0)(0.40^{2})$ = 0.240 $kg\\cdot m^{2}$\n\nFor the hole (disk of mass M/4, radius R/2) about its own center:\nI_hole,cm = $\\tfrac{1}{2} (M/4)(R/2)^{2}$ = $MR^{2}/32$\n\nUsing parallel axis theorem to shift to original center (distance d = R/2):\nI_hole = $MR^{2}/32$ + $(M/4)(R/2)^{2}$ = $MR^{2}/32$ + $MR^{2}/16$ = $3MR^{2}/32$\n\nI_remaining = I_full − I_hole = $MR^{2}/2$ − $3MR^{2}/32$ = $16MR^{2}/32$ − $3MR^{2}/32$ = $13MR^{2}/32$\n\n= 13(3.0)(0.16)/32 = 6.24/32 = 0.195 $kg\\cdot m^{2}$'
      }
    ]
  },

  // ── SHORT 6: SHM ──
  {
    id: 'mech-short-6',
    type: 'short',
    unit: 6,
    title: 'Simple Harmonic Motion from a Potential Well',
    prompt:
      'A particle of mass m = 0.50 kg moves in a potential U(x) = $U_{0}(x^{2}/a^{2} - 1)^{2}$, where $U_{0}$ = 20 J and a = 1.0 m. The particle oscillates with small amplitude about one of the stable equilibrium points.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Find the stable equilibrium positions by setting dU/dx = 0. Then compute $d^{2}U/dx^{2}$ at a stable equilibrium to find the effective spring constant k_eff.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'dU/dx = 0 at x = 0 (unstable) and x = ±a (stable)',
            keywords: ['dU/dx = 0', 'x = ±a', 'stable', 'equilibrium']
          },
          {
            points: 1,
            description: 'k_eff = $d^{2}U/dx^{2}$|_{x=a} = $8U_{0}/a^{2}$ = 160 N/m',
            keywords: ['d²U/dx²', 'k_eff', '8U₀/a²', '160']
          }
        ],
        sampleAnswer:
          'U(x) = $U_{0}(x^{2}/a^{2} - 1)^{2}$. Let u = $x^{2}/a^{2}$ − 1.\ndU/dx = $2U_{0}(x^{2}/a^{2} - 1)(2x/a^{2})$ = $4U_{0}x(x^{2} - a^{2})/a^{4}$\n\nSetting dU/dx = 0: x = 0 or x = ±a\n\n$d^{2}U/dx^{2}$ = $(4U_{0}/a^{4})$[$3x^{2}$ − $a^{2}$] ... evaluated more carefully:\nExpand: U = $U_{0}(x^{4}/a^{4} - 2x^{2}/a^{2} + 1)$\ndU/dx = $U_{0}(4x^{3}/a^{4} - 4x/a^{2})$\n$d^{2}U/dx^{2}$ = $U_{0}(12x^{2}/a^{4} - 4/a^{2})$\n\nAt x = ±a: $d^{2}U/dx^{2}$ = $U_{0}(12a^{2}/a^{4} - 4/a^{2})$ = $U_{0}(12/a^{2} - 4/a^{2})$ = $8U_{0}/a^{2}$\n\nk_eff = $8U_{0}/a^{2}$ = $8(20)/(1.0^{2})$ = 160 N/m'
      },
      {
        label: '(b)',
        prompt:
          'Determine the angular frequency ω and period T for small oscillations about x = a.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'ω = $\\sqrt{k_{eff}/m}$ = $\\sqrt{160/0.50}$ = $\\sqrt{320}$ ≈ 17.9 rad/s',
            keywords: ['ω', '√(k_eff/m)', '17.9', 'angular frequency']
          },
          {
            points: 1,
            description: 'T = 2π/ω ≈ 0.351 s',
            keywords: ['T', '2π/ω', '0.35', 'period']
          }
        ],
        sampleAnswer:
          'ω = $\\sqrt{k_{eff}/m}$ = $\\sqrt{160/0.50}$ = $\\sqrt{320}$ ≈ 17.9 rad/s\n\nT = 2π/ω = 2π/17.9 ≈ 0.351 s'
      }
    ]
  },

  // ── SHORT 7: Gravitational Orbits ──
  {
    id: 'mech-short-7',
    type: 'short',
    unit: 7,
    title: 'Satellite Orbit Mechanics',
    prompt:
      'A satellite of mass m orbits Earth (mass M_E = $5.97 \\times 10^{24}$ kg, radius R_E = $6.37 \\times 10^{6}$ m) in a circular orbit at altitude h = 400 km above the surface.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive the orbital speed v by setting the gravitational force equal to the centripetal acceleration. Calculate v numerically.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: '$GMm/r^{2}$ = $mv^{2}/r$ → v = $\\sqrt{GM/r}$ with r = R_E + h',
            keywords: ['GMm/r²', 'mv²/r', '√(GM/r)', 'centripetal', 'gravitational']
          },
          {
            points: 1,
            description: 'Correct numerical: v ≈ 7.67 km/s',
            keywords: ['7.67', '7670', 'km/s', 'm/s']
          }
        ],
        sampleAnswer:
          'Setting gravitational force = centripetal force:\nGM_E $m/r^{2}$ = $mv^{2}/r$ → $v^{2}$ = GM_E/r\n\nr = R_E + h = $6.37 \\times 10^{6}$ + $4.0 \\times 10^{5}$ = $6.77 \\times 10^{6}$ m\n\nv = $\\sqrt{GM_{E}/r}$ = $\\sqrt{6.674 \\times 10^{-11} \\times 5.97 \\times 10^{24} / 6.77 \\times 10^{6}}$\n= $\\sqrt{3.986 \\times 10^{14}/6.77 \\times 10^{6}}$ = $\\sqrt{5.888 \\times 10^{7}}$ ≈ 7674 m/s ≈ 7.67 km/s'
      },
      {
        label: '(b)',
        prompt:
          'Derive the total mechanical energy of the satellite in terms of G, M_E, m, and r. What is the minimum energy (in terms of m) needed to move the satellite from this orbit to infinity?',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'E = KE + PE = $\\tfrac{1}{2} mv^{2}$ − GMm/r = −GMm/(2r)',
            keywords: ['E = −GMm/(2r)', 'total energy', 'KE + PE', 'negative']
          },
          {
            points: 1,
            description: 'Energy to escape = |E| = GMm/(2r), numerical for given orbit',
            keywords: ['GMm/(2r)', 'escape', 'binding energy', 'infinity']
          }
        ],
        sampleAnswer:
          'KE = $\\tfrac{1}{2} mv^{2}$ = ½m(GM_E/r) = GM_E m/(2r)\nPE = −GM_E m/r\n\nE_total = KE + PE = GM_E m/(2r) − GM_E m/r = −GM_E m/(2r)\n\nTo escape to infinity (E_final = 0):\nΔE = 0 − (−GM_E m/(2r)) = GM_E m/(2r)\n\n= $(6.674 \\times 10^{-11})(5.97 \\times 10^{24})m$ / $(2 \\times 6.77 \\times 10^{6})$\n= $2.944 \\times 10^{7}$ m  joules (where m is satellite mass in kg)'
      }
    ]
  },

  // ── SHORT 8: Angular Momentum ──
  {
    id: 'mech-short-8',
    type: 'short',
    unit: 5,
    title: 'Angular Momentum Conservation with a Collapsing System',
    prompt:
      'A small puck of mass m = 0.25 kg moves in a circle of radius $r_{1}$ = 0.80 m on a frictionless table. The puck is attached to a string that passes through a hole in the center of the table. The string is pulled from below, reducing the radius to $r_{2}$ = 0.30 m. The initial speed of the puck is $v_{1}$ = 2.0 m/s.',
    totalPoints: 4,
    timeRecommendation: 10,
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Using conservation of angular momentum, find the final speed $v_{2}$ of the puck.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'L = mvr = const → $mv_{1}r_{1}$ = $mv_{2}r_{2}$',
            keywords: ['angular momentum', 'conservation', 'mvr', 'L = const']
          },
          {
            points: 1,
            description: '$v_{2}$ = $v_{1}r_{1}/r_{2}$ = 2.0(0.80)/0.30 ≈ 5.33 m/s',
            keywords: ['v₂', '5.33', 'v₁r₁/r₂', 'm/s']
          }
        ],
        sampleAnswer:
          'No external torque acts about the central axis (the string force is radial), so angular momentum is conserved:\n\n$L_{1}$ = $L_{2}$\n$mv_{1}r_{1}$ = $mv_{2}r_{2}$\n$v_{2}$ = $v_{1}r_{1}/r_{2}$ = 2.0(0.80)/0.30 = 5.33 m/s'
      },
      {
        label: '(b)',
        prompt:
          'Calculate the work done by the string tension in pulling the puck inward. Use the work-energy theorem.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description: 'W = ΔKE = $\\tfrac{1}{2} mv_{2}^{2}$ − $\\tfrac{1}{2} mv_{1}^{2}$',
            keywords: ['W = ΔKE', '½mv₂²', '½mv₁²', 'work-energy']
          },
          {
            points: 1,
            description: 'W = $\\tfrac{1}{2} (0.25)(5.33^{2} - 4.0)$ = ½(0.25)(28.44 − 4.0) ≈ 3.06 J',
            keywords: ['3.06', 'joules', 'work', 'numerical']
          }
        ],
        sampleAnswer:
          'W = ΔKE = $\\tfrac{1}{2} mv_{2}^{2}$ − $\\tfrac{1}{2} mv_{1}^{2}$ = $\\tfrac{1}{2} (0.25)(5.33^{2} - 2.0^{2})$\n= 0.125(28.41 − 4.0) = 0.125(24.41) ≈ 3.05 J\n\nThe string does approximately 3.05 J of work on the puck.'
      }
    ]
  }
]

// ─────────────────────────────────────────────
// EXPORT HELPERS
// ─────────────────────────────────────────────

export const getAllFRQs = (): PhysicsCMechFRQ[] => [...longFRQs, ...shortFRQs]

export const getLongFRQs = (): PhysicsCMechFRQ[] => [...longFRQs]

export const getShortFRQs = (): PhysicsCMechFRQ[] => [...shortFRQs]

/**
 * Generates a simulated full AP Physics C: Mechanics FRQ exam section.
 * Picks 3 long FRQs (random) + 4 short FRQs (random), no repeats.
 */
export const generateFullExamFRQs = (): {
  longQuestions: PhysicsCMechFRQ[]
  shortQuestions: PhysicsCMechFRQ[]
  totalPoints: number
  totalTime: number
} => {
  const shuffled = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const longQuestions = shuffled(longFRQs).slice(0, 3)
  const shortQuestions = shuffled(shortFRQs).slice(0, 4)

  const totalPoints =
    longQuestions.reduce((s, q) => s + q.totalPoints, 0) +
    shortQuestions.reduce((s, q) => s + q.totalPoints, 0)

  const totalTime =
    longQuestions.reduce((s, q) => s + q.timeRecommendation, 0) +
    shortQuestions.reduce((s, q) => s + q.timeRecommendation, 0)

  return { longQuestions, shortQuestions, totalPoints, totalTime }
}
