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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Circles?',
            options: [
              'Plot by evaluating r at several values of θ',
              'θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)',
              'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)',
              'r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Circles: r = a (centered at origin), r = a cos θ or r = a sin θ (through origin). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polar Equations & Graphs, which explains Symmetry tests?',
            options: [
              'θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)',
              'r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)',
              'Plot by evaluating r at several values of θ',
              'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Symmetry tests: replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circles',
            options: ['θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)', 'Plot by evaluating r at several values of θ', 'r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)', 'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)']
          },
          {
            label: 'Lines',
            options: ['replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)', 'r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)', 'Plot by evaluating r at several values of θ', 'θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)']
          },
          {
            label: 'Symmetry tests',
            options: ['r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)', 'Plot by evaluating r at several values of θ', 'θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)', 'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)']
          }
        ],
        correctAnswers: ['r = a (centered at origin), r = a cos θ or r = a sin θ (through origin)', 'θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal)', 'replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin)'],
        hint1: 'Think about what each concept specifically describes in Polar Equations & Graphs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polar Equations & Graphs describes a specific idea. Circles: r = a (centered at origin), r = a cos θ or r = a sin θ (through origin). Lines: θ = c (through the pole), r = a/cos θ (vertical), r = a/sin θ (horizontal). Symmetry tests: replace θ with -θ (x-axis), θ with π-θ (y-axis), r with -r (origin).'
      }
    }
  ]
}
