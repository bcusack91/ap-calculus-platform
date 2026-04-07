export const chemElectronConfigPart2Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec2-intro',
      type: 'text' as const,
      content: `# Part 2: Energy Levels and Subshells

Electrons don't just float randomly around the nucleus — they occupy specific **energy levels** and **subshells**. Understanding this organization is the foundation of electron configuration.`
    },
    {
      id: 'ec2-principal-levels',
      type: 'text' as const,
      content: `## 📌 Principal Energy Levels

The **principal quantum number (n)** describes the main energy level of an electron:

| n | Name | Max Electrons (2n²) |
|---|------|---------------------|
| 1 | First shell | 2 |
| 2 | Second shell | 8 |
| 3 | Third shell | 18 |
| 4 | Fourth shell | 32 |

The formula for the maximum number of electrons in a principal energy level is:

$$\\text{Max electrons} = 2n^2$$

As *n* increases, the energy level is farther from the nucleus on average and the electrons have higher energy.`
    },
    {
      id: 'ec2-subshells',
      type: 'text' as const,
      content: `## 📌 Subshells: s, p, d, f

Each principal energy level is divided into **subshells**, labeled s, p, d, and f.

| Subshell | Number of Orbitals | Max Electrons |
|----------|-------------------|---------------|
| s | 1 | 2 |
| p | 3 | 6 |
| d | 5 | 10 |
| f | 7 | 14 |

Each orbital holds a maximum of **2 electrons** (with opposite spins — the Pauli exclusion principle).

**Which subshells exist in each level?**
- n = 1: 1s only
- n = 2: 2s, 2p
- n = 3: 3s, 3p, 3d
- n = 4: 4s, 4p, 4d, 4f

In general, level *n* contains subshells s through the (*n* − 1)th letter in the sequence s, p, d, f.`
    },
    {
      id: 'ec2-quiz-max-electrons',
      type: 'multiple-choice' as const,
      content: `### Subshell Capacity Check

How many electrons can the 3d subshell hold at maximum?`,
      exercise: {
        questions: [
          {
            question: 'Maximum electrons in 3d:',
            options: ['2', '6', '10', '14'],
            correctAnswer: 2,
            explanation: 'The d subshell has 5 orbitals, and each orbital holds 2 electrons: 5 × 2 = 10. The principal quantum number (3) does not change the capacity of a d subshell.'
          }
        ]
      }
    },
    {
      id: 'ec2-aufbau-order',
      type: 'text' as const,
      content: `## 📌 The Aufbau Filling Order

Electrons fill subshells in order of **increasing energy**, not simply by principal quantum number. The filling order is:

**1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p**

Notice that **4s fills before 3d** — this is because 4s is lower in energy than 3d for most elements.

**The diagonal rule** is a visual trick to remember this order:

Write the subshells in a grid and draw diagonal arrows from upper-right to lower-left:

1s  
2s 2p  
3s 3p 3d  
4s 4p 4d 4f  
5s 5p 5d 5f  
6s 6p 6d  
7s 7p  

Following the diagonals gives the correct filling order.`
    },
    {
      id: 'ec2-quiz-filling-order',
      type: 'dropdown-select' as const,
      content: `### Filling Order Practice

Determine which subshell fills next in the Aufbau order.`,
      exercise: {
        dropdowns: [
          {
            label: 'What fills immediately after 3p?',
            options: ['3d', '4s', '4p', '4d'],
            correctIndex: 1,
            explanation: 'After 3p, the next subshell in the Aufbau order is 4s, not 3d. The 4s subshell is lower in energy than 3d.'
          },
          {
            label: 'What fills immediately after 4s?',
            options: ['4p', '3d', '4d', '5s'],
            correctIndex: 1,
            explanation: 'After 4s, the 3d subshell fills next. Then 4p follows after 3d is complete.'
          },
          {
            label: 'What fills immediately after 5p?',
            options: ['5d', '6s', '4f', '6p'],
            correctIndex: 1,
            explanation: 'After 5p, the 6s subshell fills next, following the diagonal rule pattern.'
          }
        ]
      }
    },
    {
      id: 'ec2-input-max',
      type: 'input-box' as const,
      content: `### Maximum Electron Calculations

Use the formula \\(2n^2\\) to determine the maximum number of electrons in a principal energy level.`,
      exercise: {
        inputs: [
          {
            label: 'Maximum electrons in n = 3:',
            correctAnswer: '18',
            explanation: 'Using 2n² = 2(3²) = 2(9) = 18. Level 3 has subshells 3s (2), 3p (6), and 3d (10): 2 + 6 + 10 = 18. ✓'
          },
          {
            label: 'Maximum electrons in n = 4:',
            correctAnswer: '32',
            explanation: 'Using 2n² = 2(4²) = 2(16) = 32. Level 4 has subshells 4s (2), 4p (6), 4d (10), and 4f (14): 2 + 6 + 10 + 14 = 32. ✓'
          }
        ]
      }
    },
    {
      id: 'ec2-summary',
      type: 'text' as const,
      content: `## 📌 Key Takeaways

1. **Principal quantum number (n)** determines the main energy level; max electrons = \\(2n^2\\).
2. **Subshells** (s, p, d, f) hold 2, 6, 10, and 14 electrons respectively.
3. The **Aufbau filling order** follows the diagonal rule — energy order differs from simple numerical order (e.g., 4s fills before 3d).
4. Each **orbital** holds at most 2 electrons with opposite spins.

In Part 3, we will use these rules to write complete electron configurations for real elements.`
    }
  ]
}
