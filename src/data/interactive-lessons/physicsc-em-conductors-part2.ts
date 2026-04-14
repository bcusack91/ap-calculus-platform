export const physCEMCondPart2Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce2-intro',
      type: 'text' as const,
      content: `# E = 0 Inside a Conductor

**Part 2 of 7 — In-Depth Analysis**

The statement $\\vec{E} = 0$ inside a conductor in electrostatic equilibrium is one of the most important results in electrostatics. Let's examine why it holds, how to prove it rigorously, and its consequences.

### Argument from Free Charges

1. A conductor contains free charges (electrons in metals).
2. If $\\vec{E} \\neq 0$ at any interior point, free charges experience a force $\\vec{F} = q\\vec{E}$.
3. Charges move in response to this force.
4. But we assumed electrostatic equilibrium (no charge flow).
5. **Contradiction** — so $\\vec{E} = 0$ inside.

This argument is physical. The mathematical proof uses Gauss's Law and uniqueness.`
    },
    {
      id: 'ce2-mcq1',
      type: 'mcq' as const,
      question: 'A copper sphere is placed in an external uniform field $\\vec{E}_0$. After equilibrium, the field inside the sphere is:',
      options: ['Zero', '$\\vec{E}_0$', '$-\\vec{E}_0$', '$\\vec{E}_0/2$'],
      correctAnswer: 0,
      explanation: 'Free electrons redistribute on the surface until their field exactly cancels $\\vec{E}_0$ inside. The result is always $\\vec{E} = 0$ inside, regardless of the external field.'
    },
    {
      id: 'ce2-mechanism',
      type: 'text' as const,
      content: `## How the Field Gets Canceled

When a conductor is placed in an external field $\\vec{E}_0$:

1. Free electrons experience force $\\vec{F} = -e\\vec{E}_0$ and drift opposite to $\\vec{E}_0$.
2. Negative charge accumulates on one side; positive charge (deficit of electrons) on the other.
3. These surface charges create their own field $\\vec{E}_{\\text{induced}}$ opposing $\\vec{E}_0$ inside.
4. Charges keep moving until $\\vec{E}_{\\text{induced}} = -\\vec{E}_0$ inside the conductor.
5. Net internal field: $\\vec{E}_0 + \\vec{E}_{\\text{induced}} = 0$.

### For a Conducting Sphere in Uniform $\\vec{E}_0$

The induced surface charge density is:

$$\\sigma(\\theta) = 3\\epsilon_0 E_0 \\cos\\theta$$

where $\\theta$ is measured from the direction of $\\vec{E}_0$. This can be derived by solving Laplace's equation with boundary conditions.

### Verification by Integration

The field from this surface charge inside the sphere:

$$\\vec{E}_{\\text{in}} = -\\frac{\\sigma_0}{3\\epsilon_0}\\hat{z} = -E_0\\hat{z} = -\\vec{E}_0$$

confirming exact cancellation.`
    },
    {
      id: 'ce2-mcq2',
      type: 'mcq' as const,
      question: 'A conducting sphere in a uniform external field $\\vec{E}_0 = E_0\\hat{z}$. The induced surface charge density varies as:',
      options: [
        '$\\sigma \\propto \\cos\\theta$',
        '$\\sigma = \\text{constant}$',
        '$\\sigma \\propto \\sin\\theta$',
        '$\\sigma \\propto \\cos^2\\theta$'
      ],
      correctAnswer: 0,
      explanation: '$\\sigma(\\theta) = 3\\epsilon_0 E_0\\cos\\theta$. The $\\cos\\theta$ dependence produces a uniform field inside that cancels $\\vec{E}_0$.'
    },
    {
      id: 'ce2-laplace',
      type: 'text' as const,
      content: `## Laplace's Equation Inside Conductors

Since $\\vec{E} = 0$ inside and $\\vec{E} = -\\nabla V$:

$$\\nabla V = 0 \\implies V = \\text{constant}$$

The potential inside a conductor is constant. This is stronger than just saying $\\nabla^2 V = 0$ (Laplace's equation) — the gradient itself vanishes.

### Consequence for Connected Conductors

If two conductors are connected by a conducting wire:
- They reach the same potential.
- Charge flows until $V_1 = V_2$.
- The charge on each adjusts to satisfy this condition.

### Example: Two Spheres Connected by a Wire

Sphere 1: radius $R_1$. Sphere 2: radius $R_2$. Total charge $Q$.

At equilibrium: $V_1 = V_2$:
$$\\frac{kQ_1}{R_1} = \\frac{kQ_2}{R_2} \\implies \\frac{Q_1}{Q_2} = \\frac{R_1}{R_2}$$

Surface charge densities:
$$\\frac{\\sigma_1}{\\sigma_2} = \\frac{Q_1/(4\\pi R_1^2)}{Q_2/(4\\pi R_2^2)} = \\frac{R_2}{R_1}$$

The **smaller** sphere has the **larger** surface charge density and stronger surface field.`
    },
    {
      id: 'ce2-mcq3',
      type: 'mcq' as const,
      question: 'Two conducting spheres of radii $R$ and $2R$ are connected by a long wire and share total charge $Q$. The charge on the larger sphere is:',
      options: ['$2Q/3$', '$Q/2$', '$Q/3$', '$3Q/4$'],
      correctAnswer: 0,
      explanation: '$Q_1/Q_2 = R_1/R_2 = R/(2R) = 1/2$. So $Q_1 = Q/3$ (small) and $Q_2 = 2Q/3$ (large).'
    },
    {
      id: 'ce2-shielding',
      type: 'text' as const,
      content: `## Electrostatic Shielding

Since $\\vec{E} = 0$ inside a conductor:

- A conducting shell **shields** its interior from external fields.
- Charges inside a cavity are shielded from charges outside the conductor.
- This is the principle behind the **Faraday cage** (explored in Part 4).

### Important Subtlety

The shielding is **not symmetric**:
- External fields do NOT penetrate the conductor to reach the cavity.
- But a charge inside the cavity DOES affect the field outside (through induced charges on the outer surface).

This asymmetry is a direct consequence of Gauss's law: the outer surface is "aware" of the enclosed charge.`
    },
    {
      id: 'ce2-mcq4',
      type: 'mcq' as const,
      question: 'A hollow conducting sphere has no charge inside. A positive charge $+Q$ is brought near the outside. The field inside the cavity is:',
      options: ['Zero', 'Nonzero, pointing toward $+Q$', 'Nonzero, pointing away from $+Q$', 'Uniform'],
      correctAnswer: 0,
      explanation: 'The conductor shields its interior from external charges. $\\vec{E} = 0$ inside the cavity regardless of what happens outside (as long as the cavity contains no charge).'
    }
  ]
};
