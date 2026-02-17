export const psychDisordersPart5Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych5-intro',
      type: 'text' as const,
      content: `
# ## OCD & PTSD

**Part 5 of 7 — OCD & PTSD**

### 1. OCD

obsessions (unwanted thoughts) + compulsions (repetitive behaviors)

### 2. PTSD

flashbacks, nightmares, hypervigilance after trauma

### 3. Both involve anxiety but classified separately in DSM-5

Both involve anxiety but classified separately in DSM-5

### 4. Treatment

CBT, exposure therapy, SSRIs
      `
    },
    {
      id: 'psych5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "OCD" refer to in psychology?',
            options: [
              'flashbacks, nightmares, hypervigilance after trauma',
              'obsessions (unwanted thoughts) + compulsions (repetitive behaviors)',
              'CBT, exposure therapy, SSRIs',
              'Both involve anxiety but classified separately in DSM-5'
            ],
            correctAnswer: 1,
            explanation: 'Correct — OCD: obsessions (unwanted thoughts) + compulsions (repetitive behaviors). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of OCD & PTSD, which explains Both involve anxiety but classified…?',
            options: [
              'Both involve anxiety but classified separately in DSM-5',
              'CBT, exposure therapy, SSRIs',
              'obsessions (unwanted thoughts) + compulsions (repetitive behaviors)',
              'flashbacks, nightmares, hypervigilance after trauma'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Both involve anxiety but classified separately in DSM-5. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'psych5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **OCD**: obsessions (unwanted thoughts) + compulsions (repetitive behaviors)
- **PTSD**: flashbacks, nightmares, hypervigilance after trauma
- **Both involve anxiety but classified separately in DSM-5**
- **Treatment**: CBT, exposure therapy, SSRIs
      `
    },
    {
      id: 'psych5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ocd & ptsd?',
            options: [
              'CBT, exposure therapy, SSRIs',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Treatment: CBT, exposure therapy, SSRIs'
          }
        ]
      }
    },
    {
      id: 'psych5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'OCD',
            options: ['obsessions (unwanted thoughts) + compulsions (repetitive behaviors)', 'flashbacks, nightmares, hypervigilance after trauma', 'CBT, exposure therapy, SSRIs', 'Both involve anxiety but classified separately in DSM-5']
          },
          {
            label: 'PTSD',
            options: ['Both involve anxiety but classified separately in DSM-5', 'CBT, exposure therapy, SSRIs', 'obsessions (unwanted thoughts) + compulsions (repetitive behaviors)', 'flashbacks, nightmares, hypervigilance after trauma']
          },
          {
            label: 'Treatment',
            options: ['CBT, exposure therapy, SSRIs', 'obsessions (unwanted thoughts) + compulsions (repetitive behaviors)', 'Both involve anxiety but classified separately in DSM-5', 'flashbacks, nightmares, hypervigilance after trauma']
          }
        ],
        correctAnswers: ['obsessions (unwanted thoughts) + compulsions (repetitive behaviors)', 'flashbacks, nightmares, hypervigilance after trauma', 'CBT, exposure therapy, SSRIs'],
        hint1: 'Think about what each concept specifically describes in OCD & PTSD.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in OCD & PTSD describes a specific idea. OCD: obsessions (unwanted thoughts) + compulsions (repetitive behaviors). PTSD: flashbacks, nightmares, hypervigilance after trauma. Treatment: CBT, exposure therapy, SSRIs.'
      }
    }
  ]
}
