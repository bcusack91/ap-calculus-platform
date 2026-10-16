export const physCConsForcePart6Data = {
  topicSlug: "conservative-forces-physics-c",
  sections: [
    {
      id: 'cf6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Conservative Forces & Energy**

### Problem-Solving Strategy for Energy Problems

| Step | Action |
|:---:|:---:|
| 1 | Identify all forces; classify as conservative or non-conservative |
| 2 | If only conservative forces: use $E = K + U = \\text{const}$ |
| 3 | If non-conservative forces present: $W_{nc} = \\Delta K + \\Delta U$ |
| 4 | Choose a reference point for potential energy |
| 5 | Write energy equation at two relevant positions |
| 6 | Solve for the unknown |`
    },
    {
      id: 'cf6-mcq1',
      type: 'mcq' as const,
      question: 'A 0.5 kg ball is dropped from $h = 20$ m. Air resistance does $-30$ J of work during the fall. What is the ball\'s speed just before hitting the ground? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\sqrt{2(70)/0.5} \\approx 16.7$ m/s',
        '$\\sqrt{2(10)(20)} = 20$ m/s',
        '$\\sqrt{2(100)/0.5} = 20$ m/s',
        '$\\sqrt{2(30)/0.5} \\approx 11.0$ m/s'
      ],
      correctAnswer: 0,
      explanation: '$W_{nc} = \\Delta K + \\Delta U$. $-30 = \\frac{1}{2}(0.5)v^2 - 0 + 0 - (0.5)(10)(20)$. $-30 = 0.25v^2 - 100$. $0.25v^2 = 70$. $v = \\sqrt{280} \\approx 16.7$ m/s.'
    },
    {
      id: 'cf6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Spring-Launched Block on a Ramp

A spring ($k = 800$ N/m) is compressed by $x_0 = 0.3$ m and launches a 2 kg block up a $30°$ frictionless incline.

### How far up the incline does the block travel?

**Energy conservation** (spring PE → gravitational PE):

$$\\frac{1}{2}kx_0^2 = mgd\\sin\\theta$$

$$d = \\frac{kx_0^2}{2mg\\sin\\theta} = \\frac{800(0.09)}{2(2)(10)(0.5)} = \\frac{72}{20} = 3.6 \\text{ m}$$

### Now add friction ($\\mu_k = 0.2$):

$$\\frac{1}{2}kx_0^2 = mgd\\sin\\theta + \\mu_k mgd\\cos\\theta$$

$$d = \\frac{kx_0^2}{2mg(\\sin\\theta + \\mu_k\\cos\\theta)} = \\frac{72}{2(2)(10)(0.5 + 0.173)} = \\frac{72}{26.93} = 2.67 \\text{ m}$$

### Speed at a specific point

At $d = 1$ m up the frictionless ramp:

$$\\frac{1}{2}kx_0^2 = \\frac{1}{2}mv^2 + mgd\\sin\\theta$$

$$v = \\sqrt{\\frac{kx_0^2}{m} - 2gd\\sin\\theta} = \\sqrt{\\frac{72}{2} - 2(10)(1)(0.5)} = \\sqrt{36 - 10} = \\sqrt{26} = 5.10 \\text{ m/s}$$`
    },
    {
      id: 'cf6-mcq2',
      type: 'mcq' as const,
      question: 'In Problem 2, if the ramp were steeper (larger $\\theta$, same height), the block launched by the same spring would reach:',
      options: [
        'The same height as before',
        'A greater height than before',
        'A lesser height than before',
        'An equal distance along the ramp'
      ],
      correctAnswer: 0,
      explanation: 'On a frictionless incline, the final height depends only on energy: $\\frac{1}{2}kx_0^2 = mgh$, so $h = kx_0^2/(2mg)$ regardless of $\\theta$. The distance along the ramp changes, but not the height.'
    },
    {
      id: 'cf6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Reading a $U(x)$ Graph

Given $U(x) = 5x^2 - x^4$ (in SI units) for a 1 kg particle:

**Equilibrium points:**
$$F = -\\frac{dU}{dx} = -(10x - 4x^3) = 0$$
$$x(10 - 4x^2) = 0$$
$$x = 0, \\quad x = \\pm\\sqrt{2.5} \\approx \\pm 1.58$$

**Stability:**
$$U''(x) = 10 - 12x^2$$
- At $x = 0$: $U'' = 10 > 0$ → **stable** (minimum)
- At $x = \\pm\\sqrt{2.5}$: $U'' = 10 - 30 = -20 < 0$ → **unstable** (maxima)

**Values at equilibria:**
- $U(0) = 0$ (minimum)
- $U(\\pm\\sqrt{2.5}) = 5(2.5) - (2.5)^2 = 12.5 - 6.25 = 6.25$ J (maxima)

**For a particle with $E = 4$ J, starting at $x = 0$:**
- It oscillates in the potential well around $x = 0$
- Turning points: $5x^2 - x^4 = 4$. Let $u = x^2$: $u^2 - 5u + 4 = 0$, so $u = 1$ or $u = 4$. Inside the well ($|x| < 1.58$) the root is $u = 1$, so the turning points are $x = \\pm 1$ m
- Cannot escape since $E = 4 < 6.25$ (the barrier height)

**For $E = 7$ J:**
- The particle has enough energy to overcome the barriers at $x = \\pm 1.58$
- Motion is unbounded — the particle escapes

**Speed at the bottom of the well (for $E = 4$ J):** at $x = 0$, $U = 0$, so $K = 4$ J and $v = \\sqrt{2K/m} = \\sqrt{8} \\approx 2.8$ m/s. The particle oscillates back and forth between $x = -1$ m and $x = +1$ m, but the motion is not simple harmonic, because the force $-(10x - 4x^3)$ is not proportional to $x$.`
    },
    {
      id: 'cf6-mcq3',
      type: 'mcq' as const,
      question: 'For $U(x) = 5x^2 - x^4$, a particle with $E = 6.25$ J released at $x = 0$ will:',
      options: [
        'Approach $x = \\pm 1.58$ m, slowing to zero speed there',
        'Oscillate between about $x = -1$ and $x = 1$',
        'Escape past the barriers to infinity',
        'Stay at $x = 0$, since it is stable'
      ],
      correctAnswer: 0,
      explanation: '$E = 6.25$ J exactly matches $U(\\pm\\sqrt{2.5})$, the height of the energy barriers. The particle can just barely climb to the tops of the barriers (the unstable equilibria), where its speed falls to zero. Any tiny extra energy would let it escape; any less would turn it back.'
    },
    {
      id: 'cf6-mcq4',
      type: 'mcq' as const,
      question: 'A conservative force $\\vec{F}$ does $+50$ J of work on an object moving from $A$ to $B$. The change in potential energy $\\Delta U = U_B - U_A$ is:',
      options: [
        '$-50$ J',
        '$+50$ J',
        '$0$ J',
        'Cannot determine without knowing the path'
      ],
      correctAnswer: 0,
      explanation: '$W_{\\text{cons}} = -\\Delta U$. So $50 = -(U_B - U_A) = U_A - U_B$, giving $\\Delta U = U_B - U_A = -50$ J. Positive work by a conservative force means potential energy decreases.'
    },
    {
      id: 'cf6-mcq5',
      type: 'mcq' as const,
      question: 'A particle of mass $m$ moves in the potential $U(x) = U_0(x/a)^2$, where $U_0$ and $a$ are positive constants. What is its period of oscillation?',
      options: [
        '$T = 2\\pi a\\sqrt{m/(2U_0)}$',
        '$T = 2\\pi\\sqrt{U_0/(ma^2)}$',
        '$T = 2\\pi\\sqrt{ma^2/U_0}$',
        '$T = 2\\pi a/\\sqrt{U_0}$'
      ],
      correctAnswer: 0,
      explanation: '$U = U_0 x^2/a^2$ has exactly the form of spring potential energy $\\frac{1}{2}kx^2$ with $k = 2U_0/a^2$, so the force is $F = -kx$ and the motion is SHM. $\\omega = \\sqrt{k/m} = \\sqrt{2U_0/(ma^2)}$. $T = 2\\pi/\\omega = 2\\pi\\sqrt{ma^2/(2U_0)} = 2\\pi a\\sqrt{m/(2U_0)}$.'
    },
    {
      id: 'cf6-summary',
      type: 'text' as const,
      content: `## Workshop Summary

### Problem Categories

| Type | Method |
|:---:|:---:|
| "Find the speed at point X" | Energy conservation: $K_0 + U_0 = K + U + W_{nc}$ |
| "Find the force from $U(x)$" | $F = -dU/dx$ |
| "Find equilibria and stability" | Set $dU/dx = 0$; check sign of $d^2U/dx^2$ |
| "Is the motion bounded?" | Compare $E$ to the barrier heights in $U(x)$ |
| "Is the motion simple harmonic?" | Only if $F = -kx$, i.e. $U$ has the form $\\frac{1}{2}kx^2$; then $T = 2\\pi\\sqrt{m/k}$ |
| "Is the force conservative?" | Check whether its work around a closed path is zero |

> **Next up:** Part 7 — Review & Applications, tying everything together.`
    }
  ]
};
