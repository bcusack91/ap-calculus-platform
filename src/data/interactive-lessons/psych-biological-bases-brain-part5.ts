export const psychBrainPart5Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo5-intro',
      type: 'text' as const,
      content: `
# ## Brain Imaging Techniques

**Part 5 of 7 — Brain Imaging Techniques**

### 1. fMRI

shows brain activity (blood flow)

### 2. EEG

measures electrical activity

### 3. CT/MRI

structural images

### 4. PET scan

metabolic activity using radioactive glucose
      `
    },
    {
      id: 'biolo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes fMRI?',
            options: [
              'measures electrical activity',
              'metabolic activity using radioactive glucose',
              'shows brain activity (blood flow)',
              'structural images'
            ],
            correctAnswer: 2,
            explanation: 'Correct — fMRI: shows brain activity (blood flow). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes CT/MRI:',
            options: [
              'measures electrical activity',
              'metabolic activity using radioactive glucose',
              'shows brain activity (blood flow)',
              'structural images'
            ],
            correctAnswer: 3,
            explanation: 'Correct — CT/MRI: structural images. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **fMRI**: shows brain activity (blood flow)
- **EEG**: measures electrical activity
- **CT/MRI**: structural images
- **PET scan**: metabolic activity using radioactive glucose
      `
    },
    {
      id: 'biolo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to brain imaging techniques?',
            options: [
              'metabolic activity using radioactive glucose',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'PET scan: metabolic activity using radioactive glucose'
          }
        ]
      }
    },
    {
      id: 'biolo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'fMRI',
            options: ['measures electrical activity', 'structural images', 'metabolic activity using radioactive glucose', 'shows brain activity (blood flow)']
          },
          {
            label: 'EEG',
            options: ['metabolic activity using radioactive glucose', 'shows brain activity (blood flow)', 'measures electrical activity', 'structural images']
          },
          {
            label: 'CT/MRI',
            options: ['measures electrical activity', 'shows brain activity (blood flow)', 'metabolic activity using radioactive glucose', 'structural images']
          }
        ],
        correctAnswers: ['shows brain activity (blood flow)', 'measures electrical activity', 'structural images'],
        hint1: 'Think about what each concept specifically describes in Brain Imaging Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Brain Imaging Techniques describes a specific idea. fMRI: shows brain activity (blood flow). EEG: measures electrical activity. CT/MRI: structural images.'
      }
    }
  ]
}
