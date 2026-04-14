export const physCVarAccelPart1Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel1-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — a(t) Functions

**Part 1 of 7**

In AP Physics C, acceleration is often **not constant**. When $a = a(t)$ is a function of time, we must use calculus — the kinematic equations for constant $a$ no longer apply.

### When Acceleration Depends on Time

Examples of time-dependent acceleration:

| Physical Situation | $a(t)$ |
|:---|:---:|
| Rocket with linearly increasing thrust | $a_0 + bt$ |
| Oscillating force | $A\\cos(\\omega t)$ |
| Exponentially decaying force | $a_0 e^{-t/\\tau}$ |
| Jerk (constant rate of change of $a$) | $a_0 + jt$ |

### The Calculus Approach

Since $a(t) = dv/dt$, we integrate to find velocity:

$$v(t) = v_0 + \\int_0^t a(t')\\,dt'$$

Then integrate velocity to find position:

$$x(t) = x_0 + \\int_0^t v(t')\\,dt'$$`
    },
    {
      id: 'varaccel1-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a(t) = 12t$ m/s² with $v(0) = 5$ m/s. What is $v(3)$?',
      options: ['$59$ m/s', '$36$ m/s', '$41$ m/s', '$54$ m/s'],
      correctAnswer: 0,
      explanation: '$v(t) = 5 + \\int_0^t 12t\'\\,dt\' = 5 + 6t^2$. At $t = 3$: $v(3) = 5 + 6(9) = 5 + 54 = 59$ m/s.'
    },
    {
      id: 'varaccel1-polynomial',
      type: 'text' as const,
      content: `## Polynomial Acceleration

The most common case on AP exams is polynomial $a(t)$.

### Example: Quadratic Acceleration

$a(t) = 2 - 3t + t^2$, with $v(0) = 4$, $x(0) = 0$.

**Step 1:** Find $v(t)$:

$$v(t) = 4 + \\int_0^t (2 - 3t' + t'^2)\\,dt' = 4 + 2t - \\frac{3t^2}{2} + \\frac{t^3}{3}$$

**Step 2:** Find $x(t)$:

$$x(t) = \\int_0^t v(t')\\,dt' = \\int_0^t \\left(4 + 2t' - \\frac{3t'^2}{2} + \\frac{t'^3}{3}\\right)dt'$$

$$= 4t + t^2 - \\frac{t^3}{2} + \\frac{t^4}{12}$$

### Pattern

If $a(t)$ is a polynomial of degree $n$:
- $v(t)$ is a polynomial of degree $n + 1$
- $x(t)$ is a polynomial of degree $n + 2$

Each integration raises the degree by one.`
    },
    {
      id: 'varaccel1-mcq2',
      type: 'mcq' as const,
      question: 'If $a(t) = 6t$ and $v(0) = 0$, $x(0) = 0$, the position $x(2)$ is:',
      options: ['$8$ m', '$12$ m', '$6$ m', '$24$ m'],
      correctAnswer: 0,
      explanation: '$v(t) = 3t^2$ (integrating $a$). $x(t) = t^3$ (integrating $v$). $x(2) = 8$ m.'
    },
    {
      id: 'varaccel1-trig',
      type: 'text' as const,
      content: `## Sinusoidal Acceleration

When $a(t) = a_0\\sin(\\omega t)$ (or cosine), the motion is oscillatory.

### Worked Example

$a(t) = 10\\sin(2t)$ m/s², $v(0) = 0$, $x(0) = 0$.

$$v(t) = \\int_0^t 10\\sin(2t')\\,dt' = 10\\left[-\\frac{\\cos(2t')}{2}\\right]_0^t = -5\\cos(2t) + 5 = 5[1 - \\cos(2t)]$$

Note: $v(t) \\ge 0$ always! The particle never moves backward.

$$x(t) = \\int_0^t 5[1-\\cos(2t')]\\,dt' = 5\\left[t' - \\frac{\\sin(2t')}{2}\\right]_0^t = 5t - \\frac{5}{2}\\sin(2t)$$

### Analysis

- $v$ oscillates between $0$ and $10$ m/s.
- $x$ has a **linear trend** ($5t$) with sinusoidal oscillations superimposed.
- The average velocity is $\\bar{v} = 5$ m/s.`
    },
    {
      id: 'varaccel1-mcq3',
      type: 'mcq' as const,
      question: 'For $a(t) = 4\\cos(2t)$ with $v(0) = 0$, the maximum speed is:',
      options: ['$2$ m/s', '$4$ m/s', '$8$ m/s', '$1$ m/s'],
      correctAnswer: 0,
      explanation: '$v(t) = \\int_0^t 4\\cos(2t\')\\,dt\' = 2\\sin(2t)$. Maximum of $|2\\sin(2t)|$ is $2$ m/s.'
    },
    {
      id: 'varaccel1-exponential',
      type: 'text' as const,
      content: `## Exponential Acceleration

Exponentially decaying acceleration models many real systems (e.g., drag-limited motion, RC circuits).

### Example: Decaying Thrust

A rocket has $a(t) = 20e^{-t/5}$ m/s², $v(0) = 0$.

$$v(t) = \\int_0^t 20e^{-t'/5}\\,dt' = 20(-5)\\left[e^{-t'/5}\\right]_0^t = -100(e^{-t/5} - 1) = 100(1 - e^{-t/5})$$

### Terminal velocity

As $t \\to \\infty$: $v \\to 100$ m/s. The acceleration approaches zero, and the velocity approaches a constant — this is the **terminal velocity**.

### Position

$$x(t) = \\int_0^t 100(1 - e^{-t'/5})\\,dt' = 100\\left[t + 5e^{-t/5} - 5\\right] = 100t + 500e^{-t/5} - 500$$

At large $t$: $x \\approx 100t - 500$ → linear growth (constant velocity).`
    },
    {
      id: 'varaccel1-mcq4',
      type: 'mcq' as const,
      question: 'An object has $a(t) = a_0 e^{-kt}$ with $v(0) = 0$. The terminal velocity ($t \\to \\infty$) is:',
      options: ['$a_0/k$', '$a_0 k$', '$a_0$', '$\\infty$'],
      correctAnswer: 0,
      explanation: '$v(t) = \\frac{a_0}{k}(1 - e^{-kt})$. As $t \\to \\infty$: $v \\to a_0/k$. The terminal velocity is the ratio of initial acceleration to the decay constant.'
    }
  ]
};
