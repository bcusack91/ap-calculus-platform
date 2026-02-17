export const oChemAminesPart6Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting amine basicity from structure

Predicting amine basicity from structure

### 2. Designing amine synthesis strategies

Designing amine synthesis strategies

### 3. Drawing diazonium reaction mechanisms

Drawing diazonium reaction mechanisms

### 4. Comparing amine reactivity patterns

Comparing amine reactivity patterns
      `
    },
    {
      id: 'amine6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting amine basicity from structure?',
            options: [
              'Comparing amine reactivity patterns',
              'Drawing diazonium reaction mechanisms',
              'Designing amine synthesis strategies',
              'Predicting amine basicity from structure'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Predicting amine basicity from structure. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Drawing diazonium reaction mechanisms:',
            options: [
              'Predicting amine basicity from structure',
              'Comparing amine reactivity patterns',
              'Drawing diazonium reaction mechanisms',
              'Designing amine synthesis strategies'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Drawing diazonium reaction mechanisms. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amine6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting amine basicity from structure**
- **Designing amine synthesis strategies**
- **Drawing diazonium reaction mechanisms**
- **Comparing amine reactivity patterns**
      `
    },
    {
      id: 'amine6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Comparing amine reactivity patterns',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Comparing amine reactivity patterns'
          }
        ]
      }
    },
    {
      id: 'amine6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting amine basicity from structure',
            options: ['Designing amine synthesis strategies', 'Predicting amine basicity from structure', 'Drawing diazonium reaction mechanisms', 'Comparing amine reactivity patterns']
          },
          {
            label: 'Designing amine synthesis strategies',
            options: ['Drawing diazonium reaction mechanisms', 'Predicting amine basicity from structure', 'Designing amine synthesis strategies', 'Comparing amine reactivity patterns']
          },
          {
            label: 'Drawing diazonium reaction mechanisms',
            options: ['Drawing diazonium reaction mechanisms', 'Designing amine synthesis strategies', 'Predicting amine basicity from structure', 'Comparing amine reactivity patterns']
          }
        ],
        correctAnswers: ['Predicting amine basicity from structure', 'Designing amine synthesis strategies', 'Drawing diazonium reaction mechanisms'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting amine basicity from structure. Designing amine synthesis strategies. Drawing diazonium reaction mechanisms.'
      }
    }
  ]
}
