export const chemElectronConfigPart6Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec6-intro',
      type: 'text' as const,
      content: `# Part 6: Orbital Diagrams and Quantum Numbers

Electron configurations tell us **which** subshells are occupied. Orbital diagrams and quantum numbers give us a more detailed picture — showing the spin of each electron and the exact "address" of every electron in an atom.`
    },
    {
      id: 'ec6-orbital-diagrams',
      type: 'text' as const,
      content: `## Orbital Diagrams (Box-Arrow Notation)

An orbital diagram represents each orbital as a **box** (or line) and each electron as an **arrow**:
- ↑ represents spin-up (\\(m_s = +\\frac{1}{2}\\))
- ↓ represents spin-down (\\(m_s = -\\frac{1}{2}\\))

**Example: Nitrogen (N, Z = 7)**

| 1s | 2s | 2p |
|:---:|:---:|:---:|
| ↑↓ | ↑↓ | ↑ ↑ ↑ |

Each of the three 2p orbitals gets **one electron first** (Hund's rule) before any pairing occurs. All three unpaired electrons have the same spin direction.

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
            explanation: 'Nitrogen has the configuration 1s² 2s² 2p³. The three 2p electrons each occupy a separate orbital (Hund\'s rule), so nitrogen has 3 unpaired electrons.'
          }
        ]
      }
    },
    {
      id: 'ec6-quantum-numbers',
      type: 'text' as const,
      content: `## The Four Quantum Numbers

Every electron in an atom is described by a unique set of four quantum numbers — like a full mailing address.

### 1. Principal Quantum Number (n)
- **Allowed values:** 1, 2, 3, 4, ...
- Describes the **main energy level** (shell)
- Higher n = higher energy, larger orbital

### 2. Angular Momentum (Azimuthal) Quantum Number (l)
- **Allowed values:** 0 to (n − 1)
- Describes the **subshell shape**
- l = 0 → s, l = 1 → p, l = 2 → d, l = 3 → f

### 3. Magnetic Quantum Number (\\(m_l\\))
- **Allowed values:** −l to +l (including 0)
- Describes the **orientation** of the orbital in space
- For p orbitals (l = 1): \\(m_l\\) = −1, 0, +1 → three orientations

### 4. Spin Quantum Number (\\(m_s\\))
- **Allowed values:** \\(+\\frac{1}{2}\\) or \\(-\\frac{1}{2}\\)
- Describes the **spin direction** of the electron
- Two electrons in the same orbital must have opposite spins (Pauli exclusion)`
    },
    {
      id: 'ec6-quantum-table',
      type: 'text' as const,
      content: `## Allowed Values Summary

| Subshell | n (example) | l | \\(m_l\\) values | # orbitals | Max e⁻ |
|----------|-------------|---|----------------|------------|--------|
| 1s | 1 | 0 | 0 | 1 | 2 |
| 2p | 2 | 1 | −1, 0, +1 | 3 | 6 |
| 3d | 3 | 2 | −2, −1, 0, +1, +2 | 5 | 10 |
| 4f | 4 | 3 | −3, −2, −1, 0, +1, +2, +3 | 7 | 14 |

**Key relationship:** The number of orbitals in a subshell = 2l + 1`
    },
    {
      id: 'ec6-quiz-quantum',
      type: 'dropdown-select' as const,
      content: `### Quantum Number Practice

Determine the quantum numbers for specified electrons.`,
      exercise: {
        dropdowns: [
          {
            label: 'For a 3p electron, what is the value of l?',
            options: ['0', '1', '2', '3'],
            correctIndex: 1,
            explanation: 'The p subshell corresponds to l = 1. The angular momentum quantum number is determined by the subshell letter: s = 0, p = 1, d = 2, f = 3.'
          },
          {
            label: 'For a 4d electron, how many possible values of ml exist?',
            options: ['1', '3', '5', '7'],
            correctIndex: 2,
            explanation: 'For d orbitals, l = 2. The ml values range from −2 to +2: that is −2, −1, 0, +1, +2 — a total of 5 values (= 2l + 1 = 5).'
          },
          {
            label: 'What is the maximum value of l for n = 3?',
            options: ['0', '1', '2', '3'],
            correctIndex: 2,
            explanation: 'l ranges from 0 to n − 1. For n = 3: l can be 0, 1, or 2. The maximum is 2 (corresponding to the 3d subshell).'
          }
        ]
      }
    },
    {
      id: 'ec6-input-quantum',
      type: 'input-box' as const,
      content: `### Quantum Number Calculations

Use the relationships between quantum numbers to answer.`,
      exercise: {
        inputs: [
          {
            label: 'How many orbitals are in the 4f subshell? (Use formula: 2l + 1)',
            correctAnswer: '7',
            explanation: 'For f orbitals, l = 3. Number of orbitals = 2l + 1 = 2(3) + 1 = 7.'
          },
          {
            label: 'How many total electrons can the n = 2 level hold? (Use formula: 2n²)',
            correctAnswer: '8',
            explanation: '2n² = 2(2²) = 2(4) = 8. The n = 2 level has 2s (2 electrons) + 2p (6 electrons) = 8 total.'
          }
        ]
      }
    },
    {
      id: 'ec6-summary',
      type: 'text' as const,
      content: `## Key Takeaways

1. **Orbital diagrams** show each orbital as a box with arrows for electrons; Hund's rule requires filling singly before pairing.
2. **Four quantum numbers** (n, l, \\(m_l\\), \\(m_s\\)) uniquely identify every electron.
3. **n** determines the energy level; **l** determines the subshell shape; **\\(m_l\\)** determines the orbital orientation; **\\(m_s\\)** determines the spin.
4. Allowed values: l = 0 to n−1; \\(m_l\\) = −l to +l; \\(m_s\\) = ±½.
5. Number of orbitals in a subshell = 2l + 1; max electrons = 2(2l + 1).

Next: Part 7 brings it all together with AP-style synthesis problems!`
    }
  ]
}
