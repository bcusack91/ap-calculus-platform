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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Recall?',
            options: [
              'identifying previously learned info (multiple choice)',
              'retrieving information without cues (essay questions)',
              'same environment aids recall',
              'stimuli that help access stored memories'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Recall: retrieving information without cues (essay questions). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Retrieval cues:',
            options: [
              'identifying previously learned info (multiple choice)',
              'same environment aids recall',
              'retrieving information without cues (essay questions)',
              'stimuli that help access stored memories'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Retrieval cues: stimuli that help access stored memories. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Recall',
            options: ['retrieving information without cues (essay questions)', 'identifying previously learned info (multiple choice)', 'stimuli that help access stored memories', 'same environment aids recall']
          },
          {
            label: 'Recognition',
            options: ['stimuli that help access stored memories', 'retrieving information without cues (essay questions)', 'same environment aids recall', 'identifying previously learned info (multiple choice)']
          },
          {
            label: 'Retrieval cues',
            options: ['retrieving information without cues (essay questions)', 'identifying previously learned info (multiple choice)', 'stimuli that help access stored memories', 'same environment aids recall']
          }
        ],
        correctAnswers: ['retrieving information without cues (essay questions)', 'identifying previously learned info (multiple choice)', 'stimuli that help access stored memories'],
        hint1: 'Think about what each concept specifically describes in Retrieval & Forgetting.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Retrieval & Forgetting describes a specific idea. Recall: retrieving information without cues (essay questions). Recognition: identifying previously learned info (multiple choice). Retrieval cues: stimuli that help access stored memories.'
      }
    }
  ]
}
