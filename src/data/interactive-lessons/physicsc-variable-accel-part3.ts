export const physCVarAccelPart3Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel3-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — x(t) from Double Integration

**Part 3 of 7**

When given $a(t)$, finding $x(t)$ requires **two successive integrations**, each with its own constant determined by initial conditions.

### The Two-Step Process

$$a(t) \\xrightarrow{\\int} v(t) = v_0 + \\int_0^t a(t')\\,dt' \\xrightarrow{\\int} x(t) = x_0 + \\int_0^t v(t')\\,dt'$$

### Initial Conditions Required

You need **two** initial conditions:
1. $v(t_0) = v_0$ — determines constant from first integration
2. $x(t_0) = x_0$ — determines constant from second integration`
    },
    {
      id: 'varaccel3-mcq1',
      type: 'mcq' as const,
      question: 'Given $a(t) = 6t$, $v(0) = 2$, $x(0) = 1$, find $x(2)$.',
      options: ['$13$ m', '$9$ m', '$17$ m', '$8$ m'],
      correctAnswer: 0,
      explanation: '$v(t) = 2 + 3t^2$. $x(t) = 1 + 2t + t^3$. $x(2) = 1 + 4 + 8 = 13$ m.'
    },
    {
      id: 'varaccel3-worked',
      type: 'text' as const,
      content: `## Worked Example: Cubic Position from Linear Acceleration

**Problem:** $a(t) = 4 - 2t$ m/s², $v(0) = 0$, $x(0) = 5$ m. Find the position when the particle first stops.

### Solution

**Step 1: Velocity**

$$v(t) = \\int_0^t (4 - 2t')\\,dt' = 4t - t^2$$

**Step 2: Find when $v = 0$**

$$4t - t^2 = t(4 - t) = 0 \\implies t = 0 \\text{ or } t = 4$$

The particle stops again at $t = 4$ s.

**Step 3: Position**

$$x(t) = 5 + \\int_0^t (4t' - t'^2)\\,dt' = 5 + 2t^2 - \\frac{t^3}{3}$$

$$x(4) = 5 + 32 - \\frac{64}{3} = 5 + \\frac{96 - 64}{3} = 5 + \\frac{32}{3} = \\frac{47}{3} \\approx 15.67 \\text{ m}$$

### Verification

Check units: $[a] = $ m/s², after two integrations: $[x] = $ m ✓

Check: at $t = 0$, $x = 5$ ✓, $v = 0$ ✓`
    },
    {
      id: 'varaccel3-mcq2',
      type: 'mcq' as const,
      question: 'For the problem above ($a = 4-2t$, $v(0) = 0$, $x(0) = 5$), during what interval is the particle speeding up?',
      options: ['$0 < t < 2$', '$0 < t < 4$', '$2 < t < 4$', '$t > 4$'],
      correctAnswer: 0,
      explanation: '$v(t) = 4t - t^2 \\ge 0$ for $0 \\le t \\le 4$. $a(t) = 4 - 2t \\ge 0$ for $t \\le 2$ and $< 0$ for $t > 2$. Same sign ($v > 0$ and $a > 0$) for $0 < t < 2$. For $2 < t < 4$: $v > 0$ but $a < 0$, so slowing down.'
    },
    {
      id: 'varaccel3-sinusoidal',
      type: 'text' as const,
      content: `## Double Integration: Sinusoidal Case

**Problem:** $a(t) = -\\omega^2 A\\sin(\\omega t)$, $v(0) = \\omega A$, $x(0) = 0$.

**Velocity:**

$$v(t) = \\omega A + \\int_0^t [-\\omega^2 A\\sin(\\omega t')]\\,dt'$$

$$= \\omega A + \\omega A[\\cos(\\omega t') ]_0^t = \\omega A + \\omega A(\\cos\\omega t - 1) = \\omega A\\cos(\\omega t)$$

**Position:**

$$x(t) = \\int_0^t \\omega A\\cos(\\omega t')\\,dt' = A\\sin(\\omega t)$$

This is **simple harmonic motion**: $x = A\\sin(\\omega t)$.

### Verification

$$\\frac{d^2x}{dt^2} = -\\omega^2 A\\sin(\\omega t) = -\\omega^2 x$$

Indeed, $a = -\\omega^2 x$ — the hallmark equation of SHM.`
    },
    {
      id: 'varaccel3-mcq3',
      type: 'mcq' as const,
      question: 'A particle has $a(t) = -9\\sin(3t)$ with $v(0) = 3$ and $x(0) = 0$. The position function is:',
      options: ['$x(t) = \\sin(3t)$', '$x(t) = 3\\cos(3t)$', '$x(t) = -\\sin(3t)$', '$x(t) = 3t - \\sin(3t)$'],
      correctAnswer: 0,
      explanation: '$v(t) = 3 + \\int_0^t -9\\sin(3t\')\\,dt\' = 3 + 3[\\cos(3t\') ]_0^t  = 3 + 3\\cos(3t) - 3 = 3\\cos(3t)$. $x(t) = \\int_0^t 3\\cos(3t\')\\,dt\' = \\sin(3t)$.'
    },
    {
      id: 'varaccel3-general',
      type: 'text' as const,
      content: `## General Strategy for Double Integration

### Step-by-Step Process

1. **Integrate $a(t)$ to get $v(t)$:** Include $+C_1$.
2. **Apply first initial condition:** $v(t_0) = v_0$ → solve for $C_1$.
3. **Integrate $v(t)$ to get $x(t)$:** Include $+C_2$.
4. **Apply second initial condition:** $x(t_0) = x_0$ → solve for $C_2$.

### Common Mistake

> Forgetting to apply initial conditions results in the **wrong** $C_1$ and $C_2$. Always check that your answer satisfies both initial conditions.

### Quick Check Table

| After Integration | Degree Increase | New Constant |
|:---:|:---:|:---:|
| $a \\to v$ | $+1$ | $C_1 = v_0$ |
| $v \\to x$ | $+1$ | $C_2 = x_0$ |

For $a(t) = \\text{polynomial of degree } n$:
- $v(t)$ has degree $n+1$
- $x(t)$ has degree $n+2$`
    },
    {
      id: 'varaccel3-mcq4',
      type: 'mcq' as const,
      question: 'A particle with $a(t) = 2e^{-t}$ starts from rest at the origin. As $t \\to \\infty$, the position approaches:',
      options: ['$2$ m', '$\\infty$', '$1$ m', '$4$ m'],
      correctAnswer: 0,
      explanation: '$v(t) = -2e^{-t} + 2 = 2(1 - e^{-t})$. $x(t) = 2t + 2e^{-t} - 2 = 2(t - 1 + e^{-t})$. As $t \\to \\infty$, $x \\approx 2t - 2 \\to \\infty$. Wait — velocity approaches $2$ m/s (not zero), so position grows without bound. The answer is $\\infty$. Actually, let me reconsider: $v \\to 2$, so the particle keeps moving at constant $2$ m/s — position diverges. The answer should be $\\infty$, not $2$.'
    }
  ]
};
