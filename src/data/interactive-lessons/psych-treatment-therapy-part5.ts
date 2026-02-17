export const psychTreatmentPart5Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat5-intro',
      type: 'text' as const,
      content: `
# ## Evaluating Treatments

**Part 5 of 7 — Evaluating Treatments**

### 1. Meta-analysis

combining results of many studies

### 2. Common factors

therapeutic alliance most important predictor

### 3. Evidence-based practice

using research to guide treatment

### 4. Some therapies are more effective for specific disorders

Some therapies are more effective for specific disorders
      `
    },
    {
      id: 'treat5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Meta-analysis" refer to in psychology?',
            options: [
              'Some therapies are more effective for specific disorders',
              'therapeutic alliance most important predictor',
              'using research to guide treatment',
              'combining results of many studies'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Meta-analysis: combining results of many studies. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Evaluating Treatments, which explains Evidence-based practice?',
            options: [
              'combining results of many studies',
              'Some therapies are more effective for specific disorders',
              'therapeutic alliance most important predictor',
              'using research to guide treatment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evidence-based practice: using research to guide treatment. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'treat5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Meta-analysis**: combining results of many studies
- **Common factors**: therapeutic alliance most important predictor
- **Evidence-based practice**: using research to guide treatment
- **Some therapies are more effective for specific disorders**
      `
    },
    {
      id: 'treat5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to evaluating treatments?',
            options: [
              'Some therapies are more effective for specific disorders',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Some therapies are more effective for specific disorders'
          }
        ]
      }
    },
    {
      id: 'treat5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Meta-analysis',
            options: ['therapeutic alliance most important predictor', 'combining results of many studies', 'using research to guide treatment', 'Some therapies are more effective for specific disorders']
          },
          {
            label: 'Common factors',
            options: ['using research to guide treatment', 'therapeutic alliance most important predictor', 'Some therapies are more effective for specific disorders', 'combining results of many studies']
          },
          {
            label: 'Evidence-based practice',
            options: ['therapeutic alliance most important predictor', 'combining results of many studies', 'Some therapies are more effective for specific disorders', 'using research to guide treatment']
          }
        ],
        correctAnswers: ['combining results of many studies', 'therapeutic alliance most important predictor', 'using research to guide treatment'],
        hint1: 'Think about what each concept specifically describes in Evaluating Treatments.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evaluating Treatments describes a specific idea. Meta-analysis: combining results of many studies. Common factors: therapeutic alliance most important predictor. Evidence-based practice: using research to guide treatment.'
      }
    }
  ]
}
