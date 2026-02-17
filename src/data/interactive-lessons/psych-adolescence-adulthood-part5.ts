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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Kübler-Ross stages of grief?',
            options: [
              'Grief is individual — not everyone follows these stages',
              'Cultural differences in death and mourning',
              'denial, anger, bargaining, depression, acceptance',
              'Hospice and palliative care'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Kübler-Ross stages of grief: denial, anger, bargaining, depression, acceptance. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Death & Dying, which explains Cultural differences in death and…?',
            options: [
              'Cultural differences in death and mourning',
              'Grief is individual — not everyone follows these stages',
              'denial, anger, bargaining, depression, acceptance',
              'Hospice and palliative care'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cultural differences in death and mourning. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Kübler-Ross stages of grief',
            options: ['denial, anger, bargaining, depression, acceptance', 'Hospice and palliative care', 'Grief is individual — not everyone follows these stages', 'Cultural differences in death and mourning']
          },
          {
            label: 'Grief is individual — not everyone…',
            options: ['Hospice and palliative care', 'Grief is individual — not everyone follows these stages', 'denial, anger, bargaining, depression, acceptance', 'Cultural differences in death and mourning']
          },
          {
            label: 'Cultural differences in death and…',
            options: ['Cultural differences in death and mourning', 'denial, anger, bargaining, depression, acceptance', 'Hospice and palliative care', 'Grief is individual — not everyone follows these stages']
          }
        ],
        correctAnswers: ['denial, anger, bargaining, depression, acceptance', 'Grief is individual — not everyone follows these stages', 'Cultural differences in death and mourning'],
        hint1: 'Think about what each concept specifically describes in Death & Dying.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Death & Dying describes a specific idea. Kübler-Ross stages of grief: denial, anger, bargaining, depression, acceptance. Grief is individual — not everyone follows these stages. Cultural differences in death and mourning.'
      }
    }
  ]
}
