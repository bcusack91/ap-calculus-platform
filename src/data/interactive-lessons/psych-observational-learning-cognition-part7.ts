export const psychObservationalPart7Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Three types of learning compared

Three types of learning compared

### 2. Cognitive revolution in learning theory

Cognitive revolution in learning theory

### 3. Applications to education and therapy

Applications to education and therapy

### 4. AP exam

learning theory identification
      `
    },
    {
      id: 'obser7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Three types of learning compared?',
            options: [
              'learning theory identification',
              'Three types of learning compared',
              'Applications to education and therapy',
              'Cognitive revolution in learning theory'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Three types of learning compared. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Applications to education and therapy?',
            options: [
              'Applications to education and therapy',
              'Cognitive revolution in learning theory',
              'Three types of learning compared',
              'learning theory identification'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Applications to education and therapy. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'obser7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Three types of learning compared**
- **Cognitive revolution in learning theory**
- **Applications to education and therapy**
- **AP exam**: learning theory identification
      `
    },
    {
      id: 'obser7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'learning theory identification',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: learning theory identification'
          }
        ]
      }
    },
    {
      id: 'obser7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three types of learning compared',
            options: ['Applications to education and therapy', 'Three types of learning compared', 'Cognitive revolution in learning theory', 'learning theory identification']
          },
          {
            label: 'Cognitive revolution in learning theory',
            options: ['learning theory identification', 'Three types of learning compared', 'Cognitive revolution in learning theory', 'Applications to education and therapy']
          },
          {
            label: 'Applications to education and therapy',
            options: ['Three types of learning compared', 'learning theory identification', 'Applications to education and therapy', 'Cognitive revolution in learning theory']
          }
        ],
        correctAnswers: ['Three types of learning compared', 'Cognitive revolution in learning theory', 'Applications to education and therapy'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Three types of learning compared. Cognitive revolution in learning theory. Applications to education and therapy.'
      }
    }
  ]
}
