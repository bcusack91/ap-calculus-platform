export const precalcPolarPart3Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar3-intro',
      type: 'text' as const,
      content: `
# Polar Equations & Graphs

**Part 3 of 7 — Polar Equations & Graphs**

### 1. Circles

r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)

### 2. Lines

θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)

### 3. Symmetry tests

replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)

### 4. Plot by evaluating r at several values of θ

Plot by evaluating r at several values of θ
      `
    },
    {
      id: 'polar3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polar equations & graphs?',
            options: [
              'Circles',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Circles: r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)'
          },
          {
            question: 'In the context of polar equations & graphs, which is accurate?',
            options: [
              'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Symmetry tests: replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)'
          }
        ]
      }
    },
    {
      id: 'polar3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Circles**: r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)
- **Lines**: θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)
- **Symmetry tests**: replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)
- **Plot by evaluating r at several values of θ**
      `
    },
    {
      id: 'polar3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polar equations & graphs?',
            options: [
              'Plot by evaluating r at several values of θ',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Plot by evaluating r at several values of θ'
          }
        ]
      }
    },
    {
      id: 'polar3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circles',
            options: ['r = a (centered at origin), r = a cos θ or r = a s', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Lines',
            options: ['θ = c (through the pole), r = a/cos θ (vertical), ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Symmetry tests',
            options: ['replace θ with -θ (x-axis), θ with π-θ (y-axis), r', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['r = a (centered at origin), r = a cos θ or r = a s', 'θ = c (through the pole), r = a/cos θ (vertical), ', 'replace θ with -θ (x-axis), θ with π-θ (y-axis), r'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polar Equations & Graphs.'
      }
    }
  ]
}
