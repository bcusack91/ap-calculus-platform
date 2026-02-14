export const psychPerceptionPart1Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce1-intro',
      type: 'text' as const,
      content: `
# 🧠 Perception & Attention

**Part 1 of 7 — Perceptual Organization**

### 1. Gestalt principles

proximity, similarity, closure, continuity, figure-ground

### 2. We organize sensory input into meaningful patterns

We organize sensory input into meaningful patterns

### 3. Top-down processing uses expectations

Top-down processing uses expectations

### 4. Bottom-up processing starts with raw sensory data

Bottom-up processing starts with raw sensory data
      `
    },
    {
      id: 'perce1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of perceptual organization?',
            options: [
              'Gestalt principles',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Gestalt principles: proximity, similarity, closure, continuity, figure-ground'
          },
          {
            question: 'In the context of perceptual organization, which is accurate?',
            options: [
              'Top-down processing uses expectations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Top-down processing uses expectations'
          }
        ]
      }
    },
    {
      id: 'perce1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Gestalt principles**: proximity, similarity, closure, continuity, figure-ground
- **We organize sensory input into meaningful patterns**
- **Top-down processing uses expectations**
- **Bottom-up processing starts with raw sensory data**
      `
    },
    {
      id: 'perce1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to perceptual organization?',
            options: [
              'Bottom-up processing starts with raw sensory data',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Bottom-up processing starts with raw sensory data'
          }
        ]
      }
    },
    {
      id: 'perce1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gestalt principles',
            options: ['proximity, similarity, closure, continuity, figure', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'We organize sensory input into meaningful patterns',
            options: ['We organize sensory input into meaningful patterns', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Top-down processing uses expectations',
            options: ['Top-down processing uses expectations', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['proximity, similarity, closure, continuity, figure', 'We organize sensory input into meaningful patterns', 'Top-down processing uses expectations'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Perceptual Organization.'
      }
    }
  ]
}
