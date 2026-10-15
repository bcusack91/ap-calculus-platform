import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics C: Mechanics — 4 FRQs in 2025+ format (40 points).
 * Section II: 100 minutes total. Calculator and equation sheet allowed.
 *
 *   Q1 Mathematical Routines (calculus + dynamics) — 10 points
 *   Q2 Translation Between Representations (graphs / equations) — 12 points
 *   Q3 Experimental Design & Analysis — 10 points
 *   Q4 Qualitative/Quantitative Translation (rotational/energy) — 8 points
 * Each rubric line is one point.
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Math Routines — Newton's 2nd law with variable force ---- */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**FRQ #1 — Mathematical Routines: Block on Frictionless Table with Variable Force (10 points)**

A 2.0 kg block sits at rest on a horizontal frictionless table. Beginning at $t = 0$, a horizontal force is applied:
$$F(t) = 4t - t^2 \\;\\;\\text{(N, for } 0 \\leq t \\leq 4 \\text{ s)}$$

After $t = 4$ s, the force is removed.`,
    parts: [
      {
        prompt: '(a) Derive an expression for the velocity $v(t)$ of the block for $0 \\leq t \\leq 4$ s.',
        rubric: [
          { id: 'a1', label: '1 pt — Newton\'s second law', description: '$a(t) = F(t)/m = (4t - t^2)/2 = 2t - t^2/2$.' },
          { id: 'a2', label: '1 pt — Integrates acceleration', description: '$v(t) = v(0) + \\int_0^t a(t\')\\,dt\'$.' },
          { id: 'a3', label: '1 pt — Correct expression', description: '$v(t) = t^2 - t^3/6$ (m/s), using $v(0) = 0$.' },
        ],
      },
      {
        prompt: '(b) Find the velocity at $t = 4$ s.',
        rubric: [
          { id: 'b1', label: '1 pt — Substitutes into $v(t)$', description: '$v(4) = 16 - 64/6$.' },
          { id: 'b2', label: '1 pt — Answer with units', description: '$v(4) \\approx 5.33$ m/s.' },
        ],
      },
      {
        prompt: '(c) Find the time during the interval at which the block has maximum velocity, and find that maximum velocity.',
        rubric: [
          { id: 'c1', label: '1 pt — Condition for an extremum of $v$', description: 'Checks where $a = dv/dt = 0$: $F = 4t - t^2 = 0$ only at $t = 0$ and $t = 4$ s, the ends of the interval.' },
          { id: 'c2', label: '1 pt — Sign reasoning', description: '$F > 0$ (so $a > 0$) for $0 < t < 4$ s, so the velocity increases throughout the interval.' },
          { id: 'c3', label: '1 pt — Answer', description: 'Maximum velocity at $t = 4$ s, $v_{max} \\approx 5.33$ m/s (after that the force is removed and $v$ stays constant).' },
        ],
      },
      {
        prompt: '(d) Find the displacement of the block from $t = 0$ to $t = 4$ s.',
        rubric: [
          { id: 'd1', label: '1 pt — Integrates velocity', description: '$x(t) = \\int_0^t (t\'^2 - t\'^3/6)\\,dt\' = t^3/3 - t^4/24$.' },
          { id: 'd2', label: '1 pt — Answer with units', description: '$x(4) = 64/3 - 256/24 \\approx 10.67$ m.' },
        ],
      },
    ],
  },

  /* ---- Q2: Translation between representations ---- */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**FRQ #2 — Translation Between Representations: Spring-Mass System (12 points)**

A 0.50 kg block on a frictionless surface is attached to a spring (k = 8.0 N/m). The block is pulled 0.20 m to the right of equilibrium and released from rest at $t = 0$. Take rightward as positive x.`,
    parts: [
      {
        prompt: '(a) Write the equation $x(t)$ for the block\'s position. Find the period and angular frequency.',
        rubric: [
          { id: 'a1', label: '1 pt — Angular frequency', description: '$\\omega = \\sqrt{k/m} = \\sqrt{8/0.5} = 4$ rad/s.' },
          { id: 'a2', label: '1 pt — Period', description: '$T = 2\\pi/\\omega = \\pi/2 \\approx 1.57$ s.' },
          { id: 'a3', label: '1 pt — Position equation', description: '$x(t) = 0.20\\cos(4t)$ m (amplitude 0.20 m; cosine because it starts from rest at $+A$).' },
        ],
      },
      {
        prompt: '(b) Sketch $x(t)$, $v(t)$, and $a(t)$ on aligned axes for one full period. Label key values (max amplitudes, zero crossings).',
        rubric: [
          { id: 'b1', label: '1 pt — $x(t)$', description: 'Cosine starting at $+0.20$ m, amplitude 0.20 m.' },
          { id: 'b2', label: '1 pt — $v(t)$', description: '$v(t) = -0.80\\sin(4t)$: starts at 0 and first goes negative, amplitude 0.80 m/s.' },
          { id: 'b3', label: '1 pt — $a(t)$', description: '$a(t) = -3.20\\cos(4t)$: starts at $-3.20$ $m/s^{2}$, exactly opposite in phase to $x$.' },
          { id: 'b4', label: '1 pt — Aligned timing', description: 'Zero crossings and extremes line up at multiples of $T/4 \\approx 0.39$ s, with one full cycle ending at $T \\approx 1.57$ s.' },
        ],
      },
      {
        prompt: '(c) At what position(s) is the block\'s speed maximum, and what is that speed?',
        rubric: [
          { id: 'c1', label: '1 pt — Position', description: 'At equilibrium, $x = 0$.' },
          { id: 'c2', label: '1 pt — Maximum speed with units', description: '$v_{max} = A\\omega = (0.20)(4) = 0.80$ m/s (or from $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}mv^2$).' },
        ],
      },
      {
        prompt: '(d) Find the kinetic and potential energies when x = 0.10 m.',
        rubric: [
          { id: 'd1', label: '1 pt — Potential energy', description: '$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(8)(0.10)^2 = 0.04$ J.' },
          { id: 'd2', label: '1 pt — Total mechanical energy', description: '$E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(8)(0.20)^2 = 0.16$ J.' },
          { id: 'd3', label: '1 pt — Kinetic energy', description: '$K = E - U = 0.16 - 0.04 = 0.12$ J.' },
        ],
      },
    ],
  },

  /* ---- Q3: Experimental Design — Atwood machine measure g ---- */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**FRQ #3 — Experimental Design: Determining g with an Atwood Machine (10 points)**

A student designs an experiment to measure $g$ using a modified Atwood machine: two masses, $m_1$ and $m_2$ ($m_2 > m_1$), connected by a light string over a frictionless, massless pulley. The student measures the acceleration $a$ of the system for several mass combinations.

The student records:

| Trial | $m_1$ (kg) | $m_2$ (kg) | $a$ measured $(m/s^{2})$ |
|-------|------------|------------|---------------------|
| 1 | 0.20 | 0.30 | 1.96 |
| 2 | 0.20 | 0.40 | 3.27 |
| 3 | 0.20 | 0.50 | 4.20 |
| 4 | 0.20 | 0.60 | 4.90 |
| 5 | 0.20 | 0.80 | 5.88 |`,
    parts: [
      {
        prompt: '(a) Derive the theoretical expression for the acceleration $a$ in terms of $m_1$, $m_2$, and $g$.',
        rubric: [
          { id: 'a1', label: '1 pt — Newton\'s second law for $m_2$', description: '$m_2 g - T = m_2 a$ (both masses share the same magnitude of acceleration).' },
          { id: 'a2', label: '1 pt — Newton\'s second law for $m_1$', description: '$T - m_1 g = m_1 a$.' },
          { id: 'a3', label: '1 pt — Combined result', description: 'Adding: $(m_2 - m_1)g = (m_1 + m_2)a$, so $a = \\dfrac{(m_2 - m_1)g}{m_1 + m_2}$.' },
        ],
      },
      {
        prompt: '(b) Identify what quantities should be plotted (y vs. x) so that the slope of the resulting straight line equals g (or a known multiple of g). Justify.',
        rubric: [
          { id: 'b1', label: '1 pt — Vertical axis', description: 'The measured acceleration $a$.' },
          { id: 'b2', label: '1 pt — Horizontal axis', description: '$\\dfrac{m_2 - m_1}{m_1 + m_2}$.' },
          { id: 'b3', label: '1 pt — Justification', description: '$a = g \\cdot \\dfrac{m_2 - m_1}{m_1 + m_2}$ has the form $y = (\\text{slope})x$, so the graph is a straight line through the origin with slope $g$.' },
        ],
      },
      {
        prompt: '(c) For Trial 4, calculate the value of $(m_2 - m_1)/(m_1 + m_2)$ and verify it gives a value of g consistent with $g \\approx 9.8$ $m/s^{2}$.',
        rubric: [
          { id: 'c1', label: '1 pt — Mass ratio', description: '$(0.60 - 0.20)/(0.60 + 0.20) = 0.40/0.80 = 0.500$.' },
          { id: 'c2', label: '1 pt — Value of $g$', description: '$g = a/0.500 = 4.90/0.500 = 9.8$ $m/s^{2}$, consistent with the accepted value.' },
        ],
      },
      {
        prompt: '(d) Identify TWO sources of systematic error that would cause the measured value of $g$ to be SMALLER than the true value, and explain how each affects the result.',
        rubric: [
          { id: 'd1', label: '1 pt — First source, with directional reasoning', description: 'For example: friction in the pulley axle opposes the motion, reducing the measured $a$, so the slope (inferred $g$) is too small.' },
          { id: 'd2', label: '1 pt — Second source, with directional reasoning', description: 'For example: the pulley has rotational inertia, so part of the net force $(m_2 - m_1)g$ goes into spinning it and $a$ is smaller; air drag on the masses; a timing delay that overestimates the fall time and so underestimates $a$.' },
        ],
      },
    ],
  },

  /* ---- Q4: Qualitative/Quantitative Translation — rolling sphere ---- */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative',
    stimulus: `**FRQ #4 — Qualitative/Quantitative Translation: Sphere Rolling Down Incline (8 points)**

A solid uniform sphere (mass $M$, radius $R$, $I = \\tfrac{2}{5}MR^2$) is released from rest at the top of a ramp of height $h$ and angle $\\theta$. It rolls without slipping down the ramp.`,
    parts: [
      {
        prompt: '(a) Using energy conservation, derive an expression for the speed $v$ of the sphere at the bottom of the ramp.',
        rubric: [
          { id: 'a1', label: '1 pt — Energy conservation including rotational kinetic energy', description: '$Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}I\\omega^2$.' },
          { id: 'a2', label: '1 pt — Rolling constraint', description: '$\\omega = v/R$, so $\\tfrac{1}{2}(\\tfrac{2}{5}MR^2)(v/R)^2 = \\tfrac{1}{5}Mv^2$ and $Mgh = \\tfrac{7}{10}Mv^2$.' },
          { id: 'a3', label: '1 pt — Correct expression', description: '$v = \\sqrt{10gh/7}$.' },
        ],
      },
      {
        prompt: '(b) For h = 1.40 m and $g = 9.8$ $m/s^{2}$, compute the numerical value of $v$.',
        rubric: [
          { id: 'b1', label: '1 pt — Answer with units', description: '$v = \\sqrt{10(9.8)(1.40)/7} = \\sqrt{19.6} \\approx 4.43$ m/s.' },
        ],
      },
      {
        prompt: '(c) A frictionless block of the same mass $M$ slides down the same ramp. Without using the rolling constraint, derive its speed at the bottom and compare to the sphere\'s speed. Briefly explain (qualitatively) why the rolling sphere is slower.',
        rubric: [
          { id: 'c1', label: '1 pt — Block\'s speed', description: '$Mgh = \\tfrac{1}{2}Mv^2 \\Rightarrow v = \\sqrt{2gh} \\approx 5.24$ m/s, greater than the sphere\'s 4.43 m/s.' },
          { id: 'c2', label: '1 pt — Qualitative explanation', description: 'The same gravitational potential energy is converted, but the sphere puts part of it (2/7 of its kinetic energy) into rotation, leaving less translational kinetic energy.' },
        ],
      },
      {
        prompt: '(d) For the rolling sphere, find the minimum coefficient of static friction $\\mu_s$ between the sphere and the ramp required to maintain rolling without slipping at angle $\\theta = 30°$.',
        rubric: [
          { id: 'd1', label: '1 pt — Friction force required', description: 'Newton\'s second law along the incline, $Mg\\sin\\theta - f = Ma$, and torque about the center, $fR = \\tfrac{2}{5}MR^2(a/R)$, give $a = \\tfrac{5}{7}g\\sin\\theta$ and $f = \\tfrac{2}{7}Mg\\sin\\theta$.' },
          { id: 'd2', label: '1 pt — Minimum coefficient', description: 'With $N = Mg\\cos\\theta$: $\\mu_s \\ge f/N = \\tfrac{2}{7}\\tan 30° \\approx 0.165$.' },
        ],
      },
    ],
  },
]
