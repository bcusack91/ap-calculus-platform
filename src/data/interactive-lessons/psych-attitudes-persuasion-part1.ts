export const psychAttitudesPart1Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes & Persuasion

**Part 1 of 7 — Attitude Formation**

### 1. Attitudes

evaluations of people, objects, ideas

### 2. Components

affective (feelings), behavioral (actions), cognitive (beliefs)

### 3. Attitudes predict behavior when specific and strong

Attitudes predict behavior when specific and strong

### 4. Attitudes formed through experience, conditioning, observation

Attitudes formed through experience, conditioning, observation
      `
    },
    {
      id: 'attit1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Attitudes" refer to in psychology?',
            options: [
              'Attitudes formed through experience, conditioning, observation',
              'affective (feelings), behavioral (actions), cognitive (beliefs)',
              'evaluations of people, objects, ideas',
              'Attitudes predict behavior when specific and strong'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Attitudes: evaluations of people, objects, ideas. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Attitudes & Persuasion, which explains Attitudes predict behavior when…?',
            options: [
              'evaluations of people, objects, ideas',
              'affective (feelings), behavioral (actions), cognitive (beliefs)',
              'Attitudes formed through experience, conditioning, observation',
              'Attitudes predict behavior when specific and strong'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Attitudes predict behavior when specific and strong. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'attit1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attitudes**: evaluations of people, objects, ideas
- **Components**: affective (feelings), behavioral (actions), cognitive (beliefs)
- **Attitudes predict behavior when specific and strong**
- **Attitudes formed through experience, conditioning, observation**
      `
    },
    {
      id: 'attit1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to attitude formation?',
            options: [
              'Attitudes formed through experience, conditioning, observation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Attitudes formed through experience, conditioning, observation'
          }
        ]
      }
    },
    {
      id: 'attit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attitudes',
            options: ['evaluations of people, objects, ideas', 'affective (feelings), behavioral (actions), cognitive (beliefs)', 'Attitudes formed through experience, conditioning, observation', 'Attitudes predict behavior when specific and strong']
          },
          {
            label: 'Components',
            options: ['Attitudes formed through experience, conditioning, observation', 'Attitudes predict behavior when specific and strong', 'evaluations of people, objects, ideas', 'affective (feelings), behavioral (actions), cognitive (beliefs)']
          }
        ],
        correctAnswers: ['evaluations of people, objects, ideas', 'affective (feelings), behavioral (actions), cognitive (beliefs)'],
        hint1: 'Think about what each concept specifically describes in Attitudes & Persuasion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Attitudes & Persuasion describes a specific idea. Attitudes: evaluations of people, objects, ideas. Components: affective (feelings), behavioral (actions), cognitive (beliefs).'
      }
    }
  ]
}
