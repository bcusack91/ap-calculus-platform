export const psychBrainPart4Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo4-intro',
      type: 'text' as const,
      content: `
# ## Brain Structure & Function

**Part 4 of 7 — Brain Structure & Function**

### 1. Brainstem

medulla (breathing), pons, reticular formation

### 2. Cerebellum

coordination and balance

### 3. Limbic system

amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)

### 4. Cerebral cortex

frontal, parietal, temporal, occipital lobes
      `
    },
    {
      id: 'biolo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of brain structure & function?',
            options: [
              'Brainstem',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Brainstem: medulla (breathing), pons, reticular formation'
          },
          {
            question: 'In the context of brain structure & function, which is accurate?',
            options: [
              'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Limbic system: amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)'
          }
        ]
      }
    },
    {
      id: 'biolo4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Brainstem**: medulla (breathing), pons, reticular formation
- **Cerebellum**: coordination and balance
- **Limbic system**: amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)
- **Cerebral cortex**: frontal, parietal, temporal, occipital lobes
      `
    },
    {
      id: 'biolo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to brain structure & function?',
            options: [
              'frontal, parietal, temporal, occipital lobes',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cerebral cortex: frontal, parietal, temporal, occipital lobes'
          }
        ]
      }
    },
    {
      id: 'biolo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brainstem',
            options: ['medulla (breathing), pons, reticular formation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cerebellum',
            options: ['coordination and balance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Limbic system',
            options: ['amygdala (fear), hippocampus (memory), hypothalamu', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['medulla (breathing), pons, reticular formation', 'coordination and balance', 'amygdala (fear), hippocampus (memory), hypothalamu'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Brain Structure & Function.'
      }
    }
  ]
}
