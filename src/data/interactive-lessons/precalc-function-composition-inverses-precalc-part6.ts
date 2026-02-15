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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Verify',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Verify: f(f⁻¹(x)) = x for all x in domain of f⁻¹'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'reflection over y = x',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Graphical verification: reflection over y = x'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Verify',
            options: ['f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Verify',
            options: ['f⁻¹(f(x)) = x for all x in domain of f', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Graphical verification',
            options: ['reflection over y = x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(f⁻¹(x)) = x for all x in domain of f⁻¹', 'f⁻¹(f(x)) = x for all x in domain of f', 'reflection over y = x'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
