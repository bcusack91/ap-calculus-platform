import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics C: Mechanics — 4 FRQs in 2025+ format.
 * Section II: 100 minutes total. Calculator and equation sheet allowed.
 *
 *   Q1 Mathematical Routines (calculus + dynamics)
 *   Q2 Translation Between Representations (graphs / equations)
 *   Q3 Experimental Design & Analysis
 *   Q4 Qualitative/Quantitative Translation (rotational/energy)
 */

export const FRQS: SAQItem[] = [
  /* ---- Q1: Math Routines — Newton's 2nd law with variable force ---- */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    stimulus: `**FRQ #1 — Mathematical Routines: Block on Frictionless Table with Variable Force**

A 2.0 kg block sits at rest on a horizontal frictionless table. Beginning at $t = 0$, a horizontal force is applied:
$$F(t) = 4t - t^2 \\;\\;\\text{(N, for } 0 \\leq t \\leq 4 \\text{ s)}$$

After $t = 4$ s, the force is removed.`,
    parts: [
      {
        prompt: '(a) Derive an expression for the velocity $v(t)$ of the block for $0 \\leq t \\leq 4$ s.',
        rubric: '$a(t) = F(t)/m = (4t - t^2)/2 = 2t - t^2/2$. $v(t) = \\int_0^t (2t\' - t\'^2/2)\\,dt\' = t^2 - t^3/6$ (using v(0)=0). 3 pts.',
      },
      {
        prompt: '(b) Find the velocity at $t = 4$ s.',
        rubric: '$v(4) = 16 - 64/6 = 16 - 10.67 = 5.33$ m/s. 2 pts.',
      },
      {
        prompt: '(c) Find the time during the interval at which the block has maximum velocity, and find that maximum velocity.',
        rubric: 'Max v when $a = 0$: $2t - t^2/2 = 0 \\Rightarrow t(2 - t/2) = 0 \\Rightarrow t = 0$ or $t = 4$ s. Wait — F = 0 when $4t - t^2 = 0 \\Rightarrow t = 0$ or $t = 4$. After t = 4, F removed; block continues at constant v. Within the interval (0,4), check sign: F > 0 on (0,4), so velocity is increasing throughout ⇒ max at $t = 4$, $v_{max} = 5.33$ m/s. 3 pts.',
      },
      {
        prompt: '(d) Find the displacement of the block from $t = 0$ to $t = 4$ s.',
        rubric: '$x(t) = \\int_0^t (t\'^2 - t\'^3/6)\\,dt\' = t^3/3 - t^4/24$. $x(4) = 64/3 - 256/24 = 21.33 - 10.67 = 10.67$ m. 2 pts.',
      },
    ],
  },

  /* ---- Q2: Translation between representations ---- */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    stimulus: `**FRQ #2 — Translation Between Representations: Spring-Mass System**

A 0.50 kg block on a frictionless surface is attached to a spring (k = 8.0 N/m). The block is pulled 0.20 m to the right of equilibrium and released from rest at $t = 0$. Take rightward as positive x.`,
    parts: [
      {
        prompt: '(a) Write the equation $x(t)$ for the block\'s position. Find the period and angular frequency.',
        rubric: '$\\omega = \\sqrt{k/m} = \\sqrt{8/0.5} = 4$ rad/s. $T = 2\\pi/\\omega = \\pi/2 \\approx 1.57$ s. $x(t) = 0.20\\cos(4t)$ m. 3 pts.',
      },
      {
        prompt: '(b) Sketch $x(t)$, $v(t)$, and $a(t)$ on aligned axes for one full period. Label key values (max amplitudes, zero crossings).',
        rubric: '$x(t) = 0.20\\cos(4t)$, amplitude 0.20 m, T ≈ 1.57 s. $v(t) = -0.80\\sin(4t)$, amplitude 0.80 m/s. $a(t) = -3.20\\cos(4t)$, amplitude 3.20 $m/s^{2}$. v leads x by π/2; a is exactly opposite of x (180°). Award 1 pt per correct curve with correct amplitude/phase. 3 pts.',
      },
      {
        prompt: '(c) At what position(s) is the block\'s speed maximum, and what is that speed?',
        rubric: 'Max speed at equilibrium (x = 0). $v_{max} = A\\omega = (0.20)(4) = 0.80$ m/s (or use energy: $\\tfrac{1}{2}kA^2 = \\tfrac{1}{2}mv^2$). 2 pts.',
      },
      {
        prompt: '(d) Find the kinetic and potential energies when x = 0.10 m.',
        rubric: '$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(8)(0.01) = 0.04$ J. Total energy $E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2}(8)(0.04) = 0.16$ J. $K = E - U = 0.16 - 0.04 = 0.12$ J. 2 pts.',
      },
    ],
  },

  /* ---- Q3: Experimental Design — Atwood machine measure g ---- */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    stimulus: `**FRQ #3 — Experimental Design: Determining g with an Atwood Machine**

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
        rubric: 'Newton\'s 2nd law for each mass; constraint they share |a|. $m_2 g - T = m_2 a$; $T - m_1 g = m_1 a$. Add: $(m_2 - m_1)g = (m_1 + m_2)a$. ⇒ $a = (m_2 - m_1)g/(m_1 + m_2)$. 3 pts.',
      },
      {
        prompt: '(b) Identify what quantities should be plotted (y vs. x) so that the slope of the resulting straight line equals g (or a known multiple of g). Justify.',
        rubric: 'Rearrange: $a = g \\cdot (m_2 - m_1)/(m_1 + m_2)$. Plot $a$ (y-axis) vs. $(m_2 - m_1)/(m_1 + m_2)$ (x-axis). The slope = $g$. Linear with intercept = 0. 3 pts.',
      },
      {
        prompt: '(c) For Trial 4, calculate the value of $(m_2 - m_1)/(m_1 + m_2)$ and verify it gives a value of g consistent with $g \\approx 9.8$ $m/s^{2}$.',
        rubric: 'Trial 4: $(0.60 - 0.20)/(0.60 + 0.20) = 0.40/0.80 = 0.500$. Theoretical $a = 0.500 g = 4.90$ $m/s^{2}$ ⇒ measured matches exactly with $g = 9.8$ $m/s^{2}$. ✓ 2 pts.',
      },
      {
        prompt: '(d) Identify TWO sources of systematic error that would cause the measured value of $g$ to be SMALLER than the true value, and explain how each affects the result.',
        rubric: 'Examples (any 2 valid): (i) Friction in pulley axle: opposes motion → reduces measured $a$ → slope (and inferred $g$) too small. (ii) Pulley has mass/rotational inertia: some torque needed to spin pulley → less of $(m_{2}-m_{1})g$ goes to translational acceleration → $a$ smaller. (iii) Air drag opposes motion. (iv) String stretching/elasticity. (v) Timing latency overestimates fall time → underestimates $a$. 2 pts (1 per source with correct directional reasoning).',
      },
    ],
  },

  /* ---- Q4: Qualitative/Quantitative Translation — rolling sphere ---- */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative',
    stimulus: `**FRQ #4 — Qualitative/Quantitative Translation: Sphere Rolling Down Incline**

A solid uniform sphere (mass $M$, radius $R$, $I = \\tfrac{2}{5}MR^2$) is released from rest at the top of a ramp of height $h$ and angle $\\theta$. It rolls without slipping down the ramp.`,
    parts: [
      {
        prompt: '(a) Using energy conservation, derive an expression for the speed $v$ of the sphere at the bottom of the ramp.',
        rubric: '$Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}I\\omega^2$. Rolling constraint $\\omega = v/R$. Substitute: $Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}(\\tfrac{2}{5}MR^2)(v/R)^2 = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{5}Mv^2 = \\tfrac{7}{10}Mv^2$. ⇒ $v = \\sqrt{10gh/7}$. 3 pts.',
      },
      {
        prompt: '(b) For h = 1.40 m and $g = 9.8$ $m/s^{2}$, compute the numerical value of $v$.',
        rubric: '$v = \\sqrt{10(9.8)(1.40)/7} = \\sqrt{19.6} \\approx 4.43$ m/s. 2 pts.',
      },
      {
        prompt: '(c) A frictionless block of the same mass $M$ slides down the same ramp. Without using the rolling constraint, derive its speed at the bottom and compare to the sphere\'s speed. Briefly explain (qualitatively) why the rolling sphere is slower.',
        rubric: 'Frictionless block: $Mgh = \\tfrac{1}{2}Mv^2 \\Rightarrow v = \\sqrt{2gh} \\approx 5.24$ m/s. The rolling sphere is slower (4.43 vs 5.24 m/s) because some of the gravitational PE goes into rotational KE (about 2/7 of total KE), leaving less for translational KE. 3 pts.',
      },
      {
        prompt: '(d) For the rolling sphere, find the minimum coefficient of static friction $\\mu_s$ between the sphere and the ramp required to maintain rolling without slipping at angle $\\theta = 30°$.',
        rubric: 'Newton\'s 2nd law along incline: $Mg\\sin\\theta - f = Ma$. Torque about center: $fR = I\\alpha = \\tfrac{2}{5}MR^2(a/R) = \\tfrac{2}{5}MRa \\Rightarrow f = \\tfrac{2}{5}Ma$. Combine: $Mg\\sin\\theta = Ma + \\tfrac{2}{5}Ma = \\tfrac{7}{5}Ma \\Rightarrow a = \\tfrac{5}{7}g\\sin\\theta$. Then $f = \\tfrac{2}{5}M \\cdot \\tfrac{5}{7}g\\sin\\theta = \\tfrac{2}{7}Mg\\sin\\theta$. Normal force $N = Mg\\cos\\theta$. So $\\mu_s \\geq f/N = \\tfrac{2}{7}\\tan\\theta = \\tfrac{2}{7}\\tan 30° = \\tfrac{2}{7}(0.577) \\approx 0.165$. 2 pts.',
      },
    ],
  },
]
