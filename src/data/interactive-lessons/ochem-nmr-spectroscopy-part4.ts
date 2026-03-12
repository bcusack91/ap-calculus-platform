export const oChemNMRPart4Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s4-intro',
      type: 'text' as const,
      content: `
# ¹³C NMR

**Part 4 of 7 — ¹³C NMR**

### 1. ¹³C NMR

one signal per unique carbon environment

### 2. No splitting in broadband-decoupled ¹³C NMR

No splitting in broadband-decoupled ¹³C NMR

### 3. DEPT

distinguishes CH₃, CH₂, CH, and quaternary C

### 4. Chemical shifts span 0-220 ppm

Chemical shifts span 0-220 ppm
      `
    },
    {
      id: 'nmr-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes ¹³C NMR?',
            options: [
              'one signal per unique carbon environment',
              'No splitting in broadband-decoupled ¹³C NMR',
              'Chemical shifts span 0-220 ppm',
              'distinguishes CH₃, CH₂, CH, and quaternary C'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ¹³C NMR: one signal per unique carbon environment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ¹³C NMR, which explains DEPT?',
            options: [
              'distinguishes CH₃, CH₂, CH, and quaternary C',
              'Chemical shifts span 0-220 ppm',
              'one signal per unique carbon environment',
              'No splitting in broadband-decoupled ¹³C NMR'
            ],
            correctAnswer: 0,
            explanation: 'Correct — DEPT: distinguishes CH₃, CH₂, CH, and quaternary C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **¹³C NMR**: one signal per unique carbon environment
- **No splitting in broadband-decoupled ¹³C NMR**
- **DEPT**: distinguishes CH₃, CH₂, CH, and quaternary C
- **Chemical shifts span 0-220 ppm**
      `
    },
    {
      id: 'nmr-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ¹³c nmr?',
            options: [
              'Chemical shifts span 0-220 ppm',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Chemical shifts span 0-220 ppm'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '¹³C NMR',
            options: ['one signal per unique carbon environment', 'No splitting in broadband-decoupled ¹³C NMR', 'Chemical shifts span 0-220 ppm', 'distinguishes CH₃, CH₂, CH, and quaternary C']
          },
          {
            label: 'DEPT',
            options: ['distinguishes CH₃, CH₂, CH, and quaternary C', 'No splitting in broadband-decoupled ¹³C NMR', 'Chemical shifts span 0-220 ppm', 'one signal per unique carbon environment']
          }
        ],
        correctAnswers: ['one signal per unique carbon environment', 'distinguishes CH₃, CH₂, CH, and quaternary C'],
        hint1: 'Think about what each concept specifically describes in ¹³C NMR.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ¹³C NMR describes a specific idea. ¹³C NMR: one signal per unique carbon environment. DEPT: distinguishes CH₃, CH₂, CH, and quaternary C.'
      }
    }
  ]
}
