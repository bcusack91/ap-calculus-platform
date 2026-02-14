export const psychRetrievalPart1Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri1-intro',
      type: 'text' as const,
      content: `
# 🧠 Retrieval & Forgetting

**Part 1 of 7 — Retrieval Processes**

### 1. Recall

retrieving information without cues (essay questions)

### 2. Recognition

identifying previously learned info (multiple choice)

### 3. Retrieval cues

stimuli that help access stored memories

### 4. Context-dependent memory

same environment aids recall
      `
    },
    {
      id: 'retri1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of retrieval processes?',
            options: [
              'Recall',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Recall: retrieving information without cues (essay questions)'
          },
          {
            question: 'In the context of retrieval processes, which is accurate?',
            options: [
              'stimuli that help access stored memories',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Retrieval cues: stimuli that help access stored memories'
          }
        ]
      }
    },
    {
      id: 'retri1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Recall**: retrieving information without cues (essay questions)
- **Recognition**: identifying previously learned info (multiple choice)
- **Retrieval cues**: stimuli that help access stored memories
- **Context-dependent memory**: same environment aids recall
      `
    },
    {
      id: 'retri1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to retrieval processes?',
            options: [
              'same environment aids recall',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Context-dependent memory: same environment aids recall'
          }
        ]
      }
    },
    {
      id: 'retri1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Recall',
            options: ['retrieving information without cues (essay questio', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Recognition',
            options: ['identifying previously learned info (multiple choi', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Retrieval cues',
            options: ['stimuli that help access stored memories', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['retrieving information without cues (essay questio', 'identifying previously learned info (multiple choi', 'stimuli that help access stored memories'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Retrieval Processes.'
      }
    }
  ]
}
