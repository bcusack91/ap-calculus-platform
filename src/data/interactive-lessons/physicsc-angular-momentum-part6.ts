export const physCAngMomPart6Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am6-intro',
      type: 'text' as const,
      content: `# Angular Momentum — Problem-Solving Workshop

**Part 6 of 7**

### Strategy Guide

| Step | Action |
|:---|:---|
| 1 | Choose the reference point wisely (pivot eliminates unknown forces) |
| 2 | Determine if $\\vec{\\tau}_{\\text{ext}} = 0$ about that point → conservation |
| 3 | For collisions: conserve $L$ about the impact point or pivot |
| 4 | For orbits: use $L = mrv_{\\perp}$ and central force → $\\tau = 0$ |
| 5 | For rolling: combine orbital + spin angular momentum |
| 6 | Check: is KE also conserved? (elastic) or not? (inelastic) |`
    },
    {
      id: 'am6-mcq1',
      type: 'mcq' as const,
      question: 'A disk ($I_{\\text{disk}} = \\frac{1}{2}MR^2$) rotates at $\\omega_0$. A ring ($I_{\\text{ring}} = MR^2$) is dropped concentrically on top. The final angular velocity is:',
      options: ['$\\omega_0/3$', '$\\omega_0/2$', '$2\\omega_0/3$', '$\\omega_0$'],
      correctAnswer: 0,
      explanation: 'No external torque. $L_i = \\frac{1}{2}MR^2 \\omega_0$. $L_f = (\\frac{1}{2}MR^2 + MR^2)\\omega_f = \\frac{3}{2}MR^2 \\omega_f$. $\\omega_f = \\frac{MR^2 \\omega_0 /2}{3MR^2/2} = \\omega_0/3$.'
    },
    {
      id: 'am6-prob1',
      type: 'text' as const,
      content: `### Problem 1: Ball Hits Rod

A ball of mass $m$ moving at speed $v$ hits the end of a stationary rod of mass $M$ and length $L$ that is free to rotate about its center. The collision is perfectly elastic.

**Conservation of angular momentum about the center:**

$$mvL/2 = \\frac{1}{12}ML^2 \\omega + mv'(L/2)$$

**Conservation of kinetic energy:**

$$\\frac{1}{2}mv^2 = \\frac{1}{2}\\cdot\\frac{1}{12}ML^2 \\omega^2 + \\frac{1}{2}mv'^2$$

These two equations solve for $\\omega$ and $v'$.

For the special case $m = M/3$:

$$v' = \\frac{m - M/3}{m + M/3}\\cdot v \\cdot \\frac{L/2 \\text{ factors}}{\\cdots}$$

The algebra is involved but the approach is systematic:
1. Write $L$-conservation about the pivot
2. Write $K$-conservation
3. Solve the two equations for two unknowns ($\\omega$, $v'$)`
    },
    {
      id: 'am6-mcq2',
      type: 'mcq' as const,
      question: 'A merry-go-round (uniform disk, $M = 200$ kg, $R = 2$ m) spins at $0.5$ rad/s. A $50$ kg child jumps on at the rim. The new angular velocity is:',
      options: ['$\\frac{1}{3}$ rad/s', '$0.4$ rad/s', '$0.25$ rad/s', '$0.5$ rad/s'],
      correctAnswer: 0,
      explanation: '$I_{\\text{disk}} = \\frac{1}{2}(200)(4) = 400$ kg·m². $I_{\\text{child}} = 50(4) = 200$ kg·m². $L = 400(0.5) = 200$. $\\omega_f = 200/(400+200) = 200/600 = 1/3$ rad/s.'
    },
    {
      id: 'am6-prob2',
      type: 'text' as const,
      content: `### Problem 2: Atwood + Pulley

An Atwood machine has masses $m_1 > m_2$ connected by a string over a pulley of mass $M$ and radius $R$ (solid disk). The string doesn't slip on the pulley.

**Angular momentum approach (about pulley center):**

$$\\tau_{\\text{net}} = (m_1 - m_2)gR$$

$$I_{\\text{total}} = \\frac{1}{2}MR^2 + m_1 R^2 + m_2 R^2 = \\left(\\frac{M}{2} + m_1 + m_2\\right)R^2$$

$$\\alpha = \\frac{\\tau}{I} = \\frac{(m_1 - m_2)g}{(M/2 + m_1 + m_2)R}$$

$$a = R\\alpha = \\frac{(m_1-m_2)g}{M/2 + m_1 + m_2}$$

Compare to the massless pulley result: $a = (m_1-m_2)g/(m_1+m_2)$. The massive pulley adds $M/2$ to the effective inertia.`
    },
    {
      id: 'am6-mcq3',
      type: 'mcq' as const,
      question: 'In the Atwood machine with a massive pulley (solid disk, mass $M$), the effective additional mass added to the denominator by the pulley is:',
      options: ['$M/2$', '$M$', '$2M$', '$M/4$'],
      correctAnswer: 0,
      explanation: '$a = (m_1-m_2)g/(m_1+m_2+M/2)$. The pulley contributes $M/2$ because its moment of inertia $I = \\frac{1}{2}MR^2$ at radius $R$ gives an effective translational mass of $I/R^2 = M/2$.'
    },
    {
      id: 'am6-mcq4',
      type: 'mcq' as const,
      question: 'A uniform rod of length $L$ and mass $M$ is released from a horizontal position, pivoted at one end. Its angular velocity when it passes through vertical is:',
      options: ['$\\sqrt{3g/L}$', '$\\sqrt{2g/L}$', '$\\sqrt{g/L}$', '$\\sqrt{6g/L}$'],
      correctAnswer: 0,
      explanation: 'Using energy conservation: COM drops $L/2$. $Mg(L/2) = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\cdot\\frac{1}{3}ML^2\\omega^2$. $gL/2 = ML^2\\omega^2/6$. Wait: $Mg(L/2) = \\frac{1}{6}ML^2\\omega^2$. $\\omega^2 = 3g/L$. $\\omega = \\sqrt{3g/L}$.'
    },
    {
      id: 'am6-summary',
      type: 'text' as const,
      content: `## Workshop Takeaways

| Problem Type | Key Approach |
|:---|:---|
| Object dropped on spinner | $L$ conserved; solve for $\\omega_f$ |
| Collision with pivot | Conserve $L$ about pivot |
| Massive pulley Atwood | Pulley adds $I/R^2$ to effective mass |
| Rod released from horizontal | Energy conservation with $I_{\\text{end}} = ML^2/3$ |
| Choosing reference point | Pick where unknown forces act |

> **Next:** Part 7 — Comprehensive review & applications.`
    }
  ]
};
