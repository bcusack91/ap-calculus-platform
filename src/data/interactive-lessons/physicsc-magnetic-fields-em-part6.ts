export const physCEMMagFieldsPart6Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Magnetic Fields Workshop

**Part 6 of 7 — Strategies**

---

### Choosing the Right Law

| Situation | Use |
|-----------|-----|
| Field from a short wire segment | Biot-Savart |
| Field with high symmetry | Ampere’s law |
| Force on a moving charge | $\\vec{F} = q\\vec{v} \\times \\vec{B}$ |
| Force on a current-carrying wire | $\\vec{F} = I\\vec{L} \\times \\vec{B}$ |
| Torque on a loop | $\\tau = NIAB\\sin\\theta$ |`
    },
    {
      id: 'physicsc-magnetic-fields-em-p6-decision',
      type: 'text' as const,
      content: `### Field vs. Force — Don't Mix Them Up

Magnetic problems split into two families. Identify which you are in **first**:

**Family A — Find the FIELD a current creates.**
- High symmetry (infinite wire, solenoid, toroid, thick wire) → **Ampère's law**.
- Low symmetry (finite segment, arc, off-axis point) → **Biot-Savart integral**.

**Family B — Find the FORCE/TORQUE on something in a known field.**
- Point charge → $\\vec{F} = q\\vec{v}\\times\\vec{B}$.
- Current-carrying wire → $\\vec{F} = I\\vec{L}\\times\\vec{B}$.
- Current loop → torque $\\vec{\\tau} = \\vec{\\mu}\\times\\vec{B}$, with $\\vec{\\mu} = NI A\\hat{n}$.

**Two-step problems** (like parallel wires) chain them: use Family A to get one wire's field, then Family B to get the force on the other. The force per length between long parallel wires, $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$, is the canonical example — same direction currents attract, opposite repel.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p6-worked',
      type: 'text' as const,
      content: `### Worked Example — Choosing and Combining Tools

A long straight wire carries $I_1 = 6.0\\text{ A}$. A second long parallel wire, a distance $d = 0.030\\text{ m}$ away, carries $I_2 = 4.0\\text{ A}$ in the same direction over a length $L = 1.5\\text{ m}$. Find the force between them and its direction.

**Step 1 — Field of wire 1 at wire 2 (Ampère / standard result).** $B_1 = \\frac{\\mu_0 I_1}{2\\pi d} = \\frac{(4\\pi\\times10^{-7})(6.0)}{2\\pi(0.030)} = \\frac{(2\\times10^{-7})(6.0)}{0.030} = 4.0\\times10^{-5}\\text{ T}$.

**Step 2 — Force on wire 2 (force-on-current law).** $F = B_1 I_2 L = (4.0\\times10^{-5})(4.0)(1.5) = 2.4\\times10^{-4}\\text{ N}$.

**Step 3 — Direction (right-hand rules).** $\\vec{B}_1$ at wire 2 points into the page (say), and $\\vec{F} = I_2\\vec{L}\\times\\vec{B}_1$ points toward wire 1: **parallel currents attract**.

**Takeaway — the decision tree:** use Ampère's law (or a memorized symmetric result) to get the *field*, then $\\vec{F} = I\\vec{L}\\times\\vec{B}$ for the *force*. Reserve the Biot-Savart integral for fields of finite or curved segments lacking symmetry.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To find the field near a finite curved wire, use:',
            options: ['Ampere’s law', 'Biot-Savart law', 'Coulomb’s law', 'Faraday’s law'],
            correctAnswer: 1,
            explanation: 'Biot-Savart works for any current configuration. Ampere’s law needs symmetry.'
          },
          {
            question: 'Two long parallel wires carry currents in OPPOSITE directions. They:',
            options: ['Attract', 'Repel', 'Feel no force', 'Rotate without translating'],
            correctAnswer: 1,
            explanation: 'Antiparallel currents repel; only same-direction (parallel) currents attract.'
          },
          {
            question: 'The force per unit length between two long parallel wires separated by $d$ is:',
            options: ['$\\frac{\\mu_0 I_1 I_2}{2\\pi d}$', '$\\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$', '$\\frac{\\mu_0 I_1 I_2 d}{2\\pi}$', '$\\frac{\\mu_0 (I_1 + I_2)}{2\\pi d}$'],
            correctAnswer: 0,
            explanation: '$\\frac{F}{L} = B_1 I_2 = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ — this relation historically defined the ampere.'
          },
          {
            question: 'To find the force on a single point charge moving through a known field, use:',
            options: ['$\\vec{F} = I\\vec{L}\\times\\vec{B}$', '$\\vec{F} = q\\vec{v}\\times\\vec{B}$', '$\\tau = NIAB\\sin\\theta$', '$\\mathcal{E} = -d\\Phi_B/dt$'],
            correctAnswer: 1,
            explanation: 'The magnetic force on a moving point charge is $\\vec{F} = q\\vec{v}\\times\\vec{B}$; the $I\\vec{L}\\times\\vec{B}$ form is its continuum (current) version.'
          },
          {
            question: 'Which law would you use FIRST to get the field of an infinitely long solenoid?',
            options: ['Biot-Savart integral', 'Ampère’s law (rectangular loop)', 'Gauss’s law for magnetism', 'Faraday’s law'],
            correctAnswer: 1,
            explanation: 'The high symmetry of an ideal solenoid makes Ampère’s law with a rectangular loop the efficient choice, giving $B = \\mu_0 nI$.'
          }
        ]
      }
    }
  ]
};
