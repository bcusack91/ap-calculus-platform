export const physCFrictionPart4Data = {
  topicSlug: "friction-inclines-physics-c",
  sections: [
    {
      id: 'fri4-intro',
      type: 'text' as const,
      content: `# Friction with Calculus (Velocity-Dependent)

**Part 4 of 7 — Friction & Inclines**

In many real-world situations, the resistive force depends on velocity. This is the hallmark of AP Physics C — using differential equations to solve dynamics problems.

## Linear Drag: $f = bv$

A common model for low-speed drag:

$$m\\frac{dv}{dt} = F_{\\text{applied}} - bv$$

### Terminal Velocity

At terminal velocity, $a = 0$:

$$v_T = \\frac{F_{\\text{applied}}}{b}$$

For an object falling under gravity with linear drag:

$$v_T = \\frac{mg}{b}$$

### Solving the ODE

$$m\\frac{dv}{dt} = mg - bv$$

Separation of variables:

$$\\frac{dv}{mg - bv} = \\frac{dt}{m}$$

$$-\\frac{1}{b}\\ln\\left(\\frac{mg - bv}{mg}\\right) = \\frac{t}{m}$$

$$v(t) = \\frac{mg}{b}\\left(1 - e^{-bt/m}\\right) = v_T\\left(1 - e^{-t/\\tau}\\right)$$

where $\\tau = m/b$ is the **time constant**.`
    },
    {
      id: 'fri4-mcq1',
      type: 'mcq' as const,
      question: 'An object falling with linear drag $f = bv$ reaches what fraction of terminal velocity after one time constant $\\tau = m/b$?',
      options: [
        '$(1 - 1/e) \\approx 63\\%$',
        '$50\\%$',
        '$37\\%$',
        '$90\\%$'
      ],
      correctAnswer: 0,
      explanation: 'At $t = \\tau$: $v = v_T(1 - e^{-1}) = v_T(1 - 0.368) = 0.632\\,v_T$, or about 63%.'
    },
    {
      id: 'fri4-quadratic',
      type: 'text' as const,
      content: `## Quadratic Drag: $f = cv^2$

At higher speeds, drag is proportional to $v^2$:

$$m\\frac{dv}{dt} = mg - cv^2$$

### Terminal Velocity

$$v_T = \\sqrt{\\frac{mg}{c}}$$

### Solving the ODE

$$\\frac{dv}{g - (c/m)v^2} = dt$$

Let $\\alpha = c/m$. Then:

$$\\frac{dv}{g - \\alpha v^2} = dt$$

Using partial fractions or the substitution $v = v_T \\tanh(u)$:

$$v(t) = v_T \\tanh\\left(\\frac{gt}{v_T}\\right)$$

where $v_T = \\sqrt{g/\\alpha} = \\sqrt{mg/c}$.

### Position by Integration

$$x(t) = \\int_0^t v_T \\tanh\\left(\\frac{gt'}{v_T}\\right)dt' = \\frac{v_T^2}{g}\\ln\\cosh\\left(\\frac{gt}{v_T}\\right)$$

### Key Behavior

| Time | Speed | Acceleration |
|:---:|:---:|:---:|
| $t = 0$ | $0$ | $g$ |
| $t \\to \\infty$ | $v_T$ | $0$ |
| $t = v_T/g$ | $\\approx 0.76\\,v_T$ | $\\approx 0.42\\,g$ |`
    },
    {
      id: 'fri4-mcq2',
      type: 'mcq' as const,
      question: 'For an object falling with quadratic drag $f = cv^2$, the terminal velocity is:',
      options: [
        '$\\sqrt{mg/c}$',
        '$mg/c$',
        '$m^2g/c$',
        '$\\sqrt{c/(mg)}$'
      ],
      correctAnswer: 0,
      explanation: 'At terminal velocity: $mg = cv_T^2$, so $v_T = \\sqrt{mg/c}$.'
    },
    {
      id: 'fri4-incline-drag',
      type: 'text' as const,
      content: `## Velocity-Dependent Friction on Inclines

Consider a block sliding down an incline with velocity-dependent friction $f = bv$:

$$m\\frac{dv}{dt} = mg\\sin\\theta - bv$$

This has the same form as free fall with linear drag. The solution:

$$v(t) = \\frac{mg\\sin\\theta}{b}\\left(1 - e^{-bt/m}\\right)$$

Terminal velocity on the incline:

$$v_T = \\frac{mg\\sin\\theta}{b}$$

### Worked Example

A 0.5 kg block slides down a $30°$ incline with velocity-dependent friction $f = 2v$ (in SI units). Find:

**Terminal velocity:**
$$v_T = \\frac{mg\\sin\\theta}{b} = \\frac{0.5 \\times 10 \\times 0.5}{2} = 1.25 \\text{ m/s}$$

**Time constant:**
$$\\tau = \\frac{m}{b} = \\frac{0.5}{2} = 0.25 \\text{ s}$$

**Speed at $t = 0.5$ s:**
$$v(0.5) = 1.25\\left(1 - e^{-0.5/0.25}\\right) = 1.25(1 - e^{-2}) = 1.25(0.865) = 1.08 \\text{ m/s}$$

**Acceleration at $t = 0.5$ s:**
$$a(t) = g\\sin\\theta \\cdot e^{-bt/m} = 5 \\cdot e^{-2} = 0.677 \\text{ m/s}^2$$`
    },
    {
      id: 'fri4-mcq3',
      type: 'mcq' as const,
      question: 'A block slides on a surface with friction $f = bv$. If the block has initial velocity $v_0$ and no other horizontal forces, what is $v(t)$?',
      options: [
        '$v_0 e^{-bt/m}$',
        '$v_0(1 - e^{-bt/m})$',
        '$v_0 - (b/m)t$',
        '$v_0/(1 + bt/m)$'
      ],
      correctAnswer: 0,
      explanation: '$m\\frac{dv}{dt} = -bv \\implies \\frac{dv}{v} = -\\frac{b}{m}dt \\implies v = v_0 e^{-bt/m}$. The block asymptotically approaches rest but never fully stops (in this model).'
    },
    {
      id: 'fri4-mcq4',
      type: 'mcq' as const,
      question: 'For the decaying velocity $v(t) = v_0 e^{-bt/m}$ (no driving force, linear drag), the total distance traveled as $t \\to \\infty$ is:',
      options: [
        '$mv_0/b$',
        '$\\infty$',
        '$v_0 b/m$',
        '$v_0 m^2/b^2$'
      ],
      correctAnswer: 0,
      explanation: '$x = \\int_0^\\infty v_0 e^{-bt/m}\\,dt = v_0 \\cdot \\frac{m}{b} \\cdot [-e^{-bt/m}]_0^\\infty = \\frac{mv_0}{b}$. Despite never technically stopping, the total distance is finite.'
    },
    {
      id: 'fri4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Model | ODE | Solution | $v_T$ |
|:---:|:---:|:---:|:---:|
| Linear drag ($f=bv$) | $m\\dot{v} = mg - bv$ | $v_T(1-e^{-t/\\tau})$ | $mg/b$ |
| Quadratic drag ($f=cv^2$) | $m\\dot{v} = mg - cv^2$ | $v_T\\tanh(gt/v_T)$ | $\\sqrt{mg/c}$ |
| Linear drag, no driving | $m\\dot{v} = -bv$ | $v_0 e^{-t/\\tau}$ | $0$ |

> **AP Tip:** The AP Physics C exam frequently tests your ability to set up and solve first-order ODEs with separation of variables.

> **Next up:** Part 5 — Systems on Inclines (Atwood machines, connected blocks).`
    }
  ]
};
