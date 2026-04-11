export const chemReactionQuotientLeChatPart5Data = {
  topicSlug: 'reaction-quotient-le-chatelier',
  sections: [
    {
      id: 'ql5-intro',
      type: 'text' as const,
      content: `# 🔄 Catalysts and Inert Gas Addition

**Part 5 of 7 — Stresses That Don\'t Shift Equilibrium**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Catalysts and Equilibrium |
| What Catalysts Do |
| Key Facts About Catalysts at Equilibrium |
| Why No Shift? |
| What Catalysts ARE Useful For |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ql5-catalysts',
      type: 'text' as const,
      content: `
## ⚖️ Catalysts and Equilibrium

### What Catalysts Do

A catalyst speeds up a reaction by providing an **alternative pathway** with a lower activation energy ($E_a$).


---

### Key Facts About Catalysts at Equilibrium

| Property | Effect |
|----------|--------|
| Forward reaction rate | Increased |
| Reverse reaction rate | Increased **equally** |
| Position of equilibrium | **No change** |
| Value of K | **No change** |
| Time to reach equilibrium | **Decreased** |


---

### Why No Shift?

> ⚠️ **Warning:** A catalyst does **not** shift equilibrium. It speeds up both the forward and reverse reactions by the same factor. The equilibrium position and K are unchanged — you just get there faster.


---

### What Catalysts ARE Useful For

- Reaching equilibrium **faster**
- Making a slow reaction practical (e.g., the Haber process uses an iron catalyst)
- Allowing equilibrium to be reached at **lower temperatures** (which may favor products for exothermic reactions)


---

### Example

The Haber process: $\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$

Without a catalyst, this reaction is impractically slow at lower temperatures. The iron catalyst allows the reaction to reach equilibrium quickly at moderate temperatures (~450°C), which is a compromise between speed and yield.
      `
    },
    {
      id: 'ql5-inert-gas',
      type: 'text' as const,
      content: `
## 💨 Adding an Inert Gas

An inert (noble) gas does not react with any species in the equilibrium. Its effect depends on the conditions:


---

### At Constant Volume

Adding inert gas at constant volume:
- **Increases total pressure**
- Does **NOT** change the partial pressures of any reacting species
- Does **NOT** change concentrations
- Q is unchanged → **No shift**
- K is unchanged


---

### At Constant Pressure

Adding inert gas at constant pressure:
- The container must **expand** to maintain constant pressure
- This effectively **increases the volume**
- All partial pressures of reacting species **decrease**
- This is equivalent to a volume increase → shifts toward **more moles of gas**


---

### Summary

| Condition | Effect of Adding Inert Gas |
|-----------|---------------------------|
| Constant volume | No shift (partial pressures unchanged) |
| Constant pressure | Shifts toward more moles of gas (volume increases) |


---

### AP Exam Note

> 💡 **Tip:** On the AP exam, "adding an inert gas" typically means at **constant volume** unless stated otherwise. The answer is usually **no effect** on equilibrium.
      `
    },
    {
      id: 'ql5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Catalysts and Inert Gas** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A catalyst is added to a system at equilibrium. Which statement is true?',
            options: [
              'The equilibrium shifts right',
              'The equilibrium shifts left',
              'K increases',
              'The equilibrium position is unchanged'
            ],
            correctAnswer: 3,
            explanation: 'Catalysts speed up both forward and reverse reactions equally. The equilibrium position and K value are both unchanged.'
          },
          {
            question: 'Adding helium gas to a sealed rigid container at equilibrium will:',
            options: [
              'Shift the equilibrium right',
              'Shift the equilibrium left',
              'Have no effect on the equilibrium',
              'Change the value of K'
            ],
            correctAnswer: 2,
            explanation: 'At constant volume, adding an inert gas increases total pressure but does not change the partial pressures or concentrations of any reactant or product. Q is unchanged, so no shift occurs.'
          },
          {
            question: 'A catalyst makes a reaction reach equilibrium faster by:',
            options: [
              'Increasing only the forward rate',
              'Increasing only the reverse rate',
              'Lowering the activation energy for both directions',
              'Changing the equilibrium constant'
            ],
            correctAnswer: 2,
            explanation: 'A catalyst provides an alternative reaction pathway with lower activation energy. This affects both the forward and reverse reactions equally, speeding up both without changing K.'
          }
        ]
      }
    },
    {
      id: 'ql5-all-stresses-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Summary of All Stresses

> 🔑 **Key Concept:** Only **temperature** changes K. Catalysts and inert gas (at constant V) cause **no shift**. All other stresses shift the position but leave K the same.

| Stress | Shift Direction | K Changes? |
|--------|----------------|------------|
| Add reactant | Right → | No |
| Remove reactant | Left ← | No |
| Add product | Left ← | No |
| Remove product | Right → | No |
| Decrease volume (↑P) | Toward fewer moles of gas | No |
| Increase volume (↓P) | Toward more moles of gas | No |
| Increase temperature | Endothermic: right; Exothermic: left | **Yes** |
| Decrease temperature | Endothermic: left; Exothermic: right | **Yes** |
| Add catalyst | **No shift** | No |
| Add inert gas (const V) | **No shift** | No |
| Add inert gas (const P) | Toward more moles of gas | No |
      `
    },
    {
      id: 'ql5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Stress Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A catalyst changes the _____ but not the equilibrium position',
            options: ['rate of reaction', 'value of K', 'concentrations', 'temperature']
          },
          {
            label: 'Adding argon to a sealed rigid flask at equilibrium causes',
            options: ['shift right', 'shift left', 'no shift', 'K to change']
          },
          {
            label: 'Adding argon at constant pressure (flexible container) causes',
            options: ['shift toward fewer moles of gas', 'shift toward more moles of gas', 'no shift', 'K to change']
          },
          {
            label: 'The only stress that changes K is',
            options: ['concentration change', 'pressure change', 'temperature change', 'catalyst addition']
          }
        ],
        correctAnswers: [
          'rate of reaction',
          'no shift',
          'shift toward more moles of gas',
          'temperature change'
        ],
        hint1: 'Catalysts only affect how fast equilibrium is reached.',
        hint2: 'At constant volume, inert gas does not change partial pressures.',
        hint3: 'At constant pressure, inert gas causes the container to expand.',
        explanation: 'Catalysts change rate only. Inert gas at constant V: no shift. Inert gas at constant P: volume expands, equivalent to volume increase → more moles of gas side. Only temperature changes K.'
      }
    },
    {
      id: 'ql5-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Checks** 🧮

**1)** Does a catalyst change the value of K? (Enter "no")

**2)** Does adding an inert gas at constant volume shift the equilibrium? (Enter "no")

**3)** If a catalyst is removed from a system at equilibrium, does the position shift? (Enter "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['no', 'no', 'no'],
        hint1: 'Catalysts have no effect on K or equilibrium position.',
        hint2: 'At constant volume, inert gas doesn\'t change partial pressures.',
        hint3: 'Removing a catalyst doesn\'t shift position — it just slows down the approach to any new equilibrium.',
        explanation: '1) No — catalysts don\'t change K. 2) No — at constant volume, inert gas doesn\'t affect partial pressures or concentrations. 3) No — removing a catalyst doesn\'t change the equilibrium position; it only means the system would take longer to re-establish equilibrium if disturbed.'
      }
    },
    {
      id: 'ql5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Catalysts and Inert Gas** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Why is a catalyst useful in the Haber process even though it doesn\'t increase yield?',
            options: [
              'It allows the reaction to reach equilibrium at a practical rate',
              'It increases K',
              'It shifts equilibrium toward products',
              'It eliminates the need for high pressure'
            ],
            correctAnswer: 0,
            explanation: 'The catalyst (iron) allows the Haber process to reach equilibrium quickly at moderate temperatures. Without it, the reaction would be too slow to be industrially practical. The catalyst doesn\'t change K or the equilibrium position.'
          },
          {
            question: 'Which of the following will NOT shift a gaseous equilibrium?',
            options: [
              'Adding a reactant',
              'Changing the temperature',
              'Adding a catalyst',
              'Decreasing the volume'
            ],
            correctAnswer: 2,
            explanation: 'Adding a catalyst does not shift the equilibrium. It speeds up both the forward and reverse reactions equally, leaving the equilibrium position unchanged.'
          }
        ]
      }
    }
  ]
}
