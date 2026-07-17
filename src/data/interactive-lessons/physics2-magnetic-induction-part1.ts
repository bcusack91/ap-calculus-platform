export const physics2MagInductPart1Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p1-intro',
      type: 'text' as const,
      content: `# 🧲 Magnetic Induction

**Part 1 of 7 — Magnetic Flux**

---

### Magnetic Flux

$$\\Phi_B = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $\\Phi_B$ | Magnetic flux | Wb (Weber) = $T\\cdot m^{2}$ |
| $B$ | Magnetic field strength | T (Tesla) |
| $A$ | Area of loop | $m^{2}$ |
| $\\theta$ | Angle between $\\vec{B}$ and the area normal $\\hat{n}$ | rad or degrees |

> 🔑 **Critical distinction:** $\\theta$ is the angle between the field and the **normal** to the surface — NOT the angle between the field and the surface itself.

### Maximum and Zero Flux

| Condition | $\\theta$ | $\\cos\\theta$ | $\\Phi_B$ | Physical Picture |
|-----------|----------|--------------|----------|-----------------|
| $\\vec{B} \\perp$ to loop plane (parallel to $\\hat{n}$) | $0°$ | $1$ | $BA$ (maximum) | Field lines pass straight through |
| $\\vec{B}$ at $60°$ to $\\hat{n}$ | $60°$ | $0.5$ | $BA/2$ | Half the flux |
| $\\vec{B} \\parallel$ to loop plane ($\\perp$ to $\\hat{n}$) | $90°$ | $0$ | $0$ | No field lines pass through |
| $\\vec{B}$ anti-parallel to $\\hat{n}$ | $180°$ | $-1$ | $-BA$ | Flux in opposite direction |

### For Multiple Loops (N turns)

$$\\Phi_{\\text{total}} = N \\cdot BA\\cos\\theta$$

Each loop captures the same flux, so $N$ loops multiply the total "flux linkage." This is crucial for transformers and generators.

### Why Flux Matters

Flux itself doesn't produce any electrical effect. It's the **change** in flux ($\\Delta\\Phi_B / \\Delta t$) that induces an EMF. This is Faraday's Law — the subject of Part 2.

### Conceptual Analogy

Think of flux as the amount of "rain" passing through a hoop:
- Tilt the hoop face-up → maximum rain through it ($\\theta = 0°$)
- Tilt it sideways → no rain through it ($\\theta = 90°$)
- The "rain" is the magnetic field; the "hoop" is the loop area
      `
    },
    {
      id: 'magneticinduction-p1-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A circular loop of area 0.05 $m^{2}$ is in a uniform 0.3 T field with $\\vec{B}$ perpendicular to the loop plane. The flux is:',
            options: ['0.015 Wb', '0.15 Wb', '6 Wb', '0.15 T'],
            correctAnswer: 0,
            explanation: '$\\Phi = BA\\cos 0° = 0.3 \\times 0.05 \\times 1 = 0.015$ Wb. Field perpendicular to the loop plane means $\\theta = 0°$ (parallel to the normal).'
          },
          {
            question: 'The loop is tilted so $\\vec{B}$ makes $60°$ with the loop normal. New flux:',
            options: ['$0.015$ Wb', '$0.0075$ Wb', '$0.013$ Wb', 'Zero'],
            correctAnswer: 1,
            explanation: '$\\Phi = BA\\cos 60° = 0.015 \\times 0.5 = 0.0075$ Wb. At $60°$ to the normal, only half the flux passes through.'
          },
          {
            question: 'A student says "the flux is zero because the field is perpendicular to the loop." Is this correct?',
            options: [
              'Yes — perpendicular field means zero flux',
              'No — field perpendicular to the loop PLANE gives MAXIMUM flux. $\\theta$ is measured from the normal, not the surface.',
              'It depends on the area',
              'Only if $B = 0$'
            ],
            correctAnswer: 1,
            explanation: 'This is the #1 AP trap! "Perpendicular to the loop plane" means $\\theta = 0°$ (parallel to the normal) → MAXIMUM flux. "Perpendicular to the normal" ($\\theta = 90°$) → zero flux. Always measure $\\theta$ from the normal.'
          },
          {
            question: 'What are the SI units of magnetic flux?',
            options: ['Tesla (T)', 'Weber (Wb) = $T\\cdot m^{2}$', 'Henry (H)', 'Volt (V)'],
            correctAnswer: 1,
            explanation: '1 Weber = 1 Tesla × 1 $m^{2}$. Named after Wilhelm Weber. Note: 1 Wb = 1 V·s (this connects to Faraday\'s law, where EMF = $\\Delta\\Phi / \\Delta t$ in V = Wb/s).'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p1-input',
      type: 'input-boxes' as const,
      content: `
**Flux Calculations** 🧮

A rectangular coil (20 turns, 0.1 m × 0.2 m) is in a $B = 0.5$ T field.

**1)** Area of one loop? $(m^{2})$

**2)** Maximum total flux linkage through all 20 turns? (Wb)

**3)** Flux when $\\theta = 30°$? (Wb, round to 3 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.02', '0.2', '0.173'],
        hint1: '$A = l \\times w$',
        hint2: '$\\Phi_{\\text{total}} = NBA\\cos 0°$',
        hint3: '$\\Phi = NBA\\cos 30° = 0.2 \\times 0.866$',
        explanation: '1) $A = 0.1 \\times 0.2 = 0.02$ $m^{2}$. 2) $\\Phi = 20 \\times 0.5 \\times 0.02 = 0.2$ Wb (at $\\theta = 0°$). 3) $\\Phi = 0.2 \\times \\cos 30° = 0.2 \\times 0.866 = 0.173$ Wb.'
      }
    }
  ]
};
