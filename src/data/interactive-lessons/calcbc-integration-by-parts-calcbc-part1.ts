export const calcBCIntByPartsPart1Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ1-intro',
      type: 'text' as const,
      content: `
# ∮ Integration By Parts

**Part 1 of 7 — Integration by Parts Formula**

### 1. Integration by parts

∫u dv = uv - ∫v du

### 2. Derived from the product rule in reverse

Derived from the product rule in reverse

### 3. Choose u (to differentiate) and dv (to integrate)

Choose u (to differentiate) and dv (to integrate)

### 4. Transforms a hard integral into a simpler one

Transforms a hard integral into a simpler one
      `
    },
    {
      id: 'integ1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integration by parts formula?',
            options: [
              'Integration by parts',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Integration by parts: ∫u dv = uv - ∫v du'
          },
          {
            question: 'In the context of integration by parts formula, which is accurate?',
            options: [
              'Choose u (to differentiate) and dv (to integrate)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Choose u (to differentiate) and dv (to integrate)'
          }
        ]
      }
    },
    {
      id: 'integ1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Integration by parts**: ∫u dv = uv - ∫v du
- **Derived from the product rule in reverse**
- **Choose u (to differentiate) and dv (to integrate)**
- **Transforms a hard integral into a simpler one**
      `
    },
    {
      id: 'integ1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integration by parts formula?',
            options: [
              'Transforms a hard integral into a simpler one',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Transforms a hard integral into a simpler one'
          }
        ]
      }
    },
    {
      id: 'integ1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integration by parts',
            options: ['∫u dv = uv - ∫v du', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derived from the product rule in reverse',
            options: ['Derived from the product rule in reverse', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Choose u (to differentiate) and dv (to integrate)',
            options: ['Choose u (to differentiate) and dv (to integrate)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫u dv = uv - ∫v du', 'Derived from the product rule in reverse', 'Choose u (to differentiate) and dv (to integrate)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integration by Parts Formula.'
      }
    }
  ]
}
