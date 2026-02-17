export const precalcLawSinesCosinesPart5Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o5-intro',
      type: 'text' as const,
      content: `
# Applications of Triangle Solving

**Part 5 of 7 — Applications of Triangle Solving**

### 1. Navigation

finding distances using bearings and angles

### 2. Surveying

determining heights and distances indirectly

### 3. Force vectors

resolving and combining forces

### 4. Real-world problems often involve oblique (non-right) triangles

Real-world problems often involve oblique (non-right) triangles
      `
    },
    {
      id: 'law-o5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Navigation" refer to in precalculus?',
            options: [
              'Real-world problems often involve oblique (non-right) triangles',
              'finding distances using bearings and angles',
              'determining heights and distances indirectly',
              'resolving and combining forces'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Navigation: finding distances using bearings and angles. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Force vectors?',
            options: [
              'resolving and combining forces',
              'Real-world problems often involve oblique (non-right) triangles',
              'determining heights and distances indirectly',
              'finding distances using bearings and angles'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Force vectors: resolving and combining forces. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'law-o5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Navigation**: finding distances using bearings and angles
- **Surveying**: determining heights and distances indirectly
- **Force vectors**: resolving and combining forces
- **Real-world problems often involve oblique (non-right) triangles**
      `
    },
    {
      id: 'law-o5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applications of triangle solving?',
            options: [
              'Real-world problems often involve oblique (non-right) triangles',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Real-world problems often involve oblique (non-right) triangles'
          }
        ]
      }
    },
    {
      id: 'law-o5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Navigation',
            options: ['finding distances using bearings and angles', 'resolving and combining forces', 'determining heights and distances indirectly', 'Real-world problems often involve oblique (non-right) triangles']
          },
          {
            label: 'Surveying',
            options: ['determining heights and distances indirectly', 'resolving and combining forces', 'finding distances using bearings and angles', 'Real-world problems often involve oblique (non-right) triangles']
          },
          {
            label: 'Force vectors',
            options: ['resolving and combining forces', 'determining heights and distances indirectly', 'finding distances using bearings and angles', 'Real-world problems often involve oblique (non-right) triangles']
          }
        ],
        correctAnswers: ['finding distances using bearings and angles', 'determining heights and distances indirectly', 'resolving and combining forces'],
        hint1: 'Think about what each concept specifically describes in Applications of Triangle Solving.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications of Triangle Solving describes a specific idea. Navigation: finding distances using bearings and angles. Surveying: determining heights and distances indirectly. Force vectors: resolving and combining forces.'
      }
    }
  ]
}
