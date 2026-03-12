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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spectroscopy?',
            options: [
              'using electromagnetic radiation to determine structure',
              'Each gives different structural information',
              'Combined data reveals complete molecular structure',
              'IR, MS, ¹H NMR, ¹³C NMR'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Spectroscopy: using electromagnetic radiation to determine structure. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Each gives different structural…?',
            options: [
              'IR, MS, ¹H NMR, ¹³C NMR',
              'Combined data reveals complete molecular structure',
              'using electromagnetic radiation to determine structure',
              'Each gives different structural information'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Each gives different structural information. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spectroscopy',
            options: ['Each gives different structural information', 'IR, MS, ¹H NMR, ¹³C NMR', 'using electromagnetic radiation to determine structure', 'Combined data reveals complete molecular structure']
          },
          {
            label: 'Four main techniques',
            options: ['Combined data reveals complete molecular structure', 'Each gives different structural information', 'IR, MS, ¹H NMR, ¹³C NMR', 'using electromagnetic radiation to determine structure']
          }
        ],
        correctAnswers: ['using electromagnetic radiation to determine structure', 'IR, MS, ¹H NMR, ¹³C NMR'],
        hint1: 'Think about what each concept specifically describes in ️ Infrared Mass Spectrometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Infrared Mass Spectrometry describes a specific idea. Spectroscopy: using electromagnetic radiation to determine structure. Four main techniques: IR, MS, ¹H NMR, ¹³C NMR.'
      }
    }
  ]
}
