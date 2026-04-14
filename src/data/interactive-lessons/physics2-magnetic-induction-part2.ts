export const physics2MagInductPart2Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p2-intro',
      type: 'text' as const,
      content: `# ⚡ Faraday's Law of Induction

**Part 2 of 7 — Faraday's Law**

---

### Faraday's Law

$$\\boxed{\\mathcal{E} = -N\\frac{d\\Phi_B}{dt} = -N\\frac{\\Delta\\Phi_B}{\\Delta t}}$$

The induced EMF equals the negative rate of change of magnetic flux through $N$ loops.

| Symbol | Meaning | Unit |
|--------|---------|------|
| $\\mathcal{E}$ | Induced EMF | V (Volts) |
| $N$ | Number of turns | dimensionless |
| $\\Phi_B$ | Magnetic flux per turn | Wb |
| $t$ | Time | s |

### Ways to Change Flux

Since $\\Phi_B = BA\\cos\\theta$, flux changes when any of these change:

| What Changes | Example | Application |
|-------------|---------|-------------|
| $B$ (field strength) | Electromagnet turned on/off near a loop | Transformers |
| $A$ (area) | Loop stretches or compresses | Some sensors |
| $\\theta$ (angle) | Loop rotates in a field | Generators & motors |
| Any combination | Moving a loop into/out of a field region | Sliding bar on rails |

### The Negative Sign

The negative sign encodes **Lenz's Law** (covered in Part 3): the induced EMF always opposes the change that created it. For magnitude calculations, you can often ignore the sign and determine direction separately.

### Average vs. Instantaneous EMF

- **Average EMF**: $\\mathcal{E}_{\\text{avg}} = -N\\frac{\\Delta\\Phi}{\\Delta t}$ — use when given before/after values
- **Instantaneous EMF**: $\\mathcal{E} = -N\\frac{d\\Phi}{dt}$ — use for continuously varying flux (e.g., rotating coil: $\\Phi = BA\\cos(\\omega t)$ → $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$)
      `
    },
    {
      id: 'magneticinduction-p2-applications',
      type: 'text' as const,
      content: `
## Real-World Applications of Faraday's Law

| Device | How Flux Changes | Result |
|--------|-----------------|--------|
| **Electric generator** | Coil rotates in a magnetic field ($\\theta$ changes) | AC voltage: $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$ |
| **Transformer** | Changing current in primary creates changing $B$ through secondary | Voltage converted: $V_s/V_p = N_s/N_p$ |
| **Induction cooktop** | Rapidly changing $B$ induces currents in metal pot | Eddy currents heat the pot directly |
| **Metal detector** | Coil sends changing field; metal objects alter return flux | Detects hidden metal objects |
| **Credit card reader** | Moving magnetic stripe past coil | Flux changes encode data |

### Worked Example

**A coil of 50 turns and area 0.04 m² is in a field that drops from 0.6 T to 0.2 T in 0.1 s. Find the average induced EMF.**

$$|\\mathcal{E}| = N\\frac{|\\Delta\\Phi|}{\\Delta t} = N \\cdot \\frac{|\\Delta B| \\cdot A}{\\Delta t} = 50 \\cdot \\frac{0.4 \\times 0.04}{0.1} = 50 \\times 1.6 = 8.0 \\text{ V}$$

Note: $\\Delta B = 0.2 - 0.6 = -0.4$ T. The sign just tells us about direction (Lenz's law).
      `
    },
    {
      id: 'magneticinduction-p2-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A single loop in a field that increases from 0 to 0.5 T in 2 s. Area = 0.1 m². Average EMF:',
            options: ['0.025 V', '0.25 V', '0.05 V', '1.0 V'],
            correctAnswer: 0,
            explanation: '$|\\mathcal{E}| = \\Delta\\Phi / \\Delta t = (0.5 \\times 0.1) / 2 = 0.05/2 = 0.025$ V.'
          },
          {
            question: 'Which does NOT induce an EMF in a loop?',
            options: [
              'Rotating the loop in a uniform field',
              'Moving the loop through a uniform field without changing its orientation',
              'Increasing the field strength through the loop',
              'Pulling the loop out of a field region'
            ],
            correctAnswer: 1,
            explanation: 'Moving a loop through a UNIFORM field without changing orientation keeps $\\Phi = BA\\cos\\theta$ constant — no change in $B$, $A$, or $\\theta$. No $\\Delta\\Phi$ means no EMF. The other three all change flux.'
          },
          {
            question: 'A generator coil rotates at angular frequency $\\omega$. Peak EMF is:',
            options: ['$NBA$', '$NBA\\omega$', '$NBA\\omega^2$', '$NBA/\\omega$'],
            correctAnswer: 1,
            explanation: '$\\Phi = BA\\cos(\\omega t)$. $\\mathcal{E} = -Nd\\Phi/dt = NBA\\omega\\sin(\\omega t)$. Peak value = $NBA\\omega$, occurring when $\\sin(\\omega t) = 1$ (the coil is parallel to the field).'
          },
          {
            question: 'A 100-turn coil has $\\Phi$ that changes by 0.02 Wb in 0.01 s. The induced EMF is:',
            options: ['0.02 V', '0.2 V', '2 V', '200 V'],
            correctAnswer: 3,
            explanation: '$|\\mathcal{E}| = N|\\Delta\\Phi/\\Delta t| = 100 \\times 0.02/0.01 = 100 \\times 2 = 200$ V. Many turns amplify the effect dramatically!'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p2-input',
      type: 'input-boxes' as const,
      content: `
**Faraday's Law Calculations** 🧮

A coil of 200 turns, area 0.03 m², rotates in a 0.4 T field. The flux drops from maximum to zero in 0.05 s.

**1)** Maximum flux per turn? (Wb)

**2)** Change in flux per turn ($|\\Delta\\Phi|$)? (Wb)

**3)** Average induced EMF? (V)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.012', '0.012', '48'],
        hint1: 'Maximum flux = $BA$ (when $\\theta = 0°$)',
        hint2: 'Flux goes from $BA$ to $0$, so $|\\Delta\\Phi| = BA$',
        hint3: '$|\\mathcal{E}| = N|\\Delta\\Phi|/\\Delta t$',
        explanation: '1) $\\Phi_{\\max} = BA = 0.4 \\times 0.03 = 0.012$ Wb. 2) $|\\Delta\\Phi| = 0.012 - 0 = 0.012$ Wb. 3) $|\\mathcal{E}| = 200 \\times 0.012/0.05 = 48$ V.'
      }
    }
  ]
};
