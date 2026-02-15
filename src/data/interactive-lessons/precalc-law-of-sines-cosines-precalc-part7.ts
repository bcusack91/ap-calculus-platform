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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Navigation',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Navigation: finding distances using bearings and angles'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'resolving and combining forces',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Force vectors: resolving and combining forces'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Navigation',
            options: ['finding distances using bearings and angles', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Surveying',
            options: ['determining heights and distances indirectly', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Force vectors',
            options: ['resolving and combining forces', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['finding distances using bearings and angles', 'determining heights and distances indirectly', 'resolving and combining forces'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
