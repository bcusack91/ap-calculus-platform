export const physCAngMomPart1Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am1-intro',
      type: 'text' as const,
      content: `# Angular Momentum of a Particle — $\\vec{L} = \\vec{r} \\times \\vec{p}$

**Part 1 of 7**

The angular momentum of a particle about a point $O$ is:

$$\\vec{L} = \\vec{r} \\times \\vec{p} = \\vec{r} \\times m\\vec{v}$$

where $\\vec{r}$ is the position vector from $O$ to the particle.

### Magnitude

$$|\\vec{L}| = rmv\\sin\\theta = mv r_{\\perp}$$

where:
- $\\theta$ = angle between $\\vec{r}$ and $\\vec{v}$
- $r_{\\perp} = r\\sin\\theta$ = perpendicular distance from $O$ to the line of motion (the **moment arm**)

### Direction

Use the **right-hand rule**: curl fingers from $\\vec{r}$ toward $\\vec{p}$, thumb points in the direction of $\\vec{L}$.

For 2D motion in the $xy$-plane, $\\vec{L}$ points along $\\hat{z}$:
- Counterclockwise → $\\vec{L} = +L\\hat{z}$
- Clockwise → $\\vec{L} = -L\\hat{z}$`
    },
    {
      id: 'am1-mcq1',
      type: 'mcq' as const,
      question: 'A 2 kg particle moves with velocity $\\vec{v} = 3\\hat{x}$ m/s at position $\\vec{r} = 4\\hat{y}$ m. Its angular momentum about the origin is:',
      options: ['$-24\\hat{z}$ kg·m²/s', '$24\\hat{z}$ kg·m²/s', '$12\\hat{z}$ kg·m²/s', '$0$'],
      correctAnswer: 0,
      explanation: '$\\vec{L} = \\vec{r} \\times m\\vec{v} = 4\\hat{y} \\times 2(3\\hat{x}) = 24(\\hat{y}\\times\\hat{x}) = -24\\hat{z}$ kg·m²/s. Recall $\\hat{y}\\times\\hat{x} = -\\hat{z}$.'
    },
    {
      id: 'am1-straight',
      type: 'text' as const,
      content: `## Angular Momentum of a Particle Moving in a Straight Line

Even a particle in straight-line motion has angular momentum about any point not on its path!

For a particle moving at constant velocity $v$ passing at closest distance $d$ from point $O$:

$$L = mvd = \\text{constant}$$

This is because $r\\sin\\theta = d$ remains constant as the particle moves.

### Worked Example

A 0.5 kg ball moves at $10$ m/s along a line that passes $3$ m from the origin.

$$L = mvd = 0.5 \\times 10 \\times 3 = 15 \\text{ kg·m}^2/\\text{s}$$

This remains constant because $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = 0$ (no force acts).`
    },
    {
      id: 'am1-mcq2',
      type: 'mcq' as const,
      question: 'A particle moves in a straight line with constant velocity. Its angular momentum about a point NOT on the line is:',
      options: ['Constant and nonzero', 'Zero', 'Increasing', 'Decreasing'],
      correctAnswer: 0,
      explanation: '$L = mvd$ where $d$ is the perpendicular distance from the point to the line. Since $v$ is constant and $d$ is a geometric constant, $L$ is constant and nonzero (as long as the point is not on the line).'
    },
    {
      id: 'am1-circular',
      type: 'text' as const,
      content: `## Angular Momentum in Circular Motion

For a particle of mass $m$ moving in a circle of radius $r$ at speed $v$:

$$L = mvr$$

Since $v = r\\omega$:

$$L = mr^2\\omega$$

For uniform circular motion, $\\vec{v} \\perp \\vec{r}$, so $\\sin\\theta = 1$.

### Cross Product in Components

For a particle at $(x, y, 0)$ with velocity $(v_x, v_y, 0)$:

$$\\vec{L} = m(\\vec{r} \\times \\vec{v}) = m(xv_y - yv_x)\\hat{z}$$

This is the $z$-component: $L_z = m(xv_y - yv_x)$.`
    },
    {
      id: 'am1-mcq3',
      type: 'mcq' as const,
      question: 'A planet of mass $m$ orbits a star in an elliptical orbit. At perihelion (closest approach $r_1$, speed $v_1$) and aphelion (farthest distance $r_2$, speed $v_2$), angular momentum conservation gives:',
      options: ['$r_1 v_1 = r_2 v_2$', '$r_1^2 v_1 = r_2^2 v_2$', '$r_1 v_1^2 = r_2 v_2^2$', '$v_1 = v_2$'],
      correctAnswer: 0,
      explanation: 'At both points, $\\vec{v} \\perp \\vec{r}$, so $L = mvr$. Conservation: $mv_1r_1 = mv_2r_2$, giving $r_1v_1 = r_2v_2$. This is Kepler\'s second law (equal areas in equal times).'
    },
    {
      id: 'am1-mcq4',
      type: 'mcq' as const,
      question: 'The SI units of angular momentum are:',
      options: ['kg·m²/s', 'kg·m/s²', 'N·m', 'J·s'],
      correctAnswer: 0,
      explanation: '$[L] = [r][p] = \\text{m} \\cdot \\text{kg·m/s} = \\text{kg·m}^2/\\text{s}$. Note that J·s (joule-seconds) has the same dimensions — this is why Planck\'s constant $\\hbar$ has units of angular momentum.'
    },
    {
      id: 'am1-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Definition | $\\vec{L} = \\vec{r} \\times m\\vec{v}$ |
| Magnitude | $L = mvr\\sin\\theta = mvr_{\\perp}$ |
| Circular motion | $L = mvr = mr^2\\omega$ |
| Straight line | $L = mvd$ (constant) |
| Direction | Right-hand rule ($\\vec{r}$ to $\\vec{p}$) |
| Units | kg·m²/s |

> **Next:** Part 2 — Angular momentum of rigid bodies ($L = I\\omega$).`
    }
  ]
};
