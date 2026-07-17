export const physics2ResCircPart7Data = {
  topicSlug: 'resistivity-circuits-advanced',
  sections: [
    {
      id: 'resistivitycircuitsadvanced-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Master Equation Reference

| Topic | Equation | Key Insight |
|-------|----------|-------------|
| Resistivity | $R = \\rho L/A$ | Intrinsic property of material + geometry |
| Temperature | $R(T) = R_0[1 + \\alpha(T-T_0)]$ | Metals: $\\alpha > 0$; semiconductors: $\\alpha < 0$ |
| Drift velocity | $I = nqv_d A$ | Very slow (~mm/s), but signal is fast |
| Ohm's law | $V = IR$ | Macroscopic; $J = \\sigma E$ microscopic |
| Series $R$ | $R_{eq} = R_1 + R_2 + \\cdots$ | Same current, voltage adds |
| Parallel $R$ | $1/R_{eq} = 1/R_1 + 1/R_2 + \\cdots$ | Same voltage, current adds |
| KCL (junction) | $\\sum I_{in} = \\sum I_{out}$ | Charge conservation |
| KVL (loop) | $\\sum \\Delta V = 0$ | Energy conservation |
| Power | $P = IV = I^2R = V^2/R$ | Use $I^2R$ for series, $V^2/R$ for parallel |
| Internal resistance | $V_{term} = \\mathcal{E} - Ir$ | Real battery voltage drops under load |
| RC charging | $V_C = \\mathcal{E}(1-e^{-t/RC})$ | 63% at $\\tau$, 99% at $5\\tau$ |
| RC discharging | $V_C = V_0 e^{-t/RC}$ | 37% remaining at $\\tau$ |
| Time constant | $\\tau = RC$ | — |
| Capacitor energy | $U = \\frac{1}{2}CV^2$ | — |
| Wheatstone balance | $R_1 R_4 = R_2 R_3$ | Zero galvanometer current |`
    },
    {
      id: 'resistivitycircuitsadvanced-p7-mistakes',
      type: 'text' as const,
      content: `### Common AP Exam Mistakes

| Mistake | Correction |
|---------|-----------|
| Using wrong power formula for circuit type | Series → $P = I^2R$; Parallel → $P = V^2/R$ |
| "Higher rated bulb is always brighter" | Only true in parallel! In series, the higher-rated bulb (lower $R$) is dimmer |
| Forgetting that $R \\propto d^{-2}$ (not $d^{-1}$) | Area = $\\pi r^2 \\propto d^2$, so $R \\propto 1/d^2$ |
| Confusing $\\tau$ with "fully charged" time | $\\tau$ = 63% charged; $5\\tau$ ≈ fully charged |
| Ignoring internal resistance | Use $V_{term} = \\mathcal{E} - Ir$ for real batteries |
| Wrong sign convention in KVL | Going WITH current through $R$: $-IR$. Against: $+IR$ |
| Adding $R$ in parallel like series | $R_{parallel} < R_{smallest}$. Use reciprocal formula |

---

### Circuit Behavior Summary Tables

**What happens when you add a resistor in PARALLEL to an existing circuit?**

| Quantity | Change | Why |
|----------|--------|-----|
| $R_{total}$ | Decreases | More paths for current |
| $I_{total}$ | Increases | $I = V/R$, $R$ decreased |
| $V_{battery}$ drops | Increases (more $Ir$) | More current through internal $r$ |
| Other branch currents | Stay the same | Their $V$ and $R$ unchanged |

**What happens when you REMOVE a resistor from a parallel circuit?**

| Quantity | Change | Why |
|----------|--------|-----|
| $R_{total}$ | Increases | Fewer paths |
| $I_{total}$ | Decreases | — |
| Terminal voltage | Increases | Less internal drop |
| Other branch currents | Increase slightly | If battery has internal $r$ |

---

### AP Exam Tips

1. **Always redraw** messy circuit diagrams neatly
2. **Label currents** with directions before writing equations
3. **Use SI units** — convert kΩ, μF, mA before calculating
4. **Check limiting cases:** $t = 0$ and $t \\to \\infty$ for RC circuits
5. **Conservation check:** $P_{battery} = \\sum P_{resistors}$

> 🔑 **Final Insight:** Kirchhoff's laws (KCL and KVL) are just conservation of charge and conservation of energy applied to circuits. Every circuit problem ultimately reduces to these two principles.`
    },
    {
      id: 'resistivitycircuitsadvanced-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Doubling both the length AND the cross-sectional area of a wire changes its resistance by:',
            options: ['No change', 'Doubles', 'Halves', 'Quadruples'],
            correctAnswer: 0,
            explanation: '$R = \\rho(2L)/(2A) = \\rho L/A = R$. The effects cancel — no change.'
          },
          {
            question: 'An RC circuit has $\\tau = 5$ ms. After $t = 15$ ms of discharging, the remaining voltage is approximately:',
            options: ['5% of initial', '37% of initial', '63% of initial', '95% of initial'],
            correctAnswer: 0,
            explanation: '$t = 3\\tau$: $V = V_0 e^{-3} ≈ 0.050 V_0$ — about 5% remains.'
          },
          {
            question: 'A 60 W bulb and a 100 W bulb in SERIES on 120 V. Which is brighter?',
            options: ['60 W bulb', '100 W bulb', 'Same brightness', 'depends on order'],
            correctAnswer: 0,
            explanation: '60 W → $R = 240$ Ω; 100 W → $R = 144$ Ω. Series: same $I$, so $P = I^2R$ → higher $R$ (60 W bulb) is brighter!'
          },
          {
            question: 'Maximum power is transferred to a load when:',
            options: ['$R_{load} \\gg r$', '$R_{load} = r$', '$R_{load} \\ll r$', '$R_{load} = 0$'],
            correctAnswer: 1,
            explanation: 'Maximum power transfer theorem: $P_{max}$ when $R_{load} = r$. Efficiency is only 50% at this point.'
          }
        ]
      }
    },
    {
      id: 'resistivitycircuitsadvanced-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** Wire: $\\rho = 2 \\times 10^{-6}$ Ω·m, length 0.5 m, diameter 2 mm. $R = ?$ (in Ω, round to 3 decimal places)

**2)** A 10 μF capacitor charges through 1 MΩ. Time to reach 90% charge? (in s, round to 1 decimal place)

**3)** Battery ($\\mathcal{E} = 6$ V, $r = 0.5$ Ω) drives $I = 2$ A. Terminal voltage? (in V)

**4)** Two identical bulbs in parallel are connected to a battery. If one burns out, does the other get brighter or dimmer? (brighter/dimmer/same)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['0.318', '23.0', '5', 'brighter'],
        hint1: '$A = \\pi(0.001)^2 ≈ 3.14 \\times 10^{-6}$ $m^{2}$. $R = \\rho L/A$',
        hint2: '$\\tau = RC = 10$ s. $0.9 = 1 - e^{-t/\\tau}$, so $t = -\\tau \\ln(0.1)$',
        hint3: '$V_{term} = \\mathcal{E} - Ir = 6 - 2(0.5)$',
        hint4: 'With one bulb gone, $R_{total}$ increases, so $I$ decreases, less drop across $r$, more $V_{term}$ for remaining bulb',
        explanation: '1) $R = 2 \\times 10^{-6} \\times 0.5/(3.14 \\times 10^{-6}) ≈ 0.318$ Ω. 2) $t = -10\\ln(0.1) ≈ 23.0$ s. 3) $V = 6 - 1 = 5$ V. 4) Brighter — if battery has internal resistance, removing one parallel bulb reduces current, increases terminal voltage, so the remaining bulb gets more voltage and glows brighter.'
      }
    }
  ]
};