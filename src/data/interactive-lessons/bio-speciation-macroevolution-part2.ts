export const bioSpeciationPart2Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec2-intro-p2',
      type: 'text' as const,
      content: `
# ## Allopatric Speciation

**Part 2 of 7 — Allopatric Speciation**

1. Geographic isolation separates populations
2. Populations evolve independently
3. Examples: Grand Canyon squirrels, Darwin's finches
4. Most common form of speciation
      `
    },
    {
      id: 'spec2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Geographic isolation separates…" refer to in biology?',
            options: [
              'Most common form of speciation',
              'Geographic isolation separates populations',
              'Grand Canyon squirrels, Darwin\'s finches',
              'Populations evolve independently'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Geographic isolation separates populations. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Examples:',
            options: [
              'Geographic isolation separates populations',
              'Grand Canyon squirrels, Darwin\'s finches',
              'Populations evolve independently',
              'Most common form of speciation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Examples: Grand Canyon squirrels, Darwin\'s finches. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Geographic isolation separates populations**
- **Populations evolve independently**
- **Examples**: Grand Canyon squirrels, Darwin's finches
- **Most common form of speciation**
      `
    },
    {
      id: 'spec2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Most common form of speciation?',
            options: [
              'Most common form of speciation',
              'Geographic isolation separates populations',
              'Grand Canyon squirrels, Darwin\'s finches',
              'Populations evolve independently'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Most common form of speciation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geographic isolation separates…',
            options: ['Most common form of speciation', 'Grand Canyon squirrels, Darwin\'s finches', 'Populations evolve independently', 'Geographic isolation separates populations']
          },
          {
            label: 'Populations evolve independently',
            options: ['Populations evolve independently', 'Most common form of speciation', 'Grand Canyon squirrels, Darwin\'s finches', 'Geographic isolation separates populations']
          },
          {
            label: 'Examples',
            options: ['Most common form of speciation', 'Geographic isolation separates populations', 'Grand Canyon squirrels, Darwin\'s finches', 'Populations evolve independently']
          }
        ],
        correctAnswers: ['Geographic isolation separates populations', 'Populations evolve independently', 'Grand Canyon squirrels, Darwin\'s finches'],
        hint1: 'Think about what each concept specifically describes in Allopatric Speciation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Allopatric Speciation describes a specific idea. Geographic isolation separates populations. Populations evolve independently. Examples: Grand Canyon squirrels, Darwin\'s finches.'
      }
    }
  ]
}
