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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Carbohydrate chemistry bridges organic…" refer to in this topic?',
            options: [
              'Stereochemistry is crucial for biological function',
              'sugar structure and reactions',
              'Glycosidic bonds are the basis of oligosaccharides',
              'Carbohydrate chemistry bridges organic chemistry and biochemistry'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Carbohydrate chemistry bridges organic chemistry and biochemistry. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Glycosidic bonds are the basis of…?',
            options: [
              'Carbohydrate chemistry bridges organic chemistry and biochemistry',
              'Stereochemistry is crucial for biological function',
              'sugar structure and reactions',
              'Glycosidic bonds are the basis of oligosaccharides'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Glycosidic bonds are the basis of oligosaccharides. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Carbohydrate chemistry bridges organic…',
            options: ['Glycosidic bonds are the basis of oligosaccharides', 'Carbohydrate chemistry bridges organic chemistry and biochemistry', 'Stereochemistry is crucial for biological function', 'sugar structure and reactions']
          },
          {
            label: 'Stereochemistry is crucial for…',
            options: ['Carbohydrate chemistry bridges organic chemistry and biochemistry', 'Stereochemistry is crucial for biological function', 'Glycosidic bonds are the basis of oligosaccharides', 'sugar structure and reactions']
          },
          {
            label: 'Glycosidic bonds are the basis of…',
            options: ['Stereochemistry is crucial for biological function', 'Glycosidic bonds are the basis of oligosaccharides', 'sugar structure and reactions', 'Carbohydrate chemistry bridges organic chemistry and biochemistry']
          }
        ],
        correctAnswers: ['Carbohydrate chemistry bridges organic chemistry and biochemistry', 'Stereochemistry is crucial for biological function', 'Glycosidic bonds are the basis of oligosaccharides'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Carbohydrate chemistry bridges organic chemistry and biochemistry. Stereochemistry is crucial for biological function. Glycosidic bonds are the basis of oligosaccharides.'
      }
    }
  ]
}
