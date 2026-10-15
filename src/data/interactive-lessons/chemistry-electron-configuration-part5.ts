export const chemElectronConfigPart5Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec5-intro',
      type: 'text' as const,
      content: `# Part 5: Ion Configurations

**Part 5 of 7 — Ion Configurations, Typical Charges & Isoelectronic Species**

---

### The Big Ideas

| Idea | Rule | Example |
|------|------|---------|
| Typical charge | Main-group atoms gain or lose electrons to reach a noble-gas configuration | Mg → $Mg^{2+}$, O → $O^{2-}$ |
| Cation configuration | Remove electrons from the **highest n** first (4s before 3d) | Fe → $Fe^{2+}$ = [Ar] $3d^{6}$ |
| Isoelectronic species | Same number of electrons; more protons → smaller | $O^{2-}$ > $F^{-}$ > $Na^{+}$ > $Mg^{2+}$ |

> 🔑 **Why this matters:** Ion configurations explain the charges in ionic formulas and the sizes of ions, both of which the AP exam tests directly.

---

### What You'll Master in Part 5
- Predicting typical ion charges from valence electron counts
- Forming cation configurations by removing from the highest n first
- Writing anion configurations by adding electrons
- Ranking isoelectronic species by size using Coulomb's law`
    },
    {
      id: 'ec5-exceptions',
      type: 'text' as const,
      content: `## 🔋 Valence Electrons Predict Typical Charges

**Valence electrons** are the electrons in the outermost shell (highest n). They are the farthest from the nucleus, the most weakly held, and the ones involved in bonding.

For main-group elements, an atom typically gains or loses electrons until it has the same configuration as the nearest noble gas:

| Group | Valence Configuration | Valence $e^{-}$ | Typical Ion | Ion Configuration |
|-------|-----------------------|-----------------|-------------|-------------------|
| 1 (Na) | $3s^{1}$ | 1 | $Na^{+}$ | [Ne] |
| 2 (Mg) | $3s^{2}$ | 2 | $Mg^{2+}$ | [Ne] |
| 13 (Al) | $3s^{2}$ $3p^{1}$ | 3 | $Al^{3+}$ | [Ne] |
| 16 (S) | $3s^{2}$ $3p^{4}$ | 6 | $S^{2-}$ | [Ar] |
| 17 (Cl) | $3s^{2}$ $3p^{5}$ | 7 | $Cl^{-}$ | [Ar] |


---

### Why Not Lose More?

Removing an electron from a filled inner shell (a **core** electron) takes far more energy, because core electrons are much closer to the nucleus and feel a much larger effective nuclear charge. That is why Mg forms $Mg^{2+}$ but never $Mg^{3+}$.

> 🔑 **Key Point:** Elements in the same group have the same valence configuration, so they form ions with the same charge and analogous compounds (NaCl, KCl, RbCl).

> 💡 **Note:** A few transition metals, such as Cr and Cu, have ground-state configurations that differ from the Aufbau prediction. Writing these exceptions is not assessed on the AP exam.`
    },
    {
      id: 'ec5-quiz-exceptions',
      type: 'multiple-choice' as const,
      content: `### Typical Charge Check

Use valence electron counts to predict ion charges.`,
      exercise: {
        questions: [
          {
            question: 'Aluminum has the configuration [Ne] $3s^{2}$ $3p^{1}$. What ion does it typically form?',
            options: [
              '$Al^{+}$',
              '$Al^{3+}$',
              '$Al^{5-}$',
              '$Al^{2+}$'
            ],
            correctAnswer: 1,
            explanation: 'Aluminum has three valence electrons ($3s^{2}$ $3p^{1}$). Losing all three leaves the [Ne] configuration, giving $Al^{3+}$. Gaining five electrons would be far less favorable, and losing only one or two leaves a partly filled valence shell.'
          },
          {
            question: 'Why does calcium form $Ca^{2+}$ but not $Ca^{3+}$?',
            options: [
              'Calcium atoms contain only two electrons in total',
              'Its next electron is a tightly held core electron',
              'Calcium can only gain electrons, never lose them',
              'The third electron would have to come from 4p'
            ],
            correctAnswer: 1,
            explanation: 'Calcium ([Ar] $4s^{2}$) has two valence electrons. After they are removed, the next electron would come from the filled n = 3 core, which is much closer to the nucleus and held far more strongly. Calcium has 20 electrons and no electrons in 4p.'
          }
        ]
      }
    },
    {
      id: 'ec5-ions',
      type: 'text' as const,
      content: `## 🔋 Electron Configurations of Ions

### Cations (Positive Ions)
When forming cations, electrons are removed from the subshell with the **highest principal energy level (n)** first.

> ⚠️ **Critical Rule for Transition Metals:** Remove electrons from **4s before 3d**, even though 4s filled first!

---

### Example 1: $Fe^{2+}$ (Z = 26, 24 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Write neutral Fe configuration | [Ar] $4s^{2}$ $3d^{6}$ |
| 2 | Identify highest n to remove from | 4s (n = 4) |
| 3 | Remove 2 electrons from 4s | $4s^{0}$ (both 4s electrons gone) |

**$Fe^{2+}$: [Ar] $3d^{6}$**

---

### Example 2: $Fe^{3+}$ (Z = 26, 23 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Start from $Fe^{2+}$ | [Ar] $3d^{6}$ |
| 2 | 4s is already empty — remove from 3d | Remove 1 electron from 3d |
| 3 | Final configuration | [Ar] $3d^{5}$ |

**$Fe^{3+}$: [Ar] $3d^{5}$**

---

### Anions (Negative Ions)
When forming anions, electrons are **added** to the next available subshell.

### Example 3: $Cl^{-}$ (Z = 17, 18 electrons)

| Step | Action | Result |
|------|--------|--------|
| 1 | Write neutral Cl configuration | [Ne] $3s^{2}$ $3p^{5}$ |
| 2 | Add 1 electron to 3p | $3p^{5}$ → $3p^{6}$ |
| 3 | Final configuration | [Ne] $3s^{2}$ $3p^{6}$ |

**$Cl^{-}$: [Ne] $3s^{2}$ $3p^{6}$**

> 💡 $Cl^{-}$ has 18 electrons — the same as Argon. They are **isoelectronic**!`
    },
    {
      id: 'ec5-quiz-ions',
      type: 'multiple-choice' as const,
      content: `### Ion Configuration Practice

What is the electron configuration of $Ni^{2+}$?

Recall: Ni (Z = 28) has the configuration [Ar] $4s^{2}$ $3d^{8}$.`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of $Ni^{2+}$:',
            options: [
              '[Ar] $4s^{2}$ $3d^{6}$',
              '[Ar] $3d^{8}$',
              '[Ar] $4s^{1}$ $3d^{7}$',
              '[Ar] $3d^{10}$'
            ],
            correctAnswer: 1,
            explanation: 'Ni: [Ar] $4s^{2}$ $3d^{8}$. To form $Ni^{2+}$, remove the two electrons with the highest n, which are both in 4s: [Ar] $3d^{8}$. Removing from 3d first gives [Ar] $4s^{2}$ $3d^{6}$, which is a common error, and [Ar] $3d^{10}$ adds electrons instead of removing them.'
          }
        ]
      }
    },
    {
      id: 'ec5-input-ions',
      type: 'input-box' as const,
      content: `### Write Ion Configurations

Write the noble gas shorthand electron configuration for each ion (e.g., [Ar] 3d6). A formatted preview will appear as you type.

Remember: Remove electrons from the highest n first!`,
      exercise: {
        inputs: [
          {
            label: '$Mn^{2+}$ (Mn: Z = 25)',
            correctAnswer: '[Ar] 3d5',
            explanation: 'Neutral Mn: [Ar] $4s^{2}$ $3d^{5}$. Remove 2 electrons from 4s (highest n): [Ar] $3d^{5}$.'
          },
          {
            label: '$Zn^{2+}$ (Zn: Z = 30)',
            correctAnswer: '[Ar] 3d10',
            explanation: 'Neutral Zn: [Ar] $4s^{2}$ $3d^{10}$. Remove 2 electrons from 4s: [Ar] $3d^{10}$. The $Zn^{2+}$ ion has a completely filled d subshell.'
          }
        ]
      }
    },
    {
      id: 'ec5-isoelectronic',
      type: 'text' as const,
      content: `## ⚖️ Isoelectronic Species and Size

Species with the **same number of electrons** are **isoelectronic**. They have the same electron configuration but different nuclear charges.

| Species | Protons | Electrons | Configuration |
|---------|---------|-----------|---------------|
| $O^{2-}$ | 8 | 10 | $1s^{2}$ $2s^{2}$ $2p^{6}$ |
| $F^{-}$ | 9 | 10 | $1s^{2}$ $2s^{2}$ $2p^{6}$ |
| Ne | 10 | 10 | $1s^{2}$ $2s^{2}$ $2p^{6}$ |
| $Na^{+}$ | 11 | 10 | $1s^{2}$ $2s^{2}$ $2p^{6}$ |
| $Mg^{2+}$ | 12 | 10 | $1s^{2}$ $2s^{2}$ $2p^{6}$ |


---

### Ranking Their Sizes

All five have 10 electrons in the same shells, so shielding is about the same. The difference is the number of protons:
- More protons → greater attraction (Coulomb's law) for the same electrons → electrons pulled closer → **smaller** radius

$$O^{2-} > F^{-} > Ne > Na^{+} > Mg^{2+}$$

> 🔑 **AP Tip:** In an isoelectronic series, the species with the most protons is the smallest. Explain it with nuclear charge, not "more electrons."`
    },
    {
      id: 'ec5-dropdown-tricky',
      type: 'dropdown-select' as const,
      content: `### Tricky Ion Problems

These require careful attention to ion formation rules.`,
      exercise: {
        dropdowns: [
          {
            label: 'Which ion is isoelectronic with Ar (18 electrons)?',
            options: ['$Na^{+}$', '$Mg^{2+}$', '$K^{+}$', '$Fe^{2+}$'],
            correctIndex: 2,
            explanation: '$K^{+}$: potassium (Z = 19) loses 1 electron → 18 electrons, same as Ar. $Na^{+}$ has 10 electrons (like Ne), $Mg^{2+}$ has 10 electrons (like Ne), and $Fe^{2+}$ has 24 electrons. Only $K^{+}$ matches Ar\'s 18 electrons.'
          },
          {
            label: 'What is the electron configuration of $V^{3+}$? (V: [Ar] $4s^{2}$ $3d^{3}$)',
            options: ['[Ar] $4s^{2}$', '[Ar] $3d^{2}$', '[Ar] $4s^{1}$ $3d^{1}$', '[Ar] $3d^{3}$'],
            correctIndex: 1,
            explanation: 'Remove the two 4s electrons first, then one 3d electron: [Ar] $3d^{2}$. Removing all three from 3d would wrongly leave [Ar] $4s^{2}$.'
          },
          {
            label: 'Which of these isoelectronic species has the smallest radius?',
            options: ['$S^{2-}$', '$Cl^{-}$', '$K^{+}$', '$Ca^{2+}$'],
            correctIndex: 3,
            explanation: 'All four have 18 electrons. $Ca^{2+}$ has the most protons (20), so it pulls the same electron cloud in most tightly and is the smallest.'
          }
        ]
      }
    },
    {
      id: 'ec5-summary',
      type: 'text' as const,
      content: `## 📋 Part 5 Summary: Ion Configurations

---

### 📌 Ion Configuration Rules

| Ion Type | Rule | Example |
|----------|------|---------|
| Main-group ions | Gain or lose valence electrons to reach a noble-gas configuration | $Al^{3+}$, $S^{2-}$ |
| Transition-metal cations | Remove from **highest n** first | $Fe^{2+}$: remove $4s^{2}$ → [Ar] $3d^{6}$ |
| Anions (−) | Add to next available subshell | $Cl^{-}$: add to 3p → [Ne] $3s^{2}$ $3p^{6}$ |
| Isoelectronic | Same $e^{-}$ count; more protons → smaller | $Na^{+}$ < $F^{-}$ (both 10 $e^{-}$) |

> ⚠️ **AP Trap:** For transition metal cations, always remove 4s electrons before 3d — even though 4s filled first!

---

### ✅ Your Checklist Before Moving On

- ☐ I can predict typical ion charges from valence electrons
- ☐ I can write ion configurations by removing from the highest n first
- ☐ I can identify isoelectronic species and rank them by size
- ☐ I will not mistakenly remove 3d electrons before 4s when forming cations

---

### 🔮 What's Next

In **Part 6**, we explore **orbital diagrams** (box-arrow notation), count unpaired electrons, and connect configurations to the energy needed to remove each electron.`
    }
  ]
}
