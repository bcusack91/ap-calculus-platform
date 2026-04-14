export const physCCOMPart2Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com2-intro',
      type: 'text' as const,
      content: `# Center of Mass — Continuous Bodies via Integration

**Part 2 of 7**

For a continuous mass distribution, sums become integrals:

$$\\vec{r}_{\\text{cm}} = \\frac{1}{M}\\int \\vec{r}\\,dm$$

The key is expressing $dm$ in terms of geometry:

| Geometry | Mass element |
|:---|:---|
| 1D (rod, wire) | $dm = \\lambda(x)\\,dx$ |
| 2D (plate, disk) | $dm = \\sigma(x,y)\\,dA$ |
| 3D (solid) | $dm = \\rho(x,y,z)\\,dV$ |

where $\\lambda$, $\\sigma$, $\\rho$ are linear, surface, and volume mass densities.`
    },
    {
      id: 'com2-mcq1',
      type: 'mcq' as const,
      question: 'A uniform thin rod of length $L$ and mass $M$ lies along the $x$-axis from $x=0$ to $x=L$. What is $x_{\\text{cm}}$?',
      options: ['$L/2$', '$L/3$', '$2L/3$', '$L/4$'],
      correctAnswer: 0,
      explanation: '$\\lambda = M/L$. $x_{\\text{cm}} = \\frac{1}{M}\\int_0^L x \\cdot \\frac{M}{L}dx = \\frac{1}{L}\\cdot\\frac{L^2}{2} = L/2$. By symmetry of a uniform rod, the COM is at the midpoint.'
    },
    {
      id: 'com2-nonuniform',
      type: 'text' as const,
      content: `## Non-Uniform Density

### Worked Example: Rod with $\\lambda(x) = \\alpha x$

A rod extends from $x = 0$ to $x = L$ with linear density $\\lambda(x) = \\alpha x$.

**Step 1: Find total mass**

$$M = \\int_0^L \\alpha x\\,dx = \\alpha \\frac{L^2}{2}$$

**Step 2: Find $x_{\\text{cm}}$**

$$x_{\\text{cm}} = \\frac{1}{M}\\int_0^L x \\cdot \\alpha x\\,dx = \\frac{1}{\\alpha L^2/2}\\cdot \\alpha \\frac{L^3}{3} = \\frac{2L}{3}$$

The COM is shifted toward the denser (heavier) end, which makes physical sense.`
    },
    {
      id: 'com2-mcq2',
      type: 'mcq' as const,
      question: 'A rod from $x=0$ to $x=L$ has $\\lambda(x) = \\alpha x^2$. What is $x_{\\text{cm}}$?',
      options: ['$3L/4$', '$2L/3$', '$L/2$', '$4L/5$'],
      correctAnswer: 0,
      explanation: '$M = \\int_0^L \\alpha x^2 dx = \\alpha L^3/3$. $\\int_0^L x \\cdot \\alpha x^2 dx = \\alpha L^4/4$. $x_{\\text{cm}} = \\frac{\\alpha L^4/4}{\\alpha L^3/3} = \\frac{3L}{4}$.'
    },
    {
      id: 'com2-2d',
      type: 'text' as const,
      content: `## Two-Dimensional Bodies

### Semicircular Wire (Uniform)

A uniform semicircular wire of radius $R$ and mass $M$ lies in the upper half-plane.

By symmetry, $x_{\\text{cm}} = 0$. For $y_{\\text{cm}}$, parameterize with angle $\\theta$:

$$dm = \\lambda R\\,d\\theta, \\quad y = R\\sin\\theta$$

$$y_{\\text{cm}} = \\frac{1}{M}\\int_0^{\\pi} R\\sin\\theta \\cdot \\lambda R\\,d\\theta = \\frac{\\lambda R^2}{M}[-\\cos\\theta]_0^{\\pi} = \\frac{\\lambda R^2 \\cdot 2}{\\lambda \\pi R} = \\frac{2R}{\\pi}$$

### Semicircular Disk (Uniform)

For a solid semicircular disk, use area element $dA = r\\,dr\\,d\\theta$:

$$y_{\\text{cm}} = \\frac{1}{M}\\int_0^{\\pi}\\int_0^R (r\\sin\\theta)\\sigma \\cdot r\\,dr\\,d\\theta = \\frac{4R}{3\\pi}$$

| Shape | $y_{\\text{cm}}$ |
|:---|:---|
| Semicircular wire | $2R/\\pi$ |
| Semicircular disk | $4R/(3\\pi)$ |
| Hemisphere shell | $R/2$ |
| Solid hemisphere | $3R/8$ |`
    },
    {
      id: 'com2-mcq3',
      type: 'mcq' as const,
      question: 'The center of mass of a uniform solid hemisphere of radius $R$ is at height:',
      options: ['$3R/8$', '$R/2$', '$2R/\\pi$', '$4R/(3\\pi)$'],
      correctAnswer: 0,
      explanation: 'Using disk slicing: $dm = \\rho \\pi (R^2-z^2)dz$. $z_{\\text{cm}} = \\frac{\\int_0^R z \\pi(R^2-z^2)dz}{\\int_0^R \\pi(R^2-z^2)dz} = \\frac{\\pi(R^4/2 - R^4/4)}{\\pi(R^3 - R^3/3)} = \\frac{R^4/4}{2R^3/3} = \\frac{3R}{8}$.'
    },
    {
      id: 'com2-mcq4',
      type: 'mcq' as const,
      question: 'A triangular plate with vertices at $(0,0)$, $(b,0)$, and $(0,h)$ has uniform surface density. The $y$-coordinate of the COM is:',
      options: ['$h/3$', '$h/2$', '$2h/3$', '$h/4$'],
      correctAnswer: 0,
      explanation: 'For a uniform triangle, the COM is at the centroid: $(\\bar{x}, \\bar{y}) = (b/3, h/3)$. This can be verified by integration with the appropriate limits.'
    },
    {
      id: 'com2-summary',
      type: 'text' as const,
      content: `## Summary

| Method | Expression |
|:---|:---|
| General | $\\vec{r}_{\\text{cm}} = \\frac{1}{M}\\int \\vec{r}\\,dm$ |
| 1D rod | $x_{\\text{cm}} = \\frac{\\int x\\,\\lambda(x)\\,dx}{\\int \\lambda(x)\\,dx}$ |
| 2D plate | Use $dm = \\sigma\\,dA$ with appropriate coordinates |
| Key results | Semicircle wire $2R/\\pi$; hemisphere $3R/8$ |

> **Next:** Part 3 — COM velocity and momentum.`
    }
  ]
};
