export const oChemCarbsPart7Data = {
  topicSlug: 'carbohydrates-biochemistry',
  sections: [
    {
      id: 'carbo7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Carbohydrate chemistry bridges organic chemistry and biochemistry

Carbohydrate chemistry bridges organic chemistry and biochemistry

### 2. Stereochemistry is crucial for biological function

Stereochemistry is crucial for biological function

### 3. Glycosidic bonds are the basis of oligosaccharides

Glycosidic bonds are the basis of oligosaccharides

### 4. Review

sugar structure and reactions
      `
    },
    {
      id: 'carbo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Carbohydrate chemistry bridges organic chemistry and biochemistry',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Carbohydrate chemistry bridges organic chemistry and biochemistry'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Glycosidic bonds are the basis of oligosaccharides',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Glycosidic bonds are the basis of oligosaccharides'
          }
        ]
      }
    },
    {
      id: 'carbo7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Carbohydrate chemistry bridges organic chemistry and biochemistry**
- **Stereochemistry is crucial for biological function**
- **Glycosidic bonds are the basis of oligosaccharides**
- **Review**: sugar structure and reactions
      `
    },
    {
      id: 'carbo7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'sugar structure and reactions',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: sugar structure and reactions'
          }
        ]
      }
    },
    {
      id: 'carbo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbohydrate chemistry bridges organic chemistry and biochemistry',
            options: ['Carbohydrate chemistry bridges organic chemistry a', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Stereochemistry is crucial for biological function',
            options: ['Stereochemistry is crucial for biological function', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Glycosidic bonds are the basis of oligosaccharides',
            options: ['Glycosidic bonds are the basis of oligosaccharides', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Carbohydrate chemistry bridges organic chemistry a', 'Stereochemistry is crucial for biological function', 'Glycosidic bonds are the basis of oligosaccharides'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
