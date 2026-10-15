export const chemEntropySecondLawV2Part3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en3v2-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Second Law: Nature's Direction

**Part 3 of 7 — Why Processes Have a Preferred Direction**

Mix hot and cold water — they reach the same temperature. Drop a sugar cube in tea — it dissolves. A broken egg doesn't reassemble. Each of these runs in one direction because matter and energy tend to spread out. In AP Chemistry, you decide a process's direction by weighing **two** factors: the energy change ($\\Delta H$) and the entropy change ($\\Delta S$).
      `
    },
    {
      id: 'en3v2-statement',
      type: 'text' as const,
      content: `
## 📏 Two Tendencies That Drive Change

| Tendency | Sign that favors the process | Example |
|----------|-----------------------------|---------|
| Release energy to the surroundings | $\\Delta H < 0$ (exothermic) | A fuel burning |
| Increase dispersal of matter and energy | $\\Delta S > 0$ | A gas expanding, a solid dissolving |

A process that proceeds toward products on its own is called **thermodynamically favored**. The CED prefers this phrase to "spontaneous," which is easily confused with "fast" or "sudden" (CED 9.3.A.2).

---

### When the Two Tendencies Agree or Compete

| $\\Delta H$ | $\\Delta S$ | Result |
|------------|------------|--------|
| − (favorable) | + (favorable) | Favored at **all** temperatures |
| + (unfavorable) | − (unfavorable) | Favored at **no** temperature |
| − (favorable) | − (unfavorable) | Favored at **low** temperature |
| + (unfavorable) | + (favorable) | Favored at **high** temperature |

**Key Insight:** A process can be favored even when the system's entropy **decreases**, as long as the energy factor is favorable enough (for example, water freezing below 0 °C).
      `
    },
    {
      id: 'en3v2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Direction Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A process has ΔH > 0 and ΔS < 0. Under what conditions is it thermodynamically favored?',
            options: [
              'At all temperatures',
              'Only at high temperatures',
              'Only at low temperatures',
              'At no temperature'
            ],
            correctAnswer: 3,
            explanation: 'Absorbing energy and decreasing dispersal both oppose the process, so it is not favored at any temperature. Temperature only changes the outcome when the two factors compete.'
          },
          {
            question: 'Can a process be thermodynamically favored if the entropy of the system decreases?',
            options: [
              'No, entropy of the system must always increase',
              'Yes, if enough energy is released at a low enough temperature',
              'Yes, but only if the process is endothermic',
              'No, unless a catalyst is added'
            ],
            correctAnswer: 1,
            explanation: 'When ΔS < 0, a favorable (negative) ΔH can still make the process favored, as long as the temperature is low enough that the energy factor dominates. Water freezing below 0 °C is the classic example. A catalyst changes rate, not favorability.'
          },
          {
            question: 'Which statement about a thermodynamically favored reaction is correct?',
            options: [
              'It must occur quickly once the reactants are mixed',
              'It proceeds toward products, but its rate depends on kinetics',
              'It must be exothermic',
              'It needs no activation energy'
            ],
            correctAnswer: 1,
            explanation: 'Favorability tells you the direction, not the speed. A favored reaction with a high activation energy can be immeasurably slow (kinetic control, CED 9.4). Endothermic reactions can be favored when ΔS is large enough.'
          }
        ]
      }
    },
    {
      id: 'en3v2-temperature',
      type: 'text' as const,
      content: `
## 🌡️ Temperature Decides When the Factors Compete

Temperature acts as a weighting factor for entropy: the higher the temperature, the more the entropy factor counts.

### Freezing and Melting of Water

| Process | $\\Delta H$ | $\\Delta S$ | Favored when |
|---------|------------|------------|--------------|
| Freezing | − | − | Below 0 °C (energy factor wins) |
| Melting | + | + | Above 0 °C (entropy factor wins) |

At exactly 0 °C the two factors balance, and ice and water coexist at equilibrium.

---

### Dissolving a Salt That Cools the Water

Sodium nitrate and ammonium nitrate dissolve endothermically: the solution gets cold. They still dissolve at room temperature because the ions disperse throughout the water, a large entropy increase that outweighs the unfavorable energy change (CED 9.3.A.4).

> 💡 **Tip:** On the AP exam, name both factors and say which one wins: "Although the process is endothermic, the increase in entropy as the ions disperse makes it thermodynamically favored at 25 °C."
      `
    },
    {
      id: 'en3v2-sign-drill',
      type: 'input-boxes' as const,
      content: `
**Favored at Which Temperatures?** 🧮

Type **all**, **high**, **low**, or **none**.

**1)** Steam condensing to liquid water: $\\Delta H < 0$, $\\Delta S < 0$

**2)** Calcium carbonate decomposing to CaO and $\\text{CO}_2$: $\\Delta H > 0$, $\\Delta S > 0$

**3)** A hypothetical reaction with $\\Delta H > 0$, $\\Delta S < 0$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'low', acceptableAnswers: ['low', 'low T', 'low temperature'] }, { question: '(2)', answer: 'high', acceptableAnswers: ['high', 'high T', 'high temperature'] }, { question: '(3)', answer: 'none', acceptableAnswers: ['none', 'no', 'never', 'no temperature'] }],
        hint1: 'Energy favors, dispersal opposes.',
        hint2: 'Dispersal favors, energy opposes.',
        hint3: 'Both factors oppose the process.',
        explanation: '1) Low: the favorable energy change dominates at low temperature, which is why steam condenses below 100 °C. 2) High: the favorable entropy change (a gas is produced) dominates at high temperature. 3) None: both factors are unfavorable.'
      }
    },
    {
      id: 'en3v2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Second Law Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exothermic reactions have an energy factor that is',
            options: ['favorable', 'unfavorable', 'zero', 'irrelevant']
          },
          {
            label: 'Raising the temperature gives the entropy factor',
            options: ['more weight', 'less weight', 'no weight', 'a negative sign']
          },
          {
            label: 'At the normal melting point, solid and liquid',
            options: ['cannot coexist', 'coexist at equilibrium', 'both decompose', 'have equal entropy']
          }
        ],
        correctAnswers: ['favorable', 'more weight', 'coexist at equilibrium'],
        hint1: 'Releasing energy favors a process.',
        hint2: 'Entropy matters more at high temperature.',
        hint3: 'The two factors balance at the melting point.',
        explanation: 'Releasing energy (ΔH < 0) favors a process. Temperature weights the entropy factor, so it matters more at high T. At the melting point the factors balance and the phases coexist at equilibrium; the liquid still has more entropy than the solid.'
      }
    },
    {
      id: 'en3v2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water freezing at −10°C is thermodynamically favored even though the water loses entropy. How?',
            options: [
              'The entropy of the water actually increases when it freezes',
              'Energy released outweighs the ΔS decrease',
              'Freezing is endothermic, and endothermic processes are favored when cold',
              'Freezing has no activation energy at −10°C'
            ],
            correctAnswer: 1,
            explanation: 'Freezing has ΔH < 0 (favorable) and ΔS < 0 (unfavorable). At low temperature the energy factor dominates, so freezing is favored. Freezing lowers the water\'s entropy, it is exothermic, and activation energy affects only the rate.'
          }
        ]
      }
    }
  ]
}
