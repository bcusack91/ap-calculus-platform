export const physics2ResCircPart4Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p4-intro',
      type: 'text' as const,
      content: `# ⏱️ RC Circuits

**Part 4 of 7 — Charging & Discharging Capacitors**

---

### The RC Time Constant

When a capacitor charges or discharges through a resistor, it doesn't happen instantly — it follows an **exponential** curve characterized by the time constant:

$$\\boxed{\\tau = RC}$$

| $R$ | $C$ | $\\tau$ |
|-----|-----|--------|
| 1 kΩ | 1 μF | 1 ms |
| 10 kΩ | 100 μF | 1 s |
| 1 MΩ | 10 μF | 10 s |

---

### Charging a Capacitor (from $q = 0$)

$$\\boxed{q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)}$$

$$V_C(t) = \\mathcal{E}\\left(1 - e^{-t/RC}\\right)$$

$$I(t) = \\frac{\\mathcal{E}}{R}e^{-t/RC} = I_0 e^{-t/RC}$$

| At time | Charge | Voltage | Current |
|---------|--------|---------|---------|
| $t = 0$ | 0 | 0 | $\\mathcal{E}/R$ (maximum) |
| $t = \\tau$ | $0.632\\,Q_{max}$ | $0.632\\,\\mathcal{E}$ | $0.368\\,I_0$ |
| $t = 2\\tau$ | $0.865\\,Q_{max}$ | $0.865\\,\\mathcal{E}$ | $0.135\\,I_0$ |
| $t = 3\\tau$ | $0.950\\,Q_{max}$ | $0.950\\,\\mathcal{E}$ | $0.050\\,I_0$ |
| $t = 5\\tau$ | $0.993\\,Q_{max}$ | $\\approx \\mathcal{E}$ | $\\approx 0$ |

---

### Discharging a Capacitor (from $q = Q_0$)

$$\\boxed{q(t) = Q_0 e^{-t/RC}}$$

$$V_C(t) = V_0 e^{-t/RC}$$

$$I(t) = -\\frac{V_0}{R}e^{-t/RC}$$

(Negative sign: current flows opposite to charging direction)

> 🔑 **Key Insight:** After $5\\tau$, the capacitor is essentially fully charged (99.3%) or fully discharged (0.7%). For AP problems, $5\\tau$ = "done."`
    },
    {
      id: 'resistivitycircuitsadvanced-p4-analysis',
      type: 'text' as const,
      content: `### Understanding RC Behavior Physically

---

**Charging:** At $t = 0$, the capacitor is empty, so all the battery voltage drops across $R$ → maximum current. As charge builds on the capacitor, it opposes further charging (back-EMF increases), reducing current. Eventually $V_C = \\mathcal{E}$ and current stops.

**Discharging:** At $t = 0$, the capacitor acts like a battery, driving current through $R$. As charge drains, voltage drops, current decreases, and the process slows down — classic exponential decay.

---

### Energy in RC Circuits

| Quantity | Charging | Discharging |
|----------|----------|-------------|
| Energy stored in capacitor | $U = \\frac{1}{2}C\\mathcal{E}^2$ (when full) | Decreases to 0 |
| Energy from battery | $Q\\mathcal{E} = C\\mathcal{E}^2$ | N/A |
| Energy dissipated in $R$ | $\\frac{1}{2}C\\mathcal{E}^2$ | $\\frac{1}{2}CV_0^2$ |

> ⚠️ **Surprising Result:** During charging, exactly HALF the battery's energy goes to the capacitor and HALF is dissipated as heat in the resistor — regardless of $R$! A larger $R$ dissipates the same total energy, just more slowly.

---

### Voltage Division in RC Circuits

At any instant during charging:

$$V_R + V_C = \\mathcal{E}$$

$$V_R = \\mathcal{E}\\,e^{-t/RC}, \\quad V_C = \\mathcal{E}(1 - e^{-t/RC})$$

| Time | $V_R$ | $V_C$ | Sum |
|------|-------|-------|-----|
| $t = 0$ | $\\mathcal{E}$ | 0 | $\\mathcal{E}$ ✓ |
| $t = \\tau$ | $0.37\\mathcal{E}$ | $0.63\\mathcal{E}$ | $\\mathcal{E}$ ✓ |
| $t \\to \\infty$ | 0 | $\\mathcal{E}$ | $\\mathcal{E}$ ✓ |

---

### Comparing RC and LR Circuits

| Feature | RC Circuit | LR Circuit |
|---------|-----------|-----------|
| Time constant | $\\tau = RC$ | $\\tau = L/R$ |
| Stored energy | $\\frac{1}{2}CV^2$ | $\\frac{1}{2}LI^2$ |
| Charging curve | $V_C$ rises exponentially | $I$ rises exponentially |
| Discharging curve | $V_C$ decays exponentially | $I$ decays exponentially |

> 🔑 **AP Exam Strategy:** For "immediately after" questions ($t = 0^+$): uncharged capacitor = wire (short circuit); charged capacitor = open circuit (no current). "Long after" ($t \\to \\infty$): capacitor = open circuit (fully charged, no current).`
    },
    {
      id: 'resistivitycircuitsadvanced-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The time constant $\\tau$ of an RC circuit with $R = 10$ kΩ and $C = 100$ μF is:',
            options: ['1 s', '0.1 s', '10 s', '0.001 s'],
            correctAnswer: 0,
            explanation: '$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 1$ s.'
          },
          {
            question: 'After one time constant of charging from zero, the capacitor voltage reaches approximately:',
            options: ['37% of $\\mathcal{E}$', '50% of $\\mathcal{E}$', '63% of $\\mathcal{E}$', '100% of $\\mathcal{E}$'],
            correctAnswer: 2,
            explanation: '$V_C(\\tau) = \\mathcal{E}(1 - e^{-1}) ≈ 0.632\\mathcal{E}$. The 63% value is a must-know.'
          },
          {
            question: 'During charging, how much of the battery\'s energy is dissipated as heat in $R$?',
            options: ['None — all goes to capacitor', 'Depends on $R$', 'Exactly half', 'Exactly $R/(R+1)$'],
            correctAnswer: 2,
            explanation: 'Exactly half! Battery delivers $C\\mathcal{E}^2$, capacitor stores $\\frac{1}{2}C\\mathcal{E}^2$, resistor dissipates $\\frac{1}{2}C\\mathcal{E}^2$.'
          },
          {
            question: 'Just after closing a switch to charge an initially empty capacitor, the capacitor behaves like a:',
            options: ['Open circuit (no current)', 'Short circuit (wire)', 'Battery', 'Resistor'],
            correctAnswer: 1,
            explanation: 'Uncharged capacitor at $t = 0$: $V_C = 0$, so it acts like a wire. All voltage drops across $R$, giving maximum current $I_0 = \\mathcal{E}/R$.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p4-input',
      type: 'input-boxes' as const,
      content: `
**RC Circuit Problems** 🧮

A $50$ μF capacitor charges through a $200$ kΩ resistor from a $9$ V battery.

**1)** $\\tau = ?$ (in seconds)

**2)** $V_C$ at $t = 10$ s? (in V, round to 2 decimal places)

**3)** Time to reach 99% of 9 V? (in s, round to 1 decimal place)

**4)** Energy stored when fully charged? (in μJ, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['10', '5.69', '46.1', '2025'],
        hint1: '$\\tau = RC = 200 \\times 10^3 \\times 50 \\times 10^{-6}$',
        hint2: '$V_C = 9(1 - e^{-10/10}) = 9(1 - e^{-1})$',
        hint3: '$0.99 = 1 - e^{-t/\\tau}$, solve for $t$',
        hint4: '$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(50 \\times 10^{-6})(9)^2$',
        explanation: '1) $\\tau = 200000 \\times 0.00005 = 10$ s. 2) $V_C = 9(1 - 0.368) ≈ 5.69$ V. 3) $t = -10\\ln(0.01) ≈ 46.1$ s (about $4.6\\tau$). 4) $U = \\frac{1}{2}(50 \\times 10^{-6})(81) = 2025$ μJ.'
      }
    }
  ]
};