export const physics2ThermoProcPart2Data = {
  topicSlug: 'thermodynamic-processes',
  sections: [
    {
      id: 'thermodynamicprocesses-p2-intro',
      type: 'text' as const,
      content: `# 🌡️ Isothermal & Adiabatic Processes

**Part 2 of 7 — Constant Temperature & No Heat Transfer**

---

### Isothermal Process ($T$ = constant)

An isothermal process occurs when a gas expands or compresses slowly while in thermal contact with a heat reservoir.

$$PV = nRT = \\text{constant}$$

On a PV diagram: a **hyperbola** ($P = nRT/V$)

---

### Work in Isothermal Process

$$\\boxed{W = nRT\\ln\\frac{V_f}{V_i} = nRT\\ln\\frac{P_i}{P_f}}$$

---

### First Law for Isothermal Process

Since $T$ is constant for an ideal gas: $\\Delta U = 0$

$$Q = W$$

**All heat absorbed goes directly to work, and vice versa.** No energy is stored — the gas is merely a conduit for converting heat to work.

| Direction | $W$ | $Q$ |
|-----------|-----|-----|
| Isothermal expansion | $+$ (gas does work) | $+$ (heat flows IN from reservoir) |
| Isothermal compression | $-$ (work done on gas) | $-$ (heat flows OUT to reservoir) |

> 🔑 **Key Insight:** An isothermal process requires a heat reservoir (infinite heat capacity) and must proceed slowly enough for the gas to stay at the reservoir's temperature.

---

### Adiabatic Process ($Q = 0$)

An adiabatic process occurs when a gas expands or compresses with **no heat exchange** — either the process is too fast for heat transfer, or the system is perfectly insulated.

$$PV^\\gamma = \\text{constant}$$

$$TV^{\\gamma-1} = \\text{constant}$$

where $\\gamma = C_p/C_v$ is the **heat capacity ratio** (also called adiabatic index).

| Gas Type | $\\gamma$ | Example |
|----------|---------|---------|
| Monatomic | $5/3 \\approx 1.67$ | He, Ar, Ne |
| Diatomic (room temp) | $7/5 = 1.40$ | $N_{2}$, $O_{2}$, air |
| Polyatomic | $\\approx 1.3$ | $CO_{2}$, $H_{2}O$ vapor |`
    },
    {
      id: 'thermodynamicprocesses-p2-adiabatic',
      type: 'text' as const,
      content: `### First Law for Adiabatic Process

Since $Q = 0$:

$$\\Delta U = -W$$

| Direction | $W$ | $\\Delta U$ | $T$ |
|-----------|-----|-----------|-----|
| Adiabatic expansion | $+$ | $-$ | Decreases (gas cools!) |
| Adiabatic compression | $-$ | $+$ | Increases (gas heats!) |

---

### Why Adiabatic Curves Are Steeper

On a PV diagram through the same point:

| Process | Slope behavior | Why |
|---------|---------------|-----|
| Isothermal | $P \\propto 1/V$ | Temperature stays constant → moderate pressure drop |
| Adiabatic | $P \\propto 1/V^\\gamma$ ($\\gamma > 1$) | Temperature also drops → extra pressure reduction |

The adiabatic curve is **always steeper** than the isothermal curve because the gas cools during expansion, causing a faster pressure drop.

---

### Real-World Adiabatic Processes

| Example | How It Works |
|---------|-------------|
| Diesel engine | Fuel ignites from adiabatic compression heating |
| Bicycle pump | Gets hot — you're adiabatically compressing air |
| Sound waves | Compressions/rarefactions are approximately adiabatic (too fast for heat transfer) |
| Mountain weather | Rising air expands adiabatically → cools → clouds form |
| Spray can | Gas expands adiabatically through nozzle → can gets cold |

---

### Comparing All Four Processes from Same Starting Point

Expanding to the same final volume $V_f$ from $(P_i, V_i)$:

| Process | Final $P$ | Final $T$ | Work (area) | $Q$ |
|---------|----------|----------|-------------|-----|
| Isobaric | $P_i$ (unchanged) | Highest | Most | Most |
| Isothermal | $P_i V_i/V_f$ | Same as initial | Medium | Medium |
| Adiabatic | Below isothermal | Lowest | Least | 0 |

> ⚠️ **AP Trap:** Students sometimes confuse "isothermal" with "adiabatic." Isothermal = constant $T$ (needs heat exchange). Adiabatic = no heat ($Q = 0$, $T$ changes!). They are very different processes.`
    },
    {
      id: 'thermodynamicprocesses-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In an isothermal expansion of an ideal gas:',
            options: ['$\\Delta U > 0$', '$\\Delta U < 0$', '$\\Delta U = 0$', 'Cannot determine'],
            correctAnswer: 2,
            explanation: 'Isothermal: constant $T$ → $\\Delta U = 0$ for an ideal gas (internal energy depends only on $T$).'
          },
          {
            question: 'An adiabatic curve on a PV diagram compared to an isothermal curve through the same point is:',
            options: ['The same shape', 'Steeper (drops faster)', 'Flatter (drops slower)', 'A straight line'],
            correctAnswer: 1,
            explanation: '$PV^\\gamma$ with $\\gamma > 1$ drops faster than $PV = const$. Gas cools during adiabatic expansion, adding to the pressure drop.'
          },
          {
            question: 'In adiabatic compression, the gas temperature:',
            options: ['Decreases', 'Stays constant', 'Increases', 'Depends on the gas'],
            correctAnswer: 2,
            explanation: '$Q = 0$, $W < 0$ (work done ON gas) → $\\Delta U = -W > 0$ → temperature rises. This is how diesel engines ignite fuel!'
          },
          {
            question: 'An ideal gas expands slowly while in contact with a heat reservoir. This is:',
            options: ['Adiabatic', 'Isobaric', 'Isothermal', 'Isochoric'],
            correctAnswer: 2,
            explanation: 'Heat reservoir maintains constant temperature. Slow expansion allows thermal equilibrium → isothermal.'
          }
        ]
      }
    },
    {
      id: 'thermodynamicprocesses-p2-input',
      type: 'input-boxes' as const,
      content: `
**Isothermal & Adiabatic Practice** 🧮

An ideal gas expands isothermally at $T = 300$ K from $V_i = 1$ L to $V_f = 3$ L. ($n = 1$ mol, $R = 8.314$ J/(mol·K))

**1)** What type of process maintains constant temperature? (isothermal/adiabatic)

**2)** $\\Delta U$ for this process? (in J)

**3)** Work done by the gas: $W = nRT\\ln(V_f/V_i)$? (in J, round to nearest integer)

**4)** Heat absorbed by the gas? (in J, round to nearest integer)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['isothermal', '0', '2740', '2740'],
        hint1: 'Heat reservoir maintains constant $T$',
        hint2: 'For an ideal gas, $\\Delta U$ depends only on $T$',
        hint3: '$W = (1)(8.314)(300)\\ln(3) = 2494.2 \\times 1.099$',
        hint4: '$Q = \\Delta U + W$',
        explanation: '1) Isothermal. 2) $\\Delta U = 0$ (constant $T$). 3) $W = 8.314 \\times 300 \\times \\ln(3) ≈ 2740$ J. 4) $Q = 0 + 2740 = 2740$ J — all heat goes to work.'
      }
    }
  ]
};