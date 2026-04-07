export const chemReactionMechanismsPart2Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm2-intro',
      type: 'text' as const,
      content: `
# 🔎 Intermediates and Catalysts

**Part 2 of 7 — Species That Appear and Disappear**

In reaction mechanisms, some species are produced in one step and consumed in another. These transient species are classified as either **intermediates** or **catalysts**, and understanding the difference is essential for AP Chemistry.
      `
    },
    {
      id: 'rm2-intermediates',
      type: 'text' as const,
      content: `
## ⚗️ Reaction Intermediates

A **reaction intermediate** is a species that is:
- **Produced** in one elementary step
- **Consumed** in a subsequent step
- **Not present** in the overall balanced equation


---

### How to Identify Intermediates

1. Write out all elementary steps
2. Add them up to get the overall reaction
3. Any species that **cancels out** (appears on both sides) is an intermediate


---

### Example

Step 1: $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\textbf{F}$ (slow)
Step 2: $\\text{NO}_2 + \\textbf{F} \\rightarrow \\text{NO}_2\\text{F}$ (fast)

**F** (fluorine atom) is the intermediate — produced in Step 1, consumed in Step 2, not in the overall equation.


---

### On an Energy Diagram

Intermediates sit in an energy **valley** (local minimum) between two transition state **peaks**.
      `
    },
    {
      id: 'rm2-catalysts',
      type: 'text' as const,
      content: `
## ⚙️ Catalysts in Mechanisms

A **catalyst** is a species that is:
- **Consumed** in an early step
- **Regenerated** in a later step
- Present at the **beginning and end** but not in the overall equation
- **Not used up** overall


---

### How to Identify Catalysts

1. Look for species present in the **reactants** of an early step that **reappear** in the **products** of a later step
2. The catalyst cancels when steps are added


---

### Example: Ozone Decomposition (Cl-catalyzed)

Step 1: $\\text{Cl} + \\text{O}_3 \\rightarrow \\text{ClO} + \\text{O}_2$
Step 2: $\\text{ClO} + \\text{O} \\rightarrow \\text{Cl} + \\text{O}_2$

Overall: $\\text{O}_3 + \\text{O} \\rightarrow 2\\text{O}_2$

- **Cl** = catalyst (consumed in Step 1, regenerated in Step 2)
- **ClO** = intermediate (produced in Step 1, consumed in Step 2)


---

### Intermediate vs. Catalyst Summary

| Feature | Intermediate | Catalyst |
|---------|-------------|---------|
| Produced then consumed | ✅ | ❌ (consumed then regenerated) |
| In overall equation? | No | No |
| On energy diagram | Valley between peaks | Not shown as a species |
| Present at start? | No (formed during reaction) | Yes |
| Present at end? | No (consumed during reaction) | Yes (regenerated) |
      `
    },
    {
      id: 'rm2-identification-quiz',
      type: 'multiple-choice' as const,
      content: `
**Identification Quiz** 🎯

Consider this mechanism:
- Step 1: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{H}_2\\text{O} + \\text{IO}^-$ (slow)
- Step 2: $\\text{H}_2\\text{O}_2 + \\text{IO}^- \\rightarrow \\text{H}_2\\text{O} + \\text{O}_2 + \\text{I}^-$ (fast)
      `,
      exercise: {
        questions: [
          {
            question: 'What is the catalyst in this mechanism?',
            options: [
              'H₂O₂',
              'H₂O',
              'I⁻',
              'IO⁻'
            ],
            correctAnswer: 2,
            explanation: 'I⁻ is consumed in Step 1 and regenerated in Step 2. It is present at the start and end but not in the overall equation. This is the definition of a catalyst.'
          },
          {
            question: 'What is the intermediate?',
            options: [
              'H₂O₂',
              'H₂O',
              'I⁻',
              'IO⁻'
            ],
            correctAnswer: 3,
            explanation: 'IO⁻ is produced in Step 1 and consumed in Step 2. It does not appear in the overall equation. It is formed during the reaction and then used up — a classic intermediate.'
          },
          {
            question: 'The overall reaction is:',
            options: [
              'H₂O₂ → H₂O + O',
              '2H₂O₂ → 2H₂O + O₂',
              'H₂O₂ + I⁻ → H₂O + IO⁻',
              'H₂O₂ + IO⁻ → H₂O + O₂ + I⁻'
            ],
            correctAnswer: 1,
            explanation: 'Adding Step 1 + Step 2: 2H₂O₂ + I⁻ + IO⁻ → 2H₂O + O₂ + I⁻ + IO⁻. Cancel I⁻ and IO⁻: 2H₂O₂ → 2H₂O + O₂.'
          }
        ]
      }
    },
    {
      id: 'rm2-practice-mechanism',
      type: 'dropdown-select' as const,
      content: `
**Analyzing a Mechanism** 🔍

Consider:
- Step 1: $2\\text{NO} \\rightarrow \\text{N}_2\\text{O}_2$ (fast, reversible)
- Step 2: $\\text{N}_2\\text{O}_2 + \\text{H}_2 \\rightarrow \\text{N}_2\\text{O} + \\text{H}_2\\text{O}$ (slow)
- Step 3: $\\text{N}_2\\text{O} + \\text{H}_2 \\rightarrow \\text{N}_2 + \\text{H}_2\\text{O}$ (fast)
      `,
      exercise: {
        dropdowns: [
          {
            label: 'N₂O₂ is a(n)',
            options: ['reactant', 'product', 'intermediate', 'catalyst']
          },
          {
            label: 'N₂O is a(n)',
            options: ['reactant', 'product', 'intermediate', 'catalyst']
          },
          {
            label: 'The number of intermediates in this mechanism is',
            options: ['0', '1', '2', '3']
          },
          {
            label: 'The overall reaction is',
            options: ['2NO + 2H₂ → N₂ + 2H₂O', 'NO + H₂ → N₂ + H₂O', '2NO + H₂ → N₂O₂ + H₂O', 'N₂O₂ + H₂ → N₂O + H₂O']
          }
        ],
        correctAnswers: ['intermediate', 'intermediate', '2', '2NO + 2H₂ → N₂ + 2H₂O'],
        hint1: 'N₂O₂ is produced in Step 1 and consumed in Step 2 → intermediate.',
        hint2: 'N₂O is produced in Step 2 and consumed in Step 3 → intermediate.',
        hint3: 'Add all steps: 2NO + N₂O₂ + N₂O + 2H₂ → N₂O₂ + N₂O + N₂ + 2H₂O. Cancel intermediates.',
        explanation: 'N₂O₂ and N₂O are both intermediates (2 total). Adding steps: 2NO + 2H₂ → N₂ + 2H₂O (after canceling N₂O₂ and N₂O). No catalysts in this mechanism.'
      }
    },
    {
      id: 'rm2-energy-diagram-intermediates',
      type: 'text' as const,
      content: `
## 📌 Intermediates on Energy Diagrams

For a multi-step mechanism, the energy diagram shows multiple peaks and valleys:


---

### Two-Step Mechanism

$$\\text{Reactants} \\xrightarrow{E_{a1}} \\text{TS}_1 \\rightarrow \\text{Intermediate} \\xrightarrow{E_{a2}} \\text{TS}_2 \\rightarrow \\text{Products}$$

- **Peaks** = transition states (one per elementary step)
- **Valley** = intermediate (local energy minimum)
- The **tallest peak** corresponds to the rate-determining step


---

### Three-Step Mechanism

Has 3 peaks and 2 valleys (2 intermediates).


---

### General Rule

For an $n$-step mechanism:
- $n$ transition states (peaks)
- $n - 1$ intermediates (valleys)
      `
    },
    {
      id: 'rm2-counting-practice',
      type: 'input-boxes' as const,
      content: `
**Counting Species in Mechanisms** 🧮

A mechanism has 4 elementary steps with the following species:

Step 1: A + B → C + D (slow)
Step 2: C + B → E + F (fast)
Step 3: E → G + H (fast)
Step 4: H + D → P + A (fast)

**1)** How many intermediates? (count species that cancel)

**2)** Is A a catalyst, intermediate, or reactant? (enter: catalyst, intermediate, or reactant)

**3)** How many transition states on the energy diagram? (enter a number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', 'catalyst', '4'],
        hint1: 'Cancel species appearing on both sides: C (produced Step 1, consumed Step 2), D (produced Step 1, consumed Step 4), E (produced Step 2, consumed Step 3), H (produced Step 3, consumed Step 4). That\'s 4 intermediates.',
        hint2: 'A appears as reactant in Step 1 and product in Step 4 — consumed then regenerated = catalyst.',
        hint3: '4 elementary steps = 4 transition states (one peak per step).',
        explanation: '1) C, D, E, H all cancel → 4 intermediates. 2) A is consumed in Step 1 and regenerated in Step 4 → catalyst. 3) 4 steps = 4 transition states.'
      }
    },
    {
      id: 'rm2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Intermediates & Catalysts** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction intermediate differs from a catalyst because an intermediate:',
            options: [
              'Is not present in the overall equation',
              'Is produced in one step and consumed in another (not present at start)',
              'Changes the activation energy',
              'Is always a gas-phase species'
            ],
            correctAnswer: 1,
            explanation: 'Both intermediates and catalysts are absent from the overall equation. The key difference: intermediates are PRODUCED then consumed (not present initially), while catalysts are CONSUMED then regenerated (present at start and end).'
          },
          {
            question: 'An energy diagram for a 3-step mechanism shows:',
            options: [
              '3 peaks, 3 valleys',
              '3 peaks, 2 valleys',
              '2 peaks, 3 valleys',
              '3 peaks, 0 valleys'
            ],
            correctAnswer: 1,
            explanation: 'n steps = n peaks (transition states) and n−1 valleys (intermediates). For 3 steps: 3 peaks, 2 valleys.'
          }
        ]
      }
    }
  ]
}
