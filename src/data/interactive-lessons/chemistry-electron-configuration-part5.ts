export const chemElectronConfigPart5Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec5-intro',
      type: 'text' as const,
      content: `# Part 5: Exceptions and Ion Configurations

The Aufbau principle works for most elements, but a handful of important exceptions exist. Additionally, when atoms form ions, the order of electron removal is NOT the same as the filling order. Both concepts are heavily tested on the AP exam.`
    },
    {
      id: 'ec5-exceptions',
      type: 'text' as const,
      content: `## The Two Critical Exceptions

### Chromium (Cr, Z = 24)
**Expected:** [Ar] 4s² 3d⁴  
**Actual:** [Ar] 3d⁵ 4s¹

### Copper (Cu, Z = 29)
**Expected:** [Ar] 4s² 3d⁹  
**Actual:** [Ar] 3d¹⁰ 4s¹

**Why?** Half-filled (d⁵) and fully filled (d¹⁰) subshells have **extra stability** due to:
- **Exchange energy:** More favorable electron-electron interactions when orbitals are symmetrically occupied.
- Electrons in the 4s and 3d subshells are very close in energy, so the stabilization from a half-filled or fully filled d subshell outweighs the cost of promoting one electron from 4s.

Other elements in the same columns (Mo, Ag, etc.) show similar exceptions, but **Cr and Cu are the ones you must know for the AP exam**.`
    },
    {
      id: 'ec5-quiz-exceptions',
      type: 'multiple-choice' as const,
      content: `### Exception Check

What is the correct electron configuration for chromium (Cr, Z = 24)?`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of Cr:',
            options: [
              '[Ar] 4s² 3d⁴',
              '[Ar] 3d⁶',
              '[Ar] 3d⁵ 4s¹',
              '[Ar] 4s¹ 3d⁴'
            ],
            correctAnswer: 2,
            explanation: 'Chromium is an exception: it adopts [Ar] 3d⁵ 4s¹ instead of the expected [Ar] 4s² 3d⁴. The half-filled 3d⁵ configuration provides extra stability from exchange energy.'
          }
        ]
      }
    },
    {
      id: 'ec5-ions',
      type: 'text' as const,
      content: `## Electron Configurations of Ions

### Cations (Positive Ions)
When forming cations, electrons are removed from the subshell with the **highest principal quantum number (n)** first.

**Critical rule for transition metals:** Remove electrons from **4s before 3d**, even though 4s filled first!

**Example: Fe²⁺ (Z = 26, 24 electrons)**
- Neutral Fe: [Ar] 4s² 3d⁶
- Remove 2 electrons from 4s (highest n = 4)
- Fe²⁺: **[Ar] 3d⁶**

**Example: Fe³⁺ (Z = 26, 23 electrons)**
- Start from Fe²⁺: [Ar] 3d⁶
- Remove 1 more electron from 3d
- Fe³⁺: **[Ar] 3d⁵**

### Anions (Negative Ions)
When forming anions, electrons are **added** to the next available subshell.

**Example: Cl⁻ (Z = 17, 18 electrons)**
- Neutral Cl: [Ne] 3s² 3p⁵
- Add 1 electron to 3p
- Cl⁻: **[Ne] 3s² 3p⁶** (same as Ar — isoelectronic!)`
    },
    {
      id: 'ec5-quiz-ions',
      type: 'multiple-choice' as const,
      content: `### Ion Configuration Practice

What is the electron configuration of Cu²⁺?

Recall: Cu (Z = 29) has the configuration [Ar] 3d¹⁰ 4s¹ (exception).`,
      exercise: {
        questions: [
          {
            question: 'Electron configuration of Cu²⁺:',
            options: [
              '[Ar] 3d⁹ 4s⁰',
              '[Ar] 3d⁹',
              '[Ar] 3d⁸ 4s¹',
              '[Ar] 4s² 3d⁷'
            ],
            correctAnswer: 1,
            explanation: 'Cu: [Ar] 3d¹⁰ 4s¹. To form Cu²⁺, remove 2 electrons. First remove the 4s¹ electron (highest n), then remove 1 from 3d: [Ar] 3d⁹. We typically omit "4s⁰" since that subshell is empty.'
          }
        ]
      }
    },
    {
      id: 'ec5-input-ions',
      type: 'input-box' as const,
      content: `### Write Ion Configurations

Write the noble gas shorthand electron configuration for each ion. Use the format: [Xx] 3d6 (no superscripts, brackets around noble gas).

Remember: Remove electrons from the highest n first!`,
      exercise: {
        inputs: [
          {
            label: 'Mn²⁺ (Mn: Z = 25)',
            correctAnswer: '[Ar] 3d5',
            explanation: 'Neutral Mn: [Ar] 4s² 3d⁵. Remove 2 electrons from 4s (highest n): [Ar] 3d⁵. The Mn²⁺ ion has a half-filled d subshell, which is very stable.'
          },
          {
            label: 'Zn²⁺ (Zn: Z = 30)',
            correctAnswer: '[Ar] 3d10',
            explanation: 'Neutral Zn: [Ar] 4s² 3d¹⁰. Remove 2 electrons from 4s: [Ar] 3d¹⁰. The Zn²⁺ ion has a completely filled d subshell.'
          }
        ]
      }
    },
    {
      id: 'ec5-dropdown-tricky',
      type: 'dropdown-select' as const,
      content: `### Tricky Ion Problems

These require careful attention to exception rules and ion formation rules.`,
      exercise: {
        dropdowns: [
          {
            label: 'Which ion is isoelectronic with Ar (18 electrons)?',
            options: ['Na⁺', 'Mg²⁺', 'K⁺', 'Fe²⁺'],
            correctIndex: 2,
            explanation: 'K⁺: potassium (Z = 19) loses 1 electron → 18 electrons, same as Ar. Na⁺ has 10 electrons (like Ne), Mg²⁺ has 10 electrons (like Ne), and Fe²⁺ has 24 electrons. Only K⁺ matches Ar\'s 18 electrons.'
          },
          {
            label: 'What is the electron configuration of Cr³⁺?',
            options: ['[Ar] 4s¹ 3d²', '[Ar] 3d³', '[Ar] 3d² 4s¹', '[Ar] 4s² 3d¹'],
            correctIndex: 1,
            explanation: 'Cr: [Ar] 3d⁵ 4s¹ (exception). Remove 3 electrons: first the 4s¹, then 2 from 3d. Result: [Ar] 3d³.'
          }
        ]
      }
    },
    {
      id: 'ec5-summary',
      type: 'text' as const,
      content: `## Key Takeaways

1. **Chromium** and **copper** are the two critical exceptions: they "steal" an electron from 4s to achieve a half-filled (d⁵) or fully filled (d¹⁰) d subshell.
2. When forming **cations**, remove electrons from the subshell with the **highest n** first — for transition metals, this means **4s before 3d**.
3. When forming **anions**, add electrons to the next available subshell.
4. **Isoelectronic** species have the same number of electrons and the same electron configuration.
5. These rules are among the most commonly tested topics on the AP Chemistry exam.`
    }
  ]
}
