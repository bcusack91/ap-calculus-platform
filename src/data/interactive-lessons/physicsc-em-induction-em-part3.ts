export const physCEMInductionPart3Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p3-intro',
      type: 'text' as const,
      content: `# 🔗 Inductance

**Part 3 of 7 — Self and Mutual Inductance**

---

### Self-Inductance

$$\\mathcal{E} = -L\\frac{dI}{dt}$$

where $L$ is the inductance. Units: Henry (H)

For a solenoid: $L = \\mu_0 n^2 Al$

---

### Mutual Inductance

$$\\mathcal{E}_2 = -M\\frac{dI_1}{dt}$$

Two coils that share magnetic flux have mutual inductance $M$.

---

### Energy in an Inductor

$$U = \\frac{1}{2}LI^2$$

Energy density: $u = \\frac{B^2}{2\\mu_0}$

> 🔑 An inductor stores energy in its magnetic field, just as a capacitor stores energy in its electric field.`
    },
    {
      id: 'physicsc-em-induction-em-p3-derive-L',
      type: 'text' as const,
      content: `### Where Does $L = \\mu_0 n^2 A l$ Come From?

Inductance is defined by the flux linkage per unit current: $L = \\frac{N\\Phi_B}{I}$.

For a solenoid of $n$ turns per meter and length $l$, the total turns are $N = nl$. The interior field is $B = \\mu_0 n I$, so the flux through **one** turn is $\\Phi_B = BA = \\mu_0 n I A$. Therefore

$L = \\frac{N\\Phi_B}{I} = \\frac{(nl)(\\mu_0 n I A)}{I} = \\mu_0 n^2 A l.$

The $n^2$ appears because *each* of the $\\sim n$ turns both produces flux and links it.

### The Capacitor ↔ Inductor Dictionary

| Capacitor | Inductor |
|-----------|----------|
| Stores **electric** field energy | Stores **magnetic** field energy |
| $U = \\frac{1}{2}\\frac{q^2}{C}$ | $U = \\frac{1}{2}LI^2$ |
| Resists change in **voltage** | Resists change in **current** |
| $I = C\\frac{dV}{dt}$ | $V = L\\frac{dI}{dt}$ |
| $u = \\frac{1}{2}\\varepsilon_0 E^2$ | $u = \\frac{B^2}{2\\mu_0}$ |

This duality is why RL and RC circuits share the same exponential mathematics — and why LC circuits oscillate.`
    },
    {
      id: 'physicsc-em-induction-em-p3-worked',
      type: 'text' as const,
      content: `### Worked Example — Energy Stored via Integration

A solenoid has inductance $L = 4.0\\text{ mH}$. The current is increased from zero according to $I(t) = (5.0\\text{ A/s})\\,t$. (a) Find the self-induced (back) EMF. (b) Find the energy stored at $t = 2.0\\text{ s}$ by integrating the power delivered.

**Part (a) — Back EMF.** $\\mathcal{E} = -L\\frac{dI}{dt} = -(4.0\\times10^{-3})(5.0) = -2.0\\times10^{-2}\\text{ V} = -20\\text{ mV}$. It is constant because $\\frac{dI}{dt}$ is constant.

**Part (b) — Energy from the power integral.** The instantaneous power the source delivers to the inductor is $P = \\mathcal{E}_{\\text{ext}} I = \\left(L\\frac{dI}{dt}\\right)I$. The stored energy is

$U = \\int_0^t P\\,dt = \\int_0^I L\\frac{dI}{dt}\\,I\\,dt = \\int_0^I L\\,I\\,dI = \\tfrac{1}{2}LI^2.$

This derivation is *why* $U = \\frac{1}{2}LI^2$. At $t = 2.0\\text{ s}$, $I = (5.0)(2.0) = 10\\text{ A}$, so

$U = \\tfrac{1}{2}(4.0\\times10^{-3})(10)^2 = \\tfrac{1}{2}(4.0\\times10^{-3})(100) = 0.20\\text{ J}.$`
    },
    {
      id: 'physicsc-em-induction-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The energy stored in an inductor is:',
            options: ['$LI$', '$LI^2$', '$\\frac{1}{2}LI^2$', '$\\frac{1}{2}LI$'],
            correctAnswer: 2,
            explanation: '$U = \\frac{1}{2}LI^2$, analogous to $\\frac{1}{2}CV^2$ for a capacitor.'
          },
          {
            question: 'A $50\\text{ mH}$ inductor carries a current that changes at $\\frac{dI}{dt} = 4.0\\text{ A/s}$. The magnitude of the self-induced EMF is:',
            options: ['$0.20$ V', '$2.0$ V', '$12.5$ V', '$0.0125$ V'],
            correctAnswer: 0,
            explanation: '$|\\mathcal{E}| = L\\frac{dI}{dt} = (0.050)(4.0) = 0.20$ V.'
          },
          {
            question: 'A long solenoid has $n$ turns per meter, cross-sectional area $A$, and length $l$. Its self-inductance is:',
            options: ['$\\mu_0 n A l$', '$\\mu_0 n^2 A l$', '$\\mu_0 n^2 A / l$', '$\\mu_0 n A / l$'],
            correctAnswer: 1,
            explanation: '$L = \\mu_0 n^2 A l$. The $n^2$ arises because flux per turn scales with $n$ and is linked by $nl$ turns.'
          },
          {
            question: 'The energy density stored in a magnetic field is:',
            options: ['$\\frac{B^2}{2\\mu_0}$', '$\\frac{\\mu_0 B^2}{2}$', '$\\frac{1}{2}\\mu_0 B$', '$\\frac{B}{2\\mu_0}$'],
            correctAnswer: 0,
            explanation: '$u = \\frac{B^2}{2\\mu_0}$, the magnetic analog of the electric energy density $u = \\frac{1}{2}\\varepsilon_0 E^2$.'
          },
          {
            question: 'Two coils have mutual inductance $M = 0.30\\text{ H}$. If the current in coil 1 changes at $2.0\\text{ A/s}$, the EMF induced in coil 2 has magnitude:',
            options: ['$0.15$ V', '$0.60$ V', '$0.30$ V', '$6.0$ V'],
            correctAnswer: 1,
            explanation: '$|\\mathcal{E}_2| = M\\left|\\frac{dI_1}{dt}\\right| = (0.30)(2.0) = 0.60$ V.'
          },
          {
            question: 'If the current in an inductor is tripled, the stored energy:',
            options: ['Triples', 'Increases by a factor of 9', 'Increases by a factor of 6', 'Stays the same'],
            correctAnswer: 1,
            explanation: '$U = \\frac{1}{2}LI^2 \\propto I^2$. Tripling $I$ multiplies $U$ by $3^2 = 9$.'
          }
        ]
      }
    }
  ]
};
