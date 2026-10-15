export const chemEntropySecondLawPart3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en3-intro',
      type: 'text' as const,
      content: `# ⚖️ Entropy and Thermodynamic Favorability

**Part 3 of 7 — When Energy and Dispersal Compete**

---

### Topics in This Part

| Section |
|---------|
| 📏 Thermodynamically Favored Processes |
| What "Favored" Does and Does Not Mean |
| ⚖️ Two Factors: Energy and Dispersal |
| 🔧 When Enthalpy and Entropy Compete |

> 🔑 **Key Concept:** Whether a process is thermodynamically favored depends on **two** factors: the energy change ($\\Delta H$) and the entropy change ($\\Delta S$). Sometimes both point the same way; sometimes they compete, and temperature decides (CED 9.3.A.4, 9.3.A.6).

---

### What You'll Master in Part 3
- Using the phrase "thermodynamically favored" correctly
- Predicting favorability from the signs of $\\Delta H$ and $\\Delta S$
- Explaining why a favored process can still be too slow to observe`
    },
    {
      id: 'en3-second-law',
      type: 'text' as const,
      content: `
## 📏 Thermodynamically Favored Processes

The second law of thermodynamics says that, overall, matter and energy tend to become more dispersed. In AP Chemistry you apply that idea through $\\Delta H$, $\\Delta S$, and (in the next topic) $\\Delta G$.

A process that proceeds toward products without continuous outside help is called **thermodynamically favored**. The CED prefers this phrase to "spontaneous," because "spontaneous" is easily misread as "sudden" (CED 9.3.A.2).


---

### What "Favored" Does and Does Not Mean

It does NOT mean:
- **Fast** — diamond → graphite is favored but immeasurably slow
- **No start-up needed** — a match needs a spark, but then burning continues on its own

It DOES mean:
- Products are favored under the stated conditions
- The reverse process will not happen on its own under those conditions

> 💡 **Tip:** A favored reaction that does not occur at a measurable rate is under **kinetic control**, usually because of a high activation energy (CED 9.4.A.2).
      `
    },
    {
      id: 'en3-two-factors',
      type: 'text' as const,
      content: `
## ⚖️ Two Factors: Energy and Dispersal

Two tendencies favor a process:

1. **Releasing energy** to the surroundings: $\\Delta H < 0$ (exothermic)
2. **Increasing dispersal** of matter and energy in the system: $\\Delta S > 0$

| $\\Delta H$ | $\\Delta S$ | Do the factors agree? | Favored at |
|------------|------------|----------------------|-----------|
| − | + | Both favor products | **All temperatures** |
| + | − | Both oppose products | **No temperature** |
| − | − | Compete: energy favors, dispersal opposes | **Low temperature** |
| + | + | Compete: dispersal favors, energy opposes | **High temperature** |

> 🔑 **Key Concept:** Temperature acts as a weighting factor for entropy. At high temperature the entropy factor dominates; at low temperature the enthalpy factor dominates. When both factors agree, no calculation is needed to decide (CED 9.3.A.6).
      `
    },
    {
      id: 'en3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Favorability Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A process has ΔH < 0 and ΔS > 0. Under which conditions is it thermodynamically favored?',
            options: [
              'Only at high temperature',
              'Only at low temperature',
              'At all temperatures',
              'At no temperature'
            ],
            correctAnswer: 2,
            explanation: 'Releasing energy and increasing dispersal both favor the products, so the process is favored at every temperature. Temperature only decides the outcome when the two factors compete.'
          },
          {
            question: 'A reaction is endothermic and has a positive ΔS. How does raising the temperature affect its favorability?',
            options: [
              'It becomes less favored, because heat must be absorbed',
              'More favored, as entropy gains weight',
              'It is unaffected, because ΔH and ΔS do not depend on T',
              'It becomes favored only if a catalyst is added'
            ],
            correctAnswer: 1,
            explanation: 'When ΔH > 0 and ΔS > 0, dispersal favors the products while energy opposes them. Higher temperature gives the entropy factor more weight, so the process becomes favored at high T. A catalyst changes the rate, not favorability.'
          },
          {
            question: '"Thermodynamically favored" means:',
            options: [
              'The reaction happens quickly once started',
              'No energy input is needed to start it',
              'Equilibrium lies toward the products',
              'The reaction must be exothermic, releasing heat'
            ],
            correctAnswer: 2,
            explanation: 'Thermodynamically favored means the process proceeds toward products under the stated conditions, given enough time. It says nothing about speed (kinetics), a reaction may still need a spark to start, and endothermic processes can be favored when ΔS is large enough.'
          }
        ]
      }
    },
    {
      id: 'en3-competing-factors',
      type: 'text' as const,
      content: `
## 🔧 When Enthalpy and Entropy Compete

The CED names two classic examples in which both factors must be considered (CED 9.3.A.4).

### Freezing of Water ($\\Delta H < 0$, $\\Delta S < 0$)

- Freezing releases energy (favorable) but locks molecules into a solid (unfavorable dispersal).
- Below 0 °C the energy factor wins, so water freezes.
- Above 0 °C the entropy factor wins, so ice melts.
- At 0 °C the two factors balance: ice and water coexist at equilibrium.


---

### Dissolving Sodium Nitrate ($\\Delta H > 0$, $\\Delta S > 0$)

- Dissolving $\\text{NaNO}_3$ absorbs energy, so the solution gets cold (unfavorable energy change).
- The ions disperse throughout the water (favorable entropy change).
- At room temperature the entropy factor wins, so the salt dissolves even though the process is endothermic.

> 💡 **Tip:** On the AP exam, justify favorability by naming **both** factors: "Although the process is endothermic, the increase in entropy as the solid ions disperse into solution makes it thermodynamically favored at this temperature."
      `
    },
    {
      id: 'en3-sign-drill',
      type: 'input-boxes' as const,
      content: `
**Predict Favorability from the Signs** 🧮

For each process, type **all**, **high**, **low**, or **none** to show at which temperatures it is thermodynamically favored.

**1)** $\\Delta H < 0$, $\\Delta S > 0$

**2)** $\\Delta H > 0$, $\\Delta S > 0$

**3)** $\\Delta H < 0$, $\\Delta S < 0$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'all', acceptableAnswers: ['all', 'all temperatures', 'all T'] }, { question: '(2)', answer: 'high', acceptableAnswers: ['high', 'high T', 'high temperature'] }, { question: '(3)', answer: 'low', acceptableAnswers: ['low', 'low T', 'low temperature'] }],
        hint1: 'Both factors favor the products.',
        hint2: 'Dispersal favors, energy opposes. Which factor grows with temperature?',
        hint3: 'Energy favors, dispersal opposes.',
        explanation: '1) All temperatures: both factors favor products. 2) High temperatures: the favorable entropy factor dominates when T is large. 3) Low temperatures: the favorable enthalpy factor dominates when the entropy factor is weighted lightly.'
      }
    },
    {
      id: 'en3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Favorability Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A process with ΔH > 0 and ΔS < 0 is thermodynamically favored at',
            options: ['all temperatures', 'high temperatures', 'low temperatures', 'no temperature']
          },
          {
            label: 'Dissolving $NH_{4}NO_{3}$ in water is endothermic yet favored at 25 °C, so its ΔS must be',
            options: ['positive', 'negative', 'zero', 'impossible to determine']
          },
          {
            label: 'Water freezes below 0 °C because at low temperature the',
            options: ['entropy factor dominates', 'enthalpy factor dominates', 'activation energy is zero', 'reaction becomes endothermic']
          },
          {
            label: 'A thermodynamically favored reaction that does not occur at a measurable rate is under',
            options: ['thermodynamic control', 'kinetic control', 'equilibrium control', 'entropy control']
          }
        ],
        correctAnswers: ['no temperature', 'positive', 'enthalpy factor dominates', 'kinetic control'],
        hint1: 'Both factors oppose the products.',
        hint2: 'Something must favor the process if energy does not.',
        hint3: 'Freezing releases energy but decreases dispersal.',
        explanation: 'With ΔH > 0 and ΔS < 0, both factors oppose the process at every T. An endothermic process that is favored must have ΔS > 0. Freezing is favored at low T because the energy released outweighs the entropy decrease. A favored but very slow reaction is under kinetic control.'
      }
    },
    {
      id: 'en3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Favorability** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water freezes on its own at −10°C, even though the entropy of the water decreases. Which explanation is correct?',
            options: [
              'Freezing increases the entropy of the water at −10°C',
              'At low T, the energy released outweighs ΔS < 0',
              'Freezing is endothermic, and endothermic processes are favored at low temperature',
              'The activation energy for freezing is zero at −10°C'
            ],
            correctAnswer: 1,
            explanation: 'Freezing has ΔH < 0 and ΔS < 0, so the factors compete. At low temperature the enthalpy factor dominates and freezing is favored. Freezing decreases the entropy of the water, it is exothermic rather than endothermic, and activation energy affects rate, not favorability.'
          },
          {
            question: 'The conversion of diamond to graphite is thermodynamically favored but does not occur at room temperature. Why?',
            options: [
              'Thermodynamic favorability does not apply to solid-solid changes',
              'Its activation energy is too high for a measurable rate',
              'The conversion is actually unfavored at room temperature',
              'Diamond has higher entropy than graphite at 298 K'
            ],
            correctAnswer: 1,
            explanation: 'Thermodynamics tells us IF a process is favored, not HOW FAST it occurs. The diamond → graphite conversion is favored ($\\Delta G° < 0$) but has an enormous activation energy, so it is under kinetic control and immeasurably slow at room temperature. Diamond actually has lower entropy than graphite (2.4 vs 5.7 J/(mol·K)).'
          }
        ]
      }
    }
  ]
}
