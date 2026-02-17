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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Integration by parts?',
            options: [
              'Derived from the product rule in reverse',
              'Choose u (to differentiate) and dv (to integrate)',
              'Transforms a hard integral into a simpler one',
              '∫u dv = uv - ∫v du'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Integration by parts: ∫u dv = uv - ∫v du. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Integration By Parts, which explains Choose u (to differentiate) and dv (to…?',
            options: [
              '∫u dv = uv - ∫v du',
              'Choose u (to differentiate) and dv (to integrate)',
              'Transforms a hard integral into a simpler one',
              'Derived from the product rule in reverse'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Choose u (to differentiate) and dv (to integrate). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Transforms a hard integral into a…?',
            options: [
              'Choose u (to differentiate) and dv (to integrate)',
              'Derived from the product rule in reverse',
              '∫u dv = uv - ∫v du',
              'Transforms a hard integral into a simpler one'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Transforms a hard integral into a simpler one. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Integration by parts',
            options: ['Choose u (to differentiate) and dv (to integrate)', 'Derived from the product rule in reverse', 'Transforms a hard integral into a simpler one', '∫u dv = uv - ∫v du']
          },
          {
            label: 'Derived from the product rule in reverse',
            options: ['Derived from the product rule in reverse', '∫u dv = uv - ∫v du', 'Choose u (to differentiate) and dv (to integrate)', 'Transforms a hard integral into a simpler one']
          },
          {
            label: 'Choose u (to differentiate) and dv (to…',
            options: ['Choose u (to differentiate) and dv (to integrate)', 'Derived from the product rule in reverse', 'Transforms a hard integral into a simpler one', '∫u dv = uv - ∫v du']
          }
        ],
        correctAnswers: ['∫u dv = uv - ∫v du', 'Derived from the product rule in reverse', 'Choose u (to differentiate) and dv (to integrate)'],
        hint1: 'Think about what each concept specifically describes in ∮ Integration By Parts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Integration By Parts describes a specific idea. Integration by parts: ∫u dv = uv - ∫v du. Derived from the product rule in reverse. Choose u (to differentiate) and dv (to integrate).'
      }
    }
  ]
}
