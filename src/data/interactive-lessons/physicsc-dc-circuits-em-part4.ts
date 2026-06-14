export const physCEMCircuitsPart4Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p4-intro',
      type: 'text' as const,
      content: `# RC Circuits

**Part 4 of 7 — Charging and Discharging Capacitors**

---

### Charging an RC Circuit

$q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)$

$I(t) = \\frac{\\mathcal{E}}{R}\\,e^{-t/RC}$

$V_C(t) = \\mathcal{E}\\left(1 - e^{-t/RC}\\right)$

---

### Discharging an RC Circuit

$q(t) = Q_0\\,e^{-t/RC}$

$I(t) = -\\frac{Q_0}{RC}\\,e^{-t/RC}$

---

### Time Constant

$\\tau = RC$

| Time | Charge (charging) | Charge (discharging) |
|------|-------------------|---------------------|
| $t = \\tau$ | 63.2% of max | 36.8% remaining |
| $t = 2\\tau$ | 86.5% of max | 13.5% remaining |
| $t = 5\\tau$ | 99.3% of max | $\\approx 0\\%$ remaining |

> After about 5 time constants, the circuit is essentially at steady state.`
    },
    {
      id: 'physicsc-dc-circuits-em-p4-worked',
      type: 'text' as const,
      content: `### Worked Example — Deriving the Discharge Curve from the Differential Equation

**Problem.** A capacitor $C$ initially holds charge $Q_0$. At $t=0$ it is connected across a resistor $R$ with no battery. Derive $q(t)$ and the current, then evaluate for $C = 2.0\\,\\mu\\text{F}$, $R = 5.0\\times 10^{5}\\,\\Omega$, $Q_0 = 8.0\\,\\mu\\text{C}$ at $t = 1.0\\,\\text{s}$.

**Step 1 — Apply the loop rule.** The capacitor voltage $q/C$ drives the current through $R$:

$\\frac{q}{C} - IR = 0, \\qquad I = -\\frac{dq}{dt}$

(The minus sign appears because the capacitor's charge *decreases* as current flows.)

**Step 2 — Form the differential equation.**

$\\frac{q}{C} = -R\\frac{dq}{dt} \\;\\Rightarrow\\; \\frac{dq}{dt} = -\\frac{q}{RC}$

**Step 3 — Separate variables and integrate.**

$\\int_{Q_0}^{q}\\frac{dq'}{q'} = -\\frac{1}{RC}\\int_0^{t}dt' \\;\\Rightarrow\\; \\ln\\!\\frac{q}{Q_0} = -\\frac{t}{RC}$

**Step 4 — Exponentiate.**

$q(t) = Q_0\\,e^{-t/RC}$

**Step 5 — Differentiate to get current.**

$I(t) = -\\frac{dq}{dt} = \\frac{Q_0}{RC}\\,e^{-t/RC}$

**Step 6 — Plug in numbers.** First the time constant:

$\\tau = RC = (5.0\\times10^{5})(2.0\\times10^{-6}) = 1.0\\,\\text{s}$

At $t = 1.0\\,\\text{s}$ we have $t/\\tau = 1$, so:

$q = (8.0\\,\\mu\\text{C})\\,e^{-1} = (8.0)(0.368) \\approx 2.9\\,\\mu\\text{C}$

**Takeaway.** Every RC result comes from the same move: loop rule gives a first-order separable ODE, and integration produces the exponential.`
    },
    {
      id: 'physicsc-dc-circuits-em-p4-deepen',
      type: 'text' as const,
      content: `### Reading the Exponential: Slopes, Half-Life, and Limits

**The time constant is a slope, not just a clock.** For discharge $q = Q_0 e^{-t/RC}$, the initial rate of change is

$\\left.\\frac{dq}{dt}\\right|_{t=0} = -\\frac{Q_0}{RC}$

If the capacitor kept discharging at that *initial* rate, it would reach zero in exactly one time constant $\\tau = RC$. The actual curve bends, so it instead reaches $36.8\\%$ at $t = \\tau$.

**Half-life.** The time to fall to half the charge satisfies $\\tfrac12 = e^{-t_{1/2}/RC}$, giving

$t_{1/2} = RC\\ln 2 \\approx 0.693\\,RC$

**The two limits worth memorizing:**
- At $t = 0^+$: an *uncharged* capacitor acts like a **wire** (max current); a *charged* one acts like a battery.
- As $t \\to \\infty$: a fully charged capacitor acts like an **open switch** (no current).

> Sketching the tangent line at $t=0$ and marking the $\\tau$, $2\\tau$, $5\\tau$ gridlines turns any RC problem into a quick graph.`
    },
    {
      id: 'physicsc-dc-circuits-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'The time constant $\\tau$ of an RC circuit is:',
            options: ['$R/C$', '$RC$', '$R + C$', '$1/(RC)$'],
            correctAnswer: 1,
            explanation: '$\\tau = RC$, which has units of seconds: $\\Omega \\cdot F = (V/A)(C/V) = C/A = s$.'
          },
          {
            question: 'After one time constant of charging, the capacitor charge is at:',
            options: ['37% of max', '50% of max', '63% of max', '100% of max'],
            correctAnswer: 2,
            explanation: '$q(\\tau) = C\\mathcal{E}(1 - e^{-1}) = C\\mathcal{E}(1 - 0.368) = 0.632\\,C\\mathcal{E}$, about 63.2%.'
          },
          {
            question: 'A discharging capacitor obeys $q(t) = Q_0 e^{-t/RC}$. The magnitude of the current $|I| = |dq/dt|$ at $t = 0$ is:',
            options: ['$0$', '$Q_0/RC$', '$Q_0 RC$', '$Q_0/R$'],
            correctAnswer: 1,
            explanation: '$dq/dt = -(Q_0/RC)e^{-t/RC}$; at $t=0$ the exponential is $1$, so $|I| = Q_0/RC$. This equals the initial capacitor voltage $Q_0/C$ divided by $R$.'
          },
          {
            question: 'In a charging RC circuit, immediately after the switch closes ($t = 0^+$), an initially uncharged capacitor behaves like:',
            options: ['An open circuit', 'A wire (short)', 'A battery', 'A second resistor equal to $R$'],
            correctAnswer: 1,
            explanation: 'At $t=0^+$ the capacitor has zero voltage, so it acts like a short; the current is maximal, $I_0 = \\mathcal{E}/R$.'
          },
          {
            question: 'After a very long time ($t \\to \\infty$) in a charging RC circuit, the current through the capacitor branch approaches:',
            options: ['$\\mathcal{E}/R$', 'Infinity', 'Zero', '$\\mathcal{E}/(2R)$'],
            correctAnswer: 2,
            explanation: 'As $t \\to \\infty$, $e^{-t/RC} \\to 0$, so $I = (\\mathcal{E}/R)e^{-t/RC} \\to 0$. The fully charged capacitor blocks steady current (acts as an open circuit).'
          },
          {
            question: 'If both $R$ and $C$ are doubled, the time constant $\\tau$:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Is unchanged'],
            correctAnswer: 1,
            explanation: '$\\tau = RC$. Doubling each factor multiplies the product by $2 \\times 2 = 4$.'
          },
          {
            question: 'A discharging capacitor falls to half its initial charge after a time equal to:',
            options: ['$RC$', '$RC\\ln 2 \\approx 0.69\\,RC$', '$2RC$', '$RC/2$'],
            correctAnswer: 1,
            explanation: 'Set $\\tfrac12 = e^{-t/RC}$, so $t_{1/2} = RC\\ln 2 \\approx 0.693\\,RC$. The half-life is a bit less than one time constant.'
          }
        ]
      }
    }
  ]
};
