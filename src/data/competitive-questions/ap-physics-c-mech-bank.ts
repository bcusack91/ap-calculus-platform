export interface ApPhysicsCMechQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  topicSlug: string
}

const allQuestions: ApPhysicsCMechQuestion[] = [
  // ── physics-c-position-velocity-acceleration ──────────────────
  { id: 1, question: 'If position x(t) = 3t³ − 2t, what is the velocity v(t)?', options: ['9t² − 2', '3t² − 2', '9t³ − 2', '6t − 2'], correctAnswer: 0, explanation: 'v(t) = dx/dt = 9t² − 2.', difficulty: 'easy', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 2, question: 'Given v(t) = 4t − 6, the acceleration is:', options: ['4', '4t', '−6', '2t² − 6t'], correctAnswer: 0, explanation: 'a(t) = dv/dt = 4 m/s² (constant).', difficulty: 'easy', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 3, question: 'If a(t) = 6t and v(0) = 2, what is v(t)?', options: ['3t² + 2', '6t² + 2', '3t + 2', '6t + 2'], correctAnswer: 0, explanation: 'v(t) = ∫6t dt = 3t² + C. v(0) = 2 → C = 2, so v(t) = 3t² + 2.', difficulty: 'medium', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 4, question: 'Displacement from t = 0 to t = 2 given v(t) = t² is:', options: ['4/3', '8/3', '4', '2'], correctAnswer: 1, explanation: 'Δx = ∫₀² t² dt = [t³/3]₀² = 8/3.', difficulty: 'medium', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 5, question: 'The position of an object is x(t) = 5 sin(2t). Its maximum speed is:', options: ['5', '10', '20', '2.5'], correctAnswer: 1, explanation: 'v(t) = 10 cos(2t). Max speed = |10| = 10 m/s.', difficulty: 'medium', topicSlug: 'physics-c-position-velocity-acceleration' },

  // ── physics-c-variable-acceleration ───────────────────────────
  { id: 6, question: 'A particle has acceleration a = −kv (proportional to velocity). This describes:', options: ['Constant acceleration', 'Simple harmonic motion', 'Exponential decay of velocity', 'Free fall'], correctAnswer: 2, explanation: 'dv/dt = −kv → v(t) = v₀e^(−kt), exponential decay.', difficulty: 'medium', topicSlug: 'physics-c-variable-acceleration' },
  { id: 7, question: 'If F = −bv for a falling object (drag force), the terminal velocity is reached when:', options: ['F_net = 0 → mg = bv_t', 'v = 0', 'a = g', 'F = mg'], correctAnswer: 0, explanation: 'At terminal velocity, net force = 0: mg − bv_t = 0 → v_t = mg/b.', difficulty: 'medium', topicSlug: 'physics-c-variable-acceleration' },
  { id: 8, question: 'For a = −kx (restoring force), the motion is:', options: ['Uniformly accelerated', 'Simple harmonic', 'Circular', 'Parabolic'], correctAnswer: 1, explanation: 'a = −kx/m is the hallmark of simple harmonic motion.', difficulty: 'easy', topicSlug: 'physics-c-variable-acceleration' },
  { id: 9, question: 'Use the chain rule: a = v(dv/dx). If a = 4x and v = 0 at x = 0, find v at x = 3:', options: ['6', '2√6', '√12', '2√9'], correctAnswer: 0, explanation: 'v dv = 4x dx → v²/2 = 2x² → v² = 4(9) = 36 → v = 6.', difficulty: 'hard', topicSlug: 'physics-c-variable-acceleration' },
  { id: 10, question: 'An object\'s acceleration is a(t) = 12t − 4. At what time does the velocity first reach a minimum?', options: ['t = 1/3', 't = 1', 't = 2', 't = 0'], correctAnswer: 0, explanation: 'Velocity is minimized when a(t) = 0: 12t − 4 = 0 → t = 1/3.', difficulty: 'medium', topicSlug: 'physics-c-variable-acceleration' },

  // ── physics-c-circular-motion ─────────────────────────────────
  { id: 11, question: 'Centripetal acceleration for uniform circular motion is:', options: ['v/r', 'v²/r', 'vr', 'v²r'], correctAnswer: 1, explanation: 'a_c = v²/r, directed toward the center.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 12, question: 'A particle moves in a circle of radius 2 m at 4 m/s. Its centripetal acceleration is:', options: ['2 m/s²', '4 m/s²', '8 m/s²', '16 m/s²'], correctAnswer: 2, explanation: 'a_c = v²/r = 16/2 = 8 m/s².', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 13, question: 'For non-uniform circular motion, the total acceleration has:', options: ['Only radial component', 'Only tangential component', 'Both radial and tangential components', 'Neither component'], correctAnswer: 2, explanation: 'Non-uniform circular motion has tangential (speed change) and radial (direction change) components.', difficulty: 'medium', topicSlug: 'physics-c-circular-motion' },
  { id: 14, question: 'Angular velocity ω relates to linear speed by:', options: ['v = ωr', 'v = ω/r', 'v = ωr²', 'ω = vr'], correctAnswer: 0, explanation: 'v = ωr relates tangential speed to angular velocity and radius.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 15, question: 'The period of circular motion with angular velocity ω is:', options: ['T = ω/2π', 'T = 2π/ω', 'T = πω', 'T = ω²/2π'], correctAnswer: 1, explanation: 'T = 2π/ω. One full revolution = 2π radians.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },

  // ── physics-c-newtons-laws-calculus ────────────────────────────
  { id: 16, question: 'Newton\'s second law in its most general form is:', options: ['F = ma', 'F = dp/dt', 'F = mv', 'F = mΔv'], correctAnswer: 1, explanation: 'F = dp/dt is the general form; F = ma is valid only when mass is constant.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 17, question: 'A 2 kg object has F(t) = 6t N applied. Starting from rest, its velocity at t = 3 s is:', options: ['9 m/s', '13.5 m/s', '27 m/s', '4.5 m/s'], correctAnswer: 1, explanation: 'a = 3t → v = ∫₀³ 3t dt = 3t²/2 |₀³ = 13.5 m/s.', difficulty: 'medium', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 18, question: 'Impulse is defined as:', options: ['F × t', '∫F dt', 'F/t', 'ma × t'], correctAnswer: 1, explanation: 'Impulse J = ∫F dt = Δp. For constant force, J = FΔt.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 19, question: 'A variable force F(x) = 3x² acts on an object from x = 0 to x = 2. The work done is:', options: ['4 J', '8 J', '12 J', '6 J'], correctAnswer: 1, explanation: 'W = ∫₀² 3x² dx = x³ |₀² = 8 J.', difficulty: 'medium', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 20, question: 'For a rocket losing mass, the thrust force is:', options: ['Ma', '−v_exhaust × (dm/dt)', 'mg', 'F = mv'], correctAnswer: 1, explanation: 'Rocket thrust F = −v_exhaust(dm/dt), from the momentum form of Newton\'s second law.', difficulty: 'hard', topicSlug: 'physics-c-newtons-laws-calculus' },

  // ── physics-c-friction-inclines ───────────────────────────────
  { id: 21, question: 'Static friction satisfies:', options: ['f_s = μ_s N', 'f_s ≤ μ_s N', 'f_s > μ_s N', 'f_s = μ_k N'], correctAnswer: 1, explanation: 'Static friction can range from 0 to μ_sN. It adjusts to prevent motion.', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },
  { id: 22, question: 'On a frictionless incline of angle θ, the acceleration down the plane is:', options: ['g', 'g sin θ', 'g cos θ', 'g tan θ'], correctAnswer: 1, explanation: 'Component of gravity along the incline: a = g sin θ.', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },
  { id: 23, question: 'A block on a rough incline (μ_k) slides down. The net acceleration is:', options: ['g sin θ − μ_k g cos θ', 'g sin θ + μ_k g cos θ', 'g cos θ − μ_k g sin θ', 'g(sin θ − μ_k)'], correctAnswer: 0, explanation: 'Net force along incline: mg sin θ − μ_k mg cos θ → a = g(sin θ − μ_k cos θ).', difficulty: 'medium', topicSlug: 'physics-c-friction-inclines' },
  { id: 24, question: 'The minimum angle for a block to start sliding on an incline with μ_s is:', options: ['θ = tan⁻¹(μ_s)', 'θ = sin⁻¹(μ_s)', 'θ = cos⁻¹(μ_s)', 'θ = μ_s'], correctAnswer: 0, explanation: 'At the threshold: mg sin θ = μ_s mg cos θ → tan θ = μ_s → θ = arctan(μ_s).', difficulty: 'medium', topicSlug: 'physics-c-friction-inclines' },
  { id: 25, question: 'Normal force on a block resting on a slope of angle θ is:', options: ['mg', 'mg sin θ', 'mg cos θ', 'mg tan θ'], correctAnswer: 2, explanation: 'N = mg cos θ (perpendicular component of weight).', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },

  // ── physics-c-work-power ──────────────────────────────────────
  { id: 26, question: 'Work done by a variable force is:', options: ['W = Fd', 'W = ∫F · dx', 'W = Pt', 'W = ΔKE only'], correctAnswer: 1, explanation: 'For variable forces, W = ∫F · dx (area under F vs. x curve).', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 27, question: 'Power is defined as:', options: ['W/t or F · v', 'F × d', 'ma × d', 'ΔKE / d'], correctAnswer: 0, explanation: 'P = dW/dt = F · v (instantaneous power).', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 28, question: 'The work-energy theorem states:', options: ['W_net = ΔKE', 'W_net = ΔPE', 'W_net = 0', 'W_net = F/d'], correctAnswer: 0, explanation: 'The net work done on an object equals its change in kinetic energy.', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 29, question: 'A force F(x) = 5x acts on a 1 kg mass from x = 0 to x = 4. If it starts from rest, its final speed is:', options: ['$\\sqrt{80}$ m/s', '$\\sqrt{20}$ m/s', '20 m/s', '10 m/s'], correctAnswer: 0, explanation: 'W = ∫₀⁴ 5x dx = 5x²/2 |₀⁴ = 40 J. KE = ½mv² → v = √(2×40/1) = √80 = 4√5 ≈ 8.94 m/s.', difficulty: 'hard', topicSlug: 'physics-c-work-power' },
  { id: 30, question: 'A car of mass 1000 kg maintains 20 m/s against a drag force of 500 N. The required power is:', options: ['25 kW', '10 kW', '500 kW', '5 kW'], correctAnswer: 1, explanation: 'P = Fv = 500 × 20 = 10,000 W = 10 kW.', difficulty: 'medium', topicSlug: 'physics-c-work-power' },

  // ── physics-c-conservative-forces ─────────────────────────────
  { id: 31, question: 'A conservative force satisfies:', options: ['Work depends on path', 'Work around a closed loop is zero', 'It always does positive work', 'It equals friction'], correctAnswer: 1, explanation: 'For a conservative force, the work done around any closed path is zero.', difficulty: 'easy', topicSlug: 'physics-c-conservative-forces' },
  { id: 32, question: 'Potential energy U and conservative force F are related by:', options: ['F = dU/dx', 'F = −dU/dx', 'U = Fx', 'F = U/x'], correctAnswer: 1, explanation: 'F = −dU/dx. Force points in the direction of decreasing potential energy.', difficulty: 'easy', topicSlug: 'physics-c-conservative-forces' },
  { id: 33, question: 'If U(x) = ½kx², the force is:', options: ['kx', '−kx', 'kx²', '−kx²'], correctAnswer: 1, explanation: 'F = −dU/dx = −d(½kx²)/dx = −kx (Hooke\'s law).', difficulty: 'medium', topicSlug: 'physics-c-conservative-forces' },
  { id: 34, question: 'In a potential energy diagram, equilibrium points occur where:', options: ['U is maximum', 'dU/dx = 0', 'U = 0', 'U is minimum only'], correctAnswer: 1, explanation: 'Equilibrium occurs where F = −dU/dx = 0, i.e., where dU/dx = 0.', difficulty: 'medium', topicSlug: 'physics-c-conservative-forces' },
  { id: 35, question: 'Stable equilibrium on a U(x) graph is at a:', options: ['Local maximum', 'Local minimum', 'Inflection point', 'Plateau'], correctAnswer: 1, explanation: 'Stable equilibrium = local minimum of U (restoring force if displaced).', difficulty: 'easy', topicSlug: 'physics-c-conservative-forces' },

  // ── physics-c-momentum-collisions ─────────────────────────────
  { id: 36, question: 'In a perfectly elastic collision, which quantities are conserved?', options: ['Momentum only', 'Kinetic energy only', 'Both momentum and kinetic energy', 'Neither'], correctAnswer: 2, explanation: 'Elastic collisions conserve both momentum and kinetic energy.', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },
  { id: 37, question: 'Two objects (2 kg at 5 m/s and 3 kg at rest) undergo a perfectly inelastic collision. Their final speed is:', options: ['2 m/s', '5 m/s', '10/3 m/s', '5/3 m/s'], correctAnswer: 0, explanation: 'mv = (m₁+m₂)v_f → 2(5) = 5v_f → v_f = 2 m/s.', difficulty: 'medium', topicSlug: 'physics-c-momentum-collisions' },
  { id: 38, question: 'The coefficient of restitution e = 1 indicates:', options: ['Perfectly inelastic collision', 'Perfectly elastic collision', 'No collision', 'Explosion'], correctAnswer: 1, explanation: 'e = 1 means perfectly elastic (relative speed of separation = relative speed of approach).', difficulty: 'medium', topicSlug: 'physics-c-momentum-collisions' },
  { id: 39, question: 'Impulse equals:', options: ['Force × time', 'Change in momentum', 'Both A and B', 'Change in energy'], correctAnswer: 2, explanation: 'J = ∫F dt = Δp. Both definitions are equivalent.', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },
  { id: 40, question: 'In a 2D collision, momentum is conserved:', options: ['Only in the x-direction', 'Only in the y-direction', 'Independently in both x and y', 'Only along the line of impact'], correctAnswer: 2, explanation: 'Momentum conservation applies independently in each direction (x and y).', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },

  // ── physics-c-center-of-mass ──────────────────────────────────
  { id: 41, question: 'The center of mass of a two-particle system (m₁ at x₁, m₂ at x₂) is:', options: ['(x₁ + x₂)/2', '(m₁x₁ + m₂x₂)/(m₁ + m₂)', 'm₁x₁ + m₂x₂', 'x₁x₂/(m₁+m₂)'], correctAnswer: 1, explanation: 'x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂).', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 42, question: 'For a continuous mass distribution, the center of mass x_cm is:', options: ['∫x dm / M', '∫x dx / M', 'M ∫x dm', '∫dm / x'], correctAnswer: 0, explanation: 'x_cm = (1/M) ∫x dm, integrating over the entire body.', difficulty: 'medium', topicSlug: 'physics-c-center-of-mass' },
  { id: 43, question: 'A 3 kg mass is at x = 0 and a 1 kg mass is at x = 4 m. The center of mass is at:', options: ['x = 1 m', 'x = 2 m', 'x = 3 m', 'x = 0.5 m'], correctAnswer: 0, explanation: 'x_cm = (3·0 + 1·4) / (3+1) = 4/4 = 1 m.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 44, question: 'The center of mass of a uniform right triangle of height h is located at what height?', options: ['h/2', 'h/3', 'h/4', '2h/3'], correctAnswer: 1, explanation: 'For a uniform triangle, the center of mass is at h/3 from the base.', difficulty: 'medium', topicSlug: 'physics-c-center-of-mass' },
  { id: 45, question: 'The velocity of the center of mass of a system equals:', options: ['Σm_i v_i / M_total', 'v of the heaviest particle', 'Average of all velocities', '(v_max + v_min)/2'], correctAnswer: 0, explanation: 'v_cm = Σm_i v_i / M = p_total / M.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },

  // ── physics-c-rotational-kinematics-dynamics ──────────────────
  { id: 46, question: 'The rotational analog of F = ma is:', options: ['τ = Iα', 'τ = Iω', 'τ = rF', 'L = Iω'], correctAnswer: 0, explanation: 'τ = Iα (torque = moment of inertia × angular acceleration).', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 47, question: 'Torque is defined as:', options: ['τ = r × F (cross product)', 'τ = r · F (dot product)', 'τ = F/r', 'τ = rF always'], correctAnswer: 0, explanation: 'τ = r × F. The magnitude is rF sin θ.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 48, question: 'Rotational kinetic energy is:', options: ['½mv²', '½Iω²', 'Iα', 'τθ'], correctAnswer: 1, explanation: 'KE_rot = ½Iω² (analogous to ½mv²).', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 49, question: 'A disk (I = ½MR²) of mass 4 kg and radius 0.5 m has I =', options: ['0.5 kg·m²', '1 kg·m²', '0.25 kg·m²', '2 kg·m²'], correctAnswer: 0, explanation: 'I = ½MR² = ½(4)(0.25) = 0.5 kg·m².', difficulty: 'medium', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 50, question: 'Work done by a torque is:', options: ['W = Fd', 'W = τθ', 'W = Iω', 'W = ½Iω²'], correctAnswer: 1, explanation: 'Rotational work: W = ∫τ dθ. For constant torque, W = τθ.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },

  // ── physics-c-moment-of-inertia ───────────────────────────────
  { id: 51, question: 'Moment of inertia for a thin hoop about its center is:', options: ['½MR²', 'MR²', '⅔MR²', '¼MR²'], correctAnswer: 1, explanation: 'For a thin hoop, all mass is at distance R: I = MR².', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 52, question: 'Moment of inertia for a solid sphere about a diameter is:', options: ['MR²', '½MR²', '⅖MR²', '⅔MR²'], correctAnswer: 2, explanation: 'I_sphere = ⅖MR².', difficulty: 'medium', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 53, question: 'For a continuous body, I = ', options: ['Σm_i r_i²', '∫r² dm', 'Both A and B', 'Mr²/2 always'], correctAnswer: 2, explanation: 'I = Σm_i r_i² (discrete) or I = ∫r² dm (continuous).', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 54, question: 'A uniform rod of mass M and length L about one end has I =', options: ['ML²/3', 'ML²/12', 'ML²/2', 'ML²'], correctAnswer: 0, explanation: 'I_rod(end) = ML²/3. (About center it would be ML²/12.)', difficulty: 'medium', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 55, question: 'Moment of inertia of a thin hollow sphere is:', options: ['⅖MR²', '½MR²', '⅔MR²', 'MR²'], correctAnswer: 2, explanation: 'I_hollow sphere = ⅔MR².', difficulty: 'medium', topicSlug: 'physics-c-moment-of-inertia' },

  // ── physics-c-angular-momentum ────────────────────────────────
  { id: 56, question: 'Angular momentum of a rotating rigid body is:', options: ['L = mωr', 'L = Iω', 'L = τt', 'L = ½Iω²'], correctAnswer: 1, explanation: 'L = Iω (angular momentum = moment of inertia × angular velocity).', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 57, question: 'Angular momentum is conserved when:', options: ['Net force is zero', 'Net torque is zero', 'Angular velocity is constant', 'Moment of inertia is constant'], correctAnswer: 1, explanation: 'dL/dt = τ_net. When τ_net = 0, L is conserved.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 58, question: 'An ice skater pulls in her arms, reducing I by half. Her angular velocity:', options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'], correctAnswer: 1, explanation: 'L = Iω = const. If I halves, ω doubles.', difficulty: 'medium', topicSlug: 'physics-c-angular-momentum' },
  { id: 59, question: 'Angular momentum of a point particle about a point is:', options: ['L = r × p', 'L = r · p', 'L = mv²/r', 'L = Iα'], correctAnswer: 0, explanation: 'L = r × p (cross product of position and momentum).', difficulty: 'medium', topicSlug: 'physics-c-angular-momentum' },
  { id: 60, question: 'The relation between torque and angular momentum is:', options: ['τ = dL/dt', 'τ = L/t', 'τ = Lω', 'τ = L²'], correctAnswer: 0, explanation: 'τ = dL/dt (rotational analog of F = dp/dt).', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },

  // ── parallel-axis-theorem ─────────────────────────────────────
  { id: 61, question: 'The parallel axis theorem states I =', options: ['I_cm + Md²', 'I_cm − Md²', 'I_cm × d²', 'I_cm / d²'], correctAnswer: 0, explanation: 'I = I_cm + Md², where d is the distance from the center of mass to the new axis.', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },
  { id: 62, question: 'A uniform rod (I_cm = ML²/12) has I about one end of:', options: ['ML²/12 + M(L/2)² = ML²/3', 'ML²/12', 'ML²/6', 'ML²/4'], correctAnswer: 0, explanation: 'By parallel axis: I = ML²/12 + M(L/2)² = ML²/12 + ML²/4 = ML²/3.', difficulty: 'medium', topicSlug: 'parallel-axis-theorem' },
  { id: 63, question: 'A disk (I_cm = ½MR²) rotated about a point on its rim has I =', options: ['MR²', '½MR²', '³⁄₂MR²', '2MR²'], correctAnswer: 2, explanation: 'I = ½MR² + MR² = ³⁄₂MR².', difficulty: 'medium', topicSlug: 'parallel-axis-theorem' },
  { id: 64, question: 'The parallel axis theorem is useful because:', options: ['It replaces integration', 'It finds I about any axis parallel to one through the center of mass', 'It only works for spheres', 'It gives the minimum I'], correctAnswer: 1, explanation: 'It lets you find I about any parallel axis once I_cm is known.', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },
  { id: 65, question: 'The minimum moment of inertia is always about:', options: ['The edge', 'The axis through the center of mass', 'The longest axis', 'Any random axis'], correctAnswer: 1, explanation: 'I is minimized about the center of mass axis (the Md² term is zero).', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },

  // ── physics-c-simple-harmonic-motion ───────────────────────────
  { id: 66, question: 'In SHM, x(t) = A cos(ωt + φ). The angular frequency ω for a mass-spring system is:', options: ['√(k/m)', '√(m/k)', 'k/m', 'm/k'], correctAnswer: 0, explanation: 'ω = √(k/m) for a mass on a spring.', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 67, question: 'The period of a simple pendulum (small angles) is:', options: ['T = 2π√(L/g)', 'T = 2π√(g/L)', 'T = 2π√(m/k)', 'T = 2πL/g'], correctAnswer: 0, explanation: 'T = 2π√(L/g), independent of mass and amplitude (for small angles).', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 68, question: 'The total energy of a SHM system is:', options: ['½kA²', '½kx²', '½mv²', 'kA'], correctAnswer: 0, explanation: 'E_total = ½kA² (constant, depends on amplitude).', difficulty: 'medium', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 69, question: 'In SHM, maximum velocity occurs at:', options: ['Maximum displacement', 'Equilibrium position', 'Halfway between', 'It\'s constant'], correctAnswer: 1, explanation: 'v_max occurs at equilibrium (x = 0) where all energy is kinetic.', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 70, question: 'The maximum velocity in SHM is:', options: ['ωA', 'ω²A', 'A/ω', 'ω/A'], correctAnswer: 0, explanation: 'v_max = ωA (from v = −Aω sin(ωt + φ), max when sin = 1).', difficulty: 'medium', topicSlug: 'physics-c-simple-harmonic-motion' },

  // ── physics-c-damped-driven-oscillations ──────────────────────
  { id: 71, question: 'In a damped oscillator, the amplitude:', options: ['Increases over time', 'Decreases exponentially over time', 'Remains constant', 'Oscillates'], correctAnswer: 1, explanation: 'Damping causes amplitude to decay exponentially: A(t) = A₀e^(−bt/2m).', difficulty: 'easy', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 72, question: 'Critical damping means the system:', options: ['Oscillates forever', 'Returns to equilibrium as quickly as possible without oscillating', 'Never returns to equilibrium', 'Oscillates once'], correctAnswer: 1, explanation: 'Critical damping is the fastest return to equilibrium without overshoot.', difficulty: 'medium', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 73, question: 'Resonance in a driven oscillator occurs when the driving frequency:', options: ['Is zero', 'Equals the natural frequency', 'Is twice the natural frequency', 'Is very large'], correctAnswer: 1, explanation: 'Resonance occurs when ω_drive ≈ ω₀ (natural frequency), maximizing amplitude.', difficulty: 'easy', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 74, question: 'The quality factor Q of an oscillator measures:', options: ['Total energy', 'How sharply tuned the resonance is', 'Driving force strength', 'Spring constant'], correctAnswer: 1, explanation: 'Q measures the sharpness of resonance: higher Q = sharper peak, less damping.', difficulty: 'medium', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 75, question: 'Overdamped oscillation means:', options: ['System oscillates with increasing amplitude', 'System returns slowly without oscillation', 'System is at resonance', 'Damping is zero'], correctAnswer: 1, explanation: 'Overdamped: too much damping → slow return to equilibrium, no oscillation.', difficulty: 'medium', topicSlug: 'physics-c-damped-driven-oscillations' },

  // ── physics-c-universal-gravitation ────────────────────────────
  { id: 76, question: 'Newton\'s law of gravitation: F =', options: ['Gm₁m₂/r', 'Gm₁m₂/r²', 'Gm₁m₂r²', 'Gm₁m₂r'], correctAnswer: 1, explanation: 'F = Gm₁m₂/r² (inverse-square law).', difficulty: 'easy', topicSlug: 'physics-c-universal-gravitation' },
  { id: 77, question: 'The gravitational potential energy of two masses is:', options: ['U = −Gm₁m₂/r', 'U = Gm₁m₂/r', 'U = −Gm₁m₂/r²', 'U = mgh'], correctAnswer: 0, explanation: 'U = −Gm₁m₂/r (negative, approaches 0 as r → ∞).', difficulty: 'easy', topicSlug: 'physics-c-universal-gravitation' },
  { id: 78, question: 'Escape velocity from a planet of mass M, radius R is:', options: ['√(GM/R)', '√(2GM/R)', '2GM/R', 'GM/R²'], correctAnswer: 1, explanation: 'v_escape = √(2GM/R), found by setting KE = |PE|.', difficulty: 'medium', topicSlug: 'physics-c-universal-gravitation' },
  { id: 79, question: 'For a circular orbit, v_orbital =', options: ['√(GM/r)', '√(2GM/r)', 'GM/r', '2πr/T only'], correctAnswer: 0, explanation: 'Set gravitational force = centripetal: GMm/r² = mv²/r → v = √(GM/r).', difficulty: 'medium', topicSlug: 'physics-c-universal-gravitation' },
  { id: 80, question: 'Kepler\'s third law states T² ∝', options: ['r', 'r²', 'r³', '1/r'], correctAnswer: 2, explanation: 'T² = (4π²/GM)r³, so T² ∝ r³.', difficulty: 'easy', topicSlug: 'physics-c-universal-gravitation' },

  // ============ TOP-UP: bring all sub-topics from 5 → 10 questions ============
  // physics-c-position-velocity-acceleration (was 5 → 10)
  { id: 81, question: 'If x(t) = 2t² + 3t, find v(2).', options: ['11', '8', '7', '14'], correctAnswer: 0, explanation: 'v(t) = 4t + 3; v(2) = 11.', difficulty: 'easy', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 82, question: 'Average velocity from t=1 to t=3 if x(t) = t³ is:', options: ['13', '9', '26', '6'], correctAnswer: 0, explanation: '(x(3)−x(1))/(3−1) = (27−1)/2 = 13.', difficulty: 'easy', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 83, question: 'If a(t) = 2 m/s² and v(0) = 5, then v(3) =', options: ['11', '6', '15', '10'], correctAnswer: 0, explanation: 'v = v₀ + at = 5 + 2(3) = 11 m/s.', difficulty: 'easy', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 84, question: 'For x(t) = 4cos(t), the speed at t = π/2 is:', options: ['4', '0', '2', '−4'], correctAnswer: 0, explanation: 'v(t) = −4sin(t); |v(π/2)| = 4.', difficulty: 'medium', topicSlug: 'physics-c-position-velocity-acceleration' },
  { id: 85, question: 'A particle moves with v(t) = 6 − 2t. It reverses direction at:', options: ['t = 3', 't = 6', 't = 0', 't = 2'], correctAnswer: 0, explanation: 'v = 0 ⇒ 6 − 2t = 0 ⇒ t = 3.', difficulty: 'medium', topicSlug: 'physics-c-position-velocity-acceleration' },

  // physics-c-variable-acceleration (was 5 → 10)
  { id: 86, question: 'For dv/dt = −kv², separating variables gives 1/v =', options: ['kt + C', '−kt + C', 'kt² + C', 'e^(−kt)'], correctAnswer: 0, explanation: 'dv/v² = −k dt ⇒ −1/v = −kt + C ⇒ 1/v = kt + C.', difficulty: 'hard', topicSlug: 'physics-c-variable-acceleration' },
  { id: 87, question: 'If a depends only on x, the useful identity is a =', options: ['v dv/dx', 'dv/dt', 'dx/dt', 'd²v/dx²'], correctAnswer: 0, explanation: 'Chain rule: dv/dt = (dv/dx)(dx/dt) = v dv/dx.', difficulty: 'medium', topicSlug: 'physics-c-variable-acceleration' },
  { id: 88, question: 'Solving dv/dt = g − (b/m)v gives terminal velocity v_t =', options: ['mg/b', 'g/b', 'm/(bg)', 'b/(mg)'], correctAnswer: 0, explanation: 'At terminal v, dv/dt = 0 ⇒ v_t = mg/b.', difficulty: 'medium', topicSlug: 'physics-c-variable-acceleration' },
  { id: 89, question: 'For a = 6t² with v(0)=0, v(2) =', options: ['16', '12', '8', '24'], correctAnswer: 0, explanation: 'v = ∫6t² dt = 2t³; v(2) = 16.', difficulty: 'easy', topicSlug: 'physics-c-variable-acceleration' },
  { id: 90, question: 'A drag-limited object reaches v_t when:', options: ['Net force is zero', 'Drag exceeds weight', 'Velocity equals zero', 'Acceleration is maximum'], correctAnswer: 0, explanation: 'Terminal velocity ⇔ F_net = 0.', difficulty: 'easy', topicSlug: 'physics-c-variable-acceleration' },

  // physics-c-newtons-laws-calculus (was 5 → 10)
  { id: 91, question: 'F = dp/dt where p = mv. If m is constant, F =', options: ['m dv/dt', 'v dm/dt', 'mv', 'p/t'], correctAnswer: 0, explanation: 'F = d(mv)/dt = m(dv/dt) when m is constant.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 92, question: 'For a rocket, dp/dt includes both m(dv/dt) and:', options: ['v(dm/dt)', '(dv/dm)', 'mv²', '0'], correctAnswer: 0, explanation: 'd(mv)/dt = m(dv/dt) + v(dm/dt).', difficulty: 'medium', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 93, question: 'A 2-kg block has F(t) = 4t N applied. Then a(t) =', options: ['2t', '4t', 't', '8t'], correctAnswer: 0, explanation: 'a = F/m = 4t/2 = 2t.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 94, question: 'Impulse on an object equals:', options: ['∫F dt = Δp', 'F·d', '½mv²', 'mg·t'], correctAnswer: 0, explanation: 'Impulse–momentum theorem: ∫F dt = Δp.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },
  { id: 95, question: 'Newton\'s 2nd law in vector form is:', options: ['ΣF⃗ = m a⃗', 'F = mg', 'p = mv', 'W = Fd'], correctAnswer: 0, explanation: 'Vector net force equals mass times vector acceleration.', difficulty: 'easy', topicSlug: 'physics-c-newtons-laws-calculus' },

  // physics-c-friction-inclines (was 5 → 10)
  { id: 96, question: 'On an incline angle θ, the parallel component of gravity is:', options: ['mg sinθ', 'mg cosθ', 'mg tanθ', 'mg'], correctAnswer: 0, explanation: 'Component along incline = mg sinθ.', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },
  { id: 97, question: 'Maximum static friction on a flat surface is:', options: ['μ_s N', 'μ_k N', 'μ_s mg sinθ', 'μ_s mv²'], correctAnswer: 0, explanation: 'f_s,max = μ_s N (where N = normal force).', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },
  { id: 98, question: 'A 5-kg box on a 30° incline; normal force =', options: ['5g cos30°', '5g sin30°', '5g', '0'], correctAnswer: 0, explanation: 'N = mg cosθ = 5g·cos30° ≈ 42.4 N.', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },
  { id: 99, question: 'A block slides down an incline at constant velocity. Then μ_k =', options: ['tanθ', 'sinθ', 'cosθ', '1'], correctAnswer: 0, explanation: 'mg sinθ = μ_k mg cosθ ⇒ μ_k = tanθ.', difficulty: 'medium', topicSlug: 'physics-c-friction-inclines' },
  { id: 100, question: 'Kinetic friction force is independent of:', options: ['Surface area of contact', 'Normal force', 'Coefficient μ_k', 'Material'], correctAnswer: 0, explanation: 'f_k = μ_k N — depends on N, not contact area.', difficulty: 'easy', topicSlug: 'physics-c-friction-inclines' },

  // physics-c-circular-motion (was 5 → 10)
  { id: 101, question: 'Centripetal acceleration magnitude:', options: ['v²/r', 'rω', 'v/r', 'r²ω'], correctAnswer: 0, explanation: 'a_c = v²/r = ω²r.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 102, question: 'A car rounding an unbanked curve relies on friction to provide:', options: ['Centripetal force', 'Tangential force', 'Normal force', 'Weight'], correctAnswer: 0, explanation: 'Static friction supplies F_c = mv²/r.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 103, question: 'For uniform circular motion, the net force points:', options: ['Toward the center', 'Tangent to the path', 'Outward', 'Zero'], correctAnswer: 0, explanation: 'Centripetal force is always center-directed.', difficulty: 'easy', topicSlug: 'physics-c-circular-motion' },
  { id: 104, question: 'A 2-kg mass moves in a circle of radius 0.5 m at v = 4 m/s. F_c =', options: ['64 N', '32 N', '16 N', '8 N'], correctAnswer: 0, explanation: 'F_c = mv²/r = 2(16)/0.5 = 64 N.', difficulty: 'medium', topicSlug: 'physics-c-circular-motion' },
  { id: 105, question: 'On a banked curve with no friction, tanθ =', options: ['v²/(rg)', 'rg/v²', 'v/(rg)', 'gr/v'], correctAnswer: 0, explanation: 'Setting horizontal component of N equal to mv²/r gives tanθ = v²/(rg).', difficulty: 'hard', topicSlug: 'physics-c-circular-motion' },

  // physics-c-work-power (was 5 → 10)
  { id: 106, question: 'Work done by a constant force is:', options: ['F·d cosθ', 'F·d', 'F·d sinθ', 'F·v'], correctAnswer: 0, explanation: 'W = F⃗·d⃗ = Fd cosθ.', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 107, question: 'Power delivered by a force is:', options: ['F⃗·v⃗', 'F·d', 'mv²/2', 'F/t'], correctAnswer: 0, explanation: 'P = dW/dt = F⃗·v⃗.', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 108, question: 'Work–energy theorem: W_net =', options: ['ΔKE', 'ΔPE', 'KE + PE', '½kx²'], correctAnswer: 0, explanation: 'Net work equals change in kinetic energy.', difficulty: 'easy', topicSlug: 'physics-c-work-power' },
  { id: 109, question: 'A 3-kg object accelerates from 2 m/s to 6 m/s. Work done =', options: ['48 J', '24 J', '12 J', '36 J'], correctAnswer: 0, explanation: 'ΔKE = ½·3·(36 − 4) = 48 J.', difficulty: 'medium', topicSlug: 'physics-c-work-power' },
  { id: 110, question: 'Work done by a variable force F(x) = 3x N from x=0 to x=2:', options: ['6 J', '3 J', '12 J', '9 J'], correctAnswer: 0, explanation: 'W = ∫₀² 3x dx = [3x²/2]₀² = 6 J.', difficulty: 'medium', topicSlug: 'physics-c-work-power' },

  // physics-c-conservative-forces (was 5 → 10)
  { id: 112, question: 'Which is NOT conservative?', options: ['Kinetic friction', 'Gravity', 'Spring force', 'Electrostatic force'], correctAnswer: 0, explanation: 'Friction dissipates energy; not conservative.', difficulty: 'easy', topicSlug: 'physics-c-conservative-forces' },
  { id: 114, question: 'For gravity near Earth, U =', options: ['mgh', '−mgh', '½mgh', 'g/h'], correctAnswer: 0, explanation: 'Near surface, U = mgh (relative to chosen zero).', difficulty: 'easy', topicSlug: 'physics-c-conservative-forces' },
  { id: 115, question: 'Equilibrium points correspond to:', options: ['dU/dx = 0', 'U = 0', 'F = max', 'd²U/dx² = 0'], correctAnswer: 0, explanation: 'Equilibrium ⇔ F = −dU/dx = 0.', difficulty: 'medium', topicSlug: 'physics-c-conservative-forces' },

  // physics-c-momentum-collisions (was 5 → 10)
  { id: 116, question: 'In an isolated system, total momentum is:', options: ['Conserved', 'Always zero', 'Equal to KE', 'Half of impulse'], correctAnswer: 0, explanation: 'Newton\'s 3rd law ⇒ total p is conserved with no external force.', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },
  { id: 117, question: 'In a perfectly inelastic collision:', options: ['Objects stick together', 'KE is conserved', 'Momentum is not conserved', 'Speeds reverse'], correctAnswer: 0, explanation: 'Maximum KE lost; objects move as one mass.', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },
  { id: 118, question: 'A 2-kg ball at 4 m/s strikes a 2-kg ball at rest in a 1D elastic collision. After:', options: ['First stops; second moves at 4 m/s', 'Both move at 2 m/s', 'First reverses at 4 m/s', 'Both stop'], correctAnswer: 0, explanation: 'Equal masses elastic 1D collision: velocities exchange.', difficulty: 'medium', topicSlug: 'physics-c-momentum-collisions' },
  { id: 120, question: 'In an explosion, total momentum after equals:', options: ['Total momentum before', 'Zero', 'Sum of |momenta|', 'Total KE'], correctAnswer: 0, explanation: 'No external forces ⇒ momentum is conserved.', difficulty: 'easy', topicSlug: 'physics-c-momentum-collisions' },

  // physics-c-center-of-mass (was 5 → 10)
  { id: 121, question: 'Center of mass of two equal masses is:', options: ['Midpoint between them', 'At one of them', 'Closer to the smaller', 'Undefined'], correctAnswer: 0, explanation: 'For equal masses, COM is at midpoint.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 122, question: 'COM formula for n particles:', options: ['Σmᵢxᵢ / Σmᵢ', 'Σxᵢ / n', 'Σmᵢxᵢ', 'Σxᵢ·mᵢ²'], correctAnswer: 0, explanation: 'x_COM = (Σmᵢxᵢ)/(Σmᵢ).', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 123, question: 'In an isolated system, COM acceleration is:', options: ['Zero', 'Equal to g', 'Constant nonzero', 'Variable'], correctAnswer: 0, explanation: 'No external forces ⇒ a_COM = 0.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 124, question: 'Two masses 1 kg at x=0 and 3 kg at x=4. x_COM =', options: ['3', '2', '1', '4'], correctAnswer: 0, explanation: '(1·0 + 3·4)/4 = 12/4 = 3.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },
  { id: 125, question: 'For a uniform rod of length L, COM is at:', options: ['L/2', 'L/3', 'L', '0'], correctAnswer: 0, explanation: 'By symmetry, COM is at the midpoint L/2.', difficulty: 'easy', topicSlug: 'physics-c-center-of-mass' },

  // physics-c-rotational-kinematics-dynamics (was 5 → 10)
  { id: 126, question: 'Angular acceleration α =', options: ['dω/dt', 'dθ/dt', 'r·ω', 'v·r'], correctAnswer: 0, explanation: 'α = dω/dt; analogous to linear a = dv/dt.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 127, question: 'Tangential speed v at distance r from axis is:', options: ['rω', 'r/ω', 'ω/r', 'rα'], correctAnswer: 0, explanation: 'v = rω.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 128, question: 'Newton\'s 2nd law for rotation:', options: ['τ_net = Iα', 'F = ma', 'p = mv', 'W = τθ'], correctAnswer: 0, explanation: 'Net torque equals moment of inertia times angular acceleration.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 129, question: 'Rotational analog of KE is:', options: ['½Iω²', 'Iω', '½mv²', 'τω'], correctAnswer: 0, explanation: 'KE_rot = ½Iω².', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },
  { id: 130, question: 'For constant α: ω(t) =', options: ['ω₀ + αt', 'ω₀t + ½αt²', 'αt²', 'ω₀/α'], correctAnswer: 0, explanation: 'Linear-in-time analog: ω = ω₀ + αt.', difficulty: 'easy', topicSlug: 'physics-c-rotational-kinematics-dynamics' },

  // physics-c-moment-of-inertia (was 5 → 10)
  { id: 131, question: 'Moment of inertia of a point mass m at radius r:', options: ['mr²', 'mr', '½mr²', 'r²/m'], correctAnswer: 0, explanation: 'I = mr² for a point mass.', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 132, question: 'I for a uniform solid disk about its center:', options: ['½MR²', 'MR²', '⅔MR²', '⅖MR²'], correctAnswer: 0, explanation: 'I = ½MR² for a solid disk/cylinder.', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 133, question: 'I for a thin hoop of mass M and radius R:', options: ['MR²', '½MR²', '⅔MR²', '⅖MR²'], correctAnswer: 0, explanation: 'All mass at distance R: I = MR².', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 134, question: 'I for a solid sphere about its center:', options: ['⅖MR²', '½MR²', '⅔MR²', 'MR²'], correctAnswer: 0, explanation: 'Standard result: I = (2/5)MR².', difficulty: 'easy', topicSlug: 'physics-c-moment-of-inertia' },
  { id: 135, question: 'For a thin rod of length L about its center:', options: ['(1/12)ML²', '(1/3)ML²', '½ML²', 'ML²'], correctAnswer: 0, explanation: 'I_center = ML²/12.', difficulty: 'medium', topicSlug: 'physics-c-moment-of-inertia' },

  // parallel-axis-theorem (was 5 → 10)
  { id: 136, question: 'Parallel-axis theorem:', options: ['I = I_cm + Md²', 'I = I_cm − Md²', 'I = I_cm·d', 'I = Md²'], correctAnswer: 0, explanation: 'I about parallel axis = I_cm + Md² where d is distance.', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },
  { id: 137, question: 'For a thin rod about its end, I =', options: ['(1/3)ML²', '(1/12)ML²', '½ML²', 'ML²'], correctAnswer: 0, explanation: 'I_end = I_cm + M(L/2)² = ML²/12 + ML²/4 = ML²/3.', difficulty: 'medium', topicSlug: 'parallel-axis-theorem' },
  { id: 138, question: 'Parallel-axis theorem requires:', options: ['Axes parallel; one through CM', 'Any two axes', 'Perpendicular axes', 'Same axis'], correctAnswer: 0, explanation: 'I_cm must be about an axis through CM, parallel to new axis.', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },
  { id: 139, question: 'A disk (I_cm = ½MR²) rotating about an edge has I =', options: ['(3/2)MR²', '½MR²', 'MR²', '⅖MR²'], correctAnswer: 0, explanation: 'I = ½MR² + MR² = 3MR²/2.', difficulty: 'medium', topicSlug: 'parallel-axis-theorem' },
  { id: 140, question: 'In I = I_cm + Md², the term d is:', options: ['Distance between the two parallel axes', 'Radius of the body', 'Length of the body', 'Total distance traveled'], correctAnswer: 0, explanation: 'd = perpendicular distance between the parallel axes.', difficulty: 'easy', topicSlug: 'parallel-axis-theorem' },

  // physics-c-angular-momentum (was 5 → 10)
  { id: 141, question: 'Angular momentum of a point mass: L =', options: ['r × p', 'mv', 'Iα', 'rF'], correctAnswer: 0, explanation: 'L = r × p for a point mass.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 142, question: 'For a rigid body rotating about a fixed axis:', options: ['L = Iω', 'L = mv', 'L = ½Iω²', 'L = τr'], correctAnswer: 0, explanation: 'L = Iω.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 143, question: 'If τ_ext = 0, angular momentum is:', options: ['Conserved', 'Increasing', 'Always zero', 'Equal to KE_rot'], correctAnswer: 0, explanation: 'No external torque ⇒ dL/dt = 0.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 144, question: 'A skater pulls in arms (I decreases). Then ω:', options: ['Increases', 'Decreases', 'Stays same', 'Reverses'], correctAnswer: 0, explanation: 'L = Iω conserved ⇒ ω increases as I decreases.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },
  { id: 145, question: 'Net torque equals:', options: ['dL/dt', 'L·t', 'Iω²', 'Lω'], correctAnswer: 0, explanation: 'Rotational analog of F = dp/dt: τ = dL/dt.', difficulty: 'easy', topicSlug: 'physics-c-angular-momentum' },

  // physics-c-simple-harmonic-motion (was 5 → 10)
  { id: 146, question: 'Period of a mass–spring oscillator:', options: ['2π√(m/k)', '2π√(k/m)', '2π/(km)', '√(m/k)'], correctAnswer: 0, explanation: 'T = 2π√(m/k).', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 147, question: 'Period of a simple pendulum (small angle):', options: ['2π√(L/g)', '2π√(g/L)', '2π·L/g', '√(L/g)'], correctAnswer: 0, explanation: 'T = 2π√(L/g) for small oscillations.', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 148, question: 'Energy in SHM at amplitude A:', options: ['½kA²', '½mA²', 'kA', 'kA²'], correctAnswer: 0, explanation: 'Total energy = ½kA² (all PE at turn-around).', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 149, question: 'Maximum speed of a SHM oscillator x(t)=A cos(ωt):', options: ['Aω', 'A', 'ω', 'A/ω'], correctAnswer: 0, explanation: 'v(t) = −Aω sin(ωt); |v|_max = Aω.', difficulty: 'medium', topicSlug: 'physics-c-simple-harmonic-motion' },
  { id: 150, question: 'For SHM, acceleration is:', options: ['−ω²x', 'ωx', '−ωx', 'ω²x²'], correctAnswer: 0, explanation: 'a = d²x/dt² = −ω²x.', difficulty: 'easy', topicSlug: 'physics-c-simple-harmonic-motion' },

  // physics-c-damped-driven-oscillations (was 5 → 10)
  { id: 151, question: 'In a damped oscillator, amplitude:', options: ['Decreases over time', 'Stays constant', 'Increases', 'Oscillates'], correctAnswer: 0, explanation: 'Damping dissipates energy ⇒ amplitude decays.', difficulty: 'easy', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 152, question: 'Critical damping yields:', options: ['Fastest non-oscillatory return', 'Sustained oscillation', 'Slowest decay', 'Resonance'], correctAnswer: 0, explanation: 'Critically damped ⇒ no oscillation, fastest equilibrium return.', difficulty: 'medium', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 153, question: 'In a driven oscillator, resonance occurs when driving frequency:', options: ['Equals natural frequency', 'Is zero', 'Is twice natural', 'Is much greater'], correctAnswer: 0, explanation: 'Maximum response near ω_drive ≈ ω_0.', difficulty: 'easy', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 154, question: 'Underdamped motion is characterized by:', options: ['Decaying oscillations', 'Exponential decay only', 'Constant amplitude', 'Linear decay'], correctAnswer: 0, explanation: 'Underdamped ⇒ oscillations with exponentially decaying envelope.', difficulty: 'easy', topicSlug: 'physics-c-damped-driven-oscillations' },
  { id: 155, question: 'Adding more damping to an underdamped system reduces:', options: ['Quality factor Q and amplitude', 'Mass', 'Spring constant', 'Length'], correctAnswer: 0, explanation: 'More damping ⇒ lower Q, smaller resonant amplitude.', difficulty: 'medium', topicSlug: 'physics-c-damped-driven-oscillations' },

  // physics-c-universal-gravitation (was 5 → 10)
  { id: 156, question: 'Gravitational field strength at distance r from mass M:', options: ['GM/r²', 'GMm/r²', 'GM/r', 'mg'], correctAnswer: 0, explanation: 'g(r) = GM/r².', difficulty: 'easy', topicSlug: 'physics-c-universal-gravitation' },
  { id: 157, question: 'Period of a circular orbit (Kepler\'s 3rd):', options: ['T = 2π√(r³/GM)', 'T = 2πr/v', 'T = 2π√(GM/r³)', 'T = √(r/g)'], correctAnswer: 0, explanation: 'T² = (4π²/GM) r³ ⇒ T = 2π√(r³/GM).', difficulty: 'medium', topicSlug: 'physics-c-universal-gravitation' },
  { id: 158, question: 'Total mechanical energy of a circular orbit:', options: ['−GMm/(2r)', '−GMm/r', '+GMm/(2r)', '0'], correctAnswer: 0, explanation: 'E = KE + U = −GMm/(2r) (bound orbit).', difficulty: 'hard', topicSlug: 'physics-c-universal-gravitation' },
  { id: 159, question: 'Doubling the orbital radius changes the orbital speed by factor:', options: ['1/√2', '√2', '½', '2'], correctAnswer: 0, explanation: 'v = √(GM/r); v ∝ 1/√r ⇒ factor 1/√2.', difficulty: 'medium', topicSlug: 'physics-c-universal-gravitation' },
  { id: 160, question: 'At Earth\'s surface, g equals:', options: ['GM/R²', 'GM/R', 'GMm/R²', 'M/R²'], correctAnswer: 0, explanation: 'g = GM_E/R_E² ≈ 9.8 m/s².', difficulty: 'easy', topicSlug: 'physics-c-universal-gravitation' },
]

// Lesson-slug → bank-slug alias map. Lesson registry uses granular slugs;
// the bank uses coarser category slugs. This routes lesson slugs to the most
// closely related bank category so competitive mode returns relevant questions.
const topicSlugAliases: Record<string, string[]> = {
  'physics-c-1d-kinematics': ['physics-c-position-velocity-acceleration', 'physics-c-variable-acceleration'],
  'physics-c-2d-kinematics': ['physics-c-position-velocity-acceleration', 'physics-c-circular-motion'],
  'physics-c-potential-energy-curves': ['physics-c-conservative-forces', 'physics-c-work-power'],
  'physics-c-variable-mass': ['physics-c-momentum-collisions', 'physics-c-center-of-mass'],
}

export function getApPhysicsCMechQuestions(count: number = 10, topicSlug?: string): ApPhysicsCMechQuestion[] {
  let pool = allQuestions
  if (topicSlug) {
    const targets = topicSlugAliases[topicSlug] ?? [topicSlug]
    const filtered = allQuestions.filter(q => targets.includes(q.topicSlug))
    if (filtered.length > 0) pool = filtered
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
