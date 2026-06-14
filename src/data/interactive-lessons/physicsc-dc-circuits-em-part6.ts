export const physCEMCircuitsPart6Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p6-intro',
      type: 'text' as const,
      content: `# DC Circuits Workshop

**Part 6 of 7 — Strategies**

---

### Circuit Analysis Steps

1. **Simplify** — combine series/parallel resistors where possible
2. **Label** — assign current directions and loop directions
3. **Apply Kirchhoff's rules** — write junction and loop equations
4. **Solve** — system of equations for the unknowns
5. **Check** — verify signs and units

For RC circuits: identify charging vs. discharging, then find $\\tau = RC$. Remember the two limiting cases — at $t = 0^+$ an uncharged capacitor acts like a wire; as $t \\to \\infty$ a fully charged capacitor acts like an open switch.`
    },
    {
      id: 'physicsc-dc-circuits-em-p6-worked',
      type: 'text' as const,
      content: `### Worked Example — Energy Stored and Heat Dissipated in Charging

**Problem.** A capacitor $C$ is charged from $0$ to full charge through a resistor $R$ by a battery $\\mathcal{E}$. Using calculus, find (a) the total energy delivered by the battery, (b) the energy finally stored in the capacitor, and (c) the energy dissipated in $R$.

**Step 1 — Battery energy.** The battery pushes total charge $Q_f = C\\mathcal{E}$ at constant EMF $\\mathcal{E}$:

$W_{\\text{batt}} = \\mathcal{E}\\,Q_f = \\mathcal{E}(C\\mathcal{E}) = C\\mathcal{E}^2$

**Step 2 — Energy stored in the capacitor.**

$U_C = \\frac{1}{2}\\frac{Q_f^2}{C} = \\frac{1}{2}C\\mathcal{E}^2$

**Step 3 — Energy dissipated in $R$ by direct integration.** The charging current is $I(t) = (\\mathcal{E}/R)e^{-t/RC}$, so the resistor dissipates

$W_R = \\int_0^{\\infty} I^2 R\\,dt = \\int_0^{\\infty}\\frac{\\mathcal{E}^2}{R}\\,e^{-2t/RC}\\,dt$

**Step 4 — Evaluate the integral.** With $\\int_0^\\infty e^{-2t/RC}dt = RC/2$,

$W_R = \\frac{\\mathcal{E}^2}{R}\\cdot\\frac{RC}{2} = \\frac{1}{2}C\\mathcal{E}^2$

**Step 5 — Energy balance.** Indeed $W_{\\text{batt}} = U_C + W_R$, since $C\\mathcal{E}^2 = \\tfrac12 C\\mathcal{E}^2 + \\tfrac12 C\\mathcal{E}^2$.

**Takeaway.** Exactly half of the battery's energy ends up in the capacitor and half is dissipated as heat — *independent of $R$*. The integral of $I^2R$ is the rigorous way to see it.`
    },
    {
      id: 'physicsc-dc-circuits-em-p6-deepen',
      type: 'text' as const,
      content: `### Steady-State Analysis with Capacitors

Many AP problems show a resistor network *with a capacitor* and ask for the long-time (steady-state) behavior. The trick:

1. **Replace each fully-charged capacitor with an open circuit.** In DC steady state, $I = dq/dt = 0$ through the capacitor branch.
2. **Solve the remaining purely-resistive circuit** for currents and node voltages using series/parallel reduction or Kirchhoff.
3. **The capacitor voltage equals the voltage across whatever it is connected in parallel with**, computed from the resistive solution.
4. **Stored charge** then follows from $Q = CV_C$ and stored energy from $U = \\tfrac12 C V_C^2$.

For the *initial* instant ($t = 0^+$) instead, replace an uncharged capacitor with a **wire** (short) and re-solve — that gives the maximum initial current.

> Two snapshots — "capacitor as wire" at $t=0^+$ and "capacitor as open" at $t\\to\\infty$ — bracket the whole transient.`
    },
    {
      id: 'physicsc-dc-circuits-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'In a circuit with two loops and three unknown currents, you need:',
            options: ['1 equation', '2 equations', '3 equations', '4 equations'],
            correctAnswer: 2,
            explanation: 'Three unknowns require three independent equations (a combination of junction and loop rules).'
          },
          {
            question: 'When a capacitor is charged through a resistor by a battery, the fraction of the battery’s total energy that is dissipated as heat in the resistor is:',
            options: ['$0$', '$1/4$', '$1/2$', '$1$'],
            correctAnswer: 2,
            explanation: 'Both $U_C$ and $W_R$ equal $\\tfrac12 C\\mathcal{E}^2$, so exactly half the battery energy ($C\\mathcal{E}^2$) is dissipated, regardless of $R$.'
          },
          {
            question: 'A capacitor stores $U = \\tfrac{1}{2}CV^2$. If the voltage across it triples, the stored energy:',
            options: ['Triples', 'Increases by a factor of 6', 'Increases by a factor of 9', 'Is unchanged'],
            correctAnswer: 2,
            explanation: 'Energy scales as $V^2$, so tripling $V$ multiplies $U$ by $3^2 = 9$.'
          },
          {
            question: 'In steady state (DC, long after switches close), the current through a capacitor is:',
            options: ['Maximum', '$\\mathcal{E}/R$', 'Zero', 'Equal to the battery current'],
            correctAnswer: 2,
            explanation: 'A fully charged capacitor blocks steady current; in DC steady state no current flows through the capacitor branch.'
          },
          {
            question: 'For the loop rule, the correct unit-consistent statement is that the sum around a closed loop of:',
            options: [
              'currents is zero',
              'potential differences is zero',
              'resistances is zero',
              'powers is zero'
            ],
            correctAnswer: 1,
            explanation: 'The loop rule sums potential differences (volts) to zero, reflecting energy conservation. Currents summing to zero is the junction rule.'
          },
          {
            question: 'In DC steady state, to find the voltage across a capacitor in a resistor network you should treat the capacitor as:',
            options: ['A wire (short)', 'An open circuit', 'A resistor equal to $R$', 'A battery of EMF $\\mathcal{E}$'],
            correctAnswer: 1,
            explanation: 'At steady state no current flows into the capacitor, so it behaves as an open circuit; its voltage equals the voltage across the element it parallels in the resistive solution.'
          }
        ]
      }
    }
  ]
};
