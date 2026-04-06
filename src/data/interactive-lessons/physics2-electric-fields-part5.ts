export const physics2ElectricFieldsPart5Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `
# 🔋 Potential Energy & Work

**Part 5 of 7 — Energy Stored in Charge Configurations**

Electric potential ($V$) tells us energy per unit charge. Now let's talk about the **actual energy** stored when charges interact.
      `
    },
    {
      id: 'ef5-pe-two-charges',
      type: 'text' as const,
      content: `
## Electric Potential Energy: Two Charges

The electric potential energy of a two-charge system is:

$$U = \\frac{kq_1 q_2}{r}$$

Key features:
- **Signs matter!** Unlike $F = k|q_1 q_2|/r^2$, the PE formula keeps the signs
- **Like charges** ($q_1 q_2 > 0$) → $U > 0$ → energy stored (repulsion)
- **Unlike charges** ($q_1 q_2 < 0$) → $U < 0$ → energy released (attraction)
- **Reference:** $U = 0$ at $r = \\infty$ (charges infinitely far apart)

### Physical Meaning

| System | $U$ | Meaning |
|:---:|:---:|:---:|
| Two positive charges close | $U > 0$ | You did work to push them together |
| Two opposite charges close | $U < 0$ | They pulled together spontaneously, releasing energy |
| Charges at infinity | $U = 0$ | No interaction energy |
      `
    },
    {
      id: 'ef5-work-energy',
      type: 'text' as const,
      content: `
## Work-Energy Theorem for Charges

The work done by the electric force on a charge moving from A to B:

$$W_{\\text{electric}} = -\\Delta U = -(U_B - U_A) = U_A - U_B$$

Equivalently, using potential:

$$W = q(V_A - V_B) = -q\\Delta V$$

### Conservation of Energy

$$KE_A + U_A = KE_B + U_B$$

This is the same energy conservation from mechanics, just with electric PE instead of gravitational PE.

### Electron-Volt (eV)

The **electron-volt** is the energy gained by a charge $e$ crossing 1 V of potential difference:

$$1\\ \\text{eV} = (1.6 \\times 10^{-19}\\ \\text{C})(1\\ \\text{V}) = 1.6 \\times 10^{-19}\\ \\text{J}$$

It's tiny in everyday terms, but perfectly sized for atomic/nuclear physics.
      `
    },
    {
      id: 'ef5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Energy & Work
      `,
      exercise: {
        questions: [
          {
            question: 'Two protons are held 0.01 m apart, then released. Which statement is correct?',
            options: [
              'They stay still because they have equal charge',
              'They fly apart; total KE gained = initial PE of the system',
              'They attract and collide',
              'Only one proton moves; the other stays fixed'
            ],
            correctAnswer: 1,
            explanation: 'Like charges repel. Initial PE = $kq^2/r > 0$. When released, this PE converts entirely to KE of both protons (conservation of energy). They fly apart.'
          },
          {
            question: 'An electron ($q = -e$) moves from $V = 100$ V to $V = 0$ V. The electron\'s kinetic energy:',
            options: [
              'Increases by 100 eV',
              'Decreases by 100 eV',
              'Stays the same',
              'Increases by 200 eV'
            ],
            correctAnswer: 1,
            explanation: '$\Delta V = 0 - 100 = -100$ V. $\Delta U = q\Delta V = (-e)(-100) = +100$ eV (PE increases). By energy conservation, $\Delta KE = -\Delta U = -100$ eV. The electron loses 100 eV of kinetic energy — moving from high V to low V is against the electric force for a negative charge.'
          },
          {
            question: 'The PE of a proton-electron pair at distance $r$ is:',
            options: [
              'Positive (repulsion)',
              'Negative (attraction)',
              'Zero (they cancel)',
              'Depends on which one is moving'
            ],
            correctAnswer: 1,
            explanation: '$U = k(+e)(-e)/r = -ke^2/r < 0$. Negative PE means the system is *bound* — you\'d need to add energy to separate them to infinity.'
          }
        ]
      }
    },
    {
      id: 'ef5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Energy Calculation Drill**

Two charges: $q_1 = +3\\ \\mu\\text{C}$ and $q_2 = -6\\ \\mu\\text{C}$, initially 0.30 m apart.

1) Initial PE of the system (in J, include sign)
2) They move to 0.10 m apart. New PE (in J)
3) Work done by the electric force during this move (in J, include sign)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-0.54', '-1.62', '1.08'],
        hint1: '$U = kq_1 q_2/r = (9 \\times 10^9)(3 \\times 10^{-6})(-6 \\times 10^{-6})/0.30$.',
        hint2: 'At 0.10 m: $U = (9 \\times 10^9)(3 \\times 10^{-6})(-6 \\times 10^{-6})/0.10$.',
        hint3: '$W = -\\Delta U = -(U_f - U_i) = U_i - U_f = -0.54 - (-1.62) = 1.08$ J. Positive work → the electric force pulls them together.',
        explanation: 'Initial: $U_i = (9 \\times 10^9)(-18 \\times 10^{-12})/0.30 = -0.54$ J. Final: $U_f = -162 \\times 10^{-3}/0.10 = -1.62$ J. $W = U_i - U_f = -0.54 + 1.62 = 1.08$ J. Positive work means the electric force *did* the pulling — the charges attract.'
      }
    },
    {
      id: 'ef5-speed-problem',
      type: 'text' as const,
      content: `
## Classic Problem: Finding Speed from PE

**Problem:** A proton is released from rest at a distance of $1.0 \\times 10^{-10}$ m from a fixed $+5e$ nucleus. What speed does the proton reach when it's very far away?

### Solution

Use conservation of energy: $KE_i + U_i = KE_f + U_f$

$$0 + \\frac{k(e)(5e)}{r_i} = \\frac{1}{2}m_p v^2 + 0$$

$$v = \\sqrt{\\frac{2k(5e^2)}{m_p r_i}}$$

$$v = \\sqrt{\\frac{2(9 \\times 10^9)(5)(1.6 \\times 10^{-19})^2}{(1.67 \\times 10^{-27})(1.0 \\times 10^{-10})}}$$

$$v = \\sqrt{\\frac{2(9 \\times 10^9)(5)(2.56 \\times 10^{-38})}{1.67 \\times 10^{-37}}}$$

$$v = \sqrt{\\frac{2.304 \\times 10^{-27}}{1.67 \\times 10^{-37}}} = \sqrt{1.38 \\times 10^{10}} \approx 1.2 \\times 10^{5}\ \\text{m/s}$$

This is about 120 km/s — fast, but well below the speed of light, so classical mechanics works fine here. Note: at even smaller distances ($\sim 10^{-15}$ m), classical calculations can yield speeds exceeding $c$, signaling that relativistic mechanics is needed ($KE = (\gamma - 1)m_p c^2$).

For AP Physics 2, if the answer exceeds $\\sim 10^7$ m/s, note that relativity is needed.
      `
    },
    {
      id: 'ef5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Three charges are arranged at the corners of a triangle: $+Q$, $+Q$, and $-Q$. Each pair is separated by $d$. The total PE of the system is:',
            options: [
              '$3kQ^2/d$',
              '$kQ^2/d$',
              '$-kQ^2/d$',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Three pairs: $(+Q)(+Q)$, $(+Q)(-Q)$, $(+Q)(-Q)$. Total: $U = kQ^2/d + (-kQ^2/d) + (-kQ^2/d) = -kQ^2/d$. The two attractive pairs outweigh the one repulsive pair.'
          },
          {
            question: 'A 2 μC charge is moved through a potential difference of +500 V. The work done by an external force is:',
            options: [
              '0.01 J',
              '1 mJ (the external force did positive work)',
              '−1 mJ',
              '250 J'
            ],
            correctAnswer: 1,
            explanation: 'Work by external force: $W_{\\text{ext}} = q\\Delta V = (2 \\times 10^{-6})(500) = 0.001$ J = 1 mJ. Moving a positive charge to higher potential requires positive work input.'
          }
        ]
      }
    }
  ]
}
