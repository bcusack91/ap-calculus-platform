export const physCEMCondPart4Data = {
  topicSlug: "conductors-equilibrium-physics-c-em",
  sections: [
    {
      id: 'ce4-intro',
      type: 'text' as const,
      content: `# Faraday Cage

**Part 4 of 7 — Electrostatic Shielding**

A **Faraday cage** is a hollow conductor that shields its interior from external electric fields. Named after Michael Faraday, who demonstrated this principle in 1836.

### How It Works

1. An external field $\\vec{E}_{\\text{ext}}$ hits the conducting shell.
2. Free charges on the conductor redistribute: electrons accumulate on one side, leaving net positive on the other.
3. The induced surface charges create a field that exactly cancels $\\vec{E}_{\\text{ext}}$ inside.
4. Result: $\\vec{E} = 0$ inside the cavity.

### Mathematical Basis

Inside the conductor shell: $\\vec{E} = 0$ (conductor property). Inside the cavity (with no enclosed charges), $V$ satisfies Laplace's equation:

$$\\nabla^2 V = 0$$

Since $V = \\text{const}$ on the cavity walls (they're part of the conductor), and $V$ satisfies Laplace's equation inside, the uniqueness theorem guarantees $V = \\text{const}$ throughout the cavity. Therefore $\\vec{E} = -\\nabla V = 0$.`
    },
    {
      id: 'ce4-mcq1',
      type: 'mcq' as const,
      question: 'A person inside a metal car is struck by lightning. They are safe because:',
      options: [
        'The metal shell acts as a Faraday cage, keeping $\\vec{E} = 0$ inside',
        'Rubber tires insulate the car',
        'Lightning cannot penetrate metal',
        'The car is grounded through the road'
      ],
      correctAnswer: 0,
      explanation: 'The metal body of the car acts as a Faraday cage. Current flows on the outside surface, and the interior remains field-free. (The rubber tires are actually irrelevant — the current can arc through them.)'
    },
    {
      id: 'ce4-imperfect',
      type: 'text' as const,
      content: `## Imperfect Faraday Cages

Real Faraday cages have holes (mesh, gaps, seams). How effective are they?

### Mesh Analysis

A conducting mesh with openings of diameter $a$ provides shielding that improves exponentially with depth:

$$E_{\\text{inside}} \\sim E_{\\text{outside}} \\cdot e^{-\\pi d/a}$$

where $d$ is the depth behind the mesh. For $d \\gg a$, the shielding is excellent.

### Key Design Rules

- Mesh holes must be **much smaller** than the wavelength of the radiation being shielded ($a \\ll \\lambda$).
- For electrostatics ($\\lambda \\to \\infty$), any conductor provides good shielding.
- For RF/microwave, mesh size becomes critical.

### Skin Depth

For time-varying fields, currents don't penetrate the full conductor thickness. The **skin depth** is:

$$\\delta = \\sqrt{\\frac{2}{\\mu_0 \\sigma \\omega}}$$

For static fields ($\\omega = 0$), $\\delta \\to \\infty$ — the shielding is perfect.`
    },
    {
      id: 'ce4-mcq2',
      type: 'mcq' as const,
      question: 'A Faraday cage made of mesh with hole diameter $a$. The electric field attenuation at depth $d$ behind the mesh goes as:',
      options: [
        'Exponential decay: $e^{-\\pi d/a}$',
        'Inverse square: $1/d^2$',
        'Linear: $1 - d/a$',
        'Constant (no decay)'
      ],
      correctAnswer: 0,
      explanation: 'Fields leaking through holes in conducting mesh decay exponentially with depth, as $e^{-\\pi d/a}$.'
    },
    {
      id: 'ce4-grounding',
      type: 'text' as const,
      content: `## Grounded vs. Ungrounded Conductors

### Ungrounded (Isolated) Conductor

- Total charge is conserved.
- External fields induce surface polarization but no net charge change.
- The conductor floats to whatever potential is required by the charge and external fields.

### Grounded Conductor

- Connected to "ground" (a reservoir at $V = 0$).
- Charge can flow to/from ground as needed.
- The conductor is fixed at $V = 0$.

### Example: Grounded Conducting Sphere Near a Point Charge

A point charge $+q$ at distance $d$ from the center of a grounded conducting sphere of radius $R$ ($d > R$).

The sphere acquires an induced charge from ground:

$$Q_{\\text{induced}} = -\\frac{qR}{d}$$

There is an attractive force between the charge and the grounded sphere:

$$F = -\\frac{kqQ_{\\text{induced}}}{d^2} - \\text{(higher-order image terms)}$$

This is solved exactly using the **method of images** (Part 5).`
    },
    {
      id: 'ce4-mcq3',
      type: 'mcq' as const,
      question: 'An isolated (ungrounded) neutral conducting sphere has a point charge $+Q$ brought nearby. The total charge on the sphere remains:',
      options: ['$0$', '$-Q$', '$+Q$', '$-Q/2$'],
      correctAnswer: 0,
      explanation: 'An isolated conductor conserves total charge. It started neutral, so it remains neutral. Charge $-q_{\\text{ind}}$ on the near side and $+q_{\\text{ind}}$ on the far side, summing to zero.'
    },
    {
      id: 'ce4-applications',
      type: 'text' as const,
      content: `## Applications of Faraday Cages

### 1. Sensitive Electronics
MRI machines, secure facilities, and precision instruments use Faraday cages to block electromagnetic interference.

### 2. Microwave Ovens
The viewing window has a metal mesh — the holes are smaller than the microwave wavelength ($\\lambda \\approx 12\\;\\text{cm}$), blocking the radiation while allowing visible light ($\\lambda \\sim 500\\;\\text{nm}$) through.

### 3. Coaxial Cables
The outer conductor shields the inner signal wire from external electromagnetic noise.

### 4. Laboratory Electrostatics
Metal enclosures around sensitive electrometers ensure that external fields do not affect charge measurements.

### Key Insight for AP Physics C

The Faraday cage demonstrates that electrostatic equilibrium is not just a theoretical convenience — it has immediate, practical consequences. Understanding $\\vec{E} = 0$ inside conductors is essential for shielding arguments that frequently appear on exams.`
    },
    {
      id: 'ce4-mcq4',
      type: 'mcq' as const,
      question: 'A microwave oven door has a metal mesh with holes smaller than 12 cm. This mesh blocks microwaves because:',
      options: [
        'The holes are much smaller than the microwave wavelength, so the mesh acts as a continuous conductor',
        'Metal absorbs all electromagnetic radiation',
        'The mesh reflects visible light',
        'Microwaves cannot pass through any metal'
      ],
      correctAnswer: 0,
      explanation: 'When $a \\ll \\lambda$, the mesh behaves like a solid conductor for that wavelength. Microwaves ($\\lambda \\approx 12\\;\\text{cm}$) are blocked; visible light ($\\lambda \\sim 500\\;\\text{nm} \\ll a$) passes through.'
    }
  ]
};
