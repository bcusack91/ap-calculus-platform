export const physCEMElecFieldPart4Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef4-intro',
      type: 'text' as const,
      content: `# Electric Field Lines

**Part 4 of 7 — Visualizing Electric Fields**

Electric field lines provide a visual map of $\\vec{E}$. They are curves whose tangent at any point gives the direction of $\\vec{E}$ at that point.

### Rules for Field Lines

1. Lines start on positive charges and end on negative charges (or at infinity).
2. The number of lines leaving/entering a charge is proportional to $|q|$.
3. Lines never cross (the field has a unique direction at each point).
4. The density of lines (lines per unit area $\\perp$ to the lines) is proportional to $|\\vec{E}|$.
5. Field lines are perpendicular to equipotential surfaces.

### Mathematical Connection

Field lines are solutions to the differential equation:

$$\\frac{dx}{E_x} = \\frac{dy}{E_y} = \\frac{dz}{E_z}$$`
    },
    {
      id: 'ef4-mcq1',
      type: 'mcq' as const,
      question: 'Two field lines cross at a point. This means:',
      options: [
        'This is impossible — field lines never cross',
        'The electric field is zero at that point',
        'The charges are equal in magnitude',
        'The potential is zero at that point'
      ],
      correctAnswer: 0,
      explanation: 'If field lines crossed, there would be two directions for $\\vec{E}$ at that point, which is not physical. Field lines never cross.'
    },
    {
      id: 'ef4-point',
      type: 'text' as const,
      content: `## Field Lines for Common Configurations

### Single Point Charge

- **Positive $Q$:** Lines radiate outward uniformly in all directions.
- **Negative $Q$:** Lines converge inward uniformly.

The number of lines is proportional to $|Q|$; a charge $2Q$ has twice as many lines as $Q$.

### Parallel Plates

Between two large parallel plates with charges $+Q$ and $-Q$:
- Field lines are straight, parallel, and uniformly spaced.
- $\\vec{E}$ is uniform: $E = \\sigma/\\epsilon_0$ (accounting for both plates).
- Lines run from $+$ plate to $-$ plate.
- Field is approximately zero outside the plates (fringe fields neglected).

### Field Strength from Line Density

If you draw $N$ lines from a charge $Q$, the field magnitude at distance $r$ from a point charge is proportional to:

$$|\\vec{E}| \\propto \\frac{N}{4\\pi r^2}$$

matching the $1/r^2$ dependence.`
    },
    {
      id: 'ef4-mcq2',
      type: 'mcq' as const,
      question: 'A charge $+Q$ has 8 field lines drawn from it. A nearby charge $+3Q$ should have how many lines?',
      options: ['24', '8', '16', '12'],
      correctAnswer: 0,
      explanation: 'The number of lines is proportional to $|Q|$. If $+Q$ has 8 lines, $+3Q$ has $3 \\times 8 = 24$ lines.'
    },
    {
      id: 'ef4-equipotential',
      type: 'text' as const,
      content: `## Equipotential Surfaces & Field Lines

An **equipotential surface** is a surface where $V$ is constant. Key relationships:

- $\\vec{E}$ is always perpendicular to equipotential surfaces.
- $\\vec{E}$ points from high $V$ to low $V$.
- No work is done moving a charge along an equipotential: $W = -q\\Delta V = 0$.

### Mathematical Proof

On an equipotential, $dV = 0$. Since $dV = -\\vec{E}\\cdot d\\vec{l}$:

$$\\vec{E}\\cdot d\\vec{l} = 0$$

for any displacement $d\\vec{l}$ along the surface. This means $\\vec{E} \\perp d\\vec{l}$, so $\\vec{E}$ is normal to the equipotential.

### For a Point Charge

Equipotentials are concentric spheres centered on the charge (since $V = kQ/r$ depends only on $r$). Field lines are radial, perpendicular to these spheres — consistent with the rule.`
    },
    {
      id: 'ef4-mcq3',
      type: 'mcq' as const,
      question: 'An equipotential surface has $V = 100\\;\\text{V}$. The electric field on this surface:',
      options: [
        'Is perpendicular to the surface and points toward lower $V$',
        'Is tangent to the surface',
        'Is zero everywhere on the surface',
        'Has constant magnitude on the surface'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{E} = -\\nabla V$ is always perpendicular to equipotentials and points in the direction of decreasing $V$.'
    },
    {
      id: 'ef4-conductor',
      type: 'text' as const,
      content: `## Field Lines at Conductor Surfaces

At the surface of a conductor in electrostatic equilibrium:

- $\\vec{E}$ is perpendicular to the surface.
- $E_{\\text{surface}} = \\sigma/\\epsilon_0$ (where $\\sigma$ is local surface charge density).
- The surface is an equipotential.

### Sketching Tips for AP Exams

1. Start lines perpendicular to conductor surfaces.
2. Lines from $+$ charges curve toward $-$ charges.
3. More closely spaced lines = stronger field (e.g., near sharp points).
4. Between parallel plates, lines are parallel and evenly spaced.
5. Near an isolated point charge far from others, lines are radial.`
    },
    {
      id: 'ef4-mcq4',
      type: 'mcq' as const,
      question: 'At a sharp point on a conductor, the surface charge density $\\sigma$ is large. Compared to a flat region of the same conductor, the electric field near the sharp point is:',
      options: ['Larger', 'Smaller', 'The same', 'Zero'],
      correctAnswer: 0,
      explanation: '$E = \\sigma/\\epsilon_0$ at the surface. Since $\\sigma$ is larger at sharp points (charge crowds at points of high curvature), $E$ is also larger there.'
    }
  ]
};
