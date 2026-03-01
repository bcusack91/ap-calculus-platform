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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Gestalt principles?',
            options: [
              'proximity, similarity, closure, continuity, figure-ground',
              'Top-down processing uses expectations',
              'Bottom-up processing starts with raw sensory data',
              'We organize sensory input into meaningful patterns'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Gestalt principles: proximity, similarity, closure, continuity, figure-ground. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Perception & Attention, which explains Top-down processing uses expectations?',
            options: [
              'Top-down processing uses expectations',
              'We organize sensory input into meaningful patterns',
              'proximity, similarity, closure, continuity, figure-ground',
              'Bottom-up processing starts with raw sensory data'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Top-down processing uses expectations. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce1-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gestalt principles',
            options: ['proximity, similarity, closure, continuity, figure-ground', 'We organize sensory input into meaningful patterns', 'Top-down processing uses expectations', 'Bottom-up processing starts with raw sensory data']
          },
          {
            label: 'We organize sensory input into…',
            options: ['proximity, similarity, closure, continuity, figure-ground', 'Top-down processing uses expectations', 'We organize sensory input into meaningful patterns', 'Bottom-up processing starts with raw sensory data']
          },
          {
            label: 'Top-down processing uses expectations',
            options: ['Bottom-up processing starts with raw sensory data', 'proximity, similarity, closure, continuity, figure-ground', 'We organize sensory input into meaningful patterns', 'Top-down processing uses expectations']
          }
        ],
        correctAnswers: ['proximity, similarity, closure, continuity, figure-ground', 'We organize sensory input into meaningful patterns', 'Top-down processing uses expectations'],
        hint1: 'Think about what each concept specifically describes in Perception & Attention.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Perception & Attention describes a specific idea. Gestalt principles: proximity, similarity, closure, continuity, figure-ground. We organize sensory input into meaningful patterns. Top-down processing uses expectations.'
      }
    }
  ]
}
