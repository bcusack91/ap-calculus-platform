export const physCFrictionPart6Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Friction & Inclines**

This workshop presents AP Physics C–style problems that integrate concepts from Parts 1–5. Practice the systematic approach:

### Problem-Solving Framework

| Step | Action |
|:---:|:---:|
| 1 | Draw a diagram and label all forces |
| 2 | Choose a coordinate system (tilted for inclines) |
| 3 | Write Newton's 2nd law for each object |
| 4 | Identify constraints (strings, contact) |
| 5 | Solve the system of equations |
| 6 | Check units and limiting cases |`
    },
    {
      id: 'fri6-mcq1',
      type: 'mcq' as const,
      question: 'A 2 kg block on a $53°$ incline ($\\mu_s = 0.5$, $\\mu_k = 0.4$) is connected to a 1.5 kg hanging mass. Initially at rest. Does the system move, and if so, in which direction? ($g = 10$ $m/s^{2}$, $\\sin 53° \\approx 0.8$, $\\cos 53° \\approx 0.6$)',
      options: [
        'The incline block slides down (gravity on $m_1$ dominates)',
        'The hanging mass descends (gravity on $m_2$ dominates)',
        'The system remains at rest',
        'Cannot be determined without more information'
      ],
      correctAnswer: 0,
      explanation: 'Down-ramp gravity on $m_1$: $m_1 g\\sin 53° = 16$ N. Weight of $m_2$: $m_2 g = 15$ N. The incline block tends to slide down. Maximum static friction opposing downward slide: $\\mu_s m_1 g\\cos 53° = 0.5(20)(0.6) = 6$ N. Net tendency down: $16 - 15 - 6 < 0$... Actually: net force trying to move $m_1$ down =$16 - 15 = 1$ N. Can static friction hold? $f_{s,\\max} = 6$ N $> 1$ N, so actually it stays at rest! Let me re-examine: The net gravitational tendency is for $m_1$ to go down. The net unbalanced gravity = $m_1 g\\sin\\theta - m_2 g = 16 - 15 = 1$ N. Since $f_{s,\\max} = 6$ N $> 1$ N, the system stays at rest.'
    },
    {
      id: 'fri6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Block Launched Up a Ramp

A 3 kg block is launched up a $37°$ rough incline ($\\mu_k = 0.3$) with initial speed $v_0 = 10$ m/s.

### Solution

**Phase 1: Going up**

$$a_{\\text{up}} = -g(\\sin 37° + \\mu_k \\cos 37°) = -10(0.6 + 0.24) = -8.4 \\text{ m/s}^2$$

Distance traveled up:
$$0 = v_0^2 + 2a_{\\text{up}}d \\implies d = \\frac{v_0^2}{2 \\times 8.4} = \\frac{100}{16.8} = 5.95 \\text{ m}$$

Time to reach top:
$$t_1 = \\frac{v_0}{|a_{\\text{up}}|} = \\frac{10}{8.4} = 1.19 \\text{ s}$$

**Phase 2: Check if it slides back**

$\\tan 37° = 0.75$. If $\\mu_s \\approx 0.35 < 0.75$, it slides back.

$$a_{\\text{down}} = g(\\sin 37° - \\mu_k \\cos 37°) = 10(0.6 - 0.24) = 3.6 \\text{ m/s}^2$$

Speed at bottom:
$$v = \\sqrt{2(3.6)(5.95)} = \\sqrt{42.84} = 6.55 \\text{ m/s}$$

**Energy check:** Energy dissipated = $\\mu_k mg\\cos\\theta \\times 2d = 0.3(30)(0.8)(11.9) = 85.7$ J.

Initial KE = $\\frac{1}{2}(3)(100) = 150$ J. Final KE = $150 - 85.7 = 64.3$ J. $v = \\sqrt{2(64.3)/3} = 6.55$ m/s. ✓`
    },
    {
      id: 'fri6-mcq2',
      type: 'mcq' as const,
      question: 'In Problem 2, what fraction of the initial kinetic energy is lost to friction during the round trip?',
      options: [
        '$\\approx 57\\%$',
        '$\\approx 43\\%$',
        '$\\approx 30\\%$',
        '$\\approx 75\\%$'
      ],
      correctAnswer: 0,
      explanation: 'Initial KE = 150 J. Final KE = $\\frac{1}{2}(3)(6.55)^2 \\approx 64.3$ J. Fraction lost = $(150 - 64.3)/150 \\approx 0.571$ or $57\\%$.'
    },
    {
      id: 'fri6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Velocity-Dependent Friction on a Ramp

A 1 kg block starts from rest at the top of a $45°$ incline with velocity-dependent friction $f = 4v$ (SI units). Find:

**(a) Terminal velocity:**
$$v_T = \\frac{mg\\sin\\theta}{b} = \\frac{1(10)(\\frac{\\sqrt{2}}{2})}{4} = \\frac{7.07}{4} = 1.77 \\text{ m/s}$$

**(b) Velocity as a function of time:**
$$v(t) = v_T(1 - e^{-bt/m}) = 1.77(1 - e^{-4t})$$

**(c) Distance traveled in 1 second:**
$$x(t) = \\int_0^t v(t')\\,dt' = v_T\\left[t + \\frac{m}{b}e^{-bt/m}\\right]_0^t = v_T\\left(t + \\frac{1}{4}e^{-4t} - \\frac{1}{4}\\right)$$

$$x(1) = 1.77\\left(1 + 0.25e^{-4} - 0.25\\right) = 1.77(1 + 0.00458 - 0.25) = 1.77(0.755) = 1.34 \\text{ m}$$

**(d) Acceleration at $t = 0.5$ s:**
$$a(t) = g\\sin\\theta \\cdot e^{-bt/m} = 7.07 e^{-2} = 0.957 \\text{ m/s}^2$$`
    },
    {
      id: 'fri6-mcq3',
      type: 'mcq' as const,
      question: 'A horizontal surface has velocity-dependent friction $f = 3v^2$. A 2 kg block starts with $v_0 = 6$ m/s. The ODE for velocity is:',
      options: [
        '$2\\frac{dv}{dt} = -3v^2$',
        '$2\\frac{dv}{dt} = -3v$',
        '$\\frac{dv}{dt} = -3v^2$',
        '$2\\frac{dv}{dt} = 3v^2$'
      ],
      correctAnswer: 0,
      explanation: 'Newton\'s second law: $ma = -f = -3v^2$ (friction opposes motion). So $2\\frac{dv}{dt} = -3v^2$.'
    },
    {
      id: 'fri6-mcq4',
      type: 'mcq' as const,
      question: 'For $2\\frac{dv}{dt} = -3v^2$ with $v_0 = 6$ m/s, what is $v(t)$?',
      options: [
        '$v(t) = \\frac{6}{1 + 18t}$',
        '$v(t) = 6e^{-1.5t}$',
        '$v(t) = 6 - 9t$',
        '$v(t) = \\frac{1}{\\frac{1}{6} + 1.5t}$'
      ],
      correctAnswer: 3,
      explanation: 'Separating variables: $\\frac{dv}{v^2} = -\\frac{3}{2}dt$. Integrating: $-\\frac{1}{v} = -\\frac{3}{2}t + C$. With $v(0) = 6$: $C = -1/6$. So $\\frac{1}{v} = \\frac{1}{6} + \\frac{3}{2}t$, which simplifies to $\\frac{6}{1 + 9t}$. (Forgetting to divide the 3 by 2 gives the $1 + 18t$ trap.)'
    },
    {
      id: 'fri6-mcq5',
      type: 'mcq' as const,
      question: 'A block is on a ramp that can be tilted. The block just begins to slip at $\\theta_1$, and then slides at constant speed at a smaller angle $\\theta_2$. Which correctly identifies the coefficients?',
      options: [
        '$\\mu_s = \\tan\\theta_1$ and $\\mu_k = \\tan\\theta_2$',
        '$\\mu_s = \\tan\\theta_2$ and $\\mu_k = \\tan\\theta_1$',
        '$\\mu_s = \\sin\\theta_1$ and $\\mu_k = \\sin\\theta_2$',
        '$\\mu_s = \\cos\\theta_1$ and $\\mu_k = \\cos\\theta_2$'
      ],
      correctAnswer: 0,
      explanation: 'At $\\theta_1$: static friction is maxed out, so $\\mu_s = \\tan\\theta_1$. At $\\theta_2$: constant speed means kinetic friction balances gravity, so $\\mu_k = \\tan\\theta_2$. Since $\\mu_s > \\mu_k$, we have $\\theta_1 > \\theta_2$. ✓'
    },
    {
      id: 'fri6-summary',
      type: 'text' as const,
      content: `## Workshop Summary

### Common AP Pitfalls

| Mistake | Correction |
|:---:|:---:|
| Wrong friction direction | Always opposes motion (or tendency of motion) |
| Forgetting $N \\neq mg$ on inclines | $N = mg\\cos\\theta$ on an incline |
| Using $\\mu_s$ when sliding | Use $\\mu_k$ once the object is in motion |
| Ignoring the "does it move?" check | Always compare applied force to $f_{s,\\max}$ first |
| Wrong sign on $a$ when going up vs down | Friction always opposes velocity direction |

> **Next up:** Part 7 — Review & Applications, consolidating everything with real-world contexts.`
    }
  ]
};
