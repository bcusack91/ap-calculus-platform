export const chemActivationEnergyArrheniusPart1Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae1-intro',
      type: 'text' as const,
      content: `# 💥 Collision Theory

**Part 1 of 7 — Why Do Molecules Need to Collide?**

---

### Two Requirements for an Effective Collision

| Requirement | What It Means | If Missing |
|-------------|--------------|------------|
| **Sufficient energy** | KE ≥ $E_a$ | Molecules bounce off — no reaction |
| **Proper orientation** | Reactive sites align | Collision is wasted |

Most collisions fail — only a tiny fraction have both enough energy AND the right orientation.

> 🔑 **Why this matters:** Collision theory explains why reactions have activation energies and why temperature dramatically affects reaction rates.

---

### What You'll Master in Part 1
- Explaining why molecules must collide with sufficient energy and proper orientation
- Interpreting Maxwell-Boltzmann distribution curves
- Predicting how temperature changes shift the fraction of effective collisions`
    },
    {
      id: 'ae1-collision-requirements',
      type: 'text' as const,
      content: `
## 📊 Requirements for an Effective Collision

For a collision to result in a reaction, two conditions must be met simultaneously:


---

### Condition 1: Sufficient Energy

The colliding molecules must have kinetic energy **at least equal** to the **activation energy** ($E_a$):

$$\\boxed{KE_{\\text{collision}} \\geq E_a}$$

If the collision energy is below $E_a$, the molecules simply bounce off each other without reacting.


---

### Condition 2: Proper Orientation

Even with enough energy, the molecules must collide with the correct **geometric orientation**. The reactive parts of the molecules must be facing each other.


---

### Example: NO + NO₃ → 2NO₂

- ✅ O of NO hits O of NO₃ → bonds can rearrange → reaction!
- ❌ N of NO hits N of NO₃ → wrong atoms in contact → no reaction


---

### The Steric Factor

The fraction of collisions with correct orientation is called the **steric factor** ($p$), typically $0 < p < 1$. For simple atoms, $p \\approx 1$; for complex molecules, $p$ can be very small.
      `
    },
    {
      id: 'ae1-collision-quiz',
      type: 'multiple-choice' as const,
      content: `
**Collision Theory Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a collision to be effective, which TWO conditions must be met?',
            options: [
              'High pressure and high temperature',
              'Sufficient energy and proper orientation',
              'Correct stoichiometry and a catalyst',
              'Low activation energy and many collisions'
            ],
            correctAnswer: 1,
            explanation: 'An effective collision requires (1) kinetic energy ≥ Ea and (2) proper geometric orientation of the colliding molecules.'
          },
          {
            question: 'The steric factor p represents:',
            options: [
              'The fraction of molecules with energy ≥ Ea',
              'The fraction of collisions with correct orientation',
              'The activation energy divided by RT',
              'The rate constant'
            ],
            correctAnswer: 1,
            explanation: 'The steric factor is the fraction of collisions where molecules are correctly oriented for reaction. For complex molecules, this can be very small.'
          },
          {
            question: 'If every collision had sufficient energy and correct orientation, the rate would equal:',
            options: [
              'Zero',
              'The collision frequency',
              'The equilibrium constant',
              'The activation energy'
            ],
            correctAnswer: 1,
            explanation: 'If every collision were effective, the rate would equal the total collision frequency (collisions per second per unit volume). In reality, only a tiny fraction of collisions are effective.'
          }
        ]
      }
    },
    {
      id: 'ae1-maxwell-boltzmann',
      type: 'text' as const,
      content: `
## 📌 Maxwell-Boltzmann Distribution

At any temperature, molecules have a **distribution of kinetic energies**. The Maxwell-Boltzmann distribution shows:

- Most molecules have moderate energies
- A few have very low or very high energy
- The **area under the curve** beyond $E_a$ represents the fraction of molecules that can react


---

### Effect of Temperature

When temperature increases:
1. The **peak** shifts to **higher energy** and becomes **lower and broader**
2. The **fraction of molecules** with $KE \\geq E_a$ increases **dramatically**
3. This is why higher temperature → faster rate


---

### The Boltzmann Factor

The fraction of molecules with energy $\\geq E_a$ is approximately:

$$\\boxed{f = e^{-E_a/(RT)}}$$

> 💡 This exponential dependence explains why even small temperature changes can produce large rate changes.
      `
    },
    {
      id: 'ae1-boltzmann-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Maxwell-Boltzmann Distribution** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At higher temperature, the Maxwell-Boltzmann curve becomes',
            options: ['taller and narrower', 'shorter and broader', 'unchanged', 'symmetric']
          },
          {
            label: 'The fraction of molecules with energy ≥ Ea is given by',
            options: ['Ea/RT', 'e^(−Ea/RT)', 'RT/Ea', 'ln(Ea/RT)']
          },
          {
            label: 'Increasing temperature increases the fraction beyond Ea because',
            options: ['Ea decreases', 'the distribution broadens to higher energies', 'molecules slow down', 'pressure increases']
          },
          {
            label: 'The total area under the Maxwell-Boltzmann curve',
            options: ['increases with temperature', 'decreases with temperature', 'stays constant (equals 1)', 'depends on Ea']
          }
        ],
        correctAnswers: ['shorter and broader', 'e^(−Ea/RT)', 'the distribution broadens to higher energies', 'stays constant (equals 1)'],
        hint1: 'Total number of molecules is constant, so the curve flattens as it broadens.',
        hint2: 'The Boltzmann factor is e^(−Ea/RT).',
        hint3: 'The distribution shifts and broadens — more molecules have high energies.',
        explanation: 'Higher T: curve is shorter and broader (total area = 1, always). Fraction ≥ Ea = e^(−Ea/RT). The broadening puts more area beyond Ea. Total area is always 1 (normalized probability).'
      }
    },
    {
      id: 'ae1-rate-equation',
      type: 'text' as const,
      content: `
## ⏱️ Collision Theory Rate Equation

Putting it all together, collision theory predicts:

$$\\boxed{\\text{Rate} = Z \\cdot p \\cdot e^{-E_a/(RT)}}$$

where:
- $Z$ = collision frequency (depends on concentration and temperature)
- $p$ = steric factor (orientation)
- $e^{-E_a/(RT)}$ = fraction with sufficient energy


---

### Connection to the Arrhenius Equation

This leads directly to the Arrhenius equation:

$$\\boxed{k = A \\cdot e^{-E_a/(RT)}}$$

where $A = Z \\cdot p$ is the **frequency factor** (also called the pre-exponential factor). We will derive this in detail in Part 3.

> 🔑 **Key Connection:** Collision theory → Arrhenius equation. The frequency factor $A$ captures collision frequency and orientation; the exponential captures the energy requirement.
      `
    },
    {
      id: 'ae1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Collision Theory Calculations** 🧮

**1)** At 300 K, the Boltzmann factor for a reaction with $E_a = 50$ kJ/mol is $e^{-E_a/(RT)}$. Calculate $E_a/(RT)$. ($R = 8.314$ J/(mol·K); round to 3 significant figures)

**2)** Calculate $e^{-20.0}$ to 2 significant figures. (Use scientific notation: e.g., 2.1e-9)

**3)** If temperature increases from 300 K to 310 K ($E_a = 50$ kJ/mol), calculate $E_a/(RT)$ at 310 K. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20.0', '2.1e-9', '19.4'],
        hint1: 'Ea/(RT) = 50,000/(8.314 × 300) = 50,000/2494.2 = 20.05 ≈ 20.0.',
        hint2: 'e^(−20.0) = 2.06 × 10⁻⁹ ≈ 2.1 × 10⁻⁹.',
        hint3: 'Ea/(RT) = 50,000/(8.314 × 310) = 50,000/2577.3 = 19.40 ≈ 19.4.',
        explanation: '1) 50,000/(8.314 × 300) = 20.0. 2) e^(−20.0) ≈ 2.1 × 10⁻⁹. 3) 50,000/(8.314 × 310) = 19.4. The decrease from 20.0 to 19.4 may seem small, but e^(−19.4)/e^(−20.0) = e^(0.6) ≈ 1.8, so the rate nearly doubles!'
      }
    },
    {
      id: 'ae1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Collision Theory** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which factor most dramatically affects the fraction of effective collisions when temperature increases by 10°C?',
            options: [
              'Collision frequency (molecules move faster)',
              'The Boltzmann factor e^(−Ea/RT)',
              'The steric factor',
              'The number of molecules'
            ],
            correctAnswer: 1,
            explanation: 'While collision frequency increases modestly with temperature (proportional to √T), the exponential Boltzmann factor e^(−Ea/RT) changes much more dramatically. This exponential dependence is the dominant effect.'
          },
          {
            question: 'A reaction with a very large Ea will:',
            options: [
              'Be very fast at any temperature',
              'Be very slow at most temperatures',
              'Not depend on temperature',
              'Not require collisions'
            ],
            correctAnswer: 1,
            explanation: 'Large Ea means e^(−Ea/RT) is very small, so only a tiny fraction of collisions have enough energy. The reaction is slow unless temperature is very high.'
          }
        ]
      }
    }
  ]
}
