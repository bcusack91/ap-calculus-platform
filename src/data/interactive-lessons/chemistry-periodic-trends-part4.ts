export const chemPeriodicTrendsPart4Data = {
  topicSlug: 'periodic-trends',
  sections: [
    {
      id: 'pt4-intro',
      type: 'text' as const,
      content: `# Part 4: Electron Affinity

**Part 4 of 7 — How Much Do Atoms Want More Electrons?**

---

### Topics in This Part

| Section |
|---------|
| Sign Convention |
| Example Values (kJ/mol) |
| Across a Period (Left → Right) |
| Down a Group (Top → Bottom) |
| The Fluorine Anomaly |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'pt4-definition',
      type: 'text' as const,
      content: `## 📖 What Is Electron Affinity?

**Electron affinity (EA)** is the energy change that occurs when a gaseous atom gains an electron:

$$\\boxed{X(g) + e^- \\rightarrow X^-(g) \\qquad \\Delta E = EA}$$


---

### Sign Convention

- A **negative** EA means energy is **released** — the atom **wants** the electron (exothermic).
- A **more negative** EA means a **greater** tendency to gain an electron.
- A **positive** EA means energy must be **added** — the atom resists gaining an electron.


---

### Example Values (kJ/mol)

| Element | EA (kJ/mol) |
|---------|------------|
| F | −328 |
| Cl | −349 |
| Br | −325 |
| O | −141 |
| N | ≈ 0 |
| Ne | > 0 |

Notice that **chlorine** has the most negative EA of any element — even more than fluorine!`
    },
    {
      id: 'pt4-trends',
      type: 'text' as const,
      content: `## 📈 General Trends

### Across a Period (Left → Right)

Electron affinity **generally becomes more negative** (more favorable) across a period.

**Why?**
- $Z_{eff}$ increases across a period
- The atom has a stronger pull on an incoming electron
- Nonmetals (right side) have the most negative EA values


---

### Down a Group (Top → Bottom)

Electron affinity generally **becomes less negative** (less favorable) down a group.

**Why?**
- Valence shell is farther from the nucleus
- The incoming electron feels less attraction
- Exception: fluorine vs. chlorine (see below)


---

### The Fluorine Anomaly

> ⚠️ **Warning:** Fluorine's EA (−328 kJ/mol) is **less negative** than chlorine's (−349 kJ/mol). This is a common AP exam question!

Fluorine is so small that adding an electron to its compact $2p$ orbitals creates significant **electron-electron repulsion**. Chlorine's larger $3p$ orbitals accommodate the extra electron more easily.`
    },
    {
      id: 'pt4-exceptions',
      type: 'text' as const,
      content: `## ⚠️ Important Exceptions

Several elements have **near-zero or positive** electron affinities:


---

### 1. Noble Gases (Group 18)
Full valence shells — no room for an additional electron without going to a higher energy level. EA is positive (unfavorable).


---

### 2. Nitrogen ($2p^3$)
Has a half-filled $2p$ subshell. Adding an electron would break this stable half-filled configuration. EA ≈ 0.


---

### 3. Group 2 Elements (Be, Mg, Ca)
Full $s$ subshell ($ns^2$). An added electron would go into a higher-energy $p$ orbital. EA is near zero or slightly positive.


---

### AP Exam Tip

> 💡 **Tip:** The AP exam often asks you to **explain** why certain elements have unexpectedly low (or positive) electron affinities. Always connect your answer to **electron configuration stability** (filled or half-filled subshells).`
    },
    {
      id: 'pt4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `### Electron Affinity Concepts`,
      exercise: {
        questions: [
          {
            question: 'Which of the following elements has the most negative (most favorable) electron affinity?',
            options: [
              'Na',
              'Cl',
              'Ar',
              'Mg'
            ],
            correctAnswer: 1,
            explanation: 'Cl is a halogen (Group 17) with a strong tendency to gain one electron to complete its octet. Halogens have the most negative electron affinities. Ar (noble gas) and Mg (filled $s$ subshell) have near-zero or positive EAs.'
          },
          {
            question: 'Why does nitrogen have a near-zero electron affinity?',
            options: [
              'Nitrogen is too small to hold another electron',
              'Nitrogen already has a full octet',
              'Adding an electron would disrupt the stable half-filled $2p^3$ configuration',
              'Nitrogen has too many protons'
            ],
            correctAnswer: 2,
            explanation: 'Nitrogen has the configuration $2p^3$ with one electron in each $2p$ orbital (half-filled). Adding a fourth $2p$ electron would force pairing, disrupting this extra stability. The energy released by gaining the electron is offset by the loss of exchange energy.'
          },
          {
            question: 'A more negative electron affinity value means the atom:',
            options: [
              'Releases more energy when gaining an electron',
              'Requires more energy to gain an electron',
              'Has a larger atomic radius',
              'Has a lower ionization energy'
            ],
            correctAnswer: 0,
            explanation: 'A more negative EA means the process $X + e^- \\rightarrow X^-$ is more exothermic — the atom releases more energy upon gaining an electron, indicating a stronger tendency to form an anion.'
          }
        ]
      }
    },
    {
      id: 'pt4-comparison-dropdown',
      type: 'dropdown-select' as const,
      content: `### Comparing Electron Affinities`,
      exercise: {
        dropdowns: [
          {
            label: 'Between F and Cl, the element with the MORE negative EA is:',
            options: ['F', 'Cl', 'They are equal'],
            correctIndex: 1,
            explanation: 'Chlorine (EA = −349 kJ/mol) has a more negative EA than fluorine (EA = −328 kJ/mol) because fluorine is so small that electron-electron repulsion in the compact $2p$ orbitals partially offsets the energy gain.'
          },
          {
            label: 'The electron affinity of neon is:',
            options: ['very negative', 'slightly negative', 'near zero or positive'],
            correctIndex: 2,
            explanation: 'Neon has a completely filled valence shell ($2s^2\\,2p^6$). An incoming electron would have to enter the $3s$ orbital — a much higher energy level. This is highly unfavorable, giving a positive EA.'
          },
          {
            label: 'Moving from left to right across Period 3 (Na to Cl), electron affinity generally:',
            options: ['becomes more negative', 'becomes more positive', 'stays constant'],
            correctIndex: 0,
            explanation: 'Increasing $Z_{eff}$ across the period means the atom has a stronger attraction for an incoming electron, making the EA more negative (more energy released).'
          },
          {
            label: 'Beryllium (Group 2) has a nearly zero EA because:',
            options: [
              'Its nucleus is too small',
              'Its 2s subshell is full, so the added electron would go to the higher-energy 2p',
              'It has too many neutrons',
              'It is a metal and metals always have zero EA'
            ],
            correctIndex: 1,
            explanation: 'Beryllium has the configuration $1s^2\\,2s^2$. The $2s$ subshell is full, so an added electron would enter the $2p$ subshell, which is higher in energy. This makes the electron gain energetically unfavorable.'
          }
        ]
      }
    },
    {
      id: 'pt4-practice-input',
      type: 'input-box' as const,
      content: `### Practice

**1.** Of the following — Na, S, Cl, Ar — which element has the most negative electron affinity? (Type the symbol.)

**2.** An element in Period 2 has a near-zero electron affinity and a half-filled $p$ subshell. What is this element? (Type the symbol.)`,
      exercise: {
        inputs: [
          {
            label: 'Most negative EA:',
            correctAnswer: 'Cl',
            explanation: 'Cl is the halogen in this group. It needs just one electron to achieve a noble gas configuration, giving it the most negative EA. Ar (noble gas) has positive EA; Na and S have less negative values than Cl.'
          },
          {
            label: 'Element with half-filled p subshell:',
            correctAnswer: 'N',
            explanation: 'Nitrogen ($1s^2\\,2s^2\\,2p^3$) has a half-filled $2p$ subshell. The extra stability of this configuration means adding an electron releases very little energy (EA ≈ 0).'
          }
        ]
      }
    },
    {
      id: 'pt4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `### Exit Quiz`,
      exercise: {
        questions: [
          {
            question: 'Which statement about electron affinity is INCORRECT?',
            options: [
              'Halogens generally have the most negative electron affinities',
              'Noble gases have positive electron affinities',
              'Electron affinity always becomes more negative going down a group',
              'Nitrogen has a near-zero electron affinity due to its half-filled $2p$ subshell'
            ],
            correctAnswer: 2,
            explanation: 'Statement C is incorrect. While EA generally becomes less negative going down a group, there are exceptions (e.g., Cl has a more negative EA than F). The trend down a group is less consistent than other periodic trends.'
          },
          {
            question: 'Which element would you expect to have the most negative electron affinity?',
            options: [
              'O',
              'Ne',
              'Br',
              'Ca'
            ],
            correctAnswer: 2,
            explanation: 'Br is a halogen (Group 17). Halogens have the most negative EAs because they need only one electron to complete their octet. O is somewhat negative but less so than halogens. Ne (noble gas) and Ca (Group 2) have near-zero or positive EAs.'
          }
        ]
      }
    }
  ]
}
