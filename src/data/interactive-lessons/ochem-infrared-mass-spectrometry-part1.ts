export const oChemIRMSPart1Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Infrared Mass Spectrometry

**Part 1 of 7 — Introduction to Spectroscopy**

### 1. Spectroscopy

using electromagnetic radiation to determine structure

### 2. Four main techniques

IR, MS, ¹H NMR, ¹³C NMR

### 3. Each gives different structural information

Each gives different structural information

### 4. Combined data reveals complete molecular structure

Combined data reveals complete molecular structure
      `
    },
    {
      id: 'infra1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to spectroscopy?',
            options: [
              'Spectroscopy',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Spectroscopy: using electromagnetic radiation to determine structure'
          },
          {
            question: 'In the context of introduction to spectroscopy, which is accurate?',
            options: [
              'Each gives different structural information',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Each gives different structural information'
          }
        ]
      }
    },
    {
      id: 'infra1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Spectroscopy**: using electromagnetic radiation to determine structure
- **Four main techniques**: IR, MS, ¹H NMR, ¹³C NMR
- **Each gives different structural information**
- **Combined data reveals complete molecular structure**
      `
    },
    {
      id: 'infra1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to spectroscopy?',
            options: [
              'Combined data reveals complete molecular structure',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Combined data reveals complete molecular structure'
          }
        ]
      }
    },
    {
      id: 'infra1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spectroscopy',
            options: ['using electromagnetic radiation to determine struc', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Four main techniques',
            options: ['IR, MS, ¹H NMR, ¹³C NMR', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Each gives different structural information',
            options: ['Each gives different structural information', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['using electromagnetic radiation to determine struc', 'IR, MS, ¹H NMR, ¹³C NMR', 'Each gives different structural information'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Spectroscopy.'
      }
    }
  ]
}
