// AP Physics 1 Free Response Questions
// Covers Units 1-7: Kinematics, Dynamics, Circular Motion & Gravitation,
// Energy, Momentum, Simple Harmonic Motion, Torque & Rotational Motion

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

export interface Physics1FRQ {
  id: string
  type: 'long' | 'short'
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
  // LONG FRQ 1 — Experimental Design (Coefficient of Kinetic Friction)
  // Units 1 & 2 (Kinematics + Dynamics)
  // =========================================================================
  {
    id: 'phys1-frq-long-1',
    type: 'long',
    unit: 2,
    title: 'Experimental Design: Coefficient of Kinetic Friction',
    prompt:
      'A student has access to the following equipment: a wooden block, a long flat surface, a spring launcher with an adjustable compression setting, a meterstick, a stopwatch, and a balance. The student wants to determine the coefficient of kinetic friction $\\mu_k$ between the block and the surface. The spring launcher is mounted at one end of the surface and can propel the block horizontally along the surface.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Design an experimental procedure the student could use to determine $\\mu_k$. Describe the measurements to be taken and how each measurement will be used. Include enough detail so that another student could replicate the experiment.',
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              'Describes launching the block at multiple different initial speeds (or compression settings) and measuring the distance the block slides before stopping.',
            keywords: ['launch', 'distance', 'multiple trials', 'compression'],
          },
          {
            points: 1,
            description:
              'Identifies that the mass of the block should be measured and that either the initial speed or a method to determine it (e.g., video analysis, photogate, or energy argument) is described.',
            keywords: ['mass', 'initial speed', 'velocity', 'photogate'],
          },
          {
            points: 1,
            description:
              'Describes repeating measurements for multiple trials and varying conditions to reduce uncertainty.',
            keywords: ['repeat', 'trials', 'uncertainty', 'average'],
          },
        ],
        sampleAnswer:
          '1. Measure the mass $m$ of the block using the balance.\n2. Set the spring launcher to a specific compression distance $x_1$. Launch the block and use the meterstick to measure the distance $d$ the block travels along the surface before coming to rest.\n3. Repeat the launch 3–5 times at the same compression to obtain an average sliding distance.\n4. Change the compression to a different setting and repeat.\n5. Record the compression distance and sliding distance for at least 5 different compression settings.\n6. The initial kinetic energy equals the work done by friction: $\\frac{1}{2}kx^2 = \\mu_k m g d$. By plotting $d$ vs. $x^2$, the slope relates to $\\mu_k$.',
      },
      {
        label: '(b)',
        prompt:
          'On the axes below, sketch a graph of the data that could be plotted to yield a straight line whose slope can be used to determine $\\mu_k$. Label both axes with the quantities being plotted, including units.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correctly identifies a linearizable relationship such as $d$ vs. $x^2$ (or $v_0^2$ vs. $d$) and labels axes with correct variable names and units.',
            keywords: ['linear', 'axes', 'units', 'slope'],
          },
          {
            points: 1,
            description:
              'Sketch shows a straight line through the origin with a positive slope consistent with the relationship.',
            keywords: ['straight line', 'origin', 'positive slope', 'proportional'],
          },
        ],
        sampleAnswer:
          'Plot sliding distance $d$ (m) on the vertical axis vs. spring compression squared $x^2$ (m²) on the horizontal axis. The graph should be a straight line through the origin. From $\\frac{1}{2}kx^2 = \\mu_k m g d$, we get $d = \\frac{k}{2\\mu_k m g} x^2$. The slope is $\\frac{k}{2\\mu_k m g}$, so $\\mu_k = \\frac{k}{2mg \\cdot \\text{slope}}$.',
      },
      {
        label: '(c)',
        prompt:
          'Describe how $\\mu_k$ would be calculated from the slope of the line in part (b).',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Correctly derives $\\mu_k$ from the slope expression, showing $\\mu_k = \\frac{k}{2mg \\cdot \\text{slope}}$ or equivalent depending on the graph chosen.',
            keywords: ['slope', 'friction', 'solve', 'coefficient'],
          },
        ],
        sampleAnswer:
          'From the relationship $d = \\frac{k}{2\\mu_k m g} x^2$, the slope of the $d$ vs. $x^2$ graph is $S = \\frac{k}{2\\mu_k m g}$. Solving for the coefficient of kinetic friction: $\\mu_k = \\frac{k}{2mgS}$.',
      },
      {
        label: '(d)',
        prompt:
          'The student finds that the measured value of $\\mu_k$ is consistently higher than the accepted value. Identify one physical source of systematic error (not human or random error) that could account for this discrepancy, and explain how it leads to an overestimate of $\\mu_k$.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Identifies a valid systematic error (e.g., air resistance, the surface not being perfectly level, energy lost to vibrations/sound) and correctly explains how it causes an overestimate of $\\mu_k$.',
            keywords: ['systematic', 'air resistance', 'energy loss', 'overestimate'],
          },
        ],
        sampleAnswer:
          'Air resistance acts as an additional retarding force on the block. The block decelerates faster than it would from friction alone, so it stops in a shorter distance. When the student attributes all the deceleration to friction, the calculated $\\mu_k$ is higher than the true value because the model does not account for the extra energy lost to air drag.',
      },
    ],
  },

  // =========================================================================
  // LONG FRQ 2 — Quantitative/Qualitative (Collisions & Momentum)
  // Units 4 & 5 (Energy + Momentum)
  // =========================================================================
  {
    id: 'phys1-frq-long-2',
    type: 'long',
    unit: 5,
    title: 'Collisions and Momentum Conservation',
    prompt:
      'A cart of mass $m_1 = 2.0\\text{ kg}$ moves to the right on a frictionless track at speed $v_0 = 3.0\\text{ m/s}$ toward a stationary cart of mass $m_2 = 4.0\\text{ kg}$. The two carts collide.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'The collision is perfectly inelastic (the carts stick together). Calculate the velocity of the combined carts immediately after the collision. Indicate the direction of motion.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correctly applies conservation of momentum: $m_1 v_0 = (m_1 + m_2) v_f$.',
            keywords: ['conservation', 'momentum', 'equation', 'inelastic'],
          },
          {
            points: 1,
            description:
              'Arrives at $v_f = 1.0\\text{ m/s}$ to the right with correct units and direction.',
            keywords: ['1.0', 'm/s', 'right', 'final velocity'],
          },
        ],
        sampleAnswer:
          'Conservation of momentum: $m_1 v_0 = (m_1 + m_2)v_f$\n$v_f = \\frac{m_1 v_0}{m_1 + m_2} = \\frac{(2.0)(3.0)}{2.0 + 4.0} = \\frac{6.0}{6.0} = 1.0\\text{ m/s}$ to the right.',
      },
      {
        label: '(b)',
        prompt:
          'Calculate the kinetic energy lost during the perfectly inelastic collision. Express your answer in joules.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correctly calculates initial KE ($\\frac{1}{2}m_1 v_0^2 = 9.0\\text{ J}$) and final KE ($\\frac{1}{2}(m_1+m_2)v_f^2 = 3.0\\text{ J}$).',
            keywords: ['kinetic energy', 'initial', 'final', 'calculation'],
          },
          {
            points: 1,
            description:
              'Determines energy lost = $9.0 - 3.0 = 6.0\\text{ J}$.',
            keywords: ['6.0', 'joules', 'energy lost', 'difference'],
          },
        ],
        sampleAnswer:
          '$KE_i = \\frac{1}{2}(2.0)(3.0)^2 = 9.0\\text{ J}$\n$KE_f = \\frac{1}{2}(6.0)(1.0)^2 = 3.0\\text{ J}$\nEnergy lost $= 9.0 - 3.0 = 6.0\\text{ J}$.',
      },
      {
        label: '(c)',
        prompt:
          'Now consider a different scenario in which the collision is perfectly elastic instead. Calculate the velocity of each cart after the elastic collision.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets up both conservation of momentum and conservation of kinetic energy (or uses the elastic collision formulas).',
            keywords: ['elastic', 'conservation', 'momentum', 'kinetic energy'],
          },
          {
            points: 1,
            description:
              'Correctly calculates $v_1 = -1.0\\text{ m/s}$ (to the left) and $v_2 = 2.0\\text{ m/s}$ (to the right).',
            keywords: ['-1.0', '2.0', 'velocity', 'elastic result'],
          },
        ],
        sampleAnswer:
          'Using elastic collision formulas:\n$v_1 = \\frac{m_1 - m_2}{m_1 + m_2}v_0 = \\frac{2.0 - 4.0}{6.0}(3.0) = -1.0\\text{ m/s}$ (to the left)\n$v_2 = \\frac{2m_1}{m_1 + m_2}v_0 = \\frac{2(2.0)}{6.0}(3.0) = 2.0\\text{ m/s}$ (to the right).',
      },
      {
        label: '(d)',
        prompt:
          'Without performing any additional calculations, explain why the lighter cart reverses direction in the elastic collision but not in the perfectly inelastic collision. Use physical reasoning based on the nature of each collision type.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains that in an elastic collision, kinetic energy is conserved and the repulsive contact force acts long enough to reverse the lighter cart, while in a perfectly inelastic collision the carts deform/stick and kinetic energy is converted to internal energy, so the lighter cart cannot rebound.',
            keywords: ['rebound', 'kinetic energy conserved', 'deformation', 'inelastic sticking'],
          },
        ],
        sampleAnswer:
          'In a perfectly elastic collision, the contact force between the carts acts like a spring — it compresses and then pushes back, returning all the deformation energy as kinetic energy. Because the heavier cart has more inertia, the lighter cart receives a large impulse in the reverse direction and bounces back. In a perfectly inelastic collision, the materials deform permanently (or latch together), converting kinetic energy into internal energy (heat, sound, deformation). There is no restoring force to push the lighter cart backward, so it moves forward with the heavier cart.',
      },
    ],
  },

  // =========================================================================
  // LONG FRQ 3 — Translation Between Representations
  // Units 1 & 4 (Kinematics + Energy)
  // =========================================================================
  {
    id: 'phys1-frq-long-3',
    type: 'long',
    unit: 4,
    title: 'Translating Between Representations: Block on a Ramp',
    prompt:
      'A block of mass $m = 0.50\\text{ kg}$ is released from rest at the top of a frictionless inclined ramp of height $h = 1.2\\text{ m}$. At the bottom of the ramp the block transitions onto a rough horizontal surface with coefficient of kinetic friction $\\mu_k = 0.40$. The block slides along the horizontal surface until it comes to rest.',
    totalPoints: 7,
    timeRecommendation: '~25 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Draw and label a free-body diagram for the block while it is sliding on the rough horizontal surface. Draw the vectors with correct relative magnitudes.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Shows correct forces: weight $mg$ downward, normal force $N$ upward, and kinetic friction $f_k$ pointing opposite to the direction of motion (to the left).',
            keywords: ['weight', 'normal', 'friction', 'free-body diagram'],
          },
          {
            points: 1,
            description:
              'Normal force and weight are equal in magnitude (vertical equilibrium), and friction is the only horizontal force. No extraneous forces are included.',
            keywords: ['equal magnitude', 'equilibrium', 'no extra forces', 'correct direction'],
          },
        ],
        sampleAnswer:
          'The free-body diagram shows three forces on the block:\n• $\\vec{F}_g = mg = 4.9\\text{ N}$ pointing downward\n• $\\vec{N} = 4.9\\text{ N}$ pointing upward (equal to weight since the surface is horizontal)\n• $\\vec{f}_k = \\mu_k N = 0.40 \\times 4.9 = 1.96\\text{ N}$ pointing to the left (opposing motion)\nNo applied force or other horizontal forces act on the block.',
      },
      {
        label: '(b)',
        prompt:
          'Using energy methods, calculate the speed of the block at the bottom of the ramp (just before it reaches the rough surface).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets up conservation of energy on the frictionless ramp: $mgh = \\frac{1}{2}mv^2$.',
            keywords: ['conservation', 'energy', 'potential', 'kinetic'],
          },
          {
            points: 1,
            description:
              'Correctly solves: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(1.2)} \\approx 4.85\\text{ m/s}$.',
            keywords: ['4.85', 'speed', 'calculation', 'square root'],
          },
        ],
        sampleAnswer:
          'On the frictionless ramp, mechanical energy is conserved:\n$mgh = \\frac{1}{2}mv^2$\n$v = \\sqrt{2gh} = \\sqrt{2(9.8)(1.2)} = \\sqrt{23.52} \\approx 4.85\\text{ m/s}$.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the distance the block travels along the rough horizontal surface before coming to rest.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Uses work-energy theorem or energy conservation: $\\frac{1}{2}mv^2 = \\mu_k mg d$, yielding $d = \\frac{v^2}{2\\mu_k g} = \\frac{h}{\\mu_k} = 3.0\\text{ m}$.',
            keywords: ['work-energy', 'distance', '3.0', 'friction work'],
          },
        ],
        sampleAnswer:
          'The kinetic energy at the bottom is entirely dissipated by friction:\n$\\frac{1}{2}mv^2 = \\mu_k mg d$\n$d = \\frac{v^2}{2\\mu_k g} = \\frac{2gh}{2\\mu_k g} = \\frac{h}{\\mu_k} = \\frac{1.2}{0.40} = 3.0\\text{ m}$.',
      },
      {
        label: '(d)',
        prompt:
          'Sketch qualitatively correct energy bar charts for the block at three instants: (i) at the top of the ramp, (ii) at the bottom of the ramp, and (iii) after the block has come to rest on the rough surface. Include bars for gravitational potential energy ($U_g$), kinetic energy ($KE$), and thermal energy ($E_{\\text{th}}$).',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'At the top: only $U_g$ bar (full height), $KE = 0$, $E_{\\text{th}} = 0$. At the bottom of the ramp: $U_g = 0$, $KE$ at full height, $E_{\\text{th}} = 0$. Total energy is the same for both.',
            keywords: ['potential', 'kinetic', 'top', 'bottom'],
          },
          {
            points: 1,
            description:
              'At rest on horizontal surface: $U_g = 0$, $KE = 0$, $E_{\\text{th}}$ at full height. Total energy is conserved across all three instants.',
            keywords: ['thermal', 'rest', 'conserved', 'bar chart'],
          },
        ],
        sampleAnswer:
          'Bar chart (i) – Top of ramp: $U_g$ = full bar, $KE$ = 0, $E_{\\text{th}}$ = 0.\nBar chart (ii) – Bottom of ramp: $U_g$ = 0, $KE$ = full bar, $E_{\\text{th}}$ = 0.\nBar chart (iii) – At rest: $U_g$ = 0, $KE$ = 0, $E_{\\text{th}}$ = full bar.\nThe total height of all bars combined remains constant across all three instants, demonstrating conservation of total energy.',
      },
    ],
  },

  // =========================================================================
  // SHORT FRQ 1 — Paragraph Argument (Newton's Third Law)
  // Unit 2 (Dynamics)
  // =========================================================================
  {
    id: 'phys1-frq-short-1',
    type: 'short',
    unit: 2,
    title: "Paragraph Argument: Newton's Third Law",
    prompt:
      'A large truck and a small car collide head-on. A student claims: "The truck exerts a greater force on the car than the car exerts on the truck because the truck is more massive and the car is crushed while the truck is barely damaged."',
    totalPoints: 5,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          "In a coherent, paragraph-length response, evaluate the student's claim. Use Newton's Third Law and the concepts of force, acceleration, and impulse to explain why the car sustains more damage than the truck, despite the forces being equal in magnitude.",
        maxPoints: 3,
        rubric: [
          {
            points: 1,
            description:
              "Correctly states Newton's Third Law: during the collision the force the truck exerts on the car is equal in magnitude and opposite in direction to the force the car exerts on the truck at every instant.",
            keywords: ['third law', 'equal', 'opposite', 'magnitude'],
          },
          {
            points: 1,
            description:
              'Explains that since the forces are equal but $m_{\\text{car}} < m_{\\text{truck}}$, the car experiences a greater acceleration ($a = F/m$) and therefore a greater change in velocity.',
            keywords: ['acceleration', 'less mass', 'greater', 'F equals ma'],
          },
          {
            points: 1,
            description:
              'Connects the greater acceleration/deceleration of the car to more deformation and damage, distinguishing between force and the effect of force (acceleration, deformation).',
            keywords: ['deformation', 'damage', 'effect', 'deceleration'],
          },
        ],
        sampleAnswer:
          "The student's claim is incorrect. By Newton's Third Law, the force the truck exerts on the car is exactly equal in magnitude to the force the car exerts on the truck at every instant during the collision — these are an action-reaction pair acting on different objects. The impulses are also equal in magnitude because the forces act over the same time interval. However, since the car has much less mass than the truck, Newton's Second Law ($a = F/m$) tells us the car experiences a much greater acceleration (deceleration) than the truck. This larger deceleration means the car's velocity changes more rapidly and its structure must absorb that change, leading to greater deformation and damage. The truck, being more massive, undergoes a smaller acceleration for the same force, so it sustains less structural damage. The difference in damage is not due to unequal forces but rather to the unequal masses and the resulting unequal accelerations.",
      },
      {
        label: '(b)',
        prompt:
          'The collision lasts $\\Delta t = 0.15\\text{ s}$. The car has mass $m_c = 1{,}000\\text{ kg}$ and initial speed $20\\text{ m/s}$. The truck has mass $m_t = 5{,}000\\text{ kg}$ and initial speed $15\\text{ m/s}$ (in the opposite direction). Calculate the change in velocity of the car, assuming a perfectly inelastic collision.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies conservation of momentum to find the final velocity of the combined wreck: $v_f = \\frac{m_c(20) + m_t(-15)}{m_c + m_t} = \\frac{20{,}000 - 75{,}000}{6{,}000} \\approx -9.17\\text{ m/s}$.',
            keywords: ['momentum', 'final velocity', 'conservation', 'combined'],
          },
          {
            points: 1,
            description:
              'Calculates the change in velocity of the car: $\\Delta v = v_f - v_i = -9.17 - 20 = -29.2\\text{ m/s}$ (magnitude $\\approx 29\\text{ m/s}$).',
            keywords: ['change', 'velocity', '29', 'delta v'],
          },
        ],
        sampleAnswer:
          'Let right be positive. $v_{c,i} = +20\\text{ m/s}$, $v_{t,i} = -15\\text{ m/s}$.\nAfter a perfectly inelastic collision:\n$v_f = \\frac{m_c v_{c,i} + m_t v_{t,i}}{m_c + m_t} = \\frac{(1000)(20) + (5000)(-15)}{6000} = \\frac{20{,}000 - 75{,}000}{6000} = \\frac{-55{,}000}{6000} \\approx -9.17\\text{ m/s}$\n$\\Delta v_{\\text{car}} = v_f - v_{c,i} = -9.17 - 20 = -29.2\\text{ m/s}$\nThe car\'s velocity changes by about $29\\text{ m/s}$.',
      },
    ],
  },

  // =========================================================================
  // SHORT FRQ 2 — SHM Quantitative Problem
  // Unit 6 (Simple Harmonic Motion)
  // =========================================================================
  {
    id: 'phys1-frq-short-2',
    type: 'short',
    unit: 6,
    title: 'Simple Harmonic Motion: Mass-Spring System',
    prompt:
      'A block of mass $m = 0.25\\text{ kg}$ is attached to a horizontal spring with spring constant $k = 16\\text{ N/m}$ on a frictionless surface. The block is pulled $0.10\\text{ m}$ from its equilibrium position and released from rest.',
    totalPoints: 5,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Calculate the period of oscillation and the maximum speed of the block.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Correctly calculates the period: $T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.25/16} \\approx 0.785\\text{ s}$.',
            keywords: ['period', '2 pi', 'square root', '0.785'],
          },
          {
            points: 1,
            description:
              'Correctly calculates maximum speed: $v_{\\max} = A\\omega = A\\sqrt{k/m} = 0.10\\sqrt{64} = 0.80\\text{ m/s}$.',
            keywords: ['maximum speed', 'omega', '0.80', 'amplitude'],
          },
        ],
        sampleAnswer:
          '$\\omega = \\sqrt{k/m} = \\sqrt{16/0.25} = \\sqrt{64} = 8.0\\text{ rad/s}$\n$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{8.0} \\approx 0.785\\text{ s}$\n$v_{\\max} = A\\omega = (0.10)(8.0) = 0.80\\text{ m/s}$.',
      },
      {
        label: '(b)',
        prompt:
          'On the axes provided, sketch graphs of position $x(t)$ and velocity $v(t)$ for two complete cycles. Label the amplitude, period, and indicate the phase relationship between the two graphs.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Position graph is a cosine curve starting at $x = +A$ at $t = 0$, with correct amplitude $0.10\\text{ m}$ and period $\\approx 0.785\\text{ s}$.',
            keywords: ['cosine', 'amplitude', 'position', 'graph'],
          },
          {
            points: 1,
            description:
              'Velocity graph is a negative sine curve (or cosine shifted by $\\pi/2$), peaking at $\\pm 0.80\\text{ m/s}$, and correctly $90°$ out of phase with position.',
            keywords: ['sine', 'velocity', 'phase', '90 degrees'],
          },
        ],
        sampleAnswer:
          'Position: $x(t) = A\\cos(\\omega t) = 0.10\\cos(8.0t)$, a cosine wave starting at $+0.10\\text{ m}$, oscillating between $\\pm 0.10\\text{ m}$ with period $0.785\\text{ s}$.\nVelocity: $v(t) = -A\\omega\\sin(\\omega t) = -0.80\\sin(8.0t)$, a negative sine wave peaking at $\\pm 0.80\\text{ m/s}$. The velocity leads the position by $90°$: when $x = 0$ (equilibrium) the speed is maximum, and when $x = \\pm A$ the speed is zero.',
      },
      {
        label: '(c)',
        prompt:
          'If the mass is doubled to $0.50\\text{ kg}$ but the amplitude stays the same, how do the period and maximum speed change? Justify your answer.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'States that the period increases by a factor of $\\sqrt{2}$ (since $T \\propto \\sqrt{m}$) and the maximum speed decreases by a factor of $\\sqrt{2}$ (since $v_{\\max} = A\\sqrt{k/m}$). Both are justified with the relevant formula.',
            keywords: ['sqrt 2', 'period increases', 'speed decreases', 'proportional'],
          },
        ],
        sampleAnswer:
          'Period: $T = 2\\pi\\sqrt{m/k}$. Doubling $m$ increases $T$ by a factor of $\\sqrt{2}$, giving $T \\approx 1.11\\text{ s}$.\nMaximum speed: $v_{\\max} = A\\sqrt{k/m}$. Doubling $m$ decreases $v_{\\max}$ by a factor of $\\sqrt{2}$, giving $v_{\\max} \\approx 0.57\\text{ m/s}$.',
      },
    ],
  },

  // =========================================================================
  // SHORT FRQ 3 — Circular Motion & Gravitation
  // Unit 3 (Circular Motion & Gravitation)
  // =========================================================================
  {
    id: 'phys1-frq-short-3',
    type: 'short',
    unit: 3,
    title: 'Circular Motion and Gravitation: Satellite Orbit',
    prompt:
      'A satellite of mass $m = 500\\text{ kg}$ orbits Earth at an altitude of $h = 2.0 \\times 10^6\\text{ m}$ above the surface. The mass of Earth is $M_E = 5.97 \\times 10^{24}\\text{ kg}$ and the radius of Earth is $R_E = 6.37 \\times 10^6\\text{ m}$. $G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.',
    totalPoints: 5,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Derive an expression for the orbital speed of the satellite in terms of $G$, $M_E$, $R_E$, and $h$. Then calculate its numerical value.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets gravitational force equal to centripetal force: $\\frac{GM_E m}{r^2} = \\frac{mv^2}{r}$ where $r = R_E + h$, and derives $v = \\sqrt{\\frac{GM_E}{R_E + h}}$.',
            keywords: ['centripetal', 'gravitational', 'derive', 'orbital speed'],
          },
          {
            points: 1,
            description:
              'Correctly computes $r = 8.37 \\times 10^6\\text{ m}$ and $v \\approx 6{,}900\\text{ m/s}$ (or approximately $6.9\\text{ km/s}$).',
            keywords: ['6900', 'calculation', 'radius', 'numerical'],
          },
        ],
        sampleAnswer:
          'The gravitational force provides the centripetal force:\n$\\frac{GM_E m}{r^2} = \\frac{mv^2}{r}$\n$v = \\sqrt{\\frac{GM_E}{r}} = \\sqrt{\\frac{GM_E}{R_E + h}}$\n$r = 6.37 \\times 10^6 + 2.0 \\times 10^6 = 8.37 \\times 10^6\\text{ m}$\n$v = \\sqrt{\\frac{(6.674 \\times 10^{-11})(5.97 \\times 10^{24})}{8.37 \\times 10^6}} = \\sqrt{\\frac{3.986 \\times 10^{14}}{8.37 \\times 10^6}} = \\sqrt{4.76 \\times 10^7} \\approx 6{,}900\\text{ m/s}$.',
      },
      {
        label: '(b)',
        prompt:
          'Calculate the orbital period of the satellite.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses $T = \\frac{2\\pi r}{v}$ or $T = 2\\pi\\sqrt{\\frac{r^3}{GM_E}}$.',
            keywords: ['period', 'formula', 'circumference', '2 pi r'],
          },
          {
            points: 1,
            description:
              'Correctly computes $T \\approx 7{,}620\\text{ s}$ (about $2.1\\text{ hours}$).',
            keywords: ['7620', 'seconds', '2.1 hours', 'numerical'],
          },
        ],
        sampleAnswer:
          '$T = \\frac{2\\pi r}{v} = \\frac{2\\pi (8.37 \\times 10^6)}{6900} = \\frac{5.26 \\times 10^7}{6900} \\approx 7{,}620\\text{ s} \\approx 2.1\\text{ hours}$.',
      },
      {
        label: '(c)',
        prompt:
          'If the satellite were moved to a higher orbit (larger $h$), would its orbital speed increase, decrease, or remain the same? Justify your answer using the expression derived in part (a).',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'States that the orbital speed decreases because $v = \\sqrt{GM_E / (R_E + h)}$ and increasing $h$ increases the denominator, reducing $v$.',
            keywords: ['decreases', 'denominator', 'larger radius', 'inverse'],
          },
        ],
        sampleAnswer:
          'The orbital speed would decrease. From $v = \\sqrt{\\frac{GM_E}{R_E + h}}$, increasing $h$ increases the denominator $(R_E + h)$, which decreases the value under the square root, resulting in a smaller orbital speed.',
      },
    ],
  },

  // =========================================================================
  // SHORT FRQ 4 — Torque & Rotational Equilibrium
  // Unit 7 (Torque & Rotational Motion)
  // =========================================================================
  {
    id: 'phys1-frq-short-4',
    type: 'short',
    unit: 7,
    title: 'Torque and Rotational Equilibrium: Balanced Beam',
    prompt:
      'A uniform beam of mass $M = 12\\text{ kg}$ and length $L = 3.0\\text{ m}$ is supported by a pivot located $1.0\\text{ m}$ from the left end. A block of mass $m$ is hung from the left end of the beam. The system is in static equilibrium with the beam horizontal.',
    totalPoints: 5,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Draw a free-body diagram of the beam showing all forces acting on it, including their points of application.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Shows four forces at correct locations: weight of block ($mg$) at the left end, weight of beam ($Mg$) at the center ($L/2 = 1.5\\text{ m}$ from left), normal/pivot force ($F_N$) upward at $1.0\\text{ m}$, and no extraneous forces.',
            keywords: ['free-body', 'weight', 'pivot', 'center of mass'],
          },
        ],
        sampleAnswer:
          'Forces on the beam:\n• Weight of the block $mg$ acting downward at the left end ($x = 0$)\n• Weight of the beam $Mg = (12)(9.8) = 117.6\\text{ N}$ acting downward at the center of mass ($x = 1.5\\text{ m}$ from the left end)\n• Normal force $F_N$ from the pivot acting upward at $x = 1.0\\text{ m}$\nNo other forces act on the beam.',
      },
      {
        label: '(b)',
        prompt:
          'Calculate the mass $m$ of the block required for equilibrium.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Sets up the torque equation about the pivot: $mg(1.0) = Mg(0.5)$ where $0.5\\text{ m}$ is the distance from the pivot to the center of mass.',
            keywords: ['torque', 'pivot', 'equation', 'moment'],
          },
          {
            points: 1,
            description:
              'Solves for $m = \\frac{M(0.5)}{1.0} = \\frac{12(0.5)}{1.0} = 6.0\\text{ kg}$.',
            keywords: ['6.0', 'kg', 'mass', 'solve'],
          },
        ],
        sampleAnswer:
          'Taking torques about the pivot (at $x = 1.0\\text{ m}$ from the left):\nCounterclockwise torque (from block): $\\tau_{\\text{block}} = mg \\times 1.0$\nClockwise torque (from beam weight): $\\tau_{\\text{beam}} = Mg \\times (1.5 - 1.0) = Mg \\times 0.5$\nFor equilibrium: $mg(1.0) = Mg(0.5)$\n$m = \\frac{M(0.5)}{1.0} = \\frac{12 \\times 0.5}{1.0} = 6.0\\text{ kg}$.',
      },
      {
        label: '(c)',
        prompt:
          'Calculate the magnitude of the upward force exerted by the pivot on the beam.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies the condition for translational equilibrium: $F_N = mg + Mg = (m + M)g$.',
            keywords: ['translational', 'equilibrium', 'sum of forces', 'normal force'],
          },
          {
            points: 1,
            description:
              'Correctly computes $F_N = (6.0 + 12)(9.8) = 18(9.8) = 176.4\\text{ N}$.',
            keywords: ['176', 'newtons', 'pivot force', 'calculation'],
          },
        ],
        sampleAnswer:
          'For translational equilibrium (vertical): $F_N = mg + Mg = (m + M)g = (6.0 + 12)(9.8) = (18)(9.8) = 176.4\\text{ N}$ upward.',
      },
    ],
  },

  // =========================================================================
  // SHORT FRQ 5 — Energy & Momentum in a Collision
  // Units 4 & 5 (Energy + Momentum)
  // =========================================================================
  {
    id: 'phys1-frq-short-5',
    type: 'short',
    unit: 5,
    title: 'Energy and Momentum Conservation: Ballistic Pendulum',
    prompt:
      'A bullet of mass $m_b = 0.010\\text{ kg}$ is fired horizontally into a stationary wooden block of mass $m_w = 2.0\\text{ kg}$ that is suspended from a string of length $L = 1.5\\text{ m}$ (a ballistic pendulum). The bullet embeds in the block, and the block-bullet system swings upward to a maximum height of $h = 0.045\\text{ m}$.',
    totalPoints: 5,
    timeRecommendation: '~15 minutes',
    calculatorAllowed: true,
    parts: [
      {
        label: '(a)',
        prompt:
          'Calculate the speed of the block-bullet system immediately after the collision.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Uses conservation of energy for the swing phase: $\\frac{1}{2}(m_b + m_w)v^2 = (m_b + m_w)gh$, yielding $v = \\sqrt{2gh}$.',
            keywords: ['energy conservation', 'swing', 'height', 'velocity after'],
          },
          {
            points: 1,
            description:
              'Correctly evaluates $v = \\sqrt{2(9.8)(0.045)} = \\sqrt{0.882} \\approx 0.94\\text{ m/s}$.',
            keywords: ['0.94', 'calculation', 'speed', 'numerical'],
          },
        ],
        sampleAnswer:
          'After the collision, the block-bullet system swings upward. Using conservation of energy:\n$\\frac{1}{2}(m_b + m_w)v^2 = (m_b + m_w)gh$\n$v = \\sqrt{2gh} = \\sqrt{2(9.8)(0.045)} = \\sqrt{0.882} \\approx 0.94\\text{ m/s}$.',
      },
      {
        label: '(b)',
        prompt:
          'Calculate the speed of the bullet just before the collision.',
        maxPoints: 2,
        rubric: [
          {
            points: 1,
            description:
              'Applies conservation of momentum for the collision: $m_b v_b = (m_b + m_w)v$.',
            keywords: ['momentum', 'conservation', 'collision', 'bullet speed'],
          },
          {
            points: 1,
            description:
              'Correctly computes $v_b = \\frac{(m_b + m_w)v}{m_b} = \\frac{(2.01)(0.94)}{0.010} \\approx 189\\text{ m/s}$.',
            keywords: ['189', 'bullet', 'speed', 'calculation'],
          },
        ],
        sampleAnswer:
          'Conservation of momentum during the collision (perfectly inelastic):\n$m_b v_b = (m_b + m_w)v$\n$v_b = \\frac{(m_b + m_w)v}{m_b} = \\frac{(0.010 + 2.0)(0.94)}{0.010} = \\frac{(2.01)(0.94)}{0.010} = \\frac{1.889}{0.010} \\approx 189\\text{ m/s}$.',
      },
      {
        label: '(c)',
        prompt:
          'Explain why conservation of momentum (not conservation of kinetic energy) must be used for the collision step, while conservation of energy (not conservation of momentum) is used for the swing step.',
        maxPoints: 1,
        rubric: [
          {
            points: 1,
            description:
              'Explains that the collision is inelastic so kinetic energy is not conserved (transformed to heat/deformation), but momentum is conserved because there is no net external horizontal impulse during the brief collision. For the swing, there is an external force (tension/gravity), so momentum is not conserved for the system, but mechanical energy is conserved (no friction/air resistance).',
            keywords: ['inelastic', 'external force', 'mechanical energy', 'no net impulse'],
          },
        ],
        sampleAnswer:
          'During the collision, the bullet embeds in the block — this is a perfectly inelastic collision. Kinetic energy is not conserved because some is converted to thermal energy and deformation of the wood. However, momentum is conserved because the collision happens over a very short time interval during which external forces (gravity, tension) provide negligible impulse compared to the large internal collision forces.\n\nDuring the swing phase after the collision, the string tension exerts an external force on the block-bullet system, so linear momentum is not conserved. However, if we neglect air resistance, no non-conservative forces do work, and mechanical energy (kinetic + gravitational potential) is conserved.',
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

export function getLongFRQs(): Physics1FRQ[] {
  return physics1FRQs.filter((q) => q.type === 'long')
}

export function getShortFRQs(): Physics1FRQ[] {
  return physics1FRQs.filter((q) => q.type === 'short')
}

export function generateFullExamFRQs(): {
  long: Physics1FRQ[]
  short: Physics1FRQ[]
  totalPoints: number
  totalTime: string
} {
  const longPool = getLongFRQs()
  const shortPool = getShortFRQs()

  // Shuffle and pick 2 long, 3 short
  const shuffledLong = [...longPool].sort(() => Math.random() - 0.5)
  const shuffledShort = [...shortPool].sort(() => Math.random() - 0.5)

  const selectedLong = shuffledLong.slice(0, 2)
  const selectedShort = shuffledShort.slice(0, 3)

  const totalPoints =
    selectedLong.reduce((sum, q) => sum + q.totalPoints, 0) +
    selectedShort.reduce((sum, q) => sum + q.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '~90 minutes',
  }
}
