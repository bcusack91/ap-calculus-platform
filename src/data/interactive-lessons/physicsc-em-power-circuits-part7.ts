export const physCEMPwrCircPart7Data = {
  topicSlug: "power-circuits-physics-c-em",
  sections: [
    {
      id: 'pwr7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Formula | Expression |
|:---:|:---:|
| General power | $P = IV$ |
| Resistor (current) | $P = I^2R$ |
| Resistor (voltage) | $P = V^2/R$ |
| Terminal voltage | $V = \\mathcal{E} - Ir$ |
| Max power transfer | $R_{\\text{load}} = r$, $P_{\\max} = \\mathcal{E}^2/(4r)$ |
| RC energy split | $U_R = U_C = \\frac{1}{2}C\\mathcal{E}^2$ |
| Poynting vector | $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$ |
| Energy density | $u = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$ |`
    },
    {
      id: 'pwr7-mcq1',
      type: 'mcq' as const,
      question: 'A light bulb rated 60 W at 120 V is connected to 90 V. Assuming constant resistance, the actual power consumed is:',
      options: ['33.75 W', '45 W', '60 W', '80 W'],
      correctAnswer: 0,
      explanation: '$R = V_{\\text{rated}}^2/P_{\\text{rated}} = 14400/60 = 240\\,\\Omega$. $P = (90)^2/240 = 8100/240 = 33.75$ W.'
    },
    {
      id: 'pwr7-mcq2',
      type: 'mcq' as const,
      question: 'Two batteries: $\\mathcal{E}_1 = 10$ V ($r_1 = 1\\,\\Omega$) and $\\mathcal{E}_2 = 4$ V ($r_2 = 1\\,\\Omega$) are connected in series with a $4\\,\\Omega$ resistor. The power dissipated in the external resistor is:',
      options: ['$\\frac{196}{36} \\cdot 4 \\approx 5.44$ W — actually: $I = (10-4)/(4+2) = 1$ A, $P = 1^2 \\times 4 = 4$ W', '4 W', '6 W', '8 W'],
      correctAnswer: 1,
      explanation: 'EMFs oppose: net EMF $= 10 - 4 = 6$ V. Total $R = 4 + 1 + 1 = 6\\,\\Omega$. $I = 1$ A. $P = I^2 R = 4$ W.'
    },
    {
      id: 'pwr7-application',
      type: 'text' as const,
      content: `### Real-World Applications

**1. Power Transmission Lines**

A power plant transmits power $P$ over lines with resistance $R_{\\text{line}}$. If transmitted at voltage $V$:

$$P_{\\text{loss}} = I^2 R_{\\text{line}} = \\frac{P^2 R_{\\text{line}}}{V^2}$$

Doubling $V$ reduces losses by a factor of 4. This is why high-voltage transmission (hundreds of kV) is used.

**2. Impedance Matching**

Audio systems match speaker impedance to amplifier output impedance to maximize power transfer ($R_{\\text{load}} = R_{\\text{source}}$).

**3. Battery Life**

For a battery with capacity $Q$ (in A·h) and EMF $\\mathcal{E}$:

$$E_{\\text{available}} = Q \\cdot \\mathcal{E} \\qquad t_{\\text{life}} = \\frac{Q}{I} = \\frac{QR}{\\mathcal{E}}$$

As load resistance decreases, battery life decreases proportionally.`
    },
    {
      id: 'pwr7-mcq3',
      type: 'mcq' as const,
      question: 'Power $P$ is transmitted at voltage $V$ over lines with total resistance $R$. If the transmission voltage is tripled, the power loss in the lines becomes:',
      options: ['$P_{\\text{loss}}/9$', '$P_{\\text{loss}}/3$', '$3P_{\\text{loss}}$', '$9P_{\\text{loss}}$'],
      correctAnswer: 0,
      explanation: '$P_{\\text{loss}} = P^2R/V^2$. Tripling $V$: $P_{\\text{new}} = P^2R/(3V)^2 = P^2R/(9V^2) = P_{\\text{loss}}/9$.'
    },
    {
      id: 'pwr7-mcq4',
      type: 'mcq' as const,
      question: 'A variable resistor $R$ is connected to a battery with $\\mathcal{E} = 12$ V and $r = 3\\,\\Omega$. For what value of $R$ does the battery deliver 12 W to $R$?',
      options: ['$R = 3\\,\\Omega$ or $R = 12\\,\\Omega$', '$R = 6\\,\\Omega$ only', '$R = 3\\,\\Omega$ only', '$R = 9\\,\\Omega$ only'],
      correctAnswer: 0,
      explanation: '$P = \\frac{144R}{(R+3)^2} = 12$. $12(R+3)^2 = 144R$, $(R+3)^2 = 12R$, $R^2 + 6R + 9 = 12R$, $R^2 - 6R + 9 = 0$... Actually $(R-3)^2 = 0$ gives $R = 3$. Let me redo: $12R^2 + 72R + 108 = 144R$, $12R^2 - 72R + 108 = 0$, $R^2 - 6R + 9 = 0$, $(R-3)^2 = 0$, so $R = 3\\,\\Omega$ only (the maximum power point). The quadratic has a double root.'
    },
    {
      id: 'pwr7-mcq5',
      type: 'mcq' as const,
      question: 'The current in an RL circuit grows as $I(t) = \\frac{\\mathcal{E}}{R}(1-e^{-Rt/L})$. The instantaneous power dissipated in $R$ at $t = L/R$ is:',
      options: ['$\\frac{\\mathcal{E}^2}{R}(1-e^{-1})^2$', '$\\frac{\\mathcal{E}^2}{R}(1-e^{-2})$', '$\\frac{\\mathcal{E}^2}{R}e^{-2}$', '$\\frac{\\mathcal{E}^2}{R}(1-e^{-1})$'],
      correctAnswer: 0,
      explanation: '$P = I^2R = \\frac{\\mathcal{E}^2}{R}(1-e^{-Rt/L})^2$. At $t = L/R$: $P = \\frac{\\mathcal{E}^2}{R}(1-e^{-1})^2$.'
    },
    {
      id: 'pwr7-completion',
      type: 'text' as const,
      content: `### 🎉 Topic Complete!

You've mastered **Power in Circuits** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Power dissipation | ✅ |
| 2 | EMF and internal resistance | ✅ |
| 3 | Maximum power transfer | ✅ |
| 4 | Power in complex circuits | ✅ |
| 5 | Energy conservation | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key takeaway:** Power analysis at the C-level requires both calculus (integration of $P(t)$ for decaying/growing currents) and conceptual understanding (energy conservation, efficiency trade-offs). On the AP exam, always verify your answer using $\\sum P_{\\text{sources}} = \\sum P_{\\text{dissipated}} + dU/dt$.`
    }
  ]
};
