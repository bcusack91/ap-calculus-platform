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

### Example: NO + $NO_{3}$ → $2NO_{2}$

- ✅ O of NO hits O of $NO_{3}$ → bonds can rearrange → reaction!
- ❌ N of NO hits N of $NO_{3}$ → wrong atoms in contact → no reaction


---

### Orientation Matters More for Larger Molecules

Two single atoms can react no matter how they meet. For larger molecules, only collisions that bring the reacting atoms into contact can break and form the right bonds, so a much smaller fraction of collisions has a suitable orientation.
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
              'A low Ea and frequent collisions'
            ],
            correctAnswer: 1,
            explanation: 'An effective collision requires (1) kinetic energy ≥ Ea and (2) proper geometric orientation of the colliding molecules.'
          },
          {
            question: 'In NO + $NO_{3}$ → $2NO_{2}$, a collision in which the N atom of NO strikes the N atom of $NO_{3}$ does not react, even when the energy is high. Why?',
            options: [
              'The collision has less energy than the activation energy',
              'The orientation does not bring the reacting atoms together',
              'Nitrogen atoms repel each other at any collision energy',
              'The product $NO_{2}$ is less stable than the reactants'
            ],
            correctAnswer: 1,
            explanation: 'The new N–O bond can form only when an O atom of $NO_{3}$ meets the N of NO. An N-to-N collision has the wrong orientation, so the bonds cannot rearrange, regardless of energy. The stem rules out low energy, and product stability does not decide whether a single collision succeeds.'
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

### Reading the Shaded Area

On a Maxwell-Boltzmann graph, draw a vertical line at $E_a$. The area under the curve to the **right** of that line is the fraction of particles energetic enough to react. Because $E_a$ usually sits far out in the tail of the curve, a modest temperature increase can make that small area much larger.

> 💡 This is why even small temperature changes can produce large rate changes. The AP exam asks you to reason with this graph qualitatively, not to calculate the fraction.
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
            label: 'On the graph, the fraction of molecules with energy ≥ Ea is shown by',
            options: ['the height of the peak', 'the area to the right of Ea', 'the area to the left of Ea', 'the position of the peak']
          },
          {
            label: 'Increasing temperature increases the fraction beyond Ea because',
            options: ['Ea decreases as the temperature rises', 'the distribution broadens to higher energies', 'the molecules slow down and collide longer', 'the gas pressure increases at higher temperature']
          },
          {
            label: 'The total area under the Maxwell-Boltzmann curve',
            options: ['increases with temperature', 'decreases with temperature', 'stays constant (equals 1)', 'depends on Ea']
          }
        ],
        correctAnswers: ['shorter and broader', 'the area to the right of Ea', 'the distribution broadens to higher energies', 'stays constant (equals 1)'],
        hint1: 'Total number of molecules is constant, so the curve flattens as it broadens.',
        hint2: 'Which particles have at least $E_a$ of energy?',
        hint3: 'The distribution shifts and broadens — more molecules have high energies.',
        explanation: 'Higher T: curve is shorter and broader (total area = 1, always). The fraction with energy ≥ Ea is the area to the right of the Ea line. The broadening puts more area beyond Ea. Total area is always 1 (normalized probability).'
      }
    },
    {
      id: 'ae1-temperature-effect',
      type: 'text' as const,
      content: `
## ⏱️ Why Temperature Has Such a Large Effect

Raising the temperature changes two things, but not equally:

| Effect of higher T | Size of the effect |
|--------------------|--------------------|
| Particles move faster, so they collide **more often** | Small — a 10 °C rise increases collision frequency by only a few percent |
| A larger **fraction** of collisions has energy ≥ $E_a$ | Large — often enough to double the rate or more |

> 🔑 **Key Connection:** When you explain why a reaction speeds up on heating, the fraction of collisions with energy at or above $E_a$ is the main reason. Mention both frequency and energy, but emphasize the energy.


---

### What Does NOT Change with Temperature

- The **activation energy** $E_a$ is a property of the reaction pathway. Heating does not lower it; only a catalyst (a new pathway) does.
- The **orientation requirement** is the same at every temperature.

> 💡 **Tip:** The Arrhenius equation, $k = Ae^{-E_a/(RT)}$, summarizes these ideas: $k$ grows as $T$ rises and shrinks as $E_a$ grows. Calculations with it are not assessed on the AP exam (CED 5.6 exclusion).
      `
    },
    {
      id: 'ae1-reasoning-drill',
      type: 'input-boxes' as const,
      content: `
**Collision Theory Reasoning** 🧮

A reaction mixture is heated from 300 K to 320 K. For each quantity, type **increases**, **decreases**, or **unchanged**.

**1)** The fraction of collisions with energy ≥ $E_a$

**2)** The activation energy $E_a$

**3)** The total area under the Maxwell-Boltzmann curve
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increases', acceptableAnswers: ['increases', 'increase'] }, { question: '(2)', answer: 'unchanged', acceptableAnswers: ['unchanged', 'no change', 'same'] }, { question: '(3)', answer: 'unchanged', acceptableAnswers: ['unchanged', 'no change', 'same'] }],
        hint1: 'The curve flattens and stretches toward higher energies.',
        hint2: 'Is $E_a$ a property of the pathway or of the temperature?',
        hint3: 'The area represents all of the particles. Did the number of particles change?',
        explanation: '1) Increases: the distribution broadens, putting more area to the right of $E_a$. 2) Unchanged: $E_a$ depends on the reaction pathway, not on temperature. 3) Unchanged: the area represents the whole sample, so it stays the same while the shape changes.'
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
              'How many collisions have energy ≥ Ea',
              'How often collisions are well oriented',
              'The number of molecules in the container'
            ],
            correctAnswer: 1,
            explanation: 'Collision frequency rises only slightly with temperature, but the fraction of collisions energetic enough to reach the transition state (the area beyond Ea on the Maxwell-Boltzmann curve) grows much more. Orientation requirements and the number of molecules do not change on heating.'
          },
          {
            question: 'A reaction with a very large Ea will:',
            options: [
              'Be very fast at any temperature',
              'Be very slow at most temperatures',
              'Be unaffected by temperature',
              'Be fast, releasing more energy'
            ],
            correctAnswer: 1,
            explanation: 'A large Ea sits far out in the tail of the Maxwell-Boltzmann curve, so only a tiny fraction of collisions have enough energy. The reaction is slow unless temperature is very high. A large Ea actually makes the rate MORE sensitive to temperature, and Ea says nothing about how much energy the reaction releases (that is ΔH).'
          }
        ]
      }
    }
  ]
}
