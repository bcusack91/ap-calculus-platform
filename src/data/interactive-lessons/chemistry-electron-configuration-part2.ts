export const chemElectronConfigPart2Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec2-intro',
      type: 'text' as const,
      content: `# Part 2: Energy Levels and Subshells

**Part 2 of 7 — Orbital Filling Order**

---

### Energy Level Overview

| Level (n) | Subshells Available | Max Electrons ($2n^2$) |
|-----------|--------------------|-----------------------|
| 1 | 1s | 2 |
| 2 | 2s, 2p | 8 |
| 3 | 3s, 3p, 3d | 18 |
| 4 | 4s, 4p, 4d, 4f | 32 |

The filling order **does not** follow simple numerical order — 4s fills before 3d!

> 🔑 **Why this matters:** The Aufbau filling order determines where every electron goes, and it explains why the periodic table is shaped the way it is.

---

### What You'll Master in Part 2
- Understanding principal energy levels and the $2n^2$ formula
- Knowing the four subshell types (s, p, d, f) and their capacities
- Memorizing the Aufbau filling order with the diagonal rule`
    },
    {
      id: 'ec2-principal-levels',
      type: 'text' as const,
      content: `## 📌 Principal Energy Levels

The **principal quantum number (n)** describes the main energy level of an electron:

| n | Name | Max Electrons $(2n^{2})$ |
|---|------|---------------------|
| 1 | First shell | 2 |
| 2 | Second shell | 8 |
| 3 | Third shell | 18 |
| 4 | Fourth shell | 32 |

The formula for the maximum number of electrons in a principal energy level is:

$$\\boxed{\\text{Max electrons} = 2n^2}$$

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

> ⚠️ **AP Watch Out:** The filling order is NOT the same as the shell order. 4s fills before 3d, 5s before 4d, 6s before 4f. This catches many students on the exam.

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

Use the formula $2n^2$ to determine the maximum number of electrons in a principal energy level.`,
      exercise: {
        inputs: [
          {
            label: 'Maximum electrons in n = 3:',
            correctAnswer: '18',
            explanation: 'Using $2n^{2}$ = $2(3^{2})$ = 2(9) = 18. Level 3 has subshells 3s (2), 3p (6), and 3d (10): 2 + 6 + 10 = 18. ✓'
          },
          {
            label: 'Maximum electrons in n = 4:',
            correctAnswer: '32',
            explanation: 'Using $2n^{2}$ = $2(4^{2})$ = 2(16) = 32. Level 4 has subshells 4s (2), 4p (6), 4d (10), and 4f (14): 2 + 6 + 10 + 14 = 32. ✓'
          }
        ]
      }
    },
    {
      id: 'ec2-summary',
      type: 'text' as const,
      content: `## � Part 2 Summary: Energy Levels & Subshells

---

### 🧰 Quick Reference

| Subshell | l value | # Orbitals | Max Electrons |
|----------|---------|------------|---------------|
| s | 0 | 1 | 2 |
| p | 1 | 3 | 6 |
| d | 2 | 5 | 10 |
| f | 3 | 7 | 14 |

---

### 📌 Key Concepts

| Concept | Rule | Example |
|---------|------|---------|
| Energy level capacity | Max electrons = $2n^2$ | n = 3 → 18 electrons max |
| Aufbau filling order | Fill lowest energy first | 4s fills before 3d |
| Orbital capacity | Max 2 electrons per orbital | Opposite spins (↑↓) |

---

### ✅ Your Checklist Before Moving On

- ☐ I know the four subshell types and how many electrons each holds
- ☐ I can use the diagonal rule to determine filling order
- ☐ I understand that energy order ≠ numerical order (4s < 3d)
- ☐ I know that each orbital holds at most 2 electrons with opposite spins

---

### 🔮 What's Next

In **Part 3**, we will use these rules to **write complete electron configurations** for real elements — from hydrogen all the way through the transition metals.`
    }
  ]
}
