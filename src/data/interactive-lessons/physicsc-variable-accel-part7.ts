export const physCVarAccelPart7Data = {
  topicSlug: 'variable-acceleration-physics-c',
  sections: [
    {
      id: 'varaccel7-intro',
      type: 'text' as const,
      content: `# Variable Acceleration — Review & Applications

**Part 7 of 7 — Comprehensive Review**

### Master Formula Sheet

| Scenario | Method | Key Formula |
|:---|:---|:---:|
| $a = a(t)$ | Integrate w.r.t. $t$ | $v = v_0 + \\int a\\,dt$ |
| $a = a(v)$ | Separation of variables | $\\int \\frac{dv}{a(v)} = t$ |
| $a = a(x)$ | Energy method ($v\\,dv = a\\,dx$) | $v^2 = v_0^2 + 2\\int a\\,dx$ |
| $a = a(v)$, find $x(v)$ | $v\\frac{dv}{a(v)} = dx$ | $x = \\int \\frac{v\\,dv}{a(v)}$ |
| Constant $a$ | Special case | $v^2 = v_0^2 + 2a\\Delta x$ |

### Common Results

| Force Model | $v(t)$ |
|:---|:---:|
| $a = -bv$ (linear drag) | $v_0 e^{-bt}$ |
| $a = -cv^2$ (quadratic drag) | $\\frac{v_0}{1 + cv_0 t}$ |
| $a = g - cv^2$ (gravity + drag) | $v_T\\tanh(gt/v_T)$ |
| $a = -\\omega^2 x$ (spring) | $v = \\omega\\sqrt{A^2 - x^2}$ |`
    },
    {
      id: 'varaccel7-mcq1',
      type: 'mcq' as const,
      question: 'A particle has $a = 3/v$ with $v(0) = 2$ m/s. Find $v$ at $t = 4$ s.',
      options: ['$\\sqrt{28}$ m/s', '$14$ m/s', '$6$ m/s', '$\\sqrt{16}$ m/s'],
      correctAnswer: 0,
      explanation: '$v\\,dv = 3\\,dt \\implies v^2/2 = 3t + C$. At $t=0$: $C = 2$. So $v^2 = 6t + 4$. At $t = 4$: $v^2 = 28 \\implies v = \\sqrt{28}$.'
    },
    {
      id: 'varaccel7-ap-style',
      type: 'text' as const,
      content: `## AP-Style Free Response Problem

**Problem:** A particle of mass $m$ moves along the $x$-axis. At $t = 0$, it is at $x = 0$ with velocity $v_0 > 0$. It experiences a retarding force $F = -\\alpha v^{1/2}$ where $\\alpha > 0$ is a constant.

**(a)** Show that the velocity as a function of time is:

$$v(t) = \\left(\\sqrt{v_0} - \\frac{\\alpha t}{2m}\\right)^2$$

**Solution:** $m\\frac{dv}{dt} = -\\alpha v^{1/2}$

$$v^{-1/2}dv = -\\frac{\\alpha}{m}dt$$

$$2v^{1/2} = -\\frac{\\alpha}{m}t + C$$

At $t = 0$: $C = 2\\sqrt{v_0}$. So $\\sqrt{v} = \\sqrt{v_0} - \\frac{\\alpha t}{2m}$, giving $v = (\\sqrt{v_0} - \\frac{\\alpha t}{2m})^2$. ✓

**(b)** Find the time $T$ when the particle stops.

$$\\sqrt{v_0} - \\frac{\\alpha T}{2m} = 0 \\implies T = \\frac{2m\\sqrt{v_0}}{\\alpha}$$

**(c)** Find the total distance traveled.

$$x = \\int_0^T v\\,dt = \\int_0^T \\left(\\sqrt{v_0} - \\frac{\\alpha t}{2m}\\right)^2 dt$$

Let $u = \\sqrt{v_0} - \\frac{\\alpha t}{2m}$, $du = -\\frac{\\alpha}{2m}dt$:

$$x = -\\frac{2m}{\\alpha}\\int_{\\sqrt{v_0}}^{0} u^2\\,du = \\frac{2m}{\\alpha} \\cdot \\frac{v_0^{3/2}}{3} = \\frac{2mv_0^{3/2}}{3\\alpha}$$`
    },
    {
      id: 'varaccel7-mcq2',
      type: 'mcq' as const,
      question: 'In the problem above, what are the dimensions of $\\alpha$?',
      options: [
        'kg$\\cdot$m$^{1/2}\\cdot$s$^{-3/2}$',
        'N/m',
        'kg/s',
        'N$\\cdot$s/m'
      ],
      correctAnswer: 0,
      explanation: 'From $F = -\\alpha v^{1/2}$: $[\\alpha] = [F]/[v^{1/2}] = \\text{N}/(\\text{m/s})^{1/2} = \\text{kg}\\cdot\\text{m/s}^2 \\cdot \\text{s}^{1/2}/\\text{m}^{1/2} = \\text{kg}\\cdot\\text{m}^{1/2}\\cdot\\text{s}^{-3/2}$.'
    },
    {
      id: 'varaccel7-connections',
      type: 'text' as const,
      content: `## Connections to Other Topics

Variable acceleration is not just kinematics — it connects to nearly every topic in AP Physics C.

### Newton's Second Law

$$a = F_{\\text{net}}/m$$

When forces depend on position (springs, gravity), velocity (drag), or time (varying thrust), acceleration is variable.

### Work-Energy Theorem

$$\\int F\\,dx = \\Delta KE$$

This is just $m \\cdot v\\,dv = m \\cdot a\\,dx$ integrated — the energy method!

### Differential Equations Preview

Many AP Physics C problems reduce to first-order ODEs:

| Physics | ODE | Solution Type |
|:---|:---:|:---:|
| RC circuit | $\\frac{dq}{dt} = -q/(RC)$ | Exponential decay |
| Drag force | $\\frac{dv}{dt} = -bv$ | Exponential decay |
| SHM | $\\frac{d^2x}{dt^2} = -\\omega^2 x$ | Sinusoidal |
| RL circuit | $\\frac{dI}{dt} = (\\mathcal{E} - IR)/L$ | Exponential approach |

The mathematical techniques are the same in all cases!`
    },
    {
      id: 'varaccel7-mcq3',
      type: 'mcq' as const,
      question: 'A particle starts from rest and has $a(x) = 6\\sqrt{x}$. The speed at $x = 4$ is:',
      options: ['$8$ m/s', '$4\\sqrt{3}$ m/s', '$12$ m/s', '$4$ m/s'],
      correctAnswer: 0,
      explanation: '$v^2 = 2\\int_0^4 6\\sqrt{x}\\,dx = 12 \\cdot [\\frac{2}{3}x^{3/2}]_0^4 = 12 \\cdot \\frac{2}{3}(8) = 64$. So $v = 8$ m/s.'
    },
    {
      id: 'varaccel7-mcq4',
      type: 'mcq' as const,
      question: 'An object falling with quadratic drag reaches $90\\%$ of terminal velocity. The drag force at this point is what fraction of the gravitational force?',
      options: ['$81\\%$', '$90\\%$', '$99\\%$', '$95\\%$'],
      correctAnswer: 0,
      explanation: 'At terminal velocity $v_T$: drag $= mg$. Drag $\\propto v^2$. At $v = 0.9v_T$: drag $= (0.9)^2 \\cdot mg = 0.81\\,mg$, which is $81\\%$ of $mg$.'
    },
    {
      id: 'varaccel7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered **Variable Acceleration for AP Physics C**:

| Part | Topic | Status |
|:---:|:---|:---:|
| 1 | $a(t)$ functions | ✅ |
| 2 | $v(t)$ from integration | ✅ |
| 3 | $x(t)$ from double integration | ✅ |
| 4 | $a(v)$ and separation of variables | ✅ |
| 5 | $a(x)$ and the energy method | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **AP Exam Tip:** On free-response problems involving variable acceleration, first identify what $a$ depends on. If $a = a(t)$, integrate directly. If $a = a(v)$, separate variables. If $a = a(x)$, use $v\\,dv = a\\,dx$. State your method clearly and show every step of the separation and integration — setup points are often worth more than the final answer.`
    }
  ]
};
