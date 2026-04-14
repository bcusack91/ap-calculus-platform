export const physCAngMomPart2Data = {
  topicSlug: "angular-momentum-physics-c",
  sections: [
    {
      id: 'am2-intro',
      type: 'text' as const,
      content: `# Angular Momentum of Rigid Bodies — $L = I\\omega$

**Part 2 of 7**

For a rigid body rotating about a fixed axis with angular velocity $\\omega$:

$$L = I\\omega$$

where $I$ is the moment of inertia about that axis:

$$I = \\sum m_i r_i^2 \\quad \\text{(discrete)} \\qquad I = \\int r^2\\,dm \\quad \\text{(continuous)}$$

### Common Moments of Inertia

| Object | Axis | $I$ |
|:---|:---|:---|
| Thin rod (center) | Perpendicular, center | $\\frac{1}{12}ML^2$ |
| Thin rod (end) | Perpendicular, end | $\\frac{1}{3}ML^2$ |
| Solid disk/cylinder | Central axis | $\\frac{1}{2}MR^2$ |
| Thin ring/hoop | Central axis | $MR^2$ |
| Solid sphere | Through center | $\\frac{2}{5}MR^2$ |
| Hollow sphere | Through center | $\\frac{2}{3}MR^2$ |`
    },
    {
      id: 'am2-mcq1',
      type: 'mcq' as const,
      question: 'A solid disk of mass $4$ kg and radius $0.5$ m spins at $\\omega = 10$ rad/s. Its angular momentum is:',
      options: ['$5$ kg·m²/s', '$10$ kg·m²/s', '$20$ kg·m²/s', '$2.5$ kg·m²/s'],
      correctAnswer: 0,
      explanation: '$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.25) = 0.5$ kg·m². $L = I\\omega = 0.5 \\times 10 = 5$ kg·m²/s.'
    },
    {
      id: 'am2-parallel',
      type: 'text' as const,
      content: `## Parallel Axis Theorem

If $I_{\\text{cm}}$ is known about the center of mass, the moment of inertia about any parallel axis at distance $d$ is:

$$I = I_{\\text{cm}} + Md^2$$

### Worked Example

A uniform rod of mass $M$ and length $L$ — find $I$ about one end.

$$I_{\\text{end}} = I_{\\text{cm}} + M(L/2)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2 \\quad \\checkmark$$

## Angular Momentum About a Point vs. an Axis

For rotation about a fixed axis, $L$ along that axis is simply $I\\omega$.

But the **total** angular momentum vector may not be parallel to $\\omega$ unless the object is symmetric about the rotation axis. This leads to:

$$\\vec{L} = I\\vec{\\omega}$$

only when $\\vec{\\omega}$ is along a **principal axis** of inertia. Otherwise, $\\vec{L}$ precesses — we'll explore this in Part 5.`
    },
    {
      id: 'am2-mcq2',
      type: 'mcq' as const,
      question: 'A hoop (ring) of mass $M$ and radius $R$ rotates about an axis tangent to the ring and in the plane of the ring. Its moment of inertia is:',
      options: ['$\\frac{3}{2}MR^2$', '$MR^2$', '$2MR^2$', '$\\frac{1}{2}MR^2$'],
      correctAnswer: 0,
      explanation: 'Using parallel axis theorem: $I_{\\text{cm}}$ about a diameter $= \\frac{1}{2}MR^2$ (for a ring). Parallel axis: $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$.'
    },
    {
      id: 'am2-combo',
      type: 'text' as const,
      content: `## Combining Rotation and Translation

For a rigid body that **translates and rotates** (e.g., rolling), the total angular momentum about a fixed point $O$ has two contributions:

$$\\vec{L}_O = \\underbrace{\\vec{r}_{\\text{cm}} \\times M\\vec{v}_{\\text{cm}}}_{\\text{orbital}} + \\underbrace{I_{\\text{cm}}\\vec{\\omega}}_{\\text{spin}}$$

### Rolling Without Slipping

For a disk rolling without slipping at speed $v_{\\text{cm}}$ ($v = R\\omega$):

$$L = Mv_{\\text{cm}}R + \\frac{1}{2}MR^2 \\cdot \\frac{v_{\\text{cm}}}{R} = Mv_{\\text{cm}}R + \\frac{1}{2}Mv_{\\text{cm}}R = \\frac{3}{2}Mv_{\\text{cm}}R$$

about the contact point. (This also equals $I_{\\text{contact}}\\omega = \\frac{3}{2}MR^2 \\cdot \\omega$.)

### Using the Contact Point

For rolling without slipping, the instantaneous axis of rotation is the contact point. Taking torques about this point eliminates the friction force from the equation (since its moment arm is zero).`
    },
    {
      id: 'am2-mcq3',
      type: 'mcq' as const,
      question: 'A solid sphere rolls without slipping at speed $v$. Its angular momentum about the contact point is:',
      options: ['$\\frac{7}{5}MvR$', '$\\frac{2}{5}MvR$', '$MvR$', '$\\frac{7}{2}MvR$'],
      correctAnswer: 0,
      explanation: '$L = MvR + I_{\\text{cm}}\\omega = MvR + \\frac{2}{5}MR^2 \\cdot \\frac{v}{R} = MvR + \\frac{2}{5}MvR = \\frac{7}{5}MvR$. Alternatively: $I_{\\text{contact}} = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2$, and $L = \\frac{7}{5}MR^2 \\omega = \\frac{7}{5}MRv$.'
    },
    {
      id: 'am2-mcq4',
      type: 'mcq' as const,
      question: 'The perpendicular axis theorem states that for a flat (planar) body in the $xy$-plane: $I_z = I_x + I_y$. For a uniform disk of mass $M$ and radius $R$, $I_x$ (about a diameter) is:',
      options: ['$\\frac{1}{4}MR^2$', '$\\frac{1}{2}MR^2$', '$MR^2$', '$\\frac{1}{3}MR^2$'],
      correctAnswer: 0,
      explanation: 'By the perpendicular axis theorem: $I_z = I_x + I_y$. By symmetry $I_x = I_y$. $I_z = \\frac{1}{2}MR^2$. So $I_x = I_z/2 = \\frac{1}{4}MR^2$.'
    },
    {
      id: 'am2-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Rigid body $L$ | $L = I\\omega$ |
| Parallel axis | $I = I_{\\text{cm}} + Md^2$ |
| Perpendicular axis (planar) | $I_z = I_x + I_y$ |
| Rolling body $L$ | $L = Mv_{\\text{cm}}R + I_{\\text{cm}}\\omega$ |
| Sphere rolling $L$ | $\\frac{7}{5}MvR$ (about contact) |

> **Next:** Part 3 — Torque and $d\\vec{L}/dt$.`
    }
  ]
};
