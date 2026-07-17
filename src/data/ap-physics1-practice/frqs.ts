import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 — Section II Free-Response (4 questions, 100 minutes total).
 * Q1: Mathematical Routines (~20 min)
 * Q2: Translation Between Representations (~25 min)
 * Q3: Experimental Design and Analysis (~30 min)
 * Q4: Qualitative/Quantitative Translation (~25 min)
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — Mathematical Routines ============== */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**Q1 — Mathematical Routines (Mechanics: Energy + Forces)**

A 2.0 kg block is released from rest at the top of a frictionless ramp of height $h = 1.5$ m and angle 30° above the horizontal. At the bottom of the ramp, it slides onto a horizontal surface where the coefficient of kinetic friction with the block is $\\mu_k = 0.25$. Use $g = 10$ $m/s^{2}$.`,
    parts: [
      {
        prompt: '**(a)** Find the speed of the block at the bottom of the ramp. Show your work.',
        rubric: 'Energy conservation on ramp: $mgh = \\tfrac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(1.5)} = \\sqrt{30} \\approx 5.48$ m/s.',
      },
      {
        prompt: '**(b)** Find the deceleration of the block on the rough horizontal surface.',
        rubric: '$f_k = \\mu_k mg = 0.25(2)(10) = 5$ N. $a = f_k/m = 5/2 = 2.5$ $m/s^{2}$ (deceleration).',
      },
      {
        prompt: '**(c)** How far does the block slide on the horizontal surface before stopping?',
        rubric: 'Work-energy: $\\mu_k mg d = \\tfrac{1}{2}mv^2 \\Rightarrow d = v^2/(2\\mu_k g) = 30/(2 \\cdot 0.25 \\cdot 10) = 6.0$ m.',
      },
      {
        prompt: '**(d)** If the ramp also had friction with $\\mu_k = 0.10$, find the new speed at the bottom.',
        rubric: 'Length of ramp: $L = h/\\sin 30° = 3.0$ m. Friction force on ramp: $f = \\mu_k mg \\cos 30° = 0.10(2)(10)(0.866) \\approx 1.732$ N. Work done by friction: $W_f = -fL = -5.196$ J. Energy: $mgh - fL = \\tfrac{1}{2}mv^2 \\Rightarrow 30 - 5.196 = v^2 \\Rightarrow v \\approx \\sqrt{24.8} \\approx 4.98$ m/s.',
      },
    ],
  },

  /* ============== Q2 — Translation Between Representations ============== */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**Q2 — Translation Between Representations (Kinematics)**

A cart moves along a straight horizontal track. Its velocity-time graph consists of three line segments:
- From $t = 0$ to $t = 4$ s: velocity rises linearly from 0 to 8 m/s.
- From $t = 4$ to $t = 8$ s: velocity stays constant at 8 m/s.
- From $t = 8$ to $t = 12$ s: velocity decreases linearly from 8 m/s to 0.`,
    parts: [
      {
        prompt: '**(a)** Sketch the corresponding acceleration-time graph for $0 \\le t \\le 12$ s. Indicate values.',
        rubric: 'On $[0, 4]$: $a = 2$ $m/s^{2}$. On $[4, 8]$: $a = 0$. On $[8, 12]$: $a = -2$ $m/s^{2}$. Step graph with three horizontal segments.',
      },
      {
        prompt: '**(b)** Calculate the total displacement of the cart from $t = 0$ to $t = 12$ s.',
        rubric: 'Area under $v$-$t$: trapezoid + rectangle + triangle. Phase 1: $\\tfrac{1}{2}(4)(8) = 16$ m. Phase 2: $4(8) = 32$ m. Phase 3: $\\tfrac{1}{2}(4)(8) = 16$ m. Total = 64 m.',
      },
      {
        prompt: '**(c)** Sketch the corresponding position-time graph (assume $x(0) = 0$). Identify the shape on each interval.',
        rubric: '$[0,4]$: parabola opening upward (concave up, since $a>0$), starting at 0 ending at 16 m. $[4,8]$: straight line of slope 8, from 16 to 48 m. $[8,12]$: parabola opening downward (concave down), from 48 to 64 m.',
      },
      {
        prompt: '**(d)** Calculate the average velocity and average speed of the cart for the entire 12-second interval. Are they equal? Explain.',
        rubric: 'Avg velocity $= \\Delta x/\\Delta t = 64/12 \\approx 5.33$ m/s. Avg speed $= $ total distance / total time. Since the cart never reverses direction, total distance = displacement = 64 m. Avg speed $= 5.33$ m/s also. They ARE equal because motion is in one direction throughout.',
      },
    ],
  },

  /* ============== Q3 — Experimental Design ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**Q3 — Experimental Design (Spring Constant)**

A student wants to experimentally determine the spring constant $k$ of an unknown spring. Available equipment: a meter stick, several known masses (50 g, 100 g, 200 g, 500 g, 1 kg), the spring (with one end attached to a ceiling hook), a stopwatch, and a hanger of negligible mass.`,
    parts: [
      {
        prompt: '**(a)** Describe an experimental procedure (using static measurements) that would allow the student to determine $k$. Identify what is measured and what is varied.',
        rubric: 'Hang masses one at a time from the spring; measure the spring stretch from equilibrium for each mass. Record mass $m$ (or weight $mg$) vs. stretch $x$. Repeat for at least 5 different masses to reduce uncertainty. Independent variable: mass (or weight). Dependent variable: stretch. (Also acceptable: dynamic SHM-period method using stopwatch.)',
      },
      {
        prompt: '**(b)** Sketch a graph of $F = mg$ (vertical axis) vs. $x$ (horizontal axis) that the student would expect to obtain. Explain how to determine $k$ from this graph.',
        rubric: 'Graph: straight line through origin with positive slope. Hooke\'s law: $F = kx$, so the slope of the best-fit line equals $k$.',
      },
      {
        prompt: '**(c)** A student\'s data:\n\n| Mass (kg) | Stretch (m) |\n|---|---|\n| 0.10 | 0.025 |\n| 0.20 | 0.052 |\n| 0.50 | 0.124 |\n| 1.00 | 0.250 |\n\nUse two well-separated points to estimate $k$ (use $g = 10$ $m/s^{2}$).',
        rubric: 'Use endpoints (0.10, 0.025) and (1.00, 0.250). Forces: $F_1 = 1$ N, $F_2 = 10$ N. Slope $= (10 - 1)/(0.250 - 0.025) = 9/0.225 = 40$ N/m. So $k \\approx 40$ N/m.',
      },
      {
        prompt: '**(d)** Describe one source of experimental error and how it would affect the measured value of $k$.',
        rubric: 'Possible answers: (1) Mass of the hanger neglected — would shift all forces low by a constant, giving a nonzero $x$-intercept but same slope (no effect on $k$). (2) Parallax error in reading the meter stick — random scatter, would only inflate uncertainty. (3) Spring not unloaded between trials so it does not return to equilibrium — could systematically reduce measured stretch and overestimate $k$. (4) Air currents/oscillations during measurement — random scatter. Award credit for any reasonable source + correct directional impact.',
      },
    ],
  },

  /* ============== Q4 — Qualitative/Quantitative Translation ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-translation',
    stimulus: `**Q4 — Qualitative/Quantitative Translation (Collisions + Momentum)**

A 0.5 kg cart (Cart A) moving at 4 m/s on a frictionless track collides with a stationary 1.5 kg cart (Cart B). After the collision, Cart A continues forward at 1 m/s.`,
    parts: [
      {
        prompt: '**(a)** Calculate the velocity of Cart B after the collision.',
        rubric: 'Conservation of momentum: $m_A v_{A,i} = m_A v_{A,f} + m_B v_{B,f}$. $0.5(4) = 0.5(1) + 1.5 v_{B,f} \\Rightarrow 2 = 0.5 + 1.5 v_{B,f} \\Rightarrow v_{B,f} = 1.0$ m/s.',
      },
      {
        prompt: '**(b)** Determine whether the collision is elastic, inelastic, or perfectly inelastic. Show by comparing kinetic energies.',
        rubric: '$KE_i = \\tfrac{1}{2}(0.5)(16) = 4$ J. $KE_f = \\tfrac{1}{2}(0.5)(1) + \\tfrac{1}{2}(1.5)(1) = 0.25 + 0.75 = 1.0$ J. $KE_f < KE_i$ ⇒ INELASTIC (energy is lost). Not perfectly inelastic because the carts do not stick together (different velocities). Energy lost: 3 J.',
      },
      {
        prompt: '**(c)** Without doing further calculation, explain qualitatively how the answer to (a) would change if Cart A bounced backward at 1 m/s instead of continuing forward at 1 m/s.',
        rubric: 'If Cart A reverses direction, $v_{A,f} = -1$ m/s, so the change in Cart A\'s momentum is larger in magnitude. By conservation of momentum, Cart B must gain MORE forward momentum than before. Therefore Cart B\'s final velocity would be GREATER than 1 m/s.',
      },
      {
        prompt: '**(d)** A student claims, "If two carts have the same momentum, they must have the same kinetic energy." Argue whether this claim is correct, citing your collision data or a counterexample.',
        rubric: 'The claim is INCORRECT. Counterexample: After the collision, Cart A has $p_A = 0.5(1) = 0.5$ kg·m/s and Cart B has $p_B = 1.5(1) = 1.5$ kg·m/s — but if we instead consider two objects with equal momentum, $KE = p^2/(2m)$ depends on mass: a heavier object with the same $p$ has SMALLER KE. Equal momentum does not imply equal KE.',
      },
    ],
  },
]
