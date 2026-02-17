export const bioPhotosynthesisPart6Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot6-intro-p6',
      type: 'text' as const,
      content: `
# ## Photosynthesis: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Interpreting absorption spectra
2. Predicting effects of light color on photosynthesis rate
3. Experimental design with photosynthesis variables
4. Calculating net vs gross photosynthesis
      `
    },
    {
      id: 'phot6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Interpreting absorption spectra?',
            options: [
              'Interpreting absorption spectra',
              'Calculating net vs gross photosynthesis',
              'Predicting effects of light color on photosynthesis rate',
              'Experimental design with photosynthesis variables'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Interpreting absorption spectra. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Photosynthesis: Problem-Solving Workshop, which explains Experimental design with photosynthesis…?',
            options: [
              'Experimental design with photosynthesis variables',
              'Calculating net vs gross photosynthesis',
              'Interpreting absorption spectra',
              'Predicting effects of light color on photosynthesis rate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Experimental design with photosynthesis variables. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Interpreting absorption spectra**
- **Predicting effects of light color on photosynthesis rate**
- **Experimental design with photosynthesis variables**
- **Calculating net vs gross photosynthesis**
      `
    },
    {
      id: 'phot6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Calculating net vs gross photosynthesis?',
            options: [
              'Interpreting absorption spectra',
              'Experimental design with photosynthesis variables',
              'Calculating net vs gross photosynthesis',
              'Predicting effects of light color on photosynthesis rate'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Calculating net vs gross photosynthesis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Interpreting absorption spectra',
            options: ['Predicting effects of light color on photosynthesis rate', 'Calculating net vs gross photosynthesis', 'Experimental design with photosynthesis variables', 'Interpreting absorption spectra']
          },
          {
            label: 'Predicting effects of light color on…',
            options: ['Predicting effects of light color on photosynthesis rate', 'Calculating net vs gross photosynthesis', 'Interpreting absorption spectra', 'Experimental design with photosynthesis variables']
          },
          {
            label: 'Experimental design with photosynthesis…',
            options: ['Predicting effects of light color on photosynthesis rate', 'Calculating net vs gross photosynthesis', 'Interpreting absorption spectra', 'Experimental design with photosynthesis variables']
          }
        ],
        correctAnswers: ['Interpreting absorption spectra', 'Predicting effects of light color on photosynthesis rate', 'Experimental design with photosynthesis variables'],
        hint1: 'Think about what each concept specifically describes in Photosynthesis: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Photosynthesis: Problem-Solving Workshop describes a specific idea. Interpreting absorption spectra. Predicting effects of light color on photosynthesis rate. Experimental design with photosynthesis variables.'
      }
    }
  ]
}
