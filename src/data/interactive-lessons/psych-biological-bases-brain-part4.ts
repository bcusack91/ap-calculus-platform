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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Brainstem?',
            options: [
              'coordination and balance',
              'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)',
              'frontal, parietal, temporal, occipital lobes',
              'medulla (breathing), pons, reticular formation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Brainstem: medulla (breathing), pons, reticular formation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Limbic system:',
            options: [
              'coordination and balance',
              'frontal, parietal, temporal, occipital lobes',
              'medulla (breathing), pons, reticular formation',
              'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limbic system: amygdala (fear), hippocampus (memory), hypothalamus (homeostasis). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brainstem',
            options: ['medulla (breathing), pons, reticular formation', 'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)', 'frontal, parietal, temporal, occipital lobes', 'coordination and balance']
          },
          {
            label: 'Cerebellum',
            options: ['medulla (breathing), pons, reticular formation', 'coordination and balance', 'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)', 'frontal, parietal, temporal, occipital lobes']
          },
          {
            label: 'Limbic system',
            options: ['amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)', 'frontal, parietal, temporal, occipital lobes', 'medulla (breathing), pons, reticular formation', 'coordination and balance']
          }
        ],
        correctAnswers: ['medulla (breathing), pons, reticular formation', 'coordination and balance', 'amygdala (fear), hippocampus (memory), hypothalamus (homeostasis)'],
        hint1: 'Think about what each concept specifically describes in Brain Structure & Function.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Brain Structure & Function describes a specific idea. Brainstem: medulla (breathing), pons, reticular formation. Cerebellum: coordination and balance. Limbic system: amygdala (fear), hippocampus (memory), hypothalamus (homeostasis).'
      }
    }
  ]
}
