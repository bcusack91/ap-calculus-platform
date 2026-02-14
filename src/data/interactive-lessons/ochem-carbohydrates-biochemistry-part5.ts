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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polysaccharides?',
            options: [
              'Starch',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Starch: amylose (linear α-1,4) and amylopectin (branched α-1,4 + α-1,6)'
          },
          {
            question: 'In the context of polysaccharides, which is accurate?',
            options: [
              'β-1,4 glucose (structural, not digestible)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cellulose: β-1,4 glucose (structural, not digestible)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Starch',
            options: ['amylose (linear α-1,4) and amylopectin (branched α', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Glycogen',
            options: ['highly branched α-1,4 + α-1,6 (animal storage)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cellulose',
            options: ['β-1,4 glucose (structural, not digestible)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['amylose (linear α-1,4) and amylopectin (branched α', 'highly branched α-1,4 + α-1,6 (animal storage)', 'β-1,4 glucose (structural, not digestible)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polysaccharides.'
      }
    }
  ]
}
