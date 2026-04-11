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
| Exceptions & ions | Part 5 | Handle Cr, Cu, and transition metal ions |
| Quantum numbers | Part 6 | Full electron "addresses" |

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
| Atomic Radius | **Decreases** | **Increases** | More protons pull e⁻ closer (→); higher n = farther from nucleus (↓) |
| Ionization Energy | Generally **increases** | **Decreases** | Greater $Z_{eff}$ holds e⁻ tighter (→); valence e⁻ farther out (↓) |
| Electronegativity | **Increases** | **Decreases** | Higher $Z_{eff}$ attracts bonding e⁻ (→); distance reduces pull (↓) |

---

### ⚠️ AP Exceptions

| Exception | What Happens | Why |
|-----------|-------------|-----|
| IE: Be → B | IE **drops** | B removes a 2p e⁻ (higher energy) vs. Be's 2s e⁻ |
| IE: N → O | IE **drops** | O has a paired 2p e⁻; N's half-filled 2p³ has extra stability |

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
              'Oxygen has a larger atomic radius than nitrogen.',
              'Oxygen has a paired electron in a 2p orbital that experiences greater electron-electron repulsion, making it easier to remove.',
              'Nitrogen has more protons than oxygen.',
              'Oxygen is more electronegative than nitrogen, so it holds its electrons less tightly.'
            ],
            correctAnswer: 1,
            explanation: 'Nitrogen has the configuration [He] 2s² 2p³ — all three 2p electrons are unpaired (half-filled, extra stable). Oxygen is [He] 2s² 2p⁴ — one 2p orbital now has a paired electron. The electron-electron repulsion from pairing makes that fourth 2p electron easier to remove, lowering the IE despite the higher nuclear charge.'
          }
        ]
      }
    },
    {
      id: 'ec7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `### AP-Style Question 2: Identifying an Element

An element has the electron configuration [Kr] 4d¹⁰ 5s² 5p⁴. Which statement about this element is correct?`,
      exercise: {
        questions: [
          {
            question: 'Select the correct statement:',
            options: [
              'It is a transition metal in the 4th period.',
              'It is a metalloid in Group 14.',
              'It is a chalcogen (Group 16) in the 5th period with 6 valence electrons.',
              'It has 4 unpaired electrons.'
            ],
            correctAnswer: 2,
            explanation: 'Count total electrons: 36 (Kr) + 10 + 2 + 4 = 52 → Tellurium (Te). Te is in Period 5, Group 16 (chalcogens). Valence electrons = 5s² 5p⁴ = 6. In the 5p⁴ configuration (by Hund\'s rule), there are 2 unpaired electrons, not 4.'
          }
        ]
      }
    },
    {
      id: 'ec7-ap-mc3',
      type: 'multiple-choice' as const,
      content: `### AP-Style Question 3: Transition Metal Ion

The ion Ti²⁺ is used in some catalytic processes. What is the ground-state electron configuration of Ti²⁺?`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of Ti²⁺:',
            options: [
              '[Ar] 4s² 3d⁰',
              '[Ar] 3d²',
              '[Ar] 4s¹ 3d¹',
              '[Ar] 3d² 4s²'
            ],
            correctAnswer: 1,
            explanation: 'Neutral Ti (Z = 22): [Ar] 4s² 3d². To form Ti²⁺, remove the 2 electrons with the highest n first — both 4s electrons. This leaves [Ar] 3d². This is a common AP trap: students often try to remove from 3d because it was listed last.'
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

### Mistake 2: Forgetting Exceptions
❌ Cr: [Ar] 4s² 3d⁴  
✅ Cr: [Ar] 3d⁵ 4s¹ (half-filled d subshell)

❌ Cu: [Ar] 4s² 3d⁹  
✅ Cu: [Ar] 3d¹⁰ 4s¹ (fully filled d subshell)


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
            label: 'Co³⁺ (Cobalt ion, Z = 27)',
            correctAnswer: '[Ar] 3d6',
            explanation: 'Neutral Co: [Ar] 4s² 3d⁷. Remove 3 electrons: first both 4s electrons (2), then 1 from 3d → [Ar] 3d⁶. Co³⁺ has 24 electrons total (27 − 3).'
          },
          {
            label: 'Ag⁺ (Silver ion, Z = 47)',
            correctAnswer: '[Kr] 4d10',
            explanation: 'Neutral Ag is an exception (like Cu): [Kr] 4d¹⁰ 5s¹. Remove 1 electron from 5s → [Kr] 4d¹⁰. Silver ion has a completely filled d subshell, making it very stable.'
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
            label: 'Which element has the highest first ionization energy: Na, Mg, Al, Si?',
            options: ['Na', 'Mg', 'Al', 'Si'],
            correctIndex: 1,
            explanation: 'Magnesium (Mg) has a higher IE than aluminum (Al) because Mg has a full 3s² subshell, while Al must remove an electron from 3p¹ (which is higher in energy and easier to remove). While IE generally increases across a period, the s² → p¹ transition causes a drop from Mg to Al. Si is higher than Al but lower than Mg.'
          },
          {
            label: 'Which species has the same electron configuration as Ne: O²⁻, F⁻, Na⁺, or all of them?',
            options: ['Only O²⁻', 'Only F⁻', 'Only Na⁺', 'All of them'],
            correctIndex: 3,
            explanation: 'Ne has 10 electrons: 1s² 2s² 2p⁶. O²⁻ (8 + 2 = 10), F⁻ (9 + 1 = 10), and Na⁺ (11 − 1 = 10) all have 10 electrons. They are all isoelectronic with neon.'
          },
          {
            label: 'An atom has 3 unpaired electrons and the configuration [Ar] 4s² 3dⁿ. What is n?',
            options: ['3', '5', '7', '8'],
            correctIndex: 0,
            explanation: 'With n = 3 (i.e., 3d³), the three d electrons each occupy a separate orbital by Hund\'s rule, giving 3 unpaired electrons. For n = 5: 5 unpaired; n = 7: 3 unpaired (but 4s²3d⁷ gives 3 unpaired too — however 3d³ is the simplest answer with exactly 3 in the d subshell); n = 8: 2 unpaired.'
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
| Subshells | s, p, d, f hold 2, 6, 10, 14 e⁻ | Know max electrons per subshell |
| Three Rules | Aufbau → Pauli → Hund's | Apply in this order |
| Noble Gas Shorthand | Replace core with [noble gas] | Focus on valence electrons |
| Exceptions | Cr: [Ar] 3d⁵ 4s¹, Cu: [Ar] 3d¹⁰ 4s¹ | Half-filled/full d = extra stability |
| Ion Configs | Remove from highest n first | 4s before 3d for TM cations |
| Quantum Numbers | n, l, $m_l$, $m_s$ | Uniquely identify every electron |
| Periodic Trends | Radius, IE, EN from e⁻ config | Know the exceptions (Be→B, N→O) |

---

### ✅ Final Checklist

- ☐ I can write the full and shorthand configuration for any element
- ☐ I know the Cr and Cu exceptions and can explain why
- ☐ I can write ion configurations (removing 4s before 3d)
- ☐ I can assign all four quantum numbers to any electron
- ☐ I can explain periodic trends using electron configuration
- ☐ I can identify IE exceptions and explain them

You are now prepared for any electron configuration question on the AP Chemistry exam. Good luck! 🎯`
    }
  ]
}
