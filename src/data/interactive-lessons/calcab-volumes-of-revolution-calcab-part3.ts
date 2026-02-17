export const calcABVolumesPart3Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum3-intro',
      type: 'text' as const,
      content: `
# Revolving Around Other Axes

**Part 3 of 7 — Revolving Around Other Axes**

### 1. Revolving about y = k

adjust radii by subtracting k

### 2. Revolving about x = k

integrate with respect to y, adjust radii

### 3. Outer radius = |farther boundary - axis|

Outer radius = |farther boundary - axis|

### 4. Inner radius = |closer boundary - axis|

Inner radius = |closer boundary - axis|
      `
    },
    {
      id: 'volum3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Revolving about y = k" refer to in calculus?',
            options: [
              'adjust radii by subtracting k',
              'Inner radius = |closer boundary - axis|',
              'integrate with respect to y, adjust radii',
              'Outer radius = |farther boundary - axis|'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Revolving about y = k: adjust radii by subtracting k. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Revolving Around Other Axes, which explains Outer radius = |farther boundary - axis|?',
            options: [
              'Outer radius = |farther boundary - axis|',
              'adjust radii by subtracting k',
              'Inner radius = |closer boundary - axis|',
              'integrate with respect to y, adjust radii'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Outer radius = |farther boundary - axis|. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'volum3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Revolving about y = k**: adjust radii by subtracting k
- **Revolving about x = k**: integrate with respect to y, adjust radii
- **Outer radius = |farther boundary - axis|**
- **Inner radius = |closer boundary - axis|**
      `
    },
    {
      id: 'volum3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Revolving Around Other Axes, which correctly describes Inner radius = |closer boundary - axis|?',
            options: [
              'adjust radii by subtracting k',
              'integrate with respect to y, adjust radii',
              'Inner radius = |closer boundary - axis|',
              'Outer radius = |farther boundary - axis|'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Inner radius = |closer boundary - axis|. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'volum3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Revolving about y = k',
            options: ['Outer radius = |farther boundary - axis|', 'adjust radii by subtracting k', 'Inner radius = |closer boundary - axis|', 'integrate with respect to y, adjust radii']
          },
          {
            label: 'Revolving about x = k',
            options: ['integrate with respect to y, adjust radii', 'Inner radius = |closer boundary - axis|', 'adjust radii by subtracting k', 'Outer radius = |farther boundary - axis|']
          }
        ],
        correctAnswers: ['adjust radii by subtracting k', 'integrate with respect to y, adjust radii'],
        hint1: 'Think about what each concept specifically describes in Revolving Around Other Axes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Revolving Around Other Axes describes a specific idea. Revolving about y = k: adjust radii by subtracting k. Revolving about x = k: integrate with respect to y, adjust radii.'
      }
    }
  ]
}
