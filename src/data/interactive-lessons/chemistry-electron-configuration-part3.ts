export const chemElectronConfigPart3Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec3-intro',
      type: 'text' as const,
      content: `# Part 3: Writing Electron Configurations

Now that you know the subshells and filling order, it is time to write full electron configurations. Three fundamental rules govern how electrons fill orbitals.`
    },
    {
      id: 'ec3-three-rules',
      type: 'text' as const,
      content: `## The Three Rules

### 1. Aufbau Principle
Electrons fill the **lowest energy** subshell available first.

Filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → ...

### 2. Pauli Exclusion Principle
Each orbital can hold a maximum of **2 electrons**, and those 2 electrons must have **opposite spins** (↑↓).

No two electrons in the same atom can have the same set of four quantum numbers.

### 3. Hund's Rule
When filling orbitals of **equal energy** (degenerate orbitals, such as the three 2p orbitals), electrons fill each orbital **singly first** with parallel spins before any orbital gets a second electron.

Think of it like a bus: passengers sit in empty seats before doubling up.`
    },
    {
      id: 'ec3-examples',
      type: 'text' as const,
      content: `## Step-by-Step Examples

**Hydrogen (H, Z = 1):** 1 electron  
Configuration: **1s¹**

**Carbon (C, Z = 6):** 6 electrons  
1s² 2s² 2p² → **1s² 2s² 2p²**  
(By Hund's rule, the two 2p electrons occupy two separate p orbitals with parallel spins.)

**Sodium (Na, Z = 11):** 11 electrons  
**1s² 2s² 2p⁶ 3s¹**

**Iron (Fe, Z = 26):** 26 electrons  
**1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶**  
Notice: 4s fills before 3d in the Aufbau order, so 4s² appears before 3d⁶.

**Tip:** Always verify your total by adding the superscripts:  
2 + 2 + 6 + 2 + 6 + 2 + 6 = 26 ✓`
    },
    {
      id: 'ec3-quiz-identify',
      type: 'multiple-choice' as const,
      content: `### Identify the Element

Which element has the electron configuration **1s² 2s² 2p⁶ 3s² 3p⁴**?`,
      exercise: {
        questions: [
          {
            question: 'This configuration belongs to:',
            options: ['Silicon (Si)', 'Phosphorus (P)', 'Sulfur (S)', 'Chlorine (Cl)'],
            correctAnswer: 2,
            explanation: 'Count the total electrons: 2 + 2 + 6 + 2 + 4 = 16. Element 16 is sulfur (S).'
          }
        ]
      }
    },
    {
      id: 'ec3-input-config1',
      type: 'input-box' as const,
      content: `### Write the Configuration

Write the full electron configuration for the following elements. Use the format: 1s2 2s2 2p6 (no superscripts needed, just the number after each subshell letter).`,
      exercise: {
        inputs: [
          {
            label: 'Nitrogen (N, Z = 7):',
            correctAnswer: '1s2 2s2 2p3',
            explanation: 'Nitrogen has 7 electrons. Fill in order: 1s² (2), 2s² (4), 2p³ (7). Total = 7 ✓. By Hund\'s rule, the three 2p electrons each occupy a separate orbital with parallel spins.'
          },
          {
            label: 'Argon (Ar, Z = 18):',
            correctAnswer: '1s2 2s2 2p6 3s2 3p6',
            explanation: 'Argon has 18 electrons: 1s² 2s² 2p⁶ 3s² 3p⁶. Total: 2 + 2 + 6 + 2 + 6 = 18 ✓. Argon completes the third period and is a noble gas.'
          }
        ]
      }
    },
    {
      id: 'ec3-input-config2',
      type: 'input-box' as const,
      content: `### More Configuration Practice

Write the full electron configuration. Remember: 4s fills before 3d!`,
      exercise: {
        inputs: [
          {
            label: 'Calcium (Ca, Z = 20):',
            correctAnswer: '1s2 2s2 2p6 3s2 3p6 4s2',
            explanation: 'Calcium has 20 electrons. After filling through 3p⁶ (18 electrons), the next 2 go into 4s: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Total = 20 ✓.'
          },
          {
            label: 'Zinc (Zn, Z = 30):',
            correctAnswer: '1s2 2s2 2p6 3s2 3p6 4s2 3d10',
            explanation: 'Zinc has 30 electrons. After 4s² (20 electrons), the 3d subshell fills completely: 3d¹⁰ (30). Configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰. Total = 30 ✓.'
          }
        ]
      }
    },
    {
      id: 'ec3-quiz-error',
      type: 'multiple-choice' as const,
      content: `### Spot the Error

Which of the following electron configurations is INCORRECT?`,
      exercise: {
        questions: [
          {
            question: 'Select the incorrect configuration:',
            options: [
              'Li: 1s² 2s¹',
              'O: 1s² 2s² 2p⁴',
              'Mg: 1s² 2s² 2p⁶ 3s²',
              'K: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹'
            ],
            correctAnswer: 3,
            explanation: 'Potassium (K, Z = 19) should be 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹, not 3d¹. The 4s subshell is lower in energy than 3d and fills first. The 19th electron goes into 4s, not 3d.'
          }
        ]
      }
    },
    {
      id: 'ec3-summary',
      type: 'text' as const,
      content: `## Key Takeaways

1. **Aufbau principle:** Fill lowest energy subshells first.
2. **Pauli exclusion:** Max 2 electrons per orbital (opposite spins).
3. **Hund's rule:** Fill degenerate orbitals singly before pairing.
4. Always **verify** by summing superscripts to match the atomic number.
5. Remember that **4s fills before 3d** — this is the most common filling-order mistake.

Next up: Noble gas shorthand notation to simplify these long configurations!`
    }
  ]
}
