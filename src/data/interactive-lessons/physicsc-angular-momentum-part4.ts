export const physCAngMomPart4Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am4-intro',
      type: 'text' as const,
      content: `# Conservation of Angular Momentum

**Part 4 of 7**

If the net external torque on a system is zero:

$$\\vec{\\tau}_{\\text{ext}} = 0 \\implies \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}$$

This is one of the most powerful conservation laws in physics!

### When Is Angular Momentum Conserved?

| Scenario | $\\tau_{\\text{ext}} = 0$? | $L$ conserved? |
|:---|:---|:---|
| Central force ($\\vec{F} \\parallel \\vec{r}$) | Yes | Yes |
| Gravity about Earth's center | Yes (for orbital $L$) | Yes |
| Ice skater pulling arms in | Yes (no external torque) | Yes |
| Collision with fixed pivot | About pivot, yes | $L$ about pivot conserved |
| Rolling down incline | No ($\\tau_{\\text{gravity}} \\neq 0$) | No |`
    },
    {
      id: 'am4-mcq1',
      type: 'mcq' as const,
      question: 'A figure skater spins with $I_1 = 5$ $kg\\cdot m^{2}$ at $\\omega_1 = 4$ rad/s, then pulls her arms in to $I_2 = 2$ $kg\\cdot m^{2}$. Her new angular velocity is:',
      options: ['$10$ rad/s', '$8$ rad/s', '$2$ rad/s', '$20$ rad/s'],
      correctAnswer: 0,
      explanation: '$L = I_1\\omega_1 = I_2\\omega_2$. $\\omega_2 = \\frac{5 \\times 4}{2} = 10$ rad/s. She spins 2.5× faster.'
    },
    {
      id: 'am4-energy',
      type: 'text' as const,
      content: `## Kinetic Energy Changes

When a skater pulls her arms in, $L$ is conserved but $K$ is NOT:

$$K_1 = \\frac{1}{2}I_1\\omega_1^2, \\quad K_2 = \\frac{1}{2}I_2\\omega_2^2$$

Since $\\omega_2 = (I_1/I_2)\\omega_1$:

$$K_2 = \\frac{1}{2}I_2\\left(\\frac{I_1}{I_2}\\omega_1\\right)^2 = \\frac{I_1^2\\omega_1^2}{2I_2} = K_1 \\cdot \\frac{I_1}{I_2}$$

Since $I_2 < I_1$: $K_2 > K_1$. **Kinetic energy increases!**

Where does this energy come from? From the **internal work** done by the skater's muscles: her hands move in circles, so she must pull them toward the axis, and that inward pull does positive work as her arms move inward.

### Worked Example

$I_1 = 5$ $kg\\cdot m^{2}$, $\\omega_1 = 4$ rad/s, $I_2 = 2$ $kg\\cdot m^{2}$:

$$K_1 = \\frac{1}{2}(5)(16) = 40 \\text{ J}$$

$$K_2 = \\frac{1}{2}(2)(100) = 100 \\text{ J}$$

The skater does $60$ J of internal work.`
    },
    {
      id: 'am4-mcq2',
      type: 'mcq' as const,
      question: 'When a spinning ice skater pulls her arms in (no external torques), the kinetic energy:',
      options: ['Increases', 'Decreases, since $I$ is smaller', 'Stays the same, since $L$ is conserved', 'Depends on the angular velocity'],
      correctAnswer: 0,
      explanation: '$K = L^2/(2I)$. $L$ is constant, but $I$ decreases, so $K = L^2/(2I)$ increases. The skater\'s muscles do positive work pulling her arms inward.'
    },
    {
      id: 'am4-collisions',
      type: 'text' as const,
      content: `## Angular Momentum in Collisions

### Bullet-Rod Problem

A bullet of mass $m$ and speed $v$ hits the end of a rod (mass $M$, length $L$) that is pivoted at the other end. The bullet embeds in the rod.

**Conserve angular momentum about the pivot** (forces at the pivot exert zero torque about the pivot):

$$L_i = mvL$$

$$L_f = \\left(\\frac{1}{3}ML^2 + mL^2\\right)\\omega$$

$$\\omega = \\frac{mvL}{\\frac{1}{3}ML^2 + mL^2} = \\frac{mv}{(\\frac{M}{3}+m)L}$$

Note: Linear momentum is NOT conserved (the pivot exerts an impulse). But angular momentum about the pivot IS conserved.

### Why Choose the Pivot Point?

Forces at the pivot have zero moment arm → zero torque about the pivot. This makes angular momentum conserved about that specific point, even though transient impulsive forces act.`
    },
    {
      id: 'am4-mcq3',
      type: 'mcq' as const,
      question: 'A $0.01$ kg bullet at $400$ m/s embeds in a $2$ kg rod of length $1$ m, pivoted at one end. The angular velocity after impact is approximately:',
      options: ['$5.91$ rad/s', '$6.00$ rad/s', '$1.99$ rad/s', '$4.00$ rad/s'],
      correctAnswer: 0,
      explanation: '$L_i = 0.01 \\times 400 \\times 1 = 4$ $kg\\cdot m^{2}/s$. $I_f = \\frac{1}{3}(2)(1)^2 + 0.01(1)^2 = 0.667 + 0.01 = 0.677$ $kg\\cdot m^{2}$. $\\omega = 4/0.677 \\approx 5.91$ rad/s. Leaving the bullet out of $I$ gives 6.00 rad/s.'
    },
    {
      id: 'am4-kepler',
      type: 'text' as const,
      content: `## Orbits: Angular Momentum Under a Central Force

For a satellite in orbit, gravity is a central force ($\\vec{F} \\parallel \\vec{r}$), so about the central body $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$ and the satellite's angular momentum is constant:

$$L = mr v_{\\perp} = \\text{const}$$

At the closest and farthest points of an elliptical orbit the velocity is perpendicular to $\\vec{r}$, so

$$r_{\\min} v_{\\max} = r_{\\max} v_{\\min}$$

The satellite moves fastest where it is closest to the central body.`
    },
    {
      id: 'am4-mcq4',
      type: 'mcq' as const,
      question: 'A satellite in an elliptical orbit has speed $v_1 = 8000$ m/s at distance $r_1 = 7000$ km. At $r_2 = 14\\,000$ km, its speed is:',
      options: ['$4000$ m/s', '$8000$ m/s', '$16\\,000$ m/s', '$2000$ m/s'],
      correctAnswer: 0,
      explanation: 'At perigee and apogee, $v \\perp r$. Conservation: $r_1 v_1 = r_2 v_2$. $v_2 = r_1 v_1/r_2 = 7000(8000)/14000 = 4000$ m/s.'
    },
    {
      id: 'am4-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Key Result |
|:---|:---|
| Conservation condition | $\\tau_{\\text{ext}} = 0 \\implies L = \\text{const}$ |
| Skater pulls arms in | $\\omega$ increases, $K$ increases |
| $K$ change | $K = L^2/(2I)$ — inversely proportional to $I$ |
| Collision with pivot | Conserve $L$ about pivot |
| Central forces | $\\vec{\\tau} = 0$ → $r v_{\\perp}$ constant in orbit |

> **Next:** Part 5 — Angular impulse from graphs and angular momentum exchange.`
    }
  ]
};
