export const oChemSNPart6Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting SN1 vs SN2 from reaction conditions

Predicting SN1 vs SN2 from reaction conditions

### 2. Drawing mechanisms with curved arrows

Drawing mechanisms with curved arrows

### 3. Predicting stereochemical outcomes

Predicting stereochemical outcomes

### 4. Analyzing substrate, nucleophile, solvent, and leaving group effects

Analyzing substrate, nucleophile, solvent, and leaving group effects
      `
    },
    {
      id: 'nucle6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Predicting SN1 vs SN2 from reaction…?',
            options: [
              'Analyzing substrate, nucleophile, solvent, and leaving group effects',
              'Predicting stereochemical outcomes',
              'Predicting SN1 vs SN2 from reaction conditions',
              'Drawing mechanisms with curved arrows'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting SN1 vs SN2 from reaction conditions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Predicting stereochemical outcomes?',
            options: [
              'Analyzing substrate, nucleophile, solvent, and leaving group effects',
              'Drawing mechanisms with curved arrows',
              'Predicting SN1 vs SN2 from reaction conditions',
              'Predicting stereochemical outcomes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Predicting stereochemical outcomes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nucle6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting SN1 vs SN2 from reaction conditions**
- **Drawing mechanisms with curved arrows**
- **Predicting stereochemical outcomes**
- **Analyzing substrate, nucleophile, solvent, and leaving group effects**
      `
    },
    {
      id: 'nucle6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Analyzing substrate, nucleophile, solvent, and leaving group effects',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing substrate, nucleophile, solvent, and leaving group effects'
          }
        ]
      }
    },
    {
      id: 'nucle6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting SN1 vs SN2 from reaction…',
            options: ['Drawing mechanisms with curved arrows', 'Predicting SN1 vs SN2 from reaction conditions', 'Predicting stereochemical outcomes', 'Analyzing substrate, nucleophile, solvent, and leaving group effects']
          },
          {
            label: 'Drawing mechanisms with curved arrows',
            options: ['Analyzing substrate, nucleophile, solvent, and leaving group effects', 'Predicting SN1 vs SN2 from reaction conditions', 'Drawing mechanisms with curved arrows', 'Predicting stereochemical outcomes']
          },
          {
            label: 'Predicting stereochemical outcomes',
            options: ['Drawing mechanisms with curved arrows', 'Predicting stereochemical outcomes', 'Analyzing substrate, nucleophile, solvent, and leaving group effects', 'Predicting SN1 vs SN2 from reaction conditions']
          }
        ],
        correctAnswers: ['Predicting SN1 vs SN2 from reaction conditions', 'Drawing mechanisms with curved arrows', 'Predicting stereochemical outcomes'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting SN1 vs SN2 from reaction conditions. Drawing mechanisms with curved arrows. Predicting stereochemical outcomes.'
      }
    }
  ]
}
