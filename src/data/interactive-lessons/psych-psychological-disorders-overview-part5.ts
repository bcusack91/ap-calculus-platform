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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ocd & ptsd?',
            options: [
              'OCD',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'OCD: obsessions (unwanted thoughts) + compulsions (repetitive behaviors)'
          },
          {
            question: 'In the context of ocd & ptsd, which is accurate?',
            options: [
              'Both involve anxiety but classified separately in DSM-5',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Both involve anxiety but classified separately in DSM-5'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'OCD',
            options: ['obsessions (unwanted thoughts) + compulsions (repe', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'PTSD',
            options: ['flashbacks, nightmares, hypervigilance after traum', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Both involve anxiety but classified separately in DSM-5',
            options: ['Both involve anxiety but classified separately in ', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['obsessions (unwanted thoughts) + compulsions (repe', 'flashbacks, nightmares, hypervigilance after traum', 'Both involve anxiety but classified separately in '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding OCD & PTSD.'
      }
    }
  ]
}
