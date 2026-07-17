export const chemElectronConfigPart3Data = {
  topicSlug: 'electron-configuration',
  sections: [
    {
      id: 'ec3-intro',
      type: 'text' as const,
      content: `# Part 3: Writing Electron Configurations

**Part 3 of 7 — Writing Electron Configurations**

---

### The Three Rules at a Glance

| Rule | What It Controls | Key Idea |
|------|-----------------|----------|
| **Aufbau Principle** | Filling order | Lowest energy subshell fills first |
| **Pauli Exclusion** | Orbital capacity | Max 2 electrons per orbital (opposite spins) |
| **Hund's Rule** | Degenerate orbitals | Fill singly before pairing |

> 🔑 **Why this matters:** These three rules are the complete recipe for writing any electron configuration — and they're tested heavily on the AP exam.

---

### What You'll Master in Part 3
- Applying all three rules to write configurations for any element
- Building configurations step-by-step with running electron counts
- Verifying configurations by checking total electrons match Z`
    },
    {
      id: 'ec3-three-rules',
      type: 'text' as const,
      content: `## 📏 The Three Rules

### 1. Aufbau Principle
Electrons fill the **lowest energy** subshell available first.

Filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → ...


---

### 2. Pauli Exclusion Principle
Each orbital can hold a maximum of **2 electrons**, and those 2 electrons must have **opposite spins** (↑↓).

No two electrons in the same atom can have the same set of four quantum numbers.


---

### 3. Hund's Rule
When filling orbitals of **equal energy** (degenerate orbitals, such as the three 2p orbitals), electrons fill each orbital **singly first** with parallel spins before any orbital gets a second electron.

Think of it like a bus: passengers sit in empty seats before doubling up.

> 🔑 **The Three Rules:** Aufbau (lowest energy first) + Pauli (max 2 per orbital, opposite spins) + Hund’s (fill degenerate orbitals singly before pairing) = the complete rules for electron configuration.`
    },
    {
      id: 'ec3-examples-intro',
      type: 'text' as const,
      content: `## 🧪 Step-by-Step Examples

Let's build electron configurations from scratch, starting simple and working up to transition metals.`
    },
    {
      id: 'ec3-example-hydrogen',
      type: 'text' as const,
      content: `### Example 1: Hydrogen (H, Z = 1)

**Total electrons:** 1

| Step | Subshell | Electrons Added | Running Total |
|------|----------|-----------------|---------------|
| 1 | 1s | 1 | 1 ✓ |

**Configuration: $1s^{1}$**

Only one electron — it goes into the lowest energy subshell, 1s.`
    },
    {
      id: 'ec3-example-carbon',
      type: 'text' as const,
      content: `### Example 2: Carbon (C, Z = 6)

**Total electrons:** 6

| Step | Subshell | Electrons Added | Running Total |
|------|----------|-----------------|---------------|
| 1 | 1s | 2 | 2 |
| 2 | 2s | 2 | 4 |
| 3 | 2p | 2 | 6 ✓ |

**Configuration: $1s^{2}$ $2s^{2}$ $2p^{2}$**

By Hund's rule, the two 2p electrons occupy **two separate** p orbitals with parallel spins — they don't pair up in the same orbital.`
    },
    {
      id: 'ec3-example-sodium',
      type: 'text' as const,
      content: `### Example 3: Sodium (Na, Z = 11)

**Total electrons:** 11

| Step | Subshell | Electrons Added | Running Total |
|------|----------|-----------------|---------------|
| 1 | 1s | 2 | 2 |
| 2 | 2s | 2 | 4 |
| 3 | 2p | 6 | 10 |
| 4 | 3s | 1 | 11 ✓ |

**Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{1}$**

The first 10 electrons fill the n = 1 and n = 2 levels completely. The 11th electron starts a new shell.`
    },
    {
      id: 'ec3-example-iron',
      type: 'text' as const,
      content: `### Example 4: Iron (Fe, Z = 26)

**Total electrons:** 26

| Step | Subshell | Electrons Added | Running Total |
|------|----------|-----------------|---------------|
| 1 | 1s | 2 | 2 |
| 2 | 2s | 2 | 4 |
| 3 | 2p | 6 | 10 |
| 4 | 3s | 2 | 12 |
| 5 | 3p | 6 | 18 |
| 6 | 4s | 2 | 20 |
| 7 | 3d | 6 | 26 ✓ |

**Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $4s^{2}$ $3d^{6}$**

Notice: **4s fills before 3d** in the Aufbau order, so $4s^{2}$ appears before $3d^{6}$.

> 💡 **Tip:** Always verify your total by adding the superscripts:
> 2 + 2 + 6 + 2 + 6 + 2 + 6 = 26 ✓`
    },
    {
      id: 'ec3-quiz-identify',
      type: 'multiple-choice' as const,
      content: `### Identify the Element

Which element has the electron configuration **$1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{4}$**?`,
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

Write the full electron configuration for the following elements (e.g., 1s2 2s2 2p6). A formatted preview will appear as you type.`,
      exercise: {
        inputs: [
          {
            label: 'Nitrogen (N, Z = 7):',
            correctAnswer: '1s2 2s2 2p3',
            explanation: 'Nitrogen has 7 electrons. Fill in order: $1s^{2}$ (2), $2s^{2}$ (4), $2p^{3}$ (7). Total = 7 ✓. By Hund\'s rule, the three 2p electrons each occupy a separate orbital with parallel spins.'
          },
          {
            label: 'Argon (Ar, Z = 18):',
            correctAnswer: '1s2 2s2 2p6 3s2 3p6',
            explanation: 'Argon has 18 electrons: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$. Total: 2 + 2 + 6 + 2 + 6 = 18 ✓. Argon completes the third period and is a noble gas.'
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
            explanation: 'Calcium has 20 electrons. After filling through $3p^{6}$ (18 electrons), the next 2 go into 4s: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $4s^{2}$. Total = 20 ✓.'
          },
          {
            label: 'Zinc (Zn, Z = 30):',
            correctAnswer: '1s2 2s2 2p6 3s2 3p6 4s2 3d10',
            explanation: 'Zinc has 30 electrons. After $4s^{2}$ (20 electrons), the 3d subshell fills completely: $3d^{10}$ (30). Configuration: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $4s^{2}$ $3d^{10}$. Total = 30 ✓.'
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
              'Li: $1s^{2}$ $2s^{1}$',
              'O: $1s^{2}$ $2s^{2}$ $2p^{4}$',
              'Mg: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$',
              'K: $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $3d^{1}$'
            ],
            correctAnswer: 3,
            explanation: 'Potassium (K, Z = 19) should be $1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $4s^{1}$, not $3d^{1}$. The 4s subshell is lower in energy than 3d and fills first. The 19th electron goes into 4s, not 3d.'
          }
        ]
      }
    },
    {
      id: 'ec3-summary',
      type: 'text' as const,
      content: `## � Part 3 Summary: Writing Electron Configurations

---

### 🧰 The Three Rules

| Rule | What It Says | Common Mistake |
|------|-------------|----------------|
| **Aufbau Principle** | Fill the lowest energy subshell first | Putting electrons in 3d before 4s |
| **Pauli Exclusion** | Max 2 electrons per orbital (opposite spins ↑↓) | Putting 3 electrons in one orbital |
| **Hund's Rule** | Fill degenerate orbitals singly before pairing | Pairing 2p electrons before all three 2p orbitals have one |

---

### ✅ Your Checklist Before Moving On

- ☐ I can write the full configuration for any element up to Z = 36
- ☐ I know that **4s fills before 3d** in the Aufbau order
- ☐ I always verify my total electron count matches the atomic number
- ☐ I understand why Hund's rule leads to unpaired electrons in partially filled subshells

---

### 🔮 What's Next

In **Part 4**, you'll learn **noble gas shorthand notation** — a way to simplify long configurations like:

$1s^{2}$ $2s^{2}$ $2p^{6}$ $3s^{2}$ $3p^{6}$ $4s^{2}$ $3d^{6}$ → **[Ar] $4s^{2}$ $3d^{6}$**

This will save you time on the AP exam and make it easier to focus on the valence electrons that matter most for chemistry.`
    }
  ]
}
