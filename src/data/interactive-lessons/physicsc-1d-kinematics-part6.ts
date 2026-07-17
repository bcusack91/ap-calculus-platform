export const physC1dKinPart6Data = {
  topicSlug: '1d-kinematics-physics-c',
  sections: [
    {
      id: '1dkin6-intro',
      type: 'text' as const,
      content: `# 1D Kinematics — Problem-Solving Workshop

**Part 6 of 7**

This workshop focuses on developing systematic problem-solving skills for AP Physics C kinematics problems. We'll work through progressively harder problems.

### Problem-Solving Framework

1. **Read carefully** — identify what's given and what's asked.
2. **Choose your approach** — differentiation (given $x$, find $v$ or $a$) or integration (given $v$ or $a$, find $x$).
3. **Apply initial conditions** — use given values to determine constants of integration.
4. **Verify** — check units, signs, and limiting cases.`
    },
    {
      id: '1dkin6-mcq1',
      type: 'mcq' as const,
      question: 'A particle moves along the $x$-axis with $v(t) = 4t - t^2$ m/s. If $x(0) = 2$ m, what is the maximum displacement from the origin?',
      options: ['$12\\frac{2}{3}$ m', '$10$ m', '$14$ m', '$2$ m'],
      correctAnswer: 0,
      explanation: 'Max displacement occurs when $v = 0$: $4t - t^2 = 0 \\implies t(4-t) = 0 \\implies t = 4$ s. $x(4) = 2 + \\int_0^4 (4t - t^2)\\,dt = 2 + [2t^2 - t^3/3]_0^4 = 2 + 32 - 64/3 = 2 + 32/3 = 38/3 \\approx 12.67$ m.'
    },
    {
      id: '1dkin6-prob1',
      type: 'text' as const,
      content: `## Worked Problem 1: Multi-Phase Motion

**Problem:** A rocket launches vertically from rest. For $0 \\le t \\le 10$ s, its acceleration is $a(t) = 6t$ $m/s^{2}$. At $t = 10$ s, the engine cuts off and gravity takes over ($a = -10$ $m/s^{2}$). Find the maximum height.

### Solution

**Phase 1** ($0 \\le t \\le 10$):

$$v(t) = \\int 6t\\,dt = 3t^2 + C$$

$v(0) = 0 \\implies C = 0$, so $v(t) = 3t^2$.

At $t = 10$: $v(10) = 300$ m/s.

$$y(t) = \\int 3t^2\\,dt = t^3 + C'$$

$y(0) = 0 \\implies C' = 0$, so $y(t) = t^3$.

At $t = 10$: $y(10) = 1000$ m.

**Phase 2** ($t > 10$, let $\\tau = t - 10$):

$$v = 300 - 10\\tau = 0 \\implies \\tau = 30 \\text{ s}$$

$$\\Delta y = 300(30) - \\frac{1}{2}(10)(900) = 9000 - 4500 = 4500 \\text{ m}$$

**Maximum height:** $1000 + 4500 = 5500$ m.`
    },
    {
      id: '1dkin6-mcq2',
      type: 'mcq' as const,
      question: 'In the rocket problem above, what is the total time from launch until the rocket returns to the ground?',
      options: ['$70$ s', '$60$ s', '$40$ s', '$50$ s'],
      correctAnswer: 0,
      explanation: 'Phase 1: $10$ s. Phase 2: rocket goes from $1000$ m at $300$ m/s upward with $a = -10$ $m/s^{2}$. Position in Phase 2: $y = 1000 + 300\\tau - 5\\tau^2 = 0 \\implies \\tau^2 - 60\\tau - 200 = 0 \\implies \\tau = \\frac{60 + \\sqrt{3600+800}}{2} = \\frac{60 + \\sqrt{4400}}{2} \\approx 60$ s. Total ≈ $70$ s.'
    },
    {
      id: '1dkin6-prob2',
      type: 'text' as const,
      content: `## Worked Problem 2: Graphs to Equations

**Problem:** The $v$-$t$ graph shows a particle with:
- $v(0) = -4$ m/s
- $v$ increases linearly to $v(4) = 4$ m/s  
- $v$ remains constant at $4$ m/s for $4 \\le t \\le 6$

Find the total distance traveled and displacement from $t = 0$ to $t = 6$.

### Solution

**Phase 1** ($0 \\le t \\le 4$): $v(t) = -4 + 2t$ (slope = $\\frac{4-(-4)}{4-0} = 2$)

$v = 0$ at $t = 2$ s (direction change).

Displacement Phase 1: $\\int_0^4 (-4+2t)\\,dt = [-4t + t^2]_0^4 = -16 + 16 = 0$

Distance Phase 1: $\\int_0^2 |{-4+2t}|\\,dt + \\int_2^4 (2t-4)\\,dt = \\int_0^2(4-2t)\\,dt + \\int_2^4(2t-4)\\,dt$
$= [4t-t^2]_0^2 + [t^2-4t]_2^4 = 4 + 4 = 8$ m

**Phase 2** ($4 \\le t \\le 6$): $v = 4$ m/s (constant)

Displacement = Distance = $4 \\times 2 = 8$ m

**Totals:** Displacement $= 0 + 8 = 8$ m, Distance $= 8 + 8 = 16$ m.`
    },
    {
      id: '1dkin6-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $x(t) = \\ln(1 + t^2)$. The speed of the particle at $t = 1$ is:',
      options: ['$1$ m/s', '$2$ m/s', '$1/2$ m/s', '$\\ln 2$ m/s'],
      correctAnswer: 0,
      explanation: '$v(t) = \\frac{d}{dt}\\ln(1+t^2) = \\frac{2t}{1+t^2}$. At $t = 1$: $v(1) = \\frac{2}{2} = 1$ m/s. Speed $= |v| = 1$ m/s.'
    },
    {
      id: '1dkin6-mcq4',
      type: 'mcq' as const,
      question: 'A car\'s position is $x(t) = 20t - t^2$ (in meters). The car stops at $t = 10$ s. What distance does it travel from the moment it starts slowing down (i.e., from $t = 0$ to $t = 10$)?',
      options: ['$100$ m', '$200$ m', '$50$ m', '$150$ m'],
      correctAnswer: 0,
      explanation: '$v(t) = 20 - 2t$, $a(t) = -2$ (always negative). Since $v(0) = 20 > 0$ and $a < 0$, the car is slowing down from $t = 0$. At $t = 10$: $x(10) - x(0) = (200 - 100) - 0 = 100$ m. Since $v > 0$ throughout this interval, distance = displacement = $100$ m.'
    }
  ]
};
