export const chemPeriodicTrendsPart1Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt1-intro',
      type: 'text' as const,
      content: `# Part 1: Introduction to Periodic Trends

**Part 1 of 7 — Atomic Radius**

---

### Topics in This Part

| Section |
|---------|
| Key Regions |
| The Basic Idea |
| Example: Sodium (Na, $Z = 11$) |
| Key Points |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'pt1-organization',
      type: 'text' as const,
      content: `## 📊 Organization of the Periodic Table

The modern periodic table arranges elements by increasing **atomic number (Z)**.

| Term | Definition |
|------|-----------|
| **Period** | A horizontal row (1–7). Elements in the same period have the same number of electron shells. |
| **Group** | A vertical column (1–18). Elements in the same group have the same number of valence electrons and similar chemical properties. |
| **Main-group elements** | Groups 1–2 and 13–18 (s- and p-block) |
| **Transition metals** | Groups 3–12 (d-block) |


---

### Key Regions

- **Alkali metals** — Group 1 (Li, Na, K, …): 1 valence electron, very reactive
- **Alkaline earth metals** — Group 2 (Be, Mg, Ca, …): 2 valence electrons
- **Halogens** — Group 17 (F, Cl, Br, …): 7 valence electrons, very reactive nonmetals
- **Noble gases** — Group 18 (He, Ne, Ar, …): full valence shell, very low reactivity`
    },
    {
      id: 'pt1-org-quiz',
      type: 'multiple-choice' as const,
      content: `### Quick Check: Table Organization`,
      exercise: {
        questions: [
          {
            question: 'Elements in the same group of the periodic table have the same:',
            options: [
              'Number of electron shells',
              'Number of valence electrons',
              'Atomic mass',
              'Number of neutrons'
            ],
            correctAnswer: 1,
            explanation: 'Elements in the same group (vertical column) share the same number of valence electrons, which is why they exhibit similar chemical properties.'
          },
          {
            question: 'Elements in the same period share the same:',
            options: [
              'Number of valence electrons',
              'Chemical reactivity',
              'Number of electron shells (principal energy level)',
              'Electronegativity'
            ],
            correctAnswer: 2,
            explanation: 'A period is a horizontal row. All elements in Period 3 (Na through Ar), for example, have electrons filling the n = 3 shell.'
          }
        ]
      }
    },
    {
      id: 'pt1-zeff-intro',
      type: 'text' as const,
      content: `## ⚛️ Effective Nuclear Charge ($Z_{eff}$)

The single most important concept for understanding periodic trends is **effective nuclear charge**.


---

### The Basic Idea

An atom's nucleus has a charge of $+Z$ (where $Z$ = atomic number). But the outer (valence) electrons don't feel the full $+Z$ because inner-shell electrons **block** or **shield** some of that positive charge.

The net positive charge experienced by a valence electron is called the **effective nuclear charge**:

$$\\boxed{Z_{eff} = Z - S}$$

where:
- $Z$ = actual nuclear charge (atomic number)
- $S$ = shielding constant (approximately equal to the number of core electrons)

> 🔑 **Key Concept:** $Z_{eff}$ is the single most important idea for explaining periodic trends. Almost every trend can be traced back to how $Z_{eff}$ changes across a period or down a group.


---

### Example: Sodium (Na, $Z = 11$)

> **Problem:** Calculate $Z_{eff}$ for the valence electron of sodium ($Z = 11$, config: $1s^2\\,2s^2\\,2p^6\\,3s^1$).

> **Solution:** Core electrons (inner shells) = $2 + 2 + 6 = 10$. Therefore $Z_{eff} \\approx 11 - 10 = +1$. The single valence electron feels an effective pull of only about $+1$, even though the nucleus has $+11$ protons.`
    },
    {
      id: 'pt1-shielding',
      type: 'text' as const,
      content: `## �️ The Shielding Effect

**Shielding** (or screening) is the reduction of nuclear attraction experienced by valence electrons due to the repulsion from inner-shell electrons.


---

### Key Points

1. **Core electrons are effective shielders.** Electrons in inner shells ($n-1$, $n-2$, etc.) are located between the nucleus and the valence electrons, effectively canceling some nuclear charge.

2. **Valence electrons are poor shielders of each other.** Electrons in the same shell do not effectively shield one another because they are at similar distances from the nucleus.

3. **Across a period (left → right):**
   - $Z$ increases by 1 with each element
   - Electrons are added to the **same shell** (poor shielding)
   - Result: $Z_{eff}$ **increases** across a period

4. **Down a group (top → bottom):**
   - Each new period adds a new shell of core electrons (good shielding)
   - The increase in $Z$ is largely offset by the increase in $S$
   - Result: $Z_{eff}$ felt by valence electrons stays **roughly constant** or increases only slightly

> 🔑 **Key Concept:** Across a period → $Z_{eff}$ rises (same shielding, more protons). Down a group → $Z_{eff}$ stays roughly constant (shielding increases with $Z$).`
    },
    {
      id: 'pt1-zeff-quiz',
      type: 'multiple-choice' as const,
      content: `### $Z_{eff}$ Concept Check`,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why $Z_{eff}$ increases across a period?',
            options: [
              'More electron shells are added',
              'Protons are added but core electrons stay the same, so shielding does not increase',
              'The number of neutrons increases',
              'Valence electrons move farther from the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'Across a period, protons are added to the nucleus and electrons are added to the same valence shell. Since same-shell electrons shield each other poorly, the core electron count stays roughly constant while $Z$ rises, so $Z_{eff}$ increases.'
          },
          {
            question: 'Approximate the effective nuclear charge felt by a valence electron in chlorine ($Z = 17$, electron configuration $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$).',
            options: [
              '+2',
              '+5',
              '+7',
              '+17'
            ],
            correctAnswer: 2,
            explanation: 'Chlorine has 10 core electrons (in $n = 1$ and $n = 2$). $Z_{eff} \\approx 17 - 10 = +7$. The 7 valence electrons in $n = 3$ do not effectively shield each other.'
          }
        ]
      }
    },
    {
      id: 'pt1-zeff-input',
      type: 'input-box' as const,
      content: `### Calculate $Z_{eff}$

Using the approximation $Z_{eff} \\approx Z - S$ (where $S$ is the number of core electrons), calculate the effective nuclear charge for a valence electron in each element.

**1.** Beryllium (Be, $Z = 4$, config: $1s^2\\,2s^2$). Core electrons = 2.

**2.** Oxygen (O, $Z = 8$, config: $1s^2\\,2s^2\\,2p^4$). Core electrons = 2.

**3.** Potassium (K, $Z = 19$, config: $[Ar]\\,4s^1$). Core electrons = 18.`,
      exercise: {
        inputs: [
          {
            label: '$Z_{eff}$ for Be:',
            correctAnswer: '2',
            explanation: '$Z_{eff} = 4 - 2 = 2$. Beryllium has 2 core electrons in the $1s$ subshell.'
          },
          {
            label: '$Z_{eff}$ for O:',
            correctAnswer: '6',
            explanation: '$Z_{eff} = 8 - 2 = 6$. Oxygen has 2 core electrons in $1s$; the other 6 electrons are all in $n = 2$.'
          },
          {
            label: '$Z_{eff}$ for K:',
            correctAnswer: '1',
            explanation: '$Z_{eff} = 19 - 18 = 1$. Potassium has 18 core electrons (the entire argon core), leaving a single valence electron that feels only $+1$.'
          }
        ]
      }
    },
    {
      id: 'pt1-exit-quiz',
      type: 'dropdown-select' as const,
      content: `### Part 1 Summary Check

Fill in the blanks to review the key ideas.`,
      exercise: {
        dropdowns: [
          {
            label: 'Across a period, the effective nuclear charge:',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: '$Z_{eff}$ increases across a period because protons are added but shielding stays roughly constant (electrons enter the same shell).'
          },
          {
            label: 'Core electrons are ______ at shielding valence electrons compared to other valence electrons:',
            options: ['better', 'worse', 'equally effective'],
            correctIndex: 0,
            explanation: 'Core electrons are located between the nucleus and valence electrons, so they are very effective at shielding. Valence electrons in the same shell are poor shielders of each other.'
          },
          {
            label: 'Elements in the same group have similar chemical properties because they have the same number of:',
            options: ['neutrons', 'core electrons', 'valence electrons', 'protons'],
            correctIndex: 2,
            explanation: 'Valence electrons determine chemical behavior. Group members share the same valence electron count.'
          },
          {
            label: 'Down a group, $Z_{eff}$ felt by valence electrons:',
            options: ['increases dramatically', 'remains roughly constant', 'decreases to zero'],
            correctIndex: 1,
            explanation: 'Going down a group, both $Z$ and $S$ increase by similar amounts (a full shell of core electrons is added), so $Z_{eff}$ stays roughly constant.'
          }
        ]
      }
    }
  ]
}
