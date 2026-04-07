export const chemEntropySecondLawPart3Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en3-intro',
      type: 'text' as const,
      content: `
# 🌍 The Second Law of Thermodynamics

**Part 3 of 7 — ΔS_universe > 0 for Spontaneous Processes**

The Second Law is one of the most profound principles in all of science. It tells us which direction processes naturally go and provides the ultimate criterion for spontaneity.
      `
    },
    {
      id: 'en3-second-law',
      type: 'text' as const,
      content: `
## 📏 The Second Law

**The entropy of the universe increases for every spontaneous process.**

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$$


---

### Three Cases

| Condition | Process Type |
|-----------|-------------|
| $\\Delta S_{\\text{universe}} > 0$ | Spontaneous (irreversible) |
| $\\Delta S_{\\text{universe}} = 0$ | At equilibrium (reversible) |
| $\\Delta S_{\\text{universe}} < 0$ | Nonspontaneous (reverse is spontaneous) |


---

### What Does "Spontaneous" Mean?

A **spontaneous** process occurs without continuous outside intervention. It does NOT mean:
- Fast (diamond → graphite is spontaneous but infinitely slow)
- Without any initial input (a match needs a spark, but then burning is spontaneous)

It DOES mean:
- The process is thermodynamically favorable
- The reverse process will not happen on its own
      `
    },
    {
      id: 'en3-entropy-surroundings',
      type: 'text' as const,
      content: `
## 🌡️ Entropy of the Surroundings

The entropy change of the surroundings depends on the heat flow and temperature:

$$\\Delta S_{\\text{surroundings}} = -\\frac{q_{\\text{system}}}{T} = -\\frac{\\Delta H_{\\text{system}}}{T}$$

(at constant pressure and temperature)


---

### Why the Negative Sign?

Heat released by the system ($-q$) is absorbed by the surroundings ($+q$), and vice versa.


---

### Why Divide by Temperature?

The same amount of heat has a **greater impact** on entropy at **lower temperature**:

- Adding 100 J of heat to a cold system (200 K) creates a larger entropy change than adding 100 J to a hot system (1000 K)
- This is like adding $10 to someone with $100 vs. someone with $10,000


---

### Combining System and Surroundings

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\left(-\\frac{\\Delta H_{\\text{system}}}{T}\\right)$$

This equation connects entropy, enthalpy, and spontaneity — leading directly to Gibbs Free Energy (covered in Topic 3).
      `
    },
    {
      id: 'en3-spontaneity-examples',
      type: 'text' as const,
      content: `
## 🔧 How Spontaneous Processes Work

### Exothermic Reactions at Room Temperature

For combustion of methane: $\\Delta H_{\\text{sys}} < 0$

- $\\Delta S_{\\text{surr}} = -\\Delta H/T > 0$ (large positive)
- Even if $\\Delta S_{\\text{sys}} < 0$, $\\Delta S_{\\text{univ}}$ can still be positive
- The large heat release drives spontaneity


---

### Endothermic Spontaneous Processes

Ice melting above 0°C: $\\Delta H_{\\text{sys}} > 0$

- $\\Delta S_{\\text{surr}} = -\\Delta H/T < 0$ (negative)
- But $\\Delta S_{\\text{sys}} > 0$ (solid → liquid, large increase)
- If $\\Delta S_{\\text{sys}}$ outweighs $|\\Delta S_{\\text{surr}}|$, the process is spontaneous


---

### Temperature Dependence

At the melting point (0°C for water):
$$\\Delta S_{\\text{universe}} = 0 \\quad \\text{(equilibrium)}$$

Above 0°C: melting is spontaneous. Below 0°C: freezing is spontaneous.
      `
    },
    {
      id: 'en3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Second Law Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a spontaneous process, which must be true?',
            options: [
              'ΔS_system > 0',
              'ΔS_surroundings > 0',
              'ΔS_universe > 0',
              'ΔH < 0'
            ],
            correctAnswer: 2,
            explanation: 'The Second Law requires $\\Delta S_{\\text{universe}} > 0$ for spontaneity. Neither $\\Delta S_{\\text{sys}}$ nor $\\Delta S_{\\text{surr}}$ alone must be positive — only their sum.'
          },
          {
            question: 'An exothermic reaction releases 50 kJ of heat at 300 K. ΔS_surroundings is:',
            options: [
              '−167 J/K',
              '+167 J/K',
              '−50 J/K',
              '+50 J/K'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-50{,}000 \\text{ J})/300 = +167$ J/K. The surroundings absorb heat, so their entropy increases.'
          },
          {
            question: '"Spontaneous" in thermodynamics means:',
            options: [
              'The reaction happens instantly',
              'No energy input is ever needed',
              'The process is thermodynamically favorable in the forward direction',
              'The reaction is always exothermic'
            ],
            correctAnswer: 2,
            explanation: 'Spontaneous means thermodynamically favorable — the reaction will proceed in the forward direction given enough time. It says nothing about speed (kinetics) and does not require exothermicity.'
          }
        ]
      }
    },
    {
      id: 'en3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Second Law Calculations** 🧮

**1)** A reaction has $\\Delta H = -100$ kJ and $\\Delta S_{\\text{sys}} = -50$ J/K at $T = 400$ K. What is $\\Delta S_{\\text{surr}}$? (in J/K)

**2)** Using your answer from (1), what is $\\Delta S_{\\text{universe}}$? (in J/K)

**3)** Is the reaction spontaneous? (type "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['250', '200', 'yes'],
        hint1: '$\\Delta S_{\\text{surr}} = -\\Delta H/T = -(-100{,}000)/400$',
        hint2: '$\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}}$',
        hint3: 'Is $\\Delta S_{\\text{universe}} > 0$?',
        explanation: '1) $\\Delta S_{\\text{surr}} = -(-100{,}000)/400 = +250$ J/K. 2) $\\Delta S_{\\text{univ}} = -50 + 250 = +200$ J/K. 3) Yes — $\\Delta S_{\\text{univ}} > 0$, so the process is spontaneous.'
      }
    },
    {
      id: 'en3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Second Law Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At equilibrium, ΔS_universe equals',
            options: ['a positive number', 'a negative number', 'zero', 'infinity']
          },
          {
            label: 'An endothermic process can be spontaneous if',
            options: ['ΔS_system is sufficiently positive', 'ΔS_system is negative', 'temperature is very low', 'it never can be']
          },
          {
            label: 'Adding heat to a cold object changes its entropy MORE than adding the same heat to a hot object because',
            options: ['cold objects have more microstates', 'ΔS = q/T, and smaller T gives larger ΔS', 'cold objects have no entropy', 'the Second Law requires it']
          },
          {
            label: 'The entropy of the universe',
            options: ['is constant', 'always increases', 'always decreases', 'oscillates']
          }
        ],
        correctAnswers: ['zero', 'ΔS_system is sufficiently positive', 'ΔS = q/T, and smaller T gives larger ΔS', 'always increases'],
        hint1: 'Equilibrium = reversible process.',
        hint2: 'The positive ΔS_sys must overcome the negative ΔS_surr.',
        hint3: 'The temperature is in the denominator.',
        explanation: 'At equilibrium, ΔS_univ = 0. Endothermic reactions can be spontaneous if ΔS_sys is large enough. ΔS = q/T means the same q at lower T gives larger ΔS. The universe\'s entropy always increases for all spontaneous (real) processes.'
      }
    },
    {
      id: 'en3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Second Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Water freezing at −10°C is spontaneous. This means:',
            options: [
              'ΔS_system > 0',
              'ΔS_surroundings < 0',
              'ΔS_universe > 0',
              'ΔH > 0'
            ],
            correctAnswer: 2,
            explanation: 'Any spontaneous process must have $\\Delta S_{\\text{universe}} > 0$. Freezing actually decreases $\\Delta S_{\\text{sys}}$ (liquid → solid), but the exothermic heat release increases $\\Delta S_{\\text{surr}}$ enough to make $\\Delta S_{\\text{univ}} > 0$.'
          },
          {
            question: 'The conversion of diamond to graphite is thermodynamically spontaneous but does not occur at room temperature. Why?',
            options: [
              'The Second Law is wrong',
              'The process has high activation energy (kinetic barrier)',
              'ΔS_universe is actually negative',
              'Diamond has higher entropy than graphite'
            ],
            correctAnswer: 1,
            explanation: 'Thermodynamics tells us IF a process is favorable, not HOW FAST it occurs. The diamond → graphite conversion is spontaneous ($\\Delta G < 0$) but has an enormous activation energy barrier, making it infinitely slow at room temperature.'
          }
        ]
      }
    }
  ]
}
