export const psychAdolescencePart5Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole5-intro',
      type: 'text' as const,
      content: `
# ## Death & Dying

**Part 5 of 7 — Death & Dying**

### 1. Kübler-Ross stages of grief

denial, anger, bargaining, depression, acceptance

### 2. Grief is individual — not everyone follows these stages

Grief is individual — not everyone follows these stages

### 3. Cultural differences in death and mourning

Cultural differences in death and mourning

### 4. Hospice and palliative care

Hospice and palliative care
      `
    },
    {
      id: 'adole5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of death & dying?',
            options: [
              'Kübler-Ross stages of grief',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Kübler-Ross stages of grief: denial, anger, bargaining, depression, acceptance'
          },
          {
            question: 'In the context of death & dying, which is accurate?',
            options: [
              'Cultural differences in death and mourning',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cultural differences in death and mourning'
          }
        ]
      }
    },
    {
      id: 'adole5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Kübler-Ross stages of grief**: denial, anger, bargaining, depression, acceptance
- **Grief is individual — not everyone follows these stages**
- **Cultural differences in death and mourning**
- **Hospice and palliative care**
      `
    },
    {
      id: 'adole5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to death & dying?',
            options: [
              'Hospice and palliative care',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Hospice and palliative care'
          }
        ]
      }
    },
    {
      id: 'adole5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Kübler-Ross stages of grief',
            options: ['denial, anger, bargaining, depression, acceptance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Grief is individual — not everyone follows these stages',
            options: ['Grief is individual — not everyone follows these s', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cultural differences in death and mourning',
            options: ['Cultural differences in death and mourning', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['denial, anger, bargaining, depression, acceptance', 'Grief is individual — not everyone follows these s', 'Cultural differences in death and mourning'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Death & Dying.'
      }
    }
  ]
}
