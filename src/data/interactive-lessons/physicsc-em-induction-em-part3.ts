export const physCEMInductionPart3Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p3-intro',
      type: 'text' as const,
      content: `# 🔗 Inductance

**Part 3 of 7 — Self-Inductance**

---

### Self-Inductance

$$\\mathcal{E} = -L\\frac{dI}{dt}$$

where $L$ is the inductance. Units: Henry (H)

For a solenoid: $L = \\mu_0 n^2 Al = \\dfrac{\\mu_0 N^2 A}{l}$

---

### What Sets $L$?

Inductance depends only on the conductor's physical properties: the number of turns, the length, the cross-sectional area, and the **permeability of the core**. Replacing an air core with iron (much larger permeability, $\\mu_{\\text{core}} \\gg \\mu_0$) raises $L$ dramatically. A straight connecting wire is modeled as having essentially **zero** inductance; a coil such as a solenoid is the circuit element that has significant inductance.

---

### Energy in an Inductor

$$U = \\frac{1}{2}LI^2$$

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
| Long time in DC: acts as an **open** switch | Long time in DC: acts as a **wire** |

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
            question: 'An air-core solenoid has $N = 200$ turns, length $0.10$ m, and cross-sectional area $1.0\\times10^{-4}\\text{ m}^2$. Its inductance is:',
            options: ['$5.0\\times10^{-5}$ H', '$2.5\\times10^{-7}$ H', '$5.0\\times10^{-7}$ H', '$5.0\\times10^{-3}$ H'],
            correctAnswer: 0,
            explanation: '$L = \\mu_0 N^2 A/l = (4\\pi\\times10^{-7})(200)^2(1.0\\times10^{-4})/0.10 \\approx 5.0\\times10^{-5}$ H. Using $N$ instead of $N^2$ gives $2.5\\times10^{-7}$ H, and multiplying by $l$ instead of dividing gives $5.0\\times10^{-7}$ H.'
          },
          {
            question: 'Which circuit element is normally modeled as having zero inductance?',
            options: ['A straight connecting wire', 'A long air-core solenoid', 'An iron-core coil', 'A many-turn circular coil'],
            correctAnswer: 0,
            explanation: 'Inductance comes from a conductor linking its own magnetic flux, which a coil does strongly and a straight wire does only negligibly; an iron core increases it further.'
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
