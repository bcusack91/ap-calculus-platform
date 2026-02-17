export const precalcCompositionPart5Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct5-intro',
      type: 'text' as const,
      content: `
# Verifying Inverses

**Part 5 of 7 — Verifying Inverses**

### 1. Verify

f(f⁻¹(x)) = x for all x in domain of f⁻¹

### 2. Verify

f⁻¹(f(x)) = x for all x in domain of f

### 3. Graphical verification

reflection over y = x

### 4. Domain of f = Range of f⁻¹ and vice versa

Domain of f = Range of f⁻¹ and vice versa
      `
    },
    {
      id: 'funct5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Verify" refer to in precalculus?',
            options: [
              'f(f⁻¹(x)) = x for all x in domain of f⁻¹',
              'This is a common misconception about the topic',
              'reflection over y = x',
              'Domain of f = Range of f⁻¹ and vice versa'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Graphical verification?',
            options: [
              'reflection over y = x',
              'f(f⁻¹(x)) = x for all x in domain of f⁻¹',
              'Domain of f = Range of f⁻¹ and vice versa',
              'f⁻¹(f(x)) = x for all x in domain of f'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Graphical verification: reflection over y = x. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'funct5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Verify**: f(f⁻¹(x)) = x for all x in domain of f⁻¹
- **Verify**: f⁻¹(f(x)) = x for all x in domain of f
- **Graphical verification**: reflection over y = x
- **Domain of f = Range of f⁻¹ and vice versa**
      `
    },
    {
      id: 'funct5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to verifying inverses?',
            options: [
              'Domain of f = Range of f⁻¹ and vice versa',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Domain of f = Range of f⁻¹ and vice versa'
          }
        ]
      }
    },
    {
      id: 'funct5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Verify',
            options: ['f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x', 'Domain of f = Range of f⁻¹ and vice versa']
          },
          {
            label: 'Verify',
            options: ['f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x', 'f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'Domain of f = Range of f⁻¹ and vice versa']
          },
          {
            label: 'Graphical verification',
            options: ['reflection over y = x', 'f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'Domain of f = Range of f⁻¹ and vice versa']
          }
        ],
        correctAnswers: ['f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x'],
        hint1: 'Think about what each concept specifically describes in Verifying Inverses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Verifying Inverses describes a specific idea. Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹. Verify: f⁻¹(f(x)) = x for all x in domain of f. Graphical verification: reflection over y = x.'
      }
    }
  ]
}
