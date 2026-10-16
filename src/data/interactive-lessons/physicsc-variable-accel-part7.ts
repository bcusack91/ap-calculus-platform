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
| $a = g - (k/m)v$ (falling, linear drag) | $\\frac{mg}{k}\\left(1 - e^{-kt/m}\\right)$ |
| $a = -\\omega^2 x$ (spring) | $v = \\omega\\sqrt{A^2 - x^2}$ |`
    },
    {
      id: 'varaccel7-mcq1',
      type: 'mcq' as const,
      question: 'A boat\'s engine shuts off when it is moving at $10$ m/s, and the water then gives it $a = -0.20v$ (SI units). What is its speed $5.0$ s later?',
      options: ['$3.7$ m/s', '$0$ m/s', '$5.0$ m/s', '$6.3$ m/s'],
      correctAnswer: 0,
      explanation: '$v = v_0 e^{-bt} = 10e^{-(0.20)(5.0)} = 10e^{-1} \\approx 3.7$ m/s. Treating the initial deceleration of $2.0$ m/s² as constant gives $0$, $5.0$ m/s assumes the speed halves in one time constant, and $6.3$ m/s is $10(1 - e^{-1})$, the speed lost rather than the speed left.'
    },
    {
      id: 'varaccel7-ap-style',
      type: 'text' as const,
      content: `## AP-Style Free Response Problem

**Problem:** A puck of mass $m$ slides along the $x$-axis on a surface coated with a thin layer of oil. At $t = 0$ it is at $x = 0$ with velocity $v_0 > 0$. The only horizontal force on it is a resistive force $F = -bv$, where $b > 0$ is a constant.

**(a)** Show that the velocity as a function of time is:

$$v(t) = v_0 e^{-bt/m}$$

**Solution:** Newton's second law gives $m\\frac{dv}{dt} = -bv$. Separate the variables:

$$\\frac{dv}{v} = -\\frac{b}{m}\\,dt$$

$$\\int_{v_0}^{v} \\frac{dv'}{v'} = -\\frac{b}{m}\\int_0^t dt' \\implies \\ln\\frac{v}{v_0} = -\\frac{bt}{m}$$

So $v = v_0 e^{-bt/m}$. ✓

**(b)** Find the time $T$ at which the puck's speed has dropped to $v_0/2$.

$$e^{-bT/m} = \\frac{1}{2} \\implies T = \\frac{m\\ln 2}{b}$$

**(c)** Find the total distance the puck travels.

$$x_{\\text{total}} = \\int_0^{\\infty} v_0 e^{-bt/m}\\,dt = v_0\\left[-\\frac{m}{b}e^{-bt/m}\\right]_0^{\\infty} = \\frac{mv_0}{b}$$

The puck never quite stops, yet it covers only a finite distance.

**(d)** Check with energy: the work done by the resistive force over the whole motion should equal $\\Delta K = -\\frac{1}{2}mv_0^2$. With $dx = v\\,dt$:

$$W = \\int F\\,dx = \\int_0^{\\infty} (-bv)\\,v\\,dt = -bv_0^2\\int_0^{\\infty} e^{-2bt/m}\\,dt = -bv_0^2 \\cdot \\frac{m}{2b} = -\\frac{1}{2}mv_0^2 \\; ✓$$`
    },
    {
      id: 'varaccel7-mcq2',
      type: 'mcq' as const,
      question: 'In the problem above, what are the SI units of the constant $b$?',
      options: [
        'kg/s',
        'N/m',
        'kg$\\cdot$m/s',
        '1/s'
      ],
      correctAnswer: 0,
      explanation: 'From $F = -bv$: $[b] = [F]/[v] = (\\text{kg}\\cdot\\text{m/s}^2)/(\\text{m/s}) = \\text{kg/s}$. The combination $b/m$ has units of 1/s, which is why $bt/m$ in the exponent is dimensionless. N/m is a spring constant, and kg·m/s is momentum.'
    },
    {
      id: 'varaccel7-connections',
      type: 'text' as const,
      content: `## Connections to Other Topics

Variable acceleration is not just kinematics — it connects to nearly every topic in AP Physics C.

### Newton's Second Law

$$a = F_{\\text{net}}/m$$

When forces depend on position (springs, gravity), velocity (drag), or time (a varying applied force), acceleration is variable.

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
      options: ['$8$ m/s', '$4\\sqrt{3}$ m/s', '$12$ m/s', '$64$ m/s'],
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
