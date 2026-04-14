export const physics2ResCircPart1Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Resistivity & Advanced Circuits

**Part 1 of 7 — Resistivity & Conductivity**

---

### What Is Resistivity?

Resistivity $\\rho$ is an **intrinsic property** of a material — it doesn't depend on the shape or size of the object. It measures how strongly a material opposes current flow at the microscopic level.

The resistance of a wire depends on both the material (resistivity) AND its geometry:

$$\\boxed{R = \\frac{\\rho L}{A}}$$

| Symbol | Meaning | Unit |
|--------|---------|------|
| $R$ | Resistance | $\\Omega$ (ohms) |
| $\\rho$ | Resistivity | $\\Omega \\cdot \\text{m}$ |
| $L$ | Length of conductor | m |
| $A$ | Cross-sectional area | m² |

---

### Conductivity

Conductivity $\\sigma$ is the reciprocal of resistivity — it measures how easily a material carries current:

$$\\sigma = \\frac{1}{\\rho} \\quad (\\text{units: S/m or } \\Omega^{-1}\\text{m}^{-1})$$

---

### Material Classification by Resistivity

| Material | Type | $\\rho$ ($\\Omega$·m) | Notes |
|----------|------|---------------------|-------|
| Silver | Conductor | $1.59 \\times 10^{-8}$ | Best conductor (but expensive) |
| Copper | Conductor | $1.68 \\times 10^{-8}$ | Standard wire material |
| Aluminum | Conductor | $2.65 \\times 10^{-8}$ | Used in power lines (lighter) |
| Nichrome | Alloy | $1.10 \\times 10^{-6}$ | Heating elements (high $\\rho$) |
| Silicon | Semiconductor | $\\sim 640$ | Resistivity tunable (doping) |
| Glass | Insulator | $10^{10}$ – $10^{14}$ | Extremely high $\\rho$ |
| Rubber | Insulator | $\\sim 10^{13}$ | Wire insulation |

> 🔑 **Key Insight:** Conductors have $\\rho \\sim 10^{-8}$; insulators have $\\rho \\sim 10^{10}$ or higher. That's a factor of $10^{18}$ — one of the largest ratios in physics!

---

### How Geometry Affects Resistance

Think of water flowing through a pipe:

| Change | Effect on $R$ | Analogy |
|--------|--------------|---------|
| Longer wire ($L$ ↑) | $R$ increases | Longer pipe → more friction |
| Wider wire ($A$ ↑) | $R$ decreases | Wider pipe → easier flow |
| Double length | $R \\times 2$ | $R \\propto L$ |
| Double diameter | $R \\div 4$ | $A = \\pi r^2 \\propto d^2$ |
| Double both $L$ and $A$ | $R$ unchanged | Effects cancel |

> ⚠️ **AP Trap:** When a wire is *stretched*, its volume stays constant! If $L$ doubles, $A$ halves, so $R$ quadruples: $R \\propto L^2/V$ where $V = LA$ is constant.`
    },
    {
      id: 'resistivitycircuitsadvanced-p1-drift',
      type: 'text' as const,
      content: `### Microscopic View: Current & Drift Velocity

Electric current is the flow of charge carriers (usually electrons in metals):

$$\\boxed{I = nqv_d A}$$

| Symbol | Meaning | Typical Value |
|--------|---------|--------------|
| $n$ | Number density of carriers | $\\sim 10^{28}$ m⁻³ for Cu |
| $q$ | Charge per carrier | $1.6 \\times 10^{-19}$ C |
| $v_d$ | Drift velocity | $\\sim 10^{-4}$ m/s (very slow!) |
| $A$ | Cross-sectional area | depends on wire |

---

### Why Drift Velocity Is So Slow

| Speed | Value | What it describes |
|-------|-------|------------------|
| Drift velocity | $\\sim 0.1$ mm/s | Average net motion of electrons |
| Thermal velocity | $\\sim 10^6$ m/s | Random motion between collisions |
| Signal speed | $\\sim c$ | How fast the E-field propagates |

> 🔑 **Analogy:** When you turn on a garden hose, water comes out the other end almost immediately — not because the water travels through quickly, but because the pressure wave travels fast. Similarly, the electric field sets all electrons in motion nearly simultaneously, even though each electron moves slowly.

---

### Current Density

$$J = \\frac{I}{A} = nqv_d = \\sigma E = \\frac{E}{\\rho}$$

This is the microscopic form of Ohm's law: $\\vec{J} = \\sigma \\vec{E}$

In a uniform wire with electric field $E$:
- Current density is uniform across the cross-section
- $V = EL$, combined with $J = E/\\rho$, gives $V = (\\rho L/A)I = RI$ — Ohm's law!`
    },
    {
      id: 'resistivitycircuitsadvanced-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If you double the length of a wire while keeping diameter constant, resistance:',
            options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'],
            correctAnswer: 0,
            explanation: '$R = \\rho L/A$. Double $L$ (constant $A$) → double $R$. Resistance is directly proportional to length.'
          },
          {
            question: 'If you double the diameter of a wire (same length and material), resistance:',
            options: ['Doubles', 'Halves', 'Decreases by factor of 4', 'Increases by factor of 4'],
            correctAnswer: 2,
            explanation: '$A = \\pi r^2 = \\pi(d/2)^2 \\propto d^2$. Double $d$ → 4× area → $R$ decreases by factor of 4.'
          },
          {
            question: 'A copper wire is stretched to twice its original length (same volume). Its resistance becomes:',
            options: ['2× original', '4× original', 'Half the original', 'Same as original'],
            correctAnswer: 1,
            explanation: 'Constant volume: $L \\to 2L$, $A \\to A/2$. $R_{new} = \\rho(2L)/(A/2) = 4\\rho L/A = 4R$.'
          },
          {
            question: 'The drift velocity of electrons in a typical wire is approximately:',
            options: ['Speed of light', '$10^6$ m/s', '$0.1$ mm/s', 'Zero'],
            correctAnswer: 2,
            explanation: 'Drift velocity is surprisingly slow (~0.1 mm/s). The signal travels at near light speed, but individual electrons move very slowly on average.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p1-input',
      type: 'input-boxes' as const,
      content: `
**Resistivity Calculations** 🧮

A copper wire ($\\rho = 1.68 \\times 10^{-8}$ Ω·m) is 2 m long with a circular cross-section of radius 1 mm.

**1)** Cross-sectional area $A$? (in m², scientific notation)

**2)** Resistance $R$? (in Ω, round to 4 decimal places)

**3)** If the wire is stretched to 4 m (same volume), $R_{new}/R_{old} = ?$

**4)** Current density $J$ if $I = 3$ A? (in A/m², scientific notation)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['3.14e-6', '0.0107', '4', '9.55e5'],
        hint1: '$A = \\pi r^2 = \\pi(0.001)^2$',
        hint2: '$R = \\rho L/A$',
        hint3: 'Volume constant → $L$ doubles, $A$ halves → $R$ quadruples',
        hint4: '$J = I/A = 3/3.14 \\times 10^{-6}$',
        explanation: '1) $A = \\pi(10^{-3})^2 ≈ 3.14 \\times 10^{-6}$ m². 2) $R = 1.68 \\times 10^{-8} \\times 2/(3.14 \\times 10^{-6}) ≈ 0.0107$ Ω. 3) Stretching doubles $L$ and halves $A$: $R_{new} = 4R_{old}$. 4) $J = 3/(3.14 \\times 10^{-6}) ≈ 9.55 \\times 10^5$ A/m².'
      }
    }
  ]
};