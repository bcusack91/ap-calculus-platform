export const chemGibbsFreeEnergyPart1Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf1-intro',
      type: 'text' as const,
      content: `# ⚡ Gibbs Free Energy and Spontaneity

**Part 1 of 7 — ΔG = ΔH − TΔS**

---

### Topics in This Part

| Section |
|---------|
| ⚡ Defining Gibbs Free Energy |
| Reading the Equation |
| ⚡ The Spontaneity Criterion |
| Why Gibbs Free Energy Is So Useful |
| 🌡️ Temperature and Spontaneity |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'gf1-definition',
      type: 'text' as const,
      content: `
## ⚡ Defining Gibbs Free Energy

$$G = H - TS$$

The **change** in Gibbs free energy at constant temperature:

$$\\boxed{\\Delta G = \\Delta H - T\\Delta S}$$

> 🔑 **Key Equation:** This is the master equation of Gibbs free energy — it combines enthalpy and entropy into a single criterion for spontaneity.

---

### Reading the Equation

The equation combines the two factors from the entropy topic into one number:

| Term | What it represents | Favorable when |
|------|--------------------|----------------|
| $\\Delta H$ | The energy factor | $\\Delta H < 0$ (energy released) |
| $-T\\Delta S$ | The dispersal factor, weighted by temperature | $\\Delta S > 0$ (more dispersal) |

A process is thermodynamically favored when the sum is negative (CED 9.3.A.5):

$$\\boxed{\\Delta G° < 0 \\quad \\text{(thermodynamically favored)}}$$
      `
    },
    {
      id: 'gf1-criterion',
      type: 'text' as const,
      content: `
## ⚡ The Spontaneity Criterion

| $\\Delta G$ | Meaning |
|-----------|---------|
| $\\Delta G < 0$ | Spontaneous (thermodynamically favorable) |
| $\\Delta G = 0$ | At equilibrium |
| $\\Delta G > 0$ | Nonspontaneous (reverse reaction is spontaneous) |
> 🔑 **Key Concept:** Memorize this table — it's the foundation for every Gibbs free energy problem on the AP exam.
---

### Why Gibbs Free Energy Is So Useful

- It accounts for **both** enthalpy and entropy
- It is calculated entirely from properties of the **system** ($\\Delta H$, $\\Delta S$, and $T$)
- It connects directly to **equilibrium** and **electrochemistry**


> 💡 **Tip:** The CED prefers the phrase **thermodynamically favored** to "spontaneous," because "spontaneous" is often misread as "fast." A favored reaction can still be immeasurably slow if its activation energy is high (CED 9.4).
      `
    },
    {
      id: 'gf1-temperature',
      type: 'text' as const,
      content: `
## ⚡ Temperature and Spontaneity

From $\\Delta G = \\Delta H - T\\Delta S$, we see that temperature affects spontaneity through the $T\\Delta S$ term:

- At **low temperatures**: $\\Delta H$ dominates ($T\\Delta S$ is small)
- At **high temperatures**: $T\\Delta S$ dominates ($T\\Delta S$ is large)
> ⚠️ **Warning:** Temperature must always be in **Kelvin** in thermodynamic equations. Also ensure $\\Delta H$ and $T\\Delta S$ use the **same units** (both kJ or both J).
---

### The Crossover Temperature

When $\\Delta G = 0$ (equilibrium):

$$\\boxed{T = \\frac{\\Delta H}{\\Delta S}}$$

This is the temperature at which the reaction switches between spontaneous and nonspontaneous.


---

### Example

> **Problem:** For ice melting: $\\Delta H = +6.01$ kJ/mol, $\\Delta S = +22.0$ J/(mol·K)

> **Solution:**

$$T = \\frac{6010}{22.0} = 273 \\text{ K} = 0°\\text{C}$$

Above 273 K: melting is spontaneous ($\\Delta G < 0$). Below 273 K: freezing is spontaneous.
      `
    },
    {
      id: 'gf1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Gibbs Free Energy Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction with ΔG < 0 is:',
            options: [
              'At equilibrium',
              'Nonspontaneous',
              'Spontaneous',
              'Necessarily exothermic'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta G < 0$ means the reaction is spontaneous (thermodynamically favorable). It will proceed in the forward direction without continuous external input. It does not have to be exothermic: an endothermic reaction with a large enough $T\\Delta S$ term can also have $\\Delta G < 0$.'
          },
          {
            question: 'In the equation ΔG = ΔH − TΔS, what must be true about units?',
            options: [
              'ΔH in kJ and ΔS in J/K can be used as listed',
              'T may be in °C as long as ΔS is in J/K',
              'ΔH and TΔS must share one energy unit, with T in K',
              'ΔS must be converted to J/mol before use'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta H$ is typically in kJ and $\\Delta S$ in J/K. You must convert one before calculating: either divide $\\Delta S$ by 1000 to get kJ/K, or multiply $\\Delta H$ by 1000 to get J. Temperature must be in Kelvin.'
          },
          {
            question: 'At what point does ΔG = 0?',
            options: [
              'At absolute zero',
              'At standard conditions',
              'At equilibrium',
              'When the reaction is complete'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta G = 0$ defines **equilibrium** — the point where the forward and reverse reactions occur at equal rates and there is no net change.'
          }
        ]
      }
    },
    {
      id: 'gf1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Gibbs Free Energy Calculations** 🧮

**1)** $\\Delta H = -100$ kJ, $\\Delta S = +50$ J/K, $T = 298$ K. Calculate $\\Delta G$ in kJ. (to 3 significant figures)

**2)** $\\Delta H = +200$ kJ, $\\Delta S = +500$ J/K, $T = 500$ K. Calculate $\\Delta G$ in kJ.

**3)** A reaction has $\\Delta H = +30$ kJ and $\\Delta S = +100$ J/K. At what temperature (in K) is $\\Delta G = 0$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-114.9', '-50', '300'],
        hint1: '$\\Delta G = -100 - (298)(0.050)$. Remember to convert $\\Delta S$ to kJ/K!',
        hint2: '$\\Delta G = 200 - (500)(0.500)$.',
        hint3: '$\\Delta G = 0 \\Rightarrow T = \\Delta H/\\Delta S = 30{,}000/100$.',
        explanation: '1) $\\Delta G = -100 - (298)(0.050) = -100 - 14.9 = -114.9$ kJ. 2) $\\Delta G = 200 - (500)(0.500) = 200 - 250 = -50$ kJ (spontaneous at 500 K!). 3) $T = 30{,}000/100 = 300$ K.'
      }
    },
    {
      id: 'gf1-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Gibbs Free Energy Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A process with ΔG° < 0 is described as',
            options: ['thermodynamically favored', 'at equilibrium', 'kinetically fast', 'endothermic']
          },
          {
            label: 'At high temperatures, the dominant term in ΔG = ΔH − TΔS is',
            options: ['ΔH', 'TΔS', 'both equally', 'neither']
          },
          {
            label: 'If ΔH > 0 and ΔS < 0, the reaction is',
            options: ['always spontaneous', 'never spontaneous', 'spontaneous at high T', 'spontaneous at low T']
          },
          {
            label: 'The temperature in ΔG = ΔH − TΔS must be in',
            options: ['°C', 'K', '°F', 'any unit']
          }
        ],
        correctAnswers: ['thermodynamically favored', 'TΔS', 'never spontaneous', 'K'],
        hint1: 'A negative ΔG° means products are favored.',
        hint2: 'As T increases, T×ΔS grows and dominates.',
        hint3: 'Both terms make ΔG positive: ΔH > 0 and −TΔS > 0.',
        explanation: 'ΔG° < 0 means the process is thermodynamically favored; it says nothing about speed. At high T, TΔS dominates. ΔH > 0 and ΔS < 0 means ΔG > 0 at ALL temperatures — never spontaneous. Temperature must be in Kelvin.'
      }
    },
    {
      id: 'gf1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Gibbs Free Energy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The melting of ice has ΔH = +6.01 kJ/mol and ΔS = +22.0 J/(mol·K). At 260 K, is melting spontaneous?',
            options: [
              'Yes, ΔG = −0.55 kJ',
              'No, ΔG = +0.29 kJ',
              'Yes, because ΔS > 0',
              'No, because ΔH > 0'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta G = 6.01 - (260)(0.0220) = 6.01 - 5.72 = +0.29$ kJ. Since $\\Delta G > 0$, melting is NOT spontaneous at 260 K (below the freezing point, as expected). Plugging in 298 K instead of 260 K gives $-0.55$ kJ, and $\\Delta S > 0$ or $\\Delta H > 0$ alone cannot decide the sign of $\\Delta G$.'
          },
          {
            question: 'Which combination of ΔH and ΔS makes a reaction spontaneous at ALL temperatures?',
            options: [
              'ΔH > 0, ΔS > 0',
              'ΔH > 0, ΔS < 0',
              'ΔH < 0, ΔS < 0',
              'ΔH < 0, ΔS > 0'
            ],
            correctAnswer: 3,
            explanation: 'When $\\Delta H < 0$ and $\\Delta S > 0$: $\\Delta G = (\\text{negative}) - T(\\text{positive}) = \\text{negative} - \\text{positive} = $ always negative. Both terms contribute to making $\\Delta G < 0$.'
          }
        ]
      }
    }
  ]
}
