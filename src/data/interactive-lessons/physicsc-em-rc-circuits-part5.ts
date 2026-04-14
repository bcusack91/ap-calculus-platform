export const physCEMRCPart5Data = {
  topicSlug: "rc-circuits-physics-c-em",
  sections: [
    {
      id: 'rc5-intro',
      type: 'text' as const,
      content: `# RC Circuits — Part 5: Power and Energy in RC Circuits

Energy conservation in RC circuits connects to calculus through integration of power over time.

### Power dissipated in the resistor

$$P_R(t) = I^2 R$$

### During charging

$$P_R(t) = \\frac{\\mathcal{E}^2}{R}e^{-2t/\\tau}$$

Note the factor of $2$ in the exponent: since $P \\propto I^2$, the power decays **twice as fast** as the current.

### During discharging

$$P_R(t) = \\frac{V_0^2}{R}e^{-2t/\\tau}$$`
    },
    {
      id: 'rc5-mcq1',
      type: 'mcq' as const,
      question: 'At $t = \\tau$ during charging, the power dissipated in $R$ is what fraction of $P_0 = \\mathcal{E}^2/R$?',
      options: [
        '$e^{-2} \\approx 13.5\\%$',
        '$e^{-1} \\approx 36.8\\%$',
        '$1 - e^{-1} \\approx 63.2\\%$',
        '$50\\%$'
      ],
      correctAnswer: 0,
      explanation: '$P_R(\\tau) = P_0 e^{-2\\tau/\\tau} = P_0 e^{-2} \\approx 0.135 P_0$.'
    },
    {
      id: 'rc5-total-energy',
      type: 'text' as const,
      content: `## Total energy dissipated during charging

$$W_R = \\int_0^\\infty P_R\\,dt = \\int_0^\\infty \\frac{\\mathcal{E}^2}{R}e^{-2t/\\tau}\\,dt$$

$$= \\frac{\\mathcal{E}^2}{R}\\left[-\\frac{\\tau}{2}e^{-2t/\\tau}\\right]_0^\\infty = \\frac{\\mathcal{E}^2}{R}\\cdot\\frac{\\tau}{2} = \\frac{\\mathcal{E}^2 RC}{2R} = \\frac{1}{2}C\\mathcal{E}^2$$

### Energy budget during charging

| Destination | Energy | Fraction |
|:---|:---:|:---:|
| Stored in capacitor | $\\frac{1}{2}C\\mathcal{E}^2$ | $50\\%$ |
| Dissipated in $R$ | $\\frac{1}{2}C\\mathcal{E}^2$ | $50\\%$ |
| Supplied by battery | $C\\mathcal{E}^2$ | $100\\%$ |

**Remarkable result:** Exactly half the energy goes to the capacitor and half to the resistor — **regardless of $R$!** A larger $R$ means slower charging and lower current, but the same total heat.`
    },
    {
      id: 'rc5-mcq2',
      type: 'mcq' as const,
      question: 'A $1000$ μF capacitor is charged to $10$ V through a $100$ Ω resistor. How much energy is dissipated in the resistor during the entire charging process?',
      options: [
        '$50$ mJ',
        '$100$ mJ',
        '$25$ mJ',
        '$500$ mJ'
      ],
      correctAnswer: 0,
      explanation: '$W_R = \\frac{1}{2}C\\mathcal{E}^2 = \\frac{1}{2}(10^{-3})(100) = 0.05$ J $= 50$ mJ. This equals the energy stored: $U_C = \\frac{1}{2}CV^2 = 50$ mJ.'
    },
    {
      id: 'rc5-discharge-energy',
      type: 'text' as const,
      content: `## Energy during discharging

During discharge, all the capacitor's energy is dissipated in $R$:

$$W_R = \\int_0^\\infty \\frac{V_0^2}{R}e^{-2t/\\tau}\\,dt = \\frac{V_0^2}{R}\\cdot\\frac{\\tau}{2} = \\frac{V_0^2 C}{2} = \\frac{1}{2}CV_0^2 = U_0$$

This confirms energy conservation: the initial stored energy $U_0 = \\frac{1}{2}CV_0^2$ is entirely converted to heat.

### Power delivered by the battery (charging)

$$P_{\\text{batt}} = \\mathcal{E} I = \\frac{\\mathcal{E}^2}{R}e^{-t/\\tau}$$

Total energy delivered:

$$W_{\\text{batt}} = \\int_0^\\infty \\frac{\\mathcal{E}^2}{R}e^{-t/\\tau}\\,dt = \\frac{\\mathcal{E}^2}{R}\\cdot\\tau = \\frac{\\mathcal{E}^2 C}{1} \\cdot 1 = C\\mathcal{E}^2$$

Note: $P_{\\text{batt}}$ decays as $e^{-t/\\tau}$ while $P_R$ decays as $e^{-2t/\\tau}$—the battery power decays half as fast on a log scale.`
    },
    {
      id: 'rc5-mcq3',
      type: 'mcq' as const,
      question: 'Why is exactly $50\\%$ of the battery\'s energy dissipated as heat during RC charging, regardless of $R$?',
      options: [
        'Because the integral $\\int_0^\\infty I^2 R\\,dt = \\frac{1}{2}Q_{\\max}\\mathcal{E}$ always equals $\\frac{1}{2}C\\mathcal{E}^2$, which is independent of $R$',
        'Because $R$ cancels out when $\\tau = RC$ is substituted',
        'This is an approximation that only works for small $R$',
        'It depends on $R$; the 50% result is a coincidence'
      ],
      correctAnswer: 0,
      explanation: 'The total charge delivered is $Q_{\\max} = C\\mathcal{E}$, so the battery does $W = Q_{\\max}\\mathcal{E} = C\\mathcal{E}^2$. The capacitor stores $\\frac{1}{2}C\\mathcal{E}^2$. The difference is $\\frac{1}{2}C\\mathcal{E}^2$ dissipated in $R$ — always half, regardless of $R$.'
    },
    {
      id: 'rc5-instantaneous',
      type: 'text' as const,
      content: `## Instantaneous energy stored in the capacitor

$$U_C(t) = \\frac{Q(t)^2}{2C}$$

### During charging:

$$U_C(t) = \\frac{C\\mathcal{E}^2}{2}(1 - e^{-t/\\tau})^2$$

### Rate of energy storage:

$$\\frac{dU_C}{dt} = \\frac{Q}{C}\\cdot\\frac{dQ}{dt} = V_C \\cdot I = \\mathcal{E}(1-e^{-t/\\tau})\\cdot\\frac{\\mathcal{E}}{R}e^{-t/\\tau}$$

$$= \\frac{\\mathcal{E}^2}{R}e^{-t/\\tau}(1 - e^{-t/\\tau})$$

This rate is zero at $t = 0$ (no charge stored yet) and at $t = \\infty$ (current is zero). It peaks at $t = \\tau\\ln 2$, when $V_C = V_R = \\mathcal{E}/2$.`
    },
    {
      id: 'rc5-mcq4',
      type: 'mcq' as const,
      question: 'At what time is the rate of energy storage in the capacitor $dU_C/dt$ maximum during charging?',
      options: [
        '$t = \\tau\\ln 2$',
        '$t = \\tau$',
        '$t = 0$',
        '$t = 2\\tau$'
      ],
      correctAnswer: 0,
      explanation: '$dU_C/dt \\propto e^{-t/\\tau}(1 - e^{-t/\\tau})$. Maximize: set $d/dt = 0$. Let $x = e^{-t/\\tau}$: $f(x) = x - x^2$, max at $x = 1/2$, so $e^{-t/\\tau} = 1/2 \\implies t = \\tau\\ln 2$.'
    },
    {
      id: 'rc5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Quantity | Expression |
|:---|:---:|
| Power in $R$ | $P_R = I^2 R = (V_0^2/R)e^{-2t/\\tau}$ |
| Energy dissipated (charge) | $W_R = \\frac{1}{2}C\\mathcal{E}^2$ |
| Energy dissipated (discharge) | $W_R = \\frac{1}{2}CV_0^2 = U_0$ |
| Battery energy (charging) | $W_{\\text{batt}} = C\\mathcal{E}^2$ |
| Efficiency | $50\\%$ (always, regardless of $R$!) |
| Max $dU_C/dt$ | at $t = \\tau\\ln 2$ |

> **Key insight:** During charging, exactly half the battery's energy is dissipated as heat, regardless of resistance. This "50% rule" is a consequence of the linear relationship $V = Q/C$ and is unique to RC circuits.`
    }
  ]
};
