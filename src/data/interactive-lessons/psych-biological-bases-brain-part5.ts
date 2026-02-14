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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of brain imaging techniques?',
            options: [
              'fMRI',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'fMRI: shows brain activity (blood flow)'
          },
          {
            question: 'In the context of brain imaging techniques, which is accurate?',
            options: [
              'structural images',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'CT/MRI: structural images'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'fMRI',
            options: ['shows brain activity (blood flow)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'EEG',
            options: ['measures electrical activity', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'CT/MRI',
            options: ['structural images', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['shows brain activity (blood flow)', 'measures electrical activity', 'structural images'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Brain Imaging Techniques.'
      }
    }
  ]
}
