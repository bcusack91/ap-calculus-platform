export const physCAngMomPart7Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am7-intro',
      type: 'text' as const,
      content: `# Angular Momentum — Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Concept | Expression |
|:---|:---|
| Particle | $\\vec{L} = \\vec{r} \\times m\\vec{v}$ |
| Rigid body | $L = I\\omega$ |
| Newton's 2nd | $\\vec{\\tau} = d\\vec{L}/dt$ |
| Conservation | $\\tau_{\\text{ext}} = 0 \\implies L = \\text{const}$ |
| Collision with a pivot | Conserve $L$ about the pivot |
| Rolling ($L$ about contact) | $L = (I_{\\text{cm}} + MR^2)\\omega$ |
| Angular impulse | $\\int \\tau\\,dt = \\Delta L$ |
| Kinetic energy | $K_{\\text{rot}} = L^2/(2I)$ |

### Common Moments of Inertia

| Object | $I_{\\text{cm}}$ |
|:---|:---|
| Rod (center) | $ML^2/12$ |
| Rod (end) | $ML^2/3$ |
| Disk/cylinder | $MR^2/2$ |
| Ring/hoop | $MR^2$ |
| Solid sphere | $2MR^2/5$ |
| Spherical shell | $2MR^2/3$ |`
    },
    {
      id: 'am7-mcq1',
      type: 'mcq' as const,
      question: 'A particle of mass $m$ moves in a circle of radius $R$ with speed $v(t) = v_0 + at$ (uniformly increasing). The angular momentum $L(t)$ about the center is:',
      options: ['$mR(v_0 + at)$', '$mR^2(v_0 + at)$', '$mR(v_0 + \\tfrac{1}{2}at)$', '$\\frac{1}{2}mR(v_0 + at)^2$'],
      correctAnswer: 0,
      explanation: '$L = mvr = m(v_0 + at)R$. Since the motion is circular and $\\vec{v} \\perp \\vec{r}$, $L = mRv$ at all times.'
    },
    {
      id: 'am7-mcq2',
      type: 'mcq' as const,
      question: 'Two identical disks ($I$ each) rotate in opposite directions at $\\omega$. They are pressed together and reach a common angular velocity. The final $\\omega$ is:',
      options: ['$0$', '$\\omega/2$', '$\\omega$', '$2\\omega$'],
      correctAnswer: 0,
      explanation: '$L_i = I\\omega + I(-\\omega) = 0$. $L_f = 2I\\omega_f = 0$. $\\omega_f = 0$. All kinetic energy is dissipated by friction between the disks.'
    },
    {
      id: 'am7-worked',
      type: 'text' as const,
      content: `### AP Free Response — Ballistic Pendulum with Rotation

A bullet ($m = 10$ g, $v_0 = 400$ m/s) strikes the bottom of a vertical rod ($M = 2$ kg, $L = 1$ m) pivoted at the top. The bullet embeds.

**(a)** Find $\\omega$ just after impact.

Conserve $L$ about the pivot:

$$mv_0 L = \\left(\\frac{1}{3}ML^2 + mL^2\\right)\\omega$$

$$0.01(400)(1) = \\left(\\frac{1}{3}(2)(1) + 0.01(1)\\right)\\omega$$

$$4 = (0.667 + 0.01)\\omega = 0.677\\omega$$

$$\\omega = 5.91 \\text{ rad/s}$$

**(b)** Find the maximum angle the rod swings upward.

Energy conservation after impact:

$$\\frac{1}{2}I\\omega^2 = (M + m)g \\cdot d_{\\text{cm}} \\cdot (1 - \\cos\\theta)$$

COM rises by $d_{\\text{cm}}(1-\\cos\\theta)$ where $d_{\\text{cm}}$ is the distance from pivot to the system's COM.

$$d_{\\text{cm}} = \\frac{M(L/2) + mL}{M + m} = \\frac{2(0.5) + 0.01(1)}{2.01} = \\frac{1.01}{2.01} \\approx 0.502 \\text{ m}$$

$$\\frac{1}{2}(0.677)(5.91)^2 = 2.01(9.8)(0.502)(1-\\cos\\theta)$$

$$11.82 = 9.89(1-\\cos\\theta) \\implies \\cos\\theta = -0.195 \\implies \\theta \\approx 101°$$

The rod swings past horizontal!`
    },
    {
      id: 'am7-mcq3',
      type: 'mcq' as const,
      question: 'A solid sphere of mass $M$ and radius $R$ rolls without slipping down an incline of height $h$. Its speed at the bottom is:',
      options: ['$\\sqrt{10gh/7}$', '$\\sqrt{2gh}$', '$\\sqrt{6gh/5}$', '$\\sqrt{20gh/9}$'],
      correctAnswer: 0,
      explanation: 'Energy: $Mgh = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}Mv^2 + \\frac{1}{2}(\\frac{2}{5}MR^2)(v/R)^2 = \\frac{1}{2}Mv^2(1+2/5) = \\frac{7}{10}Mv^2$. $v = \\sqrt{10gh/7}$.'
    },
    {
      id: 'am7-mcq4',
      type: 'mcq' as const,
      question: 'A turntable ($I_T = 0.5$ $kg\\cdot m^{2}$) rotates at $2$ rad/s. A person ($I_P = 1.5$ $kg\\cdot m^{2}$, initially rotating with the turntable) starts walking so that her angular velocity relative to the ground is $1$ rad/s in the opposite direction. The turntable\'s new angular speed is:',
      options: ['$11$ rad/s', '$5$ rad/s', '$8$ rad/s', '$2.75$ rad/s'],
      correctAnswer: 0,
      explanation: 'No external torque: $L_i = (0.5 + 1.5)(2) = 4$ $kg\\cdot m^{2}/s$. After, $0.5\\,\\omega_T + 1.5(-1) = 4$, so $\\omega_T = 5.5/0.5 = 11$ rad/s. Dropping the minus sign on the person\'s term gives 5 rad/s.'
    },
    {
      id: 'am7-mcq5',
      type: 'mcq' as const,
      question: 'During a supernova, a star\'s core collapses from radius $R$ to $R/1000$. If the initial rotation period was $30$ days, the final period is approximately:',
      options: ['$2.6$ s', '$2.6$ ms', '$0.03$ days', '$30$ days'],
      correctAnswer: 0,
      explanation: 'Treat the core as a uniform sphere, $I = \\frac{2}{5}MR^2 \\propto R^2$, so $I_f/I_i = 10^{-6}$ and $\\omega_f = 10^6\\,\\omega_i$. Then $T_f = (30 \\times 86\\,400 \\text{ s})/10^6 \\approx 2.6$ s. Scaling by $1000$ instead of $1000^2$ gives 0.03 days.'
    },
    {
      id: 'am7-summary',
      type: 'text' as const,
      content: `## 🎉 Topic Complete — Angular Momentum

You've mastered:

| Part | Topic | Status |
|:---|:---|:---|
| 1 | $\\vec{L} = \\vec{r} \\times \\vec{p}$ (particles) | ✅ |
| 2 | $L = I\\omega$ (rigid bodies) | ✅ |
| 3 | Torque and $d\\vec{L}/dt$ | ✅ |
| 4 | Conservation of angular momentum | ✅ |
| 5 | Angular impulse from graphs and angular momentum exchange | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key Insight:** Angular momentum conservation is the rotational analog of linear momentum conservation, but with a crucial addition: you must choose your reference point wisely. Forces at the pivot have zero moment arm, making angular momentum conserved about that point even during violent collisions.`
    }
  ]
};
