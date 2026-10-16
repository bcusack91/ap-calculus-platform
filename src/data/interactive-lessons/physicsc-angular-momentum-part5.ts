export const physCAngMomPart5Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am5-intro',
      type: 'text' as const,
      content: `# Angular Impulse from Graphs and Angular Momentum Exchange

**Part 5 of 7 — Angular Impulse from Graphs and Angular Momentum Exchange**

Part 3 introduced the rotational impulse–momentum theorem for a constant torque. Real torques usually vary, so the AP exam asks you to read them from **graphs**.

### Angular Impulse

Angular impulse is the torque multiplied by the time it acts. For a torque that changes with time:

$$J_{\\text{ang}} = \\int_{t_1}^{t_2} \\tau\\,dt = \\Delta L$$

Angular impulse has the same direction as the torque that delivers it.

### Two Graphs, Two Rules

| Graph | Feature | Gives |
|:---|:---|:---|
| $\\tau$ versus $t$ | **Area** under the curve | Angular impulse $= \\Delta L$ |
| $L$ versus $t$ | **Slope** of the curve | Net torque $\\tau_{\\text{net}} = dL/dt$ |

These are the rotational twins of "area under $F$–$t$ = $\\Delta p$" and "slope of $p$–$t$ = $F_{\\text{net}}$." Areas below the time axis count as negative angular impulse.`
    },
    {
      id: 'am5-worked1',
      type: 'text' as const,
      content: `### Worked Example — A Flywheel Spun Up by a Motor

A flywheel with $I = 3.0$ $kg\\cdot m^{2}$ starts from rest. The motor's torque graph rises in a straight line from $0$ to $8.0$ N·m during $0$–$2.0$ s, stays at $8.0$ N·m from $2.0$ s to $5.0$ s, then falls linearly to $0$ at $6.0$ s. Find the final angular speed.

**Step 1 — Split the area into shapes.**

- $0$–$2$ s (triangle): $\\tfrac{1}{2}(2.0)(8.0) = 8.0$ N·m·s
- $2$–$5$ s (rectangle): $(3.0)(8.0) = 24$ N·m·s
- $5$–$6$ s (triangle): $\\tfrac{1}{2}(1.0)(8.0) = 4.0$ N·m·s

**Step 2 — Add.** $J_{\\text{ang}} = 8.0 + 24 + 4.0 = 36$ N·m·s $= \\Delta L$.

**Step 3 — Convert to angular speed.** Starting from rest, $L_f = 36$ $kg\\cdot m^{2}/s$:

$$\\omega_f = \\frac{L_f}{I} = \\frac{36}{3.0} = 12 \\text{ rad/s}$$

**Calculus check on the first segment:** there $\\tau = 4t$, and $\\int_0^2 4t\\,dt = 2t^2\\big|_0^2 = 8$ N·m·s, matching the triangle.

**Reading slope instead:** if a graph shows $L(t) = 2t^2 + 3t$ (SI units), the net torque is $\\tau = dL/dt = 4t + 3$, so at $t = 2$ s the torque is $11$ N·m.`
    },
    {
      id: 'am5-mcq1',
      type: 'mcq' as const,
      question: 'A net torque $\\tau(t) = 3t^2$ (N·m) acts on a wheel with $I = 2$ $kg\\cdot m^{2}$, starting from rest. Its angular speed at $t = 2$ s is:',
      options: ['$4$ rad/s', '$12$ rad/s', '$16$ rad/s', '$24$ rad/s'],
      correctAnswer: 0,
      explanation: 'The angular impulse is $\\int_0^2 3t^2\\,dt = t^3\\big|_0^2 = 8$ N·m·s $= \\Delta L$, so $\\omega = 8/2 = 4$ rad/s. Treating the torque as constant at its final value of 12 N·m overestimates the impulse.'
    },
    {
      id: 'am5-mcq2',
      type: 'mcq' as const,
      question: 'A graph of a spinning flywheel\'s angular momentum versus time is a straight line sloping downward toward zero. The net torque on the flywheel is:',
      options: ['Constant, opposing the rotation', 'Zero, because the graph is a straight line', 'Decreasing in magnitude as the wheel slows', 'Constant and in the direction of the rotation'],
      correctAnswer: 0,
      explanation: 'The net torque is the slope of the $L$–$t$ graph. A straight line has a constant slope, and a negative slope on a positive $L$ means the torque points against the rotation.'
    },
    {
      id: 'am5-mcq3',
      type: 'mcq' as const,
      question: 'A torque–time graph is a triangle that rises from $0$ to $6$ N·m at $t = 4$ s and falls back to $0$ at $t = 8$ s. The angular impulse delivered is:',
      options: ['$48$ N·m·s', '$24$ N·m·s', '$12$ N·m·s', '$6.0$ N·m·s'],
      correctAnswer: 1,
      explanation: 'The angular impulse is the area under the curve: $\\tfrac{1}{2}(8)(6) = 24$ N·m·s. Forgetting the $\\tfrac{1}{2}$ gives 48, and using only the rising half gives 12.'
    },
    {
      id: 'am5-exchange',
      type: 'text' as const,
      content: `## Angular Momentum Exchange Between Objects

The total angular momentum of a system about an axis is the **sum** of the angular momenta of its parts about that axis. When two parts interact, Newton's third law makes the torques they exert on each other equal and opposite, so the **angular impulses are equal and opposite**:

$$\\Delta L_A = -\\Delta L_B$$

The system's total $L$ changes only if something **outside** the system exerts a torque, and then the change equals that external angular impulse.

### Worked Example — Two Disks Coupled by Friction

Disk A ($I_A = 2.0$ $kg\\cdot m^{2}$) spins at $10$ rad/s. Disk B ($I_B = 3.0$ $kg\\cdot m^{2}$) is at rest on the same frictionless axle. B is lowered onto A, and friction between them brings them to a common angular speed.

**System A + B:** no external torque about the axle, so

$$L_i = (2.0)(10) = 20 = (2.0 + 3.0)\\,\\omega_f \\implies \\omega_f = 4.0 \\text{ rad/s}$$

**Each disk separately:**

- Angular impulse on B: $\\Delta L_B = 3.0(4.0) - 0 = +12$ $kg\\cdot m^{2}/s$
- Angular impulse on A: $\\Delta L_A = 2.0(4.0) - 20 = -12$ $kg\\cdot m^{2}/s$

Equal and opposite, as Newton's third law requires. If the coupling took $0.50$ s, the average friction torque on each disk had magnitude $12/0.50 = 24$ N·m.

> **Choosing the system decides the bookkeeping:** for A alone, friction from B is an external torque and $L_A$ changes; for A + B, friction is internal and the total $L$ is constant.`
    },
    {
      id: 'am5-mcq4',
      type: 'mcq' as const,
      question: 'In the two-disk example, which statement about the angular impulse that disk B exerts on disk A is correct?',
      options: ['It is equal and opposite to the impulse on B', 'It is larger, because A was the one spinning at first', 'It is smaller, because A has less rotational inertia', 'It is zero, because friction is internal to the pair'],
      correctAnswer: 0,
      explanation: 'The friction torques on the two disks are a Newton\'s-third-law pair, so the angular impulses are equal in size and opposite in direction ($-12$ and $+12$ $kg\\cdot m^{2}/s$). Friction is internal to the pair, which keeps the total angular momentum fixed, but each disk still receives an impulse.'
    },
    {
      id: 'am5-mcq5',
      type: 'mcq' as const,
      question: 'A wheel with $I = 0.40$ $kg\\cdot m^{2}$ spinning at $15$ rad/s is stopped by a brake in $3.0$ s. The average braking torque has magnitude:',
      options: ['$6.0$ N·m', '$18$ N·m', '$2.0$ N·m', '$45$ N·m'],
      correctAnswer: 2,
      explanation: 'The change in angular momentum is $0.40(15) = 6.0$ $kg\\cdot m^{2}/s$, so $\\tau_{\\text{avg}} = \\Delta L/\\Delta t = 6.0/3.0 = 2.0$ N·m. The value 6.0 is the angular impulse itself, not the torque.'
    },
    {
      id: 'am5-mcq6',
      type: 'mcq' as const,
      question: 'A student stands on a turntable that can rotate freely and catches a ball thrown along a line that misses the axis. Taking the system as student + turntable only, its angular momentum:',
      options: ['Changes, because the ball exerts an external torque', 'Stays constant, because the turntable turns freely', 'Stays constant, because the catch is very quick', 'Changes only if the ball passes through the axis'],
      correctAnswer: 0,
      explanation: 'With the ball outside the chosen system, the force it exerts on the student has a moment arm about the axis, so it delivers an external angular impulse. Including the ball in the system would make the total angular momentum constant.'
    },
    {
      id: 'am5-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Angular impulse | $J_{\\text{ang}} = \\int \\tau\\,dt = \\Delta L$ |
| $\\tau$–$t$ graph | Area $=$ angular impulse |
| $L$–$t$ graph | Slope $=$ net torque |
| Interacting objects | $\\Delta L_A = -\\Delta L_B$ (third law) |
| System choice | External torque changes $L_{\\text{sys}}$; internal torques do not |

> **Next:** Part 6 — Problem-solving workshop.`
    }
  ]
};
