import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 — Section II Free-Response (4 questions, 95 minutes total, 40 points).
 * Q1: Mathematical Routines (~20 min) — 10 points
 * Q2: Translation Between Representations (~25 min) — 12 points
 * Q3: Experimental Design and Analysis (~30 min) — 10 points
 * Q4: Qualitative/Quantitative Translation (~25 min) — 8 points
 * Each rubric line is one point.
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — Mathematical Routines ============== */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**Q1 — Mathematical Routines (Mechanics: Energy + Forces) (10 points)**

A 2.0 kg block is released from rest at the top of a frictionless ramp of height $h = 1.5$ m and angle 30° above the horizontal. At the bottom of the ramp, it slides onto a horizontal surface where the coefficient of kinetic friction with the block is $\\mu_k = 0.25$. Use $g = 10$ $m/s^{2}$.`,
    parts: [
      {
        prompt: '**(a)** Find the speed of the block at the bottom of the ramp. Show your work.',
        rubric: [
          { id: 'a1', label: '1 pt — Conservation of energy', description: '$mgh = \\tfrac{1}{2}mv^2$ (all gravitational potential energy becomes kinetic energy on the frictionless ramp).' },
          { id: 'a2', label: '1 pt — Answer with units', description: '$v = \\sqrt{2gh} = \\sqrt{2(10)(1.5)} = \\sqrt{30} \\approx 5.48$ m/s.' },
        ],
      },
      {
        prompt: '**(b)** Find the deceleration of the block on the rough horizontal surface.',
        rubric: [
          { id: 'b1', label: '1 pt — Friction force', description: 'Normal force $= mg = 20$ N, so $f_k = \\mu_k mg = 0.25(2)(10) = 5$ N.' },
          { id: 'b2', label: '1 pt — Newton\'s second law and answer', description: '$a = f_k/m = 5/2 = 2.5$ $m/s^{2}$, directed opposite the motion.' },
        ],
      },
      {
        prompt: '**(c)** How far does the block slide on the horizontal surface before stopping?',
        rubric: [
          { id: 'c1', label: '1 pt — Work-energy (or kinematics) relationship', description: '$\\mu_k mg d = \\tfrac{1}{2}mv^2$, or $0 = v^2 - 2ad$.' },
          { id: 'c2', label: '1 pt — Answer with units', description: '$d = \\dfrac{v^2}{2\\mu_k g} = \\dfrac{30}{2(0.25)(10)} = 6.0$ m.' },
        ],
      },
      {
        prompt: '**(d)** If the ramp also had friction with $\\mu_k = 0.10$, find the new speed at the bottom.',
        rubric: [
          { id: 'd1', label: '1 pt — Length of the ramp', description: '$L = h/\\sin 30° = 3.0$ m.' },
          { id: 'd2', label: '1 pt — Friction force on the incline', description: 'Normal force on the incline is $mg\\cos 30°$, so $f = \\mu_k mg\\cos 30° = 0.10(2)(10)(0.866) \\approx 1.73$ N.' },
          { id: 'd3', label: '1 pt — Energy equation including the work done by friction', description: '$mgh - fL = \\tfrac{1}{2}mv^2$, with $fL \\approx 5.20$ J.' },
          { id: 'd4', label: '1 pt — Answer with units', description: '$30 - 5.20 = v^2 \\Rightarrow v \\approx \\sqrt{24.8} \\approx 4.98$ m/s.' },
        ],
      },
    ],
  },

  /* ============== Q2 — Translation Between Representations ============== */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**Q2 — Translation Between Representations (Kinematics) (12 points)**

A cart moves along a straight horizontal track. Its velocity-time graph consists of three line segments:
- From $t = 0$ to $t = 4$ s: velocity rises linearly from 0 to 8 m/s.
- From $t = 4$ to $t = 8$ s: velocity stays constant at 8 m/s.
- From $t = 8$ to $t = 12$ s: velocity decreases linearly from 8 m/s to 0.`,
    parts: [
      {
        prompt: '**(a)** Sketch the corresponding acceleration-time graph for $0 \\le t \\le 12$ s. Indicate values.',
        rubric: [
          { id: 'a1', label: '1 pt — Interval $0$ to $4$ s', description: 'Horizontal segment at $a = +2$ $m/s^{2}$ (slope of the $v$-$t$ graph, $8/4$).' },
          { id: 'a2', label: '1 pt — Interval $4$ to $8$ s', description: 'Horizontal segment at $a = 0$.' },
          { id: 'a3', label: '1 pt — Interval $8$ to $12$ s', description: 'Horizontal segment at $a = -2$ $m/s^{2}$.' },
        ],
      },
      {
        prompt: '**(b)** Calculate the total displacement of the cart from $t = 0$ to $t = 12$ s.',
        rubric: [
          { id: 'b1', label: '1 pt — Displacement is the area under the $v$-$t$ graph', description: 'Or uses kinematic equations for each phase.' },
          { id: 'b2', label: '1 pt — Area of each phase', description: 'Triangle $\\tfrac{1}{2}(4)(8) = 16$ m, rectangle $4(8) = 32$ m, triangle $\\tfrac{1}{2}(4)(8) = 16$ m.' },
          { id: 'b3', label: '1 pt — Total with units', description: '$16 + 32 + 16 = 64$ m.' },
        ],
      },
      {
        prompt: '**(c)** Sketch the corresponding position-time graph (assume $x(0) = 0$). Identify the shape on each interval.',
        rubric: [
          { id: 'c1', label: '1 pt — Interval $0$ to $4$ s', description: 'Concave-up curve (parabola, since $a > 0$) from 0 to 16 m, starting with zero slope.' },
          { id: 'c2', label: '1 pt — Interval $4$ to $8$ s', description: 'Straight line with slope 8 m/s, from 16 m to 48 m.' },
          { id: 'c3', label: '1 pt — Interval $8$ to $12$ s', description: 'Concave-down curve from 48 m to 64 m, flattening to zero slope at $t = 12$ s.' },
        ],
      },
      {
        prompt: '**(d)** Calculate the average velocity and average speed of the cart for the entire 12-second interval. Are they equal? Explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Average velocity', description: '$\\Delta x/\\Delta t = 64/12 \\approx 5.33$ m/s.' },
          { id: 'd2', label: '1 pt — Average speed', description: 'Total distance / time $= 64/12 \\approx 5.33$ m/s.' },
          { id: 'd3', label: '1 pt — Equal, with reason', description: 'They are equal because the velocity is never negative: the cart never reverses, so distance traveled equals the magnitude of the displacement.' },
        ],
      },
    ],
  },

  /* ============== Q3 — Experimental Design ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**Q3 — Experimental Design (Spring Constant) (10 points)**

A student wants to experimentally determine the spring constant $k$ of an unknown spring. Available equipment: a meter stick, several known masses (50 g, 100 g, 200 g, 500 g, 1 kg), the spring (with one end attached to a ceiling hook), a stopwatch, and a hanger of negligible mass.`,
    parts: [
      {
        prompt: '**(a)** Describe an experimental procedure (using static measurements) that would allow the student to determine $k$. Identify what is measured and what is varied.',
        rubric: [
          { id: 'a1', label: '1 pt — Measurement procedure', description: 'Hang a known mass from the spring, let it come to rest, and use the meter stick to measure the stretch from the spring\'s unloaded length.' },
          { id: 'a2', label: '1 pt — Reduces experimental uncertainty', description: 'Repeats for at least 5 different masses (and/or repeats trials and averages).' },
          { id: 'a3', label: '1 pt — Identifies the variables', description: 'Varied (independent): the hanging mass, or its weight $mg$. Measured (dependent): the stretch $x$.' },
        ],
      },
      {
        prompt: '**(b)** Sketch a graph of $F = mg$ (vertical axis) vs. $x$ (horizontal axis) that the student would expect to obtain. Explain how to determine $k$ from this graph.',
        rubric: [
          { id: 'b1', label: '1 pt — Shape of the graph', description: 'A straight line through the origin with positive slope.' },
          { id: 'b2', label: '1 pt — Slope equals $k$', description: 'At equilibrium $mg = kx$ (Hooke\'s law), so the slope of the best-fit line is $k$.' },
        ],
      },
      {
        prompt: '**(c)** A student\'s data:\n\n| Mass (kg) | Stretch (m) |\n|---|---|\n| 0.10 | 0.025 |\n| 0.20 | 0.052 |\n| 0.50 | 0.124 |\n| 1.00 | 0.250 |\n\nUse two well-separated points to estimate $k$ (use $g = 10$ $m/s^{2}$).',
        rubric: [
          { id: 'c1', label: '1 pt — Converts masses to forces', description: '$F = mg$: 1.0 N for 0.10 kg and 10 N for 1.00 kg.' },
          { id: 'c2', label: '1 pt — Slope from two well-separated points', description: '$\\dfrac{10 - 1}{0.250 - 0.025} = \\dfrac{9}{0.225}$.' },
          { id: 'c3', label: '1 pt — Answer with units', description: '$k \\approx 40$ N/m.' },
        ],
      },
      {
        prompt: '**(d)** Describe one source of experimental error and how it would affect the measured value of $k$.',
        rubric: [
          { id: 'd1', label: '1 pt — A plausible source of error', description: 'For example: parallax in reading the meter stick; measuring stretch while the mass is still oscillating; a hanger whose mass is not actually negligible; the spring being permanently stretched by the 1 kg mass.' },
          { id: 'd2', label: '1 pt — Correct effect on $k$, with reasoning', description: 'For example: an unaccounted hanger mass shifts every force by the same amount, giving a nonzero intercept but the same slope, so $k$ is unaffected; parallax or oscillation causes random scatter that increases the uncertainty in $k$; permanent stretching makes later stretches too large, so $k$ is underestimated.' },
        ],
      },
    ],
  },

  /* ============== Q4 — Qualitative/Quantitative Translation ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-translation',
    stimulus: `**Q4 — Qualitative/Quantitative Translation (Collisions + Momentum) (8 points)**

A 0.5 kg cart (Cart A) moving at 4 m/s on a frictionless track collides with a stationary 1.5 kg cart (Cart B). After the collision, Cart A continues forward at 1 m/s.`,
    parts: [
      {
        prompt: '**(a)** Calculate the velocity of Cart B after the collision.',
        rubric: [
          { id: 'a1', label: '1 pt — Conservation of momentum', description: '$m_A v_{A,i} = m_A v_{A,f} + m_B v_{B,f}$: $0.5(4) = 0.5(1) + 1.5\\,v_{B,f}$.' },
          { id: 'a2', label: '1 pt — Answer with units and direction', description: '$v_{B,f} = 1.0$ m/s, forward (in Cart A\'s original direction).' },
        ],
      },
      {
        prompt: '**(b)** Determine whether the collision is elastic, inelastic, or perfectly inelastic. Show by comparing kinetic energies.',
        rubric: [
          { id: 'b1', label: '1 pt — Kinetic energies calculated', description: '$K_i = \\tfrac{1}{2}(0.5)(4)^2 = 4$ J; $K_f = \\tfrac{1}{2}(0.5)(1)^2 + \\tfrac{1}{2}(1.5)(1)^2 = 1.0$ J.' },
          { id: 'b2', label: '1 pt — Classification with reason', description: '$K_f < K_i$ (3 J lost), so the collision is inelastic; it is not perfectly inelastic because the carts do not stick together.' },
        ],
      },
      {
        prompt: '**(c)** Without doing further calculation, explain qualitatively how the answer to (a) would change if Cart A bounced backward at 1 m/s instead of continuing forward at 1 m/s.',
        rubric: [
          { id: 'c1', label: '1 pt — Cart B\'s velocity would be greater', description: 'Cart B would move forward faster than 1 m/s.' },
          { id: 'c2', label: '1 pt — Momentum reasoning', description: 'If Cart A reverses, its change in momentum is larger in magnitude. Total momentum is conserved, so Cart B must gain more forward momentum.' },
        ],
      },
      {
        prompt: '**(d)** A student claims, "If two carts have the same momentum, they must have the same kinetic energy." Argue whether this claim is correct, citing your collision data or a counterexample.',
        rubric: [
          { id: 'd1', label: '1 pt — The claim is incorrect', description: 'Equal momentum does not imply equal kinetic energy.' },
          { id: 'd2', label: '1 pt — Reasoning or counterexample', description: '$K = p^2/(2m)$, so for the same $p$ the heavier object has less kinetic energy. Example: Cart A before the collision has $p = 2$ kg·m/s and $K = 4$ J; Cart B moving at $4/3$ m/s would also have $p = 2$ kg·m/s but only $K \\approx 1.3$ J.' },
        ],
      },
    ],
  },
]
