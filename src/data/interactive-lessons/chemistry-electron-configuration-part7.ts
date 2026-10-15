export const chemElectronConfigPart7Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec7-intro',
      type: 'text' as const,
      content: `# Part 7: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

---

### Concepts You'll Integrate

| Concept | From Part | How It Connects |
|---------|-----------|----------------|
| Subatomic particles | Part 1 | Identify elements from configurations |
| Aufbau filling order | Part 2 | Write any configuration correctly |
| Three rules | Part 3 | Avoid common errors |
| Noble gas shorthand | Part 4 | Simplify and focus on valence electrons |
| Ion configurations | Part 5 | Typical charges, transition-metal ions, isoelectronic sizes |
| Orbital diagrams & Coulomb's law | Part 6 | Unpaired electrons and how tightly each electron is held |

> 🔑 **Why this matters:** The AP exam tests electron configuration in multiple-choice, free-response, AND as background knowledge for bonding, periodicity, and spectroscopy questions.

---

### What You'll Master in Part 7
- Solving multi-concept problems that combine configurations with periodic trends
- Connecting ionization energy exceptions to electron configuration
- Identifying elements from configurations and predicting ion behavior`
    },
    {
      id: 'ec7-trends-review',
      type: 'text' as const,
      content: `## 📈 Electron Configuration and Periodic Trends

Electron configurations explain **why** periodic trends exist:

| Trend | Across a Period (→) | Down a Group (↓) | Why |
|-------|---------------------|-------------------|-----|
| Atomic Radius | **Decreases** | **Increases** | More protons pull $e^{-}$ closer (→); higher n = farther from nucleus (↓) |
| Ionization Energy | Generally **increases** | **Decreases** | Greater $Z_{eff}$ holds $e^{-}$ tighter (→); valence $e^{-}$ farther out (↓) |
| Electronegativity | **Increases** | **Decreases** | Higher $Z_{eff}$ attracts bonding $e^{-}$ (→); distance reduces pull (↓) |

---

### ⚠️ AP Exceptions

| Exception | What Happens | Why |
|-----------|-------------|-----|
| IE: Be → B | IE **drops** | B removes a 2p $e^{-}$ (higher energy) vs. Be's 2s $e^{-}$ |
| IE: N → O | IE **drops** | O has a paired 2p $e^{-}$; N's half-filled $2p^{3}$ has extra stability |

> ⚠️ These exceptions are **frequently tested** on the AP exam. Always connect your explanation back to electron configuration and subshell occupancy.`
    },
    {
      id: 'ec7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `### AP-Style Question 1: Ionization Energy Exception

The first ionization energy of oxygen (Z = 8) is **lower** than that of nitrogen (Z = 7), even though oxygen has a higher atomic number. Which explanation best accounts for this?`,
      exercise: {
        questions: [
          {
            question: 'Why is the first IE of O lower than that of N?',
            options: [
              'Oxygen has a larger atomic radius, so its 2p electron is farther out.',
              'Oxygen has a paired 2p electron, and the repulsion within that pair makes it easier to remove.',
              'Oxygen\'s 2p electrons are shielded by more core electrons.',
              'Oxygen\'s half-filled 2p subshell gives up an electron easily.'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen has the configuration [He] $2s^{2}$ $2p^{3}$ — all three 2p electrons are unpaired (half-filled, extra stable). Oxygen is [He] $2s^{2}$ $2p^{4}$ — one 2p orbital now has a paired electron. The electron-electron repulsion from pairing makes that fourth 2p electron easier to remove, lowering the IE despite the higher nuclear charge. Both atoms have the same $1s^{2}$ core, and oxygen is slightly smaller than nitrogen, so neither size nor shielding explains the dip.'
          }
        ]
      }
    },
    {
      id: 'ec7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `### AP-Style Question 2: Identifying an Element

An element has the electron configuration [Kr] $4d^{10}$ $5s^{2}$ $5p^{4}$. Which statement about this element is correct?`,
      exercise: {
        questions: [
          {
            question: 'Select the correct statement:',
            options: [
              'It is a transition metal, since it has a filled 4d subshell.',
              'It is a metalloid in Group 14 with 4 valence electrons.',
              'It is in Group 16 and Period 5, with 6 valence electrons in its 5s and 5p subshells.',
              'It has 4 unpaired electrons in its 5p subshell.'
            ],
            correctAnswer: 2,
            explanation: 'Count total electrons: 36 (Kr) + 10 + 2 + 4 = 52 → Tellurium (Te). Te is in Period 5, Group 16 (a chalcogen). Valence electrons = $5s^{2}$ $5p^{4}$ = 6. A filled 4d subshell does not make it a transition metal, because its outermost electrons are in 5p. The 5p subshell has only three orbitals, so four 5p electrons must include one pair: by Hund\'s rule there are 2 unpaired electrons, not 4.'
          }
        ]
      }
    },
    {
      id: 'ec7-ap-mc3',
      type: 'multiple-choice' as const,
      content: `### AP-Style Question 3: Transition Metal Ion

The ion $Ti^{2+}$ is used in some catalytic processes. What is the ground-state electron configuration of $Ti^{2+}$?`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of $Ti^{2+}$:',
            options: [
              '[Ar] $4s^{2}$ $3d^{0}$',
              '[Ar] $3d^{2}$',
              '[Ar] $4s^{1}$ $3d^{1}$',
              '[Ar] $3d^{2}$ $4s^{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Neutral Ti (Z = 22): [Ar] $4s^{2}$ $3d^{2}$. To form $Ti^{2+}$, remove the 2 electrons with the highest n first — both 4s electrons. This leaves [Ar] $3d^{2}$. This is a common AP trap: students often try to remove from 3d because it was listed last.'
          }
        ]
      }
    },
    {
      id: 'ec7-common-mistakes',
      type: 'text' as const,
      content: `## 📌 Common AP Mistakes to Avoid

### Mistake 1: Ion Configurations
❌ Removing electrons from the last-filled subshell (3d)  
✅ Remove from the **highest n** first (4s before 3d for transition metals)


---

### Mistake 2: Forgetting to Adjust the Electron Count for an Ion
❌ $S^{2-}$: [Ne] $3s^{2}$ $3p^{4}$ (that is neutral S, with 16 electrons)  
✅ $S^{2-}$: [Ne] $3s^{2}$ $3p^{6}$ = [Ar] (16 + 2 = 18 electrons)

❌ $Al^{3+}$: [Ne] $3s^{2}$ $3p^{1}$  
✅ $Al^{3+}$: [Ne] (13 − 3 = 10 electrons)


---

### Mistake 3: Wrong Noble Gas Core
❌ Using [Kr] for elements with Z < 36  
✅ Always use the noble gas that comes **immediately before** the element


---

### Mistake 4: Violating Hund's Rule
❌ Pairing electrons in a 2p orbital before all three 2p orbitals have one electron  
✅ Fill all degenerate orbitals singly (with parallel spins) before pairing`
    },
    {
      id: 'ec7-input-challenge',
      type: 'input-box' as const,
      content: `### Challenge Problems

Write the electron configuration in noble gas shorthand (e.g., [Ar] 3d5 4s1). A formatted preview will appear as you type.`,
      exercise: {
        inputs: [
          {
            label: '$Co^{3+}$ (Cobalt ion, Z = 27)',
            correctAnswer: '[Ar] 3d6',
            explanation: 'Neutral Co: [Ar] $4s^{2}$ $3d^{7}$. Remove 3 electrons: first both 4s electrons (2), then 1 from 3d → [Ar] $3d^{6}$. $Co^{3+}$ has 24 electrons total (27 − 3).'
          },
          {
            label: '$Cd^{2+}$ (Cadmium ion, Z = 48)',
            correctAnswer: '[Kr] 4d10',
            explanation: 'Neutral Cd: [Kr] $5s^{2}$ $4d^{10}$. Remove the 2 electrons with the highest n, both from 5s → [Kr] $4d^{10}$. The ion has a completely filled d subshell.'
          }
        ]
      }
    },
    {
      id: 'ec7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `### Synthesis Questions

These questions connect electron configuration to other chemistry concepts.`,
      exercise: {
        dropdowns: [
          {
            label: 'Which element has the highest first ionization energy: Na, Mg, Al, K?',
            options: ['Na', 'Mg', 'Al', 'K'],
            correctIndex: 1,
            explanation: 'Magnesium (Mg, 738 kJ/mol) has the highest IE of these. Mg has a full $3s^{2}$ subshell, while Al must remove an electron from $3p^{1}$, which is higher in energy and easier to remove (578 kJ/mol), so IE drops from Mg to Al even though IE generally increases across a period. Na (496 kJ/mol) has a lower $Z_{eff}$, and K (419 kJ/mol) has its valence electron in n = 4, farther from the nucleus. (Past Al the rise resumes: Si, at 787 kJ/mol, is higher than Mg.)'
          },
          {
            label: 'Which species has the same electron configuration as Ne: $O^{2-}$, $F^{-}$, $Na^{+}$, or all of them?',
            options: ['Only $O^{2-}$', 'Only the two anions', 'Only $Na^{+}$', 'All three ions'],
            correctIndex: 3,
            explanation: 'Ne has 10 electrons: $1s^{2}$ $2s^{2}$ $2p^{6}$. $O^{2-}$ (8 + 2 = 10), $F^{-}$ (9 + 1 = 10), and $Na^{+}$ (11 − 1 = 10) all have 10 electrons. They are all isoelectronic with neon.'
          },
          {
            label: 'An atom has 3 unpaired electrons and the configuration [Ar] $4s^{2}$ $3d^{n}$. What is n?',
            options: ['3', '5', '6', '8'],
            correctIndex: 0,
            explanation: 'With n = 3 ($3d^{3}$), the three d electrons each occupy a separate orbital by Hund\'s rule, giving 3 unpaired electrons. $3d^{5}$ gives 5 unpaired, $3d^{6}$ gives 4 (the sixth electron pairs up in one orbital), and $3d^{8}$ gives 2.'
          }
        ]
      }
    },
    {
      id: 'ec7-final-summary',
      type: 'text' as const,
      content: `## 📋 Final Summary: Electron Configuration Mastery

Congratulations on completing all 7 parts! Here is everything you need to know:

---

### 🧰 Master Reference Table

| Topic | Key Fact | AP Must-Know |
|-------|----------|-------------|
| Subshells | s, p, d, f hold 2, 6, 10, 14 $e^{-}$ | Know max electrons per subshell |
| Three Rules | Aufbau → Pauli → Hund's | Apply in this order |
| Noble Gas Shorthand | Replace core with [noble gas] | Focus on valence electrons |
| Ion Configs | Remove from highest n first | 4s before 3d for TM cations |
| Orbital Diagrams | Boxes and arrows; Hund's rule | Count unpaired electrons |
| Coulomb's Law | $F \\propto q_1q_2/r^2$ | Core electrons held more tightly than valence |
| Periodic Trends | Radius, IE, EN from $e^{-}$ config | Know the exceptions (Be→B, N→O) |

---

### ✅ Final Checklist

- ☐ I can write the full and shorthand configuration for any element
- ☐ I can write ion configurations (removing 4s before 3d)
- ☐ I can draw orbital diagrams and count unpaired electrons
- ☐ I can use Coulomb's law to compare how tightly electrons are held
- ☐ I can explain periodic trends using electron configuration
- ☐ I can identify IE exceptions and explain them

You are now prepared for any electron configuration question on the AP Chemistry exam. Good luck! 🎯`
    }
  ]
}
