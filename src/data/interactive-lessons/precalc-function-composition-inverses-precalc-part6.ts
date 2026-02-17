export const precalcCompositionPart6Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'funct6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Verify?',
            options: [
              'Domain of f = Range of f⁻¹ and vice versa',
              'This is a common misconception about the topic',
              'reflection over y = x',
              'f(f⁻¹(x)) = x for all x in domain of f⁻¹'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Graphical verification?',
            options: [
              'f(f⁻¹(x)) = x for all x in domain of f⁻¹',
              'reflection over y = x',
              'f⁻¹(f(x)) = x for all x in domain of f',
              'Domain of f = Range of f⁻¹ and vice versa'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Graphical verification: reflection over y = x. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'funct6-detail',
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
      id: 'funct6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
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
      id: 'funct6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Verify',
            options: ['Domain of f = Range of f⁻¹ and vice versa', 'f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x']
          },
          {
            label: 'Verify',
            options: ['f⁻¹(f(x)) = x for all x in domain of f', 'Domain of f = Range of f⁻¹ and vice versa', 'f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'reflection over y = x']
          },
          {
            label: 'Graphical verification',
            options: ['f⁻¹(f(x)) = x for all x in domain of f', 'Domain of f = Range of f⁻¹ and vice versa', 'f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'reflection over y = x']
          }
        ],
        correctAnswers: ['f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹. Verify: f⁻¹(f(x)) = x for all x in domain of f. Graphical verification: reflection over y = x.'
      }
    }
  ]
}
