export const physCEMCondPart5Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce5-intro',
      type: 'text' as const,
      content: `# Induced Charges & Image Charges

**Part 5 of 7 — The Method of Images**

When a charge is placed near a conductor, the conductor's surface charges rearrange. Calculating this distribution directly is hard. The **method of images** replaces the conductor with a fictitious "image charge" that produces the same boundary conditions.

### The Key Idea

- Remove the conductor.
- Place an **image charge** at a specific location such that $V = \\text{const}$ on the former conductor surface.
- The field in the region where the real charge exists is **identical** to the original problem (by uniqueness).
- The field inside the conductor region is **not physical** — we only trust the solution outside.`
    },
    {
      id: 'ce5-mcq1',
      type: 'mcq' as const,
      question: 'The method of images works because of:',
      options: [
        'The uniqueness theorem — if boundary conditions match, the solution is the same',
        'Coulomb\'s law — image charges exert real forces',
        'Superposition — we add the real and image fields everywhere',
        'Gauss\'s law — the enclosed charge determines the field'
      ],
      correctAnswer: 0,
      explanation: 'The uniqueness theorem guarantees that if the image configuration satisfies the same boundary conditions (e.g., $V = 0$ on the conductor surface), the field in the region of interest is identical.'
    },
    {
      id: 'ce5-plane',
      type: 'text' as const,
      content: `## Image Charge for an Infinite Grounded Plane

A charge $+q$ at height $d$ above an infinite grounded conducting plane ($V = 0$).

### Image Solution

Place an image charge $-q$ at distance $d$ below the plane (at the mirror position).

The potential from the two charges:

$$V(x,y,z) = \\frac{kq}{\\sqrt{x^2+y^2+(z-d)^2}} - \\frac{kq}{\\sqrt{x^2+y^2+(z+d)^2}}$$

At $z = 0$: $V = kq/r - kq/r = 0$ ✓

### Force on the Real Charge

The real charge $+q$ is attracted to the grounded plane with a force equal to the force between $+q$ and its image $-q$:

$$F = \\frac{kq^2}{(2d)^2} = \\frac{kq^2}{4d^2}$$

directed toward the plane.

### Surface Charge Density

$$\\sigma(r) = -\\epsilon_0 \\frac{\\partial V}{\\partial z}\\bigg|_{z=0} = -\\frac{qd}{2\\pi(r^2+d^2)^{3/2}}$$

where $r = \\sqrt{x^2+y^2}$.

### Verification

$$\\int_0^\\infty \\sigma(r)\\cdot 2\\pi r\\,dr = -q \\quad \\checkmark$$

The total induced charge equals $-q$.`
    },
    {
      id: 'ce5-mcq2',
      type: 'mcq' as const,
      question: 'A charge $+q$ is at height $d$ above a grounded conducting plane. The force on the charge is:',
      options: [
        '$kq^2/(4d^2)$ toward the plane',
        '$kq^2/d^2$ toward the plane',
        '$kq^2/(4d^2)$ away from the plane',
        'Zero'
      ],
      correctAnswer: 0,
      explanation: 'The image charge is $-q$ at distance $2d$ from the real charge. $F = kq^2/(2d)^2 = kq^2/(4d^2)$, attractive (toward the plane).'
    },
    {
      id: 'ce5-sphere',
      type: 'text' as const,
      content: `## Image Charge for a Grounded Conducting Sphere

A charge $+q$ at distance $d$ from the center of a grounded conducting sphere of radius $R$ ($d > R$).

### Image Solution

Place an image charge $q' = -qR/d$ at distance $d' = R^2/d$ from the center (inside the sphere, along the line from center to $q$).

### Verification

At any point on the sphere surface ($r = R$), one can show $V = 0$, satisfying the boundary condition.

### Force

$$F = \\frac{kqq'}{(d-d')^2} = \\frac{-kq^2 R/d}{(d - R^2/d)^2} = \\frac{-kq^2 Rd}{(d^2-R^2)^2}$$

### Induced Charge

The total induced charge on the sphere is:

$$Q_{\\text{ind}} = q' = -\\frac{qR}{d}$$

Note: $|Q_{\\text{ind}}| < q$, since $R < d$. As $d \\to \\infty$, $Q_{\\text{ind}} \\to 0$.`
    },
    {
      id: 'ce5-mcq3',
      type: 'mcq' as const,
      question: 'A charge $+q$ is at distance $d = 2R$ from the center of a grounded sphere of radius $R$. The image charge magnitude is:',
      options: ['$q/2$', '$q$', '$2q$', '$q/4$'],
      correctAnswer: 0,
      explanation: '$|q\'| = qR/d = qR/(2R) = q/2$. The image charge is $-q/2$ located at $d\' = R^2/(2R) = R/2$ from the center.'
    },
    {
      id: 'ce5-energy',
      type: 'text' as const,
      content: `## Energy of the Image Charge Configuration

### Point Charge Above a Plane

The work to bring $+q$ from infinity to height $d$ above a grounded plane:

$$W = -\\int_\\infty^d \\vec{F}\\cdot d\\vec{r} = -\\int_\\infty^d \\left(-\\frac{kq^2}{4z^2}\\right)dz = -\\frac{kq^2}{4d}$$

This is **half** of what you'd get for two real charges $+q$ and $-q$ separated by $2d$:

$$U_{\\text{two real}} = -\\frac{kq^2}{2d}$$

The factor of $1/2$ arises because the image charge is not real — you don't do work to assemble it.

### Derivation Using Calculus

$$W = \\int_\\infty^d F\\,dz = \\int_\\infty^d \\frac{kq^2}{4z^2}(-dz) = \\frac{kq^2}{4}\\left[-\\frac{1}{z}\\right]_\\infty^d = -\\frac{kq^2}{4d}$$

The negative sign indicates the configuration is bound — energy is released in forming it.`
    },
    {
      id: 'ce5-mcq4',
      type: 'mcq' as const,
      question: 'The energy of a charge $+q$ at height $d$ above a grounded plane is $U = -kq^2/(4d)$. If the charge is moved to height $2d$, the new energy is:',
      options: ['$-kq^2/(8d)$', '$-kq^2/(4d)$', '$-kq^2/(2d)$', '$-kq^2/(16d)$'],
      correctAnswer: 0,
      explanation: '$U = -kq^2/(4 \\cdot 2d) = -kq^2/(8d)$. The energy magnitude halves because the image force weakens at greater height.'
    }
  ]
};
