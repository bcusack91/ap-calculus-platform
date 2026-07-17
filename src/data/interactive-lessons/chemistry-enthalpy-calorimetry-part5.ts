export const chemEnthalpyCalorimetryPart5Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh5-intro',
      type: 'text' as const,
      content: `# 🔄 Hess's Law — Adding Enthalpy Changes

**Part 5 of 7 — The Power of State Functions**

---

### Topics in This Part

| Section |
|---------|
| 📏 Hess's Law |
| Rules for Manipulating Equations |
| 🛠️ Problem-Solving Strategy |
| Step-by-Step Approach |
| Worked Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'eh5-hess-law',
      type: 'text' as const,
      content: `
## 📏 Hess's Law

**Hess\'s Law:** If a reaction can be expressed as the sum of two or more other reactions, the enthalpy change of the overall reaction is the **sum** of the enthalpy changes of the individual reactions.

$$\\boxed{\\Delta H_{\\text{overall}} = \\Delta H_1 + \\Delta H_2 + \\Delta H_3 + \\cdots}$$

> 🔑 **Why It Works:** Because enthalpy is a state function, the total $\\Delta H$ depends only on the initial and final states, not the path. Whether a reaction occurs in one step or ten, $\\Delta H$ is the same.


---

### Rules for Manipulating Equations

| Operation | Effect on $\\Delta H$ |
|-----------|---------------------|
| Reverse the reaction | Change the sign |
| Multiply by a factor $n$ | Multiply $\\Delta H$ by $n$ |
| Add reactions together | Add $\\Delta H$ values |
      `
    },
    {
      id: 'eh5-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Step-by-Step Approach

1. **Write the target reaction** — the one you need $\\Delta H$ for
2. **Examine the given reactions** — look for each substance in your target
3. **Manipulate given reactions** so that when added, they equal the target:
   - Reverse reactions if a reactant needs to be a product (or vice versa)
   - Multiply reactions to match the coefficients in the target
4. **Add the manipulated reactions** — substances on opposite sides cancel
5. **Add the adjusted $\\Delta H$ values** to get $\\Delta H_{\\text{overall}}$


---

### Worked Example

> **Problem:** Find $\\Delta H$ for: $\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$
>
> **Given:**
> 1. $\\text{C}(s) + \\text{O}_2(g) \\rightarrow \\text{CO}_2(g) \\quad \\Delta H_1 = -393.5$ kJ
> 2. $\\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) \\quad \\Delta H_2 = -283.0$ kJ

**Solution:**
- Keep reaction 1 as written (has C as reactant ✓)
- Reverse reaction 2 (need CO as product): $\\text{CO}_2(g) \\rightarrow \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g) \\quad \\Delta H = +283.0$ kJ

**Add:**

$\\text{C}(s) + \\text{O}_2(g) + \\text{CO}_2(g) \\rightarrow \\text{CO}_2(g) + \\text{CO}(g) + \\frac{1}{2}\\text{O}_2(g)$

Cancel $\\text{CO}_2$ and simplify $\\text{O}_2$:

$\\text{C}(s) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{CO}(g)$

$$\\Delta H = -393.5 + 283.0 = -110.5 \\text{ kJ}$$
      `
    },
    {
      id: 'eh5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Hess's Law Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hess\'s Law works because enthalpy is a:',
            options: [
              'Path function',
              'State function',
              'Conserved quantity',
              'Extensive property only'
            ],
            correctAnswer: 1,
            explanation: 'Hess\'s Law is a direct consequence of enthalpy being a state function. The total ΔH depends only on initial and final states, so it doesn\'t matter how many steps we use to get there.'
          },
          {
            question: 'If you reverse a reaction AND multiply it by 2, what happens to ΔH?',
            options: [
              'It stays the same',
              'It changes sign only',
              'It doubles only',
              'It changes sign AND doubles'
            ],
            correctAnswer: 3,
            explanation: 'Reversing changes the sign: $\\Delta H \\rightarrow -\\Delta H$. Multiplying by 2 doubles it: $-\\Delta H \\rightarrow -2\\Delta H$. Both operations apply.'
          },
          {
            question: 'When adding two chemical equations, species that appear on both sides:',
            options: [
              'Are doubled',
              'Cancel out',
              'Must be kept',
              'Change phase'
            ],
            correctAnswer: 1,
            explanation: 'Species that appear on both sides of the combined equation cancel out, just like terms in an algebraic equation. This is how intermediate species disappear.'
          }
        ]
      }
    },
    {
      id: 'eh5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Hess's Law Calculations** 🧮

Given:
- (1) $\\text{S}(s) + \\text{O}_2(g) \\rightarrow \\text{SO}_2(g) \\quad \\Delta H_1 = -296.8$ kJ
- (2) $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g) \\quad \\Delta H_2 = -197.8$ kJ

Find $\\Delta H$ for: $2\\text{S}(s) + 3\\text{O}_2(g) \\rightarrow 2\\text{SO}_3(g)$

**1)** What must you multiply reaction (1) by? (enter the number)

**2)** What must you multiply reaction (2) by? (enter the number)

**3)** What is $\\Delta H$ for the target reaction? (in kJ, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '-791.4'],
        hint1: 'The target has 2S, but reaction (1) has only 1S. How do you fix that?',
        hint2: 'Reaction (2) already has $2SO_{3}$ as products — matches the target.',
        hint3: '$\\Delta H = 2(-296.8) + 1(-197.8)$.',
        explanation: '1) Multiply (1) by 2: $2\\text{S} + 2\\text{O}_2 \\rightarrow 2\\text{SO}_2$, $\\Delta H = 2(-296.8) = -593.6$ kJ. 2) Keep (2) as is (coefficient = 1). 3) Add: $-593.6 + (-197.8) = -791.4$ kJ. The $SO_{2}$ produced in step 1 is consumed in step 2.'
      }
    },
    {
      id: 'eh5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Hess's Law Strategy** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a substance is a product in the target but a reactant in the given equation, you should',
            options: ['keep it the same', 'reverse the equation', 'multiply by 2', 'ignore it']
          },
          {
            label: 'When you reverse a reaction, ΔH becomes',
            options: ['zero', 'doubled', 'opposite in sign', 'halved']
          },
          {
            label: 'Hess\'s Law allows us to calculate ΔH for reactions that',
            options: ['are very fast', 'cannot be performed directly', 'are at equilibrium', 'have no ΔH']
          },
          {
            label: 'When adding manipulated equations, intermediate species',
            options: ['remain in the final equation', 'cancel out', 'must be balanced separately', 'are always gases']
          }
        ],
        correctAnswers: ['reverse the equation', 'opposite in sign', 'cannot be performed directly', 'cancel out'],
        hint1: 'If a species is on the wrong side, flip the equation.',
        hint2: 'Reversing a reaction: exothermic ↔ endothermic.',
        hint3: 'Hess\'s Law is most useful for reactions that are hard to study directly.',
        explanation: 'Reverse equations when species need to switch sides. Reversing changes ΔH sign. Hess\'s Law lets us find ΔH for impractical reactions. Intermediates cancel because they appear on both sides.'
      }
    },
    {
      id: 'eh5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Hess's Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given: (1) A → B, $\\Delta H_{1}$ = −100 kJ and (2) B → C, $\\Delta H_{2}$ = +50 kJ. What is ΔH for A → C?',
            options: [
              '−150 kJ',
              '−50 kJ',
              '+50 kJ',
              '+150 kJ'
            ],
            correctAnswer: 1,
            explanation: 'By Hess\'s Law: $\\Delta H = \\Delta H_1 + \\Delta H_2 = (-100) + (+50) = -50$ kJ. The intermediate B cancels out.'
          },
          {
            question: 'Given: $C_{2}H_{4}(g)$ + $3O_{2}(g)$ → $2CO_{2}(g)$ + $2H_{2}O(l)$, ΔH = −1411 kJ. What is ΔH for the reverse reaction: $2CO_{2}(g)$ + $2H_{2}O(l)$ → $C_{2}H_{4}(g)$ + $3O_{2}(g)$?',
            options: [
              '−1411 kJ',
              '+1411 kJ',
              '−705.5 kJ',
              '+2822 kJ'
            ],
            correctAnswer: 1,
            explanation: 'Reversing a reaction changes the sign of ΔH: $\\Delta H_{\\text{reverse}} = +1411$ kJ. The reverse of an exothermic reaction is endothermic by the same magnitude.'
          }
        ]
      }
    }
  ]
}
