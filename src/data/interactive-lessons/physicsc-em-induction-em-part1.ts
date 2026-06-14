export const physCEMInductionPart1Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Faraday’s Law of Induction

**Part 1 of 7 — Changing Flux Creates EMF**

---

### Faraday’s Law

$$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$$

For $N$ loops: $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$

---

### Lenz’s Law

The induced current flows in a direction that **opposes** the change in flux that caused it.

> 🔑 The negative sign in Faraday's law encodes Lenz's law. Nature resists changes in magnetic flux.

---

### Ways to Change Flux

$\\Phi_B = BA\\cos\\theta$ can change by changing:
1. **$B$** — changing the field strength
2. **$A$** — changing the area of the loop
3. **$\\theta$** — rotating the loop`
    },
    {
      id: 'physicsc-em-induction-em-p1-lenz-method',
      type: 'text' as const,
      content: `### Applying Lenz's Law — A Reliable Procedure

The minus sign in Faraday's law is bookkeeping; in practice you find the **direction** of the induced current with this three-step method:

1. **Determine the existing flux** through the loop (which way does $\\vec{B}$ point through it, and is the flux into or out of the page?).
2. **Decide whether that flux is increasing or decreasing.**
3. **The induced current opposes the change:** if flux is increasing, the induced current creates field *opposing* it inside the loop; if decreasing, the induced current *reinforces* it. Use the right-hand rule to convert "field direction inside loop" into a current direction.

**Energy interpretation.** Lenz's law is conservation of energy in disguise. If the induced current *aided* the change, the flux would grow without bound and generate energy from nothing. The opposition guarantees you must do work against the induced effects — that mechanical work becomes the electrical energy dissipated as $I^2R$.

> Common pitfall: a *constant* large flux induces **nothing**. Only $\\frac{d\\Phi_B}{dt} \\neq 0$ produces an EMF. Always look for what is *changing*.`
    },
    {
      id: 'physicsc-em-induction-em-p1-worked',
      type: 'text' as const,
      content: `### Worked Example — Differentiating the Flux

A square loop of side $a = 0.20\\text{ m}$ lies flat (its plane perpendicular to $\\vec{B}$) in a region where the field grows in time as $B(t) = B_0 + kt^2$, with $B_0 = 0.10\\text{ T}$ and $k = 0.50\\text{ T/s}^2$. Find the induced EMF magnitude at $t = 3.0\\text{ s}$.

**Step 1 — Write the flux.** With $\\theta = 0$, $\\Phi_B = B(t)\\,A = (B_0 + kt^2)a^2$.

**Step 2 — Differentiate.** Since $a^2$ is constant, $\\frac{d\\Phi_B}{dt} = a^2\\frac{dB}{dt} = a^2(2kt)$.

**Step 3 — Apply Faraday's law.** $|\\mathcal{E}| = \\left|\\frac{d\\Phi_B}{dt}\\right| = a^2(2kt)$.

**Step 4 — Substitute.** $|\\mathcal{E}| = (0.20)^2 (2)(0.50)(3.0) = (0.04)(3.0) = 0.12\\text{ V}$.

Notice the EMF grows **linearly** in time even though the field grows quadratically — differentiation drops the power by one. The minus sign in $\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$ tells us the induced current opposes the *increase* in $B$.`
    },
    {
      id: 'physicsc-em-induction-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lenz’s law ensures that the induced EMF:',
            options: ['Enhances the flux change', 'Opposes the flux change', 'Is always zero', 'Is always positive'],
            correctAnswer: 1,
            explanation: 'Lenz’s law: induced EMF opposes the change that produced it (conservation of energy).'
          },
          {
            question: 'A loop in a uniform, constant $B$ field has induced EMF:',
            options: ['$\\mathcal{E} = BA$', '$\\mathcal{E} = B/A$', '$\\mathcal{E} = 0$', '$\\mathcal{E} = BA\\cos\\theta$'],
            correctAnswer: 2,
            explanation: 'If $B$, $A$, and $\\theta$ are all constant, $d\\Phi_B/dt = 0$, so $\\mathcal{E} = 0$.'
          },
          {
            question: 'A coil of $N = 100$ turns and area $0.02\\text{ m}^2$ sits in a field changing at $\\frac{dB}{dt} = 0.50\\text{ T/s}$ (with $\\vec{B}$ along the coil axis). The magnitude of the induced EMF is:',
            options: ['$0.10$ V', '$1.0$ V', '$2.0$ V', '$10$ V'],
            correctAnswer: 1,
            explanation: '$|\\mathcal{E}| = N A \\frac{dB}{dt} = 100(0.02)(0.50) = 1.0$ V.'
          },
          {
            question: 'The magnetic flux through a loop is given by $\\Phi_B(t) = 4t^3 - 2t$ (in webers, $t$ in seconds). The magnitude of the EMF at $t = 1.0\\text{ s}$ is:',
            options: ['$2$ V', '$6$ V', '$10$ V', '$12$ V'],
            correctAnswer: 2,
            explanation: '$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -(12t^2 - 2)$. At $t=1$: $|\\mathcal{E}| = |12 - 2| = 10$ V.'
          },
          {
            question: 'A bar magnet is pushed north-pole-first toward a conducting loop. The induced current in the loop, viewed from the magnet, flows so as to:',
            options: ['Create a north pole facing the magnet (repel it)', 'Create a south pole facing the magnet (attract it)', 'Produce no magnetic pole', 'Reverse direction continuously'],
            correctAnswer: 0,
            explanation: 'By Lenz’s law the loop opposes the increasing flux, so it presents a north pole to the incoming north pole, repelling the magnet.'
          },
          {
            question: 'The flux through a loop varies as $\\Phi_B(t) = \\Phi_0 \\sin(\\omega t)$. The induced EMF is:',
            options: ['$-\\Phi_0 \\sin(\\omega t)$', '$-\\Phi_0 \\omega \\cos(\\omega t)$', '$\\Phi_0 \\omega^2 \\sin(\\omega t)$', '$-\\Phi_0/\\omega \\cos(\\omega t)$'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -\\Phi_0\\omega\\cos(\\omega t)$ — the EMF leads the flux by a quarter cycle.'
          }
        ]
      }
    }
  ]
};
