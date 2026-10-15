export const chemElectronConfigPart6Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec6-intro',
      type: 'text' as const,
      content: `# Part 6: Orbital Diagrams and Coulomb's Law

**Part 6 of 7 — Orbital Diagrams, Unpaired Electrons & Coulomb's Law**

---

### Three Ways to Look at the Same Electrons

| Level of Detail | What It Tells You | Example (oxygen) |
|----------------|-------------------|----------------------------|
| Configuration | Which subshells are occupied | $1s^{2}$ $2s^{2}$ $2p^{4}$ |
| Orbital diagram | How electrons are arranged in each orbital | 2p: ↑↓ ↑ ↑ |
| Coulomb's law | How strongly each electron is held | 1s held far more tightly than 2p |

> 🔑 **Why this matters:** Orbital diagrams show pairing, and Coulomb's law explains why some electrons are much harder to remove than others. Both ideas feed directly into PES and periodic trends.

---

### What You'll Master in Part 6
- Drawing orbital diagrams with correct Hund's rule application
- Counting unpaired electrons in atoms and ions
- Using Coulomb's law to compare how strongly different electrons are held`
    },
    {
      id: 'ec6-orbital-diagrams',
      type: 'text' as const,
      content: `## 📝 Orbital Diagrams (Box-Arrow Notation)

An orbital diagram represents each orbital as a **box** (or line) and each electron as an **arrow**. The two electrons in one orbital are drawn with opposite arrows (↑↓) to show opposite spins.

**Example: Nitrogen (N, Z = 7)**

| 1s | 2s | 2p |
|:---:|:---:|:---:|
| ↑↓ | ↑↓ | ↑ ↑ ↑ |

Each of the three 2p orbitals gets **one electron first** (Hund's rule) before any pairing occurs. All three unpaired electrons have the same spin direction.

> 🔑 **Key Rule:** Hund’s Rule in action — fill each orbital singly with parallel spins before any pairing. This minimizes electron-electron repulsion.

**Example: Oxygen (O, Z = 8)**

| 1s | 2s | 2p |
|:---:|:---:|:---:|
| ↑↓ | ↑↓ | ↑↓ ↑ ↑ |

Oxygen has 8 electrons. After filling the three 2p orbitals singly (like nitrogen), the 8th electron pairs up in the first 2p orbital.`
    },
    {
      id: 'ec6-quiz-hund',
      type: 'multiple-choice' as const,
      content: `### Hund's Rule Application

How many unpaired electrons does nitrogen (N, Z = 7) have?`,
      exercise: {
        questions: [
          {
            question: 'Unpaired electrons in nitrogen:',
            options: ['0', '1', '2', '3'],
            correctAnswer: 3,
            explanation: 'Nitrogen has the configuration $1s^{2}$ $2s^{2}$ $2p^{3}$. The three 2p electrons each occupy a separate orbital (Hund\'s rule), so nitrogen has 3 unpaired electrons.'
          }
        ]
      }
    },
    {
      id: 'ec6-quantum-numbers',
      type: 'text' as const,
      content: `## ⚡ Coulomb's Law Inside the Atom

The attraction between an electron and the nucleus follows **Coulomb's law**:

$$\\boxed{F \\propto \\frac{q_1 q_2}{r^2}}$$

- Larger charges ($q$) → stronger attraction
- Greater distance ($r$) → weaker attraction


---

### Comparing Electrons in the Same Atom

In sodium, $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{1}$:
- The **1s** electrons are closest to the nucleus and feel almost the full +11 charge → held most tightly
- The **3s** valence electron is farthest away and is shielded by 10 core electrons → held least tightly

So the energy needed to remove an electron is much greater for an inner (core) electron than for a valence electron.


---

### Comparing the Same Subshell in Different Atoms

| Comparison | Which Electron Is Held More Tightly? | Coulomb's-Law Reason |
|------------|--------------------------------------|----------------------|
| 2s of Li vs. 3s of Na | Li 2s | Smaller $r$ (n = 2 vs. n = 3) with similar effective nuclear charge |
| 3s of Na vs. 3s of Mg | Mg 3s | Same shell, but Mg has one more proton and similar shielding |
| 2p of O vs. 2p of F | F 2p | Same shell, greater effective nuclear charge in F |

> 🔑 **Key Point:** Effective nuclear charge is the nuclear charge an electron actually "feels" after shielding by inner electrons. Electrons in the same shell shield each other only weakly.`
    },
    {
      id: 'ec6-quantum-table',
      type: 'text' as const,
      content: `## 📋 Counting Unpaired Electrons

Draw the orbital diagram for the **partly filled** subshell, then count single arrows.

| Species | Partly Filled Subshell | Orbital Diagram | Unpaired $e^{-}$ |
|---------|------------------------|-----------------|------------------|
| C | $2p^{2}$ | ↑ ↑ _ | 2 |
| O | $2p^{4}$ | ↑↓ ↑ ↑ | 2 |
| P | $3p^{3}$ | ↑ ↑ ↑ | 3 |
| $Fe^{2+}$ | $3d^{6}$ | ↑↓ ↑ ↑ ↑ ↑ | 4 |
| $Zn^{2+}$ | $3d^{10}$ | ↑↓ ↑↓ ↑↓ ↑↓ ↑↓ | 0 |

> ⚠️ **Ion Reminder:** For transition-metal cations, write the ion configuration first (remove 4s electrons before 3d), then draw the d orbitals.`
    },
    {
      id: 'ec6-quiz-quantum',
      type: 'dropdown-select' as const,
      content: `### Orbital Diagram and Coulomb's Law Practice

Apply Hund's rule and Coulomb's law.`,
      exercise: {
        dropdowns: [
          {
            label: 'How many unpaired electrons does sulfur ([Ne] $3s^{2}$ $3p^{4}$) have?',
            options: ['0', '1', '2', '4'],
            correctIndex: 2,
            explanation: 'Four 3p electrons fill the three 3p orbitals as ↑↓ ↑ ↑, leaving 2 unpaired electrons.'
          },
          {
            label: 'Which electron in a potassium atom is held LEAST tightly?',
            options: ['a 1s electron', 'a 2p electron', 'a 3p electron', 'the 4s electron'],
            correctIndex: 3,
            explanation: 'The 4s valence electron is the farthest from the nucleus and is shielded by 18 core electrons, so it feels the weakest attraction.'
          },
          {
            label: 'Which requires more energy to remove: a 2p electron from F or a 2p electron from N?',
            options: ['the 2p electron from F', 'the 2p electron from N', 'they require the same energy'],
            correctIndex: 0,
            explanation: 'Both electrons are in the n = 2 shell, but fluorine has two more protons with similar shielding. Its 2p electrons feel a larger effective nuclear charge and are held more tightly.'
          }
        ]
      }
    },
    {
      id: 'ec6-input-quantum',
      type: 'input-box' as const,
      content: `### Unpaired Electron Count

Write the configuration, draw the partly filled subshell, and count.`,
      exercise: {
        inputs: [
          {
            label: 'Number of unpaired electrons in $Mn^{2+}$ (Mn: Z = 25):',
            correctAnswer: '5',
            explanation: '$Mn^{2+}$ is [Ar] $3d^{5}$. Five electrons occupy the five 3d orbitals singly (↑ ↑ ↑ ↑ ↑), so all 5 are unpaired.'
          },
          {
            label: 'Number of unpaired electrons in $Fe^{3+}$ (Fe: Z = 26):',
            correctAnswer: '5',
            explanation: '$Fe^{3+}$ is [Ar] $3d^{5}$ (both 4s electrons and one 3d electron removed). Each of the five 3d orbitals holds one electron, so there are 5 unpaired electrons.'
          }
        ]
      }
    },
    {
      id: 'ec6-summary',
      type: 'text' as const,
      content: `## 📋 Part 6 Summary: Orbital Diagrams & Coulomb's Law

---

### 🧰 Orbital Diagram Rules

| Rule | Meaning |
|------|---------|
| Aufbau | Fill the lowest-energy subshell first |
| Pauli | At most 2 electrons per orbital, with opposite spins |
| Hund | Fill equal-energy orbitals singly before pairing |

---

### 📌 Coulomb's Law Summary

| Factor | Effect on Attraction to the Nucleus |
|--------|-------------------------------------|
| More protons (same shell) | Stronger |
| Larger n (farther away) | Weaker |
| More inner-shell shielding | Weaker |

---

### ✅ Your Checklist Before Moving On

- ☐ I can draw orbital diagrams using boxes and arrows (↑↓)
- ☐ I apply Hund's rule: fill all orbitals singly before pairing
- ☐ I can count unpaired electrons in atoms and ions
- ☐ I can use Coulomb's law to explain which electron is held more tightly

---

### 🔮 What's Next

**Part 7** brings it all together with **AP-style synthesis problems** that combine electron configuration with periodic trends, ionization energy, and other core concepts.`
    }
  ]
}
