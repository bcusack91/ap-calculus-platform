export const precalcLawSinesCosinesPart7Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'law-o7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Navigation" refer to in precalculus?',
            options: [
              'resolving and combining forces',
              'Real-world problems often involve oblique (non-right) triangles',
              'finding distances using bearings and angles',
              'determining heights and distances indirectly'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Navigation: finding distances using bearings and angles. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Force vectors?',
            options: [
              'Real-world problems often involve oblique (non-right) triangles',
              'determining heights and distances indirectly',
              'finding distances using bearings and angles',
              'resolving and combining forces'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Force vectors: resolving and combining forces. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'law-o7-detail',
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
      id: 'law-o7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'law-o7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Navigation',
            options: ['determining heights and distances indirectly', 'finding distances using bearings and angles', 'resolving and combining forces', 'Real-world problems often involve oblique (non-right) triangles']
          },
          {
            label: 'Surveying',
            options: ['Real-world problems often involve oblique (non-right) triangles', 'resolving and combining forces', 'finding distances using bearings and angles', 'determining heights and distances indirectly']
          },
          {
            label: 'Force vectors',
            options: ['determining heights and distances indirectly', 'resolving and combining forces', 'finding distances using bearings and angles', 'Real-world problems often involve oblique (non-right) triangles']
          }
        ],
        correctAnswers: ['finding distances using bearings and angles', 'determining heights and distances indirectly', 'resolving and combining forces'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Navigation: finding distances using bearings and angles. Surveying: determining heights and distances indirectly. Force vectors: resolving and combining forces.'
      }
    }
  ]
}
