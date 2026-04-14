export const physics2QuantumPart4Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p4-intro',
      type: 'text' as const,
      content: `# 🎲 Probability & Wave Functions

**Part 4 of 7 — Quantum Probability**

---

### The Wave Function $\\Psi$

In quantum mechanics, a particle is described by a **wave function** $\\Psi(x, t)$. The wave function contains ALL information about the particle's quantum state.

Unlike classical physics where a particle has a definite trajectory $(x(t), v(t))$, in quantum mechanics we only know **probabilities**.

---

### Born's Interpretation (Max Born, 1926)

The wave function itself has no direct physical meaning, but its absolute square does:

$$\\boxed{|\\Psi(x)|^2 = \\text{probability density at position } x}$$

$$P(a \\leq x \\leq b) = \\int_a^b |\\Psi(x)|^2 \\, dx$$

| Property | Meaning |
|----------|---------|
| $\\Psi(x)$ | Wave function (can be +, −, or complex) |
| $|\\Psi(x)|^2$ | Probability density (always $\\geq 0$) |
| $|\\Psi(x)|^2 dx$ | Probability of finding particle between $x$ and $x + dx$ |
| Normalization | $\\int_{-\\infty}^{\\infty} |\\Psi|^2 dx = 1$ (particle must be *somewhere*) |

---

### Key Properties of Wave Functions

| Requirement | Reason |
|------------|--------|
| $\\Psi$ must be continuous | No jumps in probability |
| $\\Psi$ must be normalizable | Total probability = 1 |
| $\\Psi \\to 0$ as $x \\to \\pm\\infty$ | Particle can't be at infinity |
| $|\\Psi|^2 \\geq 0$ everywhere | Probability is never negative |

> 🔑 **Key Insight:** Quantum mechanics doesn't tell you WHERE a particle IS — it tells you where you're LIKELY to find it if you measure. Before measurement, the particle doesn't have a definite position.`
    },
    {
      id: 'quantumphenomena-p4-box',
      type: 'text' as const,
      content: `### Particle in a Box (Infinite Square Well)

The simplest quantum system: a particle confined between rigid walls at $x = 0$ and $x = L$.

---

### Boundary Conditions

$\\Psi(0) = 0$ and $\\Psi(L) = 0$ (particle cannot exist at or beyond walls).

Only specific wave functions satisfy these conditions — standing waves:

$$\\boxed{\\Psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\ldots}$$

---

### Quantized Energy Levels

$$\\boxed{E_n = \\frac{n^2 h^2}{8mL^2} = n^2 E_1}$$

| Level | Energy | Nodes (inside box) | Wavelength |
|-------|--------|-------------------|------------|
| $n = 1$ (ground) | $E_1$ | 0 | $2L$ |
| $n = 2$ | $4E_1$ | 1 | $L$ |
| $n = 3$ | $9E_1$ | 2 | $2L/3$ |
| $n = 4$ | $16E_1$ | 3 | $L/2$ |

---

### Critical Features

| Feature | Detail |
|---------|--------|
| **Zero-point energy** | $E_1 \\neq 0$! A confined particle can NEVER have zero energy (uncertainty principle) |
| **Quantization** | Only discrete energies are allowed — not continuous |
| **Nodes** | $n-1$ nodes for state $n$; probability of finding particle at a node is ZERO |
| **Energy spacing** | $\\Delta E$ increases with $n$: $E_2 - E_1 = 3E_1$, $E_3 - E_2 = 5E_1$ |
| **Size dependence** | $E \\propto 1/L^2$ — smaller box → higher energy |
| **Mass dependence** | $E \\propto 1/m$ — heavier particle → lower energy levels |

---

### Probability Distribution for $n = 1$

$|\\Psi_1|^2 = (2/L)\\sin^2(\\pi x/L)$

The particle is **most likely** found at the CENTER ($x = L/2$) and has **zero probability** at the walls.

For $n = 2$: most likely at $x = L/4$ and $x = 3L/4$, with a **node at the center** (zero probability!).

> ⚠️ **AP Trap:** Students often think the ground state has zero energy. It doesn't! $E_1 = h^2/(8mL^2) > 0$. This "zero-point energy" is a direct consequence of the uncertainty principle — confining a particle forces $\\Delta p > 0$, which requires non-zero kinetic energy.`
    },
    {
      id: 'quantumphenomena-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$|\\Psi(x)|^2$ represents:',
            options: ['The energy of the particle at position $x$', 'The probability density of finding the particle at $x$', 'The velocity of the particle', 'The force on the particle'],
            correctAnswer: 1,
            explanation: 'Born interpretation: $|\\Psi|^2$ gives the probability density. Integrate over a region to get the probability of finding the particle there.'
          },
          {
            question: 'For a particle in a box, the ground state energy ($n = 1$) is:',
            options: ['Zero', '$h^2/(8mL^2)$', '$h^2/(2mL^2)$', '$4h^2/(8mL^2)$'],
            correctAnswer: 1,
            explanation: '$E_1 = h^2/(8mL^2)$. The ground state has non-zero energy (zero-point energy) — the particle can never be completely at rest.'
          },
          {
            question: 'If the box length $L$ is halved, the ground state energy:',
            options: ['Halves', 'Doubles', 'Quadruples', 'Stays the same'],
            correctAnswer: 2,
            explanation: '$E \\propto 1/L^2$. Halving $L$ quadruples the energy. Tighter confinement = higher energy (uncertainty principle!).'
          },
          {
            question: 'For the $n = 2$ state of a particle in a box, the probability of finding the particle at $x = L/2$ is:',
            options: ['Maximum', 'Zero', '50%', '25%'],
            correctAnswer: 1,
            explanation: '$\\Psi_2 = \\sqrt{2/L}\\sin(2\\pi x/L)$. At $x = L/2$: $\\sin(\\pi) = 0$. This is a node — zero probability density.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p4-input',
      type: 'input-boxes' as const,
      content: `
**Particle in a Box Problems** 🧮

An electron confined in a box of length $L = 1$ nm.

**1)** Ground state energy $E_1 = h^2/(8m_e L^2)$? (in eV, round to 2 decimal places)

**2)** Energy of the $n = 3$ level? (in eV, round to 1 decimal place)

**3)** Wavelength of photon emitted in $n=3 \\to n=1$ transition? (in nm, round to 1 decimal place)

**4)** If the box were 10× larger ($L = 10$ nm), what would $E_1$ be? (in eV, use scientific notation)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.38', '3.4', '157.7', '3.8e-3'],
        hint1: '$E_1 = (6.63 \\times 10^{-34})^2/(8 \\times 9.11 \\times 10^{-31} \\times (10^{-9})^2)$',
        hint2: '$E_3 = 9E_1$',
        hint3: '$\\lambda = hc/\\Delta E = 1240/(E_3 - E_1)$',
        hint4: '$E \\propto 1/L^2$, so 10× larger box → 100× smaller energy',
        explanation: '1) $E_1 ≈ 6.02 \\times 10^{-20}$ J $≈ 0.38$ eV. 2) $E_3 = 9(0.38) ≈ 3.4$ eV. 3) $\\Delta E = 3.4 - 0.38 = 3.02$ eV, $\\lambda = 1240/3.02 ≈ 410.6$ nm (visible violet!). 4) $E_1 = 0.38/100 = 0.0038$ eV $= 3.8 \\times 10^{-3}$ eV — larger box means much smaller energy.'
      }
    }
  ]
};