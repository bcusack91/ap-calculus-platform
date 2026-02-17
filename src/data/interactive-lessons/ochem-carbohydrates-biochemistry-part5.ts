export const oChemCarbsPart5Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo5-intro',
      type: 'text' as const,
      content: `
# Polysaccharides

**Part 5 of 7 — Polysaccharides**

### 1. Starch

amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)

### 2. Glycogen

highly branched α-1,4 + α-1,6 (animal storage)

### 3. Cellulose

β-1,4 glucose (structural, not digestible)

### 4. Chitin

β-1,4 N-acetylglucosamine (arthropod exoskeletons)
      `
    },
    {
      id: 'carbo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Starch" refer to in this topic?',
            options: [
              'β-1,4 N-acetylglucosamine (arthropod exoskeletons)',
              'amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)',
              'highly branched α-1,4 + α-1,6 (animal storage)',
              'β-1,4 glucose (structural, not digestible)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Starch: amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Cellulose?',
            options: [
              'β-1,4 N-acetylglucosamine (arthropod exoskeletons)',
              'highly branched α-1,4 + α-1,6 (animal storage)',
              'amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)',
              'β-1,4 glucose (structural, not digestible)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cellulose: β-1,4 glucose (structural, not digestible). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'carbo5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Starch**: amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)
- **Glycogen**: highly branched α-1,4 + α-1,6 (animal storage)
- **Cellulose**: β-1,4 glucose (structural, not digestible)
- **Chitin**: β-1,4 N-acetylglucosamine (arthropod exoskeletons)
      `
    },
    {
      id: 'carbo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polysaccharides?',
            options: [
              'β-1,4 N-acetylglucosamine (arthropod exoskeletons)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Chitin: β-1,4 N-acetylglucosamine (arthropod exoskeletons)'
          }
        ]
      }
    },
    {
      id: 'carbo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Starch',
            options: ['β-1,4 glucose (structural, not digestible)', 'highly branched α-1,4 + α-1,6 (animal storage)', 'β-1,4 N-acetylglucosamine (arthropod exoskeletons)', 'amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)']
          },
          {
            label: 'Glycogen',
            options: ['β-1,4 glucose (structural, not digestible)', 'amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)', 'β-1,4 N-acetylglucosamine (arthropod exoskeletons)', 'highly branched α-1,4 + α-1,6 (animal storage)']
          },
          {
            label: 'Cellulose',
            options: ['β-1,4 glucose (structural, not digestible)', 'highly branched α-1,4 + α-1,6 (animal storage)', 'amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)', 'β-1,4 N-acetylglucosamine (arthropod exoskeletons)']
          }
        ],
        correctAnswers: ['amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)', 'highly branched α-1,4 + α-1,6 (animal storage)', 'β-1,4 glucose (structural, not digestible)'],
        hint1: 'Think about what each concept specifically describes in Polysaccharides.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polysaccharides describes a specific idea. Starch: amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6). Glycogen: highly branched α-1,4 + α-1,6 (animal storage). Cellulose: β-1,4 glucose (structural, not digestible).'
      }
    }
  ]
}
