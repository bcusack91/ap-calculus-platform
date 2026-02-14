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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of applications?',
            options: [
              'Phobias',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Phobias: learned through classical conditioning'
          },
          {
            question: 'In the context of applications, which is accurate?',
            options: [
              'treating phobias',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Systematic desensitization: treating phobias'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phobias',
            options: ['learned through classical conditioning', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Taste aversion',
            options: ['one-trial learning (Garcia effect)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Systematic desensitization',
            options: ['treating phobias', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['learned through classical conditioning', 'one-trial learning (Garcia effect)', 'treating phobias'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Applications.'
      }
    }
  ]
}
