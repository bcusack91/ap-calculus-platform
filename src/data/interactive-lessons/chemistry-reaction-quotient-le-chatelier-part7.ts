export const chemReactionQuotientLeChatPart7Data = {
  topicSlug: 'reaction-quotient-le-chatelier',
  sections: [
    {
      id: 'ql7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Reaction Quotient & Le Chatelier\'s Principle**

This final part reviews Q vs K comparisons, Le Chatelier predictions for all types of stress, and combines them in AP-style questions.
      `
    },
    {
      id: 'ql7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete Concept Summary

### Reaction Quotient Q
- Same expression as K, using current (not equilibrium) concentrations
- $Q < K$ → shift right | $Q > K$ → shift left | $Q = K$ → at equilibrium


---

### Le Chatelier\'s Principle

| Stress | Direction of Shift | K Changes? |
|--------|-------------------|------------|
| Add reactant | Right → | No |
| Remove reactant | Left ← | No |
| Add product | Left ← | No |
| Remove product | Right → | No |
| ↓ Volume (↑ P) | Toward fewer mol gas | No |
| ↑ Volume (↓ P) | Toward more mol gas | No |
| ↑ Temperature | Endothermic: →; Exothermic: ← | **Yes** |
| ↓ Temperature | Endothermic: ←; Exothermic: → | **Yes** |
| Catalyst | No shift | No |
| Inert gas (const V) | No shift | No |


---

### Key Reminders
- Only **temperature** changes K
- A catalyst speeds up the approach to equilibrium but doesn\'t change position or K
- The system **partially** counteracts a stress — never fully
      `
    },
    {
      id: 'ql7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{CO}_2(g) + \\text{H}_2(g) \\rightleftharpoons \\text{CO}(g) + \\text{H}_2\\text{O}(g)$, $K = 0.64$. If $Q = 1.2$, the concentration of CO will:',
            options: [
              'Increase as the reaction shifts right',
              'Decrease as the reaction shifts left',
              'Stay the same (at equilibrium)',
              'Increase as K changes'
            ],
            correctAnswer: 1,
            explanation: '$Q = 1.2 > K = 0.64$, so the system shifts left. CO is a product, so shifting left consumes CO, decreasing its concentration.'
          },
          {
            question: 'Which stress to a system at equilibrium will change the value of K?',
            options: [
              'Adding a reactant',
              'Removing a product',
              'Compressing the container',
              'Raising the temperature'
            ],
            correctAnswer: 3,
            explanation: 'Only temperature changes K. All other stresses shift the equilibrium position but leave K unchanged.'
          },
          {
            question: 'For $\\text{CaCO}_3(s) \\rightleftharpoons \\text{CaO}(s) + \\text{CO}_2(g)$, $\\Delta H > 0$. Adding more CaCO₃(s) will:',
            options: [
              'Shift right, producing more CO₂',
              'Shift left, consuming CO₂',
              'Have no effect — CaCO₃ is a solid',
              'Increase K'
            ],
            correctAnswer: 2,
            explanation: 'CaCO₃ is a solid. Solids don\'t appear in the Q expression. Adding more solid doesn\'t change Q and therefore doesn\'t shift the equilibrium.'
          }
        ]
      }
    },
    {
      id: 'ql7-ap-mc2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The equilibrium $2\\,\\text{NO}_2(g) \\rightleftharpoons \\text{N}_2\\text{O}_4(g)$, $\\Delta H = -57$ kJ, is established in a sealed flask. Cooling the flask will:',
            options: [
              'Shift left; K decreases',
              'Shift right; K increases',
              'No shift; K unchanged',
              'Shift right; K decreases'
            ],
            correctAnswer: 1,
            explanation: 'Exothermic: heat is a product. Cooling removes heat → shift right (toward more N₂O₄). For an exothermic reaction, cooling increases K.'
          },
          {
            question: 'For $\\text{A}(g) + \\text{B}(g) \\rightleftharpoons 2\\,\\text{C}(g)$, a catalyst is introduced to a system NOT yet at equilibrium. The catalyst will:',
            options: [
              'Shift the system toward products',
              'Shift the system toward reactants',
              'Help the system reach equilibrium faster without changing the final position',
              'Change the value of K'
            ],
            correctAnswer: 2,
            explanation: 'A catalyst speeds up both forward and reverse reactions. Whether or not the system is at equilibrium, the catalyst helps it reach the same equilibrium position faster — it doesn\'t change where equilibrium lies.'
          }
        ]
      }
    },
    {
      id: 'ql7-frq-practice',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 🧮

$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $K_c = 0.040$ at 250°C, $\\Delta H = +87$ kJ

Current concentrations: $[\\text{PCl}_5] = 0.50$, $[\\text{PCl}_3] = 0.10$, $[\\text{Cl}_2] = 0.10$ M

**1)** Calculate Q. (Enter as a decimal)

**2)** Which direction does the reaction shift? (Enter "right" or "left")

**3)** If the temperature is raised to 300°C, does K increase or decrease? (Enter "increase" or "decrease")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.02', 'right', 'increase'],
        hint1: '$Q = \\frac{(0.10)(0.10)}{0.50} = 0.02$',
        hint2: '$Q = 0.02 < K = 0.040$, so shift right.',
        hint3: 'Endothermic ($\\Delta H > 0$): increasing T increases K.',
        explanation: '1) $Q = (0.10)(0.10)/0.50 = 0.01/0.50 = 0.02$. 2) $Q = 0.02 < K = 0.040$ → shift right. 3) Endothermic reaction: raising temperature increases K.'
      }
    },
    {
      id: 'ql7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When Q < K, the system has too many',
            options: ['products', 'reactants', 'catalysts', 'inert gases']
          },
          {
            label: 'Le Chatelier\'s principle says the system shifts to _____ the stress',
            options: ['completely remove', 'partially offset', 'amplify', 'ignore']
          },
          {
            label: 'For a reaction with $\\Delta n > 0$, increasing pressure shifts',
            options: ['right', 'left', 'no shift', 'depends on K']
          },
          {
            label: 'A system at equilibrium has Q equal to',
            options: ['0', '1', 'K', 'infinity']
          }
        ],
        correctAnswers: [
          'reactants',
          'partially offset',
          'left',
          'K'
        ],
        hint1: '$Q < K$ means the product/reactant ratio is too small — too many reactants.',
        hint2: 'The system never fully counteracts the stress.',
        hint3: '$\\Delta n > 0$: more moles of gas on product side. Increasing P shifts toward fewer moles → left.',
        explanation: '$Q < K$: too many reactants relative to equilibrium. Le Chatelier: partial offset only. $\\Delta n > 0$: more gas moles on right → increasing P shifts left. At equilibrium, $Q = K$ by definition.'
      }
    },
    {
      id: 'ql7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student states: "Adding a catalyst to a reaction at equilibrium shifts the equilibrium toward products because the catalyst speeds up the forward reaction." This is:',
            options: [
              'Correct',
              'Incorrect — the catalyst speeds up both forward AND reverse reactions equally',
              'Incorrect — catalysts only affect the reverse reaction',
              'Correct, but only for exothermic reactions'
            ],
            correctAnswer: 1,
            explanation: 'Catalysts speed up both forward and reverse reactions equally by lowering the activation energy for both directions. There is no net shift in equilibrium position.'
          },
          {
            question: 'For $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, $\\Delta H = -92$ kJ. Which set of conditions maximizes NH₃ at equilibrium?',
            options: [
              'High temperature, low pressure, with catalyst',
              'Low temperature, high pressure, with catalyst',
              'Low temperature, low pressure, no catalyst',
              'High temperature, high pressure, no catalyst'
            ],
            correctAnswer: 1,
            explanation: 'Exothermic → low T increases K (shifts right). $\\Delta n = -2$ → high P shifts right (fewer moles on product side). The catalyst doesn\'t change equilibrium position but helps reach it faster. So: low T, high P, with catalyst.'
          }
        ]
      }
    }
  ]
}
