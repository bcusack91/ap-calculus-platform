export const chemReactionQuotientLeChatPart4Data = {
  topicSlug: 'reaction-quotient-le-chatelier',
  sections: [
    {
      id: 'ql4-intro',
      type: 'text' as const,
      content: `# 🔄 Le Chatelier — Pressure/Volume and Temperature

**Part 4 of 7 — How Gases and Heat Affect Equilibrium**

---

### Topics in This Part

| Section |
|---------|
| 💨 Pressure and Volume Changes |
| The Rule |
| Why? |
| Example |
| Special Case: Equal Moles |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ql4-pressure-volume',
      type: 'text' as const,
      content: `
## 💨 Pressure and Volume Changes

### The Rule

> 💡 **Tip:** For gaseous equilibria, decreasing volume (increasing pressure) shifts toward the side with **fewer moles of gas**. Increasing volume shifts toward **more moles of gas**.


---

### Why?

Decreasing volume concentrates all species equally. The side with more moles of gas is affected more. Shifting toward fewer moles relieves the pressure stress.


---

### Example

$$\\boxed{\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)}$$

- Reactant side: $1 + 3 = 4$ moles of gas
- Product side: $2$ moles of gas

| Change | Shift | Why |
|--------|-------|-----|
| Decrease volume | Right → | Fewer moles on right (2 vs 4) |
| Increase volume | Left ← | More moles on left (4 vs 2) |


---

### Special Case: Equal Moles

$$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g) \\quad (\\Delta n = 0)$$

Both sides have 2 moles of gas. **No shift** occurs with pressure/volume changes.
      `
    },
    {
      id: 'ql4-temperature',
      type: 'text' as const,
      content: `
## 🌡️ Temperature Changes

> ⚠️ **Warning:** Temperature is **unique** — it\'s the only stress that changes the value of $K$. All other stresses shift the equilibrium position but leave K unchanged.


---

### The "Heat as a Species" Trick

Treat heat as a reactant or product:

**Exothermic** ($\\Delta H < 0$): Heat is a product
$$A \\rightleftharpoons B + \\text{heat}$$

**Endothermic** ($\\Delta H > 0$): Heat is a reactant
$$\\text{heat} + A \\rightleftharpoons B$$


---

### Effect of Temperature Changes

| Reaction Type | Increase T | Decrease T |
|---------------|-----------|------------|
| Exothermic | Shift left ←, K decreases | Shift right →, K increases |
| Endothermic | Shift right →, K increases | Shift left ←, K decreases |


---

### Example

$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g) \\quad \\Delta H = -92$ kJ (exothermic)

$$\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3 + \\text{heat}$$

- Increase T → adds heat → shifts **left** → K **decreases**
- Decrease T → removes heat → shifts **right** → K **increases**


---

### Key Point

> 🔑 **Key Concept:** Pressure, volume, and concentration changes shift the equilibrium **position** but do NOT change K. Temperature changes BOTH the position AND the value of K.
      `
    },
    {
      id: 'ql4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Pressure, Volume, and Temperature** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $2\\,\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{SO}_3(g)$, decreasing the volume will:',
            options: [
              'Shift left (more moles of gas on the left)',
              'Shift right (fewer moles of gas on the right)',
              'Have no effect (equal moles)',
              'Change K'
            ],
            correctAnswer: 1,
            explanation: 'Left side: 2 + 1 = 3 moles of gas. Right side: 2 moles. Decreasing volume (increasing pressure) shifts toward fewer moles → shift right.'
          },
          {
            question: 'An endothermic reaction at equilibrium is heated. What happens?',
            options: [
              'Shifts left, K decreases',
              'Shifts right, K increases',
              'No shift, K stays the same',
              'Shifts right, K stays the same'
            ],
            correctAnswer: 1,
            explanation: 'Endothermic: heat is a "reactant." Adding heat (increasing T) shifts right and increases K.'
          },
          {
            question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, doubling the volume will:',
            options: [
              'Shift right',
              'Shift left',
              'Have no effect on equilibrium position',
              'Decrease K'
            ],
            correctAnswer: 2,
            explanation: '$\\Delta n = 2 - 2 = 0$. Equal moles of gas on both sides. Volume/pressure changes have no effect when $\\Delta n = 0$.'
          }
        ]
      }
    },
    {
      id: 'ql4-input-practice',
      type: 'input-boxes' as const,
      content: `
**Predicting Shifts** 🧮

For: $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $\\Delta H = +87$ kJ (endothermic)

**1)** If the volume is decreased, the reaction shifts which direction? (Enter "right" or "left")

**2)** If the temperature is increased, the reaction shifts which direction? (Enter "right" or "left")

**3)** Does increasing temperature increase or decrease K for this reaction? (Enter "increase" or "decrease")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['left', 'right', 'increase'],
        hint1: 'Reactant side: 1 mol gas. Product side: 2 mol gas. Decreasing volume favors fewer moles.',
        hint2: 'Endothermic: heat is a reactant. Adding heat shifts right.',
        hint3: 'For endothermic reactions, increasing T increases K.',
        explanation: '1) Left side has 1 mol gas, right has 2 mol. Decreasing volume favors fewer moles → shift left. 2) Endothermic + increase T → heat is a reactant → shift right. 3) Endothermic + increase T → K increases.'
      }
    },
    {
      id: 'ql4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Pressure & Temperature Effects** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Decreasing volume shifts equilibrium toward',
            options: ['more moles of gas', 'fewer moles of gas', 'always right', 'always left']
          },
          {
            label: 'Temperature changes are unique because they change',
            options: ['only Q', 'only the position', 'the value of K', 'nothing']
          },
          {
            label: 'For an exothermic reaction, cooling the system',
            options: ['shifts left, K decreases', 'shifts right, K increases', 'no effect', 'shifts right, K decreases']
          },
          {
            label: 'When $\\Delta n = 0$, a volume change causes',
            options: ['shift right', 'shift left', 'no shift', 'K to change']
          }
        ],
        correctAnswers: [
          'fewer moles of gas',
          'the value of K',
          'shifts right, K increases',
          'no shift'
        ],
        hint1: 'Fewer moles = less pressure = relieves the stress.',
        hint2: 'Temperature is the ONLY factor that changes K.',
        hint3: 'Exothermic: heat is a product. Cooling removes heat (product) → shift right.',
        explanation: 'Decreasing volume → fewer moles of gas side. Only temperature changes K. Exothermic + cooling → shift right, K increases. When $\\Delta n = 0$, pressure/volume changes have no effect.'
      }
    },
    {
      id: 'ql4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Pressure and Temperature** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the Haber process ($\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$, $\\Delta H = -92$ kJ), what conditions favor maximum NH₃ yield?',
            options: [
              'High pressure, high temperature',
              'High pressure, low temperature',
              'Low pressure, high temperature',
              'Low pressure, low temperature'
            ],
            correctAnswer: 1,
            explanation: 'High pressure shifts right (4 mol gas → 2 mol gas). Low temperature shifts right (exothermic → heat is a product, removing heat favors products). So high P + low T maximizes NH₃.'
          },
          {
            question: 'If volume is halved for $\\text{A}(g) \\rightleftharpoons 2\\,\\text{B}(g)$, the equilibrium:',
            options: [
              'Shifts right (more moles on right)',
              'Shifts left (fewer moles on left)',
              'Does not shift (equal moles)',
              'K changes'
            ],
            correctAnswer: 1,
            explanation: 'Left: 1 mol gas. Right: 2 mol gas. Halving volume (doubling pressure) shifts toward fewer moles → shift left. K doesn\'t change.'
          }
        ]
      }
    }
  ]
}
