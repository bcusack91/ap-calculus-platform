export const psychClassicalPart5Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class5-intro',
      type: 'text' as const,
      content: `
# ## Applications

**Part 5 of 7 — Applications**

### 1. Phobias

learned through classical conditioning

### 2. Taste aversion

one-trial learning (Garcia effect)

### 3. Systematic desensitization

treating phobias

### 4. Advertising

pairing products with pleasant stimuli
      `
    },
    {
      id: 'class5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Phobias?',
            options: [
              'pairing products with pleasant stimuli',
              'treating phobias',
              'learned through classical conditioning',
              'one-trial learning (Garcia effect)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phobias: learned through classical conditioning. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Systematic desensitization:',
            options: [
              'one-trial learning (Garcia effect)',
              'learned through classical conditioning',
              'treating phobias',
              'pairing products with pleasant stimuli'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Systematic desensitization: treating phobias. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Phobias**: learned through classical conditioning
- **Taste aversion**: one-trial learning (Garcia effect)
- **Systematic desensitization**: treating phobias
- **Advertising**: pairing products with pleasant stimuli
      `
    },
    {
      id: 'class5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applications?',
            options: [
              'pairing products with pleasant stimuli',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Advertising: pairing products with pleasant stimuli'
          }
        ]
      }
    },
    {
      id: 'class5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phobias',
            options: ['one-trial learning (Garcia effect)', 'learned through classical conditioning', 'treating phobias', 'pairing products with pleasant stimuli']
          },
          {
            label: 'Taste aversion',
            options: ['one-trial learning (Garcia effect)', 'learned through classical conditioning', 'treating phobias', 'pairing products with pleasant stimuli']
          },
          {
            label: 'Systematic desensitization',
            options: ['treating phobias', 'pairing products with pleasant stimuli', 'learned through classical conditioning', 'one-trial learning (Garcia effect)']
          }
        ],
        correctAnswers: ['learned through classical conditioning', 'one-trial learning (Garcia effect)', 'treating phobias'],
        hint1: 'Think about what each concept specifically describes in Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications describes a specific idea. Phobias: learned through classical conditioning. Taste aversion: one-trial learning (Garcia effect). Systematic desensitization: treating phobias.'
      }
    }
  ]
}
