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
      options: ['$5$ $kg\\cdot m^{2}/s$', '$10$ $kg\\cdot m^{2}/s$', '$20$ $kg\\cdot m^{2}/s$', '$2.5$ $kg\\cdot m^{2}/s$'],
      correctAnswer: 0,
      explanation: '$I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0.25) = 0.5$ $kg\\cdot m^{2}$. $L = I\\omega = 0.5 \\times 10 = 5$ $kg\\cdot m^{2}/s$.'
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

### The Axis Matters

The same object has different angular momentum about different axes, because $I$ depends on the axis. A uniform disk ($M$, $R$) spinning at $\\omega$ has:

- About its central axis: $L = \\frac{1}{2}MR^2\\omega$
- About a parallel axis through its rim: $L = \\left(\\frac{1}{2}MR^2 + MR^2\\right)\\omega = \\frac{3}{2}MR^2\\omega$

Always state the axis before computing $L = I\\omega$.`
    },
    {
      id: 'am2-mcq2',
      type: 'mcq' as const,
      question: 'A uniform disk of mass $M$ and radius $R$ rotates about an axis perpendicular to its face through a point on its rim. Its moment of inertia is:',
      options: ['$\\frac{3}{2}MR^2$', '$MR^2$', '$2MR^2$', '$\\frac{1}{2}MR^2$'],
      correctAnswer: 0,
      explanation: 'The central-axis value is $I_{\\text{cm}} = \\frac{1}{2}MR^2$, and the rim axis is a distance $R$ away, so $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$.'
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
      question: 'A uniform rod of mass $M$ and length $L$ rotates about a perpendicular axis a distance $L/4$ from one end. Its moment of inertia is:',
      options: ['$\\frac{7}{48}ML^2$', '$\\frac{1}{3}ML^2$', '$\\frac{1}{16}ML^2$', '$\\frac{31}{48}ML^2$'],
      correctAnswer: 0,
      explanation: 'The axis is $L/4$ from the center, so $I = \\frac{1}{12}ML^2 + M(L/4)^2 = \\frac{4}{48}ML^2 + \\frac{3}{48}ML^2 = \\frac{7}{48}ML^2$. Measuring $d$ as $3L/4$ from the center gives the incorrect $\\frac{31}{48}ML^2$.'
    },
    {
      id: 'am2-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Rigid body $L$ | $L = I\\omega$ |
| Parallel axis | $I = I_{\\text{cm}} + Md^2$ |
| Disk about a rim axis | $I = \\frac{3}{2}MR^2$ |
| Rolling body $L$ | $L = Mv_{\\text{cm}}R + I_{\\text{cm}}\\omega$ |
| Sphere rolling $L$ | $\\frac{7}{5}MvR$ (about contact) |

> **Next:** Part 3 — Torque and $d\\vec{L}/dt$.`
    }
  ]
};
