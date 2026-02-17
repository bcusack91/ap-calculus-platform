export const bioEvidencePart5Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid5-intro-p5',
      type: 'text' as const,
      content: `
# ## Direct Observation

**Part 5 of 7 — Direct Observation**

1. Antibiotic resistance in bacteria
2. Pesticide resistance in insects
3. Darwin's finch beak changes during drought
4. Artificial selection demonstrates selection principle
      `
    },
    {
      id: 'evid5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Antibiotic resistance in bacteria" refer to in biology?',
            options: [
              'Pesticide resistance in insects',
              'Artificial selection demonstrates selection principle',
              'Antibiotic resistance in bacteria',
              'Darwin\'s finch beak changes during drought'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Antibiotic resistance in bacteria. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Darwin\'s finch beak changes during…?',
            options: [
              'Pesticide resistance in insects',
              'Antibiotic resistance in bacteria',
              'Darwin\'s finch beak changes during drought',
              'Artificial selection demonstrates selection principle'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Darwin\'s finch beak changes during drought. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Antibiotic resistance in bacteria**
- **Pesticide resistance in insects**
- **Darwin's finch beak changes during drought**
- **Artificial selection demonstrates selection principle**
      `
    },
    {
      id: 'evid5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Direct Observation, which correctly describes Artificial selection demonstrates…?',
            options: [
              'Artificial selection demonstrates selection principle',
              'Darwin\'s finch beak changes during drought',
              'Antibiotic resistance in bacteria',
              'Pesticide resistance in insects'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Artificial selection demonstrates selection principle. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Antibiotic resistance in bacteria',
            options: ['Pesticide resistance in insects', 'Antibiotic resistance in bacteria', 'Darwin\'s finch beak changes during drought', 'Artificial selection demonstrates selection principle']
          },
          {
            label: 'Pesticide resistance in insects',
            options: ['Darwin\'s finch beak changes during drought', 'Pesticide resistance in insects', 'Antibiotic resistance in bacteria', 'Artificial selection demonstrates selection principle']
          },
          {
            label: 'Darwin\'s finch beak changes during…',
            options: ['Darwin\'s finch beak changes during drought', 'Antibiotic resistance in bacteria', 'Artificial selection demonstrates selection principle', 'Pesticide resistance in insects']
          }
        ],
        correctAnswers: ['Antibiotic resistance in bacteria', 'Pesticide resistance in insects', 'Darwin\'s finch beak changes during drought'],
        hint1: 'Think about what each concept specifically describes in Direct Observation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Direct Observation describes a specific idea. Antibiotic resistance in bacteria. Pesticide resistance in insects. Darwin\'s finch beak changes during drought.'
      }
    }
  ]
}
