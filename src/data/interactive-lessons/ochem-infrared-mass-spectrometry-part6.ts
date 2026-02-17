export const oChemIRMSPart6Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Interpreting IR spectra to identify functional groups

Interpreting IR spectra to identify functional groups

### 2. Analyzing mass spectra for molecular weight and fragments

Analyzing mass spectra for molecular weight and fragments

### 3. Combining IR and MS data

Combining IR and MS data

### 4. Practice with unknown identification

Practice with unknown identification
      `
    },
    {
      id: 'infra6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Interpreting IR spectra to identify…?',
            options: [
              'Practice with unknown identification',
              'Interpreting IR spectra to identify functional groups',
              'Combining IR and MS data',
              'Analyzing mass spectra for molecular weight and fragments'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Interpreting IR spectra to identify functional groups. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Combining IR and MS data?',
            options: [
              'Analyzing mass spectra for molecular weight and fragments',
              'Combining IR and MS data',
              'Interpreting IR spectra to identify functional groups',
              'Practice with unknown identification'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Combining IR and MS data. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'infra6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Interpreting IR spectra to identify functional groups**
- **Analyzing mass spectra for molecular weight and fragments**
- **Combining IR and MS data**
- **Practice with unknown identification**
      `
    },
    {
      id: 'infra6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Practice with unknown identification',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Practice with unknown identification'
          }
        ]
      }
    },
    {
      id: 'infra6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting IR spectra to identify…',
            options: ['Interpreting IR spectra to identify functional groups', 'Analyzing mass spectra for molecular weight and fragments', 'Practice with unknown identification', 'Combining IR and MS data']
          },
          {
            label: 'Analyzing mass spectra for molecular…',
            options: ['Practice with unknown identification', 'Interpreting IR spectra to identify functional groups', 'Combining IR and MS data', 'Analyzing mass spectra for molecular weight and fragments']
          },
          {
            label: 'Combining IR and MS data',
            options: ['Practice with unknown identification', 'Combining IR and MS data', 'Analyzing mass spectra for molecular weight and fragments', 'Interpreting IR spectra to identify functional groups']
          }
        ],
        correctAnswers: ['Interpreting IR spectra to identify functional groups', 'Analyzing mass spectra for molecular weight and fragments', 'Combining IR and MS data'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Interpreting IR spectra to identify functional groups. Analyzing mass spectra for molecular weight and fragments. Combining IR and MS data.'
      }
    }
  ]
}
