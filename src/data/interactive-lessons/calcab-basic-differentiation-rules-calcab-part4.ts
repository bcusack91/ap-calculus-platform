export const calcABBasicDiffPart4Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic4-intro',
      type: 'text' as const,
      content: `
# Quotient Rule

**Part 4 of 7 — Quotient Rule**

### 1. Quotient Rule

d/dx[f/g] = (f'g - fg')/g²

### 2. Low d-high minus high d-low, over the square of what's below

Low d-high minus high d-low, over the square of what's below

### 3. Can also write as

d/dx[f/g] = (gf' - fg')/g²

### 4. Alternative

rewrite f/g = f·g⁻¹ and use product rule with power rule
      `
    },
    {
      id: 'basic4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Quotient Rule?',
            options: [
              'rewrite f/g = f·g⁻¹ and use product rule with power rule',
              'Low d-high minus high d-low, over the square of what\'s below',
              'd/dx[f/g] = (gf\' - fg\')/g²',
              'd/dx[f/g] = (f\'g - fg\')/g²'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Quotient Rule: d/dx[f/g] = (f\'g - fg\')/g². The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Quotient Rule, which explains Can also write as?',
            options: [
              'd/dx[f/g] = (f\'g - fg\')/g²',
              'rewrite f/g = f·g⁻¹ and use product rule with power rule',
              'Low d-high minus high d-low, over the square of what\'s below',
              'd/dx[f/g] = (gf\' - fg\')/g²'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Can also write as: d/dx[f/g] = (gf\' - fg\')/g². Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'basic4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Quotient Rule**: d/dx[f/g] = (f'g - fg')/g²
- **Low d-high minus high d-low, over the square of what's below**
- **Can also write as**: d/dx[f/g] = (gf' - fg')/g²
- **Alternative**: rewrite f/g = f·g⁻¹ and use product rule with power rule
      `
    },
    {
      id: 'basic4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Quotient Rule, which correctly describes Alternative?',
            options: [
              'Low d-high minus high d-low, over the square of what\'s below',
              'd/dx[f/g] = (gf\' - fg\')/g²',
              'rewrite f/g = f·g⁻¹ and use product rule with power rule',
              'd/dx[f/g] = (f\'g - fg\')/g²'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Alternative: rewrite f/g = f·g⁻¹ and use product rule with power rule. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Quotient Rule',
            options: ['d/dx[f/g] = (f\'g - fg\')/g²', 'Low d-high minus high d-low, over the square of what\'s below', 'd/dx[f/g] = (gf\' - fg\')/g²', 'rewrite f/g = f·g⁻¹ and use product rule with power rule']
          },
          {
            label: 'Can also write as',
            options: ['d/dx[f/g] = (f\'g - fg\')/g²', 'rewrite f/g = f·g⁻¹ and use product rule with power rule', 'Low d-high minus high d-low, over the square of what\'s below', 'd/dx[f/g] = (gf\' - fg\')/g²']
          },
          {
            label: 'Alternative',
            options: ['d/dx[f/g] = (f\'g - fg\')/g²', 'd/dx[f/g] = (gf\' - fg\')/g²', 'rewrite f/g = f·g⁻¹ and use product rule with power rule', 'Low d-high minus high d-low, over the square of what\'s below']
          }
        ],
        correctAnswers: ['d/dx[f/g] = (f\'g - fg\')/g²', 'd/dx[f/g] = (gf\' - fg\')/g²', 'rewrite f/g = f·g⁻¹ and use product rule with power rule'],
        hint1: 'Think about what each concept specifically describes in Quotient Rule.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Quotient Rule describes a specific idea. Quotient Rule: d/dx[f/g] = (f\'g - fg\')/g². Can also write as: d/dx[f/g] = (gf\' - fg\')/g². Alternative: rewrite f/g = f·g⁻¹ and use product rule with power rule.'
      }
    }
  ]
}
